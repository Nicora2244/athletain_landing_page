import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="site-nav">
      <nav className="site-nav-inner" aria-label="Principal">
        <NavLink to="/" end className="site-nav-logo">
          ATHLE<span>TA</span>IN
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

        <NavLink to="/login" className={({ isActive }) => `site-nav-login${isActive ? ' is-active' : ''}`}>
          Iniciar Sesion
        </NavLink>
      </nav>
    </header>
  );
}
