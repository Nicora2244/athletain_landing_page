import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <h3 className="site-footer-logo">
            ATHLETA<span>IN</span>
          </h3>
          <p>
            La plataforma que conecta talento con oportunidades reales. Asesoria legal, visibilidad profesional y respaldo
            estrategico para atletas y organizaciones deportivas.
          </p>
          <div className="site-footer-social">
            <span>Siguenos en:</span>
            <a href="#" aria-label="Facebook">
              f
            </a>
          </div>
        </div>

        <div className="site-footer-col">
          <h4>Menu</h4>
          <nav className="site-footer-links" aria-label="Menu del sitio">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/quienes-somos">Sobre Nosotros</NavLink>
            <a href="#">Servicios</a>
            <a href="#">Exposicion de talento</a>
            <a href="#">Explorar Atletas</a>
            <a href="#">Recursos</a>
          </nav>
        </div>

        <div className="site-footer-col">
          <h4>Informacion de contacto</h4>
          <div className="site-footer-contact">
            <p>
              <strong>Horario:</strong>
              <span>Todo el dia, todos los dias.</span>
            </p>
            <p>
              <strong>Telefono movil:</strong>
              <span>Lorem ipsum dolor sit</span>
            </p>
            <p>
              <strong>Correo electronico</strong>
              <span>Lorem ipsum dolor</span>
            </p>
          </div>
        </div>

        <div className="site-footer-col">
          <h4>Legal</h4>
          <nav className="site-footer-links" aria-label="Links legales">
            <a href="#">Aviso Legal</a>
            <a href="#">Politica de privacidad</a>
            <a href="#">Politica de cookies (UE)</a>
            <a href="#">Accesibilidad</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
