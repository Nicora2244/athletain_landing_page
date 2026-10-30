import { useT } from '../../../i18n/useLanguage';
import type { MouseEventHandler } from 'react';
import heroYellowPlayer from '../../../assets/images/hero-yellow-player.png';

type TalentFocusSectionProps = {
  onRegister: MouseEventHandler<HTMLButtonElement>;
};

export function TalentFocusSection({ onRegister }: TalentFocusSectionProps) {
  const t = useT();
  return (
    <section className="home-content-section">
      <div className="home-content-inner">
        <div className="home-feature-card">
          <div className="home-feature-image home-feature-image-left">
            <img
              src={heroYellowPlayer}
              alt={t('talentFocusSection.footballPlayerHighlightedInYellow')}
              className="home-feature-photo"
            />
          </div>

          <div className="home-feature-copy">
            <h3 className="home-feature-title-light">{t('talentFocusSection.yourTalent')}</h3>
            <h3 className="home-feature-title-bold">{t('talentFocusSection.ourFocus')}</h3>
            <h4 className="home-feature-subtitle">{t('talentFocusSection.showcaseYourTalent')}</h4>

            <ol>
              <li>{t('talentFocusSection.aiTools')}</li>
              <li>{t('talentFocusSection.support')}</li>
            </ol>
          </div>
        </div>

        <div className="home-overlap-cta">
          <p>{t('talentFocusSection.ctaDescription')}</p>
          <button className="home-btn-secondary" onClick={onRegister}>
            {t('talentFocusSection.signUp')}
          </button>
        </div>
      </div>
    </section>
  );
}
