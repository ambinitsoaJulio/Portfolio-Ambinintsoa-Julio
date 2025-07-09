// src/components/Projects.jsx
import React, { useState } from 'react';
import { Code, Music, Droplet, ExternalLink, Github, BookOpen, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-scroll';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
      {
      id: 1,
      title: "Boutique en ligne de chaussures",
      shortDescription: "Plateforme e-commerce complète pour vente de chaussures",
      fullDescription: "Solution e-commerce complète avec catalogue produit avancé, système de panier et commandes. Les visiteurs peuvent filtrer les chaussures par marque, taille, couleur et style, avec une expérience utilisateur optimisée pour le mobile et desktop. Le backoffice permet la gestion des stocks et commandes.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MySQL"
      ],
      githubLink: "https://github.com/ambinitsoaJulio/TECH_WEB_AV", 
      demoLink: "#",
      image: "./src/assets/images/chaussure4.png",
      features: [
        "Catalogue produits avec filtres avancés",
        "Fiche produit détaillée (tailles/couleurs)",
        "Gestion du panier persistante",
        "Processus de commande en 4 étapes",
        "Système de paiement intégré",
        "Notifications en temps réel",
        "Backoffice administrateur",
        "Gestion des stocks",
        "Recherche intelligente",
        "Évaluation des produits",
        "Responsive design",
        "Sécurisation des transactions"
      ],
        icon: <ShoppingBag size={20} />
      },
    {
      id: 2,
      title: "Plateforme de Partage de Notes de cours",
      shortDescription: "Réseau éducatif pour partager des notes de cours en ligne",
      fullDescription: "Plateforme collaborative permettant aux étudiants et enseignants de publier, consulter et commenter des notes de cours. Le système inclut des fonctionnalités sociales comme les commentaires, les favoris et un système de notation des documents partagés.",
      technologies: ["Java EE", "WildFly", "JBoss", "JPA"],
      githubLink: "https://github.com/ambinitsoaJulio/Java-EE-WildFly-JBoss-",
      demoLink: "#",
      image: "./src/assets/images/imageAfficheProjet2.png",
      features: [
        "Publication de notes de cours",
        "Système de commentaires",
        "Enregistrement des documents",
        "Recherche avancée",
        "Notation des documents"
      ],
      icon: <BookOpen size={20} />
    },
     {
        id: 3,
        title: "Portfolio Professionnel",
        shortDescription: "Mon portfolio personnel présentant mes compétences et projets",
        fullDescription: "Ce portfolio a été conçu pour présenter de manière élégante et professionnelle mon parcours, mes compétences techniques et mes réalisations. Il met en valeur mes capacités en développement frontend avec une interface moderne, réactive et performante.",
        technologies: ["React.js", "React Lucide", "CSS3", "Vite"],
        githubLink: "https://github.com/ambinintsoaJulio/mon-portfolio",
        demoLink: "#",
        image: "./src/assets/images/imageAfficheProjet3.webp",
        features: [
          "Design moderne et responsive",
          "Navigation fluide avec react-scroll",
          "Affichage des projets avec modal détaillée",
          "Section de contact fonctionnelle",
          "Optimisation des performances",
          "Intégration d'icônes Lucide",
          "Thème coloré personnalisé"
        ],
        icon: <Code size={20} />
      },
      {
        id: 4,
        title: "Application Mobile de Lecture Audio/Video - Mozika",
        shortDescription: "Application de lecture audio/video avec gestion complète de médias",
        fullDescription: "Lecteur multimedia complet développé avec React Native et Expo Go. L'application scanne automatiquement les fichiers audio/video du téléphone, offre une expérience de lecture fluide avec contrôle complet et des fonctionnalités avancées de gestion de playlist.",
        technologies: [
          "React Native", 
          "Expo Go",
          "React Navigation",
          "Expo AV"
        ],
        githubLink: " https://github.com/ambinitsoaJulio/projet-lecteur-musique-julioL1",
        demoLink: "#",
        image: "./src/assets/images/lecteurMusique2.png",
        features:[
          "Lecture audio et vidéo",
          "Mode plein écran et miniature",
          "Scan automatique des fichiers (MP3/MP4)",
          "Commandes : Play/Pause/Next/Previous",
          "Gestion de playlist",
          "Barre de progression et temps écoulé",
          "Equalizer visuel",
          "Recherche par titre/artiste",
          "Fond d'écran dynamique",
          "Dark/Light mode"
        ],
      icon: <Music size={25} />
      },

     {
      id: 5,
      title: "Plateforme de Prédiction de la taille de vetements",
      shortDescription: "Solution IA pour prédire la taille idéale des vêtements (S, M, L, XL)",
      fullDescription: "Cette application utilise des algorithmes de machine learning pour analyser les mensurations corporelles et recommander la taille de vêtement optimale. Elle permet de réduire significativement les retours dans le e-commerce en offrant des prédictions précises basées sur les données historiques.",
      technologies: ["React", "Flask", "Python", "Machine Learning"],
      githubLink: "https://github.com/ambinitsoaJulio/Projet-RNA",
      demoLink: "#",
      image: "./src/assets/images/imageAfficheProjet1.png",
      features: [
        "Prédiction précise des tailles",
        "Interface utilisateur intuitive",
        "Système d'apprentissage automatique",
        "Intégration avec les boutiques en ligne"
      ],
      icon: <ShoppingBag size={20} />
    },
      {
        id: 6,
        title: "Système de Gestion de Banque de Sang - CRTS Tambohobe",
        shortDescription: "Plateforme digitale de gestion des stocks sanguins pour le centre régional de transfusion",
        fullDescription: "Solution complète développée pour le CRTS de Fianarantsoa permettant la gestion intelligente des réserves sanguines. Le système offre un suivi en temps réel des stocks par groupe sanguin, des alertes automatisées, la gestion des donneurs et des prélèvements, avec une interface adaptée aux besoins des professionnels de santé.",
        technologies: [
          "Next.js",
          "NestJS",
          "PostgreSQL",
          "TypeORM",
          "Chart.js"
        ],
        githubLink: "https://github.com/Ranto2564/stageL3", 
        demoLink: "#",
        image: "./src/assets/images/sang.png",
        features: [
          "Tableau de bord des stocks en temps réel",
          "Gestion des groupes sanguins (A/B/O/AB +/-)",
          "Alertes automatiques (niveaux critiques)",
          "Gestion des donneurs et historiques",
          "Suivi des prélèvements et transfusions",
          "Visualisation graphique des données",
          "Export de rapports PDF/Excel",
          "Système de rendez-vous en ligne",
          "Cartographie des donneurs réguliers",
          "Multi-niveaux d'accès (admin/médecin/technicien)",
          "Historique complet des opérations"
        ],
        icon: <Droplet size={20} />
      }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projets</h2>
        <p className="section-subtitle">Transformez vos idées en réalité</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">
                  {project.icon && <span className="project-icon">{project.icon}</span>}
                  {project.title}
                </h3>
                
                <p className="project-short-description">{project.shortDescription}</p>
                
                <button 
                  className="view-details-button"
                  onClick={() => openModal(project)}
                >
                  Voir plus de détails
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <p>Prêt à donner vie à votre vision ? Je suis là pour vous aider.</p>
          <Link to="contact" smooth={true} duration={500} className="cta-button">
            Intéressé
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-image-container">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            </div>
            
            <div className="modal-body">
              <h3 className="modal-title">
                {selectedProject.icon && <span className="project-icon">{selectedProject.icon}</span>}
                {selectedProject.title}
              </h3>
              
              <p className="modal-description">{selectedProject.fullDescription}</p>
              
              <div className="modal-section">
                <h4 className="modal-subtitle">Fonctionnalités</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h4 className="modal-subtitle">Technologies</h4>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-links">
                <a href={selectedProject.githubLink} className="project-link">
                  <Github size={16} /> Code
                </a>
               {/* <a href={selectedProject.demoLink} className="project-link">
                  <ExternalLink size={16} /> Demo
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;