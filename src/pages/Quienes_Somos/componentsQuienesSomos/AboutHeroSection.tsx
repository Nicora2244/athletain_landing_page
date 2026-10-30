import { useT } from '../../../i18n/useLanguage';
import tennisPlayerMale from '../../../assets/images/tennis-player-male.png';

export function AboutHeroSection() {
  const t = useT();
  return (
    <section className="about-hero">
      <div className="about-hero-flare" />

      <div className="about-hero-inner">
        <div className="about-hero-copy">
          <h1>{t('aboutHeroSection.connectingTalentWith')}</h1>
          <h2>{t('aboutHeroSection.realOpportunities')}</h2>
        </div>

        <div className="about-hero-art-wrap" aria-hidden="true">
          <img src={tennisPlayerMale} alt="" className="about-hero-player" />
        </div>
      </div>
    </section>
  );
}
