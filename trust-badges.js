(()=>{
  'use strict';
  const VERIFY='https://mother.proptechusa.ai/verify/xgH9unhpY6TDvTtmG8CsUWrq0O6M10TS';
  const MOTHER='https://api.mother.proptechusa.ai/badge/xgH9unhpY6TDvTtmG8CsUWrq0O6M10TS.svg';
  const PROPDATA='https://propdata.proptechusa.ai/';

  function addStyles(){
    if(document.getElementById('proptech-trust-badges-css'))return;
    const style=document.createElement('style');
    style.id='proptech-trust-badges-css';
    style.textContent=`
      .pt-trust-badges{width:min(1360px,calc(100% - 48px));margin:22px auto 0;padding:18px 0;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px 12px;border-top:1px solid rgba(255,255,255,.08)}
      .pt-trust-badge{display:inline-flex;align-items:center;min-height:48px;border-radius:12px;text-decoration:none!important;transition:transform .18s ease,box-shadow .18s ease}
      .pt-trust-badge:hover{transform:translateY(-1px)}
      .pt-trust-badge:focus-visible{outline:2px solid #5bd9f5;outline-offset:3px}
      .pt-mother-badge{box-shadow:0 0 0 1px rgba(255,255,255,.07)}
      .pt-mother-badge:hover{box-shadow:0 0 0 1px rgba(91,217,245,.28),0 8px 24px rgba(0,125,255,.13)}
      .pt-mother-badge img{display:block;width:236px;height:48px;max-width:100%;border-radius:11px}
      .pt-propdata-badge{position:relative;overflow:hidden;width:min(320px,100%);height:48px;padding:0 14px 0 11px;gap:10px;border:1px solid rgba(69,184,255,.62);background:radial-gradient(120px 70px at 15% 30%,rgba(36,206,255,.18),transparent 70%),linear-gradient(110deg,#071b35 0%,#08254a 58%,#101d42 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.10),0 0 0 1px rgba(0,174,255,.08),0 8px 22px rgba(0,0,0,.16);color:#fff!important}
      .pt-propdata-badge:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,rgba(255,255,255,.08),transparent 34%,transparent 70%,rgba(114,73,255,.08))}
      .pt-propdata-badge:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 0 1px rgba(91,217,245,.30),0 10px 28px rgba(0,125,255,.16)}
      .pt-propdata-icon{position:relative;z-index:1;display:grid;place-items:center;flex:0 0 31px;width:31px;height:31px;border-radius:9px;background:linear-gradient(145deg,#20d7f4,#2577ff 66%,#7357ff);box-shadow:0 0 18px rgba(32,215,244,.18)}
      .pt-propdata-icon svg{width:21px;height:21px;display:block}
      .pt-propdata-copy{position:relative;z-index:1;display:flex;min-width:0;flex-direction:column;justify-content:center;line-height:1.05;text-align:left}
      .pt-propdata-overline{font:800 8px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;color:#9ebfe0;margin-bottom:4px}
      .pt-propdata-name{font:800 13px/1.05 Inter,ui-sans-serif,system-ui,sans-serif;letter-spacing:-.02em;color:#fff;white-space:nowrap}
      .pt-propdata-name em{font-style:normal;background:linear-gradient(90deg,#56e3ff,#4aa2ff 58%,#9b74ff);-webkit-background-clip:text;background-clip:text;color:transparent}
      .footer-mother>.pt-propdata-badge{margin-top:2px}
      @media(max-width:520px){.pt-trust-badges{width:min(100% - 28px,1360px);align-items:stretch}.pt-trust-badge{width:100%;justify-content:center}.pt-mother-badge img{width:min(236px,100%);height:auto}.pt-propdata-badge{width:100%;justify-content:flex-start}.footer-mother>.pt-propdata-badge{width:min(320px,100%)}.pt-propdata-name{font-size:12px}}
      @media(prefers-reduced-motion:reduce){.pt-trust-badge{transition:none}.pt-trust-badge:hover{transform:none}}
    `;
    document.head.appendChild(style);
  }

  function makePropDataBadge(){
    const badge=document.createElement('a');
    badge.className='pt-trust-badge pt-propdata-badge';
    badge.href=PROPDATA;
    badge.target='_blank';
    badge.rel='noopener noreferrer';
    badge.setAttribute('data-proptech-trust-badges','propdata');
    badge.setAttribute('aria-label','Powered by PropData from PropTechUSA.ai (opens in a new tab)');
    badge.innerHTML='<span class="pt-propdata-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><ellipse cx="8" cy="5" rx="5" ry="2.3" fill="rgba(255,255,255,.92)"/><path d="M3 5v5c0 1.27 2.24 2.3 5 2.3s5-1.03 5-2.3V5M3 10v5c0 1.27 2.24 2.3 5 2.3 1.02 0 1.97-.14 2.76-.38" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="m12.3 13.2 4.2-3.4 4.2 3.4v6.2h-8.4v-6.2Z" fill="rgba(255,255,255,.96)"/><path d="M11.2 13.8 16.5 9.5l5.3 4.3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.2 19.4v-3.7h2.6v3.7" stroke="#2b7cff" stroke-width="1.2"/></svg></span><span class="pt-propdata-copy"><span class="pt-propdata-overline">Powered by</span><span class="pt-propdata-name">PropData<em>.PropTechUSA.ai</em></span></span>';
    return badge;
  }

  function mount(){
    const footer=document.querySelector('footer');
    if(!footer||footer.querySelector('.pt-propdata-badge'))return;
    addStyles();

    // Global already has the canonical Mother AI badge. Preserve it and add
    // PropData directly beside it rather than rendering Mother twice.
    const existingMother=footer.querySelector('a[href*="mother.proptechusa.ai/verify/"]');
    if(existingMother){
      existingMother.insertAdjacentElement('afterend',makePropDataBadge());
      return;
    }

    const block=document.createElement('div');
    block.className='pt-trust-badges';
    block.setAttribute('data-proptech-trust-badges','1');
    block.setAttribute('aria-label','Technology and security infrastructure');
    block.innerHTML=`<a class="pt-trust-badge pt-mother-badge" href="${VERIFY}" target="_blank" rel="noopener noreferrer" aria-label="Verify Mother AI protection for the PropTechUSA infrastructure powering this site (opens in a new tab)"><img src="${MOTHER}" alt="Mother AI Protected — live verification" width="236" height="48" loading="lazy" decoding="async"></a>`;
    block.appendChild(makePropDataBadge());
    const target=footer.querySelector('.footer-bottom');
    if(target)target.before(block);else footer.appendChild(block);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
