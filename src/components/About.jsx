import React from 'react';
import '../styles/About.css';
import {User} from 'lucide-react';
import imageAbout from '/src/assets/images/i.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
         <User className="titleA" />
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-image-container">
             <img src={imageAbout} alt="À propos" className="about-image"  />
          </div>
          <div className="about-text">
           <p className="about-paragraph">
                Développeur Fullstack spécialisé en JavaScript, je conçois des applications web et mobiles performantes qui répondent aux défis concrets de votre entreprise.
              </p>

              <p className="about-paragraph">
                Fort de mon expérience avec les dernières technologies, j'accompagne chaque projet depuis l'idée initiale jusqu'à sa réalisation concrète.
              </p>

              <p className="about-paragraph">
                <strong>Ma mission :</strong> Développer des solutions digitales sur-mesure, alliant robustesse technique et valeur ajoutée métier, pour propulser votre croissance.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;