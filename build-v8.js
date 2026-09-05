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

let html = fs.readFileSync(path.join(out, 'index.html'), 'utf8');

function replaceRequired(from, to, label) {
  if (!html.includes(from)) throw new Error(`Global V8 missing replacement target: ${label}`);
  html = html.replace(from, to);
}

replaceRequired(
  '<title>PropData Global | Country-Native Property Intelligence Infrastructure</title>',
  '<title>PropData Global | 400M+ Property Records · 7B+ Data Points</title>',
  'title'
);
replaceRequired(
  '<meta name="description" content="PropData Global is the country-native property intelligence network from PropTechUSA.ai: United States, Great Britain, New Zealand, Australia, Estonia and France in production or production launch, with Spain in launch certification.">',
  '<meta name="description" content="PropData Global spans 400M+ property and parcel records and 7B+ normalized property data points across seven country-native products: US, GB, NZ, AU, EE, FR and ES.">',
  'meta description'
);
replaceRequired(
  '<meta property="og:title" content="PropData Global | One operating model. Country-native property truth.">',
  '<meta property="og:title" content="PropData Global | 400M+ records. 7B+ data points. Seven country products.">',
  'og title'
);
replaceRequired(
  '<meta property="og:description" content="Seven country-native PropData products. Six production or production-launch surfaces. Spain in launch certification. REST, OAuth MCP, bulk, white-label and custom delivery.">',
  '<meta property="og:description" content="400M+ property and parcel records. 7B+ normalized property data points. Seven country-native products with self-serve local-market access plus enterprise delivery.">',
  'og description'
);
replaceRequired(
  '<meta name="twitter:title" content="PropData Global | Country-native property intelligence">',
  '<meta name="twitter:title" content="PropData Global | 400M+ records · 7B+ data points">',
  'twitter title'
);
replaceRequired(
  '<meta name="twitter:description" content="The routes are the doorway. The graph is the product. Seven country-native products behind one governed PropData operating model.">',
  '<meta name="twitter:description" content="Seven country-native products. 400M+ property and parcel records. 7B+ normalized property data points. One governed operating layer.">',
  'twitter description'
);

replaceRequired(
  '<a href="#countries">Countries</a>',
  '<a href="#access">Access</a><a href="#countries">Countries</a>',
  'nav access link'
);
replaceRequired(
  '<a class="nav-cta" href="#countries">Choose a country</a>',
  '<a class="nav-cta" href="#access">Buy access</a>',
  'nav cta'
);
replaceRequired(
  '<p class="hero-lede">PropData is building one governed property intelligence network country by country. We preserve the identity systems, geometry, relationships, source semantics and coverage rules that make each market real—then expose them through a coherent developer and enterprise contract.</p>',
  '<p class="hero-lede">PropData now spans more than 400 million property and parcel records and 7 billion normalized property data points across seven country-native products. We preserve the identity systems, geometry, relationships, source semantics and coverage rules that make each market real—then expose them through one coherent developer and enterprise contract.</p>',
  'hero lede'
);
replaceRequired(
  '<div class="actions"><a class="btn primary" href="#countries">Explore the country network →</a><a class="btn ghost" href="https://proptechusa.ai/">Why PropTechUSA.ai exists ↗</a></div>',
  '<div class="actions"><a class="btn primary" href="#access">Choose a market →</a><a class="btn ghost" href="#countries">Explore coverage →</a></div>',
  'hero actions'
);
replaceRequired(
  '<h2>Seven country-native products.<br>One operating model.</h2><p>Six are in production or production launch. Spain is in launch certification. Source-system scale and promoted PropData coverage remain separate claims.</p>',
  '<h2>400M+ records.<br>7B+ data points.</h2><p>Seven country-native products preserve local property truth while sharing one governed operating model. Commercial state and promoted coverage remain explicit by market.</p>',
  'hero status'
);
replaceRequired(
  '<section class="metrics"><div class="shell metric-grid"><div class="metric"><strong>7</strong><b>country-native products</b><span>US · GB · NZ · AU · EE · FR · ES</span></div><div class="metric"><strong>6</strong><b>production / production-launch surfaces</b><span>Country status remains explicit.</span></div><div class="metric"><strong>1</strong><b>launch-certification graph</b><span>Spain is certifying rather than overclaimed.</span></div><div class="metric"><strong>5+</strong><b>delivery shapes</b><span>REST · OAuth MCP · bulk · white-label · custom</span></div></div></section>',
  '<section class="metrics"><div class="shell metric-grid"><div class="metric"><strong>400M+</strong><b>property + parcel records</b><span>Country-native identities and source systems.</span></div><div class="metric"><strong>7B+</strong><b>normalized property data points</b><span>Facts, relationships, geometry, provenance and coverage states.</span></div><div class="metric"><strong>7</strong><b>country-native products</b><span>US · GB · NZ · AU · EE · FR · ES</span></div><div class="metric"><strong>5+</strong><b>delivery shapes</b><span>REST · OAuth MCP · bulk · white-label · custom</span></div></div></section>',
  'metrics'
);
replaceRequired(
  'A governed property intelligence operating model across the United States, Great Britain, New Zealand, Australia, Estonia, France and Spain, with market-specific coverage and promotion states.',
  'A governed global property intelligence layer spanning 400M+ property and parcel records and 7B+ normalized property data points across the United States, Great Britain, New Zealand, Australia, Estonia, France and Spain, with market-specific coverage and promotion states.',
  'inline schema description'
);

