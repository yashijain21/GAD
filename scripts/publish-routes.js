import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { routePages } from './routes.js';

const builtHome = await readFile(resolve('dist/index.html'), 'utf8');
const js = builtHome.match(/<script[^>]+src="([^"]+\.js)"/i)?.[1];
const css = builtHome.match(/<link[^>]+href="([^"]*\/assets\/[^\"]+\.css)"/i)?.[1];
if (!js || !css) throw new Error('Could not find the built application JS and CSS assets in dist/index.html.');
const site = 'https://gadadvancedorthogynaeandinfertilityclinics.in';
for (const route of routePages) {
  const output = resolve('dist', route.path, 'index.html');
  await mkdir(dirname(output), { recursive: true });
  const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#30216f"><title>${route.title}</title><meta name="description" content="${route.description}"><meta property="og:type" content="website"><meta property="og:title" content="${route.title}"><meta property="og:description" content="${route.description}"><meta property="og:url" content="${site}/${route.path}/"><link rel="canonical" href="${site}/${route.path}/"><link rel="stylesheet" href="${css}"></head><body><div id="app" class="block"></div><script type="module" src="${js}"></script></body></html>`;
  await writeFile(output, html, 'utf8');
}
