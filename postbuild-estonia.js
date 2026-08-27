const fs = require('fs');

function patchFile(path, fn) {
  if (!fs.existsSync(path)) return;
  const before = fs.readFileSync(path, 'utf8');
  const after = fn(before, path);
  if (after === before) {
    console.log(`No Estonia changes needed in ${path}`);
  } else {
    fs.writeFileSync(path, after, 'utf8');
    console.log(`Patched ${path}`);
  }
}

function replaceAll(text, pairs) {
  for (const [oldValue, newValue] of pairs) {
    text = text.split(oldValue).join(newValue);
  }
  return text;
}

function patchHtml(input, path) {
  let s = input;

  // Normalize every public-facing four-market variant emitted by the source build
  // and the later pricing/surgical post-build passes.
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
    ['Great Britain, New Zealand and Australia access is included\n                with PropData Scale $499+ and Enterprise.', 'Great Britain, New Zealand, Australia and Estonia access is included\n                with PropData Scale $499+ and Enterprise.'],
    ['United States + Great Britain + New Zealand + Australia</li>', 'United States + Great Britain + New Zealand + Australia + Estonia</li>'],
    ['current global coverage across the United States, Great Britain, New Zealand and Australia.', 'current global coverage across the United States, Great Britain, New Zealand, Australia and Estonia.'],
    ['"dateModified": "2026-08-25"', '"dateModified": "2026-08-26"'],
  ]);

  // Desktop market grid becomes five columns. Leave unrelated four-column grids alone.
  s = s.replace(
    /\.markets\s*\{\s*grid-template-columns:\s*repeat\(4,\s*1fr\);\s*\}/g,
    '.markets {\n          grid-template-columns: repeat(5, 1fr);\n        }',
  );

  // Estonia language alternate.
  if (!s.includes('hreflang="et-EE"')) {
    const enAu = /(<link\s+rel="alternate"\s+hreflang="en-AU"\s+href="https:\/\/global\.proptechusa\.ai\/"\s*\/?>)/m;
    const match = s.match(enAu);
    if (!match) throw new Error(`${path}: missing en-AU hreflang anchor`);
    s = s.replace(match[0], `${match[0]}\n    <link rel="alternate" hreflang="et-EE" href="https://global.proptechusa.ai/" />`);
  }

  // Inline JSON-LD service area. External schema.jsonld is patched separately.
  if (!s.includes('{ "@type": "Country", "name": "Estonia" }')) {
    const area = /\{ "@type": "Country", "name": "Australia" \}(\s*)\]/;
    if (!area.test(s)) throw new Error(`${path}: missing inline Australia areaServed anchor`);
    s = s.replace(area, '{ "@type": "Country", "name": "Australia" },\n              { "@type": "Country", "name": "Estonia" }$1]');
  }

  // Insert the fifth market card structurally after Australia. This works after
  // postbuild.js has replaced emoji flags with its inline SVG country-mark markup.
  if (!s.includes('<h3>Estonia</h3>')) {
    const labelAt = s.indexOf('<h3>Australia</h3>');
    if (labelAt < 0) throw new Error(`${path}: missing Australia market card label`);
    const articleAt = s.lastIndexOf('<article class="panel market">', labelAt);
    let articleEnd = s.indexOf('</article>', labelAt);
    if (articleAt < 0 || articleEnd < 0) throw new Error(`${path}: could not bound Australia market card`);
    articleEnd += '</article>'.length;

    const estoniaCard = `\n            <article class="panel market">\n              <div class="marketTop">\n                <span class="flag"><span class="country-mark" role="img" aria-label="Estonia"><svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="30" height="6.67" fill="#4891d9"/><rect y="6.67" width="30" height="6.67" fill="#000"/><rect y="13.34" width="30" height="6.66" fill="#fff"/></svg></span></span><span class="live">LIVE</span>\n              </div>\n              <h3>Estonia</h3>\n              <strong class="marketCount">ADS</strong>\n              <span class="marketUnit">national cadastral + address identity</span>\n              <p>\n                Official national cadastral parcels and the ADS address/object\n                graph preserve cadastral IDs, ADR_ID, ADS_OID, ADOB_ID, geometry,\n                lifecycle and provenance inside the same global contract.\n              </p>\n            </article>`;
    s = s.slice(0, articleEnd) + estoniaCard + s.slice(articleEnd);
  }

  // The pricing post-build injects an OfferCatalog after the source JSON-LD.
  // Country list text is normalized above; this ensures its description also names Estonia.
  s = s.replace(
    'with current global coverage across the United States, Great Britain, New Zealand and Australia.',
    'with current global coverage across the United States, Great Britain, New Zealand, Australia and Estonia.',
  );

  const required = [
    'U.S. + GB + NZ + AU + EE live',
    '<strong>5</strong><span>live national footprints</span>',
    '<h3>Estonia</h3>',
    'national cadastral + address identity',
    'ADR_ID, ADS_OID, ADOB_ID',
    'hreflang="et-EE"',
    '"name": "Estonia"',
    'New Zealand + Australia + Estonia',
  ];
  for (const marker of required) {
    if (!s.includes(marker)) throw new Error(`${path} missing Estonia marker: ${marker}`);
  }

  const stale = [
    'across four live markets',
    'across four live source-native markets',
    'U.S. + GB + NZ + AU live',
    '<strong>4</strong><span>live national footprints</span>',
    '<strong>4</strong><span>Live national footprints</span>',
    '225M+ identities · 4 live markets',
    'Four live markets.<br><em>And counting.</em>',
    'United States + Great Britain + New Zealand + Australia</li>',
    'Great Britain, New Zealand and Australia access is included',
  ];
  for (const marker of stale) {
    if (s.includes(marker)) throw new Error(`${path} still contains stale four-market marker: ${marker}`);
  }

  return s;
}

