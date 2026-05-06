(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const x of m)if(x.type==="childList")for(const w of x.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function d(m){const x={};return m.integrity&&(x.integrity=m.integrity),m.referrerPolicy&&(x.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?x.credentials="include":m.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function c(m){if(m.ep)return;m.ep=!0;const x=d(m);fetch(m.href,x)}})();function ag(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Zr={exports:{}},Wo={};var lm;function tg(){if(lm)return Wo;lm=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,m,x){var w=null;if(x!==void 0&&(w=""+x),m.key!==void 0&&(w=""+m.key),"key"in m){x={};for(var z in m)z!=="key"&&(x[z]=m[z])}else x=m;return m=x.ref,{$$typeof:u,type:c,key:w,ref:m!==void 0?m:null,props:x}}return Wo.Fragment=f,Wo.jsx=d,Wo.jsxs=d,Wo}var rm;function ng(){return rm||(rm=1,Zr.exports=tg()),Zr.exports}var s=ng(),Kr={exports:{}},re={};var cm;function og(){if(cm)return re;cm=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),H=Symbol.iterator;function $(g){return g===null||typeof g!="object"?null:(g=H&&g[H]||g["@@iterator"],typeof g=="function"?g:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,J={};function Z(g,M,V){this.props=g,this.context=M,this.refs=J,this.updater=V||Y}Z.prototype.isReactComponent={},Z.prototype.setState=function(g,M){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,M,"setState")},Z.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function I(){}I.prototype=Z.prototype;function P(g,M,V){this.props=g,this.context=M,this.refs=J,this.updater=V||Y}var xe=P.prototype=new I;xe.constructor=P,B(xe,Z.prototype),xe.isPureReactComponent=!0;var ne=Array.isArray;function te(){}var K={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function ee(g,M,V){var X=V.ref;return{$$typeof:u,type:g,key:M,ref:X!==void 0?X:null,props:V}}function Ue(g,M){return ee(g.type,M,g.props)}function Ge(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function D(g){var M={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(V){return M[V]})}var pe=/\/+/g;function we(g,M){return typeof g=="object"&&g!==null&&g.key!=null?D(""+g.key):M.toString(36)}function be(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(te,te):(g.status="pending",g.then(function(M){g.status==="pending"&&(g.status="fulfilled",g.value=M)},function(M){g.status==="pending"&&(g.status="rejected",g.reason=M)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function N(g,M,V,X,le){var fe=typeof g;(fe==="undefined"||fe==="boolean")&&(g=null);var O=!1;if(g===null)O=!0;else switch(fe){case"bigint":case"string":case"number":O=!0;break;case"object":switch(g.$$typeof){case u:case f:O=!0;break;case j:return O=g._init,N(O(g._payload),M,V,X,le)}}if(O)return le=le(g),O=X===""?"."+we(g,0):X,ne(le)?(V="",O!=null&&(V=O.replace(pe,"$&/")+"/"),N(le,M,V,"",function(se){return se})):le!=null&&(Ge(le)&&(le=Ue(le,V+(le.key==null||g&&g.key===le.key?"":(""+le.key).replace(pe,"$&/")+"/")+O)),M.push(le)),1;O=0;var ye=X===""?".":X+":";if(ne(g))for(var ue=0;ue<g.length;ue++)X=g[ue],fe=ye+we(X,ue),O+=N(X,M,V,fe,le);else if(ue=$(g),typeof ue=="function")for(g=ue.call(g),ue=0;!(X=g.next()).done;)X=X.value,fe=ye+we(X,ue++),O+=N(X,M,V,fe,le);else if(fe==="object"){if(typeof g.then=="function")return N(be(g),M,V,X,le);throw M=String(g),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return O}function G(g,M,V){if(g==null)return g;var X=[],le=0;return N(g,X,"","",function(fe){return M.call(V,fe,le++)}),X}function W(g){if(g._status===-1){var M=g._result;M=M(),M.then(function(V){(g._status===0||g._status===-1)&&(g._status=1,g._result=V)},function(V){(g._status===0||g._status===-1)&&(g._status=2,g._result=V)}),g._status===-1&&(g._status=0,g._result=M)}if(g._status===1)return g._result.default;throw g._result}var ce=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},me={map:G,forEach:function(g,M,V){G(g,function(){M.apply(this,arguments)},V)},count:function(g){var M=0;return G(g,function(){M++}),M},toArray:function(g){return G(g,function(M){return M})||[]},only:function(g){if(!Ge(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return re.Activity=T,re.Children=me,re.Component=Z,re.Fragment=d,re.Profiler=m,re.PureComponent=P,re.StrictMode=c,re.Suspense=h,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,re.__COMPILER_RUNTIME={__proto__:null,c:function(g){return K.H.useMemoCache(g)}},re.cache=function(g){return function(){return g.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(g,M,V){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var X=B({},g.props),le=g.key;if(M!=null)for(fe in M.key!==void 0&&(le=""+M.key),M)!Q.call(M,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&M.ref===void 0||(X[fe]=M[fe]);var fe=arguments.length-2;if(fe===1)X.children=V;else if(1<fe){for(var O=Array(fe),ye=0;ye<fe;ye++)O[ye]=arguments[ye+2];X.children=O}return ee(g.type,le,X)},re.createContext=function(g){return g={$$typeof:w,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:x,_context:g},g},re.createElement=function(g,M,V){var X,le={},fe=null;if(M!=null)for(X in M.key!==void 0&&(fe=""+M.key),M)Q.call(M,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(le[X]=M[X]);var O=arguments.length-2;if(O===1)le.children=V;else if(1<O){for(var ye=Array(O),ue=0;ue<O;ue++)ye[ue]=arguments[ue+2];le.children=ye}if(g&&g.defaultProps)for(X in O=g.defaultProps,O)le[X]===void 0&&(le[X]=O[X]);return ee(g,fe,le)},re.createRef=function(){return{current:null}},re.forwardRef=function(g){return{$$typeof:z,render:g}},re.isValidElement=Ge,re.lazy=function(g){return{$$typeof:j,_payload:{_status:-1,_result:g},_init:W}},re.memo=function(g,M){return{$$typeof:v,type:g,compare:M===void 0?null:M}},re.startTransition=function(g){var M=K.T,V={};K.T=V;try{var X=g(),le=K.S;le!==null&&le(V,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(te,ce)}catch(fe){ce(fe)}finally{M!==null&&V.types!==null&&(M.types=V.types),K.T=M}},re.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},re.use=function(g){return K.H.use(g)},re.useActionState=function(g,M,V){return K.H.useActionState(g,M,V)},re.useCallback=function(g,M){return K.H.useCallback(g,M)},re.useContext=function(g){return K.H.useContext(g)},re.useDebugValue=function(){},re.useDeferredValue=function(g,M){return K.H.useDeferredValue(g,M)},re.useEffect=function(g,M){return K.H.useEffect(g,M)},re.useEffectEvent=function(g){return K.H.useEffectEvent(g)},re.useId=function(){return K.H.useId()},re.useImperativeHandle=function(g,M,V){return K.H.useImperativeHandle(g,M,V)},re.useInsertionEffect=function(g,M){return K.H.useInsertionEffect(g,M)},re.useLayoutEffect=function(g,M){return K.H.useLayoutEffect(g,M)},re.useMemo=function(g,M){return K.H.useMemo(g,M)},re.useOptimistic=function(g,M){return K.H.useOptimistic(g,M)},re.useReducer=function(g,M,V){return K.H.useReducer(g,M,V)},re.useRef=function(g){return K.H.useRef(g)},re.useState=function(g){return K.H.useState(g)},re.useSyncExternalStore=function(g,M,V){return K.H.useSyncExternalStore(g,M,V)},re.useTransition=function(){return K.H.useTransition()},re.version="19.2.5",re}var um;function nc(){return um||(um=1,Kr.exports=og()),Kr.exports}var _=nc();const nn=ag(_);var Jr={exports:{}},$o={},Ir={exports:{}},Wr={};var dm;function sg(){return dm||(dm=1,(function(u){function f(N,G){var W=N.length;N.push(G);e:for(;0<W;){var ce=W-1>>>1,me=N[ce];if(0<m(me,G))N[ce]=G,N[W]=me,W=ce;else break e}}function d(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var G=N[0],W=N.pop();if(W!==G){N[0]=W;e:for(var ce=0,me=N.length,g=me>>>1;ce<g;){var M=2*(ce+1)-1,V=N[M],X=M+1,le=N[X];if(0>m(V,W))X<me&&0>m(le,V)?(N[ce]=le,N[X]=W,ce=X):(N[ce]=V,N[M]=W,ce=M);else if(X<me&&0>m(le,W))N[ce]=le,N[X]=W,ce=X;else break e}}return G}function m(N,G){var W=N.sortIndex-G.sortIndex;return W!==0?W:N.id-G.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;u.unstable_now=function(){return x.now()}}else{var w=Date,z=w.now();u.unstable_now=function(){return w.now()-z}}var h=[],v=[],j=1,T=null,H=3,$=!1,Y=!1,B=!1,J=!1,Z=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function xe(N){for(var G=d(v);G!==null;){if(G.callback===null)c(v);else if(G.startTime<=N)c(v),G.sortIndex=G.expirationTime,f(h,G);else break;G=d(v)}}function ne(N){if(B=!1,xe(N),!Y)if(d(h)!==null)Y=!0,te||(te=!0,D());else{var G=d(v);G!==null&&be(ne,G.startTime-N)}}var te=!1,K=-1,Q=5,ee=-1;function Ue(){return J?!0:!(u.unstable_now()-ee<Q)}function Ge(){if(J=!1,te){var N=u.unstable_now();ee=N;var G=!0;try{e:{Y=!1,B&&(B=!1,I(K),K=-1),$=!0;var W=H;try{a:{for(xe(N),T=d(h);T!==null&&!(T.expirationTime>N&&Ue());){var ce=T.callback;if(typeof ce=="function"){T.callback=null,H=T.priorityLevel;var me=ce(T.expirationTime<=N);if(N=u.unstable_now(),typeof me=="function"){T.callback=me,xe(N),G=!0;break a}T===d(h)&&c(h),xe(N)}else c(h);T=d(h)}if(T!==null)G=!0;else{var g=d(v);g!==null&&be(ne,g.startTime-N),G=!1}}break e}finally{T=null,H=W,$=!1}G=void 0}}finally{G?D():te=!1}}}var D;if(typeof P=="function")D=function(){P(Ge)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,we=pe.port2;pe.port1.onmessage=Ge,D=function(){we.postMessage(null)}}else D=function(){Z(Ge,0)};function be(N,G){K=Z(function(){N(u.unstable_now())},G)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(N){N.callback=null},u.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<N?Math.floor(1e3/N):5},u.unstable_getCurrentPriorityLevel=function(){return H},u.unstable_next=function(N){switch(H){case 1:case 2:case 3:var G=3;break;default:G=H}var W=H;H=G;try{return N()}finally{H=W}},u.unstable_requestPaint=function(){J=!0},u.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=H;H=N;try{return G()}finally{H=W}},u.unstable_scheduleCallback=function(N,G,W){var ce=u.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ce+W:ce):W=ce,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=W+me,N={id:j++,callback:G,priorityLevel:N,startTime:W,expirationTime:me,sortIndex:-1},W>ce?(N.sortIndex=W,f(v,N),d(h)===null&&N===d(v)&&(B?(I(K),K=-1):B=!0,be(ne,W-ce))):(N.sortIndex=me,f(h,N),Y||$||(Y=!0,te||(te=!0,D()))),N},u.unstable_shouldYield=Ue,u.unstable_wrapCallback=function(N){var G=H;return function(){var W=H;H=G;try{return N.apply(this,arguments)}finally{H=W}}}})(Wr)),Wr}var pm;function ig(){return pm||(pm=1,Ir.exports=sg()),Ir.exports}var $r={exports:{}},ua={};var mm;function lg(){if(mm)return ua;mm=1;var u=nc();function f(h){var v="https://react.dev/errors/"+h;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)v+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+h+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function x(h,v,j){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:T==null?null:""+T,children:h,containerInfo:v,implementation:j}}var w=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(h,v){if(h==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ua.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ua.createPortal=function(h,v){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return x(h,v,null,j)},ua.flushSync=function(h){var v=w.T,j=c.p;try{if(w.T=null,c.p=2,h)return h()}finally{w.T=v,c.p=j,c.d.f()}},ua.preconnect=function(h,v){typeof h=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(h,v))},ua.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},ua.preinit=function(h,v){if(typeof h=="string"&&v&&typeof v.as=="string"){var j=v.as,T=z(j,v.crossOrigin),H=typeof v.integrity=="string"?v.integrity:void 0,$=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;j==="style"?c.d.S(h,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:T,integrity:H,fetchPriority:$}):j==="script"&&c.d.X(h,{crossOrigin:T,integrity:H,fetchPriority:$,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ua.preinitModule=function(h,v){if(typeof h=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var j=z(v.as,v.crossOrigin);c.d.M(h,{crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(h)},ua.preload=function(h,v){if(typeof h=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var j=v.as,T=z(j,v.crossOrigin);c.d.L(h,j,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ua.preloadModule=function(h,v){if(typeof h=="string")if(v){var j=z(v.as,v.crossOrigin);c.d.m(h,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(h)},ua.requestFormReset=function(h){c.d.r(h)},ua.unstable_batchedUpdates=function(h,v){return h(v)},ua.useFormState=function(h,v,j){return w.H.useFormState(h,v,j)},ua.useFormStatus=function(){return w.H.useHostTransitionStatus()},ua.version="19.2.5",ua}var fm;function rg(){if(fm)return $r.exports;fm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),$r.exports=lg(),$r.exports}var hm;function cg(){if(hm)return $o;hm=1;var u=ig(),f=nc(),d=rg();function c(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function w(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function z(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(x(e)!==e)throw Error(c(188))}function v(e){var a=e.alternate;if(!a){if(a=x(e),a===null)throw Error(c(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return h(o),e;if(i===n)return h(o),a;i=i.sibling}throw Error(c(188))}if(t.return!==n.return)t=o,n=i;else{for(var l=!1,r=o.child;r;){if(r===t){l=!0,t=o,n=i;break}if(r===n){l=!0,n=o,t=i;break}r=r.sibling}if(!l){for(r=i.child;r;){if(r===t){l=!0,t=i,n=o;break}if(r===n){l=!0,n=i,t=o;break}r=r.sibling}if(!l)throw Error(c(189))}}if(t.alternate!==n)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:a}function j(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=j(e),a!==null)return a;e=e.sibling}return null}var T=Object.assign,H=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),P=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Z:return"Profiler";case J:return"StrictMode";case ne:return"Suspense";case te:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case P:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case xe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return a=e.displayName||null,a!==null?a:we(e.type)||"Memo";case Q:a=e._payload,e=e._init;try{return we(e(a))}catch{}}return null}var be=Array.isArray,N=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ce=[],me=-1;function g(e){return{current:e}}function M(e){0>me||(e.current=ce[me],ce[me]=null,me--)}function V(e,a){me++,ce[me]=e.current,e.current=a}var X=g(null),le=g(null),fe=g(null),O=g(null);function ye(e,a){switch(V(fe,a),V(le,e),V(X,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Ap(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Ap(a),e=Cp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(X),V(X,e)}function ue(){M(X),M(le),M(fe)}function se(e){e.memoizedState!==null&&V(O,e);var a=X.current,t=Cp(a,e.type);a!==t&&(V(le,e),V(X,t))}function Fe(e){le.current===e&&(M(X),M(le)),O.current===e&&(M(O),Zo._currentValue=W)}var Pe,sn;function _a(e){if(Pe===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Pe=a&&a[1]||"",sn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+sn}var Ra=!1;function ln(e,a){if(!e||Ra)return"";Ra=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(A){var q=A}Reflect.construct(e,[],L)}else{try{L.call()}catch(A){q=A}e.call(L.prototype)}}else{try{throw Error()}catch(A){q=A}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(A){if(A&&q&&typeof A.stack=="string")return[A.stack,q.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),l=i[0],r=i[1];if(l&&r){var p=l.split(`
`),S=r.split(`
`);for(o=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;if(n===p.length||o===S.length)for(n=p.length-1,o=S.length-1;1<=n&&0<=o&&p[n]!==S[o];)o--;for(;1<=n&&0<=o;n--,o--)if(p[n]!==S[o]){if(n!==1||o!==1)do if(n--,o--,0>o||p[n]!==S[o]){var C=`
`+p[n].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=n&&0<=o);break}}}finally{Ra=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?_a(t):""}function ss(e,a){switch(e.tag){case 26:case 27:case 5:return _a(e.type);case 16:return _a("Lazy");case 13:return e.child!==a&&a!==null?_a("Suspense Fallback"):_a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return ln(e.type,!1);case 11:return ln(e.type.render,!1);case 1:return ln(e.type,!0);case 31:return _a("Activity");default:return""}}function eo(e){try{var a="",t=null;do a+=ss(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ao=Object.prototype.hasOwnProperty,to=u.unstable_scheduleCallback,rn=u.unstable_cancelCallback,Ci=u.unstable_shouldYield,Mi=u.unstable_requestPaint,ca=u.unstable_now,is=u.unstable_getCurrentPriorityLevel,no=u.unstable_ImmediatePriority,xa=u.unstable_UserBlockingPriority,cn=u.unstable_NormalPriority,Ui=u.unstable_LowPriority,E=u.unstable_IdlePriority,R=u.log,ve=u.unstable_setDisableYieldValue,qe=null,he=null;function Za(e){if(typeof R=="function"&&ve(e),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(qe,e)}catch{}}var na=Math.clz32?Math.clz32:Bm,ls=Math.log,Gm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(ls(e)/Gm|0)|0}var rs=256,cs=262144,us=4194304;function Ht(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ds(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?o=Ht(n):(l&=r,l!==0?o=Ht(l):t||(t=r&~e,t!==0&&(o=Ht(t))))):(r=n&~i,r!==0?o=Ht(r):l!==0?o=Ht(l):t||(t=n&~e,t!==0&&(o=Ht(t)))),o===0?0:a!==0&&a!==o&&(a&i)===0&&(i=o&-o,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:o}function oo(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Rm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dc(){var e=us;return us<<=1,(us&62914560)===0&&(us=4194304),e}function Di(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function so(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ym(e,a,t,n,o,i){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(t=l&~t;0<t;){var C=31-na(t),L=1<<C;r[C]=0,p[C]=-1;var q=S[C];if(q!==null)for(S[C]=null,C=0;C<q.length;C++){var A=q[C];A!==null&&(A.lane&=-536870913)}t&=~L}n!==0&&pc(e,n,0),i!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~a))}function pc(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-na(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function mc(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-na(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}function fc(e,a){var t=a&-a;return t=(t&42)!==0?1:Li(t),(t&(e.suspendedLanes|a))!==0?0:t}function Li(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hc(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:em(e.type))}function gc(e,a){var t=G.p;try{return G.p=e,a()}finally{G.p=t}}var mt=Math.random().toString(36).slice(2),oa="__reactFiber$"+mt,pa="__reactProps$"+mt,un="__reactContainer$"+mt,_i="__reactEvents$"+mt,Vm="__reactListeners$"+mt,Qm="__reactHandles$"+mt,bc="__reactResources$"+mt,io="__reactMarker$"+mt;function Hi(e){delete e[oa],delete e[pa],delete e[_i],delete e[Vm],delete e[Qm]}function dn(e){var a=e[oa];if(a)return a;for(var t=e.parentNode;t;){if(a=t[un]||t[oa]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Hp(e);e!==null;){if(t=e[oa])return t;e=Hp(e)}return a}e=t,t=e.parentNode}return null}function pn(e){if(e=e[oa]||e[un]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function lo(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(c(33))}function mn(e){var a=e[bc];return a||(a=e[bc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function aa(e){e[io]=!0}var vc=new Set,xc={};function Gt(e,a){fn(e,a),fn(e+"Capture",a)}function fn(e,a){for(xc[e]=a,e=0;e<a.length;e++)vc.add(a[e])}var Xm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yc={},wc={};function Zm(e){return ao.call(wc,e)?!0:ao.call(yc,e)?!1:Xm.test(e)?wc[e]=!0:(yc[e]=!0,!1)}function ps(e,a,t){if(Zm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function ms(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ka(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function qa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Km(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(l){t=""+l,i.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Gi(e){if(!e._valueTracker){var a=jc(e)?"checked":"value";e._valueTracker=Km(e,a,""+e[a])}}function zc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=jc(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jm=/[\n"\\]/g;function Ea(e){return e.replace(Jm,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Bi(e,a,t,n,o,i,l,r){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+qa(a)):e.value!==""+qa(a)&&(e.value=""+qa(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?Ri(e,l,qa(a)):t!=null?Ri(e,l,qa(t)):n!=null&&e.removeAttribute("value"),o==null&&i!=null&&(e.defaultChecked=!!i),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+qa(r):e.removeAttribute("name")}function kc(e,a,t,n,o,i,l,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){Gi(e);return}t=t!=null?""+qa(t):"",a=a!=null?""+qa(a):t,r||a===e.value||(e.value=a),e.defaultValue=a}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Gi(e)}function Ri(e,a,t){a==="number"&&fs(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function hn(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+qa(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function Sc(e,a,t){if(a!=null&&(a=""+qa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+qa(t):""}function Nc(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(c(92));if(be(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=qa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Gi(e)}function gn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Im=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qc(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Im.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Ec(e,a,t){if(a!=null&&typeof a!="object")throw Error(c(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in a)n=a[o],a.hasOwnProperty(o)&&t[o]!==n&&qc(e,o,n)}else for(var i in a)a.hasOwnProperty(i)&&qc(e,i,a[i])}function Yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$m=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(e){return $m.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ja(){}var Vi=null;function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,vn=null;function Tc(e){var a=pn(e);if(a&&(e=a.stateNode)){var t=e[pa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Bi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ea(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=n[pa]||null;if(!o)throw Error(c(90));Bi(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&zc(n)}break e;case"textarea":Sc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&hn(e,!!t.multiple,a,!1)}}}var Xi=!1;function Ac(e,a,t){if(Xi)return e(a,t);Xi=!0;try{var n=e(a);return n}finally{if(Xi=!1,(bn!==null||vn!==null)&&(ti(),bn&&(a=bn,e=vn,vn=bn=null,Tc(a),e)))for(a=0;a<e.length;a++)Tc(e[a])}}function ro(e,a){var t=e.stateNode;if(t===null)return null;var n=t[pa]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var Ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=!1;if(Ia)try{var co={};Object.defineProperty(co,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Zi=!1}var ft=null,Ki=null,gs=null;function Cc(){if(gs)return gs;var e,a=Ki,t=a.length,n,o="value"in ft?ft.value:ft.textContent,i=o.length;for(e=0;e<t&&a[e]===o[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===o[i-n];n++);return gs=o.slice(e,1<n?1-n:void 0)}function bs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function Mc(){return!1}function ma(e){function a(t,n,o,i,l){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vs:Mc,this.isPropagationStopped=Mc,this}return T(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),a}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=ma(Bt),uo=T({},Bt,{view:0,detail:0}),Fm=ma(uo),Ji,Ii,po,ys=T({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(Ji=e.screenX-po.screenX,Ii=e.screenY-po.screenY):Ii=Ji=0,po=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),Uc=ma(ys),Pm=T({},ys,{dataTransfer:0}),ef=ma(Pm),af=T({},uo,{relatedTarget:0}),Wi=ma(af),tf=T({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),nf=ma(tf),of=T({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=ma(of),lf=T({},Bt,{data:0}),Dc=ma(lf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=uf[e])?!!a[e]:!1}function $i(){return df}var pf=T({},uo,{key:function(e){if(e.key){var a=rf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=ma(pf),ff=T({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=ma(ff),hf=T({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),gf=ma(hf),bf=T({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=ma(bf),xf=T({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=ma(xf),wf=T({},Bt,{newState:0,oldState:0}),jf=ma(wf),zf=[9,13,27,32],Fi=Ia&&"CompositionEvent"in window,mo=null;Ia&&"documentMode"in document&&(mo=document.documentMode);var kf=Ia&&"TextEvent"in window&&!mo,Oc=Ia&&(!Fi||mo&&8<mo&&11>=mo),_c=" ",Hc=!1;function Gc(e,a){switch(e){case"keyup":return zf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Sf(e,a){switch(e){case"compositionend":return Bc(a);case"keypress":return a.which!==32?null:(Hc=!0,_c);case"textInput":return e=a.data,e===_c&&Hc?null:e;default:return null}}function Nf(e,a){if(xn)return e==="compositionend"||!Fi&&Gc(e,a)?(e=Cc(),gs=Ki=ft=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Oc&&a.locale!=="ko"?null:a.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!qf[e.type]:a==="textarea"}function Yc(e,a,t,n){bn?vn?vn.push(n):vn=[n]:bn=n,a=ci(a,"onChange"),0<a.length&&(t=new xs("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var fo=null,ho=null;function Ef(e){kp(e,0)}function ws(e){var a=lo(e);if(zc(a))return e}function Vc(e,a){if(e==="change")return a}var Qc=!1;if(Ia){var Pi;if(Ia){var el="oninput"in document;if(!el){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),el=typeof Xc.oninput=="function"}Pi=el}else Pi=!1;Qc=Pi&&(!document.documentMode||9<document.documentMode)}function Zc(){fo&&(fo.detachEvent("onpropertychange",Kc),ho=fo=null)}function Kc(e){if(e.propertyName==="value"&&ws(ho)){var a=[];Yc(a,ho,e,Qi(e)),Ac(Ef,a)}}function Tf(e,a,t){e==="focusin"?(Zc(),fo=a,ho=t,fo.attachEvent("onpropertychange",Kc)):e==="focusout"&&Zc()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ws(ho)}function Cf(e,a){if(e==="click")return ws(a)}function Mf(e,a){if(e==="input"||e==="change")return ws(a)}function Uf(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ya=typeof Object.is=="function"?Object.is:Uf;function go(e,a){if(ya(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!ao.call(a,o)||!ya(e[o],a[o]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,a){var t=Jc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jc(t)}}function Wc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Wc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $c(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=fs(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=fs(e.document)}return a}function al(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Df=Ia&&"documentMode"in document&&11>=document.documentMode,yn=null,tl=null,bo=null,nl=!1;function Fc(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nl||yn==null||yn!==fs(n)||(n=yn,"selectionStart"in n&&al(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bo&&go(bo,n)||(bo=n,n=ci(tl,"onSelect"),0<n.length&&(a=new xs("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=yn)))}function Rt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var wn={animationend:Rt("Animation","AnimationEnd"),animationiteration:Rt("Animation","AnimationIteration"),animationstart:Rt("Animation","AnimationStart"),transitionrun:Rt("Transition","TransitionRun"),transitionstart:Rt("Transition","TransitionStart"),transitioncancel:Rt("Transition","TransitionCancel"),transitionend:Rt("Transition","TransitionEnd")},ol={},Pc={};Ia&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Yt(e){if(ol[e])return ol[e];if(!wn[e])return e;var a=wn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Pc)return ol[e]=a[t];return e}var eu=Yt("animationend"),au=Yt("animationiteration"),tu=Yt("animationstart"),Lf=Yt("transitionrun"),Of=Yt("transitionstart"),_f=Yt("transitioncancel"),nu=Yt("transitionend"),ou=new Map,sl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sl.push("scrollEnd");function Ha(e,a){ou.set(e,a),Gt(a,[e])}var js=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ta=[],jn=0,il=0;function zs(){for(var e=jn,a=il=jn=0;a<e;){var t=Ta[a];Ta[a++]=null;var n=Ta[a];Ta[a++]=null;var o=Ta[a];Ta[a++]=null;var i=Ta[a];if(Ta[a++]=null,n!==null&&o!==null){var l=n.pending;l===null?o.next=o:(o.next=l.next,l.next=o),n.pending=o}i!==0&&su(t,o,i)}}function ks(e,a,t,n){Ta[jn++]=e,Ta[jn++]=a,Ta[jn++]=t,Ta[jn++]=n,il|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ll(e,a,t,n){return ks(e,a,t,n),Ss(e)}function Vt(e,a){return ks(e,null,null,a),Ss(e)}function su(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var o=!1,i=e.return;i!==null;)i.childLanes|=t,n=i.alternate,n!==null&&(n.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(o=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,o&&a!==null&&(o=31-na(t),e=i.hiddenUpdates,n=e[o],n===null?e[o]=[a]:n.push(a),a.lane=t|536870912),i):null}function Ss(e){if(50<Go)throw Go=0,gr=null,Error(c(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var zn={};function Hf(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wa(e,a,t,n){return new Hf(e,a,t,n)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wa(e,a){var t=e.alternate;return t===null?(t=wa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function iu(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ns(e,a,t,n,o,i){var l=0;if(n=e,typeof e=="function")rl(e)&&(l=1);else if(typeof e=="string")l=Vh(e,t,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=wa(31,t,a,o),e.elementType=ee,e.lanes=i,e;case B:return Qt(t.children,o,i,a);case J:l=8,o|=24;break;case Z:return e=wa(12,t,a,o|2),e.elementType=Z,e.lanes=i,e;case ne:return e=wa(13,t,a,o),e.elementType=ne,e.lanes=i,e;case te:return e=wa(19,t,a,o),e.elementType=te,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:l=10;break e;case I:l=9;break e;case xe:l=11;break e;case K:l=14;break e;case Q:l=16,n=null;break e}l=29,t=Error(c(130,e===null?"null":typeof e,"")),n=null}return a=wa(l,t,a,o),a.elementType=e,a.type=n,a.lanes=i,a}function Qt(e,a,t,n){return e=wa(7,e,n,a),e.lanes=t,e}function cl(e,a,t){return e=wa(6,e,null,a),e.lanes=t,e}function lu(e){var a=wa(18,null,null,0);return a.stateNode=e,a}function ul(e,a,t){return a=wa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var ru=new WeakMap;function Aa(e,a){if(typeof e=="object"&&e!==null){var t=ru.get(e);return t!==void 0?t:(a={value:e,source:a,stack:eo(a)},ru.set(e,a),a)}return{value:e,source:a,stack:eo(a)}}var kn=[],Sn=0,qs=null,vo=0,Ca=[],Ma=0,ht=null,Ya=1,Va="";function $a(e,a){kn[Sn++]=vo,kn[Sn++]=qs,qs=e,vo=a}function cu(e,a,t){Ca[Ma++]=Ya,Ca[Ma++]=Va,Ca[Ma++]=ht,ht=e;var n=Ya;e=Va;var o=32-na(n)-1;n&=~(1<<o),t+=1;var i=32-na(a)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Ya=1<<32-na(a)+o|t<<o|n,Va=i+e}else Ya=1<<i|t<<o|n,Va=e}function dl(e){e.return!==null&&($a(e,1),cu(e,1,0))}function pl(e){for(;e===qs;)qs=kn[--Sn],kn[Sn]=null,vo=kn[--Sn],kn[Sn]=null;for(;e===ht;)ht=Ca[--Ma],Ca[Ma]=null,Va=Ca[--Ma],Ca[Ma]=null,Ya=Ca[--Ma],Ca[Ma]=null}function uu(e,a){Ca[Ma++]=Ya,Ca[Ma++]=Va,Ca[Ma++]=ht,Ya=a.id,Va=a.overflow,ht=e}var sa=null,Be=null,Ne=!1,gt=null,Ua=!1,ml=Error(c(519));function bt(e){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(Aa(a,e)),ml}function du(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[oa]=e,a[pa]=n,t){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(t=0;t<Ro.length;t++)ze(Ro[t],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":ze("invalid",a),kc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ze("invalid",a);break;case"textarea":ze("invalid",a),Nc(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Ep(a.textContent,t)?(n.popover!=null&&(ze("beforetoggle",a),ze("toggle",a)),n.onScroll!=null&&ze("scroll",a),n.onScrollEnd!=null&&ze("scrollend",a),n.onClick!=null&&(a.onclick=Ja),a=!0):a=!1,a||bt(e,!0)}function pu(e){for(sa=e.return;sa;)switch(sa.tag){case 5:case 31:case 13:Ua=!1;return;case 27:case 3:Ua=!0;return;default:sa=sa.return}}function Nn(e){if(e!==sa)return!1;if(!Ne)return pu(e),Ne=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Cr(e.type,e.memoizedProps)),t=!t),t&&Be&&bt(e),pu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=_p(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=_p(e)}else a===27?(a=Be,Ct(e.type)?(e=Or,Or=null,Be=e):Be=a):Be=sa?La(e.stateNode.nextSibling):null;return!0}function Xt(){Be=sa=null,Ne=!1}function fl(){var e=gt;return e!==null&&(ba===null?ba=e:ba.push.apply(ba,e),gt=null),e}function xo(e){gt===null?gt=[e]:gt.push(e)}var hl=g(null),Zt=null,Fa=null;function vt(e,a,t){V(hl,a._currentValue),a._currentValue=t}function Pa(e){e._currentValue=hl.current,M(hl)}function gl(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function bl(e,a,t,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var i=o.dependencies;if(i!==null){var l=o.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=o;for(var p=0;p<a.length;p++)if(r.context===a[p]){i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),gl(i.return,t,e),n||(l=null);break e}i=r.next}}else if(o.tag===18){if(l=o.return,l===null)throw Error(c(341));l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),gl(l,t,e),l=null}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}}function qn(e,a,t,n){e=null;for(var o=a,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var l=o.alternate;if(l===null)throw Error(c(387));if(l=l.memoizedProps,l!==null){var r=o.type;ya(o.pendingProps.value,l.value)||(e!==null?e.push(r):e=[r])}}else if(o===O.current){if(l=o.alternate,l===null)throw Error(c(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}o=o.return}e!==null&&bl(a,e,t,n),a.flags|=262144}function Es(e){for(e=e.firstContext;e!==null;){if(!ya(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kt(e){Zt=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return mu(Zt,e)}function Ts(e,a){return Zt===null&&Kt(e),mu(e,a)}function mu(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Fa===null){if(e===null)throw Error(c(308));Fa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Fa=Fa.next=a;return t}var Gf=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Bf=u.unstable_scheduleCallback,Rf=u.unstable_NormalPriority,Ke={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vl(){return{controller:new Gf,data:new Map,refCount:0}}function yo(e){e.refCount--,e.refCount===0&&Bf(Rf,function(){e.controller.abort()})}var wo=null,xl=0,En=0,Tn=null;function Yf(e,a){if(wo===null){var t=wo=[];xl=0,En=jr(),Tn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return xl++,a.then(fu,fu),a}function fu(){if(--xl===0&&wo!==null){Tn!==null&&(Tn.status="fulfilled");var e=wo;wo=null,En=0,Tn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Vf(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var hu=N.S;N.S=function(e,a){Fd=ca(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Yf(e,a),hu!==null&&hu(e,a)};var Jt=g(null);function yl(){var e=Jt.current;return e!==null?e:_e.pooledCache}function As(e,a){a===null?V(Jt,Jt.current):V(Jt,a.pool)}function gu(){var e=yl();return e===null?null:{parent:Ke._currentValue,pool:e}}var An=Error(c(460)),wl=Error(c(474)),Cs=Error(c(542)),Ms={then:function(){}};function bu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vu(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ja,Ja),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yu(e),e;default:if(typeof a.status=="string")a.then(Ja,Ja);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=n}},function(n){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yu(e),e}throw Wt=a,An}}function It(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Wt=t,An):t}}var Wt=null;function xu(){if(Wt===null)throw Error(c(459));var e=Wt;return Wt=null,e}function yu(e){if(e===An||e===Cs)throw Error(c(483))}var Cn=null,jo=0;function Us(e){var a=jo;return jo+=1,Cn===null&&(Cn=[]),vu(Cn,e,a)}function zo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ds(e,a){throw a.$$typeof===H?Error(c(525)):(e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function wu(e){function a(y,b){if(e){var k=y.deletions;k===null?(y.deletions=[b],y.flags|=16):k.push(b)}}function t(y,b){if(!e)return null;for(;b!==null;)a(y,b),b=b.sibling;return null}function n(y){for(var b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function o(y,b){return y=Wa(y,b),y.index=0,y.sibling=null,y}function i(y,b,k){return y.index=k,e?(k=y.alternate,k!==null?(k=k.index,k<b?(y.flags|=67108866,b):k):(y.flags|=67108866,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function r(y,b,k,U){return b===null||b.tag!==6?(b=cl(k,y.mode,U),b.return=y,b):(b=o(b,k),b.return=y,b)}function p(y,b,k,U){var oe=k.type;return oe===B?C(y,b,k.props.children,U,k.key):b!==null&&(b.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&It(oe)===b.type)?(b=o(b,k.props),zo(b,k),b.return=y,b):(b=Ns(k.type,k.key,k.props,null,y.mode,U),zo(b,k),b.return=y,b)}function S(y,b,k,U){return b===null||b.tag!==4||b.stateNode.containerInfo!==k.containerInfo||b.stateNode.implementation!==k.implementation?(b=ul(k,y.mode,U),b.return=y,b):(b=o(b,k.children||[]),b.return=y,b)}function C(y,b,k,U,oe){return b===null||b.tag!==7?(b=Qt(k,y.mode,U,oe),b.return=y,b):(b=o(b,k),b.return=y,b)}function L(y,b,k){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=cl(""+b,y.mode,k),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $:return k=Ns(b.type,b.key,b.props,null,y.mode,k),zo(k,b),k.return=y,k;case Y:return b=ul(b,y.mode,k),b.return=y,b;case Q:return b=It(b),L(y,b,k)}if(be(b)||D(b))return b=Qt(b,y.mode,k,null),b.return=y,b;if(typeof b.then=="function")return L(y,Us(b),k);if(b.$$typeof===P)return L(y,Ts(y,b),k);Ds(y,b)}return null}function q(y,b,k,U){var oe=b!==null?b.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return oe!==null?null:r(y,b,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $:return k.key===oe?p(y,b,k,U):null;case Y:return k.key===oe?S(y,b,k,U):null;case Q:return k=It(k),q(y,b,k,U)}if(be(k)||D(k))return oe!==null?null:C(y,b,k,U,null);if(typeof k.then=="function")return q(y,b,Us(k),U);if(k.$$typeof===P)return q(y,b,Ts(y,k),U);Ds(y,k)}return null}function A(y,b,k,U,oe){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return y=y.get(k)||null,r(b,y,""+U,oe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case $:return y=y.get(U.key===null?k:U.key)||null,p(b,y,U,oe);case Y:return y=y.get(U.key===null?k:U.key)||null,S(b,y,U,oe);case Q:return U=It(U),A(y,b,k,U,oe)}if(be(U)||D(U))return y=y.get(k)||null,C(b,y,U,oe,null);if(typeof U.then=="function")return A(y,b,k,Us(U),oe);if(U.$$typeof===P)return A(y,b,k,Ts(b,U),oe);Ds(b,U)}return null}function F(y,b,k,U){for(var oe=null,Ee=null,ae=b,ge=b=0,Se=null;ae!==null&&ge<k.length;ge++){ae.index>ge?(Se=ae,ae=null):Se=ae.sibling;var Te=q(y,ae,k[ge],U);if(Te===null){ae===null&&(ae=Se);break}e&&ae&&Te.alternate===null&&a(y,ae),b=i(Te,b,ge),Ee===null?oe=Te:Ee.sibling=Te,Ee=Te,ae=Se}if(ge===k.length)return t(y,ae),Ne&&$a(y,ge),oe;if(ae===null){for(;ge<k.length;ge++)ae=L(y,k[ge],U),ae!==null&&(b=i(ae,b,ge),Ee===null?oe=ae:Ee.sibling=ae,Ee=ae);return Ne&&$a(y,ge),oe}for(ae=n(ae);ge<k.length;ge++)Se=A(ae,y,ge,k[ge],U),Se!==null&&(e&&Se.alternate!==null&&ae.delete(Se.key===null?ge:Se.key),b=i(Se,b,ge),Ee===null?oe=Se:Ee.sibling=Se,Ee=Se);return e&&ae.forEach(function(Ot){return a(y,Ot)}),Ne&&$a(y,ge),oe}function ie(y,b,k,U){if(k==null)throw Error(c(151));for(var oe=null,Ee=null,ae=b,ge=b=0,Se=null,Te=k.next();ae!==null&&!Te.done;ge++,Te=k.next()){ae.index>ge?(Se=ae,ae=null):Se=ae.sibling;var Ot=q(y,ae,Te.value,U);if(Ot===null){ae===null&&(ae=Se);break}e&&ae&&Ot.alternate===null&&a(y,ae),b=i(Ot,b,ge),Ee===null?oe=Ot:Ee.sibling=Ot,Ee=Ot,ae=Se}if(Te.done)return t(y,ae),Ne&&$a(y,ge),oe;if(ae===null){for(;!Te.done;ge++,Te=k.next())Te=L(y,Te.value,U),Te!==null&&(b=i(Te,b,ge),Ee===null?oe=Te:Ee.sibling=Te,Ee=Te);return Ne&&$a(y,ge),oe}for(ae=n(ae);!Te.done;ge++,Te=k.next())Te=A(ae,y,ge,Te.value,U),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?ge:Te.key),b=i(Te,b,ge),Ee===null?oe=Te:Ee.sibling=Te,Ee=Te);return e&&ae.forEach(function(eg){return a(y,eg)}),Ne&&$a(y,ge),oe}function Oe(y,b,k,U){if(typeof k=="object"&&k!==null&&k.type===B&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case $:e:{for(var oe=k.key;b!==null;){if(b.key===oe){if(oe=k.type,oe===B){if(b.tag===7){t(y,b.sibling),U=o(b,k.props.children),U.return=y,y=U;break e}}else if(b.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Q&&It(oe)===b.type){t(y,b.sibling),U=o(b,k.props),zo(U,k),U.return=y,y=U;break e}t(y,b);break}else a(y,b);b=b.sibling}k.type===B?(U=Qt(k.props.children,y.mode,U,k.key),U.return=y,y=U):(U=Ns(k.type,k.key,k.props,null,y.mode,U),zo(U,k),U.return=y,y=U)}return l(y);case Y:e:{for(oe=k.key;b!==null;){if(b.key===oe)if(b.tag===4&&b.stateNode.containerInfo===k.containerInfo&&b.stateNode.implementation===k.implementation){t(y,b.sibling),U=o(b,k.children||[]),U.return=y,y=U;break e}else{t(y,b);break}else a(y,b);b=b.sibling}U=ul(k,y.mode,U),U.return=y,y=U}return l(y);case Q:return k=It(k),Oe(y,b,k,U)}if(be(k))return F(y,b,k,U);if(D(k)){if(oe=D(k),typeof oe!="function")throw Error(c(150));return k=oe.call(k),ie(y,b,k,U)}if(typeof k.then=="function")return Oe(y,b,Us(k),U);if(k.$$typeof===P)return Oe(y,b,Ts(y,k),U);Ds(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,b!==null&&b.tag===6?(t(y,b.sibling),U=o(b,k),U.return=y,y=U):(t(y,b),U=cl(k,y.mode,U),U.return=y,y=U),l(y)):t(y,b)}return function(y,b,k,U){try{jo=0;var oe=Oe(y,b,k,U);return Cn=null,oe}catch(ae){if(ae===An||ae===Cs)throw ae;var Ee=wa(29,ae,null,y.mode);return Ee.lanes=U,Ee.return=y,Ee}}}var $t=wu(!0),ju=wu(!1),xt=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zl(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ae&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,a=Ss(e),su(e,null,t),a}return ks(e,n,a,t),Ss(e)}function ko(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,mc(e,t)}}function kl(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=a:i=i.next=a}else o=i=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Sl=!1;function So(){if(Sl){var e=Tn;if(e!==null)throw e}}function No(e,a,t,n){Sl=!1;var o=e.updateQueue;xt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var p=r,S=p.next;p.next=null,l===null?i=S:l.next=S,l=p;var C=e.alternate;C!==null&&(C=C.updateQueue,r=C.lastBaseUpdate,r!==l&&(r===null?C.firstBaseUpdate=S:r.next=S,C.lastBaseUpdate=p))}if(i!==null){var L=o.baseState;l=0,C=S=p=null,r=i;do{var q=r.lane&-536870913,A=q!==r.lane;if(A?(ke&q)===q:(n&q)===q){q!==0&&q===En&&(Sl=!0),C!==null&&(C=C.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var F=e,ie=r;q=a;var Oe=t;switch(ie.tag){case 1:if(F=ie.payload,typeof F=="function"){L=F.call(Oe,L,q);break e}L=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ie.payload,q=typeof F=="function"?F.call(Oe,L,q):F,q==null)break e;L=T({},L,q);break e;case 2:xt=!0}}q=r.callback,q!==null&&(e.flags|=64,A&&(e.flags|=8192),A=o.callbacks,A===null?o.callbacks=[q]:A.push(q))}else A={lane:q,tag:r.tag,payload:r.payload,callback:r.callback,next:null},C===null?(S=C=A,p=L):C=C.next=A,l|=q;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;A=r,r=A.next,A.next=null,o.lastBaseUpdate=A,o.shared.pending=null}}while(!0);C===null&&(p=L),o.baseState=p,o.firstBaseUpdate=S,o.lastBaseUpdate=C,i===null&&(o.shared.lanes=0),Nt|=l,e.lanes=l,e.memoizedState=L}}function zu(e,a){if(typeof e!="function")throw Error(c(191,e));e.call(a)}function ku(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)zu(t[e],a)}var Mn=g(null),Ls=g(0);function Su(e,a){e=rt,V(Ls,e),V(Mn,a),rt=e|a.baseLanes}function Nl(){V(Ls,rt),V(Mn,Mn.current)}function ql(){rt=Ls.current,M(Mn),M(Ls)}var ja=g(null),Da=null;function jt(e){var a=e.alternate;V(Xe,Xe.current&1),V(ja,e),Da===null&&(a===null||Mn.current!==null||a.memoizedState!==null)&&(Da=e)}function El(e){V(Xe,Xe.current),V(ja,e),Da===null&&(Da=e)}function Nu(e){e.tag===22?(V(Xe,Xe.current),V(ja,e),Da===null&&(Da=e)):zt()}function zt(){V(Xe,Xe.current),V(ja,ja.current)}function za(e){M(ja),Da===e&&(Da=null),M(Xe)}var Xe=g(0);function Os(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Dr(t)||Lr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var et=0,de=null,De=null,Je=null,_s=!1,Un=!1,Ft=!1,Hs=0,qo=0,Dn=null,Qf=0;function Ve(){throw Error(c(321))}function Tl(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ya(e[t],a[t]))return!1;return!0}function Al(e,a,t,n,o,i){return et=i,de=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=e===null||e.memoizedState===null?cd:Xl,Ft=!1,i=t(n,o),Ft=!1,Un&&(i=Eu(a,t,n,o)),qu(e),i}function qu(e){N.H=Ao;var a=De!==null&&De.next!==null;if(et=0,Je=De=de=null,_s=!1,qo=0,Dn=null,a)throw Error(c(300));e===null||Ie||(e=e.dependencies,e!==null&&Es(e)&&(Ie=!0))}function Eu(e,a,t,n){de=e;var o=0;do{if(Un&&(Dn=null),qo=0,Un=!1,25<=o)throw Error(c(301));if(o+=1,Je=De=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=ud,i=a(t,n)}while(Un);return i}function Xf(){var e=N.H,a=e.useState()[0];return a=typeof a.then=="function"?Eo(a):a,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(de.flags|=1024),a}function Cl(){var e=Hs!==0;return Hs=0,e}function Ml(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Ul(e){if(_s){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}_s=!1}et=0,Je=De=de=null,Un=!1,qo=Hs=0,Dn=null}function da(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?de.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(De===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var a=Je===null?de.memoizedState:Je.next;if(a!==null)Je=a,De=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Je===null?de.memoizedState=Je=e:Je=Je.next=e}return Je}function Gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var a=qo;return qo+=1,Dn===null&&(Dn=[]),e=vu(Dn,e,a),a=de,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?cd:Xl),e}function Bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===P)return ia(e)}throw Error(c(438,String(e)))}function Dl(e){var a=null,t=de.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Gs(),de.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=Ue;return a.index++,t}function at(e,a){return typeof a=="function"?a(e):a}function Rs(e){var a=Ze();return Ll(a,De,e)}function Ll(e,a,t){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var o=e.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}a.baseQueue=o=i,n.pending=null}if(i=e.baseState,o===null)e.memoizedState=i;else{a=o.next;var r=l=null,p=null,S=a,C=!1;do{var L=S.lane&-536870913;if(L!==S.lane?(ke&L)===L:(et&L)===L){var q=S.revertLane;if(q===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),L===En&&(C=!0);else if((et&q)===q){S=S.next,q===En&&(C=!0);continue}else L={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(r=p=L,l=i):p=p.next=L,de.lanes|=q,Nt|=q;L=S.action,Ft&&t(i,L),i=S.hasEagerState?S.eagerState:t(i,L)}else q={lane:L,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(r=p=q,l=i):p=p.next=q,de.lanes|=L,Nt|=L;S=S.next}while(S!==null&&S!==a);if(p===null?l=i:p.next=r,!ya(i,e.memoizedState)&&(Ie=!0,C&&(t=Tn,t!==null)))throw t;e.memoizedState=i,e.baseState=l,e.baseQueue=p,n.lastRenderedState=i}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ol(e){var a=Ze(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,i=a.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ya(i,a.memoizedState)||(Ie=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,n]}function Tu(e,a,t){var n=de,o=Ze(),i=Ne;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=a();var l=!ya((De||o).memoizedState,t);if(l&&(o.memoizedState=t,Ie=!0),o=o.queue,Gl(Mu.bind(null,n,o,e),[e]),o.getSnapshot!==a||l||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ln(9,{destroy:void 0},Cu.bind(null,n,o,t,a),null),_e===null)throw Error(c(349));i||(et&127)!==0||Au(n,a,t)}return t}function Au(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=de.updateQueue,a===null?(a=Gs(),de.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Cu(e,a,t,n){a.value=t,a.getSnapshot=n,Uu(a)&&Du(e)}function Mu(e,a,t){return t(function(){Uu(a)&&Du(e)})}function Uu(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ya(e,t)}catch{return!0}}function Du(e){var a=Vt(e,2);a!==null&&va(a,e,2)}function _l(e){var a=da();if(typeof e=="function"){var t=e;if(e=t(),Ft){Za(!0);try{t()}finally{Za(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:e},a}function Lu(e,a,t,n){return e.baseState=t,Ll(e,De,typeof n=="function"?n:at)}function Zf(e,a,t,n,o){if(Qs(e))throw Error(c(485));if(e=a.action,e!==null){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};N.T!==null?t(!0):i.isTransition=!1,n(i),t=a.pending,t===null?(i.next=a.pending=i,Ou(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Ou(e,a){var t=a.action,n=a.payload,o=e.state;if(a.isTransition){var i=N.T,l={};N.T=l;try{var r=t(o,n),p=N.S;p!==null&&p(l,r),_u(e,a,r)}catch(S){Hl(e,a,S)}finally{i!==null&&l.types!==null&&(i.types=l.types),N.T=i}}else try{i=t(o,n),_u(e,a,i)}catch(S){Hl(e,a,S)}}function _u(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Hu(e,a,n)},function(n){return Hl(e,a,n)}):Hu(e,a,t)}function Hu(e,a,t){a.status="fulfilled",a.value=t,Gu(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Ou(e,t)))}function Hl(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Gu(a),a=a.next;while(a!==n)}e.action=null}function Gu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Bu(e,a){return a}function Ru(e,a){if(Ne){var t=_e.formState;if(t!==null){e:{var n=de;if(Ne){if(Be){a:{for(var o=Be,i=Ua;o.nodeType!==8;){if(!i){o=null;break a}if(o=La(o.nextSibling),o===null){o=null;break a}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){Be=La(o.nextSibling),n=o.data==="F!";break e}}bt(n)}n=!1}n&&(a=t[0])}}return t=da(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bu,lastRenderedState:a},t.queue=n,t=id.bind(null,de,n),n.dispatch=t,n=_l(!1),i=Ql.bind(null,de,!1,n.queue),n=da(),o={state:a,dispatch:null,action:e,pending:null},n.queue=o,t=Zf.bind(null,de,o,i,t),o.dispatch=t,n.memoizedState=e,[a,t,!1]}function Yu(e){var a=Ze();return Vu(a,De,e)}function Vu(e,a,t){if(a=Ll(e,a,Bu)[0],e=Rs(at)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Eo(a)}catch(l){throw l===An?Cs:l}else n=a;a=Ze();var o=a.queue,i=o.dispatch;return t!==a.memoizedState&&(de.flags|=2048,Ln(9,{destroy:void 0},Kf.bind(null,o,t),null)),[n,i,e]}function Kf(e,a){e.action=a}function Qu(e){var a=Ze(),t=De;if(t!==null)return Vu(a,t,e);Ze(),a=a.memoizedState,t=Ze();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Ln(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=de.updateQueue,a===null&&(a=Gs(),de.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Xu(){return Ze().memoizedState}function Ys(e,a,t,n){var o=da();de.flags|=e,o.memoizedState=Ln(1|a,{destroy:void 0},t,n===void 0?null:n)}function Vs(e,a,t,n){var o=Ze();n=n===void 0?null:n;var i=o.memoizedState.inst;De!==null&&n!==null&&Tl(n,De.memoizedState.deps)?o.memoizedState=Ln(a,i,t,n):(de.flags|=e,o.memoizedState=Ln(1|a,i,t,n))}function Zu(e,a){Ys(8390656,8,e,a)}function Gl(e,a){Vs(2048,8,e,a)}function Jf(e){de.flags|=4;var a=de.updateQueue;if(a===null)a=Gs(),de.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Ku(e){var a=Ze().memoizedState;return Jf({ref:a,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function Ju(e,a){return Vs(4,2,e,a)}function Iu(e,a){return Vs(4,4,e,a)}function Wu(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function $u(e,a,t){t=t!=null?t.concat([e]):null,Vs(4,4,Wu.bind(null,a,e),t)}function Bl(){}function Fu(e,a){var t=Ze();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Tl(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Pu(e,a){var t=Ze();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Tl(a,n[1]))return n[0];if(n=e(),Ft){Za(!0);try{e()}finally{Za(!1)}}return t.memoizedState=[n,a],n}function Rl(e,a,t){return t===void 0||(et&1073741824)!==0&&(ke&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=ep(),de.lanes|=e,Nt|=e,t)}function ed(e,a,t,n){return ya(t,a)?t:Mn.current!==null?(e=Rl(e,t,n),ya(e,a)||(Ie=!0),e):(et&42)===0||(et&1073741824)!==0&&(ke&261930)===0?(Ie=!0,e.memoizedState=t):(e=ep(),de.lanes|=e,Nt|=e,a)}function ad(e,a,t,n,o){var i=G.p;G.p=i!==0&&8>i?i:8;var l=N.T,r={};N.T=r,Ql(e,!1,a,t);try{var p=o(),S=N.S;if(S!==null&&S(r,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=Vf(p,n);To(e,a,C,Na(e))}else To(e,a,n,Na(e))}catch(L){To(e,a,{then:function(){},status:"rejected",reason:L},Na())}finally{G.p=i,l!==null&&r.types!==null&&(l.types=r.types),N.T=l}}function If(){}function Yl(e,a,t,n){if(e.tag!==5)throw Error(c(476));var o=td(e).queue;ad(e,o,a,W,t===null?If:function(){return nd(e),t(n)})}function td(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:W},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function nd(e){var a=td(e);a.next===null&&(a=e.alternate.memoizedState),To(e,a.next.queue,{},Na())}function Vl(){return ia(Zo)}function od(){return Ze().memoizedState}function sd(){return Ze().memoizedState}function Wf(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Na();e=yt(t);var n=wt(a,e,t);n!==null&&(va(n,a,t),ko(n,a,t)),a={cache:vl()},e.payload=a;return}a=a.return}}function $f(e,a,t){var n=Na();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Qs(e)?ld(a,t):(t=ll(e,a,t,n),t!==null&&(va(t,e,n),rd(t,a,n)))}function id(e,a,t){var n=Na();To(e,a,t,n)}function To(e,a,t,n){var o={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qs(e))ld(a,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var l=a.lastRenderedState,r=i(l,t);if(o.hasEagerState=!0,o.eagerState=r,ya(r,l))return ks(e,a,o,0),_e===null&&zs(),!1}catch{}if(t=ll(e,a,o,n),t!==null)return va(t,e,n),rd(t,a,n),!0}return!1}function Ql(e,a,t,n){if(n={lane:2,revertLane:jr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qs(e)){if(a)throw Error(c(479))}else a=ll(e,t,n,2),a!==null&&va(a,e,2)}function Qs(e){var a=e.alternate;return e===de||a!==null&&a===de}function ld(e,a){Un=_s=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function rd(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,mc(e,t)}}var Ao={readContext:ia,use:Bs,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};Ao.useEffectEvent=Ve;var cd={readContext:ia,use:Bs,useCallback:function(e,a){return da().memoizedState=[e,a===void 0?null:a],e},useContext:ia,useEffect:Zu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Ys(4194308,4,Wu.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Ys(4194308,4,e,a)},useInsertionEffect:function(e,a){Ys(4,2,e,a)},useMemo:function(e,a){var t=da();a=a===void 0?null:a;var n=e();if(Ft){Za(!0);try{e()}finally{Za(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=da();if(t!==void 0){var o=t(a);if(Ft){Za(!0);try{t(a)}finally{Za(!1)}}}else o=a;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=$f.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var a=da();return e={current:e},a.memoizedState=e},useState:function(e){e=_l(e);var a=e.queue,t=id.bind(null,de,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Bl,useDeferredValue:function(e,a){var t=da();return Rl(t,e,a)},useTransition:function(){var e=_l(!1);return e=ad.bind(null,de,e.queue,!0,!1),da().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=de,o=da();if(Ne){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),_e===null)throw Error(c(349));(ke&127)!==0||Au(n,a,t)}o.memoizedState=t;var i={value:t,getSnapshot:a};return o.queue=i,Zu(Mu.bind(null,n,i,e),[e]),n.flags|=2048,Ln(9,{destroy:void 0},Cu.bind(null,n,i,t,a),null),t},useId:function(){var e=da(),a=_e.identifierPrefix;if(Ne){var t=Va,n=Ya;t=(n&~(1<<32-na(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Hs++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Qf++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Vl,useFormState:Ru,useActionState:Ru,useOptimistic:function(e){var a=da();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Ql.bind(null,de,!0,t),t.dispatch=a,[e,a]},useMemoCache:Dl,useCacheRefresh:function(){return da().memoizedState=Wf.bind(null,de)},useEffectEvent:function(e){var a=da(),t={impl:e};return a.memoizedState=t,function(){if((Ae&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Xl={readContext:ia,use:Bs,useCallback:Fu,useContext:ia,useEffect:Gl,useImperativeHandle:$u,useInsertionEffect:Ju,useLayoutEffect:Iu,useMemo:Pu,useReducer:Rs,useRef:Xu,useState:function(){return Rs(at)},useDebugValue:Bl,useDeferredValue:function(e,a){var t=Ze();return ed(t,De.memoizedState,e,a)},useTransition:function(){var e=Rs(at)[0],a=Ze().memoizedState;return[typeof e=="boolean"?e:Eo(e),a]},useSyncExternalStore:Tu,useId:od,useHostTransitionStatus:Vl,useFormState:Yu,useActionState:Yu,useOptimistic:function(e,a){var t=Ze();return Lu(t,De,e,a)},useMemoCache:Dl,useCacheRefresh:sd};Xl.useEffectEvent=Ku;var ud={readContext:ia,use:Bs,useCallback:Fu,useContext:ia,useEffect:Gl,useImperativeHandle:$u,useInsertionEffect:Ju,useLayoutEffect:Iu,useMemo:Pu,useReducer:Ol,useRef:Xu,useState:function(){return Ol(at)},useDebugValue:Bl,useDeferredValue:function(e,a){var t=Ze();return De===null?Rl(t,e,a):ed(t,De.memoizedState,e,a)},useTransition:function(){var e=Ol(at)[0],a=Ze().memoizedState;return[typeof e=="boolean"?e:Eo(e),a]},useSyncExternalStore:Tu,useId:od,useHostTransitionStatus:Vl,useFormState:Qu,useActionState:Qu,useOptimistic:function(e,a){var t=Ze();return De!==null?Lu(t,De,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Dl,useCacheRefresh:sd};ud.useEffectEvent=Ku;function Zl(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:T({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Kl={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Na(),o=yt(n);o.payload=a,t!=null&&(o.callback=t),a=wt(e,o,n),a!==null&&(va(a,e,n),ko(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Na(),o=yt(n);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=wt(e,o,n),a!==null&&(va(a,e,n),ko(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Na(),n=yt(t);n.tag=2,a!=null&&(n.callback=a),a=wt(e,n,t),a!==null&&(va(a,e,t),ko(a,e,t))}};function dd(e,a,t,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):a.prototype&&a.prototype.isPureReactComponent?!go(t,n)||!go(o,i):!0}function pd(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Kl.enqueueReplaceState(a,a.state,null)}function Pt(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=T({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function md(e){js(e)}function fd(e){console.error(e)}function hd(e){js(e)}function Xs(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function gd(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Jl(e,a,t){return t=yt(t),t.tag=3,t.payload={element:null},t.callback=function(){Xs(e,a)},t}function bd(e){return e=yt(e),e.tag=3,e}function vd(e,a,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=n.value;e.payload=function(){return o(i)},e.callback=function(){gd(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){gd(a,t,n),typeof o!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Ff(e,a,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&qn(a,t,o,!0),t=ja.current,t!==null){switch(t.tag){case 31:case 13:return Da===null?ni():t.alternate===null&&Qe===0&&(Qe=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===Ms?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),xr(e,n,o)),!1;case 22:return t.flags|=65536,n===Ms?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),xr(e,n,o)),!1}throw Error(c(435,t.tag))}return xr(e,n,o),ni(),!1}if(Ne)return a=ja.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,n!==ml&&(e=Error(c(422),{cause:n}),xo(Aa(e,t)))):(n!==ml&&(a=Error(c(423),{cause:n}),xo(Aa(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=Aa(n,t),o=Jl(e.stateNode,n,o),kl(e,o),Qe!==4&&(Qe=2)),!1;var i=Error(c(520),{cause:n});if(i=Aa(i,t),Ho===null?Ho=[i]:Ho.push(i),Qe!==4&&(Qe=2),a===null)return!0;n=Aa(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Jl(t.stateNode,n,e),kl(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(qt===null||!qt.has(i))))return t.flags|=65536,o&=-o,t.lanes|=o,o=bd(o),vd(o,e,t,n),kl(t,o),!1}t=t.return}while(t!==null);return!1}var Il=Error(c(461)),Ie=!1;function la(e,a,t,n){a.child=e===null?ju(a,null,t,n):$t(a,e.child,t,n)}function xd(e,a,t,n,o){t=t.render;var i=a.ref;if("ref"in n){var l={};for(var r in n)r!=="ref"&&(l[r]=n[r])}else l=n;return Kt(a),n=Al(e,a,t,l,i,o),r=Cl(),e!==null&&!Ie?(Ml(e,a,o),tt(e,a,o)):(Ne&&r&&dl(a),a.flags|=1,la(e,a,n,o),a.child)}function yd(e,a,t,n,o){if(e===null){var i=t.type;return typeof i=="function"&&!rl(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,wd(e,a,i,n,o)):(e=Ns(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!nr(e,o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:go,t(l,n)&&e.ref===a.ref)return tt(e,a,o)}return a.flags|=1,e=Wa(i,n),e.ref=a.ref,e.return=a,a.child=e}function wd(e,a,t,n,o){if(e!==null){var i=e.memoizedProps;if(go(i,n)&&e.ref===a.ref)if(Ie=!1,a.pendingProps=n=i,nr(e,o))(e.flags&131072)!==0&&(Ie=!0);else return a.lanes=e.lanes,tt(e,a,o)}return Wl(e,a,t,n,o)}function jd(e,a,t,n){var o=n.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(n=a.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~i}else n=0,a.child=null;return zd(e,a,i,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&As(a,i!==null?i.cachePool:null),i!==null?Su(a,i):Nl(),Nu(a);else return n=a.lanes=536870912,zd(e,a,i!==null?i.baseLanes|t:t,t,n)}else i!==null?(As(a,i.cachePool),Su(a,i),zt(),a.memoizedState=null):(e!==null&&As(a,null),Nl(),zt());return la(e,a,o,t),a.child}function Co(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function zd(e,a,t,n,o){var i=yl();return i=i===null?null:{parent:Ke._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&As(a,null),Nl(),Nu(a),e!==null&&qn(e,a,n,!0),a.childLanes=o,null}function Zs(e,a){return a=Js({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function kd(e,a,t){return $t(a,e.child,null,t),e=Zs(a,a.pendingProps),e.flags|=2,za(a),a.memoizedState=null,e}function Pf(e,a,t){var n=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ne){if(n.mode==="hidden")return e=Zs(a,n),a.lanes=536870912,Co(null,e);if(El(a),(e=Be)?(e=Op(e,Ua),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ht!==null?{id:Ya,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},t=lu(e),t.return=a,a.child=t,sa=a,Be=null)):e=null,e===null)throw bt(a);return a.lanes=536870912,null}return Zs(a,n)}var i=e.memoizedState;if(i!==null){var l=i.dehydrated;if(El(a),o)if(a.flags&256)a.flags&=-257,a=kd(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(c(558));else if(Ie||qn(e,a,t,!1),o=(t&e.childLanes)!==0,Ie||o){if(n=_e,n!==null&&(l=fc(n,t),l!==0&&l!==i.retryLane))throw i.retryLane=l,Vt(e,l),va(n,e,l),Il;ni(),a=kd(e,a,t)}else e=i.treeContext,Be=La(l.nextSibling),sa=a,Ne=!0,gt=null,Ua=!1,e!==null&&uu(a,e),a=Zs(a,n),a.flags|=4096;return a}return e=Wa(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ks(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Wl(e,a,t,n,o){return Kt(a),t=Al(e,a,t,n,void 0,o),n=Cl(),e!==null&&!Ie?(Ml(e,a,o),tt(e,a,o)):(Ne&&n&&dl(a),a.flags|=1,la(e,a,t,o),a.child)}function Sd(e,a,t,n,o,i){return Kt(a),a.updateQueue=null,t=Eu(a,n,t,o),qu(e),n=Cl(),e!==null&&!Ie?(Ml(e,a,i),tt(e,a,i)):(Ne&&n&&dl(a),a.flags|=1,la(e,a,t,i),a.child)}function Nd(e,a,t,n,o){if(Kt(a),a.stateNode===null){var i=zn,l=t.contextType;typeof l=="object"&&l!==null&&(i=ia(l)),i=new t(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Kl,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},jl(a),l=t.contextType,i.context=typeof l=="object"&&l!==null?ia(l):zn,i.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Zl(a,t,l,n),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&Kl.enqueueReplaceState(i,i.state,null),No(a,n,i,o),So(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){i=a.stateNode;var r=a.memoizedProps,p=Pt(t,r);i.props=p;var S=i.context,C=t.contextType;l=zn,typeof C=="object"&&C!==null&&(l=ia(C));var L=t.getDerivedStateFromProps;C=typeof L=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||S!==l)&&pd(a,i,n,l),xt=!1;var q=a.memoizedState;i.state=q,No(a,n,i,o),So(),S=a.memoizedState,r||q!==S||xt?(typeof L=="function"&&(Zl(a,t,L,n),S=a.memoizedState),(p=xt||dd(a,t,p,n,q,S,l))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=S),i.props=n,i.state=S,i.context=l,n=p):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,zl(e,a),l=a.memoizedProps,C=Pt(t,l),i.props=C,L=a.pendingProps,q=i.context,S=t.contextType,p=zn,typeof S=="object"&&S!==null&&(p=ia(S)),r=t.getDerivedStateFromProps,(S=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==L||q!==p)&&pd(a,i,n,p),xt=!1,q=a.memoizedState,i.state=q,No(a,n,i,o),So();var A=a.memoizedState;l!==L||q!==A||xt||e!==null&&e.dependencies!==null&&Es(e.dependencies)?(typeof r=="function"&&(Zl(a,t,r,n),A=a.memoizedState),(C=xt||dd(a,t,C,n,q,A,p)||e!==null&&e.dependencies!==null&&Es(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,A,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,A,p)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&q===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&q===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=A),i.props=n,i.state=A,i.context=p,n=C):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&q===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&q===e.memoizedState||(a.flags|=1024),n=!1)}return i=n,Ks(e,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&n?(a.child=$t(a,e.child,null,o),a.child=$t(a,null,t,o)):la(e,a,t,o),a.memoizedState=i.state,e=a.child):e=tt(e,a,o),e}function qd(e,a,t,n){return Xt(),a.flags|=256,la(e,a,t,n),a.child}var $l={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fl(e){return{baseLanes:e,cachePool:gu()}}function Pl(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Sa),e}function Ed(e,a,t){var n=a.pendingProps,o=!1,i=(a.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),l&&(o=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ne){if(o?jt(a):zt(),(e=Be)?(e=Op(e,Ua),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ht!==null?{id:Ya,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},t=lu(e),t.return=a,a.child=t,sa=a,Be=null)):e=null,e===null)throw bt(a);return Lr(e)?a.lanes=32:a.lanes=536870912,null}var r=n.children;return n=n.fallback,o?(zt(),o=a.mode,r=Js({mode:"hidden",children:r},o),n=Qt(n,o,t,null),r.return=a,n.return=a,r.sibling=n,a.child=r,n=a.child,n.memoizedState=Fl(t),n.childLanes=Pl(e,l,t),a.memoizedState=$l,Co(null,n)):(jt(a),er(a,r))}var p=e.memoizedState;if(p!==null&&(r=p.dehydrated,r!==null)){if(i)a.flags&256?(jt(a),a.flags&=-257,a=ar(e,a,t)):a.memoizedState!==null?(zt(),a.child=e.child,a.flags|=128,a=null):(zt(),r=n.fallback,o=a.mode,n=Js({mode:"visible",children:n.children},o),r=Qt(r,o,t,null),r.flags|=2,n.return=a,r.return=a,n.sibling=r,a.child=n,$t(a,e.child,null,t),n=a.child,n.memoizedState=Fl(t),n.childLanes=Pl(e,l,t),a.memoizedState=$l,a=Co(null,n));else if(jt(a),Lr(r)){if(l=r.nextSibling&&r.nextSibling.dataset,l)var S=l.dgst;l=S,n=Error(c(419)),n.stack="",n.digest=l,xo({value:n,source:null,stack:null}),a=ar(e,a,t)}else if(Ie||qn(e,a,t,!1),l=(t&e.childLanes)!==0,Ie||l){if(l=_e,l!==null&&(n=fc(l,t),n!==0&&n!==p.retryLane))throw p.retryLane=n,Vt(e,n),va(l,e,n),Il;Dr(r)||ni(),a=ar(e,a,t)}else Dr(r)?(a.flags|=192,a.child=e.child,a=null):(e=p.treeContext,Be=La(r.nextSibling),sa=a,Ne=!0,gt=null,Ua=!1,e!==null&&uu(a,e),a=er(a,n.children),a.flags|=4096);return a}return o?(zt(),r=n.fallback,o=a.mode,p=e.child,S=p.sibling,n=Wa(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,S!==null?r=Wa(S,r):(r=Qt(r,o,t,null),r.flags|=2),r.return=a,n.return=a,n.sibling=r,a.child=n,Co(null,n),n=a.child,r=e.child.memoizedState,r===null?r=Fl(t):(o=r.cachePool,o!==null?(p=Ke._currentValue,o=o.parent!==p?{parent:p,pool:p}:o):o=gu(),r={baseLanes:r.baseLanes|t,cachePool:o}),n.memoizedState=r,n.childLanes=Pl(e,l,t),a.memoizedState=$l,Co(e.child,n)):(jt(a),t=e.child,e=t.sibling,t=Wa(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function er(e,a){return a=Js({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Js(e,a){return e=wa(22,e,null,a),e.lanes=0,e}function ar(e,a,t){return $t(a,e.child,null,t),e=er(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Td(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),gl(e.return,a,t)}function tr(e,a,t,n,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o,treeForkCount:i}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=o,l.treeForkCount=i)}function Ad(e,a,t){var n=a.pendingProps,o=n.revealOrder,i=n.tail;n=n.children;var l=Xe.current,r=(l&2)!==0;if(r?(l=l&1|2,a.flags|=128):l&=1,V(Xe,l),la(e,a,n,t),n=Ne?vo:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,t,a);else if(e.tag===19)Td(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&Os(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),tr(a,!1,o,t,i,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Os(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}tr(a,!0,t,null,i,n);break;case"together":tr(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function tt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Nt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(qn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,t=Wa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Wa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function nr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Es(e)))}function eh(e,a,t){switch(a.tag){case 3:ye(a,a.stateNode.containerInfo),vt(a,Ke,e.memoizedState.cache),Xt();break;case 27:case 5:se(a);break;case 4:ye(a,a.stateNode.containerInfo);break;case 10:vt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,El(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(jt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Ed(e,a,t):(jt(a),e=tt(e,a,t),e!==null?e.sibling:null);jt(a);break;case 19:var o=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(qn(e,a,t,!1),n=(t&a.childLanes)!==0),o){if(n)return Ad(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Xe,Xe.current),n)break;return null;case 22:return a.lanes=0,jd(e,a,t,a.pendingProps);case 24:vt(a,Ke,e.memoizedState.cache)}return tt(e,a,t)}function Cd(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ie=!0;else{if(!nr(e,t)&&(a.flags&128)===0)return Ie=!1,eh(e,a,t);Ie=(e.flags&131072)!==0}else Ie=!1,Ne&&(a.flags&1048576)!==0&&cu(a,vo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=It(a.elementType),a.type=e,typeof e=="function")rl(e)?(n=Pt(e,n),a.tag=1,a=Nd(null,a,e,n,t)):(a.tag=0,a=Wl(null,a,e,n,t));else{if(e!=null){var o=e.$$typeof;if(o===xe){a.tag=11,a=xd(null,a,e,n,t);break e}else if(o===K){a.tag=14,a=yd(null,a,e,n,t);break e}}throw a=we(e)||e,Error(c(306,a,""))}}return a;case 0:return Wl(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,o=Pt(n,a.pendingProps),Nd(e,a,n,o,t);case 3:e:{if(ye(a,a.stateNode.containerInfo),e===null)throw Error(c(387));n=a.pendingProps;var i=a.memoizedState;o=i.element,zl(e,a),No(a,n,null,t);var l=a.memoizedState;if(n=l.cache,vt(a,Ke,n),n!==i.cache&&bl(a,[Ke],t,!0),So(),n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=qd(e,a,n,t);break e}else if(n!==o){o=Aa(Error(c(424)),a),xo(o),a=qd(e,a,n,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=La(e.firstChild),sa=a,Ne=!0,gt=null,Ua=!0,t=ju(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xt(),n===o){a=tt(e,a,t);break e}la(e,a,n,t)}a=a.child}return a;case 26:return Ks(e,a),e===null?(t=Yp(a.type,null,a.pendingProps,null))?a.memoizedState=t:Ne||(t=a.type,e=a.pendingProps,n=ui(fe.current).createElement(t),n[oa]=a,n[pa]=e,ra(n,t,e),aa(n),a.stateNode=n):a.memoizedState=Yp(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return se(a),e===null&&Ne&&(n=a.stateNode=Gp(a.type,a.pendingProps,fe.current),sa=a,Ua=!0,o=Be,Ct(a.type)?(Or=o,Be=La(n.firstChild)):Be=o),la(e,a,a.pendingProps.children,t),Ks(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ne&&((o=n=Be)&&(n=Ah(n,a.type,a.pendingProps,Ua),n!==null?(a.stateNode=n,sa=a,Be=La(n.firstChild),Ua=!1,o=!0):o=!1),o||bt(a)),se(a),o=a.type,i=a.pendingProps,l=e!==null?e.memoizedProps:null,n=i.children,Cr(o,i)?n=null:l!==null&&Cr(o,l)&&(a.flags|=32),a.memoizedState!==null&&(o=Al(e,a,Xf,null,null,t),Zo._currentValue=o),Ks(e,a),la(e,a,n,t),a.child;case 6:return e===null&&Ne&&((e=t=Be)&&(t=Ch(t,a.pendingProps,Ua),t!==null?(a.stateNode=t,sa=a,Be=null,e=!0):e=!1),e||bt(a)),null;case 13:return Ed(e,a,t);case 4:return ye(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=$t(a,null,n,t):la(e,a,n,t),a.child;case 11:return xd(e,a,a.type,a.pendingProps,t);case 7:return la(e,a,a.pendingProps,t),a.child;case 8:return la(e,a,a.pendingProps.children,t),a.child;case 12:return la(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,vt(a,a.type,n.value),la(e,a,n.children,t),a.child;case 9:return o=a.type._context,n=a.pendingProps.children,Kt(a),o=ia(o),n=n(o),a.flags|=1,la(e,a,n,t),a.child;case 14:return yd(e,a,a.type,a.pendingProps,t);case 15:return wd(e,a,a.type,a.pendingProps,t);case 19:return Ad(e,a,t);case 31:return Pf(e,a,t);case 22:return jd(e,a,t,a.pendingProps);case 24:return Kt(a),n=ia(Ke),e===null?(o=yl(),o===null&&(o=_e,i=vl(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=t),o=i),a.memoizedState={parent:n,cache:o},jl(a),vt(a,Ke,o)):((e.lanes&t)!==0&&(zl(e,a),No(a,null,null,t),So()),o=e.memoizedState,i=a.memoizedState,o.parent!==n?(o={parent:n,cache:n},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),vt(a,Ke,n)):(n=i.cache,vt(a,Ke,n),n!==o.cache&&bl(a,[Ke],t,!0))),la(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function nt(e){e.flags|=4}function or(e,a,t,n,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(op())e.flags|=8192;else throw Wt=Ms,wl}else e.flags&=-16777217}function Md(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kp(a))if(op())e.flags|=8192;else throw Wt=Ms,wl}function Is(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?dc():536870912,e.lanes|=a,Gn|=a)}function Mo(e,a){if(!Ne)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Re(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function ah(e,a,t){var n=a.pendingProps;switch(pl(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(a),null;case 1:return Re(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Pa(Ke),ue(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Nn(a)?nt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,fl())),Re(a),null;case 26:var o=a.type,i=a.memoizedState;return e===null?(nt(a),i!==null?(Re(a),Md(a,i)):(Re(a),or(a,o,null,n,t))):i?i!==e.memoizedState?(nt(a),Re(a),Md(a,i)):(Re(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&nt(a),Re(a),or(a,o,e,n,t)),null;case 27:if(Fe(a),t=fe.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&nt(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Re(a),null}e=X.current,Nn(a)?du(a):(e=Gp(o,n,t),a.stateNode=e,nt(a))}return Re(a),null;case 5:if(Fe(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&nt(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Re(a),null}if(i=X.current,Nn(a))du(a);else{var l=ui(fe.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?l.createElement(o,{is:n.is}):l.createElement(o)}}i[oa]=a,i[pa]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=i;e:switch(ra(i,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&nt(a)}}return Re(a),or(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&nt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(c(166));if(e=fe.current,Nn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,o=sa,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[oa]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Ep(e.nodeValue,t)),e||bt(a,!0)}else e=ui(e).createTextNode(n),e[oa]=a,a.stateNode=e}return Re(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=Nn(a),t!==null){if(e===null){if(!n)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[oa]=a}else Xt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Re(a),e=!1}else t=fl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(za(a),a):(za(a),null);if((a.flags&128)!==0)throw Error(c(558))}return Re(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Nn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[oa]=a}else Xt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Re(a),o=!1}else o=fl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(za(a),a):(za(a),null)}return za(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==o&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Is(a,a.updateQueue),Re(a),null);case 4:return ue(),e===null&&Nr(a.stateNode.containerInfo),Re(a),null;case 10:return Pa(a.type),Re(a),null;case 19:if(M(Xe),n=a.memoizedState,n===null)return Re(a),null;if(o=(a.flags&128)!==0,i=n.rendering,i===null)if(o)Mo(n,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=Os(e),i!==null){for(a.flags|=128,Mo(n,!1),e=i.updateQueue,a.updateQueue=e,Is(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)iu(t,e),t=t.sibling;return V(Xe,Xe.current&1|2),Ne&&$a(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&ca()>ei&&(a.flags|=128,o=!0,Mo(n,!1),a.lanes=4194304)}else{if(!o)if(e=Os(i),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Is(a,e),Mo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Ne)return Re(a),null}else 2*ca()-n.renderingStartTime>ei&&t!==536870912&&(a.flags|=128,o=!0,Mo(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(e=n.last,e!==null?e.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ca(),e.sibling=null,t=Xe.current,V(Xe,o?t&1|2:t&1),Ne&&$a(a,n.treeForkCount),e):(Re(a),null);case 22:case 23:return za(a),ql(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Re(a),a.subtreeFlags&6&&(a.flags|=8192)):Re(a),t=a.updateQueue,t!==null&&Is(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&M(Jt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Pa(Ke),Re(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function th(e,a){switch(pl(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Pa(Ke),ue(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Fe(a),null;case 31:if(a.memoizedState!==null){if(za(a),a.alternate===null)throw Error(c(340));Xt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Xt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return M(Xe),null;case 4:return ue(),null;case 10:return Pa(a.type),null;case 22:case 23:return za(a),ql(),e!==null&&M(Jt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Pa(Ke),null;case 25:return null;default:return null}}function Ud(e,a){switch(pl(a),a.tag){case 3:Pa(Ke),ue();break;case 26:case 27:case 5:Fe(a);break;case 4:ue();break;case 31:a.memoizedState!==null&&za(a);break;case 13:za(a);break;case 19:M(Xe);break;case 10:Pa(a.type);break;case 22:case 23:za(a),ql(),e!==null&&M(Jt);break;case 24:Pa(Ke)}}function Uo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){n=void 0;var i=t.create,l=t.inst;n=i(),l.destroy=n}t=t.next}while(t!==o)}}catch(r){Me(a,a.return,r)}}function kt(e,a,t){try{var n=a.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var i=o.next;n=i;do{if((n.tag&e)===e){var l=n.inst,r=l.destroy;if(r!==void 0){l.destroy=void 0,o=a;var p=t,S=r;try{S()}catch(C){Me(o,p,C)}}}n=n.next}while(n!==i)}}catch(C){Me(a,a.return,C)}}function Dd(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{ku(a,t)}catch(n){Me(e,e.return,n)}}}function Ld(e,a,t){t.props=Pt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Me(e,a,n)}}function Do(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(o){Me(e,a,o)}}function Qa(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){Me(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Me(e,a,o)}else t.current=null}function Od(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){Me(e,e.return,o)}}function sr(e,a,t){try{var n=e.stateNode;kh(n,e.type,t,a),n[pa]=a}catch(o){Me(e,e.return,o)}}function _d(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ct(e.type)||e.tag===4}function ir(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ct(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lr(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ja));else if(n!==4&&(n===27&&Ct(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(lr(e,a,t),e=e.sibling;e!==null;)lr(e,a,t),e=e.sibling}function Ws(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Ct(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ws(e,a,t),e=e.sibling;e!==null;)Ws(e,a,t),e=e.sibling}function Hd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);ra(a,n,t),a[oa]=e,a[pa]=t}catch(i){Me(e,e.return,i)}}var ot=!1,We=!1,rr=!1,Gd=typeof WeakSet=="function"?WeakSet:Set,ta=null;function nh(e,a){if(e=e.containerInfo,Tr=bi,e=$c(e),al(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,r=-1,p=-1,S=0,C=0,L=e,q=null;a:for(;;){for(var A;L!==t||o!==0&&L.nodeType!==3||(r=l+o),L!==i||n!==0&&L.nodeType!==3||(p=l+n),L.nodeType===3&&(l+=L.nodeValue.length),(A=L.firstChild)!==null;)q=L,L=A;for(;;){if(L===e)break a;if(q===t&&++S===o&&(r=l),q===i&&++C===n&&(p=l),(A=L.nextSibling)!==null)break;L=q,q=L.parentNode}L=A}t=r===-1||p===-1?null:{start:r,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ar={focusedElem:e,selectionRange:t},bi=!1,ta=a;ta!==null;)if(a=ta,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ta=e;else for(;ta!==null;){switch(a=ta,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)o=e[t],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,o=i.memoizedProps,i=i.memoizedState,n=t.stateNode;try{var F=Pt(t.type,o);e=n.getSnapshotBeforeUpdate(F,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(t,t.return,ie)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Ur(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ur(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=a.sibling,e!==null){e.return=a.return,ta=e;break}ta=a.return}}function Bd(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:it(e,t),n&4&&Uo(5,t);break;case 1:if(it(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){Me(t,t.return,l)}else{var o=Pt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Me(t,t.return,l)}}n&64&&Dd(t),n&512&&Do(t,t.return);break;case 3:if(it(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{ku(e,a)}catch(l){Me(t,t.return,l)}}break;case 27:a===null&&n&4&&Hd(t);case 26:case 5:it(e,t),a===null&&n&4&&Od(t),n&512&&Do(t,t.return);break;case 12:it(e,t);break;case 31:it(e,t),n&4&&Vd(e,t);break;case 13:it(e,t),n&4&&Qd(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=ph.bind(null,t),Mh(e,t))));break;case 22:if(n=t.memoizedState!==null||ot,!n){a=a!==null&&a.memoizedState!==null||We,o=ot;var i=We;ot=n,(We=a)&&!i?lt(e,t,(t.subtreeFlags&8772)!==0):it(e,t),ot=o,We=i}break;case 30:break;default:it(e,t)}}function Rd(e){var a=e.alternate;a!==null&&(e.alternate=null,Rd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Hi(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,fa=!1;function st(e,a,t){for(t=t.child;t!==null;)Yd(e,a,t),t=t.sibling}function Yd(e,a,t){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(qe,t)}catch{}switch(t.tag){case 26:We||Qa(t,a),st(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:We||Qa(t,a);var n=Ye,o=fa;Ct(t.type)&&(Ye=t.stateNode,fa=!1),st(e,a,t),Vo(t.stateNode),Ye=n,fa=o;break;case 5:We||Qa(t,a);case 6:if(n=Ye,o=fa,Ye=null,st(e,a,t),Ye=n,fa=o,Ye!==null)if(fa)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(t.stateNode)}catch(i){Me(t,a,i)}else try{Ye.removeChild(t.stateNode)}catch(i){Me(t,a,i)}break;case 18:Ye!==null&&(fa?(e=Ye,Dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Kn(e)):Dp(Ye,t.stateNode));break;case 4:n=Ye,o=fa,Ye=t.stateNode.containerInfo,fa=!0,st(e,a,t),Ye=n,fa=o;break;case 0:case 11:case 14:case 15:kt(2,t,a),We||kt(4,t,a),st(e,a,t);break;case 1:We||(Qa(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Ld(t,a,n)),st(e,a,t);break;case 21:st(e,a,t);break;case 22:We=(n=We)||t.memoizedState!==null,st(e,a,t),We=n;break;default:st(e,a,t)}}function Vd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kn(e)}catch(t){Me(a,a.return,t)}}}function Qd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kn(e)}catch(t){Me(a,a.return,t)}}function oh(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Gd),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Gd),a;default:throw Error(c(435,e.tag))}}function $s(e,a){var t=oh(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var o=mh.bind(null,e,n);n.then(o,o)}})}function ha(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],i=e,l=a,r=l;e:for(;r!==null;){switch(r.tag){case 27:if(Ct(r.type)){Ye=r.stateNode,fa=!1;break e}break;case 5:Ye=r.stateNode,fa=!1;break e;case 3:case 4:Ye=r.stateNode.containerInfo,fa=!0;break e}r=r.return}if(Ye===null)throw Error(c(160));Yd(i,l,o),Ye=null,fa=!1,i=o.alternate,i!==null&&(i.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Xd(a,e),a=a.sibling}var Ga=null;function Xd(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ha(a,e),ga(e),n&4&&(kt(3,e,e.return),Uo(3,e),kt(5,e,e.return));break;case 1:ha(a,e),ga(e),n&512&&(We||t===null||Qa(t,t.return)),n&64&&ot&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var o=Ga;if(ha(a,e),ga(e),n&512&&(We||t===null||Qa(t,t.return)),n&4){var i=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,o=o.ownerDocument||o;a:switch(n){case"title":i=o.getElementsByTagName("title")[0],(!i||i[io]||i[oa]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=o.createElement(n),o.head.insertBefore(i,o.querySelector("head > title"))),ra(i,n,t),i[oa]=e,aa(i),n=i;break e;case"link":var l=Xp("link","href",o).get(n+(t.href||""));if(l){for(var r=0;r<l.length;r++)if(i=l[r],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(r,1);break a}}i=o.createElement(n),ra(i,n,t),o.head.appendChild(i);break;case"meta":if(l=Xp("meta","content",o).get(n+(t.content||""))){for(r=0;r<l.length;r++)if(i=l[r],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(r,1);break a}}i=o.createElement(n),ra(i,n,t),o.head.appendChild(i);break;default:throw Error(c(468,n))}i[oa]=e,aa(i),n=i}e.stateNode=n}else Zp(o,e.type,e.stateNode);else e.stateNode=Qp(o,n,e.memoizedProps);else i!==n?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,n===null?Zp(o,e.type,e.stateNode):Qp(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&sr(e,e.memoizedProps,t.memoizedProps)}break;case 27:ha(a,e),ga(e),n&512&&(We||t===null||Qa(t,t.return)),t!==null&&n&4&&sr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ha(a,e),ga(e),n&512&&(We||t===null||Qa(t,t.return)),e.flags&32){o=e.stateNode;try{gn(o,"")}catch(F){Me(e,e.return,F)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,sr(e,o,t!==null?t.memoizedProps:o)),n&1024&&(rr=!0);break;case 6:if(ha(a,e),ga(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(F){Me(e,e.return,F)}}break;case 3:if(mi=null,o=Ga,Ga=di(a.containerInfo),ha(a,e),Ga=o,ga(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Kn(a.containerInfo)}catch(F){Me(e,e.return,F)}rr&&(rr=!1,Zd(e));break;case 4:n=Ga,Ga=di(e.stateNode.containerInfo),ha(a,e),ga(e),Ga=n;break;case 12:ha(a,e),ga(e);break;case 31:ha(a,e),ga(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$s(e,n)));break;case 13:ha(a,e),ga(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ps=ca()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$s(e,n)));break;case 22:o=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,S=ot,C=We;if(ot=S||o,We=C||p,ha(a,e),We=C,ot=S,ga(e),n&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(t===null||p||ot||We||en(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){p=t=a;try{if(i=p.stateNode,o)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{r=p.stateNode;var L=p.memoizedProps.style,q=L!=null&&L.hasOwnProperty("display")?L.display:null;r.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){Me(p,p.return,F)}}}else if(a.tag===6){if(t===null){p=a;try{p.stateNode.nodeValue=o?"":p.memoizedProps}catch(F){Me(p,p.return,F)}}}else if(a.tag===18){if(t===null){p=a;try{var A=p.stateNode;o?Lp(A,!0):Lp(p.stateNode,!1)}catch(F){Me(p,p.return,F)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,$s(e,t))));break;case 19:ha(a,e),ga(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$s(e,n)));break;case 30:break;case 21:break;default:ha(a,e),ga(e)}}function ga(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(_d(n)){t=n;break}n=n.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var o=t.stateNode,i=ir(e);Ws(e,i,o);break;case 5:var l=t.stateNode;t.flags&32&&(gn(l,""),t.flags&=-33);var r=ir(e);Ws(e,r,l);break;case 3:case 4:var p=t.stateNode.containerInfo,S=ir(e);lr(e,S,p);break;default:throw Error(c(161))}}catch(C){Me(e,e.return,C)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Zd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function it(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Bd(e,a.alternate,a),a=a.sibling}function en(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:kt(4,a,a.return),en(a);break;case 1:Qa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Ld(a,a.return,t),en(a);break;case 27:Vo(a.stateNode);case 26:case 5:Qa(a,a.return),en(a);break;case 22:a.memoizedState===null&&en(a);break;case 30:en(a);break;default:en(a)}e=e.sibling}}function lt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,o=e,i=a,l=i.flags;switch(i.tag){case 0:case 11:case 15:lt(o,i,t),Uo(4,i);break;case 1:if(lt(o,i,t),n=i,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(S){Me(n,n.return,S)}if(n=i,o=n.updateQueue,o!==null){var r=n.stateNode;try{var p=o.shared.hiddenCallbacks;if(p!==null)for(o.shared.hiddenCallbacks=null,o=0;o<p.length;o++)zu(p[o],r)}catch(S){Me(n,n.return,S)}}t&&l&64&&Dd(i),Do(i,i.return);break;case 27:Hd(i);case 26:case 5:lt(o,i,t),t&&n===null&&l&4&&Od(i),Do(i,i.return);break;case 12:lt(o,i,t);break;case 31:lt(o,i,t),t&&l&4&&Vd(o,i);break;case 13:lt(o,i,t),t&&l&4&&Qd(o,i);break;case 22:i.memoizedState===null&&lt(o,i,t),Do(i,i.return);break;case 30:break;default:lt(o,i,t)}a=a.sibling}}function cr(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&yo(t))}function ur(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&yo(e))}function Ba(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Kd(e,a,t,n),a=a.sibling}function Kd(e,a,t,n){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a,t,n),o&2048&&Uo(9,a);break;case 1:Ba(e,a,t,n);break;case 3:Ba(e,a,t,n),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&yo(e)));break;case 12:if(o&2048){Ba(e,a,t,n),e=a.stateNode;try{var i=a.memoizedProps,l=i.id,r=i.onPostCommit;typeof r=="function"&&r(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Me(a,a.return,p)}}else Ba(e,a,t,n);break;case 31:Ba(e,a,t,n);break;case 13:Ba(e,a,t,n);break;case 23:break;case 22:i=a.stateNode,l=a.alternate,a.memoizedState!==null?i._visibility&2?Ba(e,a,t,n):Lo(e,a):i._visibility&2?Ba(e,a,t,n):(i._visibility|=2,On(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),o&2048&&cr(l,a);break;case 24:Ba(e,a,t,n),o&2048&&ur(a.alternate,a);break;default:Ba(e,a,t,n)}}function On(e,a,t,n,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,l=a,r=t,p=n,S=l.flags;switch(l.tag){case 0:case 11:case 15:On(i,l,r,p,o),Uo(8,l);break;case 23:break;case 22:var C=l.stateNode;l.memoizedState!==null?C._visibility&2?On(i,l,r,p,o):Lo(i,l):(C._visibility|=2,On(i,l,r,p,o)),o&&S&2048&&cr(l.alternate,l);break;case 24:On(i,l,r,p,o),o&&S&2048&&ur(l.alternate,l);break;default:On(i,l,r,p,o)}a=a.sibling}}function Lo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,o=n.flags;switch(n.tag){case 22:Lo(t,n),o&2048&&cr(n.alternate,n);break;case 24:Lo(t,n),o&2048&&ur(n.alternate,n);break;default:Lo(t,n)}a=a.sibling}}var Oo=8192;function _n(e,a,t){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)Jd(e,a,t),e=e.sibling}function Jd(e,a,t){switch(e.tag){case 26:_n(e,a,t),e.flags&Oo&&e.memoizedState!==null&&Qh(t,Ga,e.memoizedState,e.memoizedProps);break;case 5:_n(e,a,t);break;case 3:case 4:var n=Ga;Ga=di(e.stateNode.containerInfo),_n(e,a,t),Ga=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Oo,Oo=16777216,_n(e,a,t),Oo=n):_n(e,a,t));break;default:_n(e,a,t)}}function Id(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function _o(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ta=n,$d(n,e)}Id(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wd(e),e=e.sibling}function Wd(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&kt(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Fs(e)):_o(e);break;default:_o(e)}}function Fs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ta=n,$d(n,e)}Id(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:kt(8,a,a.return),Fs(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Fs(a));break;default:Fs(a)}e=e.sibling}}function $d(e,a){for(;ta!==null;){var t=ta;switch(t.tag){case 0:case 11:case 15:kt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:yo(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,ta=n;else e:for(t=e;ta!==null;){n=ta;var o=n.sibling,i=n.return;if(Rd(n),n===t){ta=null;break e}if(o!==null){o.return=i,ta=o;break e}ta=i}}}var sh={getCacheForType:function(e){var a=ia(Ke),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ia(Ke).controller.signal}},ih=typeof WeakMap=="function"?WeakMap:Map,Ae=0,_e=null,je=null,ke=0,Ce=0,ka=null,St=!1,Hn=!1,dr=!1,rt=0,Qe=0,Nt=0,an=0,pr=0,Sa=0,Gn=0,Ho=null,ba=null,mr=!1,Ps=0,Fd=0,ei=1/0,ai=null,qt=null,ea=0,Et=null,Bn=null,ct=0,fr=0,hr=null,Pd=null,Go=0,gr=null;function Na(){return(Ae&2)!==0&&ke!==0?ke&-ke:N.T!==null?jr():hc()}function ep(){if(Sa===0)if((ke&536870912)===0||Ne){var e=cs;cs<<=1,(cs&3932160)===0&&(cs=262144),Sa=e}else Sa=536870912;return e=ja.current,e!==null&&(e.flags|=32),Sa}function va(e,a,t){(e===_e&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(Rn(e,0),Tt(e,ke,Sa,!1)),so(e,t),((Ae&2)===0||e!==_e)&&(e===_e&&((Ae&2)===0&&(an|=t),Qe===4&&Tt(e,ke,Sa,!1)),Xa(e))}function ap(e,a,t){if((Ae&6)!==0)throw Error(c(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||oo(e,a),o=n?ch(e,a):vr(e,a,!0),i=n;do{if(o===0){Hn&&!n&&Tt(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!lh(t)){o=vr(e,a,!1),i=!1;continue}if(o===2){if(i=a,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var r=e;o=Ho;var p=r.current.memoizedState.isDehydrated;if(p&&(Rn(r,l).flags|=256),l=vr(r,l,!1),l!==2){if(dr&&!p){r.errorRecoveryDisabledLanes|=i,an|=i,o=4;break e}i=ba,ba=o,i!==null&&(ba===null?ba=i:ba.push.apply(ba,i))}o=l}if(i=!1,o!==2)continue}}if(o===1){Rn(e,0),Tt(e,a,0,!0);break}e:{switch(n=e,i=o,i){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:Tt(n,a,Sa,!St);break e;case 2:ba=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(o=Ps+300-ca(),10<o)){if(Tt(n,a,Sa,!St),ds(n,0,!0)!==0)break e;ct=a,n.timeoutHandle=Mp(tp.bind(null,n,t,ba,ai,mr,a,Sa,an,Gn,St,i,"Throttled",-0,0),o);break e}tp(n,t,ba,ai,mr,a,Sa,an,Gn,St,i,null,-0,0)}}break}while(!0);Xa(e)}function tp(e,a,t,n,o,i,l,r,p,S,C,L,q,A){if(e.timeoutHandle=-1,L=a.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ja},Jd(a,i,L);var F=(i&62914560)===i?Ps-ca():(i&4194048)===i?Fd-ca():0;if(F=Xh(L,F),F!==null){ct=i,e.cancelPendingCommit=F(up.bind(null,e,a,i,t,n,o,l,r,p,C,L,null,q,A)),Tt(e,i,l,!S);return}}up(e,a,i,t,n,o,l,r,p)}function lh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],i=o.getSnapshot;o=o.value;try{if(!ya(i(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Tt(e,a,t,n){a&=~pr,a&=~an,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var o=a;0<o;){var i=31-na(o),l=1<<i;n[i]=-1,o&=~l}t!==0&&pc(e,t,a)}function ti(){return(Ae&6)===0?(Bo(0),!1):!0}function br(){if(je!==null){if(Ce===0)var e=je.return;else e=je,Fa=Zt=null,Ul(e),Cn=null,jo=0,e=je;for(;e!==null;)Ud(e.alternate,e),e=e.return;je=null}}function Rn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,qh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ct=0,br(),_e=e,je=t=Wa(e.current,null),ke=a,Ce=0,ka=null,St=!1,Hn=oo(e,a),dr=!1,Gn=Sa=pr=an=Nt=Qe=0,ba=Ho=null,mr=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var o=31-na(n),i=1<<o;a|=e[o],n&=~i}return rt=a,zs(),t}function np(e,a){de=null,N.H=Ao,a===An||a===Cs?(a=xu(),Ce=3):a===wl?(a=xu(),Ce=4):Ce=a===Il?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ka=a,je===null&&(Qe=1,Xs(e,Aa(a,e.current)))}function op(){var e=ja.current;return e===null?!0:(ke&4194048)===ke?Da===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Da:!1}function sp(){var e=N.H;return N.H=Ao,e===null?Ao:e}function ip(){var e=N.A;return N.A=sh,e}function ni(){Qe=4,St||(ke&4194048)!==ke&&ja.current!==null||(Hn=!0),(Nt&134217727)===0&&(an&134217727)===0||_e===null||Tt(_e,ke,Sa,!1)}function vr(e,a,t){var n=Ae;Ae|=2;var o=sp(),i=ip();(_e!==e||ke!==a)&&(ai=null,Rn(e,a)),a=!1;var l=Qe;e:do try{if(Ce!==0&&je!==null){var r=je,p=ka;switch(Ce){case 8:br(),l=6;break e;case 3:case 2:case 9:case 6:ja.current===null&&(a=!0);var S=Ce;if(Ce=0,ka=null,Yn(e,r,p,S),t&&Hn){l=0;break e}break;default:S=Ce,Ce=0,ka=null,Yn(e,r,p,S)}}rh(),l=Qe;break}catch(C){np(e,C)}while(!0);return a&&e.shellSuspendCounter++,Fa=Zt=null,Ae=n,N.H=o,N.A=i,je===null&&(_e=null,ke=0,zs()),l}function rh(){for(;je!==null;)lp(je)}function ch(e,a){var t=Ae;Ae|=2;var n=sp(),o=ip();_e!==e||ke!==a?(ai=null,ei=ca()+500,Rn(e,a)):Hn=oo(e,a);e:do try{if(Ce!==0&&je!==null){a=je;var i=ka;a:switch(Ce){case 1:Ce=0,ka=null,Yn(e,a,i,1);break;case 2:case 9:if(bu(i)){Ce=0,ka=null,rp(a);break}a=function(){Ce!==2&&Ce!==9||_e!==e||(Ce=7),Xa(e)},i.then(a,a);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:bu(i)?(Ce=0,ka=null,rp(a)):(Ce=0,ka=null,Yn(e,a,i,7));break;case 5:var l=null;switch(je.tag){case 26:l=je.memoizedState;case 5:case 27:var r=je;if(l?Kp(l):r.stateNode.complete){Ce=0,ka=null;var p=r.sibling;if(p!==null)je=p;else{var S=r.return;S!==null?(je=S,oi(S)):je=null}break a}}Ce=0,ka=null,Yn(e,a,i,5);break;case 6:Ce=0,ka=null,Yn(e,a,i,6);break;case 8:br(),Qe=6;break e;default:throw Error(c(462))}}uh();break}catch(C){np(e,C)}while(!0);return Fa=Zt=null,N.H=n,N.A=o,Ae=t,je!==null?0:(_e=null,ke=0,zs(),Qe)}function uh(){for(;je!==null&&!Ci();)lp(je)}function lp(e){var a=Cd(e.alternate,e,rt);e.memoizedProps=e.pendingProps,a===null?oi(e):je=a}function rp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Sd(t,a,a.pendingProps,a.type,void 0,ke);break;case 11:a=Sd(t,a,a.pendingProps,a.type.render,a.ref,ke);break;case 5:Ul(a);default:Ud(t,a),a=je=iu(a,rt),a=Cd(t,a,rt)}e.memoizedProps=e.pendingProps,a===null?oi(e):je=a}function Yn(e,a,t,n){Fa=Zt=null,Ul(a),Cn=null,jo=0;var o=a.return;try{if(Ff(e,o,a,t,ke)){Qe=1,Xs(e,Aa(t,e.current)),je=null;return}}catch(i){if(o!==null)throw je=o,i;Qe=1,Xs(e,Aa(t,e.current)),je=null;return}a.flags&32768?(Ne||n===1?e=!0:Hn||(ke&536870912)!==0?e=!1:(St=e=!0,(n===2||n===9||n===3||n===6)&&(n=ja.current,n!==null&&n.tag===13&&(n.flags|=16384))),cp(a,e)):oi(a)}function oi(e){var a=e;do{if((a.flags&32768)!==0){cp(a,St);return}e=a.return;var t=ah(a.alternate,a,rt);if(t!==null){je=t;return}if(a=a.sibling,a!==null){je=a;return}je=a=e}while(a!==null);Qe===0&&(Qe=5)}function cp(e,a){do{var t=th(e.alternate,e);if(t!==null){t.flags&=32767,je=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){je=e;return}je=e=t}while(e!==null);Qe=6,je=null}function up(e,a,t,n,o,i,l,r,p){e.cancelPendingCommit=null;do si();while(ea!==0);if((Ae&6)!==0)throw Error(c(327));if(a!==null){if(a===e.current)throw Error(c(177));if(i=a.lanes|a.childLanes,i|=il,Ym(e,t,i,l,r,p),e===_e&&(je=_e=null,ke=0),Bn=a,Et=e,ct=t,fr=i,hr=o,Pd=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fh(cn,function(){return hp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,o=G.p,G.p=2,l=Ae,Ae|=4;try{nh(e,a,t)}finally{Ae=l,G.p=o,N.T=n}}ea=1,dp(),pp(),mp()}}function dp(){if(ea===1){ea=0;var e=Et,a=Bn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var n=G.p;G.p=2;var o=Ae;Ae|=4;try{Xd(a,e);var i=Ar,l=$c(e.containerInfo),r=i.focusedElem,p=i.selectionRange;if(l!==r&&r&&r.ownerDocument&&Wc(r.ownerDocument.documentElement,r)){if(p!==null&&al(r)){var S=p.start,C=p.end;if(C===void 0&&(C=S),"selectionStart"in r)r.selectionStart=S,r.selectionEnd=Math.min(C,r.value.length);else{var L=r.ownerDocument||document,q=L&&L.defaultView||window;if(q.getSelection){var A=q.getSelection(),F=r.textContent.length,ie=Math.min(p.start,F),Oe=p.end===void 0?ie:Math.min(p.end,F);!A.extend&&ie>Oe&&(l=Oe,Oe=ie,ie=l);var y=Ic(r,ie),b=Ic(r,Oe);if(y&&b&&(A.rangeCount!==1||A.anchorNode!==y.node||A.anchorOffset!==y.offset||A.focusNode!==b.node||A.focusOffset!==b.offset)){var k=L.createRange();k.setStart(y.node,y.offset),A.removeAllRanges(),ie>Oe?(A.addRange(k),A.extend(b.node,b.offset)):(k.setEnd(b.node,b.offset),A.addRange(k))}}}}for(L=[],A=r;A=A.parentNode;)A.nodeType===1&&L.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<L.length;r++){var U=L[r];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}bi=!!Tr,Ar=Tr=null}finally{Ae=o,G.p=n,N.T=t}}e.current=a,ea=2}}function pp(){if(ea===2){ea=0;var e=Et,a=Bn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var n=G.p;G.p=2;var o=Ae;Ae|=4;try{Bd(e,a.alternate,a)}finally{Ae=o,G.p=n,N.T=t}}ea=3}}function mp(){if(ea===4||ea===3){ea=0,Mi();var e=Et,a=Bn,t=ct,n=Pd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ea=5:(ea=0,Bn=Et=null,fp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(qt=null),Oi(t),a=a.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(qe,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=N.T,o=G.p,G.p=2,N.T=null;try{for(var i=e.onRecoverableError,l=0;l<n.length;l++){var r=n[l];i(r.value,{componentStack:r.stack})}}finally{N.T=a,G.p=o}}(ct&3)!==0&&si(),Xa(e),o=e.pendingLanes,(t&261930)!==0&&(o&42)!==0?e===gr?Go++:(Go=0,gr=e):Go=0,Bo(0)}}function fp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,yo(a)))}function si(){return dp(),pp(),mp(),hp()}function hp(){if(ea!==5)return!1;var e=Et,a=fr;fr=0;var t=Oi(ct),n=N.T,o=G.p;try{G.p=32>t?32:t,N.T=null,t=hr,hr=null;var i=Et,l=ct;if(ea=0,Bn=Et=null,ct=0,(Ae&6)!==0)throw Error(c(331));var r=Ae;if(Ae|=4,Wd(i.current),Kd(i,i.current,l,t),Ae=r,Bo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(qe,i)}catch{}return!0}finally{G.p=o,N.T=n,fp(e,a)}}function gp(e,a,t){a=Aa(t,a),a=Jl(e.stateNode,a,2),e=wt(e,a,2),e!==null&&(so(e,2),Xa(e))}function Me(e,a,t){if(e.tag===3)gp(e,e,t);else for(;a!==null;){if(a.tag===3){gp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qt===null||!qt.has(n))){e=Aa(t,e),t=bd(2),n=wt(a,t,2),n!==null&&(vd(t,n,a,e),so(n,2),Xa(n));break}}a=a.return}}function xr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new ih;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||(dr=!0,o.add(t),e=dh.bind(null,e,a,t),a.then(e,e))}function dh(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,_e===e&&(ke&t)===t&&(Qe===4||Qe===3&&(ke&62914560)===ke&&300>ca()-Ps?(Ae&2)===0&&Rn(e,0):pr|=t,Gn===ke&&(Gn=0)),Xa(e)}function bp(e,a){a===0&&(a=dc()),e=Vt(e,a),e!==null&&(so(e,a),Xa(e))}function ph(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),bp(e,t)}function mh(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(a),bp(e,t)}function fh(e,a){return to(e,a)}var ii=null,Vn=null,yr=!1,li=!1,wr=!1,At=0;function Xa(e){e!==Vn&&e.next===null&&(Vn===null?ii=Vn=e:Vn=Vn.next=e),li=!0,yr||(yr=!0,gh())}function Bo(e,a){if(!wr&&li){wr=!0;do for(var t=!1,n=ii;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var i=0;else{var l=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-na(42|e)+1)-1,i&=o&~(l&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,wp(n,i))}else i=ke,i=ds(n,n===_e?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||oo(n,i)||(t=!0,wp(n,i));n=n.next}while(t);wr=!1}}function hh(){vp()}function vp(){li=yr=!1;var e=0;At!==0&&Nh()&&(e=At);for(var a=ca(),t=null,n=ii;n!==null;){var o=n.next,i=xp(n,a);i===0?(n.next=null,t===null?ii=o:t.next=o,o===null&&(Vn=t)):(t=n,(e!==0||(i&3)!==0)&&(li=!0)),n=o}ea!==0&&ea!==5||Bo(e),At!==0&&(At=0)}function xp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-na(i),r=1<<l,p=o[l];p===-1?((r&t)===0||(r&n)!==0)&&(o[l]=Rm(r,a)):p<=a&&(e.expiredLanes|=r),i&=~r}if(a=_e,t=ke,t=ds(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&rn(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||oo(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&rn(n),Oi(t)){case 2:case 8:t=xa;break;case 32:t=cn;break;case 268435456:t=E;break;default:t=cn}return n=yp.bind(null,e),t=to(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&rn(n),e.callbackPriority=2,e.callbackNode=null,2}function yp(e,a){if(ea!==0&&ea!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(si()&&e.callbackNode!==t)return null;var n=ke;return n=ds(e,e===_e?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ap(e,n,a),xp(e,ca()),e.callbackNode!=null&&e.callbackNode===t?yp.bind(null,e):null)}function wp(e,a){if(si())return null;ap(e,a,!0)}function gh(){Eh(function(){(Ae&6)!==0?to(no,hh):vp()})}function jr(){if(At===0){var e=En;e===0&&(e=rs,rs<<=1,(rs&261888)===0&&(rs=256)),At=e}return At}function jp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hs(""+e)}function zp(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function bh(e,a,t,n,o){if(a==="submit"&&t&&t.stateNode===o){var i=jp((o[pa]||null).action),l=n.submitter;l&&(a=(a=l[pa]||null)?jp(a.formAction):l.getAttribute("formAction"),a!==null&&(i=a,l=null));var r=new xs("action","action",null,n,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(At!==0){var p=l?zp(o,l):new FormData(o);Yl(t,{pending:!0,data:p,method:o.method,action:i},null,p)}}else typeof i=="function"&&(r.preventDefault(),p=l?zp(o,l):new FormData(o),Yl(t,{pending:!0,data:p,method:o.method,action:i},i,p))},currentTarget:o}]})}}for(var zr=0;zr<sl.length;zr++){var kr=sl[zr],vh=kr.toLowerCase(),xh=kr[0].toUpperCase()+kr.slice(1);Ha(vh,"on"+xh)}Ha(eu,"onAnimationEnd"),Ha(au,"onAnimationIteration"),Ha(tu,"onAnimationStart"),Ha("dblclick","onDoubleClick"),Ha("focusin","onFocus"),Ha("focusout","onBlur"),Ha(Lf,"onTransitionRun"),Ha(Of,"onTransitionStart"),Ha(_f,"onTransitionCancel"),Ha(nu,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function kp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var i=void 0;if(a)for(var l=n.length-1;0<=l;l--){var r=n[l],p=r.instance,S=r.currentTarget;if(r=r.listener,p!==i&&o.isPropagationStopped())break e;i=r,o.currentTarget=S;try{i(o)}catch(C){js(C)}o.currentTarget=null,i=p}else for(l=0;l<n.length;l++){if(r=n[l],p=r.instance,S=r.currentTarget,r=r.listener,p!==i&&o.isPropagationStopped())break e;i=r,o.currentTarget=S;try{i(o)}catch(C){js(C)}o.currentTarget=null,i=p}}}}function ze(e,a){var t=a[_i];t===void 0&&(t=a[_i]=new Set);var n=e+"__bubble";t.has(n)||(Sp(a,e,2,!1),t.add(n))}function Sr(e,a,t){var n=0;a&&(n|=4),Sp(t,e,n,a)}var ri="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[ri]){e[ri]=!0,vc.forEach(function(t){t!=="selectionchange"&&(yh.has(t)||Sr(t,!1,e),Sr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ri]||(a[ri]=!0,Sr("selectionchange",!1,a))}}function Sp(e,a,t,n){switch(em(a)){case 2:var o=Jh;break;case 8:o=Ih;break;default:o=Rr}t=o.bind(null,a,t,e),o=void 0,!Zi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function qr(e,a,t,n,o){var i=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var r=n.stateNode.containerInfo;if(r===o)break;if(l===4)for(l=n.return;l!==null;){var p=l.tag;if((p===3||p===4)&&l.stateNode.containerInfo===o)return;l=l.return}for(;r!==null;){if(l=dn(r),l===null)return;if(p=l.tag,p===5||p===6||p===26||p===27){n=i=l;continue e}r=r.parentNode}}n=n.return}Ac(function(){var S=i,C=Qi(t),L=[];e:{var q=ou.get(e);if(q!==void 0){var A=xs,F=e;switch(e){case"keypress":if(bs(t)===0)break e;case"keydown":case"keyup":A=mf;break;case"focusin":F="focus",A=Wi;break;case"focusout":F="blur",A=Wi;break;case"beforeblur":case"afterblur":A=Wi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gf;break;case eu:case au:case tu:A=nf;break;case nu:A=vf;break;case"scroll":case"scrollend":A=Fm;break;case"wheel":A=yf;break;case"copy":case"cut":case"paste":A=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Lc;break;case"toggle":case"beforetoggle":A=jf}var ie=(a&4)!==0,Oe=!ie&&(e==="scroll"||e==="scrollend"),y=ie?q!==null?q+"Capture":null:q;ie=[];for(var b=S,k;b!==null;){var U=b;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||y===null||(U=ro(b,y),U!=null&&ie.push(Yo(b,U,k))),Oe)break;b=b.return}0<ie.length&&(q=new A(q,F,null,t,C),L.push({event:q,listeners:ie}))}}if((a&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",q&&t!==Vi&&(F=t.relatedTarget||t.fromElement)&&(dn(F)||F[un]))break e;if((A||q)&&(q=C.window===C?C:(q=C.ownerDocument)?q.defaultView||q.parentWindow:window,A?(F=t.relatedTarget||t.toElement,A=S,F=F?dn(F):null,F!==null&&(Oe=x(F),ie=F.tag,F!==Oe||ie!==5&&ie!==27&&ie!==6)&&(F=null)):(A=null,F=S),A!==F)){if(ie=Uc,U="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Lc,U="onPointerLeave",y="onPointerEnter",b="pointer"),Oe=A==null?q:lo(A),k=F==null?q:lo(F),q=new ie(U,b+"leave",A,t,C),q.target=Oe,q.relatedTarget=k,U=null,dn(C)===S&&(ie=new ie(y,b+"enter",F,t,C),ie.target=k,ie.relatedTarget=Oe,U=ie),Oe=U,A&&F)a:{for(ie=wh,y=A,b=F,k=0,U=y;U;U=ie(U))k++;U=0;for(var oe=b;oe;oe=ie(oe))U++;for(;0<k-U;)y=ie(y),k--;for(;0<U-k;)b=ie(b),U--;for(;k--;){if(y===b||b!==null&&y===b.alternate){ie=y;break a}y=ie(y),b=ie(b)}ie=null}else ie=null;A!==null&&Np(L,q,A,ie,!1),F!==null&&Oe!==null&&Np(L,Oe,F,ie,!0)}}e:{if(q=S?lo(S):window,A=q.nodeName&&q.nodeName.toLowerCase(),A==="select"||A==="input"&&q.type==="file")var Ee=Vc;else if(Rc(q))if(Qc)Ee=Mf;else{Ee=Af;var ae=Tf}else A=q.nodeName,!A||A.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?S&&Yi(S.elementType)&&(Ee=Vc):Ee=Cf;if(Ee&&(Ee=Ee(e,S))){Yc(L,Ee,t,C);break e}ae&&ae(e,q,S),e==="focusout"&&S&&q.type==="number"&&S.memoizedProps.value!=null&&Ri(q,"number",q.value)}switch(ae=S?lo(S):window,e){case"focusin":(Rc(ae)||ae.contentEditable==="true")&&(yn=ae,tl=S,bo=null);break;case"focusout":bo=tl=yn=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,Fc(L,t,C);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Fc(L,t,C)}var ge;if(Fi)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else xn?Gc(e,t)&&(Se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Se="onCompositionStart");Se&&(Oc&&t.locale!=="ko"&&(xn||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&xn&&(ge=Cc()):(ft=C,Ki="value"in ft?ft.value:ft.textContent,xn=!0)),ae=ci(S,Se),0<ae.length&&(Se=new Dc(Se,e,null,t,C),L.push({event:Se,listeners:ae}),ge?Se.data=ge:(ge=Bc(t),ge!==null&&(Se.data=ge)))),(ge=kf?Sf(e,t):Nf(e,t))&&(Se=ci(S,"onBeforeInput"),0<Se.length&&(ae=new Dc("onBeforeInput","beforeinput",null,t,C),L.push({event:ae,listeners:Se}),ae.data=ge)),bh(L,e,S,t,C)}kp(L,a)})}function Yo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function ci(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=ro(e,t),o!=null&&n.unshift(Yo(e,o,i)),o=ro(e,a),o!=null&&n.push(Yo(e,o,i))),e.tag===3)return n;e=e.return}return[]}function wh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Np(e,a,t,n,o){for(var i=a._reactName,l=[];t!==null&&t!==n;){var r=t,p=r.alternate,S=r.stateNode;if(r=r.tag,p!==null&&p===n)break;r!==5&&r!==26&&r!==27||S===null||(p=S,o?(S=ro(t,i),S!=null&&l.unshift(Yo(t,S,p))):o||(S=ro(t,i),S!=null&&l.push(Yo(t,S,p)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var jh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function qp(e){return(typeof e=="string"?e:""+e).replace(jh,`
`).replace(zh,"")}function Ep(e,a){return a=qp(a),qp(e)===a}function Le(e,a,t,n,o,i){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||gn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&gn(e,""+n);break;case"className":ms(e,"class",n);break;case"tabIndex":ms(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,t,n);break;case"style":Ec(e,n,i);break;case"data":if(a!=="object"){ms(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=hs(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&Le(e,a,"name",o.name,o,null),Le(e,a,"formEncType",o.formEncType,o,null),Le(e,a,"formMethod",o.formMethod,o,null),Le(e,a,"formTarget",o.formTarget,o,null)):(Le(e,a,"encType",o.encType,o,null),Le(e,a,"method",o.method,o,null),Le(e,a,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=hs(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Ja);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=hs(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ze("beforetoggle",e),ze("toggle",e),ps(e,"popover",n);break;case"xlinkActuate":Ka(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ka(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ka(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ka(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ka(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ka(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ps(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Wm.get(t)||t,ps(e,t,n))}}function Er(e,a,t,n,o,i){switch(t){case"style":Ec(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof n=="string"?gn(e,n):(typeof n=="number"||typeof n=="bigint")&&gn(e,""+n);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ja);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),a=t.slice(2,o?t.length-7:void 0),i=e[pa]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,o),typeof n=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,o);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):ps(e,t,n)}}}function ra(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var n=!1,o=!1,i;for(i in t)if(t.hasOwnProperty(i)){var l=t[i];if(l!=null)switch(i){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Le(e,a,i,l,t,null)}}o&&Le(e,a,"srcSet",t.srcSet,t,null),n&&Le(e,a,"src",t.src,t,null);return;case"input":ze("invalid",e);var r=i=l=o=null,p=null,S=null;for(n in t)if(t.hasOwnProperty(n)){var C=t[n];if(C!=null)switch(n){case"name":o=C;break;case"type":l=C;break;case"checked":p=C;break;case"defaultChecked":S=C;break;case"value":i=C;break;case"defaultValue":r=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,a));break;default:Le(e,a,n,C,t,null)}}kc(e,i,r,p,S,l,o,!1);return;case"select":ze("invalid",e),n=l=i=null;for(o in t)if(t.hasOwnProperty(o)&&(r=t[o],r!=null))switch(o){case"value":i=r;break;case"defaultValue":l=r;break;case"multiple":n=r;default:Le(e,a,o,r,t,null)}a=i,t=l,e.multiple=!!n,a!=null?hn(e,!!n,a,!1):t!=null&&hn(e,!!n,t,!0);return;case"textarea":ze("invalid",e),i=o=n=null;for(l in t)if(t.hasOwnProperty(l)&&(r=t[l],r!=null))switch(l){case"value":n=r;break;case"defaultValue":o=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:Le(e,a,l,r,t,null)}Nc(e,n,o,i);return;case"option":for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null)&&(p==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Le(e,a,p,n,t,null));return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(n=0;n<Ro.length;n++)ze(Ro[n],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(n=t[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Le(e,a,S,n,t,null)}return;default:if(Yi(a)){for(C in t)t.hasOwnProperty(C)&&(n=t[C],n!==void 0&&Er(e,a,C,n,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(n=t[r],n!=null&&Le(e,a,r,n,t,null))}function kh(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,r=null,p=null,S=null,C=null;for(A in t){var L=t[A];if(t.hasOwnProperty(A)&&L!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":p=L;default:n.hasOwnProperty(A)||Le(e,a,A,null,n,L)}}for(var q in n){var A=n[q];if(L=t[q],n.hasOwnProperty(q)&&(A!=null||L!=null))switch(q){case"type":i=A;break;case"name":o=A;break;case"checked":S=A;break;case"defaultChecked":C=A;break;case"value":l=A;break;case"defaultValue":r=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,a));break;default:A!==L&&Le(e,a,q,A,n,L)}}Bi(e,l,r,p,S,C,i,o);return;case"select":A=l=r=q=null;for(i in t)if(p=t[i],t.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":A=p;default:n.hasOwnProperty(i)||Le(e,a,i,null,n,p)}for(o in n)if(i=n[o],p=t[o],n.hasOwnProperty(o)&&(i!=null||p!=null))switch(o){case"value":q=i;break;case"defaultValue":r=i;break;case"multiple":l=i;default:i!==p&&Le(e,a,o,i,n,p)}a=r,t=l,n=A,q!=null?hn(e,!!t,q,!1):!!n!=!!t&&(a!=null?hn(e,!!t,a,!0):hn(e,!!t,t?[]:"",!1));return;case"textarea":A=q=null;for(r in t)if(o=t[r],t.hasOwnProperty(r)&&o!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Le(e,a,r,null,n,o)}for(l in n)if(o=n[l],i=t[l],n.hasOwnProperty(l)&&(o!=null||i!=null))switch(l){case"value":q=o;break;case"defaultValue":A=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:o!==i&&Le(e,a,l,o,n,i)}Sc(e,q,A);return;case"option":for(var F in t)q=t[F],t.hasOwnProperty(F)&&q!=null&&!n.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:Le(e,a,F,null,n,q));for(p in n)q=n[p],A=t[p],n.hasOwnProperty(p)&&q!==A&&(q!=null||A!=null)&&(p==="selected"?e.selected=q&&typeof q!="function"&&typeof q!="symbol":Le(e,a,p,q,n,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in t)q=t[ie],t.hasOwnProperty(ie)&&q!=null&&!n.hasOwnProperty(ie)&&Le(e,a,ie,null,n,q);for(S in n)if(q=n[S],A=t[S],n.hasOwnProperty(S)&&q!==A&&(q!=null||A!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(c(137,a));break;default:Le(e,a,S,q,n,A)}return;default:if(Yi(a)){for(var Oe in t)q=t[Oe],t.hasOwnProperty(Oe)&&q!==void 0&&!n.hasOwnProperty(Oe)&&Er(e,a,Oe,void 0,n,q);for(C in n)q=n[C],A=t[C],!n.hasOwnProperty(C)||q===A||q===void 0&&A===void 0||Er(e,a,C,q,n,A);return}}for(var y in t)q=t[y],t.hasOwnProperty(y)&&q!=null&&!n.hasOwnProperty(y)&&Le(e,a,y,null,n,q);for(L in n)q=n[L],A=t[L],!n.hasOwnProperty(L)||q===A||q==null&&A==null||Le(e,a,L,q,n,A)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var o=t[n],i=o.transferSize,l=o.initiatorType,r=o.duration;if(i&&r&&Tp(l)){for(l=0,r=o.responseEnd,n+=1;n<t.length;n++){var p=t[n],S=p.startTime;if(S>r)break;var C=p.transferSize,L=p.initiatorType;C&&Tp(L)&&(p=p.responseEnd,l+=C*(p<r?1:(r-S)/(p-S)))}if(--n,a+=8*(i+l)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tr=null,Ar=null;function ui(e){return e.nodeType===9?e:e.ownerDocument}function Ap(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Cr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Mr=null;function Nh(){var e=window.event;return e&&e.type==="popstate"?e===Mr?!1:(Mr=e,!0):(Mr=null,!1)}var Mp=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(e){return Up.resolve(null).then(e).catch(Th)}:Mp;function Th(e){setTimeout(function(){throw e})}function Ct(e){return e==="head"}function Dp(e,a){var t=a,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(o),Kn(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Vo(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Vo(t);for(var i=t.firstChild;i;){var l=i.nextSibling,r=i.nodeName;i[io]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=l}}else t==="body"&&Vo(e.ownerDocument.body);t=o}while(t);Kn(a)}function Lp(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function Ur(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ur(t),Hi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Ah(e,a,t,n){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[io])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=La(e.nextSibling),e===null)break}return null}function Ch(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=La(e.nextSibling),e===null))return null;return e}function Op(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=La(e.nextSibling),e===null))return null;return e}function Dr(e){return e.data==="$?"||e.data==="$~"}function Lr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mh(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function La(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Or=null;function _p(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return La(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Hp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Gp(e,a,t){switch(a=ui(t),e){case"html":if(e=a.documentElement,!e)throw Error(c(452));return e;case"head":if(e=a.head,!e)throw Error(c(453));return e;case"body":if(e=a.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Vo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Hi(e)}var Oa=new Map,Bp=new Set;function di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ut=G.d;G.d={f:Uh,r:Dh,D:Lh,C:Oh,L:_h,m:Hh,X:Bh,S:Gh,M:Rh};function Uh(){var e=ut.f(),a=ti();return e||a}function Dh(e){var a=pn(e);a!==null&&a.tag===5&&a.type==="form"?nd(a):ut.r(e)}var Qn=typeof document>"u"?null:document;function Rp(e,a,t){var n=Qn;if(n&&typeof a=="string"&&a){var o=Ea(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),Bp.has(o)||(Bp.add(o),e={rel:e,crossOrigin:t,href:a},n.querySelector(o)===null&&(a=n.createElement("link"),ra(a,"link",e),aa(a),n.head.appendChild(a)))}}function Lh(e){ut.D(e),Rp("dns-prefetch",e,null)}function Oh(e,a){ut.C(e,a),Rp("preconnect",e,a)}function _h(e,a,t){ut.L(e,a,t);var n=Qn;if(n&&e&&a){var o='link[rel="preload"][as="'+Ea(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Ea(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Ea(t.imageSizes)+'"]')):o+='[href="'+Ea(e)+'"]';var i=o;switch(a){case"style":i=Xn(e);break;case"script":i=Zn(e)}Oa.has(i)||(e=T({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Oa.set(i,e),n.querySelector(o)!==null||a==="style"&&n.querySelector(Qo(i))||a==="script"&&n.querySelector(Xo(i))||(a=n.createElement("link"),ra(a,"link",e),aa(a),n.head.appendChild(a)))}}function Hh(e,a){ut.m(e,a);var t=Qn;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+Ea(n)+'"][href="'+Ea(e)+'"]',i=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Zn(e)}if(!Oa.has(i)&&(e=T({rel:"modulepreload",href:e},a),Oa.set(i,e),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Xo(i)))return}n=t.createElement("link"),ra(n,"link",e),aa(n),t.head.appendChild(n)}}}function Gh(e,a,t){ut.S(e,a,t);var n=Qn;if(n&&e){var o=mn(n).hoistableStyles,i=Xn(e);a=a||"default";var l=o.get(i);if(!l){var r={loading:0,preload:null};if(l=n.querySelector(Qo(i)))r.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Oa.get(i))&&_r(e,t);var p=l=n.createElement("link");aa(p),ra(p,"link",e),p._p=new Promise(function(S,C){p.onload=S,p.onerror=C}),p.addEventListener("load",function(){r.loading|=1}),p.addEventListener("error",function(){r.loading|=2}),r.loading|=4,pi(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:r},o.set(i,l)}}}function Bh(e,a){ut.X(e,a);var t=Qn;if(t&&e){var n=mn(t).hoistableScripts,o=Zn(e),i=n.get(o);i||(i=t.querySelector(Xo(o)),i||(e=T({src:e,async:!0},a),(a=Oa.get(o))&&Hr(e,a),i=t.createElement("script"),aa(i),ra(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(o,i))}}function Rh(e,a){ut.M(e,a);var t=Qn;if(t&&e){var n=mn(t).hoistableScripts,o=Zn(e),i=n.get(o);i||(i=t.querySelector(Xo(o)),i||(e=T({src:e,async:!0,type:"module"},a),(a=Oa.get(o))&&Hr(e,a),i=t.createElement("script"),aa(i),ra(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(o,i))}}function Yp(e,a,t,n){var o=(o=fe.current)?di(o):null;if(!o)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Xn(t.href),t=mn(o).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Xn(t.href);var i=mn(o).hoistableStyles,l=i.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=o.querySelector(Qo(e)))&&!i._p&&(l.instance=i,l.state.loading=5),Oa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Oa.set(e,t),i||Yh(o,e,t,l.state))),a&&n===null)throw Error(c(528,""));return l}if(a&&n!==null)throw Error(c(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Zn(t),t=mn(o).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xn(e){return'href="'+Ea(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function Vp(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Yh(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ra(a,"link",t),aa(a),e.head.appendChild(a))}function Zn(e){return'[src="'+Ea(e)+'"]'}function Xo(e){return"script[async]"+e}function Qp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ea(t.href)+'"]');if(n)return a.instance=n,aa(n),n;var o=T({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),aa(n),ra(n,"style",o),pi(n,t.precedence,e),a.instance=n;case"stylesheet":o=Xn(t.href);var i=e.querySelector(Qo(o));if(i)return a.state.loading|=4,a.instance=i,aa(i),i;n=Vp(t),(o=Oa.get(o))&&_r(n,o),i=(e.ownerDocument||e).createElement("link"),aa(i);var l=i;return l._p=new Promise(function(r,p){l.onload=r,l.onerror=p}),ra(i,"link",n),a.state.loading|=4,pi(i,t.precedence,e),a.instance=i;case"script":return i=Zn(t.src),(o=e.querySelector(Xo(i)))?(a.instance=o,aa(o),o):(n=t,(o=Oa.get(i))&&(n=T({},t),Hr(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),aa(o),ra(o,"link",n),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,pi(n,t.precedence,e));return a.instance}function pi(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,i=o,l=0;l<n.length;l++){var r=n[l];if(r.dataset.precedence===a)i=r;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function _r(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Hr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var mi=null;function Xp(e,a,t){if(mi===null){var n=new Map,o=mi=new Map;o.set(t,n)}else o=mi,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var i=t[o];if(!(i[io]||i[oa]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(a)||"";l=e+l;var r=n.get(l);r?r.push(i):n.set(l,[i])}}return n}function Zp(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Vh(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Kp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qh(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Xn(n.href),i=a.querySelector(Qo(o));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=fi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,aa(i);return}i=a.ownerDocument||a,n=Vp(n),(o=Oa.get(o))&&_r(n,o),i=i.createElement("link"),aa(i);var l=i;l._p=new Promise(function(r,p){l.onload=r,l.onerror=p}),ra(i,"link",n),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=fi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Gr=0;function Xh(e,a){return e.stylesheets&&e.count===0&&gi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&gi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&Gr===0&&(Gr=62500*Sh());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Gr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function fi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hi=null;function gi(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hi=new Map,a.forEach(Zh,e),hi=null,fi.call(e))}function Zh(e,a){if(!(a.state.loading&4)){var t=hi.get(e);if(t)var n=t.get(null);else{t=new Map,hi.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var l=o[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}o=a.instance,l=o.getAttribute("data-precedence"),i=t.get(l)||n,i===n&&t.set(null,o),t.set(l,o),this.count++,n=fi.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),i?i.parentNode.insertBefore(o,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Zo={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Kh(e,a,t,n,o,i,l,r,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Di(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.hiddenUpdates=Di(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Jp(e,a,t,n,o,i,l,r,p,S,C,L){return e=new Kh(e,a,t,l,p,S,C,L,r),a=1,i===!0&&(a|=24),i=wa(3,null,null,a),e.current=i,i.stateNode=e,a=vl(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:t,cache:a},jl(i),e}function Ip(e){return e?(e=zn,e):zn}function Wp(e,a,t,n,o,i){o=Ip(o),n.context===null?n.context=o:n.pendingContext=o,n=yt(a),n.payload={element:t},i=i===void 0?null:i,i!==null&&(n.callback=i),t=wt(e,n,a),t!==null&&(va(t,e,a),ko(t,e,a))}function $p(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Br(e,a){$p(e,a),(e=e.alternate)&&$p(e,a)}function Fp(e){if(e.tag===13||e.tag===31){var a=Vt(e,67108864);a!==null&&va(a,e,67108864),Br(e,67108864)}}function Pp(e){if(e.tag===13||e.tag===31){var a=Na();a=Li(a);var t=Vt(e,a);t!==null&&va(t,e,a),Br(e,a)}}var bi=!0;function Jh(e,a,t,n){var o=N.T;N.T=null;var i=G.p;try{G.p=2,Rr(e,a,t,n)}finally{G.p=i,N.T=o}}function Ih(e,a,t,n){var o=N.T;N.T=null;var i=G.p;try{G.p=8,Rr(e,a,t,n)}finally{G.p=i,N.T=o}}function Rr(e,a,t,n){if(bi){var o=Yr(n);if(o===null)qr(e,a,n,vi,t),am(e,n);else if($h(o,e,a,t,n))n.stopPropagation();else if(am(e,n),a&4&&-1<Wh.indexOf(e)){for(;o!==null;){var i=pn(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=Ht(i.pendingLanes);if(l!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;l;){var p=1<<31-na(l);r.entanglements[1]|=p,l&=~p}Xa(i),(Ae&6)===0&&(ei=ca()+500,Bo(0))}}break;case 31:case 13:r=Vt(i,2),r!==null&&va(r,i,2),ti(),Br(i,2)}if(i=Yr(n),i===null&&qr(e,a,n,vi,t),i===o)break;o=i}o!==null&&n.stopPropagation()}else qr(e,a,n,null,t)}}function Yr(e){return e=Qi(e),Vr(e)}var vi=null;function Vr(e){if(vi=null,e=dn(e),e!==null){var a=x(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=w(a),e!==null)return e;e=null}else if(t===31){if(e=z(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return vi=e,null}function em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(is()){case no:return 2;case xa:return 8;case cn:case Ui:return 32;case E:return 268435456;default:return 32}default:return 32}}var Qr=!1,Mt=null,Ut=null,Dt=null,Ko=new Map,Jo=new Map,Lt=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function am(e,a){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Ko.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(a.pointerId)}}function Io(e,a,t,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},a!==null&&(a=pn(a),a!==null&&Fp(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function $h(e,a,t,n,o){switch(a){case"focusin":return Mt=Io(Mt,e,a,t,n,o),!0;case"dragenter":return Ut=Io(Ut,e,a,t,n,o),!0;case"mouseover":return Dt=Io(Dt,e,a,t,n,o),!0;case"pointerover":var i=o.pointerId;return Ko.set(i,Io(Ko.get(i)||null,e,a,t,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Jo.set(i,Io(Jo.get(i)||null,e,a,t,n,o)),!0}return!1}function tm(e){var a=dn(e.target);if(a!==null){var t=x(a);if(t!==null){if(a=t.tag,a===13){if(a=w(t),a!==null){e.blockedOn=a,gc(e.priority,function(){Pp(t)});return}}else if(a===31){if(a=z(t),a!==null){e.blockedOn=a,gc(e.priority,function(){Pp(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Yr(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Vi=n,t.target.dispatchEvent(n),Vi=null}else return a=pn(t),a!==null&&Fp(a),e.blockedOn=t,!1;a.shift()}return!0}function nm(e,a,t){xi(e)&&t.delete(a)}function Fh(){Qr=!1,Mt!==null&&xi(Mt)&&(Mt=null),Ut!==null&&xi(Ut)&&(Ut=null),Dt!==null&&xi(Dt)&&(Dt=null),Ko.forEach(nm),Jo.forEach(nm)}function yi(e,a){e.blockedOn===a&&(e.blockedOn=null,Qr||(Qr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Fh)))}var wi=null;function om(e){wi!==e&&(wi=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){wi===e&&(wi=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],o=e[a+2];if(typeof n!="function"){if(Vr(n||t)===null)continue;break}var i=pn(t);i!==null&&(e.splice(a,3),a-=3,Yl(i,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function Kn(e){function a(p){return yi(p,e)}Mt!==null&&yi(Mt,e),Ut!==null&&yi(Ut,e),Dt!==null&&yi(Dt,e),Ko.forEach(a),Jo.forEach(a);for(var t=0;t<Lt.length;t++){var n=Lt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Lt.length&&(t=Lt[0],t.blockedOn===null);)tm(t),t.blockedOn===null&&Lt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],i=t[n+1],l=o[pa]||null;if(typeof i=="function")l||om(t);else if(l){var r=null;if(i&&i.hasAttribute("formAction")){if(o=i,l=i[pa]||null)r=l.formAction;else if(Vr(o)!==null)continue}else r=l.action;typeof r=="function"?t[n+1]=r:(t.splice(n,3),n-=3),om(t)}}}function sm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return o=l})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Xr(e){this._internalRoot=e}ji.prototype.render=Xr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));var t=a.current,n=Na();Wp(t,n,e,a,null,null)},ji.prototype.unmount=Xr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Wp(e.current,2,null,e,null,null),ti(),a[un]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var a=hc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Lt.length&&a!==0&&a<Lt[t].priority;t++);Lt.splice(t,0,e),t===0&&tm(e)}};var im=f.version;if(im!=="19.2.5")throw Error(c(527,im,"19.2.5"));G.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(a),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Ph={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{qe=zi.inject(Ph),he=zi}catch{}}return $o.createRoot=function(e,a){if(!m(e))throw Error(c(299));var t=!1,n="",o=md,i=fd,l=hd;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=Jp(e,1,!1,null,null,t,n,null,o,i,l,sm),e[un]=a.current,Nr(e),new Xr(a)},$o.hydrateRoot=function(e,a,t){if(!m(e))throw Error(c(299));var n=!1,o="",i=md,l=fd,r=hd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),a=Jp(e,1,!0,a,t??null,n,o,p,i,l,r,sm),a.context=Ip(null),t=a.current,n=Na(),n=Li(n),o=yt(n),o.callback=null,wt(t,o,n),t=n,a.current.lanes=t,so(a,t),Xa(a),e[un]=a.current,Nr(e),new ji(a)},$o.version="19.2.5",$o}var gm;function ug(){if(gm)return Jr.exports;gm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Jr.exports=cg(),Jr.exports}var dg=ug();function pg(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const u="/Learn-Spanish/";navigator.serviceWorker.register(`${u}sw.js`,{scope:u}).catch(()=>{})})}const mg="modulepreload",fg=function(u){return"/Learn-Spanish/"+u},bm={},hg=function(f,d,c){let m=Promise.resolve();if(d&&d.length>0){let v=function(j){return Promise.all(j.map(T=>Promise.resolve(T).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};var w=v;document.getElementsByTagName("link");const z=document.querySelector("meta[property=csp-nonce]"),h=z?.nonce||z?.getAttribute("nonce");m=v(d.map(j=>{if(j=fg(j),j in bm)return;bm[j]=!0;const T=j.endsWith(".css"),H=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${H}`))return;const $=document.createElement("link");if($.rel=T?"stylesheet":mg,T||($.as="script"),$.crossOrigin="",$.href=j,h&&$.setAttribute("nonce",h),document.head.appendChild($),T)return new Promise((Y,B)=>{$.addEventListener("load",Y),$.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${j}`)))})}))}function x(z){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=z,window.dispatchEvent(h),!h.defaultPrevented)throw z}return m.then(z=>{for(const h of z||[])h.status==="rejected"&&x(h.reason);return f().catch(x)})};const gg=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),km=(...u)=>u.filter((f,d,c)=>!!f&&f.trim()!==""&&c.indexOf(f)===d).join(" ").trim();var bg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const vg=_.forwardRef(({color:u="currentColor",size:f=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:m="",children:x,iconNode:w,...z},h)=>_.createElement("svg",{ref:h,...bg,width:f,height:f,stroke:u,strokeWidth:c?Number(d)*24/Number(f):d,className:km("lucide",m),...z},[...w.map(([v,j])=>_.createElement(v,j)),...Array.isArray(x)?x:[x]]));const He=(u,f)=>{const d=_.forwardRef(({className:c,...m},x)=>_.createElement(vg,{ref:x,iconNode:f,className:km(`lucide-${gg(u)}`,c),...m}));return d.displayName=`${u}`,d};const oc=He("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const xg=He("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const Fn=He("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const sc=He("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Pn=He("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const yg=He("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const ts=He("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const ic=He("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const lc=He("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Sm=He("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const wg=He("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);const as=He("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const jg=He("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const os=He("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const zg=He("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const kg=He("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Sg=He("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const rc=He("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const Nm=He("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);const qm=He("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Ng=He("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const ns=He("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const ki=He("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const Si=He("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Pr=He("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const on=He("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const ec=He("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),qg=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],Eg=["A1","A2","B1","B2"],vm="lesson-status-v1",xm="audio-settings-v1",ac="writing-practice-v1",Tg={tiempos:ic,verbos:ec,verbos2:ec,gramatica:zg,lectura:jg,vocabulario:xg,palabras:Sm,frases:Sg,tips:os,resumen:lc};function Em({id:u,size:f=18,className:d=""}){const c=Tg[u]||oc;return s.jsx(c,{size:f,className:d})}const Fo=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]}]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:qg},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"f1",level:"A1",title:"Saludos y Cortesía",subtitle:"The first words you need",intro:"These are the phrases that open every conversation. Learn them by ear, repeat them out loud, and use them at every chance.",blocks:[{type:"phraselist",phrases:[{es:"Hola, ¿qué tal?",en:"Hi, how are you?"},{es:"Buenos días.",en:"Good morning."},{es:"Buenas tardes.",en:"Good afternoon."},{es:"Buenas noches.",en:"Good evening / good night."},{es:"Mucho gusto.",en:"Pleased to meet you."},{es:"Encantado / encantada.",en:"Delighted (to meet you)."},{es:"¿Cómo te llamas?",en:"What is your name?"},{es:"Me llamo Othman.",en:"My name is Othman."},{es:"¿De dónde eres?",en:"Where are you from?"},{es:"Soy de Marruecos.",en:"I am from Morocco."},{es:"Por favor.",en:"Please."},{es:"Gracias. — De nada.",en:"Thank you. — You are welcome."},{es:"Perdón. / Disculpe.",en:"Sorry. / Excuse me."},{es:"Hasta luego.",en:"See you later."},{es:"Hasta mañana.",en:"See you tomorrow."}]},{type:"takeaway",text:"These twenty phrases are the entry door. Repeat each one ten times before moving on. They will be the foundation of every spoken interaction."}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function Ag(u){const f=[];let d="",c="normal";for(let m=0;m<u.length;m++){const x=u[m];x==="["?(d&&f.push({text:d,mode:c}),d="",c="irreg"):x==="]"?(d&&f.push({text:d,mode:"irreg"}),d="",c="normal"):x==="{"?(d&&f.push({text:d,mode:c}),d="",c="ending"):x==="}"?(d&&f.push({text:d,mode:"ending"}),d="",c="normal"):d+=x}return d&&f.push({text:d,mode:c}),f}function Jn({raw:u}){return s.jsx(s.Fragment,{children:Ag(u).map((f,d)=>{const c=f.mode==="irreg"?"irreg":f.mode==="ending"?"ending":"";return s.jsx("span",{className:c,children:f.text},d)})})}function In(u){return String(u||"").replace(/[\[\]{}]/g,"")}function dt(u){return String(u||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function Cg({tenses:u,verbName:f}){const[d,c]=_.useState(!1),[m,x]=_.useState([]),[w,z]=_.useState(0),[h,v]=_.useState(""),[j,T]=_.useState(null),[H,$]=_.useState(0),[Y,B]=_.useState(!1);function J(){const K=[];for(const ee of u)for(const Ue of ee.forms||[])K.push({tense:ee.name,pronoun:Ue.p,answer:In(Ue.f)});const Q=[...K].sort(()=>Math.random()-.5);return Q.slice(0,Math.min(8,Q.length))}function Z(){x(J()),z(0),v(""),T(null),$(0),B(!1),c(!0)}function I(K){if(K&&K.preventDefault(),j)return;const Q=m[w],ee=dt(h)===dt(Q.answer);T(ee?"correct":"incorrect"),ee&&$(Ue=>Ue+1)}function P(){if(w+1>=m.length){B(!0);return}z(K=>K+1),v(""),T(null)}function xe(){window.speechSynthesis?.cancel(),c(!1)}const ne=m[w],te=m.length;return s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"quiz-trigger-btn",onClick:Z,children:[s.jsx(ns,{size:14}),"Practicar"]}),d&&s.jsx("div",{className:"quiz-overlay",onClick:xe,children:s.jsxs("div",{className:"quiz-modal",onClick:K=>K.stopPropagation(),children:[s.jsxs("header",{className:"quiz-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),s.jsx("h2",{className:"quiz-title",children:f})]}),s.jsx("button",{className:"quiz-close",onClick:xe,"aria-label":"Close",children:s.jsx(on,{size:18})})]}),Y?s.jsxs("div",{className:"quiz-results",children:[s.jsxs("div",{className:"quiz-results-circle",children:[s.jsxs("div",{className:"quiz-results-pct",children:[Math.round(H/te*100),"%"]}),s.jsxs("div",{className:"quiz-results-fraction",children:[H," / ",te]})]}),s.jsx("h3",{className:"quiz-results-title",children:H===te?"¡Perfecto!":H>=te*.75?"Muy bien":H>=te*.5?"Sigue practicando":"Vamos a repasar"}),s.jsx("p",{className:"quiz-results-msg",children:H===te?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":H>=te*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),s.jsxs("div",{className:"quiz-results-actions",children:[s.jsxs("button",{className:"quiz-retry-btn",onClick:Z,children:[s.jsx(qm,{size:14}),"Otra vez"]}),s.jsx("button",{className:"quiz-done-btn",onClick:xe,children:"Cerrar"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"quiz-progress",children:[s.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",w+1," de ",te]}),s.jsx("div",{className:"quiz-progress-bar",children:s.jsx("div",{className:"quiz-progress-fill",style:{width:`${w/te*100}%`}})})]}),s.jsxs("div",{className:"quiz-question",children:[s.jsx("div",{className:"quiz-tense-label",children:ne.tense}),s.jsxs("div",{className:"quiz-prompt",children:[s.jsx("span",{className:"quiz-pronoun",children:ne.pronoun}),s.jsx("span",{className:"quiz-blank",children:"________"})]}),s.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",s.jsx("em",{children:f.toLowerCase()})," para esta persona."]})]}),s.jsxs("form",{onSubmit:I,className:"quiz-form",children:[s.jsx("input",{type:"text",className:`quiz-input ${j||""}`,value:h,onChange:K=>v(K.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!j}),!j&&s.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!h.trim(),children:"Comprobar"})]}),j&&s.jsxs("div",{className:`quiz-feedback ${j}`,children:[j==="correct"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"quiz-feedback-icon",children:s.jsx(sc,{size:18})}),s.jsxs("div",{children:[s.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),s.jsx("div",{className:"quiz-feedback-answer",children:ne.answer})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"quiz-feedback-icon",children:s.jsx(on,{size:18})}),s.jsxs("div",{children:[s.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),s.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",s.jsx("strong",{children:ne.answer})]})]})]}),s.jsx($e,{text:ne.answer,size:"md",className:"quiz-feedback-speak"})]}),j&&s.jsxs("button",{className:"quiz-next-btn",onClick:P,children:[w+1>=te?"Ver resultados":"Siguiente",s.jsx(ts,{size:16})]}),s.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",s.jsx("strong",{children:H})," / ",w+(j?1:0)]})]})]})})]})}function Fr(u){return[...u].sort(()=>Math.random()-.5)}function Tm(u){const f=[];function d(x,w){if(!x||!w)return;const z=In(String(x)).trim(),h=String(w).trim();z.length<2||h.length<2||f.push({es:z,en:h})}for(const x of u?.sections||[]){for(const w of x.examples||[])d(w.es,w.en);for(const w of x.table?.rows||[])w?.[0]&&w?.[1]&&d(w[1],`${w[0]} form`)}for(const x of u?.blocks||[]){for(const w of x.pairs||[])d(w.es,w.en);for(const w of x.columns||[])d(w.es,w.en);for(const w of x.phrases||[])d(w.es,w.en);for(const w of x.words||[])d(w.es,w.en);for(const w of x.lessons||[])for(const z of Tm(w))d(z.es,z.en)}const c=[],m=new Set;for(const x of f){const w=dt(x.es);m.has(w)||(m.add(w),c.push(x))}return c}function Mg(u){const f=Tm(u);return f.length<2?[]:Fr(f).slice(0,Math.min(4,f.length)).map((c,m)=>{const x=m%2===0,w=x?c.es:c.en,z=Fr(f).filter(h=>h!==c).map(h=>x?h.es:h.en).filter(h=>dt(h)!==dt(w)).slice(0,3);return{prompt:x?c.en:c.es,answer:w,speak:c.es,mode:x?"Elige el espanol":"Elige la traduccion",choices:Fr([w,...z]).slice(0,4)}})}function Am({source:u,title:f="Mini practica"}){const d=_.useMemo(()=>Mg(u),[u]),[c,m]=_.useState({}),[x,w]=_.useState(!1);if(_.useEffect(()=>{m({}),w(!1)},[u]),d.length<2)return null;const z=Object.keys(c).length,h=d.reduce((v,j,T)=>dt(c[T])===dt(j.answer)?v+1:v,0);return s.jsxs("section",{className:"lesson-mini-quiz",children:[s.jsxs("div",{className:"lesson-mini-head",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"lesson-mini-kicker",children:[s.jsx(ns,{size:13})," Practica rapida"]}),s.jsx("h3",{children:f})]}),s.jsxs("button",{className:"lesson-mini-reset",onClick:()=>{m({}),w(!1)},children:[s.jsx(qm,{size:13}),"Reiniciar"]})]}),s.jsx("div",{className:"lesson-mini-list",children:d.map((v,j)=>{const T=c[j],H=T&&dt(T)===dt(v.answer);return s.jsxs("div",{className:"lesson-mini-card",children:[s.jsxs("div",{className:"lesson-mini-meta",children:[s.jsx("span",{children:String(j+1).padStart(2,"0")}),s.jsx("em",{children:v.mode}),s.jsx($e,{text:v.speak})]}),s.jsx("p",{className:"lesson-mini-prompt",children:v.prompt}),s.jsx("div",{className:"lesson-mini-choices",children:v.choices.map($=>{const Y=T===$;return s.jsx("button",{className:`${Y?"active":""} ${x&&Y?H?"correct":"wrong":""}`,onClick:()=>m(B=>({...B,[j]:$})),children:$},$)})}),x&&T&&!H&&s.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",s.jsx("strong",{children:v.answer})]})]},`${v.prompt}-${j}`)})}),s.jsxs("div",{className:"lesson-mini-footer",children:[s.jsxs("span",{children:[z," / ",d.length," respondidas"]}),s.jsx("button",{className:"lesson-mini-check",disabled:z<d.length,onClick:()=>w(!0),children:"Comprobar"}),x&&s.jsxs("strong",{children:[h," / ",d.length]})]})]})}let tn=null,ym=!1,$n={rate:.85,voiceURI:""};function Cm(){return Math.max(.65,Math.min(1.25,Number($n.rate)||.85))}function Ei(u={}){$n={...$n,...u,rate:Math.max(.65,Math.min(1.25,Number(u.rate??$n.rate)||.85))},tn=null}function Mm(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function wm(){return Mm().filter(u=>u.lang&&u.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(u.name||""))}function Wn(){if(typeof window>"u"||!window.speechSynthesis)return null;if(tn)return tn;const u=Mm();if(u.length===0)return null;if($n.voiceURI){const c=u.find(m=>m.voiceURI===$n.voiceURI);if(c)return tn=c,c}const f=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const c of f){const m=u.find(x=>x.lang&&x.lang.toLowerCase().startsWith(c.toLowerCase()));if(m)return tn=m,m}const d=u.find(c=>/spanish|español/i.test(c.name||""));return d?(tn=d,d):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{tn=null,Wn()}),Wn(),setTimeout(Wn,250),setTimeout(Wn,1e3));function cc(){if(!ym&&!(typeof window>"u"||!window.speechSynthesis))try{const u=new SpeechSynthesisUtterance(" ");u.volume=0,u.rate=1,window.speechSynthesis.speak(u),ym=!0}catch{}}function Um(u,f={}){if(typeof window>"u"||!window.speechSynthesis||!u)return f.onerror&&f.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const d=new SpeechSynthesisUtterance(u),c=Wn();c&&(d.voice=c),d.lang=c?.lang||"es-ES",d.rate=f.rate??Cm(),d.pitch=f.pitch??1,d.volume=1,f.onend&&(d.onend=f.onend),f.onerror&&(d.onerror=w=>{console.warn("[speech] error:",w?.error||"unknown",{text:u.slice(0,30),voice:c?.name}),f.onerror(w)}),f.onboundary&&(d.onboundary=f.onboundary),f.onstart&&(d.onstart=f.onstart),window.speechSynthesis.speak(d);const m=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(m);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),x=d.onend;return d.onend=w=>{clearInterval(m),x&&x(w)},d}catch(d){return console.warn("[speech] threw:",d),f.onerror&&f.onerror({error:d.message}),null}}function Ai({text:u,paragraphClass:f="reading-paragraph",firstParagraph:d=!1}){const c=_.useMemo(()=>{const B=[];let J=0;const Z=/([0-9a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)|([^0-9a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)/g;let I;for(;(I=Z.exec(u))!==null;){const P=!!I[1];B.push({text:I[0],isWord:P,charStart:J}),J+=I[0].length}return B},[u]),m=_.useMemo(()=>{const B=[];let J="",Z=[],I=-1;function P(){Z.length>0&&B.push({spokenText:J.trim(),words:Z}),J="",Z=[],I=-1}for(let xe=0;xe<c.length;xe++){const ne=c[xe];if(!ne.isWord&&Z.length===0&&/^\s+$/.test(ne.text))continue;const te=J.length;J+=ne.text,ne.isWord?(Z.push({tokenIdx:xe,text:ne.text,charStart:te,charEnd:te+ne.text.length,commaAfter:!1}),I=Z.length-1):(/,/.test(ne.text)&&I>=0&&(Z[I].commaAfter=!0),/[.!?;:]/.test(ne.text)&&P())}return P(),B},[c]),[x,w]=_.useState(-1),[z,h]=_.useState(!1),v=nn.useRef([]),j=nn.useRef([]),T=nn.useRef(!1),H=nn.useRef(110);function $(){j.current.forEach(clearTimeout),j.current=[]}function Y(B){if(B.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(cc(),z){T.current=!0,window.speechSynthesis?.cancel(),$(),h(!1),w(-1);return}if(m.length===0)return;window.speechSynthesis?.cancel(),$(),T.current=!1,h(!0),H.current=110;let J=0;function Z(){if(T.current)return;if(J>=m.length){h(!1),w(-1);return}const I=m[J];if(!I||I.words.length===0){J++,Z();return}const P=new SpeechSynthesisUtterance(I.spokenText),xe=Wn();xe&&(P.voice=xe),P.lang=xe?.lang||"es-ES",P.rate=Cm(),P.pitch=1;let ne=!1,te=!1,K=!1,Q=!1,ee=0;const Ue=30,Ge=200;function D(W){const ce=Math.max(0,Number(W)||0);let me=I.words[0];for(const g of I.words)if(g.charStart<=ce+1)me=g;else break;return me}function pe(){if(Q||K||T.current)return;Q=!0;let W=0;for(let ce=0;ce<I.words.length;ce++){const me=I.words[ce],M=setTimeout(()=>{!T.current&&!K&&w(me.tokenIdx)},W);j.current.push(M),W+=me.text.length*H.current+Ue,me.commaAfter&&(W+=Ge)}}P.onstart=()=>{if(ne)return;ne=!0,ee=performance.now();const W=setTimeout(pe,350);j.current.push(W)},P.onboundary=W=>{if(T.current||typeof W.charIndex!="number")return;const ce=D(W.charIndex);ce&&(K=!0,w(ce.tokenIdx))};const we=setTimeout(()=>{!ne&&!T.current&&(ne=!0,ee=performance.now(),pe())},500);j.current.push(we);function be(){if(te||(te=!0,T.current))return;if(ee>0){const ce=performance.now()-ee,me=I.words.reduce((X,le)=>X+le.text.length,0),g=I.words.filter(X=>X.commaAfter).length,M=I.words.length*Ue+g*Ge,V=Math.max(100,ce-M);if(me>0){const X=V/me;X>=40&&X<=300&&(H.current=X*.6+H.current*.4)}}$(),J++;const W=setTimeout(Z,30);j.current.push(W)}P.onend=be,P.onerror=be;const N=Math.max(5e3,I.spokenText.length*220),G=setTimeout(be,N);j.current.push(G),window.speechSynthesis.speak(P)}Z()}return _.useEffect(()=>()=>{T.current=!0,$(),z&&window.speechSynthesis?.cancel()},[]),_.useEffect(()=>{if(x<0)return;const B=v.current[x];if(!B||typeof B.getBoundingClientRect!="function")return;const J=B.getBoundingClientRect(),Z=window.innerHeight||document.documentElement.clientHeight;(J.bottom>Z-100||J.top<80)&&B.scrollIntoView({behavior:"smooth",block:"center"})},[x]),typeof window<"u"&&!window.speechSynthesis?s.jsxs("p",{className:f,children:[s.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:B=>{B.stopPropagation(),alert("Tu navegador no soporta lectura en voz alta.")},"aria-label":"Audio not supported",title:"Audio no disponible",children:s.jsx(Pr,{size:12})}),u]}):s.jsxs("p",{className:`${f} karaoke-paragraph ${z?"is-playing":""}`,children:[s.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${z?"playing":""}`,onClick:Y,onPointerDown:B=>B.stopPropagation(),"aria-label":z?"Stop":"Play audio with highlighting",title:z?"Detener":"Escuchar con resaltado",children:s.jsx(Pr,{size:12})}),c.map((B,J)=>{if(!B.isWord)return s.jsx("span",{className:"kt-space",children:B.text},J);const Z=J===x;return s.jsx("span",{ref:I=>v.current[J]=I,className:`kt-word ${Z?"kt-active":""}`,children:B.text},J)})]})}function $e({text:u,size:f="sm",className:d=""}){const[c,m]=_.useState(!1);function x(w){if(w.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(cc(),c){window.speechSynthesis?.cancel(),m(!1);return}m(!0),Um(u,{onend:()=>m(!1),onerror:z=>{m(!1),z?.error&&z.error!=="canceled"&&z.error!=="interrupted"&&alert("Error al leer: "+z.error+". Asegúrate de tener una voz en español instalada.")}})}return s.jsx("button",{className:`speak-btn speak-btn-${f} ${c?"playing":""} ${d}`,onClick:x,onPointerDown:w=>w.stopPropagation(),"aria-label":c?"Stop":"Play audio",title:c?"Detener":"Escuchar",children:s.jsx(Pr,{size:f==="sm"?12:14})})}function Ug({settings:u,onChange:f}){const[d,c]=_.useState(()=>wm());_.useEffect(()=>{Ei(u)},[u]),_.useEffect(()=>{function x(){c(wm())}if(x(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",x);const w=setTimeout(x,600);return()=>{clearTimeout(w),window.speechSynthesis.removeEventListener?.("voiceschanged",x)}}},[]);function m(x){const w={...u,...x};Ei(w),f?.(w)}return s.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[s.jsxs("div",{className:"audio-settings-label",children:[s.jsx(wg,{size:14}),"Audio"]}),s.jsxs("select",{className:"audio-rate-select",value:String(u.rate),onChange:x=>m({rate:Number(x.target.value)}),"aria-label":"Audio speed",children:[s.jsx("option",{value:"0.7",children:"0.70x"}),s.jsx("option",{value:"0.85",children:"0.85x"}),s.jsx("option",{value:"1",children:"1.00x"}),s.jsx("option",{value:"1.15",children:"1.15x"})]}),s.jsxs("select",{className:"audio-voice-select",value:u.voiceURI||"",onChange:x=>m({voiceURI:x.target.value}),"aria-label":"Spanish voice",children:[s.jsx("option",{value:"",children:"Voz espanola"}),d.map(x=>s.jsxs("option",{value:x.voiceURI,children:[x.name," (",x.lang,")"]},x.voiceURI))]})]})}function Ni({es:u,en:f,esClass:d="vu-ex-es",enClass:c="vu-ex-en"}){const m=(u||"").length,x=(f||"").length;return m<=18&&x<=18&&m+x<=36?s.jsxs("div",{className:`${d} inline-pair`,children:[s.jsx($e,{text:u}),u," ",s.jsxs("span",{className:`${c} inline-en`,children:["(",f,")"]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:d,children:[s.jsx($e,{text:u}),u]}),s.jsx("div",{className:c,children:f})]})}function Dg({s:u}){return s.jsxs("div",{className:"gl-section",children:[u.heading&&s.jsx("h3",{className:"gl-heading",children:u.heading}),u.text&&s.jsx("p",{className:"gl-text",children:u.text}),u.table&&s.jsx("div",{className:"lesson-table-wrap",children:s.jsxs("table",{className:"lesson-table gl-table",children:[u.table.headers&&s.jsx("thead",{children:s.jsx("tr",{children:u.table.headers.map((f,d)=>s.jsx("th",{children:f},d))})}),s.jsx("tbody",{children:u.table.rows.map((f,d)=>s.jsx("tr",{children:f.map((c,m)=>s.jsx("td",{children:m===0?c:s.jsx(Jn,{raw:String(c)})},m))},d))})]})}),u.examples&&s.jsx("ul",{className:"gl-examples",children:u.examples.map((f,d)=>s.jsx("li",{children:s.jsx(Ni,{es:f.es,en:f.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},d))}),u.tip&&s.jsxs("aside",{className:"gl-tip",children:[s.jsx(os,{size:16,className:"gl-tip-icon"}),s.jsx("p",{children:u.tip})]}),u.takeaway&&s.jsxs("aside",{className:"gl-takeaway",children:[s.jsxs("div",{className:"gl-takeaway-label",children:[s.jsx(rc,{size:12})," Lo que te llevas"]}),s.jsx("p",{children:u.takeaway})]})]})}const Lg={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function Ti({level:u}){const f=Lg[u]||{};return s.jsx("span",{className:"bio-level-badge",style:{background:f.bg,color:f.color,borderColor:f.border},children:u})}function Og({poems:u}){const[f,d]=_.useState(null);function c(m){d(x=>x===m?null:m)}return s.jsx("section",{className:"block foldable-poems",children:u.map((m,x)=>{const w=f===x;return s.jsxs("div",{className:`poem-item ${w?"open":"closed"}`,children:[s.jsxs("button",{className:"poem-toggle",onClick:()=>c(x),"aria-expanded":w,children:[s.jsxs("div",{className:"poem-toggle-inner",children:[s.jsx("span",{className:"poem-num",children:String(x+1).padStart(2,"0")}),s.jsxs("div",{className:"poem-toggle-text",children:[s.jsx("span",{className:"poem-title-line",children:m.title}),s.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),s.jsxs("div",{className:"poem-toggle-right",children:[s.jsx("span",{className:"poem-level-tag",children:m.level}),s.jsx(Pn,{size:18,className:`poem-chevron ${w?"open":""}`})]})]}),w&&s.jsxs("div",{className:"poem-body",children:[m.note&&s.jsx("p",{className:"poem-intro-note",children:m.note}),m.opening&&s.jsxs("blockquote",{className:"poem-opening-quote",children:[s.jsx($e,{text:m.opening,size:"md",className:"poem-quote-speak"}),m.opening]}),s.jsxs("div",{className:"poem-tools",children:[s.jsx($e,{text:m.stanzas.map(z=>z.es).join(". "),size:"md"}),s.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),s.jsx("div",{className:"poem-stanzas",children:m.stanzas.map((z,h)=>s.jsxs("div",{className:"poem-stanza",children:[s.jsx("div",{className:"poem-stanza-num",children:h+1}),s.jsx(Ai,{text:z.es,paragraphClass:"poem-stanza-es"}),s.jsx("div",{className:"poem-stanza-en",children:z.en})]},h))}),m.vocab&&m.vocab.length>0&&s.jsxs("div",{className:"poem-vocab-block",children:[s.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),s.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((z,h)=>s.jsxs("div",{className:"poem-vocab-row",children:[s.jsx("span",{className:"poem-vocab-es",children:z.es}),s.jsx("span",{className:"poem-vocab-dash",children:"—"}),s.jsx("span",{className:"poem-vocab-en",children:z.en})]},h))})]}),m.learningNote&&s.jsxs("aside",{className:"poem-learning-note",children:[s.jsxs("div",{className:"poem-learning-label",children:[s.jsx(os,{size:14})," Nota de lectura"]}),s.jsx("p",{children:m.learningNote})]})]})]},x)})})}function _g({songs:u}){const[f,d]=_.useState(null);function c(m){d(x=>x===m?null:m)}return s.jsx("section",{className:"block foldable-poems foldable-songs",children:u.map((m,x)=>{const w=f===x,z=m.sections.map(h=>h.es).join(". ");return s.jsxs("div",{className:`poem-item song-item ${w?"open":"closed"}`,children:[s.jsxs("button",{className:"poem-toggle",onClick:()=>c(x),"aria-expanded":w,children:[s.jsxs("div",{className:"poem-toggle-inner",children:[s.jsx("span",{className:"poem-num",children:String(x+1).padStart(2,"0")}),s.jsxs("div",{className:"poem-toggle-text",children:[s.jsx("span",{className:"poem-title-line",children:m.title}),s.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),s.jsxs("div",{className:"poem-toggle-right",children:[s.jsx("span",{className:"poem-level-tag",children:m.level}),s.jsx(Pn,{size:18,className:`poem-chevron ${w?"open":""}`})]})]}),w&&s.jsxs("div",{className:"poem-body song-body",children:[s.jsx("p",{className:"poem-intro-note",children:m.note}),s.jsxs("div",{className:"poem-tools",children:[s.jsx($e,{text:z,size:"md"}),s.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),s.jsx("div",{className:"song-sections",children:m.sections.map((h,v)=>s.jsxs("div",{className:"song-section",children:[s.jsxs("div",{className:"song-section-label",children:[String(v+1).padStart(2,"0")," · ",h.label]}),s.jsxs("div",{className:"song-section-grid",children:[s.jsx(Ai,{text:h.es,paragraphClass:"song-lyric-es"}),s.jsx("p",{className:"song-lyric-en",children:h.en})]})]},h.label))}),m.vocab&&m.vocab.length>0&&s.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[s.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),s.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((h,v)=>s.jsxs("div",{className:"poem-vocab-row",children:[s.jsx("span",{className:"poem-vocab-es",children:h.es}),s.jsx("span",{className:"poem-vocab-dash",children:"—"}),s.jsx("span",{className:"poem-vocab-en",children:h.en})]},v))})]}),m.learningNote&&s.jsxs("aside",{className:"poem-learning-note",children:[s.jsxs("div",{className:"poem-learning-label",children:[s.jsx(os,{size:14})," Nota de canción"]}),s.jsx("p",{children:m.learningNote})]})]})]},m.title)})})}function Hg({bios:u}){const[f,d]=_.useState(null);function c(m){d(x=>x===m?null:m)}return s.jsx("section",{className:"block foldable-bios",children:u.map((m,x)=>{const w=f===x;return s.jsxs("div",{className:`bio-item ${w?"open":"closed"}`,children:[s.jsxs("button",{className:"bio-toggle",onClick:()=>c(x),"aria-expanded":w,children:[s.jsxs("div",{className:"bio-toggle-left",children:[s.jsx("span",{className:"bio-num",children:String(x+1).padStart(2,"0")}),s.jsxs("div",{className:"bio-toggle-text",children:[s.jsx("span",{className:"bio-name",children:m.title}),s.jsx("span",{className:"bio-subtitle-line",children:m.subtitle}),s.jsx("span",{className:"bio-dates",children:m.dates})]})]}),s.jsxs("div",{className:"bio-toggle-right",children:[s.jsx("div",{className:"bio-level-pills",children:[...new Set(m.levels.map(z=>z.level))].map(z=>s.jsx(Ti,{level:z},z))}),s.jsx(Pn,{size:18,className:`bio-chevron ${w?"open":""}`})]})]}),w&&s.jsx("div",{className:"bio-body",children:m.levels.map((z,h)=>s.jsxs("div",{className:"bio-section",children:[s.jsxs("div",{className:"bio-section-header",children:[s.jsx(Ti,{level:z.level}),s.jsx("h3",{className:"bio-section-title",children:z.heading}),s.jsx($e,{text:z.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),z.paragraphs.map((v,j)=>s.jsx(Ai,{text:v,paragraphClass:"bio-paragraph"},j)),z.vocab&&s.jsxs("div",{className:"bio-vocab",children:[s.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),z.vocab]})]},h))})]},x)})})}function Dm(u,f,d,c){return`${u||"chapter"}::${f}::${d}::${c}`}function Gg({lessons:u,chapterId:f,lessonStatuses:d={},onLessonStatusChange:c}){const[m,x]=_.useState(null);function w(z){x(h=>h===z?null:z)}return s.jsx("section",{className:"block foldable-grammar",children:u.map((z,h)=>{const v=m===h,j=Dm(f,"grammar",h,z.title);return s.jsxs("div",{className:`gl-item ${v?"open":"closed"}`,children:[s.jsxs("button",{className:"gl-toggle",onClick:()=>w(h),"aria-expanded":v,"touch-action":"manipulation",children:[s.jsx("span",{className:"gl-num",children:String(h+1).padStart(2,"0")}),s.jsx("span",{className:"gl-level-badge",children:z.level}),s.jsxs("div",{className:"gl-toggle-text",children:[s.jsx("span",{className:"gl-title",children:z.title}),s.jsx("span",{className:"gl-subtitle",children:z.subtitle})]}),d[j]&&s.jsx("span",{className:`gl-status-pill ${d[j]}`,children:d[j]==="understood"?"Entendido":"Leído"}),s.jsx(Pn,{size:18,className:`gl-chevron ${v?"open":""}`})]}),v&&s.jsxs("div",{className:"gl-body",children:[s.jsx(uc,{status:d[j],onChange:T=>c?.(j,T)}),z.intro&&s.jsx("p",{className:"gl-intro",children:z.intro}),z.sections.map((T,H)=>s.jsx(Dg,{s:T},H)),s.jsx(Am,{source:z,title:`Practica: ${z.title}`})]})]},h)})})}function Bg({stories:u,chapterId:f,lessonStatuses:d={},onLessonStatusChange:c}){const[m,x]=_.useState(null);function w(z){x(h=>h===z?null:z)}return s.jsx("section",{className:"block foldable-stories",children:u.map((z,h)=>{const v=m===h,j=Dm(f,"story",h,z.title);return s.jsxs("div",{className:`story-item ${v?"open":"closed"}`,children:[s.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>w(h),"aria-expanded":v,children:[s.jsxs("div",{className:"bio-toggle-left",children:[s.jsx("span",{className:"bio-num",children:String(h+1).padStart(2,"0")}),s.jsxs("div",{className:"bio-toggle-text",children:[s.jsx("span",{className:"bio-name",children:z.title}),s.jsxs("span",{className:"bio-subtitle-line",children:[z.paragraphs.length," párrafos · lectura con audio"]})]})]}),s.jsxs("div",{className:"bio-toggle-right",children:[s.jsxs("div",{className:"bio-level-pills",children:[s.jsx(Ti,{level:z.level}),d[j]&&s.jsx("span",{className:`story-status-pill ${d[j]}`,children:d[j]==="understood"?"Entendido":"Leído"})]}),s.jsx(Pn,{size:18,className:`bio-chevron ${v?"open":""}`})]})]}),v&&s.jsx("div",{className:"bio-body story-body",children:s.jsxs("div",{className:"bio-section story-section",children:[s.jsxs("div",{className:"bio-section-header",children:[s.jsx(Ti,{level:z.level}),s.jsx("h3",{className:"bio-section-title",children:z.title}),s.jsx($e,{text:z.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),s.jsx(uc,{status:d[j],onChange:T=>c?.(j,T)}),z.paragraphs.map((T,H)=>s.jsx(Ai,{text:T,paragraphClass:"bio-paragraph story-paragraph"},H))]})})]},h)})})}const jm="palabras-progress-v1",Rg=1440*60*1e3;function Lm(u,f){return`${u}::${f.rank}::${f.spanish}`}function tc(u,f){return f.sourceGroupId||u.id}function qi(u,f){return Lm(tc(u,f),f)}function pt(u){return String(u).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const Yg=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function Vg(u){const f=new Map;for(const d of u||[])for(const c of d.entries||[]){const m=pt(c.spanish);f.has(m)||f.set(m,{...c,sourceGroupId:d.id,sourceGroupTitle:d.title})}return Yg.map(d=>{const c=new Set,m=d.terms.map((x,w)=>{const z=pt(x.spanish);if(c.has(z))return null;c.add(z);const h=f.get(z),v=x.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...h||{rank:`T${w+1}`,spanish:v,english:x.english,sourceGroupId:d.id,sourceGroupTitle:d.title},topicTerm:x.spanish,topicEnglish:x.english,topicOrder:w+1}}).filter(Boolean);return{id:d.id,title:d.title,description:d.description,entries:m,isTopic:!0}})}function _t(u){return u.topicTerm||u.spanish}function Po(u){return u.topicEnglish||u.english}function Om(u,f,d=Date.now()){const c=u?.intervalDays||0,m=u?.ease||2.35,x=u?.reps||0,w={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:x?2:1,multiplier:m},easy:{label:"Easy",easeDelta:.12,minDays:x?4:3,multiplier:m+.7}}[f]||{label:"Good",easeDelta:0,minDays:1,multiplier:m},z=Math.max(1.35,Math.min(3.2,m+w.easeDelta)),h=f==="again"?w.minDays:Math.max(w.minDays,(c||1)*w.multiplier);return{...u,ease:z,intervalDays:h,dueAt:d+h*Rg,reps:f==="again"?0:x+1,lapses:f==="again"?(u?.lapses||0)+1:u?.lapses||0,seen:!0,mastered:f==="easy"||h>=7,lastRating:w.label,reviewedAt:d}}function Qg(u,f,d=Date.now()){const c={total:0,seen:0,due:0,mastered:0,byGroup:{}},m=new Set;for(const x of u||[]){const w={total:x.entries.length,seen:0,due:0,mastered:0};for(const z of x.entries){const h=qi(x,z),v=f[h],j=m.has(h);j||(m.add(h),c.total++),v?.seen&&(w.seen++,j||c.seen++,v.mastered&&(w.mastered++,j||c.mastered++),(v.dueAt||0)<=d&&(w.due++,j||c.due++))}c.byGroup[x.id]=w}return c}function zm(u,f){const d=u.spanish.split(",")[0].trim();return f==="topic-work-professions"?{es:`En mi trabajo uso "${d}" con frecuencia.`,en:`At work I use "${d}" often.`}:f==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${d}" con calma.`,en:`Today I can name "${d}" calmly.`}:f==="function-words"?{es:`Uso "${d}" para unir una idea con otra.`,en:`"${d}" helps connect one idea to another.`}:/^to /.test(u.english)?{es:`Hoy necesito ${d} en una frase clara.`,en:`Today I need "${d}" in a clear sentence.`}:{es:`Escribo "${d}" en mi cuaderno de espanol.`,en:`"${d}" means ${Po(u)}.`}}function Xg({onSaveWord:u,progress:f={},onProgressChange:d}){const[c,m]=_.useState(null),[x,w]=_.useState(""),[z,h]=_.useState(""),[v,j]=_.useState(0),[T,H]=_.useState({}),[$,Y]=_.useState(!1),[B,J]=_.useState(!1),[Z,I]=_.useState(!1),[P,xe]=_.useState(0),[ne,te]=_.useState(!1);_.useEffect(()=>{let O=!0;return hg(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(ye=>{if(!O)return;const ue=ye.default||[],se=[...ue,...Vg(ue)];m(se),w(Fe=>Fe||se[0]?.id||"")}),()=>{O=!1}},[]);const K=!c,Q=c?.find(O=>O.id===x)||c?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},ee=_.useMemo(()=>{const O=pt(z),ye=O?Q.entries.filter(se=>[se.spanish,se.english,se.topicTerm,se.topicEnglish,String(se.rank)].some(Fe=>pt(Fe||"").includes(O))):Q.entries;if(!B)return ye;const ue=Date.now();return ye.filter(se=>{const Fe=f[qi(Q,se)];return Fe?.seen&&(Fe.dueAt||0)<=ue})},[Q,z,B,f]),Ue=24,Ge=Math.min(v,Math.max(0,ee.length-1)),D=ee.slice(Ge,Ge+Ue),pe=D.map(O=>_t(O)).join(". "),be=_.useMemo(()=>Qg(c||[],f),[c,f]).byGroup[Q.id]||{total:Q.entries.length,seen:0,due:0,mastered:0},N=74,G=420,W=Math.max(0,Math.floor(P/N)-4),ce=Math.min(ee.length,W+Math.ceil(G/N)+10),me=ee.slice(W,ce);if(_.useEffect(()=>{j(0),H({}),xe(0)},[x,z,B]),K)return s.jsx("section",{className:"block palabras-lab",children:s.jsxs("div",{className:"palabras-empty",children:[s.jsx(ns,{size:24}),s.jsx("p",{children:"Cargando palabras..."})]})});function g(){j(O=>O+Ue>=ee.length?0:O+Ue),H({})}function M(){const O=Math.max(0,ee.length-Ue);j(Math.floor(Math.random()*(O+1))),H({})}function V(O){const ye=`${Q.id}-${O.rank}-${O.spanish}`;H(ue=>({...ue,[ye]:!ue[ye]}))}function X(O,ye){const ue=tc(Q,O),se=Lm(ue,O),Fe={...f,[se]:{...Om(f[se],ye),groupId:ue,displayGroupId:Q.id,topicId:Q.isTopic?Q.id:void 0,spanish:_t(O),english:Po(O),rank:O.rank}};d?.(Fe),H(Pe=>({...Pe,[`${Q.id}-${O.rank}-${O.spanish}`]:!0}))}function le(){if(!D.length)return;if(cc(),ne){window.speechSynthesis?.cancel(),te(!1);return}const O=D.flatMap(ye=>{const ue=zm(ye,Q.id);return[_t(ye),ue.es,_t(ye)]});te(!0),Um(O.join(". "),{onend:()=>te(!1),onerror:()=>te(!1)})}function fe(O){const ye=tc(Q,O),ue=Q.isTopic&&O.sourceGroupTitle?`Source ${O.sourceGroupTitle}`:null;u?.({word:_t(O),translation:Po(O),pos:Q.isTopic?`${Q.title} topic`:Q.title,extras:[`Rank ${O.rank}`,Q.description,ue].filter(Boolean),tags:["palabras",Q.id,ye].filter(Boolean),savedAt:Date.now()})}return s.jsxs("section",{className:"block palabras-lab",children:[s.jsxs("div",{className:"palabras-toolbar",children:[s.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:c.map(O=>s.jsxs("button",{className:`palabras-tab ${O.id===Q.id?"active":""}`,onClick:()=>w(O.id),role:"tab","aria-selected":O.id===Q.id,children:[s.jsx("span",{children:O.title.replace(/^Group /,"G")}),s.jsx("strong",{children:O.entries.length})]},O.id))}),s.jsxs("label",{className:"palabras-search",children:[s.jsx("span",{children:"Buscar"}),s.jsx("input",{value:z,onChange:O=>h(O.target.value),placeholder:"palabra, meaning, rank..."})]})]}),s.jsxs("div",{className:"palabras-stage",children:[s.jsxs("div",{className:"palabras-stage-copy",children:[s.jsx("div",{className:"palabras-stage-kicker",children:Q.isTopic?"Tema integrado":"Grupo intacto"}),s.jsx("h2",{children:Q.title}),s.jsx("p",{children:Q.description})]}),s.jsxs("div",{className:"palabras-stage-stats",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Mostrando"}),s.jsx("strong",{children:D.length})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Filtradas"}),s.jsx("strong",{children:ee.length})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Entrada"}),s.jsx("strong",{children:ee.length?Ge+1:0})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Vencidas"}),s.jsx("strong",{children:be.due})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Vistas"}),s.jsx("strong",{children:be.seen})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Dominadas"}),s.jsx("strong",{children:be.mastered})]})]})]}),s.jsxs("div",{className:"palabras-actions",children:[s.jsx($e,{text:pe,size:"md",className:"palabras-read-btn"}),s.jsx("button",{className:`palabras-action-btn ${ne?"active":""}`,onClick:le,children:ne?"Escuchando...":"Escucha activa"}),s.jsx("button",{className:`palabras-action-btn ${B?"active":""}`,onClick:()=>J(O=>!O),children:B?"Todas":"Vencidas"}),s.jsx("button",{className:"palabras-action-btn",onClick:()=>Y(O=>!O),children:$?"Ocultar ingles":"Mostrar ingles"}),s.jsx("button",{className:"palabras-action-btn",onClick:g,children:"Siguiente ronda"}),s.jsx("button",{className:"palabras-action-btn",onClick:M,children:"Barajar"}),s.jsx("button",{className:`palabras-action-btn ${Z?"active":""}`,onClick:()=>I(O=>!O),children:"Lista completa"})]}),D.length?s.jsx("div",{className:"palabras-grid",children:D.map(O=>{const ye=`${Q.id}-${O.rank}-${O.spanish}`,ue=$||T[ye],se=f[qi(Q,O)],Fe=zm(O,Q.id);return s.jsxs("article",{className:`palabra-card ${ue?"revealed":""}`,children:[s.jsxs("button",{className:"palabra-main",onClick:()=>V(O),children:[s.jsxs("span",{className:"palabra-rank",children:["#",O.rank]}),s.jsx("span",{className:"palabra-es",children:_t(O)}),s.jsx("span",{className:"palabra-en",children:ue?Po(O):"..."}),ue&&s.jsxs("span",{className:"palabra-example",children:[s.jsx("span",{children:Fe.es}),s.jsx("em",{children:Fe.en})]})]}),s.jsxs("div",{className:"palabra-card-actions",children:[s.jsx($e,{text:_t(O)}),s.jsxs("button",{className:"palabra-save",onClick:()=>fe(O),children:[s.jsx(Fn,{size:13}),"Memoria"]})]}),s.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(Pe=>s.jsx("button",{onClick:()=>X(O,Pe),children:Pe==="again"?"Again":Pe==="hard"?"Hard":Pe==="good"?"Good":"Easy"},Pe))}),se?.seen&&s.jsx("div",{className:"palabra-review-state",children:se.mastered?"Dominada":`Due ${new Date(se.dueAt||Date.now()).toLocaleDateString()}`})]},ye)})}):s.jsxs("div",{className:"palabras-empty",children:[s.jsx(ns,{size:24}),s.jsx("p",{children:"No words match this search in the selected group."})]}),Z&&s.jsxs("div",{className:"palabras-browser",children:[s.jsxs("div",{className:"palabras-browser-head",children:[s.jsx("span",{children:"Lista virtual"}),s.jsxs("strong",{children:[ee.length," palabras"]})]}),s.jsx("div",{className:"palabras-virtual-list",style:{height:G},onScroll:O=>xe(O.currentTarget.scrollTop),children:s.jsx("div",{style:{height:ee.length*N,position:"relative"},children:s.jsx("div",{style:{transform:`translateY(${W*N}px)`},children:me.map(O=>{const ye=f[qi(Q,O)];return s.jsxs("div",{className:"palabras-virtual-row",style:{height:N},children:[s.jsxs("span",{className:"palabra-rank",children:["#",O.rank]}),s.jsx("strong",{children:_t(O)}),s.jsx("span",{children:Po(O)}),s.jsx("button",{onClick:()=>X(O,"good"),children:ye?.seen?"Actualizar":"Visto"})]},`${O.rank}-${O.spanish}`)})})})})]})]})}function uc({status:u,onChange:f}){const d=u==="read"||u==="understood",c=u==="understood";function m(){f?.(u==="read"?null:"read")}function x(){f?.(u==="understood"?"read":"understood")}return s.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[s.jsx("span",{className:"lesson-status-label",children:"Estado"}),s.jsxs("button",{className:`lesson-status-btn ${d?"active":""}`,onClick:m,children:[s.jsx(oc,{size:14}),"Leído"]}),s.jsxs("button",{className:`lesson-status-btn understood ${c?"active":""}`,onClick:x,children:[s.jsx(sc,{size:14}),"Entendido"]})]})}function Zg({chapter:u,sectionId:f,onSaveWord:d,palabrasProgress:c,onPalabrasProgressChange:m,lessonStatuses:x={},onLessonStatusChange:w}){const z=u.blocks.some(h=>h.type==="foldable-grammar"||h.type==="foldable-stories");return s.jsxs("article",{className:"chapter-body",children:[s.jsxs("header",{className:"chapter-header",children:[s.jsxs("div",{className:"chapter-icon-row",children:[f&&s.jsx("div",{className:"chapter-icon-wrap",children:s.jsx(Em,{id:f,size:22})}),s.jsxs("div",{className:"chapter-level-tag",children:[u.rank?`Nº ${String(u.rank).padStart(2,"0")} · `:"","Nivel ",u.level]})]}),s.jsx("h1",{className:"chapter-title",children:u.title}),u.subtitle&&s.jsx("p",{className:"chapter-subtitle",children:u.subtitle}),!z&&s.jsx(uc,{status:x[u.id],onChange:h=>w?.(u.id,h)}),s.jsx("div",{className:"chapter-rule"})]}),u.intro&&s.jsx("p",{className:"chapter-intro drop-cap",children:u.intro}),u.blocks.map((h,v)=>{switch(h.type){case"conjugation":return s.jsxs("section",{className:"block",children:[s.jsx("h2",{className:"block-heading",children:h.title}),s.jsx("div",{className:"conjugation-grid",children:h.verbs.map((j,T)=>s.jsxs("div",{className:"conjugation-card",children:[s.jsx("div",{className:"conjugation-verb",children:j.name}),s.jsx("ul",{className:"conjugation-list",children:j.forms.map((H,$)=>s.jsx("li",{children:H},$))})]},T))})]},v);case"examples":return s.jsxs("section",{className:"block",children:[s.jsx("h2",{className:"block-heading",children:h.title}),s.jsx("ul",{className:"examples-list",children:h.pairs.map((j,T)=>s.jsx("li",{className:"example-item",children:s.jsx(Ni,{es:j.es,en:j.en,esClass:"example-es",enClass:"example-en"})},T))})]},v);case"rule":return s.jsx("section",{className:"block",children:s.jsx("dl",{className:"rule-list",children:h.items.map((j,T)=>s.jsxs("div",{className:"rule-row",children:[s.jsx("dt",{children:j.label}),s.jsx("dd",{children:j.value})]},T))})},v);case"reading":return s.jsx("section",{className:"block reading-block",children:h.paragraphs.map((j,T)=>s.jsxs("p",{className:"reading-paragraph",children:[s.jsx($e,{text:j,className:"paragraph-speak"}),j]},T))},v);case"foldable-poems":return s.jsx(Og,{poems:h.poems},v);case"foldable-songs":return s.jsx(_g,{songs:h.songs},v);case"foldable-bios":return s.jsx(Hg,{bios:h.bios},v);case"foldable-grammar":return s.jsx(Gg,{lessons:h.lessons,chapterId:u.id,lessonStatuses:x,onLessonStatusChange:w},v);case"foldable-stories":return s.jsx(Bg,{stories:h.stories,chapterId:u.id,lessonStatuses:x,onLessonStatusChange:w},v);case"glossary":return s.jsxs("section",{className:"block",children:[s.jsxs("h2",{className:"block-heading",children:[s.jsx(as,{size:16,className:"inline-icon"})," Glosario"]}),s.jsx("div",{className:"glossary-grid",children:h.words.map((j,T)=>s.jsxs("div",{className:"glossary-row",children:[s.jsx("span",{className:"glossary-es",children:j.es}),s.jsx("span",{className:"glossary-dash",children:"—"}),s.jsx("span",{className:"glossary-en",children:j.en})]},T))})]},v);case"vocab":return s.jsx("section",{className:"block",children:s.jsx("div",{className:"vocab-grid",children:h.columns.map((j,T)=>s.jsxs("div",{className:"vocab-row",children:[s.jsx($e,{text:j.es}),s.jsx("span",{className:"vocab-es",children:j.es}),s.jsx("span",{className:"vocab-en",children:j.en})]},T))})},v);case"vocab-lab":return s.jsx(Xg,{onSaveWord:d,progress:c,onProgressChange:m},v);case"phraselist":return s.jsx("section",{className:"block",children:s.jsx("ul",{className:"phrase-list",children:h.phrases.map((j,T)=>s.jsxs("li",{className:"phrase-item",children:[s.jsx("span",{className:"phrase-num",children:String(T+1).padStart(2,"0")}),s.jsxs("div",{className:"phrase-content",children:[s.jsxs("p",{className:"phrase-es",children:[s.jsx($e,{text:j.es,className:"paragraph-speak"}),j.es]}),s.jsx("p",{className:"phrase-en",children:j.en})]})]},T))})},v);case"steps":return s.jsx("section",{className:"block",children:s.jsx("ol",{className:"steps-list",children:h.steps.map((j,T)=>s.jsxs("li",{className:"step-item",children:[s.jsx("div",{className:"step-num",children:T+1}),s.jsxs("div",{children:[s.jsx("h3",{className:"step-title",children:j.title}),s.jsx("p",{className:"step-text",children:j.text})]})]},T))})},v);case"big-takeaways":return s.jsx("section",{className:"block",children:s.jsx("div",{className:"big-takeaways",children:h.items.map((j,T)=>s.jsxs("div",{className:"big-takeaway-card",children:[s.jsx("div",{className:"big-takeaway-num",children:j.n}),s.jsx("h3",{className:"big-takeaway-title",children:j.title}),s.jsx("p",{className:"big-takeaway-text",children:j.text})]},T))})},v);case"tip":return s.jsxs("aside",{className:"block tip-block",children:[s.jsx(os,{size:18,className:"tip-icon"}),s.jsx("p",{children:h.text})]},v);case"takeaway":return s.jsxs("aside",{className:"block takeaway-block",children:[s.jsxs("div",{className:"takeaway-label",children:[s.jsx(rc,{size:14})," Lo que te llevas"]}),s.jsx("p",{children:h.text})]},v);case"verb-table":{const j=Object.fromEntries(h.tenses.map(H=>[H.name,H])),T=h.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return s.jsxs("section",{className:"block verb-table-block",children:[h.participles&&s.jsxs("div",{className:"participles",children:[s.jsx("div",{className:"participles-label",children:"Participios"}),s.jsxs("div",{className:"participles-rows",children:[s.jsxs("div",{className:"participles-row",children:[s.jsx("span",{className:"participles-key",children:"Presente"}),s.jsx("span",{className:"participles-val",children:s.jsx(Jn,{raw:h.participles.present})})]}),s.jsxs("div",{className:"participles-row",children:[s.jsx("span",{className:"participles-key",children:"Pasado"}),s.jsx("span",{className:"participles-val",children:s.jsx(Jn,{raw:h.participles.past})})]})]})]}),s.jsxs("div",{className:"verb-table-header",children:[s.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",s.jsxs("em",{children:['"',u.title.toLowerCase(),'"']})]}),s.jsx(Cg,{tenses:h.tenses,verbName:u.title})]}),s.jsx("div",{className:"tense-stack",children:T.map((H,$)=>{const Y=H.map(B=>j[B]).filter(Boolean);if(Y.length===0)return null;if(Y.length===1){const B=Y[0];return s.jsxs("div",{className:"tense-block",children:[s.jsxs("div",{className:"tense-name-row",children:[s.jsx("h3",{className:"tense-name",children:B.name}),s.jsx($e,{text:B.forms.map(J=>`${J.p} ${In(J.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),s.jsx("div",{className:"tense-rows",children:B.forms.map((J,Z)=>s.jsxs(nn.Fragment,{children:[s.jsx("span",{className:"tense-pronoun",children:J.p}),s.jsxs("span",{className:"tense-form",children:[s.jsx(Jn,{raw:J.f}),s.jsx($e,{text:In(J.f),className:"conjugation-speak"})]})]},Z))})]},$)}return s.jsxs("table",{className:"tense-group-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{"aria-hidden":"true"}),Y.map((B,J)=>s.jsx("th",{scope:"col",children:s.jsxs("div",{className:"tg-th-inner",children:[s.jsx("span",{children:B.name}),s.jsx($e,{text:B.forms.map(Z=>`${Z.p} ${In(Z.f)}`).join(". ")})]})},J))]})}),s.jsx("tbody",{children:Y[0].forms.map((B,J)=>s.jsxs("tr",{children:[s.jsx("th",{scope:"row",className:"tg-pronoun",children:Y[0].forms[J].p}),Y.map((Z,I)=>s.jsxs("td",{className:"tg-form",children:[s.jsx(Jn,{raw:Z.forms[J].f}),s.jsx($e,{text:In(Z.forms[J].f),className:"conjugation-speak"})]},I))]},J))})]},$)})}),s.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",s.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},v)}case"verb-uses":return s.jsxs("section",{className:"block verb-uses-block",children:[h.heading&&s.jsx("h2",{className:"verb-uses-heading",children:h.heading}),h.categories.map((j,T)=>s.jsxs("div",{className:"vu-category",children:[s.jsxs("div",{className:"vu-category-head",children:[s.jsx("div",{className:"vu-category-label",children:j.label}),j.note&&s.jsx("div",{className:"vu-category-note",children:j.note})]}),s.jsx("div",{className:"vu-senses",children:j.senses.map((H,$)=>s.jsxs("div",{className:"vu-sense",children:[s.jsx("div",{className:"vu-sense-num",children:H.n}),s.jsxs("div",{className:"vu-sense-body",children:[s.jsx("div",{className:"vu-sense-meaning",children:H.meaning}),H.subnote&&s.jsx("div",{className:"vu-sense-subnote",children:H.subnote}),s.jsx("ul",{className:"vu-examples",children:H.examples.map((Y,B)=>s.jsx("li",{children:s.jsx(Ni,{es:Y.es,en:Y.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},B))})]})]},$))})]},T))]},v);case"lesson-section":return s.jsxs("section",{className:"block lesson-section",children:[h.heading&&s.jsx("h2",{className:"lesson-heading",children:h.heading}),h.text&&s.jsx("p",{className:"lesson-text",children:h.text}),h.paragraphs&&h.paragraphs.map((j,T)=>s.jsx("p",{className:"lesson-text",children:j},T)),h.table&&s.jsx("div",{className:"lesson-table-wrap",children:s.jsxs("table",{className:"lesson-table",children:[h.table.headers&&s.jsx("thead",{children:s.jsx("tr",{children:h.table.headers.map((j,T)=>s.jsx("th",{children:j},T))})}),s.jsx("tbody",{children:h.table.rows.map((j,T)=>s.jsx("tr",{children:j.map((H,$)=>s.jsx("td",{children:$===0?H:s.jsx(Jn,{raw:String(H)})},$))},T))})]})}),h.examples&&s.jsx("ul",{className:"lesson-examples",children:h.examples.map((j,T)=>s.jsx("li",{children:s.jsx(Ni,{es:j.es,en:j.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},T))})]},v);default:return null}}),!z&&s.jsx(Am,{source:u,title:`Practica: ${u.title}`})]})}function Kg(u){return u.trim().replace(/[«»""''¡!¿?.,;:()[\]{}<>*_/\\—–\-]+/g,"").trim().toLowerCase()}async function _m(u){const f=[],d=encodeURIComponent(u),c=m=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(m):void 0;try{const m=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${d}&src=es&dst=en`,{signal:c(4e3)});if(m.ok){const x=await m.json();if(Array.isArray(x)&&x.length>0){const w=x[0],z=w?.translations?.[0]?.text?.trim();if(z){const h=(w.translations||[]).slice(1,5).map(j=>j.text?.trim()).filter(Boolean),v=[];for(const j of w.translations||[]){for(const T of j.examples||[])T.src&&T.dst&&v.length<2&&v.push({es:T.src,en:T.dst});if(v.length>=2)break}return{main:z,extras:h,pos:w.pos||w.translations?.[0]?.pos||"",examples:v,source:"Linguee"}}}}else f.push(`Linguee: HTTP ${m.status}`)}catch(m){f.push(`Linguee: ${m.message}`)}try{const m=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${d}&pretty=true`,{signal:c(4e3)});if(m.ok){const w=(await m.json())?.tuc||[],z=w.map(v=>v?.phrase?.text?.trim()).filter(Boolean),h=w.flatMap(v=>(v?.meanings||[]).map(j=>j?.text?.trim())).filter(Boolean);if(z.length>0){const v=z[0],j=z.slice(1,5).filter(T=>T.toLowerCase()!==v.toLowerCase());return{main:v,extras:j,pos:"",meanings:h.slice(0,3),source:"Glosbe"}}}else f.push(`Glosbe: HTTP ${m.status}`)}catch(m){f.push(`Glosbe: ${m.message}`)}try{const m=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${d}`,{signal:c(4e3)});if(m.ok){const x=await m.json();if(Array.isArray(x)&&x.length>0){const z=x[0]?.meanings?.[0],h=z?.definitions?.[0]?.definition?.trim();if(h)return{main:h,extras:[],pos:z?.partOfSpeech||"",source:"Diccionario",isDefinition:!0}}}else f.push(`FreeDict: HTTP ${m.status}`)}catch(m){f.push(`FreeDict: ${m.message}`)}try{const m=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${d}`,{signal:c(4e3)});if(m.ok){const w=(await m.json())?.sentences?.[0]?.trans?.trim();if(w&&w.toLowerCase()!==u.toLowerCase())return{main:w,extras:[],pos:"",source:"Google"}}}catch(m){f.push(`Google: ${m.message}`)}try{const m=await fetch(`https://api.mymemory.translated.net/get?q=${d}&langpair=es|en`,{signal:c(4e3)});if(m.ok){const w=(await m.json())?.responseData?.translatedText?.trim();if(w&&w.toLowerCase()!==u.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(w))return{main:w,extras:[],pos:"",source:"MyMemory"}}}catch(m){f.push(`MyMemory: ${m.message}`)}return f.length&&console.warn("Lookup failed for",u,f),null}function Jg({savedWords:u,onSave:f,onRemove:d}){const[c,m]=_.useState(null),x=nn.useRef(null),w=Kg,z=_m,[h,v]=_.useState(null);if(_.useEffect(()=>{let Z="";async function I(ne,te,K){v(null),m({word:ne,x:te,y:K,loading:!0,result:null,error:!1});try{const Q=await z(ne);m(ee=>ee&&ee.word===ne?{...ee,loading:!1,result:Q,error:!Q}:ee)}catch{m(ee=>ee&&ee.word===ne?{...ee,loading:!1,error:!0}:ee)}}function P(){clearTimeout(P._t),P._t=setTimeout(()=>{const ne=window.getSelection(),te=ne?.toString()||"",K=w(te);if(!K||K.length<2||K.split(/\s+/).length>3){Z&&v(null),Z="";return}if(K===Z)return;Z=K;let Q=window.innerWidth/2,ee=120;try{const D=ne.getRangeAt(0).getBoundingClientRect();Q=D.left+D.width/2,ee=D.top-6}catch{}const Ue=96;Q=Math.max(Ue/2+8,Math.min(Q,window.innerWidth-Ue/2-8)),ee<50&&(ee=50),v({word:K,x:Q,y:ee})},200)}function xe(ne){const te=x.current&&x.current.contains(ne.target),K=ne.target.closest&&ne.target.closest(".dict-floating-btn");!te&&!K&&(m(null),v(null),Z="")}return window.__bookOpenPopup=I,document.addEventListener("selectionchange",P),document.addEventListener("pointerdown",xe),()=>{document.removeEventListener("selectionchange",P),document.removeEventListener("pointerdown",xe),delete window.__bookOpenPopup}},[]),!c&&!h)return null;if(!c&&h)return s.jsxs("button",{className:"dict-floating-btn",style:{left:h.x,top:h.y+window.scrollY},onClick:Z=>{Z.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(h.word,h.x,h.y+50)},onPointerDown:Z=>Z.stopPropagation(),children:[s.jsx(as,{size:14}),s.jsx("span",{children:"Traducir"})]});const j=290,T=Math.max(j/2+8,Math.min(c.x,window.innerWidth-j/2-8)),H=c.y+220>window.innerHeight,$=H?"auto":c.y+window.scrollY,Y=H?window.innerHeight-c.y-window.scrollY+12:"auto",B=u.some(Z=>Z.word===c.word);function J(){B?d(c.word):f({word:c.word,translation:c.result?.main||"",pos:c.result?.pos||"",extras:c.result?.extras||[],savedAt:Date.now()})}return s.jsxs("div",{ref:x,className:"dict-popup",style:{left:T,top:$==="auto"?"auto":$,bottom:Y==="auto"?"auto":Y},children:[s.jsxs("div",{className:"dict-header",children:[s.jsx("span",{className:"dict-word",children:c.word}),s.jsx("button",{className:"dict-close-btn",onClick:()=>m(null),"aria-label":"Close",children:s.jsx(on,{size:14})})]}),s.jsxs("div",{className:"dict-body",children:[c.loading&&s.jsxs("div",{className:"dict-loading",children:[s.jsx("span",{className:"dict-spinner"}),s.jsx("span",{children:"Looking up…"})]}),!c.loading&&c.error&&s.jsxs("div",{className:"dict-fallback",children:[s.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),s.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(as,{size:14}),'Buscar "',c.word,'" en SpanishDict']})]}),!c.loading&&c.result&&s.jsxs(s.Fragment,{children:[c.result.pos&&s.jsx("div",{className:"dict-pos",children:c.result.pos}),s.jsx("div",{className:`dict-main-translation ${c.result.isDefinition?"is-definition":""}`,children:c.result.main}),c.result.extras?.length>0&&s.jsx("div",{className:"dict-extras",children:c.result.extras.map((Z,I)=>s.jsx("span",{className:"dict-extra-tag",children:Z},I))}),c.result.meanings?.length>0&&s.jsx("ul",{className:"dict-meanings",children:c.result.meanings.map((Z,I)=>s.jsx("li",{className:"dict-meaning-item",children:Z},I))}),c.result.examples?.length>0&&s.jsxs("div",{className:"dict-examples",children:[s.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),c.result.examples.map((Z,I)=>s.jsxs("div",{className:"dict-example",children:[s.jsx("div",{className:"dict-example-es",children:Z.es}),s.jsx("div",{className:"dict-example-en",children:Z.en})]},I))]})]})]}),!c.loading&&s.jsxs("button",{className:`dict-save-btn ${B?"saved":""}`,onClick:J,"aria-label":B?"Remove from Memoria":"Save to Memoria",children:[s.jsx(Fn,{size:14,className:B?"filled":""}),B?"Guardado en Memoria ✓":c.result?"Guardar en Memoria":"Guardar palabra"]}),s.jsxs("div",{className:"dict-footer",children:[s.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(as,{size:12}),"Ver en SpanishDict"]}),s.jsx("span",{className:"dict-source",children:c.result?.source||"Dict"})]})]})}function es(u){const f=new Set(u.tags||[]);return u.pending&&f.add("pending"),u.translation||f.add("needs-translation"),u.favorite&&f.add("favorite"),u.difficult&&f.add("difficult"),u.review?.mastered&&f.add("mastered"),u.review?.seen&&(u.review?.dueAt||0)<=Date.now()&&f.add("due"),/Group 1|cognates|near-cognates/i.test(u.pos||"")&&f.add("cognates"),/Group 2|function/i.test(u.pos||"")&&f.add("function-words"),/Group 3|remaining/i.test(u.pos||"")&&f.add("remaining"),[...f]}function Hm(u,f=Date.now()){return{due:u.filter(d=>d.review?.seen&&(d.review?.dueAt||0)<=f).length,mastered:u.filter(d=>d.review?.mastered).length,difficult:u.filter(d=>d.difficult||d.review?.lastRating==="Hard").length,favorite:u.filter(d=>d.favorite).length}}function Ig(u){const f=["Spanish","English","Tags","Notes"],d=u.map(z=>[z.word,z.translation||"",es(z).join(" | "),[...z.extras||[],z.pos||""].filter(Boolean).join(" | ")]),c=[f,...d].map(z=>z.map(h=>`"${String(h).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([c],{type:"text/csv;charset=utf-8"}),x=URL.createObjectURL(m),w=document.createElement("a");w.href=x,w.download="memoria-spanish.csv",w.click(),URL.revokeObjectURL(x)}function Wg({savedWords:u,onRemove:f,onClear:d,onUpdateWord:c}){const[m,x]=_.useState({}),[w,z]=_.useState("grid"),[h,v]=_.useState(""),[j,T]=_.useState("ALL"),[H,$]=_.useState(0),[Y,B]=_.useState(!1),[J,Z]=_.useState("");function I(D){x(pe=>({...pe,[D]:!pe[D]}))}const P=[...u].sort((D,pe)=>{const we=D.review?.seen&&(D.review?.dueAt||0)<=Date.now(),be=pe.review?.seen&&(pe.review?.dueAt||0)<=Date.now();return we!==be?we?-1:1:pe.savedAt-D.savedAt}),xe=_.useMemo(()=>{const D=new Set;for(const pe of P)es(pe).forEach(we=>D.add(we));return[...D].sort()},[P]),ne=_.useMemo(()=>{const D=h.trim().toLowerCase();return P.filter(pe=>{const we=es(pe),be=j==="ALL"||we.includes(j),N=!D||pe.word.toLowerCase().includes(D)||(pe.translation||"").toLowerCase().includes(D)||we.some(G=>G.toLowerCase().includes(D));return be&&N})},[P,h,j]),te=ne[H%Math.max(1,ne.length)],K=_.useMemo(()=>Hm(P),[P]);_.useEffect(()=>{$(0),B(!1)},[h,j,u.length]);function Q(D){const pe=J.trim().toLowerCase().replace(/\s+/g,"-");if(!pe)return;const we=u.find(N=>N.word===D),be=Array.from(new Set([...we?.tags||[],pe]));c?.(D,{tags:be}),Z("")}function ee(D,pe){const we=u.find(be=>be.word===D);c?.(D,{[pe]:!we?.[pe]})}function Ue(D,pe){const we=u.find(N=>N.word===D),be=Om(we?.review,pe);c?.(D,{review:be,difficult:pe==="hard"?!0:we?.difficult}),Ge()}function Ge(){$(D=>(D+1)%Math.max(1,ne.length)),B(!1)}return P.length===0?s.jsxs("div",{className:"memoria-empty",children:[s.jsx(Fn,{size:36,className:"memoria-empty-icon"}),s.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),s.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",s.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):s.jsxs("article",{className:"chapter-body memoria-view",children:[s.jsxs("header",{className:"chapter-header",children:[s.jsx("div",{className:"chapter-meta",children:s.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),s.jsx("h1",{className:"chapter-title",children:"Memoria"}),s.jsxs("p",{className:"chapter-subtitle",children:[P.length," ",P.length===1?"palabra guardada":"palabras guardadas"]}),s.jsx("p",{className:"chapter-intro",children:w==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),s.jsxs("div",{className:"memoria-summary-strip",children:[s.jsxs("span",{children:[s.jsx(ic,{size:13})," ",K.due," due"]}),s.jsxs("span",{children:[s.jsx(ki,{size:13})," ",K.favorite," favoritas"]}),s.jsxs("span",{children:[s.jsx(Si,{size:13})," ",K.difficult," dificiles"]}),s.jsxs("span",{children:[s.jsx(sc,{size:13})," ",K.mastered," dominadas"]})]}),s.jsxs("div",{className:"memoria-view-toggle",children:[s.jsx("button",{className:`memoria-view-btn ${w==="grid"?"active":""}`,onClick:()=>z("grid"),children:"Tarjetas"}),s.jsx("button",{className:`memoria-view-btn ${w==="list"?"active":""}`,onClick:()=>z("list"),children:"Lista"}),s.jsx("button",{className:`memoria-view-btn ${w==="review"?"active":""}`,onClick:()=>z("review"),children:"Repaso"})]}),s.jsxs("div",{className:"memoria-tools",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Buscar"}),s.jsx("input",{value:h,onChange:D=>v(D.target.value),placeholder:"palabra, translation, tag..."})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Etiqueta"}),s.jsxs("select",{value:j,onChange:D=>T(D.target.value),children:[s.jsx("option",{value:"ALL",children:"Todas"}),xe.map(D=>s.jsx("option",{value:D,children:D},D))]})]}),s.jsx("button",{className:"memoria-tool-btn",onClick:()=>Ig(ne),children:"Export CSV"})]}),w==="review"?s.jsx("div",{className:"memoria-review",children:te?s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:`memoria-review-card ${Y?"flipped":""}`,onClick:()=>B(D=>!D),children:[s.jsx("span",{className:"memoria-review-count",children:ne.length?`${H+1} / ${ne.length}`:"0 / 0"}),s.jsx("strong",{children:Y?te.translation||"Sin traduccion":te.word}),s.jsx("em",{children:Y?te.word:"toca para revelar"})]}),s.jsxs("div",{className:"memoria-review-actions",children:[s.jsx($e,{text:te.word,size:"md"}),s.jsx("input",{value:J,onChange:D=>Z(D.target.value),placeholder:"add-tag"}),s.jsx("button",{onClick:()=>Q(te.word),children:"Tag"}),s.jsxs("button",{onClick:()=>ee(te.word,"favorite"),children:[s.jsx(ki,{size:13}),te.favorite?"Unfavorite":"Favorite"]}),s.jsxs("button",{onClick:()=>ee(te.word,"difficult"),children:[s.jsx(Si,{size:13}),te.difficult?"Not hard":"Difficult"]}),s.jsx("button",{onClick:Ge,children:"Siguiente"})]}),s.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(D=>s.jsx("button",{onClick:()=>Ue(te.word,D),children:D==="again"?"Again":D==="hard"?"Hard":D==="good"?"Good":"Easy"},D))})]}):s.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):w==="grid"?s.jsx("div",{className:"memoria-grid",children:ne.map(D=>{const pe=m[D.word],we=D.pending,be=es(D);return s.jsxs("div",{className:`memoria-card ${pe?"flipped":""}`,onClick:()=>I(D.word),children:[s.jsxs("div",{className:"memoria-card-inner",children:[s.jsxs("div",{className:"memoria-face front",children:[s.jsx("div",{className:"memoria-word",children:D.word}),D.pos&&s.jsx("div",{className:"memoria-pos",children:D.pos}),D.translation?s.jsx("div",{className:"memoria-front-translation",children:D.translation}):we?s.jsxs("div",{className:"memoria-front-pending",children:[s.jsx("span",{className:"dict-spinner"}),s.jsx("span",{children:"traduciendo…"})]}):s.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),be.length>0&&s.jsx("div",{className:"memoria-tags",children:be.slice(0,3).map(N=>s.jsx("span",{children:N},N))}),s.jsxs("div",{className:"memoria-label-actions",children:[s.jsx("button",{className:D.favorite?"active":"",onClick:N=>{N.stopPropagation(),ee(D.word,"favorite")},"aria-label":"Toggle favorite",children:s.jsx(ki,{size:12})}),s.jsx("button",{className:D.difficult?"active hard":"",onClick:N=>{N.stopPropagation(),ee(D.word,"difficult")},"aria-label":"Toggle difficult",children:s.jsx(Si,{size:12})})]})]}),s.jsxs("div",{className:"memoria-face back",children:[D.translation?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"memoria-translation",children:D.translation}),D.extras?.length>0&&s.jsx("div",{className:"memoria-extras",children:D.extras.slice(0,3).map((N,G)=>s.jsx("span",{className:"memoria-extra-tag",children:N},G))})]}):s.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),s.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(D.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:N=>N.stopPropagation(),children:"SpanishDict →"})]})]}),s.jsx("button",{className:"memoria-remove",onClick:N=>{N.stopPropagation(),f(D.word)},"aria-label":`Remove ${D.word}`,children:s.jsx(on,{size:13})})]},D.word)})}):s.jsx("div",{className:"memoria-list",children:ne.map(D=>{const pe=D.pending,we=es(D);return s.jsxs("div",{className:"memoria-list-row",children:[s.jsxs("div",{className:"memoria-list-main",children:[s.jsxs("div",{className:"memoria-list-es",children:[s.jsx("span",{className:"memoria-list-word",children:D.word}),D.pos&&s.jsx("span",{className:"memoria-list-pos",children:D.pos})]}),D.translation?s.jsx("div",{className:"memoria-list-en",children:D.translation}):pe?s.jsxs("div",{className:"memoria-list-en pending",children:[s.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):s.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),D.extras?.length>0&&s.jsx("div",{className:"memoria-list-extras",children:D.extras.slice(0,4).map((be,N)=>s.jsx("span",{className:"memoria-list-extra-tag",children:be},N))}),we.length>0&&s.jsx("div",{className:"memoria-list-extras",children:we.map(be=>s.jsx("span",{className:"memoria-list-extra-tag",children:be},be))})]}),s.jsxs("div",{className:"memoria-list-actions",children:[s.jsx("button",{className:`memoria-list-remove ${D.favorite?"active-label":""}`,onClick:()=>ee(D.word,"favorite"),"aria-label":"Toggle favorite",children:s.jsx(ki,{size:14})}),s.jsx("button",{className:`memoria-list-remove ${D.difficult?"active-hard":""}`,onClick:()=>ee(D.word,"difficult"),"aria-label":"Toggle difficult",children:s.jsx(Si,{size:14})}),s.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(D.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:s.jsx(as,{size:14})}),s.jsx("button",{className:"memoria-list-remove",onClick:()=>f(D.word),"aria-label":`Remove ${D.word}`,children:s.jsx(on,{size:14})})]})]},D.word)})}),P.length>0&&s.jsx("div",{className:"memoria-actions",children:s.jsx("button",{className:"memoria-clear-btn",onClick:d,children:"Borrar todo"})})]})}function $g(u){const f=[u.title,u.heading,u.text];for(const d of u.paragraphs||[])f.push(d);for(const d of u.pairs||[])f.push(d.es,d.en);for(const d of u.columns||[])f.push(d.es,d.en);for(const d of u.phrases||[])f.push(d.es,d.en);for(const d of u.words||[])f.push(d.es,d.en);for(const d of u.lessons||[]){f.push(d.title,d.subtitle,d.intro);for(const c of d.sections||[]){f.push(c.heading,c.text,c.tip,c.takeaway);for(const m of c.examples||[])f.push(m.es,m.en)}}for(const d of u.stories||[])f.push(d.title,...d.paragraphs||[]);for(const d of u.poems||[])f.push(d.title,d.attribution,d.note);for(const d of u.songs||[])f.push(d.title,d.attribution,d.note);return f.filter(Boolean).join(" ")}function Fg(u,f,d){const c=pt(u);if(c.length<2)return[];const m=[];for(const x of f)pt([x.title,x.subtitle,x.intro,x.sectionLabel,x.level,...(x.blocks||[]).map($g)].filter(Boolean).join(" ")).includes(c)&&m.push({type:"chapter",title:x.title,meta:`${x.sectionLabel} - ${x.level}`,chapter:x});for(const x of d)pt([x.word,x.translation,x.pos,...x.tags||[]].join(" ")).includes(c)&&m.push({type:"memoria",title:x.word,meta:x.translation||"Memoria"});return m.slice(0,12)}function Pg({savedWords:u,chapters:f,onCountChange:d}){const[c,m]=_.useState([]),[x,w]=_.useState(0),[z,h]=_.useState("");_.useEffect(()=>{(async()=>{try{const Y=await window.storage.get(ac);Y?.value&&m(JSON.parse(Y.value))}catch{}})()},[]);async function v(Y){m(Y),d?.(Y.length);try{await window.storage.set(ac,JSON.stringify(Y))}catch{}}const j=_.useMemo(()=>{const Y=u.slice(0,8).map(J=>({label:`Usa "${J.word}"`,text:`Write 2 Spanish sentences using "${J.word}".`,target:J.word})),B=f.slice(0,6).map(J=>({label:J.title,text:`Write a short Spanish paragraph about "${J.title}".`,target:J.title}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:"today"},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:"question"},...Y,...B]},[u,f]),T=j[x]||j[0],H=_.useMemo(()=>{const Y=z.trim()?z.trim().split(/\s+/).length:0,B=(z.match(/[.!?]/g)||[]).length,J=(z.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,Z=(z.match(/\b(yo|tu|el|ella|nosotros|porque|para|con|sin|que|de|la|el|los|las|un|una|estoy|tengo|quiero|puedo)\b/gi)||[]).length,I=T?.target&&pt(z).includes(pt(T.target)),P=[];return Y<20&&P.push("Add more detail."),B<2&&P.push("Use at least two complete sentences."),!I&&T?.target&&P.push("Use the prompt word or idea."),J===0&&P.push("Check accents when needed."),{words:Y,sentences:B,accents:J,commonSpanish:Z,targetUsed:I,tips:P}},[z,T]);function $(){if(!z.trim())return;const Y=[{id:`${Date.now()}`,prompt:T.text,text:z.trim(),feedback:H,createdAt:Date.now()},...c].slice(0,40);v(Y),h("")}return s.jsxs("article",{className:"chapter-body writing-view",children:[s.jsxs("header",{className:"chapter-header",children:[s.jsxs("div",{className:"chapter-icon-row",children:[s.jsx("div",{className:"chapter-icon-wrap",children:s.jsx(Nm,{size:22})}),s.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),s.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),s.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),s.jsx("div",{className:"chapter-rule"})]}),s.jsxs("section",{className:"writing-board",children:[s.jsxs("div",{className:"writing-prompt-row",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Prompt"}),s.jsx("select",{value:x,onChange:Y=>w(Number(Y.target.value)),children:j.map((Y,B)=>s.jsx("option",{value:B,children:Y.label},`${Y.label}-${B}`))})]}),s.jsx("p",{children:T.text})]}),s.jsx("textarea",{value:z,onChange:Y=>h(Y.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),s.jsxs("div",{className:"writing-feedback-grid",children:[s.jsxs("span",{children:[s.jsx("strong",{children:H.words})," words"]}),s.jsxs("span",{children:[s.jsx("strong",{children:H.sentences})," sentences"]}),s.jsxs("span",{children:[s.jsx("strong",{children:H.accents})," accents"]}),s.jsxs("span",{children:[s.jsx("strong",{children:H.commonSpanish})," Spanish signals"]})]}),s.jsx("div",{className:"writing-tips",children:H.tips.length?H.tips.map(Y=>s.jsx("span",{children:Y},Y)):s.jsx("span",{children:"Good shape. Read it out loud once."})}),s.jsxs("div",{className:"writing-actions",children:[s.jsx($e,{text:z,size:"md"}),s.jsx("button",{onClick:$,disabled:!z.trim(),children:"Save practice"})]})]}),s.jsxs("section",{className:"writing-history",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(rc,{size:18})," History"]}),c.length?c.map(Y=>s.jsxs("article",{className:"writing-entry",children:[s.jsxs("div",{className:"writing-entry-meta",children:[new Date(Y.createdAt).toLocaleDateString()," - ",Y.feedback.words," words"]}),s.jsx("p",{children:Y.prompt}),s.jsx("blockquote",{children:Y.text})]},Y.id)):s.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function eb({totalChapters:u,visitedCount:f,savedWordsCount:d,levelFilter:c,palabrasSummary:m,lessonSummary:x,memoriaSummary:w,writingCount:z,sectionProgress:h,recommendations:v,onStart:j,onOpenMemoria:T,onOpenPalabras:H,onOpenVerb:$,onOpenReading:Y,onOpenWriting:B,onSelectChapter:J}){const Z=u?Math.round(f/u*100):0;return s.jsxs("article",{className:"chapter-body home-dashboard",children:[s.jsxs("header",{className:"home-hero",children:[s.jsxs("div",{className:"home-kicker",children:[s.jsx(Sm,{size:18}),"Plan de estudio"]}),s.jsx("h1",{className:"home-title",children:"Learn Spanish"}),s.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),s.jsxs("div",{className:"home-actions",children:[s.jsxs("button",{className:"home-primary",onClick:j,children:["Empezar",s.jsx(ts,{size:16})]}),s.jsxs("button",{className:"home-secondary",onClick:T,children:[s.jsx(Fn,{size:15}),"Memoria"]})]})]}),s.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Progreso"}),s.jsxs("strong",{children:[Z,"%"]}),s.jsxs("span",{children:[f," / ",u," capitulos"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Nivel"}),s.jsx("strong",{children:c==="ALL"?"Todo":c}),s.jsx("span",{children:"Filtro activo"})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Memoria"}),s.jsx("strong",{children:d}),s.jsxs("span",{children:[w.difficult," dificiles"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Palabras due"}),s.jsx("strong",{children:m.due}),s.jsxs("span",{children:[m.mastered," dominadas"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Lecciones"}),s.jsx("strong",{children:x.understood}),s.jsxs("span",{children:[x.read," leidas"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Writing"}),s.jsx("strong",{children:z}),s.jsx("span",{children:"entradas"})]})]}),s.jsxs("section",{className:"home-daily",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(ec,{size:18}),"Ruta diaria"]}),s.jsxs("div",{className:"home-daily-grid",children:[s.jsxs("button",{onClick:H,children:[s.jsx("span",{children:"01"}),s.jsx("strong",{children:"10 palabras"}),s.jsx("em",{children:m.due?`${m.due} vencidas`:`${m.seen} vistas`})]}),s.jsxs("button",{onClick:Y,children:[s.jsx("span",{children:"02"}),s.jsx("strong",{children:"Lectura con audio"}),s.jsx("em",{children:"lee y escucha una pagina"})]}),s.jsxs("button",{onClick:$,children:[s.jsx("span",{children:"03"}),s.jsx("strong",{children:"Un verbo"}),s.jsx("em",{children:"tabla, voz, repeticion"})]}),s.jsxs("button",{onClick:T,children:[s.jsx("span",{children:"04"}),s.jsx("strong",{children:"Memoria"}),s.jsxs("em",{children:[d," guardadas"]})]}),s.jsxs("button",{onClick:B,children:[s.jsx("span",{children:"05"}),s.jsx("strong",{children:"Writing"}),s.jsx("em",{children:"sentence practice"})]})]})]}),s.jsxs("section",{className:"home-progress-map",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(lc,{size:18}),"Mapa de progreso"]}),s.jsx("div",{className:"home-progress-list",children:h.map(I=>{const P=I.total?Math.round(I.visited/I.total*100):0;return s.jsxs("div",{className:"home-progress-row",children:[s.jsxs("div",{className:"home-progress-top",children:[s.jsx("span",{children:I.label}),s.jsxs("strong",{children:[I.visited," / ",I.total]})]}),s.jsx("div",{className:"home-progress-track",children:s.jsx("span",{style:{width:`${P}%`}})})]},I.id)})})]}),s.jsxs("section",{className:"home-path",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(ic,{size:18}),"Siguiente lectura"]}),s.jsx("div",{className:"home-recommendations",children:v.map((I,P)=>s.jsxs("button",{className:"home-rec",onClick:()=>J(I),children:[s.jsx("span",{className:"home-rec-index",children:String(P+1).padStart(2,"0")}),s.jsxs("span",{className:"home-rec-main",children:[s.jsx("span",{className:"home-rec-title",children:I.title}),s.jsxs("span",{className:"home-rec-meta",children:[I.sectionLabel," - ",I.level]})]}),s.jsx(ts,{size:16})]},I.id))})]})]})}function ab(){const[u,f]=_.useState("tiempos"),[d,c]=_.useState("tiempos"),[m,x]=_.useState("ALL"),[w,z]=_.useState(!1),[h,v]=_.useState(!1),[j,T]=_.useState(!0),[H,$]=_.useState(!1),[Y,B]=_.useState(""),[J,Z]=_.useState({rate:.85,voiceURI:""}),[I,P]=_.useState(0),[xe,ne]=_.useState(1),[te,K]=_.useState(null),[Q,ee]=_.useState([]),[Ue,Ge]=_.useState([]),[D,pe]=_.useState({}),[we,be]=_.useState({});_.useEffect(()=>{(async()=>{try{const E=await window.storage.get("memoria-words");E?.value&&ee(JSON.parse(E.value))}catch{}try{const E=await window.storage.get("font-scale");if(E?.value){const R=parseFloat(E.value);R>=.85&&R<=1.3&&ne(R)}}catch{}try{const E=await window.storage.get("last-read");if(E?.value){const R=JSON.parse(E.value);R?.chapterId&&R.chapterId!=="tiempos"&&K(R)}}catch{}try{const E=await window.storage.get("visited-chapters");E?.value&&Ge(JSON.parse(E.value))}catch{}try{const E=await window.storage.get(jm);E?.value&&pe(JSON.parse(E.value))}catch{}try{const E=await window.storage.get(vm);E?.value&&be(JSON.parse(E.value))}catch{}try{const E=await window.storage.get(xm);if(E?.value){const R=JSON.parse(E.value);Z(R),Ei(R)}}catch{}try{const E=await window.storage.get(ac);E?.value&&P(JSON.parse(E.value).length||0)}catch{}})()},[]),_.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(xe));try{window.storage.set("font-scale",String(xe))}catch{}},[xe]);function N(E){ne(R=>Math.max(.85,Math.min(1.3,+(R+E).toFixed(2))))}async function G(E){try{await window.storage.set("memoria-words",JSON.stringify(E))}catch{}}async function W(E){try{await window.storage.set(jm,JSON.stringify(E))}catch{}}async function ce(E){try{await window.storage.set(vm,JSON.stringify(E))}catch{}}function me(E){pe(E),W(E)}function g(E,R){be(ve=>{const qe={...ve};return R?qe[E]=R:delete qe[E],ce(qe),qe})}function M(E){Z(E),Ei(E);try{window.storage.set(xm,JSON.stringify(E))}catch{}}async function V(E){ee(ve=>{const qe=ve.map(he=>he.word===E?{...he,pending:!0}:he);return G(qe),qe});const R=await _m(E);ee(ve=>{const qe=ve.map(he=>he.word!==E?he:R?{...he,translation:R.main,pos:R.pos||he.pos||"",extras:R.extras||[],pending:!1,translatedAt:Date.now()}:{...he,pending:!1});return G(qe),qe})}function X(E){ee(R=>{if(R.some(qe=>qe.word===E.word))return R;const ve=[E,...R];return G(ve),ve}),E.translation||V(E.word)}function le(E){ee(R=>{const ve=R.filter(qe=>qe.word!==E);return G(ve),ve})}function fe(E,R){ee(ve=>{const qe=ve.map(he=>he.word===E?{...he,...R}:he);return G(qe),qe})}function O(){ee([]),G([])}_.useEffect(()=>{if(Q.length===0)return;const E=Q.filter(R=>!R.translation&&!R.pending);E.length!==0&&E.slice(0,5).forEach((R,ve)=>{setTimeout(()=>V(R.word),ve*800)})},[Q.length]);const[ye,ue]=_.useState(()=>{const E={};for(const R of Fo)E[R.id]=!(R.id==="verbos"||R.id==="verbos2");return E}),se=_.useMemo(()=>{const E=[];for(const R of Fo)for(const ve of R.chapters)(ve.alwaysVisible||m==="ALL"||ve.level===m)&&E.push({...ve,sectionId:R.id,sectionLabel:R.label});return E},[m]);_.useEffect(()=>{se.find(E=>E.id===d)||se.length&&(c(se[0].id),f(se[0].sectionId))},[se,d]),_.useEffect(()=>{const E=se.find(R=>R.id===d);E&&ue(R=>R[E.sectionId]?R:{...R,[E.sectionId]:!0})},[d,se]);const Fe=_.useMemo(()=>se.find(E=>E.id===d),[se,d]),Pe=se.findIndex(E=>E.id===d),sn=Pe>0?se[Pe-1]:null,_a=Pe>=0&&Pe<se.length-1?se[Pe+1]:null,Ra=_.useMemo(()=>new Set(Ue),[Ue]),ln=_.useMemo(()=>se.filter(E=>Ra.has(E.id)).length,[se,Ra]),ss=_.useMemo(()=>{const E=se.filter(R=>!Ra.has(R.id));return(E.length?E:se).slice(0,4)},[se,Ra]),eo=_.useMemo(()=>Fg(Y,se,Q),[Y,se,Q]),ao=_.useMemo(()=>{const E=Object.values(we||{});return{read:E.filter(R=>R==="read"||R==="understood").length,understood:E.filter(R=>R==="understood").length}},[we]),to=_.useMemo(()=>Hm(Q),[Q]),rn=ss[0]||se[0],Ci=_.useMemo(()=>{const E=Object.values(D||{}),R=Date.now();return{seen:E.filter(ve=>ve?.seen).length,due:E.filter(ve=>ve?.seen&&(ve.dueAt||0)<=R).length,mastered:E.filter(ve=>ve?.mastered).length}},[D]),Mi=_.useMemo(()=>Fo.map(E=>{const R=E.chapters.filter(qe=>qe.alwaysVisible||m==="ALL"||qe.level===m),ve=R.filter(qe=>Ra.has(qe.id)).length;return{id:E.id,label:E.label,total:R.length,visited:ve}}).filter(E=>E.total>0),[m,Ra]),ca=se.find(E=>E.id==="palabras-5000"),is=se.find(E=>E.sectionId==="verbos")||se.find(E=>E.sectionId==="verbos2"),no=se.find(E=>E.sectionId==="lectura");function xa(E){c(E.id),f(E.sectionId||E.sectionId),v(!1),$(!1),T(!1),z(!1),K(null),Ge(R=>{if(R.includes(E.id))return R;const ve=[...R,E.id];try{window.storage.set("visited-chapters",JSON.stringify(ve))}catch{}return ve});try{window.storage.set("last-read",JSON.stringify({sectionId:E.sectionId,chapterId:E.id,title:E.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const R=document.querySelector(".book-main");R&&R.scrollTo({top:0,behavior:"smooth"})}}function cn(){if(!te)return;const E=Fo.find(ve=>ve.id===te.sectionId),R=E?.chapters.find(ve=>ve.id===te.chapterId);R&&xa({...R,sectionId:E.id}),K(null)}function Ui(){K(null)}return s.jsxs("div",{className:"book-root",children:[s.jsx(Jg,{savedWords:Q,onSave:X,onRemove:le}),s.jsx("style",{children:tb}),s.jsxs("div",{className:"mobile-bar",children:[s.jsx("button",{className:"mobile-btn",onClick:()=>z(!0),"aria-label":"Open menu",children:s.jsx(kg,{size:20})}),s.jsx("div",{className:"mobile-title",children:s.jsx("span",{className:"mobile-brand-script",children:"Español"})}),s.jsxs("div",{className:"font-controls",children:[s.jsx("button",{className:"font-btn",onClick:()=>N(-.05),"aria-label":"Smaller text",disabled:xe<=.85,children:s.jsx("span",{className:"font-btn-small",children:"A"})}),s.jsx("button",{className:"font-btn",onClick:()=>N(.05),"aria-label":"Larger text",disabled:xe>=1.3,children:s.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),te&&s.jsxs("div",{className:"resume-banner",children:[s.jsxs("div",{className:"resume-banner-text",children:[s.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),s.jsx("span",{className:"resume-banner-title",children:te.title})]}),s.jsxs("div",{className:"resume-banner-actions",children:[s.jsxs("button",{className:"resume-btn-primary",onClick:cn,children:["Continuar",s.jsx(ts,{size:14})]}),s.jsx("button",{className:"resume-btn-dismiss",onClick:Ui,"aria-label":"Dismiss",children:s.jsx(on,{size:14})})]})]}),s.jsxs("div",{className:"book-shell",children:[s.jsxs("aside",{className:`sidebar ${w?"open":""}`,children:[s.jsxs("div",{className:"sidebar-inner",children:[s.jsxs("div",{className:"brand",children:[s.jsx("div",{className:"brand-mark",children:s.jsx(oc,{size:18})}),s.jsxs("div",{className:"brand-text",children:[s.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),s.jsx("div",{className:"brand-title",children:"Español"})]}),s.jsx("button",{className:"sidebar-close",onClick:()=>z(!1),"aria-label":"Close menu",children:s.jsx(on,{size:18})})]}),s.jsxs("div",{className:"global-search",children:[s.jsxs("label",{children:[s.jsx(Ng,{size:14}),s.jsx("input",{value:Y,onChange:E=>B(E.target.value),placeholder:"Search everything..."})]}),Y.trim().length>=2&&s.jsx("div",{className:"global-search-results",children:eo.length?eo.map((E,R)=>s.jsxs("button",{onClick:()=>{E.type==="memoria"?(T(!1),$(!1),v(!0)):xa(E.chapter),B(""),z(!1)},children:[s.jsx("span",{children:E.title}),s.jsx("em",{children:E.meta})]},`${E.type}-${E.title}-${R}`)):s.jsx("div",{className:"global-search-empty",children:"No matches"})})]}),s.jsxs("nav",{className:"section-nav",children:[s.jsx("div",{className:`section-group home-nav-item ${j?"active":""}`,children:s.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{T(!0),v(!1),$(!1),z(!1)},children:[s.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:s.jsx(lc,{size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:"Inicio"}),s.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),s.jsx("div",{className:"section-meta",children:s.jsx("div",{className:"section-count",children:Ue.length})})]})}),Fo.map(E=>{const R=E.chapters.filter(he=>he.alwaysVisible||m==="ALL"||he.level===m),ve=E.id===u&&!h&&!j,qe=ye[E.id];return s.jsxs("div",{className:`section-group ${ve?"active":""} ${qe?"expanded":"collapsed"}`,children:[s.jsxs("button",{className:"section-btn",onClick:()=>{ue(he=>({...he,[E.id]:!he[E.id]}))},"aria-expanded":qe,children:[s.jsx("div",{className:"section-icon-wrap",children:s.jsx(Em,{id:E.id,size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:E.label}),s.jsx("div",{className:"section-sublabel",children:E.sublabel})]}),s.jsxs("div",{className:"section-meta",children:[s.jsx("div",{className:"section-count",children:R.length}),s.jsx(Pn,{size:16,className:`section-chevron ${qe?"open":""}`})]})]}),qe&&R.length>0&&s.jsx("ul",{className:"chapter-list",children:R.map(he=>{const na=he.blocks?.some(ls=>ls.type==="foldable-grammar"||ls.type==="foldable-stories")?null:we[he.id];return s.jsx("li",{children:s.jsxs("button",{className:`chapter-btn ${d===he.id&&!h&&!j?"active":""}`,onClick:()=>{v(!1),xa({...he,sectionId:E.id})},children:[s.jsx("span",{className:"chapter-btn-level",children:he.level}),s.jsx("span",{className:"chapter-btn-title",children:he.title}),na&&s.jsx("span",{className:`chapter-btn-status ${na}`,children:na==="understood"?"Entendido":"Leído"})]})},he.id)})})]},E.id)}),s.jsx("div",{className:`section-group memoria-nav-item ${h?"active":""}`,children:s.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{T(!1),$(!1),v(!0),z(!1)},children:[s.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:s.jsx(Fn,{size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:"Memoria"}),s.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),s.jsx("div",{className:"section-meta",children:s.jsx("div",{className:"section-count memoria-count",children:Q.length})})]})}),s.jsx("div",{className:`section-group writing-nav-item ${H?"active":""}`,children:s.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{T(!1),v(!1),$(!0),z(!1)},children:[s.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:s.jsx(Nm,{size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:"Writing"}),s.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),s.jsx("div",{className:"section-meta",children:s.jsx("div",{className:"section-count writing-count",children:I})})]})})]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("div",{className:"sig",children:"— para Othman"})})]}),w&&s.jsx("div",{className:"scrim",onClick:()=>z(!1)})]}),s.jsxs("main",{className:"book-main",children:[s.jsxs("div",{className:`book-page ${j?"home-page":""}`,children:[j?s.jsx(eb,{totalChapters:se.length,visitedCount:ln,savedWordsCount:Q.length,levelFilter:m,palabrasSummary:Ci,lessonSummary:ao,memoriaSummary:to,writingCount:I,sectionProgress:Mi,recommendations:ss,onStart:()=>rn&&xa(rn),onOpenMemoria:()=>{T(!1),$(!1),v(!0)},onOpenPalabras:()=>ca&&xa(ca),onOpenVerb:()=>is&&xa(is),onOpenReading:()=>no&&xa(no),onOpenWriting:()=>{T(!1),v(!1),$(!0)},onSelectChapter:xa}):h?s.jsx(Wg,{savedWords:Q,onRemove:le,onClear:O,onUpdateWord:fe}):H?s.jsx(Pg,{savedWords:Q,chapters:se,onCountChange:P}):Fe?s.jsx(Zg,{chapter:Fe,sectionId:u,onSaveWord:X,palabrasProgress:D,onPalabrasProgressChange:me,lessonStatuses:we,onLessonStatusChange:g}):s.jsxs("div",{className:"empty",children:[s.jsx(ns,{size:28}),s.jsx("p",{children:"No hay capítulos en este nivel."})]}),!j&&!h&&!H&&s.jsxs("nav",{className:"chapter-nav",children:[sn?s.jsxs("button",{className:"nav-btn prev",onClick:()=>xa(sn),children:[s.jsx(yg,{size:16}),s.jsxs("div",{children:[s.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),s.jsx("div",{className:"nav-title",children:sn.title})]})]}):s.jsx("div",{}),_a?s.jsxs("button",{className:"nav-btn next",onClick:()=>xa(_a),children:[s.jsxs("div",{style:{textAlign:"right"},children:[s.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),s.jsx("div",{className:"nav-title",children:_a.title})]}),s.jsx(ts,{size:16})]}):s.jsx("div",{})]})]}),s.jsx("footer",{className:"level-bar",children:s.jsxs("div",{className:"level-bar-inner",children:[s.jsxs("div",{className:"level-bar-label",children:[s.jsx(Fn,{size:14})," Nivel"]}),s.jsxs("div",{className:"level-pills",children:[s.jsx("button",{className:`level-pill ${m==="ALL"?"active":""}`,onClick:()=>x("ALL"),children:"Todos"}),Eg.map(E=>s.jsx("button",{className:`level-pill ${m===E?"active":""}`,onClick:()=>x(E),children:E},E))]}),s.jsx(Ug,{settings:J,onChange:M}),s.jsx("div",{className:"level-bar-counter",children:j?`${ln} / ${se.length}`:Pe>=0?`${Pe+1} / ${se.length}`:"—"})]})})]})]})]})}const tb=`
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

/* Mobile bar — always visible (font controls + menu) */
.mobile-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-light);
  position: sticky; top: 0; z-index: 30;
  gap: 8px;
}
.mobile-brand-script {
  font-family: 'Caveat', cursive;
  font-size: 26px;
  color: var(--green);
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
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 2px;
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
  .resume-banner { padding: 12px 14px; top: 48px; }
  .resume-banner-title { font-size: 18px; }
  .resume-btn-primary { font-size: 13px; padding: 7px 12px; }
}

/* ===== Floating Translate button (appears on text selection) ===== */
.dict-floating-btn {
  position: absolute;
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
  padding: 24px 22px 18px;
  border-bottom: 1px solid var(--rule);
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

.chapter-header { margin-bottom: 32px; }
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
  transition: background-color 120ms ease, color 120ms ease;
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
  position: absolute;
  width: 280px;
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
  padding: 12px 14px 10px;
  background: var(--ink);
  gap: 8px;
}
.dict-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
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
  padding: 14px 16px 10px;
  min-height: 44px;
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
  padding: 10px 14px;
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
  font-size: 21px;
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
  justify-content: space-between;
  padding: 8px 14px 10px;
  border-top: 1px solid var(--rule-soft);
  margin-top: 6px;
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
.dict-source {
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* ===== Study system upgrades ===== */
.global-search {
  margin: 12px 0 18px;
  position: relative;
}
.global-search label {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--paper-light);
  color: var(--ink-mute);
}
.global-search input {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  outline: none;
}
.global-search-results {
  margin-top: 8px;
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
.global-search-empty {
  font-size: 12px;
  color: var(--ink-mute);
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
`;typeof window<"u"&&!window.storage&&(window.storage={async get(u){const f=window.localStorage.getItem(u);return f===null?null:{value:f}},async set(u,f){window.localStorage.setItem(u,f)},async delete(u){window.localStorage.removeItem(u)}});pg();dg.createRoot(document.getElementById("root")).render(s.jsx(nn.StrictMode,{children:s.jsx(ab,{})}));
