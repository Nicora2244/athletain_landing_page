import { useT } from '../../../i18n/useLanguage';
import type { MouseEventHandler } from 'react';
import basketPlayer from '../../../assets/images/basket-player.png';

type ScoutingSectionProps = {
  onRegister: MouseEventHandler<HTMLButtonElement>;
};

export function ScoutingSection({ onRegister }: ScoutingSectionProps) {
  const t = useT();
  return (
    <section className="home-content-section home-content-section-tight-bottom">
      <div className="home-content-inner">
        <div className="home-feature-card">
          <div className="home-feature-copy">
            <h3 className="home-feature-title-light">{t('scoutingSection.streamlineDiscoverAnd')}</h3>
            <h3 className="home-feature-title-bold">{t('scoutingSection.connectWithPrecision')}</h3>
            <h4 className="home-feature-subtitle">{t('scoutingSection.smarterScouting')}</h4>

            <ol>
              <li>{t('scoutingSection.discovery')}</li>
              <li>{t('scoutingSection.decisions')}</li>
            </ol>
          </div>

          <div className="home-feature-image home-feature-image-right">
            <img
              src={basketPlayer}
              alt={t('scoutingSection.basketballPlayerShootingAtTheHoop')}
              className="home-feature-photo"
            />
          </div>
        </div>

        <div className="home-overlap-cta">
          <p>{t('scoutingSection.ctaDescription')}</p>
          <button className="home-btn-secondary" onClick={onRegister}>
            {t('scoutingSection.signUp')}
          </button>
        </div>
      </div>
    </section>
  );
}
