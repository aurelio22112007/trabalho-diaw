import { useLang } from "../context/LangContext.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  const { t } = useLang();
  return (
    <section id="sobre">
      <div className="hero">
        <h1>{profile.name}</h1>
        <p className="lead">{t.hero.role}</p>
        <a className="btn" href="#projetos">{t.hero.cta1}</a>
        <a className="btn ghost" href="#contato">{t.hero.cta2}</a>
      </div>
      <h2>{t.about.title}</h2>
      <div className="about">
        <div>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
        <aside className="card">
          <h3>{t.about.factsTitle}</h3>
          <ul>{t.about.facts.map((f) => <li key={f}>{f}</li>)}</ul>
        </aside>
      </div>
    </section>
  );
}