function patchSchema(input, path) {
  const schema = JSON.parse(input);
  const graph = schema['@graph'] || [];
  const webPage = graph.find((node) => node['@type'] === 'WebPage');
  const service = graph.find((node) => node['@type'] === 'Service');

  if (webPage) {
    webPage.description = '225M+ property and parcel identities across the United States, Great Britain, New Zealand, Australia and Estonia—and counting.';
    webPage.dateModified = '2026-08-26';
  }

  if (service) {
    const areaServed = Array.isArray(service.areaServed) ? service.areaServed : [];
    if (!areaServed.some((x) => x && x.name === 'Estonia')) {
      areaServed.push({ '@type': 'Country', name: 'Estonia' });
    }
    service.areaServed = areaServed;
    if (service.offers) {
      service.offers.description = 'Great Britain, New Zealand, Australia and Estonia access is included with PropData Scale and Enterprise plans.';
    }
  }

  const output = JSON.stringify(schema, null, 2) + '\n';
  if (!output.includes('"name": "Estonia"')) throw new Error(`${path}: schema missing Estonia`);
  return output;
}

// Patch source copies for repository consistency and, critically, the actual Vercel
// outputDirectory artifacts after every prior post-build transform has finished.
for (const path of ['index.html', 'dist/index.html']) patchFile(path, patchHtml);
for (const path of ['schema.jsonld', 'dist/schema.jsonld']) patchFile(path, patchSchema);

if (!fs.existsSync('dist/index.html')) throw new Error('dist/index.html missing after Global build');
const deployed = fs.readFileSync('dist/index.html', 'utf8');
if (!deployed.includes('<h3>Estonia</h3>') || !deployed.includes('U.S. + GB + NZ + AU + EE live')) {
  throw new Error('deployed Global artifact did not retain Estonia');
}

console.log('PASS: deployed global.proptechusa.ai dist artifact promoted to five live markets with Estonia');
