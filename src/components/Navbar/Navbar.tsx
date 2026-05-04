import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="site-nav">
      <nav className="site-nav-inner" aria-label="Principal">
        <NavLink to="/" end className="site-nav-logo">
          <img src={logo} alt="Athletain" className="site-nav-logo-image" />
        </NavLink>

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
      </nav>
    </header>
  );
}
