import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Alert, Button, Textarea, TextInput } from '@mantine/core';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState(null); // 'ok' | 'erro' | 'config'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { nome: '', email: '', mensagem: '' } });

  const onSubmit = async (data) => {
    setStatus(null);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('config');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { nome: data.nome, email: data.email, mensagem: data.mensagem },
        { publicKey }
      );
      setStatus('ok');
      reset();
    } catch {
      setStatus('erro');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        label={t('contato.nome')}
        autoComplete="name"
        error={errors.nome?.message}
        {...register('nome', {
          required: t('contato.erroNomeObrigatorio'),
          minLength: { value: 2, message: t('contato.erroNomeCurto') },
        })}
      />
      <TextInput
        label={t('contato.email')}
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register('email', {
          required: t('contato.erroEmailObrigatorio'),
          pattern: { value: EMAIL_REGEX, message: t('contato.erroEmailInvalido') },
        })}
      />
      <Textarea
        label={t('contato.mensagem')}
        minRows={5}
        autosize
        error={errors.mensagem?.message}
        {...register('mensagem', {
          required: t('contato.erroMensagemObrigatoria'),
          minLength: { value: 10, message: t('contato.erroMensagemCurta') },
          maxLength: { value: 1000, message: t('contato.erroMensagemLonga') },
        })}
      />
      <Button type="submit" loading={isSubmitting}>
        {isSubmitting ? t('contato.enviando') : t('contato.enviar')}
      </Button>

      {status === 'ok' && (
        <Alert color="green" role="status">
          {t('contato.sucesso')}
        </Alert>
      )}
      {status === 'erro' && (
        <Alert color="red" role="alert">
          {t('contato.erroEnvio')}
        </Alert>
      )}
      {status === 'config' && (
        <Alert color="yellow" role="alert">
          {t('contato.erroConfig')}
        </Alert>
      )}
    </form>
  );
}
