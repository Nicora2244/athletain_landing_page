type CompareRow = {
  feature: string;
  free: boolean;
  starter: boolean;
  pro: boolean;
  elite: boolean;
};

const compareRows: CompareRow[] = [
  { feature: 'Perfil', free: true, starter: true, pro: true, elite: true },
  {
    feature: 'Dashboards basico Machine learning',
    free: false,
    starter: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'Dashboards completo Machine learning',
    free: false,
    starter: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Reporte mensual automatico',
    free: false,
    starter: true,
    pro: true,
    elite: true,
  },
  {
    feature: 'Reporte semanal automatico',
    free: false,
    starter: false,
    pro: true,
    elite: true,
  },
  {
    feature: 'Perfil resaltado para scouts',
    free: false,
    starter: false,
    pro: true,
    elite: true,
  },
  {
    feature: '2 consultas juridicas especializadas por mes',
    free: false,
    starter: false,
    pro: false,
    elite: true,
  },
];

function AvailabilityMark({ enabled }: { enabled: boolean }) {
  return (
    <span className={`plans-compare-mark${enabled ? ' is-enabled' : ''}`} aria-label={enabled ? 'Incluido' : 'No incluido'}>
      {enabled ? '✓' : '◯'}
    </span>
  );
}

export function PlansCompareSection() {
  return (
    <section className="plans-compare-section">
      <div className="plans-compare-inner">
        <div className="plans-compare-head">
          <h3>Compara todas las funciones</h3>

          <div className="plans-compare-tabs" role="tablist" aria-label="Comparar por perfil">
            <button type="button" className="plans-compare-tab is-active" role="tab" aria-selected="true">
              Ver como atleta
            </button>
            <button type="button" className="plans-compare-tab" role="tab" aria-selected="false">
              Ver como caza talentos
            </button>
          </div>
        </div>

        <div className="plans-compare-table-wrap">
          <table className="plans-compare-table">
            <thead>
              <tr>
                <th>Funciones</th>
                <th>Athlete Free</th>
                <th>Athlete Starter</th>
                <th>Athlete Pro</th>
                <th>Athlete Elite</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>
                    <AvailabilityMark enabled={row.free} />
                  </td>
                  <td>
                    <AvailabilityMark enabled={row.starter} />
                  </td>
                  <td>
                    <AvailabilityMark enabled={row.pro} />
                  </td>
                  <td>
                    <AvailabilityMark enabled={row.elite} />
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
