(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();function Lg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ac={exports:{}},Ms={};var Ym;function Ug(){if(Ym)return Ms;Ym=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(c,m,h){var g=null;if(h!==void 0&&(g=""+h),m.key!==void 0&&(g=""+m.key),"key"in m){h={};for(var b in m)b!=="key"&&(h[b]=m[b])}else h=m;return m=h.ref,{$$typeof:r,type:c,key:g,ref:m!==void 0?m:null,props:h}}return Ms.Fragment=u,Ms.jsx=d,Ms.jsxs=d,Ms}var Vm;function Og(){return Vm||(Vm=1,Ac.exports=Ug()),Ac.exports}var o=Og(),Cc={exports:{}},pe={};var Qm;function _g(){if(Qm)return pe;Qm=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),O=Symbol.iterator;function k(v){return v===null||typeof v!="object"?null:(v=O&&v[O]||v["@@iterator"],typeof v=="function"?v:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,Q={};function I(v,G,K){this.props=v,this.context=G,this.refs=Q,this.updater=K||A}I.prototype.isReactComponent={},I.prototype.setState=function(v,G){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,G,"setState")},I.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function te(){}te.prototype=I.prototype;function F(v,G,K){this.props=v,this.context=G,this.refs=Q,this.updater=K||A}var J=F.prototype=new te;J.constructor=F,C(J,I.prototype),J.isPureReactComponent=!0;var ee=Array.isArray;function se(){}var ae={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function xe(v,G,K){var Z=K.ref;return{$$typeof:r,type:v,key:G,ref:Z!==void 0?Z:null,props:K}}function P(v,G){return xe(v.type,G,v.props)}function me(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function ye(v){var G={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(K){return G[K]})}var qe=/\/+/g;function we(v,G){return typeof v=="object"&&v!==null&&v.key!=null?ye(""+v.key):G.toString(36)}function ke(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(se,se):(v.status="pending",v.then(function(G){v.status==="pending"&&(v.status="fulfilled",v.value=G)},function(G){v.status==="pending"&&(v.status="rejected",v.reason=G)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function D(v,G,K,Z,le){var fe=typeof v;(fe==="undefined"||fe==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(fe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case r:case u:de=!0;break;case S:return de=v._init,D(de(v._payload),G,K,Z,le)}}if(de)return le=le(v),de=Z===""?"."+we(v,0):Z,ee(le)?(K="",de!=null&&(K=de.replace(qe,"$&/")+"/"),D(le,G,K,"",function(Te){return Te})):le!=null&&(me(le)&&(le=P(le,K+(le.key==null||v&&v.key===le.key?"":(""+le.key).replace(qe,"$&/")+"/")+de)),G.push(le)),1;de=0;var He=Z===""?".":Z+":";if(ee(v))for(var V=0;V<v.length;V++)Z=v[V],fe=He+we(Z,V),de+=D(Z,G,K,fe,le);else if(V=k(v),typeof V=="function")for(v=V.call(v),V=0;!(Z=v.next()).done;)Z=Z.value,fe=He+we(Z,V++),de+=D(Z,G,K,fe,le);else if(fe==="object"){if(typeof v.then=="function")return D(ke(v),G,K,Z,le);throw G=String(v),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return de}function N(v,G,K){if(v==null)return v;var Z=[],le=0;return D(v,Z,"","",function(fe){return G.call(K,fe,le++)}),Z}function B(v){if(v._status===-1){var G=v._result;G=G(),G.then(function(K){(v._status===0||v._status===-1)&&(v._status=1,v._result=K)},function(K){(v._status===0||v._status===-1)&&(v._status=2,v._result=K)}),v._status===-1&&(v._status=0,v._result=G)}if(v._status===1)return v._result.default;throw v._result}var X=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},W={map:N,forEach:function(v,G,K){N(v,function(){G.apply(this,arguments)},K)},count:function(v){var G=0;return N(v,function(){G++}),G},toArray:function(v){return N(v,function(G){return G})||[]},only:function(v){if(!me(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return pe.Activity=j,pe.Children=W,pe.Component=I,pe.Fragment=d,pe.Profiler=m,pe.PureComponent=F,pe.StrictMode=c,pe.Suspense=w,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,pe.__COMPILER_RUNTIME={__proto__:null,c:function(v){return ae.H.useMemoCache(v)}},pe.cache=function(v){return function(){return v.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(v,G,K){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Z=C({},v.props),le=v.key;if(G!=null)for(fe in G.key!==void 0&&(le=""+G.key),G)!$.call(G,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&G.ref===void 0||(Z[fe]=G[fe]);var fe=arguments.length-2;if(fe===1)Z.children=K;else if(1<fe){for(var de=Array(fe),He=0;He<fe;He++)de[He]=arguments[He+2];Z.children=de}return xe(v.type,le,Z)},pe.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},pe.createElement=function(v,G,K){var Z,le={},fe=null;if(G!=null)for(Z in G.key!==void 0&&(fe=""+G.key),G)$.call(G,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(le[Z]=G[Z]);var de=arguments.length-2;if(de===1)le.children=K;else if(1<de){for(var He=Array(de),V=0;V<de;V++)He[V]=arguments[V+2];le.children=He}if(v&&v.defaultProps)for(Z in de=v.defaultProps,de)le[Z]===void 0&&(le[Z]=de[Z]);return xe(v,fe,le)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(v){return{$$typeof:b,render:v}},pe.isValidElement=me,pe.lazy=function(v){return{$$typeof:S,_payload:{_status:-1,_result:v},_init:B}},pe.memo=function(v,G){return{$$typeof:f,type:v,compare:G===void 0?null:G}},pe.startTransition=function(v){var G=ae.T,K={};ae.T=K;try{var Z=v(),le=ae.S;le!==null&&le(K,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(se,X)}catch(fe){X(fe)}finally{G!==null&&K.types!==null&&(G.types=K.types),ae.T=G}},pe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},pe.use=function(v){return ae.H.use(v)},pe.useActionState=function(v,G,K){return ae.H.useActionState(v,G,K)},pe.useCallback=function(v,G){return ae.H.useCallback(v,G)},pe.useContext=function(v){return ae.H.useContext(v)},pe.useDebugValue=function(){},pe.useDeferredValue=function(v,G){return ae.H.useDeferredValue(v,G)},pe.useEffect=function(v,G){return ae.H.useEffect(v,G)},pe.useEffectEvent=function(v){return ae.H.useEffectEvent(v)},pe.useId=function(){return ae.H.useId()},pe.useImperativeHandle=function(v,G,K){return ae.H.useImperativeHandle(v,G,K)},pe.useInsertionEffect=function(v,G){return ae.H.useInsertionEffect(v,G)},pe.useLayoutEffect=function(v,G){return ae.H.useLayoutEffect(v,G)},pe.useMemo=function(v,G){return ae.H.useMemo(v,G)},pe.useOptimistic=function(v,G){return ae.H.useOptimistic(v,G)},pe.useReducer=function(v,G,K){return ae.H.useReducer(v,G,K)},pe.useRef=function(v){return ae.H.useRef(v)},pe.useState=function(v){return ae.H.useState(v)},pe.useSyncExternalStore=function(v,G,K){return ae.H.useSyncExternalStore(v,G,K)},pe.useTransition=function(){return ae.H.useTransition()},pe.version="19.2.5",pe}var Im;function $c(){return Im||(Im=1,Cc.exports=_g()),Cc.exports}var U=$c();const Sa=Lg(U);var Mc={exports:{}},Ds={},Dc={exports:{}},Lc={};var Xm;function Gg(){return Xm||(Xm=1,(function(r){function u(D,N){var B=D.length;D.push(N);e:for(;0<B;){var X=B-1>>>1,W=D[X];if(0<m(W,N))D[X]=N,D[B]=W,B=X;else break e}}function d(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var N=D[0],B=D.pop();if(B!==N){D[0]=B;e:for(var X=0,W=D.length,v=W>>>1;X<v;){var G=2*(X+1)-1,K=D[G],Z=G+1,le=D[Z];if(0>m(K,B))Z<W&&0>m(le,K)?(D[X]=le,D[Z]=B,X=Z):(D[X]=K,D[G]=B,X=G);else if(Z<W&&0>m(le,B))D[X]=le,D[Z]=B,X=Z;else break e}}return N}function m(D,N){var B=D.sortIndex-N.sortIndex;return B!==0?B:D.id-N.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var g=Date,b=g.now();r.unstable_now=function(){return g.now()-b}}var w=[],f=[],S=1,j=null,O=3,k=!1,A=!1,C=!1,Q=!1,I=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function J(D){for(var N=d(f);N!==null;){if(N.callback===null)c(f);else if(N.startTime<=D)c(f),N.sortIndex=N.expirationTime,u(w,N);else break;N=d(f)}}function ee(D){if(C=!1,J(D),!A)if(d(w)!==null)A=!0,se||(se=!0,ye());else{var N=d(f);N!==null&&ke(ee,N.startTime-D)}}var se=!1,ae=-1,$=5,xe=-1;function P(){return Q?!0:!(r.unstable_now()-xe<$)}function me(){if(Q=!1,se){var D=r.unstable_now();xe=D;var N=!0;try{e:{A=!1,C&&(C=!1,te(ae),ae=-1),k=!0;var B=O;try{a:{for(J(D),j=d(w);j!==null&&!(j.expirationTime>D&&P());){var X=j.callback;if(typeof X=="function"){j.callback=null,O=j.priorityLevel;var W=X(j.expirationTime<=D);if(D=r.unstable_now(),typeof W=="function"){j.callback=W,J(D),N=!0;break a}j===d(w)&&c(w),J(D)}else c(w);j=d(w)}if(j!==null)N=!0;else{var v=d(f);v!==null&&ke(ee,v.startTime-D),N=!1}}break e}finally{j=null,O=B,k=!1}N=void 0}}finally{N?ye():se=!1}}}var ye;if(typeof F=="function")ye=function(){F(me)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,we=qe.port2;qe.port1.onmessage=me,ye=function(){we.postMessage(null)}}else ye=function(){I(me,0)};function ke(D,N){ae=I(function(){D(r.unstable_now())},N)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(D){switch(O){case 1:case 2:case 3:var N=3;break;default:N=O}var B=O;O=N;try{return D()}finally{O=B}},r.unstable_requestPaint=function(){Q=!0},r.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=O;O=D;try{return N()}finally{O=B}},r.unstable_scheduleCallback=function(D,N,B){var X=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?X+B:X):B=X,D){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=B+W,D={id:S++,callback:N,priorityLevel:D,startTime:B,expirationTime:W,sortIndex:-1},B>X?(D.sortIndex=B,u(f,D),d(w)===null&&D===d(f)&&(C?(te(ae),ae=-1):C=!0,ke(ee,B-X))):(D.sortIndex=W,u(w,D),A||k||(A=!0,se||(se=!0,ye()))),D},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(D){var N=O;return function(){var B=O;O=N;try{return D.apply(this,arguments)}finally{O=B}}}})(Lc)),Lc}var Km;function Rg(){return Km||(Km=1,Dc.exports=Gg()),Dc.exports}var Uc={exports:{}},ya={};var Zm;function Hg(){if(Zm)return ya;Zm=1;var r=$c();function u(w){var f="https://react.dev/errors/"+w;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)f+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+w+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(w,f,S){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:j==null?null:""+j,children:w,containerInfo:f,implementation:S}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(w,f){if(w==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ya.createPortal=function(w,f){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(u(299));return h(w,f,null,S)},ya.flushSync=function(w){var f=g.T,S=c.p;try{if(g.T=null,c.p=2,w)return w()}finally{g.T=f,c.p=S,c.d.f()}},ya.preconnect=function(w,f){typeof w=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,c.d.C(w,f))},ya.prefetchDNS=function(w){typeof w=="string"&&c.d.D(w)},ya.preinit=function(w,f){if(typeof w=="string"&&f&&typeof f.as=="string"){var S=f.as,j=b(S,f.crossOrigin),O=typeof f.integrity=="string"?f.integrity:void 0,k=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;S==="style"?c.d.S(w,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:j,integrity:O,fetchPriority:k}):S==="script"&&c.d.X(w,{crossOrigin:j,integrity:O,fetchPriority:k,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},ya.preinitModule=function(w,f){if(typeof w=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var S=b(f.as,f.crossOrigin);c.d.M(w,{crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&c.d.M(w)},ya.preload=function(w,f){if(typeof w=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var S=f.as,j=b(S,f.crossOrigin);c.d.L(w,S,{crossOrigin:j,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},ya.preloadModule=function(w,f){if(typeof w=="string")if(f){var S=b(f.as,f.crossOrigin);c.d.m(w,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else c.d.m(w)},ya.requestFormReset=function(w){c.d.r(w)},ya.unstable_batchedUpdates=function(w,f){return w(f)},ya.useFormState=function(w,f,S){return g.H.useFormState(w,f,S)},ya.useFormStatus=function(){return g.H.useHostTransitionStatus()},ya.version="19.2.5",ya}var Jm;function Bg(){if(Jm)return Uc.exports;Jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Uc.exports=Hg(),Uc.exports}var $m;function Yg(){if($m)return Ds;$m=1;var r=Rg(),u=$c(),d=Bg();function c(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function g(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function b(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function w(e){if(h(e)!==e)throw Error(c(188))}function f(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(c(188));return a!==e?null:e}for(var n=e,t=a;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(t=s.return,t!==null){n=t;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return w(s),e;if(i===t)return w(s),a;i=i.sibling}throw Error(c(188))}if(n.return!==t.return)n=s,t=i;else{for(var l=!1,p=s.child;p;){if(p===n){l=!0,n=s,t=i;break}if(p===t){l=!0,t=s,n=i;break}p=p.sibling}if(!l){for(p=i.child;p;){if(p===n){l=!0,n=i,t=s;break}if(p===t){l=!0,t=i,n=s;break}p=p.sibling}if(!l)throw Error(c(189))}}if(n.alternate!==t)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:a}function S(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=S(e),a!==null)return a;e=e.sibling}return null}var j=Object.assign,O=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),F=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=me&&e[me]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case I:return"Profiler";case Q:return"StrictMode";case ee:return"Suspense";case se:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case F:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case J:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return a=e.displayName||null,a!==null?a:we(e.type)||"Memo";case $:a=e._payload,e=e._init;try{return we(e(a))}catch{}}return null}var ke=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},X=[],W=-1;function v(e){return{current:e}}function G(e){0>W||(e.current=X[W],X[W]=null,W--)}function K(e,a){W++,X[W]=e.current,e.current=a}var Z=v(null),le=v(null),fe=v(null),de=v(null);function He(e,a){switch(K(fe,a),K(le,e),K(Z,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?um(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=um(a),e=pm(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(Z),K(Z,e)}function V(){G(Z),G(le),G(fe)}function Te(e){e.memoizedState!==null&&K(de,e);var a=Z.current,n=pm(a,e.type);a!==n&&(K(le,e),K(Z,n))}function Be(e){le.current===e&&(G(Z),G(le)),de.current===e&&(G(de),Es._currentValue=B)}var Xe,Je;function sa(e){if(Xe===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Xe=a&&a[1]||"",Je=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+e+Je}var wa=!1;function Va(e,a){if(!e||wa)return"";wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(L){var M=L}Reflect.construct(e,[],H)}else{try{H.call()}catch(L){M=L}e.call(H.prototype)}}else{try{throw Error()}catch(L){M=L}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(L){if(L&&M&&typeof L.stack=="string")return[L.stack,M.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=t.DetermineComponentFrameRoot(),l=i[0],p=i[1];if(l&&p){var x=l.split(`
`),T=p.split(`
`);for(s=t=0;t<x.length&&!x[t].includes("DetermineComponentFrameRoot");)t++;for(;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;if(t===x.length||s===T.length)for(t=x.length-1,s=T.length-1;1<=t&&0<=s&&x[t]!==T[s];)s--;for(;1<=t&&0<=s;t--,s--)if(x[t]!==T[s]){if(t!==1||s!==1)do if(t--,s--,0>s||x[t]!==T[s]){var _=`
`+x[t].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=t&&0<=s);break}}}finally{wa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?sa(n):""}function $e(e,a){switch(e.tag){case 26:case 27:case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return e.child!==a&&a!==null?sa("Suspense Fallback"):sa("Suspense");case 19:return sa("SuspenseList");case 0:case 15:return Va(e.type,!1);case 11:return Va(e.type.render,!1);case 1:return Va(e.type,!0);case 31:return sa("Activity");default:return""}}function en(e){try{var a="",n=null;do a+=$e(e,n),n=e,e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var cn=Object.prototype.hasOwnProperty,ht=r.unstable_scheduleCallback,La=r.unstable_cancelCallback,_o=r.unstable_shouldYield,Na=r.unstable_requestPaint,da=r.unstable_now,xr=r.unstable_getCurrentPriorityLevel,Go=r.unstable_ImmediatePriority,an=r.unstable_UserBlockingPriority,gt=r.unstable_NormalPriority,Vs=r.unstable_LowPriority,Qs=r.unstable_IdlePriority,yr=r.log,wr=r.unstable_setDisableYieldValue,bt=null,ka=null;function nn(e){if(typeof yr=="function"&&wr(e),ka&&typeof ka.setStrictMode=="function")try{ka.setStrictMode(bt,e)}catch{}}var va=Math.clz32?Math.clz32:kr,Is=Math.log,Xs=Math.LN2;function kr(e){return e>>>=0,e===0?32:31-(Is(e)/Xs|0)|0}var be=256,tn=262144,Bt=4194304;function on(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,a,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var p=t&134217727;return p!==0?(t=p&~i,t!==0?s=on(t):(l&=p,l!==0?s=on(l):n||(n=p&~e,n!==0&&(s=on(n))))):(p=t&~i,p!==0?s=on(p):l!==0?s=on(l):n||(n=t&~e,n!==0&&(s=on(n)))),s===0?0:a!==0&&a!==s&&(a&i)===0&&(i=s&-s,n=a&-a,i>=n||i===32&&(n&4194048)!==0)?a:s}function Hn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function bn(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function xt(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Ua(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ks(e,a,n,t,s,i){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,T=e.hiddenUpdates;for(n=l&~n;0<n;){var _=31-va(n),H=1<<_;p[_]=0,x[_]=-1;var M=T[_];if(M!==null)for(T[_]=null,_=0;_<M.length;_++){var L=M[_];L!==null&&(L.lane&=-536870913)}n&=~H}t!==0&&Ro(e,t,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~a))}function Ro(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var t=31-va(a);e.entangledLanes|=a,e.entanglements[t]=e.entanglements[t]|1073741824|n&261930}function Ho(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var t=31-va(n),s=1<<t;s&a|e[t]&a&&(e[t]|=a),n&=~s}}function Zs(e,a){var n=a&-a;return n=(n&42)!==0?1:Bo(n),(n&(e.suspendedLanes|a))!==0?0:n}function Bo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Js(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Um(e.type))}function Yo(e,a){var n=N.p;try{return N.p=e,a()}finally{N.p=n}}var dn=Math.random().toString(36).slice(2),ia="__reactFiber$"+dn,ua="__reactProps$"+dn,vn="__reactContainer$"+dn,Vt="__reactEvents$"+dn,Qt="__reactListeners$"+dn,It="__reactHandles$"+dn,$s="__reactResources$"+dn,xa="__reactMarker$"+dn;function Xt(e){delete e[ia],delete e[ua],delete e[Vt],delete e[Qt],delete e[It]}function Bn(e){var a=e[ia];if(a)return a;for(var n=e.parentNode;n;){if(a=n[vn]||n[ia]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=xm(e);e!==null;){if(n=e[ia])return n;e=xm(e)}return a}e=n,n=e.parentNode}return null}function Yn(e){if(e=e[ia]||e[vn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function wt(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(c(33))}function Vn(e){var a=e[$s];return a||(a=e[$s]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ea(e){e[xa]=!0}var Ws=new Set,Vo={};function xn(e,a){y(e,a),y(e+"Capture",a)}function y(e,a){for(Vo[e]=a,e=0;e<a.length;e++)Ws.add(a[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},ue={};function he(e){return cn.call(ue,e)?!0:cn.call(ie,e)?!1:Y.test(e)?ue[e]=!0:(ie[e]=!0,!1)}function Ie(e,a,n){if(he(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function Qa(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function pa(e,a,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+t)}}function ja(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qo(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Fs(e,a,n){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,i=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function jr(e){if(!e._valueTracker){var a=Qo(e)?"checked":"value";e._valueTracker=Fs(e,a,""+e[a])}}function od(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),t="";return e&&(t=Qo(e)?e.checked?"true":"false":e.value),e=t,e!==n?(a.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ef=/[\n"\\]/g;function Ia(e){return e.replace(Ef,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function zr(e,a,n,t,s,i,l,p){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ja(a)):e.value!==""+ja(a)&&(e.value=""+ja(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?Sr(e,l,ja(a)):n!=null?Sr(e,l,ja(n)):t!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+ja(p):e.removeAttribute("name")}function sd(e,a,n,t,s,i,l,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){jr(e);return}n=n!=null?""+ja(n):"",a=a!=null?""+ja(a):n,p||a===e.value||(e.value=a),e.defaultValue=a}t=t??s,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=p?e.checked:!!t,e.defaultChecked=!!t,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),jr(e)}function Sr(e,a,n){a==="number"&&Ps(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Kt(e,a,n,t){if(e=e.options,a){a={};for(var s=0;s<n.length;s++)a["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=a.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&t&&(e[n].defaultSelected=!0)}else{for(n=""+ja(n),a=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,t&&(e[s].defaultSelected=!0);return}a!==null||e[s].disabled||(a=e[s])}a!==null&&(a.selected=!0)}}function id(e,a,n){if(a!=null&&(a=""+ja(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+ja(n):""}function rd(e,a,n,t){if(a==null){if(t!=null){if(n!=null)throw Error(c(92));if(ke(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),a=n}n=ja(a),e.defaultValue=n,t=e.textContent,t===n&&t!==""&&t!==null&&(e.value=t),jr(e)}function Zt(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Tf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(e,a,n){var t=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?t?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":t?e.setProperty(a,n):typeof n!="number"||n===0||Tf.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function cd(e,a,n){if(a!=null&&typeof a!="object")throw Error(c(62));if(e=e.style,n!=null){for(var t in n)!n.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var s in a)t=a[s],a.hasOwnProperty(s)&&n[s]!==t&&ld(e,s,t)}else for(var i in a)a.hasOwnProperty(i)&&ld(e,i,a[i])}function Nr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Af=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ei(e){return Cf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var qr=null;function Er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jt=null,$t=null;function dd(e){var a=Yn(e);if(a&&(e=a.stateNode)){var n=e[ua]||null;e:switch(e=a.stateNode,a.type){case"input":if(zr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ia(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var t=n[a];if(t!==e&&t.form===e.form){var s=t[ua]||null;if(!s)throw Error(c(90));zr(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(a=0;a<n.length;a++)t=n[a],t.form===e.form&&od(t)}break e;case"textarea":id(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&Kt(e,!!n.multiple,a,!1)}}}var Tr=!1;function ud(e,a,n){if(Tr)return e(a,n);Tr=!0;try{var t=e(a);return t}finally{if(Tr=!1,(Jt!==null||$t!==null)&&(Bi(),Jt&&(a=Jt,e=$t,$t=Jt=null,dd(a),e)))for(a=0;a<e.length;a++)dd(e[a])}}function Io(e,a){var n=e.stateNode;if(n===null)return null;var t=n[ua]||null;if(t===null)return null;n=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,a,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ar=!1;if(wn)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Ar=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Ar=!1}var Qn=null,Cr=null,ai=null;function pd(){if(ai)return ai;var e,a=Cr,n=a.length,t,s="value"in Qn?Qn.value:Qn.textContent,i=s.length;for(e=0;e<n&&a[e]===s[e];e++);var l=n-e;for(t=1;t<=l&&a[n-t]===s[i-t];t++);return ai=s.slice(e,1<t?1-t:void 0)}function ni(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function md(){return!1}function qa(e){function a(n,t,s,i,l){this._reactName=n,this._targetInst=s,this.type=t,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:md,this.isPropagationStopped=md,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),a}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=qa(kt),Ko=j({},kt,{view:0,detail:0}),Mf=qa(Ko),Mr,Dr,Zo,si=j({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ur,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(Mr=e.screenX-Zo.screenX,Dr=e.screenY-Zo.screenY):Dr=Mr=0,Zo=e),Mr)},movementY:function(e){return"movementY"in e?e.movementY:Dr}}),fd=qa(si),Df=j({},si,{dataTransfer:0}),Lf=qa(Df),Uf=j({},Ko,{relatedTarget:0}),Lr=qa(Uf),Of=j({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=qa(Of),Gf=j({},kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=qa(Gf),Hf=j({},kt,{data:0}),hd=qa(Hf),Bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qf(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Vf[e])?!!a[e]:!1}function Ur(){return Qf}var If=j({},Ko,{key:function(e){if(e.key){var a=Bf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ur,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xf=qa(If),Kf=j({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=qa(Kf),Zf=j({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ur}),Jf=qa(Zf),$f=j({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wf=qa($f),Ff=j({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=qa(Ff),eh=j({},kt,{newState:0,oldState:0}),ah=qa(eh),nh=[9,13,27,32],Or=wn&&"CompositionEvent"in window,Jo=null;wn&&"documentMode"in document&&(Jo=document.documentMode);var th=wn&&"TextEvent"in window&&!Jo,bd=wn&&(!Or||Jo&&8<Jo&&11>=Jo),vd=" ",xd=!1;function yd(e,a){switch(e){case"keyup":return nh.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function oh(e,a){switch(e){case"compositionend":return wd(a);case"keypress":return a.which!==32?null:(xd=!0,vd);case"textInput":return e=a.data,e===vd&&xd?null:e;default:return null}}function sh(e,a){if(Wt)return e==="compositionend"||!Or&&yd(e,a)?(e=pd(),ai=Cr=Qn=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return bd&&a.locale!=="ko"?null:a.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!ih[e.type]:a==="textarea"}function jd(e,a,n,t){Jt?$t?$t.push(t):$t=[t]:Jt=t,a=Zi(a,"onChange"),0<a.length&&(n=new oi("onChange","change",null,n,t),e.push({event:n,listeners:a}))}var $o=null,Wo=null;function rh(e){sm(e,0)}function ii(e){var a=wt(e);if(od(a))return e}function zd(e,a){if(e==="change")return a}var Sd=!1;if(wn){var _r;if(wn){var Gr="oninput"in document;if(!Gr){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Gr=typeof Nd.oninput=="function"}_r=Gr}else _r=!1;Sd=_r&&(!document.documentMode||9<document.documentMode)}function qd(){$o&&($o.detachEvent("onpropertychange",Ed),Wo=$o=null)}function Ed(e){if(e.propertyName==="value"&&ii(Wo)){var a=[];jd(a,Wo,e,Er(e)),ud(rh,a)}}function lh(e,a,n){e==="focusin"?(qd(),$o=a,Wo=n,$o.attachEvent("onpropertychange",Ed)):e==="focusout"&&qd()}function ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Wo)}function dh(e,a){if(e==="click")return ii(a)}function uh(e,a){if(e==="input"||e==="change")return ii(a)}function ph(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Oa=typeof Object.is=="function"?Object.is:ph;function Fo(e,a){if(Oa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),t=Object.keys(a);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var s=n[t];if(!cn.call(a,s)||!Oa(e[s],a[s]))return!1}return!0}function Td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,a){var n=Td(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=a&&t>=a)return{node:n,offset:a-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Td(n)}}function Cd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Cd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Md(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ps(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=Ps(e.document)}return a}function Rr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var mh=wn&&"documentMode"in document&&11>=document.documentMode,Ft=null,Hr=null,Po=null,Br=!1;function Dd(e,a,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Ft==null||Ft!==Ps(t)||(t=Ft,"selectionStart"in t&&Rr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Po&&Fo(Po,t)||(Po=t,t=Zi(Hr,"onSelect"),0<t.length&&(a=new oi("onSelect","select",null,a,n),e.push({event:a,listeners:t}),a.target=Ft)))}function jt(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Pt={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionrun:jt("Transition","TransitionRun"),transitionstart:jt("Transition","TransitionStart"),transitioncancel:jt("Transition","TransitionCancel"),transitionend:jt("Transition","TransitionEnd")},Yr={},Ld={};wn&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function zt(e){if(Yr[e])return Yr[e];if(!Pt[e])return e;var a=Pt[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Ld)return Yr[e]=a[n];return e}var Ud=zt("animationend"),Od=zt("animationiteration"),_d=zt("animationstart"),fh=zt("transitionrun"),hh=zt("transitionstart"),gh=zt("transitioncancel"),Gd=zt("transitionend"),Rd=new Map,Vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vr.push("scrollEnd");function sn(e,a){Rd.set(e,a),xn(a,[e])}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xa=[],eo=0,Qr=0;function li(){for(var e=eo,a=Qr=eo=0;a<e;){var n=Xa[a];Xa[a++]=null;var t=Xa[a];Xa[a++]=null;var s=Xa[a];Xa[a++]=null;var i=Xa[a];if(Xa[a++]=null,t!==null&&s!==null){var l=t.pending;l===null?s.next=s:(s.next=l.next,l.next=s),t.pending=s}i!==0&&Hd(n,s,i)}}function ci(e,a,n,t){Xa[eo++]=e,Xa[eo++]=a,Xa[eo++]=n,Xa[eo++]=t,Qr|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function Ir(e,a,n,t){return ci(e,a,n,t),di(e)}function St(e,a){return ci(e,null,null,a),di(e)}function Hd(e,a,n){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n);for(var s=!1,i=e.return;i!==null;)i.childLanes|=n,t=i.alternate,t!==null&&(t.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&a!==null&&(s=31-va(n),e=i.hiddenUpdates,t=e[s],t===null?e[s]=[a]:t.push(a),a.lane=n|536870912),i):null}function di(e){if(50<ws)throw ws=0,ec=null,Error(c(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ao={};function bh(e,a,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _a(e,a,n,t){return new bh(e,a,n,t)}function Xr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,a){var n=e.alternate;return n===null?(n=_a(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bd(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ui(e,a,n,t,s,i){var l=0;if(t=e,typeof e=="function")Xr(e)&&(l=1);else if(typeof e=="string")l=kg(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=_a(31,n,a,s),e.elementType=xe,e.lanes=i,e;case C:return Nt(n.children,s,i,a);case Q:l=8,s|=24;break;case I:return e=_a(12,n,a,s|2),e.elementType=I,e.lanes=i,e;case ee:return e=_a(13,n,a,s),e.elementType=ee,e.lanes=i,e;case se:return e=_a(19,n,a,s),e.elementType=se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:l=10;break e;case te:l=9;break e;case J:l=11;break e;case ae:l=14;break e;case $:l=16,t=null;break e}l=29,n=Error(c(130,e===null?"null":typeof e,"")),t=null}return a=_a(l,n,a,s),a.elementType=e,a.type=t,a.lanes=i,a}function Nt(e,a,n,t){return e=_a(7,e,t,a),e.lanes=n,e}function Kr(e,a,n){return e=_a(6,e,null,a),e.lanes=n,e}function Yd(e){var a=_a(18,null,null,0);return a.stateNode=e,a}function Zr(e,a,n){return a=_a(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Vd=new WeakMap;function Ka(e,a){if(typeof e=="object"&&e!==null){var n=Vd.get(e);return n!==void 0?n:(a={value:e,source:a,stack:en(a)},Vd.set(e,a),a)}return{value:e,source:a,stack:en(a)}}var no=[],to=0,pi=null,es=0,Za=[],Ja=0,In=null,un=1,pn="";function jn(e,a){no[to++]=es,no[to++]=pi,pi=e,es=a}function Qd(e,a,n){Za[Ja++]=un,Za[Ja++]=pn,Za[Ja++]=In,In=e;var t=un;e=pn;var s=32-va(t)-1;t&=~(1<<s),n+=1;var i=32-va(a)+s;if(30<i){var l=s-s%5;i=(t&(1<<l)-1).toString(32),t>>=l,s-=l,un=1<<32-va(a)+s|n<<s|t,pn=i+e}else un=1<<i|n<<s|t,pn=e}function Jr(e){e.return!==null&&(jn(e,1),Qd(e,1,0))}function $r(e){for(;e===pi;)pi=no[--to],no[to]=null,es=no[--to],no[to]=null;for(;e===In;)In=Za[--Ja],Za[Ja]=null,pn=Za[--Ja],Za[Ja]=null,un=Za[--Ja],Za[Ja]=null}function Id(e,a){Za[Ja++]=un,Za[Ja++]=pn,Za[Ja++]=In,un=a.id,pn=a.overflow,In=e}var ma=null,Ye=null,Ee=!1,Xn=null,$a=!1,Wr=Error(c(519));function Kn(e){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw as(Ka(a,e)),Wr}function Xd(e){var a=e.stateNode,n=e.type,t=e.memoizedProps;switch(a[ia]=e,a[ua]=t,n){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(n=0;n<js.length;n++)ze(js[n],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":ze("invalid",a),sd(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":ze("invalid",a);break;case"textarea":ze("invalid",a),rd(a,t.value,t.defaultValue,t.children)}n=t.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||t.suppressHydrationWarning===!0||cm(a.textContent,n)?(t.popover!=null&&(ze("beforetoggle",a),ze("toggle",a)),t.onScroll!=null&&ze("scroll",a),t.onScrollEnd!=null&&ze("scrollend",a),t.onClick!=null&&(a.onclick=yn),a=!0):a=!1,a||Kn(e,!0)}function Kd(e){for(ma=e.return;ma;)switch(ma.tag){case 5:case 31:case 13:$a=!1;return;case 27:case 3:$a=!0;return;default:ma=ma.return}}function oo(e){if(e!==ma)return!1;if(!Ee)return Kd(e),Ee=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hc(e.type,e.memoizedProps)),n=!n),n&&Ye&&Kn(e),Kd(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=vm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=vm(e)}else a===27?(a=Ye,rt(e.type)?(e=yc,yc=null,Ye=e):Ye=a):Ye=ma?Fa(e.stateNode.nextSibling):null;return!0}function qt(){Ye=ma=null,Ee=!1}function Fr(){var e=Xn;return e!==null&&(Ca===null?Ca=e:Ca.push.apply(Ca,e),Xn=null),e}function as(e){Xn===null?Xn=[e]:Xn.push(e)}var Pr=v(null),Et=null,zn=null;function Zn(e,a,n){K(Pr,a._currentValue),a._currentValue=n}function Sn(e){e._currentValue=Pr.current,G(Pr)}function el(e,a,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===n)break;e=e.return}}function al(e,a,n,t){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var l=s.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=s;for(var x=0;x<a.length;x++)if(p.context===a[x]){i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),el(i.return,n,e),t||(l=null);break e}i=p.next}}else if(s.tag===18){if(l=s.return,l===null)throw Error(c(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),el(l,n,e),l=null}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}}function so(e,a,n,t){e=null;for(var s=a,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var l=s.alternate;if(l===null)throw Error(c(387));if(l=l.memoizedProps,l!==null){var p=s.type;Oa(s.pendingProps.value,l.value)||(e!==null?e.push(p):e=[p])}}else if(s===de.current){if(l=s.alternate,l===null)throw Error(c(387));l.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Es):e=[Es])}s=s.return}e!==null&&al(a,e,n,t),a.flags|=262144}function mi(e){for(e=e.firstContext;e!==null;){if(!Oa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tt(e){Et=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return Zd(Et,e)}function fi(e,a){return Et===null&&Tt(e),Zd(e,a)}function Zd(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},zn===null){if(e===null)throw Error(c(308));zn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else zn=zn.next=a;return n}var vh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,t){e.push(t)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},xh=r.unstable_scheduleCallback,yh=r.unstable_NormalPriority,aa={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nl(){return{controller:new vh,data:new Map,refCount:0}}function ns(e){e.refCount--,e.refCount===0&&xh(yh,function(){e.controller.abort()})}var ts=null,tl=0,io=0,ro=null;function wh(e,a){if(ts===null){var n=ts=[];tl=0,io=ic(),ro={status:"pending",value:void 0,then:function(t){n.push(t)}}}return tl++,a.then(Jd,Jd),a}function Jd(){if(--tl===0&&ts!==null){ro!==null&&(ro.status="fulfilled");var e=ts;ts=null,io=0,ro=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function kh(e,a){var n=[],t={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){t.status="fulfilled",t.value=a;for(var s=0;s<n.length;s++)(0,n[s])(a)},function(s){for(t.status="rejected",t.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),t}var $d=D.S;D.S=function(e,a){Dp=da(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&wh(e,a),$d!==null&&$d(e,a)};var At=v(null);function ol(){var e=At.current;return e!==null?e:Re.pooledCache}function hi(e,a){a===null?K(At,At.current):K(At,a.pool)}function Wd(){var e=ol();return e===null?null:{parent:aa._currentValue,pool:e}}var lo=Error(c(460)),sl=Error(c(474)),gi=Error(c(542)),bi={then:function(){}};function Fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pd(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(yn,yn),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,au(e),e;default:if(typeof a.status=="string")a.then(yn,yn);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=a,e.status="pending",e.then(function(t){if(a.status==="pending"){var s=a;s.status="fulfilled",s.value=t}},function(t){if(a.status==="pending"){var s=a;s.status="rejected",s.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,au(e),e}throw Mt=a,lo}}function Ct(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Mt=n,lo):n}}var Mt=null;function eu(){if(Mt===null)throw Error(c(459));var e=Mt;return Mt=null,e}function au(e){if(e===lo||e===gi)throw Error(c(483))}var co=null,os=0;function vi(e){var a=os;return os+=1,co===null&&(co=[]),Pd(co,e,a)}function ss(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function xi(e,a){throw a.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function nu(e){function a(q,z){if(e){var E=q.deletions;E===null?(q.deletions=[z],q.flags|=16):E.push(z)}}function n(q,z){if(!e)return null;for(;z!==null;)a(q,z),z=z.sibling;return null}function t(q){for(var z=new Map;q!==null;)q.key!==null?z.set(q.key,q):z.set(q.index,q),q=q.sibling;return z}function s(q,z){return q=kn(q,z),q.index=0,q.sibling=null,q}function i(q,z,E){return q.index=E,e?(E=q.alternate,E!==null?(E=E.index,E<z?(q.flags|=67108866,z):E):(q.flags|=67108866,z)):(q.flags|=1048576,z)}function l(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function p(q,z,E,R){return z===null||z.tag!==6?(z=Kr(E,q.mode,R),z.return=q,z):(z=s(z,E),z.return=q,z)}function x(q,z,E,R){var re=E.type;return re===C?_(q,z,E.props.children,R,E.key):z!==null&&(z.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===$&&Ct(re)===z.type)?(z=s(z,E.props),ss(z,E),z.return=q,z):(z=ui(E.type,E.key,E.props,null,q.mode,R),ss(z,E),z.return=q,z)}function T(q,z,E,R){return z===null||z.tag!==4||z.stateNode.containerInfo!==E.containerInfo||z.stateNode.implementation!==E.implementation?(z=Zr(E,q.mode,R),z.return=q,z):(z=s(z,E.children||[]),z.return=q,z)}function _(q,z,E,R,re){return z===null||z.tag!==7?(z=Nt(E,q.mode,R,re),z.return=q,z):(z=s(z,E),z.return=q,z)}function H(q,z,E){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Kr(""+z,q.mode,E),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case k:return E=ui(z.type,z.key,z.props,null,q.mode,E),ss(E,z),E.return=q,E;case A:return z=Zr(z,q.mode,E),z.return=q,z;case $:return z=Ct(z),H(q,z,E)}if(ke(z)||ye(z))return z=Nt(z,q.mode,E,null),z.return=q,z;if(typeof z.then=="function")return H(q,vi(z),E);if(z.$$typeof===F)return H(q,fi(q,z),E);xi(q,z)}return null}function M(q,z,E,R){var re=z!==null?z.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return re!==null?null:p(q,z,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case k:return E.key===re?x(q,z,E,R):null;case A:return E.key===re?T(q,z,E,R):null;case $:return E=Ct(E),M(q,z,E,R)}if(ke(E)||ye(E))return re!==null?null:_(q,z,E,R,null);if(typeof E.then=="function")return M(q,z,vi(E),R);if(E.$$typeof===F)return M(q,z,fi(q,E),R);xi(q,E)}return null}function L(q,z,E,R,re){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return q=q.get(E)||null,p(z,q,""+R,re);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case k:return q=q.get(R.key===null?E:R.key)||null,x(z,q,R,re);case A:return q=q.get(R.key===null?E:R.key)||null,T(z,q,R,re);case $:return R=Ct(R),L(q,z,E,R,re)}if(ke(R)||ye(R))return q=q.get(E)||null,_(z,q,R,re,null);if(typeof R.then=="function")return L(q,z,E,vi(R),re);if(R.$$typeof===F)return L(q,z,E,fi(z,R),re);xi(z,R)}return null}function ne(q,z,E,R){for(var re=null,Ae=null,oe=z,ve=z=0,Ne=null;oe!==null&&ve<E.length;ve++){oe.index>ve?(Ne=oe,oe=null):Ne=oe.sibling;var Ce=M(q,oe,E[ve],R);if(Ce===null){oe===null&&(oe=Ne);break}e&&oe&&Ce.alternate===null&&a(q,oe),z=i(Ce,z,ve),Ae===null?re=Ce:Ae.sibling=Ce,Ae=Ce,oe=Ne}if(ve===E.length)return n(q,oe),Ee&&jn(q,ve),re;if(oe===null){for(;ve<E.length;ve++)oe=H(q,E[ve],R),oe!==null&&(z=i(oe,z,ve),Ae===null?re=oe:Ae.sibling=oe,Ae=oe);return Ee&&jn(q,ve),re}for(oe=t(oe);ve<E.length;ve++)Ne=L(oe,q,ve,E[ve],R),Ne!==null&&(e&&Ne.alternate!==null&&oe.delete(Ne.key===null?ve:Ne.key),z=i(Ne,z,ve),Ae===null?re=Ne:Ae.sibling=Ne,Ae=Ne);return e&&oe.forEach(function(pt){return a(q,pt)}),Ee&&jn(q,ve),re}function ce(q,z,E,R){if(E==null)throw Error(c(151));for(var re=null,Ae=null,oe=z,ve=z=0,Ne=null,Ce=E.next();oe!==null&&!Ce.done;ve++,Ce=E.next()){oe.index>ve?(Ne=oe,oe=null):Ne=oe.sibling;var pt=M(q,oe,Ce.value,R);if(pt===null){oe===null&&(oe=Ne);break}e&&oe&&pt.alternate===null&&a(q,oe),z=i(pt,z,ve),Ae===null?re=pt:Ae.sibling=pt,Ae=pt,oe=Ne}if(Ce.done)return n(q,oe),Ee&&jn(q,ve),re;if(oe===null){for(;!Ce.done;ve++,Ce=E.next())Ce=H(q,Ce.value,R),Ce!==null&&(z=i(Ce,z,ve),Ae===null?re=Ce:Ae.sibling=Ce,Ae=Ce);return Ee&&jn(q,ve),re}for(oe=t(oe);!Ce.done;ve++,Ce=E.next())Ce=L(oe,q,ve,Ce.value,R),Ce!==null&&(e&&Ce.alternate!==null&&oe.delete(Ce.key===null?ve:Ce.key),z=i(Ce,z,ve),Ae===null?re=Ce:Ae.sibling=Ce,Ae=Ce);return e&&oe.forEach(function(Dg){return a(q,Dg)}),Ee&&jn(q,ve),re}function _e(q,z,E,R){if(typeof E=="object"&&E!==null&&E.type===C&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case k:e:{for(var re=E.key;z!==null;){if(z.key===re){if(re=E.type,re===C){if(z.tag===7){n(q,z.sibling),R=s(z,E.props.children),R.return=q,q=R;break e}}else if(z.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===$&&Ct(re)===z.type){n(q,z.sibling),R=s(z,E.props),ss(R,E),R.return=q,q=R;break e}n(q,z);break}else a(q,z);z=z.sibling}E.type===C?(R=Nt(E.props.children,q.mode,R,E.key),R.return=q,q=R):(R=ui(E.type,E.key,E.props,null,q.mode,R),ss(R,E),R.return=q,q=R)}return l(q);case A:e:{for(re=E.key;z!==null;){if(z.key===re)if(z.tag===4&&z.stateNode.containerInfo===E.containerInfo&&z.stateNode.implementation===E.implementation){n(q,z.sibling),R=s(z,E.children||[]),R.return=q,q=R;break e}else{n(q,z);break}else a(q,z);z=z.sibling}R=Zr(E,q.mode,R),R.return=q,q=R}return l(q);case $:return E=Ct(E),_e(q,z,E,R)}if(ke(E))return ne(q,z,E,R);if(ye(E)){if(re=ye(E),typeof re!="function")throw Error(c(150));return E=re.call(E),ce(q,z,E,R)}if(typeof E.then=="function")return _e(q,z,vi(E),R);if(E.$$typeof===F)return _e(q,z,fi(q,E),R);xi(q,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,z!==null&&z.tag===6?(n(q,z.sibling),R=s(z,E),R.return=q,q=R):(n(q,z),R=Kr(E,q.mode,R),R.return=q,q=R),l(q)):n(q,z)}return function(q,z,E,R){try{os=0;var re=_e(q,z,E,R);return co=null,re}catch(oe){if(oe===lo||oe===gi)throw oe;var Ae=_a(29,oe,null,q.mode);return Ae.lanes=R,Ae.return=q,Ae}}}var Dt=nu(!0),tu=nu(!1),Jn=!1;function il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rl(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,a,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(Me&2)!==0){var s=t.pending;return s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a,a=di(e),Hd(e,null,n),a}return ci(e,t,a,n),di(e)}function is(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,Ho(e,n)}}function ll(e,a){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?s=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?s=i=a:i=i.next=a}else s=i=a;n={baseState:t.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:t.shared,callbacks:t.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var cl=!1;function rs(){if(cl){var e=ro;if(e!==null)throw e}}function ls(e,a,n,t){cl=!1;var s=e.updateQueue;Jn=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var x=p,T=x.next;x.next=null,l===null?i=T:l.next=T,l=x;var _=e.alternate;_!==null&&(_=_.updateQueue,p=_.lastBaseUpdate,p!==l&&(p===null?_.firstBaseUpdate=T:p.next=T,_.lastBaseUpdate=x))}if(i!==null){var H=s.baseState;l=0,_=T=x=null,p=i;do{var M=p.lane&-536870913,L=M!==p.lane;if(L?(Se&M)===M:(t&M)===M){M!==0&&M===io&&(cl=!0),_!==null&&(_=_.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ne=e,ce=p;M=a;var _e=n;switch(ce.tag){case 1:if(ne=ce.payload,typeof ne=="function"){H=ne.call(_e,H,M);break e}H=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ce.payload,M=typeof ne=="function"?ne.call(_e,H,M):ne,M==null)break e;H=j({},H,M);break e;case 2:Jn=!0}}M=p.callback,M!==null&&(e.flags|=64,L&&(e.flags|=8192),L=s.callbacks,L===null?s.callbacks=[M]:L.push(M))}else L={lane:M,tag:p.tag,payload:p.payload,callback:p.callback,next:null},_===null?(T=_=L,x=H):_=_.next=L,l|=M;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;L=p,p=L.next,L.next=null,s.lastBaseUpdate=L,s.shared.pending=null}}while(!0);_===null&&(x=H),s.baseState=x,s.firstBaseUpdate=T,s.lastBaseUpdate=_,i===null&&(s.shared.lanes=0),nt|=l,e.lanes=l,e.memoizedState=H}}function ou(e,a){if(typeof e!="function")throw Error(c(191,e));e.call(a)}function su(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ou(n[e],a)}var uo=v(null),yi=v(0);function iu(e,a){e=Ln,K(yi,e),K(uo,a),Ln=e|a.baseLanes}function dl(){K(yi,Ln),K(uo,uo.current)}function ul(){Ln=yi.current,G(uo),G(yi)}var Ga=v(null),Wa=null;function Fn(e){var a=e.alternate;K(We,We.current&1),K(Ga,e),Wa===null&&(a===null||uo.current!==null||a.memoizedState!==null)&&(Wa=e)}function pl(e){K(We,We.current),K(Ga,e),Wa===null&&(Wa=e)}function ru(e){e.tag===22?(K(We,We.current),K(Ga,e),Wa===null&&(Wa=e)):Pn()}function Pn(){K(We,We.current),K(Ga,Ga.current)}function Ra(e){G(Ga),Wa===e&&(Wa=null),G(We)}var We=v(0);function wi(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||vc(n)||xc(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Nn=0,ge=null,Ue=null,na=null,ki=!1,po=!1,Lt=!1,ji=0,cs=0,mo=null,jh=0;function Ke(){throw Error(c(321))}function ml(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!Oa(e[n],a[n]))return!1;return!0}function fl(e,a,n,t,s,i){return Nn=i,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=e===null||e.memoizedState===null?Qu:Tl,Lt=!1,i=n(t,s),Lt=!1,po&&(i=cu(a,n,t,s)),lu(e),i}function lu(e){D.H=ps;var a=Ue!==null&&Ue.next!==null;if(Nn=0,na=Ue=ge=null,ki=!1,cs=0,mo=null,a)throw Error(c(300));e===null||ta||(e=e.dependencies,e!==null&&mi(e)&&(ta=!0))}function cu(e,a,n,t){ge=e;var s=0;do{if(po&&(mo=null),cs=0,po=!1,25<=s)throw Error(c(301));if(s+=1,na=Ue=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Iu,i=a(n,t)}while(po);return i}function zh(){var e=D.H,a=e.useState()[0];return a=typeof a.then=="function"?ds(a):a,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ge.flags|=1024),a}function hl(){var e=ji!==0;return ji=0,e}function gl(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function bl(e){if(ki){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ki=!1}Nn=0,na=Ue=ge=null,po=!1,cs=ji=0,mo=null}function za(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return na===null?ge.memoizedState=na=e:na=na.next=e,na}function Fe(){if(Ue===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var a=na===null?ge.memoizedState:na.next;if(a!==null)na=a,Ue=e;else{if(e===null)throw ge.alternate===null?Error(c(467)):Error(c(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},na===null?ge.memoizedState=na=e:na=na.next=e}return na}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var a=cs;return cs+=1,mo===null&&(mo=[]),e=Pd(mo,e,a),a=ge,(na===null?a.memoizedState:na.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?Qu:Tl),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ds(e);if(e.$$typeof===F)return fa(e)}throw Error(c(438,String(e)))}function vl(e){var a=null,n=ge.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var t=ge.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(s){return s.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=zi(),ge.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),t=0;t<e;t++)n[t]=P;return a.index++,n}function qn(e,a){return typeof a=="function"?a(e):a}function Ni(e){var a=Fe();return xl(a,Ue,e)}function xl(e,a,n){var t=e.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=n;var s=e.baseQueue,i=t.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}a.baseQueue=s=i,t.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{a=s.next;var p=l=null,x=null,T=a,_=!1;do{var H=T.lane&-536870913;if(H!==T.lane?(Se&H)===H:(Nn&H)===H){var M=T.revertLane;if(M===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),H===io&&(_=!0);else if((Nn&M)===M){T=T.next,M===io&&(_=!0);continue}else H={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(p=x=H,l=i):x=x.next=H,ge.lanes|=M,nt|=M;H=T.action,Lt&&n(i,H),i=T.hasEagerState?T.eagerState:n(i,H)}else M={lane:H,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(p=x=M,l=i):x=x.next=M,ge.lanes|=H,nt|=H;T=T.next}while(T!==null&&T!==a);if(x===null?l=i:x.next=p,!Oa(i,e.memoizedState)&&(ta=!0,_&&(n=ro,n!==null)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=x,t.lastRenderedState=i}return s===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function yl(e){var a=Fe(),n=a.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var t=n.dispatch,s=n.pending,i=a.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);Oa(i,a.memoizedState)||(ta=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),n.lastRenderedState=i}return[i,t]}function du(e,a,n){var t=ge,s=Fe(),i=Ee;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=a();var l=!Oa((Ue||s).memoizedState,n);if(l&&(s.memoizedState=n,ta=!0),s=s.queue,jl(mu.bind(null,t,s,e),[e]),s.getSnapshot!==a||l||na!==null&&na.memoizedState.tag&1){if(t.flags|=2048,fo(9,{destroy:void 0},pu.bind(null,t,s,n,a),null),Re===null)throw Error(c(349));i||(Nn&127)!==0||uu(t,a,n)}return n}function uu(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=ge.updateQueue,a===null?(a=zi(),ge.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function pu(e,a,n,t){a.value=n,a.getSnapshot=t,fu(a)&&hu(e)}function mu(e,a,n){return n(function(){fu(a)&&hu(e)})}function fu(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!Oa(e,n)}catch{return!0}}function hu(e){var a=St(e,2);a!==null&&Ma(a,e,2)}function wl(e){var a=za();if(typeof e=="function"){var n=e;if(e=n(),Lt){nn(!0);try{n()}finally{nn(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},a}function gu(e,a,n,t){return e.baseState=n,xl(e,Ue,typeof t=="function"?t:qn)}function Sh(e,a,n,t,s){if(Ti(e))throw Error(c(485));if(e=a.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};D.T!==null?n(!0):i.isTransition=!1,t(i),n=a.pending,n===null?(i.next=a.pending=i,bu(a,i)):(i.next=n.next,a.pending=n.next=i)}}function bu(e,a){var n=a.action,t=a.payload,s=e.state;if(a.isTransition){var i=D.T,l={};D.T=l;try{var p=n(s,t),x=D.S;x!==null&&x(l,p),vu(e,a,p)}catch(T){kl(e,a,T)}finally{i!==null&&l.types!==null&&(i.types=l.types),D.T=i}}else try{i=n(s,t),vu(e,a,i)}catch(T){kl(e,a,T)}}function vu(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(t){xu(e,a,t)},function(t){return kl(e,a,t)}):xu(e,a,n)}function xu(e,a,n){a.status="fulfilled",a.value=n,yu(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,bu(e,n)))}function kl(e,a,n){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=n,yu(a),a=a.next;while(a!==t)}e.action=null}function yu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function wu(e,a){return a}function ku(e,a){if(Ee){var n=Re.formState;if(n!==null){e:{var t=ge;if(Ee){if(Ye){a:{for(var s=Ye,i=$a;s.nodeType!==8;){if(!i){s=null;break a}if(s=Fa(s.nextSibling),s===null){s=null;break a}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Ye=Fa(s.nextSibling),t=s.data==="F!";break e}}Kn(t)}t=!1}t&&(a=n[0])}}return n=za(),n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:a},n.queue=t,n=Bu.bind(null,ge,t),t.dispatch=n,t=wl(!1),i=El.bind(null,ge,!1,t.queue),t=za(),s={state:a,dispatch:null,action:e,pending:null},t.queue=s,n=Sh.bind(null,ge,s,i,n),s.dispatch=n,t.memoizedState=e,[a,n,!1]}function ju(e){var a=Fe();return zu(a,Ue,e)}function zu(e,a,n){if(a=xl(e,a,wu)[0],e=Ni(qn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=ds(a)}catch(l){throw l===lo?gi:l}else t=a;a=Fe();var s=a.queue,i=s.dispatch;return n!==a.memoizedState&&(ge.flags|=2048,fo(9,{destroy:void 0},Nh.bind(null,s,n),null)),[t,i,e]}function Nh(e,a){e.action=a}function Su(e){var a=Fe(),n=Ue;if(n!==null)return zu(a,n,e);Fe(),a=a.memoizedState,n=Fe();var t=n.queue.dispatch;return n.memoizedState=e,[a,t,!1]}function fo(e,a,n,t){return e={tag:e,create:n,deps:t,inst:a,next:null},a=ge.updateQueue,a===null&&(a=zi(),ge.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,a.lastEffect=e),e}function Nu(){return Fe().memoizedState}function qi(e,a,n,t){var s=za();ge.flags|=e,s.memoizedState=fo(1|a,{destroy:void 0},n,t===void 0?null:t)}function Ei(e,a,n,t){var s=Fe();t=t===void 0?null:t;var i=s.memoizedState.inst;Ue!==null&&t!==null&&ml(t,Ue.memoizedState.deps)?s.memoizedState=fo(a,i,n,t):(ge.flags|=e,s.memoizedState=fo(1|a,i,n,t))}function qu(e,a){qi(8390656,8,e,a)}function jl(e,a){Ei(2048,8,e,a)}function qh(e){ge.flags|=4;var a=ge.updateQueue;if(a===null)a=zi(),ge.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function Eu(e){var a=Fe().memoizedState;return qh({ref:a,nextImpl:e}),function(){if((Me&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function Tu(e,a){return Ei(4,2,e,a)}function Au(e,a){return Ei(4,4,e,a)}function Cu(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Mu(e,a,n){n=n!=null?n.concat([e]):null,Ei(4,4,Cu.bind(null,a,e),n)}function zl(){}function Du(e,a){var n=Fe();a=a===void 0?null:a;var t=n.memoizedState;return a!==null&&ml(a,t[1])?t[0]:(n.memoizedState=[e,a],e)}function Lu(e,a){var n=Fe();a=a===void 0?null:a;var t=n.memoizedState;if(a!==null&&ml(a,t[1]))return t[0];if(t=e(),Lt){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[t,a],t}function Sl(e,a,n){return n===void 0||(Nn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=Up(),ge.lanes|=e,nt|=e,n)}function Uu(e,a,n,t){return Oa(n,a)?n:uo.current!==null?(e=Sl(e,n,t),Oa(e,a)||(ta=!0),e):(Nn&42)===0||(Nn&1073741824)!==0&&(Se&261930)===0?(ta=!0,e.memoizedState=n):(e=Up(),ge.lanes|=e,nt|=e,a)}function Ou(e,a,n,t,s){var i=N.p;N.p=i!==0&&8>i?i:8;var l=D.T,p={};D.T=p,El(e,!1,a,n);try{var x=s(),T=D.S;if(T!==null&&T(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var _=kh(x,t);us(e,a,_,Ya(e))}else us(e,a,t,Ya(e))}catch(H){us(e,a,{then:function(){},status:"rejected",reason:H},Ya())}finally{N.p=i,l!==null&&p.types!==null&&(l.types=p.types),D.T=l}}function Eh(){}function Nl(e,a,n,t){if(e.tag!==5)throw Error(c(476));var s=_u(e).queue;Ou(e,s,a,B,n===null?Eh:function(){return Gu(e),n(t)})}function _u(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:B},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Gu(e){var a=_u(e);a.next===null&&(a=e.alternate.memoizedState),us(e,a.next.queue,{},Ya())}function ql(){return fa(Es)}function Ru(){return Fe().memoizedState}function Hu(){return Fe().memoizedState}function Th(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=Ya();e=$n(n);var t=Wn(a,e,n);t!==null&&(Ma(t,a,n),is(t,a,n)),a={cache:nl()},e.payload=a;return}a=a.return}}function Ah(e,a,n){var t=Ya();n={lane:t,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ti(e)?Yu(a,n):(n=Ir(e,a,n,t),n!==null&&(Ma(n,e,t),Vu(n,a,t)))}function Bu(e,a,n){var t=Ya();us(e,a,n,t)}function us(e,a,n,t){var s={lane:t,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ti(e))Yu(a,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var l=a.lastRenderedState,p=i(l,n);if(s.hasEagerState=!0,s.eagerState=p,Oa(p,l))return ci(e,a,s,0),Re===null&&li(),!1}catch{}if(n=Ir(e,a,s,t),n!==null)return Ma(n,e,t),Vu(n,a,t),!0}return!1}function El(e,a,n,t){if(t={lane:2,revertLane:ic(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ti(e)){if(a)throw Error(c(479))}else a=Ir(e,n,t,2),a!==null&&Ma(a,e,2)}function Ti(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function Yu(e,a){po=ki=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Vu(e,a,n){if((n&4194048)!==0){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,Ho(e,n)}}var ps={readContext:fa,use:Si,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};ps.useEffectEvent=Ke;var Qu={readContext:fa,use:Si,useCallback:function(e,a){return za().memoizedState=[e,a===void 0?null:a],e},useContext:fa,useEffect:qu,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,qi(4194308,4,Cu.bind(null,a,e),n)},useLayoutEffect:function(e,a){return qi(4194308,4,e,a)},useInsertionEffect:function(e,a){qi(4,2,e,a)},useMemo:function(e,a){var n=za();a=a===void 0?null:a;var t=e();if(Lt){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[t,a],t},useReducer:function(e,a,n){var t=za();if(n!==void 0){var s=n(a);if(Lt){nn(!0);try{n(a)}finally{nn(!1)}}}else s=a;return t.memoizedState=t.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},t.queue=e,e=e.dispatch=Ah.bind(null,ge,e),[t.memoizedState,e]},useRef:function(e){var a=za();return e={current:e},a.memoizedState=e},useState:function(e){e=wl(e);var a=e.queue,n=Bu.bind(null,ge,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:zl,useDeferredValue:function(e,a){var n=za();return Sl(n,e,a)},useTransition:function(){var e=wl(!1);return e=Ou.bind(null,ge,e.queue,!0,!1),za().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var t=ge,s=za();if(Ee){if(n===void 0)throw Error(c(407));n=n()}else{if(n=a(),Re===null)throw Error(c(349));(Se&127)!==0||uu(t,a,n)}s.memoizedState=n;var i={value:n,getSnapshot:a};return s.queue=i,qu(mu.bind(null,t,i,e),[e]),t.flags|=2048,fo(9,{destroy:void 0},pu.bind(null,t,i,n,a),null),n},useId:function(){var e=za(),a=Re.identifierPrefix;if(Ee){var n=pn,t=un;n=(t&~(1<<32-va(t)-1)).toString(32)+n,a="_"+a+"R_"+n,n=ji++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=jh++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:ql,useFormState:ku,useActionState:ku,useOptimistic:function(e){var a=za();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=El.bind(null,ge,!0,n),n.dispatch=a,[e,a]},useMemoCache:vl,useCacheRefresh:function(){return za().memoizedState=Th.bind(null,ge)},useEffectEvent:function(e){var a=za(),n={impl:e};return a.memoizedState=n,function(){if((Me&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Tl={readContext:fa,use:Si,useCallback:Du,useContext:fa,useEffect:jl,useImperativeHandle:Mu,useInsertionEffect:Tu,useLayoutEffect:Au,useMemo:Lu,useReducer:Ni,useRef:Nu,useState:function(){return Ni(qn)},useDebugValue:zl,useDeferredValue:function(e,a){var n=Fe();return Uu(n,Ue.memoizedState,e,a)},useTransition:function(){var e=Ni(qn)[0],a=Fe().memoizedState;return[typeof e=="boolean"?e:ds(e),a]},useSyncExternalStore:du,useId:Ru,useHostTransitionStatus:ql,useFormState:ju,useActionState:ju,useOptimistic:function(e,a){var n=Fe();return gu(n,Ue,e,a)},useMemoCache:vl,useCacheRefresh:Hu};Tl.useEffectEvent=Eu;var Iu={readContext:fa,use:Si,useCallback:Du,useContext:fa,useEffect:jl,useImperativeHandle:Mu,useInsertionEffect:Tu,useLayoutEffect:Au,useMemo:Lu,useReducer:yl,useRef:Nu,useState:function(){return yl(qn)},useDebugValue:zl,useDeferredValue:function(e,a){var n=Fe();return Ue===null?Sl(n,e,a):Uu(n,Ue.memoizedState,e,a)},useTransition:function(){var e=yl(qn)[0],a=Fe().memoizedState;return[typeof e=="boolean"?e:ds(e),a]},useSyncExternalStore:du,useId:Ru,useHostTransitionStatus:ql,useFormState:Su,useActionState:Su,useOptimistic:function(e,a){var n=Fe();return Ue!==null?gu(n,Ue,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vl,useCacheRefresh:Hu};Iu.useEffectEvent=Eu;function Al(e,a,n,t){a=e.memoizedState,n=n(t,a),n=n==null?a:j({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={enqueueSetState:function(e,a,n){e=e._reactInternals;var t=Ya(),s=$n(t);s.payload=a,n!=null&&(s.callback=n),a=Wn(e,s,t),a!==null&&(Ma(a,e,t),is(a,e,t))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var t=Ya(),s=$n(t);s.tag=1,s.payload=a,n!=null&&(s.callback=n),a=Wn(e,s,t),a!==null&&(Ma(a,e,t),is(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=Ya(),t=$n(n);t.tag=2,a!=null&&(t.callback=a),a=Wn(e,t,n),a!==null&&(Ma(a,e,n),is(a,e,n))}};function Xu(e,a,n,t,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,l):a.prototype&&a.prototype.isPureReactComponent?!Fo(n,t)||!Fo(s,i):!0}function Ku(e,a,n,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,t),a.state!==e&&Cl.enqueueReplaceState(a,a.state,null)}function Ut(e,a){var n=a;if("ref"in a){n={};for(var t in a)t!=="ref"&&(n[t]=a[t])}if(e=e.defaultProps){n===a&&(n=j({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Zu(e){ri(e)}function Ju(e){console.error(e)}function $u(e){ri(e)}function Ai(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function Wu(e,a,n){try{var t=e.onCaughtError;t(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ml(e,a,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){Ai(e,a)},n}function Fu(e){return e=$n(e),e.tag=3,e}function Pu(e,a,n,t){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;e.payload=function(){return s(i)},e.callback=function(){Wu(a,n,t)}}var l=n.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Wu(a,n,t),typeof s!="function"&&(tt===null?tt=new Set([this]):tt.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})})}function Ch(e,a,n,t,s){if(n.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=n.alternate,a!==null&&so(a,n,s,!0),n=Ga.current,n!==null){switch(n.tag){case 31:case 13:return Wa===null?Yi():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,t===bi?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([t]):a.add(t),tc(e,t,s)),!1;case 22:return n.flags|=65536,t===bi?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([t]):n.add(t)),tc(e,t,s)),!1}throw Error(c(435,n.tag))}return tc(e,t,s),Yi(),!1}if(Ee)return a=Ga.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=s,t!==Wr&&(e=Error(c(422),{cause:t}),as(Ka(e,n)))):(t!==Wr&&(a=Error(c(423),{cause:t}),as(Ka(a,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,t=Ka(t,n),s=Ml(e.stateNode,t,s),ll(e,s),Ze!==4&&(Ze=2)),!1;var i=Error(c(520),{cause:t});if(i=Ka(i,n),ys===null?ys=[i]:ys.push(i),Ze!==4&&(Ze=2),a===null)return!0;t=Ka(t,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Ml(n.stateNode,t,e),ll(n,e),!1;case 1:if(a=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(tt===null||!tt.has(i))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Fu(s),Pu(s,e,n,t),ll(n,s),!1}n=n.return}while(n!==null);return!1}var Dl=Error(c(461)),ta=!1;function ha(e,a,n,t){a.child=e===null?tu(a,null,n,t):Dt(a,e.child,n,t)}function ep(e,a,n,t,s){n=n.render;var i=a.ref;if("ref"in t){var l={};for(var p in t)p!=="ref"&&(l[p]=t[p])}else l=t;return Tt(a),t=fl(e,a,n,l,i,s),p=hl(),e!==null&&!ta?(gl(e,a,s),En(e,a,s)):(Ee&&p&&Jr(a),a.flags|=1,ha(e,a,t,s),a.child)}function ap(e,a,n,t,s){if(e===null){var i=n.type;return typeof i=="function"&&!Xr(i)&&i.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=i,np(e,a,i,t,s)):(e=ui(n.type,null,t,a,a.mode,s),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Bl(e,s)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(l,t)&&e.ref===a.ref)return En(e,a,s)}return a.flags|=1,e=kn(i,t),e.ref=a.ref,e.return=a,a.child=e}function np(e,a,n,t,s){if(e!==null){var i=e.memoizedProps;if(Fo(i,t)&&e.ref===a.ref)if(ta=!1,a.pendingProps=t=i,Bl(e,s))(e.flags&131072)!==0&&(ta=!0);else return a.lanes=e.lanes,En(e,a,s)}return Ll(e,a,n,t,s)}function tp(e,a,n,t){var s=t.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(t=a.child=e.child,s=0;t!==null;)s=s|t.lanes|t.childLanes,t=t.sibling;t=s&~i}else t=0,a.child=null;return op(e,a,i,n,t)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(a,i!==null?i.cachePool:null),i!==null?iu(a,i):dl(),ru(a);else return t=a.lanes=536870912,op(e,a,i!==null?i.baseLanes|n:n,n,t)}else i!==null?(hi(a,i.cachePool),iu(a,i),Pn(),a.memoizedState=null):(e!==null&&hi(a,null),dl(),Pn());return ha(e,a,s,n),a.child}function ms(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function op(e,a,n,t,s){var i=ol();return i=i===null?null:{parent:aa._currentValue,pool:i},a.memoizedState={baseLanes:n,cachePool:i},e!==null&&hi(a,null),dl(),ru(a),e!==null&&so(e,a,t,!0),a.childLanes=s,null}function Ci(e,a){return a=Di({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function sp(e,a,n){return Dt(a,e.child,null,n),e=Ci(a,a.pendingProps),e.flags|=2,Ra(a),a.memoizedState=null,e}function Mh(e,a,n){var t=a.pendingProps,s=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ee){if(t.mode==="hidden")return e=Ci(a,t),a.lanes=536870912,ms(null,e);if(pl(a),(e=Ye)?(e=bm(e,$a),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:In!==null?{id:un,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Yd(e),n.return=a,a.child=n,ma=a,Ye=null)):e=null,e===null)throw Kn(a);return a.lanes=536870912,null}return Ci(a,t)}var i=e.memoizedState;if(i!==null){var l=i.dehydrated;if(pl(a),s)if(a.flags&256)a.flags&=-257,a=sp(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(c(558));else if(ta||so(e,a,n,!1),s=(n&e.childLanes)!==0,ta||s){if(t=Re,t!==null&&(l=Zs(t,n),l!==0&&l!==i.retryLane))throw i.retryLane=l,St(e,l),Ma(t,e,l),Dl;Yi(),a=sp(e,a,n)}else e=i.treeContext,Ye=Fa(l.nextSibling),ma=a,Ee=!0,Xn=null,$a=!1,e!==null&&Id(a,e),a=Ci(a,t),a.flags|=4096;return a}return e=kn(e.child,{mode:t.mode,children:t.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Mi(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function Ll(e,a,n,t,s){return Tt(a),n=fl(e,a,n,t,void 0,s),t=hl(),e!==null&&!ta?(gl(e,a,s),En(e,a,s)):(Ee&&t&&Jr(a),a.flags|=1,ha(e,a,n,s),a.child)}function ip(e,a,n,t,s,i){return Tt(a),a.updateQueue=null,n=cu(a,t,n,s),lu(e),t=hl(),e!==null&&!ta?(gl(e,a,i),En(e,a,i)):(Ee&&t&&Jr(a),a.flags|=1,ha(e,a,n,i),a.child)}function rp(e,a,n,t,s){if(Tt(a),a.stateNode===null){var i=ao,l=n.contextType;typeof l=="object"&&l!==null&&(i=fa(l)),i=new n(t,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cl,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=t,i.state=a.memoizedState,i.refs={},il(a),l=n.contextType,i.context=typeof l=="object"&&l!==null?fa(l):ao,i.state=a.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Al(a,n,l,t),i.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&Cl.enqueueReplaceState(i,i.state,null),ls(a,t,i,s),rs(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(e===null){i=a.stateNode;var p=a.memoizedProps,x=Ut(n,p);i.props=x;var T=i.context,_=n.contextType;l=ao,typeof _=="object"&&_!==null&&(l=fa(_));var H=n.getDerivedStateFromProps;_=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=a.pendingProps!==p,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||T!==l)&&Ku(a,i,t,l),Jn=!1;var M=a.memoizedState;i.state=M,ls(a,t,i,s),rs(),T=a.memoizedState,p||M!==T||Jn?(typeof H=="function"&&(Al(a,n,H,t),T=a.memoizedState),(x=Jn||Xu(a,n,x,t,M,T,l))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=T),i.props=t,i.state=T,i.context=l,t=x):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{i=a.stateNode,rl(e,a),l=a.memoizedProps,_=Ut(n,l),i.props=_,H=a.pendingProps,M=i.context,T=n.contextType,x=ao,typeof T=="object"&&T!==null&&(x=fa(T)),p=n.getDerivedStateFromProps,(T=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==H||M!==x)&&Ku(a,i,t,x),Jn=!1,M=a.memoizedState,i.state=M,ls(a,t,i,s),rs();var L=a.memoizedState;l!==H||M!==L||Jn||e!==null&&e.dependencies!==null&&mi(e.dependencies)?(typeof p=="function"&&(Al(a,n,p,t),L=a.memoizedState),(_=Jn||Xu(a,n,_,t,M,L,x)||e!==null&&e.dependencies!==null&&mi(e.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,L,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,L,x)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&M===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&M===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=L),i.props=t,i.state=L,i.context=x,t=_):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&M===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&M===e.memoizedState||(a.flags|=1024),t=!1)}return i=t,Mi(e,a),t=(a.flags&128)!==0,i||t?(i=a.stateNode,n=t&&typeof n.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&t?(a.child=Dt(a,e.child,null,s),a.child=Dt(a,null,n,s)):ha(e,a,n,s),a.memoizedState=i.state,e=a.child):e=En(e,a,s),e}function lp(e,a,n,t){return qt(),a.flags|=256,ha(e,a,n,t),a.child}var Ul={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ol(e){return{baseLanes:e,cachePool:Wd()}}function _l(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=Ba),e}function cp(e,a,n){var t=a.pendingProps,s=!1,i=(a.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),l&&(s=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ee){if(s?Fn(a):Pn(),(e=Ye)?(e=bm(e,$a),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:In!==null?{id:un,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Yd(e),n.return=a,a.child=n,ma=a,Ye=null)):e=null,e===null)throw Kn(a);return xc(e)?a.lanes=32:a.lanes=536870912,null}var p=t.children;return t=t.fallback,s?(Pn(),s=a.mode,p=Di({mode:"hidden",children:p},s),t=Nt(t,s,n,null),p.return=a,t.return=a,p.sibling=t,a.child=p,t=a.child,t.memoizedState=Ol(n),t.childLanes=_l(e,l,n),a.memoizedState=Ul,ms(null,t)):(Fn(a),Gl(a,p))}var x=e.memoizedState;if(x!==null&&(p=x.dehydrated,p!==null)){if(i)a.flags&256?(Fn(a),a.flags&=-257,a=Rl(e,a,n)):a.memoizedState!==null?(Pn(),a.child=e.child,a.flags|=128,a=null):(Pn(),p=t.fallback,s=a.mode,t=Di({mode:"visible",children:t.children},s),p=Nt(p,s,n,null),p.flags|=2,t.return=a,p.return=a,t.sibling=p,a.child=t,Dt(a,e.child,null,n),t=a.child,t.memoizedState=Ol(n),t.childLanes=_l(e,l,n),a.memoizedState=Ul,a=ms(null,t));else if(Fn(a),xc(p)){if(l=p.nextSibling&&p.nextSibling.dataset,l)var T=l.dgst;l=T,t=Error(c(419)),t.stack="",t.digest=l,as({value:t,source:null,stack:null}),a=Rl(e,a,n)}else if(ta||so(e,a,n,!1),l=(n&e.childLanes)!==0,ta||l){if(l=Re,l!==null&&(t=Zs(l,n),t!==0&&t!==x.retryLane))throw x.retryLane=t,St(e,t),Ma(l,e,t),Dl;vc(p)||Yi(),a=Rl(e,a,n)}else vc(p)?(a.flags|=192,a.child=e.child,a=null):(e=x.treeContext,Ye=Fa(p.nextSibling),ma=a,Ee=!0,Xn=null,$a=!1,e!==null&&Id(a,e),a=Gl(a,t.children),a.flags|=4096);return a}return s?(Pn(),p=t.fallback,s=a.mode,x=e.child,T=x.sibling,t=kn(x,{mode:"hidden",children:t.children}),t.subtreeFlags=x.subtreeFlags&65011712,T!==null?p=kn(T,p):(p=Nt(p,s,n,null),p.flags|=2),p.return=a,t.return=a,t.sibling=p,a.child=t,ms(null,t),t=a.child,p=e.child.memoizedState,p===null?p=Ol(n):(s=p.cachePool,s!==null?(x=aa._currentValue,s=s.parent!==x?{parent:x,pool:x}:s):s=Wd(),p={baseLanes:p.baseLanes|n,cachePool:s}),t.memoizedState=p,t.childLanes=_l(e,l,n),a.memoizedState=Ul,ms(e.child,t)):(Fn(a),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:t.children}),n.return=a,n.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=n,a.memoizedState=null,n)}function Gl(e,a){return a=Di({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Di(e,a){return e=_a(22,e,null,a),e.lanes=0,e}function Rl(e,a,n){return Dt(a,e.child,null,n),e=Gl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function dp(e,a,n){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),el(e.return,a,n)}function Hl(e,a,n,t,s,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:s,treeForkCount:i}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=n,l.tailMode=s,l.treeForkCount=i)}function up(e,a,n){var t=a.pendingProps,s=t.revealOrder,i=t.tail;t=t.children;var l=We.current,p=(l&2)!==0;if(p?(l=l&1|2,a.flags|=128):l&=1,K(We,l),ha(e,a,t,n),t=Ee?es:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dp(e,n,a);else if(e.tag===19)dp(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=a.child,s=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=a.child,a.child=null):(s=n.sibling,n.sibling=null),Hl(a,!1,s,n,i,t);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=a.child,a.child=null;s!==null;){if(e=s.alternate,e!==null&&wi(e)===null){a.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Hl(a,!0,n,null,i,t);break;case"together":Hl(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function En(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),nt|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(so(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,n=kn(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Bl(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&mi(e)))}function Dh(e,a,n){switch(a.tag){case 3:He(a,a.stateNode.containerInfo),Zn(a,aa,e.memoizedState.cache),qt();break;case 27:case 5:Te(a);break;case 4:He(a,a.stateNode.containerInfo);break;case 10:Zn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,pl(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(Fn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?cp(e,a,n):(Fn(a),e=En(e,a,n),e!==null?e.sibling:null);Fn(a);break;case 19:var s=(e.flags&128)!==0;if(t=(n&a.childLanes)!==0,t||(so(e,a,n,!1),t=(n&a.childLanes)!==0),s){if(t)return up(e,a,n);a.flags|=128}if(s=a.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),K(We,We.current),t)break;return null;case 22:return a.lanes=0,tp(e,a,n,a.pendingProps);case 24:Zn(a,aa,e.memoizedState.cache)}return En(e,a,n)}function pp(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)ta=!0;else{if(!Bl(e,n)&&(a.flags&128)===0)return ta=!1,Dh(e,a,n);ta=(e.flags&131072)!==0}else ta=!1,Ee&&(a.flags&1048576)!==0&&Qd(a,es,a.index);switch(a.lanes=0,a.tag){case 16:e:{var t=a.pendingProps;if(e=Ct(a.elementType),a.type=e,typeof e=="function")Xr(e)?(t=Ut(e,t),a.tag=1,a=rp(null,a,e,t,n)):(a.tag=0,a=Ll(null,a,e,t,n));else{if(e!=null){var s=e.$$typeof;if(s===J){a.tag=11,a=ep(null,a,e,t,n);break e}else if(s===ae){a.tag=14,a=ap(null,a,e,t,n);break e}}throw a=we(e)||e,Error(c(306,a,""))}}return a;case 0:return Ll(e,a,a.type,a.pendingProps,n);case 1:return t=a.type,s=Ut(t,a.pendingProps),rp(e,a,t,s,n);case 3:e:{if(He(a,a.stateNode.containerInfo),e===null)throw Error(c(387));t=a.pendingProps;var i=a.memoizedState;s=i.element,rl(e,a),ls(a,t,null,n);var l=a.memoizedState;if(t=l.cache,Zn(a,aa,t),t!==i.cache&&al(a,[aa],n,!0),rs(),t=l.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=lp(e,a,t,n);break e}else if(t!==s){s=Ka(Error(c(424)),a),as(s),a=lp(e,a,t,n);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=Fa(e.firstChild),ma=a,Ee=!0,Xn=null,$a=!0,n=tu(a,null,t,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),t===s){a=En(e,a,n);break e}ha(e,a,t,n)}a=a.child}return a;case 26:return Mi(e,a),e===null?(n=jm(a.type,null,a.pendingProps,null))?a.memoizedState=n:Ee||(n=a.type,e=a.pendingProps,t=Ji(fe.current).createElement(n),t[ia]=a,t[ua]=e,ga(t,n,e),ea(t),a.stateNode=t):a.memoizedState=jm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Te(a),e===null&&Ee&&(t=a.stateNode=ym(a.type,a.pendingProps,fe.current),ma=a,$a=!0,s=Ye,rt(a.type)?(yc=s,Ye=Fa(t.firstChild)):Ye=s),ha(e,a,a.pendingProps.children,n),Mi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ee&&((s=t=Ye)&&(t=cg(t,a.type,a.pendingProps,$a),t!==null?(a.stateNode=t,ma=a,Ye=Fa(t.firstChild),$a=!1,s=!0):s=!1),s||Kn(a)),Te(a),s=a.type,i=a.pendingProps,l=e!==null?e.memoizedProps:null,t=i.children,hc(s,i)?t=null:l!==null&&hc(s,l)&&(a.flags|=32),a.memoizedState!==null&&(s=fl(e,a,zh,null,null,n),Es._currentValue=s),Mi(e,a),ha(e,a,t,n),a.child;case 6:return e===null&&Ee&&((e=n=Ye)&&(n=dg(n,a.pendingProps,$a),n!==null?(a.stateNode=n,ma=a,Ye=null,e=!0):e=!1),e||Kn(a)),null;case 13:return cp(e,a,n);case 4:return He(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Dt(a,null,t,n):ha(e,a,t,n),a.child;case 11:return ep(e,a,a.type,a.pendingProps,n);case 7:return ha(e,a,a.pendingProps,n),a.child;case 8:return ha(e,a,a.pendingProps.children,n),a.child;case 12:return ha(e,a,a.pendingProps.children,n),a.child;case 10:return t=a.pendingProps,Zn(a,a.type,t.value),ha(e,a,t.children,n),a.child;case 9:return s=a.type._context,t=a.pendingProps.children,Tt(a),s=fa(s),t=t(s),a.flags|=1,ha(e,a,t,n),a.child;case 14:return ap(e,a,a.type,a.pendingProps,n);case 15:return np(e,a,a.type,a.pendingProps,n);case 19:return up(e,a,n);case 31:return Mh(e,a,n);case 22:return tp(e,a,n,a.pendingProps);case 24:return Tt(a),t=fa(aa),e===null?(s=ol(),s===null&&(s=Re,i=nl(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=n),s=i),a.memoizedState={parent:t,cache:s},il(a),Zn(a,aa,s)):((e.lanes&n)!==0&&(rl(e,a),ls(a,null,null,n),rs()),s=e.memoizedState,i=a.memoizedState,s.parent!==t?(s={parent:t,cache:t},a.memoizedState=s,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=s),Zn(a,aa,t)):(t=i.cache,Zn(a,aa,t),t!==s.cache&&al(a,[aa],n,!0))),ha(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function Tn(e){e.flags|=4}function Yl(e,a,n,t,s){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Rp())e.flags|=8192;else throw Mt=bi,sl}else e.flags&=-16777217}function mp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Em(a))if(Rp())e.flags|=8192;else throw Mt=bi,sl}function Li(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Yt():536870912,e.lanes|=a,vo|=a)}function fs(e,a){if(!Ee)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ve(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(a)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,t|=s.subtreeFlags&65011712,t|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,t|=s.subtreeFlags,t|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=t,e.childLanes=n,a}function Lh(e,a,n){var t=a.pendingProps;switch($r(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(a),null;case 1:return Ve(a),null;case 3:return n=a.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Sn(aa),V(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oo(a)?Tn(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Fr())),Ve(a),null;case 26:var s=a.type,i=a.memoizedState;return e===null?(Tn(a),i!==null?(Ve(a),mp(a,i)):(Ve(a),Yl(a,s,null,t,n))):i?i!==e.memoizedState?(Tn(a),Ve(a),mp(a,i)):(Ve(a),a.flags&=-16777217):(e=e.memoizedProps,e!==t&&Tn(a),Ve(a),Yl(a,s,e,t,n)),null;case 27:if(Be(a),n=fe.current,s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&Tn(a);else{if(!t){if(a.stateNode===null)throw Error(c(166));return Ve(a),null}e=Z.current,oo(a)?Xd(a):(e=ym(s,t,n),a.stateNode=e,Tn(a))}return Ve(a),null;case 5:if(Be(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&Tn(a);else{if(!t){if(a.stateNode===null)throw Error(c(166));return Ve(a),null}if(i=Z.current,oo(a))Xd(a);else{var l=Ji(fe.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof t.is=="string"?l.createElement("select",{is:t.is}):l.createElement("select"),t.multiple?i.multiple=!0:t.size&&(i.size=t.size);break;default:i=typeof t.is=="string"?l.createElement(s,{is:t.is}):l.createElement(s)}}i[ia]=a,i[ua]=t;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=i;e:switch(ga(i,s,t),s){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Tn(a)}}return Ve(a),Yl(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==t&&Tn(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(c(166));if(e=fe.current,oo(a)){if(e=a.stateNode,n=a.memoizedProps,t=null,s=ma,s!==null)switch(s.tag){case 27:case 5:t=s.memoizedProps}e[ia]=a,e=!!(e.nodeValue===n||t!==null&&t.suppressHydrationWarning===!0||cm(e.nodeValue,n)),e||Kn(a,!0)}else e=Ji(e).createTextNode(t),e[ia]=a,a.stateNode=e}return Ve(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(t=oo(a),n!==null){if(e===null){if(!t)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ia]=a}else qt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ve(a),e=!1}else n=Fr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(Ra(a),a):(Ra(a),null);if((a.flags&128)!==0)throw Error(c(558))}return Ve(a),null;case 13:if(t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=oo(a),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[ia]=a}else qt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ve(a),s=!1}else s=Fr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return a.flags&256?(Ra(a),a):(Ra(a),null)}return Ra(a),(a.flags&128)!==0?(a.lanes=n,a):(n=t!==null,e=e!==null&&e.memoizedState!==null,n&&(t=a.child,s=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(s=t.alternate.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==s&&(t.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Li(a,a.updateQueue),Ve(a),null);case 4:return V(),e===null&&dc(a.stateNode.containerInfo),Ve(a),null;case 10:return Sn(a.type),Ve(a),null;case 19:if(G(We),t=a.memoizedState,t===null)return Ve(a),null;if(s=(a.flags&128)!==0,i=t.rendering,i===null)if(s)fs(t,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=wi(e),i!==null){for(a.flags|=128,fs(t,!1),e=i.updateQueue,a.updateQueue=e,Li(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Bd(n,e),n=n.sibling;return K(We,We.current&1|2),Ee&&jn(a,t.treeForkCount),a.child}e=e.sibling}t.tail!==null&&da()>Ri&&(a.flags|=128,s=!0,fs(t,!1),a.lanes=4194304)}else{if(!s)if(e=wi(i),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,Li(a,e),fs(t,!0),t.tail===null&&t.tailMode==="hidden"&&!i.alternate&&!Ee)return Ve(a),null}else 2*da()-t.renderingStartTime>Ri&&n!==536870912&&(a.flags|=128,s=!0,fs(t,!1),a.lanes=4194304);t.isBackwards?(i.sibling=a.child,a.child=i):(e=t.last,e!==null?e.sibling=i:a.child=i,t.last=i)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=da(),e.sibling=null,n=We.current,K(We,s?n&1|2:n&1),Ee&&jn(a,t.treeForkCount),e):(Ve(a),null);case 22:case 23:return Ra(a),ul(),t=a.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(n&536870912)!==0&&(a.flags&128)===0&&(Ve(a),a.subtreeFlags&6&&(a.flags|=8192)):Ve(a),n=a.updateQueue,n!==null&&Li(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==n&&(a.flags|=2048),e!==null&&G(At),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Sn(aa),Ve(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function Uh(e,a){switch($r(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Sn(aa),V(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Be(a),null;case 31:if(a.memoizedState!==null){if(Ra(a),a.alternate===null)throw Error(c(340));qt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Ra(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));qt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return G(We),null;case 4:return V(),null;case 10:return Sn(a.type),null;case 22:case 23:return Ra(a),ul(),e!==null&&G(At),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Sn(aa),null;case 25:return null;default:return null}}function fp(e,a){switch($r(a),a.tag){case 3:Sn(aa),V();break;case 26:case 27:case 5:Be(a);break;case 4:V();break;case 31:a.memoizedState!==null&&Ra(a);break;case 13:Ra(a);break;case 19:G(We);break;case 10:Sn(a.type);break;case 22:case 23:Ra(a),ul(),e!==null&&G(At);break;case 24:Sn(aa)}}function hs(e,a){try{var n=a.updateQueue,t=n!==null?n.lastEffect:null;if(t!==null){var s=t.next;n=s;do{if((n.tag&e)===e){t=void 0;var i=n.create,l=n.inst;t=i(),l.destroy=t}n=n.next}while(n!==s)}}catch(p){Le(a,a.return,p)}}function et(e,a,n){try{var t=a.updateQueue,s=t!==null?t.lastEffect:null;if(s!==null){var i=s.next;t=i;do{if((t.tag&e)===e){var l=t.inst,p=l.destroy;if(p!==void 0){l.destroy=void 0,s=a;var x=n,T=p;try{T()}catch(_){Le(s,x,_)}}}t=t.next}while(t!==i)}}catch(_){Le(a,a.return,_)}}function hp(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{su(a,n)}catch(t){Le(e,e.return,t)}}}function gp(e,a,n){n.props=Ut(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(t){Le(e,a,t)}}function gs(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof n=="function"?e.refCleanup=n(t):n.current=t}}catch(s){Le(e,a,s)}}function mn(e,a){var n=e.ref,t=e.refCleanup;if(n!==null)if(typeof t=="function")try{t()}catch(s){Le(e,a,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Le(e,a,s)}else n.current=null}function bp(e){var a=e.type,n=e.memoizedProps,t=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&t.focus();break e;case"img":n.src?t.src=n.src:n.srcSet&&(t.srcset=n.srcSet)}}catch(s){Le(e,e.return,s)}}function Vl(e,a,n){try{var t=e.stateNode;tg(t,e.type,n,a),t[ua]=a}catch(s){Le(e,e.return,s)}}function vp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rt(e.type)||e.tag===4}function Ql(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=yn));else if(t!==4&&(t===27&&rt(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(Il(e,a,n),e=e.sibling;e!==null;)Il(e,a,n),e=e.sibling}function Ui(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(t!==4&&(t===27&&rt(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ui(e,a,n),e=e.sibling;e!==null;)Ui(e,a,n),e=e.sibling}function xp(e){var a=e.stateNode,n=e.memoizedProps;try{for(var t=e.type,s=a.attributes;s.length;)a.removeAttributeNode(s[0]);ga(a,t,n),a[ia]=e,a[ua]=n}catch(i){Le(e,e.return,i)}}var An=!1,oa=!1,Xl=!1,yp=typeof WeakSet=="function"?WeakSet:Set,ca=null;function Oh(e,a){if(e=e.containerInfo,mc=nr,e=Md(e),Rr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var s=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,p=-1,x=-1,T=0,_=0,H=e,M=null;a:for(;;){for(var L;H!==n||s!==0&&H.nodeType!==3||(p=l+s),H!==i||t!==0&&H.nodeType!==3||(x=l+t),H.nodeType===3&&(l+=H.nodeValue.length),(L=H.firstChild)!==null;)M=H,H=L;for(;;){if(H===e)break a;if(M===n&&++T===s&&(p=l),M===i&&++_===t&&(x=l),(L=H.nextSibling)!==null)break;H=M,M=H.parentNode}H=L}n=p===-1||x===-1?null:{start:p,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(fc={focusedElem:e,selectionRange:n},nr=!1,ca=a;ca!==null;)if(a=ca,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ca=e;else for(;ca!==null;){switch(a=ca,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=a,s=i.memoizedProps,i=i.memoizedState,t=n.stateNode;try{var ne=Ut(n.type,s);e=t.getSnapshotBeforeUpdate(ne,i),t.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Le(n,n.return,ce)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)bc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=a.sibling,e!==null){e.return=a.return,ca=e;break}ca=a.return}}function wp(e,a,n){var t=n.flags;switch(n.tag){case 0:case 11:case 15:Mn(e,n),t&4&&hs(5,n);break;case 1:if(Mn(e,n),t&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(l){Le(n,n.return,l)}else{var s=Ut(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(s,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Le(n,n.return,l)}}t&64&&hp(n),t&512&&gs(n,n.return);break;case 3:if(Mn(e,n),t&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{su(e,a)}catch(l){Le(n,n.return,l)}}break;case 27:a===null&&t&4&&xp(n);case 26:case 5:Mn(e,n),a===null&&t&4&&bp(n),t&512&&gs(n,n.return);break;case 12:Mn(e,n);break;case 31:Mn(e,n),t&4&&zp(e,n);break;case 13:Mn(e,n),t&4&&Sp(e,n),t&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ih.bind(null,n),ug(e,n))));break;case 22:if(t=n.memoizedState!==null||An,!t){a=a!==null&&a.memoizedState!==null||oa,s=An;var i=oa;An=t,(oa=a)&&!i?Dn(e,n,(n.subtreeFlags&8772)!==0):Mn(e,n),An=s,oa=i}break;case 30:break;default:Mn(e,n)}}function kp(e){var a=e.alternate;a!==null&&(e.alternate=null,kp(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Xt(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Ea=!1;function Cn(e,a,n){for(n=n.child;n!==null;)jp(e,a,n),n=n.sibling}function jp(e,a,n){if(ka&&typeof ka.onCommitFiberUnmount=="function")try{ka.onCommitFiberUnmount(bt,n)}catch{}switch(n.tag){case 26:oa||mn(n,a),Cn(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:oa||mn(n,a);var t=Qe,s=Ea;rt(n.type)&&(Qe=n.stateNode,Ea=!1),Cn(e,a,n),Ss(n.stateNode),Qe=t,Ea=s;break;case 5:oa||mn(n,a);case 6:if(t=Qe,s=Ea,Qe=null,Cn(e,a,n),Qe=t,Ea=s,Qe!==null)if(Ea)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(i){Le(n,a,i)}else try{Qe.removeChild(n.stateNode)}catch(i){Le(n,a,i)}break;case 18:Qe!==null&&(Ea?(e=Qe,hm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),No(e)):hm(Qe,n.stateNode));break;case 4:t=Qe,s=Ea,Qe=n.stateNode.containerInfo,Ea=!0,Cn(e,a,n),Qe=t,Ea=s;break;case 0:case 11:case 14:case 15:et(2,n,a),oa||et(4,n,a),Cn(e,a,n);break;case 1:oa||(mn(n,a),t=n.stateNode,typeof t.componentWillUnmount=="function"&&gp(n,a,t)),Cn(e,a,n);break;case 21:Cn(e,a,n);break;case 22:oa=(t=oa)||n.memoizedState!==null,Cn(e,a,n),oa=t;break;default:Cn(e,a,n)}}function zp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{No(e)}catch(n){Le(a,a.return,n)}}}function Sp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(n){Le(a,a.return,n)}}function _h(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new yp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new yp),a;default:throw Error(c(435,e.tag))}}function Oi(e,a){var n=_h(e);a.forEach(function(t){if(!n.has(t)){n.add(t);var s=Xh.bind(null,e,t);t.then(s,s)}})}function Ta(e,a){var n=a.deletions;if(n!==null)for(var t=0;t<n.length;t++){var s=n[t],i=e,l=a,p=l;e:for(;p!==null;){switch(p.tag){case 27:if(rt(p.type)){Qe=p.stateNode,Ea=!1;break e}break;case 5:Qe=p.stateNode,Ea=!1;break e;case 3:case 4:Qe=p.stateNode.containerInfo,Ea=!0;break e}p=p.return}if(Qe===null)throw Error(c(160));jp(i,l,s),Qe=null,Ea=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Np(a,e),a=a.sibling}var rn=null;function Np(e,a){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ta(a,e),Aa(e),t&4&&(et(3,e,e.return),hs(3,e),et(5,e,e.return));break;case 1:Ta(a,e),Aa(e),t&512&&(oa||n===null||mn(n,n.return)),t&64&&An&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:var s=rn;if(Ta(a,e),Aa(e),t&512&&(oa||n===null||mn(n,n.return)),t&4){var i=n!==null?n.memoizedState:null;if(t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null){e:{t=e.type,n=e.memoizedProps,s=s.ownerDocument||s;a:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[xa]||i[ia]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),ga(i,t,n),i[ia]=e,ea(i),t=i;break e;case"link":var l=Nm("link","href",s).get(t+(n.href||""));if(l){for(var p=0;p<l.length;p++)if(i=l[p],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(p,1);break a}}i=s.createElement(t),ga(i,t,n),s.head.appendChild(i);break;case"meta":if(l=Nm("meta","content",s).get(t+(n.content||""))){for(p=0;p<l.length;p++)if(i=l[p],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){l.splice(p,1);break a}}i=s.createElement(t),ga(i,t,n),s.head.appendChild(i);break;default:throw Error(c(468,t))}i[ia]=e,ea(i),t=i}e.stateNode=t}else qm(s,e.type,e.stateNode);else e.stateNode=Sm(s,t,e.memoizedProps);else i!==t?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,t===null?qm(s,e.type,e.stateNode):Sm(s,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Vl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ta(a,e),Aa(e),t&512&&(oa||n===null||mn(n,n.return)),n!==null&&t&4&&Vl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ta(a,e),Aa(e),t&512&&(oa||n===null||mn(n,n.return)),e.flags&32){s=e.stateNode;try{Zt(s,"")}catch(ne){Le(e,e.return,ne)}}t&4&&e.stateNode!=null&&(s=e.memoizedProps,Vl(e,s,n!==null?n.memoizedProps:s)),t&1024&&(Xl=!0);break;case 6:if(Ta(a,e),Aa(e),t&4){if(e.stateNode===null)throw Error(c(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t}catch(ne){Le(e,e.return,ne)}}break;case 3:if(Fi=null,s=rn,rn=$i(a.containerInfo),Ta(a,e),rn=s,Aa(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{No(a.containerInfo)}catch(ne){Le(e,e.return,ne)}Xl&&(Xl=!1,qp(e));break;case 4:t=rn,rn=$i(e.stateNode.containerInfo),Ta(a,e),Aa(e),rn=t;break;case 12:Ta(a,e),Aa(e);break;case 31:Ta(a,e),Aa(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Oi(e,t)));break;case 13:Ta(a,e),Aa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gi=da()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Oi(e,t)));break;case 22:s=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,T=An,_=oa;if(An=T||s,oa=_||x,Ta(a,e),oa=_,An=T,Aa(e),t&8192)e:for(a=e.stateNode,a._visibility=s?a._visibility&-2:a._visibility|1,s&&(n===null||x||An||oa||Ot(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){x=n=a;try{if(i=x.stateNode,s)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{p=x.stateNode;var H=x.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null;p.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(ne){Le(x,x.return,ne)}}}else if(a.tag===6){if(n===null){x=a;try{x.stateNode.nodeValue=s?"":x.memoizedProps}catch(ne){Le(x,x.return,ne)}}}else if(a.tag===18){if(n===null){x=a;try{var L=x.stateNode;s?gm(L,!0):gm(x.stateNode,!1)}catch(ne){Le(x,x.return,ne)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Oi(e,n))));break;case 19:Ta(a,e),Aa(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Oi(e,t)));break;case 30:break;case 21:break;default:Ta(a,e),Aa(e)}}function Aa(e){var a=e.flags;if(a&2){try{for(var n,t=e.return;t!==null;){if(vp(t)){n=t;break}t=t.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var s=n.stateNode,i=Ql(e);Ui(e,i,s);break;case 5:var l=n.stateNode;n.flags&32&&(Zt(l,""),n.flags&=-33);var p=Ql(e);Ui(e,p,l);break;case 3:case 4:var x=n.stateNode.containerInfo,T=Ql(e);Il(e,T,x);break;default:throw Error(c(161))}}catch(_){Le(e,e.return,_)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function qp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;qp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Mn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)wp(e,a.alternate,a),a=a.sibling}function Ot(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:et(4,a,a.return),Ot(a);break;case 1:mn(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&gp(a,a.return,n),Ot(a);break;case 27:Ss(a.stateNode);case 26:case 5:mn(a,a.return),Ot(a);break;case 22:a.memoizedState===null&&Ot(a);break;case 30:Ot(a);break;default:Ot(a)}e=e.sibling}}function Dn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,s=e,i=a,l=i.flags;switch(i.tag){case 0:case 11:case 15:Dn(s,i,n),hs(4,i);break;case 1:if(Dn(s,i,n),t=i,s=t.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(T){Le(t,t.return,T)}if(t=i,s=t.updateQueue,s!==null){var p=t.stateNode;try{var x=s.shared.hiddenCallbacks;if(x!==null)for(s.shared.hiddenCallbacks=null,s=0;s<x.length;s++)ou(x[s],p)}catch(T){Le(t,t.return,T)}}n&&l&64&&hp(i),gs(i,i.return);break;case 27:xp(i);case 26:case 5:Dn(s,i,n),n&&t===null&&l&4&&bp(i),gs(i,i.return);break;case 12:Dn(s,i,n);break;case 31:Dn(s,i,n),n&&l&4&&zp(s,i);break;case 13:Dn(s,i,n),n&&l&4&&Sp(s,i);break;case 22:i.memoizedState===null&&Dn(s,i,n),gs(i,i.return);break;case 30:break;default:Dn(s,i,n)}a=a.sibling}}function Kl(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ns(n))}function Zl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ns(e))}function ln(e,a,n,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Ep(e,a,n,t),a=a.sibling}function Ep(e,a,n,t){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ln(e,a,n,t),s&2048&&hs(9,a);break;case 1:ln(e,a,n,t);break;case 3:ln(e,a,n,t),s&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ns(e)));break;case 12:if(s&2048){ln(e,a,n,t),e=a.stateNode;try{var i=a.memoizedProps,l=i.id,p=i.onPostCommit;typeof p=="function"&&p(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Le(a,a.return,x)}}else ln(e,a,n,t);break;case 31:ln(e,a,n,t);break;case 13:ln(e,a,n,t);break;case 23:break;case 22:i=a.stateNode,l=a.alternate,a.memoizedState!==null?i._visibility&2?ln(e,a,n,t):bs(e,a):i._visibility&2?ln(e,a,n,t):(i._visibility|=2,ho(e,a,n,t,(a.subtreeFlags&10256)!==0||!1)),s&2048&&Kl(l,a);break;case 24:ln(e,a,n,t),s&2048&&Zl(a.alternate,a);break;default:ln(e,a,n,t)}}function ho(e,a,n,t,s){for(s=s&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,l=a,p=n,x=t,T=l.flags;switch(l.tag){case 0:case 11:case 15:ho(i,l,p,x,s),hs(8,l);break;case 23:break;case 22:var _=l.stateNode;l.memoizedState!==null?_._visibility&2?ho(i,l,p,x,s):bs(i,l):(_._visibility|=2,ho(i,l,p,x,s)),s&&T&2048&&Kl(l.alternate,l);break;case 24:ho(i,l,p,x,s),s&&T&2048&&Zl(l.alternate,l);break;default:ho(i,l,p,x,s)}a=a.sibling}}function bs(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,t=a,s=t.flags;switch(t.tag){case 22:bs(n,t),s&2048&&Kl(t.alternate,t);break;case 24:bs(n,t),s&2048&&Zl(t.alternate,t);break;default:bs(n,t)}a=a.sibling}}var vs=8192;function go(e,a,n){if(e.subtreeFlags&vs)for(e=e.child;e!==null;)Tp(e,a,n),e=e.sibling}function Tp(e,a,n){switch(e.tag){case 26:go(e,a,n),e.flags&vs&&e.memoizedState!==null&&jg(n,rn,e.memoizedState,e.memoizedProps);break;case 5:go(e,a,n);break;case 3:case 4:var t=rn;rn=$i(e.stateNode.containerInfo),go(e,a,n),rn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=vs,vs=16777216,go(e,a,n),vs=t):go(e,a,n));break;default:go(e,a,n)}}function Ap(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function xs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];ca=t,Mp(t,e)}Ap(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cp(e),e=e.sibling}function Cp(e){switch(e.tag){case 0:case 11:case 15:xs(e),e.flags&2048&&et(9,e,e.return);break;case 3:xs(e);break;case 12:xs(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,_i(e)):xs(e);break;default:xs(e)}}function _i(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];ca=t,Mp(t,e)}Ap(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:et(8,a,a.return),_i(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,_i(a));break;default:_i(a)}e=e.sibling}}function Mp(e,a){for(;ca!==null;){var n=ca;switch(n.tag){case 0:case 11:case 15:et(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var t=n.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ns(n.memoizedState.cache)}if(t=n.child,t!==null)t.return=n,ca=t;else e:for(n=e;ca!==null;){t=ca;var s=t.sibling,i=t.return;if(kp(t),t===n){ca=null;break e}if(s!==null){s.return=i,ca=s;break e}ca=i}}}var Gh={getCacheForType:function(e){var a=fa(aa),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return fa(aa).controller.signal}},Rh=typeof WeakMap=="function"?WeakMap:Map,Me=0,Re=null,je=null,Se=0,De=0,Ha=null,at=!1,bo=!1,Jl=!1,Ln=0,Ze=0,nt=0,_t=0,$l=0,Ba=0,vo=0,ys=null,Ca=null,Wl=!1,Gi=0,Dp=0,Ri=1/0,Hi=null,tt=null,ra=0,ot=null,xo=null,Un=0,Fl=0,Pl=null,Lp=null,ws=0,ec=null;function Ya(){return(Me&2)!==0&&Se!==0?Se&-Se:D.T!==null?ic():Js()}function Up(){if(Ba===0)if((Se&536870912)===0||Ee){var e=tn;tn<<=1,(tn&3932160)===0&&(tn=262144),Ba=e}else Ba=536870912;return e=Ga.current,e!==null&&(e.flags|=32),Ba}function Ma(e,a,n){(e===Re&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(yo(e,0),st(e,Se,Ba,!1)),Ua(e,n),((Me&2)===0||e!==Re)&&(e===Re&&((Me&2)===0&&(_t|=n),Ze===4&&st(e,Se,Ba,!1)),fn(e))}function Op(e,a,n){if((Me&6)!==0)throw Error(c(327));var t=!n&&(a&127)===0&&(a&e.expiredLanes)===0||Hn(e,a),s=t?Yh(e,a):nc(e,a,!0),i=t;do{if(s===0){bo&&!t&&st(e,a,0,!1);break}else{if(n=e.current.alternate,i&&!Hh(n)){s=nc(e,a,!1),i=!1;continue}if(s===2){if(i=a,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var p=e;s=ys;var x=p.current.memoizedState.isDehydrated;if(x&&(yo(p,l).flags|=256),l=nc(p,l,!1),l!==2){if(Jl&&!x){p.errorRecoveryDisabledLanes|=i,_t|=i,s=4;break e}i=Ca,Ca=s,i!==null&&(Ca===null?Ca=i:Ca.push.apply(Ca,i))}s=l}if(i=!1,s!==2)continue}}if(s===1){yo(e,0),st(e,a,0,!0);break}e:{switch(t=e,i=s,i){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:st(t,a,Ba,!at);break e;case 2:Ca=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(s=Gi+300-da(),10<s)){if(st(t,a,Ba,!at),vt(t,0,!0)!==0)break e;Un=a,t.timeoutHandle=mm(_p.bind(null,t,n,Ca,Hi,Wl,a,Ba,_t,vo,at,i,"Throttled",-0,0),s);break e}_p(t,n,Ca,Hi,Wl,a,Ba,_t,vo,at,i,null,-0,0)}}break}while(!0);fn(e)}function _p(e,a,n,t,s,i,l,p,x,T,_,H,M,L){if(e.timeoutHandle=-1,H=a.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},Tp(a,i,H);var ne=(i&62914560)===i?Gi-da():(i&4194048)===i?Dp-da():0;if(ne=zg(H,ne),ne!==null){Un=i,e.cancelPendingCommit=ne(Ip.bind(null,e,a,i,n,t,s,l,p,x,_,H,null,M,L)),st(e,i,l,!T);return}}Ip(e,a,i,n,t,s,l,p,x)}function Hh(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var t=0;t<n.length;t++){var s=n[t],i=s.getSnapshot;s=s.value;try{if(!Oa(i(),s))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function st(e,a,n,t){a&=~$l,a&=~_t,e.suspendedLanes|=a,e.pingedLanes&=~a,t&&(e.warmLanes|=a),t=e.expirationTimes;for(var s=a;0<s;){var i=31-va(s),l=1<<i;t[i]=-1,s&=~l}n!==0&&Ro(e,n,a)}function Bi(){return(Me&6)===0?(ks(0),!1):!0}function ac(){if(je!==null){if(De===0)var e=je.return;else e=je,zn=Et=null,bl(e),co=null,os=0,e=je;for(;e!==null;)fp(e.alternate,e),e=e.return;je=null}}function yo(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ig(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Un=0,ac(),Re=e,je=n=kn(e.current,null),Se=a,De=0,Ha=null,at=!1,bo=Hn(e,a),Jl=!1,vo=Ba=$l=_t=nt=Ze=0,Ca=ys=null,Wl=!1,(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var s=31-va(t),i=1<<s;a|=e[s],t&=~i}return Ln=a,li(),n}function Gp(e,a){ge=null,D.H=ps,a===lo||a===gi?(a=eu(),De=3):a===sl?(a=eu(),De=4):De=a===Dl?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ha=a,je===null&&(Ze=1,Ai(e,Ka(a,e.current)))}function Rp(){var e=Ga.current;return e===null?!0:(Se&4194048)===Se?Wa===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Wa:!1}function Hp(){var e=D.H;return D.H=ps,e===null?ps:e}function Bp(){var e=D.A;return D.A=Gh,e}function Yi(){Ze=4,at||(Se&4194048)!==Se&&Ga.current!==null||(bo=!0),(nt&134217727)===0&&(_t&134217727)===0||Re===null||st(Re,Se,Ba,!1)}function nc(e,a,n){var t=Me;Me|=2;var s=Hp(),i=Bp();(Re!==e||Se!==a)&&(Hi=null,yo(e,a)),a=!1;var l=Ze;e:do try{if(De!==0&&je!==null){var p=je,x=Ha;switch(De){case 8:ac(),l=6;break e;case 3:case 2:case 9:case 6:Ga.current===null&&(a=!0);var T=De;if(De=0,Ha=null,wo(e,p,x,T),n&&bo){l=0;break e}break;default:T=De,De=0,Ha=null,wo(e,p,x,T)}}Bh(),l=Ze;break}catch(_){Gp(e,_)}while(!0);return a&&e.shellSuspendCounter++,zn=Et=null,Me=t,D.H=s,D.A=i,je===null&&(Re=null,Se=0,li()),l}function Bh(){for(;je!==null;)Yp(je)}function Yh(e,a){var n=Me;Me|=2;var t=Hp(),s=Bp();Re!==e||Se!==a?(Hi=null,Ri=da()+500,yo(e,a)):bo=Hn(e,a);e:do try{if(De!==0&&je!==null){a=je;var i=Ha;a:switch(De){case 1:De=0,Ha=null,wo(e,a,i,1);break;case 2:case 9:if(Fd(i)){De=0,Ha=null,Vp(a);break}a=function(){De!==2&&De!==9||Re!==e||(De=7),fn(e)},i.then(a,a);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Fd(i)?(De=0,Ha=null,Vp(a)):(De=0,Ha=null,wo(e,a,i,7));break;case 5:var l=null;switch(je.tag){case 26:l=je.memoizedState;case 5:case 27:var p=je;if(l?Em(l):p.stateNode.complete){De=0,Ha=null;var x=p.sibling;if(x!==null)je=x;else{var T=p.return;T!==null?(je=T,Vi(T)):je=null}break a}}De=0,Ha=null,wo(e,a,i,5);break;case 6:De=0,Ha=null,wo(e,a,i,6);break;case 8:ac(),Ze=6;break e;default:throw Error(c(462))}}Vh();break}catch(_){Gp(e,_)}while(!0);return zn=Et=null,D.H=t,D.A=s,Me=n,je!==null?0:(Re=null,Se=0,li(),Ze)}function Vh(){for(;je!==null&&!_o();)Yp(je)}function Yp(e){var a=pp(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,a===null?Vi(e):je=a}function Vp(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=ip(n,a,a.pendingProps,a.type,void 0,Se);break;case 11:a=ip(n,a,a.pendingProps,a.type.render,a.ref,Se);break;case 5:bl(a);default:fp(n,a),a=je=Bd(a,Ln),a=pp(n,a,Ln)}e.memoizedProps=e.pendingProps,a===null?Vi(e):je=a}function wo(e,a,n,t){zn=Et=null,bl(a),co=null,os=0;var s=a.return;try{if(Ch(e,s,a,n,Se)){Ze=1,Ai(e,Ka(n,e.current)),je=null;return}}catch(i){if(s!==null)throw je=s,i;Ze=1,Ai(e,Ka(n,e.current)),je=null;return}a.flags&32768?(Ee||t===1?e=!0:bo||(Se&536870912)!==0?e=!1:(at=e=!0,(t===2||t===9||t===3||t===6)&&(t=Ga.current,t!==null&&t.tag===13&&(t.flags|=16384))),Qp(a,e)):Vi(a)}function Vi(e){var a=e;do{if((a.flags&32768)!==0){Qp(a,at);return}e=a.return;var n=Lh(a.alternate,a,Ln);if(n!==null){je=n;return}if(a=a.sibling,a!==null){je=a;return}je=a=e}while(a!==null);Ze===0&&(Ze=5)}function Qp(e,a){do{var n=Uh(e.alternate,e);if(n!==null){n.flags&=32767,je=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){je=e;return}je=e=n}while(e!==null);Ze=6,je=null}function Ip(e,a,n,t,s,i,l,p,x){e.cancelPendingCommit=null;do Qi();while(ra!==0);if((Me&6)!==0)throw Error(c(327));if(a!==null){if(a===e.current)throw Error(c(177));if(i=a.lanes|a.childLanes,i|=Qr,Ks(e,n,i,l,p,x),e===Re&&(je=Re=null,Se=0),xo=a,ot=e,Un=n,Fl=i,Pl=s,Lp=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kh(gt,function(){return $p(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=D.T,D.T=null,s=N.p,N.p=2,l=Me,Me|=4;try{Oh(e,a,n)}finally{Me=l,N.p=s,D.T=t}}ra=1,Xp(),Kp(),Zp()}}function Xp(){if(ra===1){ra=0;var e=ot,a=xo,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var t=N.p;N.p=2;var s=Me;Me|=4;try{Np(a,e);var i=fc,l=Md(e.containerInfo),p=i.focusedElem,x=i.selectionRange;if(l!==p&&p&&p.ownerDocument&&Cd(p.ownerDocument.documentElement,p)){if(x!==null&&Rr(p)){var T=x.start,_=x.end;if(_===void 0&&(_=T),"selectionStart"in p)p.selectionStart=T,p.selectionEnd=Math.min(_,p.value.length);else{var H=p.ownerDocument||document,M=H&&H.defaultView||window;if(M.getSelection){var L=M.getSelection(),ne=p.textContent.length,ce=Math.min(x.start,ne),_e=x.end===void 0?ce:Math.min(x.end,ne);!L.extend&&ce>_e&&(l=_e,_e=ce,ce=l);var q=Ad(p,ce),z=Ad(p,_e);if(q&&z&&(L.rangeCount!==1||L.anchorNode!==q.node||L.anchorOffset!==q.offset||L.focusNode!==z.node||L.focusOffset!==z.offset)){var E=H.createRange();E.setStart(q.node,q.offset),L.removeAllRanges(),ce>_e?(L.addRange(E),L.extend(z.node,z.offset)):(E.setEnd(z.node,z.offset),L.addRange(E))}}}}for(H=[],L=p;L=L.parentNode;)L.nodeType===1&&H.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<H.length;p++){var R=H[p];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}nr=!!mc,fc=mc=null}finally{Me=s,N.p=t,D.T=n}}e.current=a,ra=2}}function Kp(){if(ra===2){ra=0;var e=ot,a=xo,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var t=N.p;N.p=2;var s=Me;Me|=4;try{wp(e,a.alternate,a)}finally{Me=s,N.p=t,D.T=n}}ra=3}}function Zp(){if(ra===4||ra===3){ra=0,Na();var e=ot,a=xo,n=Un,t=Lp;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ra=5:(ra=0,xo=ot=null,Jp(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(tt=null),yt(n),a=a.stateNode,ka&&typeof ka.onCommitFiberRoot=="function")try{ka.onCommitFiberRoot(bt,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=D.T,s=N.p,N.p=2,D.T=null;try{for(var i=e.onRecoverableError,l=0;l<t.length;l++){var p=t[l];i(p.value,{componentStack:p.stack})}}finally{D.T=a,N.p=s}}(Un&3)!==0&&Qi(),fn(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===ec?ws++:(ws=0,ec=e):ws=0,ks(0)}}function Jp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,ns(a)))}function Qi(){return Xp(),Kp(),Zp(),$p()}function $p(){if(ra!==5)return!1;var e=ot,a=Fl;Fl=0;var n=yt(Un),t=D.T,s=N.p;try{N.p=32>n?32:n,D.T=null,n=Pl,Pl=null;var i=ot,l=Un;if(ra=0,xo=ot=null,Un=0,(Me&6)!==0)throw Error(c(331));var p=Me;if(Me|=4,Cp(i.current),Ep(i,i.current,l,n),Me=p,ks(0,!1),ka&&typeof ka.onPostCommitFiberRoot=="function")try{ka.onPostCommitFiberRoot(bt,i)}catch{}return!0}finally{N.p=s,D.T=t,Jp(e,a)}}function Wp(e,a,n){a=Ka(n,a),a=Ml(e.stateNode,a,2),e=Wn(e,a,2),e!==null&&(Ua(e,2),fn(e))}function Le(e,a,n){if(e.tag===3)Wp(e,e,n);else for(;a!==null;){if(a.tag===3){Wp(a,e,n);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(tt===null||!tt.has(t))){e=Ka(n,e),n=Fu(2),t=Wn(a,n,2),t!==null&&(Pu(n,t,a,e),Ua(t,2),fn(t));break}}a=a.return}}function tc(e,a,n){var t=e.pingCache;if(t===null){t=e.pingCache=new Rh;var s=new Set;t.set(a,s)}else s=t.get(a),s===void 0&&(s=new Set,t.set(a,s));s.has(n)||(Jl=!0,s.add(n),e=Qh.bind(null,e,a,n),a.then(e,e))}function Qh(e,a,n){var t=e.pingCache;t!==null&&t.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(Se&n)===n&&(Ze===4||Ze===3&&(Se&62914560)===Se&&300>da()-Gi?(Me&2)===0&&yo(e,0):$l|=n,vo===Se&&(vo=0)),fn(e)}function Fp(e,a){a===0&&(a=Yt()),e=St(e,a),e!==null&&(Ua(e,a),fn(e))}function Ih(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Fp(e,n)}function Xh(e,a){var n=0;switch(e.tag){case 31:case 13:var t=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(c(314))}t!==null&&t.delete(a),Fp(e,n)}function Kh(e,a){return ht(e,a)}var Ii=null,ko=null,oc=!1,Xi=!1,sc=!1,it=0;function fn(e){e!==ko&&e.next===null&&(ko===null?Ii=ko=e:ko=ko.next=e),Xi=!0,oc||(oc=!0,Jh())}function ks(e,a){if(!sc&&Xi){sc=!0;do for(var n=!1,t=Ii;t!==null;){if(e!==0){var s=t.pendingLanes;if(s===0)var i=0;else{var l=t.suspendedLanes,p=t.pingedLanes;i=(1<<31-va(42|e)+1)-1,i&=s&~(l&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,nm(t,i))}else i=Se,i=vt(t,t===Re?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(i&3)===0||Hn(t,i)||(n=!0,nm(t,i));t=t.next}while(n);sc=!1}}function Zh(){Pp()}function Pp(){Xi=oc=!1;var e=0;it!==0&&sg()&&(e=it);for(var a=da(),n=null,t=Ii;t!==null;){var s=t.next,i=em(t,a);i===0?(t.next=null,n===null?Ii=s:n.next=s,s===null&&(ko=n)):(n=t,(e!==0||(i&3)!==0)&&(Xi=!0)),t=s}ra!==0&&ra!==5||ks(e),it!==0&&(it=0)}function em(e,a){for(var n=e.suspendedLanes,t=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-va(i),p=1<<l,x=s[l];x===-1?((p&n)===0||(p&t)!==0)&&(s[l]=bn(p,a)):x<=a&&(e.expiredLanes|=p),i&=~p}if(a=Re,n=Se,n=vt(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,n===0||e===a&&(De===2||De===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&La(t),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Hn(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(t!==null&&La(t),yt(n)){case 2:case 8:n=an;break;case 32:n=gt;break;case 268435456:n=Qs;break;default:n=gt}return t=am.bind(null,e),n=ht(n,t),e.callbackPriority=a,e.callbackNode=n,a}return t!==null&&t!==null&&La(t),e.callbackPriority=2,e.callbackNode=null,2}function am(e,a){if(ra!==0&&ra!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Qi()&&e.callbackNode!==n)return null;var t=Se;return t=vt(e,e===Re?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Op(e,t,a),em(e,da()),e.callbackNode!=null&&e.callbackNode===n?am.bind(null,e):null)}function nm(e,a){if(Qi())return null;Op(e,a,!0)}function Jh(){rg(function(){(Me&6)!==0?ht(Go,Zh):Pp()})}function ic(){if(it===0){var e=io;e===0&&(e=be,be<<=1,(be&261888)===0&&(be=256)),it=e}return it}function tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ei(""+e)}function om(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function $h(e,a,n,t,s){if(a==="submit"&&n&&n.stateNode===s){var i=tm((s[ua]||null).action),l=t.submitter;l&&(a=(a=l[ua]||null)?tm(a.formAction):l.getAttribute("formAction"),a!==null&&(i=a,l=null));var p=new oi("action","action",null,t,s);e.push({event:p,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(it!==0){var x=l?om(s,l):new FormData(s);Nl(n,{pending:!0,data:x,method:s.method,action:i},null,x)}}else typeof i=="function"&&(p.preventDefault(),x=l?om(s,l):new FormData(s),Nl(n,{pending:!0,data:x,method:s.method,action:i},i,x))},currentTarget:s}]})}}for(var rc=0;rc<Vr.length;rc++){var lc=Vr[rc],Wh=lc.toLowerCase(),Fh=lc[0].toUpperCase()+lc.slice(1);sn(Wh,"on"+Fh)}sn(Ud,"onAnimationEnd"),sn(Od,"onAnimationIteration"),sn(_d,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(fh,"onTransitionRun"),sn(hh,"onTransitionStart"),sn(gh,"onTransitionCancel"),sn(Gd,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js));function sm(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],s=t.event;t=t.listeners;e:{var i=void 0;if(a)for(var l=t.length-1;0<=l;l--){var p=t[l],x=p.instance,T=p.currentTarget;if(p=p.listener,x!==i&&s.isPropagationStopped())break e;i=p,s.currentTarget=T;try{i(s)}catch(_){ri(_)}s.currentTarget=null,i=x}else for(l=0;l<t.length;l++){if(p=t[l],x=p.instance,T=p.currentTarget,p=p.listener,x!==i&&s.isPropagationStopped())break e;i=p,s.currentTarget=T;try{i(s)}catch(_){ri(_)}s.currentTarget=null,i=x}}}}function ze(e,a){var n=a[Vt];n===void 0&&(n=a[Vt]=new Set);var t=e+"__bubble";n.has(t)||(im(a,e,2,!1),n.add(t))}function cc(e,a,n){var t=0;a&&(t|=4),im(n,e,t,a)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[Ki]){e[Ki]=!0,Ws.forEach(function(n){n!=="selectionchange"&&(Ph.has(n)||cc(n,!1,e),cc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Ki]||(a[Ki]=!0,cc("selectionchange",!1,a))}}function im(e,a,n,t){switch(Um(a)){case 2:var s=qg;break;case 8:s=Eg;break;default:s=Sc}n=s.bind(null,a,n,e),s=void 0,!Ar||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(s=!0),t?s!==void 0?e.addEventListener(a,n,{capture:!0,passive:s}):e.addEventListener(a,n,!0):s!==void 0?e.addEventListener(a,n,{passive:s}):e.addEventListener(a,n,!1)}function uc(e,a,n,t,s){var i=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var p=t.stateNode.containerInfo;if(p===s)break;if(l===4)for(l=t.return;l!==null;){var x=l.tag;if((x===3||x===4)&&l.stateNode.containerInfo===s)return;l=l.return}for(;p!==null;){if(l=Bn(p),l===null)return;if(x=l.tag,x===5||x===6||x===26||x===27){t=i=l;continue e}p=p.parentNode}}t=t.return}ud(function(){var T=i,_=Er(n),H=[];e:{var M=Rd.get(e);if(M!==void 0){var L=oi,ne=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":L=Xf;break;case"focusin":ne="focus",L=Lr;break;case"focusout":ne="blur",L=Lr;break;case"beforeblur":case"afterblur":L=Lr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Jf;break;case Ud:case Od:case _d:L=_f;break;case Gd:L=Wf;break;case"scroll":case"scrollend":L=Mf;break;case"wheel":L=Pf;break;case"copy":case"cut":case"paste":L=Rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=gd;break;case"toggle":case"beforetoggle":L=ah}var ce=(a&4)!==0,_e=!ce&&(e==="scroll"||e==="scrollend"),q=ce?M!==null?M+"Capture":null:M;ce=[];for(var z=T,E;z!==null;){var R=z;if(E=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||E===null||q===null||(R=Io(z,q),R!=null&&ce.push(zs(z,R,E))),_e)break;z=z.return}0<ce.length&&(M=new L(M,ne,null,n,_),H.push({event:M,listeners:ce}))}}if((a&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",M&&n!==qr&&(ne=n.relatedTarget||n.fromElement)&&(Bn(ne)||ne[vn]))break e;if((L||M)&&(M=_.window===_?_:(M=_.ownerDocument)?M.defaultView||M.parentWindow:window,L?(ne=n.relatedTarget||n.toElement,L=T,ne=ne?Bn(ne):null,ne!==null&&(_e=h(ne),ce=ne.tag,ne!==_e||ce!==5&&ce!==27&&ce!==6)&&(ne=null)):(L=null,ne=T),L!==ne)){if(ce=fd,R="onMouseLeave",q="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(ce=gd,R="onPointerLeave",q="onPointerEnter",z="pointer"),_e=L==null?M:wt(L),E=ne==null?M:wt(ne),M=new ce(R,z+"leave",L,n,_),M.target=_e,M.relatedTarget=E,R=null,Bn(_)===T&&(ce=new ce(q,z+"enter",ne,n,_),ce.target=E,ce.relatedTarget=_e,R=ce),_e=R,L&&ne)a:{for(ce=eg,q=L,z=ne,E=0,R=q;R;R=ce(R))E++;R=0;for(var re=z;re;re=ce(re))R++;for(;0<E-R;)q=ce(q),E--;for(;0<R-E;)z=ce(z),R--;for(;E--;){if(q===z||z!==null&&q===z.alternate){ce=q;break a}q=ce(q),z=ce(z)}ce=null}else ce=null;L!==null&&rm(H,M,L,ce,!1),ne!==null&&_e!==null&&rm(H,_e,ne,ce,!0)}}e:{if(M=T?wt(T):window,L=M.nodeName&&M.nodeName.toLowerCase(),L==="select"||L==="input"&&M.type==="file")var Ae=zd;else if(kd(M))if(Sd)Ae=uh;else{Ae=ch;var oe=lh}else L=M.nodeName,!L||L.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?T&&Nr(T.elementType)&&(Ae=zd):Ae=dh;if(Ae&&(Ae=Ae(e,T))){jd(H,Ae,n,_);break e}oe&&oe(e,M,T),e==="focusout"&&T&&M.type==="number"&&T.memoizedProps.value!=null&&Sr(M,"number",M.value)}switch(oe=T?wt(T):window,e){case"focusin":(kd(oe)||oe.contentEditable==="true")&&(Ft=oe,Hr=T,Po=null);break;case"focusout":Po=Hr=Ft=null;break;case"mousedown":Br=!0;break;case"contextmenu":case"mouseup":case"dragend":Br=!1,Dd(H,n,_);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":Dd(H,n,_)}var ve;if(Or)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Wt?yd(e,n)&&(Ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ne="onCompositionStart");Ne&&(bd&&n.locale!=="ko"&&(Wt||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Wt&&(ve=pd()):(Qn=_,Cr="value"in Qn?Qn.value:Qn.textContent,Wt=!0)),oe=Zi(T,Ne),0<oe.length&&(Ne=new hd(Ne,e,null,n,_),H.push({event:Ne,listeners:oe}),ve?Ne.data=ve:(ve=wd(n),ve!==null&&(Ne.data=ve)))),(ve=th?oh(e,n):sh(e,n))&&(Ne=Zi(T,"onBeforeInput"),0<Ne.length&&(oe=new hd("onBeforeInput","beforeinput",null,n,_),H.push({event:oe,listeners:Ne}),oe.data=ve)),$h(H,e,T,n,_)}sm(H,a)})}function zs(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Zi(e,a){for(var n=a+"Capture",t=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Io(e,n),s!=null&&t.unshift(zs(e,s,i)),s=Io(e,a),s!=null&&t.push(zs(e,s,i))),e.tag===3)return t;e=e.return}return[]}function eg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rm(e,a,n,t,s){for(var i=a._reactName,l=[];n!==null&&n!==t;){var p=n,x=p.alternate,T=p.stateNode;if(p=p.tag,x!==null&&x===t)break;p!==5&&p!==26&&p!==27||T===null||(x=T,s?(T=Io(n,i),T!=null&&l.unshift(zs(n,T,x))):s||(T=Io(n,i),T!=null&&l.push(zs(n,T,x)))),n=n.return}l.length!==0&&e.push({event:a,listeners:l})}var ag=/\r\n?/g,ng=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(ag,`
`).replace(ng,"")}function cm(e,a){return a=lm(a),lm(e)===a}function Oe(e,a,n,t,s,i){switch(n){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||Zt(e,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&Zt(e,""+t);break;case"className":Qa(e,"class",t);break;case"tabIndex":Qa(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Qa(e,n,t);break;case"style":cd(e,t,i);break;case"data":if(a!=="object"){Qa(e,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(n);break}t=ei(""+t),e.setAttribute(n,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(a!=="input"&&Oe(e,a,"name",s.name,s,null),Oe(e,a,"formEncType",s.formEncType,s,null),Oe(e,a,"formMethod",s.formMethod,s,null),Oe(e,a,"formTarget",s.formTarget,s,null)):(Oe(e,a,"encType",s.encType,s,null),Oe(e,a,"method",s.method,s,null),Oe(e,a,"target",s.target,s,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(n);break}t=ei(""+t),e.setAttribute(n,t);break;case"onClick":t!=null&&(e.onclick=yn);break;case"onScroll":t!=null&&ze("scroll",e);break;case"onScrollEnd":t!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(n=t.__html,n!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}n=ei(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,""+t):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":t===!0?e.setAttribute(n,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,t):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(n,t):e.removeAttribute(n);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(n):e.setAttribute(n,t);break;case"popover":ze("beforetoggle",e),ze("toggle",e),Ie(e,"popover",t);break;case"xlinkActuate":pa(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":pa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":pa(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":pa(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":pa(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":pa(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":pa(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":pa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":pa(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ie(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Af.get(n)||n,Ie(e,n,t))}}function pc(e,a,n,t,s,i){switch(n){case"style":cd(e,t,i);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(n=t.__html,n!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof t=="string"?Zt(e,t):(typeof t=="number"||typeof t=="bigint")&&Zt(e,""+t);break;case"onScroll":t!=null&&ze("scroll",e);break;case"onScrollEnd":t!=null&&ze("scrollend",e);break;case"onClick":t!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),i=e[ua]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(a,i,s),typeof t=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,t,s);break e}n in e?e[n]=t:t===!0?e.setAttribute(n,""):Ie(e,n,t)}}}function ga(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var t=!1,s=!1,i;for(i in n)if(n.hasOwnProperty(i)){var l=n[i];if(l!=null)switch(i){case"src":t=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Oe(e,a,i,l,n,null)}}s&&Oe(e,a,"srcSet",n.srcSet,n,null),t&&Oe(e,a,"src",n.src,n,null);return;case"input":ze("invalid",e);var p=i=l=s=null,x=null,T=null;for(t in n)if(n.hasOwnProperty(t)){var _=n[t];if(_!=null)switch(t){case"name":s=_;break;case"type":l=_;break;case"checked":x=_;break;case"defaultChecked":T=_;break;case"value":i=_;break;case"defaultValue":p=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,a));break;default:Oe(e,a,t,_,n,null)}}sd(e,i,p,x,T,l,s,!1);return;case"select":ze("invalid",e),t=l=i=null;for(s in n)if(n.hasOwnProperty(s)&&(p=n[s],p!=null))switch(s){case"value":i=p;break;case"defaultValue":l=p;break;case"multiple":t=p;default:Oe(e,a,s,p,n,null)}a=i,n=l,e.multiple=!!t,a!=null?Kt(e,!!t,a,!1):n!=null&&Kt(e,!!t,n,!0);return;case"textarea":ze("invalid",e),i=s=t=null;for(l in n)if(n.hasOwnProperty(l)&&(p=n[l],p!=null))switch(l){case"value":t=p;break;case"defaultValue":s=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Oe(e,a,l,p,n,null)}rd(e,t,s,i);return;case"option":for(x in n)n.hasOwnProperty(x)&&(t=n[x],t!=null)&&(x==="selected"?e.selected=t&&typeof t!="function"&&typeof t!="symbol":Oe(e,a,x,t,n,null));return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(t=0;t<js.length;t++)ze(js[t],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(t=n[T],t!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Oe(e,a,T,t,n,null)}return;default:if(Nr(a)){for(_ in n)n.hasOwnProperty(_)&&(t=n[_],t!==void 0&&pc(e,a,_,t,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(t=n[p],t!=null&&Oe(e,a,p,t,n,null))}function tg(e,a,n,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,l=null,p=null,x=null,T=null,_=null;for(L in n){var H=n[L];if(n.hasOwnProperty(L)&&H!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":x=H;default:t.hasOwnProperty(L)||Oe(e,a,L,null,t,H)}}for(var M in t){var L=t[M];if(H=n[M],t.hasOwnProperty(M)&&(L!=null||H!=null))switch(M){case"type":i=L;break;case"name":s=L;break;case"checked":T=L;break;case"defaultChecked":_=L;break;case"value":l=L;break;case"defaultValue":p=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,a));break;default:L!==H&&Oe(e,a,M,L,t,H)}}zr(e,l,p,x,T,_,i,s);return;case"select":L=l=p=M=null;for(i in n)if(x=n[i],n.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":L=x;default:t.hasOwnProperty(i)||Oe(e,a,i,null,t,x)}for(s in t)if(i=t[s],x=n[s],t.hasOwnProperty(s)&&(i!=null||x!=null))switch(s){case"value":M=i;break;case"defaultValue":p=i;break;case"multiple":l=i;default:i!==x&&Oe(e,a,s,i,t,x)}a=p,n=l,t=L,M!=null?Kt(e,!!n,M,!1):!!t!=!!n&&(a!=null?Kt(e,!!n,a,!0):Kt(e,!!n,n?[]:"",!1));return;case"textarea":L=M=null;for(p in n)if(s=n[p],n.hasOwnProperty(p)&&s!=null&&!t.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Oe(e,a,p,null,t,s)}for(l in t)if(s=t[l],i=n[l],t.hasOwnProperty(l)&&(s!=null||i!=null))switch(l){case"value":M=s;break;case"defaultValue":L=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==i&&Oe(e,a,l,s,t,i)}id(e,M,L);return;case"option":for(var ne in n)M=n[ne],n.hasOwnProperty(ne)&&M!=null&&!t.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Oe(e,a,ne,null,t,M));for(x in t)M=t[x],L=n[x],t.hasOwnProperty(x)&&M!==L&&(M!=null||L!=null)&&(x==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Oe(e,a,x,M,t,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in n)M=n[ce],n.hasOwnProperty(ce)&&M!=null&&!t.hasOwnProperty(ce)&&Oe(e,a,ce,null,t,M);for(T in t)if(M=t[T],L=n[T],t.hasOwnProperty(T)&&M!==L&&(M!=null||L!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,a));break;default:Oe(e,a,T,M,t,L)}return;default:if(Nr(a)){for(var _e in n)M=n[_e],n.hasOwnProperty(_e)&&M!==void 0&&!t.hasOwnProperty(_e)&&pc(e,a,_e,void 0,t,M);for(_ in t)M=t[_],L=n[_],!t.hasOwnProperty(_)||M===L||M===void 0&&L===void 0||pc(e,a,_,M,t,L);return}}for(var q in n)M=n[q],n.hasOwnProperty(q)&&M!=null&&!t.hasOwnProperty(q)&&Oe(e,a,q,null,t,M);for(H in t)M=t[H],L=n[H],!t.hasOwnProperty(H)||M===L||M==null&&L==null||Oe(e,a,H,M,t,L)}function dm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function og(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),t=0;t<n.length;t++){var s=n[t],i=s.transferSize,l=s.initiatorType,p=s.duration;if(i&&p&&dm(l)){for(l=0,p=s.responseEnd,t+=1;t<n.length;t++){var x=n[t],T=x.startTime;if(T>p)break;var _=x.transferSize,H=x.initiatorType;_&&dm(H)&&(x=x.responseEnd,l+=_*(x<p?1:(p-T)/(x-T)))}if(--t,a+=8*(i+l)/(s.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mc=null,fc=null;function Ji(e){return e.nodeType===9?e:e.ownerDocument}function um(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pm(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function hc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gc=null;function sg(){var e=window.event;return e&&e.type==="popstate"?e===gc?!1:(gc=e,!0):(gc=null,!1)}var mm=typeof setTimeout=="function"?setTimeout:void 0,ig=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,rg=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(e){return fm.resolve(null).then(e).catch(lg)}:mm;function lg(e){setTimeout(function(){throw e})}function rt(e){return e==="head"}function hm(e,a){var n=a,t=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(t===0){e.removeChild(s),No(a);return}t--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")t++;else if(n==="html")Ss(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ss(n);for(var i=n.firstChild;i;){var l=i.nextSibling,p=i.nodeName;i[xa]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=l}}else n==="body"&&Ss(e.ownerDocument.body);n=s}while(n);No(a)}function gm(e,a){var n=e;e=0;do{var t=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),t&&t.nodeType===8)if(n=t.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=t}while(n)}function bc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":bc(n),Xt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function cg(e,a,n,t){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[xa])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Fa(e.nextSibling),e===null)break}return null}function dg(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Fa(e.nextSibling),e===null))return null;return e}function bm(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Fa(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$?"||e.data==="$~"}function xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ug(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var t=function(){a(),n.removeEventListener("DOMContentLoaded",t)};n.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Fa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var yc=null;function vm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Fa(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function xm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function ym(e,a,n){switch(a=Ji(n),e){case"html":if(e=a.documentElement,!e)throw Error(c(452));return e;case"head":if(e=a.head,!e)throw Error(c(453));return e;case"body":if(e=a.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ss(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xt(e)}var Pa=new Map,wm=new Set;function $i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=N.d;N.d={f:pg,r:mg,D:fg,C:hg,L:gg,m:bg,X:xg,S:vg,M:yg};function pg(){var e=On.f(),a=Bi();return e||a}function mg(e){var a=Yn(e);a!==null&&a.tag===5&&a.type==="form"?Gu(a):On.r(e)}var jo=typeof document>"u"?null:document;function km(e,a,n){var t=jo;if(t&&typeof a=="string"&&a){var s=Ia(a);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),wm.has(s)||(wm.add(s),e={rel:e,crossOrigin:n,href:a},t.querySelector(s)===null&&(a=t.createElement("link"),ga(a,"link",e),ea(a),t.head.appendChild(a)))}}function fg(e){On.D(e),km("dns-prefetch",e,null)}function hg(e,a){On.C(e,a),km("preconnect",e,a)}function gg(e,a,n){On.L(e,a,n);var t=jo;if(t&&e&&a){var s='link[rel="preload"][as="'+Ia(a)+'"]';a==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ia(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ia(n.imageSizes)+'"]')):s+='[href="'+Ia(e)+'"]';var i=s;switch(a){case"style":i=zo(e);break;case"script":i=So(e)}Pa.has(i)||(e=j({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Pa.set(i,e),t.querySelector(s)!==null||a==="style"&&t.querySelector(Ns(i))||a==="script"&&t.querySelector(qs(i))||(a=t.createElement("link"),ga(a,"link",e),ea(a),t.head.appendChild(a)))}}function bg(e,a){On.m(e,a);var n=jo;if(n&&e){var t=a&&typeof a.as=="string"?a.as:"script",s='link[rel="modulepreload"][as="'+Ia(t)+'"][href="'+Ia(e)+'"]',i=s;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=So(e)}if(!Pa.has(i)&&(e=j({rel:"modulepreload",href:e},a),Pa.set(i,e),n.querySelector(s)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qs(i)))return}t=n.createElement("link"),ga(t,"link",e),ea(t),n.head.appendChild(t)}}}function vg(e,a,n){On.S(e,a,n);var t=jo;if(t&&e){var s=Vn(t).hoistableStyles,i=zo(e);a=a||"default";var l=s.get(i);if(!l){var p={loading:0,preload:null};if(l=t.querySelector(Ns(i)))p.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Pa.get(i))&&wc(e,n);var x=l=t.createElement("link");ea(x),ga(x,"link",e),x._p=new Promise(function(T,_){x.onload=T,x.onerror=_}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Wi(l,a,t)}l={type:"stylesheet",instance:l,count:1,state:p},s.set(i,l)}}}function xg(e,a){On.X(e,a);var n=jo;if(n&&e){var t=Vn(n).hoistableScripts,s=So(e),i=t.get(s);i||(i=n.querySelector(qs(s)),i||(e=j({src:e,async:!0},a),(a=Pa.get(s))&&kc(e,a),i=n.createElement("script"),ea(i),ga(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(s,i))}}function yg(e,a){On.M(e,a);var n=jo;if(n&&e){var t=Vn(n).hoistableScripts,s=So(e),i=t.get(s);i||(i=n.querySelector(qs(s)),i||(e=j({src:e,async:!0,type:"module"},a),(a=Pa.get(s))&&kc(e,a),i=n.createElement("script"),ea(i),ga(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(s,i))}}function jm(e,a,n,t){var s=(s=fe.current)?$i(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=zo(n.href),n=Vn(s).hoistableStyles,t=n.get(a),t||(t={type:"style",instance:null,count:0,state:null},n.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zo(n.href);var i=Vn(s).hoistableStyles,l=i.get(e);if(l||(s=s.ownerDocument||s,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=s.querySelector(Ns(e)))&&!i._p&&(l.instance=i,l.state.loading=5),Pa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pa.set(e,n),i||wg(s,e,n,l.state))),a&&t===null)throw Error(c(528,""));return l}if(a&&t!==null)throw Error(c(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=So(n),n=Vn(s).hoistableScripts,t=n.get(a),t||(t={type:"script",instance:null,count:0,state:null},n.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function zo(e){return'href="'+Ia(e)+'"'}function Ns(e){return'link[rel="stylesheet"]['+e+"]"}function zm(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,a,n,t){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=e.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),ga(a,"link",n),ea(a),e.head.appendChild(a))}function So(e){return'[src="'+Ia(e)+'"]'}function qs(e){return"script[async]"+e}function Sm(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var t=e.querySelector('style[data-href~="'+Ia(n.href)+'"]');if(t)return a.instance=t,ea(t),t;var s=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),ea(t),ga(t,"style",s),Wi(t,n.precedence,e),a.instance=t;case"stylesheet":s=zo(n.href);var i=e.querySelector(Ns(s));if(i)return a.state.loading|=4,a.instance=i,ea(i),i;t=zm(n),(s=Pa.get(s))&&wc(t,s),i=(e.ownerDocument||e).createElement("link"),ea(i);var l=i;return l._p=new Promise(function(p,x){l.onload=p,l.onerror=x}),ga(i,"link",t),a.state.loading|=4,Wi(i,n.precedence,e),a.instance=i;case"script":return i=So(n.src),(s=e.querySelector(qs(i)))?(a.instance=s,ea(s),s):(t=n,(s=Pa.get(i))&&(t=j({},n),kc(t,s)),e=e.ownerDocument||e,s=e.createElement("script"),ea(s),ga(s,"link",t),e.head.appendChild(s),a.instance=s);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Wi(t,n.precedence,e));return a.instance}function Wi(e,a,n){for(var t=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=t.length?t[t.length-1]:null,i=s,l=0;l<t.length;l++){var p=t[l];if(p.dataset.precedence===a)i=p;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function wc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function kc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Fi=null;function Nm(e,a,n){if(Fi===null){var t=new Map,s=Fi=new Map;s.set(n,t)}else s=Fi,t=s.get(n),t||(t=new Map,s.set(n,t));if(t.has(e))return t;for(t.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var i=n[s];if(!(i[xa]||i[ia]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(a)||"";l=e+l;var p=t.get(l);p?p.push(i):t.set(l,[i])}}return t}function qm(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function kg(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Em(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jg(e,a,n,t){if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zo(t.href),i=a.querySelector(Ns(s));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Pi.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=i,ea(i);return}i=a.ownerDocument||a,t=zm(t),(s=Pa.get(s))&&wc(t,s),i=i.createElement("link"),ea(i);var l=i;l._p=new Promise(function(p,x){l.onload=p,l.onerror=x}),ga(i,"link",t),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Pi.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var jc=0;function zg(e,a){return e.stylesheets&&e.count===0&&ar(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var t=setTimeout(function(){if(e.stylesheets&&ar(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&jc===0&&(jc=62500*og());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ar(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>jc?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(s)}}:null}function Pi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ar(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var er=null;function ar(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,er=new Map,a.forEach(Sg,e),er=null,Pi.call(e))}function Sg(e,a){if(!(a.state.loading&4)){var n=er.get(e);if(n)var t=n.get(null);else{n=new Map,er.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var l=s[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(n.set(l.dataset.precedence,l),t=l)}t&&n.set(null,t)}s=a.instance,l=s.getAttribute("data-precedence"),i=n.get(l)||t,i===t&&n.set(null,s),n.set(l,s),this.count++,t=Pi.bind(this),s.addEventListener("load",t),s.addEventListener("error",t),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),a.state.loading|=4}}var Es={$$typeof:F,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Ng(e,a,n,t,s,i,l,p,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=t,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Tm(e,a,n,t,s,i,l,p,x,T,_,H){return e=new Ng(e,a,n,l,x,T,_,H,p),a=1,i===!0&&(a|=24),i=_a(3,null,null,a),e.current=i,i.stateNode=e,a=nl(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:t,isDehydrated:n,cache:a},il(i),e}function Am(e){return e?(e=ao,e):ao}function Cm(e,a,n,t,s,i){s=Am(s),t.context===null?t.context=s:t.pendingContext=s,t=$n(a),t.payload={element:n},i=i===void 0?null:i,i!==null&&(t.callback=i),n=Wn(e,t,a),n!==null&&(Ma(n,e,a),is(n,e,a))}function Mm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function zc(e,a){Mm(e,a),(e=e.alternate)&&Mm(e,a)}function Dm(e){if(e.tag===13||e.tag===31){var a=St(e,67108864);a!==null&&Ma(a,e,67108864),zc(e,67108864)}}function Lm(e){if(e.tag===13||e.tag===31){var a=Ya();a=Bo(a);var n=St(e,a);n!==null&&Ma(n,e,a),zc(e,a)}}var nr=!0;function qg(e,a,n,t){var s=D.T;D.T=null;var i=N.p;try{N.p=2,Sc(e,a,n,t)}finally{N.p=i,D.T=s}}function Eg(e,a,n,t){var s=D.T;D.T=null;var i=N.p;try{N.p=8,Sc(e,a,n,t)}finally{N.p=i,D.T=s}}function Sc(e,a,n,t){if(nr){var s=Nc(t);if(s===null)uc(e,a,t,tr,n),Om(e,t);else if(Ag(s,e,a,n,t))t.stopPropagation();else if(Om(e,t),a&4&&-1<Tg.indexOf(e)){for(;s!==null;){var i=Yn(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=on(i.pendingLanes);if(l!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;l;){var x=1<<31-va(l);p.entanglements[1]|=x,l&=~x}fn(i),(Me&6)===0&&(Ri=da()+500,ks(0))}}break;case 31:case 13:p=St(i,2),p!==null&&Ma(p,i,2),Bi(),zc(i,2)}if(i=Nc(t),i===null&&uc(e,a,t,tr,n),i===s)break;s=i}s!==null&&t.stopPropagation()}else uc(e,a,t,null,n)}}function Nc(e){return e=Er(e),qc(e)}var tr=null;function qc(e){if(tr=null,e=Bn(e),e!==null){var a=h(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=g(a),e!==null)return e;e=null}else if(n===31){if(e=b(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return tr=e,null}function Um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xr()){case Go:return 2;case an:return 8;case gt:case Vs:return 32;case Qs:return 268435456;default:return 32}default:return 32}}var Ec=!1,lt=null,ct=null,dt=null,Ts=new Map,As=new Map,ut=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Om(e,a){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Ts.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(a.pointerId)}}function Cs(e,a,n,t,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:n,eventSystemFlags:t,nativeEvent:i,targetContainers:[s]},a!==null&&(a=Yn(a),a!==null&&Dm(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,s!==null&&a.indexOf(s)===-1&&a.push(s),e)}function Ag(e,a,n,t,s){switch(a){case"focusin":return lt=Cs(lt,e,a,n,t,s),!0;case"dragenter":return ct=Cs(ct,e,a,n,t,s),!0;case"mouseover":return dt=Cs(dt,e,a,n,t,s),!0;case"pointerover":var i=s.pointerId;return Ts.set(i,Cs(Ts.get(i)||null,e,a,n,t,s)),!0;case"gotpointercapture":return i=s.pointerId,As.set(i,Cs(As.get(i)||null,e,a,n,t,s)),!0}return!1}function _m(e){var a=Bn(e.target);if(a!==null){var n=h(a);if(n!==null){if(a=n.tag,a===13){if(a=g(n),a!==null){e.blockedOn=a,Yo(e.priority,function(){Lm(n)});return}}else if(a===31){if(a=b(n),a!==null){e.blockedOn=a,Yo(e.priority,function(){Lm(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function or(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Nc(e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);qr=t,n.target.dispatchEvent(t),qr=null}else return a=Yn(n),a!==null&&Dm(a),e.blockedOn=n,!1;a.shift()}return!0}function Gm(e,a,n){or(e)&&n.delete(a)}function Cg(){Ec=!1,lt!==null&&or(lt)&&(lt=null),ct!==null&&or(ct)&&(ct=null),dt!==null&&or(dt)&&(dt=null),Ts.forEach(Gm),As.forEach(Gm)}function sr(e,a){e.blockedOn===a&&(e.blockedOn=null,Ec||(Ec=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cg)))}var ir=null;function Rm(e){ir!==e&&(ir=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ir===e&&(ir=null);for(var a=0;a<e.length;a+=3){var n=e[a],t=e[a+1],s=e[a+2];if(typeof t!="function"){if(qc(t||n)===null)continue;break}var i=Yn(n);i!==null&&(e.splice(a,3),a-=3,Nl(i,{pending:!0,data:s,method:n.method,action:t},t,s))}}))}function No(e){function a(x){return sr(x,e)}lt!==null&&sr(lt,e),ct!==null&&sr(ct,e),dt!==null&&sr(dt,e),Ts.forEach(a),As.forEach(a);for(var n=0;n<ut.length;n++){var t=ut[n];t.blockedOn===e&&(t.blockedOn=null)}for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)_m(n),n.blockedOn===null&&ut.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(t=0;t<n.length;t+=3){var s=n[t],i=n[t+1],l=s[ua]||null;if(typeof i=="function")l||Rm(n);else if(l){var p=null;if(i&&i.hasAttribute("formAction")){if(s=i,l=i[ua]||null)p=l.formAction;else if(qc(s)!==null)continue}else p=l.action;typeof p=="function"?n[t+1]=p:(n.splice(t,3),t-=3),Rm(n)}}}function Hm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return s=l})},focusReset:"manual",scroll:"manual"})}function a(){s!==null&&(s(),s=null),t||setTimeout(n,20)}function n(){if(!t&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),s!==null&&(s(),s=null)}}}function Tc(e){this._internalRoot=e}rr.prototype.render=Tc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));var n=a.current,t=Ya();Cm(n,t,e,a,null,null)},rr.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Cm(e.current,2,null,e,null,null),Bi(),a[vn]=null}};function rr(e){this._internalRoot=e}rr.prototype.unstable_scheduleHydration=function(e){if(e){var a=Js();e={blockedOn:null,target:e,priority:a};for(var n=0;n<ut.length&&a!==0&&a<ut[n].priority;n++);ut.splice(n,0,e),n===0&&_m(e)}};var Bm=u.version;if(Bm!=="19.2.5")throw Error(c(527,Bm,"19.2.5"));N.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=f(a),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Mg={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{bt=lr.inject(Mg),ka=lr}catch{}}return Ds.createRoot=function(e,a){if(!m(e))throw Error(c(299));var n=!1,t="",s=Zu,i=Ju,l=$u;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=Tm(e,1,!1,null,null,n,t,null,s,i,l,Hm),e[vn]=a.current,dc(e),new Tc(a)},Ds.hydrateRoot=function(e,a,n){if(!m(e))throw Error(c(299));var t=!1,s="",i=Zu,l=Ju,p=$u,x=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),a=Tm(e,1,!0,a,n??null,t,s,x,i,l,p,Hm),a.context=Am(null),n=a.current,t=Ya(),t=Bo(t),s=$n(t),s.callback=null,Wn(n,s,t),n=t,a.current.lanes=n,Ua(a,n),fn(a),e[vn]=a.current,dc(e),new rr(a)},Ds.version="19.2.5",Ds}var Wm;function Vg(){if(Wm)return Mc.exports;Wm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Mc.exports=Yg(),Mc.exports}var Qg=Vg();function Ig(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const r="/Learn-Spanish/";navigator.serviceWorker.register(`${r}sw.js`,{scope:r}).then(u=>{function d(c){window.dispatchEvent(new CustomEvent("learn-spanish-update-ready",{detail:{worker:c}}))}u.waiting&&navigator.serviceWorker.controller&&d(u.waiting),u.addEventListener("updatefound",()=>{const c=u.installing;c&&c.addEventListener("statechange",()=>{c.state==="installed"&&navigator.serviceWorker.controller&&d(c)})})}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.__learnSpanishRefreshing||(window.__learnSpanishRefreshing=!0,window.location.reload())})})}const Xg="modulepreload",Kg=function(r){return"/Learn-Spanish/"+r},Fm={},Zg=function(u,d,c){let m=Promise.resolve();if(d&&d.length>0){let f=function(S){return Promise.all(S.map(j=>Promise.resolve(j).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};var g=f;document.getElementsByTagName("link");const b=document.querySelector("meta[property=csp-nonce]"),w=b?.nonce||b?.getAttribute("nonce");m=f(d.map(S=>{if(S=Kg(S),S in Fm)return;Fm[S]=!0;const j=S.endsWith(".css"),O=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${S}"]${O}`))return;const k=document.createElement("link");if(k.rel=j?"stylesheet":Xg,j||(k.as="script"),k.crossOrigin="",k.href=S,w&&k.setAttribute("nonce",w),document.head.appendChild(k),j)return new Promise((A,C)=>{k.addEventListener("load",A),k.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${S}`)))})}))}function h(b){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=b,window.dispatchEvent(w),!w.defaultPrevented)throw b}return m.then(b=>{for(const w of b||[])w.status==="rejected"&&h(w.reason);return u().catch(h)})};const Jg=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uf=(...r)=>r.filter((u,d,c)=>!!u&&u.trim()!==""&&c.indexOf(u)===d).join(" ").trim();var $g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Wg=U.forwardRef(({color:r="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:m="",children:h,iconNode:g,...b},w)=>U.createElement("svg",{ref:w,...$g,width:u,height:u,stroke:r,strokeWidth:c?Number(d)*24/Number(u):d,className:uf("lucide",m),...b},[...g.map(([f,S])=>U.createElement(f,S)),...Array.isArray(h)?h:[h]]));const Ge=(r,u)=>{const d=U.forwardRef(({className:c,...m},h)=>U.createElement(Wg,{ref:h,iconNode:u,className:uf(`lucide-${Jg(r)}`,c),...m}));return d.displayName=`${r}`,d};const mr=Ge("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const pf=Ge("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const Lo=Ge("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const Fg=Ge("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const Wc=Ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Rs=Ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const Pg=Ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const mt=Ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const br=Ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Fc=Ge("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const mf=Ge("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const ff=Ge("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);const Mo=Ge("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const eb=Ge("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const Uo=Ge("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const ab=Ge("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const nb=Ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const tb=Ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const Pc=Ge("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const hf=Ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);const ed=Ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Vc=Ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const Ht=Ge("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const cr=Ge("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const dr=Ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Qc=Ge("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const Gn=Ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Ic=Ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function fr(r,u={}){typeof window>"u"||window.dispatchEvent(new CustomEvent("learn-spanish-message",{detail:{id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,title:u.title||"Notice",message:r,tone:u.tone||"info",timeout:u.timeout||5200}}))}function ob(){const[r,u]=U.useState([]);return U.useEffect(()=>{function d(c){const m=c.detail||{};m.message&&(u(h=>[m,...h].slice(0,3)),m.timeout!==1/0&&window.setTimeout(()=>{u(h=>h.filter(g=>g.id!==m.id))},m.timeout||5200))}return window.addEventListener("learn-spanish-message",d),()=>window.removeEventListener("learn-spanish-message",d)},[]),r.length?o.jsx("div",{className:"app-message-stack","aria-live":"polite","aria-atomic":"false",children:r.map(d=>o.jsxs("div",{className:`app-message app-message-${d.tone||"info"}`,children:[o.jsxs("div",{children:[o.jsx("span",{className:"app-message-title",children:d.title}),o.jsx("p",{children:d.message})]}),o.jsx("button",{type:"button",className:"app-message-close",onClick:()=>u(c=>c.filter(m=>m.id!==d.id)),"aria-label":"Dismiss message",children:o.jsx(Gn,{size:14})})]},d.id))}):null}let Rt=null,Pm=!1,Do={rate:.85,voiceURI:""};function gf(){return Math.max(.65,Math.min(1.25,Number(Do.rate)||.85))}function _s(r={}){Do={...Do,...r,rate:Math.max(.65,Math.min(1.25,Number(r.rate??Do.rate)||.85))},Rt=null}function bf(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function ef(){return bf().filter(r=>r.lang&&r.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(r.name||""))}function Eo(){if(typeof window>"u"||!window.speechSynthesis)return null;if(Rt)return Rt;const r=bf();if(r.length===0)return null;if(Do.voiceURI){const c=r.find(m=>m.voiceURI===Do.voiceURI);if(c)return Rt=c,c}const u=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const c of u){const m=r.find(h=>h.lang&&h.lang.toLowerCase().startsWith(c.toLowerCase()));if(m)return Rt=m,m}const d=r.find(c=>/spanish|español/i.test(c.name||""));return d?(Rt=d,d):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{Rt=null,Eo()}),Eo(),setTimeout(Eo,250),setTimeout(Eo,1e3));function ad(){if(!Pm&&!(typeof window>"u"||!window.speechSynthesis))try{const r=new SpeechSynthesisUtterance(" ");r.volume=0,r.rate=1,window.speechSynthesis.speak(r),Pm=!0}catch{}}function Gs(){try{window.speechSynthesis?.cancel(),window.dispatchEvent?.(new CustomEvent("learn-spanish-audio-stop"))}catch{}}function vf(r,u={}){if(typeof window>"u"||!window.speechSynthesis||!r)return u.onerror&&u.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const d=new SpeechSynthesisUtterance(r),c=Eo();c&&(d.voice=c),d.lang=c?.lang||"es-ES",d.rate=u.rate??gf(),d.pitch=u.pitch??1,d.volume=1,u.onend&&(d.onend=u.onend),u.onerror&&(d.onerror=g=>{console.warn("[speech] error:",g?.error||"unknown",{text:r.slice(0,30),voice:c?.name}),u.onerror(g)}),u.onboundary&&(d.onboundary=u.onboundary),u.onstart&&(d.onstart=u.onstart),window.speechSynthesis.speak(d);const m=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(m);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),h=d.onend;return d.onend=g=>{clearInterval(m),h&&h(g)},d}catch(d){return console.warn("[speech] threw:",d),u.onerror&&u.onerror({error:d.message}),null}}const af=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function xf(r){const u=[],d=String(r||"");let c;for(af.lastIndex=0;(c=af.exec(d))!==null;)u.push({text:c[0],isWord:!!c[1],charStart:c.index});return u}function la({text:r}){const u=U.useMemo(()=>xf(r),[r]);return o.jsx(o.Fragment,{children:u.map((d,c)=>d.isWord?o.jsx("span",{className:"dict-word-token","data-dict-word":d.text,children:d.text},c):o.jsx("span",{children:d.text},c))})}function Hs({text:r,paragraphClass:u="reading-paragraph",firstParagraph:d=!1}){const c=U.useMemo(()=>xf(r),[r]),m=U.useMemo(()=>{const C=[];let Q="",I=[],te=-1;function F(){I.length>0&&C.push({spokenText:Q.trim(),words:I}),Q="",I=[],te=-1}for(let J=0;J<c.length;J++){const ee=c[J];if(!ee.isWord&&I.length===0&&/^\s+$/.test(ee.text))continue;const se=Q.length;Q+=ee.text,ee.isWord?(I.push({tokenIdx:J,text:ee.text,charStart:se,charEnd:se+ee.text.length,commaAfter:!1}),te=I.length-1):(/,/.test(ee.text)&&te>=0&&(I[te].commaAfter=!0),/[.!?;:]/.test(ee.text)&&F())}return F(),C},[c]),[h,g]=U.useState(-1),[b,w]=U.useState(!1),f=Sa.useRef([]),S=Sa.useRef([]),j=Sa.useRef(!1),O=Sa.useRef(110);function k(){S.current.forEach(clearTimeout),S.current=[]}function A(C){if(C.stopPropagation(),typeof window>"u"||!window.speechSynthesis){fr("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(ad(),b){j.current=!0,Gs(),k(),w(!1),g(-1);return}if(m.length===0)return;Gs(),k(),j.current=!1,w(!0),O.current=110;let Q=0;function I(){if(j.current)return;if(Q>=m.length){w(!1),g(-1);return}const te=m[Q];if(!te||te.words.length===0){Q++,I();return}const F=new SpeechSynthesisUtterance(te.spokenText),J=Eo();J&&(F.voice=J),F.lang=J?.lang||"es-ES",F.rate=gf(),F.pitch=1;let ee=!1,se=!1,ae=!1,$=!1,xe=0;const P=30,me=200;function ye(B){const X=Math.max(0,Number(B)||0);let W=te.words[0];for(const v of te.words)if(v.charStart<=X+1)W=v;else break;return W}function qe(){if($||ae||j.current)return;$=!0;let B=0;for(let X=0;X<te.words.length;X++){const W=te.words[X],G=setTimeout(()=>{!j.current&&!ae&&g(W.tokenIdx)},B);S.current.push(G),B+=W.text.length*O.current+P,W.commaAfter&&(B+=me)}}F.onstart=()=>{if(ee)return;ee=!0,xe=performance.now();const B=setTimeout(qe,350);S.current.push(B)},F.onboundary=B=>{if(j.current||typeof B.charIndex!="number")return;const X=ye(B.charIndex);X&&(ae=!0,g(X.tokenIdx))};const we=setTimeout(()=>{!ee&&!j.current&&(ee=!0,xe=performance.now(),qe())},500);S.current.push(we);function ke(){if(se||(se=!0,j.current))return;if(xe>0){const X=performance.now()-xe,W=te.words.reduce((Z,le)=>Z+le.text.length,0),v=te.words.filter(Z=>Z.commaAfter).length,G=te.words.length*P+v*me,K=Math.max(100,X-G);if(W>0){const Z=K/W;Z>=40&&Z<=300&&(O.current=Z*.6+O.current*.4)}}k(),Q++;const B=setTimeout(I,30);S.current.push(B)}F.onend=ke,F.onerror=ke;const D=Math.max(5e3,te.spokenText.length*220),N=setTimeout(ke,D);S.current.push(N),window.speechSynthesis.speak(F)}I()}return U.useEffect(()=>{function C(){j.current=!0,k(),w(!1),g(-1)}return window.addEventListener?.("learn-spanish-audio-stop",C),()=>{j.current=!0,k(),window.removeEventListener?.("learn-spanish-audio-stop",C),window.speechSynthesis?.cancel()}},[]),U.useEffect(()=>{if(h<0)return;const C=f.current[h];if(!C||typeof C.getBoundingClientRect!="function")return;const Q=C.getBoundingClientRect(),I=window.innerHeight||document.documentElement.clientHeight;(Q.bottom>I-100||Q.top<80)&&C.scrollIntoView({behavior:"smooth",block:"center"})},[h]),typeof window<"u"&&!window.speechSynthesis?o.jsxs("p",{className:u,children:[o.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:C=>{C.stopPropagation(),fr("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"})},"aria-label":"Audio not supported",title:"Audio no disponible",children:o.jsx(Qc,{size:12})}),o.jsx(la,{text:r})]}):o.jsxs("p",{className:`${u} karaoke-paragraph ${b?"is-playing":""}`,children:[o.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${b?"playing":""}`,onClick:A,onPointerDown:C=>C.stopPropagation(),"aria-label":b?"Stop":"Play audio with highlighting",title:b?"Detener":"Escuchar con resaltado",children:o.jsx(Qc,{size:12})}),c.map((C,Q)=>{if(!C.isWord)return o.jsx("span",{className:"kt-space",children:C.text},Q);const I=Q===h;return o.jsx("span",{ref:te=>f.current[Q]=te,className:`kt-word ${I?"kt-active":""}`,"data-dict-word":C.text,children:C.text},Q)})]})}function Pe({text:r,size:u="sm",className:d=""}){const[c,m]=U.useState(!1);U.useEffect(()=>{function g(){m(!1)}return window.addEventListener?.("learn-spanish-audio-stop",g),()=>window.removeEventListener?.("learn-spanish-audio-stop",g)},[]);function h(g){if(g.stopPropagation(),typeof window>"u"||!window.speechSynthesis){fr("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(ad(),c){Gs(),m(!1);return}Gs(),m(!0),vf(r,{onend:()=>m(!1),onerror:b=>{m(!1),b?.error&&b.error!=="canceled"&&b.error!=="interrupted"&&fr(`Error al leer: ${b.error}. Asegurate de tener una voz en espanol instalada.`,{title:"Audio necesita atencion",tone:"warning"})}})}return o.jsx("button",{className:`speak-btn speak-btn-${u} ${c?"playing":""} ${d}`,onClick:h,onPointerDown:g=>g.stopPropagation(),"aria-label":c?"Stop":"Play audio",title:c?"Detener":"Escuchar",children:o.jsx(Qc,{size:u==="sm"?12:14})})}function sb({settings:r,onChange:u}){const[d,c]=U.useState(()=>ef());U.useEffect(()=>{_s(r)},[r]),U.useEffect(()=>{function h(){c(ef())}if(h(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",h);const g=setTimeout(h,600);return()=>{clearTimeout(g),window.speechSynthesis.removeEventListener?.("voiceschanged",h)}}},[]);function m(h){const g={...r,...h};_s(g),u?.(g)}return o.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[o.jsxs("div",{className:"audio-settings-label",children:[o.jsx(ff,{size:14}),"Audio"]}),o.jsxs("select",{className:"audio-rate-select",value:String(r.rate),onChange:h=>m({rate:Number(h.target.value)}),"aria-label":"Audio speed",children:[o.jsx("option",{value:"0.7",children:"0.70x"}),o.jsx("option",{value:"0.85",children:"0.85x"}),o.jsx("option",{value:"1",children:"1.00x"}),o.jsx("option",{value:"1.15",children:"1.15x"})]}),o.jsxs("select",{className:"audio-voice-select",value:r.voiceURI||"",onChange:h=>m({voiceURI:h.target.value}),"aria-label":"Spanish voice",children:[o.jsx("option",{value:"",children:"Voz espanola"}),d.map(h=>o.jsxs("option",{value:h.voiceURI,children:[h.name," (",h.lang,")"]},h.voiceURI))]})]})}function ft({es:r,en:u,esClass:d="vu-ex-es",enClass:c="vu-ex-en"}){const m=(r||"").length,h=(u||"").length;return m<=18&&h<=18&&m+h<=36?o.jsxs("div",{className:`${d} inline-pair`,children:[o.jsx(Pe,{text:r}),o.jsx(la,{text:r})," ",o.jsxs("span",{className:`${c} inline-en`,children:["(",u,")"]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:d,children:[o.jsx(Pe,{text:r}),o.jsx(la,{text:r})]}),o.jsx("div",{className:c,children:u})]})}const ib=`
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
.book-root.focus-mode .mobile-btn {
  display: none !important;
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
  height: 195px;
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
  .memoria-card { height: 170px; }
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
    order: 2;
    margin-left: auto;
    min-width: 88px;
  }
  .font-controls {
    order: 2;
  }
  .header-search {
    order: 3;
    flex-basis: 100%;
    max-width: none;
    margin: 0;
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
`,rb=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],lb={id:"tiempos-compuestos-indicativo",level:"B1-B2",title:"Tiempos Compuestos del Indicativo",subtitle:"haber + participio para acciones completadas",intro:"Compound tenses in the indicative present completed actions as facts: something has happened, had happened, will have happened, or would have happened. The engine is always the same: haber changes, the participle stays fixed.",blocks:[{type:"indicative-hero",eyebrow:"Gramática Española · Nivel B1-B2",title:"Tiempos Compuestos del Indicativo",text:"Compound tenses are formed with the auxiliary verb haber plus a past participle. They express actions completed before a reference point in time.",formula:["haber conjugado","+","participio pasado","=","tiempo compuesto"],tags:["6 tiempos","haber + participio","perfecto · pluscuamperfecto · futuro · condicional"]},{type:"indicative-tense-cards",title:"Los 6 tiempos compuestos",cards:[{tone:"green",title:"Pretérito Perfecto",english:"Present perfect",use:"An action completed recently or connected to the present. Often used with hoy, esta semana, ya, todavía no.",forms:[["yo","he hablado"],["tú","has comido"],["él / ella","ha vivido"],["nosotros","hemos llegado"],["vosotros","habéis visto"],["ellos","han hecho"]],example:{es:"Ya he terminado el informe.",en:"I have already finished the report."}},{tone:"red",title:"Pretérito Pluscuamperfecto",english:"Past perfect / pluperfect",use:"An action completed before another past action. This is the past of the past.",forms:[["yo","había hablado"],["tú","habías comido"],["él / ella","había vivido"],["nosotros","habíamos llegado"],["vosotros","habíais salido"],["ellos","habían visto"]],example:{es:"Cuando llegué, ella ya había salido.",en:"When I arrived, she had already left."}},{tone:"teal",title:"Futuro Compuesto",english:"Future perfect",use:"An action that will have been completed before a future point. It can also express probability about the past.",forms:[["yo","habré hablado"],["tú","habrás comido"],["él / ella","habrá vivido"],["nosotros","habremos llegado"],["vosotros","habréis terminado"],["ellos","habrán vuelto"]],example:{es:"Para el lunes, habré enviado el contrato.",en:"By Monday, I will have sent the contract."}},{tone:"purple",title:"Condicional Compuesto",english:"Conditional perfect",use:"An action that would have happened under different circumstances. It often pairs with si + pluscuamperfecto de subjuntivo.",forms:[["yo","habría hablado"],["tú","habrías comido"],["él / ella","habría vivido"],["nosotros","habríamos ido"],["vosotros","habríais dicho"],["ellos","habrían hecho"]],example:{es:"Si hubiera estudiado, habría aprobado.",en:"If I had studied, I would have passed."}},{tone:"gold",title:"Pretérito Anterior",english:"Past anterior, literary",use:"An action completed immediately before another past action. Mostly literary or formal written Spanish after cuando, apenas, en cuanto, no bien.",forms:[["yo","hube hablado"],["tú","hubiste comido"],["él / ella","hubo vivido"],["nosotros","hubimos llegado"],["vosotros","hubisteis salido"],["ellos","hubieron visto"]],example:{es:"Apenas hubo llegado, empezó a hablar.",en:"He had barely arrived when he began to speak."}},{tone:"navy",title:"Condicional vía subjuntivo",english:"Spoken alternative",use:"In spoken Spanish, hubiera/hubiese + participio is often used like the conditional perfect, especially in Latin America.",forms:[["yo","hubiera ido"],["tú","hubieras comido"],["él / ella","hubiera dicho"],["nosotros","hubiéramos llegado"],["vosotros","hubierais hecho"],["ellos","hubieran visto"]],example:{es:"Yo hubiera venido antes. (= habría venido)",en:"I would have come earlier."}}]},{type:"participio-section",title:"El participio pasado",text:"The past participle is the second element of every compound tense. In these compound tenses it is invariable: it does not change for gender or number.",regular:[["-AR verbs","→ -ado"],["hablar","hablado"],["trabajar","trabajado"],["-ER / -IR verbs","→ -ido"],["comer","comido"],["vivir","vivido"]],irregular:[["abrir","abierto"],["decir","dicho"],["escribir","escrito"],["hacer","hecho"],["morir","muerto"],["poner","puesto"],["romper","roto"],["ver","visto"],["volver","vuelto"]]},{type:"indicative-timeline",title:"Timeline visual",events:[{label:"Pluscuam.",sub:"past of past",position:8,lane:"top",tone:"red"},{label:"Anterior",sub:"just before past",position:23,lane:"top",tone:"gold"},{label:"Perfecto",sub:"connects to now",position:40,lane:"bottom",tone:"green"},{label:"Ahora",sub:"reference point",position:50,lane:"now",tone:"ink"},{label:"Fut. compuesto",sub:"will have done",position:68,lane:"top",tone:"teal"},{label:"Cond. comp.",sub:"would have done",position:86,lane:"top",tone:"purple"}]},{type:"tips-grid",tips:[{title:"The haber/adverb rule",text:"In compound tenses, nothing goes between haber and the participle. Say Ya he comido, not He ya comido."},{title:"Spain vs. Latin America",text:"In Spain, pretérito perfecto is common for recent past. In most of Latin America, speakers often prefer the simple pretérito: comí, salí, terminé."}]},{type:"choice-quiz",title:"Quiz: tiempos compuestos del indicativo",questions:[{prompt:"Cuando llegué, ella ya ___.",choices:["ha salido","había salido","habrá salido","habría salido"],answer:"había salido",explanation:"Pluscuamperfecto: había salido. The action was completed before another past action."},{prompt:"Hoy ___ el contrato.",choices:["había firmado","habré firmado","he firmado","hube firmado"],answer:"he firmado",explanation:"Pretérito perfecto: he firmado. A recent action connected to the present."},{prompt:"Para mañana, nosotros ___ todo.",choices:["habíamos terminado","habremos terminado","hemos terminado","habríamos terminado"],answer:"habremos terminado",explanation:"Futuro compuesto: habremos terminado. The action will be completed before a future deadline."},{prompt:"Yo ___ la casa, pero no tenía dinero.",choices:["habría comprado","había comprado","he comprado","habré comprado"],answer:"habría comprado",explanation:"Condicional compuesto: habría comprado. It describes what would have happened under different conditions."},{prompt:"Apenas ___ la carta, salió corriendo.",choices:["había leído","ha leído","hubo leído","habría leído"],answer:"hubo leído",explanation:"Pretérito anterior: hubo leído. A literary form for an action immediately before another past event."},{prompt:"¿Alguna vez ___ en México?",choices:["habías estado","has estado","habrás estado","hube estado"],answer:"has estado",explanation:"Pretérito perfecto: has estado. It is used for life experience connected to the present."},{prompt:"Dijo que no ___ la notificación.",choices:["ha recibido","habrá recibido","habría recibido","había recibido"],answer:"había recibido",explanation:"Pluscuamperfecto: había recibido. The receiving would have happened before the reported past statement."}]}]},cb={id:"tiempos-compuestos",level:"B1-B2",title:"Tiempos Compuestos del Subjuntivo",subtitle:"Pretérito perfecto y pluscuamperfecto de subjuntivo",intro:"This lesson is about completed actions inside the subjunctive world: emotion, doubt, desire, negation, and unreal conditions. The action is finished, but the sentence does not present it as a plain fact.",blocks:[{type:"subjunctive-hero",eyebrow:"Regla central",title:"El subjuntivo compuesto nunca camina solo.",accent:"Siempre aparece provocado por una idea principal.",points:["It is always triggered by another clause or expression.","It usually lives in a subordinate clause after que or si.","It shows a completed action seen through emotion, doubt, desire, denial, or hypothesis."],formula:"trigger + que/si + haber en subjuntivo + participio"},{type:"golden-rule",title:"Golden rule",text:"Never use these forms alone as the main message. They signal that a subordinate action was completed before another viewpoint.",examples:[{bad:"Haya terminado el informe.",good:"Me alegra que haya terminado el informe."},{bad:"Hubiera sabido la verdad.",good:"Ojalá hubiera sabido la verdad."}]},{type:"subjunctive-tense-cards",cards:[{tone:"plum",title:"Pretérito Perfecto de Subjuntivo",english:"Present perfect subjunctive",formula:"haya / hayas / haya / hayamos / hayáis / hayan + participio",use:"Use it when the main clause is present or future, and the subordinate action is already complete or must be complete by a future point.",mainClause:"present / future main clause",forms:[["yo","haya hablado"],["tú","hayas comido"],["él / ella","haya vivido"],["nosotros","hayamos terminado"],["vosotros","hayáis visto"],["ellos","hayan hecho"]],examples:[{es:"Me alegra que hayas venido.",en:"I am glad that you came / have come."},{es:"Dudo que hayan firmado el contrato.",en:"I doubt that they have signed the contract."},{es:"Necesito que lo hayas revisado antes del lunes.",en:"I need you to have reviewed it before Monday."}]},{tone:"rose",title:"Pretérito Pluscuamperfecto de Subjuntivo",english:"Past perfect subjunctive",formula:"hubiera/hubiese + participio",use:"Use it with past or conditional main clauses, regrets, past doubts, and unreal si clauses. Hubiera and hubiese mean the same thing here.",mainClause:"past / conditional / si clause",forms:[["yo","hubiera / hubiese hablado"],["tú","hubieras / hubieses comido"],["él / ella","hubiera / hubiese vivido"],["nosotros","hubiéramos / hubiésemos terminado"],["vosotros","hubierais / hubieseis visto"],["ellos","hubieran / hubiesen hecho"]],examples:[{es:"No creía que hubieras leído todo.",en:"I did not believe that you had read everything."},{es:"Ojalá hubiera sabido la verdad.",en:"I wish I had known the truth."},{es:"Si hubiéramos salido antes, habríamos llegado a tiempo.",en:"If we had left earlier, we would have arrived on time."}]}]},{type:"trigger-grid",heading:"Trigger expressions",text:"Do not memorize the tense alone. Memorize the doorway that opens it.",categories:[{title:"Emotion",trigger:"me alegra que, me sorprende que, siento que",examples:[{es:"Me alegra que hayas entendido la explicación.",en:"I am glad you understood the explanation."},{es:"Me sorprendió que hubieran aceptado tan rápido.",en:"It surprised me that they had accepted so quickly."}]},{title:"Doubt / negation",trigger:"dudo que, no creo que, no parece que",examples:[{es:"No creo que ella haya mentido.",en:"I do not think she has lied."},{es:"No parecía que hubieran preparado nada.",en:"It did not seem that they had prepared anything."}]},{title:"Desire / wish",trigger:"quiero que, espero que, ojalá",examples:[{es:"Espero que hayas descansado bien.",en:"I hope you rested well."},{es:"Ojalá hubiéramos hablado antes.",en:"I wish we had spoken earlier."}]},{title:"Hypothetical si clauses",trigger:"si + pluscuamperfecto de subjuntivo",examples:[{es:"Si me hubieras llamado, habría venido.",en:"If you had called me, I would have come."},{es:"Si hubiesen revisado el contrato, no habrían firmado.",en:"If they had reviewed the contract, they would not have signed."}]}]},{type:"lesson-section",heading:"Perfecto vs. pluscuamperfecto",text:"Choose the tense by looking at the main clause. Present or future frame usually points to haya hablado. Past, conditional, regret, or unreal si frame points to hubiera/hubiese hablado.",table:{headers:["Question","Perfecto de subjuntivo","Pluscuamperfecto de subjuntivo"],rows:[["Main clause time","present or future","past or conditional"],["Formula","haya + participio","hubiera / hubiese + participio"],["Meaning","has done / did / will have done","had done / would have done in an unreal past"],["Common triggers","me alegra que, dudo que, espero que","no creía que, ojalá, si"],["Example","Dudo que haya salido.","Dudaba que hubiera salido."]]}},{type:"conditional-pattern",heading:"Conditional irreal: the pattern you must own",formula:"Si + hubiera/hubiese + participio, habría + participio",text:"This is the most important structure in the whole lesson. The si clause names the impossible past condition; the conditional perfect names the result that did not happen.",examples:[{es:"Si hubiera estudiado más, habría aprobado el examen.",en:"If I had studied more, I would have passed the exam.",note:"Condition did not happen: I did not study enough."},{es:"Si me hubieras avisado, habría preparado los documentos.",en:"If you had warned me, I would have prepared the documents.",note:"The warning did not happen, so the preparation did not happen."},{es:"Si hubiésemos salido temprano, no habríamos perdido el tren.",en:"If we had left early, we would not have missed the train.",note:"Hubiésemos is the same value as hubiéramos: more formal or literary in many places."}]},{type:"tips-grid",tips:[{title:"Hubiera vs. hubiese",text:"Both forms are correct. Hubiera is more common in everyday Spanish. Hubiese sounds a little more formal, literary, or careful, depending on the country."},{title:"The special behavior of ojalá",text:"Ojalá can point to different time frames: ojalá haya llegado means I hope he has arrived; ojalá hubiera llegado means I wish he had arrived, but he probably did not."}]},{type:"choice-quiz",title:"Quiz: completed actions in subjunctive frames",questions:[{prompt:"Me alegra que tú ___ a tiempo.",choices:["hayas llegado","hubieras llegado","has llegado","habrías llegado"],answer:"hayas llegado",explanation:"Me alegra que is a present emotion trigger, so use pretérito perfecto de subjuntivo: hayas llegado."},{prompt:"No creía que ellos ___ el mensaje.",choices:["hayan recibido","hubieran recibido","han recibido","habrán recibido"],answer:"hubieran recibido",explanation:"No creía is a past doubt/negation frame, so the prior completed action uses pluscuamperfecto de subjuntivo."},{prompt:"Espero que nosotros ___ todo antes de mañana.",choices:["hayamos terminado","hubiéramos terminado","hemos terminado","habíamos terminado"],answer:"hayamos terminado",explanation:"Espero que looks forward from the present to a completed future deadline: hayamos terminado."},{prompt:"Si me lo ___, te habría ayudado.",choices:["hayas dicho","hubieras dicho","has dicho","habrías dicho"],answer:"hubieras dicho",explanation:"Si + unreal past condition requires pluscuamperfecto de subjuntivo: hubieras dicho."},{prompt:"Dudo que Ana ___ la verdad.",choices:["haya dicho","hubiera dicho","ha dicho","había dicho"],answer:"haya dicho",explanation:"Dudo que is a present doubt trigger, so use haya + participio."},{prompt:"Ojalá ___ más temprano.",choices:["hayamos salido","hubiéramos salido","hemos salido","habremos salido"],answer:"hubiéramos salido",explanation:"With ojalá, pluscuamperfecto often expresses regret about the past: I wish we had left earlier."},{prompt:"Era imposible que vosotros ___ eso solos.",choices:["hayáis hecho","hubierais hecho","habéis hecho","habríais hecho"],answer:"hubierais hecho",explanation:"Era imposible is a past evaluative trigger, so use pluscuamperfecto de subjuntivo."},{prompt:"Necesito que usted lo ___ antes del lunes.",choices:["haya revisado","hubiera revisado","ha revisado","habría revisado"],answer:"haya revisado",explanation:"Necesito que is a present desire/requirement trigger. The task must be completed before a future point: haya revisado."}]}]},db={soy:["ser"],eres:["ser"],es:["ser"],somos:["ser"],son:["ser"],fui:["ser","ir"],fuiste:["ser","ir"],fue:["ser","ir"],fuimos:["ser","ir"],fueron:["ser","ir"],era:["ser"],eras:["ser"],eramos:["ser"],eran:["ser"],estoy:["estar"],estas:["estar"],esta:["estar"],estamos:["estar"],estan:["estar"],estuve:["estar"],estuvo:["estar"],estuvieron:["estar"],tengo:["tener"],tienes:["tener"],tiene:["tener"],tenemos:["tener"],tienen:["tener"],tuve:["tener"],tuvo:["tener"],tuvieron:["tener"],voy:["ir"],vas:["ir"],va:["ir"],vamos:["ir"],van:["ir"],iba:["ir"],ibas:["ir"],iban:["ir"],puedo:["poder"],puedes:["poder"],puede:["poder"],podemos:["poder"],pueden:["poder"],pude:["poder"],pudo:["poder"],pudieron:["poder"],quiero:["querer"],quieres:["querer"],quiere:["querer"],queremos:["querer"],quieren:["querer"],quise:["querer"],quiso:["querer"],hago:["hacer"],haces:["hacer"],hace:["hacer"],hacemos:["hacer"],hacen:["hacer"],hice:["hacer"],hizo:["hacer"],hicieron:["hacer"],digo:["decir"],dices:["decir"],dice:["decir"],decimos:["decir"],dicen:["decir"],dije:["decir"],dijo:["decir"],dijeron:["decir"],veo:["ver"],ves:["ver"],ve:["ver"],vemos:["ver"],ven:["ver"],vi:["ver"],vio:["ver"],vieron:["ver"],vengo:["venir"],vienes:["venir"],viene:["venir"],vienen:["venir"],vine:["venir"],vino:["venir"],vinieron:["venir"],pongo:["poner"],pones:["poner"],pone:["poner"],ponen:["poner"],puse:["poner"],puso:["poner"],pusieron:["poner"],salgo:["salir"],sales:["salir"],sale:["salir"],salen:["salir"],se:["saber","ser"],sabe:["saber"],saben:["saber"],supe:["saber"],supo:["saber"],dijeron:["decir"],doy:["dar"],das:["dar"],da:["dar"],dan:["dar"],di:["dar","decir"],dio:["dar"],dieron:["dar"]},ub=new Set(["si","sí","tu","tú","el","él","mi","mí","te","té","se","sé","de","dé","mas","más","esta","está"]),nf={si:{main:"if",pos:"conjunction",source:"Local dictionary",stored:!0},sí:{main:"yes",pos:"affirmation",source:"Local dictionary",stored:!0},tu:{main:"your",pos:"possessive adjective",source:"Local dictionary",stored:!0},tú:{main:"you",pos:"subject pronoun",source:"Local dictionary",stored:!0},el:{main:"the",pos:"article",source:"Local dictionary",stored:!0},él:{main:"he",pos:"subject pronoun",source:"Local dictionary",stored:!0},mi:{main:"my",pos:"possessive adjective",source:"Local dictionary",stored:!0},mí:{main:"me",pos:"prepositional pronoun",source:"Local dictionary",stored:!0},te:{main:"you / to you",pos:"object pronoun",source:"Local dictionary",stored:!0},té:{main:"tea",pos:"noun",source:"Local dictionary",stored:!0},se:{main:"himself / herself / themselves",pos:"reflexive pronoun",source:"Local dictionary",stored:!0},sé:{main:"I know",pos:"verb form of saber",source:"Local dictionary",stored:!0},de:{main:"of / from",pos:"preposition",source:"Local dictionary",stored:!0},dé:{main:"give",pos:"subjunctive/command form of dar",source:"Local dictionary",stored:!0},mas:{main:"but",pos:"formal conjunction",source:"Local dictionary",stored:!0},más:{main:"more",pos:"adverb",source:"Local dictionary",stored:!0},esta:{main:"this",pos:"demonstrative adjective",source:"Local dictionary",stored:!0},está:{main:"is",pos:"verb form of estar",source:"Local dictionary",stored:!0}};function nd(r){return String(r||"").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã¼/g,"ü").replace(/Â¡/g,"¡").replace(/Â¿/g,"¿").trim().replace(/^[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+|[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+$/gu,"").trim().toLowerCase()}function hr(r){return Rn(r).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Rn(r){return nd(r).replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function pb(r,u,d,c){if(!u.endsWith(d)||u.length<=d.length+1)return;const m=u.slice(0,-d.length);c.forEach(h=>r.add(`${m}${h}`))}function vr(r){const u=Rn(r),d=hr(r),c=ub.has(u),m=new Set(c?[u]:[u,d]);if(!d)return[];if(c)return[...m].filter(Boolean);for(const h of db[d]||[])m.add(h);return d.endsWith("ces")&&d.length>5&&m.add(`${d.slice(0,-3)}z`),d.endsWith("es")&&d.length>4&&m.add(d.slice(0,-2)),d.endsWith("s")&&d.length>3&&m.add(d.slice(0,-1)),d.endsWith("as")&&d.length>4&&(m.add(d.slice(0,-1)),m.add(`${d.slice(0,-2)}o`)),d.endsWith("os")&&d.length>4&&m.add(d.slice(0,-1)),d.endsWith("a")&&d.length>3&&m.add(`${d.slice(0,-1)}o`),[["amos",["ar"]],["ando",["ar"]],["ado",["ar"]],["aste",["ar"]],["aron",["ar"]],["aba",["ar"]],["abas",["ar"]],["abamos",["ar"]],["aban",["ar"]],["arian",["ar"]],["aria",["ar"]],["are",["ar"]],["aras",["ar"]],["ara",["ar"]],["as",["ar"]],["an",["ar"]],["a",["ar"]],["e",["ar"]],["o",["ar"]],["emos",["er"]],["iendo",["er","ir"]],["ido",["er","ir"]],["iste",["er","ir"]],["ieron",["er","ir"]],["ia",["er","ir"]],["ias",["er","ir"]],["iamos",["er","ir"]],["ian",["er","ir"]],["eria",["er"]],["irian",["ir"]],["iria",["ir"]],["ere",["er"]],["ire",["ir"]],["es",["er","ir"]],["en",["er","ir"]],["e",["er","ir"]],["imos",["ir"]],["io",["er","ir"]],["i",["er","ir"]],["o",["er","ir"]]].forEach(([h,g])=>pb(m,d,h,g)),[...m].filter(Boolean)}function tf(r){return r.topicTerm||r.spanish}function mb(r){return r.topicEnglish||r.english}function of(r,u=[],d=[]){const c=Rn(r),m=new Set(vr(r)),h=u.find(g=>Rn(g.word)===c)||u.find(g=>m.has(hr(g.word)));if(h)return{main:h.translation||"Saved in Memoria",extras:h.extras||[],pos:h.pos||"Memoria",source:"Memoria",stored:!0,matchedWord:h.word};for(const g of d||[])for(const b of g.entries||[]){const w=[b.spanish,b.topicTerm,tf(b)];if(w.some(f=>Rn(f)===c)||w.some(f=>m.has(hr(f))))return{main:mb(b),extras:b.topicEnglish&&b.topicEnglish!==b.english?[b.english].filter(Boolean):[],pos:g.title||b.sourceGroupTitle||"Palabras",source:"Palabras",stored:!0,matchedWord:tf(b)}}return null}async function yf(r){const u=[],d=nd(r),c=Rn(d);if(nf[c])return{...nf[c],matchedWord:c};const m=[...new Set([d,...vr(d)])].filter(Boolean).slice(0,4),h=w=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(w):void 0;async function g(w){const f=encodeURIComponent(w);try{const S=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${f}&src=es&dst=en`,{signal:h(3500)});if(S.ok){const j=await S.json();if(Array.isArray(j)&&j.length>0){const O=j[0],k=O?.translations?.[0]?.text?.trim();if(k){const A=(O.translations||[]).slice(1,5).map(Q=>Q.text?.trim()).filter(Boolean),C=[];for(const Q of O.translations||[]){for(const I of Q.examples||[])I.src&&I.dst&&C.length<2&&C.push({es:I.src,en:I.dst});if(C.length>=2)break}return{main:k,extras:A,pos:O.pos||O.translations?.[0]?.pos||"",examples:C,source:"Linguee",matchedWord:w}}}}else u.push(`Linguee ${w}: HTTP ${S.status}`)}catch(S){u.push(`Linguee ${w}: ${S.message}`)}try{const S=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${f}&pretty=true`,{signal:h(3500)});if(S.ok){const O=(await S.json())?.tuc||[],k=O.map(C=>C?.phrase?.text?.trim()).filter(Boolean),A=O.flatMap(C=>(C?.meanings||[]).map(Q=>Q?.text?.trim())).filter(Boolean);if(k.length>0){const C=k[0],Q=k.slice(1,5).filter(I=>I.toLowerCase()!==C.toLowerCase());return{main:C,extras:Q,pos:"",meanings:A.slice(0,3),source:"Glosbe",matchedWord:w}}}else u.push(`Glosbe ${w}: HTTP ${S.status}`)}catch(S){u.push(`Glosbe ${w}: ${S.message}`)}try{const S=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${f}`,{signal:h(3500)});if(S.ok){const j=await S.json();if(Array.isArray(j)&&j.length>0){const k=j[0]?.meanings?.[0],A=k?.definitions?.[0]?.definition?.trim();if(A)return{main:A,extras:[],pos:k?.partOfSpeech||"",source:"Diccionario",isDefinition:!0,matchedWord:w}}}else u.push(`FreeDict ${w}: HTTP ${S.status}`)}catch(S){u.push(`FreeDict ${w}: ${S.message}`)}return null}for(const w of m){const f=await g(w);if(f)return f}const b=encodeURIComponent(d);try{const w=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${b}`,{signal:h(4e3)});if(w.ok){const S=(await w.json())?.sentences?.[0]?.trans?.trim();if(S&&S.toLowerCase()!==d.toLowerCase())return{main:S,extras:[],pos:"",source:"Google"}}}catch(w){u.push(`Google: ${w.message}`)}try{const w=await fetch(`https://api.mymemory.translated.net/get?q=${b}&langpair=es|en`,{signal:h(4e3)});if(w.ok){const S=(await w.json())?.responseData?.translatedText?.trim();if(S&&S.toLowerCase()!==d.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(S))return{main:S,extras:[],pos:"",source:"MyMemory"}}}catch(w){u.push(`MyMemory: ${w.message}`)}return u.length&&console.warn("Lookup failed for",r,u),null}const Ls="study-time-v1";function wf(r=new Date){return r.toISOString().slice(0,10)}function To(r={}){const u=wf(),d=r.date===u?r.date:u,c=r.date===u?Math.max(0,Number(r.todaySeconds)||0):0;return{totalSeconds:Math.max(0,Number(r.totalSeconds)||0),todaySeconds:c,date:d,byChapter:r.byChapter&&typeof r.byChapter=="object"?r.byChapter:{},updatedAt:r.updatedAt||Date.now()}}function fb(r={},u={}){const d=To(r),c=To(u),m={};for(const h of new Set([...Object.keys(c.byChapter||{}),...Object.keys(d.byChapter||{})]))m[h]=Math.max(Number(d.byChapter?.[h])||0,Number(c.byChapter?.[h])||0);return{totalSeconds:Math.max(d.totalSeconds,c.totalSeconds),todaySeconds:Math.max(d.todaySeconds,c.todaySeconds),date:wf(),byChapter:m,updatedAt:Math.max(Number(d.updatedAt)||0,Number(c.updatedAt)||0,Date.now())}}function Us(r=0){const u=Math.max(0,Math.floor(Number(r)||0)),d=Math.floor(u/3600),c=Math.floor(u%3600/60);return d>0?`${d}h ${String(c).padStart(2,"0")}m`:c>0?`${c}m`:`${u}s`}const ur="google-drive-client-id-v1",kf="learn-spanish-sync.json",hb="https://www.googleapis.com/auth/drive.appdata";let Oc=null;function gb(){return typeof window>"u"?Promise.reject(new Error("No browser window")):window.google?.accounts?.oauth2?Promise.resolve(window.google):(Oc||(Oc=new Promise((r,u)=>{const d=document.createElement("script");d.src="https://accounts.google.com/gsi/client",d.async=!0,d.defer=!0,d.onload=()=>r(window.google),d.onerror=()=>u(new Error("Could not load Google sign-in")),document.head.appendChild(d)})),Oc)}async function sf(r,u=""){const d=await gb();return new Promise((c,m)=>{d.accounts.oauth2.initTokenClient({client_id:r,scope:hb,prompt:u,callback:g=>{g?.access_token?c(g.access_token):m(new Error(g?.error||"Google sign-in failed"))},error_callback:g=>m(new Error(g?.message||"Google sign-in failed"))}).requestAccessToken()})}async function td(r,u,d={}){const c=await fetch(u,{...d,headers:{...d.headers||{},Authorization:`Bearer ${r}`}});if(!c.ok){const m=await c.text().catch(()=>"");throw new Error(m||`Google Drive HTTP ${c.status}`)}return c}async function bb(r){const u=new URLSearchParams({spaces:"appDataFolder",fields:"files(id,name,modifiedTime)",q:`name='${kf}' and trashed=false`});return((await(await td(r,`https://www.googleapis.com/drive/v3/files?${u}`)).json()).files||[])[0]||null}async function vb(r,u){return u?(await td(r,`https://www.googleapis.com/drive/v3/files/${u}?alt=media`)).json():null}async function xb(r,u,d=null){const c=d?{}:{name:kf,parents:["appDataFolder"]},m=`learn-spanish-${Date.now()}`,h=[`--${m}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(c),`--${m}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(u),`--${m}--`].join(`\r
`),g=d?`https://www.googleapis.com/upload/drive/v3/files/${d}?uploadType=multipart`:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";await td(r,g,{method:d?"PATCH":"POST",headers:{"Content-Type":`multipart/related; boundary=${m}`},body:h})}function yb(r={},u={}){const d={...u};for(const[c,m]of Object.entries(r||{})){const h=d[c],g=m?.reviewedAt||m?.dueAt||0,b=h?.reviewedAt||h?.dueAt||0;d[c]=g>=b?m:h}return d}function wb(r=[],u=[]){const d=new Map;for(const c of[...u,...r]){const m=Rn(c.word),h=d.get(m);if(!h){d.set(m,c);continue}const g=Math.max(h.savedAt||0,h.translatedAt||0,h.review?.reviewedAt||0),b=Math.max(c.savedAt||0,c.translatedAt||0,c.review?.reviewedAt||0),w=b>=g?c:h,f=b>=g?h:c;d.set(m,{...f,...w,tags:Array.from(new Set([...f.tags||[],...w.tags||[]])),extras:Array.from(new Set([...f.extras||[],...w.extras||[]])),favorite:!!(f.favorite||w.favorite),difficult:!!(f.difficult||w.difficult),review:(w.review?.reviewedAt||0)>=(f.review?.reviewedAt||0)?w.review:f.review})}return[...d.values()].sort((c,m)=>(m.savedAt||0)-(c.savedAt||0))}function kb(r={},u={}){const d={...u,...r};for(const c of new Set([...Object.keys(r||{}),...Object.keys(u||{})]))r[c]==="understood"||u[c]==="understood"?d[c]="understood":(r[c]==="read"||u[c]==="read")&&(d[c]="read");return d}function jb(r,u){if(!u)return r;const d=Date.parse(r.exportedAt||"")||0,c=Date.parse(u.exportedAt||"")||0,m=d>=c?r:u;return{...m,app:"Learn Spanish",version:4,exportedAt:new Date().toISOString(),savedWords:wb(r.savedWords,u.savedWords),visitedChapters:Array.from(new Set([...u.visitedChapters||[],...r.visitedChapters||[]])),palabrasProgress:yb(r.palabrasProgress,u.palabrasProgress),lessonStatuses:kb(r.lessonStatuses,u.lessonStatuses),studyTime:fb(r.studyTime,u.studyTime),writingEntries:[...new Map([...u.writingEntries||[],...r.writingEntries||[]].map(h=>[h.id,h])).values()].sort((h,g)=>(g.createdAt||0)-(h.createdAt||0)).slice(0,80),booxMode:!!m.booxMode,fontScale:m.fontScale,audioSettings:m.audioSettings,translationMode:m.translationMode}}const zb=1440*60*1e3,Sb="learner-profile-v1";function _n(r){return String(r||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function Nb(r,u,d=Date.now()){const c=r?.intervalDays||0,m=r?.ease||2.35,h=r?.reps||0,g={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:h?2:1,multiplier:m},easy:{label:"Easy",easeDelta:.12,minDays:h?4:3,multiplier:m+.7}}[u]||{label:"Good",easeDelta:0,minDays:1,multiplier:m},b=Math.max(1.35,Math.min(3.2,m+g.easeDelta)),w=u==="again"?g.minDays:Math.max(g.minDays,(c||1)*g.multiplier);return{...r,ease:b,intervalDays:w,dueAt:d+w*zb,reps:u==="again"?0:h+1,lapses:u==="again"?(r?.lapses||0)+1:r?.lapses||0,seen:!0,mastered:u==="easy"||w>=7,lastRating:g.label,reviewedAt:d}}function qb(r){const u=[r.title,r.heading,r.text];for(const d of r.paragraphs||[])u.push(d);for(const d of r.pairs||[])u.push(d.es,d.en);for(const d of r.columns||[])u.push(d.es,d.en);for(const d of r.phrases||[])u.push(d.es,d.en);for(const d of r.words||[])u.push(d.es,d.en);for(const d of r.lessons||[]){u.push(d.title,d.subtitle,d.intro);for(const c of d.sections||[]){u.push(c.heading,c.text,c.tip,c.takeaway);for(const m of c.table?.rows||[])u.push(...m);for(const m of c.examples||[])u.push(m.es,m.en)}}for(const d of r.stories||[])u.push(d.title,d.level,...d.paragraphs||[]);for(const d of r.bios||[]){u.push(d.title,d.subtitle,d.dates);for(const c of d.levels||[])u.push(c.heading,...c.paragraphs||[],c.vocab)}for(const d of r.poems||[]){u.push(d.title,d.attribution,d.note,d.opening,d.learningNote);for(const c of d.stanzas||[])u.push(c.es,c.en);for(const c of d.vocab||[])u.push(c.es,c.en)}for(const d of r.songs||[]){u.push(d.title,d.attribution,d.note,d.learningNote);for(const c of d.sections||[])u.push(c.label,c.es,c.en);for(const c of d.vocab||[])u.push(c.es,c.en)}return u.filter(Boolean).join(" ")}function Eb(r,u,d=[],c=[]){const m=_n(r);if(m.length<2)return[];const h=[];for(const b of u||[]){const w=[b.title,b.subtitle,b.intro,b.sectionLabel,b.level].filter(Boolean).join(" ");_n(w).includes(m)&&h.push({type:"chapter",title:b.title,meta:`${b.sectionLabel} - ${b.level}`,chapter:b,context:b.subtitle||b.intro||""});for(const f of b.blocks||[]){const S=qb(f);_n(S).includes(m)&&h.push({type:"match",title:b.title,meta:`${b.sectionLabel} - match inside lesson`,chapter:b,context:rf(S,r)})}}for(const b of d||[]){const w=[b.word,b.translation,b.pos,...b.tags||[]].join(" ");_n(w).includes(m)&&h.push({type:"memoria",title:b.word,meta:b.translation||"Memoria",context:(b.tags||[]).join(", ")})}for(const b of c||[]){const w=[b.prompt,b.text].join(" ");_n(w).includes(m)&&h.push({type:"writing",title:"Writing entry",meta:new Date(b.createdAt||Date.now()).toLocaleDateString(),context:rf(w,r)})}const g=new Set;return h.filter(b=>{const w=`${b.type}:${b.title}:${b.context}`;return g.has(w)?!1:(g.add(w),!0)}).slice(0,18)}function rf(r,u){const d=String(r||"").replace(/\s+/g," ").trim(),c=_n(u),m=d.toLowerCase().indexOf(String(u||"").toLowerCase());if(m>=0)return d.slice(Math.max(0,m-45),m+95).trim();let h="";const g=[];for(let S=0;S<d.length;S++){const j=d[S].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"");if(j)for(const O of j)h+=O,g.push(S)}const b=h.indexOf(c);if(b<0)return d.slice(0,120);const w=g[Math.max(0,b-45)]??0,f=g[Math.min(g.length-1,b+c.length+95)]??d.length;return d.slice(w,f).trim()}function Tb(r,u={}){const d=String(r||""),c=_n(d),m=d.trim()?d.trim().split(/\s+/).length:0,h=d.split(/[.!?]+/).map(F=>F.trim()).filter(Boolean),g=(d.match(/[.!?]/g)||[]).length||(h.length?1:0),b=(d.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,w=(d.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi)||[]).length,f=(d.match(/\b(soy|eres|es|somos|son|estoy|estas|está|esta|estamos|estan|están|tengo|tienes|tiene|tenemos|tienen|quiero|quieres|quiere|puedo|puedes|puede|voy|vas|va|vamos|van|hago|haces|hace|digo|dices|dice|veo|ves|ve|vivo|vives|vive|trabajo|trabajas|trabaja|estudio|estudias|estudia|fui|fue|era|tenia|tenía|hablo|hablas|habla|aprendo|aprendes|aprende)\b/gi)||[]).length,S=u?.target?vr(u.target).map(_n):[],j=u?.target?S.some(F=>c.includes(F)):!0,O=(d.match(/\b(the|and|but|because|with|from|about|today|question|answer|write|spanish)\b/gi)||[]).length,k=(d.match(/\b(tambien|ademas|tenia|dias|mas|esta|si|tu|el)\b/gi)||[]).length,A=(d.match(/\b(el|la|los|las|un|una|yo|tu|tú|usted|nosotros|porque|pero|que|de|con|para|por|en|mi|mis|su|sus|muy|mas|más|tambien|también)\b/gi)||[]).length,C=h.map(F=>_n(F).split(" ")[0]).filter(Boolean).reduce((F,J,ee,se)=>F+(ee>0&&J===se[ee-1]?1:0),0),Q=h.filter(F=>F.split(/\s+/).filter(Boolean).length>28).length,I=[];m<20&&I.push("Add more detail."),g<2&&I.push("Use at least two complete sentences."),j||I.push("Use the prompt word or idea."),b===0&&I.push("Check accents when needed."),k>0&&I.push("Look for missing accents: también, además, tenía, días, más, está, sí, tú, él."),O>0&&I.push("Replace the English words with Spanish before saving."),w<1&&m>=20&&I.push("Add a connector like porque, aunque, or entonces."),f<2&&m>=15&&I.push("Use more conjugated verbs."),A<3&&m>=12&&I.push("Make it sound more Spanish with small glue words: que, de, en, para, por, con."),C>0&&I.push("Vary how your sentences begin."),Q>0&&I.push("Split one long sentence into two clearer sentences."),m>=35&&g>=3&&w>=1&&O===0&&k===0&&I.push("Strong draft. Next: try one sentence in a different tense.");const te=Math.max(0,Math.min(100,20+Math.min(m,60)+Math.min(g*8,20)+Math.min(w*6,12)+Math.min(f*4,16)+Math.min(A*2,10)+(j?10:-10)-Math.min(O*8,24)-Math.min(k*3,12)-Math.min(C*4,8)-Math.min(Q*5,10)));return{words:m,sentences:g,accents:b,connectors:w,verbs:f,targetUsed:j,likelyEnglish:O,accentCandidates:k,spanishSignals:A,repeatedStarts:C,longSentences:Q,tips:I,score:te}}function Ab({chapters:r=[],visitedChapters:u=[],lessonStatuses:d={},palabrasProgress:c={},savedWords:m=[],writingEntries:h=[]}={},g=Date.now()){const b=Object.values(d||{}),w=Object.values(c||{}),f=m.map(j=>j.review).filter(Boolean),S=[...w,...f];return{chapters:{total:r.length,visited:r.filter(j=>u.includes(j.id)).length,unvisited:Math.max(0,r.length-r.filter(j=>u.includes(j.id)).length)},lessons:{read:b.filter(j=>j==="read"||j==="understood").length,understood:b.filter(j=>j==="understood").length},vocabulary:{seen:S.filter(j=>j?.seen).length,due:S.filter(j=>j?.seen&&(j.dueAt||0)<=g).length,mastered:S.filter(j=>j?.mastered).length,difficult:m.filter(j=>j.difficult||j.review?.lastRating==="Hard").length,favorite:m.filter(j=>j.favorite).length},writing:{count:h.length,words:h.reduce((j,O)=>j+(O.feedback?.words||0),0),needsPractice:h.filter(j=>(j.feedback?.score||0)<70).length}}}function Cb({chapters:r=[],lessonStatuses:u={},palabrasProgress:d={},savedWords:c=[],writingEntries:m=[]}={},h=Date.now()){const g=[];for(const b of Object.values(d||{}))b?.seen&&((b.dueAt||0)<=h||b.lastRating==="Hard")&&g.push({type:"palabra",title:b.spanish||"Palabra",detail:b.english||b.lastRating||"",dueAt:b.dueAt||h,priority:b.lastRating==="Again"?3:b.lastRating==="Hard"?2:1});for(const b of c||[]){const w=b.review?.seen&&(b.review?.dueAt||0)<=h;(w||b.difficult||!b.translation)&&g.push({type:"memoria",title:b.word,detail:b.translation||"Needs translation",dueAt:b.review?.dueAt||h,priority:b.difficult?3:w?2:1})}for(const[b,w]of Object.entries(u||{}))if(w==="read"){const f=b.split("::").pop()||b;g.push({type:"lesson",title:f,detail:"Mark understood after review",dueAt:h,priority:1})}for(const b of m||[])((b.feedback?.score||0)<70||b.feedback?.tips?.length)&&g.push({type:"writing",title:b.prompt||"Writing practice",detail:(b.feedback?.tips||[])[0]||"Rewrite once",dueAt:b.createdAt||h,priority:1});if(g.length<6){for(const b of r||[])if(b.alwaysVisible||g.push({type:"chapter",title:b.title,detail:`${b.sectionLabel} - ${b.level}`,chapter:b,dueAt:h+g.length,priority:0}),g.length>=6)break}return g.sort((b,w)=>w.priority-b.priority||(b.dueAt||0)-(w.dueAt||0)).slice(0,24)}function Os(r){const u=new Set(r.tags||[]);return r.pending&&u.add("pending"),r.translation||u.add("needs-translation"),r.favorite&&u.add("favorite"),r.difficult&&u.add("difficult"),r.review?.mastered&&u.add("mastered"),r.review?.seen&&(r.review?.dueAt||0)<=Date.now()&&u.add("due"),/Group 1|cognates|near-cognates/i.test(r.pos||"")&&u.add("cognates"),/Group 2|function/i.test(r.pos||"")&&u.add("function-words"),/Group 3|remaining/i.test(r.pos||"")&&u.add("remaining"),[...u]}function jf(r,u=Date.now()){return{due:r.filter(d=>d.review?.seen&&(d.review?.dueAt||0)<=u).length,mastered:r.filter(d=>d.review?.mastered).length,difficult:r.filter(d=>d.difficult||d.review?.lastRating==="Hard").length,favorite:r.filter(d=>d.favorite).length}}function Mb(r){const u=["Spanish","English","Tags","Notes"],d=r.map(b=>[b.word,b.translation||"",Os(b).join(" | "),[...b.extras||[],b.pos||""].filter(Boolean).join(" | ")]),c=[u,...d].map(b=>b.map(w=>`"${String(w).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([c],{type:"text/csv;charset=utf-8"}),h=URL.createObjectURL(m),g=document.createElement("a");g.href=h,g.download="memoria-spanish.csv",g.click(),URL.revokeObjectURL(h)}function gn(r,u,d,c){return`${r||"chapter"}::${u}::${d}::${c}`}function Bs(r){return r?typeof r=="string"?r:Array.isArray(r)&&r.find(Boolean)||"":""}function Db(r){return r.intro||Bs(r.sections?.[0]?.paragraphs)||r.sections?.[0]?.text||"Open this grammar lesson and study it step by step."}function Lb(r){return Bs(r.paragraphs)||"Open this story and read it with audio."}function Ub(r){return Bs(r.levels?.[0]?.paragraphs)||r.subtitle||"Open this biography and read it by level."}function Ob(r){return r.note||r.opening||Bs(r.stanzas?.map(u=>u.es))||"Open this poem with its translation and vocabulary."}function _b(r){return r.note||Bs(r.sections?.map(u=>u.es))||"Open this song with organized sections and vocabulary."}function Gb(r,u){const d=[];for(const c of r.blocks||[])c.type==="foldable-grammar"&&c.lessons.forEach((m,h)=>{const g=gn(r.id,"grammar",h,m.title);d.push({id:g,statusKey:g,parentChapterId:r.id,sectionId:u.id,sectionLabel:u.label,level:m.level||r.level,title:m.title,subtitle:m.subtitle||r.title,intro:Db(m),nestedTarget:{type:"grammar",index:h,key:g,cardId:g,title:m.title}})}),c.type==="foldable-stories"&&c.stories.forEach((m,h)=>{const g=gn(r.id,"story",h,m.title);d.push({id:g,statusKey:g,parentChapterId:r.id,sectionId:u.id,sectionLabel:u.label,level:m.level||r.level,title:m.title,subtitle:`${m.paragraphs?.length||0} párrafos - lectura con audio`,intro:Lb(m),nestedTarget:{type:"story",index:h,key:g,cardId:g,title:m.title}})}),c.type==="foldable-bios"&&c.bios.forEach((m,h)=>{const g=gn(r.id,"bio",h,m.title),b=[...new Set((m.levels||[]).map(w=>w.level).filter(Boolean))];d.push({id:g,statusKey:g,parentChapterId:r.id,sectionId:u.id,sectionLabel:u.label,level:b.join("-")||r.level,title:m.title,subtitle:m.subtitle||m.dates||r.title,intro:Ub(m),nestedTarget:{type:"bio",index:h,key:g,cardId:g,title:m.title}})}),c.type==="foldable-poems"&&c.poems.forEach((m,h)=>{const g=gn(r.id,"poem",h,m.title);d.push({id:g,statusKey:g,parentChapterId:r.id,sectionId:u.id,sectionLabel:u.label,level:m.level||r.level,title:m.title,subtitle:m.attribution||r.title,intro:Ob(m),nestedTarget:{type:"poem",index:h,key:g,cardId:g,title:m.title}})}),c.type==="foldable-songs"&&c.songs.forEach((m,h)=>{const g=gn(r.id,"song",h,m.title);d.push({id:g,statusKey:g,parentChapterId:r.id,sectionId:u.id,sectionLabel:u.label,level:m.level||r.level,title:m.title,subtitle:m.attribution||r.title,intro:_b(m),nestedTarget:{type:"song",index:h,key:g,cardId:g,title:m.title}})});return d}function _c(r,u=[]){if(!r)return[];const d=[];for(const c of u){const m=Gb(c,r);m.length>0?d.push(...m):d.push({...c,id:c.id,statusKey:c.id,sectionId:r.id,sectionLabel:r.label})}return d}function Rb({section:r,lessons:u,visitedSet:d,lessonStatuses:c,studyTime:m,onSelectChapter:h,SectionIconComponent:g}){if(!r)return null;const b=u||[],w=b.filter(j=>{const O=c?.[j.statusKey||j.id];return O==="read"||O==="understood"||d.has(j.id)}).length,f=b.filter(j=>c?.[j.statusKey||j.id]==="understood").length,S=r.id==="tiempos"?"Choose one tense lesson at a time. Start with the simple map, then move into compound tenses when the timeline feels clear.":"Choose one lesson from this section and read it slowly. Your progress stays attached to the exact lesson you open.";return o.jsxs("article",{className:"section-overview",children:[o.jsxs("header",{className:"section-overview-hero",children:[o.jsxs("div",{className:"chapter-icon-row",children:[o.jsx("div",{className:"chapter-icon-wrap",children:g?o.jsx(g,{id:r.id,size:22}):null}),o.jsxs("div",{children:[o.jsx("div",{className:"chapter-level-tag",children:"Sección"}),o.jsx("h1",{className:"chapter-title",children:r.label}),o.jsx("p",{className:"chapter-subtitle",children:r.sublabel})]})]}),o.jsx("p",{className:"chapter-intro",children:S}),o.jsxs("div",{className:"section-overview-stats","aria-label":"Section progress",children:[o.jsxs("span",{children:[o.jsx("strong",{children:b.length})," lecciones"]}),o.jsxs("span",{children:[o.jsx("strong",{children:w})," abiertas"]}),o.jsxs("span",{children:[o.jsx("strong",{children:f})," entendidas"]})]})]}),b.length?o.jsx("div",{className:"section-lesson-grid",children:b.map((j,O)=>{const k=c?.[j.statusKey||j.id],A=d.has(j.id),C=Number(m?.byChapter?.[j.id])||0,Q=j.intro||j.subtitle||"Open the lesson and work through it at your own pace.";return o.jsxs("button",{type:"button",className:`section-lesson-card ${k?`status-${k}`:A?"status-opened":""}`,onClick:()=>h(j),children:[o.jsxs("span",{className:"section-lesson-topline",children:[o.jsx("span",{className:"section-lesson-index",children:String(O+1).padStart(2,"0")}),o.jsx("span",{className:"section-lesson-level",children:j.level})]}),o.jsx("span",{className:"section-lesson-title",children:j.title}),j.subtitle&&o.jsx("span",{className:"section-lesson-subtitle",children:j.subtitle}),o.jsx("span",{className:"section-lesson-preview",children:Q}),o.jsxs("span",{className:"section-lesson-footer",children:[o.jsx("span",{className:"section-lesson-status",children:k==="understood"?"Entendido":k==="read"?"Leído":A?"Abierto":"Nuevo"}),C>0&&o.jsx("span",{className:"section-lesson-time",children:Us(C)})]})]},j.id)})}):o.jsxs("div",{className:"empty",children:[o.jsx(Ht,{size:28}),o.jsx("p",{children:"No hay lecciones en este nivel."})]})]})}const Hb={title:"648 Spanish Expressions",eyebrow:"Spanish Expression Library ? RAE / ASALE ? Complete Edition",subtitle:"Four groups ranked from most-used to least-used. Tap any card to see the full example sentence.",sourceNote:"648 expressions ? Sources: RAE/ASALE ? CORPES XXI ? DPDE ? Ranked by learning-priority frequency",perPage:36,groups:[{id:"connectors-discourse",title:"Connectors & Discourse",shortTitle:"Connectors",tone:"navy",count:252,entries:[{rank:1,es:"porque",en:"because",example:"No se aprobó porque faltaban documentos."},{rank:2,es:"aunque",en:"although; even if",example:"Aunque es caro, resulta necesario."},{rank:3,es:"si",en:"if",example:"Si paga hoy, se cierra el expediente."},{rank:4,es:"como",en:"as; since",example:"Como no había acuerdo, se presentó la demanda."},{rank:5,es:"para",en:"for; in order to",example:"Firmó para cerrar la operación."},{rank:6,es:"para que",en:"so that; in order that",example:"Se notificó para que la parte respondiera."},{rank:7,es:"además",en:"besides; moreover",example:"El informe es claro; además, está bien documentado."},{rank:8,es:"además de",en:"in addition to",example:"Además de estudiar, trabaja por las noches."},{rank:9,es:"incluso",en:"even; including",example:"Todos aceptaron la propuesta, incluso los más críticos."},{rank:10,es:"por supuesto",en:"of course; certainly",example:"—¿Puede revisar el contrato? —Por supuesto."},{rank:11,es:"claro",en:"of course; clearly",example:"Claro, podemos enviar la carta hoy."},{rank:12,es:"sin duda",en:"without doubt",example:"Sin duda, este punto es esencial."},{rank:13,es:"de hecho",en:"in fact; actually",example:"De hecho, el pago se realizó después del vencimiento."},{rank:14,es:"en efecto",en:"indeed; in fact",example:"Se alegó incumplimiento. En efecto, no hubo entrega."},{rank:15,es:"por ejemplo",en:"for example",example:"Se puede ofrecer garantía, por ejemplo, un cheque."},{rank:16,es:"por eso",en:"that is why",example:"El informe era incompleto; por eso se rechazó."},{rank:17,es:"por ello",en:"for that reason",example:"El riesgo era alto; por ello se exigió garantía."},{rank:18,es:"así que",en:"so",example:"No llegó el pago, así que suspendimos el servicio."},{rank:19,es:"por lo tanto",en:"therefore",example:"No hubo pago; por lo tanto, existe incumplimiento."},{rank:20,es:"por tanto",en:"therefore",example:"La cláusula es válida; por tanto, debe aplicarse."},{rank:21,es:"en consecuencia",en:"accordingly; consequently",example:"La prueba es insuficiente; en consecuencia, se rechaza la pretensión."},{rank:22,es:"sin embargo",en:"nevertheless; however",example:"La propuesta era interesante; sin embargo, no fue aprobada."},{rank:23,es:"no obstante",en:"nevertheless; notwithstanding",example:"El plazo venció; no obstante, se aceptó la solicitud."},{rank:24,es:"en cambio",en:"on the other hand; instead",example:"El primer testigo confirmó los hechos; en cambio, el segundo los negó."},{rank:25,es:"por el contrario",en:"on the contrary",example:"No reduce el riesgo; por el contrario, lo aumenta."},{rank:26,es:"a pesar de que",en:"although; despite the fact that",example:"A pesar de que fue notificado, no compareció."},{rank:27,es:"pese a que",en:"despite the fact that",example:"Pese a que conocía el riesgo, aceptó la condición."},{rank:28,es:"ya que",en:"since; given that",example:"Ya que el plazo vence hoy, debemos actuar."},{rank:29,es:"puesto que",en:"since; because",example:"Puesto que no hubo pago, procede la reclamación."},{rank:30,es:"dado que",en:"given that",example:"Dado que el contrato fue firmado, produce efectos."},{rank:31,es:"debido a",en:"due to; owing to",example:"El retraso ocurrió debido a la falta de materiales."},{rank:32,es:"debido a que",en:"because; due to the fact that",example:"Se aplazó la reunión debido a que faltaba el informe."},{rank:33,es:"a causa de",en:"because of; due to",example:"La obra se detuvo a causa de la lluvia."},{rank:34,es:"gracias a",en:"thanks to",example:"Gracias a la negociación, se evitó el litigio."},{rank:35,es:"mientras que",en:"whereas; while",example:"El arrendador exige pago, mientras que el arrendatario reclama reparación."},{rank:36,es:"si bien",en:"although; while",example:"Si bien el contrato es claro, conviene aclarar el anexo."},{rank:37,es:"en caso de",en:"in case of",example:"En caso de incumplimiento, se aplicará la penalidad."},{rank:38,es:"en caso de que",en:"in the event that",example:"En caso de que no pague, demandaremos."},{rank:39,es:"de lo contrario",en:"otherwise",example:"Debe responder en siete días; de lo contrario, iniciaremos acciones."},{rank:40,es:"antes de",en:"before",example:"Antes de firmar, revise la cláusula."},{rank:41,es:"después de",en:"after",example:"Después de negociar, firmaron."},{rank:42,es:"luego",en:"then; later",example:"Primero revisamos el contrato; luego enviamos comentarios."},{rank:43,es:"más tarde",en:"later",example:"Más tarde, se presentó una nueva oferta."},{rank:44,es:"finalmente",en:"finally",example:"Finalmente, se emitió la sentencia."},{rank:45,es:"por último",en:"lastly",example:"Por último, solicitamos costas."},{rank:46,es:"al final",en:"in the end; at the end",example:"Al final, las partes llegaron a un acuerdo."},{rank:47,es:"a continuación",en:"next; below",example:"A continuación, analizamos la cláusula penal."},{rank:48,es:"enseguida",en:"right away; shortly",example:"Le responderé enseguida."},{rank:49,es:"desde entonces",en:"since then",example:"Desde entonces, no hubo nuevos pagos."},{rank:50,es:"mientras tanto",en:"meanwhile",example:"Mientras tanto, prepararemos los anexos."},{rank:51,es:"en cuanto",en:"as soon as",example:"En cuanto recibamos el pago, emitiremos recibo."},{rank:52,es:"una vez que",en:"once",example:"Una vez que se firme, el acuerdo será vinculante."},{rank:53,es:"tan pronto como",en:"as soon as",example:"Tan pronto como pague, cerraremos el caso."},{rank:54,es:"es decir",en:"that is; namely",example:"La obligación es solidaria, es decir, responde cada deudor por el total."},{rank:55,es:"o sea",en:"that is; I mean",example:"No aceptó, o sea, rechazó la oferta."},{rank:56,es:"en otras palabras",en:"in other words",example:"En otras palabras, el contrato quedó resuelto."},{rank:57,es:"mejor dicho",en:"rather; or rather",example:"Fue un retraso, mejor dicho, un incumplimiento esencial."},{rank:58,es:"más bien",en:"rather; more accurately",example:"No fue error; más bien, fue falta de coordinación."},{rank:59,es:"en concreto",en:"specifically",example:"Analizaremos la responsabilidad; en concreto, la penalidad."},{rank:60,es:"en particular",en:"in particular",example:"Me preocupa el anexo, en particular la cláusula tercera."},{rank:61,es:"por cierto",en:"by the way; incidentally",example:"Por cierto, el cliente llamó esta mañana."},{rank:62,es:"a propósito de",en:"regarding; speaking of",example:"A propósito del pago, falta el recibo."},{rank:63,es:"sobre",en:"about; on",example:"El informe trata sobre responsabilidad contractual."},{rank:64,es:"acerca de",en:"about; concerning",example:"Hablamos acerca de la estrategia."},{rank:65,es:"en cuanto a",en:"as for; regarding",example:"En cuanto a los daños, faltan facturas."},{rank:66,es:"respecto a",en:"with respect to; regarding",example:"Respecto a su consulta, adjunto mi opinión."},{rank:67,es:"con respecto a",en:"with respect to",example:"Con respecto al plazo, recomendamos actuar hoy."},{rank:68,es:"en relación con",en:"in relation to; regarding",example:"En relación con el contrato, hay tres riesgos."},{rank:69,es:"en primer lugar",en:"firstly",example:"En primer lugar, analizaremos la competencia."},{rank:70,es:"en segundo lugar",en:"secondly",example:"En segundo lugar, revisaremos los daños."},{rank:71,es:"por un lado",en:"on one hand",example:"Por un lado, el precio es adecuado."},{rank:72,es:"por otro lado",en:"on the other hand",example:"Por otro lado, la prueba es limitada."},{rank:73,es:"por una parte",en:"on one hand",example:"Por una parte, existe incumplimiento."},{rank:74,es:"por otra parte",en:"on the other hand; furthermore",example:"Por otra parte, conviene solicitar peritaje."},{rank:75,es:"en resumen",en:"in summary",example:"En resumen, hubo retraso, daño y relación causal."},{rank:76,es:"en conclusión",en:"in conclusion",example:"En conclusión, la demanda es viable."},{rank:77,es:"en definitiva",en:"ultimately; in short",example:"En definitiva, conviene negociar."},{rank:78,es:"en fin",en:"anyway; in short; finally",example:"En fin, revisemos la siguiente cláusula."},{rank:79,es:"al fin y al cabo",en:"after all; ultimately",example:"Al fin y al cabo, ambas partes quieren cerrar el asunto."},{rank:80,es:"a fin de cuentas",en:"at the end of the day",example:"A fin de cuentas, lo importante es cobrar."},{rank:81,es:"en general",en:"generally",example:"En general, la propuesta es aceptable."},{rank:82,es:"por lo general",en:"generally; as a rule",example:"Por lo general, se exige aviso previo."},{rank:83,es:"en principio",en:"in principle; initially",example:"En principio, aceptamos la propuesta."},{rank:84,es:"al menos",en:"at least",example:"Al menos, debe enviarse una notificación."},{rank:85,es:"por lo menos",en:"at least",example:"Por lo menos, necesitamos una copia firmada."},{rank:86,es:"como mínimo",en:"at minimum",example:"Como mínimo, se requiere identificación."},{rank:87,es:"como mucho",en:"at most",example:"La revisión tardará, como mucho, dos días."},{rank:88,es:"a lo sumo",en:"at most",example:"A lo sumo, la penalidad cubrirá el retraso."},{rank:89,es:"hasta cierto punto",en:"to some extent",example:"Hasta cierto punto, el argumento es aceptable."},{rank:90,es:"en cierta medida",en:"to a certain extent",example:"En cierta medida, el retraso era previsible."},{rank:91,es:"en parte",en:"partly",example:"El daño se debió en parte al retraso."},{rank:92,es:"igual que",en:"just like",example:"Este caso es igual que el anterior."},{rank:93,es:"al igual que",en:"just like; as well as",example:"El comprador, al igual que el vendedor, debe firmar."},{rank:94,es:"en comparación con",en:"in comparison with",example:"En comparación con la primera oferta, esta es mejor."},{rank:95,es:"frente a",en:"compared with; against; facing",example:"Frente a la falta de pago, corresponde reclamar."},{rank:96,es:"asimismo",en:"likewise; also",example:"El contrato fue revisado; asimismo, se actualizó el anexo."},{rank:97,es:"igualmente",en:"equally; likewise",example:"La cláusula protege al comprador; igualmente, beneficia al vendedor."},{rank:98,es:"de igual modo",en:"in the same way",example:"Debe notificarse al cliente; de igual modo, debe informarse al proveedor."},{rank:99,es:"del mismo modo",en:"in the same manner",example:"El juez valoró la prueba documental; del mismo modo, examinó los testigos."},{rank:100,es:"de la misma manera",en:"in the same way",example:"La empresa pagó tarde; de la misma manera, incumplió el plazo de entrega."},{rank:101,es:"es más",en:"what is more",example:"La oferta es insuficiente; es más, resulta perjudicial."},{rank:102,es:"más aún",en:"even more; moreover",example:"La prueba es relevante; más aún, es decisiva."},{rank:103,es:"inclusive",en:"including; even",example:"Se revisaron todos los anexos, inclusive los técnicos."},{rank:104,es:"aparte de",en:"apart from; besides",example:"Aparte de los gastos, hay que calcular los impuestos."},{rank:105,es:"aparte de eso",en:"apart from that",example:"El precio es alto. Aparte de eso, el plazo es corto."},{rank:106,es:"no solo..., sino también...",en:"not only..., but also...",example:"No solo firmó el contrato, sino también entregó la garantía."},{rank:107,es:"ni... ni...",en:"neither... nor...",example:"No presentó ni factura ni recibo."},{rank:108,es:"ahora bien",en:"now then; however",example:"El contrato es válido; ahora bien, requiere registro."},{rank:109,es:"eso sí",en:"that said; mind you",example:"Puedes usar el documento; eso sí, no lo modifiques."},{rank:110,es:"aun así",en:"even so",example:"El riesgo era evidente; aun así, firmaron el acuerdo."},{rank:111,es:"con todo",en:"nevertheless; even so",example:"La sentencia es breve; con todo, resuelve el punto principal."},{rank:112,es:"a pesar de ello",en:"despite that",example:"El defecto fue advertido; a pesar de ello, se continuó la obra."},{rank:113,es:"pese a ello",en:"despite that",example:"La economía cayó; pese a ello, la empresa creció."},{rank:114,es:"de todos modos",en:"anyway; in any case",example:"No hay respuesta; de todos modos, enviaremos recordatorio."},{rank:115,es:"de todas formas",en:"anyway; nevertheless",example:"Puede haber cambios; de todas formas, avanzaremos."},{rank:116,es:"de todas maneras",en:"anyway; in any event",example:"El plazo es ajustado; de todas maneras, lo intentaremos."},{rank:117,es:"en cualquier caso",en:"in any case",example:"Podría haber apelación; en cualquier caso, prepararemos defensa."},{rank:118,es:"en todo caso",en:"in any event; at most",example:"En todo caso, la responsabilidad debe probarse."},{rank:119,es:"por causa de",en:"because of",example:"El daño se produjo por causa de una fuga."},{rank:120,es:"por culpa de",en:"because of; due to fault of",example:"Se perdió el plazo por culpa de una omisión."},{rank:121,es:"en vista de",en:"in view of",example:"En vista de los hechos, conviene transigir."},{rank:122,es:"en vista de que",en:"in view of the fact that",example:"En vista de que no pagó, se activó la penalidad."},{rank:123,es:"considerando que",en:"considering that",example:"Considerando que las partes acordaron el precio, se firma el anexo."},{rank:124,es:"por razón de",en:"by reason of; on account of",example:"La medida se adoptó por razón de seguridad."},{rank:125,es:"con motivo de",en:"on the occasion of; due to",example:"Se emitió circular con motivo de la nueva normativa."},{rank:126,es:"en virtud de",en:"by virtue of; pursuant to",example:"En virtud del contrato, el proveedor debe entregar."},{rank:127,es:"por consiguiente",en:"consequently",example:"El deudor incumplió; por consiguiente, responde por daños."},{rank:128,es:"consecuentemente",en:"consequently",example:"La empresa fue notificada; consecuentemente, no puede alegar desconocimiento."},{rank:129,es:"de ahí que",en:"hence; that is why",example:"La entrega fue tardía; de ahí que proceda la penalidad."},{rank:130,es:"de modo que",en:"so that; therefore",example:"No hubo acuerdo, de modo que se inició arbitraje."},{rank:131,es:"de manera que",en:"so that; therefore",example:"Se reorganizó el expediente, de manera que todo quedó claro."},{rank:132,es:"de forma que",en:"so that; in such a way that",example:"Se redactó de forma que no hubiera ambigüedad."},{rank:133,es:"a fin de",en:"in order to",example:"Se reunió a fin de resolver la disputa."},{rank:134,es:"a fin de que",en:"so that",example:"Se modificó a fin de que no hubiera duda."},{rank:135,es:"con el fin de",en:"with the aim of",example:"Se firmó con el fin de evitar litigios."},{rank:136,es:"con el fin de que",en:"so that; with the aim that",example:"Se notificó con el fin de que constara la reclamación."},{rank:137,es:"con objeto de",en:"for the purpose of",example:"Se convocó la reunión con objeto de cerrar el acuerdo."},{rank:138,es:"con objeto de que",en:"so that",example:"Se incluyó la cláusula con objeto de que protegiera a ambas partes."},{rank:139,es:"con vistas a",en:"with a view to",example:"Se preparó el expediente con vistas a una apelación."},{rank:140,es:"con miras a",en:"with a view to",example:"Se negoció con miras a una solución amistosa."},{rank:141,es:"de cara a",en:"with a view to; regarding upcoming",example:"De cara a la audiencia, revisaremos la prueba."},{rank:142,es:"a efectos de",en:"for purposes of",example:"A efectos de registro, se adjunta copia del pasaporte."},{rank:143,es:"a los efectos de",en:"for the purposes of",example:"A los efectos de la notificación, se fija este domicilio."},{rank:144,es:"a condición de",en:"on condition of",example:"Aceptó a condición de recibir garantía."},{rank:145,es:"a condición de que",en:"provided that",example:"Aceptará a condición de que se firme hoy."},{rank:146,es:"con tal de",en:"provided that; as long as",example:"Acepto con tal de conservar mis derechos."},{rank:147,es:"con tal de que",en:"provided that; so long as",example:"Acepto con tal de que paguen la deuda."},{rank:148,es:"siempre que",en:"provided that; whenever",example:"Podrás renovar siempre que cumplas el plazo."},{rank:149,es:"siempre y cuando",en:"provided that",example:"Se aprobará siempre y cuando entreguen garantías."},{rank:150,es:"a menos que",en:"unless",example:"Demandaremos a menos que paguen hoy."},{rank:151,es:"salvo que",en:"unless; except that",example:"El contrato continuará salvo que una parte lo termine."},{rank:152,es:"excepto que",en:"except that; unless",example:"Acepto, excepto que cambien el precio."},{rank:153,es:"a no ser que",en:"unless",example:"No habrá reunión a no ser que llegue el informe."},{rank:154,es:"posteriormente",en:"subsequently",example:"Posteriormente, las partes firmaron el anexo."},{rank:155,es:"acto seguido",en:"immediately afterwards",example:"Firmó el recibo y, acto seguido, entregó las llaves."},{rank:156,es:"de inmediato",en:"immediately",example:"Debe notificarse de inmediato."},{rank:157,es:"al principio",en:"at first; at the beginning",example:"Al principio, no hubo oposición."},{rank:158,es:"al comienzo",en:"at the beginning",example:"Al comienzo del contrato, todo funcionó bien."},{rank:159,es:"en último lugar",en:"lastly; in last place",example:"En último lugar, debe revisarse la garantía."},{rank:160,es:"de ahora en adelante",en:"from now on",example:"De ahora en adelante, toda comunicación será por escrito."},{rank:161,es:"a partir de",en:"from; as of",example:"A partir de mañana, rige el nuevo horario."},{rank:162,es:"hasta entonces",en:"until then",example:"Hasta entonces, mantendremos la posición."},{rank:163,es:"entretanto",en:"meanwhile",example:"Entretanto, la negociación continuó."},{rank:164,es:"entre tanto",en:"meanwhile",example:"Entre tanto, se conservarán las pruebas."},{rank:165,es:"apenas",en:"as soon as; barely",example:"Apenas llegó el informe, lo revisamos."},{rank:166,es:"al cabo de",en:"after; at the end of",example:"Al cabo de dos meses, se resolvió el caso."},{rank:167,es:"a medida que",en:"as; progressively as",example:"A medida que avance el proceso, actualizaremos la estrategia."},{rank:168,es:"esto es",en:"that is to say",example:"El plazo es perentorio, esto es, no admite prórroga."},{rank:169,es:"dicho de otro modo",en:"put another way",example:"Dicho de otro modo, no hay prueba suficiente."},{rank:170,es:"dicho de otra manera",en:"put another way",example:"Dicho de otra manera, el riesgo era previsible."},{rank:171,es:"concretamente",en:"specifically",example:"Concretamente, reclamamos 115.500 AED."},{rank:172,es:"específicamente",en:"specifically",example:"Se solicitó específicamente la prueba técnica."},{rank:173,es:"a saber",en:"namely",example:"Se adjuntan tres documentos, a saber: contrato, factura y recibo."},{rank:174,es:"esto quiere decir que",en:"this means that",example:"Esto quiere decir que el plazo ya venció."},{rank:175,es:"efectivamente",en:"indeed; effectively",example:"Efectivamente, el pago fue recibido."},{rank:176,es:"ciertamente",en:"certainly; admittedly",example:"Ciertamente, el riesgo existe."},{rank:177,es:"naturalmente",en:"naturally; of course",example:"Naturalmente, se respetará la confidencialidad."},{rank:178,es:"desde luego",en:"certainly; of course",example:"Desde luego, la prueba debe conservarse."},{rank:179,es:"en verdad",en:"in truth; truly",example:"En verdad, la situación exige cautela."},{rank:180,es:"de verdad",en:"really; truly",example:"De verdad, conviene revisar todo el expediente."},{rank:181,es:"de veras",en:"really; truly",example:"De veras, agradezco su ayuda."},{rank:182,es:"por descontado",en:"of course; needless to say",example:"Por descontado, la confidencialidad se mantiene."},{rank:183,es:"cabe destacar que",en:"it should be highlighted that",example:"Cabe destacar que el contrato no fue registrado."},{rank:184,es:"conviene subrayar que",en:"it is worth underlining that",example:"Conviene subrayar que la deuda sigue pendiente."},{rank:185,es:"a modo de ejemplo",en:"by way of example",example:"A modo de ejemplo, citamos la cláusula sexta."},{rank:186,es:"por poner un ejemplo",en:"to give an example",example:"Por poner un ejemplo, pensemos en un contrato de obra."},{rank:187,es:"como ejemplo",en:"as an example",example:"Como ejemplo, revise el anexo A."},{rank:188,es:"tal como",en:"as; such as",example:"Debe entregarse tal como fue aprobado."},{rank:189,es:"así como",en:"as well as; just as",example:"Se adjunta contrato, así como los recibos."},{rank:190,es:"comparado con",en:"compared with",example:"Comparado con el daño, el costo es bajo."},{rank:191,es:"encima",en:"on top of that; furthermore",example:"Llegó tarde y, encima, no trajo los documentos."},{rank:192,es:"por añadidura",en:"furthermore; on top of that",example:"El proyecto es caro y, por añadidura, complejo."},{rank:193,es:"antes bien",en:"rather; quite the contrary",example:"No hubo negligencia; antes bien, se actuó con diligencia."},{rank:194,es:"así y todo",en:"even so; despite that",example:"El plan tenía fallas; así y todo, fue aprobado."},{rank:195,es:"con eso y todo",en:"even so; despite all that",example:"Costó mucho; con eso y todo, valió la pena."},{rank:196,es:"por contra",en:"on the other hand; conversely",example:"La demanda subió; por contra, la oferta bajó."},{rank:197,es:"a diferencia de",en:"unlike; in contrast to",example:"A diferencia del primer contrato, el segundo contiene penalidad."},{rank:198,es:"aun cuando",en:"even when; even if",example:"Aun cuando no exista daño, debe probarse el incumplimiento."},{rank:199,es:"por más que",en:"no matter how much; even though",example:"Por más que insistió, no obtuvo respuesta."},{rank:200,es:"por mucho que",en:"however much; even if",example:"Por mucho que negocien, el plazo no cambiará."},{rank:201,es:"por muy... que",en:"however...",example:"Por muy urgente que sea, debe documentarse."},{rank:202,es:"incluso si",en:"even if",example:"Incluso si aceptan, pediremos garantía."},{rank:203,es:"ni siquiera si",en:"not even if",example:"No firmaría ni siquiera si redujeran el precio."},{rank:204,es:"visto que",en:"seeing that; given that",example:"Visto que no respondió, se enviará aviso final."},{rank:205,es:"habida cuenta de",en:"taking into account; given",example:"Habida cuenta de las pruebas, la reclamación es viable."},{rank:206,es:"habida cuenta de que",en:"given that",example:"Habida cuenta de que hubo notificación, procede continuar."},{rank:207,es:"por tal motivo",en:"for that reason",example:"Por tal motivo, solicitamos la terminación."},{rank:208,es:"por esta razón",en:"for this reason",example:"Por esta razón, conviene conservar las pruebas."},{rank:209,es:"de resultas de",en:"as a result of",example:"De resultas del incumplimiento, se generaron pérdidas."},{rank:210,es:"tanto... que",en:"so... that",example:"El retraso fue tanto que afectó todo el proyecto."},{rank:211,es:"con propósito de",en:"with the purpose of",example:"Actuó con propósito de proteger sus derechos."},{rank:212,es:"de ser así",en:"if so",example:"Podría existir defecto. De ser así, reclamaremos."},{rank:213,es:"si no",en:"if not; otherwise",example:"Paga hoy; si no, habrá penalidad."},{rank:214,es:"total",en:"anyway; in short",example:"Total, que no aceptaron la oferta."},{rank:215,es:"de entrada",en:"at the outset; initially",example:"De entrada, la reclamación parece sólida."},{rank:216,es:"para empezar",en:"to begin with",example:"Para empezar, el contrato no está firmado."},{rank:217,es:"antes que nada",en:"first of all",example:"Antes que nada, confirmemos los hechos."},{rank:218,es:"ante todo",en:"above all; first and foremost",example:"Ante todo, debemos proteger la posición del cliente."},{rank:219,es:"de otro lado",en:"on the other hand",example:"De otro lado, la parte demandada no acreditó el pago."},{rank:220,es:"dicho sea de paso",en:"incidentally; by the way",example:"Dicho sea de paso, la cláusula está mal redactada."},{rank:221,es:"sin duda alguna",en:"without any doubt",example:"Sin duda alguna, hubo incumplimiento."},{rank:222,es:"ni que decir tiene",en:"needless to say",example:"Ni que decir tiene que el plazo debe respetarse."},{rank:223,es:"huelga decir",en:"it goes without saying",example:"Huelga decir que la prueba original debe conservarse."},{rank:224,es:"pongamos por caso",en:"let us suppose; for instance",example:"Pongamos por caso que el proveedor no entrega."},{rank:225,es:"a la postre",en:"in the end; ultimately",example:"A la postre, la negociación evitó el juicio."},{rank:226,es:"en última instancia",en:"ultimately; in the final analysis",example:"En última instancia, decide el tribunal."},{rank:227,es:"por ende",en:"therefore; hence",example:"El plazo venció; por ende, la oferta caducó."},{rank:228,es:"de suerte que",en:"so that; therefore",example:"La obligación fue incumplida, de suerte que procede indemnizar."},{rank:229,es:"así pues",en:"therefore; thus",example:"Así pues, la reclamación debe estimarse."},{rank:230,es:"vale decir",en:"that is to say",example:"El acto fue extemporáneo, vale decir, presentado fuera de plazo."},{rank:231,es:"verbigracia",en:"for example",example:"Podrían reclamarse gastos, verbigracia, honorarios periciales."},{rank:232,es:"empero",en:"however; but",example:"La tesis parece sólida; empero, falta prueba técnica."},{rank:233,es:"a mayor abundamiento",en:"furthermore; for greater support",example:"A mayor abundamiento, existe prueba documental."},{rank:234,es:"en mérito de lo expuesto",en:"in view of the foregoing",example:"En mérito de lo expuesto, solicitamos se estime la demanda."},{rank:235,es:"por todo lo anterior",en:"for all the foregoing",example:"Por todo lo anterior, procede estimar la reclamación."},{rank:236,es:"salvo pacto en contrario",en:"unless otherwise agreed",example:"El pago será mensual, salvo pacto en contrario."},{rank:237,es:"salvo disposición en contrario",en:"unless otherwise provided",example:"Rige esta cláusula, salvo disposición en contrario."},{rank:238,es:"al contrario",en:"on the contrary",example:"No hubo retraso; al contrario, se entregó antes."},{rank:239,es:"antes de que",en:"before",example:"Revíselo antes de que venza el plazo."},{rank:240,es:"después de que",en:"after",example:"Después de que firmaron, se entregó el pago."},{rank:241,es:"en seguida",en:"right away; shortly",example:"El equipo actuó en seguida."},{rank:242,es:"en cierto modo",en:"in a way",example:"En cierto modo, ambas partes asumieron el riesgo."},{rank:243,es:"excepto",en:"except",example:"Se aprobaron todas las cláusulas excepto la décima."},{rank:244,es:"fuera de",en:"outside of; apart from",example:"Fuera de este punto, no hay objeciones."},{rank:245,es:"lo mismo que",en:"the same as",example:"Ocurrió lo mismo que en el primer contrato."},{rank:246,es:"en contraste",en:"by contrast",example:"El primer informe fue positivo; en contraste, el segundo fue crítico."},{rank:247,es:"para concluir",en:"to conclude",example:"Para concluir, solicitamos la estimación de la reclamación."},{rank:248,es:"en suma",en:"in sum; all in all",example:"En suma, la prueba favorece al demandante."},{rank:249,es:"en síntesis",en:"in synthesis; briefly",example:"En síntesis, el incumplimiento quedó acreditado."},{rank:250,es:"primeramente",en:"firstly",example:"Primeramente, debe verificarse la notificación."},{rank:251,es:"en términos generales",en:"in general terms",example:"En términos generales, el contrato es equilibrado."},{rank:252,es:"salvo",en:"except; save for",example:"Todos firmaron, salvo el garante."}]},{id:"prepositional-locutions",title:"Prepositional Locutions",shortTitle:"Prep. Locutions",tone:"green",count:175,entries:[{rank:1,es:"a causa de",en:"because of",example:"Hubo retraso a causa de la inspección."},{rank:2,es:"a pesar de",en:"despite; notwithstanding",example:"A pesar del retraso, aceptó la entrega."},{rank:3,es:"gracias a",en:"thanks to",example:"Gracias a la mediación, se cerró el acuerdo."},{rank:4,es:"a partir de",en:"as of; starting from",example:"A partir del 1 de junio, rige la nueva tarifa."},{rank:5,es:"a través de",en:"through; by means of",example:"La notificación se envió a través de correo electrónico."},{rank:6,es:"de acuerdo con",en:"according to; in accordance with",example:"De acuerdo con el contrato, el pago vence hoy."},{rank:7,es:"acerca de",en:"about; concerning",example:"Se discutió acerca de la garantía."},{rank:8,es:"antes de",en:"before",example:"Antes de la firma, revise los anexos."},{rank:9,es:"después de",en:"after",example:"Después de la audiencia, prepararemos nota."},{rank:10,es:"cerca de",en:"near; about approximately",example:"La oficina está cerca del tribunal."},{rank:11,es:"dentro de",en:"inside; within",example:"Debe pagar dentro de siete días."},{rank:12,es:"fuera de",en:"outside; apart from",example:"Fuera del contrato, no hay obligación."},{rank:13,es:"delante de",en:"in front of",example:"Firmó delante del notario."},{rank:14,es:"detrás de",en:"behind",example:"Detrás del retraso hubo falta de permisos."},{rank:15,es:"encima de",en:"on top of; above",example:"El expediente está encima de la mesa."},{rank:16,es:"debajo de",en:"under; below",example:"La firma aparece debajo del sello."},{rank:17,es:"lejos de",en:"far from",example:"Lejos de resolver el problema, lo agravó."},{rank:18,es:"junto a",en:"next to; alongside",example:"El documento original está junto a la copia."},{rank:19,es:"junto con",en:"together with",example:"Se adjunta el contrato junto con sus anexos."},{rank:20,es:"además de",en:"besides; in addition to",example:"Además del precio, debe pagar impuestos."},{rank:21,es:"en caso de",en:"in case of; in the event of",example:"En caso de mora, se aplicará interés."},{rank:22,es:"en contra de",en:"against",example:"Votó en contra de la propuesta."},{rank:23,es:"a favor de",en:"in favor of",example:"Se emitió cheque a favor del proveedor."},{rank:24,es:"en favor de",en:"in favor of",example:"Se constituyó garantía en favor del banco."},{rank:25,es:"en lugar de",en:"instead of",example:"En lugar de demandar, propuso mediación."},{rank:26,es:"en relación con",en:"in relation to; regarding",example:"En relación con su consulta, adjunto respuesta."},{rank:27,es:"con respecto a",en:"with respect to",example:"Con respecto al pago, no hay constancia."},{rank:28,es:"sobre todo",en:"above all; especially",example:"Sobre todo, conserve los originales."},{rank:29,es:"frente a",en:"facing; against; in view of",example:"Frente al incumplimiento, se reclamó indemnización."},{rank:30,es:"a cambio de",en:"in exchange for",example:"Entregó el bien a cambio de un pago parcial."},{rank:31,es:"a condición de",en:"on condition of",example:"Firmará a condición de recibir garantía."},{rank:32,es:"a diferencia de",en:"unlike",example:"A diferencia del arrendador, el arrendatario sí compareció."},{rank:33,es:"a fin de",en:"in order to",example:"Se reunió a fin de resolver la disputa."},{rank:34,es:"al lado de",en:"next to; beside",example:"El anexo está al lado de la firma."},{rank:35,es:"al frente de",en:"at the head of; in charge of",example:"Quedó al frente del equipo legal."},{rank:36,es:"a cargo de",en:"in charge of",example:"El expediente quedó a cargo del abogado."},{rank:37,es:"a cuenta de",en:"on account of; as advance payment",example:"Pagó 10.000 AED a cuenta del precio."},{rank:38,es:"a falta de",en:"in the absence of; lacking",example:"A falta de prueba, la reclamación pierde fuerza."},{rank:39,es:"a la espera de",en:"awaiting; pending",example:"Estamos a la espera de la respuesta del cliente."},{rank:40,es:"a lo largo de",en:"throughout; along",example:"A lo largo del proceso, se mantuvo la misma posición."},{rank:41,es:"a nivel de",en:"at the level of",example:"A nivel de gestión, el cambio es importante."},{rank:42,es:"a propósito de",en:"regarding; concerning",example:"A propósito del contrato, falta una firma."},{rank:43,es:"a raíz de",en:"as a result of; following",example:"A raíz del incumplimiento, se envió aviso."},{rank:44,es:"al cabo de",en:"after; at the end of",example:"Al cabo de treinta días, venció el plazo."},{rank:45,es:"al margen de",en:"apart from; outside",example:"Al margen del precio, hay un problema de plazo."},{rank:46,es:"de conformidad con",en:"in accordance with",example:"De conformidad con la ley, se notificó a la parte."},{rank:47,es:"conforme a",en:"according to; pursuant to",example:"Conforme a la cláusula quinta, el plazo venció."},{rank:48,es:"con base en",en:"based on",example:"Con base en las pruebas, recomendamos reclamar."},{rank:49,es:"en base a",en:"based on",example:"En base a los datos, se preparó el informe."},{rank:50,es:"en función de",en:"depending on; according to",example:"La tarifa cambia en función del volumen."},{rank:51,es:"en comparación con",en:"in comparison with",example:"En comparación con la primera oferta, esta es mejor."},{rank:52,es:"en torno a",en:"around; concerning",example:"La discusión giró en torno al precio."},{rank:53,es:"en vista de",en:"in view of",example:"En vista del incumplimiento, se envió aviso."},{rank:54,es:"con motivo de",en:"on the occasion of; due to",example:"Se emitió comunicado con motivo de la reforma."},{rank:55,es:"con el fin de",en:"with the aim of",example:"Se firmó con el fin de resolver la disputa."},{rank:56,es:"con objeto de",en:"for the purpose of",example:"Se solicitó peritaje con objeto de cuantificar daños."},{rank:57,es:"con vistas a",en:"with a view to",example:"Se preparó el expediente con vistas a negociar."},{rank:58,es:"por culpa de",en:"because of the fault of",example:"El daño ocurrió por culpa del contratista."},{rank:59,es:"por encima de",en:"above; over",example:"La seguridad está por encima del costo."},{rank:60,es:"por debajo de",en:"below; under",example:"La oferta está por debajo del precio de mercado."},{rank:61,es:"por delante de",en:"ahead of; before",example:"La urgencia está por delante de otros asuntos."},{rank:62,es:"por detrás de",en:"behind",example:"El asunto quedó por detrás de los casos urgentes."},{rank:63,es:"por medio de",en:"by means of",example:"Se notificó por medio de correo certificado."},{rank:64,es:"por parte de",en:"on the part of; by",example:"Hubo incumplimiento por parte del proveedor."},{rank:65,es:"por razón de",en:"by reason of",example:"Se rechazó por razón de competencia."},{rank:66,es:"por cuenta de",en:"on behalf/account of",example:"El pago se hizo por cuenta del comprador."},{rank:67,es:"por falta de",en:"for lack of",example:"Se rechazó por falta de prueba."},{rank:68,es:"sin necesidad de",en:"without the need to",example:"Puede resolverse sin necesidad de juicio."},{rank:69,es:"sin importar",en:"regardless of",example:"Debe cumplir sin importar el costo."},{rank:70,es:"sin contar con",en:"without counting on; without having",example:"Actuó sin contar con autorización."},{rank:71,es:"bajo ningún concepto",en:"under no circumstances",example:"Bajo ningún concepto debe firmarse sin revisión."},{rank:72,es:"ante la falta de",en:"in the absence of; faced with lack of",example:"Ante la falta de pago, se envió requerimiento."},{rank:73,es:"ante el hecho de que",en:"given the fact that; faced with the fact that",example:"Ante el hecho de que no respondió, se inició demanda."},{rank:74,es:"sobre la base de",en:"on the basis of",example:"Sobre la base de las pruebas, se formuló reclamación."},{rank:75,es:"a bordo de",en:"on board; aboard",example:"La mercancía fue cargada a bordo del buque."},{rank:76,es:"a costa de",en:"at the expense of",example:"No puede beneficiarse a costa de la otra parte."},{rank:77,es:"a excepción de",en:"with the exception of",example:"Todos los documentos fueron recibidos a excepción del anexo."},{rank:78,es:"a expensas de",en:"at the expense of; pending",example:"El pago quedó a expensas de la aprobación bancaria."},{rank:79,es:"a fuerza de",en:"by dint of; by means of repeated effort",example:"A fuerza de insistir, obtuvo respuesta."},{rank:80,es:"a juicio de",en:"in the opinion of",example:"A juicio del perito, la obra es defectuosa."},{rank:81,es:"a la altura de",en:"at the level of; up to",example:"La defensa debe estar a la altura del caso."},{rank:82,es:"a la luz de",en:"in light of",example:"A la luz de las pruebas, conviene negociar."},{rank:83,es:"a la manera de",en:"in the manner/style of",example:"Redactó el informe a la manera de un dictamen."},{rank:84,es:"a la par de",en:"on a par with; alongside",example:"El riesgo creció a la par de los costos."},{rank:85,es:"a razón de",en:"at the rate of",example:"Se pagará a razón de 500 AED diarios."},{rank:86,es:"a solicitud de",en:"at the request of",example:"Se emitió certificado a solicitud del cliente."},{rank:87,es:"al amparo de",en:"under the protection/authority of",example:"Actuó al amparo de la cláusula de terminación."},{rank:88,es:"al son de",en:"to the sound/rhythm of",example:"Marcharon al son de la música."},{rank:89,es:"de acuerdo a",en:"according to",example:"De acuerdo a la información recibida, no hubo entrega."},{rank:90,es:"de cara a",en:"with a view to; ahead of",example:"De cara al juicio, debemos ordenar las pruebas."},{rank:91,es:"de espaldas a",en:"with one’s back to; ignoring",example:"No puede negociarse de espaldas a los hechos."},{rank:92,es:"de parte de",en:"on behalf of; from",example:"Le escribo de parte del cliente."},{rank:93,es:"en aras de",en:"for the sake of; in the interest of",example:"En aras de la transparencia, se adjuntan los recibos."},{rank:94,es:"en atención a",en:"in consideration of; having regard to",example:"En atención a las circunstancias, se redujo la penalidad."},{rank:95,es:"en beneficio de",en:"for the benefit of",example:"La garantía se emitió en beneficio del comprador."},{rank:96,es:"en busca de",en:"in search of",example:"Se inició negociación en busca de una solución."},{rank:97,es:"en calidad de",en:"in the capacity of",example:"Firmó en calidad de representante legal."},{rank:98,es:"en compañía de",en:"in the company of",example:"Asistió en compañía de su asesor."},{rank:99,es:"en honor a",en:"in honor of",example:"Se celebró un acto en honor a los invitados."},{rank:100,es:"en honor de",en:"in honor of",example:"Se organizó una cena en honor de la delegación."},{rank:101,es:"en materia de",en:"in matters of; regarding",example:"En materia de contratos, la prueba documental es clave."},{rank:102,es:"en medio de",en:"in the middle of",example:"Negociaron en medio de una crisis."},{rank:103,es:"en nombre de",en:"in the name of; on behalf of",example:"Firmó en nombre de la sociedad."},{rank:104,es:"en consonancia con",en:"in line with; consistent with",example:"La decisión está en consonancia con la jurisprudencia."},{rank:105,es:"con relación a",en:"in relation to",example:"Con relación a la garantía, falta el original."},{rank:106,es:"por causa de",en:"because of",example:"La pérdida ocurrió por causa del retraso."},{rank:107,es:"por conducto de",en:"through the channel of",example:"La comunicación se remitió por conducto del abogado."},{rank:108,es:"por vía de",en:"by way of; through",example:"La reclamación se presentó por vía arbitral."},{rank:109,es:"por exceso de",en:"because of excess of",example:"La estructura falló por exceso de carga."},{rank:110,es:"por lo que respecta a",en:"as regards; with respect to",example:"Por lo que respecta al plazo, no hubo prórroga."},{rank:111,es:"por lo relativo a",en:"with regard to",example:"Por lo relativo al pago, consta una transferencia."},{rank:112,es:"sin perjuicio de",en:"without prejudice to",example:"Sin perjuicio de otros derechos, reclamamos el pago."},{rank:113,es:"sin menoscabo de",en:"without detriment to",example:"Sin menoscabo de la defensa, se propone negociar."},{rank:114,es:"sin detrimento de",en:"without detriment to",example:"Se acepta sin detrimento de futuras reclamaciones."},{rank:115,es:"bajo pretexto de",en:"under the pretext of",example:"Retuvo el pago bajo pretexto de defectos menores."},{rank:116,es:"bajo reserva de",en:"subject to reservation of",example:"Aceptó bajo reserva de revisar los anexos."},{rank:117,es:"bajo la forma de",en:"in the form of",example:"La garantía se otorgó bajo la forma de cheque."},{rank:118,es:"a todos los efectos legales",en:"for all legal purposes",example:"La notificación se tendrá por válida a todos los efectos legales."},{rank:119,es:"a los efectos oportunos",en:"for the appropriate purposes",example:"Se remite copia a los efectos oportunos."},{rank:120,es:"a efectos probatorios",en:"for evidentiary purposes",example:"Se conserva el correo a efectos probatorios."},{rank:121,es:"a efectos contractuales",en:"for contractual purposes",example:"El domicilio se fija a efectos contractuales."},{rank:122,es:"en señal de conformidad",en:"as a sign of agreement",example:"Las partes firman en señal de conformidad."},{rank:123,es:"en prueba de conformidad",en:"in witness/confirmation of agreement",example:"En prueba de conformidad, firman las partes."},{rank:124,es:"a instancia de parte",en:"at the request of a party",example:"La ejecución se inicia a instancia de parte."},{rank:125,es:"en defecto de",en:"failing; in the absence of",example:"En defecto de acuerdo, decidirá el tribunal."},{rank:126,es:"por causas ajenas a",en:"for causes beyond/foreign to",example:"El retraso se debió a causas ajenas al proveedor."},{rank:127,es:"con carácter previo",en:"prior; preliminary",example:"Con carácter previo, debe enviarse aviso."},{rank:128,es:"con carácter vinculante",en:"with binding effect",example:"La oferta tendrá carácter vinculante."},{rank:129,es:"con carácter confidencial",en:"confidentially",example:"La información se entrega con carácter confidencial."},{rank:130,es:"bajo apercibimiento de",en:"under warning of; subject to",example:"Debe comparecer bajo apercibimiento de multa."},{rank:131,es:"en virtud de poder suficiente",en:"by virtue of sufficient authority/power of attorney",example:"Comparece en virtud de poder suficiente."},{rank:132,es:"a instancia judicial",en:"at judicial instance/request",example:"Se aportó el documento a instancia judicial."},{rank:133,es:"en sede judicial",en:"in judicial proceedings/forum",example:"La cuestión se resolverá en sede judicial."},{rank:134,es:"en sede arbitral",en:"in arbitration forum/proceedings",example:"La disputa se resolverá en sede arbitral."},{rank:135,es:"por causa imputable a",en:"for a cause attributable to",example:"El retraso ocurrió por causa imputable al contratista."},{rank:136,es:"a tenor de",en:"pursuant to; in accordance with",example:"A tenor del contrato, la penalidad es aplicable."},{rank:137,es:"al respecto de",en:"with respect to",example:"Al respecto de la garantía, conviene precisar el plazo."},{rank:138,es:"de resultas de",en:"as a result of",example:"De resultas del defecto, surgieron daños."},{rank:139,es:"en orden a",en:"with a view to; for the purpose of",example:"Se adoptaron medidas en orden a garantizar el pago."},{rank:140,es:"en perjuicio de",en:"to the detriment of",example:"La cláusula opera en perjuicio del consumidor."},{rank:141,es:"con arreglo a",en:"in accordance with; pursuant to",example:"Con arreglo al contrato, procede la penalidad."},{rank:142,es:"con cargo a",en:"charged to; against funds/account",example:"Los gastos serán con cargo al depósito."},{rank:143,es:"con destino a",en:"destined for; bound for",example:"La transferencia se realizó con destino a la cuenta indicada."},{rank:144,es:"con excepción de",en:"with the exception of",example:"Todos aceptaron con excepción del garante."},{rank:145,es:"con independencia de",en:"regardless of; independently of",example:"La obligación existe con independencia del daño."},{rank:146,es:"por lo tocante a",en:"as regards",example:"Por lo tocante a los daños, falta peritaje."},{rank:147,es:"por lo concerniente a",en:"concerning; regarding",example:"Por lo concerniente a la garantía, se requiere original."},{rank:148,es:"bajo pena de",en:"under penalty of",example:"Debe comparecer bajo pena de multa."},{rank:149,es:"a + noun/adjective",en:"manner, direction, price, rate, or idiom",example:"Lo hizo a mano / a diario / a ciegas."},{rank:150,es:"de + noun/adjective",en:"origin, material, content, manner, cause, or idiom",example:"De hecho, actuó de oficio."},{rank:151,es:"en + noun",en:"state, place, topic, field, or manner",example:"En materia de contratos, conviene ser preciso."},{rank:152,es:"por + noun/infinitive",en:"cause, means, distribution, exchange, or route",example:"Lo hizo por necesidad / por escrito."},{rank:153,es:"para + infinitive/noun",en:"purpose, destination, deadline, recipient",example:"Firmó para cerrar el acuerdo."},{rank:154,es:"con + noun",en:"instrument, accompaniment, manner, condition",example:"Actuó con cuidado / con arreglo al contrato."},{rank:155,es:"sin + noun/infinitive",en:"absence, exclusion, non-waiver, opposition",example:"Se acepta sin perjuicio de otros derechos."},{rank:156,es:"bajo + noun",en:"under a condition, authority, pretext, or penalty",example:"Debe cumplir bajo pena de multa."},{rank:157,es:"a pesar de + noun / a pesar de que + clause",en:"despite / although",example:"A pesar del riesgo / A pesar de que había riesgo."},{rank:158,es:"a fin de + infinitive / a fin de que + subjunctive",en:"in order to / so that",example:"A fin de resolver / A fin de que se resuelva."},{rank:159,es:"con tal de + infinitive / con tal de que + subjunctive",en:"provided that / so long as",example:"Acepto con tal de cobrar / con tal de que paguen."},{rank:160,es:"en caso de + noun/infinitive / en caso de que + subjunctive",en:"in case of / if",example:"En caso de incumplimiento / En caso de que incumpla."},{rank:161,es:"por + infinitive / para + infinitive",en:"because of doing / in order to do",example:"Lo sancionaron por incumplir; firmó para evitar juicio."},{rank:162,es:"de acuerdo con / estar de acuerdo con",en:"according to / agree with",example:"De acuerdo con el contrato / Estoy de acuerdo con usted."},{rank:163,es:"en virtud de / por virtud de",en:"by virtue of; pursuant to",example:"En virtud del poder, puede firmar."},{rank:164,es:"sin embargo / embargo",en:"however / seizure/attachment",example:"Es válido; sin embargo, falta registrar."},{rank:165,es:"por supuesto / supuesto",en:"of course / assumed",example:"Por supuesto, revisaremos el documento."},{rank:166,es:"a la postre / postre",en:"ultimately / dessert",example:"A la postre, la prueba decidió el caso."},{rank:167,es:"en cambio / cambiar",en:"however, instead / to change",example:"El precio bajó; en cambio, el plazo aumentó."},{rank:168,es:"de hecho / hecho",en:"in fact / fact or act",example:"De hecho, sí existe recibo."},{rank:169,es:"enfrente de",en:"opposite; in front of",example:"El banco está enfrente del juzgado."},{rank:170,es:"a efectos de",en:"for purposes of",example:"A efectos de notificación, se fija este domicilio."},{rank:171,es:"a instancia de",en:"at the request/instance of",example:"El trámite se inició a instancia del acreedor."},{rank:172,es:"en virtud de",en:"by virtue of; pursuant to",example:"En virtud del poder, puede firmar."},{rank:173,es:"con ocasión de",en:"on the occasion of; in connection with",example:"El daño ocurrió con ocasión de la obra."},{rank:174,es:"sin perjuicio de las acciones que correspondan",en:"without prejudice to the actions that may correspond",example:"Se reclama el pago, sin perjuicio de las acciones que correspondan."},{rank:175,es:"bajo reserva de derechos",en:"under reservation of rights",example:"Se recibe el pago bajo reserva de derechos."}]},{id:"adverbial-idioms",title:"Adverbial Idioms",shortTitle:"Adverbial Idioms",tone:"plum",count:150,entries:[{rank:1,es:"a veces",en:"sometimes",example:"A veces, negociar es mejor que litigar."},{rank:2,es:"a menudo",en:"often",example:"A menudo, los detalles cambian el caso."},{rank:3,es:"a diario",en:"daily",example:"Revisa el correo a diario."},{rank:4,es:"a mano",en:"by hand; within reach",example:"Firmó el recibo a mano."},{rank:5,es:"a pie",en:"on foot",example:"Llegó al juzgado a pie."},{rank:6,es:"a tiempo",en:"on time",example:"El pago llegó a tiempo."},{rank:7,es:"al menos",en:"at least",example:"Al menos, tenemos el contrato firmado."},{rank:8,es:"de repente",en:"suddenly",example:"De repente, la otra parte cambió su posición."},{rank:9,es:"de pronto",en:"suddenly; maybe",example:"De pronto, llegó una nueva oferta."},{rank:10,es:"de nuevo",en:"again",example:"Revise el documento de nuevo."},{rank:11,es:"de vez en cuando",en:"from time to time",example:"De vez en cuando, conviene revisar el archivo."},{rank:12,es:"de momento",en:"for the moment; so far",example:"De momento, no hay respuesta."},{rank:13,es:"en realidad",en:"actually; in reality",example:"En realidad, el pago nunca llegó."},{rank:14,es:"en serio",en:"seriously",example:"Hablo en serio: no firme todavía."},{rank:15,es:"en total",en:"in total",example:"En total, pagó 440.000 AED."},{rank:16,es:"por fin",en:"finally; at last",example:"Por fin, recibimos la respuesta."},{rank:17,es:"por ahora",en:"for now",example:"Por ahora, no presentaremos demanda."},{rank:18,es:"por el momento",en:"for the moment",example:"Por el momento, mantendremos la oferta."},{rank:19,es:"por lo visto",en:"apparently",example:"Por lo visto, hubo un error de transferencia."},{rank:20,es:"por suerte",en:"luckily",example:"Por suerte, había copia del contrato."},{rank:21,es:"por desgracia",en:"unfortunately",example:"Por desgracia, no se conservó el original."},{rank:22,es:"por separado",en:"separately",example:"Analizaremos cada contrato por separado."},{rank:23,es:"por escrito",en:"in writing",example:"Toda modificación debe hacerse por escrito."},{rank:24,es:"por si acaso",en:"just in case",example:"Guarde una copia por si acaso."},{rank:25,es:"con cuidado",en:"carefully",example:"Lea la cláusula con cuidado."},{rank:26,es:"con razón",en:"rightly; with reason",example:"Con razón, pidió garantía."},{rank:27,es:"sin falta",en:"without fail",example:"Envíelo mañana sin falta."},{rank:28,es:"sin querer",en:"unintentionally",example:"Lo borró sin querer."},{rank:29,es:"sin parar",en:"non-stop",example:"Trabajó sin parar."},{rank:30,es:"sin rodeos",en:"directly; without beating around the bush",example:"Hablemos sin rodeos."},{rank:31,es:"a la vez",en:"at the same time",example:"No puede reclamar y renunciar a la vez."},{rank:32,es:"a solas",en:"alone; privately",example:"Quiso hablar a solas con su abogado."},{rank:33,es:"a medias",en:"halfway; partially",example:"La obra quedó a medias."},{rank:34,es:"a oscuras",en:"in the dark",example:"El cliente no debe quedar a oscuras."},{rank:35,es:"a ciegas",en:"blindly",example:"No conviene firmar a ciegas."},{rank:36,es:"a escondidas",en:"secretly",example:"Se reunió a escondidas con la otra parte."},{rank:37,es:"a conciencia",en:"carefully; deliberately",example:"Revisó el contrato a conciencia."},{rank:38,es:"a toda prisa",en:"in great haste",example:"Preparó el escrito a toda prisa."},{rank:39,es:"a primera vista",en:"at first sight/glance",example:"A primera vista, la oferta parece razonable."},{rank:40,es:"a simple vista",en:"at first glance; visibly",example:"A simple vista, el documento parece válido."},{rank:41,es:"a primera hora",en:"first thing; early",example:"Lo enviaremos a primera hora."},{rank:42,es:"a última hora",en:"at the last minute",example:"Cambió la estrategia a última hora."},{rank:43,es:"a corto plazo",en:"in the short term",example:"A corto plazo, conviene negociar."},{rank:44,es:"a largo plazo",en:"in the long term",example:"A largo plazo, la reputación importa."},{rank:45,es:"a grandes rasgos",en:"broadly speaking; in broad outline",example:"A grandes rasgos, el caso es viable."},{rank:46,es:"a lo mejor",en:"maybe; perhaps",example:"A lo mejor aceptan una reducción."},{rank:47,es:"a lo sumo",en:"at most",example:"A lo sumo, tardará una semana."},{rank:48,es:"a más tardar",en:"no later than",example:"Debe pagar a más tardar el viernes."},{rank:49,es:"al día",en:"up to date; per day",example:"Mantenga los registros al día."},{rank:50,es:"al instante",en:"instantly",example:"Respondió al instante."},{rank:51,es:"al momento",en:"immediately; at the moment",example:"Lo revisó al momento."},{rank:52,es:"al parecer",en:"apparently",example:"Al parecer, hubo un segundo acuerdo."},{rank:53,es:"de antemano",en:"in advance",example:"Gracias de antemano por su respuesta."},{rank:54,es:"de buena gana",en:"willingly; gladly",example:"Aceptó de buena gana."},{rank:55,es:"de mala gana",en:"unwillingly; reluctantly",example:"Firmó de mala gana."},{rank:56,es:"de paso",en:"by the way; in passing",example:"De paso, revisemos la cláusula final."},{rank:57,es:"de memoria",en:"by heart; from memory",example:"Recitó la cláusula de memoria."},{rank:58,es:"de oficio",en:"ex officio; officially",example:"El tribunal actuó de oficio."},{rank:59,es:"de oficio",en:"ex officio",example:"El tribunal podrá actuar de oficio."},{rank:60,es:"de una vez",en:"at once; once and for all",example:"Cerrémoslo de una vez."},{rank:61,es:"de una vez por todas",en:"once and for all",example:"Resolvamos el asunto de una vez por todas."},{rank:62,es:"de alguna manera",en:"somehow; in some way",example:"De alguna manera, debemos cerrar el acuerdo."},{rank:63,es:"de algún modo",en:"somehow; in some way",example:"De algún modo, el riesgo debe cubrirse."},{rank:64,es:"de igual forma",en:"in the same way",example:"De igual forma, se notificará al garante."},{rank:65,es:"de lo contrario",en:"otherwise",example:"Pague hoy; de lo contrario, demandaremos."},{rank:66,es:"de sobra",en:"more than enough",example:"Hay prueba de sobra."},{rank:67,es:"de por sí",en:"in itself; by itself",example:"La cláusula es de por sí ambigua."},{rank:68,es:"en broma",en:"jokingly",example:"Lo dijo en broma."},{rank:69,es:"en secreto",en:"secretly",example:"Negociaron en secreto."},{rank:70,es:"en silencio",en:"silently",example:"Escuchó en silencio."},{rank:71,es:"en vano",en:"in vain",example:"Intentó cobrar en vano."},{rank:72,es:"en adelante",en:"from now on; henceforth",example:"En adelante, todo será por escrito."},{rank:73,es:"en el acto",en:"on the spot; immediately",example:"Pagó en el acto."},{rank:74,es:"en el fondo",en:"deep down; fundamentally",example:"En el fondo, la disputa es comercial."},{rank:75,es:"en la práctica",en:"in practice",example:"En la práctica, la cláusula no se aplicó."},{rank:76,es:"en teoría",en:"in theory",example:"En teoría, el plazo era suficiente."},{rank:77,es:"en conjunto",en:"as a whole",example:"En conjunto, la prueba es sólida."},{rank:78,es:"en tal caso",en:"in that case",example:"En tal caso, conviene apelar."},{rank:79,es:"en caso contrario",en:"otherwise",example:"Debe cumplir; en caso contrario, responderá por daños."},{rank:80,es:"por entonces",en:"at that time; back then",example:"Por entonces, la sociedad no estaba registrada."},{rank:81,es:"por lo común",en:"commonly; usually",example:"Por lo común, se exige aviso escrito."},{rank:82,es:"por poco",en:"almost; nearly",example:"Por poco pierden el plazo."},{rank:83,es:"por casualidad",en:"by chance",example:"Encontró el recibo por casualidad."},{rank:84,es:"por adelantado",en:"in advance",example:"Pagó por adelantado."},{rank:85,es:"por anticipado",en:"in advance",example:"Se agradece por anticipado su cooperación."},{rank:86,es:"por dentro",en:"inside; internally",example:"Por dentro, el edificio tenía daños."},{rank:87,es:"por fuera",en:"outside; externally",example:"Por fuera, la fachada parecía terminada."},{rank:88,es:"con frecuencia",en:"frequently",example:"Este problema ocurre con frecuencia."},{rank:89,es:"con calma",en:"calmly",example:"Revise el contrato con calma."},{rank:90,es:"con seguridad",en:"safely; surely",example:"Con seguridad, necesitaremos prueba adicional."},{rank:91,es:"con certeza",en:"with certainty",example:"No podemos afirmarlo con certeza."},{rank:92,es:"con suerte",en:"with luck; hopefully",example:"Con suerte, cerramos el acuerdo mañana."},{rank:93,es:"con facilidad",en:"easily",example:"El error puede corregirse con facilidad."},{rank:94,es:"con dificultad",en:"with difficulty",example:"Logró pagar con dificultad."},{rank:95,es:"con tiempo",en:"with enough time; in advance",example:"Avísenos con tiempo."},{rank:96,es:"con anticipación",en:"in advance",example:"Debe notificarse con anticipación."},{rank:97,es:"con diferencia",en:"by far",example:"Es, con diferencia, la mejor opción."},{rank:98,es:"con permiso",en:"excuse me; with permission",example:"Con permiso, quisiera añadir un punto."},{rank:99,es:"sin cesar",en:"ceaselessly",example:"Reclamó sin cesar."},{rank:100,es:"sin más",en:"just like that; without more",example:"Terminó el contrato sin más."},{rank:101,es:"sin excepción",en:"without exception",example:"Todos deben firmar sin excepción."},{rank:102,es:"sin remedio",en:"inevitably; hopelessly",example:"El contrato quedó sin remedio afectado."},{rank:103,es:"a bordo",en:"on board",example:"Los pasajeros ya estaban a bordo."},{rank:104,es:"a caballo",en:"on horseback; straddling",example:"El proyecto quedó a caballo entre dos jurisdicciones."},{rank:105,es:"a un tiempo",en:"at once; simultaneously",example:"El acuerdo es a un tiempo solución y garantía."},{rank:106,es:"a la larga",en:"in the long run",example:"A la larga, la prevención ahorra costos."},{rank:107,es:"a fin de cuentas",en:"at the end of the day",example:"A fin de cuentas, lo decisivo es la prueba."},{rank:108,es:"a duras penas",en:"barely; with great difficulty",example:"Pudo pagar a duras penas."},{rank:109,es:"a regañadientes",en:"reluctantly",example:"Aceptó la propuesta a regañadientes."},{rank:110,es:"a la fuerza",en:"by force; forcibly",example:"No se puede imponer a la fuerza."},{rank:111,es:"a toda costa",en:"at all costs",example:"Quiere evitar el juicio a toda costa."},{rank:112,es:"a toda máquina",en:"at full speed",example:"El equipo trabaja a toda máquina."},{rank:113,es:"a ciencia cierta",en:"for certain",example:"No sabemos a ciencia cierta cuándo pagará."},{rank:114,es:"a decir verdad",en:"to tell the truth",example:"A decir verdad, la cláusula es ambigua."},{rank:115,es:"al azar",en:"at random",example:"La muestra se eligió al azar."},{rank:116,es:"al por mayor",en:"wholesale",example:"Vende productos al por mayor."},{rank:117,es:"al por menor",en:"retail",example:"La tienda vende al por menor."},{rank:118,es:"de improviso",en:"unexpectedly; without preparation",example:"La inspección llegó de improviso."},{rank:119,es:"de cuando en cuando",en:"from time to time",example:"De cuando en cuando, surgía una objeción."},{rank:120,es:"de cabo a rabo",en:"from beginning to end",example:"Leyó el contrato de cabo a rabo."},{rank:121,es:"de par en par",en:"wide open",example:"La puerta quedó abierta de par en par."},{rank:122,es:"de mal en peor",en:"from bad to worse",example:"La situación fue de mal en peor."},{rank:123,es:"de suyo",en:"in itself; naturally",example:"El deber de buena fe es de suyo exigible."},{rank:124,es:"en absoluto",en:"not at all; absolutely",example:"No estoy de acuerdo en absoluto."},{rank:125,es:"en vilo",en:"in suspense; on edge",example:"El resultado dejó al cliente en vilo."},{rank:126,es:"con creces",en:"amply; more than enough",example:"La prueba demuestra con creces el incumplimiento."},{rank:127,es:"sin quererlo",en:"without intending to",example:"Sin quererlo, agravó el problema."},{rank:128,es:"sin más ni más",en:"for no reason; just like that",example:"No puede retener el pago sin más ni más."},{rank:129,es:"sin ton ni son",en:"without rhyme or reason",example:"No conviene modificar cláusulas sin ton ni son."},{rank:130,es:"sin lugar a dudas",en:"without a doubt",example:"Sin lugar a dudas, el plazo venció."},{rank:131,es:"a la postre",en:"in the end; ultimately",example:"A la postre, ganó la posición más prudente."},{rank:132,es:"en tiempo y forma",en:"in due time and form",example:"El recurso se presentó en tiempo y forma."},{rank:133,es:"en legal forma",en:"in proper legal form",example:"Fue citado en legal forma."},{rank:134,es:"de pleno derecho",en:"by operation of law; automatically",example:"La cláusula produce efectos de pleno derecho."},{rank:135,es:"por ministerio de la ley",en:"by operation of law",example:"La transmisión opera por ministerio de la ley."},{rank:136,es:"con expresa imposición de costas",en:"with express award of costs",example:"Solicitamos condena con expresa imposición de costas."},{rank:137,es:"a la mayor brevedad posible",en:"as soon as possible",example:"Sírvase responder a la mayor brevedad posible."},{rank:138,es:"sin dilación",en:"without delay",example:"Debe subsanar el defecto sin dilación."},{rank:139,es:"por duplicado ejemplar",en:"in duplicate copies",example:"Se firma por duplicado ejemplar."},{rank:140,es:"por vía amistosa",en:"amicably",example:"Intentaremos resolverlo por vía amistosa."},{rank:141,es:"por vía judicial",en:"through court proceedings",example:"Si no pagan, reclamaremos por vía judicial."},{rank:142,es:"por vía arbitral",en:"through arbitration",example:"La controversia se someterá por vía arbitral."},{rank:143,es:"de común acuerdo",en:"by mutual agreement",example:"Las partes podrán modificarlo de común acuerdo."},{rank:144,es:"de mutuo acuerdo",en:"by mutual agreement",example:"El contrato terminó de mutuo acuerdo."},{rank:145,es:"en caso fortuito o fuerza mayor",en:"in case of fortuitous event or force majeure",example:"No responderá en caso fortuito o fuerza mayor."},{rank:146,es:"por las buenas",en:"amicably; willingly",example:"Intentemos resolverlo por las buenas."},{rank:147,es:"por las malas",en:"by force; the hard way",example:"Si no paga, habrá que cobrar por las malas."},{rank:148,es:"a ratos",en:"from time to time; intermittently",example:"Trabajó a ratos durante el fin de semana."},{rank:149,es:"a destiempo",en:"at the wrong time; late",example:"La objeción llegó a destiempo."},{rank:150,es:"por unanimidad",en:"unanimously",example:"La junta aprobó por unanimidad."}]},{id:"verb-preposition",title:"Verb + Preposition",shortTitle:"Verb + Prep.",tone:"rose",count:71,entries:[{rank:1,es:"acabar de + infinitivo",en:"to have just done something",example:"Acabo de recibir el contrato."},{rank:2,es:"estar a punto de + infinitivo",en:"to be about to",example:"Estamos a punto de presentar la demanda."},{rank:3,es:"dejar de + infinitivo",en:"to stop doing",example:"Dejó de pagar en enero."},{rank:4,es:"volver a + infinitivo",en:"to do again",example:"Volvió a incumplir el plazo."},{rank:5,es:"empezar a + infinitivo",en:"to start doing",example:"Empezó a negociar tarde."},{rank:6,es:"comenzar a + infinitivo",en:"to begin doing",example:"Comenzó a revisar el expediente."},{rank:7,es:"ponerse a + infinitivo",en:"to start doing suddenly/actively",example:"Se puso a redactar la carta."},{rank:8,es:"aprender a + infinitivo",en:"to learn to",example:"Aprendió a negociar mejor."},{rank:9,es:"ayudar a + infinitivo",en:"to help to",example:"Esto ayuda a reducir riesgos."},{rank:10,es:"enseñar a + infinitivo",en:"to teach to",example:"Le enseñó a revisar contratos."},{rank:11,es:"obligar a + infinitivo",en:"to force/oblige to",example:"La cláusula obliga a pagar intereses."},{rank:12,es:"pensar en",en:"to think about",example:"Pienso en una solución amistosa."},{rank:13,es:"pensar de",en:"to think of / have an opinion about",example:"¿Qué piensa de esta cláusula?"},{rank:14,es:"depender de",en:"to depend on",example:"El resultado depende de la prueba."},{rank:15,es:"tratar de + infinitivo",en:"to try to",example:"Trató de resolver el conflicto."},{rank:16,es:"tratar sobre",en:"to be about",example:"El informe trata sobre responsabilidad civil."},{rank:17,es:"consistir en",en:"to consist of/in",example:"La obligación consiste en pagar a tiempo."},{rank:18,es:"convertirse en",en:"to become",example:"La mora se convirtió en incumplimiento esencial."},{rank:19,es:"confiar en",en:"to trust in",example:"Confía en la validez del documento."},{rank:20,es:"creer en",en:"to believe in",example:"Cree en la negociación."},{rank:21,es:"soñar con",en:"to dream of/about",example:"Sueña con abrir una oficina propia."},{rank:22,es:"contar con",en:"to have; count on",example:"Contamos con todos los recibos."},{rank:23,es:"quedar con",en:"to arrange to meet",example:"Quedé con el cliente a las cinco."},{rank:24,es:"quedarse con",en:"to keep; retain",example:"Se quedó con una copia."},{rank:25,es:"darse cuenta de",en:"to realize",example:"Se dio cuenta de que faltaba el anexo."},{rank:26,es:"ocuparse de",en:"to take care of",example:"Me ocuparé de la traducción."},{rank:27,es:"encargarse de",en:"to be in charge of",example:"Ella se encarga de los contratos."},{rank:28,es:"hacerse cargo de",en:"to take charge of",example:"Se hizo cargo del expediente."},{rank:29,es:"cuidar de",en:"to take care of",example:"Debe cuidar de sus intereses."},{rank:30,es:"preocuparse por",en:"to worry/care about",example:"Se preocupa por el resultado."},{rank:31,es:"preocuparse de",en:"to take care of; concern oneself with",example:"Me preocuparé de enviar el aviso."},{rank:32,es:"optar por",en:"to opt for",example:"Optó por negociar."},{rank:33,es:"votar por",en:"to vote for",example:"Votó por aprobar el acuerdo."},{rank:34,es:"luchar por",en:"to fight for",example:"Lucha por sus derechos."},{rank:35,es:"responder por",en:"to be liable for; answer for",example:"El garante responde por la deuda."},{rank:36,es:"responder de",en:"to be responsible for",example:"La empresa responde de los daños causados."},{rank:37,es:"estar de acuerdo con",en:"to agree with",example:"Estoy de acuerdo con la propuesta."},{rank:38,es:"estar en contra de",en:"to be against",example:"Está en contra de la modificación."},{rank:39,es:"estar a favor de",en:"to be in favor of",example:"Estamos a favor de negociar."},{rank:40,es:"estar al tanto de",en:"to be aware of; up to date on",example:"Estoy al tanto de los cambios."},{rank:41,es:"estar pendiente de",en:"to be waiting for; watching",example:"Estamos pendientes de la sentencia."},{rank:42,es:"ponerse en contacto con",en:"to contact; get in touch with",example:"Me pondré en contacto con el perito."},{rank:43,es:"tener que ver con",en:"to have to do with",example:"El problema tiene que ver con la entrega."},{rank:44,es:"cumplir con",en:"to comply with",example:"Debe cumplir con sus obligaciones."},{rank:45,es:"acabar por + infinitivo",en:"to end up doing something",example:"Acabaron por aceptar la oferta."},{rank:46,es:"estar por + infinitivo",en:"to be inclined to / still to be done",example:"Estoy por rechazar la propuesta."},{rank:47,es:"estar para + infinitivo",en:"to be about to / in a condition to",example:"El caso está para sentencia."},{rank:48,es:"llegar a + infinitivo",en:"to manage to / come to",example:"Llegó a demostrar el daño."},{rank:49,es:"venir a + infinitivo",en:"to come to / roughly amount to",example:"La cláusula viene a decir lo mismo."},{rank:50,es:"pasar a + infinitivo",en:"to proceed to",example:"Pasamos a analizar la prueba."},{rank:51,es:"negarse a + infinitivo",en:"to refuse to",example:"Se negó a firmar."},{rank:52,es:"atreverse a + infinitivo",en:"to dare to",example:"No se atrevió a reclamar."},{rank:53,es:"aspirar a + infinitivo / a + noun",en:"to aspire to",example:"Aspira a cerrar el acuerdo."},{rank:54,es:"tender a + infinitivo",en:"to tend to",example:"Los tribunales tienden a exigir prueba clara."},{rank:55,es:"renunciar a + noun/infinitive",en:"to waive; give up",example:"No renunció a reclamar daños."},{rank:56,es:"resistirse a + infinitivo",en:"to resist doing",example:"Se resistió a entregar documentos."},{rank:57,es:"acordarse de",en:"to remember",example:"Me acordé de enviar la carta."},{rank:58,es:"olvidarse de",en:"to forget about/to",example:"Se olvidó de pagar."},{rank:59,es:"arrepentirse de",en:"to regret",example:"Se arrepintió de firmar."},{rank:60,es:"dar con",en:"to find; come across",example:"Dimos con el documento original."},{rank:61,es:"toparse con",en:"to run into; encounter",example:"Nos topamos con una cláusula problemática."},{rank:62,es:"encontrarse con",en:"to encounter; meet with",example:"Nos encontramos con una objeción nueva."},{rank:63,es:"insistir en",en:"to insist on",example:"Insistió en cobrar la penalidad."},{rank:64,es:"fijarse en",en:"to notice; pay attention to",example:"Fíjese en la fecha de firma."},{rank:65,es:"abogar por",en:"to advocate for",example:"Abogó por una solución equilibrada."},{rank:66,es:"gozar de",en:"to enjoy; have",example:"Goza de buena reputación."},{rank:67,es:"carecer de",en:"to lack",example:"El documento carece de firma."},{rank:68,es:"disponer de",en:"to have available; dispose of",example:"Disponemos de copia certificada."},{rank:69,es:"constar de",en:"to consist of",example:"El expediente consta de tres tomos."},{rank:70,es:"caer en la cuenta de",en:"to realize",example:"Cayó en la cuenta de que faltaba una página."},{rank:71,es:"caer en",en:"to fall into; incur",example:"Cayó en mora por no pagar."}]}]},Bb=["A1","A2","B1","B2"],lf="lesson-status-v1",Gc="audio-settings-v1",Xc="writing-practice-v1",Rc="translation-mode-v1",Hc="boox-mode-v1",Yb={tiempos:br,verbos:Ic,verbos2:Ic,gramatica:ab,lectura:eb,vocabulario:pf,palabras:mf,frases:tb,tips:Uo,resumen:Fc};function Kc({id:r,size:u=18,className:d=""}){const c=Yb[r]||mr;return o.jsx(c,{size:u,className:d})}const Gt=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]},lb,cb]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:rb},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"expresiones",level:"B1",title:"Expresiones",subtitle:"648 Spanish expressions",intro:"Four groups ranked from most-used to least-used. Search, browse by group, and open each card to read the example sentence.",blocks:[{type:"expressions-library",library:Hb}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function Vb(r){const u=[];let d="",c="normal";for(let m=0;m<r.length;m++){const h=r[m];h==="["?(d&&u.push({text:d,mode:c}),d="",c="irreg"):h==="]"?(d&&u.push({text:d,mode:"irreg"}),d="",c="normal"):h==="{"?(d&&u.push({text:d,mode:c}),d="",c="ending"):h==="}"?(d&&u.push({text:d,mode:"ending"}),d="",c="normal"):d+=h}return d&&u.push({text:d,mode:c}),u}function Da({raw:r}){return o.jsx(o.Fragment,{children:Vb(r).map((u,d)=>{const c=u.mode==="irreg"?"irreg":u.mode==="ending"?"ending":"";return o.jsx("span",{className:c,children:u.text},d)})})}function Ao(r){return String(r||"").replace(/[\[\]{}]/g,"")}function ba(r){return String(r||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function Qb({tenses:r,verbName:u}){const[d,c]=U.useState(!1),[m,h]=U.useState([]),[g,b]=U.useState(0),[w,f]=U.useState(""),[S,j]=U.useState(null),[O,k]=U.useState(0),[A,C]=U.useState(!1);function Q(){const ae=[];for(const xe of r)for(const P of xe.forms||[])ae.push({tense:xe.name,pronoun:P.p,answer:Ao(P.f)});const $=[...ae].sort(()=>Math.random()-.5);return $.slice(0,Math.min(8,$.length))}function I(){h(Q()),b(0),f(""),j(null),k(0),C(!1),c(!0)}function te(ae){if(ae&&ae.preventDefault(),S)return;const $=m[g],xe=ba(w)===ba($.answer);j(xe?"correct":"incorrect"),xe&&k(P=>P+1)}function F(){if(g+1>=m.length){C(!0);return}b(ae=>ae+1),f(""),j(null)}function J(){window.speechSynthesis?.cancel(),c(!1)}const ee=m[g],se=m.length;return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"quiz-trigger-btn",onClick:I,children:[o.jsx(Ht,{size:14}),"Practicar"]}),d&&o.jsx("div",{className:"quiz-overlay",onClick:J,children:o.jsxs("div",{className:"quiz-modal",onClick:ae=>ae.stopPropagation(),children:[o.jsxs("header",{className:"quiz-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),o.jsx("h2",{className:"quiz-title",children:u})]}),o.jsx("button",{className:"quiz-close",onClick:J,"aria-label":"Close",children:o.jsx(Gn,{size:18})})]}),A?o.jsxs("div",{className:"quiz-results",children:[o.jsxs("div",{className:"quiz-results-circle",children:[o.jsxs("div",{className:"quiz-results-pct",children:[Math.round(O/se*100),"%"]}),o.jsxs("div",{className:"quiz-results-fraction",children:[O," / ",se]})]}),o.jsx("h3",{className:"quiz-results-title",children:O===se?"¡Perfecto!":O>=se*.75?"Muy bien":O>=se*.5?"Sigue practicando":"Vamos a repasar"}),o.jsx("p",{className:"quiz-results-msg",children:O===se?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":O>=se*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),o.jsxs("div",{className:"quiz-results-actions",children:[o.jsxs("button",{className:"quiz-retry-btn",onClick:I,children:[o.jsx(ed,{size:14}),"Otra vez"]}),o.jsx("button",{className:"quiz-done-btn",onClick:J,children:"Cerrar"})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"quiz-progress",children:[o.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",g+1," de ",se]}),o.jsx("div",{className:"quiz-progress-bar",children:o.jsx("div",{className:"quiz-progress-fill",style:{width:`${g/se*100}%`}})})]}),o.jsxs("div",{className:"quiz-question",children:[o.jsx("div",{className:"quiz-tense-label",children:ee.tense}),o.jsxs("div",{className:"quiz-prompt",children:[o.jsx("span",{className:"quiz-pronoun",children:ee.pronoun}),o.jsx("span",{className:"quiz-blank",children:"________"})]}),o.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",o.jsx("em",{children:u.toLowerCase()})," para esta persona."]})]}),o.jsxs("form",{onSubmit:te,className:"quiz-form",children:[o.jsx("input",{type:"text",className:`quiz-input ${S||""}`,value:w,onChange:ae=>f(ae.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!S}),!S&&o.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!w.trim(),children:"Comprobar"})]}),S&&o.jsxs("div",{className:`quiz-feedback ${S}`,children:[S==="correct"?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"quiz-feedback-icon",children:o.jsx(Wc,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),o.jsx("div",{className:"quiz-feedback-answer",children:ee.answer})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"quiz-feedback-icon",children:o.jsx(Gn,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),o.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",o.jsx("strong",{children:ee.answer})]})]})]}),o.jsx(Pe,{text:ee.answer,size:"md",className:"quiz-feedback-speak"})]}),S&&o.jsxs("button",{className:"quiz-next-btn",onClick:F,children:[g+1>=se?"Ver resultados":"Siguiente",o.jsx(mt,{size:16})]}),o.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",o.jsx("strong",{children:O})," / ",g+(S?1:0)]})]})]})})]})}function Bc(r){return[...r].sort(()=>Math.random()-.5)}function zf(r){const u=[];function d(h,g){if(!h||!g)return;const b=Ao(String(h)).trim(),w=String(g).trim();b.length<2||w.length<2||u.push({es:b,en:w})}for(const h of r?.sections||[]){for(const g of h.examples||[])d(g.es,g.en);for(const g of h.table?.rows||[])g?.[0]&&g?.[1]&&d(g[1],`${g[0]} form`)}for(const h of r?.blocks||[]){for(const g of h.pairs||[])d(g.es,g.en);for(const g of h.columns||[])d(g.es,g.en);for(const g of h.phrases||[])d(g.es,g.en);for(const g of h.words||[])d(g.es,g.en);for(const g of h.lessons||[])for(const b of zf(g))d(b.es,b.en)}const c=[],m=new Set;for(const h of u){const g=ba(h.es);m.has(g)||(m.add(g),c.push(h))}return c}function Ib(r){const u=zf(r);return u.length<2?[]:Bc(u).slice(0,Math.min(4,u.length)).map((c,m)=>{const h=m%2===0,g=h?c.es:c.en,b=Bc(u).filter(w=>w!==c).map(w=>h?w.es:w.en).filter(w=>ba(w)!==ba(g)).slice(0,3);return{prompt:h?c.en:c.es,answer:g,speak:c.es,mode:h?"Elige el espanol":"Elige la traduccion",choices:Bc([g,...b]).slice(0,4)}})}function Sf({source:r,title:u="Mini practica"}){const d=U.useMemo(()=>Ib(r),[r]),[c,m]=U.useState({}),[h,g]=U.useState(!1);if(U.useEffect(()=>{m({}),g(!1)},[r]),d.length<2)return null;const b=Object.keys(c).length,w=d.reduce((f,S,j)=>ba(c[j])===ba(S.answer)?f+1:f,0);return o.jsxs("section",{className:"lesson-mini-quiz",children:[o.jsxs("div",{className:"lesson-mini-head",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"lesson-mini-kicker",children:[o.jsx(Ht,{size:13})," Practica rapida"]}),o.jsx("h3",{children:u})]}),o.jsxs("button",{className:"lesson-mini-reset",onClick:()=>{m({}),g(!1)},children:[o.jsx(ed,{size:13}),"Reiniciar"]})]}),o.jsx("div",{className:"lesson-mini-list",children:d.map((f,S)=>{const j=c[S],O=j&&ba(j)===ba(f.answer);return o.jsxs("div",{className:"lesson-mini-card",children:[o.jsxs("div",{className:"lesson-mini-meta",children:[o.jsx("span",{children:String(S+1).padStart(2,"0")}),o.jsx("em",{children:f.mode}),o.jsx(Pe,{text:f.speak})]}),o.jsx("p",{className:"lesson-mini-prompt",children:f.prompt}),o.jsx("div",{className:"lesson-mini-choices",children:f.choices.map(k=>{const A=j===k;return o.jsx("button",{className:`${A?"active":""} ${h&&A?O?"correct":"wrong":""}`,onClick:()=>m(C=>({...C,[S]:k})),children:k},k)})}),h&&j&&!O&&o.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",o.jsx("strong",{children:f.answer})]})]},`${f.prompt}-${S}`)})}),o.jsxs("div",{className:"lesson-mini-footer",children:[o.jsxs("span",{children:[b," / ",d.length," respondidas"]}),o.jsx("button",{className:"lesson-mini-check",disabled:b<d.length,onClick:()=>g(!0),children:"Comprobar"}),h&&o.jsxs("strong",{children:[w," / ",d.length]})]})]})}function Xb({s:r}){return o.jsxs("div",{className:"gl-section",children:[r.heading&&o.jsx("h3",{className:"gl-heading",children:r.heading}),r.text&&o.jsx("p",{className:"gl-text",children:o.jsx(la,{text:r.text})}),r.table&&o.jsx("div",{className:"lesson-table-wrap",children:o.jsxs("table",{className:"lesson-table gl-table",children:[r.table.headers&&o.jsx("thead",{children:o.jsx("tr",{children:r.table.headers.map((u,d)=>o.jsx("th",{children:u},d))})}),o.jsx("tbody",{children:r.table.rows.map((u,d)=>o.jsx("tr",{children:u.map((c,m)=>o.jsx("td",{children:m===0?c:o.jsx(Da,{raw:String(c)})},m))},d))})]})}),r.examples&&o.jsx("ul",{className:"gl-examples",children:r.examples.map((u,d)=>o.jsx("li",{children:o.jsx(ft,{es:u.es,en:u.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},d))}),r.tip&&o.jsxs("aside",{className:"gl-tip",children:[o.jsx(Uo,{size:16,className:"gl-tip-icon"}),o.jsx("p",{children:r.tip})]}),r.takeaway&&o.jsxs("aside",{className:"gl-takeaway",children:[o.jsxs("div",{className:"gl-takeaway-label",children:[o.jsx(Pc,{size:12})," Lo que te llevas"]}),o.jsx("p",{children:r.takeaway})]})]})}const Kb={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function gr({level:r}){const u=Kb[r]||{};return o.jsx("span",{className:"bio-level-badge",style:{background:u.bg,color:u.color,borderColor:u.border},children:r})}function Ys(r,u,d,c){U.useEffect(()=>{r?.type!==u||typeof r.index!="number"||(d(r.index),window.setTimeout(()=>{c.current?.[r.index]?.scrollIntoView?.({behavior:"smooth",block:"start"})},80))},[r,u,d,c])}function Zb({poems:r,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c,activeNestedTarget:m}){const[h,g]=U.useState(null),b=Sa.useRef([]);Ys(m,"poem",g,b);function w(f){g(S=>S===f?null:f)}return o.jsx("section",{className:"block foldable-poems",children:r.map((f,S)=>{const j=h===S,O=gn(u,"poem",S,f.title);return o.jsxs("div",{ref:k=>{b.current[S]=k},className:`poem-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"poem-toggle",onClick:()=>w(S),"aria-expanded":j,children:[o.jsxs("div",{className:"poem-toggle-inner",children:[o.jsx("span",{className:"poem-num",children:String(S+1).padStart(2,"0")}),o.jsxs("div",{className:"poem-toggle-text",children:[o.jsx("span",{className:"poem-title-line",children:f.title}),o.jsx("span",{className:"poem-attribution",children:f.attribution})]})]}),o.jsxs("div",{className:"poem-toggle-right",children:[o.jsx("span",{className:"poem-level-tag",children:f.level}),d[O]&&o.jsx("span",{className:`story-status-pill ${d[O]}`,children:d[O]==="understood"?"Entendido":"Leído"}),o.jsx(Rs,{size:18,className:`poem-chevron ${j?"open":""}`})]})]}),j&&o.jsxs("div",{className:"poem-body",children:[o.jsx(Oo,{status:d[O],onChange:k=>c?.(O,k)}),f.note&&o.jsx("p",{className:"poem-intro-note",children:f.note}),f.opening&&o.jsxs("blockquote",{className:"poem-opening-quote",children:[o.jsx(Pe,{text:f.opening,size:"md",className:"poem-quote-speak"}),f.opening]}),o.jsxs("div",{className:"poem-tools",children:[o.jsx(Pe,{text:f.stanzas.map(k=>k.es).join(". "),size:"md"}),o.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),o.jsx("div",{className:"poem-stanzas",children:f.stanzas.map((k,A)=>o.jsxs("div",{className:"poem-stanza",children:[o.jsx("div",{className:"poem-stanza-num",children:A+1}),o.jsx(Hs,{text:k.es,paragraphClass:"poem-stanza-es"}),o.jsx("div",{className:"poem-stanza-en",children:k.en})]},A))}),f.vocab&&f.vocab.length>0&&o.jsxs("div",{className:"poem-vocab-block",children:[o.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),o.jsx("div",{className:"poem-vocab-grid",children:f.vocab.map((k,A)=>o.jsxs("div",{className:"poem-vocab-row",children:[o.jsx("span",{className:"poem-vocab-es",children:k.es}),o.jsx("span",{className:"poem-vocab-dash",children:"—"}),o.jsx("span",{className:"poem-vocab-en",children:k.en})]},A))})]}),f.learningNote&&o.jsxs("aside",{className:"poem-learning-note",children:[o.jsxs("div",{className:"poem-learning-label",children:[o.jsx(Uo,{size:14})," Nota de lectura"]}),o.jsx("p",{children:f.learningNote})]})]})]},S)})})}function Jb({songs:r,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c,activeNestedTarget:m}){const[h,g]=U.useState(null),b=Sa.useRef([]);Ys(m,"song",g,b);function w(f){g(S=>S===f?null:f)}return o.jsx("section",{className:"block foldable-poems foldable-songs",children:r.map((f,S)=>{const j=h===S,O=f.sections.map(A=>A.es).join(". "),k=gn(u,"song",S,f.title);return o.jsxs("div",{ref:A=>{b.current[S]=A},className:`poem-item song-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"poem-toggle",onClick:()=>w(S),"aria-expanded":j,children:[o.jsxs("div",{className:"poem-toggle-inner",children:[o.jsx("span",{className:"poem-num",children:String(S+1).padStart(2,"0")}),o.jsxs("div",{className:"poem-toggle-text",children:[o.jsx("span",{className:"poem-title-line",children:f.title}),o.jsx("span",{className:"poem-attribution",children:f.attribution})]})]}),o.jsxs("div",{className:"poem-toggle-right",children:[o.jsx("span",{className:"poem-level-tag",children:f.level}),d[k]&&o.jsx("span",{className:`story-status-pill ${d[k]}`,children:d[k]==="understood"?"Entendido":"Leído"}),o.jsx(Rs,{size:18,className:`poem-chevron ${j?"open":""}`})]})]}),j&&o.jsxs("div",{className:"poem-body song-body",children:[o.jsx(Oo,{status:d[k],onChange:A=>c?.(k,A)}),o.jsx("p",{className:"poem-intro-note",children:f.note}),o.jsxs("div",{className:"poem-tools",children:[o.jsx(Pe,{text:O,size:"md"}),o.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),o.jsx("div",{className:"song-sections",children:f.sections.map((A,C)=>o.jsxs("div",{className:"song-section",children:[o.jsxs("div",{className:"song-section-label",children:[String(C+1).padStart(2,"0")," · ",A.label]}),o.jsxs("div",{className:"song-section-grid",children:[o.jsx(Hs,{text:A.es,paragraphClass:"song-lyric-es"}),o.jsx("p",{className:"song-lyric-en",children:A.en})]})]},A.label))}),f.vocab&&f.vocab.length>0&&o.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[o.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),o.jsx("div",{className:"poem-vocab-grid",children:f.vocab.map((A,C)=>o.jsxs("div",{className:"poem-vocab-row",children:[o.jsx("span",{className:"poem-vocab-es",children:A.es}),o.jsx("span",{className:"poem-vocab-dash",children:"—"}),o.jsx("span",{className:"poem-vocab-en",children:A.en})]},C))})]}),f.learningNote&&o.jsxs("aside",{className:"poem-learning-note",children:[o.jsxs("div",{className:"poem-learning-label",children:[o.jsx(Uo,{size:14})," Nota de canción"]}),o.jsx("p",{children:f.learningNote})]})]})]},f.title)})})}function $b({bios:r,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c,activeNestedTarget:m}){const[h,g]=U.useState(null),b=Sa.useRef([]);Ys(m,"bio",g,b);function w(f){g(S=>S===f?null:f)}return o.jsx("section",{className:"block foldable-bios",children:r.map((f,S)=>{const j=h===S,O=gn(u,"bio",S,f.title);return o.jsxs("div",{ref:k=>{b.current[S]=k},className:`bio-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"bio-toggle",onClick:()=>w(S),"aria-expanded":j,children:[o.jsxs("div",{className:"bio-toggle-left",children:[o.jsx("span",{className:"bio-num",children:String(S+1).padStart(2,"0")}),o.jsxs("div",{className:"bio-toggle-text",children:[o.jsx("span",{className:"bio-name",children:f.title}),o.jsx("span",{className:"bio-subtitle-line",children:f.subtitle}),o.jsx("span",{className:"bio-dates",children:f.dates})]})]}),o.jsxs("div",{className:"bio-toggle-right",children:[o.jsxs("div",{className:"bio-level-pills",children:[[...new Set(f.levels.map(k=>k.level))].map(k=>o.jsx(gr,{level:k},k)),d[O]&&o.jsx("span",{className:`story-status-pill ${d[O]}`,children:d[O]==="understood"?"Entendido":"Leído"})]}),o.jsx(Rs,{size:18,className:`bio-chevron ${j?"open":""}`})]})]}),j&&o.jsxs("div",{className:"bio-body",children:[o.jsx(Oo,{status:d[O],onChange:k=>c?.(O,k)}),f.levels.map((k,A)=>o.jsxs("div",{className:"bio-section",children:[o.jsxs("div",{className:"bio-section-header",children:[o.jsx(gr,{level:k.level}),o.jsx("h3",{className:"bio-section-title",children:k.heading}),o.jsx(Pe,{text:k.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),k.paragraphs.map((C,Q)=>o.jsx(Hs,{text:C,paragraphClass:"bio-paragraph"},Q)),k.vocab&&o.jsxs("div",{className:"bio-vocab",children:[o.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),k.vocab]})]},A))]})]},S)})})}function Wb({lessons:r,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c,activeNestedTarget:m}){const[h,g]=U.useState(null),b=Sa.useRef([]);Ys(m,"grammar",g,b);function w(f){g(S=>S===f?null:f)}return o.jsx("section",{className:"block foldable-grammar",children:r.map((f,S)=>{const j=h===S,O=gn(u,"grammar",S,f.title);return o.jsxs("div",{ref:k=>{b.current[S]=k},className:`gl-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"gl-toggle",onClick:()=>w(S),"aria-expanded":j,"touch-action":"manipulation",children:[o.jsx("span",{className:"gl-num",children:String(S+1).padStart(2,"0")}),o.jsx("span",{className:"gl-level-badge",children:f.level}),o.jsxs("div",{className:"gl-toggle-text",children:[o.jsx("span",{className:"gl-title",children:f.title}),o.jsx("span",{className:"gl-subtitle",children:f.subtitle})]}),d[O]&&o.jsx("span",{className:`gl-status-pill ${d[O]}`,children:d[O]==="understood"?"Entendido":"Leído"}),o.jsx(Rs,{size:18,className:`gl-chevron ${j?"open":""}`})]}),j&&o.jsxs("div",{className:"gl-body",children:[o.jsx(Oo,{status:d[O],onChange:k=>c?.(O,k)}),f.intro&&o.jsx("p",{className:"gl-intro",children:f.intro}),f.sections.map((k,A)=>o.jsx(Xb,{s:k},A)),o.jsx(Sf,{source:f,title:`Practica: ${f.title}`})]})]},S)})})}function Fb({stories:r,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c,activeNestedTarget:m}){const[h,g]=U.useState(null),b=Sa.useRef([]);Ys(m,"story",g,b);function w(f){g(S=>S===f?null:f)}return o.jsx("section",{className:"block foldable-stories",children:r.map((f,S)=>{const j=h===S,O=gn(u,"story",S,f.title);return o.jsxs("div",{ref:k=>{b.current[S]=k},className:`story-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>w(S),"aria-expanded":j,children:[o.jsxs("div",{className:"bio-toggle-left",children:[o.jsx("span",{className:"bio-num",children:String(S+1).padStart(2,"0")}),o.jsxs("div",{className:"bio-toggle-text",children:[o.jsx("span",{className:"bio-name",children:f.title}),o.jsxs("span",{className:"bio-subtitle-line",children:[f.paragraphs.length," párrafos · lectura con audio"]})]})]}),o.jsxs("div",{className:"bio-toggle-right",children:[o.jsxs("div",{className:"bio-level-pills",children:[o.jsx(gr,{level:f.level}),d[O]&&o.jsx("span",{className:`story-status-pill ${d[O]}`,children:d[O]==="understood"?"Entendido":"Leído"})]}),o.jsx(Rs,{size:18,className:`bio-chevron ${j?"open":""}`})]})]}),j&&o.jsx("div",{className:"bio-body story-body",children:o.jsxs("div",{className:"bio-section story-section",children:[o.jsxs("div",{className:"bio-section-header",children:[o.jsx(gr,{level:f.level}),o.jsx("h3",{className:"bio-section-title",children:f.title}),o.jsx(Pe,{text:f.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),o.jsx(Oo,{status:d[O],onChange:k=>c?.(O,k)}),f.paragraphs.map((k,A)=>o.jsx(Hs,{text:k,paragraphClass:"bio-paragraph story-paragraph"},A))]})})]},S)})})}const cf="palabras-progress-v1";function Nf(r,u){return`${r}::${u.rank}::${u.spanish}`}function Zc(r,u){return u.sourceGroupId||r.id}function pr(r,u){return Nf(Zc(r,u),u)}function Co(r){return String(r).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const Pb=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function ev(r){const u=new Map;for(const d of r||[])for(const c of d.entries||[]){const m=Co(c.spanish);u.has(m)||u.set(m,{...c,sourceGroupId:d.id,sourceGroupTitle:d.title})}return Pb.map(d=>{const c=new Set,m=d.terms.map((h,g)=>{const b=Co(h.spanish);if(c.has(b))return null;c.add(b);const w=u.get(b),f=h.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...w||{rank:`T${g+1}`,spanish:f,english:h.english,sourceGroupId:d.id,sourceGroupTitle:d.title},topicTerm:h.spanish,topicEnglish:h.english,topicOrder:g+1}}).filter(Boolean);return{id:d.id,title:d.title,description:d.description,entries:m,isTopic:!0}})}function hn(r){return r.topicTerm||r.spanish}function qo(r){return r.topicEnglish||r.english}let Yc=null;function Jc(){return Yc||(Yc=Zg(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(r=>{const u=r.default||[];return[...u,...ev(u)]})),Yc}function qf(r,u,d=Date.now()){return Nb(r,u,d)}function av(r,u,d=Date.now()){const c={total:0,seen:0,due:0,mastered:0,byGroup:{}},m=new Set;for(const h of r||[]){const g={total:h.entries.length,seen:0,due:0,mastered:0};for(const b of h.entries){const w=pr(h,b),f=u[w],S=m.has(w);S||(m.add(w),c.total++),f?.seen&&(g.seen++,S||c.seen++,f.mastered&&(g.mastered++,S||c.mastered++),(f.dueAt||0)<=d&&(g.due++,S||c.due++))}c.byGroup[h.id]=g}return c}function df(r,u){const d=r.spanish.split(",")[0].trim();return u==="topic-work-professions"?{es:`En mi trabajo uso "${d}" con frecuencia.`,en:`At work I use "${d}" often.`}:u==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${d}" con calma.`,en:`Today I can name "${d}" calmly.`}:u==="function-words"?{es:`Uso "${d}" para unir una idea con otra.`,en:`"${d}" helps connect one idea to another.`}:/^to /.test(r.english)?{es:`Hoy necesito ${d} en una frase clara.`,en:`Today I need "${d}" in a clear sentence.`}:{es:`Escribo "${d}" en mi cuaderno de espanol.`,en:`"${d}" means ${qo(r)}.`}}function nv({onSaveWord:r,savedWords:u=[],progress:d={},onProgressChange:c,onUpdateSavedWord:m}){const[h,g]=U.useState(null),[b,w]=U.useState(""),[f,S]=U.useState(""),[j,O]=U.useState(0),[k,A]=U.useState({}),[C,Q]=U.useState(!1),[I,te]=U.useState(!1),[F,J]=U.useState(!1),[ee,se]=U.useState(0),[ae,$]=U.useState(!1);U.useEffect(()=>{let V=!0;return Jc().then(Te=>{V&&(g(Te),w(Be=>Be||Te[0]?.id||""))}),()=>{V=!1}},[]);const xe=!h,P=h?.find(V=>V.id===b)||h?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},me=U.useMemo(()=>{const V=Co(f),Te=V?P.entries.filter(Xe=>[Xe.spanish,Xe.english,Xe.topicTerm,Xe.topicEnglish,String(Xe.rank)].some(Je=>Co(Je||"").includes(V))):P.entries;if(!I)return Te;const Be=Date.now();return Te.filter(Xe=>{const Je=d[pr(P,Xe)];return Je?.seen&&(Je.dueAt||0)<=Be})},[P,f,I,d]),ye=24,qe=Math.min(j,Math.max(0,me.length-1)),we=me.slice(qe,qe+ye),ke=we.map(V=>hn(V)).join(". "),N=U.useMemo(()=>av(h||[],d),[h,d]).byGroup[P.id]||{total:P.entries.length,seen:0,due:0,mastered:0},B=74,X=420,W=Math.max(0,Math.floor(ee/B)-4),v=Math.min(me.length,W+Math.ceil(X/B)+10),G=me.slice(W,v);if(U.useEffect(()=>{O(0),A({}),se(0)},[b,f,I]),xe)return o.jsx("section",{className:"block palabras-lab",children:o.jsxs("div",{className:"palabras-empty",children:[o.jsx(Ht,{size:24}),o.jsx("p",{children:"Cargando palabras..."})]})});function K(){O(V=>V+ye>=me.length?0:V+ye),A({})}function Z(){const V=Math.max(0,me.length-ye);O(Math.floor(Math.random()*(V+1))),A({})}function le(V){const Te=`${P.id}-${V.rank}-${V.spanish}`;A(Be=>({...Be,[Te]:!Be[Te]}))}function fe(V,Te){const Be=Zc(P,V),Xe=Nf(Be,V),Je=qf(d[Xe],Te),sa={...d,[Xe]:{...Je,groupId:Be,displayGroupId:P.id,topicId:P.isTopic?P.id:void 0,spanish:hn(V),english:qo(V),rank:V.rank}};c?.(sa),A(Va=>({...Va,[`${P.id}-${V.rank}-${V.spanish}`]:!0}));const wa=u.find(Va=>Co(Va.word)===Co(hn(V)));wa?m?.(wa.word,{review:Je,difficult:Te==="hard"||Te==="again"?!0:wa.difficult}):(Te==="hard"||Te==="again")&&r?.({word:hn(V),translation:qo(V),pos:P.isTopic?`${P.title} topic`:P.title,extras:[`Rank ${V.rank}`,P.description].filter(Boolean),tags:["palabras",P.id,Be,"difficult"].filter(Boolean),review:Je,difficult:!0,savedAt:Date.now()})}function de(){if(!we.length)return;if(ad(),ae){window.speechSynthesis?.cancel(),$(!1);return}const V=we.flatMap(Te=>{const Be=df(Te,P.id);return[hn(Te),Be.es,hn(Te)]});$(!0),vf(V.join(". "),{onend:()=>$(!1),onerror:()=>$(!1)})}function He(V){const Te=Zc(P,V),Be=P.isTopic&&V.sourceGroupTitle?`Source ${V.sourceGroupTitle}`:null;r?.({word:hn(V),translation:qo(V),pos:P.isTopic?`${P.title} topic`:P.title,extras:[`Rank ${V.rank}`,P.description,Be].filter(Boolean),tags:["palabras",P.id,Te].filter(Boolean),savedAt:Date.now()})}return o.jsxs("section",{className:"block palabras-lab",children:[o.jsxs("div",{className:"palabras-toolbar",children:[o.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:h.map(V=>o.jsxs("button",{className:`palabras-tab ${V.id===P.id?"active":""}`,onClick:()=>w(V.id),role:"tab","aria-selected":V.id===P.id,children:[o.jsx("span",{children:V.title.replace(/^Group /,"G")}),o.jsx("strong",{children:V.entries.length})]},V.id))}),o.jsxs("label",{className:"palabras-search",children:[o.jsx("span",{children:"Buscar"}),o.jsx("input",{value:f,onChange:V=>S(V.target.value),placeholder:"palabra, meaning, rank..."})]})]}),o.jsxs("div",{className:"palabras-stage",children:[o.jsxs("div",{className:"palabras-stage-copy",children:[o.jsx("div",{className:"palabras-stage-kicker",children:P.isTopic?"Tema integrado":"Grupo intacto"}),o.jsx("h2",{children:P.title}),o.jsx("p",{children:P.description})]}),o.jsxs("div",{className:"palabras-stage-stats",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Mostrando"}),o.jsx("strong",{children:we.length})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Filtradas"}),o.jsx("strong",{children:me.length})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Entrada"}),o.jsx("strong",{children:me.length?qe+1:0})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Vencidas"}),o.jsx("strong",{children:N.due})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Vistas"}),o.jsx("strong",{children:N.seen})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Dominadas"}),o.jsx("strong",{children:N.mastered})]})]})]}),o.jsxs("div",{className:"palabras-actions",children:[o.jsx(Pe,{text:ke,size:"md",className:"palabras-read-btn"}),o.jsx("button",{className:`palabras-action-btn ${ae?"active":""}`,onClick:de,children:ae?"Escuchando...":"Escucha activa"}),o.jsx("button",{className:`palabras-action-btn ${I?"active":""}`,onClick:()=>te(V=>!V),children:I?"Todas":"Vencidas"}),o.jsx("button",{className:"palabras-action-btn",onClick:()=>Q(V=>!V),children:C?"Ocultar ingles":"Mostrar ingles"}),o.jsx("button",{className:"palabras-action-btn",onClick:K,children:"Siguiente ronda"}),o.jsx("button",{className:"palabras-action-btn",onClick:Z,children:"Barajar"}),o.jsx("button",{className:`palabras-action-btn ${F?"active":""}`,onClick:()=>J(V=>!V),children:"Lista completa"})]}),we.length?o.jsx("div",{className:"palabras-grid",children:we.map(V=>{const Te=`${P.id}-${V.rank}-${V.spanish}`,Be=C||k[Te],Xe=d[pr(P,V)],Je=df(V,P.id);return o.jsxs("article",{className:`palabra-card ${Be?"revealed":""}`,children:[o.jsxs("button",{className:"palabra-main",onClick:()=>le(V),children:[o.jsxs("span",{className:"palabra-rank",children:["#",V.rank]}),o.jsx("span",{className:"palabra-es",children:hn(V)}),o.jsx("span",{className:"palabra-en",children:Be?qo(V):"..."}),Be&&o.jsxs("span",{className:"palabra-example",children:[o.jsx("span",{children:Je.es}),o.jsx("em",{children:Je.en})]})]}),o.jsxs("div",{className:"palabra-card-actions",children:[o.jsx(Pe,{text:hn(V)}),o.jsxs("button",{className:"palabra-save",onClick:()=>He(V),children:[o.jsx(Lo,{size:13}),"Memoria"]})]}),o.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(sa=>o.jsx("button",{onClick:()=>fe(V,sa),children:sa==="again"?"Again":sa==="hard"?"Hard":sa==="good"?"Good":"Easy"},sa))}),Xe?.seen&&o.jsx("div",{className:"palabra-review-state",children:Xe.mastered?"Dominada":`Due ${new Date(Xe.dueAt||Date.now()).toLocaleDateString()}`})]},Te)})}):o.jsxs("div",{className:"palabras-empty",children:[o.jsx(Ht,{size:24}),o.jsx("p",{children:"No words match this search in the selected group."})]}),F&&o.jsxs("div",{className:"palabras-browser",children:[o.jsxs("div",{className:"palabras-browser-head",children:[o.jsx("span",{children:"Lista virtual"}),o.jsxs("strong",{children:[me.length," palabras"]})]}),o.jsx("div",{className:"palabras-virtual-list",style:{height:X},onScroll:V=>se(V.currentTarget.scrollTop),children:o.jsx("div",{style:{height:me.length*B,position:"relative"},children:o.jsx("div",{style:{transform:`translateY(${W*B}px)`},children:G.map(V=>{const Te=d[pr(P,V)];return o.jsxs("div",{className:"palabras-virtual-row",style:{height:B},children:[o.jsxs("span",{className:"palabra-rank",children:["#",V.rank]}),o.jsx("strong",{children:hn(V)}),o.jsx("span",{children:qo(V)}),o.jsx("button",{onClick:()=>fe(V,"good"),children:Te?.seen?"Actualizar":"Visto"})]},`${V.rank}-${V.spanish}`)})})})})]})]})}function Oo({status:r,onChange:u}){const d=r==="read"||r==="understood",c=r==="understood";function m(){u?.(r==="read"?null:"read")}function h(){u?.(r==="understood"?"read":"understood")}return o.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[o.jsx("span",{className:"lesson-status-label",children:"Estado"}),o.jsxs("button",{className:`lesson-status-btn ${d?"active":""}`,onClick:m,children:[o.jsx(mr,{size:14}),"Leído"]}),o.jsxs("button",{className:`lesson-status-btn understood ${c?"active":""}`,onClick:h,children:[o.jsx(Wc,{size:14}),"Entendido"]})]})}function tv({chapter:r,sectionId:u,section:d,activeNestedTarget:c,onOpenSection:m,onSaveWord:h,savedWords:g=[],onUpdateSavedWord:b,palabrasProgress:w,onPalabrasProgressChange:f,lessonStatuses:S={},onLessonStatusChange:j}){const O=r.blocks.some(k=>k.type==="foldable-grammar"||k.type==="foldable-stories"||k.type==="foldable-bios"||k.type==="foldable-poems"||k.type==="foldable-songs");return o.jsxs("article",{className:"chapter-body",children:[o.jsxs("header",{className:"chapter-header",children:[d&&o.jsxs("div",{className:"lesson-breadcrumb",children:[o.jsx("button",{type:"button",onClick:()=>m?.(d),children:d.label}),o.jsx(mt,{size:14}),o.jsx("span",{children:c?.title||r.title})]}),o.jsxs("div",{className:"chapter-icon-row",children:[u&&o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(Kc,{id:u,size:22})}),o.jsxs("div",{className:"chapter-level-tag",children:[r.rank?`Nº ${String(r.rank).padStart(2,"0")} · `:"","Nivel ",r.level]})]}),o.jsx("h1",{className:"chapter-title",children:r.title}),r.subtitle&&o.jsx("p",{className:"chapter-subtitle",children:r.subtitle}),!O&&o.jsx(Oo,{status:S[r.id],onChange:k=>j?.(r.id,k)}),o.jsx("div",{className:"chapter-rule"})]}),r.intro&&o.jsx("p",{className:"chapter-intro drop-cap",children:o.jsx(la,{text:r.intro})}),r.blocks.map((k,A)=>{switch(k.type){case"indicative-hero":return o.jsx(ov,{block:k},A);case"indicative-tense-cards":return o.jsx(sv,{block:k},A);case"participio-section":return o.jsx(iv,{block:k},A);case"indicative-timeline":return o.jsx(rv,{block:k},A);case"conjugation":return o.jsxs("section",{className:"block",children:[o.jsx("h2",{className:"block-heading",children:k.title}),o.jsx("div",{className:"conjugation-grid",children:k.verbs.map((C,Q)=>o.jsxs("div",{className:"conjugation-card",children:[o.jsx("div",{className:"conjugation-verb",children:C.name}),o.jsx("ul",{className:"conjugation-list",children:C.forms.map((I,te)=>o.jsx("li",{children:I},te))})]},Q))})]},A);case"examples":return o.jsxs("section",{className:"block",children:[o.jsx("h2",{className:"block-heading",children:k.title}),o.jsx("ul",{className:"examples-list",children:k.pairs.map((C,Q)=>o.jsx("li",{className:"example-item",children:o.jsx(ft,{es:C.es,en:C.en,esClass:"example-es",enClass:"example-en"})},Q))})]},A);case"rule":return o.jsx("section",{className:"block",children:o.jsx("dl",{className:"rule-list",children:k.items.map((C,Q)=>o.jsxs("div",{className:"rule-row",children:[o.jsx("dt",{children:C.label}),o.jsx("dd",{children:C.value})]},Q))})},A);case"reading":return o.jsx("section",{className:"block reading-block",children:k.paragraphs.map((C,Q)=>o.jsx(Hs,{text:C,paragraphClass:"reading-paragraph"},Q))},A);case"foldable-poems":return o.jsx(Zb,{poems:k.poems,chapterId:r.id,lessonStatuses:S,onLessonStatusChange:j,activeNestedTarget:c},A);case"foldable-songs":return o.jsx(Jb,{songs:k.songs,chapterId:r.id,lessonStatuses:S,onLessonStatusChange:j,activeNestedTarget:c},A);case"foldable-bios":return o.jsx($b,{bios:k.bios,chapterId:r.id,lessonStatuses:S,onLessonStatusChange:j,activeNestedTarget:c},A);case"foldable-grammar":return o.jsx(Wb,{lessons:k.lessons,chapterId:r.id,lessonStatuses:S,onLessonStatusChange:j,activeNestedTarget:c},A);case"foldable-stories":return o.jsx(Fb,{stories:k.stories,chapterId:r.id,lessonStatuses:S,onLessonStatusChange:j,activeNestedTarget:c},A);case"glossary":return o.jsxs("section",{className:"block",children:[o.jsxs("h2",{className:"block-heading",children:[o.jsx(Mo,{size:16,className:"inline-icon"})," Glosario"]}),o.jsx("div",{className:"glossary-grid",children:k.words.map((C,Q)=>o.jsxs("div",{className:"glossary-row",children:[o.jsx("span",{className:"glossary-es",children:C.es}),o.jsx("span",{className:"glossary-dash",children:"—"}),o.jsx("span",{className:"glossary-en",children:C.en})]},Q))})]},A);case"vocab":return o.jsx("section",{className:"block",children:o.jsx("div",{className:"vocab-grid",children:k.columns.map((C,Q)=>o.jsxs("div",{className:"vocab-row",children:[o.jsx(Pe,{text:C.es}),o.jsx("span",{className:"vocab-es",children:C.es}),o.jsx("span",{className:"vocab-en",children:C.en})]},Q))})},A);case"vocab-lab":return o.jsx(nv,{onSaveWord:h,savedWords:g,progress:w,onProgressChange:f,onUpdateSavedWord:b},A);case"phraselist":return o.jsx("section",{className:"block",children:o.jsx("ul",{className:"phrase-list",children:k.phrases.map((C,Q)=>o.jsxs("li",{className:"phrase-item",children:[o.jsx("span",{className:"phrase-num",children:String(Q+1).padStart(2,"0")}),o.jsxs("div",{className:"phrase-content",children:[o.jsxs("p",{className:"phrase-es",children:[o.jsx(Pe,{text:C.es,className:"paragraph-speak"}),o.jsx(la,{text:C.es})]}),o.jsx("p",{className:"phrase-en",children:C.en})]})]},Q))})},A);case"expressions-library":return o.jsx(hv,{library:k.library},A);case"steps":return o.jsx("section",{className:"block",children:o.jsx("ol",{className:"steps-list",children:k.steps.map((C,Q)=>o.jsxs("li",{className:"step-item",children:[o.jsx("div",{className:"step-num",children:Q+1}),o.jsxs("div",{children:[o.jsx("h3",{className:"step-title",children:C.title}),o.jsx("p",{className:"step-text",children:C.text})]})]},Q))})},A);case"big-takeaways":return o.jsx("section",{className:"block",children:o.jsx("div",{className:"big-takeaways",children:k.items.map((C,Q)=>o.jsxs("div",{className:"big-takeaway-card",children:[o.jsx("div",{className:"big-takeaway-num",children:C.n}),o.jsx("h3",{className:"big-takeaway-title",children:C.title}),o.jsx("p",{className:"big-takeaway-text",children:C.text})]},Q))})},A);case"tip":return o.jsxs("aside",{className:"block tip-block",children:[o.jsx(Uo,{size:18,className:"tip-icon"}),o.jsx("p",{children:k.text})]},A);case"takeaway":return o.jsxs("aside",{className:"block takeaway-block",children:[o.jsxs("div",{className:"takeaway-label",children:[o.jsx(Pc,{size:14})," Lo que te llevas"]}),o.jsx("p",{children:k.text})]},A);case"verb-table":{const C=Object.fromEntries(k.tenses.map(I=>[I.name,I])),Q=k.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return o.jsxs("section",{className:"block verb-table-block",children:[k.participles&&o.jsxs("div",{className:"participles",children:[o.jsx("div",{className:"participles-label",children:"Participios"}),o.jsxs("div",{className:"participles-rows",children:[o.jsxs("div",{className:"participles-row",children:[o.jsx("span",{className:"participles-key",children:"Presente"}),o.jsx("span",{className:"participles-val",children:o.jsx(Da,{raw:k.participles.present})})]}),o.jsxs("div",{className:"participles-row",children:[o.jsx("span",{className:"participles-key",children:"Pasado"}),o.jsx("span",{className:"participles-val",children:o.jsx(Da,{raw:k.participles.past})})]})]})]}),o.jsxs("div",{className:"verb-table-header",children:[o.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",o.jsxs("em",{children:['"',r.title.toLowerCase(),'"']})]}),o.jsx(Qb,{tenses:k.tenses,verbName:r.title})]}),o.jsx("div",{className:"tense-stack",children:Q.map((I,te)=>{const F=I.map(J=>C[J]).filter(Boolean);if(F.length===0)return null;if(F.length===1){const J=F[0];return o.jsxs("div",{className:"tense-block",children:[o.jsxs("div",{className:"tense-name-row",children:[o.jsx("h3",{className:"tense-name",children:J.name}),o.jsx(Pe,{text:J.forms.map(ee=>`${ee.p} ${Ao(ee.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),o.jsx("div",{className:"tense-rows",children:J.forms.map((ee,se)=>o.jsxs(Sa.Fragment,{children:[o.jsx("span",{className:"tense-pronoun",children:ee.p}),o.jsxs("span",{className:"tense-form",children:[o.jsx(Da,{raw:ee.f}),o.jsx(Pe,{text:Ao(ee.f),className:"conjugation-speak"})]})]},se))})]},te)}return o.jsxs("table",{className:"tense-group-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{"aria-hidden":"true"}),F.map((J,ee)=>o.jsx("th",{scope:"col",children:o.jsxs("div",{className:"tg-th-inner",children:[o.jsx("span",{children:J.name}),o.jsx(Pe,{text:J.forms.map(se=>`${se.p} ${Ao(se.f)}`).join(". ")})]})},ee))]})}),o.jsx("tbody",{children:F[0].forms.map((J,ee)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",className:"tg-pronoun",children:F[0].forms[ee].p}),F.map((se,ae)=>o.jsxs("td",{className:"tg-form",children:[o.jsx(Da,{raw:se.forms[ee].f}),o.jsx(Pe,{text:Ao(se.forms[ee].f),className:"conjugation-speak"})]},ae))]},ee))})]},te)})}),o.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",o.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},A)}case"verb-uses":return o.jsxs("section",{className:"block verb-uses-block",children:[k.heading&&o.jsx("h2",{className:"verb-uses-heading",children:k.heading}),k.categories.map((C,Q)=>o.jsxs("div",{className:"vu-category",children:[o.jsxs("div",{className:"vu-category-head",children:[o.jsx("div",{className:"vu-category-label",children:C.label}),C.note&&o.jsx("div",{className:"vu-category-note",children:C.note})]}),o.jsx("div",{className:"vu-senses",children:C.senses.map((I,te)=>o.jsxs("div",{className:"vu-sense",children:[o.jsx("div",{className:"vu-sense-num",children:I.n}),o.jsxs("div",{className:"vu-sense-body",children:[o.jsx("div",{className:"vu-sense-meaning",children:I.meaning}),I.subnote&&o.jsx("div",{className:"vu-sense-subnote",children:I.subnote}),o.jsx("ul",{className:"vu-examples",children:I.examples.map((F,J)=>o.jsx("li",{children:o.jsx(ft,{es:F.es,en:F.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},J))})]})]},te))})]},Q))]},A);case"subjunctive-hero":return o.jsx(lv,{block:k},A);case"golden-rule":return o.jsx(cv,{block:k},A);case"subjunctive-tense-cards":return o.jsx(dv,{cards:k.cards},A);case"trigger-grid":return o.jsx(uv,{block:k},A);case"conditional-pattern":return o.jsx(pv,{block:k},A);case"tips-grid":return o.jsx(mv,{tips:k.tips},A);case"choice-quiz":return o.jsx(fv,{block:k},A);case"lesson-section":return o.jsxs("section",{className:"block lesson-section",children:[k.heading&&o.jsx("h2",{className:"lesson-heading",children:k.heading}),k.text&&o.jsx("p",{className:"lesson-text",children:o.jsx(la,{text:k.text})}),k.paragraphs&&k.paragraphs.map((C,Q)=>o.jsx("p",{className:"lesson-text",children:o.jsx(la,{text:C})},Q)),k.table&&o.jsx("div",{className:"lesson-table-wrap",children:o.jsxs("table",{className:"lesson-table",children:[k.table.headers&&o.jsx("thead",{children:o.jsx("tr",{children:k.table.headers.map((C,Q)=>o.jsx("th",{children:C},Q))})}),o.jsx("tbody",{children:k.table.rows.map((C,Q)=>o.jsx("tr",{children:C.map((I,te)=>o.jsx("td",{children:te===0?I:o.jsx(Da,{raw:String(I)})},te))},Q))})]})}),k.examples&&o.jsx("ul",{className:"lesson-examples",children:k.examples.map((C,Q)=>o.jsx("li",{children:o.jsx(ft,{es:C.es,en:C.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},Q))})]},A);default:return null}}),!O&&o.jsx(Sf,{source:r,title:`Practica: ${r.title}`})]})}function ov({block:r}){return o.jsxs("section",{className:"block indicative-hero-block",children:[o.jsx("div",{className:"indicative-eyebrow",children:r.eyebrow}),o.jsx("h2",{children:r.title}),o.jsx("p",{children:o.jsx(la,{text:r.text})}),o.jsx("div",{className:"indicative-formula",children:r.formula.map((u,d)=>o.jsx("span",{className:u==="+"||u==="="?"operator":"",children:u},`${u}-${d}`))}),o.jsx("div",{className:"indicative-tags",children:r.tags.map(u=>o.jsx("span",{children:u},u))})]})}function sv({block:r}){const[u,d]=U.useState(0);return o.jsxs("section",{className:"block indicative-tense-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.title}),o.jsx("div",{className:"indicative-card-grid",children:r.cards.map((c,m)=>o.jsxs("article",{className:`indicative-card ${c.tone} ${u===m?"active":""}`,onClick:()=>d(m),children:[o.jsxs("header",{className:"indicative-card-head",children:[o.jsx("div",{className:"indicative-card-mark",children:String(m+1).padStart(2,"0")}),o.jsxs("div",{children:[o.jsx("h3",{children:c.title}),o.jsx("p",{children:c.english})]})]}),o.jsx("p",{className:"indicative-card-use",children:o.jsx(la,{text:c.use})}),o.jsx("table",{className:"indicative-conj-table",children:o.jsx("tbody",{children:c.forms.map(([h,g])=>o.jsxs("tr",{children:[o.jsx("td",{children:h}),o.jsx("td",{children:o.jsx(Da,{raw:g})})]},`${c.title}-${h}`))})}),o.jsx("div",{className:"indicative-example",children:o.jsx(ft,{es:c.example.es,en:c.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})})]},c.title))})]})}function iv({block:r}){return o.jsxs("section",{className:"block participle-workshop-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.title}),o.jsx("p",{className:"lesson-text",children:o.jsx(la,{text:r.text})}),o.jsxs("div",{className:"participle-workshop-grid",children:[o.jsxs("article",{children:[o.jsx("h3",{children:"Participios regulares"}),o.jsx("table",{children:o.jsx("tbody",{children:r.regular.map(([u,d])=>o.jsxs("tr",{children:[o.jsx("td",{children:u}),o.jsx("td",{children:o.jsx(Da,{raw:d})})]},`${u}-${d}`))})})]}),o.jsxs("article",{children:[o.jsx("h3",{children:"Participios irregulares"}),o.jsx("table",{children:o.jsx("tbody",{children:r.irregular.map(([u,d])=>o.jsxs("tr",{children:[o.jsx("td",{children:u}),o.jsx("td",{children:o.jsx(Da,{raw:d})})]},`${u}-${d}`))})})]})]})]})}function rv({block:r}){return o.jsxs("section",{className:"block indicative-timeline-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.title}),o.jsx("div",{className:"indicative-timeline-wrap",children:o.jsx("div",{className:"indicative-timeline-line",children:r.events.map(u=>o.jsxs("div",{className:`indicative-timeline-event ${u.lane} ${u.tone}`,style:{left:`${u.position}%`},children:[o.jsx("span",{className:"timeline-dot"}),o.jsx("strong",{children:u.label}),o.jsx("em",{children:u.sub})]},u.label))})})]})}function lv({block:r}){return o.jsxs("section",{className:"block subj-hero-block",children:[o.jsx("div",{className:"subj-hero-eyebrow",children:r.eyebrow}),o.jsx("h2",{children:r.title}),o.jsx("p",{className:"subj-hero-accent",children:r.accent}),o.jsx("div",{className:"subj-hero-formula",children:r.formula}),o.jsx("ul",{children:r.points.map(u=>o.jsx("li",{children:o.jsx(la,{text:u})},u))})]})}function cv({block:r}){return o.jsxs("section",{className:"block golden-rule-block",children:[o.jsx("div",{className:"golden-rule-label",children:r.title}),o.jsx("p",{children:o.jsx(la,{text:r.text})}),o.jsx("div",{className:"golden-rule-examples",children:r.examples.map((u,d)=>o.jsxs("div",{className:"golden-rule-pair",children:[o.jsxs("div",{children:[o.jsx("span",{children:"No"}),o.jsx(Da,{raw:u.bad})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Sí"}),o.jsx(Da,{raw:u.good})]})]},d))})]})}function dv({cards:r}){const[u,d]=U.useState(0);return o.jsxs("section",{className:"block subj-tense-block",children:[o.jsx("div",{className:"subj-tense-tabs",children:r.map((c,m)=>o.jsxs("button",{className:`${c.tone} ${u===m?"active":""}`,onClick:()=>d(m),children:[o.jsx("span",{children:m+1}),c.title]},c.title))}),o.jsxs("div",{className:`subj-tense-card ${r[u].tone}`,children:[o.jsxs("div",{className:"subj-tense-head",children:[o.jsxs("div",{children:[o.jsx("h2",{children:r[u].title}),o.jsx("p",{children:r[u].english})]}),o.jsx("span",{children:r[u].mainClause})]}),o.jsx("div",{className:"subj-tense-formula",children:o.jsx(Da,{raw:r[u].formula})}),o.jsx("p",{className:"subj-tense-use",children:o.jsx(la,{text:r[u].use})}),o.jsxs("div",{className:"subj-tense-grid",children:[o.jsx("table",{children:o.jsx("tbody",{children:r[u].forms.map(([c,m])=>o.jsxs("tr",{children:[o.jsx("td",{children:c}),o.jsx("td",{children:o.jsx(Da,{raw:m})})]},`${c}-${m}`))})}),o.jsx("div",{className:"subj-tense-examples",children:r[u].examples.map(c=>o.jsx("div",{children:o.jsx(ft,{es:c.es,en:c.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},c.es))})]})]})]})}function uv({block:r}){return o.jsxs("section",{className:"block trigger-grid-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.heading}),o.jsx("p",{className:"lesson-text",children:o.jsx(la,{text:r.text})}),o.jsx("div",{className:"trigger-grid",children:r.categories.map(u=>o.jsxs("article",{className:"trigger-card",children:[o.jsx("h3",{children:u.title}),o.jsx("div",{className:"trigger-expression",children:u.trigger}),u.examples.map(d=>o.jsx("div",{className:"trigger-example",children:o.jsx(ft,{es:d.es,en:d.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},d.es))]},u.title))})]})}function pv({block:r}){return o.jsxs("section",{className:"block conditional-pattern-block",children:[o.jsx("h2",{children:r.heading}),o.jsx("div",{className:"conditional-formula",children:o.jsx(Da,{raw:r.formula})}),o.jsx("p",{children:o.jsx(la,{text:r.text})}),o.jsx("div",{className:"conditional-examples",children:r.examples.map((u,d)=>o.jsxs("article",{children:[o.jsx("div",{className:"conditional-num",children:String(d+1).padStart(2,"0")}),o.jsx(ft,{es:u.es,en:u.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"}),o.jsx("p",{children:u.note})]},u.es))})]})}function mv({tips:r}){return o.jsx("section",{className:"block tips-grid-block",children:r.map(u=>o.jsxs("article",{className:"subj-tip-card",children:[o.jsx(Uo,{size:18}),o.jsx("h3",{children:u.title}),o.jsx("p",{children:o.jsx(la,{text:u.text})})]},u.title))})}function fv({block:r}){const[u,d]=U.useState({}),[c,m]=U.useState(!1),h=r.questions.reduce((b,w,f)=>ba(u[f])===ba(w.answer)?b+1:b,0);function g(){d({}),m(!1)}return o.jsxs("section",{className:"block contextual-quiz-block",children:[o.jsxs("div",{className:"contextual-quiz-head",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"lesson-mini-kicker",children:[o.jsx(Ht,{size:13})," Prueba contextual"]}),o.jsx("h2",{children:r.title})]}),o.jsxs("button",{onClick:g,children:[o.jsx(ed,{size:14}),"Reiniciar"]})]}),o.jsx("div",{className:"contextual-quiz-list",children:r.questions.map((b,w)=>{const f=u[w],S=f&&ba(f)===ba(b.answer);return o.jsxs("article",{className:`contextual-quiz-card ${f?S?"correct":"wrong":""}`,children:[o.jsx("div",{className:"contextual-quiz-num",children:String(w+1).padStart(2,"0")}),o.jsx("p",{children:b.prompt}),o.jsx("div",{className:"contextual-quiz-choices",children:b.choices.map(j=>o.jsx("button",{className:f===j?"active":"",onClick:()=>d(O=>({...O,[w]:j})),children:j},j))}),f&&o.jsxs("div",{className:"contextual-quiz-feedback",children:[o.jsx("strong",{children:S?"Correcto.":`Correcto: ${b.answer}.`}),o.jsx("span",{children:b.explanation})]})]},b.prompt)})}),o.jsxs("div",{className:"contextual-quiz-score",children:[o.jsxs("span",{children:[Object.keys(u).length," / ",r.questions.length," respondidas"]}),o.jsx("button",{onClick:()=>m(!0),children:"Ver resultado"}),c&&o.jsxs("strong",{children:[h," / ",r.questions.length]})]})]})}function hv({library:r}){const[u,d]=U.useState(0),[c,m]=U.useState(""),[h,g]=U.useState(0),b=r.perPage||36,w=r.groups[u]||r.groups[0],f=U.useMemo(()=>{const A=ba(c.trim());return A?w.entries.filter(C=>ba(C.es).includes(A)||ba(C.en).includes(A)||ba(C.example).includes(A)):w.entries},[w,c]),S=Math.max(1,Math.ceil(f.length/b)),j=Math.min(h,S-1),O=f.slice(j*b,(j+1)*b);U.useEffect(()=>{g(0)},[u,c]);function k(A){d(A)}return o.jsxs("section",{className:"block expressions-library-block",children:[o.jsxs("div",{className:"expressions-hero",children:[o.jsx("div",{className:"expressions-eye",children:r.eyebrow}),o.jsx("h2",{children:r.title}),o.jsx("p",{children:r.subtitle}),o.jsx("div",{className:"expressions-stats",children:r.groups.map(A=>o.jsxs("div",{children:[o.jsx("strong",{children:A.count}),o.jsx("span",{children:A.title})]},A.id))})]}),o.jsx("div",{className:"expressions-tabs",children:r.groups.map((A,C)=>o.jsxs("button",{className:`${A.tone} ${u===C?"active":""}`,onClick:()=>k(C),children:[o.jsx("span",{children:C+1}),A.shortTitle," (",A.count,")"]},A.id))}),o.jsxs("div",{className:"expressions-toolbar",children:[o.jsxs("label",{children:[o.jsx(Vc,{size:14}),o.jsx("input",{value:c,onChange:A=>m(A.target.value),placeholder:"Search expressions, meanings..."})]}),o.jsxs("div",{className:"expressions-count",children:[f.length," ",f.length===1?"expression":"expressions"]}),o.jsxs("div",{className:"expressions-pager",children:[o.jsx("button",{disabled:j===0,onClick:()=>g(A=>Math.max(0,A-1)),children:"Prev"}),o.jsxs("span",{children:[j+1," / ",S]}),o.jsx("button",{disabled:j>=S-1,onClick:()=>g(A=>Math.min(S-1,A+1)),children:"Next"})]})]}),O.length>0?o.jsx("div",{className:"expressions-grid",children:O.map(A=>{const C=`${w.id}-${A.rank}`;return o.jsxs("article",{className:`expression-card ${w.tone}`,children:[o.jsxs("header",{children:[o.jsxs("span",{className:"expression-rank",children:["#",A.rank]}),o.jsxs("div",{children:[o.jsxs("h3",{children:[o.jsx(Pe,{text:A.es}),o.jsx(la,{text:A.es})]}),o.jsx("p",{children:A.en})]})]}),A.example&&o.jsxs("div",{className:"expression-example",children:[o.jsx("div",{className:"expression-example-label",children:"Ejemplo"}),o.jsxs("p",{children:[o.jsx(Pe,{text:A.example}),o.jsx(la,{text:A.example})]})]})]},C)})}):o.jsxs("div",{className:"expressions-empty",children:[o.jsx(Vc,{size:24}),"No expressions found. Try a different search."]}),o.jsx("div",{className:"expressions-foot",children:r.sourceNote})]})}function gv({savedWords:r,onSave:u,onRemove:d}){const[c,m]=U.useState(null),[h,g]=U.useState([]),b=Sa.useRef(null),w=Sa.useRef(r),f=Sa.useRef(h),S=nd,j=yf,[O,k]=U.useState(null);if(U.useEffect(()=>{w.current=r},[r]),U.useEffect(()=>{f.current=h},[h]),U.useEffect(()=>{let $=!0;return Jc().then(xe=>{$&&g(xe)}).catch(()=>{$&&g([])}),()=>{$=!1}},[]),U.useEffect(()=>{let $="";async function xe(qe,we,ke){const D=S(qe);if(!D||D.length<2)return;k(null);let N=of(D,w.current,f.current);if(!N&&f.current.length===0)try{const B=await Jc();f.current=B,g(B),N=of(D,w.current,B)}catch{}if(N){m({word:N.matchedWord||D,x:we,y:ke,loading:!1,result:N,error:!1});return}m({word:D,x:we,y:ke,loading:!0,result:null,error:!1});try{const B=await j(D);m(X=>X&&X.word===D?{...X,loading:!1,result:B,error:!B}:X)}catch{m(X=>X&&X.word===D?{...X,loading:!1,error:!0}:X)}}function P(qe){const we=qe.target.closest&&qe.target.closest("[data-dict-word]");if(!we)return;const ke=S(we.dataset.dictWord||we.textContent||"");if(!ke||ke.length<2)return;const D=window.getSelection?.();if(D&&!D.isCollapsed&&S(D.toString()).length>1)return;qe.stopPropagation();const N=we.getBoundingClientRect(),B=N.left+N.width/2,X=N.bottom+10;xe(ke,B,X)}function me(){clearTimeout(me._t),me._t=setTimeout(()=>{const qe=window.getSelection(),we=qe?.toString()||"",ke=S(we);if(!ke||ke.length<2||ke.split(/\s+/).length>3){$&&k(null),$="";return}if(ke===$)return;$=ke;let D=window.innerWidth/2,N=120;try{const W=qe.getRangeAt(0).getBoundingClientRect();D=W.left+W.width/2,N=W.top-6}catch{}const B=96;D=Math.max(B/2+8,Math.min(D,window.innerWidth-B/2-8)),N<50&&(N=50),k({word:ke,x:D,y:N})},200)}function ye(qe){const we=b.current&&b.current.contains(qe.target),ke=qe.target.closest&&qe.target.closest(".dict-floating-btn"),D=qe.target.closest&&qe.target.closest("[data-dict-word]");!we&&!ke&&!D&&(m(null),k(null),$="")}return window.__bookOpenPopup=xe,document.addEventListener("selectionchange",me),document.addEventListener("pointerup",P),document.addEventListener("pointerdown",ye),()=>{document.removeEventListener("selectionchange",me),document.removeEventListener("pointerup",P),document.removeEventListener("pointerdown",ye),delete window.__bookOpenPopup}},[]),!c&&!O)return null;if(!c&&O)return o.jsxs("button",{className:"dict-floating-btn",style:{left:O.x,top:O.y},onClick:$=>{$.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(O.word,O.x,O.y+50)},onPointerDown:$=>$.stopPropagation(),children:[o.jsx(Mo,{size:14}),o.jsx("span",{children:"Traducir"})]});const A=290,C=Math.max(A/2+8,Math.min(c.x,window.innerWidth-A/2-8)),Q=c.y+220>window.innerHeight,I=Q?"auto":c.y,te=Q?Math.max(12,window.innerHeight-c.y+12):"auto",F=new Set(vr(c.word)),J=Rn(c.word),ee=r.find($=>Rn($.word)===J)||r.find($=>F.has(hr($.word))),se=!!ee;function ae(){se?d(ee.word):u({word:c.word,translation:c.result?.main||"",pos:c.result?.pos||"",extras:c.result?.extras||[],savedAt:Date.now()})}return o.jsxs("div",{ref:b,className:"dict-popup",style:{left:C,top:I==="auto"?"auto":I,bottom:te==="auto"?"auto":te},children:[o.jsxs("div",{className:"dict-header",children:[o.jsx("span",{className:"dict-word",children:c.word}),o.jsx("button",{className:"dict-close-btn",onClick:()=>m(null),"aria-label":"Close",children:o.jsx(Gn,{size:14})})]}),o.jsxs("div",{className:"dict-body",children:[c.loading&&o.jsxs("div",{className:"dict-loading",children:[o.jsx("span",{className:"dict-spinner"}),o.jsx("span",{children:"Looking up…"})]}),!c.loading&&c.error&&o.jsxs("div",{className:"dict-fallback",children:[o.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),o.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Mo,{size:14}),'Buscar "',c.word,'" en SpanishDict']})]}),!c.loading&&c.result&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`dict-main-translation ${c.result.isDefinition?"is-definition":""}`,children:c.result.main}),c.result.extras?.length>0&&o.jsx("div",{className:"dict-extras",children:c.result.extras.map(($,xe)=>o.jsx("span",{className:"dict-extra-tag",children:$},xe))}),c.result.meanings?.length>0&&o.jsx("ul",{className:"dict-meanings",children:c.result.meanings.map(($,xe)=>o.jsx("li",{className:"dict-meaning-item",children:$},xe))}),c.result.examples?.length>0&&o.jsxs("div",{className:"dict-examples",children:[o.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),c.result.examples.map(($,xe)=>o.jsxs("div",{className:"dict-example",children:[o.jsx("div",{className:"dict-example-es",children:$.es}),o.jsx("div",{className:"dict-example-en",children:$.en})]},xe))]})]})]}),!c.loading&&o.jsxs("button",{className:`dict-save-btn ${se?"saved":""}`,onClick:ae,"aria-label":se?"Remove from Memoria":"Save to Memoria",children:[o.jsx(Lo,{size:14,className:se?"filled":""}),se?"Guardado en Memoria ✓":c.result?"Guardar en Memoria":"Guardar palabra"]}),o.jsx("div",{className:"dict-footer",children:o.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Mo,{size:12}),"Ver en SpanishDict"]})})]})}function bv({savedWords:r,onRemove:u,onClear:d,onUpdateWord:c}){const[m,h]=U.useState({}),[g,b]=U.useState("grid"),[w,f]=U.useState(""),[S,j]=U.useState("ALL"),[O,k]=U.useState(0),[A,C]=U.useState(!1),[Q,I]=U.useState(""),[te,F]=U.useState(null);function J(N){h(B=>({...B,[N]:!B[N]}))}function ee(N){F({type:"word",word:N})}function se(){F({type:"clear"})}function ae(){te?.type==="word"&&u?.(te.word),te?.type==="clear"&&d?.(),F(null)}const $=[...r].sort((N,B)=>{const X=N.review?.seen&&(N.review?.dueAt||0)<=Date.now(),W=B.review?.seen&&(B.review?.dueAt||0)<=Date.now();return X!==W?X?-1:1:B.savedAt-N.savedAt}),xe=U.useMemo(()=>{const N=new Set;for(const B of $)Os(B).forEach(X=>N.add(X));return[...N].sort()},[$]),P=U.useMemo(()=>{const N=w.trim().toLowerCase();return $.filter(B=>{const X=Os(B),W=S==="ALL"||X.includes(S),v=!N||B.word.toLowerCase().includes(N)||(B.translation||"").toLowerCase().includes(N)||X.some(G=>G.toLowerCase().includes(N));return W&&v})},[$,w,S]),me=P[O%Math.max(1,P.length)],ye=U.useMemo(()=>jf($),[$]);U.useEffect(()=>{k(0),C(!1)},[w,S,r.length]);function qe(N){const B=Q.trim().toLowerCase().replace(/\s+/g,"-");if(!B)return;const X=r.find(v=>v.word===N),W=Array.from(new Set([...X?.tags||[],B]));c?.(N,{tags:W}),I("")}function we(N,B){const X=r.find(W=>W.word===N);c?.(N,{[B]:!X?.[B]})}function ke(N,B){const X=r.find(v=>v.word===N),W=qf(X?.review,B);c?.(N,{review:W,difficult:B==="hard"?!0:X?.difficult}),D()}function D(){k(N=>(N+1)%Math.max(1,P.length)),C(!1)}return $.length===0?o.jsxs("div",{className:"memoria-empty",children:[o.jsx(Lo,{size:36,className:"memoria-empty-icon"}),o.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),o.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",o.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):o.jsxs("article",{className:"chapter-body memoria-view",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsx("div",{className:"chapter-meta",children:o.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),o.jsx("h1",{className:"chapter-title",children:"Memoria"}),o.jsxs("p",{className:"chapter-subtitle",children:[$.length," ",$.length===1?"palabra guardada":"palabras guardadas"]}),o.jsx("p",{className:"chapter-intro",children:g==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),o.jsxs("div",{className:"memoria-summary-strip",children:[o.jsxs("span",{children:[o.jsx(br,{size:13})," ",ye.due," due"]}),o.jsxs("span",{children:[o.jsx(cr,{size:13})," ",ye.favorite," favoritas"]}),o.jsxs("span",{children:[o.jsx(dr,{size:13})," ",ye.difficult," dificiles"]}),o.jsxs("span",{children:[o.jsx(Wc,{size:13})," ",ye.mastered," dominadas"]})]}),o.jsxs("div",{className:"memoria-view-toggle",children:[o.jsx("button",{className:`memoria-view-btn ${g==="grid"?"active":""}`,onClick:()=>b("grid"),children:"Tarjetas"}),o.jsx("button",{className:`memoria-view-btn ${g==="list"?"active":""}`,onClick:()=>b("list"),children:"Lista"}),o.jsx("button",{className:`memoria-view-btn ${g==="review"?"active":""}`,onClick:()=>b("review"),children:"Repaso"})]}),o.jsxs("div",{className:"memoria-tools",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Buscar"}),o.jsx("input",{value:w,onChange:N=>f(N.target.value),placeholder:"palabra, translation, tag..."})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Etiqueta"}),o.jsxs("select",{value:S,onChange:N=>j(N.target.value),children:[o.jsx("option",{value:"ALL",children:"Todas"}),xe.map(N=>o.jsx("option",{value:N,children:N},N))]})]}),o.jsx("button",{className:"memoria-tool-btn",onClick:()=>Mb(P),children:"Export CSV"})]}),g==="review"?o.jsx("div",{className:"memoria-review",children:me?o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`memoria-review-card ${A?"flipped":""}`,onClick:()=>C(N=>!N),children:[o.jsx("span",{className:"memoria-review-count",children:P.length?`${O+1} / ${P.length}`:"0 / 0"}),o.jsx("strong",{children:A?me.translation||"Sin traduccion":me.word}),o.jsx("em",{children:A?me.word:"toca para revelar"})]}),o.jsxs("div",{className:"memoria-review-actions",children:[o.jsx(Pe,{text:me.word,size:"md"}),o.jsx("input",{value:Q,onChange:N=>I(N.target.value),placeholder:"add-tag"}),o.jsx("button",{onClick:()=>qe(me.word),children:"Tag"}),o.jsxs("button",{onClick:()=>we(me.word,"favorite"),children:[o.jsx(cr,{size:13}),me.favorite?"Unfavorite":"Favorite"]}),o.jsxs("button",{onClick:()=>we(me.word,"difficult"),children:[o.jsx(dr,{size:13}),me.difficult?"Not hard":"Difficult"]}),o.jsx("button",{onClick:D,children:"Siguiente"})]}),o.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(N=>o.jsx("button",{onClick:()=>ke(me.word,N),children:N==="again"?"Again":N==="hard"?"Hard":N==="good"?"Good":"Easy"},N))})]}):o.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):g==="grid"?o.jsx("div",{className:"memoria-grid",children:P.map(N=>{const B=m[N.word],X=N.pending,W=Os(N);return o.jsxs("div",{className:`memoria-card ${B?"flipped":""}`,onClick:()=>J(N.word),children:[o.jsxs("div",{className:"memoria-card-inner",children:[o.jsxs("div",{className:"memoria-face front",children:[o.jsx("div",{className:"memoria-word",children:N.word}),N.pos&&o.jsx("div",{className:"memoria-pos",children:N.pos}),N.translation?o.jsx("div",{className:"memoria-front-translation",children:N.translation}):X?o.jsxs("div",{className:"memoria-front-pending",children:[o.jsx("span",{className:"dict-spinner"}),o.jsx("span",{children:"traduciendo…"})]}):o.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),W.length>0&&o.jsx("div",{className:"memoria-tags",children:W.slice(0,3).map(v=>o.jsx("span",{children:v},v))}),o.jsxs("div",{className:"memoria-label-actions",children:[o.jsx("button",{className:N.favorite?"active":"",onClick:v=>{v.stopPropagation(),we(N.word,"favorite")},"aria-label":"Toggle favorite",children:o.jsx(cr,{size:12})}),o.jsx("button",{className:N.difficult?"active hard":"",onClick:v=>{v.stopPropagation(),we(N.word,"difficult")},"aria-label":"Toggle difficult",children:o.jsx(dr,{size:12})})]})]}),o.jsxs("div",{className:"memoria-face back",children:[N.translation?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"memoria-translation",children:N.translation}),N.extras?.length>0&&o.jsx("div",{className:"memoria-extras",children:N.extras.slice(0,3).map((v,G)=>o.jsx("span",{className:"memoria-extra-tag",children:v},G))})]}):o.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),o.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(N.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:v=>v.stopPropagation(),children:"SpanishDict →"})]})]}),o.jsx("button",{className:"memoria-remove",onClick:v=>{v.stopPropagation(),ee(N.word)},"aria-label":`Remove ${N.word}`,children:o.jsx(Gn,{size:13})})]},N.word)})}):o.jsx("div",{className:"memoria-list",children:P.map(N=>{const B=N.pending,X=Os(N);return o.jsxs("div",{className:"memoria-list-row",children:[o.jsxs("div",{className:"memoria-list-main",children:[o.jsxs("div",{className:"memoria-list-es",children:[o.jsx("span",{className:"memoria-list-word",children:N.word}),N.pos&&o.jsx("span",{className:"memoria-list-pos",children:N.pos})]}),N.translation?o.jsx("div",{className:"memoria-list-en",children:N.translation}):B?o.jsxs("div",{className:"memoria-list-en pending",children:[o.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):o.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),N.extras?.length>0&&o.jsx("div",{className:"memoria-list-extras",children:N.extras.slice(0,4).map((W,v)=>o.jsx("span",{className:"memoria-list-extra-tag",children:W},v))}),X.length>0&&o.jsx("div",{className:"memoria-list-extras",children:X.map(W=>o.jsx("span",{className:"memoria-list-extra-tag",children:W},W))})]}),o.jsxs("div",{className:"memoria-list-actions",children:[o.jsx("button",{className:`memoria-list-remove ${N.favorite?"active-label":""}`,onClick:()=>we(N.word,"favorite"),"aria-label":"Toggle favorite",children:o.jsx(cr,{size:14})}),o.jsx("button",{className:`memoria-list-remove ${N.difficult?"active-hard":""}`,onClick:()=>we(N.word,"difficult"),"aria-label":"Toggle difficult",children:o.jsx(dr,{size:14})}),o.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(N.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:o.jsx(Mo,{size:14})}),o.jsx("button",{className:"memoria-list-remove",onClick:()=>ee(N.word),"aria-label":`Remove ${N.word}`,children:o.jsx(Gn,{size:14})})]})]},N.word)})}),$.length>0&&o.jsx("div",{className:"memoria-actions",children:o.jsx("button",{className:"memoria-clear-btn",onClick:se,children:"Borrar todo"})}),te&&o.jsx("div",{className:"memoria-confirm-overlay",role:"dialog","aria-modal":"true","aria-label":"Confirm Memoria deletion",children:o.jsxs("div",{className:"memoria-confirm-card",children:[o.jsx("div",{className:"memoria-confirm-kicker",children:"Confirmar"}),o.jsx("h3",{children:te.type==="word"?`Remove "${te.word}"?`:"Remove all Memoria words?"}),o.jsx("p",{children:te.type==="word"?"This word will leave your saved cards, review queue, and list.":"This clears every saved word in Memoria for this browser."}),o.jsxs("div",{className:"memoria-confirm-actions",children:[o.jsx("button",{className:"memoria-confirm-cancel",onClick:()=>F(null),children:"Keep it"}),o.jsx("button",{className:"memoria-confirm-danger",onClick:ae,children:te.type==="word"?"Remove word":"Clear all"})]})]})})]})}function vv({savedWords:r,chapters:u,entries:d=[],onEntriesChange:c}){const[m,h]=U.useState(0),[g,b]=U.useState("");async function w(k){c?.(k);try{await window.storage.set(Xc,JSON.stringify(k))}catch{}}const f=U.useMemo(()=>{const k=r.slice(0,8).map(C=>({label:`Usa "${C.word}"`,text:`Write 2 Spanish sentences using "${C.word}".`,target:C.word})),A=u.slice(0,6).map(C=>({label:C.title,text:`Write a short Spanish paragraph about "${C.title}".`,target:""}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:""},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:""},...k,...A]},[r,u]),S=f[m]||f[0],j=U.useMemo(()=>Tb(g,S),[g,S]);function O(){if(!g.trim())return;const k=[{id:`${Date.now()}`,prompt:S.text,text:g.trim(),feedback:j,createdAt:Date.now()},...d].slice(0,40);w(k),b("")}return o.jsxs("article",{className:"chapter-body writing-view",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsxs("div",{className:"chapter-icon-row",children:[o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(hf,{size:22})}),o.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),o.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),o.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),o.jsx("div",{className:"chapter-rule"})]}),o.jsxs("section",{className:"writing-board",children:[o.jsxs("div",{className:"writing-prompt-row",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Prompt"}),o.jsx("select",{value:m,onChange:k=>h(Number(k.target.value)),children:f.map((k,A)=>o.jsx("option",{value:A,children:k.label},`${k.label}-${A}`))})]}),o.jsx("p",{children:S.text})]}),o.jsx("textarea",{value:g,onChange:k=>b(k.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),o.jsxs("div",{className:"writing-feedback-grid",children:[o.jsxs("span",{children:[o.jsx("strong",{children:j.words})," words"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.sentences})," sentences"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.accents})," accents"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.connectors})," connectors"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.score})," score"]})]}),o.jsx("div",{className:"writing-tips",children:j.tips.length?j.tips.map(k=>o.jsx("span",{children:k},k)):o.jsx("span",{children:"Good shape. Read it out loud once."})}),o.jsxs("div",{className:"writing-actions",children:[o.jsx(Pe,{text:g,size:"md"}),o.jsx("button",{onClick:O,disabled:!g.trim(),children:"Save practice"})]})]}),o.jsxs("section",{className:"writing-history",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Pc,{size:18})," History"]}),d.length?d.map(k=>o.jsxs("article",{className:"writing-entry",children:[o.jsxs("div",{className:"writing-entry-meta",children:[new Date(k.createdAt).toLocaleDateString()," - ",k.feedback.words," words"]}),o.jsx("p",{children:k.prompt}),o.jsx("blockquote",{children:k.text})]},k.id)):o.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function xv({totalChapters:r,visitedCount:u,savedWordsCount:d,levelFilter:c,palabrasSummary:m,lessonSummary:h,memoriaSummary:g,learnerProfile:b,reviewQueue:w,writingCount:f,sectionProgress:S,recommendations:j,onStart:O,onOpenMemoria:k,onOpenPalabras:A,onOpenVerb:C,onOpenReading:Q,onOpenWriting:I,onSelectChapter:te}){const F=r?Math.round(u/r*100):0;return o.jsxs("article",{className:"chapter-body home-dashboard",children:[o.jsxs("header",{className:"home-hero",children:[o.jsxs("div",{className:"home-kicker",children:[o.jsx(mf,{size:18}),"Plan de estudio"]}),o.jsx("h1",{className:"home-title",children:"Learn Spanish"}),o.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),o.jsxs("div",{className:"home-actions",children:[o.jsxs("button",{className:"home-primary",onClick:O,children:["Empezar",o.jsx(mt,{size:16})]}),o.jsxs("button",{className:"home-secondary",onClick:k,children:[o.jsx(Lo,{size:15}),"Memoria"]})]})]}),o.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Progreso"}),o.jsxs("strong",{children:[F,"%"]}),o.jsxs("span",{children:[u," / ",r," capitulos"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Nivel"}),o.jsx("strong",{children:c==="ALL"?"Todo":c}),o.jsx("span",{children:"Filtro activo"})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Memoria"}),o.jsx("strong",{children:d}),o.jsxs("span",{children:[g.difficult," dificiles"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Palabras due"}),o.jsx("strong",{children:m.due}),o.jsxs("span",{children:[m.mastered," dominadas"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Lecciones"}),o.jsx("strong",{children:h.understood}),o.jsxs("span",{children:[h.read," leidas"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Writing"}),o.jsx("strong",{children:f}),o.jsx("span",{children:"entradas"})]})]}),o.jsxs("section",{className:"home-daily",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Ic,{size:18}),"Ruta diaria"]}),o.jsxs("div",{className:"home-daily-grid",children:[o.jsxs("button",{onClick:A,children:[o.jsx("span",{children:"01"}),o.jsx("strong",{children:"10 palabras"}),o.jsx("em",{children:m.due?`${m.due} vencidas`:`${m.seen} vistas`})]}),o.jsxs("button",{onClick:Q,children:[o.jsx("span",{children:"02"}),o.jsx("strong",{children:"Lectura con audio"}),o.jsx("em",{children:"lee y escucha una pagina"})]}),o.jsxs("button",{onClick:C,children:[o.jsx("span",{children:"03"}),o.jsx("strong",{children:"Un verbo"}),o.jsx("em",{children:"tabla, voz, repeticion"})]}),o.jsxs("button",{onClick:k,children:[o.jsx("span",{children:"04"}),o.jsx("strong",{children:"Memoria"}),o.jsxs("em",{children:[d," guardadas"]})]}),o.jsxs("button",{onClick:I,children:[o.jsx("span",{children:"05"}),o.jsx("strong",{children:"Writing"}),o.jsx("em",{children:"sentence practice"})]})]})]}),o.jsxs("section",{className:"home-review-queue",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Fg,{size:18}),"Cola de repaso"]}),o.jsx("div",{className:"home-review-list",children:w.slice(0,8).map((J,ee)=>o.jsxs("button",{onClick:()=>J.chapter?te(J.chapter):J.type==="writing"?I():k(),children:[o.jsx("span",{className:`review-type ${J.type}`,children:J.type}),o.jsx("strong",{children:J.title}),o.jsx("em",{children:J.detail})]},`${J.type}-${J.title}-${ee}`))}),o.jsxs("div",{className:"home-review-summary",children:[b.vocabulary.due," vocabulary due · ",b.writing.needsPractice," writing rewrites · ",b.chapters.unvisited," unread chapters"]})]}),o.jsxs("section",{className:"home-progress-map",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Fc,{size:18}),"Mapa de progreso"]}),o.jsx("div",{className:"home-progress-list",children:S.map(J=>{const ee=J.total?Math.round(J.visited/J.total*100):0;return o.jsxs("div",{className:"home-progress-row",children:[o.jsxs("div",{className:"home-progress-top",children:[o.jsx("span",{children:J.label}),o.jsxs("strong",{children:[J.visited," / ",J.total]})]}),o.jsx("div",{className:"home-progress-track",children:o.jsx("span",{style:{width:`${ee}%`}})})]},J.id)})})]}),o.jsxs("section",{className:"home-path",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(br,{size:18}),"Siguiente lectura"]}),o.jsx("div",{className:"home-recommendations",children:j.map((J,ee)=>o.jsxs("button",{className:"home-rec",onClick:()=>te(J),children:[o.jsx("span",{className:"home-rec-index",children:String(ee+1).padStart(2,"0")}),o.jsxs("span",{className:"home-rec-main",children:[o.jsx("span",{className:"home-rec-title",children:J.title}),o.jsxs("span",{className:"home-rec-meta",children:[J.sectionLabel," - ",J.level]})]}),o.jsx(mt,{size:16})]},J.id))})]})]})}function yv(){const[r,u]=U.useState("tiempos"),[d,c]=U.useState("tiempos"),[m,h]=U.useState(null),[g,b]=U.useState(null),[w,f]=U.useState("ALL"),[S,j]=U.useState(!1),[O,k]=U.useState(!1),[A,C]=U.useState(!0),[Q,I]=U.useState(!1),[te,F]=U.useState(""),[J,ee]=U.useState({rate:.85,voiceURI:""}),[se,ae]=U.useState("both"),[$,xe]=U.useState(!1),[P,me]=U.useState(!1),[ye,qe]=U.useState([]),[we,ke]=U.useState(null),[D,N]=U.useState(!1),[B,X]=U.useState(""),[W,v]=U.useState(""),[G,K]=U.useState(""),[Z,le]=U.useState(!1),[fe,de]=U.useState(""),[He,V]=U.useState(()=>To()),[Te,Be]=U.useState(0),Xe=Sa.useRef(0),[Je,sa]=U.useState(1),[wa,Va]=U.useState(null),[$e,en]=U.useState([]),[cn,ht]=U.useState([]),[La,_o]=U.useState({}),[Na,da]=U.useState({});U.useEffect(()=>{(async()=>{try{const y=await window.storage.get("memoria-words");y?.value&&en(JSON.parse(y.value))}catch{}try{const y=await window.storage.get("font-scale");if(y?.value){const Y=parseFloat(y.value);Y>=.85&&Y<=1.3&&sa(Y)}}catch{}try{const y=await window.storage.get("last-read");if(y?.value){const Y=JSON.parse(y.value);Y?.chapterId&&Y.chapterId!=="tiempos"&&Va(Y)}}catch{}try{const y=await window.storage.get("visited-chapters");y?.value&&ht(JSON.parse(y.value))}catch{}try{const y=await window.storage.get(cf);y?.value&&_o(JSON.parse(y.value))}catch{}try{const y=await window.storage.get(lf);y?.value&&da(JSON.parse(y.value))}catch{}try{const y=await window.storage.get(Gc);if(y?.value){const Y=JSON.parse(y.value);ee(Y),_s(Y)}}catch{}try{const y=await window.storage.get(Rc);(y?.value==="spanish"||y?.value==="both")&&ae(y.value)}catch{}try{(await window.storage.get(Hc))?.value==="true"&&xe(!0)}catch{}try{const y=await window.storage.get(ur);y?.value&&X(y.value)}catch{}try{const y=await window.storage.get(Xc);y?.value&&qe(JSON.parse(y.value)||[])}catch{}try{const y=await window.storage.get(Ls);y?.value&&V(To(JSON.parse(y.value)))}catch{}})()},[]),U.useEffect(()=>{function y(Y){ke(Y.detail?.worker||null)}return window.addEventListener("learn-spanish-update-ready",y),()=>window.removeEventListener("learn-spanish-update-ready",y)},[]);function xr(){we?.postMessage?.({type:"SKIP_WAITING"})}U.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(Je));try{window.storage.set("font-scale",String(Je))}catch{}},[Je]);function Go(y){sa(Y=>Math.max(.85,Math.min(1.3,+(Y+y).toFixed(2))))}async function an(y){try{await window.storage.set("memoria-words",JSON.stringify(y))}catch{}}async function gt(y){try{await window.storage.set(cf,JSON.stringify(y))}catch{}}async function Vs(y){try{await window.storage.set(lf,JSON.stringify(y))}catch{}}function Qs(y){_o(y),gt(y)}function yr(y,Y){da(ie=>{const ue={...ie};return Y?ue[y]=Y:delete ue[y],Vs(ue),ue})}function wr(y){ee(y),_s(y);try{window.storage.set(Gc,JSON.stringify(y))}catch{}}function bt(){ae(y=>{const Y=y==="spanish"?"both":"spanish";try{window.storage.set(Rc,Y)}catch{}return Y})}function ka(){xe(y=>{const Y=!y;try{window.storage.set(Hc,String(Y))}catch{}return Y})}async function nn(y){en(ie=>{const ue=ie.map(he=>he.word===y?{...he,pending:!0}:he);return an(ue),ue});const Y=await yf(y);en(ie=>{const ue=ie.map(he=>he.word!==y?he:Y?{...he,translation:Y.main,pos:Y.pos||he.pos||"",extras:Y.extras||[],pending:!1,translatedAt:Date.now()}:{...he,pending:!1});return an(ue),ue})}function va(y){en(Y=>{if(Y.some(ue=>ue.word===y.word)){const ue=Y.map(he=>he.word===y.word?{...he,...y,tags:Array.from(new Set([...he.tags||[],...y.tags||[]])),extras:Array.from(new Set([...he.extras||[],...y.extras||[]])),savedAt:he.savedAt||y.savedAt||Date.now()}:he);return an(ue),ue}const ie=[y,...Y];return an(ie),ie}),y.translation||nn(y.word)}function Is(y){en(Y=>{const ie=Y.filter(ue=>ue.word!==y);return an(ie),ie})}function Xs(y,Y){en(ie=>{const ue=ie.map(he=>he.word===y?{...he,...Y}:he);return an(ue),ue})}function kr(){en([]),an([])}U.useEffect(()=>{if($e.length===0)return;const y=$e.filter(Y=>!Y.translation&&!Y.pending);y.length!==0&&y.slice(0,5).forEach((Y,ie)=>{setTimeout(()=>nn(Y.word),ie*800)})},[$e.length]);const be=U.useMemo(()=>{const y=[];for(const Y of Gt)for(const ie of Y.chapters)(ie.alwaysVisible||w==="ALL"||ie.level===w)&&y.push({...ie,sectionId:Y.id,sectionLabel:Y.label});return y},[w]);U.useEffect(()=>{be.find(y=>y.id===d)||be.length&&(c(be[0].id),u(be[0].sectionId),b(null))},[be,d]);const tn=U.useMemo(()=>be.find(y=>y.id===d),[be,d]),Bt=U.useMemo(()=>Gt.find(y=>y.id===r),[r]),on=U.useMemo(()=>Gt.find(y=>y.id===m),[m]),vt=U.useMemo(()=>be.filter(y=>y.sectionId===m),[be,m]),Hn=U.useMemo(()=>_c(on,vt),[on,vt]),bn=be.findIndex(y=>y.id===d),Yt=bn>0?be[bn-1]:null,xt=bn>=0&&bn<be.length-1?be[bn+1]:null,Ua=U.useMemo(()=>new Set(cn),[cn]),Ks=U.useMemo(()=>be.filter(y=>Ua.has(y.id)).length,[be,Ua]),Ro=U.useMemo(()=>{const y=be.filter(Y=>!Ua.has(Y.id));return(y.length?y:be).slice(0,4)},[be,Ua]),Ho=U.useMemo(()=>Eb(te,be,$e,ye),[te,be,$e,ye]),Zs=U.useMemo(()=>{const y=Object.values(Na||{});return{read:y.filter(Y=>Y==="read"||Y==="understood").length,understood:y.filter(Y=>Y==="understood").length}},[Na]),Bo=U.useMemo(()=>jf($e),[$e]),yt=U.useMemo(()=>Ab({chapters:be,visitedChapters:cn,lessonStatuses:Na,palabrasProgress:La,savedWords:$e,writingEntries:ye}),[be,cn,Na,La,$e,ye]),Js=U.useMemo(()=>Cb({chapters:be,lessonStatuses:Na,palabrasProgress:La,savedWords:$e,writingEntries:ye}),[be,Na,La,$e,ye]),Yo=Ro[0]||be[0],dn=U.useMemo(()=>{const y=Object.values(La||{}),Y=Date.now();return{seen:y.filter(ie=>ie?.seen).length,due:y.filter(ie=>ie?.seen&&(ie.dueAt||0)<=Y).length,mastered:y.filter(ie=>ie?.mastered).length}},[La]),ia=U.useMemo(()=>Gt.map(y=>{const Y=be.filter(he=>he.sectionId===y.id),ie=_c(y,Y),ue=ie.filter(he=>Ua.has(he.id)||Na[he.statusKey||he.id]).length;return{id:y.id,label:y.label,total:ie.length,visited:ue}}).filter(y=>y.total>0),[be,Ua,Na]),ua=be.find(y=>y.id==="palabras-5000"),vn=be.find(y=>y.sectionId==="verbos")||be.find(y=>y.sectionId==="verbos2"),Vt=be.find(y=>y.sectionId==="lectura"),Qt=!!(tn&&!A&&!O&&!Q&&!m),It=g?.cardId||tn?.id,$s=Qt?`${tn.sectionLabel||"Lesson"} - ${g?.title||tn.title}`:"Open a lesson to count";U.useEffect(()=>{if(!Qt||!It)return;let y=!0;const Y=()=>{if(!y||document.hidden)return;const ue=Date.now();Be(he=>he+1),V(he=>{const Ie=To(he),Qa={...Ie,totalSeconds:Ie.totalSeconds+1,todaySeconds:Ie.todaySeconds+1,byChapter:{...Ie.byChapter,[It]:(Number(Ie.byChapter?.[It])||0)+1},updatedAt:ue};if(Xe.current+=1,Xe.current>=15){Xe.current=0;try{window.storage.set(Ls,JSON.stringify(Qa))}catch{}}return Qa})},ie=window.setInterval(Y,1e3);return()=>{y=!1,window.clearInterval(ie)}},[Qt,It]),U.useEffect(()=>{try{window.storage.set(Ls,JSON.stringify(He))}catch{}},[A,O,Q,m,d,g]),U.useEffect(()=>{const y=()=>{try{window.storage.set(Ls,JSON.stringify(He))}catch{}};return window.addEventListener("pagehide",y),window.addEventListener("beforeunload",y),()=>{window.removeEventListener("pagehide",y),window.removeEventListener("beforeunload",y)}},[He]),U.useEffect(()=>{try{window.storage.set(Sb,JSON.stringify(yt))}catch{}},[yt]);function xa(y){const Y=y.parentChapterId||y.id,ie=y.sectionId||Gt.find(ue=>ue.chapters.some(he=>he.id===Y))?.id||r;c(Y),u(ie),h(null),b(y.nestedTarget||null),k(!1),I(!1),C(!1),j(!1),Va(null),ht(ue=>{const he=[Y,y.id].filter(Boolean),Ie=Array.from(new Set([...ue,...he]));if(Ie.length===ue.length)return ue;try{window.storage.set("visited-chapters",JSON.stringify(Ie))}catch{}return Ie});try{window.storage.set("last-read",JSON.stringify({sectionId:ie,chapterId:Y,cardId:y.id,nestedTarget:y.nestedTarget||null,title:y.nestedTarget?.title||y.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const ue=document.querySelector(".book-main");ue&&ue.scrollTo({top:0,behavior:"smooth"})}}function Xt(y){if(u(y.id),h(y.id),b(null),C(!1),k(!1),I(!1),j(!1),typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const Y=document.querySelector(".book-main");Y&&Y.scrollTo({top:0,behavior:"smooth"})}}function Bn(){if(!wa)return;const y=Gt.find(ie=>ie.id===wa.sectionId),Y=y?.chapters.find(ie=>ie.id===wa.chapterId);Y&&xa({...Y,id:wa.cardId||Y.id,parentChapterId:Y.id,sectionId:y.id,nestedTarget:wa.nestedTarget||null}),Va(null)}function Yn(){Va(null)}function wt(){return{app:"Learn Spanish",version:2,exportedAt:new Date().toISOString(),savedWords:$e,visitedChapters:cn,palabrasProgress:La,lessonStatuses:Na,writingEntries:ye,audioSettings:J,fontScale:Je,translationMode:se,booxMode:$,studyTime:He}}async function Vn(y){const Y=Array.isArray(y.savedWords)?y.savedWords:[],ie=Array.isArray(y.visitedChapters)?y.visitedChapters:[],ue=y.palabrasProgress&&typeof y.palabrasProgress=="object"?y.palabrasProgress:{},he=y.lessonStatuses&&typeof y.lessonStatuses=="object"?y.lessonStatuses:{},Ie=Array.isArray(y.writingEntries)?y.writingEntries:[],Qa=y.audioSettings&&typeof y.audioSettings=="object"?y.audioSettings:J,pa=Number(y.fontScale),ja=y.translationMode==="spanish"?"spanish":"both",Qo=!!y.booxMode,Fs=To(y.studyTime||He);en(Y),ht(ie),_o(ue),da(he),qe(Ie),ee(Qa),_s(Qa),ae(ja),xe(Qo),V(Fs),pa>=.85&&pa<=1.3&&sa(pa),await an(Y),await gt(ue),await Vs(he),await window.storage.set("visited-chapters",JSON.stringify(ie)),await window.storage.set(Xc,JSON.stringify(Ie)),await window.storage.set(Gc,JSON.stringify(Qa)),await window.storage.set(Rc,ja),await window.storage.set(Hc,String(Qo)),await window.storage.set(Ls,JSON.stringify(Fs)),pa>=.85&&pa<=1.3&&await window.storage.set("font-scale",String(pa))}async function ea(){const y=B.trim();if(!y){de("Paste your Google OAuth Client ID first.");return}try{await window.storage.set(ur,y),X(y),de("Google Client ID saved on this device.")}catch{de("Could not save the Client ID in this browser.")}}async function Ws(){const y=B.trim();if(!y){de("Paste and save your Google OAuth Client ID first.");return}le(!0),de("Opening Google sign-in...");try{await window.storage.set(ur,y);const Y=await sf(y,"consent");v(Y),de("Signed in. Syncing your study data now..."),await Vo(Y)}catch(Y){de(Y?.message||"Google sign-in did not finish.")}finally{le(!1)}}async function Vo(y=W){const Y=B.trim();if(!Y){de("Paste and save your Google OAuth Client ID first.");return}le(!0),de(y?"Syncing with Google Drive...":"Opening Google sign-in...");try{await window.storage.set(ur,Y);const ie=y||await sf(Y,W?"":"consent");v(ie),de("Checking Google Drive...");const ue=await bb(ie),he=await vb(ie,ue?.id),Ie=jb(wt(),he);await Vn(Ie),await xb(ie,Ie,ue?.id),K(new Date().toLocaleString()),de(`Google Drive synced across devices: ${Ie.savedWords.length} words, ${Object.keys(Ie.lessonStatuses||{}).length} lesson marks, ${Us(Ie.studyTime?.totalSeconds)} total study time.`)}catch(ie){/401|invalid|expired/i.test(ie?.message||"")&&v(""),de(ie?.message||"Google Drive sync did not finish.")}finally{le(!1)}}function xn(y=""){return o.jsxs("div",{className:`global-search ${y}`,children:[o.jsxs("label",{children:[o.jsx(Vc,{size:14}),o.jsx("input",{value:te,onChange:Y=>F(Y.target.value),placeholder:"Search everything..."})]}),te.trim().length>=2&&o.jsx("div",{className:"global-search-results",children:Ho.length?Ho.map((Y,ie)=>o.jsxs("button",{onClick:()=>{Y.type==="memoria"?(h(null),b(null),C(!1),I(!1),k(!0)):Y.type==="writing"?(h(null),b(null),C(!1),k(!1),I(!0)):xa(Y.chapter),F(""),j(!1)},children:[o.jsx("span",{children:Y.title}),o.jsx("em",{children:Y.meta}),Y.context&&o.jsx("small",{children:Y.context})]},`${Y.type}-${Y.title}-${ie}`)):o.jsx("div",{className:"global-search-empty",children:"No matches"})})]})}return o.jsxs("div",{className:`book-root translation-mode-${se} ${$?"boox-mode":""} ${P?"focus-mode":""}`,children:[o.jsx(gv,{savedWords:$e,onSave:va,onRemove:Is}),o.jsx(ob,{}),o.jsx("style",{children:ib}),o.jsxs("div",{className:"mobile-bar",children:[o.jsx("button",{className:"mobile-btn",onClick:()=>j(!0),"aria-label":"Open menu",children:o.jsx(nb,{size:20})}),o.jsx("div",{className:"mobile-title",children:o.jsx("span",{className:"mobile-brand-script",children:"Español"})}),o.jsxs("div",{className:`study-timer ${Qt?"running":""}`,title:$s,children:[o.jsx(br,{size:14}),o.jsx("span",{className:"study-timer-main",children:Us(He.todaySeconds)}),o.jsx("span",{className:"study-timer-sub",children:Us(Te)})]}),xn("header-search"),o.jsxs("button",{className:`top-tool-btn ${se==="spanish"?"active":""}`,onClick:bt,"aria-label":se==="spanish"?"Show English translations":"Hide English translations",title:se==="spanish"?"Mostrar ingles":"Solo espanol",children:[o.jsx(Mo,{size:15}),o.jsx("span",{children:se==="spanish"?"ES":"EN"})]}),o.jsx("button",{className:"top-tool-btn audio-stop",onClick:Gs,"aria-label":"Stop all audio",title:"Detener audio",children:o.jsx(ff,{size:15})}),o.jsxs("button",{className:`top-tool-btn boox-toggle ${$?"active":""}`,onClick:ka,"aria-label":$?"Turn off Boox e-ink mode":"Turn on Boox e-ink mode",title:$?"Boox mode on":"Boox / e-ink mode",children:[o.jsx(pf,{size:15}),o.jsx("span",{children:"Ink"})]}),o.jsxs("button",{className:`top-tool-btn focus-toggle ${P?"active":""}`,onClick:()=>me(y=>!y),"aria-label":P?"Exit focus reading mode":"Enter focus reading mode",title:P?"Salir de lectura":"Modo lectura",children:[o.jsx(mr,{size:15}),o.jsx("span",{children:P?"Exit":"Read"})]}),o.jsxs("div",{className:"font-controls",children:[o.jsx("button",{className:"font-btn",onClick:()=>Go(-.05),"aria-label":"Smaller text",disabled:Je<=.85,children:o.jsx("span",{className:"font-btn-small",children:"A"})}),o.jsx("button",{className:"font-btn",onClick:()=>Go(.05),"aria-label":"Larger text",disabled:Je>=1.3,children:o.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),D&&o.jsx("div",{className:"sync-modal-overlay",role:"dialog","aria-modal":"true","aria-label":"Device sync",children:o.jsxs("div",{className:"sync-modal",children:[o.jsx("button",{className:"sync-close",onClick:()=>N(!1),"aria-label":"Close sync",children:o.jsx(Gn,{size:15})}),o.jsx("div",{className:"sync-kicker",children:"Device Sync"}),o.jsx("h2",{children:"Sync your Spanish book across devices"}),o.jsx("p",{children:"Sign in with Google Drive to keep one private study file across your phone, tablet, Boox, and laptop."}),o.jsxs("div",{className:"sync-stats",children:[o.jsxs("span",{children:[$e.length," Memoria words"]}),o.jsxs("span",{children:[Object.keys(La||{}).length," Palabras reviews"]}),o.jsxs("span",{children:[Object.keys(Na||{}).length," lesson marks"]}),o.jsxs("span",{children:[Us(He.totalSeconds)," total time"]}),o.jsx("span",{children:$?"Boox mode on":"Boox mode off"})]}),o.jsxs("div",{className:`sync-status-pill ${W?"connected":""}`,children:[W?"Google connected for this session":"Google not connected yet",G&&o.jsxs("small",{children:["Last sync: ",G]})]}),o.jsxs("label",{className:"sync-client-field",children:[o.jsx("span",{children:"Google OAuth Client ID"}),o.jsx("input",{value:B,onChange:y=>X(y.target.value),placeholder:"1234567890-abc.apps.googleusercontent.com",disabled:!1})]}),o.jsx("p",{className:"sync-help",children:"First time only: create a Google Cloud OAuth Client ID for this website origin, then paste it here."}),o.jsxs("div",{className:"sync-actions",children:[o.jsx("button",{onClick:ea,children:"Save Client ID"}),o.jsx("button",{onClick:Ws,disabled:Z||!B.trim(),children:Z?"Working...":W?"Reconnect Google":"Sign in with Google"}),o.jsx("button",{onClick:()=>Vo(),disabled:Z||!B.trim(),children:Z?"Syncing...":"Sync now"})]}),fe&&o.jsx("div",{className:"sync-message",children:fe})]})}),wa&&o.jsxs("div",{className:"resume-banner",children:[o.jsxs("div",{className:"resume-banner-text",children:[o.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),o.jsx("span",{className:"resume-banner-title",children:wa.title})]}),o.jsxs("div",{className:"resume-banner-actions",children:[o.jsxs("button",{className:"resume-btn-primary",onClick:Bn,children:["Continuar",o.jsx(mt,{size:14})]}),o.jsx("button",{className:"resume-btn-dismiss",onClick:Yn,"aria-label":"Dismiss",children:o.jsx(Gn,{size:14})})]})]}),we&&o.jsxs("div",{className:"update-banner",children:[o.jsxs("div",{children:[o.jsx("span",{className:"resume-banner-label",children:"New version ready"}),o.jsx("span",{className:"resume-banner-title",children:"Refresh to use the latest study tools."})]}),o.jsxs("button",{className:"resume-btn-primary",onClick:xr,children:["Update",o.jsx(mt,{size:14})]})]}),o.jsxs("div",{className:"book-shell",children:[o.jsxs("aside",{className:`sidebar ${S?"open":""}`,children:[o.jsxs("div",{className:"sidebar-inner",children:[o.jsx("div",{className:"sidebar-header",children:o.jsxs("div",{className:"brand",children:[o.jsx("div",{className:"brand-mark",children:o.jsx(mr,{size:18})}),o.jsxs("div",{className:"brand-text",children:[o.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),o.jsx("div",{className:"brand-title",children:"Español"})]}),o.jsx("button",{className:"sidebar-close",onClick:()=>j(!1),"aria-label":"Close menu",children:o.jsx(Gn,{size:18})})]})}),o.jsxs("nav",{className:"section-nav",children:[o.jsx("div",{className:`section-group home-nav-item ${A?"active":""}`,children:o.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{h(null),b(null),C(!0),k(!1),I(!1),j(!1)},children:[o.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:o.jsx(Fc,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Inicio"}),o.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count",children:cn.length})})]})}),Gt.map(y=>{const Y=be.filter(he=>he.sectionId===y.id),ie=_c(y,Y),ue=y.id===r&&!O&&!A&&!Q;return o.jsx("div",{className:`section-group ${ue?"active":""}`,children:o.jsxs("button",{className:"section-btn",onClick:()=>Xt(y),children:[o.jsx("div",{className:"section-icon-wrap",children:o.jsx(Kc,{id:y.id,size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:y.label}),o.jsx("div",{className:"section-sublabel",children:y.sublabel})]}),o.jsxs("div",{className:"section-meta",children:[o.jsx("div",{className:"section-count",children:ie.length}),o.jsx(mt,{size:16,className:"section-chevron"})]})]})},y.id)}),o.jsx("div",{className:`section-group memoria-nav-item ${O?"active":""}`,children:o.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{h(null),b(null),C(!1),I(!1),k(!0),j(!1)},children:[o.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:o.jsx(Lo,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Memoria"}),o.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count memoria-count",children:$e.length})})]})}),o.jsx("div",{className:`section-group writing-nav-item ${Q?"active":""}`,children:o.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{h(null),b(null),C(!1),k(!1),I(!0),j(!1)},children:[o.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:o.jsx(hf,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Writing"}),o.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count writing-count",children:ye.length})})]})})]}),o.jsxs("div",{className:"sidebar-footer",children:[o.jsx("button",{type:"button",className:"sidebar-sync-btn",onClick:()=>{N(!0),de("")},children:"Sync"}),o.jsx("div",{className:"sig",children:"— para Othman"})]})]}),S&&o.jsx("div",{className:"scrim",onClick:()=>j(!1)})]}),o.jsxs("main",{className:"book-main",children:[o.jsxs("div",{className:`book-page ${A?"home-page":""}`,children:[A?o.jsx(xv,{totalChapters:be.length,visitedCount:Ks,savedWordsCount:$e.length,levelFilter:w,palabrasSummary:dn,lessonSummary:Zs,memoriaSummary:Bo,learnerProfile:yt,reviewQueue:Js,writingCount:ye.length,sectionProgress:ia,recommendations:Ro,onStart:()=>Yo&&xa(Yo),onOpenMemoria:()=>{h(null),b(null),C(!1),I(!1),k(!0)},onOpenPalabras:()=>ua&&xa(ua),onOpenVerb:()=>vn&&xa(vn),onOpenReading:()=>Vt&&xa(Vt),onOpenWriting:()=>{h(null),b(null),C(!1),k(!1),I(!0)},onSelectChapter:xa}):O?o.jsx(bv,{savedWords:$e,onRemove:Is,onClear:kr,onUpdateWord:Xs}):Q?o.jsx(vv,{savedWords:$e,chapters:be,entries:ye,onEntriesChange:qe}):m?o.jsx(Rb,{section:on,lessons:Hn,visitedSet:Ua,lessonStatuses:Na,studyTime:He,onSelectChapter:xa,SectionIconComponent:Kc}):tn?o.jsx(tv,{chapter:tn,sectionId:r,section:Bt,activeNestedTarget:g,onOpenSection:Xt,onSaveWord:va,savedWords:$e,onUpdateSavedWord:Xs,palabrasProgress:La,onPalabrasProgressChange:Qs,lessonStatuses:Na,onLessonStatusChange:yr}):o.jsxs("div",{className:"empty",children:[o.jsx(Ht,{size:28}),o.jsx("p",{children:"No hay capítulos en este nivel."})]}),!A&&!O&&!Q&&!m&&o.jsxs("nav",{className:"chapter-nav",children:[Yt?o.jsxs("button",{className:"nav-btn prev",onClick:()=>xa(Yt),children:[o.jsx(Pg,{size:16}),o.jsxs("div",{children:[o.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),o.jsx("div",{className:"nav-title",children:Yt.title})]})]}):o.jsx("div",{}),xt?o.jsxs("button",{className:"nav-btn next",onClick:()=>xa(xt),children:[o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),o.jsx("div",{className:"nav-title",children:xt.title})]}),o.jsx(mt,{size:16})]}):o.jsx("div",{})]})]}),o.jsx("footer",{className:"level-bar",children:o.jsxs("div",{className:"level-bar-inner",children:[o.jsxs("div",{className:"level-bar-label",children:[o.jsx(Lo,{size:14})," Nivel"]}),o.jsxs("div",{className:"level-pills",children:[o.jsx("button",{className:`level-pill ${w==="ALL"?"active":""}`,onClick:()=>f("ALL"),children:"Todos"}),Bb.map(y=>o.jsx("button",{className:`level-pill ${w===y?"active":""}`,onClick:()=>f(y),children:y},y))]}),o.jsx(sb,{settings:J,onChange:wr}),o.jsx("div",{className:"level-bar-counter",children:A?`${Ks} / ${be.length}`:m?`${Hn.length} lecciones`:bn>=0?`${bn+1} / ${be.length}`:"—"})]})})]})]})]})}typeof window<"u"&&!window.storage&&(window.storage={async get(r){const u=window.localStorage.getItem(r);return u===null?null:{value:u}},async set(r,u){window.localStorage.setItem(r,u)},async delete(r){window.localStorage.removeItem(r)}});Ig();Qg.createRoot(document.getElementById("root")).render(o.jsx(Sa.StrictMode,{children:o.jsx(yv,{})}));
