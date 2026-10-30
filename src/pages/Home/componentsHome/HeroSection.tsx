import { useT } from '../../../i18n/useLanguage';
import type { MouseEventHandler } from 'react';
import heroPlayer from '../../../assets/images/hero-player.png';

type HeroSectionProps = {
  onRegister: MouseEventHandler<HTMLButtonElement>;
};

export function HeroSection({ onRegister }: HeroSectionProps) {
  const t = useT();
  return (
    <section className="home-hero">
      <div className="home-hero-flare" />

      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1>{t('heroSection.visibilityForAthletes')}</h1>
          <h2>{t('heroSection.precisionForScouts')}</h2>
          <p>{t('heroSection.subtitle')}</p>

          <button className="home-btn-primary" onClick={onRegister}>
            {t('heroSection.signUp')}
            <span className="home-btn-primary-icon" />
          </button>
        </div>

        <div className="home-hero-art-wrap">
          <img src={heroPlayer} alt={t('heroSection.footballPlayerInAction')} className="home-hero-player" />
        </div>
      </div>
    </section>
  );
}
