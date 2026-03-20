import tennisPlayerMale from '../../../assets/images/tennis-player-male.png';

export function AboutHeroSection() {
  return (
    <section className="about-hero">
      <div className="about-hero-flare" />

      <div className="about-hero-inner">
        <div className="about-hero-copy">
          <h1>Conectamos talento con</h1>
          <h2>Oportunidades reales</h2>
        </div>

        <div className="about-hero-art-wrap" aria-hidden="true">
          <img
            src={tennisPlayerMale}
            alt=""
            className="about-hero-player"
          />
        </div>
      </div>
    </section>
  );
}
