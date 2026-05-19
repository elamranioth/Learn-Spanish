import{r as b,j as e,R as X,c as xs}from"./react-iLQ0ojkV.js";import{X as xe,H as Po,V as Ua,S as Se,M as vs,C as ba,L as Ve,B as Mo,a as ma,b as Ne,c as Fa,d as We,P as Go,e as ys,f as Ba,g as _e,h as ws,G as Do,i as ks,j as js,Z as $a,k as Ns,l as la,T as da,m as Wa,N as _a,R as Ya,n as oa}from"./icons-Dy2zl4ae.js";import{C as zs}from"./canciones-LNuSxTu4.js";import{C as Ss,a as qs}from"./compound-tenses-wpuk3-pq.js";import{S as Cs}from"./expressions-library-BlTZ80NV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();function Es(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const a="/Learn-Spanish/";navigator.serviceWorker.register(`${a}sw.js?v=${encodeURIComponent("2026-05-19T14:54:37.655Z")}`,{scope:a,updateViaCache:"none"}).then(o=>{function n(t){window.dispatchEvent(new CustomEvent("learn-spanish-update-ready",{detail:{worker:t}}))}o.waiting&&navigator.serviceWorker.controller&&n(o.waiting),o.addEventListener("updatefound",()=>{const t=o.installing;t&&t.addEventListener("statechange",()=>{t.state==="installed"&&navigator.serviceWorker.controller&&n(t)})}),o.update().catch(()=>{})}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.__learnSpanishRefreshing||(window.__learnSpanishRefreshing=!0,window.location.reload())})})}const Is="modulepreload",Ts=function(a){return"/Learn-Spanish/"+a},ko={},Ls=function(s,o,n){let t=Promise.resolve();if(o&&o.length>0){let h=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");t=h(o.map(c=>{if(c=Ts(c),c in ko)return;ko[c]=!0;const m=c.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Is,m||(v.as="script"),v.crossOrigin="",v.href=c,l&&v.setAttribute("nonce",l),document.head.appendChild(v),m)return new Promise((p,g)=>{v.addEventListener("load",p),v.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return t.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return s().catch(i)})};function ua(a,s={}){typeof window>"u"||window.dispatchEvent(new CustomEvent("learn-spanish-message",{detail:{id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,title:s.title||"Notice",message:a,tone:s.tone||"info",timeout:s.timeout||5200}}))}function As(){const[a,s]=b.useState([]);return b.useEffect(()=>{function o(n){const t=n.detail||{};t.message&&(s(i=>[t,...i].slice(0,3)),t.timeout!==1/0&&window.setTimeout(()=>{s(i=>i.filter(r=>r.id!==t.id))},t.timeout||5200))}return window.addEventListener("learn-spanish-message",o),()=>window.removeEventListener("learn-spanish-message",o)},[]),a.length?e.jsx("div",{className:"app-message-stack","aria-live":"polite","aria-atomic":"false",children:a.map(o=>e.jsxs("div",{className:`app-message app-message-${o.tone||"info"}`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"app-message-title",children:o.title}),e.jsx("p",{children:o.message})]}),e.jsx("button",{type:"button",className:"app-message-close",onClick:()=>s(n=>n.filter(t=>t.id!==o.id)),"aria-label":"Dismiss message",children:e.jsx(xe,{size:14})})]},o.id))}):null}let Pe=null,jo=!1,He={rate:.85,voiceURI:""};function Uo(){return Math.max(.65,Math.min(1.25,Number(He.rate)||.85))}function ea(a={}){He={...He,...a,rate:Math.max(.65,Math.min(1.25,Number(a.rate??He.rate)||.85))},Pe=null}function Bo(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function No(){return Bo().filter(a=>a.lang&&a.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(a.name||""))}function $e(){if(typeof window>"u"||!window.speechSynthesis)return null;if(Pe)return Pe;const a=Bo();if(a.length===0)return null;if(He.voiceURI){const n=a.find(t=>t.voiceURI===He.voiceURI);if(n)return Pe=n,n}const s=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const n of s){const t=a.find(i=>i.lang&&i.lang.toLowerCase().startsWith(n.toLowerCase()));if(t)return Pe=t,t}const o=a.find(n=>/spanish|español/i.test(n.name||""));return o?(Pe=o,o):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{Pe=null,$e()}),$e(),setTimeout($e,250),setTimeout($e,1e3));function Ka(){if(!jo&&!(typeof window>"u"||!window.speechSynthesis))try{const a=new SpeechSynthesisUtterance(" ");a.volume=0,a.rate=1,window.speechSynthesis.speak(a),jo=!0}catch{}}function aa(){try{window.speechSynthesis?.cancel(),window.dispatchEvent?.(new CustomEvent("learn-spanish-audio-stop"))}catch{}}function $o(a,s={}){if(typeof window>"u"||!window.speechSynthesis||!a)return s.onerror&&s.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(a),n=$e();n&&(o.voice=n),o.lang=n?.lang||"es-ES",o.rate=s.rate??Uo(),o.pitch=s.pitch??1,o.volume=1,s.onend&&(o.onend=s.onend),s.onerror&&(o.onerror=r=>{console.warn("[speech] error:",r?.error||"unknown",{text:a.slice(0,30),voice:n?.name}),s.onerror(r)}),s.onboundary&&(o.onboundary=s.onboundary),s.onstart&&(o.onstart=s.onstart),window.speechSynthesis.speak(o);const t=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(t);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),i=o.onend;return o.onend=r=>{clearInterval(t),i&&i(r)},o}catch(o){return console.warn("[speech] threw:",o),s.onerror&&s.onerror({error:o.message}),null}}const zo=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function Ro(a){const s=[],o=String(a||"");let n;for(zo.lastIndex=0;(n=zo.exec(o))!==null;)s.push({text:n[0],isWord:!!n[1],charStart:n.index});return s}function Z({text:a}){const s=b.useMemo(()=>Ro(a),[a]);return e.jsx(e.Fragment,{children:s.map((o,n)=>o.isWord?e.jsx("span",{className:"dict-word-token","data-dict-word":o.text,children:o.text},n):e.jsx("span",{children:o.text},n))})}function sa({text:a,paragraphClass:s="reading-paragraph",firstParagraph:o=!1}){const n=b.useMemo(()=>Ro(a),[a]),t=b.useMemo(()=>{const f=[];let N="",y=[],S=-1;function q(){y.length>0&&f.push({spokenText:N.trim(),words:y}),N="",y=[],S=-1}for(let G=0;G<n.length;G++){const z=n[G];if(!z.isWord&&y.length===0&&/^\s+$/.test(z.text))continue;const T=N.length;N+=z.text,z.isWord?(y.push({tokenIdx:G,text:z.text,charStart:T,charEnd:T+z.text.length,commaAfter:!1}),S=y.length-1):(/,/.test(z.text)&&S>=0&&(y[S].commaAfter=!0),/[.!?;:]/.test(z.text)&&q())}return q(),f},[n]),[i,r]=b.useState(-1),[l,h]=b.useState(!1),c=X.useRef([]),m=X.useRef([]),u=X.useRef(!1),v=X.useRef(110);function p(){m.current.forEach(clearTimeout),m.current=[]}function g(f){if(f.stopPropagation(),typeof window>"u"||!window.speechSynthesis){ua("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(Ka(),l){u.current=!0,aa(),p(),h(!1),r(-1);return}if(t.length===0)return;aa(),p(),u.current=!1,h(!0),v.current=110;let N=0;function y(){if(u.current)return;if(N>=t.length){h(!1),r(-1);return}const S=t[N];if(!S||S.words.length===0){N++,y();return}const q=new SpeechSynthesisUtterance(S.spokenText),G=$e();G&&(q.voice=G),q.lang=G?.lang||"es-ES",q.rate=Uo(),q.pitch=1;let z=!1,T=!1,O=!1,D=!1,K=0;const k=30,M=200;function V(C){const E=Math.max(0,Number(C)||0);let I=S.words[0];for(const L of S.words)if(L.charStart<=E+1)I=L;else break;return I}function ee(){if(D||O||u.current)return;D=!0;let C=0;for(let E=0;E<S.words.length;E++){const I=S.words[E],B=setTimeout(()=>{!u.current&&!O&&r(I.tokenIdx)},C);m.current.push(B),C+=I.text.length*v.current+k,I.commaAfter&&(C+=M)}}q.onstart=()=>{if(z)return;z=!0,K=performance.now();const C=setTimeout(ee,350);m.current.push(C)},q.onboundary=C=>{if(u.current||typeof C.charIndex!="number")return;const E=V(C.charIndex);E&&(O=!0,r(E.tokenIdx))};const $=setTimeout(()=>{!z&&!u.current&&(z=!0,K=performance.now(),ee())},500);m.current.push($);function H(){if(T||(T=!0,u.current))return;if(K>0){const E=performance.now()-K,I=S.words.reduce((re,Ke)=>re+Ke.text.length,0),L=S.words.filter(re=>re.commaAfter).length,B=S.words.length*k+L*M,te=Math.max(100,E-B);if(I>0){const re=te/I;re>=40&&re<=300&&(v.current=re*.6+v.current*.4)}}p(),N++;const C=setTimeout(y,30);m.current.push(C)}q.onend=H,q.onerror=H;const _=Math.max(5e3,S.spokenText.length*220),x=setTimeout(H,_);m.current.push(x),window.speechSynthesis.speak(q)}y()}return b.useEffect(()=>{function f(){u.current=!0,p(),h(!1),r(-1)}return window.addEventListener?.("learn-spanish-audio-stop",f),()=>{u.current=!0,p(),window.removeEventListener?.("learn-spanish-audio-stop",f),window.speechSynthesis?.cancel()}},[]),b.useEffect(()=>{if(i<0)return;const f=c.current[i];if(!f||typeof f.getBoundingClientRect!="function")return;const N=f.getBoundingClientRect(),y=window.innerHeight||document.documentElement.clientHeight;(N.bottom>y-100||N.top<80)&&f.scrollIntoView({behavior:"smooth",block:"center"})},[i]),typeof window<"u"&&!window.speechSynthesis?e.jsxs("p",{className:s,children:[e.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:f=>{f.stopPropagation(),ua("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"})},"aria-label":"Audio not supported",title:"Audio no disponible",children:e.jsx(Ua,{size:12})}),e.jsx(Z,{text:a})]}):e.jsxs("p",{className:`${s} karaoke-paragraph ${l?"is-playing":""}`,children:[e.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${l?"playing":""}`,onClick:g,onPointerDown:f=>f.stopPropagation(),"aria-label":l?"Stop":"Play audio with highlighting",title:l?"Detener":"Escuchar con resaltado",children:e.jsx(Ua,{size:12})}),n.map((f,N)=>{if(!f.isWord)return e.jsx("span",{className:"kt-space",children:f.text},N);const y=N===i;return e.jsx("span",{ref:S=>c.current[N]=S,className:`kt-word ${y?"kt-active":""}`,"data-dict-word":f.text,children:f.text},N)})]})}function Y({text:a,size:s="sm",className:o=""}){const[n,t]=b.useState(!1);b.useEffect(()=>{function r(){t(!1)}return window.addEventListener?.("learn-spanish-audio-stop",r),()=>window.removeEventListener?.("learn-spanish-audio-stop",r)},[]);function i(r){if(r.stopPropagation(),typeof window>"u"||!window.speechSynthesis){ua("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(Ka(),n){aa(),t(!1);return}aa(),t(!0),$o(a,{onend:()=>t(!1),onerror:l=>{t(!1),l?.error&&l.error!=="canceled"&&l.error!=="interrupted"&&ua(`Error al leer: ${l.error}. Asegurate de tener una voz en espanol instalada.`,{title:"Audio necesita atencion",tone:"warning"})}})}return e.jsx("button",{className:`speak-btn speak-btn-${s} ${n?"playing":""} ${o}`,onClick:i,onPointerDown:r=>r.stopPropagation(),"aria-label":n?"Stop":"Play audio",title:n?"Detener":"Escuchar",children:e.jsx(Ua,{size:s==="sm"?12:14})})}function Ps({settings:a,onChange:s}){const[o,n]=b.useState(()=>No());b.useEffect(()=>{ea(a)},[a]),b.useEffect(()=>{function i(){n(No())}if(i(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",i);const r=setTimeout(i,600);return()=>{clearTimeout(r),window.speechSynthesis.removeEventListener?.("voiceschanged",i)}}},[]);function t(i){const r={...a,...i};ea(r),s?.(r)}return e.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[e.jsxs("div",{className:"audio-settings-label",children:[e.jsx(Po,{size:14}),"Audio"]}),e.jsxs("select",{className:"audio-rate-select",value:String(a.rate),onChange:i=>t({rate:Number(i.target.value)}),"aria-label":"Audio speed",children:[e.jsx("option",{value:"0.7",children:"0.70x"}),e.jsx("option",{value:"0.85",children:"0.85x"}),e.jsx("option",{value:"1",children:"1.00x"}),e.jsx("option",{value:"1.15",children:"1.15x"})]}),e.jsxs("select",{className:"audio-voice-select",value:a.voiceURI||"",onChange:i=>t({voiceURI:i.target.value}),"aria-label":"Spanish voice",children:[e.jsx("option",{value:"",children:"Voz espanola"}),o.map(i=>e.jsxs("option",{value:i.voiceURI,children:[i.name," (",i.lang,")"]},i.voiceURI))]})]})}function ze({es:a,en:s,esClass:o="vu-ex-es",enClass:n="vu-ex-en"}){const t=(a||"").length,i=(s||"").length;return t<=18&&i<=18&&t+i<=36?e.jsxs("div",{className:`${o} inline-pair`,children:[e.jsx(Y,{text:a}),e.jsx(Z,{text:a})," ",e.jsxs("span",{className:`${n} inline-en`,children:["(",s,")"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:o,children:[e.jsx(Y,{text:a}),e.jsx(Z,{text:a})]}),e.jsx("div",{className:n,children:s})]})}const Ms=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,500;1,7..72,600&family=Caveat:wght@500;600&display=swap');

:root {
  --paper: #ffffff;
  --paper-light: #ffffff;
  --ink: #1c1c1a;
  --ink-soft: #3a3a36;
  --ink-mute: #6e6a60;
  --rule: #d8cfb9;
  --rule-soft: #ebe3cd;
  --green: #2f5d3a;
  --green-soft: #4d7a55;
  --green-tint: #e3ebde;
  --sienna: #b1502a;
  --sienna-deep: #8b3c1d;
  --sienna-tint: #f4e2d4;
  --yellow: #9a6a00;
  --yellow-soft: #c99318;
  --yellow-tint: #fff2b8;
  --red: #b03030;
  --blue: #1f4f8b;
  --shadow: 0 1px 0 rgba(0,0,0,0.04), 0 12px 30px -18px rgba(60, 50, 30, 0.25);
  --font-scale: 1;
  --translation-scale: 0.88;
}

.book-root {
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  font-size: calc(20px * var(--font-scale));
  line-height: 1.7;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Apply font scale to all reading-related text */
.reading-paragraph,
.fold-body .reading-paragraph,
.bio-paragraph,
.poem-stanza-es,
.poem-stanza-en,
.poem-intro-note,
.gl-text,
.gl-ex-es,
.gl-ex-en,
.lesson-text,
.lesson-ex-es,
.lesson-ex-en,
.chapter-intro,
.chapter-subtitle {
  font-size: calc(1em * var(--font-scale)) !important;
}

/* Keep English translations visually quieter than the Spanish text. */
.example-en,
.lesson-ex-en,
.gl-ex-en,
.inline-en,
.vu-ex-en,
.phrase-en,
.vocab-en,
.poem-stanza-en,
.song-lyric-en,
.poem-vocab-en,
.palabra-en,
.dict-main-translation,
.dict-example-en,
.memoria-front-translation,
.memoria-list-en,
.memoria-translation {
  font-size: calc(var(--translation-scale) * 1em * var(--font-scale)) !important;
  line-height: 1.5;
}
.translation-mode-spanish .example-en,
.translation-mode-spanish .inline-en,
.translation-mode-spanish .lesson-ex-en,
.translation-mode-spanish .vu-ex-en,
.translation-mode-spanish .gl-ex-en,
.translation-mode-spanish .phrase-en,
.translation-mode-spanish .poem-stanza-en,
.translation-mode-spanish .song-lyric-en,
.translation-mode-spanish .poem-vocab-en,
.translation-mode-spanish .vocab-en,
.translation-mode-spanish .glossary-en,
.translation-mode-spanish .dict-example-en,
.translation-mode-spanish .memoria-front-translation,
.translation-mode-spanish .memoria-list-en {
  display: none !important;
}

/* Mobile bar — always visible (font controls + menu) */
.mobile-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 16px;
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-light);
  position: sticky; top: 0; z-index: 30;
  gap: 10px;
}
.mobile-title {
  flex: 0 0 auto;
}
.mobile-brand-script {
  font-family: 'Caveat', cursive;
  font-size: 26px;
  color: var(--green);
}
.study-timer {
  flex: 0 0 auto;
  min-width: 96px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 10px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper);
  color: var(--ink-mute);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.study-timer.running {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-tint);
}
.study-timer-main {
  font-size: 16px;
  line-height: 1;
}
.study-timer-sub {
  padding-left: 6px;
  border-left: 1px solid var(--rule);
  font-size: 11px;
  color: var(--ink-mute);
}
.study-timer.running .study-timer-sub {
  color: var(--green);
  border-left-color: rgba(48, 103, 65, 0.24);
}
.mobile-btn {
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 6px 8px;
  color: var(--ink);
  cursor: pointer;
  touch-action: manipulation;
}

/* Font controls in the top bar */
.font-controls {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 2px;
}
.top-tool-btn {
  flex: 0 0 auto;
  height: 36px;
  min-width: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink-mute);
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  cursor: pointer;
  touch-action: manipulation;
}
.top-tool-btn:hover,
.top-tool-btn.active {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-tint);
}
.top-tool-btn.audio-stop:hover {
  border-color: var(--sienna);
  color: var(--sienna-deep);
  background: var(--sienna-tint);
}
.top-tool-btn.boox-toggle.active {
  border-color: var(--ink);
  color: var(--ink);
  background: #fff;
  box-shadow: inset 0 -3px 0 var(--ink);
}
.top-tools {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.mobile-tools-toggle {
  display: none;
  flex: 0 0 auto;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  cursor: pointer;
}
.mobile-tools-toggle.active {
  border-color: var(--green);
  background: var(--green-tint);
  color: var(--green);
}
.book-root.focus-mode .book-shell {
  grid-template-columns: 1fr;
}
.book-root.focus-mode .sidebar,
.book-root.focus-mode .level-bar,
.book-root.focus-mode .resume-banner,
.book-root.focus-mode .update-banner,
.book-root.focus-mode .header-search,
.book-root.focus-mode .top-tool-btn:not(.focus-toggle),
.book-root.focus-mode .font-controls,
.book-root.focus-mode .mobile-btn,
.book-root.focus-mode .mobile-tools-toggle {
  display: none !important;
}
.book-root.focus-mode .top-tools {
  display: inline-flex !important;
  width: auto;
  margin-left: auto;
}
.book-root.focus-mode .mobile-bar {
  justify-content: space-between;
  gap: 12px;
}
.book-root.focus-mode .book-page {
  max-width: 780px;
  padding-top: 42px;
}
.book-root.focus-mode .chapter-header {
  margin-bottom: 24px;
}
.book-root.focus-mode .chapter-nav {
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
}
.font-btn {
  width: 32px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: var(--ink);
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  transition: background 120ms;
  touch-action: manipulation;
}
.font-btn:hover:not(:disabled) { background: var(--rule-soft); }
.font-btn:active:not(:disabled) { background: var(--green-tint); }
.font-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.font-btn-small { font-size: 14px; }
.font-btn-large { font-size: 20px; }

/* On wider screens, hide menu button if sidebar is always visible */
@media (min-width: 1101px) {
  .mobile-bar .mobile-btn { display: none; }
  .mobile-bar { padding: 8px 20px; }
}

/* ===== Resume Reading Banner ===== */
.resume-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 18px;
  background: var(--green);
  color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  top: 50px;
  z-index: 25;
  animation: resume-slide-down 280ms cubic-bezier(0.4, 0.2, 0.2, 1);
}
@keyframes resume-slide-down {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
.resume-banner-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
.resume-banner-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 700;
}
.resume-banner-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  font-style: italic;
  letter-spacing: 0.005em;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.resume-banner-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.resume-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #ffffff;
  color: var(--green);
  font-family: 'Literata', Georgia, serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 120ms;
  touch-action: manipulation;
}
.resume-btn-primary:hover { background: var(--paper-light); }
.resume-btn-primary:active { background: var(--paper); }
.resume-btn-dismiss {
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  transition: background 120ms;
  touch-action: manipulation;
}
.resume-btn-dismiss:hover { background: rgba(255,255,255,0.28); }

@media (max-width: 700px) {
  .resume-banner { padding: 12px 14px; top: 98px; }
  .resume-banner-title { font-size: 18px; }
  .resume-btn-primary { font-size: 13px; padding: 7px 12px; }
}

/* ===== Floating Translate button (appears on text selection) ===== */
.dict-floating-btn {
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 9998;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--ink);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15);
  cursor: pointer;
  animation: float-btn-appear 160ms ease-out;
  touch-action: manipulation;
  white-space: nowrap;
}
.dict-floating-btn::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--ink);
  border-bottom: 0;
}
.dict-floating-btn:hover { background: #2a2a26; }
.dict-floating-btn:active { transform: translate(-50%, -100%) scale(0.97); }
@keyframes float-btn-appear {
  from { opacity: 0; transform: translate(-50%, calc(-100% + 6px)); }
  to { opacity: 1; transform: translate(-50%, -100%); }
}

.book-shell {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
}
@media (max-width: 1100px) {
  .book-shell { grid-template-columns: 1fr; }
}

/* SIDEBAR */
.sidebar {
  border-right: 1px solid var(--rule);
  background: var(--paper-light);
  position: relative;
  z-index: 20;
}
.sidebar-inner {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.scrim { display: none; }
@media (max-width: 1100px) {
  .sidebar {
    position: fixed;
    inset: 0;
    transform: translateX(-100%);
    transition: transform 220ms ease;
    z-index: 50;
    pointer-events: none;
  }
  .sidebar.open { transform: translateX(0); pointer-events: auto; }
  .sidebar-inner {
    width: 84%;
    max-width: 320px;
    background: var(--paper-light);
    height: 100vh;
    box-shadow: var(--shadow);
    position: relative;
    z-index: 2;
  }
  .scrim {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(28, 28, 26, 0.4);
    z-index: 1;
  }
}

.sidebar-header {
  flex-shrink: 0;
  background: var(--paper-light);
  border-bottom: 1px solid var(--rule);
  position: relative;
  z-index: 4;
  padding-bottom: 0;
}

/* Touch-friendly buttons everywhere (especially e-ink) */
.chapter-btn,
.section-btn,
.level-pill,
.nav-btn,
.mobile-btn,
.sidebar-close {
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(177, 80, 42, 0.18);
  user-select: none;
  -webkit-user-select: none;
}
.chapter-btn:active {
  background: var(--sienna-tint) !important;
  color: var(--sienna-deep) !important;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 22px 16px;
  position: relative;
}
.brand-mark {
  width: 36px; height: 36px;
  border-radius: 4px;
  background: var(--green);
  color: var(--paper-light);
  display: grid; place-items: center;
  box-shadow: var(--shadow);
}
.brand-eyebrow {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.brand-title {
  font-family: 'Caveat', cursive;
  font-size: 30px;
  line-height: 1;
  color: var(--green);
  margin-top: 2px;
}
.sidebar-close {
  margin-left: auto;
  display: none;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 4px 6px;
  cursor: pointer;
  color: var(--ink);
}
@media (max-width: 1100px) {
  .sidebar-close { display: inline-flex; }
}

.section-nav {
  flex: 1;
  padding: 10px 12px 24px;
  overflow-y: auto;
}
.section-group { margin-bottom: 4px; }
.section-btn {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 10px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: var(--ink-soft);
  transition: background 150ms ease;
  font-family: inherit;
  touch-action: manipulation;
}
.section-btn:hover { background: rgba(47, 93, 58, 0.06); }
.section-group.active .section-btn { background: var(--green-tint); }

/* Icon wrap — rounded square, elevates the sidebar feel */
.section-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  color: var(--green);
  flex-shrink: 0;
  transition: background 150ms, border-color 150ms, color 150ms;
}
.section-btn:hover .section-icon-wrap {
  background: var(--paper);
  border-color: var(--green);
}
.section-group.active .section-icon-wrap {
  background: var(--green);
  border-color: var(--green);
  color: #ffffff;
}
.memoria-nav-item.active .section-icon-wrap {
  background: var(--ink);
  border-color: var(--ink);
  color: #ffffff;
}
.section-icon { display: block; }

.section-text {
  flex: 1;
  min-width: 0;
}
.section-label {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 19px;
  font-weight: 600;
  color: var(--green);
  letter-spacing: 0.01em;
}
.section-group.active .section-label { color: var(--sienna-deep); }
.memoria-nav-item.active .section-label { color: var(--ink); }
.section-sublabel {
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}
.section-count {
  font-size: 12px;
  color: var(--ink-mute);
  background: var(--paper);
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid var(--rule);
  flex-shrink: 0;
}
.section-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-chevron {
  color: var(--ink-mute);
  transition: transform 200ms ease;
  flex-shrink: 0;
}
.section-chevron.open {
  transform: rotate(180deg);
}
.section-group.collapsed .chapter-list {
  display: none;
}
.chapter-list {
  list-style: none;
  margin: 4px 0 8px;
  padding: 0 0 0 8px;
  border-left: 1px dashed var(--rule);
  margin-left: 12px;
}
.chapter-btn {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 11px 12px;
  border-radius: 4px;
  display: flex;
  gap: 12px;
  align-items: baseline;
  cursor: pointer;
  color: var(--ink-soft);
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  transition: color 120ms ease, background 120ms ease;
}
.chapter-btn-title {
  flex: 1;
  min-width: 0;
}
.chapter-btn-status {
  margin-left: auto;
  border: 1px solid rgba(154, 106, 0, 0.3);
  border-radius: 999px;
  padding: 2px 7px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--yellow);
  background: var(--yellow-tint);
  flex-shrink: 0;
}
.chapter-btn-status.understood {
  color: var(--green);
  border-color: rgba(47, 93, 58, 0.28);
  background: var(--green-tint);
}
.chapter-btn:hover { background: rgba(177, 80, 42, 0.06); color: var(--ink); }
.chapter-btn.active {
  color: var(--sienna-deep);
  background: var(--sienna-tint);
  font-weight: 700;
}
.chapter-btn-level {
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--green);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  flex-shrink: 0;
  width: 26px;
}
.chapter-btn.active .chapter-btn-level { color: var(--sienna); }

.sidebar-footer {
  border-top: 1px solid var(--rule);
  padding: 14px 22px 22px;
}
.sidebar-sync-btn {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--green);
  border-radius: 6px;
  background: var(--green-tint);
  color: var(--green);
  padding: 11px 12px;
  margin-bottom: 12px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  touch-action: manipulation;
}
.sidebar-sync-btn:hover {
  background: var(--green);
  color: #fff;
}
.sync-modal {
  position: relative;
  width: min(620px, calc(100vw - 36px));
  border-top-color: var(--green);
}
.sync-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border: 1px solid var(--rule);
  border-radius: 50%;
  background: var(--paper-light);
  color: var(--ink-mute);
  display: grid;
  place-items: center;
  cursor: pointer;
}
.sync-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 4px;
}
.sync-stats span {
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 4px 10px;
  color: var(--green);
  background: var(--green-tint);
  font-size: 13px;
  font-family: 'Literata', Georgia, serif;
}
.sync-status-pill {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 8px 10px;
  margin-top: 12px;
  color: var(--ink-mute);
  background: var(--paper-light);
  font-size: 14px;
  line-height: 1.35;
}
.sync-status-pill.connected {
  border-color: var(--green);
  color: var(--green);
}
.sync-status-pill small {
  color: var(--ink-mute);
  font-size: 12px;
}
.sync-actions {
  justify-content: flex-start;
}
.sync-actions button:nth-last-child(-n + 2) {
  border-color: var(--green);
  background: var(--green);
  color: #fff;
}
.sync-actions button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.sync-advanced-toggle {
  width: 100%;
  border: 1px dashed var(--rule);
  background: var(--paper);
  color: var(--green);
  border-radius: 8px;
  padding: 10px 12px;
  margin-top: 14px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  cursor: pointer;
}
.sync-client-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 18px;
}
.sync-client-field span {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.sync-client-field input {
  width: 100%;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper-light);
  color: var(--ink);
  padding: 11px 12px;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 13px;
  outline: none;
}
.sync-client-field input:focus {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(47, 93, 58, 0.12);
}
.sync-help {
  font-size: 13px;
  margin-top: 8px !important;
}
.sync-message {
  margin-top: 10px;
  padding: 9px 11px;
  border: 1px solid var(--rule);
  border-radius: 7px;
  background: var(--paper-light);
  color: var(--ink-mute);
  font-size: 14px;
  line-height: 1.4;
}
.sig {
  font-family: 'Caveat', cursive;
  font-size: 18px;
  color: var(--ink-mute);
}

/* MAIN */
.book-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  height: 100vh;
}
.book-page {
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px 48px;
  width: 100%;
}
.book-page.home-page {
  max-width: 920px;
}
@media (max-width: 700px) {
  .book-page { padding: 22px 8px 36px; }
}

.home-dashboard {
  max-width: 840px;
}
.home-hero {
  padding: 10px 0 26px;
  border-bottom: 1px solid var(--rule);
}
.home-kicker,
.home-section-heading {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
}
.home-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(48px, 8vw, 86px);
  line-height: 0.95;
  color: var(--ink);
  margin: 18px 0 16px;
  font-weight: 700;
}
.home-subtitle {
  max-width: 620px;
  font-size: 22px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}
.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}
.home-primary,
.home-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Literata', Georgia, serif;
  font-weight: 700;
  touch-action: manipulation;
}
.home-primary {
  background: var(--green);
  color: #ffffff;
  border: 1px solid var(--green);
}
.home-primary:hover { background: #244a2e; }
.home-secondary {
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--rule);
}
.home-secondary:hover { border-color: var(--green); color: var(--green); }
.home-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 24px 0 30px;
}
.home-stat {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 16px;
  background: var(--paper-light);
}
.home-stat-label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 6px;
}
.home-stat strong {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 34px;
  line-height: 1;
  color: var(--sienna-deep);
}
.home-stat span:last-child {
  display: block;
  margin-top: 6px;
  color: var(--ink-soft);
  font-size: 14px;
}
.home-path {
  margin-top: 28px;
}
.home-daily,
.home-progress-map {
  margin-top: 28px;
}
.home-daily-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;
}
.home-daily-grid button {
  min-height: 126px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  text-align: left;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  touch-action: manipulation;
}
.home-daily-grid button:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.home-daily-grid span {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sienna);
  font-weight: 700;
}
.home-daily-grid strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 24px;
  line-height: 1.05;
  color: var(--ink);
}
.home-daily-grid em {
  color: var(--ink-mute);
  font-size: 13px;
  line-height: 1.35;
}
.home-progress-list {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}
.home-progress-row {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 12px 14px;
  background: var(--paper-light);
}
.home-progress-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--ink);
  font-size: 14px;
  margin-bottom: 8px;
}
.home-progress-top strong {
  color: var(--ink-mute);
}
.home-progress-track {
  height: 6px;
  border-radius: 999px;
  background: var(--rule-soft);
  overflow: hidden;
}
.home-progress-track span {
  display: block;
  height: 100%;
  background: var(--green);
  border-radius: inherit;
}
.home-recommendations {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}
.home-rec {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  text-align: left;
  border: 1px solid var(--rule);
  background: var(--paper);
  border-radius: 8px;
  padding: 14px 16px;
  color: var(--ink);
  cursor: pointer;
  touch-action: manipulation;
}
.home-rec:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.home-rec-index {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px;
  color: var(--sienna);
  font-weight: 700;
}
.home-rec-main {
  min-width: 0;
}
.home-rec-title,
.home-rec-meta {
  display: block;
}
.home-rec-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.15;
}
.home-rec-meta {
  margin-top: 2px;
  color: var(--ink-mute);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
@media (max-width: 960px) {
  .home-stats,
  .home-daily-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 700px) {
  .home-title { font-size: 48px; }
  .home-subtitle { font-size: 18px; }
  .home-stats,
  .home-daily-grid { grid-template-columns: 1fr; }
  .chapter-btn-status { display: none; }
}

.section-overview {
  max-width: 860px;
  margin: 0 auto;
}
.section-overview-hero {
  padding: 6px 0 24px;
  border-bottom: 1px solid var(--rule);
}
.section-overview .chapter-intro {
  max-width: 680px;
  margin-bottom: 22px;
}
.section-overview-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.section-overview-stats span {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper-light);
  color: var(--ink-mute);
  padding: 7px 12px;
  font-size: 13px;
}
.section-overview-stats strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 20px;
  color: var(--green);
  line-height: 1;
}
.section-lesson-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin-top: 26px;
}
.section-lesson-card {
  min-height: 260px;
  border: 1px solid var(--rule);
  border-top: 3px solid var(--green);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  padding: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  font-family: 'Literata', Georgia, serif;
  transition: border-color 140ms ease, background 140ms ease, transform 140ms ease;
  touch-action: manipulation;
}
.section-lesson-card:hover {
  border-color: var(--green);
  background: var(--green-tint);
  transform: translateY(-1px);
}
.section-lesson-card:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 3px;
}
.section-lesson-topline,
.section-lesson-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.section-lesson-index,
.section-lesson-level,
.section-lesson-status,
.section-lesson-time {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
}
.section-lesson-index {
  color: var(--sienna);
}
.section-lesson-level {
  border: 1px solid var(--rule);
  border-radius: 999px;
  color: var(--green);
  background: var(--paper-light);
  padding: 3px 8px;
}
.section-lesson-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 30px;
  line-height: 1.08;
  font-weight: 700;
  color: var(--ink);
}
.section-lesson-subtitle {
  color: var(--sienna-deep);
  font-style: italic;
  font-size: 15px;
  line-height: 1.35;
}
.section-lesson-preview {
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.section-lesson-footer {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--rule-soft);
}
.section-lesson-status {
  color: var(--ink-mute);
}
.section-lesson-time {
  color: var(--green);
}
.section-lesson-card.status-read .section-lesson-status,
.section-lesson-card.status-opened .section-lesson-status {
  color: var(--yellow);
}
.section-lesson-card.status-understood {
  border-top-color: var(--green);
}
.section-lesson-card.status-understood .section-lesson-status {
  color: var(--green);
}
@media (max-width: 700px) {
  .section-lesson-grid { grid-template-columns: 1fr; }
  .section-lesson-card { min-height: 220px; }
  .section-lesson-title { font-size: 26px; }
}

.chapter-header { margin-bottom: 32px; }
.lesson-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 18px;
  color: var(--ink-mute);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.lesson-breadcrumb button {
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper-light);
  color: var(--green);
  padding: 5px 10px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.lesson-breadcrumb button:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.lesson-breadcrumb span {
  max-width: min(460px, 62vw);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chapter-icon-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.chapter-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green-tint);
  border: 1px solid rgba(47, 93, 58, 0.18);
  color: var(--green);
  flex-shrink: 0;
}
.chapter-level-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sienna);
  margin-bottom: 0;
  font-weight: 600;
}
.chapter-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 44px;
  line-height: 1.05;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 8px;
  letter-spacing: -0.005em;
}
.chapter-subtitle {
  font-style: italic;
  color: var(--ink-mute);
  font-size: 18px;
  margin: 0;
}
.lesson-status-control {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 8px;
  border: 1px solid var(--rule-soft);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
}
.lesson-status-label {
  padding: 0 6px 0 4px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.lesson-status-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper-light);
  color: var(--ink-mute);
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  font-weight: 700;
  padding: 7px 12px;
  cursor: pointer;
  transition: color 140ms ease, border-color 140ms ease, background 140ms ease, transform 140ms ease;
}
.lesson-status-btn:hover {
  color: var(--yellow);
  border-color: var(--yellow-soft);
  background: var(--yellow-tint);
}
.lesson-status-btn:active {
  transform: scale(0.97);
}
.lesson-status-btn.active {
  color: var(--yellow);
  border-color: rgba(154, 106, 0, 0.38);
  background: var(--yellow-tint);
}
.lesson-status-btn.understood:hover {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
}
.lesson-status-btn.understood.active {
  color: #ffffff;
  border-color: var(--green);
  background: var(--green);
}
@media (max-width: 700px) {
  .lesson-status-control {
    width: 100%;
    justify-content: space-between;
    border-radius: 12px;
  }
  .lesson-status-label { display: none; }
  .lesson-status-btn {
    flex: 1;
    justify-content: center;
  }
}
.chapter-rule {
  margin-top: 22px;
  width: 64px;
  height: 2px;
  background: var(--green);
}

