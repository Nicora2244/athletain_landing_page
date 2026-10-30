import { useT } from '../../../i18n/useLanguage';
import tennisPlayer from '../../../assets/images/tennis-player.jpg';

export function HowItWorksSection() {
  const t = useT();
  return (
    <section className="home-how-section">
      <div className="home-how-grid-wrap">
        <div className="home-how-top">
          <h3>{t('howItWorksSection.howDoesItWork')}</h3>

          <div className="home-how-steps">
            <div className="home-how-step has-divider">
              <p className="home-how-step-number">1</p>
              <p>{t('howItWorksSection.createYourProfile')}</p>
            </div>

            <div className="home-how-step has-divider">
              <p className="home-how-step-number">2</p>
              <p>{t('howItWorksSection.addMetrics')}</p>
            </div>

            <div className="home-how-step">
              <p className="home-how-step-number">3</p>
              <p>{t('howItWorksSection.weConnectYou')}</p>
            </div>
          </div>
        </div>

        <div className="home-how-image">
          <img
            src={tennisPlayer}
            alt={t('howItWorksSection.tennisPlayerOnCourt')}
            className="home-feature-photo home-how-photo"
          />
        </div>
      </div>
    </section>
  );
}
