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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [doc]);

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-flare" />
        <div className="legal-hero-inner">
          <p className="legal-hero-eyebrow">{eyebrow}</p>
          <h1>{doc.title}</h1>
          <p className="legal-hero-meta">
            {doc.subtitle} · Última actualización: {doc.lastUpdated}
          </p>
        </div>
      </section>

      <div className="legal-body">
        <div className="legal-body-inner">
          <aside className="legal-sidebar" aria-label="Resumen e índice">
            <div className="legal-summary">
              <h2>En resumen</h2>
              <p>{doc.summary}</p>
              <a className="legal-summary-cta" href="mailto:support@athletain.com">
                Ejercer tus derechos → support@athletain.com
              </a>
            </div>

            <nav className="legal-toc" aria-label="Índice de contenidos">
              <h2>Contenido</h2>
              <ol>
                {doc.sections.map((section, index) => (
                  <li key={sectionId(index)}>
                    <a href={`#${sectionId(index)}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="legal-doc">
            {doc.sections.map((section, index) => (
              <section
                key={sectionId(index)}
                id={sectionId(index)}
                className="legal-section"
              >
                <h2>{section.title}</h2>
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </section>
            ))}

            <p className="legal-doc-footnote">
              Documento versión {doc.version}. Para dudas, peticiones, consultas o
              reclamos relacionados con el tratamiento de tus datos personales,
              escríbenos a{' '}
              <a href="mailto:support@athletain.com">support@athletain.com</a>.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
