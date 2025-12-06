const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const enBtn = $('#enBtn');
const frBtn = $('#frBtn');
const darkToggle = $('#darkToggle');
const burger = $('#burger');
const navLinks = $('#navLinks');

const translations = {
  fr: { menu_home:"Accueil", menu_about:"À propos", menu_skills:"Compétences", menu_projects:"Projets", menu_cv:"CV", menu_contact:"Contact",
    hero_line1:"Bonjour, je suis Mossane Diouf", hero_line2:"Développeuse Web Professionnelle", hero_line3:"Designer graphique – Supports professionnels",
    about_title:"À propos de moi", about_text:"Je suis Mossane Diouf, designer graphique et développeuse web. Je crée des sites modernes, interactifs et fonctionnels avec un design élégant. Passionnée par la technologie et le design, je transforme vos idées en solutions digitales efficaces et créatives.",
    projects_title:"Mes Projets", contact_title:"Contactez-moi", contact_email:"Email : <a href='mailto:mossoumoss@gmail.com'>mossoumoss@gmail.com</a>",
    name_placeholder:"Votre nom", email_placeholder:"Votre mail", message_placeholder:"Votre message", contact_btn:"Envoyer sur WhatsApp"
  },
  en: { menu_home:"Home", menu_about:"About", menu_skills:"Skills", menu_projects:"Projects", menu_cv:"CV", menu_contact:"Contact",
    hero_line1:"Hello, I am Mossane Diouf", hero_line2:"Professional Web Developer", hero_line3:"Graphic Designer – Professional Supports",
    about_title:"About me", about_text:"I am Mossane Diouf, graphic designer and web developer. I create modern, interactive and functional websites with elegant design. Passionate about technology and design, I turn ideas into effective digital solutions.",
    projects_title:"My Projects", contact_title:"Contact me", contact_email:"Email : <a href='mailto:mossoumoss@gmail.com'>mossoumoss@gmail.com</