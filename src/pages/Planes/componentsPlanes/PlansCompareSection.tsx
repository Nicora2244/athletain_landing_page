import { useState } from 'react';

type CompareAudience = 'athlete' | 'scout';

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

function AvailabilityMark({ enabled }: { enabled: boolean }) {
  return (
    <span className={`plans-compare-mark${enabled ? ' is-enabled' : ''}`} aria-label={enabled ? 'Incluido' : 'No incluido'}>
      {enabled ? '✓' : '○'}
    </span>
  );
}

export function PlansCompareSection() {
  const [audience, setAudience] = useState<CompareAudience>('athlete');
  const compareColumns = compareColumnsByAudience[audience];
  const compareRows = compareRowsByAudience[audience];

  return (
    <section className="plans-compare-section">
      <div className="plans-compare-inner">
        <div className="plans-compare-head">
          <h3>Compara todas las funciones</h3>

          <div className="plans-compare-tabs" role="tablist" aria-label="Comparar por perfil">
            <button
              type="button"
              className={`plans-compare-tab${audience === 'athlete' ? ' is-active' : ''}`}
              role="tab"
              aria-selected={audience === 'athlete'}
              onClick={() => setAudience('athlete')}
            >
              Ver como atleta
            </button>
            <button
              type="button"
              className={`plans-compare-tab${audience === 'scout' ? ' is-active' : ''}`}
              role="tab"
              aria-selected={audience === 'scout'}
              onClick={() => setAudience('scout')}
            >
              Ver como caza talentos
            </button>
          </div>
        </div>

        <div className="plans-compare-table-wrap">
          <table className="plans-compare-table">
            <thead>
              <tr>
                <th>Funciones</th>
                <th>{compareColumns[0]}</th>
                <th>{compareColumns[1]}</th>
                <th>{compareColumns[2]}</th>
                <th>{compareColumns[3]}</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>
                    <AvailabilityMark enabled={row.col1} />
                  </td>
                  <td>
                    <AvailabilityMark enabled={row.col2} />
                  </td>
                  <td>
                    <AvailabilityMark enabled={row.col3} />
                  </td>
                  <td>
                    <AvailabilityMark enabled={row.col4} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
