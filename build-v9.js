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

const htmlPath = path.join(out, 'index.html');
if (!fs.existsSync(htmlPath)) throw new Error('Global V9 build missing dist/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const required = [
  'PropData Global | 400M+ Property Records · 7B+ Data Points',
  'Scale without semantics is',
  'id="countries"',
  'id="access"',
  'id="model"',
  'id="coverage"',
  'id="developers"',
  'id="enterprise"',
  'United States',
  'Great Britain',
  'New Zealand',
  'Australia',
  'Estonia',
  'France',
  'Spain',
  '400M+',
  '7B+',
  '166M+',
  '~40M',
  '3.04M',
  '16.97M',
  '778K+',
  '≈100M',
  '78.94M',
  'truthful null',
  'source-system scale',
  'https://buy.stripe.com/7sYdR9c6ybuC7BHbQL7wA04',
  'https://buy.stripe.com/8x28wP7Qi8iq5tz4oj7wA02',
  'https://buy.stripe.com/7sYfZh2vY2Y6cW10837wA0p',
  'https://buy.stripe.com/4gM8wP1rUfKS4pv5sn7wA0g',
  'https://buy.stripe.com/8x29ATgmOaqy4pvg717wA0h',
  'https://buy.stripe.com/00w5kDfiK1U21djaMH7wA0i',
  'https://buy.stripe.com/5kQ14neeGbuC09f0837wA0a',
  'https://buy.stripe.com/6oU5kDgmO6aig8daMH7wA0b',
  'https://buy.stripe.com/3cIdR9daC9mu1djdYT7wA0c',
  'https://buy.stripe.com/eVqcN53A256e6xD9ID7wA0d',
  'https://buy.stripe.com/14A6oH9Yq6ai7BH0837wA0e',
  'https://buy.stripe.com/28E5kD9YqgOWg8d9ID7wA0f',
  'https://buy.stripe.com/7sYaEXgmO42ag8d2gb7wA07',
  'https://buy.stripe.com/bJefZh0nQeGOaNTcUP7wA08',
  'https://buy.stripe.com/eVq6oH3A256e3lr9ID7wA09',
  'https://buy.stripe.com/9B66oH7QigOW2hn3kf7wA0m',
  'https://buy.stripe.com/8x2cN56Me0PYcW1f2X7wA0n',
  'https://buy.stripe.com/28E7sL5Ia9mu2hnaMH7wA0o',
  'https://buy.stripe.com/4gM8wP9Yq42af49g717wA0j',
  'https://buy.stripe.com/00w8wP6Me6aie057Av7wA0k',
  'https://buy.stripe.com/dRmaEX0nQbuC3lr5sn7wA0l',
];

for (const marker of required) {
  if (!html.includes(marker)) throw new Error(`Global V9 missing required marker: ${marker}`);
}

const forbidden = [
  '225M+',
  'across four live markets',
  'five country-native',
  '5 country-native',
  'PropData Global | Country-Native Property Intelligence Infrastructure',
];
for (const marker of forbidden) {
  if (html.includes(marker)) throw new Error(`Global V9 contains stale marker: ${marker}`);
}

console.log('PASS: PropData Global world-class v9 site built.');