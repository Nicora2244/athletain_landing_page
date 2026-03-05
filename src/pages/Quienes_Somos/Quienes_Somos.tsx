import './Quienes_Somos.css';
import { AboutHeroSection } from './componentsQuienesSomos/AboutHeroSection';
import { AboutMissionVisionSection } from './componentsQuienesSomos/AboutMissionVisionSection';
import { AboutPowerSection } from './componentsQuienesSomos/AboutPowerSection';
import { AboutWhyUsSection } from './componentsQuienesSomos/AboutWhyUsSection';

export default function Quienes_Somos() {
  return (
    <main className="about-page">
      <AboutHeroSection />
      <AboutPowerSection />
      <AboutMissionVisionSection />
      <AboutWhyUsSection />
    </main>
  );
}
