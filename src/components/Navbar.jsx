import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Code, Briefcase, Mail, ChevronDown, Menu } from 'lucide-react';
import '../styles/Navbar.css';
import frFlag from '/src/assets/images/iconfr.jpeg';
import enFlag from '/src/assets/images/iconAng.jpeg';
import logo1 from '/src/assets/images/logo5.png';

const Navbar = () => {
  const [language, setLanguage] = useState('fr');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
    setIsMobileMenuOpen(false); 
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo1} alt="Logo Julio" className="logo-image" />
        </div>
        
        <div className="navbar-links">
          <Link to="home" smooth={true} duration={500} className="navbar-link" onClick={closeMobileMenu}>
            <Home size={18} className="nav-icon" />
            <span>Accueil</span>
          </Link>
          <Link to="about" smooth={true} duration={500} className="navbar-link" onClick={closeMobileMenu}>
            <User size={18} className="nav-icon" />
            <span>À propos</span>
          </Link>
          <Link to="service" smooth={true} duration={500} className="navbar-link" onClick={closeMobileMenu}>
            <Code size={18} className="nav-icon" />
            <span>Services</span>
          </Link>
          <Link to="projects" smooth={true} duration={500} className="navbar-link" onClick={closeMobileMenu}>
            <Briefcase size={18} className="nav-icon" />
            <span>Projets</span>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="navbar-link" onClick={closeMobileMenu}>
            <Mail size={18} className="nav-icon" />
            <span>Contact</span>
          </Link>
          
          <div className="language-selector">
            <button onClick={toggleLanguage} className="language-button">
              <span className="language-current">
                {language === 'fr' ? (
                  <>
                    <img src={frFlag} alt="Français" className="flag-icon" />
                    <span className="language-text">FR</span>
                  </>
                ) : (
                  <>
                    <img src={enFlag} alt="English" className="flag-icon" />
                    <span className="language-text">EN</span>
                  </>
                )}
                <ChevronDown size={14} className={`dropdown-arrow ${showLanguageDropdown ? 'open' : ''}`} />
              </span>
            </button>
            
            {showLanguageDropdown && (
              <div className="language-dropdown">
                <div 
                  className={`language-option ${language === 'fr' ? 'active' : ''}`}
                  onClick={() => changeLanguage('fr')}
                >
                  <img src={frFlag} alt="Français" className="flag-icon" />
                  <span>Français</span>
                </div>
                <div 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  <img src={enFlag} alt="English" className="flag-icon" />
                  <span>English</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <button 
          className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu mobile"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <Link to="home" smooth={true} duration={500} className="mobile-link" onClick={closeMobileMenu}>
          <Home size={18} className="nav-icon" />
          <span>Accueil</span>
        </Link>
        <Link to="about" smooth={true} duration={500} className="mobile-link" onClick={closeMobileMenu}>
          <User size={18} className="nav-icon" />
          <span>À propos</span>
        </Link>
        <Link to="service" smooth={true} duration={500} className="mobile-link" onClick={closeMobileMenu}>
          <Code size={18} className="nav-icon" />
          <span>Services</span>
        </Link>
        <Link to="projects" smooth={true} duration={500} className="mobile-link" onClick={closeMobileMenu}>
          <Briefcase size={18} className="nav-icon" />
          <span>Projets</span>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="mobile-link" onClick={closeMobileMenu}>
          <Mail size={18} className="nav-icon" />
          <span>Contact</span>
        </Link>
        
        <div className="mobile-language-options">
          <button 
            className={`mobile-language-option ${language === 'fr' ? 'active' : ''}`}
            onClick={() => changeLanguage('fr')}
          >
            <img src={frFlag} alt="Français" className="flag-icon" />
            Français
          </button>
          <button 
            className={`mobile-language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            <img src={enFlag} alt="English" className="flag-icon" />
            English
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;