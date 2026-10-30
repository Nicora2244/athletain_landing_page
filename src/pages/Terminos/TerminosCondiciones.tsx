import { useT } from '../../i18n/useLanguage';
import LegalDocument from '../../components/LegalDocument/LegalDocument';
import { TERMS_AND_CONDITIONS } from '../../data/legalDocuments';

export default function TerminosCondiciones() {
  const t = useT();
  return <LegalDocument doc={TERMS_AND_CONDITIONS} eyebrow={t('terminosCondiciones.legalTermsOfUse')} />;
}
