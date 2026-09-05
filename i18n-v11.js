(() => {
  const translations = {
    en: {
      label: 'English',
      nav: ['Countries','Pricing','Operating model','Coverage','Developers','Enterprise','Choose a market →'],
      heroEyebrow: 'Country-native property intelligence',
      heroTitle: 'The world’s property systems are different.<em>Your operating layer does not have to be.</em>',
      heroLede: 'PropData turns fragmented cadastral, parcel, address, title, building, transaction and geospatial systems into one governed property intelligence layer—without flattening away the local meaning that makes the data trustworthy.',
      heroPrimary: 'Explore the global network →', heroSecondary: 'View self-serve access',
      photoTitle: 'One network.<br>Local property truth.',
      countriesEyebrow: 'The country network', countriesTitle: 'Seven markets. <em>Seven native property systems.</em>',
      countriesBody: 'We do not take one U.S.-centric schema and rename fields country by country. Each product starts from the authoritative identity system and source semantics of that market, then earns its place in the global layer.',
      pricingEyebrow: 'Self-serve country access', pricingTitle: 'Choose a country. <em>See local pricing.</em>',
      pricingBody: 'Select your country below. Pricing, currency, product depth and coverage are market-specific, while the operating contract stays consistent.',
      selectMarket: 'SELECT YOUR MARKET', clickCountry: 'Click a country below to load its pricing ↓',
      modelEyebrow: 'The routes are the doorway. The graph is the product.', modelTitle: 'Country-native underneath. <em>Governed above.</em>',
      modelBody: 'One global property request can begin as an address, coordinate, parcel, UPRN, REFCAT or title. PropData resolves that input into native identity first, then attaches only the relationships and intelligence the source contract supports.',
      coverageEyebrow: 'Capability map', coverageTitle: 'Different source depth. <em>Same truth standard.</em>',
      coverageBody: 'The right abstraction is not “every country has every field.” It is a consistent contract for discovering what identity and layers are actually available in that jurisdiction.',
      devEyebrow: 'Build where the workflow lives', devTitle: 'One property layer for <em>software and AI.</em>',
      devBody: 'Country-native property truth should not be trapped in country-specific downloads. PropData turns it into production infrastructure with credentials, response contracts and delivery shapes built for modern applications and agents.',
      docs: 'Read the docs ↗', talk: 'Talk to enterprise',
      enterpriseEyebrow: 'Multi-country · enterprise', enterpriseTitle: 'Stop stitching countries together <em>vendor by vendor.</em>',
      enterpriseBody: 'Use one commercial relationship for country-native property intelligence, bulk delivery, AI-native access, white-label infrastructure, custom response contracts and new-market sourcing. Individual markets remain self-serve; multi-country and unusual-volume workflows are scoped around the production contract you actually need.',
      book: 'Book a global data call →', footerMission: 'The property intelligence layer that lets AI understand the world’s real estate.',
      planIntents: {'Build and evaluate':'Build and evaluate','Production teams':'Production teams','Higher-volume use':'Higher-volume use'}, buy: 'Buy', month: '/ month', pricingShown: 'PRICING SHOWN'
    },
    et: {
      label: 'Eesti',
      nav: ['Riigid','Hinnad','Toimimismudel','Katvus','Arendajatele','Ettevõtetele','Vali turg →'],
      heroEyebrow: 'Riigipõhine kinnisvarateave',
      heroTitle: 'Maailma kinnisvarasüsteemid on erinevad.<em>Sinu töökiht ei pea olema.</em>',
      heroLede: 'PropData ühendab killustunud katastri-, kinnistu-, aadressi-, omandi-, hoone-, tehingu- ja ruumiandmed üheks hallatavaks kinnisvarateabe kihiks, säilitades kohaliku tähenduse, mis teeb andmed usaldusväärseks.',
      heroPrimary: 'Vaata globaalset võrgustikku →', heroSecondary: 'Vaata iseteeninduse ligipääsu',
      photoTitle: 'Üks võrgustik.<br>Kohalik kinnisvaratõde.',
      countriesEyebrow: 'Riikide võrgustik', countriesTitle: 'Seitse turgu. <em>Seitse kohalikku kinnisvarasüsteemi.</em>',
      countriesBody: 'Me ei võta USA-keskset skeemi ega nimeta välju riigiti ümber. Iga toode algab selle turu ametlikust identiteedisüsteemist ja allika tähendusest ning liitub alles seejärel globaalse kihiga.',
      pricingEyebrow: 'Iseteenindus riikide kaupa', pricingTitle: 'Vali riik. <em>Vaata kohalikku hinda.</em>',
      pricingBody: 'Vali allpool riik. Hinnad, valuuta, toote sügavus ja katvus on turupõhised, kuid toimimisleping jääb ühtseks.',
      selectMarket: 'VALI OMA TURG', clickCountry: 'Klõpsa riigil, et laadida hinnad ↓',
      modelEyebrow: 'Marsruudid on uks. Graaf on toode.', modelTitle: 'All riigipõhine. <em>Ülal hallatud.</em>',
      modelBody: 'Üks globaalne päring võib alata aadressi, koordinaadi, kinnistu, UPRN-i, REFCAT-i või omandiõigusega. PropData lahendab sisendi esmalt kohalikuks identiteediks ja lisab ainult need seosed ning teabe, mida allikaleping toetab.',
      coverageEyebrow: 'Võimekuse kaart', coverageTitle: 'Erinev allikate sügavus. <em>Sama tõestandardi tase.</em>',
      coverageBody: 'Õige abstraktsioon ei ole “igas riigis on iga väli”. See on ühtne leping, mis näitab, milline identiteet ja millised kihid on konkreetses jurisdiktsioonis tegelikult saadaval.',
      devEyebrow: 'Ehita seal, kus töövoog toimub', devTitle: 'Üks kinnisvarakiht <em>tarkvarale ja tehisintellektile.</em>',
      devBody: 'Riigipõhine kinnisvaratõde ei peaks jääma riigipõhistesse allalaadimistesse. PropData muudab selle tootmiskindlaks taristuks koos võtmete, vastuselepingute ja tänapäevaste rakenduste ning agentide jaoks mõeldud tarnemudelitega.',
      docs: 'Loe dokumentatsiooni ↗', talk: 'Räägi ettevõttelahendustest',
      enterpriseEyebrow: 'Mitu riiki · ettevõtetele', enterpriseTitle: 'Lõpeta riikide ühendamine <em>tarnija kaupa.</em>',
      enterpriseBody: 'Kasuta üht ärisuhet riigipõhise kinnisvarateabe, hulgiedastuse, AI-ligipääsu, white-label taristu, kohandatud vastuselepingute ja uute turgude hankimise jaoks.',
      book: 'Broneeri globaalne andmekõne →', footerMission: 'Kinnisvarateabe kiht, mis aitab tehisintellektil mõista maailma kinnisvara.',
      planIntents: {'Build and evaluate':'Arenda ja hinda','Production teams':'Tootmismeeskonnad','Higher-volume use':'Suurema mahu kasutus'}, buy: 'Osta', month: '/ kuu', pricingShown: 'HIND KUVATUD'
    },
    fr: {
      label: 'Français',
      nav: ['Pays','Tarifs','Modèle opérationnel','Couverture','Développeurs','Entreprise','Choisir un marché →'],
      heroEyebrow: 'Intelligence immobilière native par pays',
      heroTitle: 'Les systèmes immobiliers du monde sont différents.<em>Votre couche opérationnelle n’a pas à l’être.</em>',
      heroLede: 'PropData transforme des systèmes cadastraux, parcellaires, d’adresses, de titres, de bâtiments, de transactions et géospatiaux fragmentés en une couche d’intelligence immobilière gouvernée, sans effacer le sens local qui rend les données fiables.',
      heroPrimary: 'Explorer le réseau mondial →', heroSecondary: 'Voir l’accès en libre-service',
      photoTitle: 'Un réseau.<br>La vérité immobilière locale.',
      countriesEyebrow: 'Le réseau des pays', countriesTitle: 'Sept marchés. <em>Sept systèmes immobiliers natifs.</em>',
      countriesBody: 'Nous ne prenons pas un schéma centré sur les États-Unis pour simplement renommer les champs pays par pays. Chaque produit part du système d’identité officiel et de la sémantique des sources de son marché avant d’intégrer la couche mondiale.',
      pricingEyebrow: 'Accès libre-service par pays', pricingTitle: 'Choisissez un pays. <em>Affichez le tarif local.</em>',
      pricingBody: 'Sélectionnez votre pays ci-dessous. Les tarifs, la devise, la profondeur du produit et la couverture sont propres à chaque marché, tandis que le contrat opérationnel reste cohérent.',
      selectMarket: 'CHOISISSEZ VOTRE MARCHÉ', clickCountry: 'Cliquez sur un pays pour afficher ses tarifs ↓',
      modelEyebrow: 'Les routes sont la porte. Le graphe est le produit.', modelTitle: 'Natif par pays en dessous. <em>Gouverné au-dessus.</em>',
      modelBody: 'Une requête immobilière mondiale peut commencer par une adresse, une coordonnée, une parcelle, un UPRN, une REFCAT ou un titre. PropData résout d’abord cette entrée vers l’identité native, puis attache uniquement les relations et l’intelligence prises en charge par le contrat source.',
      coverageEyebrow: 'Carte des capacités', coverageTitle: 'Profondeur des sources différente. <em>Même standard de vérité.</em>',
      coverageBody: 'La bonne abstraction n’est pas « chaque pays possède chaque champ ». C’est un contrat cohérent permettant de savoir quelles identités et quelles couches sont réellement disponibles dans chaque juridiction.',
      devEyebrow: 'Construisez là où vit le flux de travail', devTitle: 'Une couche immobilière pour <em>les logiciels et l’IA.</em>',
      devBody: 'La vérité immobilière native par pays ne doit pas rester enfermée dans des téléchargements spécifiques à chaque marché. PropData la transforme en infrastructure de production avec authentification, contrats de réponse et modes de livraison adaptés aux applications et agents modernes.',
      docs: 'Lire la documentation ↗', talk: 'Parler à l’équipe entreprise',
      enterpriseEyebrow: 'Multi-pays · entreprise', enterpriseTitle: 'Arrêtez d’assembler les pays <em>fournisseur par fournisseur.</em>',
      enterpriseBody: 'Utilisez une seule relation commerciale pour l’intelligence immobilière native par pays, la livraison en masse, l’accès natif pour l’IA, l’infrastructure en marque blanche, les contrats de réponse personnalisés et l’ouverture de nouveaux marchés.',
      book: 'Réserver un échange données mondial →', footerMission: 'La couche d’intelligence immobilière qui permet à l’IA de comprendre l’immobilier mondial.',
      planIntents: {'Build and evaluate':'Construire et évaluer','Production teams':'Équipes en production','Higher-volume use':'Usage à plus grand volume'}, buy: 'Acheter', month: '/ mois', pricingShown: 'TARIF AFFICHÉ'
    },
    es: {
      label: 'Español',
      nav: ['Países','Precios','Modelo operativo','Cobertura','Desarrolladores','Empresas','Elegir mercado →'],
      heroEyebrow: 'Inteligencia inmobiliaria nativa por país',
      heroTitle: 'Los sistemas inmobiliarios del mundo son distintos.<em>Tu capa operativa no tiene por qué serlo.</em>',
      heroLede: 'PropData transforma sistemas catastrales, parcelarios, de direcciones, títulos, edificios, transacciones y geoespaciales fragmentados en una capa gobernada de inteligencia inmobiliaria, sin borrar el significado local que hace confiables los datos.',
      heroPrimary: 'Explorar la red global →', heroSecondary: 'Ver acceso autoservicio',
      photoTitle: 'Una red.<br>Verdad inmobiliaria local.',
      countriesEyebrow: 'La red de países', countriesTitle: 'Siete mercados. <em>Siete sistemas inmobiliarios nativos.</em>',
      countriesBody: 'No tomamos un esquema centrado en Estados Unidos para cambiar nombres de campos país por país. Cada producto parte del sistema oficial de identidad y de la semántica de las fuentes de ese mercado antes de incorporarse a la capa global.',
      pricingEyebrow: 'Acceso autoservicio por país', pricingTitle: 'Elige un país. <em>Consulta el precio local.</em>',
      pricingBody: 'Selecciona tu país abajo. Los precios, la moneda, la profundidad del producto y la cobertura son específicos de cada mercado, mientras que el contrato operativo se mantiene coherente.',
      selectMarket: 'SELECCIONA TU MERCADO', clickCountry: 'Haz clic en un país para cargar sus precios ↓',
      modelEyebrow: 'Las rutas son la puerta. El grafo es el producto.', modelTitle: 'Nativo por país debajo. <em>Gobernado arriba.</em>',
      modelBody: 'Una consulta inmobiliaria global puede comenzar con una dirección, coordenada, parcela, UPRN, REFCAT o título. PropData primero resuelve esa entrada a la identidad nativa y después adjunta únicamente las relaciones y la inteligencia que admite el contrato de la fuente.',
      coverageEyebrow: 'Mapa de capacidades', coverageTitle: 'Distinta profundidad de fuentes. <em>El mismo estándar de verdad.</em>',
      coverageBody: 'La abstracción correcta no es “cada país tiene cada campo”. Es un contrato coherente para descubrir qué identidad y qué capas están realmente disponibles en cada jurisdicción.',
      devEyebrow: 'Construye donde vive el flujo de trabajo', devTitle: 'Una capa inmobiliaria para <em>software e IA.</em>',
      devBody: 'La verdad inmobiliaria nativa de cada país no debería quedar atrapada en descargas específicas. PropData la convierte en infraestructura de producción con credenciales, contratos de respuesta y formas de entrega para aplicaciones y agentes modernos.',
      docs: 'Leer documentación ↗', talk: 'Hablar con enterprise',
      enterpriseEyebrow: 'Multipaís · enterprise', enterpriseTitle: 'Deja de unir países <em>proveedor por proveedor.</em>',
      enterpriseBody: 'Usa una sola relación comercial para inteligencia inmobiliaria nativa por país, entregas masivas, acceso nativo para IA, infraestructura white-label, contratos de respuesta personalizados y abastecimiento de nuevos mercados.',
      book: 'Reservar una llamada global de datos →', footerMission: 'La capa de inteligencia inmobiliaria que permite a la IA entender los bienes raíces del mundo.',
      planIntents: {'Build and evaluate':'Construir y evaluar','Production teams':'Equipos en producción','Higher-volume use':'Uso de mayor volumen'}, buy: 'Comprar', month: '/ mes', pricingShown: 'PRECIO MOSTRADO'
    },
    mi: {
      label: 'Te reo Māori',
      nav: ['Ngā whenua','Utu','Tauira whakahaere','Whānuitanga','Kaihanga','Hinonga','Kōwhiria he mākete →'],
      heroEyebrow: 'Mōhiohio rawa whenua ā-motu',
      heroTitle: 'He rerekē ngā pūnaha rawa whenua o te ao.<em>Ehara i te mea me rerekē tō paparanga whakahaere.</em>',
      heroLede: 'Ka whakakotahi a PropData i ngā pūnaha marara mō te rēhita whenua, ngā pāriha, ngā wāhitau, ngā taitara, ngā whare, ngā tauwhitinga me ngā raraunga ā-wāhi ki tētahi paparanga mōhiohio rawa whenua kotahi, me te pupuri tonu i te tikanga taketake o ia whenua.',
      heroPrimary: 'Tirohia te whatunga o te ao →', heroSecondary: 'Tirohia te urunga ratonga-whaiaro',
      photoTitle: 'Kotahi te whatunga.<br>Ko te pono o te rawa whenua ā-rohe.',
      countriesEyebrow: 'Te whatunga whenua', countriesTitle: 'E whitu ngā mākete. <em>E whitu ngā pūnaha taketake.</em>',
      countriesBody: 'Kāore mātou e tango noa i tētahi tauira nō Amerika ka whakaingoa anō i ngā āpure mō ia whenua. Ka tīmata ia hua i te pūnaha tuakiri mana me ngā tikanga raraunga o taua mākete.',
      pricingEyebrow: 'Urunga ratonga-whaiaro ā-whenua', pricingTitle: 'Kōwhiria he whenua. <em>Tirohia te utu ā-rohe.</em>',
      pricingBody: 'Kōwhiria tō whenua i raro nei. He motuhake te utu, te moni, te hōhonutanga o te hua me te whānuitanga ki ia mākete, engari ka noho taurite te kirimana whakahaere.',
      selectMarket: 'KŌWHIRIA TŌ MĀKETE', clickCountry: 'Pāwhiria tētahi whenua kia puta ai ōna utu ↓',
      modelEyebrow: 'Ko ngā ara te kūaha. Ko te kauwhata te hua.', modelTitle: 'He taketake ā-motu i raro. <em>He whakahaere kotahi i runga.</em>',
      modelBody: 'Ka tīmata pea tētahi tono rawa whenua ki te wāhitau, te taunga, te pāriha, te UPRN, te REFCAT, te taitara rānei. Ka tautuhia e PropData te tuakiri taketake i te tuatahi, kātahi ka tāpiri i ngā hononga me ngā mōhiohio e whakaaetia ana e te puna.',
      coverageEyebrow: 'Mahere āheinga', coverageTitle: 'He rerekē te hōhonutanga o ngā puna. <em>Kotahi tonu te paerewa pono.</em>',
      coverageBody: 'Ehara te whakatata tika i te whakaaro “kei ia whenua ngā āpure katoa”. Ko te mea tika he kirimana taurite e whakaatu ana ko ēhea tuakiri me ēhea paparanga e wātea pono ana i ia rohe mana.',
      devEyebrow: 'Hangaia ki te wāhi e rere ai te mahi', devTitle: 'Kotahi te paparanga rawa whenua mō <em>te pūmanawa me te AI.</em>',
      devBody: 'Kaua te pono rawa whenua ā-motu e mau ki ngā tango raraunga motuhake. Ka hurihia e PropData hei hanganga whakaputa me ngā taipitopito urunga, ngā kirimana whakautu me ngā momo tuku mō ngā taupānga me ngā āpiha hou.',
      docs: 'Pānuihia ngā tuhinga ↗', talk: 'Kōrero ki te rōpū hinonga',
      enterpriseEyebrow: 'Maha-whenua · hinonga', enterpriseTitle: 'Kāti te tuitui whenua <em>kaiwhakarato ki te kaiwhakarato.</em>',
      enterpriseBody: 'Whakamahia tētahi hononga arumoni kotahi mō te mōhiohio rawa whenua ā-motu, te tuku raraunga nui, te urunga AI, te hanganga white-label, ngā kirimana whakautu ritenga me te whakatū mākete hou.',
      book: 'Whakaritea he kōrero raraunga ā-ao →', footerMission: 'Te paparanga mōhiohio rawa whenua e āhei ai te AI ki te mārama ki ngā rawa o te ao.',
      planIntents: {'Build and evaluate':'Hanga me te aromātai','Production teams':'Ngā tīma whakaputa','Higher-volume use':'Whakamahinga nui ake'}, buy: 'Hoko', month: '/ marama', pricingShown: 'KUA WHAKAATURIA TE UTU'
    }
  };

  const localeCodes = {en:'EN',et:'ET',fr:'FR',es:'ES',mi:'MI'};
  let current = localStorage.getItem('propdata-global-language') || 'en';
  if (!translations[current]) current = 'en';

  const text = (selector, value) => { const el = document.querySelector(selector); if (el && value != null) el.textContent = value; };
  const html = (selector, value) => { const el = document.querySelector(selector); if (el && value != null) el.innerHTML = value; };

  function installSwitcher() {
    const nav = document.querySelector('.nav');
    if (!nav || document.querySelector('.language-switcher')) return;
    const wrap = document.createElement('div');
    wrap.className = 'language-switcher';
    wrap.setAttribute('aria-label', 'Language');
    wrap.innerHTML = `<button class="language-current" type="button" aria-expanded="false"><span>🌐</span><b>${localeCodes[current]}</b></button><div class="language-menu" role="menu">${Object.entries(translations).map(([code,t])=>`<button type="button" data-lang="${code}" role="menuitem" class="${code===current?'active':''}"><span>${localeCodes[code]}</span>${t.label}</button>`).join('')}</div>`;
    const menu = nav.querySelector('.menu');
    nav.insertBefore(wrap, menu || nav.querySelector('.nav-links'));
    const toggle = wrap.querySelector('.language-current');
    toggle.addEventListener('click', () => {
      const open = wrap.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    wrap.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
      wrap.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('click', e => { if (!wrap.contains(e.target)) { wrap.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); } });
  }

  function translatePricing(t) {
    document.querySelectorAll('.plan-intent').forEach(el => { if (translations.en.planIntents[el.dataset.en || el.textContent.trim()]) { if (!el.dataset.en) el.dataset.en = el.textContent.trim(); el.textContent = t.planIntents[el.dataset.en] || el.dataset.en; } });
    document.querySelectorAll('.plan-price span').forEach(el => el.textContent = t.month);
    document.querySelectorAll('.plan .btn').forEach(el => {
      if (!el.dataset.tier) el.dataset.tier = el.textContent.replace(/^[^A-Za-zÀ-ž]*?(Buy|Osta|Acheter|Comprar|Hoko)\s+/i,'').replace(/\s*→\s*$/,'').trim();
      el.textContent = `${t.buy} ${el.dataset.tier} →`;
    });
  }

  function applyLanguage(code) {
    const t = translations[code] || translations.en;
    document.documentElement.lang = code;
    document.querySelectorAll('.language-menu [data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === code));
    const currentBtn = document.querySelector('.language-current b'); if (currentBtn) currentBtn.textContent = localeCodes[code];

    const navLinks = document.querySelectorAll('.nav-links > a'); t.nav.forEach((v,i)=>{ if(navLinks[i]) navLinks[i].textContent=v; });
    text('.hero .eyebrow', t.heroEyebrow); html('.hero h1', t.heroTitle); text('.hero-lede', t.heroLede);
    const heroBtns = document.querySelectorAll('.hero-actions a'); if(heroBtns[0]) heroBtns[0].textContent=t.heroPrimary; if(heroBtns[1]) heroBtns[1].textContent=t.heroSecondary;
    html('.photo-label b', t.photoTitle);

    text('#countries .section-head .eyebrow', t.countriesEyebrow); html('#countries .section-head h2', t.countriesTitle); text('#countries .section-head > p', t.countriesBody);
    text('#access .section-head .eyebrow', t.pricingEyebrow); html('#access .section-head h2', t.pricingTitle); text('#access .section-head > p', t.pricingBody);
    text('.pricing-cue strong', t.selectMarket); text('.pricing-cue span', t.clickCountry);
    text('#model .section-head .eyebrow', t.modelEyebrow); html('#model .section-head h2', t.modelTitle); text('#model .section-head > p', t.modelBody);
    text('#coverage .section-head .eyebrow', t.coverageEyebrow); html('#coverage .section-head h2', t.coverageTitle); text('#coverage .section-head > p', t.coverageBody);
    text('#developers .developer-copy .eyebrow', t.devEyebrow); html('#developers h2', t.devTitle); text('#developers .developer-copy > p', t.devBody);
    const devBtns = document.querySelectorAll('#developers .actions a'); if(devBtns[0]) devBtns[0].textContent=t.docs; if(devBtns[1]) devBtns[1].textContent=t.talk;
    text('#enterprise .eyebrow', t.enterpriseEyebrow); html('#enterprise h2', t.enterpriseTitle); text('#enterprise .enterprise-inner > p', t.enterpriseBody);
    const entBtns = document.querySelectorAll('#enterprise .actions a'); if(entBtns[0]) entBtns[0].textContent=t.book;
    text('.footer-brand h3', t.footerMission);
    translatePricing(t);
  }

  function setLanguage(code) {
    current = translations[code] ? code : 'en';
    localStorage.setItem('propdata-global-language', current);
    applyLanguage(current);
  }

  function installStyle() {
    if (document.getElementById('language-v11-style')) return;
    const style = document.createElement('style'); style.id='language-v11-style';
    style.textContent = `.language-switcher{position:relative;margin-left:auto}.language-current{height:42px;min-width:64px;padding:0 12px;border:1px solid #bfb8a9;border-radius:999px;background:#fbf8f0;display:flex;align-items:center;justify-content:center;gap:7px;cursor:pointer}.language-current b{font:900 9px var(--mono);letter-spacing:.08em}.language-menu{display:none;position:absolute;z-index:120;right:0;top:50px;width:190px;padding:7px;border:1px solid #c7c0b2;border-radius:16px;background:#fbf8f0;box-shadow:0 24px 60px rgba(23,22,16,.18)}.language-switcher.open .language-menu{display:grid}.language-menu button{border:0;background:transparent;padding:11px 10px;border-radius:10px;display:grid;grid-template-columns:36px 1fr;text-align:left;align-items:center;cursor:pointer;font-size:12px}.language-menu button span{font:900 8px var(--mono);color:var(--forest)}.language-menu button:hover,.language-menu button.active{background:#e7eee8}.nav-links{margin-left:0}@media(max-width:980px){.language-switcher{margin-left:auto}.language-current{height:40px}.language-menu{right:0}.menu{margin-left:0}}`;
    document.head.appendChild(style);
  }

  function boot() {
    installStyle(); installSwitcher(); applyLanguage(current);
    const targets = [document.getElementById('marketSummary'), document.getElementById('plans')].filter(Boolean);
    if (targets.length) new MutationObserver(()=>translatePricing(translations[current])).observe(document.getElementById('access'), {childList:true,subtree:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
