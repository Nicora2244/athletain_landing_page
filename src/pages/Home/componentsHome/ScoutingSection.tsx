import type { MouseEventHandler } from 'react';

type ScoutingSectionProps = {
  onRegister: MouseEventHandler<HTMLButtonElement>;
};

export function ScoutingSection({ onRegister }: ScoutingSectionProps) {
  return (
    <section className="home-content-section home-content-section-tight-bottom">
      <div className="home-content-inner">
        <div className="home-feature-card">
          <div className="home-feature-copy">
            <h3 className="home-feature-title-light">Optimiza, identifica y</h3>
            <h3 className="home-feature-title-bold">Contacta con precision</h3>
            <h4 className="home-feature-subtitle">Scouting inteligente</h4>

            <ol>
              <li>
                Descubre talento con IA: metricas claras y perfiles listos para
                evaluar.
              </li>
              <li>
                Optimiza tu scouting y toma decisiones mas rapidas y precisas.
              </li>
            </ol>
          </div>

          <div className="home-feature-image home-feature-image-right" />
        </div>

        <div className="home-overlap-cta">
          <p>
            Lleva tu scouting al siguiente nivel. En Athletain te conectamos con
            talento verificado y te brindamos datos precisos para decidir con
            seguridad.
          </p>
          <button className="home-btn-secondary" onClick={onRegister}>
            Registrate
          </button>
        </div>
      </div>
    </section>
  );
}
