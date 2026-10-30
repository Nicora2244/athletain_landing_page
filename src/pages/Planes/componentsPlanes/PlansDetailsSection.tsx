import { useT } from '../../../i18n/useLanguage';
export function PlansDetailsSection() {
  const t = useT();
  return (
    <section className="plans-details-section">
      <div className="plans-details-inner">
        <div className="plans-details-title-block">
          <h3>
            {t('plansDetailsSection.findThePlanThat')}
            <span>{t('plansDetailsSection.willMoveYourCareerForward')}</span>
          </h3>
        </div>

        <div className="plans-details-copy">
          <p>
            <strong>{t('plansDetailsSection.visibility')}</strong> {t('plansDetailsSection.visibilityDescription')}
          </p>
          <p>
            <strong>{t('plansDetailsSection.aiPredictiveDashboard')}</strong>{' '}
            {t('plansDetailsSection.dashboardDescription')}
          </p>
          <p>
            <strong>{t('plansDetailsSection.advancedSearchFilters')}</strong>{' '}
            {t('plansDetailsSection.searchDescription')}
          </p>
          <p>
            <strong>{t('plansDetailsSection.specialistLegalAdvice')}</strong>{' '}
            {t('plansDetailsSection.legalDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}