.chapter-intro {
  font-size: 20px;
  line-height: 1.7;
  color: var(--ink-soft);
  margin: 0 0 36px;
}
.drop-cap::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 64px;
  float: left;
  line-height: 0.85;
  margin: 6px 10px 0 0;
  color: var(--green);
}

.block { margin: 32px 0; }
.block-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: var(--green);
  font-weight: 600;
  margin: 0 0 16px;
  letter-spacing: 0.005em;
}
.inline-icon { vertical-align: -2px; margin-right: 6px; color: var(--green-soft); }

/* Conjugation */
.conjugation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}
.conjugation-card {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 16px 18px;
}
.conjugation-verb {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  color: var(--sienna-deep);
  margin-bottom: 10px;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 6px;
}
.conjugation-list {
  list-style: none;
  padding: 0; margin: 0;
}
.conjugation-list li {
  padding: 4px 0;
  font-size: 17px;
  color: var(--ink-soft);
  font-feature-settings: "liga", "kern";
}

/* Examples */
.examples-list {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column;
  gap: 14px;
}
.example-item {
  border-left: 2px solid var(--green);
  padding: 4px 0 4px 16px;
}
.example-es {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: var(--ink);
  line-height: 1.45;
}
.example-en {
  font-size: 18px;
  font-style: italic;
  margin: 5px 0 0;
  color: var(--ink);
  font-weight: 700;
  line-height: 1.5;
}

/* Rule */
.rule-list {
  margin: 0; padding: 0;
  display: grid;
  gap: 10px;
}
.rule-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--rule-soft);
}
.rule-row dt {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  color: var(--sienna-deep);
  font-size: 16px;
}
.rule-row dd {
  margin: 0;
  color: var(--ink-soft);
  font-size: 16px;
}
@media (max-width: 600px) {
  .rule-row { grid-template-columns: 1fr; gap: 4px; }
}

/* Reading */
.reading-block { padding: 8px 0; }
.reading-paragraph {
  font-size: 20px;
  line-height: 1.85;
  text-align: justify;
  text-justify: inter-word;
  margin: 0 0 18px;
  color: var(--ink);
  hyphens: none;
  -webkit-hyphens: none;
}
.reading-paragraph:first-child::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 56px;
  float: left;
  line-height: 0.85;
  margin: 6px 8px 0 0;
  color: var(--sienna);
}

/* Glossary */
.glossary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 6px 24px;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 16px 18px;
}
.glossary-row {
  display: flex;
  gap: 8px;
  align-items: baseline;
  padding: 5px 0;
  font-size: 17px;
  border-bottom: 1px dotted var(--rule);
}
.glossary-row:last-child { border-bottom: none; }
.glossary-es { font-weight: 600; color: var(--green); }
.glossary-dash { color: var(--ink-mute); }
.glossary-en { color: var(--ink-soft); font-style: italic; }

/* Vocab */
.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0 28px;
}
.vocab-row {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 1px solid var(--rule-soft);
  font-size: 17px;
}
.vocab-es { color: var(--green); font-weight: 600; }
.vocab-en { color: var(--ink-mute); font-style: italic; }

/* Palabras lab */
.palabras-lab {
  margin-top: 28px;
}
.palabras-toolbar {
  display: grid;
  grid-template-columns: 1fr minmax(220px, 280px);
  gap: 12px;
  align-items: stretch;
  margin-bottom: 16px;
}
.palabras-group-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
.palabras-tab {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink-soft);
  border-radius: 8px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  touch-action: manipulation;
}
.palabras-tab:hover {
  border-color: var(--green);
}
.palabras-tab.active {
  background: var(--green-tint);
  border-color: var(--green);
}
.palabras-tab span {
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--green);
  overflow-wrap: anywhere;
}
.palabras-tab strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 24px;
  line-height: 1;
  color: var(--sienna-deep);
}
.palabras-search {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--paper-light);
}
.palabras-search span {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 4px;
}
.palabras-search input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
  font-size: 16px;
  min-width: 0;
}
.palabras-stage {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 18px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 18px;
  background: var(--paper-light);
  margin-bottom: 14px;
}
.palabras-stage-kicker {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
}
.palabras-stage h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 32px;
  line-height: 1.1;
  margin: 6px 0 8px;
  color: var(--ink);
}
.palabras-stage p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.55;
}
.palabras-stage-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(72px, 1fr));
  gap: 8px;
  align-self: stretch;
}
.palabras-stage-stats div {
  border-left: 1px solid var(--rule);
  padding-left: 12px;
}
.palabras-stage-stats span {
  display: block;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.palabras-stage-stats strong {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 28px;
  line-height: 1.1;
  color: var(--sienna-deep);
  margin-top: 4px;
}
.palabras-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.palabras-action-btn,
.palabra-save {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink);
  border-radius: 6px;
  min-height: 34px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
  touch-action: manipulation;
}
.palabras-action-btn:hover,
.palabra-save:hover {
  border-color: var(--green);
  color: var(--green);
}
.palabras-action-btn.active {
  background: var(--ink);
  border-color: var(--ink);
  color: #ffffff;
}
.palabras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}
.palabra-card {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  min-height: 164px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.palabra-card.revealed {
  border-color: var(--green);
}
.palabra-main {
  flex: 1;
  border: none;
  background: transparent;
  text-align: left;
  padding: 14px;
  cursor: pointer;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 8px;
  touch-action: manipulation;
}
.palabra-rank {
  color: var(--ink-mute);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.palabra-es {
  color: var(--green);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 30px;
  line-height: 1.05;
  font-weight: 700;
  overflow-wrap: anywhere;
}
.palabra-en {
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.35;
  font-style: italic;
  overflow-wrap: anywhere;
}
.palabra-example {
  border-top: 1px dotted var(--rule-soft);
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 13px;
  color: var(--ink);
  line-height: 1.35;
}
.palabra-example em {
  color: var(--ink-mute);
  font-size: 12px;
}
.palabra-card-actions {
  border-top: 1px solid var(--rule-soft);
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.palabra-save {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.palabra-review-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 0 10px 8px;
}
.palabra-review-actions button {
  border: 1px solid var(--rule-soft);
  background: var(--paper-light);
  color: var(--ink-soft);
  border-radius: 5px;
  font-size: 11px;
  padding: 5px 2px;
  cursor: pointer;
  touch-action: manipulation;
}
.palabra-review-actions button:hover {
  border-color: var(--green);
  color: var(--green);
}
.palabra-review-state {
  padding: 0 10px 9px;
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.palabras-browser {
  margin-top: 18px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  overflow: hidden;
  background: var(--paper);
}
.palabras-browser-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--rule);
  background: var(--paper-light);
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.palabras-browser-head strong {
  color: var(--green);
}
.palabras-virtual-list {
  overflow-y: auto;
}
.palabras-virtual-row {
  display: grid;
  grid-template-columns: 70px 1fr 1.4fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid var(--rule-soft);
  font-size: 14px;
}
.palabras-virtual-row strong {
  color: var(--green);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px;
  line-height: 1.1;
}
.palabras-virtual-row button {
  border: 1px solid var(--rule);
  background: transparent;
  border-radius: 5px;
  padding: 5px 8px;
  cursor: pointer;
  color: var(--ink-mute);
}
.palabras-virtual-row button:hover {
  border-color: var(--green);
  color: var(--green);
}
.palabras-empty {
  border: 1px dashed var(--rule);
  border-radius: 8px;
  padding: 28px;
  display: grid;
  place-items: center;
  gap: 8px;
  color: var(--ink-mute);
  text-align: center;
}
@media (max-width: 820px) {
  .palabras-toolbar,
  .palabras-stage {
    grid-template-columns: 1fr;
  }
  .palabras-stage-stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .palabras-stage-stats div {
    border-left: none;
    border-top: 1px solid var(--rule);
    padding: 10px 0 0;
  }
}
@media (max-width: 620px) {
  .palabras-group-tabs,
  .palabras-stage-stats {
    grid-template-columns: 1fr;
  }
  .palabra-card {
    min-height: 150px;
  }
  .palabras-virtual-row {
    grid-template-columns: 52px 1fr;
  }
  .palabras-virtual-row span:nth-child(3),
  .palabras-virtual-row button {
    grid-column: 2;
  }
}

/* Phrase list */
.phrase-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 14px;
}
.phrase-item {
  display: flex; gap: 16px;
  align-items: flex-start;
}
.phrase-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--sienna);
  letter-spacing: 0.1em;
  min-width: 28px;
  padding-top: 4px;
  border-right: 1px solid var(--rule);
  text-align: right;
  padding-right: 10px;
}
.phrase-es { margin: 0; font-size: 18px; color: var(--ink); }
.phrase-en { margin: 4px 0 0; font-size: 16px; font-style: italic; color: var(--ink-mute); }

.expressions-library-block {
  --expr-tone: var(--ink);
}
.expressions-hero {
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  border-radius: 8px;
  padding: 24px;
  background: #fff;
  margin-bottom: 18px;
}
.expressions-eye {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 9px;
}
.expressions-hero h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px;
  line-height: 1.08;
  margin: 0 0 8px;
}
.expressions-hero p {
  margin: 0;
  max-width: 620px;
  font-size: 18px;
  line-height: 1.55;
  color: var(--ink-soft);
}
.expressions-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}
.expressions-stats div {
  border: 1px solid var(--rule);
  border-radius: 7px;
  padding: 10px;
  background: var(--paper-light);
}
.expressions-stats strong {
  display: block;
  font-size: 24px;
  line-height: 1;
  color: var(--ink);
}
.expressions-stats span {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.25;
  color: var(--ink-mute);
}
.expressions-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 14px;
}
.expressions-tabs button {
  --expr-tone: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: #fff;
  color: var(--expr-tone);
  padding: 8px 12px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}
.expressions-tabs button.navy,
.expression-card.navy { --expr-tone: #263656; }
.expressions-tabs button.green,
.expression-card.green { --expr-tone: #2f6b42; }
.expressions-tabs button.plum,
.expression-card.plum { --expr-tone: #624277; }
.expressions-tabs button.rose,
.expression-card.rose { --expr-tone: #8a3f59; }
.expressions-tabs button.active {
  border-color: var(--expr-tone);
  box-shadow: inset 0 -3px 0 var(--expr-tone);
}
.expressions-tabs span {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border: 1px solid currentColor;
  border-radius: 50%;
  font-size: 11px;
}
.expressions-toolbar {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
}
.expressions-toolbar label {
  position: relative;
  display: block;
}
.expressions-toolbar label svg {
  position: absolute;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ink-mute);
}
.expressions-toolbar input {
  width: 100%;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  padding: 10px 12px 10px 34px;
  font-family: 'Literata', Georgia, serif;
  font-size: 16px;
}
.expressions-count,
.expressions-pager {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper-light);
  color: var(--ink-mute);
  font-size: 14px;
  padding: 8px 10px;
  white-space: nowrap;
}
.expressions-pager {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.expressions-pager button {
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: #fff;
  color: var(--ink);
  padding: 4px 9px;
  font-family: 'Literata', Georgia, serif;
  cursor: pointer;
}
.expressions-pager button:disabled {
  opacity: 0.35;
  cursor: default;
}
.expressions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  gap: 12px;
}
.expression-card {
  --expr-tone: var(--ink);
  border: 1px solid var(--rule);
  border-top: 4px solid var(--expr-tone);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}
.expression-card header {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 13px 14px;
}
.expression-rank {
  flex: 0 0 auto;
  min-width: 34px;
  border: 1px solid var(--expr-tone);
  border-radius: 5px;
  color: var(--expr-tone);
  padding: 2px 5px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  text-align: center;
}
.expression-card h3 {
  margin: 0;
  color: var(--expr-tone);
  font-size: 19px;
  line-height: 1.24;
}
.expression-card h3 .speak-btn {
  margin-right: 6px;
}
.expression-card p {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.4;
  color: var(--ink-mute);
}
.expression-example {
  border-top: 1px solid var(--rule-soft);
  padding: 11px 14px 13px 57px;
  background: var(--paper-light);
}
.expression-example-label {
  display: block;
  margin-bottom: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.expression-example p {
  margin: 0;
  color: var(--ink);
  font-size: 16px;
  font-style: italic;
  line-height: 1.55;
}
.expression-example p .speak-btn {
  margin-right: 6px;
  vertical-align: 0.1em;
}
.expressions-empty {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 36px 20px;
  display: grid;
  justify-items: center;
  gap: 10px;
  color: var(--ink-mute);
}
.expressions-foot {
  margin-top: 18px;
  text-align: center;
  color: var(--ink-mute);
  font-size: 12px;
  line-height: 1.6;
}

/* Steps */
.steps-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 18px;
}
.step-item {
  display: flex; gap: 18px;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 18px 20px;
}
.step-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--sienna);
  line-height: 1;
  min-width: 30px;
}
.step-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  margin: 0 0 4px;
  color: var(--green);
  font-weight: 600;
}
.step-text { margin: 0; color: var(--ink-soft); font-size: 15.5px; }

/* Big takeaways */
.big-takeaways {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.big-takeaway-card {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 22px;
  position: relative;
  overflow: hidden;
}
.big-takeaway-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 3px;
  background: var(--green);
}
.big-takeaway-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  color: var(--sienna);
  font-weight: 600;
  margin-bottom: 8px;
}
.big-takeaway-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  margin: 0 0 8px;
  color: var(--ink);
  font-weight: 600;
  line-height: 1.25;
}
.big-takeaway-text {
  margin: 0;
  font-size: 14.5px;
  color: var(--ink-soft);
  line-height: 1.55;
}

/* Tip & Takeaway */
.tip-block {
  background: var(--green-tint);
  border-left: 3px solid var(--green);
  padding: 16px 20px 16px 18px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  border-radius: 0 4px 4px 0;
}
.tip-icon { color: var(--green); flex-shrink: 0; margin-top: 2px; }
.tip-block p { margin: 0; font-size: 15.5px; color: var(--ink-soft); font-style: italic; }

.takeaway-block {
  background: var(--sienna-tint);
  border: 1px solid #e8c8af;
  border-radius: 4px;
  padding: 18px 22px;
  margin-top: 36px;
}
.takeaway-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  margin-bottom: 8px;
  font-weight: 600;
}
.takeaway-block p {
  margin: 0;
  font-size: 16px;
  color: var(--ink);
  line-height: 1.6;
}

/* Chapter nav */
.chapter-nav {
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 14px 16px;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  color: var(--ink-soft);
  transition: background 150ms ease, border-color 150ms ease;
}
.nav-btn:hover {
  background: var(--paper-light);
  border-color: var(--green);
}
.nav-btn.next { justify-content: flex-end; }
.nav-eyebrow {
  font-size: 10.5px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 2px;
}
.nav-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--green);
  font-weight: 600;
}

/* Level bar (the bottom of your sketch) */
.level-bar {
  border-top: 1px solid var(--rule);
  background: var(--paper-light);
  position: sticky;
  bottom: 0;
}
.level-bar-inner {
  max-width: 720px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
}
@media (max-width: 700px) {
  .level-bar-inner { padding: 8px 8px; gap: 8px; }
}
.level-bar-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 600;
}
.level-pills {
  display: flex;
  gap: 6px;
  flex: 1;
  justify-content: center;
}
.level-pill {
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 5px 14px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 13.5px;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 150ms ease;
}
.level-pill:hover { border-color: var(--green); color: var(--green); }
.level-pill.active {
  background: var(--green);
  color: var(--paper-light);
  border-color: var(--green);
}
.level-bar-counter {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  min-width: 50px;
  text-align: right;
}

.empty {
  text-align: center;
  padding: 80px 20px;
  color: var(--ink-mute);
}
.empty p { font-style: italic; margin-top: 8px; }

/* Better default scrollbars on webkit */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(120, 100, 70, 0.18);
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover { background: rgba(120, 100, 70, 0.32); }

/* ===== VERB TABLE (Top 10) — small-screen e-ink layout ===== */
.verb-table-block {
  margin: 24px 0 48px;
}
.participles {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 16px 20px 14px;
  margin-bottom: 30px;
}
.participles-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 600;
  margin-bottom: 10px;
}
.participles-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.participles-row {
  display: flex;
  gap: 16px;
  font-size: 17px;
  align-items: baseline;
}
.participles-key {
  width: 92px;
  color: var(--ink-mute);
  font-style: italic;
}
.participles-val {
  color: var(--ink);
  font-weight: 700;
}
.verb-table-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  color: var(--ink);
  font-weight: 600;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 8px;
  margin: 28px 0 22px;
  letter-spacing: 0.005em;
}
.verb-table-title em {
  color: var(--green);
  font-style: italic;
}
.tense-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.tense-block {
  break-inside: avoid;
}
.tense-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--sienna-deep);
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.tense-rows {
  display: grid;
  grid-template-columns: 150px 1fr;
  row-gap: 10px;
  column-gap: 22px;
  border-top: 1px solid var(--rule);
  padding-top: 12px;
}
.tense-pronoun {
  color: var(--ink-mute);
  font-size: 18px;
  padding: 6px 0;
  font-style: italic;
}
.tense-form {
  font-size: 22px;
  font-family: 'Literata', Georgia, serif;
  color: var(--ink);
  padding: 6px 0;
  font-feature-settings: "liga", "kern";
  letter-spacing: 0.005em;
  font-weight: 700;
}
.tense-form .irreg,
.participles-val .irreg {
  color: var(--red);
  font-weight: 700;
}
.tense-form .ending,
.participles-val .ending {
  color: var(--blue);
  font-weight: 700;
}
/* Endings inside lesson-table cells (used in the Tiempos chapter) */
.lesson-table .ending {
  color: var(--blue);
  font-weight: 700;
}
.lesson-table .irreg {
  color: var(--red);
  font-weight: 700;
}
.verb-legend {
  margin-top: 28px;
  padding-top: 14px;
  border-top: 1px dashed var(--rule);
  font-size: 13px;
  color: var(--ink-mute);
  font-style: italic;
  text-align: center;
}
.verb-legend .irreg { color: var(--red); font-weight: 700; }

/* Verb-table chapters: skip the drop-cap (no intro paragraph anyway) */
.chapter-body:has(.verb-table-block) .chapter-rule { background: var(--sienna); }

/* Smaller-screen tightening for the BOOX */
@media (max-width: 700px) {
  .tense-rows { grid-template-columns: 120px 1fr; column-gap: 14px; row-gap: 8px; }
  .tense-pronoun { font-size: 17px; padding: 5px 0; }
  .tense-form { font-size: 21px; padding: 5px 0; }
  .participles-key { width: 88px; font-size: 17px; }
  .participles-val { font-size: 18px; }
  .participles-row { font-size: 18px; }
}

/* ===== Side-by-side tense table (e.g., HABER's Presente · Pretérito · Imperfecto) ===== */
.tense-group-table {
  width: 100%;
  border-collapse: collapse;
  margin: 6px 0 4px;
  table-layout: fixed;
}
.tense-group-table th,
.tense-group-table td {
  text-align: left;
  vertical-align: baseline;
  padding: 10px 16px;
  border-left: 1px solid var(--rule);
}
.tense-group-table th:first-child,
.tense-group-table td:first-child {
  border-left: none;
  padding-left: 0;
  padding-right: 18px;
}
.tense-group-table thead th {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--sienna-deep);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 13px;
  padding-top: 0;
}
.tense-group-table tbody th.tg-pronoun {
  font-family: 'Literata', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  color: var(--ink-mute);
  font-size: 18px;
  white-space: nowrap;
  padding-right: 18px;
}
.tense-group-table tbody td.tg-form {
  font-family: 'Literata', Georgia, serif;
  font-size: 22px;
  color: var(--ink);
  font-feature-settings: "liga", "kern";
  letter-spacing: 0.005em;
  font-weight: 700;
}
.tense-group-table tbody tr + tr th,
.tense-group-table tbody tr + tr td {
  border-top: 1px dotted var(--rule-soft);
}
.tense-group-table .irreg {
  color: var(--red);
  font-weight: 700;
}
.tense-group-table .ending {
  color: var(--blue);
  font-weight: 700;
}

@media (max-width: 700px) {
  .tense-group-table th,
  .tense-group-table td { padding: 9px 12px; }
  .tense-group-table th:first-child,
  .tense-group-table td:first-child { padding-right: 14px; }
  .tense-group-table tbody th.tg-pronoun { font-size: 17px; padding-right: 14px; }
  .tense-group-table tbody td.tg-form { font-size: 21px; }
  .tense-group-table thead th { font-size: 14px; letter-spacing: 0.14em; }
}

/* Inline example pair — short Spanish + (translation) on the same line */
.inline-pair {
  display: block;
}
.inline-pair .inline-en {
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  margin-left: 4px;
  display: inline;
}

/* ===== VERB-USES (dictionary-style senses) ===== */
.verb-uses-block {
  margin: 48px 0 24px;
  border-top: 2px solid var(--ink);
  padding-top: 28px;
}
.verb-uses-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  font-weight: 700;
  margin: 0 0 24px;
}
.vu-category {
  margin-bottom: 32px;
  break-inside: avoid;
}
.vu-category-head {
  margin-bottom: 16px;
  border-bottom: 1px dotted var(--rule);
  padding-bottom: 8px;
}
.vu-category-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: var(--ink);
  font-weight: 700;
  letter-spacing: 0.01em;
  font-style: italic;
}
.vu-category-note {
  font-size: 16px;
  color: var(--ink);
  font-style: italic;
  margin-top: 4px;
  letter-spacing: 0.01em;
}
.vu-senses {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 4px;
}
.vu-sense {
  display: grid;
  grid-template-columns: 36px 1fr;
  column-gap: 14px;
  align-items: baseline;
  break-inside: avoid;
}
.vu-sense-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--sienna);
  text-align: right;
  letter-spacing: 0.04em;
  padding-top: 2px;
}
.vu-sense-body {
  border-left: 1px solid var(--rule);
  padding-left: 14px;
}
.vu-sense-meaning {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  font-weight: 600;
  color: var(--sienna-deep);
  letter-spacing: 0.01em;
  line-height: 1.4;
  font-style: italic;
}
.vu-sense-subnote {
  font-size: 16px;
  color: var(--ink);
  font-style: italic;
  margin-top: 4px;
  line-height: 1.45;
}
.vu-examples {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vu-examples li {
  padding: 4px 0 4px 0;
}
.vu-examples li + li {
  border-top: 1px dotted var(--rule-soft);
  padding-top: 10px;
}
.vu-ex-es {
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
  line-height: 1.5;
}
.vu-ex-en {
  font-size: 18px;
  color: var(--ink);
  font-style: italic;
  margin-top: 5px;
  line-height: 1.5;
  font-weight: 700;
}

@media (max-width: 700px) {
  .verb-uses-block { padding-top: 22px; margin: 36px 0 16px; }
  .verb-uses-heading { font-size: 12px; letter-spacing: 0.22em; margin-bottom: 18px; }
  .vu-category-label { font-size: 20px; }
  .vu-category-note { font-size: 15px; }
  .vu-sense { grid-template-columns: 30px 1fr; column-gap: 10px; }
  .vu-sense-num { font-size: 15px; }
  .vu-sense-body { padding-left: 12px; }
  .vu-sense-meaning { font-size: 18px; }
  .vu-sense-subnote { font-size: 15px; }
  .vu-ex-es { font-size: 21px; }
  .vu-ex-en { font-size: 17px; }
}

/* ===== Foldable Grammar (Gramática section) ===== */
/* ===== Foldable Biographies (Lectura — Dos Biografías) ===== */
/* ===== Foldable Poems (Lectura — Poemas) ===== */
.foldable-poems {
  margin: 24px 0;
  border-top: 2px solid var(--ink);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.poem-item {
  border: 1px solid var(--rule);
  border-radius: 4px;
  overflow: hidden;
}
.poem-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(28, 28, 26, 0.06);
}
.poem-toggle:hover { background: rgba(28, 28, 26, 0.03); }
.poem-toggle:active { background: var(--rule-soft); }
.poem-item.open .poem-toggle {
  background: var(--ink);
}
.poem-toggle-inner {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  min-width: 0;
}
.poem-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: var(--ink-mute);
  font-weight: 700;
  flex-shrink: 0;
  padding-top: 5px;
}
.poem-item.open .poem-num { color: rgba(255,255,255,0.5); }
.poem-toggle-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.poem-title-line {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.1;
  font-style: italic;
}
.poem-item.open .poem-title-line { color: #ffffff; }
.poem-attribution {
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  color: var(--ink-mute);
  line-height: 1.3;
}
.poem-item.open .poem-attribution { color: rgba(255,255,255,0.6); }
.poem-toggle-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.poem-level-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 3px 10px;
}
.poem-item.open .poem-level-tag {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.8);
}
.poem-chevron {
  color: var(--ink-mute);
  transition: transform 220ms ease;
  flex-shrink: 0;
}
.poem-item.open .poem-chevron { color: rgba(255,255,255,0.7); }
.poem-chevron.open { transform: rotate(180deg); }

/* Body */
.poem-body {
  padding: 32px 20px 36px;
  animation: fold-open 240ms ease-out;
}
.poem-intro-note {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.68;
  color: var(--ink-soft);
  font-style: italic;
  margin: 0 0 20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted var(--rule);
}
.poem-opening-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-style: italic;
  color: var(--ink);
  border-left: 3px solid var(--ink);
  margin: 0 0 30px;
  padding: 10px 0 10px 18px;
  line-height: 1.45;
}

/* Stanzas — numbered, ES then EN */
.poem-stanzas {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.poem-stanza {
  display: grid;
  grid-template-columns: 22px 1fr 1fr;
  column-gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--rule-soft);
  align-items: start;
}
.poem-stanza:last-child { border-bottom: none; }
.poem-stanza-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  padding-top: 3px;
  font-weight: 700;
  text-align: right;
}
.poem-stanza-es {
  font-family: 'Literata', Georgia, serif;
  font-size: 20px;
  line-height: 1.72;
  color: var(--ink);
  font-weight: 600;
}
.poem-stanza-en {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.72;
  color: var(--ink-mute);
  font-style: italic;
}

/* Vocab block */
.poem-vocab-block {
  margin-top: 30px;
  padding: 18px 20px;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
}
.poem-vocab-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
  margin-bottom: 14px;
}
.poem-vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 8px 24px;
}
.poem-vocab-row {
  display: flex;
  gap: 8px;
  align-items: baseline;
  font-size: 16px;
  padding: 4px 0;
  border-bottom: 1px dotted var(--rule-soft);
}
.poem-vocab-row:last-child { border-bottom: none; }
.poem-vocab-es {
  font-weight: 700;
  color: var(--ink);
  flex-shrink: 0;
}
.poem-vocab-dash { color: var(--ink-mute); flex-shrink: 0; }
.poem-vocab-en {
  color: var(--ink-mute);
  font-style: italic;
}

/* Learning note */
.poem-learning-note {
  margin-top: 22px;
  background: var(--green-tint);
  border-left: 3px solid var(--green);
  border-radius: 0 4px 4px 0;
  padding: 16px 18px;
}
.poem-learning-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 8px;
  font-weight: 700;
}
.poem-learning-note p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: var(--ink-soft);
  font-style: italic;
}

.foldable-songs {
  border-top-color: var(--green);
}
.song-body {
  background: linear-gradient(180deg, rgba(238, 247, 230, 0.36), rgba(255, 255, 255, 0));
}
.song-sections {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.song-section {
  border: 1px solid var(--rule-soft);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.64);
  padding: 16px;
}
.song-section-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 12px;
}
.song-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: start;
}
.song-lyric-es,
.song-lyric-en {
  margin: 0;
  white-space: pre-line;
}
.song-lyric-es {
  font-family: 'Literata', Georgia, serif;
  font-size: 18px;
  line-height: 1.7;
  color: var(--ink);
  font-weight: 600;
}
.song-lyric-en {
  font-family: 'Literata', Georgia, serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--ink-mute);
  font-style: italic;
}
.song-vocab-block {
  background: rgba(238, 247, 230, 0.48);
}

@media (max-width: 700px) {
  .poem-toggle { padding: 18px 12px; }
  .poem-title-line { font-size: 24px; }
  .poem-opening-quote { font-size: 20px; }
  .poem-stanza {
    grid-template-columns: 18px 1fr;
    row-gap: 8px;
  }
  .poem-stanza-en {
    grid-column: 2;
    padding-top: 8px;
    border-top: 1px dotted var(--rule-soft);
    color: var(--ink-mute);
  }
  .poem-stanza-es { font-size: 18px; }
  .poem-stanza-en { font-size: 16px; }
  .poem-vocab-grid { grid-template-columns: 1fr; }
  .poem-learning-note p { font-size: 15px; }
  .song-section-grid { grid-template-columns: 1fr; }
  .song-lyric-en {
    padding-top: 10px;
    border-top: 1px dotted var(--rule-soft);
  }
}

.foldable-bios {
  margin: 24px 0;
  border-top: 2px solid var(--ink);
  display: flex;
  flex-direction: column;
  gap: 0;
}
.bio-item {
  border-bottom: 1px solid var(--rule);
  margin-bottom: 12px;
  border: 1px solid var(--rule);
  border-radius: 4px;
}
.bio-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 20px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(28, 28, 26, 0.06);
}
.bio-toggle:hover { background: rgba(28, 28, 26, 0.03); }
.bio-toggle:active { background: var(--rule-soft); }
.bio-item.open .bio-toggle { background: var(--paper-light); }
.bio-toggle-left {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  min-width: 0;
}
.bio-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  letter-spacing: 0.16em;
  color: var(--ink-mute);
  font-weight: 700;
  min-width: 26px;
  flex-shrink: 0;
  padding-top: 4px;
}
.bio-toggle-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.bio-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.1;
}
.bio-item.open .bio-name { color: var(--ink); }
.bio-subtitle-line {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  line-height: 1.3;
}
.bio-dates {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
}
.bio-toggle-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
}
.bio-level-pills {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.bio-level-badge {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid;
  flex-shrink: 0;
}
.bio-chevron {
  color: var(--ink-mute);
  transition: transform 220ms ease;
  flex-shrink: 0;
}
.bio-chevron.open { transform: rotate(180deg); }
.bio-body {
  padding: 0 4px 32px;
  animation: fold-open 240ms ease-out;
}
.bio-section {
  margin: 0;
  padding: 28px 0;
  border-bottom: 1px solid var(--rule-soft);
}
.bio-section:last-child { border-bottom: none; }
.bio-section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.bio-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--ink);
  font-style: italic;
  letter-spacing: 0.005em;
}
.bio-paragraph {
  font-family: 'Literata', Georgia, serif;
  font-size: 26px;
  line-height: 1.72;
  color: var(--ink);
  margin: 0 0 20px;
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
}
.bio-paragraph:last-of-type { margin-bottom: 0; }
.bio-paragraph:first-of-type::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 46px;
  float: left;
  line-height: 0.85;
  margin: 6px 8px 0 0;
  color: var(--ink-mute);
}
.bio-vocab {
  margin-top: 16px;
  padding: 10px 14px;
  background: var(--paper-light);
  border-left: 2px solid var(--rule);
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  line-height: 1.55;
}
.bio-vocab-label {
  font-family: 'Cormorant Garamond', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-right: 8px;
}

@media (max-width: 700px) {
  .bio-toggle { padding: 16px 4px; gap: 10px; }
  .bio-num { font-size: 13px; min-width: 22px; }
  .bio-name { font-size: 22px; }
  .bio-subtitle-line { font-size: 13px; }
  .bio-dates { font-size: 12px; }
  .bio-section-title { font-size: 22px; }
  .bio-paragraph { font-size: 22px; line-height: 1.65; }
  .bio-paragraph:first-of-type::first-letter { font-size: 48px; }
  .bio-vocab { font-size: 14px; }
}

.foldable-grammar {
  margin: 24px 0;
  border-top: 2px solid var(--green);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.gl-item {
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.62);
  overflow: hidden;
}
.gl-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(47, 93, 58, 0.12);
}
.gl-toggle:hover { background: rgba(47, 93, 58, 0.04); }
.gl-toggle:active { background: var(--green-tint); }
.gl-item.open .gl-toggle {
  background: var(--green-tint);
  border-bottom: 1px solid var(--rule-soft);
}
.gl-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  letter-spacing: 0.16em;
  color: var(--green);
  font-weight: 700;
  min-width: 28px;
  flex-shrink: 0;
}
.gl-level-badge {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--ink-mute);
  font-weight: 700;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 9px;
  flex-shrink: 0;
}
.gl-item.open .gl-level-badge {
  border-color: var(--green);
  color: var(--green);
}
.gl-toggle-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.gl-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.005em;
  line-height: 1.15;
}
.gl-item.open .gl-title { color: var(--green); }
.gl-status-pill,
.story-status-pill {
  border: 1px solid rgba(154, 106, 0, 0.3);
  border-radius: 999px;
  padding: 3px 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--yellow);
  background: var(--yellow-tint);
  flex-shrink: 0;
}
.gl-status-pill.understood,
.story-status-pill.understood {
  color: var(--green);
  border-color: rgba(47, 93, 58, 0.28);
  background: var(--green-tint);
}
.gl-subtitle {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gl-chevron {
  color: var(--ink-mute);
  flex-shrink: 0;
  transition: transform 220ms ease;
}
.gl-chevron.open {
  transform: rotate(180deg);
  color: var(--green);
}
.gl-body {
  padding: 22px 20px 30px;
  background: linear-gradient(180deg, rgba(238, 247, 230, 0.28), rgba(255, 255, 255, 0));
  animation: fold-open 240ms ease-out;
}
.gl-body .lesson-status-control {
  margin: 0 0 22px;
}
.gl-intro {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink-soft);
  font-style: italic;
  margin: 0 0 22px;
  padding-bottom: 18px;
  border-bottom: 1px dotted var(--rule);
}
.gl-section {
  margin: 22px 0;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--rule-soft);
}
.gl-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.gl-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: var(--green);
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: 0.01em;
}
.gl-text {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 12px;
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
}
.gl-table thead th {
  color: var(--green) !important;
}
.gl-examples {
  list-style: none;
  margin: 14px 0 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 2px solid var(--green);
}
.gl-examples li {
  padding: 8px 0;
}
.gl-examples li + li {
  border-top: 1px dotted var(--rule-soft);
}
.gl-ex-es {
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.45;
}
.gl-ex-en {
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  color: var(--ink);
  margin-top: 3px;
  line-height: 1.4;
}
.gl-ex-es.inline-pair .inline-en {
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
}
.gl-tip {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: var(--green-tint);
  border-left: 3px solid var(--green);
  padding: 14px 16px;
  margin: 18px 0 0;
  border-radius: 0 4px 4px 0;
}
.gl-tip-icon {
  color: var(--green);
  flex-shrink: 0;
  margin-top: 2px;
}
.gl-tip p {
  margin: 0;
  font-size: 16px;
  color: var(--ink-soft);
  font-style: italic;
  line-height: 1.55;
}
.gl-takeaway {
  background: var(--sienna-tint);
  border: 1px solid #e8c8af;
  border-radius: 4px;
  padding: 16px 18px;
  margin: 18px 0 0;
}
.gl-takeaway-label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  margin-bottom: 6px;
  font-weight: 700;
}
.gl-takeaway p {
  margin: 0;
  font-size: 16px;
  color: var(--ink);
  line-height: 1.6;
}

