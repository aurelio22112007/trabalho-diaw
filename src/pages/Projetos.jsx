import { Timeline } from '@mantine/core';
import projetos from '../data/projetos.json';
import ProjectCard from '../components/ProjectCard.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function formatDate(isoMonth, lang) {
  const [year, month] = isoMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'pt-BR', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month - 1, 1));
}

export default function Projetos() {
  const { t, lang } = useLanguage();
  // Do mais antigo ao mais recente
  const ordenados = [...projetos].sort((a, b) => a.data.localeCompare(b.data));

  return (
    <section className="page container">
      <h1>{t('projetos.titulo')}</h1>
      <p className="page-subtitle">{t('projetos.subtitulo')}</p>

      <Timeline active={ordenados.length - 1} bulletSize={20} lineWidth={2}>
        {ordenados.map((p) => (
          <Timeline.Item key={p.id} title={<span className="project-date">{formatDate(p.data, lang)}</span>}>
            <div style={{ marginTop: 8, marginBottom: 24 }}>
              <ProjectCard projeto={p} />
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
