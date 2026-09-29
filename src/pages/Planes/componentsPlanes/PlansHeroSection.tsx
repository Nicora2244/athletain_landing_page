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

const audienceShortcuts: AudienceShortcut[] = [
  {
    audience: 'athlete',
    label: 'Soy atleta',
    title: 'Hazte visible y mide tu rendimiento',
    fromPrice: 'Desde $0 / mes',
    cta: 'Ver planes de atleta',
  },
  {
    audience: 'scout',
    label: 'Soy caza talentos',
    title: 'Descubre y prioriza talento con datos',
    fromPrice: 'Desde $149.999 COP / mes',
    cta: 'Ver planes de scout',
  },
];

function scrollToAudience(event: MouseEvent<HTMLAnchorElement>, audience: PlanAudience) {
  const target = document.getElementById(audienceSectionId[audience]);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function PlansHeroSection() {
  return (
    <section className="plans-hero">
      <div className="plans-hero-flare" />

      <div className="plans-hero-inner">
        <div className="plans-hero-copy">
          <h1>Tu transformacion</h1>
          <h2>Comienza aqui</h2>
          <p>Planes para atletas que quieren ser vistos y para caza talentos que buscan al proximo.</p>

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
          <img
            src={volleyballFemalePlayer}
            alt=""
            className="plans-hero-player"
          />
        </div>
      </div>
    </section>
  );
}
