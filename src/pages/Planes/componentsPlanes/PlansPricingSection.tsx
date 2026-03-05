type PlanCard = {
  name: string;
  price: string;
  note: string;
  description: string;
};

const planCards: PlanCard[] = [
  {
    name: 'Athlete Free',
    price: '$0',
    note: 'Month',
    description: 'Ser Visto',
  },
  {
    name: 'Athlete Starter',
    price: '$19.999',
    note: 'Month',
    description: 'Empezar a medir',
  },
  {
    name: 'Athlete Pro',
    price: '$49.999',
    note: 'Month',
    description: 'Analizar y maximizar',
  },
  {
    name: 'Athlete Elite',
    price: '99.999',
    note: 'Month',
    description: 'Rendimiento y proteccion juridica',
  },
];

export function PlansPricingSection() {
  return (
    <section className="plans-pricing-section">
      <div className="plans-pricing-inner">
        <h3>Planes para atletas</h3>

        <div className="plans-pricing-tabs" role="tablist" aria-label="Tipo de plan">
          <button type="button" className="plans-pricing-tab is-active" role="tab" aria-selected="true">
            Atleta
          </button>
          <button type="button" className="plans-pricing-tab" role="tab" aria-selected="false">
            Caza talentos
          </button>
        </div>

        <div className="plans-pricing-grid">
          {planCards.map((plan) => (
            <article key={plan.name} className="plans-card">
              <h4>{plan.name}</h4>
              <p className="plans-card-price">{plan.price}</p>
              <p className="plans-card-note">{plan.note}</p>
              <p className="plans-card-description">{plan.description}</p>
              <button type="button" className="plans-card-cta">
                Acceder
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
