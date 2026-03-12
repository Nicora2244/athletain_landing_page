import { useState } from 'react';

type PlanAudience = 'athlete' | 'scout';

type PlanCard = {
  name: string;
  price: string;
  note: string;
  description: string;
  cta?: string;
};

const planCardsByAudience: Record<PlanAudience, PlanCard[]> = {
  athlete: [
    {
      name: 'Athlete Free',
      price: '$0',
      note: 'Mes',
      description: 'Ser visto',
    },
    {
      name: 'Athlete Starter',
      price: '$19.999',
      note: 'Mes',
      description: 'Empezar a medir',
    },
    {
      name: 'Athlete Pro',
      price: '$49.999',
      note: 'Mes',
      description: 'Analizar y maximizar',
    },
    {
      name: 'Athlete Elite',
      price: '$99.999',
      note: 'Mes',
      description: 'Rendimiento y proteccion juridica',
    },
  ],
  scout: [
    {
      name: 'Scout Basic',
      price: '$149.999 COP',
      note: 'Mes',
      description: 'Descubrimiento y exploracion',
    },
    {
      name: 'Scout Pro',
      price: '$399.999 COP',
      note: 'Mes',
      description: 'Analisis de oportunidades',
    },
    {
      name: 'Scout Elite',
      price: '$749.999 COP',
      note: 'Mes',
      description: 'Priorizacion',
    },
    {
      name: 'Scout Enterprise',
      price: 'Contact us',
      note: '',
      description: 'Integracion y alto volumen',
      cta: 'Contact us',
    },
  ],
};

export function PlansPricingSection() {
  const [audience, setAudience] = useState<PlanAudience>('athlete');
  const planCards = planCardsByAudience[audience];

  return (
    <section className="plans-pricing-section">
      <div className="plans-pricing-inner">
        <h3>{audience === 'athlete' ? 'Planes para atletas' : 'Planes para caza talentos'}</h3>

        <div className="plans-pricing-tabs" role="tablist" aria-label="Tipo de plan">
          <button
            type="button"
            className={`plans-pricing-tab${audience === 'athlete' ? ' is-active' : ''}`}
            role="tab"
            aria-selected={audience === 'athlete'}
            onClick={() => setAudience('athlete')}
          >
            Atleta
          </button>
          <button
            type="button"
            className={`plans-pricing-tab${audience === 'scout' ? ' is-active' : ''}`}
            role="tab"
            aria-selected={audience === 'scout'}
            onClick={() => setAudience('scout')}
          >
            Caza talentos
          </button>
        </div>

        <div className="plans-pricing-grid">
          {planCards.map((plan) => (
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
  );
}
