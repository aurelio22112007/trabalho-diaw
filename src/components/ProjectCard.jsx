import { Badge, Button } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ProjectCard({ projeto }) {
  const { t, local } = useLanguage();
  const nome = local(projeto.nome);

  return (
    <article className="card">
      <img
        className="project-img"
        src={projeto.imagem}
        alt={`${nome}`}
        loading="lazy"
      />
      <h3>{nome}</h3>
      <p>{local(projeto.descricao)}</p>
      <div className="chips">
        {projeto.tecnologias.map((tech) => (
          <Badge key={tech} variant="light">
            {tech}
          </Badge>
        ))}
      </div>
      <Button
        component="a"
        href={projeto.github}
        target="_blank"
        rel="noopener noreferrer"
        leftSection={<FaGithub />}
        variant="outline"
        mt="md"
      >
        {t('projetos.github')}
      </Button>
    </article>
  );
}
