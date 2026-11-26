import React, { createElement, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaBook,
  FaBriefcase,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaHeartbeat,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaQuoteRight,
  FaRegHeart,
  FaStar,
  FaTimes,
  FaUserMd,
} from "react-icons/fa";
import {
  MdAdd,
  MdArrowOutward,
  MdAutoAwesome,
  MdEmail,
  MdLocationOn,
  MdMedicalServices,
  MdPhone,
  MdRemove,
  MdSchool,
} from "react-icons/md";
import "./styles.css";
import "./redesign.css";
import "./tailwind.css";
import "./premium.css";
import Home from "./Home.jsx";
import { treatmentContent } from "./treatment-content.js";

const reactAttributeNames = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  autocomplete: "autoComplete",
  referrerpolicy: "referrerPolicy",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  readonly: "readOnly",
  maxlength: "maxLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  datetime: "dateTime",
  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  charset: "charSet",
  "http-equiv": "httpEquiv",
};
const booleanAttributes = new Set([
  "checked",
  "disabled",
  "multiple",
  "selected",
  "required",
  "readOnly",
  "autoFocus",
  "hidden",
  "open",
  "controls",
  "loop",
  "muted",
  "allowFullScreen",
]);
const reactIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  location: MdLocationOn,
  phone: MdPhone,
  email: MdEmail,
  "arrow-out": MdArrowOutward,
  "arrow-right": FaArrowRight,
  "arrow-left": FaArrowLeft,
  "chevron-left": FaChevronLeft,
  "chevron-right": FaChevronRight,
  "chevron-down": FaChevronRight,
  menu: FaBars,
  close: FaTimes,
  check: FaCheck,
  sparkle: MdAutoAwesome,
  heart: FaRegHeart,
  clock: FaClock,
  medical: MdMedicalServices,
  book: FaBook,
  briefcase: FaBriefcase,
  stars: FaStar,
  doctor: FaUserMd,
  pulse: FaHeartbeat,
  pin: FaMapMarkerAlt,
  school: MdSchool,
  plus: MdAdd,
  minus: MdRemove,
  quote: FaQuoteRight,
};
const tailwindLayoutUtilities = {
  nav: "flex items-center justify-between",
  "hero-inner": "grid items-center",
  "hero-actions": "flex flex-wrap",
  "trust-items": "flex items-center",
  "intro-grid": "grid items-center",
  dept: "grid",
  doctors: "grid",
  "doctor-card": "grid",
  "why-grid": "grid",
  testimonials: "grid",
  "faq-grid": "grid",
  "about-specialties": "grid",
  "visit-steps": "grid",
  "treatment-grid": "grid",
  "treatment-detail": "grid",
  "profile-layout": "grid items-center",
  "profile-cols": "grid",
  booking: "grid items-center",
  "contact-grid": "grid items-stretch",
  "service-grid": "grid",
  form: "grid",
  "footer-grid": "grid",
  "dept-copy": "flex flex-col justify-center",
};

function toReactStyle(value) {
  return Object.fromEntries(
    value.split(";").flatMap((rule) => {
      const colon = rule.indexOf(":");
      if (colon < 0) return [];
      const rawName = rule.slice(0, colon).trim();
      const name = rawName.startsWith("--")
        ? rawName
        : rawName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      return [[name, rule.slice(colon + 1).trim()]];
    }),
  );
}

function convertNode(node, key) {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const iconName = node.getAttribute("data-react-icon");
  if (iconName && reactIcons[iconName])
    return createElement(reactIcons[iconName], {
      key,
      className: `site-icon ${node.getAttribute("class") || ""}`,
      "aria-hidden": true,
    });
  const props = { key };
  for (const attribute of node.attributes) {
    const name = reactAttributeNames[attribute.name] || attribute.name;
    if (attribute.name === "style") props.style = toReactStyle(attribute.value);
    else if (attribute.name === "class") {
      const utilities = attribute.value
        .split(/\s+/)
        .map((className) => tailwindLayoutUtilities[className])
        .filter(Boolean);
      props.className = [attribute.value, ...utilities]
        .filter(Boolean)
        .join(" ");
    } else if (booleanAttributes.has(name)) props[name] = true;
    else props[name] = attribute.value;
  }
  const children = Array.from(node.childNodes, (child, index) =>
    convertNode(child, `${key}-${index}`),
  );
  return createElement(node.tagName.toLowerCase(), props, ...children);
}

function htmlToReact(markup) {
  const template = document.createElement("template");
  template.innerHTML = markup;
  return Array.from(template.content.childNodes, (node, index) =>
    convertNode(node, `page-${index}`),
  );
}

const doctors = {
  parvinder: {
    name: "Dr. Parvinder Singh Arora",
    degrees: "MBBS, DNB (Ortho), MNAMS, FJR",
    title: "Consultant Orthopaedic & Joint Replacement Surgeon",
    experience: "15+ Years Experience",
    tag: "ORTHOPEDICS",
    photo: "one",
    accent: "#a92e91",
    intro:
      "Dr. Parvinder Singh Arora is a highly accomplished Orthopaedic Surgeon with over 15 years of experience. He has a specialized interest in Arthroplasty (Joint Replacement) and Arthroscopy, having performed over 200 successful joint replacements and hundreds of trauma cases.",
    areas: [
      "Knee Replacement",
      "Hip Replacement",
      "Complex Trauma",
      "Joint Pain Management",
    ],
    education: [
      ["Clinical Fellow (Joint Replacement)", "Sant Parmanand Hospital, Delhi"],
      ["DNB (Orthopaedics)", "Sir Ganga Ram Hospital, New Delhi"],
      ["M.B.B.S", "Acharya Shri Chander College of Medical Sciences"],
    ],
    highlights: [
      "Former Clinical Fellow in Joint Replacement at Sant Parmanand Hospital.",
      "Trained at the prestigious Sir Ganga Ram Hospital, New Delhi.",
      "Extensive experience as a Senior Resident at Safdarjung and GTB Hospitals.",
    ],
    achievements: [
      "Presented Research at IOACON 2015 & ISKSAA 2016",
      "Organized Advanced Knee Symposia at Sir Ganga Ram Hospital",
      "Recognized for excellence in post-op patient care and feedback",
    ],
    facebook:
      "https://www.facebook.com/people/Parvinder-Singh/61587297596113/?rdid=OC7tLs9vJeCXIsdP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AzuVv6uo2%2F",
    instagram: "https://www.instagram.com/dr.parvindersinghortho/",
  },
  simrandeep: {
    name: "Dr. Simrandeep Kaur",
    degrees: "MBBS, MD (Obstetrics & Gynaecology)",
    title: "Consultant Infertility, IVF & Endoscopic Surgeon",
    experience: "20+ Years Experience",
    tag: "IVF & GYNAECOLOGY",
    photo: "two",
    accent: "#ef5b9b",
    intro:
      "Dr. Simrandeep Kaur is a distinguished Gynaecologist, Infertility, and IVF specialist. She excels in fertility-enhancing surgeries and has successfully treated a wide spectrum of infertility cases, including recurrent IVF failure and unexplained causes.",
    areas: [
      "Infertility & IVF Specialist",
      "Reproductive Medicine",
      "Laparoscopy & Hysteroscopy",
      "High-Risk Pregnancy Management",
      "PCOS & Ovarian Dysfunction",
    ],
    education: [
      ["Fellowship in Reproductive Medicine & Clinical ART", "IFS & Nova IVF"],
      ["Senior Residency (Registrarship)", "AIIMS, New Delhi"],
      [
        "MD (Obstetrics & Gynaecology)",
        "Govt. Medical College and Hospital, Chandigarh",
      ],
      ["M.B.B.S", "Govt. Medical College and Hospital, Chandigarh"],
    ],
    highlights: [
      "Gold Medalist in the Reproductive Medicine exit examination.",
      "Consultant Infertility and IVF at Apollo Cradle Fertility, Moti Nagar.",
      "Visiting Consultant at BLK Superspeciality Hospital.",
      "Extensive research publications in national and international journals.",
    ],
    achievements: [
      "Current member of FOGSI, AOGD, IFS, ISAR, GESICON, and IMA",
      "Awarded Gold Medal in Reproductive Medicine fellowship exam",
      "Presented papers at various national and international conferences",
      "Expert in Endoscopic Surgeries (Laparoscopy and Hysteroscopy)",
    ],
    facebook:
      "https://www.facebook.com/DrSimrandeepKaurInfertilityIVFspecialist/",
  },
};
const path = location.pathname.replace(/\/$/, "");
const profileKey = path.endsWith("dr-parvinder-singh-arora")
  ? "parvinder"
  : path.endsWith("dr-simrandeep-kaur")
    ? "simrandeep"
    : null;
