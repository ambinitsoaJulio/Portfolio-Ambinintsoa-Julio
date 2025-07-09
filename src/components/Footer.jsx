import React from 'react';
import { Heart, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} | Made with{' '}
          <Heart className="heart-icon" size={16} />{' '}
          by <span className="highlight">AMBININTSOA</span>{' '}
          <span className="name">Nirina Adonias Julio</span>
        </p>
        <div className="footer-links">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">
            <Home size={18} />
            <span>Accueil</span>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">
            <User size={18} />
            <span>À propos</span>
          </Link>
          <Link to="service" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">
            <Briefcase size={18} />
            <span>Services</span>
          </Link>
          <Link to="projets" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">
            <FolderOpen size={18} />
            <span>Projets</span>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">
            <Mail size={18} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;