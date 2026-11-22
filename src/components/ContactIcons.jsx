import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import contatos from '../data/contatos.json';

const icons = {
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function ContactIcons({ showLabels = true }) {
  return (
    <div className="contact-icons">
      {contatos.map((c) => {
        const Icon = icons[c.id];
        const external = !c.href.startsWith('mailto:');
        return (
          <a
            key={c.id}
            href={c.href}
            aria-label={c.label}
            title={c.label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon aria-hidden="true" />
            {showLabels && <span>{c.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
