import { useT } from '../../../i18n/useLanguage';
import { useState, type ReactNode } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { IoAmericanFootball } from 'react-icons/io5';
import gymnast from '../../../assets/images/gymnast.jpg';
import volleyballPlayers from '../../../assets/images/volleyball-players.jpg';

type CardId = 'mission' | 'vision';

type AboutCard = {
  id: CardId;
  frontTitle: string;
  backTitle: string;
  description: string;
  frontImage: string;
  icon: ReactNode;
};

export function AboutMissionVisionSection() {
  const t = useT();
  const cards: AboutCard[] = [
    {
      id: 'mission',
      frontTitle: t('aboutMissionVisionSection.ourMission'),
      backTitle: t('aboutMissionVisionSection.ourMission'),
      frontImage: volleyballPlayers,
      icon: <IoAmericanFootball />,
      description: t('aboutMissionVisionSection.missionDescription'),
    },
    {
      id: 'vision',
      frontTitle: t('aboutMissionVisionSection.ourVision'),
      backTitle: t('aboutMissionVisionSection.ourVision'),
      frontImage: gymnast,
      icon: <FaYoutube />,
      description: t('aboutMissionVisionSection.visionDescription'),
    },
  ];
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
                  <img src={card.frontImage} alt="" className="about-flip-card-image" />
                  <span className="about-flip-card-front-content">
                    <span className="about-flip-card-badge" aria-hidden="true">
                      {card.icon}
                    </span>
                    <span className="about-flip-card-title">{card.frontTitle}</span>
                  </span>
                </span>

                <span className="about-flip-card-face about-flip-card-back">
                  <span className="about-flip-card-back-content">
                    <span className="about-flip-card-badge" aria-hidden="true">
                      {card.icon}
                    </span>
                    <span className="about-flip-card-title">{card.backTitle}</span>
                    <span className="about-flip-card-text">{card.description}</span>
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
