/* main.js : scripts pour Eneo Academy
   Ce code gère :
   - l'ouverture d'un mailto depuis le formulaire de contact,
   - l'animation d'apparition des zones de contenu,
   - le point d'entrée pour un développeur junior.
*/

const contactForm = document.querySelector('#contactForm');

function envoyerFormulaire(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const nom = formData.get('nom');
  const email = formData.get('email');
  const message = formData.get('message');
  const destination = 'eneogroup.cg@gmail.com';
  const subject = encodeURIComponent(`Demande de contact - ${nom}`);
  const body = encodeURIComponent(
    `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}\n\n---\nEnvoyé depuis le site Eneo Academy`
  );
  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
}

function animationApparition() {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  animationApparition();
});
