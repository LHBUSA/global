const fs = require('fs');

function replaceAll(text, pairs) {
  for (const [oldValue, newValue] of pairs) text = text.split(oldValue).join(newValue);
  return text;
}

function patchHtml(path) {
  let s = fs.readFileSync(path, 'utf8');

  s = replaceAll(s, [
    ['United States, Great Britain, New Zealand and Australia', 'United States, Great Britain, New Zealand, Australia and Estonia'],
    ['United States + Great Britain + New Zealand + Australia', 'United States + Great Britain + New Zealand + Australia + Estonia'],
    ['U.S. + GB + NZ + AU live', 'U.S. + GB + NZ + AU + EE live'],
    ['U.S. · Great Britain · New Zealand · Australia · 225M+ and counting', 'U.S. · Great Britain · New Zealand · Australia · Estonia · 225M+ and counting'],
    ['Great Britain, New Zealand and Australia access is included', 'Great Britain, New Zealand, Australia and Estonia access is included'],
    ['Great Britain, New Zealand and Australia are the beginning—not', 'Great Britain, New Zealand, Australia and Estonia are the beginning—not'],
    ['225M+ property and parcel identities across four live markets—and counting.', '225M+ property and parcel identities across five live markets—and counting.'],
    ['225M+ property and parcel identities across four live source-native markets—and counting.', '225M+ property and parcel identities across five live source-native markets—and counting.'],
    ['<strong>4</strong><span>live national footprints</span>', '<strong>5</strong><span>live national footprints</span>'],
    ['<strong>4</strong><span>Live national footprints</span>', '<strong>5</strong><span>Live national footprints</span>'],
    ['225M+ identities · 4 live markets', '225M+ identities · 5 live markets'],
    ['Four live markets.<br><em>And counting.</em>', 'Five live markets.<br><em>And counting.</em>'],
    ['the U.S., Great Britain, New Zealand and\n              Australia are live today—225M+ property and parcel identities,', 'the U.S., Great Britain, New Zealand, Australia and\n              Estonia are live today—225M+ property and parcel identities,'],
    ['the U.S., Great Britain, New Zealand and Australia are live today—225M+ property and parcel identities,', 'the U.S., Great Britain, New Zealand, Australia and Estonia are live today—225M+ property and parcel identities,'],
    ['The U.S., Great Britain, New Zealand and Australia are live today.', 'The U.S., Great Britain, New Zealand, Australia and Estonia are live today.'],
    ['current global coverage across the United States, Great Britain, New Zealand and Australia.', 'current global coverage across the United States, Great Britain, New Zealand, Australia and Estonia.'],
    ['"dateModified": "2026-08-25"', '"dateModified": "2026-08-26"'],
  ]);

  s = s.replace(
    /\.markets\s*\{\s*grid-template-columns:\s*repeat\(4,\s*1fr\);\s*\}/g,
    '.markets {\n          grid-template-columns: repeat(5, 1fr);\n        }',
  );

  if (!s.includes('hreflang="et-EE"')) {
    const match = s.match(/(<link\s+rel="alternate"\s+hreflang="en-AU"\s+href="https:\/\/global\.proptechusa\.ai\/"\s*\/?>)/m);
    if (!match) throw new Error(`${path}: missing en-AU hreflang anchor`);
    s = s.replace(match[0], `${match[0]}\n    <link rel="alternate" hreflang="et-EE" href="https://global.proptechusa.ai/" />`);
  }

  if (!s.includes('{ "@type": "Country", "name": "Estonia" }')) {
    const area = /\{ "@type": "Country", "name": "Australia" \}(\s*)\]/;
    if (!area.test(s)) throw new Error(`${path}: missing inline Australia areaServed anchor`);
    s = s.replace(area, '{ "@type": "Country", "name": "Australia" },\n              { "@type": "Country", "name": "Estonia" }$1]');
  }

  const marketSegments = () => s.split('<article class="panel market">').slice(1).map((x) => x.split('</article>')[0]);
  const hasMarket = (name) => marketSegments().some((segment) => segment.includes(`<h3>${name}</h3>`));

  if (!hasMarket('Estonia')) {
    const labelAt = s.indexOf('<h3>Australia</h3>');
    if (labelAt < 0) throw new Error(`${path}: missing Australia market card label`);
    const articleAt = s.lastIndexOf('<article class="panel market">', labelAt);
    let articleEnd = s.indexOf('</article>', labelAt);
    if (articleAt < 0 || articleEnd < 0) throw new Error(`${path}: could not bound Australia market card`);
    articleEnd += '</article>'.length;
    const estoniaCard = `\n            <article class="panel market">\n              <div class="marketTop">\n                <span class="flag"><span class="country-mark" role="img" aria-label="Estonia"><svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="30" height="6.67" fill="#4891d9"/><rect y="6.67" width="30" height="6.67" fill="#000"/><rect y="13.34" width="30" height="6.66" fill="#fff"/></svg></span></span><span class="live">LIVE</span>\n              </div>\n              <h3>Estonia</h3>\n              <strong class="marketCount">ADS</strong>\n              <span class="marketUnit">national cadastral + address identity</span>\n              <p>Official national cadastral parcels and the ADS address/object graph preserve cadastral IDs, ADR_ID, ADS_OID, ADOB_ID, geometry, lifecycle and provenance inside the same global contract.</p>\n            </article>`;
    s = s.slice(0, articleEnd) + estoniaCard + s.slice(articleEnd);
  }

  fs.writeFileSync(path, s, 'utf8');

  const finalSegments = s.split('<article class="panel market">').slice(1).map((x) => x.split('</article>')[0]);
  for (const name of ['United States', 'Great Britain', 'New Zealand', 'Australia', 'Estonia']) {
    const count = finalSegments.filter((segment) => segment.includes(`<h3>${name}</h3>`)).length;
    if (count !== 1) throw new Error(`${path}: expected exactly one ${name} market card; found ${count}`);
  }

  const stale = [
    'across four live markets',
    'across four live source-native markets',
    'U.S. + GB + NZ + AU live',
    '<strong>4</strong><span>live national footprints</span>',
    '225M+ identities · 4 live markets',
    'Four live markets.<br><em>And counting.</em>',
    'The U.S., Great Britain, New Zealand and Australia are live today.',
  ];
  for (const marker of stale) if (s.includes(marker)) throw new Error(`${path}: stale four-market marker remains: ${marker}`);
  if (!s.includes('U.S. + GB + NZ + AU + EE live')) throw new Error(`${path}: five-market live rail missing`);
  if (!s.includes('national cadastral + address identity')) throw new Error(`${path}: Estonia identity copy missing`);

  console.log(`PASS: ${path} contains exactly US, GB, NZ, AU, EE market cards`);
}

