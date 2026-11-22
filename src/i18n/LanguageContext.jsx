import { createContext, useContext, useEffect, useState } from 'react';
import pt from './pt.json';
import en from './en.json';

const dictionaries = { pt, en };
const LanguageContext = createContext(null);

function initialLanguage() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // localStorage indisponível: segue para o idioma do navegador
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'pt';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // ignora
    }
  }, [lang]);

  // t('sobre.titulo') -> busca a chave no dicionário do idioma atual
  const t = (path) =>
    path.split('.').reduce((obj, key) => (obj ? obj[key] : undefined), dictionaries[lang]) ?? path;

  // Para dados com texto nos dois idiomas: { "pt": "...", "en": "..." }
  const local = (value) => (value && typeof value === 'object' ? value[lang] ?? value.pt : value);

  const toggle = () => setLang((current) => (current === 'pt' ? 'en' : 'pt'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, local }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  return ctx;
}
