(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const x of g.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function d(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(m){if(m.ep)return;m.ep=!0;const g=d(m);fetch(m.href,g)}})();function dg(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var $r={exports:{}},ss={};var dm;function pg(){if(dm)return ss;dm=1;var u=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function d(r,m,g){var x=null;if(g!==void 0&&(x=""+g),m.key!==void 0&&(x=""+m.key),"key"in m){g={};for(var f in m)f!=="key"&&(g[f]=m[f])}else g=m;return m=g.ref,{$$typeof:u,type:r,key:x,ref:m!==void 0?m:null,props:g}}return ss.Fragment=p,ss.jsx=d,ss.jsxs=d,ss}var pm;function mg(){return pm||(pm=1,$r.exports=pg()),$r.exports}var s=mg(),Fr={exports:{}},fe={};var mm;function fg(){if(mm)return fe;mm=1;var u=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),x=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),U=Symbol.iterator;function _(b){return b===null||typeof b!="object"?null:(b=U&&b[U]||b["@@iterator"],typeof b=="function"?b:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,le={};function $(b,D,Q){this.props=b,this.context=D,this.refs=le,this.updater=Q||J}$.prototype.isReactComponent={},$.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},$.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=$.prototype;function ae(b,D,Q){this.props=b,this.context=D,this.refs=le,this.updater=Q||J}var P=ae.prototype=new W;P.constructor=ae,K(P,$.prototype),P.isPureReactComponent=!0;var ne=Array.isArray;function ie(){}var Y={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function ve(b,D,Q){var Z=Q.ref;return{$$typeof:u,type:b,key:D,ref:Z!==void 0?Z:null,props:Q}}function X(b,D){return ve(b.type,D,b.props)}function we(b){return typeof b=="object"&&b!==null&&b.$$typeof===u}function C(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Q){return D[Q]})}var oe=/\/+/g;function F(b,D){return typeof b=="object"&&b!==null&&b.key!=null?C(""+b.key):D.toString(36)}function te(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ie,ie):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function z(b,D,Q,Z,pe){var he=typeof b;(he==="undefined"||he==="boolean")&&(b=null);var Ne=!1;if(b===null)Ne=!0;else switch(he){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(b.$$typeof){case u:case p:Ne=!0;break;case j:return Ne=b._init,z(Ne(b._payload),D,Q,Z,pe)}}if(Ne)return pe=pe(b),Ne=Z===""?"."+F(b,0):Z,ne(pe)?(Q="",Ne!=null&&(Q=Ne.replace(oe,"$&/")+"/"),z(pe,D,Q,"",function(Te){return Te})):pe!=null&&(we(pe)&&(pe=X(pe,Q+(pe.key==null||b&&b.key===pe.key?"":(""+pe.key).replace(oe,"$&/")+"/")+Ne)),D.push(pe)),1;Ne=0;var Ie=Z===""?".":Z+":";if(ne(b))for(var G=0;G<b.length;G++)Z=b[G],he=Ie+F(Z,G),Ne+=z(Z,D,Q,he,pe);else if(G=_(b),typeof G=="function")for(b=G.call(b),G=0;!(Z=b.next()).done;)Z=Z.value,he=Ie+F(Z,G++),Ne+=z(Z,D,Q,he,pe);else if(he==="object"){if(typeof b.then=="function")return z(te(b),D,Q,Z,pe);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function R(b,D,Q){if(b==null)return b;var Z=[],pe=0;return z(b,Z,"","",function(he){return D.call(Q,he,pe++)}),Z}function V(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(Q){(b._status===0||b._status===-1)&&(b._status=1,b._result=Q)},function(Q){(b._status===0||b._status===-1)&&(b._status=2,b._result=Q)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var ue=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},de={map:R,forEach:function(b,D,Q){R(b,function(){D.apply(this,arguments)},Q)},count:function(b){var D=0;return R(b,function(){D++}),D},toArray:function(b){return R(b,function(D){return D})||[]},only:function(b){if(!we(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return fe.Activity=S,fe.Children=de,fe.Component=$,fe.Fragment=d,fe.Profiler=m,fe.PureComponent=ae,fe.StrictMode=r,fe.Suspense=w,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,fe.__COMPILER_RUNTIME={__proto__:null,c:function(b){return Y.H.useMemoCache(b)}},fe.cache=function(b){return function(){return b.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(b,D,Q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=K({},b.props),pe=b.key;if(D!=null)for(he in D.key!==void 0&&(pe=""+D.key),D)!me.call(D,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&D.ref===void 0||(Z[he]=D[he]);var he=arguments.length-2;if(he===1)Z.children=Q;else if(1<he){for(var Ne=Array(he),Ie=0;Ie<he;Ie++)Ne[Ie]=arguments[Ie+2];Z.children=Ne}return ve(b.type,pe,Z)},fe.createContext=function(b){return b={$$typeof:x,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:g,_context:b},b},fe.createElement=function(b,D,Q){var Z,pe={},he=null;if(D!=null)for(Z in D.key!==void 0&&(he=""+D.key),D)me.call(D,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(pe[Z]=D[Z]);var Ne=arguments.length-2;if(Ne===1)pe.children=Q;else if(1<Ne){for(var Ie=Array(Ne),G=0;G<Ne;G++)Ie[G]=arguments[G+2];pe.children=Ie}if(b&&b.defaultProps)for(Z in Ne=b.defaultProps,Ne)pe[Z]===void 0&&(pe[Z]=Ne[Z]);return ve(b,he,pe)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(b){return{$$typeof:f,render:b}},fe.isValidElement=we,fe.lazy=function(b){return{$$typeof:j,_payload:{_status:-1,_result:b},_init:V}},fe.memo=function(b,D){return{$$typeof:y,type:b,compare:D===void 0?null:D}},fe.startTransition=function(b){var D=Y.T,Q={};Y.T=Q;try{var Z=b(),pe=Y.S;pe!==null&&pe(Q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ie,ue)}catch(he){ue(he)}finally{D!==null&&Q.types!==null&&(D.types=Q.types),Y.T=D}},fe.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},fe.use=function(b){return Y.H.use(b)},fe.useActionState=function(b,D,Q){return Y.H.useActionState(b,D,Q)},fe.useCallback=function(b,D){return Y.H.useCallback(b,D)},fe.useContext=function(b){return Y.H.useContext(b)},fe.useDebugValue=function(){},fe.useDeferredValue=function(b,D){return Y.H.useDeferredValue(b,D)},fe.useEffect=function(b,D){return Y.H.useEffect(b,D)},fe.useEffectEvent=function(b){return Y.H.useEffectEvent(b)},fe.useId=function(){return Y.H.useId()},fe.useImperativeHandle=function(b,D,Q){return Y.H.useImperativeHandle(b,D,Q)},fe.useInsertionEffect=function(b,D){return Y.H.useInsertionEffect(b,D)},fe.useLayoutEffect=function(b,D){return Y.H.useLayoutEffect(b,D)},fe.useMemo=function(b,D){return Y.H.useMemo(b,D)},fe.useOptimistic=function(b,D){return Y.H.useOptimistic(b,D)},fe.useReducer=function(b,D,Q){return Y.H.useReducer(b,D,Q)},fe.useRef=function(b){return Y.H.useRef(b)},fe.useState=function(b){return Y.H.useState(b)},fe.useSyncExternalStore=function(b,D,Q){return Y.H.useSyncExternalStore(b,D,Q)},fe.useTransition=function(){return Y.H.useTransition()},fe.version="19.2.5",fe}var fm;function lc(){return fm||(fm=1,Fr.exports=fg()),Fr.exports}var H=lc();const bt=dg(H);var Pr={exports:{}},is={},ec={exports:{}},ac={};var hm;function hg(){return hm||(hm=1,(function(u){function p(z,R){var V=z.length;z.push(R);e:for(;0<V;){var ue=V-1>>>1,de=z[ue];if(0<m(de,R))z[ue]=R,z[V]=de,V=ue;else break e}}function d(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],V=z.pop();if(V!==R){z[0]=V;e:for(var ue=0,de=z.length,b=de>>>1;ue<b;){var D=2*(ue+1)-1,Q=z[D],Z=D+1,pe=z[Z];if(0>m(Q,V))Z<de&&0>m(pe,Q)?(z[ue]=pe,z[Z]=V,ue=Z):(z[ue]=Q,z[D]=V,ue=D);else if(Z<de&&0>m(pe,V))z[ue]=pe,z[Z]=V,ue=Z;else break e}}return R}function m(z,R){var V=z.sortIndex-R.sortIndex;return V!==0?V:z.id-R.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;u.unstable_now=function(){return g.now()}}else{var x=Date,f=x.now();u.unstable_now=function(){return x.now()-f}}var w=[],y=[],j=1,S=null,U=3,_=!1,J=!1,K=!1,le=!1,$=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var R=d(y);R!==null;){if(R.callback===null)r(y);else if(R.startTime<=z)r(y),R.sortIndex=R.expirationTime,p(w,R);else break;R=d(y)}}function ne(z){if(K=!1,P(z),!J)if(d(w)!==null)J=!0,ie||(ie=!0,C());else{var R=d(y);R!==null&&te(ne,R.startTime-z)}}var ie=!1,Y=-1,me=5,ve=-1;function X(){return le?!0:!(u.unstable_now()-ve<me)}function we(){if(le=!1,ie){var z=u.unstable_now();ve=z;var R=!0;try{e:{J=!1,K&&(K=!1,W(Y),Y=-1),_=!0;var V=U;try{a:{for(P(z),S=d(w);S!==null&&!(S.expirationTime>z&&X());){var ue=S.callback;if(typeof ue=="function"){S.callback=null,U=S.priorityLevel;var de=ue(S.expirationTime<=z);if(z=u.unstable_now(),typeof de=="function"){S.callback=de,P(z),R=!0;break a}S===d(w)&&r(w),P(z)}else r(w);S=d(w)}if(S!==null)R=!0;else{var b=d(y);b!==null&&te(ne,b.startTime-z),R=!1}}break e}finally{S=null,U=V,_=!1}R=void 0}}finally{R?C():ie=!1}}}var C;if(typeof ae=="function")C=function(){ae(we)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,F=oe.port2;oe.port1.onmessage=we,C=function(){F.postMessage(null)}}else C=function(){$(we,0)};function te(z,R){Y=$(function(){z(u.unstable_now())},R)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(z){z.callback=null},u.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<z?Math.floor(1e3/z):5},u.unstable_getCurrentPriorityLevel=function(){return U},u.unstable_next=function(z){switch(U){case 1:case 2:case 3:var R=3;break;default:R=U}var V=U;U=R;try{return z()}finally{U=V}},u.unstable_requestPaint=function(){le=!0},u.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=U;U=z;try{return R()}finally{U=V}},u.unstable_scheduleCallback=function(z,R,V){var ue=u.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ue+V:ue):V=ue,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=V+de,z={id:j++,callback:R,priorityLevel:z,startTime:V,expirationTime:de,sortIndex:-1},V>ue?(z.sortIndex=V,p(y,z),d(w)===null&&z===d(y)&&(K?(W(Y),Y=-1):K=!0,te(ne,V-ue))):(z.sortIndex=de,p(w,z),J||_||(J=!0,ie||(ie=!0,C()))),z},u.unstable_shouldYield=X,u.unstable_wrapCallback=function(z){var R=U;return function(){var V=U;U=R;try{return z.apply(this,arguments)}finally{U=V}}}})(ac)),ac}var gm;function gg(){return gm||(gm=1,ec.exports=hg()),ec.exports}var tc={exports:{}},da={};var bm;function bg(){if(bm)return da;bm=1;var u=lc();function p(w){var y="https://react.dev/errors/"+w;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)y+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+w+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(p(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function g(w,y,j){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:S==null?null:""+S,children:w,containerInfo:y,implementation:j}}var x=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(w,y){if(w==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return da.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,da.createPortal=function(w,y){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(p(299));return g(w,y,null,j)},da.flushSync=function(w){var y=x.T,j=r.p;try{if(x.T=null,r.p=2,w)return w()}finally{x.T=y,r.p=j,r.d.f()}},da.preconnect=function(w,y){typeof w=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(w,y))},da.prefetchDNS=function(w){typeof w=="string"&&r.d.D(w)},da.preinit=function(w,y){if(typeof w=="string"&&y&&typeof y.as=="string"){var j=y.as,S=f(j,y.crossOrigin),U=typeof y.integrity=="string"?y.integrity:void 0,_=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;j==="style"?r.d.S(w,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:U,fetchPriority:_}):j==="script"&&r.d.X(w,{crossOrigin:S,integrity:U,fetchPriority:_,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},da.preinitModule=function(w,y){if(typeof w=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var j=f(y.as,y.crossOrigin);r.d.M(w,{crossOrigin:j,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(w)},da.preload=function(w,y){if(typeof w=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var j=y.as,S=f(j,y.crossOrigin);r.d.L(w,j,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},da.preloadModule=function(w,y){if(typeof w=="string")if(y){var j=f(y.as,y.crossOrigin);r.d.m(w,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:j,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(w)},da.requestFormReset=function(w){r.d.r(w)},da.unstable_batchedUpdates=function(w,y){return w(y)},da.useFormState=function(w,y,j){return x.H.useFormState(w,y,j)},da.useFormStatus=function(){return x.H.useHostTransitionStatus()},da.version="19.2.5",da}var vm;function vg(){if(vm)return tc.exports;vm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(p){console.error(p)}}return u(),tc.exports=bg(),tc.exports}var xm;function xg(){if(xm)return is;xm=1;var u=gg(),p=lc(),d=vg();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function x(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function w(e){if(g(e)!==e)throw Error(r(188))}function y(e){var a=e.alternate;if(!a){if(a=g(e),a===null)throw Error(r(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return w(o),e;if(i===n)return w(o),a;i=i.sibling}throw Error(r(188))}if(t.return!==n.return)t=o,n=i;else{for(var l=!1,c=o.child;c;){if(c===t){l=!0,t=o,n=i;break}if(c===n){l=!0,n=o,t=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===t){l=!0,t=i,n=o;break}if(c===n){l=!0,n=i,t=o;break}c=c.sibling}if(!l)throw Error(r(189))}}if(t.alternate!==n)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:a}function j(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=j(e),a!==null)return a;e=e.sibling}return null}var S=Object.assign,U=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function C(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function F(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case $:return"Profiler";case le:return"StrictMode";case ne:return"Suspense";case ie:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case ae:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case P:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return a=e.displayName||null,a!==null?a:F(e.type)||"Memo";case me:a=e._payload,e=e._init;try{return F(e(a))}catch{}}return null}var te=Array.isArray,z=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function b(e){return{current:e}}function D(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function Q(e,a){de++,ue[de]=e.current,e.current=a}var Z=b(null),pe=b(null),he=b(null),Ne=b(null);function Ie(e,a){switch(Q(he,a),Q(pe,e),Q(Z,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Dp(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Dp(a),e=Lp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(Z),Q(Z,e)}function G(){D(Z),D(pe),D(he)}function Te(e){e.memoizedState!==null&&Q(Ne,e);var a=Z.current,t=Lp(a,e.type);a!==t&&(Q(pe,e),Q(Z,t))}function Re(e){pe.current===e&&(D(Z),D(pe)),Ne.current===e&&(D(Ne),as._currentValue=V)}var Ve,ce;function ta(e){if(Ve===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ve=a&&a[1]||"",ce=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+e+ce}var pa=!1;function Ba(e,a){if(!e||pa)return"";pa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var T=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){T=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){T=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),l=i[0],c=i[1];if(l&&c){var h=l.split(`
`),q=c.split(`
`);for(o=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;o<q.length&&!q[o].includes("DetermineComponentFrameRoot");)o++;if(n===h.length||o===q.length)for(n=h.length-1,o=q.length-1;1<=n&&0<=o&&h[n]!==q[o];)o--;for(;1<=n&&0<=o;n--,o--)if(h[n]!==q[o]){if(n!==1||o!==1)do if(n--,o--,0>o||h[n]!==q[o]){var M=`
`+h[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=o);break}}}finally{pa=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ta(t):""}function co(e,a){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return e.child!==a&&a!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return Ba(e.type,!1);case 11:return Ba(e.type.render,!1);case 1:return Ba(e.type,!0);case 31:return ta("Activity");default:return""}}function $a(e){try{var a="",t=null;do a+=co(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var mn=Object.prototype.hasOwnProperty,fn=u.unstable_scheduleCallback,hn=u.unstable_cancelCallback,Oi=u.unstable_shouldYield,_i=u.unstable_requestPaint,sa=u.unstable_now,Hi=u.unstable_getCurrentPriorityLevel,uo=u.unstable_ImmediatePriority,ms=u.unstable_UserBlockingPriority,gn=u.unstable_NormalPriority,fs=u.unstable_LowPriority,po=u.unstable_IdlePriority,hs=u.log,Ta=u.unstable_setDisableYieldValue,Xt=null,ma=null;function Xa(e){if(typeof hs=="function"&&Ta(e),ma&&typeof ma.setStrictMode=="function")try{ma.setStrictMode(Xt,e)}catch{}}var N=Math.clz32?Math.clz32:qe,B=Math.log,ge=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(B(e)/ge|0)|0}var ye=256,mo=262144,xt=4194304;function Za(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gs(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~i,n!==0?o=Za(n):(l&=c,l!==0?o=Za(l):t||(t=c&~e,t!==0&&(o=Za(t))))):(c=n&~i,c!==0?o=Za(c):l!==0?o=Za(l):t||(t=n&~e,t!==0&&(o=Za(t)))),o===0?0:a!==0&&a!==o&&(a&i)===0&&(i=o&-o,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:o}function fo(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function $m(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hc(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Gi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function ho(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fm(e,a,t,n,o,i){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,h=e.expirationTimes,q=e.hiddenUpdates;for(t=l&~t;0<t;){var M=31-N(t),O=1<<M;c[M]=0,h[M]=-1;var T=q[M];if(T!==null)for(q[M]=null,M=0;M<T.length;M++){var A=T[M];A!==null&&(A.lane&=-536870913)}t&=~O}n!==0&&gc(e,n,0),i!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~a))}function gc(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-N(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function bc(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-N(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}function vc(e,a){var t=a&-a;return t=(t&42)!==0?1:Ri(t),(t&(e.suspendedLanes|a))!==0?0:t}function Ri(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xc(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function yc(e,a){var t=R.p;try{return R.p=e,a()}finally{R.p=t}}var yt=Math.random().toString(36).slice(2),ia="__reactFiber$"+yt,ha="__reactProps$"+yt,bn="__reactContainer$"+yt,Yi="__reactEvents$"+yt,Pm="__reactListeners$"+yt,ef="__reactHandles$"+yt,wc="__reactResources$"+yt,go="__reactMarker$"+yt;function Vi(e){delete e[ia],delete e[ha],delete e[Yi],delete e[Pm],delete e[ef]}function vn(e){var a=e[ia];if(a)return a;for(var t=e.parentNode;t;){if(a=t[bn]||t[ia]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Yp(e);e!==null;){if(t=e[ia])return t;e=Yp(e)}return a}e=t,t=e.parentNode}return null}function xn(e){if(e=e[ia]||e[bn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function bo(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function yn(e){var a=e[wc];return a||(a=e[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function na(e){e[go]=!0}var jc=new Set,kc={};function Zt(e,a){wn(e,a),wn(e+"Capture",a)}function wn(e,a){for(kc[e]=a,e=0;e<a.length;e++)jc.add(a[e])}var af=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zc={},Sc={};function tf(e){return mn.call(Sc,e)?!0:mn.call(zc,e)?!1:af.test(e)?Sc[e]=!0:(zc[e]=!0,!1)}function bs(e,a,t){if(tf(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function vs(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Fa(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function Aa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function nf(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(l){t=""+l,i.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Qi(e){if(!e._valueTracker){var a=Nc(e)?"checked":"value";e._valueTracker=nf(e,a,""+e[a])}}function Ec(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Nc(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var of=/[\n"\\]/g;function Ca(e){return e.replace(of,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Xi(e,a,t,n,o,i,l,c){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Aa(a)):e.value!==""+Aa(a)&&(e.value=""+Aa(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?Zi(e,l,Aa(a)):t!=null?Zi(e,l,Aa(t)):n!=null&&e.removeAttribute("value"),o==null&&i!=null&&(e.defaultChecked=!!i),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Aa(c):e.removeAttribute("name")}function qc(e,a,t,n,o,i,l,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){Qi(e);return}t=t!=null?""+Aa(t):"",a=a!=null?""+Aa(a):t,c||a===e.value||(e.value=a),e.defaultValue=a}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Qi(e)}function Zi(e,a,t){a==="number"&&xs(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function jn(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Aa(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function Tc(e,a,t){if(a!=null&&(a=""+Aa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Aa(t):""}function Ac(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(r(92));if(te(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Aa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Qi(e)}function kn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var sf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cc(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||sf.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Mc(e,a,t){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in a)n=a[o],a.hasOwnProperty(o)&&t[o]!==n&&Cc(e,o,n)}else for(var i in a)a.hasOwnProperty(i)&&Cc(e,i,a[i])}function Ki(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ys(e){return rf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pa(){}var Ji=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zn=null,Sn=null;function Uc(e){var a=xn(e);if(a&&(e=a.stateNode)){var t=e[ha]||null;e:switch(e=a.stateNode,a.type){case"input":if(Xi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ca(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=n[ha]||null;if(!o)throw Error(r(90));Xi(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Ec(n)}break e;case"textarea":Tc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&jn(e,!!t.multiple,a,!1)}}}var Wi=!1;function Dc(e,a,t){if(Wi)return e(a,t);Wi=!0;try{var n=e(a);return n}finally{if(Wi=!1,(zn!==null||Sn!==null)&&(li(),zn&&(a=zn,e=Sn,Sn=zn=null,Uc(a),e)))for(a=0;a<e.length;a++)Uc(e[a])}}function vo(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ha]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,a,typeof t));return t}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$i=!1;if(et)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){$i=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{$i=!1}var wt=null,Fi=null,ws=null;function Lc(){if(ws)return ws;var e,a=Fi,t=a.length,n,o="value"in wt?wt.value:wt.textContent,i=o.length;for(e=0;e<t&&a[e]===o[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===o[i-n];n++);return ws=o.slice(e,1<n?1-n:void 0)}function js(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function Oc(){return!1}function ga(e){function a(t,n,o,i,l){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ks:Oc,this.isPropagationStopped=Oc,this}return S(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),a}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=ga(Kt),yo=S({},Kt,{view:0,detail:0}),cf=ga(yo),Pi,el,wo,Ss=S({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(Pi=e.screenX-wo.screenX,el=e.screenY-wo.screenY):el=Pi=0,wo=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:el}}),_c=ga(Ss),uf=S({},Ss,{dataTransfer:0}),df=ga(uf),pf=S({},yo,{relatedTarget:0}),al=ga(pf),mf=S({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),ff=ga(mf),hf=S({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=ga(hf),bf=S({},Kt,{data:0}),Hc=ga(bf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=yf[e])?!!a[e]:!1}function tl(){return wf}var jf=S({},yo,{key:function(e){if(e.key){var a=vf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=ga(jf),zf=S({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=ga(zf),Sf=S({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Nf=ga(Sf),Ef=S({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=ga(Ef),Tf=S({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Af=ga(Tf),Cf=S({},Kt,{newState:0,oldState:0}),Mf=ga(Cf),Uf=[9,13,27,32],nl=et&&"CompositionEvent"in window,jo=null;et&&"documentMode"in document&&(jo=document.documentMode);var Df=et&&"TextEvent"in window&&!jo,Rc=et&&(!nl||jo&&8<jo&&11>=jo),Bc=" ",Yc=!1;function Vc(e,a){switch(e){case"keyup":return Uf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Lf(e,a){switch(e){case"compositionend":return Qc(a);case"keypress":return a.which!==32?null:(Yc=!0,Bc);case"textInput":return e=a.data,e===Bc&&Yc?null:e;default:return null}}function Of(e,a){if(Nn)return e==="compositionend"||!nl&&Vc(e,a)?(e=Lc(),ws=Fi=wt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Rc&&a.locale!=="ko"?null:a.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!_f[e.type]:a==="textarea"}function Zc(e,a,t,n){zn?Sn?Sn.push(n):Sn=[n]:zn=n,a=fi(a,"onChange"),0<a.length&&(t=new zs("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var ko=null,zo=null;function Hf(e){qp(e,0)}function Ns(e){var a=bo(e);if(Ec(a))return e}function Kc(e,a){if(e==="change")return a}var Jc=!1;if(et){var ol;if(et){var sl="oninput"in document;if(!sl){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),sl=typeof Ic.oninput=="function"}ol=sl}else ol=!1;Jc=ol&&(!document.documentMode||9<document.documentMode)}function Wc(){ko&&(ko.detachEvent("onpropertychange",$c),zo=ko=null)}function $c(e){if(e.propertyName==="value"&&Ns(zo)){var a=[];Zc(a,zo,e,Ii(e)),Dc(Hf,a)}}function Gf(e,a,t){e==="focusin"?(Wc(),ko=a,zo=t,ko.attachEvent("onpropertychange",$c)):e==="focusout"&&Wc()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(zo)}function Bf(e,a){if(e==="click")return Ns(a)}function Yf(e,a){if(e==="input"||e==="change")return Ns(a)}function Vf(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ja=typeof Object.is=="function"?Object.is:Vf;function So(e,a){if(ja(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!mn.call(a,o)||!ja(e[o],a[o]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,a){var t=Fc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fc(t)}}function eu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?eu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function au(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=xs(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=xs(e.document)}return a}function il(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Qf=et&&"documentMode"in document&&11>=document.documentMode,En=null,ll=null,No=null,rl=!1;function tu(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rl||En==null||En!==xs(n)||(n=En,"selectionStart"in n&&il(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),No&&So(No,n)||(No=n,n=fi(ll,"onSelect"),0<n.length&&(a=new zs("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=En)))}function Jt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var qn={animationend:Jt("Animation","AnimationEnd"),animationiteration:Jt("Animation","AnimationIteration"),animationstart:Jt("Animation","AnimationStart"),transitionrun:Jt("Transition","TransitionRun"),transitionstart:Jt("Transition","TransitionStart"),transitioncancel:Jt("Transition","TransitionCancel"),transitionend:Jt("Transition","TransitionEnd")},cl={},nu={};et&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function It(e){if(cl[e])return cl[e];if(!qn[e])return e;var a=qn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in nu)return cl[e]=a[t];return e}var ou=It("animationend"),su=It("animationiteration"),iu=It("animationstart"),Xf=It("transitionrun"),Zf=It("transitionstart"),Kf=It("transitioncancel"),lu=It("transitionend"),ru=new Map,ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ul.push("scrollEnd");function Ya(e,a){ru.set(e,a),Zt(a,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ma=[],Tn=0,dl=0;function qs(){for(var e=Tn,a=dl=Tn=0;a<e;){var t=Ma[a];Ma[a++]=null;var n=Ma[a];Ma[a++]=null;var o=Ma[a];Ma[a++]=null;var i=Ma[a];if(Ma[a++]=null,n!==null&&o!==null){var l=n.pending;l===null?o.next=o:(o.next=l.next,l.next=o),n.pending=o}i!==0&&cu(t,o,i)}}function Ts(e,a,t,n){Ma[Tn++]=e,Ma[Tn++]=a,Ma[Tn++]=t,Ma[Tn++]=n,dl|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function pl(e,a,t,n){return Ts(e,a,t,n),As(e)}function Wt(e,a){return Ts(e,null,null,a),As(e)}function cu(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var o=!1,i=e.return;i!==null;)i.childLanes|=t,n=i.alternate,n!==null&&(n.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(o=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,o&&a!==null&&(o=31-N(t),e=i.hiddenUpdates,n=e[o],n===null?e[o]=[a]:n.push(a),a.lane=t|536870912),i):null}function As(e){if(50<Jo)throw Jo=0,wr=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var An={};function Jf(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ka(e,a,t,n){return new Jf(e,a,t,n)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function at(e,a){var t=e.alternate;return t===null?(t=ka(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function uu(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Cs(e,a,t,n,o,i){var l=0;if(n=e,typeof e=="function")ml(e)&&(l=1);else if(typeof e=="string")l=Ph(e,t,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=ka(31,t,a,o),e.elementType=ve,e.lanes=i,e;case K:return $t(t.children,o,i,a);case le:l=8,o|=24;break;case $:return e=ka(12,t,a,o|2),e.elementType=$,e.lanes=i,e;case ne:return e=ka(13,t,a,o),e.elementType=ne,e.lanes=i,e;case ie:return e=ka(19,t,a,o),e.elementType=ie,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:l=10;break e;case W:l=9;break e;case P:l=11;break e;case Y:l=14;break e;case me:l=16,n=null;break e}l=29,t=Error(r(130,e===null?"null":typeof e,"")),n=null}return a=ka(l,t,a,o),a.elementType=e,a.type=n,a.lanes=i,a}function $t(e,a,t,n){return e=ka(7,e,n,a),e.lanes=t,e}function fl(e,a,t){return e=ka(6,e,null,a),e.lanes=t,e}function du(e){var a=ka(18,null,null,0);return a.stateNode=e,a}function hl(e,a,t){return a=ka(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var pu=new WeakMap;function Ua(e,a){if(typeof e=="object"&&e!==null){var t=pu.get(e);return t!==void 0?t:(a={value:e,source:a,stack:$a(a)},pu.set(e,a),a)}return{value:e,source:a,stack:$a(a)}}var Cn=[],Mn=0,Ms=null,Eo=0,Da=[],La=0,jt=null,Ka=1,Ja="";function tt(e,a){Cn[Mn++]=Eo,Cn[Mn++]=Ms,Ms=e,Eo=a}function mu(e,a,t){Da[La++]=Ka,Da[La++]=Ja,Da[La++]=jt,jt=e;var n=Ka;e=Ja;var o=32-N(n)-1;n&=~(1<<o),t+=1;var i=32-N(a)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Ka=1<<32-N(a)+o|t<<o|n,Ja=i+e}else Ka=1<<i|t<<o|n,Ja=e}function gl(e){e.return!==null&&(tt(e,1),mu(e,1,0))}function bl(e){for(;e===Ms;)Ms=Cn[--Mn],Cn[Mn]=null,Eo=Cn[--Mn],Cn[Mn]=null;for(;e===jt;)jt=Da[--La],Da[La]=null,Ja=Da[--La],Da[La]=null,Ka=Da[--La],Da[La]=null}function fu(e,a){Da[La++]=Ka,Da[La++]=Ja,Da[La++]=jt,Ka=a.id,Ja=a.overflow,jt=e}var la=null,Be=null,Ee=!1,kt=null,Oa=!1,vl=Error(r(519));function zt(e){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qo(Ua(a,e)),vl}function hu(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[ia]=e,a[ha]=n,t){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(t=0;t<Wo.length;t++)ke(Wo[t],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":ke("invalid",a),qc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ke("invalid",a);break;case"textarea":ke("invalid",a),Ac(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Mp(a.textContent,t)?(n.popover!=null&&(ke("beforetoggle",a),ke("toggle",a)),n.onScroll!=null&&ke("scroll",a),n.onScrollEnd!=null&&ke("scrollend",a),n.onClick!=null&&(a.onclick=Pa),a=!0):a=!1,a||zt(e,!0)}function gu(e){for(la=e.return;la;)switch(la.tag){case 5:case 31:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:la=la.return}}function Un(e){if(e!==la)return!1;if(!Ee)return gu(e),Ee=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Or(e.type,e.memoizedProps)),t=!t),t&&Be&&zt(e),gu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Bp(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Bp(e)}else a===27?(a=Be,Ht(e.type)?(e=Br,Br=null,Be=e):Be=a):Be=la?Ha(e.stateNode.nextSibling):null;return!0}function Ft(){Be=la=null,Ee=!1}function xl(){var e=kt;return e!==null&&(ya===null?ya=e:ya.push.apply(ya,e),kt=null),e}function qo(e){kt===null?kt=[e]:kt.push(e)}var yl=b(null),Pt=null,nt=null;function St(e,a,t){Q(yl,a._currentValue),a._currentValue=t}function ot(e){e._currentValue=yl.current,D(yl)}function wl(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function jl(e,a,t,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var i=o.dependencies;if(i!==null){var l=o.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=o;for(var h=0;h<a.length;h++)if(c.context===a[h]){i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),wl(i.return,t,e),n||(l=null);break e}i=c.next}}else if(o.tag===18){if(l=o.return,l===null)throw Error(r(341));l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),wl(l,t,e),l=null}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}}function Dn(e,a,t,n){e=null;for(var o=a,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var l=o.alternate;if(l===null)throw Error(r(387));if(l=l.memoizedProps,l!==null){var c=o.type;ja(o.pendingProps.value,l.value)||(e!==null?e.push(c):e=[c])}}else if(o===Ne.current){if(l=o.alternate,l===null)throw Error(r(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(as):e=[as])}o=o.return}e!==null&&jl(a,e,t,n),a.flags|=262144}function Us(e){for(e=e.firstContext;e!==null;){if(!ja(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function en(e){Pt=e,nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return bu(Pt,e)}function Ds(e,a){return Pt===null&&en(e),bu(e,a)}function bu(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},nt===null){if(e===null)throw Error(r(308));nt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else nt=nt.next=a;return t}var If=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Wf=u.unstable_scheduleCallback,$f=u.unstable_NormalPriority,We={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kl(){return{controller:new If,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&Wf($f,function(){e.controller.abort()})}var Ao=null,zl=0,Ln=0,On=null;function Ff(e,a){if(Ao===null){var t=Ao=[];zl=0,Ln=Er(),On={status:"pending",value:void 0,then:function(n){t.push(n)}}}return zl++,a.then(vu,vu),a}function vu(){if(--zl===0&&Ao!==null){On!==null&&(On.status="fulfilled");var e=Ao;Ao=null,Ln=0,On=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Pf(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var xu=z.S;z.S=function(e,a){tp=sa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ff(e,a),xu!==null&&xu(e,a)};var an=b(null);function Sl(){var e=an.current;return e!==null?e:Ge.pooledCache}function Ls(e,a){a===null?Q(an,an.current):Q(an,a.pool)}function yu(){var e=Sl();return e===null?null:{parent:We._currentValue,pool:e}}var _n=Error(r(460)),Nl=Error(r(474)),Os=Error(r(542)),_s={then:function(){}};function wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ju(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Pa,Pa),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,zu(e),e;default:if(typeof a.status=="string")a.then(Pa,Pa);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=n}},function(n){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,zu(e),e}throw nn=a,_n}}function tn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(nn=t,_n):t}}var nn=null;function ku(){if(nn===null)throw Error(r(459));var e=nn;return nn=null,e}function zu(e){if(e===_n||e===Os)throw Error(r(483))}var Hn=null,Co=0;function Hs(e){var a=Co;return Co+=1,Hn===null&&(Hn=[]),ju(Hn,e,a)}function Mo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Gs(e,a){throw a.$$typeof===U?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Su(e){function a(k,v){if(e){var E=k.deletions;E===null?(k.deletions=[v],k.flags|=16):E.push(v)}}function t(k,v){if(!e)return null;for(;v!==null;)a(k,v),v=v.sibling;return null}function n(k){for(var v=new Map;k!==null;)k.key!==null?v.set(k.key,k):v.set(k.index,k),k=k.sibling;return v}function o(k,v){return k=at(k,v),k.index=0,k.sibling=null,k}function i(k,v,E){return k.index=E,e?(E=k.alternate,E!==null?(E=E.index,E<v?(k.flags|=67108866,v):E):(k.flags|=67108866,v)):(k.flags|=1048576,v)}function l(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function c(k,v,E,L){return v===null||v.tag!==6?(v=fl(E,k.mode,L),v.return=k,v):(v=o(v,E),v.return=k,v)}function h(k,v,E,L){var se=E.type;return se===K?M(k,v,E.props.children,L,E.key):v!==null&&(v.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&tn(se)===v.type)?(v=o(v,E.props),Mo(v,E),v.return=k,v):(v=Cs(E.type,E.key,E.props,null,k.mode,L),Mo(v,E),v.return=k,v)}function q(k,v,E,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=hl(E,k.mode,L),v.return=k,v):(v=o(v,E.children||[]),v.return=k,v)}function M(k,v,E,L,se){return v===null||v.tag!==7?(v=$t(E,k.mode,L,se),v.return=k,v):(v=o(v,E),v.return=k,v)}function O(k,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=fl(""+v,k.mode,E),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _:return E=Cs(v.type,v.key,v.props,null,k.mode,E),Mo(E,v),E.return=k,E;case J:return v=hl(v,k.mode,E),v.return=k,v;case me:return v=tn(v),O(k,v,E)}if(te(v)||C(v))return v=$t(v,k.mode,E,null),v.return=k,v;if(typeof v.then=="function")return O(k,Hs(v),E);if(v.$$typeof===ae)return O(k,Ds(k,v),E);Gs(k,v)}return null}function T(k,v,E,L){var se=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return se!==null?null:c(k,v,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _:return E.key===se?h(k,v,E,L):null;case J:return E.key===se?q(k,v,E,L):null;case me:return E=tn(E),T(k,v,E,L)}if(te(E)||C(E))return se!==null?null:M(k,v,E,L,null);if(typeof E.then=="function")return T(k,v,Hs(E),L);if(E.$$typeof===ae)return T(k,v,Ds(k,E),L);Gs(k,E)}return null}function A(k,v,E,L,se){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return k=k.get(E)||null,c(v,k,""+L,se);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _:return k=k.get(L.key===null?E:L.key)||null,h(v,k,L,se);case J:return k=k.get(L.key===null?E:L.key)||null,q(v,k,L,se);case me:return L=tn(L),A(k,v,E,L,se)}if(te(L)||C(L))return k=k.get(E)||null,M(v,k,L,se,null);if(typeof L.then=="function")return A(k,v,E,Hs(L),se);if(L.$$typeof===ae)return A(k,v,E,Ds(v,L),se);Gs(v,L)}return null}function I(k,v,E,L){for(var se=null,Ae=null,ee=v,xe=v=0,Se=null;ee!==null&&xe<E.length;xe++){ee.index>xe?(Se=ee,ee=null):Se=ee.sibling;var Ce=T(k,ee,E[xe],L);if(Ce===null){ee===null&&(ee=Se);break}e&&ee&&Ce.alternate===null&&a(k,ee),v=i(Ce,v,xe),Ae===null?se=Ce:Ae.sibling=Ce,Ae=Ce,ee=Se}if(xe===E.length)return t(k,ee),Ee&&tt(k,xe),se;if(ee===null){for(;xe<E.length;xe++)ee=O(k,E[xe],L),ee!==null&&(v=i(ee,v,xe),Ae===null?se=ee:Ae.sibling=ee,Ae=ee);return Ee&&tt(k,xe),se}for(ee=n(ee);xe<E.length;xe++)Se=A(ee,k,xe,E[xe],L),Se!==null&&(e&&Se.alternate!==null&&ee.delete(Se.key===null?xe:Se.key),v=i(Se,v,xe),Ae===null?se=Se:Ae.sibling=Se,Ae=Se);return e&&ee.forEach(function(Vt){return a(k,Vt)}),Ee&&tt(k,xe),se}function re(k,v,E,L){if(E==null)throw Error(r(151));for(var se=null,Ae=null,ee=v,xe=v=0,Se=null,Ce=E.next();ee!==null&&!Ce.done;xe++,Ce=E.next()){ee.index>xe?(Se=ee,ee=null):Se=ee.sibling;var Vt=T(k,ee,Ce.value,L);if(Vt===null){ee===null&&(ee=Se);break}e&&ee&&Vt.alternate===null&&a(k,ee),v=i(Vt,v,xe),Ae===null?se=Vt:Ae.sibling=Vt,Ae=Vt,ee=Se}if(Ce.done)return t(k,ee),Ee&&tt(k,xe),se;if(ee===null){for(;!Ce.done;xe++,Ce=E.next())Ce=O(k,Ce.value,L),Ce!==null&&(v=i(Ce,v,xe),Ae===null?se=Ce:Ae.sibling=Ce,Ae=Ce);return Ee&&tt(k,xe),se}for(ee=n(ee);!Ce.done;xe++,Ce=E.next())Ce=A(ee,k,xe,Ce.value,L),Ce!==null&&(e&&Ce.alternate!==null&&ee.delete(Ce.key===null?xe:Ce.key),v=i(Ce,v,xe),Ae===null?se=Ce:Ae.sibling=Ce,Ae=Ce);return e&&ee.forEach(function(ug){return a(k,ug)}),Ee&&tt(k,xe),se}function _e(k,v,E,L){if(typeof E=="object"&&E!==null&&E.type===K&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case _:e:{for(var se=E.key;v!==null;){if(v.key===se){if(se=E.type,se===K){if(v.tag===7){t(k,v.sibling),L=o(v,E.props.children),L.return=k,k=L;break e}}else if(v.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&tn(se)===v.type){t(k,v.sibling),L=o(v,E.props),Mo(L,E),L.return=k,k=L;break e}t(k,v);break}else a(k,v);v=v.sibling}E.type===K?(L=$t(E.props.children,k.mode,L,E.key),L.return=k,k=L):(L=Cs(E.type,E.key,E.props,null,k.mode,L),Mo(L,E),L.return=k,k=L)}return l(k);case J:e:{for(se=E.key;v!==null;){if(v.key===se)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){t(k,v.sibling),L=o(v,E.children||[]),L.return=k,k=L;break e}else{t(k,v);break}else a(k,v);v=v.sibling}L=hl(E,k.mode,L),L.return=k,k=L}return l(k);case me:return E=tn(E),_e(k,v,E,L)}if(te(E))return I(k,v,E,L);if(C(E)){if(se=C(E),typeof se!="function")throw Error(r(150));return E=se.call(E),re(k,v,E,L)}if(typeof E.then=="function")return _e(k,v,Hs(E),L);if(E.$$typeof===ae)return _e(k,v,Ds(k,E),L);Gs(k,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(t(k,v.sibling),L=o(v,E),L.return=k,k=L):(t(k,v),L=fl(E,k.mode,L),L.return=k,k=L),l(k)):t(k,v)}return function(k,v,E,L){try{Co=0;var se=_e(k,v,E,L);return Hn=null,se}catch(ee){if(ee===_n||ee===Os)throw ee;var Ae=ka(29,ee,null,k.mode);return Ae.lanes=L,Ae.return=k,Ae}}}var on=Su(!0),Nu=Su(!1),Nt=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ql(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Et(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Me&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,a=As(e),cu(e,null,t),a}return Ts(e,n,a,t),As(e)}function Uo(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,bc(e,t)}}function Tl(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=a:i=i.next=a}else o=i=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Al=!1;function Do(){if(Al){var e=On;if(e!==null)throw e}}function Lo(e,a,t,n){Al=!1;var o=e.updateQueue;Nt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var h=c,q=h.next;h.next=null,l===null?i=q:l.next=q,l=h;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==l&&(c===null?M.firstBaseUpdate=q:c.next=q,M.lastBaseUpdate=h))}if(i!==null){var O=o.baseState;l=0,M=q=h=null,c=i;do{var T=c.lane&-536870913,A=T!==c.lane;if(A?(ze&T)===T:(n&T)===T){T!==0&&T===Ln&&(Al=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var I=e,re=c;T=a;var _e=t;switch(re.tag){case 1:if(I=re.payload,typeof I=="function"){O=I.call(_e,O,T);break e}O=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=re.payload,T=typeof I=="function"?I.call(_e,O,T):I,T==null)break e;O=S({},O,T);break e;case 2:Nt=!0}}T=c.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=o.callbacks,A===null?o.callbacks=[T]:A.push(T))}else A={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(q=M=A,h=O):M=M.next=A,l|=T;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;A=c,c=A.next,A.next=null,o.lastBaseUpdate=A,o.shared.pending=null}}while(!0);M===null&&(h=O),o.baseState=h,o.firstBaseUpdate=q,o.lastBaseUpdate=M,i===null&&(o.shared.lanes=0),Ut|=l,e.lanes=l,e.memoizedState=O}}function Eu(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function qu(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Eu(t[e],a)}var Gn=b(null),Rs=b(0);function Tu(e,a){e=mt,Q(Rs,e),Q(Gn,a),mt=e|a.baseLanes}function Cl(){Q(Rs,mt),Q(Gn,Gn.current)}function Ml(){mt=Rs.current,D(Gn),D(Rs)}var za=b(null),_a=null;function Tt(e){var a=e.alternate;Q(Ke,Ke.current&1),Q(za,e),_a===null&&(a===null||Gn.current!==null||a.memoizedState!==null)&&(_a=e)}function Ul(e){Q(Ke,Ke.current),Q(za,e),_a===null&&(_a=e)}function Au(e){e.tag===22?(Q(Ke,Ke.current),Q(za,e),_a===null&&(_a=e)):At()}function At(){Q(Ke,Ke.current),Q(za,za.current)}function Sa(e){D(za),_a===e&&(_a=null),D(Ke)}var Ke=b(0);function Bs(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Gr(t)||Rr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var st=0,be=null,Le=null,$e=null,Ys=!1,Rn=!1,sn=!1,Vs=0,Oo=0,Bn=null,eh=0;function Xe(){throw Error(r(321))}function Dl(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ja(e[t],a[t]))return!1;return!0}function Ll(e,a,t,n,o,i){return st=i,be=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=e===null||e.memoizedState===null?md:Wl,sn=!1,i=t(n,o),sn=!1,Rn&&(i=Mu(a,t,n,o)),Cu(e),i}function Cu(e){z.H=Go;var a=Le!==null&&Le.next!==null;if(st=0,$e=Le=be=null,Ys=!1,Oo=0,Bn=null,a)throw Error(r(300));e===null||Fe||(e=e.dependencies,e!==null&&Us(e)&&(Fe=!0))}function Mu(e,a,t,n){be=e;var o=0;do{if(Rn&&(Bn=null),Oo=0,Rn=!1,25<=o)throw Error(r(301));if(o+=1,$e=Le=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=fd,i=a(t,n)}while(Rn);return i}function ah(){var e=z.H,a=e.useState()[0];return a=typeof a.then=="function"?_o(a):a,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(be.flags|=1024),a}function Ol(){var e=Vs!==0;return Vs=0,e}function _l(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Hl(e){if(Ys){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ys=!1}st=0,$e=Le=be=null,Rn=!1,Oo=Vs=0,Bn=null}function fa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?be.memoizedState=$e=e:$e=$e.next=e,$e}function Je(){if(Le===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var a=$e===null?be.memoizedState:$e.next;if(a!==null)$e=a,Le=e;else{if(e===null)throw be.alternate===null?Error(r(467)):Error(r(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?be.memoizedState=$e=e:$e=$e.next=e}return $e}function Qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(e){var a=Oo;return Oo+=1,Bn===null&&(Bn=[]),e=ju(Bn,e,a),a=be,($e===null?a.memoizedState:$e.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?md:Wl),e}function Xs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _o(e);if(e.$$typeof===ae)return ra(e)}throw Error(r(438,String(e)))}function Gl(e){var a=null,t=be.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=be.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Qs(),be.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=X;return a.index++,t}function it(e,a){return typeof a=="function"?a(e):a}function Zs(e){var a=Je();return Rl(a,Le,e)}function Rl(e,a,t){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=t;var o=e.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}a.baseQueue=o=i,n.pending=null}if(i=e.baseState,o===null)e.memoizedState=i;else{a=o.next;var c=l=null,h=null,q=a,M=!1;do{var O=q.lane&-536870913;if(O!==q.lane?(ze&O)===O:(st&O)===O){var T=q.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),O===Ln&&(M=!0);else if((st&T)===T){q=q.next,T===Ln&&(M=!0);continue}else O={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},h===null?(c=h=O,l=i):h=h.next=O,be.lanes|=T,Ut|=T;O=q.action,sn&&t(i,O),i=q.hasEagerState?q.eagerState:t(i,O)}else T={lane:O,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},h===null?(c=h=T,l=i):h=h.next=T,be.lanes|=O,Ut|=O;q=q.next}while(q!==null&&q!==a);if(h===null?l=i:h.next=c,!ja(i,e.memoizedState)&&(Fe=!0,M&&(t=On,t!==null)))throw t;e.memoizedState=i,e.baseState=l,e.baseQueue=h,n.lastRenderedState=i}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Bl(e){var a=Je(),t=a.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,i=a.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ja(i,a.memoizedState)||(Fe=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,n]}function Uu(e,a,t){var n=be,o=Je(),i=Ee;if(i){if(t===void 0)throw Error(r(407));t=t()}else t=a();var l=!ja((Le||o).memoizedState,t);if(l&&(o.memoizedState=t,Fe=!0),o=o.queue,Ql(Ou.bind(null,n,o,e),[e]),o.getSnapshot!==a||l||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Yn(9,{destroy:void 0},Lu.bind(null,n,o,t,a),null),Ge===null)throw Error(r(349));i||(st&127)!==0||Du(n,a,t)}return t}function Du(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=be.updateQueue,a===null?(a=Qs(),be.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Lu(e,a,t,n){a.value=t,a.getSnapshot=n,_u(a)&&Hu(e)}function Ou(e,a,t){return t(function(){_u(a)&&Hu(e)})}function _u(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ja(e,t)}catch{return!0}}function Hu(e){var a=Wt(e,2);a!==null&&wa(a,e,2)}function Yl(e){var a=fa();if(typeof e=="function"){var t=e;if(e=t(),sn){Xa(!0);try{t()}finally{Xa(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:e},a}function Gu(e,a,t,n){return e.baseState=t,Rl(e,Le,typeof n=="function"?n:it)}function th(e,a,t,n,o){if(Is(e))throw Error(r(485));if(e=a.action,e!==null){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};z.T!==null?t(!0):i.isTransition=!1,n(i),t=a.pending,t===null?(i.next=a.pending=i,Ru(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Ru(e,a){var t=a.action,n=a.payload,o=e.state;if(a.isTransition){var i=z.T,l={};z.T=l;try{var c=t(o,n),h=z.S;h!==null&&h(l,c),Bu(e,a,c)}catch(q){Vl(e,a,q)}finally{i!==null&&l.types!==null&&(i.types=l.types),z.T=i}}else try{i=t(o,n),Bu(e,a,i)}catch(q){Vl(e,a,q)}}function Bu(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Yu(e,a,n)},function(n){return Vl(e,a,n)}):Yu(e,a,t)}function Yu(e,a,t){a.status="fulfilled",a.value=t,Vu(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Ru(e,t)))}function Vl(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Vu(a),a=a.next;while(a!==n)}e.action=null}function Vu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Qu(e,a){return a}function Xu(e,a){if(Ee){var t=Ge.formState;if(t!==null){e:{var n=be;if(Ee){if(Be){a:{for(var o=Be,i=Oa;o.nodeType!==8;){if(!i){o=null;break a}if(o=Ha(o.nextSibling),o===null){o=null;break a}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){Be=Ha(o.nextSibling),n=o.data==="F!";break e}}zt(n)}n=!1}n&&(a=t[0])}}return t=fa(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qu,lastRenderedState:a},t.queue=n,t=ud.bind(null,be,n),n.dispatch=t,n=Yl(!1),i=Il.bind(null,be,!1,n.queue),n=fa(),o={state:a,dispatch:null,action:e,pending:null},n.queue=o,t=th.bind(null,be,o,i,t),o.dispatch=t,n.memoizedState=e,[a,t,!1]}function Zu(e){var a=Je();return Ku(a,Le,e)}function Ku(e,a,t){if(a=Rl(e,a,Qu)[0],e=Zs(it)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=_o(a)}catch(l){throw l===_n?Os:l}else n=a;a=Je();var o=a.queue,i=o.dispatch;return t!==a.memoizedState&&(be.flags|=2048,Yn(9,{destroy:void 0},nh.bind(null,o,t),null)),[n,i,e]}function nh(e,a){e.action=a}function Ju(e){var a=Je(),t=Le;if(t!==null)return Ku(a,t,e);Je(),a=a.memoizedState,t=Je();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Yn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=be.updateQueue,a===null&&(a=Qs(),be.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Iu(){return Je().memoizedState}function Ks(e,a,t,n){var o=fa();be.flags|=e,o.memoizedState=Yn(1|a,{destroy:void 0},t,n===void 0?null:n)}function Js(e,a,t,n){var o=Je();n=n===void 0?null:n;var i=o.memoizedState.inst;Le!==null&&n!==null&&Dl(n,Le.memoizedState.deps)?o.memoizedState=Yn(a,i,t,n):(be.flags|=e,o.memoizedState=Yn(1|a,i,t,n))}function Wu(e,a){Ks(8390656,8,e,a)}function Ql(e,a){Js(2048,8,e,a)}function oh(e){be.flags|=4;var a=be.updateQueue;if(a===null)a=Qs(),be.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function $u(e){var a=Je().memoizedState;return oh({ref:a,nextImpl:e}),function(){if((Me&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function Fu(e,a){return Js(4,2,e,a)}function Pu(e,a){return Js(4,4,e,a)}function ed(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ad(e,a,t){t=t!=null?t.concat([e]):null,Js(4,4,ed.bind(null,a,e),t)}function Xl(){}function td(e,a){var t=Je();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Dl(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function nd(e,a){var t=Je();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Dl(a,n[1]))return n[0];if(n=e(),sn){Xa(!0);try{e()}finally{Xa(!1)}}return t.memoizedState=[n,a],n}function Zl(e,a,t){return t===void 0||(st&1073741824)!==0&&(ze&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=op(),be.lanes|=e,Ut|=e,t)}function od(e,a,t,n){return ja(t,a)?t:Gn.current!==null?(e=Zl(e,t,n),ja(e,a)||(Fe=!0),e):(st&42)===0||(st&1073741824)!==0&&(ze&261930)===0?(Fe=!0,e.memoizedState=t):(e=op(),be.lanes|=e,Ut|=e,a)}function sd(e,a,t,n,o){var i=R.p;R.p=i!==0&&8>i?i:8;var l=z.T,c={};z.T=c,Il(e,!1,a,t);try{var h=o(),q=z.S;if(q!==null&&q(c,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var M=Pf(h,n);Ho(e,a,M,qa(e))}else Ho(e,a,n,qa(e))}catch(O){Ho(e,a,{then:function(){},status:"rejected",reason:O},qa())}finally{R.p=i,l!==null&&c.types!==null&&(l.types=c.types),z.T=l}}function sh(){}function Kl(e,a,t,n){if(e.tag!==5)throw Error(r(476));var o=id(e).queue;sd(e,o,a,V,t===null?sh:function(){return ld(e),t(n)})}function id(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:V},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function ld(e){var a=id(e);a.next===null&&(a=e.alternate.memoizedState),Ho(e,a.next.queue,{},qa())}function Jl(){return ra(as)}function rd(){return Je().memoizedState}function cd(){return Je().memoizedState}function ih(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=qa();e=Et(t);var n=qt(a,e,t);n!==null&&(wa(n,a,t),Uo(n,a,t)),a={cache:kl()},e.payload=a;return}a=a.return}}function lh(e,a,t){var n=qa();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Is(e)?dd(a,t):(t=pl(e,a,t,n),t!==null&&(wa(t,e,n),pd(t,a,n)))}function ud(e,a,t){var n=qa();Ho(e,a,t,n)}function Ho(e,a,t,n){var o={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Is(e))dd(a,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var l=a.lastRenderedState,c=i(l,t);if(o.hasEagerState=!0,o.eagerState=c,ja(c,l))return Ts(e,a,o,0),Ge===null&&qs(),!1}catch{}if(t=pl(e,a,o,n),t!==null)return wa(t,e,n),pd(t,a,n),!0}return!1}function Il(e,a,t,n){if(n={lane:2,revertLane:Er(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(a)throw Error(r(479))}else a=pl(e,t,n,2),a!==null&&wa(a,e,2)}function Is(e){var a=e.alternate;return e===be||a!==null&&a===be}function dd(e,a){Rn=Ys=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function pd(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,bc(e,t)}}var Go={readContext:ra,use:Xs,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Go.useEffectEvent=Xe;var md={readContext:ra,use:Xs,useCallback:function(e,a){return fa().memoizedState=[e,a===void 0?null:a],e},useContext:ra,useEffect:Wu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Ks(4194308,4,ed.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Ks(4194308,4,e,a)},useInsertionEffect:function(e,a){Ks(4,2,e,a)},useMemo:function(e,a){var t=fa();a=a===void 0?null:a;var n=e();if(sn){Xa(!0);try{e()}finally{Xa(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=fa();if(t!==void 0){var o=t(a);if(sn){Xa(!0);try{t(a)}finally{Xa(!1)}}}else o=a;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=lh.bind(null,be,e),[n.memoizedState,e]},useRef:function(e){var a=fa();return e={current:e},a.memoizedState=e},useState:function(e){e=Yl(e);var a=e.queue,t=ud.bind(null,be,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Xl,useDeferredValue:function(e,a){var t=fa();return Zl(t,e,a)},useTransition:function(){var e=Yl(!1);return e=sd.bind(null,be,e.queue,!0,!1),fa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=be,o=fa();if(Ee){if(t===void 0)throw Error(r(407));t=t()}else{if(t=a(),Ge===null)throw Error(r(349));(ze&127)!==0||Du(n,a,t)}o.memoizedState=t;var i={value:t,getSnapshot:a};return o.queue=i,Wu(Ou.bind(null,n,i,e),[e]),n.flags|=2048,Yn(9,{destroy:void 0},Lu.bind(null,n,i,t,a),null),t},useId:function(){var e=fa(),a=Ge.identifierPrefix;if(Ee){var t=Ja,n=Ka;t=(n&~(1<<32-N(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Vs++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=eh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Jl,useFormState:Xu,useActionState:Xu,useOptimistic:function(e){var a=fa();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Il.bind(null,be,!0,t),t.dispatch=a,[e,a]},useMemoCache:Gl,useCacheRefresh:function(){return fa().memoizedState=ih.bind(null,be)},useEffectEvent:function(e){var a=fa(),t={impl:e};return a.memoizedState=t,function(){if((Me&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}},Wl={readContext:ra,use:Xs,useCallback:td,useContext:ra,useEffect:Ql,useImperativeHandle:ad,useInsertionEffect:Fu,useLayoutEffect:Pu,useMemo:nd,useReducer:Zs,useRef:Iu,useState:function(){return Zs(it)},useDebugValue:Xl,useDeferredValue:function(e,a){var t=Je();return od(t,Le.memoizedState,e,a)},useTransition:function(){var e=Zs(it)[0],a=Je().memoizedState;return[typeof e=="boolean"?e:_o(e),a]},useSyncExternalStore:Uu,useId:rd,useHostTransitionStatus:Jl,useFormState:Zu,useActionState:Zu,useOptimistic:function(e,a){var t=Je();return Gu(t,Le,e,a)},useMemoCache:Gl,useCacheRefresh:cd};Wl.useEffectEvent=$u;var fd={readContext:ra,use:Xs,useCallback:td,useContext:ra,useEffect:Ql,useImperativeHandle:ad,useInsertionEffect:Fu,useLayoutEffect:Pu,useMemo:nd,useReducer:Bl,useRef:Iu,useState:function(){return Bl(it)},useDebugValue:Xl,useDeferredValue:function(e,a){var t=Je();return Le===null?Zl(t,e,a):od(t,Le.memoizedState,e,a)},useTransition:function(){var e=Bl(it)[0],a=Je().memoizedState;return[typeof e=="boolean"?e:_o(e),a]},useSyncExternalStore:Uu,useId:rd,useHostTransitionStatus:Jl,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,a){var t=Je();return Le!==null?Gu(t,Le,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Gl,useCacheRefresh:cd};fd.useEffectEvent=$u;function $l(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:S({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Fl={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=qa(),o=Et(n);o.payload=a,t!=null&&(o.callback=t),a=qt(e,o,n),a!==null&&(wa(a,e,n),Uo(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=qa(),o=Et(n);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=qt(e,o,n),a!==null&&(wa(a,e,n),Uo(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=qa(),n=Et(t);n.tag=2,a!=null&&(n.callback=a),a=qt(e,n,t),a!==null&&(wa(a,e,t),Uo(a,e,t))}};function hd(e,a,t,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):a.prototype&&a.prototype.isPureReactComponent?!So(t,n)||!So(o,i):!0}function gd(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Fl.enqueueReplaceState(a,a.state,null)}function ln(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=S({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function bd(e){Es(e)}function vd(e){console.error(e)}function xd(e){Es(e)}function Ws(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function yd(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Pl(e,a,t){return t=Et(t),t.tag=3,t.payload={element:null},t.callback=function(){Ws(e,a)},t}function wd(e){return e=Et(e),e.tag=3,e}function jd(e,a,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=n.value;e.payload=function(){return o(i)},e.callback=function(){yd(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){yd(a,t,n),typeof o!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function rh(e,a,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Dn(a,t,o,!0),t=za.current,t!==null){switch(t.tag){case 31:case 13:return _a===null?ri():t.alternate===null&&Ze===0&&(Ze=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===_s?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),zr(e,n,o)),!1;case 22:return t.flags|=65536,n===_s?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),zr(e,n,o)),!1}throw Error(r(435,t.tag))}return zr(e,n,o),ri(),!1}if(Ee)return a=za.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,n!==vl&&(e=Error(r(422),{cause:n}),qo(Ua(e,t)))):(n!==vl&&(a=Error(r(423),{cause:n}),qo(Ua(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=Ua(n,t),o=Pl(e.stateNode,n,o),Tl(e,o),Ze!==4&&(Ze=2)),!1;var i=Error(r(520),{cause:n});if(i=Ua(i,t),Ko===null?Ko=[i]:Ko.push(i),Ze!==4&&(Ze=2),a===null)return!0;n=Ua(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Pl(t.stateNode,n,e),Tl(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Dt===null||!Dt.has(i))))return t.flags|=65536,o&=-o,t.lanes|=o,o=wd(o),jd(o,e,t,n),Tl(t,o),!1}t=t.return}while(t!==null);return!1}var er=Error(r(461)),Fe=!1;function ca(e,a,t,n){a.child=e===null?Nu(a,null,t,n):on(a,e.child,t,n)}function kd(e,a,t,n,o){t=t.render;var i=a.ref;if("ref"in n){var l={};for(var c in n)c!=="ref"&&(l[c]=n[c])}else l=n;return en(a),n=Ll(e,a,t,l,i,o),c=Ol(),e!==null&&!Fe?(_l(e,a,o),lt(e,a,o)):(Ee&&c&&gl(a),a.flags|=1,ca(e,a,n,o),a.child)}function zd(e,a,t,n,o){if(e===null){var i=t.type;return typeof i=="function"&&!ml(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Sd(e,a,i,n,o)):(e=Cs(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!rr(e,o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:So,t(l,n)&&e.ref===a.ref)return lt(e,a,o)}return a.flags|=1,e=at(i,n),e.ref=a.ref,e.return=a,a.child=e}function Sd(e,a,t,n,o){if(e!==null){var i=e.memoizedProps;if(So(i,n)&&e.ref===a.ref)if(Fe=!1,a.pendingProps=n=i,rr(e,o))(e.flags&131072)!==0&&(Fe=!0);else return a.lanes=e.lanes,lt(e,a,o)}return ar(e,a,t,n,o)}function Nd(e,a,t,n){var o=n.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(n=a.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~i}else n=0,a.child=null;return Ed(e,a,i,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ls(a,i!==null?i.cachePool:null),i!==null?Tu(a,i):Cl(),Au(a);else return n=a.lanes=536870912,Ed(e,a,i!==null?i.baseLanes|t:t,t,n)}else i!==null?(Ls(a,i.cachePool),Tu(a,i),At(),a.memoizedState=null):(e!==null&&Ls(a,null),Cl(),At());return ca(e,a,o,t),a.child}function Ro(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Ed(e,a,t,n,o){var i=Sl();return i=i===null?null:{parent:We._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&Ls(a,null),Cl(),Au(a),e!==null&&Dn(e,a,n,!0),a.childLanes=o,null}function $s(e,a){return a=Ps({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function qd(e,a,t){return on(a,e.child,null,t),e=$s(a,a.pendingProps),e.flags|=2,Sa(a),a.memoizedState=null,e}function ch(e,a,t){var n=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ee){if(n.mode==="hidden")return e=$s(a,n),a.lanes=536870912,Ro(null,e);if(Ul(a),(e=Be)?(e=Rp(e,Oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:jt!==null?{id:Ka,overflow:Ja}:null,retryLane:536870912,hydrationErrors:null},t=du(e),t.return=a,a.child=t,la=a,Be=null)):e=null,e===null)throw zt(a);return a.lanes=536870912,null}return $s(a,n)}var i=e.memoizedState;if(i!==null){var l=i.dehydrated;if(Ul(a),o)if(a.flags&256)a.flags&=-257,a=qd(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(r(558));else if(Fe||Dn(e,a,t,!1),o=(t&e.childLanes)!==0,Fe||o){if(n=Ge,n!==null&&(l=vc(n,t),l!==0&&l!==i.retryLane))throw i.retryLane=l,Wt(e,l),wa(n,e,l),er;ri(),a=qd(e,a,t)}else e=i.treeContext,Be=Ha(l.nextSibling),la=a,Ee=!0,kt=null,Oa=!1,e!==null&&fu(a,e),a=$s(a,n),a.flags|=4096;return a}return e=at(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Fs(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function ar(e,a,t,n,o){return en(a),t=Ll(e,a,t,n,void 0,o),n=Ol(),e!==null&&!Fe?(_l(e,a,o),lt(e,a,o)):(Ee&&n&&gl(a),a.flags|=1,ca(e,a,t,o),a.child)}function Td(e,a,t,n,o,i){return en(a),a.updateQueue=null,t=Mu(a,n,t,o),Cu(e),n=Ol(),e!==null&&!Fe?(_l(e,a,i),lt(e,a,i)):(Ee&&n&&gl(a),a.flags|=1,ca(e,a,t,i),a.child)}function Ad(e,a,t,n,o){if(en(a),a.stateNode===null){var i=An,l=t.contextType;typeof l=="object"&&l!==null&&(i=ra(l)),i=new t(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fl,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},El(a),l=t.contextType,i.context=typeof l=="object"&&l!==null?ra(l):An,i.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($l(a,t,l,n),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&Fl.enqueueReplaceState(i,i.state,null),Lo(a,n,i,o),Do(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){i=a.stateNode;var c=a.memoizedProps,h=ln(t,c);i.props=h;var q=i.context,M=t.contextType;l=An,typeof M=="object"&&M!==null&&(l=ra(M));var O=t.getDerivedStateFromProps;M=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||q!==l)&&gd(a,i,n,l),Nt=!1;var T=a.memoizedState;i.state=T,Lo(a,n,i,o),Do(),q=a.memoizedState,c||T!==q||Nt?(typeof O=="function"&&($l(a,t,O,n),q=a.memoizedState),(h=Nt||hd(a,t,h,n,T,q,l))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=q),i.props=n,i.state=q,i.context=l,n=h):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,ql(e,a),l=a.memoizedProps,M=ln(t,l),i.props=M,O=a.pendingProps,T=i.context,q=t.contextType,h=An,typeof q=="object"&&q!==null&&(h=ra(q)),c=t.getDerivedStateFromProps,(q=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==O||T!==h)&&gd(a,i,n,h),Nt=!1,T=a.memoizedState,i.state=T,Lo(a,n,i,o),Do();var A=a.memoizedState;l!==O||T!==A||Nt||e!==null&&e.dependencies!==null&&Us(e.dependencies)?(typeof c=="function"&&($l(a,t,c,n),A=a.memoizedState),(M=Nt||hd(a,t,M,n,T,A,h)||e!==null&&e.dependencies!==null&&Us(e.dependencies))?(q||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,A,h)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=A),i.props=n,i.state=A,i.context=h,n=M):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(a.flags|=1024),n=!1)}return i=n,Fs(e,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&n?(a.child=on(a,e.child,null,o),a.child=on(a,null,t,o)):ca(e,a,t,o),a.memoizedState=i.state,e=a.child):e=lt(e,a,o),e}function Cd(e,a,t,n){return Ft(),a.flags|=256,ca(e,a,t,n),a.child}var tr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nr(e){return{baseLanes:e,cachePool:yu()}}function or(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ea),e}function Md(e,a,t){var n=a.pendingProps,o=!1,i=(a.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),l&&(o=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ee){if(o?Tt(a):At(),(e=Be)?(e=Rp(e,Oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:jt!==null?{id:Ka,overflow:Ja}:null,retryLane:536870912,hydrationErrors:null},t=du(e),t.return=a,a.child=t,la=a,Be=null)):e=null,e===null)throw zt(a);return Rr(e)?a.lanes=32:a.lanes=536870912,null}var c=n.children;return n=n.fallback,o?(At(),o=a.mode,c=Ps({mode:"hidden",children:c},o),n=$t(n,o,t,null),c.return=a,n.return=a,c.sibling=n,a.child=c,n=a.child,n.memoizedState=nr(t),n.childLanes=or(e,l,t),a.memoizedState=tr,Ro(null,n)):(Tt(a),sr(a,c))}var h=e.memoizedState;if(h!==null&&(c=h.dehydrated,c!==null)){if(i)a.flags&256?(Tt(a),a.flags&=-257,a=ir(e,a,t)):a.memoizedState!==null?(At(),a.child=e.child,a.flags|=128,a=null):(At(),c=n.fallback,o=a.mode,n=Ps({mode:"visible",children:n.children},o),c=$t(c,o,t,null),c.flags|=2,n.return=a,c.return=a,n.sibling=c,a.child=n,on(a,e.child,null,t),n=a.child,n.memoizedState=nr(t),n.childLanes=or(e,l,t),a.memoizedState=tr,a=Ro(null,n));else if(Tt(a),Rr(c)){if(l=c.nextSibling&&c.nextSibling.dataset,l)var q=l.dgst;l=q,n=Error(r(419)),n.stack="",n.digest=l,qo({value:n,source:null,stack:null}),a=ir(e,a,t)}else if(Fe||Dn(e,a,t,!1),l=(t&e.childLanes)!==0,Fe||l){if(l=Ge,l!==null&&(n=vc(l,t),n!==0&&n!==h.retryLane))throw h.retryLane=n,Wt(e,n),wa(l,e,n),er;Gr(c)||ri(),a=ir(e,a,t)}else Gr(c)?(a.flags|=192,a.child=e.child,a=null):(e=h.treeContext,Be=Ha(c.nextSibling),la=a,Ee=!0,kt=null,Oa=!1,e!==null&&fu(a,e),a=sr(a,n.children),a.flags|=4096);return a}return o?(At(),c=n.fallback,o=a.mode,h=e.child,q=h.sibling,n=at(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,q!==null?c=at(q,c):(c=$t(c,o,t,null),c.flags|=2),c.return=a,n.return=a,n.sibling=c,a.child=n,Ro(null,n),n=a.child,c=e.child.memoizedState,c===null?c=nr(t):(o=c.cachePool,o!==null?(h=We._currentValue,o=o.parent!==h?{parent:h,pool:h}:o):o=yu(),c={baseLanes:c.baseLanes|t,cachePool:o}),n.memoizedState=c,n.childLanes=or(e,l,t),a.memoizedState=tr,Ro(e.child,n)):(Tt(a),t=e.child,e=t.sibling,t=at(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function sr(e,a){return a=Ps({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ps(e,a){return e=ka(22,e,null,a),e.lanes=0,e}function ir(e,a,t){return on(a,e.child,null,t),e=sr(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Ud(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),wl(e.return,a,t)}function lr(e,a,t,n,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o,treeForkCount:i}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=o,l.treeForkCount=i)}function Dd(e,a,t){var n=a.pendingProps,o=n.revealOrder,i=n.tail;n=n.children;var l=Ke.current,c=(l&2)!==0;if(c?(l=l&1|2,a.flags|=128):l&=1,Q(Ke,l),ca(e,a,n,t),n=Ee?Eo:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ud(e,t,a);else if(e.tag===19)Ud(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&Bs(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),lr(a,!1,o,t,i,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Bs(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}lr(a,!0,t,null,i,n);break;case"together":lr(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function lt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Ut|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Dn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,t=at(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=at(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function rr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Us(e)))}function uh(e,a,t){switch(a.tag){case 3:Ie(a,a.stateNode.containerInfo),St(a,We,e.memoizedState.cache),Ft();break;case 27:case 5:Te(a);break;case 4:Ie(a,a.stateNode.containerInfo);break;case 10:St(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ul(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Tt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Md(e,a,t):(Tt(a),e=lt(e,a,t),e!==null?e.sibling:null);Tt(a);break;case 19:var o=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(Dn(e,a,t,!1),n=(t&a.childLanes)!==0),o){if(n)return Dd(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(Ke,Ke.current),n)break;return null;case 22:return a.lanes=0,Nd(e,a,t,a.pendingProps);case 24:St(a,We,e.memoizedState.cache)}return lt(e,a,t)}function Ld(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Fe=!0;else{if(!rr(e,t)&&(a.flags&128)===0)return Fe=!1,uh(e,a,t);Fe=(e.flags&131072)!==0}else Fe=!1,Ee&&(a.flags&1048576)!==0&&mu(a,Eo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=tn(a.elementType),a.type=e,typeof e=="function")ml(e)?(n=ln(e,n),a.tag=1,a=Ad(null,a,e,n,t)):(a.tag=0,a=ar(null,a,e,n,t));else{if(e!=null){var o=e.$$typeof;if(o===P){a.tag=11,a=kd(null,a,e,n,t);break e}else if(o===Y){a.tag=14,a=zd(null,a,e,n,t);break e}}throw a=F(e)||e,Error(r(306,a,""))}}return a;case 0:return ar(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,o=ln(n,a.pendingProps),Ad(e,a,n,o,t);case 3:e:{if(Ie(a,a.stateNode.containerInfo),e===null)throw Error(r(387));n=a.pendingProps;var i=a.memoizedState;o=i.element,ql(e,a),Lo(a,n,null,t);var l=a.memoizedState;if(n=l.cache,St(a,We,n),n!==i.cache&&jl(a,[We],t,!0),Do(),n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Cd(e,a,n,t);break e}else if(n!==o){o=Ua(Error(r(424)),a),qo(o),a=Cd(e,a,n,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=Ha(e.firstChild),la=a,Ee=!0,kt=null,Oa=!0,t=Nu(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ft(),n===o){a=lt(e,a,t);break e}ca(e,a,n,t)}a=a.child}return a;case 26:return Fs(e,a),e===null?(t=Zp(a.type,null,a.pendingProps,null))?a.memoizedState=t:Ee||(t=a.type,e=a.pendingProps,n=hi(he.current).createElement(t),n[ia]=a,n[ha]=e,ua(n,t,e),na(n),a.stateNode=n):a.memoizedState=Zp(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Te(a),e===null&&Ee&&(n=a.stateNode=Vp(a.type,a.pendingProps,he.current),la=a,Oa=!0,o=Be,Ht(a.type)?(Br=o,Be=Ha(n.firstChild)):Be=o),ca(e,a,a.pendingProps.children,t),Fs(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ee&&((o=n=Be)&&(n=Rh(n,a.type,a.pendingProps,Oa),n!==null?(a.stateNode=n,la=a,Be=Ha(n.firstChild),Oa=!1,o=!0):o=!1),o||zt(a)),Te(a),o=a.type,i=a.pendingProps,l=e!==null?e.memoizedProps:null,n=i.children,Or(o,i)?n=null:l!==null&&Or(o,l)&&(a.flags|=32),a.memoizedState!==null&&(o=Ll(e,a,ah,null,null,t),as._currentValue=o),Fs(e,a),ca(e,a,n,t),a.child;case 6:return e===null&&Ee&&((e=t=Be)&&(t=Bh(t,a.pendingProps,Oa),t!==null?(a.stateNode=t,la=a,Be=null,e=!0):e=!1),e||zt(a)),null;case 13:return Md(e,a,t);case 4:return Ie(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=on(a,null,n,t):ca(e,a,n,t),a.child;case 11:return kd(e,a,a.type,a.pendingProps,t);case 7:return ca(e,a,a.pendingProps,t),a.child;case 8:return ca(e,a,a.pendingProps.children,t),a.child;case 12:return ca(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,St(a,a.type,n.value),ca(e,a,n.children,t),a.child;case 9:return o=a.type._context,n=a.pendingProps.children,en(a),o=ra(o),n=n(o),a.flags|=1,ca(e,a,n,t),a.child;case 14:return zd(e,a,a.type,a.pendingProps,t);case 15:return Sd(e,a,a.type,a.pendingProps,t);case 19:return Dd(e,a,t);case 31:return ch(e,a,t);case 22:return Nd(e,a,t,a.pendingProps);case 24:return en(a),n=ra(We),e===null?(o=Sl(),o===null&&(o=Ge,i=kl(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=t),o=i),a.memoizedState={parent:n,cache:o},El(a),St(a,We,o)):((e.lanes&t)!==0&&(ql(e,a),Lo(a,null,null,t),Do()),o=e.memoizedState,i=a.memoizedState,o.parent!==n?(o={parent:n,cache:n},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),St(a,We,n)):(n=i.cache,St(a,We,n),n!==o.cache&&jl(a,[We],t,!0))),ca(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function rt(e){e.flags|=4}function cr(e,a,t,n,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(rp())e.flags|=8192;else throw nn=_s,Nl}else e.flags&=-16777217}function Od(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$p(a))if(rp())e.flags|=8192;else throw nn=_s,Nl}function ei(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?hc():536870912,e.lanes|=a,Zn|=a)}function Bo(e,a){if(!Ee)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function dh(e,a,t){var n=a.pendingProps;switch(bl(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(a),null;case 1:return Ye(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),ot(We),G(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Un(a)?rt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xl())),Ye(a),null;case 26:var o=a.type,i=a.memoizedState;return e===null?(rt(a),i!==null?(Ye(a),Od(a,i)):(Ye(a),cr(a,o,null,n,t))):i?i!==e.memoizedState?(rt(a),Ye(a),Od(a,i)):(Ye(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&rt(a),Ye(a),cr(a,o,e,n,t)),null;case 27:if(Re(a),t=he.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&rt(a);else{if(!n){if(a.stateNode===null)throw Error(r(166));return Ye(a),null}e=Z.current,Un(a)?hu(a):(e=Vp(o,n,t),a.stateNode=e,rt(a))}return Ye(a),null;case 5:if(Re(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&rt(a);else{if(!n){if(a.stateNode===null)throw Error(r(166));return Ye(a),null}if(i=Z.current,Un(a))hu(a);else{var l=hi(he.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?l.createElement(o,{is:n.is}):l.createElement(o)}}i[ia]=a,i[ha]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=i;e:switch(ua(i,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&rt(a)}}return Ye(a),cr(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&rt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(r(166));if(e=he.current,Un(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,o=la,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[ia]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Mp(e.nodeValue,t)),e||zt(a,!0)}else e=hi(e).createTextNode(n),e[ia]=a,a.stateNode=e}return Ye(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=Un(a),t!==null){if(e===null){if(!n)throw Error(r(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ia]=a}else Ft(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),e=!1}else t=xl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Sa(a),a):(Sa(a),null);if((a.flags&128)!==0)throw Error(r(558))}return Ye(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Un(a),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[ia]=a}else Ft(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),o=!1}else o=xl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(Sa(a),a):(Sa(a),null)}return Sa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==o&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),ei(a,a.updateQueue),Ye(a),null);case 4:return G(),e===null&&Cr(a.stateNode.containerInfo),Ye(a),null;case 10:return ot(a.type),Ye(a),null;case 19:if(D(Ke),n=a.memoizedState,n===null)return Ye(a),null;if(o=(a.flags&128)!==0,i=n.rendering,i===null)if(o)Bo(n,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=Bs(e),i!==null){for(a.flags|=128,Bo(n,!1),e=i.updateQueue,a.updateQueue=e,ei(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)uu(t,e),t=t.sibling;return Q(Ke,Ke.current&1|2),Ee&&tt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&sa()>si&&(a.flags|=128,o=!0,Bo(n,!1),a.lanes=4194304)}else{if(!o)if(e=Bs(i),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,ei(a,e),Bo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Ee)return Ye(a),null}else 2*sa()-n.renderingStartTime>si&&t!==536870912&&(a.flags|=128,o=!0,Bo(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(e=n.last,e!==null?e.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=sa(),e.sibling=null,t=Ke.current,Q(Ke,o?t&1|2:t&1),Ee&&tt(a,n.treeForkCount),e):(Ye(a),null);case 22:case 23:return Sa(a),Ml(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Ye(a),a.subtreeFlags&6&&(a.flags|=8192)):Ye(a),t=a.updateQueue,t!==null&&ei(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&D(an),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),ot(We),Ye(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function ph(e,a){switch(bl(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ot(We),G(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Re(a),null;case 31:if(a.memoizedState!==null){if(Sa(a),a.alternate===null)throw Error(r(340));Ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Sa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return D(Ke),null;case 4:return G(),null;case 10:return ot(a.type),null;case 22:case 23:return Sa(a),Ml(),e!==null&&D(an),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ot(We),null;case 25:return null;default:return null}}function _d(e,a){switch(bl(a),a.tag){case 3:ot(We),G();break;case 26:case 27:case 5:Re(a);break;case 4:G();break;case 31:a.memoizedState!==null&&Sa(a);break;case 13:Sa(a);break;case 19:D(Ke);break;case 10:ot(a.type);break;case 22:case 23:Sa(a),Ml(),e!==null&&D(an);break;case 24:ot(We)}}function Yo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){n=void 0;var i=t.create,l=t.inst;n=i(),l.destroy=n}t=t.next}while(t!==o)}}catch(c){De(a,a.return,c)}}function Ct(e,a,t){try{var n=a.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var i=o.next;n=i;do{if((n.tag&e)===e){var l=n.inst,c=l.destroy;if(c!==void 0){l.destroy=void 0,o=a;var h=t,q=c;try{q()}catch(M){De(o,h,M)}}}n=n.next}while(n!==i)}}catch(M){De(a,a.return,M)}}function Hd(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{qu(a,t)}catch(n){De(e,e.return,n)}}}function Gd(e,a,t){t.props=ln(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){De(e,a,n)}}function Vo(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(o){De(e,a,o)}}function Ia(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){De(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){De(e,a,o)}else t.current=null}function Rd(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){De(e,e.return,o)}}function ur(e,a,t){try{var n=e.stateNode;Dh(n,e.type,t,a),n[ha]=a}catch(o){De(e,e.return,o)}}function Bd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ht(e.type)||e.tag===4}function dr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pr(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Pa));else if(n!==4&&(n===27&&Ht(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(pr(e,a,t),e=e.sibling;e!==null;)pr(e,a,t),e=e.sibling}function ai(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&Ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(ai(e,a,t),e=e.sibling;e!==null;)ai(e,a,t),e=e.sibling}function Yd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);ua(a,n,t),a[ia]=e,a[ha]=t}catch(i){De(e,e.return,i)}}var ct=!1,Pe=!1,mr=!1,Vd=typeof WeakSet=="function"?WeakSet:Set,oa=null;function mh(e,a){if(e=e.containerInfo,Dr=ji,e=au(e),il(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,c=-1,h=-1,q=0,M=0,O=e,T=null;a:for(;;){for(var A;O!==t||o!==0&&O.nodeType!==3||(c=l+o),O!==i||n!==0&&O.nodeType!==3||(h=l+n),O.nodeType===3&&(l+=O.nodeValue.length),(A=O.firstChild)!==null;)T=O,O=A;for(;;){if(O===e)break a;if(T===t&&++q===o&&(c=l),T===i&&++M===n&&(h=l),(A=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=A}t=c===-1||h===-1?null:{start:c,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lr={focusedElem:e,selectionRange:t},ji=!1,oa=a;oa!==null;)if(a=oa,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,oa=e;else for(;oa!==null;){switch(a=oa,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)o=e[t],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,o=i.memoizedProps,i=i.memoizedState,n=t.stateNode;try{var I=ln(t.type,o);e=n.getSnapshotBeforeUpdate(I,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(re){De(t,t.return,re)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Hr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,oa=e;break}oa=a.return}}function Qd(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:dt(e,t),n&4&&Yo(5,t);break;case 1:if(dt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){De(t,t.return,l)}else{var o=ln(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){De(t,t.return,l)}}n&64&&Hd(t),n&512&&Vo(t,t.return);break;case 3:if(dt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{qu(e,a)}catch(l){De(t,t.return,l)}}break;case 27:a===null&&n&4&&Yd(t);case 26:case 5:dt(e,t),a===null&&n&4&&Rd(t),n&512&&Vo(t,t.return);break;case 12:dt(e,t);break;case 31:dt(e,t),n&4&&Kd(e,t);break;case 13:dt(e,t),n&4&&Jd(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=jh.bind(null,t),Yh(e,t))));break;case 22:if(n=t.memoizedState!==null||ct,!n){a=a!==null&&a.memoizedState!==null||Pe,o=ct;var i=Pe;ct=n,(Pe=a)&&!i?pt(e,t,(t.subtreeFlags&8772)!==0):dt(e,t),ct=o,Pe=i}break;case 30:break;default:dt(e,t)}}function Xd(e){var a=e.alternate;a!==null&&(e.alternate=null,Xd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Vi(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,ba=!1;function ut(e,a,t){for(t=t.child;t!==null;)Zd(e,a,t),t=t.sibling}function Zd(e,a,t){if(ma&&typeof ma.onCommitFiberUnmount=="function")try{ma.onCommitFiberUnmount(Xt,t)}catch{}switch(t.tag){case 26:Pe||Ia(t,a),ut(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Pe||Ia(t,a);var n=Qe,o=ba;Ht(t.type)&&(Qe=t.stateNode,ba=!1),ut(e,a,t),Fo(t.stateNode),Qe=n,ba=o;break;case 5:Pe||Ia(t,a);case 6:if(n=Qe,o=ba,Qe=null,ut(e,a,t),Qe=n,ba=o,Qe!==null)if(ba)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(t.stateNode)}catch(i){De(t,a,i)}else try{Qe.removeChild(t.stateNode)}catch(i){De(t,a,i)}break;case 18:Qe!==null&&(ba?(e=Qe,Hp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),eo(e)):Hp(Qe,t.stateNode));break;case 4:n=Qe,o=ba,Qe=t.stateNode.containerInfo,ba=!0,ut(e,a,t),Qe=n,ba=o;break;case 0:case 11:case 14:case 15:Ct(2,t,a),Pe||Ct(4,t,a),ut(e,a,t);break;case 1:Pe||(Ia(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Gd(t,a,n)),ut(e,a,t);break;case 21:ut(e,a,t);break;case 22:Pe=(n=Pe)||t.memoizedState!==null,ut(e,a,t),Pe=n;break;default:ut(e,a,t)}}function Kd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(t){De(a,a.return,t)}}}function Jd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(t){De(a,a.return,t)}}function fh(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Vd),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Vd),a;default:throw Error(r(435,e.tag))}}function ti(e,a){var t=fh(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var o=kh.bind(null,e,n);n.then(o,o)}})}function va(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],i=e,l=a,c=l;e:for(;c!==null;){switch(c.tag){case 27:if(Ht(c.type)){Qe=c.stateNode,ba=!1;break e}break;case 5:Qe=c.stateNode,ba=!1;break e;case 3:case 4:Qe=c.stateNode.containerInfo,ba=!0;break e}c=c.return}if(Qe===null)throw Error(r(160));Zd(i,l,o),Qe=null,ba=!1,i=o.alternate,i!==null&&(i.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Id(a,e),a=a.sibling}var Va=null;function Id(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:va(a,e),xa(e),n&4&&(Ct(3,e,e.return),Yo(3,e),Ct(5,e,e.return));break;case 1:va(a,e),xa(e),n&512&&(Pe||t===null||Ia(t,t.return)),n&64&&ct&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var o=Va;if(va(a,e),xa(e),n&512&&(Pe||t===null||Ia(t,t.return)),n&4){var i=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,o=o.ownerDocument||o;a:switch(n){case"title":i=o.getElementsByTagName("title")[0],(!i||i[go]||i[ia]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=o.createElement(n),o.head.insertBefore(i,o.querySelector("head > title"))),ua(i,n,t),i[ia]=e,na(i),n=i;break e;case"link":var l=Ip("link","href",o).get(n+(t.href||""));if(l){for(var c=0;c<l.length;c++)if(i=l[c],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(c,1);break a}}i=o.createElement(n),ua(i,n,t),o.head.appendChild(i);break;case"meta":if(l=Ip("meta","content",o).get(n+(t.content||""))){for(c=0;c<l.length;c++)if(i=l[c],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(c,1);break a}}i=o.createElement(n),ua(i,n,t),o.head.appendChild(i);break;default:throw Error(r(468,n))}i[ia]=e,na(i),n=i}e.stateNode=n}else Wp(o,e.type,e.stateNode);else e.stateNode=Jp(o,n,e.memoizedProps);else i!==n?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,n===null?Wp(o,e.type,e.stateNode):Jp(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ur(e,e.memoizedProps,t.memoizedProps)}break;case 27:va(a,e),xa(e),n&512&&(Pe||t===null||Ia(t,t.return)),t!==null&&n&4&&ur(e,e.memoizedProps,t.memoizedProps);break;case 5:if(va(a,e),xa(e),n&512&&(Pe||t===null||Ia(t,t.return)),e.flags&32){o=e.stateNode;try{kn(o,"")}catch(I){De(e,e.return,I)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,ur(e,o,t!==null?t.memoizedProps:o)),n&1024&&(mr=!0);break;case 6:if(va(a,e),xa(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(I){De(e,e.return,I)}}break;case 3:if(vi=null,o=Va,Va=gi(a.containerInfo),va(a,e),Va=o,xa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{eo(a.containerInfo)}catch(I){De(e,e.return,I)}mr&&(mr=!1,Wd(e));break;case 4:n=Va,Va=gi(e.stateNode.containerInfo),va(a,e),xa(e),Va=n;break;case 12:va(a,e),xa(e);break;case 31:va(a,e),xa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ti(e,n)));break;case 13:va(a,e),xa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(oi=sa()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ti(e,n)));break;case 22:o=e.memoizedState!==null;var h=t!==null&&t.memoizedState!==null,q=ct,M=Pe;if(ct=q||o,Pe=M||h,va(a,e),Pe=M,ct=q,xa(e),n&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(t===null||h||ct||Pe||rn(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){h=t=a;try{if(i=h.stateNode,o)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{c=h.stateNode;var O=h.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(I){De(h,h.return,I)}}}else if(a.tag===6){if(t===null){h=a;try{h.stateNode.nodeValue=o?"":h.memoizedProps}catch(I){De(h,h.return,I)}}}else if(a.tag===18){if(t===null){h=a;try{var A=h.stateNode;o?Gp(A,!0):Gp(h.stateNode,!1)}catch(I){De(h,h.return,I)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,ti(e,t))));break;case 19:va(a,e),xa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ti(e,n)));break;case 30:break;case 21:break;default:va(a,e),xa(e)}}function xa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(Bd(n)){t=n;break}n=n.return}if(t==null)throw Error(r(160));switch(t.tag){case 27:var o=t.stateNode,i=dr(e);ai(e,i,o);break;case 5:var l=t.stateNode;t.flags&32&&(kn(l,""),t.flags&=-33);var c=dr(e);ai(e,c,l);break;case 3:case 4:var h=t.stateNode.containerInfo,q=dr(e);pr(e,q,h);break;default:throw Error(r(161))}}catch(M){De(e,e.return,M)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Wd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function dt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Qd(e,a.alternate,a),a=a.sibling}function rn(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ct(4,a,a.return),rn(a);break;case 1:Ia(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Gd(a,a.return,t),rn(a);break;case 27:Fo(a.stateNode);case 26:case 5:Ia(a,a.return),rn(a);break;case 22:a.memoizedState===null&&rn(a);break;case 30:rn(a);break;default:rn(a)}e=e.sibling}}function pt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,o=e,i=a,l=i.flags;switch(i.tag){case 0:case 11:case 15:pt(o,i,t),Yo(4,i);break;case 1:if(pt(o,i,t),n=i,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(q){De(n,n.return,q)}if(n=i,o=n.updateQueue,o!==null){var c=n.stateNode;try{var h=o.shared.hiddenCallbacks;if(h!==null)for(o.shared.hiddenCallbacks=null,o=0;o<h.length;o++)Eu(h[o],c)}catch(q){De(n,n.return,q)}}t&&l&64&&Hd(i),Vo(i,i.return);break;case 27:Yd(i);case 26:case 5:pt(o,i,t),t&&n===null&&l&4&&Rd(i),Vo(i,i.return);break;case 12:pt(o,i,t);break;case 31:pt(o,i,t),t&&l&4&&Kd(o,i);break;case 13:pt(o,i,t),t&&l&4&&Jd(o,i);break;case 22:i.memoizedState===null&&pt(o,i,t),Vo(i,i.return);break;case 30:break;default:pt(o,i,t)}a=a.sibling}}function fr(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&To(t))}function hr(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&To(e))}function Qa(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)$d(e,a,t,n),a=a.sibling}function $d(e,a,t,n){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qa(e,a,t,n),o&2048&&Yo(9,a);break;case 1:Qa(e,a,t,n);break;case 3:Qa(e,a,t,n),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&To(e)));break;case 12:if(o&2048){Qa(e,a,t,n),e=a.stateNode;try{var i=a.memoizedProps,l=i.id,c=i.onPostCommit;typeof c=="function"&&c(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){De(a,a.return,h)}}else Qa(e,a,t,n);break;case 31:Qa(e,a,t,n);break;case 13:Qa(e,a,t,n);break;case 23:break;case 22:i=a.stateNode,l=a.alternate,a.memoizedState!==null?i._visibility&2?Qa(e,a,t,n):Qo(e,a):i._visibility&2?Qa(e,a,t,n):(i._visibility|=2,Vn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),o&2048&&fr(l,a);break;case 24:Qa(e,a,t,n),o&2048&&hr(a.alternate,a);break;default:Qa(e,a,t,n)}}function Vn(e,a,t,n,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,l=a,c=t,h=n,q=l.flags;switch(l.tag){case 0:case 11:case 15:Vn(i,l,c,h,o),Yo(8,l);break;case 23:break;case 22:var M=l.stateNode;l.memoizedState!==null?M._visibility&2?Vn(i,l,c,h,o):Qo(i,l):(M._visibility|=2,Vn(i,l,c,h,o)),o&&q&2048&&fr(l.alternate,l);break;case 24:Vn(i,l,c,h,o),o&&q&2048&&hr(l.alternate,l);break;default:Vn(i,l,c,h,o)}a=a.sibling}}function Qo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,o=n.flags;switch(n.tag){case 22:Qo(t,n),o&2048&&fr(n.alternate,n);break;case 24:Qo(t,n),o&2048&&hr(n.alternate,n);break;default:Qo(t,n)}a=a.sibling}}var Xo=8192;function Qn(e,a,t){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)Fd(e,a,t),e=e.sibling}function Fd(e,a,t){switch(e.tag){case 26:Qn(e,a,t),e.flags&Xo&&e.memoizedState!==null&&eg(t,Va,e.memoizedState,e.memoizedProps);break;case 5:Qn(e,a,t);break;case 3:case 4:var n=Va;Va=gi(e.stateNode.containerInfo),Qn(e,a,t),Va=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Xo,Xo=16777216,Qn(e,a,t),Xo=n):Qn(e,a,t));break;default:Qn(e,a,t)}}function Pd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Zo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];oa=n,ap(n,e)}Pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ep(e),e=e.sibling}function ep(e){switch(e.tag){case 0:case 11:case 15:Zo(e),e.flags&2048&&Ct(9,e,e.return);break;case 3:Zo(e);break;case 12:Zo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,ni(e)):Zo(e);break;default:Zo(e)}}function ni(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];oa=n,ap(n,e)}Pd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ct(8,a,a.return),ni(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,ni(a));break;default:ni(a)}e=e.sibling}}function ap(e,a){for(;oa!==null;){var t=oa;switch(t.tag){case 0:case 11:case 15:Ct(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:To(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,oa=n;else e:for(t=e;oa!==null;){n=oa;var o=n.sibling,i=n.return;if(Xd(n),n===t){oa=null;break e}if(o!==null){o.return=i,oa=o;break e}oa=i}}}var hh={getCacheForType:function(e){var a=ra(We),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ra(We).controller.signal}},gh=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ge=null,je=null,ze=0,Ue=0,Na=null,Mt=!1,Xn=!1,gr=!1,mt=0,Ze=0,Ut=0,cn=0,br=0,Ea=0,Zn=0,Ko=null,ya=null,vr=!1,oi=0,tp=0,si=1/0,ii=null,Dt=null,ea=0,Lt=null,Kn=null,ft=0,xr=0,yr=null,np=null,Jo=0,wr=null;function qa(){return(Me&2)!==0&&ze!==0?ze&-ze:z.T!==null?Er():xc()}function op(){if(Ea===0)if((ze&536870912)===0||Ee){var e=mo;mo<<=1,(mo&3932160)===0&&(mo=262144),Ea=e}else Ea=536870912;return e=za.current,e!==null&&(e.flags|=32),Ea}function wa(e,a,t){(e===Ge&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Jn(e,0),Ot(e,ze,Ea,!1)),ho(e,t),((Me&2)===0||e!==Ge)&&(e===Ge&&((Me&2)===0&&(cn|=t),Ze===4&&Ot(e,ze,Ea,!1)),Wa(e))}function sp(e,a,t){if((Me&6)!==0)throw Error(r(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||fo(e,a),o=n?xh(e,a):kr(e,a,!0),i=n;do{if(o===0){Xn&&!n&&Ot(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!bh(t)){o=kr(e,a,!1),i=!1;continue}if(o===2){if(i=a,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var c=e;o=Ko;var h=c.current.memoizedState.isDehydrated;if(h&&(Jn(c,l).flags|=256),l=kr(c,l,!1),l!==2){if(gr&&!h){c.errorRecoveryDisabledLanes|=i,cn|=i,o=4;break e}i=ya,ya=o,i!==null&&(ya===null?ya=i:ya.push.apply(ya,i))}o=l}if(i=!1,o!==2)continue}}if(o===1){Jn(e,0),Ot(e,a,0,!0);break}e:{switch(n=e,i=o,i){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Ot(n,a,Ea,!Mt);break e;case 2:ya=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(o=oi+300-sa(),10<o)){if(Ot(n,a,Ea,!Mt),gs(n,0,!0)!==0)break e;ft=a,n.timeoutHandle=Op(ip.bind(null,n,t,ya,ii,vr,a,Ea,cn,Zn,Mt,i,"Throttled",-0,0),o);break e}ip(n,t,ya,ii,vr,a,Ea,cn,Zn,Mt,i,null,-0,0)}}break}while(!0);Wa(e)}function ip(e,a,t,n,o,i,l,c,h,q,M,O,T,A){if(e.timeoutHandle=-1,O=a.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pa},Fd(a,i,O);var I=(i&62914560)===i?oi-sa():(i&4194048)===i?tp-sa():0;if(I=ag(O,I),I!==null){ft=i,e.cancelPendingCommit=I(fp.bind(null,e,a,i,t,n,o,l,c,h,M,O,null,T,A)),Ot(e,i,l,!q);return}}fp(e,a,i,t,n,o,l,c,h)}function bh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],i=o.getSnapshot;o=o.value;try{if(!ja(i(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ot(e,a,t,n){a&=~br,a&=~cn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var o=a;0<o;){var i=31-N(o),l=1<<i;n[i]=-1,o&=~l}t!==0&&gc(e,t,a)}function li(){return(Me&6)===0?(Io(0),!1):!0}function jr(){if(je!==null){if(Ue===0)var e=je.return;else e=je,nt=Pt=null,Hl(e),Hn=null,Co=0,e=je;for(;e!==null;)_d(e.alternate,e),e=e.return;je=null}}function Jn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,_h(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ft=0,jr(),Ge=e,je=t=at(e.current,null),ze=a,Ue=0,Na=null,Mt=!1,Xn=fo(e,a),gr=!1,Zn=Ea=br=cn=Ut=Ze=0,ya=Ko=null,vr=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var o=31-N(n),i=1<<o;a|=e[o],n&=~i}return mt=a,qs(),t}function lp(e,a){be=null,z.H=Go,a===_n||a===Os?(a=ku(),Ue=3):a===Nl?(a=ku(),Ue=4):Ue=a===er?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Na=a,je===null&&(Ze=1,Ws(e,Ua(a,e.current)))}function rp(){var e=za.current;return e===null?!0:(ze&4194048)===ze?_a===null:(ze&62914560)===ze||(ze&536870912)!==0?e===_a:!1}function cp(){var e=z.H;return z.H=Go,e===null?Go:e}function up(){var e=z.A;return z.A=hh,e}function ri(){Ze=4,Mt||(ze&4194048)!==ze&&za.current!==null||(Xn=!0),(Ut&134217727)===0&&(cn&134217727)===0||Ge===null||Ot(Ge,ze,Ea,!1)}function kr(e,a,t){var n=Me;Me|=2;var o=cp(),i=up();(Ge!==e||ze!==a)&&(ii=null,Jn(e,a)),a=!1;var l=Ze;e:do try{if(Ue!==0&&je!==null){var c=je,h=Na;switch(Ue){case 8:jr(),l=6;break e;case 3:case 2:case 9:case 6:za.current===null&&(a=!0);var q=Ue;if(Ue=0,Na=null,In(e,c,h,q),t&&Xn){l=0;break e}break;default:q=Ue,Ue=0,Na=null,In(e,c,h,q)}}vh(),l=Ze;break}catch(M){lp(e,M)}while(!0);return a&&e.shellSuspendCounter++,nt=Pt=null,Me=n,z.H=o,z.A=i,je===null&&(Ge=null,ze=0,qs()),l}function vh(){for(;je!==null;)dp(je)}function xh(e,a){var t=Me;Me|=2;var n=cp(),o=up();Ge!==e||ze!==a?(ii=null,si=sa()+500,Jn(e,a)):Xn=fo(e,a);e:do try{if(Ue!==0&&je!==null){a=je;var i=Na;a:switch(Ue){case 1:Ue=0,Na=null,In(e,a,i,1);break;case 2:case 9:if(wu(i)){Ue=0,Na=null,pp(a);break}a=function(){Ue!==2&&Ue!==9||Ge!==e||(Ue=7),Wa(e)},i.then(a,a);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:wu(i)?(Ue=0,Na=null,pp(a)):(Ue=0,Na=null,In(e,a,i,7));break;case 5:var l=null;switch(je.tag){case 26:l=je.memoizedState;case 5:case 27:var c=je;if(l?$p(l):c.stateNode.complete){Ue=0,Na=null;var h=c.sibling;if(h!==null)je=h;else{var q=c.return;q!==null?(je=q,ci(q)):je=null}break a}}Ue=0,Na=null,In(e,a,i,5);break;case 6:Ue=0,Na=null,In(e,a,i,6);break;case 8:jr(),Ze=6;break e;default:throw Error(r(462))}}yh();break}catch(M){lp(e,M)}while(!0);return nt=Pt=null,z.H=n,z.A=o,Me=t,je!==null?0:(Ge=null,ze=0,qs(),Ze)}function yh(){for(;je!==null&&!Oi();)dp(je)}function dp(e){var a=Ld(e.alternate,e,mt);e.memoizedProps=e.pendingProps,a===null?ci(e):je=a}function pp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Td(t,a,a.pendingProps,a.type,void 0,ze);break;case 11:a=Td(t,a,a.pendingProps,a.type.render,a.ref,ze);break;case 5:Hl(a);default:_d(t,a),a=je=uu(a,mt),a=Ld(t,a,mt)}e.memoizedProps=e.pendingProps,a===null?ci(e):je=a}function In(e,a,t,n){nt=Pt=null,Hl(a),Hn=null,Co=0;var o=a.return;try{if(rh(e,o,a,t,ze)){Ze=1,Ws(e,Ua(t,e.current)),je=null;return}}catch(i){if(o!==null)throw je=o,i;Ze=1,Ws(e,Ua(t,e.current)),je=null;return}a.flags&32768?(Ee||n===1?e=!0:Xn||(ze&536870912)!==0?e=!1:(Mt=e=!0,(n===2||n===9||n===3||n===6)&&(n=za.current,n!==null&&n.tag===13&&(n.flags|=16384))),mp(a,e)):ci(a)}function ci(e){var a=e;do{if((a.flags&32768)!==0){mp(a,Mt);return}e=a.return;var t=dh(a.alternate,a,mt);if(t!==null){je=t;return}if(a=a.sibling,a!==null){je=a;return}je=a=e}while(a!==null);Ze===0&&(Ze=5)}function mp(e,a){do{var t=ph(e.alternate,e);if(t!==null){t.flags&=32767,je=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){je=e;return}je=e=t}while(e!==null);Ze=6,je=null}function fp(e,a,t,n,o,i,l,c,h){e.cancelPendingCommit=null;do ui();while(ea!==0);if((Me&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(i=a.lanes|a.childLanes,i|=dl,Fm(e,t,i,l,c,h),e===Ge&&(je=Ge=null,ze=0),Kn=a,Lt=e,ft=t,xr=i,yr=o,np=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zh(gn,function(){return xp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=z.T,z.T=null,o=R.p,R.p=2,l=Me,Me|=4;try{mh(e,a,t)}finally{Me=l,R.p=o,z.T=n}}ea=1,hp(),gp(),bp()}}function hp(){if(ea===1){ea=0;var e=Lt,a=Kn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=z.T,z.T=null;var n=R.p;R.p=2;var o=Me;Me|=4;try{Id(a,e);var i=Lr,l=au(e.containerInfo),c=i.focusedElem,h=i.selectionRange;if(l!==c&&c&&c.ownerDocument&&eu(c.ownerDocument.documentElement,c)){if(h!==null&&il(c)){var q=h.start,M=h.end;if(M===void 0&&(M=q),"selectionStart"in c)c.selectionStart=q,c.selectionEnd=Math.min(M,c.value.length);else{var O=c.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var A=T.getSelection(),I=c.textContent.length,re=Math.min(h.start,I),_e=h.end===void 0?re:Math.min(h.end,I);!A.extend&&re>_e&&(l=_e,_e=re,re=l);var k=Pc(c,re),v=Pc(c,_e);if(k&&v&&(A.rangeCount!==1||A.anchorNode!==k.node||A.anchorOffset!==k.offset||A.focusNode!==v.node||A.focusOffset!==v.offset)){var E=O.createRange();E.setStart(k.node,k.offset),A.removeAllRanges(),re>_e?(A.addRange(E),A.extend(v.node,v.offset)):(E.setEnd(v.node,v.offset),A.addRange(E))}}}}for(O=[],A=c;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var L=O[c];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}ji=!!Dr,Lr=Dr=null}finally{Me=o,R.p=n,z.T=t}}e.current=a,ea=2}}function gp(){if(ea===2){ea=0;var e=Lt,a=Kn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=z.T,z.T=null;var n=R.p;R.p=2;var o=Me;Me|=4;try{Qd(e,a.alternate,a)}finally{Me=o,R.p=n,z.T=t}}ea=3}}function bp(){if(ea===4||ea===3){ea=0,_i();var e=Lt,a=Kn,t=ft,n=np;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ea=5:(ea=0,Kn=Lt=null,vp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Dt=null),Bi(t),a=a.stateNode,ma&&typeof ma.onCommitFiberRoot=="function")try{ma.onCommitFiberRoot(Xt,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=z.T,o=R.p,R.p=2,z.T=null;try{for(var i=e.onRecoverableError,l=0;l<n.length;l++){var c=n[l];i(c.value,{componentStack:c.stack})}}finally{z.T=a,R.p=o}}(ft&3)!==0&&ui(),Wa(e),o=e.pendingLanes,(t&261930)!==0&&(o&42)!==0?e===wr?Jo++:(Jo=0,wr=e):Jo=0,Io(0)}}function vp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,To(a)))}function ui(){return hp(),gp(),bp(),xp()}function xp(){if(ea!==5)return!1;var e=Lt,a=xr;xr=0;var t=Bi(ft),n=z.T,o=R.p;try{R.p=32>t?32:t,z.T=null,t=yr,yr=null;var i=Lt,l=ft;if(ea=0,Kn=Lt=null,ft=0,(Me&6)!==0)throw Error(r(331));var c=Me;if(Me|=4,ep(i.current),$d(i,i.current,l,t),Me=c,Io(0,!1),ma&&typeof ma.onPostCommitFiberRoot=="function")try{ma.onPostCommitFiberRoot(Xt,i)}catch{}return!0}finally{R.p=o,z.T=n,vp(e,a)}}function yp(e,a,t){a=Ua(t,a),a=Pl(e.stateNode,a,2),e=qt(e,a,2),e!==null&&(ho(e,2),Wa(e))}function De(e,a,t){if(e.tag===3)yp(e,e,t);else for(;a!==null;){if(a.tag===3){yp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n))){e=Ua(t,e),t=wd(2),n=qt(a,t,2),n!==null&&(jd(t,n,a,e),ho(n,2),Wa(n));break}}a=a.return}}function zr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new gh;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||(gr=!0,o.add(t),e=wh.bind(null,e,a,t),a.then(e,e))}function wh(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ge===e&&(ze&t)===t&&(Ze===4||Ze===3&&(ze&62914560)===ze&&300>sa()-oi?(Me&2)===0&&Jn(e,0):br|=t,Zn===ze&&(Zn=0)),Wa(e)}function wp(e,a){a===0&&(a=hc()),e=Wt(e,a),e!==null&&(ho(e,a),Wa(e))}function jh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),wp(e,t)}function kh(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(a),wp(e,t)}function zh(e,a){return fn(e,a)}var di=null,Wn=null,Sr=!1,pi=!1,Nr=!1,_t=0;function Wa(e){e!==Wn&&e.next===null&&(Wn===null?di=Wn=e:Wn=Wn.next=e),pi=!0,Sr||(Sr=!0,Nh())}function Io(e,a){if(!Nr&&pi){Nr=!0;do for(var t=!1,n=di;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var i=0;else{var l=n.suspendedLanes,c=n.pingedLanes;i=(1<<31-N(42|e)+1)-1,i&=o&~(l&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Sp(n,i))}else i=ze,i=gs(n,n===Ge?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||fo(n,i)||(t=!0,Sp(n,i));n=n.next}while(t);Nr=!1}}function Sh(){jp()}function jp(){pi=Sr=!1;var e=0;_t!==0&&Oh()&&(e=_t);for(var a=sa(),t=null,n=di;n!==null;){var o=n.next,i=kp(n,a);i===0?(n.next=null,t===null?di=o:t.next=o,o===null&&(Wn=t)):(t=n,(e!==0||(i&3)!==0)&&(pi=!0)),n=o}ea!==0&&ea!==5||Io(e),_t!==0&&(_t=0)}function kp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-N(i),c=1<<l,h=o[l];h===-1?((c&t)===0||(c&n)!==0)&&(o[l]=$m(c,a)):h<=a&&(e.expiredLanes|=c),i&=~c}if(a=Ge,t=ze,t=gs(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&hn(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||fo(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&hn(n),Bi(t)){case 2:case 8:t=ms;break;case 32:t=gn;break;case 268435456:t=po;break;default:t=gn}return n=zp.bind(null,e),t=fn(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&hn(n),e.callbackPriority=2,e.callbackNode=null,2}function zp(e,a){if(ea!==0&&ea!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(ui()&&e.callbackNode!==t)return null;var n=ze;return n=gs(e,e===Ge?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(sp(e,n,a),kp(e,sa()),e.callbackNode!=null&&e.callbackNode===t?zp.bind(null,e):null)}function Sp(e,a){if(ui())return null;sp(e,a,!0)}function Nh(){Hh(function(){(Me&6)!==0?fn(uo,Sh):jp()})}function Er(){if(_t===0){var e=Ln;e===0&&(e=ye,ye<<=1,(ye&261888)===0&&(ye=256)),_t=e}return _t}function Np(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ys(""+e)}function Ep(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Eh(e,a,t,n,o){if(a==="submit"&&t&&t.stateNode===o){var i=Np((o[ha]||null).action),l=n.submitter;l&&(a=(a=l[ha]||null)?Np(a.formAction):l.getAttribute("formAction"),a!==null&&(i=a,l=null));var c=new zs("action","action",null,n,o);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_t!==0){var h=l?Ep(o,l):new FormData(o);Kl(t,{pending:!0,data:h,method:o.method,action:i},null,h)}}else typeof i=="function"&&(c.preventDefault(),h=l?Ep(o,l):new FormData(o),Kl(t,{pending:!0,data:h,method:o.method,action:i},i,h))},currentTarget:o}]})}}for(var qr=0;qr<ul.length;qr++){var Tr=ul[qr],qh=Tr.toLowerCase(),Th=Tr[0].toUpperCase()+Tr.slice(1);Ya(qh,"on"+Th)}Ya(ou,"onAnimationEnd"),Ya(su,"onAnimationIteration"),Ya(iu,"onAnimationStart"),Ya("dblclick","onDoubleClick"),Ya("focusin","onFocus"),Ya("focusout","onBlur"),Ya(Xf,"onTransitionRun"),Ya(Zf,"onTransitionStart"),Ya(Kf,"onTransitionCancel"),Ya(lu,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ah=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function qp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var i=void 0;if(a)for(var l=n.length-1;0<=l;l--){var c=n[l],h=c.instance,q=c.currentTarget;if(c=c.listener,h!==i&&o.isPropagationStopped())break e;i=c,o.currentTarget=q;try{i(o)}catch(M){Es(M)}o.currentTarget=null,i=h}else for(l=0;l<n.length;l++){if(c=n[l],h=c.instance,q=c.currentTarget,c=c.listener,h!==i&&o.isPropagationStopped())break e;i=c,o.currentTarget=q;try{i(o)}catch(M){Es(M)}o.currentTarget=null,i=h}}}}function ke(e,a){var t=a[Yi];t===void 0&&(t=a[Yi]=new Set);var n=e+"__bubble";t.has(n)||(Tp(a,e,2,!1),t.add(n))}function Ar(e,a,t){var n=0;a&&(n|=4),Tp(t,e,n,a)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[mi]){e[mi]=!0,jc.forEach(function(t){t!=="selectionchange"&&(Ah.has(t)||Ar(t,!1,e),Ar(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[mi]||(a[mi]=!0,Ar("selectionchange",!1,a))}}function Tp(e,a,t,n){switch(om(a)){case 2:var o=og;break;case 8:o=sg;break;default:o=Zr}t=o.bind(null,a,t,e),o=void 0,!$i||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function Mr(e,a,t,n,o){var i=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var c=n.stateNode.containerInfo;if(c===o)break;if(l===4)for(l=n.return;l!==null;){var h=l.tag;if((h===3||h===4)&&l.stateNode.containerInfo===o)return;l=l.return}for(;c!==null;){if(l=vn(c),l===null)return;if(h=l.tag,h===5||h===6||h===26||h===27){n=i=l;continue e}c=c.parentNode}}n=n.return}Dc(function(){var q=i,M=Ii(t),O=[];e:{var T=ru.get(e);if(T!==void 0){var A=zs,I=e;switch(e){case"keypress":if(js(t)===0)break e;case"keydown":case"keyup":A=kf;break;case"focusin":I="focus",A=al;break;case"focusout":I="blur",A=al;break;case"beforeblur":case"afterblur":A=al;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Nf;break;case ou:case su:case iu:A=ff;break;case lu:A=qf;break;case"scroll":case"scrollend":A=cf;break;case"wheel":A=Af;break;case"copy":case"cut":case"paste":A=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Gc;break;case"toggle":case"beforetoggle":A=Mf}var re=(a&4)!==0,_e=!re&&(e==="scroll"||e==="scrollend"),k=re?T!==null?T+"Capture":null:T;re=[];for(var v=q,E;v!==null;){var L=v;if(E=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||E===null||k===null||(L=vo(v,k),L!=null&&re.push($o(v,L,E))),_e)break;v=v.return}0<re.length&&(T=new A(T,I,null,t,M),O.push({event:T,listeners:re}))}}if((a&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&t!==Ji&&(I=t.relatedTarget||t.fromElement)&&(vn(I)||I[bn]))break e;if((A||T)&&(T=M.window===M?M:(T=M.ownerDocument)?T.defaultView||T.parentWindow:window,A?(I=t.relatedTarget||t.toElement,A=q,I=I?vn(I):null,I!==null&&(_e=g(I),re=I.tag,I!==_e||re!==5&&re!==27&&re!==6)&&(I=null)):(A=null,I=q),A!==I)){if(re=_c,L="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(re=Gc,L="onPointerLeave",k="onPointerEnter",v="pointer"),_e=A==null?T:bo(A),E=I==null?T:bo(I),T=new re(L,v+"leave",A,t,M),T.target=_e,T.relatedTarget=E,L=null,vn(M)===q&&(re=new re(k,v+"enter",I,t,M),re.target=E,re.relatedTarget=_e,L=re),_e=L,A&&I)a:{for(re=Ch,k=A,v=I,E=0,L=k;L;L=re(L))E++;L=0;for(var se=v;se;se=re(se))L++;for(;0<E-L;)k=re(k),E--;for(;0<L-E;)v=re(v),L--;for(;E--;){if(k===v||v!==null&&k===v.alternate){re=k;break a}k=re(k),v=re(v)}re=null}else re=null;A!==null&&Ap(O,T,A,re,!1),I!==null&&_e!==null&&Ap(O,_e,I,re,!0)}}e:{if(T=q?bo(q):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var Ae=Kc;else if(Xc(T))if(Jc)Ae=Yf;else{Ae=Rf;var ee=Gf}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?q&&Ki(q.elementType)&&(Ae=Kc):Ae=Bf;if(Ae&&(Ae=Ae(e,q))){Zc(O,Ae,t,M);break e}ee&&ee(e,T,q),e==="focusout"&&q&&T.type==="number"&&q.memoizedProps.value!=null&&Zi(T,"number",T.value)}switch(ee=q?bo(q):window,e){case"focusin":(Xc(ee)||ee.contentEditable==="true")&&(En=ee,ll=q,No=null);break;case"focusout":No=ll=En=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,tu(O,t,M);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":tu(O,t,M)}var xe;if(nl)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Nn?Vc(e,t)&&(Se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Se="onCompositionStart");Se&&(Rc&&t.locale!=="ko"&&(Nn||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Nn&&(xe=Lc()):(wt=M,Fi="value"in wt?wt.value:wt.textContent,Nn=!0)),ee=fi(q,Se),0<ee.length&&(Se=new Hc(Se,e,null,t,M),O.push({event:Se,listeners:ee}),xe?Se.data=xe:(xe=Qc(t),xe!==null&&(Se.data=xe)))),(xe=Df?Lf(e,t):Of(e,t))&&(Se=fi(q,"onBeforeInput"),0<Se.length&&(ee=new Hc("onBeforeInput","beforeinput",null,t,M),O.push({event:ee,listeners:Se}),ee.data=xe)),Eh(O,e,q,t,M)}qp(O,a)})}function $o(e,a,t){return{instance:e,listener:a,currentTarget:t}}function fi(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=vo(e,t),o!=null&&n.unshift($o(e,o,i)),o=vo(e,a),o!=null&&n.push($o(e,o,i))),e.tag===3)return n;e=e.return}return[]}function Ch(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ap(e,a,t,n,o){for(var i=a._reactName,l=[];t!==null&&t!==n;){var c=t,h=c.alternate,q=c.stateNode;if(c=c.tag,h!==null&&h===n)break;c!==5&&c!==26&&c!==27||q===null||(h=q,o?(q=vo(t,i),q!=null&&l.unshift($o(t,q,h))):o||(q=vo(t,i),q!=null&&l.push($o(t,q,h)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var Mh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Cp(e){return(typeof e=="string"?e:""+e).replace(Mh,`
`).replace(Uh,"")}function Mp(e,a){return a=Cp(a),Cp(e)===a}function Oe(e,a,t,n,o,i){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||kn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&kn(e,""+n);break;case"className":vs(e,"class",n);break;case"tabIndex":vs(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(e,t,n);break;case"style":Mc(e,n,i);break;case"data":if(a!=="object"){vs(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ys(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&Oe(e,a,"name",o.name,o,null),Oe(e,a,"formEncType",o.formEncType,o,null),Oe(e,a,"formMethod",o.formMethod,o,null),Oe(e,a,"formTarget",o.formTarget,o,null)):(Oe(e,a,"encType",o.encType,o,null),Oe(e,a,"method",o.method,o,null),Oe(e,a,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ys(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Pa);break;case"onScroll":n!=null&&ke("scroll",e);break;case"onScrollEnd":n!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=ys(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ke("beforetoggle",e),ke("toggle",e),bs(e,"popover",n);break;case"xlinkActuate":Fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Fa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Fa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Fa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Fa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":bs(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=lf.get(t)||t,bs(e,t,n))}}function Ur(e,a,t,n,o,i){switch(t){case"style":Mc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof n=="string"?kn(e,n):(typeof n=="number"||typeof n=="bigint")&&kn(e,""+n);break;case"onScroll":n!=null&&ke("scroll",e);break;case"onScrollEnd":n!=null&&ke("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),a=t.slice(2,o?t.length-7:void 0),i=e[ha]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,o),typeof n=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,o);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):bs(e,t,n)}}}function ua(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var n=!1,o=!1,i;for(i in t)if(t.hasOwnProperty(i)){var l=t[i];if(l!=null)switch(i){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Oe(e,a,i,l,t,null)}}o&&Oe(e,a,"srcSet",t.srcSet,t,null),n&&Oe(e,a,"src",t.src,t,null);return;case"input":ke("invalid",e);var c=i=l=o=null,h=null,q=null;for(n in t)if(t.hasOwnProperty(n)){var M=t[n];if(M!=null)switch(n){case"name":o=M;break;case"type":l=M;break;case"checked":h=M;break;case"defaultChecked":q=M;break;case"value":i=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,a));break;default:Oe(e,a,n,M,t,null)}}qc(e,i,c,h,q,l,o,!1);return;case"select":ke("invalid",e),n=l=i=null;for(o in t)if(t.hasOwnProperty(o)&&(c=t[o],c!=null))switch(o){case"value":i=c;break;case"defaultValue":l=c;break;case"multiple":n=c;default:Oe(e,a,o,c,t,null)}a=i,t=l,e.multiple=!!n,a!=null?jn(e,!!n,a,!1):t!=null&&jn(e,!!n,t,!0);return;case"textarea":ke("invalid",e),i=o=n=null;for(l in t)if(t.hasOwnProperty(l)&&(c=t[l],c!=null))switch(l){case"value":n=c;break;case"defaultValue":o=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:Oe(e,a,l,c,t,null)}Ac(e,n,o,i);return;case"option":for(h in t)t.hasOwnProperty(h)&&(n=t[h],n!=null)&&(h==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Oe(e,a,h,n,t,null));return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(n=0;n<Wo.length;n++)ke(Wo[n],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in t)if(t.hasOwnProperty(q)&&(n=t[q],n!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Oe(e,a,q,n,t,null)}return;default:if(Ki(a)){for(M in t)t.hasOwnProperty(M)&&(n=t[M],n!==void 0&&Ur(e,a,M,n,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(n=t[c],n!=null&&Oe(e,a,c,n,t,null))}function Dh(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,c=null,h=null,q=null,M=null;for(A in t){var O=t[A];if(t.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=O;default:n.hasOwnProperty(A)||Oe(e,a,A,null,n,O)}}for(var T in n){var A=n[T];if(O=t[T],n.hasOwnProperty(T)&&(A!=null||O!=null))switch(T){case"type":i=A;break;case"name":o=A;break;case"checked":q=A;break;case"defaultChecked":M=A;break;case"value":l=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,a));break;default:A!==O&&Oe(e,a,T,A,n,O)}}Xi(e,l,c,h,q,M,i,o);return;case"select":A=l=c=T=null;for(i in t)if(h=t[i],t.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:n.hasOwnProperty(i)||Oe(e,a,i,null,n,h)}for(o in n)if(i=n[o],h=t[o],n.hasOwnProperty(o)&&(i!=null||h!=null))switch(o){case"value":T=i;break;case"defaultValue":c=i;break;case"multiple":l=i;default:i!==h&&Oe(e,a,o,i,n,h)}a=c,t=l,n=A,T!=null?jn(e,!!t,T,!1):!!n!=!!t&&(a!=null?jn(e,!!t,a,!0):jn(e,!!t,t?[]:"",!1));return;case"textarea":A=T=null;for(c in t)if(o=t[c],t.hasOwnProperty(c)&&o!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Oe(e,a,c,null,n,o)}for(l in n)if(o=n[l],i=t[l],n.hasOwnProperty(l)&&(o!=null||i!=null))switch(l){case"value":T=o;break;case"defaultValue":A=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==i&&Oe(e,a,l,o,n,i)}Tc(e,T,A);return;case"option":for(var I in t)T=t[I],t.hasOwnProperty(I)&&T!=null&&!n.hasOwnProperty(I)&&(I==="selected"?e.selected=!1:Oe(e,a,I,null,n,T));for(h in n)T=n[h],A=t[h],n.hasOwnProperty(h)&&T!==A&&(T!=null||A!=null)&&(h==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Oe(e,a,h,T,n,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in t)T=t[re],t.hasOwnProperty(re)&&T!=null&&!n.hasOwnProperty(re)&&Oe(e,a,re,null,n,T);for(q in n)if(T=n[q],A=t[q],n.hasOwnProperty(q)&&T!==A&&(T!=null||A!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,a));break;default:Oe(e,a,q,T,n,A)}return;default:if(Ki(a)){for(var _e in t)T=t[_e],t.hasOwnProperty(_e)&&T!==void 0&&!n.hasOwnProperty(_e)&&Ur(e,a,_e,void 0,n,T);for(M in n)T=n[M],A=t[M],!n.hasOwnProperty(M)||T===A||T===void 0&&A===void 0||Ur(e,a,M,T,n,A);return}}for(var k in t)T=t[k],t.hasOwnProperty(k)&&T!=null&&!n.hasOwnProperty(k)&&Oe(e,a,k,null,n,T);for(O in n)T=n[O],A=t[O],!n.hasOwnProperty(O)||T===A||T==null&&A==null||Oe(e,a,O,T,n,A)}function Up(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var o=t[n],i=o.transferSize,l=o.initiatorType,c=o.duration;if(i&&c&&Up(l)){for(l=0,c=o.responseEnd,n+=1;n<t.length;n++){var h=t[n],q=h.startTime;if(q>c)break;var M=h.transferSize,O=h.initiatorType;M&&Up(O)&&(h=h.responseEnd,l+=M*(h<c?1:(c-q)/(h-q)))}if(--n,a+=8*(i+l)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dr=null,Lr=null;function hi(e){return e.nodeType===9?e:e.ownerDocument}function Dp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Or(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var _r=null;function Oh(){var e=window.event;return e&&e.type==="popstate"?e===_r?!1:(_r=e,!0):(_r=null,!1)}var Op=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(e){return _p.resolve(null).then(e).catch(Gh)}:Op;function Gh(e){setTimeout(function(){throw e})}function Ht(e){return e==="head"}function Hp(e,a){var t=a,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(o),eo(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Fo(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Fo(t);for(var i=t.firstChild;i;){var l=i.nextSibling,c=i.nodeName;i[go]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=l}}else t==="body"&&Fo(e.ownerDocument.body);t=o}while(t);eo(a)}function Gp(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function Hr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Hr(t),Vi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Rh(e,a,t,n){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[go])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ha(e.nextSibling),e===null)break}return null}function Bh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ha(e.nextSibling),e===null))return null;return e}function Rp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ha(e.nextSibling),e===null))return null;return e}function Gr(e){return e.data==="$?"||e.data==="$~"}function Rr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yh(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ha(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Br=null;function Bp(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Ha(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Yp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Vp(e,a,t){switch(a=hi(t),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Fo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vi(e)}var Ga=new Map,Qp=new Set;function gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ht=R.d;R.d={f:Vh,r:Qh,D:Xh,C:Zh,L:Kh,m:Jh,X:Wh,S:Ih,M:$h};function Vh(){var e=ht.f(),a=li();return e||a}function Qh(e){var a=xn(e);a!==null&&a.tag===5&&a.type==="form"?ld(a):ht.r(e)}var $n=typeof document>"u"?null:document;function Xp(e,a,t){var n=$n;if(n&&typeof a=="string"&&a){var o=Ca(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),Qp.has(o)||(Qp.add(o),e={rel:e,crossOrigin:t,href:a},n.querySelector(o)===null&&(a=n.createElement("link"),ua(a,"link",e),na(a),n.head.appendChild(a)))}}function Xh(e){ht.D(e),Xp("dns-prefetch",e,null)}function Zh(e,a){ht.C(e,a),Xp("preconnect",e,a)}function Kh(e,a,t){ht.L(e,a,t);var n=$n;if(n&&e&&a){var o='link[rel="preload"][as="'+Ca(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Ca(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Ca(t.imageSizes)+'"]')):o+='[href="'+Ca(e)+'"]';var i=o;switch(a){case"style":i=Fn(e);break;case"script":i=Pn(e)}Ga.has(i)||(e=S({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ga.set(i,e),n.querySelector(o)!==null||a==="style"&&n.querySelector(Po(i))||a==="script"&&n.querySelector(es(i))||(a=n.createElement("link"),ua(a,"link",e),na(a),n.head.appendChild(a)))}}function Jh(e,a){ht.m(e,a);var t=$n;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+Ca(n)+'"][href="'+Ca(e)+'"]',i=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Pn(e)}if(!Ga.has(i)&&(e=S({rel:"modulepreload",href:e},a),Ga.set(i,e),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(es(i)))return}n=t.createElement("link"),ua(n,"link",e),na(n),t.head.appendChild(n)}}}function Ih(e,a,t){ht.S(e,a,t);var n=$n;if(n&&e){var o=yn(n).hoistableStyles,i=Fn(e);a=a||"default";var l=o.get(i);if(!l){var c={loading:0,preload:null};if(l=n.querySelector(Po(i)))c.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ga.get(i))&&Yr(e,t);var h=l=n.createElement("link");na(h),ua(h,"link",e),h._p=new Promise(function(q,M){h.onload=q,h.onerror=M}),h.addEventListener("load",function(){c.loading|=1}),h.addEventListener("error",function(){c.loading|=2}),c.loading|=4,bi(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:c},o.set(i,l)}}}function Wh(e,a){ht.X(e,a);var t=$n;if(t&&e){var n=yn(t).hoistableScripts,o=Pn(e),i=n.get(o);i||(i=t.querySelector(es(o)),i||(e=S({src:e,async:!0},a),(a=Ga.get(o))&&Vr(e,a),i=t.createElement("script"),na(i),ua(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(o,i))}}function $h(e,a){ht.M(e,a);var t=$n;if(t&&e){var n=yn(t).hoistableScripts,o=Pn(e),i=n.get(o);i||(i=t.querySelector(es(o)),i||(e=S({src:e,async:!0,type:"module"},a),(a=Ga.get(o))&&Vr(e,a),i=t.createElement("script"),na(i),ua(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(o,i))}}function Zp(e,a,t,n){var o=(o=he.current)?gi(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Fn(t.href),t=yn(o).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Fn(t.href);var i=yn(o).hoistableStyles,l=i.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=o.querySelector(Po(e)))&&!i._p&&(l.instance=i,l.state.loading=5),Ga.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ga.set(e,t),i||Fh(o,e,t,l.state))),a&&n===null)throw Error(r(528,""));return l}if(a&&n!==null)throw Error(r(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Pn(t),t=yn(o).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Fn(e){return'href="'+Ca(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function Kp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Fh(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ua(a,"link",t),na(a),e.head.appendChild(a))}function Pn(e){return'[src="'+Ca(e)+'"]'}function es(e){return"script[async]"+e}function Jp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ca(t.href)+'"]');if(n)return a.instance=n,na(n),n;var o=S({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),na(n),ua(n,"style",o),bi(n,t.precedence,e),a.instance=n;case"stylesheet":o=Fn(t.href);var i=e.querySelector(Po(o));if(i)return a.state.loading|=4,a.instance=i,na(i),i;n=Kp(t),(o=Ga.get(o))&&Yr(n,o),i=(e.ownerDocument||e).createElement("link"),na(i);var l=i;return l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),ua(i,"link",n),a.state.loading|=4,bi(i,t.precedence,e),a.instance=i;case"script":return i=Pn(t.src),(o=e.querySelector(es(i)))?(a.instance=o,na(o),o):(n=t,(o=Ga.get(i))&&(n=S({},t),Vr(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),na(o),ua(o,"link",n),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,bi(n,t.precedence,e));return a.instance}function bi(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,i=o,l=0;l<n.length;l++){var c=n[l];if(c.dataset.precedence===a)i=c;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Yr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Vr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var vi=null;function Ip(e,a,t){if(vi===null){var n=new Map,o=vi=new Map;o.set(t,n)}else o=vi,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var i=t[o];if(!(i[go]||i[ia]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(a)||"";l=e+l;var c=n.get(l);c?c.push(i):n.set(l,[i])}}return n}function Wp(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Ph(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function $p(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eg(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Fn(n.href),i=a.querySelector(Po(o));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=xi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,na(i);return}i=a.ownerDocument||a,n=Kp(n),(o=Ga.get(o))&&Yr(n,o),i=i.createElement("link"),na(i);var l=i;l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),ua(i,"link",n),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=xi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Qr=0;function ag(e,a){return e.stylesheets&&e.count===0&&wi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&Qr===0&&(Qr=62500*Lh());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Qr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yi=null;function wi(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yi=new Map,a.forEach(tg,e),yi=null,xi.call(e))}function tg(e,a){if(!(a.state.loading&4)){var t=yi.get(e);if(t)var n=t.get(null);else{t=new Map,yi.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var l=o[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}o=a.instance,l=o.getAttribute("data-precedence"),i=t.get(l)||n,i===n&&t.set(null,o),t.set(l,o),this.count++,n=xi.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),i?i.parentNode.insertBefore(o,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var as={$$typeof:ae,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function ng(e,a,t,n,o,i,l,c,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.hiddenUpdates=Gi(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Fp(e,a,t,n,o,i,l,c,h,q,M,O){return e=new ng(e,a,t,l,h,q,M,O,c),a=1,i===!0&&(a|=24),i=ka(3,null,null,a),e.current=i,i.stateNode=e,a=kl(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:t,cache:a},El(i),e}function Pp(e){return e?(e=An,e):An}function em(e,a,t,n,o,i){o=Pp(o),n.context===null?n.context=o:n.pendingContext=o,n=Et(a),n.payload={element:t},i=i===void 0?null:i,i!==null&&(n.callback=i),t=qt(e,n,a),t!==null&&(wa(t,e,a),Uo(t,e,a))}function am(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Xr(e,a){am(e,a),(e=e.alternate)&&am(e,a)}function tm(e){if(e.tag===13||e.tag===31){var a=Wt(e,67108864);a!==null&&wa(a,e,67108864),Xr(e,67108864)}}function nm(e){if(e.tag===13||e.tag===31){var a=qa();a=Ri(a);var t=Wt(e,a);t!==null&&wa(t,e,a),Xr(e,a)}}var ji=!0;function og(e,a,t,n){var o=z.T;z.T=null;var i=R.p;try{R.p=2,Zr(e,a,t,n)}finally{R.p=i,z.T=o}}function sg(e,a,t,n){var o=z.T;z.T=null;var i=R.p;try{R.p=8,Zr(e,a,t,n)}finally{R.p=i,z.T=o}}function Zr(e,a,t,n){if(ji){var o=Kr(n);if(o===null)Mr(e,a,n,ki,t),sm(e,n);else if(lg(o,e,a,t,n))n.stopPropagation();else if(sm(e,n),a&4&&-1<ig.indexOf(e)){for(;o!==null;){var i=xn(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=Za(i.pendingLanes);if(l!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;l;){var h=1<<31-N(l);c.entanglements[1]|=h,l&=~h}Wa(i),(Me&6)===0&&(si=sa()+500,Io(0))}}break;case 31:case 13:c=Wt(i,2),c!==null&&wa(c,i,2),li(),Xr(i,2)}if(i=Kr(n),i===null&&Mr(e,a,n,ki,t),i===o)break;o=i}o!==null&&n.stopPropagation()}else Mr(e,a,n,null,t)}}function Kr(e){return e=Ii(e),Jr(e)}var ki=null;function Jr(e){if(ki=null,e=vn(e),e!==null){var a=g(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=x(a),e!==null)return e;e=null}else if(t===31){if(e=f(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ki=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hi()){case uo:return 2;case ms:return 8;case gn:case fs:return 32;case po:return 268435456;default:return 32}default:return 32}}var Ir=!1,Gt=null,Rt=null,Bt=null,ts=new Map,ns=new Map,Yt=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sm(e,a){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":ts.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(a.pointerId)}}function os(e,a,t,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},a!==null&&(a=xn(a),a!==null&&tm(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function lg(e,a,t,n,o){switch(a){case"focusin":return Gt=os(Gt,e,a,t,n,o),!0;case"dragenter":return Rt=os(Rt,e,a,t,n,o),!0;case"mouseover":return Bt=os(Bt,e,a,t,n,o),!0;case"pointerover":var i=o.pointerId;return ts.set(i,os(ts.get(i)||null,e,a,t,n,o)),!0;case"gotpointercapture":return i=o.pointerId,ns.set(i,os(ns.get(i)||null,e,a,t,n,o)),!0}return!1}function im(e){var a=vn(e.target);if(a!==null){var t=g(a);if(t!==null){if(a=t.tag,a===13){if(a=x(t),a!==null){e.blockedOn=a,yc(e.priority,function(){nm(t)});return}}else if(a===31){if(a=f(t),a!==null){e.blockedOn=a,yc(e.priority,function(){nm(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Kr(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Ji=n,t.target.dispatchEvent(n),Ji=null}else return a=xn(t),a!==null&&tm(a),e.blockedOn=t,!1;a.shift()}return!0}function lm(e,a,t){zi(e)&&t.delete(a)}function rg(){Ir=!1,Gt!==null&&zi(Gt)&&(Gt=null),Rt!==null&&zi(Rt)&&(Rt=null),Bt!==null&&zi(Bt)&&(Bt=null),ts.forEach(lm),ns.forEach(lm)}function Si(e,a){e.blockedOn===a&&(e.blockedOn=null,Ir||(Ir=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,rg)))}var Ni=null;function rm(e){Ni!==e&&(Ni=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ni===e&&(Ni=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],o=e[a+2];if(typeof n!="function"){if(Jr(n||t)===null)continue;break}var i=xn(t);i!==null&&(e.splice(a,3),a-=3,Kl(i,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function eo(e){function a(h){return Si(h,e)}Gt!==null&&Si(Gt,e),Rt!==null&&Si(Rt,e),Bt!==null&&Si(Bt,e),ts.forEach(a),ns.forEach(a);for(var t=0;t<Yt.length;t++){var n=Yt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Yt.length&&(t=Yt[0],t.blockedOn===null);)im(t),t.blockedOn===null&&Yt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],i=t[n+1],l=o[ha]||null;if(typeof i=="function")l||rm(t);else if(l){var c=null;if(i&&i.hasAttribute("formAction")){if(o=i,l=i[ha]||null)c=l.formAction;else if(Jr(o)!==null)continue}else c=l.action;typeof c=="function"?t[n+1]=c:(t.splice(n,3),n-=3),rm(t)}}}function cm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return o=l})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Wr(e){this._internalRoot=e}Ei.prototype.render=Wr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var t=a.current,n=qa();em(t,n,e,a,null,null)},Ei.prototype.unmount=Wr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;em(e.current,2,null,e,null,null),li(),a[bn]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var a=xc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Yt.length&&a!==0&&a<Yt[t].priority;t++);Yt.splice(t,0,e),t===0&&im(e)}};var um=p.version;if(um!=="19.2.5")throw Error(r(527,um,"19.2.5"));R.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=y(a),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var cg={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Xt=qi.inject(cg),ma=qi}catch{}}return is.createRoot=function(e,a){if(!m(e))throw Error(r(299));var t=!1,n="",o=bd,i=vd,l=xd;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=Fp(e,1,!1,null,null,t,n,null,o,i,l,cm),e[bn]=a.current,Cr(e),new Wr(a)},is.hydrateRoot=function(e,a,t){if(!m(e))throw Error(r(299));var n=!1,o="",i=bd,l=vd,c=xd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(h=t.formState)),a=Fp(e,1,!0,a,t??null,n,o,h,i,l,c,cm),a.context=Pp(null),t=a.current,n=qa(),n=Ri(n),o=Et(n),o.callback=null,qt(t,o,n),t=n,a.current.lanes=t,ho(a,t),Wa(a),e[bn]=a.current,Cr(e),new Ei(a)},is.version="19.2.5",is}var ym;function yg(){if(ym)return Pr.exports;ym=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(p){console.error(p)}}return u(),Pr.exports=xg(),Pr.exports}var wg=yg();function jg(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const u="/Learn-Spanish/";navigator.serviceWorker.register(`${u}sw.js`,{scope:u}).then(p=>{function d(r){window.dispatchEvent(new CustomEvent("learn-spanish-update-ready",{detail:{worker:r}}))}p.waiting&&navigator.serviceWorker.controller&&d(p.waiting),p.addEventListener("updatefound",()=>{const r=p.installing;r&&r.addEventListener("statechange",()=>{r.state==="installed"&&navigator.serviceWorker.controller&&d(r)})})}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.__learnSpanishRefreshing||(window.__learnSpanishRefreshing=!0,window.location.reload())})})}const kg="modulepreload",zg=function(u){return"/Learn-Spanish/"+u},wm={},Am=function(p,d,r){let m=Promise.resolve();if(d&&d.length>0){let y=function(j){return Promise.all(j.map(S=>Promise.resolve(S).then(U=>({status:"fulfilled",value:U}),U=>({status:"rejected",reason:U}))))};var x=y;document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),w=f?.nonce||f?.getAttribute("nonce");m=y(d.map(j=>{if(j=zg(j),j in wm)return;wm[j]=!0;const S=j.endsWith(".css"),U=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${U}`))return;const _=document.createElement("link");if(_.rel=S?"stylesheet":kg,S||(_.as="script"),_.crossOrigin="",_.href=j,w&&_.setAttribute("nonce",w),document.head.appendChild(_),S)return new Promise((J,K)=>{_.addEventListener("load",J),_.addEventListener("error",()=>K(new Error(`Unable to preload CSS for ${j}`)))})}))}function g(f){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=f,window.dispatchEvent(w),!w.defaultPrevented)throw f}return m.then(f=>{for(const w of f||[])w.status==="rejected"&&g(w.reason);return p().catch(g)})};const Sg=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cm=(...u)=>u.filter((p,d,r)=>!!p&&p.trim()!==""&&r.indexOf(p)===d).join(" ").trim();var Ng={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Eg=H.forwardRef(({color:u="currentColor",size:p=24,strokeWidth:d=2,absoluteStrokeWidth:r,className:m="",children:g,iconNode:x,...f},w)=>H.createElement("svg",{ref:w,...Ng,width:p,height:p,stroke:u,strokeWidth:r?Number(d)*24/Number(p):d,className:Cm("lucide",m),...f},[...x.map(([y,j])=>H.createElement(y,j)),...Array.isArray(g)?g:[g]]));const He=(u,p)=>{const d=H.forwardRef(({className:r,...m},g)=>H.createElement(Eg,{ref:g,iconNode:p,className:Cm(`lucide-${Sg(u)}`,r),...m}));return d.displayName=`${u}`,d};const rc=He("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const qg=He("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const lo=He("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const Tg=He("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const cc=He("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const ro=He("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const Ag=He("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const so=He("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const uc=He("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const dc=He("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Mm=He("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Cg=He("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);const cs=He("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const Mg=He("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const ds=He("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const Ug=He("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const Dg=He("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const Lg=He("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const pc=He("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const Um=He("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);const Dm=He("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Og=He("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const us=He("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Ti=He("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const Ai=He("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const oc=He("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const pn=He("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const sc=He("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),_g=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],Hg=1440*60*1e3,Gg="learner-profile-v1";function gt(u){return String(u||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function Rg(u,p,d=Date.now()){const r=u?.intervalDays||0,m=u?.ease||2.35,g=u?.reps||0,x={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:g?2:1,multiplier:m},easy:{label:"Easy",easeDelta:.12,minDays:g?4:3,multiplier:m+.7}}[p]||{label:"Good",easeDelta:0,minDays:1,multiplier:m},f=Math.max(1.35,Math.min(3.2,m+x.easeDelta)),w=p==="again"?x.minDays:Math.max(x.minDays,(r||1)*x.multiplier);return{...u,ease:f,intervalDays:w,dueAt:d+w*Hg,reps:p==="again"?0:g+1,lapses:p==="again"?(u?.lapses||0)+1:u?.lapses||0,seen:!0,mastered:p==="easy"||w>=7,lastRating:x.label,reviewedAt:d}}function Bg(u){const p=[u.title,u.heading,u.text];for(const d of u.paragraphs||[])p.push(d);for(const d of u.pairs||[])p.push(d.es,d.en);for(const d of u.columns||[])p.push(d.es,d.en);for(const d of u.phrases||[])p.push(d.es,d.en);for(const d of u.words||[])p.push(d.es,d.en);for(const d of u.lessons||[]){p.push(d.title,d.subtitle,d.intro);for(const r of d.sections||[]){p.push(r.heading,r.text,r.tip,r.takeaway);for(const m of r.table?.rows||[])p.push(...m);for(const m of r.examples||[])p.push(m.es,m.en)}}for(const d of u.stories||[])p.push(d.title,d.level,...d.paragraphs||[]);for(const d of u.bios||[]){p.push(d.title,d.subtitle,d.dates);for(const r of d.levels||[])p.push(r.heading,...r.paragraphs||[],r.vocab)}for(const d of u.poems||[]){p.push(d.title,d.attribution,d.note,d.opening,d.learningNote);for(const r of d.stanzas||[])p.push(r.es,r.en);for(const r of d.vocab||[])p.push(r.es,r.en)}for(const d of u.songs||[]){p.push(d.title,d.attribution,d.note,d.learningNote);for(const r of d.sections||[])p.push(r.label,r.es,r.en);for(const r of d.vocab||[])p.push(r.es,r.en)}return p.filter(Boolean).join(" ")}function Yg(u,p,d=[],r=[]){const m=gt(u);if(m.length<2)return[];const g=[];for(const f of p||[]){const w=[f.title,f.subtitle,f.intro,f.sectionLabel,f.level].filter(Boolean).join(" ");gt(w).includes(m)&&g.push({type:"chapter",title:f.title,meta:`${f.sectionLabel} - ${f.level}`,chapter:f,context:f.subtitle||f.intro||""});for(const y of f.blocks||[]){const j=Bg(y);gt(j).includes(m)&&g.push({type:"match",title:f.title,meta:`${f.sectionLabel} - match inside lesson`,chapter:f,context:jm(j,u)})}}for(const f of d||[]){const w=[f.word,f.translation,f.pos,...f.tags||[]].join(" ");gt(w).includes(m)&&g.push({type:"memoria",title:f.word,meta:f.translation||"Memoria",context:(f.tags||[]).join(", ")})}for(const f of r||[]){const w=[f.prompt,f.text].join(" ");gt(w).includes(m)&&g.push({type:"writing",title:"Writing entry",meta:new Date(f.createdAt||Date.now()).toLocaleDateString(),context:jm(w,u)})}const x=new Set;return g.filter(f=>{const w=`${f.type}:${f.title}:${f.context}`;return x.has(w)?!1:(x.add(w),!0)}).slice(0,18)}function jm(u,p){const d=String(u||"").replace(/\s+/g," ").trim(),r=gt(d).indexOf(gt(p));return r<0?d.slice(0,120):d.slice(Math.max(0,r-45),r+95).trim()}function Vg(u,p={}){const d=String(u||""),r=gt(d),m=d.trim()?d.trim().split(/\s+/).length:0,g=(d.match(/[.!?]/g)||[]).length,x=(d.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,f=(d.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi)||[]).length,w=(d.match(/\b(soy|estoy|tengo|quiero|puedo|voy|hago|digo|veo|vivo|trabajo|estudio|fui|era|tenia|tenía|hablo|aprendo)\b/gi)||[]).length,y=p?.target?r.includes(gt(p.target)):!0,j=[];m<20&&j.push("Add more detail."),g<2&&j.push("Use at least two complete sentences."),y||j.push("Use the prompt word or idea."),x===0&&j.push("Check accents when needed."),f<1&&m>=20&&j.push("Add a connector like porque, aunque, or entonces."),w<2&&m>=15&&j.push("Use more conjugated verbs.");const S=Math.max(0,Math.min(100,20+Math.min(m,60)+Math.min(g*8,20)+Math.min(f*6,12)+Math.min(w*4,16)+(y?10:-10)));return{words:m,sentences:g,accents:x,connectors:f,verbs:w,targetUsed:y,tips:j,score:S}}function Qg({chapters:u=[],visitedChapters:p=[],lessonStatuses:d={},palabrasProgress:r={},savedWords:m=[],writingEntries:g=[]}={},x=Date.now()){const f=Object.values(d||{}),w=Object.values(r||{}),y=m.map(S=>S.review).filter(Boolean),j=[...w,...y];return{chapters:{total:u.length,visited:p.length,unvisited:Math.max(0,u.length-p.length)},lessons:{read:f.filter(S=>S==="read"||S==="understood").length,understood:f.filter(S=>S==="understood").length},vocabulary:{seen:j.filter(S=>S?.seen).length,due:j.filter(S=>S?.seen&&(S.dueAt||0)<=x).length,mastered:j.filter(S=>S?.mastered).length,difficult:m.filter(S=>S.difficult||S.review?.lastRating==="Hard").length,favorite:m.filter(S=>S.favorite).length},writing:{count:g.length,words:g.reduce((S,U)=>S+(U.feedback?.words||0),0),needsPractice:g.filter(S=>(S.feedback?.score||0)<70).length}}}function Xg({chapters:u=[],lessonStatuses:p={},palabrasProgress:d={},savedWords:r=[],writingEntries:m=[]}={},g=Date.now()){const x=[];for(const f of Object.values(d||{}))f?.seen&&((f.dueAt||0)<=g||f.lastRating==="Hard")&&x.push({type:"palabra",title:f.spanish||"Palabra",detail:f.english||f.lastRating||"",dueAt:f.dueAt||g,priority:f.lastRating==="Again"?3:f.lastRating==="Hard"?2:1});for(const f of r||[]){const w=f.review?.seen&&(f.review?.dueAt||0)<=g;(w||f.difficult||!f.translation)&&x.push({type:"memoria",title:f.word,detail:f.translation||"Needs translation",dueAt:f.review?.dueAt||g,priority:f.difficult?3:w?2:1})}for(const[f,w]of Object.entries(p||{}))if(w==="read"){const y=f.split("::").pop()||f;x.push({type:"lesson",title:y,detail:"Mark understood after review",dueAt:g,priority:1})}for(const f of m||[])((f.feedback?.score||0)<70||f.feedback?.tips?.length)&&x.push({type:"writing",title:f.prompt||"Writing practice",detail:(f.feedback?.tips||[])[0]||"Rewrite once",dueAt:f.createdAt||g,priority:1});if(x.length<6){for(const f of u||[])if(f.alwaysVisible||x.push({type:"chapter",title:f.title,detail:`${f.sectionLabel} - ${f.level}`,chapter:f,dueAt:g+x.length,priority:0}),x.length>=6)break}return x.sort((f,w)=>w.priority-f.priority||(f.dueAt||0)-(w.dueAt||0)).slice(0,24)}const Zg=["A1","A2","B1","B2"],km="lesson-status-v1",zm="audio-settings-v1",Lm="writing-practice-v1",Kg={tiempos:uc,verbos:sc,verbos2:sc,gramatica:Ug,lectura:Mg,vocabulario:qg,palabras:Mm,frases:Lg,tips:ds,resumen:dc};function Om({id:u,size:p=18,className:d=""}){const r=Kg[u]||rc;return s.jsx(r,{size:p,className:d})}const ls=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]}]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:_g},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"f1",level:"A1",title:"Saludos y Cortesía",subtitle:"The first words you need",intro:"These are the phrases that open every conversation. Learn them by ear, repeat them out loud, and use them at every chance.",blocks:[{type:"phraselist",phrases:[{es:"Hola, ¿qué tal?",en:"Hi, how are you?"},{es:"Buenos días.",en:"Good morning."},{es:"Buenas tardes.",en:"Good afternoon."},{es:"Buenas noches.",en:"Good evening / good night."},{es:"Mucho gusto.",en:"Pleased to meet you."},{es:"Encantado / encantada.",en:"Delighted (to meet you)."},{es:"¿Cómo te llamas?",en:"What is your name?"},{es:"Me llamo Othman.",en:"My name is Othman."},{es:"¿De dónde eres?",en:"Where are you from?"},{es:"Soy de Marruecos.",en:"I am from Morocco."},{es:"Por favor.",en:"Please."},{es:"Gracias. — De nada.",en:"Thank you. — You are welcome."},{es:"Perdón. / Disculpe.",en:"Sorry. / Excuse me."},{es:"Hasta luego.",en:"See you later."},{es:"Hasta mañana.",en:"See you tomorrow."}]},{type:"takeaway",text:"These twenty phrases are the entry door. Repeat each one ten times before moving on. They will be the foundation of every spoken interaction."}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function Jg(u){const p=[];let d="",r="normal";for(let m=0;m<u.length;m++){const g=u[m];g==="["?(d&&p.push({text:d,mode:r}),d="",r="irreg"):g==="]"?(d&&p.push({text:d,mode:"irreg"}),d="",r="normal"):g==="{"?(d&&p.push({text:d,mode:r}),d="",r="ending"):g==="}"?(d&&p.push({text:d,mode:"ending"}),d="",r="normal"):d+=g}return d&&p.push({text:d,mode:r}),p}function ao({raw:u}){return s.jsx(s.Fragment,{children:Jg(u).map((p,d)=>{const r=p.mode==="irreg"?"irreg":p.mode==="ending"?"ending":"";return s.jsx("span",{className:r,children:p.text},d)})})}function to(u){return String(u||"").replace(/[\[\]{}]/g,"")}function vt(u){return String(u||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function Ig({tenses:u,verbName:p}){const[d,r]=H.useState(!1),[m,g]=H.useState([]),[x,f]=H.useState(0),[w,y]=H.useState(""),[j,S]=H.useState(null),[U,_]=H.useState(0),[J,K]=H.useState(!1);function le(){const Y=[];for(const ve of u)for(const X of ve.forms||[])Y.push({tense:ve.name,pronoun:X.p,answer:to(X.f)});const me=[...Y].sort(()=>Math.random()-.5);return me.slice(0,Math.min(8,me.length))}function $(){g(le()),f(0),y(""),S(null),_(0),K(!1),r(!0)}function W(Y){if(Y&&Y.preventDefault(),j)return;const me=m[x],ve=vt(w)===vt(me.answer);S(ve?"correct":"incorrect"),ve&&_(X=>X+1)}function ae(){if(x+1>=m.length){K(!0);return}f(Y=>Y+1),y(""),S(null)}function P(){window.speechSynthesis?.cancel(),r(!1)}const ne=m[x],ie=m.length;return s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"quiz-trigger-btn",onClick:$,children:[s.jsx(us,{size:14}),"Practicar"]}),d&&s.jsx("div",{className:"quiz-overlay",onClick:P,children:s.jsxs("div",{className:"quiz-modal",onClick:Y=>Y.stopPropagation(),children:[s.jsxs("header",{className:"quiz-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),s.jsx("h2",{className:"quiz-title",children:p})]}),s.jsx("button",{className:"quiz-close",onClick:P,"aria-label":"Close",children:s.jsx(pn,{size:18})})]}),J?s.jsxs("div",{className:"quiz-results",children:[s.jsxs("div",{className:"quiz-results-circle",children:[s.jsxs("div",{className:"quiz-results-pct",children:[Math.round(U/ie*100),"%"]}),s.jsxs("div",{className:"quiz-results-fraction",children:[U," / ",ie]})]}),s.jsx("h3",{className:"quiz-results-title",children:U===ie?"¡Perfecto!":U>=ie*.75?"Muy bien":U>=ie*.5?"Sigue practicando":"Vamos a repasar"}),s.jsx("p",{className:"quiz-results-msg",children:U===ie?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":U>=ie*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),s.jsxs("div",{className:"quiz-results-actions",children:[s.jsxs("button",{className:"quiz-retry-btn",onClick:$,children:[s.jsx(Dm,{size:14}),"Otra vez"]}),s.jsx("button",{className:"quiz-done-btn",onClick:P,children:"Cerrar"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"quiz-progress",children:[s.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",x+1," de ",ie]}),s.jsx("div",{className:"quiz-progress-bar",children:s.jsx("div",{className:"quiz-progress-fill",style:{width:`${x/ie*100}%`}})})]}),s.jsxs("div",{className:"quiz-question",children:[s.jsx("div",{className:"quiz-tense-label",children:ne.tense}),s.jsxs("div",{className:"quiz-prompt",children:[s.jsx("span",{className:"quiz-pronoun",children:ne.pronoun}),s.jsx("span",{className:"quiz-blank",children:"________"})]}),s.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",s.jsx("em",{children:p.toLowerCase()})," para esta persona."]})]}),s.jsxs("form",{onSubmit:W,className:"quiz-form",children:[s.jsx("input",{type:"text",className:`quiz-input ${j||""}`,value:w,onChange:Y=>y(Y.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!j}),!j&&s.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!w.trim(),children:"Comprobar"})]}),j&&s.jsxs("div",{className:`quiz-feedback ${j}`,children:[j==="correct"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"quiz-feedback-icon",children:s.jsx(cc,{size:18})}),s.jsxs("div",{children:[s.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),s.jsx("div",{className:"quiz-feedback-answer",children:ne.answer})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"quiz-feedback-icon",children:s.jsx(pn,{size:18})}),s.jsxs("div",{children:[s.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),s.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",s.jsx("strong",{children:ne.answer})]})]})]}),s.jsx(aa,{text:ne.answer,size:"md",className:"quiz-feedback-speak"})]}),j&&s.jsxs("button",{className:"quiz-next-btn",onClick:ae,children:[x+1>=ie?"Ver resultados":"Siguiente",s.jsx(so,{size:16})]}),s.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",s.jsx("strong",{children:U})," / ",x+(j?1:0)]})]})]})})]})}function nc(u){return[...u].sort(()=>Math.random()-.5)}function _m(u){const p=[];function d(g,x){if(!g||!x)return;const f=to(String(g)).trim(),w=String(x).trim();f.length<2||w.length<2||p.push({es:f,en:w})}for(const g of u?.sections||[]){for(const x of g.examples||[])d(x.es,x.en);for(const x of g.table?.rows||[])x?.[0]&&x?.[1]&&d(x[1],`${x[0]} form`)}for(const g of u?.blocks||[]){for(const x of g.pairs||[])d(x.es,x.en);for(const x of g.columns||[])d(x.es,x.en);for(const x of g.phrases||[])d(x.es,x.en);for(const x of g.words||[])d(x.es,x.en);for(const x of g.lessons||[])for(const f of _m(x))d(f.es,f.en)}const r=[],m=new Set;for(const g of p){const x=vt(g.es);m.has(x)||(m.add(x),r.push(g))}return r}function Wg(u){const p=_m(u);return p.length<2?[]:nc(p).slice(0,Math.min(4,p.length)).map((r,m)=>{const g=m%2===0,x=g?r.es:r.en,f=nc(p).filter(w=>w!==r).map(w=>g?w.es:w.en).filter(w=>vt(w)!==vt(x)).slice(0,3);return{prompt:g?r.en:r.es,answer:x,speak:r.es,mode:g?"Elige el espanol":"Elige la traduccion",choices:nc([x,...f]).slice(0,4)}})}function Hm({source:u,title:p="Mini practica"}){const d=H.useMemo(()=>Wg(u),[u]),[r,m]=H.useState({}),[g,x]=H.useState(!1);if(H.useEffect(()=>{m({}),x(!1)},[u]),d.length<2)return null;const f=Object.keys(r).length,w=d.reduce((y,j,S)=>vt(r[S])===vt(j.answer)?y+1:y,0);return s.jsxs("section",{className:"lesson-mini-quiz",children:[s.jsxs("div",{className:"lesson-mini-head",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"lesson-mini-kicker",children:[s.jsx(us,{size:13})," Practica rapida"]}),s.jsx("h3",{children:p})]}),s.jsxs("button",{className:"lesson-mini-reset",onClick:()=>{m({}),x(!1)},children:[s.jsx(Dm,{size:13}),"Reiniciar"]})]}),s.jsx("div",{className:"lesson-mini-list",children:d.map((y,j)=>{const S=r[j],U=S&&vt(S)===vt(y.answer);return s.jsxs("div",{className:"lesson-mini-card",children:[s.jsxs("div",{className:"lesson-mini-meta",children:[s.jsx("span",{children:String(j+1).padStart(2,"0")}),s.jsx("em",{children:y.mode}),s.jsx(aa,{text:y.speak})]}),s.jsx("p",{className:"lesson-mini-prompt",children:y.prompt}),s.jsx("div",{className:"lesson-mini-choices",children:y.choices.map(_=>{const J=S===_;return s.jsx("button",{className:`${J?"active":""} ${g&&J?U?"correct":"wrong":""}`,onClick:()=>m(K=>({...K,[j]:_})),children:_},_)})}),g&&S&&!U&&s.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",s.jsx("strong",{children:y.answer})]})]},`${y.prompt}-${j}`)})}),s.jsxs("div",{className:"lesson-mini-footer",children:[s.jsxs("span",{children:[f," / ",d.length," respondidas"]}),s.jsx("button",{className:"lesson-mini-check",disabled:f<d.length,onClick:()=>x(!0),children:"Comprobar"}),g&&s.jsxs("strong",{children:[w," / ",d.length]})]})]})}let un=null,Sm=!1,io={rate:.85,voiceURI:""};function Gm(){return Math.max(.65,Math.min(1.25,Number(io.rate)||.85))}function Ui(u={}){io={...io,...u,rate:Math.max(.65,Math.min(1.25,Number(u.rate??io.rate)||.85))},un=null}function Rm(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function Nm(){return Rm().filter(u=>u.lang&&u.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(u.name||""))}function no(){if(typeof window>"u"||!window.speechSynthesis)return null;if(un)return un;const u=Rm();if(u.length===0)return null;if(io.voiceURI){const r=u.find(m=>m.voiceURI===io.voiceURI);if(r)return un=r,r}const p=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const r of p){const m=u.find(g=>g.lang&&g.lang.toLowerCase().startsWith(r.toLowerCase()));if(m)return un=m,m}const d=u.find(r=>/spanish|español/i.test(r.name||""));return d?(un=d,d):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{un=null,no()}),no(),setTimeout(no,250),setTimeout(no,1e3));function mc(){if(!Sm&&!(typeof window>"u"||!window.speechSynthesis))try{const u=new SpeechSynthesisUtterance(" ");u.volume=0,u.rate=1,window.speechSynthesis.speak(u),Sm=!0}catch{}}function Bm(u,p={}){if(typeof window>"u"||!window.speechSynthesis||!u)return p.onerror&&p.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const d=new SpeechSynthesisUtterance(u),r=no();r&&(d.voice=r),d.lang=r?.lang||"es-ES",d.rate=p.rate??Gm(),d.pitch=p.pitch??1,d.volume=1,p.onend&&(d.onend=p.onend),p.onerror&&(d.onerror=x=>{console.warn("[speech] error:",x?.error||"unknown",{text:u.slice(0,30),voice:r?.name}),p.onerror(x)}),p.onboundary&&(d.onboundary=p.onboundary),p.onstart&&(d.onstart=p.onstart),window.speechSynthesis.speak(d);const m=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(m);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),g=d.onend;return d.onend=x=>{clearInterval(m),g&&g(x)},d}catch(d){return console.warn("[speech] threw:",d),p.onerror&&p.onerror({error:d.message}),null}}const Em=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function Ym(u){const p=[],d=String(u||"");let r;for(Em.lastIndex=0;(r=Em.exec(d))!==null;)p.push({text:r[0],isWord:!!r[1],charStart:r.index});return p}function Qt({text:u}){const p=H.useMemo(()=>Ym(u),[u]);return s.jsx(s.Fragment,{children:p.map((d,r)=>d.isWord?s.jsx("span",{className:"dict-word-token","data-dict-word":d.text,children:d.text},r):s.jsx("span",{children:d.text},r))})}function ps({text:u,paragraphClass:p="reading-paragraph",firstParagraph:d=!1}){const r=H.useMemo(()=>Ym(u),[u]),m=H.useMemo(()=>{const K=[];let le="",$=[],W=-1;function ae(){$.length>0&&K.push({spokenText:le.trim(),words:$}),le="",$=[],W=-1}for(let P=0;P<r.length;P++){const ne=r[P];if(!ne.isWord&&$.length===0&&/^\s+$/.test(ne.text))continue;const ie=le.length;le+=ne.text,ne.isWord?($.push({tokenIdx:P,text:ne.text,charStart:ie,charEnd:ie+ne.text.length,commaAfter:!1}),W=$.length-1):(/,/.test(ne.text)&&W>=0&&($[W].commaAfter=!0),/[.!?;:]/.test(ne.text)&&ae())}return ae(),K},[r]),[g,x]=H.useState(-1),[f,w]=H.useState(!1),y=bt.useRef([]),j=bt.useRef([]),S=bt.useRef(!1),U=bt.useRef(110);function _(){j.current.forEach(clearTimeout),j.current=[]}function J(K){if(K.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(mc(),f){S.current=!0,window.speechSynthesis?.cancel(),_(),w(!1),x(-1);return}if(m.length===0)return;window.speechSynthesis?.cancel(),_(),S.current=!1,w(!0),U.current=110;let le=0;function $(){if(S.current)return;if(le>=m.length){w(!1),x(-1);return}const W=m[le];if(!W||W.words.length===0){le++,$();return}const ae=new SpeechSynthesisUtterance(W.spokenText),P=no();P&&(ae.voice=P),ae.lang=P?.lang||"es-ES",ae.rate=Gm(),ae.pitch=1;let ne=!1,ie=!1,Y=!1,me=!1,ve=0;const X=30,we=200;function C(V){const ue=Math.max(0,Number(V)||0);let de=W.words[0];for(const b of W.words)if(b.charStart<=ue+1)de=b;else break;return de}function oe(){if(me||Y||S.current)return;me=!0;let V=0;for(let ue=0;ue<W.words.length;ue++){const de=W.words[ue],D=setTimeout(()=>{!S.current&&!Y&&x(de.tokenIdx)},V);j.current.push(D),V+=de.text.length*U.current+X,de.commaAfter&&(V+=we)}}ae.onstart=()=>{if(ne)return;ne=!0,ve=performance.now();const V=setTimeout(oe,350);j.current.push(V)},ae.onboundary=V=>{if(S.current||typeof V.charIndex!="number")return;const ue=C(V.charIndex);ue&&(Y=!0,x(ue.tokenIdx))};const F=setTimeout(()=>{!ne&&!S.current&&(ne=!0,ve=performance.now(),oe())},500);j.current.push(F);function te(){if(ie||(ie=!0,S.current))return;if(ve>0){const ue=performance.now()-ve,de=W.words.reduce((Z,pe)=>Z+pe.text.length,0),b=W.words.filter(Z=>Z.commaAfter).length,D=W.words.length*X+b*we,Q=Math.max(100,ue-D);if(de>0){const Z=Q/de;Z>=40&&Z<=300&&(U.current=Z*.6+U.current*.4)}}_(),le++;const V=setTimeout($,30);j.current.push(V)}ae.onend=te,ae.onerror=te;const z=Math.max(5e3,W.spokenText.length*220),R=setTimeout(te,z);j.current.push(R),window.speechSynthesis.speak(ae)}$()}return H.useEffect(()=>()=>{S.current=!0,_(),f&&window.speechSynthesis?.cancel()},[]),H.useEffect(()=>{if(g<0)return;const K=y.current[g];if(!K||typeof K.getBoundingClientRect!="function")return;const le=K.getBoundingClientRect(),$=window.innerHeight||document.documentElement.clientHeight;(le.bottom>$-100||le.top<80)&&K.scrollIntoView({behavior:"smooth",block:"center"})},[g]),typeof window<"u"&&!window.speechSynthesis?s.jsxs("p",{className:p,children:[s.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:K=>{K.stopPropagation(),alert("Tu navegador no soporta lectura en voz alta.")},"aria-label":"Audio not supported",title:"Audio no disponible",children:s.jsx(oc,{size:12})}),s.jsx(Qt,{text:u})]}):s.jsxs("p",{className:`${p} karaoke-paragraph ${f?"is-playing":""}`,children:[s.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${f?"playing":""}`,onClick:J,onPointerDown:K=>K.stopPropagation(),"aria-label":f?"Stop":"Play audio with highlighting",title:f?"Detener":"Escuchar con resaltado",children:s.jsx(oc,{size:12})}),r.map((K,le)=>{if(!K.isWord)return s.jsx("span",{className:"kt-space",children:K.text},le);const $=le===g;return s.jsx("span",{ref:W=>y.current[le]=W,className:`kt-word ${$?"kt-active":""}`,"data-dict-word":K.text,children:K.text},le)})]})}function aa({text:u,size:p="sm",className:d=""}){const[r,m]=H.useState(!1);function g(x){if(x.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(mc(),r){window.speechSynthesis?.cancel(),m(!1);return}m(!0),Bm(u,{onend:()=>m(!1),onerror:f=>{m(!1),f?.error&&f.error!=="canceled"&&f.error!=="interrupted"&&alert("Error al leer: "+f.error+". Asegúrate de tener una voz en español instalada.")}})}return s.jsx("button",{className:`speak-btn speak-btn-${p} ${r?"playing":""} ${d}`,onClick:g,onPointerDown:x=>x.stopPropagation(),"aria-label":r?"Stop":"Play audio",title:r?"Detener":"Escuchar",children:s.jsx(oc,{size:p==="sm"?12:14})})}function $g({settings:u,onChange:p}){const[d,r]=H.useState(()=>Nm());H.useEffect(()=>{Ui(u)},[u]),H.useEffect(()=>{function g(){r(Nm())}if(g(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",g);const x=setTimeout(g,600);return()=>{clearTimeout(x),window.speechSynthesis.removeEventListener?.("voiceschanged",g)}}},[]);function m(g){const x={...u,...g};Ui(x),p?.(x)}return s.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[s.jsxs("div",{className:"audio-settings-label",children:[s.jsx(Cg,{size:14}),"Audio"]}),s.jsxs("select",{className:"audio-rate-select",value:String(u.rate),onChange:g=>m({rate:Number(g.target.value)}),"aria-label":"Audio speed",children:[s.jsx("option",{value:"0.7",children:"0.70x"}),s.jsx("option",{value:"0.85",children:"0.85x"}),s.jsx("option",{value:"1",children:"1.00x"}),s.jsx("option",{value:"1.15",children:"1.15x"})]}),s.jsxs("select",{className:"audio-voice-select",value:u.voiceURI||"",onChange:g=>m({voiceURI:g.target.value}),"aria-label":"Spanish voice",children:[s.jsx("option",{value:"",children:"Voz espanola"}),d.map(g=>s.jsxs("option",{value:g.voiceURI,children:[g.name," (",g.lang,")"]},g.voiceURI))]})]})}function Ci({es:u,en:p,esClass:d="vu-ex-es",enClass:r="vu-ex-en"}){const m=(u||"").length,g=(p||"").length;return m<=18&&g<=18&&m+g<=36?s.jsxs("div",{className:`${d} inline-pair`,children:[s.jsx(aa,{text:u}),s.jsx(Qt,{text:u})," ",s.jsxs("span",{className:`${r} inline-en`,children:["(",p,")"]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:d,children:[s.jsx(aa,{text:u}),s.jsx(Qt,{text:u})]}),s.jsx("div",{className:r,children:p})]})}function Fg({s:u}){return s.jsxs("div",{className:"gl-section",children:[u.heading&&s.jsx("h3",{className:"gl-heading",children:u.heading}),u.text&&s.jsx("p",{className:"gl-text",children:s.jsx(Qt,{text:u.text})}),u.table&&s.jsx("div",{className:"lesson-table-wrap",children:s.jsxs("table",{className:"lesson-table gl-table",children:[u.table.headers&&s.jsx("thead",{children:s.jsx("tr",{children:u.table.headers.map((p,d)=>s.jsx("th",{children:p},d))})}),s.jsx("tbody",{children:u.table.rows.map((p,d)=>s.jsx("tr",{children:p.map((r,m)=>s.jsx("td",{children:m===0?r:s.jsx(ao,{raw:String(r)})},m))},d))})]})}),u.examples&&s.jsx("ul",{className:"gl-examples",children:u.examples.map((p,d)=>s.jsx("li",{children:s.jsx(Ci,{es:p.es,en:p.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},d))}),u.tip&&s.jsxs("aside",{className:"gl-tip",children:[s.jsx(ds,{size:16,className:"gl-tip-icon"}),s.jsx("p",{children:u.tip})]}),u.takeaway&&s.jsxs("aside",{className:"gl-takeaway",children:[s.jsxs("div",{className:"gl-takeaway-label",children:[s.jsx(pc,{size:12})," Lo que te llevas"]}),s.jsx("p",{children:u.takeaway})]})]})}const Pg={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function Di({level:u}){const p=Pg[u]||{};return s.jsx("span",{className:"bio-level-badge",style:{background:p.bg,color:p.color,borderColor:p.border},children:u})}function eb({poems:u}){const[p,d]=H.useState(null);function r(m){d(g=>g===m?null:m)}return s.jsx("section",{className:"block foldable-poems",children:u.map((m,g)=>{const x=p===g;return s.jsxs("div",{className:`poem-item ${x?"open":"closed"}`,children:[s.jsxs("button",{className:"poem-toggle",onClick:()=>r(g),"aria-expanded":x,children:[s.jsxs("div",{className:"poem-toggle-inner",children:[s.jsx("span",{className:"poem-num",children:String(g+1).padStart(2,"0")}),s.jsxs("div",{className:"poem-toggle-text",children:[s.jsx("span",{className:"poem-title-line",children:m.title}),s.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),s.jsxs("div",{className:"poem-toggle-right",children:[s.jsx("span",{className:"poem-level-tag",children:m.level}),s.jsx(ro,{size:18,className:`poem-chevron ${x?"open":""}`})]})]}),x&&s.jsxs("div",{className:"poem-body",children:[m.note&&s.jsx("p",{className:"poem-intro-note",children:m.note}),m.opening&&s.jsxs("blockquote",{className:"poem-opening-quote",children:[s.jsx(aa,{text:m.opening,size:"md",className:"poem-quote-speak"}),m.opening]}),s.jsxs("div",{className:"poem-tools",children:[s.jsx(aa,{text:m.stanzas.map(f=>f.es).join(". "),size:"md"}),s.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),s.jsx("div",{className:"poem-stanzas",children:m.stanzas.map((f,w)=>s.jsxs("div",{className:"poem-stanza",children:[s.jsx("div",{className:"poem-stanza-num",children:w+1}),s.jsx(ps,{text:f.es,paragraphClass:"poem-stanza-es"}),s.jsx("div",{className:"poem-stanza-en",children:f.en})]},w))}),m.vocab&&m.vocab.length>0&&s.jsxs("div",{className:"poem-vocab-block",children:[s.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),s.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((f,w)=>s.jsxs("div",{className:"poem-vocab-row",children:[s.jsx("span",{className:"poem-vocab-es",children:f.es}),s.jsx("span",{className:"poem-vocab-dash",children:"—"}),s.jsx("span",{className:"poem-vocab-en",children:f.en})]},w))})]}),m.learningNote&&s.jsxs("aside",{className:"poem-learning-note",children:[s.jsxs("div",{className:"poem-learning-label",children:[s.jsx(ds,{size:14})," Nota de lectura"]}),s.jsx("p",{children:m.learningNote})]})]})]},g)})})}function ab({songs:u}){const[p,d]=H.useState(null);function r(m){d(g=>g===m?null:m)}return s.jsx("section",{className:"block foldable-poems foldable-songs",children:u.map((m,g)=>{const x=p===g,f=m.sections.map(w=>w.es).join(". ");return s.jsxs("div",{className:`poem-item song-item ${x?"open":"closed"}`,children:[s.jsxs("button",{className:"poem-toggle",onClick:()=>r(g),"aria-expanded":x,children:[s.jsxs("div",{className:"poem-toggle-inner",children:[s.jsx("span",{className:"poem-num",children:String(g+1).padStart(2,"0")}),s.jsxs("div",{className:"poem-toggle-text",children:[s.jsx("span",{className:"poem-title-line",children:m.title}),s.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),s.jsxs("div",{className:"poem-toggle-right",children:[s.jsx("span",{className:"poem-level-tag",children:m.level}),s.jsx(ro,{size:18,className:`poem-chevron ${x?"open":""}`})]})]}),x&&s.jsxs("div",{className:"poem-body song-body",children:[s.jsx("p",{className:"poem-intro-note",children:m.note}),s.jsxs("div",{className:"poem-tools",children:[s.jsx(aa,{text:f,size:"md"}),s.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),s.jsx("div",{className:"song-sections",children:m.sections.map((w,y)=>s.jsxs("div",{className:"song-section",children:[s.jsxs("div",{className:"song-section-label",children:[String(y+1).padStart(2,"0")," · ",w.label]}),s.jsxs("div",{className:"song-section-grid",children:[s.jsx(ps,{text:w.es,paragraphClass:"song-lyric-es"}),s.jsx("p",{className:"song-lyric-en",children:w.en})]})]},w.label))}),m.vocab&&m.vocab.length>0&&s.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[s.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),s.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((w,y)=>s.jsxs("div",{className:"poem-vocab-row",children:[s.jsx("span",{className:"poem-vocab-es",children:w.es}),s.jsx("span",{className:"poem-vocab-dash",children:"—"}),s.jsx("span",{className:"poem-vocab-en",children:w.en})]},y))})]}),m.learningNote&&s.jsxs("aside",{className:"poem-learning-note",children:[s.jsxs("div",{className:"poem-learning-label",children:[s.jsx(ds,{size:14})," Nota de canción"]}),s.jsx("p",{children:m.learningNote})]})]})]},m.title)})})}function tb({bios:u}){const[p,d]=H.useState(null);function r(m){d(g=>g===m?null:m)}return s.jsx("section",{className:"block foldable-bios",children:u.map((m,g)=>{const x=p===g;return s.jsxs("div",{className:`bio-item ${x?"open":"closed"}`,children:[s.jsxs("button",{className:"bio-toggle",onClick:()=>r(g),"aria-expanded":x,children:[s.jsxs("div",{className:"bio-toggle-left",children:[s.jsx("span",{className:"bio-num",children:String(g+1).padStart(2,"0")}),s.jsxs("div",{className:"bio-toggle-text",children:[s.jsx("span",{className:"bio-name",children:m.title}),s.jsx("span",{className:"bio-subtitle-line",children:m.subtitle}),s.jsx("span",{className:"bio-dates",children:m.dates})]})]}),s.jsxs("div",{className:"bio-toggle-right",children:[s.jsx("div",{className:"bio-level-pills",children:[...new Set(m.levels.map(f=>f.level))].map(f=>s.jsx(Di,{level:f},f))}),s.jsx(ro,{size:18,className:`bio-chevron ${x?"open":""}`})]})]}),x&&s.jsx("div",{className:"bio-body",children:m.levels.map((f,w)=>s.jsxs("div",{className:"bio-section",children:[s.jsxs("div",{className:"bio-section-header",children:[s.jsx(Di,{level:f.level}),s.jsx("h3",{className:"bio-section-title",children:f.heading}),s.jsx(aa,{text:f.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),f.paragraphs.map((y,j)=>s.jsx(ps,{text:y,paragraphClass:"bio-paragraph"},j)),f.vocab&&s.jsxs("div",{className:"bio-vocab",children:[s.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),f.vocab]})]},w))})]},g)})})}function Vm(u,p,d,r){return`${u||"chapter"}::${p}::${d}::${r}`}function nb({lessons:u,chapterId:p,lessonStatuses:d={},onLessonStatusChange:r}){const[m,g]=H.useState(null);function x(f){g(w=>w===f?null:f)}return s.jsx("section",{className:"block foldable-grammar",children:u.map((f,w)=>{const y=m===w,j=Vm(p,"grammar",w,f.title);return s.jsxs("div",{className:`gl-item ${y?"open":"closed"}`,children:[s.jsxs("button",{className:"gl-toggle",onClick:()=>x(w),"aria-expanded":y,"touch-action":"manipulation",children:[s.jsx("span",{className:"gl-num",children:String(w+1).padStart(2,"0")}),s.jsx("span",{className:"gl-level-badge",children:f.level}),s.jsxs("div",{className:"gl-toggle-text",children:[s.jsx("span",{className:"gl-title",children:f.title}),s.jsx("span",{className:"gl-subtitle",children:f.subtitle})]}),d[j]&&s.jsx("span",{className:`gl-status-pill ${d[j]}`,children:d[j]==="understood"?"Entendido":"Leído"}),s.jsx(ro,{size:18,className:`gl-chevron ${y?"open":""}`})]}),y&&s.jsxs("div",{className:"gl-body",children:[s.jsx(fc,{status:d[j],onChange:S=>r?.(j,S)}),f.intro&&s.jsx("p",{className:"gl-intro",children:f.intro}),f.sections.map((S,U)=>s.jsx(Fg,{s:S},U)),s.jsx(Hm,{source:f,title:`Practica: ${f.title}`})]})]},w)})})}function ob({stories:u,chapterId:p,lessonStatuses:d={},onLessonStatusChange:r}){const[m,g]=H.useState(null);function x(f){g(w=>w===f?null:f)}return s.jsx("section",{className:"block foldable-stories",children:u.map((f,w)=>{const y=m===w,j=Vm(p,"story",w,f.title);return s.jsxs("div",{className:`story-item ${y?"open":"closed"}`,children:[s.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>x(w),"aria-expanded":y,children:[s.jsxs("div",{className:"bio-toggle-left",children:[s.jsx("span",{className:"bio-num",children:String(w+1).padStart(2,"0")}),s.jsxs("div",{className:"bio-toggle-text",children:[s.jsx("span",{className:"bio-name",children:f.title}),s.jsxs("span",{className:"bio-subtitle-line",children:[f.paragraphs.length," párrafos · lectura con audio"]})]})]}),s.jsxs("div",{className:"bio-toggle-right",children:[s.jsxs("div",{className:"bio-level-pills",children:[s.jsx(Di,{level:f.level}),d[j]&&s.jsx("span",{className:`story-status-pill ${d[j]}`,children:d[j]==="understood"?"Entendido":"Leído"})]}),s.jsx(ro,{size:18,className:`bio-chevron ${y?"open":""}`})]})]}),y&&s.jsx("div",{className:"bio-body story-body",children:s.jsxs("div",{className:"bio-section story-section",children:[s.jsxs("div",{className:"bio-section-header",children:[s.jsx(Di,{level:f.level}),s.jsx("h3",{className:"bio-section-title",children:f.title}),s.jsx(aa,{text:f.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),s.jsx(fc,{status:d[j],onChange:S=>r?.(j,S)}),f.paragraphs.map((S,U)=>s.jsx(ps,{text:S,paragraphClass:"bio-paragraph story-paragraph"},U))]})})]},w)})})}const qm="palabras-progress-v1";function Qm(u,p){return`${u}::${p.rank}::${p.spanish}`}function ic(u,p){return p.sourceGroupId||u.id}function Mi(u,p){return Qm(ic(u,p),p)}function oo(u){return String(u).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const sb=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function Xm(u){const p=new Map;for(const d of u||[])for(const r of d.entries||[]){const m=oo(r.spanish);p.has(m)||p.set(m,{...r,sourceGroupId:d.id,sourceGroupTitle:d.title})}return sb.map(d=>{const r=new Set,m=d.terms.map((g,x)=>{const f=oo(g.spanish);if(r.has(f))return null;r.add(f);const w=p.get(f),y=g.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...w||{rank:`T${x+1}`,spanish:y,english:g.english,sourceGroupId:d.id,sourceGroupTitle:d.title},topicTerm:g.spanish,topicEnglish:g.english,topicOrder:x+1}}).filter(Boolean);return{id:d.id,title:d.title,description:d.description,entries:m,isTopic:!0}})}function Ra(u){return u.topicTerm||u.spanish}function dn(u){return u.topicEnglish||u.english}function Zm(u,p,d=Date.now()){return Rg(u,p,d)}function ib(u,p,d=Date.now()){const r={total:0,seen:0,due:0,mastered:0,byGroup:{}},m=new Set;for(const g of u||[]){const x={total:g.entries.length,seen:0,due:0,mastered:0};for(const f of g.entries){const w=Mi(g,f),y=p[w],j=m.has(w);j||(m.add(w),r.total++),y?.seen&&(x.seen++,j||r.seen++,y.mastered&&(x.mastered++,j||r.mastered++),(y.dueAt||0)<=d&&(x.due++,j||r.due++))}r.byGroup[g.id]=x}return r}function Tm(u,p){const d=u.spanish.split(",")[0].trim();return p==="topic-work-professions"?{es:`En mi trabajo uso "${d}" con frecuencia.`,en:`At work I use "${d}" often.`}:p==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${d}" con calma.`,en:`Today I can name "${d}" calmly.`}:p==="function-words"?{es:`Uso "${d}" para unir una idea con otra.`,en:`"${d}" helps connect one idea to another.`}:/^to /.test(u.english)?{es:`Hoy necesito ${d} en una frase clara.`,en:`Today I need "${d}" in a clear sentence.`}:{es:`Escribo "${d}" en mi cuaderno de espanol.`,en:`"${d}" means ${dn(u)}.`}}function lb({onSaveWord:u,savedWords:p=[],progress:d={},onProgressChange:r,onUpdateSavedWord:m}){const[g,x]=H.useState(null),[f,w]=H.useState(""),[y,j]=H.useState(""),[S,U]=H.useState(0),[_,J]=H.useState({}),[K,le]=H.useState(!1),[$,W]=H.useState(!1),[ae,P]=H.useState(!1),[ne,ie]=H.useState(0),[Y,me]=H.useState(!1);H.useEffect(()=>{let G=!0;return Am(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(Te=>{if(!G)return;const Re=Te.default||[],Ve=[...Re,...Xm(Re)];x(Ve),w(ce=>ce||Ve[0]?.id||"")}),()=>{G=!1}},[]);const ve=!g,X=g?.find(G=>G.id===f)||g?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},we=H.useMemo(()=>{const G=oo(y),Te=G?X.entries.filter(Ve=>[Ve.spanish,Ve.english,Ve.topicTerm,Ve.topicEnglish,String(Ve.rank)].some(ce=>oo(ce||"").includes(G))):X.entries;if(!$)return Te;const Re=Date.now();return Te.filter(Ve=>{const ce=d[Mi(X,Ve)];return ce?.seen&&(ce.dueAt||0)<=Re})},[X,y,$,d]),C=24,oe=Math.min(S,Math.max(0,we.length-1)),F=we.slice(oe,oe+C),te=F.map(G=>Ra(G)).join(". "),R=H.useMemo(()=>ib(g||[],d),[g,d]).byGroup[X.id]||{total:X.entries.length,seen:0,due:0,mastered:0},V=74,ue=420,de=Math.max(0,Math.floor(ne/V)-4),b=Math.min(we.length,de+Math.ceil(ue/V)+10),D=we.slice(de,b);if(H.useEffect(()=>{U(0),J({}),ie(0)},[f,y,$]),ve)return s.jsx("section",{className:"block palabras-lab",children:s.jsxs("div",{className:"palabras-empty",children:[s.jsx(us,{size:24}),s.jsx("p",{children:"Cargando palabras..."})]})});function Q(){U(G=>G+C>=we.length?0:G+C),J({})}function Z(){const G=Math.max(0,we.length-C);U(Math.floor(Math.random()*(G+1))),J({})}function pe(G){const Te=`${X.id}-${G.rank}-${G.spanish}`;J(Re=>({...Re,[Te]:!Re[Te]}))}function he(G,Te){const Re=ic(X,G),Ve=Qm(Re,G),ce=Zm(d[Ve],Te),ta={...d,[Ve]:{...ce,groupId:Re,displayGroupId:X.id,topicId:X.isTopic?X.id:void 0,spanish:Ra(G),english:dn(G),rank:G.rank}};r?.(ta),J(Ba=>({...Ba,[`${X.id}-${G.rank}-${G.spanish}`]:!0}));const pa=p.find(Ba=>oo(Ba.word)===oo(Ra(G)));pa?m?.(pa.word,{review:ce,difficult:Te==="hard"||Te==="again"?!0:pa.difficult}):(Te==="hard"||Te==="again")&&u?.({word:Ra(G),translation:dn(G),pos:X.isTopic?`${X.title} topic`:X.title,extras:[`Rank ${G.rank}`,X.description].filter(Boolean),tags:["palabras",X.id,Re,"difficult"].filter(Boolean),review:ce,difficult:!0,savedAt:Date.now()})}function Ne(){if(!F.length)return;if(mc(),Y){window.speechSynthesis?.cancel(),me(!1);return}const G=F.flatMap(Te=>{const Re=Tm(Te,X.id);return[Ra(Te),Re.es,Ra(Te)]});me(!0),Bm(G.join(". "),{onend:()=>me(!1),onerror:()=>me(!1)})}function Ie(G){const Te=ic(X,G),Re=X.isTopic&&G.sourceGroupTitle?`Source ${G.sourceGroupTitle}`:null;u?.({word:Ra(G),translation:dn(G),pos:X.isTopic?`${X.title} topic`:X.title,extras:[`Rank ${G.rank}`,X.description,Re].filter(Boolean),tags:["palabras",X.id,Te].filter(Boolean),savedAt:Date.now()})}return s.jsxs("section",{className:"block palabras-lab",children:[s.jsxs("div",{className:"palabras-toolbar",children:[s.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:g.map(G=>s.jsxs("button",{className:`palabras-tab ${G.id===X.id?"active":""}`,onClick:()=>w(G.id),role:"tab","aria-selected":G.id===X.id,children:[s.jsx("span",{children:G.title.replace(/^Group /,"G")}),s.jsx("strong",{children:G.entries.length})]},G.id))}),s.jsxs("label",{className:"palabras-search",children:[s.jsx("span",{children:"Buscar"}),s.jsx("input",{value:y,onChange:G=>j(G.target.value),placeholder:"palabra, meaning, rank..."})]})]}),s.jsxs("div",{className:"palabras-stage",children:[s.jsxs("div",{className:"palabras-stage-copy",children:[s.jsx("div",{className:"palabras-stage-kicker",children:X.isTopic?"Tema integrado":"Grupo intacto"}),s.jsx("h2",{children:X.title}),s.jsx("p",{children:X.description})]}),s.jsxs("div",{className:"palabras-stage-stats",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Mostrando"}),s.jsx("strong",{children:F.length})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Filtradas"}),s.jsx("strong",{children:we.length})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Entrada"}),s.jsx("strong",{children:we.length?oe+1:0})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Vencidas"}),s.jsx("strong",{children:R.due})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Vistas"}),s.jsx("strong",{children:R.seen})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Dominadas"}),s.jsx("strong",{children:R.mastered})]})]})]}),s.jsxs("div",{className:"palabras-actions",children:[s.jsx(aa,{text:te,size:"md",className:"palabras-read-btn"}),s.jsx("button",{className:`palabras-action-btn ${Y?"active":""}`,onClick:Ne,children:Y?"Escuchando...":"Escucha activa"}),s.jsx("button",{className:`palabras-action-btn ${$?"active":""}`,onClick:()=>W(G=>!G),children:$?"Todas":"Vencidas"}),s.jsx("button",{className:"palabras-action-btn",onClick:()=>le(G=>!G),children:K?"Ocultar ingles":"Mostrar ingles"}),s.jsx("button",{className:"palabras-action-btn",onClick:Q,children:"Siguiente ronda"}),s.jsx("button",{className:"palabras-action-btn",onClick:Z,children:"Barajar"}),s.jsx("button",{className:`palabras-action-btn ${ae?"active":""}`,onClick:()=>P(G=>!G),children:"Lista completa"})]}),F.length?s.jsx("div",{className:"palabras-grid",children:F.map(G=>{const Te=`${X.id}-${G.rank}-${G.spanish}`,Re=K||_[Te],Ve=d[Mi(X,G)],ce=Tm(G,X.id);return s.jsxs("article",{className:`palabra-card ${Re?"revealed":""}`,children:[s.jsxs("button",{className:"palabra-main",onClick:()=>pe(G),children:[s.jsxs("span",{className:"palabra-rank",children:["#",G.rank]}),s.jsx("span",{className:"palabra-es",children:Ra(G)}),s.jsx("span",{className:"palabra-en",children:Re?dn(G):"..."}),Re&&s.jsxs("span",{className:"palabra-example",children:[s.jsx("span",{children:ce.es}),s.jsx("em",{children:ce.en})]})]}),s.jsxs("div",{className:"palabra-card-actions",children:[s.jsx(aa,{text:Ra(G)}),s.jsxs("button",{className:"palabra-save",onClick:()=>Ie(G),children:[s.jsx(lo,{size:13}),"Memoria"]})]}),s.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(ta=>s.jsx("button",{onClick:()=>he(G,ta),children:ta==="again"?"Again":ta==="hard"?"Hard":ta==="good"?"Good":"Easy"},ta))}),Ve?.seen&&s.jsx("div",{className:"palabra-review-state",children:Ve.mastered?"Dominada":`Due ${new Date(Ve.dueAt||Date.now()).toLocaleDateString()}`})]},Te)})}):s.jsxs("div",{className:"palabras-empty",children:[s.jsx(us,{size:24}),s.jsx("p",{children:"No words match this search in the selected group."})]}),ae&&s.jsxs("div",{className:"palabras-browser",children:[s.jsxs("div",{className:"palabras-browser-head",children:[s.jsx("span",{children:"Lista virtual"}),s.jsxs("strong",{children:[we.length," palabras"]})]}),s.jsx("div",{className:"palabras-virtual-list",style:{height:ue},onScroll:G=>ie(G.currentTarget.scrollTop),children:s.jsx("div",{style:{height:we.length*V,position:"relative"},children:s.jsx("div",{style:{transform:`translateY(${de*V}px)`},children:D.map(G=>{const Te=d[Mi(X,G)];return s.jsxs("div",{className:"palabras-virtual-row",style:{height:V},children:[s.jsxs("span",{className:"palabra-rank",children:["#",G.rank]}),s.jsx("strong",{children:Ra(G)}),s.jsx("span",{children:dn(G)}),s.jsx("button",{onClick:()=>he(G,"good"),children:Te?.seen?"Actualizar":"Visto"})]},`${G.rank}-${G.spanish}`)})})})})]})]})}function fc({status:u,onChange:p}){const d=u==="read"||u==="understood",r=u==="understood";function m(){p?.(u==="read"?null:"read")}function g(){p?.(u==="understood"?"read":"understood")}return s.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[s.jsx("span",{className:"lesson-status-label",children:"Estado"}),s.jsxs("button",{className:`lesson-status-btn ${d?"active":""}`,onClick:m,children:[s.jsx(rc,{size:14}),"Leído"]}),s.jsxs("button",{className:`lesson-status-btn understood ${r?"active":""}`,onClick:g,children:[s.jsx(cc,{size:14}),"Entendido"]})]})}function rb({chapter:u,sectionId:p,onSaveWord:d,savedWords:r=[],onUpdateSavedWord:m,palabrasProgress:g,onPalabrasProgressChange:x,lessonStatuses:f={},onLessonStatusChange:w}){const y=u.blocks.some(j=>j.type==="foldable-grammar"||j.type==="foldable-stories");return s.jsxs("article",{className:"chapter-body",children:[s.jsxs("header",{className:"chapter-header",children:[s.jsxs("div",{className:"chapter-icon-row",children:[p&&s.jsx("div",{className:"chapter-icon-wrap",children:s.jsx(Om,{id:p,size:22})}),s.jsxs("div",{className:"chapter-level-tag",children:[u.rank?`Nº ${String(u.rank).padStart(2,"0")} · `:"","Nivel ",u.level]})]}),s.jsx("h1",{className:"chapter-title",children:u.title}),u.subtitle&&s.jsx("p",{className:"chapter-subtitle",children:u.subtitle}),!y&&s.jsx(fc,{status:f[u.id],onChange:j=>w?.(u.id,j)}),s.jsx("div",{className:"chapter-rule"})]}),u.intro&&s.jsx("p",{className:"chapter-intro drop-cap",children:s.jsx(Qt,{text:u.intro})}),u.blocks.map((j,S)=>{switch(j.type){case"conjugation":return s.jsxs("section",{className:"block",children:[s.jsx("h2",{className:"block-heading",children:j.title}),s.jsx("div",{className:"conjugation-grid",children:j.verbs.map((U,_)=>s.jsxs("div",{className:"conjugation-card",children:[s.jsx("div",{className:"conjugation-verb",children:U.name}),s.jsx("ul",{className:"conjugation-list",children:U.forms.map((J,K)=>s.jsx("li",{children:J},K))})]},_))})]},S);case"examples":return s.jsxs("section",{className:"block",children:[s.jsx("h2",{className:"block-heading",children:j.title}),s.jsx("ul",{className:"examples-list",children:j.pairs.map((U,_)=>s.jsx("li",{className:"example-item",children:s.jsx(Ci,{es:U.es,en:U.en,esClass:"example-es",enClass:"example-en"})},_))})]},S);case"rule":return s.jsx("section",{className:"block",children:s.jsx("dl",{className:"rule-list",children:j.items.map((U,_)=>s.jsxs("div",{className:"rule-row",children:[s.jsx("dt",{children:U.label}),s.jsx("dd",{children:U.value})]},_))})},S);case"reading":return s.jsx("section",{className:"block reading-block",children:j.paragraphs.map((U,_)=>s.jsx(ps,{text:U,paragraphClass:"reading-paragraph"},_))},S);case"foldable-poems":return s.jsx(eb,{poems:j.poems},S);case"foldable-songs":return s.jsx(ab,{songs:j.songs},S);case"foldable-bios":return s.jsx(tb,{bios:j.bios},S);case"foldable-grammar":return s.jsx(nb,{lessons:j.lessons,chapterId:u.id,lessonStatuses:f,onLessonStatusChange:w},S);case"foldable-stories":return s.jsx(ob,{stories:j.stories,chapterId:u.id,lessonStatuses:f,onLessonStatusChange:w},S);case"glossary":return s.jsxs("section",{className:"block",children:[s.jsxs("h2",{className:"block-heading",children:[s.jsx(cs,{size:16,className:"inline-icon"})," Glosario"]}),s.jsx("div",{className:"glossary-grid",children:j.words.map((U,_)=>s.jsxs("div",{className:"glossary-row",children:[s.jsx("span",{className:"glossary-es",children:U.es}),s.jsx("span",{className:"glossary-dash",children:"—"}),s.jsx("span",{className:"glossary-en",children:U.en})]},_))})]},S);case"vocab":return s.jsx("section",{className:"block",children:s.jsx("div",{className:"vocab-grid",children:j.columns.map((U,_)=>s.jsxs("div",{className:"vocab-row",children:[s.jsx(aa,{text:U.es}),s.jsx("span",{className:"vocab-es",children:U.es}),s.jsx("span",{className:"vocab-en",children:U.en})]},_))})},S);case"vocab-lab":return s.jsx(lb,{onSaveWord:d,savedWords:r,progress:g,onProgressChange:x,onUpdateSavedWord:m},S);case"phraselist":return s.jsx("section",{className:"block",children:s.jsx("ul",{className:"phrase-list",children:j.phrases.map((U,_)=>s.jsxs("li",{className:"phrase-item",children:[s.jsx("span",{className:"phrase-num",children:String(_+1).padStart(2,"0")}),s.jsxs("div",{className:"phrase-content",children:[s.jsxs("p",{className:"phrase-es",children:[s.jsx(aa,{text:U.es,className:"paragraph-speak"}),s.jsx(Qt,{text:U.es})]}),s.jsx("p",{className:"phrase-en",children:U.en})]})]},_))})},S);case"steps":return s.jsx("section",{className:"block",children:s.jsx("ol",{className:"steps-list",children:j.steps.map((U,_)=>s.jsxs("li",{className:"step-item",children:[s.jsx("div",{className:"step-num",children:_+1}),s.jsxs("div",{children:[s.jsx("h3",{className:"step-title",children:U.title}),s.jsx("p",{className:"step-text",children:U.text})]})]},_))})},S);case"big-takeaways":return s.jsx("section",{className:"block",children:s.jsx("div",{className:"big-takeaways",children:j.items.map((U,_)=>s.jsxs("div",{className:"big-takeaway-card",children:[s.jsx("div",{className:"big-takeaway-num",children:U.n}),s.jsx("h3",{className:"big-takeaway-title",children:U.title}),s.jsx("p",{className:"big-takeaway-text",children:U.text})]},_))})},S);case"tip":return s.jsxs("aside",{className:"block tip-block",children:[s.jsx(ds,{size:18,className:"tip-icon"}),s.jsx("p",{children:j.text})]},S);case"takeaway":return s.jsxs("aside",{className:"block takeaway-block",children:[s.jsxs("div",{className:"takeaway-label",children:[s.jsx(pc,{size:14})," Lo que te llevas"]}),s.jsx("p",{children:j.text})]},S);case"verb-table":{const U=Object.fromEntries(j.tenses.map(J=>[J.name,J])),_=j.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return s.jsxs("section",{className:"block verb-table-block",children:[j.participles&&s.jsxs("div",{className:"participles",children:[s.jsx("div",{className:"participles-label",children:"Participios"}),s.jsxs("div",{className:"participles-rows",children:[s.jsxs("div",{className:"participles-row",children:[s.jsx("span",{className:"participles-key",children:"Presente"}),s.jsx("span",{className:"participles-val",children:s.jsx(ao,{raw:j.participles.present})})]}),s.jsxs("div",{className:"participles-row",children:[s.jsx("span",{className:"participles-key",children:"Pasado"}),s.jsx("span",{className:"participles-val",children:s.jsx(ao,{raw:j.participles.past})})]})]})]}),s.jsxs("div",{className:"verb-table-header",children:[s.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",s.jsxs("em",{children:['"',u.title.toLowerCase(),'"']})]}),s.jsx(Ig,{tenses:j.tenses,verbName:u.title})]}),s.jsx("div",{className:"tense-stack",children:_.map((J,K)=>{const le=J.map($=>U[$]).filter(Boolean);if(le.length===0)return null;if(le.length===1){const $=le[0];return s.jsxs("div",{className:"tense-block",children:[s.jsxs("div",{className:"tense-name-row",children:[s.jsx("h3",{className:"tense-name",children:$.name}),s.jsx(aa,{text:$.forms.map(W=>`${W.p} ${to(W.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),s.jsx("div",{className:"tense-rows",children:$.forms.map((W,ae)=>s.jsxs(bt.Fragment,{children:[s.jsx("span",{className:"tense-pronoun",children:W.p}),s.jsxs("span",{className:"tense-form",children:[s.jsx(ao,{raw:W.f}),s.jsx(aa,{text:to(W.f),className:"conjugation-speak"})]})]},ae))})]},K)}return s.jsxs("table",{className:"tense-group-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{"aria-hidden":"true"}),le.map(($,W)=>s.jsx("th",{scope:"col",children:s.jsxs("div",{className:"tg-th-inner",children:[s.jsx("span",{children:$.name}),s.jsx(aa,{text:$.forms.map(ae=>`${ae.p} ${to(ae.f)}`).join(". ")})]})},W))]})}),s.jsx("tbody",{children:le[0].forms.map(($,W)=>s.jsxs("tr",{children:[s.jsx("th",{scope:"row",className:"tg-pronoun",children:le[0].forms[W].p}),le.map((ae,P)=>s.jsxs("td",{className:"tg-form",children:[s.jsx(ao,{raw:ae.forms[W].f}),s.jsx(aa,{text:to(ae.forms[W].f),className:"conjugation-speak"})]},P))]},W))})]},K)})}),s.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",s.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},S)}case"verb-uses":return s.jsxs("section",{className:"block verb-uses-block",children:[j.heading&&s.jsx("h2",{className:"verb-uses-heading",children:j.heading}),j.categories.map((U,_)=>s.jsxs("div",{className:"vu-category",children:[s.jsxs("div",{className:"vu-category-head",children:[s.jsx("div",{className:"vu-category-label",children:U.label}),U.note&&s.jsx("div",{className:"vu-category-note",children:U.note})]}),s.jsx("div",{className:"vu-senses",children:U.senses.map((J,K)=>s.jsxs("div",{className:"vu-sense",children:[s.jsx("div",{className:"vu-sense-num",children:J.n}),s.jsxs("div",{className:"vu-sense-body",children:[s.jsx("div",{className:"vu-sense-meaning",children:J.meaning}),J.subnote&&s.jsx("div",{className:"vu-sense-subnote",children:J.subnote}),s.jsx("ul",{className:"vu-examples",children:J.examples.map((le,$)=>s.jsx("li",{children:s.jsx(Ci,{es:le.es,en:le.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},$))})]})]},K))})]},_))]},S);case"lesson-section":return s.jsxs("section",{className:"block lesson-section",children:[j.heading&&s.jsx("h2",{className:"lesson-heading",children:j.heading}),j.text&&s.jsx("p",{className:"lesson-text",children:s.jsx(Qt,{text:j.text})}),j.paragraphs&&j.paragraphs.map((U,_)=>s.jsx("p",{className:"lesson-text",children:s.jsx(Qt,{text:U})},_)),j.table&&s.jsx("div",{className:"lesson-table-wrap",children:s.jsxs("table",{className:"lesson-table",children:[j.table.headers&&s.jsx("thead",{children:s.jsx("tr",{children:j.table.headers.map((U,_)=>s.jsx("th",{children:U},_))})}),s.jsx("tbody",{children:j.table.rows.map((U,_)=>s.jsx("tr",{children:U.map((J,K)=>s.jsx("td",{children:K===0?J:s.jsx(ao,{raw:String(J)})},K))},_))})]})}),j.examples&&s.jsx("ul",{className:"lesson-examples",children:j.examples.map((U,_)=>s.jsx("li",{children:s.jsx(Ci,{es:U.es,en:U.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},_))})]},S);default:return null}}),!y&&s.jsx(Hm,{source:u,title:`Practica: ${u.title}`})]})}function Km(u){return u.trim().replace(/[«»""''¡!¿?.,;:()[\]{}<>*_/\\—–\-]+/g,"").trim().toLowerCase()}function Li(u){return Km(String(u||"")).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function Jm(u){const p=Li(u),d=new Set([p]);return p.endsWith("es")&&p.length>4&&d.add(p.slice(0,-2)),p.endsWith("s")&&p.length>3&&d.add(p.slice(0,-1)),p.endsWith("a")&&p.length>3&&d.add(`${p.slice(0,-1)}o`),p.endsWith("as")&&p.length>4&&d.add(`${p.slice(0,-2)}o`),[...d].filter(Boolean)}function cb(u,p=[],d=[]){const r=new Set(Jm(u)),m=p.find(g=>r.has(Li(g.word)));if(m)return{main:m.translation||"Saved in Memoria",extras:m.extras||[],pos:m.pos||"Memoria",source:"Memoria",stored:!0,matchedWord:m.word};for(const g of d||[])for(const x of g.entries||[])if([x.spanish,x.topicTerm,Ra(x)].some(w=>r.has(Li(w))))return{main:dn(x),extras:x.topicEnglish&&x.topicEnglish!==x.english?[x.english].filter(Boolean):[],pos:g.title||x.sourceGroupTitle||"Palabras",source:"Palabras",stored:!0,matchedWord:Ra(x)};return null}async function Im(u){const p=[],d=encodeURIComponent(u),r=m=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(m):void 0;try{const m=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${d}&src=es&dst=en`,{signal:r(4e3)});if(m.ok){const g=await m.json();if(Array.isArray(g)&&g.length>0){const x=g[0],f=x?.translations?.[0]?.text?.trim();if(f){const w=(x.translations||[]).slice(1,5).map(j=>j.text?.trim()).filter(Boolean),y=[];for(const j of x.translations||[]){for(const S of j.examples||[])S.src&&S.dst&&y.length<2&&y.push({es:S.src,en:S.dst});if(y.length>=2)break}return{main:f,extras:w,pos:x.pos||x.translations?.[0]?.pos||"",examples:y,source:"Linguee"}}}}else p.push(`Linguee: HTTP ${m.status}`)}catch(m){p.push(`Linguee: ${m.message}`)}try{const m=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${d}&pretty=true`,{signal:r(4e3)});if(m.ok){const x=(await m.json())?.tuc||[],f=x.map(y=>y?.phrase?.text?.trim()).filter(Boolean),w=x.flatMap(y=>(y?.meanings||[]).map(j=>j?.text?.trim())).filter(Boolean);if(f.length>0){const y=f[0],j=f.slice(1,5).filter(S=>S.toLowerCase()!==y.toLowerCase());return{main:y,extras:j,pos:"",meanings:w.slice(0,3),source:"Glosbe"}}}else p.push(`Glosbe: HTTP ${m.status}`)}catch(m){p.push(`Glosbe: ${m.message}`)}try{const m=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${d}`,{signal:r(4e3)});if(m.ok){const g=await m.json();if(Array.isArray(g)&&g.length>0){const f=g[0]?.meanings?.[0],w=f?.definitions?.[0]?.definition?.trim();if(w)return{main:w,extras:[],pos:f?.partOfSpeech||"",source:"Diccionario",isDefinition:!0}}}else p.push(`FreeDict: HTTP ${m.status}`)}catch(m){p.push(`FreeDict: ${m.message}`)}try{const m=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${d}`,{signal:r(4e3)});if(m.ok){const x=(await m.json())?.sentences?.[0]?.trans?.trim();if(x&&x.toLowerCase()!==u.toLowerCase())return{main:x,extras:[],pos:"",source:"Google"}}}catch(m){p.push(`Google: ${m.message}`)}try{const m=await fetch(`https://api.mymemory.translated.net/get?q=${d}&langpair=es|en`,{signal:r(4e3)});if(m.ok){const x=(await m.json())?.responseData?.translatedText?.trim();if(x&&x.toLowerCase()!==u.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(x))return{main:x,extras:[],pos:"",source:"MyMemory"}}}catch(m){p.push(`MyMemory: ${m.message}`)}return p.length&&console.warn("Lookup failed for",u,p),null}function ub({savedWords:u,onSave:p,onRemove:d}){const[r,m]=H.useState(null),[g,x]=H.useState([]),f=bt.useRef(null),w=bt.useRef(u),y=bt.useRef(g),j=Km,S=Im,[U,_]=H.useState(null);if(H.useEffect(()=>{w.current=u},[u]),H.useEffect(()=>{y.current=g},[g]),H.useEffect(()=>{let Y=!0;return Am(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(me=>{if(!Y)return;const ve=me.default||[];x([...ve,...Xm(ve)])}).catch(()=>{Y&&x([])}),()=>{Y=!1}},[]),H.useEffect(()=>{let Y="";async function me(C,oe,F){const te=j(C);if(!te||te.length<2)return;_(null);const z=cb(te,w.current,y.current);if(z){m({word:z.matchedWord||te,x:oe,y:F,loading:!1,result:z,error:!1});return}m({word:te,x:oe,y:F,loading:!0,result:null,error:!1});try{const R=await S(te);m(V=>V&&V.word===te?{...V,loading:!1,result:R,error:!R}:V)}catch{m(V=>V&&V.word===te?{...V,loading:!1,error:!0}:V)}}function ve(C){const oe=C.target.closest&&C.target.closest("[data-dict-word]");if(!oe)return;const F=j(oe.dataset.dictWord||oe.textContent||"");if(!F||F.length<2)return;const te=window.getSelection?.();if(te&&!te.isCollapsed&&j(te.toString()).length>1)return;C.stopPropagation();const z=oe.getBoundingClientRect(),R=z.left+z.width/2,V=z.bottom+10;me(F,R,V)}function X(){clearTimeout(X._t),X._t=setTimeout(()=>{const C=window.getSelection(),oe=C?.toString()||"",F=j(oe);if(!F||F.length<2||F.split(/\s+/).length>3){Y&&_(null),Y="";return}if(F===Y)return;Y=F;let te=window.innerWidth/2,z=120;try{const ue=C.getRangeAt(0).getBoundingClientRect();te=ue.left+ue.width/2,z=ue.top-6}catch{}const R=96;te=Math.max(R/2+8,Math.min(te,window.innerWidth-R/2-8)),z<50&&(z=50),_({word:F,x:te,y:z})},200)}function we(C){const oe=f.current&&f.current.contains(C.target),F=C.target.closest&&C.target.closest(".dict-floating-btn"),te=C.target.closest&&C.target.closest("[data-dict-word]");!oe&&!F&&!te&&(m(null),_(null),Y="")}return window.__bookOpenPopup=me,document.addEventListener("selectionchange",X),document.addEventListener("pointerup",ve),document.addEventListener("pointerdown",we),()=>{document.removeEventListener("selectionchange",X),document.removeEventListener("pointerup",ve),document.removeEventListener("pointerdown",we),delete window.__bookOpenPopup}},[]),!r&&!U)return null;if(!r&&U)return s.jsxs("button",{className:"dict-floating-btn",style:{left:U.x,top:U.y+window.scrollY},onClick:Y=>{Y.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(U.word,U.x,U.y+50)},onPointerDown:Y=>Y.stopPropagation(),children:[s.jsx(cs,{size:14}),s.jsx("span",{children:"Traducir"})]});const J=290,K=Math.max(J/2+8,Math.min(r.x,window.innerWidth-J/2-8)),le=r.y+220>window.innerHeight,$=le?"auto":r.y+window.scrollY,W=le?window.innerHeight-r.y-window.scrollY+12:"auto",ae=new Set(Jm(r.word)),P=u.find(Y=>ae.has(Li(Y.word))),ne=!!P;function ie(){ne?d(P.word):p({word:r.word,translation:r.result?.main||"",pos:r.result?.pos||"",extras:r.result?.extras||[],savedAt:Date.now()})}return s.jsxs("div",{ref:f,className:"dict-popup",style:{left:K,top:$==="auto"?"auto":$,bottom:W==="auto"?"auto":W},children:[s.jsxs("div",{className:"dict-header",children:[s.jsx("span",{className:"dict-word",children:r.word}),s.jsx("button",{className:"dict-close-btn",onClick:()=>m(null),"aria-label":"Close",children:s.jsx(pn,{size:14})})]}),s.jsxs("div",{className:"dict-body",children:[r.loading&&s.jsxs("div",{className:"dict-loading",children:[s.jsx("span",{className:"dict-spinner"}),s.jsx("span",{children:"Looking up…"})]}),!r.loading&&r.error&&s.jsxs("div",{className:"dict-fallback",children:[s.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),s.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(r.word)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(cs,{size:14}),'Buscar "',r.word,'" en SpanishDict']})]}),!r.loading&&r.result&&s.jsxs(s.Fragment,{children:[r.result.pos&&s.jsx("div",{className:"dict-pos",children:r.result.pos}),s.jsx("div",{className:`dict-main-translation ${r.result.isDefinition?"is-definition":""}`,children:r.result.main}),r.result.extras?.length>0&&s.jsx("div",{className:"dict-extras",children:r.result.extras.map((Y,me)=>s.jsx("span",{className:"dict-extra-tag",children:Y},me))}),r.result.meanings?.length>0&&s.jsx("ul",{className:"dict-meanings",children:r.result.meanings.map((Y,me)=>s.jsx("li",{className:"dict-meaning-item",children:Y},me))}),r.result.examples?.length>0&&s.jsxs("div",{className:"dict-examples",children:[s.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),r.result.examples.map((Y,me)=>s.jsxs("div",{className:"dict-example",children:[s.jsx("div",{className:"dict-example-es",children:Y.es}),s.jsx("div",{className:"dict-example-en",children:Y.en})]},me))]})]})]}),!r.loading&&s.jsxs("button",{className:`dict-save-btn ${ne?"saved":""}`,onClick:ie,"aria-label":ne?"Remove from Memoria":"Save to Memoria",children:[s.jsx(lo,{size:14,className:ne?"filled":""}),ne?"Guardado en Memoria ✓":r.result?"Guardar en Memoria":"Guardar palabra"]}),s.jsxs("div",{className:"dict-footer",children:[s.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(r.word)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(cs,{size:12}),"Ver en SpanishDict"]}),s.jsx("span",{className:"dict-source",children:r.result?.source||"Dict"})]})]})}function rs(u){const p=new Set(u.tags||[]);return u.pending&&p.add("pending"),u.translation||p.add("needs-translation"),u.favorite&&p.add("favorite"),u.difficult&&p.add("difficult"),u.review?.mastered&&p.add("mastered"),u.review?.seen&&(u.review?.dueAt||0)<=Date.now()&&p.add("due"),/Group 1|cognates|near-cognates/i.test(u.pos||"")&&p.add("cognates"),/Group 2|function/i.test(u.pos||"")&&p.add("function-words"),/Group 3|remaining/i.test(u.pos||"")&&p.add("remaining"),[...p]}function Wm(u,p=Date.now()){return{due:u.filter(d=>d.review?.seen&&(d.review?.dueAt||0)<=p).length,mastered:u.filter(d=>d.review?.mastered).length,difficult:u.filter(d=>d.difficult||d.review?.lastRating==="Hard").length,favorite:u.filter(d=>d.favorite).length}}function db(u){const p=["Spanish","English","Tags","Notes"],d=u.map(f=>[f.word,f.translation||"",rs(f).join(" | "),[...f.extras||[],f.pos||""].filter(Boolean).join(" | ")]),r=[p,...d].map(f=>f.map(w=>`"${String(w).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([r],{type:"text/csv;charset=utf-8"}),g=URL.createObjectURL(m),x=document.createElement("a");x.href=g,x.download="memoria-spanish.csv",x.click(),URL.revokeObjectURL(g)}function pb({savedWords:u,onRemove:p,onClear:d,onUpdateWord:r}){const[m,g]=H.useState({}),[x,f]=H.useState("grid"),[w,y]=H.useState(""),[j,S]=H.useState("ALL"),[U,_]=H.useState(0),[J,K]=H.useState(!1),[le,$]=H.useState("");function W(C){g(oe=>({...oe,[C]:!oe[C]}))}const ae=[...u].sort((C,oe)=>{const F=C.review?.seen&&(C.review?.dueAt||0)<=Date.now(),te=oe.review?.seen&&(oe.review?.dueAt||0)<=Date.now();return F!==te?F?-1:1:oe.savedAt-C.savedAt}),P=H.useMemo(()=>{const C=new Set;for(const oe of ae)rs(oe).forEach(F=>C.add(F));return[...C].sort()},[ae]),ne=H.useMemo(()=>{const C=w.trim().toLowerCase();return ae.filter(oe=>{const F=rs(oe),te=j==="ALL"||F.includes(j),z=!C||oe.word.toLowerCase().includes(C)||(oe.translation||"").toLowerCase().includes(C)||F.some(R=>R.toLowerCase().includes(C));return te&&z})},[ae,w,j]),ie=ne[U%Math.max(1,ne.length)],Y=H.useMemo(()=>Wm(ae),[ae]);H.useEffect(()=>{_(0),K(!1)},[w,j,u.length]);function me(C){const oe=le.trim().toLowerCase().replace(/\s+/g,"-");if(!oe)return;const F=u.find(z=>z.word===C),te=Array.from(new Set([...F?.tags||[],oe]));r?.(C,{tags:te}),$("")}function ve(C,oe){const F=u.find(te=>te.word===C);r?.(C,{[oe]:!F?.[oe]})}function X(C,oe){const F=u.find(z=>z.word===C),te=Zm(F?.review,oe);r?.(C,{review:te,difficult:oe==="hard"?!0:F?.difficult}),we()}function we(){_(C=>(C+1)%Math.max(1,ne.length)),K(!1)}return ae.length===0?s.jsxs("div",{className:"memoria-empty",children:[s.jsx(lo,{size:36,className:"memoria-empty-icon"}),s.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),s.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",s.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):s.jsxs("article",{className:"chapter-body memoria-view",children:[s.jsxs("header",{className:"chapter-header",children:[s.jsx("div",{className:"chapter-meta",children:s.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),s.jsx("h1",{className:"chapter-title",children:"Memoria"}),s.jsxs("p",{className:"chapter-subtitle",children:[ae.length," ",ae.length===1?"palabra guardada":"palabras guardadas"]}),s.jsx("p",{className:"chapter-intro",children:x==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),s.jsxs("div",{className:"memoria-summary-strip",children:[s.jsxs("span",{children:[s.jsx(uc,{size:13})," ",Y.due," due"]}),s.jsxs("span",{children:[s.jsx(Ti,{size:13})," ",Y.favorite," favoritas"]}),s.jsxs("span",{children:[s.jsx(Ai,{size:13})," ",Y.difficult," dificiles"]}),s.jsxs("span",{children:[s.jsx(cc,{size:13})," ",Y.mastered," dominadas"]})]}),s.jsxs("div",{className:"memoria-view-toggle",children:[s.jsx("button",{className:`memoria-view-btn ${x==="grid"?"active":""}`,onClick:()=>f("grid"),children:"Tarjetas"}),s.jsx("button",{className:`memoria-view-btn ${x==="list"?"active":""}`,onClick:()=>f("list"),children:"Lista"}),s.jsx("button",{className:`memoria-view-btn ${x==="review"?"active":""}`,onClick:()=>f("review"),children:"Repaso"})]}),s.jsxs("div",{className:"memoria-tools",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Buscar"}),s.jsx("input",{value:w,onChange:C=>y(C.target.value),placeholder:"palabra, translation, tag..."})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Etiqueta"}),s.jsxs("select",{value:j,onChange:C=>S(C.target.value),children:[s.jsx("option",{value:"ALL",children:"Todas"}),P.map(C=>s.jsx("option",{value:C,children:C},C))]})]}),s.jsx("button",{className:"memoria-tool-btn",onClick:()=>db(ne),children:"Export CSV"})]}),x==="review"?s.jsx("div",{className:"memoria-review",children:ie?s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:`memoria-review-card ${J?"flipped":""}`,onClick:()=>K(C=>!C),children:[s.jsx("span",{className:"memoria-review-count",children:ne.length?`${U+1} / ${ne.length}`:"0 / 0"}),s.jsx("strong",{children:J?ie.translation||"Sin traduccion":ie.word}),s.jsx("em",{children:J?ie.word:"toca para revelar"})]}),s.jsxs("div",{className:"memoria-review-actions",children:[s.jsx(aa,{text:ie.word,size:"md"}),s.jsx("input",{value:le,onChange:C=>$(C.target.value),placeholder:"add-tag"}),s.jsx("button",{onClick:()=>me(ie.word),children:"Tag"}),s.jsxs("button",{onClick:()=>ve(ie.word,"favorite"),children:[s.jsx(Ti,{size:13}),ie.favorite?"Unfavorite":"Favorite"]}),s.jsxs("button",{onClick:()=>ve(ie.word,"difficult"),children:[s.jsx(Ai,{size:13}),ie.difficult?"Not hard":"Difficult"]}),s.jsx("button",{onClick:we,children:"Siguiente"})]}),s.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(C=>s.jsx("button",{onClick:()=>X(ie.word,C),children:C==="again"?"Again":C==="hard"?"Hard":C==="good"?"Good":"Easy"},C))})]}):s.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):x==="grid"?s.jsx("div",{className:"memoria-grid",children:ne.map(C=>{const oe=m[C.word],F=C.pending,te=rs(C);return s.jsxs("div",{className:`memoria-card ${oe?"flipped":""}`,onClick:()=>W(C.word),children:[s.jsxs("div",{className:"memoria-card-inner",children:[s.jsxs("div",{className:"memoria-face front",children:[s.jsx("div",{className:"memoria-word",children:C.word}),C.pos&&s.jsx("div",{className:"memoria-pos",children:C.pos}),C.translation?s.jsx("div",{className:"memoria-front-translation",children:C.translation}):F?s.jsxs("div",{className:"memoria-front-pending",children:[s.jsx("span",{className:"dict-spinner"}),s.jsx("span",{children:"traduciendo…"})]}):s.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),te.length>0&&s.jsx("div",{className:"memoria-tags",children:te.slice(0,3).map(z=>s.jsx("span",{children:z},z))}),s.jsxs("div",{className:"memoria-label-actions",children:[s.jsx("button",{className:C.favorite?"active":"",onClick:z=>{z.stopPropagation(),ve(C.word,"favorite")},"aria-label":"Toggle favorite",children:s.jsx(Ti,{size:12})}),s.jsx("button",{className:C.difficult?"active hard":"",onClick:z=>{z.stopPropagation(),ve(C.word,"difficult")},"aria-label":"Toggle difficult",children:s.jsx(Ai,{size:12})})]})]}),s.jsxs("div",{className:"memoria-face back",children:[C.translation?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"memoria-translation",children:C.translation}),C.extras?.length>0&&s.jsx("div",{className:"memoria-extras",children:C.extras.slice(0,3).map((z,R)=>s.jsx("span",{className:"memoria-extra-tag",children:z},R))})]}):s.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),s.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(C.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:z=>z.stopPropagation(),children:"SpanishDict →"})]})]}),s.jsx("button",{className:"memoria-remove",onClick:z=>{z.stopPropagation(),p(C.word)},"aria-label":`Remove ${C.word}`,children:s.jsx(pn,{size:13})})]},C.word)})}):s.jsx("div",{className:"memoria-list",children:ne.map(C=>{const oe=C.pending,F=rs(C);return s.jsxs("div",{className:"memoria-list-row",children:[s.jsxs("div",{className:"memoria-list-main",children:[s.jsxs("div",{className:"memoria-list-es",children:[s.jsx("span",{className:"memoria-list-word",children:C.word}),C.pos&&s.jsx("span",{className:"memoria-list-pos",children:C.pos})]}),C.translation?s.jsx("div",{className:"memoria-list-en",children:C.translation}):oe?s.jsxs("div",{className:"memoria-list-en pending",children:[s.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):s.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),C.extras?.length>0&&s.jsx("div",{className:"memoria-list-extras",children:C.extras.slice(0,4).map((te,z)=>s.jsx("span",{className:"memoria-list-extra-tag",children:te},z))}),F.length>0&&s.jsx("div",{className:"memoria-list-extras",children:F.map(te=>s.jsx("span",{className:"memoria-list-extra-tag",children:te},te))})]}),s.jsxs("div",{className:"memoria-list-actions",children:[s.jsx("button",{className:`memoria-list-remove ${C.favorite?"active-label":""}`,onClick:()=>ve(C.word,"favorite"),"aria-label":"Toggle favorite",children:s.jsx(Ti,{size:14})}),s.jsx("button",{className:`memoria-list-remove ${C.difficult?"active-hard":""}`,onClick:()=>ve(C.word,"difficult"),"aria-label":"Toggle difficult",children:s.jsx(Ai,{size:14})}),s.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(C.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:s.jsx(cs,{size:14})}),s.jsx("button",{className:"memoria-list-remove",onClick:()=>p(C.word),"aria-label":`Remove ${C.word}`,children:s.jsx(pn,{size:14})})]})]},C.word)})}),ae.length>0&&s.jsx("div",{className:"memoria-actions",children:s.jsx("button",{className:"memoria-clear-btn",onClick:d,children:"Borrar todo"})})]})}function mb({savedWords:u,chapters:p,entries:d=[],onEntriesChange:r}){const[m,g]=H.useState(0),[x,f]=H.useState("");async function w(_){r?.(_);try{await window.storage.set(Lm,JSON.stringify(_))}catch{}}const y=H.useMemo(()=>{const _=u.slice(0,8).map(K=>({label:`Usa "${K.word}"`,text:`Write 2 Spanish sentences using "${K.word}".`,target:K.word})),J=p.slice(0,6).map(K=>({label:K.title,text:`Write a short Spanish paragraph about "${K.title}".`,target:K.title}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:"today"},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:"question"},..._,...J]},[u,p]),j=y[m]||y[0],S=H.useMemo(()=>Vg(x,j),[x,j]);function U(){if(!x.trim())return;const _=[{id:`${Date.now()}`,prompt:j.text,text:x.trim(),feedback:S,createdAt:Date.now()},...d].slice(0,40);w(_),f("")}return s.jsxs("article",{className:"chapter-body writing-view",children:[s.jsxs("header",{className:"chapter-header",children:[s.jsxs("div",{className:"chapter-icon-row",children:[s.jsx("div",{className:"chapter-icon-wrap",children:s.jsx(Um,{size:22})}),s.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),s.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),s.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),s.jsx("div",{className:"chapter-rule"})]}),s.jsxs("section",{className:"writing-board",children:[s.jsxs("div",{className:"writing-prompt-row",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Prompt"}),s.jsx("select",{value:m,onChange:_=>g(Number(_.target.value)),children:y.map((_,J)=>s.jsx("option",{value:J,children:_.label},`${_.label}-${J}`))})]}),s.jsx("p",{children:j.text})]}),s.jsx("textarea",{value:x,onChange:_=>f(_.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),s.jsxs("div",{className:"writing-feedback-grid",children:[s.jsxs("span",{children:[s.jsx("strong",{children:S.words})," words"]}),s.jsxs("span",{children:[s.jsx("strong",{children:S.sentences})," sentences"]}),s.jsxs("span",{children:[s.jsx("strong",{children:S.accents})," accents"]}),s.jsxs("span",{children:[s.jsx("strong",{children:S.connectors})," connectors"]}),s.jsxs("span",{children:[s.jsx("strong",{children:S.score})," score"]})]}),s.jsx("div",{className:"writing-tips",children:S.tips.length?S.tips.map(_=>s.jsx("span",{children:_},_)):s.jsx("span",{children:"Good shape. Read it out loud once."})}),s.jsxs("div",{className:"writing-actions",children:[s.jsx(aa,{text:x,size:"md"}),s.jsx("button",{onClick:U,disabled:!x.trim(),children:"Save practice"})]})]}),s.jsxs("section",{className:"writing-history",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(pc,{size:18})," History"]}),d.length?d.map(_=>s.jsxs("article",{className:"writing-entry",children:[s.jsxs("div",{className:"writing-entry-meta",children:[new Date(_.createdAt).toLocaleDateString()," - ",_.feedback.words," words"]}),s.jsx("p",{children:_.prompt}),s.jsx("blockquote",{children:_.text})]},_.id)):s.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function fb({totalChapters:u,visitedCount:p,savedWordsCount:d,levelFilter:r,palabrasSummary:m,lessonSummary:g,memoriaSummary:x,learnerProfile:f,reviewQueue:w,writingCount:y,sectionProgress:j,recommendations:S,onStart:U,onOpenMemoria:_,onOpenPalabras:J,onOpenVerb:K,onOpenReading:le,onOpenWriting:$,onSelectChapter:W}){const ae=u?Math.round(p/u*100):0;return s.jsxs("article",{className:"chapter-body home-dashboard",children:[s.jsxs("header",{className:"home-hero",children:[s.jsxs("div",{className:"home-kicker",children:[s.jsx(Mm,{size:18}),"Plan de estudio"]}),s.jsx("h1",{className:"home-title",children:"Learn Spanish"}),s.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),s.jsxs("div",{className:"home-actions",children:[s.jsxs("button",{className:"home-primary",onClick:U,children:["Empezar",s.jsx(so,{size:16})]}),s.jsxs("button",{className:"home-secondary",onClick:_,children:[s.jsx(lo,{size:15}),"Memoria"]})]})]}),s.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Progreso"}),s.jsxs("strong",{children:[ae,"%"]}),s.jsxs("span",{children:[p," / ",u," capitulos"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Nivel"}),s.jsx("strong",{children:r==="ALL"?"Todo":r}),s.jsx("span",{children:"Filtro activo"})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Memoria"}),s.jsx("strong",{children:d}),s.jsxs("span",{children:[x.difficult," dificiles"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Palabras due"}),s.jsx("strong",{children:m.due}),s.jsxs("span",{children:[m.mastered," dominadas"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Lecciones"}),s.jsx("strong",{children:g.understood}),s.jsxs("span",{children:[g.read," leidas"]})]}),s.jsxs("div",{className:"home-stat",children:[s.jsx("span",{className:"home-stat-label",children:"Writing"}),s.jsx("strong",{children:y}),s.jsx("span",{children:"entradas"})]})]}),s.jsxs("section",{className:"home-daily",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(sc,{size:18}),"Ruta diaria"]}),s.jsxs("div",{className:"home-daily-grid",children:[s.jsxs("button",{onClick:J,children:[s.jsx("span",{children:"01"}),s.jsx("strong",{children:"10 palabras"}),s.jsx("em",{children:m.due?`${m.due} vencidas`:`${m.seen} vistas`})]}),s.jsxs("button",{onClick:le,children:[s.jsx("span",{children:"02"}),s.jsx("strong",{children:"Lectura con audio"}),s.jsx("em",{children:"lee y escucha una pagina"})]}),s.jsxs("button",{onClick:K,children:[s.jsx("span",{children:"03"}),s.jsx("strong",{children:"Un verbo"}),s.jsx("em",{children:"tabla, voz, repeticion"})]}),s.jsxs("button",{onClick:_,children:[s.jsx("span",{children:"04"}),s.jsx("strong",{children:"Memoria"}),s.jsxs("em",{children:[d," guardadas"]})]}),s.jsxs("button",{onClick:$,children:[s.jsx("span",{children:"05"}),s.jsx("strong",{children:"Writing"}),s.jsx("em",{children:"sentence practice"})]})]})]}),s.jsxs("section",{className:"home-review-queue",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(Tg,{size:18}),"Cola de repaso"]}),s.jsx("div",{className:"home-review-list",children:w.slice(0,8).map((P,ne)=>s.jsxs("button",{onClick:()=>P.chapter?W(P.chapter):P.type==="writing"?$():_(),children:[s.jsx("span",{className:`review-type ${P.type}`,children:P.type}),s.jsx("strong",{children:P.title}),s.jsx("em",{children:P.detail})]},`${P.type}-${P.title}-${ne}`))}),s.jsxs("div",{className:"home-review-summary",children:[f.vocabulary.due," vocabulary due · ",f.writing.needsPractice," writing rewrites · ",f.chapters.unvisited," unread chapters"]})]}),s.jsxs("section",{className:"home-progress-map",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(dc,{size:18}),"Mapa de progreso"]}),s.jsx("div",{className:"home-progress-list",children:j.map(P=>{const ne=P.total?Math.round(P.visited/P.total*100):0;return s.jsxs("div",{className:"home-progress-row",children:[s.jsxs("div",{className:"home-progress-top",children:[s.jsx("span",{children:P.label}),s.jsxs("strong",{children:[P.visited," / ",P.total]})]}),s.jsx("div",{className:"home-progress-track",children:s.jsx("span",{style:{width:`${ne}%`}})})]},P.id)})})]}),s.jsxs("section",{className:"home-path",children:[s.jsxs("div",{className:"home-section-heading",children:[s.jsx(uc,{size:18}),"Siguiente lectura"]}),s.jsx("div",{className:"home-recommendations",children:S.map((P,ne)=>s.jsxs("button",{className:"home-rec",onClick:()=>W(P),children:[s.jsx("span",{className:"home-rec-index",children:String(ne+1).padStart(2,"0")}),s.jsxs("span",{className:"home-rec-main",children:[s.jsx("span",{className:"home-rec-title",children:P.title}),s.jsxs("span",{className:"home-rec-meta",children:[P.sectionLabel," - ",P.level]})]}),s.jsx(so,{size:16})]},P.id))})]})]})}function hb(){const[u,p]=H.useState("tiempos"),[d,r]=H.useState("tiempos"),[m,g]=H.useState("ALL"),[x,f]=H.useState(!1),[w,y]=H.useState(!1),[j,S]=H.useState(!0),[U,_]=H.useState(!1),[J,K]=H.useState(""),[le,$]=H.useState({rate:.85,voiceURI:""}),[W,ae]=H.useState([]),[P,ne]=H.useState(null),[ie,Y]=H.useState(1),[me,ve]=H.useState(null),[X,we]=H.useState([]),[C,oe]=H.useState([]),[F,te]=H.useState({}),[z,R]=H.useState({});H.useEffect(()=>{(async()=>{try{const N=await window.storage.get("memoria-words");N?.value&&we(JSON.parse(N.value))}catch{}try{const N=await window.storage.get("font-scale");if(N?.value){const B=parseFloat(N.value);B>=.85&&B<=1.3&&Y(B)}}catch{}try{const N=await window.storage.get("last-read");if(N?.value){const B=JSON.parse(N.value);B?.chapterId&&B.chapterId!=="tiempos"&&ve(B)}}catch{}try{const N=await window.storage.get("visited-chapters");N?.value&&oe(JSON.parse(N.value))}catch{}try{const N=await window.storage.get(qm);N?.value&&te(JSON.parse(N.value))}catch{}try{const N=await window.storage.get(km);N?.value&&R(JSON.parse(N.value))}catch{}try{const N=await window.storage.get(zm);if(N?.value){const B=JSON.parse(N.value);$(B),Ui(B)}}catch{}try{const N=await window.storage.get(Lm);N?.value&&ae(JSON.parse(N.value)||[])}catch{}})()},[]),H.useEffect(()=>{function N(B){ne(B.detail?.worker||null)}return window.addEventListener("learn-spanish-update-ready",N),()=>window.removeEventListener("learn-spanish-update-ready",N)},[]);function V(){P?.postMessage?.({type:"SKIP_WAITING"})}H.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(ie));try{window.storage.set("font-scale",String(ie))}catch{}},[ie]);function ue(N){Y(B=>Math.max(.85,Math.min(1.3,+(B+N).toFixed(2))))}async function de(N){try{await window.storage.set("memoria-words",JSON.stringify(N))}catch{}}async function b(N){try{await window.storage.set(qm,JSON.stringify(N))}catch{}}async function D(N){try{await window.storage.set(km,JSON.stringify(N))}catch{}}function Q(N){te(N),b(N)}function Z(N,B){R(ge=>{const qe={...ge};return B?qe[N]=B:delete qe[N],D(qe),qe})}function pe(N){$(N),Ui(N);try{window.storage.set(zm,JSON.stringify(N))}catch{}}async function he(N){we(ge=>{const qe=ge.map(ye=>ye.word===N?{...ye,pending:!0}:ye);return de(qe),qe});const B=await Im(N);we(ge=>{const qe=ge.map(ye=>ye.word!==N?ye:B?{...ye,translation:B.main,pos:B.pos||ye.pos||"",extras:B.extras||[],pending:!1,translatedAt:Date.now()}:{...ye,pending:!1});return de(qe),qe})}function Ne(N){we(B=>{if(B.some(qe=>qe.word===N.word)){const qe=B.map(ye=>ye.word===N.word?{...ye,...N,tags:Array.from(new Set([...ye.tags||[],...N.tags||[]])),extras:Array.from(new Set([...ye.extras||[],...N.extras||[]])),savedAt:ye.savedAt||N.savedAt||Date.now()}:ye);return de(qe),qe}const ge=[N,...B];return de(ge),ge}),N.translation||he(N.word)}function Ie(N){we(B=>{const ge=B.filter(qe=>qe.word!==N);return de(ge),ge})}function G(N,B){we(ge=>{const qe=ge.map(ye=>ye.word===N?{...ye,...B}:ye);return de(qe),qe})}function Te(){we([]),de([])}H.useEffect(()=>{if(X.length===0)return;const N=X.filter(B=>!B.translation&&!B.pending);N.length!==0&&N.slice(0,5).forEach((B,ge)=>{setTimeout(()=>he(B.word),ge*800)})},[X.length]);const[Re,Ve]=H.useState(()=>{const N={};for(const B of ls)N[B.id]=!(B.id==="verbos"||B.id==="verbos2");return N}),ce=H.useMemo(()=>{const N=[];for(const B of ls)for(const ge of B.chapters)(ge.alwaysVisible||m==="ALL"||ge.level===m)&&N.push({...ge,sectionId:B.id,sectionLabel:B.label});return N},[m]);H.useEffect(()=>{ce.find(N=>N.id===d)||ce.length&&(r(ce[0].id),p(ce[0].sectionId))},[ce,d]),H.useEffect(()=>{const N=ce.find(B=>B.id===d);N&&Ve(B=>B[N.sectionId]?B:{...B,[N.sectionId]:!0})},[d,ce]);const ta=H.useMemo(()=>ce.find(N=>N.id===d),[ce,d]),pa=ce.findIndex(N=>N.id===d),Ba=pa>0?ce[pa-1]:null,co=pa>=0&&pa<ce.length-1?ce[pa+1]:null,$a=H.useMemo(()=>new Set(C),[C]),mn=H.useMemo(()=>ce.filter(N=>$a.has(N.id)).length,[ce,$a]),fn=H.useMemo(()=>{const N=ce.filter(B=>!$a.has(B.id));return(N.length?N:ce).slice(0,4)},[ce,$a]),hn=H.useMemo(()=>Yg(J,ce,X,W),[J,ce,X,W]),Oi=H.useMemo(()=>{const N=Object.values(z||{});return{read:N.filter(B=>B==="read"||B==="understood").length,understood:N.filter(B=>B==="understood").length}},[z]),_i=H.useMemo(()=>Wm(X),[X]),sa=H.useMemo(()=>Qg({chapters:ce,visitedChapters:C,lessonStatuses:z,palabrasProgress:F,savedWords:X,writingEntries:W}),[ce,C,z,F,X,W]),Hi=H.useMemo(()=>Xg({chapters:ce,lessonStatuses:z,palabrasProgress:F,savedWords:X,writingEntries:W}),[ce,z,F,X,W]),uo=fn[0]||ce[0],ms=H.useMemo(()=>{const N=Object.values(F||{}),B=Date.now();return{seen:N.filter(ge=>ge?.seen).length,due:N.filter(ge=>ge?.seen&&(ge.dueAt||0)<=B).length,mastered:N.filter(ge=>ge?.mastered).length}},[F]),gn=H.useMemo(()=>ls.map(N=>{const B=N.chapters.filter(qe=>qe.alwaysVisible||m==="ALL"||qe.level===m),ge=B.filter(qe=>$a.has(qe.id)).length;return{id:N.id,label:N.label,total:B.length,visited:ge}}).filter(N=>N.total>0),[m,$a]),fs=ce.find(N=>N.id==="palabras-5000"),po=ce.find(N=>N.sectionId==="verbos")||ce.find(N=>N.sectionId==="verbos2"),hs=ce.find(N=>N.sectionId==="lectura");H.useEffect(()=>{try{window.storage.set(Gg,JSON.stringify(sa))}catch{}},[sa]);function Ta(N){r(N.id),p(N.sectionId||N.sectionId),y(!1),_(!1),S(!1),f(!1),ve(null),oe(B=>{if(B.includes(N.id))return B;const ge=[...B,N.id];try{window.storage.set("visited-chapters",JSON.stringify(ge))}catch{}return ge});try{window.storage.set("last-read",JSON.stringify({sectionId:N.sectionId,chapterId:N.id,title:N.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const B=document.querySelector(".book-main");B&&B.scrollTo({top:0,behavior:"smooth"})}}function Xt(){if(!me)return;const N=ls.find(ge=>ge.id===me.sectionId),B=N?.chapters.find(ge=>ge.id===me.chapterId);B&&Ta({...B,sectionId:N.id}),ve(null)}function ma(){ve(null)}function Xa(N=""){return s.jsxs("div",{className:`global-search ${N}`,children:[s.jsxs("label",{children:[s.jsx(Og,{size:14}),s.jsx("input",{value:J,onChange:B=>K(B.target.value),placeholder:"Search everything..."})]}),J.trim().length>=2&&s.jsx("div",{className:"global-search-results",children:hn.length?hn.map((B,ge)=>s.jsxs("button",{onClick:()=>{B.type==="memoria"?(S(!1),_(!1),y(!0)):B.type==="writing"?(S(!1),y(!1),_(!0)):Ta(B.chapter),K(""),f(!1)},children:[s.jsx("span",{children:B.title}),s.jsx("em",{children:B.meta}),B.context&&s.jsx("small",{children:B.context})]},`${B.type}-${B.title}-${ge}`)):s.jsx("div",{className:"global-search-empty",children:"No matches"})})]})}return s.jsxs("div",{className:"book-root",children:[s.jsx(ub,{savedWords:X,onSave:Ne,onRemove:Ie}),s.jsx("style",{children:gb}),s.jsxs("div",{className:"mobile-bar",children:[s.jsx("button",{className:"mobile-btn",onClick:()=>f(!0),"aria-label":"Open menu",children:s.jsx(Dg,{size:20})}),s.jsx("div",{className:"mobile-title",children:s.jsx("span",{className:"mobile-brand-script",children:"Español"})}),Xa("header-search"),s.jsxs("div",{className:"font-controls",children:[s.jsx("button",{className:"font-btn",onClick:()=>ue(-.05),"aria-label":"Smaller text",disabled:ie<=.85,children:s.jsx("span",{className:"font-btn-small",children:"A"})}),s.jsx("button",{className:"font-btn",onClick:()=>ue(.05),"aria-label":"Larger text",disabled:ie>=1.3,children:s.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),me&&s.jsxs("div",{className:"resume-banner",children:[s.jsxs("div",{className:"resume-banner-text",children:[s.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),s.jsx("span",{className:"resume-banner-title",children:me.title})]}),s.jsxs("div",{className:"resume-banner-actions",children:[s.jsxs("button",{className:"resume-btn-primary",onClick:Xt,children:["Continuar",s.jsx(so,{size:14})]}),s.jsx("button",{className:"resume-btn-dismiss",onClick:ma,"aria-label":"Dismiss",children:s.jsx(pn,{size:14})})]})]}),P&&s.jsxs("div",{className:"update-banner",children:[s.jsxs("div",{children:[s.jsx("span",{className:"resume-banner-label",children:"New version ready"}),s.jsx("span",{className:"resume-banner-title",children:"Refresh to use the latest study tools."})]}),s.jsxs("button",{className:"resume-btn-primary",onClick:V,children:["Update",s.jsx(so,{size:14})]})]}),s.jsxs("div",{className:"book-shell",children:[s.jsxs("aside",{className:`sidebar ${x?"open":""}`,children:[s.jsxs("div",{className:"sidebar-inner",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs("div",{className:"brand",children:[s.jsx("div",{className:"brand-mark",children:s.jsx(rc,{size:18})}),s.jsxs("div",{className:"brand-text",children:[s.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),s.jsx("div",{className:"brand-title",children:"Español"})]}),s.jsx("button",{className:"sidebar-close",onClick:()=>f(!1),"aria-label":"Close menu",children:s.jsx(pn,{size:18})})]})}),s.jsxs("nav",{className:"section-nav",children:[s.jsx("div",{className:`section-group home-nav-item ${j?"active":""}`,children:s.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{S(!0),y(!1),_(!1),f(!1)},children:[s.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:s.jsx(dc,{size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:"Inicio"}),s.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),s.jsx("div",{className:"section-meta",children:s.jsx("div",{className:"section-count",children:C.length})})]})}),ls.map(N=>{const B=N.chapters.filter(ye=>ye.alwaysVisible||m==="ALL"||ye.level===m),ge=N.id===u&&!w&&!j,qe=Re[N.id];return s.jsxs("div",{className:`section-group ${ge?"active":""} ${qe?"expanded":"collapsed"}`,children:[s.jsxs("button",{className:"section-btn",onClick:()=>{Ve(ye=>({...ye,[N.id]:!ye[N.id]}))},"aria-expanded":qe,children:[s.jsx("div",{className:"section-icon-wrap",children:s.jsx(Om,{id:N.id,size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:N.label}),s.jsx("div",{className:"section-sublabel",children:N.sublabel})]}),s.jsxs("div",{className:"section-meta",children:[s.jsx("div",{className:"section-count",children:B.length}),s.jsx(ro,{size:16,className:`section-chevron ${qe?"open":""}`})]})]}),qe&&B.length>0&&s.jsx("ul",{className:"chapter-list",children:B.map(ye=>{const xt=ye.blocks?.some(Za=>Za.type==="foldable-grammar"||Za.type==="foldable-stories")?null:z[ye.id];return s.jsx("li",{children:s.jsxs("button",{className:`chapter-btn ${d===ye.id&&!w&&!j?"active":""}`,onClick:()=>{y(!1),Ta({...ye,sectionId:N.id})},children:[s.jsx("span",{className:"chapter-btn-level",children:ye.level}),s.jsx("span",{className:"chapter-btn-title",children:ye.title}),xt&&s.jsx("span",{className:`chapter-btn-status ${xt}`,children:xt==="understood"?"Entendido":"Leído"})]})},ye.id)})})]},N.id)}),s.jsx("div",{className:`section-group memoria-nav-item ${w?"active":""}`,children:s.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{S(!1),_(!1),y(!0),f(!1)},children:[s.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:s.jsx(lo,{size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:"Memoria"}),s.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),s.jsx("div",{className:"section-meta",children:s.jsx("div",{className:"section-count memoria-count",children:X.length})})]})}),s.jsx("div",{className:`section-group writing-nav-item ${U?"active":""}`,children:s.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{S(!1),y(!1),_(!0),f(!1)},children:[s.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:s.jsx(Um,{size:18,className:"section-icon"})}),s.jsxs("div",{className:"section-text",children:[s.jsx("div",{className:"section-label",children:"Writing"}),s.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),s.jsx("div",{className:"section-meta",children:s.jsx("div",{className:"section-count writing-count",children:W.length})})]})})]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("div",{className:"sig",children:"— para Othman"})})]}),x&&s.jsx("div",{className:"scrim",onClick:()=>f(!1)})]}),s.jsxs("main",{className:"book-main",children:[s.jsxs("div",{className:`book-page ${j?"home-page":""}`,children:[j?s.jsx(fb,{totalChapters:ce.length,visitedCount:mn,savedWordsCount:X.length,levelFilter:m,palabrasSummary:ms,lessonSummary:Oi,memoriaSummary:_i,learnerProfile:sa,reviewQueue:Hi,writingCount:W.length,sectionProgress:gn,recommendations:fn,onStart:()=>uo&&Ta(uo),onOpenMemoria:()=>{S(!1),_(!1),y(!0)},onOpenPalabras:()=>fs&&Ta(fs),onOpenVerb:()=>po&&Ta(po),onOpenReading:()=>hs&&Ta(hs),onOpenWriting:()=>{S(!1),y(!1),_(!0)},onSelectChapter:Ta}):w?s.jsx(pb,{savedWords:X,onRemove:Ie,onClear:Te,onUpdateWord:G}):U?s.jsx(mb,{savedWords:X,chapters:ce,entries:W,onEntriesChange:ae}):ta?s.jsx(rb,{chapter:ta,sectionId:u,onSaveWord:Ne,savedWords:X,onUpdateSavedWord:G,palabrasProgress:F,onPalabrasProgressChange:Q,lessonStatuses:z,onLessonStatusChange:Z}):s.jsxs("div",{className:"empty",children:[s.jsx(us,{size:28}),s.jsx("p",{children:"No hay capítulos en este nivel."})]}),!j&&!w&&!U&&s.jsxs("nav",{className:"chapter-nav",children:[Ba?s.jsxs("button",{className:"nav-btn prev",onClick:()=>Ta(Ba),children:[s.jsx(Ag,{size:16}),s.jsxs("div",{children:[s.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),s.jsx("div",{className:"nav-title",children:Ba.title})]})]}):s.jsx("div",{}),co?s.jsxs("button",{className:"nav-btn next",onClick:()=>Ta(co),children:[s.jsxs("div",{style:{textAlign:"right"},children:[s.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),s.jsx("div",{className:"nav-title",children:co.title})]}),s.jsx(so,{size:16})]}):s.jsx("div",{})]})]}),s.jsx("footer",{className:"level-bar",children:s.jsxs("div",{className:"level-bar-inner",children:[s.jsxs("div",{className:"level-bar-label",children:[s.jsx(lo,{size:14})," Nivel"]}),s.jsxs("div",{className:"level-pills",children:[s.jsx("button",{className:`level-pill ${m==="ALL"?"active":""}`,onClick:()=>g("ALL"),children:"Todos"}),Zg.map(N=>s.jsx("button",{className:`level-pill ${m===N?"active":""}`,onClick:()=>g(N),children:N},N))]}),s.jsx($g,{settings:le,onChange:pe}),s.jsx("div",{className:"level-bar-counter",children:j?`${mn} / ${ce.length}`:pa>=0?`${pa+1} / ${ce.length}`:"—"})]})})]})]})]})}const gb=`
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
  .font-controls {
    margin-left: auto;
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
`;typeof window<"u"&&!window.storage&&(window.storage={async get(u){const p=window.localStorage.getItem(u);return p===null?null:{value:p}},async set(u,p){window.localStorage.setItem(u,p)},async delete(u){window.localStorage.removeItem(u)}});jg();wg.createRoot(document.getElementById("root")).render(s.jsx(bt.StrictMode,{children:s.jsx(hb,{})}));
