import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FinalCtaSection } from './componentsHome/FinalCtaSection';
import { HeroSection } from './componentsHome/HeroSection';
import { HowItWorksSection } from './componentsHome/HowItWorksSection';
import { ScoutingSection } from './componentsHome/ScoutingSection';
import { TalentFocusSection } from './componentsHome/TalentFocusSection';

export default function Home() {
  const navigate = useNavigate();
  const handleRegister = () => navigate('/login');

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
