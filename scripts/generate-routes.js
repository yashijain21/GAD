import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { routePages } from './routes.js';

const site = 'https://gadadvancedorthogynaeandinfertilityclinics.in';
for (const route of routePages) {
  const file = resolve(route.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#30216f"><title>${route.title}</title><meta name="description" content="${route.description}"><meta property="og:type" content="website"><meta property="og:title" content="${route.title}"><meta property="og:description" content="${route.description}"><link rel="canonical" href="${site}/${route.path}"></head><body><div id="app" class="block"></div><script type="module" src="/src/main.jsx"></script></body></html>`;
  await writeFile(file, html, 'utf8');
}
