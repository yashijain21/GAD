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
  ...[
    'robotic-joint-replacement','knee-replacement','hip-replacement','fracture-management',
    'joint-pain-relief','arthroscopy','orthopedic-consultation','ivf-treatment','iui-treatment',
    'infertility-care','fertility-evaluation','pregnancy-care','womens-health'
  ].map(slug => ({
    path: `treatments/${slug}`,
    title: `${slug.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')} | GAD Advanced Clinics`,
    description: 'Learn about this care option and request a specialist consultation at GAD Clinics, Janakpuri, West Delhi.'
  }))
];