const treatments = {
  "robotic-joint-replacement": [
    "Robotic Joint Replacement",
    "Joint replacement consultations with discussion of robotic-assisted surgery options, suitability and next steps.",
  ],
  "knee-replacement": [
    "Knee Replacement",
    "Orthopedic consultations for knee pain and knee replacement options, with treatment planning discussed around your needs.",
  ],
  "hip-replacement": [
    "Hip Replacement",
    "Consultations for hip conditions and replacement options, including a conversation about your goals and care plan.",
  ],
  "fracture-management": [
    "Fracture Management",
    "Assessment and management consultations for fractures, with appropriate next steps discussed by the orthopedic team.",
  ],
  "joint-pain-relief": [
    "Joint Pain Relief",
    "A specialist consultation to discuss joint pain, possible care options and whether further evaluation may be useful.",
  ],
  arthroscopy: [
    "Arthroscopy",
    "Orthopedic consultations to discuss arthroscopy and whether this procedure is an appropriate option for your condition.",
  ],
  "orthopedic-consultation": [
    "Orthopedic Consultation",
    "Meet with an orthopedic specialist to discuss bone, joint or mobility concerns and possible treatment options.",
  ],
  "ivf-treatment": [
    "IVF Treatment",
    "Fertility consultations to discuss IVF, evaluation and the next steps that may be appropriate for you.",
  ],
  "iui-treatment": [
    "IUI Treatment",
    "Discuss IUI care, fertility evaluation and treatment planning with the IVF and gynaecology team.",
  ],
  "infertility-care": [
    "Infertility Care",
    "Supportive infertility consultations and fertility evaluation for individuals and couples.",
  ],
  "fertility-evaluation": [
    "Fertility Evaluation",
    "A consultation to discuss fertility concerns, relevant history and possible evaluation options.",
  ],
  "pregnancy-care": [
    "Pregnancy Care",
    "Pregnancy consultations and women’s healthcare with guidance from the gynaecology team.",
  ],
  "womens-health": [
    "Women’s Health",
    "Gynaecological consultations for women’s health needs and appropriate care options.",
  ],
};
const treatmentPhotos = {
  "robotic-joint-replacement": [
    "https://www.zynovashalbyhospital.com/wp-content/uploads/2026/03/robotic-knee-replacement-surgery-robotic-joint-replacement-zynova-hospital.jpg",
    "Orthopaedic consultation at GAD Clinics — illustrative clinic image",
  ],
  "knee-replacement": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyTrWkMkdBIwvy0TGJrdwfxPPFPtquViB4o5vRu1TZ2OGIh65nenm34M&s=10",
    "Orthopedic professional assessing a patient’s knee — illustrative clinic image",
  ],
  "hip-replacement": [
    "https://www.hemcortho.com/wp-content/uploads/2024/04/What-is-a-Hip-Replacement-Surgery-and-How-Does-it-Work.jpeg",
    "Orthopaedic care at GAD Clinics — illustrative clinic image",
  ],
  "fracture-management": [
    "/fracture-management-patient.png",
    "Patient with a lower leg cast receiving care — illustrative clinic image",
  ],
  "joint-pain-relief": [
    "/knee-replacement-therapy.png",
    "Clinician applying supportive tape to a patient’s knee — illustrative clinic image",
  ],
  arthroscopy: [
    "https://mjnaiduhospitals.com/wp-content/uploads/2023/11/arthroscopy.webp",
    "Orthopaedic professional assessing a patient’s knee — illustrative clinic image",
  ],
  "orthopedic-consultation": [
    "/knee-assessment.png",
    "Orthopaedic consultation at GAD Clinics — illustrative clinic image",
  ],
  "ivf-treatment": [
    "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/IN_VITRO-1200x628-Facebook.jpg",
    "Fertility care at GAD Clinics — illustrative clinic image",
  ],
  "iui-treatment": [
    "https://newhopeivffertility.com/Indore/wp-content/uploads/2025/09/IUI-Treatment-.webp",
    "Fertility care at GAD Clinics — illustrative clinic image",
  ],
  "infertility-care": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiF_54LOFoChFMcPuuJuTZKGevaZvL8M8Ence9MXVzToj5O5LTt4r2sNw&s=10",
    "Fertility care at GAD Clinics — illustrative clinic image",
  ],
  "fertility-evaluation": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWxmk3xu97YB266r4OF9_sE7dUyOFk5bHOamS_1yxNGkVAN14_z_iyibm&s=10",
    "GAD Clinics fertility specialist — illustrative clinic image",
  ],
  "pregnancy-care": [
    "https://fertility.iqraahospital.in/wp-content/uploads/2024/04/High-Risk-pregnancy-1024x536.jpeg",
    "Women’s health care at GAD Clinics — illustrative clinic image",
  ],
  "womens-health": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBuHM4QeS4D0AtwcIkazE1VXJcKbIpMZMCsJQ0jTD_w&s=10",
    "Women’s health care at GAD Clinics — illustrative clinic image",
  ],
};
const ivfTreatmentSlugs = new Set([
  "ivf-treatment",
  "iui-treatment",
  "infertility-care",
  "fertility-evaluation",
  "pregnancy-care",
  "womens-health",
]);
const treatmentHref = (slug) =>
  `/treatments/${ivfTreatmentSlugs.has(slug) ? "ivf" : "orthopaedics"}/${slug}/janakpuri/`;
const treatmentKey =
  path.split("/").find((segment) => Object.hasOwn(treatments, segment)) || null;
const img = (q) =>
  q.startsWith("/") || q.startsWith("http")
    ? q
    : `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=85`;
async function sendAppointmentSubmission(form, statusElement) {
  const button = form.querySelector('[type="submit"]');
  if (button) button.disabled = true;
  statusElement.textContent = "Sending your request…";
  statusElement.style.display = "block";
  try {
    const formData = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success !== true)
      throw new Error("Request could not be sent.");
    statusElement.textContent =
      "Your request was sent to the clinic. The team will contact you to confirm availability.";
    form.reset();
  } catch {
    statusElement.textContent =
      "We could not send your request. Please call +91 98711 89004 to arrange an appointment.";
  } finally {
    if (button) button.disabled = false;
  }
}
function header() {
  const groups = [
    {
      label: "ORTHOPAEDICS",
      doctor: doctors.parvinder,
      doctorUrl: "/doctors/dr-parvinder-singh-arora/",
      landing: "/treatments/orthopaedics/",
      slugs: [
        "robotic-joint-replacement",
        "knee-replacement",
        "hip-replacement",
        "fracture-management",
        "joint-pain-relief",
        "arthroscopy",
        "orthopedic-consultation",
      ],
    },
    {
      label: "IVF & GYNAECOLOGY",
      doctor: doctors.simrandeep,
      doctorUrl: "/doctors/dr-simrandeep-kaur/",
      landing: "/treatments/ivf/",
      slugs: [
        "ivf-treatment",
        "iui-treatment",
        "infertility-care",
        "fertility-evaluation",
        "pregnancy-care",
        "womens-health",
      ],
    },
  ];
  return `<div class="scroll-progress" aria-hidden="true"><span></span></div><div class="topline"><div class="wrap"><span><strong>GAD Advanced Clinics</strong> &nbsp;|&nbsp; Janakpuri, West Delhi</span><span>Care for every step forward</span></div></div><header><div class="wrap nav"><a class="brand" href="/" aria-label="GAD Clinics home"><span class="brand-logos"><img src="/joint-replacement-logo.png" alt="GAD Clinics orthopedic logo"><span class="clinic-name">GAD ADVANCED ORTHO GYNAE &amp; INFERTILITY CLINICS</span><img src="/little-steps-ivf-logo.png" alt="Little Steps IVF logo"></span></a><button class="mobile-toggle" type="button" aria-label="Open navigation menu" aria-controls="site-navigation" aria-expanded="false"><span data-react-icon="menu"></span></button><nav class="links" id="site-navigation" aria-label="Main navigation"><div class="mobile-ivf-identity"><img src="/little-steps-ivf-logo.png" alt=""><span>Little Steps IVF</span></div><a href="/">Home</a><a href="/about/">About Us</a><div class="nav-dropdown treatments-dropdown"><button class="dropdown-toggle" type="button" aria-expanded="false" aria-controls="treatments-mega-menu">Treatments <span data-react-icon="chevron-down" class="dropdown-chevron"></span></button><div class="dropdown-menu treatments-mega-menu" id="treatments-mega-menu"><div class="mega-specialties">${groups.map((group, index) => `<details class="mega-specialty" open><summary class="mega-specialty-heading"><span class="eyebrow">${group.label}</span><span class="mega-doctor">${group.doctor.name}</span><span class="mega-designation">${group.doctor.title}</span></summary><a class="mega-doctor-profile" href="${group.doctorUrl}">Meet ${group.doctor.name} <span data-react-icon="arrow-out"></span></a><div class="mega-treatment-links">${group.slugs.map((k) => `<a href="${treatmentHref(k)}">${treatments[k][0]}<span data-react-icon="arrow-out"></span></a>`).join("")}</div><a class="mega-all-link" href="${group.landing}">View all ${index === 0 ? "Orthopaedic" : "IVF"} treatments <span data-react-icon="arrow-right"></span></a></details>`).join("")}</div><a class="mega-overview-link" href="/treatments/">Explore all treatments <span data-react-icon="arrow-out"></span></a></div></div><a href="/doctors/">Our Doctors</a><div class="nav-dropdown"><button class="dropdown-toggle" type="button" aria-expanded="false">Patient Resources <span data-react-icon="chevron-down" class="dropdown-chevron"></span></button><div class="dropdown-menu"><a href="/reviews/">Patient reviews</a></div></div></nav><div class="nav-actions"><a class="btn" href="/appointment/">Book an Appointment <span><span data-react-icon="arrow-out"></span></span></a></div></div></header>`;
}
function footer() {
  const icon = (name) => `<span data-react-icon="${name}"></span>`;
  return `<footer><div class="wrap"><div class="footer-grid"><div class="footer-about"><a class="brand footer-brand" href="/"><span class="brand-logos"><img src="/joint-replacement-logo.png" alt="Joint Replacement Clinic logo"><span class="clinic-name">GAD ADVANCED ORTHO GYNAE &amp; INFERTILITY CLINICS</span><img src="/little-steps-ivf-logo.png" alt="Little Steps IVF logo"></span></a><p>Orthopedic, gynaecology and infertility care in Janakpuri, West Delhi. Personalised consultations and compassionate care.</p><div class="footer-socials" aria-label="Social media profiles"><a href="https://www.facebook.com/DrSimrandeepKaurInfertilityIVFspecialist/" target="_blank" rel="noopener noreferrer" aria-label="Dr. Simrandeep Kaur on Facebook">${icon("facebook")}<span>Dr. Simrandeep</span></a><a href="https://www.facebook.com/people/Parvinder-Singh/61587297596113/?rdid=OC7tLs9vJeCXIsdP&amp;share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AzuVv6uo2%2F" target="_blank" rel="noopener noreferrer" aria-label="Dr. Parvinder Singh on Facebook">${icon("facebook")}<span>Dr. Parvinder</span></a><a href="https://www.instagram.com/dr.parvindersinghortho/" target="_blank" rel="noopener noreferrer" aria-label="Dr. Parvinder Singh on Instagram">${icon("instagram")}<span>Instagram</span></a></div></div><div><h4>Explore</h4><a href="/about/">About us</a><a href="/specialities/">Specialities</a><a href="/doctors/">Our doctors</a><a href="/treatments/">Treatments</a></div><div><h4>Patient resources</h4><a href="/reviews/">Patient reviews</a><a href="/appointment/">Appointments</a><a href="/contact/">Contact us</a></div><div class="footer-contact"><h4>Contact us</h4><a href="https://www.google.com/maps/search/?api=1&query=C5A+321+A+Janak+Puri+New+Delhi" target="_blank" rel="noopener noreferrer">${icon("location")}<span>C5A 321 A, Janak Puri, New Delhi</span></a><a href="tel:+919871189004">${icon("phone")}<span>+91 98711 89004</span></a><a href="mailto:prvndr4@gmail.com">${icon("email")}<span>prvndr4@gmail.com</span></a></div></div><div class="copyright"><span>© ${new Date().getFullYear()} GAD Advanced Ortho Gynae & Infertility Clinics</span><span>Medical information on this site is for general guidance.</span></div></div></footer>`;
}

