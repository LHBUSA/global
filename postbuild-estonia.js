const fs = require('fs');

function patchFile(path, fn) {
  const before = fs.readFileSync(path, 'utf8');
  const after = fn(before);
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

patchFile('index.html', (input) => {
  let s = input;

  s = replaceAll(s, [
    ['United States, Great Britain, New Zealand and Australia', 'United States, Great Britain, New Zealand, Australia and Estonia'],
    ['United States, Great Britain, New Zealand and Australia are live.', 'United States, Great Britain, New Zealand, Australia and Estonia are live.'],
    ['Great Britain, New Zealand and Australia access is included', 'Great Britain, New Zealand, Australia and Estonia access is included'],
    ['225M+ property and parcel identities across four live markets—and counting.', '225M+ property and parcel identities across five live markets—and counting.'],
    ['225M+ property and parcel identities across four live source-native markets—and counting.', '225M+ property and parcel identities across five live source-native markets—and counting.'],
    ['U.S. + GB + NZ + AU live', 'U.S. + GB + NZ + AU + EE live'],
    ['<strong>4</strong><span>live national footprints</span>', '<strong>5</strong><span>live national footprints</span>'],
    ['Great Britain, New Zealand and Australia are the beginning—not', 'Great Britain, New Zealand, Australia and Estonia are the beginning—not'],
    ['the U.S., Great Britain, New Zealand and\n              Australia are live today—225M+ property and parcel identities,', 'the U.S., Great Britain, New Zealand, Australia and\n              Estonia are live today—225M+ property and parcel identities,'],
    ['grid-template-columns: repeat(4, 1fr);\n        }\n        .layers', 'grid-template-columns: repeat(5, 1fr);\n        }\n        .layers'],
    ['"dateModified": "2026-08-25"', '"dateModified": "2026-08-26"'],
  ]);

  if (!s.includes('hreflang="et-EE"')) {
    const hreflang = `    <link\n      rel="alternate"\n      hreflang="en-AU"\n      href="https://global.proptechusa.ai/"\n    />`;
    if (!s.includes(hreflang)) throw new Error('Missing en-AU hreflang anchor');
    s = s.replace(hreflang, `${hreflang}\n    <link\n      rel="alternate"\n      hreflang="et-EE"\n      href="https://global.proptechusa.ai/"\n    />`);
  }

  const area = `              { "@type": "Country", "name": "Australia" }\n            ],`;
  if (s.includes(area) && !s.includes('{ "@type": "Country", "name": "Estonia" }')) {
    s = s.replace(area, `              { "@type": "Country", "name": "Australia" },\n              { "@type": "Country", "name": "Estonia" }\n            ],`);
  }

  if (!s.includes('<h3>Estonia</h3>')) {
    const australiaCard = `            <article class="panel market">\n              <div class="marketTop">\n                <span class="flag">🇦🇺</span><span class="live">LIVE</span>\n              </div>\n              <h3>Australia</h3>\n              <strong class="marketCount">~18M</strong>\n              <span class="marketUnit">state + territory parcel records</span>\n              <p>\n                Source-native cadastral identity across Australian state and\n                territory land systems, normalized without flattening local\n                identifiers.\n              </p>\n            </article>`;
    if (!s.includes(australiaCard)) throw new Error('Missing Australia market card anchor');
    const estoniaCard = `            <article class="panel market">\n              <div class="marketTop">\n                <span class="flag">🇪🇪</span><span class="live">LIVE</span>\n              </div>\n              <h3>Estonia</h3>\n              <strong class="marketCount">ADS</strong>\n              <span class="marketUnit">national cadastral + address identity</span>\n              <p>\n                Official national cadastral parcels and the ADS address/object\n                graph preserve cadastral IDs, ADR_ID, ADS_OID, ADOB_ID, geometry,\n                lifecycle and provenance inside the same global contract.\n              </p>\n            </article>`;
    s = s.replace(australiaCard, `${australiaCard}\n${estoniaCard}`);
  }

  const required = [
    'U.S. + GB + NZ + AU + EE live',
    '<strong>5</strong><span>live national footprints</span>',
    '<h3>Estonia</h3>',
    'national cadastral + address identity',
    'hreflang="et-EE"',
    '"name": "Estonia"',
  ];
  for (const marker of required) {
    if (!s.includes(marker)) throw new Error(`index.html missing Estonia marker: ${marker}`);
  }
  if (s.includes('across four live markets') || s.includes('across four live source-native markets')) {
    throw new Error('index.html still contains stale four-market copy');
  }
  return s;
});

patchFile('schema.jsonld', (input) => {
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
  if (!output.includes('"name": "Estonia"')) throw new Error('schema.jsonld missing Estonia');
  return output;
});

console.log('PASS: global.proptechusa.ai promoted to five live markets with Estonia');
