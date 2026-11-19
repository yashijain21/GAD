import React, { createElement, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaBars, FaBook, FaBriefcase, FaCheck, FaChevronLeft, FaChevronRight, FaClock, FaEnvelope, FaFacebookF, FaHeartbeat, FaInstagram, FaMapMarkerAlt, FaPhone, FaQuoteRight, FaRegHeart, FaStar, FaTimes, FaUserMd } from 'react-icons/fa';
import { MdAdd, MdArrowOutward, MdAutoAwesome, MdEmail, MdLocationOn, MdMedicalServices, MdPhone, MdRemove, MdSchool } from 'react-icons/md';
import './styles.css';
import './redesign.css';
import './tailwind.css';
import Home from './Home.jsx';

const reactAttributeNames = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', srcset: 'srcSet',
  crossorigin: 'crossOrigin', autocomplete: 'autoComplete', referrerpolicy: 'referrerPolicy',
  allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder', readonly: 'readOnly',
  maxlength: 'maxLength', colspan: 'colSpan', rowspan: 'rowSpan', datetime: 'dateTime',
  contenteditable: 'contentEditable', spellcheck: 'spellCheck',
  charset: 'charSet', 'http-equiv': 'httpEquiv'
};
const booleanAttributes = new Set([
  'checked', 'disabled', 'multiple', 'selected', 'required', 'readOnly', 'autoFocus',
  'hidden', 'open', 'controls', 'loop', 'muted', 'allowFullScreen'
]);
const reactIcons = { facebook:FaFacebookF, instagram:FaInstagram, location:MdLocationOn, phone:MdPhone, email:MdEmail, 'arrow-out':MdArrowOutward, 'arrow-right':FaArrowRight, 'arrow-left':FaArrowLeft, 'chevron-left':FaChevronLeft, 'chevron-right':FaChevronRight, 'chevron-down':FaChevronRight, menu:FaBars, close:FaTimes, check:FaCheck, sparkle:MdAutoAwesome, heart:FaRegHeart, clock:FaClock, medical:MdMedicalServices, book:FaBook, briefcase:FaBriefcase, stars:FaStar, doctor:FaUserMd, pulse:FaHeartbeat, pin:FaMapMarkerAlt, school:MdSchool, plus:MdAdd, minus:MdRemove, quote:FaQuoteRight };
const tailwindLayoutUtilities = {
  nav: 'flex items-center justify-between',
  'hero-inner': 'grid items-center',
  'hero-actions': 'flex flex-wrap',
  'trust-items': 'flex items-center',
  'intro-grid': 'grid items-center',
  dept: 'grid',
  doctors: 'grid',
  'doctor-card': 'grid',
  'why-grid': 'grid',
  testimonials: 'grid',
  'faq-grid': 'grid',
  'about-specialties': 'grid',
  'visit-steps': 'grid',
  'treatment-grid': 'grid',
  'treatment-detail': 'grid',
  'profile-layout': 'grid items-center',
  'profile-cols': 'grid',
  booking: 'grid items-center',
  'contact-grid': 'grid items-stretch',
  'service-grid': 'grid',
  form: 'grid',
  'footer-grid': 'grid',
  'dept-copy': 'flex flex-col justify-center'
};

function toReactStyle(value) {
  return Object.fromEntries(value.split(';').flatMap(rule => {
    const colon = rule.indexOf(':');
    if (colon < 0) return [];
    const rawName = rule.slice(0, colon).trim();
    const name = rawName.startsWith('--') ? rawName : rawName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return [[name, rule.slice(colon + 1).trim()]];
  }));
}

function convertNode(node, key) {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const iconName = node.getAttribute('data-react-icon');
  if (iconName && reactIcons[iconName]) return createElement(reactIcons[iconName], { key, className:`site-icon ${node.getAttribute('class')||''}`, 'aria-hidden':true });
  const props = { key };
  for (const attribute of node.attributes) {
    const name = reactAttributeNames[attribute.name] || attribute.name;
    if (attribute.name === 'style') props.style = toReactStyle(attribute.value);
    else if (attribute.name === 'class') {
      const utilities = attribute.value.split(/\s+/).map(className => tailwindLayoutUtilities[className]).filter(Boolean);
      props.className = [attribute.value, ...utilities].filter(Boolean).join(' ');
    }
    else if (booleanAttributes.has(name)) props[name] = true;
    else props[name] = attribute.value;
  }
  const children = Array.from(node.childNodes, (child, index) => convertNode(child, `${key}-${index}`));
  return createElement(node.tagName.toLowerCase(), props, ...children);
}

function htmlToReact(markup) {
  const template = document.createElement('template');
  template.innerHTML = markup;
  return Array.from(template.content.childNodes, (node, index) => convertNode(node, `page-${index}`));
}

