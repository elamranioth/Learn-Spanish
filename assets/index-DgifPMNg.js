(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const k of m)if(k.type==="childList")for(const E of k.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&c(E)}).observe(document,{childList:!0,subtree:!0});function v(m){const k={};return m.integrity&&(k.integrity=m.integrity),m.referrerPolicy&&(k.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?k.credentials="include":m.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function c(m){if(m.ep)return;m.ep=!0;const k=v(m);fetch(m.href,k)}})();function _h(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Mr={exports:{}},Ro={};var Qp;function Hh(){if(Qp)return Ro;Qp=1;var u=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function v(c,m,k){var E=null;if(k!==void 0&&(E=""+k),m.key!==void 0&&(E=""+m.key),"key"in m){k={};for(var j in m)j!=="key"&&(k[j]=m[j])}else k=m;return m=k.ref,{$$typeof:u,type:c,key:E,ref:m!==void 0?m:null,props:k}}return Ro.Fragment=b,Ro.jsx=v,Ro.jsxs=v,Ro}var Xp;function Gh(){return Xp||(Xp=1,Mr.exports=Hh()),Mr.exports}var i=Gh(),Ur={exports:{}},le={};var Zp;function Bh(){if(Zp)return le;Zp=1;var u=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),E=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Y=Symbol.iterator;function F(d){return d===null||typeof d!="object"?null:(d=Y&&d[Y]||d["@@iterator"],typeof d=="function"?d:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,P={};function Q(d,C,_){this.props=d,this.context=C,this.refs=P,this.updater=_||I}Q.prototype.isReactComponent={},Q.prototype.setState=function(d,C){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,C,"setState")},Q.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function oe(){}oe.prototype=Q.prototype;function ae(d,C,_){this.props=d,this.context=C,this.refs=P,this.updater=_||I}var be=ae.prototype=new oe;be.constructor=ae,G(be,Q.prototype),be.isPureReactComponent=!0;var $=Array.isArray;function te(){}var X={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function U(d,C,_){var B=_.ref;return{$$typeof:u,type:d,key:C,ref:B!==void 0?B:null,props:_}}function ue(d,C){return U(d.type,C,d.props)}function ze(d){return typeof d=="object"&&d!==null&&d.$$typeof===u}function fe(d){var C={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(_){return C[_]})}var Ee=/\/+/g;function We(d,C){return typeof d=="object"&&d!==null&&d.key!=null?fe(""+d.key):C.toString(36)}function Be(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(te,te):(d.status="pending",d.then(function(C){d.status==="pending"&&(d.status="fulfilled",d.value=C)},function(C){d.status==="pending"&&(d.status="rejected",d.reason=C)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function N(d,C,_,B,se){var ie=typeof d;(ie==="undefined"||ie==="boolean")&&(d=null);var O=!1;if(d===null)O=!0;else switch(ie){case"bigint":case"string":case"number":O=!0;break;case"object":switch(d.$$typeof){case u:case b:O=!0;break;case q:return O=d._init,N(O(d._payload),C,_,B,se)}}if(O)return se=se(d),O=B===""?"."+We(d,0):B,$(se)?(_="",O!=null&&(_=O.replace(Ee,"$&/")+"/"),N(se,C,_,"",function(Oe){return Oe})):se!=null&&(ze(se)&&(se=ue(se,_+(se.key==null||d&&d.key===se.key?"":(""+se.key).replace(Ee,"$&/")+"/")+O)),C.push(se)),1;O=0;var ge=B===""?".":B+":";if($(d))for(var ce=0;ce<d.length;ce++)B=d[ce],ie=ge+We(B,ce),O+=N(B,C,_,ie,se);else if(ce=F(d),typeof ce=="function")for(d=ce.call(d),ce=0;!(B=d.next()).done;)B=B.value,ie=ge+We(B,ce++),O+=N(B,C,_,ie,se);else if(ie==="object"){if(typeof d.then=="function")return N(Be(d),C,_,B,se);throw C=String(d),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return O}function H(d,C,_){if(d==null)return d;var B=[],se=0;return N(d,B,"","",function(ie){return C.call(_,ie,se++)}),B}function Z(d){if(d._status===-1){var C=d._result;C=C(),C.then(function(_){(d._status===0||d._status===-1)&&(d._status=1,d._result=_)},function(_){(d._status===0||d._status===-1)&&(d._status=2,d._result=_)}),d._status===-1&&(d._status=0,d._result=C)}if(d._status===1)return d._result.default;throw d._result}var re=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},de={map:H,forEach:function(d,C,_){H(d,function(){C.apply(this,arguments)},_)},count:function(d){var C=0;return H(d,function(){C++}),C},toArray:function(d){return H(d,function(C){return C})||[]},only:function(d){if(!ze(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return le.Activity=L,le.Children=de,le.Component=Q,le.Fragment=v,le.Profiler=m,le.PureComponent=ae,le.StrictMode=c,le.Suspense=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,le.__COMPILER_RUNTIME={__proto__:null,c:function(d){return X.H.useMemoCache(d)}},le.cache=function(d){return function(){return d.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(d,C,_){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var B=G({},d.props),se=d.key;if(C!=null)for(ie in C.key!==void 0&&(se=""+C.key),C)!K.call(C,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&C.ref===void 0||(B[ie]=C[ie]);var ie=arguments.length-2;if(ie===1)B.children=_;else if(1<ie){for(var O=Array(ie),ge=0;ge<ie;ge++)O[ge]=arguments[ge+2];B.children=O}return U(d.type,se,B)},le.createContext=function(d){return d={$$typeof:E,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:k,_context:d},d},le.createElement=function(d,C,_){var B,se={},ie=null;if(C!=null)for(B in C.key!==void 0&&(ie=""+C.key),C)K.call(C,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(se[B]=C[B]);var O=arguments.length-2;if(O===1)se.children=_;else if(1<O){for(var ge=Array(O),ce=0;ce<O;ce++)ge[ce]=arguments[ce+2];se.children=ge}if(d&&d.defaultProps)for(B in O=d.defaultProps,O)se[B]===void 0&&(se[B]=O[B]);return U(d,ie,se)},le.createRef=function(){return{current:null}},le.forwardRef=function(d){return{$$typeof:j,render:d}},le.isValidElement=ze,le.lazy=function(d){return{$$typeof:q,_payload:{_status:-1,_result:d},_init:Z}},le.memo=function(d,C){return{$$typeof:h,type:d,compare:C===void 0?null:C}},le.startTransition=function(d){var C=X.T,_={};X.T=_;try{var B=d(),se=X.S;se!==null&&se(_,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(te,re)}catch(ie){re(ie)}finally{C!==null&&_.types!==null&&(C.types=_.types),X.T=C}},le.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},le.use=function(d){return X.H.use(d)},le.useActionState=function(d,C,_){return X.H.useActionState(d,C,_)},le.useCallback=function(d,C){return X.H.useCallback(d,C)},le.useContext=function(d){return X.H.useContext(d)},le.useDebugValue=function(){},le.useDeferredValue=function(d,C){return X.H.useDeferredValue(d,C)},le.useEffect=function(d,C){return X.H.useEffect(d,C)},le.useEffectEvent=function(d){return X.H.useEffectEvent(d)},le.useId=function(){return X.H.useId()},le.useImperativeHandle=function(d,C,_){return X.H.useImperativeHandle(d,C,_)},le.useInsertionEffect=function(d,C){return X.H.useInsertionEffect(d,C)},le.useLayoutEffect=function(d,C){return X.H.useLayoutEffect(d,C)},le.useMemo=function(d,C){return X.H.useMemo(d,C)},le.useOptimistic=function(d,C){return X.H.useOptimistic(d,C)},le.useReducer=function(d,C,_){return X.H.useReducer(d,C,_)},le.useRef=function(d){return X.H.useRef(d)},le.useState=function(d){return X.H.useState(d)},le.useSyncExternalStore=function(d,C,_){return X.H.useSyncExternalStore(d,C,_)},le.useTransition=function(){return X.H.useTransition()},le.version="19.2.5",le}var Kp;function Rr(){return Kp||(Kp=1,Ur.exports=Bh()),Ur.exports}var R=Rr();const en=_h(R);var Dr={exports:{}},Yo={},Lr={exports:{}},Or={};var Jp;function Rh(){return Jp||(Jp=1,(function(u){function b(N,H){var Z=N.length;N.push(H);e:for(;0<Z;){var re=Z-1>>>1,de=N[re];if(0<m(de,H))N[re]=H,N[Z]=de,Z=re;else break e}}function v(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var H=N[0],Z=N.pop();if(Z!==H){N[0]=Z;e:for(var re=0,de=N.length,d=de>>>1;re<d;){var C=2*(re+1)-1,_=N[C],B=C+1,se=N[B];if(0>m(_,Z))B<de&&0>m(se,_)?(N[re]=se,N[B]=Z,re=B):(N[re]=_,N[C]=Z,re=C);else if(B<de&&0>m(se,Z))N[re]=se,N[B]=Z,re=B;else break e}}return H}function m(N,H){var Z=N.sortIndex-H.sortIndex;return Z!==0?Z:N.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;u.unstable_now=function(){return k.now()}}else{var E=Date,j=E.now();u.unstable_now=function(){return E.now()-j}}var x=[],h=[],q=1,L=null,Y=3,F=!1,I=!1,G=!1,P=!1,Q=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function be(N){for(var H=v(h);H!==null;){if(H.callback===null)c(h);else if(H.startTime<=N)c(h),H.sortIndex=H.expirationTime,b(x,H);else break;H=v(h)}}function $(N){if(G=!1,be(N),!I)if(v(x)!==null)I=!0,te||(te=!0,fe());else{var H=v(h);H!==null&&Be($,H.startTime-N)}}var te=!1,X=-1,K=5,U=-1;function ue(){return P?!0:!(u.unstable_now()-U<K)}function ze(){if(P=!1,te){var N=u.unstable_now();U=N;var H=!0;try{e:{I=!1,G&&(G=!1,oe(X),X=-1),F=!0;var Z=Y;try{a:{for(be(N),L=v(x);L!==null&&!(L.expirationTime>N&&ue());){var re=L.callback;if(typeof re=="function"){L.callback=null,Y=L.priorityLevel;var de=re(L.expirationTime<=N);if(N=u.unstable_now(),typeof de=="function"){L.callback=de,be(N),H=!0;break a}L===v(x)&&c(x),be(N)}else c(x);L=v(x)}if(L!==null)H=!0;else{var d=v(h);d!==null&&Be($,d.startTime-N),H=!1}}break e}finally{L=null,Y=Z,F=!1}H=void 0}}finally{H?fe():te=!1}}}var fe;if(typeof ae=="function")fe=function(){ae(ze)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,We=Ee.port2;Ee.port1.onmessage=ze,fe=function(){We.postMessage(null)}}else fe=function(){Q(ze,0)};function Be(N,H){X=Q(function(){N(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(N){N.callback=null},u.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},u.unstable_getCurrentPriorityLevel=function(){return Y},u.unstable_next=function(N){switch(Y){case 1:case 2:case 3:var H=3;break;default:H=Y}var Z=Y;Y=H;try{return N()}finally{Y=Z}},u.unstable_requestPaint=function(){P=!0},u.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=Y;Y=N;try{return H()}finally{Y=Z}},u.unstable_scheduleCallback=function(N,H,Z){var re=u.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,N={id:q++,callback:H,priorityLevel:N,startTime:Z,expirationTime:de,sortIndex:-1},Z>re?(N.sortIndex=Z,b(h,N),v(x)===null&&N===v(h)&&(G?(oe(X),X=-1):G=!0,Be($,Z-re))):(N.sortIndex=de,b(x,N),I||F||(I=!0,te||(te=!0,fe()))),N},u.unstable_shouldYield=ue,u.unstable_wrapCallback=function(N){var H=Y;return function(){var Z=Y;Y=H;try{return N.apply(this,arguments)}finally{Y=Z}}}})(Or)),Or}var Ip;function Yh(){return Ip||(Ip=1,Lr.exports=Rh()),Lr.exports}var _r={exports:{}},la={};var Wp;function Vh(){if(Wp)return la;Wp=1;var u=Rr();function b(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)h+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(){}var c={d:{f:v,r:function(){throw Error(b(522))},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},m=Symbol.for("react.portal");function k(x,h,q){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:L==null?null:""+L,children:x,containerInfo:h,implementation:q}}var E=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return la.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,la.createPortal=function(x,h){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(b(299));return k(x,h,null,q)},la.flushSync=function(x){var h=E.T,q=c.p;try{if(E.T=null,c.p=2,x)return x()}finally{E.T=h,c.p=q,c.d.f()}},la.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(x,h))},la.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},la.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var q=h.as,L=j(q,h.crossOrigin),Y=typeof h.integrity=="string"?h.integrity:void 0,F=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;q==="style"?c.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:L,integrity:Y,fetchPriority:F}):q==="script"&&c.d.X(x,{crossOrigin:L,integrity:Y,fetchPriority:F,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},la.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var q=j(h.as,h.crossOrigin);c.d.M(x,{crossOrigin:q,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(x)},la.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var q=h.as,L=j(q,h.crossOrigin);c.d.L(x,q,{crossOrigin:L,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},la.preloadModule=function(x,h){if(typeof x=="string")if(h){var q=j(h.as,h.crossOrigin);c.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:q,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(x)},la.requestFormReset=function(x){c.d.r(x)},la.unstable_batchedUpdates=function(x,h){return x(h)},la.useFormState=function(x,h,q){return E.H.useFormState(x,h,q)},la.useFormStatus=function(){return E.H.useHostTransitionStatus()},la.version="19.2.5",la}var $p;function Qh(){if($p)return _r.exports;$p=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(b){console.error(b)}}return u(),_r.exports=Vh(),_r.exports}var Fp;function Xh(){if(Fp)return Yo;Fp=1;var u=Yh(),b=Rr(),v=Qh();function c(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function k(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function E(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function j(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function x(e){if(k(e)!==e)throw Error(c(188))}function h(e){var a=e.alternate;if(!a){if(a=k(e),a===null)throw Error(c(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return x(o),e;if(s===n)return x(o),a;s=s.sibling}throw Error(c(188))}if(t.return!==n.return)t=o,n=s;else{for(var l=!1,r=o.child;r;){if(r===t){l=!0,t=o,n=s;break}if(r===n){l=!0,n=o,t=s;break}r=r.sibling}if(!l){for(r=s.child;r;){if(r===t){l=!0,t=s,n=o;break}if(r===n){l=!0,n=s,t=o;break}r=r.sibling}if(!l)throw Error(c(189))}}if(t.alternate!==n)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:a}function q(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=q(e),a!==null)return a;e=e.sibling}return null}var L=Object.assign,Y=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),ze=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=ze&&e[ze]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Symbol.for("react.client.reference");function We(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Q:return"Profiler";case P:return"StrictMode";case $:return"Suspense";case te:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case ae:return e.displayName||"Context";case oe:return(e._context.displayName||"Context")+".Consumer";case be:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return a=e.displayName||null,a!==null?a:We(e.type)||"Memo";case K:a=e._payload,e=e._init;try{return We(e(a))}catch{}}return null}var Be=Array.isArray,N=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},re=[],de=-1;function d(e){return{current:e}}function C(e){0>de||(e.current=re[de],re[de]=null,de--)}function _(e,a){de++,re[de]=e.current,e.current=a}var B=d(null),se=d(null),ie=d(null),O=d(null);function ge(e,a){switch(_(ie,a),_(se,e),_(B,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?mp(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=mp(a),e=fp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(B),_(B,e)}function ce(){C(B),C(se),C(ie)}function Oe(e){e.memoizedState!==null&&_(O,e);var a=B.current,t=fp(a,e.type);a!==t&&(_(se,e),_(B,t))}function Fe(e){se.current===e&&(C(B),C(se)),O.current===e&&(C(O),_o._currentValue=Z)}var ca,Xn;function Ra(e){if(ca===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);ca=a&&a[1]||"",Xn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ca+e+Xn}var ba=!1;function Zn(e,a){if(!e||ba)return"";ba=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(S){var z=S}Reflect.construct(e,[],D)}else{try{D.call()}catch(S){z=S}e.call(D.prototype)}}else{try{throw Error()}catch(S){z=S}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(S){if(S&&z&&typeof S.stack=="string")return[S.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),l=s[0],r=s[1];if(l&&r){var p=l.split(`
`),w=r.split(`
`);for(o=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;if(n===p.length||o===w.length)for(n=p.length-1,o=w.length-1;1<=n&&0<=o&&p[n]!==w[o];)o--;for(;1<=n&&0<=o;n--,o--)if(p[n]!==w[o]){if(n!==1||o!==1)do if(n--,o--,0>o||p[n]!==w[o]){var A=`
`+p[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=o);break}}}finally{ba=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ra(t):""}function yi(e,a){switch(e.tag){case 26:case 27:case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return e.child!==a&&a!==null?Ra("Suspense Fallback"):Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return Zn(e.type,!1);case 11:return Zn(e.type.render,!1);case 1:return Zn(e.type,!0);case 31:return Ra("Activity");default:return""}}function T(e){try{var a="",t=null;do a+=yi(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var V=Object.prototype.hasOwnProperty,pe=u.unstable_scheduleCallback,ke=u.unstable_cancelCallback,Ce=u.unstable_shouldYield,Kn=u.unstable_requestPaint,va=u.unstable_now,gm=u.unstable_getCurrentPriorityLevel,Xr=u.unstable_ImmediatePriority,Zr=u.unstable_UserBlockingPriority,$o=u.unstable_NormalPriority,bm=u.unstable_LowPriority,Kr=u.unstable_IdlePriority,vm=u.log,ym=u.unstable_setDisableYieldValue,Jn=null,ya=null;function ut(e){if(typeof vm=="function"&&ym(e),ya&&typeof ya.setStrictMode=="function")try{ya.setStrictMode(Jn,e)}catch{}}var xa=Math.clz32?Math.clz32:jm,xm=Math.log,wm=Math.LN2;function jm(e){return e>>>=0,e===0?32:31-(xm(e)/wm|0)|0}var Fo=256,Po=262144,es=4194304;function Ot(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function as(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~s,n!==0?o=Ot(n):(l&=r,l!==0?o=Ot(l):t||(t=r&~e,t!==0&&(o=Ot(t))))):(r=n&~s,r!==0?o=Ot(r):l!==0?o=Ot(l):t||(t=n&~e,t!==0&&(o=Ot(t)))),o===0?0:a!==0&&a!==o&&(a&s)===0&&(s=o&-o,t=a&-a,s>=t||s===32&&(t&4194048)!==0)?a:o}function In(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function zm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(){var e=es;return es<<=1,(es&62914560)===0&&(es=4194304),e}function xi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Wn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function km(e,a,t,n,o,s){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,p=e.expirationTimes,w=e.hiddenUpdates;for(t=l&~t;0<t;){var A=31-xa(t),D=1<<A;r[A]=0,p[A]=-1;var z=w[A];if(z!==null)for(w[A]=null,A=0;A<z.length;A++){var S=z[A];S!==null&&(S.lane&=-536870913)}t&=~D}n!==0&&Ir(e,n,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(l&~a))}function Ir(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-xa(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function Wr(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-xa(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}function $r(e,a){var t=a&-a;return t=(t&42)!==0?1:wi(t),(t&(e.suspendedLanes|a))!==0?0:t}function wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:_p(e.type))}function Pr(e,a){var t=H.p;try{return H.p=e,a()}finally{H.p=t}}var dt=Math.random().toString(36).slice(2),ta="__reactFiber$"+dt,ua="__reactProps$"+dt,tn="__reactContainer$"+dt,zi="__reactEvents$"+dt,Sm="__reactListeners$"+dt,Nm="__reactHandles$"+dt,ec="__reactResources$"+dt,$n="__reactMarker$"+dt;function ki(e){delete e[ta],delete e[ua],delete e[zi],delete e[Sm],delete e[Nm]}function nn(e){var a=e[ta];if(a)return a;for(var t=e.parentNode;t;){if(a=t[tn]||t[ta]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=wp(e);e!==null;){if(t=e[ta])return t;e=wp(e)}return a}e=t,t=e.parentNode}return null}function on(e){if(e=e[ta]||e[tn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Fn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(c(33))}function sn(e){var a=e[ec];return a||(a=e[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Pe(e){e[$n]=!0}var ac=new Set,tc={};function _t(e,a){ln(e,a),ln(e+"Capture",a)}function ln(e,a){for(tc[e]=a,e=0;e<a.length;e++)ac.add(a[e])}var qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},oc={};function Em(e){return V.call(oc,e)?!0:V.call(nc,e)?!1:qm.test(e)?oc[e]=!0:(nc[e]=!0,!1)}function ts(e,a,t){if(Em(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function ns(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Za(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function Ea(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Tm(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(l){t=""+l,s.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Si(e){if(!e._valueTracker){var a=sc(e)?"checked":"value";e._valueTracker=Tm(e,a,""+e[a])}}function ic(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=sc(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Am=/[\n"\\]/g;function Ta(e){return e.replace(Am,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ni(e,a,t,n,o,s,l,r){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ea(a)):e.value!==""+Ea(a)&&(e.value=""+Ea(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?qi(e,l,Ea(a)):t!=null?qi(e,l,Ea(t)):n!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Ea(r):e.removeAttribute("name")}function lc(e,a,t,n,o,s,l,r){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){Si(e);return}t=t!=null?""+Ea(t):"",a=a!=null?""+Ea(a):t,r||a===e.value||(e.value=a),e.defaultValue=a}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Si(e)}function qi(e,a,t){a==="number"&&os(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function rn(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ea(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function rc(e,a,t){if(a!=null&&(a=""+Ea(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ea(t):""}function cc(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(c(92));if(Be(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Ea(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Si(e)}function cn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uc(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Cm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function dc(e,a,t){if(a!=null&&typeof a!="object")throw Error(c(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in a)n=a[o],a.hasOwnProperty(o)&&t[o]!==n&&uc(e,o,n)}else for(var s in a)a.hasOwnProperty(s)&&uc(e,s,a[s])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ss(e){return Um.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ka(){}var Ti=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function pc(e){var a=on(e);if(a&&(e=a.stateNode)){var t=e[ua]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ni(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ta(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=n[ua]||null;if(!o)throw Error(c(90));Ni(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&ic(n)}break e;case"textarea":rc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&rn(e,!!t.multiple,a,!1)}}}var Ci=!1;function mc(e,a,t){if(Ci)return e(a,t);Ci=!0;try{var n=e(a);return n}finally{if(Ci=!1,(un!==null||dn!==null)&&(Zs(),un&&(a=un,e=dn,dn=un=null,pc(a),e)))for(a=0;a<e.length;a++)pc(e[a])}}function Pn(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ua]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mi=!1;if(Ja)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Mi=!1}var pt=null,Ui=null,is=null;function fc(){if(is)return is;var e,a=Ui,t=a.length,n,o="value"in pt?pt.value:pt.textContent,s=o.length;for(e=0;e<t&&a[e]===o[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===o[s-n];n++);return is=o.slice(e,1<n?1-n:void 0)}function ls(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function hc(){return!1}function da(e){function a(t,n,o,s,l){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rs:hc,this.isPropagationStopped=hc,this}return L(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),a}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=da(Ht),ao=L({},Ht,{view:0,detail:0}),Dm=da(ao),Di,Li,to,us=L({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Di=e.screenX-to.screenX,Li=e.screenY-to.screenY):Li=Di=0,to=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),gc=da(us),Lm=L({},us,{dataTransfer:0}),Om=da(Lm),_m=L({},ao,{relatedTarget:0}),Oi=da(_m),Hm=L({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=da(Hm),Bm=L({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rm=da(Bm),Ym=L({},Ht,{data:0}),bc=da(Ym),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Xm[e])?!!a[e]:!1}function _i(){return Zm}var Km=L({},ao,{key:function(e){if(e.key){var a=Vm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jm=da(Km),Im=L({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=da(Im),Wm=L({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),$m=da(Wm),Fm=L({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pm=da(Fm),ef=L({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),af=da(ef),tf=L({},Ht,{newState:0,oldState:0}),nf=da(tf),of=[9,13,27,32],Hi=Ja&&"CompositionEvent"in window,no=null;Ja&&"documentMode"in document&&(no=document.documentMode);var sf=Ja&&"TextEvent"in window&&!no,yc=Ja&&(!Hi||no&&8<no&&11>=no),xc=" ",wc=!1;function jc(e,a){switch(e){case"keyup":return of.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function lf(e,a){switch(e){case"compositionend":return zc(a);case"keypress":return a.which!==32?null:(wc=!0,xc);case"textInput":return e=a.data,e===xc&&wc?null:e;default:return null}}function rf(e,a){if(pn)return e==="compositionend"||!Hi&&jc(e,a)?(e=fc(),is=Ui=pt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return yc&&a.locale!=="ko"?null:a.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!cf[e.type]:a==="textarea"}function Sc(e,a,t,n){un?dn?dn.push(n):dn=[n]:un=n,a=Ps(a,"onChange"),0<a.length&&(t=new cs("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var oo=null,so=null;function uf(e){lp(e,0)}function ds(e){var a=Fn(e);if(ic(a))return e}function Nc(e,a){if(e==="change")return a}var qc=!1;if(Ja){var Gi;if(Ja){var Bi="oninput"in document;if(!Bi){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),Bi=typeof Ec.oninput=="function"}Gi=Bi}else Gi=!1;qc=Gi&&(!document.documentMode||9<document.documentMode)}function Tc(){oo&&(oo.detachEvent("onpropertychange",Ac),so=oo=null)}function Ac(e){if(e.propertyName==="value"&&ds(so)){var a=[];Sc(a,so,e,Ai(e)),mc(uf,a)}}function df(e,a,t){e==="focusin"?(Tc(),oo=a,so=t,oo.attachEvent("onpropertychange",Ac)):e==="focusout"&&Tc()}function pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(so)}function mf(e,a){if(e==="click")return ds(a)}function ff(e,a){if(e==="input"||e==="change")return ds(a)}function hf(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var wa=typeof Object.is=="function"?Object.is:hf;function io(e,a){if(wa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!V.call(a,o)||!wa(e[o],a[o]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mc(e,a){var t=Cc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Cc(t)}}function Uc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Uc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Dc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=os(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=os(e.document)}return a}function Ri(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var gf=Ja&&"documentMode"in document&&11>=document.documentMode,mn=null,Yi=null,lo=null,Vi=!1;function Lc(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vi||mn==null||mn!==os(n)||(n=mn,"selectionStart"in n&&Ri(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),lo&&io(lo,n)||(lo=n,n=Ps(Yi,"onSelect"),0<n.length&&(a=new cs("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=mn)))}function Gt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var fn={animationend:Gt("Animation","AnimationEnd"),animationiteration:Gt("Animation","AnimationIteration"),animationstart:Gt("Animation","AnimationStart"),transitionrun:Gt("Transition","TransitionRun"),transitionstart:Gt("Transition","TransitionStart"),transitioncancel:Gt("Transition","TransitionCancel"),transitionend:Gt("Transition","TransitionEnd")},Qi={},Oc={};Ja&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Bt(e){if(Qi[e])return Qi[e];if(!fn[e])return e;var a=fn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Oc)return Qi[e]=a[t];return e}var _c=Bt("animationend"),Hc=Bt("animationiteration"),Gc=Bt("animationstart"),bf=Bt("transitionrun"),vf=Bt("transitionstart"),yf=Bt("transitioncancel"),Bc=Bt("transitionend"),Rc=new Map,Xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xi.push("scrollEnd");function Ha(e,a){Rc.set(e,a),_t(a,[e])}var ps=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Aa=[],hn=0,Zi=0;function ms(){for(var e=hn,a=Zi=hn=0;a<e;){var t=Aa[a];Aa[a++]=null;var n=Aa[a];Aa[a++]=null;var o=Aa[a];Aa[a++]=null;var s=Aa[a];if(Aa[a++]=null,n!==null&&o!==null){var l=n.pending;l===null?o.next=o:(o.next=l.next,l.next=o),n.pending=o}s!==0&&Yc(t,o,s)}}function fs(e,a,t,n){Aa[hn++]=e,Aa[hn++]=a,Aa[hn++]=t,Aa[hn++]=n,Zi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ki(e,a,t,n){return fs(e,a,t,n),hs(e)}function Rt(e,a){return fs(e,null,null,a),hs(e)}function Yc(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var o=!1,s=e.return;s!==null;)s.childLanes|=t,n=s.alternate,n!==null&&(n.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&a!==null&&(o=31-xa(t),e=s.hiddenUpdates,n=e[o],n===null?e[o]=[a]:n.push(a),a.lane=t|536870912),s):null}function hs(e){if(50<Ao)throw Ao=0,tr=null,Error(c(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var gn={};function xf(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(e,a,t,n){return new xf(e,a,t,n)}function Ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ia(e,a){var t=e.alternate;return t===null?(t=ja(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Vc(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function gs(e,a,t,n,o,s){var l=0;if(n=e,typeof e=="function")Ji(e)&&(l=1);else if(typeof e=="string")l=Sh(e,t,B.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=ja(31,t,a,o),e.elementType=U,e.lanes=s,e;case G:return Yt(t.children,o,s,a);case P:l=8,o|=24;break;case Q:return e=ja(12,t,a,o|2),e.elementType=Q,e.lanes=s,e;case $:return e=ja(13,t,a,o),e.elementType=$,e.lanes=s,e;case te:return e=ja(19,t,a,o),e.elementType=te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:l=10;break e;case oe:l=9;break e;case be:l=11;break e;case X:l=14;break e;case K:l=16,n=null;break e}l=29,t=Error(c(130,e===null?"null":typeof e,"")),n=null}return a=ja(l,t,a,o),a.elementType=e,a.type=n,a.lanes=s,a}function Yt(e,a,t,n){return e=ja(7,e,n,a),e.lanes=t,e}function Ii(e,a,t){return e=ja(6,e,null,a),e.lanes=t,e}function Qc(e){var a=ja(18,null,null,0);return a.stateNode=e,a}function Wi(e,a,t){return a=ja(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Xc=new WeakMap;function Ca(e,a){if(typeof e=="object"&&e!==null){var t=Xc.get(e);return t!==void 0?t:(a={value:e,source:a,stack:T(a)},Xc.set(e,a),a)}return{value:e,source:a,stack:T(a)}}var bn=[],vn=0,bs=null,ro=0,Ma=[],Ua=0,mt=null,Ya=1,Va="";function Wa(e,a){bn[vn++]=ro,bn[vn++]=bs,bs=e,ro=a}function Zc(e,a,t){Ma[Ua++]=Ya,Ma[Ua++]=Va,Ma[Ua++]=mt,mt=e;var n=Ya;e=Va;var o=32-xa(n)-1;n&=~(1<<o),t+=1;var s=32-xa(a)+o;if(30<s){var l=o-o%5;s=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Ya=1<<32-xa(a)+o|t<<o|n,Va=s+e}else Ya=1<<s|t<<o|n,Va=e}function $i(e){e.return!==null&&(Wa(e,1),Zc(e,1,0))}function Fi(e){for(;e===bs;)bs=bn[--vn],bn[vn]=null,ro=bn[--vn],bn[vn]=null;for(;e===mt;)mt=Ma[--Ua],Ma[Ua]=null,Va=Ma[--Ua],Ma[Ua]=null,Ya=Ma[--Ua],Ma[Ua]=null}function Kc(e,a){Ma[Ua++]=Ya,Ma[Ua++]=Va,Ma[Ua++]=mt,Ya=a.id,Va=a.overflow,mt=e}var na=null,_e=null,je=!1,ft=null,Da=!1,Pi=Error(c(519));function ht(e){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(Ca(a,e)),Pi}function Jc(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[ta]=e,a[ua]=n,t){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(t=0;t<Mo.length;t++)ye(Mo[t],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":ye("invalid",a),lc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ye("invalid",a);break;case"textarea":ye("invalid",a),cc(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||dp(a.textContent,t)?(n.popover!=null&&(ye("beforetoggle",a),ye("toggle",a)),n.onScroll!=null&&ye("scroll",a),n.onScrollEnd!=null&&ye("scrollend",a),n.onClick!=null&&(a.onclick=Ka),a=!0):a=!1,a||ht(e,!0)}function Ic(e){for(na=e.return;na;)switch(na.tag){case 5:case 31:case 13:Da=!1;return;case 27:case 3:Da=!0;return;default:na=na.return}}function yn(e){if(e!==na)return!1;if(!je)return Ic(e),je=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||br(e.type,e.memoizedProps)),t=!t),t&&_e&&ht(e),Ic(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=xp(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=xp(e)}else a===27?(a=_e,Tt(e.type)?(e=jr,jr=null,_e=e):_e=a):_e=na?Oa(e.stateNode.nextSibling):null;return!0}function Vt(){_e=na=null,je=!1}function el(){var e=ft;return e!==null&&(ha===null?ha=e:ha.push.apply(ha,e),ft=null),e}function co(e){ft===null?ft=[e]:ft.push(e)}var al=d(null),Qt=null,$a=null;function gt(e,a,t){_(al,a._currentValue),a._currentValue=t}function Fa(e){e._currentValue=al.current,C(al)}function tl(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function nl(e,a,t,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var l=o.child;s=s.firstContext;e:for(;s!==null;){var r=s;s=o;for(var p=0;p<a.length;p++)if(r.context===a[p]){s.lanes|=t,r=s.alternate,r!==null&&(r.lanes|=t),tl(s.return,t,e),n||(l=null);break e}s=r.next}}else if(o.tag===18){if(l=o.return,l===null)throw Error(c(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),tl(l,t,e),l=null}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}}function xn(e,a,t,n){e=null;for(var o=a,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var l=o.alternate;if(l===null)throw Error(c(387));if(l=l.memoizedProps,l!==null){var r=o.type;wa(o.pendingProps.value,l.value)||(e!==null?e.push(r):e=[r])}}else if(o===O.current){if(l=o.alternate,l===null)throw Error(c(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}o=o.return}e!==null&&nl(a,e,t,n),a.flags|=262144}function vs(e){for(e=e.firstContext;e!==null;){if(!wa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xt(e){Qt=e,$a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return Wc(Qt,e)}function ys(e,a){return Qt===null&&Xt(e),Wc(e,a)}function Wc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},$a===null){if(e===null)throw Error(c(308));$a=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else $a=$a.next=a;return t}var wf=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},jf=u.unstable_scheduleCallback,zf=u.unstable_NormalPriority,Ze={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ol(){return{controller:new wf,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&jf(zf,function(){e.controller.abort()})}var po=null,sl=0,wn=0,jn=null;function kf(e,a){if(po===null){var t=po=[];sl=0,wn=rr(),jn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return sl++,a.then($c,$c),a}function $c(){if(--sl===0&&po!==null){jn!==null&&(jn.status="fulfilled");var e=po;po=null,wn=0,jn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Sf(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var Fc=N.S;N.S=function(e,a){Ld=va(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&kf(e,a),Fc!==null&&Fc(e,a)};var Zt=d(null);function il(){var e=Zt.current;return e!==null?e:Le.pooledCache}function xs(e,a){a===null?_(Zt,Zt.current):_(Zt,a.pool)}function Pc(){var e=il();return e===null?null:{parent:Ze._currentValue,pool:e}}var zn=Error(c(460)),ll=Error(c(474)),ws=Error(c(542)),js={then:function(){}};function eu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function au(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ka,Ka),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,nu(e),e;default:if(typeof a.status=="string")a.then(Ka,Ka);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=n}},function(n){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,nu(e),e}throw Jt=a,zn}}function Kt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Jt=t,zn):t}}var Jt=null;function tu(){if(Jt===null)throw Error(c(459));var e=Jt;return Jt=null,e}function nu(e){if(e===zn||e===ws)throw Error(c(483))}var kn=null,mo=0;function zs(e){var a=mo;return mo+=1,kn===null&&(kn=[]),au(kn,e,a)}function fo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ks(e,a){throw a.$$typeof===Y?Error(c(525)):(e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function ou(e){function a(g,f){if(e){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function t(g,f){if(!e)return null;for(;f!==null;)a(g,f),f=f.sibling;return null}function n(g){for(var f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function o(g,f){return g=Ia(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=67108866,f):y):(g.flags|=67108866,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function r(g,f,y,M){return f===null||f.tag!==6?(f=Ii(y,g.mode,M),f.return=g,f):(f=o(f,y),f.return=g,f)}function p(g,f,y,M){var ee=y.type;return ee===G?A(g,f,y.props.children,M,y.key):f!==null&&(f.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&Kt(ee)===f.type)?(f=o(f,y.props),fo(f,y),f.return=g,f):(f=gs(y.type,y.key,y.props,null,g.mode,M),fo(f,y),f.return=g,f)}function w(g,f,y,M){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Wi(y,g.mode,M),f.return=g,f):(f=o(f,y.children||[]),f.return=g,f)}function A(g,f,y,M,ee){return f===null||f.tag!==7?(f=Yt(y,g.mode,M,ee),f.return=g,f):(f=o(f,y),f.return=g,f)}function D(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ii(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case F:return y=gs(f.type,f.key,f.props,null,g.mode,y),fo(y,f),y.return=g,y;case I:return f=Wi(f,g.mode,y),f.return=g,f;case K:return f=Kt(f),D(g,f,y)}if(Be(f)||fe(f))return f=Yt(f,g.mode,y,null),f.return=g,f;if(typeof f.then=="function")return D(g,zs(f),y);if(f.$$typeof===ae)return D(g,ys(g,f),y);ks(g,f)}return null}function z(g,f,y,M){var ee=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return ee!==null?null:r(g,f,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case F:return y.key===ee?p(g,f,y,M):null;case I:return y.key===ee?w(g,f,y,M):null;case K:return y=Kt(y),z(g,f,y,M)}if(Be(y)||fe(y))return ee!==null?null:A(g,f,y,M,null);if(typeof y.then=="function")return z(g,f,zs(y),M);if(y.$$typeof===ae)return z(g,f,ys(g,y),M);ks(g,y)}return null}function S(g,f,y,M,ee){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return g=g.get(y)||null,r(f,g,""+M,ee);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case F:return g=g.get(M.key===null?y:M.key)||null,p(f,g,M,ee);case I:return g=g.get(M.key===null?y:M.key)||null,w(f,g,M,ee);case K:return M=Kt(M),S(g,f,y,M,ee)}if(Be(M)||fe(M))return g=g.get(y)||null,A(f,g,M,ee,null);if(typeof M.then=="function")return S(g,f,y,zs(M),ee);if(M.$$typeof===ae)return S(g,f,y,ys(f,M),ee);ks(f,M)}return null}function J(g,f,y,M){for(var ee=null,Se=null,W=f,he=f=0,we=null;W!==null&&he<y.length;he++){W.index>he?(we=W,W=null):we=W.sibling;var Ne=z(g,W,y[he],M);if(Ne===null){W===null&&(W=we);break}e&&W&&Ne.alternate===null&&a(g,W),f=s(Ne,f,he),Se===null?ee=Ne:Se.sibling=Ne,Se=Ne,W=we}if(he===y.length)return t(g,W),je&&Wa(g,he),ee;if(W===null){for(;he<y.length;he++)W=D(g,y[he],M),W!==null&&(f=s(W,f,he),Se===null?ee=W:Se.sibling=W,Se=W);return je&&Wa(g,he),ee}for(W=n(W);he<y.length;he++)we=S(W,g,he,y[he],M),we!==null&&(e&&we.alternate!==null&&W.delete(we.key===null?he:we.key),f=s(we,f,he),Se===null?ee=we:Se.sibling=we,Se=we);return e&&W.forEach(function(Dt){return a(g,Dt)}),je&&Wa(g,he),ee}function ne(g,f,y,M){if(y==null)throw Error(c(151));for(var ee=null,Se=null,W=f,he=f=0,we=null,Ne=y.next();W!==null&&!Ne.done;he++,Ne=y.next()){W.index>he?(we=W,W=null):we=W.sibling;var Dt=z(g,W,Ne.value,M);if(Dt===null){W===null&&(W=we);break}e&&W&&Dt.alternate===null&&a(g,W),f=s(Dt,f,he),Se===null?ee=Dt:Se.sibling=Dt,Se=Dt,W=we}if(Ne.done)return t(g,W),je&&Wa(g,he),ee;if(W===null){for(;!Ne.done;he++,Ne=y.next())Ne=D(g,Ne.value,M),Ne!==null&&(f=s(Ne,f,he),Se===null?ee=Ne:Se.sibling=Ne,Se=Ne);return je&&Wa(g,he),ee}for(W=n(W);!Ne.done;he++,Ne=y.next())Ne=S(W,g,he,Ne.value,M),Ne!==null&&(e&&Ne.alternate!==null&&W.delete(Ne.key===null?he:Ne.key),f=s(Ne,f,he),Se===null?ee=Ne:Se.sibling=Ne,Se=Ne);return e&&W.forEach(function(Oh){return a(g,Oh)}),je&&Wa(g,he),ee}function De(g,f,y,M){if(typeof y=="object"&&y!==null&&y.type===G&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case F:e:{for(var ee=y.key;f!==null;){if(f.key===ee){if(ee=y.type,ee===G){if(f.tag===7){t(g,f.sibling),M=o(f,y.props.children),M.return=g,g=M;break e}}else if(f.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&Kt(ee)===f.type){t(g,f.sibling),M=o(f,y.props),fo(M,y),M.return=g,g=M;break e}t(g,f);break}else a(g,f);f=f.sibling}y.type===G?(M=Yt(y.props.children,g.mode,M,y.key),M.return=g,g=M):(M=gs(y.type,y.key,y.props,null,g.mode,M),fo(M,y),M.return=g,g=M)}return l(g);case I:e:{for(ee=y.key;f!==null;){if(f.key===ee)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){t(g,f.sibling),M=o(f,y.children||[]),M.return=g,g=M;break e}else{t(g,f);break}else a(g,f);f=f.sibling}M=Wi(y,g.mode,M),M.return=g,g=M}return l(g);case K:return y=Kt(y),De(g,f,y,M)}if(Be(y))return J(g,f,y,M);if(fe(y)){if(ee=fe(y),typeof ee!="function")throw Error(c(150));return y=ee.call(y),ne(g,f,y,M)}if(typeof y.then=="function")return De(g,f,zs(y),M);if(y.$$typeof===ae)return De(g,f,ys(g,y),M);ks(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,f!==null&&f.tag===6?(t(g,f.sibling),M=o(f,y),M.return=g,g=M):(t(g,f),M=Ii(y,g.mode,M),M.return=g,g=M),l(g)):t(g,f)}return function(g,f,y,M){try{mo=0;var ee=De(g,f,y,M);return kn=null,ee}catch(W){if(W===zn||W===ws)throw W;var Se=ja(29,W,null,g.mode);return Se.lanes=M,Se.return=g,Se}}}var It=ou(!0),su=ou(!1),bt=!1;function rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cl(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(qe&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,a=hs(e),Yc(e,null,t),a}return fs(e,n,a,t),hs(e)}function ho(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Wr(e,t)}}function ul(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?o=s=l:s=s.next=l,t=t.next}while(t!==null);s===null?o=s=a:s=s.next=a}else o=s=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var dl=!1;function go(){if(dl){var e=jn;if(e!==null)throw e}}function bo(e,a,t,n){dl=!1;var o=e.updateQueue;bt=!1;var s=o.firstBaseUpdate,l=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var p=r,w=p.next;p.next=null,l===null?s=w:l.next=w,l=p;var A=e.alternate;A!==null&&(A=A.updateQueue,r=A.lastBaseUpdate,r!==l&&(r===null?A.firstBaseUpdate=w:r.next=w,A.lastBaseUpdate=p))}if(s!==null){var D=o.baseState;l=0,A=w=p=null,r=s;do{var z=r.lane&-536870913,S=z!==r.lane;if(S?(xe&z)===z:(n&z)===z){z!==0&&z===wn&&(dl=!0),A!==null&&(A=A.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var J=e,ne=r;z=a;var De=t;switch(ne.tag){case 1:if(J=ne.payload,typeof J=="function"){D=J.call(De,D,z);break e}D=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ne.payload,z=typeof J=="function"?J.call(De,D,z):J,z==null)break e;D=L({},D,z);break e;case 2:bt=!0}}z=r.callback,z!==null&&(e.flags|=64,S&&(e.flags|=8192),S=o.callbacks,S===null?o.callbacks=[z]:S.push(z))}else S={lane:z,tag:r.tag,payload:r.payload,callback:r.callback,next:null},A===null?(w=A=S,p=D):A=A.next=S,l|=z;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;S=r,r=S.next,S.next=null,o.lastBaseUpdate=S,o.shared.pending=null}}while(!0);A===null&&(p=D),o.baseState=p,o.firstBaseUpdate=w,o.lastBaseUpdate=A,s===null&&(o.shared.lanes=0),kt|=l,e.lanes=l,e.memoizedState=D}}function iu(e,a){if(typeof e!="function")throw Error(c(191,e));e.call(a)}function lu(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)iu(t[e],a)}var Sn=d(null),Ss=d(0);function ru(e,a){e=lt,_(Ss,e),_(Sn,a),lt=e|a.baseLanes}function pl(){_(Ss,lt),_(Sn,Sn.current)}function ml(){lt=Ss.current,C(Sn),C(Ss)}var za=d(null),La=null;function xt(e){var a=e.alternate;_(Qe,Qe.current&1),_(za,e),La===null&&(a===null||Sn.current!==null||a.memoizedState!==null)&&(La=e)}function fl(e){_(Qe,Qe.current),_(za,e),La===null&&(La=e)}function cu(e){e.tag===22?(_(Qe,Qe.current),_(za,e),La===null&&(La=e)):wt()}function wt(){_(Qe,Qe.current),_(za,za.current)}function ka(e){C(za),La===e&&(La=null),C(Qe)}var Qe=d(0);function Ns(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||xr(t)||wr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Pa=0,me=null,Me=null,Ke=null,qs=!1,Nn=!1,Wt=!1,Es=0,vo=0,qn=null,Nf=0;function Re(){throw Error(c(321))}function hl(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!wa(e[t],a[t]))return!1;return!0}function gl(e,a,t,n,o,s){return Pa=s,me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=e===null||e.memoizedState===null?Zu:Cl,Wt=!1,s=t(n,o),Wt=!1,Nn&&(s=du(a,t,n,o)),uu(e),s}function uu(e){N.H=wo;var a=Me!==null&&Me.next!==null;if(Pa=0,Ke=Me=me=null,qs=!1,vo=0,qn=null,a)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&vs(e)&&(Je=!0))}function du(e,a,t,n){me=e;var o=0;do{if(Nn&&(qn=null),vo=0,Nn=!1,25<=o)throw Error(c(301));if(o+=1,Ke=Me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}N.H=Ku,s=a(t,n)}while(Nn);return s}function qf(){var e=N.H,a=e.useState()[0];return a=typeof a.then=="function"?yo(a):a,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(me.flags|=1024),a}function bl(){var e=Es!==0;return Es=0,e}function vl(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function yl(e){if(qs){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}qs=!1}Pa=0,Ke=Me=me=null,Nn=!1,vo=Es=0,qn=null}function ra(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?me.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Xe(){if(Me===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var a=Ke===null?me.memoizedState:Ke.next;if(a!==null)Ke=a,Me=e;else{if(e===null)throw me.alternate===null?Error(c(467)):Error(c(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ke===null?me.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var a=vo;return vo+=1,qn===null&&(qn=[]),e=au(qn,e,a),a=me,(Ke===null?a.memoizedState:Ke.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?Zu:Cl),e}function As(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===ae)return oa(e)}throw Error(c(438,String(e)))}function xl(e){var a=null,t=me.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=me.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Ts(),me.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=ue;return a.index++,t}function et(e,a){return typeof a=="function"?a(e):a}function Cs(e){var a=Xe();return wl(a,Me,e)}function wl(e,a,t){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var o=e.baseQueue,s=n.pending;if(s!==null){if(o!==null){var l=o.next;o.next=s.next,s.next=l}a.baseQueue=o=s,n.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{a=o.next;var r=l=null,p=null,w=a,A=!1;do{var D=w.lane&-536870913;if(D!==w.lane?(xe&D)===D:(Pa&D)===D){var z=w.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),D===wn&&(A=!0);else if((Pa&z)===z){w=w.next,z===wn&&(A=!0);continue}else D={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(r=p=D,l=s):p=p.next=D,me.lanes|=z,kt|=z;D=w.action,Wt&&t(s,D),s=w.hasEagerState?w.eagerState:t(s,D)}else z={lane:D,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(r=p=z,l=s):p=p.next=z,me.lanes|=D,kt|=D;w=w.next}while(w!==null&&w!==a);if(p===null?l=s:p.next=r,!wa(s,e.memoizedState)&&(Je=!0,A&&(t=jn,t!==null)))throw t;e.memoizedState=s,e.baseState=l,e.baseQueue=p,n.lastRenderedState=s}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function jl(e){var a=Xe(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,s=a.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do s=e(s,l.action),l=l.next;while(l!==o);wa(s,a.memoizedState)||(Je=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),t.lastRenderedState=s}return[s,n]}function pu(e,a,t){var n=me,o=Xe(),s=je;if(s){if(t===void 0)throw Error(c(407));t=t()}else t=a();var l=!wa((Me||o).memoizedState,t);if(l&&(o.memoizedState=t,Je=!0),o=o.queue,Sl(hu.bind(null,n,o,e),[e]),o.getSnapshot!==a||l||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,En(9,{destroy:void 0},fu.bind(null,n,o,t,a),null),Le===null)throw Error(c(349));s||(Pa&127)!==0||mu(n,a,t)}return t}function mu(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=me.updateQueue,a===null?(a=Ts(),me.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function fu(e,a,t,n){a.value=t,a.getSnapshot=n,gu(a)&&bu(e)}function hu(e,a,t){return t(function(){gu(a)&&bu(e)})}function gu(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!wa(e,t)}catch{return!0}}function bu(e){var a=Rt(e,2);a!==null&&ga(a,e,2)}function zl(e){var a=ra();if(typeof e=="function"){var t=e;if(e=t(),Wt){ut(!0);try{t()}finally{ut(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:e},a}function vu(e,a,t,n){return e.baseState=t,wl(e,Me,typeof n=="function"?n:et)}function Ef(e,a,t,n,o){if(Ds(e))throw Error(c(485));if(e=a.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){s.listeners.push(l)}};N.T!==null?t(!0):s.isTransition=!1,n(s),t=a.pending,t===null?(s.next=a.pending=s,yu(a,s)):(s.next=t.next,a.pending=t.next=s)}}function yu(e,a){var t=a.action,n=a.payload,o=e.state;if(a.isTransition){var s=N.T,l={};N.T=l;try{var r=t(o,n),p=N.S;p!==null&&p(l,r),xu(e,a,r)}catch(w){kl(e,a,w)}finally{s!==null&&l.types!==null&&(s.types=l.types),N.T=s}}else try{s=t(o,n),xu(e,a,s)}catch(w){kl(e,a,w)}}function xu(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){wu(e,a,n)},function(n){return kl(e,a,n)}):wu(e,a,t)}function wu(e,a,t){a.status="fulfilled",a.value=t,ju(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,yu(e,t)))}function kl(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,ju(a),a=a.next;while(a!==n)}e.action=null}function ju(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function zu(e,a){return a}function ku(e,a){if(je){var t=Le.formState;if(t!==null){e:{var n=me;if(je){if(_e){a:{for(var o=_e,s=Da;o.nodeType!==8;){if(!s){o=null;break a}if(o=Oa(o.nextSibling),o===null){o=null;break a}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){_e=Oa(o.nextSibling),n=o.data==="F!";break e}}ht(n)}n=!1}n&&(a=t[0])}}return t=ra(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zu,lastRenderedState:a},t.queue=n,t=Vu.bind(null,me,n),n.dispatch=t,n=zl(!1),s=Al.bind(null,me,!1,n.queue),n=ra(),o={state:a,dispatch:null,action:e,pending:null},n.queue=o,t=Ef.bind(null,me,o,s,t),o.dispatch=t,n.memoizedState=e,[a,t,!1]}function Su(e){var a=Xe();return Nu(a,Me,e)}function Nu(e,a,t){if(a=wl(e,a,zu)[0],e=Cs(et)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=yo(a)}catch(l){throw l===zn?ws:l}else n=a;a=Xe();var o=a.queue,s=o.dispatch;return t!==a.memoizedState&&(me.flags|=2048,En(9,{destroy:void 0},Tf.bind(null,o,t),null)),[n,s,e]}function Tf(e,a){e.action=a}function qu(e){var a=Xe(),t=Me;if(t!==null)return Nu(a,t,e);Xe(),a=a.memoizedState,t=Xe();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function En(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=me.updateQueue,a===null&&(a=Ts(),me.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Eu(){return Xe().memoizedState}function Ms(e,a,t,n){var o=ra();me.flags|=e,o.memoizedState=En(1|a,{destroy:void 0},t,n===void 0?null:n)}function Us(e,a,t,n){var o=Xe();n=n===void 0?null:n;var s=o.memoizedState.inst;Me!==null&&n!==null&&hl(n,Me.memoizedState.deps)?o.memoizedState=En(a,s,t,n):(me.flags|=e,o.memoizedState=En(1|a,s,t,n))}function Tu(e,a){Ms(8390656,8,e,a)}function Sl(e,a){Us(2048,8,e,a)}function Af(e){me.flags|=4;var a=me.updateQueue;if(a===null)a=Ts(),me.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Au(e){var a=Xe().memoizedState;return Af({ref:a,nextImpl:e}),function(){if((qe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function Cu(e,a){return Us(4,2,e,a)}function Mu(e,a){return Us(4,4,e,a)}function Uu(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Du(e,a,t){t=t!=null?t.concat([e]):null,Us(4,4,Uu.bind(null,a,e),t)}function Nl(){}function Lu(e,a){var t=Xe();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&hl(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Ou(e,a){var t=Xe();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&hl(a,n[1]))return n[0];if(n=e(),Wt){ut(!0);try{e()}finally{ut(!1)}}return t.memoizedState=[n,a],n}function ql(e,a,t){return t===void 0||(Pa&1073741824)!==0&&(xe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=_d(),me.lanes|=e,kt|=e,t)}function _u(e,a,t,n){return wa(t,a)?t:Sn.current!==null?(e=ql(e,t,n),wa(e,a)||(Je=!0),e):(Pa&42)===0||(Pa&1073741824)!==0&&(xe&261930)===0?(Je=!0,e.memoizedState=t):(e=_d(),me.lanes|=e,kt|=e,a)}function Hu(e,a,t,n,o){var s=H.p;H.p=s!==0&&8>s?s:8;var l=N.T,r={};N.T=r,Al(e,!1,a,t);try{var p=o(),w=N.S;if(w!==null&&w(r,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var A=Sf(p,n);xo(e,a,A,qa(e))}else xo(e,a,n,qa(e))}catch(D){xo(e,a,{then:function(){},status:"rejected",reason:D},qa())}finally{H.p=s,l!==null&&r.types!==null&&(l.types=r.types),N.T=l}}function Cf(){}function El(e,a,t,n){if(e.tag!==5)throw Error(c(476));var o=Gu(e).queue;Hu(e,o,a,Z,t===null?Cf:function(){return Bu(e),t(n)})}function Gu(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:Z},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Bu(e){var a=Gu(e);a.next===null&&(a=e.alternate.memoizedState),xo(e,a.next.queue,{},qa())}function Tl(){return oa(_o)}function Ru(){return Xe().memoizedState}function Yu(){return Xe().memoizedState}function Mf(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=qa();e=vt(t);var n=yt(a,e,t);n!==null&&(ga(n,a,t),ho(n,a,t)),a={cache:ol()},e.payload=a;return}a=a.return}}function Uf(e,a,t){var n=qa();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Qu(a,t):(t=Ki(e,a,t,n),t!==null&&(ga(t,e,n),Xu(t,a,n)))}function Vu(e,a,t){var n=qa();xo(e,a,t,n)}function xo(e,a,t,n){var o={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Qu(a,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var l=a.lastRenderedState,r=s(l,t);if(o.hasEagerState=!0,o.eagerState=r,wa(r,l))return fs(e,a,o,0),Le===null&&ms(),!1}catch{}if(t=Ki(e,a,o,n),t!==null)return ga(t,e,n),Xu(t,a,n),!0}return!1}function Al(e,a,t,n){if(n={lane:2,revertLane:rr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(a)throw Error(c(479))}else a=Ki(e,t,n,2),a!==null&&ga(a,e,2)}function Ds(e){var a=e.alternate;return e===me||a!==null&&a===me}function Qu(e,a){Nn=qs=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Xu(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Wr(e,t)}}var wo={readContext:oa,use:As,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};wo.useEffectEvent=Re;var Zu={readContext:oa,use:As,useCallback:function(e,a){return ra().memoizedState=[e,a===void 0?null:a],e},useContext:oa,useEffect:Tu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Ms(4194308,4,Uu.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Ms(4194308,4,e,a)},useInsertionEffect:function(e,a){Ms(4,2,e,a)},useMemo:function(e,a){var t=ra();a=a===void 0?null:a;var n=e();if(Wt){ut(!0);try{e()}finally{ut(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ra();if(t!==void 0){var o=t(a);if(Wt){ut(!0);try{t(a)}finally{ut(!1)}}}else o=a;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=Uf.bind(null,me,e),[n.memoizedState,e]},useRef:function(e){var a=ra();return e={current:e},a.memoizedState=e},useState:function(e){e=zl(e);var a=e.queue,t=Vu.bind(null,me,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Nl,useDeferredValue:function(e,a){var t=ra();return ql(t,e,a)},useTransition:function(){var e=zl(!1);return e=Hu.bind(null,me,e.queue,!0,!1),ra().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=me,o=ra();if(je){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),Le===null)throw Error(c(349));(xe&127)!==0||mu(n,a,t)}o.memoizedState=t;var s={value:t,getSnapshot:a};return o.queue=s,Tu(hu.bind(null,n,s,e),[e]),n.flags|=2048,En(9,{destroy:void 0},fu.bind(null,n,s,t,a),null),t},useId:function(){var e=ra(),a=Le.identifierPrefix;if(je){var t=Va,n=Ya;t=(n&~(1<<32-xa(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Es++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Nf++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Tl,useFormState:ku,useActionState:ku,useOptimistic:function(e){var a=ra();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Al.bind(null,me,!0,t),t.dispatch=a,[e,a]},useMemoCache:xl,useCacheRefresh:function(){return ra().memoizedState=Mf.bind(null,me)},useEffectEvent:function(e){var a=ra(),t={impl:e};return a.memoizedState=t,function(){if((qe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Cl={readContext:oa,use:As,useCallback:Lu,useContext:oa,useEffect:Sl,useImperativeHandle:Du,useInsertionEffect:Cu,useLayoutEffect:Mu,useMemo:Ou,useReducer:Cs,useRef:Eu,useState:function(){return Cs(et)},useDebugValue:Nl,useDeferredValue:function(e,a){var t=Xe();return _u(t,Me.memoizedState,e,a)},useTransition:function(){var e=Cs(et)[0],a=Xe().memoizedState;return[typeof e=="boolean"?e:yo(e),a]},useSyncExternalStore:pu,useId:Ru,useHostTransitionStatus:Tl,useFormState:Su,useActionState:Su,useOptimistic:function(e,a){var t=Xe();return vu(t,Me,e,a)},useMemoCache:xl,useCacheRefresh:Yu};Cl.useEffectEvent=Au;var Ku={readContext:oa,use:As,useCallback:Lu,useContext:oa,useEffect:Sl,useImperativeHandle:Du,useInsertionEffect:Cu,useLayoutEffect:Mu,useMemo:Ou,useReducer:jl,useRef:Eu,useState:function(){return jl(et)},useDebugValue:Nl,useDeferredValue:function(e,a){var t=Xe();return Me===null?ql(t,e,a):_u(t,Me.memoizedState,e,a)},useTransition:function(){var e=jl(et)[0],a=Xe().memoizedState;return[typeof e=="boolean"?e:yo(e),a]},useSyncExternalStore:pu,useId:Ru,useHostTransitionStatus:Tl,useFormState:qu,useActionState:qu,useOptimistic:function(e,a){var t=Xe();return Me!==null?vu(t,Me,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:xl,useCacheRefresh:Yu};Ku.useEffectEvent=Au;function Ml(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:L({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ul={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=qa(),o=vt(n);o.payload=a,t!=null&&(o.callback=t),a=yt(e,o,n),a!==null&&(ga(a,e,n),ho(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=qa(),o=vt(n);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=yt(e,o,n),a!==null&&(ga(a,e,n),ho(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=qa(),n=vt(t);n.tag=2,a!=null&&(n.callback=a),a=yt(e,n,t),a!==null&&(ga(a,e,t),ho(a,e,t))}};function Ju(e,a,t,n,o,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,l):a.prototype&&a.prototype.isPureReactComponent?!io(t,n)||!io(o,s):!0}function Iu(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Ul.enqueueReplaceState(a,a.state,null)}function $t(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=L({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function Wu(e){ps(e)}function $u(e){console.error(e)}function Fu(e){ps(e)}function Ls(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Pu(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Dl(e,a,t){return t=vt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ls(e,a)},t}function ed(e){return e=vt(e),e.tag=3,e}function ad(e,a,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;e.payload=function(){return o(s)},e.callback=function(){Pu(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Pu(a,t,n),typeof o!="function"&&(St===null?St=new Set([this]):St.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Df(e,a,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&xn(a,t,o,!0),t=za.current,t!==null){switch(t.tag){case 31:case 13:return La===null?Ks():t.alternate===null&&Ye===0&&(Ye=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===js?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),sr(e,n,o)),!1;case 22:return t.flags|=65536,n===js?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),sr(e,n,o)),!1}throw Error(c(435,t.tag))}return sr(e,n,o),Ks(),!1}if(je)return a=za.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,n!==Pi&&(e=Error(c(422),{cause:n}),co(Ca(e,t)))):(n!==Pi&&(a=Error(c(423),{cause:n}),co(Ca(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=Ca(n,t),o=Dl(e.stateNode,n,o),ul(e,o),Ye!==4&&(Ye=2)),!1;var s=Error(c(520),{cause:n});if(s=Ca(s,t),To===null?To=[s]:To.push(s),Ye!==4&&(Ye=2),a===null)return!0;n=Ca(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Dl(t.stateNode,n,e),ul(t,e),!1;case 1:if(a=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(St===null||!St.has(s))))return t.flags|=65536,o&=-o,t.lanes|=o,o=ed(o),ad(o,e,t,n),ul(t,o),!1}t=t.return}while(t!==null);return!1}var Ll=Error(c(461)),Je=!1;function sa(e,a,t,n){a.child=e===null?su(a,null,t,n):It(a,e.child,t,n)}function td(e,a,t,n,o){t=t.render;var s=a.ref;if("ref"in n){var l={};for(var r in n)r!=="ref"&&(l[r]=n[r])}else l=n;return Xt(a),n=gl(e,a,t,l,s,o),r=bl(),e!==null&&!Je?(vl(e,a,o),at(e,a,o)):(je&&r&&$i(a),a.flags|=1,sa(e,a,n,o),a.child)}function nd(e,a,t,n,o){if(e===null){var s=t.type;return typeof s=="function"&&!Ji(s)&&s.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=s,od(e,a,s,n,o)):(e=gs(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!Vl(e,o)){var l=s.memoizedProps;if(t=t.compare,t=t!==null?t:io,t(l,n)&&e.ref===a.ref)return at(e,a,o)}return a.flags|=1,e=Ia(s,n),e.ref=a.ref,e.return=a,a.child=e}function od(e,a,t,n,o){if(e!==null){var s=e.memoizedProps;if(io(s,n)&&e.ref===a.ref)if(Je=!1,a.pendingProps=n=s,Vl(e,o))(e.flags&131072)!==0&&(Je=!0);else return a.lanes=e.lanes,at(e,a,o)}return Ol(e,a,t,n,o)}function sd(e,a,t,n){var o=n.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(n=a.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~s}else n=0,a.child=null;return id(e,a,s,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&xs(a,s!==null?s.cachePool:null),s!==null?ru(a,s):pl(),cu(a);else return n=a.lanes=536870912,id(e,a,s!==null?s.baseLanes|t:t,t,n)}else s!==null?(xs(a,s.cachePool),ru(a,s),wt(),a.memoizedState=null):(e!==null&&xs(a,null),pl(),wt());return sa(e,a,o,t),a.child}function jo(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function id(e,a,t,n,o){var s=il();return s=s===null?null:{parent:Ze._currentValue,pool:s},a.memoizedState={baseLanes:t,cachePool:s},e!==null&&xs(a,null),pl(),cu(a),e!==null&&xn(e,a,n,!0),a.childLanes=o,null}function Os(e,a){return a=Hs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function ld(e,a,t){return It(a,e.child,null,t),e=Os(a,a.pendingProps),e.flags|=2,ka(a),a.memoizedState=null,e}function Lf(e,a,t){var n=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(je){if(n.mode==="hidden")return e=Os(a,n),a.lanes=536870912,jo(null,e);if(fl(a),(e=_e)?(e=yp(e,Da),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mt!==null?{id:Ya,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},t=Qc(e),t.return=a,a.child=t,na=a,_e=null)):e=null,e===null)throw ht(a);return a.lanes=536870912,null}return Os(a,n)}var s=e.memoizedState;if(s!==null){var l=s.dehydrated;if(fl(a),o)if(a.flags&256)a.flags&=-257,a=ld(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(c(558));else if(Je||xn(e,a,t,!1),o=(t&e.childLanes)!==0,Je||o){if(n=Le,n!==null&&(l=$r(n,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,Rt(e,l),ga(n,e,l),Ll;Ks(),a=ld(e,a,t)}else e=s.treeContext,_e=Oa(l.nextSibling),na=a,je=!0,ft=null,Da=!1,e!==null&&Kc(a,e),a=Os(a,n),a.flags|=4096;return a}return e=Ia(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function _s(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ol(e,a,t,n,o){return Xt(a),t=gl(e,a,t,n,void 0,o),n=bl(),e!==null&&!Je?(vl(e,a,o),at(e,a,o)):(je&&n&&$i(a),a.flags|=1,sa(e,a,t,o),a.child)}function rd(e,a,t,n,o,s){return Xt(a),a.updateQueue=null,t=du(a,n,t,o),uu(e),n=bl(),e!==null&&!Je?(vl(e,a,s),at(e,a,s)):(je&&n&&$i(a),a.flags|=1,sa(e,a,t,s),a.child)}function cd(e,a,t,n,o){if(Xt(a),a.stateNode===null){var s=gn,l=t.contextType;typeof l=="object"&&l!==null&&(s=oa(l)),s=new t(n,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ul,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=n,s.state=a.memoizedState,s.refs={},rl(a),l=t.contextType,s.context=typeof l=="object"&&l!==null?oa(l):gn,s.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ml(a,t,l,n),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(l=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),l!==s.state&&Ul.enqueueReplaceState(s,s.state,null),bo(a,n,s,o),go(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){s=a.stateNode;var r=a.memoizedProps,p=$t(t,r);s.props=p;var w=s.context,A=t.contextType;l=gn,typeof A=="object"&&A!==null&&(l=oa(A));var D=t.getDerivedStateFromProps;A=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,A||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r||w!==l)&&Iu(a,s,n,l),bt=!1;var z=a.memoizedState;s.state=z,bo(a,n,s,o),go(),w=a.memoizedState,r||z!==w||bt?(typeof D=="function"&&(Ml(a,t,D,n),w=a.memoizedState),(p=bt||Ju(a,t,p,n,z,w,l))?(A||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=w),s.props=n,s.state=w,s.context=l,n=p):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{s=a.stateNode,cl(e,a),l=a.memoizedProps,A=$t(t,l),s.props=A,D=a.pendingProps,z=s.context,w=t.contextType,p=gn,typeof w=="object"&&w!==null&&(p=oa(w)),r=t.getDerivedStateFromProps,(w=typeof r=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==D||z!==p)&&Iu(a,s,n,p),bt=!1,z=a.memoizedState,s.state=z,bo(a,n,s,o),go();var S=a.memoizedState;l!==D||z!==S||bt||e!==null&&e.dependencies!==null&&vs(e.dependencies)?(typeof r=="function"&&(Ml(a,t,r,n),S=a.memoizedState),(A=bt||Ju(a,t,A,n,z,S,p)||e!==null&&e.dependencies!==null&&vs(e.dependencies))?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,S,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,S,p)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&z===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&z===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=S),s.props=n,s.state=S,s.context=p,n=A):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&z===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&z===e.memoizedState||(a.flags|=1024),n=!1)}return s=n,_s(e,a),n=(a.flags&128)!==0,s||n?(s=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&n?(a.child=It(a,e.child,null,o),a.child=It(a,null,t,o)):sa(e,a,t,o),a.memoizedState=s.state,e=a.child):e=at(e,a,o),e}function ud(e,a,t,n){return Vt(),a.flags|=256,sa(e,a,t,n),a.child}var _l={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hl(e){return{baseLanes:e,cachePool:Pc()}}function Gl(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Na),e}function dd(e,a,t){var n=a.pendingProps,o=!1,s=(a.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),l&&(o=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(je){if(o?xt(a):wt(),(e=_e)?(e=yp(e,Da),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mt!==null?{id:Ya,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},t=Qc(e),t.return=a,a.child=t,na=a,_e=null)):e=null,e===null)throw ht(a);return wr(e)?a.lanes=32:a.lanes=536870912,null}var r=n.children;return n=n.fallback,o?(wt(),o=a.mode,r=Hs({mode:"hidden",children:r},o),n=Yt(n,o,t,null),r.return=a,n.return=a,r.sibling=n,a.child=r,n=a.child,n.memoizedState=Hl(t),n.childLanes=Gl(e,l,t),a.memoizedState=_l,jo(null,n)):(xt(a),Bl(a,r))}var p=e.memoizedState;if(p!==null&&(r=p.dehydrated,r!==null)){if(s)a.flags&256?(xt(a),a.flags&=-257,a=Rl(e,a,t)):a.memoizedState!==null?(wt(),a.child=e.child,a.flags|=128,a=null):(wt(),r=n.fallback,o=a.mode,n=Hs({mode:"visible",children:n.children},o),r=Yt(r,o,t,null),r.flags|=2,n.return=a,r.return=a,n.sibling=r,a.child=n,It(a,e.child,null,t),n=a.child,n.memoizedState=Hl(t),n.childLanes=Gl(e,l,t),a.memoizedState=_l,a=jo(null,n));else if(xt(a),wr(r)){if(l=r.nextSibling&&r.nextSibling.dataset,l)var w=l.dgst;l=w,n=Error(c(419)),n.stack="",n.digest=l,co({value:n,source:null,stack:null}),a=Rl(e,a,t)}else if(Je||xn(e,a,t,!1),l=(t&e.childLanes)!==0,Je||l){if(l=Le,l!==null&&(n=$r(l,t),n!==0&&n!==p.retryLane))throw p.retryLane=n,Rt(e,n),ga(l,e,n),Ll;xr(r)||Ks(),a=Rl(e,a,t)}else xr(r)?(a.flags|=192,a.child=e.child,a=null):(e=p.treeContext,_e=Oa(r.nextSibling),na=a,je=!0,ft=null,Da=!1,e!==null&&Kc(a,e),a=Bl(a,n.children),a.flags|=4096);return a}return o?(wt(),r=n.fallback,o=a.mode,p=e.child,w=p.sibling,n=Ia(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,w!==null?r=Ia(w,r):(r=Yt(r,o,t,null),r.flags|=2),r.return=a,n.return=a,n.sibling=r,a.child=n,jo(null,n),n=a.child,r=e.child.memoizedState,r===null?r=Hl(t):(o=r.cachePool,o!==null?(p=Ze._currentValue,o=o.parent!==p?{parent:p,pool:p}:o):o=Pc(),r={baseLanes:r.baseLanes|t,cachePool:o}),n.memoizedState=r,n.childLanes=Gl(e,l,t),a.memoizedState=_l,jo(e.child,n)):(xt(a),t=e.child,e=t.sibling,t=Ia(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function Bl(e,a){return a=Hs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Hs(e,a){return e=ja(22,e,null,a),e.lanes=0,e}function Rl(e,a,t){return It(a,e.child,null,t),e=Bl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function pd(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),tl(e.return,a,t)}function Yl(e,a,t,n,o,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o,treeForkCount:s}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=o,l.treeForkCount=s)}function md(e,a,t){var n=a.pendingProps,o=n.revealOrder,s=n.tail;n=n.children;var l=Qe.current,r=(l&2)!==0;if(r?(l=l&1|2,a.flags|=128):l&=1,_(Qe,l),sa(e,a,n,t),n=je?ro:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,t,a);else if(e.tag===19)pd(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&Ns(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),Yl(a,!1,o,t,s,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Ns(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Yl(a,!0,t,null,s,n);break;case"together":Yl(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function at(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),kt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(xn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,t=Ia(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ia(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Vl(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&vs(e)))}function Of(e,a,t){switch(a.tag){case 3:ge(a,a.stateNode.containerInfo),gt(a,Ze,e.memoizedState.cache),Vt();break;case 27:case 5:Oe(a);break;case 4:ge(a,a.stateNode.containerInfo);break;case 10:gt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,fl(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(xt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?dd(e,a,t):(xt(a),e=at(e,a,t),e!==null?e.sibling:null);xt(a);break;case 19:var o=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(xn(e,a,t,!1),n=(t&a.childLanes)!==0),o){if(n)return md(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(Qe,Qe.current),n)break;return null;case 22:return a.lanes=0,sd(e,a,t,a.pendingProps);case 24:gt(a,Ze,e.memoizedState.cache)}return at(e,a,t)}function fd(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Je=!0;else{if(!Vl(e,t)&&(a.flags&128)===0)return Je=!1,Of(e,a,t);Je=(e.flags&131072)!==0}else Je=!1,je&&(a.flags&1048576)!==0&&Zc(a,ro,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Kt(a.elementType),a.type=e,typeof e=="function")Ji(e)?(n=$t(e,n),a.tag=1,a=cd(null,a,e,n,t)):(a.tag=0,a=Ol(null,a,e,n,t));else{if(e!=null){var o=e.$$typeof;if(o===be){a.tag=11,a=td(null,a,e,n,t);break e}else if(o===X){a.tag=14,a=nd(null,a,e,n,t);break e}}throw a=We(e)||e,Error(c(306,a,""))}}return a;case 0:return Ol(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,o=$t(n,a.pendingProps),cd(e,a,n,o,t);case 3:e:{if(ge(a,a.stateNode.containerInfo),e===null)throw Error(c(387));n=a.pendingProps;var s=a.memoizedState;o=s.element,cl(e,a),bo(a,n,null,t);var l=a.memoizedState;if(n=l.cache,gt(a,Ze,n),n!==s.cache&&nl(a,[Ze],t,!0),go(),n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=ud(e,a,n,t);break e}else if(n!==o){o=Ca(Error(c(424)),a),co(o),a=ud(e,a,n,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=Oa(e.firstChild),na=a,je=!0,ft=null,Da=!0,t=su(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vt(),n===o){a=at(e,a,t);break e}sa(e,a,n,t)}a=a.child}return a;case 26:return _s(e,a),e===null?(t=Sp(a.type,null,a.pendingProps,null))?a.memoizedState=t:je||(t=a.type,e=a.pendingProps,n=ei(ie.current).createElement(t),n[ta]=a,n[ua]=e,ia(n,t,e),Pe(n),a.stateNode=n):a.memoizedState=Sp(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Oe(a),e===null&&je&&(n=a.stateNode=jp(a.type,a.pendingProps,ie.current),na=a,Da=!0,o=_e,Tt(a.type)?(jr=o,_e=Oa(n.firstChild)):_e=o),sa(e,a,a.pendingProps.children,t),_s(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&je&&((o=n=_e)&&(n=ph(n,a.type,a.pendingProps,Da),n!==null?(a.stateNode=n,na=a,_e=Oa(n.firstChild),Da=!1,o=!0):o=!1),o||ht(a)),Oe(a),o=a.type,s=a.pendingProps,l=e!==null?e.memoizedProps:null,n=s.children,br(o,s)?n=null:l!==null&&br(o,l)&&(a.flags|=32),a.memoizedState!==null&&(o=gl(e,a,qf,null,null,t),_o._currentValue=o),_s(e,a),sa(e,a,n,t),a.child;case 6:return e===null&&je&&((e=t=_e)&&(t=mh(t,a.pendingProps,Da),t!==null?(a.stateNode=t,na=a,_e=null,e=!0):e=!1),e||ht(a)),null;case 13:return dd(e,a,t);case 4:return ge(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=It(a,null,n,t):sa(e,a,n,t),a.child;case 11:return td(e,a,a.type,a.pendingProps,t);case 7:return sa(e,a,a.pendingProps,t),a.child;case 8:return sa(e,a,a.pendingProps.children,t),a.child;case 12:return sa(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,gt(a,a.type,n.value),sa(e,a,n.children,t),a.child;case 9:return o=a.type._context,n=a.pendingProps.children,Xt(a),o=oa(o),n=n(o),a.flags|=1,sa(e,a,n,t),a.child;case 14:return nd(e,a,a.type,a.pendingProps,t);case 15:return od(e,a,a.type,a.pendingProps,t);case 19:return md(e,a,t);case 31:return Lf(e,a,t);case 22:return sd(e,a,t,a.pendingProps);case 24:return Xt(a),n=oa(Ze),e===null?(o=il(),o===null&&(o=Le,s=ol(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=t),o=s),a.memoizedState={parent:n,cache:o},rl(a),gt(a,Ze,o)):((e.lanes&t)!==0&&(cl(e,a),bo(a,null,null,t),go()),o=e.memoizedState,s=a.memoizedState,o.parent!==n?(o={parent:n,cache:n},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),gt(a,Ze,n)):(n=s.cache,gt(a,Ze,n),n!==o.cache&&nl(a,[Ze],t,!0))),sa(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function tt(e){e.flags|=4}function Ql(e,a,t,n,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Rd())e.flags|=8192;else throw Jt=js,ll}else e.flags&=-16777217}function hd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ap(a))if(Rd())e.flags|=8192;else throw Jt=js,ll}function Gs(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Jr():536870912,e.lanes|=a,Mn|=a)}function zo(e,a){if(!je)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function _f(e,a,t){var n=a.pendingProps;switch(Fi(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(a),null;case 1:return He(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Fa(Ze),ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(yn(a)?tt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,el())),He(a),null;case 26:var o=a.type,s=a.memoizedState;return e===null?(tt(a),s!==null?(He(a),hd(a,s)):(He(a),Ql(a,o,null,n,t))):s?s!==e.memoizedState?(tt(a),He(a),hd(a,s)):(He(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&tt(a),He(a),Ql(a,o,e,n,t)),null;case 27:if(Fe(a),t=ie.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&tt(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return He(a),null}e=B.current,yn(a)?Jc(a):(e=jp(o,n,t),a.stateNode=e,tt(a))}return He(a),null;case 5:if(Fe(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&tt(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return He(a),null}if(s=B.current,yn(a))Jc(a);else{var l=ei(ie.current);switch(s){case 1:s=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=l.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?l.createElement(o,{is:n.is}):l.createElement(o)}}s[ta]=a,s[ua]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)s.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=s;e:switch(ia(s,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&tt(a)}}return He(a),Ql(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&tt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(c(166));if(e=ie.current,yn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,o=na,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[ta]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||dp(e.nodeValue,t)),e||ht(a,!0)}else e=ei(e).createTextNode(n),e[ta]=a,a.stateNode=e}return He(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=yn(a),t!==null){if(e===null){if(!n)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ta]=a}else Vt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;He(a),e=!1}else t=el(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ka(a),a):(ka(a),null);if((a.flags&128)!==0)throw Error(c(558))}return He(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=yn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[ta]=a}else Vt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;He(a),o=!1}else o=el(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(ka(a),a):(ka(a),null)}return ka(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==o&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Gs(a,a.updateQueue),He(a),null);case 4:return ce(),e===null&&pr(a.stateNode.containerInfo),He(a),null;case 10:return Fa(a.type),He(a),null;case 19:if(C(Qe),n=a.memoizedState,n===null)return He(a),null;if(o=(a.flags&128)!==0,s=n.rendering,s===null)if(o)zo(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=Ns(e),s!==null){for(a.flags|=128,zo(n,!1),e=s.updateQueue,a.updateQueue=e,Gs(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Vc(t,e),t=t.sibling;return _(Qe,Qe.current&1|2),je&&Wa(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&va()>Qs&&(a.flags|=128,o=!0,zo(n,!1),a.lanes=4194304)}else{if(!o)if(e=Ns(s),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Gs(a,e),zo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!je)return He(a),null}else 2*va()-n.renderingStartTime>Qs&&t!==536870912&&(a.flags|=128,o=!0,zo(n,!1),a.lanes=4194304);n.isBackwards?(s.sibling=a.child,a.child=s):(e=n.last,e!==null?e.sibling=s:a.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=va(),e.sibling=null,t=Qe.current,_(Qe,o?t&1|2:t&1),je&&Wa(a,n.treeForkCount),e):(He(a),null);case 22:case 23:return ka(a),ml(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(He(a),a.subtreeFlags&6&&(a.flags|=8192)):He(a),t=a.updateQueue,t!==null&&Gs(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&C(Zt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Fa(Ze),He(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function Hf(e,a){switch(Fi(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Fa(Ze),ce(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Fe(a),null;case 31:if(a.memoizedState!==null){if(ka(a),a.alternate===null)throw Error(c(340));Vt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ka(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Vt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return C(Qe),null;case 4:return ce(),null;case 10:return Fa(a.type),null;case 22:case 23:return ka(a),ml(),e!==null&&C(Zt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Fa(Ze),null;case 25:return null;default:return null}}function gd(e,a){switch(Fi(a),a.tag){case 3:Fa(Ze),ce();break;case 26:case 27:case 5:Fe(a);break;case 4:ce();break;case 31:a.memoizedState!==null&&ka(a);break;case 13:ka(a);break;case 19:C(Qe);break;case 10:Fa(a.type);break;case 22:case 23:ka(a),ml(),e!==null&&C(Zt);break;case 24:Fa(Ze)}}function ko(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){n=void 0;var s=t.create,l=t.inst;n=s(),l.destroy=n}t=t.next}while(t!==o)}}catch(r){Ae(a,a.return,r)}}function jt(e,a,t){try{var n=a.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var s=o.next;n=s;do{if((n.tag&e)===e){var l=n.inst,r=l.destroy;if(r!==void 0){l.destroy=void 0,o=a;var p=t,w=r;try{w()}catch(A){Ae(o,p,A)}}}n=n.next}while(n!==s)}}catch(A){Ae(a,a.return,A)}}function bd(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{lu(a,t)}catch(n){Ae(e,e.return,n)}}}function vd(e,a,t){t.props=$t(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Ae(e,a,n)}}function So(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(o){Ae(e,a,o)}}function Qa(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){Ae(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Ae(e,a,o)}else t.current=null}function yd(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){Ae(e,e.return,o)}}function Xl(e,a,t){try{var n=e.stateNode;ih(n,e.type,t,a),n[ua]=a}catch(o){Ae(e,e.return,o)}}function xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tt(e.type)||e.tag===4}function Zl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ka));else if(n!==4&&(n===27&&Tt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Kl(e,a,t),e=e.sibling;e!==null;)Kl(e,a,t),e=e.sibling}function Bs(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Tt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Bs(e,a,t),e=e.sibling;e!==null;)Bs(e,a,t),e=e.sibling}function wd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);ia(a,n,t),a[ta]=e,a[ua]=t}catch(s){Ae(e,e.return,s)}}var nt=!1,Ie=!1,Jl=!1,jd=typeof WeakSet=="function"?WeakSet:Set,ea=null;function Gf(e,a){if(e=e.containerInfo,hr=li,e=Dc(e),Ri(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var l=0,r=-1,p=-1,w=0,A=0,D=e,z=null;a:for(;;){for(var S;D!==t||o!==0&&D.nodeType!==3||(r=l+o),D!==s||n!==0&&D.nodeType!==3||(p=l+n),D.nodeType===3&&(l+=D.nodeValue.length),(S=D.firstChild)!==null;)z=D,D=S;for(;;){if(D===e)break a;if(z===t&&++w===o&&(r=l),z===s&&++A===n&&(p=l),(S=D.nextSibling)!==null)break;D=z,z=D.parentNode}D=S}t=r===-1||p===-1?null:{start:r,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(gr={focusedElem:e,selectionRange:t},li=!1,ea=a;ea!==null;)if(a=ea,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ea=e;else for(;ea!==null;){switch(a=ea,s=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)o=e[t],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=a,o=s.memoizedProps,s=s.memoizedState,n=t.stateNode;try{var J=$t(t.type,o);e=n.getSnapshotBeforeUpdate(J,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ae(t,t.return,ne)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)yr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=a.sibling,e!==null){e.return=a.return,ea=e;break}ea=a.return}}function zd(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:st(e,t),n&4&&ko(5,t);break;case 1:if(st(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){Ae(t,t.return,l)}else{var o=$t(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Ae(t,t.return,l)}}n&64&&bd(t),n&512&&So(t,t.return);break;case 3:if(st(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{lu(e,a)}catch(l){Ae(t,t.return,l)}}break;case 27:a===null&&n&4&&wd(t);case 26:case 5:st(e,t),a===null&&n&4&&yd(t),n&512&&So(t,t.return);break;case 12:st(e,t);break;case 31:st(e,t),n&4&&Nd(e,t);break;case 13:st(e,t),n&4&&qd(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Jf.bind(null,t),fh(e,t))));break;case 22:if(n=t.memoizedState!==null||nt,!n){a=a!==null&&a.memoizedState!==null||Ie,o=nt;var s=Ie;nt=n,(Ie=a)&&!s?it(e,t,(t.subtreeFlags&8772)!==0):st(e,t),nt=o,Ie=s}break;case 30:break;default:st(e,t)}}function kd(e){var a=e.alternate;a!==null&&(e.alternate=null,kd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ki(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,pa=!1;function ot(e,a,t){for(t=t.child;t!==null;)Sd(e,a,t),t=t.sibling}function Sd(e,a,t){if(ya&&typeof ya.onCommitFiberUnmount=="function")try{ya.onCommitFiberUnmount(Jn,t)}catch{}switch(t.tag){case 26:Ie||Qa(t,a),ot(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ie||Qa(t,a);var n=Ge,o=pa;Tt(t.type)&&(Ge=t.stateNode,pa=!1),ot(e,a,t),Do(t.stateNode),Ge=n,pa=o;break;case 5:Ie||Qa(t,a);case 6:if(n=Ge,o=pa,Ge=null,ot(e,a,t),Ge=n,pa=o,Ge!==null)if(pa)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(t.stateNode)}catch(s){Ae(t,a,s)}else try{Ge.removeChild(t.stateNode)}catch(s){Ae(t,a,s)}break;case 18:Ge!==null&&(pa?(e=Ge,bp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Bn(e)):bp(Ge,t.stateNode));break;case 4:n=Ge,o=pa,Ge=t.stateNode.containerInfo,pa=!0,ot(e,a,t),Ge=n,pa=o;break;case 0:case 11:case 14:case 15:jt(2,t,a),Ie||jt(4,t,a),ot(e,a,t);break;case 1:Ie||(Qa(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&vd(t,a,n)),ot(e,a,t);break;case 21:ot(e,a,t);break;case 22:Ie=(n=Ie)||t.memoizedState!==null,ot(e,a,t),Ie=n;break;default:ot(e,a,t)}}function Nd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bn(e)}catch(t){Ae(a,a.return,t)}}}function qd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bn(e)}catch(t){Ae(a,a.return,t)}}function Bf(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new jd),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new jd),a;default:throw Error(c(435,e.tag))}}function Rs(e,a){var t=Bf(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var o=If.bind(null,e,n);n.then(o,o)}})}function ma(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],s=e,l=a,r=l;e:for(;r!==null;){switch(r.tag){case 27:if(Tt(r.type)){Ge=r.stateNode,pa=!1;break e}break;case 5:Ge=r.stateNode,pa=!1;break e;case 3:case 4:Ge=r.stateNode.containerInfo,pa=!0;break e}r=r.return}if(Ge===null)throw Error(c(160));Sd(s,l,o),Ge=null,pa=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Ed(a,e),a=a.sibling}var Ga=null;function Ed(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ma(a,e),fa(e),n&4&&(jt(3,e,e.return),ko(3,e),jt(5,e,e.return));break;case 1:ma(a,e),fa(e),n&512&&(Ie||t===null||Qa(t,t.return)),n&64&&nt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var o=Ga;if(ma(a,e),fa(e),n&512&&(Ie||t===null||Qa(t,t.return)),n&4){var s=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,o=o.ownerDocument||o;a:switch(n){case"title":s=o.getElementsByTagName("title")[0],(!s||s[$n]||s[ta]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(n),o.head.insertBefore(s,o.querySelector("head > title"))),ia(s,n,t),s[ta]=e,Pe(s),n=s;break e;case"link":var l=Ep("link","href",o).get(n+(t.href||""));if(l){for(var r=0;r<l.length;r++)if(s=l[r],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(r,1);break a}}s=o.createElement(n),ia(s,n,t),o.head.appendChild(s);break;case"meta":if(l=Ep("meta","content",o).get(n+(t.content||""))){for(r=0;r<l.length;r++)if(s=l[r],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(r,1);break a}}s=o.createElement(n),ia(s,n,t),o.head.appendChild(s);break;default:throw Error(c(468,n))}s[ta]=e,Pe(s),n=s}e.stateNode=n}else Tp(o,e.type,e.stateNode);else e.stateNode=qp(o,n,e.memoizedProps);else s!==n?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,n===null?Tp(o,e.type,e.stateNode):qp(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Xl(e,e.memoizedProps,t.memoizedProps)}break;case 27:ma(a,e),fa(e),n&512&&(Ie||t===null||Qa(t,t.return)),t!==null&&n&4&&Xl(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ma(a,e),fa(e),n&512&&(Ie||t===null||Qa(t,t.return)),e.flags&32){o=e.stateNode;try{cn(o,"")}catch(J){Ae(e,e.return,J)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,Xl(e,o,t!==null?t.memoizedProps:o)),n&1024&&(Jl=!0);break;case 6:if(ma(a,e),fa(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(J){Ae(e,e.return,J)}}break;case 3:if(ni=null,o=Ga,Ga=ai(a.containerInfo),ma(a,e),Ga=o,fa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Bn(a.containerInfo)}catch(J){Ae(e,e.return,J)}Jl&&(Jl=!1,Td(e));break;case 4:n=Ga,Ga=ai(e.stateNode.containerInfo),ma(a,e),fa(e),Ga=n;break;case 12:ma(a,e),fa(e);break;case 31:ma(a,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Rs(e,n)));break;case 13:ma(a,e),fa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Vs=va()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Rs(e,n)));break;case 22:o=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,w=nt,A=Ie;if(nt=w||o,Ie=A||p,ma(a,e),Ie=A,nt=w,fa(e),n&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(t===null||p||nt||Ie||Ft(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){p=t=a;try{if(s=p.stateNode,o)l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{r=p.stateNode;var D=p.memoizedProps.style,z=D!=null&&D.hasOwnProperty("display")?D.display:null;r.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(J){Ae(p,p.return,J)}}}else if(a.tag===6){if(t===null){p=a;try{p.stateNode.nodeValue=o?"":p.memoizedProps}catch(J){Ae(p,p.return,J)}}}else if(a.tag===18){if(t===null){p=a;try{var S=p.stateNode;o?vp(S,!0):vp(p.stateNode,!1)}catch(J){Ae(p,p.return,J)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Rs(e,t))));break;case 19:ma(a,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Rs(e,n)));break;case 30:break;case 21:break;default:ma(a,e),fa(e)}}function fa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(xd(n)){t=n;break}n=n.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var o=t.stateNode,s=Zl(e);Bs(e,s,o);break;case 5:var l=t.stateNode;t.flags&32&&(cn(l,""),t.flags&=-33);var r=Zl(e);Bs(e,r,l);break;case 3:case 4:var p=t.stateNode.containerInfo,w=Zl(e);Kl(e,w,p);break;default:throw Error(c(161))}}catch(A){Ae(e,e.return,A)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Td(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Td(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function st(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)zd(e,a.alternate,a),a=a.sibling}function Ft(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:jt(4,a,a.return),Ft(a);break;case 1:Qa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&vd(a,a.return,t),Ft(a);break;case 27:Do(a.stateNode);case 26:case 5:Qa(a,a.return),Ft(a);break;case 22:a.memoizedState===null&&Ft(a);break;case 30:Ft(a);break;default:Ft(a)}e=e.sibling}}function it(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,o=e,s=a,l=s.flags;switch(s.tag){case 0:case 11:case 15:it(o,s,t),ko(4,s);break;case 1:if(it(o,s,t),n=s,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(w){Ae(n,n.return,w)}if(n=s,o=n.updateQueue,o!==null){var r=n.stateNode;try{var p=o.shared.hiddenCallbacks;if(p!==null)for(o.shared.hiddenCallbacks=null,o=0;o<p.length;o++)iu(p[o],r)}catch(w){Ae(n,n.return,w)}}t&&l&64&&bd(s),So(s,s.return);break;case 27:wd(s);case 26:case 5:it(o,s,t),t&&n===null&&l&4&&yd(s),So(s,s.return);break;case 12:it(o,s,t);break;case 31:it(o,s,t),t&&l&4&&Nd(o,s);break;case 13:it(o,s,t),t&&l&4&&qd(o,s);break;case 22:s.memoizedState===null&&it(o,s,t),So(s,s.return);break;case 30:break;default:it(o,s,t)}a=a.sibling}}function Il(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&uo(t))}function Wl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&uo(e))}function Ba(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Ad(e,a,t,n),a=a.sibling}function Ad(e,a,t,n){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a,t,n),o&2048&&ko(9,a);break;case 1:Ba(e,a,t,n);break;case 3:Ba(e,a,t,n),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&uo(e)));break;case 12:if(o&2048){Ba(e,a,t,n),e=a.stateNode;try{var s=a.memoizedProps,l=s.id,r=s.onPostCommit;typeof r=="function"&&r(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ae(a,a.return,p)}}else Ba(e,a,t,n);break;case 31:Ba(e,a,t,n);break;case 13:Ba(e,a,t,n);break;case 23:break;case 22:s=a.stateNode,l=a.alternate,a.memoizedState!==null?s._visibility&2?Ba(e,a,t,n):No(e,a):s._visibility&2?Ba(e,a,t,n):(s._visibility|=2,Tn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),o&2048&&Il(l,a);break;case 24:Ba(e,a,t,n),o&2048&&Wl(a.alternate,a);break;default:Ba(e,a,t,n)}}function Tn(e,a,t,n,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,l=a,r=t,p=n,w=l.flags;switch(l.tag){case 0:case 11:case 15:Tn(s,l,r,p,o),ko(8,l);break;case 23:break;case 22:var A=l.stateNode;l.memoizedState!==null?A._visibility&2?Tn(s,l,r,p,o):No(s,l):(A._visibility|=2,Tn(s,l,r,p,o)),o&&w&2048&&Il(l.alternate,l);break;case 24:Tn(s,l,r,p,o),o&&w&2048&&Wl(l.alternate,l);break;default:Tn(s,l,r,p,o)}a=a.sibling}}function No(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,o=n.flags;switch(n.tag){case 22:No(t,n),o&2048&&Il(n.alternate,n);break;case 24:No(t,n),o&2048&&Wl(n.alternate,n);break;default:No(t,n)}a=a.sibling}}var qo=8192;function An(e,a,t){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)Cd(e,a,t),e=e.sibling}function Cd(e,a,t){switch(e.tag){case 26:An(e,a,t),e.flags&qo&&e.memoizedState!==null&&Nh(t,Ga,e.memoizedState,e.memoizedProps);break;case 5:An(e,a,t);break;case 3:case 4:var n=Ga;Ga=ai(e.stateNode.containerInfo),An(e,a,t),Ga=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=qo,qo=16777216,An(e,a,t),qo=n):An(e,a,t));break;default:An(e,a,t)}}function Md(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Eo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ea=n,Dd(n,e)}Md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ud(e),e=e.sibling}function Ud(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&jt(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ys(e)):Eo(e);break;default:Eo(e)}}function Ys(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ea=n,Dd(n,e)}Md(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:jt(8,a,a.return),Ys(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Ys(a));break;default:Ys(a)}e=e.sibling}}function Dd(e,a){for(;ea!==null;){var t=ea;switch(t.tag){case 0:case 11:case 15:jt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:uo(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,ea=n;else e:for(t=e;ea!==null;){n=ea;var o=n.sibling,s=n.return;if(kd(n),n===t){ea=null;break e}if(o!==null){o.return=s,ea=o;break e}ea=s}}}var Rf={getCacheForType:function(e){var a=oa(Ze),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return oa(Ze).controller.signal}},Yf=typeof WeakMap=="function"?WeakMap:Map,qe=0,Le=null,ve=null,xe=0,Te=0,Sa=null,zt=!1,Cn=!1,$l=!1,lt=0,Ye=0,kt=0,Pt=0,Fl=0,Na=0,Mn=0,To=null,ha=null,Pl=!1,Vs=0,Ld=0,Qs=1/0,Xs=null,St=null,$e=0,Nt=null,Un=null,rt=0,er=0,ar=null,Od=null,Ao=0,tr=null;function qa(){return(qe&2)!==0&&xe!==0?xe&-xe:N.T!==null?rr():Fr()}function _d(){if(Na===0)if((xe&536870912)===0||je){var e=Po;Po<<=1,(Po&3932160)===0&&(Po=262144),Na=e}else Na=536870912;return e=za.current,e!==null&&(e.flags|=32),Na}function ga(e,a,t){(e===Le&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Dn(e,0),qt(e,xe,Na,!1)),Wn(e,t),((qe&2)===0||e!==Le)&&(e===Le&&((qe&2)===0&&(Pt|=t),Ye===4&&qt(e,xe,Na,!1)),Xa(e))}function Hd(e,a,t){if((qe&6)!==0)throw Error(c(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||In(e,a),o=n?Xf(e,a):or(e,a,!0),s=n;do{if(o===0){Cn&&!n&&qt(e,a,0,!1);break}else{if(t=e.current.alternate,s&&!Vf(t)){o=or(e,a,!1),s=!1;continue}if(o===2){if(s=a,e.errorRecoveryDisabledLanes&s)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var r=e;o=To;var p=r.current.memoizedState.isDehydrated;if(p&&(Dn(r,l).flags|=256),l=or(r,l,!1),l!==2){if($l&&!p){r.errorRecoveryDisabledLanes|=s,Pt|=s,o=4;break e}s=ha,ha=o,s!==null&&(ha===null?ha=s:ha.push.apply(ha,s))}o=l}if(s=!1,o!==2)continue}}if(o===1){Dn(e,0),qt(e,a,0,!0);break}e:{switch(n=e,s=o,s){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:qt(n,a,Na,!zt);break e;case 2:ha=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(o=Vs+300-va(),10<o)){if(qt(n,a,Na,!zt),as(n,0,!0)!==0)break e;rt=a,n.timeoutHandle=hp(Gd.bind(null,n,t,ha,Xs,Pl,a,Na,Pt,Mn,zt,s,"Throttled",-0,0),o);break e}Gd(n,t,ha,Xs,Pl,a,Na,Pt,Mn,zt,s,null,-0,0)}}break}while(!0);Xa(e)}function Gd(e,a,t,n,o,s,l,r,p,w,A,D,z,S){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ka},Cd(a,s,D);var J=(s&62914560)===s?Vs-va():(s&4194048)===s?Ld-va():0;if(J=qh(D,J),J!==null){rt=s,e.cancelPendingCommit=J(Kd.bind(null,e,a,s,t,n,o,l,r,p,A,D,null,z,S)),qt(e,s,l,!w);return}}Kd(e,a,s,t,n,o,l,r,p)}function Vf(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],s=o.getSnapshot;o=o.value;try{if(!wa(s(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qt(e,a,t,n){a&=~Fl,a&=~Pt,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var o=a;0<o;){var s=31-xa(o),l=1<<s;n[s]=-1,o&=~l}t!==0&&Ir(e,t,a)}function Zs(){return(qe&6)===0?(Co(0),!1):!0}function nr(){if(ve!==null){if(Te===0)var e=ve.return;else e=ve,$a=Qt=null,yl(e),kn=null,mo=0,e=ve;for(;e!==null;)gd(e.alternate,e),e=e.return;ve=null}}function Dn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,ch(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rt=0,nr(),Le=e,ve=t=Ia(e.current,null),xe=a,Te=0,Sa=null,zt=!1,Cn=In(e,a),$l=!1,Mn=Na=Fl=Pt=kt=Ye=0,ha=To=null,Pl=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var o=31-xa(n),s=1<<o;a|=e[o],n&=~s}return lt=a,ms(),t}function Bd(e,a){me=null,N.H=wo,a===zn||a===ws?(a=tu(),Te=3):a===ll?(a=tu(),Te=4):Te=a===Ll?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Sa=a,ve===null&&(Ye=1,Ls(e,Ca(a,e.current)))}function Rd(){var e=za.current;return e===null?!0:(xe&4194048)===xe?La===null:(xe&62914560)===xe||(xe&536870912)!==0?e===La:!1}function Yd(){var e=N.H;return N.H=wo,e===null?wo:e}function Vd(){var e=N.A;return N.A=Rf,e}function Ks(){Ye=4,zt||(xe&4194048)!==xe&&za.current!==null||(Cn=!0),(kt&134217727)===0&&(Pt&134217727)===0||Le===null||qt(Le,xe,Na,!1)}function or(e,a,t){var n=qe;qe|=2;var o=Yd(),s=Vd();(Le!==e||xe!==a)&&(Xs=null,Dn(e,a)),a=!1;var l=Ye;e:do try{if(Te!==0&&ve!==null){var r=ve,p=Sa;switch(Te){case 8:nr(),l=6;break e;case 3:case 2:case 9:case 6:za.current===null&&(a=!0);var w=Te;if(Te=0,Sa=null,Ln(e,r,p,w),t&&Cn){l=0;break e}break;default:w=Te,Te=0,Sa=null,Ln(e,r,p,w)}}Qf(),l=Ye;break}catch(A){Bd(e,A)}while(!0);return a&&e.shellSuspendCounter++,$a=Qt=null,qe=n,N.H=o,N.A=s,ve===null&&(Le=null,xe=0,ms()),l}function Qf(){for(;ve!==null;)Qd(ve)}function Xf(e,a){var t=qe;qe|=2;var n=Yd(),o=Vd();Le!==e||xe!==a?(Xs=null,Qs=va()+500,Dn(e,a)):Cn=In(e,a);e:do try{if(Te!==0&&ve!==null){a=ve;var s=Sa;a:switch(Te){case 1:Te=0,Sa=null,Ln(e,a,s,1);break;case 2:case 9:if(eu(s)){Te=0,Sa=null,Xd(a);break}a=function(){Te!==2&&Te!==9||Le!==e||(Te=7),Xa(e)},s.then(a,a);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:eu(s)?(Te=0,Sa=null,Xd(a)):(Te=0,Sa=null,Ln(e,a,s,7));break;case 5:var l=null;switch(ve.tag){case 26:l=ve.memoizedState;case 5:case 27:var r=ve;if(l?Ap(l):r.stateNode.complete){Te=0,Sa=null;var p=r.sibling;if(p!==null)ve=p;else{var w=r.return;w!==null?(ve=w,Js(w)):ve=null}break a}}Te=0,Sa=null,Ln(e,a,s,5);break;case 6:Te=0,Sa=null,Ln(e,a,s,6);break;case 8:nr(),Ye=6;break e;default:throw Error(c(462))}}Zf();break}catch(A){Bd(e,A)}while(!0);return $a=Qt=null,N.H=n,N.A=o,qe=t,ve!==null?0:(Le=null,xe=0,ms(),Ye)}function Zf(){for(;ve!==null&&!Ce();)Qd(ve)}function Qd(e){var a=fd(e.alternate,e,lt);e.memoizedProps=e.pendingProps,a===null?Js(e):ve=a}function Xd(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=rd(t,a,a.pendingProps,a.type,void 0,xe);break;case 11:a=rd(t,a,a.pendingProps,a.type.render,a.ref,xe);break;case 5:yl(a);default:gd(t,a),a=ve=Vc(a,lt),a=fd(t,a,lt)}e.memoizedProps=e.pendingProps,a===null?Js(e):ve=a}function Ln(e,a,t,n){$a=Qt=null,yl(a),kn=null,mo=0;var o=a.return;try{if(Df(e,o,a,t,xe)){Ye=1,Ls(e,Ca(t,e.current)),ve=null;return}}catch(s){if(o!==null)throw ve=o,s;Ye=1,Ls(e,Ca(t,e.current)),ve=null;return}a.flags&32768?(je||n===1?e=!0:Cn||(xe&536870912)!==0?e=!1:(zt=e=!0,(n===2||n===9||n===3||n===6)&&(n=za.current,n!==null&&n.tag===13&&(n.flags|=16384))),Zd(a,e)):Js(a)}function Js(e){var a=e;do{if((a.flags&32768)!==0){Zd(a,zt);return}e=a.return;var t=_f(a.alternate,a,lt);if(t!==null){ve=t;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);Ye===0&&(Ye=5)}function Zd(e,a){do{var t=Hf(e.alternate,e);if(t!==null){t.flags&=32767,ve=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=t}while(e!==null);Ye=6,ve=null}function Kd(e,a,t,n,o,s,l,r,p){e.cancelPendingCommit=null;do Is();while($e!==0);if((qe&6)!==0)throw Error(c(327));if(a!==null){if(a===e.current)throw Error(c(177));if(s=a.lanes|a.childLanes,s|=Zi,km(e,t,s,l,r,p),e===Le&&(ve=Le=null,xe=0),Un=a,Nt=e,rt=t,er=s,ar=o,Od=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wf($o,function(){return Fd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,o=H.p,H.p=2,l=qe,qe|=4;try{Gf(e,a,t)}finally{qe=l,H.p=o,N.T=n}}$e=1,Jd(),Id(),Wd()}}function Jd(){if($e===1){$e=0;var e=Nt,a=Un,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var n=H.p;H.p=2;var o=qe;qe|=4;try{Ed(a,e);var s=gr,l=Dc(e.containerInfo),r=s.focusedElem,p=s.selectionRange;if(l!==r&&r&&r.ownerDocument&&Uc(r.ownerDocument.documentElement,r)){if(p!==null&&Ri(r)){var w=p.start,A=p.end;if(A===void 0&&(A=w),"selectionStart"in r)r.selectionStart=w,r.selectionEnd=Math.min(A,r.value.length);else{var D=r.ownerDocument||document,z=D&&D.defaultView||window;if(z.getSelection){var S=z.getSelection(),J=r.textContent.length,ne=Math.min(p.start,J),De=p.end===void 0?ne:Math.min(p.end,J);!S.extend&&ne>De&&(l=De,De=ne,ne=l);var g=Mc(r,ne),f=Mc(r,De);if(g&&f&&(S.rangeCount!==1||S.anchorNode!==g.node||S.anchorOffset!==g.offset||S.focusNode!==f.node||S.focusOffset!==f.offset)){var y=D.createRange();y.setStart(g.node,g.offset),S.removeAllRanges(),ne>De?(S.addRange(y),S.extend(f.node,f.offset)):(y.setEnd(f.node,f.offset),S.addRange(y))}}}}for(D=[],S=r;S=S.parentNode;)S.nodeType===1&&D.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<D.length;r++){var M=D[r];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}li=!!hr,gr=hr=null}finally{qe=o,H.p=n,N.T=t}}e.current=a,$e=2}}function Id(){if($e===2){$e=0;var e=Nt,a=Un,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var n=H.p;H.p=2;var o=qe;qe|=4;try{zd(e,a.alternate,a)}finally{qe=o,H.p=n,N.T=t}}$e=3}}function Wd(){if($e===4||$e===3){$e=0,Kn();var e=Nt,a=Un,t=rt,n=Od;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?$e=5:($e=0,Un=Nt=null,$d(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(St=null),ji(t),a=a.stateNode,ya&&typeof ya.onCommitFiberRoot=="function")try{ya.onCommitFiberRoot(Jn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=N.T,o=H.p,H.p=2,N.T=null;try{for(var s=e.onRecoverableError,l=0;l<n.length;l++){var r=n[l];s(r.value,{componentStack:r.stack})}}finally{N.T=a,H.p=o}}(rt&3)!==0&&Is(),Xa(e),o=e.pendingLanes,(t&261930)!==0&&(o&42)!==0?e===tr?Ao++:(Ao=0,tr=e):Ao=0,Co(0)}}function $d(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,uo(a)))}function Is(){return Jd(),Id(),Wd(),Fd()}function Fd(){if($e!==5)return!1;var e=Nt,a=er;er=0;var t=ji(rt),n=N.T,o=H.p;try{H.p=32>t?32:t,N.T=null,t=ar,ar=null;var s=Nt,l=rt;if($e=0,Un=Nt=null,rt=0,(qe&6)!==0)throw Error(c(331));var r=qe;if(qe|=4,Ud(s.current),Ad(s,s.current,l,t),qe=r,Co(0,!1),ya&&typeof ya.onPostCommitFiberRoot=="function")try{ya.onPostCommitFiberRoot(Jn,s)}catch{}return!0}finally{H.p=o,N.T=n,$d(e,a)}}function Pd(e,a,t){a=Ca(t,a),a=Dl(e.stateNode,a,2),e=yt(e,a,2),e!==null&&(Wn(e,2),Xa(e))}function Ae(e,a,t){if(e.tag===3)Pd(e,e,t);else for(;a!==null;){if(a.tag===3){Pd(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=Ca(t,e),t=ed(2),n=yt(a,t,2),n!==null&&(ad(t,n,a,e),Wn(n,2),Xa(n));break}}a=a.return}}function sr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Yf;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||($l=!0,o.add(t),e=Kf.bind(null,e,a,t),a.then(e,e))}function Kf(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Le===e&&(xe&t)===t&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>va()-Vs?(qe&2)===0&&Dn(e,0):Fl|=t,Mn===xe&&(Mn=0)),Xa(e)}function ep(e,a){a===0&&(a=Jr()),e=Rt(e,a),e!==null&&(Wn(e,a),Xa(e))}function Jf(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),ep(e,t)}function If(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(a),ep(e,t)}function Wf(e,a){return pe(e,a)}var Ws=null,On=null,ir=!1,$s=!1,lr=!1,Et=0;function Xa(e){e!==On&&e.next===null&&(On===null?Ws=On=e:On=On.next=e),$s=!0,ir||(ir=!0,Ff())}function Co(e,a){if(!lr&&$s){lr=!0;do for(var t=!1,n=Ws;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var s=0;else{var l=n.suspendedLanes,r=n.pingedLanes;s=(1<<31-xa(42|e)+1)-1,s&=o&~(l&~r),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,op(n,s))}else s=xe,s=as(n,n===Le?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||In(n,s)||(t=!0,op(n,s));n=n.next}while(t);lr=!1}}function $f(){ap()}function ap(){$s=ir=!1;var e=0;Et!==0&&rh()&&(e=Et);for(var a=va(),t=null,n=Ws;n!==null;){var o=n.next,s=tp(n,a);s===0?(n.next=null,t===null?Ws=o:t.next=o,o===null&&(On=t)):(t=n,(e!==0||(s&3)!==0)&&($s=!0)),n=o}$e!==0&&$e!==5||Co(e),Et!==0&&(Et=0)}function tp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var l=31-xa(s),r=1<<l,p=o[l];p===-1?((r&t)===0||(r&n)!==0)&&(o[l]=zm(r,a)):p<=a&&(e.expiredLanes|=r),s&=~r}if(a=Le,t=xe,t=as(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ke(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||In(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&ke(n),ji(t)){case 2:case 8:t=Zr;break;case 32:t=$o;break;case 268435456:t=Kr;break;default:t=$o}return n=np.bind(null,e),t=pe(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&ke(n),e.callbackPriority=2,e.callbackNode=null,2}function np(e,a){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Is()&&e.callbackNode!==t)return null;var n=xe;return n=as(e,e===Le?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Hd(e,n,a),tp(e,va()),e.callbackNode!=null&&e.callbackNode===t?np.bind(null,e):null)}function op(e,a){if(Is())return null;Hd(e,a,!0)}function Ff(){uh(function(){(qe&6)!==0?pe(Xr,$f):ap()})}function rr(){if(Et===0){var e=wn;e===0&&(e=Fo,Fo<<=1,(Fo&261888)===0&&(Fo=256)),Et=e}return Et}function sp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ss(""+e)}function ip(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Pf(e,a,t,n,o){if(a==="submit"&&t&&t.stateNode===o){var s=sp((o[ua]||null).action),l=n.submitter;l&&(a=(a=l[ua]||null)?sp(a.formAction):l.getAttribute("formAction"),a!==null&&(s=a,l=null));var r=new cs("action","action",null,n,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Et!==0){var p=l?ip(o,l):new FormData(o);El(t,{pending:!0,data:p,method:o.method,action:s},null,p)}}else typeof s=="function"&&(r.preventDefault(),p=l?ip(o,l):new FormData(o),El(t,{pending:!0,data:p,method:o.method,action:s},s,p))},currentTarget:o}]})}}for(var cr=0;cr<Xi.length;cr++){var ur=Xi[cr],eh=ur.toLowerCase(),ah=ur[0].toUpperCase()+ur.slice(1);Ha(eh,"on"+ah)}Ha(_c,"onAnimationEnd"),Ha(Hc,"onAnimationIteration"),Ha(Gc,"onAnimationStart"),Ha("dblclick","onDoubleClick"),Ha("focusin","onFocus"),Ha("focusout","onBlur"),Ha(bf,"onTransitionRun"),Ha(vf,"onTransitionStart"),Ha(yf,"onTransitionCancel"),Ha(Bc,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_t("onBeforeInput",["compositionend","keypress","textInput","paste"]),_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),th=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function lp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var l=n.length-1;0<=l;l--){var r=n[l],p=r.instance,w=r.currentTarget;if(r=r.listener,p!==s&&o.isPropagationStopped())break e;s=r,o.currentTarget=w;try{s(o)}catch(A){ps(A)}o.currentTarget=null,s=p}else for(l=0;l<n.length;l++){if(r=n[l],p=r.instance,w=r.currentTarget,r=r.listener,p!==s&&o.isPropagationStopped())break e;s=r,o.currentTarget=w;try{s(o)}catch(A){ps(A)}o.currentTarget=null,s=p}}}}function ye(e,a){var t=a[zi];t===void 0&&(t=a[zi]=new Set);var n=e+"__bubble";t.has(n)||(rp(a,e,2,!1),t.add(n))}function dr(e,a,t){var n=0;a&&(n|=4),rp(t,e,n,a)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Fs]){e[Fs]=!0,ac.forEach(function(t){t!=="selectionchange"&&(th.has(t)||dr(t,!1,e),dr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Fs]||(a[Fs]=!0,dr("selectionchange",!1,a))}}function rp(e,a,t,n){switch(_p(a)){case 2:var o=Ah;break;case 8:o=Ch;break;default:o=qr}t=o.bind(null,a,t,e),o=void 0,!Mi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function mr(e,a,t,n,o){var s=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var r=n.stateNode.containerInfo;if(r===o)break;if(l===4)for(l=n.return;l!==null;){var p=l.tag;if((p===3||p===4)&&l.stateNode.containerInfo===o)return;l=l.return}for(;r!==null;){if(l=nn(r),l===null)return;if(p=l.tag,p===5||p===6||p===26||p===27){n=s=l;continue e}r=r.parentNode}}n=n.return}mc(function(){var w=s,A=Ai(t),D=[];e:{var z=Rc.get(e);if(z!==void 0){var S=cs,J=e;switch(e){case"keypress":if(ls(t)===0)break e;case"keydown":case"keyup":S=Jm;break;case"focusin":J="focus",S=Oi;break;case"focusout":J="blur",S=Oi;break;case"beforeblur":case"afterblur":S=Oi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=$m;break;case _c:case Hc:case Gc:S=Gm;break;case Bc:S=Pm;break;case"scroll":case"scrollend":S=Dm;break;case"wheel":S=af;break;case"copy":case"cut":case"paste":S=Rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=vc;break;case"toggle":case"beforetoggle":S=nf}var ne=(a&4)!==0,De=!ne&&(e==="scroll"||e==="scrollend"),g=ne?z!==null?z+"Capture":null:z;ne=[];for(var f=w,y;f!==null;){var M=f;if(y=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||y===null||g===null||(M=Pn(f,g),M!=null&&ne.push(Uo(f,M,y))),De)break;f=f.return}0<ne.length&&(z=new S(z,J,null,t,A),D.push({event:z,listeners:ne}))}}if((a&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",z&&t!==Ti&&(J=t.relatedTarget||t.fromElement)&&(nn(J)||J[tn]))break e;if((S||z)&&(z=A.window===A?A:(z=A.ownerDocument)?z.defaultView||z.parentWindow:window,S?(J=t.relatedTarget||t.toElement,S=w,J=J?nn(J):null,J!==null&&(De=k(J),ne=J.tag,J!==De||ne!==5&&ne!==27&&ne!==6)&&(J=null)):(S=null,J=w),S!==J)){if(ne=gc,M="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(ne=vc,M="onPointerLeave",g="onPointerEnter",f="pointer"),De=S==null?z:Fn(S),y=J==null?z:Fn(J),z=new ne(M,f+"leave",S,t,A),z.target=De,z.relatedTarget=y,M=null,nn(A)===w&&(ne=new ne(g,f+"enter",J,t,A),ne.target=y,ne.relatedTarget=De,M=ne),De=M,S&&J)a:{for(ne=nh,g=S,f=J,y=0,M=g;M;M=ne(M))y++;M=0;for(var ee=f;ee;ee=ne(ee))M++;for(;0<y-M;)g=ne(g),y--;for(;0<M-y;)f=ne(f),M--;for(;y--;){if(g===f||f!==null&&g===f.alternate){ne=g;break a}g=ne(g),f=ne(f)}ne=null}else ne=null;S!==null&&cp(D,z,S,ne,!1),J!==null&&De!==null&&cp(D,De,J,ne,!0)}}e:{if(z=w?Fn(w):window,S=z.nodeName&&z.nodeName.toLowerCase(),S==="select"||S==="input"&&z.type==="file")var Se=Nc;else if(kc(z))if(qc)Se=ff;else{Se=pf;var W=df}else S=z.nodeName,!S||S.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?w&&Ei(w.elementType)&&(Se=Nc):Se=mf;if(Se&&(Se=Se(e,w))){Sc(D,Se,t,A);break e}W&&W(e,z,w),e==="focusout"&&w&&z.type==="number"&&w.memoizedProps.value!=null&&qi(z,"number",z.value)}switch(W=w?Fn(w):window,e){case"focusin":(kc(W)||W.contentEditable==="true")&&(mn=W,Yi=w,lo=null);break;case"focusout":lo=Yi=mn=null;break;case"mousedown":Vi=!0;break;case"contextmenu":case"mouseup":case"dragend":Vi=!1,Lc(D,t,A);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":Lc(D,t,A)}var he;if(Hi)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else pn?jc(e,t)&&(we="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(we="onCompositionStart");we&&(yc&&t.locale!=="ko"&&(pn||we!=="onCompositionStart"?we==="onCompositionEnd"&&pn&&(he=fc()):(pt=A,Ui="value"in pt?pt.value:pt.textContent,pn=!0)),W=Ps(w,we),0<W.length&&(we=new bc(we,e,null,t,A),D.push({event:we,listeners:W}),he?we.data=he:(he=zc(t),he!==null&&(we.data=he)))),(he=sf?lf(e,t):rf(e,t))&&(we=Ps(w,"onBeforeInput"),0<we.length&&(W=new bc("onBeforeInput","beforeinput",null,t,A),D.push({event:W,listeners:we}),W.data=he)),Pf(D,e,w,t,A)}lp(D,a)})}function Uo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Ps(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Pn(e,t),o!=null&&n.unshift(Uo(e,o,s)),o=Pn(e,a),o!=null&&n.push(Uo(e,o,s))),e.tag===3)return n;e=e.return}return[]}function nh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cp(e,a,t,n,o){for(var s=a._reactName,l=[];t!==null&&t!==n;){var r=t,p=r.alternate,w=r.stateNode;if(r=r.tag,p!==null&&p===n)break;r!==5&&r!==26&&r!==27||w===null||(p=w,o?(w=Pn(t,s),w!=null&&l.unshift(Uo(t,w,p))):o||(w=Pn(t,s),w!=null&&l.push(Uo(t,w,p)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var oh=/\r\n?/g,sh=/\u0000|\uFFFD/g;function up(e){return(typeof e=="string"?e:""+e).replace(oh,`
`).replace(sh,"")}function dp(e,a){return a=up(a),up(e)===a}function Ue(e,a,t,n,o,s){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||cn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&cn(e,""+n);break;case"className":ns(e,"class",n);break;case"tabIndex":ns(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ns(e,t,n);break;case"style":dc(e,n,s);break;case"data":if(a!=="object"){ns(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ss(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(a!=="input"&&Ue(e,a,"name",o.name,o,null),Ue(e,a,"formEncType",o.formEncType,o,null),Ue(e,a,"formMethod",o.formMethod,o,null),Ue(e,a,"formTarget",o.formTarget,o,null)):(Ue(e,a,"encType",o.encType,o,null),Ue(e,a,"method",o.method,o,null),Ue(e,a,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ss(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Ka);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=ss(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ts(e,"popover",n);break;case"xlinkActuate":Za(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Za(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Za(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Za(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Za(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Za(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Za(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Za(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Za(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ts(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Mm.get(t)||t,ts(e,t,n))}}function fr(e,a,t,n,o,s){switch(t){case"style":dc(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof n=="string"?cn(e,n):(typeof n=="number"||typeof n=="bigint")&&cn(e,""+n);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),a=t.slice(2,o?t.length-7:void 0),s=e[ua]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(a,s,o),typeof n=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,o);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):ts(e,t,n)}}}function ia(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var n=!1,o=!1,s;for(s in t)if(t.hasOwnProperty(s)){var l=t[s];if(l!=null)switch(s){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Ue(e,a,s,l,t,null)}}o&&Ue(e,a,"srcSet",t.srcSet,t,null),n&&Ue(e,a,"src",t.src,t,null);return;case"input":ye("invalid",e);var r=s=l=o=null,p=null,w=null;for(n in t)if(t.hasOwnProperty(n)){var A=t[n];if(A!=null)switch(n){case"name":o=A;break;case"type":l=A;break;case"checked":p=A;break;case"defaultChecked":w=A;break;case"value":s=A;break;case"defaultValue":r=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,a));break;default:Ue(e,a,n,A,t,null)}}lc(e,s,r,p,w,l,o,!1);return;case"select":ye("invalid",e),n=l=s=null;for(o in t)if(t.hasOwnProperty(o)&&(r=t[o],r!=null))switch(o){case"value":s=r;break;case"defaultValue":l=r;break;case"multiple":n=r;default:Ue(e,a,o,r,t,null)}a=s,t=l,e.multiple=!!n,a!=null?rn(e,!!n,a,!1):t!=null&&rn(e,!!n,t,!0);return;case"textarea":ye("invalid",e),s=o=n=null;for(l in t)if(t.hasOwnProperty(l)&&(r=t[l],r!=null))switch(l){case"value":n=r;break;case"defaultValue":o=r;break;case"children":s=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:Ue(e,a,l,r,t,null)}cc(e,n,o,s);return;case"option":for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null)&&(p==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Ue(e,a,p,n,t,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(n=0;n<Mo.length;n++)ye(Mo[n],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(n=t[w],n!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Ue(e,a,w,n,t,null)}return;default:if(Ei(a)){for(A in t)t.hasOwnProperty(A)&&(n=t[A],n!==void 0&&fr(e,a,A,n,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(n=t[r],n!=null&&Ue(e,a,r,n,t,null))}function ih(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,l=null,r=null,p=null,w=null,A=null;for(S in t){var D=t[S];if(t.hasOwnProperty(S)&&D!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":p=D;default:n.hasOwnProperty(S)||Ue(e,a,S,null,n,D)}}for(var z in n){var S=n[z];if(D=t[z],n.hasOwnProperty(z)&&(S!=null||D!=null))switch(z){case"type":s=S;break;case"name":o=S;break;case"checked":w=S;break;case"defaultChecked":A=S;break;case"value":l=S;break;case"defaultValue":r=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,a));break;default:S!==D&&Ue(e,a,z,S,n,D)}}Ni(e,l,r,p,w,A,s,o);return;case"select":S=l=r=z=null;for(s in t)if(p=t[s],t.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":S=p;default:n.hasOwnProperty(s)||Ue(e,a,s,null,n,p)}for(o in n)if(s=n[o],p=t[o],n.hasOwnProperty(o)&&(s!=null||p!=null))switch(o){case"value":z=s;break;case"defaultValue":r=s;break;case"multiple":l=s;default:s!==p&&Ue(e,a,o,s,n,p)}a=r,t=l,n=S,z!=null?rn(e,!!t,z,!1):!!n!=!!t&&(a!=null?rn(e,!!t,a,!0):rn(e,!!t,t?[]:"",!1));return;case"textarea":S=z=null;for(r in t)if(o=t[r],t.hasOwnProperty(r)&&o!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Ue(e,a,r,null,n,o)}for(l in n)if(o=n[l],s=t[l],n.hasOwnProperty(l)&&(o!=null||s!=null))switch(l){case"value":z=o;break;case"defaultValue":S=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:o!==s&&Ue(e,a,l,o,n,s)}rc(e,z,S);return;case"option":for(var J in t)z=t[J],t.hasOwnProperty(J)&&z!=null&&!n.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ue(e,a,J,null,n,z));for(p in n)z=n[p],S=t[p],n.hasOwnProperty(p)&&z!==S&&(z!=null||S!=null)&&(p==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Ue(e,a,p,z,n,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in t)z=t[ne],t.hasOwnProperty(ne)&&z!=null&&!n.hasOwnProperty(ne)&&Ue(e,a,ne,null,n,z);for(w in n)if(z=n[w],S=t[w],n.hasOwnProperty(w)&&z!==S&&(z!=null||S!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,a));break;default:Ue(e,a,w,z,n,S)}return;default:if(Ei(a)){for(var De in t)z=t[De],t.hasOwnProperty(De)&&z!==void 0&&!n.hasOwnProperty(De)&&fr(e,a,De,void 0,n,z);for(A in n)z=n[A],S=t[A],!n.hasOwnProperty(A)||z===S||z===void 0&&S===void 0||fr(e,a,A,z,n,S);return}}for(var g in t)z=t[g],t.hasOwnProperty(g)&&z!=null&&!n.hasOwnProperty(g)&&Ue(e,a,g,null,n,z);for(D in n)z=n[D],S=t[D],!n.hasOwnProperty(D)||z===S||z==null&&S==null||Ue(e,a,D,z,n,S)}function pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var o=t[n],s=o.transferSize,l=o.initiatorType,r=o.duration;if(s&&r&&pp(l)){for(l=0,r=o.responseEnd,n+=1;n<t.length;n++){var p=t[n],w=p.startTime;if(w>r)break;var A=p.transferSize,D=p.initiatorType;A&&pp(D)&&(p=p.responseEnd,l+=A*(p<r?1:(r-w)/(p-w)))}if(--n,a+=8*(s+l)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hr=null,gr=null;function ei(e){return e.nodeType===9?e:e.ownerDocument}function mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function br(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var vr=null;function rh(){var e=window.event;return e&&e.type==="popstate"?e===vr?!1:(vr=e,!0):(vr=null,!1)}var hp=typeof setTimeout=="function"?setTimeout:void 0,ch=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(dh)}:hp;function dh(e){setTimeout(function(){throw e})}function Tt(e){return e==="head"}function bp(e,a){var t=a,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(o),Bn(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Do(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Do(t);for(var s=t.firstChild;s;){var l=s.nextSibling,r=s.nodeName;s[$n]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=l}}else t==="body"&&Do(e.ownerDocument.body);t=o}while(t);Bn(a)}function vp(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function yr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":yr(t),ki(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function ph(e,a,t,n){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[$n])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Oa(e.nextSibling),e===null)break}return null}function mh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Oa(e.nextSibling),e===null))return null;return e}function yp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Oa(e.nextSibling),e===null))return null;return e}function xr(e){return e.data==="$?"||e.data==="$~"}function wr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fh(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Oa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var jr=null;function xp(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Oa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function wp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function jp(e,a,t){switch(a=ei(t),e){case"html":if(e=a.documentElement,!e)throw Error(c(452));return e;case"head":if(e=a.head,!e)throw Error(c(453));return e;case"body":if(e=a.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Do(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ki(e)}var _a=new Map,zp=new Set;function ai(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ct=H.d;H.d={f:hh,r:gh,D:bh,C:vh,L:yh,m:xh,X:jh,S:wh,M:zh};function hh(){var e=ct.f(),a=Zs();return e||a}function gh(e){var a=on(e);a!==null&&a.tag===5&&a.type==="form"?Bu(a):ct.r(e)}var _n=typeof document>"u"?null:document;function kp(e,a,t){var n=_n;if(n&&typeof a=="string"&&a){var o=Ta(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),zp.has(o)||(zp.add(o),e={rel:e,crossOrigin:t,href:a},n.querySelector(o)===null&&(a=n.createElement("link"),ia(a,"link",e),Pe(a),n.head.appendChild(a)))}}function bh(e){ct.D(e),kp("dns-prefetch",e,null)}function vh(e,a){ct.C(e,a),kp("preconnect",e,a)}function yh(e,a,t){ct.L(e,a,t);var n=_n;if(n&&e&&a){var o='link[rel="preload"][as="'+Ta(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Ta(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Ta(t.imageSizes)+'"]')):o+='[href="'+Ta(e)+'"]';var s=o;switch(a){case"style":s=Hn(e);break;case"script":s=Gn(e)}_a.has(s)||(e=L({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),_a.set(s,e),n.querySelector(o)!==null||a==="style"&&n.querySelector(Lo(s))||a==="script"&&n.querySelector(Oo(s))||(a=n.createElement("link"),ia(a,"link",e),Pe(a),n.head.appendChild(a)))}}function xh(e,a){ct.m(e,a);var t=_n;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+Ta(n)+'"][href="'+Ta(e)+'"]',s=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Gn(e)}if(!_a.has(s)&&(e=L({rel:"modulepreload",href:e},a),_a.set(s,e),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Oo(s)))return}n=t.createElement("link"),ia(n,"link",e),Pe(n),t.head.appendChild(n)}}}function wh(e,a,t){ct.S(e,a,t);var n=_n;if(n&&e){var o=sn(n).hoistableStyles,s=Hn(e);a=a||"default";var l=o.get(s);if(!l){var r={loading:0,preload:null};if(l=n.querySelector(Lo(s)))r.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":a},t),(t=_a.get(s))&&zr(e,t);var p=l=n.createElement("link");Pe(p),ia(p,"link",e),p._p=new Promise(function(w,A){p.onload=w,p.onerror=A}),p.addEventListener("load",function(){r.loading|=1}),p.addEventListener("error",function(){r.loading|=2}),r.loading|=4,ti(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:r},o.set(s,l)}}}function jh(e,a){ct.X(e,a);var t=_n;if(t&&e){var n=sn(t).hoistableScripts,o=Gn(e),s=n.get(o);s||(s=t.querySelector(Oo(o)),s||(e=L({src:e,async:!0},a),(a=_a.get(o))&&kr(e,a),s=t.createElement("script"),Pe(s),ia(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function zh(e,a){ct.M(e,a);var t=_n;if(t&&e){var n=sn(t).hoistableScripts,o=Gn(e),s=n.get(o);s||(s=t.querySelector(Oo(o)),s||(e=L({src:e,async:!0,type:"module"},a),(a=_a.get(o))&&kr(e,a),s=t.createElement("script"),Pe(s),ia(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function Sp(e,a,t,n){var o=(o=ie.current)?ai(o):null;if(!o)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Hn(t.href),t=sn(o).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Hn(t.href);var s=sn(o).hoistableStyles,l=s.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,l),(s=o.querySelector(Lo(e)))&&!s._p&&(l.instance=s,l.state.loading=5),_a.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},_a.set(e,t),s||kh(o,e,t,l.state))),a&&n===null)throw Error(c(528,""));return l}if(a&&n!==null)throw Error(c(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Gn(t),t=sn(o).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Hn(e){return'href="'+Ta(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function Np(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function kh(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ia(a,"link",t),Pe(a),e.head.appendChild(a))}function Gn(e){return'[src="'+Ta(e)+'"]'}function Oo(e){return"script[async]"+e}function qp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ta(t.href)+'"]');if(n)return a.instance=n,Pe(n),n;var o=L({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Pe(n),ia(n,"style",o),ti(n,t.precedence,e),a.instance=n;case"stylesheet":o=Hn(t.href);var s=e.querySelector(Lo(o));if(s)return a.state.loading|=4,a.instance=s,Pe(s),s;n=Np(t),(o=_a.get(o))&&zr(n,o),s=(e.ownerDocument||e).createElement("link"),Pe(s);var l=s;return l._p=new Promise(function(r,p){l.onload=r,l.onerror=p}),ia(s,"link",n),a.state.loading|=4,ti(s,t.precedence,e),a.instance=s;case"script":return s=Gn(t.src),(o=e.querySelector(Oo(s)))?(a.instance=o,Pe(o),o):(n=t,(o=_a.get(s))&&(n=L({},t),kr(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),Pe(o),ia(o,"link",n),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,ti(n,t.precedence,e));return a.instance}function ti(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,s=o,l=0;l<n.length;l++){var r=n[l];if(r.dataset.precedence===a)s=r;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function zr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function kr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ni=null;function Ep(e,a,t){if(ni===null){var n=new Map,o=ni=new Map;o.set(t,n)}else o=ni,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var s=t[o];if(!(s[$n]||s[ta]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var l=s.getAttribute(a)||"";l=e+l;var r=n.get(l);r?r.push(s):n.set(l,[s])}}return n}function Tp(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Sh(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Ap(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nh(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Hn(n.href),s=a.querySelector(Lo(o));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=oi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=s,Pe(s);return}s=a.ownerDocument||a,n=Np(n),(o=_a.get(o))&&zr(n,o),s=s.createElement("link"),Pe(s);var l=s;l._p=new Promise(function(r,p){l.onload=r,l.onerror=p}),ia(s,"link",n),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=oi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Sr=0;function qh(e,a){return e.stylesheets&&e.count===0&&ii(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&ii(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&Sr===0&&(Sr=62500*lh());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ii(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Sr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ii(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var si=null;function ii(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,si=new Map,a.forEach(Eh,e),si=null,oi.call(e))}function Eh(e,a){if(!(a.state.loading&4)){var t=si.get(e);if(t)var n=t.get(null);else{t=new Map,si.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var l=o[s];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}o=a.instance,l=o.getAttribute("data-precedence"),s=t.get(l)||n,s===n&&t.set(null,o),t.set(l,o),this.count++,n=oi.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var _o={$$typeof:ae,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Th(e,a,t,n,o,s,l,r,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.hiddenUpdates=xi(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Cp(e,a,t,n,o,s,l,r,p,w,A,D){return e=new Th(e,a,t,l,p,w,A,D,r),a=1,s===!0&&(a|=24),s=ja(3,null,null,a),e.current=s,s.stateNode=e,a=ol(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:n,isDehydrated:t,cache:a},rl(s),e}function Mp(e){return e?(e=gn,e):gn}function Up(e,a,t,n,o,s){o=Mp(o),n.context===null?n.context=o:n.pendingContext=o,n=vt(a),n.payload={element:t},s=s===void 0?null:s,s!==null&&(n.callback=s),t=yt(e,n,a),t!==null&&(ga(t,e,a),ho(t,e,a))}function Dp(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Nr(e,a){Dp(e,a),(e=e.alternate)&&Dp(e,a)}function Lp(e){if(e.tag===13||e.tag===31){var a=Rt(e,67108864);a!==null&&ga(a,e,67108864),Nr(e,67108864)}}function Op(e){if(e.tag===13||e.tag===31){var a=qa();a=wi(a);var t=Rt(e,a);t!==null&&ga(t,e,a),Nr(e,a)}}var li=!0;function Ah(e,a,t,n){var o=N.T;N.T=null;var s=H.p;try{H.p=2,qr(e,a,t,n)}finally{H.p=s,N.T=o}}function Ch(e,a,t,n){var o=N.T;N.T=null;var s=H.p;try{H.p=8,qr(e,a,t,n)}finally{H.p=s,N.T=o}}function qr(e,a,t,n){if(li){var o=Er(n);if(o===null)mr(e,a,n,ri,t),Hp(e,n);else if(Uh(o,e,a,t,n))n.stopPropagation();else if(Hp(e,n),a&4&&-1<Mh.indexOf(e)){for(;o!==null;){var s=on(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var l=Ot(s.pendingLanes);if(l!==0){var r=s;for(r.pendingLanes|=2,r.entangledLanes|=2;l;){var p=1<<31-xa(l);r.entanglements[1]|=p,l&=~p}Xa(s),(qe&6)===0&&(Qs=va()+500,Co(0))}}break;case 31:case 13:r=Rt(s,2),r!==null&&ga(r,s,2),Zs(),Nr(s,2)}if(s=Er(n),s===null&&mr(e,a,n,ri,t),s===o)break;o=s}o!==null&&n.stopPropagation()}else mr(e,a,n,null,t)}}function Er(e){return e=Ai(e),Tr(e)}var ri=null;function Tr(e){if(ri=null,e=nn(e),e!==null){var a=k(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=E(a),e!==null)return e;e=null}else if(t===31){if(e=j(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ri=e,null}function _p(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gm()){case Xr:return 2;case Zr:return 8;case $o:case bm:return 32;case Kr:return 268435456;default:return 32}default:return 32}}var Ar=!1,At=null,Ct=null,Mt=null,Ho=new Map,Go=new Map,Ut=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hp(e,a){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Ho.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(a.pointerId)}}function Bo(e,a,t,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},a!==null&&(a=on(a),a!==null&&Lp(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Uh(e,a,t,n,o){switch(a){case"focusin":return At=Bo(At,e,a,t,n,o),!0;case"dragenter":return Ct=Bo(Ct,e,a,t,n,o),!0;case"mouseover":return Mt=Bo(Mt,e,a,t,n,o),!0;case"pointerover":var s=o.pointerId;return Ho.set(s,Bo(Ho.get(s)||null,e,a,t,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Go.set(s,Bo(Go.get(s)||null,e,a,t,n,o)),!0}return!1}function Gp(e){var a=nn(e.target);if(a!==null){var t=k(a);if(t!==null){if(a=t.tag,a===13){if(a=E(t),a!==null){e.blockedOn=a,Pr(e.priority,function(){Op(t)});return}}else if(a===31){if(a=j(t),a!==null){e.blockedOn=a,Pr(e.priority,function(){Op(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Er(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Ti=n,t.target.dispatchEvent(n),Ti=null}else return a=on(t),a!==null&&Lp(a),e.blockedOn=t,!1;a.shift()}return!0}function Bp(e,a,t){ci(e)&&t.delete(a)}function Dh(){Ar=!1,At!==null&&ci(At)&&(At=null),Ct!==null&&ci(Ct)&&(Ct=null),Mt!==null&&ci(Mt)&&(Mt=null),Ho.forEach(Bp),Go.forEach(Bp)}function ui(e,a){e.blockedOn===a&&(e.blockedOn=null,Ar||(Ar=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Dh)))}var di=null;function Rp(e){di!==e&&(di=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){di===e&&(di=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],o=e[a+2];if(typeof n!="function"){if(Tr(n||t)===null)continue;break}var s=on(t);s!==null&&(e.splice(a,3),a-=3,El(s,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function Bn(e){function a(p){return ui(p,e)}At!==null&&ui(At,e),Ct!==null&&ui(Ct,e),Mt!==null&&ui(Mt,e),Ho.forEach(a),Go.forEach(a);for(var t=0;t<Ut.length;t++){var n=Ut[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ut.length&&(t=Ut[0],t.blockedOn===null);)Gp(t),t.blockedOn===null&&Ut.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],s=t[n+1],l=o[ua]||null;if(typeof s=="function")l||Rp(t);else if(l){var r=null;if(s&&s.hasAttribute("formAction")){if(o=s,l=s[ua]||null)r=l.formAction;else if(Tr(o)!==null)continue}else r=l.action;typeof r=="function"?t[n+1]=r:(t.splice(n,3),n-=3),Rp(t)}}}function Yp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(l){return o=l})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Cr(e){this._internalRoot=e}pi.prototype.render=Cr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));var t=a.current,n=qa();Up(t,n,e,a,null,null)},pi.prototype.unmount=Cr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Up(e.current,2,null,e,null,null),Zs(),a[tn]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var a=Fr();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Ut.length&&a!==0&&a<Ut[t].priority;t++);Ut.splice(t,0,e),t===0&&Gp(e)}};var Vp=b.version;if(Vp!=="19.2.5")throw Error(c(527,Vp,"19.2.5"));H.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(a),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var Lh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{Jn=mi.inject(Lh),ya=mi}catch{}}return Yo.createRoot=function(e,a){if(!m(e))throw Error(c(299));var t=!1,n="",o=Wu,s=$u,l=Fu;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=Cp(e,1,!1,null,null,t,n,null,o,s,l,Yp),e[tn]=a.current,pr(e),new Cr(a)},Yo.hydrateRoot=function(e,a,t){if(!m(e))throw Error(c(299));var n=!1,o="",s=Wu,l=$u,r=Fu,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),a=Cp(e,1,!0,a,t??null,n,o,p,s,l,r,Yp),a.context=Mp(null),t=a.current,n=qa(),n=wi(n),o=vt(n),o.callback=null,yt(t,o,n),t=n,a.current.lanes=t,Wn(a,t),Xa(a),e[tn]=a.current,pr(e),new pi(a)},Yo.version="19.2.5",Yo}var Pp;function Zh(){if(Pp)return Dr.exports;Pp=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(b){console.error(b)}}return u(),Dr.exports=Xh(),Dr.exports}var Kh=Zh();function Jh(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const u="/Learn-Spanish/";navigator.serviceWorker.register(`${u}sw.js`,{scope:u}).catch(()=>{})})}const Ih="modulepreload",Wh=function(u){return"/Learn-Spanish/"+u},em={},$h=function(b,v,c){let m=Promise.resolve();if(v&&v.length>0){let h=function(q){return Promise.all(q.map(L=>Promise.resolve(L).then(Y=>({status:"fulfilled",value:Y}),Y=>({status:"rejected",reason:Y}))))};var E=h;document.getElementsByTagName("link");const j=document.querySelector("meta[property=csp-nonce]"),x=j?.nonce||j?.getAttribute("nonce");m=h(v.map(q=>{if(q=Wh(q),q in em)return;em[q]=!0;const L=q.endsWith(".css"),Y=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${q}"]${Y}`))return;const F=document.createElement("link");if(F.rel=L?"stylesheet":Ih,L||(F.as="script"),F.crossOrigin="",F.href=q,x&&F.setAttribute("nonce",x),document.head.appendChild(F),L)return new Promise((I,G)=>{F.addEventListener("load",I),F.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${q}`)))})}))}function k(j){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=j,window.dispatchEvent(x),!x.defaultPrevented)throw j}return m.then(j=>{for(const x of j||[])x.status==="rejected"&&k(x.reason);return b().catch(k)})};const Fh=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lm=(...u)=>u.filter((b,v,c)=>!!b&&b.trim()!==""&&c.indexOf(b)===v).join(" ").trim();var Ph={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const eg=R.forwardRef(({color:u="currentColor",size:b=24,strokeWidth:v=2,absoluteStrokeWidth:c,className:m="",children:k,iconNode:E,...j},x)=>R.createElement("svg",{ref:x,...Ph,width:b,height:b,stroke:u,strokeWidth:c?Number(v)*24/Number(b):v,className:lm("lucide",m),...j},[...E.map(([h,q])=>R.createElement(h,q)),...Array.isArray(k)?k:[k]]));const Ve=(u,b)=>{const v=R.forwardRef(({className:c,...m},k)=>R.createElement(eg,{ref:k,iconNode:b,className:lm(`lucide-${Fh(u)}`,c),...m}));return v.displayName=`${u}`,v};const Yr=Ve("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const ag=Ve("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const Vn=Ve("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const rm=Ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Qn=Ve("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const tg=Ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Io=Ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const cm=Ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Vr=Ve("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const um=Ve("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Jo=Ve("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const ng=Ve("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const Wo=Ve("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const og=Ve("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const sg=Ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const ig=Ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const dm=Ve("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const lg=Ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const gi=Ve("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Hr=Ve("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const an=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Gr=Ve("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),rg=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],cg=["A1","A2","B1","B2"],am="lesson-status-v1",ug={tiempos:cm,verbos:Gr,verbos2:Gr,gramatica:og,lectura:ng,vocabulario:ag,palabras:um,frases:ig,tips:Wo,resumen:Vr};function pm({id:u,size:b=18,className:v=""}){const c=ug[u]||Yr;return i.jsx(c,{size:b,className:v})}const Vo=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]}]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:rg},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"f1",level:"A1",title:"Saludos y Cortesía",subtitle:"The first words you need",intro:"These are the phrases that open every conversation. Learn them by ear, repeat them out loud, and use them at every chance.",blocks:[{type:"phraselist",phrases:[{es:"Hola, ¿qué tal?",en:"Hi, how are you?"},{es:"Buenos días.",en:"Good morning."},{es:"Buenas tardes.",en:"Good afternoon."},{es:"Buenas noches.",en:"Good evening / good night."},{es:"Mucho gusto.",en:"Pleased to meet you."},{es:"Encantado / encantada.",en:"Delighted (to meet you)."},{es:"¿Cómo te llamas?",en:"What is your name?"},{es:"Me llamo Othman.",en:"My name is Othman."},{es:"¿De dónde eres?",en:"Where are you from?"},{es:"Soy de Marruecos.",en:"I am from Morocco."},{es:"Por favor.",en:"Please."},{es:"Gracias. — De nada.",en:"Thank you. — You are welcome."},{es:"Perdón. / Disculpe.",en:"Sorry. / Excuse me."},{es:"Hasta luego.",en:"See you later."},{es:"Hasta mañana.",en:"See you tomorrow."}]},{type:"takeaway",text:"These twenty phrases are the entry door. Repeat each one ten times before moving on. They will be the foundation of every spoken interaction."}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function dg(u){const b=[];let v="",c="normal";for(let m=0;m<u.length;m++){const k=u[m];k==="["?(v&&b.push({text:v,mode:c}),v="",c="irreg"):k==="]"?(v&&b.push({text:v,mode:"irreg"}),v="",c="normal"):k==="{"?(v&&b.push({text:v,mode:c}),v="",c="ending"):k==="}"?(v&&b.push({text:v,mode:"ending"}),v="",c="normal"):v+=k}return v&&b.push({text:v,mode:c}),b}function Rn({raw:u}){return i.jsx(i.Fragment,{children:dg(u).map((b,v)=>{const c=b.mode==="irreg"?"irreg":b.mode==="ending"?"ending":"";return i.jsx("span",{className:c,children:b.text},v)})})}function Qo(u){return String(u||"").replace(/[\[\]{}]/g,"")}function tm(u){return String(u||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function pg({tenses:u,verbName:b}){const[v,c]=R.useState(!1),[m,k]=R.useState([]),[E,j]=R.useState(0),[x,h]=R.useState(""),[q,L]=R.useState(null),[Y,F]=R.useState(0),[I,G]=R.useState(!1);function P(){const X=[];for(const U of u)for(const ue of U.forms||[])X.push({tense:U.name,pronoun:ue.p,answer:Qo(ue.f)});const K=[...X].sort(()=>Math.random()-.5);return K.slice(0,Math.min(8,K.length))}function Q(){k(P()),j(0),h(""),L(null),F(0),G(!1),c(!0)}function oe(X){if(X&&X.preventDefault(),q)return;const K=m[E],U=tm(x)===tm(K.answer);L(U?"correct":"incorrect"),U&&F(ue=>ue+1)}function ae(){if(E+1>=m.length){G(!0);return}j(X=>X+1),h(""),L(null)}function be(){window.speechSynthesis?.cancel(),c(!1)}const $=m[E],te=m.length;return i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"quiz-trigger-btn",onClick:Q,children:[i.jsx(gi,{size:14}),"Practicar"]}),v&&i.jsx("div",{className:"quiz-overlay",onClick:be,children:i.jsxs("div",{className:"quiz-modal",onClick:X=>X.stopPropagation(),children:[i.jsxs("header",{className:"quiz-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),i.jsx("h2",{className:"quiz-title",children:b})]}),i.jsx("button",{className:"quiz-close",onClick:be,"aria-label":"Close",children:i.jsx(an,{size:18})})]}),I?i.jsxs("div",{className:"quiz-results",children:[i.jsxs("div",{className:"quiz-results-circle",children:[i.jsxs("div",{className:"quiz-results-pct",children:[Math.round(Y/te*100),"%"]}),i.jsxs("div",{className:"quiz-results-fraction",children:[Y," / ",te]})]}),i.jsx("h3",{className:"quiz-results-title",children:Y===te?"¡Perfecto!":Y>=te*.75?"Muy bien":Y>=te*.5?"Sigue practicando":"Vamos a repasar"}),i.jsx("p",{className:"quiz-results-msg",children:Y===te?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":Y>=te*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),i.jsxs("div",{className:"quiz-results-actions",children:[i.jsxs("button",{className:"quiz-retry-btn",onClick:Q,children:[i.jsx(lg,{size:14}),"Otra vez"]}),i.jsx("button",{className:"quiz-done-btn",onClick:be,children:"Cerrar"})]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"quiz-progress",children:[i.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",E+1," de ",te]}),i.jsx("div",{className:"quiz-progress-bar",children:i.jsx("div",{className:"quiz-progress-fill",style:{width:`${E/te*100}%`}})})]}),i.jsxs("div",{className:"quiz-question",children:[i.jsx("div",{className:"quiz-tense-label",children:$.tense}),i.jsxs("div",{className:"quiz-prompt",children:[i.jsx("span",{className:"quiz-pronoun",children:$.pronoun}),i.jsx("span",{className:"quiz-blank",children:"________"})]}),i.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",i.jsx("em",{children:b.toLowerCase()})," para esta persona."]})]}),i.jsxs("form",{onSubmit:oe,className:"quiz-form",children:[i.jsx("input",{type:"text",className:`quiz-input ${q||""}`,value:x,onChange:X=>h(X.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!q}),!q&&i.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!x.trim(),children:"Comprobar"})]}),q&&i.jsxs("div",{className:`quiz-feedback ${q}`,children:[q==="correct"?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"quiz-feedback-icon",children:i.jsx(rm,{size:18})}),i.jsxs("div",{children:[i.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),i.jsx("div",{className:"quiz-feedback-answer",children:$.answer})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"quiz-feedback-icon",children:i.jsx(an,{size:18})}),i.jsxs("div",{children:[i.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),i.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",i.jsx("strong",{children:$.answer})]})]})]}),i.jsx(aa,{text:$.answer,size:"md",className:"quiz-feedback-speak"})]}),q&&i.jsxs("button",{className:"quiz-next-btn",onClick:ae,children:[E+1>=te?"Ver resultados":"Siguiente",i.jsx(Io,{size:16})]}),i.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",i.jsx("strong",{children:Y})," / ",E+(q?1:0)]})]})]})})]})}let Xo=null,nm=!1;function mg(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function Yn(){if(typeof window>"u"||!window.speechSynthesis)return null;if(Xo)return Xo;const u=mg();if(u.length===0)return null;const b=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const c of b){const m=u.find(k=>k.lang&&k.lang.toLowerCase().startsWith(c.toLowerCase()));if(m)return Xo=m,m}const v=u.find(c=>/spanish|español/i.test(c.name||""));return v?(Xo=v,v):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{Xo=null,Yn()}),Yn(),setTimeout(Yn,250),setTimeout(Yn,1e3));function Qr(){if(!nm&&!(typeof window>"u"||!window.speechSynthesis))try{const u=new SpeechSynthesisUtterance(" ");u.volume=0,u.rate=1,window.speechSynthesis.speak(u),nm=!0}catch{}}function mm(u,b={}){if(typeof window>"u"||!window.speechSynthesis||!u)return b.onerror&&b.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const v=new SpeechSynthesisUtterance(u),c=Yn();c&&(v.voice=c),v.lang=c?.lang||"es-ES",v.rate=b.rate??.78,v.pitch=b.pitch??1,v.volume=1,b.onend&&(v.onend=b.onend),b.onerror&&(v.onerror=E=>{console.warn("[speech] error:",E?.error||"unknown",{text:u.slice(0,30),voice:c?.name}),b.onerror(E)}),b.onboundary&&(v.onboundary=b.onboundary),b.onstart&&(v.onstart=b.onstart),window.speechSynthesis.speak(v);const m=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(m);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),k=v.onend;return v.onend=E=>{clearInterval(m),k&&k(E)},v}catch(v){return console.warn("[speech] threw:",v),b.onerror&&b.onerror({error:v.message}),null}}function vi({text:u,paragraphClass:b="reading-paragraph",firstParagraph:v=!1}){const c=R.useMemo(()=>{const G=[];let P=0;const Q=/([0-9a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)|([^0-9a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)/g;let oe;for(;(oe=Q.exec(u))!==null;){const ae=!!oe[1];G.push({text:oe[0],isWord:ae,charStart:P}),P+=oe[0].length}return G},[u]),m=R.useMemo(()=>{const G=[];let P="",Q=[],oe=-1;function ae(){Q.length>0&&G.push({spokenText:P.trim(),words:Q}),P="",Q=[],oe=-1}for(let be=0;be<c.length;be++){const $=c[be];if(!$.isWord&&Q.length===0&&/^\s+$/.test($.text))continue;const te=P.length;P+=$.text,$.isWord?(Q.push({tokenIdx:be,text:$.text,charStart:te,charEnd:te+$.text.length,commaAfter:!1}),oe=Q.length-1):(/,/.test($.text)&&oe>=0&&(Q[oe].commaAfter=!0),/[.!?;:]/.test($.text)&&ae())}return ae(),G},[c]),[k,E]=R.useState(-1),[j,x]=R.useState(!1),h=en.useRef([]),q=en.useRef([]),L=en.useRef(!1),Y=en.useRef(110);function F(){q.current.forEach(clearTimeout),q.current=[]}function I(G){if(G.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(Qr(),j){L.current=!0,window.speechSynthesis?.cancel(),F(),x(!1),E(-1);return}if(m.length===0)return;window.speechSynthesis?.cancel(),F(),L.current=!1,x(!0),Y.current=110;let P=0;function Q(){if(L.current)return;if(P>=m.length){x(!1),E(-1);return}const oe=m[P];if(!oe||oe.words.length===0){P++,Q();return}const ae=new SpeechSynthesisUtterance(oe.spokenText),be=Yn();be&&(ae.voice=be),ae.lang=be?.lang||"es-ES",ae.rate=.85,ae.pitch=1;let $=!1,te=!1,X=!1,K=!1,U=0;const ue=30,ze=200;function fe(Z){const re=Math.max(0,Number(Z)||0);let de=oe.words[0];for(const d of oe.words)if(d.charStart<=re+1)de=d;else break;return de}function Ee(){if(K||X||L.current)return;K=!0;let Z=0;for(let re=0;re<oe.words.length;re++){const de=oe.words[re],C=setTimeout(()=>{!L.current&&!X&&E(de.tokenIdx)},Z);q.current.push(C),Z+=de.text.length*Y.current+ue,de.commaAfter&&(Z+=ze)}}ae.onstart=()=>{if($)return;$=!0,U=performance.now();const Z=setTimeout(Ee,350);q.current.push(Z)},ae.onboundary=Z=>{if(L.current||typeof Z.charIndex!="number")return;const re=fe(Z.charIndex);re&&(X=!0,E(re.tokenIdx))};const We=setTimeout(()=>{!$&&!L.current&&($=!0,U=performance.now(),Ee())},500);q.current.push(We);function Be(){if(te||(te=!0,L.current))return;if(U>0){const re=performance.now()-U,de=oe.words.reduce((B,se)=>B+se.text.length,0),d=oe.words.filter(B=>B.commaAfter).length,C=oe.words.length*ue+d*ze,_=Math.max(100,re-C);if(de>0){const B=_/de;B>=40&&B<=300&&(Y.current=B*.6+Y.current*.4)}}F(),P++;const Z=setTimeout(Q,30);q.current.push(Z)}ae.onend=Be,ae.onerror=Be;const N=Math.max(5e3,oe.spokenText.length*220),H=setTimeout(Be,N);q.current.push(H),window.speechSynthesis.speak(ae)}Q()}return R.useEffect(()=>()=>{L.current=!0,F(),j&&window.speechSynthesis?.cancel()},[]),R.useEffect(()=>{if(k<0)return;const G=h.current[k];if(!G||typeof G.getBoundingClientRect!="function")return;const P=G.getBoundingClientRect(),Q=window.innerHeight||document.documentElement.clientHeight;(P.bottom>Q-100||P.top<80)&&G.scrollIntoView({behavior:"smooth",block:"center"})},[k]),typeof window<"u"&&!window.speechSynthesis?i.jsxs("p",{className:b,children:[i.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:G=>{G.stopPropagation(),alert("Tu navegador no soporta lectura en voz alta.")},"aria-label":"Audio not supported",title:"Audio no disponible",children:i.jsx(Hr,{size:12})}),u]}):i.jsxs("p",{className:`${b} karaoke-paragraph ${j?"is-playing":""}`,children:[i.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${j?"playing":""}`,onClick:I,onPointerDown:G=>G.stopPropagation(),"aria-label":j?"Stop":"Play audio with highlighting",title:j?"Detener":"Escuchar con resaltado",children:i.jsx(Hr,{size:12})}),c.map((G,P)=>{if(!G.isWord)return i.jsx("span",{className:"kt-space",children:G.text},P);const Q=P===k;return i.jsx("span",{ref:oe=>h.current[P]=oe,className:`kt-word ${Q?"kt-active":""}`,children:G.text},P)})]})}function aa({text:u,size:b="sm",className:v=""}){const[c,m]=R.useState(!1);function k(E){if(E.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(Qr(),c){window.speechSynthesis?.cancel(),m(!1);return}m(!0),mm(u,{onend:()=>m(!1),onerror:j=>{m(!1),j?.error&&j.error!=="canceled"&&j.error!=="interrupted"&&alert("Error al leer: "+j.error+". Asegúrate de tener una voz en español instalada.")}})}return i.jsx("button",{className:`speak-btn speak-btn-${b} ${c?"playing":""} ${v}`,onClick:k,onPointerDown:E=>E.stopPropagation(),"aria-label":c?"Stop":"Play audio",title:c?"Detener":"Escuchar",children:i.jsx(Hr,{size:b==="sm"?12:14})})}function fi({es:u,en:b,esClass:v="vu-ex-es",enClass:c="vu-ex-en"}){const m=(u||"").length,k=(b||"").length;return m<=18&&k<=18&&m+k<=36?i.jsxs("div",{className:`${v} inline-pair`,children:[i.jsx(aa,{text:u}),u," ",i.jsxs("span",{className:`${c} inline-en`,children:["(",b,")"]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:v,children:[i.jsx(aa,{text:u}),u]}),i.jsx("div",{className:c,children:b})]})}function fg({s:u}){return i.jsxs("div",{className:"gl-section",children:[u.heading&&i.jsx("h3",{className:"gl-heading",children:u.heading}),u.text&&i.jsx("p",{className:"gl-text",children:u.text}),u.table&&i.jsx("div",{className:"lesson-table-wrap",children:i.jsxs("table",{className:"lesson-table gl-table",children:[u.table.headers&&i.jsx("thead",{children:i.jsx("tr",{children:u.table.headers.map((b,v)=>i.jsx("th",{children:b},v))})}),i.jsx("tbody",{children:u.table.rows.map((b,v)=>i.jsx("tr",{children:b.map((c,m)=>i.jsx("td",{children:m===0?c:i.jsx(Rn,{raw:String(c)})},m))},v))})]})}),u.examples&&i.jsx("ul",{className:"gl-examples",children:u.examples.map((b,v)=>i.jsx("li",{children:i.jsx(fi,{es:b.es,en:b.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},v))}),u.tip&&i.jsxs("aside",{className:"gl-tip",children:[i.jsx(Wo,{size:16,className:"gl-tip-icon"}),i.jsx("p",{children:u.tip})]}),u.takeaway&&i.jsxs("aside",{className:"gl-takeaway",children:[i.jsxs("div",{className:"gl-takeaway-label",children:[i.jsx(dm,{size:12})," Lo que te llevas"]}),i.jsx("p",{children:u.takeaway})]})]})}const hg={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function om({level:u}){const b=hg[u]||{};return i.jsx("span",{className:"bio-level-badge",style:{background:b.bg,color:b.color,borderColor:b.border},children:u})}function gg({poems:u}){const[b,v]=R.useState(null);function c(m){v(k=>k===m?null:m)}return i.jsx("section",{className:"block foldable-poems",children:u.map((m,k)=>{const E=b===k;return i.jsxs("div",{className:`poem-item ${E?"open":"closed"}`,children:[i.jsxs("button",{className:"poem-toggle",onClick:()=>c(k),"aria-expanded":E,children:[i.jsxs("div",{className:"poem-toggle-inner",children:[i.jsx("span",{className:"poem-num",children:String(k+1).padStart(2,"0")}),i.jsxs("div",{className:"poem-toggle-text",children:[i.jsx("span",{className:"poem-title-line",children:m.title}),i.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),i.jsxs("div",{className:"poem-toggle-right",children:[i.jsx("span",{className:"poem-level-tag",children:m.level}),i.jsx(Qn,{size:18,className:`poem-chevron ${E?"open":""}`})]})]}),E&&i.jsxs("div",{className:"poem-body",children:[m.note&&i.jsx("p",{className:"poem-intro-note",children:m.note}),m.opening&&i.jsxs("blockquote",{className:"poem-opening-quote",children:[i.jsx(aa,{text:m.opening,size:"md",className:"poem-quote-speak"}),m.opening]}),i.jsxs("div",{className:"poem-tools",children:[i.jsx(aa,{text:m.stanzas.map(j=>j.es).join(". "),size:"md"}),i.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),i.jsx("div",{className:"poem-stanzas",children:m.stanzas.map((j,x)=>i.jsxs("div",{className:"poem-stanza",children:[i.jsx("div",{className:"poem-stanza-num",children:x+1}),i.jsx(vi,{text:j.es,paragraphClass:"poem-stanza-es"}),i.jsx("div",{className:"poem-stanza-en",children:j.en})]},x))}),m.vocab&&m.vocab.length>0&&i.jsxs("div",{className:"poem-vocab-block",children:[i.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),i.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((j,x)=>i.jsxs("div",{className:"poem-vocab-row",children:[i.jsx("span",{className:"poem-vocab-es",children:j.es}),i.jsx("span",{className:"poem-vocab-dash",children:"—"}),i.jsx("span",{className:"poem-vocab-en",children:j.en})]},x))})]}),m.learningNote&&i.jsxs("aside",{className:"poem-learning-note",children:[i.jsxs("div",{className:"poem-learning-label",children:[i.jsx(Wo,{size:14})," Nota de lectura"]}),i.jsx("p",{children:m.learningNote})]})]})]},k)})})}function bg({songs:u}){const[b,v]=R.useState(null);function c(m){v(k=>k===m?null:m)}return i.jsx("section",{className:"block foldable-poems foldable-songs",children:u.map((m,k)=>{const E=b===k,j=m.sections.map(x=>x.es).join(". ");return i.jsxs("div",{className:`poem-item song-item ${E?"open":"closed"}`,children:[i.jsxs("button",{className:"poem-toggle",onClick:()=>c(k),"aria-expanded":E,children:[i.jsxs("div",{className:"poem-toggle-inner",children:[i.jsx("span",{className:"poem-num",children:String(k+1).padStart(2,"0")}),i.jsxs("div",{className:"poem-toggle-text",children:[i.jsx("span",{className:"poem-title-line",children:m.title}),i.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),i.jsxs("div",{className:"poem-toggle-right",children:[i.jsx("span",{className:"poem-level-tag",children:m.level}),i.jsx(Qn,{size:18,className:`poem-chevron ${E?"open":""}`})]})]}),E&&i.jsxs("div",{className:"poem-body song-body",children:[i.jsx("p",{className:"poem-intro-note",children:m.note}),i.jsxs("div",{className:"poem-tools",children:[i.jsx(aa,{text:j,size:"md"}),i.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),i.jsx("div",{className:"song-sections",children:m.sections.map((x,h)=>i.jsxs("div",{className:"song-section",children:[i.jsxs("div",{className:"song-section-label",children:[String(h+1).padStart(2,"0")," · ",x.label]}),i.jsxs("div",{className:"song-section-grid",children:[i.jsx(vi,{text:x.es,paragraphClass:"song-lyric-es"}),i.jsx("p",{className:"song-lyric-en",children:x.en})]})]},x.label))}),m.vocab&&m.vocab.length>0&&i.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[i.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),i.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((x,h)=>i.jsxs("div",{className:"poem-vocab-row",children:[i.jsx("span",{className:"poem-vocab-es",children:x.es}),i.jsx("span",{className:"poem-vocab-dash",children:"—"}),i.jsx("span",{className:"poem-vocab-en",children:x.en})]},h))})]}),m.learningNote&&i.jsxs("aside",{className:"poem-learning-note",children:[i.jsxs("div",{className:"poem-learning-label",children:[i.jsx(Wo,{size:14})," Nota de canción"]}),i.jsx("p",{children:m.learningNote})]})]})]},m.title)})})}function vg({bios:u}){const[b,v]=R.useState(null);function c(m){v(k=>k===m?null:m)}return i.jsx("section",{className:"block foldable-bios",children:u.map((m,k)=>{const E=b===k;return i.jsxs("div",{className:`bio-item ${E?"open":"closed"}`,children:[i.jsxs("button",{className:"bio-toggle",onClick:()=>c(k),"aria-expanded":E,children:[i.jsxs("div",{className:"bio-toggle-left",children:[i.jsx("span",{className:"bio-num",children:String(k+1).padStart(2,"0")}),i.jsxs("div",{className:"bio-toggle-text",children:[i.jsx("span",{className:"bio-name",children:m.title}),i.jsx("span",{className:"bio-subtitle-line",children:m.subtitle}),i.jsx("span",{className:"bio-dates",children:m.dates})]})]}),i.jsxs("div",{className:"bio-toggle-right",children:[i.jsx("div",{className:"bio-level-pills",children:[...new Set(m.levels.map(j=>j.level))].map(j=>i.jsx(om,{level:j},j))}),i.jsx(Qn,{size:18,className:`bio-chevron ${E?"open":""}`})]})]}),E&&i.jsx("div",{className:"bio-body",children:m.levels.map((j,x)=>i.jsxs("div",{className:"bio-section",children:[i.jsxs("div",{className:"bio-section-header",children:[i.jsx(om,{level:j.level}),i.jsx("h3",{className:"bio-section-title",children:j.heading}),i.jsx(aa,{text:j.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),j.paragraphs.map((h,q)=>i.jsx(vi,{text:h,paragraphClass:"bio-paragraph"},q)),j.vocab&&i.jsxs("div",{className:"bio-vocab",children:[i.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),j.vocab]})]},x))})]},k)})})}function yg({lessons:u}){const[b,v]=R.useState(null);function c(m){v(k=>k===m?null:m)}return i.jsx("section",{className:"block foldable-grammar",children:u.map((m,k)=>{const E=b===k;return i.jsxs("div",{className:`gl-item ${E?"open":"closed"}`,children:[i.jsxs("button",{className:"gl-toggle",onClick:()=>c(k),"aria-expanded":E,"touch-action":"manipulation",children:[i.jsx("span",{className:"gl-num",children:String(k+1).padStart(2,"0")}),i.jsx("span",{className:"gl-level-badge",children:m.level}),i.jsxs("div",{className:"gl-toggle-text",children:[i.jsx("span",{className:"gl-title",children:m.title}),i.jsx("span",{className:"gl-subtitle",children:m.subtitle})]}),i.jsx(Qn,{size:18,className:`gl-chevron ${E?"open":""}`})]}),E&&i.jsxs("div",{className:"gl-body",children:[m.intro&&i.jsx("p",{className:"gl-intro",children:m.intro}),m.sections.map((j,x)=>i.jsx(fg,{s:j},x))]})]},k)})})}function xg({stories:u}){const[b,v]=R.useState(null);function c(m){v(k=>k===m?null:m)}return i.jsx("section",{className:"block foldable-stories",children:u.map((m,k)=>{const E=b===k;return i.jsxs("div",{className:`fold-item ${E?"open":"closed"}`,children:[i.jsxs("button",{className:"fold-toggle",onClick:()=>c(k),"aria-expanded":E,children:[i.jsx("span",{className:"fold-num",children:String(k+1).padStart(2,"0")}),i.jsx("span",{className:"fold-level",children:m.level}),i.jsx("span",{className:"fold-title",children:m.title}),i.jsx(Qn,{size:18,className:`fold-chevron ${E?"open":""}`})]}),E&&i.jsxs("div",{className:"fold-body",children:[i.jsxs("div",{className:"story-tools",children:[i.jsx(aa,{text:m.paragraphs.join(" "),size:"md",className:"story-speak-all"}),i.jsx("span",{className:"story-speak-label",children:"Escuchar el cuento"})]}),m.paragraphs.map((j,x)=>i.jsx(vi,{text:j,paragraphClass:"reading-paragraph"},x))]})]},k)})})}const sm="palabras-progress-v1",wg=1440*60*1e3;function fm(u,b){return`${u}::${b.rank}::${b.spanish}`}function Br(u,b){return b.sourceGroupId||u.id}function hi(u,b){return fm(Br(u,b),b)}function bi(u){return String(u).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const jg=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function zg(u){const b=new Map;for(const v of u||[])for(const c of v.entries||[]){const m=bi(c.spanish);b.has(m)||b.set(m,{...c,sourceGroupId:v.id,sourceGroupTitle:v.title})}return jg.map(v=>{const c=new Set,m=v.terms.map((k,E)=>{const j=bi(k.spanish);if(c.has(j))return null;c.add(j);const x=b.get(j),h=k.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...x||{rank:`T${E+1}`,spanish:h,english:k.english,sourceGroupId:v.id,sourceGroupTitle:v.title},topicTerm:k.spanish,topicEnglish:k.english,topicOrder:E+1}}).filter(Boolean);return{id:v.id,title:v.title,description:v.description,entries:m,isTopic:!0}})}function Lt(u){return u.topicTerm||u.spanish}function Zo(u){return u.topicEnglish||u.english}function kg(u,b,v=Date.now()){const c=u?.intervalDays||0,m=u?.ease||2.35,k=u?.reps||0,E={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:k?2:1,multiplier:m},easy:{label:"Easy",easeDelta:.12,minDays:k?4:3,multiplier:m+.7}}[b]||{label:"Good",easeDelta:0,minDays:1,multiplier:m},j=Math.max(1.35,Math.min(3.2,m+E.easeDelta)),x=b==="again"?E.minDays:Math.max(E.minDays,(c||1)*E.multiplier);return{...u,ease:j,intervalDays:x,dueAt:v+x*wg,reps:b==="again"?0:k+1,lapses:b==="again"?(u?.lapses||0)+1:u?.lapses||0,seen:!0,mastered:b==="easy"||x>=7,lastRating:E.label,reviewedAt:v}}function Sg(u,b,v=Date.now()){const c={total:0,seen:0,due:0,mastered:0,byGroup:{}},m=new Set;for(const k of u||[]){const E={total:k.entries.length,seen:0,due:0,mastered:0};for(const j of k.entries){const x=hi(k,j),h=b[x],q=m.has(x);q||(m.add(x),c.total++),h?.seen&&(E.seen++,q||c.seen++,h.mastered&&(E.mastered++,q||c.mastered++),(h.dueAt||0)<=v&&(E.due++,q||c.due++))}c.byGroup[k.id]=E}return c}function im(u,b){const v=u.spanish.split(",")[0].trim();return b==="topic-work-professions"?{es:`En mi trabajo uso "${v}" con frecuencia.`,en:`At work I use "${v}" often.`}:b==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${v}" con calma.`,en:`Today I can name "${v}" calmly.`}:b==="function-words"?{es:`Uso "${v}" para unir una idea con otra.`,en:`"${v}" helps connect one idea to another.`}:/^to /.test(u.english)?{es:`Hoy necesito ${v} en una frase clara.`,en:`Today I need "${v}" in a clear sentence.`}:{es:`Escribo "${v}" en mi cuaderno de espanol.`,en:`"${v}" means ${Zo(u)}.`}}function Ng({onSaveWord:u,progress:b={},onProgressChange:v}){const[c,m]=R.useState(null),[k,E]=R.useState(""),[j,x]=R.useState(""),[h,q]=R.useState(0),[L,Y]=R.useState({}),[F,I]=R.useState(!1),[G,P]=R.useState(!1),[Q,oe]=R.useState(!1),[ae,be]=R.useState(0),[$,te]=R.useState(!1);R.useEffect(()=>{let O=!0;return $h(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(ge=>{if(!O)return;const ce=ge.default||[],Oe=[...ce,...zg(ce)];m(Oe),E(Fe=>Fe||Oe[0]?.id||"")}),()=>{O=!1}},[]);const X=!c,K=c?.find(O=>O.id===k)||c?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},U=R.useMemo(()=>{const O=bi(j),ge=O?K.entries.filter(Oe=>[Oe.spanish,Oe.english,Oe.topicTerm,Oe.topicEnglish,String(Oe.rank)].some(Fe=>bi(Fe||"").includes(O))):K.entries;if(!G)return ge;const ce=Date.now();return ge.filter(Oe=>{const Fe=b[hi(K,Oe)];return Fe?.seen&&(Fe.dueAt||0)<=ce})},[K,j,G,b]),ue=24,ze=Math.min(h,Math.max(0,U.length-1)),fe=U.slice(ze,ze+ue),Ee=fe.map(O=>Lt(O)).join(". "),Be=R.useMemo(()=>Sg(c||[],b),[c,b]).byGroup[K.id]||{total:K.entries.length,seen:0,due:0,mastered:0},N=74,H=420,Z=Math.max(0,Math.floor(ae/N)-4),re=Math.min(U.length,Z+Math.ceil(H/N)+10),de=U.slice(Z,re);if(R.useEffect(()=>{q(0),Y({}),be(0)},[k,j,G]),X)return i.jsx("section",{className:"block palabras-lab",children:i.jsxs("div",{className:"palabras-empty",children:[i.jsx(gi,{size:24}),i.jsx("p",{children:"Cargando palabras..."})]})});function d(){q(O=>O+ue>=U.length?0:O+ue),Y({})}function C(){const O=Math.max(0,U.length-ue);q(Math.floor(Math.random()*(O+1))),Y({})}function _(O){const ge=`${K.id}-${O.rank}-${O.spanish}`;Y(ce=>({...ce,[ge]:!ce[ge]}))}function B(O,ge){const ce=Br(K,O),Oe=fm(ce,O),Fe={...b,[Oe]:{...kg(b[Oe],ge),groupId:ce,displayGroupId:K.id,topicId:K.isTopic?K.id:void 0,spanish:Lt(O),english:Zo(O),rank:O.rank}};v?.(Fe),Y(ca=>({...ca,[`${K.id}-${O.rank}-${O.spanish}`]:!0}))}function se(){if(!fe.length)return;if(Qr(),$){window.speechSynthesis?.cancel(),te(!1);return}const O=fe.flatMap(ge=>{const ce=im(ge,K.id);return[Lt(ge),ce.es,Lt(ge)]});te(!0),mm(O.join(". "),{onend:()=>te(!1),onerror:()=>te(!1)})}function ie(O){const ge=Br(K,O),ce=K.isTopic&&O.sourceGroupTitle?`Source ${O.sourceGroupTitle}`:null;u?.({word:Lt(O),translation:Zo(O),pos:K.isTopic?`${K.title} topic`:K.title,extras:[`Rank ${O.rank}`,K.description,ce].filter(Boolean),tags:["palabras",K.id,ge].filter(Boolean),savedAt:Date.now()})}return i.jsxs("section",{className:"block palabras-lab",children:[i.jsxs("div",{className:"palabras-toolbar",children:[i.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:c.map(O=>i.jsxs("button",{className:`palabras-tab ${O.id===K.id?"active":""}`,onClick:()=>E(O.id),role:"tab","aria-selected":O.id===K.id,children:[i.jsx("span",{children:O.title.replace(/^Group /,"G")}),i.jsx("strong",{children:O.entries.length})]},O.id))}),i.jsxs("label",{className:"palabras-search",children:[i.jsx("span",{children:"Buscar"}),i.jsx("input",{value:j,onChange:O=>x(O.target.value),placeholder:"palabra, meaning, rank..."})]})]}),i.jsxs("div",{className:"palabras-stage",children:[i.jsxs("div",{className:"palabras-stage-copy",children:[i.jsx("div",{className:"palabras-stage-kicker",children:K.isTopic?"Tema integrado":"Grupo intacto"}),i.jsx("h2",{children:K.title}),i.jsx("p",{children:K.description})]}),i.jsxs("div",{className:"palabras-stage-stats",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Mostrando"}),i.jsx("strong",{children:fe.length})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Filtradas"}),i.jsx("strong",{children:U.length})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Entrada"}),i.jsx("strong",{children:U.length?ze+1:0})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Vencidas"}),i.jsx("strong",{children:Be.due})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Vistas"}),i.jsx("strong",{children:Be.seen})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Dominadas"}),i.jsx("strong",{children:Be.mastered})]})]})]}),i.jsxs("div",{className:"palabras-actions",children:[i.jsx(aa,{text:Ee,size:"md",className:"palabras-read-btn"}),i.jsx("button",{className:`palabras-action-btn ${$?"active":""}`,onClick:se,children:$?"Escuchando...":"Escucha activa"}),i.jsx("button",{className:`palabras-action-btn ${G?"active":""}`,onClick:()=>P(O=>!O),children:G?"Todas":"Vencidas"}),i.jsx("button",{className:"palabras-action-btn",onClick:()=>I(O=>!O),children:F?"Ocultar ingles":"Mostrar ingles"}),i.jsx("button",{className:"palabras-action-btn",onClick:d,children:"Siguiente ronda"}),i.jsx("button",{className:"palabras-action-btn",onClick:C,children:"Barajar"}),i.jsx("button",{className:`palabras-action-btn ${Q?"active":""}`,onClick:()=>oe(O=>!O),children:"Lista completa"})]}),fe.length?i.jsx("div",{className:"palabras-grid",children:fe.map(O=>{const ge=`${K.id}-${O.rank}-${O.spanish}`,ce=F||L[ge],Oe=b[hi(K,O)],Fe=im(O,K.id);return i.jsxs("article",{className:`palabra-card ${ce?"revealed":""}`,children:[i.jsxs("button",{className:"palabra-main",onClick:()=>_(O),children:[i.jsxs("span",{className:"palabra-rank",children:["#",O.rank]}),i.jsx("span",{className:"palabra-es",children:Lt(O)}),i.jsx("span",{className:"palabra-en",children:ce?Zo(O):"..."}),ce&&i.jsxs("span",{className:"palabra-example",children:[i.jsx("span",{children:Fe.es}),i.jsx("em",{children:Fe.en})]})]}),i.jsxs("div",{className:"palabra-card-actions",children:[i.jsx(aa,{text:Lt(O)}),i.jsxs("button",{className:"palabra-save",onClick:()=>ie(O),children:[i.jsx(Vn,{size:13}),"Memoria"]})]}),i.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(ca=>i.jsx("button",{onClick:()=>B(O,ca),children:ca==="again"?"Again":ca==="hard"?"Hard":ca==="good"?"Good":"Easy"},ca))}),Oe?.seen&&i.jsx("div",{className:"palabra-review-state",children:Oe.mastered?"Dominada":`Due ${new Date(Oe.dueAt||Date.now()).toLocaleDateString()}`})]},ge)})}):i.jsxs("div",{className:"palabras-empty",children:[i.jsx(gi,{size:24}),i.jsx("p",{children:"No words match this search in the selected group."})]}),Q&&i.jsxs("div",{className:"palabras-browser",children:[i.jsxs("div",{className:"palabras-browser-head",children:[i.jsx("span",{children:"Lista virtual"}),i.jsxs("strong",{children:[U.length," palabras"]})]}),i.jsx("div",{className:"palabras-virtual-list",style:{height:H},onScroll:O=>be(O.currentTarget.scrollTop),children:i.jsx("div",{style:{height:U.length*N,position:"relative"},children:i.jsx("div",{style:{transform:`translateY(${Z*N}px)`},children:de.map(O=>{const ge=b[hi(K,O)];return i.jsxs("div",{className:"palabras-virtual-row",style:{height:N},children:[i.jsxs("span",{className:"palabra-rank",children:["#",O.rank]}),i.jsx("strong",{children:Lt(O)}),i.jsx("span",{children:Zo(O)}),i.jsx("button",{onClick:()=>B(O,"good"),children:ge?.seen?"Actualizar":"Visto"})]},`${O.rank}-${O.spanish}`)})})})})]})]})}function qg({status:u,onChange:b}){const v=u==="read"||u==="understood",c=u==="understood";function m(){b?.(u==="read"?null:"read")}function k(){b?.(u==="understood"?"read":"understood")}return i.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[i.jsx("span",{className:"lesson-status-label",children:"Estado"}),i.jsxs("button",{className:`lesson-status-btn ${v?"active":""}`,onClick:m,children:[i.jsx(Yr,{size:14}),"Leído"]}),i.jsxs("button",{className:`lesson-status-btn understood ${c?"active":""}`,onClick:k,children:[i.jsx(rm,{size:14}),"Entendido"]})]})}function Eg({chapter:u,sectionId:b,onSaveWord:v,palabrasProgress:c,onPalabrasProgressChange:m,lessonStatus:k,onLessonStatusChange:E}){return i.jsxs("article",{className:"chapter-body",children:[i.jsxs("header",{className:"chapter-header",children:[i.jsxs("div",{className:"chapter-icon-row",children:[b&&i.jsx("div",{className:"chapter-icon-wrap",children:i.jsx(pm,{id:b,size:22})}),i.jsxs("div",{className:"chapter-level-tag",children:[u.rank?`Nº ${String(u.rank).padStart(2,"0")} · `:"","Nivel ",u.level]})]}),i.jsx("h1",{className:"chapter-title",children:u.title}),u.subtitle&&i.jsx("p",{className:"chapter-subtitle",children:u.subtitle}),i.jsx(qg,{status:k,onChange:E}),i.jsx("div",{className:"chapter-rule"})]}),u.intro&&i.jsx("p",{className:"chapter-intro drop-cap",children:u.intro}),u.blocks.map((j,x)=>{switch(j.type){case"conjugation":return i.jsxs("section",{className:"block",children:[i.jsx("h2",{className:"block-heading",children:j.title}),i.jsx("div",{className:"conjugation-grid",children:j.verbs.map((h,q)=>i.jsxs("div",{className:"conjugation-card",children:[i.jsx("div",{className:"conjugation-verb",children:h.name}),i.jsx("ul",{className:"conjugation-list",children:h.forms.map((L,Y)=>i.jsx("li",{children:L},Y))})]},q))})]},x);case"examples":return i.jsxs("section",{className:"block",children:[i.jsx("h2",{className:"block-heading",children:j.title}),i.jsx("ul",{className:"examples-list",children:j.pairs.map((h,q)=>i.jsx("li",{className:"example-item",children:i.jsx(fi,{es:h.es,en:h.en,esClass:"example-es",enClass:"example-en"})},q))})]},x);case"rule":return i.jsx("section",{className:"block",children:i.jsx("dl",{className:"rule-list",children:j.items.map((h,q)=>i.jsxs("div",{className:"rule-row",children:[i.jsx("dt",{children:h.label}),i.jsx("dd",{children:h.value})]},q))})},x);case"reading":return i.jsx("section",{className:"block reading-block",children:j.paragraphs.map((h,q)=>i.jsxs("p",{className:"reading-paragraph",children:[i.jsx(aa,{text:h,className:"paragraph-speak"}),h]},q))},x);case"foldable-poems":return i.jsx(gg,{poems:j.poems},x);case"foldable-songs":return i.jsx(bg,{songs:j.songs},x);case"foldable-bios":return i.jsx(vg,{bios:j.bios},x);case"foldable-grammar":return i.jsx(yg,{lessons:j.lessons},x);case"foldable-stories":return i.jsx(xg,{stories:j.stories},x);case"glossary":return i.jsxs("section",{className:"block",children:[i.jsxs("h2",{className:"block-heading",children:[i.jsx(Jo,{size:16,className:"inline-icon"})," Glosario"]}),i.jsx("div",{className:"glossary-grid",children:j.words.map((h,q)=>i.jsxs("div",{className:"glossary-row",children:[i.jsx("span",{className:"glossary-es",children:h.es}),i.jsx("span",{className:"glossary-dash",children:"—"}),i.jsx("span",{className:"glossary-en",children:h.en})]},q))})]},x);case"vocab":return i.jsx("section",{className:"block",children:i.jsx("div",{className:"vocab-grid",children:j.columns.map((h,q)=>i.jsxs("div",{className:"vocab-row",children:[i.jsx(aa,{text:h.es}),i.jsx("span",{className:"vocab-es",children:h.es}),i.jsx("span",{className:"vocab-en",children:h.en})]},q))})},x);case"vocab-lab":return i.jsx(Ng,{onSaveWord:v,progress:c,onProgressChange:m},x);case"phraselist":return i.jsx("section",{className:"block",children:i.jsx("ul",{className:"phrase-list",children:j.phrases.map((h,q)=>i.jsxs("li",{className:"phrase-item",children:[i.jsx("span",{className:"phrase-num",children:String(q+1).padStart(2,"0")}),i.jsxs("div",{className:"phrase-content",children:[i.jsxs("p",{className:"phrase-es",children:[i.jsx(aa,{text:h.es,className:"paragraph-speak"}),h.es]}),i.jsx("p",{className:"phrase-en",children:h.en})]})]},q))})},x);case"steps":return i.jsx("section",{className:"block",children:i.jsx("ol",{className:"steps-list",children:j.steps.map((h,q)=>i.jsxs("li",{className:"step-item",children:[i.jsx("div",{className:"step-num",children:q+1}),i.jsxs("div",{children:[i.jsx("h3",{className:"step-title",children:h.title}),i.jsx("p",{className:"step-text",children:h.text})]})]},q))})},x);case"big-takeaways":return i.jsx("section",{className:"block",children:i.jsx("div",{className:"big-takeaways",children:j.items.map((h,q)=>i.jsxs("div",{className:"big-takeaway-card",children:[i.jsx("div",{className:"big-takeaway-num",children:h.n}),i.jsx("h3",{className:"big-takeaway-title",children:h.title}),i.jsx("p",{className:"big-takeaway-text",children:h.text})]},q))})},x);case"tip":return i.jsxs("aside",{className:"block tip-block",children:[i.jsx(Wo,{size:18,className:"tip-icon"}),i.jsx("p",{children:j.text})]},x);case"takeaway":return i.jsxs("aside",{className:"block takeaway-block",children:[i.jsxs("div",{className:"takeaway-label",children:[i.jsx(dm,{size:14})," Lo que te llevas"]}),i.jsx("p",{children:j.text})]},x);case"verb-table":{const h=Object.fromEntries(j.tenses.map(L=>[L.name,L])),q=j.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return i.jsxs("section",{className:"block verb-table-block",children:[j.participles&&i.jsxs("div",{className:"participles",children:[i.jsx("div",{className:"participles-label",children:"Participios"}),i.jsxs("div",{className:"participles-rows",children:[i.jsxs("div",{className:"participles-row",children:[i.jsx("span",{className:"participles-key",children:"Presente"}),i.jsx("span",{className:"participles-val",children:i.jsx(Rn,{raw:j.participles.present})})]}),i.jsxs("div",{className:"participles-row",children:[i.jsx("span",{className:"participles-key",children:"Pasado"}),i.jsx("span",{className:"participles-val",children:i.jsx(Rn,{raw:j.participles.past})})]})]})]}),i.jsxs("div",{className:"verb-table-header",children:[i.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",i.jsxs("em",{children:['"',u.title.toLowerCase(),'"']})]}),i.jsx(pg,{tenses:j.tenses,verbName:u.title})]}),i.jsx("div",{className:"tense-stack",children:q.map((L,Y)=>{const F=L.map(I=>h[I]).filter(Boolean);if(F.length===0)return null;if(F.length===1){const I=F[0];return i.jsxs("div",{className:"tense-block",children:[i.jsxs("div",{className:"tense-name-row",children:[i.jsx("h3",{className:"tense-name",children:I.name}),i.jsx(aa,{text:I.forms.map(G=>`${G.p} ${Qo(G.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),i.jsx("div",{className:"tense-rows",children:I.forms.map((G,P)=>i.jsxs(en.Fragment,{children:[i.jsx("span",{className:"tense-pronoun",children:G.p}),i.jsxs("span",{className:"tense-form",children:[i.jsx(Rn,{raw:G.f}),i.jsx(aa,{text:Qo(G.f),className:"conjugation-speak"})]})]},P))})]},Y)}return i.jsxs("table",{className:"tense-group-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{"aria-hidden":"true"}),F.map((I,G)=>i.jsx("th",{scope:"col",children:i.jsxs("div",{className:"tg-th-inner",children:[i.jsx("span",{children:I.name}),i.jsx(aa,{text:I.forms.map(P=>`${P.p} ${Qo(P.f)}`).join(". ")})]})},G))]})}),i.jsx("tbody",{children:F[0].forms.map((I,G)=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",className:"tg-pronoun",children:F[0].forms[G].p}),F.map((P,Q)=>i.jsxs("td",{className:"tg-form",children:[i.jsx(Rn,{raw:P.forms[G].f}),i.jsx(aa,{text:Qo(P.forms[G].f),className:"conjugation-speak"})]},Q))]},G))})]},Y)})}),i.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",i.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},x)}case"verb-uses":return i.jsxs("section",{className:"block verb-uses-block",children:[j.heading&&i.jsx("h2",{className:"verb-uses-heading",children:j.heading}),j.categories.map((h,q)=>i.jsxs("div",{className:"vu-category",children:[i.jsxs("div",{className:"vu-category-head",children:[i.jsx("div",{className:"vu-category-label",children:h.label}),h.note&&i.jsx("div",{className:"vu-category-note",children:h.note})]}),i.jsx("div",{className:"vu-senses",children:h.senses.map((L,Y)=>i.jsxs("div",{className:"vu-sense",children:[i.jsx("div",{className:"vu-sense-num",children:L.n}),i.jsxs("div",{className:"vu-sense-body",children:[i.jsx("div",{className:"vu-sense-meaning",children:L.meaning}),L.subnote&&i.jsx("div",{className:"vu-sense-subnote",children:L.subnote}),i.jsx("ul",{className:"vu-examples",children:L.examples.map((F,I)=>i.jsx("li",{children:i.jsx(fi,{es:F.es,en:F.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},I))})]})]},Y))})]},q))]},x);case"lesson-section":return i.jsxs("section",{className:"block lesson-section",children:[j.heading&&i.jsx("h2",{className:"lesson-heading",children:j.heading}),j.text&&i.jsx("p",{className:"lesson-text",children:j.text}),j.paragraphs&&j.paragraphs.map((h,q)=>i.jsx("p",{className:"lesson-text",children:h},q)),j.table&&i.jsx("div",{className:"lesson-table-wrap",children:i.jsxs("table",{className:"lesson-table",children:[j.table.headers&&i.jsx("thead",{children:i.jsx("tr",{children:j.table.headers.map((h,q)=>i.jsx("th",{children:h},q))})}),i.jsx("tbody",{children:j.table.rows.map((h,q)=>i.jsx("tr",{children:h.map((L,Y)=>i.jsx("td",{children:Y===0?L:i.jsx(Rn,{raw:String(L)})},Y))},q))})]})}),j.examples&&i.jsx("ul",{className:"lesson-examples",children:j.examples.map((h,q)=>i.jsx("li",{children:i.jsx(fi,{es:h.es,en:h.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},q))})]},x);default:return null}})]})}function Tg(u){return u.trim().replace(/[«»""''¡!¿?.,;:()[\]{}<>*_/\\—–\-]+/g,"").trim().toLowerCase()}async function hm(u){const b=[],v=encodeURIComponent(u),c=m=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(m):void 0;try{const m=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${v}&src=es&dst=en`,{signal:c(4e3)});if(m.ok){const k=await m.json();if(Array.isArray(k)&&k.length>0){const E=k[0],j=E?.translations?.[0]?.text?.trim();if(j){const x=(E.translations||[]).slice(1,5).map(q=>q.text?.trim()).filter(Boolean),h=[];for(const q of E.translations||[]){for(const L of q.examples||[])L.src&&L.dst&&h.length<2&&h.push({es:L.src,en:L.dst});if(h.length>=2)break}return{main:j,extras:x,pos:E.pos||E.translations?.[0]?.pos||"",examples:h,source:"Linguee"}}}}else b.push(`Linguee: HTTP ${m.status}`)}catch(m){b.push(`Linguee: ${m.message}`)}try{const m=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${v}&pretty=true`,{signal:c(4e3)});if(m.ok){const E=(await m.json())?.tuc||[],j=E.map(h=>h?.phrase?.text?.trim()).filter(Boolean),x=E.flatMap(h=>(h?.meanings||[]).map(q=>q?.text?.trim())).filter(Boolean);if(j.length>0){const h=j[0],q=j.slice(1,5).filter(L=>L.toLowerCase()!==h.toLowerCase());return{main:h,extras:q,pos:"",meanings:x.slice(0,3),source:"Glosbe"}}}else b.push(`Glosbe: HTTP ${m.status}`)}catch(m){b.push(`Glosbe: ${m.message}`)}try{const m=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${v}`,{signal:c(4e3)});if(m.ok){const k=await m.json();if(Array.isArray(k)&&k.length>0){const j=k[0]?.meanings?.[0],x=j?.definitions?.[0]?.definition?.trim();if(x)return{main:x,extras:[],pos:j?.partOfSpeech||"",source:"Diccionario",isDefinition:!0}}}else b.push(`FreeDict: HTTP ${m.status}`)}catch(m){b.push(`FreeDict: ${m.message}`)}try{const m=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${v}`,{signal:c(4e3)});if(m.ok){const E=(await m.json())?.sentences?.[0]?.trans?.trim();if(E&&E.toLowerCase()!==u.toLowerCase())return{main:E,extras:[],pos:"",source:"Google"}}}catch(m){b.push(`Google: ${m.message}`)}try{const m=await fetch(`https://api.mymemory.translated.net/get?q=${v}&langpair=es|en`,{signal:c(4e3)});if(m.ok){const E=(await m.json())?.responseData?.translatedText?.trim();if(E&&E.toLowerCase()!==u.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(E))return{main:E,extras:[],pos:"",source:"MyMemory"}}}catch(m){b.push(`MyMemory: ${m.message}`)}return b.length&&console.warn("Lookup failed for",u,b),null}function Ag({savedWords:u,onSave:b,onRemove:v}){const[c,m]=R.useState(null),k=en.useRef(null),E=Tg,j=hm,[x,h]=R.useState(null);if(R.useEffect(()=>{let Q="";async function oe($,te,X){h(null),m({word:$,x:te,y:X,loading:!0,result:null,error:!1});try{const K=await j($);m(U=>U&&U.word===$?{...U,loading:!1,result:K,error:!K}:U)}catch{m(U=>U&&U.word===$?{...U,loading:!1,error:!0}:U)}}function ae(){clearTimeout(ae._t),ae._t=setTimeout(()=>{const $=window.getSelection(),te=$?.toString()||"",X=E(te);if(!X||X.length<2||X.split(/\s+/).length>3){Q&&h(null),Q="";return}if(X===Q)return;Q=X;let K=window.innerWidth/2,U=120;try{const fe=$.getRangeAt(0).getBoundingClientRect();K=fe.left+fe.width/2,U=fe.top-6}catch{}const ue=96;K=Math.max(ue/2+8,Math.min(K,window.innerWidth-ue/2-8)),U<50&&(U=50),h({word:X,x:K,y:U})},200)}function be($){const te=k.current&&k.current.contains($.target),X=$.target.closest&&$.target.closest(".dict-floating-btn");!te&&!X&&(m(null),h(null),Q="")}return window.__bookOpenPopup=oe,document.addEventListener("selectionchange",ae),document.addEventListener("pointerdown",be),()=>{document.removeEventListener("selectionchange",ae),document.removeEventListener("pointerdown",be),delete window.__bookOpenPopup}},[]),!c&&!x)return null;if(!c&&x)return i.jsxs("button",{className:"dict-floating-btn",style:{left:x.x,top:x.y+window.scrollY},onClick:Q=>{Q.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(x.word,x.x,x.y+50)},onPointerDown:Q=>Q.stopPropagation(),children:[i.jsx(Jo,{size:14}),i.jsx("span",{children:"Traducir"})]});const q=290,L=Math.max(q/2+8,Math.min(c.x,window.innerWidth-q/2-8)),Y=c.y+220>window.innerHeight,F=Y?"auto":c.y+window.scrollY,I=Y?window.innerHeight-c.y-window.scrollY+12:"auto",G=u.some(Q=>Q.word===c.word);function P(){G?v(c.word):b({word:c.word,translation:c.result?.main||"",pos:c.result?.pos||"",extras:c.result?.extras||[],savedAt:Date.now()})}return i.jsxs("div",{ref:k,className:"dict-popup",style:{left:L,top:F==="auto"?"auto":F,bottom:I==="auto"?"auto":I},children:[i.jsxs("div",{className:"dict-header",children:[i.jsx("span",{className:"dict-word",children:c.word}),i.jsx("button",{className:"dict-close-btn",onClick:()=>m(null),"aria-label":"Close",children:i.jsx(an,{size:14})})]}),i.jsxs("div",{className:"dict-body",children:[c.loading&&i.jsxs("div",{className:"dict-loading",children:[i.jsx("span",{className:"dict-spinner"}),i.jsx("span",{children:"Looking up…"})]}),!c.loading&&c.error&&i.jsxs("div",{className:"dict-fallback",children:[i.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),i.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Jo,{size:14}),'Buscar "',c.word,'" en SpanishDict']})]}),!c.loading&&c.result&&i.jsxs(i.Fragment,{children:[c.result.pos&&i.jsx("div",{className:"dict-pos",children:c.result.pos}),i.jsx("div",{className:`dict-main-translation ${c.result.isDefinition?"is-definition":""}`,children:c.result.main}),c.result.extras?.length>0&&i.jsx("div",{className:"dict-extras",children:c.result.extras.map((Q,oe)=>i.jsx("span",{className:"dict-extra-tag",children:Q},oe))}),c.result.meanings?.length>0&&i.jsx("ul",{className:"dict-meanings",children:c.result.meanings.map((Q,oe)=>i.jsx("li",{className:"dict-meaning-item",children:Q},oe))}),c.result.examples?.length>0&&i.jsxs("div",{className:"dict-examples",children:[i.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),c.result.examples.map((Q,oe)=>i.jsxs("div",{className:"dict-example",children:[i.jsx("div",{className:"dict-example-es",children:Q.es}),i.jsx("div",{className:"dict-example-en",children:Q.en})]},oe))]})]})]}),!c.loading&&i.jsxs("button",{className:`dict-save-btn ${G?"saved":""}`,onClick:P,"aria-label":G?"Remove from Memoria":"Save to Memoria",children:[i.jsx(Vn,{size:14,className:G?"filled":""}),G?"Guardado en Memoria ✓":c.result?"Guardar en Memoria":"Guardar palabra"]}),i.jsxs("div",{className:"dict-footer",children:[i.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Jo,{size:12}),"Ver en SpanishDict"]}),i.jsx("span",{className:"dict-source",children:c.result?.source||"Dict"})]})]})}function Ko(u){const b=new Set(u.tags||[]);return u.pending&&b.add("pending"),u.translation||b.add("needs-translation"),/Group 1|cognates|near-cognates/i.test(u.pos||"")&&b.add("cognates"),/Group 2|function/i.test(u.pos||"")&&b.add("function-words"),/Group 3|remaining/i.test(u.pos||"")&&b.add("remaining"),[...b]}function Cg(u){const b=["Spanish","English","Tags","Notes"],v=u.map(j=>[j.word,j.translation||"",Ko(j).join(" | "),[...j.extras||[],j.pos||""].filter(Boolean).join(" | ")]),c=[b,...v].map(j=>j.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([c],{type:"text/csv;charset=utf-8"}),k=URL.createObjectURL(m),E=document.createElement("a");E.href=k,E.download="memoria-spanish.csv",E.click(),URL.revokeObjectURL(k)}function Mg({savedWords:u,onRemove:b,onClear:v,onUpdateWord:c}){const[m,k]=R.useState({}),[E,j]=R.useState("grid"),[x,h]=R.useState(""),[q,L]=R.useState("ALL"),[Y,F]=R.useState(0),[I,G]=R.useState(!1),[P,Q]=R.useState("");function oe(U){k(ue=>({...ue,[U]:!ue[U]}))}const ae=[...u].sort((U,ue)=>ue.savedAt-U.savedAt),be=R.useMemo(()=>{const U=new Set;for(const ue of ae)Ko(ue).forEach(ze=>U.add(ze));return[...U].sort()},[ae]),$=R.useMemo(()=>{const U=x.trim().toLowerCase();return ae.filter(ue=>{const ze=Ko(ue),fe=q==="ALL"||ze.includes(q),Ee=!U||ue.word.toLowerCase().includes(U)||(ue.translation||"").toLowerCase().includes(U)||ze.some(We=>We.toLowerCase().includes(U));return fe&&Ee})},[ae,x,q]),te=$[Y%Math.max(1,$.length)];R.useEffect(()=>{F(0),G(!1)},[x,q,u.length]);function X(U){const ue=P.trim().toLowerCase().replace(/\s+/g,"-");if(!ue)return;const ze=u.find(Ee=>Ee.word===U),fe=Array.from(new Set([...ze?.tags||[],ue]));c?.(U,{tags:fe}),Q("")}function K(){F(U=>(U+1)%Math.max(1,$.length)),G(!1)}return ae.length===0?i.jsxs("div",{className:"memoria-empty",children:[i.jsx(Vn,{size:36,className:"memoria-empty-icon"}),i.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),i.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",i.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):i.jsxs("article",{className:"chapter-body memoria-view",children:[i.jsxs("header",{className:"chapter-header",children:[i.jsx("div",{className:"chapter-meta",children:i.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),i.jsx("h1",{className:"chapter-title",children:"Memoria"}),i.jsxs("p",{className:"chapter-subtitle",children:[ae.length," ",ae.length===1?"palabra guardada":"palabras guardadas"]}),i.jsx("p",{className:"chapter-intro",children:E==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),i.jsxs("div",{className:"memoria-view-toggle",children:[i.jsx("button",{className:`memoria-view-btn ${E==="grid"?"active":""}`,onClick:()=>j("grid"),children:"Tarjetas"}),i.jsx("button",{className:`memoria-view-btn ${E==="list"?"active":""}`,onClick:()=>j("list"),children:"Lista"}),i.jsx("button",{className:`memoria-view-btn ${E==="review"?"active":""}`,onClick:()=>j("review"),children:"Repaso"})]}),i.jsxs("div",{className:"memoria-tools",children:[i.jsxs("label",{children:[i.jsx("span",{children:"Buscar"}),i.jsx("input",{value:x,onChange:U=>h(U.target.value),placeholder:"palabra, translation, tag..."})]}),i.jsxs("label",{children:[i.jsx("span",{children:"Etiqueta"}),i.jsxs("select",{value:q,onChange:U=>L(U.target.value),children:[i.jsx("option",{value:"ALL",children:"Todas"}),be.map(U=>i.jsx("option",{value:U,children:U},U))]})]}),i.jsx("button",{className:"memoria-tool-btn",onClick:()=>Cg($),children:"Export CSV"})]}),E==="review"?i.jsx("div",{className:"memoria-review",children:te?i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:`memoria-review-card ${I?"flipped":""}`,onClick:()=>G(U=>!U),children:[i.jsx("span",{className:"memoria-review-count",children:$.length?`${Y+1} / ${$.length}`:"0 / 0"}),i.jsx("strong",{children:I?te.translation||"Sin traduccion":te.word}),i.jsx("em",{children:I?te.word:"toca para revelar"})]}),i.jsxs("div",{className:"memoria-review-actions",children:[i.jsx(aa,{text:te.word,size:"md"}),i.jsx("input",{value:P,onChange:U=>Q(U.target.value),placeholder:"add-tag"}),i.jsx("button",{onClick:()=>X(te.word),children:"Tag"}),i.jsx("button",{onClick:K,children:"Siguiente"})]})]}):i.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):E==="grid"?i.jsx("div",{className:"memoria-grid",children:$.map(U=>{const ue=m[U.word],ze=U.pending,fe=Ko(U);return i.jsxs("div",{className:`memoria-card ${ue?"flipped":""}`,onClick:()=>oe(U.word),children:[i.jsxs("div",{className:"memoria-card-inner",children:[i.jsxs("div",{className:"memoria-face front",children:[i.jsx("div",{className:"memoria-word",children:U.word}),U.pos&&i.jsx("div",{className:"memoria-pos",children:U.pos}),U.translation?i.jsx("div",{className:"memoria-front-translation",children:U.translation}):ze?i.jsxs("div",{className:"memoria-front-pending",children:[i.jsx("span",{className:"dict-spinner"}),i.jsx("span",{children:"traduciendo…"})]}):i.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),fe.length>0&&i.jsx("div",{className:"memoria-tags",children:fe.slice(0,3).map(Ee=>i.jsx("span",{children:Ee},Ee))})]}),i.jsxs("div",{className:"memoria-face back",children:[U.translation?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"memoria-translation",children:U.translation}),U.extras?.length>0&&i.jsx("div",{className:"memoria-extras",children:U.extras.slice(0,3).map((Ee,We)=>i.jsx("span",{className:"memoria-extra-tag",children:Ee},We))})]}):i.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),i.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(U.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:Ee=>Ee.stopPropagation(),children:"SpanishDict →"})]})]}),i.jsx("button",{className:"memoria-remove",onClick:Ee=>{Ee.stopPropagation(),b(U.word)},"aria-label":`Remove ${U.word}`,children:i.jsx(an,{size:13})})]},U.word)})}):i.jsx("div",{className:"memoria-list",children:$.map(U=>{const ue=U.pending,ze=Ko(U);return i.jsxs("div",{className:"memoria-list-row",children:[i.jsxs("div",{className:"memoria-list-main",children:[i.jsxs("div",{className:"memoria-list-es",children:[i.jsx("span",{className:"memoria-list-word",children:U.word}),U.pos&&i.jsx("span",{className:"memoria-list-pos",children:U.pos})]}),U.translation?i.jsx("div",{className:"memoria-list-en",children:U.translation}):ue?i.jsxs("div",{className:"memoria-list-en pending",children:[i.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):i.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),U.extras?.length>0&&i.jsx("div",{className:"memoria-list-extras",children:U.extras.slice(0,4).map((fe,Ee)=>i.jsx("span",{className:"memoria-list-extra-tag",children:fe},Ee))}),ze.length>0&&i.jsx("div",{className:"memoria-list-extras",children:ze.map(fe=>i.jsx("span",{className:"memoria-list-extra-tag",children:fe},fe))})]}),i.jsxs("div",{className:"memoria-list-actions",children:[i.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(U.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:i.jsx(Jo,{size:14})}),i.jsx("button",{className:"memoria-list-remove",onClick:()=>b(U.word),"aria-label":`Remove ${U.word}`,children:i.jsx(an,{size:14})})]})]},U.word)})}),ae.length>0&&i.jsx("div",{className:"memoria-actions",children:i.jsx("button",{className:"memoria-clear-btn",onClick:v,children:"Borrar todo"})})]})}function Ug({totalChapters:u,visitedCount:b,savedWordsCount:v,levelFilter:c,palabrasSummary:m,sectionProgress:k,recommendations:E,onStart:j,onOpenMemoria:x,onOpenPalabras:h,onOpenVerb:q,onOpenReading:L,onSelectChapter:Y}){const F=u?Math.round(b/u*100):0;return i.jsxs("article",{className:"chapter-body home-dashboard",children:[i.jsxs("header",{className:"home-hero",children:[i.jsxs("div",{className:"home-kicker",children:[i.jsx(um,{size:18}),"Plan de estudio"]}),i.jsx("h1",{className:"home-title",children:"Learn Spanish"}),i.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),i.jsxs("div",{className:"home-actions",children:[i.jsxs("button",{className:"home-primary",onClick:j,children:["Empezar",i.jsx(Io,{size:16})]}),i.jsxs("button",{className:"home-secondary",onClick:x,children:[i.jsx(Vn,{size:15}),"Memoria"]})]})]}),i.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Progreso"}),i.jsxs("strong",{children:[F,"%"]}),i.jsxs("span",{children:[b," / ",u," capitulos"]})]}),i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Nivel"}),i.jsx("strong",{children:c==="ALL"?"Todo":c}),i.jsx("span",{children:"Filtro activo"})]}),i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Memoria"}),i.jsx("strong",{children:v}),i.jsx("span",{children:v===1?"palabra":"palabras"})]}),i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Palabras due"}),i.jsx("strong",{children:m.due}),i.jsxs("span",{children:[m.mastered," dominadas"]})]})]}),i.jsxs("section",{className:"home-daily",children:[i.jsxs("div",{className:"home-section-heading",children:[i.jsx(Gr,{size:18}),"Ruta diaria"]}),i.jsxs("div",{className:"home-daily-grid",children:[i.jsxs("button",{onClick:h,children:[i.jsx("span",{children:"01"}),i.jsx("strong",{children:"10 palabras"}),i.jsx("em",{children:m.due?`${m.due} vencidas`:`${m.seen} vistas`})]}),i.jsxs("button",{onClick:L,children:[i.jsx("span",{children:"02"}),i.jsx("strong",{children:"Lectura con audio"}),i.jsx("em",{children:"lee y escucha una pagina"})]}),i.jsxs("button",{onClick:q,children:[i.jsx("span",{children:"03"}),i.jsx("strong",{children:"Un verbo"}),i.jsx("em",{children:"tabla, voz, repeticion"})]}),i.jsxs("button",{onClick:x,children:[i.jsx("span",{children:"04"}),i.jsx("strong",{children:"Memoria"}),i.jsxs("em",{children:[v," guardadas"]})]})]})]}),i.jsxs("section",{className:"home-progress-map",children:[i.jsxs("div",{className:"home-section-heading",children:[i.jsx(Vr,{size:18}),"Mapa de progreso"]}),i.jsx("div",{className:"home-progress-list",children:k.map(I=>{const G=I.total?Math.round(I.visited/I.total*100):0;return i.jsxs("div",{className:"home-progress-row",children:[i.jsxs("div",{className:"home-progress-top",children:[i.jsx("span",{children:I.label}),i.jsxs("strong",{children:[I.visited," / ",I.total]})]}),i.jsx("div",{className:"home-progress-track",children:i.jsx("span",{style:{width:`${G}%`}})})]},I.id)})})]}),i.jsxs("section",{className:"home-path",children:[i.jsxs("div",{className:"home-section-heading",children:[i.jsx(cm,{size:18}),"Siguiente lectura"]}),i.jsx("div",{className:"home-recommendations",children:E.map((I,G)=>i.jsxs("button",{className:"home-rec",onClick:()=>Y(I),children:[i.jsx("span",{className:"home-rec-index",children:String(G+1).padStart(2,"0")}),i.jsxs("span",{className:"home-rec-main",children:[i.jsx("span",{className:"home-rec-title",children:I.title}),i.jsxs("span",{className:"home-rec-meta",children:[I.sectionLabel," - ",I.level]})]}),i.jsx(Io,{size:16})]},I.id))})]})]})}function Dg(){const[u,b]=R.useState("tiempos"),[v,c]=R.useState("tiempos"),[m,k]=R.useState("ALL"),[E,j]=R.useState(!1),[x,h]=R.useState(!1),[q,L]=R.useState(!0),[Y,F]=R.useState(1),[I,G]=R.useState(null),[P,Q]=R.useState([]),[oe,ae]=R.useState([]),[be,$]=R.useState({}),[te,X]=R.useState({});R.useEffect(()=>{(async()=>{try{const T=await window.storage.get("memoria-words");T?.value&&Q(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("font-scale");if(T?.value){const V=parseFloat(T.value);V>=.85&&V<=1.3&&F(V)}}catch{}try{const T=await window.storage.get("last-read");if(T?.value){const V=JSON.parse(T.value);V?.chapterId&&V.chapterId!=="tiempos"&&G(V)}}catch{}try{const T=await window.storage.get("visited-chapters");T?.value&&ae(JSON.parse(T.value))}catch{}try{const T=await window.storage.get(sm);T?.value&&$(JSON.parse(T.value))}catch{}try{const T=await window.storage.get(am);T?.value&&X(JSON.parse(T.value))}catch{}})()},[]),R.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(Y));try{window.storage.set("font-scale",String(Y))}catch{}},[Y]);function K(T){F(V=>Math.max(.85,Math.min(1.3,+(V+T).toFixed(2))))}async function U(T){try{await window.storage.set("memoria-words",JSON.stringify(T))}catch{}}async function ue(T){try{await window.storage.set(sm,JSON.stringify(T))}catch{}}async function ze(T){try{await window.storage.set(am,JSON.stringify(T))}catch{}}function fe(T){$(T),ue(T)}function Ee(T,V){X(pe=>{const ke={...pe};return V?ke[T]=V:delete ke[T],ze(ke),ke})}async function We(T){Q(pe=>{const ke=pe.map(Ce=>Ce.word===T?{...Ce,pending:!0}:Ce);return U(ke),ke});const V=await hm(T);Q(pe=>{const ke=pe.map(Ce=>Ce.word!==T?Ce:V?{...Ce,translation:V.main,pos:V.pos||Ce.pos||"",extras:V.extras||[],pending:!1,translatedAt:Date.now()}:{...Ce,pending:!1});return U(ke),ke})}function Be(T){Q(V=>{if(V.some(ke=>ke.word===T.word))return V;const pe=[T,...V];return U(pe),pe}),T.translation||We(T.word)}function N(T){Q(V=>{const pe=V.filter(ke=>ke.word!==T);return U(pe),pe})}function H(T,V){Q(pe=>{const ke=pe.map(Ce=>Ce.word===T?{...Ce,...V}:Ce);return U(ke),ke})}function Z(){Q([]),U([])}R.useEffect(()=>{if(P.length===0)return;const T=P.filter(V=>!V.translation&&!V.pending);T.length!==0&&T.slice(0,5).forEach((V,pe)=>{setTimeout(()=>We(V.word),pe*800)})},[P.length]);const[re,de]=R.useState(()=>{const T={};for(const V of Vo)T[V.id]=!(V.id==="verbos"||V.id==="verbos2");return T}),d=R.useMemo(()=>{const T=[];for(const V of Vo)for(const pe of V.chapters)(pe.alwaysVisible||m==="ALL"||pe.level===m)&&T.push({...pe,sectionId:V.id,sectionLabel:V.label});return T},[m]);R.useEffect(()=>{d.find(T=>T.id===v)||d.length&&(c(d[0].id),b(d[0].sectionId))},[d,v]),R.useEffect(()=>{const T=d.find(V=>V.id===v);T&&de(V=>V[T.sectionId]?V:{...V,[T.sectionId]:!0})},[v,d]);const C=R.useMemo(()=>d.find(T=>T.id===v),[d,v]),_=d.findIndex(T=>T.id===v),B=_>0?d[_-1]:null,se=_>=0&&_<d.length-1?d[_+1]:null,ie=R.useMemo(()=>new Set(oe),[oe]),O=R.useMemo(()=>d.filter(T=>ie.has(T.id)).length,[d,ie]),ge=R.useMemo(()=>{const T=d.filter(V=>!ie.has(V.id));return(T.length?T:d).slice(0,4)},[d,ie]),ce=ge[0]||d[0],Oe=R.useMemo(()=>{const T=Object.values(be||{}),V=Date.now();return{seen:T.filter(pe=>pe?.seen).length,due:T.filter(pe=>pe?.seen&&(pe.dueAt||0)<=V).length,mastered:T.filter(pe=>pe?.mastered).length}},[be]),Fe=R.useMemo(()=>Vo.map(T=>{const V=T.chapters.filter(ke=>ke.alwaysVisible||m==="ALL"||ke.level===m),pe=V.filter(ke=>ie.has(ke.id)).length;return{id:T.id,label:T.label,total:V.length,visited:pe}}).filter(T=>T.total>0),[m,ie]),ca=d.find(T=>T.id==="palabras-5000"),Xn=d.find(T=>T.sectionId==="verbos")||d.find(T=>T.sectionId==="verbos2"),Ra=d.find(T=>T.sectionId==="lectura");function ba(T){c(T.id),b(T.sectionId||T.sectionId),h(!1),L(!1),j(!1),G(null),ae(V=>{if(V.includes(T.id))return V;const pe=[...V,T.id];try{window.storage.set("visited-chapters",JSON.stringify(pe))}catch{}return pe});try{window.storage.set("last-read",JSON.stringify({sectionId:T.sectionId,chapterId:T.id,title:T.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const V=document.querySelector(".book-main");V&&V.scrollTo({top:0,behavior:"smooth"})}}function Zn(){if(!I)return;const T=Vo.find(pe=>pe.id===I.sectionId),V=T?.chapters.find(pe=>pe.id===I.chapterId);V&&ba({...V,sectionId:T.id}),G(null)}function yi(){G(null)}return i.jsxs("div",{className:"book-root",children:[i.jsx(Ag,{savedWords:P,onSave:Be,onRemove:N}),i.jsx("style",{children:Lg}),i.jsxs("div",{className:"mobile-bar",children:[i.jsx("button",{className:"mobile-btn",onClick:()=>j(!0),"aria-label":"Open menu",children:i.jsx(sg,{size:20})}),i.jsx("div",{className:"mobile-title",children:i.jsx("span",{className:"mobile-brand-script",children:"Español"})}),i.jsxs("div",{className:"font-controls",children:[i.jsx("button",{className:"font-btn",onClick:()=>K(-.05),"aria-label":"Smaller text",disabled:Y<=.85,children:i.jsx("span",{className:"font-btn-small",children:"A"})}),i.jsx("button",{className:"font-btn",onClick:()=>K(.05),"aria-label":"Larger text",disabled:Y>=1.3,children:i.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),I&&i.jsxs("div",{className:"resume-banner",children:[i.jsxs("div",{className:"resume-banner-text",children:[i.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),i.jsx("span",{className:"resume-banner-title",children:I.title})]}),i.jsxs("div",{className:"resume-banner-actions",children:[i.jsxs("button",{className:"resume-btn-primary",onClick:Zn,children:["Continuar",i.jsx(Io,{size:14})]}),i.jsx("button",{className:"resume-btn-dismiss",onClick:yi,"aria-label":"Dismiss",children:i.jsx(an,{size:14})})]})]}),i.jsxs("div",{className:"book-shell",children:[i.jsxs("aside",{className:`sidebar ${E?"open":""}`,children:[i.jsxs("div",{className:"sidebar-inner",children:[i.jsxs("div",{className:"brand",children:[i.jsx("div",{className:"brand-mark",children:i.jsx(Yr,{size:18})}),i.jsxs("div",{className:"brand-text",children:[i.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),i.jsx("div",{className:"brand-title",children:"Español"})]}),i.jsx("button",{className:"sidebar-close",onClick:()=>j(!1),"aria-label":"Close menu",children:i.jsx(an,{size:18})})]}),i.jsxs("nav",{className:"section-nav",children:[i.jsx("div",{className:`section-group home-nav-item ${q?"active":""}`,children:i.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{L(!0),h(!1),j(!1)},children:[i.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:i.jsx(Vr,{size:18,className:"section-icon"})}),i.jsxs("div",{className:"section-text",children:[i.jsx("div",{className:"section-label",children:"Inicio"}),i.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),i.jsx("div",{className:"section-meta",children:i.jsx("div",{className:"section-count",children:oe.length})})]})}),Vo.map(T=>{const V=T.chapters.filter(Ce=>Ce.alwaysVisible||m==="ALL"||Ce.level===m),pe=T.id===u&&!x&&!q,ke=re[T.id];return i.jsxs("div",{className:`section-group ${pe?"active":""} ${ke?"expanded":"collapsed"}`,children:[i.jsxs("button",{className:"section-btn",onClick:()=>{de(Ce=>({...Ce,[T.id]:!Ce[T.id]}))},"aria-expanded":ke,children:[i.jsx("div",{className:"section-icon-wrap",children:i.jsx(pm,{id:T.id,size:18,className:"section-icon"})}),i.jsxs("div",{className:"section-text",children:[i.jsx("div",{className:"section-label",children:T.label}),i.jsx("div",{className:"section-sublabel",children:T.sublabel})]}),i.jsxs("div",{className:"section-meta",children:[i.jsx("div",{className:"section-count",children:V.length}),i.jsx(Qn,{size:16,className:`section-chevron ${ke?"open":""}`})]})]}),ke&&V.length>0&&i.jsx("ul",{className:"chapter-list",children:V.map(Ce=>{const Kn=te[Ce.id];return i.jsx("li",{children:i.jsxs("button",{className:`chapter-btn ${v===Ce.id&&!x&&!q?"active":""}`,onClick:()=>{h(!1),ba({...Ce,sectionId:T.id})},children:[i.jsx("span",{className:"chapter-btn-level",children:Ce.level}),i.jsx("span",{className:"chapter-btn-title",children:Ce.title}),Kn&&i.jsx("span",{className:`chapter-btn-status ${Kn}`,children:Kn==="understood"?"Entendido":"Leído"})]})},Ce.id)})})]},T.id)}),i.jsx("div",{className:`section-group memoria-nav-item ${x?"active":""}`,children:i.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{L(!1),h(!0),j(!1)},children:[i.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:i.jsx(Vn,{size:18,className:"section-icon"})}),i.jsxs("div",{className:"section-text",children:[i.jsx("div",{className:"section-label",children:"Memoria"}),i.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),i.jsx("div",{className:"section-meta",children:i.jsx("div",{className:"section-count memoria-count",children:P.length})})]})})]}),i.jsx("div",{className:"sidebar-footer",children:i.jsx("div",{className:"sig",children:"— para Othman"})})]}),E&&i.jsx("div",{className:"scrim",onClick:()=>j(!1)})]}),i.jsxs("main",{className:"book-main",children:[i.jsxs("div",{className:`book-page ${q?"home-page":""}`,children:[q?i.jsx(Ug,{totalChapters:d.length,visitedCount:O,savedWordsCount:P.length,levelFilter:m,palabrasSummary:Oe,sectionProgress:Fe,recommendations:ge,onStart:()=>ce&&ba(ce),onOpenMemoria:()=>{L(!1),h(!0)},onOpenPalabras:()=>ca&&ba(ca),onOpenVerb:()=>Xn&&ba(Xn),onOpenReading:()=>Ra&&ba(Ra),onSelectChapter:ba}):x?i.jsx(Mg,{savedWords:P,onRemove:N,onClear:Z,onUpdateWord:H}):C?i.jsx(Eg,{chapter:C,sectionId:u,onSaveWord:Be,palabrasProgress:be,onPalabrasProgressChange:fe,lessonStatus:te[C.id],onLessonStatusChange:T=>Ee(C.id,T)}):i.jsxs("div",{className:"empty",children:[i.jsx(gi,{size:28}),i.jsx("p",{children:"No hay capítulos en este nivel."})]}),!q&&!x&&i.jsxs("nav",{className:"chapter-nav",children:[B?i.jsxs("button",{className:"nav-btn prev",onClick:()=>ba(B),children:[i.jsx(tg,{size:16}),i.jsxs("div",{children:[i.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),i.jsx("div",{className:"nav-title",children:B.title})]})]}):i.jsx("div",{}),se?i.jsxs("button",{className:"nav-btn next",onClick:()=>ba(se),children:[i.jsxs("div",{style:{textAlign:"right"},children:[i.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),i.jsx("div",{className:"nav-title",children:se.title})]}),i.jsx(Io,{size:16})]}):i.jsx("div",{})]})]}),i.jsx("footer",{className:"level-bar",children:i.jsxs("div",{className:"level-bar-inner",children:[i.jsxs("div",{className:"level-bar-label",children:[i.jsx(Vn,{size:14})," Nivel"]}),i.jsxs("div",{className:"level-pills",children:[i.jsx("button",{className:`level-pill ${m==="ALL"?"active":""}`,onClick:()=>k("ALL"),children:"Todos"}),cg.map(T=>i.jsx("button",{className:`level-pill ${m===T?"active":""}`,onClick:()=>k(T),children:T},T))]}),i.jsx("div",{className:"level-bar-counter",children:q?`${O} / ${d.length}`:_>=0?`${_+1} / ${d.length}`:"—"})]})})]})]})]})}const Lg=`
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
  --red: #b03030;
  --blue: #1f4f8b;
  --shadow: 0 1px 0 rgba(0,0,0,0.04), 0 12px 30px -18px rgba(60, 50, 30, 0.25);
  --font-scale: 1;
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
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 7px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-mute);
  background: var(--paper-light);
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
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
}
.lesson-status-btn:active {
  transform: scale(0.97);
}
.lesson-status-btn.active {
  color: var(--green);
  border-color: rgba(47, 93, 58, 0.36);
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
  margin: 28px 0;
  border-top: 2px solid var(--ink);
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
`;typeof window<"u"&&!window.storage&&(window.storage={async get(u){const b=window.localStorage.getItem(u);return b===null?null:{value:b}},async set(u,b){window.localStorage.setItem(u,b)},async delete(u){window.localStorage.removeItem(u)}});Jh();Kh.createRoot(document.getElementById("root")).render(i.jsx(en.StrictMode,{children:i.jsx(Dg,{})}));