@media (max-width: 700px) {
  .foldable-grammar { gap: 12px; }
  .gl-toggle { padding: 16px 12px; gap: 10px; }
  .gl-num { font-size: 13px; min-width: 22px; }
  .gl-title { font-size: 19px; }
  .gl-subtitle { font-size: 13px; }
  .gl-status-pill { display: none; }
  .gl-body { padding: 18px 14px 24px; }
  .gl-intro { font-size: 16px; }
  .gl-heading { font-size: 18px; }
  .gl-text { font-size: 16px; }
  .gl-ex-es { font-size: 18px; }
  .gl-ex-en { font-size: 15px; }
  .gl-tip p { font-size: 15px; }
  .gl-takeaway p { font-size: 15px; }
}

/* ===== Grammar Lesson Sections ===== */
/* ===== Foldable Stories (Lectura section) ===== */
.foldable-stories {
  margin: 24px 0;
  border-top: 2px solid var(--ink);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.story-item {
  border: 1px solid var(--rule);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.62);
  overflow: hidden;
  break-inside: avoid;
}
.story-item.open .story-toggle {
  background: var(--paper-light);
  border-bottom: 1px solid var(--rule-soft);
}
.story-body {
  padding: 0 4px 28px;
  animation: fold-open 240ms ease-out;
}
.story-section {
  padding: 28px 0 0;
  border-bottom: none;
}
.story-section .lesson-status-control {
  margin: 0 0 22px;
}
.story-paragraph:first-of-type {
  margin-top: 0;
}
.fold-item {
  border-bottom: 1px solid var(--rule);
  break-inside: avoid;
}
.fold-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 18px 6px 18px 4px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  font-family: 'Literata', Georgia, serif;
  color: var(--ink);
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(177, 80, 42, 0.15);
}
.fold-toggle:hover { background: rgba(177, 80, 42, 0.04); }
.fold-toggle:active { background: var(--sienna-tint); }
.fold-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.18em;
  color: var(--sienna);
  font-weight: 700;
  min-width: 26px;
  flex-shrink: 0;
}
.fold-level {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  color: var(--green);
  font-weight: 700;
  min-width: 28px;
  flex-shrink: 0;
}
.fold-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--ink);
  flex: 1;
  letter-spacing: 0.005em;
  line-height: 1.2;
}
.fold-item.open .fold-title {
  color: var(--sienna-deep);
}
.fold-chevron {
  color: var(--ink-mute);
  flex-shrink: 0;
  transition: transform 220ms ease;
}
.fold-chevron.open {
  transform: rotate(180deg);
  color: var(--sienna-deep);
}
.fold-body {
  padding: 4px 0 24px 4px;
  animation: fold-open 240ms ease-out;
}
.fold-body .reading-paragraph {
  font-size: 19px;
  line-height: 1.85;
  text-align: justify;
  text-justify: inter-word;
  margin: 0 0 16px;
  color: var(--ink);
  hyphens: none;
  -webkit-hyphens: none;
}
.fold-body .reading-paragraph:first-child::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 48px;
  float: left;
  line-height: 0.85;
  margin: 6px 8px 0 0;
  color: var(--sienna);
}
.fold-body .reading-paragraph:last-child {
  margin-bottom: 0;
}
@keyframes fold-open {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 700px) {
  .story-toggle { padding: 16px 4px; gap: 10px; }
  .story-status-pill { display: none; }
  .story-body { padding: 0 2px 22px; }
  .fold-toggle { padding: 16px 4px 16px 2px; gap: 10px; }
  .fold-num { font-size: 13px; min-width: 22px; }
  .fold-level { font-size: 11px; min-width: 24px; }
  .fold-title { font-size: 19px; }
  .fold-body { padding: 2px 0 20px 2px; }
  .fold-body .reading-paragraph { font-size: 18px; line-height: 1.75; }
  .fold-body .reading-paragraph:first-child::first-letter { font-size: 42px; }
}

.lesson-section {
  margin: 28px 0;
  break-inside: avoid;
}
.lesson-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  color: var(--ink);
  font-weight: 700;
  margin: 0 0 14px;
  letter-spacing: 0.005em;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 8px;
}
.lesson-text {
  font-size: 19px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 14px;
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
}
.lesson-text:last-child { margin-bottom: 0; }
.lesson-table-wrap {
  margin: 16px 0;
  overflow-x: auto;
}
.lesson-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 17px;
}
.lesson-table th,
.lesson-table td {
  text-align: left;
  vertical-align: baseline;
  padding: 10px 14px;
  border-bottom: 1px solid var(--rule);
}
.lesson-table thead th {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  font-weight: 700;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 11px;
}
.lesson-table tbody td {
  font-size: 18px;
  color: var(--ink);
  font-weight: 700;
}
.lesson-table tbody td:first-child {
  font-weight: 400;
  font-style: italic;
  color: var(--ink-mute);
}
.lesson-examples {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 2px solid var(--green);
  padding-left: 16px;
}
.lesson-examples li {
  padding: 4px 0;
}
.lesson-examples li + li {
  border-top: 1px dotted var(--rule-soft);
  padding-top: 10px;
}
.lesson-ex-es {
  font-size: 20px;
  font-weight: 700;
  color: var(--ink);
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
  line-height: 1.45;
}
.lesson-ex-en {
  font-size: 17px;
  font-style: italic;
  color: var(--ink);
  margin-top: 4px;
  font-weight: 700;
  line-height: 1.45;
}

.indicative-hero-block {
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  border-radius: 8px;
  padding: 28px;
  background: #fff;
}
.indicative-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 10px;
}
.indicative-hero-block h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px;
  line-height: 1.08;
  margin: 0 0 12px;
}
.indicative-hero-block p {
  font-size: 19px;
  line-height: 1.55;
  max-width: 680px;
  margin: 0 0 16px;
}
.indicative-formula,
.indicative-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.indicative-formula {
  margin-bottom: 14px;
}
.indicative-formula span,
.indicative-tags span {
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 7px 12px;
  font-weight: 800;
  background: var(--paper-light);
}
.indicative-formula .operator {
  border: none;
  background: transparent;
  padding-inline: 2px;
  color: var(--ink-mute);
}
.indicative-tags span {
  font-size: 13px;
  color: var(--ink-mute);
}
.indicative-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.indicative-card {
  --tone: var(--ink);
  border: 1px solid var(--rule);
  border-top: 5px solid var(--tone);
  border-radius: 8px;
  padding: 18px;
  background: #fff;
  cursor: pointer;
  transition: border-color 120ms, box-shadow 120ms, transform 120ms;
}
.indicative-card.green { --tone: #2f6b42; }
.indicative-card.red { --tone: #8a3a3a; }
.indicative-card.teal { --tone: #2c6868; }
.indicative-card.purple { --tone: #6c4a7d; }
.indicative-card.gold { --tone: #8b6a24; }
.indicative-card.navy { --tone: #333b50; }
.indicative-card.active {
  border-color: var(--ink);
  box-shadow: inset 0 0 0 2px var(--ink);
}
.indicative-card:hover {
  transform: translateY(-1px);
}
.indicative-card-head {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 10px;
}
.indicative-card-mark {
  width: 34px;
  height: 34px;
  border: 1px solid var(--tone);
  color: var(--tone);
  border-radius: 7px;
  display: grid;
  place-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  flex: 0 0 auto;
}
.indicative-card-head h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 25px;
  line-height: 1.1;
  margin: 0;
}
.indicative-card-head p {
  margin: 3px 0 0;
  color: var(--ink-mute);
  font-style: italic;
}
.indicative-card-use {
  font-size: 16px;
  line-height: 1.55;
  margin: 0 0 12px;
}
.indicative-conj-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 12px;
}
.indicative-conj-table td {
  padding: 7px 8px;
  border-bottom: 1px solid var(--rule-soft);
}
.indicative-conj-table tr:nth-child(odd) td {
  background: var(--paper-light);
}
.indicative-conj-table td:first-child {
  color: var(--ink-mute);
  font-style: italic;
  width: 40%;
}
.indicative-conj-table td:last-child {
  font-weight: 800;
}
.indicative-example {
  border-left: 3px solid var(--tone);
  padding-left: 12px;
}
.participle-workshop-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.participle-workshop-grid article {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 18px;
  background: #fff;
}
.participle-workshop-grid h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 25px;
  margin: 0 0 10px;
}
.participle-workshop-grid table {
  width: 100%;
  border-collapse: collapse;
}
.participle-workshop-grid td {
  padding: 8px;
  border-bottom: 1px solid var(--rule-soft);
}
.participle-workshop-grid td:first-child {
  color: var(--ink-mute);
}
.participle-workshop-grid td:last-child {
  font-weight: 800;
}
.indicative-timeline-wrap {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 34px 22px 42px;
  background: #fff;
  overflow-x: auto;
}
.indicative-timeline-line {
  position: relative;
  min-width: 620px;
  height: 120px;
  border-top: 2px solid var(--ink);
  margin-top: 48px;
}
.indicative-timeline-line::after {
  content: '';
  position: absolute;
  right: 0;
  top: -6px;
  width: 10px;
  height: 10px;
  border-top: 2px solid var(--ink);
  border-right: 2px solid var(--ink);
  transform: rotate(45deg);
  background: #fff;
}
.indicative-timeline-event {
  --tone: var(--ink);
  position: absolute;
  transform: translateX(-50%);
  display: grid;
  justify-items: center;
  text-align: center;
  width: 110px;
}
.indicative-timeline-event.green { --tone: #2f6b42; }
.indicative-timeline-event.red { --tone: #8a3a3a; }
.indicative-timeline-event.teal { --tone: #2c6868; }
.indicative-timeline-event.purple { --tone: #6c4a7d; }
.indicative-timeline-event.gold { --tone: #8b6a24; }
.indicative-timeline-event.navy { --tone: #333b50; }
.indicative-timeline-event.top {
  top: -54px;
}
.indicative-timeline-event.bottom {
  top: 18px;
}
.indicative-timeline-event.now {
  top: -16px;
}
.timeline-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 2px solid var(--tone);
  background: #fff;
  margin-bottom: 5px;
}
.indicative-timeline-event strong {
  color: var(--tone);
  font-size: 12px;
  line-height: 1.1;
}
.indicative-timeline-event em {
  color: var(--ink-mute);
  font-size: 11px;
  line-height: 1.15;
}

.subj-hero-block {
  background: #fff;
  color: var(--ink);
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  border-radius: 8px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}
.subj-hero-block::after {
  content: '';
  position: absolute;
  right: 24px;
  top: 24px;
  width: 92px;
  height: 92px;
  border: 1px solid var(--rule);
  transform: rotate(12deg);
}
.subj-hero-eyebrow,
.golden-rule-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.subj-hero-eyebrow { color: var(--ink-mute); margin-bottom: 10px; }
.subj-hero-block h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px;
  line-height: 1.08;
  margin: 0 0 10px;
  max-width: 650px;
}
.subj-hero-accent {
  color: var(--ink);
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 18px;
}
.subj-hero-formula,
.conditional-formula {
  display: inline-block;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 10px 13px;
  font-weight: 800;
  margin-bottom: 16px;
}
.subj-hero-block ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 8px;
  max-width: 650px;
}
.golden-rule-block {
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  background: #fff;
  border-radius: 0 8px 8px 0;
  padding: 22px;
}
.golden-rule-label { color: var(--ink-mute); margin-bottom: 8px; }
.golden-rule-block p {
  margin: 0 0 14px;
  font-size: 19px;
  line-height: 1.55;
}
.golden-rule-examples {
  display: grid;
  gap: 10px;
}
.golden-rule-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.golden-rule-pair div {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 10px 12px;
  font-weight: 800;
}
.golden-rule-pair span {
  display: block;
  color: var(--ink-mute);
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.subj-tense-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}
.subj-tense-tabs button {
  border: 1px solid var(--rule);
  background: var(--paper-light);
  color: var(--ink);
  border-radius: 8px;
  padding: 12px 14px;
  text-align: left;
  font-family: 'Literata', Georgia, serif;
  font-weight: 800;
  cursor: pointer;
}
.subj-tense-tabs span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 12px;
  background: #fff;
}
.subj-tense-tabs button.active {
  border-color: var(--ink);
  background: #fff;
  color: var(--ink);
  box-shadow: inset 0 -3px 0 var(--ink);
}
.subj-tense-card {
  border: 1px solid var(--ink);
  border-top: 5px solid var(--ink);
  border-radius: 8px;
  padding: 22px;
  background: #fff;
}
.subj-tense-card.rose { border-top-color: var(--ink); }
.subj-tense-head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
  margin-bottom: 14px;
}
.subj-tense-head h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  line-height: 1.1;
  margin: 0;
}
.subj-tense-head p { margin: 4px 0 0; color: var(--ink-mute); font-style: italic; }
.subj-tense-head > span {
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 6px 10px;
  color: var(--ink);
  white-space: nowrap;
  font-size: 13px;
  font-weight: 800;
}
.subj-tense-formula {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 11px 13px;
  font-weight: 800;
  margin-bottom: 12px;
}
.subj-tense-use {
  font-size: 18px;
  line-height: 1.55;
  margin: 0 0 16px;
}
.subj-tense-grid {
  display: grid;
  grid-template-columns: minmax(240px, 0.8fr) 1fr;
  gap: 20px;
}
.subj-tense-grid table {
  width: 100%;
  border-collapse: collapse;
}
.subj-tense-grid td {
  border-bottom: 1px solid var(--rule-soft);
  padding: 8px;
}
.subj-tense-grid td:first-child {
  color: var(--ink-mute);
  font-style: italic;
}
.subj-tense-grid td:last-child {
  font-weight: 800;
}
.subj-tense-examples,
.conditional-examples,
.trigger-grid {
  display: grid;
  gap: 12px;
}
.subj-tense-examples > div,
.trigger-example,
.conditional-examples article {
  border: 1px solid var(--rule);
  border-radius: 7px;
  padding: 12px;
  background: var(--paper-light);
}
.trigger-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.trigger-card {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 18px;
  background: #fff;
}
.trigger-card h3,
.subj-tip-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  margin: 0 0 8px;
}
.trigger-expression {
  color: var(--ink-mute);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 12px;
}
.conditional-pattern-block {
  background: #fff;
  color: var(--ink);
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  border-radius: 8px;
  padding: 24px;
}
.conditional-pattern-block h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  margin: 0 0 12px;
}
.conditional-pattern-block p {
  line-height: 1.6;
}
.conditional-formula {
  color: var(--ink);
}
.conditional-num {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  margin-bottom: 7px;
}
.conditional-examples article {
  background: var(--paper-light);
  border-color: var(--rule);
}
.conditional-examples .lesson-ex-es,
.conditional-examples .lesson-ex-en { color: var(--ink); }
.tips-grid-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.subj-tip-card {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 18px;
  background: #fff;
}
.subj-tip-card svg { color: var(--ink-mute); }
.subj-tip-card p { margin: 0; line-height: 1.55; }
.contextual-quiz-block {
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  border-radius: 8px;
  padding: 22px;
  background: #fff;
  color: var(--ink);
}
.contextual-quiz-head,
.contextual-quiz-score {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
.contextual-quiz-head h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  margin: 4px 0 0;
}
.contextual-quiz-head button,
.contextual-quiz-score button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper-light);
  color: var(--ink);
  padding: 8px 13px;
  font-family: 'Literata', Georgia, serif;
  cursor: pointer;
}
.contextual-quiz-list {
  display: grid;
  gap: 12px;
  margin: 18px 0;
}
.contextual-quiz-card {
  position: relative;
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 16px;
  background: var(--paper-light);
}
.contextual-quiz-card.correct { border-color: var(--ink); }
.contextual-quiz-card.wrong { border-color: var(--ink); border-style: dashed; }
.contextual-quiz-num {
  color: var(--ink-mute);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
}
.contextual-quiz-card p {
  margin: 8px 0 12px;
  font-size: 19px;
}
.contextual-quiz-choices {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}
.contextual-quiz-choices button {
  border: 1px solid var(--rule);
  border-radius: 7px;
  background: #fff;
  color: var(--ink);
  padding: 10px 12px;
  font-family: 'Literata', Georgia, serif;
  text-align: left;
  cursor: pointer;
}
.contextual-quiz-choices button.active {
  border-color: var(--ink);
  background: #fff;
  box-shadow: inset 0 -3px 0 var(--ink);
}
.contextual-quiz-feedback {
  margin-top: 12px;
  padding-top: 11px;
  border-top: 1px solid var(--rule);
  display: grid;
  gap: 4px;
  line-height: 1.45;
}
.contextual-quiz-score strong { color: var(--ink); font-size: 20px; }

@media (max-width: 700px) {
  .lesson-heading { font-size: 21px; }
  .lesson-text { font-size: 18px; }
  .lesson-table { font-size: 16px; }
  .lesson-table th,
  .lesson-table td { padding: 8px 10px; }
  .lesson-table tbody td { font-size: 17px; }
  .lesson-table thead th { font-size: 12px; letter-spacing: 0.14em; }
  .lesson-ex-es { font-size: 19px; }
  .lesson-ex-en { font-size: 16px; }
  .expressions-hero { padding: 20px; }
  .expressions-hero h2 { font-size: 31px; }
  .expressions-stats,
  .expressions-toolbar {
    grid-template-columns: 1fr;
  }
  .expressions-pager {
    justify-content: space-between;
  }
  .indicative-hero-block { padding: 22px; }
  .indicative-hero-block h2 { font-size: 31px; }
  .indicative-card-grid,
  .participle-workshop-grid {
    grid-template-columns: 1fr;
  }
  .subj-hero-block { padding: 22px; }
  .subj-hero-block h2 { font-size: 30px; }
  .golden-rule-pair,
  .subj-tense-tabs,
  .subj-tense-grid,
  .trigger-grid,
  .tips-grid-block,
  .contextual-quiz-choices {
    grid-template-columns: 1fr;
  }
  .subj-tense-head { flex-direction: column; }
}

/* ===== VERB PRACTICE QUIZ ===== */
.verb-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.quiz-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--green);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
  white-space: nowrap;
  flex-shrink: 0;
}
.quiz-trigger-btn:hover { background: #234a2d; }
.quiz-trigger-btn:active { transform: scale(0.97); }

.quiz-overlay {
  position: fixed;
  inset: 0;
  background: rgba(28, 28, 26, 0.55);
  backdrop-filter: blur(2px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: quiz-fade 180ms ease-out;
}
@keyframes quiz-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.quiz-modal {
  background: var(--paper);
  border-radius: 12px;
  width: 100%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: quiz-slide 220ms cubic-bezier(0.4, 0.2, 0.2, 1);
}
@keyframes quiz-slide {
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.quiz-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--rule);
}
.quiz-eyebrow {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 4px;
}
.quiz-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--ink);
  font-style: italic;
  letter-spacing: -0.005em;
  margin: 0;
  line-height: 1.1;
}
.quiz-close {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-mute);
  flex-shrink: 0;
  transition: color 120ms, border-color 120ms;
  touch-action: manipulation;
}
.quiz-close:hover { color: var(--red); border-color: var(--red); }

.quiz-progress {
  margin-bottom: 24px;
}
.quiz-progress-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 8px;
  font-weight: 700;
}
.quiz-progress-bar {
  height: 4px;
  background: var(--rule-soft);
  border-radius: 2px;
  overflow: hidden;
}
.quiz-progress-fill {
  height: 100%;
  background: var(--green);
  transition: width 320ms cubic-bezier(0.4, 0.2, 0.2, 1);
}

.quiz-question {
  text-align: center;
  padding: 24px 12px;
  background: var(--paper-light);
  border-radius: 8px;
  margin-bottom: 20px;
}
.quiz-tense-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 14px;
}
.quiz-prompt {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 14px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.quiz-pronoun {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 600;
  color: var(--ink);
  font-style: italic;
}
.quiz-blank {
  font-family: 'Literata', Georgia, serif;
  font-size: 28px;
  color: var(--rule);
  letter-spacing: 0.1em;
}
.quiz-instruction {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-style: italic;
  color: var(--ink-mute);
  line-height: 1.5;
}

.quiz-form {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}
.quiz-input {
  flex: 1;
  font-family: 'Literata', Georgia, serif;
  font-size: 19px;
  font-weight: 600;
  padding: 12px 16px;
  border: 2px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  outline: none;
  transition: border-color 150ms;
}
.quiz-input:focus { border-color: var(--green); }
.quiz-input.correct { border-color: var(--green); background: var(--green-tint); }
.quiz-input.incorrect { border-color: var(--red); background: rgba(176, 48, 48, 0.06); }
.quiz-input:disabled { opacity: 0.85; }

.quiz-check-btn {
  background: var(--ink);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
}
.quiz-check-btn:hover:not(:disabled) { background: #2a2a26; }
.quiz-check-btn:active:not(:disabled) { transform: scale(0.97); }
.quiz-check-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.quiz-feedback {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.quiz-feedback.correct {
  background: var(--green-tint);
  color: var(--green);
}
.quiz-feedback.incorrect {
  background: rgba(176, 48, 48, 0.08);
  color: var(--red);
}
.quiz-feedback-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: currentColor;
  color: #ffffff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.quiz-feedback.correct .quiz-feedback-icon { background: var(--green); }
.quiz-feedback.incorrect .quiz-feedback-icon { background: var(--red); }
.quiz-feedback-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
}
.quiz-feedback-answer {
  font-size: 14px;
  margin-top: 2px;
  color: var(--ink);
}
.quiz-feedback-answer strong {
  font-weight: 700;
  color: var(--ink);
}
.quiz-feedback-speak {
  margin-left: auto;
  flex-shrink: 0;
  border-color: currentColor !important;
  color: inherit !important;
}

.quiz-next-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: var(--green);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-family: 'Literata', Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
}
.quiz-next-btn:hover { background: #234a2d; }
.quiz-next-btn:active { transform: scale(0.99); }

.quiz-score-line {
  text-align: center;
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  color: var(--ink-mute);
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dotted var(--rule-soft);
}

/* Results screen */
.quiz-results {
  text-align: center;
  padding: 12px 0;
}
.quiz-results-circle {
  width: 140px;
  height: 140px;
  margin: 0 auto 20px;
  border: 4px solid var(--green);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--green-tint);
}
.quiz-results-pct {
  font-family: 'Cormorant Garamond', serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--green);
  line-height: 1;
}
.quiz-results-fraction {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  margin-top: 4px;
}
.quiz-results-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--ink);
  font-style: italic;
  margin: 0 0 10px;
}
.quiz-results-msg {
  font-family: 'Literata', Georgia, serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 auto 24px;
  max-width: 400px;
}
.quiz-results-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.quiz-retry-btn,
.quiz-done-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
}
.quiz-retry-btn {
  background: var(--green);
  color: #ffffff;
  border: none;
}
.quiz-retry-btn:hover { background: #234a2d; }
.quiz-done-btn {
  background: transparent;
  color: var(--ink-mute);
  border: 1px solid var(--rule);
}
.quiz-done-btn:hover { color: var(--ink); border-color: var(--ink); }

@media (max-width: 700px) {
  .quiz-modal { padding: 22px; max-height: 95vh; }
  .quiz-title { font-size: 26px; }
  .quiz-pronoun { font-size: 28px; }
  .quiz-input { font-size: 18px; }
  .quiz-form { flex-direction: column; }
  .quiz-check-btn { padding: 12px; }
}

/* ===== KARAOKE TEXT — word-by-word highlight while audio plays ===== */
.karaoke-paragraph {
  position: relative;
}
.kt-word {
  display: inline;
  border-radius: 3px;
  padding: 0 1px;
  margin: 0 -1px;
  cursor: help;
  transition: background-color 120ms ease, color 120ms ease, box-shadow 120ms ease;
  -webkit-tap-highlight-color: rgba(47, 99, 62, 0.16);
}
.dict-word-token {
  border-radius: 3px;
  cursor: help;
  -webkit-tap-highlight-color: rgba(47, 99, 62, 0.16);
}
.kt-word:hover,
.dict-word-token:hover {
  background: rgba(47, 99, 62, 0.1);
  box-shadow: 0 0 0 2px rgba(47, 99, 62, 0.1);
}
.kt-word.kt-active {
  background: #fef3a8;
  color: #2a2410;
  box-shadow: 0 0 0 2px #fef3a8;
}
.karaoke-paragraph.is-playing {
  background: rgba(254, 243, 168, 0.06);
  border-radius: 4px;
}
.kt-space { white-space: pre-wrap; }

/* When a poem stanza is the karaoke target, the paragraph class
   already sets the bold/serif styling — we just need the highlight color
   to remain readable against the bold text */
.poem-stanza-es.kt-active,
.poem-stanza-es .kt-active {
  background: #fef3a8;
}

/* Remove the default reading-paragraph drop-cap when karaoke is active
   on the first paragraph — it interferes with word boundaries */
.karaoke-paragraph.reading-paragraph::first-letter {
  font-size: inherit !important;
  float: none !important;
  margin: 0 !important;
  color: inherit !important;
  font-family: inherit !important;
}
.karaoke-paragraph.bio-paragraph::first-letter {
  font-size: inherit !important;
  float: none !important;
  margin: 0 !important;
  color: inherit !important;
  font-family: inherit !important;
}

/* ===== SPEAK BUTTON ===== */
.speak-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 50%;
  color: var(--ink-mute);
  cursor: pointer;
  vertical-align: middle;
  transition: color 120ms, border-color 120ms, background 120ms, transform 120ms;
  touch-action: manipulation;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.speak-btn:hover {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
}
.speak-btn:active { transform: scale(0.92); }
.speak-btn.playing {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
  animation: speak-pulse 1.2s ease-in-out infinite;
}
@keyframes speak-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(47, 93, 58, 0.18); }
  50%      { box-shadow: 0 0 0 6px rgba(47, 93, 58, 0); }
}
.speak-btn-sm { width: 28px; height: 28px; }
.speak-btn-md { width: 34px; height: 34px; }

/* In-paragraph speak button — visible, tappable, sits before text */
.paragraph-speak {
  margin-right: 10px;
  vertical-align: 0.1em;
  background: var(--paper-light);
  border-color: var(--green);
  color: var(--green);
}
.paragraph-speak:hover {
  background: var(--green);
  color: #ffffff;
}
.conjugation-speak {
  margin-left: 6px;
  width: 22px;
  height: 22px;
  border-color: transparent;
  opacity: 0.55;
}
.conjugation-speak:hover { opacity: 1; }

/* "Play whole story / poem / section" tools strip */
.story-tools,
.poem-tools {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  padding: 10px 12px;
  background: var(--paper-light);
  border-radius: 6px;
  border: 1px solid var(--rule);
}
.story-speak-label,
.poem-speak-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}

.bio-section-speak {
  margin-left: auto;
}
.poem-quote-speak {
  margin-right: 10px;
  vertical-align: middle;
}

/* The conjugation table cell needs flex layout to fit the speak button */
.tense-form {
  display: inline-flex;
  align-items: center;
}
.tg-form {
  position: relative;
}
.tense-name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tg-th-inner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

/* Phrase list — make space for speak button */
.phrase-content { flex: 1; min-width: 0; }
.phrase-es { display: flex; align-items: center; gap: 8px; }

/* Vocab grid row */
.vocab-row .speak-btn {
  margin-right: 4px;
}

@media (max-width: 700px) {
  .speak-btn-sm { width: 24px; height: 24px; }
  .conjugation-speak { width: 20px; height: 20px; }
  .paragraph-speak { margin-right: 6px; }
}

/* ===== DICTIONARY POPUP ===== */
.dict-popup {
  position: fixed;
  width: fit-content;
  min-width: 210px;
  max-width: min(320px, calc(100vw - 24px));
  transform: translateX(-50%);
  z-index: 9999;
  background: var(--paper-light);
  border: 1px solid var(--ink);
  border-radius: 6px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.1);
  font-family: 'Literata', Georgia, serif;
  overflow: hidden;
  animation: dict-appear 150ms ease-out;
}
@keyframes dict-appear {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.dict-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 9px;
  background: var(--ink);
  gap: 8px;
}
.dict-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  color: #ffffff;
  letter-spacing: 0.01em;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dict-close-btn {
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  flex-shrink: 0;
  transition: background 120ms;
  touch-action: manipulation;
}
.dict-close-btn:hover { background: rgba(255,255,255,0.28); }

.dict-body {
  padding: 12px 14px 10px;
  min-height: 0;
}
.dict-loading {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink-mute);
  font-size: 15px;
  font-style: italic;
}
.dict-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid var(--rule);
  border-top-color: var(--ink);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

.dict-not-found {
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  margin-bottom: 10px;
}
.dict-fallback {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dict-fallback-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: var(--green);
  color: #ffffff !important;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: 'Literata', Georgia, serif;
  justify-content: center;
  transition: background 150ms;
  touch-action: manipulation;
}
.dict-fallback-link:hover { background: #234a2d; }
.dict-fallback-link:active { background: #1a3a23; }
.dict-pos {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 4px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
}

/* Save button — sits between body and footer */
.dict-save-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  border-top: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-light);
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  transition: background 150ms, color 150ms;
  touch-action: manipulation;
  letter-spacing: 0.01em;
}
.dict-save-btn:hover { background: var(--green-tint); color: var(--green); }
.dict-save-btn.saved {
  background: var(--green-tint);
  color: var(--green);
}
.dict-save-btn .filled { fill: var(--green); }

/* ===== Memoria sidebar nav item ===== */
.memoria-nav-item {
  margin-top: 8px;
  border-top: 1px dashed var(--rule);
  padding-top: 8px;
}
.memoria-section-btn {
  border-radius: 6px;
}
.memoria-nav-item.active .memoria-section-btn {
  background: var(--ink) !important;
}
.memoria-nav-item.active .section-label,
.memoria-nav-item.active .section-sublabel {
  color: #ffffff !important;
}
.memoria-nav-item.active .memoria-count,
.memoria-nav-item.active .memoria-bookmark-icon {
  color: rgba(255,255,255,0.7) !important;
}
.memoria-bookmark-icon { color: var(--ink-mute); }
.memoria-count {
  font-size: 13px;
  color: var(--ink-mute);
  min-width: 20px;
  text-align: right;
}

/* ===== Memoria view — empty state ===== */
.memoria-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  text-align: center;
  gap: 16px;
}
.memoria-empty-icon { color: var(--rule); }
.memoria-empty-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--ink);
}
.memoria-empty-text {
  font-family: 'Literata', Georgia, serif;
  font-size: 18px;
  line-height: 1.65;
  color: var(--ink-mute);
  max-width: 360px;
}

/* ===== Memoria view — flashcard grid ===== */
.memoria-view .chapter-intro {
  font-style: italic;
  color: var(--ink-mute);
}

/* View toggle (Tarjetas / Lista) */
.memoria-view-toggle {
  display: inline-flex;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 3px;
  margin: 18px 0 8px;
  gap: 2px;
}
.memoria-view-btn {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 600;
  background: transparent;
  border: none;
  padding: 7px 18px;
  border-radius: 6px;
  color: var(--ink-mute);
  cursor: pointer;
  transition: background 120ms, color 120ms;
  touch-action: manipulation;
  letter-spacing: 0.01em;
}
.memoria-view-btn:hover { color: var(--ink); }
.memoria-view-btn.active {
  background: var(--ink);
  color: #ffffff;
}
.memoria-tools {
  display: grid;
  grid-template-columns: 1fr minmax(160px, 220px) auto;
  gap: 10px;
  align-items: end;
  margin: 10px 0 18px;
}
.memoria-tools label {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 8px 10px;
  background: var(--paper-light);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.memoria-tools label span {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.memoria-tools input,
.memoria-tools select {
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
  min-width: 0;
}
.memoria-tool-btn,
.memoria-review-actions button {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink);
  border-radius: 6px;
  min-height: 38px;
  padding: 8px 12px;
  cursor: pointer;
  touch-action: manipulation;
}
.memoria-tool-btn:hover,
.memoria-review-actions button:hover {
  border-color: var(--green);
  color: var(--green);
}
.memoria-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
}
.memoria-tags span {
  font-size: 10px;
  color: var(--ink-mute);
  background: var(--paper-light);
  border: 1px solid var(--rule-soft);
  border-radius: 999px;
  padding: 1px 7px;
}
.memoria-review {
  margin: 18px 0 32px;
}
.memoria-review-card {
  width: 100%;
  min-height: 280px;
  border: 1px solid var(--rule);
  border-radius: 10px;
  background: var(--paper);
  color: var(--ink);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
  text-align: center;
  touch-action: manipulation;
}
.memoria-review-card.flipped {
  background: var(--ink);
  color: #ffffff;
}
.memoria-review-card strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 48px;
  line-height: 1.05;
  overflow-wrap: anywhere;
}
.memoria-review-card em {
  color: currentColor;
  opacity: 0.68;
}
.memoria-review-count {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.memoria-review-card.flipped .memoria-review-count {
  color: rgba(255,255,255,0.55);
}
.memoria-review-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
}
.memoria-review-actions input {
  flex: 1;
  min-width: 160px;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--paper-light);
  color: var(--ink);
}

/* Front-of-card translation preview */
.memoria-front-translation {
  font-family: 'Literata', Georgia, serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-top: 10px;
  padding: 6px 10px 0;
  border-top: 1px dotted var(--rule);
  width: 100%;
  text-align: center;
  line-height: 1.35;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.memoria-front-pending {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding-top: 6px;
  border-top: 1px dotted var(--rule);
  font-size: 12px;
  color: var(--ink-mute);
  font-style: italic;
  font-family: 'Literata', Georgia, serif;
}
.memoria-front-pending .dict-spinner {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}

/* List view */
.memoria-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 18px 0 32px;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.memoria-list-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 8px;
  border-bottom: 1px solid var(--rule-soft);
  transition: background 120ms;
}
.memoria-list-row:last-child { border-bottom: none; }
.memoria-list-row:hover { background: var(--paper-light); }
.memoria-list-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.memoria-list-es {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
.memoria-list-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  line-height: 1.2;
  letter-spacing: 0.005em;
}
.memoria-list-pos {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.memoria-list-en {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}
.memoria-list-en.pending {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-style: italic;
  color: var(--ink-mute);
}
.memoria-list-en.pending .dict-spinner {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}
.memoria-list-en.empty {
  font-weight: 400;
  font-style: italic;
  color: var(--ink-mute);
  font-size: 15px;
}
.memoria-list-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
}
.memoria-list-extra-tag {
  font-size: 12px;
  color: var(--ink-mute);
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 1px 9px;
  font-style: italic;
}
.memoria-list-context {
  margin-top: 6px;
  color: var(--ink-mute);
  font-size: 13px;
  line-height: 1.45;
  font-style: italic;
}
.memoria-list-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}
.memoria-list-sd,
.memoria-list-remove {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 6px;
  color: var(--ink-mute);
  cursor: pointer;
  transition: color 120ms, border-color 120ms, background 120ms;
  touch-action: manipulation;
  text-decoration: none;
}
.memoria-list-sd:hover { color: var(--green); border-color: var(--green); }
.memoria-list-remove:hover { color: var(--red); border-color: var(--red); }

.app-message-stack {
  position: fixed;
  top: 84px;
  right: 18px;
  z-index: 11000;
  display: grid;
  gap: 10px;
  width: min(360px, calc(100vw - 28px));
  pointer-events: none;
}
.app-message {
  pointer-events: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 14px;
  align-items: start;
  padding: 13px 13px 13px 15px;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-left: 4px solid var(--green);
  border-radius: 8px;
  box-shadow: var(--shadow);
}
.app-message-warning { border-left-color: var(--sienna); }
.app-message-title {
  display: block;
  margin-bottom: 3px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
}
.app-message p {
  margin: 0;
  font-size: 14px;
  line-height: 1.35;
  color: var(--ink-mute);
}
.app-message-close {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper-light);
  color: var(--ink-mute);
  cursor: pointer;
}
@media (max-width: 700px) {
  .app-message-stack {
    top: 76px;
    right: 10px;
    left: 10px;
    width: auto;
  }
}

