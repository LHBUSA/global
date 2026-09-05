const fs = require('fs');
const path = require('path');

(async () => {
  const root = process.cwd();
  const out = path.join(root, 'dist');

  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });

  for (const file of [
    'index.html',
    'favicon.svg',
    'favicon.ico',
    'robots.txt',
    'site.webmanifest',
    'sitemap.xml',
    'schema.jsonld',
  ]) {
    const source = path.join(root, file);
    if (fs.existsSync(source)) fs.copyFileSync(source, path.join(out, file));
  }

  const assets = path.join(root, 'assets');
  const outAssets = path.join(out, 'assets');
  if (fs.existsSync(assets)) fs.cpSync(assets, outAssets, { recursive: true });
  fs.mkdirSync(outAssets, { recursive: true });

  const photoSources = [
    ['hero', 'https://images.unsplash.com/photo-1770064319727-7a5361023791?auto=format&fit=crop&fm=jpg&q=88&w=1800', 'photo-hero.jpg'],
    ['us', 'https://propdata.proptechusa.ai/images/property-infrastructure.webp', 'photo-us.webp'],
    ['gb', 'https://images.unsplash.com/photo-1779991672998-624922d44b17?auto=format&fit=crop&w=1400&q=88', 'photo-gb.jpg'],
    ['nz', 'https://propdata.proptechusa.ai/images/new-zealand-parcels.png', 'photo-nz.png'],
    ['au', 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Aerial_view_of_Sydney_Harbour.jpg', 'photo-au.jpg'],
    ['ee', 'https://images.unsplash.com/photo-1760097776531-3aa60f1ebd7d?auto=format&fit=crop&w=1400&q=88', 'photo-ee.jpg'],
    ['fr', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=88', 'photo-fr.jpg'],
    ['es', 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=88', 'photo-es.jpg'],
  ];

  async function downloadPhoto(label, url, filename) {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'user-agent': 'PropDataGlobalBuild/11 (+https://global.proptechusa.ai)',
        'accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
    });
    const type = response.headers.get('content-type') || '';
    if (!response.ok || !type.toLowerCase().startsWith('image/')) {
      throw new Error(`Photo download failed for ${label}: ${response.status} ${type} ${url}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 5000) throw new Error(`Photo download too small for ${label}: ${bytes.length} bytes`);
    fs.writeFileSync(path.join(outAssets, filename), bytes);
    console.log(`PHOTO OK: ${label} -> ${filename} (${bytes.length} bytes, ${type})`);
  }

  for (const source of photoSources) await downloadPhoto(...source);

  const htmlPath = path.join(out, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Canonical PropData shield in header/footer.
  html = html.replace(
    '<span class="brand-mark">PD</span>',
    '<span class="brand-mark shield"><img src="/assets/propdata-shield-mark.svg" alt="PropData shield"></span>'
  );
  html = html.replace(
    '<span class="brand-mark">PD</span>',
    '<span class="brand-mark shield"><img src="/assets/propdata-shield-mark.svg" alt="PropData shield"></span>'
  );

  // Make the existing single-market pricing interaction unmistakable without changing it.
  html = html.replace(
    '<div class="eyebrow">Self-serve country access</div><h2>One storefront. <em>Local currency.</em></h2>',
    '<div class="eyebrow">Self-serve country access</div><h2>Choose a country. <em>See local pricing.</em></h2>'
  );
  html = html.replace(
    '<p>Choose a market to see its current developer, builder and scale tiers. The commercial layer is simple; the country-native coverage contract underneath it remains explicit.</p></div><div class="market-tabs reveal" id="marketTabs" role="tablist" aria-label="Choose a PropData market"></div>',
    '<p>Select your country below. Pricing, currency, product depth and coverage are market-specific, while the operating contract stays consistent.</p></div><div class="pricing-cue reveal"><strong>SELECT YOUR MARKET</strong><span>Click a country below to load its pricing ↓</span></div><div class="market-tabs reveal" id="marketTabs" role="tablist" aria-label="Choose a PropData market"></div>'
  );

  const extraCss = `<style>
.brand-mark.shield{background:transparent;border:0;border-radius:0}
.brand-mark.shield img{width:43px;height:47px}
.pricing-cue{display:flex;align-items:center;justify-content:space-between;gap:18px;margin:0 0 14px;padding:15px 18px;border:1px solid #b9b1a1;border-radius:14px;background:#fffaf0;box-shadow:0 10px 28px rgba(23,22,16,.05)}
.pricing-cue strong{font:900 10px var(--mono);letter-spacing:.12em;color:var(--forest)}
.pricing-cue span{font-size:12px;font-weight:750;color:#5e594f}
.market-tabs{padding:10px;border:1px solid #c9c1b2;border-radius:18px;background:#eee8dc;box-shadow:inset 0 1px rgba(255,255,255,.5)}
.market-tab{min-height:54px;padding:0 19px;background:#fbf8f0;border-color:#bbb3a4;box-shadow:0 4px 14px rgba(24,22,16,.035)}
.market-tab:hover{transform:translateY(-1px)}
.market-tab.active{position:relative;background:var(--forest);border-color:var(--forest);color:#fff;box-shadow:0 10px 24px rgba(14,102,57,.2)}
.market-tab.active:after{content:'PRICING SHOWN';margin-left:9px;padding:4px 6px;border-radius:999px;background:rgba(255,255,255,.16);font-size:6px;letter-spacing:.07em}
@media(max-width:720px){.pricing-cue{align-items:flex-start;flex-direction:column}.market-tabs{padding:8px}.market-tab{min-height:50px}}
</style>`;
  html = html.replace('</head>', extraCss + '</head>');

  // Replace every remote photo with the build-verified local copy.
  const replacements = [
    [/https:\/\/images\.unsplash\.com\/photo-1770064319727-7a5361023791[^"']*/g, '/assets/photo-hero.jpg'],
    [/https:\/\/propdata\.proptechusa\.ai\/images\/property-infrastructure\.webp/g, '/assets/photo-us.webp'],
    [/https:\/\/images\.unsplash\.com\/photo-1779991672998-624922d44b17[^"']*/g, '/assets/photo-gb.jpg'],
    [/https:\/\/propdata\.proptechusa\.ai\/images\/new-zealand-parcels\.png/g, '/assets/photo-nz.png'],
    [/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/7\/7d\/Aerial_view_of_Sydney_Harbour\.jpg/g, '/assets/photo-au.jpg'],
    [/https:\/\/images\.unsplash\.com\/photo-1760097776531-3aa60f1ebd7d[^"']*/g, '/assets/photo-ee.jpg'],
    [/https:\/\/images\.unsplash\.com\/photo-1502602898657-3e91760cbb34[^"']*/g, '/assets/photo-fr.jpg'],
    [/https:\/\/images\.unsplash\.com\/photo-1539037116277-4db20889f2d4[^"']*/g, '/assets/photo-es.jpg'],
  ];
  for (const [pattern, local] of replacements) html = html.replace(pattern, local);

  fs.writeFileSync(htmlPath, html);

  const required = [
    'propdata-shield-mark.svg',
    'Choose a country. <em>See local pricing.</em>',
    'SELECT YOUR MARKET',
    'Click a country below to load its pricing',
    'id="marketTabs"',
    "renderMarket('US')",
    '/assets/photo-hero.jpg',
    '/assets/photo-us.webp',
    '/assets/photo-gb.jpg',
    '/assets/photo-nz.png',
    '/assets/photo-au.jpg',
    '/assets/photo-ee.jpg',
    '/assets/photo-fr.jpg',
    '/assets/photo-es.jpg',
    'https://buy.stripe.com/dRmaEX0nQbuC3lr5sn7wA0l',
  ];
  for (const marker of required) {
    if (!html.includes(marker)) throw new Error(`Global v11 missing required marker: ${marker}`);
  }

  const forbidden = [
    'Seven storefronts. <em>Every plan visible.</em>',
    'class="all-stores"',
    'src="/assets/country-us.svg"',
    'src="/assets/country-gb.svg"',
    'src="/assets/global-network-v10.svg"',
  ];
  for (const marker of forbidden) {
    if (html.includes(marker)) throw new Error(`Global v11 contains unwanted v10 marker: ${marker}`);
  }

  console.log('PASS: PropData Global v11 restored photo-led design, local photos, shield, and obvious country pricing selector.');
})().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exit(1);
});
