import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import shortLogo from '../../assets/images/Logo_corto.png';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-nav">
      <nav className="site-nav-inner" aria-label="Principal">
        <NavLink to="/" end className="site-nav-logo">
          <img src={logo} alt="Athletain" className="site-nav-logo-image site-nav-logo-image-full" />
          <img src={shortLogo} alt="Athletain" className="site-nav-logo-image site-nav-logo-image-short" />
        </NavLink>

        <button
          type="button"
          className={`site-nav-toggle${isMenuOpen ? ' is-open' : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="site-nav-menu" className={`site-nav-menu${isMenuOpen ? ' is-open' : ''}`}>
          <div className="site-nav-links">
            <NavLink to="/" end className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}>
              Inicio
            </NavLink>
            <NavLink to="/quienes-somos" className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}>
              Sobre Nosotros
            </NavLink>
            <NavLink to="/planes" className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}>
              Planes
            </NavLink>
          </div>

          <a href="https://CrisMen2610.github.io/athletain_app" className="site-nav-login">
            Iniciar Sesion
          </a>
        </div>

        <a href="https://CrisMen2610.github.io/athletain_app" className="site-nav-login site-nav-login-desktop">
          Iniciar Sesion
        </a>
      </nav>
    </header>
  );
}