const accessCss = `
.access{background:#07131f;color:#fff;border-top:1px solid rgba(255,255,255,.08)}
.access .section-head{max-width:980px}
.access .kicker{color:#84c5ff}
.access .section-head h2{color:#fff}
.access .section-head h2 em{font-style:normal;color:#8fd4b2}
.access .section-head p{color:#aabac4}
.access-rail{display:flex;gap:7px;flex-wrap:wrap;margin:-15px 0 30px}
.access-rail span{padding:8px 10px;border:1px solid rgba(255,255,255,.12);border-radius:999px;background:rgba(255,255,255,.045);color:#aabac4;font:850 7px var(--mono);letter-spacing:.06em}
.access-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.access-card{overflow:hidden;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:#0b1b28;box-shadow:0 24px 70px rgba(0,0,0,.16)}
.access-card-head{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:20px 21px;border-bottom:1px solid rgba(255,255,255,.09);background:linear-gradient(135deg,rgba(255,255,255,.045),rgba(255,255,255,.018))}
.access-code{width:46px;height:42px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:#06111b;font:950 10px var(--mono);letter-spacing:.08em}
.access-name strong{display:block;font-size:19px;letter-spacing:-.035em}.access-name span{display:block;margin-top:3px;color:#7f95a3;font:800 7px var(--mono);letter-spacing:.07em}
.access-metric{text-align:right}.access-metric strong{display:block;font-size:24px;letter-spacing:-.045em}.access-metric span{display:block;margin-top:3px;max-width:155px;color:#7f95a3;font-size:7px;line-height:1.4}
.access-plans{padding:7px}.access-plan{display:grid;grid-template-columns:minmax(150px,1fr) auto auto;gap:14px;align-items:center;padding:13px 13px;border-radius:11px}.access-plan+.access-plan{border-top:1px solid rgba(255,255,255,.07)}.access-plan.popular{background:rgba(86,217,155,.08)}
.access-plan-copy strong{font-size:11px}.access-plan-copy span{display:block;margin-top:3px;color:#8297a4;font-size:7px}.access-plan.popular .access-plan-copy strong:after{content:'POPULAR';margin-left:7px;padding:3px 5px;border-radius:999px;background:#12663e;color:#dff9ea;font:900 5px var(--mono);letter-spacing:.08em;vertical-align:1px}
.access-price{text-align:right;white-space:nowrap;font-size:18px;font-weight:850;letter-spacing:-.03em}.access-price small{margin-left:3px;color:#81939e;font-size:7px;font-weight:700}
.access-buy{min-height:38px;padding:0 12px;border:1px solid rgba(255,255,255,.13);border-radius:9px;background:#fff;color:#07131f;display:inline-flex;align-items:center;justify-content:center;font-size:8px;font-weight:950}.access-plan.popular .access-buy{border-color:#56d99b;background:#56d99b;color:#062117}.access-buy:hover{transform:translateY(-1px)}
.access-foot{display:flex;justify-content:space-between;gap:16px;align-items:center;padding:15px 20px;border-top:1px solid rgba(255,255,255,.08);color:#8297a4;font-size:7px}.access-foot a{color:#fff;font-weight:900}
.access-enterprise{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center;margin-top:18px;padding:25px;border:1px solid rgba(132,197,255,.24);border-radius:17px;background:linear-gradient(135deg,rgba(45,126,232,.16),rgba(86,217,155,.08))}.access-enterprise h3{margin:0 0 7px;font-size:23px;letter-spacing:-.04em}.access-enterprise p{margin:0;max-width:850px;color:#9db0ba;font-size:9px;line-height:1.65}.access-note{margin-top:13px;color:#718792;font-size:7px;line-height:1.55}
@media(max-width:900px){.access-grid{grid-template-columns:1fr}.access-enterprise{grid-template-columns:1fr}}
@media(max-width:620px){.access-card-head{grid-template-columns:auto 1fr}.access-metric{grid-column:1/-1;text-align:left;padding-left:60px}.access-plan{grid-template-columns:1fr auto}.access-buy{grid-column:1/-1;width:100%}.access-enterprise .actions{width:100%}}
`;
replaceRequired('</style>', `${accessCss}</style>`, 'access css');

