const allowedSpecialties = new Set(['Orthopedics', 'IVF & Gynaecology']);

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const data = request.body && typeof request.body === 'object' ? request.body : {};

  // A filled honeypot indicates an automated submission. Respond as if accepted.
  if (clean(data._honey, 200)) {
    return response.status(200).json({ success: true });
  }

  const appointment = {
    name: clean(data.name, 100),
    phone: clean(data.phone, 30),
    email: clean(data.email, 254),
    specialty: clean(data.specialty, 60),
    doctor: clean(data.doctor, 100),
    date: clean(data.date, 10),
    message: clean(data.message, 1000),
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (appointment.name.length < 2 || appointment.phone.replace(/\D/g, '').length < 7 ||
      !allowedSpecialties.has(appointment.specialty) ||
      (appointment.email && !emailPattern.test(appointment.email)) ||
      (appointment.date && !datePattern.test(appointment.date))) {
    return response.status(400).json({ success: false, message: 'Please check the appointment details and try again.' });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.APPOINTMENTS_TO_EMAIL || 'prvndr4@gmail.com';
  if (!apiKey || !fromEmail) {
    return response.status(503).json({ success: false, message: 'Appointment email is not configured yet.' });
  }

  const lines = [
    'New appointment request from the GAD Clinics website',
    '',
    `Name: ${appointment.name}`,
    `Phone: ${appointment.phone}`,
    `Email: ${appointment.email || 'Not provided'}`,
    `Specialty: ${appointment.specialty}`,
    `Preferred doctor: ${appointment.doctor || 'No preference'}`,
    `Preferred date: ${appointment.date || 'No preference'}`,
    '',
    'Additional information:',
    appointment.message || 'None provided',
  ];
  const email = {
    personalizations: [{ to: [{ email: toEmail }] }],
    from: { email: fromEmail },
    subject: `GAD Clinics appointment request — ${appointment.specialty}`,
    content: [{ type: 'text/plain', value: lines.join('\n') }],
  };
  if (appointment.email) email.reply_to = { email: appointment.email, name: appointment.name };

  try {
    const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });

    if (!sendgridResponse.ok) {
      console.error('SendGrid rejected an appointment email with status', sendgridResponse.status);
      return response.status(502).json({ success: false, message: 'The request could not be sent. Please call the clinic.' });
    }
    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('SendGrid appointment delivery failed:', error?.message || 'Unknown error');
    return response.status(502).json({ success: false, message: 'The request could not be sent. Please call the clinic.' });
  }
}
