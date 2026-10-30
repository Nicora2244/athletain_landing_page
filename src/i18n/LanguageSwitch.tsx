import { useLanguage } from './useLanguage';

export function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <span className="site-nav-language" role="group" aria-label={t('language.label')}>
      <button
        type="button"
        aria-label={t('language.switchToEs')}
        aria-pressed={language === 'es'}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
      <span aria-hidden="true">·</span>
      <button
        type="button"
        aria-label={t('language.switchToEn')}
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </span>
  );
}
