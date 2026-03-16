import React, { useState } from 'react';
import '../styles/Contact.css';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/movwolqw', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Erreur réseau');

      await Swal.fire({
        title: 'Message envoyé!',
        text: 'Je vous répondrai dès que possible.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      e.target.reset();
    } catch (error) {
      console.error('Erreur:', error);
      await Swal.fire({
        title: 'Erreur',
        text: "L'envoi du message a échoué.",
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

      // Version améliorée avec détection du client mail
      const handleEmailClick = () => {
        const email = 'ambinintsoajulio@gmail.com';
        const subject = 'Contact depuis votre portfolio';
        const body = 'Bonjour Julio,\n\nJe vous contacte concernant...';
        
        // Détecte si l'utilisateur est probablement sur un appareil mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
          // Pour mobile - utilise mailto: standard
          window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else {
          // Pour desktop - ouvre Gmail directement
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
        }
      };

       const openWhatsApp = () => {
        const phoneNumber = '261343068478'; // Sans le + au début
        const message = encodeURIComponent('Bonjour Julio, je vous contacte depuis votre portfolio...');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
      };
      
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="section-subtitle">
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. 
          Je suis toujours ravi d'échanger sur de nouvelles opportunités.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Mes Coordonnées</h3>
            
            <div className="contact-info-item">
              <Phone className="contact-icon" />
               <a href="#" className="contact-link" onClick={(e) => {e.preventDefault(); openWhatsApp(); }}>
                +261 38 75 914 69
               </a>
            </div>

             <div className="contact-info-item">
          <Mail className="contact-icon" />
          <a href="#" className="contact-link" onClick={(e) => { e.preventDefault(); handleEmailClick(); }} >
            ambinintsoajulio@gmail.com
          </a>
        </div>
            
            <div className="contact-info-item">
              <Github className="contact-icon" />
              <a href="https://github.com/ambinintsoaJulio" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub Profile</a>
            </div>
            
            <div className="contact-info-item">
              <Linkedin className="contact-icon" />
              <a href="https://www.linkedin.com/in/nirina-adonias-julio-ambinintsoa-b6a602370/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
            </div>
            
            <div className="contact-info-item">
              <MapPin className="contact-icon" />
              <span className="contact-text">Fianarantsoa Madagascar</span>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/movwolqw" 
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h3 className="form-title">Envoyez-moi un message</h3>
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Votre nom</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="form-input" 
                placeholder="Votre nom complet" 
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Votre email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="form-input" 
                placeholder="Votre adresse email" 
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Votre message</label>
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                className="form-textarea" 
                placeholder="Décrivez votre projet ou demande"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="form-button"
            >
               <Send className="button-icon" />
                  Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;