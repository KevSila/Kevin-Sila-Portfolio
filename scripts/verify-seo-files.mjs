import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'dist/sitemap.xml',
  'dist/robots.txt',
  'dist/googlec555c9832d27b872.html',
  'dist/favicon.svg',
];

for (const file of requiredFiles) {
  await access(file);
}

const [sitemap, robots, verification] = await Promise.all([
  readFile('dist/sitemap.xml', 'utf8'),
  readFile('dist/robots.txt', 'utf8'),
  readFile('dist/googlec555c9832d27b872.html', 'utf8'),
]);

const canonical = 'https://kevsilaportfolio.netlify.app/';

if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
  throw new Error('sitemap.xml does not contain the canonical portfolio URL');
}

if (!robots.includes(`Sitemap: ${canonical}sitemap.xml`)) {
  throw new Error('robots.txt does not advertise the canonical sitemap URL');
}

if (verification.trim() !== 'google-site-verification: googlec555c9832d27b872.html') {
  throw new Error('Google Search Console verification file content is incorrect');
}

console.log('SEO deployment check passed: sitemap, robots, verification and favicon are present in dist.');