const markets = [
  {
    code: 'US', name: 'United States', source: 'COUNTY + STATE · PROPDATA', metric: '166M+', label: 'indexed parcel records', href: 'https://propdata.proptechusa.ai/',
    plans: [
      ['Starter', 'Build and evaluate · 10K req/mo', '$79', 'https://buy.stripe.com/7sYdR9c6ybuC7BHbQL7wA04'],
      ['Builder', 'Production teams · 50K req/mo', '$199', 'https://buy.stripe.com/8x28wP7Qi8iq5tz4oj7wA02'],
      ['Scale', 'Higher-volume use · 250K req/mo', '$499', 'https://buy.stripe.com/7sYfZh2vY2Y6cW10837wA0p'],
    ],
  },
  {
    code: 'GB', name: 'Great Britain', source: 'UPRN · OS · HMLR · INSPIRE', metric: '~40M', label: 'UPRN property identities', href: 'https://gb.proptechusa.ai/',
    plans: [
      ['Developer', 'Build and evaluate · 10K req/mo', '£79', 'https://buy.stripe.com/4gM8wP1rUfKS4pv5sn7wA0g'],
      ['Builder', 'Production teams · 50K req/mo', '£249', 'https://buy.stripe.com/8x29ATgmOaqy4pvg717wA0h'],
      ['Scale', 'Higher-volume use · 250K req/mo', '£699', 'https://buy.stripe.com/00w5kDfiK1U21djaMH7wA0i'],
    ],
  },
  {
    code: 'NZ', name: 'New Zealand', source: 'TOITŪ TE WHENUA LINZ', metric: '3.04M', label: 'primary parcels', href: 'https://nz.proptechusa.ai/',
    plans: [
      ['Developer', 'Build and evaluate · 10K req/mo', 'NZ$99', 'https://buy.stripe.com/5kQ14neeGbuC09f0837wA0a'],
      ['Builder', 'Production teams · 50K req/mo', 'NZ$299', 'https://buy.stripe.com/6oU5kDgmO6aig8daMH7wA0b'],
      ['Scale', 'Higher-volume use · 250K req/mo', 'NZ$799', 'https://buy.stripe.com/3cIdR9daC9mu1djdYT7wA0c'],
    ],
  },
  {
    code: 'AU', name: 'Australia', source: 'G-NAF · STATE-NATIVE CADASTRE', metric: '16.97M', label: 'national G-NAF addresses', href: 'https://au.proptechusa.ai/',
    plans: [
      ['Developer', 'Build and evaluate · 10K req/mo', 'A$149', 'https://buy.stripe.com/eVqcN53A256e6xD9ID7wA0d'],
      ['Builder', 'Production teams · 50K req/mo', 'A$449', 'https://buy.stripe.com/14A6oH9Yq6ai7BH0837wA0e'],
      ['Scale', 'Higher-volume use · 250K req/mo', 'A$1,199', 'https://buy.stripe.com/28E5kD9YqgOWg8d9ID7wA0f'],
    ],
  },
  {
    code: 'EE', name: 'Estonia', source: 'CADASTRE · ADS · EHR', metric: '778K+', label: 'land-enriched cadastral units', href: 'https://ee.proptechusa.ai/',
    plans: [
      ['Developer', 'Build and evaluate · 10K req/mo', '€49', 'https://buy.stripe.com/7sYaEXgmO42ag8d2gb7wA07'],
      ['Builder', 'Production teams · 50K req/mo', '€149', 'https://buy.stripe.com/bJefZh0nQeGOaNTcUP7wA08'],
      ['Scale', 'Higher-volume use · 250K req/mo', '€399', 'https://buy.stripe.com/eVq6oH3A256e3lr9ID7wA09'],
    ],
  },
  {
    code: 'FR', name: 'France', source: 'CADASTRE · BAN · RNB / TOPO · DVF', metric: '≈100M', label: 'official source-system scale', href: 'https://france.proptechusa.ai/',
    plans: [
      ['Developer', 'Build and evaluate · 10K req/mo', '€79', 'https://buy.stripe.com/9B66oH7QigOW2hn3kf7wA0m'],
      ['Builder', 'Production teams · 50K req/mo', '€249', 'https://buy.stripe.com/8x2cN56Me0PYcW1f2X7wA0n'],
      ['Scale', 'Higher-volume use · 250K req/mo', '€699', 'https://buy.stripe.com/28E7sL5Ia9mu2hnaMH7wA0o'],
    ],
  },
  {
    code: 'ES', name: 'Spain', source: 'DGC CATASTRO · CP · AD · BU', metric: '78.94M', label: 'official DGC cadastral records', href: 'https://spain.proptechusa.ai/',
    plans: [
      ['Developer', 'Build and evaluate · 10K req/mo', '€79', 'https://buy.stripe.com/4gM8wP9Yq42af49g717wA0j'],
      ['Builder', 'Production teams · 50K req/mo', '€249', 'https://buy.stripe.com/00w8wP6Me6aie057Av7wA0k'],
      ['Scale', 'Higher-volume use · 250K req/mo', '€699', 'https://buy.stripe.com/dRmaEX0nQbuC3lr5sn7wA0l'],
    ],
  },
];

