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
    projects_title:"My Projects", contact_title:"Contact me", contact_email:"Email : <a href='mailto:mossoumoss@gmail.com'>mossoumoss@gmail.com</a>",
    name_placeholder:"Your name", email_placeholder:"Your email", message_placeholder:"Your message", contact_btn:"Send via WhatsApp"
  }
};

function typeHero(line1,line2,line3){
  const l1=$('#hero-line1'),l2=$('#hero-line2'),l3=$('#hero-line3');
  l1.textContent=''; l2.textContent=''; l3.textContent='';
  let i=0,j=0,k=0;

  function t1(){ if(i<line1.length){l1.textContent+=line1[i++]; setTimeout(t1,60);} else t2(); }
  function t2(){ if(j<line2.length){l2.textContent+=line2[j++]; setTimeout(t2,60);} else t3(); }
  function t3(){ if(k<line3.length){l3.textContent+=line3[k++]; setTimeout(t3,60);} }

  t1();
}

function setLanguage(lang){
  const t = translations[lang];
  $$('nav .nav-links li a').forEach((a,i)=>{
    switch(i){
      case 0:a.textContent=t.menu_home; break;
      case 1:a.textContent=t.menu_about; break;
      case 2:a.textContent=t.menu_skills; break;
      case 3:a.textContent=t.menu_projects; break;
      case 4:a.textContent=t.menu_cv; break;
      case 5:a.textContent=t.menu_contact; break;
    }
  });
  typeHero(t.hero_line1,t.hero_line2,t.hero_line3);
  $('#about h2').textContent=t.about_title;
  $('#about p').textContent=t.about_text;
  $('#projects h2').textContent=t.projects_title;
  $('#contact h2').textContent=t.contact_title;
  $('.contact-email').innerHTML=t.contact_email;
  $('#name').placeholder=t.name_placeholder;
  $('#email').placeholder=t.email_placeholder;
  $('#message').placeholder=t.message_placeholder;
  $('.submit-btn').textContent=t.contact_btn;
}

enBtn.addEventListener('click',()=>{setLanguage('en'); enBtn.classList.add('active'); frBtn.classList.remove('active');});
frBtn.addEventListener('click',()=>{setLanguage('fr'); frBtn.classList.add('active'); enBtn.classList.remove('active');});

darkToggle.addEventListener('click',()=>{ document.body.classList.toggle('dark'); });
burger.addEventListener('click',()=>{ navLinks.classList.toggle('active'); });

window.addEventListener('load',()=>{ setLanguage('fr'); $('#year').textContent=new Date().getFullYear(); });

$('#whatsappForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=$('#name').value,email=$('#email').value,message=$('#message').value;
  const url=`https://api.whatsapp.com/send?phone=+221785600911&text=Nom:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
  window.open(url,'_blank');
});