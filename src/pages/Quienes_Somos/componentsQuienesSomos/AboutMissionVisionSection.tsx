import { useState } from 'react';

type CardId = 'mission' | 'vision';

type AboutCard = {
  id: CardId;
  frontTitle: string;
  backTitle: string;
  description: string;
};

const cards: AboutCard[] = [
  {
    id: 'mission',
    frontTitle: 'Nuestra mision',
    backTitle: 'Nuestra mision',
    description:
      'Impulsar el desarrollo profesional de los atletas mediante tecnologia, asesoria legal y visibilidad estrategica. Buscamos brindar acceso equitativo a herramientas que les permitan crecer, competir y construir una carrera deportiva solida.',
  },
  {
    id: 'vision',
    frontTitle: 'Nuestra vision',
    backTitle: 'Nuestra vision',
    description:
      'Ser la plataforma de referencia para atletas que buscan proyeccion internacional, respaldo juridico especializado y posicionamiento profesional. Queremos transformar la forma en que los deportistas gestionan su futuro dentro y fuera del campo.',
  },
];

export function AboutMissionVisionSection() {
  const [flipped, setFlipped] = useState<Record<CardId, boolean>>({
    mission: false,
    vision: false,
  });

  const handleCardFlip = (id: CardId) => {
    setFlipped((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section className="about-flip-section">
      <div className="about-flip-grid">
        {cards.map((card) => {
          const isFlipped = flipped[card.id];

          return (
            <button
              key={card.id}
              type="button"
              className={`about-flip-card about-flip-card--${card.id}${isFlipped ? ' is-flipped' : ''}`}
              onClick={() => handleCardFlip(card.id)}
              aria-pressed={isFlipped}
            >
              <span className="about-flip-card-inner">
                <span className="about-flip-card-face about-flip-card-front">
                  <span className="about-flip-card-badge">{card.id === 'mission' ? '?' : '?'}</span>
                  <span className="about-flip-card-title">{card.frontTitle}</span>
                </span>

                <span className="about-flip-card-face about-flip-card-back">
                  <span className="about-flip-card-badge">{card.id === 'mission' ? '?' : '?'}</span>
                  <span className="about-flip-card-title">{card.backTitle}</span>
                  <span className="about-flip-card-text">{card.description}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