const doctors={
  parvinder:{name:'Dr. Parvinder Singh Arora',degrees:'MBBS, DNB (Ortho), MNAMS, FJR',title:'Consultant Orthopaedic & Joint Replacement Surgeon',experience:'15+ Years Experience',tag:'ORTHOPEDICS',photo:'one',accent:'#a92e91',intro:'Dr. Parvinder Singh Arora is a highly accomplished Orthopaedic Surgeon with over 15 years of experience. He has a specialized interest in Arthroplasty (Joint Replacement) and Arthroscopy, having performed over 200 successful joint replacements and hundreds of trauma cases.',areas:['Knee Replacement','Hip Replacement','Complex Trauma','Joint Pain Management'],education:[['Clinical Fellow (Joint Replacement)','Sant Parmanand Hospital, Delhi'],['DNB (Orthopaedics)','Sir Ganga Ram Hospital, New Delhi'],['M.B.B.S','Acharya Shri Chander College of Medical Sciences']],highlights:['Former Clinical Fellow in Joint Replacement at Sant Parmanand Hospital.','Trained at the prestigious Sir Ganga Ram Hospital, New Delhi.','Extensive experience as a Senior Resident at Safdarjung and GTB Hospitals.'],achievements:['Presented Research at IOACON 2015 & ISKSAA 2016','Organized Advanced Knee Symposia at Sir Ganga Ram Hospital','Recognized for excellence in post-op patient care and feedback'],facebook:'https://www.facebook.com/people/Parvinder-Singh/61587297596113/?rdid=OC7tLs9vJeCXIsdP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AzuVv6uo2%2F',instagram:'https://www.instagram.com/dr.parvindersinghortho/'},
  simrandeep:{name:'Dr. Simrandeep Kaur',degrees:'MBBS, MD (Obstetrics & Gynaecology)',title:'Consultant Infertility, IVF & Endoscopic Surgeon',experience:'20+ Years Experience',tag:'IVF & GYNAECOLOGY',photo:'two',accent:'#ef5b9b',intro:'Dr. Simrandeep Kaur is a distinguished Gynaecologist, Infertility, and IVF specialist. She excels in fertility-enhancing surgeries and has successfully treated a wide spectrum of infertility cases, including recurrent IVF failure and unexplained causes.',areas:['Infertility & IVF Specialist','Reproductive Medicine','Laparoscopy & Hysteroscopy','High-Risk Pregnancy Management','PCOS & Ovarian Dysfunction'],education:[['Fellowship in Reproductive Medicine & Clinical ART','IFS & Nova IVF'],['Senior Residency (Registrarship)','AIIMS, New Delhi'],['MD (Obstetrics & Gynaecology)','Govt. Medical College and Hospital, Chandigarh'],['M.B.B.S','Govt. Medical College and Hospital, Chandigarh']],highlights:['Gold Medalist in the Reproductive Medicine exit examination.','Consultant Infertility and IVF at Apollo Cradle Fertility, Moti Nagar.','Visiting Consultant at BLK Superspeciality Hospital.','Extensive research publications in national and international journals.'],achievements:['Current member of FOGSI, AOGD, IFS, ISAR, GESICON, and IMA','Awarded Gold Medal in Reproductive Medicine fellowship exam','Presented papers at various national and international conferences','Expert in Endoscopic Surgeries (Laparoscopy and Hysteroscopy)'],facebook:'https://www.facebook.com/DrSimrandeepKaurInfertilityIVFspecialist/'}
};
const path=location.pathname.replace(/\/$/,'');
const profileKey=path.endsWith('dr-parvinder-singh-arora')?'parvinder':path.endsWith('dr-simrandeep-kaur')?'simrandeep':null;
const treatments={
  'robotic-joint-replacement':['Robotic Joint Replacement','Joint replacement consultations with discussion of robotic-assisted surgery options, suitability and next steps.'],
  'knee-replacement':['Knee Replacement','Orthopedic consultations for knee pain and knee replacement options, with treatment planning discussed around your needs.'],
  'hip-replacement':['Hip Replacement','Consultations for hip conditions and replacement options, including a conversation about your goals and care plan.'],
  'fracture-management':['Fracture Management','Assessment and management consultations for fractures, with appropriate next steps discussed by the orthopedic team.'],
  'joint-pain-relief':['Joint Pain Relief','A specialist consultation to discuss joint pain, possible care options and whether further evaluation may be useful.'],
  'arthroscopy':['Arthroscopy','Orthopedic consultations to discuss arthroscopy and whether this procedure is an appropriate option for your condition.'],
  'orthopedic-consultation':['Orthopedic Consultation','Meet with an orthopedic specialist to discuss bone, joint or mobility concerns and possible treatment options.'],
  'ivf-treatment':['IVF Treatment','Fertility consultations to discuss IVF, evaluation and the next steps that may be appropriate for you.'],
  'iui-treatment':['IUI Treatment','Discuss IUI care, fertility evaluation and treatment planning with the IVF and gynaecology team.'],
  'infertility-care':['Infertility Care','Supportive infertility consultations and fertility evaluation for individuals and couples.'],
  'fertility-evaluation':['Fertility Evaluation','A consultation to discuss fertility concerns, relevant history and possible evaluation options.'],
  'pregnancy-care':['Pregnancy Care','Pregnancy consultations and women’s healthcare with guidance from the gynaecology team.'],
  'womens-health':['Women’s Health','Gynaecological consultations for women’s health needs and appropriate care options.']
};
const treatmentPhotos={
  'robotic-joint-replacement':['photo-1758691462493-120a069304e6','Doctor discussing an X-ray with a patient — illustrative stock photo'],
  'knee-replacement':['/knee-assessment.png','Orthopedic professional assessing a patient’s knee — illustrative clinic image'],
  'hip-replacement':['https://img.magnific.com/free-photo/elderly-women-with-pain_1150-12497.jpg','Older woman experiencing pain — illustrative stock photo'],
  'fracture-management':['/fracture-management-patient.png','Patient with a lower leg cast receiving care — illustrative clinic image'],
  'joint-pain-relief':['/knee-replacement-therapy.png','Clinician applying supportive tape to a patient’s knee — illustrative clinic image'],
  'arthroscopy':['photo-1746842419697-03234f5ff03e','Medical professional examining a knee — illustrative stock photo'],
  'orthopedic-consultation':['photo-1758691462493-120a069304e6','Doctor discussing an X-ray with a patient — illustrative stock photo'],
  'ivf-treatment':['https://img.magnific.com/free-photo/closeup-shot-person-studying-coronavirus-particles-with-microscope_181624-724.jpg','Laboratory professional studying particles with a microscope — illustrative stock photo'],
  'iui-treatment':['https://img.magnific.com/free-photo/beautiful-fertility-concept-3d-rendering_23-2149230688.jpg','Fertility concept 3D illustration — illustrative stock photo'],
  'infertility-care':['https://img.magnific.com/free-photo/couple-suffering-from-infertility_23-2149430785.jpg','Couple experiencing infertility — illustrative stock photo'],
  'fertility-evaluation':['https://img.magnific.com/free-photo/medium-shot-smiley-doctor-explaining-ultrasounds_23-2149351699.jpg','Doctor explaining ultrasound images — illustrative stock photo'],
  'pregnancy-care':['photo-1632053652571-a6a45052bbbd','Doctor consulting a pregnant patient — illustrative stock photo'],
  'womens-health':['photo-1666214278797-b2cc1b12be76','Doctor consulting with a patient — illustrative stock photo']
};
const treatmentKey=path.split('/')[1]==='treatments'?path.split('/')[2]:null;
const img=(q)=>q.startsWith('/')||q.startsWith('http')?q:`https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=85`;
async function sendAppointmentSubmission(form,statusElement){
  const button=form.querySelector('[type="submit"]');
  if(button)button.disabled=true;
  statusElement.textContent='Sending your request…';
  statusElement.style.display='block';
  try{
    const formData=Object.fromEntries(new FormData(form).entries());
    const response=await fetch('/api/appointments',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(formData)});
    const result=await response.json().catch(()=>({}));
    if(!response.ok||result.success!==true)throw new Error('Request could not be sent.');
    statusElement.textContent='Your request was sent to the clinic. The team will contact you to confirm availability.';
    form.reset();
  }catch{
    statusElement.textContent='We could not send your request. Please call +91 98711 89004 to arrange an appointment.';
  }finally{if(button)button.disabled=false;}
}
function header(){const menu=['knee-replacement','fracture-management','joint-pain-relief','infertility-care','ivf-treatment','hip-replacement'];return `<div class="scroll-progress" aria-hidden="true"><span></span></div><div class="topline"><div class="wrap"><span><strong>GAD Advanced Clinics</strong> &nbsp;|&nbsp; Janakpuri, West Delhi</span><span>Care for every step forward</span></div></div><header><div class="wrap nav"><a class="brand" href="/"><span class="brand-logos"><img src="/joint-replacement-logo.png" alt="Joint Replacement Clinic logo"><span class="clinic-name">GAD ADVANCED ORTHO GYNAE &amp; INFERTILITY CLINICS</span><img src="/little-steps-ivf-logo.png" alt="Little Steps IVF logo"></span></a><button class="mobile-toggle" aria-label="Open menu"><span data-react-icon="menu"></span></button><nav class="links"><a href="/about/">About</a><div class="nav-dropdown"><button class="dropdown-toggle" aria-expanded="false">Treatments <span data-react-icon="chevron-down" class="dropdown-chevron"></span></button><div class="dropdown-menu">${menu.slice(0,4).map(k=>`<a href="/treatments/${k}/">${treatments[k][0]}</a>`).join('')}<a href="/doctors/dr-simrandeep-kaur/">IVF Specialist</a>${menu.slice(4).map(k=>`<a href="/treatments/${k}/">${treatments[k][0]}</a>`).join('')}<a class="dropdown-all" href="/treatments/">All treatments <span data-react-icon="arrow-right"></span></a></div></div><a href="/doctors/">Our doctors</a><a href="/contact/">Contact us</a><a class="btn mobile-menu-booking" href="/contact/#appointment">Book a consultation <span data-react-icon="arrow-out"></span></a></nav><div class="nav-actions"><a class="btn" href="/contact/#appointment">Book a consultation <span><span data-react-icon="arrow-out"></span></span></a></div></div></header>`}
function footer(){const icon=(name)=>`<span data-react-icon="${name}"></span>`;return `<footer><div class="wrap"><div class="footer-grid"><div class="footer-about"><a class="brand footer-brand" href="/"><span class="brand-logos"><img src="/joint-replacement-logo.png" alt="Joint Replacement Clinic logo"><span class="clinic-name">GAD ADVANCED ORTHO GYNAE &amp; INFERTILITY CLINICS</span><img src="/little-steps-ivf-logo.png" alt="Little Steps IVF logo"></span></a><p>Orthopedic, gynaecology and infertility care in Janakpuri, West Delhi. Personalised consultations and compassionate care.</p><div class="footer-socials" aria-label="Social media profiles"><a href="https://www.facebook.com/DrSimrandeepKaurInfertilityIVFspecialist/" target="_blank" rel="noopener noreferrer" aria-label="Dr. Simrandeep Kaur on Facebook">${icon('facebook')}<span>Dr. Simrandeep</span></a><a href="https://www.facebook.com/people/Parvinder-Singh/61587297596113/?rdid=OC7tLs9vJeCXIsdP&amp;share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AzuVv6uo2%2F" target="_blank" rel="noopener noreferrer" aria-label="Dr. Parvinder Singh on Facebook">${icon('facebook')}<span>Dr. Parvinder</span></a><a href="https://www.instagram.com/dr.parvindersinghortho/" target="_blank" rel="noopener noreferrer" aria-label="Dr. Parvinder Singh on Instagram">${icon('instagram')}<span>Instagram</span></a></div></div><div><h4>Explore</h4><a href="/#orthopedics">Orthopedics</a><a href="/#ivf">IVF & fertility</a><a href="/#doctors">Meet our doctors</a><a href="/#appointment">Appointments</a></div><div><h4>Our care</h4><span>Joint replacement</span><span>Women’s health</span><span>Infertility care</span><span>Pregnancy care</span></div><div class="footer-contact"><h4>Contact us</h4><a href="https://www.google.com/maps/search/?api=1&query=C5A+321+A+Janak+Puri+New+Delhi" target="_blank" rel="noopener noreferrer">${icon('location')}<span>C5A 321 A, Janak Puri, New Delhi</span></a><a href="tel:+919871189004">${icon('phone')}<span>+91 98711 89004</span></a><a href="mailto:prvndr4@gmail.com">${icon('email')}<span>prvndr4@gmail.com</span></a></div></div><div class="copyright"><span>© ${new Date().getFullYear()} GAD Advanced Ortho Gynae & Infertility Clinics</span><span>Medical information on this site is for general guidance.</span></div></div></footer>`}

