const fs = require('node:fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

if (!html.includes('data-proptech-sales-contact')) {
  const contact = `<div data-proptech-sales-contact="true" aria-label="PropTechUSA.ai sales contact" style="width:min(1200px,calc(100% - 40px));margin:0 auto;padding:18px 0;border-top:1px solid rgba(127,127,127,.28);display:flex;align-items:center;justify-content:center;gap:12px 22px;flex-wrap:wrap;font-size:12px"><span style="font-size:9px;font-weight:800;letter-spacing:.12em;opacity:.55">CONTACT PROPTECHUSA.AI</span><a href="tel:18887843881" aria-label="Call PropTechUSA.ai sales at 1-888-784-3881" style="color:inherit;text-decoration:none;font-weight:800;opacity:.82">1-888-784-3881</a><a href="mailto:sales@proptechusa.ai" aria-label="Email PropTechUSA.ai sales at sales@proptechusa.ai" style="color:inherit;text-decoration:none;font-weight:800;opacity:.82">sales@proptechusa.ai</a></div>`;
  html = html.replace(/<\/footer>/i, `${contact}</footer>`);
  fs.writeFileSync(file, html);
}
