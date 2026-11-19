import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App.jsx';

document.body.classList.toggle('home-page', !window.location.pathname.replace(/\/$/, ''));

createRoot(document.getElementById('app')).render(<App />);
