const fs = require('fs');
const path = require('path');

const root = process.cwd();
const out = path.join(root, 'dist');
const files = [
  'index.html',
  'favicon.svg',
  'favicon.ico',
  'robots.txt',
  'site.webmanifest',
  'sitemap.xml',
  'schema.jsonld',
];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) continue;
  fs.copyFileSync(source, path.join(out, file));
}

const built = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
for (const marker of [
  'Seven country-native products.',
  'Six are in production or production launch.',
  'The routes are the doorway. The graph is the product.',
  'https://france.proptechusa.ai/',
  'https://spain.proptechusa.ai/',
]) {
  if (!built.includes(marker)) throw new Error(`Global V7 build missing marker: ${marker}`);
}
for (const stale of ['Five live markets', '225M+ property identities', 'SPAIN · FRANCE · ADDITIONAL MARKETS IN ACTIVE BUILD']) {
  if (built.includes(stale)) throw new Error(`Global V7 build contains stale marker: ${stale}`);
}

console.log('PASS: PropData Global seven-country production site built.');
