import LegalDocument from '../../components/LegalDocument/LegalDocument';
import { PRIVACY_POLICY } from '../../data/legalDocuments';

export default function PoliticaDatos() {
  return <LegalDocument doc={PRIVACY_POLICY} eyebrow="Legal · Ley 1581 de 2012" />;
}
