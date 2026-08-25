const fs = require("fs"),
  path = require("path");
const file = path.join(__dirname, "dist", "index.html");
if (!fs.existsSync(file)) throw new Error("dist/index.html missing");
let html = fs.readFileSync(file, "utf8");

// NAV: keep one direct path to every core story and production surface.
html = html.replace(
  /<div class="navlinks">[\s\S]*?<\/div>/,
  '<div class="navlinks"><a href="#coverage">Coverage</a><a href="#expansion">Expansion</a><a href="#property-graph">Property Graph</a><a href="#shield-network">Shield Network</a><a href="#global-pricing">Pricing</a><a href="https://propdata.proptechusa.ai/docs">Docs</a></div>',
);
html = html.replace(
  '<div class="navactions"><a class="status"',
  '<div class="navactions"><a class="workspace-btn" href="https://propdata.proptechusa.ai/dashboard.html">API Workspace</a><a class="status"',
);
html = html.replace(
  /<a href="#ecosystem">[\s\S]*?PropTechUSA\.ai Ecosystem[\s\S]*?<\/a>/,
  '<a href="#property-graph">Property Graph</a><a href="#shield-network">Shield Network</a><a href="https://propdata.proptechusa.ai/dashboard.html">API Workspace</a>',
);

const shieldSection = `<section id="shield-network" class="shield-network-section"><div class="wrap"><header class="sectionHead shield-network-head"><div><div class="eyebrow">ONE NETWORK · SIX PRODUCTION SURFACES</div><h2>One global backbone.<br><em>Every production surface connected.</em></h2></div><p>Global connects authoritative coverage into the full PropTechUSA.ai stack. Choose API, bulk, custom, government, risk or workspace delivery—without rebuilding the data plumbing for every market.</p></header><div class="shield-proof-grid panel" aria-label="Global network proof"><div><strong>225M+</strong><span>Property + parcel identities</span></div><div><strong>4</strong><span>Live national footprints</span></div><div><strong>1</strong><span>Country-neutral architecture</span></div><div><strong>REST · MCP · BULK</strong><span>Plus custom delivery</span></div></div><div class="shield-network-shell panel"><div class="shield-grid"><a class="shield-node node-propdata" href="https://propdata.proptechusa.ai/"><span class="node-kicker">FLAGSHIP API</span><b>PropData</b><small>Property identity · parcel · market · valuation · geospatial</small></a><a class="shield-node node-data" href="https://data.proptechusa.ai/"><span class="node-kicker">CUSTOM DELIVERY</span><b>Data Solutions</b><small>Bulk delivery · custom datasets · integration contracts</small></a><div class="shield-core"><div class="shield-core-mark"><span class="brandshield"></span></div><span>GLOBAL</span><strong>Property Intelligence Network</strong><small>225M+ identities · 4 live markets</small></div><a class="shield-node node-gov" href="https://gov.proptechusa.ai/"><span class="node-kicker">PUBLIC SECTOR</span><b>Government Infrastructure</b><small>Direct-source county and agency API infrastructure</small></a><a class="shield-node node-secure" href="https://propsecure.proptechusa.ai/"><span class="node-kicker">RISK LAYER</span><b>PropSecure</b><small>Ownership events · liens · defaults · monitoring</small></a><a class="shield-node node-dev" href="https://propdata.proptechusa.ai/docs"><span class="node-kicker">DEVELOPER LAYER</span><b>REST + MCP + AI</b><small>AI-ready APIs · production delivery · documentation</small></a><a class="shield-node node-workspace" href="https://propdata.proptechusa.ai/dashboard.html"><span class="node-kicker">CUSTOMER CONTROL</span><b>API Workspace</b><small>Keys · usage · testing · production control</small></a></div><div class="shield-network-rail"><span>Source-native</span><span>Provenance-aware</span><span>Fail-closed</span><span>Global coverage growing</span></div><div class="shield-network-actions"><a href="https://propdata.proptechusa.ai/">Explore PropData →</a><a href="https://propdata.proptechusa.ai/dashboard.html">Open API Workspace →</a><a href="https://calendly.com/proptechusa/new-meeting-1">Design an Integration →</a></div></div></div></section>`;

if (!html.includes('id="shield-network"')) {
  const anchor = html.includes('<section id="global-pricing"')
    ? '<section id="global-pricing"'
    : '<section id="book">';
  html = html.replace(anchor, shieldSection + anchor);
}

// FOOTER: preserve the existing footer and logo, only add missing operational paths.
html = html.replace(
  '<div><h4>Developers</h4><a href="https://propdata.proptechusa.ai/docs">API Docs</a><a href="https://propdata.proptechusa.ai/dashboard.html">Workspace</a><a href="https://www.proptechusa.ai/status">Status</a><a href="https://propdata.proptechusa.ai/">MCP + AI</a></div>',
  '<div><h4>Developers</h4><a href="https://propdata.proptechusa.ai/docs">API Docs</a><a href="https://propdata.proptechusa.ai/dashboard.html">API Workspace</a><a href="https://www.proptechusa.ai/status">API Status</a><a href="https://propdata.proptechusa.ai/">REST + MCP + AI</a><a href="https://billing.stripe.com/p/login/cNi3cv2vY7em3lr4oj7wA00" rel="nofollow">Manage Billing</a></div>',
);
html = html.replace(
  '<div><h4>Global</h4><a href="#coverage">Coverage</a><a href="#expansion">Expansion</a><a href="#layers">Data layers</a><a href="#book">Request a market</a></div>',
  '<div><h4>Global</h4><a href="#coverage">Live Coverage</a><a href="#expansion">Expansion Engine</a><a href="#property-graph">Property Graph</a><a href="#shield-network">Shield Network</a><a href="#global-pricing">Global Pricing</a></div>',
);