.memoria-confirm-overlay,
.sync-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  padding: 18px;
  background: rgba(28, 28, 26, 0.42);
  backdrop-filter: blur(2px);
}
.memoria-confirm-card,
.sync-modal {
  width: min(420px, calc(100vw - 36px));
  background: var(--paper);
  border: 1px solid var(--rule);
  border-top: 3px solid var(--sienna);
  border-radius: 8px;
  box-shadow: var(--shadow);
  padding: 22px;
  color: var(--ink);
}
.memoria-confirm-kicker,
.sync-kicker {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--sienna);
  margin-bottom: 8px;
}
.memoria-confirm-card h3,
.sync-modal h2 {
  margin: 0 0 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  line-height: 1.1;
}
.memoria-confirm-card p,
.sync-modal p {
  margin: 0;
  color: var(--ink-mute);
  line-height: 1.5;
}
.memoria-confirm-actions,
.sync-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
}
.memoria-confirm-actions button,
.sync-actions button {
  border: 1px solid var(--rule);
  border-radius: 7px;
  padding: 9px 14px;
  background: var(--paper-light);
  color: var(--ink);
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.memoria-confirm-danger {
  border-color: var(--red) !important;
  background: rgba(176,48,48,0.1) !important;
  color: var(--red) !important;
}
.memoria-confirm-cancel:hover,
.sync-actions button:hover {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-tint);
}
.sync-modal {
  width: min(620px, calc(100vw - 36px));
  border-top-color: var(--green);
}
.sync-kicker {
  color: var(--green);
}
.sync-actions {
  justify-content: flex-start;
}

@media (max-width: 700px) {
  .memoria-list-row { padding: 14px 4px; gap: 10px; }
  .memoria-list-word { font-size: 21px; }
  .memoria-list-en { font-size: 15px; }
  .memoria-list-actions { gap: 3px; }
  .memoria-list-sd, .memoria-list-remove { width: 30px; height: 30px; }
  .memoria-tools { grid-template-columns: 1fr; }
  .memoria-review-card strong { font-size: 36px; }
}

.memoria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 18px 0 32px;
}

/* Flip card */
.memoria-card {
  position: relative;
  height: 220px;
  cursor: pointer;
  perspective: 900px;
  -webkit-tap-highlight-color: transparent;
}
.memoria-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 420ms cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}
.memoria-card.flipped .memoria-card-inner {
  transform: rotateY(180deg);
}
.memoria-face {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 16px;
  text-align: center;
  border: 1px solid var(--rule);
}
.memoria-face.front {
  background: var(--paper);
}
.memoria-face.back {
  background: var(--ink);
  transform: rotateY(180deg);
}
.memoria-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  line-height: 1.1;
}
.memoria-pos {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-top: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
}
.memoria-hint {
  font-size: 12px;
  color: var(--rule);
  margin-top: 10px;
  font-style: italic;
  font-family: 'Literata', Georgia, serif;
}
.memoria-translation {
  font-family: 'Literata', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  text-align: center;
}
.memoria-no-translation {
  font-family: 'Literata', Georgia, serif;
  font-size: 15px;
  font-style: italic;
  color: rgba(255,255,255,0.55);
  text-align: center;
}
.memoria-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-top: 8px;
}
.memoria-extra-tag {
  font-size: 12px;
  color: rgba(255,255,255,0.65);
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 2px 8px;
  font-style: italic;
}
.memoria-context {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dotted rgba(255,255,255,0.28);
  color: rgba(255,255,255,0.72);
  font-size: 12px;
  line-height: 1.35;
  font-style: italic;
}
.memoria-sd-link {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  margin-top: 10px;
  letter-spacing: 0.03em;
}
.memoria-sd-link:hover { color: #ffffff; text-decoration: underline; }

/* Remove button (top-right corner) */
.memoria-remove {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 2;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: rgba(28,28,26,0.08);
  color: var(--ink-mute);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 150ms, background 150ms;
  touch-action: manipulation;
}
.memoria-card:hover .memoria-remove,
.memoria-card.flipped .memoria-remove { opacity: 1; }
.memoria-remove:hover { background: rgba(176,48,48,0.15); color: var(--red); }

/* Actions */
.memoria-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  border-top: 1px solid var(--rule-soft);
}
.memoria-clear-btn {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 6px 16px;
  cursor: pointer;
  transition: color 150ms, border-color 150ms;
  touch-action: manipulation;
}
.memoria-clear-btn:hover { color: var(--red); border-color: var(--red); }

@media (max-width: 700px) {
  .memoria-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
  .memoria-card { height: 210px; }
  .memoria-word { font-size: 24px; }
  .memoria-translation { font-size: 18px; }
  .memoria-remove { opacity: 1; }
}
.dict-main-translation {
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
  letter-spacing: 0.005em;
}
.dict-main-translation.is-definition {
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.55;
  color: var(--ink-soft);
}
.dict-context {
  margin-top: 10px;
  padding: 8px 10px;
  border-left: 3px solid var(--green);
  background: var(--paper);
}
.dict-context span {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.dict-context em {
  display: block;
  font-size: 13px;
  line-height: 1.45;
  color: var(--ink-soft);
}
.dict-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.dict-extra-tag {
  font-size: 13px;
  color: var(--ink-soft);
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 10px;
  font-style: italic;
}
.dict-meanings {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  border-top: 1px dotted var(--rule-soft);
  padding-top: 8px;
}
.dict-meaning-item {
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-soft);
  padding: 3px 0 3px 10px;
  position: relative;
}
.dict-meaning-item::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--ink-mute);
  font-weight: 700;
}
.dict-examples {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dotted var(--rule-soft);
}
.dict-examples-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
  margin-bottom: 6px;
}
.dict-example {
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 2px solid var(--rule);
}
.dict-example:last-child { margin-bottom: 0; }
.dict-example-es {
  font-size: 13px;
  color: var(--ink);
  line-height: 1.4;
  font-weight: 600;
}
.dict-example-en {
  font-size: 12px;
  color: var(--ink-mute);
  line-height: 1.4;
  font-style: italic;
  margin-top: 2px;
}

.dict-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px 9px;
  border-top: 1px solid var(--rule-soft);
  margin-top: 0;
}
.dict-sd-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: var(--green);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.01em;
  touch-action: manipulation;
}
.dict-sd-link:hover { text-decoration: underline; }
/* ===== Study system upgrades ===== */
.global-search {
  margin: 0;
  padding: 0 12px;
  position: relative;
}
.global-search label {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 12px 14px;
  background: var(--paper-light);
  color: var(--ink-mute);
}
.global-search input {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  outline: none;
}
.global-search-results {
  position: absolute;
  left: 12px;
  right: 12px;
  top: calc(100% + 8px);
  z-index: 20;
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--paper);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.global-search-results button {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid var(--rule-soft);
  background: transparent;
  padding: 9px 10px;
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  cursor: pointer;
}
.global-search-results button:hover { background: var(--green-tint); }
.global-search-results button em,
.global-search-results button small,
.global-search-empty {
  font-size: 12px;
  color: var(--ink-mute);
}
.global-search-results button small {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: italic;
}

.header-search {
  flex: 1 1 260px;
  max-width: 560px;
  margin: 0 auto;
  padding: 0;
}
.header-search label {
  min-height: 38px;
  padding: 8px 12px;
  background: var(--paper);
}
.header-search input {
  font-size: 15px;
}
.header-search .global-search-results {
  left: 0;
  right: 0;
  z-index: 40;
}

@media (max-width: 700px) {
  .mobile-bar {
    flex-wrap: wrap;
  }
  .study-timer {
    order: 1;
    margin-left: auto;
    min-width: 88px;
  }
  .mobile-tools-toggle {
    order: 1;
    display: inline-flex;
  }
  .header-search {
    order: 2;
    flex-basis: 100%;
    max-width: none;
    margin: 0;
  }
  .top-tools {
    order: 3;
    display: none;
    width: 100%;
    padding: 8px;
    border: 1px solid var(--rule-soft);
    border-radius: 8px;
    background: var(--paper);
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .top-tools.open {
    display: flex;
  }
  .top-tools .font-controls {
    margin-left: auto;
  }
  .top-tools .top-tool-btn {
    min-width: 46px;
  }
}

.update-banner {
  position: fixed;
  left: 50%;
  top: 14px;
  transform: translateX(-50%);
  z-index: 80;
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--paper);
  border: 1px solid var(--green);
  border-radius: 8px;
  box-shadow: var(--shadow);
  padding: 10px 12px;
}

.book-root.boox-mode {
  --paper: #ffffff;
  --paper-light: #ffffff;
  --ink: #000000;
  --ink-soft: #111111;
  --ink-mute: #222222;
  --rule: #000000;
  --rule-soft: #777777;
  --green: #000000;
  --green-soft: #000000;
  --green-tint: #ffffff;
  --sienna: #000000;
  --sienna-deep: #000000;
  --sienna-tint: #ffffff;
  --yellow: #000000;
  --yellow-soft: #000000;
  --yellow-tint: #ffffff;
  --red: #000000;
  --blue: #000000;
  --shadow: none;
  background: #ffffff;
  color: #000000;
}
.book-root.boox-mode,
.book-root.boox-mode * {
  text-shadow: none !important;
  box-shadow: none !important;
  transition: none !important;
  animation: none !important;
  scroll-behavior: auto !important;
}
.book-root.boox-mode * {
  background-image: none !important;
}
.book-root.boox-mode .mobile-bar,
.book-root.boox-mode .sidebar,
.book-root.boox-mode .sidebar-inner,
.book-root.boox-mode .book-main,
.book-root.boox-mode .book-page,
.book-root.boox-mode .level-bar,
.book-root.boox-mode .level-bar-inner,
.book-root.boox-mode .home-panel,
.book-root.boox-mode .section-card,
.book-root.boox-mode .lesson-section,
.book-root.boox-mode .memoria-card,
.book-root.boox-mode .memoria-face,
.book-root.boox-mode .sync-modal,
.book-root.boox-mode .dict-popup,
.book-root.boox-mode .update-banner,
.book-root.boox-mode .resume-banner {
  background: #ffffff !important;
  color: #000000 !important;
}
.book-root.boox-mode button,
.book-root.boox-mode input,
.book-root.boox-mode select,
.book-root.boox-mode textarea,
.book-root.boox-mode .chapter-btn,
.book-root.boox-mode .section-btn,
.book-root.boox-mode .section-overview-stats span,
.book-root.boox-mode .section-lesson-card,
.book-root.boox-mode .lesson-table,
.book-root.boox-mode .lesson-table th,
.book-root.boox-mode .lesson-table td,
.book-root.boox-mode .indicative-card,
.book-root.boox-mode .subj-tense-card,
.book-root.boox-mode .contextual-quiz-card,
.book-root.boox-mode .trigger-card,
.book-root.boox-mode .subj-tip-card,
.book-root.boox-mode .participle-workshop-grid article {
  border-color: #000000 !important;
}
.book-root.boox-mode .top-tool-btn.active,
.book-root.boox-mode .level-pill.active,
.book-root.boox-mode .chapter-btn.active,
.book-root.boox-mode .section-group.active > .section-btn,
.book-root.boox-mode .lesson-status-btn.active,
.book-root.boox-mode .memoria-view-btn.active {
  background: #ffffff !important;
  color: #000000 !important;
  outline: 2px solid #000000;
  outline-offset: -2px;
}
.book-root.boox-mode .kt-active,
.book-root.boox-mode mark,
.book-root.boox-mode .search-hit {
  background: #000000 !important;
  color: #ffffff !important;
}
.book-root.boox-mode .book-page {
  max-width: 820px;
}
.book-root.boox-mode .reading-paragraph,
.book-root.boox-mode .lesson-text,
.book-root.boox-mode .gl-text,
.book-root.boox-mode .bio-paragraph {
  line-height: 1.85 !important;
}
.book-root.boox-mode .lesson-status-btn.read.active::after {
  content: " LEIDO";
}
.book-root.boox-mode .lesson-status-btn.understood.active::after {
  content: " ENTENDIDO";
}
.book-root.boox-mode svg,
.book-root.boox-mode .section-icon,
.book-root.boox-mode .chapter-icon-wrap,
.book-root.boox-mode .brand-mark {
  color: #000000 !important;
  border-color: #000000 !important;
}

.audio-settings {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.audio-settings-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
}
.audio-rate-select,
.audio-voice-select {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink);
  border-radius: 6px;
  padding: 5px 8px;
  font-family: 'Literata', Georgia, serif;
  font-size: 12px;
}
.audio-voice-select { max-width: 170px; }

.lesson-mini-quiz {
  margin-top: 28px;
  padding: 18px;
  border: 1px solid var(--rule);
  border-top: 2px solid var(--green);
  border-radius: 6px;
  background: rgba(227, 235, 222, 0.32);
}
.lesson-mini-head,
.lesson-mini-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.lesson-mini-kicker {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
}
.lesson-mini-head h3 {
  margin: 4px 0 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
}
.lesson-mini-reset,
.lesson-mini-check,
.writing-actions button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink);
  padding: 7px 12px;
  font-family: 'Literata', Georgia, serif;
  font-weight: 700;
  cursor: pointer;
}
.lesson-mini-check {
  background: var(--green);
  color: #fff;
  border-color: var(--green);
}
.lesson-mini-check:disabled,
.writing-actions button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.lesson-mini-list {
  display: grid;
  gap: 12px;
  margin: 16px 0;
}
.lesson-mini-card {
  background: var(--paper);
  border: 1px solid var(--rule-soft);
  border-radius: 6px;
  padding: 14px;
}
.lesson-mini-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--ink-mute);
  font-size: 12px;
}
.lesson-mini-prompt {
  margin: 8px 0 10px;
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
}
.lesson-mini-choices {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.lesson-mini-choices button {
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper);
  padding: 6px 11px;
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  cursor: pointer;
}
.lesson-mini-choices button.active { border-color: var(--green); background: var(--green-tint); }
.lesson-mini-choices button.correct { background: var(--green-tint); color: var(--green); }
.lesson-mini-choices button.wrong { background: var(--sienna-tint); color: var(--sienna-deep); }
.lesson-mini-answer {
  margin-top: 8px;
  color: var(--sienna-deep);
  font-size: 14px;
}

.memoria-summary-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 18px;
}
.memoria-summary-strip span,
.memoria-label-actions button,
.memoria-srs-actions button {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper);
  color: var(--ink-mute);
  padding: 5px 10px;
  font-size: 12px;
  font-family: 'Literata', Georgia, serif;
}
.memoria-label-actions {
  display: flex;
  gap: 6px;
  margin-top: 10px;
}
.memoria-label-actions button {
  width: 30px;
  height: 30px;
  justify-content: center;
  padding: 0;
  cursor: pointer;
}
.memoria-label-actions button.active,
.memoria-list-remove.active-label {
  color: var(--yellow);
  border-color: var(--yellow-soft);
  background: var(--yellow-tint);
}
.memoria-label-actions button.hard,
.memoria-list-remove.active-hard {
  color: var(--sienna-deep);
  border-color: var(--sienna);
  background: var(--sienna-tint);
}
.memoria-srs-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}
.memoria-srs-actions button {
  cursor: pointer;
  font-weight: 700;
}

.home-review-queue {
  margin-top: 24px;
}
.home-review-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
}
.home-review-list button {
  text-align: left;
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--paper);
  padding: 12px;
  font-family: 'Literata', Georgia, serif;
  color: var(--ink);
  cursor: pointer;
  display: grid;
  gap: 5px;
}
.home-review-list button:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.home-review-list strong {
  font-size: 16px;
  line-height: 1.25;
}
.home-review-list em,
.home-review-summary {
  font-size: 13px;
  color: var(--ink-mute);
}
.review-type {
  width: fit-content;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
}
.home-review-summary {
  margin-top: 10px;
  font-style: italic;
}

