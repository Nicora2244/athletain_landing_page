import { useT } from '../../i18n/useLanguage';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import shortLogo from '../../assets/images/Logo_corto.png';
import './Navbar.css';
import { LanguageSwitch } from '../../i18n/LanguageSwitch';

export default function Navbar() {
  const location = useLocation();
  return <NavbarContent key={location.pathname} />;
}

function NavbarContent() {
  const t = useT();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-nav">
      <nav className="site-nav-inner" aria-label={t('navbar.mainNavigation')}>
        <NavLink to="/" end className="site-nav-logo">
          <img src={logo} alt="Athletain" className="site-nav-logo-image site-nav-logo-image-full" />
          <img src={shortLogo} alt="Athletain" className="site-nav-logo-image site-nav-logo-image-short" />
        </NavLink>

        <button
          type="button"
          className={`site-nav-toggle${isMenuOpen ? ' is-open' : ''}`}
          aria-label={isMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
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
              {t('navbar.home')}
            </NavLink>
            <NavLink to="/quienes-somos" className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}>
              {t('navbar.aboutUs')}
            </NavLink>
            <NavLink to="/planes" className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}>
              {t('navbar.plans')}
            </NavLink>
          </div>

          <a href="https://CrisMen2610.github.io/athletain_app" className="site-nav-login">
            {t('navbar.logIn')}
          </a>
          <LanguageSwitch />
        </div>

        <div className="site-nav-desktop-actions">
          <LanguageSwitch />
          <a href="https://CrisMen2610.github.io/athletain_app" className="site-nav-login site-nav-login-desktop">
            {t('navbar.logIn')}
          </a>
        </div>
      </nav>
    </header>
  );
}