const accessCards = markets.map((market) => `
<article class="access-card">
  <div class="access-card-head">
    <span class="access-code">${market.code}</span>
    <div class="access-name"><strong>${market.name}</strong><span>${market.source}</span></div>
    <div class="access-metric"><strong>${market.metric}</strong><span>${market.label}</span></div>
  </div>
  <div class="access-plans">
    ${market.plans.map((plan, index) => `
      <div class="access-plan${index === 1 ? ' popular' : ''}">
        <div class="access-plan-copy"><strong>${plan[0]}</strong><span>${plan[1]}</span></div>
        <div class="access-price">${plan[2]}<small>/ mo</small></div>
        <a class="access-buy" href="${plan[3]}" target="_blank" rel="noopener">Buy now →</a>
      </div>`).join('')}
  </div>
  <div class="access-foot"><span>Country-native coverage and promotion rules remain authoritative.</span><a href="${market.href}">Docs & coverage ↗</a></div>
</article>`).join('');

const accessSection = `
<section class="section access" id="access"><div class="shell">
  <div class="section-head"><div class="kicker">PROPDATA GLOBAL ACCESS · SELF-SERVE</div><h2>400M+ records. <em>One storefront.</em></h2><p>Choose the market and buy directly in local currency. Every product keeps its own source-native identity, coverage state and documentation while sharing one governed PropData commercial and technical relationship.</p></div>
  <div class="access-rail"><span>400M+ RECORDS</span><span>7B+ DATA POINTS</span><span>7 COUNTRY PRODUCTS</span><span>MONTH-TO-MONTH</span><span>LOCAL CURRENCY</span><span>STRIPE CHECKOUT</span></div>
  <div class="access-grid">${accessCards}</div>
  <div class="access-enterprise"><div><h3>Need more than one market?</h3><p>Multi-country contracts, enterprise volumes, bulk delivery, white-label infrastructure, private source integration and custom schemas remain sales-led so the operating model can match the product you are actually shipping.</p></div><div class="actions"><a class="btn primary" href="https://calendly.com/proptechusa">Book an enterprise call →</a><a class="btn ghost" href="mailto:sales@proptechusa.ai">Email sales</a></div></div>
  <p class="access-note">Checkout is processed securely by Stripe. API-key provisioning is governed by the applicable PropData account workflow after successful payment. France and Spain source-system figures describe official source scale; promoted PropData coverage remains explicit on each country surface.</p>
</div></section>`;

const countriesMarker = '<section class="section countries" id="countries">';
if (!html.includes(countriesMarker)) throw new Error('Global V8 missing countries insertion target');
html = html.replace(countriesMarker, `${accessSection}\n${countriesMarker}`);

fs.writeFileSync(path.join(out, 'index.html'), html, 'utf8');

const built = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
for (const marker of [
  '400M+ property and parcel records',
  '7B+ normalized property data points',
  'PROPDATA GLOBAL ACCESS · SELF-SERVE',
  '400M+ records. <em>One storefront.</em>',
  'https://buy.stripe.com/8x28wP7Qi8iq5tz4oj7wA02',
  'Seven country-native products.',
  'https://france.proptechusa.ai/',
  'https://spain.proptechusa.ai/',
]) {
  if (!built.includes(marker)) throw new Error(`Global V8 build missing marker: ${marker}`);
}
for (const stale of [
  'Five live markets',
  '225M+ property identities',
  '225M+ property and parcel identities',
  'SPAIN · FRANCE · ADDITIONAL MARKETS IN ACTIVE BUILD',
]) {
  if (built.includes(stale)) throw new Error(`Global V8 build contains stale marker: ${stale}`);
}

console.log('PASS: PropData Global 400M/7B seven-country commerce site built.');