.writing-section-btn .section-icon-wrap,
.writing-icon-wrap {
  background: var(--sienna-tint);
  color: var(--sienna-deep);
}
.writing-board {
  border: 1px solid var(--rule);
  border-top: 2px solid var(--green);
  border-radius: 6px;
  padding: 18px;
  background: var(--paper-light);
}
.writing-prompt-row {
  display: grid;
  grid-template-columns: minmax(180px, 260px) 1fr;
  gap: 16px;
  align-items: end;
  margin-bottom: 14px;
}
.writing-prompt-row label,
.memoria-tools label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.writing-prompt-row label span,
.memoria-tools label span {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.writing-prompt-row select,
.writing-board textarea {
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
}
.writing-prompt-row select { padding: 8px 10px; }
.writing-prompt-row p {
  margin: 0;
  color: var(--ink-soft);
  font-style: italic;
}
.writing-board textarea {
  width: 100%;
  padding: 14px;
  resize: vertical;
  font-size: 18px;
  line-height: 1.6;
  outline: none;
}
.writing-feedback-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 8px;
  margin-top: 12px;
}
.writing-feedback-grid span,
.writing-tips span {
  border: 1px solid var(--rule-soft);
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 13px;
}
.writing-tips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.writing-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}
.writing-actions button {
  background: var(--green);
  border-color: var(--green);
  color: #fff;
}
.writing-history {
  margin-top: 28px;
}
.writing-entry {
  border-bottom: 1px solid var(--rule-soft);
  padding: 14px 0;
}
.writing-entry-meta {
  font-size: 12px;
  color: var(--ink-mute);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.writing-entry p {
  margin: 6px 0;
  color: var(--ink-soft);
  font-style: italic;
}
.writing-entry blockquote {
  margin: 0;
  padding-left: 14px;
  border-left: 2px solid var(--green);
  color: var(--ink);
}

@media (max-width: 760px) {
  .writing-prompt-row { grid-template-columns: 1fr; }
  .audio-voice-select { max-width: 130px; }
  .lesson-mini-head,
  .lesson-mini-footer { align-items: stretch; }
}

/* ===== Device polish: Galaxy S24 phone + Boox Tab Ultra C Pro ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.book-root {
  overflow-x: hidden;
}

.book-root img,
.book-root svg,
.book-root canvas,
.book-root video {
  max-width: 100%;
}

.chapter-title,
.home-title,
.section-lesson-title,
.home-rec-title,
.block-heading,
.lesson-heading,
.gl-title,
.story-title {
  overflow-wrap: anywhere;
}

.lesson-table-wrap,
.tense-group-table,
.indicative-contrast-wrap,
.subj-contrast-wrap,
.timeline-wrap {
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 701px) and (max-width: 1100px) {
  html,
  body,
  #root {
    height: auto !important;
    min-height: 100%;
    overflow-x: hidden !important;
  }
  body {
    overflow-y: auto !important;
    touch-action: pan-y;
    overscroll-behavior-y: contain;
  }
  .book-root {
    --mobile-bar-space: 67px;
    padding-top: var(--mobile-bar-space);
    overflow-x: visible;
  }
  .book-root.focus-mode {
    --mobile-bar-space: 0px;
  }
  .mobile-bar {
    display: grid;
    grid-template-columns: 44px auto auto minmax(240px, 1fr) auto;
    align-items: center;
    padding: 10px 18px;
    position: fixed;
    inset: 0 0 auto 0;
    width: 100%;
  }
  .mobile-btn {
    width: 42px;
    height: 38px;
    display: grid;
    place-items: center;
    padding: 0;
  }
  .mobile-title {
    min-width: 0;
  }
  .header-search {
    max-width: none;
    margin: 0;
  }
  .mobile-tools-toggle {
    display: none !important;
  }
  .top-tools {
    justify-self: end;
  }
  .book-main {
    display: block;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
  }
  .book-page {
    max-width: min(880px, calc(100vw - 56px));
    padding: 34px 0 82px;
    flex: none;
  }
  .book-page.home-page,
  .home-dashboard,
  .section-overview {
    max-width: min(940px, calc(100vw - 56px));
  }
  .home-stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .home-daily-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .section-lesson-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .chapter-title {
    font-size: clamp(42px, 6vw, 64px);
  }
  .level-bar-inner {
    max-width: min(940px, calc(100vw - 40px));
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 700px) {
  html,
  body,
  #root {
    height: auto !important;
    min-height: 100%;
    overflow-x: hidden !important;
  }
  body {
    overflow-y: auto !important;
    touch-action: pan-y;
    overscroll-behavior-y: contain;
    -webkit-overflow-scrolling: touch;
  }
  .book-root {
    --mobile-bar-space: 158px;
    font-size: calc(18px * var(--font-scale));
    line-height: 1.62;
    min-height: 100svh;
    padding-top: var(--mobile-bar-space);
    overflow-x: visible;
  }
  .book-root:has(.top-tools.open) {
    --mobile-bar-space: 308px;
  }
  .book-root.focus-mode {
    --mobile-bar-space: 0px;
  }
  .mobile-bar {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr) auto auto;
    align-items: center;
    gap: 8px;
    padding: max(8px, env(safe-area-inset-top)) 10px 10px;
    position: fixed;
    inset: 0 0 auto 0;
    width: 100%;
  }
  .mobile-btn {
    width: 42px;
    height: 38px;
    display: grid;
    place-items: center;
    padding: 0;
  }
  .mobile-title {
    min-width: 0;
  }
  .mobile-brand-script {
    display: block;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .study-timer {
    min-width: 74px;
    height: 38px;
    padding: 0 8px;
    gap: 4px;
    letter-spacing: 0;
  }
  .study-timer-main {
    font-size: 14px;
  }
  .study-timer-sub {
    display: none;
  }
  .mobile-tools-toggle {
    display: inline-flex;
    min-width: 74px;
    height: 38px;
    padding: 0 10px;
    font-size: 13px;
  }
  .header-search {
    grid-column: 1 / -1;
    width: 100%;
    max-width: none;
    margin: 0;
  }
  .header-search label {
    min-height: 44px;
    border-radius: 10px;
  }
  .header-search input {
    min-width: 0;
    font-size: 16px;
  }
  .global-search-results {
    max-height: min(58vh, 420px);
    overflow-y: auto;
  }
  .top-tools {
    grid-column: 1 / -1;
    display: none;
    width: 100%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    padding: 8px;
    border: 1px solid var(--rule-soft);
    border-radius: 10px;
    background: var(--paper);
  }
  .top-tools.open {
    display: grid;
  }
  .top-tools .top-tool-btn,
  .top-tools .font-controls {
    width: 100%;
    min-width: 0;
  }
  .top-tools .font-controls {
    grid-column: span 2;
    justify-content: space-between;
  }
  .font-btn {
    flex: 1;
  }
  .book-shell {
    display: block;
    min-height: auto;
  }
  .book-main {
    display: block;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
  }
  .book-page,
  .book-page.home-page,
  .home-dashboard,
  .section-overview {
    width: 100%;
    max-width: none;
  }
  .book-page {
    padding: 20px 16px 38px;
    flex: none;
  }
  .home-hero {
    padding: 8px 0 22px;
  }
  .home-title {
    font-size: clamp(38px, 13vw, 52px);
    line-height: 1.08;
    margin: 14px 0 12px;
  }
  .home-subtitle {
    font-size: 17px;
    line-height: 1.55;
  }
  .home-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .home-primary,
  .home-secondary {
    width: 100%;
    min-height: 46px;
    padding: 9px 10px;
  }
  .home-stats,
  .home-daily-grid,
  .section-lesson-grid,
  .writing-feedback-grid {
    grid-template-columns: 1fr;
  }
  .home-stat,
  .home-daily-grid button,
  .section-lesson-card,
  .home-progress-row,
  .lesson-mini-card,
  .contextual-quiz-card {
    border-radius: 10px;
    padding: 15px;
  }
  .home-stat strong {
    font-size: 30px;
  }
  .home-rec {
    grid-template-columns: 34px 1fr;
    gap: 10px;
    padding: 13px;
  }
  .home-rec svg {
    display: none;
  }
  .section-overview-hero {
    padding-top: 0;
  }
  .section-overview-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }
  .section-overview-stats span {
    justify-content: center;
    padding: 6px 4px;
    font-size: 12px;
  }
  .section-lesson-card {
    min-height: auto;
  }
  .section-lesson-title {
    font-size: 27px;
    line-height: 1.16;
  }
  .section-lesson-preview {
    -webkit-line-clamp: 3;
  }
  .lesson-breadcrumb {
    width: 100%;
    flex-wrap: wrap;
    letter-spacing: 0.08em;
  }
  .lesson-breadcrumb span {
    max-width: 100%;
    white-space: normal;
  }
  .chapter-icon-row {
    gap: 10px;
  }
  .chapter-icon-wrap {
    width: 38px;
    height: 38px;
    border-radius: 8px;
  }
  .chapter-level-tag {
    letter-spacing: 0.18em;
    font-size: 11px;
  }
  .chapter-title {
    font-size: clamp(34px, 10vw, 44px);
    line-height: 1.12;
  }
  .chapter-subtitle {
    font-size: 16px;
  }
  .chapter-intro,
  .reading-paragraph,
  .lesson-text,
  .gl-text,
  .bio-paragraph,
  .poem-stanza-es,
  .song-lyric-es {
    font-size: 18px !important;
    line-height: 1.7 !important;
  }
  .example-en,
  .lesson-ex-en,
  .gl-ex-en,
  .inline-en,
  .phrase-en,
  .vocab-en,
  .poem-stanza-en,
  .song-lyric-en {
    font-size: 0.84em !important;
    line-height: 1.45 !important;
  }
  .lesson-status-control {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding: 8px;
  }
  .lesson-status-btn {
    min-width: 0;
    padding: 9px 8px;
    font-size: 13px;
  }
  .chapter-nav {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .nav-btn {
    width: 100%;
    min-width: 0;
  }
  .level-bar {
    position: static;
  }
  .level-bar-inner {
    max-width: none;
    padding: 12px 14px calc(12px + env(safe-area-inset-bottom));
    flex-wrap: wrap;
    justify-content: center;
  }
  .level-bar-label {
    display: none;
  }
  .level-pills {
    order: 1;
    width: 100%;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 2px;
  }
  .level-pill {
    flex: 0 0 auto;
    padding: 7px 13px;
  }
  .audio-settings {
    order: 2;
    width: 100%;
    justify-content: center;
  }
  .audio-rate-select,
  .audio-voice-select {
    max-width: 100%;
  }
  .level-bar-counter {
    order: 3;
    width: 100%;
    text-align: center;
  }
  .dict-popup {
    max-width: calc(100vw - 24px);
  }
  .memoria-tools {
    grid-template-columns: 1fr !important;
  }
  .memoria-grid {
    grid-template-columns: 1fr !important;
  }
  .memoria-card {
    height: 230px;
  }
}

@media (max-width: 700px) {
  .mobile-bar,
  .book-page,
  .chapter-body,
  .home-dashboard,
  .section-overview,
  .lesson-section,
  .gl-body,
  .bio-body,
  .story-body,
  .poem-body,
  .song-body,
  .memoria-view,
  .writing-view {
    min-width: 0;
  }
  .book-page,
  .chapter-body,
  .home-dashboard,
  .section-overview {
    overflow: visible;
  }
  .chapter-title,
  .home-title,
  .section-overview-title,
  .section-lesson-title,
  .lesson-heading,
  .block-heading,
  .bio-title,
  .story-title,
  .poem-title,
  .song-title,
  .gl-title,
  .expressions-hero h2,
  .indicative-hero-block h2,
  .subj-hero-block h2,
  .conditional-pattern-block h2,
  .contextual-quiz-head h2 {
    overflow-wrap: anywhere;
    word-break: normal;
    hyphens: auto;
    line-height: 1.14;
  }
  .reading-paragraph,
  .lesson-text,
  .lesson-ex-es,
  .lesson-ex-en,
  .gl-text,
  .gl-ex-es,
  .gl-ex-en,
  .bio-paragraph,
  .fold-body .reading-paragraph,
  .poem-stanza-es,
  .poem-stanza-en,
  .song-lyric-es,
  .song-lyric-en,
  .expression-card p,
  .expression-example p,
  .indicative-example,
  .subj-tense-examples,
  .trigger-example,
  .conditional-examples,
  .contextual-quiz-card p,
  .subj-tip-card p {
    overflow-wrap: break-word;
    word-break: normal;
    hyphens: auto;
  }
  .drop-cap::first-letter,
  .bio-paragraph:first-of-type::first-letter,
  .fold-body .reading-paragraph:first-child::first-letter {
    float: none;
    font-size: 1.65em;
    line-height: 1;
    margin: 0 0.12em 0 0;
  }
  .lesson-status-control,
  .chapter-icon-row,
  .home-actions,
  .home-rec,
  .expression-card header,
  .indicative-card-head,
  .subj-tense-head,
  .contextual-quiz-head,
  .contextual-quiz-score,
  .verb-table-header,
  .quiz-header,
  .quiz-results-actions {
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .section-lesson-card,
  .home-stat,
  .home-daily-grid button,
  .lesson-mini-card,
  .expression-card,
  .indicative-card,
  .subj-tense-card,
  .trigger-card,
  .subj-tip-card,
  .contextual-quiz-card,
  .conditional-pattern-block,
  .quiz-modal,
  .sync-modal {
    min-width: 0;
    height: auto !important;
    max-height: none;
  }
  .indicative-card-grid,
  .participle-workshop-grid,
  .golden-rule-pair,
  .subj-tense-tabs,
  .subj-tense-grid,
  .trigger-grid,
  .tips-grid-block,
  .contextual-quiz-choices,
  .indicative-contrast-grid,
  .subj-contrast-grid,
  .conditional-examples,
  .expressions-stats,
  .expressions-toolbar,
  .expressions-grid,
  .phrase-list,
  .lesson-grid,
  .conjugation-grid,
  .rule-grid,
  .examples-grid,
  .song-section-grid,
  .poem-vocab-grid,
  .writing-feedback-grid {
    grid-template-columns: 1fr !important;
  }
  .lesson-table,
  .tense-group-table,
  .indicative-conj-table,
  .subj-tense-grid table {
    min-width: 560px;
  }
  .indicative-timeline-wrap {
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .indicative-timeline {
    min-width: 620px;
  }
  .dict-popup,
  .quiz-modal,
  .sync-modal {
    width: min(100vw - 24px, 560px);
  }
}

@media (max-width: 380px) {
  .mobile-bar {
    grid-template-columns: 40px minmax(0, 1fr) auto;
  }
  .study-timer {
    grid-column: 1 / 3;
    order: 2;
    width: 100%;
  }
  .mobile-tools-toggle {
    order: 2;
  }
  .header-search {
    order: 3;
  }
  .top-tools {
    order: 4;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .home-actions,
  .section-overview-stats {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 820px) and (max-width: 1180px) and (min-height: 1000px) {
  .book-page {
    max-width: 860px;
  }
  .home-title {
    font-size: clamp(68px, 8vw, 92px);
  }
  .home-subtitle {
    max-width: 720px;
  }
  .book-root.boox-mode .mobile-bar {
    position: static;
  }
  .book-root.boox-mode .book-page {
    padding-top: 42px;
  }
}

/* Phones/tablets get a dedicated touch-scroll panel. This keeps scrolling
   working even when a mobile browser or an old PWA shell refuses body scroll. */
@media (max-width: 1100px) {
  html,
  body,
  #root {
    height: 100%;
    overflow: hidden !important;
  }
  body {
    position: relative;
    overscroll-behavior: none;
  }
  .book-root {
    height: 100dvh;
    min-height: 100dvh;
    padding-top: 0 !important;
    overflow: hidden !important;
  }
  .book-shell {
    display: block;
    height: 100%;
    min-height: 0;
  }
  .mobile-bar {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 100;
  }
  .book-main {
    position: fixed;
    inset: var(--mobile-bar-space, 0px) 0 0 0;
    display: block;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow-x: hidden !important;
    overflow-y: scroll !important;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
  }
  .book-page {
    flex: none;
    min-height: auto;
  }
  .book-root.focus-mode .book-main {
    top: 0;
  }
}
`,Gs={soy:["ser"],eres:["ser"],es:["ser"],somos:["ser"],son:["ser"],fui:["ser","ir"],fuiste:["ser","ir"],fue:["ser","ir"],fuimos:["ser","ir"],fueron:["ser","ir"],era:["ser"],eras:["ser"],eramos:["ser"],eran:["ser"],estoy:["estar"],estas:["estar"],esta:["estar"],estamos:["estar"],estan:["estar"],estuve:["estar"],estuvo:["estar"],estuvieron:["estar"],tengo:["tener"],tienes:["tener"],tiene:["tener"],tenemos:["tener"],tienen:["tener"],tuve:["tener"],tuvo:["tener"],tuvieron:["tener"],voy:["ir"],vas:["ir"],va:["ir"],vamos:["ir"],van:["ir"],iba:["ir"],ibas:["ir"],iban:["ir"],puedo:["poder"],puedes:["poder"],puede:["poder"],podemos:["poder"],pueden:["poder"],pude:["poder"],pudo:["poder"],pudieron:["poder"],quiero:["querer"],quieres:["querer"],quiere:["querer"],queremos:["querer"],quieren:["querer"],quise:["querer"],quiso:["querer"],hago:["hacer"],haces:["hacer"],hace:["hacer"],hacemos:["hacer"],hacen:["hacer"],hice:["hacer"],hizo:["hacer"],hicieron:["hacer"],digo:["decir"],dices:["decir"],dice:["decir"],decimos:["decir"],dicen:["decir"],dije:["decir"],dijo:["decir"],dijeron:["decir"],veo:["ver"],ves:["ver"],ve:["ver"],vemos:["ver"],ven:["ver"],vi:["ver"],vio:["ver"],vieron:["ver"],vengo:["venir"],vienes:["venir"],viene:["venir"],vienen:["venir"],vine:["venir"],vino:["venir"],vinieron:["venir"],pongo:["poner"],pones:["poner"],pone:["poner"],ponen:["poner"],puse:["poner"],puso:["poner"],pusieron:["poner"],salgo:["salir"],sales:["salir"],sale:["salir"],salen:["salir"],se:["saber","ser"],sabe:["saber"],saben:["saber"],supe:["saber"],supo:["saber"],dijeron:["decir"],doy:["dar"],das:["dar"],da:["dar"],dan:["dar"],di:["dar","decir"],dio:["dar"],dieron:["dar"]},Ds=new Set(["si","sí","tu","tú","el","él","mi","mí","te","té","se","sé","de","dé","mas","más","esta","está"]),So={si:{main:"if",pos:"conjunction",source:"Local dictionary",stored:!0},sí:{main:"yes",pos:"affirmation",source:"Local dictionary",stored:!0},tu:{main:"your",pos:"possessive adjective",source:"Local dictionary",stored:!0},tú:{main:"you",pos:"subject pronoun",source:"Local dictionary",stored:!0},el:{main:"the",pos:"article",source:"Local dictionary",stored:!0},él:{main:"he",pos:"subject pronoun",source:"Local dictionary",stored:!0},mi:{main:"my",pos:"possessive adjective",source:"Local dictionary",stored:!0},mí:{main:"me",pos:"prepositional pronoun",source:"Local dictionary",stored:!0},te:{main:"you / to you",pos:"object pronoun",source:"Local dictionary",stored:!0},té:{main:"tea",pos:"noun",source:"Local dictionary",stored:!0},se:{main:"himself / herself / themselves",pos:"reflexive pronoun",source:"Local dictionary",stored:!0},sé:{main:"I know",pos:"verb form of saber",source:"Local dictionary",stored:!0},de:{main:"of / from",pos:"preposition",source:"Local dictionary",stored:!0},dé:{main:"give",pos:"subjunctive/command form of dar",source:"Local dictionary",stored:!0},mas:{main:"but",pos:"formal conjunction",source:"Local dictionary",stored:!0},más:{main:"more",pos:"adverb",source:"Local dictionary",stored:!0},esta:{main:"this",pos:"demonstrative adjective",source:"Local dictionary",stored:!0},está:{main:"is",pos:"verb form of estar",source:"Local dictionary",stored:!0}};function Ja(a){return String(a||"").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã¼/g,"ü").replace(/Â¡/g,"¡").replace(/Â¿/g,"¿").trim().replace(/^[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+|[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+$/gu,"").trim().toLowerCase()}function ha(a){return ve(a).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function ve(a){return Ja(a).replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function Us(a,s,o,n){if(!s.endsWith(o)||s.length<=o.length+1)return;const t=s.slice(0,-o.length);n.forEach(i=>a.add(`${t}${i}`))}function xa(a){const s=ve(a),o=ha(a),n=Ds.has(s),t=new Set(n?[s]:[s,o]);if(!o)return[];if(n)return[...t].filter(Boolean);for(const i of Gs[o]||[])t.add(i);return o.endsWith("ces")&&o.length>5&&t.add(`${o.slice(0,-3)}z`),o.endsWith("es")&&o.length>4&&t.add(o.slice(0,-2)),o.endsWith("s")&&o.length>3&&t.add(o.slice(0,-1)),o.endsWith("as")&&o.length>4&&(t.add(o.slice(0,-1)),t.add(`${o.slice(0,-2)}o`)),o.endsWith("os")&&o.length>4&&t.add(o.slice(0,-1)),o.endsWith("a")&&o.length>3&&t.add(`${o.slice(0,-1)}o`),[["amos",["ar"]],["ando",["ar"]],["ado",["ar"]],["aste",["ar"]],["aron",["ar"]],["aba",["ar"]],["abas",["ar"]],["abamos",["ar"]],["aban",["ar"]],["arian",["ar"]],["aria",["ar"]],["are",["ar"]],["aras",["ar"]],["ara",["ar"]],["as",["ar"]],["an",["ar"]],["a",["ar"]],["e",["ar"]],["o",["ar"]],["emos",["er"]],["iendo",["er","ir"]],["ido",["er","ir"]],["iste",["er","ir"]],["ieron",["er","ir"]],["ia",["er","ir"]],["ias",["er","ir"]],["iamos",["er","ir"]],["ian",["er","ir"]],["eria",["er"]],["irian",["ir"]],["iria",["ir"]],["ere",["er"]],["ire",["ir"]],["es",["er","ir"]],["en",["er","ir"]],["e",["er","ir"]],["imos",["ir"]],["io",["er","ir"]],["i",["er","ir"]],["o",["er","ir"]]].forEach(([i,r])=>Us(t,o,i,r)),[...t].filter(Boolean)}function qo(a){return a.topicTerm||a.spanish}function Bs(a){return a.topicEnglish||a.english}function Co(a,s=[],o=[]){const n=ve(a),t=new Set(xa(a)),i=s.find(r=>ve(r.word)===n)||s.find(r=>t.has(ha(r.word)));if(i)return{main:i.translation||"Saved in Memoria",extras:i.extras||[],pos:i.pos||"Memoria",source:"Memoria",stored:!0,matchedWord:i.word};for(const r of o||[])for(const l of r.entries||[]){const h=[l.spanish,l.topicTerm,qo(l)];if(h.some(c=>ve(c)===n)||h.some(c=>t.has(ha(c))))return{main:Bs(l),extras:l.topicEnglish&&l.topicEnglish!==l.english?[l.english].filter(Boolean):[],pos:r.title||l.sourceGroupTitle||"Palabras",source:"Palabras",stored:!0,matchedWord:qo(l)}}return null}async function Oo(a){const s=[],o=Ja(a),n=ve(o);if(So[n])return{...So[n],matchedWord:n};const t=[...new Set([o,...xa(o)])].filter(Boolean).slice(0,4),i=h=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(h):void 0;async function r(h){const c=encodeURIComponent(h);try{const m=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${c}&src=es&dst=en`,{signal:i(3500)});if(m.ok){const u=await m.json();if(Array.isArray(u)&&u.length>0){const v=u[0],p=v?.translations?.[0]?.text?.trim();if(p){const g=(v.translations||[]).slice(1,5).map(N=>N.text?.trim()).filter(Boolean),f=[];for(const N of v.translations||[]){for(const y of N.examples||[])y.src&&y.dst&&f.length<2&&f.push({es:y.src,en:y.dst});if(f.length>=2)break}return{main:p,extras:g,pos:v.pos||v.translations?.[0]?.pos||"",examples:f,source:"Linguee",matchedWord:h}}}}else s.push(`Linguee ${h}: HTTP ${m.status}`)}catch(m){s.push(`Linguee ${h}: ${m.message}`)}try{const m=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${c}&pretty=true`,{signal:i(3500)});if(m.ok){const v=(await m.json())?.tuc||[],p=v.map(f=>f?.phrase?.text?.trim()).filter(Boolean),g=v.flatMap(f=>(f?.meanings||[]).map(N=>N?.text?.trim())).filter(Boolean);if(p.length>0){const f=p[0],N=p.slice(1,5).filter(y=>y.toLowerCase()!==f.toLowerCase());return{main:f,extras:N,pos:"",meanings:g.slice(0,3),source:"Glosbe",matchedWord:h}}}else s.push(`Glosbe ${h}: HTTP ${m.status}`)}catch(m){s.push(`Glosbe ${h}: ${m.message}`)}try{const m=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${c}`,{signal:i(3500)});if(m.ok){const u=await m.json();if(Array.isArray(u)&&u.length>0){const p=u[0]?.meanings?.[0],g=p?.definitions?.[0]?.definition?.trim();if(g)return{main:g,extras:[],pos:p?.partOfSpeech||"",source:"Diccionario",isDefinition:!0,matchedWord:h}}}else s.push(`FreeDict ${h}: HTTP ${m.status}`)}catch(m){s.push(`FreeDict ${h}: ${m.message}`)}return null}for(const h of t){const c=await r(h);if(c)return c}const l=encodeURIComponent(o);try{const h=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${l}`,{signal:i(4e3)});if(h.ok){const m=(await h.json())?.sentences?.[0]?.trans?.trim();if(m&&m.toLowerCase()!==o.toLowerCase())return{main:m,extras:[],pos:"",source:"Google"}}}catch(h){s.push(`Google: ${h.message}`)}try{const h=await fetch(`https://api.mymemory.translated.net/get?q=${l}&langpair=es|en`,{signal:i(4e3)});if(h.ok){const m=(await h.json())?.responseData?.translatedText?.trim();if(m&&m.toLowerCase()!==o.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(m))return{main:m,extras:[],pos:"",source:"MyMemory"}}}catch(h){s.push(`MyMemory: ${h.message}`)}return s.length&&console.warn("Lookup failed for",a,s),null}const Xe="study-time-v1",Qa=240;function va(a=new Date){return a.toISOString().slice(0,10)}function $s(a){if(!a||typeof a!="object")return null;const s=String(a.id||"").trim();if(!s)return null;const o=Math.max(0,Math.floor(Number(a.seconds)||0));return o?{id:s,chapterId:String(a.chapterId||"unknown"),date:a.date||va(new Date(Number(a.startedAt)||Date.now())),seconds:o,startedAt:Number(a.startedAt)||Number(a.updatedAt)||Date.now(),updatedAt:Number(a.updatedAt)||Number(a.startedAt)||Date.now()}:null}function Rs(a={}){return(Array.isArray(a.sessions)?a.sessions:[]).map($s).filter(Boolean).sort((s,o)=>(o.updatedAt||0)-(s.updatedAt||0)).slice(0,Qa)}function ke(a,s=()=>!0){return a.reduce((o,n)=>o+(s(n)?n.seconds:0),0)}function Os(a){const s={};for(const o of a)s[o.chapterId]=(s[o.chapterId]||0)+o.seconds;return s}function Fe(a={}){const s=va(),o=a.date===s?a.date:s,n=a.date===s?Math.max(0,Number(a.todaySeconds)||0):0,t=Rs(a);return{totalSeconds:Math.max(0,Number(a.totalSeconds)||0),todaySeconds:n,date:o,byChapter:a.byChapter&&typeof a.byChapter=="object"?a.byChapter:{},sessions:t,updatedAt:a.updatedAt||Date.now()}}function Vs(a={},s={}){const o=Fe(a),n=Fe(s),t=new Map;for(const y of[...n.sessions,...o.sessions]){const S=t.get(y.id);(!S||(y.updatedAt||0)>=(S.updatedAt||0))&&t.set(y.id,y)}const i=[...t.values()].sort((y,S)=>(S.updatedAt||0)-(y.updatedAt||0)).slice(0,Qa),r=ke(o.sessions),l=ke(n.sessions),h=ke(i),c=va(),m=ke(o.sessions,y=>y.date===c),u=ke(n.sessions,y=>y.date===c),v=ke(i,y=>y.date===c),p=Os(i),g={...p};for(const y of new Set([...Object.keys(n.byChapter||{}),...Object.keys(o.byChapter||{})])){const S=ke(o.sessions,T=>T.chapterId===y),q=ke(n.sessions,T=>T.chapterId===y),G=Math.max(0,(Number(o.byChapter?.[y])||0)-S),z=Math.max(0,(Number(n.byChapter?.[y])||0)-q);g[y]=Math.max(G,z)+(p[y]||0)}const f=Math.max(Math.max(0,o.totalSeconds-r),Math.max(0,n.totalSeconds-l)),N=Math.max(Math.max(0,o.todaySeconds-m),Math.max(0,n.todaySeconds-u));return{totalSeconds:f+h,todaySeconds:N+v,date:c,byChapter:g,sessions:i,updatedAt:Math.max(Number(o.updatedAt)||0,Number(n.updatedAt)||0,Date.now())}}function Hs(a={},s,o,n=Date.now()){const t=Fe(a),i=va(new Date(n)),r=o||`${i}-${s||"lesson"}`,l=[...t.sessions],h=l.findIndex(c=>c.id===r);return h>=0?l[h]={...l[h],chapterId:s,date:i,seconds:l[h].seconds+1,updatedAt:n}:l.unshift({id:r,chapterId:s,date:i,seconds:1,startedAt:n,updatedAt:n}),{...t,totalSeconds:t.totalSeconds+1,todaySeconds:t.date===i?t.todaySeconds+1:1,date:i,byChapter:{...t.byChapter,[s]:(Number(t.byChapter?.[s])||0)+1},sessions:l.sort((c,m)=>(m.updatedAt||0)-(c.updatedAt||0)).slice(0,Qa),updatedAt:n}}function Me(a=0){const s=Math.max(0,Math.floor(Number(a)||0)),o=Math.floor(s/3600),n=Math.floor(s%3600/60);return o>0?`${o}h ${String(n).padStart(2,"0")}m`:n>0?`${n}m`:`${s}s`}const ca="google-drive-client-id-v1",Vo="learn-spanish-sync.json",Fs="https://www.googleapis.com/auth/drive.appdata";let La=null;function Ws(){return typeof window>"u"?Promise.reject(new Error("No browser window")):window.google?.accounts?.oauth2?Promise.resolve(window.google):(La||(La=new Promise((a,s)=>{const o=document.createElement("script");o.src="https://accounts.google.com/gsi/client",o.async=!0,o.defer=!0,o.onload=()=>a(window.google),o.onerror=()=>s(new Error("Could not load Google sign-in")),document.head.appendChild(o)})),La)}async function Eo(a,s=""){const o=await Ws();return new Promise((n,t)=>{o.accounts.oauth2.initTokenClient({client_id:a,scope:Fs,prompt:s,callback:r=>{r?.access_token?n(r.access_token):t(new Error(r?.error||"Google sign-in failed"))},error_callback:r=>t(new Error(r?.message||"Google sign-in failed"))}).requestAccessToken()})}async function Xa(a,s,o={}){const n=await fetch(s,{...o,headers:{...o.headers||{},Authorization:`Bearer ${a}`}});if(!n.ok){const t=await n.text().catch(()=>"");throw new Error(t||`Google Drive HTTP ${n.status}`)}return n}async function _s(a){const s=new URLSearchParams({spaces:"appDataFolder",fields:"files(id,name,modifiedTime)",q:`name='${Vo}' and trashed=false`});return((await(await Xa(a,`https://www.googleapis.com/drive/v3/files?${s}`)).json()).files||[])[0]||null}async function Ys(a,s){return s?(await Xa(a,`https://www.googleapis.com/drive/v3/files/${s}?alt=media`)).json():null}async function Ks(a,s,o=null){const n=o?{}:{name:Vo,parents:["appDataFolder"]},t=`learn-spanish-${Date.now()}`,i=[`--${t}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(n),`--${t}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(s),`--${t}--`].join(`\r
`),r=o?`https://www.googleapis.com/upload/drive/v3/files/${o}?uploadType=multipart`:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";await Xa(a,r,{method:o?"PATCH":"POST",headers:{"Content-Type":`multipart/related; boundary=${t}`},body:i})}function Js(a={},s={}){const o={...s};for(const[n,t]of Object.entries(a||{})){const i=o[n],r=t?.reviewedAt||t?.dueAt||0,l=i?.reviewedAt||i?.dueAt||0;o[n]=r>=l?t:i}return o}function Qs(a=[],s=[]){const o=new Map;for(const n of[...s,...a]){const t=ve(n.word),i=o.get(t);if(!i){o.set(t,n);continue}const r=Math.max(i.savedAt||0,i.translatedAt||0,i.review?.reviewedAt||0),l=Math.max(n.savedAt||0,n.translatedAt||0,n.review?.reviewedAt||0),h=l>=r?n:i,c=l>=r?i:n;o.set(t,{...c,...h,tags:Array.from(new Set([...c.tags||[],...h.tags||[]])),extras:Array.from(new Set([...c.extras||[],...h.extras||[]])),favorite:!!(c.favorite||h.favorite),difficult:!!(c.difficult||h.difficult),review:(h.review?.reviewedAt||0)>=(c.review?.reviewedAt||0)?h.review:c.review})}return[...o.values()].sort((n,t)=>(t.savedAt||0)-(n.savedAt||0))}function Xs(a={},s={}){const o={...s,...a};for(const n of new Set([...Object.keys(a||{}),...Object.keys(s||{})]))a[n]==="understood"||s[n]==="understood"?o[n]="understood":(a[n]==="read"||s[n]==="read")&&(o[n]="read");return o}function Zs(a,s){if(!s)return a;const o=Date.parse(a.exportedAt||"")||0,n=Date.parse(s.exportedAt||"")||0,t=o>=n?a:s;return{...t,app:"Learn Spanish",version:4,exportedAt:new Date().toISOString(),savedWords:Qs(a.savedWords,s.savedWords),visitedChapters:Array.from(new Set([...s.visitedChapters||[],...a.visitedChapters||[]])),palabrasProgress:Js(a.palabrasProgress,s.palabrasProgress),lessonStatuses:Xs(a.lessonStatuses,s.lessonStatuses),studyTime:Vs(a.studyTime,s.studyTime),writingEntries:[...new Map([...s.writingEntries||[],...a.writingEntries||[]].map(i=>[i.id,i])).values()].sort((i,r)=>(r.createdAt||0)-(i.createdAt||0)).slice(0,80),booxMode:!!t.booxMode,fontScale:t.fontScale,audioSettings:t.audioSettings,translationMode:t.translationMode}}const en=1440*60*1e3,an="learner-profile-v1";function be(a){return String(a||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function on(a,s,o=Date.now()){const n=a?.intervalDays||0,t=a?.ease||2.35,i=a?.reps||0,r={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:i?2:1,multiplier:t},easy:{label:"Easy",easeDelta:.12,minDays:i?4:3,multiplier:t+.7}}[s]||{label:"Good",easeDelta:0,minDays:1,multiplier:t},l=Math.max(1.35,Math.min(3.2,t+r.easeDelta)),h=s==="again"?r.minDays:Math.max(r.minDays,(n||1)*r.multiplier);return{...a,ease:l,intervalDays:h,dueAt:o+h*en,reps:s==="again"?0:i+1,lapses:s==="again"?(a?.lapses||0)+1:a?.lapses||0,seen:!0,mastered:s==="easy"||h>=7,lastRating:r.label,reviewedAt:o}}function sn(a){const s=[a.title,a.heading,a.text];for(const o of a.paragraphs||[])s.push(o);for(const o of a.pairs||[])s.push(o.es,o.en);for(const o of a.columns||[])s.push(o.es,o.en);for(const o of a.phrases||[])s.push(o.es,o.en);for(const o of a.words||[])s.push(o.es,o.en);for(const o of a.lessons||[]){s.push(o.title,o.subtitle,o.intro);for(const n of o.sections||[]){s.push(n.heading,n.text,n.tip,n.takeaway);for(const t of n.table?.rows||[])s.push(...t);for(const t of n.examples||[])s.push(t.es,t.en)}}for(const o of a.stories||[])s.push(o.title,o.level,...o.paragraphs||[]);for(const o of a.bios||[]){s.push(o.title,o.subtitle,o.dates);for(const n of o.levels||[])s.push(n.heading,...n.paragraphs||[],n.vocab)}for(const o of a.poems||[]){s.push(o.title,o.attribution,o.note,o.opening,o.learningNote);for(const n of o.stanzas||[])s.push(n.es,n.en);for(const n of o.vocab||[])s.push(n.es,n.en)}for(const o of a.songs||[]){s.push(o.title,o.attribution,o.note,o.learningNote);for(const n of o.sections||[])s.push(n.label,n.es,n.en);for(const n of o.vocab||[])s.push(n.es,n.en)}return s.filter(Boolean).join(" ")}function nn(a,s,o=[],n=[]){const t=be(a);if(t.length<2)return[];const i=[];for(const l of s||[]){const h=[l.title,l.subtitle,l.intro,l.sectionLabel,l.level].filter(Boolean).join(" ");be(h).includes(t)&&i.push({type:"chapter",title:l.title,meta:`${l.sectionLabel} - ${l.level}`,chapter:l,context:l.subtitle||l.intro||""});for(const c of l.blocks||[]){const m=sn(c);be(m).includes(t)&&i.push({type:"match",title:l.title,meta:`${l.sectionLabel} - match inside lesson`,chapter:l,context:Io(m,a)})}}for(const l of o||[]){const h=[l.word,l.translation,l.pos,...l.tags||[]].join(" ");be(h).includes(t)&&i.push({type:"memoria",title:l.word,meta:l.translation||"Memoria",context:(l.tags||[]).join(", ")})}for(const l of n||[]){const h=[l.prompt,l.text].join(" ");be(h).includes(t)&&i.push({type:"writing",title:"Writing entry",meta:new Date(l.createdAt||Date.now()).toLocaleDateString(),context:Io(h,a)})}const r=new Set;return i.filter(l=>{const h=`${l.type}:${l.title}:${l.context}`;return r.has(h)?!1:(r.add(h),!0)}).slice(0,18)}function Io(a,s){const o=String(a||"").replace(/\s+/g," ").trim(),n=be(s),t=o.toLowerCase().indexOf(String(s||"").toLowerCase());if(t>=0)return o.slice(Math.max(0,t-45),t+95).trim();let i="";const r=[];for(let m=0;m<o.length;m++){const u=o[m].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"");if(u)for(const v of u)i+=v,r.push(m)}const l=i.indexOf(n);if(l<0)return o.slice(0,120);const h=r[Math.max(0,l-45)]??0,c=r[Math.min(r.length-1,l+n.length+95)]??o.length;return o.slice(h,c).trim()}function tn(a,s={}){const o=String(a||""),n=be(o),t=o.trim()?o.trim().split(/\s+/).length:0,i=o.split(/[.!?]+/).map(q=>q.trim()).filter(Boolean),r=(o.match(/[.!?]/g)||[]).length||(i.length?1:0),l=(o.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,h=(o.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi)||[]).length,c=(o.match(/\b(soy|eres|es|somos|son|estoy|estas|está|esta|estamos|estan|están|tengo|tienes|tiene|tenemos|tienen|quiero|quieres|quiere|puedo|puedes|puede|voy|vas|va|vamos|van|hago|haces|hace|digo|dices|dice|veo|ves|ve|vivo|vives|vive|trabajo|trabajas|trabaja|estudio|estudias|estudia|fui|fue|era|tenia|tenía|hablo|hablas|habla|aprendo|aprendes|aprende)\b/gi)||[]).length,m=s?.target?xa(s.target).map(be):[],u=s?.target?m.some(q=>n.includes(q)):!0,v=(o.match(/\b(the|and|but|because|with|from|about|today|question|answer|write|spanish)\b/gi)||[]).length,p=(o.match(/\b(tambien|ademas|tenia|dias|mas|esta|si|tu|el)\b/gi)||[]).length,g=(o.match(/\b(el|la|los|las|un|una|yo|tu|tú|usted|nosotros|porque|pero|que|de|con|para|por|en|mi|mis|su|sus|muy|mas|más|tambien|también)\b/gi)||[]).length,f=i.map(q=>be(q).split(" ")[0]).filter(Boolean).reduce((q,G,z,T)=>q+(z>0&&G===T[z-1]?1:0),0),N=i.filter(q=>q.split(/\s+/).filter(Boolean).length>28).length,y=[];t<20&&y.push("Add more detail."),r<2&&y.push("Use at least two complete sentences."),u||y.push("Use the prompt word or idea."),l===0&&y.push("Check accents when needed."),p>0&&y.push("Look for missing accents: también, además, tenía, días, más, está, sí, tú, él."),v>0&&y.push("Replace the English words with Spanish before saving."),h<1&&t>=20&&y.push("Add a connector like porque, aunque, or entonces."),c<2&&t>=15&&y.push("Use more conjugated verbs."),g<3&&t>=12&&y.push("Make it sound more Spanish with small glue words: que, de, en, para, por, con."),f>0&&y.push("Vary how your sentences begin."),N>0&&y.push("Split one long sentence into two clearer sentences."),t>=35&&r>=3&&h>=1&&v===0&&p===0&&y.push("Strong draft. Next: try one sentence in a different tense.");const S=Math.max(0,Math.min(100,20+Math.min(t,60)+Math.min(r*8,20)+Math.min(h*6,12)+Math.min(c*4,16)+Math.min(g*2,10)+(u?10:-10)-Math.min(v*8,24)-Math.min(p*3,12)-Math.min(f*4,8)-Math.min(N*5,10)));return{words:t,sentences:r,accents:l,connectors:h,verbs:c,targetUsed:u,likelyEnglish:v,accentCandidates:p,spanishSignals:g,repeatedStarts:f,longSentences:N,tips:y,score:S}}function rn({chapters:a=[],visitedChapters:s=[],lessonStatuses:o={},palabrasProgress:n={},savedWords:t=[],writingEntries:i=[]}={},r=Date.now()){const l=Object.values(o||{}),h=Object.values(n||{}),c=t.map(u=>u.review).filter(Boolean),m=[...h,...c];return{chapters:{total:a.length,visited:a.filter(u=>s.includes(u.id)).length,unvisited:Math.max(0,a.length-a.filter(u=>s.includes(u.id)).length)},lessons:{read:l.filter(u=>u==="read"||u==="understood").length,understood:l.filter(u=>u==="understood").length},vocabulary:{seen:m.filter(u=>u?.seen).length,due:m.filter(u=>u?.seen&&(u.dueAt||0)<=r).length,mastered:m.filter(u=>u?.mastered).length,difficult:t.filter(u=>u.difficult||u.review?.lastRating==="Hard").length,favorite:t.filter(u=>u.favorite).length},writing:{count:i.length,words:i.reduce((u,v)=>u+(v.feedback?.words||0),0),needsPractice:i.filter(u=>(u.feedback?.score||0)<70).length}}}function ln({chapters:a=[],lessonStatuses:s={},palabrasProgress:o={},savedWords:n=[],writingEntries:t=[]}={},i=Date.now()){const r=[];for(const l of Object.values(o||{}))l?.seen&&((l.dueAt||0)<=i||l.lastRating==="Hard")&&r.push({type:"palabra",title:l.spanish||"Palabra",detail:l.english||l.lastRating||"",dueAt:l.dueAt||i,priority:l.lastRating==="Again"?3:l.lastRating==="Hard"?2:1});for(const l of n||[]){const h=l.review?.seen&&(l.review?.dueAt||0)<=i;(h||l.difficult||!l.translation)&&r.push({type:"memoria",title:l.word,detail:l.translation||"Needs translation",dueAt:l.review?.dueAt||i,priority:l.difficult?3:h?2:1})}for(const[l,h]of Object.entries(s||{}))if(h==="read"){const c=l.split("::").pop()||l;r.push({type:"lesson",title:c,detail:"Mark understood after review",dueAt:i,priority:1})}for(const l of t||[])((l.feedback?.score||0)<70||l.feedback?.tips?.length)&&r.push({type:"writing",title:l.prompt||"Writing practice",detail:(l.feedback?.tips||[])[0]||"Rewrite once",dueAt:l.createdAt||i,priority:1});if(r.length<6){for(const l of a||[])if(l.alwaysVisible||r.push({type:"chapter",title:l.title,detail:`${l.sectionLabel} - ${l.level}`,chapter:l,dueAt:i+r.length,priority:0}),r.length>=6)break}return r.sort((l,h)=>h.priority-l.priority||(l.dueAt||0)-(h.dueAt||0)).slice(0,24)}function Ze(a){const s=new Set(a.tags||[]);return a.pending&&s.add("pending"),a.translation||s.add("needs-translation"),a.favorite&&s.add("favorite"),a.difficult&&s.add("difficult"),a.review?.mastered&&s.add("mastered"),a.review?.seen&&(a.review?.dueAt||0)<=Date.now()&&s.add("due"),/Group 1|cognates|near-cognates/i.test(a.pos||"")&&s.add("cognates"),/Group 2|function/i.test(a.pos||"")&&s.add("function-words"),/Group 3|remaining/i.test(a.pos||"")&&s.add("remaining"),[...s]}function Ho(a,s=Date.now()){return{due:a.filter(o=>o.review?.seen&&(o.review?.dueAt||0)<=s).length,mastered:a.filter(o=>o.review?.mastered).length,difficult:a.filter(o=>o.difficult||o.review?.lastRating==="Hard").length,favorite:a.filter(o=>o.favorite).length}}function dn(a){const s=["Spanish","English","Tags","Notes"],o=a.map(l=>[l.word,l.translation||"",Ze(l).join(" | "),[...l.extras||[],l.pos||""].filter(Boolean).join(" | ")]),n=[s,...o].map(l=>l.map(h=>`"${String(h).replace(/"/g,'""')}"`).join(",")).join(`
`),t=new Blob([n],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download="memoria-spanish.csv",r.click(),URL.revokeObjectURL(i)}function ge(a,s,o,n){return`${a||"chapter"}::${s}::${o}::${n}`}function na(a){return a?typeof a=="string"?a:Array.isArray(a)&&a.find(Boolean)||"":""}function cn(a){return a.intro||na(a.sections?.[0]?.paragraphs)||a.sections?.[0]?.text||"Open this grammar lesson and study it step by step."}function pn(a){return na(a.paragraphs)||"Open this story and read it with audio."}function mn(a){return na(a.levels?.[0]?.paragraphs)||a.subtitle||"Open this biography and read it by level."}function un(a){return a.note||a.opening||na(a.stanzas?.map(s=>s.es))||"Open this poem with its translation and vocabulary."}function hn(a){return a.note||na(a.sections?.map(s=>s.es))||"Open this song with organized sections and vocabulary."}function gn(a,s){const o=[];for(const n of a.blocks||[])n.type==="foldable-grammar"&&n.lessons.forEach((t,i)=>{const r=ge(a.id,"grammar",i,t.title);o.push({id:r,statusKey:r,parentChapterId:a.id,sectionId:s.id,sectionLabel:s.label,level:t.level||a.level,title:t.title,subtitle:t.subtitle||a.title,intro:cn(t),nestedTarget:{type:"grammar",index:i,key:r,cardId:r,title:t.title}})}),n.type==="foldable-stories"&&n.stories.forEach((t,i)=>{const r=ge(a.id,"story",i,t.title);o.push({id:r,statusKey:r,parentChapterId:a.id,sectionId:s.id,sectionLabel:s.label,level:t.level||a.level,title:t.title,subtitle:`${t.paragraphs?.length||0} paragraphs - audio reading`,intro:pn(t),nestedTarget:{type:"story",index:i,key:r,cardId:r,title:t.title}})}),n.type==="foldable-bios"&&n.bios.forEach((t,i)=>{const r=ge(a.id,"bio",i,t.title),l=[...new Set((t.levels||[]).map(h=>h.level).filter(Boolean))];o.push({id:r,statusKey:r,parentChapterId:a.id,sectionId:s.id,sectionLabel:s.label,level:l.join("-")||a.level,title:t.title,subtitle:t.subtitle||t.dates||a.title,intro:mn(t),nestedTarget:{type:"bio",index:i,key:r,cardId:r,title:t.title}})}),n.type==="foldable-poems"&&n.poems.forEach((t,i)=>{const r=ge(a.id,"poem",i,t.title);o.push({id:r,statusKey:r,parentChapterId:a.id,sectionId:s.id,sectionLabel:s.label,level:t.level||a.level,title:t.title,subtitle:t.attribution||a.title,intro:un(t),nestedTarget:{type:"poem",index:i,key:r,cardId:r,title:t.title}})}),n.type==="foldable-songs"&&n.songs.forEach((t,i)=>{const r=ge(a.id,"song",i,t.title);o.push({id:r,statusKey:r,parentChapterId:a.id,sectionId:s.id,sectionLabel:s.label,level:t.level||a.level,title:t.title,subtitle:t.attribution||a.title,intro:hn(t),nestedTarget:{type:"song",index:i,key:r,cardId:r,title:t.title}})});return o}function ga(a,s=[]){if(!a)return[];const o=[];for(const n of s){const t=gn(n,a);t.length>0?o.push(...t):o.push({...n,id:n.id,statusKey:n.id,sectionId:a.id,sectionLabel:a.label})}return o}function fn(a=[],s="ALL"){const o=[];for(const n of a)for(const t of n.chapters||[])(t.alwaysVisible||s==="ALL"||t.level===s)&&o.push({...t,sectionId:n.id,sectionLabel:n.label});return o}function bn(a=[],s=[]){const o=[];for(const n of a){const t=s.filter(i=>i.sectionId===n.id);o.push(...ga(n,t))}return o}function Za(a,s=new Set,o={}){const n=o[a.statusKey||a.id];return n==="read"||n==="understood"||s.has(a.id)}function xn(a=[],s=[],o=[],n={}){const t=new Set(o),i=bn(a,s),r=i.filter(c=>Za(c,t,n)).length,l=i.filter(c=>n[c.statusKey||c.id]==="understood").length,h=i.filter(c=>{const m=n[c.statusKey||c.id];return m==="read"||m==="understood"}).length;return{lessons:i,total:i.length,completed:r,read:h,understood:l,percent:i.length?Math.round(r/i.length*100):0}}function vn(a=[],s=[],o=[],n={}){const t=new Set(o);return a.map(i=>{const r=s.filter(c=>c.sectionId===i.id),l=ga(i,r),h=l.filter(c=>Za(c,t,n)).length;return{id:i.id,label:i.label,total:l.length,visited:h}}).filter(i=>i.total>0)}function yn(a=[],s=[],o={},n=4){const t=new Set(s),i=a.filter(r=>!Za(r,t,o));return(i.length?i:a).slice(0,n)}function wn({section:a,lessons:s,visitedSet:o,lessonStatuses:n,studyTime:t,onSelectChapter:i,SectionIconComponent:r}){if(!a)return null;const l=s||[],h=l.filter(u=>{const v=n?.[u.statusKey||u.id];return v==="read"||v==="understood"||o.has(u.id)}).length,c=l.filter(u=>n?.[u.statusKey||u.id]==="understood").length,m=a.id==="tiempos"?"Choose one tense lesson at a time. Start with the simple map, then move into compound tenses when the timeline feels clear.":"Choose one lesson from this section and read it slowly. Your progress stays attached to the exact lesson you open.";return e.jsxs("article",{className:"section-overview",children:[e.jsxs("header",{className:"section-overview-hero",children:[e.jsxs("div",{className:"chapter-icon-row",children:[e.jsx("div",{className:"chapter-icon-wrap",children:r?e.jsx(r,{id:a.id,size:22}):null}),e.jsxs("div",{children:[e.jsx("div",{className:"chapter-level-tag",children:"Sección"}),e.jsx("h1",{className:"chapter-title",children:a.label}),e.jsx("p",{className:"chapter-subtitle",children:a.sublabel})]})]}),e.jsx("p",{className:"chapter-intro",children:m}),e.jsxs("div",{className:"section-overview-stats","aria-label":"Section progress",children:[e.jsxs("span",{children:[e.jsx("strong",{children:l.length})," lecciones"]}),e.jsxs("span",{children:[e.jsx("strong",{children:h})," abiertas"]}),e.jsxs("span",{children:[e.jsx("strong",{children:c})," entendidas"]})]})]}),l.length?e.jsx("div",{className:"section-lesson-grid",children:l.map((u,v)=>{const p=n?.[u.statusKey||u.id],g=o.has(u.id),f=Number(t?.byChapter?.[u.id])||0,N=u.intro||u.subtitle||"Open the lesson and work through it at your own pace.";return e.jsxs("button",{type:"button",className:`section-lesson-card ${p?`status-${p}`:g?"status-opened":""}`,onClick:()=>i(u),children:[e.jsxs("span",{className:"section-lesson-topline",children:[e.jsx("span",{className:"section-lesson-index",children:String(v+1).padStart(2,"0")}),e.jsx("span",{className:"section-lesson-level",children:u.level})]}),e.jsx("span",{className:"section-lesson-title",children:u.title}),u.subtitle&&e.jsx("span",{className:"section-lesson-subtitle",children:u.subtitle}),e.jsx("span",{className:"section-lesson-preview",children:N}),e.jsxs("span",{className:"section-lesson-footer",children:[e.jsx("span",{className:"section-lesson-status",children:p==="understood"?"Entendido":p==="read"?"Leído":g?"Abierto":"Nuevo"}),f>0&&e.jsx("span",{className:"section-lesson-time",children:Me(f)})]})]},u.id)})}):e.jsxs("div",{className:"empty",children:[e.jsx(Se,{size:28}),e.jsx("p",{children:"No hay lecciones en este nivel."})]})]})}const kn=["A1","A2","B1","B2"],To="lesson-status-v1",Aa="audio-settings-v1",Ra="writing-practice-v1",Pa="translation-mode-v1",Ma="boox-mode-v1",jn={tiempos:ba,verbos:$a,verbos2:$a,gramatica:js,lectura:ks,vocabulario:Mo,palabras:Do,frases:ws,tips:_e,resumen:Fa};function Oa({id:a,size:s=18,className:o=""}){const n=jn[a]||ma;return e.jsx(n,{size:s,className:o})}const je=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]},Ss,qs]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:zs},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"expresiones",level:"B1",title:"Expresiones",subtitle:"648 Spanish expressions",intro:"Four groups ranked from most-used to least-used. Search, browse by group, and open each card to read the example sentence.",blocks:[{type:"expressions-library",library:Cs}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function Nn(a){const s=[];let o="",n="normal";for(let t=0;t<a.length;t++){const i=a[t];i==="["?(o&&s.push({text:o,mode:n}),o="",n="irreg"):i==="]"?(o&&s.push({text:o,mode:"irreg"}),o="",n="normal"):i==="{"?(o&&s.push({text:o,mode:n}),o="",n="ending"):i==="}"?(o&&s.push({text:o,mode:"ending"}),o="",n="normal"):o+=i}return o&&s.push({text:o,mode:n}),s}function ne({raw:a}){return e.jsx(e.Fragment,{children:Nn(a).map((s,o)=>{const n=s.mode==="irreg"?"irreg":s.mode==="ending"?"ending":"";return e.jsx("span",{className:n,children:s.text},o)})})}function Re(a){return String(a||"").replace(/[\[\]{}]/g,"")}function ae(a){return String(a||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function zn({tenses:a,verbName:s}){const[o,n]=b.useState(!1),[t,i]=b.useState([]),[r,l]=b.useState(0),[h,c]=b.useState(""),[m,u]=b.useState(null),[v,p]=b.useState(0),[g,f]=b.useState(!1);function N(){const O=[];for(const K of a)for(const k of K.forms||[])O.push({tense:K.name,pronoun:k.p,answer:Re(k.f)});const D=[...O].sort(()=>Math.random()-.5);return D.slice(0,Math.min(8,D.length))}function y(){i(N()),l(0),c(""),u(null),p(0),f(!1),n(!0)}function S(O){if(O&&O.preventDefault(),m)return;const D=t[r],K=ae(h)===ae(D.answer);u(K?"correct":"incorrect"),K&&p(k=>k+1)}function q(){if(r+1>=t.length){f(!0);return}l(O=>O+1),c(""),u(null)}function G(){window.speechSynthesis?.cancel(),n(!1)}const z=t[r],T=t.length;return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"quiz-trigger-btn",onClick:y,children:[e.jsx(Se,{size:14}),"Practicar"]}),o&&e.jsx("div",{className:"quiz-overlay",onClick:G,children:e.jsxs("div",{className:"quiz-modal",onClick:O=>O.stopPropagation(),children:[e.jsxs("header",{className:"quiz-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),e.jsx("h2",{className:"quiz-title",children:s})]}),e.jsx("button",{className:"quiz-close",onClick:G,"aria-label":"Close",children:e.jsx(xe,{size:18})})]}),g?e.jsxs("div",{className:"quiz-results",children:[e.jsxs("div",{className:"quiz-results-circle",children:[e.jsxs("div",{className:"quiz-results-pct",children:[Math.round(v/T*100),"%"]}),e.jsxs("div",{className:"quiz-results-fraction",children:[v," / ",T]})]}),e.jsx("h3",{className:"quiz-results-title",children:v===T?"¡Perfecto!":v>=T*.75?"Muy bien":v>=T*.5?"Sigue practicando":"Vamos a repasar"}),e.jsx("p",{className:"quiz-results-msg",children:v===T?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":v>=T*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),e.jsxs("div",{className:"quiz-results-actions",children:[e.jsxs("button",{className:"quiz-retry-btn",onClick:y,children:[e.jsx(Ya,{size:14}),"Otra vez"]}),e.jsx("button",{className:"quiz-done-btn",onClick:G,children:"Cerrar"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"quiz-progress",children:[e.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",r+1," de ",T]}),e.jsx("div",{className:"quiz-progress-bar",children:e.jsx("div",{className:"quiz-progress-fill",style:{width:`${r/T*100}%`}})})]}),e.jsxs("div",{className:"quiz-question",children:[e.jsx("div",{className:"quiz-tense-label",children:z.tense}),e.jsxs("div",{className:"quiz-prompt",children:[e.jsx("span",{className:"quiz-pronoun",children:z.pronoun}),e.jsx("span",{className:"quiz-blank",children:"________"})]}),e.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",e.jsx("em",{children:s.toLowerCase()})," para esta persona."]})]}),e.jsxs("form",{onSubmit:S,className:"quiz-form",children:[e.jsx("input",{type:"text",className:`quiz-input ${m||""}`,value:h,onChange:O=>c(O.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!m}),!m&&e.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!h.trim(),children:"Comprobar"})]}),m&&e.jsxs("div",{className:`quiz-feedback ${m}`,children:[m==="correct"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"quiz-feedback-icon",children:e.jsx(Wa,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),e.jsx("div",{className:"quiz-feedback-answer",children:z.answer})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"quiz-feedback-icon",children:e.jsx(xe,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),e.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",e.jsx("strong",{children:z.answer})]})]})]}),e.jsx(Y,{text:z.answer,size:"md",className:"quiz-feedback-speak"})]}),m&&e.jsxs("button",{className:"quiz-next-btn",onClick:q,children:[r+1>=T?"Ver resultados":"Siguiente",e.jsx(Ne,{size:16})]}),e.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",e.jsx("strong",{children:v})," / ",r+(m?1:0)]})]})]})})]})}function Ga(a){return[...a].sort(()=>Math.random()-.5)}function Fo(a){const s=[];function o(i,r){if(!i||!r)return;const l=Re(String(i)).trim(),h=String(r).trim();l.length<2||h.length<2||s.push({es:l,en:h})}for(const i of a?.sections||[]){for(const r of i.examples||[])o(r.es,r.en);for(const r of i.table?.rows||[])r?.[0]&&r?.[1]&&o(r[1],`${r[0]} form`)}for(const i of a?.blocks||[]){for(const r of i.pairs||[])o(r.es,r.en);for(const r of i.columns||[])o(r.es,r.en);for(const r of i.phrases||[])o(r.es,r.en);for(const r of i.words||[])o(r.es,r.en);for(const r of i.lessons||[])for(const l of Fo(r))o(l.es,l.en)}const n=[],t=new Set;for(const i of s){const r=ae(i.es);t.has(r)||(t.add(r),n.push(i))}return n}function Sn(a){const s=Fo(a);return s.length<2?[]:Ga(s).slice(0,Math.min(4,s.length)).map((n,t)=>{const i=t%2===0,r=i?n.es:n.en,l=Ga(s).filter(h=>h!==n).map(h=>i?h.es:h.en).filter(h=>ae(h)!==ae(r)).slice(0,3);return{prompt:i?n.en:n.es,answer:r,speak:n.es,mode:i?"Elige el espanol":"Elige la traduccion",choices:Ga([r,...l]).slice(0,4)}})}function Wo({source:a,title:s="Mini practica"}){const o=b.useMemo(()=>Sn(a),[a]),[n,t]=b.useState({}),[i,r]=b.useState(!1);if(b.useEffect(()=>{t({}),r(!1)},[a]),o.length<2)return null;const l=Object.keys(n).length,h=o.reduce((c,m,u)=>ae(n[u])===ae(m.answer)?c+1:c,0);return e.jsxs("section",{className:"lesson-mini-quiz",children:[e.jsxs("div",{className:"lesson-mini-head",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"lesson-mini-kicker",children:[e.jsx(Se,{size:13})," Practica rapida"]}),e.jsx("h3",{children:s})]}),e.jsxs("button",{className:"lesson-mini-reset",onClick:()=>{t({}),r(!1)},children:[e.jsx(Ya,{size:13}),"Reiniciar"]})]}),e.jsx("div",{className:"lesson-mini-list",children:o.map((c,m)=>{const u=n[m],v=u&&ae(u)===ae(c.answer);return e.jsxs("div",{className:"lesson-mini-card",children:[e.jsxs("div",{className:"lesson-mini-meta",children:[e.jsx("span",{children:String(m+1).padStart(2,"0")}),e.jsx("em",{children:c.mode}),e.jsx(Y,{text:c.speak})]}),e.jsx("p",{className:"lesson-mini-prompt",children:c.prompt}),e.jsx("div",{className:"lesson-mini-choices",children:c.choices.map(p=>{const g=u===p;return e.jsx("button",{className:`${g?"active":""} ${i&&g?v?"correct":"wrong":""}`,onClick:()=>t(f=>({...f,[m]:p})),children:p},p)})}),i&&u&&!v&&e.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",e.jsx("strong",{children:c.answer})]})]},`${c.prompt}-${m}`)})}),e.jsxs("div",{className:"lesson-mini-footer",children:[e.jsxs("span",{children:[l," / ",o.length," respondidas"]}),e.jsx("button",{className:"lesson-mini-check",disabled:l<o.length,onClick:()=>r(!0),children:"Comprobar"}),i&&e.jsxs("strong",{children:[h," / ",o.length]})]})]})}function qn({s:a}){return e.jsxs("div",{className:"gl-section",children:[a.heading&&e.jsx("h3",{className:"gl-heading",children:a.heading}),a.text&&e.jsx("p",{className:"gl-text",children:e.jsx(Z,{text:a.text})}),a.table&&e.jsx("div",{className:"lesson-table-wrap",children:e.jsxs("table",{className:"lesson-table gl-table",children:[a.table.headers&&e.jsx("thead",{children:e.jsx("tr",{children:a.table.headers.map((s,o)=>e.jsx("th",{children:s},o))})}),e.jsx("tbody",{children:a.table.rows.map((s,o)=>e.jsx("tr",{children:s.map((n,t)=>e.jsx("td",{children:t===0?n:e.jsx(ne,{raw:String(n)})},t))},o))})]})}),a.examples&&e.jsx("ul",{className:"gl-examples",children:a.examples.map((s,o)=>e.jsx("li",{children:e.jsx(ze,{es:s.es,en:s.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},o))}),a.tip&&e.jsxs("aside",{className:"gl-tip",children:[e.jsx(_e,{size:16,className:"gl-tip-icon"}),e.jsx("p",{children:a.tip})]}),a.takeaway&&e.jsxs("aside",{className:"gl-takeaway",children:[e.jsxs("div",{className:"gl-takeaway-label",children:[e.jsx(_a,{size:12})," Lo que te llevas"]}),e.jsx("p",{children:a.takeaway})]})]})}const Cn={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function fa({level:a}){const s=Cn[a]||{};return e.jsx("span",{className:"bio-level-badge",style:{background:s.bg,color:s.color,borderColor:s.border},children:a})}function ta(a,s,o,n){b.useEffect(()=>{a?.type!==s||typeof a.index!="number"||(o(a.index),window.setTimeout(()=>{n.current?.[a.index]?.scrollIntoView?.({behavior:"smooth",block:"start"})},80))},[a,s,o,n])}function En({poems:a,chapterId:s,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:t}){const[i,r]=b.useState(null),l=X.useRef([]);ta(t,"poem",r,l);function h(c){r(m=>m===c?null:c)}return e.jsx("section",{className:"block foldable-poems",children:a.map((c,m)=>{const u=i===m,v=ge(s,"poem",m,c.title);return e.jsxs("div",{ref:p=>{l.current[m]=p},className:`poem-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"poem-toggle",onClick:()=>h(m),"aria-expanded":u,children:[e.jsxs("div",{className:"poem-toggle-inner",children:[e.jsx("span",{className:"poem-num",children:String(m+1).padStart(2,"0")}),e.jsxs("div",{className:"poem-toggle-text",children:[e.jsx("span",{className:"poem-title-line",children:c.title}),e.jsx("span",{className:"poem-attribution",children:c.attribution})]})]}),e.jsxs("div",{className:"poem-toggle-right",children:[e.jsx("span",{className:"poem-level-tag",children:c.level}),o[v]&&e.jsx("span",{className:`story-status-pill ${o[v]}`,children:o[v]==="understood"?"Entendido":"Leído"}),e.jsx(oa,{size:18,className:`poem-chevron ${u?"open":""}`})]})]}),u&&e.jsxs("div",{className:"poem-body",children:[e.jsx(Ye,{status:o[v],onChange:p=>n?.(v,p)}),c.note&&e.jsx("p",{className:"poem-intro-note",children:c.note}),c.opening&&e.jsxs("blockquote",{className:"poem-opening-quote",children:[e.jsx(Y,{text:c.opening,size:"md",className:"poem-quote-speak"}),c.opening]}),e.jsxs("div",{className:"poem-tools",children:[e.jsx(Y,{text:c.stanzas.map(p=>p.es).join(". "),size:"md"}),e.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),e.jsx("div",{className:"poem-stanzas",children:c.stanzas.map((p,g)=>e.jsxs("div",{className:"poem-stanza",children:[e.jsx("div",{className:"poem-stanza-num",children:g+1}),e.jsx(sa,{text:p.es,paragraphClass:"poem-stanza-es"}),e.jsx("div",{className:"poem-stanza-en",children:p.en})]},g))}),c.vocab&&c.vocab.length>0&&e.jsxs("div",{className:"poem-vocab-block",children:[e.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),e.jsx("div",{className:"poem-vocab-grid",children:c.vocab.map((p,g)=>e.jsxs("div",{className:"poem-vocab-row",children:[e.jsx("span",{className:"poem-vocab-es",children:p.es}),e.jsx("span",{className:"poem-vocab-dash",children:"—"}),e.jsx("span",{className:"poem-vocab-en",children:p.en})]},g))})]}),c.learningNote&&e.jsxs("aside",{className:"poem-learning-note",children:[e.jsxs("div",{className:"poem-learning-label",children:[e.jsx(_e,{size:14})," Nota de lectura"]}),e.jsx("p",{children:c.learningNote})]})]})]},m)})})}function In({songs:a,chapterId:s,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:t}){const[i,r]=b.useState(null),l=X.useRef([]);ta(t,"song",r,l);function h(c){r(m=>m===c?null:c)}return e.jsx("section",{className:"block foldable-poems foldable-songs",children:a.map((c,m)=>{const u=i===m,v=c.sections.map(g=>g.es).join(". "),p=ge(s,"song",m,c.title);return e.jsxs("div",{ref:g=>{l.current[m]=g},className:`poem-item song-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"poem-toggle",onClick:()=>h(m),"aria-expanded":u,children:[e.jsxs("div",{className:"poem-toggle-inner",children:[e.jsx("span",{className:"poem-num",children:String(m+1).padStart(2,"0")}),e.jsxs("div",{className:"poem-toggle-text",children:[e.jsx("span",{className:"poem-title-line",children:c.title}),e.jsx("span",{className:"poem-attribution",children:c.attribution})]})]}),e.jsxs("div",{className:"poem-toggle-right",children:[e.jsx("span",{className:"poem-level-tag",children:c.level}),o[p]&&e.jsx("span",{className:`story-status-pill ${o[p]}`,children:o[p]==="understood"?"Entendido":"Leído"}),e.jsx(oa,{size:18,className:`poem-chevron ${u?"open":""}`})]})]}),u&&e.jsxs("div",{className:"poem-body song-body",children:[e.jsx(Ye,{status:o[p],onChange:g=>n?.(p,g)}),e.jsx("p",{className:"poem-intro-note",children:c.note}),e.jsxs("div",{className:"poem-tools",children:[e.jsx(Y,{text:v,size:"md"}),e.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),e.jsx("div",{className:"song-sections",children:c.sections.map((g,f)=>e.jsxs("div",{className:"song-section",children:[e.jsxs("div",{className:"song-section-label",children:[String(f+1).padStart(2,"0")," · ",g.label]}),e.jsxs("div",{className:"song-section-grid",children:[e.jsx(sa,{text:g.es,paragraphClass:"song-lyric-es"}),e.jsx("p",{className:"song-lyric-en",children:g.en})]})]},g.label))}),c.vocab&&c.vocab.length>0&&e.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[e.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),e.jsx("div",{className:"poem-vocab-grid",children:c.vocab.map((g,f)=>e.jsxs("div",{className:"poem-vocab-row",children:[e.jsx("span",{className:"poem-vocab-es",children:g.es}),e.jsx("span",{className:"poem-vocab-dash",children:"—"}),e.jsx("span",{className:"poem-vocab-en",children:g.en})]},f))})]}),c.learningNote&&e.jsxs("aside",{className:"poem-learning-note",children:[e.jsxs("div",{className:"poem-learning-label",children:[e.jsx(_e,{size:14})," Nota de canción"]}),e.jsx("p",{children:c.learningNote})]})]})]},c.title)})})}function Tn({bios:a,chapterId:s,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:t}){const[i,r]=b.useState(null),l=X.useRef([]);ta(t,"bio",r,l);function h(c){r(m=>m===c?null:c)}return e.jsx("section",{className:"block foldable-bios",children:a.map((c,m)=>{const u=i===m,v=ge(s,"bio",m,c.title);return e.jsxs("div",{ref:p=>{l.current[m]=p},className:`bio-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"bio-toggle",onClick:()=>h(m),"aria-expanded":u,children:[e.jsxs("div",{className:"bio-toggle-left",children:[e.jsx("span",{className:"bio-num",children:String(m+1).padStart(2,"0")}),e.jsxs("div",{className:"bio-toggle-text",children:[e.jsx("span",{className:"bio-name",children:c.title}),e.jsx("span",{className:"bio-subtitle-line",children:c.subtitle}),e.jsx("span",{className:"bio-dates",children:c.dates})]})]}),e.jsxs("div",{className:"bio-toggle-right",children:[e.jsxs("div",{className:"bio-level-pills",children:[[...new Set(c.levels.map(p=>p.level))].map(p=>e.jsx(fa,{level:p},p)),o[v]&&e.jsx("span",{className:`story-status-pill ${o[v]}`,children:o[v]==="understood"?"Entendido":"Leído"})]}),e.jsx(oa,{size:18,className:`bio-chevron ${u?"open":""}`})]})]}),u&&e.jsxs("div",{className:"bio-body",children:[e.jsx(Ye,{status:o[v],onChange:p=>n?.(v,p)}),c.levels.map((p,g)=>e.jsxs("div",{className:"bio-section",children:[e.jsxs("div",{className:"bio-section-header",children:[e.jsx(fa,{level:p.level}),e.jsx("h3",{className:"bio-section-title",children:p.heading}),e.jsx(Y,{text:p.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),p.paragraphs.map((f,N)=>e.jsx(sa,{text:f,paragraphClass:"bio-paragraph"},N)),p.vocab&&e.jsxs("div",{className:"bio-vocab",children:[e.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),p.vocab]})]},g))]})]},m)})})}function Ln({lessons:a,chapterId:s,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:t}){const[i,r]=b.useState(null),l=X.useRef([]);ta(t,"grammar",r,l);function h(c){r(m=>m===c?null:c)}return e.jsx("section",{className:"block foldable-grammar",children:a.map((c,m)=>{const u=i===m,v=ge(s,"grammar",m,c.title);return e.jsxs("div",{ref:p=>{l.current[m]=p},className:`gl-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"gl-toggle",onClick:()=>h(m),"aria-expanded":u,"touch-action":"manipulation",children:[e.jsx("span",{className:"gl-num",children:String(m+1).padStart(2,"0")}),e.jsx("span",{className:"gl-level-badge",children:c.level}),e.jsxs("div",{className:"gl-toggle-text",children:[e.jsx("span",{className:"gl-title",children:c.title}),e.jsx("span",{className:"gl-subtitle",children:c.subtitle})]}),o[v]&&e.jsx("span",{className:`gl-status-pill ${o[v]}`,children:o[v]==="understood"?"Entendido":"Leído"}),e.jsx(oa,{size:18,className:`gl-chevron ${u?"open":""}`})]}),u&&e.jsxs("div",{className:"gl-body",children:[e.jsx(Ye,{status:o[v],onChange:p=>n?.(v,p)}),c.intro&&e.jsx("p",{className:"gl-intro",children:c.intro}),c.sections.map((p,g)=>e.jsx(qn,{s:p},g)),e.jsx(Wo,{source:c,title:`Practica: ${c.title}`})]})]},m)})})}function An({stories:a,chapterId:s,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:t}){const[i,r]=b.useState(null),l=X.useRef([]);ta(t,"story",r,l);function h(c){r(m=>m===c?null:c)}return e.jsx("section",{className:"block foldable-stories",children:a.map((c,m)=>{const u=i===m,v=ge(s,"story",m,c.title);return e.jsxs("div",{ref:p=>{l.current[m]=p},className:`story-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>h(m),"aria-expanded":u,children:[e.jsxs("div",{className:"bio-toggle-left",children:[e.jsx("span",{className:"bio-num",children:String(m+1).padStart(2,"0")}),e.jsxs("div",{className:"bio-toggle-text",children:[e.jsx("span",{className:"bio-name",children:c.title}),e.jsxs("span",{className:"bio-subtitle-line",children:[c.paragraphs.length," párrafos · lectura con audio"]})]})]}),e.jsxs("div",{className:"bio-toggle-right",children:[e.jsxs("div",{className:"bio-level-pills",children:[e.jsx(fa,{level:c.level}),o[v]&&e.jsx("span",{className:`story-status-pill ${o[v]}`,children:o[v]==="understood"?"Entendido":"Leído"})]}),e.jsx(oa,{size:18,className:`bio-chevron ${u?"open":""}`})]})]}),u&&e.jsx("div",{className:"bio-body story-body",children:e.jsxs("div",{className:"bio-section story-section",children:[e.jsxs("div",{className:"bio-section-header",children:[e.jsx(fa,{level:c.level}),e.jsx("h3",{className:"bio-section-title",children:c.title}),e.jsx(Y,{text:c.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),e.jsx(Ye,{status:o[v],onChange:p=>n?.(v,p)}),c.paragraphs.map((p,g)=>e.jsx(sa,{text:p,paragraphClass:"bio-paragraph story-paragraph"},g))]})})]},m)})})}const Lo="palabras-progress-v1";function _o(a,s){return`${a}::${s.rank}::${s.spanish}`}function Va(a,s){return s.sourceGroupId||a.id}function pa(a,s){return _o(Va(a,s),s)}function Oe(a){return String(a).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const Pn=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function Mn(a){const s=new Map;for(const o of a||[])for(const n of o.entries||[]){const t=Oe(n.spanish);s.has(t)||s.set(t,{...n,sourceGroupId:o.id,sourceGroupTitle:o.title})}return Pn.map(o=>{const n=new Set,t=o.terms.map((i,r)=>{const l=Oe(i.spanish);if(n.has(l))return null;n.add(l);const h=s.get(l),c=i.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...h||{rank:`T${r+1}`,spanish:c,english:i.english,sourceGroupId:o.id,sourceGroupTitle:o.title},topicTerm:i.spanish,topicEnglish:i.english,topicOrder:r+1}}).filter(Boolean);return{id:o.id,title:o.title,description:o.description,entries:t,isTopic:!0}})}function he(a){return a.topicTerm||a.spanish}function Be(a){return a.topicEnglish||a.english}let Da=null;function Ha(){return Da||(Da=Ls(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(a=>{const s=a.default||[];return[...s,...Mn(s)]})),Da}function Yo(a,s,o=Date.now()){return on(a,s,o)}function Gn(a,s,o=Date.now()){const n={total:0,seen:0,due:0,mastered:0,byGroup:{}},t=new Set;for(const i of a||[]){const r={total:i.entries.length,seen:0,due:0,mastered:0};for(const l of i.entries){const h=pa(i,l),c=s[h],m=t.has(h);m||(t.add(h),n.total++),c?.seen&&(r.seen++,m||n.seen++,c.mastered&&(r.mastered++,m||n.mastered++),(c.dueAt||0)<=o&&(r.due++,m||n.due++))}n.byGroup[i.id]=r}return n}function Ao(a,s){const o=a.spanish.split(",")[0].trim();return s==="topic-work-professions"?{es:`En mi trabajo uso "${o}" con frecuencia.`,en:`At work I use "${o}" often.`}:s==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${o}" con calma.`,en:`Today I can name "${o}" calmly.`}:s==="function-words"?{es:`Uso "${o}" para unir una idea con otra.`,en:`"${o}" helps connect one idea to another.`}:/^to /.test(a.english)?{es:`Hoy necesito ${o} en una frase clara.`,en:`Today I need "${o}" in a clear sentence.`}:{es:`Escribo "${o}" en mi cuaderno de espanol.`,en:`"${o}" means ${Be(a)}.`}}function Dn({onSaveWord:a,savedWords:s=[],progress:o={},onProgressChange:n,onUpdateSavedWord:t}){const[i,r]=b.useState(null),[l,h]=b.useState(""),[c,m]=b.useState(""),[u,v]=b.useState(0),[p,g]=b.useState({}),[f,N]=b.useState(!1),[y,S]=b.useState(!1),[q,G]=b.useState(!1),[z,T]=b.useState(0),[O,D]=b.useState(!1);b.useEffect(()=>{let j=!0;return Ha().then(F=>{j&&(r(F),h(J=>J||F[0]?.id||""))}),()=>{j=!1}},[]);const K=!i,k=i?.find(j=>j.id===l)||i?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},M=b.useMemo(()=>{const j=Oe(c),F=j?k.entries.filter(W=>[W.spanish,W.english,W.topicTerm,W.topicEnglish,String(W.rank)].some(oe=>Oe(oe||"").includes(j))):k.entries;if(!y)return F;const J=Date.now();return F.filter(W=>{const oe=o[pa(k,W)];return oe?.seen&&(oe.dueAt||0)<=J})},[k,c,y,o]),V=24,ee=Math.min(u,Math.max(0,M.length-1)),$=M.slice(ee,ee+V),H=$.map(j=>he(j)).join(". "),x=b.useMemo(()=>Gn(i||[],o),[i,o]).byGroup[k.id]||{total:k.entries.length,seen:0,due:0,mastered:0},C=74,E=420,I=Math.max(0,Math.floor(z/C)-4),L=Math.min(M.length,I+Math.ceil(E/C)+10),B=M.slice(I,L);if(b.useEffect(()=>{v(0),g({}),T(0)},[l,c,y]),K)return e.jsx("section",{className:"block palabras-lab",children:e.jsxs("div",{className:"palabras-empty",children:[e.jsx(Se,{size:24}),e.jsx("p",{children:"Cargando palabras..."})]})});function te(){v(j=>j+V>=M.length?0:j+V),g({})}function re(){const j=Math.max(0,M.length-V);v(Math.floor(Math.random()*(j+1))),g({})}function Ke(j){const F=`${k.id}-${j.rank}-${j.spanish}`;g(J=>({...J,[F]:!J[F]}))}function ce(j,F){const J=Va(k,j),W=_o(J,j),oe=Yo(o[W],F),fe={...o,[W]:{...oe,groupId:J,displayGroupId:k.id,topicId:k.isTopic?k.id:void 0,spanish:he(j),english:Be(j),rank:j.rank}};n?.(fe),g(qe=>({...qe,[`${k.id}-${j.rank}-${j.spanish}`]:!0}));const De=s.find(qe=>Oe(qe.word)===Oe(he(j)));De?t?.(De.word,{review:oe,difficult:F==="hard"||F==="again"?!0:De.difficult}):(F==="hard"||F==="again")&&a?.({word:he(j),translation:Be(j),pos:k.isTopic?`${k.title} topic`:k.title,extras:[`Rank ${j.rank}`,k.description].filter(Boolean),tags:["palabras",k.id,J,"difficult"].filter(Boolean),review:oe,difficult:!0,savedAt:Date.now()})}function Ge(){if(!$.length)return;if(Ka(),O){window.speechSynthesis?.cancel(),D(!1);return}const j=$.flatMap(F=>{const J=Ao(F,k.id);return[he(F),J.es,he(F)]});D(!0),$o(j.join(". "),{onend:()=>D(!1),onerror:()=>D(!1)})}function ia(j){const F=Va(k,j),J=k.isTopic&&j.sourceGroupTitle?`Source ${j.sourceGroupTitle}`:null;a?.({word:he(j),translation:Be(j),pos:k.isTopic?`${k.title} topic`:k.title,extras:[`Rank ${j.rank}`,k.description,J].filter(Boolean),tags:["palabras",k.id,F].filter(Boolean),savedAt:Date.now()})}return e.jsxs("section",{className:"block palabras-lab",children:[e.jsxs("div",{className:"palabras-toolbar",children:[e.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:i.map(j=>e.jsxs("button",{className:`palabras-tab ${j.id===k.id?"active":""}`,onClick:()=>h(j.id),role:"tab","aria-selected":j.id===k.id,children:[e.jsx("span",{children:j.title.replace(/^Group /,"G")}),e.jsx("strong",{children:j.entries.length})]},j.id))}),e.jsxs("label",{className:"palabras-search",children:[e.jsx("span",{children:"Buscar"}),e.jsx("input",{value:c,onChange:j=>m(j.target.value),placeholder:"palabra, meaning, rank..."})]})]}),e.jsxs("div",{className:"palabras-stage",children:[e.jsxs("div",{className:"palabras-stage-copy",children:[e.jsx("div",{className:"palabras-stage-kicker",children:k.isTopic?"Tema integrado":"Grupo intacto"}),e.jsx("h2",{children:k.title}),e.jsx("p",{children:k.description})]}),e.jsxs("div",{className:"palabras-stage-stats",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Mostrando"}),e.jsx("strong",{children:$.length})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Filtradas"}),e.jsx("strong",{children:M.length})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Entrada"}),e.jsx("strong",{children:M.length?ee+1:0})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Vencidas"}),e.jsx("strong",{children:x.due})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Vistas"}),e.jsx("strong",{children:x.seen})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Dominadas"}),e.jsx("strong",{children:x.mastered})]})]})]}),e.jsxs("div",{className:"palabras-actions",children:[e.jsx(Y,{text:H,size:"md",className:"palabras-read-btn"}),e.jsx("button",{className:`palabras-action-btn ${O?"active":""}`,onClick:Ge,children:O?"Escuchando...":"Escucha activa"}),e.jsx("button",{className:`palabras-action-btn ${y?"active":""}`,onClick:()=>S(j=>!j),children:y?"Todas":"Vencidas"}),e.jsx("button",{className:"palabras-action-btn",onClick:()=>N(j=>!j),children:f?"Ocultar ingles":"Mostrar ingles"}),e.jsx("button",{className:"palabras-action-btn",onClick:te,children:"Siguiente ronda"}),e.jsx("button",{className:"palabras-action-btn",onClick:re,children:"Barajar"}),e.jsx("button",{className:`palabras-action-btn ${q?"active":""}`,onClick:()=>G(j=>!j),children:"Lista completa"})]}),$.length?e.jsx("div",{className:"palabras-grid",children:$.map(j=>{const F=`${k.id}-${j.rank}-${j.spanish}`,J=f||p[F],W=o[pa(k,j)],oe=Ao(j,k.id);return e.jsxs("article",{className:`palabra-card ${J?"revealed":""}`,children:[e.jsxs("button",{className:"palabra-main",onClick:()=>Ke(j),children:[e.jsxs("span",{className:"palabra-rank",children:["#",j.rank]}),e.jsx("span",{className:"palabra-es",children:he(j)}),e.jsx("span",{className:"palabra-en",children:J?Be(j):"..."}),J&&e.jsxs("span",{className:"palabra-example",children:[e.jsx("span",{children:oe.es}),e.jsx("em",{children:oe.en})]})]}),e.jsxs("div",{className:"palabra-card-actions",children:[e.jsx(Y,{text:he(j)}),e.jsxs("button",{className:"palabra-save",onClick:()=>ia(j),children:[e.jsx(We,{size:13}),"Memoria"]})]}),e.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(fe=>e.jsx("button",{onClick:()=>ce(j,fe),children:fe==="again"?"Again":fe==="hard"?"Hard":fe==="good"?"Good":"Easy"},fe))}),W?.seen&&e.jsx("div",{className:"palabra-review-state",children:W.mastered?"Dominada":`Due ${new Date(W.dueAt||Date.now()).toLocaleDateString()}`})]},F)})}):e.jsxs("div",{className:"palabras-empty",children:[e.jsx(Se,{size:24}),e.jsx("p",{children:"No words match this search in the selected group."})]}),q&&e.jsxs("div",{className:"palabras-browser",children:[e.jsxs("div",{className:"palabras-browser-head",children:[e.jsx("span",{children:"Lista virtual"}),e.jsxs("strong",{children:[M.length," palabras"]})]}),e.jsx("div",{className:"palabras-virtual-list",style:{height:E},onScroll:j=>T(j.currentTarget.scrollTop),children:e.jsx("div",{style:{height:M.length*C,position:"relative"},children:e.jsx("div",{style:{transform:`translateY(${I*C}px)`},children:B.map(j=>{const F=o[pa(k,j)];return e.jsxs("div",{className:"palabras-virtual-row",style:{height:C},children:[e.jsxs("span",{className:"palabra-rank",children:["#",j.rank]}),e.jsx("strong",{children:he(j)}),e.jsx("span",{children:Be(j)}),e.jsx("button",{onClick:()=>ce(j,"good"),children:F?.seen?"Actualizar":"Visto"})]},`${j.rank}-${j.spanish}`)})})})})]})]})}function Ye({status:a,onChange:s}){const o=a==="read"||a==="understood",n=a==="understood";function t(){s?.(a==="read"?null:"read")}function i(){s?.(a==="understood"?"read":"understood")}return e.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[e.jsx("span",{className:"lesson-status-label",children:"Estado"}),e.jsxs("button",{className:`lesson-status-btn ${o?"active":""}`,onClick:t,children:[e.jsx(ma,{size:14}),"Leído"]}),e.jsxs("button",{className:`lesson-status-btn understood ${n?"active":""}`,onClick:i,children:[e.jsx(Wa,{size:14}),"Entendido"]})]})}function Un({chapter:a,sectionId:s,section:o,activeNestedTarget:n,onOpenSection:t,onSaveWord:i,savedWords:r=[],onUpdateSavedWord:l,palabrasProgress:h,onPalabrasProgressChange:c,lessonStatuses:m={},onLessonStatusChange:u}){const v=a.blocks.some(p=>p.type==="foldable-grammar"||p.type==="foldable-stories"||p.type==="foldable-bios"||p.type==="foldable-poems"||p.type==="foldable-songs");return e.jsxs("article",{className:"chapter-body",children:[e.jsxs("header",{className:"chapter-header",children:[o&&e.jsxs("div",{className:"lesson-breadcrumb",children:[e.jsx("button",{type:"button",onClick:()=>t?.(o),children:o.label}),e.jsx(Ne,{size:14}),e.jsx("span",{children:n?.title||a.title})]}),e.jsxs("div",{className:"chapter-icon-row",children:[s&&e.jsx("div",{className:"chapter-icon-wrap",children:e.jsx(Oa,{id:s,size:22})}),e.jsxs("div",{className:"chapter-level-tag",children:[a.rank?`Nº ${String(a.rank).padStart(2,"0")} · `:"","Nivel ",a.level]})]}),e.jsx("h1",{className:"chapter-title",children:a.title}),a.subtitle&&e.jsx("p",{className:"chapter-subtitle",children:a.subtitle}),!v&&e.jsx(Ye,{status:m[a.id],onChange:p=>u?.(a.id,p)}),e.jsx("div",{className:"chapter-rule"})]}),a.intro&&e.jsx("p",{className:"chapter-intro drop-cap",children:e.jsx(Z,{text:a.intro})}),a.blocks.map((p,g)=>{switch(p.type){case"indicative-hero":return e.jsx(Bn,{block:p},g);case"indicative-tense-cards":return e.jsx($n,{block:p},g);case"participio-section":return e.jsx(Rn,{block:p},g);case"indicative-timeline":return e.jsx(On,{block:p},g);case"conjugation":return e.jsxs("section",{className:"block",children:[e.jsx("h2",{className:"block-heading",children:p.title}),e.jsx("div",{className:"conjugation-grid",children:p.verbs.map((f,N)=>e.jsxs("div",{className:"conjugation-card",children:[e.jsx("div",{className:"conjugation-verb",children:f.name}),e.jsx("ul",{className:"conjugation-list",children:f.forms.map((y,S)=>e.jsx("li",{children:y},S))})]},N))})]},g);case"examples":return e.jsxs("section",{className:"block",children:[e.jsx("h2",{className:"block-heading",children:p.title}),e.jsx("ul",{className:"examples-list",children:p.pairs.map((f,N)=>e.jsx("li",{className:"example-item",children:e.jsx(ze,{es:f.es,en:f.en,esClass:"example-es",enClass:"example-en"})},N))})]},g);case"rule":return e.jsx("section",{className:"block",children:e.jsx("dl",{className:"rule-list",children:p.items.map((f,N)=>e.jsxs("div",{className:"rule-row",children:[e.jsx("dt",{children:f.label}),e.jsx("dd",{children:f.value})]},N))})},g);case"reading":return e.jsx("section",{className:"block reading-block",children:p.paragraphs.map((f,N)=>e.jsx(sa,{text:f,paragraphClass:"reading-paragraph"},N))},g);case"foldable-poems":return e.jsx(En,{poems:p.poems,chapterId:a.id,lessonStatuses:m,onLessonStatusChange:u,activeNestedTarget:n},g);case"foldable-songs":return e.jsx(In,{songs:p.songs,chapterId:a.id,lessonStatuses:m,onLessonStatusChange:u,activeNestedTarget:n},g);case"foldable-bios":return e.jsx(Tn,{bios:p.bios,chapterId:a.id,lessonStatuses:m,onLessonStatusChange:u,activeNestedTarget:n},g);case"foldable-grammar":return e.jsx(Ln,{lessons:p.lessons,chapterId:a.id,lessonStatuses:m,onLessonStatusChange:u,activeNestedTarget:n},g);case"foldable-stories":return e.jsx(An,{stories:p.stories,chapterId:a.id,lessonStatuses:m,onLessonStatusChange:u,activeNestedTarget:n},g);case"glossary":return e.jsxs("section",{className:"block",children:[e.jsxs("h2",{className:"block-heading",children:[e.jsx(Ve,{size:16,className:"inline-icon"})," Glosario"]}),e.jsx("div",{className:"glossary-grid",children:p.words.map((f,N)=>e.jsxs("div",{className:"glossary-row",children:[e.jsx("span",{className:"glossary-es",children:f.es}),e.jsx("span",{className:"glossary-dash",children:"—"}),e.jsx("span",{className:"glossary-en",children:f.en})]},N))})]},g);case"vocab":return e.jsx("section",{className:"block",children:e.jsx("div",{className:"vocab-grid",children:p.columns.map((f,N)=>e.jsxs("div",{className:"vocab-row",children:[e.jsx(Y,{text:f.es}),e.jsx("span",{className:"vocab-es",children:f.es}),e.jsx("span",{className:"vocab-en",children:f.en})]},N))})},g);case"vocab-lab":return e.jsx(Dn,{onSaveWord:i,savedWords:r,progress:h,onProgressChange:c,onUpdateSavedWord:l},g);case"phraselist":return e.jsx("section",{className:"block",children:e.jsx("ul",{className:"phrase-list",children:p.phrases.map((f,N)=>e.jsxs("li",{className:"phrase-item",children:[e.jsx("span",{className:"phrase-num",children:String(N+1).padStart(2,"0")}),e.jsxs("div",{className:"phrase-content",children:[e.jsxs("p",{className:"phrase-es",children:[e.jsx(Y,{text:f.es,className:"paragraph-speak"}),e.jsx(Z,{text:f.es})]}),e.jsx("p",{className:"phrase-en",children:f.en})]})]},N))})},g);case"expressions-library":return e.jsx(Jn,{library:p.library},g);case"steps":return e.jsx("section",{className:"block",children:e.jsx("ol",{className:"steps-list",children:p.steps.map((f,N)=>e.jsxs("li",{className:"step-item",children:[e.jsx("div",{className:"step-num",children:N+1}),e.jsxs("div",{children:[e.jsx("h3",{className:"step-title",children:f.title}),e.jsx("p",{className:"step-text",children:f.text})]})]},N))})},g);case"big-takeaways":return e.jsx("section",{className:"block",children:e.jsx("div",{className:"big-takeaways",children:p.items.map((f,N)=>e.jsxs("div",{className:"big-takeaway-card",children:[e.jsx("div",{className:"big-takeaway-num",children:f.n}),e.jsx("h3",{className:"big-takeaway-title",children:f.title}),e.jsx("p",{className:"big-takeaway-text",children:f.text})]},N))})},g);case"tip":return e.jsxs("aside",{className:"block tip-block",children:[e.jsx(_e,{size:18,className:"tip-icon"}),e.jsx("p",{children:p.text})]},g);case"takeaway":return e.jsxs("aside",{className:"block takeaway-block",children:[e.jsxs("div",{className:"takeaway-label",children:[e.jsx(_a,{size:14})," Lo que te llevas"]}),e.jsx("p",{children:p.text})]},g);case"verb-table":{const f=Object.fromEntries(p.tenses.map(y=>[y.name,y])),N=p.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return e.jsxs("section",{className:"block verb-table-block",children:[p.participles&&e.jsxs("div",{className:"participles",children:[e.jsx("div",{className:"participles-label",children:"Participios"}),e.jsxs("div",{className:"participles-rows",children:[e.jsxs("div",{className:"participles-row",children:[e.jsx("span",{className:"participles-key",children:"Presente"}),e.jsx("span",{className:"participles-val",children:e.jsx(ne,{raw:p.participles.present})})]}),e.jsxs("div",{className:"participles-row",children:[e.jsx("span",{className:"participles-key",children:"Pasado"}),e.jsx("span",{className:"participles-val",children:e.jsx(ne,{raw:p.participles.past})})]})]})]}),e.jsxs("div",{className:"verb-table-header",children:[e.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",e.jsxs("em",{children:['"',a.title.toLowerCase(),'"']})]}),e.jsx(zn,{tenses:p.tenses,verbName:a.title})]}),e.jsx("div",{className:"tense-stack",children:N.map((y,S)=>{const q=y.map(G=>f[G]).filter(Boolean);if(q.length===0)return null;if(q.length===1){const G=q[0];return e.jsxs("div",{className:"tense-block",children:[e.jsxs("div",{className:"tense-name-row",children:[e.jsx("h3",{className:"tense-name",children:G.name}),e.jsx(Y,{text:G.forms.map(z=>`${z.p} ${Re(z.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),e.jsx("div",{className:"tense-rows",children:G.forms.map((z,T)=>e.jsxs(X.Fragment,{children:[e.jsx("span",{className:"tense-pronoun",children:z.p}),e.jsxs("span",{className:"tense-form",children:[e.jsx(ne,{raw:z.f}),e.jsx(Y,{text:Re(z.f),className:"conjugation-speak"})]})]},T))})]},S)}return e.jsxs("table",{className:"tense-group-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{"aria-hidden":"true"}),q.map((G,z)=>e.jsx("th",{scope:"col",children:e.jsxs("div",{className:"tg-th-inner",children:[e.jsx("span",{children:G.name}),e.jsx(Y,{text:G.forms.map(T=>`${T.p} ${Re(T.f)}`).join(". ")})]})},z))]})}),e.jsx("tbody",{children:q[0].forms.map((G,z)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"tg-pronoun",children:q[0].forms[z].p}),q.map((T,O)=>e.jsxs("td",{className:"tg-form",children:[e.jsx(ne,{raw:T.forms[z].f}),e.jsx(Y,{text:Re(T.forms[z].f),className:"conjugation-speak"})]},O))]},z))})]},S)})}),e.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",e.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},g)}case"verb-uses":return e.jsxs("section",{className:"block verb-uses-block",children:[p.heading&&e.jsx("h2",{className:"verb-uses-heading",children:p.heading}),p.categories.map((f,N)=>e.jsxs("div",{className:"vu-category",children:[e.jsxs("div",{className:"vu-category-head",children:[e.jsx("div",{className:"vu-category-label",children:f.label}),f.note&&e.jsx("div",{className:"vu-category-note",children:f.note})]}),e.jsx("div",{className:"vu-senses",children:f.senses.map((y,S)=>e.jsxs("div",{className:"vu-sense",children:[e.jsx("div",{className:"vu-sense-num",children:y.n}),e.jsxs("div",{className:"vu-sense-body",children:[e.jsx("div",{className:"vu-sense-meaning",children:y.meaning}),y.subnote&&e.jsx("div",{className:"vu-sense-subnote",children:y.subnote}),e.jsx("ul",{className:"vu-examples",children:y.examples.map((q,G)=>e.jsx("li",{children:e.jsx(ze,{es:q.es,en:q.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},G))})]})]},S))})]},N))]},g);case"subjunctive-hero":return e.jsx(Vn,{block:p},g);case"golden-rule":return e.jsx(Hn,{block:p},g);case"subjunctive-tense-cards":return e.jsx(Fn,{cards:p.cards},g);case"trigger-grid":return e.jsx(Wn,{block:p},g);case"conditional-pattern":return e.jsx(_n,{block:p},g);case"tips-grid":return e.jsx(Yn,{tips:p.tips},g);case"choice-quiz":return e.jsx(Kn,{block:p},g);case"lesson-section":return e.jsxs("section",{className:"block lesson-section",children:[p.heading&&e.jsx("h2",{className:"lesson-heading",children:p.heading}),p.text&&e.jsx("p",{className:"lesson-text",children:e.jsx(Z,{text:p.text})}),p.paragraphs&&p.paragraphs.map((f,N)=>e.jsx("p",{className:"lesson-text",children:e.jsx(Z,{text:f})},N)),p.table&&e.jsx("div",{className:"lesson-table-wrap",children:e.jsxs("table",{className:"lesson-table",children:[p.table.headers&&e.jsx("thead",{children:e.jsx("tr",{children:p.table.headers.map((f,N)=>e.jsx("th",{children:f},N))})}),e.jsx("tbody",{children:p.table.rows.map((f,N)=>e.jsx("tr",{children:f.map((y,S)=>e.jsx("td",{children:S===0?y:e.jsx(ne,{raw:String(y)})},S))},N))})]})}),p.examples&&e.jsx("ul",{className:"lesson-examples",children:p.examples.map((f,N)=>e.jsx("li",{children:e.jsx(ze,{es:f.es,en:f.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},N))})]},g);default:return null}}),!v&&e.jsx(Wo,{source:a,title:`Practica: ${a.title}`})]})}function Bn({block:a}){return e.jsxs("section",{className:"block indicative-hero-block",children:[e.jsx("div",{className:"indicative-eyebrow",children:a.eyebrow}),e.jsx("h2",{children:a.title}),e.jsx("p",{children:e.jsx(Z,{text:a.text})}),e.jsx("div",{className:"indicative-formula",children:a.formula.map((s,o)=>e.jsx("span",{className:s==="+"||s==="="?"operator":"",children:s},`${s}-${o}`))}),e.jsx("div",{className:"indicative-tags",children:a.tags.map(s=>e.jsx("span",{children:s},s))})]})}function $n({block:a}){const[s,o]=b.useState(0);return e.jsxs("section",{className:"block indicative-tense-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.title}),e.jsx("div",{className:"indicative-card-grid",children:a.cards.map((n,t)=>e.jsxs("article",{className:`indicative-card ${n.tone} ${s===t?"active":""}`,onClick:()=>o(t),children:[e.jsxs("header",{className:"indicative-card-head",children:[e.jsx("div",{className:"indicative-card-mark",children:String(t+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:n.title}),e.jsx("p",{children:n.english})]})]}),e.jsx("p",{className:"indicative-card-use",children:e.jsx(Z,{text:n.use})}),e.jsx("table",{className:"indicative-conj-table",children:e.jsx("tbody",{children:n.forms.map(([i,r])=>e.jsxs("tr",{children:[e.jsx("td",{children:i}),e.jsx("td",{children:e.jsx(ne,{raw:r})})]},`${n.title}-${i}`))})}),e.jsx("div",{className:"indicative-example",children:e.jsx(ze,{es:n.example.es,en:n.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})})]},n.title))})]})}function Rn({block:a}){return e.jsxs("section",{className:"block participle-workshop-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.title}),e.jsx("p",{className:"lesson-text",children:e.jsx(Z,{text:a.text})}),e.jsxs("div",{className:"participle-workshop-grid",children:[e.jsxs("article",{children:[e.jsx("h3",{children:"Participios regulares"}),e.jsx("table",{children:e.jsx("tbody",{children:a.regular.map(([s,o])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:e.jsx(ne,{raw:o})})]},`${s}-${o}`))})})]}),e.jsxs("article",{children:[e.jsx("h3",{children:"Participios irregulares"}),e.jsx("table",{children:e.jsx("tbody",{children:a.irregular.map(([s,o])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:e.jsx(ne,{raw:o})})]},`${s}-${o}`))})})]})]})]})}function On({block:a}){return e.jsxs("section",{className:"block indicative-timeline-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.title}),e.jsx("div",{className:"indicative-timeline-wrap",children:e.jsx("div",{className:"indicative-timeline-line",children:a.events.map(s=>e.jsxs("div",{className:`indicative-timeline-event ${s.lane} ${s.tone}`,style:{left:`${s.position}%`},children:[e.jsx("span",{className:"timeline-dot"}),e.jsx("strong",{children:s.label}),e.jsx("em",{children:s.sub})]},s.label))})})]})}function Vn({block:a}){return e.jsxs("section",{className:"block subj-hero-block",children:[e.jsx("div",{className:"subj-hero-eyebrow",children:a.eyebrow}),e.jsx("h2",{children:a.title}),e.jsx("p",{className:"subj-hero-accent",children:a.accent}),e.jsx("div",{className:"subj-hero-formula",children:a.formula}),e.jsx("ul",{children:a.points.map(s=>e.jsx("li",{children:e.jsx(Z,{text:s})},s))})]})}function Hn({block:a}){return e.jsxs("section",{className:"block golden-rule-block",children:[e.jsx("div",{className:"golden-rule-label",children:a.title}),e.jsx("p",{children:e.jsx(Z,{text:a.text})}),e.jsx("div",{className:"golden-rule-examples",children:a.examples.map((s,o)=>e.jsxs("div",{className:"golden-rule-pair",children:[e.jsxs("div",{children:[e.jsx("span",{children:"No"}),e.jsx(ne,{raw:s.bad})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Sí"}),e.jsx(ne,{raw:s.good})]})]},o))})]})}function Fn({cards:a}){const[s,o]=b.useState(0);return e.jsxs("section",{className:"block subj-tense-block",children:[e.jsx("div",{className:"subj-tense-tabs",children:a.map((n,t)=>e.jsxs("button",{className:`${n.tone} ${s===t?"active":""}`,onClick:()=>o(t),children:[e.jsx("span",{children:t+1}),n.title]},n.title))}),e.jsxs("div",{className:`subj-tense-card ${a[s].tone}`,children:[e.jsxs("div",{className:"subj-tense-head",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a[s].title}),e.jsx("p",{children:a[s].english})]}),e.jsx("span",{children:a[s].mainClause})]}),e.jsx("div",{className:"subj-tense-formula",children:e.jsx(ne,{raw:a[s].formula})}),e.jsx("p",{className:"subj-tense-use",children:e.jsx(Z,{text:a[s].use})}),e.jsxs("div",{className:"subj-tense-grid",children:[e.jsx("table",{children:e.jsx("tbody",{children:a[s].forms.map(([n,t])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:e.jsx(ne,{raw:t})})]},`${n}-${t}`))})}),e.jsx("div",{className:"subj-tense-examples",children:a[s].examples.map(n=>e.jsx("div",{children:e.jsx(ze,{es:n.es,en:n.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},n.es))})]})]})]})}function Wn({block:a}){return e.jsxs("section",{className:"block trigger-grid-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.heading}),e.jsx("p",{className:"lesson-text",children:e.jsx(Z,{text:a.text})}),e.jsx("div",{className:"trigger-grid",children:a.categories.map(s=>e.jsxs("article",{className:"trigger-card",children:[e.jsx("h3",{children:s.title}),e.jsx("div",{className:"trigger-expression",children:s.trigger}),s.examples.map(o=>e.jsx("div",{className:"trigger-example",children:e.jsx(ze,{es:o.es,en:o.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},o.es))]},s.title))})]})}function _n({block:a}){return e.jsxs("section",{className:"block conditional-pattern-block",children:[e.jsx("h2",{children:a.heading}),e.jsx("div",{className:"conditional-formula",children:e.jsx(ne,{raw:a.formula})}),e.jsx("p",{children:e.jsx(Z,{text:a.text})}),e.jsx("div",{className:"conditional-examples",children:a.examples.map((s,o)=>e.jsxs("article",{children:[e.jsx("div",{className:"conditional-num",children:String(o+1).padStart(2,"0")}),e.jsx(ze,{es:s.es,en:s.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"}),e.jsx("p",{children:s.note})]},s.es))})]})}function Yn({tips:a}){return e.jsx("section",{className:"block tips-grid-block",children:a.map(s=>e.jsxs("article",{className:"subj-tip-card",children:[e.jsx(_e,{size:18}),e.jsx("h3",{children:s.title}),e.jsx("p",{children:e.jsx(Z,{text:s.text})})]},s.title))})}function Kn({block:a}){const[s,o]=b.useState({}),[n,t]=b.useState(!1),i=a.questions.reduce((l,h,c)=>ae(s[c])===ae(h.answer)?l+1:l,0);function r(){o({}),t(!1)}return e.jsxs("section",{className:"block contextual-quiz-block",children:[e.jsxs("div",{className:"contextual-quiz-head",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"lesson-mini-kicker",children:[e.jsx(Se,{size:13})," Prueba contextual"]}),e.jsx("h2",{children:a.title})]}),e.jsxs("button",{onClick:r,children:[e.jsx(Ya,{size:14}),"Reiniciar"]})]}),e.jsx("div",{className:"contextual-quiz-list",children:a.questions.map((l,h)=>{const c=s[h],m=c&&ae(c)===ae(l.answer);return e.jsxs("article",{className:`contextual-quiz-card ${c?m?"correct":"wrong":""}`,children:[e.jsx("div",{className:"contextual-quiz-num",children:String(h+1).padStart(2,"0")}),e.jsx("p",{children:l.prompt}),e.jsx("div",{className:"contextual-quiz-choices",children:l.choices.map(u=>e.jsx("button",{className:c===u?"active":"",onClick:()=>o(v=>({...v,[h]:u})),children:u},u))}),c&&e.jsxs("div",{className:"contextual-quiz-feedback",children:[e.jsx("strong",{children:m?"Correcto.":`Correcto: ${l.answer}.`}),e.jsx("span",{children:l.explanation})]})]},l.prompt)})}),e.jsxs("div",{className:"contextual-quiz-score",children:[e.jsxs("span",{children:[Object.keys(s).length," / ",a.questions.length," respondidas"]}),e.jsx("button",{onClick:()=>t(!0),children:"Ver resultado"}),n&&e.jsxs("strong",{children:[i," / ",a.questions.length]})]})]})}function Jn({library:a}){const[s,o]=b.useState(0),[n,t]=b.useState(""),[i,r]=b.useState(0),l=a.perPage||36,h=a.groups[s]||a.groups[0],c=b.useMemo(()=>{const g=ae(n.trim());return g?h.entries.filter(f=>ae(f.es).includes(g)||ae(f.en).includes(g)||ae(f.example).includes(g)):h.entries},[h,n]),m=Math.max(1,Math.ceil(c.length/l)),u=Math.min(i,m-1),v=c.slice(u*l,(u+1)*l);b.useEffect(()=>{r(0)},[s,n]);function p(g){o(g)}return e.jsxs("section",{className:"block expressions-library-block",children:[e.jsxs("div",{className:"expressions-hero",children:[e.jsx("div",{className:"expressions-eye",children:a.eyebrow}),e.jsx("h2",{children:a.title}),e.jsx("p",{children:a.subtitle}),e.jsx("div",{className:"expressions-stats",children:a.groups.map(g=>e.jsxs("div",{children:[e.jsx("strong",{children:g.count}),e.jsx("span",{children:g.title})]},g.id))})]}),e.jsx("div",{className:"expressions-tabs",children:a.groups.map((g,f)=>e.jsxs("button",{className:`${g.tone} ${s===f?"active":""}`,onClick:()=>p(f),children:[e.jsx("span",{children:f+1}),g.shortTitle," (",g.count,")"]},g.id))}),e.jsxs("div",{className:"expressions-toolbar",children:[e.jsxs("label",{children:[e.jsx(Ba,{size:14}),e.jsx("input",{value:n,onChange:g=>t(g.target.value),placeholder:"Search expressions, meanings..."})]}),e.jsxs("div",{className:"expressions-count",children:[c.length," ",c.length===1?"expression":"expressions"]}),e.jsxs("div",{className:"expressions-pager",children:[e.jsx("button",{disabled:u===0,onClick:()=>r(g=>Math.max(0,g-1)),children:"Prev"}),e.jsxs("span",{children:[u+1," / ",m]}),e.jsx("button",{disabled:u>=m-1,onClick:()=>r(g=>Math.min(m-1,g+1)),children:"Next"})]})]}),v.length>0?e.jsx("div",{className:"expressions-grid",children:v.map(g=>{const f=`${h.id}-${g.rank}`;return e.jsxs("article",{className:`expression-card ${h.tone}`,children:[e.jsxs("header",{children:[e.jsxs("span",{className:"expression-rank",children:["#",g.rank]}),e.jsxs("div",{children:[e.jsxs("h3",{children:[e.jsx(Y,{text:g.es}),e.jsx(Z,{text:g.es})]}),e.jsx("p",{children:g.en})]})]}),g.example&&e.jsxs("div",{className:"expression-example",children:[e.jsx("div",{className:"expression-example-label",children:"Ejemplo"}),e.jsxs("p",{children:[e.jsx(Y,{text:g.example}),e.jsx(Z,{text:g.example})]})]})]},f)})}):e.jsxs("div",{className:"expressions-empty",children:[e.jsx(Ba,{size:24}),"No expressions found. Try a different search."]}),e.jsx("div",{className:"expressions-foot",children:a.sourceNote})]})}function Qn({savedWords:a,onSave:s,onRemove:o}){const[n,t]=b.useState(null),[i,r]=b.useState([]),l=X.useRef(null),h=X.useRef(a),c=X.useRef(i),m=Ja,u=Oo;function v(k,M){const V=String(k||"").replace(/\s+/g," ").trim(),ee=m(M);return!V||!ee?"":((V.match(/[^.!?Â¡Â¿]+[.!?]?/g)||[V]).find(_=>m(_).includes(ee))||V).trim().slice(0,220)}function p(k,M){const V=k?.closest?.(".reading-paragraph, .lesson-text, .gl-text, .bio-paragraph, .poem-stanza-es, .song-lyric-es, .lesson-ex-es, .gl-ex-es, .example-es, .phrase-es, .vocab-es, article, section");return v(V?.innerText||V?.textContent||k?.textContent||"",M)}const[g,f]=b.useState(null);if(b.useEffect(()=>{h.current=a},[a]),b.useEffect(()=>{c.current=i},[i]),b.useEffect(()=>{let k=!0;return Ha().then(M=>{k&&r(M)}).catch(()=>{k&&r([])}),()=>{k=!1}},[]),b.useEffect(()=>{let k="";async function M(H,_,x,C=""){const E=m(H);if(!E||E.length<2)return;f(null);let I=Co(E,h.current,c.current);if(!I&&c.current.length===0)try{const L=await Ha();c.current=L,r(L),I=Co(E,h.current,L)}catch{}if(I){t({word:I.matchedWord||E,x:_,y:x,context:C,loading:!1,result:I,error:!1});return}t({word:E,x:_,y:x,context:C,loading:!0,result:null,error:!1});try{const L=await u(E);t(B=>B&&B.word===E?{...B,loading:!1,result:L,error:!L}:B)}catch{t(B=>B&&B.word===E?{...B,loading:!1,error:!0}:B)}}function V(H){const _=H.target.closest&&H.target.closest("[data-dict-word]");if(!_)return;const x=m(_.dataset.dictWord||_.textContent||"");if(!x||x.length<2)return;const C=window.getSelection?.();if(C&&!C.isCollapsed&&m(C.toString()).length>1)return;H.stopPropagation();const E=_.getBoundingClientRect(),I=E.left+E.width/2,L=E.bottom+10;M(x,I,L,p(_,x))}function ee(){clearTimeout(ee._t),ee._t=setTimeout(()=>{const H=window.getSelection(),_=H?.toString()||"",x=m(_);if(!x||x.length<2||x.split(/\s+/).length>3){k&&f(null),k="";return}if(x===k)return;k=x;let C=window.innerWidth/2,E=120;try{const te=H.getRangeAt(0).getBoundingClientRect();C=te.left+te.width/2,E=te.top-6}catch{}const I=96;C=Math.max(I/2+8,Math.min(C,window.innerWidth-I/2-8)),E<50&&(E=50);let L="";try{const B=H.getRangeAt(0),te=B.commonAncestorContainer?.nodeType===1?B.commonAncestorContainer:B.commonAncestorContainer?.parentElement;L=p(te,x)}catch{}f({word:x,x:C,y:E,context:L})},200)}function $(H){const _=l.current&&l.current.contains(H.target),x=H.target.closest&&H.target.closest(".dict-floating-btn"),C=H.target.closest&&H.target.closest("[data-dict-word]");!_&&!x&&!C&&(t(null),f(null),k="")}return window.__bookOpenPopup=M,document.addEventListener("selectionchange",ee),document.addEventListener("pointerup",V),document.addEventListener("pointerdown",$),()=>{document.removeEventListener("selectionchange",ee),document.removeEventListener("pointerup",V),document.removeEventListener("pointerdown",$),delete window.__bookOpenPopup}},[]),!n&&!g)return null;if(!n&&g)return e.jsxs("button",{className:"dict-floating-btn",style:{left:g.x,top:g.y},onClick:k=>{k.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(g.word,g.x,g.y+50,g.context)},onPointerDown:k=>k.stopPropagation(),children:[e.jsx(Ve,{size:14}),e.jsx("span",{children:"Traducir"})]});const N=290,y=Math.max(N/2+8,Math.min(n.x,window.innerWidth-N/2-8)),S=n.y+220>window.innerHeight,q=S?"auto":n.y,G=S?Math.max(12,window.innerHeight-n.y+12):"auto",z=new Set(xa(n.word)),T=ve(n.word),O=a.find(k=>ve(k.word)===T)||a.find(k=>z.has(ha(k.word))),D=!!O;function K(){D?o(O.word):s({word:n.word,translation:n.result?.main||"",pos:n.result?.pos||"",extras:n.result?.extras||[],context:n.context||"",contexts:n.context?[n.context]:[],savedAt:Date.now()})}return e.jsxs("div",{ref:l,className:"dict-popup",style:{left:y,top:q==="auto"?"auto":q,bottom:G==="auto"?"auto":G},children:[e.jsxs("div",{className:"dict-header",children:[e.jsx("span",{className:"dict-word",children:n.word}),e.jsx("button",{className:"dict-close-btn",onClick:()=>t(null),"aria-label":"Close",children:e.jsx(xe,{size:14})})]}),e.jsxs("div",{className:"dict-body",children:[n.loading&&e.jsxs("div",{className:"dict-loading",children:[e.jsx("span",{className:"dict-spinner"}),e.jsx("span",{children:"Looking up…"})]}),!n.loading&&n.error&&e.jsxs("div",{className:"dict-fallback",children:[e.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),e.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(n.word)}`,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(Ve,{size:14}),'Buscar "',n.word,'" en SpanishDict']})]}),!n.loading&&n.result&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`dict-main-translation ${n.result.isDefinition?"is-definition":""}`,children:n.result.main}),n.context&&e.jsxs("div",{className:"dict-context",children:[e.jsx("span",{children:"Contexto"}),e.jsx("em",{children:n.context})]}),n.result.extras?.length>0&&e.jsx("div",{className:"dict-extras",children:n.result.extras.map((k,M)=>e.jsx("span",{className:"dict-extra-tag",children:k},M))}),n.result.meanings?.length>0&&e.jsx("ul",{className:"dict-meanings",children:n.result.meanings.map((k,M)=>e.jsx("li",{className:"dict-meaning-item",children:k},M))}),n.result.examples?.length>0&&e.jsxs("div",{className:"dict-examples",children:[e.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),n.result.examples.map((k,M)=>e.jsxs("div",{className:"dict-example",children:[e.jsx("div",{className:"dict-example-es",children:k.es}),e.jsx("div",{className:"dict-example-en",children:k.en})]},M))]})]})]}),!n.loading&&e.jsxs("button",{className:`dict-save-btn ${D?"saved":""}`,onClick:K,"aria-label":D?"Remove from Memoria":"Save to Memoria",children:[e.jsx(We,{size:14,className:D?"filled":""}),D?"Guardado en Memoria ✓":n.result?"Guardar en Memoria":"Guardar palabra"]}),e.jsx("div",{className:"dict-footer",children:e.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(n.word)}`,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(Ve,{size:12}),"Ver en SpanishDict"]})})]})}function Xn({savedWords:a,onRemove:s,onClear:o,onUpdateWord:n}){const[t,i]=b.useState({}),[r,l]=b.useState("grid"),[h,c]=b.useState(""),[m,u]=b.useState("ALL"),[v,p]=b.useState(0),[g,f]=b.useState(!1),[N,y]=b.useState(""),[S,q]=b.useState(null);function G(x){i(C=>({...C,[x]:!C[x]}))}function z(x){q({type:"word",word:x})}function T(){q({type:"clear"})}function O(){S?.type==="word"&&s?.(S.word),S?.type==="clear"&&o?.(),q(null)}const D=[...a].sort((x,C)=>{const E=x.review?.seen&&(x.review?.dueAt||0)<=Date.now(),I=C.review?.seen&&(C.review?.dueAt||0)<=Date.now();return E!==I?E?-1:1:C.savedAt-x.savedAt}),K=b.useMemo(()=>{const x=new Set;for(const C of D)Ze(C).forEach(E=>x.add(E));return[...x].sort()},[D]),k=b.useMemo(()=>{const x=h.trim().toLowerCase();return D.filter(C=>{const E=Ze(C),I=m==="ALL"||E.includes(m),L=!x||C.word.toLowerCase().includes(x)||(C.translation||"").toLowerCase().includes(x)||E.some(B=>B.toLowerCase().includes(x));return I&&L})},[D,h,m]),M=k[v%Math.max(1,k.length)],V=b.useMemo(()=>Ho(D),[D]);b.useEffect(()=>{p(0),f(!1)},[h,m,a.length]);function ee(x){const C=N.trim().toLowerCase().replace(/\s+/g,"-");if(!C)return;const E=a.find(L=>L.word===x),I=Array.from(new Set([...E?.tags||[],C]));n?.(x,{tags:I}),y("")}function $(x,C){const E=a.find(I=>I.word===x);n?.(x,{[C]:!E?.[C]})}function H(x,C){const E=a.find(L=>L.word===x),I=Yo(E?.review,C);n?.(x,{review:I,difficult:C==="hard"?!0:E?.difficult}),_()}function _(){p(x=>(x+1)%Math.max(1,k.length)),f(!1)}return D.length===0?e.jsxs("div",{className:"memoria-empty",children:[e.jsx(We,{size:36,className:"memoria-empty-icon"}),e.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),e.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",e.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):e.jsxs("article",{className:"chapter-body memoria-view",children:[e.jsxs("header",{className:"chapter-header",children:[e.jsx("div",{className:"chapter-meta",children:e.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),e.jsx("h1",{className:"chapter-title",children:"Memoria"}),e.jsxs("p",{className:"chapter-subtitle",children:[D.length," ",D.length===1?"palabra guardada":"palabras guardadas"]}),e.jsx("p",{className:"chapter-intro",children:r==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),e.jsxs("div",{className:"memoria-summary-strip",children:[e.jsxs("span",{children:[e.jsx(ba,{size:13})," ",V.due," due"]}),e.jsxs("span",{children:[e.jsx(la,{size:13})," ",V.favorite," favoritas"]}),e.jsxs("span",{children:[e.jsx(da,{size:13})," ",V.difficult," dificiles"]}),e.jsxs("span",{children:[e.jsx(Wa,{size:13})," ",V.mastered," dominadas"]})]}),e.jsxs("div",{className:"memoria-view-toggle",children:[e.jsx("button",{className:`memoria-view-btn ${r==="grid"?"active":""}`,onClick:()=>l("grid"),children:"Tarjetas"}),e.jsx("button",{className:`memoria-view-btn ${r==="list"?"active":""}`,onClick:()=>l("list"),children:"Lista"}),e.jsx("button",{className:`memoria-view-btn ${r==="review"?"active":""}`,onClick:()=>l("review"),children:"Repaso"})]}),e.jsxs("div",{className:"memoria-tools",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Buscar"}),e.jsx("input",{value:h,onChange:x=>c(x.target.value),placeholder:"palabra, translation, tag..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Etiqueta"}),e.jsxs("select",{value:m,onChange:x=>u(x.target.value),children:[e.jsx("option",{value:"ALL",children:"Todas"}),K.map(x=>e.jsx("option",{value:x,children:x},x))]})]}),e.jsx("button",{className:"memoria-tool-btn",onClick:()=>dn(k),children:"Export CSV"})]}),r==="review"?e.jsx("div",{className:"memoria-review",children:M?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:`memoria-review-card ${g?"flipped":""}`,onClick:()=>f(x=>!x),children:[e.jsx("span",{className:"memoria-review-count",children:k.length?`${v+1} / ${k.length}`:"0 / 0"}),e.jsx("strong",{children:g?M.translation||"Sin traduccion":M.word}),e.jsx("em",{children:g?M.word:"toca para revelar"})]}),e.jsxs("div",{className:"memoria-review-actions",children:[e.jsx(Y,{text:M.word,size:"md"}),e.jsx("input",{value:N,onChange:x=>y(x.target.value),placeholder:"add-tag"}),e.jsx("button",{onClick:()=>ee(M.word),children:"Tag"}),e.jsxs("button",{onClick:()=>$(M.word,"favorite"),children:[e.jsx(la,{size:13}),M.favorite?"Unfavorite":"Favorite"]}),e.jsxs("button",{onClick:()=>$(M.word,"difficult"),children:[e.jsx(da,{size:13}),M.difficult?"Not hard":"Difficult"]}),e.jsx("button",{onClick:_,children:"Siguiente"})]}),e.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(x=>e.jsx("button",{onClick:()=>H(M.word,x),children:x==="again"?"Again":x==="hard"?"Hard":x==="good"?"Good":"Easy"},x))})]}):e.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):r==="grid"?e.jsx("div",{className:"memoria-grid",children:k.map(x=>{const C=t[x.word],E=x.pending,I=Ze(x);return e.jsxs("div",{className:`memoria-card ${C?"flipped":""}`,onClick:()=>G(x.word),children:[e.jsxs("div",{className:"memoria-card-inner",children:[e.jsxs("div",{className:"memoria-face front",children:[e.jsx("div",{className:"memoria-word",children:x.word}),x.pos&&e.jsx("div",{className:"memoria-pos",children:x.pos}),x.translation?e.jsx("div",{className:"memoria-front-translation",children:x.translation}):E?e.jsxs("div",{className:"memoria-front-pending",children:[e.jsx("span",{className:"dict-spinner"}),e.jsx("span",{children:"traduciendo…"})]}):e.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),I.length>0&&e.jsx("div",{className:"memoria-tags",children:I.slice(0,3).map(L=>e.jsx("span",{children:L},L))}),e.jsxs("div",{className:"memoria-label-actions",children:[e.jsx("button",{className:x.favorite?"active":"",onClick:L=>{L.stopPropagation(),$(x.word,"favorite")},"aria-label":"Toggle favorite",children:e.jsx(la,{size:12})}),e.jsx("button",{className:x.difficult?"active hard":"",onClick:L=>{L.stopPropagation(),$(x.word,"difficult")},"aria-label":"Toggle difficult",children:e.jsx(da,{size:12})})]})]}),e.jsxs("div",{className:"memoria-face back",children:[x.translation?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"memoria-translation",children:x.translation}),x.extras?.length>0&&e.jsx("div",{className:"memoria-extras",children:x.extras.slice(0,3).map((L,B)=>e.jsx("span",{className:"memoria-extra-tag",children:L},B))}),(x.context||x.contexts?.[0])&&e.jsx("div",{className:"memoria-context",children:x.context||x.contexts[0]})]}):e.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),e.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(x.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:L=>L.stopPropagation(),children:"SpanishDict →"})]})]}),e.jsx("button",{className:"memoria-remove",onClick:L=>{L.stopPropagation(),z(x.word)},"aria-label":`Remove ${x.word}`,children:e.jsx(xe,{size:13})})]},x.word)})}):e.jsx("div",{className:"memoria-list",children:k.map(x=>{const C=x.pending,E=Ze(x);return e.jsxs("div",{className:"memoria-list-row",children:[e.jsxs("div",{className:"memoria-list-main",children:[e.jsxs("div",{className:"memoria-list-es",children:[e.jsx("span",{className:"memoria-list-word",children:x.word}),x.pos&&e.jsx("span",{className:"memoria-list-pos",children:x.pos})]}),x.translation?e.jsx("div",{className:"memoria-list-en",children:x.translation}):C?e.jsxs("div",{className:"memoria-list-en pending",children:[e.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):e.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),x.extras?.length>0&&e.jsx("div",{className:"memoria-list-extras",children:x.extras.slice(0,4).map((I,L)=>e.jsx("span",{className:"memoria-list-extra-tag",children:I},L))}),E.length>0&&e.jsx("div",{className:"memoria-list-extras",children:E.map(I=>e.jsx("span",{className:"memoria-list-extra-tag",children:I},I))}),(x.context||x.contexts?.[0])&&e.jsx("div",{className:"memoria-list-context",children:x.context||x.contexts[0]})]}),e.jsxs("div",{className:"memoria-list-actions",children:[e.jsx("button",{className:`memoria-list-remove ${x.favorite?"active-label":""}`,onClick:()=>$(x.word,"favorite"),"aria-label":"Toggle favorite",children:e.jsx(la,{size:14})}),e.jsx("button",{className:`memoria-list-remove ${x.difficult?"active-hard":""}`,onClick:()=>$(x.word,"difficult"),"aria-label":"Toggle difficult",children:e.jsx(da,{size:14})}),e.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(x.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:e.jsx(Ve,{size:14})}),e.jsx("button",{className:"memoria-list-remove",onClick:()=>z(x.word),"aria-label":`Remove ${x.word}`,children:e.jsx(xe,{size:14})})]})]},x.word)})}),D.length>0&&e.jsx("div",{className:"memoria-actions",children:e.jsx("button",{className:"memoria-clear-btn",onClick:T,children:"Borrar todo"})}),S&&e.jsx("div",{className:"memoria-confirm-overlay",role:"dialog","aria-modal":"true","aria-label":"Confirm Memoria deletion",children:e.jsxs("div",{className:"memoria-confirm-card",children:[e.jsx("div",{className:"memoria-confirm-kicker",children:"Confirmar"}),e.jsx("h3",{children:S.type==="word"?`Remove "${S.word}"?`:"Remove all Memoria words?"}),e.jsx("p",{children:S.type==="word"?"This word will leave your saved cards, review queue, and list.":"This clears every saved word in Memoria for this browser."}),e.jsxs("div",{className:"memoria-confirm-actions",children:[e.jsx("button",{className:"memoria-confirm-cancel",onClick:()=>q(null),children:"Keep it"}),e.jsx("button",{className:"memoria-confirm-danger",onClick:O,children:S.type==="word"?"Remove word":"Clear all"})]})]})})]})}function Zn({savedWords:a,chapters:s,entries:o=[],onEntriesChange:n}){const[t,i]=b.useState(0),[r,l]=b.useState("");async function h(p){n?.(p);try{await window.storage.set(Ra,JSON.stringify(p))}catch{}}const c=b.useMemo(()=>{const p=a.slice(0,8).map(f=>({label:`Usa "${f.word}"`,text:`Write 2 Spanish sentences using "${f.word}".`,target:f.word})),g=s.slice(0,6).map(f=>({label:f.title,text:`Write a short Spanish paragraph about "${f.title}".`,target:""}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:""},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:""},...p,...g]},[a,s]),m=c[t]||c[0],u=b.useMemo(()=>tn(r,m),[r,m]);function v(){if(!r.trim())return;const p=[{id:`${Date.now()}`,prompt:m.text,text:r.trim(),feedback:u,createdAt:Date.now()},...o].slice(0,40);h(p),l("")}return e.jsxs("article",{className:"chapter-body writing-view",children:[e.jsxs("header",{className:"chapter-header",children:[e.jsxs("div",{className:"chapter-icon-row",children:[e.jsx("div",{className:"chapter-icon-wrap",children:e.jsx(Go,{size:22})}),e.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),e.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),e.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),e.jsx("div",{className:"chapter-rule"})]}),e.jsxs("section",{className:"writing-board",children:[e.jsxs("div",{className:"writing-prompt-row",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Prompt"}),e.jsx("select",{value:t,onChange:p=>i(Number(p.target.value)),children:c.map((p,g)=>e.jsx("option",{value:g,children:p.label},`${p.label}-${g}`))})]}),e.jsx("p",{children:m.text})]}),e.jsx("textarea",{value:r,onChange:p=>l(p.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),e.jsxs("div",{className:"writing-feedback-grid",children:[e.jsxs("span",{children:[e.jsx("strong",{children:u.words})," words"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.sentences})," sentences"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.accents})," accents"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.connectors})," connectors"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.score})," score"]})]}),e.jsx("div",{className:"writing-tips",children:u.tips.length?u.tips.map(p=>e.jsx("span",{children:p},p)):e.jsx("span",{children:"Good shape. Read it out loud once."})}),e.jsxs("div",{className:"writing-actions",children:[e.jsx(Y,{text:r,size:"md"}),e.jsx("button",{onClick:v,disabled:!r.trim(),children:"Save practice"})]})]}),e.jsxs("section",{className:"writing-history",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(_a,{size:18})," History"]}),o.length?o.map(p=>e.jsxs("article",{className:"writing-entry",children:[e.jsxs("div",{className:"writing-entry-meta",children:[new Date(p.createdAt).toLocaleDateString()," - ",p.feedback.words," words"]}),e.jsx("p",{children:p.prompt}),e.jsx("blockquote",{children:p.text})]},p.id)):e.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function et({totalLessons:a,visitedCount:s,savedWordsCount:o,levelFilter:n,palabrasSummary:t,lessonSummary:i,memoriaSummary:r,learnerProfile:l,reviewQueue:h,studyTime:c,writingCount:m,sectionProgress:u,recommendations:v,onStart:p,onOpenMemoria:g,onOpenPalabras:f,onOpenVerb:N,onOpenReading:y,onOpenWriting:S,onSelectChapter:q}){const G=a?Math.round(s/a*100):0;return e.jsxs("article",{className:"chapter-body home-dashboard",children:[e.jsxs("header",{className:"home-hero",children:[e.jsxs("div",{className:"home-kicker",children:[e.jsx(Do,{size:18}),"Plan de estudio"]}),e.jsx("h1",{className:"home-title",children:"Learn Spanish"}),e.jsx("p",{className:"home-subtitle",children:"Hoy: una leccion clara, 10 palabras, lectura en voz alta, Memoria, y una frase escrita."}),e.jsxs("div",{className:"home-actions",children:[e.jsxs("button",{className:"home-primary",onClick:p,children:["Empezar",e.jsx(Ne,{size:16})]}),e.jsxs("button",{className:"home-secondary",onClick:g,children:[e.jsx(We,{size:15}),"Memoria"]})]})]}),e.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Progreso"}),e.jsxs("strong",{children:[G,"%"]}),e.jsxs("span",{children:[s," / ",a," lecciones"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Tiempo hoy"}),e.jsx("strong",{children:Me(c.todaySeconds)}),e.jsxs("span",{children:[Me(c.totalSeconds)," total"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Nivel"}),e.jsx("strong",{children:n==="ALL"?"Todo":n}),e.jsx("span",{children:"Filtro activo"})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Memoria"}),e.jsx("strong",{children:o}),e.jsxs("span",{children:[r.difficult," dificiles"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Palabras due"}),e.jsx("strong",{children:t.due}),e.jsxs("span",{children:[t.mastered," dominadas"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Lecciones"}),e.jsx("strong",{children:i.understood}),e.jsxs("span",{children:[i.read," leidas"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Writing"}),e.jsx("strong",{children:m}),e.jsx("span",{children:"entradas"})]})]}),e.jsxs("section",{className:"home-daily",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx($a,{size:18}),"Ruta diaria"]}),e.jsxs("div",{className:"home-daily-grid",children:[e.jsxs("button",{onClick:f,children:[e.jsx("span",{children:"01"}),e.jsx("strong",{children:"10 palabras"}),e.jsx("em",{children:t.due?`${t.due} vencidas`:`${t.seen} vistas`})]}),e.jsxs("button",{onClick:y,children:[e.jsx("span",{children:"02"}),e.jsx("strong",{children:"Lectura con audio"}),e.jsx("em",{children:"lee y escucha una pagina"})]}),e.jsxs("button",{onClick:N,children:[e.jsx("span",{children:"03"}),e.jsx("strong",{children:"Un verbo"}),e.jsx("em",{children:"tabla, voz, repeticion"})]}),e.jsxs("button",{onClick:g,children:[e.jsx("span",{children:"04"}),e.jsx("strong",{children:"Memoria"}),e.jsxs("em",{children:[o," guardadas"]})]}),e.jsxs("button",{onClick:S,children:[e.jsx("span",{children:"05"}),e.jsx("strong",{children:"Writing"}),e.jsx("em",{children:"sentence practice"})]})]})]}),e.jsxs("section",{className:"home-review-queue",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(Ns,{size:18}),"Cola de repaso"]}),e.jsx("div",{className:"home-review-list",children:h.slice(0,8).map((z,T)=>e.jsxs("button",{onClick:()=>z.chapter?q(z.chapter):z.type==="writing"?S():g(),children:[e.jsx("span",{className:`review-type ${z.type}`,children:z.type}),e.jsx("strong",{children:z.title}),e.jsx("em",{children:z.detail})]},`${z.type}-${z.title}-${T}`))}),e.jsxs("div",{className:"home-review-summary",children:[l.vocabulary.due," vocabulary due · ",l.writing.needsPractice," writing rewrites · ",l.chapters.unvisited," lesson groups to open"]})]}),e.jsxs("section",{className:"home-progress-map",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(Fa,{size:18}),"Mapa de progreso"]}),e.jsx("div",{className:"home-progress-list",children:u.map(z=>{const T=z.total?Math.round(z.visited/z.total*100):0;return e.jsxs("div",{className:"home-progress-row",children:[e.jsxs("div",{className:"home-progress-top",children:[e.jsx("span",{children:z.label}),e.jsxs("strong",{children:[z.visited," / ",z.total]})]}),e.jsx("div",{className:"home-progress-track",children:e.jsx("span",{style:{width:`${T}%`}})})]},z.id)})})]}),e.jsxs("section",{className:"home-path",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ba,{size:18}),"Siguiente lectura"]}),e.jsx("div",{className:"home-recommendations",children:v.map((z,T)=>e.jsxs("button",{className:"home-rec",onClick:()=>q(z),children:[e.jsx("span",{className:"home-rec-index",children:String(T+1).padStart(2,"0")}),e.jsxs("span",{className:"home-rec-main",children:[e.jsx("span",{className:"home-rec-title",children:z.title}),e.jsxs("span",{className:"home-rec-meta",children:[z.sectionLabel," - ",z.level]})]}),e.jsx(Ne,{size:16})]},z.id))})]})]})}function at(){const[a,s]=b.useState("tiempos"),[o,n]=b.useState("tiempos"),[t,i]=b.useState(null),[r,l]=b.useState(null),[h,c]=b.useState("ALL"),[m,u]=b.useState(!1),[v,p]=b.useState(!1),[g,f]=b.useState(!1),[N,y]=b.useState(!0),[S,q]=b.useState(!1),[G,z]=b.useState(""),[T,O]=b.useState({rate:.85,voiceURI:""}),[D,K]=b.useState("both"),[k,M]=b.useState(!1),[V,ee]=b.useState(!1),[$,H]=b.useState([]),[_,x]=b.useState(null),[C,E]=b.useState(!1),[I,L]=b.useState(""),[B,te]=b.useState(""),[re,Ke]=b.useState(""),[ce,Ge]=b.useState(!1),[ia,j]=b.useState(""),[F,J]=b.useState(!1),[W,oe]=b.useState(()=>Fe()),[fe,De]=b.useState(0),qe=X.useRef(0),ya=X.useRef(""),Je=X.useRef(!1),wa=X.useRef(!1),eo=X.useRef(0),[Ce,ka]=b.useState(1),[Ee,ra]=b.useState(null),[Q,ye]=b.useState([]),[de,ja]=b.useState([]),[pe,Na]=b.useState({}),[se,za]=b.useState({});b.useEffect(()=>{(async()=>{try{const d=await window.storage.get("memoria-words");d?.value&&ye(JSON.parse(d.value))}catch{}try{const d=await window.storage.get("font-scale");if(d?.value){const w=parseFloat(d.value);w>=.85&&w<=1.3&&ka(w)}}catch{}try{const d=await window.storage.get("last-read");if(d?.value){const w=JSON.parse(d.value);w?.chapterId&&w.chapterId!=="tiempos"&&ra(w)}}catch{}try{const d=await window.storage.get("visited-chapters");d?.value&&ja(JSON.parse(d.value))}catch{}try{const d=await window.storage.get(Lo);d?.value&&Na(JSON.parse(d.value))}catch{}try{const d=await window.storage.get(To);d?.value&&za(JSON.parse(d.value))}catch{}try{const d=await window.storage.get(Aa);if(d?.value){const w=JSON.parse(d.value);O(w),ea(w)}}catch{}try{const d=await window.storage.get(Pa);(d?.value==="spanish"||d?.value==="both")&&K(d.value)}catch{}try{(await window.storage.get(Ma))?.value==="true"&&M(!0)}catch{}try{const d=await window.storage.get(ca);d?.value&&L(d.value)}catch{}try{const d=await window.storage.get(Ra);d?.value&&H(JSON.parse(d.value)||[])}catch{}try{const d=await window.storage.get(Xe);d?.value&&oe(Fe(JSON.parse(d.value)))}catch{}})()},[]),b.useEffect(()=>{function d(w){x(w.detail?.worker||null)}return window.addEventListener("learn-spanish-update-ready",d),()=>window.removeEventListener("learn-spanish-update-ready",d)},[]);function Ko(){_?.postMessage?.({type:"SKIP_WAITING"})}b.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(Ce)),me();try{window.storage.set("font-scale",String(Ce))}catch{}},[Ce]);function ao(d){ka(w=>Math.max(.85,Math.min(1.3,+(w+d).toFixed(2))))}function me(){wa.current||(Je.current=!0)}async function we(d){me();try{await window.storage.set("memoria-words",JSON.stringify(d))}catch{}}async function oo(d){me();try{await window.storage.set(Lo,JSON.stringify(d))}catch{}}async function so(d){me();try{await window.storage.set(To,JSON.stringify(d))}catch{}}function Jo(d){Na(d),oo(d)}function Qo(d,w){za(A=>{const P={...A};return w?P[d]=w:delete P[d],so(P),P})}function Xo(d){O(d),ea(d),me();try{window.storage.set(Aa,JSON.stringify(d))}catch{}}function Zo(){K(d=>{const w=d==="spanish"?"both":"spanish";me();try{window.storage.set(Pa,w)}catch{}return w})}function es(){M(d=>{const w=!d;me();try{window.storage.set(Ma,String(w))}catch{}return w})}async function no(d){ye(A=>{const P=A.map(U=>U.word===d?{...U,pending:!0}:U);return we(P),P});const w=await Oo(d);ye(A=>{const P=A.map(U=>U.word!==d?U:w?{...U,translation:w.main,pos:w.pos||U.pos||"",extras:w.extras||[],pending:!1,translatedAt:Date.now()}:{...U,pending:!1});return we(P),P})}function to(d){ye(w=>{if(w.some(P=>P.word===d.word)){const P=w.map(U=>U.word===d.word?{...U,...d,tags:Array.from(new Set([...U.tags||[],...d.tags||[]])),extras:Array.from(new Set([...U.extras||[],...d.extras||[]])),contexts:Array.from(new Set([...U.contexts||[],U.context,...d.contexts||[],d.context].filter(Boolean))).slice(0,6),context:d.context||U.context||"",savedAt:U.savedAt||d.savedAt||Date.now()}:U);return we(P),P}const A=[d,...w];return we(A),A}),d.translation||no(d.word)}function io(d){ye(w=>{const A=w.filter(P=>P.word!==d);return we(A),A})}function ro(d,w){ye(A=>{const P=A.map(U=>U.word===d?{...U,...w}:U);return we(P),P})}function as(){ye([]),we([])}function os(d){me(),H(d)}b.useEffect(()=>{if(Q.length===0)return;const d=Q.filter(w=>!w.translation&&!w.pending);d.length!==0&&d.slice(0,5).forEach((w,A)=>{setTimeout(()=>no(w.word),A*800)})},[Q.length]);const R=b.useMemo(()=>fn(je,h),[h]);b.useEffect(()=>{R.find(d=>d.id===o)||R.length&&(n(R[0].id),s(R[0].sectionId),l(null))},[R,o]);const Ue=b.useMemo(()=>R.find(d=>d.id===o),[R,o]),ss=b.useMemo(()=>je.find(d=>d.id===a),[a]),Sa=b.useMemo(()=>je.find(d=>d.id===t),[t]),lo=b.useMemo(()=>R.filter(d=>d.sectionId===t),[R,t]),co=b.useMemo(()=>ga(Sa,lo),[Sa,lo]),Ie=R.findIndex(d=>d.id===o),qa=Ie>0?R[Ie-1]:null,Ca=Ie>=0&&Ie<R.length-1?R[Ie+1]:null,ns=b.useMemo(()=>new Set(de),[de]),Te=b.useMemo(()=>xn(je,R,de,se),[R,de,se]),po=Te.lessons,Ea=Te.completed,mo=b.useMemo(()=>yn(po,de,se,4),[po,de,se]),uo=b.useMemo(()=>nn(G,R,Q,$),[G,R,Q,$]),ts=b.useMemo(()=>({read:Te.read,understood:Te.understood}),[Te]),is=b.useMemo(()=>Ho(Q),[Q]),Ia=b.useMemo(()=>rn({chapters:R,visitedChapters:de,lessonStatuses:se,palabrasProgress:pe,savedWords:Q,writingEntries:$}),[R,de,se,pe,Q,$]),rs=b.useMemo(()=>ln({chapters:R,lessonStatuses:se,palabrasProgress:pe,savedWords:Q,writingEntries:$}),[R,se,pe,Q,$]),ho=mo[0]||R[0],ls=b.useMemo(()=>{const d=Object.values(pe||{}),w=Date.now();return{seen:d.filter(A=>A?.seen).length,due:d.filter(A=>A?.seen&&(A.dueAt||0)<=w).length,mastered:d.filter(A=>A?.mastered).length}},[pe]),ds=b.useMemo(()=>vn(je,R,de,se),[R,de,se]),go=R.find(d=>d.id==="palabras-5000"),fo=R.find(d=>d.sectionId==="verbos")||R.find(d=>d.sectionId==="verbos2"),bo=R.find(d=>d.sectionId==="lectura"),Le=!!(Ue&&!N&&!g&&!S&&!t),Qe=r?.cardId||Ue?.id,cs=Le?`${Ue.sectionLabel||"Lesson"} - ${r?.title||Ue.title}`:"Open a lesson to count";b.useEffect(()=>{De(0)},[Qe]),b.useEffect(()=>{if(!Le||!Qe)return;let d=!0;const w=`${Date.now()}-${Math.random().toString(36).slice(2)}-${Qe}`;ya.current=w;const A=()=>{if(!d||document.hidden)return;const U=Date.now();De(le=>le+1),oe(le=>{const ie=Hs(le,Qe,w,U);if(qe.current+=1,qe.current>=15){qe.current=0,me();try{window.storage.set(Xe,JSON.stringify(ie))}catch{}}return ie})},P=window.setInterval(A,1e3);return()=>{d=!1,window.clearInterval(P),ya.current===w&&(ya.current="")}},[Le,Qe]),b.useEffect(()=>{me();try{window.storage.set(Xe,JSON.stringify(W))}catch{}},[N,g,S,t,o,r]),b.useEffect(()=>{const d=()=>{try{window.storage.set(Xe,JSON.stringify(W))}catch{}};return window.addEventListener("pagehide",d),window.addEventListener("beforeunload",d),()=>{window.removeEventListener("pagehide",d),window.removeEventListener("beforeunload",d)}},[W]),b.useEffect(()=>{try{window.storage.set(an,JSON.stringify(Ia))}catch{}},[Ia]);function ue(d){const w=d.parentChapterId||d.id,A=d.sectionId||je.find(P=>P.chapters.some(U=>U.id===w))?.id||a;n(w),s(A),i(null),l(d.nestedTarget||null),f(!1),q(!1),y(!1),u(!1),ra(null),ja(P=>{const U=[w,d.id].filter(Boolean),le=Array.from(new Set([...P,...U]));if(le.length===P.length)return P;try{window.storage.set("visited-chapters",JSON.stringify(le))}catch{}return le});try{window.storage.set("last-read",JSON.stringify({sectionId:A,chapterId:w,cardId:d.id,nestedTarget:d.nestedTarget||null,title:d.nestedTarget?.title||d.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const P=document.querySelector(".book-main");P&&P.scrollTo({top:0,behavior:"smooth"})}}function xo(d){if(s(d.id),i(d.id),l(null),y(!1),f(!1),q(!1),u(!1),typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const w=document.querySelector(".book-main");w&&w.scrollTo({top:0,behavior:"smooth"})}}function ps(){if(!Ee)return;const d=je.find(A=>A.id===Ee.sectionId),w=d?.chapters.find(A=>A.id===Ee.chapterId);w&&ue({...w,id:Ee.cardId||w.id,parentChapterId:w.id,sectionId:d.id,nestedTarget:Ee.nestedTarget||null}),ra(null)}function ms(){ra(null)}function us(){return{app:"Learn Spanish",version:2,exportedAt:new Date().toISOString(),savedWords:Q,visitedChapters:de,palabrasProgress:pe,lessonStatuses:se,writingEntries:$,audioSettings:T,fontScale:Ce,translationMode:D,booxMode:k,studyTime:W}}async function hs(d){wa.current=!0;try{const w=Array.isArray(d.savedWords)?d.savedWords:[],A=Array.isArray(d.visitedChapters)?d.visitedChapters:[],P=d.palabrasProgress&&typeof d.palabrasProgress=="object"?d.palabrasProgress:{},U=d.lessonStatuses&&typeof d.lessonStatuses=="object"?d.lessonStatuses:{},le=Array.isArray(d.writingEntries)?d.writingEntries:[],ie=d.audioSettings&&typeof d.audioSettings=="object"?d.audioSettings:T,Ae=Number(d.fontScale),vo=d.translationMode==="spanish"?"spanish":"both",yo=!!d.booxMode,wo=Fe(d.studyTime||W);ye(w),ja(A),Na(P),za(U),H(le),O(ie),ea(ie),K(vo),M(yo),oe(wo),Ae>=.85&&Ae<=1.3&&ka(Ae),await we(w),await oo(P),await so(U),await window.storage.set("visited-chapters",JSON.stringify(A)),await window.storage.set(Ra,JSON.stringify(le)),await window.storage.set(Aa,JSON.stringify(ie)),await window.storage.set(Pa,vo),await window.storage.set(Ma,String(yo)),await window.storage.set(Xe,JSON.stringify(wo)),Ae>=.85&&Ae<=1.3&&await window.storage.set("font-scale",String(Ae)),Je.current=!1}finally{wa.current=!1}}async function gs(){const d=I.trim();if(!d){j("Paste your Google OAuth Client ID first.");return}try{await window.storage.set(ca,d),L(d),j("Google Client ID saved on this device.")}catch{j("Could not save the Client ID in this browser.")}}async function fs(){const d=I.trim();if(!d){j("Paste and save your Google OAuth Client ID first.");return}Ge(!0),j("Opening Google sign-in...");try{await window.storage.set(ca,d);const w=await Eo(d,"consent");te(w),j("Signed in. Syncing your study data now..."),await Ta(w)}catch(w){j(w?.message||"Google sign-in did not finish.")}finally{Ge(!1)}}async function Ta(d=B,w={}){const A=I.trim();if(!A){j("Paste and save your Google OAuth Client ID first.");return}Ge(!0),w.silent||j(d?"Syncing with Google Drive...":"Opening Google sign-in...");try{await window.storage.set(ca,A);const P=d||await Eo(A,B?"":"consent");te(P),w.silent||j("Checking Google Drive...");const U=await _s(P),le=await Ys(P,U?.id),ie=Zs(us(),le);await hs(ie),await Ks(P,ie,U?.id),Ke(new Date().toLocaleString()),Je.current=!1,w.silent||j(`Google Drive synced across devices: ${ie.savedWords.length} words, ${Object.keys(ie.lessonStatuses||{}).length} lesson marks, ${Me(ie.studyTime?.totalSeconds)} total study time.`)}catch(P){/401|invalid|expired/i.test(P?.message||"")&&te(""),w.silent||j(P?.message||"Google Drive sync did not finish.")}finally{Ge(!1)}}b.useEffect(()=>{if(!B||ce||Le||!Je.current||Date.now()-eo.current<2e4)return;const w=window.setTimeout(()=>{!Je.current||ce||Le||(eo.current=Date.now(),Ta(B,{silent:!0}))},3500);return()=>window.clearTimeout(w)},[B,ce,Le,Q,pe,se,$,T,Ce,D,k,W.updatedAt]);function bs(d=""){return e.jsxs("div",{className:`global-search ${d}`,children:[e.jsxs("label",{children:[e.jsx(Ba,{size:14}),e.jsx("input",{value:G,onChange:w=>z(w.target.value),placeholder:"Search everything..."})]}),G.trim().length>=2&&e.jsx("div",{className:"global-search-results",children:uo.length?uo.map((w,A)=>e.jsxs("button",{onClick:()=>{w.type==="memoria"?(i(null),l(null),y(!1),q(!1),f(!0)):w.type==="writing"?(i(null),l(null),y(!1),f(!1),q(!0)):ue(w.chapter),z(""),u(!1)},children:[e.jsx("span",{children:w.title}),e.jsx("em",{children:w.meta}),w.context&&e.jsx("small",{children:w.context})]},`${w.type}-${w.title}-${A}`)):e.jsx("div",{className:"global-search-empty",children:"No matches"})})]})}return e.jsxs("div",{className:`book-root translation-mode-${D} ${k?"boox-mode":""} ${V?"focus-mode":""}`,children:[e.jsx(Qn,{savedWords:Q,onSave:to,onRemove:io}),e.jsx(As,{}),e.jsx("style",{children:Ms}),e.jsxs("div",{className:"mobile-bar",children:[e.jsx("button",{className:"mobile-btn",onClick:()=>u(!0),"aria-label":"Open menu",children:e.jsx(vs,{size:20})}),e.jsx("div",{className:"mobile-title",children:e.jsx("span",{className:"mobile-brand-script",children:"Español"})}),e.jsxs("div",{className:`study-timer ${Le?"running":""}`,title:cs,children:[e.jsx(ba,{size:14}),e.jsx("span",{className:"study-timer-main",children:Me(W.todaySeconds)}),e.jsx("span",{className:"study-timer-sub",children:Me(fe)})]}),bs("header-search"),e.jsxs("button",{className:`mobile-tools-toggle ${v?"active":""}`,onClick:()=>p(d=>!d),"aria-label":v?"Close study tools":"Open study tools",children:[e.jsx(Se,{size:15}),"Tools"]}),e.jsxs("div",{className:`top-tools ${v?"open":""}`,children:[e.jsxs("button",{className:`top-tool-btn ${D==="spanish"?"active":""}`,onClick:Zo,"aria-label":D==="spanish"?"Show English translations":"Hide English translations",title:D==="spanish"?"Mostrar ingles":"Solo espanol",children:[e.jsx(Ve,{size:15}),e.jsx("span",{children:D==="spanish"?"ES":"EN"})]}),e.jsx("button",{className:"top-tool-btn audio-stop",onClick:aa,"aria-label":"Stop all audio",title:"Detener audio",children:e.jsx(Po,{size:15})}),e.jsxs("button",{className:`top-tool-btn boox-toggle ${k?"active":""}`,onClick:es,"aria-label":k?"Turn off Boox e-ink mode":"Turn on Boox e-ink mode",title:k?"Boox mode on":"Boox / e-ink mode",children:[e.jsx(Mo,{size:15}),e.jsx("span",{children:"Ink"})]}),e.jsxs("button",{className:`top-tool-btn focus-toggle ${V?"active":""}`,onClick:()=>ee(d=>!d),"aria-label":V?"Exit focus reading mode":"Enter focus reading mode",title:V?"Salir de lectura":"Modo lectura",children:[e.jsx(ma,{size:15}),e.jsx("span",{children:V?"Exit":"Read"})]}),e.jsxs("div",{className:"font-controls",children:[e.jsx("button",{className:"font-btn",onClick:()=>ao(-.05),"aria-label":"Smaller text",disabled:Ce<=.85,children:e.jsx("span",{className:"font-btn-small",children:"A"})}),e.jsx("button",{className:"font-btn",onClick:()=>ao(.05),"aria-label":"Larger text",disabled:Ce>=1.3,children:e.jsx("span",{className:"font-btn-large",children:"A"})})]})]})]}),C&&e.jsx("div",{className:"sync-modal-overlay",role:"dialog","aria-modal":"true","aria-label":"Device sync",children:e.jsxs("div",{className:"sync-modal",children:[e.jsx("button",{className:"sync-close",onClick:()=>E(!1),"aria-label":"Close sync",children:e.jsx(xe,{size:15})}),e.jsx("div",{className:"sync-kicker",children:"Device Sync"}),e.jsx("h2",{children:"Sync your Spanish book across devices"}),e.jsx("p",{children:"Sign in with Google Drive to keep one private study file across your phone, tablet, Boox, and laptop."}),e.jsxs("div",{className:"sync-stats",children:[e.jsxs("span",{children:[Q.length," Memoria words"]}),e.jsxs("span",{children:[Object.keys(pe||{}).length," Palabras reviews"]}),e.jsxs("span",{children:[Object.keys(se||{}).length," lesson marks"]}),e.jsxs("span",{children:[Me(W.totalSeconds)," total time"]}),e.jsx("span",{children:k?"Boox mode on":"Boox mode off"})]}),e.jsxs("div",{className:`sync-status-pill ${B?"connected":""}`,children:[B?"Google connected - auto-sync on":"Google not connected yet",re&&e.jsxs("small",{children:["Last sync: ",re]})]}),!I.trim()&&e.jsx("button",{className:"sync-advanced-toggle",onClick:()=>J(d=>!d),children:F?"Hide setup":"First-time Google setup"}),(F||I.trim())&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"sync-client-field",children:[e.jsx("span",{children:"Google OAuth Client ID"}),e.jsx("input",{value:I,onChange:d=>L(d.target.value),placeholder:"1234567890-abc.apps.googleusercontent.com",disabled:!1})]}),e.jsx("p",{className:"sync-help",children:"First time only. After it is saved, this screen becomes a normal Google sign-in and sync panel."})]}),e.jsxs("div",{className:"sync-actions",children:[I.trim()&&e.jsx("button",{onClick:gs,children:"Save Client ID"}),e.jsx("button",{onClick:fs,disabled:ce||!I.trim(),children:ce?"Working...":B?"Reconnect Google":"Sign in with Google"}),e.jsx("button",{onClick:()=>Ta(),disabled:ce||!I.trim(),children:ce?"Syncing...":"Sync now"})]}),ia&&e.jsx("div",{className:"sync-message",children:ia})]})}),Ee&&e.jsxs("div",{className:"resume-banner",children:[e.jsxs("div",{className:"resume-banner-text",children:[e.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),e.jsx("span",{className:"resume-banner-title",children:Ee.title})]}),e.jsxs("div",{className:"resume-banner-actions",children:[e.jsxs("button",{className:"resume-btn-primary",onClick:ps,children:["Continuar",e.jsx(Ne,{size:14})]}),e.jsx("button",{className:"resume-btn-dismiss",onClick:ms,"aria-label":"Dismiss",children:e.jsx(xe,{size:14})})]})]}),_&&e.jsxs("div",{className:"update-banner",children:[e.jsxs("div",{children:[e.jsx("span",{className:"resume-banner-label",children:"New version ready"}),e.jsx("span",{className:"resume-banner-title",children:"Refresh to use the latest study tools."})]}),e.jsxs("button",{className:"resume-btn-primary",onClick:Ko,children:["Update",e.jsx(Ne,{size:14})]})]}),e.jsxs("div",{className:"book-shell",children:[e.jsxs("aside",{className:`sidebar ${m?"open":""}`,children:[e.jsxs("div",{className:"sidebar-inner",children:[e.jsx("div",{className:"sidebar-header",children:e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"brand-mark",children:e.jsx(ma,{size:18})}),e.jsxs("div",{className:"brand-text",children:[e.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),e.jsx("div",{className:"brand-title",children:"Español"})]}),e.jsx("button",{className:"sidebar-close",onClick:()=>u(!1),"aria-label":"Close menu",children:e.jsx(xe,{size:18})})]})}),e.jsxs("nav",{className:"section-nav",children:[e.jsx("div",{className:`section-group home-nav-item ${N?"active":""}`,children:e.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{i(null),l(null),y(!0),f(!1),q(!1),u(!1)},children:[e.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:e.jsx(Fa,{size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:"Inicio"}),e.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),e.jsx("div",{className:"section-meta",children:e.jsx("div",{className:"section-count",children:Ea})})]})}),je.map(d=>{const w=R.filter(U=>U.sectionId===d.id),A=ga(d,w),P=d.id===a&&!g&&!N&&!S;return e.jsx("div",{className:`section-group ${P?"active":""}`,children:e.jsxs("button",{className:"section-btn",onClick:()=>xo(d),children:[e.jsx("div",{className:"section-icon-wrap",children:e.jsx(Oa,{id:d.id,size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:d.label}),e.jsx("div",{className:"section-sublabel",children:d.sublabel})]}),e.jsxs("div",{className:"section-meta",children:[e.jsx("div",{className:"section-count",children:A.length}),e.jsx(Ne,{size:16,className:"section-chevron"})]})]})},d.id)}),e.jsx("div",{className:`section-group memoria-nav-item ${g?"active":""}`,children:e.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{i(null),l(null),y(!1),q(!1),f(!0),u(!1)},children:[e.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:e.jsx(We,{size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:"Memoria"}),e.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),e.jsx("div",{className:"section-meta",children:e.jsx("div",{className:"section-count memoria-count",children:Q.length})})]})}),e.jsx("div",{className:`section-group writing-nav-item ${S?"active":""}`,children:e.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{i(null),l(null),y(!1),f(!1),q(!0),u(!1)},children:[e.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:e.jsx(Go,{size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:"Writing"}),e.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),e.jsx("div",{className:"section-meta",children:e.jsx("div",{className:"section-count writing-count",children:$.length})})]})})]}),e.jsxs("div",{className:"sidebar-footer",children:[e.jsx("button",{type:"button",className:"sidebar-sync-btn",onClick:()=>{E(!0),j("")},children:"Sync"}),e.jsx("div",{className:"sig",children:"— para Othman"})]})]}),m&&e.jsx("div",{className:"scrim",onClick:()=>u(!1)})]}),e.jsxs("main",{className:"book-main",children:[e.jsxs("div",{className:`book-page ${N?"home-page":""}`,children:[N?e.jsx(et,{totalLessons:Te.total,visitedCount:Ea,savedWordsCount:Q.length,levelFilter:h,palabrasSummary:ls,lessonSummary:ts,memoriaSummary:is,learnerProfile:Ia,reviewQueue:rs,studyTime:W,writingCount:$.length,sectionProgress:ds,recommendations:mo,onStart:()=>ho&&ue(ho),onOpenMemoria:()=>{i(null),l(null),y(!1),q(!1),f(!0)},onOpenPalabras:()=>go&&ue(go),onOpenVerb:()=>fo&&ue(fo),onOpenReading:()=>bo&&ue(bo),onOpenWriting:()=>{i(null),l(null),y(!1),f(!1),q(!0)},onSelectChapter:ue}):g?e.jsx(Xn,{savedWords:Q,onRemove:io,onClear:as,onUpdateWord:ro}):S?e.jsx(Zn,{savedWords:Q,chapters:R,entries:$,onEntriesChange:os}):t?e.jsx(wn,{section:Sa,lessons:co,visitedSet:ns,lessonStatuses:se,studyTime:W,onSelectChapter:ue,SectionIconComponent:Oa}):Ue?e.jsx(Un,{chapter:Ue,sectionId:a,section:ss,activeNestedTarget:r,onOpenSection:xo,onSaveWord:to,savedWords:Q,onUpdateSavedWord:ro,palabrasProgress:pe,onPalabrasProgressChange:Jo,lessonStatuses:se,onLessonStatusChange:Qo}):e.jsxs("div",{className:"empty",children:[e.jsx(Se,{size:28}),e.jsx("p",{children:"No hay lecciones en este nivel."})]}),!N&&!g&&!S&&!t&&e.jsxs("nav",{className:"chapter-nav",children:[qa?e.jsxs("button",{className:"nav-btn prev",onClick:()=>ue(qa),children:[e.jsx(ys,{size:16}),e.jsxs("div",{children:[e.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),e.jsx("div",{className:"nav-title",children:qa.title})]})]}):e.jsx("div",{}),Ca?e.jsxs("button",{className:"nav-btn next",onClick:()=>ue(Ca),children:[e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),e.jsx("div",{className:"nav-title",children:Ca.title})]}),e.jsx(Ne,{size:16})]}):e.jsx("div",{})]})]}),e.jsx("footer",{className:"level-bar",children:e.jsxs("div",{className:"level-bar-inner",children:[e.jsxs("div",{className:"level-bar-label",children:[e.jsx(We,{size:14})," Nivel"]}),e.jsxs("div",{className:"level-pills",children:[e.jsx("button",{className:`level-pill ${h==="ALL"?"active":""}`,onClick:()=>c("ALL"),children:"Todos"}),kn.map(d=>e.jsx("button",{className:`level-pill ${h===d?"active":""}`,onClick:()=>c(d),children:d},d))]}),e.jsx(Ps,{settings:T,onChange:Xo}),e.jsx("div",{className:"level-bar-counter",children:N?`${Ea} / ${Te.total}`:t?`${co.length} lecciones`:Ie>=0?`${Ie+1} / ${R.length}`:"—"})]})})]})]})]})}function ot(){document.documentElement.style.minHeight="100%",document.documentElement.style.overflowX="hidden",document.documentElement.style.overflowY="auto",document.body.style.minHeight="100%",document.body.style.overflowX="hidden",document.body.style.overflowY="auto"}typeof window<"u"&&!window.storage&&(window.storage={async get(a){const s=window.localStorage.getItem(a);return s===null?null:{value:s}},async set(a,s){window.localStorage.setItem(a,s)},async delete(a){window.localStorage.removeItem(a)}});typeof document<"u"&&ot();Es();xs.createRoot(document.getElementById("root")).render(e.jsx(X.StrictMode,{children:e.jsx(at,{})}));
