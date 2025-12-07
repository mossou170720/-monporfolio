const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const enBtn = $('#enBtn');
const frBtn = $('#frBtn');
const darkToggle = $('#darkToggle');
const burger = $('#burger');
const navLinks = $('#navLinks');

const translations = {
  fr: {
    menu_home: "Accueil",
    menu_about: "À propos",
    menu_services: "Services",
    menu_skills: "Compétences",
    menu_projects: "Projets",
    menu_cv: "CV",
    menu_contact: "Contact",
    hero: [
      "Bonjour, je suis Mossane Diouf",
      "Développeuse Web Professionnelle",
      "Designer graphique et créatrice de supports professionnels"
    ],
    about_title: "À propos de moi",
    about_text: "Je suis Mossane Diouf, designer graphique et développeuse web. Je crée des sites modernes, interactifs et fonctionnels avec un design élégant. Passionnée par la technologie et le design, je transforme vos idées en solutions digitales efficaces et créatives.",
    services_title: "Mes Services",
    services: [
      {
        title:"Développement Web",
        items:["Création de sites web responsives, adaptés aux ordinateurs, tablettes et mobiles.","Intégration HTML, CSS, JavaScript et utilisation de frameworks modernes comme Laravel ou React."]
      },
      {
        title:"Développement d’Applications",
        items:["Conception d’applications web avec bases de données (MySQL, PostgreSQL).","Création de solutions de gestion : stocks, santé, scolaire, etc."]
      },
      {
        title:"Design & Supports",
        items:["Création de CV et lettres de motivation professionnelles.","Conception d’affiches, bannières et cartes de visite.","Réalisation de cartes d’invitation personnalisées."]
      }
    ],
    skills_title: "Compétences",
    parcours_title: "Parcours Académique",
    parcours_items: [
      "Licence en Développement d'Applications et Administration Web - Université Alioune Diop de Bambey",
      "Projets académiques et personnels en développement web",
      "Formation en programmation orientée objet et bases de données",
      "Formation en programmation chez Xarala"
    ],
    projects_title: "Mes Projets",
    project1: {title:"Application Gestion des Tickets", desc:"Gestion des tickets et rendez-vous dans le poste de santé de TOUBA TOUL."},
    project2: {title:"Quelques réalisations graphiques", desc:"Découvrez mes créations : CV, affiches, lettres de motivation et plus encore."},
    cv_title:"Mon CV",
    contact_title:"Contactez-moi",
    contact_email:"Email : <a href='mailto:mossoumoss@gmail.com'>mossoumoss@gmail.com</a>",
    name_placeholder:"Votre nom",
    email_placeholder:"Votre mail",
    message_placeholder:"Votre message",
    contact_btn:"Envoyer sur WhatsApp",
    footer:"© 2025 Mossane Diouf. Tous droits réservés."
  },

  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_services: "Services",
    menu_skills: "Skills",
    menu_projects: "Projects",
    menu_cv: "CV",
    menu_contact: "Contact",
    hero: [
      "Hi, I’m Mossane Diouf",
      "Professional Web Developer",
      "Graphic Designer & Creator of Professional Designs"
    ],
    about_title: "About Me",
    about_text: "I am Mossane Diouf, a graphic designer and web developer. I create modern, interactive and functional websites with elegant design. Passionate about technology and design, I turn ideas into effective and creative digital solutions.",
    services_title: "My Services",
    services: [
      {
        title:"Web Development",
        items:["Creating responsive websites for computers, tablets and mobiles.","HTML, CSS, JavaScript integration and using modern frameworks like Laravel or React."]
      },
      {
        title:"Application Development",
        items:["Designing web applications with databases (MySQL, PostgreSQL).","Creating management solutions: stock, health, school, etc."]
      },
      {
        title:"Design & Support",
        items:["Creating professional CVs and cover letters.","Designing posters, banners, and business cards.","Creating personalized invitation cards."]
      }
    ],
    skills_title: "Skills",
    parcours_title: "Academic Background",
    parcours_items: [
      "Bachelor's degree in Web Application Development and Administration - Université Alioune Diop de Bambey",
      "Academic and personal web development projects",
      "Training in object-oriented programming and databases",
      "Programming training at Xarala"
    ],
    projects_title: "My Projects",
    project1: {title:"Ticket Management App", desc:"Management of tickets and appointments in TOUBA TOUL health post."},
    project2: {title:"Graphic Works", desc:"Discover my creations: CVs, posters, cover letters and more."},
    cv_title:"My CV",
    contact_title:"Contact Me",
    contact_email:"Email: <a href='mailto:mossoumoss@gmail.com'>mossoumoss@gmail.com</a>",
    name_placeholder:"Your Name",
    email_placeholder:"Your Email",
    message_placeholder:"Your Message",
    contact_btn:"Send via WhatsApp",
    footer:"© 2025 Mossane Diouf. All rights reserved."
  }
};

