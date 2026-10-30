import { useT } from '../../../i18n/useLanguage';
export function AboutWhyUsSection() {
  const t = useT();
  return (
    <section className="about-why-section">
      <div className="about-why-inner">
        <h3>{t('aboutWhyUsSection.whyChooseUs')}</h3>
        <p>{t('aboutWhyUsSection.description')}</p>
      </div>
    </section>
  );
}