const css = `<style id="surgical-global-upgrade">
.workspace-btn{display:none;min-height:38px;align-items:center;justify-content:center;padding:0 12px;border:1px solid rgba(91,187,255,.28);border-radius:10px;text-decoration:none;font-size:10px;font-weight:800;color:#dff5ff;background:rgba(6,28,51,.64)}
.shield-network-section{position:relative;background:radial-gradient(circle at 50% 48%,rgba(21,132,255,.16),transparent 36%)}
.shield-network-head{margin-bottom:24px}
.shield-network-head p{max-width:570px}
.shield-proof-grid{display:grid;grid-template-columns:1fr 1fr;margin-bottom:14px;overflow:hidden;background:rgba(4,20,36,.88)}
.shield-proof-grid div{min-height:112px;padding:20px;border-right:1px solid rgba(91,187,255,.11);border-bottom:1px solid rgba(91,187,255,.11);display:flex;flex-direction:column;justify-content:center}
.shield-proof-grid strong{font-size:24px;letter-spacing:-.03em;color:#f1f8ff;line-height:1}
.shield-proof-grid span{margin-top:8px;font-size:9px;line-height:1.45;letter-spacing:.09em;text-transform:uppercase;color:#7f9ab4}
.shield-network-shell{padding:20px;position:relative;overflow:hidden}
.shield-network-shell:before{content:'';position:absolute;inset:8% 15%;border-radius:50%;border:1px solid rgba(68,180,255,.12);box-shadow:0 0 120px rgba(14,128,255,.08);pointer-events:none}
.shield-grid{position:relative;z-index:1;display:grid;gap:10px}
.shield-node,.shield-core{min-height:150px;border:1px solid rgba(91,187,255,.14);border-radius:15px;background:linear-gradient(180deg,rgba(9,33,58,.82),rgba(4,18,33,.92));padding:18px;text-decoration:none}
.shield-node{display:flex;flex-direction:column;justify-content:flex-end;transition:.2s ease}
.shield-node:hover{border-color:rgba(91,187,255,.42);transform:translateY(-2px);box-shadow:0 18px 45px rgba(0,91,194,.16)}
.node-kicker{font-size:8px;letter-spacing:.14em;color:#61ccff;font-weight:850}
.shield-node b{font-size:19px;margin:7px 0 5px}
.shield-node small{color:#829ab1;line-height:1.55}
.shield-core{min-height:230px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:radial-gradient(circle at 50% 42%,rgba(17,125,246,.24),transparent 42%),linear-gradient(180deg,rgba(8,32,57,.94),rgba(3,15,28,.98));border-color:rgba(94,198,255,.3);box-shadow:0 26px 85px rgba(0,102,224,.2)}
.shield-core-mark{height:82px;display:grid;place-items:center;margin-bottom:9px}
.shield-core-mark .brandshield{width:66px;height:76px}
.shield-core>span{font-size:9px;letter-spacing:.2em;color:#61ccff;font-weight:900}
.shield-core strong{font-size:23px;line-height:1.08;margin:8px 0}
.shield-core small{color:#90a8c0;text-transform:uppercase;letter-spacing:.08em;font-size:9px}
.shield-network-rail{position:relative;z-index:1;display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:15px}
.shield-network-rail span{font-size:9px;padding:7px 9px;border:1px solid rgba(255,255,255,.08);border-radius:999px;color:#9db4c9;background:rgba(3,15,28,.65);text-transform:uppercase;letter-spacing:.08em}
.shield-network-actions{position:relative;z-index:1;display:grid;gap:8px;margin-top:16px}
.shield-network-actions a{display:flex;align-items:center;justify-content:center;min-height:46px;padding:0 16px;border:1px solid rgba(91,187,255,.22);border-radius:11px;background:rgba(5,29,51,.76);color:#dff5ff;text-decoration:none;font-size:10px;font-weight:850;letter-spacing:.04em;transition:.2s ease}
.shield-network-actions a:first-child{background:linear-gradient(135deg,#1688ff,#4db9ff);color:#02111f;border-color:transparent}
.shield-network-actions a:hover{transform:translateY(-2px);border-color:rgba(91,187,255,.5)}
@media(min-width:700px){.workspace-btn{display:inline-flex}.shield-proof-grid{grid-template-columns:repeat(4,1fr)}.shield-proof-grid div{border-bottom:0}.shield-network-actions{grid-template-columns:repeat(3,1fr)}.shield-grid{grid-template-columns:1fr 1fr}.shield-core{grid-column:1/-1;grid-row:1}.shield-node{min-height:165px}}
@media(min-width:1040px){.navlinks{gap:1px}.navlinks a{padding:10px 8px}.shield-grid{grid-template-columns:1fr 1.15fr 1fr;grid-template-rows:1fr 1fr}.shield-core{grid-column:2;grid-row:1/4;min-height:390px}.node-propdata{grid-column:1;grid-row:1}.node-data{grid-column:1;grid-row:2}.node-gov{grid-column:3;grid-row:1}.node-secure{grid-column:3;grid-row:2}.node-dev{grid-column:1;grid-row:3}.node-workspace{grid-column:3;grid-row:3}.shield-node{min-height:150px}.shield-network-shell{padding:30px}}
</style>`;
html = html.replace("</head>", css + "</head>");
html = html.replaceAll(
  "U.S. · Great Britain · New Zealand · expanding",
  "U.S. · Great Britain · New Zealand · Australia · expanding",
);

fs.writeFileSync(file, html);
console.log(
  "postbuild-surgical: preserved hero/logo/images; upgraded nav, shield network, workspace, and footer",
);
