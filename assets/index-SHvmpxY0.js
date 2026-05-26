const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sync-panel-CUogrDnW.js","assets/react-iLQ0ojkV.js","assets/icons-CNhzGsg5.js"])))=>i.map(i=>d[i]);
import{r as m,j as e,R as oe,c as ys}from"./react-iLQ0ojkV.js";import{X as Je,G as bt,C as Ge,B as wa,T as ws,a as ao,b as ks,P as xt,Z as ct,c as js,d as vt,D as vn,H as yn,V as pt,S as ze,M as Ns,L as Ta,e as wn,f as Io,g as zs,h as mt,i as Pa,j as Ss,k as Cs,l as Is,m as bo,n as xo,o as To,N as yt,R as wt,p as to}from"./icons-CNhzGsg5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function Es(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const a="/Learn-Spanish/";navigator.serviceWorker.register(`${a}sw.js?v=${encodeURIComponent("2026-05-26T18:25:31.308Z")}`,{scope:a,updateViaCache:"none"}).then(o=>{function n(s){s?.postMessage?.({type:"SKIP_WAITING"}),window.dispatchEvent(new CustomEvent("learn-spanish-update-ready",{detail:{worker:s}}))}o.waiting&&navigator.serviceWorker.controller&&n(o.waiting),o.addEventListener("updatefound",()=>{const s=o.installing;s&&s.addEventListener("statechange",()=>{s.state==="installed"&&navigator.serviceWorker.controller&&n(s)})}),o.update().catch(()=>{})}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.__learnSpanishRefreshing||(window.__learnSpanishRefreshing=!0,window.location.reload())})})}const qs="modulepreload",As=function(a){return"/Learn-Spanish/"+a},Vt={},De=function(t,o,n){let s=Promise.resolve();if(o&&o.length>0){let h=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=i?.nonce||i?.getAttribute("nonce");s=h(o.map(c=>{if(c=As(c),c in Vt)return;Vt[c]=!0;const p=c.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":qs,p||(w.as="script"),w.crossOrigin="",w.href=c,d&&w.setAttribute("nonce",d),document.head.appendChild(w),p)return new Promise((g,j)=>{w.addEventListener("load",g),w.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return s.then(i=>{for(const d of i||[])d.status==="rejected"&&r(d.reason);return t().catch(r)})};function Eo(a,t={}){typeof window>"u"||window.dispatchEvent(new CustomEvent("learn-spanish-message",{detail:{id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,title:t.title||"Notice",message:a,tone:t.tone||"info",timeout:t.timeout||5200}}))}function Ts(){const[a,t]=m.useState([]);return m.useEffect(()=>{function o(n){const s=n.detail||{};s.message&&(t(r=>[s,...r].slice(0,3)),s.timeout!==1/0&&window.setTimeout(()=>{t(r=>r.filter(i=>i.id!==s.id))},s.timeout||5200))}return window.addEventListener("learn-spanish-message",o),()=>window.removeEventListener("learn-spanish-message",o)},[]),a.length?e.jsx("div",{className:"app-message-stack","aria-live":"polite","aria-atomic":"false",children:a.map(o=>e.jsxs("div",{className:`app-message app-message-${o.tone||"info"}`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"app-message-title",children:o.title}),e.jsx("p",{children:o.message})]}),e.jsx("button",{type:"button",className:"app-message-close",onClick:()=>t(n=>n.filter(s=>s.id!==o.id)),"aria-label":"Dismiss message",children:e.jsx(Je,{size:14})})]},o.id))}):null}function Ls({insights:a=[],onAction:t}){return a.length?e.jsxs("section",{className:"teacher-panel","aria-label":"Teacher recommendations",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(bt,{size:18}),"Teacher notes"]}),e.jsx("div",{className:"teacher-card-grid",children:a.map(o=>e.jsxs("button",{className:"teacher-card",onClick:()=>t?.(o.action),children:[e.jsx("span",{className:"teacher-card-title",children:o.title}),e.jsx("span",{className:"teacher-card-detail",children:o.detail}),e.jsxs("span",{className:"teacher-card-action",children:[o.actionLabel||"Open",e.jsx(Ge,{size:14})]})]},o.key))})]}):null}const Ka="study-time-v1",kt=240;function Lo(a=new Date){return a.toISOString().slice(0,10)}function Ms(a){if(!a||typeof a!="object")return null;const t=String(a.id||"").trim();if(!t)return null;const o=Math.max(0,Math.floor(Number(a.seconds)||0));return o?{id:t,chapterId:String(a.chapterId||"unknown"),date:a.date||Lo(new Date(Number(a.startedAt)||Date.now())),seconds:o,startedAt:Number(a.startedAt)||Number(a.updatedAt)||Date.now(),updatedAt:Number(a.updatedAt)||Number(a.startedAt)||Date.now()}:null}function Ps(a={}){return(Array.isArray(a.sessions)?a.sessions:[]).map(Ms).filter(Boolean).sort((t,o)=>(o.updatedAt||0)-(t.updatedAt||0)).slice(0,kt)}function ua(a,t=()=>!0){return a.reduce((o,n)=>o+(t(n)?n.seconds:0),0)}function _s(a){const t={};for(const o of a)t[o.chapterId]=(t[o.chapterId]||0)+o.seconds;return t}function La(a={}){const t=Lo(),o=a.date===t?a.date:t,n=a.date===t?Math.max(0,Number(a.todaySeconds)||0):0,s=Ps(a);return{totalSeconds:Math.max(0,Number(a.totalSeconds)||0),todaySeconds:n,date:o,byChapter:a.byChapter&&typeof a.byChapter=="object"?a.byChapter:{},sessions:s,updatedAt:a.updatedAt||Date.now()}}function kn(a={},t={}){const o=La(a),n=La(t),s=new Map;for(const y of[...n.sessions,...o.sessions]){const k=s.get(y.id);(!k||(y.updatedAt||0)>=(k.updatedAt||0))&&s.set(y.id,y)}const r=[...s.values()].sort((y,k)=>(k.updatedAt||0)-(y.updatedAt||0)).slice(0,kt),i=ua(o.sessions),d=ua(n.sessions),h=ua(r),c=Lo(),p=ua(o.sessions,y=>y.date===c),u=ua(n.sessions,y=>y.date===c),w=ua(r,y=>y.date===c),g=_s(r),j={...g};for(const y of new Set([...Object.keys(n.byChapter||{}),...Object.keys(o.byChapter||{})])){const k=ua(o.sessions,G=>G.chapterId===y),S=ua(n.sessions,G=>G.chapterId===y),L=Math.max(0,(Number(o.byChapter?.[y])||0)-k),_=Math.max(0,(Number(n.byChapter?.[y])||0)-S);j[y]=Math.max(L,_)+(g[y]||0)}const f=Math.max(Math.max(0,o.totalSeconds-i),Math.max(0,n.totalSeconds-d)),N=Math.max(Math.max(0,o.todaySeconds-p),Math.max(0,n.todaySeconds-u));return{totalSeconds:f+h,todaySeconds:N+w,date:c,byChapter:j,sessions:r,updatedAt:Math.max(Number(o.updatedAt)||0,Number(n.updatedAt)||0,Date.now())}}function Ds(a={},t,o,n=Date.now()){const s=La(a),r=Lo(new Date(n)),i=o||`${r}-${t||"lesson"}`,d=[...s.sessions],h=d.findIndex(c=>c.id===i);return h>=0?d[h]={...d[h],chapterId:t,date:r,seconds:d[h].seconds+1,updatedAt:n}:d.unshift({id:i,chapterId:t,date:r,seconds:1,startedAt:n,updatedAt:n}),{...s,totalSeconds:s.totalSeconds+1,todaySeconds:s.date===r?s.todaySeconds+1:1,date:r,byChapter:{...s.byChapter,[t]:(Number(s.byChapter?.[t])||0)+1},sessions:d.sort((c,p)=>(p.updatedAt||0)-(c.updatedAt||0)).slice(0,kt),updatedAt:n}}function ya(a=0){const t=Math.max(0,Math.floor(Number(a)||0)),o=Math.floor(t/3600),n=Math.floor(t%3600/60);return o>0?`${o}h ${String(n).padStart(2,"0")}m`:n>0?`${n}m`:`${t}s`}function vo({icon:a,label:t,value:o,detail:n}){return e.jsxs("div",{className:"teacher-metric",children:[e.jsx(a,{size:16}),e.jsx("span",{children:t}),e.jsx("strong",{children:o}),e.jsx("em",{children:n})]})}function Gs({totalLessons:a,visitedCount:t,savedWordsCount:o,levelFilter:n,palabrasSummary:s,lessonSummary:r,memoriaSummary:i,learnerProfile:d,reviewQueue:h,studyTime:c,dailyPlan:p,dailyProgress:u,teacherInsights:w,writingCount:g,sectionProgress:j,recommendations:f,onStart:N,onStartDaily:y,onDailyStep:k,onOpenMemoria:S,onOpenPalabras:L,onOpenVerb:_,onOpenReading:G,onOpenWriting:R,onSelectChapter:O,onTeacherAction:ae}){const z=a?Math.round(t/a*100):0,F=p.find(A=>!A.complete)||p[0],H=w?.[0]||{title:"Begin today gently",detail:"Open the next lesson, read one page, then save one useful word in Memoria.",action:"daily",actionLabel:"Start"},Q=r?.mastered||0,W=H.action||"daily";return e.jsxs("article",{className:"chapter-body home-dashboard",children:[e.jsxs("header",{className:"home-hero",children:[e.jsxs("div",{className:"home-kicker",children:[e.jsx(bt,{size:18}),"Daily Teacher Mode"]}),e.jsx("h1",{className:"home-title",children:"Lexiora"}),e.jsx("p",{className:"home-subtitle",children:"A calm Spanish study room: one lesson, one review queue, one clear next action."}),e.jsxs("div",{className:"home-actions",children:[e.jsxs("button",{className:"home-primary",onClick:y||N,children:["Start Daily Lesson",e.jsx(Ge,{size:16})]}),e.jsxs("button",{className:"home-secondary",onClick:S,children:[e.jsx(wa,{size:15}),"Memoria"]})]})]}),e.jsxs("section",{className:"daily-teacher-panel","aria-label":"Daily teacher mode",children:[e.jsxs("div",{className:"daily-teacher-main",children:[e.jsxs("span",{className:"home-section-heading",children:[e.jsx(ws,{size:18}),"Teacher focus"]}),e.jsx("h2",{children:H.title}),e.jsx("p",{children:H.detail}),e.jsxs("div",{className:"daily-teacher-actions",children:[e.jsxs("button",{onClick:()=>ae?.(W),children:[H.actionLabel||"Open",e.jsx(Ge,{size:15})]}),F&&e.jsxs("button",{className:"secondary",onClick:()=>k(F.key),children:["Next: ",F.title]})]})]}),e.jsxs("div",{className:"daily-teacher-card",children:[e.jsxs("span",{children:[u.completed," / ",u.total]}),e.jsx("strong",{children:"Today"}),e.jsxs("em",{children:[u.streak," day streak"]})]})]}),e.jsxs("section",{className:"teacher-metrics","aria-label":"Today's study metrics",children:[e.jsx(vo,{icon:ao,label:"Today",value:ya(c.todaySeconds),detail:`${ya(c.totalSeconds)} total`}),e.jsx(vo,{icon:ks,label:"Mastery",value:Q,detail:`${r.understood} understood`}),e.jsx(vo,{icon:wa,label:"Memoria",value:o,detail:`${i.due} due`}),e.jsx(vo,{icon:xt,label:"Writing",value:g,detail:`${d.writing?.needsPractice||0} to rewrite`})]}),e.jsx(Ls,{insights:w,onAction:ae}),e.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Progreso"}),e.jsxs("strong",{children:[z,"%"]}),e.jsxs("span",{children:[t," / ",a," lecciones"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Nivel"}),e.jsx("strong",{children:n==="ALL"?"Todo":n}),e.jsx("span",{children:"Filtro activo"})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Palabras due"}),e.jsx("strong",{children:s.due}),e.jsxs("span",{children:[s.mastered," dominadas"]})]}),e.jsxs("div",{className:"home-stat",children:[e.jsx("span",{className:"home-stat-label",children:"Lecciones"}),e.jsx("strong",{children:r.understood}),e.jsxs("span",{children:[r.read," leidas"]})]})]}),e.jsxs("section",{className:"home-daily",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ct,{size:18}),"Ruta diaria"]}),e.jsx("div",{className:"home-daily-grid",children:p.map(A=>e.jsxs("button",{className:`home-daily-step ${A.complete?"complete":""}`,onClick:()=>k(A.key),children:[e.jsx("span",{children:A.index}),e.jsx("strong",{children:A.title}),e.jsx("em",{children:A.detail}),e.jsx("small",{children:A.complete?"Done":"Open"})]},A.key))})]}),e.jsxs("section",{className:"home-review-queue",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(js,{size:18}),"Cola de repaso"]}),e.jsx("div",{className:"home-review-list",children:h.slice(0,8).map((A,Y)=>e.jsxs("button",{onClick:()=>A.chapter?O(A.chapter):A.type==="writing"?R():S(),children:[e.jsx("span",{className:`review-type ${A.type}`,children:A.type}),e.jsx("strong",{children:A.title}),e.jsx("em",{children:A.detail})]},`${A.type}-${A.title}-${Y}`))}),e.jsxs("div",{className:"home-review-summary",children:[d.vocabulary.due," vocabulary due - ",d.writing.needsPractice," writing rewrites - ",d.chapters.unvisited," lesson groups to open"]})]}),e.jsxs("section",{className:"home-progress-map",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(vt,{size:18}),"Mapa de progreso"]}),e.jsx("div",{className:"home-progress-list",children:j.map(A=>{const Y=A.total?Math.round(A.visited/A.total*100):0;return e.jsxs("div",{className:"home-progress-row",children:[e.jsxs("div",{className:"home-progress-top",children:[e.jsx("span",{children:A.label}),e.jsxs("strong",{children:[A.visited," / ",A.total]})]}),e.jsx("div",{className:"home-progress-track",children:e.jsx("span",{style:{width:`${Y}%`}})})]},A.id)})})]}),e.jsxs("section",{className:"home-path",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ao,{size:18}),"Siguiente lectura"]}),e.jsx("div",{className:"home-recommendations",children:f.map((A,Y)=>e.jsxs("button",{className:"home-rec",onClick:()=>O(A),children:[e.jsx("span",{className:"home-rec-index",children:String(Y+1).padStart(2,"0")}),e.jsxs("span",{className:"home-rec-main",children:[e.jsx("span",{className:"home-rec-title",children:A.title}),e.jsxs("span",{className:"home-rec-meta",children:[A.sectionLabel," - ",A.level]})]}),e.jsx(Ge,{size:16})]},A.id))})]})]})}function Rs({installReady:a,installMessage:t,onInstall:o,onDismiss:n}){return e.jsxs("div",{className:"install-banner",children:[e.jsxs("div",{className:"resume-banner-text",children:[e.jsx("span",{className:"resume-banner-label",children:"Install Lexiora"}),e.jsx("span",{className:"resume-banner-title",children:a?"Add the app to this device":"Add to Home Screen if your browser hides the icon"}),t&&e.jsx("span",{className:"install-banner-message",children:t})]}),e.jsxs("div",{className:"resume-banner-actions",children:[e.jsxs("button",{className:"resume-btn-primary install-btn-primary",onClick:o,children:[e.jsx(vn,{size:15}),"Install"]}),e.jsx("button",{className:"resume-btn-dismiss",onClick:n,"aria-label":"Dismiss install banner",children:e.jsx(Je,{size:15})})]})]})}let xa=null,Ht=!1,Ma={rate:.85,voiceURI:""};function jn(){return Math.max(.65,Math.min(1.25,Number(Ma.rate)||.85))}function Xa(a={}){Ma={...Ma,...a,rate:Math.max(.65,Math.min(1.25,Number(a.rate??Ma.rate)||.85))},xa=null}function Nn(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function Wt(){return Nn().filter(a=>a.lang&&a.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(a.name||""))}function qa(){if(typeof window>"u"||!window.speechSynthesis)return null;if(xa)return xa;const a=Nn();if(a.length===0)return null;if(Ma.voiceURI){const n=a.find(s=>s.voiceURI===Ma.voiceURI);if(n)return xa=n,n}const t=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const n of t){const s=a.find(r=>r.lang&&r.lang.toLowerCase().startsWith(n.toLowerCase()));if(s)return xa=s,s}const o=a.find(n=>/spanish|español/i.test(n.name||""));return o?(xa=o,o):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{xa=null,qa()}),qa(),setTimeout(qa,250),setTimeout(qa,1e3));function jt(){if(!Ht&&!(typeof window>"u"||!window.speechSynthesis))try{const a=new SpeechSynthesisUtterance(" ");a.volume=0,a.rate=1,window.speechSynthesis.speak(a),Ht=!0}catch{}}function oo(){try{window.speechSynthesis?.cancel(),window.dispatchEvent?.(new CustomEvent("learn-spanish-audio-stop"))}catch{}}function zn(a,t={}){if(typeof window>"u"||!window.speechSynthesis||!a)return t.onerror&&t.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(a),n=qa();n&&(o.voice=n),o.lang=n?.lang||"es-ES",o.rate=t.rate??jn(),o.pitch=t.pitch??1,o.volume=1,t.onend&&(o.onend=t.onend),t.onerror&&(o.onerror=i=>{console.warn("[speech] error:",i?.error||"unknown",{text:a.slice(0,30),voice:n?.name}),t.onerror(i)}),t.onboundary&&(o.onboundary=t.onboundary),t.onstart&&(o.onstart=t.onstart),window.speechSynthesis.speak(o);const s=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(s);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),r=o.onend;return o.onend=i=>{clearInterval(s),r&&r(i)},o}catch(o){return console.warn("[speech] threw:",o),t.onerror&&t.onerror({error:o.message}),null}}const Yt=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function Sn(a){const t=[],o=String(a||"");let n;for(Yt.lastIndex=0;(n=Yt.exec(o))!==null;)t.push({text:n[0],isWord:!!n[1],charStart:n.index});return t}function de({text:a}){const t=m.useMemo(()=>Sn(a),[a]);return e.jsx(e.Fragment,{children:t.map((o,n)=>o.isWord?e.jsx("span",{className:"dict-word-token","data-dict-word":o.text,children:o.text},n):e.jsx("span",{children:o.text},n))})}function no({text:a,paragraphClass:t="reading-paragraph",firstParagraph:o=!1}){const n=m.useMemo(()=>Sn(a),[a]),s=m.useMemo(()=>{const f=[];let N="",y=[],k=-1;function S(){y.length>0&&f.push({spokenText:N.trim(),words:y}),N="",y=[],k=-1}for(let L=0;L<n.length;L++){const _=n[L];if(!_.isWord&&y.length===0&&/^\s+$/.test(_.text))continue;const G=N.length;N+=_.text,_.isWord?(y.push({tokenIdx:L,text:_.text,charStart:G,charEnd:G+_.text.length,commaAfter:!1}),k=y.length-1):(/,/.test(_.text)&&k>=0&&(y[k].commaAfter=!0),/[.!?;:]/.test(_.text)&&S())}return S(),f},[n]),[r,i]=m.useState(-1),[d,h]=m.useState(!1),c=oe.useRef([]),p=oe.useRef([]),u=oe.useRef(!1),w=oe.useRef(110);function g(){p.current.forEach(clearTimeout),p.current=[]}function j(f){if(f.stopPropagation(),typeof window>"u"||!window.speechSynthesis){Eo("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(jt(),d){u.current=!0,oo(),g(),h(!1),i(-1);return}if(s.length===0)return;oo(),g(),u.current=!1,h(!0),w.current=110;let N=0;function y(){if(u.current)return;if(N>=s.length){h(!1),i(-1);return}const k=s[N];if(!k||k.words.length===0){N++,y();return}const S=new SpeechSynthesisUtterance(k.spokenText),L=qa();L&&(S.voice=L),S.lang=L?.lang||"es-ES",S.rate=jn(),S.pitch=1;let _=!1,G=!1,R=!1,O=!1,ae=0;const z=30,F=200;function H(V){const x=Math.max(0,Number(V)||0);let P=k.words[0];for(const $ of k.words)if($.charStart<=x+1)P=$;else break;return P}function Q(){if(O||R||u.current)return;O=!0;let V=0;for(let x=0;x<k.words.length;x++){const P=k.words[x],U=setTimeout(()=>{!u.current&&!R&&i(P.tokenIdx)},V);p.current.push(U),V+=P.text.length*w.current+z,P.commaAfter&&(V+=F)}}S.onstart=()=>{if(_)return;_=!0,ae=performance.now();const V=setTimeout(Q,350);p.current.push(V)},S.onboundary=V=>{if(u.current||typeof V.charIndex!="number")return;const x=H(V.charIndex);x&&(R=!0,i(x.tokenIdx))};const W=setTimeout(()=>{!_&&!u.current&&(_=!0,ae=performance.now(),Q())},500);p.current.push(W);function A(){if(G||(G=!0,u.current))return;if(ae>0){const x=performance.now()-ae,P=k.words.reduce((J,Le)=>J+Le.text.length,0),$=k.words.filter(J=>J.commaAfter).length,U=k.words.length*z+$*F,K=Math.max(100,x-U);if(P>0){const J=K/P;J>=40&&J<=300&&(w.current=J*.6+w.current*.4)}}g(),N++;const V=setTimeout(y,30);p.current.push(V)}S.onend=A,S.onerror=A;const Y=Math.max(5e3,k.spokenText.length*220),te=setTimeout(A,Y);p.current.push(te),window.speechSynthesis.speak(S)}y()}return m.useEffect(()=>{function f(){u.current=!0,g(),h(!1),i(-1)}return window.addEventListener?.("learn-spanish-audio-stop",f),()=>{u.current=!0,g(),window.removeEventListener?.("learn-spanish-audio-stop",f),window.speechSynthesis?.cancel()}},[]),m.useEffect(()=>{if(r<0)return;const f=c.current[r];if(!f||typeof f.getBoundingClientRect!="function")return;const N=f.getBoundingClientRect(),y=window.innerHeight||document.documentElement.clientHeight;(N.bottom>y-100||N.top<80)&&f.scrollIntoView({behavior:"smooth",block:"center"})},[r]),typeof window<"u"&&!window.speechSynthesis?e.jsxs("p",{className:t,children:[e.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:f=>{f.stopPropagation(),Eo("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"})},"aria-label":"Audio not supported",title:"Audio no disponible",children:e.jsx(pt,{size:12})}),e.jsx(de,{text:a})]}):e.jsxs("p",{className:`${t} karaoke-paragraph ${d?"is-playing":""}`,children:[e.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${d?"playing":""}`,onClick:j,onPointerDown:f=>f.stopPropagation(),"aria-label":d?"Stop":"Play audio with highlighting",title:d?"Detener":"Escuchar con resaltado",children:e.jsx(pt,{size:12})}),n.map((f,N)=>{if(!f.isWord)return e.jsx("span",{className:"kt-space",children:f.text},N);const y=N===r;return e.jsx("span",{ref:k=>c.current[N]=k,className:`kt-word ${y?"kt-active":""}`,"data-dict-word":f.text,children:f.text},N)})]})}function re({text:a,size:t="sm",className:o=""}){const[n,s]=m.useState(!1);m.useEffect(()=>{function i(){s(!1)}return window.addEventListener?.("learn-spanish-audio-stop",i),()=>window.removeEventListener?.("learn-spanish-audio-stop",i)},[]);function r(i){if(i.stopPropagation(),typeof window>"u"||!window.speechSynthesis){Eo("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(jt(),n){oo(),s(!1);return}oo(),s(!0),zn(a,{onend:()=>s(!1),onerror:d=>{s(!1),d?.error&&d.error!=="canceled"&&d.error!=="interrupted"&&Eo(`Error al leer: ${d.error}. Asegurate de tener una voz en espanol instalada.`,{title:"Audio necesita atencion",tone:"warning"})}})}return e.jsx("button",{className:`speak-btn speak-btn-${t} ${n?"playing":""} ${o}`,onClick:r,onPointerDown:i=>i.stopPropagation(),"aria-label":n?"Stop":"Play audio",title:n?"Detener":"Escuchar",children:e.jsx(pt,{size:t==="sm"?12:14})})}function Us({settings:a,onChange:t}){const[o,n]=m.useState(()=>Wt());m.useEffect(()=>{Xa(a)},[a]),m.useEffect(()=>{function r(){n(Wt())}if(r(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",r);const i=setTimeout(r,600);return()=>{clearTimeout(i),window.speechSynthesis.removeEventListener?.("voiceschanged",r)}}},[]);function s(r){const i={...a,...r};Xa(i),t?.(i)}return e.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[e.jsxs("div",{className:"audio-settings-label",children:[e.jsx(yn,{size:14}),"Audio"]}),e.jsxs("select",{className:"audio-rate-select",value:String(a.rate),onChange:r=>s({rate:Number(r.target.value)}),"aria-label":"Audio speed",children:[e.jsx("option",{value:"0.7",children:"0.70x"}),e.jsx("option",{value:"0.85",children:"0.85x"}),e.jsx("option",{value:"1",children:"1.00x"}),e.jsx("option",{value:"1.15",children:"1.15x"})]}),e.jsxs("select",{className:"audio-voice-select",value:a.voiceURI||"",onChange:r=>s({voiceURI:r.target.value}),"aria-label":"Spanish voice",children:[e.jsx("option",{value:"",children:"Voz espanola"}),o.map(r=>e.jsxs("option",{value:r.voiceURI,children:[r.name," (",r.lang,")"]},r.voiceURI))]})]})}function Ye({es:a,en:t,esClass:o="vu-ex-es",enClass:n="vu-ex-en"}){const s=(a||"").length,r=(t||"").length;return s<=18&&r<=18&&s+r<=36?e.jsxs("div",{className:`${o} inline-pair`,children:[e.jsx(re,{text:a}),e.jsx(de,{text:a})," ",e.jsxs("span",{className:`${n} inline-en`,children:["(",t,")"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:o,children:[e.jsx(re,{text:a}),e.jsx(de,{text:a})]}),e.jsx("div",{className:n,children:t})]})}const $s=`
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

.home-dashboard > section,
.section-overview,
.lesson-section,
.lazy-loading-block,
.memoria-card,
.section-lesson-card {
  content-visibility: auto;
  contain-intrinsic-size: 1px 380px;
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
.book-root.focus-mode .install-banner,
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
  position: relative;
  z-index: 20;
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

.install-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 18px;
  background: var(--paper);
  color: var(--ink);
  border-bottom: 1px solid var(--rule);
  border-left: 4px solid var(--green);
  position: relative;
  z-index: 20;
  animation: resume-slide-down 280ms cubic-bezier(0.4, 0.2, 0.2, 1);
}
.install-banner .resume-banner-label {
  color: var(--green);
}
.install-banner .resume-banner-title {
  color: var(--ink);
  font-style: normal;
}
.install-banner .resume-btn-dismiss {
  color: var(--ink-mute);
  background: var(--paper-light);
  border: 1px solid var(--rule);
}
.install-banner .resume-btn-dismiss:hover {
  color: var(--ink);
  background: var(--green-tint);
}
.install-btn-primary {
  background: var(--green);
  color: #ffffff;
}
.install-btn-primary:hover {
  background: #24472f;
}
.install-banner-message {
  display: block;
  color: var(--ink-mute);
  font-size: 13px;
  line-height: 1.35;
  margin-top: 3px;
}
.top-tool-btn.install-toggle.ready {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-tint);
}

@media (max-width: 700px) {
  .resume-banner,
  .install-banner {
    align-items: flex-start;
    padding: 12px 14px;
  }
  .install-banner {
    flex-direction: column;
  }
  .install-banner .resume-banner-actions {
    width: 100%;
    justify-content: space-between;
  }
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
.sync-stats strong {
  margin-right: 4px;
  color: var(--ink);
}
.sync-status-pill {
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 5px 8px;
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
.sync-status-pill.needs-setup {
  border-color: var(--sienna);
  color: var(--sienna);
}
.sync-status-pill small {
  grid-column: 1 / -1;
  color: var(--ink-mute);
  font-size: 12px;
}
.sync-actions {
  justify-content: flex-start;
  flex-wrap: wrap;
}
.sync-actions button.sync-primary-action {
  border-color: var(--green);
  background: var(--green);
  color: #fff;
}
.sync-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.sync-actions button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.sync-setup-note {
  margin-top: 14px;
  padding: 11px 12px;
  border: 1px solid var(--rule);
  border-left: 3px solid var(--sienna);
  border-radius: 8px;
  background: var(--paper-light);
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.45;
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
.sync-client-field input,
.sync-client-field textarea {
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
.sync-client-field textarea {
  min-height: 110px;
  resize: vertical;
}
.sync-client-field input:focus,
.sync-client-field textarea:focus {
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
.sync-divider {
  margin: 18px 0 8px;
  height: 1px;
  background: var(--rule);
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
.home-daily-focus {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  margin: 22px 0 26px;
  padding: 18px;
  border: 1px solid var(--green);
  border-radius: 8px;
  background: linear-gradient(180deg, #ffffff 0%, var(--green-tint) 100%);
}
.home-daily-focus-main {
  min-width: 0;
}
.home-daily-focus .home-section-heading {
  margin: 0 0 8px;
}
.home-daily-focus h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 34px;
  line-height: 1.05;
  color: var(--ink);
}
.home-daily-focus p {
  margin: 7px 0 0;
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.45;
}
.home-daily-focus-side {
  display: grid;
  gap: 8px;
  min-width: 142px;
}
.home-daily-focus-side span {
  border: 1px solid rgba(47, 93, 58, 0.24);
  border-radius: 999px;
  background: #ffffff;
  color: var(--green);
  padding: 7px 11px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
}
.teacher-panel {
  margin: 0 0 28px;
}
.daily-teacher-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 180px;
  gap: 18px;
  align-items: stretch;
  margin: 22px 0 18px;
  padding: 18px;
  border: 1px solid var(--green);
  border-radius: 8px;
  background: linear-gradient(180deg, #ffffff 0%, var(--green-tint) 100%);
}
.daily-teacher-main {
  min-width: 0;
}
.daily-teacher-main .home-section-heading {
  margin: 0 0 8px;
}
.daily-teacher-main h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 36px;
  line-height: 1.05;
  color: var(--ink);
}
.daily-teacher-main p {
  margin: 9px 0 0;
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.5;
}
.daily-teacher-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.daily-teacher-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid var(--green);
  border-radius: 6px;
  background: var(--green);
  color: #ffffff;
  min-height: 38px;
  padding: 7px 13px;
  font-family: 'Literata', Georgia, serif;
  font-weight: 800;
  cursor: pointer;
  touch-action: manipulation;
}
.daily-teacher-actions button.secondary {
  background: var(--paper);
  color: var(--green);
}
.daily-teacher-card {
  border: 1px solid rgba(47, 93, 58, 0.28);
  border-radius: 8px;
  background: var(--paper);
  display: grid;
  place-items: center;
  align-content: center;
  gap: 3px;
  min-height: 148px;
  text-align: center;
}
.daily-teacher-card span {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 38px;
  line-height: 1;
  color: var(--green);
  font-weight: 800;
}
.daily-teacher-card strong {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
}
.daily-teacher-card em {
  color: var(--ink-mute);
  font-size: 13px;
}
.teacher-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 0 0 24px;
}
.teacher-metric {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper-light);
  padding: 13px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2px 8px;
  align-items: center;
}
.teacher-metric svg {
  color: var(--green);
}
.teacher-metric span {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 800;
}
.teacher-metric strong {
  grid-column: 1 / -1;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 27px;
  line-height: 1.05;
  color: var(--ink);
}
.teacher-metric em {
  grid-column: 1 / -1;
  color: var(--ink-mute);
  font-size: 12px;
}
.teacher-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.teacher-card {
  border: 1px solid var(--rule);
  border-left: 3px solid var(--green);
  border-radius: 8px;
  background: var(--paper-light);
  color: var(--ink);
  padding: 15px;
  text-align: left;
  display: grid;
  gap: 8px;
  min-height: 148px;
  cursor: pointer;
  touch-action: manipulation;
}
.teacher-card:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.teacher-card-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 23px;
  font-weight: 800;
  line-height: 1.05;
}
.teacher-card-detail {
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.45;
}
.teacher-card-action {
  align-self: end;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.lazy-loading-block {
  border: 1px dashed var(--rule);
  border-radius: 8px;
  padding: 18px;
  background: var(--paper-light);
}
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
.home-daily-grid button.complete {
  border-color: rgba(47, 93, 58, 0.42);
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
.home-daily-grid small {
  margin-top: auto;
  align-self: flex-start;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 8px;
  color: var(--ink-mute);
  font-size: 11px;
  font-style: normal;
  line-height: 1.4;
}
.home-daily-grid button.complete small {
  color: var(--green);
  border-color: rgba(47, 93, 58, 0.35);
  background: #ffffff;
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
.section-lesson-card.status-practicing {
  border-top-color: var(--sienna);
}
.section-lesson-card.status-practicing .section-lesson-status {
  color: var(--sienna-deep);
}
.section-lesson-card.status-understood {
  border-top-color: var(--green);
}
.section-lesson-card.status-understood .section-lesson-status,
.section-lesson-card.status-strong .section-lesson-status,
.section-lesson-card.status-mastered .section-lesson-status {
  color: var(--green);
}
.section-lesson-card.status-strong,
.section-lesson-card.status-mastered {
  border-top-color: var(--green);
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
.lesson-status-btn.mastery:hover {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
}
.lesson-status-btn.mastery.active {
  color: #ffffff;
  border-color: var(--ink);
  background: var(--ink);
}
@media (max-width: 700px) {
  .lesson-status-control {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: stretch;
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
.expressions-lines {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}
.expression-line-item + .expression-line-item {
  border-top: 1px solid var(--rule-soft);
}
.expression-line-main {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 14px;
}
.expression-line-text {
  min-width: 0;
  flex: 1;
}
.expression-line-head {
  margin: 0;
  font-size: 20px;
  line-height: 1.45;
  color: var(--ink);
}
.expression-line-head strong {
  color: var(--ink);
  font-weight: 700;
}
.expression-line-head em {
  color: var(--ink-mute);
  font-style: normal;
}
.expression-line-head .speak-btn {
  margin-right: 7px;
}
.expression-line-eq {
  display: inline-block;
  margin: 0 8px;
  color: var(--ink-mute);
}
.expression-line-example {
  margin: 4px 0 0;
  font-family: 'Literata', Georgia, serif;
  font-size: 18px;
  line-height: 1.55;
  color: var(--ink);
  font-style: normal;
  text-transform: none;
}
.expression-line-example-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(83, 68, 160, 0.35);
  background: rgba(83, 68, 160, 0.12);
  font-family: 'Literata', Georgia, serif;
  text-transform: none;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: #4c3f95;
  font-weight: 700;
}
.expression-line-example .speak-btn {
  margin: 0 6px 0 4px;
}
.expression-line-example-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.expression-line-example-en {
  margin: 0;
  font-family: 'Literata', Georgia, serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--ink-soft);
  font-style: italic;
  padding-left: 2px;
}
.search-hit {
  background: #fff176;
  color: inherit;
  border-radius: 3px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  padding: 0 0.08em;
}
.expression-line-head .search-hit,
.expression-line-example .search-hit,
.expression-line-example-en .search-hit,
.global-search-results .search-hit {
  box-shadow: 0 0 0 1px rgba(154, 106, 0, 0.14);
}
.expressions-pager-bottom {
  margin-top: 12px;
  justify-content: center;
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
.render-form {
  display: inline;
  white-space: nowrap;
  letter-spacing: 0;
}
.render-form .form-part {
  display: inline-block;
  line-height: inherit;
}
.render-form .form-part + .ending,
.render-form .form-part + .irreg,
.render-form .irreg + .form-root {
  margin-left: 0.08em;
}
.render-form .irreg {
  color: var(--red);
  font-weight: 700;
}
.render-form .ending {
  color: var(--blue);
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
.tense-mobile-stack {
  display: none;
}
.tense-reader-table {
  display: none;
}

@media (max-width: 700px) {
  .tense-group-table th,
  .tense-group-table td { padding: 9px 12px; }
  .tense-group-table th:first-child,
  .tense-group-table td:first-child { padding-right: 14px; }
  .tense-group-table tbody th.tg-pronoun { font-size: 17px; padding-right: 14px; }
  .tense-group-table tbody td.tg-form { font-size: 21px; }
  .tense-group-table thead th { font-size: 14px; letter-spacing: 0.14em; }
  .verb-table-block .tense-group-table {
    display: none;
  }
  .tense-mobile-stack {
    display: grid;
    gap: 14px;
    margin: 12px 0 22px;
  }
  .tense-mobile-card {
    border: 1px solid var(--rule);
    border-radius: 10px;
    background: var(--paper);
    overflow: hidden;
  }
  .tense-mobile-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 13px 14px;
    border-bottom: 1px solid var(--ink);
    background: var(--paper-light);
  }
  .tense-mobile-head h3 {
    margin: 0;
    color: var(--sienna-deep);
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 1.15;
    text-transform: uppercase;
  }
  .tense-mobile-rows {
    display: grid;
  }
  .tense-mobile-row {
    display: grid;
    grid-template-columns: 86px minmax(0, 1fr);
    align-items: center;
    gap: 10px;
    min-height: 58px;
    padding: 9px 13px;
    border-top: 1px dotted var(--rule-soft);
  }
  .tense-mobile-row:first-child {
    border-top: none;
  }
  .tense-mobile-pronoun {
    color: var(--ink-mute);
    font-family: 'Literata', Georgia, serif;
    font-size: 18px;
    font-style: italic;
    line-height: 1.2;
    white-space: nowrap;
  }
  .tense-mobile-form {
    min-width: 0;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--ink);
    font-family: 'Literata', Georgia, serif;
    font-size: clamp(20px, 6vw, 26px);
    font-weight: 700;
    line-height: 1.18;
    overflow-wrap: normal;
    word-break: keep-all;
  }
  .tense-mobile-form .render-form {
    flex: 0 1 auto;
    min-width: 0;
  }
  .tense-mobile-form .conjugation-speak {
    flex: 0 0 auto;
    margin-left: 2px;
  }
}

/* 8-10 inch tablets/e-readers often report widths around 600-700px.
   Keep grouped tense tables there so Present/Pret/Imperfect show side-by-side. */
@media (min-width: 560px) and (max-width: 700px) {
  .verb-table-block .tense-group-table {
    display: table !important;
  }
  .verb-table-block .tense-mobile-stack {
    display: none !important;
  }
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
.gl-status-pill.practicing,
.story-status-pill.practicing {
  color: var(--sienna-deep);
  border-color: rgba(177, 80, 42, 0.28);
  background: var(--sienna-tint);
}
.gl-status-pill.strong,
.story-status-pill.strong,
.gl-status-pill.mastered,
.story-status-pill.mastered {
  color: var(--green);
  border-color: rgba(47, 93, 58, 0.32);
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
.lesson-table-shell {
  margin: 16px 0;
}
.lesson-table-shell .lesson-table-wrap {
  margin: 0;
}
.lesson-table-cards {
  display: none;
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
.lesson-table-card {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  overflow: hidden;
}
.lesson-table-card-title {
  padding: 11px 13px;
  border-bottom: 1px solid var(--ink);
  color: var(--ink-mute);
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  font-style: italic;
  line-height: 1.25;
}
.lesson-table-card-grid {
  display: grid;
  grid-template-columns: 1fr;
}
.lesson-table-card-item {
  display: grid;
  grid-template-columns: minmax(94px, 0.72fr) minmax(0, 1fr);
  gap: 12px;
  align-items: baseline;
  padding: 10px 13px;
  border-top: 1px dotted var(--rule-soft);
}
.lesson-table-card-item:first-child {
  border-top: none;
}
.lesson-table-card-label {
  color: var(--sienna-deep);
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.2;
  text-transform: uppercase;
}
.lesson-table-card-value {
  min-width: 0;
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  font-size: 21px;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: break-word;
}
.lesson-table-card-value .render-form {
  white-space: normal;
  overflow-wrap: anywhere;
}
.lesson-table-card-value .render-form .form-part {
  display: inline;
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

.tense-atlas-block {
  display: grid;
  gap: 28px;
}
.tense-atlas-hero {
  border: 1px solid var(--ink);
  border-left: 5px solid var(--green);
  border-radius: 8px;
  background: #fff;
  padding: 28px;
}
.tense-atlas-kicker {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  margin-bottom: 10px;
}
.tense-atlas-hero h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 40px;
  line-height: 1.08;
  margin: 0 0 12px;
}
.tense-atlas-hero p {
  max-width: 760px;
  margin: 0 0 18px;
  font-size: 20px;
  line-height: 1.55;
  color: var(--ink);
}
.tense-atlas-guide {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.tense-atlas-guide span {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper-light);
  padding: 12px 13px;
  font-size: 15px;
  line-height: 1.45;
  font-weight: 700;
}
.tense-atlas-index {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 14px 0 4px;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.tense-atlas-index a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 8px 12px;
  background: #fff;
  color: var(--ink);
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
  line-height: 1.1;
}
.tense-atlas-index a:hover {
  border-color: var(--green);
}
.tense-atlas-index span {
  color: var(--sienna-deep);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
}
.tense-era-section {
  --tone: var(--green);
  display: grid;
  gap: 18px;
}
.tense-era-section.past,
.tense-atlas-card.past { --tone: #315f7f; }
.tense-era-section.present,
.tense-atlas-card.present { --tone: #2f6b42; }
.tense-era-section.future,
.tense-atlas-card.future { --tone: #8a4a32; }
.tense-era-header {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  border-top: 2px solid var(--tone);
  padding-top: 18px;
}
.tense-era-number {
  width: 46px;
  height: 46px;
  border: 1px solid var(--tone);
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--tone);
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.12em;
}
.tense-era-header span,
.tense-atlas-comparison-copy span {
  color: var(--sienna-deep);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.tense-era-header h3,
.tense-atlas-comparison h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  line-height: 1.08;
  margin: 5px 0 8px;
}
.tense-era-header p,
.tense-atlas-comparison-copy p {
  max-width: 780px;
  margin: 0;
  color: var(--ink);
  font-size: 18px;
  line-height: 1.55;
}
.tense-atlas-cards {
  display: grid;
  gap: 18px;
}
.tense-atlas-card {
  border: 1px solid var(--rule);
  border-top: 5px solid var(--tone);
  border-radius: 8px;
  background: #fff;
  padding: 20px;
  scroll-margin-top: 140px;
}
.tense-atlas-card-head {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  margin-bottom: 12px;
}
.tense-atlas-card-number {
  width: 38px;
  height: 38px;
  border: 1px solid var(--tone);
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--tone);
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 900;
}
.tense-atlas-card-head span {
  display: block;
  color: var(--sienna-deep);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.tense-atlas-card-head h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  line-height: 1.08;
  margin: 0;
  overflow-wrap: anywhere;
}
.tense-atlas-card-head p {
  margin: 5px 0 0;
  color: var(--ink-mute);
  font-size: 16px;
  font-style: italic;
  line-height: 1.35;
}
.tense-atlas-formula {
  display: inline-flex;
  max-width: 100%;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 7px 12px;
  background: var(--paper-light);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
.tense-atlas-use {
  margin: 14px 0;
  font-size: 18px;
  line-height: 1.58;
  color: var(--ink);
}
.tense-atlas-example {
  border-left: 3px solid var(--tone);
  padding-left: 13px;
  margin: 14px 0;
}
.tense-atlas-signals {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  gap: 12px;
  align-items: baseline;
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 11px 13px;
  background: var(--paper-light);
  margin: 14px 0;
}
.tense-atlas-signals strong {
  color: var(--sienna-deep);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.tense-atlas-signals span {
  color: var(--ink);
  font-size: 15px;
  line-height: 1.45;
}
.tense-atlas-notes {
  margin: 14px 0;
  padding-left: 19px;
  display: grid;
  gap: 7px;
  color: var(--ink);
  font-size: 16px;
  line-height: 1.5;
}
.tense-atlas-card .lesson-table-shell {
  margin-top: 16px;
  margin-bottom: 0;
}
.tense-atlas-table tbody td {
  font-size: 17px;
  line-height: 1.28;
}
.tense-atlas-comparison {
  display: grid;
  gap: 16px;
  border: 1px solid var(--ink);
  border-left: 5px solid var(--ink);
  border-radius: 8px;
  background: #fff;
  padding: 24px;
}
.tense-atlas-comparison .lesson-table-shell {
  margin-bottom: 0;
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
  .expression-line-main {
    flex-direction: column;
    gap: 8px;
  }
  .expression-line-head {
    font-size: 18px;
  }
  .expression-line-example {
    font-size: 18px;
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
  position: relative;
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
.speak-btn::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 999px;
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
  .speak-btn-sm { width: 30px; height: 30px; }
  .speak-btn-sm::after { inset: -7px; }
  .conjugation-speak { width: 24px; height: 24px; }
  .conjugation-speak::after { inset: -8px; }
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
  position: relative;
  z-index: 21;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: var(--paper);
  border: 1px solid var(--green);
  border-radius: 8px;
  box-shadow: var(--shadow);
  width: min(720px, calc(100% - 32px));
  margin: 12px auto 0;
  padding: 10px 12px;
}
.update-banner > div {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.update-banner .resume-banner-label {
  color: var(--green);
}
.update-banner .resume-banner-title {
  color: var(--ink);
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  overflow-wrap: break-word;
}

@media (max-width: 700px) {
  .update-banner {
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.book-root.boox-mode {
  color-scheme: light;
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
.book-root.boox-mode .lazy-loading-block,
.book-root.boox-mode .daily-teacher-panel,
.book-root.boox-mode .daily-teacher-card,
.book-root.boox-mode .teacher-metric,
.book-root.boox-mode .teacher-panel,
.book-root.boox-mode .teacher-card,
.book-root.boox-mode .section-card,
.book-root.boox-mode .lesson-section,
.book-root.boox-mode .tense-atlas-hero,
.book-root.boox-mode .tense-atlas-card,
.book-root.boox-mode .tense-atlas-comparison,
.book-root.boox-mode .memoria-card,
.book-root.boox-mode .memoria-face,
.book-root.boox-mode .sync-modal,
.book-root.boox-mode .sync-status-pill,
.book-root.boox-mode .sync-setup-note,
.book-root.boox-mode .sync-message,
.book-root.boox-mode .dict-popup,
.book-root.boox-mode .update-banner,
.book-root.boox-mode .install-banner,
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
.book-root.boox-mode .lazy-loading-block,
.book-root.boox-mode .teacher-card,
.book-root.boox-mode .section-overview-stats span,
.book-root.boox-mode .section-lesson-card,
.book-root.boox-mode .lesson-table,
.book-root.boox-mode .lesson-table th,
.book-root.boox-mode .lesson-table td,
.book-root.boox-mode .lesson-table-card,
.book-root.boox-mode .tense-atlas-guide span,
.book-root.boox-mode .tense-atlas-index a,
.book-root.boox-mode .tense-atlas-formula,
.book-root.boox-mode .tense-atlas-signals,
.book-root.boox-mode .tense-era-number,
.book-root.boox-mode .tense-atlas-card-number,
.book-root.boox-mode .indicative-card,
.book-root.boox-mode .subj-tense-card,
.book-root.boox-mode .contextual-quiz-card,
.book-root.boox-mode .trigger-card,
.book-root.boox-mode .subj-tip-card,
.book-root.boox-mode .lesson-mastery-panel,
.book-root.boox-mode .memoria-focus-board button,
.book-root.boox-mode .sync-status-pill,
.book-root.boox-mode .sync-setup-note,
.book-root.boox-mode .participle-workshop-grid article {
  border-color: #000000 !important;
}
.book-root.boox-mode .top-tool-btn.active,
.book-root.boox-mode .level-pill.active,
.book-root.boox-mode .chapter-btn.active,
.book-root.boox-mode .section-group.active > .section-btn,
.book-root.boox-mode .top-tool-btn.install-toggle.ready,
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
.book-root.boox-mode .tense-atlas-use,
.book-root.boox-mode .tense-atlas-notes,
.book-root.boox-mode .gl-text,
.book-root.boox-mode .bio-paragraph {
  max-width: 70ch;
  line-height: 1.85 !important;
}
.book-root.boox-mode .teacher-card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.book-root.boox-mode .teacher-card-title,
.book-root.boox-mode .teacher-card-detail,
.book-root.boox-mode .teacher-card-action {
  color: #000000 !important;
}
.book-root.boox-mode .tense-atlas-card,
.book-root.boox-mode .tense-era-header,
.book-root.boox-mode .tense-atlas-example,
.book-root.boox-mode .tense-atlas-comparison {
  border-color: #000000 !important;
}
.book-root.boox-mode .tense-era-header *,
.book-root.boox-mode .tense-atlas-comparison * {
  color: #000000 !important;
}
.book-root.boox-mode .tense-atlas-card {
  border: 1px solid #d8cbb8 !important;
  border-top: 1px solid #d8cbb8 !important;
  border-radius: 5px !important;
  padding: 18px 20px !important;
}
.book-root.boox-mode .lesson-table-shell {
  margin: 18px 0 0;
  padding: 15px 20px 18px;
  border: 1px solid #d8cbb8;
  border-radius: 5px;
  background: #ffffff !important;
}
.book-root.boox-mode .lesson-table-shell .lesson-table-wrap {
  display: block !important;
  margin: 0;
  overflow: visible;
}
.book-root.boox-mode .lesson-table-cards {
  display: none !important;
}
.book-root.boox-mode .lesson-table {
  width: 100%;
  min-width: 0 !important;
  table-layout: fixed;
  border: 0 !important;
  border-radius: 0;
  border-collapse: collapse;
  background: #ffffff !important;
}
.book-root.boox-mode .lesson-table th,
.book-root.boox-mode .lesson-table td {
  padding: 8px 14px !important;
  border: 0 !important;
  border-bottom: 1px solid #d7cab8 !important;
  line-height: 1.18 !important;
  background: #ffffff !important;
}
.book-root.boox-mode .lesson-table thead th {
  border-bottom: 1.5px solid #000000 !important;
  color: #7b3b17 !important;
  font-size: 12px !important;
  letter-spacing: 0.22em !important;
  padding-top: 4px !important;
  padding-bottom: 13px !important;
  white-space: nowrap;
  text-transform: uppercase;
}
.book-root.boox-mode .lesson-table tbody td {
  color: #000000 !important;
  font-size: 19px !important;
  font-weight: 800 !important;
  vertical-align: middle !important;
}
.book-root.boox-mode .lesson-table th:first-child,
.book-root.boox-mode .lesson-table td:first-child {
  width: 24%;
  color: #57524a !important;
  text-align: left !important;
  font-style: italic;
  font-weight: 400 !important;
  padding-left: 14px !important;
}
.book-root.boox-mode .lesson-table th:not(:first-child),
.book-root.boox-mode .lesson-table td:not(:first-child) {
  text-align: center !important;
}
.book-root.boox-mode .lesson-table tr:last-child td {
  border-bottom: 0 !important;
}
.book-root.boox-mode .lesson-table .render-form {
  white-space: nowrap;
  color: #000000 !important;
}
.book-root.boox-mode .lesson-table .form-part,
.book-root.boox-mode .lesson-table .ending,
.book-root.boox-mode .lesson-table .irreg,
.book-root.boox-mode .tense-group-table .form-part,
.book-root.boox-mode .tense-group-table .ending,
.book-root.boox-mode .tense-group-table .irreg {
  color: #000000 !important;
}
.book-root.boox-mode .lesson-table .render-form .form-part + .ending,
.book-root.boox-mode .lesson-table .render-form .form-part + .irreg,
.book-root.boox-mode .lesson-table .render-form .irreg + .form-root {
  margin-left: 0;
}
.book-root.boox-mode .verb-table-block {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
.book-root.boox-mode .verb-table-block .tense-group-table {
  display: table !important;
  width: 100%;
  min-width: 0 !important;
  table-layout: fixed;
  border-collapse: collapse;
  border: 0 !important;
  border-radius: 0;
  background: #ffffff !important;
  overflow: hidden;
}
.book-root.boox-mode .verb-table-block .tense-stack {
  display: flex !important;
  flex-direction: column;
  gap: 34px;
  margin-top: 18px;
}
.book-root.boox-mode .verb-table-block .tense-reader-table {
  display: none !important;
}
.book-root.boox-mode .tense-mobile-stack {
  display: none !important;
}
.book-root.boox-mode .tense-reader-table th,
.book-root.boox-mode .tense-reader-table td,
.book-root.boox-mode .tense-group-table th,
.book-root.boox-mode .tense-group-table td {
  border-left: 0 !important;
  border-bottom: 1px solid #d7cab8 !important;
  padding: 13px 16px !important;
  line-height: 1.18 !important;
  background: #ffffff !important;
}
.book-root.boox-mode .tense-reader-table thead th,
.book-root.boox-mode .tense-group-table thead th {
  border-bottom: 1.5px solid #000000 !important;
  color: #7b3b17 !important;
  font-size: 12px !important;
  letter-spacing: 0.24em !important;
  text-align: center !important;
  white-space: nowrap;
  text-transform: uppercase;
  padding-top: 2px !important;
  padding-bottom: 14px !important;
}
.book-root.boox-mode .tense-reader-table thead tr,
.book-root.boox-mode .tense-group-table thead tr {
  border-bottom: 1.5px solid #000000 !important;
}
.book-root.boox-mode .tense-reader-table tbody th.tg-pronoun,
.book-root.boox-mode .tense-group-table tbody th.tg-pronoun {
  width: 17%;
  color: #57524a !important;
  font-size: 18px !important;
  font-style: italic;
  font-weight: 400 !important;
  text-align: left !important;
  white-space: nowrap;
}
.book-root.boox-mode .tense-reader-table tbody td.tg-form,
.book-root.boox-mode .tense-group-table tbody td.tg-form {
  color: #000000 !important;
  font-size: 23px !important;
  font-weight: 800 !important;
  text-align: left !important;
  white-space: nowrap;
}
.book-root.boox-mode .tense-reader-table tr:last-child th,
.book-root.boox-mode .tense-reader-table tr:last-child td,
.book-root.boox-mode .tense-group-table tr:last-child th,
.book-root.boox-mode .tense-group-table tr:last-child td {
  border-bottom: 0 !important;
}
.book-root.boox-mode .tg-th-inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.book-root.boox-mode .tense-reader-table .form-part,
.book-root.boox-mode .tense-reader-table .ending,
.book-root.boox-mode .tense-reader-table .irreg {
  color: #000000 !important;
}
.book-root.boox-mode .tense-reader-table .render-form .form-part + .ending,
.book-root.boox-mode .tense-reader-table .render-form .form-part + .irreg,
.book-root.boox-mode .tense-reader-table .render-form .irreg + .form-root {
  margin-left: 0;
}
.book-root.boox-mode .verb-table-block .tense-group-count-3 thead th:first-child,
.book-root.boox-mode .verb-table-block .tense-group-count-3 tbody th.tg-pronoun {
  width: 25%;
}
.book-root.boox-mode .verb-table-block .tense-group-count-2 thead th:first-child,
.book-root.boox-mode .verb-table-block .tense-group-count-2 tbody th.tg-pronoun {
  width: 32%;
}
.book-root.boox-mode .verb-table-block .tense-group-table th:not(:first-child),
.book-root.boox-mode .verb-table-block .tense-group-table td:not(:first-child) {
  border-left: 1px solid #d8cbb8 !important;
}
.book-root.boox-mode .verb-table-block .tense-group-table tbody tr:last-child th,
.book-root.boox-mode .verb-table-block .tense-group-table tbody tr:last-child td {
  border-bottom: 0 !important;
}
.book-root.boox-mode .verb-table-block .tense-group-table .irreg {
  color: #b03a32 !important;
}
.book-root.boox-mode .verb-table-block .tense-group-table .ending {
  color: #000000 !important;
}
.book-root.boox-mode .verb-table-block .tense-group-table .render-form .form-part + .ending,
.book-root.boox-mode .verb-table-block .tense-group-table .render-form .form-part + .irreg,
.book-root.boox-mode .verb-table-block .tense-group-table .render-form .irreg + .form-root {
  margin-left: 0 !important;
}
.book-root.boox-mode .verb-table-block .tense-group-table .speak-btn {
  display: inline-flex !important;
  width: 22px;
  height: 22px;
  margin-left: 6px;
  opacity: 0.45;
  color: #777777 !important;
  border-color: #d8cbb8 !important;
  background: #ffffff !important;
}
.book-root.boox-mode .mobile-bar {
  border-bottom: 2px solid #000000 !important;
}
.book-root.boox-mode .mobile-title {
  flex: 0 0 auto;
  min-width: 96px;
}
.book-root.boox-mode .mobile-brand-script {
  color: #000000 !important;
}
.book-root.boox-mode .home-daily-focus {
  background: #ffffff !important;
  border-color: #000000 !important;
}
.book-root.boox-mode .daily-teacher-panel,
.book-root.boox-mode .daily-teacher-card,
.book-root.boox-mode .teacher-metric,
.book-root.boox-mode .memoria-focus-board button,
.book-root.boox-mode .lesson-mastery-panel {
  background: #ffffff !important;
  border-color: #000000 !important;
}
.book-root.boox-mode .daily-teacher-actions button,
.book-root.boox-mode .lesson-mastery-actions button.active {
  background: #000000 !important;
  border-color: #000000 !important;
  color: #ffffff !important;
}
.book-root.boox-mode .daily-teacher-actions button.secondary {
  background: #ffffff !important;
  color: #000000 !important;
}
.book-root.boox-mode .home-daily-focus-side span,
.book-root.boox-mode .home-daily-grid small {
  color: #000000 !important;
  border-color: #000000 !important;
  background: #ffffff !important;
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
.lesson-mastery-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  margin-top: 14px;
  padding: 12px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
}
.lesson-mastery-panel span {
  display: block;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 800;
}
.lesson-mastery-panel strong {
  display: block;
  margin-top: 3px;
  font-size: 15px;
  line-height: 1.35;
  color: var(--ink);
}
.lesson-mastery-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: flex-end;
}
.lesson-mastery-actions button {
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper);
  color: var(--ink);
  padding: 6px 10px;
  font-family: 'Literata', Georgia, serif;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  touch-action: manipulation;
}
.lesson-mastery-actions button.practice.active {
  color: var(--sienna-deep);
  border-color: var(--sienna);
  background: var(--sienna-tint);
}
.lesson-mastery-actions button.strong.active {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
}
.lesson-mastery-actions button.mastered.active {
  color: #ffffff;
  border-color: var(--ink);
  background: var(--ink);
}

.practice-hub-block {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper-light);
  padding: 18px;
}
.practice-hub-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.practice-hub-toolbar {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 10px;
  align-items: end;
}
.practice-level-grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}
.practice-level-grid.compact {
  margin-top: 12px;
}
.practice-level-card {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  padding: 10px 12px;
  text-align: left;
  display: grid;
  gap: 4px;
  cursor: pointer;
  touch-action: manipulation;
}
.practice-level-card .practice-level-tag {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.practice-level-card strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  line-height: 1;
}
.practice-level-card span:last-child {
  font-size: 12px;
  color: var(--ink-mute);
}
.practice-level-card.active {
  border-color: var(--green);
  background: var(--green-tint);
}
.practice-level-card.empty {
  opacity: 0.65;
}
.practice-hub-field {
  display: grid;
  gap: 6px;
}
.practice-hub-field span {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.practice-hub-field select {
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink);
  padding: 8px 10px;
  font-family: 'Literata', Georgia, serif;
}
.practice-hub-modes {
  grid-column: 1 / -1;
  display: inline-flex;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px;
  background: var(--paper);
  justify-self: start;
}
.practice-hub-modes button {
  border: none;
  background: transparent;
  color: var(--ink-mute);
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'Literata', Georgia, serif;
  font-weight: 700;
}
.practice-hub-modes button.active {
  background: var(--green);
  color: #fff;
}
.practice-hub-modes button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.practice-hub-source-line {
  margin-top: 12px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.practice-hub-source-line strong {
  font-size: 18px;
  font-family: 'Cormorant Garamond', serif;
  color: var(--ink);
}
.practice-hub-source-line span {
  font-size: 13px;
  color: var(--ink-mute);
}
.practice-hub-pool {
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 8px;
  background: var(--paper);
  font-size: 11px !important;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.practice-typing-shell {
  margin-top: 14px;
  border: 1px solid var(--rule-soft);
  border-radius: 8px;
  background: var(--paper);
  padding: 14px;
}
.practice-listening-es {
  margin: 0 0 10px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: var(--green);
}
.practice-hub-footer {
  margin-top: 16px;
  display: grid;
  gap: 12px;
}
.practice-hub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.practice-hub-links a {
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 6px 12px;
  text-decoration: none;
  color: var(--green);
  background: var(--paper);
  font-size: 13px;
  font-weight: 700;
}
.practice-hub-verb {
  display: grid;
  gap: 10px;
  border-top: 1px dashed var(--rule);
  padding-top: 12px;
}
.practice-hub-verb label {
  display: grid;
  gap: 6px;
  color: var(--ink-soft);
  font-size: 14px;
}
.practice-hub-verb select {
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink);
  padding: 8px 10px;
  font-family: 'Literata', Georgia, serif;
}
.practice-contextual {
  margin-top: 20px;
  border-top: 1px dashed var(--rule);
  padding-top: 16px;
}
.practice-contextual-toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.practice-contextual-note {
  color: var(--ink-mute);
  font-size: 13px;
}
@media (max-width: 740px) {
  .practice-level-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .practice-hub-toolbar {
    grid-template-columns: 1fr;
  }
  .practice-hub-modes {
    width: 100%;
    justify-content: space-between;
  }
  .practice-hub-modes button {
    flex: 1;
  }
}
.book-root.boox-mode .practice-hub-block,
.book-root.boox-mode .practice-typing-shell,
.book-root.boox-mode .practice-contextual {
  border-color: #000000 !important;
  background: #ffffff !important;
}
.book-root.boox-mode .practice-level-card {
  border-color: #000000 !important;
  background: #ffffff !important;
  color: #000000 !important;
}
.book-root.boox-mode .practice-level-card.active {
  background: #f5f5f5 !important;
}
.book-root.boox-mode .practice-hub-links a {
  color: #000000 !important;
  border-color: #000000 !important;
  background: #ffffff !important;
}
.book-root.boox-mode .practice-hub-pool {
  color: #000000 !important;
  border-color: #000000 !important;
  background: #ffffff !important;
}
.book-root.boox-mode .practice-hub-modes button.active {
  background: #000000 !important;
  color: #ffffff !important;
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
.memoria-focus-board {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  margin: 0 0 14px;
}
.memoria-focus-board button {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  padding: 10px;
  text-align: left;
  display: grid;
  gap: 4px;
  min-height: 72px;
  cursor: pointer;
  touch-action: manipulation;
}
.memoria-focus-board button:hover,
.memoria-focus-board button.active {
  border-color: var(--green);
  background: var(--green-tint);
}
.memoria-focus-board strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px;
  line-height: 1.05;
}
.memoria-focus-board span {
  color: var(--ink-mute);
  font-size: 12px;
  line-height: 1.25;
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
    grid-template-columns: 44px auto auto minmax(220px, 1fr) auto;
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
    min-width: 96px;
  }
  .header-search {
    max-width: none;
    margin: 0;
  }
  .mobile-tools-toggle {
    display: inline-flex !important;
    min-width: 82px;
  }
  .top-tools {
    grid-column: 1 / -1;
    display: none;
    width: 100%;
    grid-template-columns: repeat(5, minmax(0, 1fr));
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
    justify-content: space-between;
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
  .home-daily-focus {
    grid-template-columns: 1fr;
    gap: 13px;
    padding: 15px;
    margin: 18px 0 22px;
    background: var(--paper);
  }
  .daily-teacher-panel {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 15px;
    margin: 18px 0 16px;
    background: var(--paper);
  }
  .daily-teacher-main h2 {
    font-size: 30px;
  }
  .daily-teacher-actions {
    display: grid;
    grid-template-columns: 1fr;
  }
  .daily-teacher-card {
    min-height: 104px;
  }
  .teacher-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .home-daily-focus h2 {
    font-size: 29px;
  }
  .home-daily-focus-side {
    grid-template-columns: 1fr 1fr;
    min-width: 0;
  }
  .home-primary,
  .home-secondary {
    width: 100%;
    min-height: 46px;
    padding: 9px 10px;
  }
  .home-stats,
  .home-daily-grid,
  .teacher-card-grid,
  .memoria-focus-board,
  .section-lesson-grid,
  .writing-feedback-grid {
    grid-template-columns: 1fr;
  }
  .home-stat,
  .home-daily-grid button,
  .teacher-card,
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
  .lesson-table-shell .lesson-table-wrap {
    display: none;
  }
  .lesson-table-cards {
    display: grid;
    gap: 10px;
    margin: 14px 0 18px;
  }
  .lesson-table-card {
    border-radius: 10px;
  }
  .lesson-table-card-title {
    font-size: 16px;
    padding: 10px 12px;
  }
  .lesson-table-card-item {
    grid-template-columns: minmax(76px, 0.56fr) minmax(0, 1fr);
    gap: 10px;
    padding: 10px 12px;
  }
  .lesson-table-card-label {
    font-size: 11px;
    letter-spacing: 0.1em;
  }
  .lesson-table-card-value {
    font-size: clamp(18px, 5.6vw, 22px);
    overflow-wrap: anywhere;
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
  .tense-atlas-hero h2,
  .tense-era-header h3,
  .tense-atlas-card-head h4,
  .tense-atlas-comparison h3,
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
  .tense-atlas-hero p,
  .tense-atlas-guide span,
  .tense-era-header p,
  .tense-atlas-use,
  .tense-atlas-signals span,
  .tense-atlas-notes,
  .tense-atlas-comparison-copy p,
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
  .tense-atlas-hero,
  .tense-atlas-card,
  .tense-atlas-comparison,
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
  .tense-atlas-hero {
    padding: 20px;
  }
  .tense-atlas-hero h2 {
    font-size: 32px;
  }
  .tense-atlas-guide,
  .tense-era-header,
  .tense-atlas-card-head,
  .tense-atlas-signals {
    grid-template-columns: 1fr !important;
  }
  .tense-atlas-index {
    display: grid;
    grid-template-columns: 1fr;
  }
  .tense-atlas-index a {
    border-radius: 8px;
    align-items: flex-start;
  }
  .tense-atlas-card {
    padding: 16px;
    scroll-margin-top: 180px;
  }
  .tense-atlas-card-head h4 {
    font-size: 26px;
  }
  .tense-atlas-formula {
    border-radius: 8px;
    white-space: normal;
  }
  .tense-atlas-signals {
    gap: 5px;
  }
  .tense-atlas-card .lesson-table-card-value {
    font-size: clamp(17px, 5vw, 20px);
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
  .home-daily-focus-side {
    grid-template-columns: 1fr;
  }
  .lesson-table-card-item {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .lesson-table-card-label {
    letter-spacing: 0.08em;
  }
}

/* 10-inch readers/tablets: keep conjugation tables as elegant print tables.
   This catches the BOOX Tab Ultra C Pro even when Ink mode is not enabled. */
@media (min-width: 560px) and (max-width: 1180px) and (min-height: 850px) {
  .tense-atlas-card {
    border: 1px solid #d8cbb8 !important;
    border-top: 1px solid #d8cbb8 !important;
    border-radius: 5px;
    padding: 18px 20px;
    background: #ffffff;
    box-shadow: none;
  }

  .tense-atlas-card .lesson-table-shell {
    margin: 18px 0 0;
    padding: 15px 20px 18px;
    border: 1px solid #d8cbb8;
    border-radius: 5px;
    background: #ffffff;
  }

  .tense-atlas-card .lesson-table-shell .lesson-table-wrap {
    display: block !important;
    margin: 0;
    overflow: visible;
  }

  .tense-atlas-card .lesson-table-cards {
    display: none !important;
  }

  .tense-atlas-card .lesson-table {
    width: 100%;
    min-width: 0 !important;
    table-layout: fixed;
    border: 0;
    border-collapse: collapse;
    background: #ffffff;
  }

  .tense-atlas-card .lesson-table th,
  .tense-atlas-card .lesson-table td {
    padding: 8px 14px !important;
    border: 0 !important;
    border-bottom: 1px solid #d7cab8 !important;
    line-height: 1.18 !important;
    background: #ffffff;
  }

  .tense-atlas-card .lesson-table thead th {
    border-bottom: 1.5px solid #111111 !important;
    color: #7b3b17 !important;
    font-size: 12px !important;
    letter-spacing: 0.22em !important;
    padding-top: 4px !important;
    padding-bottom: 13px !important;
    text-align: center !important;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .tense-atlas-card .lesson-table thead th:first-child,
  .tense-atlas-card .lesson-table tbody td:first-child {
    width: 24%;
    text-align: left !important;
  }

  .tense-atlas-card .lesson-table tbody td {
    color: #000000;
    font-size: 19px !important;
    font-weight: 800 !important;
    text-align: center !important;
    vertical-align: middle !important;
  }

  .tense-atlas-card .lesson-table tbody td:first-child {
    color: #57524a;
    font-size: 18px !important;
    font-style: italic;
    font-weight: 400 !important;
  }

  .tense-atlas-card .lesson-table tr:last-child td {
    border-bottom: 0 !important;
  }

  .tense-atlas-card .lesson-table .render-form,
  .tense-atlas-card .lesson-table .form-part,
  .tense-atlas-card .lesson-table .ending,
  .tense-atlas-card .lesson-table .irreg {
    color: #000000 !important;
    white-space: nowrap;
  }

  .tense-atlas-card .lesson-table .render-form .form-part + .ending,
  .tense-atlas-card .lesson-table .render-form .form-part + .irreg,
  .tense-atlas-card .lesson-table .render-form .irreg + .form-root {
    margin-left: 0;
  }

  .verb-table-block .tense-group-table {
    display: table !important;
    width: 100%;
    min-width: 0 !important;
    table-layout: fixed;
    border-collapse: collapse;
    border: 0 !important;
    border-radius: 0;
    background: #ffffff;
    overflow: hidden;
  }

  .verb-table-block .tense-stack {
    display: flex !important;
    flex-direction: column;
    gap: 34px;
    max-width: 680px;
    margin: 18px auto 0;
  }

  .verb-table-block .tense-reader-table {
    display: none !important;
  }

  .verb-table-block .tense-mobile-stack {
    display: none !important;
  }

  .tense-reader-table th,
  .tense-reader-table td,
  .tense-group-table th,
  .tense-group-table td {
    border-left: 0 !important;
    border-bottom: 1px solid #d7cab8 !important;
    padding: 13px 16px !important;
    line-height: 1.18 !important;
    background: #ffffff;
  }

  .tense-reader-table thead th,
  .tense-group-table thead th {
    border-bottom: 1.5px solid #111111 !important;
    color: #7b3b17 !important;
    font-size: 12px !important;
    letter-spacing: 0.24em !important;
    text-align: center !important;
    text-transform: uppercase;
    white-space: nowrap;
    padding-top: 2px !important;
    padding-bottom: 14px !important;
  }

  .tense-reader-table thead tr,
  .tense-group-table thead tr {
    border-bottom: 1.5px solid #111111 !important;
  }

  .tense-reader-table tbody th.tg-pronoun,
  .tense-group-table tbody th.tg-pronoun {
    width: 17%;
    color: #57524a;
    font-size: 18px !important;
    font-style: italic;
    font-weight: 400 !important;
    text-align: left !important;
    white-space: nowrap;
  }

  .tense-reader-table tbody td.tg-form,
  .tense-group-table tbody td.tg-form {
    color: #000000;
    font-size: 23px !important;
    font-weight: 800 !important;
    text-align: left !important;
    white-space: nowrap;
  }

  .tense-reader-table .form-part,
  .tense-reader-table .ending,
  .tense-reader-table .irreg,
  .tense-group-table .form-part,
  .tense-group-table .ending,
  .tense-group-table .irreg {
    color: #000000 !important;
  }

  .tense-reader-table tr:last-child th,
  .tense-reader-table tr:last-child td,
  .tense-group-table tr:last-child th,
  .tense-group-table tr:last-child td {
    border-bottom: 0 !important;
  }

  .tense-reader-table .render-form .form-part + .ending,
  .tense-reader-table .render-form .form-part + .irreg,
  .tense-reader-table .render-form .irreg + .form-root {
    margin-left: 0;
  }

  .tg-th-inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

  .verb-table-block .tense-group-count-3 thead th:first-child,
  .verb-table-block .tense-group-count-3 tbody th.tg-pronoun {
    width: 25%;
  }
  .verb-table-block .tense-group-count-2 thead th:first-child,
  .verb-table-block .tense-group-count-2 tbody th.tg-pronoun {
    width: 32%;
  }
  .verb-table-block .tense-group-table th:not(:first-child),
  .verb-table-block .tense-group-table td:not(:first-child) {
    border-left: 1px solid #d8cbb8 !important;
  }
  .verb-table-block .tense-group-table .irreg {
    color: #b03a32 !important;
  }
  .verb-table-block .tense-group-table .ending {
    color: #000000 !important;
  }
  .verb-table-block .tense-group-table .render-form .form-part + .ending,
  .verb-table-block .tense-group-table .render-form .form-part + .irreg,
  .verb-table-block .tense-group-table .render-form .irreg + .form-root {
    margin-left: 0 !important;
  }
  .verb-table-block .tense-group-table .speak-btn {
    display: inline-flex !important;
    width: 22px;
    height: 22px;
    margin-left: 6px;
    opacity: 0.45;
    color: #777777 !important;
    border-color: #d8cbb8 !important;
    background: #ffffff !important;
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
`,Os={soy:["ser"],eres:["ser"],es:["ser"],somos:["ser"],son:["ser"],fui:["ser","ir"],fuiste:["ser","ir"],fue:["ser","ir"],fuimos:["ser","ir"],fueron:["ser","ir"],era:["ser"],eras:["ser"],eramos:["ser"],eran:["ser"],estoy:["estar"],estas:["estar"],esta:["estar"],estamos:["estar"],estan:["estar"],estuve:["estar"],estuvo:["estar"],estuvieron:["estar"],tengo:["tener"],tienes:["tener"],tiene:["tener"],tenemos:["tener"],tienen:["tener"],tuve:["tener"],tuvo:["tener"],tuvieron:["tener"],voy:["ir"],vas:["ir"],va:["ir"],vamos:["ir"],van:["ir"],iba:["ir"],ibas:["ir"],iban:["ir"],puedo:["poder"],puedes:["poder"],puede:["poder"],podemos:["poder"],pueden:["poder"],pude:["poder"],pudo:["poder"],pudieron:["poder"],quiero:["querer"],quieres:["querer"],quiere:["querer"],queremos:["querer"],quieren:["querer"],quise:["querer"],quiso:["querer"],hago:["hacer"],haces:["hacer"],hace:["hacer"],hacemos:["hacer"],hacen:["hacer"],hice:["hacer"],hizo:["hacer"],hicieron:["hacer"],digo:["decir"],dices:["decir"],dice:["decir"],decimos:["decir"],dicen:["decir"],dije:["decir"],dijo:["decir"],dijeron:["decir"],veo:["ver"],ves:["ver"],ve:["ver"],vemos:["ver"],ven:["ver"],vi:["ver"],vio:["ver"],vieron:["ver"],vengo:["venir"],vienes:["venir"],viene:["venir"],vienen:["venir"],vine:["venir"],vino:["venir"],vinieron:["venir"],pongo:["poner"],pones:["poner"],pone:["poner"],ponen:["poner"],puse:["poner"],puso:["poner"],pusieron:["poner"],salgo:["salir"],sales:["salir"],sale:["salir"],salen:["salir"],se:["saber","ser"],sabe:["saber"],saben:["saber"],supe:["saber"],supo:["saber"],dijeron:["decir"],doy:["dar"],das:["dar"],da:["dar"],dan:["dar"],di:["dar","decir"],dio:["dar"],dieron:["dar"]},Bs=new Set(["si","sí","tu","tú","el","él","mi","mí","te","té","se","sé","de","dé","mas","más","esta","está"]),Kt={si:{main:"if",pos:"conjunction",source:"Local dictionary",stored:!0},sí:{main:"yes",pos:"affirmation",source:"Local dictionary",stored:!0},tu:{main:"your",pos:"possessive adjective",source:"Local dictionary",stored:!0},tú:{main:"you",pos:"subject pronoun",source:"Local dictionary",stored:!0},el:{main:"the",pos:"article",source:"Local dictionary",stored:!0},él:{main:"he",pos:"subject pronoun",source:"Local dictionary",stored:!0},mi:{main:"my",pos:"possessive adjective",source:"Local dictionary",stored:!0},mí:{main:"me",pos:"prepositional pronoun",source:"Local dictionary",stored:!0},te:{main:"you / to you",pos:"object pronoun",source:"Local dictionary",stored:!0},té:{main:"tea",pos:"noun",source:"Local dictionary",stored:!0},se:{main:"himself / herself / themselves",pos:"reflexive pronoun",source:"Local dictionary",stored:!0},sé:{main:"I know",pos:"verb form of saber",source:"Local dictionary",stored:!0},de:{main:"of / from",pos:"preposition",source:"Local dictionary",stored:!0},dé:{main:"give",pos:"subjunctive/command form of dar",source:"Local dictionary",stored:!0},mas:{main:"but",pos:"formal conjunction",source:"Local dictionary",stored:!0},más:{main:"more",pos:"adverb",source:"Local dictionary",stored:!0},esta:{main:"this",pos:"demonstrative adjective",source:"Local dictionary",stored:!0},está:{main:"is",pos:"verb form of estar",source:"Local dictionary",stored:!0}},Cn="lexiora-dictionary-cache-v1",Fs=500;function In(){try{return typeof window<"u"&&!!window.localStorage}catch{return!1}}function En(){if(!In())return{};try{const a=window.localStorage.getItem(Cn);return a?JSON.parse(a)||{}:{}}catch{return{}}}function Vs(a){if(In())try{const t=Object.entries(a||{}).sort((o,n)=>(n[1]?.cachedAt||0)-(o[1]?.cachedAt||0)).slice(0,Fs);window.localStorage.setItem(Cn,JSON.stringify(Object.fromEntries(t)))}catch{}}function Hs(a){const t=Te(a);if(!t)return null;const o=En()[t];return o?.main?{...o,source:o.source||"Dictionary cache",cached:!0}:null}function Jt(a,t){const o=Te(a);if(!o||!t?.main||t.stored)return;const n=En();n[o]={main:t.main,extras:t.extras||[],pos:t.pos||"",meanings:t.meanings||[],examples:t.examples||[],source:t.source||"Dictionary",isDefinition:!!t.isDefinition,matchedWord:t.matchedWord||a,cachedAt:Date.now()},Vs(n)}function Nt(a){return String(a||"").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã¼/g,"ü").replace(/Â¡/g,"¡").replace(/Â¿/g,"¿").trim().replace(/^[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+|[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+$/gu,"").trim().toLowerCase()}function qo(a){return Te(a).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Te(a){return Nt(a).replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function Ws(a,t,o,n){if(!t.endsWith(o)||t.length<=o.length+1)return;const s=t.slice(0,-o.length);n.forEach(r=>a.add(`${s}${r}`))}function Mo(a){const t=Te(a),o=qo(a),n=Bs.has(t),s=new Set(n?[t]:[t,o]);if(!o)return[];if(n)return[...s].filter(Boolean);for(const r of Os[o]||[])s.add(r);return o.endsWith("ces")&&o.length>5&&s.add(`${o.slice(0,-3)}z`),o.endsWith("es")&&o.length>4&&s.add(o.slice(0,-2)),o.endsWith("s")&&o.length>3&&s.add(o.slice(0,-1)),o.endsWith("as")&&o.length>4&&(s.add(o.slice(0,-1)),s.add(`${o.slice(0,-2)}o`)),o.endsWith("os")&&o.length>4&&s.add(o.slice(0,-1)),o.endsWith("a")&&o.length>3&&s.add(`${o.slice(0,-1)}o`),[["amos",["ar"]],["ando",["ar"]],["ado",["ar"]],["aste",["ar"]],["aron",["ar"]],["aba",["ar"]],["abas",["ar"]],["abamos",["ar"]],["aban",["ar"]],["arian",["ar"]],["aria",["ar"]],["are",["ar"]],["aras",["ar"]],["ara",["ar"]],["as",["ar"]],["an",["ar"]],["a",["ar"]],["e",["ar"]],["o",["ar"]],["emos",["er"]],["iendo",["er","ir"]],["ido",["er","ir"]],["iste",["er","ir"]],["ieron",["er","ir"]],["ia",["er","ir"]],["ias",["er","ir"]],["iamos",["er","ir"]],["ian",["er","ir"]],["eria",["er"]],["irian",["ir"]],["iria",["ir"]],["ere",["er"]],["ire",["ir"]],["es",["er","ir"]],["en",["er","ir"]],["e",["er","ir"]],["imos",["ir"]],["io",["er","ir"]],["i",["er","ir"]],["o",["er","ir"]]].forEach(([r,i])=>Ws(s,o,r,i)),[...s].filter(Boolean)}function Qt(a){return a.topicTerm||a.spanish}function Ys(a){return a.topicEnglish||a.english}function Xt(a,t=[],o=[]){const n=Te(a),s=new Set(Mo(a)),r=t.find(i=>Te(i.word)===n)||t.find(i=>s.has(qo(i.word)));if(r)return{main:r.translation||"Saved in Memoria",extras:r.extras||[],pos:r.pos||"Memoria",source:"Memoria",stored:!0,matchedWord:r.word};for(const i of o||[])for(const d of i.entries||[]){const h=[d.spanish,d.topicTerm,Qt(d)];if(h.some(c=>Te(c)===n)||h.some(c=>s.has(qo(c))))return{main:Ys(d),extras:d.topicEnglish&&d.topicEnglish!==d.english?[d.english].filter(Boolean):[],pos:i.title||d.sourceGroupTitle||"Palabras",source:"Palabras",stored:!0,matchedWord:Qt(d)}}return null}async function qn(a){const t=[],o=Nt(a),n=Te(o);if(Kt[n])return{...Kt[n],matchedWord:n};const s=Hs(n);if(s)return s;const r=[...new Set([o,...Mo(o)])].filter(Boolean).slice(0,4),i=p=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(p):void 0,d=(p,u=o)=>(p&&(Jt(u,p),p.matchedWord&&p.matchedWord!==u&&Jt(p.matchedWord,p)),p);async function h(p){const u=encodeURIComponent(p);try{const w=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${u}&src=es&dst=en`,{signal:i(3500)});if(w.ok){const g=await w.json();if(Array.isArray(g)&&g.length>0){const j=g[0],f=j?.translations?.[0]?.text?.trim();if(f){const N=(j.translations||[]).slice(1,5).map(k=>k.text?.trim()).filter(Boolean),y=[];for(const k of j.translations||[]){for(const S of k.examples||[])S.src&&S.dst&&y.length<2&&y.push({es:S.src,en:S.dst});if(y.length>=2)break}return d({main:f,extras:N,pos:j.pos||j.translations?.[0]?.pos||"",examples:y,source:"Linguee",matchedWord:p},p)}}}else t.push(`Linguee ${p}: HTTP ${w.status}`)}catch(w){t.push(`Linguee ${p}: ${w.message}`)}try{const w=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${u}&pretty=true`,{signal:i(3500)});if(w.ok){const j=(await w.json())?.tuc||[],f=j.map(y=>y?.phrase?.text?.trim()).filter(Boolean),N=j.flatMap(y=>(y?.meanings||[]).map(k=>k?.text?.trim())).filter(Boolean);if(f.length>0){const y=f[0],k=f.slice(1,5).filter(S=>S.toLowerCase()!==y.toLowerCase());return d({main:y,extras:k,pos:"",meanings:N.slice(0,3),source:"Glosbe",matchedWord:p},p)}}else t.push(`Glosbe ${p}: HTTP ${w.status}`)}catch(w){t.push(`Glosbe ${p}: ${w.message}`)}try{const w=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${u}`,{signal:i(3500)});if(w.ok){const g=await w.json();if(Array.isArray(g)&&g.length>0){const f=g[0]?.meanings?.[0],N=f?.definitions?.[0]?.definition?.trim();if(N)return d({main:N,extras:[],pos:f?.partOfSpeech||"",source:"Diccionario",isDefinition:!0,matchedWord:p},p)}}else t.push(`FreeDict ${p}: HTTP ${w.status}`)}catch(w){t.push(`FreeDict ${p}: ${w.message}`)}return null}for(const p of r){const u=await h(p);if(u)return d(u,o)}const c=encodeURIComponent(o);try{const p=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${c}`,{signal:i(4e3)});if(p.ok){const w=(await p.json())?.sentences?.[0]?.trans?.trim();if(w&&w.toLowerCase()!==o.toLowerCase())return d({main:w,extras:[],pos:"",source:"Google",matchedWord:o})}}catch(p){t.push(`Google: ${p.message}`)}try{const p=await fetch(`https://api.mymemory.translated.net/get?q=${c}&langpair=es|en`,{signal:i(4e3)});if(p.ok){const w=(await p.json())?.responseData?.translatedText?.trim();if(w&&w.toLowerCase()!==o.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(w))return d({main:w,extras:[],pos:"",source:"MyMemory",matchedWord:o})}}catch(p){t.push(`MyMemory: ${p.message}`)}return t.length&&console.warn("Lookup failed for",a,t),null}const Ks={reading:1,read:2,practicing:3,understood:4,strong:5,mastered:6},Zt={reading:"Leyendo",read:"Leido",practicing:"Practicando",understood:"Entendido",strong:"Fuerte",mastered:"Dominado"},Js=new Set(["read","understood","strong","mastered"]),Qs=new Set(["understood","strong","mastered"]);function en(a){return Ks[a]||0}function _a(a){return Js.has(a)}function Po(a){return Qs.has(a)}function Da(a,t=!1){return a&&Zt[a]?Zt[a]:t?"Abierto":"Nuevo"}function An(a,t){return en(a)>=en(t)?a:t}const yo="google-drive-client-id-v1",Tn="learn-spanish-sync.json",Xs="https://www.googleapis.com/auth/drive.appdata";let at=null;function Zs(){return typeof window>"u"?Promise.reject(new Error("No browser window")):window.google?.accounts?.oauth2?Promise.resolve(window.google):(at||(at=new Promise((a,t)=>{const o=document.createElement("script");o.src="https://accounts.google.com/gsi/client",o.async=!0,o.defer=!0,o.onload=()=>a(window.google),o.onerror=()=>t(new Error("Could not load Google sign-in")),document.head.appendChild(o)})),at)}async function an(a,t=""){const o=await Zs();return new Promise((n,s)=>{o.accounts.oauth2.initTokenClient({client_id:a,scope:Xs,prompt:t,callback:i=>{i?.access_token?n(i.access_token):s(new Error(i?.error||"Google sign-in failed"))},error_callback:i=>s(new Error(i?.message||"Google sign-in failed"))}).requestAccessToken()})}async function zt(a,t,o={}){const n=await fetch(t,{...o,headers:{...o.headers||{},Authorization:`Bearer ${a}`}});if(!n.ok){const s=await n.text().catch(()=>"");throw new Error(s||`Google Drive HTTP ${n.status}`)}return n}async function er(a){const t=new URLSearchParams({spaces:"appDataFolder",fields:"files(id,name,modifiedTime)",q:`name='${Tn}' and trashed=false`});return((await(await zt(a,`https://www.googleapis.com/drive/v3/files?${t}`)).json()).files||[])[0]||null}async function ar(a,t){return t?(await zt(a,`https://www.googleapis.com/drive/v3/files/${t}?alt=media`)).json():null}async function or(a,t,o=null){const n=o?{}:{name:Tn,parents:["appDataFolder"]},s=`learn-spanish-${Date.now()}`,r=[`--${s}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(n),`--${s}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(t),`--${s}--`].join(`\r
`),i=o?`https://www.googleapis.com/upload/drive/v3/files/${o}?uploadType=multipart`:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";await zt(a,i,{method:o?"PATCH":"POST",headers:{"Content-Type":`multipart/related; boundary=${s}`},body:r})}function tr(a={},t={}){const o={...t};for(const[n,s]of Object.entries(a||{})){const r=o[n],i=s?.reviewedAt||s?.dueAt||0,d=r?.reviewedAt||r?.dueAt||0;o[n]=i>=d?s:r}return o}function nr(a=[],t=[]){const o=new Map;for(const n of[...t,...a]){const s=Te(n.word),r=o.get(s);if(!r){o.set(s,n);continue}const i=Math.max(r.savedAt||0,r.translatedAt||0,r.review?.reviewedAt||0),d=Math.max(n.savedAt||0,n.translatedAt||0,n.review?.reviewedAt||0),h=d>=i?n:r,c=d>=i?r:n;o.set(s,{...c,...h,tags:Array.from(new Set([...c.tags||[],...h.tags||[]])),extras:Array.from(new Set([...c.extras||[],...h.extras||[]])),favorite:!!(c.favorite||h.favorite),difficult:!!(c.difficult||h.difficult),review:(h.review?.reviewedAt||0)>=(c.review?.reviewedAt||0)?h.review:c.review})}return[...o.values()].sort((n,s)=>(s.savedAt||0)-(n.savedAt||0))}function sr(a={},t={}){const o={...t,...a};for(const n of new Set([...Object.keys(a||{}),...Object.keys(t||{})]))o[n]=An(a[n],t[n]);return o}function rr(a,t){if(!t)return a;const o=Date.parse(a.exportedAt||"")||0,n=Date.parse(t.exportedAt||"")||0,s=o>=n?a:t;return{...s,app:"Lexiora",version:5,exportedAt:new Date().toISOString(),savedWords:nr(a.savedWords,t.savedWords),visitedChapters:Array.from(new Set([...t.visitedChapters||[],...a.visitedChapters||[]])),palabrasProgress:tr(a.palabrasProgress,t.palabrasProgress),lessonStatuses:sr(a.lessonStatuses,t.lessonStatuses),studyTime:kn(a.studyTime,t.studyTime),writingEntries:[...new Map([...t.writingEntries||[],...a.writingEntries||[]].map(r=>[r.id,r])).values()].sort((r,i)=>(i.createdAt||0)-(r.createdAt||0)).slice(0,80),booxMode:!!s.booxMode,fontScale:s.fontScale,audioSettings:s.audioSettings,translationMode:s.translationMode}}const ir="12.13.0",Ln="firebase-web-config-v1",_o="appState",on=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"];let ot=null,jo=null,ut={enabled:!1,note:"not-started"};function Ja(a){return String(a??"").trim()}function Ga(a){if(!a||typeof a!="object")return null;const t={};for(const n of on)t[n]=Ja(a[n]);return Ja(a.measurementId)&&(t.measurementId=Ja(a.measurementId)),Ja(a.databaseURL)&&(t.databaseURL=Ja(a.databaseURL)),on.every(n=>t[n])?t:null}function lr(){if(typeof window>"u")return null;try{const a=window.localStorage.getItem(Ln);return a?Ga(JSON.parse(a)):null}catch{return null}}function dr(){return typeof window>"u"?null:Ga(window.__LEXIORA_FIREBASE_CONFIG__)}function cr(){try{return Ga({apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0,databaseURL:void 0})}catch{return null}}function St(){return cr()||dr()||lr()}function tn(){return!!St()}function pr(a){try{const t=JSON.parse(a);return Ga(t)}catch{return null}}function mr(a){if(typeof window>"u")return!1;const t=Ga(a);if(!t)return!1;try{return window.localStorage.setItem(Ln,JSON.stringify(t)),!0}catch{return!1}}async function ur(){if(!ot){const a=`https://www.gstatic.com/firebasejs/${ir}`;ot=Promise.all([De(()=>import(`${a}/firebase-app.js`),[]),De(()=>import(`${a}/firebase-auth.js`),[]),De(()=>import(`${a}/firebase-firestore.js`),[])]).then(([t,o,n])=>({...t,...o,...n}))}return ot}async function Ie(a=null){return jo||(jo=(async()=>{const t=await ur(),o=Ga(a)||St();if(!o)throw new Error("Firebase config is missing. Add it in Sync setup first.");const n=t.getApps().length?t.getApp():t.initializeApp(o),s=t.getAuth(n),r=t.getFirestore(n);try{await t.enableIndexedDbPersistence(r),ut={enabled:!0,note:"enabled"}}catch(i){ut={enabled:!1,note:i?.code||i?.message||"offline-persistence-unavailable"}}return{sdk:t,app:n,auth:s,db:r,config:o}})()),jo}function nn(){return ut}function Ct(a,t,o,n=_o){return a.doc(t,"users",o,"data",n)}function hr(a={},t={}){const o={...t};for(const[n,s]of Object.entries(a||{})){const r=o[n],i=s?.reviewedAt||s?.dueAt||0,d=r?.reviewedAt||r?.dueAt||0;o[n]=i>=d?s:r}return o}function gr(a=[],t=[]){const o=new Map;for(const n of[...t,...a]){const s=Te(n.word),r=o.get(s);if(!r){o.set(s,n);continue}const i=Math.max(r.savedAt||0,r.translatedAt||0,r.review?.reviewedAt||0),d=Math.max(n.savedAt||0,n.translatedAt||0,n.review?.reviewedAt||0),h=d>=i?n:r,c=d>=i?r:n;o.set(s,{...c,...h,tags:Array.from(new Set([...c.tags||[],...h.tags||[]])),extras:Array.from(new Set([...c.extras||[],...h.extras||[]])),favorite:!!(c.favorite||h.favorite),difficult:!!(c.difficult||h.difficult),review:(h.review?.reviewedAt||0)>=(c.review?.reviewedAt||0)?h.review:c.review})}return[...o.values()].sort((n,s)=>(s.savedAt||0)-(n.savedAt||0))}function fr(a={},t={}){const o={...t,...a};for(const n of new Set([...Object.keys(a||{}),...Object.keys(t||{})]))o[n]=An(a[n],t[n]);return o}function tt(a,t){if(!t)return a;const o=Date.parse(a.exportedAt||"")||0,n=Date.parse(t.exportedAt||"")||0,s=o>=n?a:t;return{...s,app:"Lexiora",version:6,exportedAt:new Date().toISOString(),savedWords:gr(a.savedWords,t.savedWords),visitedChapters:Array.from(new Set([...t.visitedChapters||[],...a.visitedChapters||[]])),palabrasProgress:hr(a.palabrasProgress,t.palabrasProgress),lessonStatuses:fr(a.lessonStatuses,t.lessonStatuses),studyTime:kn(a.studyTime,t.studyTime),writingEntries:[...new Map([...t.writingEntries||[],...a.writingEntries||[]].map(r=>[r.id,r])).values()].sort((r,i)=>(i.createdAt||0)-(r.createdAt||0)).slice(0,80),booxMode:!!s.booxMode,fontScale:s.fontScale,audioSettings:s.audioSettings,translationMode:s.translationMode}}async function br(a,t){const{sdk:o,auth:n}=await Ie();return o.onAuthStateChanged(n,a,t)}async function sn(){const{sdk:a,auth:t}=await Ie(),o=t.currentUser;return o||(await a.signInAnonymously(t)).user}async function xr(){const{sdk:a,auth:t}=await Ie(),o=new a.GoogleAuthProvider;return t.currentUser?.isAnonymous?(await a.linkWithPopup(t.currentUser,o)).user:(await a.signInWithPopup(t,o)).user}async function vr(){const{sdk:a,auth:t}=await Ie();await a.signOut(t)}async function yr(a,t={}){if(!a?.uid)return;const{sdk:o,db:n}=await Ie(),s=o.doc(n,"users",a.uid),r=await o.getDoc(s),d={username:t.username||a.displayName||(a.email?a.email.split("@")[0]:`user-${a.uid.slice(0,6)}`),email:a.email||t.email||"",photoUrl:a.photoURL||t.photoUrl||null,lastLogin:o.serverTimestamp()};r.exists()||(d.createdAt=o.serverTimestamp()),await o.setDoc(s,d,{merge:!0})}async function rn(a,t=_o){const{sdk:o,db:n}=await Ie(),s=await o.getDoc(Ct(o,n,a,t));return s.exists()&&s.data()?.payload||null}async function ln(a,t,o=_o){const{sdk:n,db:s}=await Ie();await n.setDoc(Ct(n,s,a,o),{payload:t,updatedAt:n.serverTimestamp()},{merge:!0})}async function wr(a,t,o,n=_o){const{sdk:s,db:r}=await Ie();return s.onSnapshot(Ct(s,r,a,n),i=>{i.exists()&&t?.(i.data()?.payload||null,i.metadata)},i=>o?.(i))}async function kr(a,t,o=null){if(!a)return;const{sdk:n,db:s}=await Ie(),r=o?n.doc(s,"users",o,"lessons",a):n.doc(s,"lessons",a),i={title:t.title||"",lessonNumber:Number(t.lessonNumber||0),content:t.content||"",description:t.description||"",updatedAt:n.serverTimestamp()};(await n.getDoc(r)).exists()||(i.createdAt=n.serverTimestamp()),await n.setDoc(r,i,{merge:!0})}async function jr(a,t,o=null){if(!a)return;const{sdk:n,db:s}=await Ie(),r=o?n.doc(s,"users",o,"quizzes",a):n.doc(s,"quizzes",a),i={title:t.title||"",description:t.description||"",lessonId:t.lessonId||null,updatedAt:n.serverTimestamp()};(await n.getDoc(r)).exists()||(i.createdAt=n.serverTimestamp()),await n.setDoc(r,i,{merge:!0})}async function Nr(a,t,o,n=null){if(!a||!t)return;const{sdk:s,db:r}=await Ie(),i=n?s.doc(r,"users",n,"quizzes",a,"questions",t):s.doc(r,"quizzes",a,"questions",t),d={text:o.text||"",type:o.type||"multiple-choice",correctAnswer:o.correctAnswer||"",options:Array.isArray(o.options)?o.options:[],updatedAt:s.serverTimestamp()};(await s.getDoc(i)).exists()||(d.createdAt=s.serverTimestamp()),await s.setDoc(i,d,{merge:!0})}async function zr(a,t){if(!a)return;const{sdk:o,db:n}=await Ie(),s=t.id||`${Date.now()}-${Math.random().toString(36).slice(2,9)}`,r=o.doc(n,"users",a,"quizAttempts",s);await o.setDoc(r,{score:Number(t.score||0),total:Number(t.total||0),percent:Number(t.percent||0),mode:t.mode||"multiple-choice",level:t.level||"",quizId:t.quizId||null,quizTitle:t.quizTitle||"",completedAt:o.serverTimestamp()})}function Sr(a){return a==="mastered"||a==="strong"||a==="understood"?"completed":a==="practicing"||a==="read"?"in_progress":"not_started"}async function Cr(a,t,o){if(!a||!t)return;const{sdk:n,db:s}=await Ie(),r=n.doc(s,"users",a,"lessonProgress",t),i=await n.getDoc(r),d=o.status||"read",h=Sr(d),c={lessonId:t,status:h,localStatus:d,updatedAt:n.serverTimestamp()};i.exists()||(c.startedAt=n.serverTimestamp()),h==="completed"&&(c.completedAt=n.serverTimestamp()),await n.setDoc(r,c,{merge:!0})}async function Ir(a,t=400){if(!a)return[];const{sdk:o,db:n}=await Ie(),s=o.collection(n,"users",a,"lessonProgress"),r=o.query(s,o.orderBy("updatedAt","desc"),o.limit(Math.max(1,t)));return(await o.getDocs(r)).docs.map(d=>({id:d.id,...d.data()}))}const Er=1440*60*1e3,qr="learner-profile-v1";function aa(a){return String(a||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function Ar(a,t,o=Date.now()){const n=a?.intervalDays||0,s=a?.ease||2.35,r=a?.reps||0,i={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:r?2:1,multiplier:s},easy:{label:"Easy",easeDelta:.12,minDays:r?4:3,multiplier:s+.7}}[t]||{label:"Good",easeDelta:0,minDays:1,multiplier:s},d=Math.max(1.35,Math.min(3.2,s+i.easeDelta)),h=t==="again"?i.minDays:Math.max(i.minDays,(n||1)*i.multiplier);return{...a,ease:d,intervalDays:h,dueAt:o+h*Er,reps:t==="again"?0:r+1,lapses:t==="again"?(a?.lapses||0)+1:a?.lapses||0,seen:!0,mastered:t==="easy"||h>=7,lastRating:i.label,reviewedAt:o}}function Tr(a){const t=[a.title,a.heading,a.text];for(const o of a.paragraphs||[])t.push(o);for(const o of a.pairs||[])t.push(o.es,o.en);for(const o of a.columns||[])t.push(o.es,o.en);for(const o of a.phrases||[])t.push(o.es,o.en);for(const o of a.words||[])t.push(o.es,o.en);for(const o of a.lessons||[]){t.push(o.title,o.subtitle,o.intro);for(const n of o.sections||[]){t.push(n.heading,n.text,n.tip,n.takeaway);for(const s of n.table?.rows||[])t.push(...s);for(const s of n.examples||[])t.push(s.es,s.en)}}for(const o of a.stories||[])t.push(o.title,o.level,...o.paragraphs||[]);for(const o of a.bios||[]){t.push(o.title,o.subtitle,o.dates);for(const n of o.levels||[])t.push(n.heading,...n.paragraphs||[],n.vocab)}for(const o of a.poems||[]){t.push(o.title,o.attribution,o.note,o.opening,o.learningNote);for(const n of o.stanzas||[])t.push(n.es,n.en);for(const n of o.vocab||[])t.push(n.es,n.en)}for(const o of a.songs||[]){t.push(o.title,o.attribution,o.note,o.learningNote);for(const n of o.sections||[])t.push(n.label,n.es,n.en);for(const n of o.vocab||[])t.push(n.es,n.en)}return t.filter(Boolean).join(" ")}function Lr(a,t,o=[],n=[]){const s=aa(a);if(s.length<2)return[];const r=[];for(const d of t||[]){const h=[d.title,d.subtitle,d.intro,d.sectionLabel,d.level].filter(Boolean).join(" ");aa(h).includes(s)&&r.push({type:"chapter",title:d.title,meta:`${d.sectionLabel} - ${d.level}`,chapter:d,context:d.subtitle||d.intro||""});for(const c of d.blocks||[]){const p=Tr(c);aa(p).includes(s)&&r.push({type:"match",title:d.title,meta:`${d.sectionLabel} - match inside lesson`,chapter:d,context:dn(p,a)})}}for(const d of o||[]){const h=[d.word,d.translation,d.pos,...d.tags||[]].join(" ");aa(h).includes(s)&&r.push({type:"memoria",title:d.word,meta:d.translation||"Memoria",context:(d.tags||[]).join(", ")})}for(const d of n||[]){const h=[d.prompt,d.text].join(" ");aa(h).includes(s)&&r.push({type:"writing",title:"Writing entry",meta:new Date(d.createdAt||Date.now()).toLocaleDateString(),context:dn(h,a)})}const i=new Set;return r.filter(d=>{const h=`${d.type}:${d.title}:${d.context}`;return i.has(h)?!1:(i.add(h),!0)}).slice(0,18)}function dn(a,t){const o=String(a||"").replace(/\s+/g," ").trim(),n=aa(t),s=o.toLowerCase().indexOf(String(t||"").toLowerCase());if(s>=0)return o.slice(Math.max(0,s-45),s+95).trim();let r="";const i=[];for(let p=0;p<o.length;p++){const u=o[p].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"");if(u)for(const w of u)r+=w,i.push(p)}const d=r.indexOf(n);if(d<0)return o.slice(0,120);const h=i[Math.max(0,d-45)]??0,c=i[Math.min(i.length-1,d+n.length+95)]??o.length;return o.slice(h,c).trim()}function Mr(a,t={}){const o=String(a||""),n=aa(o),s=o.trim()?o.trim().split(/\s+/).length:0,r=o.split(/[.!?]+/).map(S=>S.trim()).filter(Boolean),i=(o.match(/[.!?]/g)||[]).length||(r.length?1:0),d=(o.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,h=(o.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi)||[]).length,c=(o.match(/\b(soy|eres|es|somos|son|estoy|estas|está|esta|estamos|estan|están|tengo|tienes|tiene|tenemos|tienen|quiero|quieres|quiere|puedo|puedes|puede|voy|vas|va|vamos|van|hago|haces|hace|digo|dices|dice|veo|ves|ve|vivo|vives|vive|trabajo|trabajas|trabaja|estudio|estudias|estudia|fui|fue|era|tenia|tenía|hablo|hablas|habla|aprendo|aprendes|aprende)\b/gi)||[]).length,p=t?.target?Mo(t.target).map(aa):[],u=t?.target?p.some(S=>n.includes(S)):!0,w=(o.match(/\b(the|and|but|because|with|from|about|today|question|answer|write|spanish)\b/gi)||[]).length,g=(o.match(/\b(tambien|ademas|tenia|dias|mas|esta|si|tu|el)\b/gi)||[]).length,j=(o.match(/\b(el|la|los|las|un|una|yo|tu|tú|usted|nosotros|porque|pero|que|de|con|para|por|en|mi|mis|su|sus|muy|mas|más|tambien|también)\b/gi)||[]).length,f=r.map(S=>aa(S).split(" ")[0]).filter(Boolean).reduce((S,L,_,G)=>S+(_>0&&L===G[_-1]?1:0),0),N=r.filter(S=>S.split(/\s+/).filter(Boolean).length>28).length,y=[];s<20&&y.push("Add more detail."),i<2&&y.push("Use at least two complete sentences."),u||y.push("Use the prompt word or idea."),d===0&&y.push("Check accents when needed."),g>0&&y.push("Look for missing accents: también, además, tenía, días, más, está, sí, tú, él."),w>0&&y.push("Replace the English words with Spanish before saving."),h<1&&s>=20&&y.push("Add a connector like porque, aunque, or entonces."),c<2&&s>=15&&y.push("Use more conjugated verbs."),j<3&&s>=12&&y.push("Make it sound more Spanish with small glue words: que, de, en, para, por, con."),f>0&&y.push("Vary how your sentences begin."),N>0&&y.push("Split one long sentence into two clearer sentences."),s>=35&&i>=3&&h>=1&&w===0&&g===0&&y.push("Strong draft. Next: try one sentence in a different tense.");const k=Math.max(0,Math.min(100,20+Math.min(s,60)+Math.min(i*8,20)+Math.min(h*6,12)+Math.min(c*4,16)+Math.min(j*2,10)+(u?10:-10)-Math.min(w*8,24)-Math.min(g*3,12)-Math.min(f*4,8)-Math.min(N*5,10)));return{words:s,sentences:i,accents:d,connectors:h,verbs:c,targetUsed:u,likelyEnglish:w,accentCandidates:g,spanishSignals:j,repeatedStarts:f,longSentences:N,tips:y,score:k}}function Pr({chapters:a=[],visitedChapters:t=[],lessonStatuses:o={},palabrasProgress:n={},savedWords:s=[],writingEntries:r=[]}={},i=Date.now()){const d=Object.values(o||{}),h=Object.values(n||{}),c=s.map(u=>u.review).filter(Boolean),p=[...h,...c];return{chapters:{total:a.length,visited:a.filter(u=>t.includes(u.id)).length,unvisited:Math.max(0,a.length-a.filter(u=>t.includes(u.id)).length)},lessons:{read:d.filter(u=>_a(u)).length,understood:d.filter(u=>Po(u)).length,mastered:d.filter(u=>u==="mastered").length},vocabulary:{seen:p.filter(u=>u?.seen).length,due:p.filter(u=>u?.seen&&(u.dueAt||0)<=i).length,mastered:p.filter(u=>u?.mastered).length,difficult:s.filter(u=>u.difficult||u.review?.lastRating==="Hard").length,favorite:s.filter(u=>u.favorite).length},writing:{count:r.length,words:r.reduce((u,w)=>u+(w.feedback?.words||0),0),needsPractice:r.filter(u=>(u.feedback?.score||0)<70).length}}}function _r({learnerProfile:a={},reviewQueue:t=[],dailyStats:o={},studyTime:n={},savedWords:s=[],recommendations:r=[]}={}){const i=[],d=a.vocabulary?.due||0,h=a.vocabulary?.difficult||0,c=a.writing?.needsPractice||0,p=n.todaySeconds||0;return d>0&&i.push({key:"memoria",title:"Start with Memoria",detail:`${d} words are ready for review. Clear them before adding new ones.`,action:"memoria",actionLabel:"Review words"}),!o.grammarDone&&r[0]&&i.push({key:"grammar",title:"One grammar point",detail:`Open "${r[0].title}" and mark it understood only after one example feels easy.`,action:"daily",actionLabel:"Open next"}),c>0&&i.push({key:"writing",title:"Rewrite one short answer",detail:`${c} writing practice ${c===1?"entry needs":"entries need"} a cleaner second try.`,action:"writing",actionLabel:"Write now"}),o.readingDone||i.push({key:"reading",title:"Read with audio",detail:"Pick one reading paragraph, listen once, then read it aloud without racing.",action:"reading",actionLabel:"Open reading"}),p<600&&i.push({key:"time",title:"Keep today small",detail:"Aim for ten focused minutes. The streak matters more than a long session.",action:"daily",actionLabel:"Continue"}),h>0&&d===0&&i.push({key:"difficult",title:"Check difficult words",detail:`${h} saved words are marked difficult. Say each one in a sentence.`,action:"memoria",actionLabel:"Open Memoria"}),!i.length&&t[0]&&i.push({key:"queue",title:"Next best step",detail:`${t[0].title}: ${t[0].detail||"review this before moving on."}`,action:t[0].type==="writing"?"writing":t[0].type==="memoria"||t[0].type==="palabra"?"memoria":"daily",actionLabel:"Open"}),!i.length&&s.length>=10&&i.push({key:"steady",title:"Good rhythm",detail:"Review a few saved words, then read one fresh lesson. Do not overfill the day.",action:"daily",actionLabel:"Continue"}),i.slice(0,3)}function Dr({chapters:a=[],lessonStatuses:t={},palabrasProgress:o={},savedWords:n=[],writingEntries:s=[]}={},r=Date.now()){const i=[];for(const d of Object.values(o||{}))d?.seen&&((d.dueAt||0)<=r||d.lastRating==="Hard")&&i.push({type:"palabra",title:d.spanish||"Palabra",detail:d.english||d.lastRating||"",dueAt:d.dueAt||r,priority:d.lastRating==="Again"?3:d.lastRating==="Hard"?2:1});for(const d of n||[]){const h=d.review?.seen&&(d.review?.dueAt||0)<=r;(h||d.difficult||!d.translation)&&i.push({type:"memoria",title:d.word,detail:d.translation||"Needs translation",dueAt:d.review?.dueAt||r,priority:d.difficult?3:h?2:1})}for(const[d,h]of Object.entries(t||{}))if(h==="read"||h==="practicing"){const c=d.split("::").pop()||d;i.push({type:"lesson",title:c,detail:"Mark understood after review",dueAt:r,priority:1})}for(const d of s||[])((d.feedback?.score||0)<70||d.feedback?.tips?.length)&&i.push({type:"writing",title:d.prompt||"Writing practice",detail:(d.feedback?.tips||[])[0]||"Rewrite once",dueAt:d.createdAt||r,priority:1});if(i.length<6){for(const d of a||[])if(d.alwaysVisible||i.push({type:"chapter",title:d.title,detail:`${d.sectionLabel} - ${d.level}`,chapter:d,dueAt:r+i.length,priority:0}),i.length>=6)break}return i.sort((d,h)=>h.priority-d.priority||(d.dueAt||0)-(h.dueAt||0)).slice(0,24)}function Qa(a){const t=new Set(a.tags||[]);return a.pending&&t.add("pending"),a.translation||t.add("needs-translation"),a.favorite&&t.add("favorite"),a.difficult&&t.add("difficult"),a.review?.mastered&&t.add("mastered"),a.review?.seen&&(a.review?.dueAt||0)<=Date.now()&&t.add("due"),/Group 1|cognates|near-cognates/i.test(a.pos||"")&&t.add("cognates"),/Group 2|function/i.test(a.pos||"")&&t.add("function-words"),/Group 3|remaining/i.test(a.pos||"")&&t.add("remaining"),[...t]}function Mn(a,t=Date.now()){return{due:a.filter(o=>o.review?.seen&&(o.review?.dueAt||0)<=t).length,mastered:a.filter(o=>o.review?.mastered).length,difficult:a.filter(o=>o.difficult||o.review?.lastRating==="Hard").length,favorite:a.filter(o=>o.favorite).length}}function Gr(a){const t=["Spanish","English","Tags","Notes"],o=a.map(d=>[d.word,d.translation||"",Qa(d).join(" | "),[...d.extras||[],d.pos||""].filter(Boolean).join(" | ")]),n=[t,...o].map(d=>d.map(h=>`"${String(h).replace(/"/g,'""')}"`).join(",")).join(`
`),s=new Blob([n],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(s),i=document.createElement("a");i.href=r,i.download="memoria-spanish.csv",i.click(),URL.revokeObjectURL(r)}function We(a,t,o,n){return`${a||"chapter"}::${t}::${o}::${n}`}function so(a){return a?typeof a=="string"?a:Array.isArray(a)&&a.find(Boolean)||"":""}function Rr(a){return a.intro||so(a.sections?.[0]?.paragraphs)||a.sections?.[0]?.text||"Open this grammar lesson and study it step by step."}function Ur(a){return so(a.paragraphs)||"Open this story and read it with audio."}function $r(a){return so(a.levels?.[0]?.paragraphs)||a.subtitle||"Open this biography and read it by level."}function Or(a){return a.note||a.opening||so(a.stanzas?.map(t=>t.es))||"Open this poem with its translation and vocabulary."}function Br(a){return a.note||so(a.sections?.map(t=>t.es))||"Open this song with organized sections and vocabulary."}function Fr(a,t){const o=[];for(const n of a.blocks||[])n.type==="foldable-grammar"&&n.lessons.forEach((s,r)=>{const i=We(a.id,"grammar",r,s.title);o.push({id:i,statusKey:i,parentChapterId:a.id,sectionId:t.id,sectionLabel:t.label,level:s.level||a.level,title:s.title,subtitle:s.subtitle||a.title,intro:Rr(s),nestedTarget:{type:"grammar",index:r,key:i,cardId:i,title:s.title}})}),n.type==="foldable-stories"&&n.stories.forEach((s,r)=>{const i=We(a.id,"story",r,s.title);o.push({id:i,statusKey:i,parentChapterId:a.id,sectionId:t.id,sectionLabel:t.label,level:s.level||a.level,title:s.title,subtitle:`${s.paragraphs?.length||0} paragraphs - audio reading`,intro:Ur(s),nestedTarget:{type:"story",index:r,key:i,cardId:i,title:s.title}})}),n.type==="foldable-bios"&&n.bios.forEach((s,r)=>{const i=We(a.id,"bio",r,s.title),d=[...new Set((s.levels||[]).map(h=>h.level).filter(Boolean))];o.push({id:i,statusKey:i,parentChapterId:a.id,sectionId:t.id,sectionLabel:t.label,level:d.join("-")||a.level,title:s.title,subtitle:s.subtitle||s.dates||a.title,intro:$r(s),nestedTarget:{type:"bio",index:r,key:i,cardId:i,title:s.title}})}),n.type==="foldable-poems"&&n.poems.forEach((s,r)=>{const i=We(a.id,"poem",r,s.title);o.push({id:i,statusKey:i,parentChapterId:a.id,sectionId:t.id,sectionLabel:t.label,level:s.level||a.level,title:s.title,subtitle:s.attribution||a.title,intro:Or(s),nestedTarget:{type:"poem",index:r,key:i,cardId:i,title:s.title}})}),n.type==="foldable-songs"&&n.songs.forEach((s,r)=>{const i=We(a.id,"song",r,s.title);o.push({id:i,statusKey:i,parentChapterId:a.id,sectionId:t.id,sectionLabel:t.label,level:s.level||a.level,title:s.title,subtitle:s.attribution||a.title,intro:Br(s),nestedTarget:{type:"song",index:r,key:i,cardId:i,title:s.title}})});return o}function Za(a,t=[]){if(!a)return[];const o=[];for(const n of t){const s=Fr(n,a);s.length>0?o.push(...s):o.push({...n,id:n.id,statusKey:n.id,sectionId:a.id,sectionLabel:a.label})}return o}function cn(a=[],t="ALL"){const o=[];for(const n of a)for(const s of n.chapters||[])(s.alwaysVisible||t==="ALL"||s.level===t)&&o.push({...s,sectionId:n.id,sectionLabel:n.label});return o}function Vr(a=[],t=[]){const o=[];for(const n of a){const s=t.filter(r=>r.sectionId===n.id);o.push(...Za(n,s))}return o}function It(a,t=new Set,o={}){const n=o[a.statusKey||a.id];return _a(n)||t.has(a.id)}function Hr(a=[],t=[],o=[],n={}){const s=new Set(o),r=Vr(a,t),i=r.filter(p=>It(p,s,n)).length,d=r.filter(p=>Po(n[p.statusKey||p.id])).length,h=r.filter(p=>n[p.statusKey||p.id]==="mastered").length,c=r.filter(p=>{const u=n[p.statusKey||p.id];return _a(u)}).length;return{lessons:r,total:r.length,completed:i,read:c,understood:d,mastered:h,percent:r.length?Math.round(i/r.length*100):0}}function Wr(a=[],t=[],o=[],n={}){const s=new Set(o);return a.map(r=>{const i=t.filter(c=>c.sectionId===r.id),d=Za(r,i),h=d.filter(c=>It(c,s,n)).length;return{id:r.id,label:r.label,total:d.length,visited:h}}).filter(r=>r.total>0)}function Yr(a=[],t=[],o={},n=4){const s=new Set(t),r=a.filter(i=>!It(i,s,o));return(r.length?r:a).slice(0,n)}const va={A1:[{level:"A1",section:"Subject Pronouns & Verb SER",tag:"conjugation",prompt:"___ soy estudiante de español.",choices:["Yo","Él","Nosotros","Ellas"],answerIndex:0,explanation:"'Yo' (I) pairs with 'soy', the first-person singular of ser."},{level:"A1",section:"Subject Pronouns & Verb SER",tag:"conjugation",prompt:"¿De dónde ___ tú?",choices:["eres","es","somos","son"],answerIndex:0,explanation:"'Eres' is the tú form of ser."},{level:"A1",section:"Subject Pronouns & Verb SER",tag:"conjugation",prompt:"María y Juan ___ profesores.",choices:["son","somos","soy","eres"],answerIndex:0,explanation:"'Son' is used for ella/él/ellos — third-person plural of ser."},{level:"A1",section:"Subject Pronouns & Verb SER",tag:"conjugation",prompt:"Nosotros ___ de España.",choices:["somos","sois","son","eres"],answerIndex:0,explanation:"'Somos' is the nosotros (we) form of ser."},{level:"A1",section:"Verb ESTAR & Locations",tag:"conjugation",prompt:"¿Dónde ___ el libro? — ___ en la mesa.",choices:["está / Está","es / Es","está / Es","son / Están"],answerIndex:0,explanation:"'Está' (estar) is used for locations and temporary states."},{level:"A1",section:"Verb ESTAR & Locations",tag:"conjugation",prompt:"Mis amigos ___ en el parque.",choices:["están","son","somos","estás"],answerIndex:0,explanation:"'Están' is the ellos/ellas form of estar."},{level:"A1",section:"Verb ESTAR & Locations",tag:"conjugation",prompt:"Yo ___ muy cansado hoy.",choices:["estoy","soy","es","estar"],answerIndex:0,explanation:"Use estar (estoy) for temporary conditions like feeling tired."},{level:"A1",section:"Verb ESTAR & Locations",tag:"conjugation",prompt:"La farmacia ___ cerca de aquí.",choices:["está","es","son","somos"],answerIndex:0,explanation:"Locations of objects/places use estar: está cerca."},{level:"A1",section:"Articles (Un / Una / El / La)",tag:"grammar",prompt:"___ libro es interesante. (the book)",choices:["El","La","Un","Una"],answerIndex:0,explanation:"'Libro' is masculine singular → definite article 'el'."},{level:"A1",section:"Articles (Un / Una / El / La)",tag:"grammar",prompt:"Quiero ___ manzana. (an apple)",choices:["una","un","la","el"],answerIndex:0,explanation:"'Manzana' is feminine → indefinite article 'una'."},{level:"A1",section:"Articles (Un / Una / El / La)",tag:"grammar",prompt:"___ casas son grandes. (the houses)",choices:["Las","Los","Unas","Unos"],answerIndex:0,explanation:"'Casas' is feminine plural → 'las'."},{level:"A1",section:"Articles (Un / Una / El / La)",tag:"grammar",prompt:"___ estudiantes trabajan mucho. (the students, mixed group)",choices:["Los","Las","Unos","El"],answerIndex:0,explanation:"Mixed or masculine plural groups use 'los'."},{level:"A1",section:"Regular -AR Verbs (Present)",tag:"conjugation",prompt:"Yo ___ español todos los días. (hablar)",choices:["hablo","hablas","habla","hablamos"],answerIndex:0,explanation:"Regular -AR verbs: yo → -o (hablo)."},{level:"A1",section:"Regular -AR Verbs (Present)",tag:"conjugation",prompt:"Ella ___ mucho en la oficina. (trabajar)",choices:["trabaja","trabajo","trabajas","trabajáis"],answerIndex:0,explanation:"Regular -AR verbs: él/ella → -a (trabaja)."},{level:"A1",section:"Regular -AR Verbs (Present)",tag:"conjugation",prompt:"Nosotros ___ en el parque por las mañanas. (caminar)",choices:["caminamos","caminan","caminas","camino"],answerIndex:0,explanation:"Regular -AR verbs: nosotros → -amos (caminamos)."},{level:"A1",section:"Regular -AR Verbs (Present)",tag:"conjugation",prompt:"Vosotros ___ música muy alta. (escuchar)",choices:["escucháis","escuchan","escucha","escucho"],answerIndex:0,explanation:"Regular -AR verbs: vosotros → -áis (escucháis)."},{level:"A1",section:"Regular -ER / -IR Verbs (Present)",tag:"conjugation",prompt:"Tú ___ mucha agua cada día. (beber)",choices:["bebes","bebe","bebo","bebemos"],answerIndex:0,explanation:"Regular -ER verbs: tú → -es (bebes)."},{level:"A1",section:"Regular -ER / -IR Verbs (Present)",tag:"conjugation",prompt:"Vosotros ___ en un apartamento pequeño. (vivir)",choices:["vivís","viven","vivimos","vive"],answerIndex:0,explanation:"Regular -IR verbs: vosotros → -ís (vivís)."},{level:"A1",section:"Regular -ER / -IR Verbs (Present)",tag:"conjugation",prompt:"Ellos ___ el periódico cada mañana. (leer)",choices:["leen","lee","lees","leemos"],answerIndex:0,explanation:"Regular -ER verbs: ellos → -en (leen)."},{level:"A1",section:"Regular -ER / -IR Verbs (Present)",tag:"conjugation",prompt:"Yo ___ bien el francés. (comprender)",choices:["comprendo","comprendes","comprende","comprendemos"],answerIndex:0,explanation:"Regular -ER verbs: yo → -o (comprendo)."},{level:"A1",section:"Noun Gender & Number",tag:"grammar",prompt:"Make plural: el niño",choices:["los niños","las niñas","el niños","un niños"],answerIndex:0,explanation:"Masculine nouns ending in a vowel add -s; article becomes 'los'."},{level:"A1",section:"Noun Gender & Number",tag:"grammar",prompt:"What gender is 'la ciudad'?",choices:["Feminine","Masculine","Neutral","Variable"],answerIndex:0,explanation:"Words ending in -dad, -ción, -tad are typically feminine."},{level:"A1",section:"Noun Gender & Number",tag:"grammar",prompt:"Make plural: la flor",choices:["las flores","las flors","los flores","la flores"],answerIndex:0,explanation:"Nouns ending in consonant add -es. 'Flor' → 'flores'; feminine → 'las'."},{level:"A1",section:"Noun Gender & Number",tag:"grammar",prompt:"Which word is masculine? (no article given)",choices:["El problema","La mano","La radio","La foto"],answerIndex:0,explanation:"'El problema' is an exception — ends in -a but is masculine."},{level:"A1",section:"Numbers & Telling the Time",tag:"vocab",prompt:"How do you write 25 in Spanish?",choices:["veinticinco","veinte y cinco","veintecinco","veintisinco"],answerIndex:0,explanation:"21–29 are written as one word: veintiuno, veintidós... veinticinco."},{level:"A1",section:"Numbers & Telling the Time",tag:"vocab",prompt:"¿Qué hora es? — Son ___ tres.",choices:["las","los","la","el"],answerIndex:0,explanation:"For all hours except 1:00, use 'son las + number'."},{level:"A1",section:"Numbers & Telling the Time",tag:"vocab",prompt:"¿Qué hora es? — ___ la una y media.",choices:["Es","Son","Están","Hay"],answerIndex:0,explanation:"1:00 uses singular: 'Es la una'."},{level:"A1",section:"Numbers & Telling the Time",tag:"vocab",prompt:"Tengo ___ hermanos. (3)",choices:["tres","trescientos","trece","tercer"],answerIndex:0,explanation:"For counting, use cardinal numbers: tres."},{level:"A1",section:"Adjective Agreement",tag:"grammar",prompt:"La chica es ___. (alto → correct form)",choices:["alta","alto","altos","altas"],answerIndex:0,explanation:"Adjectives agree in gender: 'chica' is feminine → 'alta'."},{level:"A1",section:"Adjective Agreement",tag:"grammar",prompt:"Los libros son ___. (interesante → correct form)",choices:["interesantes","interesante","interesantos","interesantas"],answerIndex:0,explanation:"Plural nouns require plural adjectives: add -s to interesante."},{level:"A1",section:"Adjective Agreement",tag:"grammar",prompt:"Una ciudad ___. (grande → never changes gender)",choices:["grande","grandes","granda","grando"],answerIndex:0,explanation:"Adjectives ending in -e do not change for gender, only for number."},{level:"A1",section:"Adjective Agreement",tag:"grammar",prompt:"Unos chicos ___. (simpático → correct form)",choices:["simpáticos","simpática","simpático","simpáticas"],answerIndex:0,explanation:"Masculine plural adjective: simpático → simpáticos."},{level:"A1",section:"Interrogative Words",tag:"grammar",prompt:"___ es tu nombre? (What is your name?)",choices:["¿Cómo","¿Cuándo","¿Dónde","¿Por qué"],answerIndex:0,explanation:"'¿Cómo?' is used to ask about names/descriptions: ¿Cómo te llamas?"},{level:"A1",section:"Interrogative Words",tag:"grammar",prompt:"___ vives? (Where do you live?)",choices:["¿Dónde","¿Cuándo","¿Quién","¿Cuánto"],answerIndex:0,explanation:"'¿Dónde?' = where?"},{level:"A1",section:"Interrogative Words",tag:"grammar",prompt:"___ llegaste? (When did you arrive?)",choices:["¿Cuándo","¿Cómo","¿Por qué","¿Quién"],answerIndex:0,explanation:"'¿Cuándo?' = when?"},{level:"A1",section:"Interrogative Words",tag:"grammar",prompt:"___ cuesta este libro? (How much does this book cost?)",choices:["¿Cuánto","¿Cuántos","¿Cómo","¿Cuál"],answerIndex:0,explanation:"'¿Cuánto?' = how much? (singular)."},{level:"A1",section:"Negation, TENER & HAY",tag:"grammar",prompt:"Yo ___ hablo francés. (I don't speak French.)",choices:["no","ni","nunca","tampoco"],answerIndex:0,explanation:"Simple negation: place 'no' directly before the conjugated verb."},{level:"A1",section:"Negation, TENER & HAY",tag:"grammar",prompt:"Which sentence is correctly negated?",choices:["No tengo dinero.","Tengo no dinero.","No tengo no dinero.","Dinero no tengo yo."],answerIndex:0,explanation:"'No' goes before the verb: No tengo dinero."},{level:"A1",section:"Negation, TENER & HAY",tag:"grammar",prompt:"Yo ___ veinte años. (I am 20 years old.)",choices:["tengo","soy","estoy","hay"],answerIndex:0,explanation:"Spanish uses tener (to have) for age: Tengo veinte años."},{level:"A1",section:"Negation, TENER & HAY",tag:"grammar",prompt:"___ un supermercado cerca. (There is a supermarket nearby.)",choices:["Hay","Es","Está","Son"],answerIndex:0,explanation:"'Hay' is the impersonal form meaning 'there is / there are'."}],A2:[{level:"A2",section:"Stem-Changing Verbs (e→ie, o→ue, e→i)",tag:"conjugation",prompt:"Yo ___ ir al cine este fin de semana. (querer – e→ie)",choices:["quiero","quero","quiero","querer"],answerIndex:0,explanation:"Querer: yo quiero. The stem changes e→ie in all forms except nosotros/vosotros."},{level:"A2",section:"Stem-Changing Verbs (e→ie, o→ue, e→i)",tag:"conjugation",prompt:"Ella ___ a casa muy tarde. (volver – o→ue)",choices:["vuelve","volve","vuelva","volvé"],answerIndex:0,explanation:"Volver: ella vuelve. Stem change o→ue."},{level:"A2",section:"Stem-Changing Verbs (e→ie, o→ue, e→i)",tag:"conjugation",prompt:"Nosotros no ___ terminar el trabajo hoy. (poder – o→ue)",choices:["podemos","pudemos","puedemos","podamos"],answerIndex:0,explanation:"Nosotros is outside the 'boot' — no stem change: podemos."},{level:"A2",section:"Stem-Changing Verbs (e→ie, o→ue, e→i)",tag:"conjugation",prompt:"El restaurante ___ a las diez de la noche. (cerrar – e→ie)",choices:["cierra","cerra","cerrá","cierre"],answerIndex:0,explanation:"Cerrar: él/ella cierra. Stem change e→ie."},{level:"A2",section:"Reflexive Verbs",tag:"grammar",prompt:"Yo ___ a las siete de la mañana. (levantarse)",choices:["me levanto","me levanta","levanto me","me levantar"],answerIndex:0,explanation:"Reflexive pronoun 'me' goes before the conjugated verb: me levanto."},{level:"A2",section:"Reflexive Verbs",tag:"grammar",prompt:"Ellos ___ antes de salir. (ducharse)",choices:["se duchan","se ducha","duchan se","me duchan"],answerIndex:0,explanation:"3rd person plural reflexive pronoun is 'se': se duchan."},{level:"A2",section:"Reflexive Verbs",tag:"grammar",prompt:"¿Cómo ___ tú? (llamarse)",choices:["te llamas","se llama","me llamo","os llamáis"],answerIndex:0,explanation:"2nd person singular reflexive pronoun is 'te': te llamas."},{level:"A2",section:"Reflexive Verbs",tag:"grammar",prompt:"Nosotros ___ después de cenar. (acostarse – o→ue)",choices:["nos acostamos","nos acuestan","nos acuesta","os acostáis"],answerIndex:0,explanation:"Acostarse: nosotros nos acostamos (no stem change in nosotros)."},{level:"A2",section:"Preterite Tense — Regular",tag:"conjugation",prompt:"Ayer yo ___ cinco kilómetros. (caminar)",choices:["caminé","camino","caminaba","caminaré"],answerIndex:0,explanation:"Regular -AR preterite: yo → -é (caminé). The accent on 'é' is mandatory."},{level:"A2",section:"Preterite Tense — Regular",tag:"conjugation",prompt:"Ellos ___ la película entera anoche. (ver)",choices:["vieron","veieron","veron","vían"],answerIndex:0,explanation:"Regular -ER/-IR preterite: ellos → -ieron (vieron)."},{level:"A2",section:"Preterite Tense — Regular",tag:"conjugation",prompt:"Tú ___ una carta muy larga. (escribir)",choices:["escribiste","escribías","escribirás","escribió"],answerIndex:0,explanation:"Regular -IR preterite: tú → -iste (escribiste)."},{level:"A2",section:"Preterite Tense — Regular",tag:"conjugation",prompt:"Nosotros ___ en un restaurante italiano. (comer)",choices:["comimos","comemos","comíamos","comeríamos"],answerIndex:0,explanation:"Regular -ER preterite: nosotros → -imos (comimos)."},{level:"A2",section:"Preterite Tense — Irregular",tag:"conjugation",prompt:"Ayer ___ un día muy difícil. (ser — preterite)",choices:["fue","era","es","estaba"],answerIndex:0,explanation:"SER and IR share identical preterite forms. 3rd sg. = fue."},{level:"A2",section:"Preterite Tense — Irregular",tag:"conjugation",prompt:"Ella ___ la tarea antes de salir. (hacer — preterite)",choices:["hizo","hacío","hacio","hizó"],answerIndex:0,explanation:"Hacer preterite: irregular stem hiz-. 3rd sg. = hizo (no accent)."},{level:"A2",section:"Preterite Tense — Irregular",tag:"conjugation",prompt:"Yo ___ que estudiar toda la noche. (tener — preterite)",choices:["tuve","tenía","tené","tengo"],answerIndex:0,explanation:"Tener preterite: irregular stem tuv-. 1st sg. = tuve."},{level:"A2",section:"Preterite Tense — Irregular",tag:"conjugation",prompt:"Ellos ___ muy tarde al aeropuerto. (llegar — note spelling change)",choices:["llegaron","llegaron","llegáron","llegeron"],answerIndex:0,explanation:"Llegar is regular in preterite: ellos llegaron. No accent on 3rd pl."},{level:"A2",section:"Imperfect Tense",tag:"conjugation",prompt:"De niño, yo ___ mucho con mis amigos. (jugar — imperfect)",choices:["jugaba","jugué","jugo","jugaré"],answerIndex:0,explanation:"Regular -AR imperfect: yo → -aba (jugaba). Used for habitual past actions."},{level:"A2",section:"Imperfect Tense",tag:"conjugation",prompt:"___ las dos cuando llegué a casa. (ser — imperfect)",choices:["Eran","Fueron","Son","Eráis"],answerIndex:0,explanation:"Ser imperfect: era/eras/era/éramos/erais/eran. Time = 3rd pl. 'eran'."},{level:"A2",section:"Imperfect Tense",tag:"conjugation",prompt:"Ellos ___ en Madrid cuando eran jóvenes. (vivir — imperfect)",choices:["vivían","vivieron","vivían","viven"],answerIndex:0,explanation:"Regular -IR imperfect: ellos → -ían (vivían)."},{level:"A2",section:"Imperfect Tense",tag:"conjugation",prompt:"Tú siempre ___ tarde a clase. (llegar — imperfect)",choices:["llegabas","llegaste","llegas","llegarás"],answerIndex:0,explanation:"Regular -AR imperfect: tú → -abas (llegabas)."},{level:"A2",section:"Ser vs. Estar (Advanced Contrast)",tag:"grammar",prompt:"La sopa ___ fría. (right now, temporary)",choices:["está","es","son","están"],answerIndex:0,explanation:"Temporary condition → estar. 'Está fría' = it's cold right now."},{level:"A2",section:"Ser vs. Estar (Advanced Contrast)",tag:"grammar",prompt:"El concierto ___ en el teatro Lope de Vega.",choices:["es","está","será","estará"],answerIndex:0,explanation:"Events use ser for location: 'El concierto es en el teatro'."},{level:"A2",section:"Ser vs. Estar (Advanced Contrast)",tag:"grammar",prompt:"Mi madre ___ médica de urgencias.",choices:["es","está","era","estará"],answerIndex:0,explanation:"Profession/identity → ser: 'Mi madre es médica'."},{level:"A2",section:"Ser vs. Estar (Advanced Contrast)",tag:"grammar",prompt:"¡___ muy guapo hoy! (You look very handsome today)",choices:["Estás","Eres","Son","Somos"],answerIndex:0,explanation:"'Guapo hoy' = temporary appearance → estar: Estás guapo."},{level:"A2",section:"Direct & Indirect Object Pronouns",tag:"grammar",prompt:"Vi a María ayer. → ___ vi ayer. (replace 'a María')",choices:["La","Lo","Le","Me"],answerIndex:0,explanation:"Direct object pronoun for ella = 'la': La vi ayer."},{level:"A2",section:"Direct & Indirect Object Pronouns",tag:"grammar",prompt:"Ella me ___ el libro ayer. (dar — preterite)",choices:["dio","da","dió","dame"],answerIndex:0,explanation:"Indirect object 'me' + preterite of dar: me dio. No accent on 'dio'."},{level:"A2",section:"Direct & Indirect Object Pronouns",tag:"grammar",prompt:"___ digo la verdad siempre. (to them — indirect)",choices:["Les","Los","Me","Se"],answerIndex:0,explanation:"Indirect object pronoun for ellos/ellas = les: Les digo la verdad."},{level:"A2",section:"Direct & Indirect Object Pronouns",tag:"grammar",prompt:"¿Puedes ___ llamar mañana? (call me)",choices:["llamarme","mí llamar","me llamar","llamar a mí"],answerIndex:0,explanation:"With infinitives, object pronouns attach to the end: llamarme."},{level:"A2",section:"Gustar & Similar Verbs",tag:"grammar",prompt:"A mí me ___ los gatos. (gustar)",choices:["gustan","gusta","gusto","gustas"],answerIndex:0,explanation:"'Los gatos' is plural → use 'gustan'. Gustar agrees with the thing liked."},{level:"A2",section:"Gustar & Similar Verbs",tag:"grammar",prompt:"A ella le ___ el café por la mañana. (gustar)",choices:["gusta","gustan","gusta","gustas"],answerIndex:0,explanation:"'El café' is singular → use 'gusta'."},{level:"A2",section:"Gustar & Similar Verbs",tag:"grammar",prompt:"¿Te ___ la música clásica? (molestar — does it bother you?)",choices:["molesta","molestan","molesto","molesto"],answerIndex:0,explanation:"'La música' is singular → molestar uses 3rd sg.: te molesta."},{level:"A2",section:"Gustar & Similar Verbs",tag:"grammar",prompt:"Nos ___ mucho los viajes largos. (encantar — we love)",choices:["encantan","encanta","encantamos","encanto"],answerIndex:0,explanation:"'Los viajes' is plural → encanta agrees → encantan."},{level:"A2",section:"Comparatives & Superlatives",tag:"grammar",prompt:"Juan es ___ alto ___ Pedro. (taller than)",choices:["más / que","más / de","tan / que","menos / que"],answerIndex:0,explanation:"Comparative of superiority: más + adjective + que."},{level:"A2",section:"Comparatives & Superlatives",tag:"grammar",prompt:"Este es el libro ___ interesante de la clase. (most interesting)",choices:["más","menos","tan","muy"],answerIndex:0,explanation:"Superlative: el/la/los/las + más + adjective + de."},{level:"A2",section:"Comparatives & Superlatives",tag:"grammar",prompt:"Ana corre ___ rápido ___ María. (as fast as)",choices:["tan / como","tan / que","más / como","menos / que"],answerIndex:0,explanation:"Equality comparison: tan + adjective/adverb + como."},{level:"A2",section:"Comparatives & Superlatives",tag:"grammar",prompt:"Este hotel es ___ caro de la ciudad. (the most expensive)",choices:["el más","el menos","más","muy"],answerIndex:0,explanation:"Superlative with article: el/la más + adjective + de + group."},{level:"A2",section:"Simple Future Tense",tag:"conjugation",prompt:"Mañana yo ___ al médico. (ir — regular future)",choices:["iré","voy","fui","iba"],answerIndex:0,explanation:"Regular future: infinitive + ending. Ir: iré, irás, irá..."},{level:"A2",section:"Simple Future Tense",tag:"conjugation",prompt:"¿Qué ___ tú el fin de semana? (hacer — irregular future)",choices:["harás","hacerás","hagas","harías"],answerIndex:0,explanation:"Hacer has irregular future stem 'har-': harás (tú)."},{level:"A2",section:"Simple Future Tense",tag:"conjugation",prompt:"Ellos ___ la casa nueva el año que viene. (vender)",choices:["venderán","vendrán","vendirán","venden"],answerIndex:0,explanation:"Regular future: vender + -án = venderán."},{level:"A2",section:"Simple Future Tense",tag:"conjugation",prompt:"___ mucho frío esta noche. (haber — habrá)",choices:["Habrá","Haberá","Hay","Hubiera"],answerIndex:0,explanation:"Haber has irregular future stem 'habr-': habrá (3rd singular impersonal)."}]};function Kr({section:a,lessons:t,visitedSet:o,lessonStatuses:n,studyTime:s,onSelectChapter:r,SectionIconComponent:i}){if(!a)return null;const d=t||[],h=d.filter(u=>{const w=n?.[u.statusKey||u.id];return _a(w)||o.has(u.id)}).length,c=d.filter(u=>Po(n?.[u.statusKey||u.id])).length,p=a.id==="tiempos"?"Choose one tense lesson at a time. Start with the simple map, then move into compound tenses when the timeline feels clear.":"Choose one lesson from this section and read it slowly. Your progress stays attached to the exact lesson you open.";return e.jsxs("article",{className:"section-overview",children:[e.jsxs("header",{className:"section-overview-hero",children:[e.jsxs("div",{className:"chapter-icon-row",children:[e.jsx("div",{className:"chapter-icon-wrap",children:i?e.jsx(i,{id:a.id,size:22}):null}),e.jsxs("div",{children:[e.jsx("div",{className:"chapter-level-tag",children:"Sección"}),e.jsx("h1",{className:"chapter-title",children:a.label}),e.jsx("p",{className:"chapter-subtitle",children:a.sublabel})]})]}),e.jsx("p",{className:"chapter-intro",children:p}),e.jsxs("div",{className:"section-overview-stats","aria-label":"Section progress",children:[e.jsxs("span",{children:[e.jsx("strong",{children:d.length})," lecciones"]}),e.jsxs("span",{children:[e.jsx("strong",{children:h})," abiertas"]}),e.jsxs("span",{children:[e.jsx("strong",{children:c})," entendidas"]})]})]}),d.length?e.jsx("div",{className:"section-lesson-grid",children:d.map((u,w)=>{const g=n?.[u.statusKey||u.id],j=o.has(u.id),f=Number(s?.byChapter?.[u.id])||0,N=u.intro||u.subtitle||"Open the lesson and work through it at your own pace.";return e.jsxs("button",{type:"button",className:`section-lesson-card ${g?`status-${g}`:j?"status-opened":""}`,onClick:()=>r(u),children:[e.jsxs("span",{className:"section-lesson-topline",children:[e.jsx("span",{className:"section-lesson-index",children:String(w+1).padStart(2,"0")}),e.jsx("span",{className:"section-lesson-level",children:u.level})]}),e.jsx("span",{className:"section-lesson-title",children:u.title}),u.subtitle&&e.jsx("span",{className:"section-lesson-subtitle",children:u.subtitle}),e.jsx("span",{className:"section-lesson-preview",children:N}),e.jsxs("span",{className:"section-lesson-footer",children:[e.jsx("span",{className:"section-lesson-status",children:Da(g,j)}),f>0&&e.jsx("span",{className:"section-lesson-time",children:ya(f)})]})]},u.id)})}):e.jsxs("div",{className:"empty",children:[e.jsx(ze,{size:28}),e.jsx("p",{children:"No hay lecciones en este nivel."})]})]})}const Jr=oe.lazy(()=>De(()=>import("./sync-panel-CUogrDnW.js"),__vite__mapDeps([0,1,2]))),No=["A1","A2","B1","B2"],pn="lesson-status-v1",nt="audio-settings-v1",ht="writing-practice-v1",st="translation-mode-v1",rt="boox-mode-v1",mn="lexiora-install-dismissed-v1",Qr={tiempos:ao,verbos:ct,verbos2:ct,gramatica:Is,lectura:Cs,vocabulario:wn,palabras:bt,frases:Ss,tips:Pa,resumen:vt,practicar:ze};function zo({id:a,size:t=18,className:o=""}){const n=Qr[a]||Io;return e.jsx(n,{size:t,className:o})}const wo=["A1","A2","B1","B2"];function Xr(a){const t=String(a||"").toUpperCase().replace(/\s+/g,"");if(!t)return[];const o=t.match(/[AB][12]/g)||[];if(!o.length)return[];const n=[...new Set(o)];if(t.includes("-")&&n.length>=2){const s=wo.indexOf(n[0]),r=wo.indexOf(n[n.length-1]);if(s>=0&&r>=s)return wo.slice(s,r+1)}return n.filter(s=>wo.includes(s))}function un(a,t){if(t==="ALL")return!0;const o=Xr(a?.level);return o.length?o.includes(t):!1}const Zr={tiemposVerbales:()=>De(()=>import("./tiempos-verbales-C3Sh9s5J.js"),[]).then(a=>a.TIEMPOS_VERBALES_LESSON),compoundIndicative:()=>De(()=>import("./compound-tenses-DTrkvk-v.js").then(a=>a.c),[]).then(a=>a.COMPOUND_TENSES_INDICATIVE_LESSON),compoundSubjunctive:()=>De(()=>import("./compound-tenses-DTrkvk-v.js").then(a=>a.a),[]).then(a=>a.COMPOUND_TENSES_SUBJUNCTIVE_LESSON),zoranJourney:()=>De(()=>import("./zoran-journey-CSB3CGNL.js"),[]).then(a=>a.ZORAN_JOURNEY_LESSON),canciones:()=>De(()=>import("./canciones-Ba6_cXBt.js"),[]).then(a=>a.CANCIONES_SONGS),expressions:()=>De(()=>import("./expressions-library-BSStglu3.js"),[]).then(a=>a.SPANISH_EXPRESSIONS_LIBRARY)};function ko(a,t){return{...t,lazyKey:a,blocks:[{type:"lazy-loading",heading:t.title,text:"Loading this lesson pack..."}]}}function ei(a,t){return a.map(o=>({...o,chapters:(o.chapters||[]).map(n=>{const s=n.lazyKey&&t[n.lazyKey]?t[n.lazyKey]:n;return{...s,lazyKey:n.lazyKey,blocks:(s.blocks||[]).map(r=>r.lazySongsKey?{...r,songs:t[r.lazySongsKey]||[]}:r.lazyLibraryKey?{...r,library:t[r.lazyLibraryKey]||[]}:r)}})}))}function it(a){const t=[];a?.lazyKey&&t.push(a.lazyKey);for(const o of a?.blocks||[])o.lazySongsKey&&t.push(o.lazySongsKey),o.lazyLibraryKey&&t.push(o.lazyLibraryKey);return t}const ai=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]},ko("tiemposVerbales",{id:"tiempos-verbales",level:"A1-B2",title:"Tiempos Verbales",subtitle:"mapa completo de tiempos"}),ko("compoundIndicative",{id:"tiempos-compuestos-indicativo",level:"B1",title:"Tiempos Compuestos del Indicativo",subtitle:"haber + participio"}),ko("compoundSubjunctive",{id:"tiempos-compuestos-subjuntivo",level:"B2",title:"Tiempos compuestos",subtitle:"subjuntivo y comparacion"})]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},ko("zoranJourney",{id:"el-viaje-de-zoran",level:"A1-A2",title:"El Viaje de Zoran",subtitle:"lectura guiada"}),{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",lazySongsKey:"canciones",songs:[]},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"expresiones",level:"B1",title:"Expresiones",subtitle:"648 Spanish expressions",intro:"All 648 expressions are shown in one ranked sequence from most-used to less-used, with 50 expressions per page. Similar forms stay side by side so you can compare them fast.",blocks:[{type:"expressions-library",lazyLibraryKey:"expressions",library:[]}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]},{id:"practicar",label:"Practicar",sublabel:"Tests y repaso",chapters:[{id:"practicar-centro",level:"A1-B2",alwaysVisible:!0,title:"Centro de Practica",subtitle:"Todo el entrenamiento en un solo lugar",intro:"Elige una leccion, cambia el formato (multiple choice o escribir), y practica con feedback inmediato. Este bloque esta inspirado en los formatos de practica de SpanishDict, pero usa tus propias lecciones y progreso.",blocks:[{type:"practice-hub"}]}]}];function oi(a){const t=[];let o="",n="normal";for(let s=0;s<a.length;s++){const r=a[s];r==="["?(o&&t.push({text:o,mode:n}),o="",n="irreg"):r==="]"?(o&&t.push({text:o,mode:"irreg"}),o="",n="normal"):r==="{"?(o&&t.push({text:o,mode:n}),o="",n="ending"):r==="}"?(o&&t.push({text:o,mode:"ending"}),o="",n="normal"):o+=r}return o&&t.push({text:o,mode:n}),t}function we({raw:a}){const t=ea(a);return e.jsx("span",{className:"render-form","aria-label":t,children:oi(a).map((o,n)=>{const s=o.mode==="irreg"?"irreg":o.mode==="ending"?"ending":"form-root";return e.jsx("span",{className:`form-part ${s}`,children:o.text},n)})})}function ea(a){return String(a||"").replace(/[\[\]{}]/g,"")}function ti(a,t){return t===0?a:e.jsx(we,{raw:String(a)})}function Do({table:a,className:t=""}){const o=a.headers||[],n=["lesson-table",t].filter(Boolean).join(" ");return e.jsxs("div",{className:"lesson-table-shell",children:[e.jsx("div",{className:"lesson-table-wrap",children:e.jsxs("table",{className:n,children:[o.length>0&&e.jsx("thead",{children:e.jsx("tr",{children:o.map((s,r)=>e.jsx("th",{children:s},r))})}),e.jsx("tbody",{children:a.rows.map((s,r)=>e.jsx("tr",{children:s.map((i,d)=>e.jsx("td",{children:ti(i,d)},d))},r))})]})}),e.jsx("div",{className:"lesson-table-cards","aria-label":"Tabla adaptada para movil",children:a.rows.map((s,r)=>e.jsxs("article",{className:"lesson-table-card",children:[e.jsx("div",{className:"lesson-table-card-title",children:s[0]}),e.jsx("div",{className:"lesson-table-card-grid",children:s.slice(1).map((i,d)=>e.jsxs("div",{className:"lesson-table-card-item",children:[e.jsx("span",{className:"lesson-table-card-label",children:o[d+1]||`Forma ${d+1}`}),e.jsx("span",{className:"lesson-table-card-value",children:e.jsx(we,{raw:String(i)})})]},d))})]},r))})]})}function ee(a){return String(a||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}const ni=/[\u0300-\u036f]/g,hn=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function gn(a){const t=String(a||"");let o="";const n=[];for(let s=0;s<t.length;s+=1){const r=t[s].normalize("NFD").replace(ni,"").toLowerCase();for(let i=0;i<r.length;i+=1)o+=r[i],n.push(s)}return{normalized:o,map:n}}function Pn(a,t){const o=gn(String(t||"").trim()).normalized;if(!o)return[];const{normalized:n,map:s}=gn(a),r=[];let i=0;for(;i<n.length;){const d=n.indexOf(o,i);if(d===-1)break;r.push({start:s[d],end:s[d+o.length-1]+1}),i=d+Math.max(o.length,1)}return r}function _n(a,t,o=0){const n=String(a||"");if(!t.length)return[{text:n,highlighted:!1}];const s=[];let r=0;const i=o+n.length;for(const d of t){const h=Math.max(d.start,o)-o,c=Math.min(d.end,i)-o;c<=r||h>=n.length||(h>r&&s.push({text:n.slice(r,h),highlighted:!1}),s.push({text:n.slice(Math.max(h,r),c),highlighted:!0}),r=c)}return r<n.length&&s.push({text:n.slice(r),highlighted:!1}),s.length?s:[{text:n,highlighted:!1}]}function eo({text:a,query:t}){const o=m.useMemo(()=>Pn(a,t),[a,t]);return e.jsx(e.Fragment,{children:_n(a,o).map((n,s)=>n.highlighted?e.jsx("mark",{className:"search-hit",children:n.text},s):e.jsx(oe.Fragment,{children:n.text},s))})}function fn({text:a,query:t}){const o=m.useMemo(()=>Pn(a,t),[a,t]),n=m.useMemo(()=>{const s=[],r=String(a||"");let i;for(hn.lastIndex=0;(i=hn.exec(r))!==null;)s.push({text:i[0],isWord:!!i[1],charStart:i.index});return s},[a]);return e.jsx(e.Fragment,{children:n.map((s,r)=>{const i=_n(s.text,o,s.charStart).map((d,h)=>d.highlighted?e.jsx("mark",{className:"search-hit",children:d.text},h):e.jsx(oe.Fragment,{children:d.text},h));return s.isWord?e.jsx("span",{className:"dict-word-token","data-dict-word":s.text,children:i},r):e.jsx("span",{children:i},r)})})}function si({tenses:a,verbName:t}){const[o,n]=m.useState(!1),[s,r]=m.useState([]),[i,d]=m.useState(0),[h,c]=m.useState(""),[p,u]=m.useState(null),[w,g]=m.useState(0),[j,f]=m.useState(!1);function N(){const R=[];for(const ae of a)for(const z of ae.forms||[])R.push({tense:ae.name,pronoun:z.p,answer:ea(z.f)});const O=[...R].sort(()=>Math.random()-.5);return O.slice(0,Math.min(8,O.length))}function y(){r(N()),d(0),c(""),u(null),g(0),f(!1),n(!0)}function k(R){if(R&&R.preventDefault(),p)return;const O=s[i],ae=ee(h)===ee(O.answer);u(ae?"correct":"incorrect"),ae&&g(z=>z+1)}function S(){if(i+1>=s.length){f(!0);return}d(R=>R+1),c(""),u(null)}function L(){window.speechSynthesis?.cancel(),n(!1)}const _=s[i],G=s.length;return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"quiz-trigger-btn",onClick:y,children:[e.jsx(ze,{size:14}),"Practicar"]}),o&&e.jsx("div",{className:"quiz-overlay",onClick:L,children:e.jsxs("div",{className:"quiz-modal",onClick:R=>R.stopPropagation(),children:[e.jsxs("header",{className:"quiz-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),e.jsx("h2",{className:"quiz-title",children:t})]}),e.jsx("button",{className:"quiz-close",onClick:L,"aria-label":"Close",children:e.jsx(Je,{size:18})})]}),j?e.jsxs("div",{className:"quiz-results",children:[e.jsxs("div",{className:"quiz-results-circle",children:[e.jsxs("div",{className:"quiz-results-pct",children:[Math.round(w/G*100),"%"]}),e.jsxs("div",{className:"quiz-results-fraction",children:[w," / ",G]})]}),e.jsx("h3",{className:"quiz-results-title",children:w===G?"¡Perfecto!":w>=G*.75?"Muy bien":w>=G*.5?"Sigue practicando":"Vamos a repasar"}),e.jsx("p",{className:"quiz-results-msg",children:w===G?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":w>=G*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),e.jsxs("div",{className:"quiz-results-actions",children:[e.jsxs("button",{className:"quiz-retry-btn",onClick:y,children:[e.jsx(wt,{size:14}),"Otra vez"]}),e.jsx("button",{className:"quiz-done-btn",onClick:L,children:"Cerrar"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"quiz-progress",children:[e.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",i+1," de ",G]}),e.jsx("div",{className:"quiz-progress-bar",children:e.jsx("div",{className:"quiz-progress-fill",style:{width:`${i/G*100}%`}})})]}),e.jsxs("div",{className:"quiz-question",children:[e.jsx("div",{className:"quiz-tense-label",children:_.tense}),e.jsxs("div",{className:"quiz-prompt",children:[e.jsx("span",{className:"quiz-pronoun",children:_.pronoun}),e.jsx("span",{className:"quiz-blank",children:"________"})]}),e.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",e.jsx("em",{children:t.toLowerCase()})," para esta persona."]})]}),e.jsxs("form",{onSubmit:k,className:"quiz-form",children:[e.jsx("input",{type:"text",className:`quiz-input ${p||""}`,value:h,onChange:R=>c(R.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!p}),!p&&e.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!h.trim(),children:"Comprobar"})]}),p&&e.jsxs("div",{className:`quiz-feedback ${p}`,children:[p==="correct"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"quiz-feedback-icon",children:e.jsx(To,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),e.jsx("div",{className:"quiz-feedback-answer",children:_.answer})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"quiz-feedback-icon",children:e.jsx(Je,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),e.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",e.jsx("strong",{children:_.answer})]})]})]}),e.jsx(re,{text:_.answer,size:"md",className:"quiz-feedback-speak"})]}),p&&e.jsxs("button",{className:"quiz-next-btn",onClick:S,children:[i+1>=G?"Ver resultados":"Siguiente",e.jsx(Ge,{size:16})]}),e.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",e.jsx("strong",{children:w})," / ",i+(p?1:0)]})]})]})})]})}function Ke(a){return[...a].sort(()=>Math.random()-.5)}let lt=null;function So(a="correct"){if(typeof window>"u")return;const t=window.AudioContext||window.webkitAudioContext;if(t)try{lt||(lt=new t);const o=lt;o.state==="suspended"&&o.resume().catch(()=>{});const n=o.currentTime,s=o.createGain();s.connect(o.destination),s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.08,n+.01),s.gain.exponentialRampToValueAtTime(1e-4,n+.22);const r=o.createOscillator();if(r.type="sine",r.frequency.setValueAtTime(a==="correct"?760:300,n),r.connect(s),r.start(n),r.stop(n+.22),a==="correct"){const i=o.createOscillator();i.type="triangle",i.frequency.setValueAtTime(1040,n+.1),i.connect(s),i.start(n+.1),i.stop(n+.24)}}catch{}}function oa(a){const t=[];function o(r,i){if(!r||!i)return;const d=ea(String(r)).trim(),h=String(i).trim();d.length<2||h.length<2||t.push({es:d,en:h})}for(const r of a?.sections||[]){for(const i of r.examples||[])o(i.es,i.en);for(const i of r.table?.rows||[])i?.[0]&&i?.[1]&&o(i[1],`${i[0]} form`)}for(const r of a?.blocks||[]){for(const i of r.pairs||[])o(i.es,i.en);for(const i of r.columns||[])o(i.es,i.en);for(const i of r.phrases||[])o(i.es,i.en);for(const i of r.words||[])o(i.es,i.en);for(const i of r.lessons||[])for(const d of oa(i))o(d.es,d.en)}const n=[],s=new Set;for(const r of t){const i=ee(r.es);s.has(i)||(s.add(i),n.push(r))}return n}function ri(a,t={}){const o=Number(t.count)||4,n=oa(a);if(n.length<2)return[];const s=Math.max(2,Math.min(o,n.length));return Ke(n).slice(0,s).map((i,d)=>{const h=d%2===0,c=h?i.es:i.en,p=Ke(n).filter(u=>u!==i).map(u=>h?u.es:u.en).filter(u=>ee(u)!==ee(c)).slice(0,3);return{prompt:h?i.en:i.es,answer:c,speak:i.es,mode:h?"Elige el espanol":"Elige la traduccion",choices:Ke([c,...p]).slice(0,4)}})}function ii(a,t=8){const o=oa(a);if(o.length<2)return[];const n=Math.max(2,Math.min(t,o.length));return Ke(o).slice(0,n).map((r,i)=>{const d=i%2===0;return{prompt:d?r.en:r.es,answer:d?r.es:r.en,speak:r.es,mode:d?"Escribe en espanol":"Write in English",tip:d?"Escribe la traduccion en espanol. Puedes omitir mayusculas y tildes.":"Write the English translation."}})}function li(a,t=8){const o=oa(a);if(o.length<2)return[];const n=Math.max(2,Math.min(t,o.length));return Ke(o).slice(0,n).map(r=>{const i=r.en,d=Ke(o).filter(h=>h!==r).map(h=>h.en).filter(h=>ee(h)!==ee(i)).slice(0,3);return{prompt:"Escucha y elige la traduccion correcta",answer:i,speak:r.es,es:r.es,choices:Ke([i,...d]).slice(0,4)}})}function di(a,t=12){const o=Array.isArray(va?.[a])?va[a]:[];if(!o.length)return[];const n=Math.max(4,Math.min(t,o.length));return Ke(o).slice(0,n).map(r=>{const i=Array.isArray(r.choices)?[...r.choices]:[],d=i[r.answerIndex]||"";return{prompt:r.prompt||"",answer:d,speak:r.prompt||"",mode:`${r.level} - ${r.section||"Grammar"}`,choices:Ke(i).slice(0,4),explanation:r.explanation||""}}).filter(r=>r.prompt&&r.answer&&r.choices.length>=2)}function ci({chapter:a,practiceChapters:t=[],lessonStatuses:o={},onLessonStatusChange:n,onPracticeAttempt:s}){const[r,i]=m.useState(""),[d,h]=m.useState("multiple-choice"),[c,p]=m.useState(""),[u,w]=m.useState("lesson"),[g,j]=m.useState(20),[f,N]=m.useState(0),[y,k]=m.useState({}),[S,L]=m.useState(!1),[_,G]=m.useState(0),[R,O]=m.useState(""),[ae,z]=m.useState(null),[F,H]=m.useState(0),[Q,W]=m.useState(!1),[A,Y]=m.useState({}),[te,V]=m.useState(!1),[x,P]=m.useState(""),[$,U]=m.useState(""),K=oe.useRef(new Set),J=No.includes(r),Le=m.useMemo(()=>No.map(v=>{const D=t.filter(ne=>ne&&ne.id!==a.id&&ne.sectionId!=="practicar"&&un(ne,v)).filter(ne=>oa(ne).length>=2).length,ie=Array.isArray(va[v])?va[v].length:0;return{level:v,lessonCount:D,grammarCount:ie,ready:D>0||ie>0}}),[t,a.id]),ve=m.useMemo(()=>J?t.filter(v=>v&&v.id!==a.id&&v.sectionId!=="practicar"&&un(v,r)):[],[t,a.id,r,J]),ue=J&&Array.isArray(va[r])&&va[r].length>0,ce=m.useMemo(()=>{const v=[];for(const T of ve){if(!T)continue;const D=oa(T).length;D<2||v.push({id:T.id,chapter:T,pairCount:D,sectionLabel:T.sectionLabel||T.sectionId||"Leccion"})}return v.sort((T,D)=>D.pairCount-T.pairCount)},[ve]),I=m.useMemo(()=>{const v=[];for(const T of ve)T&&(T.blocks||[]).forEach((D,ie)=>{D.type!=="verb-table"||!Array.isArray(D.tenses)||D.tenses.length===0||v.push({id:`${T.id}::${ie}`,chapterTitle:T.title,sectionLabel:T.sectionLabel||T.sectionId||"Verbos",tenses:D.tenses})});return v},[ve]),X=m.useMemo(()=>{const v=[];for(const T of ve)T&&(T.blocks||[]).forEach((D,ie)=>{D.type!=="choice-quiz"||!Array.isArray(D.questions)||D.questions.length===0||v.push({id:`${T.id}::choice::${ie}`,block:D,chapterTitle:T.title,sectionLabel:T.sectionLabel||T.sectionId||"Leccion"})});return v},[ve]);m.useEffect(()=>{if(!ce.length){p("");return}ce.some(v=>v.id===c)||p(ce[0].id)},[ce,c]),m.useEffect(()=>{if(!I.length){P("");return}I.some(v=>v.id===x)||P(I[0].id)},[I,x]),m.useEffect(()=>{if(!X.length){U("");return}X.some(v=>v.id===$)||U(X[0].id)},[X,$]),m.useEffect(()=>{k({}),L(!1),G(0),O(""),z(null),H(0),W(!1),Y({}),V(!1)},[d,c,u,g,r,f]),m.useEffect(()=>{!ce.length&&d!=="multiple-choice"&&h("multiple-choice")},[ce.length,d]);const M=ce.find(v=>v.id===c)||ce[0]||null,le=I.find(v=>v.id===x)||I[0]||null,pe=X.find(v=>v.id===$)||X[0]||null,ke=m.useMemo(()=>M?ce.filter(v=>v.sectionLabel===M.sectionLabel):[],[ce,M]),Me=m.useMemo(()=>{function v(T){const D=new Set,ie=[];for(const ne of T){const Se=`${ee(ne.es)}::${ee(ne.en)}`;D.has(Se)||(D.add(Se),ie.push(ne))}return ie}if(!M)return[];if(u==="all"){const T=[];for(const D of ce)T.push(...oa(D.chapter));return v(T)}if(u==="section"){const T=[];for(const D of ke)T.push(...oa(D.chapter));return v(T)}return v(oa(M.chapter))},[M,ce,ke,u]),fe=m.useMemo(()=>({blocks:[{pairs:Me}]}),[Me]),je=m.useMemo(()=>{const v=[];return M&&v.push(...ri(fe,{count:g*2})),ue&&v.push(...di(r,g*2)),v.length?Ke(v).slice(0,Math.min(g,v.length)):[]},[M,fe,g,r,ue,f]),ta=m.useMemo(()=>M?ii(fe,g):[],[M,fe,g,f]),Ee=m.useMemo(()=>M?li(fe,g):[],[M,fe,g,f]),na=je.reduce((v,T,D)=>ee(y[D])===ee(T.answer)?v+1:v,0),ka=je.length?Math.round(na/je.length*100):0,Ua=Ee.reduce((v,T,D)=>ee(A[D])===ee(T.answer)?v+1:v,0),Ne=Ee.length?Math.round(Ua/Ee.length*100):0,qe=ta[_],sa=ta.length,ra=sa?Math.round(F/sa*100):0,Qe=M?.chapter?.title||(ue?`Nivel ${r}`:""),Go=M?.sectionLabel||(ue?"Banco de gramatica":""),ha=ue?va[r].length:0,$a=M?o[M.chapter.id]:null,Re=d==="multiple-choice"?S:d==="typing"?Q:te,ja=d==="multiple-choice"?ka:d==="typing"?ra:Ne,Oa=ja>=85?"mastered":ja>=65?"strong":"practicing",he=Qe?`https://www.spanishdict.com/translate/${encodeURIComponent(Qe)}`:"https://www.spanishdict.com/",Na=le?.chapterTitle||Qe,Ro=Na?`https://www.spanishdict.com/conjugate/${encodeURIComponent(Na.toLowerCase())}`:"https://www.spanishdict.com/conjugation";function za(){K.current.clear(),N(v=>v+1)}function ia(v,T,D,ie=[]){if(!s||!D||D<1)return;const ne=M?.id||`${v}-level-${r}`,Se=`${f}:${v}:${ne}:${T}:${D}`;K.current.has(Se)||(K.current.add(Se),s({mode:v,level:r,score:T,total:D,percent:Math.round(T/D*100),sourceId:ne,title:Qe||`${v} ${r}`,lessonId:M?.chapter?.id||null,questions:ie.map(Pe=>({prompt:Pe.prompt||"",answer:Pe.answer||"",choices:Array.isArray(Pe.choices)?Pe.choices:[]}))}))}function Sa(v){No.includes(v)&&(i(v),h("multiple-choice"),w("all"),za())}function Ba(v,T,D){const ie=ee(T)===ee(D);So(ie?"correct":"incorrect"),k(ne=>({...ne,[v]:T}))}function Fa(v){if(v&&v.preventDefault(),!qe||ae)return;const T=ee(R)===ee(qe.answer);So(T?"correct":"incorrect"),z(T?"correct":"incorrect"),T&&H(D=>D+1)}function Ae(){if(_+1>=ta.length){W(!0),ia("typing",Math.min(F+(ae==="correct"?1:0),ta.length),ta.length,ta);return}G(v=>v+1),O(""),z(null)}function Va(v,T,D){const ie=ee(T)===ee(D);So(ie?"correct":"incorrect"),Y(ne=>({...ne,[v]:T}))}const io=ce.length>0||ue,Xe=ce.length>0;return J?io?e.jsxs("section",{className:"block practice-hub-block",children:[e.jsxs("div",{className:"practice-hub-top",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"lesson-mini-kicker",children:[e.jsx(ze,{size:13})," Practica centralizada"]}),e.jsx("h2",{className:"lesson-heading",children:"Practicar con tus lecciones"}),e.jsx("p",{className:"lesson-text",children:"Practica grande estilo SpanishDict: banco amplio, rondas largas, y feedback inmediato."})]}),e.jsxs("button",{className:"lesson-mini-reset",onClick:za,children:[e.jsx(wt,{size:13}),"Nueva ronda"]})]}),e.jsx("div",{className:"practice-level-grid compact",children:Le.map(v=>e.jsxs("button",{className:`practice-level-card ${v.ready?"":"empty"} ${r===v.level?"active":""}`.trim(),onClick:()=>Sa(v.level),children:[e.jsx("span",{className:"practice-level-tag",children:v.level}),e.jsxs("strong",{children:[v.lessonCount," lecciones"]}),e.jsxs("span",{children:[v.grammarCount," preguntas gramatica"]})]},v.level))}),e.jsxs("div",{className:"practice-hub-toolbar",children:[e.jsxs("label",{className:"practice-hub-field",children:[e.jsx("span",{children:"Leccion"}),e.jsx("select",{value:M?.id||"",onChange:v=>p(v.target.value),disabled:!Xe,children:ce.map(v=>e.jsxs("option",{value:v.id,children:[v.chapter.title," (",v.pairCount,")"]},v.id))})]}),e.jsxs("label",{className:"practice-hub-field",children:[e.jsx("span",{children:"Alcance"}),e.jsxs("select",{value:u,onChange:v=>w(v.target.value),disabled:!Xe,children:[e.jsx("option",{value:"lesson",children:"Solo esta leccion"}),e.jsx("option",{value:"section",children:"Toda la seccion"}),e.jsx("option",{value:"all",children:"Todo el libro"})]})]}),e.jsxs("label",{className:"practice-hub-field",children:[e.jsx("span",{children:"Cantidad"}),e.jsxs("select",{value:g,onChange:v=>j(Number(v.target.value)||20),children:[e.jsx("option",{value:10,children:"10 preguntas"}),e.jsx("option",{value:20,children:"20 preguntas"}),e.jsx("option",{value:30,children:"30 preguntas"})]})]}),e.jsxs("div",{className:"practice-hub-modes",role:"tablist","aria-label":"Quiz format",children:[e.jsx("button",{className:d==="multiple-choice"?"active":"",onClick:()=>h("multiple-choice"),children:"Multiple choice"}),e.jsx("button",{className:d==="typing"?"active":"",disabled:!Xe,onClick:()=>h("typing"),children:"Escribir"}),e.jsx("button",{className:d==="listening"?"active":"",disabled:!Xe,onClick:()=>h("listening"),children:"Escuchar"})]})]}),e.jsxs("div",{className:"practice-hub-source-line",children:[e.jsx("strong",{children:Qe}),e.jsx("span",{children:Go}),e.jsx("span",{className:"practice-hub-pool",children:Xe?`${Me.length} pares disponibles`:"Solo gramatica de nivel"}),ue&&e.jsxs("span",{className:"practice-hub-pool",children:[ha," preguntas importadas"]})]}),d==="multiple-choice"&&e.jsxs("div",{className:"lesson-mini-quiz practice-mc",children:[!je.length&&e.jsx("p",{className:"lesson-text",children:"No hay preguntas multiple choice para este filtro. Cambia nivel o alcance."}),e.jsx("div",{className:"lesson-mini-list",children:je.map((v,T)=>{const D=y[T],ie=D&&ee(D)===ee(v.answer);return e.jsxs("div",{className:"lesson-mini-card",children:[e.jsxs("div",{className:"lesson-mini-meta",children:[e.jsx("span",{children:String(T+1).padStart(2,"0")}),e.jsx("em",{children:v.mode}),e.jsx(re,{text:v.speak})]}),e.jsx("p",{className:"lesson-mini-prompt",children:v.prompt}),e.jsx("div",{className:"lesson-mini-choices",children:v.choices.map(ne=>{const Se=D===ne,Pe=Se?ie?"correct":"wrong":"";return e.jsx("button",{className:`${Se?"active":""} ${Pe}`.trim(),onClick:()=>Ba(T,ne,v.answer),children:ne},ne)})}),D&&!ie&&e.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",e.jsx("strong",{children:v.answer})]}),D&&v.explanation&&e.jsx("div",{className:"lesson-mini-answer",children:v.explanation})]},`${v.prompt}-${T}`)})}),e.jsxs("div",{className:"lesson-mini-footer",children:[e.jsxs("span",{children:[Object.keys(y).length," / ",je.length," respondidas"]}),e.jsx("button",{className:"lesson-mini-check",disabled:je.length===0||Object.keys(y).length<je.length,onClick:()=>{L(!0),ia("multiple-choice",na,je.length,je)},children:"Comprobar"}),S&&e.jsxs("strong",{children:[na," / ",je.length]})]})]}),d==="typing"&&e.jsxs("div",{className:"practice-typing-shell",children:[!Q&&qe&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"quiz-progress",children:[e.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",_+1," de ",sa]}),e.jsx("div",{className:"quiz-progress-bar",children:e.jsx("div",{className:"quiz-progress-fill",style:{width:`${_/sa*100}%`}})})]}),e.jsxs("div",{className:"quiz-question",children:[e.jsx("div",{className:"quiz-tense-label",children:qe.mode}),e.jsx("div",{className:"quiz-prompt",children:qe.prompt}),e.jsx("div",{className:"quiz-instruction",children:qe.tip})]}),e.jsxs("form",{className:"quiz-form",onSubmit:Fa,children:[e.jsx("input",{value:R,onChange:v=>O(v.target.value),className:`quiz-input ${ae||""}`,placeholder:"Escribe tu respuesta...",autoComplete:"off"}),ae?e.jsxs("div",{className:`quiz-feedback ${ae}`,children:[ae==="correct"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"quiz-feedback-icon",children:e.jsx(To,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:"quiz-feedback-title",children:"Correcto"}),e.jsx("div",{className:"quiz-feedback-answer",children:qe.answer})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"quiz-feedback-icon",children:e.jsx(Je,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),e.jsxs("div",{className:"quiz-feedback-answer",children:["Respuesta: ",qe.answer]})]})]}),e.jsx(re,{text:qe.speak,size:"md",className:"quiz-feedback-speak"})]}):e.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!R.trim(),children:"Comprobar"})]}),ae&&e.jsx("div",{className:"quiz-score-line",children:e.jsx("button",{className:"quiz-next-btn",onClick:Ae,children:_+1>=sa?"Ver resultado":"Siguiente"})})]}),!Q&&!qe&&e.jsx("p",{className:"lesson-text",children:"No hay ejercicios de escritura para este nivel. Prueba multiple choice o cambia nivel."}),Q&&e.jsxs("div",{className:"quiz-results",children:[e.jsxs("div",{className:"quiz-results-circle",children:[e.jsxs("div",{className:"quiz-results-pct",children:[ra,"%"]}),e.jsxs("div",{className:"quiz-results-fraction",children:[F," / ",sa]})]}),e.jsx("h3",{className:"quiz-results-title",children:"Sesion completada"}),e.jsx("p",{className:"quiz-results-msg",children:ra>=85?"Excelente control. Puedes marcar esta leccion como dominada.":ra>=65?"Buen progreso. Repite una ronda mas para fijarlo.":"Haz otra ronda corta para consolidar."}),e.jsx("div",{className:"quiz-results-actions",children:e.jsx("button",{className:"quiz-retry-btn",onClick:za,children:"Repetir"})})]})]}),d==="listening"&&e.jsxs("div",{className:"lesson-mini-quiz practice-listening",children:[!Ee.length&&e.jsx("p",{className:"lesson-text",children:"No hay ejercicios de escucha para este filtro. Cambia nivel o alcance."}),e.jsx("div",{className:"lesson-mini-list",children:Ee.map((v,T)=>{const D=A[T],ie=D&&ee(D)===ee(v.answer);return e.jsxs("div",{className:"lesson-mini-card",children:[e.jsxs("div",{className:"lesson-mini-meta",children:[e.jsx("span",{children:String(T+1).padStart(2,"0")}),e.jsx("em",{children:"Listening"}),e.jsx(re,{text:v.speak})]}),e.jsx("p",{className:"lesson-mini-prompt",children:v.prompt}),e.jsx("p",{className:"practice-listening-es",children:v.es}),e.jsx("div",{className:"lesson-mini-choices",children:v.choices.map(ne=>{const Se=D===ne,Pe=Se?ie?"correct":"wrong":"";return e.jsx("button",{className:`${Se?"active":""} ${Pe}`.trim(),onClick:()=>Va(T,ne,v.answer),children:ne},ne)})}),D&&!ie&&e.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",e.jsx("strong",{children:v.answer})]})]},`${v.es}-${T}`)})}),e.jsxs("div",{className:"lesson-mini-footer",children:[e.jsxs("span",{children:[Object.keys(A).length," / ",Ee.length," respondidas"]}),e.jsx("button",{className:"lesson-mini-check",disabled:Ee.length===0||Object.keys(A).length<Ee.length,onClick:()=>{V(!0),ia("listening",Ua,Ee.length,Ee)},children:"Comprobar"}),te&&e.jsxs("strong",{children:[Ua," / ",Ee.length]})]})]}),M&&Re&&e.jsxs("div",{className:"lesson-mastery-panel","aria-live":"polite",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Mastery check"}),e.jsx("strong",{children:Oa==="mastered"?"Excelente. Esta leccion esta lista para dominado.":Oa==="strong"?"Buen nivel. Una ronda extra la deja firme.":"Mantener en practica unos dias mas."})]}),e.jsxs("div",{className:"lesson-mastery-actions",children:[e.jsx("button",{className:$a==="practicing"?"active practice":"practice",onClick:()=>n?.(M.chapter.id,"practicing"),children:"Needs practice"}),e.jsx("button",{className:$a==="strong"?"active strong":"strong",onClick:()=>n?.(M.chapter.id,"strong"),children:"Strong"}),e.jsx("button",{className:$a==="mastered"?"active mastered":"mastered",onClick:()=>n?.(M.chapter.id,"mastered"),children:"Mastered"})]})]}),e.jsxs("div",{className:"practice-hub-footer",children:[e.jsxs("div",{className:"practice-hub-links",children:[e.jsx("a",{href:he,target:"_blank",rel:"noreferrer",children:"Abrir en SpanishDict"}),e.jsx("a",{href:Ro,target:"_blank",rel:"noreferrer",children:"Conjugacion en SpanishDict"})]}),le&&e.jsxs("div",{className:"practice-hub-verb",children:[e.jsxs("label",{children:["Drill de conjugacion:",e.jsx("select",{value:le.id,onChange:v=>P(v.target.value),children:I.map(v=>e.jsxs("option",{value:v.id,children:[v.chapterTitle," - ",v.sectionLabel]},v.id))})]}),e.jsx(si,{tenses:le.tenses,verbName:le.chapterTitle})]})]}),pe&&e.jsxs("div",{className:"practice-contextual",children:[e.jsxs("div",{className:"practice-contextual-toolbar",children:[e.jsxs("label",{className:"practice-hub-field",children:[e.jsx("span",{children:"Prueba contextual"}),e.jsx("select",{value:pe.id,onChange:v=>U(v.target.value),children:X.map(v=>e.jsxs("option",{value:v.id,children:[v.block.title," - ",v.chapterTitle]},v.id))})]}),e.jsx("span",{className:"practice-contextual-note",children:pe.sectionLabel})]}),e.jsx(Pi,{block:pe.block})]})]}):e.jsxs("section",{className:"block practice-hub-block",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ze,{size:16}),"Practicar"]}),e.jsx("h2",{className:"lesson-heading",children:"Centro de practica"}),e.jsx("p",{className:"lesson-text",children:"No hay ejercicios disponibles para este nivel todavia. Elige otro nivel."}),e.jsx("div",{className:"practice-level-grid compact",children:Le.map(v=>e.jsxs("button",{className:`practice-level-card ${v.ready?"":"empty"} ${r===v.level?"active":""}`.trim(),onClick:()=>Sa(v.level),children:[e.jsx("span",{className:"practice-level-tag",children:v.level}),e.jsxs("strong",{children:[v.lessonCount," lecciones"]}),e.jsxs("span",{children:[v.grammarCount," preguntas gramatica"]})]},v.level))})]}):e.jsxs("section",{className:"block practice-hub-block",children:[e.jsx("div",{className:"practice-hub-top",children:e.jsxs("div",{children:[e.jsxs("div",{className:"lesson-mini-kicker",children:[e.jsx(ze,{size:13})," Practica por nivel"]}),e.jsx("h2",{className:"lesson-heading",children:"Centro de practica"}),e.jsx("p",{className:"lesson-text",children:"Elige tu nivel para iniciar el test inmediatamente."})]})}),e.jsx("div",{className:"practice-level-grid",children:Le.map(v=>e.jsxs("button",{className:`practice-level-card ${v.ready?"":"empty"}`.trim(),onClick:()=>Sa(v.level),children:[e.jsx("span",{className:"practice-level-tag",children:v.level}),e.jsxs("strong",{children:[v.lessonCount," lecciones"]}),e.jsxs("span",{children:[v.grammarCount," preguntas gramatica"]})]},v.level))})]})}function pi({s:a}){return e.jsxs("div",{className:"gl-section",children:[a.heading&&e.jsx("h3",{className:"gl-heading",children:a.heading}),a.text&&e.jsx("p",{className:"gl-text",children:e.jsx(de,{text:a.text})}),a.table&&e.jsx(Do,{table:a.table,className:"gl-table"}),a.examples&&e.jsx("ul",{className:"gl-examples",children:a.examples.map((t,o)=>e.jsx("li",{children:e.jsx(Ye,{es:t.es,en:t.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},o))}),a.tip&&e.jsxs("aside",{className:"gl-tip",children:[e.jsx(Pa,{size:16,className:"gl-tip-icon"}),e.jsx("p",{children:a.tip})]}),a.takeaway&&e.jsxs("aside",{className:"gl-takeaway",children:[e.jsxs("div",{className:"gl-takeaway-label",children:[e.jsx(yt,{size:12})," Lo que te llevas"]}),e.jsx("p",{children:a.takeaway})]})]})}const mi={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function Ao({level:a}){const t=mi[a]||{};return e.jsx("span",{className:"bio-level-badge",style:{background:t.bg,color:t.color,borderColor:t.border},children:a})}function ro(a,t,o,n){m.useEffect(()=>{a?.type!==t||typeof a.index!="number"||(o(a.index),window.setTimeout(()=>{n.current?.[a.index]?.scrollIntoView?.({behavior:"smooth",block:"start"})},80))},[a,t,o,n])}function ui({poems:a,chapterId:t,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:s}){const[r,i]=m.useState(null),d=oe.useRef([]);ro(s,"poem",i,d);function h(c){i(p=>p===c?null:c)}return e.jsx("section",{className:"block foldable-poems",children:a.map((c,p)=>{const u=r===p,w=We(t,"poem",p,c.title);return e.jsxs("div",{ref:g=>{d.current[p]=g},className:`poem-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"poem-toggle",onClick:()=>h(p),"aria-expanded":u,children:[e.jsxs("div",{className:"poem-toggle-inner",children:[e.jsx("span",{className:"poem-num",children:String(p+1).padStart(2,"0")}),e.jsxs("div",{className:"poem-toggle-text",children:[e.jsx("span",{className:"poem-title-line",children:c.title}),e.jsx("span",{className:"poem-attribution",children:c.attribution})]})]}),e.jsxs("div",{className:"poem-toggle-right",children:[e.jsx("span",{className:"poem-level-tag",children:c.level}),o[w]&&e.jsx("span",{className:`story-status-pill ${o[w]}`,children:Da(o[w])}),e.jsx(to,{size:18,className:`poem-chevron ${u?"open":""}`})]})]}),u&&e.jsxs("div",{className:"poem-body",children:[e.jsx(Ra,{status:o[w],onChange:g=>n?.(w,g)}),c.note&&e.jsx("p",{className:"poem-intro-note",children:c.note}),c.opening&&e.jsxs("blockquote",{className:"poem-opening-quote",children:[e.jsx(re,{text:c.opening,size:"md",className:"poem-quote-speak"}),c.opening]}),e.jsxs("div",{className:"poem-tools",children:[e.jsx(re,{text:c.stanzas.map(g=>g.es).join(". "),size:"md"}),e.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),e.jsx("div",{className:"poem-stanzas",children:c.stanzas.map((g,j)=>e.jsxs("div",{className:"poem-stanza",children:[e.jsx("div",{className:"poem-stanza-num",children:j+1}),e.jsx(no,{text:g.es,paragraphClass:"poem-stanza-es"}),e.jsx("div",{className:"poem-stanza-en",children:g.en})]},j))}),c.vocab&&c.vocab.length>0&&e.jsxs("div",{className:"poem-vocab-block",children:[e.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),e.jsx("div",{className:"poem-vocab-grid",children:c.vocab.map((g,j)=>e.jsxs("div",{className:"poem-vocab-row",children:[e.jsx("span",{className:"poem-vocab-es",children:g.es}),e.jsx("span",{className:"poem-vocab-dash",children:"—"}),e.jsx("span",{className:"poem-vocab-en",children:g.en})]},j))})]}),c.learningNote&&e.jsxs("aside",{className:"poem-learning-note",children:[e.jsxs("div",{className:"poem-learning-label",children:[e.jsx(Pa,{size:14})," Nota de lectura"]}),e.jsx("p",{children:c.learningNote})]})]})]},p)})})}function hi({songs:a,chapterId:t,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:s}){const[r,i]=m.useState(null),d=oe.useRef([]);ro(s,"song",i,d);function h(c){i(p=>p===c?null:c)}return e.jsx("section",{className:"block foldable-poems foldable-songs",children:a.map((c,p)=>{const u=r===p,w=c.sections.map(j=>j.es).join(". "),g=We(t,"song",p,c.title);return e.jsxs("div",{ref:j=>{d.current[p]=j},className:`poem-item song-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"poem-toggle",onClick:()=>h(p),"aria-expanded":u,children:[e.jsxs("div",{className:"poem-toggle-inner",children:[e.jsx("span",{className:"poem-num",children:String(p+1).padStart(2,"0")}),e.jsxs("div",{className:"poem-toggle-text",children:[e.jsx("span",{className:"poem-title-line",children:c.title}),e.jsx("span",{className:"poem-attribution",children:c.attribution})]})]}),e.jsxs("div",{className:"poem-toggle-right",children:[e.jsx("span",{className:"poem-level-tag",children:c.level}),o[g]&&e.jsx("span",{className:`story-status-pill ${o[g]}`,children:Da(o[g])}),e.jsx(to,{size:18,className:`poem-chevron ${u?"open":""}`})]})]}),u&&e.jsxs("div",{className:"poem-body song-body",children:[e.jsx(Ra,{status:o[g],onChange:j=>n?.(g,j)}),e.jsx("p",{className:"poem-intro-note",children:c.note}),e.jsxs("div",{className:"poem-tools",children:[e.jsx(re,{text:w,size:"md"}),e.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),e.jsx("div",{className:"song-sections",children:c.sections.map((j,f)=>e.jsxs("div",{className:"song-section",children:[e.jsxs("div",{className:"song-section-label",children:[String(f+1).padStart(2,"0")," · ",j.label]}),e.jsxs("div",{className:"song-section-grid",children:[e.jsx(no,{text:j.es,paragraphClass:"song-lyric-es"}),e.jsx("p",{className:"song-lyric-en",children:j.en})]})]},j.label))}),c.vocab&&c.vocab.length>0&&e.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[e.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),e.jsx("div",{className:"poem-vocab-grid",children:c.vocab.map((j,f)=>e.jsxs("div",{className:"poem-vocab-row",children:[e.jsx("span",{className:"poem-vocab-es",children:j.es}),e.jsx("span",{className:"poem-vocab-dash",children:"—"}),e.jsx("span",{className:"poem-vocab-en",children:j.en})]},f))})]}),c.learningNote&&e.jsxs("aside",{className:"poem-learning-note",children:[e.jsxs("div",{className:"poem-learning-label",children:[e.jsx(Pa,{size:14})," Nota de canción"]}),e.jsx("p",{children:c.learningNote})]})]})]},c.title)})})}function gi({bios:a,chapterId:t,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:s}){const[r,i]=m.useState(null),d=oe.useRef([]);ro(s,"bio",i,d);function h(c){i(p=>p===c?null:c)}return e.jsx("section",{className:"block foldable-bios",children:a.map((c,p)=>{const u=r===p,w=We(t,"bio",p,c.title);return e.jsxs("div",{ref:g=>{d.current[p]=g},className:`bio-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"bio-toggle",onClick:()=>h(p),"aria-expanded":u,children:[e.jsxs("div",{className:"bio-toggle-left",children:[e.jsx("span",{className:"bio-num",children:String(p+1).padStart(2,"0")}),e.jsxs("div",{className:"bio-toggle-text",children:[e.jsx("span",{className:"bio-name",children:c.title}),e.jsx("span",{className:"bio-subtitle-line",children:c.subtitle}),e.jsx("span",{className:"bio-dates",children:c.dates})]})]}),e.jsxs("div",{className:"bio-toggle-right",children:[e.jsxs("div",{className:"bio-level-pills",children:[[...new Set(c.levels.map(g=>g.level))].map(g=>e.jsx(Ao,{level:g},g)),o[w]&&e.jsx("span",{className:`story-status-pill ${o[w]}`,children:Da(o[w])})]}),e.jsx(to,{size:18,className:`bio-chevron ${u?"open":""}`})]})]}),u&&e.jsxs("div",{className:"bio-body",children:[e.jsx(Ra,{status:o[w],onChange:g=>n?.(w,g)}),c.levels.map((g,j)=>e.jsxs("div",{className:"bio-section",children:[e.jsxs("div",{className:"bio-section-header",children:[e.jsx(Ao,{level:g.level}),e.jsx("h3",{className:"bio-section-title",children:g.heading}),e.jsx(re,{text:g.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),g.paragraphs.map((f,N)=>e.jsx(no,{text:f,paragraphClass:"bio-paragraph"},N)),g.vocab&&e.jsxs("div",{className:"bio-vocab",children:[e.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),g.vocab]})]},j))]})]},p)})})}function fi({lessons:a,chapterId:t,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:s}){const[r,i]=m.useState(null),d=oe.useRef([]);ro(s,"grammar",i,d);function h(c){i(p=>p===c?null:c)}return e.jsx("section",{className:"block foldable-grammar",children:a.map((c,p)=>{const u=r===p,w=We(t,"grammar",p,c.title);return e.jsxs("div",{ref:g=>{d.current[p]=g},className:`gl-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"gl-toggle",onClick:()=>h(p),"aria-expanded":u,"touch-action":"manipulation",children:[e.jsx("span",{className:"gl-num",children:String(p+1).padStart(2,"0")}),e.jsx("span",{className:"gl-level-badge",children:c.level}),e.jsxs("div",{className:"gl-toggle-text",children:[e.jsx("span",{className:"gl-title",children:c.title}),e.jsx("span",{className:"gl-subtitle",children:c.subtitle})]}),o[w]&&e.jsx("span",{className:`gl-status-pill ${o[w]}`,children:Da(o[w])}),e.jsx(to,{size:18,className:`gl-chevron ${u?"open":""}`})]}),u&&e.jsxs("div",{className:"gl-body",children:[e.jsx(Ra,{status:o[w],onChange:g=>n?.(w,g)}),c.intro&&e.jsx("p",{className:"gl-intro",children:c.intro}),c.sections.map((g,j)=>e.jsx(pi,{s:g},j))]})]},p)})})}function bi({stories:a,chapterId:t,lessonStatuses:o={},onLessonStatusChange:n,activeNestedTarget:s}){const[r,i]=m.useState(null),d=oe.useRef([]);ro(s,"story",i,d);function h(c){i(p=>p===c?null:c)}return e.jsx("section",{className:"block foldable-stories",children:a.map((c,p)=>{const u=r===p,w=We(t,"story",p,c.title);return e.jsxs("div",{ref:g=>{d.current[p]=g},className:`story-item ${u?"open":"closed"}`,children:[e.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>h(p),"aria-expanded":u,children:[e.jsxs("div",{className:"bio-toggle-left",children:[e.jsx("span",{className:"bio-num",children:String(p+1).padStart(2,"0")}),e.jsxs("div",{className:"bio-toggle-text",children:[e.jsx("span",{className:"bio-name",children:c.title}),e.jsxs("span",{className:"bio-subtitle-line",children:[c.paragraphs.length," párrafos · lectura con audio"]})]})]}),e.jsxs("div",{className:"bio-toggle-right",children:[e.jsxs("div",{className:"bio-level-pills",children:[e.jsx(Ao,{level:c.level}),o[w]&&e.jsx("span",{className:`story-status-pill ${o[w]}`,children:Da(o[w])})]}),e.jsx(to,{size:18,className:`bio-chevron ${u?"open":""}`})]})]}),u&&e.jsx("div",{className:"bio-body story-body",children:e.jsxs("div",{className:"bio-section story-section",children:[e.jsxs("div",{className:"bio-section-header",children:[e.jsx(Ao,{level:c.level}),e.jsx("h3",{className:"bio-section-title",children:c.title}),e.jsx(re,{text:c.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),e.jsx(Ra,{status:o[w],onChange:g=>n?.(w,g)}),c.paragraphs.map((g,j)=>e.jsx(no,{text:g,paragraphClass:"bio-paragraph story-paragraph"},j))]})})]},p)})})}const bn="palabras-progress-v1";function Dn(a,t){return`${a}::${t.rank}::${t.spanish}`}function gt(a,t){return t.sourceGroupId||a.id}function Co(a,t){return Dn(gt(a,t),t)}function Aa(a){return String(a).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const xi=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function vi(a){const t=new Map;for(const o of a||[])for(const n of o.entries||[]){const s=Aa(n.spanish);t.has(s)||t.set(s,{...n,sourceGroupId:o.id,sourceGroupTitle:o.title})}return xi.map(o=>{const n=new Set,s=o.terms.map((r,i)=>{const d=Aa(r.spanish);if(n.has(d))return null;n.add(d);const h=t.get(d),c=r.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...h||{rank:`T${i+1}`,spanish:c,english:r.english,sourceGroupId:o.id,sourceGroupTitle:o.title},topicTerm:r.spanish,topicEnglish:r.english,topicOrder:i+1}}).filter(Boolean);return{id:o.id,title:o.title,description:o.description,entries:s,isTopic:!0}})}function He(a){return a.topicTerm||a.spanish}function Ea(a){return a.topicEnglish||a.english}let dt=null;function ft(){return dt||(dt=De(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(a=>{const t=a.default||[];return[...t,...vi(t)]})),dt}function Gn(a,t,o=Date.now()){return Ar(a,t,o)}function yi(a,t,o=Date.now()){const n={total:0,seen:0,due:0,mastered:0,byGroup:{}},s=new Set;for(const r of a||[]){const i={total:r.entries.length,seen:0,due:0,mastered:0};for(const d of r.entries){const h=Co(r,d),c=t[h],p=s.has(h);p||(s.add(h),n.total++),c?.seen&&(i.seen++,p||n.seen++,c.mastered&&(i.mastered++,p||n.mastered++),(c.dueAt||0)<=o&&(i.due++,p||n.due++))}n.byGroup[r.id]=i}return n}function xn(a,t){const o=a.spanish.split(",")[0].trim();return t==="topic-work-professions"?{es:`En mi trabajo uso "${o}" con frecuencia.`,en:`At work I use "${o}" often.`}:t==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${o}" con calma.`,en:`Today I can name "${o}" calmly.`}:t==="function-words"?{es:`Uso "${o}" para unir una idea con otra.`,en:`"${o}" helps connect one idea to another.`}:/^to /.test(a.english)?{es:`Hoy necesito ${o} en una frase clara.`,en:`Today I need "${o}" in a clear sentence.`}:{es:`Escribo "${o}" en mi cuaderno de espanol.`,en:`"${o}" means ${Ea(a)}.`}}function wi({onSaveWord:a,savedWords:t=[],progress:o={},onProgressChange:n,onUpdateSavedWord:s}){const[r,i]=m.useState(null),[d,h]=m.useState(""),[c,p]=m.useState(""),[u,w]=m.useState(0),[g,j]=m.useState({}),[f,N]=m.useState(!1),[y,k]=m.useState(!1),[S,L]=m.useState(!1),[_,G]=m.useState(0),[R,O]=m.useState(!1);m.useEffect(()=>{let I=!0;return ft().then(X=>{I&&(i(X),h(M=>M||X[0]?.id||""))}),()=>{I=!1}},[]);const ae=!r,z=r?.find(I=>I.id===d)||r?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},F=m.useMemo(()=>{const I=Aa(c),X=I?z.entries.filter(le=>[le.spanish,le.english,le.topicTerm,le.topicEnglish,String(le.rank)].some(pe=>Aa(pe||"").includes(I))):z.entries;if(!y)return X;const M=Date.now();return X.filter(le=>{const pe=o[Co(z,le)];return pe?.seen&&(pe.dueAt||0)<=M})},[z,c,y,o]),H=24,Q=Math.min(u,Math.max(0,F.length-1)),W=F.slice(Q,Q+H),A=W.map(I=>He(I)).join(". "),te=m.useMemo(()=>yi(r||[],o),[r,o]).byGroup[z.id]||{total:z.entries.length,seen:0,due:0,mastered:0},V=74,x=420,P=Math.max(0,Math.floor(_/V)-4),$=Math.min(F.length,P+Math.ceil(x/V)+10),U=F.slice(P,$);if(m.useEffect(()=>{w(0),j({}),G(0)},[d,c,y]),ae)return e.jsx("section",{className:"block palabras-lab",children:e.jsxs("div",{className:"palabras-empty",children:[e.jsx(ze,{size:24}),e.jsx("p",{children:"Cargando palabras..."})]})});function K(){w(I=>I+H>=F.length?0:I+H),j({})}function J(){const I=Math.max(0,F.length-H);w(Math.floor(Math.random()*(I+1))),j({})}function Le(I){const X=`${z.id}-${I.rank}-${I.spanish}`;j(M=>({...M,[X]:!M[X]}))}function ve(I,X){const M=gt(z,I),le=Dn(M,I),pe=Gn(o[le],X),ke={...o,[le]:{...pe,groupId:M,displayGroupId:z.id,topicId:z.isTopic?z.id:void 0,spanish:He(I),english:Ea(I),rank:I.rank}};n?.(ke),j(fe=>({...fe,[`${z.id}-${I.rank}-${I.spanish}`]:!0}));const Me=t.find(fe=>Aa(fe.word)===Aa(He(I)));Me?s?.(Me.word,{review:pe,difficult:X==="hard"||X==="again"?!0:Me.difficult}):(X==="hard"||X==="again")&&a?.({word:He(I),translation:Ea(I),pos:z.isTopic?`${z.title} topic`:z.title,extras:[`Rank ${I.rank}`,z.description].filter(Boolean),tags:["palabras",z.id,M,"difficult"].filter(Boolean),review:pe,difficult:!0,savedAt:Date.now()})}function ue(){if(!W.length)return;if(jt(),R){window.speechSynthesis?.cancel(),O(!1);return}const I=W.flatMap(X=>{const M=xn(X,z.id);return[He(X),M.es,He(X)]});O(!0),zn(I.join(". "),{onend:()=>O(!1),onerror:()=>O(!1)})}function ce(I){const X=gt(z,I),M=z.isTopic&&I.sourceGroupTitle?`Source ${I.sourceGroupTitle}`:null;a?.({word:He(I),translation:Ea(I),pos:z.isTopic?`${z.title} topic`:z.title,extras:[`Rank ${I.rank}`,z.description,M].filter(Boolean),tags:["palabras",z.id,X].filter(Boolean),savedAt:Date.now()})}return e.jsxs("section",{className:"block palabras-lab",children:[e.jsxs("div",{className:"palabras-toolbar",children:[e.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:r.map(I=>e.jsxs("button",{className:`palabras-tab ${I.id===z.id?"active":""}`,onClick:()=>h(I.id),role:"tab","aria-selected":I.id===z.id,children:[e.jsx("span",{children:I.title.replace(/^Group /,"G")}),e.jsx("strong",{children:I.entries.length})]},I.id))}),e.jsxs("label",{className:"palabras-search",children:[e.jsx("span",{children:"Buscar"}),e.jsx("input",{value:c,onChange:I=>p(I.target.value),placeholder:"palabra, meaning, rank..."})]})]}),e.jsxs("div",{className:"palabras-stage",children:[e.jsxs("div",{className:"palabras-stage-copy",children:[e.jsx("div",{className:"palabras-stage-kicker",children:z.isTopic?"Tema integrado":"Grupo intacto"}),e.jsx("h2",{children:z.title}),e.jsx("p",{children:z.description})]}),e.jsxs("div",{className:"palabras-stage-stats",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Mostrando"}),e.jsx("strong",{children:W.length})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Filtradas"}),e.jsx("strong",{children:F.length})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Entrada"}),e.jsx("strong",{children:F.length?Q+1:0})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Vencidas"}),e.jsx("strong",{children:te.due})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Vistas"}),e.jsx("strong",{children:te.seen})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Dominadas"}),e.jsx("strong",{children:te.mastered})]})]})]}),e.jsxs("div",{className:"palabras-actions",children:[e.jsx(re,{text:A,size:"md",className:"palabras-read-btn"}),e.jsx("button",{className:`palabras-action-btn ${R?"active":""}`,onClick:ue,children:R?"Escuchando...":"Escucha activa"}),e.jsx("button",{className:`palabras-action-btn ${y?"active":""}`,onClick:()=>k(I=>!I),children:y?"Todas":"Vencidas"}),e.jsx("button",{className:"palabras-action-btn",onClick:()=>N(I=>!I),children:f?"Ocultar ingles":"Mostrar ingles"}),e.jsx("button",{className:"palabras-action-btn",onClick:K,children:"Siguiente ronda"}),e.jsx("button",{className:"palabras-action-btn",onClick:J,children:"Barajar"}),e.jsx("button",{className:`palabras-action-btn ${S?"active":""}`,onClick:()=>L(I=>!I),children:"Lista completa"})]}),W.length?e.jsx("div",{className:"palabras-grid",children:W.map(I=>{const X=`${z.id}-${I.rank}-${I.spanish}`,M=f||g[X],le=o[Co(z,I)],pe=xn(I,z.id);return e.jsxs("article",{className:`palabra-card ${M?"revealed":""}`,children:[e.jsxs("button",{className:"palabra-main",onClick:()=>Le(I),children:[e.jsxs("span",{className:"palabra-rank",children:["#",I.rank]}),e.jsx("span",{className:"palabra-es",children:He(I)}),e.jsx("span",{className:"palabra-en",children:M?Ea(I):"..."}),M&&e.jsxs("span",{className:"palabra-example",children:[e.jsx("span",{children:pe.es}),e.jsx("em",{children:pe.en})]})]}),e.jsxs("div",{className:"palabra-card-actions",children:[e.jsx(re,{text:He(I)}),e.jsxs("button",{className:"palabra-save",onClick:()=>ce(I),children:[e.jsx(wa,{size:13}),"Memoria"]})]}),e.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(ke=>e.jsx("button",{onClick:()=>ve(I,ke),children:ke==="again"?"Again":ke==="hard"?"Hard":ke==="good"?"Good":"Easy"},ke))}),le?.seen&&e.jsx("div",{className:"palabra-review-state",children:le.mastered?"Dominada":`Due ${new Date(le.dueAt||Date.now()).toLocaleDateString()}`})]},X)})}):e.jsxs("div",{className:"palabras-empty",children:[e.jsx(ze,{size:24}),e.jsx("p",{children:"No words match this search in the selected group."})]}),S&&e.jsxs("div",{className:"palabras-browser",children:[e.jsxs("div",{className:"palabras-browser-head",children:[e.jsx("span",{children:"Lista virtual"}),e.jsxs("strong",{children:[F.length," palabras"]})]}),e.jsx("div",{className:"palabras-virtual-list",style:{height:x},onScroll:I=>G(I.currentTarget.scrollTop),children:e.jsx("div",{style:{height:F.length*V,position:"relative"},children:e.jsx("div",{style:{transform:`translateY(${P*V}px)`},children:U.map(I=>{const X=o[Co(z,I)];return e.jsxs("div",{className:"palabras-virtual-row",style:{height:V},children:[e.jsxs("span",{className:"palabra-rank",children:["#",I.rank]}),e.jsx("strong",{children:He(I)}),e.jsx("span",{children:Ea(I)}),e.jsx("button",{onClick:()=>ve(I,"good"),children:X?.seen?"Actualizar":"Visto"})]},`${I.rank}-${I.spanish}`)})})})})]})]})}function Ra({status:a,onChange:t}){const o=_a(a),n=Po(a),s=a==="mastered";function r(){t?.(a==="read"?null:"read")}function i(){t?.(a==="understood"?"read":"understood")}function d(){t?.(a==="mastered"?"understood":"mastered")}return e.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[e.jsx("span",{className:"lesson-status-label",children:"Estado"}),e.jsxs("button",{className:`lesson-status-btn read ${o?"active":""}`,onClick:r,children:[e.jsx(Io,{size:14}),"Leído"]}),e.jsxs("button",{className:`lesson-status-btn understood ${n?"active":""}`,onClick:i,children:[e.jsx(To,{size:14}),"Entendido"]}),e.jsxs("button",{className:`lesson-status-btn mastery ${s?"active":""}`,onClick:d,children:[e.jsx(ze,{size:14}),"Dominado"]})]})}function ki({chapter:a,sectionId:t,section:o,activeNestedTarget:n,onOpenSection:s,onSaveWord:r,savedWords:i=[],onUpdateSavedWord:d,palabrasProgress:h,onPalabrasProgressChange:c,lessonStatuses:p={},onLessonStatusChange:u,practiceChapters:w=[],onPracticeAttempt:g}){const j=a.blocks.some(f=>f.type==="foldable-grammar"||f.type==="foldable-stories"||f.type==="foldable-bios"||f.type==="foldable-poems"||f.type==="foldable-songs");return e.jsxs("article",{className:"chapter-body",children:[e.jsxs("header",{className:"chapter-header",children:[o&&e.jsxs("div",{className:"lesson-breadcrumb",children:[e.jsx("button",{type:"button",onClick:()=>s?.(o),children:o.label}),e.jsx(Ge,{size:14}),e.jsx("span",{children:n?.title||a.title})]}),e.jsxs("div",{className:"chapter-icon-row",children:[t&&e.jsx("div",{className:"chapter-icon-wrap",children:e.jsx(zo,{id:t,size:22})}),e.jsxs("div",{className:"chapter-level-tag",children:[a.rank?`Nº ${String(a.rank).padStart(2,"0")} · `:"","Nivel ",a.level]})]}),e.jsx("h1",{className:"chapter-title",children:a.title}),a.subtitle&&e.jsx("p",{className:"chapter-subtitle",children:a.subtitle}),!j&&e.jsx(Ra,{status:p[a.id],onChange:f=>u?.(a.id,f)}),e.jsx("div",{className:"chapter-rule"})]}),a.intro&&e.jsx("p",{className:"chapter-intro drop-cap",children:e.jsx(de,{text:a.intro})}),a.blocks.map((f,N)=>{switch(f.type){case"tense-atlas":return e.jsx(ji,{block:f},N);case"indicative-hero":return e.jsx(zi,{block:f},N);case"indicative-tense-cards":return e.jsx(Si,{block:f},N);case"participio-section":return e.jsx(Ci,{block:f},N);case"indicative-timeline":return e.jsx(Ii,{block:f},N);case"conjugation":return e.jsxs("section",{className:"block",children:[e.jsx("h2",{className:"block-heading",children:f.title}),e.jsx("div",{className:"conjugation-grid",children:f.verbs.map((y,k)=>e.jsxs("div",{className:"conjugation-card",children:[e.jsx("div",{className:"conjugation-verb",children:y.name}),e.jsx("ul",{className:"conjugation-list",children:y.forms.map((S,L)=>e.jsx("li",{children:S},L))})]},k))})]},N);case"examples":return e.jsxs("section",{className:"block",children:[e.jsx("h2",{className:"block-heading",children:f.title}),e.jsx("ul",{className:"examples-list",children:f.pairs.map((y,k)=>e.jsx("li",{className:"example-item",children:e.jsx(Ye,{es:y.es,en:y.en,esClass:"example-es",enClass:"example-en"})},k))})]},N);case"rule":return e.jsx("section",{className:"block",children:e.jsx("dl",{className:"rule-list",children:f.items.map((y,k)=>e.jsxs("div",{className:"rule-row",children:[e.jsx("dt",{children:y.label}),e.jsx("dd",{children:y.value})]},k))})},N);case"reading":return e.jsx("section",{className:"block reading-block",children:f.paragraphs.map((y,k)=>e.jsx(no,{text:y,paragraphClass:"reading-paragraph"},k))},N);case"lazy-loading":return e.jsxs("section",{className:"block lazy-loading-block",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ze,{size:16}),"Loading lesson pack"]}),e.jsx("h2",{className:"lesson-heading",children:f.heading}),e.jsx("p",{className:"lesson-text",children:f.text})]},N);case"foldable-poems":return e.jsx(ui,{poems:f.poems,chapterId:a.id,lessonStatuses:p,onLessonStatusChange:u,activeNestedTarget:n},N);case"foldable-songs":return f.lazySongsKey&&!f.songs?.length?e.jsxs("section",{className:"block lazy-loading-block",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ze,{size:16})," Loading canciones"]}),e.jsx("p",{className:"lesson-text",children:"Preparing the songbook..."})]},N):e.jsx(hi,{songs:f.songs,chapterId:a.id,lessonStatuses:p,onLessonStatusChange:u,activeNestedTarget:n},N);case"foldable-bios":return e.jsx(gi,{bios:f.bios,chapterId:a.id,lessonStatuses:p,onLessonStatusChange:u,activeNestedTarget:n},N);case"foldable-grammar":return e.jsx(fi,{lessons:f.lessons,chapterId:a.id,lessonStatuses:p,onLessonStatusChange:u,activeNestedTarget:n},N);case"foldable-stories":return e.jsx(bi,{stories:f.stories,chapterId:a.id,lessonStatuses:p,onLessonStatusChange:u,activeNestedTarget:n},N);case"glossary":return e.jsxs("section",{className:"block",children:[e.jsxs("h2",{className:"block-heading",children:[e.jsx(Ta,{size:16,className:"inline-icon"})," Glosario"]}),e.jsx("div",{className:"glossary-grid",children:f.words.map((y,k)=>e.jsxs("div",{className:"glossary-row",children:[e.jsx("span",{className:"glossary-es",children:y.es}),e.jsx("span",{className:"glossary-dash",children:"—"}),e.jsx("span",{className:"glossary-en",children:y.en})]},k))})]},N);case"vocab":return e.jsx("section",{className:"block",children:e.jsx("div",{className:"vocab-grid",children:f.columns.map((y,k)=>e.jsxs("div",{className:"vocab-row",children:[e.jsx(re,{text:y.es}),e.jsx("span",{className:"vocab-es",children:y.es}),e.jsx("span",{className:"vocab-en",children:y.en})]},k))})},N);case"vocab-lab":return e.jsx(wi,{onSaveWord:r,savedWords:i,progress:h,onProgressChange:c,onUpdateSavedWord:d},N);case"practice-hub":return e.jsx(ci,{chapter:a,practiceChapters:w,lessonStatuses:p,onLessonStatusChange:u,onPracticeAttempt:g},N);case"phraselist":return e.jsx("section",{className:"block",children:e.jsx("ul",{className:"phrase-list",children:f.phrases.map((y,k)=>e.jsxs("li",{className:"phrase-item",children:[e.jsx("span",{className:"phrase-num",children:String(k+1).padStart(2,"0")}),e.jsxs("div",{className:"phrase-content",children:[e.jsxs("p",{className:"phrase-es",children:[e.jsx(re,{text:y.es,className:"paragraph-speak"}),e.jsx(de,{text:y.es})]}),e.jsx("p",{className:"phrase-en",children:y.en})]})]},k))})},N);case"expressions-library":return f.lazyLibraryKey&&!f.library?.groups?e.jsxs("section",{className:"block lazy-loading-block",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(ze,{size:16})," Loading expresiones"]}),e.jsx("p",{className:"lesson-text",children:"Preparing the expression library..."})]},N):e.jsx(_i,{library:f.library},N);case"steps":return e.jsx("section",{className:"block",children:e.jsx("ol",{className:"steps-list",children:f.steps.map((y,k)=>e.jsxs("li",{className:"step-item",children:[e.jsx("div",{className:"step-num",children:k+1}),e.jsxs("div",{children:[e.jsx("h3",{className:"step-title",children:y.title}),e.jsx("p",{className:"step-text",children:y.text})]})]},k))})},N);case"big-takeaways":return e.jsx("section",{className:"block",children:e.jsx("div",{className:"big-takeaways",children:f.items.map((y,k)=>e.jsxs("div",{className:"big-takeaway-card",children:[e.jsx("div",{className:"big-takeaway-num",children:y.n}),e.jsx("h3",{className:"big-takeaway-title",children:y.title}),e.jsx("p",{className:"big-takeaway-text",children:y.text})]},k))})},N);case"tip":return e.jsxs("aside",{className:"block tip-block",children:[e.jsx(Pa,{size:18,className:"tip-icon"}),e.jsx("p",{children:f.text})]},N);case"takeaway":return e.jsxs("aside",{className:"block takeaway-block",children:[e.jsxs("div",{className:"takeaway-label",children:[e.jsx(yt,{size:14})," Lo que te llevas"]}),e.jsx("p",{children:f.text})]},N);case"verb-table":{const y=Object.fromEntries(f.tenses.map(S=>[S.name,S])),k=f.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return e.jsxs("section",{className:"block verb-table-block",children:[f.participles&&e.jsxs("div",{className:"participles",children:[e.jsx("div",{className:"participles-label",children:"Participios"}),e.jsxs("div",{className:"participles-rows",children:[e.jsxs("div",{className:"participles-row",children:[e.jsx("span",{className:"participles-key",children:"Presente"}),e.jsx("span",{className:"participles-val",children:e.jsx(we,{raw:f.participles.present})})]}),e.jsxs("div",{className:"participles-row",children:[e.jsx("span",{className:"participles-key",children:"Pasado"}),e.jsx("span",{className:"participles-val",children:e.jsx(we,{raw:f.participles.past})})]})]})]}),e.jsx("div",{className:"verb-table-header",children:e.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",e.jsxs("em",{children:['"',a.title.toLowerCase(),'"']})]})}),e.jsxs("table",{className:"tense-reader-table","aria-label":`Indicativo de ${a.title}`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Pronombre"}),f.tenses.map(S=>e.jsx("th",{scope:"col",children:S.name},S.name))]})}),e.jsx("tbody",{children:f.tenses[0]?.forms.map((S,L)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"tg-pronoun",children:f.tenses[0].forms[L].p}),f.tenses.map(_=>e.jsx("td",{className:"tg-form",children:e.jsx(we,{raw:_.forms[L].f})},_.name))]},L))})]}),e.jsx("div",{className:"tense-stack",children:k.map((S,L)=>{const _=S.map(G=>y[G]).filter(Boolean);if(_.length===0)return null;if(_.length===1){const G=_[0];return e.jsxs("div",{className:"tense-block",children:[e.jsxs("div",{className:"tense-name-row",children:[e.jsx("h3",{className:"tense-name",children:G.name}),e.jsx(re,{text:G.forms.map(R=>`${R.p} ${ea(R.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),e.jsx("div",{className:"tense-rows",children:G.forms.map((R,O)=>e.jsxs(oe.Fragment,{children:[e.jsx("span",{className:"tense-pronoun",children:R.p}),e.jsxs("span",{className:"tense-form",children:[e.jsx(we,{raw:R.f}),e.jsx(re,{text:ea(R.f),className:"conjugation-speak"})]})]},O))})]},L)}return e.jsxs(oe.Fragment,{children:[e.jsxs("table",{className:`tense-group-table tense-group-count-${_.length}`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{"aria-hidden":"true"}),_.map((G,R)=>e.jsx("th",{scope:"col",children:e.jsxs("div",{className:"tg-th-inner",children:[e.jsx("span",{children:G.name}),e.jsx(re,{text:G.forms.map(O=>`${O.p} ${ea(O.f)}`).join(". ")})]})},R))]})}),e.jsx("tbody",{children:_[0].forms.map((G,R)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"tg-pronoun",children:_[0].forms[R].p}),_.map((O,ae)=>e.jsxs("td",{className:"tg-form",children:[e.jsx(we,{raw:O.forms[R].f}),e.jsx(re,{text:ea(O.forms[R].f),className:"conjugation-speak"})]},ae))]},R))})]}),e.jsx("div",{className:"tense-mobile-stack",children:_.map(G=>e.jsxs("article",{className:"tense-mobile-card",children:[e.jsxs("div",{className:"tense-mobile-head",children:[e.jsx("h3",{children:G.name}),e.jsx(re,{text:G.forms.map(R=>`${R.p} ${ea(R.f)}`).join(". "),size:"md"})]}),e.jsx("div",{className:"tense-mobile-rows",children:G.forms.map(R=>e.jsxs("div",{className:"tense-mobile-row",children:[e.jsx("span",{className:"tense-mobile-pronoun",children:R.p}),e.jsxs("span",{className:"tense-mobile-form",children:[e.jsx(we,{raw:R.f}),e.jsx(re,{text:ea(R.f),className:"conjugation-speak"})]})]},`${G.name}-${R.p}`))})]},G.name))})]},L)})}),e.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",e.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},N)}case"verb-uses":return e.jsxs("section",{className:"block verb-uses-block",children:[f.heading&&e.jsx("h2",{className:"verb-uses-heading",children:f.heading}),f.categories.map((y,k)=>e.jsxs("div",{className:"vu-category",children:[e.jsxs("div",{className:"vu-category-head",children:[e.jsx("div",{className:"vu-category-label",children:y.label}),y.note&&e.jsx("div",{className:"vu-category-note",children:y.note})]}),e.jsx("div",{className:"vu-senses",children:y.senses.map((S,L)=>e.jsxs("div",{className:"vu-sense",children:[e.jsx("div",{className:"vu-sense-num",children:S.n}),e.jsxs("div",{className:"vu-sense-body",children:[e.jsx("div",{className:"vu-sense-meaning",children:S.meaning}),S.subnote&&e.jsx("div",{className:"vu-sense-subnote",children:S.subnote}),e.jsx("ul",{className:"vu-examples",children:S.examples.map((_,G)=>e.jsx("li",{children:e.jsx(Ye,{es:_.es,en:_.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},G))})]})]},L))})]},k))]},N);case"subjunctive-hero":return e.jsx(Ei,{block:f},N);case"golden-rule":return e.jsx(qi,{block:f},N);case"subjunctive-tense-cards":return e.jsx(Ai,{cards:f.cards},N);case"trigger-grid":return e.jsx(Ti,{block:f},N);case"conditional-pattern":return e.jsx(Li,{block:f},N);case"tips-grid":return e.jsx(Mi,{tips:f.tips},N);case"choice-quiz":return null;case"lesson-section":return e.jsxs("section",{className:"block lesson-section",children:[f.heading&&e.jsx("h2",{className:"lesson-heading",children:f.heading}),f.text&&e.jsx("p",{className:"lesson-text",children:e.jsx(de,{text:f.text})}),f.paragraphs&&f.paragraphs.map((y,k)=>e.jsx("p",{className:"lesson-text",children:e.jsx(de,{text:y})},k)),f.table&&e.jsx(Do,{table:f.table}),f.examples&&e.jsx("ul",{className:"lesson-examples",children:f.examples.map((y,k)=>e.jsx("li",{children:e.jsx(Ye,{es:y.es,en:y.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},k))})]},N);default:return null}})]})}function ji({block:a}){return e.jsxs("section",{className:"block tense-atlas-block",children:[a.eras.map((t,o)=>e.jsxs("section",{className:`tense-era-section ${t.tone}`,children:[e.jsxs("header",{className:"tense-era-header",children:[e.jsx("div",{className:"tense-era-number",children:String(o+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("span",{children:t.label}),e.jsx("h3",{children:t.title}),e.jsx("p",{children:e.jsx(de,{text:t.description})})]})]}),e.jsx("div",{className:"tense-atlas-cards",children:t.tenses.map((n,s)=>e.jsx(Ni,{tense:n,eraTone:t.tone,number:String(s+1).padStart(2,"0")},n.id))})]},t.id)),a.comparison&&e.jsxs("section",{className:"tense-atlas-comparison",children:[e.jsxs("div",{className:"tense-atlas-comparison-copy",children:[e.jsx("span",{children:"Comparación esencial"}),e.jsx("h3",{children:a.comparison.title}),e.jsx("p",{children:e.jsx(de,{text:a.comparison.text})}),e.jsx("div",{className:"tense-atlas-example",children:e.jsx(Ye,{es:a.comparison.example.es,en:a.comparison.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})})]}),e.jsx(Do,{table:a.comparison.table,className:"tense-atlas-table"})]})]})}function Ni({tense:a,eraTone:t,number:o}){return e.jsxs("article",{id:a.id,className:`tense-atlas-card ${t}`,children:[e.jsxs("header",{className:"tense-atlas-card-head",children:[e.jsx("div",{className:"tense-atlas-card-number",children:o}),e.jsxs("div",{children:[e.jsx("span",{children:a.mood}),e.jsx("h4",{children:a.title}),e.jsxs("p",{children:[a.english,a.alias?` - ${a.alias}`:""]})]})]}),e.jsx("div",{className:"tense-atlas-formula",children:a.formula}),e.jsx("p",{className:"tense-atlas-use",children:e.jsx(de,{text:a.use})}),e.jsx("div",{className:"tense-atlas-example",children:e.jsx(Ye,{es:a.example.es,en:a.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})}),a.signals&&e.jsxs("div",{className:"tense-atlas-signals",children:[e.jsx("strong",{children:"Señales"}),e.jsx("span",{children:a.signals})]}),a.notes?.length>0&&e.jsx("ul",{className:"tense-atlas-notes",children:a.notes.map(n=>e.jsx("li",{children:e.jsx(de,{text:n})},n))}),e.jsx(Do,{table:a.table,className:"tense-atlas-table"})]})}function zi({block:a}){return e.jsxs("section",{className:"block indicative-hero-block",children:[e.jsx("div",{className:"indicative-eyebrow",children:a.eyebrow}),e.jsx("h2",{children:a.title}),e.jsx("p",{children:e.jsx(de,{text:a.text})}),e.jsx("div",{className:"indicative-formula",children:a.formula.map((t,o)=>e.jsx("span",{className:t==="+"||t==="="?"operator":"",children:t},`${t}-${o}`))}),e.jsx("div",{className:"indicative-tags",children:a.tags.map(t=>e.jsx("span",{children:t},t))})]})}function Si({block:a}){const[t,o]=m.useState(0);return e.jsxs("section",{className:"block indicative-tense-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.title}),e.jsx("div",{className:"indicative-card-grid",children:a.cards.map((n,s)=>e.jsxs("article",{className:`indicative-card ${n.tone} ${t===s?"active":""}`,onClick:()=>o(s),children:[e.jsxs("header",{className:"indicative-card-head",children:[e.jsx("div",{className:"indicative-card-mark",children:String(s+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:n.title}),e.jsx("p",{children:n.english})]})]}),e.jsx("p",{className:"indicative-card-use",children:e.jsx(de,{text:n.use})}),e.jsx("table",{className:"indicative-conj-table",children:e.jsx("tbody",{children:n.forms.map(([r,i])=>e.jsxs("tr",{children:[e.jsx("td",{children:r}),e.jsx("td",{children:e.jsx(we,{raw:i})})]},`${n.title}-${r}`))})}),e.jsx("div",{className:"indicative-example",children:e.jsx(Ye,{es:n.example.es,en:n.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})})]},n.title))})]})}function Ci({block:a}){return e.jsxs("section",{className:"block participle-workshop-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.title}),e.jsx("p",{className:"lesson-text",children:e.jsx(de,{text:a.text})}),e.jsxs("div",{className:"participle-workshop-grid",children:[e.jsxs("article",{children:[e.jsx("h3",{children:"Participios regulares"}),e.jsx("table",{children:e.jsx("tbody",{children:a.regular.map(([t,o])=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:e.jsx(we,{raw:o})})]},`${t}-${o}`))})})]}),e.jsxs("article",{children:[e.jsx("h3",{children:"Participios irregulares"}),e.jsx("table",{children:e.jsx("tbody",{children:a.irregular.map(([t,o])=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:e.jsx(we,{raw:o})})]},`${t}-${o}`))})})]})]})]})}function Ii({block:a}){return e.jsxs("section",{className:"block indicative-timeline-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.title}),e.jsx("div",{className:"indicative-timeline-wrap",children:e.jsx("div",{className:"indicative-timeline-line",children:a.events.map(t=>e.jsxs("div",{className:`indicative-timeline-event ${t.lane} ${t.tone}`,style:{left:`${t.position}%`},children:[e.jsx("span",{className:"timeline-dot"}),e.jsx("strong",{children:t.label}),e.jsx("em",{children:t.sub})]},t.label))})})]})}function Ei({block:a}){return e.jsxs("section",{className:"block subj-hero-block",children:[e.jsx("div",{className:"subj-hero-eyebrow",children:a.eyebrow}),e.jsx("h2",{children:a.title}),e.jsx("p",{className:"subj-hero-accent",children:a.accent}),e.jsx("div",{className:"subj-hero-formula",children:a.formula}),e.jsx("ul",{children:a.points.map(t=>e.jsx("li",{children:e.jsx(de,{text:t})},t))})]})}function qi({block:a}){return e.jsxs("section",{className:"block golden-rule-block",children:[e.jsx("div",{className:"golden-rule-label",children:a.title}),e.jsx("p",{children:e.jsx(de,{text:a.text})}),e.jsx("div",{className:"golden-rule-examples",children:a.examples.map((t,o)=>e.jsxs("div",{className:"golden-rule-pair",children:[e.jsxs("div",{children:[e.jsx("span",{children:"No"}),e.jsx(we,{raw:t.bad})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Sí"}),e.jsx(we,{raw:t.good})]})]},o))})]})}function Ai({cards:a}){const[t,o]=m.useState(0);return e.jsxs("section",{className:"block subj-tense-block",children:[e.jsx("div",{className:"subj-tense-tabs",children:a.map((n,s)=>e.jsxs("button",{className:`${n.tone} ${t===s?"active":""}`,onClick:()=>o(s),children:[e.jsx("span",{children:s+1}),n.title]},n.title))}),e.jsxs("div",{className:`subj-tense-card ${a[t].tone}`,children:[e.jsxs("div",{className:"subj-tense-head",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a[t].title}),e.jsx("p",{children:a[t].english})]}),e.jsx("span",{children:a[t].mainClause})]}),e.jsx("div",{className:"subj-tense-formula",children:e.jsx(we,{raw:a[t].formula})}),e.jsx("p",{className:"subj-tense-use",children:e.jsx(de,{text:a[t].use})}),e.jsxs("div",{className:"subj-tense-grid",children:[e.jsx("table",{children:e.jsx("tbody",{children:a[t].forms.map(([n,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:e.jsx(we,{raw:s})})]},`${n}-${s}`))})}),e.jsx("div",{className:"subj-tense-examples",children:a[t].examples.map(n=>e.jsx("div",{children:e.jsx(Ye,{es:n.es,en:n.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},n.es))})]})]})]})}function Ti({block:a}){return e.jsxs("section",{className:"block trigger-grid-block",children:[e.jsx("h2",{className:"lesson-heading",children:a.heading}),e.jsx("p",{className:"lesson-text",children:e.jsx(de,{text:a.text})}),e.jsx("div",{className:"trigger-grid",children:a.categories.map(t=>e.jsxs("article",{className:"trigger-card",children:[e.jsx("h3",{children:t.title}),e.jsx("div",{className:"trigger-expression",children:t.trigger}),t.examples.map(o=>e.jsx("div",{className:"trigger-example",children:e.jsx(Ye,{es:o.es,en:o.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},o.es))]},t.title))})]})}function Li({block:a}){return e.jsxs("section",{className:"block conditional-pattern-block",children:[e.jsx("h2",{children:a.heading}),e.jsx("div",{className:"conditional-formula",children:e.jsx(we,{raw:a.formula})}),e.jsx("p",{children:e.jsx(de,{text:a.text})}),e.jsx("div",{className:"conditional-examples",children:a.examples.map((t,o)=>e.jsxs("article",{children:[e.jsx("div",{className:"conditional-num",children:String(o+1).padStart(2,"0")}),e.jsx(Ye,{es:t.es,en:t.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"}),e.jsx("p",{children:t.note})]},t.es))})]})}function Mi({tips:a}){return e.jsx("section",{className:"block tips-grid-block",children:a.map(t=>e.jsxs("article",{className:"subj-tip-card",children:[e.jsx(Pa,{size:18}),e.jsx("h3",{children:t.title}),e.jsx("p",{children:e.jsx(de,{text:t.text})})]},t.title))})}function Pi({block:a}){const[t,o]=m.useState({}),[n,s]=m.useState(!1),r=a.questions.reduce((d,h,c)=>ee(t[c])===ee(h.answer)?d+1:d,0);function i(){o({}),s(!1)}return e.jsxs("section",{className:"block contextual-quiz-block",children:[e.jsxs("div",{className:"contextual-quiz-head",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"lesson-mini-kicker",children:[e.jsx(ze,{size:13})," Prueba contextual"]}),e.jsx("h2",{children:a.title})]}),e.jsxs("button",{onClick:i,children:[e.jsx(wt,{size:14}),"Reiniciar"]})]}),e.jsx("div",{className:"contextual-quiz-list",children:a.questions.map((d,h)=>{const c=t[h],p=c&&ee(c)===ee(d.answer);return e.jsxs("article",{className:`contextual-quiz-card ${c?p?"correct":"wrong":""}`,children:[e.jsx("div",{className:"contextual-quiz-num",children:String(h+1).padStart(2,"0")}),e.jsx("p",{children:d.prompt}),e.jsx("div",{className:"contextual-quiz-choices",children:d.choices.map(u=>e.jsx("button",{className:c===u?"active":"",onClick:()=>{const w=ee(u)===ee(d.answer);So(w?"correct":"incorrect"),o(g=>({...g,[h]:u}))},children:u},u))}),c&&e.jsxs("div",{className:"contextual-quiz-feedback",children:[e.jsx("strong",{children:p?"Correcto.":`Correcto: ${d.answer}.`}),e.jsx("span",{children:d.explanation})]})]},d.prompt)})}),e.jsxs("div",{className:"contextual-quiz-score",children:[e.jsxs("span",{children:[Object.keys(t).length," / ",a.questions.length," respondidas"]}),e.jsx("button",{onClick:()=>s(!0),children:"Ver resultado"}),n&&e.jsxs("strong",{children:[r," / ",a.questions.length]})]})]})}function _i({library:a}){const[t,o]=m.useState(""),[n,s]=m.useState(0),r=50;function i(g){return String(g||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"")}function d(g){const j=String(g||"").normalize("NFD").match(/[\u0300-\u036f]/g);return j?j.length:0}const h=m.useMemo(()=>{const g=Array.isArray(a?.groups)?a.groups:[],j=[];g.forEach((k,S)=>{(k.entries||[]).forEach((L,_)=>{j.push({...L,groupId:k.id,groupTitle:k.title,groupTone:k.tone,groupIndex:S,entryIndex:_,orderKey:S*1e4+(Number(L.rank)||0)*10+_})})}),j.sort((k,S)=>k.groupIndex-S.groupIndex||(Number(k.rank)||0)-(Number(S.rank)||0)||k.entryIndex-S.entryIndex);const f=new Map;j.forEach((k,S)=>{const L=i(k.es);f.has(L)||f.set(L,{familyKey:L,firstIndex:S,entries:[]}),f.get(L).entries.push(k)});const N=[...f.values()].sort((k,S)=>k.firstIndex-S.firstIndex),y=[];return N.forEach(k=>{k.entries.sort((S,L)=>(Number(S.rank)||0)-(Number(L.rank)||0)||d(S.es)-d(L.es)||String(S.es).localeCompare(String(L.es),"es",{sensitivity:"base"})),y.push(...k.entries)}),y.map((k,S)=>({...k,globalRank:S+1}))},[a]),c=m.useMemo(()=>{const g=ee(t.trim());return g?h.filter(j=>ee(j.es).includes(g)||ee(j.en).includes(g)||ee(j.example).includes(g)||ee(j.exampleEn).includes(g)):h},[h,t]),p=Math.max(1,Math.ceil(c.length/r)),u=Math.min(n,p-1),w=c.slice(u*r,(u+1)*r);return m.useEffect(()=>{s(0)},[t]),e.jsxs("section",{className:"block expressions-library-block expressions-lines-block",children:[e.jsxs("div",{className:"expressions-hero",children:[e.jsx("div",{className:"expressions-eye",children:a.eyebrow}),e.jsx("h2",{children:a.title}),e.jsx("p",{children:"All 648 expressions are now in one sequence from most-used to less-used. Similar forms (including accent variants) stay together."}),e.jsxs("div",{className:"expressions-stats",children:[e.jsxs("div",{children:[e.jsx("strong",{children:h.length}),e.jsx("span",{children:"Total expressions"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:r}),e.jsx("span",{children:"Per page"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:u+1}),e.jsx("span",{children:"Current page"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:p}),e.jsx("span",{children:"Total pages"})]})]})]}),e.jsxs("div",{className:"expressions-toolbar",children:[e.jsxs("label",{children:[e.jsx(mt,{size:14}),e.jsx("input",{value:t,onChange:g=>o(g.target.value),placeholder:"Search expression, meaning, or example..."})]}),e.jsxs("div",{className:"expressions-count",children:[c.length," ",c.length===1?"expression":"expressions"," found"]}),e.jsxs("div",{className:"expressions-pager",children:[e.jsx("button",{disabled:u===0,onClick:()=>s(g=>Math.max(0,g-1)),children:"Prev 50 expressions"}),e.jsxs("span",{children:[u+1," / ",p]}),e.jsx("button",{disabled:u>=p-1,onClick:()=>s(g=>Math.min(p-1,g+1)),children:"Next 50 expressions"})]})]}),w.length>0?e.jsx("div",{className:"expressions-lines",children:w.map(g=>{const j=`${g.groupId}-${g.rank}-${g.es}`;return e.jsx("article",{className:"expression-line-item",children:e.jsxs("div",{className:"expression-line-main",children:[e.jsxs("span",{className:"expression-rank",children:["#",g.globalRank]}),e.jsxs("div",{className:"expression-line-text",children:[e.jsxs("p",{className:"expression-line-head",children:[e.jsx(re,{text:g.es}),e.jsx("strong",{children:e.jsx(fn,{text:g.es,query:t})}),e.jsx("span",{className:"expression-line-eq",children:"="}),e.jsx("em",{children:e.jsx(eo,{text:g.en,query:t})})]}),g.example&&e.jsxs("div",{className:"expression-line-example-wrap",children:[e.jsxs("p",{className:"expression-line-example",children:[e.jsx("span",{className:"expression-line-example-label",children:"Ejemplo"})," ",e.jsx(re,{text:g.example}),e.jsx(fn,{text:g.example,query:t})]}),g.exampleEn&&e.jsx("p",{className:"expression-line-example-en",children:e.jsx(eo,{text:g.exampleEn,query:t})})]})]})]})},j)})}):e.jsxs("div",{className:"expressions-empty",children:[e.jsx(mt,{size:24}),"No expressions found. Try a different search."]}),e.jsxs("div",{className:"expressions-pager expressions-pager-bottom",children:[e.jsx("button",{disabled:u===0,onClick:()=>s(g=>Math.max(0,g-1)),children:"Prev 50 expressions"}),e.jsxs("span",{children:[u+1," / ",p]}),e.jsx("button",{disabled:u>=p-1,onClick:()=>s(g=>Math.min(p-1,g+1)),children:"Next 50 expressions"})]}),e.jsx("div",{className:"expressions-foot",children:a.sourceNote})]})}function Di({savedWords:a,onSave:t,onRemove:o}){const[n,s]=m.useState(null),[r,i]=m.useState([]),d=oe.useRef(null),h=oe.useRef(a),c=oe.useRef(r),p=Nt,u=qn;function w(z,F){const H=String(z||"").replace(/\s+/g," ").trim(),Q=p(F);return!H||!Q?"":((H.match(/[^.!?Â¡Â¿]+[.!?]?/g)||[H]).find(Y=>p(Y).includes(Q))||H).trim().slice(0,220)}function g(z,F){const H=z?.closest?.(".reading-paragraph, .lesson-text, .gl-text, .bio-paragraph, .poem-stanza-es, .song-lyric-es, .lesson-ex-es, .gl-ex-es, .example-es, .phrase-es, .vocab-es, article, section");return w(H?.innerText||H?.textContent||z?.textContent||"",F)}const[j,f]=m.useState(null);if(m.useEffect(()=>{h.current=a},[a]),m.useEffect(()=>{c.current=r},[r]),m.useEffect(()=>{let z=!0;return ft().then(F=>{z&&i(F)}).catch(()=>{z&&i([])}),()=>{z=!1}},[]),m.useEffect(()=>{let z="";async function F(A,Y,te,V=""){const x=p(A);if(!x||x.length<2)return;f(null);let P=Xt(x,h.current,c.current);if(!P&&c.current.length===0)try{const $=await ft();c.current=$,i($),P=Xt(x,h.current,$)}catch{}if(P){s({word:P.matchedWord||x,x:Y,y:te,context:V,loading:!1,result:P,error:!1});return}s({word:x,x:Y,y:te,context:V,loading:!0,result:null,error:!1});try{const $=await u(x);s(U=>U&&U.word===x?{...U,loading:!1,result:$,error:!$}:U)}catch{s(U=>U&&U.word===x?{...U,loading:!1,error:!0}:U)}}function H(A){const Y=A.target.closest&&A.target.closest("[data-dict-word]");if(!Y)return;const te=p(Y.dataset.dictWord||Y.textContent||"");if(!te||te.length<2)return;const V=window.getSelection?.();if(V&&!V.isCollapsed&&p(V.toString()).length>1)return;A.stopPropagation();const x=Y.getBoundingClientRect(),P=x.left+x.width/2,$=x.bottom+10;F(te,P,$,g(Y,te))}function Q(){clearTimeout(Q._t),Q._t=setTimeout(()=>{const A=window.getSelection(),Y=A?.toString()||"",te=p(Y);if(!te||te.length<2||te.split(/\s+/).length>3){z&&f(null),z="";return}if(te===z)return;z=te;let V=window.innerWidth/2,x=120;try{const K=A.getRangeAt(0).getBoundingClientRect();V=K.left+K.width/2,x=K.top-6}catch{}const P=96;V=Math.max(P/2+8,Math.min(V,window.innerWidth-P/2-8)),x<50&&(x=50);let $="";try{const U=A.getRangeAt(0),K=U.commonAncestorContainer?.nodeType===1?U.commonAncestorContainer:U.commonAncestorContainer?.parentElement;$=g(K,te)}catch{}f({word:te,x:V,y:x,context:$})},200)}function W(A){const Y=d.current&&d.current.contains(A.target),te=A.target.closest&&A.target.closest(".dict-floating-btn"),V=A.target.closest&&A.target.closest("[data-dict-word]");!Y&&!te&&!V&&(s(null),f(null),z="")}return window.__bookOpenPopup=F,document.addEventListener("selectionchange",Q),document.addEventListener("pointerup",H),document.addEventListener("pointerdown",W),()=>{document.removeEventListener("selectionchange",Q),document.removeEventListener("pointerup",H),document.removeEventListener("pointerdown",W),delete window.__bookOpenPopup}},[]),!n&&!j)return null;if(!n&&j)return e.jsxs("button",{className:"dict-floating-btn",style:{left:j.x,top:j.y},onClick:z=>{z.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(j.word,j.x,j.y+50,j.context)},onPointerDown:z=>z.stopPropagation(),children:[e.jsx(Ta,{size:14}),e.jsx("span",{children:"Traducir"})]});const N=290,y=Math.max(N/2+8,Math.min(n.x,window.innerWidth-N/2-8)),k=n.y+220>window.innerHeight,S=k?"auto":n.y,L=k?Math.max(12,window.innerHeight-n.y+12):"auto",_=new Set(Mo(n.word)),G=Te(n.word),R=a.find(z=>Te(z.word)===G)||a.find(z=>_.has(qo(z.word))),O=!!R;function ae(){O?o(R.word):t({word:n.word,translation:n.result?.main||"",pos:n.result?.pos||"",extras:n.result?.extras||[],context:n.context||"",contexts:n.context?[n.context]:[],savedAt:Date.now()})}return e.jsxs("div",{ref:d,className:"dict-popup",style:{left:y,top:S==="auto"?"auto":S,bottom:L==="auto"?"auto":L},children:[e.jsxs("div",{className:"dict-header",children:[e.jsx("span",{className:"dict-word",children:n.word}),e.jsx("button",{className:"dict-close-btn",onClick:()=>s(null),"aria-label":"Close",children:e.jsx(Je,{size:14})})]}),e.jsxs("div",{className:"dict-body",children:[n.loading&&e.jsxs("div",{className:"dict-loading",children:[e.jsx("span",{className:"dict-spinner"}),e.jsx("span",{children:"Looking up…"})]}),!n.loading&&n.error&&e.jsxs("div",{className:"dict-fallback",children:[e.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),e.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(n.word)}`,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(Ta,{size:14}),'Buscar "',n.word,'" en SpanishDict']})]}),!n.loading&&n.result&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`dict-main-translation ${n.result.isDefinition?"is-definition":""}`,children:n.result.main}),n.context&&e.jsxs("div",{className:"dict-context",children:[e.jsx("span",{children:"Contexto"}),e.jsx("em",{children:n.context})]}),n.result.extras?.length>0&&e.jsx("div",{className:"dict-extras",children:n.result.extras.map((z,F)=>e.jsx("span",{className:"dict-extra-tag",children:z},F))}),n.result.meanings?.length>0&&e.jsx("ul",{className:"dict-meanings",children:n.result.meanings.map((z,F)=>e.jsx("li",{className:"dict-meaning-item",children:z},F))}),n.result.examples?.length>0&&e.jsxs("div",{className:"dict-examples",children:[e.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),n.result.examples.map((z,F)=>e.jsxs("div",{className:"dict-example",children:[e.jsx("div",{className:"dict-example-es",children:z.es}),e.jsx("div",{className:"dict-example-en",children:z.en})]},F))]})]})]}),!n.loading&&e.jsxs("button",{className:`dict-save-btn ${O?"saved":""}`,onClick:ae,"aria-label":O?"Remove from Memoria":"Save to Memoria",children:[e.jsx(wa,{size:14,className:O?"filled":""}),O?"Guardado en Memoria ✓":n.result?"Guardar en Memoria":"Guardar palabra"]}),e.jsx("div",{className:"dict-footer",children:e.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(n.word)}`,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(Ta,{size:12}),"Ver en SpanishDict"]})})]})}function Gi({savedWords:a,onRemove:t,onClear:o,onUpdateWord:n}){const[s,r]=m.useState({}),[i,d]=m.useState("grid"),[h,c]=m.useState(""),[p,u]=m.useState("ALL"),[w,g]=m.useState("ALL"),[j,f]=m.useState(0),[N,y]=m.useState(!1),[k,S]=m.useState(""),[L,_]=m.useState(null);function G(x){r(P=>({...P,[x]:!P[x]}))}function R(x){_({type:"word",word:x})}function O(){_({type:"clear"})}function ae(){L?.type==="word"&&t?.(L.word),L?.type==="clear"&&o?.(),_(null)}const z=[...a].sort((x,P)=>{const $=x.review?.seen&&(x.review?.dueAt||0)<=Date.now(),U=P.review?.seen&&(P.review?.dueAt||0)<=Date.now();return $!==U?$?-1:1:P.savedAt-x.savedAt}),F=m.useMemo(()=>{const x=new Set;for(const P of z)Qa(P).forEach($=>x.add($));return[...x].sort()},[z]),H=m.useMemo(()=>{const x=h.trim().toLowerCase();return z.filter(P=>{const $=Qa(P),U=P.review?.seen&&(P.review?.dueAt||0)<=Date.now(),K=p==="ALL"||$.includes(p),J=w==="ALL"||w==="due"&&U||w==="difficult"&&P.difficult||w==="favorite"&&P.favorite||w==="mastered"&&P.review?.mastered,Le=!x||P.word.toLowerCase().includes(x)||(P.translation||"").toLowerCase().includes(x)||$.some(ve=>ve.toLowerCase().includes(x));return K&&J&&Le})},[z,h,p,w]),Q=H[j%Math.max(1,H.length)],W=m.useMemo(()=>Mn(z),[z]);m.useEffect(()=>{f(0),y(!1)},[h,p,w,a.length]);function A(x){const P=k.trim().toLowerCase().replace(/\s+/g,"-");if(!P)return;const $=a.find(K=>K.word===x),U=Array.from(new Set([...$?.tags||[],P]));n?.(x,{tags:U}),S("")}function Y(x,P){const $=a.find(U=>U.word===x);n?.(x,{[P]:!$?.[P]})}function te(x,P){const $=a.find(K=>K.word===x),U=Gn($?.review,P);n?.(x,{review:U,difficult:P==="hard"?!0:$?.difficult}),V()}function V(){f(x=>(x+1)%Math.max(1,H.length)),y(!1)}return z.length===0?e.jsxs("div",{className:"memoria-empty",children:[e.jsx(wa,{size:36,className:"memoria-empty-icon"}),e.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),e.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",e.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):e.jsxs("article",{className:"chapter-body memoria-view",children:[e.jsxs("header",{className:"chapter-header",children:[e.jsx("div",{className:"chapter-meta",children:e.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),e.jsx("h1",{className:"chapter-title",children:"Memoria"}),e.jsxs("p",{className:"chapter-subtitle",children:[z.length," ",z.length===1?"palabra guardada":"palabras guardadas"]}),e.jsx("p",{className:"chapter-intro",children:i==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),e.jsxs("div",{className:"memoria-summary-strip",children:[e.jsxs("span",{children:[e.jsx(ao,{size:13})," ",W.due," due"]}),e.jsxs("span",{children:[e.jsx(bo,{size:13})," ",W.favorite," favoritas"]}),e.jsxs("span",{children:[e.jsx(xo,{size:13})," ",W.difficult," dificiles"]}),e.jsxs("span",{children:[e.jsx(To,{size:13})," ",W.mastered," dominadas"]})]}),e.jsx("div",{className:"memoria-focus-board","aria-label":"Memoria focus filters",children:[{key:"ALL",label:"All cards",detail:`${z.length} saved`},{key:"due",label:"Due now",detail:`${W.due} to review`},{key:"difficult",label:"Difficult",detail:`${W.difficult} need examples`},{key:"favorite",label:"Favorites",detail:`${W.favorite} important`},{key:"mastered",label:"Mastered",detail:`${W.mastered} stable`}].map(x=>e.jsxs("button",{className:w===x.key?"active":"",onClick:()=>{g(x.key),(x.key==="due"||x.key==="difficult")&&d("review")},children:[e.jsx("strong",{children:x.label}),e.jsx("span",{children:x.detail})]},x.key))}),e.jsxs("div",{className:"memoria-view-toggle",children:[e.jsx("button",{className:`memoria-view-btn ${i==="grid"?"active":""}`,onClick:()=>d("grid"),children:"Tarjetas"}),e.jsx("button",{className:`memoria-view-btn ${i==="list"?"active":""}`,onClick:()=>d("list"),children:"Lista"}),e.jsx("button",{className:`memoria-view-btn ${i==="review"?"active":""}`,onClick:()=>d("review"),children:"Repaso"})]}),e.jsxs("div",{className:"memoria-tools",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Buscar"}),e.jsx("input",{value:h,onChange:x=>c(x.target.value),placeholder:"palabra, translation, tag..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Etiqueta"}),e.jsxs("select",{value:p,onChange:x=>u(x.target.value),children:[e.jsx("option",{value:"ALL",children:"Todas"}),F.map(x=>e.jsx("option",{value:x,children:x},x))]})]}),e.jsx("button",{className:"memoria-tool-btn",onClick:()=>Gr(H),children:"Export CSV"})]}),i==="review"?e.jsx("div",{className:"memoria-review",children:Q?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:`memoria-review-card ${N?"flipped":""}`,onClick:()=>y(x=>!x),children:[e.jsx("span",{className:"memoria-review-count",children:H.length?`${j+1} / ${H.length}`:"0 / 0"}),e.jsx("strong",{children:N?Q.translation||"Sin traduccion":Q.word}),e.jsx("em",{children:N?Q.word:"toca para revelar"})]}),e.jsxs("div",{className:"memoria-review-actions",children:[e.jsx(re,{text:Q.word,size:"md"}),e.jsx("input",{value:k,onChange:x=>S(x.target.value),placeholder:"add-tag"}),e.jsx("button",{onClick:()=>A(Q.word),children:"Tag"}),e.jsxs("button",{onClick:()=>Y(Q.word,"favorite"),children:[e.jsx(bo,{size:13}),Q.favorite?"Unfavorite":"Favorite"]}),e.jsxs("button",{onClick:()=>Y(Q.word,"difficult"),children:[e.jsx(xo,{size:13}),Q.difficult?"Not hard":"Difficult"]}),e.jsx("button",{onClick:V,children:"Siguiente"})]}),e.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(x=>e.jsx("button",{onClick:()=>te(Q.word,x),children:x==="again"?"Again":x==="hard"?"Hard":x==="good"?"Good":"Easy"},x))})]}):e.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):i==="grid"?e.jsx("div",{className:"memoria-grid",children:H.map(x=>{const P=s[x.word],$=x.pending,U=Qa(x);return e.jsxs("div",{className:`memoria-card ${P?"flipped":""}`,onClick:()=>G(x.word),children:[e.jsxs("div",{className:"memoria-card-inner",children:[e.jsxs("div",{className:"memoria-face front",children:[e.jsx("div",{className:"memoria-word",children:x.word}),x.pos&&e.jsx("div",{className:"memoria-pos",children:x.pos}),x.translation?e.jsx("div",{className:"memoria-front-translation",children:x.translation}):$?e.jsxs("div",{className:"memoria-front-pending",children:[e.jsx("span",{className:"dict-spinner"}),e.jsx("span",{children:"traduciendo…"})]}):e.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),U.length>0&&e.jsx("div",{className:"memoria-tags",children:U.slice(0,3).map(K=>e.jsx("span",{children:K},K))}),e.jsxs("div",{className:"memoria-label-actions",children:[e.jsx("button",{className:x.favorite?"active":"",onClick:K=>{K.stopPropagation(),Y(x.word,"favorite")},"aria-label":"Toggle favorite",children:e.jsx(bo,{size:12})}),e.jsx("button",{className:x.difficult?"active hard":"",onClick:K=>{K.stopPropagation(),Y(x.word,"difficult")},"aria-label":"Toggle difficult",children:e.jsx(xo,{size:12})})]})]}),e.jsxs("div",{className:"memoria-face back",children:[x.translation?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"memoria-translation",children:x.translation}),x.extras?.length>0&&e.jsx("div",{className:"memoria-extras",children:x.extras.slice(0,3).map((K,J)=>e.jsx("span",{className:"memoria-extra-tag",children:K},J))}),(x.context||x.contexts?.[0])&&e.jsx("div",{className:"memoria-context",children:x.context||x.contexts[0]})]}):e.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),e.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(x.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:K=>K.stopPropagation(),children:"SpanishDict →"})]})]}),e.jsx("button",{className:"memoria-remove",onClick:K=>{K.stopPropagation(),R(x.word)},"aria-label":`Remove ${x.word}`,children:e.jsx(Je,{size:13})})]},x.word)})}):e.jsx("div",{className:"memoria-list",children:H.map(x=>{const P=x.pending,$=Qa(x);return e.jsxs("div",{className:"memoria-list-row",children:[e.jsxs("div",{className:"memoria-list-main",children:[e.jsxs("div",{className:"memoria-list-es",children:[e.jsx("span",{className:"memoria-list-word",children:x.word}),x.pos&&e.jsx("span",{className:"memoria-list-pos",children:x.pos})]}),x.translation?e.jsx("div",{className:"memoria-list-en",children:x.translation}):P?e.jsxs("div",{className:"memoria-list-en pending",children:[e.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):e.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),x.extras?.length>0&&e.jsx("div",{className:"memoria-list-extras",children:x.extras.slice(0,4).map((U,K)=>e.jsx("span",{className:"memoria-list-extra-tag",children:U},K))}),$.length>0&&e.jsx("div",{className:"memoria-list-extras",children:$.map(U=>e.jsx("span",{className:"memoria-list-extra-tag",children:U},U))}),(x.context||x.contexts?.[0])&&e.jsx("div",{className:"memoria-list-context",children:x.context||x.contexts[0]})]}),e.jsxs("div",{className:"memoria-list-actions",children:[e.jsx("button",{className:`memoria-list-remove ${x.favorite?"active-label":""}`,onClick:()=>Y(x.word,"favorite"),"aria-label":"Toggle favorite",children:e.jsx(bo,{size:14})}),e.jsx("button",{className:`memoria-list-remove ${x.difficult?"active-hard":""}`,onClick:()=>Y(x.word,"difficult"),"aria-label":"Toggle difficult",children:e.jsx(xo,{size:14})}),e.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(x.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:e.jsx(Ta,{size:14})}),e.jsx("button",{className:"memoria-list-remove",onClick:()=>R(x.word),"aria-label":`Remove ${x.word}`,children:e.jsx(Je,{size:14})})]})]},x.word)})}),z.length>0&&e.jsx("div",{className:"memoria-actions",children:e.jsx("button",{className:"memoria-clear-btn",onClick:O,children:"Borrar todo"})}),L&&e.jsx("div",{className:"memoria-confirm-overlay",role:"dialog","aria-modal":"true","aria-label":"Confirm Memoria deletion",children:e.jsxs("div",{className:"memoria-confirm-card",children:[e.jsx("div",{className:"memoria-confirm-kicker",children:"Confirmar"}),e.jsx("h3",{children:L.type==="word"?`Remove "${L.word}"?`:"Remove all Memoria words?"}),e.jsx("p",{children:L.type==="word"?"This word will leave your saved cards, review queue, and list.":"This clears every saved word in Memoria for this browser."}),e.jsxs("div",{className:"memoria-confirm-actions",children:[e.jsx("button",{className:"memoria-confirm-cancel",onClick:()=>_(null),children:"Keep it"}),e.jsx("button",{className:"memoria-confirm-danger",onClick:ae,children:L.type==="word"?"Remove word":"Clear all"})]})]})})]})}function Ri({savedWords:a,chapters:t,entries:o=[],onEntriesChange:n}){const[s,r]=m.useState(0),[i,d]=m.useState("");async function h(g){n?.(g);try{await window.storage.set(ht,JSON.stringify(g))}catch{}}const c=m.useMemo(()=>{const g=a.slice(0,8).map(f=>({label:`Usa "${f.word}"`,text:`Write 2 Spanish sentences using "${f.word}".`,target:f.word})),j=t.slice(0,6).map(f=>({label:f.title,text:`Write a short Spanish paragraph about "${f.title}".`,target:""}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:""},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:""},...g,...j]},[a,t]),p=c[s]||c[0],u=m.useMemo(()=>Mr(i,p),[i,p]);function w(){if(!i.trim())return;const g=[{id:`${Date.now()}`,prompt:p.text,text:i.trim(),feedback:u,createdAt:Date.now()},...o].slice(0,40);h(g),d("")}return e.jsxs("article",{className:"chapter-body writing-view",children:[e.jsxs("header",{className:"chapter-header",children:[e.jsxs("div",{className:"chapter-icon-row",children:[e.jsx("div",{className:"chapter-icon-wrap",children:e.jsx(xt,{size:22})}),e.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),e.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),e.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),e.jsx("div",{className:"chapter-rule"})]}),e.jsxs("section",{className:"writing-board",children:[e.jsxs("div",{className:"writing-prompt-row",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Prompt"}),e.jsx("select",{value:s,onChange:g=>r(Number(g.target.value)),children:c.map((g,j)=>e.jsx("option",{value:j,children:g.label},`${g.label}-${j}`))})]}),e.jsx("p",{children:p.text})]}),e.jsx("textarea",{value:i,onChange:g=>d(g.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),e.jsxs("div",{className:"writing-feedback-grid",children:[e.jsxs("span",{children:[e.jsx("strong",{children:u.words})," words"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.sentences})," sentences"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.accents})," accents"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.connectors})," connectors"]}),e.jsxs("span",{children:[e.jsx("strong",{children:u.score})," score"]})]}),e.jsx("div",{className:"writing-tips",children:u.tips.length?u.tips.map(g=>e.jsx("span",{children:g},g)):e.jsx("span",{children:"Good shape. Read it out loud once."})}),e.jsxs("div",{className:"writing-actions",children:[e.jsx(re,{text:i,size:"md"}),e.jsx("button",{onClick:w,disabled:!i.trim(),children:"Save practice"})]})]}),e.jsxs("section",{className:"writing-history",children:[e.jsxs("div",{className:"home-section-heading",children:[e.jsx(yt,{size:18})," History"]}),o.length?o.map(g=>e.jsxs("article",{className:"writing-entry",children:[e.jsxs("div",{className:"writing-entry-meta",children:[new Date(g.createdAt).toLocaleDateString()," - ",g.feedback.words," words"]}),e.jsx("p",{children:g.prompt}),e.jsx("blockquote",{children:g.text})]},g.id)):e.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function Ui(){const a=new Date;return a.setHours(0,0,0,0),a.getTime()}function $i(a={}){const t=Array.isArray(a.sessions)?a.sessions:[],o=new Set(t.filter(r=>(r.seconds||0)>=60).map(r=>r.date).filter(Boolean));(a.todaySeconds||0)>=60&&o.add(new Date().toISOString().slice(0,10));let n=0;const s=new Date;for(let r=0;r<90;r++){const i=s.toISOString().slice(0,10);if(!o.has(i))break;n++,s.setDate(s.getDate()-1)}return n}function Oi(){if(typeof navigator>"u")return!1;const a=(navigator.userAgentData?.brands||[]).map(o=>o.brand).join(" "),t=`${navigator.userAgent||""} ${a}`;return/boox|onyx|e-?ink/i.test(t)}function Bi(){const[a,t]=m.useState("tiempos"),[o,n]=m.useState("tiempos"),[s,r]=m.useState(null),[i,d]=m.useState(null),[h,c]=m.useState("ALL"),[p,u]=m.useState(!1),[w,g]=m.useState(!1),[j,f]=m.useState(!1),[N,y]=m.useState(!0),[k,S]=m.useState(!1),[L,_]=m.useState(""),[G,R]=m.useState({rate:.85,voiceURI:""}),[O,ae]=m.useState("both"),[z,F]=m.useState(!1),[H,Q]=m.useState(!1),[W,A]=m.useState([]),[Y,te]=m.useState(null),[V,x]=m.useState(!1),[P,$]=m.useState(()=>{const l=St();return l?JSON.stringify(l):""}),[U,K]=m.useState(()=>tn()),[J,Le]=m.useState(null),[ve,ue]=m.useState(!1),[ce,I]=m.useState(""),[X,M]=m.useState(""),[le,pe]=m.useState(""),[ke,Me]=m.useState(""),[fe,je]=m.useState(""),[ta,Ee]=m.useState(""),[na,ka]=m.useState(!1),[Ua,Ne]=m.useState(""),[qe,sa]=m.useState(!1),[ra,Qe]=m.useState(null),[Go,ha]=m.useState(!1),[$a,Re]=m.useState(""),[ja,Oa]=m.useState(!1),[he,Na]=m.useState(()=>La()),[Ro,za]=m.useState(0),[ia,Sa]=m.useState({}),Ba=oe.useRef(0),Fa=oe.useRef(""),Ae=oe.useRef(!1),Va=oe.useRef(!1),io=oe.useRef(0),Xe=oe.useRef(new Set),v=oe.useRef(null),T=oe.useRef(null),D=oe.useRef(!1),ie=oe.useRef(0),ne=oe.useRef(new Set),Se=oe.useRef(null),Pe=oe.useRef(null),[la,Uo]=m.useState(1),[ga,lo]=m.useState(null),[se,da]=m.useState([]),[_e,$o]=m.useState([]),[Ce,Oo]=m.useState({}),[me,co]=m.useState({});m.useEffect(()=>{(async()=>{try{const l=await window.storage.get("memoria-words");l?.value&&da(JSON.parse(l.value))}catch{}try{const l=await window.storage.get("font-scale");if(l?.value){const b=parseFloat(l.value);b>=.85&&b<=1.3&&Uo(b)}}catch{}try{const l=await window.storage.get("last-read");if(l?.value){const b=JSON.parse(l.value);b?.chapterId&&b.chapterId!=="tiempos"&&lo(b)}}catch{}try{const l=await window.storage.get("visited-chapters");l?.value&&$o(JSON.parse(l.value))}catch{}try{const l=await window.storage.get(bn);l?.value&&Oo(JSON.parse(l.value))}catch{}try{const l=await window.storage.get(pn);l?.value&&co(JSON.parse(l.value))}catch{}try{const l=await window.storage.get(nt);if(l?.value){const b=JSON.parse(l.value);R(b),Xa(b)}}catch{}try{const l=await window.storage.get(st);(l?.value==="spanish"||l?.value==="both")&&ae(l.value)}catch{}try{const l=await window.storage.get(rt);(l?.value==="true"||!l?.value&&Oi())&&F(!0)}catch{}try{(await window.storage.get(mn))?.value==="true"&&ha(!0)}catch{}try{const l=await window.storage.get(yo);l?.value&&Me(l.value)}catch{}try{const l=await window.storage.get(ht);l?.value&&A(JSON.parse(l.value)||[])}catch{}try{const l=await window.storage.get(Ka);l?.value&&Na(La(JSON.parse(l.value)))}catch{}})()},[]),m.useEffect(()=>{function l(b){te(b.detail?.worker||null)}return window.addEventListener("learn-spanish-update-ready",l),()=>window.removeEventListener("learn-spanish-update-ready",l)},[]),m.useEffect(()=>{if(typeof window>"u")return;const l=()=>{const q=window.matchMedia?.("(display-mode: standalone)")?.matches,B=!!window.navigator?.standalone;Oa(!!(q||B))};function b(q){q.preventDefault(),Qe(q),Re("")}function C(){Oa(!0),Qe(null),ha(!0),Re("Lexiora is installed on this device.")}l(),window.addEventListener("beforeinstallprompt",b),window.addEventListener("appinstalled",C);const E=window.matchMedia?.("(display-mode: standalone)");return E?.addEventListener?.("change",l),()=>{window.removeEventListener("beforeinstallprompt",b),window.removeEventListener("appinstalled",C),E?.removeEventListener?.("change",l)}},[]),m.useEffect(()=>{const l=Se.current,b=Pe.current;if(!l||!b||typeof window>"u")return;const C=()=>{const q=Math.ceil(b.getBoundingClientRect().height||0);q>0&&l.style.setProperty("--mobile-bar-space",`${q}px`)};C(),window.addEventListener("resize",C);let E=null;return"ResizeObserver"in window&&(E=new ResizeObserver(C),E.observe(b)),()=>{window.removeEventListener("resize",C),E?.disconnect()}},[w,H,Y,V,L]);function Rn(){Y?.postMessage?.({type:"SKIP_WAITING"})}m.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(la)),Ue();try{window.storage.set("font-scale",String(la))}catch{}},[la]);function Et(l){Uo(b=>Math.max(.85,Math.min(1.3,+(b+l).toFixed(2))))}function Ue(){Va.current||(Ae.current=!0)}async function ca(l){Ue();try{await window.storage.set("memoria-words",JSON.stringify(l))}catch{}}async function qt(l){Ue();try{await window.storage.set(bn,JSON.stringify(l))}catch{}}async function At(l){Ue();try{await window.storage.set(pn,JSON.stringify(l))}catch{}}function Un(l){Oo(l),qt(l)}function $n(l,b){co(C=>{const E={...C};return b?E[l]=b:delete E[l],At(E),E}),J?.uid&&Cr(J.uid,l,{status:b}).catch(()=>{})}function On(l){R(l),Xa(l),Ue();try{window.storage.set(nt,JSON.stringify(l))}catch{}}function Bn(){ae(l=>{const b=l==="spanish"?"both":"spanish";Ue();try{window.storage.set(st,b)}catch{}return b})}function Fn(){F(l=>{const b=!l;Ue();try{window.storage.set(rt,String(b))}catch{}return b})}function Tt(){const l=typeof navigator<"u"&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(l)?"On iPhone or iPad: tap Share, then Add to Home Screen. iOS does not show the same install prompt as Android.":"If no install window opens, use the browser menu and choose Install app or Add to Home screen. Refresh once if the option is still missing."}async function Lt(){if(ha(!1),ja){Re("Lexiora is already installed on this device.");return}if(!ra){Re(Tt());return}try{const l=ra;Re("Opening the install prompt..."),await l.prompt();const b=await l.userChoice;Qe(null),b?.outcome==="accepted"?(Re("Great. Lexiora is installing on this device."),ha(!0)):Re("Install was dismissed. You can try again after refreshing the page.")}catch{Re(Tt())}}function Vn(){ha(!0);try{window.storage.set(mn,"true")}catch{}}async function Mt(l){da(C=>{const E=C.map(q=>q.word===l?{...q,pending:!0}:q);return ca(E),E});const b=await qn(l);da(C=>{const E=C.map(q=>q.word!==l?q:b?{...q,translation:b.main,pos:b.pos||q.pos||"",extras:b.extras||[],pending:!1,translatedAt:Date.now()}:{...q,pending:!1});return ca(E),E})}function Pt(l){da(b=>{if(b.some(E=>E.word===l.word)){const E=b.map(q=>q.word===l.word?{...q,...l,tags:Array.from(new Set([...q.tags||[],...l.tags||[]])),extras:Array.from(new Set([...q.extras||[],...l.extras||[]])),contexts:Array.from(new Set([...q.contexts||[],q.context,...l.contexts||[],l.context].filter(Boolean))).slice(0,6),context:l.context||q.context||"",savedAt:q.savedAt||l.savedAt||Date.now()}:q);return ca(E),E}const C=[l,...b];return ca(C),C}),l.translation||Mt(l.word)}function _t(l){da(b=>{const C=b.filter(E=>E.word!==l);return ca(C),C})}function Dt(l,b){da(C=>{const E=C.map(q=>q.word===l?{...q,...b}:q);return ca(E),E})}function Hn(){da([]),ca([])}function Wn(l){Ue(),A(l)}m.useEffect(()=>{if(se.length===0)return;const l=se.filter(b=>!b.translation&&!b.pending);l.length!==0&&l.slice(0,5).forEach((b,C)=>{setTimeout(()=>Mt(b.word),C*800)})},[se.length]);const ye=m.useMemo(()=>{const b=ei(ai,ia).map(B=>B.id!=="lectura"?B:{...B,chapters:(B.chapters||[]).filter(xe=>xe.id!=="stories")}),C=b.find(B=>B.id==="verbos"),E=b.find(B=>B.id==="verbos2");if(!C||!E)return b.filter(B=>B.id!=="verbos2");const q={...C,sublabel:"Top 20",chapters:[...C.chapters||[],...E.chapters||[]]};return b.map(B=>B.id==="verbos"?q:B).filter(B=>B.id!=="verbos2")},[ia]),Z=m.useMemo(()=>cn(ye,h),[ye,h]),Bo=m.useMemo(()=>cn(ye,"ALL"),[ye]),Gt=m.useMemo(()=>{const l={};for(const b of Bo)l[b.id]=b;return l},[Bo]);m.useEffect(()=>{Z.find(l=>l.id===o)||Z.length&&(n(Z[0].id),t(Z[0].sectionId),d(null))},[Z,o]);const pa=m.useMemo(()=>Z.find(l=>l.id===o),[Z,o]);function Yn(l){if(!l||Object.prototype.hasOwnProperty.call(ia,l)||Xe.current.has(l))return;const b=Zr[l];b&&(Xe.current.add(l),b().then(C=>{Sa(E=>({...E,[l]:C}))}).catch(C=>{console.warn("Could not load lesson pack",l,C),Sa(E=>({...E,[l]:null}))}).finally(()=>{Xe.current.delete(l)}))}const Kn=m.useMemo(()=>ye.find(l=>l.id===a),[ye,a]),Fo=m.useMemo(()=>ye.find(l=>l.id===s),[ye,s]),po=m.useMemo(()=>Z.filter(l=>l.sectionId===s),[Z,s]),Rt=m.useMemo(()=>Za(Fo,po),[Fo,po]);m.useEffect(()=>{const l=new Set;it(pa).forEach(b=>l.add(b)),s&&po.forEach(b=>it(b).forEach(C=>l.add(C))),!N&&a&&Z.filter(b=>b.sectionId===a).forEach(b=>it(b).forEach(C=>l.add(C))),l.forEach(b=>Yn(b))},[pa,s,po,N,a,Z,ia]);const fa=Z.findIndex(l=>l.id===o),Vo=fa>0?Z[fa-1]:null,Ho=fa>=0&&fa<Z.length-1?Z[fa+1]:null,Wo=m.useMemo(()=>new Set(_e),[_e]),ba=m.useMemo(()=>Hr(ye,Z,_e,me),[ye,Z,_e,me]),Ut=ba.lessons,Yo=ba.completed,mo=m.useMemo(()=>Yr(Ut,_e,me,4),[Ut,_e,me]),$t=m.useMemo(()=>Lr(L,Z,se,W),[L,Z,se,W]),Jn=m.useMemo(()=>({read:ba.read,understood:ba.understood}),[ba]),Qn=m.useMemo(()=>Mn(se),[se]),Ha=m.useMemo(()=>Pr({chapters:Z,visitedChapters:_e,lessonStatuses:me,palabrasProgress:Ce,savedWords:se,writingEntries:W}),[Z,_e,me,Ce,se,W]),Ko=m.useMemo(()=>Dr({chapters:Z,lessonStatuses:me,palabrasProgress:Ce,savedWords:se,writingEntries:W}),[Z,me,Ce,se,W]),uo=mo[0]||Z[0],Xn=m.useMemo(()=>{const l=Object.values(Ce||{}),b=Date.now();return{seen:l.filter(C=>C?.seen).length,due:l.filter(C=>C?.seen&&(C.dueAt||0)<=b).length,mastered:l.filter(C=>C?.mastered).length}},[Ce]),Zn=m.useMemo(()=>Wr(ye,Z,_e,me),[ye,Z,_e,me]),ho=Z.find(l=>l.id==="palabras-5000"),Ca=Z.find(l=>l.sectionId==="gramatica"),$e=Z.find(l=>l.sectionId==="verbos")||Z.find(l=>l.sectionId==="verbos2"),Oe=Z.find(l=>l.sectionId==="lectura"),Wa=ye.find(l=>l.id==="practicar"),es=Z.filter(l=>l.sectionId==="practicar"),as=Za(Wa,es),ge=m.useMemo(()=>{const l=Ui(),b=Object.values(Ce||{}).filter(B=>(B?.reviewedAt||0)>=l).length,C=se.filter(B=>(B.savedAt||0)>=l).length,E=W.some(B=>(B.createdAt||0)>=l),q=B=>B?Wo.has(B.id)||_a(me[B.id]):!1;return{reviewedToday:b,savedToday:C,wroteToday:E,grammarDone:q(Ca),readingDone:q(Oe),verbDone:q($e),streak:$i(he)}},[Ce,se,W,Wo,me,Ca,Oe,$e,he]),Ia=m.useMemo(()=>[{key:"palabras",index:"01",title:"10 palabras",detail:`${Math.min(ge.reviewedToday,10)} / 10 reviewed today`,complete:ge.reviewedToday>=10},{key:"grammar",index:"02",title:"Grammar point",detail:ge.grammarDone?"lesson opened":Ca?.title||"open grammar",complete:ge.grammarDone},{key:"reading",index:"03",title:"Read + listen",detail:ge.readingDone?"reading opened":Oe?.title||"open reading",complete:ge.readingDone},{key:"verb",index:"04",title:"One verb",detail:ge.verbDone?"verb opened":$e?.title||"open verb",complete:ge.verbDone},{key:"memoria",index:"05",title:"Memoria",detail:ge.savedToday?`${ge.savedToday} saved today`:`${se.length} saved total`,complete:ge.savedToday>0||se.length>=10},{key:"writing",index:"06",title:"Writing",detail:ge.wroteToday?"done today":"write 5 sentences",complete:ge.wroteToday}],[ge,Ca,Oe,$e,se.length]),os=m.useMemo(()=>({completed:Ia.filter(l=>l.complete).length,total:Ia.length,streak:ge.streak}),[Ia,ge.streak]),ts=m.useMemo(()=>_r({learnerProfile:Ha,reviewQueue:Ko,dailyStats:ge,studyTime:he,savedWords:se,recommendations:mo}),[Ha,Ko,ge,he,se,mo]),Be=!!(pa&&!N&&!j&&!k&&!s),Ya=i?.cardId||pa?.id,ns=Be?`${pa.sectionLabel||"Lesson"} - ${i?.title||pa.title}`:"Open a lesson to count";m.useEffect(()=>{za(0)},[Ya]),m.useEffect(()=>{if(!Be||!Ya)return;let l=!0;const b=`${Date.now()}-${Math.random().toString(36).slice(2)}-${Ya}`;Fa.current=b;const C=()=>{if(!l||document.hidden)return;const q=Date.now();za(B=>B+1),Na(B=>{const xe=Ds(B,Ya,b,q);if(Ba.current+=1,Ba.current>=15){Ba.current=0,Ue();try{window.storage.set(Ka,JSON.stringify(xe))}catch{}}return xe})},E=window.setInterval(C,1e3);return()=>{l=!1,window.clearInterval(E),Fa.current===b&&(Fa.current="")}},[Be,Ya]),m.useEffect(()=>{Ue();try{window.storage.set(Ka,JSON.stringify(he))}catch{}},[N,j,k,s,o,i]),m.useEffect(()=>{const l=()=>{try{window.storage.set(Ka,JSON.stringify(he))}catch{}};return window.addEventListener("pagehide",l),window.addEventListener("beforeunload",l),()=>{window.removeEventListener("pagehide",l),window.removeEventListener("beforeunload",l)}},[he]),m.useEffect(()=>{try{window.storage.set(qr,JSON.stringify(Ha))}catch{}},[Ha]);function be(l){const b=l.parentChapterId||l.id,C=l.sectionId||ye.find(E=>E.chapters.some(q=>q.id===b))?.id||a;n(b),t(C),r(null),d(l.nestedTarget||null),f(!1),S(!1),y(!1),u(!1),lo(null),$o(E=>{const q=[b,l.id].filter(Boolean),B=Array.from(new Set([...E,...q]));if(B.length===E.length)return E;try{window.storage.set("visited-chapters",JSON.stringify(B))}catch{}return B});try{window.storage.set("last-read",JSON.stringify({sectionId:C,chapterId:b,cardId:l.id,nestedTarget:l.nestedTarget||null,title:l.nestedTarget?.title||l.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const E=document.querySelector(".book-main");E&&E.scrollTo({top:0,behavior:"smooth"})}}function Jo(l){if(t(l.id),r(l.id),d(null),y(!1),f(!1),S(!1),u(!1),typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const b=document.querySelector(".book-main");b&&b.scrollTo({top:0,behavior:"smooth"})}}function Qo(){r(null),d(null),y(!1),S(!1),f(!0),u(!1)}function Xo(){r(null),d(null),y(!1),f(!1),S(!0),u(!1)}function Ot(l){if(l==="palabras"&&ho)return be(ho);if(l==="grammar"&&Ca)return be(Ca);if(l==="reading"&&Oe)return be(Oe);if(l==="verb"&&$e)return be($e);if(l==="memoria")return Qo();if(l==="writing")return Xo();if(uo)return be(uo)}function ss(l){return l==="memoria"?Qo():l==="writing"?Xo():l==="reading"&&Oe?be(Oe):l==="verb"&&$e?be($e):Bt()}function Bt(){const l=Ia.find(b=>!b.complete)||Ia[0];return Ot(l?.key||"palabras")}function rs(){if(!ga)return;const l=ye.find(C=>C.id===ga.sectionId),b=l?.chapters.find(C=>C.id===ga.chapterId);b&&be({...b,id:ga.cardId||b.id,parentChapterId:b.id,sectionId:l.id,nestedTarget:ga.nestedTarget||null}),lo(null)}function is(){lo(null)}function go(){return{app:"Lexiora",version:6,exportedAt:new Date().toISOString(),savedWords:se,visitedChapters:_e,palabrasProgress:Ce,lessonStatuses:me,writingEntries:W,audioSettings:G,fontScale:la,translationMode:O,booxMode:z,studyTime:he}}async function fo(l){Va.current=!0;try{const b=Array.isArray(l.savedWords)?l.savedWords:[],C=Array.isArray(l.visitedChapters)?l.visitedChapters:[],E=l.palabrasProgress&&typeof l.palabrasProgress=="object"?l.palabrasProgress:{},q=l.lessonStatuses&&typeof l.lessonStatuses=="object"?l.lessonStatuses:{},B=Array.isArray(l.writingEntries)?l.writingEntries:[],xe=l.audioSettings&&typeof l.audioSettings=="object"?l.audioSettings:G,Fe=Number(l.fontScale),Ze=l.translationMode==="spanish"?"spanish":"both",ma=!!l.booxMode,Ve=La(l.studyTime||he);da(b),$o(C),Oo(E),co(q),A(B),R(xe),Xa(xe),ae(Ze),F(ma),Na(Ve),Fe>=.85&&Fe<=1.3&&Uo(Fe),await ca(b),await qt(E),await At(q),await window.storage.set("visited-chapters",JSON.stringify(C)),await window.storage.set(ht,JSON.stringify(B)),await window.storage.set(nt,JSON.stringify(xe)),await window.storage.set(st,Ze),await window.storage.set(rt,String(ma)),await window.storage.set(Ka,JSON.stringify(Ve)),Fe>=.85&&Fe<=1.3&&await window.storage.set("font-scale",String(Fe)),Ae.current=!1}finally{Va.current=!1}}async function ls(){const l=pr(P);if(!l){M("Firebase config JSON is invalid. Paste the full web config object.");return}if(!mr(l)){M("Could not save Firebase config on this device.");return}K(!0),M("Firebase config saved. You can sign in now.")}async function Ft(l={}){if(!J?.uid){M("Sign in to Firebase first.");return}ue(!0),l.silent||M("Syncing with Firebase...");try{const b=go(),C=await rn(J.uid),E=tt(b,C);D.current=!0,await fo(E),await ln(J.uid,E),I(new Date().toLocaleString()),Ae.current=!1;const q=nn();pe(q.enabled?"enabled":q.note),l.silent||M(`Firebase synced: ${E.savedWords.length} words, ${Object.keys(E.lessonStatuses||{}).length} lesson marks.`)}catch(b){l.silent||M(b?.message||"Firebase sync did not finish.")}finally{D.current=!1,ue(!1)}}async function ds(){if(!U){M("Add Firebase config first.");return}ue(!0),M("Signing in anonymously...");try{await sn(),M("Anonymous sign-in complete.")}catch(l){M(l?.message||"Anonymous sign-in failed.")}finally{ue(!1)}}async function cs(){if(!U){M("Add Firebase config first.");return}ue(!0),M("Opening Google sign-in...");try{await xr(),M("Google sign-in complete.")}catch(l){M(l?.message||"Google sign-in failed.")}finally{ue(!1)}}async function ps(){ue(!0);try{await vr(),M("Signed out from Firebase.")}catch(l){M(l?.message||"Sign out failed.")}finally{ue(!1)}}function ms(l){const b=String(l?.sourceId||"practice"),C=String(l?.mode||"quiz"),E=String(l?.level||"A1");return`${C}-${E}-${b}`.replace(/[^a-zA-Z0-9_-]+/g,"-").toLowerCase()}async function us(l){if(!J?.uid||!l)return;const b=`${l.mode}:${l.level}:${l.sourceId}:${l.total}:${l.score}`;if(!ne.current.has(b)){ne.current.add(b);try{const C=ms(l);if(l.lessonId&&Gt[l.lessonId]){const q=Gt[l.lessonId];await kr(q.id,{title:q.title,lessonNumber:Number(q.rank||0),content:q.intro||q.subtitle||q.title,description:q.subtitle||q.sectionLabel||""},J.uid)}await jr(C,{title:l.title||"Practice quiz",description:`Mode: ${l.mode} | Level: ${l.level}`,lessonId:l.lessonId||null},J.uid);const E=Array.isArray(l.questions)?l.questions.slice(0,24):[];await Promise.all(E.map((q,B)=>Nr(C,`q-${B+1}`,{text:q.prompt||"",type:l.mode||"multiple-choice",correctAnswer:q.answer||"",options:Array.isArray(q.choices)?q.choices:[]},J.uid))),await zr(J.uid,{score:l.score,total:l.total,percent:l.percent,mode:l.mode,level:l.level,quizId:C,quizTitle:l.title||"Practice quiz"})}catch{}}}m.useEffect(()=>{K(tn())},[P]),m.useEffect(()=>{if(!U)return;let l=!1,b=null;return(async()=>{try{b=await br(async C=>{if(l)return;Le(C||null);const E=nn();if(pe(E.enabled?"enabled":E.note),T.current&&(T.current(),T.current=null),!C?.uid)return;await yr(C);const q=await Ir(C.uid).catch(()=>[]);q.length&&co(Ze=>{const ma={...Ze};for(const Ve of q)Ve?.lessonId&&(ma[Ve.lessonId]||Ve.localStatus&&(ma[Ve.lessonId]=Ve.localStatus));return ma});const B=go(),xe=await rn(C.uid),Fe=tt(B,xe);D.current=!0,await fo(Fe),await ln(C.uid,Fe),D.current=!1,Ae.current=!1,I(new Date().toLocaleString()),M("Firebase realtime sync connected."),T.current=await wr(C.uid,async(Ze,ma)=>{if(!Ze||D.current)return;const Ve=tt(go(),Ze);D.current=!0,await fo(Ve),D.current=!1,Ae.current=!1,ma?.hasPendingWrites||I(new Date().toLocaleString())},Ze=>M(Ze?.message||"Firebase listener stopped."))},C=>{M(C?.message||"Firebase auth listener error.")}),l||(v.current=b,await sn())}catch(C){l||M(C?.message||"Firebase setup did not finish.")}})(),()=>{l=!0,b?.(),T.current&&(T.current(),T.current=null),v.current=null}},[U]);async function hs(){const l=ke.trim();if(!l){Ne("Paste your Google OAuth Client ID first.");return}try{await window.storage.set(yo,l),Me(l),Ne("Google Client ID saved on this device.")}catch{Ne("Could not save the Client ID in this browser.")}}async function gs(){const l=ke.trim();if(!l){Ne("Paste and save your Google OAuth Client ID first.");return}ka(!0),Ne("Opening Google sign-in...");try{await window.storage.set(yo,l);const b=await an(l,"consent");je(b),Ne("Signed in. Syncing your study data now..."),await Zo(b)}catch(b){Ne(b?.message||"Google sign-in did not finish.")}finally{ka(!1)}}async function Zo(l=fe,b={}){const C=ke.trim();if(!C){Ne("Paste and save your Google OAuth Client ID first.");return}ka(!0),b.silent||Ne(l?"Syncing with Google Drive...":"Opening Google sign-in...");try{await window.storage.set(yo,C);const E=l||await an(C,fe?"":"consent");je(E),b.silent||Ne("Checking Google Drive...");const q=await er(E),B=await ar(E,q?.id),xe=rr(go(),B);await fo(xe),await or(E,xe,q?.id),Ee(new Date().toLocaleString()),Ae.current=!1,b.silent||Ne(`Google Drive synced across devices: ${xe.savedWords.length} words, ${Object.keys(xe.lessonStatuses||{}).length} lesson marks, ${ya(xe.studyTime?.totalSeconds)} total study time.`)}catch(E){/401|invalid|expired/i.test(E?.message||"")&&je(""),b.silent||Ne(E?.message||"Google Drive sync did not finish.")}finally{ka(!1)}}m.useEffect(()=>{if(!J?.uid||ve||Be||!Ae.current||Date.now()-ie.current<2e4)return;const b=window.setTimeout(()=>{!Ae.current||ve||Be||!J?.uid||(ie.current=Date.now(),Ft({silent:!0}))},3e3);return()=>window.clearTimeout(b)},[J?.uid,ve,Be,se,Ce,me,W,G,la,O,z,he.updatedAt]),m.useEffect(()=>{if(!fe||na||Be||!Ae.current||Date.now()-io.current<2e4)return;const b=window.setTimeout(()=>{!Ae.current||na||Be||(io.current=Date.now(),Zo(fe,{silent:!0}))},3500);return()=>window.clearTimeout(b)},[fe,na,Be,se,Ce,me,W,G,la,O,z,he.updatedAt]);function fs(l=""){return e.jsxs("div",{className:`global-search ${l}`,children:[e.jsxs("label",{children:[e.jsx(mt,{size:14}),e.jsx("input",{value:L,onChange:b=>_(b.target.value),placeholder:"Search everything..."})]}),L.trim().length>=2&&e.jsx("div",{className:"global-search-results",children:$t.length?$t.map((b,C)=>e.jsxs("button",{onClick:()=>{b.type==="memoria"?(r(null),d(null),y(!1),S(!1),f(!0)):b.type==="writing"?(r(null),d(null),y(!1),f(!1),S(!0)):be(b.chapter),_(""),u(!1)},children:[e.jsx("span",{children:e.jsx(eo,{text:b.title,query:L})}),e.jsx("em",{children:e.jsx(eo,{text:b.meta,query:L})}),b.context&&e.jsx("small",{children:e.jsx(eo,{text:b.context,query:L})})]},`${b.type}-${b.title}-${C}`)):e.jsx("div",{className:"global-search-empty",children:"No matches"})})]})}const bs=!ja&&!Go,et=!!ra,xs=!1,vs=m.useMemo(()=>[{label:"Memoria words",value:se.length},{label:"Palabras reviews",value:Object.keys(Ce||{}).length},{label:"lesson marks",value:Object.keys(me||{}).length},{label:"study time",value:ya(he.totalSeconds)},{label:"reader profile",value:z?"Boox":"Normal"}],[se.length,Ce,me,he.totalSeconds,z]);return e.jsxs("div",{ref:Se,className:`book-root translation-mode-${O} ${z?"boox-mode":""} ${H?"focus-mode":""}`,children:[e.jsx(Di,{savedWords:se,onSave:Pt,onRemove:_t}),e.jsx(Ts,{}),e.jsx("style",{children:$s}),e.jsxs("div",{ref:Pe,className:"mobile-bar",children:[e.jsx("button",{className:"mobile-btn",onClick:()=>u(!0),"aria-label":"Open menu",children:e.jsx(Ns,{size:20})}),e.jsx("div",{className:"mobile-title",children:e.jsx("span",{className:"mobile-brand-script",children:"Lexiora"})}),e.jsxs("div",{className:`study-timer ${Be?"running":""}`,title:ns,children:[e.jsx(ao,{size:14}),e.jsx("span",{className:"study-timer-main",children:ya(he.todaySeconds)}),e.jsx("span",{className:"study-timer-sub",children:ya(Ro)})]}),fs("header-search"),e.jsxs("button",{className:`mobile-tools-toggle ${w?"active":""}`,onClick:()=>g(l=>!l),"aria-label":w?"Close study tools":"Open study tools",children:[e.jsx(ze,{size:15}),"Tools"]}),e.jsxs("div",{className:`top-tools ${w?"open":""}`,children:[!ja&&e.jsxs("button",{className:`top-tool-btn install-toggle ${et?"ready":""}`,onClick:Lt,"aria-label":"Install Lexiora on this device",title:et?"Install Lexiora":"Install help",children:[e.jsx(vn,{size:15}),e.jsx("span",{children:"Install"})]}),e.jsxs("button",{className:`top-tool-btn ${O==="spanish"?"active":""}`,onClick:Bn,"aria-label":O==="spanish"?"Show English translations":"Hide English translations",title:O==="spanish"?"Mostrar ingles":"Solo espanol",children:[e.jsx(Ta,{size:15}),e.jsx("span",{children:O==="spanish"?"ES":"EN"})]}),e.jsx("button",{className:"top-tool-btn audio-stop",onClick:oo,"aria-label":"Stop all audio",title:"Detener audio",children:e.jsx(yn,{size:15})}),e.jsxs("button",{className:`top-tool-btn boox-toggle ${z?"active":""}`,onClick:Fn,"aria-label":z?"Turn off Boox e-ink mode":"Turn on Boox e-ink mode",title:z?"Boox mode on":"Boox / e-ink mode",children:[e.jsx(wn,{size:15}),e.jsx("span",{children:"Ink"})]}),e.jsxs("button",{className:`top-tool-btn focus-toggle ${H?"active":""}`,onClick:()=>Q(l=>!l),"aria-label":H?"Exit focus reading mode":"Enter focus reading mode",title:H?"Salir de lectura":"Modo lectura",children:[e.jsx(Io,{size:15}),e.jsx("span",{children:H?"Exit":"Read"})]}),e.jsxs("div",{className:"font-controls",children:[e.jsx("button",{className:"font-btn",onClick:()=>Et(-.05),"aria-label":"Smaller text",disabled:la<=.85,children:e.jsx("span",{className:"font-btn-small",children:"A"})}),e.jsx("button",{className:"font-btn",onClick:()=>Et(.05),"aria-label":"Larger text",disabled:la>=1.3,children:e.jsx("span",{className:"font-btn-large",children:"A"})})]})]})]}),V&&e.jsx(oe.Suspense,{fallback:e.jsx("div",{className:"sync-modal-overlay","aria-label":"Loading sync",children:e.jsx("div",{className:"sync-modal",children:"Loading sync..."})}),children:e.jsx(Jr,{open:V,onClose:()=>x(!1),firebaseReady:U,firebaseConnected:!!J?.uid,firebaseAuthLabel:J?J.isAnonymous?`anonymous (${J.uid.slice(0,8)}...)`:`google (${J.uid.slice(0,8)}...)`:"signed out",firebaseBusy:ve,firebasePersistenceNote:le,firebaseConfigText:P,setFirebaseConfigText:$,saveFirebaseConfigText:ls,signInFirebaseAnonymous:ds,signInFirebaseGoogle:cs,signOutFirebase:ps,syncWithFirebase:Ft,firebaseLastSyncedAt:ce,firebaseMessage:X,googleAccessToken:fe,googleLastSyncedAt:ta,googleBusy:na,googleClientId:ke,setGoogleClientId:Me,syncAdvancedOpen:qe,setSyncAdvancedOpen:sa,hasBundledGoogleClient:xs,syncStats:vs,saveGoogleClientId:hs,signInGoogleDrive:gs,syncWithGoogleDrive:Zo,syncMessage:Ua})}),e.jsxs("div",{className:"book-shell",children:[e.jsxs("aside",{className:`sidebar ${p?"open":""}`,children:[e.jsxs("div",{className:"sidebar-inner",children:[e.jsx("div",{className:"sidebar-header",children:e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"brand-mark",children:e.jsx(Io,{size:18})}),e.jsxs("div",{className:"brand-text",children:[e.jsx("div",{className:"brand-eyebrow",children:"Aprende español"}),e.jsx("div",{className:"brand-title",children:"Lexiora"})]}),e.jsx("button",{className:"sidebar-close",onClick:()=>u(!1),"aria-label":"Close menu",children:e.jsx(Je,{size:18})})]})}),e.jsxs("nav",{className:"section-nav",children:[e.jsx("div",{className:`section-group home-nav-item ${N?"active":""}`,children:e.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{r(null),d(null),y(!0),f(!1),S(!1),u(!1)},children:[e.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:e.jsx(vt,{size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:"Inicio"}),e.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),e.jsx("div",{className:"section-meta",children:e.jsx("div",{className:"section-count",children:Yo})})]})}),ye.filter(l=>l.id!=="practicar").map(l=>{const b=Z.filter(q=>q.sectionId===l.id),C=Za(l,b),E=l.id===a&&!j&&!N&&!k;return e.jsx("div",{className:`section-group ${E?"active":""}`,children:e.jsxs("button",{className:"section-btn",onClick:()=>Jo(l),children:[e.jsx("div",{className:"section-icon-wrap",children:e.jsx(zo,{id:l.id,size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:l.label}),e.jsx("div",{className:"section-sublabel",children:l.sublabel})]}),e.jsxs("div",{className:"section-meta",children:[e.jsx("div",{className:"section-count",children:C.length}),e.jsx(Ge,{size:16,className:"section-chevron"})]})]})},l.id)}),e.jsx("div",{className:`section-group memoria-nav-item ${j?"active":""}`,children:e.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{r(null),d(null),y(!1),S(!1),f(!0),u(!1)},children:[e.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:e.jsx(wa,{size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:"Memoria"}),e.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),e.jsx("div",{className:"section-meta",children:e.jsx("div",{className:"section-count memoria-count",children:se.length})})]})}),e.jsx("div",{className:`section-group writing-nav-item ${k?"active":""}`,children:e.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{r(null),d(null),y(!1),f(!1),S(!0),u(!1)},children:[e.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:e.jsx(xt,{size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:"Writing"}),e.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),e.jsx("div",{className:"section-meta",children:e.jsx("div",{className:"section-count writing-count",children:W.length})})]})}),Wa&&e.jsx("div",{className:`section-group practice-nav-item ${a==="practicar"&&!j&&!N&&!k?"active":""}`,children:e.jsxs("button",{className:"section-btn practice-section-btn",onClick:()=>Jo(Wa),children:[e.jsx("div",{className:"section-icon-wrap practice-icon-wrap",children:e.jsx(zo,{id:"practicar",size:18,className:"section-icon"})}),e.jsxs("div",{className:"section-text",children:[e.jsx("div",{className:"section-label",children:Wa.label}),e.jsx("div",{className:"section-sublabel",children:Wa.sublabel})]}),e.jsxs("div",{className:"section-meta",children:[e.jsx("div",{className:"section-count practice-count",children:as.length}),e.jsx(Ge,{size:16,className:"section-chevron"})]})]})})]}),e.jsxs("div",{className:"sidebar-footer",children:[e.jsx("button",{type:"button",className:"sidebar-sync-btn",onClick:()=>{x(!0),Ne("")},children:"Sync"}),e.jsx("div",{className:"sig",children:"— para Othman"})]})]}),p&&e.jsx("div",{className:"scrim",onClick:()=>u(!1)})]}),e.jsxs("main",{className:"book-main",children:[bs&&e.jsx(Rs,{installReady:et,installMessage:$a,onInstall:Lt,onDismiss:Vn}),ga&&e.jsxs("div",{className:"resume-banner",children:[e.jsxs("div",{className:"resume-banner-text",children:[e.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),e.jsx("span",{className:"resume-banner-title",children:ga.title})]}),e.jsxs("div",{className:"resume-banner-actions",children:[e.jsxs("button",{className:"resume-btn-primary",onClick:rs,children:["Continuar",e.jsx(Ge,{size:14})]}),e.jsx("button",{className:"resume-btn-dismiss",onClick:is,"aria-label":"Dismiss",children:e.jsx(Je,{size:14})})]})]}),Y&&e.jsxs("div",{className:"update-banner",children:[e.jsxs("div",{children:[e.jsx("span",{className:"resume-banner-label",children:"New version ready"}),e.jsx("span",{className:"resume-banner-title",children:"Refresh to use the latest study tools."})]}),e.jsxs("button",{className:"resume-btn-primary",onClick:Rn,children:["Update",e.jsx(Ge,{size:14})]})]}),e.jsxs("div",{className:`book-page ${N?"home-page":""}`,children:[N?e.jsx(Gs,{totalLessons:ba.total,visitedCount:Yo,savedWordsCount:se.length,levelFilter:h,palabrasSummary:Xn,lessonSummary:Jn,memoriaSummary:Qn,learnerProfile:Ha,reviewQueue:Ko,studyTime:he,dailyPlan:Ia,dailyProgress:os,teacherInsights:ts,writingCount:W.length,sectionProgress:Zn,recommendations:mo,onStart:()=>uo&&be(uo),onStartDaily:Bt,onDailyStep:Ot,onOpenMemoria:Qo,onOpenPalabras:()=>ho&&be(ho),onOpenVerb:()=>$e&&be($e),onOpenReading:()=>Oe&&be(Oe),onOpenWriting:Xo,onSelectChapter:be,onTeacherAction:ss}):j?e.jsx(Gi,{savedWords:se,onRemove:_t,onClear:Hn,onUpdateWord:Dt}):k?e.jsx(Ri,{savedWords:se,chapters:Z,entries:W,onEntriesChange:Wn}):s?e.jsx(Kr,{section:Fo,lessons:Rt,visitedSet:Wo,lessonStatuses:me,studyTime:he,onSelectChapter:be,SectionIconComponent:zo}):pa?e.jsx(ki,{chapter:pa,sectionId:a,section:Kn,activeNestedTarget:i,onOpenSection:Jo,onSaveWord:Pt,savedWords:se,onUpdateSavedWord:Dt,palabrasProgress:Ce,onPalabrasProgressChange:Un,lessonStatuses:me,onLessonStatusChange:$n,practiceChapters:Bo,onPracticeAttempt:us}):e.jsxs("div",{className:"empty",children:[e.jsx(ze,{size:28}),e.jsx("p",{children:"No hay lecciones en este nivel."})]}),!N&&!j&&!k&&!s&&e.jsxs("nav",{className:"chapter-nav",children:[Vo?e.jsxs("button",{className:"nav-btn prev",onClick:()=>be(Vo),children:[e.jsx(zs,{size:16}),e.jsxs("div",{children:[e.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),e.jsx("div",{className:"nav-title",children:Vo.title})]})]}):e.jsx("div",{}),Ho?e.jsxs("button",{className:"nav-btn next",onClick:()=>be(Ho),children:[e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),e.jsx("div",{className:"nav-title",children:Ho.title})]}),e.jsx(Ge,{size:16})]}):e.jsx("div",{})]})]}),e.jsx("footer",{className:"level-bar",children:e.jsxs("div",{className:"level-bar-inner",children:[e.jsxs("div",{className:"level-bar-label",children:[e.jsx(wa,{size:14})," Nivel"]}),e.jsxs("div",{className:"level-pills",children:[e.jsx("button",{className:`level-pill ${h==="ALL"?"active":""}`,onClick:()=>c("ALL"),children:"Todos"}),No.map(l=>e.jsx("button",{className:`level-pill ${h===l?"active":""}`,onClick:()=>c(l),children:l},l))]}),e.jsx(Us,{settings:G,onChange:On}),e.jsx("div",{className:"level-bar-counter",children:N?`${Yo} / ${ba.total}`:s?`${Rt.length} lecciones`:fa>=0?`${fa+1} / ${Z.length}`:"—"})]})})]})]})]})}function Fi(){document.documentElement.style.minHeight="100%",document.documentElement.style.overflowX="hidden",document.documentElement.style.overflowY="auto",document.body.style.minHeight="100%",document.body.style.overflowX="hidden",document.body.style.overflowY="auto"}typeof window<"u"&&!window.storage&&(window.storage={async get(a){const t=window.localStorage.getItem(a);return t===null?null:{value:t}},async set(a,t){window.localStorage.setItem(a,t)},async delete(a){window.localStorage.removeItem(a)}});typeof document<"u"&&Fi();Es();ys.createRoot(document.getElementById("root")).render(e.jsx(oe.StrictMode,{children:e.jsx(Bi,{})}));
