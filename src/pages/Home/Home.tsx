import './Home.css';
import { FinalCtaSection } from './componentsHome/FinalCtaSection';
import { HeroSection } from './componentsHome/HeroSection';
import { HowItWorksSection } from './componentsHome/HowItWorksSection';
import { ScoutingSection } from './componentsHome/ScoutingSection';
import { TalentFocusSection } from './componentsHome/TalentFocusSection';

const APP_LOGIN_URL = 'https://CrisMen2610.github.io/athletain_app';

export default function Home() {
  const handleRegister = () => {
    window.location.href = APP_LOGIN_URL;
  };

  return (
    <main className="home-page">
      <HeroSection onRegister={handleRegister} />
      <TalentFocusSection onRegister={handleRegister} />
      <HowItWorksSection />
      <ScoutingSection onRegister={handleRegister} />
      <FinalCtaSection />
    </main>
  );
}
