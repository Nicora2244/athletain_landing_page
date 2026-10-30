import { useT } from '../../../i18n/useLanguage';
export function AboutPowerSection() {
  const t = useT();
  return (
    <section className="about-power-section">
      <div className="about-power-inner">
        <div className="about-power-title-block">
          <h3>
            {t('aboutPowerSection.heading')}
            <span>{t('aboutPowerSection.sharingItWithTheWorld')}</span>
          </h3>
        </div>

        <div className="about-power-copy">
          <p>
            {t('aboutPowerSection.at')}
            <strong>Athletain</strong>
            {t('aboutPowerSection.connection')}
          </p>
          <p>
            {t('aboutPowerSection.weStartedWithOneClearGoal')}
            <strong>{t('aboutPowerSection.giveAthletesTheSupport')}</strong>
            {t('aboutPowerSection.guidance')}
          </p>
        </div>
      </div>
    </section>
  );
}
