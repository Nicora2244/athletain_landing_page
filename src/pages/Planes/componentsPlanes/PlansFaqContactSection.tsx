import { useT } from '../../../i18n/useLanguage';
import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

export function PlansFaqContactSection() {
  const t = useT();
  const faqItems: FaqItem[] = [
    {
      question: t('plansFaqContactSection.wearableQuestion'),
      answer: t('plansFaqContactSection.wearableAnswer'),
    },
    {
      question: t('plansFaqContactSection.privacyQuestion'),
      answer: t('plansFaqContactSection.privacyAnswer'),
    },
    {
      question: t('plansFaqContactSection.professionalQuestion'),
      answer: t('plansFaqContactSection.professionalAnswer'),
    },
    {
      question: t('plansFaqContactSection.scoutQuestion'),
      answer: t('plansFaqContactSection.scoutAnswer'),
    },
    {
      question: t('plansFaqContactSection.metricsQuestion'),
      answer: t('plansFaqContactSection.metricsAnswer'),
    },
    {
      question: t('plansFaqContactSection.refundQuestion'),
      answer: t('plansFaqContactSection.refundAnswer'),
    },
  ];
  const [openId, setOpenId] = useState(-1);
  const firstColumn = faqItems.slice(0, 3);
  const secondColumn = faqItems.slice(3);

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
      <div className="plans-faq-banner" role="img" aria-label={t('plansFaqContactSection.athletesCompeting')} />

      <div className="plans-faq-block">
        <div className="plans-faq-inner">
          <h3>{t('plansFaqContactSection.frequentlyAskedQuestions')}</h3>

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
            <p>{t('plansFaqContactSection.yourNextBigStepStartsWith')}</p>
            <h4>{t('plansFaqContactSection.getInTouchToday')}</h4>
          </div>

          <form className="plans-contact-form" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder={t('plansFaqContactSection.email')}
              aria-label={t('plansFaqContactSection.email')}
            />
            <input
              type="text"
              placeholder={t('plansFaqContactSection.message')}
              aria-label={t('plansFaqContactSection.message')}
            />
            <button type="submit">{t('plansFaqContactSection.send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
