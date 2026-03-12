import { useMemo, useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Es necesario tener un wearable (dispositivo de registro) para registrarme en Athletain?',
    answer:
      'Si bien es recomendado tener un dispositivo wearable para obtener el analisis mas detallado, no es necesario para registrarte. Puedes subir datos manualmente.',
  },
  {
    question: 'Como Athletain protege la privacidad de mis metricas y datos de entrenamiento?',
    answer:
      'Tomamos la privacidad muy en serio. Tus datos son tratados de forma anonima para alimentar nuestros modelos de Machine Learning, y solo compartimos tu perfil detallado (incluyendo metricas clave) con los cazatalentos que tu decidas o que cumplan con tus filtros de interes.',
  },
  {
    question: 'Debo ser un atleta profesional para registrarme en Athletain?',
    answer:
      'No. Nuestros planes estan disenados para todo tipo de atletas, desde amateurs y principiantes que buscan un camino, hasta profesionales que desean optimizar su rendimiento y seguridad contractual.',
  },
  {
    question: 'Soy un Cazatalentos/Agencia. Que me ofrece el acceso IA?',
    answer:
      'El acceso IA te ofrece Filtros Predictivos Avanzados que van mas alla de la edad o posicion. Puedes buscar talentos con alto potencial de crecimiento, bajo riesgo de lesion predicho o perfiles que encajen con un sistema de juego especifico.',
  },
  {
    question: 'Que tipo de metricas analiza el Dashboard Predictivo de IA?',
    answer:
      'Nuestros modelos de Inteligencia Artificial analizan datos de rendimiento, carga de trabajo, recuperacion y potencial de crecimiento. Esto incluye metricas especificas de tu deporte para generar proyecciones sobre tu desarrollo a corto y medio plazo.',
  },
  {
    question: 'Como puedo solicitar un reembolso?',
    answer:
      'Puedes solicitar un reembolso dentro de los 5 dias posteriores a la compra si no estas satisfecho con el servicio. Comunicate con nosotros por escrito a support@athletain.com y evaluaremos tu caso.',
  },
];

export function PlansFaqContactSection() {
  const [openId, setOpenId] = useState(0);
  const firstColumn = useMemo(() => faqItems.slice(0, 3), []);
  const secondColumn = useMemo(() => faqItems.slice(3), []);

  const renderFaqItem = (item: FaqItem, idx: number) => {
    const isOpen = openId === idx;

    return (
      <article key={item.question} className={`plans-faq-item${isOpen ? ' is-open' : ''}`}>
        <button
          type="button"
          className="plans-faq-question"
          aria-expanded={isOpen}
          onClick={() => setOpenId((prev) => (prev === idx ? -1 : idx))}
        >
          <span>{item.question}</span>
          <span className={`plans-faq-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true">
            v
          </span>
        </button>
        {isOpen && <p className="plans-faq-answer">{item.answer}</p>}
      </article>
    );
  };

  return (
    <section className="plans-faq-contact-section">
      <div className="plans-faq-banner" role="img" aria-label="Atletas en competencia" />

      <div className="plans-faq-block">
        <div className="plans-faq-inner">
          <h3>Preguntas frecuentes</h3>

          <div className="plans-faq-grid">
            <div className="plans-faq-column">{firstColumn.map((item, idx) => renderFaqItem(item, idx))}</div>
            <div className="plans-faq-column">
              {secondColumn.map((item, idx) => renderFaqItem(item, idx + firstColumn.length))}
            </div>
          </div>
        </div>
      </div>

      <div className="plans-contact-block">
        <div className="plans-contact-inner">
          <div className="plans-contact-copy">
            <p>Tu proximo gran paso empieza con una conversacion.</p>
            <h4>Contactanos hoy mismo!</h4>
          </div>

          <form className="plans-contact-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Correo" aria-label="Correo" />
            <input type="text" placeholder="Mensaje" aria-label="Mensaje" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
