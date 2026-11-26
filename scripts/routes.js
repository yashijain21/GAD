export const routePages = [
  { path: 'about', title: 'About GAD Clinics | Orthopedic, IVF & Women’s Health', description: 'Learn about GAD Advanced Ortho Gynae & Infertility Clinics in Janakpuri, West Delhi.' },
  { path: 'contact', title: 'Contact GAD Clinics | Janakpuri, West Delhi', description: 'Contact GAD Advanced Clinics in Janakpuri, West Delhi to request a consultation.' },
  { path: 'appointment', title: 'Book an Appointment | GAD Clinics', description: 'Request an orthopedic, IVF or gynaecology consultation at GAD Clinics, Janakpuri, West Delhi.' },
  { path: 'doctors', title: 'Our Doctors | GAD Advanced Clinics', description: 'Meet the orthopedic and IVF specialists at GAD Advanced Clinics in Janakpuri, West Delhi.' },
  { path: 'specialities', title: 'Specialities | GAD Advanced Clinics', description: 'Explore orthopedic, IVF, fertility, gynaecology and pregnancy care at GAD Clinics in Janakpuri.' },
  { path: 'specialities/orthopedics', title: 'Orthopedics | GAD Clinics', description: 'Orthopedic consultations for joint, bone and mobility concerns at GAD Clinics, Janakpuri.' },
  { path: 'specialities/ivf-gynaecology', title: 'IVF & Gynaecology | GAD Clinics', description: 'Consultations for fertility, pregnancy and women’s health at GAD Clinics, Janakpuri.' },
  { path: 'reviews', title: 'Patient Reviews | GAD Clinics', description: 'Read patient experiences shared about GAD Clinics in Janakpuri, West Delhi.' },
  { path: 'treatments', title: 'Treatments | GAD Advanced Clinics', description: 'Explore orthopedic, IVF, fertility, gynaecology and pregnancy care at GAD Clinics.' },
  { path: 'treatments/orthopaedics', title: 'Orthopaedic Treatments in Janakpuri | GAD Clinics', description: 'Explore orthopaedic consultations at GAD Clinics in Janakpuri, West Delhi.' },
  { path: 'treatments/ivf', title: 'IVF & Gynaecology Treatments | GAD Clinics', description: 'Explore IVF, fertility and gynaecology consultations at GAD Clinics in Janakpuri, West Delhi.' },
  ...[
    'robotic-joint-replacement','knee-replacement','hip-replacement','fracture-management',
    'joint-pain-relief','arthroscopy','orthopedic-consultation','ivf-treatment','iui-treatment',
    'infertility-care','fertility-evaluation','pregnancy-care','womens-health'
  ].map(slug => {
    const ivf = ['ivf-treatment','iui-treatment','infertility-care','fertility-evaluation','pregnancy-care','womens-health'].includes(slug);
    const labels = {'robotic-joint-replacement':'Robotic Joint Replacement','knee-replacement':'Knee Replacement','hip-replacement':'Hip Replacement','fracture-management':'Fracture Management','joint-pain-relief':'Joint Pain Relief','arthroscopy':'Arthroscopy','orthopedic-consultation':'Orthopedic Consultation','ivf-treatment':'IVF Treatment','iui-treatment':'IUI Treatment','infertility-care':'Infertility Care','fertility-evaluation':'Fertility Evaluation','pregnancy-care':'Pregnancy Care','womens-health':'Women’s Health'};
    const label = labels[slug];
    return {
      path: `treatments/${ivf ? 'ivf' : 'orthopaedics'}/${slug}/janakpuri`,
      title: `${label} in Janakpuri | GAD Clinics`,
      description: `${label} consultations with a specialist at GAD Clinics in Janakpuri, West Delhi. Learn about evaluation and care options.`
    };
  })
];
