import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Quienes_Somos from './pages/Quienes_Somos/Quienes_Somos';
import Planes from './pages/Planes/Planes';
import PoliticaDatos from './pages/PoliticaDatos/PoliticaDatos';
import TerminosCondiciones from './pages/Terminos/TerminosCondiciones';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<Quienes_Somos />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/politica-de-datos" element={<PoliticaDatos />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
