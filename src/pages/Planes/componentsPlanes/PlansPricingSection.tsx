import { audienceSectionId, type PlanAudience } from '../plansAudience';

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

type AudienceGroup = {
  audience: PlanAudience;
  eyebrow: string;
  title: string;
  subtitle: string;
};

const audienceGroups: AudienceGroup[] = [
  {
    audience: 'athlete',
    eyebrow: 'Para atletas',
    title: 'Planes para atletas',
    subtitle: 'Ponte en el radar de los scouts y entiende tu rendimiento.',
  },
  {
    audience: 'scout',
    eyebrow: 'Para caza talentos',
    title: 'Planes para caza talentos',
    subtitle: 'Encuentra, analiza y prioriza talento con datos.',
  },
];

function PlanCardItem({ plan }: { plan: PlanCard }) {
  return (
    <article className="plans-card">
      <h4>{plan.name}</h4>
      <p className="plans-card-price">{plan.price}</p>
      {plan.note && <p className="plans-card-note">{plan.note}</p>}
      <p className="plans-card-description">{plan.description}</p>
      <button type="button" className="plans-card-cta">
        {plan.cta ?? 'Acceder'}
      </button>
    </article>
  );
}

export function PlansPricingSection() {
  return (
    <>
      {audienceGroups.map((group) => (
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
              {planCardsByAudience[group.audience].map((plan) => (
                <PlanCardItem key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
