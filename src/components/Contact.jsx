import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LangContext.jsx";
import { profile } from "../data/profile.js";
import Icon from "./Icon.jsx";

const env = import.meta.env;
const SERVICE = env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ME = env.VITE_EMAILJS_TEMPLATE_ID_FOR_ME;
const TEMPLATE_SENDER = env.VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER;
const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const links = [
    { icon: "whatsapp", label: "WhatsApp", sub: profile.whatsappLabel, href: `https://wa.me/${profile.whatsapp}` },
    { icon: "instagram", label: "Instagram", sub: `@${profile.instagram}`, href: `https://instagram.com/${profile.instagram}` },
    { icon: "github", label: "GitHub", sub: profile.github, href: `https://github.com/${profile.github}` },
    { icon: "mail", label: "E-mail", sub: profile.email, href: `mailto:${profile.email}` },
  ];

  async function onSubmit(data) {
    if (!SERVICE || !TEMPLATE_ME || !PUBLIC_KEY) {
      setStatus("noConfig");
      return;
    }
    const params = { from_name: data.nome, from_email: data.email, message: data.mensagem, reply_to: data.email };
    try {
      await emailjs.send(SERVICE, TEMPLATE_ME, params, { publicKey: PUBLIC_KEY });
      if (TEMPLATE_SENDER) {
        await emailjs.send(SERVICE, TEMPLATE_SENDER, { ...params, to_email: data.email }, { publicKey: PUBLIC_KEY });
      }
      setStatus("ok");
      reset();
    } catch {
      setStatus("fail");
    }
  }

  return (
    <section id="contato">
      <h2>{c.title}</h2>
      <div className="contact">
        <div className="icons">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="card">
              <Icon name={l.icon} />
              <span>{l.label}<small>{l.sub}</small></span>
            </a>
          ))}
        </div>
        <form className="card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label>
            {c.name}
            <input autoComplete="name" {...register("nome", { required: c.reqName })} />
            <span className="err">{errors.nome?.message}</span>
          </label>
          <label>
            {c.email}
            <input
              type="email"
              autoComplete="email"
              {...register("email", {
                required: c.reqEmail,
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: c.badEmail },
              })}
            />
            <span className="err">{errors.email?.message}</span>
          </label>
          <label>
            {c.message}
            <textarea
              {...register("mensagem", { required: c.reqMsg, minLength: { value: 10, message: c.shortMsg } })}
            />
            <span className="err">{errors.mensagem?.message}</span>
          </label>
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? c.sending : c.send}
          </button>
          <p className={status === "ok" ? "ok" : "err"} role="status">{status && c[status]}</p>
        </form>
      </div>
    </section>
  );
}
