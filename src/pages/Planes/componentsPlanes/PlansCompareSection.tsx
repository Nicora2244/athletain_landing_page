import type { PlanAudience } from '../plansAudience';

type CompareAudience = PlanAudience;

type CompareRow = {
  feature: string;
  col1: boolean;
  col2: boolean;
  col3: boolean;
  col4: boolean;
};

const compareColumnsByAudience: Record<CompareAudience, string[]> = {
  athlete: ['Athlete Free', 'Athlete Starter', 'Athlete Pro', 'Athlete Elite'],
  scout: ['Scout Basic', 'Scout Pro', 'Scout Elite', 'Scout Enterprise'],
};

const compareRowsByAudience: Record<CompareAudience, CompareRow[]> = {
  athlete: [
    { feature: 'Perfil', col1: true, col2: true, col3: true, col4: true },
    {
      feature: 'Dashboard basico machine learning',
      col1: false,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Dashboard completo machine learning',
      col1: false,
      col2: false,
      col3: true,
      col4: true,
    },
    {
      feature: 'Reporte mensual automatico',
      col1: false,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Reporte semanal automatico',
      col1: false,
      col2: false,
      col3: true,
      col4: true,
    },
    {
      feature: 'Perfil resaltado para scouts',
      col1: false,
      col2: false,
      col3: true,
      col4: true,
    },
    {
      feature: '2 consultas juridicas especializadas por mes',
      col1: false,
      col2: false,
      col3: false,
      col4: true,
    },
  ],
  scout: [
    {
      feature: 'Acceso a directorio de atletas',
      col1: true,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Perfiles basicos',
      col1: true,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Acceso completo a base de datos',
      col1: false,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Filtros avanzados de metricas',
      col1: false,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Dashboard predictivo',
      col1: false,
      col2: false,
      col3: true,
      col4: true,
    },
    {
      feature: 'Mayor numero de alertas',
      col1: false,
      col2: false,
      col3: true,
      col4: true,
    },
    {
      feature: 'Asesoria juridica',
      col1: false,
      col2: true,
      col3: true,
      col4: true,
    },
    {
      feature: 'Integracion multi equipo',
      col1: false,
      col2: false,
      col3: false,
      col4: true,
    },
  ],
};

const audienceLabels: Record<CompareAudience, { eyebrow: string; title: string }> = {
  athlete: { eyebrow: 'Para atletas', title: 'Que incluye cada plan de atleta' },
  scout: { eyebrow: 'Para caza talentos', title: 'Que incluye cada plan de scout' },
};

const audiences: CompareAudience[] = ['athlete', 'scout'];

function includedByPlan(row: CompareRow) {
  return [row.col1, row.col2, row.col3, row.col4];
}

// "Everything in X, plus..." cards: each plan only lists what it adds.
function CompareIncrementalCards({ audience }: { audience: CompareAudience }) {
  const compareColumns = compareColumnsByAudience[audience];
  const rows = compareRowsByAudience[audience];

  return (
    <div className="plans-compare-incremental-grid">
      {compareColumns.map((column, planIndex) => {
        const addedFeatures = rows.filter((row) => {
          const included = includedByPlan(row);
          return included[planIndex] && (planIndex === 0 || !included[planIndex - 1]);
        });

        return (
          <article key={column} className="plans-compare-incremental-card">
            <h4>{column}</h4>
            <p className="plans-compare-incremental-base">
              {planIndex === 0 ? 'Incluye:' : `Todo lo de ${compareColumns[planIndex - 1]}, mas:`}
            </p>
            <ul>
              {addedFeatures.map((row) => (
                <li key={row.feature}>{row.feature}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export function PlansCompareSection() {
  return (
    <>
      {audiences.map((audience) => (
        <section key={audience} className={`plans-compare-section is-${audience}`}>
          <div className="plans-compare-inner">
            <p className="plans-pricing-eyebrow plans-compare-eyebrow">{audienceLabels[audience].eyebrow}</p>
            <h3>{audienceLabels[audience].title}</h3>
            <CompareIncrementalCards audience={audience} />
          </div>
        </section>
      ))}
    </>
  );
}
