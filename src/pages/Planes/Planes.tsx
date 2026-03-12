import './Planes.css';
import { PlansCompareSection } from './componentsPlanes/PlansCompareSection';
import { PlansDetailsSection } from './componentsPlanes/PlansDetailsSection';
import { PlansFaqContactSection } from './componentsPlanes/PlansFaqContactSection';
import { PlansHeroSection } from './componentsPlanes/PlansHeroSection';
import { PlansPricingSection } from './componentsPlanes/PlansPricingSection';

export default function Planes() {
  return (
    <main className="plans-page">
      <PlansHeroSection />
      <PlansDetailsSection />
      <PlansPricingSection />
      <PlansCompareSection />
      <PlansFaqContactSection />
    </main>
  );
}
