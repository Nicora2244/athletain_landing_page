import { useT } from '../../../i18n/useLanguage';
export function FinalCtaSection() {
  const t = useT();
  return (
    <section className="home-final-cta-section">
      <div className="home-final-cta-box">
        <div className="home-final-cta-copy">
          <h3 className="home-final-cta-title-light">{t('finalCtaSection.takeTheFirstStepToward')}</h3>
          <h3 className="home-final-cta-title-bold">{t('finalCtaSection.yourNextAchievement')}</h3>
          <p>{t('finalCtaSection.description')}</p>
        </div>
      </div>
    </section>
  );
}
