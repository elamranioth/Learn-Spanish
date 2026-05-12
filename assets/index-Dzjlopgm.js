(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function d(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(m){if(m.ep)return;m.ep=!0;const f=d(m);fetch(m.href,f)}})();function Cg(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var kc={exports:{}},ys={};var Om;function Mg(){if(Om)return ys;Om=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(c,m,f){var v=null;if(f!==void 0&&(v=""+f),m.key!==void 0&&(v=""+m.key),"key"in m){f={};for(var h in m)h!=="key"&&(f[h]=m[h])}else f=m;return m=f.ref,{$$typeof:l,type:c,key:v,ref:m!==void 0?m:null,props:f}}return ys.Fragment=u,ys.jsx=d,ys.jsxs=d,ys}var _m;function Dg(){return _m||(_m=1,kc.exports=Mg()),kc.exports}var o=Dg(),jc={exports:{}},me={};var Gm;function Lg(){if(Gm)return me;Gm=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),v=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),C=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,W={};function X(x,O,Q){this.props=x,this.context=O,this.refs=W,this.updater=Q||H}X.prototype.isReactComponent={},X.prototype.setState=function(x,O){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,O,"setState")},X.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function F(){}F.prototype=X.prototype;function ee(x,O,Q){this.props=x,this.context=O,this.refs=W,this.updater=Q||H}var P=ee.prototype=new F;P.constructor=ee,B(P,X.prototype),P.isPureReactComponent=!0;var re=Array.isArray;function le(){}var te={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function ve(x,O,Q){var I=Q.ref;return{$$typeof:l,type:x,key:O,ref:I!==void 0?I:null,props:Q}}function ne(x,O){return ve(x.type,O,x.props)}function fe(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Me(x){var O={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Q){return O[Q]})}var Ne=/\/+/g;function pe(x,O){return typeof x=="object"&&x!==null&&x.key!=null?Me(""+x.key):O.toString(36)}function xe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(le,le):(x.status="pending",x.then(function(O){x.status==="pending"&&(x.status="fulfilled",x.value=O)},function(O){x.status==="pending"&&(x.status="rejected",x.reason=O)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function T(x,O,Q,I,de){var he=typeof x;(he==="undefined"||he==="boolean")&&(x=null);var qe=!1;if(x===null)qe=!0;else switch(he){case"bigint":case"string":case"number":qe=!0;break;case"object":switch(x.$$typeof){case l:case u:qe=!0;break;case w:return qe=x._init,T(qe(x._payload),O,Q,I,de)}}if(qe)return de=de(x),qe=I===""?"."+pe(x,0):I,re(de)?(Q="",qe!=null&&(Q=qe.replace(Ne,"$&/")+"/"),T(de,O,Q,"",function(ze){return ze})):de!=null&&(fe(de)&&(de=ne(de,Q+(de.key==null||x&&x.key===de.key?"":(""+de.key).replace(Ne,"$&/")+"/")+qe)),O.push(de)),1;qe=0;var $e=I===""?".":I+":";if(re(x))for(var V=0;V<x.length;V++)I=x[V],he=$e+pe(I,V),qe+=T(I,O,Q,he,de);else if(V=D(x),typeof V=="function")for(x=V.call(x),V=0;!(I=x.next()).done;)I=I.value,he=$e+pe(I,V++),qe+=T(I,O,Q,he,de);else if(he==="object"){if(typeof x.then=="function")return T(xe(x),O,Q,I,de);throw O=String(x),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return qe}function S(x,O,Q){if(x==null)return x;var I=[],de=0;return T(x,I,"","",function(he){return O.call(Q,he,de++)}),I}function R(x){if(x._status===-1){var O=x._result;O=O(),O.then(function(Q){(x._status===0||x._status===-1)&&(x._status=1,x._result=Q)},function(Q){(x._status===0||x._status===-1)&&(x._status=2,x._result=Q)}),x._status===-1&&(x._status=0,x._result=O)}if(x._status===1)return x._result.default;throw x._result}var Z=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},$={map:S,forEach:function(x,O,Q){S(x,function(){O.apply(this,arguments)},Q)},count:function(x){var O=0;return S(x,function(){O++}),O},toArray:function(x){return S(x,function(O){return O})||[]},only:function(x){if(!fe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return me.Activity=j,me.Children=$,me.Component=X,me.Fragment=d,me.Profiler=m,me.PureComponent=ee,me.StrictMode=c,me.Suspense=b,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,me.__COMPILER_RUNTIME={__proto__:null,c:function(x){return te.H.useMemoCache(x)}},me.cache=function(x){return function(){return x.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(x,O,Q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var I=B({},x.props),de=x.key;if(O!=null)for(he in O.key!==void 0&&(de=""+O.key),O)!K.call(O,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&O.ref===void 0||(I[he]=O[he]);var he=arguments.length-2;if(he===1)I.children=Q;else if(1<he){for(var qe=Array(he),$e=0;$e<he;$e++)qe[$e]=arguments[$e+2];I.children=qe}return ve(x.type,de,I)},me.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},me.createElement=function(x,O,Q){var I,de={},he=null;if(O!=null)for(I in O.key!==void 0&&(he=""+O.key),O)K.call(O,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(de[I]=O[I]);var qe=arguments.length-2;if(qe===1)de.children=Q;else if(1<qe){for(var $e=Array(qe),V=0;V<qe;V++)$e[V]=arguments[V+2];de.children=$e}if(x&&x.defaultProps)for(I in qe=x.defaultProps,qe)de[I]===void 0&&(de[I]=qe[I]);return ve(x,he,de)},me.createRef=function(){return{current:null}},me.forwardRef=function(x){return{$$typeof:h,render:x}},me.isValidElement=fe,me.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:R}},me.memo=function(x,O){return{$$typeof:g,type:x,compare:O===void 0?null:O}},me.startTransition=function(x){var O=te.T,Q={};te.T=Q;try{var I=x(),de=te.S;de!==null&&de(Q,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(le,Z)}catch(he){Z(he)}finally{O!==null&&Q.types!==null&&(O.types=Q.types),te.T=O}},me.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},me.use=function(x){return te.H.use(x)},me.useActionState=function(x,O,Q){return te.H.useActionState(x,O,Q)},me.useCallback=function(x,O){return te.H.useCallback(x,O)},me.useContext=function(x){return te.H.useContext(x)},me.useDebugValue=function(){},me.useDeferredValue=function(x,O){return te.H.useDeferredValue(x,O)},me.useEffect=function(x,O){return te.H.useEffect(x,O)},me.useEffectEvent=function(x){return te.H.useEffectEvent(x)},me.useId=function(){return te.H.useId()},me.useImperativeHandle=function(x,O,Q){return te.H.useImperativeHandle(x,O,Q)},me.useInsertionEffect=function(x,O){return te.H.useInsertionEffect(x,O)},me.useLayoutEffect=function(x,O){return te.H.useLayoutEffect(x,O)},me.useMemo=function(x,O){return te.H.useMemo(x,O)},me.useOptimistic=function(x,O){return te.H.useOptimistic(x,O)},me.useReducer=function(x,O,Q){return te.H.useReducer(x,O,Q)},me.useRef=function(x){return te.H.useRef(x)},me.useState=function(x){return te.H.useState(x)},me.useSyncExternalStore=function(x,O,Q){return te.H.useSyncExternalStore(x,O,Q)},me.useTransition=function(){return te.H.useTransition()},me.version="19.2.5",me}var Hm;function Rc(){return Hm||(Hm=1,jc.exports=Lg()),jc.exports}var L=Rc();const cn=Cg(L);var zc={exports:{}},ws={},Sc={exports:{}},Nc={};var Rm;function Ug(){return Rm||(Rm=1,(function(l){function u(T,S){var R=T.length;T.push(S);e:for(;0<R;){var Z=R-1>>>1,$=T[Z];if(0<m($,S))T[Z]=S,T[R]=$,R=Z;else break e}}function d(T){return T.length===0?null:T[0]}function c(T){if(T.length===0)return null;var S=T[0],R=T.pop();if(R!==S){T[0]=R;e:for(var Z=0,$=T.length,x=$>>>1;Z<x;){var O=2*(Z+1)-1,Q=T[O],I=O+1,de=T[I];if(0>m(Q,R))I<$&&0>m(de,Q)?(T[Z]=de,T[I]=R,Z=I):(T[Z]=Q,T[O]=R,Z=O);else if(I<$&&0>m(de,R))T[Z]=de,T[I]=R,Z=I;else break e}}return S}function m(T,S){var R=T.sortIndex-S.sortIndex;return R!==0?R:T.id-S.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var v=Date,h=v.now();l.unstable_now=function(){return v.now()-h}}var b=[],g=[],w=1,j=null,C=3,D=!1,H=!1,B=!1,W=!1,X=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function P(T){for(var S=d(g);S!==null;){if(S.callback===null)c(g);else if(S.startTime<=T)c(g),S.sortIndex=S.expirationTime,u(b,S);else break;S=d(g)}}function re(T){if(B=!1,P(T),!H)if(d(b)!==null)H=!0,le||(le=!0,Me());else{var S=d(g);S!==null&&xe(re,S.startTime-T)}}var le=!1,te=-1,K=5,ve=-1;function ne(){return W?!0:!(l.unstable_now()-ve<K)}function fe(){if(W=!1,le){var T=l.unstable_now();ve=T;var S=!0;try{e:{H=!1,B&&(B=!1,F(te),te=-1),D=!0;var R=C;try{a:{for(P(T),j=d(b);j!==null&&!(j.expirationTime>T&&ne());){var Z=j.callback;if(typeof Z=="function"){j.callback=null,C=j.priorityLevel;var $=Z(j.expirationTime<=T);if(T=l.unstable_now(),typeof $=="function"){j.callback=$,P(T),S=!0;break a}j===d(b)&&c(b),P(T)}else c(b);j=d(b)}if(j!==null)S=!0;else{var x=d(g);x!==null&&xe(re,x.startTime-T),S=!1}}break e}finally{j=null,C=R,D=!1}S=void 0}}finally{S?Me():le=!1}}}var Me;if(typeof ee=="function")Me=function(){ee(fe)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,pe=Ne.port2;Ne.port1.onmessage=fe,Me=function(){pe.postMessage(null)}}else Me=function(){X(fe,0)};function xe(T,S){te=X(function(){T(l.unstable_now())},S)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return C},l.unstable_next=function(T){switch(C){case 1:case 2:case 3:var S=3;break;default:S=C}var R=C;C=S;try{return T()}finally{C=R}},l.unstable_requestPaint=function(){W=!0},l.unstable_runWithPriority=function(T,S){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=C;C=T;try{return S()}finally{C=R}},l.unstable_scheduleCallback=function(T,S,R){var Z=l.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Z+R:Z):R=Z,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=R+$,T={id:w++,callback:S,priorityLevel:T,startTime:R,expirationTime:$,sortIndex:-1},R>Z?(T.sortIndex=R,u(g,T),d(b)===null&&T===d(g)&&(B?(F(te),te=-1):B=!0,xe(re,R-Z))):(T.sortIndex=$,u(b,T),H||D||(H=!0,le||(le=!0,Me()))),T},l.unstable_shouldYield=ne,l.unstable_wrapCallback=function(T){var S=C;return function(){var R=C;C=S;try{return T.apply(this,arguments)}finally{C=R}}}})(Nc)),Nc}var Bm;function Og(){return Bm||(Bm=1,Sc.exports=Ug()),Sc.exports}var qc={exports:{}},ga={};var Ym;function _g(){if(Ym)return ga;Ym=1;var l=Rc();function u(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function f(b,g,w){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:j==null?null:""+j,children:b,containerInfo:g,implementation:w}}var v=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ga.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ga.createPortal=function(b,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return f(b,g,null,w)},ga.flushSync=function(b){var g=v.T,w=c.p;try{if(v.T=null,c.p=2,b)return b()}finally{v.T=g,c.p=w,c.d.f()}},ga.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(b,g))},ga.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},ga.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var w=g.as,j=h(w,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?c.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:C,fetchPriority:D}):w==="script"&&c.d.X(b,{crossOrigin:j,integrity:C,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ga.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=h(g.as,g.crossOrigin);c.d.M(b,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(b)},ga.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,j=h(w,g.crossOrigin);c.d.L(b,w,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ga.preloadModule=function(b,g){if(typeof b=="string")if(g){var w=h(g.as,g.crossOrigin);c.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(b)},ga.requestFormReset=function(b){c.d.r(b)},ga.unstable_batchedUpdates=function(b,g){return b(g)},ga.useFormState=function(b,g,w){return v.H.useFormState(b,g,w)},ga.useFormStatus=function(){return v.H.useHostTransitionStatus()},ga.version="19.2.5",ga}var Vm;function Gg(){if(Vm)return qc.exports;Vm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),qc.exports=_g(),qc.exports}var Qm;function Hg(){if(Qm)return ws;Qm=1;var l=Og(),u=Rc(),d=Gg();function c(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(c(188))}function g(e){var a=e.alternate;if(!a){if(a=f(e),a===null)throw Error(c(188));return a!==e?null:e}for(var n=e,t=a;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(t=s.return,t!==null){n=t;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return b(s),e;if(i===t)return b(s),a;i=i.sibling}throw Error(c(188))}if(n.return!==t.return)n=s,t=i;else{for(var r=!1,p=s.child;p;){if(p===n){r=!0,n=s,t=i;break}if(p===t){r=!0,t=s,n=i;break}p=p.sibling}if(!r){for(p=i.child;p;){if(p===n){r=!0,n=i,t=s;break}if(p===t){r=!0,t=i,n=s;break}p=p.sibling}if(!r)throw Error(c(189))}}if(n.alternate!==t)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:a}function w(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=w(e),a!==null)return a;e=e.sibling}return null}var j=Object.assign,C=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=fe&&e[fe]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case X:return"Profiler";case W:return"StrictMode";case re:return"Suspense";case le:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ee:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case P:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return a=e.displayName||null,a!==null?a:pe(e.type)||"Memo";case K:a=e._payload,e=e._init;try{return pe(e(a))}catch{}}return null}var xe=Array.isArray,T=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},Z=[],$=-1;function x(e){return{current:e}}function O(e){0>$||(e.current=Z[$],Z[$]=null,$--)}function Q(e,a){$++,Z[$]=e.current,e.current=a}var I=x(null),de=x(null),he=x(null),qe=x(null);function $e(e,a){switch(Q(he,a),Q(de,e),Q(I,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?sm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=sm(a),e=im(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(I),Q(I,e)}function V(){O(I),O(de),O(he)}function ze(e){e.memoizedState!==null&&Q(qe,e);var a=I.current,n=im(a,e.type);a!==n&&(Q(de,e),Q(I,n))}function Le(e){de.current===e&&(O(I),O(de)),qe.current===e&&(O(qe),gs._currentValue=R)}var Ze,Ee;function Xe(e){if(Ze===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Ze=a&&a[1]||"",Ee=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+Ee}var xa=!1;function Ka(e,a){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(M){var A=M}Reflect.construct(e,[],G)}else{try{G.call()}catch(M){A=M}e.call(G.prototype)}}else{try{throw Error()}catch(M){A=M}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(M){if(M&&A&&typeof M.stack=="string")return[M.stack,A.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=t.DetermineComponentFrameRoot(),r=i[0],p=i[1];if(r&&p){var y=r.split(`
`),E=p.split(`
`);for(s=t=0;t<y.length&&!y[t].includes("DetermineComponentFrameRoot");)t++;for(;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;if(t===y.length||s===E.length)for(t=y.length-1,s=E.length-1;1<=t&&0<=s&&y[t]!==E[s];)s--;for(;1<=t&&0<=s;t--,s--)if(y[t]!==E[s]){if(t!==1||s!==1)do if(t--,s--,0>s||y[t]!==E[s]){var U=`
`+y[t].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=t&&0<=s);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Xe(n):""}function Ja(e,a){switch(e.tag){case 26:case 27:case 5:return Xe(e.type);case 16:return Xe("Lazy");case 13:return e.child!==a&&a!==null?Xe("Suspense Fallback"):Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return Ka(e.type,!1);case 11:return Ka(e.type.render,!1);case 1:return Ka(e.type,!0);case 31:return Xe("Activity");default:return""}}function Ct(e){try{var a="",n=null;do a+=Ja(e,n),n=e,e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var ya=Object.prototype.hasOwnProperty,lt=l.unstable_scheduleCallback,No=l.unstable_cancelCallback,Ts=l.unstable_shouldYield,en=l.unstable_requestPaint,ma=l.unstable_now,As=l.unstable_getCurrentPriorityLevel,Cs=l.unstable_ImmediatePriority,Ms=l.unstable_UserBlockingPriority,Mt=l.unstable_NormalPriority,dr=l.unstable_LowPriority,Ds=l.unstable_IdlePriority,Ls=l.log,Us=l.unstable_setDisableYieldValue,Mn=null,fa=null;function an(e){if(typeof Ls=="function"&&Us(e),fa&&typeof fa.setStrictMode=="function")try{fa.setStrictMode(Mn,e)}catch{}}var ue=Math.clz32?Math.clz32:Os,$a=Math.log,ur=Math.LN2;function Os(e){return e>>>=0,e===0?32:31-($a(e)/ur|0)|0}var _a=256,Dn=262144,Ln=4194304;function ba(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,a,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var p=t&134217727;return p!==0?(t=p&~i,t!==0?s=ba(t):(r&=p,r!==0?s=ba(r):n||(n=p&~e,n!==0&&(s=ba(n))))):(p=t&~i,p!==0?s=ba(p):r!==0?s=ba(r):n||(n=t&~e,n!==0&&(s=ba(n)))),s===0?0:a!==0&&a!==s&&(a&i)===0&&(i=s&-s,n=a&-a,i>=n||i===32&&(n&4194048)!==0)?a:s}function Un(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function _s(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gs(){var e=Ln;return Ln<<=1,(Ln&62914560)===0&&(Ln=4194304),e}function qo(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function dn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pr(e,a,n,t,s,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,y=e.expirationTimes,E=e.hiddenUpdates;for(n=r&~n;0<n;){var U=31-ue(n),G=1<<U;p[U]=0,y[U]=-1;var A=E[U];if(A!==null)for(E[U]=null,U=0;U<A.length;U++){var M=A[U];M!==null&&(M.lane&=-536870913)}n&=~G}t!==0&&Eo(e,t,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~a))}function Eo(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var t=31-ue(a);e.entangledLanes|=a,e.entanglements[t]=e.entanglements[t]|1073741824|n&261930}function Hs(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var t=31-ue(n),s=1<<t;s&a|e[t]&a&&(e[t]|=a),n&=~s}}function Rs(e,a){var n=a&-a;return n=(n&42)!==0?1:Dt(n),(n&(e.suspendedLanes|a))!==0?0:n}function Dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function To(){var e=S.p;return e!==0?e:(e=window.event,e===void 0?32:Tm(e.type))}function dt(e,a){var n=S.p;try{return S.p=e,a()}finally{S.p=n}}var nn=Math.random().toString(36).slice(2),_e="__reactFiber$"+nn,ha="__reactProps$"+nn,On="__reactContainer$"+nn,Ao="__reactEvents$"+nn,mr="__reactListeners$"+nn,fr="__reactHandles$"+nn,Bs="__reactResources$"+nn,ut="__reactMarker$"+nn;function Ut(e){delete e[_e],delete e[ha],delete e[Ao],delete e[mr],delete e[fr]}function _n(e){var a=e[_e];if(a)return a;for(var n=e.parentNode;n;){if(a=n[On]||n[_e]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=mm(e);e!==null;){if(n=e[_e])return n;e=mm(e)}return a}e=n,n=e.parentNode}return null}function k(e){if(e=e[_e]||e[On]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Y(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(c(33))}function J(e){var a=e[Bs];return a||(a=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function se(e){e[ut]=!0}var Te=new Set,ra={};function wa(e,a){ka(e,a),ka(e+"Capture",a)}function ka(e,a){for(ra[e]=a,e=0;e<a.length;e++)Te.add(a[e])}var Ys=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},Mo={};function jf(e){return ya.call(Mo,e)?!0:ya.call(Co,e)?!1:Ys.test(e)?Mo[e]=!0:(Co[e]=!0,!1)}function Vs(e,a,n){if(jf(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function Qs(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function un(e,a,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+t)}}function Ga(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function zf(e,a,n){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,i=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function hr(e){if(!e._valueTracker){var a=Wc(e)?"checked":"value";e._valueTracker=zf(e,a,""+e[a])}}function Fc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),t="";return e&&(t=Wc(e)?e.checked?"true":"false":e.value),e=t,e!==n?(a.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sf=/[\n"\\]/g;function Ha(e){return e.replace(Sf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function gr(e,a,n,t,s,i,r,p){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),a!=null?r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ga(a)):e.value!==""+Ga(a)&&(e.value=""+Ga(a)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),a!=null?br(e,r,Ga(a)):n!=null?br(e,r,Ga(n)):t!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Ga(p):e.removeAttribute("name")}function Pc(e,a,n,t,s,i,r,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){hr(e);return}n=n!=null?""+Ga(n):"",a=a!=null?""+Ga(a):n,p||a===e.value||(e.value=a),e.defaultValue=a}t=t??s,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=p?e.checked:!!t,e.defaultChecked=!!t,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),hr(e)}function br(e,a,n){a==="number"&&Xs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ot(e,a,n,t){if(e=e.options,a){a={};for(var s=0;s<n.length;s++)a["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=a.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&t&&(e[n].defaultSelected=!0)}else{for(n=""+Ga(n),a=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,t&&(e[s].defaultSelected=!0);return}a!==null||e[s].disabled||(a=e[s])}a!==null&&(a.selected=!0)}}function ed(e,a,n){if(a!=null&&(a=""+Ga(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Ga(n):""}function ad(e,a,n,t){if(a==null){if(t!=null){if(n!=null)throw Error(c(92));if(xe(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),a=n}n=Ga(a),e.defaultValue=n,t=e.textContent,t===n&&t!==""&&t!==null&&(e.value=t),hr(e)}function _t(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Nf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(e,a,n){var t=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?t?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":t?e.setProperty(a,n):typeof n!="number"||n===0||Nf.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function td(e,a,n){if(a!=null&&typeof a!="object")throw Error(c(62));if(e=e.style,n!=null){for(var t in n)!n.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var s in a)t=a[s],a.hasOwnProperty(s)&&n[s]!==t&&nd(e,s,t)}else for(var i in a)a.hasOwnProperty(i)&&nd(e,i,a[i])}function vr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ef=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(e){return Ef.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pn(){}var xr=null;function yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gt=null,Ht=null;function od(e){var a=k(e);if(a&&(e=a.stateNode)){var n=e[ha]||null;e:switch(e=a.stateNode,a.type){case"input":if(gr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ha(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var t=n[a];if(t!==e&&t.form===e.form){var s=t[ha]||null;if(!s)throw Error(c(90));gr(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(a=0;a<n.length;a++)t=n[a],t.form===e.form&&Fc(t)}break e;case"textarea":ed(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&Ot(e,!!n.multiple,a,!1)}}}var wr=!1;function sd(e,a,n){if(wr)return e(a,n);wr=!0;try{var t=e(a);return t}finally{if(wr=!1,(Gt!==null||Ht!==null)&&(Di(),Gt&&(a=Gt,e=Ht,Ht=Gt=null,od(a),e)))for(a=0;a<e.length;a++)od(e[a])}}function Do(e,a){var n=e.stateNode;if(n===null)return null;var t=n[ha]||null;if(t===null)return null;n=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,a,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kr=!1;if(mn)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){kr=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{kr=!1}var Gn=null,jr=null,Zs=null;function id(){if(Zs)return Zs;var e,a=jr,n=a.length,t,s="value"in Gn?Gn.value:Gn.textContent,i=s.length;for(e=0;e<n&&a[e]===s[e];e++);var r=n-e;for(t=1;t<=r&&a[n-t]===s[i-t];t++);return Zs=s.slice(e,1<t?1-t:void 0)}function Ks(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Js(){return!0}function rd(){return!1}function ja(e){function a(n,t,s,i,r){this._reactName=n,this._targetInst=s,this.type=t,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Js:rd,this.isPropagationStopped=rd,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),a}var pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=ja(pt),Uo=j({},pt,{view:0,detail:0}),Tf=ja(Uo),zr,Sr,Oo,Ws=j({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(zr=e.screenX-Oo.screenX,Sr=e.screenY-Oo.screenY):Sr=zr=0,Oo=e),zr)},movementY:function(e){return"movementY"in e?e.movementY:Sr}}),ld=ja(Ws),Af=j({},Ws,{dataTransfer:0}),Cf=ja(Af),Mf=j({},Uo,{relatedTarget:0}),Nr=ja(Mf),Df=j({},pt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lf=ja(Df),Uf=j({},pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=ja(Uf),_f=j({},pt,{data:0}),cd=ja(_f),Gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bf(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Rf[e])?!!a[e]:!1}function qr(){return Bf}var Yf=j({},Uo,{key:function(e){if(e.key){var a=Gf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qr,charCode:function(e){return e.type==="keypress"?Ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vf=ja(Yf),Qf=j({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=ja(Qf),Xf=j({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qr}),If=ja(Xf),Zf=j({},pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=ja(Zf),Jf=j({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$f=ja(Jf),Wf=j({},pt,{newState:0,oldState:0}),Ff=ja(Wf),Pf=[9,13,27,32],Er=mn&&"CompositionEvent"in window,_o=null;mn&&"documentMode"in document&&(_o=document.documentMode);var eh=mn&&"TextEvent"in window&&!_o,ud=mn&&(!Er||_o&&8<_o&&11>=_o),pd=" ",md=!1;function fd(e,a){switch(e){case"keyup":return Pf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function ah(e,a){switch(e){case"compositionend":return hd(a);case"keypress":return a.which!==32?null:(md=!0,pd);case"textInput":return e=a.data,e===pd&&md?null:e;default:return null}}function nh(e,a){if(Rt)return e==="compositionend"||!Er&&fd(e,a)?(e=id(),Zs=jr=Gn=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ud&&a.locale!=="ko"?null:a.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!th[e.type]:a==="textarea"}function bd(e,a,n,t){Gt?Ht?Ht.push(t):Ht=[t]:Gt=t,a=Ri(a,"onChange"),0<a.length&&(n=new $s("onChange","change",null,n,t),e.push({event:n,listeners:a}))}var Go=null,Ho=null;function oh(e){Pp(e,0)}function Fs(e){var a=Y(e);if(Fc(a))return e}function vd(e,a){if(e==="change")return a}var xd=!1;if(mn){var Tr;if(mn){var Ar="oninput"in document;if(!Ar){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),Ar=typeof yd.oninput=="function"}Tr=Ar}else Tr=!1;xd=Tr&&(!document.documentMode||9<document.documentMode)}function wd(){Go&&(Go.detachEvent("onpropertychange",kd),Ho=Go=null)}function kd(e){if(e.propertyName==="value"&&Fs(Ho)){var a=[];bd(a,Ho,e,yr(e)),sd(oh,a)}}function sh(e,a,n){e==="focusin"?(wd(),Go=a,Ho=n,Go.attachEvent("onpropertychange",kd)):e==="focusout"&&wd()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fs(Ho)}function rh(e,a){if(e==="click")return Fs(a)}function lh(e,a){if(e==="input"||e==="change")return Fs(a)}function ch(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Aa=typeof Object.is=="function"?Object.is:ch;function Ro(e,a){if(Aa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),t=Object.keys(a);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var s=n[t];if(!ya.call(a,s)||!Aa(e[s],a[s]))return!1}return!0}function jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,a){var n=jd(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=a&&t>=a)return{node:n,offset:a-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jd(n)}}function Sd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Sd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Nd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Xs(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=Xs(e.document)}return a}function Cr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var dh=mn&&"documentMode"in document&&11>=document.documentMode,Bt=null,Mr=null,Bo=null,Dr=!1;function qd(e,a,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dr||Bt==null||Bt!==Xs(t)||(t=Bt,"selectionStart"in t&&Cr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Bo&&Ro(Bo,t)||(Bo=t,t=Ri(Mr,"onSelect"),0<t.length&&(a=new $s("onSelect","select",null,a,n),e.push({event:a,listeners:t}),a.target=Bt)))}function mt(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Yt={animationend:mt("Animation","AnimationEnd"),animationiteration:mt("Animation","AnimationIteration"),animationstart:mt("Animation","AnimationStart"),transitionrun:mt("Transition","TransitionRun"),transitionstart:mt("Transition","TransitionStart"),transitioncancel:mt("Transition","TransitionCancel"),transitionend:mt("Transition","TransitionEnd")},Lr={},Ed={};mn&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function ft(e){if(Lr[e])return Lr[e];if(!Yt[e])return e;var a=Yt[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Ed)return Lr[e]=a[n];return e}var Td=ft("animationend"),Ad=ft("animationiteration"),Cd=ft("animationstart"),uh=ft("transitionrun"),ph=ft("transitionstart"),mh=ft("transitioncancel"),Md=ft("transitionend"),Dd=new Map,Ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ur.push("scrollEnd");function Wa(e,a){Dd.set(e,a),wa(a,[e])}var Ps=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ra=[],Vt=0,Or=0;function ei(){for(var e=Vt,a=Or=Vt=0;a<e;){var n=Ra[a];Ra[a++]=null;var t=Ra[a];Ra[a++]=null;var s=Ra[a];Ra[a++]=null;var i=Ra[a];if(Ra[a++]=null,t!==null&&s!==null){var r=t.pending;r===null?s.next=s:(s.next=r.next,r.next=s),t.pending=s}i!==0&&Ld(n,s,i)}}function ai(e,a,n,t){Ra[Vt++]=e,Ra[Vt++]=a,Ra[Vt++]=n,Ra[Vt++]=t,Or|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function _r(e,a,n,t){return ai(e,a,n,t),ni(e)}function ht(e,a){return ai(e,null,null,a),ni(e)}function Ld(e,a,n){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n);for(var s=!1,i=e.return;i!==null;)i.childLanes|=n,t=i.alternate,t!==null&&(t.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&a!==null&&(s=31-ue(n),e=i.hiddenUpdates,t=e[s],t===null?e[s]=[a]:t.push(a),a.lane=n|536870912),i):null}function ni(e){if(50<cs)throw cs=0,Il=null,Error(c(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Qt={};function fh(e,a,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ca(e,a,n,t){return new fh(e,a,n,t)}function Gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,a){var n=e.alternate;return n===null?(n=Ca(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ud(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ti(e,a,n,t,s,i){var r=0;if(t=e,typeof e=="function")Gr(e)&&(r=1);else if(typeof e=="string")r=xg(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=Ca(31,n,a,s),e.elementType=ve,e.lanes=i,e;case B:return gt(n.children,s,i,a);case W:r=8,s|=24;break;case X:return e=Ca(12,n,a,s|2),e.elementType=X,e.lanes=i,e;case re:return e=Ca(13,n,a,s),e.elementType=re,e.lanes=i,e;case le:return e=Ca(19,n,a,s),e.elementType=le,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:r=10;break e;case F:r=9;break e;case P:r=11;break e;case te:r=14;break e;case K:r=16,t=null;break e}r=29,n=Error(c(130,e===null?"null":typeof e,"")),t=null}return a=Ca(r,n,a,s),a.elementType=e,a.type=t,a.lanes=i,a}function gt(e,a,n,t){return e=Ca(7,e,t,a),e.lanes=n,e}function Hr(e,a,n){return e=Ca(6,e,null,a),e.lanes=n,e}function Od(e){var a=Ca(18,null,null,0);return a.stateNode=e,a}function Rr(e,a,n){return a=Ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var _d=new WeakMap;function Ba(e,a){if(typeof e=="object"&&e!==null){var n=_d.get(e);return n!==void 0?n:(a={value:e,source:a,stack:Ct(a)},_d.set(e,a),a)}return{value:e,source:a,stack:Ct(a)}}var Xt=[],It=0,oi=null,Yo=0,Ya=[],Va=0,Hn=null,tn=1,on="";function hn(e,a){Xt[It++]=Yo,Xt[It++]=oi,oi=e,Yo=a}function Gd(e,a,n){Ya[Va++]=tn,Ya[Va++]=on,Ya[Va++]=Hn,Hn=e;var t=tn;e=on;var s=32-ue(t)-1;t&=~(1<<s),n+=1;var i=32-ue(a)+s;if(30<i){var r=s-s%5;i=(t&(1<<r)-1).toString(32),t>>=r,s-=r,tn=1<<32-ue(a)+s|n<<s|t,on=i+e}else tn=1<<i|n<<s|t,on=e}function Br(e){e.return!==null&&(hn(e,1),Gd(e,1,0))}function Yr(e){for(;e===oi;)oi=Xt[--It],Xt[It]=null,Yo=Xt[--It],Xt[It]=null;for(;e===Hn;)Hn=Ya[--Va],Ya[Va]=null,on=Ya[--Va],Ya[Va]=null,tn=Ya[--Va],Ya[Va]=null}function Hd(e,a){Ya[Va++]=tn,Ya[Va++]=on,Ya[Va++]=Hn,tn=a.id,on=a.overflow,Hn=e}var la=null,Ve=null,Se=!1,Rn=null,Qa=!1,Vr=Error(c(519));function Bn(e){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Ba(a,e)),Vr}function Rd(e){var a=e.stateNode,n=e.type,t=e.memoizedProps;switch(a[_e]=e,a[ha]=t,n){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(n=0;n<us.length;n++)we(us[n],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":we("invalid",a),Pc(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":we("invalid",a);break;case"textarea":we("invalid",a),ad(a,t.value,t.defaultValue,t.children)}n=t.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||t.suppressHydrationWarning===!0||tm(a.textContent,n)?(t.popover!=null&&(we("beforetoggle",a),we("toggle",a)),t.onScroll!=null&&we("scroll",a),t.onScrollEnd!=null&&we("scrollend",a),t.onClick!=null&&(a.onclick=pn),a=!0):a=!1,a||Bn(e,!0)}function Bd(e){for(la=e.return;la;)switch(la.tag){case 5:case 31:case 13:Qa=!1;return;case 27:case 3:Qa=!0;return;default:la=la.return}}function Zt(e){if(e!==la)return!1;if(!Se)return Bd(e),Se=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||rc(e.type,e.memoizedProps)),n=!n),n&&Ve&&Bn(e),Bd(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ve=pm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ve=pm(e)}else a===27?(a=Ve,at(e.type)?(e=pc,pc=null,Ve=e):Ve=a):Ve=la?Ia(e.stateNode.nextSibling):null;return!0}function bt(){Ve=la=null,Se=!1}function Qr(){var e=Rn;return e!==null&&(qa===null?qa=e:qa.push.apply(qa,e),Rn=null),e}function Vo(e){Rn===null?Rn=[e]:Rn.push(e)}var Xr=x(null),vt=null,gn=null;function Yn(e,a,n){Q(Xr,a._currentValue),a._currentValue=n}function bn(e){e._currentValue=Xr.current,O(Xr)}function Ir(e,a,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===n)break;e=e.return}}function Zr(e,a,n,t){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var r=s.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=s;for(var y=0;y<a.length;y++)if(p.context===a[y]){i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),Ir(i.return,n,e),t||(r=null);break e}i=p.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(c(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Ir(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Kt(e,a,n,t){e=null;for(var s=a,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var p=s.type;Aa(s.pendingProps.value,r.value)||(e!==null?e.push(p):e=[p])}}else if(s===qe.current){if(r=s.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(gs):e=[gs])}s=s.return}e!==null&&Zr(a,e,n,t),a.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!Aa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xt(e){vt=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return Yd(vt,e)}function ii(e,a){return vt===null&&xt(e),Yd(e,a)}function Yd(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(c(308));gn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else gn=gn.next=a;return n}var hh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,t){e.push(t)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},gh=l.unstable_scheduleCallback,bh=l.unstable_NormalPriority,ea={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kr(){return{controller:new hh,data:new Map,refCount:0}}function Qo(e){e.refCount--,e.refCount===0&&gh(bh,function(){e.controller.abort()})}var Xo=null,Jr=0,Jt=0,$t=null;function vh(e,a){if(Xo===null){var n=Xo=[];Jr=0,Jt=Fl(),$t={status:"pending",value:void 0,then:function(t){n.push(t)}}}return Jr++,a.then(Vd,Vd),a}function Vd(){if(--Jr===0&&Xo!==null){$t!==null&&($t.status="fulfilled");var e=Xo;Xo=null,Jt=0,$t=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function xh(e,a){var n=[],t={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){t.status="fulfilled",t.value=a;for(var s=0;s<n.length;s++)(0,n[s])(a)},function(s){for(t.status="rejected",t.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),t}var Qd=T.S;T.S=function(e,a){qp=ma(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&vh(e,a),Qd!==null&&Qd(e,a)};var yt=x(null);function $r(){var e=yt.current;return e!==null?e:Ye.pooledCache}function ri(e,a){a===null?Q(yt,yt.current):Q(yt,a.pool)}function Xd(){var e=$r();return e===null?null:{parent:ea._currentValue,pool:e}}var Wt=Error(c(460)),Wr=Error(c(474)),li=Error(c(542)),ci={then:function(){}};function Id(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zd(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(pn,pn),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Jd(e),e;default:if(typeof a.status=="string")a.then(pn,pn);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=a,e.status="pending",e.then(function(t){if(a.status==="pending"){var s=a;s.status="fulfilled",s.value=t}},function(t){if(a.status==="pending"){var s=a;s.status="rejected",s.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Jd(e),e}throw kt=a,Wt}}function wt(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(kt=n,Wt):n}}var kt=null;function Kd(){if(kt===null)throw Error(c(459));var e=kt;return kt=null,e}function Jd(e){if(e===Wt||e===li)throw Error(c(483))}var Ft=null,Io=0;function di(e){var a=Io;return Io+=1,Ft===null&&(Ft=[]),Zd(Ft,e,a)}function Zo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ui(e,a){throw a.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function $d(e){function a(N,z){if(e){var q=N.deletions;q===null?(N.deletions=[z],N.flags|=16):q.push(z)}}function n(N,z){if(!e)return null;for(;z!==null;)a(N,z),z=z.sibling;return null}function t(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function s(N,z){return N=fn(N,z),N.index=0,N.sibling=null,N}function i(N,z,q){return N.index=q,e?(q=N.alternate,q!==null?(q=q.index,q<z?(N.flags|=67108866,z):q):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function r(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function p(N,z,q,_){return z===null||z.tag!==6?(z=Hr(q,N.mode,_),z.return=N,z):(z=s(z,q),z.return=N,z)}function y(N,z,q,_){var ie=q.type;return ie===B?U(N,z,q.props.children,_,q.key):z!==null&&(z.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===K&&wt(ie)===z.type)?(z=s(z,q.props),Zo(z,q),z.return=N,z):(z=ti(q.type,q.key,q.props,null,N.mode,_),Zo(z,q),z.return=N,z)}function E(N,z,q,_){return z===null||z.tag!==4||z.stateNode.containerInfo!==q.containerInfo||z.stateNode.implementation!==q.implementation?(z=Rr(q,N.mode,_),z.return=N,z):(z=s(z,q.children||[]),z.return=N,z)}function U(N,z,q,_,ie){return z===null||z.tag!==7?(z=gt(q,N.mode,_,ie),z.return=N,z):(z=s(z,q),z.return=N,z)}function G(N,z,q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Hr(""+z,N.mode,q),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return q=ti(z.type,z.key,z.props,null,N.mode,q),Zo(q,z),q.return=N,q;case H:return z=Rr(z,N.mode,q),z.return=N,z;case K:return z=wt(z),G(N,z,q)}if(xe(z)||Me(z))return z=gt(z,N.mode,q,null),z.return=N,z;if(typeof z.then=="function")return G(N,di(z),q);if(z.$$typeof===ee)return G(N,ii(N,z),q);ui(N,z)}return null}function A(N,z,q,_){var ie=z!==null?z.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ie!==null?null:p(N,z,""+q,_);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case D:return q.key===ie?y(N,z,q,_):null;case H:return q.key===ie?E(N,z,q,_):null;case K:return q=wt(q),A(N,z,q,_)}if(xe(q)||Me(q))return ie!==null?null:U(N,z,q,_,null);if(typeof q.then=="function")return A(N,z,di(q),_);if(q.$$typeof===ee)return A(N,z,ii(N,q),_);ui(N,q)}return null}function M(N,z,q,_,ie){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return N=N.get(q)||null,p(z,N,""+_,ie);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case D:return N=N.get(_.key===null?q:_.key)||null,y(z,N,_,ie);case H:return N=N.get(_.key===null?q:_.key)||null,E(z,N,_,ie);case K:return _=wt(_),M(N,z,q,_,ie)}if(xe(_)||Me(_))return N=N.get(q)||null,U(z,N,_,ie,null);if(typeof _.then=="function")return M(N,z,q,di(_),ie);if(_.$$typeof===ee)return M(N,z,q,ii(z,_),ie);ui(z,_)}return null}function ae(N,z,q,_){for(var ie=null,Ae=null,oe=z,be=z=0,je=null;oe!==null&&be<q.length;be++){oe.index>be?(je=oe,oe=null):je=oe.sibling;var Ce=A(N,oe,q[be],_);if(Ce===null){oe===null&&(oe=je);break}e&&oe&&Ce.alternate===null&&a(N,oe),z=i(Ce,z,be),Ae===null?ie=Ce:Ae.sibling=Ce,Ae=Ce,oe=je}if(be===q.length)return n(N,oe),Se&&hn(N,be),ie;if(oe===null){for(;be<q.length;be++)oe=G(N,q[be],_),oe!==null&&(z=i(oe,z,be),Ae===null?ie=oe:Ae.sibling=oe,Ae=oe);return Se&&hn(N,be),ie}for(oe=t(oe);be<q.length;be++)je=M(oe,N,be,q[be],_),je!==null&&(e&&je.alternate!==null&&oe.delete(je.key===null?be:je.key),z=i(je,z,be),Ae===null?ie=je:Ae.sibling=je,Ae=je);return e&&oe.forEach(function(it){return a(N,it)}),Se&&hn(N,be),ie}function ce(N,z,q,_){if(q==null)throw Error(c(151));for(var ie=null,Ae=null,oe=z,be=z=0,je=null,Ce=q.next();oe!==null&&!Ce.done;be++,Ce=q.next()){oe.index>be?(je=oe,oe=null):je=oe.sibling;var it=A(N,oe,Ce.value,_);if(it===null){oe===null&&(oe=je);break}e&&oe&&it.alternate===null&&a(N,oe),z=i(it,z,be),Ae===null?ie=it:Ae.sibling=it,Ae=it,oe=je}if(Ce.done)return n(N,oe),Se&&hn(N,be),ie;if(oe===null){for(;!Ce.done;be++,Ce=q.next())Ce=G(N,Ce.value,_),Ce!==null&&(z=i(Ce,z,be),Ae===null?ie=Ce:Ae.sibling=Ce,Ae=Ce);return Se&&hn(N,be),ie}for(oe=t(oe);!Ce.done;be++,Ce=q.next())Ce=M(oe,N,be,Ce.value,_),Ce!==null&&(e&&Ce.alternate!==null&&oe.delete(Ce.key===null?be:Ce.key),z=i(Ce,z,be),Ae===null?ie=Ce:Ae.sibling=Ce,Ae=Ce);return e&&oe.forEach(function(Ag){return a(N,Ag)}),Se&&hn(N,be),ie}function Re(N,z,q,_){if(typeof q=="object"&&q!==null&&q.type===B&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case D:e:{for(var ie=q.key;z!==null;){if(z.key===ie){if(ie=q.type,ie===B){if(z.tag===7){n(N,z.sibling),_=s(z,q.props.children),_.return=N,N=_;break e}}else if(z.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===K&&wt(ie)===z.type){n(N,z.sibling),_=s(z,q.props),Zo(_,q),_.return=N,N=_;break e}n(N,z);break}else a(N,z);z=z.sibling}q.type===B?(_=gt(q.props.children,N.mode,_,q.key),_.return=N,N=_):(_=ti(q.type,q.key,q.props,null,N.mode,_),Zo(_,q),_.return=N,N=_)}return r(N);case H:e:{for(ie=q.key;z!==null;){if(z.key===ie)if(z.tag===4&&z.stateNode.containerInfo===q.containerInfo&&z.stateNode.implementation===q.implementation){n(N,z.sibling),_=s(z,q.children||[]),_.return=N,N=_;break e}else{n(N,z);break}else a(N,z);z=z.sibling}_=Rr(q,N.mode,_),_.return=N,N=_}return r(N);case K:return q=wt(q),Re(N,z,q,_)}if(xe(q))return ae(N,z,q,_);if(Me(q)){if(ie=Me(q),typeof ie!="function")throw Error(c(150));return q=ie.call(q),ce(N,z,q,_)}if(typeof q.then=="function")return Re(N,z,di(q),_);if(q.$$typeof===ee)return Re(N,z,ii(N,q),_);ui(N,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,z!==null&&z.tag===6?(n(N,z.sibling),_=s(z,q),_.return=N,N=_):(n(N,z),_=Hr(q,N.mode,_),_.return=N,N=_),r(N)):n(N,z)}return function(N,z,q,_){try{Io=0;var ie=Re(N,z,q,_);return Ft=null,ie}catch(oe){if(oe===Wt||oe===li)throw oe;var Ae=Ca(29,oe,null,N.mode);return Ae.lanes=_,Ae.return=N,Ae}}}var jt=$d(!0),Wd=$d(!1),Vn=!1;function Fr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,a,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(De&2)!==0){var s=t.pending;return s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a,a=ni(e),Ld(e,null,n),a}return ai(e,t,a,n),ni(e)}function Ko(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,Hs(e,n)}}function el(e,a){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?s=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?s=i=a:i=i.next=a}else s=i=a;n={baseState:t.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:t.shared,callbacks:t.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var al=!1;function Jo(){if(al){var e=$t;if(e!==null)throw e}}function $o(e,a,n,t){al=!1;var s=e.updateQueue;Vn=!1;var i=s.firstBaseUpdate,r=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var y=p,E=y.next;y.next=null,r===null?i=E:r.next=E,r=y;var U=e.alternate;U!==null&&(U=U.updateQueue,p=U.lastBaseUpdate,p!==r&&(p===null?U.firstBaseUpdate=E:p.next=E,U.lastBaseUpdate=y))}if(i!==null){var G=s.baseState;r=0,U=E=y=null,p=i;do{var A=p.lane&-536870913,M=A!==p.lane;if(M?(ke&A)===A:(t&A)===A){A!==0&&A===Jt&&(al=!0),U!==null&&(U=U.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ae=e,ce=p;A=a;var Re=n;switch(ce.tag){case 1:if(ae=ce.payload,typeof ae=="function"){G=ae.call(Re,G,A);break e}G=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ce.payload,A=typeof ae=="function"?ae.call(Re,G,A):ae,A==null)break e;G=j({},G,A);break e;case 2:Vn=!0}}A=p.callback,A!==null&&(e.flags|=64,M&&(e.flags|=8192),M=s.callbacks,M===null?s.callbacks=[A]:M.push(A))}else M={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},U===null?(E=U=M,y=G):U=U.next=M,r|=A;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;M=p,p=M.next,M.next=null,s.lastBaseUpdate=M,s.shared.pending=null}}while(!0);U===null&&(y=G),s.baseState=y,s.firstBaseUpdate=E,s.lastBaseUpdate=U,i===null&&(s.shared.lanes=0),$n|=r,e.lanes=r,e.memoizedState=G}}function Fd(e,a){if(typeof e!="function")throw Error(c(191,e));e.call(a)}function Pd(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Fd(n[e],a)}var Pt=x(null),pi=x(0);function eu(e,a){e=Nn,Q(pi,e),Q(Pt,a),Nn=e|a.baseLanes}function nl(){Q(pi,Nn),Q(Pt,Pt.current)}function tl(){Nn=pi.current,O(Pt),O(pi)}var Ma=x(null),Xa=null;function In(e){var a=e.alternate;Q(We,We.current&1),Q(Ma,e),Xa===null&&(a===null||Pt.current!==null||a.memoizedState!==null)&&(Xa=e)}function ol(e){Q(We,We.current),Q(Ma,e),Xa===null&&(Xa=e)}function au(e){e.tag===22?(Q(We,We.current),Q(Ma,e),Xa===null&&(Xa=e)):Zn()}function Zn(){Q(We,We.current),Q(Ma,Ma.current)}function Da(e){O(Ma),Xa===e&&(Xa=null),O(We)}var We=x(0);function mi(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||dc(n)||uc(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var vn=0,ge=null,Ge=null,aa=null,fi=!1,eo=!1,zt=!1,hi=0,Wo=0,ao=null,yh=0;function Ke(){throw Error(c(321))}function sl(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!Aa(e[n],a[n]))return!1;return!0}function il(e,a,n,t,s,i){return vn=i,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,T.H=e===null||e.memoizedState===null?Gu:wl,zt=!1,i=n(t,s),zt=!1,eo&&(i=tu(a,n,t,s)),nu(e),i}function nu(e){T.H=es;var a=Ge!==null&&Ge.next!==null;if(vn=0,aa=Ge=ge=null,fi=!1,Wo=0,ao=null,a)throw Error(c(300));e===null||na||(e=e.dependencies,e!==null&&si(e)&&(na=!0))}function tu(e,a,n,t){ge=e;var s=0;do{if(eo&&(ao=null),Wo=0,eo=!1,25<=s)throw Error(c(301));if(s+=1,aa=Ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Hu,i=a(n,t)}while(eo);return i}function wh(){var e=T.H,a=e.useState()[0];return a=typeof a.then=="function"?Fo(a):a,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ge.flags|=1024),a}function rl(){var e=hi!==0;return hi=0,e}function ll(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function cl(e){if(fi){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}fi=!1}vn=0,aa=Ge=ge=null,eo=!1,Wo=hi=0,ao=null}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return aa===null?ge.memoizedState=aa=e:aa=aa.next=e,aa}function Fe(){if(Ge===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var a=aa===null?ge.memoizedState:aa.next;if(a!==null)aa=a,Ge=e;else{if(e===null)throw ge.alternate===null?Error(c(467)):Error(c(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},aa===null?ge.memoizedState=aa=e:aa=aa.next=e}return aa}function gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var a=Wo;return Wo+=1,ao===null&&(ao=[]),e=Zd(ao,e,a),a=ge,(aa===null?a.memoizedState:aa.next)===null&&(a=a.alternate,T.H=a===null||a.memoizedState===null?Gu:wl),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fo(e);if(e.$$typeof===ee)return ca(e)}throw Error(c(438,String(e)))}function dl(e){var a=null,n=ge.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var t=ge.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(s){return s.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=gi(),ge.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),t=0;t<e;t++)n[t]=ne;return a.index++,n}function xn(e,a){return typeof a=="function"?a(e):a}function vi(e){var a=Fe();return ul(a,Ge,e)}function ul(e,a,n){var t=e.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=n;var s=e.baseQueue,i=t.pending;if(i!==null){if(s!==null){var r=s.next;s.next=i.next,i.next=r}a.baseQueue=s=i,t.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{a=s.next;var p=r=null,y=null,E=a,U=!1;do{var G=E.lane&-536870913;if(G!==E.lane?(ke&G)===G:(vn&G)===G){var A=E.revertLane;if(A===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),G===Jt&&(U=!0);else if((vn&A)===A){E=E.next,A===Jt&&(U=!0);continue}else G={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(p=y=G,r=i):y=y.next=G,ge.lanes|=A,$n|=A;G=E.action,zt&&n(i,G),i=E.hasEagerState?E.eagerState:n(i,G)}else A={lane:G,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},y===null?(p=y=A,r=i):y=y.next=A,ge.lanes|=G,$n|=G;E=E.next}while(E!==null&&E!==a);if(y===null?r=i:y.next=p,!Aa(i,e.memoizedState)&&(na=!0,U&&(n=$t,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=y,t.lastRenderedState=i}return s===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function pl(e){var a=Fe(),n=a.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var t=n.dispatch,s=n.pending,i=a.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do i=e(i,r.action),r=r.next;while(r!==s);Aa(i,a.memoizedState)||(na=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),n.lastRenderedState=i}return[i,t]}function ou(e,a,n){var t=ge,s=Fe(),i=Se;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=a();var r=!Aa((Ge||s).memoizedState,n);if(r&&(s.memoizedState=n,na=!0),s=s.queue,hl(ru.bind(null,t,s,e),[e]),s.getSnapshot!==a||r||aa!==null&&aa.memoizedState.tag&1){if(t.flags|=2048,no(9,{destroy:void 0},iu.bind(null,t,s,n,a),null),Ye===null)throw Error(c(349));i||(vn&127)!==0||su(t,a,n)}return n}function su(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=ge.updateQueue,a===null?(a=gi(),ge.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function iu(e,a,n,t){a.value=n,a.getSnapshot=t,lu(a)&&cu(e)}function ru(e,a,n){return n(function(){lu(a)&&cu(e)})}function lu(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!Aa(e,n)}catch{return!0}}function cu(e){var a=ht(e,2);a!==null&&Ea(a,e,2)}function ml(e){var a=va();if(typeof e=="function"){var n=e;if(e=n(),zt){an(!0);try{n()}finally{an(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},a}function du(e,a,n,t){return e.baseState=n,ul(e,Ge,typeof t=="function"?t:xn)}function kh(e,a,n,t,s){if(wi(e))throw Error(c(485));if(e=a.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};T.T!==null?n(!0):i.isTransition=!1,t(i),n=a.pending,n===null?(i.next=a.pending=i,uu(a,i)):(i.next=n.next,a.pending=n.next=i)}}function uu(e,a){var n=a.action,t=a.payload,s=e.state;if(a.isTransition){var i=T.T,r={};T.T=r;try{var p=n(s,t),y=T.S;y!==null&&y(r,p),pu(e,a,p)}catch(E){fl(e,a,E)}finally{i!==null&&r.types!==null&&(i.types=r.types),T.T=i}}else try{i=n(s,t),pu(e,a,i)}catch(E){fl(e,a,E)}}function pu(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(t){mu(e,a,t)},function(t){return fl(e,a,t)}):mu(e,a,n)}function mu(e,a,n){a.status="fulfilled",a.value=n,fu(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,uu(e,n)))}function fl(e,a,n){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=n,fu(a),a=a.next;while(a!==t)}e.action=null}function fu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function hu(e,a){return a}function gu(e,a){if(Se){var n=Ye.formState;if(n!==null){e:{var t=ge;if(Se){if(Ve){a:{for(var s=Ve,i=Qa;s.nodeType!==8;){if(!i){s=null;break a}if(s=Ia(s.nextSibling),s===null){s=null;break a}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Ve=Ia(s.nextSibling),t=s.data==="F!";break e}}Bn(t)}t=!1}t&&(a=n[0])}}return n=va(),n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:a},n.queue=t,n=Uu.bind(null,ge,t),t.dispatch=n,t=ml(!1),i=yl.bind(null,ge,!1,t.queue),t=va(),s={state:a,dispatch:null,action:e,pending:null},t.queue=s,n=kh.bind(null,ge,s,i,n),s.dispatch=n,t.memoizedState=e,[a,n,!1]}function bu(e){var a=Fe();return vu(a,Ge,e)}function vu(e,a,n){if(a=ul(e,a,hu)[0],e=vi(xn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=Fo(a)}catch(r){throw r===Wt?li:r}else t=a;a=Fe();var s=a.queue,i=s.dispatch;return n!==a.memoizedState&&(ge.flags|=2048,no(9,{destroy:void 0},jh.bind(null,s,n),null)),[t,i,e]}function jh(e,a){e.action=a}function xu(e){var a=Fe(),n=Ge;if(n!==null)return vu(a,n,e);Fe(),a=a.memoizedState,n=Fe();var t=n.queue.dispatch;return n.memoizedState=e,[a,t,!1]}function no(e,a,n,t){return e={tag:e,create:n,deps:t,inst:a,next:null},a=ge.updateQueue,a===null&&(a=gi(),ge.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,a.lastEffect=e),e}function yu(){return Fe().memoizedState}function xi(e,a,n,t){var s=va();ge.flags|=e,s.memoizedState=no(1|a,{destroy:void 0},n,t===void 0?null:t)}function yi(e,a,n,t){var s=Fe();t=t===void 0?null:t;var i=s.memoizedState.inst;Ge!==null&&t!==null&&sl(t,Ge.memoizedState.deps)?s.memoizedState=no(a,i,n,t):(ge.flags|=e,s.memoizedState=no(1|a,i,n,t))}function wu(e,a){xi(8390656,8,e,a)}function hl(e,a){yi(2048,8,e,a)}function zh(e){ge.flags|=4;var a=ge.updateQueue;if(a===null)a=gi(),ge.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function ku(e){var a=Fe().memoizedState;return zh({ref:a,nextImpl:e}),function(){if((De&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function ju(e,a){return yi(4,2,e,a)}function zu(e,a){return yi(4,4,e,a)}function Su(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Nu(e,a,n){n=n!=null?n.concat([e]):null,yi(4,4,Su.bind(null,a,e),n)}function gl(){}function qu(e,a){var n=Fe();a=a===void 0?null:a;var t=n.memoizedState;return a!==null&&sl(a,t[1])?t[0]:(n.memoizedState=[e,a],e)}function Eu(e,a){var n=Fe();a=a===void 0?null:a;var t=n.memoizedState;if(a!==null&&sl(a,t[1]))return t[0];if(t=e(),zt){an(!0);try{e()}finally{an(!1)}}return n.memoizedState=[t,a],t}function bl(e,a,n){return n===void 0||(vn&1073741824)!==0&&(ke&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=Tp(),ge.lanes|=e,$n|=e,n)}function Tu(e,a,n,t){return Aa(n,a)?n:Pt.current!==null?(e=bl(e,n,t),Aa(e,a)||(na=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(ke&261930)===0?(na=!0,e.memoizedState=n):(e=Tp(),ge.lanes|=e,$n|=e,a)}function Au(e,a,n,t,s){var i=S.p;S.p=i!==0&&8>i?i:8;var r=T.T,p={};T.T=p,yl(e,!1,a,n);try{var y=s(),E=T.S;if(E!==null&&E(p,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var U=xh(y,t);Po(e,a,U,Oa(e))}else Po(e,a,t,Oa(e))}catch(G){Po(e,a,{then:function(){},status:"rejected",reason:G},Oa())}finally{S.p=i,r!==null&&p.types!==null&&(r.types=p.types),T.T=r}}function Sh(){}function vl(e,a,n,t){if(e.tag!==5)throw Error(c(476));var s=Cu(e).queue;Au(e,s,a,R,n===null?Sh:function(){return Mu(e),n(t)})}function Cu(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:R},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Mu(e){var a=Cu(e);a.next===null&&(a=e.alternate.memoizedState),Po(e,a.next.queue,{},Oa())}function xl(){return ca(gs)}function Du(){return Fe().memoizedState}function Lu(){return Fe().memoizedState}function Nh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=Oa();e=Qn(n);var t=Xn(a,e,n);t!==null&&(Ea(t,a,n),Ko(t,a,n)),a={cache:Kr()},e.payload=a;return}a=a.return}}function qh(e,a,n){var t=Oa();n={lane:t,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wi(e)?Ou(a,n):(n=_r(e,a,n,t),n!==null&&(Ea(n,e,t),_u(n,a,t)))}function Uu(e,a,n){var t=Oa();Po(e,a,n,t)}function Po(e,a,n,t){var s={lane:t,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wi(e))Ou(a,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var r=a.lastRenderedState,p=i(r,n);if(s.hasEagerState=!0,s.eagerState=p,Aa(p,r))return ai(e,a,s,0),Ye===null&&ei(),!1}catch{}if(n=_r(e,a,s,t),n!==null)return Ea(n,e,t),_u(n,a,t),!0}return!1}function yl(e,a,n,t){if(t={lane:2,revertLane:Fl(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},wi(e)){if(a)throw Error(c(479))}else a=_r(e,n,t,2),a!==null&&Ea(a,e,2)}function wi(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function Ou(e,a){eo=fi=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function _u(e,a,n){if((n&4194048)!==0){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,Hs(e,n)}}var es={readContext:ca,use:bi,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};es.useEffectEvent=Ke;var Gu={readContext:ca,use:bi,useCallback:function(e,a){return va().memoizedState=[e,a===void 0?null:a],e},useContext:ca,useEffect:wu,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,xi(4194308,4,Su.bind(null,a,e),n)},useLayoutEffect:function(e,a){return xi(4194308,4,e,a)},useInsertionEffect:function(e,a){xi(4,2,e,a)},useMemo:function(e,a){var n=va();a=a===void 0?null:a;var t=e();if(zt){an(!0);try{e()}finally{an(!1)}}return n.memoizedState=[t,a],t},useReducer:function(e,a,n){var t=va();if(n!==void 0){var s=n(a);if(zt){an(!0);try{n(a)}finally{an(!1)}}}else s=a;return t.memoizedState=t.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},t.queue=e,e=e.dispatch=qh.bind(null,ge,e),[t.memoizedState,e]},useRef:function(e){var a=va();return e={current:e},a.memoizedState=e},useState:function(e){e=ml(e);var a=e.queue,n=Uu.bind(null,ge,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:gl,useDeferredValue:function(e,a){var n=va();return bl(n,e,a)},useTransition:function(){var e=ml(!1);return e=Au.bind(null,ge,e.queue,!0,!1),va().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var t=ge,s=va();if(Se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=a(),Ye===null)throw Error(c(349));(ke&127)!==0||su(t,a,n)}s.memoizedState=n;var i={value:n,getSnapshot:a};return s.queue=i,wu(ru.bind(null,t,i,e),[e]),t.flags|=2048,no(9,{destroy:void 0},iu.bind(null,t,i,n,a),null),n},useId:function(){var e=va(),a=Ye.identifierPrefix;if(Se){var n=on,t=tn;n=(t&~(1<<32-ue(t)-1)).toString(32)+n,a="_"+a+"R_"+n,n=hi++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=yh++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:xl,useFormState:gu,useActionState:gu,useOptimistic:function(e){var a=va();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=yl.bind(null,ge,!0,n),n.dispatch=a,[e,a]},useMemoCache:dl,useCacheRefresh:function(){return va().memoizedState=Nh.bind(null,ge)},useEffectEvent:function(e){var a=va(),n={impl:e};return a.memoizedState=n,function(){if((De&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},wl={readContext:ca,use:bi,useCallback:qu,useContext:ca,useEffect:hl,useImperativeHandle:Nu,useInsertionEffect:ju,useLayoutEffect:zu,useMemo:Eu,useReducer:vi,useRef:yu,useState:function(){return vi(xn)},useDebugValue:gl,useDeferredValue:function(e,a){var n=Fe();return Tu(n,Ge.memoizedState,e,a)},useTransition:function(){var e=vi(xn)[0],a=Fe().memoizedState;return[typeof e=="boolean"?e:Fo(e),a]},useSyncExternalStore:ou,useId:Du,useHostTransitionStatus:xl,useFormState:bu,useActionState:bu,useOptimistic:function(e,a){var n=Fe();return du(n,Ge,e,a)},useMemoCache:dl,useCacheRefresh:Lu};wl.useEffectEvent=ku;var Hu={readContext:ca,use:bi,useCallback:qu,useContext:ca,useEffect:hl,useImperativeHandle:Nu,useInsertionEffect:ju,useLayoutEffect:zu,useMemo:Eu,useReducer:pl,useRef:yu,useState:function(){return pl(xn)},useDebugValue:gl,useDeferredValue:function(e,a){var n=Fe();return Ge===null?bl(n,e,a):Tu(n,Ge.memoizedState,e,a)},useTransition:function(){var e=pl(xn)[0],a=Fe().memoizedState;return[typeof e=="boolean"?e:Fo(e),a]},useSyncExternalStore:ou,useId:Du,useHostTransitionStatus:xl,useFormState:xu,useActionState:xu,useOptimistic:function(e,a){var n=Fe();return Ge!==null?du(n,Ge,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:dl,useCacheRefresh:Lu};Hu.useEffectEvent=ku;function kl(e,a,n,t){a=e.memoizedState,n=n(t,a),n=n==null?a:j({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={enqueueSetState:function(e,a,n){e=e._reactInternals;var t=Oa(),s=Qn(t);s.payload=a,n!=null&&(s.callback=n),a=Xn(e,s,t),a!==null&&(Ea(a,e,t),Ko(a,e,t))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var t=Oa(),s=Qn(t);s.tag=1,s.payload=a,n!=null&&(s.callback=n),a=Xn(e,s,t),a!==null&&(Ea(a,e,t),Ko(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=Oa(),t=Qn(n);t.tag=2,a!=null&&(t.callback=a),a=Xn(e,t,n),a!==null&&(Ea(a,e,n),Ko(a,e,n))}};function Ru(e,a,n,t,s,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,r):a.prototype&&a.prototype.isPureReactComponent?!Ro(n,t)||!Ro(s,i):!0}function Bu(e,a,n,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,t),a.state!==e&&jl.enqueueReplaceState(a,a.state,null)}function St(e,a){var n=a;if("ref"in a){n={};for(var t in a)t!=="ref"&&(n[t]=a[t])}if(e=e.defaultProps){n===a&&(n=j({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Yu(e){Ps(e)}function Vu(e){console.error(e)}function Qu(e){Ps(e)}function ki(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function Xu(e,a,n){try{var t=e.onCaughtError;t(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function zl(e,a,n){return n=Qn(n),n.tag=3,n.payload={element:null},n.callback=function(){ki(e,a)},n}function Iu(e){return e=Qn(e),e.tag=3,e}function Zu(e,a,n,t){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;e.payload=function(){return s(i)},e.callback=function(){Xu(a,n,t)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Xu(a,n,t),typeof s!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})})}function Eh(e,a,n,t,s){if(n.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=n.alternate,a!==null&&Kt(a,n,s,!0),n=Ma.current,n!==null){switch(n.tag){case 31:case 13:return Xa===null?Li():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=s,t===ci?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([t]):a.add(t),Jl(e,t,s)),!1;case 22:return n.flags|=65536,t===ci?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([t]):n.add(t)),Jl(e,t,s)),!1}throw Error(c(435,n.tag))}return Jl(e,t,s),Li(),!1}if(Se)return a=Ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=s,t!==Vr&&(e=Error(c(422),{cause:t}),Vo(Ba(e,n)))):(t!==Vr&&(a=Error(c(423),{cause:t}),Vo(Ba(a,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,t=Ba(t,n),s=zl(e.stateNode,t,s),el(e,s),Je!==4&&(Je=2)),!1;var i=Error(c(520),{cause:t});if(i=Ba(i,n),ls===null?ls=[i]:ls.push(i),Je!==4&&(Je=2),a===null)return!0;t=Ba(t,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=zl(n.stateNode,t,e),el(n,e),!1;case 1:if(a=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Wn===null||!Wn.has(i))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Iu(s),Zu(s,e,n,t),el(n,s),!1}n=n.return}while(n!==null);return!1}var Sl=Error(c(461)),na=!1;function da(e,a,n,t){a.child=e===null?Wd(a,null,n,t):jt(a,e.child,n,t)}function Ku(e,a,n,t,s){n=n.render;var i=a.ref;if("ref"in t){var r={};for(var p in t)p!=="ref"&&(r[p]=t[p])}else r=t;return xt(a),t=il(e,a,n,r,i,s),p=rl(),e!==null&&!na?(ll(e,a,s),yn(e,a,s)):(Se&&p&&Br(a),a.flags|=1,da(e,a,t,s),a.child)}function Ju(e,a,n,t,s){if(e===null){var i=n.type;return typeof i=="function"&&!Gr(i)&&i.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=i,$u(e,a,i,t,s)):(e=ti(n.type,null,t,a,a.mode,s),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Dl(e,s)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(r,t)&&e.ref===a.ref)return yn(e,a,s)}return a.flags|=1,e=fn(i,t),e.ref=a.ref,e.return=a,a.child=e}function $u(e,a,n,t,s){if(e!==null){var i=e.memoizedProps;if(Ro(i,t)&&e.ref===a.ref)if(na=!1,a.pendingProps=t=i,Dl(e,s))(e.flags&131072)!==0&&(na=!0);else return a.lanes=e.lanes,yn(e,a,s)}return Nl(e,a,n,t,s)}function Wu(e,a,n,t){var s=t.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(t=a.child=e.child,s=0;t!==null;)s=s|t.lanes|t.childLanes,t=t.sibling;t=s&~i}else t=0,a.child=null;return Fu(e,a,i,n,t)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ri(a,i!==null?i.cachePool:null),i!==null?eu(a,i):nl(),au(a);else return t=a.lanes=536870912,Fu(e,a,i!==null?i.baseLanes|n:n,n,t)}else i!==null?(ri(a,i.cachePool),eu(a,i),Zn(),a.memoizedState=null):(e!==null&&ri(a,null),nl(),Zn());return da(e,a,s,n),a.child}function as(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Fu(e,a,n,t,s){var i=$r();return i=i===null?null:{parent:ea._currentValue,pool:i},a.memoizedState={baseLanes:n,cachePool:i},e!==null&&ri(a,null),nl(),au(a),e!==null&&Kt(e,a,t,!0),a.childLanes=s,null}function ji(e,a){return a=Si({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Pu(e,a,n){return jt(a,e.child,null,n),e=ji(a,a.pendingProps),e.flags|=2,Da(a),a.memoizedState=null,e}function Th(e,a,n){var t=a.pendingProps,s=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Se){if(t.mode==="hidden")return e=ji(a,t),a.lanes=536870912,as(null,e);if(ol(a),(e=Ve)?(e=um(e,Qa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Hn!==null?{id:tn,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=Od(e),n.return=a,a.child=n,la=a,Ve=null)):e=null,e===null)throw Bn(a);return a.lanes=536870912,null}return ji(a,t)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(ol(a),s)if(a.flags&256)a.flags&=-257,a=Pu(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(c(558));else if(na||Kt(e,a,n,!1),s=(n&e.childLanes)!==0,na||s){if(t=Ye,t!==null&&(r=Rs(t,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,ht(e,r),Ea(t,e,r),Sl;Li(),a=Pu(e,a,n)}else e=i.treeContext,Ve=Ia(r.nextSibling),la=a,Se=!0,Rn=null,Qa=!1,e!==null&&Hd(a,e),a=ji(a,t),a.flags|=4096;return a}return e=fn(e.child,{mode:t.mode,children:t.children}),e.ref=a.ref,a.child=e,e.return=a,e}function zi(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function Nl(e,a,n,t,s){return xt(a),n=il(e,a,n,t,void 0,s),t=rl(),e!==null&&!na?(ll(e,a,s),yn(e,a,s)):(Se&&t&&Br(a),a.flags|=1,da(e,a,n,s),a.child)}function ep(e,a,n,t,s,i){return xt(a),a.updateQueue=null,n=tu(a,t,n,s),nu(e),t=rl(),e!==null&&!na?(ll(e,a,i),yn(e,a,i)):(Se&&t&&Br(a),a.flags|=1,da(e,a,n,i),a.child)}function ap(e,a,n,t,s){if(xt(a),a.stateNode===null){var i=Qt,r=n.contextType;typeof r=="object"&&r!==null&&(i=ca(r)),i=new n(t,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jl,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=t,i.state=a.memoizedState,i.refs={},Fr(a),r=n.contextType,i.context=typeof r=="object"&&r!==null?ca(r):Qt,i.state=a.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(kl(a,n,r,t),i.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&jl.enqueueReplaceState(i,i.state,null),$o(a,t,i,s),Jo(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(e===null){i=a.stateNode;var p=a.memoizedProps,y=St(n,p);i.props=y;var E=i.context,U=n.contextType;r=Qt,typeof U=="object"&&U!==null&&(r=ca(U));var G=n.getDerivedStateFromProps;U=typeof G=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=a.pendingProps!==p,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||E!==r)&&Bu(a,i,t,r),Vn=!1;var A=a.memoizedState;i.state=A,$o(a,t,i,s),Jo(),E=a.memoizedState,p||A!==E||Vn?(typeof G=="function"&&(kl(a,n,G,t),E=a.memoizedState),(y=Vn||Ru(a,n,y,t,A,E,r))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=E),i.props=t,i.state=E,i.context=r,t=y):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{i=a.stateNode,Pr(e,a),r=a.memoizedProps,U=St(n,r),i.props=U,G=a.pendingProps,A=i.context,E=n.contextType,y=Qt,typeof E=="object"&&E!==null&&(y=ca(E)),p=n.getDerivedStateFromProps,(E=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==G||A!==y)&&Bu(a,i,t,y),Vn=!1,A=a.memoizedState,i.state=A,$o(a,t,i,s),Jo();var M=a.memoizedState;r!==G||A!==M||Vn||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof p=="function"&&(kl(a,n,p,t),M=a.memoizedState),(U=Vn||Ru(a,n,U,t,A,M,y)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,M,y),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,M,y)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=M),i.props=t,i.state=M,i.context=y,t=U):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),t=!1)}return i=t,zi(e,a),t=(a.flags&128)!==0,i||t?(i=a.stateNode,n=t&&typeof n.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&t?(a.child=jt(a,e.child,null,s),a.child=jt(a,null,n,s)):da(e,a,n,s),a.memoizedState=i.state,e=a.child):e=yn(e,a,s),e}function np(e,a,n,t){return bt(),a.flags|=256,da(e,a,n,t),a.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function El(e){return{baseLanes:e,cachePool:Xd()}}function Tl(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=Ua),e}function tp(e,a,n){var t=a.pendingProps,s=!1,i=(a.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),r&&(s=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,e===null){if(Se){if(s?In(a):Zn(),(e=Ve)?(e=um(e,Qa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Hn!==null?{id:tn,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=Od(e),n.return=a,a.child=n,la=a,Ve=null)):e=null,e===null)throw Bn(a);return uc(e)?a.lanes=32:a.lanes=536870912,null}var p=t.children;return t=t.fallback,s?(Zn(),s=a.mode,p=Si({mode:"hidden",children:p},s),t=gt(t,s,n,null),p.return=a,t.return=a,p.sibling=t,a.child=p,t=a.child,t.memoizedState=El(n),t.childLanes=Tl(e,r,n),a.memoizedState=ql,as(null,t)):(In(a),Al(a,p))}var y=e.memoizedState;if(y!==null&&(p=y.dehydrated,p!==null)){if(i)a.flags&256?(In(a),a.flags&=-257,a=Cl(e,a,n)):a.memoizedState!==null?(Zn(),a.child=e.child,a.flags|=128,a=null):(Zn(),p=t.fallback,s=a.mode,t=Si({mode:"visible",children:t.children},s),p=gt(p,s,n,null),p.flags|=2,t.return=a,p.return=a,t.sibling=p,a.child=t,jt(a,e.child,null,n),t=a.child,t.memoizedState=El(n),t.childLanes=Tl(e,r,n),a.memoizedState=ql,a=as(null,t));else if(In(a),uc(p)){if(r=p.nextSibling&&p.nextSibling.dataset,r)var E=r.dgst;r=E,t=Error(c(419)),t.stack="",t.digest=r,Vo({value:t,source:null,stack:null}),a=Cl(e,a,n)}else if(na||Kt(e,a,n,!1),r=(n&e.childLanes)!==0,na||r){if(r=Ye,r!==null&&(t=Rs(r,n),t!==0&&t!==y.retryLane))throw y.retryLane=t,ht(e,t),Ea(r,e,t),Sl;dc(p)||Li(),a=Cl(e,a,n)}else dc(p)?(a.flags|=192,a.child=e.child,a=null):(e=y.treeContext,Ve=Ia(p.nextSibling),la=a,Se=!0,Rn=null,Qa=!1,e!==null&&Hd(a,e),a=Al(a,t.children),a.flags|=4096);return a}return s?(Zn(),p=t.fallback,s=a.mode,y=e.child,E=y.sibling,t=fn(y,{mode:"hidden",children:t.children}),t.subtreeFlags=y.subtreeFlags&65011712,E!==null?p=fn(E,p):(p=gt(p,s,n,null),p.flags|=2),p.return=a,t.return=a,t.sibling=p,a.child=t,as(null,t),t=a.child,p=e.child.memoizedState,p===null?p=El(n):(s=p.cachePool,s!==null?(y=ea._currentValue,s=s.parent!==y?{parent:y,pool:y}:s):s=Xd(),p={baseLanes:p.baseLanes|n,cachePool:s}),t.memoizedState=p,t.childLanes=Tl(e,r,n),a.memoizedState=ql,as(e.child,t)):(In(a),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:t.children}),n.return=a,n.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=n,a.memoizedState=null,n)}function Al(e,a){return a=Si({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Si(e,a){return e=Ca(22,e,null,a),e.lanes=0,e}function Cl(e,a,n){return jt(a,e.child,null,n),e=Al(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function op(e,a,n){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),Ir(e.return,a,n)}function Ml(e,a,n,t,s,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:s,treeForkCount:i}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=t,r.tail=n,r.tailMode=s,r.treeForkCount=i)}function sp(e,a,n){var t=a.pendingProps,s=t.revealOrder,i=t.tail;t=t.children;var r=We.current,p=(r&2)!==0;if(p?(r=r&1|2,a.flags|=128):r&=1,Q(We,r),da(e,a,t,n),t=Se?Yo:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,n,a);else if(e.tag===19)op(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=a.child,s=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=a.child,a.child=null):(s=n.sibling,n.sibling=null),Ml(a,!1,s,n,i,t);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=a.child,a.child=null;s!==null;){if(e=s.alternate,e!==null&&mi(e)===null){a.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ml(a,!0,n,null,i,t);break;case"together":Ml(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function yn(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),$n|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Kt(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,n=fn(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Dl(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function Ah(e,a,n){switch(a.tag){case 3:$e(a,a.stateNode.containerInfo),Yn(a,ea,e.memoizedState.cache),bt();break;case 27:case 5:ze(a);break;case 4:$e(a,a.stateNode.containerInfo);break;case 10:Yn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,ol(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(In(a),a.flags|=128,null):(n&a.child.childLanes)!==0?tp(e,a,n):(In(a),e=yn(e,a,n),e!==null?e.sibling:null);In(a);break;case 19:var s=(e.flags&128)!==0;if(t=(n&a.childLanes)!==0,t||(Kt(e,a,n,!1),t=(n&a.childLanes)!==0),s){if(t)return sp(e,a,n);a.flags|=128}if(s=a.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(We,We.current),t)break;return null;case 22:return a.lanes=0,Wu(e,a,n,a.pendingProps);case 24:Yn(a,ea,e.memoizedState.cache)}return yn(e,a,n)}function ip(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)na=!0;else{if(!Dl(e,n)&&(a.flags&128)===0)return na=!1,Ah(e,a,n);na=(e.flags&131072)!==0}else na=!1,Se&&(a.flags&1048576)!==0&&Gd(a,Yo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var t=a.pendingProps;if(e=wt(a.elementType),a.type=e,typeof e=="function")Gr(e)?(t=St(e,t),a.tag=1,a=ap(null,a,e,t,n)):(a.tag=0,a=Nl(null,a,e,t,n));else{if(e!=null){var s=e.$$typeof;if(s===P){a.tag=11,a=Ku(null,a,e,t,n);break e}else if(s===te){a.tag=14,a=Ju(null,a,e,t,n);break e}}throw a=pe(e)||e,Error(c(306,a,""))}}return a;case 0:return Nl(e,a,a.type,a.pendingProps,n);case 1:return t=a.type,s=St(t,a.pendingProps),ap(e,a,t,s,n);case 3:e:{if($e(a,a.stateNode.containerInfo),e===null)throw Error(c(387));t=a.pendingProps;var i=a.memoizedState;s=i.element,Pr(e,a),$o(a,t,null,n);var r=a.memoizedState;if(t=r.cache,Yn(a,ea,t),t!==i.cache&&Zr(a,[ea],n,!0),Jo(),t=r.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=np(e,a,t,n);break e}else if(t!==s){s=Ba(Error(c(424)),a),Vo(s),a=np(e,a,t,n);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=Ia(e.firstChild),la=a,Se=!0,Rn=null,Qa=!0,n=Wd(a,null,t,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),t===s){a=yn(e,a,n);break e}da(e,a,t,n)}a=a.child}return a;case 26:return zi(e,a),e===null?(n=bm(a.type,null,a.pendingProps,null))?a.memoizedState=n:Se||(n=a.type,e=a.pendingProps,t=Bi(he.current).createElement(n),t[_e]=a,t[ha]=e,ua(t,n,e),se(t),a.stateNode=t):a.memoizedState=bm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return ze(a),e===null&&Se&&(t=a.stateNode=fm(a.type,a.pendingProps,he.current),la=a,Qa=!0,s=Ve,at(a.type)?(pc=s,Ve=Ia(t.firstChild)):Ve=s),da(e,a,a.pendingProps.children,n),zi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Se&&((s=t=Ve)&&(t=ig(t,a.type,a.pendingProps,Qa),t!==null?(a.stateNode=t,la=a,Ve=Ia(t.firstChild),Qa=!1,s=!0):s=!1),s||Bn(a)),ze(a),s=a.type,i=a.pendingProps,r=e!==null?e.memoizedProps:null,t=i.children,rc(s,i)?t=null:r!==null&&rc(s,r)&&(a.flags|=32),a.memoizedState!==null&&(s=il(e,a,wh,null,null,n),gs._currentValue=s),zi(e,a),da(e,a,t,n),a.child;case 6:return e===null&&Se&&((e=n=Ve)&&(n=rg(n,a.pendingProps,Qa),n!==null?(a.stateNode=n,la=a,Ve=null,e=!0):e=!1),e||Bn(a)),null;case 13:return tp(e,a,n);case 4:return $e(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=jt(a,null,t,n):da(e,a,t,n),a.child;case 11:return Ku(e,a,a.type,a.pendingProps,n);case 7:return da(e,a,a.pendingProps,n),a.child;case 8:return da(e,a,a.pendingProps.children,n),a.child;case 12:return da(e,a,a.pendingProps.children,n),a.child;case 10:return t=a.pendingProps,Yn(a,a.type,t.value),da(e,a,t.children,n),a.child;case 9:return s=a.type._context,t=a.pendingProps.children,xt(a),s=ca(s),t=t(s),a.flags|=1,da(e,a,t,n),a.child;case 14:return Ju(e,a,a.type,a.pendingProps,n);case 15:return $u(e,a,a.type,a.pendingProps,n);case 19:return sp(e,a,n);case 31:return Th(e,a,n);case 22:return Wu(e,a,n,a.pendingProps);case 24:return xt(a),t=ca(ea),e===null?(s=$r(),s===null&&(s=Ye,i=Kr(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=n),s=i),a.memoizedState={parent:t,cache:s},Fr(a),Yn(a,ea,s)):((e.lanes&n)!==0&&(Pr(e,a),$o(a,null,null,n),Jo()),s=e.memoizedState,i=a.memoizedState,s.parent!==t?(s={parent:t,cache:t},a.memoizedState=s,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=s),Yn(a,ea,t)):(t=i.cache,Yn(a,ea,t),t!==s.cache&&Zr(a,[ea],n,!0))),da(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function wn(e){e.flags|=4}function Ll(e,a,n,t,s){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Dp())e.flags|=8192;else throw kt=ci,Wr}else e.flags&=-16777217}function rp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!km(a))if(Dp())e.flags|=8192;else throw kt=ci,Wr}function Ni(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Gs():536870912,e.lanes|=a,io|=a)}function ns(e,a){if(!Se)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Qe(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(a)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,t|=s.subtreeFlags&65011712,t|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,t|=s.subtreeFlags,t|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=t,e.childLanes=n,a}function Ch(e,a,n){var t=a.pendingProps;switch(Yr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(a),null;case 1:return Qe(a),null;case 3:return n=a.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),bn(ea),V(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zt(a)?wn(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Qr())),Qe(a),null;case 26:var s=a.type,i=a.memoizedState;return e===null?(wn(a),i!==null?(Qe(a),rp(a,i)):(Qe(a),Ll(a,s,null,t,n))):i?i!==e.memoizedState?(wn(a),Qe(a),rp(a,i)):(Qe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==t&&wn(a),Qe(a),Ll(a,s,e,t,n)),null;case 27:if(Le(a),n=he.current,s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&wn(a);else{if(!t){if(a.stateNode===null)throw Error(c(166));return Qe(a),null}e=I.current,Zt(a)?Rd(a):(e=fm(s,t,n),a.stateNode=e,wn(a))}return Qe(a),null;case 5:if(Le(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&wn(a);else{if(!t){if(a.stateNode===null)throw Error(c(166));return Qe(a),null}if(i=I.current,Zt(a))Rd(a);else{var r=Bi(he.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof t.is=="string"?r.createElement("select",{is:t.is}):r.createElement("select"),t.multiple?i.multiple=!0:t.size&&(i.size=t.size);break;default:i=typeof t.is=="string"?r.createElement(s,{is:t.is}):r.createElement(s)}}i[_e]=a,i[ha]=t;e:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=i;e:switch(ua(i,s,t),s){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&wn(a)}}return Qe(a),Ll(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==t&&wn(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(c(166));if(e=he.current,Zt(a)){if(e=a.stateNode,n=a.memoizedProps,t=null,s=la,s!==null)switch(s.tag){case 27:case 5:t=s.memoizedProps}e[_e]=a,e=!!(e.nodeValue===n||t!==null&&t.suppressHydrationWarning===!0||tm(e.nodeValue,n)),e||Bn(a,!0)}else e=Bi(e).createTextNode(t),e[_e]=a,a.stateNode=e}return Qe(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(t=Zt(a),n!==null){if(e===null){if(!t)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[_e]=a}else bt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),e=!1}else n=Qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(Da(a),a):(Da(a),null);if((a.flags&128)!==0)throw Error(c(558))}return Qe(a),null;case 13:if(t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Zt(a),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[_e]=a}else bt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),s=!1}else s=Qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return a.flags&256?(Da(a),a):(Da(a),null)}return Da(a),(a.flags&128)!==0?(a.lanes=n,a):(n=t!==null,e=e!==null&&e.memoizedState!==null,n&&(t=a.child,s=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(s=t.alternate.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==s&&(t.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Ni(a,a.updateQueue),Qe(a),null);case 4:return V(),e===null&&nc(a.stateNode.containerInfo),Qe(a),null;case 10:return bn(a.type),Qe(a),null;case 19:if(O(We),t=a.memoizedState,t===null)return Qe(a),null;if(s=(a.flags&128)!==0,i=t.rendering,i===null)if(s)ns(t,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=mi(e),i!==null){for(a.flags|=128,ns(t,!1),e=i.updateQueue,a.updateQueue=e,Ni(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Ud(n,e),n=n.sibling;return Q(We,We.current&1|2),Se&&hn(a,t.treeForkCount),a.child}e=e.sibling}t.tail!==null&&ma()>Ci&&(a.flags|=128,s=!0,ns(t,!1),a.lanes=4194304)}else{if(!s)if(e=mi(i),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,Ni(a,e),ns(t,!0),t.tail===null&&t.tailMode==="hidden"&&!i.alternate&&!Se)return Qe(a),null}else 2*ma()-t.renderingStartTime>Ci&&n!==536870912&&(a.flags|=128,s=!0,ns(t,!1),a.lanes=4194304);t.isBackwards?(i.sibling=a.child,a.child=i):(e=t.last,e!==null?e.sibling=i:a.child=i,t.last=i)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=ma(),e.sibling=null,n=We.current,Q(We,s?n&1|2:n&1),Se&&hn(a,t.treeForkCount),e):(Qe(a),null);case 22:case 23:return Da(a),tl(),t=a.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(n&536870912)!==0&&(a.flags&128)===0&&(Qe(a),a.subtreeFlags&6&&(a.flags|=8192)):Qe(a),n=a.updateQueue,n!==null&&Ni(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==n&&(a.flags|=2048),e!==null&&O(yt),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),bn(ea),Qe(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function Mh(e,a){switch(Yr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return bn(ea),V(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Le(a),null;case 31:if(a.memoizedState!==null){if(Da(a),a.alternate===null)throw Error(c(340));bt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Da(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));bt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return O(We),null;case 4:return V(),null;case 10:return bn(a.type),null;case 22:case 23:return Da(a),tl(),e!==null&&O(yt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return bn(ea),null;case 25:return null;default:return null}}function lp(e,a){switch(Yr(a),a.tag){case 3:bn(ea),V();break;case 26:case 27:case 5:Le(a);break;case 4:V();break;case 31:a.memoizedState!==null&&Da(a);break;case 13:Da(a);break;case 19:O(We);break;case 10:bn(a.type);break;case 22:case 23:Da(a),tl(),e!==null&&O(yt);break;case 24:bn(ea)}}function ts(e,a){try{var n=a.updateQueue,t=n!==null?n.lastEffect:null;if(t!==null){var s=t.next;n=s;do{if((n.tag&e)===e){t=void 0;var i=n.create,r=n.inst;t=i(),r.destroy=t}n=n.next}while(n!==s)}}catch(p){Oe(a,a.return,p)}}function Kn(e,a,n){try{var t=a.updateQueue,s=t!==null?t.lastEffect:null;if(s!==null){var i=s.next;t=i;do{if((t.tag&e)===e){var r=t.inst,p=r.destroy;if(p!==void 0){r.destroy=void 0,s=a;var y=n,E=p;try{E()}catch(U){Oe(s,y,U)}}}t=t.next}while(t!==i)}}catch(U){Oe(a,a.return,U)}}function cp(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Pd(a,n)}catch(t){Oe(e,e.return,t)}}}function dp(e,a,n){n.props=St(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(t){Oe(e,a,t)}}function os(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof n=="function"?e.refCleanup=n(t):n.current=t}}catch(s){Oe(e,a,s)}}function sn(e,a){var n=e.ref,t=e.refCleanup;if(n!==null)if(typeof t=="function")try{t()}catch(s){Oe(e,a,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Oe(e,a,s)}else n.current=null}function up(e){var a=e.type,n=e.memoizedProps,t=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&t.focus();break e;case"img":n.src?t.src=n.src:n.srcSet&&(t.srcset=n.srcSet)}}catch(s){Oe(e,e.return,s)}}function Ul(e,a,n){try{var t=e.stateNode;eg(t,e.type,n,a),t[ha]=a}catch(s){Oe(e,e.return,s)}}function pp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&at(e.type)||e.tag===4}function Ol(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&at(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _l(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=pn));else if(t!==4&&(t===27&&at(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(_l(e,a,n),e=e.sibling;e!==null;)_l(e,a,n),e=e.sibling}function qi(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(t!==4&&(t===27&&at(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qi(e,a,n),e=e.sibling;e!==null;)qi(e,a,n),e=e.sibling}function mp(e){var a=e.stateNode,n=e.memoizedProps;try{for(var t=e.type,s=a.attributes;s.length;)a.removeAttributeNode(s[0]);ua(a,t,n),a[_e]=e,a[ha]=n}catch(i){Oe(e,e.return,i)}}var kn=!1,ta=!1,Gl=!1,fp=typeof WeakSet=="function"?WeakSet:Set,ia=null;function Dh(e,a){if(e=e.containerInfo,sc=Ki,e=Nd(e),Cr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var s=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,p=-1,y=-1,E=0,U=0,G=e,A=null;a:for(;;){for(var M;G!==n||s!==0&&G.nodeType!==3||(p=r+s),G!==i||t!==0&&G.nodeType!==3||(y=r+t),G.nodeType===3&&(r+=G.nodeValue.length),(M=G.firstChild)!==null;)A=G,G=M;for(;;){if(G===e)break a;if(A===n&&++E===s&&(p=r),A===i&&++U===t&&(y=r),(M=G.nextSibling)!==null)break;G=A,A=G.parentNode}G=M}n=p===-1||y===-1?null:{start:p,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(ic={focusedElem:e,selectionRange:n},Ki=!1,ia=a;ia!==null;)if(a=ia,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ia=e;else for(;ia!==null;){switch(a=ia,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=a,s=i.memoizedProps,i=i.memoizedState,t=n.stateNode;try{var ae=St(n.type,s);e=t.getSnapshotBeforeUpdate(ae,i),t.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Oe(n,n.return,ce)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)cc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=a.sibling,e!==null){e.return=a.return,ia=e;break}ia=a.return}}function hp(e,a,n){var t=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),t&4&&ts(5,n);break;case 1:if(zn(e,n),t&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(r){Oe(n,n.return,r)}else{var s=St(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(s,a,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Oe(n,n.return,r)}}t&64&&cp(n),t&512&&os(n,n.return);break;case 3:if(zn(e,n),t&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Pd(e,a)}catch(r){Oe(n,n.return,r)}}break;case 27:a===null&&t&4&&mp(n);case 26:case 5:zn(e,n),a===null&&t&4&&up(n),t&512&&os(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),t&4&&vp(e,n);break;case 13:zn(e,n),t&4&&xp(e,n),t&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yh.bind(null,n),lg(e,n))));break;case 22:if(t=n.memoizedState!==null||kn,!t){a=a!==null&&a.memoizedState!==null||ta,s=kn;var i=ta;kn=t,(ta=a)&&!i?Sn(e,n,(n.subtreeFlags&8772)!==0):zn(e,n),kn=s,ta=i}break;case 30:break;default:zn(e,n)}}function gp(e){var a=e.alternate;a!==null&&(e.alternate=null,gp(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ut(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,za=!1;function jn(e,a,n){for(n=n.child;n!==null;)bp(e,a,n),n=n.sibling}function bp(e,a,n){if(fa&&typeof fa.onCommitFiberUnmount=="function")try{fa.onCommitFiberUnmount(Mn,n)}catch{}switch(n.tag){case 26:ta||sn(n,a),jn(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ta||sn(n,a);var t=Ie,s=za;at(n.type)&&(Ie=n.stateNode,za=!1),jn(e,a,n),ms(n.stateNode),Ie=t,za=s;break;case 5:ta||sn(n,a);case 6:if(t=Ie,s=za,Ie=null,jn(e,a,n),Ie=t,za=s,Ie!==null)if(za)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode)}catch(i){Oe(n,a,i)}else try{Ie.removeChild(n.stateNode)}catch(i){Oe(n,a,i)}break;case 18:Ie!==null&&(za?(e=Ie,cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ho(e)):cm(Ie,n.stateNode));break;case 4:t=Ie,s=za,Ie=n.stateNode.containerInfo,za=!0,jn(e,a,n),Ie=t,za=s;break;case 0:case 11:case 14:case 15:Kn(2,n,a),ta||Kn(4,n,a),jn(e,a,n);break;case 1:ta||(sn(n,a),t=n.stateNode,typeof t.componentWillUnmount=="function"&&dp(n,a,t)),jn(e,a,n);break;case 21:jn(e,a,n);break;case 22:ta=(t=ta)||n.memoizedState!==null,jn(e,a,n),ta=t;break;default:jn(e,a,n)}}function vp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ho(e)}catch(n){Oe(a,a.return,n)}}}function xp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ho(e)}catch(n){Oe(a,a.return,n)}}function Lh(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new fp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new fp),a;default:throw Error(c(435,e.tag))}}function Ei(e,a){var n=Lh(e);a.forEach(function(t){if(!n.has(t)){n.add(t);var s=Vh.bind(null,e,t);t.then(s,s)}})}function Sa(e,a){var n=a.deletions;if(n!==null)for(var t=0;t<n.length;t++){var s=n[t],i=e,r=a,p=r;e:for(;p!==null;){switch(p.tag){case 27:if(at(p.type)){Ie=p.stateNode,za=!1;break e}break;case 5:Ie=p.stateNode,za=!1;break e;case 3:case 4:Ie=p.stateNode.containerInfo,za=!0;break e}p=p.return}if(Ie===null)throw Error(c(160));bp(i,r,s),Ie=null,za=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)yp(a,e),a=a.sibling}var Fa=null;function yp(e,a){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sa(a,e),Na(e),t&4&&(Kn(3,e,e.return),ts(3,e),Kn(5,e,e.return));break;case 1:Sa(a,e),Na(e),t&512&&(ta||n===null||sn(n,n.return)),t&64&&kn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:var s=Fa;if(Sa(a,e),Na(e),t&512&&(ta||n===null||sn(n,n.return)),t&4){var i=n!==null?n.memoizedState:null;if(t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null){e:{t=e.type,n=e.memoizedProps,s=s.ownerDocument||s;a:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[ut]||i[_e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),ua(i,t,n),i[_e]=e,se(i),t=i;break e;case"link":var r=ym("link","href",s).get(t+(n.href||""));if(r){for(var p=0;p<r.length;p++)if(i=r[p],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(p,1);break a}}i=s.createElement(t),ua(i,t,n),s.head.appendChild(i);break;case"meta":if(r=ym("meta","content",s).get(t+(n.content||""))){for(p=0;p<r.length;p++)if(i=r[p],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(p,1);break a}}i=s.createElement(t),ua(i,t,n),s.head.appendChild(i);break;default:throw Error(c(468,t))}i[_e]=e,se(i),t=i}e.stateNode=t}else wm(s,e.type,e.stateNode);else e.stateNode=xm(s,t,e.memoizedProps);else i!==t?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,t===null?wm(s,e.type,e.stateNode):xm(s,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Ul(e,e.memoizedProps,n.memoizedProps)}break;case 27:Sa(a,e),Na(e),t&512&&(ta||n===null||sn(n,n.return)),n!==null&&t&4&&Ul(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Sa(a,e),Na(e),t&512&&(ta||n===null||sn(n,n.return)),e.flags&32){s=e.stateNode;try{_t(s,"")}catch(ae){Oe(e,e.return,ae)}}t&4&&e.stateNode!=null&&(s=e.memoizedProps,Ul(e,s,n!==null?n.memoizedProps:s)),t&1024&&(Gl=!0);break;case 6:if(Sa(a,e),Na(e),t&4){if(e.stateNode===null)throw Error(c(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t}catch(ae){Oe(e,e.return,ae)}}break;case 3:if(Qi=null,s=Fa,Fa=Yi(a.containerInfo),Sa(a,e),Fa=s,Na(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(a.containerInfo)}catch(ae){Oe(e,e.return,ae)}Gl&&(Gl=!1,wp(e));break;case 4:t=Fa,Fa=Yi(e.stateNode.containerInfo),Sa(a,e),Na(e),Fa=t;break;case 12:Sa(a,e),Na(e);break;case 31:Sa(a,e),Na(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ei(e,t)));break;case 13:Sa(a,e),Na(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ai=ma()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ei(e,t)));break;case 22:s=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,E=kn,U=ta;if(kn=E||s,ta=U||y,Sa(a,e),ta=U,kn=E,Na(e),t&8192)e:for(a=e.stateNode,a._visibility=s?a._visibility&-2:a._visibility|1,s&&(n===null||y||kn||ta||Nt(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){y=n=a;try{if(i=y.stateNode,s)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{p=y.stateNode;var G=y.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(ae){Oe(y,y.return,ae)}}}else if(a.tag===6){if(n===null){y=a;try{y.stateNode.nodeValue=s?"":y.memoizedProps}catch(ae){Oe(y,y.return,ae)}}}else if(a.tag===18){if(n===null){y=a;try{var M=y.stateNode;s?dm(M,!0):dm(y.stateNode,!1)}catch(ae){Oe(y,y.return,ae)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Ei(e,n))));break;case 19:Sa(a,e),Na(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ei(e,t)));break;case 30:break;case 21:break;default:Sa(a,e),Na(e)}}function Na(e){var a=e.flags;if(a&2){try{for(var n,t=e.return;t!==null;){if(pp(t)){n=t;break}t=t.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var s=n.stateNode,i=Ol(e);qi(e,i,s);break;case 5:var r=n.stateNode;n.flags&32&&(_t(r,""),n.flags&=-33);var p=Ol(e);qi(e,p,r);break;case 3:case 4:var y=n.stateNode.containerInfo,E=Ol(e);_l(e,E,y);break;default:throw Error(c(161))}}catch(U){Oe(e,e.return,U)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function wp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;wp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function zn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)hp(e,a.alternate,a),a=a.sibling}function Nt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Kn(4,a,a.return),Nt(a);break;case 1:sn(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&dp(a,a.return,n),Nt(a);break;case 27:ms(a.stateNode);case 26:case 5:sn(a,a.return),Nt(a);break;case 22:a.memoizedState===null&&Nt(a);break;case 30:Nt(a);break;default:Nt(a)}e=e.sibling}}function Sn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,s=e,i=a,r=i.flags;switch(i.tag){case 0:case 11:case 15:Sn(s,i,n),ts(4,i);break;case 1:if(Sn(s,i,n),t=i,s=t.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(E){Oe(t,t.return,E)}if(t=i,s=t.updateQueue,s!==null){var p=t.stateNode;try{var y=s.shared.hiddenCallbacks;if(y!==null)for(s.shared.hiddenCallbacks=null,s=0;s<y.length;s++)Fd(y[s],p)}catch(E){Oe(t,t.return,E)}}n&&r&64&&cp(i),os(i,i.return);break;case 27:mp(i);case 26:case 5:Sn(s,i,n),n&&t===null&&r&4&&up(i),os(i,i.return);break;case 12:Sn(s,i,n);break;case 31:Sn(s,i,n),n&&r&4&&vp(s,i);break;case 13:Sn(s,i,n),n&&r&4&&xp(s,i);break;case 22:i.memoizedState===null&&Sn(s,i,n),os(i,i.return);break;case 30:break;default:Sn(s,i,n)}a=a.sibling}}function Hl(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qo(n))}function Rl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Qo(e))}function Pa(e,a,n,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)kp(e,a,n,t),a=a.sibling}function kp(e,a,n,t){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Pa(e,a,n,t),s&2048&&ts(9,a);break;case 1:Pa(e,a,n,t);break;case 3:Pa(e,a,n,t),s&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Qo(e)));break;case 12:if(s&2048){Pa(e,a,n,t),e=a.stateNode;try{var i=a.memoizedProps,r=i.id,p=i.onPostCommit;typeof p=="function"&&p(r,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Oe(a,a.return,y)}}else Pa(e,a,n,t);break;case 31:Pa(e,a,n,t);break;case 13:Pa(e,a,n,t);break;case 23:break;case 22:i=a.stateNode,r=a.alternate,a.memoizedState!==null?i._visibility&2?Pa(e,a,n,t):ss(e,a):i._visibility&2?Pa(e,a,n,t):(i._visibility|=2,to(e,a,n,t,(a.subtreeFlags&10256)!==0||!1)),s&2048&&Hl(r,a);break;case 24:Pa(e,a,n,t),s&2048&&Rl(a.alternate,a);break;default:Pa(e,a,n,t)}}function to(e,a,n,t,s){for(s=s&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,r=a,p=n,y=t,E=r.flags;switch(r.tag){case 0:case 11:case 15:to(i,r,p,y,s),ts(8,r);break;case 23:break;case 22:var U=r.stateNode;r.memoizedState!==null?U._visibility&2?to(i,r,p,y,s):ss(i,r):(U._visibility|=2,to(i,r,p,y,s)),s&&E&2048&&Hl(r.alternate,r);break;case 24:to(i,r,p,y,s),s&&E&2048&&Rl(r.alternate,r);break;default:to(i,r,p,y,s)}a=a.sibling}}function ss(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,t=a,s=t.flags;switch(t.tag){case 22:ss(n,t),s&2048&&Hl(t.alternate,t);break;case 24:ss(n,t),s&2048&&Rl(t.alternate,t);break;default:ss(n,t)}a=a.sibling}}var is=8192;function oo(e,a,n){if(e.subtreeFlags&is)for(e=e.child;e!==null;)jp(e,a,n),e=e.sibling}function jp(e,a,n){switch(e.tag){case 26:oo(e,a,n),e.flags&is&&e.memoizedState!==null&&yg(n,Fa,e.memoizedState,e.memoizedProps);break;case 5:oo(e,a,n);break;case 3:case 4:var t=Fa;Fa=Yi(e.stateNode.containerInfo),oo(e,a,n),Fa=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=is,is=16777216,oo(e,a,n),is=t):oo(e,a,n));break;default:oo(e,a,n)}}function zp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function rs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];ia=t,Np(t,e)}zp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sp(e),e=e.sibling}function Sp(e){switch(e.tag){case 0:case 11:case 15:rs(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:rs(e);break;case 12:rs(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ti(e)):rs(e);break;default:rs(e)}}function Ti(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];ia=t,Np(t,e)}zp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Kn(8,a,a.return),Ti(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Ti(a));break;default:Ti(a)}e=e.sibling}}function Np(e,a){for(;ia!==null;){var n=ia;switch(n.tag){case 0:case 11:case 15:Kn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var t=n.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Qo(n.memoizedState.cache)}if(t=n.child,t!==null)t.return=n,ia=t;else e:for(n=e;ia!==null;){t=ia;var s=t.sibling,i=t.return;if(gp(t),t===n){ia=null;break e}if(s!==null){s.return=i,ia=s;break e}ia=i}}}var Uh={getCacheForType:function(e){var a=ca(ea),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return ca(ea).controller.signal}},Oh=typeof WeakMap=="function"?WeakMap:Map,De=0,Ye=null,ye=null,ke=0,Ue=0,La=null,Jn=!1,so=!1,Bl=!1,Nn=0,Je=0,$n=0,qt=0,Yl=0,Ua=0,io=0,ls=null,qa=null,Vl=!1,Ai=0,qp=0,Ci=1/0,Mi=null,Wn=null,oa=0,Fn=null,ro=null,qn=0,Ql=0,Xl=null,Ep=null,cs=0,Il=null;function Oa(){return(De&2)!==0&&ke!==0?ke&-ke:T.T!==null?Fl():To()}function Tp(){if(Ua===0)if((ke&536870912)===0||Se){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),Ua=e}else Ua=536870912;return e=Ma.current,e!==null&&(e.flags|=32),Ua}function Ea(e,a,n){(e===Ye&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(lo(e,0),Pn(e,ke,Ua,!1)),dn(e,n),((De&2)===0||e!==Ye)&&(e===Ye&&((De&2)===0&&(qt|=n),Je===4&&Pn(e,ke,Ua,!1)),rn(e))}function Ap(e,a,n){if((De&6)!==0)throw Error(c(327));var t=!n&&(a&127)===0&&(a&e.expiredLanes)===0||Un(e,a),s=t?Hh(e,a):Kl(e,a,!0),i=t;do{if(s===0){so&&!t&&Pn(e,a,0,!1);break}else{if(n=e.current.alternate,i&&!_h(n)){s=Kl(e,a,!1),i=!1;continue}if(s===2){if(i=a,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var p=e;s=ls;var y=p.current.memoizedState.isDehydrated;if(y&&(lo(p,r).flags|=256),r=Kl(p,r,!1),r!==2){if(Bl&&!y){p.errorRecoveryDisabledLanes|=i,qt|=i,s=4;break e}i=qa,qa=s,i!==null&&(qa===null?qa=i:qa.push.apply(qa,i))}s=r}if(i=!1,s!==2)continue}}if(s===1){lo(e,0),Pn(e,a,0,!0);break}e:{switch(t=e,i=s,i){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:Pn(t,a,Ua,!Jn);break e;case 2:qa=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(s=Ai+300-ma(),10<s)){if(Pn(t,a,Ua,!Jn),ct(t,0,!0)!==0)break e;qn=a,t.timeoutHandle=rm(Cp.bind(null,t,n,qa,Mi,Vl,a,Ua,qt,io,Jn,i,"Throttled",-0,0),s);break e}Cp(t,n,qa,Mi,Vl,a,Ua,qt,io,Jn,i,null,-0,0)}}break}while(!0);rn(e)}function Cp(e,a,n,t,s,i,r,p,y,E,U,G,A,M){if(e.timeoutHandle=-1,G=a.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},jp(a,i,G);var ae=(i&62914560)===i?Ai-ma():(i&4194048)===i?qp-ma():0;if(ae=wg(G,ae),ae!==null){qn=i,e.cancelPendingCommit=ae(Hp.bind(null,e,a,i,n,t,s,r,p,y,U,G,null,A,M)),Pn(e,i,r,!E);return}}Hp(e,a,i,n,t,s,r,p,y)}function _h(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var t=0;t<n.length;t++){var s=n[t],i=s.getSnapshot;s=s.value;try{if(!Aa(i(),s))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Pn(e,a,n,t){a&=~Yl,a&=~qt,e.suspendedLanes|=a,e.pingedLanes&=~a,t&&(e.warmLanes|=a),t=e.expirationTimes;for(var s=a;0<s;){var i=31-ue(s),r=1<<i;t[i]=-1,s&=~r}n!==0&&Eo(e,n,a)}function Di(){return(De&6)===0?(ds(0),!1):!0}function Zl(){if(ye!==null){if(Ue===0)var e=ye.return;else e=ye,gn=vt=null,cl(e),Ft=null,Io=0,e=ye;for(;e!==null;)lp(e.alternate,e),e=e.return;ye=null}}function lo(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,tg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qn=0,Zl(),Ye=e,ye=n=fn(e.current,null),ke=a,Ue=0,La=null,Jn=!1,so=Un(e,a),Bl=!1,io=Ua=Yl=qt=$n=Je=0,qa=ls=null,Vl=!1,(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var s=31-ue(t),i=1<<s;a|=e[s],t&=~i}return Nn=a,ei(),n}function Mp(e,a){ge=null,T.H=es,a===Wt||a===li?(a=Kd(),Ue=3):a===Wr?(a=Kd(),Ue=4):Ue=a===Sl?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,La=a,ye===null&&(Je=1,ki(e,Ba(a,e.current)))}function Dp(){var e=Ma.current;return e===null?!0:(ke&4194048)===ke?Xa===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Xa:!1}function Lp(){var e=T.H;return T.H=es,e===null?es:e}function Up(){var e=T.A;return T.A=Uh,e}function Li(){Je=4,Jn||(ke&4194048)!==ke&&Ma.current!==null||(so=!0),($n&134217727)===0&&(qt&134217727)===0||Ye===null||Pn(Ye,ke,Ua,!1)}function Kl(e,a,n){var t=De;De|=2;var s=Lp(),i=Up();(Ye!==e||ke!==a)&&(Mi=null,lo(e,a)),a=!1;var r=Je;e:do try{if(Ue!==0&&ye!==null){var p=ye,y=La;switch(Ue){case 8:Zl(),r=6;break e;case 3:case 2:case 9:case 6:Ma.current===null&&(a=!0);var E=Ue;if(Ue=0,La=null,co(e,p,y,E),n&&so){r=0;break e}break;default:E=Ue,Ue=0,La=null,co(e,p,y,E)}}Gh(),r=Je;break}catch(U){Mp(e,U)}while(!0);return a&&e.shellSuspendCounter++,gn=vt=null,De=t,T.H=s,T.A=i,ye===null&&(Ye=null,ke=0,ei()),r}function Gh(){for(;ye!==null;)Op(ye)}function Hh(e,a){var n=De;De|=2;var t=Lp(),s=Up();Ye!==e||ke!==a?(Mi=null,Ci=ma()+500,lo(e,a)):so=Un(e,a);e:do try{if(Ue!==0&&ye!==null){a=ye;var i=La;a:switch(Ue){case 1:Ue=0,La=null,co(e,a,i,1);break;case 2:case 9:if(Id(i)){Ue=0,La=null,_p(a);break}a=function(){Ue!==2&&Ue!==9||Ye!==e||(Ue=7),rn(e)},i.then(a,a);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Id(i)?(Ue=0,La=null,_p(a)):(Ue=0,La=null,co(e,a,i,7));break;case 5:var r=null;switch(ye.tag){case 26:r=ye.memoizedState;case 5:case 27:var p=ye;if(r?km(r):p.stateNode.complete){Ue=0,La=null;var y=p.sibling;if(y!==null)ye=y;else{var E=p.return;E!==null?(ye=E,Ui(E)):ye=null}break a}}Ue=0,La=null,co(e,a,i,5);break;case 6:Ue=0,La=null,co(e,a,i,6);break;case 8:Zl(),Je=6;break e;default:throw Error(c(462))}}Rh();break}catch(U){Mp(e,U)}while(!0);return gn=vt=null,T.H=t,T.A=s,De=n,ye!==null?0:(Ye=null,ke=0,ei(),Je)}function Rh(){for(;ye!==null&&!Ts();)Op(ye)}function Op(e){var a=ip(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,a===null?Ui(e):ye=a}function _p(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=ep(n,a,a.pendingProps,a.type,void 0,ke);break;case 11:a=ep(n,a,a.pendingProps,a.type.render,a.ref,ke);break;case 5:cl(a);default:lp(n,a),a=ye=Ud(a,Nn),a=ip(n,a,Nn)}e.memoizedProps=e.pendingProps,a===null?Ui(e):ye=a}function co(e,a,n,t){gn=vt=null,cl(a),Ft=null,Io=0;var s=a.return;try{if(Eh(e,s,a,n,ke)){Je=1,ki(e,Ba(n,e.current)),ye=null;return}}catch(i){if(s!==null)throw ye=s,i;Je=1,ki(e,Ba(n,e.current)),ye=null;return}a.flags&32768?(Se||t===1?e=!0:so||(ke&536870912)!==0?e=!1:(Jn=e=!0,(t===2||t===9||t===3||t===6)&&(t=Ma.current,t!==null&&t.tag===13&&(t.flags|=16384))),Gp(a,e)):Ui(a)}function Ui(e){var a=e;do{if((a.flags&32768)!==0){Gp(a,Jn);return}e=a.return;var n=Ch(a.alternate,a,Nn);if(n!==null){ye=n;return}if(a=a.sibling,a!==null){ye=a;return}ye=a=e}while(a!==null);Je===0&&(Je=5)}function Gp(e,a){do{var n=Mh(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Je=6,ye=null}function Hp(e,a,n,t,s,i,r,p,y){e.cancelPendingCommit=null;do Oi();while(oa!==0);if((De&6)!==0)throw Error(c(327));if(a!==null){if(a===e.current)throw Error(c(177));if(i=a.lanes|a.childLanes,i|=Or,pr(e,n,i,r,p,y),e===Ye&&(ye=Ye=null,ke=0),ro=a,Fn=e,qn=n,Ql=i,Xl=s,Ep=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(Mt,function(){return Qp(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=T.T,T.T=null,s=S.p,S.p=2,r=De,De|=4;try{Dh(e,a,n)}finally{De=r,S.p=s,T.T=t}}oa=1,Rp(),Bp(),Yp()}}function Rp(){if(oa===1){oa=0;var e=Fn,a=ro,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var t=S.p;S.p=2;var s=De;De|=4;try{yp(a,e);var i=ic,r=Nd(e.containerInfo),p=i.focusedElem,y=i.selectionRange;if(r!==p&&p&&p.ownerDocument&&Sd(p.ownerDocument.documentElement,p)){if(y!==null&&Cr(p)){var E=y.start,U=y.end;if(U===void 0&&(U=E),"selectionStart"in p)p.selectionStart=E,p.selectionEnd=Math.min(U,p.value.length);else{var G=p.ownerDocument||document,A=G&&G.defaultView||window;if(A.getSelection){var M=A.getSelection(),ae=p.textContent.length,ce=Math.min(y.start,ae),Re=y.end===void 0?ce:Math.min(y.end,ae);!M.extend&&ce>Re&&(r=Re,Re=ce,ce=r);var N=zd(p,ce),z=zd(p,Re);if(N&&z&&(M.rangeCount!==1||M.anchorNode!==N.node||M.anchorOffset!==N.offset||M.focusNode!==z.node||M.focusOffset!==z.offset)){var q=G.createRange();q.setStart(N.node,N.offset),M.removeAllRanges(),ce>Re?(M.addRange(q),M.extend(z.node,z.offset)):(q.setEnd(z.node,z.offset),M.addRange(q))}}}}for(G=[],M=p;M=M.parentNode;)M.nodeType===1&&G.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<G.length;p++){var _=G[p];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ki=!!sc,ic=sc=null}finally{De=s,S.p=t,T.T=n}}e.current=a,oa=2}}function Bp(){if(oa===2){oa=0;var e=Fn,a=ro,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var t=S.p;S.p=2;var s=De;De|=4;try{hp(e,a.alternate,a)}finally{De=s,S.p=t,T.T=n}}oa=3}}function Yp(){if(oa===4||oa===3){oa=0,en();var e=Fn,a=ro,n=qn,t=Ep;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?oa=5:(oa=0,ro=Fn=null,Vp(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Wn=null),Lt(n),a=a.stateNode,fa&&typeof fa.onCommitFiberRoot=="function")try{fa.onCommitFiberRoot(Mn,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=T.T,s=S.p,S.p=2,T.T=null;try{for(var i=e.onRecoverableError,r=0;r<t.length;r++){var p=t[r];i(p.value,{componentStack:p.stack})}}finally{T.T=a,S.p=s}}(qn&3)!==0&&Oi(),rn(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Il?cs++:(cs=0,Il=e):cs=0,ds(0)}}function Vp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Qo(a)))}function Oi(){return Rp(),Bp(),Yp(),Qp()}function Qp(){if(oa!==5)return!1;var e=Fn,a=Ql;Ql=0;var n=Lt(qn),t=T.T,s=S.p;try{S.p=32>n?32:n,T.T=null,n=Xl,Xl=null;var i=Fn,r=qn;if(oa=0,ro=Fn=null,qn=0,(De&6)!==0)throw Error(c(331));var p=De;if(De|=4,Sp(i.current),kp(i,i.current,r,n),De=p,ds(0,!1),fa&&typeof fa.onPostCommitFiberRoot=="function")try{fa.onPostCommitFiberRoot(Mn,i)}catch{}return!0}finally{S.p=s,T.T=t,Vp(e,a)}}function Xp(e,a,n){a=Ba(n,a),a=zl(e.stateNode,a,2),e=Xn(e,a,2),e!==null&&(dn(e,2),rn(e))}function Oe(e,a,n){if(e.tag===3)Xp(e,e,n);else for(;a!==null;){if(a.tag===3){Xp(a,e,n);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Wn===null||!Wn.has(t))){e=Ba(n,e),n=Iu(2),t=Xn(a,n,2),t!==null&&(Zu(n,t,a,e),dn(t,2),rn(t));break}}a=a.return}}function Jl(e,a,n){var t=e.pingCache;if(t===null){t=e.pingCache=new Oh;var s=new Set;t.set(a,s)}else s=t.get(a),s===void 0&&(s=new Set,t.set(a,s));s.has(n)||(Bl=!0,s.add(n),e=Bh.bind(null,e,a,n),a.then(e,e))}function Bh(e,a,n){var t=e.pingCache;t!==null&&t.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ye===e&&(ke&n)===n&&(Je===4||Je===3&&(ke&62914560)===ke&&300>ma()-Ai?(De&2)===0&&lo(e,0):Yl|=n,io===ke&&(io=0)),rn(e)}function Ip(e,a){a===0&&(a=Gs()),e=ht(e,a),e!==null&&(dn(e,a),rn(e))}function Yh(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Ip(e,n)}function Vh(e,a){var n=0;switch(e.tag){case 31:case 13:var t=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(c(314))}t!==null&&t.delete(a),Ip(e,n)}function Qh(e,a){return lt(e,a)}var _i=null,uo=null,$l=!1,Gi=!1,Wl=!1,et=0;function rn(e){e!==uo&&e.next===null&&(uo===null?_i=uo=e:uo=uo.next=e),Gi=!0,$l||($l=!0,Ih())}function ds(e,a){if(!Wl&&Gi){Wl=!0;do for(var n=!1,t=_i;t!==null;){if(e!==0){var s=t.pendingLanes;if(s===0)var i=0;else{var r=t.suspendedLanes,p=t.pingedLanes;i=(1<<31-ue(42|e)+1)-1,i&=s&~(r&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,$p(t,i))}else i=ke,i=ct(t,t===Ye?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(i&3)===0||Un(t,i)||(n=!0,$p(t,i));t=t.next}while(n);Wl=!1}}function Xh(){Zp()}function Zp(){Gi=$l=!1;var e=0;et!==0&&ng()&&(e=et);for(var a=ma(),n=null,t=_i;t!==null;){var s=t.next,i=Kp(t,a);i===0?(t.next=null,n===null?_i=s:n.next=s,s===null&&(uo=n)):(n=t,(e!==0||(i&3)!==0)&&(Gi=!0)),t=s}oa!==0&&oa!==5||ds(e),et!==0&&(et=0)}function Kp(e,a){for(var n=e.suspendedLanes,t=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-ue(i),p=1<<r,y=s[r];y===-1?((p&n)===0||(p&t)!==0)&&(s[r]=_s(p,a)):y<=a&&(e.expiredLanes|=p),i&=~p}if(a=Ye,n=ke,n=ct(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,n===0||e===a&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&No(t),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Un(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(t!==null&&No(t),Lt(n)){case 2:case 8:n=Ms;break;case 32:n=Mt;break;case 268435456:n=Ds;break;default:n=Mt}return t=Jp.bind(null,e),n=lt(n,t),e.callbackPriority=a,e.callbackNode=n,a}return t!==null&&t!==null&&No(t),e.callbackPriority=2,e.callbackNode=null,2}function Jp(e,a){if(oa!==0&&oa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var t=ke;return t=ct(e,e===Ye?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Ap(e,t,a),Kp(e,ma()),e.callbackNode!=null&&e.callbackNode===n?Jp.bind(null,e):null)}function $p(e,a){if(Oi())return null;Ap(e,a,!0)}function Ih(){og(function(){(De&6)!==0?lt(Cs,Xh):Zp()})}function Fl(){if(et===0){var e=Jt;e===0&&(e=_a,_a<<=1,(_a&261888)===0&&(_a=256)),et=e}return et}function Wp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Is(""+e)}function Fp(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function Zh(e,a,n,t,s){if(a==="submit"&&n&&n.stateNode===s){var i=Wp((s[ha]||null).action),r=t.submitter;r&&(a=(a=r[ha]||null)?Wp(a.formAction):r.getAttribute("formAction"),a!==null&&(i=a,r=null));var p=new $s("action","action",null,t,s);e.push({event:p,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(et!==0){var y=r?Fp(s,r):new FormData(s);vl(n,{pending:!0,data:y,method:s.method,action:i},null,y)}}else typeof i=="function"&&(p.preventDefault(),y=r?Fp(s,r):new FormData(s),vl(n,{pending:!0,data:y,method:s.method,action:i},i,y))},currentTarget:s}]})}}for(var Pl=0;Pl<Ur.length;Pl++){var ec=Ur[Pl],Kh=ec.toLowerCase(),Jh=ec[0].toUpperCase()+ec.slice(1);Wa(Kh,"on"+Jh)}Wa(Td,"onAnimationEnd"),Wa(Ad,"onAnimationIteration"),Wa(Cd,"onAnimationStart"),Wa("dblclick","onDoubleClick"),Wa("focusin","onFocus"),Wa("focusout","onBlur"),Wa(uh,"onTransitionRun"),Wa(ph,"onTransitionStart"),Wa(mh,"onTransitionCancel"),Wa(Md,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(us));function Pp(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],s=t.event;t=t.listeners;e:{var i=void 0;if(a)for(var r=t.length-1;0<=r;r--){var p=t[r],y=p.instance,E=p.currentTarget;if(p=p.listener,y!==i&&s.isPropagationStopped())break e;i=p,s.currentTarget=E;try{i(s)}catch(U){Ps(U)}s.currentTarget=null,i=y}else for(r=0;r<t.length;r++){if(p=t[r],y=p.instance,E=p.currentTarget,p=p.listener,y!==i&&s.isPropagationStopped())break e;i=p,s.currentTarget=E;try{i(s)}catch(U){Ps(U)}s.currentTarget=null,i=y}}}}function we(e,a){var n=a[Ao];n===void 0&&(n=a[Ao]=new Set);var t=e+"__bubble";n.has(t)||(em(a,e,2,!1),n.add(t))}function ac(e,a,n){var t=0;a&&(t|=4),em(n,e,t,a)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function nc(e){if(!e[Hi]){e[Hi]=!0,Te.forEach(function(n){n!=="selectionchange"&&($h.has(n)||ac(n,!1,e),ac(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Hi]||(a[Hi]=!0,ac("selectionchange",!1,a))}}function em(e,a,n,t){switch(Tm(a)){case 2:var s=zg;break;case 8:s=Sg;break;default:s=bc}n=s.bind(null,a,n,e),s=void 0,!kr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(s=!0),t?s!==void 0?e.addEventListener(a,n,{capture:!0,passive:s}):e.addEventListener(a,n,!0):s!==void 0?e.addEventListener(a,n,{passive:s}):e.addEventListener(a,n,!1)}function tc(e,a,n,t,s){var i=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var r=t.tag;if(r===3||r===4){var p=t.stateNode.containerInfo;if(p===s)break;if(r===4)for(r=t.return;r!==null;){var y=r.tag;if((y===3||y===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;p!==null;){if(r=_n(p),r===null)return;if(y=r.tag,y===5||y===6||y===26||y===27){t=i=r;continue e}p=p.parentNode}}t=t.return}sd(function(){var E=i,U=yr(n),G=[];e:{var A=Dd.get(e);if(A!==void 0){var M=$s,ae=e;switch(e){case"keypress":if(Ks(n)===0)break e;case"keydown":case"keyup":M=Vf;break;case"focusin":ae="focus",M=Nr;break;case"focusout":ae="blur",M=Nr;break;case"beforeblur":case"afterblur":M=Nr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=If;break;case Td:case Ad:case Cd:M=Lf;break;case Md:M=Kf;break;case"scroll":case"scrollend":M=Tf;break;case"wheel":M=$f;break;case"copy":case"cut":case"paste":M=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=dd;break;case"toggle":case"beforetoggle":M=Ff}var ce=(a&4)!==0,Re=!ce&&(e==="scroll"||e==="scrollend"),N=ce?A!==null?A+"Capture":null:A;ce=[];for(var z=E,q;z!==null;){var _=z;if(q=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||q===null||N===null||(_=Do(z,N),_!=null&&ce.push(ps(z,_,q))),Re)break;z=z.return}0<ce.length&&(A=new M(A,ae,null,n,U),G.push({event:A,listeners:ce}))}}if((a&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",A&&n!==xr&&(ae=n.relatedTarget||n.fromElement)&&(_n(ae)||ae[On]))break e;if((M||A)&&(A=U.window===U?U:(A=U.ownerDocument)?A.defaultView||A.parentWindow:window,M?(ae=n.relatedTarget||n.toElement,M=E,ae=ae?_n(ae):null,ae!==null&&(Re=f(ae),ce=ae.tag,ae!==Re||ce!==5&&ce!==27&&ce!==6)&&(ae=null)):(M=null,ae=E),M!==ae)){if(ce=ld,_="onMouseLeave",N="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(ce=dd,_="onPointerLeave",N="onPointerEnter",z="pointer"),Re=M==null?A:Y(M),q=ae==null?A:Y(ae),A=new ce(_,z+"leave",M,n,U),A.target=Re,A.relatedTarget=q,_=null,_n(U)===E&&(ce=new ce(N,z+"enter",ae,n,U),ce.target=q,ce.relatedTarget=Re,_=ce),Re=_,M&&ae)a:{for(ce=Wh,N=M,z=ae,q=0,_=N;_;_=ce(_))q++;_=0;for(var ie=z;ie;ie=ce(ie))_++;for(;0<q-_;)N=ce(N),q--;for(;0<_-q;)z=ce(z),_--;for(;q--;){if(N===z||z!==null&&N===z.alternate){ce=N;break a}N=ce(N),z=ce(z)}ce=null}else ce=null;M!==null&&am(G,A,M,ce,!1),ae!==null&&Re!==null&&am(G,Re,ae,ce,!0)}}e:{if(A=E?Y(E):window,M=A.nodeName&&A.nodeName.toLowerCase(),M==="select"||M==="input"&&A.type==="file")var Ae=vd;else if(gd(A))if(xd)Ae=lh;else{Ae=ih;var oe=sh}else M=A.nodeName,!M||M.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&vr(E.elementType)&&(Ae=vd):Ae=rh;if(Ae&&(Ae=Ae(e,E))){bd(G,Ae,n,U);break e}oe&&oe(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&br(A,"number",A.value)}switch(oe=E?Y(E):window,e){case"focusin":(gd(oe)||oe.contentEditable==="true")&&(Bt=oe,Mr=E,Bo=null);break;case"focusout":Bo=Mr=Bt=null;break;case"mousedown":Dr=!0;break;case"contextmenu":case"mouseup":case"dragend":Dr=!1,qd(G,n,U);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":qd(G,n,U)}var be;if(Er)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Rt?fd(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(ud&&n.locale!=="ko"&&(Rt||je!=="onCompositionStart"?je==="onCompositionEnd"&&Rt&&(be=id()):(Gn=U,jr="value"in Gn?Gn.value:Gn.textContent,Rt=!0)),oe=Ri(E,je),0<oe.length&&(je=new cd(je,e,null,n,U),G.push({event:je,listeners:oe}),be?je.data=be:(be=hd(n),be!==null&&(je.data=be)))),(be=eh?ah(e,n):nh(e,n))&&(je=Ri(E,"onBeforeInput"),0<je.length&&(oe=new cd("onBeforeInput","beforeinput",null,n,U),G.push({event:oe,listeners:je}),oe.data=be)),Zh(G,e,E,n,U)}Pp(G,a)})}function ps(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Ri(e,a){for(var n=a+"Capture",t=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Do(e,n),s!=null&&t.unshift(ps(e,s,i)),s=Do(e,a),s!=null&&t.push(ps(e,s,i))),e.tag===3)return t;e=e.return}return[]}function Wh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function am(e,a,n,t,s){for(var i=a._reactName,r=[];n!==null&&n!==t;){var p=n,y=p.alternate,E=p.stateNode;if(p=p.tag,y!==null&&y===t)break;p!==5&&p!==26&&p!==27||E===null||(y=E,s?(E=Do(n,i),E!=null&&r.unshift(ps(n,E,y))):s||(E=Do(n,i),E!=null&&r.push(ps(n,E,y)))),n=n.return}r.length!==0&&e.push({event:a,listeners:r})}var Fh=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function nm(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(Ph,"")}function tm(e,a){return a=nm(a),nm(e)===a}function He(e,a,n,t,s,i){switch(n){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||_t(e,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&_t(e,""+t);break;case"className":Qs(e,"class",t);break;case"tabIndex":Qs(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(e,n,t);break;case"style":td(e,t,i);break;case"data":if(a!=="object"){Qs(e,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(n);break}t=Is(""+t),e.setAttribute(n,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(a!=="input"&&He(e,a,"name",s.name,s,null),He(e,a,"formEncType",s.formEncType,s,null),He(e,a,"formMethod",s.formMethod,s,null),He(e,a,"formTarget",s.formTarget,s,null)):(He(e,a,"encType",s.encType,s,null),He(e,a,"method",s.method,s,null),He(e,a,"target",s.target,s,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(n);break}t=Is(""+t),e.setAttribute(n,t);break;case"onClick":t!=null&&(e.onclick=pn);break;case"onScroll":t!=null&&we("scroll",e);break;case"onScrollEnd":t!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(n=t.__html,n!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}n=Is(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,""+t):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":t===!0?e.setAttribute(n,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(n,t):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(n,t):e.removeAttribute(n);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(n):e.setAttribute(n,t);break;case"popover":we("beforetoggle",e),we("toggle",e),Vs(e,"popover",t);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Vs(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qf.get(n)||n,Vs(e,n,t))}}function oc(e,a,n,t,s,i){switch(n){case"style":td(e,t,i);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(n=t.__html,n!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof t=="string"?_t(e,t):(typeof t=="number"||typeof t=="bigint")&&_t(e,""+t);break;case"onScroll":t!=null&&we("scroll",e);break;case"onScrollEnd":t!=null&&we("scrollend",e);break;case"onClick":t!=null&&(e.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ra.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),i=e[ha]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(a,i,s),typeof t=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,t,s);break e}n in e?e[n]=t:t===!0?e.setAttribute(n,""):Vs(e,n,t)}}}function ua(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var t=!1,s=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":t=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:He(e,a,i,r,n,null)}}s&&He(e,a,"srcSet",n.srcSet,n,null),t&&He(e,a,"src",n.src,n,null);return;case"input":we("invalid",e);var p=i=r=s=null,y=null,E=null;for(t in n)if(n.hasOwnProperty(t)){var U=n[t];if(U!=null)switch(t){case"name":s=U;break;case"type":r=U;break;case"checked":y=U;break;case"defaultChecked":E=U;break;case"value":i=U;break;case"defaultValue":p=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,a));break;default:He(e,a,t,U,n,null)}}Pc(e,i,p,y,E,r,s,!1);return;case"select":we("invalid",e),t=r=i=null;for(s in n)if(n.hasOwnProperty(s)&&(p=n[s],p!=null))switch(s){case"value":i=p;break;case"defaultValue":r=p;break;case"multiple":t=p;default:He(e,a,s,p,n,null)}a=i,n=r,e.multiple=!!t,a!=null?Ot(e,!!t,a,!1):n!=null&&Ot(e,!!t,n,!0);return;case"textarea":we("invalid",e),i=s=t=null;for(r in n)if(n.hasOwnProperty(r)&&(p=n[r],p!=null))switch(r){case"value":t=p;break;case"defaultValue":s=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:He(e,a,r,p,n,null)}ad(e,t,s,i);return;case"option":for(y in n)n.hasOwnProperty(y)&&(t=n[y],t!=null)&&(y==="selected"?e.selected=t&&typeof t!="function"&&typeof t!="symbol":He(e,a,y,t,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(t=0;t<us.length;t++)we(us[t],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(t=n[E],t!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:He(e,a,E,t,n,null)}return;default:if(vr(a)){for(U in n)n.hasOwnProperty(U)&&(t=n[U],t!==void 0&&oc(e,a,U,t,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(t=n[p],t!=null&&He(e,a,p,t,n,null))}function eg(e,a,n,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,r=null,p=null,y=null,E=null,U=null;for(M in n){var G=n[M];if(n.hasOwnProperty(M)&&G!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":y=G;default:t.hasOwnProperty(M)||He(e,a,M,null,t,G)}}for(var A in t){var M=t[A];if(G=n[A],t.hasOwnProperty(A)&&(M!=null||G!=null))switch(A){case"type":i=M;break;case"name":s=M;break;case"checked":E=M;break;case"defaultChecked":U=M;break;case"value":r=M;break;case"defaultValue":p=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,a));break;default:M!==G&&He(e,a,A,M,t,G)}}gr(e,r,p,y,E,U,i,s);return;case"select":M=r=p=A=null;for(i in n)if(y=n[i],n.hasOwnProperty(i)&&y!=null)switch(i){case"value":break;case"multiple":M=y;default:t.hasOwnProperty(i)||He(e,a,i,null,t,y)}for(s in t)if(i=t[s],y=n[s],t.hasOwnProperty(s)&&(i!=null||y!=null))switch(s){case"value":A=i;break;case"defaultValue":p=i;break;case"multiple":r=i;default:i!==y&&He(e,a,s,i,t,y)}a=p,n=r,t=M,A!=null?Ot(e,!!n,A,!1):!!t!=!!n&&(a!=null?Ot(e,!!n,a,!0):Ot(e,!!n,n?[]:"",!1));return;case"textarea":M=A=null;for(p in n)if(s=n[p],n.hasOwnProperty(p)&&s!=null&&!t.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:He(e,a,p,null,t,s)}for(r in t)if(s=t[r],i=n[r],t.hasOwnProperty(r)&&(s!=null||i!=null))switch(r){case"value":A=s;break;case"defaultValue":M=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==i&&He(e,a,r,s,t,i)}ed(e,A,M);return;case"option":for(var ae in n)A=n[ae],n.hasOwnProperty(ae)&&A!=null&&!t.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:He(e,a,ae,null,t,A));for(y in t)A=t[y],M=n[y],t.hasOwnProperty(y)&&A!==M&&(A!=null||M!=null)&&(y==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":He(e,a,y,A,t,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in n)A=n[ce],n.hasOwnProperty(ce)&&A!=null&&!t.hasOwnProperty(ce)&&He(e,a,ce,null,t,A);for(E in t)if(A=t[E],M=n[E],t.hasOwnProperty(E)&&A!==M&&(A!=null||M!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,a));break;default:He(e,a,E,A,t,M)}return;default:if(vr(a)){for(var Re in n)A=n[Re],n.hasOwnProperty(Re)&&A!==void 0&&!t.hasOwnProperty(Re)&&oc(e,a,Re,void 0,t,A);for(U in t)A=t[U],M=n[U],!t.hasOwnProperty(U)||A===M||A===void 0&&M===void 0||oc(e,a,U,A,t,M);return}}for(var N in n)A=n[N],n.hasOwnProperty(N)&&A!=null&&!t.hasOwnProperty(N)&&He(e,a,N,null,t,A);for(G in t)A=t[G],M=n[G],!t.hasOwnProperty(G)||A===M||A==null&&M==null||He(e,a,G,A,t,M)}function om(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ag(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),t=0;t<n.length;t++){var s=n[t],i=s.transferSize,r=s.initiatorType,p=s.duration;if(i&&p&&om(r)){for(r=0,p=s.responseEnd,t+=1;t<n.length;t++){var y=n[t],E=y.startTime;if(E>p)break;var U=y.transferSize,G=y.initiatorType;U&&om(G)&&(y=y.responseEnd,r+=U*(y<p?1:(p-E)/(y-E)))}if(--t,a+=8*(i+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sc=null,ic=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function sm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function im(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function rc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var lc=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===lc?!1:(lc=e,!0):(lc=null,!1)}var rm=typeof setTimeout=="function"?setTimeout:void 0,tg=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(sg)}:rm;function sg(e){setTimeout(function(){throw e})}function at(e){return e==="head"}function cm(e,a){var n=a,t=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(t===0){e.removeChild(s),ho(a);return}t--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")t++;else if(n==="html")ms(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ms(n);for(var i=n.firstChild;i;){var r=i.nextSibling,p=i.nodeName;i[ut]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&ms(e.ownerDocument.body);n=s}while(n);ho(a)}function dm(e,a){var n=e;e=0;do{var t=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),t&&t.nodeType===8)if(n=t.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=t}while(n)}function cc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cc(n),Ut(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ig(e,a,n,t){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[ut])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ia(e.nextSibling),e===null)break}return null}function rg(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ia(e.nextSibling),e===null))return null;return e}function um(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ia(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$?"||e.data==="$~"}function uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lg(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var t=function(){a(),n.removeEventListener("DOMContentLoaded",t)};n.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Ia(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var pc=null;function pm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Ia(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function mm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function fm(e,a,n){switch(a=Bi(n),e){case"html":if(e=a.documentElement,!e)throw Error(c(452));return e;case"head":if(e=a.head,!e)throw Error(c(453));return e;case"body":if(e=a.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ms(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ut(e)}var Za=new Map,hm=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var En=S.d;S.d={f:cg,r:dg,D:ug,C:pg,L:mg,m:fg,X:gg,S:hg,M:bg};function cg(){var e=En.f(),a=Di();return e||a}function dg(e){var a=k(e);a!==null&&a.tag===5&&a.type==="form"?Mu(a):En.r(e)}var po=typeof document>"u"?null:document;function gm(e,a,n){var t=po;if(t&&typeof a=="string"&&a){var s=Ha(a);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),hm.has(s)||(hm.add(s),e={rel:e,crossOrigin:n,href:a},t.querySelector(s)===null&&(a=t.createElement("link"),ua(a,"link",e),se(a),t.head.appendChild(a)))}}function ug(e){En.D(e),gm("dns-prefetch",e,null)}function pg(e,a){En.C(e,a),gm("preconnect",e,a)}function mg(e,a,n){En.L(e,a,n);var t=po;if(t&&e&&a){var s='link[rel="preload"][as="'+Ha(a)+'"]';a==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ha(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ha(n.imageSizes)+'"]')):s+='[href="'+Ha(e)+'"]';var i=s;switch(a){case"style":i=mo(e);break;case"script":i=fo(e)}Za.has(i)||(e=j({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Za.set(i,e),t.querySelector(s)!==null||a==="style"&&t.querySelector(fs(i))||a==="script"&&t.querySelector(hs(i))||(a=t.createElement("link"),ua(a,"link",e),se(a),t.head.appendChild(a)))}}function fg(e,a){En.m(e,a);var n=po;if(n&&e){var t=a&&typeof a.as=="string"?a.as:"script",s='link[rel="modulepreload"][as="'+Ha(t)+'"][href="'+Ha(e)+'"]',i=s;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=fo(e)}if(!Za.has(i)&&(e=j({rel:"modulepreload",href:e},a),Za.set(i,e),n.querySelector(s)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hs(i)))return}t=n.createElement("link"),ua(t,"link",e),se(t),n.head.appendChild(t)}}}function hg(e,a,n){En.S(e,a,n);var t=po;if(t&&e){var s=J(t).hoistableStyles,i=mo(e);a=a||"default";var r=s.get(i);if(!r){var p={loading:0,preload:null};if(r=t.querySelector(fs(i)))p.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Za.get(i))&&mc(e,n);var y=r=t.createElement("link");se(y),ua(y,"link",e),y._p=new Promise(function(E,U){y.onload=E,y.onerror=U}),y.addEventListener("load",function(){p.loading|=1}),y.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Vi(r,a,t)}r={type:"stylesheet",instance:r,count:1,state:p},s.set(i,r)}}}function gg(e,a){En.X(e,a);var n=po;if(n&&e){var t=J(n).hoistableScripts,s=fo(e),i=t.get(s);i||(i=n.querySelector(hs(s)),i||(e=j({src:e,async:!0},a),(a=Za.get(s))&&fc(e,a),i=n.createElement("script"),se(i),ua(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(s,i))}}function bg(e,a){En.M(e,a);var n=po;if(n&&e){var t=J(n).hoistableScripts,s=fo(e),i=t.get(s);i||(i=n.querySelector(hs(s)),i||(e=j({src:e,async:!0,type:"module"},a),(a=Za.get(s))&&fc(e,a),i=n.createElement("script"),se(i),ua(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(s,i))}}function bm(e,a,n,t){var s=(s=he.current)?Yi(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=mo(n.href),n=J(s).hoistableStyles,t=n.get(a),t||(t={type:"style",instance:null,count:0,state:null},n.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=mo(n.href);var i=J(s).hoistableStyles,r=i.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=s.querySelector(fs(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Za.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Za.set(e,n),i||vg(s,e,n,r.state))),a&&t===null)throw Error(c(528,""));return r}if(a&&t!==null)throw Error(c(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=fo(n),n=J(s).hoistableScripts,t=n.get(a),t||(t={type:"script",instance:null,count:0,state:null},n.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function mo(e){return'href="'+Ha(e)+'"'}function fs(e){return'link[rel="stylesheet"]['+e+"]"}function vm(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function vg(e,a,n,t){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=e.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),ua(a,"link",n),se(a),e.head.appendChild(a))}function fo(e){return'[src="'+Ha(e)+'"]'}function hs(e){return"script[async]"+e}function xm(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var t=e.querySelector('style[data-href~="'+Ha(n.href)+'"]');if(t)return a.instance=t,se(t),t;var s=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),se(t),ua(t,"style",s),Vi(t,n.precedence,e),a.instance=t;case"stylesheet":s=mo(n.href);var i=e.querySelector(fs(s));if(i)return a.state.loading|=4,a.instance=i,se(i),i;t=vm(n),(s=Za.get(s))&&mc(t,s),i=(e.ownerDocument||e).createElement("link"),se(i);var r=i;return r._p=new Promise(function(p,y){r.onload=p,r.onerror=y}),ua(i,"link",t),a.state.loading|=4,Vi(i,n.precedence,e),a.instance=i;case"script":return i=fo(n.src),(s=e.querySelector(hs(i)))?(a.instance=s,se(s),s):(t=n,(s=Za.get(i))&&(t=j({},n),fc(t,s)),e=e.ownerDocument||e,s=e.createElement("script"),se(s),ua(s,"link",t),e.head.appendChild(s),a.instance=s);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Vi(t,n.precedence,e));return a.instance}function Vi(e,a,n){for(var t=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=t.length?t[t.length-1]:null,i=s,r=0;r<t.length;r++){var p=t[r];if(p.dataset.precedence===a)i=p;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function mc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function fc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Qi=null;function ym(e,a,n){if(Qi===null){var t=new Map,s=Qi=new Map;s.set(n,t)}else s=Qi,t=s.get(n),t||(t=new Map,s.set(n,t));if(t.has(e))return t;for(t.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var i=n[s];if(!(i[ut]||i[_e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(a)||"";r=e+r;var p=t.get(r);p?p.push(i):t.set(r,[i])}}return t}function wm(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function xg(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function km(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yg(e,a,n,t){if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=mo(t.href),i=a.querySelector(fs(s));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Xi.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=i,se(i);return}i=a.ownerDocument||a,t=vm(t),(s=Za.get(s))&&mc(t,s),i=i.createElement("link"),se(i);var r=i;r._p=new Promise(function(p,y){r.onload=p,r.onerror=y}),ua(i,"link",t),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Xi.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var hc=0;function wg(e,a){return e.stylesheets&&e.count===0&&Zi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var t=setTimeout(function(){if(e.stylesheets&&Zi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&hc===0&&(hc=62500*ag());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>hc?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(s)}}:null}function Xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ii=null;function Zi(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ii=new Map,a.forEach(kg,e),Ii=null,Xi.call(e))}function kg(e,a){if(!(a.state.loading&4)){var n=Ii.get(e);if(n)var t=n.get(null);else{n=new Map,Ii.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var r=s[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),t=r)}t&&n.set(null,t)}s=a.instance,r=s.getAttribute("data-precedence"),i=n.get(r)||t,i===t&&n.set(null,s),n.set(r,s),this.count++,t=Xi.bind(this),s.addEventListener("load",t),s.addEventListener("error",t),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),a.state.loading|=4}}var gs={$$typeof:ee,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function jg(e,a,n,t,s,i,r,p,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.hiddenUpdates=qo(null),this.identifierPrefix=t,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function jm(e,a,n,t,s,i,r,p,y,E,U,G){return e=new jg(e,a,n,r,y,E,U,G,p),a=1,i===!0&&(a|=24),i=Ca(3,null,null,a),e.current=i,i.stateNode=e,a=Kr(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:t,isDehydrated:n,cache:a},Fr(i),e}function zm(e){return e?(e=Qt,e):Qt}function Sm(e,a,n,t,s,i){s=zm(s),t.context===null?t.context=s:t.pendingContext=s,t=Qn(a),t.payload={element:n},i=i===void 0?null:i,i!==null&&(t.callback=i),n=Xn(e,t,a),n!==null&&(Ea(n,e,a),Ko(n,e,a))}function Nm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function gc(e,a){Nm(e,a),(e=e.alternate)&&Nm(e,a)}function qm(e){if(e.tag===13||e.tag===31){var a=ht(e,67108864);a!==null&&Ea(a,e,67108864),gc(e,67108864)}}function Em(e){if(e.tag===13||e.tag===31){var a=Oa();a=Dt(a);var n=ht(e,a);n!==null&&Ea(n,e,a),gc(e,a)}}var Ki=!0;function zg(e,a,n,t){var s=T.T;T.T=null;var i=S.p;try{S.p=2,bc(e,a,n,t)}finally{S.p=i,T.T=s}}function Sg(e,a,n,t){var s=T.T;T.T=null;var i=S.p;try{S.p=8,bc(e,a,n,t)}finally{S.p=i,T.T=s}}function bc(e,a,n,t){if(Ki){var s=vc(t);if(s===null)tc(e,a,t,Ji,n),Am(e,t);else if(qg(s,e,a,n,t))t.stopPropagation();else if(Am(e,t),a&4&&-1<Ng.indexOf(e)){for(;s!==null;){var i=k(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=ba(i.pendingLanes);if(r!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;r;){var y=1<<31-ue(r);p.entanglements[1]|=y,r&=~y}rn(i),(De&6)===0&&(Ci=ma()+500,ds(0))}}break;case 31:case 13:p=ht(i,2),p!==null&&Ea(p,i,2),Di(),gc(i,2)}if(i=vc(t),i===null&&tc(e,a,t,Ji,n),i===s)break;s=i}s!==null&&t.stopPropagation()}else tc(e,a,t,null,n)}}function vc(e){return e=yr(e),xc(e)}var Ji=null;function xc(e){if(Ji=null,e=_n(e),e!==null){var a=f(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=v(a),e!==null)return e;e=null}else if(n===31){if(e=h(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Ji=e,null}function Tm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(As()){case Cs:return 2;case Ms:return 8;case Mt:case dr:return 32;case Ds:return 268435456;default:return 32}default:return 32}}var yc=!1,nt=null,tt=null,ot=null,bs=new Map,vs=new Map,st=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,a){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":bs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(a.pointerId)}}function xs(e,a,n,t,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:n,eventSystemFlags:t,nativeEvent:i,targetContainers:[s]},a!==null&&(a=k(a),a!==null&&qm(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,s!==null&&a.indexOf(s)===-1&&a.push(s),e)}function qg(e,a,n,t,s){switch(a){case"focusin":return nt=xs(nt,e,a,n,t,s),!0;case"dragenter":return tt=xs(tt,e,a,n,t,s),!0;case"mouseover":return ot=xs(ot,e,a,n,t,s),!0;case"pointerover":var i=s.pointerId;return bs.set(i,xs(bs.get(i)||null,e,a,n,t,s)),!0;case"gotpointercapture":return i=s.pointerId,vs.set(i,xs(vs.get(i)||null,e,a,n,t,s)),!0}return!1}function Cm(e){var a=_n(e.target);if(a!==null){var n=f(a);if(n!==null){if(a=n.tag,a===13){if(a=v(n),a!==null){e.blockedOn=a,dt(e.priority,function(){Em(n)});return}}else if(a===31){if(a=h(n),a!==null){e.blockedOn=a,dt(e.priority,function(){Em(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);xr=t,n.target.dispatchEvent(t),xr=null}else return a=k(n),a!==null&&qm(a),e.blockedOn=n,!1;a.shift()}return!0}function Mm(e,a,n){$i(e)&&n.delete(a)}function Eg(){yc=!1,nt!==null&&$i(nt)&&(nt=null),tt!==null&&$i(tt)&&(tt=null),ot!==null&&$i(ot)&&(ot=null),bs.forEach(Mm),vs.forEach(Mm)}function Wi(e,a){e.blockedOn===a&&(e.blockedOn=null,yc||(yc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Eg)))}var Fi=null;function Dm(e){Fi!==e&&(Fi=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Fi===e&&(Fi=null);for(var a=0;a<e.length;a+=3){var n=e[a],t=e[a+1],s=e[a+2];if(typeof t!="function"){if(xc(t||n)===null)continue;break}var i=k(n);i!==null&&(e.splice(a,3),a-=3,vl(i,{pending:!0,data:s,method:n.method,action:t},t,s))}}))}function ho(e){function a(y){return Wi(y,e)}nt!==null&&Wi(nt,e),tt!==null&&Wi(tt,e),ot!==null&&Wi(ot,e),bs.forEach(a),vs.forEach(a);for(var n=0;n<st.length;n++){var t=st[n];t.blockedOn===e&&(t.blockedOn=null)}for(;0<st.length&&(n=st[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&st.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(t=0;t<n.length;t+=3){var s=n[t],i=n[t+1],r=s[ha]||null;if(typeof i=="function")r||Dm(n);else if(r){var p=null;if(i&&i.hasAttribute("formAction")){if(s=i,r=i[ha]||null)p=r.formAction;else if(xc(s)!==null)continue}else p=r.action;typeof p=="function"?n[t+1]=p:(n.splice(t,3),t-=3),Dm(n)}}}function Lm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function a(){s!==null&&(s(),s=null),t||setTimeout(n,20)}function n(){if(!t&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),s!==null&&(s(),s=null)}}}function wc(e){this._internalRoot=e}Pi.prototype.render=wc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));var n=a.current,t=Oa();Sm(n,t,e,a,null,null)},Pi.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Sm(e.current,2,null,e,null,null),Di(),a[On]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var a=To();e={blockedOn:null,target:e,priority:a};for(var n=0;n<st.length&&a!==0&&a<st[n].priority;n++);st.splice(n,0,e),n===0&&Cm(e)}};var Um=u.version;if(Um!=="19.2.5")throw Error(c(527,Um,"19.2.5"));S.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(a),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Tg={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{Mn=er.inject(Tg),fa=er}catch{}}return ws.createRoot=function(e,a){if(!m(e))throw Error(c(299));var n=!1,t="",s=Yu,i=Vu,r=Qu;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=jm(e,1,!1,null,null,n,t,null,s,i,r,Lm),e[On]=a.current,nc(e),new wc(a)},ws.hydrateRoot=function(e,a,n){if(!m(e))throw Error(c(299));var t=!1,s="",i=Yu,r=Vu,p=Qu,y=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),a=jm(e,1,!0,a,n??null,t,s,y,i,r,p,Lm),a.context=zm(null),n=a.current,t=Oa(),t=Dt(t),s=Qn(t),s.callback=null,Xn(n,s,t),n=t,a.current.lanes=n,dn(a,n),rn(a),e[On]=a.current,nc(e),new Pi(a)},ws.version="19.2.5",ws}var Xm;function Rg(){if(Xm)return zc.exports;Xm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),zc.exports=Hg(),zc.exports}var Bg=Rg();function Yg(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const l="/Learn-Spanish/";navigator.serviceWorker.register(`${l}sw.js`,{scope:l}).then(u=>{function d(c){window.dispatchEvent(new CustomEvent("learn-spanish-update-ready",{detail:{worker:c}}))}u.waiting&&navigator.serviceWorker.controller&&d(u.waiting),u.addEventListener("updatefound",()=>{const c=u.installing;c&&c.addEventListener("statechange",()=>{c.state==="installed"&&navigator.serviceWorker.controller&&d(c)})})}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.__learnSpanishRefreshing||(window.__learnSpanishRefreshing=!0,window.location.reload())})})}const Vg="modulepreload",Qg=function(l){return"/Learn-Spanish/"+l},Im={},Xg=function(u,d,c){let m=Promise.resolve();if(d&&d.length>0){let g=function(w){return Promise.all(w.map(j=>Promise.resolve(j).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};var v=g;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),b=h?.nonce||h?.getAttribute("nonce");m=g(d.map(w=>{if(w=Qg(w),w in Im)return;Im[w]=!0;const j=w.endsWith(".css"),C=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${C}`))return;const D=document.createElement("link");if(D.rel=j?"stylesheet":Vg,j||(D.as="script"),D.crossOrigin="",D.href=w,b&&D.setAttribute("nonce",b),document.head.appendChild(D),j)return new Promise((H,B)=>{D.addEventListener("load",H),D.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${w}`)))})}))}function f(h){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=h,window.dispatchEvent(b),!b.defaultPrevented)throw h}return m.then(h=>{for(const b of h||[])b.status==="rejected"&&f(b.reason);return u().catch(f)})};const Ig=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),of=(...l)=>l.filter((u,d,c)=>!!u&&u.trim()!==""&&c.indexOf(u)===d).join(" ").trim();var Zg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Kg=L.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:m="",children:f,iconNode:v,...h},b)=>L.createElement("svg",{ref:b,...Zg,width:u,height:u,stroke:l,strokeWidth:c?Number(d)*24/Number(u):d,className:of("lucide",m),...h},[...v.map(([g,w])=>L.createElement(g,w)),...Array.isArray(f)?f:[f]]));const Be=(l,u)=>{const d=L.forwardRef(({className:c,...m},f)=>L.createElement(Kg,{ref:f,iconNode:u,className:of(`lucide-${Ig(l)}`,c),...m}));return d.displayName=`${l}`,d};const Bc=Be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const sf=Be("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const zo=Be("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const Jg=Be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const Yc=Be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const qs=Be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const $g=Be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Tt=Be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const lr=Be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Vc=Be("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const rf=Be("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const lf=Be("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);const ko=Be("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const Wg=Be("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const So=Be("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const Fg=Be("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const Pg=Be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const eb=Be("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const Qc=Be("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const cf=Be("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);const Xc=Be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Lc=Be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const At=Be("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const ar=Be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const nr=Be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Uc=Be("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const An=Be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Oc=Be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function sr(l,u={}){typeof window>"u"||window.dispatchEvent(new CustomEvent("learn-spanish-message",{detail:{id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,title:u.title||"Notice",message:l,tone:u.tone||"info",timeout:u.timeout||5200}}))}function ab(){const[l,u]=L.useState([]);return L.useEffect(()=>{function d(c){const m=c.detail||{};m.message&&(u(f=>[m,...f].slice(0,3)),m.timeout!==1/0&&window.setTimeout(()=>{u(f=>f.filter(v=>v.id!==m.id))},m.timeout||5200))}return window.addEventListener("learn-spanish-message",d),()=>window.removeEventListener("learn-spanish-message",d)},[]),l.length?o.jsx("div",{className:"app-message-stack","aria-live":"polite","aria-atomic":"false",children:l.map(d=>o.jsxs("div",{className:`app-message app-message-${d.tone||"info"}`,children:[o.jsxs("div",{children:[o.jsx("span",{className:"app-message-title",children:d.title}),o.jsx("p",{children:d.message})]}),o.jsx("button",{type:"button",className:"app-message-close",onClick:()=>u(c=>c.filter(m=>m.id!==d.id)),"aria-label":"Dismiss message",children:o.jsx(An,{size:14})})]},d.id))}):null}let Et=null,Zm=!1,jo={rate:.85,voiceURI:""};function df(){return Math.max(.65,Math.min(1.25,Number(jo.rate)||.85))}function Ss(l={}){jo={...jo,...l,rate:Math.max(.65,Math.min(1.25,Number(l.rate??jo.rate)||.85))},Et=null}function uf(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function Km(){return uf().filter(l=>l.lang&&l.lang.toLowerCase().startsWith("es")||/spanish|espanol|espaÃ±ol/i.test(l.name||""))}function vo(){if(typeof window>"u"||!window.speechSynthesis)return null;if(Et)return Et;const l=uf();if(l.length===0)return null;if(jo.voiceURI){const c=l.find(m=>m.voiceURI===jo.voiceURI);if(c)return Et=c,c}const u=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const c of u){const m=l.find(f=>f.lang&&f.lang.toLowerCase().startsWith(c.toLowerCase()));if(m)return Et=m,m}const d=l.find(c=>/spanish|español/i.test(c.name||""));return d?(Et=d,d):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{Et=null,vo()}),vo(),setTimeout(vo,250),setTimeout(vo,1e3));function Ic(){if(!Zm&&!(typeof window>"u"||!window.speechSynthesis))try{const l=new SpeechSynthesisUtterance(" ");l.volume=0,l.rate=1,window.speechSynthesis.speak(l),Zm=!0}catch{}}function Ns(){try{window.speechSynthesis?.cancel(),window.dispatchEvent?.(new CustomEvent("learn-spanish-audio-stop"))}catch{}}function pf(l,u={}){if(typeof window>"u"||!window.speechSynthesis||!l)return u.onerror&&u.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const d=new SpeechSynthesisUtterance(l),c=vo();c&&(d.voice=c),d.lang=c?.lang||"es-ES",d.rate=u.rate??df(),d.pitch=u.pitch??1,d.volume=1,u.onend&&(d.onend=u.onend),u.onerror&&(d.onerror=v=>{console.warn("[speech] error:",v?.error||"unknown",{text:l.slice(0,30),voice:c?.name}),u.onerror(v)}),u.onboundary&&(d.onboundary=u.onboundary),u.onstart&&(d.onstart=u.onstart),window.speechSynthesis.speak(d);const m=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(m);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),f=d.onend;return d.onend=v=>{clearInterval(m),f&&f(v)},d}catch(d){return console.warn("[speech] threw:",d),u.onerror&&u.onerror({error:d.message}),null}}const Jm=/([\p{L}\p{N}]+)|([^\p{L}\p{N}]+)/gu;function mf(l){const u=[],d=String(l||"");let c;for(Jm.lastIndex=0;(c=Jm.exec(d))!==null;)u.push({text:c[0],isWord:!!c[1],charStart:c.index});return u}function sa({text:l}){const u=L.useMemo(()=>mf(l),[l]);return o.jsx(o.Fragment,{children:u.map((d,c)=>d.isWord?o.jsx("span",{className:"dict-word-token","data-dict-word":d.text,children:d.text},c):o.jsx("span",{children:d.text},c))})}function Es({text:l,paragraphClass:u="reading-paragraph",firstParagraph:d=!1}){const c=L.useMemo(()=>mf(l),[l]),m=L.useMemo(()=>{const B=[];let W="",X=[],F=-1;function ee(){X.length>0&&B.push({spokenText:W.trim(),words:X}),W="",X=[],F=-1}for(let P=0;P<c.length;P++){const re=c[P];if(!re.isWord&&X.length===0&&/^\s+$/.test(re.text))continue;const le=W.length;W+=re.text,re.isWord?(X.push({tokenIdx:P,text:re.text,charStart:le,charEnd:le+re.text.length,commaAfter:!1}),F=X.length-1):(/,/.test(re.text)&&F>=0&&(X[F].commaAfter=!0),/[.!?;:]/.test(re.text)&&ee())}return ee(),B},[c]),[f,v]=L.useState(-1),[h,b]=L.useState(!1),g=cn.useRef([]),w=cn.useRef([]),j=cn.useRef(!1),C=cn.useRef(110);function D(){w.current.forEach(clearTimeout),w.current=[]}function H(B){if(B.stopPropagation(),typeof window>"u"||!window.speechSynthesis){sr("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(Ic(),h){j.current=!0,Ns(),D(),b(!1),v(-1);return}if(m.length===0)return;Ns(),D(),j.current=!1,b(!0),C.current=110;let W=0;function X(){if(j.current)return;if(W>=m.length){b(!1),v(-1);return}const F=m[W];if(!F||F.words.length===0){W++,X();return}const ee=new SpeechSynthesisUtterance(F.spokenText),P=vo();P&&(ee.voice=P),ee.lang=P?.lang||"es-ES",ee.rate=df(),ee.pitch=1;let re=!1,le=!1,te=!1,K=!1,ve=0;const ne=30,fe=200;function Me(R){const Z=Math.max(0,Number(R)||0);let $=F.words[0];for(const x of F.words)if(x.charStart<=Z+1)$=x;else break;return $}function Ne(){if(K||te||j.current)return;K=!0;let R=0;for(let Z=0;Z<F.words.length;Z++){const $=F.words[Z],O=setTimeout(()=>{!j.current&&!te&&v($.tokenIdx)},R);w.current.push(O),R+=$.text.length*C.current+ne,$.commaAfter&&(R+=fe)}}ee.onstart=()=>{if(re)return;re=!0,ve=performance.now();const R=setTimeout(Ne,350);w.current.push(R)},ee.onboundary=R=>{if(j.current||typeof R.charIndex!="number")return;const Z=Me(R.charIndex);Z&&(te=!0,v(Z.tokenIdx))};const pe=setTimeout(()=>{!re&&!j.current&&(re=!0,ve=performance.now(),Ne())},500);w.current.push(pe);function xe(){if(le||(le=!0,j.current))return;if(ve>0){const Z=performance.now()-ve,$=F.words.reduce((I,de)=>I+de.text.length,0),x=F.words.filter(I=>I.commaAfter).length,O=F.words.length*ne+x*fe,Q=Math.max(100,Z-O);if($>0){const I=Q/$;I>=40&&I<=300&&(C.current=I*.6+C.current*.4)}}D(),W++;const R=setTimeout(X,30);w.current.push(R)}ee.onend=xe,ee.onerror=xe;const T=Math.max(5e3,F.spokenText.length*220),S=setTimeout(xe,T);w.current.push(S),window.speechSynthesis.speak(ee)}X()}return L.useEffect(()=>{function B(){j.current=!0,D(),b(!1),v(-1)}return window.addEventListener?.("learn-spanish-audio-stop",B),()=>{j.current=!0,D(),window.removeEventListener?.("learn-spanish-audio-stop",B),window.speechSynthesis?.cancel()}},[]),L.useEffect(()=>{if(f<0)return;const B=g.current[f];if(!B||typeof B.getBoundingClientRect!="function")return;const W=B.getBoundingClientRect(),X=window.innerHeight||document.documentElement.clientHeight;(W.bottom>X-100||W.top<80)&&B.scrollIntoView({behavior:"smooth",block:"center"})},[f]),typeof window<"u"&&!window.speechSynthesis?o.jsxs("p",{className:u,children:[o.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:B=>{B.stopPropagation(),sr("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"})},"aria-label":"Audio not supported",title:"Audio no disponible",children:o.jsx(Uc,{size:12})}),o.jsx(sa,{text:l})]}):o.jsxs("p",{className:`${u} karaoke-paragraph ${h?"is-playing":""}`,children:[o.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${h?"playing":""}`,onClick:H,onPointerDown:B=>B.stopPropagation(),"aria-label":h?"Stop":"Play audio with highlighting",title:h?"Detener":"Escuchar con resaltado",children:o.jsx(Uc,{size:12})}),c.map((B,W)=>{if(!B.isWord)return o.jsx("span",{className:"kt-space",children:B.text},W);const X=W===f;return o.jsx("span",{ref:F=>g.current[W]=F,className:`kt-word ${X?"kt-active":""}`,"data-dict-word":B.text,children:B.text},W)})]})}function Pe({text:l,size:u="sm",className:d=""}){const[c,m]=L.useState(!1);L.useEffect(()=>{function v(){m(!1)}return window.addEventListener?.("learn-spanish-audio-stop",v),()=>window.removeEventListener?.("learn-spanish-audio-stop",v)},[]);function f(v){if(v.stopPropagation(),typeof window>"u"||!window.speechSynthesis){sr("Tu navegador no soporta lectura en voz alta.",{title:"Audio no disponible",tone:"warning"});return}if(Ic(),c){Ns(),m(!1);return}Ns(),m(!0),pf(l,{onend:()=>m(!1),onerror:h=>{m(!1),h?.error&&h.error!=="canceled"&&h.error!=="interrupted"&&sr(`Error al leer: ${h.error}. Asegurate de tener una voz en espanol instalada.`,{title:"Audio necesita atencion",tone:"warning"})}})}return o.jsx("button",{className:`speak-btn speak-btn-${u} ${c?"playing":""} ${d}`,onClick:f,onPointerDown:v=>v.stopPropagation(),"aria-label":c?"Stop":"Play audio",title:c?"Detener":"Escuchar",children:o.jsx(Uc,{size:u==="sm"?12:14})})}function nb({settings:l,onChange:u}){const[d,c]=L.useState(()=>Km());L.useEffect(()=>{Ss(l)},[l]),L.useEffect(()=>{function f(){c(Km())}if(f(),typeof window<"u"&&window.speechSynthesis){window.speechSynthesis.addEventListener?.("voiceschanged",f);const v=setTimeout(f,600);return()=>{clearTimeout(v),window.speechSynthesis.removeEventListener?.("voiceschanged",f)}}},[]);function m(f){const v={...l,...f};Ss(v),u?.(v)}return o.jsxs("div",{className:"audio-settings","aria-label":"Audio settings",children:[o.jsxs("div",{className:"audio-settings-label",children:[o.jsx(lf,{size:14}),"Audio"]}),o.jsxs("select",{className:"audio-rate-select",value:String(l.rate),onChange:f=>m({rate:Number(f.target.value)}),"aria-label":"Audio speed",children:[o.jsx("option",{value:"0.7",children:"0.70x"}),o.jsx("option",{value:"0.85",children:"0.85x"}),o.jsx("option",{value:"1",children:"1.00x"}),o.jsx("option",{value:"1.15",children:"1.15x"})]}),o.jsxs("select",{className:"audio-voice-select",value:l.voiceURI||"",onChange:f=>m({voiceURI:f.target.value}),"aria-label":"Spanish voice",children:[o.jsx("option",{value:"",children:"Voz espanola"}),d.map(f=>o.jsxs("option",{value:f.voiceURI,children:[f.name," (",f.lang,")"]},f.voiceURI))]})]})}function rt({es:l,en:u,esClass:d="vu-ex-es",enClass:c="vu-ex-en"}){const m=(l||"").length,f=(u||"").length;return m<=18&&f<=18&&m+f<=36?o.jsxs("div",{className:`${d} inline-pair`,children:[o.jsx(Pe,{text:l}),o.jsx(sa,{text:l})," ",o.jsxs("span",{className:`${c} inline-en`,children:["(",u,")"]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:d,children:[o.jsx(Pe,{text:l}),o.jsx(sa,{text:l})]}),o.jsx("div",{className:c,children:u})]})}const tb=`
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
`,ob=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],sb={id:"tiempos-compuestos-indicativo",level:"B1-B2",title:"Tiempos Compuestos del Indicativo",subtitle:"haber + participio para acciones completadas",intro:"Compound tenses in the indicative present completed actions as facts: something has happened, had happened, will have happened, or would have happened. The engine is always the same: haber changes, the participle stays fixed.",blocks:[{type:"indicative-hero",eyebrow:"Gramática Española · Nivel B1-B2",title:"Tiempos Compuestos del Indicativo",text:"Compound tenses are formed with the auxiliary verb haber plus a past participle. They express actions completed before a reference point in time.",formula:["haber conjugado","+","participio pasado","=","tiempo compuesto"],tags:["6 tiempos","haber + participio","perfecto · pluscuamperfecto · futuro · condicional"]},{type:"indicative-tense-cards",title:"Los 6 tiempos compuestos",cards:[{tone:"green",title:"Pretérito Perfecto",english:"Present perfect",use:"An action completed recently or connected to the present. Often used with hoy, esta semana, ya, todavía no.",forms:[["yo","he hablado"],["tú","has comido"],["él / ella","ha vivido"],["nosotros","hemos llegado"],["vosotros","habéis visto"],["ellos","han hecho"]],example:{es:"Ya he terminado el informe.",en:"I have already finished the report."}},{tone:"red",title:"Pretérito Pluscuamperfecto",english:"Past perfect / pluperfect",use:"An action completed before another past action. This is the past of the past.",forms:[["yo","había hablado"],["tú","habías comido"],["él / ella","había vivido"],["nosotros","habíamos llegado"],["vosotros","habíais salido"],["ellos","habían visto"]],example:{es:"Cuando llegué, ella ya había salido.",en:"When I arrived, she had already left."}},{tone:"teal",title:"Futuro Compuesto",english:"Future perfect",use:"An action that will have been completed before a future point. It can also express probability about the past.",forms:[["yo","habré hablado"],["tú","habrás comido"],["él / ella","habrá vivido"],["nosotros","habremos llegado"],["vosotros","habréis terminado"],["ellos","habrán vuelto"]],example:{es:"Para el lunes, habré enviado el contrato.",en:"By Monday, I will have sent the contract."}},{tone:"purple",title:"Condicional Compuesto",english:"Conditional perfect",use:"An action that would have happened under different circumstances. It often pairs with si + pluscuamperfecto de subjuntivo.",forms:[["yo","habría hablado"],["tú","habrías comido"],["él / ella","habría vivido"],["nosotros","habríamos ido"],["vosotros","habríais dicho"],["ellos","habrían hecho"]],example:{es:"Si hubiera estudiado, habría aprobado.",en:"If I had studied, I would have passed."}},{tone:"gold",title:"Pretérito Anterior",english:"Past anterior, literary",use:"An action completed immediately before another past action. Mostly literary or formal written Spanish after cuando, apenas, en cuanto, no bien.",forms:[["yo","hube hablado"],["tú","hubiste comido"],["él / ella","hubo vivido"],["nosotros","hubimos llegado"],["vosotros","hubisteis salido"],["ellos","hubieron visto"]],example:{es:"Apenas hubo llegado, empezó a hablar.",en:"He had barely arrived when he began to speak."}},{tone:"navy",title:"Condicional vía subjuntivo",english:"Spoken alternative",use:"In spoken Spanish, hubiera/hubiese + participio is often used like the conditional perfect, especially in Latin America.",forms:[["yo","hubiera ido"],["tú","hubieras comido"],["él / ella","hubiera dicho"],["nosotros","hubiéramos llegado"],["vosotros","hubierais hecho"],["ellos","hubieran visto"]],example:{es:"Yo hubiera venido antes. (= habría venido)",en:"I would have come earlier."}}]},{type:"participio-section",title:"El participio pasado",text:"The past participle is the second element of every compound tense. In these compound tenses it is invariable: it does not change for gender or number.",regular:[["-AR verbs","→ -ado"],["hablar","hablado"],["trabajar","trabajado"],["-ER / -IR verbs","→ -ido"],["comer","comido"],["vivir","vivido"]],irregular:[["abrir","abierto"],["decir","dicho"],["escribir","escrito"],["hacer","hecho"],["morir","muerto"],["poner","puesto"],["romper","roto"],["ver","visto"],["volver","vuelto"]]},{type:"indicative-timeline",title:"Timeline visual",events:[{label:"Pluscuam.",sub:"past of past",position:8,lane:"top",tone:"red"},{label:"Anterior",sub:"just before past",position:23,lane:"top",tone:"gold"},{label:"Perfecto",sub:"connects to now",position:40,lane:"bottom",tone:"green"},{label:"Ahora",sub:"reference point",position:50,lane:"now",tone:"ink"},{label:"Fut. compuesto",sub:"will have done",position:68,lane:"top",tone:"teal"},{label:"Cond. comp.",sub:"would have done",position:86,lane:"top",tone:"purple"}]},{type:"tips-grid",tips:[{title:"The haber/adverb rule",text:"In compound tenses, nothing goes between haber and the participle. Say Ya he comido, not He ya comido."},{title:"Spain vs. Latin America",text:"In Spain, pretérito perfecto is common for recent past. In most of Latin America, speakers often prefer the simple pretérito: comí, salí, terminé."}]},{type:"choice-quiz",title:"Quiz: tiempos compuestos del indicativo",questions:[{prompt:"Cuando llegué, ella ya ___.",choices:["ha salido","había salido","habrá salido","habría salido"],answer:"había salido",explanation:"Pluscuamperfecto: había salido. The action was completed before another past action."},{prompt:"Hoy ___ el contrato.",choices:["había firmado","habré firmado","he firmado","hube firmado"],answer:"he firmado",explanation:"Pretérito perfecto: he firmado. A recent action connected to the present."},{prompt:"Para mañana, nosotros ___ todo.",choices:["habíamos terminado","habremos terminado","hemos terminado","habríamos terminado"],answer:"habremos terminado",explanation:"Futuro compuesto: habremos terminado. The action will be completed before a future deadline."},{prompt:"Yo ___ la casa, pero no tenía dinero.",choices:["habría comprado","había comprado","he comprado","habré comprado"],answer:"habría comprado",explanation:"Condicional compuesto: habría comprado. It describes what would have happened under different conditions."},{prompt:"Apenas ___ la carta, salió corriendo.",choices:["había leído","ha leído","hubo leído","habría leído"],answer:"hubo leído",explanation:"Pretérito anterior: hubo leído. A literary form for an action immediately before another past event."},{prompt:"¿Alguna vez ___ en México?",choices:["habías estado","has estado","habrás estado","hube estado"],answer:"has estado",explanation:"Pretérito perfecto: has estado. It is used for life experience connected to the present."},{prompt:"Dijo que no ___ la notificación.",choices:["ha recibido","habrá recibido","habría recibido","había recibido"],answer:"había recibido",explanation:"Pluscuamperfecto: había recibido. The receiving would have happened before the reported past statement."}]}]},ib={id:"tiempos-compuestos",level:"B1-B2",title:"Tiempos compuestos",subtitle:"Pretérito perfecto y pluscuamperfecto de subjuntivo",intro:"This lesson is about completed actions inside the subjunctive world: emotion, doubt, desire, negation, and unreal conditions. The action is finished, but the sentence does not present it as a plain fact.",blocks:[{type:"subjunctive-hero",eyebrow:"Regla central",title:"El subjuntivo compuesto nunca camina solo.",accent:"Siempre aparece provocado por una idea principal.",points:["It is always triggered by another clause or expression.","It usually lives in a subordinate clause after que or si.","It shows a completed action seen through emotion, doubt, desire, denial, or hypothesis."],formula:"trigger + que/si + haber en subjuntivo + participio"},{type:"golden-rule",title:"Golden rule",text:"Never use these forms alone as the main message. They signal that a subordinate action was completed before another viewpoint.",examples:[{bad:"Haya terminado el informe.",good:"Me alegra que haya terminado el informe."},{bad:"Hubiera sabido la verdad.",good:"Ojalá hubiera sabido la verdad."}]},{type:"subjunctive-tense-cards",cards:[{tone:"plum",title:"Pretérito Perfecto de Subjuntivo",english:"Present perfect subjunctive",formula:"haya / hayas / haya / hayamos / hayáis / hayan + participio",use:"Use it when the main clause is present or future, and the subordinate action is already complete or must be complete by a future point.",mainClause:"present / future main clause",forms:[["yo","haya hablado"],["tú","hayas comido"],["él / ella","haya vivido"],["nosotros","hayamos terminado"],["vosotros","hayáis visto"],["ellos","hayan hecho"]],examples:[{es:"Me alegra que hayas venido.",en:"I am glad that you came / have come."},{es:"Dudo que hayan firmado el contrato.",en:"I doubt that they have signed the contract."},{es:"Necesito que lo hayas revisado antes del lunes.",en:"I need you to have reviewed it before Monday."}]},{tone:"rose",title:"Pretérito Pluscuamperfecto de Subjuntivo",english:"Past perfect subjunctive",formula:"hubiera/hubiese + participio",use:"Use it with past or conditional main clauses, regrets, past doubts, and unreal si clauses. Hubiera and hubiese mean the same thing here.",mainClause:"past / conditional / si clause",forms:[["yo","hubiera / hubiese hablado"],["tú","hubieras / hubieses comido"],["él / ella","hubiera / hubiese vivido"],["nosotros","hubiéramos / hubiésemos terminado"],["vosotros","hubierais / hubieseis visto"],["ellos","hubieran / hubiesen hecho"]],examples:[{es:"No creía que hubieras leído todo.",en:"I did not believe that you had read everything."},{es:"Ojalá hubiera sabido la verdad.",en:"I wish I had known the truth."},{es:"Si hubiéramos salido antes, habríamos llegado a tiempo.",en:"If we had left earlier, we would have arrived on time."}]}]},{type:"trigger-grid",heading:"Trigger expressions",text:"Do not memorize the tense alone. Memorize the doorway that opens it.",categories:[{title:"Emotion",trigger:"me alegra que, me sorprende que, siento que",examples:[{es:"Me alegra que hayas entendido la explicación.",en:"I am glad you understood the explanation."},{es:"Me sorprendió que hubieran aceptado tan rápido.",en:"It surprised me that they had accepted so quickly."}]},{title:"Doubt / negation",trigger:"dudo que, no creo que, no parece que",examples:[{es:"No creo que ella haya mentido.",en:"I do not think she has lied."},{es:"No parecía que hubieran preparado nada.",en:"It did not seem that they had prepared anything."}]},{title:"Desire / wish",trigger:"quiero que, espero que, ojalá",examples:[{es:"Espero que hayas descansado bien.",en:"I hope you rested well."},{es:"Ojalá hubiéramos hablado antes.",en:"I wish we had spoken earlier."}]},{title:"Hypothetical si clauses",trigger:"si + pluscuamperfecto de subjuntivo",examples:[{es:"Si me hubieras llamado, habría venido.",en:"If you had called me, I would have come."},{es:"Si hubiesen revisado el contrato, no habrían firmado.",en:"If they had reviewed the contract, they would not have signed."}]}]},{type:"lesson-section",heading:"Perfecto vs. pluscuamperfecto",text:"Choose the tense by looking at the main clause. Present or future frame usually points to haya hablado. Past, conditional, regret, or unreal si frame points to hubiera/hubiese hablado.",table:{headers:["Question","Perfecto de subjuntivo","Pluscuamperfecto de subjuntivo"],rows:[["Main clause time","present or future","past or conditional"],["Formula","haya + participio","hubiera / hubiese + participio"],["Meaning","has done / did / will have done","had done / would have done in an unreal past"],["Common triggers","me alegra que, dudo que, espero que","no creía que, ojalá, si"],["Example","Dudo que haya salido.","Dudaba que hubiera salido."]]}},{type:"conditional-pattern",heading:"Conditional irreal: the pattern you must own",formula:"Si + hubiera/hubiese + participio, habría + participio",text:"This is the most important structure in the whole lesson. The si clause names the impossible past condition; the conditional perfect names the result that did not happen.",examples:[{es:"Si hubiera estudiado más, habría aprobado el examen.",en:"If I had studied more, I would have passed the exam.",note:"Condition did not happen: I did not study enough."},{es:"Si me hubieras avisado, habría preparado los documentos.",en:"If you had warned me, I would have prepared the documents.",note:"The warning did not happen, so the preparation did not happen."},{es:"Si hubiésemos salido temprano, no habríamos perdido el tren.",en:"If we had left early, we would not have missed the train.",note:"Hubiésemos is the same value as hubiéramos: more formal or literary in many places."}]},{type:"tips-grid",tips:[{title:"Hubiera vs. hubiese",text:"Both forms are correct. Hubiera is more common in everyday Spanish. Hubiese sounds a little more formal, literary, or careful, depending on the country."},{title:"The special behavior of ojalá",text:"Ojalá can point to different time frames: ojalá haya llegado means I hope he has arrived; ojalá hubiera llegado means I wish he had arrived, but he probably did not."}]},{type:"choice-quiz",title:"Quiz: completed actions in subjunctive frames",questions:[{prompt:"Me alegra que tú ___ a tiempo.",choices:["hayas llegado","hubieras llegado","has llegado","habrías llegado"],answer:"hayas llegado",explanation:"Me alegra que is a present emotion trigger, so use pretérito perfecto de subjuntivo: hayas llegado."},{prompt:"No creía que ellos ___ el mensaje.",choices:["hayan recibido","hubieran recibido","han recibido","habrán recibido"],answer:"hubieran recibido",explanation:"No creía is a past doubt/negation frame, so the prior completed action uses pluscuamperfecto de subjuntivo."},{prompt:"Espero que nosotros ___ todo antes de mañana.",choices:["hayamos terminado","hubiéramos terminado","hemos terminado","habíamos terminado"],answer:"hayamos terminado",explanation:"Espero que looks forward from the present to a completed future deadline: hayamos terminado."},{prompt:"Si me lo ___, te habría ayudado.",choices:["hayas dicho","hubieras dicho","has dicho","habrías dicho"],answer:"hubieras dicho",explanation:"Si + unreal past condition requires pluscuamperfecto de subjuntivo: hubieras dicho."},{prompt:"Dudo que Ana ___ la verdad.",choices:["haya dicho","hubiera dicho","ha dicho","había dicho"],answer:"haya dicho",explanation:"Dudo que is a present doubt trigger, so use haya + participio."},{prompt:"Ojalá ___ más temprano.",choices:["hayamos salido","hubiéramos salido","hemos salido","habremos salido"],answer:"hubiéramos salido",explanation:"With ojalá, pluscuamperfecto often expresses regret about the past: I wish we had left earlier."},{prompt:"Era imposible que vosotros ___ eso solos.",choices:["hayáis hecho","hubierais hecho","habéis hecho","habríais hecho"],answer:"hubierais hecho",explanation:"Era imposible is a past evaluative trigger, so use pluscuamperfecto de subjuntivo."},{prompt:"Necesito que usted lo ___ antes del lunes.",choices:["haya revisado","hubiera revisado","ha revisado","habría revisado"],answer:"haya revisado",explanation:"Necesito que is a present desire/requirement trigger. The task must be completed before a future point: haya revisado."}]}]},rb={soy:["ser"],eres:["ser"],es:["ser"],somos:["ser"],son:["ser"],fui:["ser","ir"],fuiste:["ser","ir"],fue:["ser","ir"],fuimos:["ser","ir"],fueron:["ser","ir"],era:["ser"],eras:["ser"],eramos:["ser"],eran:["ser"],estoy:["estar"],estas:["estar"],esta:["estar"],estamos:["estar"],estan:["estar"],estuve:["estar"],estuvo:["estar"],estuvieron:["estar"],tengo:["tener"],tienes:["tener"],tiene:["tener"],tenemos:["tener"],tienen:["tener"],tuve:["tener"],tuvo:["tener"],tuvieron:["tener"],voy:["ir"],vas:["ir"],va:["ir"],vamos:["ir"],van:["ir"],iba:["ir"],ibas:["ir"],iban:["ir"],puedo:["poder"],puedes:["poder"],puede:["poder"],podemos:["poder"],pueden:["poder"],pude:["poder"],pudo:["poder"],pudieron:["poder"],quiero:["querer"],quieres:["querer"],quiere:["querer"],queremos:["querer"],quieren:["querer"],quise:["querer"],quiso:["querer"],hago:["hacer"],haces:["hacer"],hace:["hacer"],hacemos:["hacer"],hacen:["hacer"],hice:["hacer"],hizo:["hacer"],hicieron:["hacer"],digo:["decir"],dices:["decir"],dice:["decir"],decimos:["decir"],dicen:["decir"],dije:["decir"],dijo:["decir"],dijeron:["decir"],veo:["ver"],ves:["ver"],ve:["ver"],vemos:["ver"],ven:["ver"],vi:["ver"],vio:["ver"],vieron:["ver"],vengo:["venir"],vienes:["venir"],viene:["venir"],vienen:["venir"],vine:["venir"],vino:["venir"],vinieron:["venir"],pongo:["poner"],pones:["poner"],pone:["poner"],ponen:["poner"],puse:["poner"],puso:["poner"],pusieron:["poner"],salgo:["salir"],sales:["salir"],sale:["salir"],salen:["salir"],se:["saber","ser"],sabe:["saber"],saben:["saber"],supe:["saber"],supo:["saber"],dijeron:["decir"],doy:["dar"],das:["dar"],da:["dar"],dan:["dar"],di:["dar","decir"],dio:["dar"],dieron:["dar"]},lb=new Set(["si","sí","tu","tú","el","él","mi","mí","te","té","se","sé","de","dé","mas","más","esta","está"]),$m={si:{main:"if",pos:"conjunction",source:"Local dictionary",stored:!0},sí:{main:"yes",pos:"affirmation",source:"Local dictionary",stored:!0},tu:{main:"your",pos:"possessive adjective",source:"Local dictionary",stored:!0},tú:{main:"you",pos:"subject pronoun",source:"Local dictionary",stored:!0},el:{main:"the",pos:"article",source:"Local dictionary",stored:!0},él:{main:"he",pos:"subject pronoun",source:"Local dictionary",stored:!0},mi:{main:"my",pos:"possessive adjective",source:"Local dictionary",stored:!0},mí:{main:"me",pos:"prepositional pronoun",source:"Local dictionary",stored:!0},te:{main:"you / to you",pos:"object pronoun",source:"Local dictionary",stored:!0},té:{main:"tea",pos:"noun",source:"Local dictionary",stored:!0},se:{main:"himself / herself / themselves",pos:"reflexive pronoun",source:"Local dictionary",stored:!0},sé:{main:"I know",pos:"verb form of saber",source:"Local dictionary",stored:!0},de:{main:"of / from",pos:"preposition",source:"Local dictionary",stored:!0},dé:{main:"give",pos:"subjunctive/command form of dar",source:"Local dictionary",stored:!0},mas:{main:"but",pos:"formal conjunction",source:"Local dictionary",stored:!0},más:{main:"more",pos:"adverb",source:"Local dictionary",stored:!0},esta:{main:"this",pos:"demonstrative adjective",source:"Local dictionary",stored:!0},está:{main:"is",pos:"verb form of estar",source:"Local dictionary",stored:!0}};function Zc(l){return String(l||"").replace(/Ã¡/g,"á").replace(/Ã©/g,"é").replace(/Ã­/g,"í").replace(/Ã³/g,"ó").replace(/Ãº/g,"ú").replace(/Ã±/g,"ñ").replace(/Ã¼/g,"ü").replace(/Â¡/g,"¡").replace(/Â¿/g,"¿").trim().replace(/^[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+|[\s"'“”‘’¡!¿?.,;:()[\]{}<>*_/\\—–-]+$/gu,"").trim().toLowerCase()}function ir(l){return Cn(l).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Cn(l){return Zc(l).replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function cb(l,u,d,c){if(!u.endsWith(d)||u.length<=d.length+1)return;const m=u.slice(0,-d.length);c.forEach(f=>l.add(`${m}${f}`))}function cr(l){const u=Cn(l),d=ir(l),c=lb.has(u),m=new Set(c?[u]:[u,d]);if(!d)return[];if(c)return[...m].filter(Boolean);for(const f of rb[d]||[])m.add(f);return d.endsWith("ces")&&d.length>5&&m.add(`${d.slice(0,-3)}z`),d.endsWith("es")&&d.length>4&&m.add(d.slice(0,-2)),d.endsWith("s")&&d.length>3&&m.add(d.slice(0,-1)),d.endsWith("as")&&d.length>4&&(m.add(d.slice(0,-1)),m.add(`${d.slice(0,-2)}o`)),d.endsWith("os")&&d.length>4&&m.add(d.slice(0,-1)),d.endsWith("a")&&d.length>3&&m.add(`${d.slice(0,-1)}o`),[["amos",["ar"]],["ando",["ar"]],["ado",["ar"]],["aste",["ar"]],["aron",["ar"]],["aba",["ar"]],["abas",["ar"]],["abamos",["ar"]],["aban",["ar"]],["arian",["ar"]],["aria",["ar"]],["are",["ar"]],["aras",["ar"]],["ara",["ar"]],["as",["ar"]],["an",["ar"]],["a",["ar"]],["e",["ar"]],["o",["ar"]],["emos",["er"]],["iendo",["er","ir"]],["ido",["er","ir"]],["iste",["er","ir"]],["ieron",["er","ir"]],["ia",["er","ir"]],["ias",["er","ir"]],["iamos",["er","ir"]],["ian",["er","ir"]],["eria",["er"]],["irian",["ir"]],["iria",["ir"]],["ere",["er"]],["ire",["ir"]],["es",["er","ir"]],["en",["er","ir"]],["e",["er","ir"]],["imos",["ir"]],["io",["er","ir"]],["i",["er","ir"]],["o",["er","ir"]]].forEach(([f,v])=>cb(m,d,f,v)),[...m].filter(Boolean)}function Wm(l){return l.topicTerm||l.spanish}function db(l){return l.topicEnglish||l.english}function Fm(l,u=[],d=[]){const c=Cn(l),m=new Set(cr(l)),f=u.find(v=>Cn(v.word)===c)||u.find(v=>m.has(ir(v.word)));if(f)return{main:f.translation||"Saved in Memoria",extras:f.extras||[],pos:f.pos||"Memoria",source:"Memoria",stored:!0,matchedWord:f.word};for(const v of d||[])for(const h of v.entries||[]){const b=[h.spanish,h.topicTerm,Wm(h)];if(b.some(g=>Cn(g)===c)||b.some(g=>m.has(ir(g))))return{main:db(h),extras:h.topicEnglish&&h.topicEnglish!==h.english?[h.english].filter(Boolean):[],pos:v.title||h.sourceGroupTitle||"Palabras",source:"Palabras",stored:!0,matchedWord:Wm(h)}}return null}async function ff(l){const u=[],d=Zc(l),c=Cn(d);if($m[c])return{...$m[c],matchedWord:c};const m=[...new Set([d,...cr(d)])].filter(Boolean).slice(0,4),f=b=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(b):void 0;async function v(b){const g=encodeURIComponent(b);try{const w=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${g}&src=es&dst=en`,{signal:f(3500)});if(w.ok){const j=await w.json();if(Array.isArray(j)&&j.length>0){const C=j[0],D=C?.translations?.[0]?.text?.trim();if(D){const H=(C.translations||[]).slice(1,5).map(W=>W.text?.trim()).filter(Boolean),B=[];for(const W of C.translations||[]){for(const X of W.examples||[])X.src&&X.dst&&B.length<2&&B.push({es:X.src,en:X.dst});if(B.length>=2)break}return{main:D,extras:H,pos:C.pos||C.translations?.[0]?.pos||"",examples:B,source:"Linguee",matchedWord:b}}}}else u.push(`Linguee ${b}: HTTP ${w.status}`)}catch(w){u.push(`Linguee ${b}: ${w.message}`)}try{const w=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${g}&pretty=true`,{signal:f(3500)});if(w.ok){const C=(await w.json())?.tuc||[],D=C.map(B=>B?.phrase?.text?.trim()).filter(Boolean),H=C.flatMap(B=>(B?.meanings||[]).map(W=>W?.text?.trim())).filter(Boolean);if(D.length>0){const B=D[0],W=D.slice(1,5).filter(X=>X.toLowerCase()!==B.toLowerCase());return{main:B,extras:W,pos:"",meanings:H.slice(0,3),source:"Glosbe",matchedWord:b}}}else u.push(`Glosbe ${b}: HTTP ${w.status}`)}catch(w){u.push(`Glosbe ${b}: ${w.message}`)}try{const w=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${g}`,{signal:f(3500)});if(w.ok){const j=await w.json();if(Array.isArray(j)&&j.length>0){const D=j[0]?.meanings?.[0],H=D?.definitions?.[0]?.definition?.trim();if(H)return{main:H,extras:[],pos:D?.partOfSpeech||"",source:"Diccionario",isDefinition:!0,matchedWord:b}}}else u.push(`FreeDict ${b}: HTTP ${w.status}`)}catch(w){u.push(`FreeDict ${b}: ${w.message}`)}return null}for(const b of m){const g=await v(b);if(g)return g}const h=encodeURIComponent(d);try{const b=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${h}`,{signal:f(4e3)});if(b.ok){const w=(await b.json())?.sentences?.[0]?.trans?.trim();if(w&&w.toLowerCase()!==d.toLowerCase())return{main:w,extras:[],pos:"",source:"Google"}}}catch(b){u.push(`Google: ${b.message}`)}try{const b=await fetch(`https://api.mymemory.translated.net/get?q=${h}&langpair=es|en`,{signal:f(4e3)});if(b.ok){const w=(await b.json())?.responseData?.translatedText?.trim();if(w&&w.toLowerCase()!==d.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(w))return{main:w,extras:[],pos:"",source:"MyMemory"}}}catch(b){u.push(`MyMemory: ${b.message}`)}return u.length&&console.warn("Lookup failed for",l,u),null}const ks="study-time-v1";function hf(l=new Date){return l.toISOString().slice(0,10)}function xo(l={}){const u=hf(),d=l.date===u?l.date:u,c=l.date===u?Math.max(0,Number(l.todaySeconds)||0):0;return{totalSeconds:Math.max(0,Number(l.totalSeconds)||0),todaySeconds:c,date:d,byChapter:l.byChapter&&typeof l.byChapter=="object"?l.byChapter:{},updatedAt:l.updatedAt||Date.now()}}function ub(l={},u={}){const d=xo(l),c=xo(u),m={};for(const f of new Set([...Object.keys(c.byChapter||{}),...Object.keys(d.byChapter||{})]))m[f]=Math.max(Number(d.byChapter?.[f])||0,Number(c.byChapter?.[f])||0);return{totalSeconds:Math.max(d.totalSeconds,c.totalSeconds),todaySeconds:Math.max(d.todaySeconds,c.todaySeconds),date:hf(),byChapter:m,updatedAt:Math.max(Number(d.updatedAt)||0,Number(c.updatedAt)||0,Date.now())}}function js(l=0){const u=Math.max(0,Math.floor(Number(l)||0)),d=Math.floor(u/3600),c=Math.floor(u%3600/60);return d>0?`${d}h ${String(c).padStart(2,"0")}m`:c>0?`${c}m`:`${u}s`}const tr="google-drive-client-id-v1",gf="learn-spanish-sync.json",pb="https://www.googleapis.com/auth/drive.appdata";let Ec=null;function mb(){return typeof window>"u"?Promise.reject(new Error("No browser window")):window.google?.accounts?.oauth2?Promise.resolve(window.google):(Ec||(Ec=new Promise((l,u)=>{const d=document.createElement("script");d.src="https://accounts.google.com/gsi/client",d.async=!0,d.defer=!0,d.onload=()=>l(window.google),d.onerror=()=>u(new Error("Could not load Google sign-in")),document.head.appendChild(d)})),Ec)}async function Pm(l,u=""){const d=await mb();return new Promise((c,m)=>{d.accounts.oauth2.initTokenClient({client_id:l,scope:pb,prompt:u,callback:v=>{v?.access_token?c(v.access_token):m(new Error(v?.error||"Google sign-in failed"))},error_callback:v=>m(new Error(v?.message||"Google sign-in failed"))}).requestAccessToken()})}async function Kc(l,u,d={}){const c=await fetch(u,{...d,headers:{...d.headers||{},Authorization:`Bearer ${l}`}});if(!c.ok){const m=await c.text().catch(()=>"");throw new Error(m||`Google Drive HTTP ${c.status}`)}return c}async function fb(l){const u=new URLSearchParams({spaces:"appDataFolder",fields:"files(id,name,modifiedTime)",q:`name='${gf}' and trashed=false`});return((await(await Kc(l,`https://www.googleapis.com/drive/v3/files?${u}`)).json()).files||[])[0]||null}async function hb(l,u){return u?(await Kc(l,`https://www.googleapis.com/drive/v3/files/${u}?alt=media`)).json():null}async function gb(l,u,d=null){const c=d?{}:{name:gf,parents:["appDataFolder"]},m=`learn-spanish-${Date.now()}`,f=[`--${m}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(c),`--${m}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify(u),`--${m}--`].join(`\r
`),v=d?`https://www.googleapis.com/upload/drive/v3/files/${d}?uploadType=multipart`:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";await Kc(l,v,{method:d?"PATCH":"POST",headers:{"Content-Type":`multipart/related; boundary=${m}`},body:f})}function bb(l={},u={}){const d={...u};for(const[c,m]of Object.entries(l||{})){const f=d[c],v=m?.reviewedAt||m?.dueAt||0,h=f?.reviewedAt||f?.dueAt||0;d[c]=v>=h?m:f}return d}function vb(l=[],u=[]){const d=new Map;for(const c of[...u,...l]){const m=Cn(c.word),f=d.get(m);if(!f){d.set(m,c);continue}const v=Math.max(f.savedAt||0,f.translatedAt||0,f.review?.reviewedAt||0),h=Math.max(c.savedAt||0,c.translatedAt||0,c.review?.reviewedAt||0),b=h>=v?c:f,g=h>=v?f:c;d.set(m,{...g,...b,tags:Array.from(new Set([...g.tags||[],...b.tags||[]])),extras:Array.from(new Set([...g.extras||[],...b.extras||[]])),favorite:!!(g.favorite||b.favorite),difficult:!!(g.difficult||b.difficult),review:(b.review?.reviewedAt||0)>=(g.review?.reviewedAt||0)?b.review:g.review})}return[...d.values()].sort((c,m)=>(m.savedAt||0)-(c.savedAt||0))}function xb(l={},u={}){const d={...u,...l};for(const c of new Set([...Object.keys(l||{}),...Object.keys(u||{})]))l[c]==="understood"||u[c]==="understood"?d[c]="understood":(l[c]==="read"||u[c]==="read")&&(d[c]="read");return d}function yb(l,u){if(!u)return l;const d=Date.parse(l.exportedAt||"")||0,c=Date.parse(u.exportedAt||"")||0,m=d>=c?l:u;return{...m,app:"Learn Spanish",version:4,exportedAt:new Date().toISOString(),savedWords:vb(l.savedWords,u.savedWords),visitedChapters:Array.from(new Set([...u.visitedChapters||[],...l.visitedChapters||[]])),palabrasProgress:bb(l.palabrasProgress,u.palabrasProgress),lessonStatuses:xb(l.lessonStatuses,u.lessonStatuses),studyTime:ub(l.studyTime,u.studyTime),writingEntries:[...new Map([...u.writingEntries||[],...l.writingEntries||[]].map(f=>[f.id,f])).values()].sort((f,v)=>(v.createdAt||0)-(f.createdAt||0)).slice(0,80),booxMode:!!m.booxMode,fontScale:m.fontScale,audioSettings:m.audioSettings,translationMode:m.translationMode}}const wb=1440*60*1e3,kb="learner-profile-v1";function Tn(l){return String(l||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}function jb(l,u,d=Date.now()){const c=l?.intervalDays||0,m=l?.ease||2.35,f=l?.reps||0,v={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:f?2:1,multiplier:m},easy:{label:"Easy",easeDelta:.12,minDays:f?4:3,multiplier:m+.7}}[u]||{label:"Good",easeDelta:0,minDays:1,multiplier:m},h=Math.max(1.35,Math.min(3.2,m+v.easeDelta)),b=u==="again"?v.minDays:Math.max(v.minDays,(c||1)*v.multiplier);return{...l,ease:h,intervalDays:b,dueAt:d+b*wb,reps:u==="again"?0:f+1,lapses:u==="again"?(l?.lapses||0)+1:l?.lapses||0,seen:!0,mastered:u==="easy"||b>=7,lastRating:v.label,reviewedAt:d}}function zb(l){const u=[l.title,l.heading,l.text];for(const d of l.paragraphs||[])u.push(d);for(const d of l.pairs||[])u.push(d.es,d.en);for(const d of l.columns||[])u.push(d.es,d.en);for(const d of l.phrases||[])u.push(d.es,d.en);for(const d of l.words||[])u.push(d.es,d.en);for(const d of l.lessons||[]){u.push(d.title,d.subtitle,d.intro);for(const c of d.sections||[]){u.push(c.heading,c.text,c.tip,c.takeaway);for(const m of c.table?.rows||[])u.push(...m);for(const m of c.examples||[])u.push(m.es,m.en)}}for(const d of l.stories||[])u.push(d.title,d.level,...d.paragraphs||[]);for(const d of l.bios||[]){u.push(d.title,d.subtitle,d.dates);for(const c of d.levels||[])u.push(c.heading,...c.paragraphs||[],c.vocab)}for(const d of l.poems||[]){u.push(d.title,d.attribution,d.note,d.opening,d.learningNote);for(const c of d.stanzas||[])u.push(c.es,c.en);for(const c of d.vocab||[])u.push(c.es,c.en)}for(const d of l.songs||[]){u.push(d.title,d.attribution,d.note,d.learningNote);for(const c of d.sections||[])u.push(c.label,c.es,c.en);for(const c of d.vocab||[])u.push(c.es,c.en)}return u.filter(Boolean).join(" ")}function Sb(l,u,d=[],c=[]){const m=Tn(l);if(m.length<2)return[];const f=[];for(const h of u||[]){const b=[h.title,h.subtitle,h.intro,h.sectionLabel,h.level].filter(Boolean).join(" ");Tn(b).includes(m)&&f.push({type:"chapter",title:h.title,meta:`${h.sectionLabel} - ${h.level}`,chapter:h,context:h.subtitle||h.intro||""});for(const g of h.blocks||[]){const w=zb(g);Tn(w).includes(m)&&f.push({type:"match",title:h.title,meta:`${h.sectionLabel} - match inside lesson`,chapter:h,context:ef(w,l)})}}for(const h of d||[]){const b=[h.word,h.translation,h.pos,...h.tags||[]].join(" ");Tn(b).includes(m)&&f.push({type:"memoria",title:h.word,meta:h.translation||"Memoria",context:(h.tags||[]).join(", ")})}for(const h of c||[]){const b=[h.prompt,h.text].join(" ");Tn(b).includes(m)&&f.push({type:"writing",title:"Writing entry",meta:new Date(h.createdAt||Date.now()).toLocaleDateString(),context:ef(b,l)})}const v=new Set;return f.filter(h=>{const b=`${h.type}:${h.title}:${h.context}`;return v.has(b)?!1:(v.add(b),!0)}).slice(0,18)}function ef(l,u){const d=String(l||"").replace(/\s+/g," ").trim(),c=Tn(u),m=d.toLowerCase().indexOf(String(u||"").toLowerCase());if(m>=0)return d.slice(Math.max(0,m-45),m+95).trim();let f="";const v=[];for(let w=0;w<d.length;w++){const j=d[w].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"");if(j)for(const C of j)f+=C,v.push(w)}const h=f.indexOf(c);if(h<0)return d.slice(0,120);const b=v[Math.max(0,h-45)]??0,g=v[Math.min(v.length-1,h+c.length+95)]??d.length;return d.slice(b,g).trim()}function Nb(l,u={}){const d=String(l||""),c=Tn(d),m=d.trim()?d.trim().split(/\s+/).length:0,f=d.split(/[.!?]+/).map(ee=>ee.trim()).filter(Boolean),v=(d.match(/[.!?]/g)||[]).length||(f.length?1:0),h=(d.match(/[áéíóúñüÁÉÍÓÚÑÜ]/g)||[]).length,b=(d.match(/\b(pero|porque|aunque|entonces|tambien|también|ademas|además|sin embargo|por eso|cuando|mientras)\b/gi)||[]).length,g=(d.match(/\b(soy|eres|es|somos|son|estoy|estas|está|esta|estamos|estan|están|tengo|tienes|tiene|tenemos|tienen|quiero|quieres|quiere|puedo|puedes|puede|voy|vas|va|vamos|van|hago|haces|hace|digo|dices|dice|veo|ves|ve|vivo|vives|vive|trabajo|trabajas|trabaja|estudio|estudias|estudia|fui|fue|era|tenia|tenía|hablo|hablas|habla|aprendo|aprendes|aprende)\b/gi)||[]).length,w=u?.target?cr(u.target).map(Tn):[],j=u?.target?w.some(ee=>c.includes(ee)):!0,C=(d.match(/\b(the|and|but|because|with|from|about|today|question|answer|write|spanish)\b/gi)||[]).length,D=(d.match(/\b(tambien|ademas|tenia|dias|mas|esta|si|tu|el)\b/gi)||[]).length,H=(d.match(/\b(el|la|los|las|un|una|yo|tu|tú|usted|nosotros|porque|pero|que|de|con|para|por|en|mi|mis|su|sus|muy|mas|más|tambien|también)\b/gi)||[]).length,B=f.map(ee=>Tn(ee).split(" ")[0]).filter(Boolean).reduce((ee,P,re,le)=>ee+(re>0&&P===le[re-1]?1:0),0),W=f.filter(ee=>ee.split(/\s+/).filter(Boolean).length>28).length,X=[];m<20&&X.push("Add more detail."),v<2&&X.push("Use at least two complete sentences."),j||X.push("Use the prompt word or idea."),h===0&&X.push("Check accents when needed."),D>0&&X.push("Look for missing accents: también, además, tenía, días, más, está, sí, tú, él."),C>0&&X.push("Replace the English words with Spanish before saving."),b<1&&m>=20&&X.push("Add a connector like porque, aunque, or entonces."),g<2&&m>=15&&X.push("Use more conjugated verbs."),H<3&&m>=12&&X.push("Make it sound more Spanish with small glue words: que, de, en, para, por, con."),B>0&&X.push("Vary how your sentences begin."),W>0&&X.push("Split one long sentence into two clearer sentences."),m>=35&&v>=3&&b>=1&&C===0&&D===0&&X.push("Strong draft. Next: try one sentence in a different tense.");const F=Math.max(0,Math.min(100,20+Math.min(m,60)+Math.min(v*8,20)+Math.min(b*6,12)+Math.min(g*4,16)+Math.min(H*2,10)+(j?10:-10)-Math.min(C*8,24)-Math.min(D*3,12)-Math.min(B*4,8)-Math.min(W*5,10)));return{words:m,sentences:v,accents:h,connectors:b,verbs:g,targetUsed:j,likelyEnglish:C,accentCandidates:D,spanishSignals:H,repeatedStarts:B,longSentences:W,tips:X,score:F}}function qb({chapters:l=[],visitedChapters:u=[],lessonStatuses:d={},palabrasProgress:c={},savedWords:m=[],writingEntries:f=[]}={},v=Date.now()){const h=Object.values(d||{}),b=Object.values(c||{}),g=m.map(j=>j.review).filter(Boolean),w=[...b,...g];return{chapters:{total:l.length,visited:l.filter(j=>u.includes(j.id)).length,unvisited:Math.max(0,l.length-l.filter(j=>u.includes(j.id)).length)},lessons:{read:h.filter(j=>j==="read"||j==="understood").length,understood:h.filter(j=>j==="understood").length},vocabulary:{seen:w.filter(j=>j?.seen).length,due:w.filter(j=>j?.seen&&(j.dueAt||0)<=v).length,mastered:w.filter(j=>j?.mastered).length,difficult:m.filter(j=>j.difficult||j.review?.lastRating==="Hard").length,favorite:m.filter(j=>j.favorite).length},writing:{count:f.length,words:f.reduce((j,C)=>j+(C.feedback?.words||0),0),needsPractice:f.filter(j=>(j.feedback?.score||0)<70).length}}}function Eb({chapters:l=[],lessonStatuses:u={},palabrasProgress:d={},savedWords:c=[],writingEntries:m=[]}={},f=Date.now()){const v=[];for(const h of Object.values(d||{}))h?.seen&&((h.dueAt||0)<=f||h.lastRating==="Hard")&&v.push({type:"palabra",title:h.spanish||"Palabra",detail:h.english||h.lastRating||"",dueAt:h.dueAt||f,priority:h.lastRating==="Again"?3:h.lastRating==="Hard"?2:1});for(const h of c||[]){const b=h.review?.seen&&(h.review?.dueAt||0)<=f;(b||h.difficult||!h.translation)&&v.push({type:"memoria",title:h.word,detail:h.translation||"Needs translation",dueAt:h.review?.dueAt||f,priority:h.difficult?3:b?2:1})}for(const[h,b]of Object.entries(u||{}))if(b==="read"){const g=h.split("::").pop()||h;v.push({type:"lesson",title:g,detail:"Mark understood after review",dueAt:f,priority:1})}for(const h of m||[])((h.feedback?.score||0)<70||h.feedback?.tips?.length)&&v.push({type:"writing",title:h.prompt||"Writing practice",detail:(h.feedback?.tips||[])[0]||"Rewrite once",dueAt:h.createdAt||f,priority:1});if(v.length<6){for(const h of l||[])if(h.alwaysVisible||v.push({type:"chapter",title:h.title,detail:`${h.sectionLabel} - ${h.level}`,chapter:h,dueAt:f+v.length,priority:0}),v.length>=6)break}return v.sort((h,b)=>b.priority-h.priority||(h.dueAt||0)-(b.dueAt||0)).slice(0,24)}function zs(l){const u=new Set(l.tags||[]);return l.pending&&u.add("pending"),l.translation||u.add("needs-translation"),l.favorite&&u.add("favorite"),l.difficult&&u.add("difficult"),l.review?.mastered&&u.add("mastered"),l.review?.seen&&(l.review?.dueAt||0)<=Date.now()&&u.add("due"),/Group 1|cognates|near-cognates/i.test(l.pos||"")&&u.add("cognates"),/Group 2|function/i.test(l.pos||"")&&u.add("function-words"),/Group 3|remaining/i.test(l.pos||"")&&u.add("remaining"),[...u]}function bf(l,u=Date.now()){return{due:l.filter(d=>d.review?.seen&&(d.review?.dueAt||0)<=u).length,mastered:l.filter(d=>d.review?.mastered).length,difficult:l.filter(d=>d.difficult||d.review?.lastRating==="Hard").length,favorite:l.filter(d=>d.favorite).length}}function Tb(l){const u=["Spanish","English","Tags","Notes"],d=l.map(h=>[h.word,h.translation||"",zs(h).join(" | "),[...h.extras||[],h.pos||""].filter(Boolean).join(" | ")]),c=[u,...d].map(h=>h.map(b=>`"${String(b).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([c],{type:"text/csv;charset=utf-8"}),f=URL.createObjectURL(m),v=document.createElement("a");v.href=f,v.download="memoria-spanish.csv",v.click(),URL.revokeObjectURL(f)}const Ab={title:"648 Spanish Expressions",eyebrow:"Spanish Expression Library ? RAE / ASALE ? Complete Edition",subtitle:"Four groups ranked from most-used to least-used. Tap any card to see the full example sentence.",sourceNote:"648 expressions ? Sources: RAE/ASALE ? CORPES XXI ? DPDE ? Ranked by learning-priority frequency",perPage:36,groups:[{id:"connectors-discourse",title:"Connectors & Discourse",shortTitle:"Connectors",tone:"navy",count:252,entries:[{rank:1,es:"porque",en:"because",example:"No se aprobó porque faltaban documentos."},{rank:2,es:"aunque",en:"although; even if",example:"Aunque es caro, resulta necesario."},{rank:3,es:"si",en:"if",example:"Si paga hoy, se cierra el expediente."},{rank:4,es:"como",en:"as; since",example:"Como no había acuerdo, se presentó la demanda."},{rank:5,es:"para",en:"for; in order to",example:"Firmó para cerrar la operación."},{rank:6,es:"para que",en:"so that; in order that",example:"Se notificó para que la parte respondiera."},{rank:7,es:"además",en:"besides; moreover",example:"El informe es claro; además, está bien documentado."},{rank:8,es:"además de",en:"in addition to",example:"Además de estudiar, trabaja por las noches."},{rank:9,es:"incluso",en:"even; including",example:"Todos aceptaron la propuesta, incluso los más críticos."},{rank:10,es:"por supuesto",en:"of course; certainly",example:"—¿Puede revisar el contrato? —Por supuesto."},{rank:11,es:"claro",en:"of course; clearly",example:"Claro, podemos enviar la carta hoy."},{rank:12,es:"sin duda",en:"without doubt",example:"Sin duda, este punto es esencial."},{rank:13,es:"de hecho",en:"in fact; actually",example:"De hecho, el pago se realizó después del vencimiento."},{rank:14,es:"en efecto",en:"indeed; in fact",example:"Se alegó incumplimiento. En efecto, no hubo entrega."},{rank:15,es:"por ejemplo",en:"for example",example:"Se puede ofrecer garantía, por ejemplo, un cheque."},{rank:16,es:"por eso",en:"that is why",example:"El informe era incompleto; por eso se rechazó."},{rank:17,es:"por ello",en:"for that reason",example:"El riesgo era alto; por ello se exigió garantía."},{rank:18,es:"así que",en:"so",example:"No llegó el pago, así que suspendimos el servicio."},{rank:19,es:"por lo tanto",en:"therefore",example:"No hubo pago; por lo tanto, existe incumplimiento."},{rank:20,es:"por tanto",en:"therefore",example:"La cláusula es válida; por tanto, debe aplicarse."},{rank:21,es:"en consecuencia",en:"accordingly; consequently",example:"La prueba es insuficiente; en consecuencia, se rechaza la pretensión."},{rank:22,es:"sin embargo",en:"nevertheless; however",example:"La propuesta era interesante; sin embargo, no fue aprobada."},{rank:23,es:"no obstante",en:"nevertheless; notwithstanding",example:"El plazo venció; no obstante, se aceptó la solicitud."},{rank:24,es:"en cambio",en:"on the other hand; instead",example:"El primer testigo confirmó los hechos; en cambio, el segundo los negó."},{rank:25,es:"por el contrario",en:"on the contrary",example:"No reduce el riesgo; por el contrario, lo aumenta."},{rank:26,es:"a pesar de que",en:"although; despite the fact that",example:"A pesar de que fue notificado, no compareció."},{rank:27,es:"pese a que",en:"despite the fact that",example:"Pese a que conocía el riesgo, aceptó la condición."},{rank:28,es:"ya que",en:"since; given that",example:"Ya que el plazo vence hoy, debemos actuar."},{rank:29,es:"puesto que",en:"since; because",example:"Puesto que no hubo pago, procede la reclamación."},{rank:30,es:"dado que",en:"given that",example:"Dado que el contrato fue firmado, produce efectos."},{rank:31,es:"debido a",en:"due to; owing to",example:"El retraso ocurrió debido a la falta de materiales."},{rank:32,es:"debido a que",en:"because; due to the fact that",example:"Se aplazó la reunión debido a que faltaba el informe."},{rank:33,es:"a causa de",en:"because of; due to",example:"La obra se detuvo a causa de la lluvia."},{rank:34,es:"gracias a",en:"thanks to",example:"Gracias a la negociación, se evitó el litigio."},{rank:35,es:"mientras que",en:"whereas; while",example:"El arrendador exige pago, mientras que el arrendatario reclama reparación."},{rank:36,es:"si bien",en:"although; while",example:"Si bien el contrato es claro, conviene aclarar el anexo."},{rank:37,es:"en caso de",en:"in case of",example:"En caso de incumplimiento, se aplicará la penalidad."},{rank:38,es:"en caso de que",en:"in the event that",example:"En caso de que no pague, demandaremos."},{rank:39,es:"de lo contrario",en:"otherwise",example:"Debe responder en siete días; de lo contrario, iniciaremos acciones."},{rank:40,es:"antes de",en:"before",example:"Antes de firmar, revise la cláusula."},{rank:41,es:"después de",en:"after",example:"Después de negociar, firmaron."},{rank:42,es:"luego",en:"then; later",example:"Primero revisamos el contrato; luego enviamos comentarios."},{rank:43,es:"más tarde",en:"later",example:"Más tarde, se presentó una nueva oferta."},{rank:44,es:"finalmente",en:"finally",example:"Finalmente, se emitió la sentencia."},{rank:45,es:"por último",en:"lastly",example:"Por último, solicitamos costas."},{rank:46,es:"al final",en:"in the end; at the end",example:"Al final, las partes llegaron a un acuerdo."},{rank:47,es:"a continuación",en:"next; below",example:"A continuación, analizamos la cláusula penal."},{rank:48,es:"enseguida",en:"right away; shortly",example:"Le responderé enseguida."},{rank:49,es:"desde entonces",en:"since then",example:"Desde entonces, no hubo nuevos pagos."},{rank:50,es:"mientras tanto",en:"meanwhile",example:"Mientras tanto, prepararemos los anexos."},{rank:51,es:"en cuanto",en:"as soon as",example:"En cuanto recibamos el pago, emitiremos recibo."},{rank:52,es:"una vez que",en:"once",example:"Una vez que se firme, el acuerdo será vinculante."},{rank:53,es:"tan pronto como",en:"as soon as",example:"Tan pronto como pague, cerraremos el caso."},{rank:54,es:"es decir",en:"that is; namely",example:"La obligación es solidaria, es decir, responde cada deudor por el total."},{rank:55,es:"o sea",en:"that is; I mean",example:"No aceptó, o sea, rechazó la oferta."},{rank:56,es:"en otras palabras",en:"in other words",example:"En otras palabras, el contrato quedó resuelto."},{rank:57,es:"mejor dicho",en:"rather; or rather",example:"Fue un retraso, mejor dicho, un incumplimiento esencial."},{rank:58,es:"más bien",en:"rather; more accurately",example:"No fue error; más bien, fue falta de coordinación."},{rank:59,es:"en concreto",en:"specifically",example:"Analizaremos la responsabilidad; en concreto, la penalidad."},{rank:60,es:"en particular",en:"in particular",example:"Me preocupa el anexo, en particular la cláusula tercera."},{rank:61,es:"por cierto",en:"by the way; incidentally",example:"Por cierto, el cliente llamó esta mañana."},{rank:62,es:"a propósito de",en:"regarding; speaking of",example:"A propósito del pago, falta el recibo."},{rank:63,es:"sobre",en:"about; on",example:"El informe trata sobre responsabilidad contractual."},{rank:64,es:"acerca de",en:"about; concerning",example:"Hablamos acerca de la estrategia."},{rank:65,es:"en cuanto a",en:"as for; regarding",example:"En cuanto a los daños, faltan facturas."},{rank:66,es:"respecto a",en:"with respect to; regarding",example:"Respecto a su consulta, adjunto mi opinión."},{rank:67,es:"con respecto a",en:"with respect to",example:"Con respecto al plazo, recomendamos actuar hoy."},{rank:68,es:"en relación con",en:"in relation to; regarding",example:"En relación con el contrato, hay tres riesgos."},{rank:69,es:"en primer lugar",en:"firstly",example:"En primer lugar, analizaremos la competencia."},{rank:70,es:"en segundo lugar",en:"secondly",example:"En segundo lugar, revisaremos los daños."},{rank:71,es:"por un lado",en:"on one hand",example:"Por un lado, el precio es adecuado."},{rank:72,es:"por otro lado",en:"on the other hand",example:"Por otro lado, la prueba es limitada."},{rank:73,es:"por una parte",en:"on one hand",example:"Por una parte, existe incumplimiento."},{rank:74,es:"por otra parte",en:"on the other hand; furthermore",example:"Por otra parte, conviene solicitar peritaje."},{rank:75,es:"en resumen",en:"in summary",example:"En resumen, hubo retraso, daño y relación causal."},{rank:76,es:"en conclusión",en:"in conclusion",example:"En conclusión, la demanda es viable."},{rank:77,es:"en definitiva",en:"ultimately; in short",example:"En definitiva, conviene negociar."},{rank:78,es:"en fin",en:"anyway; in short; finally",example:"En fin, revisemos la siguiente cláusula."},{rank:79,es:"al fin y al cabo",en:"after all; ultimately",example:"Al fin y al cabo, ambas partes quieren cerrar el asunto."},{rank:80,es:"a fin de cuentas",en:"at the end of the day",example:"A fin de cuentas, lo importante es cobrar."},{rank:81,es:"en general",en:"generally",example:"En general, la propuesta es aceptable."},{rank:82,es:"por lo general",en:"generally; as a rule",example:"Por lo general, se exige aviso previo."},{rank:83,es:"en principio",en:"in principle; initially",example:"En principio, aceptamos la propuesta."},{rank:84,es:"al menos",en:"at least",example:"Al menos, debe enviarse una notificación."},{rank:85,es:"por lo menos",en:"at least",example:"Por lo menos, necesitamos una copia firmada."},{rank:86,es:"como mínimo",en:"at minimum",example:"Como mínimo, se requiere identificación."},{rank:87,es:"como mucho",en:"at most",example:"La revisión tardará, como mucho, dos días."},{rank:88,es:"a lo sumo",en:"at most",example:"A lo sumo, la penalidad cubrirá el retraso."},{rank:89,es:"hasta cierto punto",en:"to some extent",example:"Hasta cierto punto, el argumento es aceptable."},{rank:90,es:"en cierta medida",en:"to a certain extent",example:"En cierta medida, el retraso era previsible."},{rank:91,es:"en parte",en:"partly",example:"El daño se debió en parte al retraso."},{rank:92,es:"igual que",en:"just like",example:"Este caso es igual que el anterior."},{rank:93,es:"al igual que",en:"just like; as well as",example:"El comprador, al igual que el vendedor, debe firmar."},{rank:94,es:"en comparación con",en:"in comparison with",example:"En comparación con la primera oferta, esta es mejor."},{rank:95,es:"frente a",en:"compared with; against; facing",example:"Frente a la falta de pago, corresponde reclamar."},{rank:96,es:"asimismo",en:"likewise; also",example:"El contrato fue revisado; asimismo, se actualizó el anexo."},{rank:97,es:"igualmente",en:"equally; likewise",example:"La cláusula protege al comprador; igualmente, beneficia al vendedor."},{rank:98,es:"de igual modo",en:"in the same way",example:"Debe notificarse al cliente; de igual modo, debe informarse al proveedor."},{rank:99,es:"del mismo modo",en:"in the same manner",example:"El juez valoró la prueba documental; del mismo modo, examinó los testigos."},{rank:100,es:"de la misma manera",en:"in the same way",example:"La empresa pagó tarde; de la misma manera, incumplió el plazo de entrega."},{rank:101,es:"es más",en:"what is more",example:"La oferta es insuficiente; es más, resulta perjudicial."},{rank:102,es:"más aún",en:"even more; moreover",example:"La prueba es relevante; más aún, es decisiva."},{rank:103,es:"inclusive",en:"including; even",example:"Se revisaron todos los anexos, inclusive los técnicos."},{rank:104,es:"aparte de",en:"apart from; besides",example:"Aparte de los gastos, hay que calcular los impuestos."},{rank:105,es:"aparte de eso",en:"apart from that",example:"El precio es alto. Aparte de eso, el plazo es corto."},{rank:106,es:"no solo..., sino también...",en:"not only..., but also...",example:"No solo firmó el contrato, sino también entregó la garantía."},{rank:107,es:"ni... ni...",en:"neither... nor...",example:"No presentó ni factura ni recibo."},{rank:108,es:"ahora bien",en:"now then; however",example:"El contrato es válido; ahora bien, requiere registro."},{rank:109,es:"eso sí",en:"that said; mind you",example:"Puedes usar el documento; eso sí, no lo modifiques."},{rank:110,es:"aun así",en:"even so",example:"El riesgo era evidente; aun así, firmaron el acuerdo."},{rank:111,es:"con todo",en:"nevertheless; even so",example:"La sentencia es breve; con todo, resuelve el punto principal."},{rank:112,es:"a pesar de ello",en:"despite that",example:"El defecto fue advertido; a pesar de ello, se continuó la obra."},{rank:113,es:"pese a ello",en:"despite that",example:"La economía cayó; pese a ello, la empresa creció."},{rank:114,es:"de todos modos",en:"anyway; in any case",example:"No hay respuesta; de todos modos, enviaremos recordatorio."},{rank:115,es:"de todas formas",en:"anyway; nevertheless",example:"Puede haber cambios; de todas formas, avanzaremos."},{rank:116,es:"de todas maneras",en:"anyway; in any event",example:"El plazo es ajustado; de todas maneras, lo intentaremos."},{rank:117,es:"en cualquier caso",en:"in any case",example:"Podría haber apelación; en cualquier caso, prepararemos defensa."},{rank:118,es:"en todo caso",en:"in any event; at most",example:"En todo caso, la responsabilidad debe probarse."},{rank:119,es:"por causa de",en:"because of",example:"El daño se produjo por causa de una fuga."},{rank:120,es:"por culpa de",en:"because of; due to fault of",example:"Se perdió el plazo por culpa de una omisión."},{rank:121,es:"en vista de",en:"in view of",example:"En vista de los hechos, conviene transigir."},{rank:122,es:"en vista de que",en:"in view of the fact that",example:"En vista de que no pagó, se activó la penalidad."},{rank:123,es:"considerando que",en:"considering that",example:"Considerando que las partes acordaron el precio, se firma el anexo."},{rank:124,es:"por razón de",en:"by reason of; on account of",example:"La medida se adoptó por razón de seguridad."},{rank:125,es:"con motivo de",en:"on the occasion of; due to",example:"Se emitió circular con motivo de la nueva normativa."},{rank:126,es:"en virtud de",en:"by virtue of; pursuant to",example:"En virtud del contrato, el proveedor debe entregar."},{rank:127,es:"por consiguiente",en:"consequently",example:"El deudor incumplió; por consiguiente, responde por daños."},{rank:128,es:"consecuentemente",en:"consequently",example:"La empresa fue notificada; consecuentemente, no puede alegar desconocimiento."},{rank:129,es:"de ahí que",en:"hence; that is why",example:"La entrega fue tardía; de ahí que proceda la penalidad."},{rank:130,es:"de modo que",en:"so that; therefore",example:"No hubo acuerdo, de modo que se inició arbitraje."},{rank:131,es:"de manera que",en:"so that; therefore",example:"Se reorganizó el expediente, de manera que todo quedó claro."},{rank:132,es:"de forma que",en:"so that; in such a way that",example:"Se redactó de forma que no hubiera ambigüedad."},{rank:133,es:"a fin de",en:"in order to",example:"Se reunió a fin de resolver la disputa."},{rank:134,es:"a fin de que",en:"so that",example:"Se modificó a fin de que no hubiera duda."},{rank:135,es:"con el fin de",en:"with the aim of",example:"Se firmó con el fin de evitar litigios."},{rank:136,es:"con el fin de que",en:"so that; with the aim that",example:"Se notificó con el fin de que constara la reclamación."},{rank:137,es:"con objeto de",en:"for the purpose of",example:"Se convocó la reunión con objeto de cerrar el acuerdo."},{rank:138,es:"con objeto de que",en:"so that",example:"Se incluyó la cláusula con objeto de que protegiera a ambas partes."},{rank:139,es:"con vistas a",en:"with a view to",example:"Se preparó el expediente con vistas a una apelación."},{rank:140,es:"con miras a",en:"with a view to",example:"Se negoció con miras a una solución amistosa."},{rank:141,es:"de cara a",en:"with a view to; regarding upcoming",example:"De cara a la audiencia, revisaremos la prueba."},{rank:142,es:"a efectos de",en:"for purposes of",example:"A efectos de registro, se adjunta copia del pasaporte."},{rank:143,es:"a los efectos de",en:"for the purposes of",example:"A los efectos de la notificación, se fija este domicilio."},{rank:144,es:"a condición de",en:"on condition of",example:"Aceptó a condición de recibir garantía."},{rank:145,es:"a condición de que",en:"provided that",example:"Aceptará a condición de que se firme hoy."},{rank:146,es:"con tal de",en:"provided that; as long as",example:"Acepto con tal de conservar mis derechos."},{rank:147,es:"con tal de que",en:"provided that; so long as",example:"Acepto con tal de que paguen la deuda."},{rank:148,es:"siempre que",en:"provided that; whenever",example:"Podrás renovar siempre que cumplas el plazo."},{rank:149,es:"siempre y cuando",en:"provided that",example:"Se aprobará siempre y cuando entreguen garantías."},{rank:150,es:"a menos que",en:"unless",example:"Demandaremos a menos que paguen hoy."},{rank:151,es:"salvo que",en:"unless; except that",example:"El contrato continuará salvo que una parte lo termine."},{rank:152,es:"excepto que",en:"except that; unless",example:"Acepto, excepto que cambien el precio."},{rank:153,es:"a no ser que",en:"unless",example:"No habrá reunión a no ser que llegue el informe."},{rank:154,es:"posteriormente",en:"subsequently",example:"Posteriormente, las partes firmaron el anexo."},{rank:155,es:"acto seguido",en:"immediately afterwards",example:"Firmó el recibo y, acto seguido, entregó las llaves."},{rank:156,es:"de inmediato",en:"immediately",example:"Debe notificarse de inmediato."},{rank:157,es:"al principio",en:"at first; at the beginning",example:"Al principio, no hubo oposición."},{rank:158,es:"al comienzo",en:"at the beginning",example:"Al comienzo del contrato, todo funcionó bien."},{rank:159,es:"en último lugar",en:"lastly; in last place",example:"En último lugar, debe revisarse la garantía."},{rank:160,es:"de ahora en adelante",en:"from now on",example:"De ahora en adelante, toda comunicación será por escrito."},{rank:161,es:"a partir de",en:"from; as of",example:"A partir de mañana, rige el nuevo horario."},{rank:162,es:"hasta entonces",en:"until then",example:"Hasta entonces, mantendremos la posición."},{rank:163,es:"entretanto",en:"meanwhile",example:"Entretanto, la negociación continuó."},{rank:164,es:"entre tanto",en:"meanwhile",example:"Entre tanto, se conservarán las pruebas."},{rank:165,es:"apenas",en:"as soon as; barely",example:"Apenas llegó el informe, lo revisamos."},{rank:166,es:"al cabo de",en:"after; at the end of",example:"Al cabo de dos meses, se resolvió el caso."},{rank:167,es:"a medida que",en:"as; progressively as",example:"A medida que avance el proceso, actualizaremos la estrategia."},{rank:168,es:"esto es",en:"that is to say",example:"El plazo es perentorio, esto es, no admite prórroga."},{rank:169,es:"dicho de otro modo",en:"put another way",example:"Dicho de otro modo, no hay prueba suficiente."},{rank:170,es:"dicho de otra manera",en:"put another way",example:"Dicho de otra manera, el riesgo era previsible."},{rank:171,es:"concretamente",en:"specifically",example:"Concretamente, reclamamos 115.500 AED."},{rank:172,es:"específicamente",en:"specifically",example:"Se solicitó específicamente la prueba técnica."},{rank:173,es:"a saber",en:"namely",example:"Se adjuntan tres documentos, a saber: contrato, factura y recibo."},{rank:174,es:"esto quiere decir que",en:"this means that",example:"Esto quiere decir que el plazo ya venció."},{rank:175,es:"efectivamente",en:"indeed; effectively",example:"Efectivamente, el pago fue recibido."},{rank:176,es:"ciertamente",en:"certainly; admittedly",example:"Ciertamente, el riesgo existe."},{rank:177,es:"naturalmente",en:"naturally; of course",example:"Naturalmente, se respetará la confidencialidad."},{rank:178,es:"desde luego",en:"certainly; of course",example:"Desde luego, la prueba debe conservarse."},{rank:179,es:"en verdad",en:"in truth; truly",example:"En verdad, la situación exige cautela."},{rank:180,es:"de verdad",en:"really; truly",example:"De verdad, conviene revisar todo el expediente."},{rank:181,es:"de veras",en:"really; truly",example:"De veras, agradezco su ayuda."},{rank:182,es:"por descontado",en:"of course; needless to say",example:"Por descontado, la confidencialidad se mantiene."},{rank:183,es:"cabe destacar que",en:"it should be highlighted that",example:"Cabe destacar que el contrato no fue registrado."},{rank:184,es:"conviene subrayar que",en:"it is worth underlining that",example:"Conviene subrayar que la deuda sigue pendiente."},{rank:185,es:"a modo de ejemplo",en:"by way of example",example:"A modo de ejemplo, citamos la cláusula sexta."},{rank:186,es:"por poner un ejemplo",en:"to give an example",example:"Por poner un ejemplo, pensemos en un contrato de obra."},{rank:187,es:"como ejemplo",en:"as an example",example:"Como ejemplo, revise el anexo A."},{rank:188,es:"tal como",en:"as; such as",example:"Debe entregarse tal como fue aprobado."},{rank:189,es:"así como",en:"as well as; just as",example:"Se adjunta contrato, así como los recibos."},{rank:190,es:"comparado con",en:"compared with",example:"Comparado con el daño, el costo es bajo."},{rank:191,es:"encima",en:"on top of that; furthermore",example:"Llegó tarde y, encima, no trajo los documentos."},{rank:192,es:"por añadidura",en:"furthermore; on top of that",example:"El proyecto es caro y, por añadidura, complejo."},{rank:193,es:"antes bien",en:"rather; quite the contrary",example:"No hubo negligencia; antes bien, se actuó con diligencia."},{rank:194,es:"así y todo",en:"even so; despite that",example:"El plan tenía fallas; así y todo, fue aprobado."},{rank:195,es:"con eso y todo",en:"even so; despite all that",example:"Costó mucho; con eso y todo, valió la pena."},{rank:196,es:"por contra",en:"on the other hand; conversely",example:"La demanda subió; por contra, la oferta bajó."},{rank:197,es:"a diferencia de",en:"unlike; in contrast to",example:"A diferencia del primer contrato, el segundo contiene penalidad."},{rank:198,es:"aun cuando",en:"even when; even if",example:"Aun cuando no exista daño, debe probarse el incumplimiento."},{rank:199,es:"por más que",en:"no matter how much; even though",example:"Por más que insistió, no obtuvo respuesta."},{rank:200,es:"por mucho que",en:"however much; even if",example:"Por mucho que negocien, el plazo no cambiará."},{rank:201,es:"por muy... que",en:"however...",example:"Por muy urgente que sea, debe documentarse."},{rank:202,es:"incluso si",en:"even if",example:"Incluso si aceptan, pediremos garantía."},{rank:203,es:"ni siquiera si",en:"not even if",example:"No firmaría ni siquiera si redujeran el precio."},{rank:204,es:"visto que",en:"seeing that; given that",example:"Visto que no respondió, se enviará aviso final."},{rank:205,es:"habida cuenta de",en:"taking into account; given",example:"Habida cuenta de las pruebas, la reclamación es viable."},{rank:206,es:"habida cuenta de que",en:"given that",example:"Habida cuenta de que hubo notificación, procede continuar."},{rank:207,es:"por tal motivo",en:"for that reason",example:"Por tal motivo, solicitamos la terminación."},{rank:208,es:"por esta razón",en:"for this reason",example:"Por esta razón, conviene conservar las pruebas."},{rank:209,es:"de resultas de",en:"as a result of",example:"De resultas del incumplimiento, se generaron pérdidas."},{rank:210,es:"tanto... que",en:"so... that",example:"El retraso fue tanto que afectó todo el proyecto."},{rank:211,es:"con propósito de",en:"with the purpose of",example:"Actuó con propósito de proteger sus derechos."},{rank:212,es:"de ser así",en:"if so",example:"Podría existir defecto. De ser así, reclamaremos."},{rank:213,es:"si no",en:"if not; otherwise",example:"Paga hoy; si no, habrá penalidad."},{rank:214,es:"total",en:"anyway; in short",example:"Total, que no aceptaron la oferta."},{rank:215,es:"de entrada",en:"at the outset; initially",example:"De entrada, la reclamación parece sólida."},{rank:216,es:"para empezar",en:"to begin with",example:"Para empezar, el contrato no está firmado."},{rank:217,es:"antes que nada",en:"first of all",example:"Antes que nada, confirmemos los hechos."},{rank:218,es:"ante todo",en:"above all; first and foremost",example:"Ante todo, debemos proteger la posición del cliente."},{rank:219,es:"de otro lado",en:"on the other hand",example:"De otro lado, la parte demandada no acreditó el pago."},{rank:220,es:"dicho sea de paso",en:"incidentally; by the way",example:"Dicho sea de paso, la cláusula está mal redactada."},{rank:221,es:"sin duda alguna",en:"without any doubt",example:"Sin duda alguna, hubo incumplimiento."},{rank:222,es:"ni que decir tiene",en:"needless to say",example:"Ni que decir tiene que el plazo debe respetarse."},{rank:223,es:"huelga decir",en:"it goes without saying",example:"Huelga decir que la prueba original debe conservarse."},{rank:224,es:"pongamos por caso",en:"let us suppose; for instance",example:"Pongamos por caso que el proveedor no entrega."},{rank:225,es:"a la postre",en:"in the end; ultimately",example:"A la postre, la negociación evitó el juicio."},{rank:226,es:"en última instancia",en:"ultimately; in the final analysis",example:"En última instancia, decide el tribunal."},{rank:227,es:"por ende",en:"therefore; hence",example:"El plazo venció; por ende, la oferta caducó."},{rank:228,es:"de suerte que",en:"so that; therefore",example:"La obligación fue incumplida, de suerte que procede indemnizar."},{rank:229,es:"así pues",en:"therefore; thus",example:"Así pues, la reclamación debe estimarse."},{rank:230,es:"vale decir",en:"that is to say",example:"El acto fue extemporáneo, vale decir, presentado fuera de plazo."},{rank:231,es:"verbigracia",en:"for example",example:"Podrían reclamarse gastos, verbigracia, honorarios periciales."},{rank:232,es:"empero",en:"however; but",example:"La tesis parece sólida; empero, falta prueba técnica."},{rank:233,es:"a mayor abundamiento",en:"furthermore; for greater support",example:"A mayor abundamiento, existe prueba documental."},{rank:234,es:"en mérito de lo expuesto",en:"in view of the foregoing",example:"En mérito de lo expuesto, solicitamos se estime la demanda."},{rank:235,es:"por todo lo anterior",en:"for all the foregoing",example:"Por todo lo anterior, procede estimar la reclamación."},{rank:236,es:"salvo pacto en contrario",en:"unless otherwise agreed",example:"El pago será mensual, salvo pacto en contrario."},{rank:237,es:"salvo disposición en contrario",en:"unless otherwise provided",example:"Rige esta cláusula, salvo disposición en contrario."},{rank:238,es:"al contrario",en:"on the contrary",example:"No hubo retraso; al contrario, se entregó antes."},{rank:239,es:"antes de que",en:"before",example:"Revíselo antes de que venza el plazo."},{rank:240,es:"después de que",en:"after",example:"Después de que firmaron, se entregó el pago."},{rank:241,es:"en seguida",en:"right away; shortly",example:"El equipo actuó en seguida."},{rank:242,es:"en cierto modo",en:"in a way",example:"En cierto modo, ambas partes asumieron el riesgo."},{rank:243,es:"excepto",en:"except",example:"Se aprobaron todas las cláusulas excepto la décima."},{rank:244,es:"fuera de",en:"outside of; apart from",example:"Fuera de este punto, no hay objeciones."},{rank:245,es:"lo mismo que",en:"the same as",example:"Ocurrió lo mismo que en el primer contrato."},{rank:246,es:"en contraste",en:"by contrast",example:"El primer informe fue positivo; en contraste, el segundo fue crítico."},{rank:247,es:"para concluir",en:"to conclude",example:"Para concluir, solicitamos la estimación de la reclamación."},{rank:248,es:"en suma",en:"in sum; all in all",example:"En suma, la prueba favorece al demandante."},{rank:249,es:"en síntesis",en:"in synthesis; briefly",example:"En síntesis, el incumplimiento quedó acreditado."},{rank:250,es:"primeramente",en:"firstly",example:"Primeramente, debe verificarse la notificación."},{rank:251,es:"en términos generales",en:"in general terms",example:"En términos generales, el contrato es equilibrado."},{rank:252,es:"salvo",en:"except; save for",example:"Todos firmaron, salvo el garante."}]},{id:"prepositional-locutions",title:"Prepositional Locutions",shortTitle:"Prep. Locutions",tone:"green",count:175,entries:[{rank:1,es:"a causa de",en:"because of",example:"Hubo retraso a causa de la inspección."},{rank:2,es:"a pesar de",en:"despite; notwithstanding",example:"A pesar del retraso, aceptó la entrega."},{rank:3,es:"gracias a",en:"thanks to",example:"Gracias a la mediación, se cerró el acuerdo."},{rank:4,es:"a partir de",en:"as of; starting from",example:"A partir del 1 de junio, rige la nueva tarifa."},{rank:5,es:"a través de",en:"through; by means of",example:"La notificación se envió a través de correo electrónico."},{rank:6,es:"de acuerdo con",en:"according to; in accordance with",example:"De acuerdo con el contrato, el pago vence hoy."},{rank:7,es:"acerca de",en:"about; concerning",example:"Se discutió acerca de la garantía."},{rank:8,es:"antes de",en:"before",example:"Antes de la firma, revise los anexos."},{rank:9,es:"después de",en:"after",example:"Después de la audiencia, prepararemos nota."},{rank:10,es:"cerca de",en:"near; about approximately",example:"La oficina está cerca del tribunal."},{rank:11,es:"dentro de",en:"inside; within",example:"Debe pagar dentro de siete días."},{rank:12,es:"fuera de",en:"outside; apart from",example:"Fuera del contrato, no hay obligación."},{rank:13,es:"delante de",en:"in front of",example:"Firmó delante del notario."},{rank:14,es:"detrás de",en:"behind",example:"Detrás del retraso hubo falta de permisos."},{rank:15,es:"encima de",en:"on top of; above",example:"El expediente está encima de la mesa."},{rank:16,es:"debajo de",en:"under; below",example:"La firma aparece debajo del sello."},{rank:17,es:"lejos de",en:"far from",example:"Lejos de resolver el problema, lo agravó."},{rank:18,es:"junto a",en:"next to; alongside",example:"El documento original está junto a la copia."},{rank:19,es:"junto con",en:"together with",example:"Se adjunta el contrato junto con sus anexos."},{rank:20,es:"además de",en:"besides; in addition to",example:"Además del precio, debe pagar impuestos."},{rank:21,es:"en caso de",en:"in case of; in the event of",example:"En caso de mora, se aplicará interés."},{rank:22,es:"en contra de",en:"against",example:"Votó en contra de la propuesta."},{rank:23,es:"a favor de",en:"in favor of",example:"Se emitió cheque a favor del proveedor."},{rank:24,es:"en favor de",en:"in favor of",example:"Se constituyó garantía en favor del banco."},{rank:25,es:"en lugar de",en:"instead of",example:"En lugar de demandar, propuso mediación."},{rank:26,es:"en relación con",en:"in relation to; regarding",example:"En relación con su consulta, adjunto respuesta."},{rank:27,es:"con respecto a",en:"with respect to",example:"Con respecto al pago, no hay constancia."},{rank:28,es:"sobre todo",en:"above all; especially",example:"Sobre todo, conserve los originales."},{rank:29,es:"frente a",en:"facing; against; in view of",example:"Frente al incumplimiento, se reclamó indemnización."},{rank:30,es:"a cambio de",en:"in exchange for",example:"Entregó el bien a cambio de un pago parcial."},{rank:31,es:"a condición de",en:"on condition of",example:"Firmará a condición de recibir garantía."},{rank:32,es:"a diferencia de",en:"unlike",example:"A diferencia del arrendador, el arrendatario sí compareció."},{rank:33,es:"a fin de",en:"in order to",example:"Se reunió a fin de resolver la disputa."},{rank:34,es:"al lado de",en:"next to; beside",example:"El anexo está al lado de la firma."},{rank:35,es:"al frente de",en:"at the head of; in charge of",example:"Quedó al frente del equipo legal."},{rank:36,es:"a cargo de",en:"in charge of",example:"El expediente quedó a cargo del abogado."},{rank:37,es:"a cuenta de",en:"on account of; as advance payment",example:"Pagó 10.000 AED a cuenta del precio."},{rank:38,es:"a falta de",en:"in the absence of; lacking",example:"A falta de prueba, la reclamación pierde fuerza."},{rank:39,es:"a la espera de",en:"awaiting; pending",example:"Estamos a la espera de la respuesta del cliente."},{rank:40,es:"a lo largo de",en:"throughout; along",example:"A lo largo del proceso, se mantuvo la misma posición."},{rank:41,es:"a nivel de",en:"at the level of",example:"A nivel de gestión, el cambio es importante."},{rank:42,es:"a propósito de",en:"regarding; concerning",example:"A propósito del contrato, falta una firma."},{rank:43,es:"a raíz de",en:"as a result of; following",example:"A raíz del incumplimiento, se envió aviso."},{rank:44,es:"al cabo de",en:"after; at the end of",example:"Al cabo de treinta días, venció el plazo."},{rank:45,es:"al margen de",en:"apart from; outside",example:"Al margen del precio, hay un problema de plazo."},{rank:46,es:"de conformidad con",en:"in accordance with",example:"De conformidad con la ley, se notificó a la parte."},{rank:47,es:"conforme a",en:"according to; pursuant to",example:"Conforme a la cláusula quinta, el plazo venció."},{rank:48,es:"con base en",en:"based on",example:"Con base en las pruebas, recomendamos reclamar."},{rank:49,es:"en base a",en:"based on",example:"En base a los datos, se preparó el informe."},{rank:50,es:"en función de",en:"depending on; according to",example:"La tarifa cambia en función del volumen."},{rank:51,es:"en comparación con",en:"in comparison with",example:"En comparación con la primera oferta, esta es mejor."},{rank:52,es:"en torno a",en:"around; concerning",example:"La discusión giró en torno al precio."},{rank:53,es:"en vista de",en:"in view of",example:"En vista del incumplimiento, se envió aviso."},{rank:54,es:"con motivo de",en:"on the occasion of; due to",example:"Se emitió comunicado con motivo de la reforma."},{rank:55,es:"con el fin de",en:"with the aim of",example:"Se firmó con el fin de resolver la disputa."},{rank:56,es:"con objeto de",en:"for the purpose of",example:"Se solicitó peritaje con objeto de cuantificar daños."},{rank:57,es:"con vistas a",en:"with a view to",example:"Se preparó el expediente con vistas a negociar."},{rank:58,es:"por culpa de",en:"because of the fault of",example:"El daño ocurrió por culpa del contratista."},{rank:59,es:"por encima de",en:"above; over",example:"La seguridad está por encima del costo."},{rank:60,es:"por debajo de",en:"below; under",example:"La oferta está por debajo del precio de mercado."},{rank:61,es:"por delante de",en:"ahead of; before",example:"La urgencia está por delante de otros asuntos."},{rank:62,es:"por detrás de",en:"behind",example:"El asunto quedó por detrás de los casos urgentes."},{rank:63,es:"por medio de",en:"by means of",example:"Se notificó por medio de correo certificado."},{rank:64,es:"por parte de",en:"on the part of; by",example:"Hubo incumplimiento por parte del proveedor."},{rank:65,es:"por razón de",en:"by reason of",example:"Se rechazó por razón de competencia."},{rank:66,es:"por cuenta de",en:"on behalf/account of",example:"El pago se hizo por cuenta del comprador."},{rank:67,es:"por falta de",en:"for lack of",example:"Se rechazó por falta de prueba."},{rank:68,es:"sin necesidad de",en:"without the need to",example:"Puede resolverse sin necesidad de juicio."},{rank:69,es:"sin importar",en:"regardless of",example:"Debe cumplir sin importar el costo."},{rank:70,es:"sin contar con",en:"without counting on; without having",example:"Actuó sin contar con autorización."},{rank:71,es:"bajo ningún concepto",en:"under no circumstances",example:"Bajo ningún concepto debe firmarse sin revisión."},{rank:72,es:"ante la falta de",en:"in the absence of; faced with lack of",example:"Ante la falta de pago, se envió requerimiento."},{rank:73,es:"ante el hecho de que",en:"given the fact that; faced with the fact that",example:"Ante el hecho de que no respondió, se inició demanda."},{rank:74,es:"sobre la base de",en:"on the basis of",example:"Sobre la base de las pruebas, se formuló reclamación."},{rank:75,es:"a bordo de",en:"on board; aboard",example:"La mercancía fue cargada a bordo del buque."},{rank:76,es:"a costa de",en:"at the expense of",example:"No puede beneficiarse a costa de la otra parte."},{rank:77,es:"a excepción de",en:"with the exception of",example:"Todos los documentos fueron recibidos a excepción del anexo."},{rank:78,es:"a expensas de",en:"at the expense of; pending",example:"El pago quedó a expensas de la aprobación bancaria."},{rank:79,es:"a fuerza de",en:"by dint of; by means of repeated effort",example:"A fuerza de insistir, obtuvo respuesta."},{rank:80,es:"a juicio de",en:"in the opinion of",example:"A juicio del perito, la obra es defectuosa."},{rank:81,es:"a la altura de",en:"at the level of; up to",example:"La defensa debe estar a la altura del caso."},{rank:82,es:"a la luz de",en:"in light of",example:"A la luz de las pruebas, conviene negociar."},{rank:83,es:"a la manera de",en:"in the manner/style of",example:"Redactó el informe a la manera de un dictamen."},{rank:84,es:"a la par de",en:"on a par with; alongside",example:"El riesgo creció a la par de los costos."},{rank:85,es:"a razón de",en:"at the rate of",example:"Se pagará a razón de 500 AED diarios."},{rank:86,es:"a solicitud de",en:"at the request of",example:"Se emitió certificado a solicitud del cliente."},{rank:87,es:"al amparo de",en:"under the protection/authority of",example:"Actuó al amparo de la cláusula de terminación."},{rank:88,es:"al son de",en:"to the sound/rhythm of",example:"Marcharon al son de la música."},{rank:89,es:"de acuerdo a",en:"according to",example:"De acuerdo a la información recibida, no hubo entrega."},{rank:90,es:"de cara a",en:"with a view to; ahead of",example:"De cara al juicio, debemos ordenar las pruebas."},{rank:91,es:"de espaldas a",en:"with one’s back to; ignoring",example:"No puede negociarse de espaldas a los hechos."},{rank:92,es:"de parte de",en:"on behalf of; from",example:"Le escribo de parte del cliente."},{rank:93,es:"en aras de",en:"for the sake of; in the interest of",example:"En aras de la transparencia, se adjuntan los recibos."},{rank:94,es:"en atención a",en:"in consideration of; having regard to",example:"En atención a las circunstancias, se redujo la penalidad."},{rank:95,es:"en beneficio de",en:"for the benefit of",example:"La garantía se emitió en beneficio del comprador."},{rank:96,es:"en busca de",en:"in search of",example:"Se inició negociación en busca de una solución."},{rank:97,es:"en calidad de",en:"in the capacity of",example:"Firmó en calidad de representante legal."},{rank:98,es:"en compañía de",en:"in the company of",example:"Asistió en compañía de su asesor."},{rank:99,es:"en honor a",en:"in honor of",example:"Se celebró un acto en honor a los invitados."},{rank:100,es:"en honor de",en:"in honor of",example:"Se organizó una cena en honor de la delegación."},{rank:101,es:"en materia de",en:"in matters of; regarding",example:"En materia de contratos, la prueba documental es clave."},{rank:102,es:"en medio de",en:"in the middle of",example:"Negociaron en medio de una crisis."},{rank:103,es:"en nombre de",en:"in the name of; on behalf of",example:"Firmó en nombre de la sociedad."},{rank:104,es:"en consonancia con",en:"in line with; consistent with",example:"La decisión está en consonancia con la jurisprudencia."},{rank:105,es:"con relación a",en:"in relation to",example:"Con relación a la garantía, falta el original."},{rank:106,es:"por causa de",en:"because of",example:"La pérdida ocurrió por causa del retraso."},{rank:107,es:"por conducto de",en:"through the channel of",example:"La comunicación se remitió por conducto del abogado."},{rank:108,es:"por vía de",en:"by way of; through",example:"La reclamación se presentó por vía arbitral."},{rank:109,es:"por exceso de",en:"because of excess of",example:"La estructura falló por exceso de carga."},{rank:110,es:"por lo que respecta a",en:"as regards; with respect to",example:"Por lo que respecta al plazo, no hubo prórroga."},{rank:111,es:"por lo relativo a",en:"with regard to",example:"Por lo relativo al pago, consta una transferencia."},{rank:112,es:"sin perjuicio de",en:"without prejudice to",example:"Sin perjuicio de otros derechos, reclamamos el pago."},{rank:113,es:"sin menoscabo de",en:"without detriment to",example:"Sin menoscabo de la defensa, se propone negociar."},{rank:114,es:"sin detrimento de",en:"without detriment to",example:"Se acepta sin detrimento de futuras reclamaciones."},{rank:115,es:"bajo pretexto de",en:"under the pretext of",example:"Retuvo el pago bajo pretexto de defectos menores."},{rank:116,es:"bajo reserva de",en:"subject to reservation of",example:"Aceptó bajo reserva de revisar los anexos."},{rank:117,es:"bajo la forma de",en:"in the form of",example:"La garantía se otorgó bajo la forma de cheque."},{rank:118,es:"a todos los efectos legales",en:"for all legal purposes",example:"La notificación se tendrá por válida a todos los efectos legales."},{rank:119,es:"a los efectos oportunos",en:"for the appropriate purposes",example:"Se remite copia a los efectos oportunos."},{rank:120,es:"a efectos probatorios",en:"for evidentiary purposes",example:"Se conserva el correo a efectos probatorios."},{rank:121,es:"a efectos contractuales",en:"for contractual purposes",example:"El domicilio se fija a efectos contractuales."},{rank:122,es:"en señal de conformidad",en:"as a sign of agreement",example:"Las partes firman en señal de conformidad."},{rank:123,es:"en prueba de conformidad",en:"in witness/confirmation of agreement",example:"En prueba de conformidad, firman las partes."},{rank:124,es:"a instancia de parte",en:"at the request of a party",example:"La ejecución se inicia a instancia de parte."},{rank:125,es:"en defecto de",en:"failing; in the absence of",example:"En defecto de acuerdo, decidirá el tribunal."},{rank:126,es:"por causas ajenas a",en:"for causes beyond/foreign to",example:"El retraso se debió a causas ajenas al proveedor."},{rank:127,es:"con carácter previo",en:"prior; preliminary",example:"Con carácter previo, debe enviarse aviso."},{rank:128,es:"con carácter vinculante",en:"with binding effect",example:"La oferta tendrá carácter vinculante."},{rank:129,es:"con carácter confidencial",en:"confidentially",example:"La información se entrega con carácter confidencial."},{rank:130,es:"bajo apercibimiento de",en:"under warning of; subject to",example:"Debe comparecer bajo apercibimiento de multa."},{rank:131,es:"en virtud de poder suficiente",en:"by virtue of sufficient authority/power of attorney",example:"Comparece en virtud de poder suficiente."},{rank:132,es:"a instancia judicial",en:"at judicial instance/request",example:"Se aportó el documento a instancia judicial."},{rank:133,es:"en sede judicial",en:"in judicial proceedings/forum",example:"La cuestión se resolverá en sede judicial."},{rank:134,es:"en sede arbitral",en:"in arbitration forum/proceedings",example:"La disputa se resolverá en sede arbitral."},{rank:135,es:"por causa imputable a",en:"for a cause attributable to",example:"El retraso ocurrió por causa imputable al contratista."},{rank:136,es:"a tenor de",en:"pursuant to; in accordance with",example:"A tenor del contrato, la penalidad es aplicable."},{rank:137,es:"al respecto de",en:"with respect to",example:"Al respecto de la garantía, conviene precisar el plazo."},{rank:138,es:"de resultas de",en:"as a result of",example:"De resultas del defecto, surgieron daños."},{rank:139,es:"en orden a",en:"with a view to; for the purpose of",example:"Se adoptaron medidas en orden a garantizar el pago."},{rank:140,es:"en perjuicio de",en:"to the detriment of",example:"La cláusula opera en perjuicio del consumidor."},{rank:141,es:"con arreglo a",en:"in accordance with; pursuant to",example:"Con arreglo al contrato, procede la penalidad."},{rank:142,es:"con cargo a",en:"charged to; against funds/account",example:"Los gastos serán con cargo al depósito."},{rank:143,es:"con destino a",en:"destined for; bound for",example:"La transferencia se realizó con destino a la cuenta indicada."},{rank:144,es:"con excepción de",en:"with the exception of",example:"Todos aceptaron con excepción del garante."},{rank:145,es:"con independencia de",en:"regardless of; independently of",example:"La obligación existe con independencia del daño."},{rank:146,es:"por lo tocante a",en:"as regards",example:"Por lo tocante a los daños, falta peritaje."},{rank:147,es:"por lo concerniente a",en:"concerning; regarding",example:"Por lo concerniente a la garantía, se requiere original."},{rank:148,es:"bajo pena de",en:"under penalty of",example:"Debe comparecer bajo pena de multa."},{rank:149,es:"a + noun/adjective",en:"manner, direction, price, rate, or idiom",example:"Lo hizo a mano / a diario / a ciegas."},{rank:150,es:"de + noun/adjective",en:"origin, material, content, manner, cause, or idiom",example:"De hecho, actuó de oficio."},{rank:151,es:"en + noun",en:"state, place, topic, field, or manner",example:"En materia de contratos, conviene ser preciso."},{rank:152,es:"por + noun/infinitive",en:"cause, means, distribution, exchange, or route",example:"Lo hizo por necesidad / por escrito."},{rank:153,es:"para + infinitive/noun",en:"purpose, destination, deadline, recipient",example:"Firmó para cerrar el acuerdo."},{rank:154,es:"con + noun",en:"instrument, accompaniment, manner, condition",example:"Actuó con cuidado / con arreglo al contrato."},{rank:155,es:"sin + noun/infinitive",en:"absence, exclusion, non-waiver, opposition",example:"Se acepta sin perjuicio de otros derechos."},{rank:156,es:"bajo + noun",en:"under a condition, authority, pretext, or penalty",example:"Debe cumplir bajo pena de multa."},{rank:157,es:"a pesar de + noun / a pesar de que + clause",en:"despite / although",example:"A pesar del riesgo / A pesar de que había riesgo."},{rank:158,es:"a fin de + infinitive / a fin de que + subjunctive",en:"in order to / so that",example:"A fin de resolver / A fin de que se resuelva."},{rank:159,es:"con tal de + infinitive / con tal de que + subjunctive",en:"provided that / so long as",example:"Acepto con tal de cobrar / con tal de que paguen."},{rank:160,es:"en caso de + noun/infinitive / en caso de que + subjunctive",en:"in case of / if",example:"En caso de incumplimiento / En caso de que incumpla."},{rank:161,es:"por + infinitive / para + infinitive",en:"because of doing / in order to do",example:"Lo sancionaron por incumplir; firmó para evitar juicio."},{rank:162,es:"de acuerdo con / estar de acuerdo con",en:"according to / agree with",example:"De acuerdo con el contrato / Estoy de acuerdo con usted."},{rank:163,es:"en virtud de / por virtud de",en:"by virtue of; pursuant to",example:"En virtud del poder, puede firmar."},{rank:164,es:"sin embargo / embargo",en:"however / seizure/attachment",example:"Es válido; sin embargo, falta registrar."},{rank:165,es:"por supuesto / supuesto",en:"of course / assumed",example:"Por supuesto, revisaremos el documento."},{rank:166,es:"a la postre / postre",en:"ultimately / dessert",example:"A la postre, la prueba decidió el caso."},{rank:167,es:"en cambio / cambiar",en:"however, instead / to change",example:"El precio bajó; en cambio, el plazo aumentó."},{rank:168,es:"de hecho / hecho",en:"in fact / fact or act",example:"De hecho, sí existe recibo."},{rank:169,es:"enfrente de",en:"opposite; in front of",example:"El banco está enfrente del juzgado."},{rank:170,es:"a efectos de",en:"for purposes of",example:"A efectos de notificación, se fija este domicilio."},{rank:171,es:"a instancia de",en:"at the request/instance of",example:"El trámite se inició a instancia del acreedor."},{rank:172,es:"en virtud de",en:"by virtue of; pursuant to",example:"En virtud del poder, puede firmar."},{rank:173,es:"con ocasión de",en:"on the occasion of; in connection with",example:"El daño ocurrió con ocasión de la obra."},{rank:174,es:"sin perjuicio de las acciones que correspondan",en:"without prejudice to the actions that may correspond",example:"Se reclama el pago, sin perjuicio de las acciones que correspondan."},{rank:175,es:"bajo reserva de derechos",en:"under reservation of rights",example:"Se recibe el pago bajo reserva de derechos."}]},{id:"adverbial-idioms",title:"Adverbial Idioms",shortTitle:"Adverbial Idioms",tone:"plum",count:150,entries:[{rank:1,es:"a veces",en:"sometimes",example:"A veces, negociar es mejor que litigar."},{rank:2,es:"a menudo",en:"often",example:"A menudo, los detalles cambian el caso."},{rank:3,es:"a diario",en:"daily",example:"Revisa el correo a diario."},{rank:4,es:"a mano",en:"by hand; within reach",example:"Firmó el recibo a mano."},{rank:5,es:"a pie",en:"on foot",example:"Llegó al juzgado a pie."},{rank:6,es:"a tiempo",en:"on time",example:"El pago llegó a tiempo."},{rank:7,es:"al menos",en:"at least",example:"Al menos, tenemos el contrato firmado."},{rank:8,es:"de repente",en:"suddenly",example:"De repente, la otra parte cambió su posición."},{rank:9,es:"de pronto",en:"suddenly; maybe",example:"De pronto, llegó una nueva oferta."},{rank:10,es:"de nuevo",en:"again",example:"Revise el documento de nuevo."},{rank:11,es:"de vez en cuando",en:"from time to time",example:"De vez en cuando, conviene revisar el archivo."},{rank:12,es:"de momento",en:"for the moment; so far",example:"De momento, no hay respuesta."},{rank:13,es:"en realidad",en:"actually; in reality",example:"En realidad, el pago nunca llegó."},{rank:14,es:"en serio",en:"seriously",example:"Hablo en serio: no firme todavía."},{rank:15,es:"en total",en:"in total",example:"En total, pagó 440.000 AED."},{rank:16,es:"por fin",en:"finally; at last",example:"Por fin, recibimos la respuesta."},{rank:17,es:"por ahora",en:"for now",example:"Por ahora, no presentaremos demanda."},{rank:18,es:"por el momento",en:"for the moment",example:"Por el momento, mantendremos la oferta."},{rank:19,es:"por lo visto",en:"apparently",example:"Por lo visto, hubo un error de transferencia."},{rank:20,es:"por suerte",en:"luckily",example:"Por suerte, había copia del contrato."},{rank:21,es:"por desgracia",en:"unfortunately",example:"Por desgracia, no se conservó el original."},{rank:22,es:"por separado",en:"separately",example:"Analizaremos cada contrato por separado."},{rank:23,es:"por escrito",en:"in writing",example:"Toda modificación debe hacerse por escrito."},{rank:24,es:"por si acaso",en:"just in case",example:"Guarde una copia por si acaso."},{rank:25,es:"con cuidado",en:"carefully",example:"Lea la cláusula con cuidado."},{rank:26,es:"con razón",en:"rightly; with reason",example:"Con razón, pidió garantía."},{rank:27,es:"sin falta",en:"without fail",example:"Envíelo mañana sin falta."},{rank:28,es:"sin querer",en:"unintentionally",example:"Lo borró sin querer."},{rank:29,es:"sin parar",en:"non-stop",example:"Trabajó sin parar."},{rank:30,es:"sin rodeos",en:"directly; without beating around the bush",example:"Hablemos sin rodeos."},{rank:31,es:"a la vez",en:"at the same time",example:"No puede reclamar y renunciar a la vez."},{rank:32,es:"a solas",en:"alone; privately",example:"Quiso hablar a solas con su abogado."},{rank:33,es:"a medias",en:"halfway; partially",example:"La obra quedó a medias."},{rank:34,es:"a oscuras",en:"in the dark",example:"El cliente no debe quedar a oscuras."},{rank:35,es:"a ciegas",en:"blindly",example:"No conviene firmar a ciegas."},{rank:36,es:"a escondidas",en:"secretly",example:"Se reunió a escondidas con la otra parte."},{rank:37,es:"a conciencia",en:"carefully; deliberately",example:"Revisó el contrato a conciencia."},{rank:38,es:"a toda prisa",en:"in great haste",example:"Preparó el escrito a toda prisa."},{rank:39,es:"a primera vista",en:"at first sight/glance",example:"A primera vista, la oferta parece razonable."},{rank:40,es:"a simple vista",en:"at first glance; visibly",example:"A simple vista, el documento parece válido."},{rank:41,es:"a primera hora",en:"first thing; early",example:"Lo enviaremos a primera hora."},{rank:42,es:"a última hora",en:"at the last minute",example:"Cambió la estrategia a última hora."},{rank:43,es:"a corto plazo",en:"in the short term",example:"A corto plazo, conviene negociar."},{rank:44,es:"a largo plazo",en:"in the long term",example:"A largo plazo, la reputación importa."},{rank:45,es:"a grandes rasgos",en:"broadly speaking; in broad outline",example:"A grandes rasgos, el caso es viable."},{rank:46,es:"a lo mejor",en:"maybe; perhaps",example:"A lo mejor aceptan una reducción."},{rank:47,es:"a lo sumo",en:"at most",example:"A lo sumo, tardará una semana."},{rank:48,es:"a más tardar",en:"no later than",example:"Debe pagar a más tardar el viernes."},{rank:49,es:"al día",en:"up to date; per day",example:"Mantenga los registros al día."},{rank:50,es:"al instante",en:"instantly",example:"Respondió al instante."},{rank:51,es:"al momento",en:"immediately; at the moment",example:"Lo revisó al momento."},{rank:52,es:"al parecer",en:"apparently",example:"Al parecer, hubo un segundo acuerdo."},{rank:53,es:"de antemano",en:"in advance",example:"Gracias de antemano por su respuesta."},{rank:54,es:"de buena gana",en:"willingly; gladly",example:"Aceptó de buena gana."},{rank:55,es:"de mala gana",en:"unwillingly; reluctantly",example:"Firmó de mala gana."},{rank:56,es:"de paso",en:"by the way; in passing",example:"De paso, revisemos la cláusula final."},{rank:57,es:"de memoria",en:"by heart; from memory",example:"Recitó la cláusula de memoria."},{rank:58,es:"de oficio",en:"ex officio; officially",example:"El tribunal actuó de oficio."},{rank:59,es:"de oficio",en:"ex officio",example:"El tribunal podrá actuar de oficio."},{rank:60,es:"de una vez",en:"at once; once and for all",example:"Cerrémoslo de una vez."},{rank:61,es:"de una vez por todas",en:"once and for all",example:"Resolvamos el asunto de una vez por todas."},{rank:62,es:"de alguna manera",en:"somehow; in some way",example:"De alguna manera, debemos cerrar el acuerdo."},{rank:63,es:"de algún modo",en:"somehow; in some way",example:"De algún modo, el riesgo debe cubrirse."},{rank:64,es:"de igual forma",en:"in the same way",example:"De igual forma, se notificará al garante."},{rank:65,es:"de lo contrario",en:"otherwise",example:"Pague hoy; de lo contrario, demandaremos."},{rank:66,es:"de sobra",en:"more than enough",example:"Hay prueba de sobra."},{rank:67,es:"de por sí",en:"in itself; by itself",example:"La cláusula es de por sí ambigua."},{rank:68,es:"en broma",en:"jokingly",example:"Lo dijo en broma."},{rank:69,es:"en secreto",en:"secretly",example:"Negociaron en secreto."},{rank:70,es:"en silencio",en:"silently",example:"Escuchó en silencio."},{rank:71,es:"en vano",en:"in vain",example:"Intentó cobrar en vano."},{rank:72,es:"en adelante",en:"from now on; henceforth",example:"En adelante, todo será por escrito."},{rank:73,es:"en el acto",en:"on the spot; immediately",example:"Pagó en el acto."},{rank:74,es:"en el fondo",en:"deep down; fundamentally",example:"En el fondo, la disputa es comercial."},{rank:75,es:"en la práctica",en:"in practice",example:"En la práctica, la cláusula no se aplicó."},{rank:76,es:"en teoría",en:"in theory",example:"En teoría, el plazo era suficiente."},{rank:77,es:"en conjunto",en:"as a whole",example:"En conjunto, la prueba es sólida."},{rank:78,es:"en tal caso",en:"in that case",example:"En tal caso, conviene apelar."},{rank:79,es:"en caso contrario",en:"otherwise",example:"Debe cumplir; en caso contrario, responderá por daños."},{rank:80,es:"por entonces",en:"at that time; back then",example:"Por entonces, la sociedad no estaba registrada."},{rank:81,es:"por lo común",en:"commonly; usually",example:"Por lo común, se exige aviso escrito."},{rank:82,es:"por poco",en:"almost; nearly",example:"Por poco pierden el plazo."},{rank:83,es:"por casualidad",en:"by chance",example:"Encontró el recibo por casualidad."},{rank:84,es:"por adelantado",en:"in advance",example:"Pagó por adelantado."},{rank:85,es:"por anticipado",en:"in advance",example:"Se agradece por anticipado su cooperación."},{rank:86,es:"por dentro",en:"inside; internally",example:"Por dentro, el edificio tenía daños."},{rank:87,es:"por fuera",en:"outside; externally",example:"Por fuera, la fachada parecía terminada."},{rank:88,es:"con frecuencia",en:"frequently",example:"Este problema ocurre con frecuencia."},{rank:89,es:"con calma",en:"calmly",example:"Revise el contrato con calma."},{rank:90,es:"con seguridad",en:"safely; surely",example:"Con seguridad, necesitaremos prueba adicional."},{rank:91,es:"con certeza",en:"with certainty",example:"No podemos afirmarlo con certeza."},{rank:92,es:"con suerte",en:"with luck; hopefully",example:"Con suerte, cerramos el acuerdo mañana."},{rank:93,es:"con facilidad",en:"easily",example:"El error puede corregirse con facilidad."},{rank:94,es:"con dificultad",en:"with difficulty",example:"Logró pagar con dificultad."},{rank:95,es:"con tiempo",en:"with enough time; in advance",example:"Avísenos con tiempo."},{rank:96,es:"con anticipación",en:"in advance",example:"Debe notificarse con anticipación."},{rank:97,es:"con diferencia",en:"by far",example:"Es, con diferencia, la mejor opción."},{rank:98,es:"con permiso",en:"excuse me; with permission",example:"Con permiso, quisiera añadir un punto."},{rank:99,es:"sin cesar",en:"ceaselessly",example:"Reclamó sin cesar."},{rank:100,es:"sin más",en:"just like that; without more",example:"Terminó el contrato sin más."},{rank:101,es:"sin excepción",en:"without exception",example:"Todos deben firmar sin excepción."},{rank:102,es:"sin remedio",en:"inevitably; hopelessly",example:"El contrato quedó sin remedio afectado."},{rank:103,es:"a bordo",en:"on board",example:"Los pasajeros ya estaban a bordo."},{rank:104,es:"a caballo",en:"on horseback; straddling",example:"El proyecto quedó a caballo entre dos jurisdicciones."},{rank:105,es:"a un tiempo",en:"at once; simultaneously",example:"El acuerdo es a un tiempo solución y garantía."},{rank:106,es:"a la larga",en:"in the long run",example:"A la larga, la prevención ahorra costos."},{rank:107,es:"a fin de cuentas",en:"at the end of the day",example:"A fin de cuentas, lo decisivo es la prueba."},{rank:108,es:"a duras penas",en:"barely; with great difficulty",example:"Pudo pagar a duras penas."},{rank:109,es:"a regañadientes",en:"reluctantly",example:"Aceptó la propuesta a regañadientes."},{rank:110,es:"a la fuerza",en:"by force; forcibly",example:"No se puede imponer a la fuerza."},{rank:111,es:"a toda costa",en:"at all costs",example:"Quiere evitar el juicio a toda costa."},{rank:112,es:"a toda máquina",en:"at full speed",example:"El equipo trabaja a toda máquina."},{rank:113,es:"a ciencia cierta",en:"for certain",example:"No sabemos a ciencia cierta cuándo pagará."},{rank:114,es:"a decir verdad",en:"to tell the truth",example:"A decir verdad, la cláusula es ambigua."},{rank:115,es:"al azar",en:"at random",example:"La muestra se eligió al azar."},{rank:116,es:"al por mayor",en:"wholesale",example:"Vende productos al por mayor."},{rank:117,es:"al por menor",en:"retail",example:"La tienda vende al por menor."},{rank:118,es:"de improviso",en:"unexpectedly; without preparation",example:"La inspección llegó de improviso."},{rank:119,es:"de cuando en cuando",en:"from time to time",example:"De cuando en cuando, surgía una objeción."},{rank:120,es:"de cabo a rabo",en:"from beginning to end",example:"Leyó el contrato de cabo a rabo."},{rank:121,es:"de par en par",en:"wide open",example:"La puerta quedó abierta de par en par."},{rank:122,es:"de mal en peor",en:"from bad to worse",example:"La situación fue de mal en peor."},{rank:123,es:"de suyo",en:"in itself; naturally",example:"El deber de buena fe es de suyo exigible."},{rank:124,es:"en absoluto",en:"not at all; absolutely",example:"No estoy de acuerdo en absoluto."},{rank:125,es:"en vilo",en:"in suspense; on edge",example:"El resultado dejó al cliente en vilo."},{rank:126,es:"con creces",en:"amply; more than enough",example:"La prueba demuestra con creces el incumplimiento."},{rank:127,es:"sin quererlo",en:"without intending to",example:"Sin quererlo, agravó el problema."},{rank:128,es:"sin más ni más",en:"for no reason; just like that",example:"No puede retener el pago sin más ni más."},{rank:129,es:"sin ton ni son",en:"without rhyme or reason",example:"No conviene modificar cláusulas sin ton ni son."},{rank:130,es:"sin lugar a dudas",en:"without a doubt",example:"Sin lugar a dudas, el plazo venció."},{rank:131,es:"a la postre",en:"in the end; ultimately",example:"A la postre, ganó la posición más prudente."},{rank:132,es:"en tiempo y forma",en:"in due time and form",example:"El recurso se presentó en tiempo y forma."},{rank:133,es:"en legal forma",en:"in proper legal form",example:"Fue citado en legal forma."},{rank:134,es:"de pleno derecho",en:"by operation of law; automatically",example:"La cláusula produce efectos de pleno derecho."},{rank:135,es:"por ministerio de la ley",en:"by operation of law",example:"La transmisión opera por ministerio de la ley."},{rank:136,es:"con expresa imposición de costas",en:"with express award of costs",example:"Solicitamos condena con expresa imposición de costas."},{rank:137,es:"a la mayor brevedad posible",en:"as soon as possible",example:"Sírvase responder a la mayor brevedad posible."},{rank:138,es:"sin dilación",en:"without delay",example:"Debe subsanar el defecto sin dilación."},{rank:139,es:"por duplicado ejemplar",en:"in duplicate copies",example:"Se firma por duplicado ejemplar."},{rank:140,es:"por vía amistosa",en:"amicably",example:"Intentaremos resolverlo por vía amistosa."},{rank:141,es:"por vía judicial",en:"through court proceedings",example:"Si no pagan, reclamaremos por vía judicial."},{rank:142,es:"por vía arbitral",en:"through arbitration",example:"La controversia se someterá por vía arbitral."},{rank:143,es:"de común acuerdo",en:"by mutual agreement",example:"Las partes podrán modificarlo de común acuerdo."},{rank:144,es:"de mutuo acuerdo",en:"by mutual agreement",example:"El contrato terminó de mutuo acuerdo."},{rank:145,es:"en caso fortuito o fuerza mayor",en:"in case of fortuitous event or force majeure",example:"No responderá en caso fortuito o fuerza mayor."},{rank:146,es:"por las buenas",en:"amicably; willingly",example:"Intentemos resolverlo por las buenas."},{rank:147,es:"por las malas",en:"by force; the hard way",example:"Si no paga, habrá que cobrar por las malas."},{rank:148,es:"a ratos",en:"from time to time; intermittently",example:"Trabajó a ratos durante el fin de semana."},{rank:149,es:"a destiempo",en:"at the wrong time; late",example:"La objeción llegó a destiempo."},{rank:150,es:"por unanimidad",en:"unanimously",example:"La junta aprobó por unanimidad."}]},{id:"verb-preposition",title:"Verb + Preposition",shortTitle:"Verb + Prep.",tone:"rose",count:71,entries:[{rank:1,es:"acabar de + infinitivo",en:"to have just done something",example:"Acabo de recibir el contrato."},{rank:2,es:"estar a punto de + infinitivo",en:"to be about to",example:"Estamos a punto de presentar la demanda."},{rank:3,es:"dejar de + infinitivo",en:"to stop doing",example:"Dejó de pagar en enero."},{rank:4,es:"volver a + infinitivo",en:"to do again",example:"Volvió a incumplir el plazo."},{rank:5,es:"empezar a + infinitivo",en:"to start doing",example:"Empezó a negociar tarde."},{rank:6,es:"comenzar a + infinitivo",en:"to begin doing",example:"Comenzó a revisar el expediente."},{rank:7,es:"ponerse a + infinitivo",en:"to start doing suddenly/actively",example:"Se puso a redactar la carta."},{rank:8,es:"aprender a + infinitivo",en:"to learn to",example:"Aprendió a negociar mejor."},{rank:9,es:"ayudar a + infinitivo",en:"to help to",example:"Esto ayuda a reducir riesgos."},{rank:10,es:"enseñar a + infinitivo",en:"to teach to",example:"Le enseñó a revisar contratos."},{rank:11,es:"obligar a + infinitivo",en:"to force/oblige to",example:"La cláusula obliga a pagar intereses."},{rank:12,es:"pensar en",en:"to think about",example:"Pienso en una solución amistosa."},{rank:13,es:"pensar de",en:"to think of / have an opinion about",example:"¿Qué piensa de esta cláusula?"},{rank:14,es:"depender de",en:"to depend on",example:"El resultado depende de la prueba."},{rank:15,es:"tratar de + infinitivo",en:"to try to",example:"Trató de resolver el conflicto."},{rank:16,es:"tratar sobre",en:"to be about",example:"El informe trata sobre responsabilidad civil."},{rank:17,es:"consistir en",en:"to consist of/in",example:"La obligación consiste en pagar a tiempo."},{rank:18,es:"convertirse en",en:"to become",example:"La mora se convirtió en incumplimiento esencial."},{rank:19,es:"confiar en",en:"to trust in",example:"Confía en la validez del documento."},{rank:20,es:"creer en",en:"to believe in",example:"Cree en la negociación."},{rank:21,es:"soñar con",en:"to dream of/about",example:"Sueña con abrir una oficina propia."},{rank:22,es:"contar con",en:"to have; count on",example:"Contamos con todos los recibos."},{rank:23,es:"quedar con",en:"to arrange to meet",example:"Quedé con el cliente a las cinco."},{rank:24,es:"quedarse con",en:"to keep; retain",example:"Se quedó con una copia."},{rank:25,es:"darse cuenta de",en:"to realize",example:"Se dio cuenta de que faltaba el anexo."},{rank:26,es:"ocuparse de",en:"to take care of",example:"Me ocuparé de la traducción."},{rank:27,es:"encargarse de",en:"to be in charge of",example:"Ella se encarga de los contratos."},{rank:28,es:"hacerse cargo de",en:"to take charge of",example:"Se hizo cargo del expediente."},{rank:29,es:"cuidar de",en:"to take care of",example:"Debe cuidar de sus intereses."},{rank:30,es:"preocuparse por",en:"to worry/care about",example:"Se preocupa por el resultado."},{rank:31,es:"preocuparse de",en:"to take care of; concern oneself with",example:"Me preocuparé de enviar el aviso."},{rank:32,es:"optar por",en:"to opt for",example:"Optó por negociar."},{rank:33,es:"votar por",en:"to vote for",example:"Votó por aprobar el acuerdo."},{rank:34,es:"luchar por",en:"to fight for",example:"Lucha por sus derechos."},{rank:35,es:"responder por",en:"to be liable for; answer for",example:"El garante responde por la deuda."},{rank:36,es:"responder de",en:"to be responsible for",example:"La empresa responde de los daños causados."},{rank:37,es:"estar de acuerdo con",en:"to agree with",example:"Estoy de acuerdo con la propuesta."},{rank:38,es:"estar en contra de",en:"to be against",example:"Está en contra de la modificación."},{rank:39,es:"estar a favor de",en:"to be in favor of",example:"Estamos a favor de negociar."},{rank:40,es:"estar al tanto de",en:"to be aware of; up to date on",example:"Estoy al tanto de los cambios."},{rank:41,es:"estar pendiente de",en:"to be waiting for; watching",example:"Estamos pendientes de la sentencia."},{rank:42,es:"ponerse en contacto con",en:"to contact; get in touch with",example:"Me pondré en contacto con el perito."},{rank:43,es:"tener que ver con",en:"to have to do with",example:"El problema tiene que ver con la entrega."},{rank:44,es:"cumplir con",en:"to comply with",example:"Debe cumplir con sus obligaciones."},{rank:45,es:"acabar por + infinitivo",en:"to end up doing something",example:"Acabaron por aceptar la oferta."},{rank:46,es:"estar por + infinitivo",en:"to be inclined to / still to be done",example:"Estoy por rechazar la propuesta."},{rank:47,es:"estar para + infinitivo",en:"to be about to / in a condition to",example:"El caso está para sentencia."},{rank:48,es:"llegar a + infinitivo",en:"to manage to / come to",example:"Llegó a demostrar el daño."},{rank:49,es:"venir a + infinitivo",en:"to come to / roughly amount to",example:"La cláusula viene a decir lo mismo."},{rank:50,es:"pasar a + infinitivo",en:"to proceed to",example:"Pasamos a analizar la prueba."},{rank:51,es:"negarse a + infinitivo",en:"to refuse to",example:"Se negó a firmar."},{rank:52,es:"atreverse a + infinitivo",en:"to dare to",example:"No se atrevió a reclamar."},{rank:53,es:"aspirar a + infinitivo / a + noun",en:"to aspire to",example:"Aspira a cerrar el acuerdo."},{rank:54,es:"tender a + infinitivo",en:"to tend to",example:"Los tribunales tienden a exigir prueba clara."},{rank:55,es:"renunciar a + noun/infinitive",en:"to waive; give up",example:"No renunció a reclamar daños."},{rank:56,es:"resistirse a + infinitivo",en:"to resist doing",example:"Se resistió a entregar documentos."},{rank:57,es:"acordarse de",en:"to remember",example:"Me acordé de enviar la carta."},{rank:58,es:"olvidarse de",en:"to forget about/to",example:"Se olvidó de pagar."},{rank:59,es:"arrepentirse de",en:"to regret",example:"Se arrepintió de firmar."},{rank:60,es:"dar con",en:"to find; come across",example:"Dimos con el documento original."},{rank:61,es:"toparse con",en:"to run into; encounter",example:"Nos topamos con una cláusula problemática."},{rank:62,es:"encontrarse con",en:"to encounter; meet with",example:"Nos encontramos con una objeción nueva."},{rank:63,es:"insistir en",en:"to insist on",example:"Insistió en cobrar la penalidad."},{rank:64,es:"fijarse en",en:"to notice; pay attention to",example:"Fíjese en la fecha de firma."},{rank:65,es:"abogar por",en:"to advocate for",example:"Abogó por una solución equilibrada."},{rank:66,es:"gozar de",en:"to enjoy; have",example:"Goza de buena reputación."},{rank:67,es:"carecer de",en:"to lack",example:"El documento carece de firma."},{rank:68,es:"disponer de",en:"to have available; dispose of",example:"Disponemos de copia certificada."},{rank:69,es:"constar de",en:"to consist of",example:"El expediente consta de tres tomos."},{rank:70,es:"caer en la cuenta de",en:"to realize",example:"Cayó en la cuenta de que faltaba una página."},{rank:71,es:"caer en",en:"to fall into; incur",example:"Cayó en mora por no pagar."}]}]},Cb=["A1","A2","B1","B2"],af="lesson-status-v1",Tc="audio-settings-v1",_c="writing-practice-v1",Ac="translation-mode-v1",Cc="boox-mode-v1",Mb={tiempos:lr,verbos:Oc,verbos2:Oc,gramatica:Fg,lectura:Wg,vocabulario:sf,palabras:rf,frases:eb,tips:So,resumen:Vc};function Jc({id:l,size:u=18,className:d=""}){const c=Mb[l]||Bc;return o.jsx(c,{size:u,className:d})}const go=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]},sb,ib]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:ob},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"expresiones",level:"B1",title:"Expresiones",subtitle:"648 Spanish expressions",intro:"Four groups ranked from most-used to least-used. Search, browse by group, and open each card to read the example sentence.",blocks:[{type:"expressions-library",library:Ab}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function Db(l){const u=[];let d="",c="normal";for(let m=0;m<l.length;m++){const f=l[m];f==="["?(d&&u.push({text:d,mode:c}),d="",c="irreg"):f==="]"?(d&&u.push({text:d,mode:"irreg"}),d="",c="normal"):f==="{"?(d&&u.push({text:d,mode:c}),d="",c="ending"):f==="}"?(d&&u.push({text:d,mode:"ending"}),d="",c="normal"):d+=f}return d&&u.push({text:d,mode:c}),u}function Ta({raw:l}){return o.jsx(o.Fragment,{children:Db(l).map((u,d)=>{const c=u.mode==="irreg"?"irreg":u.mode==="ending"?"ending":"";return o.jsx("span",{className:c,children:u.text},d)})})}function yo(l){return String(l||"").replace(/[\[\]{}]/g,"")}function pa(l){return String(l||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function Lb({tenses:l,verbName:u}){const[d,c]=L.useState(!1),[m,f]=L.useState([]),[v,h]=L.useState(0),[b,g]=L.useState(""),[w,j]=L.useState(null),[C,D]=L.useState(0),[H,B]=L.useState(!1);function W(){const te=[];for(const ve of l)for(const ne of ve.forms||[])te.push({tense:ve.name,pronoun:ne.p,answer:yo(ne.f)});const K=[...te].sort(()=>Math.random()-.5);return K.slice(0,Math.min(8,K.length))}function X(){f(W()),h(0),g(""),j(null),D(0),B(!1),c(!0)}function F(te){if(te&&te.preventDefault(),w)return;const K=m[v],ve=pa(b)===pa(K.answer);j(ve?"correct":"incorrect"),ve&&D(ne=>ne+1)}function ee(){if(v+1>=m.length){B(!0);return}h(te=>te+1),g(""),j(null)}function P(){window.speechSynthesis?.cancel(),c(!1)}const re=m[v],le=m.length;return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"quiz-trigger-btn",onClick:X,children:[o.jsx(At,{size:14}),"Practicar"]}),d&&o.jsx("div",{className:"quiz-overlay",onClick:P,children:o.jsxs("div",{className:"quiz-modal",onClick:te=>te.stopPropagation(),children:[o.jsxs("header",{className:"quiz-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),o.jsx("h2",{className:"quiz-title",children:u})]}),o.jsx("button",{className:"quiz-close",onClick:P,"aria-label":"Close",children:o.jsx(An,{size:18})})]}),H?o.jsxs("div",{className:"quiz-results",children:[o.jsxs("div",{className:"quiz-results-circle",children:[o.jsxs("div",{className:"quiz-results-pct",children:[Math.round(C/le*100),"%"]}),o.jsxs("div",{className:"quiz-results-fraction",children:[C," / ",le]})]}),o.jsx("h3",{className:"quiz-results-title",children:C===le?"¡Perfecto!":C>=le*.75?"Muy bien":C>=le*.5?"Sigue practicando":"Vamos a repasar"}),o.jsx("p",{className:"quiz-results-msg",children:C===le?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":C>=le*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),o.jsxs("div",{className:"quiz-results-actions",children:[o.jsxs("button",{className:"quiz-retry-btn",onClick:X,children:[o.jsx(Xc,{size:14}),"Otra vez"]}),o.jsx("button",{className:"quiz-done-btn",onClick:P,children:"Cerrar"})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"quiz-progress",children:[o.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",v+1," de ",le]}),o.jsx("div",{className:"quiz-progress-bar",children:o.jsx("div",{className:"quiz-progress-fill",style:{width:`${v/le*100}%`}})})]}),o.jsxs("div",{className:"quiz-question",children:[o.jsx("div",{className:"quiz-tense-label",children:re.tense}),o.jsxs("div",{className:"quiz-prompt",children:[o.jsx("span",{className:"quiz-pronoun",children:re.pronoun}),o.jsx("span",{className:"quiz-blank",children:"________"})]}),o.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",o.jsx("em",{children:u.toLowerCase()})," para esta persona."]})]}),o.jsxs("form",{onSubmit:F,className:"quiz-form",children:[o.jsx("input",{type:"text",className:`quiz-input ${w||""}`,value:b,onChange:te=>g(te.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!w}),!w&&o.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!b.trim(),children:"Comprobar"})]}),w&&o.jsxs("div",{className:`quiz-feedback ${w}`,children:[w==="correct"?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"quiz-feedback-icon",children:o.jsx(Yc,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),o.jsx("div",{className:"quiz-feedback-answer",children:re.answer})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"quiz-feedback-icon",children:o.jsx(An,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),o.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",o.jsx("strong",{children:re.answer})]})]})]}),o.jsx(Pe,{text:re.answer,size:"md",className:"quiz-feedback-speak"})]}),w&&o.jsxs("button",{className:"quiz-next-btn",onClick:ee,children:[v+1>=le?"Ver resultados":"Siguiente",o.jsx(Tt,{size:16})]}),o.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",o.jsx("strong",{children:C})," / ",v+(w?1:0)]})]})]})})]})}function Mc(l){return[...l].sort(()=>Math.random()-.5)}function vf(l){const u=[];function d(f,v){if(!f||!v)return;const h=yo(String(f)).trim(),b=String(v).trim();h.length<2||b.length<2||u.push({es:h,en:b})}for(const f of l?.sections||[]){for(const v of f.examples||[])d(v.es,v.en);for(const v of f.table?.rows||[])v?.[0]&&v?.[1]&&d(v[1],`${v[0]} form`)}for(const f of l?.blocks||[]){for(const v of f.pairs||[])d(v.es,v.en);for(const v of f.columns||[])d(v.es,v.en);for(const v of f.phrases||[])d(v.es,v.en);for(const v of f.words||[])d(v.es,v.en);for(const v of f.lessons||[])for(const h of vf(v))d(h.es,h.en)}const c=[],m=new Set;for(const f of u){const v=pa(f.es);m.has(v)||(m.add(v),c.push(f))}return c}function Ub(l){const u=vf(l);return u.length<2?[]:Mc(u).slice(0,Math.min(4,u.length)).map((c,m)=>{const f=m%2===0,v=f?c.es:c.en,h=Mc(u).filter(b=>b!==c).map(b=>f?b.es:b.en).filter(b=>pa(b)!==pa(v)).slice(0,3);return{prompt:f?c.en:c.es,answer:v,speak:c.es,mode:f?"Elige el espanol":"Elige la traduccion",choices:Mc([v,...h]).slice(0,4)}})}function xf({source:l,title:u="Mini practica"}){const d=L.useMemo(()=>Ub(l),[l]),[c,m]=L.useState({}),[f,v]=L.useState(!1);if(L.useEffect(()=>{m({}),v(!1)},[l]),d.length<2)return null;const h=Object.keys(c).length,b=d.reduce((g,w,j)=>pa(c[j])===pa(w.answer)?g+1:g,0);return o.jsxs("section",{className:"lesson-mini-quiz",children:[o.jsxs("div",{className:"lesson-mini-head",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"lesson-mini-kicker",children:[o.jsx(At,{size:13})," Practica rapida"]}),o.jsx("h3",{children:u})]}),o.jsxs("button",{className:"lesson-mini-reset",onClick:()=>{m({}),v(!1)},children:[o.jsx(Xc,{size:13}),"Reiniciar"]})]}),o.jsx("div",{className:"lesson-mini-list",children:d.map((g,w)=>{const j=c[w],C=j&&pa(j)===pa(g.answer);return o.jsxs("div",{className:"lesson-mini-card",children:[o.jsxs("div",{className:"lesson-mini-meta",children:[o.jsx("span",{children:String(w+1).padStart(2,"0")}),o.jsx("em",{children:g.mode}),o.jsx(Pe,{text:g.speak})]}),o.jsx("p",{className:"lesson-mini-prompt",children:g.prompt}),o.jsx("div",{className:"lesson-mini-choices",children:g.choices.map(D=>{const H=j===D;return o.jsx("button",{className:`${H?"active":""} ${f&&H?C?"correct":"wrong":""}`,onClick:()=>m(B=>({...B,[w]:D})),children:D},D)})}),f&&j&&!C&&o.jsxs("div",{className:"lesson-mini-answer",children:["Correcto: ",o.jsx("strong",{children:g.answer})]})]},`${g.prompt}-${w}`)})}),o.jsxs("div",{className:"lesson-mini-footer",children:[o.jsxs("span",{children:[h," / ",d.length," respondidas"]}),o.jsx("button",{className:"lesson-mini-check",disabled:h<d.length,onClick:()=>v(!0),children:"Comprobar"}),f&&o.jsxs("strong",{children:[b," / ",d.length]})]})]})}function Ob({s:l}){return o.jsxs("div",{className:"gl-section",children:[l.heading&&o.jsx("h3",{className:"gl-heading",children:l.heading}),l.text&&o.jsx("p",{className:"gl-text",children:o.jsx(sa,{text:l.text})}),l.table&&o.jsx("div",{className:"lesson-table-wrap",children:o.jsxs("table",{className:"lesson-table gl-table",children:[l.table.headers&&o.jsx("thead",{children:o.jsx("tr",{children:l.table.headers.map((u,d)=>o.jsx("th",{children:u},d))})}),o.jsx("tbody",{children:l.table.rows.map((u,d)=>o.jsx("tr",{children:u.map((c,m)=>o.jsx("td",{children:m===0?c:o.jsx(Ta,{raw:String(c)})},m))},d))})]})}),l.examples&&o.jsx("ul",{className:"gl-examples",children:l.examples.map((u,d)=>o.jsx("li",{children:o.jsx(rt,{es:u.es,en:u.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},d))}),l.tip&&o.jsxs("aside",{className:"gl-tip",children:[o.jsx(So,{size:16,className:"gl-tip-icon"}),o.jsx("p",{children:l.tip})]}),l.takeaway&&o.jsxs("aside",{className:"gl-takeaway",children:[o.jsxs("div",{className:"gl-takeaway-label",children:[o.jsx(Qc,{size:12})," Lo que te llevas"]}),o.jsx("p",{children:l.takeaway})]})]})}const _b={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function rr({level:l}){const u=_b[l]||{};return o.jsx("span",{className:"bio-level-badge",style:{background:u.bg,color:u.color,borderColor:u.border},children:l})}function Gb({poems:l}){const[u,d]=L.useState(null);function c(m){d(f=>f===m?null:m)}return o.jsx("section",{className:"block foldable-poems",children:l.map((m,f)=>{const v=u===f;return o.jsxs("div",{className:`poem-item ${v?"open":"closed"}`,children:[o.jsxs("button",{className:"poem-toggle",onClick:()=>c(f),"aria-expanded":v,children:[o.jsxs("div",{className:"poem-toggle-inner",children:[o.jsx("span",{className:"poem-num",children:String(f+1).padStart(2,"0")}),o.jsxs("div",{className:"poem-toggle-text",children:[o.jsx("span",{className:"poem-title-line",children:m.title}),o.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),o.jsxs("div",{className:"poem-toggle-right",children:[o.jsx("span",{className:"poem-level-tag",children:m.level}),o.jsx(qs,{size:18,className:`poem-chevron ${v?"open":""}`})]})]}),v&&o.jsxs("div",{className:"poem-body",children:[m.note&&o.jsx("p",{className:"poem-intro-note",children:m.note}),m.opening&&o.jsxs("blockquote",{className:"poem-opening-quote",children:[o.jsx(Pe,{text:m.opening,size:"md",className:"poem-quote-speak"}),m.opening]}),o.jsxs("div",{className:"poem-tools",children:[o.jsx(Pe,{text:m.stanzas.map(h=>h.es).join(". "),size:"md"}),o.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),o.jsx("div",{className:"poem-stanzas",children:m.stanzas.map((h,b)=>o.jsxs("div",{className:"poem-stanza",children:[o.jsx("div",{className:"poem-stanza-num",children:b+1}),o.jsx(Es,{text:h.es,paragraphClass:"poem-stanza-es"}),o.jsx("div",{className:"poem-stanza-en",children:h.en})]},b))}),m.vocab&&m.vocab.length>0&&o.jsxs("div",{className:"poem-vocab-block",children:[o.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),o.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((h,b)=>o.jsxs("div",{className:"poem-vocab-row",children:[o.jsx("span",{className:"poem-vocab-es",children:h.es}),o.jsx("span",{className:"poem-vocab-dash",children:"—"}),o.jsx("span",{className:"poem-vocab-en",children:h.en})]},b))})]}),m.learningNote&&o.jsxs("aside",{className:"poem-learning-note",children:[o.jsxs("div",{className:"poem-learning-label",children:[o.jsx(So,{size:14})," Nota de lectura"]}),o.jsx("p",{children:m.learningNote})]})]})]},f)})})}function Hb({songs:l}){const[u,d]=L.useState(null);function c(m){d(f=>f===m?null:m)}return o.jsx("section",{className:"block foldable-poems foldable-songs",children:l.map((m,f)=>{const v=u===f,h=m.sections.map(b=>b.es).join(". ");return o.jsxs("div",{className:`poem-item song-item ${v?"open":"closed"}`,children:[o.jsxs("button",{className:"poem-toggle",onClick:()=>c(f),"aria-expanded":v,children:[o.jsxs("div",{className:"poem-toggle-inner",children:[o.jsx("span",{className:"poem-num",children:String(f+1).padStart(2,"0")}),o.jsxs("div",{className:"poem-toggle-text",children:[o.jsx("span",{className:"poem-title-line",children:m.title}),o.jsx("span",{className:"poem-attribution",children:m.attribution})]})]}),o.jsxs("div",{className:"poem-toggle-right",children:[o.jsx("span",{className:"poem-level-tag",children:m.level}),o.jsx(qs,{size:18,className:`poem-chevron ${v?"open":""}`})]})]}),v&&o.jsxs("div",{className:"poem-body song-body",children:[o.jsx("p",{className:"poem-intro-note",children:m.note}),o.jsxs("div",{className:"poem-tools",children:[o.jsx(Pe,{text:h,size:"md"}),o.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),o.jsx("div",{className:"song-sections",children:m.sections.map((b,g)=>o.jsxs("div",{className:"song-section",children:[o.jsxs("div",{className:"song-section-label",children:[String(g+1).padStart(2,"0")," · ",b.label]}),o.jsxs("div",{className:"song-section-grid",children:[o.jsx(Es,{text:b.es,paragraphClass:"song-lyric-es"}),o.jsx("p",{className:"song-lyric-en",children:b.en})]})]},b.label))}),m.vocab&&m.vocab.length>0&&o.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[o.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),o.jsx("div",{className:"poem-vocab-grid",children:m.vocab.map((b,g)=>o.jsxs("div",{className:"poem-vocab-row",children:[o.jsx("span",{className:"poem-vocab-es",children:b.es}),o.jsx("span",{className:"poem-vocab-dash",children:"—"}),o.jsx("span",{className:"poem-vocab-en",children:b.en})]},g))})]}),m.learningNote&&o.jsxs("aside",{className:"poem-learning-note",children:[o.jsxs("div",{className:"poem-learning-label",children:[o.jsx(So,{size:14})," Nota de canción"]}),o.jsx("p",{children:m.learningNote})]})]})]},m.title)})})}function Rb({bios:l}){const[u,d]=L.useState(null);function c(m){d(f=>f===m?null:m)}return o.jsx("section",{className:"block foldable-bios",children:l.map((m,f)=>{const v=u===f;return o.jsxs("div",{className:`bio-item ${v?"open":"closed"}`,children:[o.jsxs("button",{className:"bio-toggle",onClick:()=>c(f),"aria-expanded":v,children:[o.jsxs("div",{className:"bio-toggle-left",children:[o.jsx("span",{className:"bio-num",children:String(f+1).padStart(2,"0")}),o.jsxs("div",{className:"bio-toggle-text",children:[o.jsx("span",{className:"bio-name",children:m.title}),o.jsx("span",{className:"bio-subtitle-line",children:m.subtitle}),o.jsx("span",{className:"bio-dates",children:m.dates})]})]}),o.jsxs("div",{className:"bio-toggle-right",children:[o.jsx("div",{className:"bio-level-pills",children:[...new Set(m.levels.map(h=>h.level))].map(h=>o.jsx(rr,{level:h},h))}),o.jsx(qs,{size:18,className:`bio-chevron ${v?"open":""}`})]})]}),v&&o.jsx("div",{className:"bio-body",children:m.levels.map((h,b)=>o.jsxs("div",{className:"bio-section",children:[o.jsxs("div",{className:"bio-section-header",children:[o.jsx(rr,{level:h.level}),o.jsx("h3",{className:"bio-section-title",children:h.heading}),o.jsx(Pe,{text:h.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),h.paragraphs.map((g,w)=>o.jsx(Es,{text:g,paragraphClass:"bio-paragraph"},w)),h.vocab&&o.jsxs("div",{className:"bio-vocab",children:[o.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),h.vocab]})]},b))})]},f)})})}function yf(l,u,d,c){return`${l||"chapter"}::${u}::${d}::${c}`}function Bb({lessons:l,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c}){const[m,f]=L.useState(null);function v(h){f(b=>b===h?null:h)}return o.jsx("section",{className:"block foldable-grammar",children:l.map((h,b)=>{const g=m===b,w=yf(u,"grammar",b,h.title);return o.jsxs("div",{className:`gl-item ${g?"open":"closed"}`,children:[o.jsxs("button",{className:"gl-toggle",onClick:()=>v(b),"aria-expanded":g,"touch-action":"manipulation",children:[o.jsx("span",{className:"gl-num",children:String(b+1).padStart(2,"0")}),o.jsx("span",{className:"gl-level-badge",children:h.level}),o.jsxs("div",{className:"gl-toggle-text",children:[o.jsx("span",{className:"gl-title",children:h.title}),o.jsx("span",{className:"gl-subtitle",children:h.subtitle})]}),d[w]&&o.jsx("span",{className:`gl-status-pill ${d[w]}`,children:d[w]==="understood"?"Entendido":"Leído"}),o.jsx(qs,{size:18,className:`gl-chevron ${g?"open":""}`})]}),g&&o.jsxs("div",{className:"gl-body",children:[o.jsx($c,{status:d[w],onChange:j=>c?.(w,j)}),h.intro&&o.jsx("p",{className:"gl-intro",children:h.intro}),h.sections.map((j,C)=>o.jsx(Ob,{s:j},C)),o.jsx(xf,{source:h,title:`Practica: ${h.title}`})]})]},b)})})}function Yb({stories:l,chapterId:u,lessonStatuses:d={},onLessonStatusChange:c}){const[m,f]=L.useState(null);function v(h){f(b=>b===h?null:h)}return o.jsx("section",{className:"block foldable-stories",children:l.map((h,b)=>{const g=m===b,w=yf(u,"story",b,h.title);return o.jsxs("div",{className:`story-item ${g?"open":"closed"}`,children:[o.jsxs("button",{className:"bio-toggle story-toggle",onClick:()=>v(b),"aria-expanded":g,children:[o.jsxs("div",{className:"bio-toggle-left",children:[o.jsx("span",{className:"bio-num",children:String(b+1).padStart(2,"0")}),o.jsxs("div",{className:"bio-toggle-text",children:[o.jsx("span",{className:"bio-name",children:h.title}),o.jsxs("span",{className:"bio-subtitle-line",children:[h.paragraphs.length," párrafos · lectura con audio"]})]})]}),o.jsxs("div",{className:"bio-toggle-right",children:[o.jsxs("div",{className:"bio-level-pills",children:[o.jsx(rr,{level:h.level}),d[w]&&o.jsx("span",{className:`story-status-pill ${d[w]}`,children:d[w]==="understood"?"Entendido":"Leído"})]}),o.jsx(qs,{size:18,className:`bio-chevron ${g?"open":""}`})]})]}),g&&o.jsx("div",{className:"bio-body story-body",children:o.jsxs("div",{className:"bio-section story-section",children:[o.jsxs("div",{className:"bio-section-header",children:[o.jsx(rr,{level:h.level}),o.jsx("h3",{className:"bio-section-title",children:h.title}),o.jsx(Pe,{text:h.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),o.jsx($c,{status:d[w],onChange:j=>c?.(w,j)}),h.paragraphs.map((j,C)=>o.jsx(Es,{text:j,paragraphClass:"bio-paragraph story-paragraph"},C))]})})]},b)})})}const nf="palabras-progress-v1";function wf(l,u){return`${l}::${u.rank}::${u.spanish}`}function Gc(l,u){return u.sourceGroupId||l.id}function or(l,u){return wf(Gc(l,u),u)}function wo(l){return String(l).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const Vb=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function Qb(l){const u=new Map;for(const d of l||[])for(const c of d.entries||[]){const m=wo(c.spanish);u.has(m)||u.set(m,{...c,sourceGroupId:d.id,sourceGroupTitle:d.title})}return Vb.map(d=>{const c=new Set,m=d.terms.map((f,v)=>{const h=wo(f.spanish);if(c.has(h))return null;c.add(h);const b=u.get(h),g=f.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...b||{rank:`T${v+1}`,spanish:g,english:f.english,sourceGroupId:d.id,sourceGroupTitle:d.title},topicTerm:f.spanish,topicEnglish:f.english,topicOrder:v+1}}).filter(Boolean);return{id:d.id,title:d.title,description:d.description,entries:m,isTopic:!0}})}function ln(l){return l.topicTerm||l.spanish}function bo(l){return l.topicEnglish||l.english}let Dc=null;function Hc(){return Dc||(Dc=Xg(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(l=>{const u=l.default||[];return[...u,...Qb(u)]})),Dc}function kf(l,u,d=Date.now()){return jb(l,u,d)}function Xb(l,u,d=Date.now()){const c={total:0,seen:0,due:0,mastered:0,byGroup:{}},m=new Set;for(const f of l||[]){const v={total:f.entries.length,seen:0,due:0,mastered:0};for(const h of f.entries){const b=or(f,h),g=u[b],w=m.has(b);w||(m.add(b),c.total++),g?.seen&&(v.seen++,w||c.seen++,g.mastered&&(v.mastered++,w||c.mastered++),(g.dueAt||0)<=d&&(v.due++,w||c.due++))}c.byGroup[f.id]=v}return c}function tf(l,u){const d=l.spanish.split(",")[0].trim();return u==="topic-work-professions"?{es:`En mi trabajo uso "${d}" con frecuencia.`,en:`At work I use "${d}" often.`}:u==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${d}" con calma.`,en:`Today I can name "${d}" calmly.`}:u==="function-words"?{es:`Uso "${d}" para unir una idea con otra.`,en:`"${d}" helps connect one idea to another.`}:/^to /.test(l.english)?{es:`Hoy necesito ${d} en una frase clara.`,en:`Today I need "${d}" in a clear sentence.`}:{es:`Escribo "${d}" en mi cuaderno de espanol.`,en:`"${d}" means ${bo(l)}.`}}function Ib({onSaveWord:l,savedWords:u=[],progress:d={},onProgressChange:c,onUpdateSavedWord:m}){const[f,v]=L.useState(null),[h,b]=L.useState(""),[g,w]=L.useState(""),[j,C]=L.useState(0),[D,H]=L.useState({}),[B,W]=L.useState(!1),[X,F]=L.useState(!1),[ee,P]=L.useState(!1),[re,le]=L.useState(0),[te,K]=L.useState(!1);L.useEffect(()=>{let V=!0;return Hc().then(ze=>{V&&(v(ze),b(Le=>Le||ze[0]?.id||""))}),()=>{V=!1}},[]);const ve=!f,ne=f?.find(V=>V.id===h)||f?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},fe=L.useMemo(()=>{const V=wo(g),ze=V?ne.entries.filter(Ze=>[Ze.spanish,Ze.english,Ze.topicTerm,Ze.topicEnglish,String(Ze.rank)].some(Ee=>wo(Ee||"").includes(V))):ne.entries;if(!X)return ze;const Le=Date.now();return ze.filter(Ze=>{const Ee=d[or(ne,Ze)];return Ee?.seen&&(Ee.dueAt||0)<=Le})},[ne,g,X,d]),Me=24,Ne=Math.min(j,Math.max(0,fe.length-1)),pe=fe.slice(Ne,Ne+Me),xe=pe.map(V=>ln(V)).join(". "),S=L.useMemo(()=>Xb(f||[],d),[f,d]).byGroup[ne.id]||{total:ne.entries.length,seen:0,due:0,mastered:0},R=74,Z=420,$=Math.max(0,Math.floor(re/R)-4),x=Math.min(fe.length,$+Math.ceil(Z/R)+10),O=fe.slice($,x);if(L.useEffect(()=>{C(0),H({}),le(0)},[h,g,X]),ve)return o.jsx("section",{className:"block palabras-lab",children:o.jsxs("div",{className:"palabras-empty",children:[o.jsx(At,{size:24}),o.jsx("p",{children:"Cargando palabras..."})]})});function Q(){C(V=>V+Me>=fe.length?0:V+Me),H({})}function I(){const V=Math.max(0,fe.length-Me);C(Math.floor(Math.random()*(V+1))),H({})}function de(V){const ze=`${ne.id}-${V.rank}-${V.spanish}`;H(Le=>({...Le,[ze]:!Le[ze]}))}function he(V,ze){const Le=Gc(ne,V),Ze=wf(Le,V),Ee=kf(d[Ze],ze),Xe={...d,[Ze]:{...Ee,groupId:Le,displayGroupId:ne.id,topicId:ne.isTopic?ne.id:void 0,spanish:ln(V),english:bo(V),rank:V.rank}};c?.(Xe),H(Ka=>({...Ka,[`${ne.id}-${V.rank}-${V.spanish}`]:!0}));const xa=u.find(Ka=>wo(Ka.word)===wo(ln(V)));xa?m?.(xa.word,{review:Ee,difficult:ze==="hard"||ze==="again"?!0:xa.difficult}):(ze==="hard"||ze==="again")&&l?.({word:ln(V),translation:bo(V),pos:ne.isTopic?`${ne.title} topic`:ne.title,extras:[`Rank ${V.rank}`,ne.description].filter(Boolean),tags:["palabras",ne.id,Le,"difficult"].filter(Boolean),review:Ee,difficult:!0,savedAt:Date.now()})}function qe(){if(!pe.length)return;if(Ic(),te){window.speechSynthesis?.cancel(),K(!1);return}const V=pe.flatMap(ze=>{const Le=tf(ze,ne.id);return[ln(ze),Le.es,ln(ze)]});K(!0),pf(V.join(". "),{onend:()=>K(!1),onerror:()=>K(!1)})}function $e(V){const ze=Gc(ne,V),Le=ne.isTopic&&V.sourceGroupTitle?`Source ${V.sourceGroupTitle}`:null;l?.({word:ln(V),translation:bo(V),pos:ne.isTopic?`${ne.title} topic`:ne.title,extras:[`Rank ${V.rank}`,ne.description,Le].filter(Boolean),tags:["palabras",ne.id,ze].filter(Boolean),savedAt:Date.now()})}return o.jsxs("section",{className:"block palabras-lab",children:[o.jsxs("div",{className:"palabras-toolbar",children:[o.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:f.map(V=>o.jsxs("button",{className:`palabras-tab ${V.id===ne.id?"active":""}`,onClick:()=>b(V.id),role:"tab","aria-selected":V.id===ne.id,children:[o.jsx("span",{children:V.title.replace(/^Group /,"G")}),o.jsx("strong",{children:V.entries.length})]},V.id))}),o.jsxs("label",{className:"palabras-search",children:[o.jsx("span",{children:"Buscar"}),o.jsx("input",{value:g,onChange:V=>w(V.target.value),placeholder:"palabra, meaning, rank..."})]})]}),o.jsxs("div",{className:"palabras-stage",children:[o.jsxs("div",{className:"palabras-stage-copy",children:[o.jsx("div",{className:"palabras-stage-kicker",children:ne.isTopic?"Tema integrado":"Grupo intacto"}),o.jsx("h2",{children:ne.title}),o.jsx("p",{children:ne.description})]}),o.jsxs("div",{className:"palabras-stage-stats",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Mostrando"}),o.jsx("strong",{children:pe.length})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Filtradas"}),o.jsx("strong",{children:fe.length})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Entrada"}),o.jsx("strong",{children:fe.length?Ne+1:0})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Vencidas"}),o.jsx("strong",{children:S.due})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Vistas"}),o.jsx("strong",{children:S.seen})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Dominadas"}),o.jsx("strong",{children:S.mastered})]})]})]}),o.jsxs("div",{className:"palabras-actions",children:[o.jsx(Pe,{text:xe,size:"md",className:"palabras-read-btn"}),o.jsx("button",{className:`palabras-action-btn ${te?"active":""}`,onClick:qe,children:te?"Escuchando...":"Escucha activa"}),o.jsx("button",{className:`palabras-action-btn ${X?"active":""}`,onClick:()=>F(V=>!V),children:X?"Todas":"Vencidas"}),o.jsx("button",{className:"palabras-action-btn",onClick:()=>W(V=>!V),children:B?"Ocultar ingles":"Mostrar ingles"}),o.jsx("button",{className:"palabras-action-btn",onClick:Q,children:"Siguiente ronda"}),o.jsx("button",{className:"palabras-action-btn",onClick:I,children:"Barajar"}),o.jsx("button",{className:`palabras-action-btn ${ee?"active":""}`,onClick:()=>P(V=>!V),children:"Lista completa"})]}),pe.length?o.jsx("div",{className:"palabras-grid",children:pe.map(V=>{const ze=`${ne.id}-${V.rank}-${V.spanish}`,Le=B||D[ze],Ze=d[or(ne,V)],Ee=tf(V,ne.id);return o.jsxs("article",{className:`palabra-card ${Le?"revealed":""}`,children:[o.jsxs("button",{className:"palabra-main",onClick:()=>de(V),children:[o.jsxs("span",{className:"palabra-rank",children:["#",V.rank]}),o.jsx("span",{className:"palabra-es",children:ln(V)}),o.jsx("span",{className:"palabra-en",children:Le?bo(V):"..."}),Le&&o.jsxs("span",{className:"palabra-example",children:[o.jsx("span",{children:Ee.es}),o.jsx("em",{children:Ee.en})]})]}),o.jsxs("div",{className:"palabra-card-actions",children:[o.jsx(Pe,{text:ln(V)}),o.jsxs("button",{className:"palabra-save",onClick:()=>$e(V),children:[o.jsx(zo,{size:13}),"Memoria"]})]}),o.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(Xe=>o.jsx("button",{onClick:()=>he(V,Xe),children:Xe==="again"?"Again":Xe==="hard"?"Hard":Xe==="good"?"Good":"Easy"},Xe))}),Ze?.seen&&o.jsx("div",{className:"palabra-review-state",children:Ze.mastered?"Dominada":`Due ${new Date(Ze.dueAt||Date.now()).toLocaleDateString()}`})]},ze)})}):o.jsxs("div",{className:"palabras-empty",children:[o.jsx(At,{size:24}),o.jsx("p",{children:"No words match this search in the selected group."})]}),ee&&o.jsxs("div",{className:"palabras-browser",children:[o.jsxs("div",{className:"palabras-browser-head",children:[o.jsx("span",{children:"Lista virtual"}),o.jsxs("strong",{children:[fe.length," palabras"]})]}),o.jsx("div",{className:"palabras-virtual-list",style:{height:Z},onScroll:V=>le(V.currentTarget.scrollTop),children:o.jsx("div",{style:{height:fe.length*R,position:"relative"},children:o.jsx("div",{style:{transform:`translateY(${$*R}px)`},children:O.map(V=>{const ze=d[or(ne,V)];return o.jsxs("div",{className:"palabras-virtual-row",style:{height:R},children:[o.jsxs("span",{className:"palabra-rank",children:["#",V.rank]}),o.jsx("strong",{children:ln(V)}),o.jsx("span",{children:bo(V)}),o.jsx("button",{onClick:()=>he(V,"good"),children:ze?.seen?"Actualizar":"Visto"})]},`${V.rank}-${V.spanish}`)})})})})]})]})}function $c({status:l,onChange:u}){const d=l==="read"||l==="understood",c=l==="understood";function m(){u?.(l==="read"?null:"read")}function f(){u?.(l==="understood"?"read":"understood")}return o.jsxs("div",{className:"lesson-status-control","aria-label":"Lesson status",children:[o.jsx("span",{className:"lesson-status-label",children:"Estado"}),o.jsxs("button",{className:`lesson-status-btn ${d?"active":""}`,onClick:m,children:[o.jsx(Bc,{size:14}),"Leído"]}),o.jsxs("button",{className:`lesson-status-btn understood ${c?"active":""}`,onClick:f,children:[o.jsx(Yc,{size:14}),"Entendido"]})]})}function Zb({chapter:l,sectionId:u,onSaveWord:d,savedWords:c=[],onUpdateSavedWord:m,palabrasProgress:f,onPalabrasProgressChange:v,lessonStatuses:h={},onLessonStatusChange:b}){const g=l.blocks.some(w=>w.type==="foldable-grammar"||w.type==="foldable-stories");return o.jsxs("article",{className:"chapter-body",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsxs("div",{className:"chapter-icon-row",children:[u&&o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(Jc,{id:u,size:22})}),o.jsxs("div",{className:"chapter-level-tag",children:[l.rank?`Nº ${String(l.rank).padStart(2,"0")} · `:"","Nivel ",l.level]})]}),o.jsx("h1",{className:"chapter-title",children:l.title}),l.subtitle&&o.jsx("p",{className:"chapter-subtitle",children:l.subtitle}),!g&&o.jsx($c,{status:h[l.id],onChange:w=>b?.(l.id,w)}),o.jsx("div",{className:"chapter-rule"})]}),l.intro&&o.jsx("p",{className:"chapter-intro drop-cap",children:o.jsx(sa,{text:l.intro})}),l.blocks.map((w,j)=>{switch(w.type){case"indicative-hero":return o.jsx(Kb,{block:w},j);case"indicative-tense-cards":return o.jsx(Jb,{block:w},j);case"participio-section":return o.jsx($b,{block:w},j);case"indicative-timeline":return o.jsx(Wb,{block:w},j);case"conjugation":return o.jsxs("section",{className:"block",children:[o.jsx("h2",{className:"block-heading",children:w.title}),o.jsx("div",{className:"conjugation-grid",children:w.verbs.map((C,D)=>o.jsxs("div",{className:"conjugation-card",children:[o.jsx("div",{className:"conjugation-verb",children:C.name}),o.jsx("ul",{className:"conjugation-list",children:C.forms.map((H,B)=>o.jsx("li",{children:H},B))})]},D))})]},j);case"examples":return o.jsxs("section",{className:"block",children:[o.jsx("h2",{className:"block-heading",children:w.title}),o.jsx("ul",{className:"examples-list",children:w.pairs.map((C,D)=>o.jsx("li",{className:"example-item",children:o.jsx(rt,{es:C.es,en:C.en,esClass:"example-es",enClass:"example-en"})},D))})]},j);case"rule":return o.jsx("section",{className:"block",children:o.jsx("dl",{className:"rule-list",children:w.items.map((C,D)=>o.jsxs("div",{className:"rule-row",children:[o.jsx("dt",{children:C.label}),o.jsx("dd",{children:C.value})]},D))})},j);case"reading":return o.jsx("section",{className:"block reading-block",children:w.paragraphs.map((C,D)=>o.jsx(Es,{text:C,paragraphClass:"reading-paragraph"},D))},j);case"foldable-poems":return o.jsx(Gb,{poems:w.poems},j);case"foldable-songs":return o.jsx(Hb,{songs:w.songs},j);case"foldable-bios":return o.jsx(Rb,{bios:w.bios},j);case"foldable-grammar":return o.jsx(Bb,{lessons:w.lessons,chapterId:l.id,lessonStatuses:h,onLessonStatusChange:b},j);case"foldable-stories":return o.jsx(Yb,{stories:w.stories,chapterId:l.id,lessonStatuses:h,onLessonStatusChange:b},j);case"glossary":return o.jsxs("section",{className:"block",children:[o.jsxs("h2",{className:"block-heading",children:[o.jsx(ko,{size:16,className:"inline-icon"})," Glosario"]}),o.jsx("div",{className:"glossary-grid",children:w.words.map((C,D)=>o.jsxs("div",{className:"glossary-row",children:[o.jsx("span",{className:"glossary-es",children:C.es}),o.jsx("span",{className:"glossary-dash",children:"—"}),o.jsx("span",{className:"glossary-en",children:C.en})]},D))})]},j);case"vocab":return o.jsx("section",{className:"block",children:o.jsx("div",{className:"vocab-grid",children:w.columns.map((C,D)=>o.jsxs("div",{className:"vocab-row",children:[o.jsx(Pe,{text:C.es}),o.jsx("span",{className:"vocab-es",children:C.es}),o.jsx("span",{className:"vocab-en",children:C.en})]},D))})},j);case"vocab-lab":return o.jsx(Ib,{onSaveWord:d,savedWords:c,progress:f,onProgressChange:v,onUpdateSavedWord:m},j);case"phraselist":return o.jsx("section",{className:"block",children:o.jsx("ul",{className:"phrase-list",children:w.phrases.map((C,D)=>o.jsxs("li",{className:"phrase-item",children:[o.jsx("span",{className:"phrase-num",children:String(D+1).padStart(2,"0")}),o.jsxs("div",{className:"phrase-content",children:[o.jsxs("p",{className:"phrase-es",children:[o.jsx(Pe,{text:C.es,className:"paragraph-speak"}),o.jsx(sa,{text:C.es})]}),o.jsx("p",{className:"phrase-en",children:C.en})]})]},D))})},j);case"expressions-library":return o.jsx(sv,{library:w.library},j);case"steps":return o.jsx("section",{className:"block",children:o.jsx("ol",{className:"steps-list",children:w.steps.map((C,D)=>o.jsxs("li",{className:"step-item",children:[o.jsx("div",{className:"step-num",children:D+1}),o.jsxs("div",{children:[o.jsx("h3",{className:"step-title",children:C.title}),o.jsx("p",{className:"step-text",children:C.text})]})]},D))})},j);case"big-takeaways":return o.jsx("section",{className:"block",children:o.jsx("div",{className:"big-takeaways",children:w.items.map((C,D)=>o.jsxs("div",{className:"big-takeaway-card",children:[o.jsx("div",{className:"big-takeaway-num",children:C.n}),o.jsx("h3",{className:"big-takeaway-title",children:C.title}),o.jsx("p",{className:"big-takeaway-text",children:C.text})]},D))})},j);case"tip":return o.jsxs("aside",{className:"block tip-block",children:[o.jsx(So,{size:18,className:"tip-icon"}),o.jsx("p",{children:w.text})]},j);case"takeaway":return o.jsxs("aside",{className:"block takeaway-block",children:[o.jsxs("div",{className:"takeaway-label",children:[o.jsx(Qc,{size:14})," Lo que te llevas"]}),o.jsx("p",{children:w.text})]},j);case"verb-table":{const C=Object.fromEntries(w.tenses.map(H=>[H.name,H])),D=w.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return o.jsxs("section",{className:"block verb-table-block",children:[w.participles&&o.jsxs("div",{className:"participles",children:[o.jsx("div",{className:"participles-label",children:"Participios"}),o.jsxs("div",{className:"participles-rows",children:[o.jsxs("div",{className:"participles-row",children:[o.jsx("span",{className:"participles-key",children:"Presente"}),o.jsx("span",{className:"participles-val",children:o.jsx(Ta,{raw:w.participles.present})})]}),o.jsxs("div",{className:"participles-row",children:[o.jsx("span",{className:"participles-key",children:"Pasado"}),o.jsx("span",{className:"participles-val",children:o.jsx(Ta,{raw:w.participles.past})})]})]})]}),o.jsxs("div",{className:"verb-table-header",children:[o.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",o.jsxs("em",{children:['"',l.title.toLowerCase(),'"']})]}),o.jsx(Lb,{tenses:w.tenses,verbName:l.title})]}),o.jsx("div",{className:"tense-stack",children:D.map((H,B)=>{const W=H.map(X=>C[X]).filter(Boolean);if(W.length===0)return null;if(W.length===1){const X=W[0];return o.jsxs("div",{className:"tense-block",children:[o.jsxs("div",{className:"tense-name-row",children:[o.jsx("h3",{className:"tense-name",children:X.name}),o.jsx(Pe,{text:X.forms.map(F=>`${F.p} ${yo(F.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),o.jsx("div",{className:"tense-rows",children:X.forms.map((F,ee)=>o.jsxs(cn.Fragment,{children:[o.jsx("span",{className:"tense-pronoun",children:F.p}),o.jsxs("span",{className:"tense-form",children:[o.jsx(Ta,{raw:F.f}),o.jsx(Pe,{text:yo(F.f),className:"conjugation-speak"})]})]},ee))})]},B)}return o.jsxs("table",{className:"tense-group-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{"aria-hidden":"true"}),W.map((X,F)=>o.jsx("th",{scope:"col",children:o.jsxs("div",{className:"tg-th-inner",children:[o.jsx("span",{children:X.name}),o.jsx(Pe,{text:X.forms.map(ee=>`${ee.p} ${yo(ee.f)}`).join(". ")})]})},F))]})}),o.jsx("tbody",{children:W[0].forms.map((X,F)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",className:"tg-pronoun",children:W[0].forms[F].p}),W.map((ee,P)=>o.jsxs("td",{className:"tg-form",children:[o.jsx(Ta,{raw:ee.forms[F].f}),o.jsx(Pe,{text:yo(ee.forms[F].f),className:"conjugation-speak"})]},P))]},F))})]},B)})}),o.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",o.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},j)}case"verb-uses":return o.jsxs("section",{className:"block verb-uses-block",children:[w.heading&&o.jsx("h2",{className:"verb-uses-heading",children:w.heading}),w.categories.map((C,D)=>o.jsxs("div",{className:"vu-category",children:[o.jsxs("div",{className:"vu-category-head",children:[o.jsx("div",{className:"vu-category-label",children:C.label}),C.note&&o.jsx("div",{className:"vu-category-note",children:C.note})]}),o.jsx("div",{className:"vu-senses",children:C.senses.map((H,B)=>o.jsxs("div",{className:"vu-sense",children:[o.jsx("div",{className:"vu-sense-num",children:H.n}),o.jsxs("div",{className:"vu-sense-body",children:[o.jsx("div",{className:"vu-sense-meaning",children:H.meaning}),H.subnote&&o.jsx("div",{className:"vu-sense-subnote",children:H.subnote}),o.jsx("ul",{className:"vu-examples",children:H.examples.map((W,X)=>o.jsx("li",{children:o.jsx(rt,{es:W.es,en:W.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},X))})]})]},B))})]},D))]},j);case"subjunctive-hero":return o.jsx(Fb,{block:w},j);case"golden-rule":return o.jsx(Pb,{block:w},j);case"subjunctive-tense-cards":return o.jsx(ev,{cards:w.cards},j);case"trigger-grid":return o.jsx(av,{block:w},j);case"conditional-pattern":return o.jsx(nv,{block:w},j);case"tips-grid":return o.jsx(tv,{tips:w.tips},j);case"choice-quiz":return o.jsx(ov,{block:w},j);case"lesson-section":return o.jsxs("section",{className:"block lesson-section",children:[w.heading&&o.jsx("h2",{className:"lesson-heading",children:w.heading}),w.text&&o.jsx("p",{className:"lesson-text",children:o.jsx(sa,{text:w.text})}),w.paragraphs&&w.paragraphs.map((C,D)=>o.jsx("p",{className:"lesson-text",children:o.jsx(sa,{text:C})},D)),w.table&&o.jsx("div",{className:"lesson-table-wrap",children:o.jsxs("table",{className:"lesson-table",children:[w.table.headers&&o.jsx("thead",{children:o.jsx("tr",{children:w.table.headers.map((C,D)=>o.jsx("th",{children:C},D))})}),o.jsx("tbody",{children:w.table.rows.map((C,D)=>o.jsx("tr",{children:C.map((H,B)=>o.jsx("td",{children:B===0?H:o.jsx(Ta,{raw:String(H)})},B))},D))})]})}),w.examples&&o.jsx("ul",{className:"lesson-examples",children:w.examples.map((C,D)=>o.jsx("li",{children:o.jsx(rt,{es:C.es,en:C.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},D))})]},j);default:return null}}),!g&&o.jsx(xf,{source:l,title:`Practica: ${l.title}`})]})}function Kb({block:l}){return o.jsxs("section",{className:"block indicative-hero-block",children:[o.jsx("div",{className:"indicative-eyebrow",children:l.eyebrow}),o.jsx("h2",{children:l.title}),o.jsx("p",{children:o.jsx(sa,{text:l.text})}),o.jsx("div",{className:"indicative-formula",children:l.formula.map((u,d)=>o.jsx("span",{className:u==="+"||u==="="?"operator":"",children:u},`${u}-${d}`))}),o.jsx("div",{className:"indicative-tags",children:l.tags.map(u=>o.jsx("span",{children:u},u))})]})}function Jb({block:l}){const[u,d]=L.useState(0);return o.jsxs("section",{className:"block indicative-tense-block",children:[o.jsx("h2",{className:"lesson-heading",children:l.title}),o.jsx("div",{className:"indicative-card-grid",children:l.cards.map((c,m)=>o.jsxs("article",{className:`indicative-card ${c.tone} ${u===m?"active":""}`,onClick:()=>d(m),children:[o.jsxs("header",{className:"indicative-card-head",children:[o.jsx("div",{className:"indicative-card-mark",children:String(m+1).padStart(2,"0")}),o.jsxs("div",{children:[o.jsx("h3",{children:c.title}),o.jsx("p",{children:c.english})]})]}),o.jsx("p",{className:"indicative-card-use",children:o.jsx(sa,{text:c.use})}),o.jsx("table",{className:"indicative-conj-table",children:o.jsx("tbody",{children:c.forms.map(([f,v])=>o.jsxs("tr",{children:[o.jsx("td",{children:f}),o.jsx("td",{children:o.jsx(Ta,{raw:v})})]},`${c.title}-${f}`))})}),o.jsx("div",{className:"indicative-example",children:o.jsx(rt,{es:c.example.es,en:c.example.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})})]},c.title))})]})}function $b({block:l}){return o.jsxs("section",{className:"block participle-workshop-block",children:[o.jsx("h2",{className:"lesson-heading",children:l.title}),o.jsx("p",{className:"lesson-text",children:o.jsx(sa,{text:l.text})}),o.jsxs("div",{className:"participle-workshop-grid",children:[o.jsxs("article",{children:[o.jsx("h3",{children:"Participios regulares"}),o.jsx("table",{children:o.jsx("tbody",{children:l.regular.map(([u,d])=>o.jsxs("tr",{children:[o.jsx("td",{children:u}),o.jsx("td",{children:o.jsx(Ta,{raw:d})})]},`${u}-${d}`))})})]}),o.jsxs("article",{children:[o.jsx("h3",{children:"Participios irregulares"}),o.jsx("table",{children:o.jsx("tbody",{children:l.irregular.map(([u,d])=>o.jsxs("tr",{children:[o.jsx("td",{children:u}),o.jsx("td",{children:o.jsx(Ta,{raw:d})})]},`${u}-${d}`))})})]})]})]})}function Wb({block:l}){return o.jsxs("section",{className:"block indicative-timeline-block",children:[o.jsx("h2",{className:"lesson-heading",children:l.title}),o.jsx("div",{className:"indicative-timeline-wrap",children:o.jsx("div",{className:"indicative-timeline-line",children:l.events.map(u=>o.jsxs("div",{className:`indicative-timeline-event ${u.lane} ${u.tone}`,style:{left:`${u.position}%`},children:[o.jsx("span",{className:"timeline-dot"}),o.jsx("strong",{children:u.label}),o.jsx("em",{children:u.sub})]},u.label))})})]})}function Fb({block:l}){return o.jsxs("section",{className:"block subj-hero-block",children:[o.jsx("div",{className:"subj-hero-eyebrow",children:l.eyebrow}),o.jsx("h2",{children:l.title}),o.jsx("p",{className:"subj-hero-accent",children:l.accent}),o.jsx("div",{className:"subj-hero-formula",children:l.formula}),o.jsx("ul",{children:l.points.map(u=>o.jsx("li",{children:o.jsx(sa,{text:u})},u))})]})}function Pb({block:l}){return o.jsxs("section",{className:"block golden-rule-block",children:[o.jsx("div",{className:"golden-rule-label",children:l.title}),o.jsx("p",{children:o.jsx(sa,{text:l.text})}),o.jsx("div",{className:"golden-rule-examples",children:l.examples.map((u,d)=>o.jsxs("div",{className:"golden-rule-pair",children:[o.jsxs("div",{children:[o.jsx("span",{children:"No"}),o.jsx(Ta,{raw:u.bad})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Sí"}),o.jsx(Ta,{raw:u.good})]})]},d))})]})}function ev({cards:l}){const[u,d]=L.useState(0);return o.jsxs("section",{className:"block subj-tense-block",children:[o.jsx("div",{className:"subj-tense-tabs",children:l.map((c,m)=>o.jsxs("button",{className:`${c.tone} ${u===m?"active":""}`,onClick:()=>d(m),children:[o.jsx("span",{children:m+1}),c.title]},c.title))}),o.jsxs("div",{className:`subj-tense-card ${l[u].tone}`,children:[o.jsxs("div",{className:"subj-tense-head",children:[o.jsxs("div",{children:[o.jsx("h2",{children:l[u].title}),o.jsx("p",{children:l[u].english})]}),o.jsx("span",{children:l[u].mainClause})]}),o.jsx("div",{className:"subj-tense-formula",children:o.jsx(Ta,{raw:l[u].formula})}),o.jsx("p",{className:"subj-tense-use",children:o.jsx(sa,{text:l[u].use})}),o.jsxs("div",{className:"subj-tense-grid",children:[o.jsx("table",{children:o.jsx("tbody",{children:l[u].forms.map(([c,m])=>o.jsxs("tr",{children:[o.jsx("td",{children:c}),o.jsx("td",{children:o.jsx(Ta,{raw:m})})]},`${c}-${m}`))})}),o.jsx("div",{className:"subj-tense-examples",children:l[u].examples.map(c=>o.jsx("div",{children:o.jsx(rt,{es:c.es,en:c.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},c.es))})]})]})]})}function av({block:l}){return o.jsxs("section",{className:"block trigger-grid-block",children:[o.jsx("h2",{className:"lesson-heading",children:l.heading}),o.jsx("p",{className:"lesson-text",children:o.jsx(sa,{text:l.text})}),o.jsx("div",{className:"trigger-grid",children:l.categories.map(u=>o.jsxs("article",{className:"trigger-card",children:[o.jsx("h3",{children:u.title}),o.jsx("div",{className:"trigger-expression",children:u.trigger}),u.examples.map(d=>o.jsx("div",{className:"trigger-example",children:o.jsx(rt,{es:d.es,en:d.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},d.es))]},u.title))})]})}function nv({block:l}){return o.jsxs("section",{className:"block conditional-pattern-block",children:[o.jsx("h2",{children:l.heading}),o.jsx("div",{className:"conditional-formula",children:o.jsx(Ta,{raw:l.formula})}),o.jsx("p",{children:o.jsx(sa,{text:l.text})}),o.jsx("div",{className:"conditional-examples",children:l.examples.map((u,d)=>o.jsxs("article",{children:[o.jsx("div",{className:"conditional-num",children:String(d+1).padStart(2,"0")}),o.jsx(rt,{es:u.es,en:u.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"}),o.jsx("p",{children:u.note})]},u.es))})]})}function tv({tips:l}){return o.jsx("section",{className:"block tips-grid-block",children:l.map(u=>o.jsxs("article",{className:"subj-tip-card",children:[o.jsx(So,{size:18}),o.jsx("h3",{children:u.title}),o.jsx("p",{children:o.jsx(sa,{text:u.text})})]},u.title))})}function ov({block:l}){const[u,d]=L.useState({}),[c,m]=L.useState(!1),f=l.questions.reduce((h,b,g)=>pa(u[g])===pa(b.answer)?h+1:h,0);function v(){d({}),m(!1)}return o.jsxs("section",{className:"block contextual-quiz-block",children:[o.jsxs("div",{className:"contextual-quiz-head",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"lesson-mini-kicker",children:[o.jsx(At,{size:13})," Prueba contextual"]}),o.jsx("h2",{children:l.title})]}),o.jsxs("button",{onClick:v,children:[o.jsx(Xc,{size:14}),"Reiniciar"]})]}),o.jsx("div",{className:"contextual-quiz-list",children:l.questions.map((h,b)=>{const g=u[b],w=g&&pa(g)===pa(h.answer);return o.jsxs("article",{className:`contextual-quiz-card ${g?w?"correct":"wrong":""}`,children:[o.jsx("div",{className:"contextual-quiz-num",children:String(b+1).padStart(2,"0")}),o.jsx("p",{children:h.prompt}),o.jsx("div",{className:"contextual-quiz-choices",children:h.choices.map(j=>o.jsx("button",{className:g===j?"active":"",onClick:()=>d(C=>({...C,[b]:j})),children:j},j))}),g&&o.jsxs("div",{className:"contextual-quiz-feedback",children:[o.jsx("strong",{children:w?"Correcto.":`Correcto: ${h.answer}.`}),o.jsx("span",{children:h.explanation})]})]},h.prompt)})}),o.jsxs("div",{className:"contextual-quiz-score",children:[o.jsxs("span",{children:[Object.keys(u).length," / ",l.questions.length," respondidas"]}),o.jsx("button",{onClick:()=>m(!0),children:"Ver resultado"}),c&&o.jsxs("strong",{children:[f," / ",l.questions.length]})]})]})}function sv({library:l}){const[u,d]=L.useState(0),[c,m]=L.useState(""),[f,v]=L.useState(0),h=l.perPage||36,b=l.groups[u]||l.groups[0],g=L.useMemo(()=>{const H=pa(c.trim());return H?b.entries.filter(B=>pa(B.es).includes(H)||pa(B.en).includes(H)||pa(B.example).includes(H)):b.entries},[b,c]),w=Math.max(1,Math.ceil(g.length/h)),j=Math.min(f,w-1),C=g.slice(j*h,(j+1)*h);L.useEffect(()=>{v(0)},[u,c]);function D(H){d(H)}return o.jsxs("section",{className:"block expressions-library-block",children:[o.jsxs("div",{className:"expressions-hero",children:[o.jsx("div",{className:"expressions-eye",children:l.eyebrow}),o.jsx("h2",{children:l.title}),o.jsx("p",{children:l.subtitle}),o.jsx("div",{className:"expressions-stats",children:l.groups.map(H=>o.jsxs("div",{children:[o.jsx("strong",{children:H.count}),o.jsx("span",{children:H.title})]},H.id))})]}),o.jsx("div",{className:"expressions-tabs",children:l.groups.map((H,B)=>o.jsxs("button",{className:`${H.tone} ${u===B?"active":""}`,onClick:()=>D(B),children:[o.jsx("span",{children:B+1}),H.shortTitle," (",H.count,")"]},H.id))}),o.jsxs("div",{className:"expressions-toolbar",children:[o.jsxs("label",{children:[o.jsx(Lc,{size:14}),o.jsx("input",{value:c,onChange:H=>m(H.target.value),placeholder:"Search expressions, meanings..."})]}),o.jsxs("div",{className:"expressions-count",children:[g.length," ",g.length===1?"expression":"expressions"]}),o.jsxs("div",{className:"expressions-pager",children:[o.jsx("button",{disabled:j===0,onClick:()=>v(H=>Math.max(0,H-1)),children:"Prev"}),o.jsxs("span",{children:[j+1," / ",w]}),o.jsx("button",{disabled:j>=w-1,onClick:()=>v(H=>Math.min(w-1,H+1)),children:"Next"})]})]}),C.length>0?o.jsx("div",{className:"expressions-grid",children:C.map(H=>{const B=`${b.id}-${H.rank}`;return o.jsxs("article",{className:`expression-card ${b.tone}`,children:[o.jsxs("header",{children:[o.jsxs("span",{className:"expression-rank",children:["#",H.rank]}),o.jsxs("div",{children:[o.jsxs("h3",{children:[o.jsx(Pe,{text:H.es}),o.jsx(sa,{text:H.es})]}),o.jsx("p",{children:H.en})]})]}),H.example&&o.jsxs("div",{className:"expression-example",children:[o.jsx("div",{className:"expression-example-label",children:"Ejemplo"}),o.jsxs("p",{children:[o.jsx(Pe,{text:H.example}),o.jsx(sa,{text:H.example})]})]})]},B)})}):o.jsxs("div",{className:"expressions-empty",children:[o.jsx(Lc,{size:24}),"No expressions found. Try a different search."]}),o.jsx("div",{className:"expressions-foot",children:l.sourceNote})]})}function iv({savedWords:l,onSave:u,onRemove:d}){const[c,m]=L.useState(null),[f,v]=L.useState([]),h=cn.useRef(null),b=cn.useRef(l),g=cn.useRef(f),w=Zc,j=ff,[C,D]=L.useState(null);if(L.useEffect(()=>{b.current=l},[l]),L.useEffect(()=>{g.current=f},[f]),L.useEffect(()=>{let K=!0;return Hc().then(ve=>{K&&v(ve)}).catch(()=>{K&&v([])}),()=>{K=!1}},[]),L.useEffect(()=>{let K="";async function ve(Ne,pe,xe){const T=w(Ne);if(!T||T.length<2)return;D(null);let S=Fm(T,b.current,g.current);if(!S&&g.current.length===0)try{const R=await Hc();g.current=R,v(R),S=Fm(T,b.current,R)}catch{}if(S){m({word:S.matchedWord||T,x:pe,y:xe,loading:!1,result:S,error:!1});return}m({word:T,x:pe,y:xe,loading:!0,result:null,error:!1});try{const R=await j(T);m(Z=>Z&&Z.word===T?{...Z,loading:!1,result:R,error:!R}:Z)}catch{m(Z=>Z&&Z.word===T?{...Z,loading:!1,error:!0}:Z)}}function ne(Ne){const pe=Ne.target.closest&&Ne.target.closest("[data-dict-word]");if(!pe)return;const xe=w(pe.dataset.dictWord||pe.textContent||"");if(!xe||xe.length<2)return;const T=window.getSelection?.();if(T&&!T.isCollapsed&&w(T.toString()).length>1)return;Ne.stopPropagation();const S=pe.getBoundingClientRect(),R=S.left+S.width/2,Z=S.bottom+10;ve(xe,R,Z)}function fe(){clearTimeout(fe._t),fe._t=setTimeout(()=>{const Ne=window.getSelection(),pe=Ne?.toString()||"",xe=w(pe);if(!xe||xe.length<2||xe.split(/\s+/).length>3){K&&D(null),K="";return}if(xe===K)return;K=xe;let T=window.innerWidth/2,S=120;try{const $=Ne.getRangeAt(0).getBoundingClientRect();T=$.left+$.width/2,S=$.top-6}catch{}const R=96;T=Math.max(R/2+8,Math.min(T,window.innerWidth-R/2-8)),S<50&&(S=50),D({word:xe,x:T,y:S})},200)}function Me(Ne){const pe=h.current&&h.current.contains(Ne.target),xe=Ne.target.closest&&Ne.target.closest(".dict-floating-btn"),T=Ne.target.closest&&Ne.target.closest("[data-dict-word]");!pe&&!xe&&!T&&(m(null),D(null),K="")}return window.__bookOpenPopup=ve,document.addEventListener("selectionchange",fe),document.addEventListener("pointerup",ne),document.addEventListener("pointerdown",Me),()=>{document.removeEventListener("selectionchange",fe),document.removeEventListener("pointerup",ne),document.removeEventListener("pointerdown",Me),delete window.__bookOpenPopup}},[]),!c&&!C)return null;if(!c&&C)return o.jsxs("button",{className:"dict-floating-btn",style:{left:C.x,top:C.y},onClick:K=>{K.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(C.word,C.x,C.y+50)},onPointerDown:K=>K.stopPropagation(),children:[o.jsx(ko,{size:14}),o.jsx("span",{children:"Traducir"})]});const H=290,B=Math.max(H/2+8,Math.min(c.x,window.innerWidth-H/2-8)),W=c.y+220>window.innerHeight,X=W?"auto":c.y,F=W?Math.max(12,window.innerHeight-c.y+12):"auto",ee=new Set(cr(c.word)),P=Cn(c.word),re=l.find(K=>Cn(K.word)===P)||l.find(K=>ee.has(ir(K.word))),le=!!re;function te(){le?d(re.word):u({word:c.word,translation:c.result?.main||"",pos:c.result?.pos||"",extras:c.result?.extras||[],savedAt:Date.now()})}return o.jsxs("div",{ref:h,className:"dict-popup",style:{left:B,top:X==="auto"?"auto":X,bottom:F==="auto"?"auto":F},children:[o.jsxs("div",{className:"dict-header",children:[o.jsx("span",{className:"dict-word",children:c.word}),o.jsx("button",{className:"dict-close-btn",onClick:()=>m(null),"aria-label":"Close",children:o.jsx(An,{size:14})})]}),o.jsxs("div",{className:"dict-body",children:[c.loading&&o.jsxs("div",{className:"dict-loading",children:[o.jsx("span",{className:"dict-spinner"}),o.jsx("span",{children:"Looking up…"})]}),!c.loading&&c.error&&o.jsxs("div",{className:"dict-fallback",children:[o.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),o.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(ko,{size:14}),'Buscar "',c.word,'" en SpanishDict']})]}),!c.loading&&c.result&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`dict-main-translation ${c.result.isDefinition?"is-definition":""}`,children:c.result.main}),c.result.extras?.length>0&&o.jsx("div",{className:"dict-extras",children:c.result.extras.map((K,ve)=>o.jsx("span",{className:"dict-extra-tag",children:K},ve))}),c.result.meanings?.length>0&&o.jsx("ul",{className:"dict-meanings",children:c.result.meanings.map((K,ve)=>o.jsx("li",{className:"dict-meaning-item",children:K},ve))}),c.result.examples?.length>0&&o.jsxs("div",{className:"dict-examples",children:[o.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),c.result.examples.map((K,ve)=>o.jsxs("div",{className:"dict-example",children:[o.jsx("div",{className:"dict-example-es",children:K.es}),o.jsx("div",{className:"dict-example-en",children:K.en})]},ve))]})]})]}),!c.loading&&o.jsxs("button",{className:`dict-save-btn ${le?"saved":""}`,onClick:te,"aria-label":le?"Remove from Memoria":"Save to Memoria",children:[o.jsx(zo,{size:14,className:le?"filled":""}),le?"Guardado en Memoria ✓":c.result?"Guardar en Memoria":"Guardar palabra"]}),o.jsx("div",{className:"dict-footer",children:o.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(ko,{size:12}),"Ver en SpanishDict"]})})]})}function rv({savedWords:l,onRemove:u,onClear:d,onUpdateWord:c}){const[m,f]=L.useState({}),[v,h]=L.useState("grid"),[b,g]=L.useState(""),[w,j]=L.useState("ALL"),[C,D]=L.useState(0),[H,B]=L.useState(!1),[W,X]=L.useState(""),[F,ee]=L.useState(null);function P(S){f(R=>({...R,[S]:!R[S]}))}function re(S){ee({type:"word",word:S})}function le(){ee({type:"clear"})}function te(){F?.type==="word"&&u?.(F.word),F?.type==="clear"&&d?.(),ee(null)}const K=[...l].sort((S,R)=>{const Z=S.review?.seen&&(S.review?.dueAt||0)<=Date.now(),$=R.review?.seen&&(R.review?.dueAt||0)<=Date.now();return Z!==$?Z?-1:1:R.savedAt-S.savedAt}),ve=L.useMemo(()=>{const S=new Set;for(const R of K)zs(R).forEach(Z=>S.add(Z));return[...S].sort()},[K]),ne=L.useMemo(()=>{const S=b.trim().toLowerCase();return K.filter(R=>{const Z=zs(R),$=w==="ALL"||Z.includes(w),x=!S||R.word.toLowerCase().includes(S)||(R.translation||"").toLowerCase().includes(S)||Z.some(O=>O.toLowerCase().includes(S));return $&&x})},[K,b,w]),fe=ne[C%Math.max(1,ne.length)],Me=L.useMemo(()=>bf(K),[K]);L.useEffect(()=>{D(0),B(!1)},[b,w,l.length]);function Ne(S){const R=W.trim().toLowerCase().replace(/\s+/g,"-");if(!R)return;const Z=l.find(x=>x.word===S),$=Array.from(new Set([...Z?.tags||[],R]));c?.(S,{tags:$}),X("")}function pe(S,R){const Z=l.find($=>$.word===S);c?.(S,{[R]:!Z?.[R]})}function xe(S,R){const Z=l.find(x=>x.word===S),$=kf(Z?.review,R);c?.(S,{review:$,difficult:R==="hard"?!0:Z?.difficult}),T()}function T(){D(S=>(S+1)%Math.max(1,ne.length)),B(!1)}return K.length===0?o.jsxs("div",{className:"memoria-empty",children:[o.jsx(zo,{size:36,className:"memoria-empty-icon"}),o.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),o.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",o.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):o.jsxs("article",{className:"chapter-body memoria-view",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsx("div",{className:"chapter-meta",children:o.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),o.jsx("h1",{className:"chapter-title",children:"Memoria"}),o.jsxs("p",{className:"chapter-subtitle",children:[K.length," ",K.length===1?"palabra guardada":"palabras guardadas"]}),o.jsx("p",{className:"chapter-intro",children:v==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),o.jsxs("div",{className:"memoria-summary-strip",children:[o.jsxs("span",{children:[o.jsx(lr,{size:13})," ",Me.due," due"]}),o.jsxs("span",{children:[o.jsx(ar,{size:13})," ",Me.favorite," favoritas"]}),o.jsxs("span",{children:[o.jsx(nr,{size:13})," ",Me.difficult," dificiles"]}),o.jsxs("span",{children:[o.jsx(Yc,{size:13})," ",Me.mastered," dominadas"]})]}),o.jsxs("div",{className:"memoria-view-toggle",children:[o.jsx("button",{className:`memoria-view-btn ${v==="grid"?"active":""}`,onClick:()=>h("grid"),children:"Tarjetas"}),o.jsx("button",{className:`memoria-view-btn ${v==="list"?"active":""}`,onClick:()=>h("list"),children:"Lista"}),o.jsx("button",{className:`memoria-view-btn ${v==="review"?"active":""}`,onClick:()=>h("review"),children:"Repaso"})]}),o.jsxs("div",{className:"memoria-tools",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Buscar"}),o.jsx("input",{value:b,onChange:S=>g(S.target.value),placeholder:"palabra, translation, tag..."})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Etiqueta"}),o.jsxs("select",{value:w,onChange:S=>j(S.target.value),children:[o.jsx("option",{value:"ALL",children:"Todas"}),ve.map(S=>o.jsx("option",{value:S,children:S},S))]})]}),o.jsx("button",{className:"memoria-tool-btn",onClick:()=>Tb(ne),children:"Export CSV"})]}),v==="review"?o.jsx("div",{className:"memoria-review",children:fe?o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`memoria-review-card ${H?"flipped":""}`,onClick:()=>B(S=>!S),children:[o.jsx("span",{className:"memoria-review-count",children:ne.length?`${C+1} / ${ne.length}`:"0 / 0"}),o.jsx("strong",{children:H?fe.translation||"Sin traduccion":fe.word}),o.jsx("em",{children:H?fe.word:"toca para revelar"})]}),o.jsxs("div",{className:"memoria-review-actions",children:[o.jsx(Pe,{text:fe.word,size:"md"}),o.jsx("input",{value:W,onChange:S=>X(S.target.value),placeholder:"add-tag"}),o.jsx("button",{onClick:()=>Ne(fe.word),children:"Tag"}),o.jsxs("button",{onClick:()=>pe(fe.word,"favorite"),children:[o.jsx(ar,{size:13}),fe.favorite?"Unfavorite":"Favorite"]}),o.jsxs("button",{onClick:()=>pe(fe.word,"difficult"),children:[o.jsx(nr,{size:13}),fe.difficult?"Not hard":"Difficult"]}),o.jsx("button",{onClick:T,children:"Siguiente"})]}),o.jsx("div",{className:"memoria-srs-actions",children:["again","hard","good","easy"].map(S=>o.jsx("button",{onClick:()=>xe(fe.word,S),children:S==="again"?"Again":S==="hard"?"Hard":S==="good"?"Good":"Easy"},S))})]}):o.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):v==="grid"?o.jsx("div",{className:"memoria-grid",children:ne.map(S=>{const R=m[S.word],Z=S.pending,$=zs(S);return o.jsxs("div",{className:`memoria-card ${R?"flipped":""}`,onClick:()=>P(S.word),children:[o.jsxs("div",{className:"memoria-card-inner",children:[o.jsxs("div",{className:"memoria-face front",children:[o.jsx("div",{className:"memoria-word",children:S.word}),S.pos&&o.jsx("div",{className:"memoria-pos",children:S.pos}),S.translation?o.jsx("div",{className:"memoria-front-translation",children:S.translation}):Z?o.jsxs("div",{className:"memoria-front-pending",children:[o.jsx("span",{className:"dict-spinner"}),o.jsx("span",{children:"traduciendo…"})]}):o.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),$.length>0&&o.jsx("div",{className:"memoria-tags",children:$.slice(0,3).map(x=>o.jsx("span",{children:x},x))}),o.jsxs("div",{className:"memoria-label-actions",children:[o.jsx("button",{className:S.favorite?"active":"",onClick:x=>{x.stopPropagation(),pe(S.word,"favorite")},"aria-label":"Toggle favorite",children:o.jsx(ar,{size:12})}),o.jsx("button",{className:S.difficult?"active hard":"",onClick:x=>{x.stopPropagation(),pe(S.word,"difficult")},"aria-label":"Toggle difficult",children:o.jsx(nr,{size:12})})]})]}),o.jsxs("div",{className:"memoria-face back",children:[S.translation?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"memoria-translation",children:S.translation}),S.extras?.length>0&&o.jsx("div",{className:"memoria-extras",children:S.extras.slice(0,3).map((x,O)=>o.jsx("span",{className:"memoria-extra-tag",children:x},O))})]}):o.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),o.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(S.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:x=>x.stopPropagation(),children:"SpanishDict →"})]})]}),o.jsx("button",{className:"memoria-remove",onClick:x=>{x.stopPropagation(),re(S.word)},"aria-label":`Remove ${S.word}`,children:o.jsx(An,{size:13})})]},S.word)})}):o.jsx("div",{className:"memoria-list",children:ne.map(S=>{const R=S.pending,Z=zs(S);return o.jsxs("div",{className:"memoria-list-row",children:[o.jsxs("div",{className:"memoria-list-main",children:[o.jsxs("div",{className:"memoria-list-es",children:[o.jsx("span",{className:"memoria-list-word",children:S.word}),S.pos&&o.jsx("span",{className:"memoria-list-pos",children:S.pos})]}),S.translation?o.jsx("div",{className:"memoria-list-en",children:S.translation}):R?o.jsxs("div",{className:"memoria-list-en pending",children:[o.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):o.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),S.extras?.length>0&&o.jsx("div",{className:"memoria-list-extras",children:S.extras.slice(0,4).map(($,x)=>o.jsx("span",{className:"memoria-list-extra-tag",children:$},x))}),Z.length>0&&o.jsx("div",{className:"memoria-list-extras",children:Z.map($=>o.jsx("span",{className:"memoria-list-extra-tag",children:$},$))})]}),o.jsxs("div",{className:"memoria-list-actions",children:[o.jsx("button",{className:`memoria-list-remove ${S.favorite?"active-label":""}`,onClick:()=>pe(S.word,"favorite"),"aria-label":"Toggle favorite",children:o.jsx(ar,{size:14})}),o.jsx("button",{className:`memoria-list-remove ${S.difficult?"active-hard":""}`,onClick:()=>pe(S.word,"difficult"),"aria-label":"Toggle difficult",children:o.jsx(nr,{size:14})}),o.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(S.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:o.jsx(ko,{size:14})}),o.jsx("button",{className:"memoria-list-remove",onClick:()=>re(S.word),"aria-label":`Remove ${S.word}`,children:o.jsx(An,{size:14})})]})]},S.word)})}),K.length>0&&o.jsx("div",{className:"memoria-actions",children:o.jsx("button",{className:"memoria-clear-btn",onClick:le,children:"Borrar todo"})}),F&&o.jsx("div",{className:"memoria-confirm-overlay",role:"dialog","aria-modal":"true","aria-label":"Confirm Memoria deletion",children:o.jsxs("div",{className:"memoria-confirm-card",children:[o.jsx("div",{className:"memoria-confirm-kicker",children:"Confirmar"}),o.jsx("h3",{children:F.type==="word"?`Remove "${F.word}"?`:"Remove all Memoria words?"}),o.jsx("p",{children:F.type==="word"?"This word will leave your saved cards, review queue, and list.":"This clears every saved word in Memoria for this browser."}),o.jsxs("div",{className:"memoria-confirm-actions",children:[o.jsx("button",{className:"memoria-confirm-cancel",onClick:()=>ee(null),children:"Keep it"}),o.jsx("button",{className:"memoria-confirm-danger",onClick:te,children:F.type==="word"?"Remove word":"Clear all"})]})]})})]})}function lv({savedWords:l,chapters:u,entries:d=[],onEntriesChange:c}){const[m,f]=L.useState(0),[v,h]=L.useState("");async function b(D){c?.(D);try{await window.storage.set(_c,JSON.stringify(D))}catch{}}const g=L.useMemo(()=>{const D=l.slice(0,8).map(B=>({label:`Usa "${B.word}"`,text:`Write 2 Spanish sentences using "${B.word}".`,target:B.word})),H=u.slice(0,6).map(B=>({label:B.title,text:`Write a short Spanish paragraph about "${B.title}".`,target:""}));return[{label:"Diario",text:"Write 5 Spanish sentences about your day.",target:""},{label:"Pregunta",text:"Write a question and answer it in Spanish.",target:""},...D,...H]},[l,u]),w=g[m]||g[0],j=L.useMemo(()=>Nb(v,w),[v,w]);function C(){if(!v.trim())return;const D=[{id:`${Date.now()}`,prompt:w.text,text:v.trim(),feedback:j,createdAt:Date.now()},...d].slice(0,40);b(D),h("")}return o.jsxs("article",{className:"chapter-body writing-view",children:[o.jsxs("header",{className:"chapter-header",children:[o.jsxs("div",{className:"chapter-icon-row",children:[o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(cf,{size:22})}),o.jsx("div",{className:"chapter-level-tag",children:"Practica activa"})]}),o.jsx("h1",{className:"chapter-title",children:"Writing Practice"}),o.jsx("p",{className:"chapter-subtitle",children:"Write, check the shape of the sentence, and keep a small diary."}),o.jsx("div",{className:"chapter-rule"})]}),o.jsxs("section",{className:"writing-board",children:[o.jsxs("div",{className:"writing-prompt-row",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Prompt"}),o.jsx("select",{value:m,onChange:D=>f(Number(D.target.value)),children:g.map((D,H)=>o.jsx("option",{value:H,children:D.label},`${D.label}-${H}`))})]}),o.jsx("p",{children:w.text})]}),o.jsx("textarea",{value:v,onChange:D=>h(D.target.value),placeholder:"Escribe aqui en espanol...",rows:9}),o.jsxs("div",{className:"writing-feedback-grid",children:[o.jsxs("span",{children:[o.jsx("strong",{children:j.words})," words"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.sentences})," sentences"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.accents})," accents"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.connectors})," connectors"]}),o.jsxs("span",{children:[o.jsx("strong",{children:j.score})," score"]})]}),o.jsx("div",{className:"writing-tips",children:j.tips.length?j.tips.map(D=>o.jsx("span",{children:D},D)):o.jsx("span",{children:"Good shape. Read it out loud once."})}),o.jsxs("div",{className:"writing-actions",children:[o.jsx(Pe,{text:v,size:"md"}),o.jsx("button",{onClick:C,disabled:!v.trim(),children:"Save practice"})]})]}),o.jsxs("section",{className:"writing-history",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Qc,{size:18})," History"]}),d.length?d.map(D=>o.jsxs("article",{className:"writing-entry",children:[o.jsxs("div",{className:"writing-entry-meta",children:[new Date(D.createdAt).toLocaleDateString()," - ",D.feedback.words," words"]}),o.jsx("p",{children:D.prompt}),o.jsx("blockquote",{children:D.text})]},D.id)):o.jsx("p",{className:"memoria-empty-text",children:"No saved writing yet."})]})]})}function cv({totalChapters:l,visitedCount:u,savedWordsCount:d,levelFilter:c,palabrasSummary:m,lessonSummary:f,memoriaSummary:v,learnerProfile:h,reviewQueue:b,writingCount:g,sectionProgress:w,recommendations:j,onStart:C,onOpenMemoria:D,onOpenPalabras:H,onOpenVerb:B,onOpenReading:W,onOpenWriting:X,onSelectChapter:F}){const ee=l?Math.round(u/l*100):0;return o.jsxs("article",{className:"chapter-body home-dashboard",children:[o.jsxs("header",{className:"home-hero",children:[o.jsxs("div",{className:"home-kicker",children:[o.jsx(rf,{size:18}),"Plan de estudio"]}),o.jsx("h1",{className:"home-title",children:"Learn Spanish"}),o.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),o.jsxs("div",{className:"home-actions",children:[o.jsxs("button",{className:"home-primary",onClick:C,children:["Empezar",o.jsx(Tt,{size:16})]}),o.jsxs("button",{className:"home-secondary",onClick:D,children:[o.jsx(zo,{size:15}),"Memoria"]})]})]}),o.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Progreso"}),o.jsxs("strong",{children:[ee,"%"]}),o.jsxs("span",{children:[u," / ",l," capitulos"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Nivel"}),o.jsx("strong",{children:c==="ALL"?"Todo":c}),o.jsx("span",{children:"Filtro activo"})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Memoria"}),o.jsx("strong",{children:d}),o.jsxs("span",{children:[v.difficult," dificiles"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Palabras due"}),o.jsx("strong",{children:m.due}),o.jsxs("span",{children:[m.mastered," dominadas"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Lecciones"}),o.jsx("strong",{children:f.understood}),o.jsxs("span",{children:[f.read," leidas"]})]}),o.jsxs("div",{className:"home-stat",children:[o.jsx("span",{className:"home-stat-label",children:"Writing"}),o.jsx("strong",{children:g}),o.jsx("span",{children:"entradas"})]})]}),o.jsxs("section",{className:"home-daily",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Oc,{size:18}),"Ruta diaria"]}),o.jsxs("div",{className:"home-daily-grid",children:[o.jsxs("button",{onClick:H,children:[o.jsx("span",{children:"01"}),o.jsx("strong",{children:"10 palabras"}),o.jsx("em",{children:m.due?`${m.due} vencidas`:`${m.seen} vistas`})]}),o.jsxs("button",{onClick:W,children:[o.jsx("span",{children:"02"}),o.jsx("strong",{children:"Lectura con audio"}),o.jsx("em",{children:"lee y escucha una pagina"})]}),o.jsxs("button",{onClick:B,children:[o.jsx("span",{children:"03"}),o.jsx("strong",{children:"Un verbo"}),o.jsx("em",{children:"tabla, voz, repeticion"})]}),o.jsxs("button",{onClick:D,children:[o.jsx("span",{children:"04"}),o.jsx("strong",{children:"Memoria"}),o.jsxs("em",{children:[d," guardadas"]})]}),o.jsxs("button",{onClick:X,children:[o.jsx("span",{children:"05"}),o.jsx("strong",{children:"Writing"}),o.jsx("em",{children:"sentence practice"})]})]})]}),o.jsxs("section",{className:"home-review-queue",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Jg,{size:18}),"Cola de repaso"]}),o.jsx("div",{className:"home-review-list",children:b.slice(0,8).map((P,re)=>o.jsxs("button",{onClick:()=>P.chapter?F(P.chapter):P.type==="writing"?X():D(),children:[o.jsx("span",{className:`review-type ${P.type}`,children:P.type}),o.jsx("strong",{children:P.title}),o.jsx("em",{children:P.detail})]},`${P.type}-${P.title}-${re}`))}),o.jsxs("div",{className:"home-review-summary",children:[h.vocabulary.due," vocabulary due · ",h.writing.needsPractice," writing rewrites · ",h.chapters.unvisited," unread chapters"]})]}),o.jsxs("section",{className:"home-progress-map",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(Vc,{size:18}),"Mapa de progreso"]}),o.jsx("div",{className:"home-progress-list",children:w.map(P=>{const re=P.total?Math.round(P.visited/P.total*100):0;return o.jsxs("div",{className:"home-progress-row",children:[o.jsxs("div",{className:"home-progress-top",children:[o.jsx("span",{children:P.label}),o.jsxs("strong",{children:[P.visited," / ",P.total]})]}),o.jsx("div",{className:"home-progress-track",children:o.jsx("span",{style:{width:`${re}%`}})})]},P.id)})})]}),o.jsxs("section",{className:"home-path",children:[o.jsxs("div",{className:"home-section-heading",children:[o.jsx(lr,{size:18}),"Siguiente lectura"]}),o.jsx("div",{className:"home-recommendations",children:j.map((P,re)=>o.jsxs("button",{className:"home-rec",onClick:()=>F(P),children:[o.jsx("span",{className:"home-rec-index",children:String(re+1).padStart(2,"0")}),o.jsxs("span",{className:"home-rec-main",children:[o.jsx("span",{className:"home-rec-title",children:P.title}),o.jsxs("span",{className:"home-rec-meta",children:[P.sectionLabel," - ",P.level]})]}),o.jsx(Tt,{size:16})]},P.id))})]})]})}function dv({section:l,chapters:u,visitedSet:d,lessonStatuses:c,studyTime:m,onSelectChapter:f}){if(!l)return null;const v=u.filter(g=>{const w=c?.[g.id];return w==="read"||w==="understood"||d.has(g.id)}).length,h=u.filter(g=>c?.[g.id]==="understood").length,b=l.id==="tiempos"?"Choose one tense lesson at a time. Start with the simple map, then move into compound tenses when the timeline feels clear.":"Choose a lesson from this section and read it slowly. Your progress stays attached to each lesson.";return o.jsxs("article",{className:"section-overview",children:[o.jsxs("header",{className:"section-overview-hero",children:[o.jsxs("div",{className:"chapter-icon-row",children:[o.jsx("div",{className:"chapter-icon-wrap",children:o.jsx(Jc,{id:l.id,size:22})}),o.jsxs("div",{children:[o.jsx("div",{className:"chapter-level-tag",children:"Sección"}),o.jsx("h1",{className:"chapter-title",children:l.label}),o.jsx("p",{className:"chapter-subtitle",children:l.sublabel})]})]}),o.jsx("p",{className:"chapter-intro",children:b}),o.jsxs("div",{className:"section-overview-stats","aria-label":"Section progress",children:[o.jsxs("span",{children:[o.jsx("strong",{children:u.length})," lecciones"]}),o.jsxs("span",{children:[o.jsx("strong",{children:v})," abiertas"]}),o.jsxs("span",{children:[o.jsx("strong",{children:h})," entendidas"]})]})]}),u.length?o.jsx("div",{className:"section-lesson-grid",children:u.map((g,w)=>{const j=c?.[g.id],C=d.has(g.id),D=Number(m?.byChapter?.[g.id])||0,H=g.intro||g.subtitle||"Open the lesson and work through it at your own pace.";return o.jsxs("button",{type:"button",className:`section-lesson-card ${j?`status-${j}`:C?"status-opened":""}`,onClick:()=>f(g),children:[o.jsxs("span",{className:"section-lesson-topline",children:[o.jsx("span",{className:"section-lesson-index",children:String(w+1).padStart(2,"0")}),o.jsx("span",{className:"section-lesson-level",children:g.level})]}),o.jsx("span",{className:"section-lesson-title",children:g.title}),g.subtitle&&o.jsx("span",{className:"section-lesson-subtitle",children:g.subtitle}),o.jsx("span",{className:"section-lesson-preview",children:H}),o.jsxs("span",{className:"section-lesson-footer",children:[o.jsx("span",{className:"section-lesson-status",children:j==="understood"?"Entendido":j==="read"?"Leído":C?"Abierto":"Nuevo"}),D>0&&o.jsx("span",{className:"section-lesson-time",children:js(D)})]})]},g.id)})}):o.jsxs("div",{className:"empty",children:[o.jsx(At,{size:28}),o.jsx("p",{children:"No hay lecciones en este nivel."})]})]})}function uv(){const[l,u]=L.useState("tiempos"),[d,c]=L.useState("tiempos"),[m,f]=L.useState(null),[v,h]=L.useState("ALL"),[b,g]=L.useState(!1),[w,j]=L.useState(!1),[C,D]=L.useState(!0),[H,B]=L.useState(!1),[W,X]=L.useState(""),[F,ee]=L.useState({rate:.85,voiceURI:""}),[P,re]=L.useState("both"),[le,te]=L.useState(!1),[K,ve]=L.useState([]),[ne,fe]=L.useState(null),[Me,Ne]=L.useState(!1),[pe,xe]=L.useState(""),[T,S]=L.useState(""),[R,Z]=L.useState(""),[$,x]=L.useState(!1),[O,Q]=L.useState(""),[I,de]=L.useState(()=>xo()),[he,qe]=L.useState(0),$e=cn.useRef(0),[V,ze]=L.useState(1),[Le,Ze]=L.useState(null),[Ee,Xe]=L.useState([]),[xa,Ka]=L.useState([]),[Ja,Ct]=L.useState({}),[ya,lt]=L.useState({});L.useEffect(()=>{(async()=>{try{const k=await window.storage.get("memoria-words");k?.value&&Xe(JSON.parse(k.value))}catch{}try{const k=await window.storage.get("font-scale");if(k?.value){const Y=parseFloat(k.value);Y>=.85&&Y<=1.3&&ze(Y)}}catch{}try{const k=await window.storage.get("last-read");if(k?.value){const Y=JSON.parse(k.value);Y?.chapterId&&Y.chapterId!=="tiempos"&&Ze(Y)}}catch{}try{const k=await window.storage.get("visited-chapters");k?.value&&Ka(JSON.parse(k.value))}catch{}try{const k=await window.storage.get(nf);k?.value&&Ct(JSON.parse(k.value))}catch{}try{const k=await window.storage.get(af);k?.value&&lt(JSON.parse(k.value))}catch{}try{const k=await window.storage.get(Tc);if(k?.value){const Y=JSON.parse(k.value);ee(Y),Ss(Y)}}catch{}try{const k=await window.storage.get(Ac);(k?.value==="spanish"||k?.value==="both")&&re(k.value)}catch{}try{(await window.storage.get(Cc))?.value==="true"&&te(!0)}catch{}try{const k=await window.storage.get(tr);k?.value&&xe(k.value)}catch{}try{const k=await window.storage.get(_c);k?.value&&ve(JSON.parse(k.value)||[])}catch{}try{const k=await window.storage.get(ks);k?.value&&de(xo(JSON.parse(k.value)))}catch{}})()},[]),L.useEffect(()=>{function k(Y){fe(Y.detail?.worker||null)}return window.addEventListener("learn-spanish-update-ready",k),()=>window.removeEventListener("learn-spanish-update-ready",k)},[]);function No(){ne?.postMessage?.({type:"SKIP_WAITING"})}L.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(V));try{window.storage.set("font-scale",String(V))}catch{}},[V]);function Ts(k){ze(Y=>Math.max(.85,Math.min(1.3,+(Y+k).toFixed(2))))}async function en(k){try{await window.storage.set("memoria-words",JSON.stringify(k))}catch{}}async function ma(k){try{await window.storage.set(nf,JSON.stringify(k))}catch{}}async function As(k){try{await window.storage.set(af,JSON.stringify(k))}catch{}}function Cs(k){Ct(k),ma(k)}function Ms(k,Y){lt(J=>{const se={...J};return Y?se[k]=Y:delete se[k],As(se),se})}function Mt(k){ee(k),Ss(k);try{window.storage.set(Tc,JSON.stringify(k))}catch{}}function dr(){re(k=>{const Y=k==="spanish"?"both":"spanish";try{window.storage.set(Ac,Y)}catch{}return Y})}function Ds(){te(k=>{const Y=!k;try{window.storage.set(Cc,String(Y))}catch{}return Y})}async function Ls(k){Xe(J=>{const se=J.map(Te=>Te.word===k?{...Te,pending:!0}:Te);return en(se),se});const Y=await ff(k);Xe(J=>{const se=J.map(Te=>Te.word!==k?Te:Y?{...Te,translation:Y.main,pos:Y.pos||Te.pos||"",extras:Y.extras||[],pending:!1,translatedAt:Date.now()}:{...Te,pending:!1});return en(se),se})}function Us(k){Xe(Y=>{if(Y.some(se=>se.word===k.word)){const se=Y.map(Te=>Te.word===k.word?{...Te,...k,tags:Array.from(new Set([...Te.tags||[],...k.tags||[]])),extras:Array.from(new Set([...Te.extras||[],...k.extras||[]])),savedAt:Te.savedAt||k.savedAt||Date.now()}:Te);return en(se),se}const J=[k,...Y];return en(J),J}),k.translation||Ls(k.word)}function Mn(k){Xe(Y=>{const J=Y.filter(se=>se.word!==k);return en(J),J})}function fa(k,Y){Xe(J=>{const se=J.map(Te=>Te.word===k?{...Te,...Y}:Te);return en(se),se})}function an(){Xe([]),en([])}L.useEffect(()=>{if(Ee.length===0)return;const k=Ee.filter(Y=>!Y.translation&&!Y.pending);k.length!==0&&k.slice(0,5).forEach((Y,J)=>{setTimeout(()=>Ls(Y.word),J*800)})},[Ee.length]);const ue=L.useMemo(()=>{const k=[];for(const Y of go)for(const J of Y.chapters)(J.alwaysVisible||v==="ALL"||J.level===v)&&k.push({...J,sectionId:Y.id,sectionLabel:Y.label});return k},[v]);L.useEffect(()=>{ue.find(k=>k.id===d)||ue.length&&(c(ue[0].id),u(ue[0].sectionId))},[ue,d]);const $a=L.useMemo(()=>ue.find(k=>k.id===d),[ue,d]),ur=L.useMemo(()=>go.find(k=>k.id===m),[m]),Os=L.useMemo(()=>ue.filter(k=>k.sectionId===m),[ue,m]),_a=ue.findIndex(k=>k.id===d),Dn=_a>0?ue[_a-1]:null,Ln=_a>=0&&_a<ue.length-1?ue[_a+1]:null,ba=L.useMemo(()=>new Set(xa),[xa]),ct=L.useMemo(()=>ue.filter(k=>ba.has(k.id)).length,[ue,ba]),Un=L.useMemo(()=>{const k=ue.filter(Y=>!ba.has(Y.id));return(k.length?k:ue).slice(0,4)},[ue,ba]),_s=L.useMemo(()=>Sb(W,ue,Ee,K),[W,ue,Ee,K]),Gs=L.useMemo(()=>{const k=Object.values(ya||{});return{read:k.filter(Y=>Y==="read"||Y==="understood").length,understood:k.filter(Y=>Y==="understood").length}},[ya]),qo=L.useMemo(()=>bf(Ee),[Ee]),dn=L.useMemo(()=>qb({chapters:ue,visitedChapters:xa,lessonStatuses:ya,palabrasProgress:Ja,savedWords:Ee,writingEntries:K}),[ue,xa,ya,Ja,Ee,K]),pr=L.useMemo(()=>Eb({chapters:ue,lessonStatuses:ya,palabrasProgress:Ja,savedWords:Ee,writingEntries:K}),[ue,ya,Ja,Ee,K]),Eo=Un[0]||ue[0],Hs=L.useMemo(()=>{const k=Object.values(Ja||{}),Y=Date.now();return{seen:k.filter(J=>J?.seen).length,due:k.filter(J=>J?.seen&&(J.dueAt||0)<=Y).length,mastered:k.filter(J=>J?.mastered).length}},[Ja]),Rs=L.useMemo(()=>go.map(k=>{const Y=k.chapters.filter(se=>se.alwaysVisible||v==="ALL"||se.level===v),J=Y.filter(se=>ba.has(se.id)).length;return{id:k.id,label:k.label,total:Y.length,visited:J}}).filter(k=>k.total>0),[v,ba]),Dt=ue.find(k=>k.id==="palabras-5000"),Lt=ue.find(k=>k.sectionId==="verbos")||ue.find(k=>k.sectionId==="verbos2"),To=ue.find(k=>k.sectionId==="lectura"),dt=!!($a&&!C&&!w&&!H&&!m),nn=dt?`${$a.sectionLabel||"Lesson"} - ${$a.title}`:"Open a lesson to count";L.useEffect(()=>{if(!dt||!$a?.id)return;let k=!0;const Y=()=>{if(!k||document.hidden)return;const se=Date.now();qe(Te=>Te+1),de(Te=>{const ra=xo(Te),wa={...ra,totalSeconds:ra.totalSeconds+1,todaySeconds:ra.todaySeconds+1,byChapter:{...ra.byChapter,[$a.id]:(Number(ra.byChapter?.[$a.id])||0)+1},updatedAt:se};if($e.current+=1,$e.current>=15){$e.current=0;try{window.storage.set(ks,JSON.stringify(wa))}catch{}}return wa})},J=window.setInterval(Y,1e3);return()=>{k=!1,window.clearInterval(J)}},[dt,$a?.id]),L.useEffect(()=>{try{window.storage.set(ks,JSON.stringify(I))}catch{}},[C,w,H,m,d]),L.useEffect(()=>{const k=()=>{try{window.storage.set(ks,JSON.stringify(I))}catch{}};return window.addEventListener("pagehide",k),window.addEventListener("beforeunload",k),()=>{window.removeEventListener("pagehide",k),window.removeEventListener("beforeunload",k)}},[I]),L.useEffect(()=>{try{window.storage.set(kb,JSON.stringify(dn))}catch{}},[dn]);function _e(k){const Y=k.sectionId||go.find(J=>J.chapters.some(se=>se.id===k.id))?.id||l;c(k.id),u(Y),f(null),j(!1),B(!1),D(!1),g(!1),Ze(null),Ka(J=>{if(J.includes(k.id))return J;const se=[...J,k.id];try{window.storage.set("visited-chapters",JSON.stringify(se))}catch{}return se});try{window.storage.set("last-read",JSON.stringify({sectionId:Y,chapterId:k.id,title:k.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const J=document.querySelector(".book-main");J&&J.scrollTo({top:0,behavior:"smooth"})}}function ha(k){if(u(k.id),f(k.id),D(!1),j(!1),B(!1),g(!1),typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const Y=document.querySelector(".book-main");Y&&Y.scrollTo({top:0,behavior:"smooth"})}}function On(){if(!Le)return;const k=go.find(J=>J.id===Le.sectionId),Y=k?.chapters.find(J=>J.id===Le.chapterId);Y&&_e({...Y,sectionId:k.id}),Ze(null)}function Ao(){Ze(null)}function mr(){return{app:"Learn Spanish",version:2,exportedAt:new Date().toISOString(),savedWords:Ee,visitedChapters:xa,palabrasProgress:Ja,lessonStatuses:ya,writingEntries:K,audioSettings:F,fontScale:V,translationMode:P,booxMode:le,studyTime:I}}async function fr(k){const Y=Array.isArray(k.savedWords)?k.savedWords:[],J=Array.isArray(k.visitedChapters)?k.visitedChapters:[],se=k.palabrasProgress&&typeof k.palabrasProgress=="object"?k.palabrasProgress:{},Te=k.lessonStatuses&&typeof k.lessonStatuses=="object"?k.lessonStatuses:{},ra=Array.isArray(k.writingEntries)?k.writingEntries:[],wa=k.audioSettings&&typeof k.audioSettings=="object"?k.audioSettings:F,ka=Number(k.fontScale),Ys=k.translationMode==="spanish"?"spanish":"both",Co=!!k.booxMode,Mo=xo(k.studyTime||I);Xe(Y),Ka(J),Ct(se),lt(Te),ve(ra),ee(wa),Ss(wa),re(Ys),te(Co),de(Mo),ka>=.85&&ka<=1.3&&ze(ka),await en(Y),await ma(se),await As(Te),await window.storage.set("visited-chapters",JSON.stringify(J)),await window.storage.set(_c,JSON.stringify(ra)),await window.storage.set(Tc,JSON.stringify(wa)),await window.storage.set(Ac,Ys),await window.storage.set(Cc,String(Co)),await window.storage.set(ks,JSON.stringify(Mo)),ka>=.85&&ka<=1.3&&await window.storage.set("font-scale",String(ka))}async function Bs(){const k=pe.trim();if(!k){Q("Paste your Google OAuth Client ID first.");return}try{await window.storage.set(tr,k),xe(k),Q("Google Client ID saved on this device.")}catch{Q("Could not save the Client ID in this browser.")}}async function ut(){const k=pe.trim();if(!k){Q("Paste and save your Google OAuth Client ID first.");return}x(!0),Q("Opening Google sign-in...");try{await window.storage.set(tr,k);const Y=await Pm(k,"consent");S(Y),Q("Signed in. Syncing your study data now..."),await Ut(Y)}catch(Y){Q(Y?.message||"Google sign-in did not finish.")}finally{x(!1)}}async function Ut(k=T){const Y=pe.trim();if(!Y){Q("Paste and save your Google OAuth Client ID first.");return}x(!0),Q(k?"Syncing with Google Drive...":"Opening Google sign-in...");try{await window.storage.set(tr,Y);const J=k||await Pm(Y,T?"":"consent");S(J),Q("Checking Google Drive...");const se=await fb(J),Te=await hb(J,se?.id),ra=yb(mr(),Te);await fr(ra),await gb(J,ra,se?.id),Z(new Date().toLocaleString()),Q(`Google Drive synced across devices: ${ra.savedWords.length} words, ${Object.keys(ra.lessonStatuses||{}).length} lesson marks, ${js(ra.studyTime?.totalSeconds)} total study time.`)}catch(J){/401|invalid|expired/i.test(J?.message||"")&&S(""),Q(J?.message||"Google Drive sync did not finish.")}finally{x(!1)}}function _n(k=""){return o.jsxs("div",{className:`global-search ${k}`,children:[o.jsxs("label",{children:[o.jsx(Lc,{size:14}),o.jsx("input",{value:W,onChange:Y=>X(Y.target.value),placeholder:"Search everything..."})]}),W.trim().length>=2&&o.jsx("div",{className:"global-search-results",children:_s.length?_s.map((Y,J)=>o.jsxs("button",{onClick:()=>{Y.type==="memoria"?(f(null),D(!1),B(!1),j(!0)):Y.type==="writing"?(f(null),D(!1),j(!1),B(!0)):_e(Y.chapter),X(""),g(!1)},children:[o.jsx("span",{children:Y.title}),o.jsx("em",{children:Y.meta}),Y.context&&o.jsx("small",{children:Y.context})]},`${Y.type}-${Y.title}-${J}`)):o.jsx("div",{className:"global-search-empty",children:"No matches"})})]})}return o.jsxs("div",{className:`book-root translation-mode-${P} ${le?"boox-mode":""}`,children:[o.jsx(iv,{savedWords:Ee,onSave:Us,onRemove:Mn}),o.jsx(ab,{}),o.jsx("style",{children:tb}),o.jsxs("div",{className:"mobile-bar",children:[o.jsx("button",{className:"mobile-btn",onClick:()=>g(!0),"aria-label":"Open menu",children:o.jsx(Pg,{size:20})}),o.jsx("div",{className:"mobile-title",children:o.jsx("span",{className:"mobile-brand-script",children:"Español"})}),o.jsxs("div",{className:`study-timer ${dt?"running":""}`,title:nn,children:[o.jsx(lr,{size:14}),o.jsx("span",{className:"study-timer-main",children:js(I.todaySeconds)}),o.jsx("span",{className:"study-timer-sub",children:js(he)})]}),_n("header-search"),o.jsxs("button",{className:`top-tool-btn ${P==="spanish"?"active":""}`,onClick:dr,"aria-label":P==="spanish"?"Show English translations":"Hide English translations",title:P==="spanish"?"Mostrar ingles":"Solo espanol",children:[o.jsx(ko,{size:15}),o.jsx("span",{children:P==="spanish"?"ES":"EN"})]}),o.jsx("button",{className:"top-tool-btn audio-stop",onClick:Ns,"aria-label":"Stop all audio",title:"Detener audio",children:o.jsx(lf,{size:15})}),o.jsxs("button",{className:`top-tool-btn boox-toggle ${le?"active":""}`,onClick:Ds,"aria-label":le?"Turn off Boox e-ink mode":"Turn on Boox e-ink mode",title:le?"Boox mode on":"Boox / e-ink mode",children:[o.jsx(sf,{size:15}),o.jsx("span",{children:"Ink"})]}),o.jsxs("div",{className:"font-controls",children:[o.jsx("button",{className:"font-btn",onClick:()=>Ts(-.05),"aria-label":"Smaller text",disabled:V<=.85,children:o.jsx("span",{className:"font-btn-small",children:"A"})}),o.jsx("button",{className:"font-btn",onClick:()=>Ts(.05),"aria-label":"Larger text",disabled:V>=1.3,children:o.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),Me&&o.jsx("div",{className:"sync-modal-overlay",role:"dialog","aria-modal":"true","aria-label":"Device sync",children:o.jsxs("div",{className:"sync-modal",children:[o.jsx("button",{className:"sync-close",onClick:()=>Ne(!1),"aria-label":"Close sync",children:o.jsx(An,{size:15})}),o.jsx("div",{className:"sync-kicker",children:"Device Sync"}),o.jsx("h2",{children:"Sync your Spanish book across devices"}),o.jsx("p",{children:"Sign in with Google Drive to keep one private study file across your phone, tablet, Boox, and laptop."}),o.jsxs("div",{className:"sync-stats",children:[o.jsxs("span",{children:[Ee.length," Memoria words"]}),o.jsxs("span",{children:[Object.keys(Ja||{}).length," Palabras reviews"]}),o.jsxs("span",{children:[Object.keys(ya||{}).length," lesson marks"]}),o.jsxs("span",{children:[js(I.totalSeconds)," total time"]}),o.jsx("span",{children:le?"Boox mode on":"Boox mode off"})]}),o.jsxs("div",{className:`sync-status-pill ${T?"connected":""}`,children:[T?"Google connected for this session":"Google not connected yet",R&&o.jsxs("small",{children:["Last sync: ",R]})]}),o.jsxs("label",{className:"sync-client-field",children:[o.jsx("span",{children:"Google OAuth Client ID"}),o.jsx("input",{value:pe,onChange:k=>xe(k.target.value),placeholder:"1234567890-abc.apps.googleusercontent.com",disabled:!1})]}),o.jsx("p",{className:"sync-help",children:"First time only: create a Google Cloud OAuth Client ID for this website origin, then paste it here."}),o.jsxs("div",{className:"sync-actions",children:[o.jsx("button",{onClick:Bs,children:"Save Client ID"}),o.jsx("button",{onClick:ut,disabled:$||!pe.trim(),children:$?"Working...":T?"Reconnect Google":"Sign in with Google"}),o.jsx("button",{onClick:()=>Ut(),disabled:$||!pe.trim(),children:$?"Syncing...":"Sync now"})]}),O&&o.jsx("div",{className:"sync-message",children:O})]})}),Le&&o.jsxs("div",{className:"resume-banner",children:[o.jsxs("div",{className:"resume-banner-text",children:[o.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),o.jsx("span",{className:"resume-banner-title",children:Le.title})]}),o.jsxs("div",{className:"resume-banner-actions",children:[o.jsxs("button",{className:"resume-btn-primary",onClick:On,children:["Continuar",o.jsx(Tt,{size:14})]}),o.jsx("button",{className:"resume-btn-dismiss",onClick:Ao,"aria-label":"Dismiss",children:o.jsx(An,{size:14})})]})]}),ne&&o.jsxs("div",{className:"update-banner",children:[o.jsxs("div",{children:[o.jsx("span",{className:"resume-banner-label",children:"New version ready"}),o.jsx("span",{className:"resume-banner-title",children:"Refresh to use the latest study tools."})]}),o.jsxs("button",{className:"resume-btn-primary",onClick:No,children:["Update",o.jsx(Tt,{size:14})]})]}),o.jsxs("div",{className:"book-shell",children:[o.jsxs("aside",{className:`sidebar ${b?"open":""}`,children:[o.jsxs("div",{className:"sidebar-inner",children:[o.jsx("div",{className:"sidebar-header",children:o.jsxs("div",{className:"brand",children:[o.jsx("div",{className:"brand-mark",children:o.jsx(Bc,{size:18})}),o.jsxs("div",{className:"brand-text",children:[o.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),o.jsx("div",{className:"brand-title",children:"Español"})]}),o.jsx("button",{className:"sidebar-close",onClick:()=>g(!1),"aria-label":"Close menu",children:o.jsx(An,{size:18})})]})}),o.jsxs("nav",{className:"section-nav",children:[o.jsx("div",{className:`section-group home-nav-item ${C?"active":""}`,children:o.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{f(null),D(!0),j(!1),B(!1),g(!1)},children:[o.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:o.jsx(Vc,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Inicio"}),o.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count",children:xa.length})})]})}),go.map(k=>{const Y=k.chapters.filter(se=>se.alwaysVisible||v==="ALL"||se.level===v),J=k.id===l&&!w&&!C&&!H;return o.jsx("div",{className:`section-group ${J?"active":""}`,children:o.jsxs("button",{className:"section-btn",onClick:()=>ha(k),children:[o.jsx("div",{className:"section-icon-wrap",children:o.jsx(Jc,{id:k.id,size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:k.label}),o.jsx("div",{className:"section-sublabel",children:k.sublabel})]}),o.jsxs("div",{className:"section-meta",children:[o.jsx("div",{className:"section-count",children:Y.length}),o.jsx(Tt,{size:16,className:"section-chevron"})]})]})},k.id)}),o.jsx("div",{className:`section-group memoria-nav-item ${w?"active":""}`,children:o.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{f(null),D(!1),B(!1),j(!0),g(!1)},children:[o.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:o.jsx(zo,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Memoria"}),o.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count memoria-count",children:Ee.length})})]})}),o.jsx("div",{className:`section-group writing-nav-item ${H?"active":""}`,children:o.jsxs("button",{className:"section-btn writing-section-btn",onClick:()=>{f(null),D(!1),j(!1),B(!0),g(!1)},children:[o.jsx("div",{className:"section-icon-wrap writing-icon-wrap",children:o.jsx(cf,{size:18,className:"section-icon"})}),o.jsxs("div",{className:"section-text",children:[o.jsx("div",{className:"section-label",children:"Writing"}),o.jsx("div",{className:"section-sublabel",children:"Practica escrita"})]}),o.jsx("div",{className:"section-meta",children:o.jsx("div",{className:"section-count writing-count",children:K.length})})]})})]}),o.jsxs("div",{className:"sidebar-footer",children:[o.jsx("button",{type:"button",className:"sidebar-sync-btn",onClick:()=>{Ne(!0),Q("")},children:"Sync"}),o.jsx("div",{className:"sig",children:"— para Othman"})]})]}),b&&o.jsx("div",{className:"scrim",onClick:()=>g(!1)})]}),o.jsxs("main",{className:"book-main",children:[o.jsxs("div",{className:`book-page ${C?"home-page":""}`,children:[C?o.jsx(cv,{totalChapters:ue.length,visitedCount:ct,savedWordsCount:Ee.length,levelFilter:v,palabrasSummary:Hs,lessonSummary:Gs,memoriaSummary:qo,learnerProfile:dn,reviewQueue:pr,writingCount:K.length,sectionProgress:Rs,recommendations:Un,onStart:()=>Eo&&_e(Eo),onOpenMemoria:()=>{f(null),D(!1),B(!1),j(!0)},onOpenPalabras:()=>Dt&&_e(Dt),onOpenVerb:()=>Lt&&_e(Lt),onOpenReading:()=>To&&_e(To),onOpenWriting:()=>{f(null),D(!1),j(!1),B(!0)},onSelectChapter:_e}):w?o.jsx(rv,{savedWords:Ee,onRemove:Mn,onClear:an,onUpdateWord:fa}):H?o.jsx(lv,{savedWords:Ee,chapters:ue,entries:K,onEntriesChange:ve}):m?o.jsx(dv,{section:ur,chapters:Os,visitedSet:ba,lessonStatuses:ya,studyTime:I,onSelectChapter:_e}):$a?o.jsx(Zb,{chapter:$a,sectionId:l,onSaveWord:Us,savedWords:Ee,onUpdateSavedWord:fa,palabrasProgress:Ja,onPalabrasProgressChange:Cs,lessonStatuses:ya,onLessonStatusChange:Ms}):o.jsxs("div",{className:"empty",children:[o.jsx(At,{size:28}),o.jsx("p",{children:"No hay capítulos en este nivel."})]}),!C&&!w&&!H&&!m&&o.jsxs("nav",{className:"chapter-nav",children:[Dn?o.jsxs("button",{className:"nav-btn prev",onClick:()=>_e(Dn),children:[o.jsx($g,{size:16}),o.jsxs("div",{children:[o.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),o.jsx("div",{className:"nav-title",children:Dn.title})]})]}):o.jsx("div",{}),Ln?o.jsxs("button",{className:"nav-btn next",onClick:()=>_e(Ln),children:[o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),o.jsx("div",{className:"nav-title",children:Ln.title})]}),o.jsx(Tt,{size:16})]}):o.jsx("div",{})]})]}),o.jsx("footer",{className:"level-bar",children:o.jsxs("div",{className:"level-bar-inner",children:[o.jsxs("div",{className:"level-bar-label",children:[o.jsx(zo,{size:14})," Nivel"]}),o.jsxs("div",{className:"level-pills",children:[o.jsx("button",{className:`level-pill ${v==="ALL"?"active":""}`,onClick:()=>h("ALL"),children:"Todos"}),Cb.map(k=>o.jsx("button",{className:`level-pill ${v===k?"active":""}`,onClick:()=>h(k),children:k},k))]}),o.jsx(nb,{settings:F,onChange:Mt}),o.jsx("div",{className:"level-bar-counter",children:C?`${ct} / ${ue.length}`:m?`${Os.length} lecciones`:_a>=0?`${_a+1} / ${ue.length}`:"—"})]})})]})]})]})}typeof window<"u"&&!window.storage&&(window.storage={async get(l){const u=window.localStorage.getItem(l);return u===null?null:{value:u}},async set(l,u){window.localStorage.setItem(l,u)},async delete(l){window.localStorage.removeItem(l)}});Yg();Bg.createRoot(document.getElementById("root")).render(o.jsx(cn.StrictMode,{children:o.jsx(uv,{})}));
