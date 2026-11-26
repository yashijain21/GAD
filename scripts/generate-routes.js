import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { routePages } from './routes.js';

const site = 'https://gadadvancedorthogynaeandinfertilityclinics.in';
const sitemapPaths = [
  '',
  'doctors/dr-parvinder-singh-arora',
  'doctors/dr-simrandeep-kaur',
  ...routePages.map(route => route.path)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map(path => `  <url><loc>${site}/${path ? `${path}/` : ''}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve('public/sitemap.xml'), sitemap, 'utf8');
await writeFile(resolve('sitemap.xml'), sitemap, 'utf8');
for (const route of routePages) {
  const file = resolve(route.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#203C36"><title>${route.title}</title><meta name="description" content="${route.description}"><meta property="og:type" content="website"><meta property="og:title" content="${route.title}"><meta property="og:description" content="${route.description}"><meta property="og:url" content="${site}/${route.path}/"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="canonical" href="${site}/${route.path}/"></head><body><div id="app" class="block"></div><script type="module" src="/src/main.jsx"></script></body></html>`;
  await writeFile(file, html, 'utf8');
}
