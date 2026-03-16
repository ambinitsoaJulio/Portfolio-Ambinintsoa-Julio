// AboutDetail.jsx
import React from 'react';
import '../styles/AboutDetail.css';
import {Code, Badge,UserCog  ,Laptop, Smartphone, Server, Settings, GraduationCap, Check, Square, Brain, User} from 'lucide-react';
const AboutDetail = () => {
  return (
    <div className="about-detail">
      <div className="section-titleA">
        <UserCog  className="title-iconA" />
        <h1 className="sH1">Profil Professionnel</h1>
      </div>
      <div className="columns-container">
        {/* Colonne de gauche - Expériences & Projets */}
        <div className="left-column">
          <div className="section">
            <h1><Code className="section-icon" /> Expériences Professionnelles</h1>
            
            <div className="card">
              <h2><Laptop className="item-icon" /> Développeur web et mobile, stagiaire</h2>
              <div className="meta">CHU Tambohobe Fianarantsoa | Août 2024 - Nov 2024</div>
              <p>
                Assemblage et integration des composantes d'une application de gestion de Banque de Sang 
                (Conception UML, réalisation avec Next.js et Nest.js).
              </p>
            </div>
            
            <div className="card">
              <h2><Laptop className="item-icon" /> Développeur web et mobile, stagiaire</h2>
              <div className="meta">Circonscription Scolaire Lalangina | Juillet 2023 - Septembre 2023</div>
              <p>
                Application web de gestion de demande de retraites (MERISE, Java, MySQL).
              </p>
            </div>

            <div className="card">
              <h2><Laptop className="item-icon" /> Développeur, stagiaire</h2>
              <div className="meta">CHU Andrainjato Fianarantsoa | Juin 2022</div>
              <p>
                Application de gestion des patients (MS Access).
              </p>
            </div>
          </div>

          <div className="section">
            <h1><Code className="section-icon" /> Projets Personnels</h1>
            
            <div className="card">
              <h2><Brain className="item-icon" /> Machine Learning</h2>
              <div className="meta">Master 1 Informatique | Juin 2025</div>
              <p>
                Plateforme de prédiction de tailles de vêtements (React.js + Flask Python).
              </p>
            </div>

            <div className="card">
              <h2><Code className="item-icon" /> JAVA EE</h2>
              <div className="meta">Master 1 Informatique | Mars 2025</div>
              <p>
                Plateforme de partage de notes de cours (JAVA EE).
              </p>
            </div>

            <div className="card">
              <h2><Code className="item-icon" /> Full Stack</h2>
              <div className="meta">Master 1 Informatique | Mars 2025</div>
              <p>
                E-Commerce de chaussures (React.js + Node.js/Express).
              </p>
            </div>
          </div>
        </div>

        {/* Colonne de droite - Éducation & Compétences */}
        <div className="right-column">
          <div className="section">
            <h1><GraduationCap className="section-icon" /> Éducation</h1>
            <div className="card">
              <ul className="education-list">
                <li className="unchecked"><Square className="icon" /> 2025 : Master en Informatique</li>
                <li className="checked"><Check className="icon" /> 2023 : Licence en Informatique</li>
                <li className="checked"><Check className="icon" /> 2021 : Baccalauréat scientifique</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h1><Settings className="section-icon" /> Compétences Techniques</h1>
            
            <div className="card">
              <h2><Laptop className="item-icon" /> Frontend</h2>
              <ul className="skills-list">
                <li>React (TypeScript)</li>
                <li>Vue.js/Vuetify</li>
                <li>HTML/CSS/JavaScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="card">
              <h2><Server className="item-icon" /> Backend</h2>
              <ul className="skills-list">
                <li>Node.js/Express</li>
                <li>Spring Boot</li>
                <li>Next.js/Nest.js</li>
                <li>Flask Python</li>
              </ul>
            </div>

            <div className="card">
              <h2><Smartphone className="item-icon" /> Mobile</h2>
              <ul className="skills-list">
                <li>Dart/Flutter</li>
                <li>React Native</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className="card">
              <h2><Settings className="item-icon" /> Outils</h2>
              <ul className="skills-list">
                <li>Git/GitHub</li>
                <li>VSCode</li>
                <li>Docker</li>
                <li>MySQL/PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;