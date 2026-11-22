import { useLang } from "../context/LangContext.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <section id="projetos">
      <h2>{t.projects.title}</h2>
      <ol className="timeline">
        {projects.map((p, i) => (
          <li key={p.id}>
            <span className="dot" aria-label={`${t.projects.project} ${i + 1}`}>{i + 1}</span>
            <article className="card proj">
              <div>
                <h3>{p.name}</h3>
                <p>{p.description[lang]}</p>
                <ul className="tags">{p.tech.map((x) => <li key={x}>{x}</li>)}</ul>
                <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">
                  {t.projects.repo}
                </a>
              </div>
              <img src={p.image} alt={p.alt[lang]} loading="lazy" />
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
