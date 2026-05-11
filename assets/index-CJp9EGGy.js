(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const j of h.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&c(j)}).observe(document,{childList:!0,subtree:!0});function u(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(m){if(m.ep)return;m.ep=!0;const h=u(m);fetch(m.href,h)}})();function Eg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hc={exports:{}},vs={};var Cm;function qg(){if(Cm)return vs;Cm=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function u(c,m,h){var j=null;if(h!==void 0&&(j=""+h),m.key!==void 0&&(j=""+m.key),"key"in m){h={};for(var f in m)f!=="key"&&(h[f]=m[f])}else h=m;return m=h.ref,{$$typeof:r,type:c,key:j,ref:m!==void 0?m:null,props:h}}return vs.Fragment=d,vs.jsx=u,vs.jsxs=u,vs}var Mm;function Tg(){return Mm||(Mm=1,hc.exports=qg()),hc.exports}var o=Tg(),gc={exports:{}},he={};var Dm;function Ag(){if(Dm)return he;Dm=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),j=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),C=Symbol.iterator;function D(g){return g===null||typeof g!="object"?null:(g=C&&g[C]||g["@@iterator"],typeof g=="function"?g:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,W={};function V(g,O,Q){this.props=g,this.context=O,this.refs=W,this.updater=Q||Z}V.prototype.isReactComponent={},V.prototype.setState=function(g,O){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,O,"setState")},V.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function J(){}J.prototype=V.prototype;function ee(g,O,Q){this.props=g,this.context=O,this.refs=W,this.updater=Q||Z}var K=ee.prototype=new J;K.constructor=ee,Y(K,V.prototype),K.isPureReactComponent=!0;var le=Array.isArray;function de(){}var oe={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function xe(g,O,Q){var I=Q.ref;return{$$typeof:r,type:g,key:O,ref:I!==void 0?I:null,props:Q}}function F(g,O){return xe(g.type,O,g.props)}function pe(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Ae(g){var O={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Q){return O[Q]})}var qe=/\/+/g;function ve(g,O){return typeof g=="object"&&g!==null&&g.key!=null?Ae(""+g.key):O.toString(36)}function me(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(de,de):(g.status="pending",g.then(function(O){g.status==="pending"&&(g.status="fulfilled",g.value=O)},function(O){g.status==="pending"&&(g.status="rejected",g.reason=O)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function T(g,O,Q,I,P){var ue=typeof g;(ue==="undefined"||ue==="boolean")&&(g=null);var ye=!1;if(g===null)ye=!0;else switch(ue){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(g.$$typeof){case r:case d:ye=!0;break;case x:return ye=g._init,T(ye(g._payload),O,Q,I,P)}}if(ye)return P=P(g),ye=I===""?"."+ve(g,0):I,le(P)?(Q="",ye!=null&&(Q=ye.replace(qe,"$&/")+"/"),T(P,O,Q,"",function(ze){return ze})):P!=null&&(pe(P)&&(P=F(P,Q+(P.key==null||g&&g.key===P.key?"":(""+P.key).replace(qe,"$&/")+"/")+ye)),O.push(P)),1;ye=0;var Ze=I===""?".":I+":";if(le(g))for(var R=0;R<g.length;R++)I=g[R],ue=Ze+ve(I,R),ye+=T(I,O,Q,ue,P);else if(R=D(g),typeof R=="function")for(g=R.call(g),R=0;!(I=g.next()).done;)I=I.value,ue=Ze+ve(I,R++),ye+=T(I,O,Q,ue,P);else if(ue==="object"){if(typeof g.then=="function")return T(me(g),O,Q,I,P);throw O=String(g),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ye}function z(g,O,Q){if(g==null)return g;var I=[],P=0;return T(g,I,"","",function(ue){return O.call(Q,ue,P++)}),I}function B(g){if(g._status===-1){var O=g._result;O=O(),O.then(function(Q){(g._status===0||g._status===-1)&&(g._status=1,g._result=Q)},function(Q){(g._status===0||g._status===-1)&&(g._status=2,g._result=Q)}),g._status===-1&&(g._status=0,g._result=O)}if(g._status===1)return g._result.default;throw g._result}var X=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},$={map:z,forEach:function(g,O,Q){z(g,function(){O.apply(this,arguments)},Q)},count:function(g){var O=0;return z(g,function(){O++}),O},toArray:function(g){return z(g,function(O){return O})||[]},only:function(g){if(!pe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return he.Activity=S,he.Children=$,he.Component=V,he.Fragment=u,he.Profiler=m,he.PureComponent=ee,he.StrictMode=c,he.Suspense=b,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,he.__COMPILER_RUNTIME={__proto__:null,c:function(g){return oe.H.useMemoCache(g)}},he.cache=function(g){return function(){return g.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(g,O,Q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var I=Y({},g.props),P=g.key;if(O!=null)for(ue in O.key!==void 0&&(P=""+O.key),O)!ae.call(O,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&O.ref===void 0||(I[ue]=O[ue]);var ue=arguments.length-2;if(ue===1)I.children=Q;else if(1<ue){for(var ye=Array(ue),Ze=0;Ze<ue;Ze++)ye[Ze]=arguments[Ze+2];I.children=ye}return xe(g.type,P,I)},he.createContext=function(g){return g={$$typeof:j,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},he.createElement=function(g,O,Q){var I,P={},ue=null;if(O!=null)for(I in O.key!==void 0&&(ue=""+O.key),O)ae.call(O,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(P[I]=O[I]);var ye=arguments.length-2;if(ye===1)P.children=Q;else if(1<ye){for(var Ze=Array(ye),R=0;R<ye;R++)Ze[R]=arguments[R+2];P.children=Ze}if(g&&g.defaultProps)for(I in ye=g.defaultProps,ye)P[I]===void 0&&(P[I]=ye[I]);return xe(g,ue,P)},he.createRef=function(){return{current:null}},he.forwardRef=function(g){return{$$typeof:f,render:g}},he.isValidElement=pe,he.lazy=function(g){return{$$typeof:x,_payload:{_status:-1,_result:g},_init:B}},he.memo=function(g,O){return{$$typeof:y,type:g,compare:O===void 0?null:O}},he.startTransition=function(g){var O=oe.T,Q={};oe.T=Q;try{var I=g(),P=oe.S;P!==null&&P(Q,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(de,X)}catch(ue){X(ue)}finally{O!==null&&Q.types!==null&&(O.types=Q.types),oe.T=O}},he.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},he.use=function(g){return oe.H.use(g)},he.useActionState=function(g,O,Q){return oe.H.useActionState(g,O,Q)},he.useCallback=function(g,O){return oe.H.useCallback(g,O)},he.useContext=function(g){return oe.H.useContext(g)},he.useDebugValue=function(){},he.useDeferredValue=function(g,O){return oe.H.useDeferredValue(g,O)},he.useEffect=function(g,O){return oe.H.useEffect(g,O)},he.useEffectEvent=function(g){return oe.H.useEffectEvent(g)},he.useId=function(){return oe.H.useId()},he.useImperativeHandle=function(g,O,Q){return oe.H.useImperativeHandle(g,O,Q)},he.useInsertionEffect=function(g,O){return oe.H.useInsertionEffect(g,O)},he.useLayoutEffect=function(g,O){return oe.H.useLayoutEffect(g,O)},he.useMemo=function(g,O){return oe.H.useMemo(g,O)},he.useOptimistic=function(g,O){return oe.H.useOptimistic(g,O)},he.useReducer=function(g,O,Q){return oe.H.useReducer(g,O,Q)},he.useRef=function(g){return oe.H.useRef(g)},he.useState=function(g){return oe.H.useState(g)},he.useSyncExternalStore=function(g,O,Q){return oe.H.useSyncExternalStore(g,O,Q)},he.useTransition=function(){return oe.H.useTransition()},he.version="19.2.5",he}var Um;function Mc(){return Um||(Um=1,gc.exports=Ag()),gc.exports}var _=Mc();const nt=Eg(_);var bc={exports:{}},xs={},vc={exports:{}},xc={};var Lm;function Cg(){return Lm||(Lm=1,(function(r){function d(T,z){var B=T.length;T.push(z);e:for(;0<B;){var X=B-1>>>1,$=T[X];if(0<m($,z))T[X]=z,T[B]=$,B=X;else break e}}function u(T){return T.length===0?null:T[0]}function c(T){if(T.length===0)return null;var z=T[0],B=T.pop();if(B!==z){T[0]=B;e:for(var X=0,$=T.length,g=$>>>1;X<g;){var O=2*(X+1)-1,Q=T[O],I=O+1,P=T[I];if(0>m(Q,B))I<$&&0>m(P,Q)?(T[X]=P,T[I]=B,X=I):(T[X]=Q,T[O]=B,X=O);else if(I<$&&0>m(P,B))T[X]=P,T[I]=B,X=I;else break e}}return z}function m(T,z){var B=T.sortIndex-z.sortIndex;return B!==0?B:T.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var j=Date,f=j.now();r.unstable_now=function(){return j.now()-f}}var b=[],y=[],x=1,S=null,C=3,D=!1,Z=!1,Y=!1,W=!1,V=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function K(T){for(var z=u(y);z!==null;){if(z.callback===null)c(y);else if(z.startTime<=T)c(y),z.sortIndex=z.expirationTime,d(b,z);else break;z=u(y)}}function le(T){if(Y=!1,K(T),!Z)if(u(b)!==null)Z=!0,de||(de=!0,Ae());else{var z=u(y);z!==null&&me(le,z.startTime-T)}}var de=!1,oe=-1,ae=5,xe=-1;function F(){return W?!0:!(r.unstable_now()-xe<ae)}function pe(){if(W=!1,de){var T=r.unstable_now();xe=T;var z=!0;try{e:{Z=!1,Y&&(Y=!1,J(oe),oe=-1),D=!0;var B=C;try{a:{for(K(T),S=u(b);S!==null&&!(S.expirationTime>T&&F());){var X=S.callback;if(typeof X=="function"){S.callback=null,C=S.priorityLevel;var $=X(S.expirationTime<=T);if(T=r.unstable_now(),typeof $=="function"){S.callback=$,K(T),z=!0;break a}S===u(b)&&c(b),K(T)}else c(b);S=u(b)}if(S!==null)z=!0;else{var g=u(y);g!==null&&me(le,g.startTime-T),z=!1}}break e}finally{S=null,C=B,D=!1}z=void 0}}finally{z?Ae():de=!1}}}var Ae;if(typeof ee=="function")Ae=function(){ee(pe)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,ve=qe.port2;qe.port1.onmessage=pe,Ae=function(){ve.postMessage(null)}}else Ae=function(){V(pe,0)};function me(T,z){oe=V(function(){T(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(T){switch(C){case 1:case 2:case 3:var z=3;break;default:z=C}var B=C;C=z;try{return T()}finally{C=B}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=C;C=T;try{return z()}finally{C=B}},r.unstable_scheduleCallback=function(T,z,B){var X=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?X+B:X):B=X,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=B+$,T={id:x++,callback:z,priorityLevel:T,startTime:B,expirationTime:$,sortIndex:-1},B>X?(T.sortIndex=B,d(y,T),u(b)===null&&T===u(y)&&(Y?(J(oe),oe=-1):Y=!0,me(le,B-X))):(T.sortIndex=$,d(b,T),Z||D||(Z=!0,de||(de=!0,Ae()))),T},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(T){var z=C;return function(){var B=C;C=z;try{return T.apply(this,arguments)}finally{C=B}}}})(xc)),xc}var Om;function Mg(){return Om||(Om=1,vc.exports=Cg()),vc.exports}var yc={exports:{}},ha={};var _m;function Dg(){if(_m)return ha;_m=1;var r=Mc();function d(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(d(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(b,y,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:S==null?null:""+S,children:b,containerInfo:y,implementation:x}}var j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ha.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ha.createPortal=function(b,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(d(299));return h(b,y,null,x)},ha.flushSync=function(b){var y=j.T,x=c.p;try{if(j.T=null,c.p=2,b)return b()}finally{j.T=y,c.p=x,c.d.f()}},ha.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(b,y))},ha.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},ha.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var x=y.as,S=f(x,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?c.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:D}):x==="script"&&c.d.X(b,{crossOrigin:S,integrity:C,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ha.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=f(y.as,y.crossOrigin);c.d.M(b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(b)},ha.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,S=f(x,y.crossOrigin);c.d.L(b,x,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ha.preloadModule=function(b,y){if(typeof b=="string")if(y){var x=f(y.as,y.crossOrigin);c.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(b)},ha.requestFormReset=function(b){c.d.r(b)},ha.unstable_batchedUpdates=function(b,y){return b(y)},ha.useFormState=function(b,y,x){return j.H.useFormState(b,y,x)},ha.useFormStatus=function(){return j.H.useHostTransitionStatus()},ha.version="19.2.5",ha}var Gm;function Ug(){if(Gm)return yc.exports;Gm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),yc.exports=Dg(),yc.exports}var Hm;function Lg(){if(Hm)return xs;Hm=1;var r=Mg(),d=Mc(),u=Ug();function c(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function j(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(c(188))}function y(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(c(188));return a!==e?null:e}for(var t=e,n=a;;){var s=t.return;if(s===null)break;var i=s.alternate;if(i===null){if(n=s.return,n!==null){t=n;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===t)return b(s),e;if(i===n)return b(s),a;i=i.sibling}throw Error(c(188))}if(t.return!==n.return)t=s,n=i;else{for(var l=!1,p=s.child;p;){if(p===t){l=!0,t=s,n=i;break}if(p===n){l=!0,n=s,t=i;break}p=p.sibling}if(!l){for(p=i.child;p;){if(p===t){l=!0,t=i,n=s;break}if(p===n){l=!0,n=i,t=s;break}p=p.sibling}if(!l)throw Error(c(189))}}if(t.alternate!==n)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:a}function x(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=x(e),a!==null)return a;e=e.sibling}return null}var S=Object.assign,C=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case V:return"Profiler";case W:return"StrictMode";case le:return"Suspense";case de:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case ee:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case K:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return a=e.displayName||null,a!==null?a:ve(e.type)||"Memo";case ae:a=e._payload,e=e._init;try{return ve(e(a))}catch{}}return null}var me=Array.isArray,T=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},X=[],$=-1;function g(e){return{current:e}}function O(e){0>$||(e.current=X[$],X[$]=null,$--)}function Q(e,a){$++,X[$]=e.current,e.current=a}var I=g(null),P=g(null),ue=g(null),ye=g(null);function Ze(e,a){switch(Q(ue,a),Q(P,e),Q(I,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?em(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=em(a),e=am(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(I),Q(I,e)}function R(){O(I),O(P),O(ue)}function ze(e){e.memoizedState!==null&&Q(ye,e);var a=I.current,t=am(a,e.type);a!==t&&(Q(P,e),Q(I,t))}function Te(e){P.current===e&&(O(I),O(P)),ye.current===e&&(O(ye),fs._currentValue=B)}var Qe,da;function na(e){if(Qe===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Qe=a&&a[1]||"",da=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+da}var pa=!1;function Wa(e,a){if(!e||pa)return"";pa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(M){var A=M}Reflect.construct(e,[],H)}else{try{H.call()}catch(M){A=M}e.call(H.prototype)}}else{try{throw Error()}catch(M){A=M}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(M){if(M&&A&&typeof M.stack=="string")return[M.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),l=i[0],p=i[1];if(l&&p){var v=l.split(`
`),q=p.split(`
`);for(s=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;s<q.length&&!q[s].includes("DetermineComponentFrameRoot");)s++;if(n===v.length||s===q.length)for(n=v.length-1,s=q.length-1;1<=n&&0<=s&&v[n]!==q[s];)s--;for(;1<=n&&0<=s;n--,s--)if(v[n]!==q[s]){if(n!==1||s!==1)do if(n--,s--,0>s||v[n]!==q[s]){var L=`
`+v[n].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=n&&0<=s);break}}}finally{pa=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?na(t):""}function Ns(e,a){switch(e.tag){case 26:case 27:case 5:return na(e.type);case 16:return na("Lazy");case 13:return e.child!==a&&a!==null?na("Suspense Fallback"):na("Suspense");case 19:return na("SuspenseList");case 0:case 15:return Wa(e.type,!1);case 11:return Wa(e.type.render,!1);case 1:return Wa(e.type,!0);case 31:return na("Activity");default:return""}}function Es(e){try{var a="",t=null;do a+=Ns(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ko=Object.prototype.hasOwnProperty,So=r.unstable_scheduleCallback,zo=r.unstable_cancelCallback,qs=r.unstable_shouldYield,Ts=r.unstable_requestPaint,ma=r.unstable_now,As=r.unstable_getCurrentPriorityLevel,Cs=r.unstable_ImmediatePriority,Ms=r.unstable_UserBlockingPriority,tn=r.unstable_NormalPriority,Ne=r.unstable_LowPriority,Da=r.unstable_IdlePriority,ot=r.log,No=r.unstable_setDisableYieldValue,st=null,$e=null;function Ia(e){if(typeof ot=="function"&&No(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(st,e)}catch{}}var fa=Math.clz32?Math.clz32:ll,Ds=Math.log,il=Math.LN2;function ll(e){return e>>>=0,e===0?32:31-(Ds(e)/il|0)|0}var qt=256,Sn=262144,nn=4194304;function it(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zn(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~i,n!==0?s=it(n):(l&=p,l!==0?s=it(l):t||(t=p&~e,t!==0&&(s=it(t))))):(p=n&~i,p!==0?s=it(p):l!==0?s=it(l):t||(t=n&~e,t!==0&&(s=it(t)))),s===0?0:a!==0&&a!==s&&(a&i)===0&&(i=s&-s,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:s}function Tt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Us(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eo(){var e=nn;return nn<<=1,(nn&62914560)===0&&(nn=4194304),e}function At(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function on(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ua(e,a,t,n,s,i){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,q=e.hiddenUpdates;for(t=l&~t;0<t;){var L=31-fa(t),H=1<<L;p[L]=0,v[L]=-1;var A=q[L];if(A!==null)for(q[L]=null,L=0;L<A.length;L++){var M=A[L];M!==null&&(M.lane&=-536870913)}t&=~H}n!==0&&Ls(e,n,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~a))}function Ls(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-fa(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function Os(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-fa(t),s=1<<n;s&a|e[n]&a&&(e[n]|=a),t&=~s}}function _s(e,a){var t=a&-a;return t=(t&42)!==0?1:qo(t),(t&(e.suspendedLanes|a))!==0?0:t}function qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function To(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Sm(e.type))}function Hs(e,a){var t=z.p;try{return z.p=e,a()}finally{z.p=t}}var w=Math.random().toString(36).slice(2),U="__reactFiber$"+w,ne="__reactProps$"+w,fe="__reactContainer$"+w,ce="__reactEvents$"+w,Za="__reactListeners$"+w,La="__reactHandles$"+w,Sa="__reactResources$"+w,Ct="__reactMarker$"+w;function Nn(e){delete e[U],delete e[ne],delete e[ce],delete e[Za],delete e[La]}function En(e){var a=e[U];if(a)return a;for(var t=e.parentNode;t;){if(a=t[fe]||t[U]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=rm(e);e!==null;){if(t=e[U])return t;e=rm(e)}return a}e=t,t=e.parentNode}return null}function qn(e){if(e=e[U]||e[fe]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ao(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(c(33))}function Tn(e){var a=e[Sa];return a||(a=e[Sa]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function oa(e){e[Ct]=!0}var Yc=new Set,Vc={};function sn(e,a){An(e,a),An(e+"Capture",a)}function An(e,a){for(Vc[e]=a,e=0;e<a.length;e++)Yc.add(a[e])}var vf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qc={},Xc={};function xf(e){return ko.call(Xc,e)?!0:ko.call(Qc,e)?!1:vf.test(e)?Xc[e]=!0:(Qc[e]=!0,!1)}function Bs(e,a,t){if(xf(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Rs(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function lt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function Oa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function yf(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return s.call(this)},set:function(l){t=""+l,i.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function rl(e){if(!e._valueTracker){var a=Ic(e)?"checked":"value";e._valueTracker=yf(e,a,""+e[a])}}function Zc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Ic(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wf=/[\n"\\]/g;function _a(e){return e.replace(wf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function cl(e,a,t,n,s,i,l,p){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Oa(a)):e.value!==""+Oa(a)&&(e.value=""+Oa(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?ul(e,l,Oa(a)):t!=null?ul(e,l,Oa(t)):n!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Oa(p):e.removeAttribute("name")}function Kc(e,a,t,n,s,i,l,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){rl(e);return}t=t!=null?""+Oa(t):"",a=a!=null?""+Oa(a):t,p||a===e.value||(e.value=a),e.defaultValue=a}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),rl(e)}function ul(e,a,t){a==="number"&&Ys(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Cn(e,a,t,n){if(e=e.options,a){a={};for(var s=0;s<t.length;s++)a["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=a.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Oa(t),a=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}a!==null||e[s].disabled||(a=e[s])}a!==null&&(a.selected=!0)}}function Jc(e,a,t){if(a!=null&&(a=""+Oa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Oa(t):""}function $c(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(c(92));if(me(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Oa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),rl(e)}function Mn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var jf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||jf.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Fc(e,a,t){if(a!=null&&typeof a!="object")throw Error(c(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var s in a)n=a[s],a.hasOwnProperty(s)&&t[s]!==n&&Wc(e,s,n)}else for(var i in a)a.hasOwnProperty(i)&&Wc(e,i,a[i])}function dl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vs(e){return Sf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function rt(){}var pl=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,Un=null;function Pc(e){var a=qn(e);if(a&&(e=a.stateNode)){var t=e[ne]||null;e:switch(e=a.stateNode,a.type){case"input":if(cl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_a(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var s=n[ne]||null;if(!s)throw Error(c(90));cl(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Zc(n)}break e;case"textarea":Jc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Cn(e,!!t.multiple,a,!1)}}}var fl=!1;function eu(e,a,t){if(fl)return e(a,t);fl=!0;try{var n=e(a);return n}finally{if(fl=!1,(Dn!==null||Un!==null)&&(Ai(),Dn&&(a=Dn,e=Un,Un=Dn=null,Pc(a),e)))for(a=0;a<e.length;a++)Pc(e[a])}}function Co(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ne]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=!1;if(ct)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){hl=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{hl=!1}var Mt=null,gl=null,Qs=null;function au(){if(Qs)return Qs;var e,a=gl,t=a.length,n,s="value"in Mt?Mt.value:Mt.textContent,i=s.length;for(e=0;e<t&&a[e]===s[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===s[i-n];n++);return Qs=s.slice(e,1<n?1-n:void 0)}function Xs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Is(){return!0}function tu(){return!1}function ba(e){function a(t,n,s,i,l){this._reactName=t,this._targetInst=s,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Is:tu,this.isPropagationStopped=tu,this}return S(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),a}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=ba(ln),Do=S({},ln,{view:0,detail:0}),zf=ba(Do),bl,vl,Uo,Ks=S({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(bl=e.screenX-Uo.screenX,vl=e.screenY-Uo.screenY):vl=bl=0,Uo=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:vl}}),nu=ba(Ks),Nf=S({},Ks,{dataTransfer:0}),Ef=ba(Nf),qf=S({},Do,{relatedTarget:0}),xl=ba(qf),Tf=S({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Af=ba(Tf),Cf=S({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=ba(Cf),Df=S({},ln,{data:0}),ou=ba(Df),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _f(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Of[e])?!!a[e]:!1}function yl(){return _f}var Gf=S({},Do,{key:function(e){if(e.key){var a=Uf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yl,charCode:function(e){return e.type==="keypress"?Xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hf=ba(Gf),Bf=S({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=ba(Bf),Rf=S({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yl}),Yf=ba(Rf),Vf=S({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=ba(Vf),Xf=S({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=ba(Xf),Zf=S({},ln,{newState:0,oldState:0}),Kf=ba(Zf),Jf=[9,13,27,32],wl=ct&&"CompositionEvent"in window,Lo=null;ct&&"documentMode"in document&&(Lo=document.documentMode);var $f=ct&&"TextEvent"in window&&!Lo,iu=ct&&(!wl||Lo&&8<Lo&&11>=Lo),lu=" ",ru=!1;function cu(e,a){switch(e){case"keyup":return Jf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Wf(e,a){switch(e){case"compositionend":return uu(a);case"keypress":return a.which!==32?null:(ru=!0,lu);case"textInput":return e=a.data,e===lu&&ru?null:e;default:return null}}function Ff(e,a){if(Ln)return e==="compositionend"||!wl&&cu(e,a)?(e=au(),Qs=gl=Mt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return iu&&a.locale!=="ko"?null:a.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function du(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Pf[e.type]:a==="textarea"}function pu(e,a,t,n){Dn?Un?Un.push(n):Un=[n]:Dn=n,a=_i(a,"onChange"),0<a.length&&(t=new Zs("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var Oo=null,_o=null;function eh(e){Kp(e,0)}function Js(e){var a=Ao(e);if(Zc(a))return e}function mu(e,a){if(e==="change")return a}var fu=!1;if(ct){var jl;if(ct){var kl="oninput"in document;if(!kl){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),kl=typeof hu.oninput=="function"}jl=kl}else jl=!1;fu=jl&&(!document.documentMode||9<document.documentMode)}function gu(){Oo&&(Oo.detachEvent("onpropertychange",bu),_o=Oo=null)}function bu(e){if(e.propertyName==="value"&&Js(_o)){var a=[];pu(a,_o,e,ml(e)),eu(eh,a)}}function ah(e,a,t){e==="focusin"?(gu(),Oo=a,_o=t,Oo.attachEvent("onpropertychange",bu)):e==="focusout"&&gu()}function th(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Js(_o)}function nh(e,a){if(e==="click")return Js(a)}function oh(e,a){if(e==="input"||e==="change")return Js(a)}function sh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var za=typeof Object.is=="function"?Object.is:sh;function Go(e,a){if(za(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var s=t[n];if(!ko.call(a,s)||!za(e[s],a[s]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,a){var t=vu(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vu(t)}}function yu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?yu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function wu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ys(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Ys(e.document)}return a}function Sl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var ih=ct&&"documentMode"in document&&11>=document.documentMode,On=null,zl=null,Ho=null,Nl=!1;function ju(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Nl||On==null||On!==Ys(n)||(n=On,"selectionStart"in n&&Sl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ho&&Go(Ho,n)||(Ho=n,n=_i(zl,"onSelect"),0<n.length&&(a=new Zs("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=On)))}function rn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var _n={animationend:rn("Animation","AnimationEnd"),animationiteration:rn("Animation","AnimationIteration"),animationstart:rn("Animation","AnimationStart"),transitionrun:rn("Transition","TransitionRun"),transitionstart:rn("Transition","TransitionStart"),transitioncancel:rn("Transition","TransitionCancel"),transitionend:rn("Transition","TransitionEnd")},El={},ku={};ct&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function cn(e){if(El[e])return El[e];if(!_n[e])return e;var a=_n[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in ku)return El[e]=a[t];return e}var Su=cn("animationend"),zu=cn("animationiteration"),Nu=cn("animationstart"),lh=cn("transitionrun"),rh=cn("transitionstart"),ch=cn("transitioncancel"),Eu=cn("transitionend"),qu=new Map,ql="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ql.push("scrollEnd");function Ka(e,a){qu.set(e,a),sn(a,[e])}var $s=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ga=[],Gn=0,Tl=0;function Ws(){for(var e=Gn,a=Tl=Gn=0;a<e;){var t=Ga[a];Ga[a++]=null;var n=Ga[a];Ga[a++]=null;var s=Ga[a];Ga[a++]=null;var i=Ga[a];if(Ga[a++]=null,n!==null&&s!==null){var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}i!==0&&Tu(t,s,i)}}function Fs(e,a,t,n){Ga[Gn++]=e,Ga[Gn++]=a,Ga[Gn++]=t,Ga[Gn++]=n,Tl|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Al(e,a,t,n){return Fs(e,a,t,n),Ps(e)}function un(e,a){return Fs(e,null,null,a),Ps(e)}function Tu(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var s=!1,i=e.return;i!==null;)i.childLanes|=t,n=i.alternate,n!==null&&(n.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&a!==null&&(s=31-fa(t),e=i.hiddenUpdates,n=e[s],n===null?e[s]=[a]:n.push(a),a.lane=t|536870912),i):null}function Ps(e){if(50<ls)throw ls=0,Hr=null,Error(c(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Hn={};function uh(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Na(e,a,t,n){return new uh(e,a,t,n)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ut(e,a){var t=e.alternate;return t===null?(t=Na(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Au(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ei(e,a,t,n,s,i){var l=0;if(n=e,typeof e=="function")Cl(e)&&(l=1);else if(typeof e=="string")l=hg(e,t,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=Na(31,t,a,s),e.elementType=xe,e.lanes=i,e;case Y:return dn(t.children,s,i,a);case W:l=8,s|=24;break;case V:return e=Na(12,t,a,s|2),e.elementType=V,e.lanes=i,e;case le:return e=Na(13,t,a,s),e.elementType=le,e.lanes=i,e;case de:return e=Na(19,t,a,s),e.elementType=de,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:l=10;break e;case J:l=9;break e;case K:l=11;break e;case oe:l=14;break e;case ae:l=16,n=null;break e}l=29,t=Error(c(130,e===null?"null":typeof e,"")),n=null}return a=Na(l,t,a,s),a.elementType=e,a.type=n,a.lanes=i,a}function dn(e,a,t,n){return e=Na(7,e,n,a),e.lanes=t,e}function Ml(e,a,t){return e=Na(6,e,null,a),e.lanes=t,e}function Cu(e){var a=Na(18,null,null,0);return a.stateNode=e,a}function Dl(e,a,t){return a=Na(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Mu=new WeakMap;function Ha(e,a){if(typeof e=="object"&&e!==null){var t=Mu.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Es(a)},Mu.set(e,a),a)}return{value:e,source:a,stack:Es(a)}}var Bn=[],Rn=0,ai=null,Bo=0,Ba=[],Ra=0,Dt=null,Fa=1,Pa="";function dt(e,a){Bn[Rn++]=Bo,Bn[Rn++]=ai,ai=e,Bo=a}function Du(e,a,t){Ba[Ra++]=Fa,Ba[Ra++]=Pa,Ba[Ra++]=Dt,Dt=e;var n=Fa;e=Pa;var s=32-fa(n)-1;n&=~(1<<s),t+=1;var i=32-fa(a)+s;if(30<i){var l=s-s%5;i=(n&(1<<l)-1).toString(32),n>>=l,s-=l,Fa=1<<32-fa(a)+s|t<<s|n,Pa=i+e}else Fa=1<<i|t<<s|n,Pa=e}function Ul(e){e.return!==null&&(dt(e,1),Du(e,1,0))}function Ll(e){for(;e===ai;)ai=Bn[--Rn],Bn[Rn]=null,Bo=Bn[--Rn],Bn[Rn]=null;for(;e===Dt;)Dt=Ba[--Ra],Ba[Ra]=null,Pa=Ba[--Ra],Ba[Ra]=null,Fa=Ba[--Ra],Ba[Ra]=null}function Uu(e,a){Ba[Ra++]=Fa,Ba[Ra++]=Pa,Ba[Ra++]=Dt,Fa=a.id,Pa=a.overflow,Dt=e}var ia=null,Re=null,Ee=!1,Ut=null,Ya=!1,Ol=Error(c(519));function Lt(e){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(Ha(a,e)),Ol}function Lu(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[U]=e,a[ne]=n,t){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(t=0;t<cs.length;t++)je(cs[t],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":je("invalid",a),Kc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":je("invalid",a);break;case"textarea":je("invalid",a),$c(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Fp(a.textContent,t)?(n.popover!=null&&(je("beforetoggle",a),je("toggle",a)),n.onScroll!=null&&je("scroll",a),n.onScrollEnd!=null&&je("scrollend",a),n.onClick!=null&&(a.onclick=rt),a=!0):a=!1,a||Lt(e,!0)}function Ou(e){for(ia=e.return;ia;)switch(ia.tag){case 5:case 31:case 13:Ya=!1;return;case 27:case 3:Ya=!0;return;default:ia=ia.return}}function Yn(e){if(e!==ia)return!1;if(!Ee)return Ou(e),Ee=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ec(e.type,e.memoizedProps)),t=!t),t&&Re&&Lt(e),Ou(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=lm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=lm(e)}else a===27?(a=Re,Jt(e.type)?(e=sc,sc=null,Re=e):Re=a):Re=ia?Qa(e.stateNode.nextSibling):null;return!0}function pn(){Re=ia=null,Ee=!1}function _l(){var e=Ut;return e!==null&&(wa===null?wa=e:wa.push.apply(wa,e),Ut=null),e}function Ro(e){Ut===null?Ut=[e]:Ut.push(e)}var Gl=g(null),mn=null,pt=null;function Ot(e,a,t){Q(Gl,a._currentValue),a._currentValue=t}function mt(e){e._currentValue=Gl.current,O(Gl)}function Hl(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Bl(e,a,t,n){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var l=s.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=s;for(var v=0;v<a.length;v++)if(p.context===a[v]){i.lanes|=t,p=i.alternate,p!==null&&(p.lanes|=t),Hl(i.return,t,e),n||(l=null);break e}i=p.next}}else if(s.tag===18){if(l=s.return,l===null)throw Error(c(341));l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),Hl(l,t,e),l=null}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}}function Vn(e,a,t,n){e=null;for(var s=a,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var l=s.alternate;if(l===null)throw Error(c(387));if(l=l.memoizedProps,l!==null){var p=s.type;za(s.pendingProps.value,l.value)||(e!==null?e.push(p):e=[p])}}else if(s===ye.current){if(l=s.alternate,l===null)throw Error(c(387));l.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(fs):e=[fs])}s=s.return}e!==null&&Bl(a,e,t,n),a.flags|=262144}function ti(e){for(e=e.firstContext;e!==null;){if(!za(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fn(e){mn=e,pt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return _u(mn,e)}function ni(e,a){return mn===null&&fn(e),_u(e,a)}function _u(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},pt===null){if(e===null)throw Error(c(308));pt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else pt=pt.next=a;return t}var dh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},ph=r.unstable_scheduleCallback,mh=r.unstable_NormalPriority,We={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rl(){return{controller:new dh,data:new Map,refCount:0}}function Yo(e){e.refCount--,e.refCount===0&&ph(mh,function(){e.controller.abort()})}var Vo=null,Yl=0,Qn=0,Xn=null;function fh(e,a){if(Vo===null){var t=Vo=[];Yl=0,Qn=Xr(),Xn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Yl++,a.then(Gu,Gu),a}function Gu(){if(--Yl===0&&Vo!==null){Xn!==null&&(Xn.status="fulfilled");var e=Vo;Vo=null,Qn=0,Xn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function hh(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(s){t.push(s)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var s=0;s<t.length;s++)(0,t[s])(a)},function(s){for(n.status="rejected",n.reason=s,s=0;s<t.length;s++)(0,t[s])(void 0)}),n}var Hu=T.S;T.S=function(e,a){jp=ma(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&fh(e,a),Hu!==null&&Hu(e,a)};var hn=g(null);function Vl(){var e=hn.current;return e!==null?e:Be.pooledCache}function oi(e,a){a===null?Q(hn,hn.current):Q(hn,a.pool)}function Bu(){var e=Vl();return e===null?null:{parent:We._currentValue,pool:e}}var In=Error(c(460)),Ql=Error(c(474)),si=Error(c(542)),ii={then:function(){}};function Ru(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yu(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(rt,rt),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qu(e),e;default:if(typeof a.status=="string")a.then(rt,rt);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var s=a;s.status="fulfilled",s.value=n}},function(n){if(a.status==="pending"){var s=a;s.status="rejected",s.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qu(e),e}throw bn=a,In}}function gn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(bn=t,In):t}}var bn=null;function Vu(){if(bn===null)throw Error(c(459));var e=bn;return bn=null,e}function Qu(e){if(e===In||e===si)throw Error(c(483))}var Zn=null,Qo=0;function li(e){var a=Qo;return Qo+=1,Zn===null&&(Zn=[]),Yu(Zn,e,a)}function Xo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ri(e,a){throw a.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Xu(e){function a(N,k){if(e){var E=N.deletions;E===null?(N.deletions=[k],N.flags|=16):E.push(k)}}function t(N,k){if(!e)return null;for(;k!==null;)a(N,k),k=k.sibling;return null}function n(N){for(var k=new Map;N!==null;)N.key!==null?k.set(N.key,N):k.set(N.index,N),N=N.sibling;return k}function s(N,k){return N=ut(N,k),N.index=0,N.sibling=null,N}function i(N,k,E){return N.index=E,e?(E=N.alternate,E!==null?(E=E.index,E<k?(N.flags|=67108866,k):E):(N.flags|=67108866,k)):(N.flags|=1048576,k)}function l(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function p(N,k,E,G){return k===null||k.tag!==6?(k=Ml(E,N.mode,G),k.return=N,k):(k=s(k,E),k.return=N,k)}function v(N,k,E,G){var ie=E.type;return ie===Y?L(N,k,E.props.children,G,E.key):k!==null&&(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ae&&gn(ie)===k.type)?(k=s(k,E.props),Xo(k,E),k.return=N,k):(k=ei(E.type,E.key,E.props,null,N.mode,G),Xo(k,E),k.return=N,k)}function q(N,k,E,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==E.containerInfo||k.stateNode.implementation!==E.implementation?(k=Dl(E,N.mode,G),k.return=N,k):(k=s(k,E.children||[]),k.return=N,k)}function L(N,k,E,G,ie){return k===null||k.tag!==7?(k=dn(E,N.mode,G,ie),k.return=N,k):(k=s(k,E),k.return=N,k)}function H(N,k,E){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ml(""+k,N.mode,E),k.return=N,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case D:return E=ei(k.type,k.key,k.props,null,N.mode,E),Xo(E,k),E.return=N,E;case Z:return k=Dl(k,N.mode,E),k.return=N,k;case ae:return k=gn(k),H(N,k,E)}if(me(k)||Ae(k))return k=dn(k,N.mode,E,null),k.return=N,k;if(typeof k.then=="function")return H(N,li(k),E);if(k.$$typeof===ee)return H(N,ni(N,k),E);ri(N,k)}return null}function A(N,k,E,G){var ie=k!==null?k.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return ie!==null?null:p(N,k,""+E,G);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case D:return E.key===ie?v(N,k,E,G):null;case Z:return E.key===ie?q(N,k,E,G):null;case ae:return E=gn(E),A(N,k,E,G)}if(me(E)||Ae(E))return ie!==null?null:L(N,k,E,G,null);if(typeof E.then=="function")return A(N,k,li(E),G);if(E.$$typeof===ee)return A(N,k,ni(N,E),G);ri(N,E)}return null}function M(N,k,E,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return N=N.get(E)||null,p(k,N,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return N=N.get(G.key===null?E:G.key)||null,v(k,N,G,ie);case Z:return N=N.get(G.key===null?E:G.key)||null,q(k,N,G,ie);case ae:return G=gn(G),M(N,k,E,G,ie)}if(me(G)||Ae(G))return N=N.get(E)||null,L(k,N,G,ie,null);if(typeof G.then=="function")return M(N,k,E,li(G),ie);if(G.$$typeof===ee)return M(N,k,E,ni(k,G),ie);ri(k,G)}return null}function te(N,k,E,G){for(var ie=null,Ce=null,se=k,be=k=0,Se=null;se!==null&&be<E.length;be++){se.index>be?(Se=se,se=null):Se=se.sibling;var Me=A(N,se,E[be],G);if(Me===null){se===null&&(se=Se);break}e&&se&&Me.alternate===null&&a(N,se),k=i(Me,k,be),Ce===null?ie=Me:Ce.sibling=Me,Ce=Me,se=Se}if(be===E.length)return t(N,se),Ee&&dt(N,be),ie;if(se===null){for(;be<E.length;be++)se=H(N,E[be],G),se!==null&&(k=i(se,k,be),Ce===null?ie=se:Ce.sibling=se,Ce=se);return Ee&&dt(N,be),ie}for(se=n(se);be<E.length;be++)Se=M(se,N,be,E[be],G),Se!==null&&(e&&Se.alternate!==null&&se.delete(Se.key===null?be:Se.key),k=i(Se,k,be),Ce===null?ie=Se:Ce.sibling=Se,Ce=Se);return e&&se.forEach(function(en){return a(N,en)}),Ee&&dt(N,be),ie}function re(N,k,E,G){if(E==null)throw Error(c(151));for(var ie=null,Ce=null,se=k,be=k=0,Se=null,Me=E.next();se!==null&&!Me.done;be++,Me=E.next()){se.index>be?(Se=se,se=null):Se=se.sibling;var en=A(N,se,Me.value,G);if(en===null){se===null&&(se=Se);break}e&&se&&en.alternate===null&&a(N,se),k=i(en,k,be),Ce===null?ie=en:Ce.sibling=en,Ce=en,se=Se}if(Me.done)return t(N,se),Ee&&dt(N,be),ie;if(se===null){for(;!Me.done;be++,Me=E.next())Me=H(N,Me.value,G),Me!==null&&(k=i(Me,k,be),Ce===null?ie=Me:Ce.sibling=Me,Ce=Me);return Ee&&dt(N,be),ie}for(se=n(se);!Me.done;be++,Me=E.next())Me=M(se,N,be,Me.value,G),Me!==null&&(e&&Me.alternate!==null&&se.delete(Me.key===null?be:Me.key),k=i(Me,k,be),Ce===null?ie=Me:Ce.sibling=Me,Ce=Me);return e&&se.forEach(function(Ng){return a(N,Ng)}),Ee&&dt(N,be),ie}function Ge(N,k,E,G){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case D:e:{for(var ie=E.key;k!==null;){if(k.key===ie){if(ie=E.type,ie===Y){if(k.tag===7){t(N,k.sibling),G=s(k,E.props.children),G.return=N,N=G;break e}}else if(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ae&&gn(ie)===k.type){t(N,k.sibling),G=s(k,E.props),Xo(G,E),G.return=N,N=G;break e}t(N,k);break}else a(N,k);k=k.sibling}E.type===Y?(G=dn(E.props.children,N.mode,G,E.key),G.return=N,N=G):(G=ei(E.type,E.key,E.props,null,N.mode,G),Xo(G,E),G.return=N,N=G)}return l(N);case Z:e:{for(ie=E.key;k!==null;){if(k.key===ie)if(k.tag===4&&k.stateNode.containerInfo===E.containerInfo&&k.stateNode.implementation===E.implementation){t(N,k.sibling),G=s(k,E.children||[]),G.return=N,N=G;break e}else{t(N,k);break}else a(N,k);k=k.sibling}G=Dl(E,N.mode,G),G.return=N,N=G}return l(N);case ae:return E=gn(E),Ge(N,k,E,G)}if(me(E))return te(N,k,E,G);if(Ae(E)){if(ie=Ae(E),typeof ie!="function")throw Error(c(150));return E=ie.call(E),re(N,k,E,G)}if(typeof E.then=="function")return Ge(N,k,li(E),G);if(E.$$typeof===ee)return Ge(N,k,ni(N,E),G);ri(N,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,k!==null&&k.tag===6?(t(N,k.sibling),G=s(k,E),G.return=N,N=G):(t(N,k),G=Ml(E,N.mode,G),G.return=N,N=G),l(N)):t(N,k)}return function(N,k,E,G){try{Qo=0;var ie=Ge(N,k,E,G);return Zn=null,ie}catch(se){if(se===In||se===si)throw se;var Ce=Na(29,se,null,N.mode);return Ce.lanes=G,Ce.return=N,Ce}}}var vn=Xu(!0),Iu=Xu(!1),_t=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Il(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ht(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(De&2)!==0){var s=n.pending;return s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a,a=Ps(e),Tu(e,null,t),a}return Fs(e,n,a,t),Ps(e)}function Io(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Os(e,t)}}function Zl(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var s=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?s=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?s=i=a:i=i.next=a}else s=i=a;t={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Kl=!1;function Zo(){if(Kl){var e=Xn;if(e!==null)throw e}}function Ko(e,a,t,n){Kl=!1;var s=e.updateQueue;_t=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var v=p,q=v.next;v.next=null,l===null?i=q:l.next=q,l=v;var L=e.alternate;L!==null&&(L=L.updateQueue,p=L.lastBaseUpdate,p!==l&&(p===null?L.firstBaseUpdate=q:p.next=q,L.lastBaseUpdate=v))}if(i!==null){var H=s.baseState;l=0,L=q=v=null,p=i;do{var A=p.lane&-536870913,M=A!==p.lane;if(M?(ke&A)===A:(n&A)===A){A!==0&&A===Qn&&(Kl=!0),L!==null&&(L=L.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var te=e,re=p;A=a;var Ge=t;switch(re.tag){case 1:if(te=re.payload,typeof te=="function"){H=te.call(Ge,H,A);break e}H=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,A=typeof te=="function"?te.call(Ge,H,A):te,A==null)break e;H=S({},H,A);break e;case 2:_t=!0}}A=p.callback,A!==null&&(e.flags|=64,M&&(e.flags|=8192),M=s.callbacks,M===null?s.callbacks=[A]:M.push(A))}else M={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},L===null?(q=L=M,v=H):L=L.next=M,l|=A;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;M=p,p=M.next,M.next=null,s.lastBaseUpdate=M,s.shared.pending=null}}while(!0);L===null&&(v=H),s.baseState=v,s.firstBaseUpdate=q,s.lastBaseUpdate=L,i===null&&(s.shared.lanes=0),Qt|=l,e.lanes=l,e.memoizedState=H}}function Zu(e,a){if(typeof e!="function")throw Error(c(191,e));e.call(a)}function Ku(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Zu(t[e],a)}var Kn=g(null),ci=g(0);function Ju(e,a){e=jt,Q(ci,e),Q(Kn,a),jt=e|a.baseLanes}function Jl(){Q(ci,jt),Q(Kn,Kn.current)}function $l(){jt=ci.current,O(Kn),O(ci)}var Ea=g(null),Va=null;function Bt(e){var a=e.alternate;Q(Ke,Ke.current&1),Q(Ea,e),Va===null&&(a===null||Kn.current!==null||a.memoizedState!==null)&&(Va=e)}function Wl(e){Q(Ke,Ke.current),Q(Ea,e),Va===null&&(Va=e)}function $u(e){e.tag===22?(Q(Ke,Ke.current),Q(Ea,e),Va===null&&(Va=e)):Rt()}function Rt(){Q(Ke,Ke.current),Q(Ea,Ea.current)}function qa(e){O(Ea),Va===e&&(Va=null),O(Ke)}var Ke=g(0);function ui(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||nc(t)||oc(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ft=0,ge=null,Oe=null,Fe=null,di=!1,Jn=!1,xn=!1,pi=0,Jo=0,$n=null,gh=0;function Xe(){throw Error(c(321))}function Fl(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!za(e[t],a[t]))return!1;return!0}function Pl(e,a,t,n,s,i){return ft=i,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,T.H=e===null||e.memoizedState===null?Dd:fr,xn=!1,i=t(n,s),xn=!1,Jn&&(i=Fu(a,t,n,s)),Wu(e),i}function Wu(e){T.H=Fo;var a=Oe!==null&&Oe.next!==null;if(ft=0,Fe=Oe=ge=null,di=!1,Jo=0,$n=null,a)throw Error(c(300));e===null||Pe||(e=e.dependencies,e!==null&&ti(e)&&(Pe=!0))}function Fu(e,a,t,n){ge=e;var s=0;do{if(Jn&&($n=null),Jo=0,Jn=!1,25<=s)throw Error(c(301));if(s+=1,Fe=Oe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Ud,i=a(t,n)}while(Jn);return i}function bh(){var e=T.H,a=e.useState()[0];return a=typeof a.then=="function"?$o(a):a,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ge.flags|=1024),a}function er(){var e=pi!==0;return pi=0,e}function ar(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function tr(e){if(di){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}di=!1}ft=0,Fe=Oe=ge=null,Jn=!1,Jo=pi=0,$n=null}function ga(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Je(){if(Oe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var a=Fe===null?ge.memoizedState:Fe.next;if(a!==null)Fe=a,Oe=e;else{if(e===null)throw ge.alternate===null?Error(c(467)):Error(c(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?ge.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var a=Jo;return Jo+=1,$n===null&&($n=[]),e=Yu($n,e,a),a=ge,(Fe===null?a.memoizedState:Fe.next)===null&&(a=a.alternate,T.H=a===null||a.memoizedState===null?Dd:fr),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===ee)return la(e)}throw Error(c(438,String(e)))}function nr(e){var a=null,t=ge.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=ge.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(s){return s.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=mi(),ge.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=F;return a.index++,t}function ht(e,a){return typeof a=="function"?a(e):a}function hi(e){var a=Je();return or(a,Oe,e)}function or(e,a,t){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var s=e.baseQueue,i=n.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}a.baseQueue=s=i,n.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{a=s.next;var p=l=null,v=null,q=a,L=!1;do{var H=q.lane&-536870913;if(H!==q.lane?(ke&H)===H:(ft&H)===H){var A=q.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),H===Qn&&(L=!0);else if((ft&A)===A){q=q.next,A===Qn&&(L=!0);continue}else H={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},v===null?(p=v=H,l=i):v=v.next=H,ge.lanes|=A,Qt|=A;H=q.action,xn&&t(i,H),i=q.hasEagerState?q.eagerState:t(i,H)}else A={lane:H,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},v===null?(p=v=A,l=i):v=v.next=A,ge.lanes|=H,Qt|=H;q=q.next}while(q!==null&&q!==a);if(v===null?l=i:v.next=p,!za(i,e.memoizedState)&&(Pe=!0,L&&(t=Xn,t!==null)))throw t;e.memoizedState=i,e.baseState=l,e.baseQueue=v,n.lastRenderedState=i}return s===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function sr(e){var a=Je(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=t.dispatch,s=t.pending,i=a.memoizedState;if(s!==null){t.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);za(i,a.memoizedState)||(Pe=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,n]}function Pu(e,a,t){var n=ge,s=Je(),i=Ee;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=a();var l=!za((Oe||s).memoizedState,t);if(l&&(s.memoizedState=t,Pe=!0),s=s.queue,rr(td.bind(null,n,s,e),[e]),s.getSnapshot!==a||l||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Wn(9,{destroy:void 0},ad.bind(null,n,s,t,a),null),Be===null)throw Error(c(349));i||(ft&127)!==0||ed(n,a,t)}return t}function ed(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=ge.updateQueue,a===null?(a=mi(),ge.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function ad(e,a,t,n){a.value=t,a.getSnapshot=n,nd(a)&&od(e)}function td(e,a,t){return t(function(){nd(a)&&od(e)})}function nd(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!za(e,t)}catch{return!0}}function od(e){var a=un(e,2);a!==null&&ja(a,e,2)}function ir(e){var a=ga();if(typeof e=="function"){var t=e;if(e=t(),xn){Ia(!0);try{t()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:e},a}function sd(e,a,t,n){return e.baseState=t,or(e,Oe,typeof n=="function"?n:ht)}function vh(e,a,t,n,s){if(vi(e))throw Error(c(485));if(e=a.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};T.T!==null?t(!0):i.isTransition=!1,n(i),t=a.pending,t===null?(i.next=a.pending=i,id(a,i)):(i.next=t.next,a.pending=t.next=i)}}function id(e,a){var t=a.action,n=a.payload,s=e.state;if(a.isTransition){var i=T.T,l={};T.T=l;try{var p=t(s,n),v=T.S;v!==null&&v(l,p),ld(e,a,p)}catch(q){lr(e,a,q)}finally{i!==null&&l.types!==null&&(i.types=l.types),T.T=i}}else try{i=t(s,n),ld(e,a,i)}catch(q){lr(e,a,q)}}function ld(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){rd(e,a,n)},function(n){return lr(e,a,n)}):rd(e,a,t)}function rd(e,a,t){a.status="fulfilled",a.value=t,cd(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,id(e,t)))}function lr(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,cd(a),a=a.next;while(a!==n)}e.action=null}function cd(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function ud(e,a){return a}function dd(e,a){if(Ee){var t=Be.formState;if(t!==null){e:{var n=ge;if(Ee){if(Re){a:{for(var s=Re,i=Ya;s.nodeType!==8;){if(!i){s=null;break a}if(s=Qa(s.nextSibling),s===null){s=null;break a}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Re=Qa(s.nextSibling),n=s.data==="F!";break e}}Lt(n)}n=!1}n&&(a=t[0])}}return t=ga(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:a},t.queue=n,t=Ad.bind(null,ge,n),n.dispatch=t,n=ir(!1),i=mr.bind(null,ge,!1,n.queue),n=ga(),s={state:a,dispatch:null,action:e,pending:null},n.queue=s,t=vh.bind(null,ge,s,i,t),s.dispatch=t,n.memoizedState=e,[a,t,!1]}function pd(e){var a=Je();return md(a,Oe,e)}function md(e,a,t){if(a=or(e,a,ud)[0],e=hi(ht)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=$o(a)}catch(l){throw l===In?si:l}else n=a;a=Je();var s=a.queue,i=s.dispatch;return t!==a.memoizedState&&(ge.flags|=2048,Wn(9,{destroy:void 0},xh.bind(null,s,t),null)),[n,i,e]}function xh(e,a){e.action=a}function fd(e){var a=Je(),t=Oe;if(t!==null)return md(a,t,e);Je(),a=a.memoizedState,t=Je();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Wn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=ge.updateQueue,a===null&&(a=mi(),ge.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function hd(){return Je().memoizedState}function gi(e,a,t,n){var s=ga();ge.flags|=e,s.memoizedState=Wn(1|a,{destroy:void 0},t,n===void 0?null:n)}function bi(e,a,t,n){var s=Je();n=n===void 0?null:n;var i=s.memoizedState.inst;Oe!==null&&n!==null&&Fl(n,Oe.memoizedState.deps)?s.memoizedState=Wn(a,i,t,n):(ge.flags|=e,s.memoizedState=Wn(1|a,i,t,n))}function gd(e,a){gi(8390656,8,e,a)}function rr(e,a){bi(2048,8,e,a)}function yh(e){ge.flags|=4;var a=ge.updateQueue;if(a===null)a=mi(),ge.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function bd(e){var a=Je().memoizedState;return yh({ref:a,nextImpl:e}),function(){if((De&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function vd(e,a){return bi(4,2,e,a)}function xd(e,a){return bi(4,4,e,a)}function yd(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function wd(e,a,t){t=t!=null?t.concat([e]):null,bi(4,4,yd.bind(null,a,e),t)}function cr(){}function jd(e,a){var t=Je();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Fl(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function kd(e,a){var t=Je();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Fl(a,n[1]))return n[0];if(n=e(),xn){Ia(!0);try{e()}finally{Ia(!1)}}return t.memoizedState=[n,a],n}function ur(e,a,t){return t===void 0||(ft&1073741824)!==0&&(ke&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Sp(),ge.lanes|=e,Qt|=e,t)}function Sd(e,a,t,n){return za(t,a)?t:Kn.current!==null?(e=ur(e,t,n),za(e,a)||(Pe=!0),e):(ft&42)===0||(ft&1073741824)!==0&&(ke&261930)===0?(Pe=!0,e.memoizedState=t):(e=Sp(),ge.lanes|=e,Qt|=e,a)}function zd(e,a,t,n,s){var i=z.p;z.p=i!==0&&8>i?i:8;var l=T.T,p={};T.T=p,mr(e,!1,a,t);try{var v=s(),q=T.S;if(q!==null&&q(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var L=hh(v,n);Wo(e,a,L,Ca(e))}else Wo(e,a,n,Ca(e))}catch(H){Wo(e,a,{then:function(){},status:"rejected",reason:H},Ca())}finally{z.p=i,l!==null&&p.types!==null&&(l.types=p.types),T.T=l}}function wh(){}function dr(e,a,t,n){if(e.tag!==5)throw Error(c(476));var s=Nd(e).queue;zd(e,s,a,B,t===null?wh:function(){return Ed(e),t(n)})}function Nd(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:B},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Ed(e){var a=Nd(e);a.next===null&&(a=e.alternate.memoizedState),Wo(e,a.next.queue,{},Ca())}function pr(){return la(fs)}function qd(){return Je().memoizedState}function Td(){return Je().memoizedState}function jh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ca();e=Gt(t);var n=Ht(a,e,t);n!==null&&(ja(n,a,t),Io(n,a,t)),a={cache:Rl()},e.payload=a;return}a=a.return}}function kh(e,a,t){var n=Ca();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},vi(e)?Cd(a,t):(t=Al(e,a,t,n),t!==null&&(ja(t,e,n),Md(t,a,n)))}function Ad(e,a,t){var n=Ca();Wo(e,a,t,n)}function Wo(e,a,t,n){var s={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(vi(e))Cd(a,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var l=a.lastRenderedState,p=i(l,t);if(s.hasEagerState=!0,s.eagerState=p,za(p,l))return Fs(e,a,s,0),Be===null&&Ws(),!1}catch{}if(t=Al(e,a,s,n),t!==null)return ja(t,e,n),Md(t,a,n),!0}return!1}function mr(e,a,t,n){if(n={lane:2,revertLane:Xr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(a)throw Error(c(479))}else a=Al(e,t,n,2),a!==null&&ja(a,e,2)}function vi(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function Cd(e,a){Jn=di=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Md(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Os(e,t)}}var Fo={readContext:la,use:fi,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Fo.useEffectEvent=Xe;var Dd={readContext:la,use:fi,useCallback:function(e,a){return ga().memoizedState=[e,a===void 0?null:a],e},useContext:la,useEffect:gd,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,gi(4194308,4,yd.bind(null,a,e),t)},useLayoutEffect:function(e,a){return gi(4194308,4,e,a)},useInsertionEffect:function(e,a){gi(4,2,e,a)},useMemo:function(e,a){var t=ga();a=a===void 0?null:a;var n=e();if(xn){Ia(!0);try{e()}finally{Ia(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ga();if(t!==void 0){var s=t(a);if(xn){Ia(!0);try{t(a)}finally{Ia(!1)}}}else s=a;return n.memoizedState=n.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=kh.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var a=ga();return e={current:e},a.memoizedState=e},useState:function(e){e=ir(e);var a=e.queue,t=Ad.bind(null,ge,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:cr,useDeferredValue:function(e,a){var t=ga();return ur(t,e,a)},useTransition:function(){var e=ir(!1);return e=zd.bind(null,ge,e.queue,!0,!1),ga().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=ge,s=ga();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),Be===null)throw Error(c(349));(ke&127)!==0||ed(n,a,t)}s.memoizedState=t;var i={value:t,getSnapshot:a};return s.queue=i,gd(td.bind(null,n,i,e),[e]),n.flags|=2048,Wn(9,{destroy:void 0},ad.bind(null,n,i,t,a),null),t},useId:function(){var e=ga(),a=Be.identifierPrefix;if(Ee){var t=Pa,n=Fa;t=(n&~(1<<32-fa(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=pi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=gh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:pr,useFormState:dd,useActionState:dd,useOptimistic:function(e){var a=ga();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=mr.bind(null,ge,!0,t),t.dispatch=a,[e,a]},useMemoCache:nr,useCacheRefresh:function(){return ga().memoizedState=jh.bind(null,ge)},useEffectEvent:function(e){var a=ga(),t={impl:e};return a.memoizedState=t,function(){if((De&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},fr={readContext:la,use:fi,useCallback:jd,useContext:la,useEffect:rr,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:kd,useReducer:hi,useRef:hd,useState:function(){return hi(ht)},useDebugValue:cr,useDeferredValue:function(e,a){var t=Je();return Sd(t,Oe.memoizedState,e,a)},useTransition:function(){var e=hi(ht)[0],a=Je().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:Pu,useId:qd,useHostTransitionStatus:pr,useFormState:pd,useActionState:pd,useOptimistic:function(e,a){var t=Je();return sd(t,Oe,e,a)},useMemoCache:nr,useCacheRefresh:Td};fr.useEffectEvent=bd;var Ud={readContext:la,use:fi,useCallback:jd,useContext:la,useEffect:rr,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:kd,useReducer:sr,useRef:hd,useState:function(){return sr(ht)},useDebugValue:cr,useDeferredValue:function(e,a){var t=Je();return Oe===null?ur(t,e,a):Sd(t,Oe.memoizedState,e,a)},useTransition:function(){var e=sr(ht)[0],a=Je().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:Pu,useId:qd,useHostTransitionStatus:pr,useFormState:fd,useActionState:fd,useOptimistic:function(e,a){var t=Je();return Oe!==null?sd(t,Oe,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:nr,useCacheRefresh:Td};Ud.useEffectEvent=bd;function hr(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:S({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var gr={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Ca(),s=Gt(n);s.payload=a,t!=null&&(s.callback=t),a=Ht(e,s,n),a!==null&&(ja(a,e,n),Io(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Ca(),s=Gt(n);s.tag=1,s.payload=a,t!=null&&(s.callback=t),a=Ht(e,s,n),a!==null&&(ja(a,e,n),Io(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ca(),n=Gt(t);n.tag=2,a!=null&&(n.callback=a),a=Ht(e,n,t),a!==null&&(ja(a,e,t),Io(a,e,t))}};function Ld(e,a,t,n,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):a.prototype&&a.prototype.isPureReactComponent?!Go(t,n)||!Go(s,i):!0}function Od(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&gr.enqueueReplaceState(a,a.state,null)}function yn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=S({},t));for(var s in e)t[s]===void 0&&(t[s]=e[s])}return t}function _d(e){$s(e)}function Gd(e){console.error(e)}function Hd(e){$s(e)}function xi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Bd(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function br(e,a,t){return t=Gt(t),t.tag=3,t.payload={element:null},t.callback=function(){xi(e,a)},t}function Rd(e){return e=Gt(e),e.tag=3,e}function Yd(e,a,t,n){var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var i=n.value;e.payload=function(){return s(i)},e.callback=function(){Bd(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Bd(a,t,n),typeof s!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function Sh(e,a,t,n,s){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Vn(a,t,s,!0),t=Ea.current,t!==null){switch(t.tag){case 31:case 13:return Va===null?Ci():t.alternate===null&&Ie===0&&(Ie=3),t.flags&=-257,t.flags|=65536,t.lanes=s,n===ii?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Yr(e,n,s)),!1;case 22:return t.flags|=65536,n===ii?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Yr(e,n,s)),!1}throw Error(c(435,t.tag))}return Yr(e,n,s),Ci(),!1}if(Ee)return a=Ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=s,n!==Ol&&(e=Error(c(422),{cause:n}),Ro(Ha(e,t)))):(n!==Ol&&(a=Error(c(423),{cause:n}),Ro(Ha(a,t))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,n=Ha(n,t),s=br(e.stateNode,n,s),Zl(e,s),Ie!==4&&(Ie=2)),!1;var i=Error(c(520),{cause:n});if(i=Ha(i,t),is===null?is=[i]:is.push(i),Ie!==4&&(Ie=2),a===null)return!0;n=Ha(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=s&-s,t.lanes|=e,e=br(t.stateNode,n,e),Zl(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xt===null||!Xt.has(i))))return t.flags|=65536,s&=-s,t.lanes|=s,s=Rd(s),Yd(s,e,t,n),Zl(t,s),!1}t=t.return}while(t!==null);return!1}var vr=Error(c(461)),Pe=!1;function ra(e,a,t,n){a.child=e===null?Iu(a,null,t,n):vn(a,e.child,t,n)}function Vd(e,a,t,n,s){t=t.render;var i=a.ref;if("ref"in n){var l={};for(var p in n)p!=="ref"&&(l[p]=n[p])}else l=n;return fn(a),n=Pl(e,a,t,l,i,s),p=er(),e!==null&&!Pe?(ar(e,a,s),gt(e,a,s)):(Ee&&p&&Ul(a),a.flags|=1,ra(e,a,n,s),a.child)}function Qd(e,a,t,n,s){if(e===null){var i=t.type;return typeof i=="function"&&!Cl(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Xd(e,a,i,n,s)):(e=ei(t.type,null,n,a,a.mode,s),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Nr(e,s)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Go,t(l,n)&&e.ref===a.ref)return gt(e,a,s)}return a.flags|=1,e=ut(i,n),e.ref=a.ref,e.return=a,a.child=e}function Xd(e,a,t,n,s){if(e!==null){var i=e.memoizedProps;if(Go(i,n)&&e.ref===a.ref)if(Pe=!1,a.pendingProps=n=i,Nr(e,s))(e.flags&131072)!==0&&(Pe=!0);else return a.lanes=e.lanes,gt(e,a,s)}return xr(e,a,t,n,s)}function Id(e,a,t,n){var s=n.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(n=a.child=e.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;n=s&~i}else n=0,a.child=null;return Zd(e,a,i,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(a,i!==null?i.cachePool:null),i!==null?Ju(a,i):Jl(),$u(a);else return n=a.lanes=536870912,Zd(e,a,i!==null?i.baseLanes|t:t,t,n)}else i!==null?(oi(a,i.cachePool),Ju(a,i),Rt(),a.memoizedState=null):(e!==null&&oi(a,null),Jl(),Rt());return ra(e,a,s,t),a.child}function Po(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Zd(e,a,t,n,s){var i=Vl();return i=i===null?null:{parent:We._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&oi(a,null),Jl(),$u(a),e!==null&&Vn(e,a,n,!0),a.childLanes=s,null}function yi(e,a){return a=ji({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Kd(e,a,t){return vn(a,e.child,null,t),e=yi(a,a.pendingProps),e.flags|=2,qa(a),a.memoizedState=null,e}function zh(e,a,t){var n=a.pendingProps,s=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ee){if(n.mode==="hidden")return e=yi(a,n),a.lanes=536870912,Po(null,e);if(Wl(a),(e=Re)?(e=im(e,Ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Dt!==null?{id:Fa,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},t=Cu(e),t.return=a,a.child=t,ia=a,Re=null)):e=null,e===null)throw Lt(a);return a.lanes=536870912,null}return yi(a,n)}var i=e.memoizedState;if(i!==null){var l=i.dehydrated;if(Wl(a),s)if(a.flags&256)a.flags&=-257,a=Kd(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(c(558));else if(Pe||Vn(e,a,t,!1),s=(t&e.childLanes)!==0,Pe||s){if(n=Be,n!==null&&(l=_s(n,t),l!==0&&l!==i.retryLane))throw i.retryLane=l,un(e,l),ja(n,e,l),vr;Ci(),a=Kd(e,a,t)}else e=i.treeContext,Re=Qa(l.nextSibling),ia=a,Ee=!0,Ut=null,Ya=!1,e!==null&&Uu(a,e),a=yi(a,n),a.flags|=4096;return a}return e=ut(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function wi(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function xr(e,a,t,n,s){return fn(a),t=Pl(e,a,t,n,void 0,s),n=er(),e!==null&&!Pe?(ar(e,a,s),gt(e,a,s)):(Ee&&n&&Ul(a),a.flags|=1,ra(e,a,t,s),a.child)}function Jd(e,a,t,n,s,i){return fn(a),a.updateQueue=null,t=Fu(a,n,t,s),Wu(e),n=er(),e!==null&&!Pe?(ar(e,a,i),gt(e,a,i)):(Ee&&n&&Ul(a),a.flags|=1,ra(e,a,t,i),a.child)}function $d(e,a,t,n,s){if(fn(a),a.stateNode===null){var i=Hn,l=t.contextType;typeof l=="object"&&l!==null&&(i=la(l)),i=new t(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gr,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},Xl(a),l=t.contextType,i.context=typeof l=="object"&&l!==null?la(l):Hn,i.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(hr(a,t,l,n),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&gr.enqueueReplaceState(i,i.state,null),Ko(a,n,i,s),Zo(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){i=a.stateNode;var p=a.memoizedProps,v=yn(t,p);i.props=v;var q=i.context,L=t.contextType;l=Hn,typeof L=="object"&&L!==null&&(l=la(L));var H=t.getDerivedStateFromProps;L=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=a.pendingProps!==p,L||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||q!==l)&&Od(a,i,n,l),_t=!1;var A=a.memoizedState;i.state=A,Ko(a,n,i,s),Zo(),q=a.memoizedState,p||A!==q||_t?(typeof H=="function"&&(hr(a,t,H,n),q=a.memoizedState),(v=_t||Ld(a,t,v,n,A,q,l))?(L||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=q),i.props=n,i.state=q,i.context=l,n=v):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,Il(e,a),l=a.memoizedProps,L=yn(t,l),i.props=L,H=a.pendingProps,A=i.context,q=t.contextType,v=Hn,typeof q=="object"&&q!==null&&(v=la(q)),p=t.getDerivedStateFromProps,(q=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==H||A!==v)&&Od(a,i,n,v),_t=!1,A=a.memoizedState,i.state=A,Ko(a,n,i,s),Zo();var M=a.memoizedState;l!==H||A!==M||_t||e!==null&&e.dependencies!==null&&ti(e.dependencies)?(typeof p=="function"&&(hr(a,t,p,n),M=a.memoizedState),(L=_t||Ld(a,t,L,n,A,M,v)||e!==null&&e.dependencies!==null&&ti(e.dependencies))?(q||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,M,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,M,v)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=M),i.props=n,i.state=M,i.context=v,n=L):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),n=!1)}return i=n,wi(e,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&n?(a.child=vn(a,e.child,null,s),a.child=vn(a,null,t,s)):ra(e,a,t,s),a.memoizedState=i.state,e=a.child):e=gt(e,a,s),e}function Wd(e,a,t,n){return pn(),a.flags|=256,ra(e,a,t,n),a.child}var yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wr(e){return{baseLanes:e,cachePool:Bu()}}function jr(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Aa),e}function Fd(e,a,t){var n=a.pendingProps,s=!1,i=(a.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),l&&(s=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ee){if(s?Bt(a):Rt(),(e=Re)?(e=im(e,Ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Dt!==null?{id:Fa,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},t=Cu(e),t.return=a,a.child=t,ia=a,Re=null)):e=null,e===null)throw Lt(a);return oc(e)?a.lanes=32:a.lanes=536870912,null}var p=n.children;return n=n.fallback,s?(Rt(),s=a.mode,p=ji({mode:"hidden",children:p},s),n=dn(n,s,t,null),p.return=a,n.return=a,p.sibling=n,a.child=p,n=a.child,n.memoizedState=wr(t),n.childLanes=jr(e,l,t),a.memoizedState=yr,Po(null,n)):(Bt(a),kr(a,p))}var v=e.memoizedState;if(v!==null&&(p=v.dehydrated,p!==null)){if(i)a.flags&256?(Bt(a),a.flags&=-257,a=Sr(e,a,t)):a.memoizedState!==null?(Rt(),a.child=e.child,a.flags|=128,a=null):(Rt(),p=n.fallback,s=a.mode,n=ji({mode:"visible",children:n.children},s),p=dn(p,s,t,null),p.flags|=2,n.return=a,p.return=a,n.sibling=p,a.child=n,vn(a,e.child,null,t),n=a.child,n.memoizedState=wr(t),n.childLanes=jr(e,l,t),a.memoizedState=yr,a=Po(null,n));else if(Bt(a),oc(p)){if(l=p.nextSibling&&p.nextSibling.dataset,l)var q=l.dgst;l=q,n=Error(c(419)),n.stack="",n.digest=l,Ro({value:n,source:null,stack:null}),a=Sr(e,a,t)}else if(Pe||Vn(e,a,t,!1),l=(t&e.childLanes)!==0,Pe||l){if(l=Be,l!==null&&(n=_s(l,t),n!==0&&n!==v.retryLane))throw v.retryLane=n,un(e,n),ja(l,e,n),vr;nc(p)||Ci(),a=Sr(e,a,t)}else nc(p)?(a.flags|=192,a.child=e.child,a=null):(e=v.treeContext,Re=Qa(p.nextSibling),ia=a,Ee=!0,Ut=null,Ya=!1,e!==null&&Uu(a,e),a=kr(a,n.children),a.flags|=4096);return a}return s?(Rt(),p=n.fallback,s=a.mode,v=e.child,q=v.sibling,n=ut(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,q!==null?p=ut(q,p):(p=dn(p,s,t,null),p.flags|=2),p.return=a,n.return=a,n.sibling=p,a.child=n,Po(null,n),n=a.child,p=e.child.memoizedState,p===null?p=wr(t):(s=p.cachePool,s!==null?(v=We._currentValue,s=s.parent!==v?{parent:v,pool:v}:s):s=Bu(),p={baseLanes:p.baseLanes|t,cachePool:s}),n.memoizedState=p,n.childLanes=jr(e,l,t),a.memoizedState=yr,Po(e.child,n)):(Bt(a),t=e.child,e=t.sibling,t=ut(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function kr(e,a){return a=ji({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function ji(e,a){return e=Na(22,e,null,a),e.lanes=0,e}function Sr(e,a,t){return vn(a,e.child,null,t),e=kr(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Pd(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Hl(e.return,a,t)}function zr(e,a,t,n,s,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:s,treeForkCount:i}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=s,l.treeForkCount=i)}function ep(e,a,t){var n=a.pendingProps,s=n.revealOrder,i=n.tail;n=n.children;var l=Ke.current,p=(l&2)!==0;if(p?(l=l&1|2,a.flags|=128):l&=1,Q(Ke,l),ra(e,a,n,t),n=Ee?Bo:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,t,a);else if(e.tag===19)Pd(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(t=a.child,s=null;t!==null;)e=t.alternate,e!==null&&ui(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=a.child,a.child=null):(s=t.sibling,t.sibling=null),zr(a,!1,s,t,i,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,s=a.child,a.child=null;s!==null;){if(e=s.alternate,e!==null&&ui(e)===null){a.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}zr(a,!0,t,null,i,n);break;case"together":zr(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function gt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Qt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Vn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,t=ut(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Nr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&ti(e)))}function Nh(e,a,t){switch(a.tag){case 3:Ze(a,a.stateNode.containerInfo),Ot(a,We,e.memoizedState.cache),pn();break;case 27:case 5:ze(a);break;case 4:Ze(a,a.stateNode.containerInfo);break;case 10:Ot(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Wl(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Bt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Fd(e,a,t):(Bt(a),e=gt(e,a,t),e!==null?e.sibling:null);Bt(a);break;case 19:var s=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(Vn(e,a,t,!1),n=(t&a.childLanes)!==0),s){if(n)return ep(e,a,t);a.flags|=128}if(s=a.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(Ke,Ke.current),n)break;return null;case 22:return a.lanes=0,Id(e,a,t,a.pendingProps);case 24:Ot(a,We,e.memoizedState.cache)}return gt(e,a,t)}function ap(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Pe=!0;else{if(!Nr(e,t)&&(a.flags&128)===0)return Pe=!1,Nh(e,a,t);Pe=(e.flags&131072)!==0}else Pe=!1,Ee&&(a.flags&1048576)!==0&&Du(a,Bo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=gn(a.elementType),a.type=e,typeof e=="function")Cl(e)?(n=yn(e,n),a.tag=1,a=$d(null,a,e,n,t)):(a.tag=0,a=xr(null,a,e,n,t));else{if(e!=null){var s=e.$$typeof;if(s===K){a.tag=11,a=Vd(null,a,e,n,t);break e}else if(s===oe){a.tag=14,a=Qd(null,a,e,n,t);break e}}throw a=ve(e)||e,Error(c(306,a,""))}}return a;case 0:return xr(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,s=yn(n,a.pendingProps),$d(e,a,n,s,t);case 3:e:{if(Ze(a,a.stateNode.containerInfo),e===null)throw Error(c(387));n=a.pendingProps;var i=a.memoizedState;s=i.element,Il(e,a),Ko(a,n,null,t);var l=a.memoizedState;if(n=l.cache,Ot(a,We,n),n!==i.cache&&Bl(a,[We],t,!0),Zo(),n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Wd(e,a,n,t);break e}else if(n!==s){s=Ha(Error(c(424)),a),Ro(s),a=Wd(e,a,n,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Qa(e.firstChild),ia=a,Ee=!0,Ut=null,Ya=!0,t=Iu(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pn(),n===s){a=gt(e,a,t);break e}ra(e,a,n,t)}a=a.child}return a;case 26:return wi(e,a),e===null?(t=pm(a.type,null,a.pendingProps,null))?a.memoizedState=t:Ee||(t=a.type,e=a.pendingProps,n=Gi(ue.current).createElement(t),n[U]=a,n[ne]=e,ca(n,t,e),oa(n),a.stateNode=n):a.memoizedState=pm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return ze(a),e===null&&Ee&&(n=a.stateNode=cm(a.type,a.pendingProps,ue.current),ia=a,Ya=!0,s=Re,Jt(a.type)?(sc=s,Re=Qa(n.firstChild)):Re=s),ra(e,a,a.pendingProps.children,t),wi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ee&&((s=n=Re)&&(n=tg(n,a.type,a.pendingProps,Ya),n!==null?(a.stateNode=n,ia=a,Re=Qa(n.firstChild),Ya=!1,s=!0):s=!1),s||Lt(a)),ze(a),s=a.type,i=a.pendingProps,l=e!==null?e.memoizedProps:null,n=i.children,ec(s,i)?n=null:l!==null&&ec(s,l)&&(a.flags|=32),a.memoizedState!==null&&(s=Pl(e,a,bh,null,null,t),fs._currentValue=s),wi(e,a),ra(e,a,n,t),a.child;case 6:return e===null&&Ee&&((e=t=Re)&&(t=ng(t,a.pendingProps,Ya),t!==null?(a.stateNode=t,ia=a,Re=null,e=!0):e=!1),e||Lt(a)),null;case 13:return Fd(e,a,t);case 4:return Ze(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=vn(a,null,n,t):ra(e,a,n,t),a.child;case 11:return Vd(e,a,a.type,a.pendingProps,t);case 7:return ra(e,a,a.pendingProps,t),a.child;case 8:return ra(e,a,a.pendingProps.children,t),a.child;case 12:return ra(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,Ot(a,a.type,n.value),ra(e,a,n.children,t),a.child;case 9:return s=a.type._context,n=a.pendingProps.children,fn(a),s=la(s),n=n(s),a.flags|=1,ra(e,a,n,t),a.child;case 14:return Qd(e,a,a.type,a.pendingProps,t);case 15:return Xd(e,a,a.type,a.pendingProps,t);case 19:return ep(e,a,t);case 31:return zh(e,a,t);case 22:return Id(e,a,t,a.pendingProps);case 24:return fn(a),n=la(We),e===null?(s=Vl(),s===null&&(s=Be,i=Rl(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=t),s=i),a.memoizedState={parent:n,cache:s},Xl(a),Ot(a,We,s)):((e.lanes&t)!==0&&(Il(e,a),Ko(a,null,null,t),Zo()),s=e.memoizedState,i=a.memoizedState,s.parent!==n?(s={parent:n,cache:n},a.memoizedState=s,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=s),Ot(a,We,n)):(n=i.cache,Ot(a,We,n),n!==s.cache&&Bl(a,[We],t,!0))),ra(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function bt(e){e.flags|=4}function Er(e,a,t,n,s){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(qp())e.flags|=8192;else throw bn=ii,Ql}else e.flags&=-16777217}function tp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bm(a))if(qp())e.flags|=8192;else throw bn=ii,Ql}function ki(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Eo():536870912,e.lanes|=a,ao|=a)}function es(e,a){if(!Ee)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function Eh(e,a,t){var n=a.pendingProps;switch(Ll(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(a),null;case 1:return Ye(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),mt(We),R(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Yn(a)?bt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,_l())),Ye(a),null;case 26:var s=a.type,i=a.memoizedState;return e===null?(bt(a),i!==null?(Ye(a),tp(a,i)):(Ye(a),Er(a,s,null,n,t))):i?i!==e.memoizedState?(bt(a),Ye(a),tp(a,i)):(Ye(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&bt(a),Ye(a),Er(a,s,e,n,t)),null;case 27:if(Te(a),t=ue.current,s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&bt(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Ye(a),null}e=I.current,Yn(a)?Lu(a):(e=cm(s,n,t),a.stateNode=e,bt(a))}return Ye(a),null;case 5:if(Te(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&bt(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Ye(a),null}if(i=I.current,Yn(a))Lu(a);else{var l=Gi(ue.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?l.createElement(s,{is:n.is}):l.createElement(s)}}i[U]=a,i[ne]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=i;e:switch(ca(i,s,n),s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&bt(a)}}return Ye(a),Er(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&bt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(c(166));if(e=ue.current,Yn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,s=ia,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}e[U]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Fp(e.nodeValue,t)),e||Lt(a,!0)}else e=Gi(e).createTextNode(n),e[U]=a,a.stateNode=e}return Ye(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=Yn(a),t!==null){if(e===null){if(!n)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[U]=a}else pn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),e=!1}else t=_l(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(qa(a),a):(qa(a),null);if((a.flags&128)!==0)throw Error(c(558))}return Ye(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Yn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[U]=a}else pn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),s=!1}else s=_l(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return a.flags&256?(qa(a),a):(qa(a),null)}return qa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==s&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),ki(a,a.updateQueue),Ye(a),null);case 4:return R(),e===null&&Jr(a.stateNode.containerInfo),Ye(a),null;case 10:return mt(a.type),Ye(a),null;case 19:if(O(Ke),n=a.memoizedState,n===null)return Ye(a),null;if(s=(a.flags&128)!==0,i=n.rendering,i===null)if(s)es(n,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=ui(e),i!==null){for(a.flags|=128,es(n,!1),e=i.updateQueue,a.updateQueue=e,ki(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Au(t,e),t=t.sibling;return Q(Ke,Ke.current&1|2),Ee&&dt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&ma()>qi&&(a.flags|=128,s=!0,es(n,!1),a.lanes=4194304)}else{if(!s)if(e=ui(i),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,ki(a,e),es(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Ee)return Ye(a),null}else 2*ma()-n.renderingStartTime>qi&&t!==536870912&&(a.flags|=128,s=!0,es(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(e=n.last,e!==null?e.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ma(),e.sibling=null,t=Ke.current,Q(Ke,s?t&1|2:t&1),Ee&&dt(a,n.treeForkCount),e):(Ye(a),null);case 22:case 23:return qa(a),$l(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Ye(a),a.subtreeFlags&6&&(a.flags|=8192)):Ye(a),t=a.updateQueue,t!==null&&ki(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&O(hn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),mt(We),Ye(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function qh(e,a){switch(Ll(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return mt(We),R(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Te(a),null;case 31:if(a.memoizedState!==null){if(qa(a),a.alternate===null)throw Error(c(340));pn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(qa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));pn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return O(Ke),null;case 4:return R(),null;case 10:return mt(a.type),null;case 22:case 23:return qa(a),$l(),e!==null&&O(hn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return mt(We),null;case 25:return null;default:return null}}function np(e,a){switch(Ll(a),a.tag){case 3:mt(We),R();break;case 26:case 27:case 5:Te(a);break;case 4:R();break;case 31:a.memoizedState!==null&&qa(a);break;case 13:qa(a);break;case 19:O(Ke);break;case 10:mt(a.type);break;case 22:case 23:qa(a),$l(),e!==null&&O(hn);break;case 24:mt(We)}}function as(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var s=n.next;t=s;do{if((t.tag&e)===e){n=void 0;var i=t.create,l=t.inst;n=i(),l.destroy=n}t=t.next}while(t!==s)}}catch(p){Le(a,a.return,p)}}function Yt(e,a,t){try{var n=a.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var i=s.next;n=i;do{if((n.tag&e)===e){var l=n.inst,p=l.destroy;if(p!==void 0){l.destroy=void 0,s=a;var v=t,q=p;try{q()}catch(L){Le(s,v,L)}}}n=n.next}while(n!==i)}}catch(L){Le(a,a.return,L)}}function op(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Ku(a,t)}catch(n){Le(e,e.return,n)}}}function sp(e,a,t){t.props=yn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Le(e,a,n)}}function ts(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(s){Le(e,a,s)}}function et(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(s){Le(e,a,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(s){Le(e,a,s)}else t.current=null}function ip(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(s){Le(e,e.return,s)}}function qr(e,a,t){try{var n=e.stateNode;$h(n,e.type,t,a),n[ne]=a}catch(s){Le(e,e.return,s)}}function lp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jt(e.type)||e.tag===4}function Tr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ar(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=rt));else if(n!==4&&(n===27&&Jt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Ar(e,a,t),e=e.sibling;e!==null;)Ar(e,a,t),e=e.sibling}function Si(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Jt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Si(e,a,t),e=e.sibling;e!==null;)Si(e,a,t),e=e.sibling}function rp(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,s=a.attributes;s.length;)a.removeAttributeNode(s[0]);ca(a,n,t),a[U]=e,a[ne]=t}catch(i){Le(e,e.return,i)}}var vt=!1,ea=!1,Cr=!1,cp=typeof WeakSet=="function"?WeakSet:Set,sa=null;function Th(e,a){if(e=e.containerInfo,Fr=Xi,e=wu(e),Sl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var s=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,p=-1,v=-1,q=0,L=0,H=e,A=null;a:for(;;){for(var M;H!==t||s!==0&&H.nodeType!==3||(p=l+s),H!==i||n!==0&&H.nodeType!==3||(v=l+n),H.nodeType===3&&(l+=H.nodeValue.length),(M=H.firstChild)!==null;)A=H,H=M;for(;;){if(H===e)break a;if(A===t&&++q===s&&(p=l),A===i&&++L===n&&(v=l),(M=H.nextSibling)!==null)break;H=A,A=H.parentNode}H=M}t=p===-1||v===-1?null:{start:p,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pr={focusedElem:e,selectionRange:t},Xi=!1,sa=a;sa!==null;)if(a=sa,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,sa=e;else for(;sa!==null;){switch(a=sa,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)s=e[t],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,s=i.memoizedProps,i=i.memoizedState,n=t.stateNode;try{var te=yn(t.type,s);e=n.getSnapshotBeforeUpdate(te,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(re){Le(t,t.return,re)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)tc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=a.sibling,e!==null){e.return=a.return,sa=e;break}sa=a.return}}function up(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:yt(e,t),n&4&&as(5,t);break;case 1:if(yt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){Le(t,t.return,l)}else{var s=yn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(s,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Le(t,t.return,l)}}n&64&&op(t),n&512&&ts(t,t.return);break;case 3:if(yt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Ku(e,a)}catch(l){Le(t,t.return,l)}}break;case 27:a===null&&n&4&&rp(t);case 26:case 5:yt(e,t),a===null&&n&4&&ip(t),n&512&&ts(t,t.return);break;case 12:yt(e,t);break;case 31:yt(e,t),n&4&&mp(e,t);break;case 13:yt(e,t),n&4&&fp(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Gh.bind(null,t),og(e,t))));break;case 22:if(n=t.memoizedState!==null||vt,!n){a=a!==null&&a.memoizedState!==null||ea,s=vt;var i=ea;vt=n,(ea=a)&&!i?wt(e,t,(t.subtreeFlags&8772)!==0):yt(e,t),vt=s,ea=i}break;case 30:break;default:yt(e,t)}}function dp(e){var a=e.alternate;a!==null&&(e.alternate=null,dp(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Nn(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,va=!1;function xt(e,a,t){for(t=t.child;t!==null;)pp(e,a,t),t=t.sibling}function pp(e,a,t){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(st,t)}catch{}switch(t.tag){case 26:ea||et(t,a),xt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ea||et(t,a);var n=Ve,s=va;Jt(t.type)&&(Ve=t.stateNode,va=!1),xt(e,a,t),ds(t.stateNode),Ve=n,va=s;break;case 5:ea||et(t,a);case 6:if(n=Ve,s=va,Ve=null,xt(e,a,t),Ve=n,va=s,Ve!==null)if(va)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(t.stateNode)}catch(i){Le(t,a,i)}else try{Ve.removeChild(t.stateNode)}catch(i){Le(t,a,i)}break;case 18:Ve!==null&&(va?(e=Ve,om(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),co(e)):om(Ve,t.stateNode));break;case 4:n=Ve,s=va,Ve=t.stateNode.containerInfo,va=!0,xt(e,a,t),Ve=n,va=s;break;case 0:case 11:case 14:case 15:Yt(2,t,a),ea||Yt(4,t,a),xt(e,a,t);break;case 1:ea||(et(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&sp(t,a,n)),xt(e,a,t);break;case 21:xt(e,a,t);break;case 22:ea=(n=ea)||t.memoizedState!==null,xt(e,a,t),ea=n;break;default:xt(e,a,t)}}function mp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{co(e)}catch(t){Le(a,a.return,t)}}}function fp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(t){Le(a,a.return,t)}}function Ah(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new cp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new cp),a;default:throw Error(c(435,e.tag))}}function zi(e,a){var t=Ah(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var s=Hh.bind(null,e,n);n.then(s,s)}})}function xa(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var s=t[n],i=e,l=a,p=l;e:for(;p!==null;){switch(p.tag){case 27:if(Jt(p.type)){Ve=p.stateNode,va=!1;break e}break;case 5:Ve=p.stateNode,va=!1;break e;case 3:case 4:Ve=p.stateNode.containerInfo,va=!0;break e}p=p.return}if(Ve===null)throw Error(c(160));pp(i,l,s),Ve=null,va=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)hp(a,e),a=a.sibling}var Ja=null;function hp(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xa(a,e),ya(e),n&4&&(Yt(3,e,e.return),as(3,e),Yt(5,e,e.return));break;case 1:xa(a,e),ya(e),n&512&&(ea||t===null||et(t,t.return)),n&64&&vt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var s=Ja;if(xa(a,e),ya(e),n&512&&(ea||t===null||et(t,t.return)),n&4){var i=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,s=s.ownerDocument||s;a:switch(n){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Ct]||i[U]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(n),s.head.insertBefore(i,s.querySelector("head > title"))),ca(i,n,t),i[U]=e,oa(i),n=i;break e;case"link":var l=hm("link","href",s).get(n+(t.href||""));if(l){for(var p=0;p<l.length;p++)if(i=l[p],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(p,1);break a}}i=s.createElement(n),ca(i,n,t),s.head.appendChild(i);break;case"meta":if(l=hm("meta","content",s).get(n+(t.content||""))){for(p=0;p<l.length;p++)if(i=l[p],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(p,1);break a}}i=s.createElement(n),ca(i,n,t),s.head.appendChild(i);break;default:throw Error(c(468,n))}i[U]=e,oa(i),n=i}e.stateNode=n}else gm(s,e.type,e.stateNode);else e.stateNode=fm(s,n,e.memoizedProps);else i!==n?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,n===null?gm(s,e.type,e.stateNode):fm(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&qr(e,e.memoizedProps,t.memoizedProps)}break;case 27:xa(a,e),ya(e),n&512&&(ea||t===null||et(t,t.return)),t!==null&&n&4&&qr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(xa(a,e),ya(e),n&512&&(ea||t===null||et(t,t.return)),e.flags&32){s=e.stateNode;try{Mn(s,"")}catch(te){Le(e,e.return,te)}}n&4&&e.stateNode!=null&&(s=e.memoizedProps,qr(e,s,t!==null?t.memoizedProps:s)),n&1024&&(Cr=!0);break;case 6:if(xa(a,e),ya(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(te){Le(e,e.return,te)}}break;case 3:if(Ri=null,s=Ja,Ja=Hi(a.containerInfo),xa(a,e),Ja=s,ya(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{co(a.containerInfo)}catch(te){Le(e,e.return,te)}Cr&&(Cr=!1,gp(e));break;case 4:n=Ja,Ja=Hi(e.stateNode.containerInfo),xa(a,e),ya(e),Ja=n;break;case 12:xa(a,e),ya(e);break;case 31:xa(a,e),ya(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zi(e,n)));break;case 13:xa(a,e),ya(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ei=ma()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zi(e,n)));break;case 22:s=e.memoizedState!==null;var v=t!==null&&t.memoizedState!==null,q=vt,L=ea;if(vt=q||s,ea=L||v,xa(a,e),ea=L,vt=q,ya(e),n&8192)e:for(a=e.stateNode,a._visibility=s?a._visibility&-2:a._visibility|1,s&&(t===null||v||vt||ea||wn(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){v=t=a;try{if(i=v.stateNode,s)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{p=v.stateNode;var H=v.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(te){Le(v,v.return,te)}}}else if(a.tag===6){if(t===null){v=a;try{v.stateNode.nodeValue=s?"":v.memoizedProps}catch(te){Le(v,v.return,te)}}}else if(a.tag===18){if(t===null){v=a;try{var M=v.stateNode;s?sm(M,!0):sm(v.stateNode,!1)}catch(te){Le(v,v.return,te)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,zi(e,t))));break;case 19:xa(a,e),ya(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zi(e,n)));break;case 30:break;case 21:break;default:xa(a,e),ya(e)}}function ya(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(lp(n)){t=n;break}n=n.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var s=t.stateNode,i=Tr(e);Si(e,i,s);break;case 5:var l=t.stateNode;t.flags&32&&(Mn(l,""),t.flags&=-33);var p=Tr(e);Si(e,p,l);break;case 3:case 4:var v=t.stateNode.containerInfo,q=Tr(e);Ar(e,q,v);break;default:throw Error(c(161))}}catch(L){Le(e,e.return,L)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;gp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function yt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)up(e,a.alternate,a),a=a.sibling}function wn(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Yt(4,a,a.return),wn(a);break;case 1:et(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&sp(a,a.return,t),wn(a);break;case 27:ds(a.stateNode);case 26:case 5:et(a,a.return),wn(a);break;case 22:a.memoizedState===null&&wn(a);break;case 30:wn(a);break;default:wn(a)}e=e.sibling}}function wt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,s=e,i=a,l=i.flags;switch(i.tag){case 0:case 11:case 15:wt(s,i,t),as(4,i);break;case 1:if(wt(s,i,t),n=i,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(q){Le(n,n.return,q)}if(n=i,s=n.updateQueue,s!==null){var p=n.stateNode;try{var v=s.shared.hiddenCallbacks;if(v!==null)for(s.shared.hiddenCallbacks=null,s=0;s<v.length;s++)Zu(v[s],p)}catch(q){Le(n,n.return,q)}}t&&l&64&&op(i),ts(i,i.return);break;case 27:rp(i);case 26:case 5:wt(s,i,t),t&&n===null&&l&4&&ip(i),ts(i,i.return);break;case 12:wt(s,i,t);break;case 31:wt(s,i,t),t&&l&4&&mp(s,i);break;case 13:wt(s,i,t),t&&l&4&&fp(s,i);break;case 22:i.memoizedState===null&&wt(s,i,t),ts(i,i.return);break;case 30:break;default:wt(s,i,t)}a=a.sibling}}function Mr(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Yo(t))}function Dr(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Yo(e))}function $a(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)bp(e,a,t,n),a=a.sibling}function bp(e,a,t,n){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$a(e,a,t,n),s&2048&&as(9,a);break;case 1:$a(e,a,t,n);break;case 3:$a(e,a,t,n),s&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Yo(e)));break;case 12:if(s&2048){$a(e,a,t,n),e=a.stateNode;try{var i=a.memoizedProps,l=i.id,p=i.onPostCommit;typeof p=="function"&&p(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Le(a,a.return,v)}}else $a(e,a,t,n);break;case 31:$a(e,a,t,n);break;case 13:$a(e,a,t,n);break;case 23:break;case 22:i=a.stateNode,l=a.alternate,a.memoizedState!==null?i._visibility&2?$a(e,a,t,n):ns(e,a):i._visibility&2?$a(e,a,t,n):(i._visibility|=2,Fn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),s&2048&&Mr(l,a);break;case 24:$a(e,a,t,n),s&2048&&Dr(a.alternate,a);break;default:$a(e,a,t,n)}}function Fn(e,a,t,n,s){for(s=s&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,l=a,p=t,v=n,q=l.flags;switch(l.tag){case 0:case 11:case 15:Fn(i,l,p,v,s),as(8,l);break;case 23:break;case 22:var L=l.stateNode;l.memoizedState!==null?L._visibility&2?Fn(i,l,p,v,s):ns(i,l):(L._visibility|=2,Fn(i,l,p,v,s)),s&&q&2048&&Mr(l.alternate,l);break;case 24:Fn(i,l,p,v,s),s&&q&2048&&Dr(l.alternate,l);break;default:Fn(i,l,p,v,s)}a=a.sibling}}function ns(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,s=n.flags;switch(n.tag){case 22:ns(t,n),s&2048&&Mr(n.alternate,n);break;case 24:ns(t,n),s&2048&&Dr(n.alternate,n);break;default:ns(t,n)}a=a.sibling}}var os=8192;function Pn(e,a,t){if(e.subtreeFlags&os)for(e=e.child;e!==null;)vp(e,a,t),e=e.sibling}function vp(e,a,t){switch(e.tag){case 26:Pn(e,a,t),e.flags&os&&e.memoizedState!==null&&gg(t,Ja,e.memoizedState,e.memoizedProps);break;case 5:Pn(e,a,t);break;case 3:case 4:var n=Ja;Ja=Hi(e.stateNode.containerInfo),Pn(e,a,t),Ja=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=os,os=16777216,Pn(e,a,t),os=n):Pn(e,a,t));break;default:Pn(e,a,t)}}function xp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ss(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];sa=n,wp(n,e)}xp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yp(e),e=e.sibling}function yp(e){switch(e.tag){case 0:case 11:case 15:ss(e),e.flags&2048&&Yt(9,e,e.return);break;case 3:ss(e);break;case 12:ss(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ni(e)):ss(e);break;default:ss(e)}}function Ni(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];sa=n,wp(n,e)}xp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Yt(8,a,a.return),Ni(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Ni(a));break;default:Ni(a)}e=e.sibling}}function wp(e,a){for(;sa!==null;){var t=sa;switch(t.tag){case 0:case 11:case 15:Yt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Yo(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,sa=n;else e:for(t=e;sa!==null;){n=sa;var s=n.sibling,i=n.return;if(dp(n),n===t){sa=null;break e}if(s!==null){s.return=i,sa=s;break e}sa=i}}}var Ch={getCacheForType:function(e){var a=la(We),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return la(We).controller.signal}},Mh=typeof WeakMap=="function"?WeakMap:Map,De=0,Be=null,we=null,ke=0,Ue=0,Ta=null,Vt=!1,eo=!1,Ur=!1,jt=0,Ie=0,Qt=0,jn=0,Lr=0,Aa=0,ao=0,is=null,wa=null,Or=!1,Ei=0,jp=0,qi=1/0,Ti=null,Xt=null,aa=0,It=null,to=null,kt=0,_r=0,Gr=null,kp=null,ls=0,Hr=null;function Ca(){return(De&2)!==0&&ke!==0?ke&-ke:T.T!==null?Xr():Gs()}function Sp(){if(Aa===0)if((ke&536870912)===0||Ee){var e=Sn;Sn<<=1,(Sn&3932160)===0&&(Sn=262144),Aa=e}else Aa=536870912;return e=Ea.current,e!==null&&(e.flags|=32),Aa}function ja(e,a,t){(e===Be&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(no(e,0),Zt(e,ke,Aa,!1)),on(e,t),((De&2)===0||e!==Be)&&(e===Be&&((De&2)===0&&(jn|=t),Ie===4&&Zt(e,ke,Aa,!1)),at(e))}function zp(e,a,t){if((De&6)!==0)throw Error(c(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Tt(e,a),s=n?Lh(e,a):Rr(e,a,!0),i=n;do{if(s===0){eo&&!n&&Zt(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!Dh(t)){s=Rr(e,a,!1),i=!1;continue}if(s===2){if(i=a,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var p=e;s=is;var v=p.current.memoizedState.isDehydrated;if(v&&(no(p,l).flags|=256),l=Rr(p,l,!1),l!==2){if(Ur&&!v){p.errorRecoveryDisabledLanes|=i,jn|=i,s=4;break e}i=wa,wa=s,i!==null&&(wa===null?wa=i:wa.push.apply(wa,i))}s=l}if(i=!1,s!==2)continue}}if(s===1){no(e,0),Zt(e,a,0,!0);break}e:{switch(n=e,i=s,i){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:Zt(n,a,Aa,!Vt);break e;case 2:wa=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(s=Ei+300-ma(),10<s)){if(Zt(n,a,Aa,!Vt),zn(n,0,!0)!==0)break e;kt=a,n.timeoutHandle=tm(Np.bind(null,n,t,wa,Ti,Or,a,Aa,jn,ao,Vt,i,"Throttled",-0,0),s);break e}Np(n,t,wa,Ti,Or,a,Aa,jn,ao,Vt,i,null,-0,0)}}break}while(!0);at(e)}function Np(e,a,t,n,s,i,l,p,v,q,L,H,A,M){if(e.timeoutHandle=-1,H=a.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rt},vp(a,i,H);var te=(i&62914560)===i?Ei-ma():(i&4194048)===i?jp-ma():0;if(te=bg(H,te),te!==null){kt=i,e.cancelPendingCommit=te(Up.bind(null,e,a,i,t,n,s,l,p,v,L,H,null,A,M)),Zt(e,i,l,!q);return}}Up(e,a,i,t,n,s,l,p,v)}function Dh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var s=t[n],i=s.getSnapshot;s=s.value;try{if(!za(i(),s))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Zt(e,a,t,n){a&=~Lr,a&=~jn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var s=a;0<s;){var i=31-fa(s),l=1<<i;n[i]=-1,s&=~l}t!==0&&Ls(e,t,a)}function Ai(){return(De&6)===0?(rs(0),!1):!0}function Br(){if(we!==null){if(Ue===0)var e=we.return;else e=we,pt=mn=null,tr(e),Zn=null,Qo=0,e=we;for(;e!==null;)np(e.alternate,e),e=e.return;we=null}}function no(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Ph(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),kt=0,Br(),Be=e,we=t=ut(e.current,null),ke=a,Ue=0,Ta=null,Vt=!1,eo=Tt(e,a),Ur=!1,ao=Aa=Lr=jn=Qt=Ie=0,wa=is=null,Or=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var s=31-fa(n),i=1<<s;a|=e[s],n&=~i}return jt=a,Ws(),t}function Ep(e,a){ge=null,T.H=Fo,a===In||a===si?(a=Vu(),Ue=3):a===Ql?(a=Vu(),Ue=4):Ue=a===vr?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ta=a,we===null&&(Ie=1,xi(e,Ha(a,e.current)))}function qp(){var e=Ea.current;return e===null?!0:(ke&4194048)===ke?Va===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Va:!1}function Tp(){var e=T.H;return T.H=Fo,e===null?Fo:e}function Ap(){var e=T.A;return T.A=Ch,e}function Ci(){Ie=4,Vt||(ke&4194048)!==ke&&Ea.current!==null||(eo=!0),(Qt&134217727)===0&&(jn&134217727)===0||Be===null||Zt(Be,ke,Aa,!1)}function Rr(e,a,t){var n=De;De|=2;var s=Tp(),i=Ap();(Be!==e||ke!==a)&&(Ti=null,no(e,a)),a=!1;var l=Ie;e:do try{if(Ue!==0&&we!==null){var p=we,v=Ta;switch(Ue){case 8:Br(),l=6;break e;case 3:case 2:case 9:case 6:Ea.current===null&&(a=!0);var q=Ue;if(Ue=0,Ta=null,oo(e,p,v,q),t&&eo){l=0;break e}break;default:q=Ue,Ue=0,Ta=null,oo(e,p,v,q)}}Uh(),l=Ie;break}catch(L){Ep(e,L)}while(!0);return a&&e.shellSuspendCounter++,pt=mn=null,De=n,T.H=s,T.A=i,we===null&&(Be=null,ke=0,Ws()),l}function Uh(){for(;we!==null;)Cp(we)}function Lh(e,a){var t=De;De|=2;var n=Tp(),s=Ap();Be!==e||ke!==a?(Ti=null,qi=ma()+500,no(e,a)):eo=Tt(e,a);e:do try{if(Ue!==0&&we!==null){a=we;var i=Ta;a:switch(Ue){case 1:Ue=0,Ta=null,oo(e,a,i,1);break;case 2:case 9:if(Ru(i)){Ue=0,Ta=null,Mp(a);break}a=function(){Ue!==2&&Ue!==9||Be!==e||(Ue=7),at(e)},i.then(a,a);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Ru(i)?(Ue=0,Ta=null,Mp(a)):(Ue=0,Ta=null,oo(e,a,i,7));break;case 5:var l=null;switch(we.tag){case 26:l=we.memoizedState;case 5:case 27:var p=we;if(l?bm(l):p.stateNode.complete){Ue=0,Ta=null;var v=p.sibling;if(v!==null)we=v;else{var q=p.return;q!==null?(we=q,Mi(q)):we=null}break a}}Ue=0,Ta=null,oo(e,a,i,5);break;case 6:Ue=0,Ta=null,oo(e,a,i,6);break;case 8:Br(),Ie=6;break e;default:throw Error(c(462))}}Oh();break}catch(L){Ep(e,L)}while(!0);return pt=mn=null,T.H=n,T.A=s,De=t,we!==null?0:(Be=null,ke=0,Ws(),Ie)}function Oh(){for(;we!==null&&!qs();)Cp(we)}function Cp(e){var a=ap(e.alternate,e,jt);e.memoizedProps=e.pendingProps,a===null?Mi(e):we=a}function Mp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Jd(t,a,a.pendingProps,a.type,void 0,ke);break;case 11:a=Jd(t,a,a.pendingProps,a.type.render,a.ref,ke);break;case 5:tr(a);default:np(t,a),a=we=Au(a,jt),a=ap(t,a,jt)}e.memoizedProps=e.pendingProps,a===null?Mi(e):we=a}function oo(e,a,t,n){pt=mn=null,tr(a),Zn=null,Qo=0;var s=a.return;try{if(Sh(e,s,a,t,ke)){Ie=1,xi(e,Ha(t,e.current)),we=null;return}}catch(i){if(s!==null)throw we=s,i;Ie=1,xi(e,Ha(t,e.current)),we=null;return}a.flags&32768?(Ee||n===1?e=!0:eo||(ke&536870912)!==0?e=!1:(Vt=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ea.current,n!==null&&n.tag===13&&(n.flags|=16384))),Dp(a,e)):Mi(a)}function Mi(e){var a=e;do{if((a.flags&32768)!==0){Dp(a,Vt);return}e=a.return;var t=Eh(a.alternate,a,jt);if(t!==null){we=t;return}if(a=a.sibling,a!==null){we=a;return}we=a=e}while(a!==null);Ie===0&&(Ie=5)}function Dp(e,a){do{var t=qh(e.alternate,e);if(t!==null){t.flags&=32767,we=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){we=e;return}we=e=t}while(e!==null);Ie=6,we=null}function Up(e,a,t,n,s,i,l,p,v){e.cancelPendingCommit=null;do Di();while(aa!==0);if((De&6)!==0)throw Error(c(327));if(a!==null){if(a===e.current)throw Error(c(177));if(i=a.lanes|a.childLanes,i|=Tl,Ua(e,t,i,l,p,v),e===Be&&(we=Be=null,ke=0),to=a,It=e,kt=t,_r=i,Gr=s,kp=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bh(tn,function(){return Hp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,s=z.p,z.p=2,l=De,De|=4;try{Th(e,a,t)}finally{De=l,z.p=s,T.T=n}}aa=1,Lp(),Op(),_p()}}function Lp(){if(aa===1){aa=0;var e=It,a=to,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=T.T,T.T=null;var n=z.p;z.p=2;var s=De;De|=4;try{hp(a,e);var i=Pr,l=wu(e.containerInfo),p=i.focusedElem,v=i.selectionRange;if(l!==p&&p&&p.ownerDocument&&yu(p.ownerDocument.documentElement,p)){if(v!==null&&Sl(p)){var q=v.start,L=v.end;if(L===void 0&&(L=q),"selectionStart"in p)p.selectionStart=q,p.selectionEnd=Math.min(L,p.value.length);else{var H=p.ownerDocument||document,A=H&&H.defaultView||window;if(A.getSelection){var M=A.getSelection(),te=p.textContent.length,re=Math.min(v.start,te),Ge=v.end===void 0?re:Math.min(v.end,te);!M.extend&&re>Ge&&(l=Ge,Ge=re,re=l);var N=xu(p,re),k=xu(p,Ge);if(N&&k&&(M.rangeCount!==1||M.anchorNode!==N.node||M.anchorOffset!==N.offset||M.focusNode!==k.node||M.focusOffset!==k.offset)){var E=H.createRange();E.setStart(N.node,N.offset),M.removeAllRanges(),re>Ge?(M.addRange(E),M.extend(k.node,k.offset)):(E.setEnd(k.node,k.offset),M.addRange(E))}}}}for(H=[],M=p;M=M.parentNode;)M.nodeType===1&&H.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<H.length;p++){var G=H[p];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Xi=!!Fr,Pr=Fr=null}finally{De=s,z.p=n,T.T=t}}e.current=a,aa=2}}function Op(){if(aa===2){aa=0;var e=It,a=to,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=T.T,T.T=null;var n=z.p;z.p=2;var s=De;De|=4;try{up(e,a.alternate,a)}finally{De=s,z.p=n,T.T=t}}aa=3}}function _p(){if(aa===4||aa===3){aa=0,Ts();var e=It,a=to,t=kt,n=kp;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?aa=5:(aa=0,to=It=null,Gp(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Xt=null),To(t),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(st,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=T.T,s=z.p,z.p=2,T.T=null;try{for(var i=e.onRecoverableError,l=0;l<n.length;l++){var p=n[l];i(p.value,{componentStack:p.stack})}}finally{T.T=a,z.p=s}}(kt&3)!==0&&Di(),at(e),s=e.pendingLanes,(t&261930)!==0&&(s&42)!==0?e===Hr?ls++:(ls=0,Hr=e):ls=0,rs(0)}}function Gp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Yo(a)))}function Di(){return Lp(),Op(),_p(),Hp()}function Hp(){if(aa!==5)return!1;var e=It,a=_r;_r=0;var t=To(kt),n=T.T,s=z.p;try{z.p=32>t?32:t,T.T=null,t=Gr,Gr=null;var i=It,l=kt;if(aa=0,to=It=null,kt=0,(De&6)!==0)throw Error(c(331));var p=De;if(De|=4,yp(i.current),bp(i,i.current,l,t),De=p,rs(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(st,i)}catch{}return!0}finally{z.p=s,T.T=n,Gp(e,a)}}function Bp(e,a,t){a=Ha(t,a),a=br(e.stateNode,a,2),e=Ht(e,a,2),e!==null&&(on(e,2),at(e))}function Le(e,a,t){if(e.tag===3)Bp(e,e,t);else for(;a!==null;){if(a.tag===3){Bp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Xt===null||!Xt.has(n))){e=Ha(t,e),t=Rd(2),n=Ht(a,t,2),n!==null&&(Yd(t,n,a,e),on(n,2),at(n));break}}a=a.return}}function Yr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Mh;var s=new Set;n.set(a,s)}else s=n.get(a),s===void 0&&(s=new Set,n.set(a,s));s.has(t)||(Ur=!0,s.add(t),e=_h.bind(null,e,a,t),a.then(e,e))}function _h(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Be===e&&(ke&t)===t&&(Ie===4||Ie===3&&(ke&62914560)===ke&&300>ma()-Ei?(De&2)===0&&no(e,0):Lr|=t,ao===ke&&(ao=0)),at(e)}function Rp(e,a){a===0&&(a=Eo()),e=un(e,a),e!==null&&(on(e,a),at(e))}function Gh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Rp(e,t)}function Hh(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(a),Rp(e,t)}function Bh(e,a){return So(e,a)}var Ui=null,so=null,Vr=!1,Li=!1,Qr=!1,Kt=0;function at(e){e!==so&&e.next===null&&(so===null?Ui=so=e:so=so.next=e),Li=!0,Vr||(Vr=!0,Yh())}function rs(e,a){if(!Qr&&Li){Qr=!0;do for(var t=!1,n=Ui;n!==null;){if(e!==0){var s=n.pendingLanes;if(s===0)var i=0;else{var l=n.suspendedLanes,p=n.pingedLanes;i=(1<<31-fa(42|e)+1)-1,i&=s&~(l&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Xp(n,i))}else i=ke,i=zn(n,n===Be?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Tt(n,i)||(t=!0,Xp(n,i));n=n.next}while(t);Qr=!1}}function Rh(){Yp()}function Yp(){Li=Vr=!1;var e=0;Kt!==0&&Fh()&&(e=Kt);for(var a=ma(),t=null,n=Ui;n!==null;){var s=n.next,i=Vp(n,a);i===0?(n.next=null,t===null?Ui=s:t.next=s,s===null&&(so=t)):(t=n,(e!==0||(i&3)!==0)&&(Li=!0)),n=s}aa!==0&&aa!==5||rs(e),Kt!==0&&(Kt=0)}function Vp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-fa(i),p=1<<l,v=s[l];v===-1?((p&t)===0||(p&n)!==0)&&(s[l]=Us(p,a)):v<=a&&(e.expiredLanes|=p),i&=~p}if(a=Be,t=ke,t=zn(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&zo(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Tt(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&zo(n),To(t)){case 2:case 8:t=Ms;break;case 32:t=tn;break;case 268435456:t=Da;break;default:t=tn}return n=Qp.bind(null,e),t=So(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&zo(n),e.callbackPriority=2,e.callbackNode=null,2}function Qp(e,a){if(aa!==0&&aa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Di()&&e.callbackNode!==t)return null;var n=ke;return n=zn(e,e===Be?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(zp(e,n,a),Vp(e,ma()),e.callbackNode!=null&&e.callbackNode===t?Qp.bind(null,e):null)}function Xp(e,a){if(Di())return null;zp(e,a,!0)}function Yh(){eg(function(){(De&6)!==0?So(Cs,Rh):Yp()})}function Xr(){if(Kt===0){var e=Qn;e===0&&(e=qt,qt<<=1,(qt&261888)===0&&(qt=256)),Kt=e}return Kt}function Ip(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vs(""+e)}function Zp(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Vh(e,a,t,n,s){if(a==="submit"&&t&&t.stateNode===s){var i=Ip((s[ne]||null).action),l=n.submitter;l&&(a=(a=l[ne]||null)?Ip(a.formAction):l.getAttribute("formAction"),a!==null&&(i=a,l=null));var p=new Zs("action","action",null,n,s);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Kt!==0){var v=l?Zp(s,l):new FormData(s);dr(t,{pending:!0,data:v,method:s.method,action:i},null,v)}}else typeof i=="function"&&(p.preventDefault(),v=l?Zp(s,l):new FormData(s),dr(t,{pending:!0,data:v,method:s.method,action:i},i,v))},currentTarget:s}]})}}for(var Ir=0;Ir<ql.length;Ir++){var Zr=ql[Ir],Qh=Zr.toLowerCase(),Xh=Zr[0].toUpperCase()+Zr.slice(1);Ka(Qh,"on"+Xh)}Ka(Su,"onAnimationEnd"),Ka(zu,"onAnimationIteration"),Ka(Nu,"onAnimationStart"),Ka("dblclick","onDoubleClick"),Ka("focusin","onFocus"),Ka("focusout","onBlur"),Ka(lh,"onTransitionRun"),Ka(rh,"onTransitionStart"),Ka(ch,"onTransitionCancel"),Ka(Eu,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cs));function Kp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],s=n.event;n=n.listeners;e:{var i=void 0;if(a)for(var l=n.length-1;0<=l;l--){var p=n[l],v=p.instance,q=p.currentTarget;if(p=p.listener,v!==i&&s.isPropagationStopped())break e;i=p,s.currentTarget=q;try{i(s)}catch(L){$s(L)}s.currentTarget=null,i=v}else for(l=0;l<n.length;l++){if(p=n[l],v=p.instance,q=p.currentTarget,p=p.listener,v!==i&&s.isPropagationStopped())break e;i=p,s.currentTarget=q;try{i(s)}catch(L){$s(L)}s.currentTarget=null,i=v}}}}function je(e,a){var t=a[ce];t===void 0&&(t=a[ce]=new Set);var n=e+"__bubble";t.has(n)||(Jp(a,e,2,!1),t.add(n))}function Kr(e,a,t){var n=0;a&&(n|=4),Jp(t,e,n,a)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Oi]){e[Oi]=!0,Yc.forEach(function(t){t!=="selectionchange"&&(Ih.has(t)||Kr(t,!1,e),Kr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Oi]||(a[Oi]=!0,Kr("selectionchange",!1,a))}}function Jp(e,a,t,n){switch(Sm(a)){case 2:var s=yg;break;case 8:s=wg;break;default:s=uc}t=s.bind(null,a,t,e),s=void 0,!hl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(a,t,{capture:!0,passive:s}):e.addEventListener(a,t,!0):s!==void 0?e.addEventListener(a,t,{passive:s}):e.addEventListener(a,t,!1)}function $r(e,a,t,n,s){var i=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var p=n.stateNode.containerInfo;if(p===s)break;if(l===4)for(l=n.return;l!==null;){var v=l.tag;if((v===3||v===4)&&l.stateNode.containerInfo===s)return;l=l.return}for(;p!==null;){if(l=En(p),l===null)return;if(v=l.tag,v===5||v===6||v===26||v===27){n=i=l;continue e}p=p.parentNode}}n=n.return}eu(function(){var q=i,L=ml(t),H=[];e:{var A=qu.get(e);if(A!==void 0){var M=Zs,te=e;switch(e){case"keypress":if(Xs(t)===0)break e;case"keydown":case"keyup":M=Hf;break;case"focusin":te="focus",M=xl;break;case"focusout":te="blur",M=xl;break;case"beforeblur":case"afterblur":M=xl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Yf;break;case Su:case zu:case Nu:M=Af;break;case Eu:M=Qf;break;case"scroll":case"scrollend":M=zf;break;case"wheel":M=If;break;case"copy":case"cut":case"paste":M=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=su;break;case"toggle":case"beforetoggle":M=Kf}var re=(a&4)!==0,Ge=!re&&(e==="scroll"||e==="scrollend"),N=re?A!==null?A+"Capture":null:A;re=[];for(var k=q,E;k!==null;){var G=k;if(E=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||E===null||N===null||(G=Co(k,N),G!=null&&re.push(us(k,G,E))),Ge)break;k=k.return}0<re.length&&(A=new M(A,te,null,t,L),H.push({event:A,listeners:re}))}}if((a&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",A&&t!==pl&&(te=t.relatedTarget||t.fromElement)&&(En(te)||te[fe]))break e;if((M||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,M?(te=t.relatedTarget||t.toElement,M=q,te=te?En(te):null,te!==null&&(Ge=h(te),re=te.tag,te!==Ge||re!==5&&re!==27&&re!==6)&&(te=null)):(M=null,te=q),M!==te)){if(re=nu,G="onMouseLeave",N="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(re=su,G="onPointerLeave",N="onPointerEnter",k="pointer"),Ge=M==null?A:Ao(M),E=te==null?A:Ao(te),A=new re(G,k+"leave",M,t,L),A.target=Ge,A.relatedTarget=E,G=null,En(L)===q&&(re=new re(N,k+"enter",te,t,L),re.target=E,re.relatedTarget=Ge,G=re),Ge=G,M&&te)a:{for(re=Zh,N=M,k=te,E=0,G=N;G;G=re(G))E++;G=0;for(var ie=k;ie;ie=re(ie))G++;for(;0<E-G;)N=re(N),E--;for(;0<G-E;)k=re(k),G--;for(;E--;){if(N===k||k!==null&&N===k.alternate){re=N;break a}N=re(N),k=re(k)}re=null}else re=null;M!==null&&$p(H,A,M,re,!1),te!==null&&Ge!==null&&$p(H,Ge,te,re,!0)}}e:{if(A=q?Ao(q):window,M=A.nodeName&&A.nodeName.toLowerCase(),M==="select"||M==="input"&&A.type==="file")var Ce=mu;else if(du(A))if(fu)Ce=oh;else{Ce=th;var se=ah}else M=A.nodeName,!M||M.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?q&&dl(q.elementType)&&(Ce=mu):Ce=nh;if(Ce&&(Ce=Ce(e,q))){pu(H,Ce,t,L);break e}se&&se(e,A,q),e==="focusout"&&q&&A.type==="number"&&q.memoizedProps.value!=null&&ul(A,"number",A.value)}switch(se=q?Ao(q):window,e){case"focusin":(du(se)||se.contentEditable==="true")&&(On=se,zl=q,Ho=null);break;case"focusout":Ho=zl=On=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,ju(H,t,L);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":ju(H,t,L)}var be;if(wl)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ln?cu(e,t)&&(Se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Se="onCompositionStart");Se&&(iu&&t.locale!=="ko"&&(Ln||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ln&&(be=au()):(Mt=L,gl="value"in Mt?Mt.value:Mt.textContent,Ln=!0)),se=_i(q,Se),0<se.length&&(Se=new ou(Se,e,null,t,L),H.push({event:Se,listeners:se}),be?Se.data=be:(be=uu(t),be!==null&&(Se.data=be)))),(be=$f?Wf(e,t):Ff(e,t))&&(Se=_i(q,"onBeforeInput"),0<Se.length&&(se=new ou("onBeforeInput","beforeinput",null,t,L),H.push({event:se,listeners:Se}),se.data=be)),Vh(H,e,q,t,L)}Kp(H,a)})}function us(e,a,t){return{instance:e,listener:a,currentTarget:t}}function _i(e,a){for(var t=a+"Capture",n=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Co(e,t),s!=null&&n.unshift(us(e,s,i)),s=Co(e,a),s!=null&&n.push(us(e,s,i))),e.tag===3)return n;e=e.return}return[]}function Zh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $p(e,a,t,n,s){for(var i=a._reactName,l=[];t!==null&&t!==n;){var p=t,v=p.alternate,q=p.stateNode;if(p=p.tag,v!==null&&v===n)break;p!==5&&p!==26&&p!==27||q===null||(v=q,s?(q=Co(t,i),q!=null&&l.unshift(us(t,q,v))):s||(q=Co(t,i),q!=null&&l.push(us(t,q,v)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var Kh=/\r\n?/g,Jh=/\u0000|\uFFFD/g;function Wp(e){return(typeof e=="string"?e:""+e).replace(Kh,`
`).replace(Jh,"")}function Fp(e,a){return a=Wp(a),Wp(e)===a}function _e(e,a,t,n,s,i){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&Mn(e,""+n);break;case"className":Rs(e,"class",n);break;case"tabIndex":Rs(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Rs(e,t,n);break;case"style":Fc(e,n,i);break;case"data":if(a!=="object"){Rs(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Vs(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&_e(e,a,"name",s.name,s,null),_e(e,a,"formEncType",s.formEncType,s,null),_e(e,a,"formMethod",s.formMethod,s,null),_e(e,a,"formTarget",s.formTarget,s,null)):(_e(e,a,"encType",s.encType,s,null),_e(e,a,"method",s.method,s,null),_e(e,a,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Vs(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=rt);break;case"onScroll":n!=null&&je("scroll",e);break;case"onScrollEnd":n!=null&&je("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=Vs(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":je("beforetoggle",e),je("toggle",e),Bs(e,"popover",n);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bs(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=kf.get(t)||t,Bs(e,t,n))}}function Wr(e,a,t,n,s,i){switch(t){case"style":Fc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof n=="string"?Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&Mn(e,""+n);break;case"onScroll":n!=null&&je("scroll",e);break;case"onScrollEnd":n!=null&&je("scrollend",e);break;case"onClick":n!=null&&(e.onclick=rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(s=t.endsWith("Capture"),a=t.slice(2,s?t.length-7:void 0),i=e[ne]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,s),typeof n=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,s);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Bs(e,t,n)}}}function ca(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",e),je("load",e);var n=!1,s=!1,i;for(i in t)if(t.hasOwnProperty(i)){var l=t[i];if(l!=null)switch(i){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:_e(e,a,i,l,t,null)}}s&&_e(e,a,"srcSet",t.srcSet,t,null),n&&_e(e,a,"src",t.src,t,null);return;case"input":je("invalid",e);var p=i=l=s=null,v=null,q=null;for(n in t)if(t.hasOwnProperty(n)){var L=t[n];if(L!=null)switch(n){case"name":s=L;break;case"type":l=L;break;case"checked":v=L;break;case"defaultChecked":q=L;break;case"value":i=L;break;case"defaultValue":p=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,a));break;default:_e(e,a,n,L,t,null)}}Kc(e,i,p,v,q,l,s,!1);return;case"select":je("invalid",e),n=l=i=null;for(s in t)if(t.hasOwnProperty(s)&&(p=t[s],p!=null))switch(s){case"value":i=p;break;case"defaultValue":l=p;break;case"multiple":n=p;default:_e(e,a,s,p,t,null)}a=i,t=l,e.multiple=!!n,a!=null?Cn(e,!!n,a,!1):t!=null&&Cn(e,!!n,t,!0);return;case"textarea":je("invalid",e),i=s=n=null;for(l in t)if(t.hasOwnProperty(l)&&(p=t[l],p!=null))switch(l){case"value":n=p;break;case"defaultValue":s=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:_e(e,a,l,p,t,null)}$c(e,n,s,i);return;case"option":for(v in t)t.hasOwnProperty(v)&&(n=t[v],n!=null)&&(v==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":_e(e,a,v,n,t,null));return;case"dialog":je("beforetoggle",e),je("toggle",e),je("cancel",e),je("close",e);break;case"iframe":case"object":je("load",e);break;case"video":case"audio":for(n=0;n<cs.length;n++)je(cs[n],e);break;case"image":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"embed":case"source":case"link":je("error",e),je("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in t)if(t.hasOwnProperty(q)&&(n=t[q],n!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:_e(e,a,q,n,t,null)}return;default:if(dl(a)){for(L in t)t.hasOwnProperty(L)&&(n=t[L],n!==void 0&&Wr(e,a,L,n,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null&&_e(e,a,p,n,t,null))}function $h(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,l=null,p=null,v=null,q=null,L=null;for(M in t){var H=t[M];if(t.hasOwnProperty(M)&&H!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=H;default:n.hasOwnProperty(M)||_e(e,a,M,null,n,H)}}for(var A in n){var M=n[A];if(H=t[A],n.hasOwnProperty(A)&&(M!=null||H!=null))switch(A){case"type":i=M;break;case"name":s=M;break;case"checked":q=M;break;case"defaultChecked":L=M;break;case"value":l=M;break;case"defaultValue":p=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,a));break;default:M!==H&&_e(e,a,A,M,n,H)}}cl(e,l,p,v,q,L,i,s);return;case"select":M=l=p=A=null;for(i in t)if(v=t[i],t.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":M=v;default:n.hasOwnProperty(i)||_e(e,a,i,null,n,v)}for(s in n)if(i=n[s],v=t[s],n.hasOwnProperty(s)&&(i!=null||v!=null))switch(s){case"value":A=i;break;case"defaultValue":p=i;break;case"multiple":l=i;default:i!==v&&_e(e,a,s,i,n,v)}a=p,t=l,n=M,A!=null?Cn(e,!!t,A,!1):!!n!=!!t&&(a!=null?Cn(e,!!t,a,!0):Cn(e,!!t,t?[]:"",!1));return;case"textarea":M=A=null;for(p in t)if(s=t[p],t.hasOwnProperty(p)&&s!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:_e(e,a,p,null,n,s)}for(l in n)if(s=n[l],i=t[l],n.hasOwnProperty(l)&&(s!=null||i!=null))switch(l){case"value":A=s;break;case"defaultValue":M=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==i&&_e(e,a,l,s,n,i)}Jc(e,A,M);return;case"option":for(var te in t)A=t[te],t.hasOwnProperty(te)&&A!=null&&!n.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:_e(e,a,te,null,n,A));for(v in n)A=n[v],M=t[v],n.hasOwnProperty(v)&&A!==M&&(A!=null||M!=null)&&(v==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":_e(e,a,v,A,n,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in t)A=t[re],t.hasOwnProperty(re)&&A!=null&&!n.hasOwnProperty(re)&&_e(e,a,re,null,n,A);for(q in n)if(A=n[q],M=t[q],n.hasOwnProperty(q)&&A!==M&&(A!=null||M!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,a));break;default:_e(e,a,q,A,n,M)}return;default:if(dl(a)){for(var Ge in t)A=t[Ge],t.hasOwnProperty(Ge)&&A!==void 0&&!n.hasOwnProperty(Ge)&&Wr(e,a,Ge,void 0,n,A);for(L in n)A=n[L],M=t[L],!n.hasOwnProperty(L)||A===M||A===void 0&&M===void 0||Wr(e,a,L,A,n,M);return}}for(var N in t)A=t[N],t.hasOwnProperty(N)&&A!=null&&!n.hasOwnProperty(N)&&_e(e,a,N,null,n,A);for(H in n)A=n[H],M=t[H],!n.hasOwnProperty(H)||A===M||A==null&&M==null||_e(e,a,H,A,n,M)}function Pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var s=t[n],i=s.transferSize,l=s.initiatorType,p=s.duration;if(i&&p&&Pp(l)){for(l=0,p=s.responseEnd,n+=1;n<t.length;n++){var v=t[n],q=v.startTime;if(q>p)break;var L=v.transferSize,H=v.initiatorType;L&&Pp(H)&&(v=v.responseEnd,l+=L*(v<p?1:(p-q)/(v-q)))}if(--n,a+=8*(i+l)/(s.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fr=null,Pr=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ec(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ac=null;function Fh(){var e=window.event;return e&&e.type==="popstate"?e===ac?!1:(ac=e,!0):(ac=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(e){return nm.resolve(null).then(e).catch(ag)}:tm;function ag(e){setTimeout(function(){throw e})}function Jt(e){return e==="head"}function om(e,a){var t=a,n=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(s),co(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")ds(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ds(t);for(var i=t.firstChild;i;){var l=i.nextSibling,p=i.nodeName;i[Ct]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=l}}else t==="body"&&ds(e.ownerDocument.body);t=s}while(t);co(a)}function sm(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function tc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":tc(t),Nn(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function tg(e,a,t,n){for(;e.nodeType===1;){var s=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ct])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Qa(e.nextSibling),e===null)break}return null}function ng(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qa(e.nextSibling),e===null))return null;return e}function im(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qa(e.nextSibling),e===null))return null;return e}function nc(e){return e.data==="$?"||e.data==="$~"}function oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function og(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var sc=null;function lm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Qa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function rm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function cm(e,a,t){switch(a=Gi(t),e){case"html":if(e=a.documentElement,!e)throw Error(c(452));return e;case"head":if(e=a.head,!e)throw Error(c(453));return e;case"body":if(e=a.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ds(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Nn(e)}var Xa=new Map,um=new Set;function Hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var St=z.d;z.d={f:sg,r:ig,D:lg,C:rg,L:cg,m:ug,X:pg,S:dg,M:mg};function sg(){var e=St.f(),a=Ai();return e||a}function ig(e){var a=qn(e);a!==null&&a.tag===5&&a.type==="form"?Ed(a):St.r(e)}var io=typeof document>"u"?null:document;function dm(e,a,t){var n=io;if(n&&typeof a=="string"&&a){var s=_a(a);s='link[rel="'+e+'"][href="'+s+'"]',typeof t=="string"&&(s+='[crossorigin="'+t+'"]'),um.has(s)||(um.add(s),e={rel:e,crossOrigin:t,href:a},n.querySelector(s)===null&&(a=n.createElement("link"),ca(a,"link",e),oa(a),n.head.appendChild(a)))}}function lg(e){St.D(e),dm("dns-prefetch",e,null)}function rg(e,a){St.C(e,a),dm("preconnect",e,a)}function cg(e,a,t){St.L(e,a,t);var n=io;if(n&&e&&a){var s='link[rel="preload"][as="'+_a(a)+'"]';a==="image"&&t&&t.imageSrcSet?(s+='[imagesrcset="'+_a(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(s+='[imagesizes="'+_a(t.imageSizes)+'"]')):s+='[href="'+_a(e)+'"]';var i=s;switch(a){case"style":i=lo(e);break;case"script":i=ro(e)}Xa.has(i)||(e=S({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Xa.set(i,e),n.querySelector(s)!==null||a==="style"&&n.querySelector(ps(i))||a==="script"&&n.querySelector(ms(i))||(a=n.createElement("link"),ca(a,"link",e),oa(a),n.head.appendChild(a)))}}function ug(e,a){St.m(e,a);var t=io;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",s='link[rel="modulepreload"][as="'+_a(n)+'"][href="'+_a(e)+'"]',i=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ro(e)}if(!Xa.has(i)&&(e=S({rel:"modulepreload",href:e},a),Xa.set(i,e),t.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ms(i)))return}n=t.createElement("link"),ca(n,"link",e),oa(n),t.head.appendChild(n)}}}function dg(e,a,t){St.S(e,a,t);var n=io;if(n&&e){var s=Tn(n).hoistableStyles,i=lo(e);a=a||"default";var l=s.get(i);if(!l){var p={loading:0,preload:null};if(l=n.querySelector(ps(i)))p.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Xa.get(i))&&ic(e,t);var v=l=n.createElement("link");oa(v),ca(v,"link",e),v._p=new Promise(function(q,L){v.onload=q,v.onerror=L}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Bi(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:p},s.set(i,l)}}}function pg(e,a){St.X(e,a);var t=io;if(t&&e){var n=Tn(t).hoistableScripts,s=ro(e),i=n.get(s);i||(i=t.querySelector(ms(s)),i||(e=S({src:e,async:!0},a),(a=Xa.get(s))&&lc(e,a),i=t.createElement("script"),oa(i),ca(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(s,i))}}function mg(e,a){St.M(e,a);var t=io;if(t&&e){var n=Tn(t).hoistableScripts,s=ro(e),i=n.get(s);i||(i=t.querySelector(ms(s)),i||(e=S({src:e,async:!0,type:"module"},a),(a=Xa.get(s))&&lc(e,a),i=t.createElement("script"),oa(i),ca(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(s,i))}}function pm(e,a,t,n){var s=(s=ue.current)?Hi(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=lo(t.href),t=Tn(s).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=lo(t.href);var i=Tn(s).hoistableStyles,l=i.get(e);if(l||(s=s.ownerDocument||s,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=s.querySelector(ps(e)))&&!i._p&&(l.instance=i,l.state.loading=5),Xa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Xa.set(e,t),i||fg(s,e,t,l.state))),a&&n===null)throw Error(c(528,""));return l}if(a&&n!==null)throw Error(c(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ro(t),t=Tn(s).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function lo(e){return'href="'+_a(e)+'"'}function ps(e){return'link[rel="stylesheet"]['+e+"]"}function mm(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function fg(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ca(a,"link",t),oa(a),e.head.appendChild(a))}function ro(e){return'[src="'+_a(e)+'"]'}function ms(e){return"script[async]"+e}function fm(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+_a(t.href)+'"]');if(n)return a.instance=n,oa(n),n;var s=S({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),oa(n),ca(n,"style",s),Bi(n,t.precedence,e),a.instance=n;case"stylesheet":s=lo(t.href);var i=e.querySelector(ps(s));if(i)return a.state.loading|=4,a.instance=i,oa(i),i;n=mm(t),(s=Xa.get(s))&&ic(n,s),i=(e.ownerDocument||e).createElement("link"),oa(i);var l=i;return l._p=new Promise(function(p,v){l.onload=p,l.onerror=v}),ca(i,"link",n),a.state.loading|=4,Bi(i,t.precedence,e),a.instance=i;case"script":return i=ro(t.src),(s=e.querySelector(ms(i)))?(a.instance=s,oa(s),s):(n=t,(s=Xa.get(i))&&(n=S({},t),lc(n,s)),e=e.ownerDocument||e,s=e.createElement("script"),oa(s),ca(s,"link",n),e.head.appendChild(s),a.instance=s);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Bi(n,t.precedence,e));return a.instance}function Bi(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,i=s,l=0;l<n.length;l++){var p=n[l];if(p.dataset.precedence===a)i=p;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ic(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function lc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ri=null;function hm(e,a,t){if(Ri===null){var n=new Map,s=Ri=new Map;s.set(t,n)}else s=Ri,n=s.get(t),n||(n=new Map,s.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),s=0;s<t.length;s++){var i=t[s];if(!(i[Ct]||i[U]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(a)||"";l=e+l;var p=n.get(l);p?p.push(i):n.set(l,[i])}}return n}function gm(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function hg(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gg(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=lo(n.href),i=a.querySelector(ps(s));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Yi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,oa(i);return}i=a.ownerDocument||a,n=mm(n),(s=Xa.get(s))&&ic(n,s),i=i.createElement("link"),oa(i);var l=i;l._p=new Promise(function(p,v){l.onload=p,l.onerror=v}),ca(i,"link",n),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Yi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var rc=0;function bg(e,a){return e.stylesheets&&e.count===0&&Qi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&Qi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&rc===0&&(rc=62500*Wh());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>rc?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(s)}}:null}function Yi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vi=null;function Qi(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vi=new Map,a.forEach(vg,e),Vi=null,Yi.call(e))}function vg(e,a){if(!(a.state.loading&4)){var t=Vi.get(e);if(t)var n=t.get(null);else{t=new Map,Vi.set(e,t);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var l=s[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}s=a.instance,l=s.getAttribute("data-precedence"),i=t.get(l)||n,i===n&&t.set(null,s),t.set(l,s),this.count++,n=Yi.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),a.state.loading|=4}}var fs={$$typeof:ee,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function xg(e,a,t,n,s,i,l,p,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function vm(e,a,t,n,s,i,l,p,v,q,L,H){return e=new xg(e,a,t,l,v,q,L,H,p),a=1,i===!0&&(a|=24),i=Na(3,null,null,a),e.current=i,i.stateNode=e,a=Rl(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:t,cache:a},Xl(i),e}function xm(e){return e?(e=Hn,e):Hn}function ym(e,a,t,n,s,i){s=xm(s),n.context===null?n.context=s:n.pendingContext=s,n=Gt(a),n.payload={element:t},i=i===void 0?null:i,i!==null&&(n.callback=i),t=Ht(e,n,a),t!==null&&(ja(t,e,a),Io(t,e,a))}function wm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function cc(e,a){wm(e,a),(e=e.alternate)&&wm(e,a)}function jm(e){if(e.tag===13||e.tag===31){var a=un(e,67108864);a!==null&&ja(a,e,67108864),cc(e,67108864)}}function km(e){if(e.tag===13||e.tag===31){var a=Ca();a=qo(a);var t=un(e,a);t!==null&&ja(t,e,a),cc(e,a)}}var Xi=!0;function yg(e,a,t,n){var s=T.T;T.T=null;var i=z.p;try{z.p=2,uc(e,a,t,n)}finally{z.p=i,T.T=s}}function wg(e,a,t,n){var s=T.T;T.T=null;var i=z.p;try{z.p=8,uc(e,a,t,n)}finally{z.p=i,T.T=s}}function uc(e,a,t,n){if(Xi){var s=dc(n);if(s===null)$r(e,a,n,Ii,t),zm(e,n);else if(kg(s,e,a,t,n))n.stopPropagation();else if(zm(e,n),a&4&&-1<jg.indexOf(e)){for(;s!==null;){var i=qn(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=it(i.pendingLanes);if(l!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;l;){var v=1<<31-fa(l);p.entanglements[1]|=v,l&=~v}at(i),(De&6)===0&&(qi=ma()+500,rs(0))}}break;case 31:case 13:p=un(i,2),p!==null&&ja(p,i,2),Ai(),cc(i,2)}if(i=dc(n),i===null&&$r(e,a,n,Ii,t),i===s)break;s=i}s!==null&&n.stopPropagation()}else $r(e,a,n,null,t)}}function dc(e){return e=ml(e),pc(e)}var Ii=null;function pc(e){if(Ii=null,e=En(e),e!==null){var a=h(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=j(a),e!==null)return e;e=null}else if(t===31){if(e=f(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Ii=e,null}function Sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(As()){case Cs:return 2;case Ms:return 8;case tn:case Ne:return 32;case Da:return 268435456;default:return 32}default:return 32}}var mc=!1,$t=null,Wt=null,Ft=null,hs=new Map,gs=new Map,Pt=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zm(e,a){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(a.pointerId)}}function bs(e,a,t,n,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[s]},a!==null&&(a=qn(a),a!==null&&jm(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,s!==null&&a.indexOf(s)===-1&&a.push(s),e)}function kg(e,a,t,n,s){switch(a){case"focusin":return $t=bs($t,e,a,t,n,s),!0;case"dragenter":return Wt=bs(Wt,e,a,t,n,s),!0;case"mouseover":return Ft=bs(Ft,e,a,t,n,s),!0;case"pointerover":var i=s.pointerId;return hs.set(i,bs(hs.get(i)||null,e,a,t,n,s)),!0;case"gotpointercapture":return i=s.pointerId,gs.set(i,bs(gs.get(i)||null,e,a,t,n,s)),!0}return!1}function Nm(e){var a=En(e.target);if(a!==null){var t=h(a);if(t!==null){if(a=t.tag,a===13){if(a=j(t),a!==null){e.blockedOn=a,Hs(e.priority,function(){km(t)});return}}else if(a===31){if(a=f(t),a!==null){e.blockedOn=a,Hs(e.priority,function(){km(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=dc(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);pl=n,t.target.dispatchEvent(n),pl=null}else return a=qn(t),a!==null&&jm(a),e.blockedOn=t,!1;a.shift()}return!0}function Em(e,a,t){Zi(e)&&t.delete(a)}function Sg(){mc=!1,$t!==null&&Zi($t)&&($t=null),Wt!==null&&Zi(Wt)&&(Wt=null),Ft!==null&&Zi(Ft)&&(Ft=null),hs.forEach(Em),gs.forEach(Em)}function Ki(e,a){e.blockedOn===a&&(e.blockedOn=null,mc||(mc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sg)))}var Ji=null;function qm(e){Ji!==e&&(Ji=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],s=e[a+2];if(typeof n!="function"){if(pc(n||t)===null)continue;break}var i=qn(t);i!==null&&(e.splice(a,3),a-=3,dr(i,{pending:!0,data:s,method:t.method,action:n},n,s))}}))}function co(e){function a(v){return Ki(v,e)}$t!==null&&Ki($t,e),Wt!==null&&Ki(Wt,e),Ft!==null&&Ki(Ft,e),hs.forEach(a),gs.forEach(a);for(var t=0;t<Pt.length;t++){var n=Pt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Pt.length&&(t=Pt[0],t.blockedOn===null);)Nm(t),t.blockedOn===null&&Pt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var s=t[n],i=t[n+1],l=s[ne]||null;if(typeof i=="function")l||qm(t);else if(l){var p=null;if(i&&i.hasAttribute("formAction")){if(s=i,l=i[ne]||null)p=l.formAction;else if(pc(s)!==null)continue}else p=l.action;typeof p=="function"?t[n+1]=p:(t.splice(n,3),n-=3),qm(t)}}}function Tm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return s=l})},focusReset:"manual",scroll:"manual"})}function a(){s!==null&&(s(),s=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),s!==null&&(s(),s=null)}}}function fc(e){this._internalRoot=e}$i.prototype.render=fc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));var t=a.current,n=Ca();ym(t,n,e,a,null,null)},$i.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;ym(e.current,2,null,e,null,null),Ai(),a[fe]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var a=Gs();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Pt.length&&a!==0&&a<Pt[t].priority;t++);Pt.splice(t,0,e),t===0&&Nm(e)}};var Am=d.version;if(Am!=="19.2.5")throw Error(c(527,Am,"19.2.5"));z.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(a),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var zg={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{st=Wi.inject(zg),$e=Wi}catch{}}return xs.createRoot=function(e,a){if(!m(e))throw Error(c(299));var t=!1,n="",s=_d,i=Gd,l=Hd;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=vm(e,1,!1,null,null,t,n,null,s,i,l,Tm),e[fe]=a.current,Jr(e),new fc(a)},xs.hydrateRoot=function(e,a,t){if(!m(e))throw Error(c(299));var n=!1,s="",i=_d,l=Gd,p=Hd,v=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(v=t.formState)),a=vm(e,1,!0,a,t??null,n,s,v,i,l,p,Tm),a.context=xm(null),t=a.current,n=Ca(),n=qo(n),s=Gt(n),s.callback=null,Ht(t,s,n),t=n,a.current.lanes=t,on(a,t),at(a),e[fe]=a.current,Jr(e),new $i(a)},xs.version="19.2.5",xs}var Bm;function Og(){if(Bm)return bc.exports;Bm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),bc.exports=Lg(),bc.exports}var _g=Og();function Gg(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const r="/Learn-Spanish/";navigator.serviceWorker.register(`${r}sw.js`,{scope:r}).then(d=>{function u(c){window.dispatchEvent(new CustomEvent("learn-spanish-update-ready",{detail:{worker:c}}))}d.waiting&&navigator.serviceWorker.controller&&u(d.waiting),d.addEventListener("updatefound",()=>{const c=d.installing;c&&c.addEventListener("statechange",()=>{c.state==="installed"&&navigator.serviceWorker.controller&&u(c)})})}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.__learnSpanishRefreshing||(window.__learnSpanishRefreshing=!0,window.location.reload())})})}const Hg="modulepreload",Bg=function(r){return"/Learn-Spanish/"+r},Rm={},Rg=function(d,u,c){let m=Promise.resolve();if(u&&u.length>0){let y=function(x){return Promise.all(x.map(S=>Promise.resolve(S).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};var j=y;document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),b=f?.nonce||f?.getAttribute("nonce");m=y(u.map(x=>{if(x=Bg(x),x in Rm)return;Rm[x]=!0;const S=x.endsWith(".css"),C=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${C}`))return;const D=document.createElement("link");if(D.rel=S?"stylesheet":Hg,S||(D.as="script"),D.crossOrigin="",D.href=x,b&&D.setAttribute("nonce",b),document.head.appendChild(D),S)return new Promise((Z,Y)=>{D.addEventListener("load",Z),D.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${x}`)))})}))}function h(f){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=f,window.dispatchEvent(b),!b.defaultPrevented)throw f}return m.then(f=>{for(const b of f||[])b.status==="rejected"&&h(b.reason);return d().catch(h)})};const Yg=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pm=(...r)=>r.filter((d,u,c)=>!!d&&d.trim()!==""&&c.indexOf(d)===u).join(" ").trim();var Vg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Qg=_.forwardRef(({color:r="currentColor",size:d=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:m="",children:h,iconNode:j,...f},b)=>_.createElement("svg",{ref:b,...Vg,width:d,height:d,stroke:r,strokeWidth:c?Number(u)*24/Number(d):u,className:Pm("lucide",m),...f},[...j.map(([y,x])=>_.createElement(y,x)),...Array.isArray(h)?h:[h]]));const He=(r,d)=>{const u=_.forwardRef(({className:c,...m},h)=>_.createElement(Qg,{ref:h,iconNode:d,className:Pm(`lucide-${Yg(r)}`,c),...m}));return u.displayName=`${r}`,u};const Dc=He("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Xg=He("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const xo=He("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const Ig=He("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const Uc=He("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const wo=He("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const Zg=He("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const go=He("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const ol=He("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Lc=He("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const ef=He("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const af=He("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);const bo=He("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const Kg=He("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const jo=He("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const Jg=He("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const $g=He("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Wg=He("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const Oc=He("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const tf=He("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);const _c=He("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Fg=He("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const yo=He("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Fi=He("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const Pi=He("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Ec=He("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const Nt=He("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const qc=He("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function al(r,d={}){typeof window>"u"||window.dispatchEvent(new CustomEvent("learn-spanish-message",{detail:{id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,title:d.title||"Notice",message:r,tone:d.tone||"info",timeout:d.timeout||5200}}))}function Pg(){const[r,d]=_.useState([]);return _.useEffect(()=>{function u(c){const m=c.detail||{};m.message&&(d(h=>[m,...h].slice(0,3)),m.timeout!==1/0&&window.setTimeout(()=>{d(h=>h.filter(j=>j.id!==m.id))},m.timeout||5200))}return window.addEventListener("learn-spanish-message",u),()=>window.removeEventListener("learn-spanish-message",u)},[]),r.length?o.jsx("div",{className:"app-message-stack","aria-live":"polite","aria-atomic":"false",children:r.map(u=>o.jsxs("div",{className:`app-message app-message-${u.tone||"info"}`,children:[o.jsxs("div",{children:[o.jsx("span",{className:"app-message-title",children:u.title}),o.jsx("p",{children:u.message})]}),o.jsx("button",{type:"button",className:"app-message-close",onClick:()=>d(c=>c.filter(m=>m.id!==u.id)),"aria-label":"Dismiss message",children:o.jsx(Nt,{size:14})})]},u.id))}):null}const eb=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],ab={id:"tiempos-compuestos-indicativo",level:"B1-B2",title:"Tiempos Compuestos del Indicativo",subtitle:"haber + participio para acciones completadas",intro:"Compound tenses in the indicative present completed actions as facts: something has happened, had happened, will have happened, or would have happened. The engine is always the same: haber changes, the participle stays fixed.",blocks:[{type:"indicative-hero",eyebrow:"Gramática Española · Nivel B1-B2",title:"Tiempos Compuestos del Indicativo",text:"Compound tenses are formed with the auxiliary verb haber plus a past participle. They express actions completed before a reference point in time.",formula:["haber conjugado","+","participio pasado","=","tiempo compuesto"],tags:["6 tiempos","haber + participio","perfecto · pluscuamperfecto · futuro · condicional"]},{type:"indicative-tense-cards",title:"Los 6 tiempos compuestos",cards:[{tone:"green",title:"Pretérito Perfecto",english:"Present perfect",use:"An action completed recently or connected to the present. Often used with hoy, esta semana, ya, todavía no.",forms:[["yo","he hablado"],["tú","has comido"],["él / ella","ha vivido"],["nosotros","hemos llegado"],["vosotros","habéis visto"],["ellos","han hecho"]],example:{es:"Ya he terminado el informe.",en:"I have already finished the report."}},{tone:"red",title:"Pretérito Pluscuamperfecto",english:"Past perfect / pluperfect",use:"An action completed before another past action. This is the past of the past.",forms:[["yo","había hablado"],["tú","habías comido"],["él / ella","había vivido"],["nosotros","habíamos llegado"],["vosotros","habíais salido"],["ellos","habían visto"]],example:{es:"Cuando llegué, ella ya había salido.",en:"When I arrived, she had already left."}},{tone:"teal",title:"Futuro Compuesto",english:"Future perfect",use:"An action that will have been completed before a future point. It can also express probability about the past.",forms:[["yo","habré hablado"],["tú","habrás comido"],["él / ella","habrá vivido"],["nosotros","habremos llegado"],["vosotros","habréis terminado"],["ellos","habrán vuelto"]],example:{es:"Para el lunes, habré enviado el contrato.",en:"By Monday, I will have sent the contract."}},{tone:"purple",title:"Condicional Compuesto",english:"Conditional perfect",use:"An action that would have happened under different circumstances. It often pairs with si + pluscuamperfecto de subjuntivo.",forms:[["yo","habría hablado"],["tú","habrías comido"],["él / ella","habría vivido"],["nosotros","habríamos ido"],["vosotros","habríais dicho"],["ellos","habrían hecho"]],example:{es:"Si hubiera estudiado, habría aprobado.",en:"If I had studied, I would have passed."}},{tone:"gold",title:"Pretérito Anterior",english:"Past anterior, literary",use:"An action completed immediately before another past action. Mostly literary or formal written Spanish after cuando, apenas, en cuanto, no bien.",forms:[["yo","hube hablado"],["tú","hubiste comido"],["él / ella","hubo vivido"],["nosotros","hubimos llegado"],["vosotros","hubisteis salido"],["ellos","hubieron visto"]],example:{es:"Apenas hubo llegado, empezó a hablar.",en:"He had barely arrived when he began to speak."}},{tone:"navy",title:"Condicional vía subjuntivo",english:"Spoken alternative",use:"In spoken Spanish, hubiera/hubiese + participio is often used like the conditional perfect, especially in Latin America.",forms:[["yo","hubiera ido"],["tú","hubieras comido"],["él / ella","hubiera dicho"],["nosotros","hubiéramos llegado"],["vosotros","hubierais hecho"],["ellos","hubieran visto"]],example:{es:"Yo hubiera venido antes. (= habría venido)",en:"I would have come earlier."}}]},{type:"participio-section",title:"El participio pasado",text:"The past participle is the second element of every compound tense. In these compound tenses it is invariable: it does not change for gender or number.",regular:[["-AR verbs","→ -ado"],["hablar","hablado"],["trabajar","trabajado"],["-ER / -IR verbs","→ -ido"],["comer","comido"],["vivir","vivido"]],irregular:[["abrir","abierto"],["decir","dicho"],["escribir","escrito"],["hacer","hecho"],["morir","muerto"],["poner","puesto"],["romper","roto"],["ver","visto"],["volver","vuelto"]]},{type:"indicative-timeline",title:"Timeline visual",events:[{label:"Pluscuam.",sub:"past of past",position:8,lane:"top",tone:"red"},{label:"Anterior",sub:"just before past",position:23,lane:"top",tone:"gold"},{label:"Perfecto",sub:"connects to now",position:40,lane:"bottom",tone:"green"},{label:"Ahora",sub:"reference point",position:50,lane:"now",tone:"ink"},{label:"Fut. compuesto",sub:"will have done",position:68,lane:"top",tone:"teal"},{label:"Cond. comp.",sub:"would have done",position:86,lane:"top",tone:"purple"}]},{type:"tips-grid",tips:[{title:"The haber/adverb rule",text:"In compound tenses, nothing goes between haber and the participle. Say Ya he comido, not He ya comido."},{title:"Spain vs. Latin America",text:"In Spain, pretérito perfecto is common for recent past. In most of Latin America, speakers often prefer the simple pretérito: comí, salí, terminé."}]},{type:"choice-quiz",title:"Quiz: tiempos compuestos del indicativo",questions:[{prompt:"Cuando llegué, ella ya ___.",choices:["ha salido","había salido","habrá salido","habría salido"],answer:"había salido",explanation:"Pluscuamperfecto: había salido. The action was completed before another past action."},{prompt:"Hoy ___ el contrato.",choices:["había firmado","habré firmado","he firmado","hube firmado"],answer:"he firmado",explanation:"Pretérito perfecto: he firmado. A recent action connected to the present."},{prompt:"Para mañana, nosotros ___ todo.",choices:["habíamos terminado","habremos terminado","hemos terminado","habríamos terminado"],answer:"habremos terminado",explanation:"Futuro compuesto: habremos terminado. The action will be completed before a future deadline."},{prompt:"Yo ___ la casa, pero no tenía dinero.",choices:["habría comprado","había comprado","he comprado","habré comprado"],answer:"habría comprado",explanation:"Condicional compuesto: habría comprado. It describes what would have happened under different conditions."},{prompt:"Apenas ___ la carta, salió corriendo.",choices:["había leído","ha leído","hubo leído","habría leído"],answer:"hubo leído",explanation:"Pretérito anterior: hubo leído. A literary form for an action immediately before another past event."},{prompt:"¿Alguna vez ___ en México?",choices:["habías estado","has estado","habrás estado","hube estado"],answer:"has estado",explanation:"Pretérito perfecto: has estado. It is used for life experience connected to the present."},{prompt:"Dijo que no ___ la notificación.",choices:["ha recibido","habrá recibido","habría recibido","había recibido"],answer:"había recibido",explanation:"Pluscuamperfecto: había recibido. The receiving would have happened before the reported past statement."}]}]},tb={id:"tiempos-compuestos",level:"B1-B2",title:"Tiempos compuestos",subtitle:"Pretérito perfecto y pluscuamperfecto de subjuntivo",intro:"This lesson is about completed actions inside the subjunctive world: emotion, doubt, desire, negation, and unreal conditions. The action is finished, but the sentence does not present it as a plain fact.",blocks:[{type:"subjunctive-hero",eyebrow:"Regla central",title:"El subjuntivo compuesto nunca camina solo.",accent:"Siempre aparece provocado por una idea principal.",points:["It is always triggered by another clause or expression.","It usually lives in a subordinate clause after que or si.","It shows a completed action seen through emotion, doubt, desire, denial, or hypothesis."],formula:"trigger + que/si + haber en subjuntivo + participio"},{type:"golden-rule",title:"Golden rule",text:"Never use these forms alone as the main message. They signal that a subordinate action was completed before another viewpoint.",examples:[{bad:"Haya terminado el informe.",good:"Me alegra que haya terminado el informe."},{bad:"Hubiera sabido la verdad.",good:"Ojalá hubiera sabido la verdad."}]},{type:"subjunctive-tense-cards",cards:[{tone:"plum",title:"Pretérito Perfecto de Subjuntivo",english:"Present perfect subjunctive",formula:"haya / hayas / haya / hayamos / hayáis / hayan + participio",use:"Use it when the main clause is present or future, and the subordinate action is already complete or must be complete by a future point.",mainClause:"present / future main clause",forms:[["yo","haya hablado"],["tú","hayas comido"],["él / ella","haya vivido"],["nosotros","hayamos terminado"],["vosotros","hayáis visto"],["ellos","hayan hecho"]],examples:[{es:"Me alegra que hayas venido.",en:"I am glad that you came / have come."},{es:"Dudo que hayan firmado el contrato.",en:"I doubt that they have signed the contract."},{es:"Necesito que lo hayas revisado antes del lunes.",en:"I need you to have reviewed it before Monday."}]},{tone:"rose",title:"Pretérito Pluscuamperfecto de Subjuntivo",english:"Past perfect subjunctive",formula:"hubiera/hubiese + participio",use:"Use it with past or conditional main clauses, regrets, past doubts, and unreal si clauses. Hubiera and hubiese mean the same thing here.",mainClause:"past / conditional / si clause",forms:[["yo","hubiera / hubiese hablado"],["tú","hubieras / hubieses comido"],["él / ella","hubiera / hubiese vivido"],["nosotros","hubiéramos / hubiésemos terminado"],["vosotros","hubierais / hubieseis visto"],["ellos","hubieran / hubiesen hecho"]],examples:[{es:"No creía que hubieras leído todo.",en:"I did not believe that you had read everything."},{es:"Ojalá hubiera sabido la verdad.",en:"I wish I had known the truth."},{es:"Si hubiéramos salido antes, habríamos llegado a tiempo.",en:"If we had left earlier, we would have arrived on time."}]}]},{type:"trigger-grid",heading:"Trigger expressions",text:"Do not memorize the tense alone. Memorize the doorway that opens it.",categories:[{title:"Emotion",trigger:"me alegra que, me sorprende que, siento que",examples:[{es:"Me alegra que hayas entendido la explicación.",en:"I am glad you understood the explanation."},{es:"Me sorprendió que hubieran aceptado tan rápido.",en:"It surprised me that they had accepted so quickly."}]},{title:"Doubt / negation",trigger:"dudo que, no creo que, no parece que",examples:[{es:"No creo que ella haya mentido.",en:"I do not think she has lied."},{es:"No parecía que hubieran preparado nada.",en:"It did not seem that they had prepared anything."}]},{title:"Desire / wish",trigger:"quiero que, espero que, ojalá",examples:[{es:"Espero que hayas descansado bien.",en:"I hope you rested well."},{es:"Ojalá hubiéramos hablado antes.",en:"I wish we had spoken earlier."}]},{title:"Hypothetical si clauses",trigger:"si + pluscuamperfecto de subjuntivo",examples:[{es:"Si me hubieras llamado, habría venido.",en:"If you had called me, I would have come."},{es:"Si hubiesen revisado el contrato, no habrían firmado.",en:"If they had reviewed the contract, they would not have signed."}]}]},{type:"lesson-section",heading:"Perfecto vs. pluscuamperfecto",text:"Choose the tense by looking at the main clause. Present or future frame usually points to haya hablado. Past, conditional, regret, or unreal si frame points to hubiera/hubiese hablado.",table:{headers:["Question","Perfecto de subjuntivo","Pluscuamperfecto de subjuntivo"],rows:[["Main clause time","present or future","past or conditional"],["Formula","haya + participio","hubiera / hubiese + participio"],["Meaning","has done / did / will have done","had done / would have done in an unreal past"],["Common triggers","me alegra que, dudo que, espero que","no creía que, ojalá, si"],["Example","Dudo que haya salido.","Dudaba que hubiera salido."]]}},{type:"conditional-pattern",heading:"Conditional irreal: the pattern you must own",formula:"Si + hubiera/hubiese + participio, habría + participio",text:"This is the most important structure in the whole lesson. The si clause names the impossible past condition; the conditional perfect names the result that did not happen.",examples:[{es:"Si hubiera estudiado más, habría aprobado el examen.",en:"If I had studied more, I would have passed the exam.",note:"Condition did not happen: I did not study enough."},{es:"Si me hubieras avisado, habría preparado los documentos.",en:"If you had warned me, I would have prepared the documents.",note:"The warning did not happen, so the preparation did not happen."},{es:"Si hubiésemos salido temprano, no habríamos perdido el tren.",en:"If we had left early, we would not have missed the train.",note:"Hubiésemos is the same value as hubiéramos: more formal or literary in many places."}]},{type:"tips-grid",tips:[{title:"Hubiera vs. hubiese",text:"Both forms are correct. Hubiera is more common in everyday Spanish. Hubiese sounds a little more formal, literary, or careful, depending on the country."},{title:"The special behavior of ojalá",text:"Ojalá can point to different time frames: ojalá haya llegado means I hope he has arrived; ojalá hubiera llegado means I wish he had arrived, but he probably did not."}]},{type:"choice-quiz",title:"Quiz: completed actions in subjunctive frames",questions:[{prompt:"Me alegra que tú ___ a tiempo.",choices:["hayas llegado","hubieras llegado","has llegado","habrías llegado"],answer:"hayas llegado",explanation:"Me alegra que is a present emotion trigger, so use pretérito perfecto de subjuntivo: hayas llegado."},{prompt:"No creía que ellos ___ el mensaje.",choices:["hayan recibido","hubieran recibido","han recibido","habrán recibido"],answer:"hubieran recibido",explanation:"No creía is a past doubt/negation frame, so the prior completed action uses pluscuamperfecto de subjuntivo."},{prompt:"Espero que nosotros ___ todo antes de mañana.",choices:["hayamos terminado","hubiéramos terminado","hemos terminado","habíamos terminado"],answer:"hayamos terminado",explanation:"Espero que looks forward from the present to a completed future deadline: hayamos terminado."},{prompt:"Si me lo ___, te habría ayudado.",choices:["hayas dicho","hubieras dicho","has dicho","habrías dicho"],answer:"hubieras dicho",explanation:"Si + unreal past condition requires pluscuamperfecto de subjuntivo: hubieras dicho."},{prompt:"Dudo que Ana ___ la verdad.",choices:["haya dicho","hubiera dicho","ha dicho","había dicho"],answer:"haya dicho",explanation:"Dudo que is a present doubt trigger, so use haya + participio."},{prompt:"Ojalá ___ más temprano.",choices:["hayamos salido","hubiéramos salido","hemos salido","habremos salido"],answer:"hubiéramos salido",explanation:"With ojalá, pluscuamperfecto often expresses regret about the past: I wish we had left earlier."},{prompt:"Era imposible que vosotros ___ eso solos.",choices:["hayáis hecho","hubierais hecho","habéis hecho","habríais hecho"],answer:"hubierais hecho",explanation:"Era imposible is a past evaluative trigger, so use pluscuamperfecto de subjuntivo."},{prompt:"Necesito que usted lo ___ antes del lunes.",choices:["haya revisado","hubiera revisado","ha revisado","habría revisado"],answer:"haya revisado",explanation:"Necesito que is a present desire/requirement trigger. The task must be completed before a future point: haya revisado."}]}]},nb={soy:["ser"],eres:["ser"],es:["ser"],somos:["ser"],son:["ser"],fui:["ser","ir"],fuiste:["ser","ir"],fue:["ser","ir"],fuimos:["ser","ir"],fueron:["ser","ir"],era:["ser"],eras:["ser"],eramos:["ser"],eran:["ser"],estoy:["estar"],estas:["estar"],esta:["estar"],estamos:["estar"],estan:["estar"],estuve:["estar"],estuvo:["estar"],estuvieron:["estar"],tengo:["tener"],tienes:["tener"],tiene:["tener"],tenemos:["tener"],tienen:["tener"],tuve:["tener"],tuvo:["tener"],tuvieron:["tener"],voy:["ir"],vas:["ir"],va:["ir"],vamos:["ir"],van:["ir"],iba:["ir"],ibas:["ir"],iban:["ir"],puedo:["poder"],puedes:["poder"],puede:["poder"],podemos:["poder"],pueden:["poder"],pude:["poder"],pudo:["poder"],pudieron:["poder"],quiero:["querer"],quieres:["querer"],quiere:["querer"],queremos:["querer"],quieren:["querer"],quise:["querer"],quiso:["querer"],hago:["hacer"],haces:["hacer"],hace:["hacer"],hacemos:["hacer"],hacen:["hacer"],hice:["hacer"],hizo:["hacer"],hicieron:["hacer"],digo:["decir"],dices:["decir"],dice:["decir"],decimos:["decir"],dicen:["decir"],dije:["decir"],dijo:["decir"],dijeron:["decir"],veo:["ver"],ves:["ver"],ve:["ver"],vemos:["ver"],ven:["ver"],vi:["ver"],vio:["ver"],vieron:["ver"],vengo:["venir"],vienes:["venir"],viene:["venir"],vienen:["venir"],vine:["venir"],vino:["venir"],vinieron:["venir"],pongo:["poner"],pones:["poner"],pone:["poner"],ponen:["poner"],puse:["poner"],puso:["poner"],pusieron:["poner"],salgo:["salir"],sales:["salir"],sale:["salir"],salen:["salir"],se:["saber","ser"],sabe:["saber"],saben:["saber"],supe:["saber"],supo:["saber"],dijeron:["decir"],doy:["dar"],das:["dar"],da:["dar"],dan:["dar"],di:["dar","decir"],dio:["dar"],dieron:["dar"]},ob=new Set(["si","sí","tu","tú","el","él","mi","mí","te","té","se","sé","de","dé","mas","más","esta","está"]),Ym={si:{main:"if",pos:"conjunction",source:"Local dictionary",stored:!0},sí:{main:"yes",pos:"affirmation",source:"Local dictionary",stored:!0},tu:{main:"your",pos:"possessive adjective",source:"Local dictionary",stored:!0},tú:{main:"you",pos:"subject pronoun",source:"Local dictionary",stored:!0},el:{main:"the",pos:"article",source:"Local dictionary",stored:!0},él:{main:"he",pos:"subject pronoun",source:"Local dictionary",stored:!0},mi:{main:"my",pos:"possessive adjective",source:"Local dictionary",stored:!0},mí:{main:"me",pos:"prepositional pronoun",source:"Local dictionary",stored:!0},te:{main:"you / to you",pos:"object pronoun",source:"Local dictionary",stored:!0},té:{main:"tea",pos:"noun",source:"Local dictionary",stored:!0},se:{main:"himself / herself / themselves",pos:"reflexive pronoun",source:"Local dictionary",stored:!0},sé:{main:"I know",pos:"verb form of saber",source:"Local dictionary",stored:!0},de:{main:"of / from",pos:"preposition",source:"Local dictionary",stored:!0},dé:{main:"give",pos:"subjunctive/command form of dar",source:"Local dictionary",stored:!0},mas:{main:"but",pos:"formal conjunction",source:"Local dictionary",stored:!0},más:{main:"more",pos:"adverb",source:"Local dictionary",stored:!0},esta:{main:"this",pos:"demonstrative adjective",source:"Local dictionary",stored:!0},está:{main:"is",pos:"verb form of estar",source:"Local dictionary",stored:!0}};function Gc(r){return String(r||"").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã¼/g,"ü").replace(/Â¡/g,"¡").replace(/Â¿/g,"¿").trim().replace(/^[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+|[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+$/gu,"").trim().toLowerCase()}function tl(r){return Et(r).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Et(r){return Gc(r).replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function sb(r,d,u,c){if(!d.endsWith(u)||d.length<=u.length+1)return;const m=d.slice(0,-u.length);c.forEach(h=>r.add(`${m}${h}`))}function sl(r){const d=Et(r),u=tl(r),c=ob.has(d),m=new Set(c?[d]:[d,u]);if(!u)return[];if(c)return[...m].filter(Boolean);for(const h of nb[u]||[])m.add(h);return u.endsWith("ces")&&u.length>5&&m.add(`${u.slice(0,-3)}z`),u.endsWith("es")&&u.length>4&&m.add(u.slice(0,-2)),u.endsWith("s")&&u.length>3&&m.add(u.slice(0,-1)),u.endsWith("as")&&u.length>4&&(m.add(u.slice(0,-1)),m.add(`${u.slice(0,-2)}o`)),u.endsWith("os")&&u.length>4&&m.add(u.slice(0,-1)),u.endsWith("a")&&u.length>3&&m.add(`${u.slice(0,-1)}o`),[["amos",["ar"]],["ando",["ar"]],["ado",["ar"]],["aste",["ar"]],["aron",["ar"]],["aba",["ar"]],["abas",["ar"]],["abamos",["ar"]],["aban",["ar"]],["arian",["ar"]],["aria",["ar"]],["are",["ar"]],["aras",["ar"]],["ara",["ar"]],["as",["ar"]],["an",["ar"]],["a",["ar"]],["e",["ar"]],["o",["ar"]],["emos",["er"]],["iendo",["er","ir"]],["ido",["er","ir"]],["iste",["er","ir"]],["ieron",["er","ir"]],["ia",["er","ir"]],["ias",["er","ir"]],["iamos",["er","ir"]],["ian",["er","ir"]],["eria",["er"]],["irian",["ir"]],["iria",["ir"]],["ere",["er"]],["ire",["ir"]],["es",["er","ir"]],["en",["er","ir"]],["e",["er","ir"]],["imos",["ir"]],["io",["er","ir"]],["i",["er","ir"]],["o",["er","ir"]]].forEach(([h,j])=>sb(m,u,h,j)),[...m].filter(Boolean)}function Vm(r){return r.topicTerm||r.spanish}function ib(r){return r.topicEnglish||r.english}function Qm(r,d=[],u=[]){const c=Et(r),m=new Set(sl(r)),h=d.find(j=>Et(j.word)===c)||d.find(j=>m.has(tl(j.word)));if(h)return{main:h.translation||"Saved in Memoria",extras:h.extras||[],pos:h.pos||"Memoria",source:"Memoria",stored:!0,matchedWord:h.word};for(const j of u||[])for(const f of j.entries||[]){const b=[f.spanish,f.topicTerm,Vm(f)];if(b.some(y=>Et(y)===c)||b.some(y=>m.has(tl(y))))return{main:ib(f),extras:f.topicEnglish&&f.topicEnglish!==f.english?[f.english].filter(Boolean):[],pos:j.title||f.sourceGroupTitle||"Palabras",source:"Palabras",stored:!0,matchedWord:Vm(f)}}return null}async function nf(r){const d=[],u=Gc(r),c=Et(u);if(Ym[c])return{...Ym[c],matchedWord:c};const m=[...new Set([u,...sl(u)])].filter(Boolean).slice(0,4),h=b=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(b):void 0;async function j(b){const y=encodeURIComponent(b);try{const x=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${y}&src=es&dst=en`,{signal:h(3500)});if(x.ok){const S=await x.json();if(Array.isArray(S)&&S.length>0){const C=S[0],D=C?.translations?.[0]?.text?.trim();if(D){const Z=(C.translations||[]).slice(1,5).map(W=>W.text?.trim()).filter(Boolean),Y=[];for(const W of C.translations||[]){for(const V of W.examples||[])V.src&&V.dst&&Y.length<2&&Y.push({es:V.src,en:V.dst});if(Y.length>=2)break}return{main:D,extras:Z,pos:C.pos||C.translations?.[0]?.pos||"",examples:Y,source:"Linguee",matchedWord:b}}}}else d.push(`Linguee ${b}: HTTP ${x.status}`)}catch(x){d.push(`Linguee ${b}: ${x.message}`)}try{const x=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${y}&pretty=true`,{signal:h(3500)});if(x.ok){const C=(await x.json())?.tuc||[],D=C.map(Y=>Y?.phrase?.text?.trim()).filter(Boolean),Z=C.flatMap(Y=>(Y?.meanings||[]).map(W=>W?.text?.trim())).filter(Boolean);if(D.length>0){const Y=D[0],W=D.slice(1,5).filter(V=>V.toLowerCase()!==Y.toLowerCase());return{main:Y,extras:W,pos:"",meanings:Z.slice(0,3),source:"Glosbe",matchedWord:b}}}else d.push(`Glosbe ${b}: HTTP ${x.status}`)}catch(x){d.push(`Glosbe ${b}: ${x.message}`)}try{const x=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${y}`,{signal:h(3500)});if(x.ok){const S=await x.json();if(Array.isArray(S)&&S.length>0){const D=S[0]?.meanings?.[0],Z=D?.definitions?.[0]?.definition?.trim();if(Z)return{main:Z,extras:[],pos:D?.partOfSpeech||"",source:"Diccionario",isDefinition:!0,matchedWord:b}}}else d.push(`FreeDict ${b}: HTTP ${x.status}`)}catch(x){d.push(`FreeDict ${b}: ${x.message}`)}return null}for(const b of m){const y=await j(b);if(y)return y}const f=encodeURIComponent(u);try{const b=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${f}`,{signal:h(4e3)});if(b.ok){const x=(await b.json())?.sentences?.[0]?.trans?.trim();if(x&&x.toLowerCase()!==u.toLowerCase())return{main:x,extras:[],pos:"",source:"Google"}}}catch(b){d.push(`Google: ${b.message}`)}try{const b=await fetch(`https://api.mymemory.translated.net/get?q=${f}&langpair=es|en`,{signal:h(4e3)});if(b.ok){const x=(await b.json())?.responseData?.translatedText?.trim();if(x&&x.toLowerCase()!==u.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(x))return{main:x,extras:[],pos:"",source:"MyMemory"}}}catch(b){d.push(`MyMemory: ${b.message}`)}return d.length&&console.warn("Lookup failed for",r,d),null}const lb=1440*60*1e3,rb="learner-profile-v1";function zt(r){return String(r||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function cb(r,d,u=Date.now()){const c=r?.intervalDays||0,m=r?.ease||2.35,h=r?.reps||0,j={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:h?2:1,multiplier:m},easy:{label:"Easy",easeDelta:.12,minDays:h?4:3,multiplier:m+.7}}[d]||{label:"Good",easeDelta:0,minDays:1,multiplier:m},f=Math.max(1.35,Math.min(3.2,m+j.easeDelta)),b=d==="again"?j.minDays:Math.max(j.minDays,(c||1)*j.multiplier);return{...r,ease:f,intervalDays:b,dueAt:u+b*lb,reps:d==="again"?0:h+1,lapses:d==="again"?(r?.lapses||0)+1:r?.lapses||0,seen:!0,mastered:d==="easy"||b>=7,lastRating:j.label,reviewedAt:u}}function ub(r){const d=[r.title,r.heading,r.text];for(const u of r.paragraphs||[])d.push(u);for(const u of r.pairs||[])d.push(u.es,u.en);for(const u of r.columns||[])d.push(u.es,u.en);for(const u of r.phrases||[])d.push(u.es,u.en);for(const u of r.words||[])d.push(u.es,u.en);for(const u of r.lessons||[]){d.push(u.title,u.subtitle,u.intro);for(const c of u.sections||[]){d.push(c.heading,c.text,c.tip,c.takeaway);for(const m of c.table?.rows||[])d.push(...m);for(const m of c.examples||[])d.push(m.es,m.en)}}for(const u of r.stories||[])d.push(u.title,u.level,...u.paragraphs||[]);for(const u of r.bios||[]){d.push(u.title,u.subtitle,u.dates);for(const c of u.levels||[])d.push(c.heading,...c.paragraphs||[],c.vocab)}for(const u of r.poems||[]){d.push(u.title,u.attribution,u.note,u.opening,u.learningNote);for(const c of u.stanzas||[])d.push(c.es,c.en);for(const c of u.vocab||[])d.push(c.es,c.en)}for(const u of r.songs||[]){d.push(u.title,u.attribution,u.note,u.learningNote);for(const c of u.sections||[])d.push(c.label,c.es,c.en);for(const c of u.vocab||[])d.push(c.es,c.en)}return d.filter(Boolean).join(" ")}function db(r,d,u=[],c=[]){const m=zt(r);if(m.length<2)return[];const h=[];for(const f of d||[]){const b=[f.title,f.subtitle,f.intro,f.sectionLabel,f.level].filter(Boolean).join(" ");zt(b).includes(m)&&h.push({type:"chapter",title:f.title,meta:`${f.sectionLabel} - ${f.level}`,chapter:f,context:f.subtitle||f.intro||""});for(const y of f.blocks||[]){const x=ub(y);zt(x).includes(m)&&h.push({type:"match",title:f.title,meta:`${f.sectionLabel} - match inside lesson`,chapter:f,context:Xm(x,r)})}}for(const f of u||[]){const b=[f.word,f.translation,f.pos,...f.tags||[]].join(" ");zt(b).includes(m)&&h.push({type:"memoria",title:f.word,meta:f.translation||"Memoria",context:(f.tags||[]).join(", ")})}for(const f of c||[]){const b=[f.prompt,f.text].join(" ");zt(b).includes(m)&&h.push({type:"writing",title:"Writing entry",meta:new Date(f.createdAt||Date.now()).toLocaleDateString(),context:Xm(b,r)})}const j=new Set;return h.filter(f=>{const b=`${f.type}:${f.title}:${f.context}`;return j.has(b)?!1:(j.add(b),!0)}).slice(0,18)}function Xm(r,d){const u=String(r||"").replace(/\s+/g," ").trim(),c=zt(d),m=u.toLowerCase().indexOf(String(d||"").toLowerCase());if(m>=0)return u.slice(Math.max(0,m-45),m+95).trim();let h="";const j=[];for(let x=0;x<u.length;x++){const S=u[x].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"");if(S)for(const C of S)h+=C,j.push(x)}const f=h.indexOf(c);if(f<0)return u.slice(0,120);const b=j[Math.max(0,f-45)]??0,y=j[Math.min(j.length-1,f+c.length+95)]??u.length;return u.slice(b,y).trim()}function pb(r,d={}){const u=String(r||""),c=zt(u),m=u.trim()?u.trim().split(/\s+/).length:0,h=u.split(/[.!?]+/).map(ee=>ee.trim()).filter(Boolean),j=(u.match(/[.!?]/g)||[]).length||(h.length?1:0),f=(u.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,b=(u.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi)||[]).length,y=(u.match(/\b(soy|eres|es|somos|son|estoy|estas|está|esta|estamos|estan|están|tengo|tienes|tiene|tenemos|tienen|quiero|quieres|quiere|puedo|puedes|puede|voy|vas|va|vamos|van|hago|haces|hace|digo|dices|dice|veo|ves|ve|vivo|vives|vive|trabajo|trabajas|trabaja|estudio|estudias|estudia|fui|fue|era|tenia|tenía|hablo|hablas|habla|aprendo|aprendes|aprende)\b/gi)||[]).length,x=d?.target?sl(d.target).map(zt):[],S=d?.target?x.some(ee=>c.includes(ee)):!0,C=(u.match(/\b(the|and|but|because|with|from|about|today|question|answer|write|spanish)\b/gi)||[]).length,D=(u.match(/\b(tambien|ademas|tenia|dias|mas|esta|si|tu|el)\b/gi)||[]).length,Z=(u.match(/\b(el|la|los|las|un|una|yo|tu|tú|usted|nosotros|porque|pero|que|de|con|para|por|en|mi|mis|su|sus|muy|mas|más|tambien|también)\b/gi)||[]).length,Y=h.map(ee=>zt(ee).split(" ")[0]).filter(Boolean).reduce((ee,K,le,de)=>ee+(le>0&&K===de[le-1]?1:0),0),W=h.filter(ee=>ee.split(/\s+/).filter(Boolean).length>28).length,V=[];m<20&&V.push("Add more detail."),j<2&&V.push("Use at least two complete sentences."),S||V.push("Use the prompt word or idea."),f===0&&V.push("Check accents when needed."),D>0&&V.push("Look for missing accents: también, además, tenía, días, más, está, sí, tú, él."),C>0&&V.push("Replace the English words with Spanish before saving."),b<1&&m>=20&&V.push("Add a connector like porque, aunque, or entonces."),y<2&&m>=15&&V.push("Use more conjugated verbs."),Z<3&&m>=12&&V.push("Make it sound more Spanish with small glue words: que, de, en, para, por, con."),Y>0&&V.push("Vary how your sentences begin."),W>0&&V.push("Split one long sentence into two clearer sentences."),m>=35&&j>=3&&b>=1&&C===0&&D===0&&V.push("Strong draft. Next: try one sentence in a different tense.");const J=Math.max(0,Math.min(100,20+Math.min(m,60)+Math.min(j*8,20)+Math.min(b*6,12)+Math.min(y*4,16)+Math.min(Z*2,10)+(S?10:-10)-Math.min(C*8,24)-Math.min(D*3,12)-Math.min(Y*4,8)-Math.min(W*5,10)));return{words:m,sentences:j,accents:f,connectors:b,verbs:y,targetUsed:S,likelyEnglish:C,accentCandidates:D,spanishSignals:Z,repeatedStarts:Y,longSentences:W,tips:V,score:J}}function mb({chapters:r=[],visitedChapters:d=[],lessonStatuses:u={},palabrasProgress:c={},savedWords:m=[],writingEntries:h=[]}={},j=Date.now()){const f=Object.values(u||{}),b=Object.values(c||{}),y=m.map(S=>S.review).filter(Boolean),x=[...b,...y];return{chapters:{total:r.length,visited:r.filter(S=>d.includes(S.id)).length,unvisited:Math.max(0,r.length-r.filter(S=>d.includes(S.id)).length)},lessons:{read:f.filter(S=>S==="read"||S==="understood").length,understood:f.filter(S=>S==="understood").length},vocabulary:{seen:x.filter(S=>S?.seen).length,due:x.filter(S=>S?.seen&&(S.dueAt||0)<=j).length,mastered:x.filter(S=>S?.mastered).length,difficult:m.filter(S=>S.difficult||S.review?.lastRating==="Hard").length,favorite:m.filter(S=>S.favorite).length},writing:{count:h.length,words:h.reduce((S,C)=>S+(C.feedback?.words||0),0),needsPractice:h.filter(S=>(S.feedback?.score||0)<70).length}}}function fb({chapters:r=[],lessonStatuses:d={},palabrasProgress:u={},savedWords:c=[],writingEntries:m=[]}={},h=Date.now()){const j=[];for(const f of Object.values(u||{}))f?.seen&&((f.dueAt||0)<=h||f.lastRating==="Hard")&&j.push({type:"palabra",title:f.spanish||"Palabra",detail:f.english||f.lastRating||"",dueAt:f.dueAt||h,priority:f.lastRating==="Again"?3:f.lastRating==="Hard"?2:1});for(const f of c||[]){const b=f.review?.seen&&(f.review?.dueAt||0)<=h;(b||f.difficult||!f.translation)&&j.push({type:"memoria",title:f.word,detail:f.translation||"Needs translation",dueAt:f.review?.dueAt||h,priority:f.difficult?3:b?2:1})}for(const[f,b]of Object.entries(d||{}))if(b==="read"){const y=f.split("::").pop()||f;j.push({type:"lesson",title:y,detail:"Mark understood after review",dueAt:h,priority:1})}for(const f of m||[])((f.feedback?.score||0)<70||f.feedback?.tips?.length)&&j.push({type:"writing",title:f.prompt||"Writing practice",detail:(f.feedback?.tips||[])[0]||"Rewrite once",dueAt:f.createdAt||h,priority:1});if(j.length<6){for(const f of r||[])if(f.alwaysVisible||j.push({type:"chapter",title:f.title,detail:`${f.sectionLabel} - ${f.level}`,chapter:f,dueAt:h+j.length,priority:0}),j.length>=6)break}return j.sort((f,b)=>b.priority-f.priority||(f.dueAt||0)-(b.dueAt||0)).slice(0,24)}const hb=["A1","A2","B1","B2"],Im="lesson-status-v1",wc="audio-settings-v1",Tc="writing-practice-v1",jc="translation-mode-v1",ys="study-time-v1",kc="google-drive-client-id-v1",of="learn-spanish-sync.json",gb="https://www.googleapis.com/auth/drive.appdata",bb={tiempos:ol,verbos:qc,verbos2:qc,gramatica:Jg,lectura:Kg,vocabulario:Xg,palabras:ef,frases:Wg,tips:jo,resumen:Lc};function sf({id:r,size:d=18,className:u=""}){const c=bb[r]||Dc;return o.jsx(c,{size:d,className:u})}const ws=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]},ab,tb]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:eb},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"f1",level:"A1",title:"Saludos y Cortesía",subtitle:"The first words you need",intro:"These are the phrases that open every conversation. Learn them by ear, repeat them out loud, and use them at every chance.",blocks:[{type:"phraselist",phrases:[{es:"Hola, ¿qué tal?",en:"Hi, how are you?"},{es:"Buenos días.",en:"Good morning."},{es:"Buenas tardes.",en:"Good afternoon."},{es:"Buenas noches.",en:"Good evening / good night."},{es:"Mucho gusto.",en:"Pleased to meet you."},{es:"Encantado / encantada.",en:"Delighted (to meet you)."},{es:"¿Cómo te llamas?",en:"What is your name?"},{es:"Me llamo Othman.",en:"My name is Othman."},{es:"¿De dónde eres?",en:"Where are you from?"},{es:"Soy de Marruecos.",en:"I am from Morocco."},{es:"Por favor.",en:"Please."},{es:"Gracias. — De nada.",en:"Thank you. — You are welcome."},{es:"Perdón. / Disculpe.",en:"Sorry. / Excuse me."},{es:"Hasta luego.",en:"See you later."},{es:"Hasta mañana.",en:"See you tomorrow."}]},{type:"takeaway",text:"These twenty phrases are the entry door. Repeat each one ten times before moving on. They will be the foundation of every spoken interaction."}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function vb(r){const d=[];let u="",c="normal";for(let m=0;m<r.length;m++){const h=r[m];h==="["?(u&&d.push({text:u,mode:c}),u="",c="irreg"):h==="]"?(u&&d.push({text:u,mode:"irreg"}),u="",c="normal"):h==="{"?(u&&d.push({text:u,mode:c}),u="",c="ending"):h==="}"?(u&&d.push({text:u,mode:"ending"}),u="",c="normal"):u+=h}return u&&d.push({text:u,mode:c}),d}function ka({raw:r}){return o.jsx(o.Fragment,{children:vb(r).map((d,u)=>{const c=d.mode==="irreg"?"irreg":d.mode==="ending"?"ending":"";return o.jsx("span",{className:c,children:d.text},u)})})}function po(r){return String(r||"").replace(/[\[\]{}]/g,"")}function Ma(r){return String(r||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function xb({tenses:r,verbName:d}){const[u,c]=_.useState(!1),[m,h]=_.useState([]),[j,f]=_.useState(0),[b,y]=_.useState(""),[x,S]=_.useState(null),[C,D]=_.useState(0),[Z,Y]=_.useState(!1);function W(){const oe=[];for(const xe of r)for(const F of xe.forms||[])oe.push({tense:xe.name,pronoun:F.p,answer:po(F.f)});const ae=[...oe].sort(()=>Math.random()-.5);return ae.slice(0,Math.min(8,ae.length))}function V(){h(W()),f(0),y(""),S(null),D(0),Y(!1),c(!0)}function J(oe){if(oe&&oe.preventDefault(),x)return;const ae=m[j],xe=Ma(b)===Ma(ae.answer);S(xe?"correct":"incorrect"),xe&&D(F=>F+1)}function ee(){if(j+1>=m.length){Y(!0);return}f(oe=>oe+1),y(""),S(null)}function K(){window.speechSynthesis?.cancel(),c(!1)}const le=m[j],de=m.length;return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"quiz-trigger-btn",onClick:V,children:[o.jsx(yo,{size:14}),"Practicar"]}),u&&o.jsx("div",{className:"quiz-overlay",onClick:K,children:o.jsxs("div",{className:"quiz-modal",onClick:oe=>oe.stopPropagation(),children:[o.jsxs("header",{className:"quiz-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),o.jsx("h2",{className:"quiz-title",children:d})]}),o.jsx("button",{className:"quiz-close",onClick:K,"aria-label":"Close",children:o.jsx(Nt,{size:18})})]}),Z?o.jsxs("div",{className:"quiz-results",children:[o.jsxs("div",{className:"quiz-results-circle",children:[o.jsxs("div",{className:"quiz-results-pct",children:[Math.round(C/de*100),"%"]}),o.jsxs("div",{className:"quiz-results-fraction",children:[C," / ",de]})]}),o.jsx("h3",{className:"quiz-results-title",children:C===de?"¡Perfecto!":C>=de*.75?"Muy bien":C>=de*.5?"Sigue practicando":"Vamos a repasar"}),o.jsx("p",{className:"quiz-results-msg",children:C===de?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":C>=de*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),o.jsxs("div",{className:"quiz-results-actions",children:[o.jsxs("button",{className:"quiz-retry-btn",onClick:V,children:[o.jsx(_c,{size:14}),"Otra vez"]}),o.jsx("button",{className:"quiz-done-btn",onClick:K,children:"Cerrar"})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"quiz-progress",children:[o.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",j+1," de ",de]}),o.jsx("div",{className:"quiz-progress-bar",children:o.jsx("div",{className:"quiz-progress-fill",style:{width:`${j/de*100}%`}})})]}),o.jsxs("div",{className:"quiz-question",children:[o.jsx("div",{className:"quiz-tense-label",children:le.tense}),o.jsxs("div",{className:"quiz-prompt",children:[o.jsx("span",{className:"quiz-pronoun",children:le.pronoun}),o.jsx("span",{className:"quiz-blank",children:"________"})]}),o.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",o.jsx("em",{children:d.toLowerCase()})," para esta persona."]})]}),o.jsxs("form",{onSubmit:J,className:"quiz-form",children:[o.jsx("input",{type:"text",className:`quiz-input ${x||""}`,value:b,onChange:oe=>y(oe.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!x}),!x&&o.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!b.trim(),children:"Comprobar"})]}),x&&o.jsxs("div",{className:`quiz-feedback ${x}`,children:[x==="correct"?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"quiz-feedback-icon",children:o.jsx(Uc,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),o.jsx("div",{className:"quiz-feedback-answer",children:le.answer})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"quiz-feedback-icon",children:o.jsx(Nt,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),o.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",o.jsx("strong",{children:le.answer})]})]})]}),o.jsx(ta,{text:le.answer,size:"md",className:"quiz-feedback-speak"})]}),x&&o.jsxs("button",{className:"quiz-next-btn",onClick:ee,children:[j+1>=de?"Ver resultados":"Siguiente",o.jsx(go,{size:16})]}),o.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",o.jsx("strong",{children:C})," / ",j+(x?1:0)]})]})]})})]})}function Sc(r){return[...r].sort(()=>Math.random()-.5)}function lf(r){const d=[];function u(h,j){if(!h||!j)return;const f=po(String(h)).trim(),b=String(j).trim();f.length<2||b.length<2||d.push({es:f,en:b})}for(const h of r?.sections||[]){for(const j of h.examples||[])u(j.es,j.en);for(const j of h.table?.rows||[])j?.[0]&&j?.[1]&&u(j[1],`${j[0]} form`)}for(const h of r?.blocks||[]){for(const j of h.pairs||[])u(j.es,j.en);for(const j of h.columns||[])u(j.es,j.en);for(const j of h.phrases||[])u(j.es,j.en);for(const j of h.words||[])u(j.es,j.en);for(const j of h.lessons||[])for(const f of lf(j))u(f.es,f.en)}const c=[],m=new Set;for(const h of d){const j=Ma(h.es);m.has(j)||(m.add(j),c.push(h))}return c}function yb(r){const d=lf(r);return d.length<2?[]:Sc(d).slice(0,Math.min(4,d.length)).map((c,m)=>{const h=m%2===0,j=h?c.es:c.en,f=Sc(d).filter(b=>b!==c).map(b=>h?b.es:b.en).filter(b=>Ma(b)!==Ma(j)).slice(0,3);return{prompt:h?c.en:c.es,answer:j,speak:c.es,mode:h?"Elige el espanol":"Elige la traduccion",choices:Sc([j,...f]).slice(0,4)}})}function rf({source:r,title:d="Mini practica"}){const u=_.useMemo(()=>yb(r),[r]),[c,m]=_.useState({}),[h,j]=_.useState(!1);if(_.useEffect(()=>{m({}),j(!1)},[r]),u.length<2)return null;const f=Object.keys(c).length,b=u.reduce((y,x,S)=>Ma(c[S])===Ma(x.answer)?y+1:y,0);return o.jsxs("section",{className:"lesson-mini-quiz",children:[o.jsxs("div",{className:"lesson-mini-head",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"lesson-mini-kicker",children:[o.jsx(yo,{size:13})," Practica rapida"]}),o.jsx("h3",{children:d})]}),o.jsxs("button",{className:"lesson-mini-reset",onClick:()=>{m({}),j(!1)},children:[o.jsx(_c,{size:13}),"Reiniciar"]})]}),o.jsx("div",{className:"lesson-mini-list",children:u.map((y,x)=>{const S=c[x],C=S&&Ma(S)===Ma(y.answer);return o.jsxs("div",{className:"lesson-mini-card",children:[o.jsxs("div",{className:"lesson-mini-meta",children:[o.jsx("span",{children:String(x+1).padStart(2,"0")}),o.jsx("em",{children:y.mode}),o.jsx(ta,{text:y.speak})]}),o.jsx("p",{className:"lesson-mini-prompt",children:y.prompt}),o.jsx("div",{className:"lesson-mini-choices",children:y.choices.map(D=>{const Z=S===D;return o.jsx("button",{className:`${Z?"active":""} ${h&&Z?C?"correct":"wrong":""}`,onClick:()=>m(Y=>({...Y,[x]:D})),children:D},D)})}),h&&S&&!C&&o.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",o.jsx("strong",{children:y.answer})]})]},`${y.prompt}-${x}`)})}),o.jsxs("div",{className:"lesson-mini-footer",children:[o.jsxs("span",{children:[f," / ",u.length," respondidas"]}),o.jsx("button",{className:"lesson-mini-check",disabled:f<u.length,onClick:()=>j(!0),children:"Comprobar"}),h&&o.jsxs("strong",{children:[b," / ",u.length]})]})]})}let kn=null,Zm=!1,vo={rate:.85,voiceURI:""};function cf(){return Math.max(.65,Math.min(1.25,Number(vo.rate)||.85))}function ks(r={}){vo={...vo,...r,rate:Math.max(.65,Math.min(1.25,Number(r.rate??vo.rate)||.85))},kn=null}function uf(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function Km(){return uf().filter(r=>r.lang&&r.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(r.name||""))}function mo(){if(typeof window>"u"||!window.speechSynthesis)return null;if(kn)return kn;const r=uf();if(r.length===0)return null;if(vo.voiceURI){const c=r.find(m=>m.voiceURI===vo.voiceURI);if(c)return kn=c,c}const d=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const c of d){const m=r.find(h=>h.lang&&h.lang.toLowerCase().startsWith(c.toLowerCase()));if(m)return kn=m,m}const u=r.find(c=>/spanish|español/i.test(c.name||""));return u?(kn=u,u):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{kn=null,mo()}),mo(),setTimeout(mo,250),setTimeout(mo,1e3));function Hc(){if(!Zm&&!(typeof window>"u"||!window.speechSynthesis))try{const r=new SpeechSynthesisUtterance(" ");r.volume=0,r.rate=1,window.speechSynthesis.speak(r),Zm=!0}catch{}}function Ss(){try{window.speechSynthesis?.cancel(),window.dispatchEvent?.(new CustomEvent("learn-spanish-audio-stop"))}catch{}}function df(r,d={}){if(typeof window>"u"||!window.speechSynthesis||!r)return d.onerror&&d.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(r),c=mo();c&&(u.voice=c),u.lang=c?.lang||"es-ES",u.rate=d.rate??cf(),u.pitch=d.pitch??1,u.volume=1,d.onend&&(u.onend=d.onend),d.onerror&&(u.onerror=j=>{console.warn("[speech] error:",j?.error||"unknown",{text:r.slice(0,30),voice:c?.name}),d.onerror(j)}),d.onboundary&&(u.onboundary=d.onboundary),d.onstart&&(u.onstart=d.onstart),window.speechSynthesis.speak(u);const m=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(m);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),h=u.onend;return u.onend=j=>{clearInterval(m),h&&h(j)},u}catch(u){return console.warn("[speech] threw:",u),d.onerror&&d.onerror({error:u.message}),null}}const Jm=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function pf(r){const d=[],u=String(r||"");let c;for(Jm.lastIndex=0;(c=Jm.exec(u))!==null;)d.push({text:c[0],isWord:!!c[1],charStart:c.index});return d}function ua({text:r}){const d=_.useMemo(()=>pf(r),[r]);return o.jsx(o.Fragment,{children:d.map((u,c)=>u.isWord?o.jsx("span",{className:"dict-word-token","data-dict-word":u.text,children:u.text},c):o.jsx("span",{children:u.text},c))})}function zs({text:r,paragraphClass:d="reading-paragraph",firstParagraph:u=!1}){const c=_.useMemo(()=>pf(r),[r]),m=_.useMemo(()=>{const Y=[];let W="",V=[],J=-1;function ee(){V.length>0&&Y.push({spokenText:W.trim(),words:V}),W="",V=[],J=-1}for(let K=0;K<c.length;K++){const le=c[K];if(!le.isWord&&V.length===0&&/^\s+$/.test(le.text))continue;const de=W.length;W+=le.text,le.isWord?(V.push({tokenIdx:K,text:le.text,charStart:de,charEnd:de+le.text.length,commaAfter:!1}),J=V.length-1):(/,/.test(le.text)&&J>=0&&(V[J].commaAfter=!0),/[.!?;:]/.test(le.text)&&ee())}return ee(),Y},[c]),[h,j]=_.useState(-1),[f,b]=_.useState(!1),y=nt.useRef([]),x=nt.useRef([]),S=nt.useRef(!1),C=nt.useRef(110);function D(){x.current.forEach(clearTimeout),x.current=[]}function Z(Y){if(Y.stopPropagation(),typeof window>"u"||!window.speechSynthesis){al("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(Hc(),f){S.current=!0,Ss(),D(),b(!1),j(-1);return}if(m.length===0)return;Ss(),D(),S.current=!1,b(!0),C.current=110;let W=0;function V(){if(S.current)return;if(W>=m.length){b(!1),j(-1);return}const J=m[W];if(!J||J.words.length===0){W++,V();return}const ee=new SpeechSynthesisUtterance(J.spokenText),K=mo();K&&(ee.voice=K),ee.lang=K?.lang||"es-ES",ee.rate=cf(),ee.pitch=1;let le=!1,de=!1,oe=!1,ae=!1,xe=0;const F=30,pe=200;function Ae(B){const X=Math.max(0,Number(B)||0);let $=J.words[0];for(const g of J.words)if(g.charStart<=X+1)$=g;else break;return $}function qe(){if(ae||oe||S.current)return;ae=!0;let B=0;for(let X=0;X<J.words.length;X++){const $=J.words[X],O=setTimeout(()=>{!S.current&&!oe&&j($.tokenIdx)},B);x.current.push(O),B+=$.text.length*C.current+F,$.commaAfter&&(B+=pe)}}ee.onstart=()=>{if(le)return;le=!0,xe=performance.now();const B=setTimeout(qe,350);x.current.push(B)},ee.onboundary=B=>{if(S.current||typeof B.charIndex!="number")return;const X=Ae(B.charIndex);X&&(oe=!0,j(X.tokenIdx))};const ve=setTimeout(()=>{!le&&!S.current&&(le=!0,xe=performance.now(),qe())},500);x.current.push(ve);function me(){if(de||(de=!0,S.current))return;if(xe>0){const X=performance.now()-xe,$=J.words.reduce((I,P)=>I+P.text.length,0),g=J.words.filter(I=>I.commaAfter).length,O=J.words.length*F+g*pe,Q=Math.max(100,X-O);if($>0){const I=Q/$;I>=40&&I<=300&&(C.current=I*.6+C.current*.4)}}D(),W++;const B=setTimeout(V,30);x.current.push(B)}ee.onend=me,ee.onerror=me;const T=Math.max(5e3,J.spokenText.length*220),z=setTimeout(me,T);x.current.push(z),window.speechSynthesis.speak(ee)}V()}return _.useEffect(()=>{function Y(){S.current=!0,D(),b(!1),j(-1)}return window.addEventListener?.("learn-spanish-audio-stop",Y),()=>{S.current=!0,D(),window.removeEventListener?.("learn-spanish-audio-stop",Y),window.speechSynthesis?.cancel()}},[]),_.useEffect(()=>{if(h<0)return;const Y=y.current[h];if(!Y||typeof Y.getBoundingClientRect!="function")return;const W=Y.getBoundingClientRect(),V=window.innerHeight||document.documentElement.clientHeight;(W.bottom>V-100||W.top<80)&&Y.scrollIntoView({behavior:"smooth",block:"center"})},[h]),typeof window<"u"&&!window.speechSynthesis?o.jsxs("p",{className:d,children:[o.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:Y=>{Y.stopPropagation(),al("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"})},"aria-label":"Audio not supported",title:"Audio no disponible",children:o.jsx(Ec,{size:12})}),o.jsx(ua,{text:r})]}):o.jsxs("p",{className:`${d} karaoke-paragraph ${f?"is-playing":""}`,children:[o.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${f?"playing":""}`,onClick:Z,onPointerDown:Y=>Y.stopPropagation(),"aria-label":f?"Stop":"Play audio with highlighting",title:f?"Detener":"Escuchar con resaltado",children:o.jsx(Ec,{size:12})}),c.map((Y,W)=>{if(!Y.isWord)return o.jsx("span",{className:"kt-space",children:Y.text},W);const V=W===h;return o.jsx("span",{ref:J=>y.current[W]=J,className:`kt-word ${V?"kt-active":""}`,"data-dict-word":Y.text,children:Y.text},W)})]})}function ta({text:r,size:d="sm",className:u=""}){const[c,m]=_.useState(!1);_.useEffect(()=>{function j(){m(!1)}return window.addEventListener?.("learn-spanish-audio-stop",j),()=>window.removeEventListener?.("learn-spanish-audio-stop",j)},[]);function h(j){if(j.stopPropagation(),typeof window>"u"||!window.speechSynthesis){al("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(Hc(),c){Ss(),m(!1);return}Ss(),m(!0),df(r,{onend:()=>m(!1),onerror:f=>{m(!1),f?.error&&f.error!=="canceled"&&f.error!=="interrupted"&&al(`Error al leer: ${f.error}. Asegurate de tener una voz en espanol instalada.`,{title:"Audio necesita atencion",tone:"warning"})}})}return o.jsx("button",{className:`speak-btn speak-btn-${d} ${c?"playing":""} ${u}`,onClick:h,onPointerDown:j=>j.stopPropagation(),"aria-label":c?"Stop":"Play audio",title:c?"Detener":"Escuchar",children:o.jsx(Ec,{size:d==="sm"?12:14})})}function wb({settings:r,onChange:d}){const[u,c]=_.useState(()=>Km());_.useEffect(()=>{ks(r)},[r]),_.useEffect(()=>{function h(){c(Km())}if(h(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",h);const j=setTimeout(h,600);return()=>{clearTimeout(j),window.speechSynthesis.removeEventListener?.("voiceschanged",h)}}},[]);function m(h){const j={...r,...h};ks(j),d?.(j)}return o.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[o.jsxs("div",{className:"audio-settings-label",children:[o.jsx(af,{size:14}),"Audio"]}),o.jsxs("select",{className:"audio-rate-select",value:String(r.rate),onChange:h=>m({rate:Number(h.target.value)}),"aria-label":"Audio speed",children:[o.jsx("option",{value:"0.7",children:"0.70x"}),o.jsx("option",{value:"0.85",children:"0.85x"}),o.jsx("option",{value:"1",children:"1.00x"}),o.jsx("option",{value:"1.15",children:"1.15x"})]}),o.jsxs("select",{className:"audio-voice-select",value:r.voiceURI||"",onChange:h=>m({voiceURI:h.target.value}),"aria-label":"Spanish voice",children:[o.jsx("option",{value:"",children:"Voz espanola"}),u.map(h=>o.jsxs("option",{value:h.voiceURI,children:[h.name," (",h.lang,")"]},h.voiceURI))]})]})}function an({es:r,en:d,esClass:u="vu-ex-es",enClass:c="vu-ex-en"}){const m=(r||"").length,h=(d||"").length;return m<=18&&h<=18&&m+h<=36?o.jsxs("div",{className:`${u} inline-pair`,children:[o.jsx(ta,{text:r}),o.jsx(ua,{text:r})," ",o.jsxs("span",{className:`${c} inline-en`,children:["(",d,")"]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:u,children:[o.jsx(ta,{text:r}),o.jsx(ua,{text:r})]}),o.jsx("div",{className:c,children:d})]})}function jb({s:r}){return o.jsxs("div",{className:"gl-section",children:[r.heading&&o.jsx("h3",{className:"gl-heading",children:r.heading}),r.text&&o.jsx("p",{className:"gl-text",children:o.jsx(ua,{text:r.text})}),r.table&&o.jsx("div",{className:"lesson-table-wrap",children:o.jsxs("table",{className:"lesson-table gl-table",children:[r.table.headers&&o.jsx("thead",{children:o.jsx("tr",{children:r.table.headers.map((d,u)=>o.jsx("th",{children:d},u))})}),o.jsx("tbody",{children:r.table.rows.map((d,u)=>o.jsx("tr",{children:d.map((c,m)=>o.jsx("td",{children:m===0?c:o.jsx(ka,{raw:String(c)})},m))},u))})]})}),r.examples&&o.jsx("ul",{className:"gl-examples",children:r.examples.map((d,u)=>o.jsx("li",{children:o.jsx(an,{es:d.es,en:d.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},u))}),r.tip&&o.jsxs("aside",{className:"gl-tip",children:[o.jsx(jo,{size:16,className:"gl-tip-icon"}),o.jsx("p",{children:r.tip})]}),r.takeaway&&o.jsxs("aside",{className:"gl-takeaway",children:[o.jsxs("div",{className:"gl-takeaway-label",children:[o.jsx(Oc,{size:12})," Lo que te llevas"]}),o.jsx("p",{children:r.takeaway})]})]})}const kb={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function nl({level:r}){const d=kb[r]||{};return o.jsx("span",{className:"bio-level-badge",style:{background:d.bg,color:d.color,borderColor:d.border},children:r})}function Sb({poems:r}){const[d,u]=_.useState(null);function c(m){u(h=>h===m?null:m)}return o.jsx("section",{className:"block foldable-poems",children:r.map((m,h)=>{const j=d===h;return o.jsxs("div",{className:`poem-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"poem-toggle",onClick:()=>c(h),"aria-expanded":j,children:[o.jsxs("div",{className:"poem-toggle-inner",children:[o.jsx("span",{className:"poem-num",children:String(h+1).padStart(2,"0")}),o.jsxs("div",{className:"poem-toggle-text",children:[o.jsx("span",{className:"poem-title-line",children:m.title}),o.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),o.jsxs("div",{className:"poem-toggle-right",children:[o.jsx("span",{className:"poem-level-tag",children:m.level}),o.jsx(wo,{size:18,className:`poem-chevron ${j?"open":""}`})]})]}),j&&o.jsxs("div",{className:"poem-body",children:[m.note&&o.jsx("p",{className:"poem-intro-note",children:m.note}),m.opening&&o.jsxs("blockquote",{className:"poem-opening-quote",children:[o.jsx(ta,{text:m.opening,size:"md",className:"poem-quote-speak"}),m.opening]}),o.jsxs("div",{className:"poem-tools",children:[o.jsx(ta,{text:m.stanzas.map(f=>f.es).join(". "),size:"md"}),o.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),o.jsx("div",{className:"poem-stanzas",children:m.stanzas.map((f,b)=>o.jsxs("div",{className:"poem-stanza",children:[o.jsx("div",{className:"poem-stanza-num",children:b+1}),o.jsx(zs,{text:f.es,paragraphClass:"poem-stanza-es"}),o.jsx("div",{className:"poem-stanza-en",children:f.en})]},b))}),m.vocab&&m.vocab.length>0&&o.jsxs("div",{className:"poem-vocab-block",children:[o.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),o.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((f,b)=>o.jsxs("div",{className:"poem-vocab-row",children:[o.jsx("span",{className:"poem-vocab-es",children:f.es}),o.jsx("span",{className:"poem-vocab-dash",children:"—"}),o.jsx("span",{className:"poem-vocab-en",children:f.en})]},b))})]}),m.learningNote&&o.jsxs("aside",{className:"poem-learning-note",children:[o.jsxs("div",{className:"poem-learning-label",children:[o.jsx(jo,{size:14})," Nota de lectura"]}),o.jsx("p",{children:m.learningNote})]})]})]},h)})})}function zb({songs:r}){const[d,u]=_.useState(null);function c(m){u(h=>h===m?null:m)}return o.jsx("section",{className:"block foldable-poems foldable-songs",children:r.map((m,h)=>{const j=d===h,f=m.sections.map(b=>b.es).join(". ");return o.jsxs("div",{className:`poem-item song-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"poem-toggle",onClick:()=>c(h),"aria-expanded":j,children:[o.jsxs("div",{className:"poem-toggle-inner",children:[o.jsx("span",{className:"poem-num",children:String(h+1).padStart(2,"0")}),o.jsxs("div",{className:"poem-toggle-text",children:[o.jsx("span",{className:"poem-title-line",children:m.title}),o.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),o.jsxs("div",{className:"poem-toggle-right",children:[o.jsx("span",{className:"poem-level-tag",children:m.level}),o.jsx(wo,{size:18,className:`poem-chevron ${j?"open":""}`})]})]}),j&&o.jsxs("div",{className:"poem-body song-body",children:[o.jsx("p",{className:"poem-intro-note",children:m.note}),o.jsxs("div",{className:"poem-tools",children:[o.jsx(ta,{text:f,size:"md"}),o.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),o.jsx("div",{className:"song-sections",children:m.sections.map((b,y)=>o.jsxs("div",{className:"song-section",children:[o.jsxs("div",{className:"song-section-label",children:[String(y+1).padStart(2,"0")," · ",b.label]}),o.jsxs("div",{className:"song-section-grid",children:[o.jsx(zs,{text:b.es,paragraphClass:"song-lyric-es"}),o.jsx("p",{className:"song-lyric-en",children:b.en})]})]},b.label))}),m.vocab&&m.vocab.length>0&&o.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[o.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),o.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((b,y)=>o.jsxs("div",{className:"poem-vocab-row",children:[o.jsx("span",{className:"poem-vocab-es",children:b.es}),o.jsx("span",{className:"poem-vocab-dash",children:"—"}),o.jsx("span",{className:"poem-vocab-en",children:b.en})]},y))})]}),m.learningNote&&o.jsxs("aside",{className:"poem-learning-note",children:[o.jsxs("div",{className:"poem-learning-label",children:[o.jsx(jo,{size:14})," Nota de canción"]}),o.jsx("p",{children:m.learningNote})]})]})]},m.title)})})}function Nb({bios:r}){const[d,u]=_.useState(null);function c(m){u(h=>h===m?null:m)}return o.jsx("section",{className:"block foldable-bios",children:r.map((m,h)=>{const j=d===h;return o.jsxs("div",{className:`bio-item ${j?"open":"closed"}`,children:[o.jsxs("button",{className:"bio-toggle",onClick:()=>c(h),"aria-expanded":j,children:[o.jsxs("div",{className:"bio-toggle-left",children:[o.jsx("span",{className:"bio-num",children:String(h+1).padStart(2,"0")}),o.jsxs("div",{className:"bio-toggle-text",children:[o.jsx("span",{className:"bio-name",children:m.title}),o.jsx("span",{className:"bio-subtitle-line",children:m.subtitle}),o.jsx("span",{className:"bio-dates",children:m.dates})]})]}),o.jsxs("div",{className:"bio-toggle-right",children:[o.jsx("div",{className:"bio-level-pills",children:[...new Set(m.levels.map(f=>f.level))].map(f=>o.jsx(nl,{level:f},f))}),o.jsx(wo,{size:18,className:`bio-chevron ${j?"open":""}`})]})]}),j&&o.jsx("div",{className:"bio-body",children:m.levels.map((f,b)=>o.jsxs("div",{className:"bio-section",children:[o.jsxs("div",{className:"bio-section-header",children:[o.jsx(nl,{level:f.level}),o.jsx("h3",{className:"bio-section-title",children:f.heading}),o.jsx(ta,{text:f.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),f.paragraphs.map((y,x)=>o.jsx(zs,{text:y,paragraphClass:"bio-paragraph"},x)),f.vocab&&o.jsxs("div",{className:"bio-vocab",children:[o.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),f.vocab]})]},b))})]},h)})})}function mf(r,d,u,c){return`${r||"chapter"}::${d}::${u}::${c}`}function Eb({lessons:r,chapterId:d,lessonStatuses:u={},onLessonStatusChange:c}){const[m,h]=_.useState(null);function j(f){h(b=>b===f?null:f)}return o.jsx("section",{className:"block foldable-grammar",children:r.map((f,b)=>{const y=m===b,x=mf(d,"grammar",b,f.title);return o.jsxs("div",{className:`gl-item ${y?"open":"closed"}`,children:[o.jsxs("button",{className:"gl-toggle",onClick:()=>j(b),"aria-expanded":y,"touch-action":"manipulation",children:[o.jsx("span",{className:"gl-num",children:String(b+1).padStart(2,"0")}),o.jsx("span",{className:"gl-level-badge",children:f.level}),o.jsxs("div",{className:"gl-toggle-text",children:[o.jsx("span",{className:"gl-title",children:f.title}),o.jsx("span",{className:"gl-subtitle",children:f.subtitle})]}),u[x]&&o.jsx("span",{className:`gl-status-pill ${u[x]}`,children:u[x]==="understood"?"Entendido":"Leído"}),o.jsx(wo,{size:18,className:`gl-chevron ${y?"open":""}`})]}),y&&o.jsxs("div",{className:"gl-body",children:[o.jsx(Bc,{status:u[x],onChange:S=>c?.(x,S)}),f.intro&&o.jsx("p",{className:"gl-intro",children:f.intro}),f.sections.map((S,C)=>o.jsx(jb,{s:S},C)),o.jsx(rf,{source:f,title:`Practica: ${f.title}`})]})]},b)})})}function qb({stories:r,chapterId:d,lessonStatuses:u={},onLessonStatusChange:c}){const[m,h]=_.useState(null);function j(f){h(b=>b===f?null:f)}return o.jsx("section",{className:"block foldable-stories",children:r.map((f,b)=>{const y=m===b,x=mf(d,"story",b,f.title);return o.jsxs("div",{className:`story-item ${y?"open":"closed"}`,children:[o.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>j(b),"aria-expanded":y,children:[o.jsxs("div",{className:"bio-toggle-left",children:[o.jsx("span",{className:"bio-num",children:String(b+1).padStart(2,"0")}),o.jsxs("div",{className:"bio-toggle-text",children:[o.jsx("span",{className:"bio-name",children:f.title}),o.jsxs("span",{className:"bio-subtitle-line",children:[f.paragraphs.length," párrafos · lectura con audio"]})]})]}),o.jsxs("div",{className:"bio-toggle-right",children:[o.jsxs("div",{className:"bio-level-pills",children:[o.jsx(nl,{level:f.level}),u[x]&&o.jsx("span",{className:`story-status-pill ${u[x]}`,children:u[x]==="understood"?"Entendido":"Leído"})]}),o.jsx(wo,{size:18,className:`bio-chevron ${y?"open":""}`})]})]}),y&&o.jsx("div",{className:"bio-body story-body",children:o.jsxs("div",{className:"bio-section story-section",children:[o.jsxs("div",{className:"bio-section-header",children:[o.jsx(nl,{level:f.level}),o.jsx("h3",{className:"bio-section-title",children:f.title}),o.jsx(ta,{text:f.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),o.jsx(Bc,{status:u[x],onChange:S=>c?.(x,S)}),f.paragraphs.map((S,C)=>o.jsx(zs,{text:S,paragraphClass:"bio-paragraph story-paragraph"},C))]})})]},b)})})}const $m="palabras-progress-v1";function ff(r,d){return`${r}::${d.rank}::${d.spanish}`}function Ac(r,d){return d.sourceGroupId||r.id}function el(r,d){return ff(Ac(r,d),d)}function fo(r){return String(r).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const Tb=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function Ab(r){const d=new Map;for(const u of r||[])for(const c of u.entries||[]){const m=fo(c.spanish);d.has(m)||d.set(m,{...c,sourceGroupId:u.id,sourceGroupTitle:u.title})}return Tb.map(u=>{const c=new Set,m=u.terms.map((h,j)=>{const f=fo(h.spanish);if(c.has(f))return null;c.add(f);const b=d.get(f),y=h.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...b||{rank:`T${j+1}`,spanish:y,english:h.english,sourceGroupId:u.id,sourceGroupTitle:u.title},topicTerm:h.spanish,topicEnglish:h.english,topicOrder:j+1}}).filter(Boolean);return{id:u.id,title:u.title,description:u.description,entries:m,isTopic:!0}})}function tt(r){return r.topicTerm||r.spanish}function uo(r){return r.topicEnglish||r.english}let zc=null;function Cc(){return zc||(zc=Rg(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(r=>{const d=r.default||[];return[...d,...Ab(d)]})),zc}function hf(r,d,u=Date.now()){return cb(r,d,u)}function Cb(r,d,u=Date.now()){const c={total:0,seen:0,due:0,mastered:0,byGroup:{}},m=new Set;for(const h of r||[]){const j={total:h.entries.length,seen:0,due:0,mastered:0};for(const f of h.entries){const b=el(h,f),y=d[b],x=m.has(b);x||(m.add(b),c.total++),y?.seen&&(j.seen++,x||c.seen++,y.mastered&&(j.mastered++,x||c.mastered++),(y.dueAt||0)<=u&&(j.due++,x||c.due++))}c.byGroup[h.id]=j}return c}function Wm(r,d){const u=r.spanish.split(",")[0].trim();return d==="topic-work-professions"?{es:`En mi trabajo uso "${u}" con frecuencia.`,en:`At work I use "${u}" often.`}:d==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${u}" con calma.`,en:`Today I can name "${u}" calmly.`}:d==="function-words"?{es:`Uso "${u}" para unir una idea con otra.`,en:`"${u}" helps connect one idea to another.`}:/^to /.test(r.english)?{es:`Hoy necesito ${u} en una frase clara.`,en:`Today I need "${u}" in a clear sentence.`}:{es:`Escribo "${u}" en mi cuaderno de espanol.`,en:`"${u}" means ${uo(r)}.`}}function Mb({onSaveWord:r,savedWords:d=[],progress:u={},onProgressChange:c,onUpdateSavedWord:m}){const[h,j]=_.useState(null),[f,b]=_.useState(""),[y,x]=_.useState(""),[S,C]=_.useState(0),[D,Z]=_.useState({}),[Y,W]=_.useState(!1),[V,J]=_.useState(!1),[ee,K]=_.useState(!1),[le,de]=_.useState(0),[oe,ae]=_.useState(!1);_.useEffect(()=>{let R=!0;return Cc().then(ze=>{R&&(j(ze),b(Te=>Te||ze[0]?.id||""))}),()=>{R=!1}},[]);const xe=!h,F=h?.find(R=>R.id===f)||h?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},pe=_.useMemo(()=>{const R=fo(y),ze=R?F.entries.filter(Qe=>[Qe.spanish,Qe.english,Qe.topicTerm,Qe.topicEnglish,String(Qe.rank)].some(da=>fo(da||"").includes(R))):F.entries;if(!V)return ze;const Te=Date.now();return ze.filter(Qe=>{const da=u[el(F,Qe)];return da?.seen&&(da.dueAt||0)<=Te})},[F,y,V,u]),Ae=24,qe=Math.min(S,Math.max(0,pe.length-1)),ve=pe.slice(qe,qe+Ae),me=ve.map(R=>tt(R)).join(". "),z=_.useMemo(()=>Cb(h||[],u),[h,u]).byGroup[F.id]||{total:F.entries.length,seen:0,due:0,mastered:0},B=74,X=420,$=Math.max(0,Math.floor(le/B)-4),g=Math.min(pe.length,$+Math.ceil(X/B)+10),O=pe.slice($,g);if(_.useEffect(()=>{C(0),Z({}),de(0)},[f,y,V]),xe)return o.jsx("section",{className:"block palabras-lab",children:o.jsxs("div",{className:"palabras-empty",children:[o.jsx(yo,{size:24}),o.jsx("p",{children:"Cargando palabras..."})]})});function Q(){C(R=>R+Ae>=pe.length?0:R+Ae),Z({})}function I(){const R=Math.max(0,pe.length-Ae);C(Math.floor(Math.random()*(R+1))),Z({})}function P(R){const ze=`${F.id}-${R.rank}-${R.spanish}`;Z(Te=>({...Te,[ze]:!Te[ze]}))}function ue(R,ze){const Te=Ac(F,R),Qe=ff(Te,R),da=hf(u[Qe],ze),na={...u,[Qe]:{...da,groupId:Te,displayGroupId:F.id,topicId:F.isTopic?F.id:void 0,spanish:tt(R),english:uo(R),rank:R.rank}};c?.(na),Z(Wa=>({...Wa,[`${F.id}-${R.rank}-${R.spanish}`]:!0}));const pa=d.find(Wa=>fo(Wa.word)===fo(tt(R)));pa?m?.(pa.word,{review:da,difficult:ze==="hard"||ze==="again"?!0:pa.difficult}):(ze==="hard"||ze==="again")&&r?.({word:tt(R),translation:uo(R),pos:F.isTopic?`${F.title} topic`:F.title,extras:[`Rank ${R.rank}`,F.description].filter(Boolean),tags:["palabras",F.id,Te,"difficult"].filter(Boolean),review:da,difficult:!0,savedAt:Date.now()})}function ye(){if(!ve.length)return;if(Hc(),oe){window.speechSynthesis?.cancel(),ae(!1);return}const R=ve.flatMap(ze=>{const Te=Wm(ze,F.id);return[tt(ze),Te.es,tt(ze)]});ae(!0),df(R.join(". "),{onend:()=>ae(!1),onerror:()=>ae(!1)})}function Ze(R){const ze=Ac(F,R),Te=F.isTopic&&R.sourceGroupTitle?`Source ${R.sourceGroupTitle}`:null;r?.({word:tt(R),translation:uo(R),pos:F.isTopic?`${F.title} topic`:F.title,extras:[`Rank ${R.rank}`,F.description,Te].filter(Boolean),tags:["palabras",F.id,ze].filter(Boolean),savedAt:Date.now()})}return o.jsxs("section",{className:"block palabras-lab",children:[o.jsxs("div",{className:"palabras-toolbar",children:[o.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:h.map(R=>o.jsxs("button",{className:`palabras-tab ${R.id===F.id?"active":""}`,onClick:()=>b(R.id),role:"tab","aria-selected":R.id===F.id,children:[o.jsx("span",{children:R.title.replace(/^Group /,"G")}),o.jsx("strong",{children:R.entries.length})]},R.id))}),o.jsxs("label",{className:"palabras-search",children:[o.jsx("span",{children:"Buscar"}),o.jsx("input",{value:y,onChange:R=>x(R.target.value),placeholder:"palabra, meaning, rank..."})]})]}),o.jsxs("div",{className:"palabras-stage",children:[o.jsxs("div",{className:"palabras-stage-copy",children:[o.jsx("div",{className:"palabras-stage-kicker",children:F.isTopic?"Tema integrado":"Grupo intacto"}),o.jsx("h2",{children:F.title}),o.jsx("p",{children:F.description})]}),o.jsxs("div",{className:"palabras-stage-stats",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Mostrando"}),o.jsx("strong",{children:ve.length})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Filtradas"}),o.jsx("strong",{children:pe.length})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Entrada"}),o.jsx("strong",{children:pe.length?qe+1:0})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Vencidas"}),o.jsx("strong",{children:z.due})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Vistas"}),o.jsx("strong",{children:z.seen})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Dominadas"}),o.jsx("strong",{children:z.mastered})]})]})]}),o.jsxs("div",{className:"palabras-actions",children:[o.jsx(ta,{text:me,size:"md",className:"palabras-read-btn"}),o.jsx("button",{className:`palabras-action-btn ${oe?"active":""}`,onClick:ye,children:oe?"Escuchando...":"Escucha activa"}),o.jsx("button",{className:`palabras-action-btn ${V?"active":""}`,onClick:()=>J(R=>!R),children:V?"Todas":"Vencidas"}),o.jsx("button",{className:"palabras-action-btn",onClick:()=>W(R=>!R),children:Y?"Ocultar ingles":"Mostrar ingles"}),o.jsx("button",{className:"palabras-action-btn",onClick:Q,children:"Siguiente ronda"}),o.jsx("button",{className:"palabras-action-btn",onClick:I,children:"Barajar"}),o.jsx("button",{className:`palabras-action-btn ${ee?"active":""}`,onClick:()=>K(R=>!R),children:"Lista completa"})]}),ve.length?o.jsx("div",{className:"palabras-grid",children:ve.map(R=>{const ze=`${F.id}-${R.rank}-${R.spanish}`,Te=Y||D[ze],Qe=u[el(F,R)],da=Wm(R,F.id);return o.jsxs("article",{className:`palabra-card ${Te?"revealed":""}`,children:[o.jsxs("button",{className:"palabra-main",onClick:()=>P(R),children:[o.jsxs("span",{className:"palabra-rank",children:["#",R.rank]}),o.jsx("span",{className:"palabra-es",children:tt(R)}),o.jsx("span",{className:"palabra-en",children:Te?uo(R):"..."}),Te&&o.jsxs("span",{className:"palabra-example",children:[o.jsx("span",{children:da.es}),o.jsx("em",{children:da.en})]})]}),o.jsxs("div",{className:"palabra-card-actions",children:[o.jsx(ta,{text:tt(R)}),o.jsxs("button",{className:"palabra-save",onClick:()=>Ze(R),children:[o.jsx(xo,{size:13}),"Memoria"]})]}),o.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(na=>o.jsx("button",{onClick:()=>ue(R,na),children:na==="again"?"Again":na==="hard"?"Hard":na==="good"?"Good":"Easy"},na))}),Qe?.seen&&o.jsx("div",{className:"palabra-review-state",children:Qe.mastered?"Dominada":`Due ${new Date(Qe.dueAt||Date.now()).toLocaleDateString()}`})]},ze)})}):o.jsxs("div",{className:"palabras-empty",children:[o.jsx(yo,{size:24}),o.jsx("p",{children:"No words match this search in the selected group."})]}),ee&&o.jsxs("div",{className:"palabras-browser",children:[o.jsxs("div",{className:"palabras-browser-head",children:[o.jsx("span",{children:"Lista virtual"}),o.jsxs("strong",{children:[pe.length," palabras"]})]}),o.jsx("div",{className:"palabras-virtual-list",style:{height:X},onScroll:R=>de(R.currentTarget.scrollTop),children:o.jsx("div",{style:{height:pe.length*B,position:"relative"},children:o.jsx("div",{style:{transform:`translateY(${$*B}px)`},children:O.map(R=>{const ze=u[el(F,R)];return o.jsxs("div",{className:"palabras-virtual-row",style:{height:B},children:[o.jsxs("span",{className:"palabra-rank",children:["#",R.rank]}),o.jsx("strong",{children:tt(R)}),o.jsx("span",{children:uo(R)}),o.jsx("button",{onClick:()=>ue(R,"good"),children:ze?.seen?"Actualizar":"Visto"})]},`${R.rank}-${R.spanish}`)})})})})]})]})}function Bc({status:r,onChange:d}){const u=r==="read"||r==="understood",c=r==="understood";function m(){d?.(r==="read"?null:"read")}function h(){d?.(r==="understood"?"read":"understood")}return o.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[o.jsx("span",{className:"lesson-status-label",children:"Estado"}),o.jsxs("button",{className:`lesson-status-btn ${u?"active":""}`,onClick:m,children:[o.jsx(Dc,{size:14}),"Leído"]}),o.jsxs("button",{className:`lesson-status-btn understood ${c?"active":""}`,onClick:h,children:[o.jsx(Uc,{size:14}),"Entendido"]})]})}function Db({chapter:r,sectionId:d,onSaveWord:u,savedWords:c=[],onUpdateSavedWord:m,palabrasProgress:h,onPalabrasProgressChange:j,lessonStatuses:f={},onLessonStatusChange:b}){const y=r.blocks.some(x=>x.type==="foldable-grammar"||x.type==="foldable-stories");return o.jsxs("article",{className:"chapter-body",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsxs("div",{className:"chapter-icon-row",children:[d&&o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(sf,{id:d,size:22})}),o.jsxs("div",{className:"chapter-level-tag",children:[r.rank?`Nº ${String(r.rank).padStart(2,"0")} · `:"","Nivel ",r.level]})]}),o.jsx("h1",{className:"chapter-title",children:r.title}),r.subtitle&&o.jsx("p",{className:"chapter-subtitle",children:r.subtitle}),!y&&o.jsx(Bc,{status:f[r.id],onChange:x=>b?.(r.id,x)}),o.jsx("div",{className:"chapter-rule"})]}),r.intro&&o.jsx("p",{className:"chapter-intro drop-cap",children:o.jsx(ua,{text:r.intro})}),r.blocks.map((x,S)=>{switch(x.type){case"indicative-hero":return o.jsx(Ub,{block:x},S);case"indicative-tense-cards":return o.jsx(Lb,{block:x},S);case"participio-section":return o.jsx(Ob,{block:x},S);case"indicative-timeline":return o.jsx(_b,{block:x},S);case"conjugation":return o.jsxs("section",{className:"block",children:[o.jsx("h2",{className:"block-heading",children:x.title}),o.jsx("div",{className:"conjugation-grid",children:x.verbs.map((C,D)=>o.jsxs("div",{className:"conjugation-card",children:[o.jsx("div",{className:"conjugation-verb",children:C.name}),o.jsx("ul",{className:"conjugation-list",children:C.forms.map((Z,Y)=>o.jsx("li",{children:Z},Y))})]},D))})]},S);case"examples":return o.jsxs("section",{className:"block",children:[o.jsx("h2",{className:"block-heading",children:x.title}),o.jsx("ul",{className:"examples-list",children:x.pairs.map((C,D)=>o.jsx("li",{className:"example-item",children:o.jsx(an,{es:C.es,en:C.en,esClass:"example-es",enClass:"example-en"})},D))})]},S);case"rule":return o.jsx("section",{className:"block",children:o.jsx("dl",{className:"rule-list",children:x.items.map((C,D)=>o.jsxs("div",{className:"rule-row",children:[o.jsx("dt",{children:C.label}),o.jsx("dd",{children:C.value})]},D))})},S);case"reading":return o.jsx("section",{className:"block reading-block",children:x.paragraphs.map((C,D)=>o.jsx(zs,{text:C,paragraphClass:"reading-paragraph"},D))},S);case"foldable-poems":return o.jsx(Sb,{poems:x.poems},S);case"foldable-songs":return o.jsx(zb,{songs:x.songs},S);case"foldable-bios":return o.jsx(Nb,{bios:x.bios},S);case"foldable-grammar":return o.jsx(Eb,{lessons:x.lessons,chapterId:r.id,lessonStatuses:f,onLessonStatusChange:b},S);case"foldable-stories":return o.jsx(qb,{stories:x.stories,chapterId:r.id,lessonStatuses:f,onLessonStatusChange:b},S);case"glossary":return o.jsxs("section",{className:"block",children:[o.jsxs("h2",{className:"block-heading",children:[o.jsx(bo,{size:16,className:"inline-icon"})," Glosario"]}),o.jsx("div",{className:"glossary-grid",children:x.words.map((C,D)=>o.jsxs("div",{className:"glossary-row",children:[o.jsx("span",{className:"glossary-es",children:C.es}),o.jsx("span",{className:"glossary-dash",children:"—"}),o.jsx("span",{className:"glossary-en",children:C.en})]},D))})]},S);case"vocab":return o.jsx("section",{className:"block",children:o.jsx("div",{className:"vocab-grid",children:x.columns.map((C,D)=>o.jsxs("div",{className:"vocab-row",children:[o.jsx(ta,{text:C.es}),o.jsx("span",{className:"vocab-es",children:C.es}),o.jsx("span",{className:"vocab-en",children:C.en})]},D))})},S);case"vocab-lab":return o.jsx(Mb,{onSaveWord:u,savedWords:c,progress:h,onProgressChange:j,onUpdateSavedWord:m},S);case"phraselist":return o.jsx("section",{className:"block",children:o.jsx("ul",{className:"phrase-list",children:x.phrases.map((C,D)=>o.jsxs("li",{className:"phrase-item",children:[o.jsx("span",{className:"phrase-num",children:String(D+1).padStart(2,"0")}),o.jsxs("div",{className:"phrase-content",children:[o.jsxs("p",{className:"phrase-es",children:[o.jsx(ta,{text:C.es,className:"paragraph-speak"}),o.jsx(ua,{text:C.es})]}),o.jsx("p",{className:"phrase-en",children:C.en})]})]},D))})},S);case"steps":return o.jsx("section",{className:"block",children:o.jsx("ol",{className:"steps-list",children:x.steps.map((C,D)=>o.jsxs("li",{className:"step-item",children:[o.jsx("div",{className:"step-num",children:D+1}),o.jsxs("div",{children:[o.jsx("h3",{className:"step-title",children:C.title}),o.jsx("p",{className:"step-text",children:C.text})]})]},D))})},S);case"big-takeaways":return o.jsx("section",{className:"block",children:o.jsx("div",{className:"big-takeaways",children:x.items.map((C,D)=>o.jsxs("div",{className:"big-takeaway-card",children:[o.jsx("div",{className:"big-takeaway-num",children:C.n}),o.jsx("h3",{className:"big-takeaway-title",children:C.title}),o.jsx("p",{className:"big-takeaway-text",children:C.text})]},D))})},S);case"tip":return o.jsxs("aside",{className:"block tip-block",children:[o.jsx(jo,{size:18,className:"tip-icon"}),o.jsx("p",{children:x.text})]},S);case"takeaway":return o.jsxs("aside",{className:"block takeaway-block",children:[o.jsxs("div",{className:"takeaway-label",children:[o.jsx(Oc,{size:14})," Lo que te llevas"]}),o.jsx("p",{children:x.text})]},S);case"verb-table":{const C=Object.fromEntries(x.tenses.map(Z=>[Z.name,Z])),D=x.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return o.jsxs("section",{className:"block verb-table-block",children:[x.participles&&o.jsxs("div",{className:"participles",children:[o.jsx("div",{className:"participles-label",children:"Participios"}),o.jsxs("div",{className:"participles-rows",children:[o.jsxs("div",{className:"participles-row",children:[o.jsx("span",{className:"participles-key",children:"Presente"}),o.jsx("span",{className:"participles-val",children:o.jsx(ka,{raw:x.participles.present})})]}),o.jsxs("div",{className:"participles-row",children:[o.jsx("span",{className:"participles-key",children:"Pasado"}),o.jsx("span",{className:"participles-val",children:o.jsx(ka,{raw:x.participles.past})})]})]})]}),o.jsxs("div",{className:"verb-table-header",children:[o.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",o.jsxs("em",{children:['"',r.title.toLowerCase(),'"']})]}),o.jsx(xb,{tenses:x.tenses,verbName:r.title})]}),o.jsx("div",{className:"tense-stack",children:D.map((Z,Y)=>{const W=Z.map(V=>C[V]).filter(Boolean);if(W.length===0)return null;if(W.length===1){const V=W[0];return o.jsxs("div",{className:"tense-block",children:[o.jsxs("div",{className:"tense-name-row",children:[o.jsx("h3",{className:"tense-name",children:V.name}),o.jsx(ta,{text:V.forms.map(J=>`${J.p} ${po(J.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),o.jsx("div",{className:"tense-rows",children:V.forms.map((J,ee)=>o.jsxs(nt.Fragment,{children:[o.jsx("span",{className:"tense-pronoun",children:J.p}),o.jsxs("span",{className:"tense-form",children:[o.jsx(ka,{raw:J.f}),o.jsx(ta,{text:po(J.f),className:"conjugation-speak"})]})]},ee))})]},Y)}return o.jsxs("table",{className:"tense-group-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{"aria-hidden":"true"}),W.map((V,J)=>o.jsx("th",{scope:"col",children:o.jsxs("div",{className:"tg-th-inner",children:[o.jsx("span",{children:V.name}),o.jsx(ta,{text:V.forms.map(ee=>`${ee.p} ${po(ee.f)}`).join(". ")})]})},J))]})}),o.jsx("tbody",{children:W[0].forms.map((V,J)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",className:"tg-pronoun",children:W[0].forms[J].p}),W.map((ee,K)=>o.jsxs("td",{className:"tg-form",children:[o.jsx(ka,{raw:ee.forms[J].f}),o.jsx(ta,{text:po(ee.forms[J].f),className:"conjugation-speak"})]},K))]},J))})]},Y)})}),o.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",o.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},S)}case"verb-uses":return o.jsxs("section",{className:"block verb-uses-block",children:[x.heading&&o.jsx("h2",{className:"verb-uses-heading",children:x.heading}),x.categories.map((C,D)=>o.jsxs("div",{className:"vu-category",children:[o.jsxs("div",{className:"vu-category-head",children:[o.jsx("div",{className:"vu-category-label",children:C.label}),C.note&&o.jsx("div",{className:"vu-category-note",children:C.note})]}),o.jsx("div",{className:"vu-senses",children:C.senses.map((Z,Y)=>o.jsxs("div",{className:"vu-sense",children:[o.jsx("div",{className:"vu-sense-num",children:Z.n}),o.jsxs("div",{className:"vu-sense-body",children:[o.jsx("div",{className:"vu-sense-meaning",children:Z.meaning}),Z.subnote&&o.jsx("div",{className:"vu-sense-subnote",children:Z.subnote}),o.jsx("ul",{className:"vu-examples",children:Z.examples.map((W,V)=>o.jsx("li",{children:o.jsx(an,{es:W.es,en:W.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},V))})]})]},Y))})]},D))]},S);case"subjunctive-hero":return o.jsx(Gb,{block:x},S);case"golden-rule":return o.jsx(Hb,{block:x},S);case"subjunctive-tense-cards":return o.jsx(Bb,{cards:x.cards},S);case"trigger-grid":return o.jsx(Rb,{block:x},S);case"conditional-pattern":return o.jsx(Yb,{block:x},S);case"tips-grid":return o.jsx(Vb,{tips:x.tips},S);case"choice-quiz":return o.jsx(Qb,{block:x},S);case"lesson-section":return o.jsxs("section",{className:"block lesson-section",children:[x.heading&&o.jsx("h2",{className:"lesson-heading",children:x.heading}),x.text&&o.jsx("p",{className:"lesson-text",children:o.jsx(ua,{text:x.text})}),x.paragraphs&&x.paragraphs.map((C,D)=>o.jsx("p",{className:"lesson-text",children:o.jsx(ua,{text:C})},D)),x.table&&o.jsx("div",{className:"lesson-table-wrap",children:o.jsxs("table",{className:"lesson-table",children:[x.table.headers&&o.jsx("thead",{children:o.jsx("tr",{children:x.table.headers.map((C,D)=>o.jsx("th",{children:C},D))})}),o.jsx("tbody",{children:x.table.rows.map((C,D)=>o.jsx("tr",{children:C.map((Z,Y)=>o.jsx("td",{children:Y===0?Z:o.jsx(ka,{raw:String(Z)})},Y))},D))})]})}),x.examples&&o.jsx("ul",{className:"lesson-examples",children:x.examples.map((C,D)=>o.jsx("li",{children:o.jsx(an,{es:C.es,en:C.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},D))})]},S);default:return null}}),!y&&o.jsx(rf,{source:r,title:`Practica: ${r.title}`})]})}function Ub({block:r}){return o.jsxs("section",{className:"block indicative-hero-block",children:[o.jsx("div",{className:"indicative-eyebrow",children:r.eyebrow}),o.jsx("h2",{children:r.title}),o.jsx("p",{children:o.jsx(ua,{text:r.text})}),o.jsx("div",{className:"indicative-formula",children:r.formula.map((d,u)=>o.jsx("span",{className:d==="+"||d==="="?"operator":"",children:d},`${d}-${u}`))}),o.jsx("div",{className:"indicative-tags",children:r.tags.map(d=>o.jsx("span",{children:d},d))})]})}function Lb({block:r}){const[d,u]=_.useState(0);return o.jsxs("section",{className:"block indicative-tense-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.title}),o.jsx("div",{className:"indicative-card-grid",children:r.cards.map((c,m)=>o.jsxs("article",{className:`indicative-card ${c.tone} ${d===m?"active":""}`,onClick:()=>u(m),children:[o.jsxs("header",{className:"indicative-card-head",children:[o.jsx("div",{className:"indicative-card-mark",children:String(m+1).padStart(2,"0")}),o.jsxs("div",{children:[o.jsx("h3",{children:c.title}),o.jsx("p",{children:c.english})]})]}),o.jsx("p",{className:"indicative-card-use",children:o.jsx(ua,{text:c.use})}),o.jsx("table",{className:"indicative-conj-table",children:o.jsx("tbody",{children:c.forms.map(([h,j])=>o.jsxs("tr",{children:[o.jsx("td",{children:h}),o.jsx("td",{children:o.jsx(ka,{raw:j})})]},`${c.title}-${h}`))})}),o.jsx("div",{className:"indicative-example",children:o.jsx(an,{es:c.example.es,en:c.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})})]},c.title))})]})}function Ob({block:r}){return o.jsxs("section",{className:"block participle-workshop-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.title}),o.jsx("p",{className:"lesson-text",children:o.jsx(ua,{text:r.text})}),o.jsxs("div",{className:"participle-workshop-grid",children:[o.jsxs("article",{children:[o.jsx("h3",{children:"Participios regulares"}),o.jsx("table",{children:o.jsx("tbody",{children:r.regular.map(([d,u])=>o.jsxs("tr",{children:[o.jsx("td",{children:d}),o.jsx("td",{children:o.jsx(ka,{raw:u})})]},`${d}-${u}`))})})]}),o.jsxs("article",{children:[o.jsx("h3",{children:"Participios irregulares"}),o.jsx("table",{children:o.jsx("tbody",{children:r.irregular.map(([d,u])=>o.jsxs("tr",{children:[o.jsx("td",{children:d}),o.jsx("td",{children:o.jsx(ka,{raw:u})})]},`${d}-${u}`))})})]})]})]})}function _b({block:r}){return o.jsxs("section",{className:"block indicative-timeline-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.title}),o.jsx("div",{className:"indicative-timeline-wrap",children:o.jsx("div",{className:"indicative-timeline-line",children:r.events.map(d=>o.jsxs("div",{className:`indicative-timeline-event ${d.lane} ${d.tone}`,style:{left:`${d.position}%`},children:[o.jsx("span",{className:"timeline-dot"}),o.jsx("strong",{children:d.label}),o.jsx("em",{children:d.sub})]},d.label))})})]})}function Gb({block:r}){return o.jsxs("section",{className:"block subj-hero-block",children:[o.jsx("div",{className:"subj-hero-eyebrow",children:r.eyebrow}),o.jsx("h2",{children:r.title}),o.jsx("p",{className:"subj-hero-accent",children:r.accent}),o.jsx("div",{className:"subj-hero-formula",children:r.formula}),o.jsx("ul",{children:r.points.map(d=>o.jsx("li",{children:o.jsx(ua,{text:d})},d))})]})}function Hb({block:r}){return o.jsxs("section",{className:"block golden-rule-block",children:[o.jsx("div",{className:"golden-rule-label",children:r.title}),o.jsx("p",{children:o.jsx(ua,{text:r.text})}),o.jsx("div",{className:"golden-rule-examples",children:r.examples.map((d,u)=>o.jsxs("div",{className:"golden-rule-pair",children:[o.jsxs("div",{children:[o.jsx("span",{children:"No"}),o.jsx(ka,{raw:d.bad})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Sí"}),o.jsx(ka,{raw:d.good})]})]},u))})]})}function Bb({cards:r}){const[d,u]=_.useState(0);return o.jsxs("section",{className:"block subj-tense-block",children:[o.jsx("div",{className:"subj-tense-tabs",children:r.map((c,m)=>o.jsxs("button",{className:`${c.tone} ${d===m?"active":""}`,onClick:()=>u(m),children:[o.jsx("span",{children:m+1}),c.title]},c.title))}),o.jsxs("div",{className:`subj-tense-card ${r[d].tone}`,children:[o.jsxs("div",{className:"subj-tense-head",children:[o.jsxs("div",{children:[o.jsx("h2",{children:r[d].title}),o.jsx("p",{children:r[d].english})]}),o.jsx("span",{children:r[d].mainClause})]}),o.jsx("div",{className:"subj-tense-formula",children:o.jsx(ka,{raw:r[d].formula})}),o.jsx("p",{className:"subj-tense-use",children:o.jsx(ua,{text:r[d].use})}),o.jsxs("div",{className:"subj-tense-grid",children:[o.jsx("table",{children:o.jsx("tbody",{children:r[d].forms.map(([c,m])=>o.jsxs("tr",{children:[o.jsx("td",{children:c}),o.jsx("td",{children:o.jsx(ka,{raw:m})})]},`${c}-${m}`))})}),o.jsx("div",{className:"subj-tense-examples",children:r[d].examples.map(c=>o.jsx("div",{children:o.jsx(an,{es:c.es,en:c.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},c.es))})]})]})]})}function Rb({block:r}){return o.jsxs("section",{className:"block trigger-grid-block",children:[o.jsx("h2",{className:"lesson-heading",children:r.heading}),o.jsx("p",{className:"lesson-text",children:o.jsx(ua,{text:r.text})}),o.jsx("div",{className:"trigger-grid",children:r.categories.map(d=>o.jsxs("article",{className:"trigger-card",children:[o.jsx("h3",{children:d.title}),o.jsx("div",{className:"trigger-expression",children:d.trigger}),d.examples.map(u=>o.jsx("div",{className:"trigger-example",children:o.jsx(an,{es:u.es,en:u.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},u.es))]},d.title))})]})}function Yb({block:r}){return o.jsxs("section",{className:"block conditional-pattern-block",children:[o.jsx("h2",{children:r.heading}),o.jsx("div",{className:"conditional-formula",children:o.jsx(ka,{raw:r.formula})}),o.jsx("p",{children:o.jsx(ua,{text:r.text})}),o.jsx("div",{className:"conditional-examples",children:r.examples.map((d,u)=>o.jsxs("article",{children:[o.jsx("div",{className:"conditional-num",children:String(u+1).padStart(2,"0")}),o.jsx(an,{es:d.es,en:d.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"}),o.jsx("p",{children:d.note})]},d.es))})]})}function Vb({tips:r}){return o.jsx("section",{className:"block tips-grid-block",children:r.map(d=>o.jsxs("article",{className:"subj-tip-card",children:[o.jsx(jo,{size:18}),o.jsx("h3",{children:d.title}),o.jsx("p",{children:o.jsx(ua,{text:d.text})})]},d.title))})}function Qb({block:r}){const[d,u]=_.useState({}),[c,m]=_.useState(!1),h=r.questions.reduce((f,b,y)=>Ma(d[y])===Ma(b.answer)?f+1:f,0);function j(){u({}),m(!1)}return o.jsxs("section",{className:"block contextual-quiz-block",children:[o.jsxs("div",{className:"contextual-quiz-head",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"lesson-mini-kicker",children:[o.jsx(yo,{size:13})," Prueba contextual"]}),o.jsx("h2",{children:r.title})]}),o.jsxs("button",{onClick:j,children:[o.jsx(_c,{size:14}),"Reiniciar"]})]}),o.jsx("div",{className:"contextual-quiz-list",children:r.questions.map((f,b)=>{const y=d[b],x=y&&Ma(y)===Ma(f.answer);return o.jsxs("article",{className:`contextual-quiz-card ${y?x?"correct":"wrong":""}`,children:[o.jsx("div",{className:"contextual-quiz-num",children:String(b+1).padStart(2,"0")}),o.jsx("p",{children:f.prompt}),o.jsx("div",{className:"contextual-quiz-choices",children:f.choices.map(S=>o.jsx("button",{className:y===S?"active":"",onClick:()=>u(C=>({...C,[b]:S})),children:S},S))}),y&&o.jsxs("div",{className:"contextual-quiz-feedback",children:[o.jsx("strong",{children:x?"Correcto.":`Correcto: ${f.answer}.`}),o.jsx("span",{children:f.explanation})]})]},f.prompt)})}),o.jsxs("div",{className:"contextual-quiz-score",children:[o.jsxs("span",{children:[Object.keys(d).length," / ",r.questions.length," respondidas"]}),o.jsx("button",{onClick:()=>m(!0),children:"Ver resultado"}),c&&o.jsxs("strong",{children:[h," / ",r.questions.length]})]})]})}function Xb({savedWords:r,onSave:d,onRemove:u}){const[c,m]=_.useState(null),[h,j]=_.useState([]),f=nt.useRef(null),b=nt.useRef(r),y=nt.useRef(h),x=Gc,S=nf,[C,D]=_.useState(null);if(_.useEffect(()=>{b.current=r},[r]),_.useEffect(()=>{y.current=h},[h]),_.useEffect(()=>{let ae=!0;return Cc().then(xe=>{ae&&j(xe)}).catch(()=>{ae&&j([])}),()=>{ae=!1}},[]),_.useEffect(()=>{let ae="";async function xe(qe,ve,me){const T=x(qe);if(!T||T.length<2)return;D(null);let z=Qm(T,b.current,y.current);if(!z&&y.current.length===0)try{const B=await Cc();y.current=B,j(B),z=Qm(T,b.current,B)}catch{}if(z){m({word:z.matchedWord||T,x:ve,y:me,loading:!1,result:z,error:!1});return}m({word:T,x:ve,y:me,loading:!0,result:null,error:!1});try{const B=await S(T);m(X=>X&&X.word===T?{...X,loading:!1,result:B,error:!B}:X)}catch{m(X=>X&&X.word===T?{...X,loading:!1,error:!0}:X)}}function F(qe){const ve=qe.target.closest&&qe.target.closest("[data-dict-word]");if(!ve)return;const me=x(ve.dataset.dictWord||ve.textContent||"");if(!me||me.length<2)return;const T=window.getSelection?.();if(T&&!T.isCollapsed&&x(T.toString()).length>1)return;qe.stopPropagation();const z=ve.getBoundingClientRect(),B=z.left+z.width/2,X=z.bottom+10;xe(me,B,X)}function pe(){clearTimeout(pe._t),pe._t=setTimeout(()=>{const qe=window.getSelection(),ve=qe?.toString()||"",me=x(ve);if(!me||me.length<2||me.split(/\s+/).length>3){ae&&D(null),ae="";return}if(me===ae)return;ae=me;let T=window.innerWidth/2,z=120;try{const $=qe.getRangeAt(0).getBoundingClientRect();T=$.left+$.width/2,z=$.top-6}catch{}const B=96;T=Math.max(B/2+8,Math.min(T,window.innerWidth-B/2-8)),z<50&&(z=50),D({word:me,x:T,y:z})},200)}function Ae(qe){const ve=f.current&&f.current.contains(qe.target),me=qe.target.closest&&qe.target.closest(".dict-floating-btn"),T=qe.target.closest&&qe.target.closest("[data-dict-word]");!ve&&!me&&!T&&(m(null),D(null),ae="")}return window.__bookOpenPopup=xe,document.addEventListener("selectionchange",pe),document.addEventListener("pointerup",F),document.addEventListener("pointerdown",Ae),()=>{document.removeEventListener("selectionchange",pe),document.removeEventListener("pointerup",F),document.removeEventListener("pointerdown",Ae),delete window.__bookOpenPopup}},[]),!c&&!C)return null;if(!c&&C)return o.jsxs("button",{className:"dict-floating-btn",style:{left:C.x,top:C.y},onClick:ae=>{ae.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(C.word,C.x,C.y+50)},onPointerDown:ae=>ae.stopPropagation(),children:[o.jsx(bo,{size:14}),o.jsx("span",{children:"Traducir"})]});const Z=290,Y=Math.max(Z/2+8,Math.min(c.x,window.innerWidth-Z/2-8)),W=c.y+220>window.innerHeight,V=W?"auto":c.y,J=W?Math.max(12,window.innerHeight-c.y+12):"auto",ee=new Set(sl(c.word)),K=Et(c.word),le=r.find(ae=>Et(ae.word)===K)||r.find(ae=>ee.has(tl(ae.word))),de=!!le;function oe(){de?u(le.word):d({word:c.word,translation:c.result?.main||"",pos:c.result?.pos||"",extras:c.result?.extras||[],savedAt:Date.now()})}return o.jsxs("div",{ref:f,className:"dict-popup",style:{left:Y,top:V==="auto"?"auto":V,bottom:J==="auto"?"auto":J},children:[o.jsxs("div",{className:"dict-header",children:[o.jsx("span",{className:"dict-word",children:c.word}),o.jsx("button",{className:"dict-close-btn",onClick:()=>m(null),"aria-label":"Close",children:o.jsx(Nt,{size:14})})]}),o.jsxs("div",{className:"dict-body",children:[c.loading&&o.jsxs("div",{className:"dict-loading",children:[o.jsx("span",{className:"dict-spinner"}),o.jsx("span",{children:"Looking up…"})]}),!c.loading&&c.error&&o.jsxs("div",{className:"dict-fallback",children:[o.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),o.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(bo,{size:14}),'Buscar "',c.word,'" en SpanishDict']})]}),!c.loading&&c.result&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`dict-main-translation ${c.result.isDefinition?"is-definition":""}`,children:c.result.main}),c.result.extras?.length>0&&o.jsx("div",{className:"dict-extras",children:c.result.extras.map((ae,xe)=>o.jsx("span",{className:"dict-extra-tag",children:ae},xe))}),c.result.meanings?.length>0&&o.jsx("ul",{className:"dict-meanings",children:c.result.meanings.map((ae,xe)=>o.jsx("li",{className:"dict-meaning-item",children:ae},xe))}),c.result.examples?.length>0&&o.jsxs("div",{className:"dict-examples",children:[o.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),c.result.examples.map((ae,xe)=>o.jsxs("div",{className:"dict-example",children:[o.jsx("div",{className:"dict-example-es",children:ae.es}),o.jsx("div",{className:"dict-example-en",children:ae.en})]},xe))]})]})]}),!c.loading&&o.jsxs("button",{className:`dict-save-btn ${de?"saved":""}`,onClick:oe,"aria-label":de?"Remove from Memoria":"Save to Memoria",children:[o.jsx(xo,{size:14,className:de?"filled":""}),de?"Guardado en Memoria ✓":c.result?"Guardar en Memoria":"Guardar palabra"]}),o.jsx("div",{className:"dict-footer",children:o.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(bo,{size:12}),"Ver en SpanishDict"]})})]})}function js(r){const d=new Set(r.tags||[]);return r.pending&&d.add("pending"),r.translation||d.add("needs-translation"),r.favorite&&d.add("favorite"),r.difficult&&d.add("difficult"),r.review?.mastered&&d.add("mastered"),r.review?.seen&&(r.review?.dueAt||0)<=Date.now()&&d.add("due"),/Group 1|cognates|near-cognates/i.test(r.pos||"")&&d.add("cognates"),/Group 2|function/i.test(r.pos||"")&&d.add("function-words"),/Group 3|remaining/i.test(r.pos||"")&&d.add("remaining"),[...d]}function gf(r,d=Date.now()){return{due:r.filter(u=>u.review?.seen&&(u.review?.dueAt||0)<=d).length,mastered:r.filter(u=>u.review?.mastered).length,difficult:r.filter(u=>u.difficult||u.review?.lastRating==="Hard").length,favorite:r.filter(u=>u.favorite).length}}function Ib(r){const d=["Spanish","English","Tags","Notes"],u=r.map(f=>[f.word,f.translation||"",js(f).join(" | "),[...f.extras||[],f.pos||""].filter(Boolean).join(" | ")]),c=[d,...u].map(f=>f.map(b=>`"${String(b).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([c],{type:"text/csv;charset=utf-8"}),h=URL.createObjectURL(m),j=document.createElement("a");j.href=h,j.download="memoria-spanish.csv",j.click(),URL.revokeObjectURL(h)}let Nc=null;function Zb(){return typeof window>"u"?Promise.reject(new Error("No browser window")):window.google?.accounts?.oauth2?Promise.resolve(window.google):(Nc||(Nc=new Promise((r,d)=>{const u=document.createElement("script");u.src="https://accounts.google.com/gsi/client",u.async=!0,u.defer=!0,u.onload=()=>r(window.google),u.onerror=()=>d(new Error("Could not load Google sign-in")),document.head.appendChild(u)})),Nc)}async function Kb(r){const d=await Zb();return new Promise((u,c)=>{d.accounts.oauth2.initTokenClient({client_id:r,scope:gb,prompt:"consent",callback:h=>{h?.access_token?u(h.access_token):c(new Error(h?.error||"Google sign-in failed"))},error_callback:h=>c(new Error(h?.message||"Google sign-in failed"))}).requestAccessToken()})}async function Rc(r,d,u={}){const c=await fetch(d,{...u,headers:{...u.headers||{},Authorization:`Bearer ${r}`}});if(!c.ok){const m=await c.text().catch(()=>"");throw new Error(m||`Google Drive HTTP ${c.status}`)}return c}async function Jb(r){const d=new URLSearchParams({spaces:"appDataFolder",fields:"files(id,name,modifiedTime)",q:`name='${of}' and trashed=false`});return((await(await Rc(r,`https://www.googleapis.com/drive/v3/files?${d}`)).json()).files||[])[0]||null}async function $b(r,d){return d?(await Rc(r,`https://www.googleapis.com/drive/v3/files/${d}?alt=media`)).json():null}async function Wb(r,d,u=null){const c=u?{}:{name:of,parents:["appDataFolder"]},m=`learn-spanish-${Date.now()}`,h=[`--${m}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(c),`--${m}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(d),`--${m}--`].join(`\r
`),j=u?`https://www.googleapis.com/upload/drive/v3/files/${u}?uploadType=multipart`:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";await Rc(r,j,{method:u?"PATCH":"POST",headers:{"Content-Type":`multipart/related; boundary=${m}`},body:h})}function Fb(r={},d={}){const u={...d};for(const[c,m]of Object.entries(r||{})){const h=u[c],j=m?.reviewedAt||m?.dueAt||0,f=h?.reviewedAt||h?.dueAt||0;u[c]=j>=f?m:h}return u}function Pb(r=[],d=[]){const u=new Map;for(const c of[...d,...r]){const m=Et(c.word),h=u.get(m);if(!h){u.set(m,c);continue}const j=Math.max(h.savedAt||0,h.translatedAt||0,h.review?.reviewedAt||0),f=Math.max(c.savedAt||0,c.translatedAt||0,c.review?.reviewedAt||0),b=f>=j?c:h,y=f>=j?h:c;u.set(m,{...y,...b,tags:Array.from(new Set([...y.tags||[],...b.tags||[]])),extras:Array.from(new Set([...y.extras||[],...b.extras||[]])),favorite:!!(y.favorite||b.favorite),difficult:!!(y.difficult||b.difficult),review:(b.review?.reviewedAt||0)>=(y.review?.reviewedAt||0)?b.review:y.review})}return[...u.values()].sort((c,m)=>(m.savedAt||0)-(c.savedAt||0))}function ev(r={},d={}){const u={...d,...r};for(const c of new Set([...Object.keys(r||{}),...Object.keys(d||{})]))r[c]==="understood"||d[c]==="understood"?u[c]="understood":(r[c]==="read"||d[c]==="read")&&(u[c]="read");return u}function bf(r=new Date){return r.toISOString().slice(0,10)}function ho(r={}){const d=bf(),u=r.date===d?r.date:d,c=r.date===d?Math.max(0,Number(r.todaySeconds)||0):0;return{totalSeconds:Math.max(0,Number(r.totalSeconds)||0),todaySeconds:c,date:u,byChapter:r.byChapter&&typeof r.byChapter=="object"?r.byChapter:{},updatedAt:r.updatedAt||Date.now()}}function av(r={},d={}){const u=ho(r),c=ho(d),m={};for(const h of new Set([...Object.keys(c.byChapter||{}),...Object.keys(u.byChapter||{})]))m[h]=Math.max(Number(u.byChapter?.[h])||0,Number(c.byChapter?.[h])||0);return{totalSeconds:Math.max(u.totalSeconds,c.totalSeconds),todaySeconds:Math.max(u.todaySeconds,c.todaySeconds),date:bf(),byChapter:m,updatedAt:Math.max(Number(u.updatedAt)||0,Number(c.updatedAt)||0,Date.now())}}function Fm(r=0){const d=Math.max(0,Math.floor(Number(r)||0)),u=Math.floor(d/3600),c=Math.floor(d%3600/60);return u>0?`${u}h ${String(c).padStart(2,"0")}m`:c>0?`${c}m`:`${d}s`}function tv(r,d){if(!d)return r;const u=Date.parse(r.exportedAt||"")||0,c=Date.parse(d.exportedAt||"")||0;return{...u>=c?r:d,app:"Learn Spanish",version:3,exportedAt:new Date().toISOString(),savedWords:Pb(r.savedWords,d.savedWords),visitedChapters:Array.from(new Set([...d.visitedChapters||[],...r.visitedChapters||[]])),palabrasProgress:Fb(r.palabrasProgress,d.palabrasProgress),lessonStatuses:ev(r.lessonStatuses,d.lessonStatuses),studyTime:av(r.studyTime,d.studyTime),writingEntries:[...new Map([...d.writingEntries||[],...r.writingEntries||[]].map(h=>[h.id,h])).values()].sort((h,j)=>(j.createdAt||0)-(h.createdAt||0)).slice(0,80)}}function nv({savedWords:r,onRemove:d,onClear:u,onUpdateWord:c}){const[m,h]=_.useState({}),[j,f]=_.useState("grid"),[b,y]=_.useState(""),[x,S]=_.useState("ALL"),[C,D]=_.useState(0),[Z,Y]=_.useState(!1),[W,V]=_.useState(""),[J,ee]=_.useState(null);function K(z){h(B=>({...B,[z]:!B[z]}))}function le(z){ee({type:"word",word:z})}function de(){ee({type:"clear"})}function oe(){J?.type==="word"&&d?.(J.word),J?.type==="clear"&&u?.(),ee(null)}const ae=[...r].sort((z,B)=>{const X=z.review?.seen&&(z.review?.dueAt||0)<=Date.now(),$=B.review?.seen&&(B.review?.dueAt||0)<=Date.now();return X!==$?X?-1:1:B.savedAt-z.savedAt}),xe=_.useMemo(()=>{const z=new Set;for(const B of ae)js(B).forEach(X=>z.add(X));return[...z].sort()},[ae]),F=_.useMemo(()=>{const z=b.trim().toLowerCase();return ae.filter(B=>{const X=js(B),$=x==="ALL"||X.includes(x),g=!z||B.word.toLowerCase().includes(z)||(B.translation||"").toLowerCase().includes(z)||X.some(O=>O.toLowerCase().includes(z));return $&&g})},[ae,b,x]),pe=F[C%Math.max(1,F.length)],Ae=_.useMemo(()=>gf(ae),[ae]);_.useEffect(()=>{D(0),Y(!1)},[b,x,r.length]);function qe(z){const B=W.trim().toLowerCase().replace(/\s+/g,"-");if(!B)return;const X=r.find(g=>g.word===z),$=Array.from(new Set([...X?.tags||[],B]));c?.(z,{tags:$}),V("")}function ve(z,B){const X=r.find($=>$.word===z);c?.(z,{[B]:!X?.[B]})}function me(z,B){const X=r.find(g=>g.word===z),$=hf(X?.review,B);c?.(z,{review:$,difficult:B==="hard"?!0:X?.difficult}),T()}function T(){D(z=>(z+1)%Math.max(1,F.length)),Y(!1)}return ae.length===0?o.jsxs("div",{className:"memoria-empty",children:[o.jsx(xo,{size:36,className:"memoria-empty-icon"}),o.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),o.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",o.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):o.jsxs("article",{className:"chapter-body memoria-view",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsx("div",{className:"chapter-meta",children:o.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),o.jsx("h1",{className:"chapter-title",children:"Memoria"}),o.jsxs("p",{className:"chapter-subtitle",children:[ae.length," ",ae.length===1?"palabra guardada":"palabras guardadas"]}),o.jsx("p",{className:"chapter-intro",children:j==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),o.jsxs("div",{className:"memoria-summary-strip",children:[o.jsxs("span",{children:[o.jsx(ol,{size:13})," ",Ae.due," due"]}),o.jsxs("span",{children:[o.jsx(Fi,{size:13})," ",Ae.favorite," favoritas"]}),o.jsxs("span",{children:[o.jsx(Pi,{size:13})," ",Ae.difficult," dificiles"]}),o.jsxs("span",{children:[o.jsx(Uc,{size:13})," ",Ae.mastered," dominadas"]})]}),o.jsxs("div",{className:"memoria-view-toggle",children:[o.jsx("button",{className:`memoria-view-btn ${j==="grid"?"active":""}`,onClick:()=>f("grid"),children:"Tarjetas"}),o.jsx("button",{className:`memoria-view-btn ${j==="list"?"active":""}`,onClick:()=>f("list"),children:"Lista"}),o.jsx("button",{className:`memoria-view-btn ${j==="review"?"active":""}`,onClick:()=>f("review"),children:"Repaso"})]}),o.jsxs("div",{className:"memoria-tools",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Buscar"}),o.jsx("input",{value:b,onChange:z=>y(z.target.value),placeholder:"palabra, translation, tag..."})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Etiqueta"}),o.jsxs("select",{value:x,onChange:z=>S(z.target.value),children:[o.jsx("option",{value:"ALL",children:"Todas"}),xe.map(z=>o.jsx("option",{value:z,children:z},z))]})]}),o.jsx("button",{className:"memoria-tool-btn",onClick:()=>Ib(F),children:"Export CSV"})]}),j==="review"?o.jsx("div",{className:"memoria-review",children:pe?o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`memoria-review-card ${Z?"flipped":""}`,onClick:()=>Y(z=>!z),children:[o.jsx("span",{className:"memoria-review-count",children:F.length?`${C+1} / ${F.length}`:"0 / 0"}),o.jsx("strong",{children:Z?pe.translation||"Sin traduccion":pe.word}),o.jsx("em",{children:Z?pe.word:"toca para revelar"})]}),o.jsxs("div",{className:"memoria-review-actions",children:[o.jsx(ta,{text:pe.word,size:"md"}),o.jsx("input",{value:W,onChange:z=>V(z.target.value),placeholder:"add-tag"}),o.jsx("button",{onClick:()=>qe(pe.word),children:"Tag"}),o.jsxs("button",{onClick:()=>ve(pe.word,"favorite"),children:[o.jsx(Fi,{size:13}),pe.favorite?"Unfavorite":"Favorite"]}),o.jsxs("button",{onClick:()=>ve(pe.word,"difficult"),children:[o.jsx(Pi,{size:13}),pe.difficult?"Not hard":"Difficult"]}),o.jsx("button",{onClick:T,children:"Siguiente"})]}),o.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(z=>o.jsx("button",{onClick:()=>me(pe.word,z),children:z==="again"?"Again":z==="hard"?"Hard":z==="good"?"Good":"Easy"},z))})]}):o.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):j==="grid"?o.jsx("div",{className:"memoria-grid",children:F.map(z=>{const B=m[z.word],X=z.pending,$=js(z);return o.jsxs("div",{className:`memoria-card ${B?"flipped":""}`,onClick:()=>K(z.word),children:[o.jsxs("div",{className:"memoria-card-inner",children:[o.jsxs("div",{className:"memoria-face front",children:[o.jsx("div",{className:"memoria-word",children:z.word}),z.pos&&o.jsx("div",{className:"memoria-pos",children:z.pos}),z.translation?o.jsx("div",{className:"memoria-front-translation",children:z.translation}):X?o.jsxs("div",{className:"memoria-front-pending",children:[o.jsx("span",{className:"dict-spinner"}),o.jsx("span",{children:"traduciendo…"})]}):o.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),$.length>0&&o.jsx("div",{className:"memoria-tags",children:$.slice(0,3).map(g=>o.jsx("span",{children:g},g))}),o.jsxs("div",{className:"memoria-label-actions",children:[o.jsx("button",{className:z.favorite?"active":"",onClick:g=>{g.stopPropagation(),ve(z.word,"favorite")},"aria-label":"Toggle favorite",children:o.jsx(Fi,{size:12})}),o.jsx("button",{className:z.difficult?"active hard":"",onClick:g=>{g.stopPropagation(),ve(z.word,"difficult")},"aria-label":"Toggle difficult",children:o.jsx(Pi,{size:12})})]})]}),o.jsxs("div",{className:"memoria-face back",children:[z.translation?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"memoria-translation",children:z.translation}),z.extras?.length>0&&o.jsx("div",{className:"memoria-extras",children:z.extras.slice(0,3).map((g,O)=>o.jsx("span",{className:"memoria-extra-tag",children:g},O))})]}):o.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),o.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(z.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:g=>g.stopPropagation(),children:"SpanishDict →"})]})]}),o.jsx("button",{className:"memoria-remove",onClick:g=>{g.stopPropagation(),le(z.word)},"aria-label":`Remove ${z.word}`,children:o.jsx(Nt,{size:13})})]},z.word)})}):o.jsx("div",{className:"memoria-list",children:F.map(z=>{const B=z.pending,X=js(z);return o.jsxs("div",{className:"memoria-list-row",children:[o.jsxs("div",{className:"memoria-list-main",children:[o.jsxs("div",{className:"memoria-list-es",children:[o.jsx("span",{className:"memoria-list-word",children:z.word}),z.pos&&o.jsx("span",{className:"memoria-list-pos",children:z.pos})]}),z.translation?o.jsx("div",{className:"memoria-list-en",children:z.translation}):B?o.jsxs("div",{className:"memoria-list-en pending",children:[o.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):o.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),z.extras?.length>0&&o.jsx("div",{className:"memoria-list-extras",children:z.extras.slice(0,4).map(($,g)=>o.jsx("span",{className:"memoria-list-extra-tag",children:$},g))}),X.length>0&&o.jsx("div",{className:"memoria-list-extras",children:X.map($=>o.jsx("span",{className:"memoria-list-extra-tag",children:$},$))})]}),o.jsxs("div",{className:"memoria-list-actions",children:[o.jsx("button",{className:`memoria-list-remove ${z.favorite?"active-label":""}`,onClick:()=>ve(z.word,"favorite"),"aria-label":"Toggle favorite",children:o.jsx(Fi,{size:14})}),o.jsx("button",{className:`memoria-list-remove ${z.difficult?"active-hard":""}`,onClick:()=>ve(z.word,"difficult"),"aria-label":"Toggle difficult",children:o.jsx(Pi,{size:14})}),o.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(z.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:o.jsx(bo,{size:14})}),o.jsx("button",{className:"memoria-list-remove",onClick:()=>le(z.word),"aria-label":`Remove ${z.word}`,children:o.jsx(Nt,{size:14})})]})]},z.word)})}),ae.length>0&&o.jsx("div",{className:"memoria-actions",children:o.jsx("button",{className:"memoria-clear-btn",onClick:de,children:"Borrar todo"})}),J&&o.jsx("div",{className:"memoria-confirm-overlay",role:"dialog","aria-modal":"true","aria-label":"Confirm Memoria deletion",children:o.jsxs("div",{className:"memoria-confirm-card",children:[o.jsx("div",{className:"memoria-confirm-kicker",children:"Confirmar"}),o.jsx("h3",{children:J.type==="word"?`Remove "${J.word}"?`:"Remove all Memoria words?"}),o.jsx("p",{children:J.type==="word"?"This word will leave your saved cards, review queue, and list.":"This clears every saved word in Memoria for this browser."}),o.jsxs("div",{className:"memoria-confirm-actions",children:[o.jsx("button",{className:"memoria-confirm-cancel",onClick:()=>ee(null),children:"Keep it"}),o.jsx("button",{className:"memoria-confirm-danger",onClick:oe,children:J.type==="word"?"Remove word":"Clear all"})]})]})})]})}function ov({savedWords:r,chapters:d,entries:u=[],onEntriesChange:c}){const[m,h]=_.useState(0),[j,f]=_.useState("");async function b(D){c?.(D);try{await window.storage.set(Tc,JSON.stringify(D))}catch{}}const y=_.useMemo(()=>{const D=r.slice(0,8).map(Y=>({label:`Usa "${Y.word}"`,text:`Write 2 Spanish sentences using "${Y.word}".`,target:Y.word})),Z=d.slice(0,6).map(Y=>({label:Y.title,text:`Write a short Spanish paragraph about "${Y.title}".`,target:""}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:""},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:""},...D,...Z]},[r,d]),x=y[m]||y[0],S=_.useMemo(()=>pb(j,x),[j,x]);function C(){if(!j.trim())return;const D=[{id:`${Date.now()}`,prompt:x.text,text:j.trim(),feedback:S,createdAt:Date.now()},...u].slice(0,40);b(D),f("")}return o.jsxs("article",{className:"chapter-body writing-view",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsxs("div",{className:"chapter-icon-row",children:[o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(tf,{size:22})}),o.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),o.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),o.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),o.jsx("div",{className:"chapter-rule"})]}),o.jsxs("section",{className:"writing-board",children:[o.jsxs("div",{className:"writing-prompt-row",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Prompt"}),o.jsx("select",{value:m,onChange:D=>h(Number(D.target.value)),children:y.map((D,Z)=>o.jsx("option",{value:Z,children:D.label},`${D.label}-${Z}`))})]}),o.jsx("p",{children:x.text})]}),o.jsx("textarea",{value:j,onChange:D=>f(D.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),o.jsxs("div",{className:"writing-feedback-grid",children:[o.jsxs("span",{children:[o.jsx("strong",{children:S.words})," words"]}),o.jsxs("span",{children:[o.jsx("strong",{children:S.sentences})," sentences"]}),o.jsxs("span",{children:[o.jsx("strong",{children:S.accents})," accents"]}),o.jsxs("span",{children:[o.jsx("strong",{children:S.connectors})," connectors"]}),o.jsxs("span",{children:[o.jsx("strong",{children:S.score})," score"]})]}),o.jsx("div",{className:"writing-tips",children:S.tips.length?S.tips.map(D=>o.jsx("span",{children:D},D)):o.jsx("span",{children:"Good shape. Read it out loud once."})}),o.jsxs("div",{className:"writing-actions",children:[o.jsx(ta,{text:j,size:"md"}),o.jsx("button",{onClick:C,disabled:!j.trim(),children:"Save practice"})]})]}),o.jsxs("section",{className:"writing-history",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Oc,{size:18})," History"]}),u.length?u.map(D=>o.jsxs("article",{className:"writing-entry",children:[o.jsxs("div",{className:"writing-entry-meta",children:[new Date(D.createdAt).toLocaleDateString()," - ",D.feedback.words," words"]}),o.jsx("p",{children:D.prompt}),o.jsx("blockquote",{children:D.text})]},D.id)):o.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function sv({totalChapters:r,visitedCount:d,savedWordsCount:u,levelFilter:c,palabrasSummary:m,lessonSummary:h,memoriaSummary:j,learnerProfile:f,reviewQueue:b,writingCount:y,sectionProgress:x,recommendations:S,onStart:C,onOpenMemoria:D,onOpenPalabras:Z,onOpenVerb:Y,onOpenReading:W,onOpenWriting:V,onSelectChapter:J}){const ee=r?Math.round(d/r*100):0;return o.jsxs("article",{className:"chapter-body home-dashboard",children:[o.jsxs("header",{className:"home-hero",children:[o.jsxs("div",{className:"home-kicker",children:[o.jsx(ef,{size:18}),"Plan de estudio"]}),o.jsx("h1",{className:"home-title",children:"Learn Spanish"}),o.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),o.jsxs("div",{className:"home-actions",children:[o.jsxs("button",{className:"home-primary",onClick:C,children:["Empezar",o.jsx(go,{size:16})]}),o.jsxs("button",{className:"home-secondary",onClick:D,children:[o.jsx(xo,{size:15}),"Memoria"]})]})]}),o.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Progreso"}),o.jsxs("strong",{children:[ee,"%"]}),o.jsxs("span",{children:[d," / ",r," capitulos"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Nivel"}),o.jsx("strong",{children:c==="ALL"?"Todo":c}),o.jsx("span",{children:"Filtro activo"})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Memoria"}),o.jsx("strong",{children:u}),o.jsxs("span",{children:[j.difficult," dificiles"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Palabras due"}),o.jsx("strong",{children:m.due}),o.jsxs("span",{children:[m.mastered," dominadas"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Lecciones"}),o.jsx("strong",{children:h.understood}),o.jsxs("span",{children:[h.read," leidas"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Writing"}),o.jsx("strong",{children:y}),o.jsx("span",{children:"entradas"})]})]}),o.jsxs("section",{className:"home-daily",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(qc,{size:18}),"Ruta diaria"]}),o.jsxs("div",{className:"home-daily-grid",children:[o.jsxs("button",{onClick:Z,children:[o.jsx("span",{children:"01"}),o.jsx("strong",{children:"10 palabras"}),o.jsx("em",{children:m.due?`${m.due} vencidas`:`${m.seen} vistas`})]}),o.jsxs("button",{onClick:W,children:[o.jsx("span",{children:"02"}),o.jsx("strong",{children:"Lectura con audio"}),o.jsx("em",{children:"lee y escucha una pagina"})]}),o.jsxs("button",{onClick:Y,children:[o.jsx("span",{children:"03"}),o.jsx("strong",{children:"Un verbo"}),o.jsx("em",{children:"tabla, voz, repeticion"})]}),o.jsxs("button",{onClick:D,children:[o.jsx("span",{children:"04"}),o.jsx("strong",{children:"Memoria"}),o.jsxs("em",{children:[u," guardadas"]})]}),o.jsxs("button",{onClick:V,children:[o.jsx("span",{children:"05"}),o.jsx("strong",{children:"Writing"}),o.jsx("em",{children:"sentence practice"})]})]})]}),o.jsxs("section",{className:"home-review-queue",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Ig,{size:18}),"Cola de repaso"]}),o.jsx("div",{className:"home-review-list",children:b.slice(0,8).map((K,le)=>o.jsxs("button",{onClick:()=>K.chapter?J(K.chapter):K.type==="writing"?V():D(),children:[o.jsx("span",{className:`review-type ${K.type}`,children:K.type}),o.jsx("strong",{children:K.title}),o.jsx("em",{children:K.detail})]},`${K.type}-${K.title}-${le}`))}),o.jsxs("div",{className:"home-review-summary",children:[f.vocabulary.due," vocabulary due · ",f.writing.needsPractice," writing rewrites · ",f.chapters.unvisited," unread chapters"]})]}),o.jsxs("section",{className:"home-progress-map",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Lc,{size:18}),"Mapa de progreso"]}),o.jsx("div",{className:"home-progress-list",children:x.map(K=>{const le=K.total?Math.round(K.visited/K.total*100):0;return o.jsxs("div",{className:"home-progress-row",children:[o.jsxs("div",{className:"home-progress-top",children:[o.jsx("span",{children:K.label}),o.jsxs("strong",{children:[K.visited," / ",K.total]})]}),o.jsx("div",{className:"home-progress-track",children:o.jsx("span",{style:{width:`${le}%`}})})]},K.id)})})]}),o.jsxs("section",{className:"home-path",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(ol,{size:18}),"Siguiente lectura"]}),o.jsx("div",{className:"home-recommendations",children:S.map((K,le)=>o.jsxs("button",{className:"home-rec",onClick:()=>J(K),children:[o.jsx("span",{className:"home-rec-index",children:String(le+1).padStart(2,"0")}),o.jsxs("span",{className:"home-rec-main",children:[o.jsx("span",{className:"home-rec-title",children:K.title}),o.jsxs("span",{className:"home-rec-meta",children:[K.sectionLabel," - ",K.level]})]}),o.jsx(go,{size:16})]},K.id))})]})]})}function iv(){const[r,d]=_.useState("tiempos"),[u,c]=_.useState("tiempos"),[m,h]=_.useState("ALL"),[j,f]=_.useState(!1),[b,y]=_.useState(!1),[x,S]=_.useState(!0),[C,D]=_.useState(!1),[Z,Y]=_.useState(""),[W,V]=_.useState({rate:.85,voiceURI:""}),[J,ee]=_.useState("both"),[K,le]=_.useState([]),[de,oe]=_.useState(null),[ae,xe]=_.useState(!1),[F,pe]=_.useState(""),[Ae,qe]=_.useState(!1),[ve,me]=_.useState(""),[T,z]=_.useState(()=>ho()),[B,X]=_.useState(0),$=nt.useRef(0),[g,O]=_.useState(1),[Q,I]=_.useState(null),[P,ue]=_.useState([]),[ye,Ze]=_.useState([]),[R,ze]=_.useState({}),[Te,Qe]=_.useState({});_.useEffect(()=>{(async()=>{try{const w=await window.storage.get("memoria-words");w?.value&&ue(JSON.parse(w.value))}catch{}try{const w=await window.storage.get("font-scale");if(w?.value){const U=parseFloat(w.value);U>=.85&&U<=1.3&&O(U)}}catch{}try{const w=await window.storage.get("last-read");if(w?.value){const U=JSON.parse(w.value);U?.chapterId&&U.chapterId!=="tiempos"&&I(U)}}catch{}try{const w=await window.storage.get("visited-chapters");w?.value&&Ze(JSON.parse(w.value))}catch{}try{const w=await window.storage.get($m);w?.value&&ze(JSON.parse(w.value))}catch{}try{const w=await window.storage.get(Im);w?.value&&Qe(JSON.parse(w.value))}catch{}try{const w=await window.storage.get(wc);if(w?.value){const U=JSON.parse(w.value);V(U),ks(U)}}catch{}try{const w=await window.storage.get(jc);(w?.value==="spanish"||w?.value==="both")&&ee(w.value)}catch{}try{const w=await window.storage.get(kc);w?.value&&pe(w.value)}catch{}try{const w=await window.storage.get(Tc);w?.value&&le(JSON.parse(w.value)||[])}catch{}try{const w=await window.storage.get(ys);w?.value&&z(ho(JSON.parse(w.value)))}catch{}})()},[]),_.useEffect(()=>{function w(U){oe(U.detail?.worker||null)}return window.addEventListener("learn-spanish-update-ready",w),()=>window.removeEventListener("learn-spanish-update-ready",w)},[]);function da(){de?.postMessage?.({type:"SKIP_WAITING"})}_.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(g));try{window.storage.set("font-scale",String(g))}catch{}},[g]);function na(w){O(U=>Math.max(.85,Math.min(1.3,+(U+w).toFixed(2))))}async function pa(w){try{await window.storage.set("memoria-words",JSON.stringify(w))}catch{}}async function Wa(w){try{await window.storage.set($m,JSON.stringify(w))}catch{}}async function Ns(w){try{await window.storage.set(Im,JSON.stringify(w))}catch{}}function Es(w){ze(w),Wa(w)}function ko(w,U){Qe(ne=>{const fe={...ne};return U?fe[w]=U:delete fe[w],Ns(fe),fe})}function So(w){V(w),ks(w);try{window.storage.set(wc,JSON.stringify(w))}catch{}}function zo(){ee(w=>{const U=w==="spanish"?"both":"spanish";try{window.storage.set(jc,U)}catch{}return U})}async function qs(w){ue(ne=>{const fe=ne.map(ce=>ce.word===w?{...ce,pending:!0}:ce);return pa(fe),fe});const U=await nf(w);ue(ne=>{const fe=ne.map(ce=>ce.word!==w?ce:U?{...ce,translation:U.main,pos:U.pos||ce.pos||"",extras:U.extras||[],pending:!1,translatedAt:Date.now()}:{...ce,pending:!1});return pa(fe),fe})}function Ts(w){ue(U=>{if(U.some(fe=>fe.word===w.word)){const fe=U.map(ce=>ce.word===w.word?{...ce,...w,tags:Array.from(new Set([...ce.tags||[],...w.tags||[]])),extras:Array.from(new Set([...ce.extras||[],...w.extras||[]])),savedAt:ce.savedAt||w.savedAt||Date.now()}:ce);return pa(fe),fe}const ne=[w,...U];return pa(ne),ne}),w.translation||qs(w.word)}function ma(w){ue(U=>{const ne=U.filter(fe=>fe.word!==w);return pa(ne),ne})}function As(w,U){ue(ne=>{const fe=ne.map(ce=>ce.word===w?{...ce,...U}:ce);return pa(fe),fe})}function Cs(){ue([]),pa([])}_.useEffect(()=>{if(P.length===0)return;const w=P.filter(U=>!U.translation&&!U.pending);w.length!==0&&w.slice(0,5).forEach((U,ne)=>{setTimeout(()=>qs(U.word),ne*800)})},[P.length]);const[Ms,tn]=_.useState(()=>{const w={};for(const U of ws)w[U.id]=!(U.id==="verbos"||U.id==="verbos2");return w}),Ne=_.useMemo(()=>{const w=[];for(const U of ws)for(const ne of U.chapters)(ne.alwaysVisible||m==="ALL"||ne.level===m)&&w.push({...ne,sectionId:U.id,sectionLabel:U.label});return w},[m]);_.useEffect(()=>{Ne.find(w=>w.id===u)||Ne.length&&(c(Ne[0].id),d(Ne[0].sectionId))},[Ne,u]),_.useEffect(()=>{const w=Ne.find(U=>U.id===u);w&&tn(U=>U[w.sectionId]?U:{...U,[w.sectionId]:!0})},[u,Ne]);const Da=_.useMemo(()=>Ne.find(w=>w.id===u),[Ne,u]),ot=Ne.findIndex(w=>w.id===u),No=ot>0?Ne[ot-1]:null,st=ot>=0&&ot<Ne.length-1?Ne[ot+1]:null,$e=_.useMemo(()=>new Set(ye),[ye]),Ia=_.useMemo(()=>Ne.filter(w=>$e.has(w.id)).length,[Ne,$e]),fa=_.useMemo(()=>{const w=Ne.filter(U=>!$e.has(U.id));return(w.length?w:Ne).slice(0,4)},[Ne,$e]),Ds=_.useMemo(()=>db(Z,Ne,P,K),[Z,Ne,P,K]),il=_.useMemo(()=>{const w=Object.values(Te||{});return{read:w.filter(U=>U==="read"||U==="understood").length,understood:w.filter(U=>U==="understood").length}},[Te]),ll=_.useMemo(()=>gf(P),[P]),qt=_.useMemo(()=>mb({chapters:Ne,visitedChapters:ye,lessonStatuses:Te,palabrasProgress:R,savedWords:P,writingEntries:K}),[Ne,ye,Te,R,P,K]),Sn=_.useMemo(()=>fb({chapters:Ne,lessonStatuses:Te,palabrasProgress:R,savedWords:P,writingEntries:K}),[Ne,Te,R,P,K]),nn=fa[0]||Ne[0],it=_.useMemo(()=>{const w=Object.values(R||{}),U=Date.now();return{seen:w.filter(ne=>ne?.seen).length,due:w.filter(ne=>ne?.seen&&(ne.dueAt||0)<=U).length,mastered:w.filter(ne=>ne?.mastered).length}},[R]),zn=_.useMemo(()=>ws.map(w=>{const U=w.chapters.filter(fe=>fe.alwaysVisible||m==="ALL"||fe.level===m),ne=U.filter(fe=>$e.has(fe.id)).length;return{id:w.id,label:w.label,total:U.length,visited:ne}}).filter(w=>w.total>0),[m,$e]),Tt=Ne.find(w=>w.id==="palabras-5000"),Us=Ne.find(w=>w.sectionId==="verbos")||Ne.find(w=>w.sectionId==="verbos2"),Eo=Ne.find(w=>w.sectionId==="lectura"),At=!!(Da&&!x&&!b&&!C),on=At?`${Da.sectionLabel||"Lesson"} - ${Da.title}`:"Open a lesson to count";_.useEffect(()=>{if(!At||!Da?.id)return;let w=!0;const U=()=>{if(!w||document.hidden)return;const fe=Date.now();X(ce=>ce+1),z(ce=>{const Za=ho(ce),La={...Za,totalSeconds:Za.totalSeconds+1,todaySeconds:Za.todaySeconds+1,byChapter:{...Za.byChapter,[Da.id]:(Number(Za.byChapter?.[Da.id])||0)+1},updatedAt:fe};if($.current+=1,$.current>=15){$.current=0;try{window.storage.set(ys,JSON.stringify(La))}catch{}}return La})},ne=window.setInterval(U,1e3);return()=>{w=!1,window.clearInterval(ne)}},[At,Da?.id]),_.useEffect(()=>{try{window.storage.set(ys,JSON.stringify(T))}catch{}},[x,b,C,u]),_.useEffect(()=>{const w=()=>{try{window.storage.set(ys,JSON.stringify(T))}catch{}};return window.addEventListener("pagehide",w),window.addEventListener("beforeunload",w),()=>{window.removeEventListener("pagehide",w),window.removeEventListener("beforeunload",w)}},[T]),_.useEffect(()=>{try{window.storage.set(rb,JSON.stringify(qt))}catch{}},[qt]);function Ua(w){c(w.id),d(w.sectionId||w.sectionId),y(!1),D(!1),S(!1),f(!1),I(null),Ze(U=>{if(U.includes(w.id))return U;const ne=[...U,w.id];try{window.storage.set("visited-chapters",JSON.stringify(ne))}catch{}return ne});try{window.storage.set("last-read",JSON.stringify({sectionId:w.sectionId,chapterId:w.id,title:w.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const U=document.querySelector(".book-main");U&&U.scrollTo({top:0,behavior:"smooth"})}}function Ls(){if(!Q)return;const w=ws.find(ne=>ne.id===Q.sectionId),U=w?.chapters.find(ne=>ne.id===Q.chapterId);U&&Ua({...U,sectionId:w.id}),I(null)}function Os(){I(null)}function _s(){return{app:"Learn Spanish",version:2,exportedAt:new Date().toISOString(),savedWords:P,visitedChapters:ye,palabrasProgress:R,lessonStatuses:Te,writingEntries:K,audioSettings:W,fontScale:g,translationMode:J,studyTime:T}}async function qo(w){const U=Array.isArray(w.savedWords)?w.savedWords:[],ne=Array.isArray(w.visitedChapters)?w.visitedChapters:[],fe=w.palabrasProgress&&typeof w.palabrasProgress=="object"?w.palabrasProgress:{},ce=w.lessonStatuses&&typeof w.lessonStatuses=="object"?w.lessonStatuses:{},Za=Array.isArray(w.writingEntries)?w.writingEntries:[],La=w.audioSettings&&typeof w.audioSettings=="object"?w.audioSettings:W,Sa=Number(w.fontScale),Ct=w.translationMode==="spanish"?"spanish":"both",Nn=ho(w.studyTime||T);ue(U),Ze(ne),ze(fe),Qe(ce),le(Za),V(La),ks(La),ee(Ct),z(Nn),Sa>=.85&&Sa<=1.3&&O(Sa),await pa(U),await Wa(fe),await Ns(ce),await window.storage.set("visited-chapters",JSON.stringify(ne)),await window.storage.set(Tc,JSON.stringify(Za)),await window.storage.set(wc,JSON.stringify(La)),await window.storage.set(jc,Ct),await window.storage.set(ys,JSON.stringify(Nn)),Sa>=.85&&Sa<=1.3&&await window.storage.set("font-scale",String(Sa))}async function To(){const w=F.trim();if(!w){me("Paste your Google OAuth Client ID first.");return}try{await window.storage.set(kc,w),pe(w),me("Google Client ID saved on this device.")}catch{me("Could not save the Client ID in this browser.")}}async function Gs(){const w=F.trim();if(!w){me("Paste and save your Google OAuth Client ID first.");return}qe(!0),me("Opening Google sign-in...");try{await window.storage.set(kc,w);const U=await Kb(w);me("Checking Google Drive...");const ne=await Jb(U),fe=await $b(U,ne?.id),ce=tv(_s(),fe);await qo(ce),await Wb(U,ce,ne?.id),me(`Google Drive synced: ${ce.savedWords.length} words, ${Object.keys(ce.palabrasProgress||{}).length} reviews.`)}catch(U){me(U?.message||"Google Drive sync did not finish.")}finally{qe(!1)}}function Hs(w=""){return o.jsxs("div",{className:`global-search ${w}`,children:[o.jsxs("label",{children:[o.jsx(Fg,{size:14}),o.jsx("input",{value:Z,onChange:U=>Y(U.target.value),placeholder:"Search everything..."})]}),Z.trim().length>=2&&o.jsx("div",{className:"global-search-results",children:Ds.length?Ds.map((U,ne)=>o.jsxs("button",{onClick:()=>{U.type==="memoria"?(S(!1),D(!1),y(!0)):U.type==="writing"?(S(!1),y(!1),D(!0)):Ua(U.chapter),Y(""),f(!1)},children:[o.jsx("span",{children:U.title}),o.jsx("em",{children:U.meta}),U.context&&o.jsx("small",{children:U.context})]},`${U.type}-${U.title}-${ne}`)):o.jsx("div",{className:"global-search-empty",children:"No matches"})})]})}return o.jsxs("div",{className:`book-root translation-mode-${J}`,children:[o.jsx(Xb,{savedWords:P,onSave:Ts,onRemove:ma}),o.jsx(Pg,{}),o.jsx("style",{children:lv}),o.jsxs("div",{className:"mobile-bar",children:[o.jsx("button",{className:"mobile-btn",onClick:()=>f(!0),"aria-label":"Open menu",children:o.jsx($g,{size:20})}),o.jsx("div",{className:"mobile-title",children:o.jsx("span",{className:"mobile-brand-script",children:"Español"})}),o.jsxs("div",{className:`study-timer ${At?"running":""}`,title:on,children:[o.jsx(ol,{size:14}),o.jsx("span",{className:"study-timer-main",children:Fm(T.todaySeconds)}),o.jsx("span",{className:"study-timer-sub",children:Fm(B)})]}),Hs("header-search"),o.jsxs("button",{className:`top-tool-btn ${J==="spanish"?"active":""}`,onClick:zo,"aria-label":J==="spanish"?"Show English translations":"Hide English translations",title:J==="spanish"?"Mostrar ingles":"Solo espanol",children:[o.jsx(bo,{size:15}),o.jsx("span",{children:J==="spanish"?"ES":"EN"})]}),o.jsx("button",{className:"top-tool-btn audio-stop",onClick:Ss,"aria-label":"Stop all audio",title:"Detener audio",children:o.jsx(af,{size:15})}),o.jsxs("div",{className:"font-controls",children:[o.jsx("button",{className:"font-btn",onClick:()=>na(-.05),"aria-label":"Smaller text",disabled:g<=.85,children:o.jsx("span",{className:"font-btn-small",children:"A"})}),o.jsx("button",{className:"font-btn",onClick:()=>na(.05),"aria-label":"Larger text",disabled:g>=1.3,children:o.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),ae&&o.jsx("div",{className:"sync-modal-overlay",role:"dialog","aria-modal":"true","aria-label":"Device sync",children:o.jsxs("div",{className:"sync-modal",children:[o.jsx("button",{className:"sync-close",onClick:()=>xe(!1),"aria-label":"Close sync",children:o.jsx(Nt,{size:15})}),o.jsx("div",{className:"sync-kicker",children:"Device Sync"}),o.jsx("h2",{children:"Sync your Spanish book across devices"}),o.jsx("p",{children:"Connect Google Drive and every device can sync the same private study file after you sign in."}),o.jsxs("div",{className:"sync-stats",children:[o.jsxs("span",{children:[P.length," Memoria words"]}),o.jsxs("span",{children:[Object.keys(R||{}).length," Palabras reviews"]}),o.jsxs("span",{children:[Object.keys(Te||{}).length," lesson marks"]})]}),o.jsxs("label",{className:"sync-client-field",children:[o.jsx("span",{children:"Google OAuth Client ID"}),o.jsx("input",{value:F,onChange:w=>pe(w.target.value),placeholder:"1234567890-abc.apps.googleusercontent.com",disabled:!1})]}),o.jsx("p",{className:"sync-help",children:"First time only: create a Google Cloud OAuth Client ID for this website origin, then paste it here."}),o.jsxs("div",{className:"sync-actions",children:[o.jsx("button",{onClick:To,children:"Save Client ID"}),o.jsx("button",{onClick:Gs,disabled:Ae||!F.trim(),children:Ae?"Syncing...":"Sync with Google Drive"})]}),ve&&o.jsx("div",{className:"sync-message",children:ve})]})}),Q&&o.jsxs("div",{className:"resume-banner",children:[o.jsxs("div",{className:"resume-banner-text",children:[o.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),o.jsx("span",{className:"resume-banner-title",children:Q.title})]}),o.jsxs("div",{className:"resume-banner-actions",children:[o.jsxs("button",{className:"resume-btn-primary",onClick:Ls,children:["Continuar",o.jsx(go,{size:14})]}),o.jsx("button",{className:"resume-btn-dismiss",onClick:Os,"aria-label":"Dismiss",children:o.jsx(Nt,{size:14})})]})]}),de&&o.jsxs("div",{className:"update-banner",children:[o.jsxs("div",{children:[o.jsx("span",{className:"resume-banner-label",children:"New version ready"}),o.jsx("span",{className:"resume-banner-title",children:"Refresh to use the latest study tools."})]}),o.jsxs("button",{className:"resume-btn-primary",onClick:da,children:["Update",o.jsx(go,{size:14})]})]}),o.jsxs("div",{className:"book-shell",children:[o.jsxs("aside",{className:`sidebar ${j?"open":""}`,children:[o.jsxs("div",{className:"sidebar-inner",children:[o.jsx("div",{className:"sidebar-header",children:o.jsxs("div",{className:"brand",children:[o.jsx("div",{className:"brand-mark",children:o.jsx(Dc,{size:18})}),o.jsxs("div",{className:"brand-text",children:[o.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),o.jsx("div",{className:"brand-title",children:"Español"})]}),o.jsx("button",{className:"sidebar-close",onClick:()=>f(!1),"aria-label":"Close menu",children:o.jsx(Nt,{size:18})})]})}),o.jsxs("nav",{className:"section-nav",children:[o.jsx("div",{className:`section-group home-nav-item ${x?"active":""}`,children:o.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{S(!0),y(!1),D(!1),f(!1)},children:[o.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:o.jsx(Lc,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Inicio"}),o.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count",children:ye.length})})]})}),ws.map(w=>{const U=w.chapters.filter(ce=>ce.alwaysVisible||m==="ALL"||ce.level===m),ne=w.id===r&&!b&&!x,fe=Ms[w.id];return o.jsxs("div",{className:`section-group ${ne?"active":""} ${fe?"expanded":"collapsed"}`,children:[o.jsxs("button",{className:"section-btn",onClick:()=>{tn(ce=>({...ce,[w.id]:!ce[w.id]}))},"aria-expanded":fe,children:[o.jsx("div",{className:"section-icon-wrap",children:o.jsx(sf,{id:w.id,size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:w.label}),o.jsx("div",{className:"section-sublabel",children:w.sublabel})]}),o.jsxs("div",{className:"section-meta",children:[o.jsx("div",{className:"section-count",children:U.length}),o.jsx(wo,{size:16,className:`section-chevron ${fe?"open":""}`})]})]}),fe&&U.length>0&&o.jsx("ul",{className:"chapter-list",children:U.map(ce=>{const La=ce.blocks?.some(Sa=>Sa.type==="foldable-grammar"||Sa.type==="foldable-stories")?null:Te[ce.id];return o.jsx("li",{children:o.jsxs("button",{className:`chapter-btn ${u===ce.id&&!b&&!x?"active":""}`,onClick:()=>{y(!1),Ua({...ce,sectionId:w.id})},children:[o.jsx("span",{className:"chapter-btn-level",children:ce.level}),o.jsx("span",{className:"chapter-btn-title",children:ce.title}),La&&o.jsx("span",{className:`chapter-btn-status ${La}`,children:La==="understood"?"Entendido":"Leído"})]})},ce.id)})})]},w.id)}),o.jsx("div",{className:`section-group memoria-nav-item ${b?"active":""}`,children:o.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{S(!1),D(!1),y(!0),f(!1)},children:[o.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:o.jsx(xo,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Memoria"}),o.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count memoria-count",children:P.length})})]})}),o.jsx("div",{className:`section-group writing-nav-item ${C?"active":""}`,children:o.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{S(!1),y(!1),D(!0),f(!1)},children:[o.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:o.jsx(tf,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Writing"}),o.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count writing-count",children:K.length})})]})})]}),o.jsxs("div",{className:"sidebar-footer",children:[o.jsx("button",{type:"button",className:"sidebar-sync-btn",onClick:()=>{xe(!0),me("")},children:"Sync"}),o.jsx("div",{className:"sig",children:"— para Othman"})]})]}),j&&o.jsx("div",{className:"scrim",onClick:()=>f(!1)})]}),o.jsxs("main",{className:"book-main",children:[o.jsxs("div",{className:`book-page ${x?"home-page":""}`,children:[x?o.jsx(sv,{totalChapters:Ne.length,visitedCount:Ia,savedWordsCount:P.length,levelFilter:m,palabrasSummary:it,lessonSummary:il,memoriaSummary:ll,learnerProfile:qt,reviewQueue:Sn,writingCount:K.length,sectionProgress:zn,recommendations:fa,onStart:()=>nn&&Ua(nn),onOpenMemoria:()=>{S(!1),D(!1),y(!0)},onOpenPalabras:()=>Tt&&Ua(Tt),onOpenVerb:()=>Us&&Ua(Us),onOpenReading:()=>Eo&&Ua(Eo),onOpenWriting:()=>{S(!1),y(!1),D(!0)},onSelectChapter:Ua}):b?o.jsx(nv,{savedWords:P,onRemove:ma,onClear:Cs,onUpdateWord:As}):C?o.jsx(ov,{savedWords:P,chapters:Ne,entries:K,onEntriesChange:le}):Da?o.jsx(Db,{chapter:Da,sectionId:r,onSaveWord:Ts,savedWords:P,onUpdateSavedWord:As,palabrasProgress:R,onPalabrasProgressChange:Es,lessonStatuses:Te,onLessonStatusChange:ko}):o.jsxs("div",{className:"empty",children:[o.jsx(yo,{size:28}),o.jsx("p",{children:"No hay capítulos en este nivel."})]}),!x&&!b&&!C&&o.jsxs("nav",{className:"chapter-nav",children:[No?o.jsxs("button",{className:"nav-btn prev",onClick:()=>Ua(No),children:[o.jsx(Zg,{size:16}),o.jsxs("div",{children:[o.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),o.jsx("div",{className:"nav-title",children:No.title})]})]}):o.jsx("div",{}),st?o.jsxs("button",{className:"nav-btn next",onClick:()=>Ua(st),children:[o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),o.jsx("div",{className:"nav-title",children:st.title})]}),o.jsx(go,{size:16})]}):o.jsx("div",{})]})]}),o.jsx("footer",{className:"level-bar",children:o.jsxs("div",{className:"level-bar-inner",children:[o.jsxs("div",{className:"level-bar-label",children:[o.jsx(xo,{size:14})," Nivel"]}),o.jsxs("div",{className:"level-pills",children:[o.jsx("button",{className:`level-pill ${m==="ALL"?"active":""}`,onClick:()=>h("ALL"),children:"Todos"}),hb.map(w=>o.jsx("button",{className:`level-pill ${m===w?"active":""}`,onClick:()=>h(w),children:w},w))]}),o.jsx(wb,{settings:W,onChange:So}),o.jsx("div",{className:"level-bar-counter",children:x?`${Ia} / ${Ne.length}`:ot>=0?`${ot+1} / ${Ne.length}`:"—"})]})})]})]})]})}const lv=`
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
.sync-actions {
  justify-content: flex-start;
}
.sync-actions button:last-child {
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
`;typeof window<"u"&&!window.storage&&(window.storage={async get(r){const d=window.localStorage.getItem(r);return d===null?null:{value:d}},async set(r,d){window.localStorage.setItem(r,d)},async delete(r){window.localStorage.removeItem(r)}});Gg();_g.createRoot(document.getElementById("root")).render(o.jsx(nt.StrictMode,{children:o.jsx(iv,{})}));
