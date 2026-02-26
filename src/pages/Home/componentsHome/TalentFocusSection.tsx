import type { MouseEventHandler } from 'react';

type TalentFocusSectionProps = {
  onRegister: MouseEventHandler<HTMLButtonElement>;
};

export function TalentFocusSection({ onRegister }: TalentFocusSectionProps) {
  return (
    <section className="home-content-section">
      <div className="home-content-inner">
        <div className="home-feature-card">
          <div className="home-feature-image home-feature-image-left" />

          <div className="home-feature-copy">
            <h3 className="home-feature-title-light">Tu talento,</h3>
            <h3 className="home-feature-title-bold">Nuestro enfoque</h3>
            <h4 className="home-feature-subtitle">Expon tu talento</h4>

            <ol>
              <li>
                Usa nuestras herramientas de IA para mostrar tu rendimiento,
                mejorar tus skills y potenciar tu crecimiento deportivo.
              </li>
              <li>
                Te damos visibilidad real frente a cazatalentos y te ofrecemos
                acompanamiento juridico especializado cuando lo necesites.
              </li>
            </ol>
          </div>
        </div>

        <div className="home-overlap-cta">
          <p>
            Lleva tu talento al mundo profesional. En Athletain te conectamos
            con decisiones clave y te equipamos para avanzar con seguridad.
          </p>
          <button className="home-btn-secondary" onClick={onRegister}>
            Registrate
          </button>
        </div>
      </div>
    </section>
  );
}