// ---------------------------------------------------
// TYPING PROFESSIONNEL (lettre par lettre + suppression)
// ---------------------------------------------------
function fancyTyping(element, texts, typingSpeed = 80, pause = 1500) {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentText = texts[phraseIndex];
    
    if (!deleting) {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(type, pause);
        return;
      }
    } else {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % texts.length;
      }
    }
    setTimeout(type, typingSpeed);
  }

  type();
}

// Appliquer aux 3 lignes du hero avec décalage pour effet pro
function startHeroTyping(lang){
  fancyTyping($('#hero-line1'), [translations[lang].hero[0]]);
  setTimeout(()=>fancyTyping($('#hero-line2'), [translations[lang].hero[1]]), 1000);
  setTimeout(()=>fancyTyping($('#hero-line3'), [translations[lang].hero[2]]), 2000);
}

// ---------------------------------------------------
// SET LANGUAGE
// ---------------------------------------------------
function setLanguage(lang){
  startHeroTyping(lang);

  // About
  $('.about-card h2').textContent = translations[lang].about_title;
  $('.about-text p').textContent = translations[lang].about_text;

  // Services
  $('#services-title').textContent = translations[lang].services_title;
  const serviceCards = $$('.service-card');
  translations[lang].services.forEach((s,i)=>{
    serviceCards[i].querySelector('h3').textContent = s.title;
    const lis = serviceCards[i].querySelectorAll('li');
    s.items.forEach((item,j)=>{ lis[j].textContent = item; });
  });

  // Skills
  $('.parcours h2').textContent = translations[lang].parcours_title;
  const parcoursList = $('.parcours ul');
  parcoursList.innerHTML = '';
  translations[lang].parcours_items.forEach(item=>{
    const li = document.createElement('li'); li.textContent = item; parcoursList.appendChild(li);
  });
  $('.competence h2').textContent = translations[lang].skills_title;

  // Projects
  $('#projects h2').textContent = translations[lang].projects_title;
  const projects = [translations[lang].project1, translations[lang].project2];
  const projectCards = $$('.video-card');
  projects.forEach((p,i)=>{
    projectCards[i].querySelector('h3').textContent = p.title;
    projectCards[i].querySelector('p').textContent = p.desc;
  });

  // CV
  $('#cv h2').textContent = translations[lang].cv_title;

  // Contact
  $('#contact h2').textContent = translations[lang].contact_title;
  $('.contact-email').innerHTML = translations[lang].contact_email;
  $('#name').placeholder = translations[lang].name_placeholder;
  $('#email').placeholder = translations[lang].email_placeholder;
  $('#message').placeholder = translations[lang].message_placeholder;
  $('.submit-btn').textContent = translations[lang].contact_btn;

  // Menu
  const menuItems = $$('.nav-links li a');
  menuItems[0].innerText = translations[lang].menu_home;
  menuItems[1].innerText = translations[lang].menu_about;
  menuItems[2].innerText = translations[lang].menu_services;
  menuItems[3].innerText = translations[lang].menu_skills;
  menuItems[4].innerText = translations[lang].menu_projects;
  menuItems[5].innerText = translations[lang].menu_cv;
  menuItems[6].innerText = translations[lang].menu_contact;

  // Footer
  $('.site-footer p').textContent = translations[lang].footer;
}

// ---------------------------------------------------
// EVENTS
// ---------------------------------------------------
enBtn.addEventListener('click', ()=>{
  setLanguage('en');
  enBtn.classList.add('active');
  frBtn.classList.remove('active');
});

frBtn.addEventListener('click', ()=>{
  setLanguage('fr');
  frBtn.classList.add('active');
  enBtn.classList.remove('active');
});

darkToggle.addEventListener('click', ()=>document.body.classList.toggle('dark'));
burger.addEventListener('click', ()=>navLinks.classList.toggle('active'));

// Initial load
setLanguage('fr');

// Contact form WhatsApp
const whatsappForm = $('#whatsappForm');
whatsappForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = $('#name').value;
  const email = $('#email').value;
  const message = $('#message').value;
  const url = `https://wa.me/221708130558?text=Nom:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
  window.open(url,'_blank');
});