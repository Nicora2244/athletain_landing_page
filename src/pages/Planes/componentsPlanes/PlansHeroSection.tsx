import { useT } from '../../../i18n/useLanguage';
import type { MouseEvent } from 'react';
import ballImage from '../../../assets/images/ball.png';
import volleyballFemalePlayer from '../../../assets/images/volleyball-female-player.png';
import { audienceSectionId, type PlanAudience } from '../plansAudience';

type AudienceShortcut = {
  audience: PlanAudience;
  label: string;
  title: string;
  fromPrice: string;
  cta: string;
};

function scrollToAudience(event: MouseEvent<HTMLAnchorElement>, audience: PlanAudience) {
  const target = document.getElementById(audienceSectionId[audience]);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function PlansHeroSection() {
  const t = useT();
  const audienceShortcuts: AudienceShortcut[] = [
    {
      audience: 'athlete',
      label: t('plansHeroSection.imAnAthlete'),
      title: t('plansHeroSection.getNoticedAndTrackYourPerformance'),
      fromPrice: t('plansHeroSection.startForFree'),
      cta: t('plansHeroSection.viewAthletePlans'),
    },
    {
      audience: 'scout',
      label: t('plansHeroSection.imAScout'),
      title: t('plansHeroSection.discoverAndPrioritizeTalentWithData'),
      fromPrice: t('plansHeroSection.scoutPrice'),
      cta: t('plansHeroSection.viewScoutPlans'),
    },
  ];
  return (
    <section className="plans-hero">
      <div className="plans-hero-flare" />

      <div className="plans-hero-inner">
        <div className="plans-hero-copy">
          <h1>{t('plansHeroSection.yourTransformation')}</h1>
          <h2>{t('plansHeroSection.startsHere')}</h2>
          <p>{t('plansHeroSection.description')}</p>

          <div className="plans-audience-picker">
            {audienceShortcuts.map((shortcut) => (
              <a
                key={shortcut.audience}
                href={`#${audienceSectionId[shortcut.audience]}`}
                className="plans-audience-card"
                onClick={(event) => scrollToAudience(event, shortcut.audience)}
              >
                <span className="plans-audience-label">{shortcut.label}</span>
                <span className="plans-audience-title">{shortcut.title}</span>
                <span className="plans-audience-price">{shortcut.fromPrice}</span>
                <span className="plans-audience-cta">{shortcut.cta} ↓</span>
              </a>
            ))}
          </div>
        </div>

        <div className="plans-hero-art-wrap" aria-hidden="true">
          <img src={ballImage} alt="" className="plans-hero-ball" />
          <img src={volleyballFemalePlayer} alt="" className="plans-hero-player" />
        </div>
      </div>
    </section>
  );
}
