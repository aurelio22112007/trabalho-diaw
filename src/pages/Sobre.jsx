import { Badge } from '@mantine/core';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Sobre() {
  const { t } = useLanguage();
  return (
    <section className="page container">
      <div className="hero">
        {/* Para usar sua foto: coloque foto.jpg em /public e troque este div por <img className="avatar" src="/foto.jpg" alt="Aurélio Augusto" /> */}
        <div className="avatar" aria-hidden="true">
          AA
        </div>
        <div>
          <p className="muted" style={{ margin: 0 }}>
            {t('sobre.saudacao')}
          </p>
          <h1>Aurélio Augusto</h1>
          <p className="role">{t('sobre.papel')}</p>
          <p>{t('sobre.texto1')}</p>
          <p>{t('sobre.texto2')}</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="card">
          <h3>{t('sobre.interessesTitulo')}</h3>
          <div className="chips">
            {t('sobre.interesses').map((item) => (
              <Badge key={item} variant="light" size="lg">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>{t('sobre.objetivosTitulo')}</h3>
          <ul className="goal-list">
            {t('sobre.objetivos').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