function patchSchema(path) {
  if (!fs.existsSync(path)) return;
  const schema = JSON.parse(fs.readFileSync(path, 'utf8'));
  const graph = schema['@graph'] || [];
  const page = graph.find((node) => node['@type'] === 'WebPage');
  const service = graph.find((node) => node['@type'] === 'Service');
  if (page) {
    page.description = '225M+ property and parcel identities across the United States, Great Britain, New Zealand, Australia and Estonia—and counting.';
    page.dateModified = '2026-08-26';
  }
  if (service) {
    const areas = Array.isArray(service.areaServed) ? service.areaServed : [];
    const byName = new Map();
    for (const area of areas) if (area && area.name) byName.set(area.name, area);
    for (const name of ['United States', 'Great Britain', 'New Zealand', 'Australia', 'Estonia']) {
      if (!byName.has(name)) byName.set(name, { '@type': 'Country', name });
    }
    service.areaServed = [...byName.values()];
    if (service.offers) service.offers.description = 'Great Britain, New Zealand, Australia and Estonia access is included with PropData Scale and Enterprise plans.';
  }
  fs.writeFileSync(path, JSON.stringify(schema, null, 2) + '\n', 'utf8');
  console.log(`PASS: ${path} includes Estonia in structured coverage`);
}

for (const path of ['index.html', 'dist/index.html']) if (fs.existsSync(path)) patchHtml(path);
for (const path of ['schema.jsonld', 'dist/schema.jsonld']) patchSchema(path);

if (!fs.existsSync('dist/index.html')) throw new Error('dist/index.html missing after Global build');
console.log('PASS: deployed Global artifact finalized as five live markets with GB preserved and Estonia exactly once');
