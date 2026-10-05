import type { PlanAudience } from './plansAudience';

export type Plan = {
  name: string;
  price: string;
  note?: string;
  description: string;
  cta?: string;
  // Name of the plan whose features this one builds on, if any.
  includesPlan?: string;
  features: string[];
};

export type AudiencePlans = {
  audience: PlanAudience;
  eyebrow: string;
  title: string;
  subtitle: string;
  featuresTitle: string;
  plans: Plan[];
  disclaimer?: string;
};

// Source: "Estructura de planes y funcionalidades - Go to market, version 1".
export const audiencePlans: AudiencePlans[] = [
  {
    audience: 'athlete',
    eyebrow: 'Para atletas',
    title: 'Planes para atletas',
    subtitle: 'Ponte en el radar de los scouts y entiende tu rendimiento.',
    featuresTitle: 'Que incluye cada plan de atleta',
    plans: [
      {
        name: 'Athlete Starter',
        price: 'Gratis',
        description: 'Ser visto y empezar a medir',
        features: [
          'Creacion de perfil con foto e informacion personal y deportiva',
          'Dashboard completo con machine learning',
          'Reporte mensual automatizado en tu correo',
        ],
      },
      {
        name: 'Athlete Pro',
        price: '$20.000 COP',
        note: 'Mes',
        description: 'Analizar y maximizar',
        includesPlan: 'Athlete Starter',
        features: [
          'Reporte semanal y mensual con analisis de IA y sugerencias personalizadas',
          'Perfil resaltado para cazatalentos',
          'Bot de nutricion integrado en tus rutinas',
          'Asistente de IA para tu carrera deportiva',
        ],
      },
      {
        name: 'Athlete Elite',
        price: '$120.000 COP',
        note: 'Mes',
        description: 'Rendimiento y proteccion juridica',
        includesPlan: 'Athlete Pro',
        features: ['1 consulta juridica deportiva por mes, agendada desde la app'],
      },
    ],
    disclaimer:
      'Athletain solo proporciona sugerencias generales en materia de nutricion. Esta funcionalidad no reemplaza el criterio de un profesional de la salud ni de un nutricionista certificado.',
  },
  {
    audience: 'scout',
    eyebrow: 'Para caza talentos',
    title: 'Planes para caza talentos',
    subtitle: 'Encuentra, analiza y prioriza talento con datos.',
    featuresTitle: 'Que incluye cada plan de scout',
    plans: [
      {
        name: 'Scout Pro',
        price: '$100.000 COP',
        note: 'Mes · primer mes gratis',
        description: 'Descubrimiento y analisis',
        features: [
          'Acceso a reportes de rendimiento de deportistas',
          'Filtros avanzados de busqueda con machine learning',
          'Solicitud de reportes individuales por deportista',
          'Calendario para agendar asesorias juridicas deportivas',
          '1 asesoria juridica incluida por mes',
        ],
      },
      {
        name: 'Scout Elite',
        price: '$300.000 COP',
        note: 'Mes',
        description: 'Prediccion y priorizacion',
        includesPlan: 'Scout Pro',
        features: [
          'Dashboard predictivo: prediccion de lesiones y deteccion de talentos emergentes',
          'Motor de recomendacion de talentos con alertas automaticas',
          'Alertas de mayor calidad y volumen, con criterios personalizados',
          '2 asesorias juridicas incluidas por mes',
        ],
      },
      {
        name: 'Scout Enterprise',
        price: 'Contactenos',
        description: 'Integracion para clubes y academias',
        cta: 'Contactenos',
        features: [
          'Integracion multi-equipo entre equipos, clubes y academias',
          'Acceso a la base de datos Athletain',
          'Integracion con los datos de tu equipo',
          'Acceso completo a reportes y dashboards de la plataforma',
          'Asesoria juridica',
        ],
      },
    ],
    disclaimer:
      'Los datos de sueno y alimentacion de los deportistas no son visibles para caza talentos, por tratarse de informacion sensible.',
  },
];
