import LegalDocument from '../../components/LegalDocument/LegalDocument';
import { TERMS_AND_CONDITIONS } from '../../data/legalDocuments';

export default function TerminosCondiciones() {
  return (
    <LegalDocument doc={TERMS_AND_CONDITIONS} eyebrow="Legal · Términos de uso" />
  );
}
