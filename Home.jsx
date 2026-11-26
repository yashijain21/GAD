import React from 'react';

function homeMarkup({ header, footer }) {
  return `${header()}<main>
    <section class="hero home-hero">
      <div class="wrap home-hero-inner">
        <div class="home-hero-copy">
          <span class="eyebrow" id="heroTag">ORTHOPEDIC CARE</span>
          <h1 id="heroTitle">Thoughtful care. A stronger next step.</h1>
          <p id="heroText">Orthopedic consultations for joint, bone and mobility concerns, with care guided by Dr. Parvinder Singh Arora.</p>
          <div class="hero-actions"><a class="btn" id="heroCta" href="/appointment/"><span id="heroCtaLabel">Book an appointment</span><span data-react-icon="arrow-out"></span></a><a class="btn secondary" href="/specialities/">Explore our specialities <span data-react-icon="arrow-right"></span></a></div>
          <div class="hero-trust-items"><span><span data-react-icon="medical"></span> Specialist doctors</span><span><span data-react-icon="pulse"></span> Two care teams</span><span><span data-react-icon="pin"></span> Janak Puri</span></div>
        </div>
        <div class="home-hero-image">
          <div class="hero-photo" id="heroPhoto" role="img" aria-label="Orthopedic care at GAD Clinics" style="background-image:url('/orthopedic-hero-banner.png');background-position:center 42%"></div>
          <div class="hero-slide-brand"><img class="hero-slide-logo" id="heroSlideLogo" src="/joint-replacement-logo.png" alt="Joint Replacement Clinic logo"></div>
          <div class="hero-controls"><button class="arrow" id="prev" aria-label="Previous hero slide"><span data-react-icon="chevron-left"></span></button><div class="dots"><button class="dot active" aria-label="Orthopedic care slide"></button><button class="dot" aria-label="IVF and gynaecology slide"></button></div><button class="arrow" id="next" aria-label="Next hero slide"><span data-react-icon="chevron-right"></span></button></div>
        </div>
      </div>
    </section>

    <section class="home-speciality-band" id="specialities"><div class="wrap speciality-band-grid"><div class="speciality-band-heading"><span class="eyebrow">OUR SPECIALITIES</span><h2>Comprehensive care across specialities.</h2><a class="text-link" href="/specialities/">Explore all specialities <span data-react-icon="arrow-right"></span></a></div>
      <a class="speciality-tile" href="/specialities/orthopedics/"><img src="/knee-assessment.png" alt="Orthopedic knee consultation at GAD Clinics" loading="lazy"><span class="speciality-tile-copy"><b>Orthopedics</b><small>Expert care for stronger movement</small><span class="tile-arrow" data-react-icon="arrow-right"></span></span></a>
      <a class="speciality-tile" href="/specialities/ivf-gynaecology/"><img src="https://img.magnific.com/free-photo/closeup-shot-person-studying-coronavirus-particles-with-microscope_181624-724.jpg" alt="Dr. Simrandeep Kaur, IVF and gynaecology specialist" loading="lazy"><span class="speciality-tile-copy"><b>IVF &amp; Gynaecology</b><small>Guidance for the journey ahead</small><span class="tile-arrow" data-react-icon="arrow-right"></span></span></a>
    </div></section>

    <section class="home-about-doctors" id="about"><div class="home-about-image"><img src="/about-clinic.png" alt="GAD Clinics care setting" loading="lazy"></div><div class="home-about-copy"><span class="eyebrow">ABOUT GAD CLINICS</span><h2>Healing with expertise &amp; care.</h2><p>GAD Advanced Ortho Gynae &amp; Infertility Clinics brings orthopedic, gynaecology and fertility care together under one roof in Janakpuri, West Delhi.</p><p>Our specialist teams are led by Dr. Parvinder Singh Arora and Dr. Simrandeep Kaur, with a focus on personalised consultations and compassionate patient care.</p><a class="btn" href="/about/">Know more about us <span data-react-icon="arrow-out"></span></a></div><div class="home-doctors-panel" id="doctors"><div class="home-doctors-heading"><div><span class="eyebrow">OUR DOCTORS</span><h2>Meet our expert team.</h2></div><a href="/doctors/" aria-label="Meet all our doctors"><span data-react-icon="arrow-right"></span></a></div><div class="home-doctor-cards">
      <article class="home-doctor-card"><a class="home-doctor-photo" href="/doctors/dr-parvinder-singh-arora/"><img src="/dr-parvinder-singh-arora.png" alt="Dr. Parvinder Singh Arora" loading="lazy"></a><div class="home-doctor-info"><b>Dr. Parvinder Singh Arora</b><span>Orthopaedics</span><small>MBBS, DNB (Ortho), MNAMS, FJR</small><a href="/doctors/dr-parvinder-singh-arora/">View profile <span data-react-icon="arrow-right"></span></a></div></article>
      <article class="home-doctor-card"><a class="home-doctor-photo" href="/doctors/dr-simrandeep-kaur/"><img src="/dr-simrandeep-kaur.png" alt="Dr. Simrandeep Kaur" loading="lazy"></a><div class="home-doctor-info"><b>Dr. Simrandeep Kaur</b><span>IVF &amp; Gynaecology</span><small>MBBS, MD (Obstetrics &amp; Gynaecology)</small><a href="/doctors/dr-simrandeep-kaur/">View profile <span data-react-icon="arrow-right"></span></a></div></article>
    </div></div></section>

    <section class="home-treatments" id="treatments"><div class="wrap treatments-feature"><div class="treatments-intro"><span class="eyebrow">TREATMENTS &amp; SERVICES</span><h2>Advanced care for better living.</h2><p>Explore care options offered by the orthopedic and IVF &amp; gynaecology teams.</p><a class="btn" href="/treatments/">Explore treatments <span data-react-icon="arrow-out"></span></a></div><div class="treatment-image-grid">
      <a href="/treatments/orthopaedics/knee-replacement/janakpuri/"><img src="/knee-assessment.png" alt="Orthopedic professional assessing a patient’s knee" loading="lazy"><b>Joint replacement</b></a><a href="/treatments/ivf/ivf-treatment/janakpuri/"><img src="https://img.magnific.com/free-photo/closeup-shot-person-studying-coronavirus-particles-with-microscope_181624-724.jpg" alt="Laboratory professional studying particles with a microscope" loading="lazy"><b>IVF treatment</b></a><a href="/treatments/ivf/infertility-care/janakpuri/"><img src="https://img.magnific.com/free-photo/couple-suffering-from-infertility_23-2149430785.jpg" alt="Couple experiencing infertility" loading="lazy"><b>Infertility care</b></a><a href="/treatments/ivf/pregnancy-care/janakpuri/"><img src="https://images.unsplash.com/photo-1632053652571-a6a45052bbbd?auto=format&amp;fit=crop&amp;w=900&amp;q=85" alt="Doctor consulting a pregnant patient" loading="lazy"><b>Pregnancy care</b></a>
    </div></div></section>

    <section class="home-trust-reviews"><div class="home-trust-panel"><span class="eyebrow">WHY CHOOSE GAD CLINICS</span><h2>Your trust. Our commitment.</h2><div class="home-trust-points"><div><span data-react-icon="doctor"></span><b>Specialist<br>doctors</b></div><div><span data-react-icon="heart"></span><b>Personalised<br>consultations</b></div><div><span data-react-icon="medical"></span><b>Orthopedic &amp;<br>women’s care</b></div><div><span data-react-icon="location"></span><b>Care in<br>Janak Puri</b></div></div><div class="home-trust-note"><p>From joint and mobility concerns to fertility, pregnancy and women’s health, our two specialist teams help you find the right next conversation.</p><div><a class="text-link" href="/specialities/">Explore care areas <span data-react-icon="arrow-right"></span></a><a class="text-link" href="/appointment/">Speak with the clinic <span data-react-icon="arrow-right"></span></a></div></div></div><div class="home-testimonial-panel"><div class="testimonial-heading"><div><span class="eyebrow">PATIENT TESTIMONIALS</span><h2>What our patients say.</h2></div><a class="text-link" href="/reviews/">All reviews <span data-react-icon="arrow-right"></span></a></div><article class="home-quote"><div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“Dr. Parvinder Singh Arora is knowledgeable and diagnosed my condition accurately. He took the time to listen to my concerns, explained everything thoroughly, and made sure I was comfortable with the treatment plan.”</blockquote><b>Suraj Prajapati <span>Patient review · 5/5</span></b></article><article class="home-quote home-quote-secondary"><div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“I'm grateful to Dr. Simrandeep for guiding me smoothly through my pregnancy journey. Her expertise and compassionate care ensured all my doubts were addressed, especially during the early, anxious phases. Her pleasant personality made every visit a comforting…”</blockquote><b>Ankita Kashyap <span>Patient review · 5/5</span></b></article><p class="disclaimer">Patient experiences are individual and do not guarantee a particular treatment outcome.</p></div></section>

    <section class="home-patient-journey"><div class="wrap journey-layout"><div><span class="eyebrow">YOUR PATIENT JOURNEY</span><h2>A clear next step, at every stage.</h2><p>Choose a specialty, send an appointment request and the clinic will contact you to confirm availability.</p><a class="text-link" href="/appointment/">Request an appointment <span data-react-icon="arrow-right"></span></a></div><ol class="journey-steps"><li><span>01</span><div><b>Choose a specialty</b><p>Orthopedics or IVF &amp; Gynaecology.</p></div></li><li><span>02</span><div><b>Request a consultation</b><p>Share your preferred date and contact details.</p></div></li><li><span>03</span><div><b>Hear from the clinic</b><p>The team will contact you to confirm availability.</p></div></li></ol></div></section>

    <section class="home-faq"><div class="wrap home-faq-layout"><div><span class="eyebrow">GOOD TO KNOW</span><h2>Questions, answered.</h2><p>Our clinic team can help direct your enquiry to the right specialist.</p><a class="text-link" href="/contact/">Get in touch <span data-react-icon="arrow-right"></span></a></div><div class="faq"><details><summary>What services are available at GAD Clinics?<span class="faq-toggle-icon"><span data-react-icon="plus" class="faq-plus"></span><span data-react-icon="minus" class="faq-minus"></span></span></summary><p>Orthopedic consultations and joint care, alongside IVF, fertility, gynaecology and pregnancy care in Janakpuri.</p></details><details><summary>How do I choose a specialist?<span class="faq-toggle-icon"><span data-react-icon="plus" class="faq-plus"></span><span data-react-icon="minus" class="faq-minus"></span></span></summary><p>Select Orthopedics or IVF &amp; Gynaecology in the appointment request. You may also choose a preferred doctor.</p></details><details><summary>Can I request a particular appointment date?<span class="faq-toggle-icon"><span data-react-icon="plus" class="faq-plus"></span><span data-react-icon="minus" class="faq-minus"></span></span></summary><p>Yes. Share your preferred date in the request form. The clinic will confirm availability with you.</p></details><details><summary>Does submitting the form confirm my appointment?<span class="faq-toggle-icon"><span data-react-icon="plus" class="faq-plus"></span><span data-react-icon="minus" class="faq-minus"></span></span></summary><p>No. This form submits a request. The clinic must contact you to confirm the appointment.</p></details></div></div></section>

  </main>
  <section class="home-visit-popup" id="homeVisitPopup" aria-hidden="true" aria-label="Appointment request">
    <div class="home-visit-backdrop" data-popup-close aria-hidden="true"></div>
    <div class="home-visit-dialog" role="dialog" aria-modal="true" aria-labelledby="homeVisitTitle" tabindex="-1">
      <button class="home-visit-close" type="button" data-popup-close aria-label="Close appointment form"><span data-react-icon="close"></span></button>
      <span class="eyebrow">WELCOME TO GAD CLINICS</span>
      <h2 id="homeVisitTitle">Request a consultation.</h2>
      <p>Tell us how to reach you and our team will help direct your request to the right specialist.</p>
      <form class="home-visit-form" id="homeVisitForm">
        <input class="form-honeypot" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <input required name="name" placeholder="Your name" autocomplete="name" aria-label="Your name">
        <input required name="phone" type="tel" placeholder="Phone number" autocomplete="tel" aria-label="Phone number">
        <select required name="specialty" aria-label="Choose a specialty"><option value="">Choose a specialty</option><option>Orthopedics</option><option>IVF &amp; Gynaecology</option></select>
        <select name="doctor" aria-label="Preferred doctor (optional)"><option value="">Preferred doctor (optional)</option><option>Dr. Parvinder Singh Arora</option><option>Dr. Simrandeep Kaur</option></select>
        <input name="date" type="date" aria-label="Preferred appointment date (optional)">
        <input name="email" type="email" placeholder="Email (optional)" autocomplete="email" aria-label="Email (optional)">
        <button class="btn" type="submit">Request an appointment <span data-react-icon="arrow-out"></span></button>
        <small>This sends a request, not a confirmed appointment. The clinic will contact you to confirm availability.</small>
        <div class="home-visit-feedback" id="homeVisitFeedback" role="status" aria-live="polite"></div>
      </form>
    </div>
  </section>${footer()}`;
}

export default function Home({ header, footer, renderMarkup }) {
  return <>{renderMarkup(homeMarkup({ header, footer }))}</>;
}
