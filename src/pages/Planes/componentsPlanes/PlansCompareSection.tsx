import { audiencePlans } from '../plansData';

export function PlansCompareSection() {
  return (
    <>
      {audiencePlans.map((group) => (
        <section key={group.audience} className={`plans-compare-section is-${group.audience}`}>
          <div className="plans-compare-inner">
            <p className="plans-pricing-eyebrow plans-compare-eyebrow">{group.eyebrow}</p>
            <h3>{group.featuresTitle}</h3>

            <div className="plans-compare-incremental-grid">
              {group.plans.map((plan) => (
                <article key={plan.name} className="plans-compare-incremental-card">
                  <h4>{plan.name}</h4>
                  <p className="plans-compare-incremental-base">
                    {plan.includesPlan ? `Todo lo de ${plan.includesPlan}, mas:` : 'Incluye:'}
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {group.disclaimer && <p className="plans-compare-disclaimer">{group.disclaimer}</p>}
          </div>
        </section>
      ))}
    </>
  );
}
