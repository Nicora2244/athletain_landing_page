import { audienceSectionId } from '../plansAudience';
import { audiencePlans } from '../plansData';

export function PlansPricingSection() {
  return (
    <>
      {audiencePlans.map((group) => (
        <section
          key={group.audience}
          id={audienceSectionId[group.audience]}
          className={`plans-pricing-section is-${group.audience}`}
          aria-labelledby={`${audienceSectionId[group.audience]}-title`}
        >
          <div className="plans-pricing-inner">
            <p className="plans-pricing-eyebrow">{group.eyebrow}</p>
            <h3 id={`${audienceSectionId[group.audience]}-title`}>{group.title}</h3>
            <p className="plans-pricing-subtitle">{group.subtitle}</p>

            <div className="plans-pricing-grid">
              {group.plans.map((plan) => (
                <article key={plan.name} className="plans-card">
                  <h4>{plan.name}</h4>
                  <p className="plans-card-price">{plan.price}</p>
                  {plan.note && <p className="plans-card-note">{plan.note}</p>}
                  <p className="plans-card-description">{plan.description}</p>
                  <button type="button" className="plans-card-cta">
                    {plan.cta ?? 'Acceder'}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
