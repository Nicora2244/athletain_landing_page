import { useT } from '../../i18n/useLanguage';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import logo from '../../assets/BRANDING/Logo blanco.svg';
import './Footer.css';

export default function Footer() {
  const t = useT();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <img src={logo} alt="Athletain" className="site-footer-logo" />
          <p>{t('footer.description')}</p>
          <div className="site-footer-social">
            <span>{t('footer.followUs')}</span>
            <a
              href="https://www.instagram.com/athletain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.athletainOnInstagram')}
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer-col">
          <h4>{t('footer.menu')}</h4>
          <nav className="site-footer-links" aria-label={t('footer.siteNavigation')}>
            <NavLink to="/">{t('footer.home')}</NavLink>
            <NavLink to="/quienes-somos">{t('footer.aboutUs')}</NavLink>
            <NavLink to="/planes">{t('footer.plans')}</NavLink>
          </nav>
        </div>

        <div className="site-footer-col">
          <h4>{t('footer.contactInformation')}</h4>
          <div className="site-footer-contact">
            <p>
              <strong>{t('footer.mobile')}</strong>
              <span>
                <a href="tel:+573165042239">+57 316 504 2239</a>
              </span>
            </p>
            <p>
              <strong>{t('footer.email')}</strong>
              <span>
                <a href="mailto:support@athletain.com">support@athletain.com</a>
              </span>
            </p>
          </div>
        </div>

        <div className="site-footer-col">
          <h4>Legal</h4>
          <nav className="site-footer-links" aria-label={t('footer.legalLinks')}>
            <NavLink to="/terminos-y-condiciones">{t('footer.termsAndConditions')}</NavLink>
            <NavLink to="/politica-de-datos">{t('footer.dataPrivacyPolicy')}</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