function pageHero(label, title, copy) {
  const crumb = path.split("/").filter(Boolean);
  const crumbLinks = crumb
    .map(
      (item, index) =>
        `<a href="/${crumb.slice(0, index + 1).join("/")}/">${item.replaceAll("-", " ")}</a>`,
    )
    .join("<span>/</span>");
  return `<section class="page-hero"><div class="wrap"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span>${crumbLinks}</nav><span class="eyebrow">${label}</span><h1>${title}</h1><p>${copy}</p></div></section>`;
}

const specialityDetails = {
  orthopedics: {
    title: "Orthopedic care for movement and mobility.",
    label: "ORTHOPEDICS",
    copy: "Consultations for joint, bone and mobility concerns with Dr. Parvinder Singh Arora.",
    doctor: "parvinder",
    items: [
      "Robotic Joint Replacement",
      "Knee Replacement",
      "Hip Replacement",
      "Fracture Management",
      "Joint Pain Relief",
      "Arthroscopy",
      "Orthopedic Consultation",
    ],
    image: "/orthopedic-hero.png",
    alt: "Orthopedic care at GAD Clinics",
  },
  "ivf-gynaecology": {
    title: "Fertility and women’s health, guided with care.",
    label: "IVF & GYNAECOLOGY",
    copy: "Consultations for fertility, pregnancy and women’s health with Dr. Simrandeep Kaur.",
    doctor: "simrandeep",
    items: [
      "IVF Treatment",
      "IUI Treatment",
      "Infertility Care",
      "Fertility Evaluation",
      "Pregnancy Care",
      "Women’s Health",
    ],
    image: "/ivf-hero.png",
    alt: "Fertility and women’s health care at GAD Clinics",
  },
};
function specialitiesPage() {
  document.title = "Specialities | GAD Advanced Clinics";
  document.querySelector('meta[name="description"]').content =
    "Explore orthopedic, IVF, fertility, gynaecology and pregnancy care at GAD Clinics in Janakpuri, West Delhi.";
  return `${header()}<main>${pageHero("OUR SPECIALITIES", "Dedicated care for what matters to you.", "Explore the specialist teams at GAD Clinics and find a consultation that fits your needs.")}<section class="section"><div class="wrap specialty-page-list">${Object.entries(
    specialityDetails,
  )
    .map(
      ([slug, item]) =>
        `<article class="specialty-page-item"><a class="specialty-page-image" href="/specialities/${slug}/"><img src="${item.image}" alt="${item.alt}" loading="lazy"></a><div><span class="eyebrow">${item.label}</span><h2>${item.title}</h2><p>${item.copy}</p><a class="text-link" href="/specialities/${slug}/">Explore this speciality <span data-react-icon="arrow-right"></span></a></div></article>`,
    )
    .join("")}</div></section></main>${footer()}`;
}
function specialityPage(slug) {
  const item = specialityDetails[slug];
  if (!item) return specialitiesPage();
  document.title = `${item.label === "ORTHOPEDICS" ? "Orthopedics" : "IVF & Gynaecology"} | GAD Clinics`;
  document.querySelector('meta[name="description"]').content = item.copy;
  const doc = doctors[item.doctor];
  return `${header()}<main>${pageHero(item.label, item.title, item.copy)}<section class="section"><div class="wrap specialty-detail"><figure><img src="${item.image}" alt="${item.alt}" loading="lazy"><figcaption>GAD Clinics · ${item.label}</figcaption></figure><div><span class="eyebrow">MEET YOUR SPECIALIST</span><h2>${doc.name}</h2><p>${doc.title}</p><p>${doc.degrees} · ${doc.experience}</p><a class="text-link" href="/doctors/${item.doctor === "parvinder" ? "dr-parvinder-singh-arora" : "dr-simrandeep-kaur"}/">View doctor profile <span data-react-icon="arrow-right"></span></a></div></div></section><section class="section soft"><div class="wrap"><div class="section-head"><span class="eyebrow">AREAS OF CARE</span><h2>Explore consultations and treatments.</h2><p>Care options are discussed after an individual consultation with a qualified clinician.</p></div><div class="specialty-treatment-list">${item.items
    .map((name) => {
      const entry = Object.entries(treatments).find(
        ([, value]) => value[0] === name,
      );
      return entry
        ? `<a href="${treatmentHref(entry[0])}"><span>${name}</span><span data-react-icon="arrow-out"></span></a>`
        : "";
    })
    .join(
      "",
    )}</div></div></section><section class="home-final-cta"><div class="wrap"><div><span class="eyebrow">YOUR NEXT STEP</span><h2>Talk with a specialist.</h2><p>Request a consultation with the ${item.label === "ORTHOPEDICS" ? "orthopedic" : "IVF & gynaecology"} team.</p></div><a class="btn" href="/appointment/">Book an appointment <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`;
}
function treatmentSpecialtyPage(slug) {
  const key = slug === "orthopedics" ? "orthopedics" : "ivf-gynaecology",
    item = specialityDetails[key],
    doctor = doctors[item.doctor];
  document.title = `${item.label === "ORTHOPEDICS" ? "Orthopaedic Treatments" : "IVF & Gynaecology Treatments"} | GAD Clinics`;
  document.querySelector('meta[name="description"]').content =
    `Explore ${item.label === "ORTHOPEDICS" ? "orthopaedic" : "IVF and gynaecology"} consultations offered by GAD Clinics in Janakpuri, West Delhi.`;
  const id =
    item.doctor === "parvinder"
      ? "dr-parvinder-singh-arora"
      : "dr-simrandeep-kaur";
  return `${header()}<main>${pageHero(item.label, item.title, item.copy)}<section class="section"><div class="wrap specialty-detail"><figure><img src="${item.image}" alt="${item.alt}" loading="lazy"><figcaption>GAD Clinics · Janakpuri, West Delhi</figcaption></figure><div><span class="eyebrow">YOUR SPECIALIST</span><h2>${doctor.name}</h2><p>${doctor.title}</p><p>${doctor.degrees}</p><a class="text-link" href="/doctors/${id}/">View doctor profile <span data-react-icon="arrow-right"></span></a></div></div></section><section class="section soft"><div class="wrap"><div class="section-head"><span class="eyebrow">AREAS OF CARE</span><h2>Explore consultations and treatments.</h2><p>Learn about services available from the ${item.label === "ORTHOPEDICS" ? "orthopaedic" : "IVF &amp; gynaecology"} team. Your doctor can discuss options after an individual assessment.</p></div><div class="specialty-treatment-list">${item.items
    .map((name) => {
      const entry = Object.entries(treatments).find(
        ([, value]) => value[0] === name,
      );
      return entry
        ? `<a href="${treatmentHref(entry[0])}"><span>${name}</span><span data-react-icon="arrow-out"></span></a>`
        : "";
    })
    .join(
      "",
    )}</div><p class="disclaimer">Treatment recommendations depend on individual assessment and should be discussed with a qualified clinician.</p></div></section><section class="home-final-cta"><div class="wrap"><div><span class="eyebrow">YOUR NEXT STEP</span><h2>Talk with a specialist.</h2><p>Request a consultation at GAD Clinics, Janakpuri, West Delhi.</p></div><a class="btn" href="/appointment/">Book an appointment <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`;
}
const patientReviews = [
  [
    "Amar Pandey",
    "I had the pleasure of being treated to my Parents by Dr. Parvinder Singh Arora, and I must say he is a truly exceptional orthopedic specialist. Not only is he highly skilled and knowledgeable in his field, but he also possesses a rare humility and politeness that instantly…",
  ],
  [
    "Ankita Kashyap",
    "I'm grateful to Dr. Simrandeep for guiding me smoothly through my pregnancy journey. Her expertise and compassionate care ensured all my doubts were addressed, especially during the early, anxious phases. Her pleasant personality made every visit a comforting…",
  ],
  [
    "Tej Dhamija",
    "Dr. Parminder Singh is a well qualified specialist and attends to patients with patience in the cleanly maintained clinic. Highly recommended.",
  ],
  [
    "Daljeet Kaur",
    "My cousin, on the basis of her experience of treatment from Dr. Parvinder Singh Arora, recommended to me. Now I am under his treatment. He is a very polite and experienced doctor. He listens to the patient's problems and suggests suitable treatment so calmly that patient…",
  ],
  [
    "Suraj Prajapati",
    "Dr. Parvinder Singh Arora is knowledgeable and diagnosed my condition accurately. He took the time to listen to my concerns, explained everything thoroughly, and made sure I was comfortable with the treatment plan. I highly recommend him to anyone.",
  ],
  [
    "Gaurav Bhola",
    "Dr. Parvinder Singh Arora is highly knowledgeable and diagnosed my condition with great accuracy. He patiently listened to all my concerns, explained everything in detail, and ensured I was fully comfortable with the treatment plan. I truly appreciate his…",
  ],
  [
    "Gautam Malik",
    "I felt genuinely cared during my visit with Dr. Parvinder Singh. He explained everything clearly and made me feel at ease. I've never felt rushed during my appointments. He always takes the time to address all my concerns. I highly recommend him to anyone in…",
  ],
  [
    "Pushpa Pintu",
    "I'm so thankful that I meet Dr Simrandeep kaur. She meet me as God. I trying for baby last 5 years but no positive result but when we meet Dr simrandeep kaur I got pregnent in First month. I am so glad to visit her Thank You mam for this happiness.",
  ],
  [
    "Rukshar Shaikh",
    "Had a great experience with Dr Simrandeep Kaur Mam. She is very helpful, sweet, caring, understands the root cause and diagnose accordingly. Under her guidance and treatment I'm finally able to conceive which I thought never would be possible but all the…",
  ],
];
function reviewsPage() {
  document.title = "Patient Reviews | GAD Clinics";
  document.querySelector('meta[name="description"]').content =
    "Read patient experiences shared about GAD Clinics in Janakpuri, West Delhi.";
  const source =
    "https://www.google.com/maps/search/?api=1&query=GAD+Advanced+Ortho+Gynae+Infertility+Clinics+Janakpuri";
  return `${header()}<main>${pageHero("PATIENT EXPERIENCES", "Words shared by our patients.", "Patient experiences from GAD Clinic. Individual experiences do not guarantee a particular treatment outcome.")}<section class="section"><div class="wrap reviews-page-grid">${patientReviews.map(([name, quote]) => `<article class="review-page-card"><div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“${quote}”</blockquote><div class="reviewer-name">${name}<span>5/5 · Google review</span></div><a href="${source}" target="_blank" rel="noopener noreferrer">View clinic listing <span data-react-icon="arrow-out"></span></a></article>`).join("")}</div><div class="wrap"><p class="disclaimer">Reviews are reproduced from the clinic’s current website. Please read patient accounts as individual experiences, not expected treatment results.</p></div></section></main>${footer()}`;
}
function galleryPausedPage() {
  document.title = "Page temporarily unavailable | GAD Clinics";
  return `${header()}<main>${pageHero("GAD CLINICS", "This page is paused for now.", "The clinic gallery is temporarily unavailable.")}<section class="section"><div class="wrap"><a class="btn" href="/">Back to home <span data-react-icon="arrow-right"></span></a></div></section></main>${footer()}`;
}
function galleryPage() {
  document.title = "Clinic Gallery | GAD Clinics";
  document.querySelector('meta[name="description"]').content =
    "View clinic, specialist and care images from GAD Advanced Clinics in Janakpuri.";
  const photos = [
    ["/specialists-combined.png", "GAD Clinics specialists"],
    ["/about-clinic.png", "Clinic care setting"],
    ["/orthopedic-hero.png", "Orthopedic care"],
    ["/ivf-hero.png", "Fertility care"],
    ["/dr-parvinder-singh-arora.png", "Dr. Parvinder Singh Arora"],
    ["/dr-simrandeep-kaur.png", "Dr. Simrandeep Kaur"],
    ["/orthopedic-hero-banner.png", "Orthopedic clinic banner"],
    ["/ivf-hero-banner.png", "Fertility clinic banner"],
  ];
  return `${header()}<main>${pageHero("GAD CLINICS", "A closer look at our care.", "Explore the clinic’s specialist teams and care imagery.")}<section class="section"><div class="wrap gallery-grid">${photos.map(([src, alt]) => `<button class="gallery-item" data-lightbox="${src}" aria-label="View image: ${alt}"><img src="${src}" alt="${alt}" loading="lazy"><span>${alt}</span></button>`).join("")}</div><dialog class="gallery-lightbox" aria-label="Image viewer"><button class="lightbox-close" aria-label="Close image">×</button><img alt=""></dialog></section></main>${footer()}`;
}
function appointmentPage() {
  document.title = "Book an Appointment | GAD Clinics";
  document.querySelector('meta[name="description"]').content =
    "Request an orthopedic, IVF or gynaecology consultation at GAD Clinics, Janakpuri, West Delhi.";
  return `${header()}<main>${pageHero("APPOINTMENT REQUEST", "Let’s talk about your care.", "Share your preferred specialty and appointment date. The clinic will contact you to confirm availability.")}<section class="section"><div class="wrap contact-form-wrap appointment-page-form"><div><span class="eyebrow">YOUR NEXT STEP</span><h2>Request a consultation.</h2><p>Complete the form and the clinic team will follow up. Submitting a request does not confirm an appointment.</p><div class="appointment-contact"><a href="tel:+919871189004"><span data-react-icon="phone"></span> +91 98711 89004</a><a href="mailto:prvndr4@gmail.com"><span data-react-icon="email"></span> prvndr4@gmail.com</a><span><span data-react-icon="location"></span> C5A 321 A, Janak Puri, New Delhi</span></div></div><form class="form contact-form" id="bookingForm"><input class="form-honeypot" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"/><input required name="name" placeholder="Your name" autocomplete="name"/><input required name="phone" type="tel" placeholder="Phone number" autocomplete="tel"/><select required name="specialty"><option value="">Choose a specialty</option><option>Orthopedics</option><option>IVF &amp; Gynaecology</option></select><select name="doctor"><option value="">Preferred doctor (optional)</option><option>Dr. Parvinder Singh Arora</option><option>Dr. Simrandeep Kaur</option></select><input name="date" type="date" aria-label="Preferred appointment date"/><input name="email" type="email" placeholder="Email (optional)"/><textarea name="message" placeholder="Anything you would like us to know? (optional)"></textarea><button class="btn" type="submit">Send appointment request <span data-react-icon="arrow-out"></span></button><p class="form-note">Your details are sent to the clinic by email using SendGrid. Please do not include sensitive medical details. The clinic will contact you to confirm.</p><div class="form-success" role="status"></div></form></div></section></main>${footer()}`;
}
function aboutPage() {
  document.title = "About GAD Clinics | Orthopedic, IVF & Women’s Health";
  document.querySelector('meta[name="description"]').content =
    "Learn about GAD Advanced Ortho Gynae & Infertility Clinics, its specialties and care team in Janakpuri, West Delhi.";
  return `${header()}<main>${pageHero("ABOUT GAD CLINICS", "One clinic. Care for every step.", "Orthopedic, gynaecology and fertility consultations brought together in Janakpuri, West Delhi.")}
  <section class="section"><div class="wrap intro-grid"><div class="intro-art about-page-art" role="img" aria-label="GAD Clinics joint replacement and Little Steps IVF logos in a welcoming clinic setting"></div><div class="intro-copy"><span class="eyebrow">OUR CLINIC</span><h2>Personal care, guided by specialists.</h2><p>GAD Advanced Ortho Gynae & Infertility Clinics provides orthopaedic, gynaecology and infertility care in Janakpuri, West Delhi. The clinic brings these specialties together under one identity, so patients can find the right consultation for their needs.</p><p>Orthopedic care is led by Dr. Parvinder Singh Arora, Senior Orthopedic and Robotic Joint Replacement Surgeon. Gynaecology and fertility care is led by Dr. Simrandeep Kaur, Gynecologist and Infertility & IVF Specialist.</p><p>Our focus is on listening to each patient, discussing appropriate options and providing compassionate care throughout the consultation process.</p><a class="btn" href="/doctors/">Meet our doctors <span data-react-icon="arrow-out"></span></a></div></div></section>
  <section class="section soft"><div class="wrap"><div class="section-head center"><span class="eyebrow">OUR SPECIALTIES</span><h2>Two specialties, a shared commitment.</h2><p>Distinct areas of care, brought together in one welcoming clinic.</p></div><div class="about-specialties"><article class="about-specialty ortho-about"><div class="about-specialty-icon"><span data-react-icon="sparkle"></span></div><span class="eyebrow">ORTHOPEDICS</span><h3>Supporting movement and mobility</h3><p>Consultations cover joint pain, knee and hip replacement, robotic joint replacement, fractures, arthroscopy and other orthopedic concerns.</p><a class="text-link" href="/treatments/">Explore orthopedic treatments <span data-react-icon="arrow-right"></span></a></article><article class="about-specialty ivf-about"><div class="about-specialty-icon"><span data-react-icon="heart"></span></div><span class="eyebrow">IVF & GYNAECOLOGY</span><h3>Care for fertility and women’s health</h3><p>Consultations include IVF and IUI, infertility evaluation, fertility care, pregnancy care and gynaecological health.</p><a class="text-link" href="/treatments/">Explore fertility and women’s care <span data-react-icon="arrow-right"></span></a></article></div></div></section>
  <section class="section"><div class="wrap"><div class="section-head"><span class="eyebrow">WHAT TO EXPECT</span><h2>A clear, personal conversation about care.</h2><p>Each consultation is an opportunity to discuss your concerns with the appropriate specialist and understand possible next steps.</p></div><div class="visit-steps"><article class="visit-step"><span>01</span><h3>Tell us what brings you in</h3><p>Share your concerns and what you hope to discuss during your visit.</p></article><article class="visit-step"><span>02</span><h3>Talk with the specialist</h3><p>The doctor can discuss your history, questions and relevant care options with you.</p></article><article class="visit-step"><span>03</span><h3>Plan the next step together</h3><p>Discuss any recommended follow-up or next steps directly with the clinic team.</p></article></div><p class="disclaimer">Care recommendations depend on individual assessment. A consultation does not guarantee a particular treatment or outcome.</p></div></section>
  <section class="section soft"><div class="wrap"><div class="section-head center"><span class="eyebrow">YOUR CARE TEAM</span><h2>Meet the doctors at GAD Clinics.</h2><p>Learn about each specialist and the care areas they focus on.</p></div><div class="doctors about-doctors">${Object.entries(
    doctors,
  )
    .map(
      ([key, d]) =>
        `<article class="doctor-card reveal"><div class="doctor-img ${d.photo}" role="img" aria-label="Portrait of ${d.name}"></div><div class="doctor-info"><span class="eyebrow" style="color:${d.accent}">${d.tag}</span><h3>${d.name}</h3><p>${d.title}</p><a class="btn secondary" href="/doctors/${key === "parvinder" ? "dr-parvinder-singh-arora" : "dr-simrandeep-kaur"}/">View doctor profile <span data-react-icon="arrow-out"></span></a></div></article>`,
    )
    .join("")}</div></div></section>
  <section class="section"><div class="wrap booking-cta"><div><span class="eyebrow">VISIT GAD CLINICS</span><h2>Find us in Janakpuri, West Delhi.</h2><p>Contact the clinic to ask about appointment availability and visit details.</p></div><a href="/contact/" class="btn">Contact GAD Clinics <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`;
}
function doctorsPage() {
  document.title = "Our Doctors | GAD Advanced Clinics";
  document.querySelector('meta[name="description"]').content =
    "Meet the orthopedic and IVF specialists at GAD Advanced Clinics in Janakpuri, West Delhi.";
  return `${header()}<main>${pageHero("OUR DOCTORS", "Specialist care, centred on you.", "Meet the doctors leading orthopedic, fertility and gynaecology care at GAD Clinics.")}
    <section class="doctor-directory-section"><div class="wrap"><div class="doctor-directory-grid">${Object.entries(
      doctors,
    )
      .map(([key, d]) => {
        const doctorUrl = `/doctors/${key === "parvinder" ? "dr-parvinder-singh-arora" : "dr-simrandeep-kaur"}/`;
        const photoUrl =
          key === "parvinder"
            ? "/dr-parvinder-singh-arora.png"
            : "/dr-simrandeep-kaur.png";
        return `<article class="doctor-directory-card reveal"><a class="doctor-directory-photo" href="${doctorUrl}" aria-label="View ${d.name}'s profile"><img src="${photoUrl}" alt="${d.name}" loading="lazy"><span>${d.tag === "ORTHOPEDICS" ? "ORTHOPEDIC TEAM" : "IVF & GYNAECOLOGY TEAM"}</span></a><div class="doctor-directory-info"><span class="eyebrow">${d.tag}</span><h2><a href="${doctorUrl}">${d.name}</a></h2><p class="doctor-directory-title">${d.title}</p><div class="doctor-directory-credentials">${d.degrees}</div><div class="doctor-directory-experience"><span data-react-icon="clock"></span>${d.experience}</div><p class="doctor-directory-intro">${d.intro}</p><div class="doctor-directory-areas">${d.areas
          .slice(0, 3)
          .map((area) => `<span>${area}</span>`)
          .join(
            "",
          )}</div><div class="doctor-directory-actions"><a class="btn" href="${doctorUrl}">View profile <span data-react-icon="arrow-right"></span></a><a class="doctor-directory-book" href="/appointment/">Book a consultation</a></div></div></article>`;
      })
      .join(
        "",
      )}</div><p class="doctor-directory-note">Appointments are confirmed by the clinic team after your request.</p></div></section></main>${footer()}`;
}
function treatmentsPage() {
  document.title = "Treatments | GAD Advanced Clinics";
  document.querySelector('meta[name="description"]').content =
    "Explore orthopedic, IVF, fertility, gynaecology and pregnancy care at GAD Clinics in Janakpuri.";
  return `${header()}<main>${pageHero("OUR TREATMENTS", "Care for your next step.", "Explore consultations and treatment areas offered by the Orthopedic and IVF & Gynaecology teams.")}<section class="section"><div class="wrap"><div class="treatment-grid">${Object.entries(
    treatments,
  )
    .map(
      ([slug, [name, description]]) =>
        `<a class="treatment-card reveal" href="${treatmentHref(slug)}"><img src="${img(treatmentPhotos[slug][0])}" alt="${treatmentPhotos[slug][1]} — illustrative care imagery" loading="lazy"><div class="treatment-card-copy"><span class="treatment-mark"><span data-react-icon="sparkle"></span></span><h3>${name}</h3><p>${description}</p><span class="text-link">Learn more <span data-react-icon="arrow-right"></span></span></div></a>`,
    )
    .join(
      "",
    )}</div><p class="disclaimer">Treatment options depend on individual assessment and should be discussed with a qualified clinician. Images are illustrative.</p></div></section></main>${footer()}`;
}
function treatmentPage(slug) {
  const item = treatments[slug];
  if (!item) return treatmentsPage();
  const [name, description] = item;
  const [photo, alt] = treatmentPhotos[slug];
  const data = treatmentContent[slug];
  const isIvf = ivfTreatmentSlugs.has(slug);
  const specialist = isIvf ? doctors.simrandeep : doctors.parvinder;
  const doctorUrl = isIvf
    ? "/doctors/dr-simrandeep-kaur/"
    : "/doctors/dr-parvinder-singh-arora/";
  const specialtyPath = isIvf
    ? "/treatments/ivf/"
    : "/treatments/orthopaedics/";
  const doctorImage = isIvf
    ? "/dr-simrandeep-kaur.png"
    : "/dr-parvinder-singh-arora.png";
  const pageTitle = `${name} in Janakpuri | GAD Clinics`;
  const pageDescription = `${name} consultations in Janakpuri, West Delhi with ${specialist.name}. Learn about assessment, care options and what to discuss at your visit.`;
  document.title = pageTitle;
  document.querySelector('meta[name="description"]').content = pageDescription;
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical)
    canonical.href = `https://gadadvancedorthogynaeandinfertilityclinics.in${treatmentHref(slug)}`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = pageTitle;
  const ogDescription = document.querySelector(
    'meta[property="og:description"]',
  );
  if (ogDescription) ogDescription.content = pageDescription;
  document
    .querySelectorAll("script[data-page-schema]")
    .forEach((node) => node.remove());
  const breadcrumb = document.createElement("script");
  breadcrumb.type = "application/ld+json";
  breadcrumb.dataset.pageSchema = "breadcrumb";
  breadcrumb.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ["Home", "/"],
      ["Treatments", "/treatments/"],
      [isIvf ? "IVF & Gynaecology" : "Orthopaedics", specialtyPath],
      [name, treatmentHref(slug)],
    ].map(([label, url], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: `https://gadadvancedorthogynaeandinfertilityclinics.in${url}`,
    })),
  });
  document.head.append(breadcrumb);
  const steps = data.steps
    .map(
      (step, index) =>
        `<li><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${step}</h3><p>${index === 0 ? "Start with the details most relevant to you and your visit." : index === 1 ? "Your clinician can review relevant findings and information you bring." : index === 2 ? "Discuss questions, appropriate options and any uncertainties." : "Agree on a next step that reflects your individual assessment."}</p></div></li>`,
    )
    .join("");
  const related = Object.entries(treatments)
    .filter(([key]) => key !== slug && ivfTreatmentSlugs.has(key) === isIvf)
    .slice(0, 3);
  return `${header()}<main class="treatment-detail-page">
    <section class="treatment-service-hero"><div class="wrap">
      <nav class="service-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/treatments/">Treatments</a><span>/</span><a href="${specialtyPath}">${isIvf ? "IVF & Gynaecology" : "Orthopaedics"}</a><span>/</span><span aria-current="page">${name}</span></nav>
      <div class="service-hero-grid"><div class="service-hero-copy"><span class="service-category"><i></i>${isIvf ? "IVF & GYNAECOLOGY" : "ORTHOPAEDIC CARE"} <span aria-hidden="true">·</span> JANAKPURI</span><p class="service-hero-kicker">GAD Advanced Clinics · West Delhi</p><h1>${name} <span>in Janakpuri</span></h1><p class="service-hero-description">${description} ${data.overview.split(". ")[0]}.</p><div class="service-hero-actions"><a class="btn" href="/appointment/">Book a consultation <span data-react-icon="arrow-out"></span></a><a class="btn secondary" href="tel:+919871189004"><span data-react-icon="phone"></span> Call the clinic</a></div><a class="service-doctor-note" href="${doctorUrl}"><span class="service-doctor-avatar"><img src="${doctorImage}" alt=""></span><span><strong>${specialist.name}</strong><small>${specialist.title}</small></span><span class="service-doctor-arrow" aria-hidden="true">↗</span></a></div>
      <figure class="service-hero-visual"><img src="${img(photo)}" alt="${alt} — illustrative care image" fetchpriority="high"><figcaption><small>CARE AT GAD CLINICS</small><strong>${name}</strong><span>Janakpuri · West Delhi</span></figcaption><span class="service-image-caption">Illustrative care imagery</span></figure></div>
      <div class="service-hero-points" aria-label="What to expect"><span><i>✓</i> Individual clinical assessment</span><span><i>✓</i> Care options explained clearly</span><span><i>✓</i> Questions and next steps discussed</span></div>
    </div></section>
    <section class="treatment-content-section"><div class="wrap treatment-content-grid"><article class="treatment-copy-block"><span class="eyebrow">UNDERSTANDING YOUR CARE</span><h2>About ${name.toLowerCase()}.</h2><p>${data.overview}</p><p>${data.planning}</p><p class="treatment-medical-note">This page provides general information, not a diagnosis or personal treatment recommendation. The right approach depends on your clinical assessment.</p></article><aside class="treatment-quick-card"><span class="eyebrow">YOUR SPECIALIST</span><img src="${doctorImage}" alt="${specialist.name}"><h3>${specialist.name}</h3><p>${specialist.title}</p><a href="${doctorUrl}" class="text-link">View doctor profile <span data-react-icon="arrow-right"></span></a><a class="btn" href="/appointment/">Request a consultation</a></aside></div></section>
    <section class="treatment-signals-section"><div class="wrap"><div class="service-section-heading"><span class="eyebrow">WHEN TO SEEK A VISIT</span><h2>What may be useful to discuss.</h2><p>These are common reasons people ask for an assessment. They do not confirm a diagnosis or determine which treatment is right for you.</p></div><div class="treatment-signal-grid">${data.signals.map((signal, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${signal}</p></article>`).join("")}</div></div></section>
    <section class="treatment-journey-section"><div class="wrap"><div class="service-section-heading"><span class="eyebrow">A CLEAR, PERSONAL PROCESS</span><h2>What to expect at a consultation.</h2><p>Your appointment is a conversation with the specialist about your situation, questions and possible next steps.</p></div><ol class="treatment-journey-list">${steps}</ol></div></section>
    <section class="treatment-planning-section"><div class="wrap treatment-planning-grid"><div><span class="eyebrow">PERSONALISED PLANNING</span><h2>Understand your options before deciding.</h2><p>${data.planning}</p><p>The doctor can explain the purpose, possible benefits, limitations and alternatives of any option relevant to your case. You can take time to ask questions and consider the information.</p><a href="${doctorUrl}" class="text-link">Meet ${specialist.name} <span data-react-icon="arrow-right"></span></a></div><aside><span class="eyebrow">BEFORE YOUR VISIT</span><h3>A few things you may want to bring</h3><ul><li>Relevant reports or imaging you already have</li><li>A list of medicines and previous care</li><li>Your main questions and concerns</li><li>Notes on when symptoms began and what affects them</li></ul></aside></div></section>
    <section class="treatment-related-section"><div class="wrap"><div class="service-section-heading"><span class="eyebrow">RELATED CARE</span><h2>Explore related consultations.</h2><p>Browse other care areas offered by the ${isIvf ? "IVF & Gynaecology" : "orthopaedic"} team.</p></div><div class="service-related-grid">${related
      .map(([key, [label, copy]]) => {
        const [relatedPhoto, relatedAlt] = treatmentPhotos[key];
        return `<a class="service-related-card" href="${treatmentHref(key)}"><img src="${img(relatedPhoto)}" alt="${relatedAlt} — illustrative care image" loading="lazy"><div><small>${isIvf ? "IVF & GYNAECOLOGY" : "ORTHOPAEDIC CARE"}</small><h3>${label}</h3><p>${copy}</p><span class="text-link">Learn more <span data-react-icon="arrow-right"></span></span></div></a>`;
      })
      .join("")}</div></div></section>
    <section class="service-faq-section"><div class="wrap"><div class="service-section-heading"><span class="eyebrow">COMMON QUESTIONS</span><h2>FAQs about ${name.toLowerCase()}.</h2></div><div class="faq service-faq-list">${data.faqs.map(([question, answer]) => `<details><summary>${question}<span class="faq-toggle-icon"><span data-react-icon="plus" class="faq-plus"></span><span data-react-icon="minus" class="faq-minus"></span></span></summary><p>${answer}</p></details>`).join("")}</div></div></section>
    ${data.sources.length ? `<section class="treatment-sources-section"><div class="wrap"><span class="eyebrow">FURTHER READING</span><h2>Patient information from medical organizations.</h2><ul>${data.sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span data-react-icon="arrow-out"></span></a></li>`).join("")}</ul></div></section>` : ""}
    <section class="service-final-cta"><div class="wrap"><span class="eyebrow">YOUR NEXT STEP · JANAKPURI</span><h2>Talk with ${specialist.name} about ${name.toLowerCase()}.</h2><p>Request a consultation at GAD Advanced Clinics in Janakpuri, West Delhi.</p><a class="btn" href="/appointment/">Book a consultation <span data-react-icon="arrow-out"></span></a><a class="service-call-link" href="tel:+919871189004">Call +91 98711 89004</a></div></section>
  </main>${footer()}`;
}
function contactPage() {
  document.title = "Contact GAD Clinics | Janakpuri, West Delhi";
  document.querySelector('meta[name="description"]').content =
    "Contact GAD Advanced Clinics in Janakpuri, West Delhi to request an orthopedic, IVF or gynaecology consultation.";
  return `${header()}<main>${pageHero("CONTACT US", "We’re here to help you get started.", "Contact GAD Advanced Clinics in Janakpuri, West Delhi for orthopedic, fertility, gynaecology or pregnancy care.")}<section class="section"><div class="wrap contact-grid"><div class="contact-card"><h2>Visit GAD Clinics</h2><div class="contact-row"><div class="why-icon"><span data-react-icon="location"></span></div><div><b>Address</b><span>C5A 321 A, Janak Puri, New Delhi</span></div></div><div class="contact-row"><div class="why-icon"><span data-react-icon="phone"></span></div><div><b>Call the clinic</b><a href="tel:+919871189004">+91 98711 89004</a></div></div><div class="contact-row"><div class="why-icon"><span data-react-icon="email"></span></div><div><b>Email</b><a href="mailto:prvndr4@gmail.com">prvndr4@gmail.com</a></div></div><div class="contact-row"><div class="why-icon"><span data-react-icon="clock"></span></div><div><b>Hours</b><span>Please contact the clinic to confirm availability</span></div></div><a class="btn" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=C5A+321+A+Janak+Puri+New+Delhi">Get directions <span data-react-icon="arrow-out"></span></a></div><div class="map"><iframe title="Map to GAD Clinics at C5A 321 A, Janak Puri, New Delhi" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=C5A%20321%20A%20Janak%20Puri%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe></div></div></section><section class="section soft" id="appointment"><div class="wrap contact-form-wrap"><div><span class="eyebrow">APPOINTMENT REQUEST</span><h2>Tell us how we can help.</h2><p>Choose a specialty and share your preferred appointment date. The clinic needs to confirm availability directly.</p></div><form class="form contact-form" id="bookingForm"><input class="form-honeypot" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"/><input required name="name" placeholder="Your name" autocomplete="name"/><input required name="phone" type="tel" placeholder="Phone number" autocomplete="tel"/><select required name="specialty"><option value="">Choose a specialty</option><option>Orthopedics</option><option>IVF &amp; Gynaecology</option></select><select name="doctor"><option value="">Preferred doctor (optional)</option><option>Dr. Parvinder Singh Arora</option><option>Dr. Simrandeep Kaur</option></select><input name="date" type="date" aria-label="Preferred appointment date"/><input name="email" type="email" placeholder="Email (optional)"/><textarea name="message" placeholder="Anything you would like us to know? (optional)"></textarea><button class="btn" type="submit">Send appointment request <span data-react-icon="arrow-out"></span></button><p class="form-note">Submitting sends your details to the clinic by email using SendGrid. Please do not include sensitive medical details. The clinic will contact you to confirm.</p><div class="form-success" role="status"></div></form></div></section></main>${footer()}`;
}
function doctorPage(d) {
  document.title = `${d.name} | GAD Advanced Clinics`;
  const title = `${d.name} | ${d.title} in Janakpuri`;
  document.querySelector('meta[name="description"]').content =
    `Learn about ${d.name}, ${d.title} at GAD Advanced Clinics in Janakpuri, West Delhi.`;
  document.querySelector('link[rel="canonical"]').href =
    `https://gadadvancedorthogynaeandinfertilityclinics.in${path}`;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content =
    `Meet ${d.name} at GAD Advanced Clinics in Janakpuri, West Delhi.`;
  const physician = document.createElement("script");
  physician.type = "application/ld+json";
  physician.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Physician",
    name: d.name,
    medicalSpecialty: d.tag === "ORTHOPEDICS" ? "Orthopedic" : "Gynecologic",
    description: d.title,
    worksFor: {
      "@type": "MedicalClinic",
      name: "GAD Advanced Ortho Gynae & Infertility Clinics",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Janakpuri",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
    },
  });
  document.head.append(physician);
  const list = (items) =>
    `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const socials = `<div class="doctor-socials"><span>Follow ${d.name.split(" ").slice(1, 2).join("")}</span>${d.facebook ? `<a href="${d.facebook}" target="_blank" rel="noopener noreferrer" aria-label="${d.name} on Facebook">Facebook <span data-react-icon="arrow-out"></span></a>` : ""}${d.instagram ? `<a href="${d.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${d.name} on Instagram">Instagram <span data-react-icon="arrow-out"></span></a>` : ""}</div>`;
  return `${header()}<main><section class="profile-hero"><div class="wrap profile-layout"><div class="profile-summary"><a href="/doctors/" class="back"><span data-react-icon="arrow-left"></span> Back to our doctors</a><span class="eyebrow" style="color:${d.accent}">${d.tag}</span><h1>${d.name}</h1><p class="profile-degrees">${d.degrees}</p><p class="profile-title">${d.title}</p><div class="profile-facts"><span><span data-react-icon="medical"></span> &nbsp;${d.experience}</span><span><span data-react-icon="location"></span> &nbsp;Janak Puri, New Delhi</span><a href="tel:+919871189004"><span data-react-icon="phone"></span> &nbsp;+91 98711 89004</a><a href="mailto:prvndr4@gmail.com"><span data-react-icon="email"></span> &nbsp;prvndr4@gmail.com</a></div><a href="/contact/#appointment" class="btn" style="background:${d.accent}">Book an appointment <span data-react-icon="arrow-out"></span></a>${socials}</div><div class="profile-photo doctor-img ${d.photo}" role="img" aria-label="Portrait of ${d.name}"></div></div></section><section class="profile-section"><div class="wrap profile-cols"><div class="profile-main"><article class="credential-box"><h3>About the Doctor</h3><p>${d.intro}</p>${list(d.highlights)}</article><article class="credential-box"><h3>Education & Training</h3><div class="education-list">${d.education.map(([degree, school]) => `<div><span class="education-icon"><span data-react-icon="school"></span></span><p><strong>${degree}</strong><br>${school}</p></div>`).join("")}</div></article></div><aside class="profile-side"><article class="credential-box specialization-box"><h3>Specializations</h3>${list(d.areas)}</article><article class="credential-box"><h3>${d.tag === "ORTHOPEDICS" ? "Achievements" : "Professional Memberships"}</h3>${list(d.achievements)}</article></aside></div><div class="wrap profile-cta"><a class="btn" href="/contact/#appointment">Book an appointment with ${d.name} <span data-react-icon="arrow-out"></span></a></div></section></main>${footer()}`;
}
function App() {
  const specialitySlug = path.startsWith("/specialities/")
    ? path.split("/")[2]
    : null;
  const isHomeMarkup = !path && !profileKey && !treatmentKey;
  const page = isHomeMarkup
    ? null
    : profileKey
      ? doctorPage(doctors[profileKey])
      : path === "/about"
        ? aboutPage()
        : path === "/contact"
          ? contactPage()
          : path === "/appointment"
            ? appointmentPage()
            : path === "/doctors"
              ? doctorsPage()
              : path === "/treatments"
                ? treatmentsPage()
                : path === "/treatments/orthopaedics"
                  ? treatmentSpecialtyPage("orthopedics")
                  : path === "/treatments/ivf"
                    ? treatmentSpecialtyPage("ivf")
                    : path === "/specialities"
                      ? specialitiesPage()
                      : specialitySlug
                        ? specialityPage(specialitySlug)
                        : path === "/gallery"
                          ? galleryPausedPage()
                          : path === "/reviews"
                            ? reviewsPage()
                            : treatmentKey
                              ? treatmentPage(treatmentKey)
                              : "";

  useEffect(() => {
    if (path === "/treatments/orthopedics") {
      window.location.replace("/treatments/orthopaedics/");
      return;
    }
    if (treatmentKey && path.split("/").length === 3) {
      window.location.replace(
        `${treatmentHref(treatmentKey)}${window.location.search}`,
      );
      return;
    }
    document.body.classList.toggle(
      "home-page",
      !path && !profileKey && !treatmentKey,
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const activeTreatment = path
        .split("/")
        .find((segment) => Object.hasOwn(treatments, segment));
      canonical.href = `https://gadadvancedorthogynaeandinfertilityclinics.in${activeTreatment ? treatmentHref(activeTreatment) : path ? `${path}/` : "/"}`;
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription)
      ogDescription.content =
        document.querySelector('meta[name="description"]')?.content || "";

    const mobileToggle = document.querySelector(".mobile-toggle");
    const links = document.querySelector(".links");
    const onMobileToggle = () => {
      const open = links?.classList.toggle("open") || false;
      mobileToggle?.setAttribute("aria-expanded", String(open));
      mobileToggle?.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu",
      );
    };
    mobileToggle?.addEventListener("click", onMobileToggle);
    const dropdownToggles = Array.from(
      document.querySelectorAll(".dropdown-toggle"),
    );
    if (window.matchMedia("(max-width: 760px)").matches)
      document
        .querySelectorAll(".mega-specialty")
        .forEach((section) => section.removeAttribute("open"));
    const dropdownHandlers = dropdownToggles.map((button) => {
      const handler = (e) => {
        const menu = e.currentTarget.nextElementSibling;
        const open = menu?.classList.toggle("is-open") || false;
        e.currentTarget.setAttribute("aria-expanded", String(open));
      };
      button.addEventListener("click", handler);
      return { button, handler };
    });
    const closeMobileMenu = () => {
      links?.classList.remove("open");
      mobileToggle?.setAttribute("aria-expanded", "false");
      mobileToggle?.setAttribute("aria-label", "Open navigation menu");
      dropdownToggles.forEach((button) => {
        button.setAttribute("aria-expanded", "false");
        button.nextElementSibling?.classList.remove("is-open");
      });
    };
    links
      ?.querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMobileMenu));
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    links?.querySelectorAll(":scope > a[href]").forEach((link) => {
      const target =
        new URL(link.href, window.location.origin).pathname.replace(
          /\/$/,
          "",
        ) || "/";
      if (target === currentPath) link.setAttribute("aria-current", "page");
    });
    const onHeaderKeydown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        dropdownToggles.forEach((button) => {
          button.setAttribute("aria-expanded", "false");
          button.nextElementSibling?.classList.remove("is-open");
        });
        mobileToggle?.focus();
      }
    };
    const onOutsideHeaderClick = (e) => {
      if (!e.target.closest(".nav-dropdown"))
        dropdownToggles.forEach((button) => {
          button.setAttribute("aria-expanded", "false");
          button.nextElementSibling?.classList.remove("is-open");
        });
      if (!e.target.closest("header") && links?.classList.contains("open"))
        closeMobileMenu();
    };
    document.addEventListener("keydown", onHeaderKeydown);
    document.addEventListener("click", onOutsideHeaderClick);

    const welcomePopup = document.getElementById("homeVisitPopup");
    const welcomeForm = document.getElementById("homeVisitForm");
    const dismissWelcomePopup = () => {
      if (!welcomePopup) return;
      welcomePopup.classList.remove("is-open");
      welcomePopup.setAttribute("aria-hidden", "true");
      document.body.classList.remove("home-popup-open");
      try {
        localStorage.setItem("gad-home-welcome-form-dismissed-v2", "true");
      } catch {}
    };
    const onWelcomePopupClick = (e) => {
      if (e.target.closest("[data-popup-close]")) dismissWelcomePopup();
    };
    const onWelcomePopupKeydown = (e) => {
      if (e.key === "Escape" && welcomePopup?.classList.contains("is-open"))
        dismissWelcomePopup();
    };
    const onWelcomeFormSubmit = (e) => {
      e.preventDefault();
      sendAppointmentSubmission(
        e.currentTarget,
        document.getElementById("homeVisitFeedback"),
      );
    };
    if (welcomePopup) {
      welcomePopup.addEventListener("click", onWelcomePopupClick);
      document.addEventListener("keydown", onWelcomePopupKeydown);
      welcomeForm?.addEventListener("submit", onWelcomeFormSubmit);
      let dismissed = false;
      try {
        dismissed =
          localStorage.getItem("gad-home-welcome-form-dismissed-v2") === "true";
      } catch {}
      if (!dismissed) {
        welcomePopup.classList.add("is-open");
        welcomePopup.setAttribute("aria-hidden", "false");
        document.body.classList.add("home-popup-open");
        window.requestAnimationFrame(() =>
          welcomeForm?.elements.namedItem("name")?.focus(),
        );
      }
    }

    const slides = [
      {
        tag: "ORTHOPEDIC CARE",
        title: "Thoughtful care. A stronger next step.",
        text: "Orthopedic consultations for joint, bone and mobility concerns, with care guided by Dr. Parvinder Singh Arora.",
        cta: "Book an appointment",
        photo: "/orthopedic-hero-banner.png",
        mobilePhoto: "/mobile-orthopedic-hero.png",
        photoPosition: "right center",
        mobilePhotoPosition: "center top",
        imageAlt: "Orthopedic care at GAD Clinics",
        logo: "/joint-replacement-logo.png",
        logoAlt: "Joint Replacement Clinic logo",
        doctor: "Dr. Parvinder Singh Arora",
        specialty: "Orthopedics",
        theme: "orthopedics",
      },
      {
        tag: "IVF & GYNAECOLOGY",
        title: "Care for every step of your fertility journey.",
        text: "Fertility, pregnancy and women’s health consultations with Dr. Simrandeep Kaur.",
        cta: "Book an appointment",
        photo: "/ivf-hero-banner.png",
        mobilePhoto: "/mobile-ivf-hero.png",
        photoPosition: "right center",
        mobilePhotoPosition: "center top",
        imageAlt: "Fertility and gynaecology care at GAD Clinics",
        logo: "/little-steps-ivf-logo.png",
        logoAlt: "Little Steps IVF logo",
        doctor: "Dr. Simrandeep Kaur",
        specialty: "IVF & Gynaecology",
        theme: "ivf",
      },
    ];
    let activeSlide = 0;
    const mobileHeroQuery = window.matchMedia("(max-width: 760px)");
    const visibleSlideCount = () => slides.length;
    const setSlide = (n) => {
      if (!document.getElementById("heroTitle")) return;
      const count = visibleSlideCount();
      activeSlide = (n + count) % count;
      const slide = slides[activeSlide];
      document.getElementById("heroTag").textContent = slide.tag;
      document.getElementById("heroTitle").textContent = slide.title;
      document.getElementById("heroText").textContent = slide.text;
      document.getElementById("heroCtaLabel").textContent = slide.cta;
      const heroSection = document.querySelector(".home-hero");
      if (heroSection) heroSection.dataset.slide = slide.theme;
      const tagLogo = document.getElementById("heroTagLogo");
      if (tagLogo) {
        tagLogo.src = slide.logo;
        tagLogo.alt = "";
      }
      document.getElementById("heroDoctorName").textContent = slide.doctor;
      document.getElementById("heroDoctorSpecialty").textContent = slide.specialty;
      document.getElementById("heroSlideNumber").textContent = String(activeSlide + 1).padStart(2, "0");
      const heroPhoto = document.getElementById("heroPhoto");
      const photo = mobileHeroQuery.matches
        ? slide.mobilePhoto || slide.photo
        : slide.photo;
      heroPhoto.style.backgroundImage = `url('${img(photo)}')`;
      heroPhoto.style.backgroundPosition = mobileHeroQuery.matches
        ? slide.mobilePhotoPosition || slide.photoPosition || "center top"
        : slide.photoPosition || "center 46%";
      heroPhoto.setAttribute("aria-label", slide.imageAlt);
      const slideLogo = document.getElementById("heroSlideLogo");
      slideLogo.src = slide.logo;
      slideLogo.alt = slide.logoAlt;
      document
        .querySelectorAll(".dot")
        .forEach((dot, index) =>
          dot.classList.toggle("active", index === activeSlide),
        );
    };
    setSlide(activeSlide);
    const prev = document.getElementById("prev"),
      next = document.getElementById("next");
    const goPrev = () => setSlide(activeSlide - 1),
      goNext = () => setSlide(activeSlide + 1);
    const onHeroBreakpointChange = () =>
      setSlide(Math.min(activeSlide, visibleSlideCount() - 1));
    mobileHeroQuery.addEventListener?.("change", onHeroBreakpointChange);
    prev?.addEventListener("click", goPrev);
    next?.addEventListener("click", goNext);
    const dots = Array.from(document.querySelectorAll(".dot"));
    const dotHandlers = dots.map((dot, index) => {
      const handler = () => setSlide(index);
      dot.addEventListener("click", handler);
      return { dot, handler };
    });
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const carouselTimer =
      document.getElementById("heroTitle") && !reducedMotion
        ? window.setInterval(() => setSlide(activeSlide + 1), 7000)
        : null;

    const form = document.getElementById("bookingForm");
    const onSubmit = (e) => {
      e.preventDefault();
      sendAppointmentSubmission(
        e.currentTarget,
        e.currentTarget.querySelector(".form-success"),
      );
    };
    form?.addEventListener("submit", onSubmit);

    const lightbox = document.querySelector(".gallery-lightbox");
    const lightboxImage = lightbox?.querySelector("img");
    const closeLightbox = lightbox?.querySelector(".lightbox-close");
    const onGalleryClick = (e) => {
      const trigger = e.target.closest("[data-lightbox]");
      if (trigger && lightbox && lightboxImage) {
        lightboxImage.src = trigger.dataset.lightbox;
        lightboxImage.alt =
          trigger.getAttribute("aria-label")?.replace(/^View image:?\s*/, "") ||
          "GAD Clinics gallery image";
        lightbox.showModal();
      } else if (e.target === lightbox) lightbox.close();
    };
    const onLightboxClose = () => lightbox?.close();
    document.addEventListener("click", onGalleryClick);
    closeLightbox?.addEventListener("click", onLightboxClose);

    const reviewTrack = document.querySelector(".testimonials");
    if (reviewTrack && !reviewTrack.dataset.marqueeReady) {
      [...reviewTrack.children].forEach((card) => {
        const duplicate = card.cloneNode(true);
        duplicate.classList.remove("reveal", "visible");
        duplicate.removeAttribute("tabindex");
        duplicate.setAttribute("aria-hidden", "true");
        reviewTrack.append(duplicate);
      });
      reviewTrack.dataset.marqueeReady = "true";
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".reveal,.doctor-card,.page-hero .wrap,.intro-copy,.why-card,.quote,.contact-card,.map,.booking,.contact-form-wrap,.credential-box,.speciality-feature,.home-doctor,.journey-steps li,.why-editorial-list article,.review-page-card,.gallery-item",
      )
      .forEach((element, index) => {
        element.classList.add("reveal");
        if (
          element.matches(
            ".treatment-card,.why-card,.quote,.credential-box,.journey-steps li,.why-editorial-list article",
          )
        )
          element.style.transitionDelay = `${(index % 4) * 65}ms`;
        observer.observe(element);
      });

    const progress = document.querySelector(".scroll-progress span");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const amount = max > 0 ? window.scrollY / max : 0;
        if (progress) progress.style.transform = `scaleX(${amount})`;
        document
          .querySelector("header")
          ?.classList.toggle("is-scrolled", window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      mobileToggle?.removeEventListener("click", onMobileToggle);
      dropdownHandlers.forEach(({ button, handler }) =>
        button.removeEventListener("click", handler),
      );
      document.removeEventListener("keydown", onHeaderKeydown);
      document.removeEventListener("click", onOutsideHeaderClick);
      welcomePopup?.removeEventListener("click", onWelcomePopupClick);
      document.removeEventListener("keydown", onWelcomePopupKeydown);
      welcomeForm?.removeEventListener("submit", onWelcomeFormSubmit);
      document.body.classList.remove("home-popup-open");
      links
        ?.querySelectorAll("a")
        .forEach((link) => link.removeEventListener("click", closeMobileMenu));
      prev?.removeEventListener("click", goPrev);
      next?.removeEventListener("click", goNext);
      mobileHeroQuery.removeEventListener?.("change", onHeroBreakpointChange);
      dotHandlers.forEach(({ dot, handler }) =>
        dot.removeEventListener("click", handler),
      );
      if (carouselTimer !== null) window.clearInterval(carouselTimer);
      form?.removeEventListener("submit", onSubmit);
      document.removeEventListener("click", onGalleryClick);
      closeLightbox?.removeEventListener("click", onLightboxClose);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isHomeMarkup ? (
    <Home
      header={header}
      footer={footer}
      img={img}
      renderMarkup={htmlToReact}
    />
  ) : (
    <>{htmlToReact(page)}</>
  );
}

export default App;
