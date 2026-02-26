export function HowItWorksSection() {
  return (
    <section className="home-how-section">
      <div className="home-how-grid-wrap">
        <div className="home-how-top">
          <h3>Como funciona?</h3>

          <div className="home-how-steps">
            <div className="home-how-step has-divider">
              <p className="home-how-step-number">1</p>
              <p>Crea tu perfil</p>
            </div>

            <div className="home-how-step has-divider">
              <p className="home-how-step-number">2</p>
              <p>Ingresa tus datos o metricas de rendimiento</p>
            </div>

            <div className="home-how-step">
              <p className="home-how-step-number">3</p>
              <p>Te conectamos</p>
            </div>
          </div>
        </div>

        <div className="home-how-image" />
      </div>
    </section>
  );
}
