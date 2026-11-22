import ContactIcons from '../components/ContactIcons.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Contato() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <h1>{t('contato.titulo')}</h1>
      <p className="page-subtitle">{t('contato.subtitulo')}</p>
      <ContactIcons />
      <ContactForm />
    </section>
  );
}
