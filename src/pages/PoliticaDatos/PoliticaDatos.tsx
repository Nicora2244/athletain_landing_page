import { useT } from '../../i18n/useLanguage';
import LegalDocument from '../../components/LegalDocument/LegalDocument';
import { PRIVACY_POLICY } from '../../data/legalDocuments';

export default function PoliticaDatos() {
  const t = useT();
  return <LegalDocument doc={PRIVACY_POLICY} eyebrow={t('politicaDatos.legalLaw1581Of2012')} />;
}
