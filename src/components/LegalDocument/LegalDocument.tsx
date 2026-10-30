import { useLanguage } from '../../i18n/useLanguage';
import { useEffect } from 'react';
import type { PolicyDocument } from '../../data/legalDocuments';
import './LegalDocument.css';

type LegalDocumentProps = {
  doc: PolicyDocument;
  eyebrow: string;
};

function sectionId(index: number): string {
  return `seccion-${index + 1}`;
}

export default function LegalDocument({ doc, eyebrow }: LegalDocumentProps) {
  const { t, language } = useLanguage();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [doc]);

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-flare" />
        <div className="legal-hero-inner">
          <p className="legal-hero-eyebrow">{eyebrow}</p>
          {language === 'en' && <p>{t('legalDocument.spanishOnly')}</p>}
          <h1 lang="es">{doc.title}</h1>
          <p className="legal-hero-meta">
            <span lang="es">{doc.subtitle}</span>
            {t('legalDocument.lastUpdated')}
            <span lang="es">{doc.lastUpdated}</span>
          </p>
        </div>
      </section>

      <div className="legal-body">
        <div className="legal-body-inner">
          <aside className="legal-sidebar" aria-label={t('legalDocument.summaryAndContents')}>
            <div className="legal-summary">
              <h2>{t('legalDocument.atAGlance')}</h2>
              <p lang="es">{doc.summary}</p>
              <a className="legal-summary-cta" href="mailto:support@athletain.com">
                {t('legalDocument.exerciseRights')}
              </a>
            </div>

            <nav className="legal-toc" aria-label={t('legalDocument.tableOfContents')}>
              <h2>{t('legalDocument.contents')}</h2>
              <ol>
                {doc.sections.map((section, index) => (
                  <li key={sectionId(index)}>
                    <a lang="es" href={`#${sectionId(index)}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="legal-doc">
            {doc.sections.map((section, index) => (
              <section key={sectionId(index)} id={sectionId(index)} className="legal-section" lang="es">
                <h2>{section.title}</h2>
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </section>
            ))}

            <p className="legal-doc-footnote">
              {t('legalDocument.documentVersion')}
              {doc.version}
              {t('legalDocument.contactFootnote')} <a href="mailto:support@athletain.com">support@athletain.com</a>.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
