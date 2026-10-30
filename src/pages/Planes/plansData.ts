import type { Translate } from '../../i18n/useLanguage';
import type { PlanAudience } from './plansAudience';

export type Plan = {
  name: string;
  price: string;
  note?: string;
  description: string;
  cta?: string;
  // Name of the plan whose features this one builds on, if any.
  includesPlan?: string;
  features: string[];
};

export type AudiencePlans = {
  audience: PlanAudience;
  eyebrow: string;
  title: string;
  subtitle: string;
  featuresTitle: string;
  plans: Plan[];
  disclaimer?: string;
};

// Source: "Estructura de planes y funcionalidades - Go to market, version 1".
export function getAudiencePlans(t: Translate): AudiencePlans[] {
  return [
    {
      audience: 'athlete',
      eyebrow: t('plansData.forAthletes'),
      title: t('plansData.plansForAthletes'),
      subtitle: t('plansData.getOnScoutsRadarAndUnderstand'),
      featuresTitle: t('plansData.whatsIncludedInEachAthletePlan'),
      plans: [
        {
          name: 'Athlete Starter',
          price: t('plansData.free'),
          description: t('plansData.getNoticedAndStartTracking'),
          features: [
            t('plansData.createAProfileWithAPhoto'),
            t('plansData.fullDashboardPoweredByMachineLearning'),
            t('plansData.automatedMonthlyReportDeliveredToYour'),
          ],
        },
        {
          name: 'Athlete Pro',
          price: '$20.000 COP',
          note: t('plansData.month'),
          description: t('plansData.analyzeAndMaximize'),
          includesPlan: 'Athlete Starter',
          features: [
            t('plansData.weeklyAndMonthlyReportsWithAi'),
            t('plansData.highlightedProfileForScouts'),
            t('plansData.nutritionBotIntegratedIntoYourRoutines'),
            t('plansData.aiAssistantForYourSportingCareer'),
          ],
        },
        {
          name: 'Athlete Elite',
          price: '$120.000 COP',
          note: t('plansData.month'),
          description: t('plansData.performanceAndLegalProtection'),
          includesPlan: 'Athlete Pro',
          features: [t('plansData.1SportsLawConsultationPerMonth')],
        },
      ],
      disclaimer: t('plansData.athletainProvidesGeneralNutritionSuggestionsOnly'),
    },
    {
      audience: 'scout',
      eyebrow: t('plansData.forScouts'),
      title: t('plansData.plansForScouts'),
      subtitle: t('plansData.findAnalyzeAndPrioritizeTalentWith'),
      featuresTitle: t('plansData.whatsIncludedInEachScoutPlan'),
      plans: [
        {
          name: 'Scout Pro',
          price: '$100.000 COP',
          note: t('plansData.monthFirstMonthFree'),
          description: t('plansData.discoveryAndAnalysis'),
          features: [
            t('plansData.accessToAthletePerformanceReports'),
            t('plansData.advancedSearchFiltersPoweredByMachine'),
            t('plansData.requestIndividualAthleteReports'),
            t('plansData.calendarForBookingSportsLawConsultations'),
            t('plansData.1LegalConsultationIncludedPerMonth'),
          ],
        },
        {
          name: 'Scout Elite',
          price: '$300.000 COP',
          note: t('plansData.month'),
          description: t('plansData.predictionAndPrioritization'),
          includesPlan: 'Scout Pro',
          features: [
            t('plansData.predictiveDashboardInjuryPredictionAndEmerging'),
            t('plansData.talentRecommendationEngineWithAutomatedAlerts'),
            t('plansData.moreHighqualityAlertsWithPersonalizedCriteria'),
            t('plansData.2LegalConsultationsIncludedPerMonth'),
          ],
        },
        {
          name: 'Scout Enterprise',
          price: t('plansData.contactUs'),
          description: t('plansData.integrationForClubsAndAcademies'),
          cta: t('plansData.contactUs'),
          features: [
            t('plansData.multiteamIntegrationAcrossTeamsClubsAnd'),
            t('plansData.accessToTheAthletainDatabase'),
            t('plansData.integrationWithYourTeamsData'),
            t('plansData.fullAccessToPlatformReportsAnd'),
            t('plansData.legalAdvice'),
          ],
        },
      ],
      disclaimer: t('plansData.athletesSleepAndNutritionDataIs'),
    },
  ];
}
