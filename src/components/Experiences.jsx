import { useLang } from "../context/LangContext.jsx";
import { experiences } from "../data/experiences.js";

export default function Experiences() {
  const { lang, t } = useLang();
  return (
    <section id="experiencias">
      <h2>{t.experience.title}</h2>
      <div className="exp">
        {experiences.map((e) => (
          <article className="card" key={e.id}>
            <h3>{e.role[lang]}</h3>
            <div className="meta">{e.org} · {e.period}</div>
            <p>{e.description[lang]}</p>
          </article>
        ))}
        <p className="card note">{t.experience.note}</p>
      </div>
    </section>
  );
}
