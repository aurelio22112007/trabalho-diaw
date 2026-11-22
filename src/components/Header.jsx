import { useState } from "react";
import { useLang } from "../context/LangContext.jsx";

const links = [
  ["sobre", "about"],
  ["projetos", "projects"],
  ["experiencias", "experience"],
  ["contato", "contact"],
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="top">
      <div className="wrap bar">
        <a className="logo" href="#sobre">
          <img src="/logo.svg" alt="" width="28" height="28" /> aurélio.dev
        </a>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={open ? "open" : ""} aria-label="Menu">
          {links.map(([id, key]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <div className="lang">
          <button aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>PT</button>
          <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </header>
  );
}
