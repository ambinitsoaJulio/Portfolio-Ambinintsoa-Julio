// Services.jsx
import React from 'react';
import {Code, Cpu, Smartphone, Gauge,  SmartphoneNfc, Globe, ClipboardList, Rocket, BrainCircuit, Server, Database  } from 'lucide-react';
import '../styles/Service.css'; 
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <section className="services-section" id="service">
      <div className="services-header">
        <Rocket className="main-icon" />
        <h1>Services</h1>
      </div>
      <p className="intro">
        Développeur passionné spécialisé dans la création d'applications web modernes et performantes. 
        Je transforme vos idées en solutions numériques innovantes en utilisant les technologies populaires du marché.
      </p>

      <div className="services-grid">
        {/* Service 1 */}
        <div className="service-card">
          <div className="service-header">
            <Code className="service-icon" />
            <h2>Développement Web Frontend</h2>
          </div>
          <p>Création d'interfaces modernes et réactives pour une expérience utilisateur fluide.</p>
          <ul>
              <li>React.js/Next.js</li>
              <li>Angular</li>
              <li>Vue.js/Nuxt.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS/ Bootstrap</li>
              <li>HTML5/CSS3</li>
              {/* <li>Tests(Jest)</li> */}
          </ul>
        </div> 

        {/* Service 2 */}
        <div className="service-card">
          <div className="service-header">
            <Cpu className="service-icon" />
            <h2>Développement web Backend</h2>
          </div>
          <p>Conception d'APIs sécurisées et gestion efficace des bases de données.</p>
          <ul>
            <li>Node.js</li>
            <li>express</li>
            <li>Python</li>
            <li>Nest.js</li>
            <li>spring boot</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="service-header">
            <Smartphone className="service-icon" />
            <h2>Applications Responsives</h2>
          </div>
          <p>Développement d'applications adaptées à tous les types d'écrans.</p>
          <ul>
            <li>Mobile First</li>
            <li>Adaptive Design</li> 
            <li>Cross-browser</li>
            <li>Performance Mobile</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <div className="service-header">
            <Gauge className="service-icon" />
            <h2>Optimisation Web</h2>
          </div>
          <p>Boostez les performances et l'expérience utilisateur de votre site avec des solutions techniques ciblées .</p>
          <ul>
            <li>API RESTful</li>
            <li>Performance</li>
            <li>Optimisation Assets</li>
            <li>Compression</li>
          </ul>
        </div>

        {/* Service 5 */}
        <div className="service-card">
          <div className="service-header">
            <SmartphoneNfc className="service-icon" />
            <h2>Applications Web & Mobiles</h2>
          </div>
          <p>Création d'applications sur mesure pour répondre à vos besoins.</p>
          <ul>
            <li>React Native</li>
            <li>Dark</li>
            <li>Flutter</li>
            <li>GraphQL</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Service 6 */}
        <div className="service-card">
          <div className="service-header">
            <ClipboardList className="service-icon" />
            <h2>Gestion de Projet</h2>
          </div>
          <p>Planification et suivi efficaces avec des outils collaboratifs.</p>
          <ul>
            <li>VsCode</li>
            <li>Trello</li>
            <li>GitHub</li>
            <li>Doctor</li>
            <li>Figma</li>
          </ul>
        </div>

        {/* Service 7 */}
        <div className="service-card">
          <div className="service-header">
            <Database className="service-icon" />
            <h2>Gestion de Base de Données</h2>
          </div>
          <p>Conception et optimisation de solutions de stockage de données performantes.</p>
          <ul>
            <li>mySQL</li>
            <li>Postgresql</li>
            <li>MongoDB</li>
            <li>Sécurité des données</li>
          </ul>
        </div>

        {/* Nouveau Service 8 - IA/ML */}
        <div className="service-card">
          <div className="service-header">
            <BrainCircuit className="service-icon" />
            <h2>Intelligence Artificielle</h2>
          </div>
          <p>Développement de modèles prédictifs et solutions d'apprentissage automatique.</p>
          <ul>
            <li>Réseaux de neurones</li>
            <li>Machine Learning</li>
            <li>Prédictions automatisées</li>
            <li>Traitement de données</li>
          </ul>
        </div>
      </div>

      <div className="cta-section">
        <Globe className="cta-icon" />
        <h2>Prêt à démarrer votre projet ?</h2>
        <p>
          Je suis disponible pour transformer vos idées en solutions numériques innovantes. 
          Contactez-moi pour discuter de votre projet.
        </p>
       <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="cta-button"
        >
          Discuter de votre projet
        </Link>
      </div>
    </section>
  );
};

export default Services;