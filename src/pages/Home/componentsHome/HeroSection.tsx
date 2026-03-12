import type { MouseEventHandler } from 'react';
import heroPlayer from '../../../assets/images/hero-player.png';

type HeroSectionProps = {
  onRegister: MouseEventHandler<HTMLButtonElement>;
};

export function HeroSection({ onRegister }: HeroSectionProps) {
  return (
    <section className="home-hero">
      <div className="home-hero-flare" />

      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1>Exposicion para atletas.</h1>
          <h2>Precision para cazatalentos.</h2>
          <p>Una conexion mas inteligente y rapida.</p>

          <button className="home-btn-primary" onClick={onRegister}>
            Registrate
            <span className="home-btn-primary-icon" />
          </button>
        </div>

        <div className="home-hero-art-wrap">
          <img src={heroPlayer} alt="Jugador de futbol en accion" className="home-hero-player" />
        </div>
      </div>
    </section>
  );
}
