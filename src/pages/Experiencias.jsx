import experiencias from '../data/experiencias.json';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Experiencias() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <h1>{t('experiencias.titulo')}</h1>
      <p className="page-subtitle">{t('experiencias.subtitulo')}</p>
      <div className="stack">
        {experiencias.map((e) => (
          <ExperienceCard key={e.id} experiencia={e} />
        ))}
      </div>
    </section>
  );
}