function pageHero(label,title,copy){return `<section class="page-hero"><div class="wrap"><span class="eyebrow">${label}</span><h1>${title}</h1><p>${copy}</p></div></section>`}
function aboutPage(){
  document.title='About GAD Clinics | Orthopedic, IVF & Women’s Health';
  document.querySelector('meta[name="description"]').content='Learn about GAD Advanced Ortho Gynae & Infertility Clinics, its specialties and care team in Janakpuri, West Delhi.';
  return `${header()}<main>${pageHero('ABOUT GAD CLINICS','One clinic. Care for every step.','Orthopedic, gynaecology and fertility consultations brought together in Janakpuri, West Delhi.')}
  <section class="section"><div class="wrap intro-grid"><div class="intro-art about-page-art" role="img" aria-label="GAD Clinics joint replacement and Little Steps IVF logos in a welcoming clinic setting"></div><div class="intro-copy"><span class="eyebrow">OUR CLINIC</span><h2>Personal care, guided by specialists.</h2><p>GAD Advanced Ortho Gynae & Infertility Clinics provides orthopaedic, gynaecology and infertility care in Janakpuri, West Delhi. The clinic brings these specialties together under one identity, so patients can find the right consultation for their needs.</p><p>Orthopedic care is led by Dr. Parvinder Singh Arora, Senior Orthopedic and Robotic Joint Replacement Surgeon. Gynaecology and fertility care is led by Dr. Simrandeep Kaur, Gynecologist and Infertility & IVF Specialist.</p><p>Our focus is on listening to each patient, discussing appropriate options and providing compassionate care throughout the consultation process.</p><a class="btn" href="/doctors/">Meet our doctors <span data-react-icon="arrow-out"></span></a></div></div></section>
  <section class="section soft"><div class="wrap"><div class="section-head center"><span class="eyebrow">OUR SPECIALTIES</span><h2>Two specialties, a shared commitment.</h2><p>Distinct areas of care, brought together in one welcoming clinic.</p></div><div class="about-specialties"><article class="about-specialty ortho-about"><div class="about-specialty-icon"><span data-react-icon="sparkle"></span></div><span class="eyebrow">ORTHOPEDICS</span><h3>Supporting movement and mobility</h3><p>Consultations cover joint pain, knee and hip replacement, robotic joint replacement, fractures, arthroscopy and other orthopedic concerns.</p><a class="text-link" href="/treatments/">Explore orthopedic treatments <span data-react-icon="arrow-right"></span></a></article><article class="about-specialty ivf-about"><div class="about-specialty-icon"><span data-react-icon="heart"></span></div><span class="eyebrow">IVF & GYNAECOLOGY</span><h3>Care for fertility and women’s health</h3><p>Consultations include IVF and IUI, infertility evaluation, fertility care, pregnancy care and gynaecological health.</p><a class="text-link" href="/treatments/">Explore fertility and women’s care <span data-react-icon="arrow-right"></span></a></article></div></div></section>
  <section class="section"><div class="wrap"><div class="section-head"><span class="eyebrow">WHAT TO EXPECT</span><h2>A clear, personal conversation about care.</h2><p>Each consultation is an opportunity to discuss your concerns with the appropriate specialist and understand possible next steps.</p></div><div class="visit-steps"><article class="visit-step"><span>01</span><h3>Tell us what brings you in</h3><p>Share your concerns and what you hope to discuss during your visit.</p></article><article class="visit-step"><span>02</span><h3>Talk with the specialist</h3><p>The doctor can discuss your history, questions and relevant care options with you.</p></article><article class="visit-step"><span>03</span><h3>Plan the next step together</h3><p>Discuss any recommended follow-up or next steps directly with the clinic team.</p></article></div><p class="disclaimer">Care recommendations depend on individual assessment. A consultation does not guarantee a particular treatment or outcome.</p></div></section>
  <section class="section soft"><div class="wrap"><div class="section-head center"><span class="eyebrow">YOUR CARE TEAM</span><h2>Meet the doctors at GAD Clinics.</h2><p>Learn about each specialist and the care areas they focus on.</p></div><div class="doctors about-doctors">${Object.entries(doctors).map(([key,d])=>`<article class="doctor-card reveal"><div class="doctor-img ${d.photo}" role="img" aria-label="Portrait of ${d.name}"></div><div class="doctor-info"><span class="eyebrow" style="color:${d.accent}">${d.tag}</span><h3>${d.name}</h3><p>${d.title}</p><a class="btn secondary" href="/doctors/${key==='parvinder'?'dr-parvinder-singh-arora':'dr-simrandeep-kaur'}/">View doctor profile <span data-react-icon="arrow-out"></span></a></div></article>`).join('')}</div></div></section>
  <section class="section"><div class="wrap booking-cta"><div><span class="eyebrow">VISIT GAD CLINICS</span><h2>Find us in Janakpuri, West Delhi.</h2><p>Contact the clinic to ask about appointment availability and visit details.</p></div><a href="/contact/" class="btn">Contact GAD Clinics <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`
}
function doctorsPage(){document.title='Our Doctors | GAD Advanced Clinics';document.querySelector('meta[name="description"]').content='Meet the orthopedic and IVF specialists at GAD Advanced Clinics in Janakpuri, West Delhi.';return `${header()}<main>${pageHero('OUR DOCTORS','Specialist care, centred on you.','Meet the doctors leading orthopedic, fertility and gynaecology care at GAD Clinics.') }<section class="section"><div class="wrap"><div class="doctors">${Object.entries(doctors).map(([key,d])=>`<article class="doctor-card reveal"><div class="doctor-img ${d.photo}" role="img" aria-label="Portrait of ${d.name}"></div><div class="doctor-info"><span class="eyebrow" style="color:${d.accent}">${d.tag}</span><h3>${d.name}</h3><p>${d.title}</p><div class="credential">${d.degrees} · ${d.experience}</div><a class="btn secondary" href="/doctors/${key==='parvinder'?'dr-parvinder-singh-arora':'dr-simrandeep-kaur'}/">View full profile <span data-react-icon="arrow-out"></span></a></div></article>`).join('')}</div></div></section></main>${footer()}`}
function treatmentsPage(){document.title='Treatments | GAD Advanced Clinics';document.querySelector('meta[name="description"]').content='Explore orthopedic, IVF, fertility, gynaecology and pregnancy care at GAD Clinics in Janakpuri.';return `${header()}<main>${pageHero('OUR TREATMENTS','Care for your next step.','Explore consultations and treatment areas offered by the Orthopedic and IVF & Gynaecology teams.') }<section class="section"><div class="wrap"><div class="treatment-grid">${Object.entries(treatments).map(([slug,[name,description]])=>`<a class="treatment-card reveal" href="/treatments/${slug}/"><img src="${img(treatmentPhotos[slug][0])}" alt="${treatmentPhotos[slug][1]} — illustrative care imagery" loading="lazy"><div class="treatment-card-copy"><span class="treatment-mark"><span data-react-icon="sparkle"></span></span><h3>${name}</h3><p>${description}</p><span class="text-link">Learn more <span data-react-icon="arrow-right"></span></span></div></a>`).join('')}</div><p class="disclaimer">Treatment options depend on individual assessment and should be discussed with a qualified clinician. Images are illustrative.</p></div></section></main>${footer()}`}
function treatmentPage(slug){const item=treatments[slug];if(!item)return treatmentsPage();const [name,description]=item;const [photo,alt]=treatmentPhotos[slug];document.title=`${name} | GAD Advanced Clinics`;document.querySelector('meta[name="description"]').content=`${description} Book a specialist consultation at GAD Clinics, Janakpuri, West Delhi.`;return `${header()}<main>${pageHero('TREATMENTS',name,description)}<section class="section"><div class="wrap treatment-detail"><figure class="treatment-feature reveal"><img src="${img(photo)}" alt="${alt} — illustrative care imagery" loading="lazy"><figcaption>Illustrative care imagery</figcaption></figure><div class="treatment-detail-copy reveal"><span class="eyebrow">PERSONALISED CONSULTATION</span><h2>Understand your options with a specialist.</h2><p>At your consultation, you can discuss your concerns, relevant health history and questions with the appropriate specialist. The doctor can explain which evaluation or care options may suit your individual situation.</p><p>Information on this page is general. A consultation does not guarantee that a particular treatment or procedure will be recommended.</p><a class="btn" href="/contact/#appointment">Request a consultation <span data-react-icon="arrow-out"></span></a></div><aside class="treatment-aside reveal"><h3>Related care</h3>${Object.entries(treatments).filter(([key])=>key!==slug).slice(0,5).map(([key,[label]])=>`<a href="/treatments/${key}/">${label} <span><span data-react-icon="arrow-right"></span></span></a>`).join('')}<a class="all-treatments" href="/treatments/">View all treatments <span data-react-icon="arrow-right"></span></a></aside></div></section><section class="section soft"><div class="wrap booking-cta reveal"><div><span class="eyebrow">GAD ADVANCED CLINICS</span><h2>Discuss ${name.toLowerCase()} with our team.</h2><p>GAD Clinics is located in Janakpuri, West Delhi.</p></div><a href="/contact/#appointment" class="btn">Contact us <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`}
function contactPage(){document.title='Contact GAD Clinics | Janakpuri, West Delhi';document.querySelector('meta[name="description"]').content='Contact GAD Advanced Clinics in Janakpuri, West Delhi to request an orthopedic, IVF or gynaecology consultation.';return `${header()}<main>${pageHero('CONTACT US','We’re here to help you get started.','Contact GAD Advanced Clinics in Janakpuri, West Delhi for orthopedic, fertility, gynaecology or pregnancy care.') }<section class="section"><div class="wrap contact-grid"><div class="contact-card"><h2>Visit GAD Clinics</h2><div class="contact-row"><div class="why-icon"><span data-react-icon="location"></span></div><div><b>Location</b><span>Janakpuri, West Delhi, India</span></div></div><div class="contact-row"><div class="why-icon"><span data-react-icon="phone"></span></div><div><b>Phone</b><span>Verified clinic number awaiting confirmation</span></div></div><div class="contact-row"><div class="why-icon"><span data-react-icon="clock"></span></div><div><b>Hours</b><span>Please contact the clinic to confirm availability</span></div></div><a class="btn" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=GAD+Advanced+Ortho+Gynae+Infertility+Clinics+Janakpuri">Open Google Maps <span data-react-icon="arrow-out"></span></a></div><div class="map"><iframe title="Map to GAD Clinics in Janakpuri" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=GAD%20Advanced%20Ortho%20Gynae%20Infertility%20Clinics%20Janakpuri&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe></div></div></section><section class="section soft" id="appointment"><div class="wrap contact-form-wrap"><div><span class="eyebrow">APPOINTMENT REQUEST</span><h2>Tell us how we can help.</h2><p>Choose a specialty and share your preferred appointment date. The clinic needs to confirm availability directly.</p></div><form class="form contact-form" id="bookingForm"><input class="form-honeypot" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"/><input required name="name" placeholder="Your name" autocomplete="name"/><input required name="phone" type="tel" placeholder="Phone number" autocomplete="tel"/><select required name="specialty"><option value="">Choose a specialty</option><option>Orthopedics</option><option>IVF & Gynaecology</option></select><select name="doctor"><option value="">Preferred doctor (optional)</option><option>Dr. Parvinder Singh Arora</option><option>Dr. Simrandeep Kaur</option></select><input name="date" type="date" aria-label="Preferred appointment date"/><input name="email" type="email" placeholder="Email (optional)"/><textarea name="message" placeholder="Anything you would like us to know? (optional)"></textarea><button class="btn" type="submit">Send appointment request <span data-react-icon="arrow-out"></span></button><p class="form-note">Submitting sends your details to the clinic by email using SendGrid. Please do not include sensitive medical details. The clinic will contact you to confirm.</p><div class="form-success" role="status"></div></form></div></section></main>${footer()}`}
function doctorPage(d){document.title=`${d.name} | GAD Advanced Clinics`;const title=`${d.name} | ${d.title} in Janakpuri`;document.querySelector('meta[name="description"]').content=`Learn about ${d.name}, ${d.title} at GAD Advanced Clinics in Janakpuri, West Delhi.`;document.querySelector('link[rel="canonical"]').href=`https://gadadvancedorthogynaeandinfertilityclinics.in${path}`;document.querySelector('meta[property="og:title"]').content=title;document.querySelector('meta[property="og:description"]').content=`Meet ${d.name} at GAD Advanced Clinics in Janakpuri, West Delhi.`;const physician=document.createElement('script');physician.type='application/ld+json';physician.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Physician',name:d.name,medicalSpecialty:d.tag==='ORTHOPEDICS'?'Orthopedic':'Gynecologic',description:d.title,worksFor:{'@type':'MedicalClinic',name:'GAD Advanced Ortho Gynae & Infertility Clinics',address:{'@type':'PostalAddress',addressLocality:'Janakpuri',addressRegion:'Delhi',addressCountry:'IN'}}});document.head.append(physician);const list=(items)=>`<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;const socials=`<div class="doctor-socials"><span>Follow ${d.name.split(' ').slice(1,2).join('')}</span>${d.facebook?`<a href="${d.facebook}" target="_blank" rel="noopener noreferrer" aria-label="${d.name} on Facebook">Facebook <span data-react-icon="arrow-out"></span></a>`:''}${d.instagram?`<a href="${d.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${d.name} on Instagram">Instagram <span data-react-icon="arrow-out"></span></a>`:''}</div>`;return `${header()}<main><section class="profile-hero"><div class="wrap profile-layout"><div class="profile-summary"><a href="/doctors/" class="back"><span data-react-icon="arrow-left"></span> Back to our doctors</a><span class="eyebrow" style="color:${d.accent}">${d.tag}</span><h1>${d.name}</h1><p class="profile-degrees">${d.degrees}</p><p class="profile-title">${d.title}</p><div class="profile-facts"><span><span data-react-icon="medical"></span> &nbsp;${d.experience}</span><span><span data-react-icon="location"></span> &nbsp;Janak Puri, New Delhi</span><a href="tel:+919871189004"><span data-react-icon="phone"></span> &nbsp;+91 98711 89004</a><a href="mailto:prvndr4@gmail.com"><span data-react-icon="email"></span> &nbsp;prvndr4@gmail.com</a></div><a href="/contact/#appointment" class="btn" style="background:${d.accent}">Book an appointment <span data-react-icon="arrow-out"></span></a>${socials}</div><div class="profile-photo doctor-img ${d.photo}" role="img" aria-label="Portrait of ${d.name}"></div></div></section><section class="profile-section"><div class="wrap profile-cols"><div class="profile-main"><article class="credential-box"><h3>About the Doctor</h3><p>${d.intro}</p>${list(d.highlights)}</article><article class="credential-box"><h3>Education & Training</h3><div class="education-list">${d.education.map(([degree,school])=>`<div><span class="education-icon"><span data-react-icon="school"></span></span><p><strong>${degree}</strong><br>${school}</p></div>`).join('')}</div></article></div><aside class="profile-side"><article class="credential-box specialization-box"><h3>Specializations</h3>${list(d.areas)}</article><article class="credential-box"><h3>${d.tag==='ORTHOPEDICS'?'Achievements':'Professional Memberships'}</h3>${list(d.achievements)}</article></aside></div><div class="wrap profile-cta"><a class="btn" href="/contact/#appointment">Book an appointment with ${d.name} <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`}
function App(){
  const isHomeMarkup=!profileKey&&!['/about','/contact','/doctors','/treatments'].includes(path)&&!treatmentKey;
  let showWelcomeForm=false;
  if(isHomeMarkup){try{showWelcomeForm=localStorage.getItem('gad-home-welcome-form-dismissed')!=='true';}catch{showWelcomeForm=true;}}
  const page=isHomeMarkup?null:profileKey?doctorPage(doctors[profileKey]):path==='/about'?aboutPage():path==='/contact'?contactPage():path==='/doctors'?doctorsPage():path==='/treatments'?treatmentsPage():treatmentKey?treatmentPage(treatmentKey):'';

  useEffect(()=>{
    document.body.classList.toggle('home-page',!path&&!profileKey&&!treatmentKey);
    const canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.href=`https://gadadvancedorthogynaeandinfertilityclinics.in${path||'/'}`;
    const ogTitle=document.querySelector('meta[property="og:title"]');if(ogTitle)ogTitle.content=document.title;
    const ogDescription=document.querySelector('meta[property="og:description"]');if(ogDescription)ogDescription.content=document.querySelector('meta[name="description"]')?.content||'';

    const mobileToggle=document.querySelector('.mobile-toggle');
    const links=document.querySelector('.links');
    const onMobileToggle=()=>links?.classList.toggle('open');
    mobileToggle?.addEventListener('click',onMobileToggle);
    const dropdownToggle=document.querySelector('.dropdown-toggle');
    const onDropdownToggle=e=>{const menu=document.querySelector('.dropdown-menu');const open=menu?.classList.toggle('is-open')||false;e.currentTarget.setAttribute('aria-expanded',String(open));};
    dropdownToggle?.addEventListener('click',onDropdownToggle);
    const closeMobileMenu=()=>links?.classList.remove('open');
    links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMobileMenu));

    const welcomePopup=document.getElementById('homeVisitPopup');
    const welcomeForm=document.getElementById('homeVisitForm');
    const dismissWelcomePopup=()=>{if(!welcomePopup)return;welcomePopup.classList.remove('is-open');welcomePopup.setAttribute('aria-hidden','true');document.body.classList.remove('home-popup-open');try{localStorage.setItem('gad-home-welcome-form-dismissed','true');}catch{}};
    const onWelcomePopupClick=e=>{if(e.target.closest('[data-popup-close]'))dismissWelcomePopup();};
    const onWelcomePopupKeydown=e=>{if(e.key==='Escape'&&welcomePopup?.classList.contains('is-open'))dismissWelcomePopup();};
    const onWelcomeFormSubmit=e=>{e.preventDefault();sendAppointmentSubmission(e.currentTarget,document.getElementById('homeVisitFeedback'));};
    if(welcomePopup){document.body.classList.add('home-popup-open');welcomePopup.addEventListener('click',onWelcomePopupClick);document.addEventListener('keydown',onWelcomePopupKeydown);welcomeForm?.addEventListener('submit',onWelcomeFormSubmit);window.requestAnimationFrame(()=>welcomeForm?.elements.namedItem('name')?.focus());}

    const slides=[
      {tag:'ORTHOPEDIC CARE',title:'Advanced orthopedic care. Restoring your mobility.',text:'Thoughtful joint and bone care, from your first consultation through the next steps in your recovery.',cta:'Book orthopedic consultation',photo:'/orthopedic-hero-banner.png',mobilePhoto:'/mobile-orthopedic-hero.png',photoPosition:'center top',logo:'/joint-replacement-logo.png',logoAlt:'Joint Replacement Clinic logo'},
      {tag:'IVF & GYNAECOLOGY',title:'Your journey to parenthood starts with care.',text:'Compassionate fertility and women’s health consultations, with a caring team beside you at every step.',cta:'Book IVF consultation',photo:'/ivf-hero-banner.png',mobilePhoto:'/mobile-ivf-hero.png',photoPosition:'center top',logo:'/little-steps-ivf-logo.png',logoAlt:'Little Steps IVF logo'},
      {tag:'ORTHOPEDIC CARE',title:'Specialist care for stronger movement.',text:'Discuss joint concerns, surgical options and the next steps with an orthopedic specialist.',cta:'Book orthopedic consultation',photo:'photo-1685997180450-242a65624238',logo:'/joint-replacement-logo.png',logoAlt:'Joint Replacement Clinic logo'},
      {tag:'IVF & GYNAECOLOGY',title:'Guidance for every step of your fertility journey.',text:'Explore fertility care and ultrasound consultation with a supportive specialist team.',cta:'Book IVF consultation',photo:'photo-1706065264583-55f1a8549769',logo:'/little-steps-ivf-logo.png',logoAlt:'Little Steps IVF logo'}
    ];
    let activeSlide=0;
    const mobileHeroQuery=window.matchMedia('(max-width: 700px)');
    const visibleSlideCount=()=>mobileHeroQuery.matches?2:slides.length;
    const setSlide=n=>{
      if(!document.getElementById('heroTitle'))return;
      const count=visibleSlideCount();activeSlide=(n+count)%count;const slide=slides[activeSlide];
      document.getElementById('heroTag').textContent=slide.tag;document.getElementById('heroTitle').textContent=slide.title;
      document.getElementById('heroText').textContent=slide.text;document.getElementById('heroCtaLabel').textContent=slide.cta;
      const photo=mobileHeroQuery.matches?(slide.mobilePhoto||slide.photo):slide.photo;
      document.getElementById('heroPhoto').style.backgroundImage=`url('${img(photo)}')`;
      document.getElementById('heroPhoto').style.backgroundPosition=slide.photoPosition||'center 46%';
      const slideLogo=document.getElementById('heroSlideLogo');slideLogo.src=slide.logo;slideLogo.alt=slide.logoAlt;
      document.querySelectorAll('.dot').forEach((dot,index)=>dot.classList.toggle('active',index===activeSlide));
    };
    setSlide(activeSlide);
    const prev=document.getElementById('prev'),next=document.getElementById('next');
    const goPrev=()=>setSlide(activeSlide-1),goNext=()=>setSlide(activeSlide+1);
    const onHeroBreakpointChange=()=>setSlide(Math.min(activeSlide,visibleSlideCount()-1));
    mobileHeroQuery.addEventListener?.('change',onHeroBreakpointChange);
    prev?.addEventListener('click',goPrev);next?.addEventListener('click',goNext);
    const dots=Array.from(document.querySelectorAll('.dot'));
    const dotHandlers=dots.map((dot,index)=>{const handler=()=>setSlide(index);dot.addEventListener('click',handler);return {dot,handler};});
    const carouselTimer=document.getElementById('heroTitle')?window.setInterval(()=>setSlide(activeSlide+1),7000):null;

    const form=document.getElementById('bookingForm');
    const onSubmit=e=>{e.preventDefault();sendAppointmentSubmission(e.currentTarget,e.currentTarget.querySelector('.form-success'));};
    form?.addEventListener('submit',onSubmit);

    const reviewTrack=document.querySelector('.testimonials');
    if(reviewTrack&&!reviewTrack.dataset.marqueeReady){
      [...reviewTrack.children].forEach(card=>{const duplicate=card.cloneNode(true);duplicate.classList.remove('reveal','visible');duplicate.removeAttribute('tabindex');duplicate.setAttribute('aria-hidden','true');reviewTrack.append(duplicate);});
      reviewTrack.dataset.marqueeReady='true';
    }

    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal,.doctor-card,.page-hero .wrap,.intro-copy,.why-card,.quote,.contact-card,.map,.booking,.contact-form-wrap,.credential-box').forEach((element,index)=>{element.classList.add('reveal');if(element.matches('.treatment-card,.why-card,.quote,.credential-box'))element.style.transitionDelay=`${(index%4)*65}ms`;observer.observe(element);});

    const progress=document.querySelector('.scroll-progress span');let ticking=false;
    const onScroll=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;const amount=max>0?window.scrollY/max:0;if(progress)progress.style.transform=`scaleX(${amount})`;document.querySelector('header')?.classList.toggle('is-scrolled',window.scrollY>8);ticking=false;});};
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>{
      mobileToggle?.removeEventListener('click',onMobileToggle);dropdownToggle?.removeEventListener('click',onDropdownToggle);
      welcomePopup?.removeEventListener('click',onWelcomePopupClick);document.removeEventListener('keydown',onWelcomePopupKeydown);welcomeForm?.removeEventListener('submit',onWelcomeFormSubmit);document.body.classList.remove('home-popup-open');
      links?.querySelectorAll('a').forEach(link=>link.removeEventListener('click',closeMobileMenu));
      prev?.removeEventListener('click',goPrev);next?.removeEventListener('click',goNext);
      mobileHeroQuery.removeEventListener?.('change',onHeroBreakpointChange);
      dotHandlers.forEach(({dot,handler})=>dot.removeEventListener('click',handler));
      if(carouselTimer!==null)window.clearInterval(carouselTimer);form?.removeEventListener('submit',onSubmit);
      observer.disconnect();window.removeEventListener('scroll',onScroll);
    };
  },[]);

  return isHomeMarkup?<Home header={header} footer={footer} img={img} renderMarkup={htmlToReact} showWelcomeForm={showWelcomeForm}/>:<>{htmlToReact(page)}</>;
}

export default App;
