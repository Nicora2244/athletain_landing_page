import ballImage from '../../../assets/images/ball.png';
import volleyballFemalePlayer from '../../../assets/images/volleyball-female-player.png';

export function PlansHeroSection() {
  return (
    <section className="plans-hero">
      <div className="plans-hero-flare" />

      <div className="plans-hero-inner">
        <div className="plans-hero-copy">
          <h1>Tu transformacion</h1>
          <h2>Comieza aqui</h2>
          <p>Encuentra el plan que impulsara tu carrera.</p>
        </div>

        <div className="plans-hero-art-wrap" aria-hidden="true">
          <img src={ballImage} alt="" className="plans-hero-ball" />
          <img
            src={volleyballFemalePlayer}
            alt=""
            className="plans-hero-player"
          />
        </div>
      </div>
    </section>
  );
}
