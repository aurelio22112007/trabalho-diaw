import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ExperienceCard({ experiencia }) {
  const { local } = useLanguage();
  return (
    <article className="card">
      <div className="exp-head">
        <h3>{local(experiencia.instituicao)}</h3>
        <span className="muted">{local(experiencia.periodo)}</span>
      </div>
      <p className="role">{local(experiencia.cargo)}</p>
      <p>{local(experiencia.descricao)}</p>
    </article>
  );
}
