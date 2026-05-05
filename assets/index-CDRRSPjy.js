(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const k of h.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&c(k)}).observe(document,{childList:!0,subtree:!0});function w(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(p){if(p.ep)return;p.ep=!0;const h=w(p);fetch(p.href,h)}})();function Oh(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Ar={exports:{}},Lo={};var Rp;function Lh(){if(Rp)return Lo;Rp=1;var d=Symbol.for("react.transitional.element"),y=Symbol.for("react.fragment");function w(c,p,h){var k=null;if(h!==void 0&&(k=""+h),p.key!==void 0&&(k=""+p.key),"key"in p){h={};for(var b in p)b!=="key"&&(h[b]=p[b])}else h=p;return p=h.ref,{$$typeof:d,type:c,key:k,ref:p!==void 0?p:null,props:h}}return Lo.Fragment=y,Lo.jsx=w,Lo.jsxs=w,Lo}var Yp;function _h(){return Yp||(Yp=1,Ar.exports=Lh()),Ar.exports}var i=_h(),Cr={exports:{}},le={};var Vp;function Hh(){if(Vp)return le;Vp=1;var d=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),k=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),H=Symbol.iterator;function J(m){return m===null||typeof m!="object"?null:(m=H&&m[H]||m["@@iterator"],typeof m=="function"?m:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,se={};function X(m,T,B){this.props=m,this.context=T,this.refs=se,this.updater=B||W}X.prototype.isReactComponent={},X.prototype.setState=function(m,T){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,T,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function te(){}te.prototype=X.prototype;function ee(m,T,B){this.props=m,this.context=T,this.refs=se,this.updater=B||W}var ge=ee.prototype=new te;ge.constructor=ee,Y(ge,X.prototype),ge.isPureReactComponent=!0;var F=Array.isArray;function ne(){}var R={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function O(m,T,B){var Q=B.ref;return{$$typeof:d,type:m,key:T,ref:Q!==void 0?Q:null,props:B}}function re(m,T){return O(m.type,T,m.props)}function ze(m){return typeof m=="object"&&m!==null&&m.$$typeof===d}function ie(m){var T={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(B){return T[B]})}var Te=/\/+/g;function Fe(m,T){return typeof m=="object"&&m!==null&&m.key!=null?ie(""+m.key):T.toString(36)}function Re(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(ne,ne):(m.status="pending",m.then(function(T){m.status==="pending"&&(m.status="fulfilled",m.value=T)},function(T){m.status==="pending"&&(m.status="rejected",m.reason=T)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function q(m,T,B,Q,oe){var pe=typeof m;(pe==="undefined"||pe==="boolean")&&(m=null);var _=!1;if(m===null)_=!0;else switch(pe){case"bigint":case"string":case"number":_=!0;break;case"object":switch(m.$$typeof){case d:case y:_=!0;break;case U:return _=m._init,q(_(m._payload),T,B,Q,oe)}}if(_)return oe=oe(m),_=Q===""?"."+Fe(m,0):Q,F(oe)?(B="",_!=null&&(B=_.replace(Te,"$&/")+"/"),q(oe,T,B,"",function(Oe){return Oe})):oe!=null&&(ze(oe)&&(oe=re(oe,B+(oe.key==null||m&&m.key===oe.key?"":(""+oe.key).replace(Te,"$&/")+"/")+_)),T.push(oe)),1;_=0;var he=Q===""?".":Q+":";if(F(m))for(var ce=0;ce<m.length;ce++)Q=m[ce],pe=he+Fe(Q,ce),_+=q(Q,T,B,pe,oe);else if(ce=J(m),typeof ce=="function")for(m=ce.call(m),ce=0;!(Q=m.next()).done;)Q=Q.value,pe=he+Fe(Q,ce++),_+=q(Q,T,B,pe,oe);else if(pe==="object"){if(typeof m.then=="function")return q(Re(m),T,B,Q,oe);throw T=String(m),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return _}function D(m,T,B){if(m==null)return m;var Q=[],oe=0;return q(m,Q,"","",function(pe){return T.call(B,pe,oe++)}),Q}function $(m){if(m._status===-1){var T=m._result;T=T(),T.then(function(B){(m._status===0||m._status===-1)&&(m._status=1,m._result=B)},function(B){(m._status===0||m._status===-1)&&(m._status=2,m._result=B)}),m._status===-1&&(m._status=0,m._result=T)}if(m._status===1)return m._result.default;throw m._result}var ue=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},we={map:D,forEach:function(m,T,B){D(m,function(){T.apply(this,arguments)},B)},count:function(m){var T=0;return D(m,function(){T++}),T},toArray:function(m){return D(m,function(T){return T})||[]},only:function(m){if(!ze(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return le.Activity=L,le.Children=we,le.Component=X,le.Fragment=w,le.Profiler=p,le.PureComponent=ee,le.StrictMode=c,le.Suspense=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,le.__COMPILER_RUNTIME={__proto__:null,c:function(m){return R.H.useMemoCache(m)}},le.cache=function(m){return function(){return m.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(m,T,B){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Q=Y({},m.props),oe=m.key;if(T!=null)for(pe in T.key!==void 0&&(oe=""+T.key),T)!Z.call(T,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&T.ref===void 0||(Q[pe]=T[pe]);var pe=arguments.length-2;if(pe===1)Q.children=B;else if(1<pe){for(var _=Array(pe),he=0;he<pe;he++)_[he]=arguments[he+2];Q.children=_}return O(m.type,oe,Q)},le.createContext=function(m){return m={$$typeof:k,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:h,_context:m},m},le.createElement=function(m,T,B){var Q,oe={},pe=null;if(T!=null)for(Q in T.key!==void 0&&(pe=""+T.key),T)Z.call(T,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(oe[Q]=T[Q]);var _=arguments.length-2;if(_===1)oe.children=B;else if(1<_){for(var he=Array(_),ce=0;ce<_;ce++)he[ce]=arguments[ce+2];oe.children=he}if(m&&m.defaultProps)for(Q in _=m.defaultProps,_)oe[Q]===void 0&&(oe[Q]=_[Q]);return O(m,pe,oe)},le.createRef=function(){return{current:null}},le.forwardRef=function(m){return{$$typeof:b,render:m}},le.isValidElement=ze,le.lazy=function(m){return{$$typeof:U,_payload:{_status:-1,_result:m},_init:$}},le.memo=function(m,T){return{$$typeof:v,type:m,compare:T===void 0?null:T}},le.startTransition=function(m){var T=R.T,B={};R.T=B;try{var Q=m(),oe=R.S;oe!==null&&oe(B,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ne,ue)}catch(pe){ue(pe)}finally{T!==null&&B.types!==null&&(T.types=B.types),R.T=T}},le.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},le.use=function(m){return R.H.use(m)},le.useActionState=function(m,T,B){return R.H.useActionState(m,T,B)},le.useCallback=function(m,T){return R.H.useCallback(m,T)},le.useContext=function(m){return R.H.useContext(m)},le.useDebugValue=function(){},le.useDeferredValue=function(m,T){return R.H.useDeferredValue(m,T)},le.useEffect=function(m,T){return R.H.useEffect(m,T)},le.useEffectEvent=function(m){return R.H.useEffectEvent(m)},le.useId=function(){return R.H.useId()},le.useImperativeHandle=function(m,T,B){return R.H.useImperativeHandle(m,T,B)},le.useInsertionEffect=function(m,T){return R.H.useInsertionEffect(m,T)},le.useLayoutEffect=function(m,T){return R.H.useLayoutEffect(m,T)},le.useMemo=function(m,T){return R.H.useMemo(m,T)},le.useOptimistic=function(m,T){return R.H.useOptimistic(m,T)},le.useReducer=function(m,T,B){return R.H.useReducer(m,T,B)},le.useRef=function(m){return R.H.useRef(m)},le.useState=function(m){return R.H.useState(m)},le.useSyncExternalStore=function(m,T,B){return R.H.useSyncExternalStore(m,T,B)},le.useTransition=function(){return R.H.useTransition()},le.version="19.2.5",le}var Qp;function Gr(){return Qp||(Qp=1,Cr.exports=Hh()),Cr.exports}var G=Gr();const Ft=Oh(G);var Mr={exports:{}},_o={},Ur={exports:{}},Dr={};var Xp;function Gh(){return Xp||(Xp=1,(function(d){function y(q,D){var $=q.length;q.push(D);e:for(;0<$;){var ue=$-1>>>1,we=q[ue];if(0<p(we,D))q[ue]=D,q[$]=we,$=ue;else break e}}function w(q){return q.length===0?null:q[0]}function c(q){if(q.length===0)return null;var D=q[0],$=q.pop();if($!==D){q[0]=$;e:for(var ue=0,we=q.length,m=we>>>1;ue<m;){var T=2*(ue+1)-1,B=q[T],Q=T+1,oe=q[Q];if(0>p(B,$))Q<we&&0>p(oe,B)?(q[ue]=oe,q[Q]=$,ue=Q):(q[ue]=B,q[T]=$,ue=T);else if(Q<we&&0>p(oe,$))q[ue]=oe,q[Q]=$,ue=Q;else break e}}return D}function p(q,D){var $=q.sortIndex-D.sortIndex;return $!==0?$:q.id-D.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;d.unstable_now=function(){return h.now()}}else{var k=Date,b=k.now();d.unstable_now=function(){return k.now()-b}}var x=[],v=[],U=1,L=null,H=3,J=!1,W=!1,Y=!1,se=!1,X=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ge(q){for(var D=w(v);D!==null;){if(D.callback===null)c(v);else if(D.startTime<=q)c(v),D.sortIndex=D.expirationTime,y(x,D);else break;D=w(v)}}function F(q){if(Y=!1,ge(q),!W)if(w(x)!==null)W=!0,ne||(ne=!0,ie());else{var D=w(v);D!==null&&Re(F,D.startTime-q)}}var ne=!1,R=-1,Z=5,O=-1;function re(){return se?!0:!(d.unstable_now()-O<Z)}function ze(){if(se=!1,ne){var q=d.unstable_now();O=q;var D=!0;try{e:{W=!1,Y&&(Y=!1,te(R),R=-1),J=!0;var $=H;try{a:{for(ge(q),L=w(x);L!==null&&!(L.expirationTime>q&&re());){var ue=L.callback;if(typeof ue=="function"){L.callback=null,H=L.priorityLevel;var we=ue(L.expirationTime<=q);if(q=d.unstable_now(),typeof we=="function"){L.callback=we,ge(q),D=!0;break a}L===w(x)&&c(x),ge(q)}else c(x);L=w(x)}if(L!==null)D=!0;else{var m=w(v);m!==null&&Re(F,m.startTime-q),D=!1}}break e}finally{L=null,H=$,J=!1}D=void 0}}finally{D?ie():ne=!1}}}var ie;if(typeof ee=="function")ie=function(){ee(ze)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Fe=Te.port2;Te.port1.onmessage=ze,ie=function(){Fe.postMessage(null)}}else ie=function(){X(ze,0)};function Re(q,D){R=X(function(){q(d.unstable_now())},D)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(q){q.callback=null},d.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<q?Math.floor(1e3/q):5},d.unstable_getCurrentPriorityLevel=function(){return H},d.unstable_next=function(q){switch(H){case 1:case 2:case 3:var D=3;break;default:D=H}var $=H;H=D;try{return q()}finally{H=$}},d.unstable_requestPaint=function(){se=!0},d.unstable_runWithPriority=function(q,D){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=H;H=q;try{return D()}finally{H=$}},d.unstable_scheduleCallback=function(q,D,$){var ue=d.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ue+$:ue):$=ue,q){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=$+we,q={id:U++,callback:D,priorityLevel:q,startTime:$,expirationTime:we,sortIndex:-1},$>ue?(q.sortIndex=$,y(v,q),w(x)===null&&q===w(v)&&(Y?(te(R),R=-1):Y=!0,Re(F,$-ue))):(q.sortIndex=we,y(x,q),W||J||(W=!0,ne||(ne=!0,ie()))),q},d.unstable_shouldYield=re,d.unstable_wrapCallback=function(q){var D=H;return function(){var $=H;H=D;try{return q.apply(this,arguments)}finally{H=$}}}})(Dr)),Dr}var Zp;function Bh(){return Zp||(Zp=1,Ur.exports=Gh()),Ur.exports}var Or={exports:{}},la={};var Kp;function Rh(){if(Kp)return la;Kp=1;var d=Gr();function y(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)v+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(){}var c={d:{f:w,r:function(){throw Error(y(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(x,v,U){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:L==null?null:""+L,children:x,containerInfo:v,implementation:U}}var k=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return la.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,la.createPortal=function(x,v){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(y(299));return h(x,v,null,U)},la.flushSync=function(x){var v=k.T,U=c.p;try{if(k.T=null,c.p=2,x)return x()}finally{k.T=v,c.p=U,c.d.f()}},la.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(x,v))},la.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},la.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var U=v.as,L=b(U,v.crossOrigin),H=typeof v.integrity=="string"?v.integrity:void 0,J=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;U==="style"?c.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:L,integrity:H,fetchPriority:J}):U==="script"&&c.d.X(x,{crossOrigin:L,integrity:H,fetchPriority:J,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},la.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var U=b(v.as,v.crossOrigin);c.d.M(x,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(x)},la.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var U=v.as,L=b(U,v.crossOrigin);c.d.L(x,U,{crossOrigin:L,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},la.preloadModule=function(x,v){if(typeof x=="string")if(v){var U=b(v.as,v.crossOrigin);c.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(x)},la.requestFormReset=function(x){c.d.r(x)},la.unstable_batchedUpdates=function(x,v){return x(v)},la.useFormState=function(x,v,U){return k.H.useFormState(x,v,U)},la.useFormStatus=function(){return k.H.useHostTransitionStatus()},la.version="19.2.5",la}var Jp;function Yh(){if(Jp)return Or.exports;Jp=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(y){console.error(y)}}return d(),Or.exports=Rh(),Or.exports}var Ip;function Vh(){if(Ip)return _o;Ip=1;var d=Bh(),y=Gr(),w=Yh();function c(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function k(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function b(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(c(188))}function v(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(c(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return x(o),e;if(s===n)return x(o),a;s=s.sibling}throw Error(c(188))}if(t.return!==n.return)t=o,n=s;else{for(var l=!1,r=o.child;r;){if(r===t){l=!0,t=o,n=s;break}if(r===n){l=!0,n=o,t=s;break}r=r.sibling}if(!l){for(r=s.child;r;){if(r===t){l=!0,t=s,n=o;break}if(r===n){l=!0,n=s,t=o;break}r=r.sibling}if(!l)throw Error(c(189))}}if(t.alternate!==n)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:a}function U(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=U(e),a!==null)return a;e=e.sibling}return null}var L=Object.assign,H=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),ze=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=ze&&e[ze]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function Fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case X:return"Profiler";case se:return"StrictMode";case F:return"Suspense";case ne:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case ee:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case ge:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return a=e.displayName||null,a!==null?a:Fe(e.type)||"Memo";case Z:a=e._payload,e=e._init;try{return Fe(e(a))}catch{}}return null}var Re=Array.isArray,q=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ue=[],we=-1;function m(e){return{current:e}}function T(e){0>we||(e.current=ue[we],ue[we]=null,we--)}function B(e,a){we++,ue[we]=e.current,e.current=a}var Q=m(null),oe=m(null),pe=m(null),_=m(null);function he(e,a){switch(B(pe,a),B(oe,e),B(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=up(a),e=dp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(Q),B(Q,e)}function ce(){T(Q),T(oe),T(pe)}function Oe(e){e.memoizedState!==null&&B(_,e);var a=Q.current,t=dp(a,e.type);a!==t&&(B(oe,e),B(Q,t))}function Le(e){oe.current===e&&(T(Q),T(oe)),_.current===e&&(T(_),Mo._currentValue=$)}var ga,Zo;function A(e){if(ga===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);ga=a&&a[1]||"",Zo=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+e+Zo}var V=!1;function fe(e,a){if(!e||V)return"";V=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var S=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){S=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){S=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&S&&typeof N.stack=="string")return[N.stack,S.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),l=s[0],r=s[1];if(l&&r){var u=l.split(`
`),z=r.split(`
`);for(o=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;if(n===u.length||o===z.length)for(n=u.length-1,o=z.length-1;1<=n&&0<=o&&u[n]!==z[o];)o--;for(;1<=n&&0<=o;n--,o--)if(u[n]!==z[o]){if(n!==1||o!==1)do if(n--,o--,0>o||u[n]!==z[o]){var E=`
`+u[n].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=n&&0<=o);break}}}finally{V=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?A(t):""}function _e(e,a){switch(e.tag){case 26:case 27:case 5:return A(e.type);case 16:return A("Lazy");case 13:return e.child!==a&&a!==null?A("Suspense Fallback"):A("Suspense");case 19:return A("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return A("Activity");default:return""}}function Ae(e){try{var a="",t=null;do a+=_e(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var hi=Object.prototype.hasOwnProperty,gi=d.unstable_scheduleCallback,bi=d.unstable_cancelCallback,pm=d.unstable_shouldYield,mm=d.unstable_requestPaint,ba=d.unstable_now,fm=d.unstable_getCurrentPriorityLevel,Yr=d.unstable_ImmediatePriority,Vr=d.unstable_UserBlockingPriority,Ko=d.unstable_NormalPriority,hm=d.unstable_LowPriority,Qr=d.unstable_IdlePriority,gm=d.log,bm=d.unstable_setDisableYieldValue,Vn=null,va=null;function rt(e){if(typeof gm=="function"&&bm(e),va&&typeof va.setStrictMode=="function")try{va.setStrictMode(Vn,e)}catch{}}var ya=Math.clz32?Math.clz32:xm,vm=Math.log,ym=Math.LN2;function xm(e){return e>>>=0,e===0?32:31-(vm(e)/ym|0)|0}var Jo=256,Io=262144,Wo=4194304;function Dt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $o(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~s,n!==0?o=Dt(n):(l&=r,l!==0?o=Dt(l):t||(t=r&~e,t!==0&&(o=Dt(t))))):(r=n&~s,r!==0?o=Dt(r):l!==0?o=Dt(l):t||(t=n&~e,t!==0&&(o=Dt(t)))),o===0?0:a!==0&&a!==o&&(a&s)===0&&(s=o&-o,t=a&-a,s>=t||s===32&&(t&4194048)!==0)?a:o}function Qn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function wm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xr(){var e=Wo;return Wo<<=1,(Wo&62914560)===0&&(Wo=4194304),e}function vi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Xn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jm(e,a,t,n,o,s){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,u=e.expirationTimes,z=e.hiddenUpdates;for(t=l&~t;0<t;){var E=31-ya(t),M=1<<E;r[E]=0,u[E]=-1;var S=z[E];if(S!==null)for(z[E]=null,E=0;E<S.length;E++){var N=S[E];N!==null&&(N.lane&=-536870913)}t&=~M}n!==0&&Zr(e,n,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(l&~a))}function Zr(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-ya(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function Kr(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-ya(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}function Jr(e,a){var t=a&-a;return t=(t&42)!==0?1:yi(t),(t&(e.suspendedLanes|a))!==0?0:t}function yi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ir(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:Dp(e.type))}function Wr(e,a){var t=D.p;try{return D.p=e,a()}finally{D.p=t}}var ct=Math.random().toString(36).slice(2),ta="__reactFiber$"+ct,ca="__reactProps$"+ct,an="__reactContainer$"+ct,wi="__reactEvents$"+ct,zm="__reactListeners$"+ct,Sm="__reactHandles$"+ct,$r="__reactResources$"+ct,Zn="__reactMarker$"+ct;function ji(e){delete e[ta],delete e[ca],delete e[wi],delete e[zm],delete e[Sm]}function tn(e){var a=e[ta];if(a)return a;for(var t=e.parentNode;t;){if(a=t[an]||t[ta]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=vp(e);e!==null;){if(t=e[ta])return t;e=vp(e)}return a}e=t,t=e.parentNode}return null}function nn(e){if(e=e[ta]||e[an]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Kn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(c(33))}function on(e){var a=e[$r];return a||(a=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Pe(e){e[Zn]=!0}var Fr=new Set,Pr={};function Ot(e,a){sn(e,a),sn(e+"Capture",a)}function sn(e,a){for(Pr[e]=a,e=0;e<a.length;e++)Fr.add(a[e])}var km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ec={},ac={};function Nm(e){return hi.call(ac,e)?!0:hi.call(ec,e)?!1:km.test(e)?ac[e]=!0:(ec[e]=!0,!1)}function Fo(e,a,t){if(Nm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Po(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Qa(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function qa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qm(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(l){t=""+l,s.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function zi(e){if(!e._valueTracker){var a=tc(e)?"checked":"value";e._valueTracker=qm(e,a,""+e[a])}}function nc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=tc(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Em=/[\n"\\]/g;function Ea(e){return e.replace(Em,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Si(e,a,t,n,o,s,l,r){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+qa(a)):e.value!==""+qa(a)&&(e.value=""+qa(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?ki(e,l,qa(a)):t!=null?ki(e,l,qa(t)):n!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+qa(r):e.removeAttribute("name")}function oc(e,a,t,n,o,s,l,r){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){zi(e);return}t=t!=null?""+qa(t):"",a=a!=null?""+qa(a):t,r||a===e.value||(e.value=a),e.defaultValue=a}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),zi(e)}function ki(e,a,t){a==="number"&&es(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ln(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+qa(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function sc(e,a,t){if(a!=null&&(a=""+qa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+qa(t):""}function ic(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(c(92));if(Re(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=qa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),zi(e)}function rn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Tm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lc(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Tm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function rc(e,a,t){if(a!=null&&typeof a!="object")throw Error(c(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in a)n=a[o],a.hasOwnProperty(o)&&t[o]!==n&&lc(e,o,n)}else for(var s in a)a.hasOwnProperty(s)&&lc(e,s,a[s])}function Ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Am=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function as(e){return Cm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xa(){}var qi=null;function Ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,un=null;function cc(e){var a=nn(e);if(a&&(e=a.stateNode)){var t=e[ca]||null;e:switch(e=a.stateNode,a.type){case"input":if(Si(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ea(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=n[ca]||null;if(!o)throw Error(c(90));Si(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&nc(n)}break e;case"textarea":sc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ln(e,!!t.multiple,a,!1)}}}var Ti=!1;function uc(e,a,t){if(Ti)return e(a,t);Ti=!0;try{var n=e(a);return n}finally{if(Ti=!1,(cn!==null||un!==null)&&(Ys(),cn&&(a=cn,e=un,un=cn=null,cc(a),e)))for(a=0;a<e.length;a++)cc(e[a])}}function Jn(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ca]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=!1;if(Za)try{var In={};Object.defineProperty(In,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Ai=!1}var ut=null,Ci=null,ts=null;function dc(){if(ts)return ts;var e,a=Ci,t=a.length,n,o="value"in ut?ut.value:ut.textContent,s=o.length;for(e=0;e<t&&a[e]===o[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===o[s-n];n++);return ts=o.slice(e,1<n?1-n:void 0)}function ns(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function os(){return!0}function pc(){return!1}function ua(e){function a(t,n,o,s,l){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?os:pc,this.isPropagationStopped=pc,this}return L(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=os)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=os)},persist:function(){},isPersistent:os}),a}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=ua(Lt),Wn=L({},Lt,{view:0,detail:0}),Mm=ua(Wn),Mi,Ui,$n,is=L({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Mi=e.screenX-$n.screenX,Ui=e.screenY-$n.screenY):Ui=Mi=0,$n=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),mc=ua(is),Um=L({},is,{dataTransfer:0}),Dm=ua(Um),Om=L({},Wn,{relatedTarget:0}),Di=ua(Om),Lm=L({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=ua(Lm),Hm=L({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=ua(Hm),Bm=L({},Lt,{data:0}),fc=ua(Bm),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Vm[e])?!!a[e]:!1}function Oi(){return Qm}var Xm=L({},Wn,{key:function(e){if(e.key){var a=Rm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zm=ua(Xm),Km=L({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=ua(Km),Jm=L({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),Im=ua(Jm),Wm=L({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),$m=ua(Wm),Fm=L({},is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=ua(Fm),ef=L({},Lt,{newState:0,oldState:0}),af=ua(ef),tf=[9,13,27,32],Li=Za&&"CompositionEvent"in window,Fn=null;Za&&"documentMode"in document&&(Fn=document.documentMode);var nf=Za&&"TextEvent"in window&&!Fn,gc=Za&&(!Li||Fn&&8<Fn&&11>=Fn),bc=" ",vc=!1;function yc(e,a){switch(e){case"keyup":return tf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function of(e,a){switch(e){case"compositionend":return xc(a);case"keypress":return a.which!==32?null:(vc=!0,bc);case"textInput":return e=a.data,e===bc&&vc?null:e;default:return null}}function sf(e,a){if(dn)return e==="compositionend"||!Li&&yc(e,a)?(e=dc(),ts=Ci=ut=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return gc&&a.locale!=="ko"?null:a.data;default:return null}}var lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!lf[e.type]:a==="textarea"}function jc(e,a,t,n){cn?un?un.push(n):un=[n]:cn=n,a=Is(a,"onChange"),0<a.length&&(t=new ss("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var Pn=null,eo=null;function rf(e){op(e,0)}function ls(e){var a=Kn(e);if(nc(a))return e}function zc(e,a){if(e==="change")return a}var Sc=!1;if(Za){var _i;if(Za){var Hi="oninput"in document;if(!Hi){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Hi=typeof kc.oninput=="function"}_i=Hi}else _i=!1;Sc=_i&&(!document.documentMode||9<document.documentMode)}function Nc(){Pn&&(Pn.detachEvent("onpropertychange",qc),eo=Pn=null)}function qc(e){if(e.propertyName==="value"&&ls(eo)){var a=[];jc(a,eo,e,Ei(e)),uc(rf,a)}}function cf(e,a,t){e==="focusin"?(Nc(),Pn=a,eo=t,Pn.attachEvent("onpropertychange",qc)):e==="focusout"&&Nc()}function uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ls(eo)}function df(e,a){if(e==="click")return ls(a)}function pf(e,a){if(e==="input"||e==="change")return ls(a)}function mf(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var xa=typeof Object.is=="function"?Object.is:mf;function ao(e,a){if(xa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!hi.call(a,o)||!xa(e[o],a[o]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,a){var t=Ec(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ec(t)}}function Ac(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ac(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Cc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=es(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=es(e.document)}return a}function Gi(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var ff=Za&&"documentMode"in document&&11>=document.documentMode,pn=null,Bi=null,to=null,Ri=!1;function Mc(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ri||pn==null||pn!==es(n)||(n=pn,"selectionStart"in n&&Gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),to&&ao(to,n)||(to=n,n=Is(Bi,"onSelect"),0<n.length&&(a=new ss("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=pn)))}function _t(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var mn={animationend:_t("Animation","AnimationEnd"),animationiteration:_t("Animation","AnimationIteration"),animationstart:_t("Animation","AnimationStart"),transitionrun:_t("Transition","TransitionRun"),transitionstart:_t("Transition","TransitionStart"),transitioncancel:_t("Transition","TransitionCancel"),transitionend:_t("Transition","TransitionEnd")},Yi={},Uc={};Za&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ht(e){if(Yi[e])return Yi[e];if(!mn[e])return e;var a=mn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Uc)return Yi[e]=a[t];return e}var Dc=Ht("animationend"),Oc=Ht("animationiteration"),Lc=Ht("animationstart"),hf=Ht("transitionrun"),gf=Ht("transitionstart"),bf=Ht("transitioncancel"),_c=Ht("transitionend"),Hc=new Map,Vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vi.push("scrollEnd");function _a(e,a){Hc.set(e,a),Ot(a,[e])}var rs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ta=[],fn=0,Qi=0;function cs(){for(var e=fn,a=Qi=fn=0;a<e;){var t=Ta[a];Ta[a++]=null;var n=Ta[a];Ta[a++]=null;var o=Ta[a];Ta[a++]=null;var s=Ta[a];if(Ta[a++]=null,n!==null&&o!==null){var l=n.pending;l===null?o.next=o:(o.next=l.next,l.next=o),n.pending=o}s!==0&&Gc(t,o,s)}}function us(e,a,t,n){Ta[fn++]=e,Ta[fn++]=a,Ta[fn++]=t,Ta[fn++]=n,Qi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Xi(e,a,t,n){return us(e,a,t,n),ds(e)}function Gt(e,a){return us(e,null,null,a),ds(e)}function Gc(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var o=!1,s=e.return;s!==null;)s.childLanes|=t,n=s.alternate,n!==null&&(n.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&a!==null&&(o=31-ya(t),e=s.hiddenUpdates,n=e[o],n===null?e[o]=[a]:n.push(a),a.lane=t|536870912),s):null}function ds(e){if(50<ko)throw ko=0,er=null,Error(c(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var hn={};function vf(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wa(e,a,t,n){return new vf(e,a,t,n)}function Zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ka(e,a){var t=e.alternate;return t===null?(t=wa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Bc(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ps(e,a,t,n,o,s){var l=0;if(n=e,typeof e=="function")Zi(e)&&(l=1);else if(typeof e=="string")l=zh(e,t,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case O:return e=wa(31,t,a,o),e.elementType=O,e.lanes=s,e;case Y:return Bt(t.children,o,s,a);case se:l=8,o|=24;break;case X:return e=wa(12,t,a,o|2),e.elementType=X,e.lanes=s,e;case F:return e=wa(13,t,a,o),e.elementType=F,e.lanes=s,e;case ne:return e=wa(19,t,a,o),e.elementType=ne,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:l=10;break e;case te:l=9;break e;case ge:l=11;break e;case R:l=14;break e;case Z:l=16,n=null;break e}l=29,t=Error(c(130,e===null?"null":typeof e,"")),n=null}return a=wa(l,t,a,o),a.elementType=e,a.type=n,a.lanes=s,a}function Bt(e,a,t,n){return e=wa(7,e,n,a),e.lanes=t,e}function Ki(e,a,t){return e=wa(6,e,null,a),e.lanes=t,e}function Rc(e){var a=wa(18,null,null,0);return a.stateNode=e,a}function Ji(e,a,t){return a=wa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Yc=new WeakMap;function Aa(e,a){if(typeof e=="object"&&e!==null){var t=Yc.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Ae(a)},Yc.set(e,a),a)}return{value:e,source:a,stack:Ae(a)}}var gn=[],bn=0,ms=null,no=0,Ca=[],Ma=0,dt=null,Ba=1,Ra="";function Ja(e,a){gn[bn++]=no,gn[bn++]=ms,ms=e,no=a}function Vc(e,a,t){Ca[Ma++]=Ba,Ca[Ma++]=Ra,Ca[Ma++]=dt,dt=e;var n=Ba;e=Ra;var o=32-ya(n)-1;n&=~(1<<o),t+=1;var s=32-ya(a)+o;if(30<s){var l=o-o%5;s=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Ba=1<<32-ya(a)+o|t<<o|n,Ra=s+e}else Ba=1<<s|t<<o|n,Ra=e}function Ii(e){e.return!==null&&(Ja(e,1),Vc(e,1,0))}function Wi(e){for(;e===ms;)ms=gn[--bn],gn[bn]=null,no=gn[--bn],gn[bn]=null;for(;e===dt;)dt=Ca[--Ma],Ca[Ma]=null,Ra=Ca[--Ma],Ca[Ma]=null,Ba=Ca[--Ma],Ca[Ma]=null}function Qc(e,a){Ca[Ma++]=Ba,Ca[Ma++]=Ra,Ca[Ma++]=dt,Ba=a.id,Ra=a.overflow,dt=e}var na=null,He=null,je=!1,pt=null,Ua=!1,$i=Error(c(519));function mt(e){var a=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(Aa(a,e)),$i}function Xc(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[ta]=e,a[ca]=n,t){case"dialog":ve("cancel",a),ve("close",a);break;case"iframe":case"object":case"embed":ve("load",a);break;case"video":case"audio":for(t=0;t<qo.length;t++)ve(qo[t],a);break;case"source":ve("error",a);break;case"img":case"image":case"link":ve("error",a),ve("load",a);break;case"details":ve("toggle",a);break;case"input":ve("invalid",a),oc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ve("invalid",a);break;case"textarea":ve("invalid",a),ic(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||rp(a.textContent,t)?(n.popover!=null&&(ve("beforetoggle",a),ve("toggle",a)),n.onScroll!=null&&ve("scroll",a),n.onScrollEnd!=null&&ve("scrollend",a),n.onClick!=null&&(a.onclick=Xa),a=!0):a=!1,a||mt(e,!0)}function Zc(e){for(na=e.return;na;)switch(na.tag){case 5:case 31:case 13:Ua=!1;return;case 27:case 3:Ua=!0;return;default:na=na.return}}function vn(e){if(e!==na)return!1;if(!je)return Zc(e),je=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||hr(e.type,e.memoizedProps)),t=!t),t&&He&&mt(e),Zc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));He=bp(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));He=bp(e)}else a===27?(a=He,qt(e.type)?(e=xr,xr=null,He=e):He=a):He=na?Oa(e.stateNode.nextSibling):null;return!0}function Rt(){He=na=null,je=!1}function Fi(){var e=pt;return e!==null&&(fa===null?fa=e:fa.push.apply(fa,e),pt=null),e}function oo(e){pt===null?pt=[e]:pt.push(e)}var Pi=m(null),Yt=null,Ia=null;function ft(e,a,t){B(Pi,a._currentValue),a._currentValue=t}function Wa(e){e._currentValue=Pi.current,T(Pi)}function el(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function al(e,a,t,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var l=o.child;s=s.firstContext;e:for(;s!==null;){var r=s;s=o;for(var u=0;u<a.length;u++)if(r.context===a[u]){s.lanes|=t,r=s.alternate,r!==null&&(r.lanes|=t),el(s.return,t,e),n||(l=null);break e}s=r.next}}else if(o.tag===18){if(l=o.return,l===null)throw Error(c(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),el(l,t,e),l=null}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}}function yn(e,a,t,n){e=null;for(var o=a,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var l=o.alternate;if(l===null)throw Error(c(387));if(l=l.memoizedProps,l!==null){var r=o.type;xa(o.pendingProps.value,l.value)||(e!==null?e.push(r):e=[r])}}else if(o===_.current){if(l=o.alternate,l===null)throw Error(c(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}o=o.return}e!==null&&al(a,e,t,n),a.flags|=262144}function fs(e){for(e=e.firstContext;e!==null;){if(!xa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vt(e){Yt=e,Ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return Kc(Yt,e)}function hs(e,a){return Yt===null&&Vt(e),Kc(e,a)}function Kc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Ia===null){if(e===null)throw Error(c(308));Ia=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ia=Ia.next=a;return t}var yf=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},xf=d.unstable_scheduleCallback,wf=d.unstable_NormalPriority,Ke={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tl(){return{controller:new yf,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&xf(wf,function(){e.controller.abort()})}var io=null,nl=0,xn=0,wn=null;function jf(e,a){if(io===null){var t=io=[];nl=0,xn=ir(),wn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return nl++,a.then(Jc,Jc),a}function Jc(){if(--nl===0&&io!==null){wn!==null&&(wn.status="fulfilled");var e=io;io=null,xn=0,wn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function zf(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var Ic=q.S;q.S=function(e,a){Md=ba(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&jf(e,a),Ic!==null&&Ic(e,a)};var Qt=m(null);function ol(){var e=Qt.current;return e!==null?e:De.pooledCache}function gs(e,a){a===null?B(Qt,Qt.current):B(Qt,a.pool)}function Wc(){var e=ol();return e===null?null:{parent:Ke._currentValue,pool:e}}var jn=Error(c(460)),sl=Error(c(474)),bs=Error(c(542)),vs={then:function(){}};function $c(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Xa,Xa),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,eu(e),e;default:if(typeof a.status=="string")a.then(Xa,Xa);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=n}},function(n){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,eu(e),e}throw Zt=a,jn}}function Xt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Zt=t,jn):t}}var Zt=null;function Pc(){if(Zt===null)throw Error(c(459));var e=Zt;return Zt=null,e}function eu(e){if(e===jn||e===bs)throw Error(c(483))}var zn=null,lo=0;function ys(e){var a=lo;return lo+=1,zn===null&&(zn=[]),Fc(zn,e,a)}function ro(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function xs(e,a){throw a.$$typeof===H?Error(c(525)):(e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function au(e){function a(g,f){if(e){var j=g.deletions;j===null?(g.deletions=[f],g.flags|=16):j.push(f)}}function t(g,f){if(!e)return null;for(;f!==null;)a(g,f),f=f.sibling;return null}function n(g){for(var f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function o(g,f){return g=Ka(g,f),g.index=0,g.sibling=null,g}function s(g,f,j){return g.index=j,e?(j=g.alternate,j!==null?(j=j.index,j<f?(g.flags|=67108866,f):j):(g.flags|=67108866,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function r(g,f,j,C){return f===null||f.tag!==6?(f=Ki(j,g.mode,C),f.return=g,f):(f=o(f,j),f.return=g,f)}function u(g,f,j,C){var P=j.type;return P===Y?E(g,f,j.props.children,C,j.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Z&&Xt(P)===f.type)?(f=o(f,j.props),ro(f,j),f.return=g,f):(f=ps(j.type,j.key,j.props,null,g.mode,C),ro(f,j),f.return=g,f)}function z(g,f,j,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==j.containerInfo||f.stateNode.implementation!==j.implementation?(f=Ji(j,g.mode,C),f.return=g,f):(f=o(f,j.children||[]),f.return=g,f)}function E(g,f,j,C,P){return f===null||f.tag!==7?(f=Bt(j,g.mode,C,P),f.return=g,f):(f=o(f,j),f.return=g,f)}function M(g,f,j){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ki(""+f,g.mode,j),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case J:return j=ps(f.type,f.key,f.props,null,g.mode,j),ro(j,f),j.return=g,j;case W:return f=Ji(f,g.mode,j),f.return=g,f;case Z:return f=Xt(f),M(g,f,j)}if(Re(f)||ie(f))return f=Bt(f,g.mode,j,null),f.return=g,f;if(typeof f.then=="function")return M(g,ys(f),j);if(f.$$typeof===ee)return M(g,hs(g,f),j);xs(g,f)}return null}function S(g,f,j,C){var P=f!==null?f.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return P!==null?null:r(g,f,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case J:return j.key===P?u(g,f,j,C):null;case W:return j.key===P?z(g,f,j,C):null;case Z:return j=Xt(j),S(g,f,j,C)}if(Re(j)||ie(j))return P!==null?null:E(g,f,j,C,null);if(typeof j.then=="function")return S(g,f,ys(j),C);if(j.$$typeof===ee)return S(g,f,hs(g,j),C);xs(g,j)}return null}function N(g,f,j,C,P){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return g=g.get(j)||null,r(f,g,""+C,P);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case J:return g=g.get(C.key===null?j:C.key)||null,u(f,g,C,P);case W:return g=g.get(C.key===null?j:C.key)||null,z(f,g,C,P);case Z:return C=Xt(C),N(g,f,j,C,P)}if(Re(C)||ie(C))return g=g.get(j)||null,E(f,g,C,P,null);if(typeof C.then=="function")return N(g,f,j,ys(C),P);if(C.$$typeof===ee)return N(g,f,j,hs(f,C),P);xs(f,C)}return null}function K(g,f,j,C){for(var P=null,Se=null,I=f,me=f=0,xe=null;I!==null&&me<j.length;me++){I.index>me?(xe=I,I=null):xe=I.sibling;var ke=S(g,I,j[me],C);if(ke===null){I===null&&(I=xe);break}e&&I&&ke.alternate===null&&a(g,I),f=s(ke,f,me),Se===null?P=ke:Se.sibling=ke,Se=ke,I=xe}if(me===j.length)return t(g,I),je&&Ja(g,me),P;if(I===null){for(;me<j.length;me++)I=M(g,j[me],C),I!==null&&(f=s(I,f,me),Se===null?P=I:Se.sibling=I,Se=I);return je&&Ja(g,me),P}for(I=n(I);me<j.length;me++)xe=N(I,g,me,j[me],C),xe!==null&&(e&&xe.alternate!==null&&I.delete(xe.key===null?me:xe.key),f=s(xe,f,me),Se===null?P=xe:Se.sibling=xe,Se=xe);return e&&I.forEach(function(Mt){return a(g,Mt)}),je&&Ja(g,me),P}function ae(g,f,j,C){if(j==null)throw Error(c(151));for(var P=null,Se=null,I=f,me=f=0,xe=null,ke=j.next();I!==null&&!ke.done;me++,ke=j.next()){I.index>me?(xe=I,I=null):xe=I.sibling;var Mt=S(g,I,ke.value,C);if(Mt===null){I===null&&(I=xe);break}e&&I&&Mt.alternate===null&&a(g,I),f=s(Mt,f,me),Se===null?P=Mt:Se.sibling=Mt,Se=Mt,I=xe}if(ke.done)return t(g,I),je&&Ja(g,me),P;if(I===null){for(;!ke.done;me++,ke=j.next())ke=M(g,ke.value,C),ke!==null&&(f=s(ke,f,me),Se===null?P=ke:Se.sibling=ke,Se=ke);return je&&Ja(g,me),P}for(I=n(I);!ke.done;me++,ke=j.next())ke=N(I,g,me,ke.value,C),ke!==null&&(e&&ke.alternate!==null&&I.delete(ke.key===null?me:ke.key),f=s(ke,f,me),Se===null?P=ke:Se.sibling=ke,Se=ke);return e&&I.forEach(function(Dh){return a(g,Dh)}),je&&Ja(g,me),P}function Ue(g,f,j,C){if(typeof j=="object"&&j!==null&&j.type===Y&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case J:e:{for(var P=j.key;f!==null;){if(f.key===P){if(P=j.type,P===Y){if(f.tag===7){t(g,f.sibling),C=o(f,j.props.children),C.return=g,g=C;break e}}else if(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Z&&Xt(P)===f.type){t(g,f.sibling),C=o(f,j.props),ro(C,j),C.return=g,g=C;break e}t(g,f);break}else a(g,f);f=f.sibling}j.type===Y?(C=Bt(j.props.children,g.mode,C,j.key),C.return=g,g=C):(C=ps(j.type,j.key,j.props,null,g.mode,C),ro(C,j),C.return=g,g=C)}return l(g);case W:e:{for(P=j.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===j.containerInfo&&f.stateNode.implementation===j.implementation){t(g,f.sibling),C=o(f,j.children||[]),C.return=g,g=C;break e}else{t(g,f);break}else a(g,f);f=f.sibling}C=Ji(j,g.mode,C),C.return=g,g=C}return l(g);case Z:return j=Xt(j),Ue(g,f,j,C)}if(Re(j))return K(g,f,j,C);if(ie(j)){if(P=ie(j),typeof P!="function")throw Error(c(150));return j=P.call(j),ae(g,f,j,C)}if(typeof j.then=="function")return Ue(g,f,ys(j),C);if(j.$$typeof===ee)return Ue(g,f,hs(g,j),C);xs(g,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,f!==null&&f.tag===6?(t(g,f.sibling),C=o(f,j),C.return=g,g=C):(t(g,f),C=Ki(j,g.mode,C),C.return=g,g=C),l(g)):t(g,f)}return function(g,f,j,C){try{lo=0;var P=Ue(g,f,j,C);return zn=null,P}catch(I){if(I===jn||I===bs)throw I;var Se=wa(29,I,null,g.mode);return Se.lanes=C,Se.return=g,Se}}}var Kt=au(!0),tu=au(!1),ht=!1;function il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ll(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ne&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,a=ds(e),Gc(e,null,t),a}return us(e,n,a,t),ds(e)}function co(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Kr(e,t)}}function rl(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?o=s=l:s=s.next=l,t=t.next}while(t!==null);s===null?o=s=a:s=s.next=a}else o=s=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var cl=!1;function uo(){if(cl){var e=wn;if(e!==null)throw e}}function po(e,a,t,n){cl=!1;var o=e.updateQueue;ht=!1;var s=o.firstBaseUpdate,l=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var u=r,z=u.next;u.next=null,l===null?s=z:l.next=z,l=u;var E=e.alternate;E!==null&&(E=E.updateQueue,r=E.lastBaseUpdate,r!==l&&(r===null?E.firstBaseUpdate=z:r.next=z,E.lastBaseUpdate=u))}if(s!==null){var M=o.baseState;l=0,E=z=u=null,r=s;do{var S=r.lane&-536870913,N=S!==r.lane;if(N?(ye&S)===S:(n&S)===S){S!==0&&S===xn&&(cl=!0),E!==null&&(E=E.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var K=e,ae=r;S=a;var Ue=t;switch(ae.tag){case 1:if(K=ae.payload,typeof K=="function"){M=K.call(Ue,M,S);break e}M=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ae.payload,S=typeof K=="function"?K.call(Ue,M,S):K,S==null)break e;M=L({},M,S);break e;case 2:ht=!0}}S=r.callback,S!==null&&(e.flags|=64,N&&(e.flags|=8192),N=o.callbacks,N===null?o.callbacks=[S]:N.push(S))}else N={lane:S,tag:r.tag,payload:r.payload,callback:r.callback,next:null},E===null?(z=E=N,u=M):E=E.next=N,l|=S;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;N=r,r=N.next,N.next=null,o.lastBaseUpdate=N,o.shared.pending=null}}while(!0);E===null&&(u=M),o.baseState=u,o.firstBaseUpdate=z,o.lastBaseUpdate=E,s===null&&(o.shared.lanes=0),jt|=l,e.lanes=l,e.memoizedState=M}}function nu(e,a){if(typeof e!="function")throw Error(c(191,e));e.call(a)}function ou(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)nu(t[e],a)}var Sn=m(null),ws=m(0);function su(e,a){e=st,B(ws,e),B(Sn,a),st=e|a.baseLanes}function ul(){B(ws,st),B(Sn,Sn.current)}function dl(){st=ws.current,T(Sn),T(ws)}var ja=m(null),Da=null;function vt(e){var a=e.alternate;B(Xe,Xe.current&1),B(ja,e),Da===null&&(a===null||Sn.current!==null||a.memoizedState!==null)&&(Da=e)}function pl(e){B(Xe,Xe.current),B(ja,e),Da===null&&(Da=e)}function iu(e){e.tag===22?(B(Xe,Xe.current),B(ja,e),Da===null&&(Da=e)):yt()}function yt(){B(Xe,Xe.current),B(ja,ja.current)}function za(e){T(ja),Da===e&&(Da=null),T(Xe)}var Xe=m(0);function js(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||vr(t)||yr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $a=0,de=null,Ce=null,Je=null,zs=!1,kn=!1,Jt=!1,Ss=0,mo=0,Nn=null,Sf=0;function Ye(){throw Error(c(321))}function ml(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!xa(e[t],a[t]))return!1;return!0}function fl(e,a,t,n,o,s){return $a=s,de=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,q.H=e===null||e.memoizedState===null?Vu:Tl,Jt=!1,s=t(n,o),Jt=!1,kn&&(s=ru(a,t,n,o)),lu(e),s}function lu(e){q.H=go;var a=Ce!==null&&Ce.next!==null;if($a=0,Je=Ce=de=null,zs=!1,mo=0,Nn=null,a)throw Error(c(300));e===null||Ie||(e=e.dependencies,e!==null&&fs(e)&&(Ie=!0))}function ru(e,a,t,n){de=e;var o=0;do{if(kn&&(Nn=null),mo=0,kn=!1,25<=o)throw Error(c(301));if(o+=1,Je=Ce=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}q.H=Qu,s=a(t,n)}while(kn);return s}function kf(){var e=q.H,a=e.useState()[0];return a=typeof a.then=="function"?fo(a):a,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(de.flags|=1024),a}function hl(){var e=Ss!==0;return Ss=0,e}function gl(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function bl(e){if(zs){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}zs=!1}$a=0,Je=Ce=de=null,kn=!1,mo=Ss=0,Nn=null}function ra(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?de.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ce===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var a=Je===null?de.memoizedState:Je.next;if(a!==null)Je=a,Ce=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Je===null?de.memoizedState=Je=e:Je=Je.next=e}return Je}function ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var a=mo;return mo+=1,Nn===null&&(Nn=[]),e=Fc(Nn,e,a),a=de,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,q.H=a===null||a.memoizedState===null?Vu:Tl),e}function Ns(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===ee)return oa(e)}throw Error(c(438,String(e)))}function vl(e){var a=null,t=de.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ks(),de.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=re;return a.index++,t}function Fa(e,a){return typeof a=="function"?a(e):a}function qs(e){var a=Ze();return yl(a,Ce,e)}function yl(e,a,t){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var o=e.baseQueue,s=n.pending;if(s!==null){if(o!==null){var l=o.next;o.next=s.next,s.next=l}a.baseQueue=o=s,n.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{a=o.next;var r=l=null,u=null,z=a,E=!1;do{var M=z.lane&-536870913;if(M!==z.lane?(ye&M)===M:($a&M)===M){var S=z.revertLane;if(S===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),M===xn&&(E=!0);else if(($a&S)===S){z=z.next,S===xn&&(E=!0);continue}else M={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},u===null?(r=u=M,l=s):u=u.next=M,de.lanes|=S,jt|=S;M=z.action,Jt&&t(s,M),s=z.hasEagerState?z.eagerState:t(s,M)}else S={lane:M,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},u===null?(r=u=S,l=s):u=u.next=S,de.lanes|=M,jt|=M;z=z.next}while(z!==null&&z!==a);if(u===null?l=s:u.next=r,!xa(s,e.memoizedState)&&(Ie=!0,E&&(t=wn,t!==null)))throw t;e.memoizedState=s,e.baseState=l,e.baseQueue=u,n.lastRenderedState=s}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function xl(e){var a=Ze(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,s=a.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do s=e(s,l.action),l=l.next;while(l!==o);xa(s,a.memoizedState)||(Ie=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),t.lastRenderedState=s}return[s,n]}function cu(e,a,t){var n=de,o=Ze(),s=je;if(s){if(t===void 0)throw Error(c(407));t=t()}else t=a();var l=!xa((Ce||o).memoizedState,t);if(l&&(o.memoizedState=t,Ie=!0),o=o.queue,zl(pu.bind(null,n,o,e),[e]),o.getSnapshot!==a||l||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,qn(9,{destroy:void 0},du.bind(null,n,o,t,a),null),De===null)throw Error(c(349));s||($a&127)!==0||uu(n,a,t)}return t}function uu(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=de.updateQueue,a===null?(a=ks(),de.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function du(e,a,t,n){a.value=t,a.getSnapshot=n,mu(a)&&fu(e)}function pu(e,a,t){return t(function(){mu(a)&&fu(e)})}function mu(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!xa(e,t)}catch{return!0}}function fu(e){var a=Gt(e,2);a!==null&&ha(a,e,2)}function wl(e){var a=ra();if(typeof e=="function"){var t=e;if(e=t(),Jt){rt(!0);try{t()}finally{rt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},a}function hu(e,a,t,n){return e.baseState=t,yl(e,Ce,typeof n=="function"?n:Fa)}function Nf(e,a,t,n,o){if(As(e))throw Error(c(485));if(e=a.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){s.listeners.push(l)}};q.T!==null?t(!0):s.isTransition=!1,n(s),t=a.pending,t===null?(s.next=a.pending=s,gu(a,s)):(s.next=t.next,a.pending=t.next=s)}}function gu(e,a){var t=a.action,n=a.payload,o=e.state;if(a.isTransition){var s=q.T,l={};q.T=l;try{var r=t(o,n),u=q.S;u!==null&&u(l,r),bu(e,a,r)}catch(z){jl(e,a,z)}finally{s!==null&&l.types!==null&&(s.types=l.types),q.T=s}}else try{s=t(o,n),bu(e,a,s)}catch(z){jl(e,a,z)}}function bu(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){vu(e,a,n)},function(n){return jl(e,a,n)}):vu(e,a,t)}function vu(e,a,t){a.status="fulfilled",a.value=t,yu(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,gu(e,t)))}function jl(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,yu(a),a=a.next;while(a!==n)}e.action=null}function yu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function xu(e,a){return a}function wu(e,a){if(je){var t=De.formState;if(t!==null){e:{var n=de;if(je){if(He){a:{for(var o=He,s=Ua;o.nodeType!==8;){if(!s){o=null;break a}if(o=Oa(o.nextSibling),o===null){o=null;break a}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){He=Oa(o.nextSibling),n=o.data==="F!";break e}}mt(n)}n=!1}n&&(a=t[0])}}return t=ra(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:a},t.queue=n,t=Bu.bind(null,de,n),n.dispatch=t,n=wl(!1),s=El.bind(null,de,!1,n.queue),n=ra(),o={state:a,dispatch:null,action:e,pending:null},n.queue=o,t=Nf.bind(null,de,o,s,t),o.dispatch=t,n.memoizedState=e,[a,t,!1]}function ju(e){var a=Ze();return zu(a,Ce,e)}function zu(e,a,t){if(a=yl(e,a,xu)[0],e=qs(Fa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=fo(a)}catch(l){throw l===jn?bs:l}else n=a;a=Ze();var o=a.queue,s=o.dispatch;return t!==a.memoizedState&&(de.flags|=2048,qn(9,{destroy:void 0},qf.bind(null,o,t),null)),[n,s,e]}function qf(e,a){e.action=a}function Su(e){var a=Ze(),t=Ce;if(t!==null)return zu(a,t,e);Ze(),a=a.memoizedState,t=Ze();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function qn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=de.updateQueue,a===null&&(a=ks(),de.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function ku(){return Ze().memoizedState}function Es(e,a,t,n){var o=ra();de.flags|=e,o.memoizedState=qn(1|a,{destroy:void 0},t,n===void 0?null:n)}function Ts(e,a,t,n){var o=Ze();n=n===void 0?null:n;var s=o.memoizedState.inst;Ce!==null&&n!==null&&ml(n,Ce.memoizedState.deps)?o.memoizedState=qn(a,s,t,n):(de.flags|=e,o.memoizedState=qn(1|a,s,t,n))}function Nu(e,a){Es(8390656,8,e,a)}function zl(e,a){Ts(2048,8,e,a)}function Ef(e){de.flags|=4;var a=de.updateQueue;if(a===null)a=ks(),de.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function qu(e){var a=Ze().memoizedState;return Ef({ref:a,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}function Eu(e,a){return Ts(4,2,e,a)}function Tu(e,a){return Ts(4,4,e,a)}function Au(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Cu(e,a,t){t=t!=null?t.concat([e]):null,Ts(4,4,Au.bind(null,a,e),t)}function Sl(){}function Mu(e,a){var t=Ze();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&ml(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Uu(e,a){var t=Ze();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&ml(a,n[1]))return n[0];if(n=e(),Jt){rt(!0);try{e()}finally{rt(!1)}}return t.memoizedState=[n,a],n}function kl(e,a,t){return t===void 0||($a&1073741824)!==0&&(ye&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Dd(),de.lanes|=e,jt|=e,t)}function Du(e,a,t,n){return xa(t,a)?t:Sn.current!==null?(e=kl(e,t,n),xa(e,a)||(Ie=!0),e):($a&42)===0||($a&1073741824)!==0&&(ye&261930)===0?(Ie=!0,e.memoizedState=t):(e=Dd(),de.lanes|=e,jt|=e,a)}function Ou(e,a,t,n,o){var s=D.p;D.p=s!==0&&8>s?s:8;var l=q.T,r={};q.T=r,El(e,!1,a,t);try{var u=o(),z=q.S;if(z!==null&&z(r,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var E=zf(u,n);ho(e,a,E,Na(e))}else ho(e,a,n,Na(e))}catch(M){ho(e,a,{then:function(){},status:"rejected",reason:M},Na())}finally{D.p=s,l!==null&&r.types!==null&&(l.types=r.types),q.T=l}}function Tf(){}function Nl(e,a,t,n){if(e.tag!==5)throw Error(c(476));var o=Lu(e).queue;Ou(e,o,a,$,t===null?Tf:function(){return _u(e),t(n)})}function Lu(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:$},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function _u(e){var a=Lu(e);a.next===null&&(a=e.alternate.memoizedState),ho(e,a.next.queue,{},Na())}function ql(){return oa(Mo)}function Hu(){return Ze().memoizedState}function Gu(){return Ze().memoizedState}function Af(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Na();e=gt(t);var n=bt(a,e,t);n!==null&&(ha(n,a,t),co(n,a,t)),a={cache:tl()},e.payload=a;return}a=a.return}}function Cf(e,a,t){var n=Na();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},As(e)?Ru(a,t):(t=Xi(e,a,t,n),t!==null&&(ha(t,e,n),Yu(t,a,n)))}function Bu(e,a,t){var n=Na();ho(e,a,t,n)}function ho(e,a,t,n){var o={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(As(e))Ru(a,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var l=a.lastRenderedState,r=s(l,t);if(o.hasEagerState=!0,o.eagerState=r,xa(r,l))return us(e,a,o,0),De===null&&cs(),!1}catch{}if(t=Xi(e,a,o,n),t!==null)return ha(t,e,n),Yu(t,a,n),!0}return!1}function El(e,a,t,n){if(n={lane:2,revertLane:ir(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)){if(a)throw Error(c(479))}else a=Xi(e,t,n,2),a!==null&&ha(a,e,2)}function As(e){var a=e.alternate;return e===de||a!==null&&a===de}function Ru(e,a){kn=zs=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Yu(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Kr(e,t)}}var go={readContext:oa,use:Ns,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};go.useEffectEvent=Ye;var Vu={readContext:oa,use:Ns,useCallback:function(e,a){return ra().memoizedState=[e,a===void 0?null:a],e},useContext:oa,useEffect:Nu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Es(4194308,4,Au.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Es(4194308,4,e,a)},useInsertionEffect:function(e,a){Es(4,2,e,a)},useMemo:function(e,a){var t=ra();a=a===void 0?null:a;var n=e();if(Jt){rt(!0);try{e()}finally{rt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ra();if(t!==void 0){var o=t(a);if(Jt){rt(!0);try{t(a)}finally{rt(!1)}}}else o=a;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=Cf.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var a=ra();return e={current:e},a.memoizedState=e},useState:function(e){e=wl(e);var a=e.queue,t=Bu.bind(null,de,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Sl,useDeferredValue:function(e,a){var t=ra();return kl(t,e,a)},useTransition:function(){var e=wl(!1);return e=Ou.bind(null,de,e.queue,!0,!1),ra().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=de,o=ra();if(je){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),De===null)throw Error(c(349));(ye&127)!==0||uu(n,a,t)}o.memoizedState=t;var s={value:t,getSnapshot:a};return o.queue=s,Nu(pu.bind(null,n,s,e),[e]),n.flags|=2048,qn(9,{destroy:void 0},du.bind(null,n,s,t,a),null),t},useId:function(){var e=ra(),a=De.identifierPrefix;if(je){var t=Ra,n=Ba;t=(n&~(1<<32-ya(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Ss++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Sf++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:ql,useFormState:wu,useActionState:wu,useOptimistic:function(e){var a=ra();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=El.bind(null,de,!0,t),t.dispatch=a,[e,a]},useMemoCache:vl,useCacheRefresh:function(){return ra().memoizedState=Af.bind(null,de)},useEffectEvent:function(e){var a=ra(),t={impl:e};return a.memoizedState=t,function(){if((Ne&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Tl={readContext:oa,use:Ns,useCallback:Mu,useContext:oa,useEffect:zl,useImperativeHandle:Cu,useInsertionEffect:Eu,useLayoutEffect:Tu,useMemo:Uu,useReducer:qs,useRef:ku,useState:function(){return qs(Fa)},useDebugValue:Sl,useDeferredValue:function(e,a){var t=Ze();return Du(t,Ce.memoizedState,e,a)},useTransition:function(){var e=qs(Fa)[0],a=Ze().memoizedState;return[typeof e=="boolean"?e:fo(e),a]},useSyncExternalStore:cu,useId:Hu,useHostTransitionStatus:ql,useFormState:ju,useActionState:ju,useOptimistic:function(e,a){var t=Ze();return hu(t,Ce,e,a)},useMemoCache:vl,useCacheRefresh:Gu};Tl.useEffectEvent=qu;var Qu={readContext:oa,use:Ns,useCallback:Mu,useContext:oa,useEffect:zl,useImperativeHandle:Cu,useInsertionEffect:Eu,useLayoutEffect:Tu,useMemo:Uu,useReducer:xl,useRef:ku,useState:function(){return xl(Fa)},useDebugValue:Sl,useDeferredValue:function(e,a){var t=Ze();return Ce===null?kl(t,e,a):Du(t,Ce.memoizedState,e,a)},useTransition:function(){var e=xl(Fa)[0],a=Ze().memoizedState;return[typeof e=="boolean"?e:fo(e),a]},useSyncExternalStore:cu,useId:Hu,useHostTransitionStatus:ql,useFormState:Su,useActionState:Su,useOptimistic:function(e,a){var t=Ze();return Ce!==null?hu(t,Ce,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:vl,useCacheRefresh:Gu};Qu.useEffectEvent=qu;function Al(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:L({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Cl={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Na(),o=gt(n);o.payload=a,t!=null&&(o.callback=t),a=bt(e,o,n),a!==null&&(ha(a,e,n),co(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Na(),o=gt(n);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=bt(e,o,n),a!==null&&(ha(a,e,n),co(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Na(),n=gt(t);n.tag=2,a!=null&&(n.callback=a),a=bt(e,n,t),a!==null&&(ha(a,e,t),co(a,e,t))}};function Xu(e,a,t,n,o,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,l):a.prototype&&a.prototype.isPureReactComponent?!ao(t,n)||!ao(o,s):!0}function Zu(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Cl.enqueueReplaceState(a,a.state,null)}function It(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=L({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function Ku(e){rs(e)}function Ju(e){console.error(e)}function Iu(e){rs(e)}function Cs(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Wu(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Ml(e,a,t){return t=gt(t),t.tag=3,t.payload={element:null},t.callback=function(){Cs(e,a)},t}function $u(e){return e=gt(e),e.tag=3,e}function Fu(e,a,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;e.payload=function(){return o(s)},e.callback=function(){Wu(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Wu(a,t,n),typeof o!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Mf(e,a,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&yn(a,t,o,!0),t=ja.current,t!==null){switch(t.tag){case 31:case 13:return Da===null?Vs():t.alternate===null&&Ve===0&&(Ve=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===vs?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),nr(e,n,o)),!1;case 22:return t.flags|=65536,n===vs?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),nr(e,n,o)),!1}throw Error(c(435,t.tag))}return nr(e,n,o),Vs(),!1}if(je)return a=ja.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,n!==$i&&(e=Error(c(422),{cause:n}),oo(Aa(e,t)))):(n!==$i&&(a=Error(c(423),{cause:n}),oo(Aa(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=Aa(n,t),o=Ml(e.stateNode,n,o),rl(e,o),Ve!==4&&(Ve=2)),!1;var s=Error(c(520),{cause:n});if(s=Aa(s,t),So===null?So=[s]:So.push(s),Ve!==4&&(Ve=2),a===null)return!0;n=Aa(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Ml(t.stateNode,n,e),rl(t,e),!1;case 1:if(a=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(zt===null||!zt.has(s))))return t.flags|=65536,o&=-o,t.lanes|=o,o=$u(o),Fu(o,e,t,n),rl(t,o),!1}t=t.return}while(t!==null);return!1}var Ul=Error(c(461)),Ie=!1;function sa(e,a,t,n){a.child=e===null?tu(a,null,t,n):Kt(a,e.child,t,n)}function Pu(e,a,t,n,o){t=t.render;var s=a.ref;if("ref"in n){var l={};for(var r in n)r!=="ref"&&(l[r]=n[r])}else l=n;return Vt(a),n=fl(e,a,t,l,s,o),r=hl(),e!==null&&!Ie?(gl(e,a,o),Pa(e,a,o)):(je&&r&&Ii(a),a.flags|=1,sa(e,a,n,o),a.child)}function ed(e,a,t,n,o){if(e===null){var s=t.type;return typeof s=="function"&&!Zi(s)&&s.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=s,ad(e,a,s,n,o)):(e=ps(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!Rl(e,o)){var l=s.memoizedProps;if(t=t.compare,t=t!==null?t:ao,t(l,n)&&e.ref===a.ref)return Pa(e,a,o)}return a.flags|=1,e=Ka(s,n),e.ref=a.ref,e.return=a,a.child=e}function ad(e,a,t,n,o){if(e!==null){var s=e.memoizedProps;if(ao(s,n)&&e.ref===a.ref)if(Ie=!1,a.pendingProps=n=s,Rl(e,o))(e.flags&131072)!==0&&(Ie=!0);else return a.lanes=e.lanes,Pa(e,a,o)}return Dl(e,a,t,n,o)}function td(e,a,t,n){var o=n.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(n=a.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~s}else n=0,a.child=null;return nd(e,a,s,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&gs(a,s!==null?s.cachePool:null),s!==null?su(a,s):ul(),iu(a);else return n=a.lanes=536870912,nd(e,a,s!==null?s.baseLanes|t:t,t,n)}else s!==null?(gs(a,s.cachePool),su(a,s),yt(),a.memoizedState=null):(e!==null&&gs(a,null),ul(),yt());return sa(e,a,o,t),a.child}function bo(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function nd(e,a,t,n,o){var s=ol();return s=s===null?null:{parent:Ke._currentValue,pool:s},a.memoizedState={baseLanes:t,cachePool:s},e!==null&&gs(a,null),ul(),iu(a),e!==null&&yn(e,a,n,!0),a.childLanes=o,null}function Ms(e,a){return a=Ds({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function od(e,a,t){return Kt(a,e.child,null,t),e=Ms(a,a.pendingProps),e.flags|=2,za(a),a.memoizedState=null,e}function Uf(e,a,t){var n=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(je){if(n.mode==="hidden")return e=Ms(a,n),a.lanes=536870912,bo(null,e);if(pl(a),(e=He)?(e=gp(e,Ua),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:dt!==null?{id:Ba,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},t=Rc(e),t.return=a,a.child=t,na=a,He=null)):e=null,e===null)throw mt(a);return a.lanes=536870912,null}return Ms(a,n)}var s=e.memoizedState;if(s!==null){var l=s.dehydrated;if(pl(a),o)if(a.flags&256)a.flags&=-257,a=od(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(c(558));else if(Ie||yn(e,a,t,!1),o=(t&e.childLanes)!==0,Ie||o){if(n=De,n!==null&&(l=Jr(n,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,Gt(e,l),ha(n,e,l),Ul;Vs(),a=od(e,a,t)}else e=s.treeContext,He=Oa(l.nextSibling),na=a,je=!0,pt=null,Ua=!1,e!==null&&Qc(a,e),a=Ms(a,n),a.flags|=4096;return a}return e=Ka(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Us(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Dl(e,a,t,n,o){return Vt(a),t=fl(e,a,t,n,void 0,o),n=hl(),e!==null&&!Ie?(gl(e,a,o),Pa(e,a,o)):(je&&n&&Ii(a),a.flags|=1,sa(e,a,t,o),a.child)}function sd(e,a,t,n,o,s){return Vt(a),a.updateQueue=null,t=ru(a,n,t,o),lu(e),n=hl(),e!==null&&!Ie?(gl(e,a,s),Pa(e,a,s)):(je&&n&&Ii(a),a.flags|=1,sa(e,a,t,s),a.child)}function id(e,a,t,n,o){if(Vt(a),a.stateNode===null){var s=hn,l=t.contextType;typeof l=="object"&&l!==null&&(s=oa(l)),s=new t(n,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cl,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=n,s.state=a.memoizedState,s.refs={},il(a),l=t.contextType,s.context=typeof l=="object"&&l!==null?oa(l):hn,s.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Al(a,t,l,n),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(l=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),l!==s.state&&Cl.enqueueReplaceState(s,s.state,null),po(a,n,s,o),uo(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){s=a.stateNode;var r=a.memoizedProps,u=It(t,r);s.props=u;var z=s.context,E=t.contextType;l=hn,typeof E=="object"&&E!==null&&(l=oa(E));var M=t.getDerivedStateFromProps;E=typeof M=="function"||typeof s.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,E||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r||z!==l)&&Zu(a,s,n,l),ht=!1;var S=a.memoizedState;s.state=S,po(a,n,s,o),uo(),z=a.memoizedState,r||S!==z||ht?(typeof M=="function"&&(Al(a,t,M,n),z=a.memoizedState),(u=ht||Xu(a,t,u,n,S,z,l))?(E||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=z),s.props=n,s.state=z,s.context=l,n=u):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{s=a.stateNode,ll(e,a),l=a.memoizedProps,E=It(t,l),s.props=E,M=a.pendingProps,S=s.context,z=t.contextType,u=hn,typeof z=="object"&&z!==null&&(u=oa(z)),r=t.getDerivedStateFromProps,(z=typeof r=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==M||S!==u)&&Zu(a,s,n,u),ht=!1,S=a.memoizedState,s.state=S,po(a,n,s,o),uo();var N=a.memoizedState;l!==M||S!==N||ht||e!==null&&e.dependencies!==null&&fs(e.dependencies)?(typeof r=="function"&&(Al(a,t,r,n),N=a.memoizedState),(E=ht||Xu(a,t,E,n,S,N,u)||e!==null&&e.dependencies!==null&&fs(e.dependencies))?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,N,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,N,u)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=N),s.props=n,s.state=N,s.context=u,n=E):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(a.flags|=1024),n=!1)}return s=n,Us(e,a),n=(a.flags&128)!==0,s||n?(s=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&n?(a.child=Kt(a,e.child,null,o),a.child=Kt(a,null,t,o)):sa(e,a,t,o),a.memoizedState=s.state,e=a.child):e=Pa(e,a,o),e}function ld(e,a,t,n){return Rt(),a.flags|=256,sa(e,a,t,n),a.child}var Ol={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ll(e){return{baseLanes:e,cachePool:Wc()}}function _l(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ka),e}function rd(e,a,t){var n=a.pendingProps,o=!1,s=(a.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),l&&(o=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(je){if(o?vt(a):yt(),(e=He)?(e=gp(e,Ua),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:dt!==null?{id:Ba,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},t=Rc(e),t.return=a,a.child=t,na=a,He=null)):e=null,e===null)throw mt(a);return yr(e)?a.lanes=32:a.lanes=536870912,null}var r=n.children;return n=n.fallback,o?(yt(),o=a.mode,r=Ds({mode:"hidden",children:r},o),n=Bt(n,o,t,null),r.return=a,n.return=a,r.sibling=n,a.child=r,n=a.child,n.memoizedState=Ll(t),n.childLanes=_l(e,l,t),a.memoizedState=Ol,bo(null,n)):(vt(a),Hl(a,r))}var u=e.memoizedState;if(u!==null&&(r=u.dehydrated,r!==null)){if(s)a.flags&256?(vt(a),a.flags&=-257,a=Gl(e,a,t)):a.memoizedState!==null?(yt(),a.child=e.child,a.flags|=128,a=null):(yt(),r=n.fallback,o=a.mode,n=Ds({mode:"visible",children:n.children},o),r=Bt(r,o,t,null),r.flags|=2,n.return=a,r.return=a,n.sibling=r,a.child=n,Kt(a,e.child,null,t),n=a.child,n.memoizedState=Ll(t),n.childLanes=_l(e,l,t),a.memoizedState=Ol,a=bo(null,n));else if(vt(a),yr(r)){if(l=r.nextSibling&&r.nextSibling.dataset,l)var z=l.dgst;l=z,n=Error(c(419)),n.stack="",n.digest=l,oo({value:n,source:null,stack:null}),a=Gl(e,a,t)}else if(Ie||yn(e,a,t,!1),l=(t&e.childLanes)!==0,Ie||l){if(l=De,l!==null&&(n=Jr(l,t),n!==0&&n!==u.retryLane))throw u.retryLane=n,Gt(e,n),ha(l,e,n),Ul;vr(r)||Vs(),a=Gl(e,a,t)}else vr(r)?(a.flags|=192,a.child=e.child,a=null):(e=u.treeContext,He=Oa(r.nextSibling),na=a,je=!0,pt=null,Ua=!1,e!==null&&Qc(a,e),a=Hl(a,n.children),a.flags|=4096);return a}return o?(yt(),r=n.fallback,o=a.mode,u=e.child,z=u.sibling,n=Ka(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,z!==null?r=Ka(z,r):(r=Bt(r,o,t,null),r.flags|=2),r.return=a,n.return=a,n.sibling=r,a.child=n,bo(null,n),n=a.child,r=e.child.memoizedState,r===null?r=Ll(t):(o=r.cachePool,o!==null?(u=Ke._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=Wc(),r={baseLanes:r.baseLanes|t,cachePool:o}),n.memoizedState=r,n.childLanes=_l(e,l,t),a.memoizedState=Ol,bo(e.child,n)):(vt(a),t=e.child,e=t.sibling,t=Ka(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function Hl(e,a){return a=Ds({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ds(e,a){return e=wa(22,e,null,a),e.lanes=0,e}function Gl(e,a,t){return Kt(a,e.child,null,t),e=Hl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function cd(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),el(e.return,a,t)}function Bl(e,a,t,n,o,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o,treeForkCount:s}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=o,l.treeForkCount=s)}function ud(e,a,t){var n=a.pendingProps,o=n.revealOrder,s=n.tail;n=n.children;var l=Xe.current,r=(l&2)!==0;if(r?(l=l&1|2,a.flags|=128):l&=1,B(Xe,l),sa(e,a,n,t),n=je?no:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,t,a);else if(e.tag===19)cd(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&js(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),Bl(a,!1,o,t,s,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&js(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Bl(a,!0,t,null,s,n);break;case"together":Bl(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function Pa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),jt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(yn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,t=Ka(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ka(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Rl(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&fs(e)))}function Df(e,a,t){switch(a.tag){case 3:he(a,a.stateNode.containerInfo),ft(a,Ke,e.memoizedState.cache),Rt();break;case 27:case 5:Oe(a);break;case 4:he(a,a.stateNode.containerInfo);break;case 10:ft(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,pl(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(vt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?rd(e,a,t):(vt(a),e=Pa(e,a,t),e!==null?e.sibling:null);vt(a);break;case 19:var o=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(yn(e,a,t,!1),n=(t&a.childLanes)!==0),o){if(n)return ud(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Xe,Xe.current),n)break;return null;case 22:return a.lanes=0,td(e,a,t,a.pendingProps);case 24:ft(a,Ke,e.memoizedState.cache)}return Pa(e,a,t)}function dd(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ie=!0;else{if(!Rl(e,t)&&(a.flags&128)===0)return Ie=!1,Df(e,a,t);Ie=(e.flags&131072)!==0}else Ie=!1,je&&(a.flags&1048576)!==0&&Vc(a,no,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Xt(a.elementType),a.type=e,typeof e=="function")Zi(e)?(n=It(e,n),a.tag=1,a=id(null,a,e,n,t)):(a.tag=0,a=Dl(null,a,e,n,t));else{if(e!=null){var o=e.$$typeof;if(o===ge){a.tag=11,a=Pu(null,a,e,n,t);break e}else if(o===R){a.tag=14,a=ed(null,a,e,n,t);break e}}throw a=Fe(e)||e,Error(c(306,a,""))}}return a;case 0:return Dl(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,o=It(n,a.pendingProps),id(e,a,n,o,t);case 3:e:{if(he(a,a.stateNode.containerInfo),e===null)throw Error(c(387));n=a.pendingProps;var s=a.memoizedState;o=s.element,ll(e,a),po(a,n,null,t);var l=a.memoizedState;if(n=l.cache,ft(a,Ke,n),n!==s.cache&&al(a,[Ke],t,!0),uo(),n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=ld(e,a,n,t);break e}else if(n!==o){o=Aa(Error(c(424)),a),oo(o),a=ld(e,a,n,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=Oa(e.firstChild),na=a,je=!0,pt=null,Ua=!0,t=tu(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),n===o){a=Pa(e,a,t);break e}sa(e,a,n,t)}a=a.child}return a;case 26:return Us(e,a),e===null?(t=jp(a.type,null,a.pendingProps,null))?a.memoizedState=t:je||(t=a.type,e=a.pendingProps,n=Ws(pe.current).createElement(t),n[ta]=a,n[ca]=e,ia(n,t,e),Pe(n),a.stateNode=n):a.memoizedState=jp(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Oe(a),e===null&&je&&(n=a.stateNode=yp(a.type,a.pendingProps,pe.current),na=a,Ua=!0,o=He,qt(a.type)?(xr=o,He=Oa(n.firstChild)):He=o),sa(e,a,a.pendingProps.children,t),Us(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&je&&((o=n=He)&&(n=uh(n,a.type,a.pendingProps,Ua),n!==null?(a.stateNode=n,na=a,He=Oa(n.firstChild),Ua=!1,o=!0):o=!1),o||mt(a)),Oe(a),o=a.type,s=a.pendingProps,l=e!==null?e.memoizedProps:null,n=s.children,hr(o,s)?n=null:l!==null&&hr(o,l)&&(a.flags|=32),a.memoizedState!==null&&(o=fl(e,a,kf,null,null,t),Mo._currentValue=o),Us(e,a),sa(e,a,n,t),a.child;case 6:return e===null&&je&&((e=t=He)&&(t=dh(t,a.pendingProps,Ua),t!==null?(a.stateNode=t,na=a,He=null,e=!0):e=!1),e||mt(a)),null;case 13:return rd(e,a,t);case 4:return he(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Kt(a,null,n,t):sa(e,a,n,t),a.child;case 11:return Pu(e,a,a.type,a.pendingProps,t);case 7:return sa(e,a,a.pendingProps,t),a.child;case 8:return sa(e,a,a.pendingProps.children,t),a.child;case 12:return sa(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,ft(a,a.type,n.value),sa(e,a,n.children,t),a.child;case 9:return o=a.type._context,n=a.pendingProps.children,Vt(a),o=oa(o),n=n(o),a.flags|=1,sa(e,a,n,t),a.child;case 14:return ed(e,a,a.type,a.pendingProps,t);case 15:return ad(e,a,a.type,a.pendingProps,t);case 19:return ud(e,a,t);case 31:return Uf(e,a,t);case 22:return td(e,a,t,a.pendingProps);case 24:return Vt(a),n=oa(Ke),e===null?(o=ol(),o===null&&(o=De,s=tl(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=t),o=s),a.memoizedState={parent:n,cache:o},il(a),ft(a,Ke,o)):((e.lanes&t)!==0&&(ll(e,a),po(a,null,null,t),uo()),o=e.memoizedState,s=a.memoizedState,o.parent!==n?(o={parent:n,cache:n},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),ft(a,Ke,n)):(n=s.cache,ft(a,Ke,n),n!==o.cache&&al(a,[Ke],t,!0))),sa(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function et(e){e.flags|=4}function Yl(e,a,t,n,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw Zt=vs,sl}else e.flags&=-16777217}function pd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qp(a))if(Hd())e.flags|=8192;else throw Zt=vs,sl}function Os(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Xr():536870912,e.lanes|=a,Cn|=a)}function vo(e,a){if(!je)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ge(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function Of(e,a,t){var n=a.pendingProps;switch(Wi(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(a),null;case 1:return Ge(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Wa(Ke),ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(vn(a)?et(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Fi())),Ge(a),null;case 26:var o=a.type,s=a.memoizedState;return e===null?(et(a),s!==null?(Ge(a),pd(a,s)):(Ge(a),Yl(a,o,null,n,t))):s?s!==e.memoizedState?(et(a),Ge(a),pd(a,s)):(Ge(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&et(a),Ge(a),Yl(a,o,e,n,t)),null;case 27:if(Le(a),t=pe.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&et(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Ge(a),null}e=Q.current,vn(a)?Xc(a):(e=yp(o,n,t),a.stateNode=e,et(a))}return Ge(a),null;case 5:if(Le(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&et(a);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Ge(a),null}if(s=Q.current,vn(a))Xc(a);else{var l=Ws(pe.current);switch(s){case 1:s=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=l.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?l.createElement(o,{is:n.is}):l.createElement(o)}}s[ta]=a,s[ca]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)s.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=s;e:switch(ia(s,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&et(a)}}return Ge(a),Yl(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&et(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(c(166));if(e=pe.current,vn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,o=na,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[ta]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||rp(e.nodeValue,t)),e||mt(a,!0)}else e=Ws(e).createTextNode(n),e[ta]=a,a.stateNode=e}return Ge(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=vn(a),t!==null){if(e===null){if(!n)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ta]=a}else Rt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ge(a),e=!1}else t=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(za(a),a):(za(a),null);if((a.flags&128)!==0)throw Error(c(558))}return Ge(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=vn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[ta]=a}else Rt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ge(a),o=!1}else o=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(za(a),a):(za(a),null)}return za(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==o&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Os(a,a.updateQueue),Ge(a),null);case 4:return ce(),e===null&&ur(a.stateNode.containerInfo),Ge(a),null;case 10:return Wa(a.type),Ge(a),null;case 19:if(T(Xe),n=a.memoizedState,n===null)return Ge(a),null;if(o=(a.flags&128)!==0,s=n.rendering,s===null)if(o)vo(n,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=js(e),s!==null){for(a.flags|=128,vo(n,!1),e=s.updateQueue,a.updateQueue=e,Os(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Bc(t,e),t=t.sibling;return B(Xe,Xe.current&1|2),je&&Ja(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&ba()>Bs&&(a.flags|=128,o=!0,vo(n,!1),a.lanes=4194304)}else{if(!o)if(e=js(s),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Os(a,e),vo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!je)return Ge(a),null}else 2*ba()-n.renderingStartTime>Bs&&t!==536870912&&(a.flags|=128,o=!0,vo(n,!1),a.lanes=4194304);n.isBackwards?(s.sibling=a.child,a.child=s):(e=n.last,e!==null?e.sibling=s:a.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ba(),e.sibling=null,t=Xe.current,B(Xe,o?t&1|2:t&1),je&&Ja(a,n.treeForkCount),e):(Ge(a),null);case 22:case 23:return za(a),dl(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Ge(a),a.subtreeFlags&6&&(a.flags|=8192)):Ge(a),t=a.updateQueue,t!==null&&Os(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&T(Qt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Wa(Ke),Ge(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function Lf(e,a){switch(Wi(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Wa(Ke),ce(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Le(a),null;case 31:if(a.memoizedState!==null){if(za(a),a.alternate===null)throw Error(c(340));Rt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Rt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return T(Xe),null;case 4:return ce(),null;case 10:return Wa(a.type),null;case 22:case 23:return za(a),dl(),e!==null&&T(Qt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Wa(Ke),null;case 25:return null;default:return null}}function md(e,a){switch(Wi(a),a.tag){case 3:Wa(Ke),ce();break;case 26:case 27:case 5:Le(a);break;case 4:ce();break;case 31:a.memoizedState!==null&&za(a);break;case 13:za(a);break;case 19:T(Xe);break;case 10:Wa(a.type);break;case 22:case 23:za(a),dl(),e!==null&&T(Qt);break;case 24:Wa(Ke)}}function yo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){n=void 0;var s=t.create,l=t.inst;n=s(),l.destroy=n}t=t.next}while(t!==o)}}catch(r){Ee(a,a.return,r)}}function xt(e,a,t){try{var n=a.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var s=o.next;n=s;do{if((n.tag&e)===e){var l=n.inst,r=l.destroy;if(r!==void 0){l.destroy=void 0,o=a;var u=t,z=r;try{z()}catch(E){Ee(o,u,E)}}}n=n.next}while(n!==s)}}catch(E){Ee(a,a.return,E)}}function fd(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{ou(a,t)}catch(n){Ee(e,e.return,n)}}}function hd(e,a,t){t.props=It(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Ee(e,a,n)}}function xo(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(o){Ee(e,a,o)}}function Ya(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){Ee(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Ee(e,a,o)}else t.current=null}function gd(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){Ee(e,e.return,o)}}function Vl(e,a,t){try{var n=e.stateNode;oh(n,e.type,t,a),n[ca]=a}catch(o){Ee(e,e.return,o)}}function bd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qt(e.type)||e.tag===4}function Ql(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Xa));else if(n!==4&&(n===27&&qt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Xl(e,a,t),e=e.sibling;e!==null;)Xl(e,a,t),e=e.sibling}function Ls(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&qt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ls(e,a,t),e=e.sibling;e!==null;)Ls(e,a,t),e=e.sibling}function vd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);ia(a,n,t),a[ta]=e,a[ca]=t}catch(s){Ee(e,e.return,s)}}var at=!1,We=!1,Zl=!1,yd=typeof WeakSet=="function"?WeakSet:Set,ea=null;function _f(e,a){if(e=e.containerInfo,mr=ni,e=Cc(e),Gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var l=0,r=-1,u=-1,z=0,E=0,M=e,S=null;a:for(;;){for(var N;M!==t||o!==0&&M.nodeType!==3||(r=l+o),M!==s||n!==0&&M.nodeType!==3||(u=l+n),M.nodeType===3&&(l+=M.nodeValue.length),(N=M.firstChild)!==null;)S=M,M=N;for(;;){if(M===e)break a;if(S===t&&++z===o&&(r=l),S===s&&++E===n&&(u=l),(N=M.nextSibling)!==null)break;M=S,S=M.parentNode}M=N}t=r===-1||u===-1?null:{start:r,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(fr={focusedElem:e,selectionRange:t},ni=!1,ea=a;ea!==null;)if(a=ea,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ea=e;else for(;ea!==null;){switch(a=ea,s=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)o=e[t],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=a,o=s.memoizedProps,s=s.memoizedState,n=t.stateNode;try{var K=It(t.type,o);e=n.getSnapshotBeforeUpdate(K,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ee(t,t.return,ae)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)br(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":br(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=a.sibling,e!==null){e.return=a.return,ea=e;break}ea=a.return}}function xd(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:nt(e,t),n&4&&yo(5,t);break;case 1:if(nt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){Ee(t,t.return,l)}else{var o=It(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Ee(t,t.return,l)}}n&64&&fd(t),n&512&&xo(t,t.return);break;case 3:if(nt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{ou(e,a)}catch(l){Ee(t,t.return,l)}}break;case 27:a===null&&n&4&&vd(t);case 26:case 5:nt(e,t),a===null&&n&4&&gd(t),n&512&&xo(t,t.return);break;case 12:nt(e,t);break;case 31:nt(e,t),n&4&&zd(e,t);break;case 13:nt(e,t),n&4&&Sd(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Zf.bind(null,t),ph(e,t))));break;case 22:if(n=t.memoizedState!==null||at,!n){a=a!==null&&a.memoizedState!==null||We,o=at;var s=We;at=n,(We=a)&&!s?ot(e,t,(t.subtreeFlags&8772)!==0):nt(e,t),at=o,We=s}break;case 30:break;default:nt(e,t)}}function wd(e){var a=e.alternate;a!==null&&(e.alternate=null,wd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ji(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,da=!1;function tt(e,a,t){for(t=t.child;t!==null;)jd(e,a,t),t=t.sibling}function jd(e,a,t){if(va&&typeof va.onCommitFiberUnmount=="function")try{va.onCommitFiberUnmount(Vn,t)}catch{}switch(t.tag){case 26:We||Ya(t,a),tt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:We||Ya(t,a);var n=Be,o=da;qt(t.type)&&(Be=t.stateNode,da=!1),tt(e,a,t),To(t.stateNode),Be=n,da=o;break;case 5:We||Ya(t,a);case 6:if(n=Be,o=da,Be=null,tt(e,a,t),Be=n,da=o,Be!==null)if(da)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(t.stateNode)}catch(s){Ee(t,a,s)}else try{Be.removeChild(t.stateNode)}catch(s){Ee(t,a,s)}break;case 18:Be!==null&&(da?(e=Be,fp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Gn(e)):fp(Be,t.stateNode));break;case 4:n=Be,o=da,Be=t.stateNode.containerInfo,da=!0,tt(e,a,t),Be=n,da=o;break;case 0:case 11:case 14:case 15:xt(2,t,a),We||xt(4,t,a),tt(e,a,t);break;case 1:We||(Ya(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&hd(t,a,n)),tt(e,a,t);break;case 21:tt(e,a,t);break;case 22:We=(n=We)||t.memoizedState!==null,tt(e,a,t),We=n;break;default:tt(e,a,t)}}function zd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gn(e)}catch(t){Ee(a,a.return,t)}}}function Sd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gn(e)}catch(t){Ee(a,a.return,t)}}function Hf(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new yd),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new yd),a;default:throw Error(c(435,e.tag))}}function _s(e,a){var t=Hf(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var o=Kf.bind(null,e,n);n.then(o,o)}})}function pa(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],s=e,l=a,r=l;e:for(;r!==null;){switch(r.tag){case 27:if(qt(r.type)){Be=r.stateNode,da=!1;break e}break;case 5:Be=r.stateNode,da=!1;break e;case 3:case 4:Be=r.stateNode.containerInfo,da=!0;break e}r=r.return}if(Be===null)throw Error(c(160));jd(s,l,o),Be=null,da=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)kd(a,e),a=a.sibling}var Ha=null;function kd(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pa(a,e),ma(e),n&4&&(xt(3,e,e.return),yo(3,e),xt(5,e,e.return));break;case 1:pa(a,e),ma(e),n&512&&(We||t===null||Ya(t,t.return)),n&64&&at&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var o=Ha;if(pa(a,e),ma(e),n&512&&(We||t===null||Ya(t,t.return)),n&4){var s=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,o=o.ownerDocument||o;a:switch(n){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Zn]||s[ta]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(n),o.head.insertBefore(s,o.querySelector("head > title"))),ia(s,n,t),s[ta]=e,Pe(s),n=s;break e;case"link":var l=kp("link","href",o).get(n+(t.href||""));if(l){for(var r=0;r<l.length;r++)if(s=l[r],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(r,1);break a}}s=o.createElement(n),ia(s,n,t),o.head.appendChild(s);break;case"meta":if(l=kp("meta","content",o).get(n+(t.content||""))){for(r=0;r<l.length;r++)if(s=l[r],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(r,1);break a}}s=o.createElement(n),ia(s,n,t),o.head.appendChild(s);break;default:throw Error(c(468,n))}s[ta]=e,Pe(s),n=s}e.stateNode=n}else Np(o,e.type,e.stateNode);else e.stateNode=Sp(o,n,e.memoizedProps);else s!==n?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,n===null?Np(o,e.type,e.stateNode):Sp(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Vl(e,e.memoizedProps,t.memoizedProps)}break;case 27:pa(a,e),ma(e),n&512&&(We||t===null||Ya(t,t.return)),t!==null&&n&4&&Vl(e,e.memoizedProps,t.memoizedProps);break;case 5:if(pa(a,e),ma(e),n&512&&(We||t===null||Ya(t,t.return)),e.flags&32){o=e.stateNode;try{rn(o,"")}catch(K){Ee(e,e.return,K)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,Vl(e,o,t!==null?t.memoizedProps:o)),n&1024&&(Zl=!0);break;case 6:if(pa(a,e),ma(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(K){Ee(e,e.return,K)}}break;case 3:if(Ps=null,o=Ha,Ha=$s(a.containerInfo),pa(a,e),Ha=o,ma(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Gn(a.containerInfo)}catch(K){Ee(e,e.return,K)}Zl&&(Zl=!1,Nd(e));break;case 4:n=Ha,Ha=$s(e.stateNode.containerInfo),pa(a,e),ma(e),Ha=n;break;case 12:pa(a,e),ma(e);break;case 31:pa(a,e),ma(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_s(e,n)));break;case 13:pa(a,e),ma(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Gs=ba()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_s(e,n)));break;case 22:o=e.memoizedState!==null;var u=t!==null&&t.memoizedState!==null,z=at,E=We;if(at=z||o,We=E||u,pa(a,e),We=E,at=z,ma(e),n&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(t===null||u||at||We||Wt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){u=t=a;try{if(s=u.stateNode,o)l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{r=u.stateNode;var M=u.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null;r.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(K){Ee(u,u.return,K)}}}else if(a.tag===6){if(t===null){u=a;try{u.stateNode.nodeValue=o?"":u.memoizedProps}catch(K){Ee(u,u.return,K)}}}else if(a.tag===18){if(t===null){u=a;try{var N=u.stateNode;o?hp(N,!0):hp(u.stateNode,!1)}catch(K){Ee(u,u.return,K)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,_s(e,t))));break;case 19:pa(a,e),ma(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_s(e,n)));break;case 30:break;case 21:break;default:pa(a,e),ma(e)}}function ma(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(bd(n)){t=n;break}n=n.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var o=t.stateNode,s=Ql(e);Ls(e,s,o);break;case 5:var l=t.stateNode;t.flags&32&&(rn(l,""),t.flags&=-33);var r=Ql(e);Ls(e,r,l);break;case 3:case 4:var u=t.stateNode.containerInfo,z=Ql(e);Xl(e,z,u);break;default:throw Error(c(161))}}catch(E){Ee(e,e.return,E)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Nd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function nt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)xd(e,a.alternate,a),a=a.sibling}function Wt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:xt(4,a,a.return),Wt(a);break;case 1:Ya(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&hd(a,a.return,t),Wt(a);break;case 27:To(a.stateNode);case 26:case 5:Ya(a,a.return),Wt(a);break;case 22:a.memoizedState===null&&Wt(a);break;case 30:Wt(a);break;default:Wt(a)}e=e.sibling}}function ot(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,o=e,s=a,l=s.flags;switch(s.tag){case 0:case 11:case 15:ot(o,s,t),yo(4,s);break;case 1:if(ot(o,s,t),n=s,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(z){Ee(n,n.return,z)}if(n=s,o=n.updateQueue,o!==null){var r=n.stateNode;try{var u=o.shared.hiddenCallbacks;if(u!==null)for(o.shared.hiddenCallbacks=null,o=0;o<u.length;o++)nu(u[o],r)}catch(z){Ee(n,n.return,z)}}t&&l&64&&fd(s),xo(s,s.return);break;case 27:vd(s);case 26:case 5:ot(o,s,t),t&&n===null&&l&4&&gd(s),xo(s,s.return);break;case 12:ot(o,s,t);break;case 31:ot(o,s,t),t&&l&4&&zd(o,s);break;case 13:ot(o,s,t),t&&l&4&&Sd(o,s);break;case 22:s.memoizedState===null&&ot(o,s,t),xo(s,s.return);break;case 30:break;default:ot(o,s,t)}a=a.sibling}}function Kl(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&so(t))}function Jl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&so(e))}function Ga(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)qd(e,a,t,n),a=a.sibling}function qd(e,a,t,n){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ga(e,a,t,n),o&2048&&yo(9,a);break;case 1:Ga(e,a,t,n);break;case 3:Ga(e,a,t,n),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&so(e)));break;case 12:if(o&2048){Ga(e,a,t,n),e=a.stateNode;try{var s=a.memoizedProps,l=s.id,r=s.onPostCommit;typeof r=="function"&&r(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){Ee(a,a.return,u)}}else Ga(e,a,t,n);break;case 31:Ga(e,a,t,n);break;case 13:Ga(e,a,t,n);break;case 23:break;case 22:s=a.stateNode,l=a.alternate,a.memoizedState!==null?s._visibility&2?Ga(e,a,t,n):wo(e,a):s._visibility&2?Ga(e,a,t,n):(s._visibility|=2,En(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),o&2048&&Kl(l,a);break;case 24:Ga(e,a,t,n),o&2048&&Jl(a.alternate,a);break;default:Ga(e,a,t,n)}}function En(e,a,t,n,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,l=a,r=t,u=n,z=l.flags;switch(l.tag){case 0:case 11:case 15:En(s,l,r,u,o),yo(8,l);break;case 23:break;case 22:var E=l.stateNode;l.memoizedState!==null?E._visibility&2?En(s,l,r,u,o):wo(s,l):(E._visibility|=2,En(s,l,r,u,o)),o&&z&2048&&Kl(l.alternate,l);break;case 24:En(s,l,r,u,o),o&&z&2048&&Jl(l.alternate,l);break;default:En(s,l,r,u,o)}a=a.sibling}}function wo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,o=n.flags;switch(n.tag){case 22:wo(t,n),o&2048&&Kl(n.alternate,n);break;case 24:wo(t,n),o&2048&&Jl(n.alternate,n);break;default:wo(t,n)}a=a.sibling}}var jo=8192;function Tn(e,a,t){if(e.subtreeFlags&jo)for(e=e.child;e!==null;)Ed(e,a,t),e=e.sibling}function Ed(e,a,t){switch(e.tag){case 26:Tn(e,a,t),e.flags&jo&&e.memoizedState!==null&&Sh(t,Ha,e.memoizedState,e.memoizedProps);break;case 5:Tn(e,a,t);break;case 3:case 4:var n=Ha;Ha=$s(e.stateNode.containerInfo),Tn(e,a,t),Ha=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=jo,jo=16777216,Tn(e,a,t),jo=n):Tn(e,a,t));break;default:Tn(e,a,t)}}function Td(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function zo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ea=n,Cd(n,e)}Td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ad(e),e=e.sibling}function Ad(e){switch(e.tag){case 0:case 11:case 15:zo(e),e.flags&2048&&xt(9,e,e.return);break;case 3:zo(e);break;case 12:zo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Hs(e)):zo(e);break;default:zo(e)}}function Hs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ea=n,Cd(n,e)}Td(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:xt(8,a,a.return),Hs(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Hs(a));break;default:Hs(a)}e=e.sibling}}function Cd(e,a){for(;ea!==null;){var t=ea;switch(t.tag){case 0:case 11:case 15:xt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:so(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,ea=n;else e:for(t=e;ea!==null;){n=ea;var o=n.sibling,s=n.return;if(wd(n),n===t){ea=null;break e}if(o!==null){o.return=s,ea=o;break e}ea=s}}}var Gf={getCacheForType:function(e){var a=oa(Ke),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return oa(Ke).controller.signal}},Bf=typeof WeakMap=="function"?WeakMap:Map,Ne=0,De=null,be=null,ye=0,qe=0,Sa=null,wt=!1,An=!1,Il=!1,st=0,Ve=0,jt=0,$t=0,Wl=0,ka=0,Cn=0,So=null,fa=null,$l=!1,Gs=0,Md=0,Bs=1/0,Rs=null,zt=null,$e=0,St=null,Mn=null,it=0,Fl=0,Pl=null,Ud=null,ko=0,er=null;function Na(){return(Ne&2)!==0&&ye!==0?ye&-ye:q.T!==null?ir():Ir()}function Dd(){if(ka===0)if((ye&536870912)===0||je){var e=Io;Io<<=1,(Io&3932160)===0&&(Io=262144),ka=e}else ka=536870912;return e=ja.current,e!==null&&(e.flags|=32),ka}function ha(e,a,t){(e===De&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Un(e,0),kt(e,ye,ka,!1)),Xn(e,t),((Ne&2)===0||e!==De)&&(e===De&&((Ne&2)===0&&($t|=t),Ve===4&&kt(e,ye,ka,!1)),Va(e))}function Od(e,a,t){if((Ne&6)!==0)throw Error(c(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Qn(e,a),o=n?Vf(e,a):tr(e,a,!0),s=n;do{if(o===0){An&&!n&&kt(e,a,0,!1);break}else{if(t=e.current.alternate,s&&!Rf(t)){o=tr(e,a,!1),s=!1;continue}if(o===2){if(s=a,e.errorRecoveryDisabledLanes&s)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var r=e;o=So;var u=r.current.memoizedState.isDehydrated;if(u&&(Un(r,l).flags|=256),l=tr(r,l,!1),l!==2){if(Il&&!u){r.errorRecoveryDisabledLanes|=s,$t|=s,o=4;break e}s=fa,fa=o,s!==null&&(fa===null?fa=s:fa.push.apply(fa,s))}o=l}if(s=!1,o!==2)continue}}if(o===1){Un(e,0),kt(e,a,0,!0);break}e:{switch(n=e,s=o,s){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:kt(n,a,ka,!wt);break e;case 2:fa=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(o=Gs+300-ba(),10<o)){if(kt(n,a,ka,!wt),$o(n,0,!0)!==0)break e;it=a,n.timeoutHandle=pp(Ld.bind(null,n,t,fa,Rs,$l,a,ka,$t,Cn,wt,s,"Throttled",-0,0),o);break e}Ld(n,t,fa,Rs,$l,a,ka,$t,Cn,wt,s,null,-0,0)}}break}while(!0);Va(e)}function Ld(e,a,t,n,o,s,l,r,u,z,E,M,S,N){if(e.timeoutHandle=-1,M=a.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xa},Ed(a,s,M);var K=(s&62914560)===s?Gs-ba():(s&4194048)===s?Md-ba():0;if(K=kh(M,K),K!==null){it=s,e.cancelPendingCommit=K(Qd.bind(null,e,a,s,t,n,o,l,r,u,E,M,null,S,N)),kt(e,s,l,!z);return}}Qd(e,a,s,t,n,o,l,r,u)}function Rf(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],s=o.getSnapshot;o=o.value;try{if(!xa(s(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function kt(e,a,t,n){a&=~Wl,a&=~$t,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var o=a;0<o;){var s=31-ya(o),l=1<<s;n[s]=-1,o&=~l}t!==0&&Zr(e,t,a)}function Ys(){return(Ne&6)===0?(No(0),!1):!0}function ar(){if(be!==null){if(qe===0)var e=be.return;else e=be,Ia=Yt=null,bl(e),zn=null,lo=0,e=be;for(;e!==null;)md(e.alternate,e),e=e.return;be=null}}function Un(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,lh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),it=0,ar(),De=e,be=t=Ka(e.current,null),ye=a,qe=0,Sa=null,wt=!1,An=Qn(e,a),Il=!1,Cn=ka=Wl=$t=jt=Ve=0,fa=So=null,$l=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var o=31-ya(n),s=1<<o;a|=e[o],n&=~s}return st=a,cs(),t}function _d(e,a){de=null,q.H=go,a===jn||a===bs?(a=Pc(),qe=3):a===sl?(a=Pc(),qe=4):qe=a===Ul?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Sa=a,be===null&&(Ve=1,Cs(e,Aa(a,e.current)))}function Hd(){var e=ja.current;return e===null?!0:(ye&4194048)===ye?Da===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Da:!1}function Gd(){var e=q.H;return q.H=go,e===null?go:e}function Bd(){var e=q.A;return q.A=Gf,e}function Vs(){Ve=4,wt||(ye&4194048)!==ye&&ja.current!==null||(An=!0),(jt&134217727)===0&&($t&134217727)===0||De===null||kt(De,ye,ka,!1)}function tr(e,a,t){var n=Ne;Ne|=2;var o=Gd(),s=Bd();(De!==e||ye!==a)&&(Rs=null,Un(e,a)),a=!1;var l=Ve;e:do try{if(qe!==0&&be!==null){var r=be,u=Sa;switch(qe){case 8:ar(),l=6;break e;case 3:case 2:case 9:case 6:ja.current===null&&(a=!0);var z=qe;if(qe=0,Sa=null,Dn(e,r,u,z),t&&An){l=0;break e}break;default:z=qe,qe=0,Sa=null,Dn(e,r,u,z)}}Yf(),l=Ve;break}catch(E){_d(e,E)}while(!0);return a&&e.shellSuspendCounter++,Ia=Yt=null,Ne=n,q.H=o,q.A=s,be===null&&(De=null,ye=0,cs()),l}function Yf(){for(;be!==null;)Rd(be)}function Vf(e,a){var t=Ne;Ne|=2;var n=Gd(),o=Bd();De!==e||ye!==a?(Rs=null,Bs=ba()+500,Un(e,a)):An=Qn(e,a);e:do try{if(qe!==0&&be!==null){a=be;var s=Sa;a:switch(qe){case 1:qe=0,Sa=null,Dn(e,a,s,1);break;case 2:case 9:if($c(s)){qe=0,Sa=null,Yd(a);break}a=function(){qe!==2&&qe!==9||De!==e||(qe=7),Va(e)},s.then(a,a);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:$c(s)?(qe=0,Sa=null,Yd(a)):(qe=0,Sa=null,Dn(e,a,s,7));break;case 5:var l=null;switch(be.tag){case 26:l=be.memoizedState;case 5:case 27:var r=be;if(l?qp(l):r.stateNode.complete){qe=0,Sa=null;var u=r.sibling;if(u!==null)be=u;else{var z=r.return;z!==null?(be=z,Qs(z)):be=null}break a}}qe=0,Sa=null,Dn(e,a,s,5);break;case 6:qe=0,Sa=null,Dn(e,a,s,6);break;case 8:ar(),Ve=6;break e;default:throw Error(c(462))}}Qf();break}catch(E){_d(e,E)}while(!0);return Ia=Yt=null,q.H=n,q.A=o,Ne=t,be!==null?0:(De=null,ye=0,cs(),Ve)}function Qf(){for(;be!==null&&!pm();)Rd(be)}function Rd(e){var a=dd(e.alternate,e,st);e.memoizedProps=e.pendingProps,a===null?Qs(e):be=a}function Yd(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=sd(t,a,a.pendingProps,a.type,void 0,ye);break;case 11:a=sd(t,a,a.pendingProps,a.type.render,a.ref,ye);break;case 5:bl(a);default:md(t,a),a=be=Bc(a,st),a=dd(t,a,st)}e.memoizedProps=e.pendingProps,a===null?Qs(e):be=a}function Dn(e,a,t,n){Ia=Yt=null,bl(a),zn=null,lo=0;var o=a.return;try{if(Mf(e,o,a,t,ye)){Ve=1,Cs(e,Aa(t,e.current)),be=null;return}}catch(s){if(o!==null)throw be=o,s;Ve=1,Cs(e,Aa(t,e.current)),be=null;return}a.flags&32768?(je||n===1?e=!0:An||(ye&536870912)!==0?e=!1:(wt=e=!0,(n===2||n===9||n===3||n===6)&&(n=ja.current,n!==null&&n.tag===13&&(n.flags|=16384))),Vd(a,e)):Qs(a)}function Qs(e){var a=e;do{if((a.flags&32768)!==0){Vd(a,wt);return}e=a.return;var t=Of(a.alternate,a,st);if(t!==null){be=t;return}if(a=a.sibling,a!==null){be=a;return}be=a=e}while(a!==null);Ve===0&&(Ve=5)}function Vd(e,a){do{var t=Lf(e.alternate,e);if(t!==null){t.flags&=32767,be=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){be=e;return}be=e=t}while(e!==null);Ve=6,be=null}function Qd(e,a,t,n,o,s,l,r,u){e.cancelPendingCommit=null;do Xs();while($e!==0);if((Ne&6)!==0)throw Error(c(327));if(a!==null){if(a===e.current)throw Error(c(177));if(s=a.lanes|a.childLanes,s|=Qi,jm(e,t,s,l,r,u),e===De&&(be=De=null,ye=0),Mn=a,St=e,it=t,Fl=s,Pl=o,Ud=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jf(Ko,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=q.T,q.T=null,o=D.p,D.p=2,l=Ne,Ne|=4;try{_f(e,a,t)}finally{Ne=l,D.p=o,q.T=n}}$e=1,Xd(),Zd(),Kd()}}function Xd(){if($e===1){$e=0;var e=St,a=Mn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=q.T,q.T=null;var n=D.p;D.p=2;var o=Ne;Ne|=4;try{kd(a,e);var s=fr,l=Cc(e.containerInfo),r=s.focusedElem,u=s.selectionRange;if(l!==r&&r&&r.ownerDocument&&Ac(r.ownerDocument.documentElement,r)){if(u!==null&&Gi(r)){var z=u.start,E=u.end;if(E===void 0&&(E=z),"selectionStart"in r)r.selectionStart=z,r.selectionEnd=Math.min(E,r.value.length);else{var M=r.ownerDocument||document,S=M&&M.defaultView||window;if(S.getSelection){var N=S.getSelection(),K=r.textContent.length,ae=Math.min(u.start,K),Ue=u.end===void 0?ae:Math.min(u.end,K);!N.extend&&ae>Ue&&(l=Ue,Ue=ae,ae=l);var g=Tc(r,ae),f=Tc(r,Ue);if(g&&f&&(N.rangeCount!==1||N.anchorNode!==g.node||N.anchorOffset!==g.offset||N.focusNode!==f.node||N.focusOffset!==f.offset)){var j=M.createRange();j.setStart(g.node,g.offset),N.removeAllRanges(),ae>Ue?(N.addRange(j),N.extend(f.node,f.offset)):(j.setEnd(f.node,f.offset),N.addRange(j))}}}}for(M=[],N=r;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<M.length;r++){var C=M[r];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}ni=!!mr,fr=mr=null}finally{Ne=o,D.p=n,q.T=t}}e.current=a,$e=2}}function Zd(){if($e===2){$e=0;var e=St,a=Mn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=q.T,q.T=null;var n=D.p;D.p=2;var o=Ne;Ne|=4;try{xd(e,a.alternate,a)}finally{Ne=o,D.p=n,q.T=t}}$e=3}}function Kd(){if($e===4||$e===3){$e=0,mm();var e=St,a=Mn,t=it,n=Ud;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?$e=5:($e=0,Mn=St=null,Jd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(zt=null),xi(t),a=a.stateNode,va&&typeof va.onCommitFiberRoot=="function")try{va.onCommitFiberRoot(Vn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=q.T,o=D.p,D.p=2,q.T=null;try{for(var s=e.onRecoverableError,l=0;l<n.length;l++){var r=n[l];s(r.value,{componentStack:r.stack})}}finally{q.T=a,D.p=o}}(it&3)!==0&&Xs(),Va(e),o=e.pendingLanes,(t&261930)!==0&&(o&42)!==0?e===er?ko++:(ko=0,er=e):ko=0,No(0)}}function Jd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,so(a)))}function Xs(){return Xd(),Zd(),Kd(),Id()}function Id(){if($e!==5)return!1;var e=St,a=Fl;Fl=0;var t=xi(it),n=q.T,o=D.p;try{D.p=32>t?32:t,q.T=null,t=Pl,Pl=null;var s=St,l=it;if($e=0,Mn=St=null,it=0,(Ne&6)!==0)throw Error(c(331));var r=Ne;if(Ne|=4,Ad(s.current),qd(s,s.current,l,t),Ne=r,No(0,!1),va&&typeof va.onPostCommitFiberRoot=="function")try{va.onPostCommitFiberRoot(Vn,s)}catch{}return!0}finally{D.p=o,q.T=n,Jd(e,a)}}function Wd(e,a,t){a=Aa(t,a),a=Ml(e.stateNode,a,2),e=bt(e,a,2),e!==null&&(Xn(e,2),Va(e))}function Ee(e,a,t){if(e.tag===3)Wd(e,e,t);else for(;a!==null;){if(a.tag===3){Wd(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(zt===null||!zt.has(n))){e=Aa(t,e),t=$u(2),n=bt(a,t,2),n!==null&&(Fu(t,n,a,e),Xn(n,2),Va(n));break}}a=a.return}}function nr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Bf;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||(Il=!0,o.add(t),e=Xf.bind(null,e,a,t),a.then(e,e))}function Xf(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,De===e&&(ye&t)===t&&(Ve===4||Ve===3&&(ye&62914560)===ye&&300>ba()-Gs?(Ne&2)===0&&Un(e,0):Wl|=t,Cn===ye&&(Cn=0)),Va(e)}function $d(e,a){a===0&&(a=Xr()),e=Gt(e,a),e!==null&&(Xn(e,a),Va(e))}function Zf(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),$d(e,t)}function Kf(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(a),$d(e,t)}function Jf(e,a){return gi(e,a)}var Zs=null,On=null,or=!1,Ks=!1,sr=!1,Nt=0;function Va(e){e!==On&&e.next===null&&(On===null?Zs=On=e:On=On.next=e),Ks=!0,or||(or=!0,Wf())}function No(e,a){if(!sr&&Ks){sr=!0;do for(var t=!1,n=Zs;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var s=0;else{var l=n.suspendedLanes,r=n.pingedLanes;s=(1<<31-ya(42|e)+1)-1,s&=o&~(l&~r),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,ap(n,s))}else s=ye,s=$o(n,n===De?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Qn(n,s)||(t=!0,ap(n,s));n=n.next}while(t);sr=!1}}function If(){Fd()}function Fd(){Ks=or=!1;var e=0;Nt!==0&&ih()&&(e=Nt);for(var a=ba(),t=null,n=Zs;n!==null;){var o=n.next,s=Pd(n,a);s===0?(n.next=null,t===null?Zs=o:t.next=o,o===null&&(On=t)):(t=n,(e!==0||(s&3)!==0)&&(Ks=!0)),n=o}$e!==0&&$e!==5||No(e),Nt!==0&&(Nt=0)}function Pd(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var l=31-ya(s),r=1<<l,u=o[l];u===-1?((r&t)===0||(r&n)!==0)&&(o[l]=wm(r,a)):u<=a&&(e.expiredLanes|=r),s&=~r}if(a=De,t=ye,t=$o(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&bi(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Qn(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&bi(n),xi(t)){case 2:case 8:t=Vr;break;case 32:t=Ko;break;case 268435456:t=Qr;break;default:t=Ko}return n=ep.bind(null,e),t=gi(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&bi(n),e.callbackPriority=2,e.callbackNode=null,2}function ep(e,a){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Xs()&&e.callbackNode!==t)return null;var n=ye;return n=$o(e,e===De?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Od(e,n,a),Pd(e,ba()),e.callbackNode!=null&&e.callbackNode===t?ep.bind(null,e):null)}function ap(e,a){if(Xs())return null;Od(e,a,!0)}function Wf(){rh(function(){(Ne&6)!==0?gi(Yr,If):Fd()})}function ir(){if(Nt===0){var e=xn;e===0&&(e=Jo,Jo<<=1,(Jo&261888)===0&&(Jo=256)),Nt=e}return Nt}function tp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:as(""+e)}function np(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function $f(e,a,t,n,o){if(a==="submit"&&t&&t.stateNode===o){var s=tp((o[ca]||null).action),l=n.submitter;l&&(a=(a=l[ca]||null)?tp(a.formAction):l.getAttribute("formAction"),a!==null&&(s=a,l=null));var r=new ss("action","action",null,n,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Nt!==0){var u=l?np(o,l):new FormData(o);Nl(t,{pending:!0,data:u,method:o.method,action:s},null,u)}}else typeof s=="function"&&(r.preventDefault(),u=l?np(o,l):new FormData(o),Nl(t,{pending:!0,data:u,method:o.method,action:s},s,u))},currentTarget:o}]})}}for(var lr=0;lr<Vi.length;lr++){var rr=Vi[lr],Ff=rr.toLowerCase(),Pf=rr[0].toUpperCase()+rr.slice(1);_a(Ff,"on"+Pf)}_a(Dc,"onAnimationEnd"),_a(Oc,"onAnimationIteration"),_a(Lc,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(hf,"onTransitionRun"),_a(gf,"onTransitionStart"),_a(bf,"onTransitionCancel"),_a(_c,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function op(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var l=n.length-1;0<=l;l--){var r=n[l],u=r.instance,z=r.currentTarget;if(r=r.listener,u!==s&&o.isPropagationStopped())break e;s=r,o.currentTarget=z;try{s(o)}catch(E){rs(E)}o.currentTarget=null,s=u}else for(l=0;l<n.length;l++){if(r=n[l],u=r.instance,z=r.currentTarget,r=r.listener,u!==s&&o.isPropagationStopped())break e;s=r,o.currentTarget=z;try{s(o)}catch(E){rs(E)}o.currentTarget=null,s=u}}}}function ve(e,a){var t=a[wi];t===void 0&&(t=a[wi]=new Set);var n=e+"__bubble";t.has(n)||(sp(a,e,2,!1),t.add(n))}function cr(e,a,t){var n=0;a&&(n|=4),sp(t,e,n,a)}var Js="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Js]){e[Js]=!0,Fr.forEach(function(t){t!=="selectionchange"&&(eh.has(t)||cr(t,!1,e),cr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Js]||(a[Js]=!0,cr("selectionchange",!1,a))}}function sp(e,a,t,n){switch(Dp(a)){case 2:var o=Eh;break;case 8:o=Th;break;default:o=kr}t=o.bind(null,a,t,e),o=void 0,!Ai||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function dr(e,a,t,n,o){var s=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var r=n.stateNode.containerInfo;if(r===o)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&l.stateNode.containerInfo===o)return;l=l.return}for(;r!==null;){if(l=tn(r),l===null)return;if(u=l.tag,u===5||u===6||u===26||u===27){n=s=l;continue e}r=r.parentNode}}n=n.return}uc(function(){var z=s,E=Ei(t),M=[];e:{var S=Hc.get(e);if(S!==void 0){var N=ss,K=e;switch(e){case"keypress":if(ns(t)===0)break e;case"keydown":case"keyup":N=Zm;break;case"focusin":K="focus",N=Di;break;case"focusout":K="blur",N=Di;break;case"beforeblur":case"afterblur":N=Di;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Im;break;case Dc:case Oc:case Lc:N=_m;break;case _c:N=$m;break;case"scroll":case"scrollend":N=Mm;break;case"wheel":N=Pm;break;case"copy":case"cut":case"paste":N=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=hc;break;case"toggle":case"beforetoggle":N=af}var ae=(a&4)!==0,Ue=!ae&&(e==="scroll"||e==="scrollend"),g=ae?S!==null?S+"Capture":null:S;ae=[];for(var f=z,j;f!==null;){var C=f;if(j=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||j===null||g===null||(C=Jn(f,g),C!=null&&ae.push(Eo(f,C,j))),Ue)break;f=f.return}0<ae.length&&(S=new N(S,K,null,t,E),M.push({event:S,listeners:ae}))}}if((a&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",S&&t!==qi&&(K=t.relatedTarget||t.fromElement)&&(tn(K)||K[an]))break e;if((N||S)&&(S=E.window===E?E:(S=E.ownerDocument)?S.defaultView||S.parentWindow:window,N?(K=t.relatedTarget||t.toElement,N=z,K=K?tn(K):null,K!==null&&(Ue=h(K),ae=K.tag,K!==Ue||ae!==5&&ae!==27&&ae!==6)&&(K=null)):(N=null,K=z),N!==K)){if(ae=mc,C="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(ae=hc,C="onPointerLeave",g="onPointerEnter",f="pointer"),Ue=N==null?S:Kn(N),j=K==null?S:Kn(K),S=new ae(C,f+"leave",N,t,E),S.target=Ue,S.relatedTarget=j,C=null,tn(E)===z&&(ae=new ae(g,f+"enter",K,t,E),ae.target=j,ae.relatedTarget=Ue,C=ae),Ue=C,N&&K)a:{for(ae=ah,g=N,f=K,j=0,C=g;C;C=ae(C))j++;C=0;for(var P=f;P;P=ae(P))C++;for(;0<j-C;)g=ae(g),j--;for(;0<C-j;)f=ae(f),C--;for(;j--;){if(g===f||f!==null&&g===f.alternate){ae=g;break a}g=ae(g),f=ae(f)}ae=null}else ae=null;N!==null&&ip(M,S,N,ae,!1),K!==null&&Ue!==null&&ip(M,Ue,K,ae,!0)}}e:{if(S=z?Kn(z):window,N=S.nodeName&&S.nodeName.toLowerCase(),N==="select"||N==="input"&&S.type==="file")var Se=zc;else if(wc(S))if(Sc)Se=pf;else{Se=uf;var I=cf}else N=S.nodeName,!N||N.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?z&&Ni(z.elementType)&&(Se=zc):Se=df;if(Se&&(Se=Se(e,z))){jc(M,Se,t,E);break e}I&&I(e,S,z),e==="focusout"&&z&&S.type==="number"&&z.memoizedProps.value!=null&&ki(S,"number",S.value)}switch(I=z?Kn(z):window,e){case"focusin":(wc(I)||I.contentEditable==="true")&&(pn=I,Bi=z,to=null);break;case"focusout":to=Bi=pn=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,Mc(M,t,E);break;case"selectionchange":if(ff)break;case"keydown":case"keyup":Mc(M,t,E)}var me;if(Li)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else dn?yc(e,t)&&(xe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(xe="onCompositionStart");xe&&(gc&&t.locale!=="ko"&&(dn||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&dn&&(me=dc()):(ut=E,Ci="value"in ut?ut.value:ut.textContent,dn=!0)),I=Is(z,xe),0<I.length&&(xe=new fc(xe,e,null,t,E),M.push({event:xe,listeners:I}),me?xe.data=me:(me=xc(t),me!==null&&(xe.data=me)))),(me=nf?of(e,t):sf(e,t))&&(xe=Is(z,"onBeforeInput"),0<xe.length&&(I=new fc("onBeforeInput","beforeinput",null,t,E),M.push({event:I,listeners:xe}),I.data=me)),$f(M,e,z,t,E)}op(M,a)})}function Eo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Is(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Jn(e,t),o!=null&&n.unshift(Eo(e,o,s)),o=Jn(e,a),o!=null&&n.push(Eo(e,o,s))),e.tag===3)return n;e=e.return}return[]}function ah(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ip(e,a,t,n,o){for(var s=a._reactName,l=[];t!==null&&t!==n;){var r=t,u=r.alternate,z=r.stateNode;if(r=r.tag,u!==null&&u===n)break;r!==5&&r!==26&&r!==27||z===null||(u=z,o?(z=Jn(t,s),z!=null&&l.unshift(Eo(t,z,u))):o||(z=Jn(t,s),z!=null&&l.push(Eo(t,z,u)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var th=/\r\n?/g,nh=/\u0000|\uFFFD/g;function lp(e){return(typeof e=="string"?e:""+e).replace(th,`
`).replace(nh,"")}function rp(e,a){return a=lp(a),lp(e)===a}function Me(e,a,t,n,o,s){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||rn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&rn(e,""+n);break;case"className":Po(e,"class",n);break;case"tabIndex":Po(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Po(e,t,n);break;case"style":rc(e,n,s);break;case"data":if(a!=="object"){Po(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=as(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(a!=="input"&&Me(e,a,"name",o.name,o,null),Me(e,a,"formEncType",o.formEncType,o,null),Me(e,a,"formMethod",o.formMethod,o,null),Me(e,a,"formTarget",o.formTarget,o,null)):(Me(e,a,"encType",o.encType,o,null),Me(e,a,"method",o.method,o,null),Me(e,a,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=as(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Xa);break;case"onScroll":n!=null&&ve("scroll",e);break;case"onScrollEnd":n!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=as(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Fo(e,"popover",n);break;case"xlinkActuate":Qa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Qa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Qa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Qa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Qa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Qa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Qa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Qa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Qa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Fo(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Am.get(t)||t,Fo(e,t,n))}}function pr(e,a,t,n,o,s){switch(t){case"style":rc(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof n=="string"?rn(e,n):(typeof n=="number"||typeof n=="bigint")&&rn(e,""+n);break;case"onScroll":n!=null&&ve("scroll",e);break;case"onScrollEnd":n!=null&&ve("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),a=t.slice(2,o?t.length-7:void 0),s=e[ca]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(a,s,o),typeof n=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,o);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Fo(e,t,n)}}}function ia(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var n=!1,o=!1,s;for(s in t)if(t.hasOwnProperty(s)){var l=t[s];if(l!=null)switch(s){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Me(e,a,s,l,t,null)}}o&&Me(e,a,"srcSet",t.srcSet,t,null),n&&Me(e,a,"src",t.src,t,null);return;case"input":ve("invalid",e);var r=s=l=o=null,u=null,z=null;for(n in t)if(t.hasOwnProperty(n)){var E=t[n];if(E!=null)switch(n){case"name":o=E;break;case"type":l=E;break;case"checked":u=E;break;case"defaultChecked":z=E;break;case"value":s=E;break;case"defaultValue":r=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,a));break;default:Me(e,a,n,E,t,null)}}oc(e,s,r,u,z,l,o,!1);return;case"select":ve("invalid",e),n=l=s=null;for(o in t)if(t.hasOwnProperty(o)&&(r=t[o],r!=null))switch(o){case"value":s=r;break;case"defaultValue":l=r;break;case"multiple":n=r;default:Me(e,a,o,r,t,null)}a=s,t=l,e.multiple=!!n,a!=null?ln(e,!!n,a,!1):t!=null&&ln(e,!!n,t,!0);return;case"textarea":ve("invalid",e),s=o=n=null;for(l in t)if(t.hasOwnProperty(l)&&(r=t[l],r!=null))switch(l){case"value":n=r;break;case"defaultValue":o=r;break;case"children":s=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:Me(e,a,l,r,t,null)}ic(e,n,o,s);return;case"option":for(u in t)t.hasOwnProperty(u)&&(n=t[u],n!=null)&&(u==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Me(e,a,u,n,t,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(n=0;n<qo.length;n++)ve(qo[n],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in t)if(t.hasOwnProperty(z)&&(n=t[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:Me(e,a,z,n,t,null)}return;default:if(Ni(a)){for(E in t)t.hasOwnProperty(E)&&(n=t[E],n!==void 0&&pr(e,a,E,n,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(n=t[r],n!=null&&Me(e,a,r,n,t,null))}function oh(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,l=null,r=null,u=null,z=null,E=null;for(N in t){var M=t[N];if(t.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":u=M;default:n.hasOwnProperty(N)||Me(e,a,N,null,n,M)}}for(var S in n){var N=n[S];if(M=t[S],n.hasOwnProperty(S)&&(N!=null||M!=null))switch(S){case"type":s=N;break;case"name":o=N;break;case"checked":z=N;break;case"defaultChecked":E=N;break;case"value":l=N;break;case"defaultValue":r=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,a));break;default:N!==M&&Me(e,a,S,N,n,M)}}Si(e,l,r,u,z,E,s,o);return;case"select":N=l=r=S=null;for(s in t)if(u=t[s],t.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":N=u;default:n.hasOwnProperty(s)||Me(e,a,s,null,n,u)}for(o in n)if(s=n[o],u=t[o],n.hasOwnProperty(o)&&(s!=null||u!=null))switch(o){case"value":S=s;break;case"defaultValue":r=s;break;case"multiple":l=s;default:s!==u&&Me(e,a,o,s,n,u)}a=r,t=l,n=N,S!=null?ln(e,!!t,S,!1):!!n!=!!t&&(a!=null?ln(e,!!t,a,!0):ln(e,!!t,t?[]:"",!1));return;case"textarea":N=S=null;for(r in t)if(o=t[r],t.hasOwnProperty(r)&&o!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Me(e,a,r,null,n,o)}for(l in n)if(o=n[l],s=t[l],n.hasOwnProperty(l)&&(o!=null||s!=null))switch(l){case"value":S=o;break;case"defaultValue":N=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:o!==s&&Me(e,a,l,o,n,s)}sc(e,S,N);return;case"option":for(var K in t)S=t[K],t.hasOwnProperty(K)&&S!=null&&!n.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:Me(e,a,K,null,n,S));for(u in n)S=n[u],N=t[u],n.hasOwnProperty(u)&&S!==N&&(S!=null||N!=null)&&(u==="selected"?e.selected=S&&typeof S!="function"&&typeof S!="symbol":Me(e,a,u,S,n,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in t)S=t[ae],t.hasOwnProperty(ae)&&S!=null&&!n.hasOwnProperty(ae)&&Me(e,a,ae,null,n,S);for(z in n)if(S=n[z],N=t[z],n.hasOwnProperty(z)&&S!==N&&(S!=null||N!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,a));break;default:Me(e,a,z,S,n,N)}return;default:if(Ni(a)){for(var Ue in t)S=t[Ue],t.hasOwnProperty(Ue)&&S!==void 0&&!n.hasOwnProperty(Ue)&&pr(e,a,Ue,void 0,n,S);for(E in n)S=n[E],N=t[E],!n.hasOwnProperty(E)||S===N||S===void 0&&N===void 0||pr(e,a,E,S,n,N);return}}for(var g in t)S=t[g],t.hasOwnProperty(g)&&S!=null&&!n.hasOwnProperty(g)&&Me(e,a,g,null,n,S);for(M in n)S=n[M],N=t[M],!n.hasOwnProperty(M)||S===N||S==null&&N==null||Me(e,a,M,S,n,N)}function cp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var o=t[n],s=o.transferSize,l=o.initiatorType,r=o.duration;if(s&&r&&cp(l)){for(l=0,r=o.responseEnd,n+=1;n<t.length;n++){var u=t[n],z=u.startTime;if(z>r)break;var E=u.transferSize,M=u.initiatorType;E&&cp(M)&&(u=u.responseEnd,l+=E*(u<r?1:(r-z)/(u-z)))}if(--n,a+=8*(s+l)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mr=null,fr=null;function Ws(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function hr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gr=null;function ih(){var e=window.event;return e&&e.type==="popstate"?e===gr?!1:(gr=e,!0):(gr=null,!1)}var pp=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(e){return mp.resolve(null).then(e).catch(ch)}:pp;function ch(e){setTimeout(function(){throw e})}function qt(e){return e==="head"}function fp(e,a){var t=a,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(o),Gn(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")To(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,To(t);for(var s=t.firstChild;s;){var l=s.nextSibling,r=s.nodeName;s[Zn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=l}}else t==="body"&&To(e.ownerDocument.body);t=o}while(t);Gn(a)}function hp(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function br(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":br(t),ji(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function uh(e,a,t,n){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Zn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Oa(e.nextSibling),e===null)break}return null}function dh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Oa(e.nextSibling),e===null))return null;return e}function gp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Oa(e.nextSibling),e===null))return null;return e}function vr(e){return e.data==="$?"||e.data==="$~"}function yr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ph(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Oa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var xr=null;function bp(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Oa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function vp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function yp(e,a,t){switch(a=Ws(t),e){case"html":if(e=a.documentElement,!e)throw Error(c(452));return e;case"head":if(e=a.head,!e)throw Error(c(453));return e;case"body":if(e=a.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function To(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ji(e)}var La=new Map,xp=new Set;function $s(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var lt=D.d;D.d={f:mh,r:fh,D:hh,C:gh,L:bh,m:vh,X:xh,S:yh,M:wh};function mh(){var e=lt.f(),a=Ys();return e||a}function fh(e){var a=nn(e);a!==null&&a.tag===5&&a.type==="form"?_u(a):lt.r(e)}var Ln=typeof document>"u"?null:document;function wp(e,a,t){var n=Ln;if(n&&typeof a=="string"&&a){var o=Ea(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),xp.has(o)||(xp.add(o),e={rel:e,crossOrigin:t,href:a},n.querySelector(o)===null&&(a=n.createElement("link"),ia(a,"link",e),Pe(a),n.head.appendChild(a)))}}function hh(e){lt.D(e),wp("dns-prefetch",e,null)}function gh(e,a){lt.C(e,a),wp("preconnect",e,a)}function bh(e,a,t){lt.L(e,a,t);var n=Ln;if(n&&e&&a){var o='link[rel="preload"][as="'+Ea(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Ea(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Ea(t.imageSizes)+'"]')):o+='[href="'+Ea(e)+'"]';var s=o;switch(a){case"style":s=_n(e);break;case"script":s=Hn(e)}La.has(s)||(e=L({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),La.set(s,e),n.querySelector(o)!==null||a==="style"&&n.querySelector(Ao(s))||a==="script"&&n.querySelector(Co(s))||(a=n.createElement("link"),ia(a,"link",e),Pe(a),n.head.appendChild(a)))}}function vh(e,a){lt.m(e,a);var t=Ln;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+Ea(n)+'"][href="'+Ea(e)+'"]',s=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Hn(e)}if(!La.has(s)&&(e=L({rel:"modulepreload",href:e},a),La.set(s,e),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Co(s)))return}n=t.createElement("link"),ia(n,"link",e),Pe(n),t.head.appendChild(n)}}}function yh(e,a,t){lt.S(e,a,t);var n=Ln;if(n&&e){var o=on(n).hoistableStyles,s=_n(e);a=a||"default";var l=o.get(s);if(!l){var r={loading:0,preload:null};if(l=n.querySelector(Ao(s)))r.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":a},t),(t=La.get(s))&&wr(e,t);var u=l=n.createElement("link");Pe(u),ia(u,"link",e),u._p=new Promise(function(z,E){u.onload=z,u.onerror=E}),u.addEventListener("load",function(){r.loading|=1}),u.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Fs(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:r},o.set(s,l)}}}function xh(e,a){lt.X(e,a);var t=Ln;if(t&&e){var n=on(t).hoistableScripts,o=Hn(e),s=n.get(o);s||(s=t.querySelector(Co(o)),s||(e=L({src:e,async:!0},a),(a=La.get(o))&&jr(e,a),s=t.createElement("script"),Pe(s),ia(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function wh(e,a){lt.M(e,a);var t=Ln;if(t&&e){var n=on(t).hoistableScripts,o=Hn(e),s=n.get(o);s||(s=t.querySelector(Co(o)),s||(e=L({src:e,async:!0,type:"module"},a),(a=La.get(o))&&jr(e,a),s=t.createElement("script"),Pe(s),ia(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function jp(e,a,t,n){var o=(o=pe.current)?$s(o):null;if(!o)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=_n(t.href),t=on(o).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=_n(t.href);var s=on(o).hoistableStyles,l=s.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,l),(s=o.querySelector(Ao(e)))&&!s._p&&(l.instance=s,l.state.loading=5),La.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},La.set(e,t),s||jh(o,e,t,l.state))),a&&n===null)throw Error(c(528,""));return l}if(a&&n!==null)throw Error(c(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Hn(t),t=on(o).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _n(e){return'href="'+Ea(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function zp(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function jh(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ia(a,"link",t),Pe(a),e.head.appendChild(a))}function Hn(e){return'[src="'+Ea(e)+'"]'}function Co(e){return"script[async]"+e}function Sp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ea(t.href)+'"]');if(n)return a.instance=n,Pe(n),n;var o=L({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Pe(n),ia(n,"style",o),Fs(n,t.precedence,e),a.instance=n;case"stylesheet":o=_n(t.href);var s=e.querySelector(Ao(o));if(s)return a.state.loading|=4,a.instance=s,Pe(s),s;n=zp(t),(o=La.get(o))&&wr(n,o),s=(e.ownerDocument||e).createElement("link"),Pe(s);var l=s;return l._p=new Promise(function(r,u){l.onload=r,l.onerror=u}),ia(s,"link",n),a.state.loading|=4,Fs(s,t.precedence,e),a.instance=s;case"script":return s=Hn(t.src),(o=e.querySelector(Co(s)))?(a.instance=o,Pe(o),o):(n=t,(o=La.get(s))&&(n=L({},t),jr(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),Pe(o),ia(o,"link",n),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Fs(n,t.precedence,e));return a.instance}function Fs(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,s=o,l=0;l<n.length;l++){var r=n[l];if(r.dataset.precedence===a)s=r;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function wr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function jr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ps=null;function kp(e,a,t){if(Ps===null){var n=new Map,o=Ps=new Map;o.set(t,n)}else o=Ps,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var s=t[o];if(!(s[Zn]||s[ta]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var l=s.getAttribute(a)||"";l=e+l;var r=n.get(l);r?r.push(s):n.set(l,[s])}}return n}function Np(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function zh(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function qp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sh(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=_n(n.href),s=a.querySelector(Ao(o));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ei.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=s,Pe(s);return}s=a.ownerDocument||a,n=zp(n),(o=La.get(o))&&wr(n,o),s=s.createElement("link"),Pe(s);var l=s;l._p=new Promise(function(r,u){l.onload=r,l.onerror=u}),ia(s,"link",n),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ei.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var zr=0;function kh(e,a){return e.stylesheets&&e.count===0&&ti(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&ti(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&zr===0&&(zr=62500*sh());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ti(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>zr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function ei(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ti(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ai=null;function ti(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ai=new Map,a.forEach(Nh,e),ai=null,ei.call(e))}function Nh(e,a){if(!(a.state.loading&4)){var t=ai.get(e);if(t)var n=t.get(null);else{t=new Map,ai.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var l=o[s];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}o=a.instance,l=o.getAttribute("data-precedence"),s=t.get(l)||n,s===n&&t.set(null,o),t.set(l,o),this.count++,n=ei.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Mo={$$typeof:ee,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function qh(e,a,t,n,o,s,l,r,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.hiddenUpdates=vi(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Ep(e,a,t,n,o,s,l,r,u,z,E,M){return e=new qh(e,a,t,l,u,z,E,M,r),a=1,s===!0&&(a|=24),s=wa(3,null,null,a),e.current=s,s.stateNode=e,a=tl(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:n,isDehydrated:t,cache:a},il(s),e}function Tp(e){return e?(e=hn,e):hn}function Ap(e,a,t,n,o,s){o=Tp(o),n.context===null?n.context=o:n.pendingContext=o,n=gt(a),n.payload={element:t},s=s===void 0?null:s,s!==null&&(n.callback=s),t=bt(e,n,a),t!==null&&(ha(t,e,a),co(t,e,a))}function Cp(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Sr(e,a){Cp(e,a),(e=e.alternate)&&Cp(e,a)}function Mp(e){if(e.tag===13||e.tag===31){var a=Gt(e,67108864);a!==null&&ha(a,e,67108864),Sr(e,67108864)}}function Up(e){if(e.tag===13||e.tag===31){var a=Na();a=yi(a);var t=Gt(e,a);t!==null&&ha(t,e,a),Sr(e,a)}}var ni=!0;function Eh(e,a,t,n){var o=q.T;q.T=null;var s=D.p;try{D.p=2,kr(e,a,t,n)}finally{D.p=s,q.T=o}}function Th(e,a,t,n){var o=q.T;q.T=null;var s=D.p;try{D.p=8,kr(e,a,t,n)}finally{D.p=s,q.T=o}}function kr(e,a,t,n){if(ni){var o=Nr(n);if(o===null)dr(e,a,n,oi,t),Op(e,n);else if(Ch(o,e,a,t,n))n.stopPropagation();else if(Op(e,n),a&4&&-1<Ah.indexOf(e)){for(;o!==null;){var s=nn(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var l=Dt(s.pendingLanes);if(l!==0){var r=s;for(r.pendingLanes|=2,r.entangledLanes|=2;l;){var u=1<<31-ya(l);r.entanglements[1]|=u,l&=~u}Va(s),(Ne&6)===0&&(Bs=ba()+500,No(0))}}break;case 31:case 13:r=Gt(s,2),r!==null&&ha(r,s,2),Ys(),Sr(s,2)}if(s=Nr(n),s===null&&dr(e,a,n,oi,t),s===o)break;o=s}o!==null&&n.stopPropagation()}else dr(e,a,n,null,t)}}function Nr(e){return e=Ei(e),qr(e)}var oi=null;function qr(e){if(oi=null,e=tn(e),e!==null){var a=h(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=k(a),e!==null)return e;e=null}else if(t===31){if(e=b(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return oi=e,null}function Dp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fm()){case Yr:return 2;case Vr:return 8;case Ko:case hm:return 32;case Qr:return 268435456;default:return 32}default:return 32}}var Er=!1,Et=null,Tt=null,At=null,Uo=new Map,Do=new Map,Ct=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Op(e,a){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Uo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(a.pointerId)}}function Oo(e,a,t,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},a!==null&&(a=nn(a),a!==null&&Mp(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Ch(e,a,t,n,o){switch(a){case"focusin":return Et=Oo(Et,e,a,t,n,o),!0;case"dragenter":return Tt=Oo(Tt,e,a,t,n,o),!0;case"mouseover":return At=Oo(At,e,a,t,n,o),!0;case"pointerover":var s=o.pointerId;return Uo.set(s,Oo(Uo.get(s)||null,e,a,t,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Do.set(s,Oo(Do.get(s)||null,e,a,t,n,o)),!0}return!1}function Lp(e){var a=tn(e.target);if(a!==null){var t=h(a);if(t!==null){if(a=t.tag,a===13){if(a=k(t),a!==null){e.blockedOn=a,Wr(e.priority,function(){Up(t)});return}}else if(a===31){if(a=b(t),a!==null){e.blockedOn=a,Wr(e.priority,function(){Up(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function si(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Nr(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);qi=n,t.target.dispatchEvent(n),qi=null}else return a=nn(t),a!==null&&Mp(a),e.blockedOn=t,!1;a.shift()}return!0}function _p(e,a,t){si(e)&&t.delete(a)}function Mh(){Er=!1,Et!==null&&si(Et)&&(Et=null),Tt!==null&&si(Tt)&&(Tt=null),At!==null&&si(At)&&(At=null),Uo.forEach(_p),Do.forEach(_p)}function ii(e,a){e.blockedOn===a&&(e.blockedOn=null,Er||(Er=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Mh)))}var li=null;function Hp(e){li!==e&&(li=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){li===e&&(li=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],o=e[a+2];if(typeof n!="function"){if(qr(n||t)===null)continue;break}var s=nn(t);s!==null&&(e.splice(a,3),a-=3,Nl(s,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function Gn(e){function a(u){return ii(u,e)}Et!==null&&ii(Et,e),Tt!==null&&ii(Tt,e),At!==null&&ii(At,e),Uo.forEach(a),Do.forEach(a);for(var t=0;t<Ct.length;t++){var n=Ct[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ct.length&&(t=Ct[0],t.blockedOn===null);)Lp(t),t.blockedOn===null&&Ct.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],s=t[n+1],l=o[ca]||null;if(typeof s=="function")l||Hp(t);else if(l){var r=null;if(s&&s.hasAttribute("formAction")){if(o=s,l=s[ca]||null)r=l.formAction;else if(qr(o)!==null)continue}else r=l.action;typeof r=="function"?t[n+1]=r:(t.splice(n,3),n-=3),Hp(t)}}}function Gp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(l){return o=l})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Tr(e){this._internalRoot=e}ri.prototype.render=Tr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));var t=a.current,n=Na();Ap(t,n,e,a,null,null)},ri.prototype.unmount=Tr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Ap(e.current,2,null,e,null,null),Ys(),a[an]=null}};function ri(e){this._internalRoot=e}ri.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ir();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Ct.length&&a!==0&&a<Ct[t].priority;t++);Ct.splice(t,0,e),t===0&&Lp(e)}};var Bp=y.version;if(Bp!=="19.2.5")throw Error(c(527,Bp,"19.2.5"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(a),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var Uh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{Vn=ci.inject(Uh),va=ci}catch{}}return _o.createRoot=function(e,a){if(!p(e))throw Error(c(299));var t=!1,n="",o=Ku,s=Ju,l=Iu;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=Ep(e,1,!1,null,null,t,n,null,o,s,l,Gp),e[an]=a.current,ur(e),new Tr(a)},_o.hydrateRoot=function(e,a,t){if(!p(e))throw Error(c(299));var n=!1,o="",s=Ku,l=Ju,r=Iu,u=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(u=t.formState)),a=Ep(e,1,!0,a,t??null,n,o,u,s,l,r,Gp),a.context=Tp(null),t=a.current,n=Na(),n=yi(n),o=gt(n),o.callback=null,bt(t,o,n),t=n,a.current.lanes=t,Xn(a,t),Va(a),e[an]=a.current,ur(e),new ri(a)},_o.version="19.2.5",_o}var Wp;function Qh(){if(Wp)return Mr.exports;Wp=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(y){console.error(y)}}return d(),Mr.exports=Vh(),Mr.exports}var Xh=Qh();function Zh(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{const d="/Learn-Spanish/";navigator.serviceWorker.register(`${d}sw.js`,{scope:d}).catch(()=>{})})}const Kh="modulepreload",Jh=function(d){return"/Learn-Spanish/"+d},$p={},Ih=function(y,w,c){let p=Promise.resolve();if(w&&w.length>0){let v=function(U){return Promise.all(U.map(L=>Promise.resolve(L).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};var k=v;document.getElementsByTagName("link");const b=document.querySelector("meta[property=csp-nonce]"),x=b?.nonce||b?.getAttribute("nonce");p=v(w.map(U=>{if(U=Jh(U),U in $p)return;$p[U]=!0;const L=U.endsWith(".css"),H=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${U}"]${H}`))return;const J=document.createElement("link");if(J.rel=L?"stylesheet":Kh,L||(J.as="script"),J.crossOrigin="",J.href=U,x&&J.setAttribute("nonce",x),document.head.appendChild(J),L)return new Promise((W,Y)=>{J.addEventListener("load",W),J.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${U}`)))})}))}function h(b){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=b,window.dispatchEvent(x),!x.defaultPrevented)throw b}return p.then(b=>{for(const x of b||[])x.status==="rejected"&&h(x.reason);return y().catch(h)})};const Wh=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nm=(...d)=>d.filter((y,w,c)=>!!y&&y.trim()!==""&&c.indexOf(y)===w).join(" ").trim();var $h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Fh=G.forwardRef(({color:d="currentColor",size:y=24,strokeWidth:w=2,absoluteStrokeWidth:c,className:p="",children:h,iconNode:k,...b},x)=>G.createElement("svg",{ref:x,...$h,width:y,height:y,stroke:d,strokeWidth:c?Number(w)*24/Number(y):w,className:nm("lucide",p),...b},[...k.map(([v,U])=>G.createElement(v,U)),...Array.isArray(h)?h:[h]]));const Qe=(d,y)=>{const w=G.forwardRef(({className:c,...p},h)=>G.createElement(Fh,{ref:h,iconNode:y,className:nm(`lucide-${Wh(d)}`,c),...p}));return w.displayName=`${d}`,w};const om=Qe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Ph=Qe("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);const Rn=Qe("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const eg=Qe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Yn=Qe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const ag=Qe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Qo=Qe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const sm=Qe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Br=Qe("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const im=Qe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Vo=Qe("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const tg=Qe("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);const Xo=Qe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const ng=Qe("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);const og=Qe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const sg=Qe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);const lm=Qe("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);const ig=Qe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const pi=Qe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Lr=Qe("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const en=Qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const _r=Qe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),lg=[{title:"33 Años",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La letra gira alrededor de la nostalgia, la edad y la sensación de que media vida pasa demasiado deprisa. Los estribillos repetidos del documento están condensados.",sections:[{label:"Nostalgia",es:"El hablante mira el paso de los días entre recuerdos, amaneceres y una vida compartida con otra persona.",en:"The speaker watches the days pass through memories, dawns, and a life emotionally tied to someone else."},{label:"Edad",es:"Contrasta el deseo juvenil de parecer mayor con el deseo adulto de esconder las marcas del tiempo.",en:"It contrasts the teenage wish to seem older with the adult wish to hide the marks left by time."},{label:"Balance",es:"La canción presenta los treinta y tres años como media vida: amor pedido, amor perdido y sorpresa ante la rapidez del camino.",en:"The song presents thirty-three as half a life: love asked for, love lost, and astonishment at how fast the road has gone."}],vocab:[{es:"la nostalgia",en:"nostalgia, homesick memory"},{es:"el alba",en:"daybreak"},{es:"la arruga",en:"wrinkle"},{es:"apostar",en:"to bet, to risk"}],learningNote:"Useful pattern: quien no + verbo is a rhetorical question, close to English 'who does not...?'"},{title:"No Soy de Aquí, Ni Soy de Allá",attribution:"Facundo Cabral - 1971",level:"B1",note:"Una declaración de libertad: el yo de la canción no pertenece a un solo lugar, sino a los placeres simples y a la felicidad como identidad.",sections:[{label:"Manifiesto",es:"El hablante se define por la ligereza: caminar, mojarse con la lluvia, reírse de poco y vivir sin encerrarse en un camino seguro.",en:"The speaker defines himself through lightness: walking, getting wet in the rain, laughing with little, and refusing to be trapped by the safe road."},{label:"Gustos",es:"Enumera afectos cotidianos: el sol, las palomas, el pan casero, el vino, las flores, el mar y la voz de las personas queridas.",en:"He lists ordinary affections: the sun, doves, homemade bread, wine, flowers, the sea, and the voices of loved people."},{label:"Identidad",es:"La idea central se resume en no tener una patria fija ni un futuro cerrado: ser feliz es su verdadero color de identidad.",en:"The central idea is not having a fixed homeland or a sealed future: happiness is his true color of identity."}],vocab:[{es:"andar",en:"to wander, to go around"},{es:"el porvenir",en:"future, destiny"},{es:"basta y sobra",en:"is more than enough"},{es:"la identidad",en:"identity"}],learningNote:"Me gusta + infinitive/noun is the engine of the song. It is one of the most useful structures for personal Spanish."},{title:"Gracias a la Vida",attribution:"Violeta Parra - canción incluida en Canciones.docx",level:"B1",note:"La repetición principal aparece como una sola idea: la gratitud por lo que la vida ha dado. Cada sección desarrolla un regalo distinto.",sections:[{label:"La vista",es:"La voz agradece los ojos porque le permiten distinguir la luz de la oscuridad, mirar el cielo y reconocer a la persona amada entre la multitud.",en:"The voice gives thanks for sight because it allows her to distinguish light from darkness, see the sky, and recognize the beloved among the crowd."},{label:"El lenguaje y el oído",es:"Agradece el sonido, el alfabeto y las palabras; también el oído, capaz de guardar ruidos del mundo y la ternura de una voz amada.",en:"She gives thanks for sound, the alphabet, and words; also for hearing, which can hold the noises of the world and the tenderness of a beloved voice."},{label:"El camino y el canto",es:"Agradece los pies que la llevaron por ciudades, playas y montañas, y agradece la risa y el llanto porque de ambos nace su canto.",en:"She gives thanks for the feet that carried her through cities, beaches, and mountains, and for laughter and tears because both become the material of her song."}],vocab:[{es:"los luceros",en:"bright eyes; literally, bright stars"},{es:"distinguir",en:"to distinguish"},{es:"el quebranto",en:"sorrow, heartbreak"},{es:"la ruta",en:"route, path"}],learningNote:"Ha dado is present perfect: it connects a past gift with a present feeling of gratitude."},{title:"Abrázame",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una despedida íntima: la persona que canta sabe que el otro se irá y pide un abrazo como último lenguaje.",sections:[{label:"Súplica",es:"El hablante pide un abrazo sin explicaciones; una mirada basta para entender que la despedida está cerca.",en:"The speaker asks for an embrace without explanations; one look is enough to understand that goodbye is near."},{label:"Memoria",es:"Recuerda un amor empezado en la infancia y teme que, al irse, la otra persona borre una vida entera en un instante.",en:"He remembers a love that began in childhood and fears that, by leaving, the other person will erase a whole life in a single moment."},{label:"Pérdida",es:"La despedida se siente como quedarse sin nada: el amor fue largo, pero la separación puede ocurrir de golpe.",en:"The farewell feels like being left with nothing: the love was long, but separation can happen all at once."}],vocab:[{es:"abrázame",en:"hold me, embrace me"},{es:"bastar",en:"to be enough"},{es:"irse",en:"to leave, go away"},{es:"una eternidad",en:"an eternity"}],learningNote:"Notice si te vas: si + present can describe a possible future consequence."},{title:"Quiero Dormir Cansado",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"La canción convierte el sueño en refugio: dormir para no pensar, no llorar y esperar que el amor vuelva.",sections:[{label:"Evasión",es:"El hablante quiere dormir profundamente para dejar de pensar en la persona ausente y no despertar llorando.",en:"The speaker wants to sleep deeply so he can stop thinking about the absent person and not wake up crying."},{label:"Amor no comprendido",es:"El cansancio se vuelve deseo de dormir para siempre, porque ama a alguien que no comprende ese amor.",en:"Tiredness becomes a desire to sleep forever because he loves someone who does not understand that love."},{label:"Sueño",es:"Prefiere vivir soñando hasta que la persona regrese, se entregue a sus brazos y entienda que el amor continúa.",en:"He would rather live dreaming until the person returns, comes back into his arms, and understands that the love continues."}],vocab:[{es:"cansado",en:"tired"},{es:"profundamente",en:"deeply"},{es:"la pena",en:"sorrow, pain"},{es:"entregarse",en:"to give oneself, surrender"}],learningNote:"Quiero + infinitive is direct and powerful: quiero dormir, quiero vivir, quiero despertar."},{title:"Bésame Mucho",attribution:"Consuelo Velázquez - canción incluida en Canciones.docx",level:"A2",note:"El documento repite el coro; aquí aparece una sola vez junto con la estrofa central.",sections:[{label:"Coro",es:"La voz pide besos intensos, como si esa noche pudiera ser la última, porque teme perder a la persona amada.",en:"The voice asks for intense kisses, as if this night could be the last, because she fears losing the beloved."},{label:"Cercanía",es:"Quiere tener a la otra persona muy cerca, mirarse en sus ojos y verla junto a sí antes de una posible distancia.",en:"She wants to keep the other person very close, look into their eyes, and see them beside her before possible distance arrives."}],vocab:[{es:"besar",en:"to kiss"},{es:"la última vez",en:"the last time"},{es:"perderte",en:"to lose you"},{es:"junto a mí",en:"next to me"}],learningNote:"Como si fuera introduces an imagined situation: as if it were."},{title:"Nathalie",attribution:"Autor no indicado en Canciones.docx",level:"A2",note:"Una canción de ausencia: el recuerdo vive, pero la persona nombrada no vuelve.",sections:[{label:"Recuerdo",es:"La voz habla a Nathalie desde la distancia; su recuerdo permanece vivo aunque ella ya no esté cerca.",en:"The voice speaks to Nathalie from a distance; her memory remains alive even though she is no longer near."},{label:"Preguntas",es:"El hablante pregunta dónde está, quién la cuidará y quién la esperará, porque su vida perdió calma y esperanza.",en:"The speaker asks where she is, who will care for her, and who will wait for her, because his life has lost calm and hope."},{label:"Dolor",es:"La canción insiste en una duda dolorosa: quizá a ella ya no le importa que él siga sufriendo.",en:"The song returns to a painful doubt: perhaps she no longer cares that he is still suffering."}],vocab:[{es:"la distancia",en:"distance"},{es:"el recuerdo",en:"memory"},{es:"el amanecer",en:"dawn"},{es:"sufrir",en:"to suffer"}],learningNote:"Qué será de ti is a compact emotional question: what will become of you?"},{title:"Con La Misma Piedra",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"Una canción sobre repetir el mismo error amoroso. Las repeticiones del estribillo están condensadas.",sections:[{label:"Caída",es:"El hablante se enamora de pronto, sin medir sus pasos, y cae en una relación que lo hace perder el control.",en:"The speaker falls in love suddenly, without measuring his steps, and falls into a relationship that makes him lose control."},{label:"Engaño",es:"Reconoce que para la otra persona fue solo una diversión, mientras él quedó atrapado por el encanto y por sus propios sentimientos.",en:"He realizes that for the other person he was only a diversion, while he was trapped by charm and by his own feelings."},{label:"Mismo error",es:"La imagen central es tropezar otra vez con la misma piedra: en el amor, entrega demasiado y termina llorando.",en:"The central image is stumbling again over the same stone: in love, he gives too much and ends up crying."}],vocab:[{es:"tropezar",en:"to stumble"},{es:"la piedra",en:"stone"},{es:"embrujar",en:"to bewitch"},{es:"la trampa",en:"trap"}],learningNote:"Tropecé is preterite: a completed fall or mistake in the past."},{title:"Hey",attribution:"Autor no indicado en Canciones.docx",level:"B1",note:"La canción es una conversación directa con alguien orgulloso. Los bloques repetidos de ya ves aparecen una sola vez.",sections:[{label:"Orgullo",es:"El hablante rechaza que la otra persona presuma ante los demás y diga que él no puede vivir sin ella.",en:"The speaker rejects the other person's boasting to others and saying that he cannot live without her."},{label:"Amor desigual",es:"Acepta que amó más, que ella no lo quiso del mismo modo, y que a veces amar es más verdadero que ser amado sin sentir.",en:"He accepts that he loved more, that she did not love him the same way, and that sometimes loving is truer than being loved without feeling."},{label:"Final sin rencor",es:"Cuando todo termina, se reconoce perdedor, pero no guarda rencor: para él, fue más feliz quien más amó.",en:"When everything ends, he admits he lost, but he keeps no resentment: for him, the happier one was the one who loved more."}],vocab:[{es:"presumir",en:"to show off, boast"},{es:"burlarse de",en:"to mock, make fun of"},{es:"el orgullo",en:"pride"},{es:"el rencor",en:"resentment"}],learningNote:"No creas que... is a useful way to push back: do not think that..."}],rg=["A1","A2","B1","B2"],cg={tiempos:sm,verbos:_r,verbos2:_r,gramatica:ng,lectura:tg,vocabulario:Ph,palabras:im,frases:sg,tips:Xo,resumen:Br};function rm({id:d,size:y=18,className:w=""}){const c=cg[d]||om;return i.jsx(c,{size:y,className:w})}const Ho=[{id:"tiempos",label:"Tiempos",sublabel:"Los cinco tiempos",chapters:[{id:"tiempos",level:"A2",title:"Los Cinco Tiempos",subtitle:"Cinco modos de habitar el tiempo",intro:"Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.",blocks:[{type:"lesson-section",heading:"Presente — la ventana abierta",paragraphs:["The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.",'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.']},{type:"lesson-section",heading:"When to use Presente",text:'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',examples:[{es:"Trabajo en un banco.",en:"I work at a bank. (habit)"},{es:"El sol sale por el este.",en:"The sun rises in the east. (universal truth)"},{es:"Estudio para mi examen.",en:"I am studying for my exam. (right now)"},{es:"Mañana voy a Madrid.",en:"Tomorrow I am going to Madrid. (near future)"},{es:"Quiero un café, por favor.",en:"I would like a coffee, please. (ordering)"},{es:"Si llueve, no salimos.",en:"If it rains, we do not go out. (hypothetical)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{o}","com{o}","viv{o}"],["tú","habl{as}","com{es}","viv{es}"],["él/ella/Ud.","habl{a}","com{e}","viv{e}"],["nosotros","habl{amos}","com{emos}","viv{imos}"],["vosotros","habl{áis}","com{éis}","viv{ís}"],["ellos/Uds.","habl{an}","com{en}","viv{en}"]]}},{type:"tip",text:'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.'},{type:"lesson-section",heading:"Pretérito — la puerta cerrada",paragraphs:["If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.",'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.']},{type:"lesson-section",heading:"When to use Pretérito",text:"Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.",examples:[{es:"Ayer hablé con mi padre.",en:"Yesterday I spoke with my father."},{es:"En 2018 viví en Marruecos.",en:"In 2018 I lived in Morocco."},{es:"Empezó a llover a las cinco.",en:"It started to rain at five. (a beginning)"},{es:"La película terminó muy tarde.",en:"The movie ended very late. (an ending)"},{es:"Llegué, vi, vencí.",en:"I came, I saw, I conquered. (sequence)"}]},{type:"lesson-section",heading:"How to form it — regular endings",text:"Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{é}","com{í}","viv{í}"],["tú","habl{aste}","com{iste}","viv{iste}"],["él/ella/Ud.","habl{ó}","com{ió}","viv{ió}"],["nosotros","habl{amos}","com{imos}","viv{imos}"],["vosotros","habl{asteis}","com{isteis}","viv{isteis}"],["ellos/Uds.","habl{aron}","com{ieron}","viv{ieron}"]]}},{type:"tip",text:'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.'},{type:"lesson-section",heading:"Imperfecto — la película en bucle",paragraphs:["Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.",'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.']},{type:"lesson-section",heading:"When to use Imperfecto",text:'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',examples:[{es:"De niño jugaba al fútbol.",en:"As a child I used to play soccer. (past habit)"},{es:"La casa era grande y blanca.",en:"The house was big and white. (description)"},{es:"Tenía diez años entonces.",en:"I was ten years old then. (age in the past)"},{es:"Eran las tres de la tarde.",en:"It was three in the afternoon. (time in the past)"},{es:"Llovía cuando salí de casa.",en:"It was raining when I left home. (background + foreground)"}]},{type:"lesson-section",heading:"How to form it — only two endings",text:"The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.",table:{headers:["Persona","hablar (-ar)","comer (-er)","vivir (-ir)"],rows:[["yo","habl{aba}","com{ía}","viv{ía}"],["tú","habl{abas}","com{ías}","viv{ías}"],["él/ella/Ud.","habl{aba}","com{ía}","viv{ía}"],["nosotros","habl{ábamos}","com{íamos}","viv{íamos}"],["vosotros","habl{abais}","com{íais}","viv{íais}"],["ellos/Uds.","habl{aban}","com{ían}","viv{ían}"]]}},{type:"tip",text:'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.'},{type:"lesson-section",heading:'Condicional — el mapa de los "si"',paragraphs:["Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.",'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.']},{type:"lesson-section",heading:"When to use Condicional",text:"Hypothetical actions, polite requests, suggestions, and probability about the past.",examples:[{es:"Si fuera rico, viajaría más.",en:"If I were rich, I would travel more. (hypothetical)"},{es:"¿Podrías ayudarme?",en:"Could you help me? (polite request)"},{es:"Yo en tu lugar no diría nada.",en:"In your place, I would not say anything. (suggestion)"},{es:"Serían las diez cuando llegó.",en:"It must have been around ten when he arrived. (probability about the past)"},{es:"Me gustaría un café, por favor.",en:"I would like a coffee, please. (polite wish)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{ía}","comer{ía}","vivir{ía}"],["tú","hablar{ías}","comer{ías}","vivir{ías}"],["él/ella/Ud.","hablar{ía}","comer{ía}","vivir{ía}"],["nosotros","hablar{íamos}","comer{íamos}","vivir{íamos}"],["vosotros","hablar{íais}","comer{íais}","vivir{íais}"],["ellos/Uds.","hablar{ían}","comer{ían}","vivir{ían}"]]}},{type:"tip",text:'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.'},{type:"lesson-section",heading:"Futuro — la promesa al horizonte",paragraphs:['Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."','In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.']},{type:"lesson-section",heading:"When to use Futuro",text:"Future plans (formal), predictions, promises, and probability about the present.",examples:[{es:"Mañana hablaré con él.",en:"Tomorrow I will speak with him. (future plan)"},{es:"Te llamaré cuando llegue.",en:"I will call you when I arrive. (promise)"},{es:"¿Dónde estará Juan?",en:"Where could Juan be? (probability about the present)"},{es:"Tendrás hambre, ¿no?",en:"You must be hungry, right? (probability about the present)"},{es:"Algún día seré abogado.",en:"Someday I will be a lawyer. (prediction)"}]},{type:"lesson-section",heading:"How to form it — endings on the infinitive",text:"Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.",table:{headers:["Persona","hablar","comer","vivir"],rows:[["yo","hablar{é}","comer{é}","vivir{é}"],["tú","hablar{ás}","comer{ás}","vivir{ás}"],["él/ella/Ud.","hablar{á}","comer{á}","vivir{á}"],["nosotros","hablar{emos}","comer{emos}","vivir{emos}"],["vosotros","hablar{éis}","comer{éis}","vivir{éis}"],["ellos/Uds.","hablar{án}","comer{án}","vivir{án}"]]}},{type:"lesson-section",heading:"The 12 irregular Futuro stems",text:"Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.",table:{headers:["Verbo","Stem","Ejemplo (yo)"],rows:[["decir","dir-","dir{é}"],["hacer","har-","har{é}"],["poder","podr-","podr{é}"],["poner","pondr-","pondr{é}"],["querer","querr-","querr{é}"],["saber","sabr-","sabr{é}"],["salir","saldr-","saldr{é}"],["tener","tendr-","tendr{é}"],["valer","valdr-","valdr{é}"],["venir","vendr-","vendr{é}"],["caber","cabr-","cabr{é}"],["haber","habr-","habr{é}"]]}},{type:"lesson-section",heading:"Las cinco habitaciones — un resumen",text:"A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.",table:{headers:["Tiempo","Metáfora","En una palabra"],rows:[["Presente","la ventana abierta","now / always / habitual"],["Pretérito","la puerta cerrada","completed in the past"],["Imperfecto","la película en bucle","ongoing / habitual past"],["Condicional",'el mapa de los "si"',"would / could / polite"],["Futuro","la promesa al horizonte","will / probably is"]]}},{type:"takeaway",text:"You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear."}]}]},{id:"verbos",label:"Verbos",sublabel:"Top 10",chapters:[{id:"haber",level:"A2",title:"Haber",subtitle:'auxiliar — "to have"',rank:1,blocks:[{type:"verb-table",participles:{present:"habiendo",past:"habido"},tenseGroups:[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]],tenses:[{name:"Presente",forms:[{p:"yo",f:"[he]"},{p:"tú",f:"[has]"},{p:"él/ella/Ud.",f:"[ha]"},{p:"nosotros",f:"[hemos]"},{p:"vosotros",f:"habéis"},{p:"ellos/Uds.",f:"[han]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hub]e"},{p:"tú",f:"[hub]iste"},{p:"él/ella/Ud.",f:"[hub]o"},{p:"nosotros",f:"[hub]imos"},{p:"vosotros",f:"[hub]isteis"},{p:"ellos/Uds.",f:"[hub]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"había"},{p:"tú",f:"habías"},{p:"él/ella/Ud.",f:"había"},{p:"nosotros",f:"habíamos"},{p:"vosotros",f:"habíais"},{p:"ellos/Uds.",f:"habían"}]},{name:"Condicional",forms:[{p:"yo",f:"[habr]ía"},{p:"tú",f:"[habr]ías"},{p:"él/ella/Ud.",f:"[habr]ía"},{p:"nosotros",f:"[habr]íamos"},{p:"vosotros",f:"[habr]íais"},{p:"ellos/Uds.",f:"[habr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[habr]é"},{p:"tú",f:"[habr]ás"},{p:"él/ella/Ud.",f:"[habr]á"},{p:"nosotros",f:"[habr]emos"},{p:"vosotros",f:"[habr]éis"},{p:"ellos/Uds.",f:"[habr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"usado en tiempos compuestos",senses:[{n:"1",meaning:"to have",examples:[{es:"Nunca habían ido a Costa Rica antes del verano pasado.",en:"They had never been to Costa Rica before last summer."}]}]},{label:"Verbo modal",note:'con la preposición "de" — expresa obligación',senses:[{n:"2a",meaning:"to have to",examples:[{es:"He de ir al trabajo el sábado.",en:"I have to go into work on Saturday."}]},{n:"2b",meaning:"must",examples:[{es:"Has de hacer tu tarea esta noche.",en:"You must do your homework tonight."}]}]},{label:"Verbo impersonal",note:"forma fija — hay, había, hubo, habrá",senses:[{n:"3",meaning:'to be (used with "there")',subnote:"expresa existencia",examples:[{es:"No hay azúcar.",en:"There is no sugar."},{es:"No hubo tiempo para saludar a todos en la fiesta.",en:"There wasn't enough time to say hi to everyone at the party."}]},{n:"4a",meaning:"must",subnote:'con "que" — obligación general',examples:[{es:"Hay que lavar todos los platos después de cenar.",en:"We must wash all the dishes after dinner."}]},{n:"4b",meaning:"should",subnote:'con "que" — recomendación',examples:[{es:"Hay que hacer reservaciones para el hotel.",en:"We should make reservations for the hotel."}]},{n:"5",meaning:"— sin traducción directa",subnote:"usado para expresar tiempo",examples:[{es:"No sé si habrá tiempo para comer algo.",en:"I don't know if there will be enough time to eat something."},{es:"Tiempo ha del terremoto.",en:"The earthquake occurred a long time ago."}]}]},{label:"Verbo transitivo",note:"uso literario o formal",senses:[{n:"6",meaning:"to bear",examples:[{es:"Los hijos habidos de la aventura no fueron reconocidos por su padre.",en:"The children borne of the affair were not recognized by their father."}]},{n:"7",meaning:"— suceder, ocurrir",subnote:"sin traducción directa",examples:[{es:"El espectáculo habido esta semana está completamente vendido.",en:"This week's performance is totally sold out."},{es:"El accidente habido ayer resultó en dos fatalidades.",en:"Yesterday's accident resulted in two fatalities."}]}]},{label:"Sustantivo masculino",note:"el haber",senses:[{n:"8",meaning:"asset",subnote:"patrimonio, propiedades",examples:[{es:"Su haber consistía en la empresa familiar y dos mansiones.",en:"Her assets consist of the family business and two mansions."}]},{n:"9",meaning:"credit side",subnote:"contabilidad",examples:[{es:"El total del deber y del haber tienen que ser iguales.",en:"The debit and credit side totals must be equal."}]},{n:"10",meaning:"credit",subnote:"logro, mérito",examples:[{es:"Tiene tres artículos publicados a su haber.",en:"She has three published articles to her credit."}]}]},{label:"Sustantivo plural",note:"los haberes",senses:[{n:"11",meaning:"earnings",subnote:"pago, retribución",examples:[{es:"Todavía no me han pagado los haberes del mes pasado.",en:"I still haven't been paid last month's earnings."}]}]},{label:"Verbo pronominal",note:"haberse",senses:[{n:"12",meaning:"to have it out with somebody",subnote:"enfrentarse",examples:[{es:"Se las va a haber con su hermano si no paran de discutir.",en:"He's going to have it out with his brother if they don't stop arguing."}]}]}]}]},{id:"ser",level:"A1",title:"Ser",subtitle:"to be — essence, identity",rank:2,blocks:[{type:"verb-table",participles:{present:"siendo",past:"sido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[soy]"},{p:"tú",f:"[eres]"},{p:"él/ella/Ud.",f:"[es]"},{p:"nosotros",f:"[somos]"},{p:"vosotros",f:"[sois]"},{p:"ellos/Uds.",f:"[son]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[er]a"},{p:"tú",f:"[er]as"},{p:"él/ella/Ud.",f:"[er]a"},{p:"nosotros",f:"[ér]amos"},{p:"vosotros",f:"[er]ais"},{p:"ellos/Uds.",f:"[er]an"}]},{name:"Condicional",forms:[{p:"yo",f:"sería"},{p:"tú",f:"serías"},{p:"él/ella/Ud.",f:"sería"},{p:"nosotros",f:"seríamos"},{p:"vosotros",f:"seríais"},{p:"ellos/Uds.",f:"serían"}]},{name:"Futuro",forms:[{p:"yo",f:"seré"},{p:"tú",f:"serás"},{p:"él/ella/Ud.",f:"será"},{p:"nosotros",f:"seremos"},{p:"vosotros",f:"seréis"},{p:"ellos/Uds.",f:"serán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Define identidad, profesión, características",senses:[{n:"1",meaning:"to be",examples:[{es:"Es alto y rubio.",en:"He’s tall and blond."},{es:"Mi abuela es profesora.",en:"My grandma is a teacher."}]}]},{label:"Verbo intransitivo",senses:[{n:"2",meaning:"to be",subnote:"usado para indicar origen",examples:[{es:"Soy de Nueva York.",en:"I’m from New York."}]},{n:"3",meaning:"to be",subnote:"para servir como",examples:[{es:"El lápiz es para escribir, no para lanzar.",en:"Pencils are for writing, not for throwing."}]},{n:"4",meaning:"to be",subnote:"usado al hablar de precios",examples:[{es:"¿Cuánto es el total? — Son diez dólares.",en:"How much does it come to? — It’s ten dollars."}]},{n:"5",meaning:"to be made of",subnote:"usado para indicar composición",examples:[{es:"El casillero antiguo de mi abuela es de roble.",en:"My grandma’s antique dresser is made of oak."}]},{n:"6",meaning:"to be (belong to)",subnote:"usado para indicar posesión",examples:[{es:"Este reloj es de mi madre.",en:"This watch is my mother’s."}]},{n:"7",meaning:"to be (take place)",examples:[{es:"La fiesta será en mi casa.",en:"The party will be at my place."}]},{n:"8",meaning:"to root for",subnote:'asociación — usado con "de"',examples:[{es:"Yo soy del mejor equipo del mundo: FC Barcelona.",en:"I root for the best team in the world: FC Barcelona."}]}]},{label:"Verbo impersonal",note:"Forma fija — usado para expresar el tiempo",senses:[{n:"9",meaning:"to be",examples:[{es:"Son las siete de la mañana.",en:"It is seven in the morning."},{es:"Era de noche cuando llegaron.",en:"It was night when they arrived."}]}]},{label:"Verbo auxiliar",note:"Forma la voz pasiva",senses:[{n:"10",meaning:"to be",examples:[{es:"El edificio fue diseñado por un equipo de arquitectos.",en:"The building was designed by a team of architects."}]}]},{label:"Sustantivo masculino",note:"el ser",senses:[{n:"11",meaning:"being",subnote:"entidad",examples:[{es:"Hay un ser vivo en el lago, pero no sé qué es.",en:"There’s a living being in the lake, but I don’t know what it is."}]},{n:"12",meaning:"person",subnote:"humano",examples:[{es:"Su papá es un ser muy agradable.",en:"Her dad is a very nice person."}]}]}]}]},{id:"estar",level:"A1",title:"Estar",subtitle:"to be — state, location",rank:3,blocks:[{type:"verb-table",participles:{present:"estando",past:"estado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"est[oy]"},{p:"tú",f:"est[ás]"},{p:"él/ella/Ud.",f:"est[á]"},{p:"nosotros",f:"estamos"},{p:"vosotros",f:"estáis"},{p:"ellos/Uds.",f:"est[án]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[estuv]e"},{p:"tú",f:"[estuv]iste"},{p:"él/ella/Ud.",f:"[estuv]o"},{p:"nosotros",f:"[estuv]imos"},{p:"vosotros",f:"[estuv]isteis"},{p:"ellos/Uds.",f:"[estuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"estaba"},{p:"tú",f:"estabas"},{p:"él/ella/Ud.",f:"estaba"},{p:"nosotros",f:"estábamos"},{p:"vosotros",f:"estabais"},{p:"ellos/Uds.",f:"estaban"}]},{name:"Condicional",forms:[{p:"yo",f:"estaría"},{p:"tú",f:"estarías"},{p:"él/ella/Ud.",f:"estaría"},{p:"nosotros",f:"estaríamos"},{p:"vosotros",f:"estaríais"},{p:"ellos/Uds.",f:"estarían"}]},{name:"Futuro",forms:[{p:"yo",f:"estaré"},{p:"tú",f:"estarás"},{p:"él/ella/Ud.",f:"estará"},{p:"nosotros",f:"estaremos"},{p:"vosotros",f:"estaréis"},{p:"ellos/Uds.",f:"estarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo copulativo",note:"Describe estado, cualidad o emoción",senses:[{n:"1",meaning:"to be",subnote:"usado para expresar una cualidad",examples:[{es:"Este pastel de chocolate está delicioso.",en:"This chocolate cake is delicious."},{es:"Este hotel está muy concurrido.",en:"This hotel is very popular."}]},{n:"1b",meaning:"to look",examples:[{es:"Estás muy guapa hoy. ¿Adónde vas?",en:"You look very nice today. Where are you going?"}]},{n:"2",meaning:"to be",subnote:"usado para expresar una emoción o estado",examples:[{es:"Estoy enojada porque me acaban de dar una multa de estacionamiento.",en:"I am angry because I just got a parking ticket."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to be",subnote:"para indicar ubicación",examples:[{es:"La casa está delante de la iglesia.",en:"The house is in front of the church."}]},{n:"4",meaning:"to be (present)",examples:[{es:"No está en casa.",en:"He’s not home."}]},{n:"5a",meaning:"to be on (vacation, trip, call)",subnote:'usado con "de"',examples:[{es:"Estaremos de vacaciones en Europa el verano entero.",en:"We’re going to be on vacation in Europe all summer long."}]},{n:"5b",meaning:"to be in (luck)",examples:[{es:"¡Estás de suerte! Me queda un par en ese color.",en:"You’re in luck! I have one pair left in that color."}]},{n:"5c",meaning:"to be working as",examples:[{es:"Está de recepcionista hasta que consiga un mejor trabajo.",en:"He’s working as a receptionist until he finds something better."}]},{n:"6",meaning:"to be (feel)",examples:[{es:"Está triste ahora que no tiene novia.",en:"He is sad now that he doesn’t have a girlfriend."}]},{n:"7",meaning:"to look (appear)",examples:[{es:"¡Estás genial con las gafas nuevas!",en:"You look great with your new glasses!"}]},{n:"8",meaning:"to stay (visit)",examples:[{es:"Gabriel está con su padre esta noche.",en:"Gabriel is staying with his father tonight."}]},{n:"9",meaning:"to be ready",subnote:"estar terminado",examples:[{es:"La comida ya está. ¡Comamos!",en:"The food is ready. Let’s eat!"}]},{n:"10",meaning:"to be (exist)",examples:[{es:"Luego está el trabajo que queda por hacer.",en:"Then there is the work that still needs to be done."}]},{n:"11",meaning:"to be in the mood for",subnote:'usado con "para"',examples:[{es:"No estoy para tus estupideces a estas horas.",en:"I am not in the mood for your nonsense at this time of night."}]},{n:"12",meaning:"to have (illness)",subnote:'usado con "con"',examples:[{es:"Está con gripe desde el lunes.",en:"He’s had the flu since Monday."}]},{n:"13",meaning:"to be (fit, look)",examples:[{es:"¿Esta falda queda bien o está muy apretada?",en:"Does this skirt look good or is it too tight?"}]},{n:"14",meaning:"¿está? ¿estamos?",subnote:"forma de pregunta — ¿entendido?",examples:[{es:"No quiero que camines sola por la noche, ¿está?",en:"I don’t want you walking alone at night, understood?"},{es:"Nos encontraremos a las siete para ir al cine, ¿estamos?",en:"We’ll meet at seven to go to the movie, all right?"}]},{n:"15",meaning:"to be in favor of",subnote:'usado con "por"',examples:[{es:"Los estudiantes están por un aumento en ayuda financiera de parte de la universidad.",en:"The students are in favor of the university providing more financial aid."}]},{n:"16",meaning:"to agree with",subnote:'usado con "con"',examples:[{es:"Estoy con Ana Sofía; no quiero escuchar más peleas entre ustedes.",en:"I agree with Ana Sofía. I don’t want to hear any more fighting between the two of you."}]},{n:"17",meaning:"to be (temperature)",subnote:'usado con "a"',examples:[{es:"¡El termómetro dice que está a 25 grados Fahrenheit pero que se siente como 6!",en:"The thermometer says it’s 25 degrees Fahrenheit out but that it feels like 6!"}]},{n:"18",meaning:"to be (date)",subnote:'usado con "a"',examples:[{es:"Estamos a martes, 5 de enero.",en:"It is Tuesday, January 5th."}]},{n:"19",meaning:"to be (season)",subnote:'usado con "en"',examples:[{es:"Mientras el hemisferio norte está en invierno, el hemisferio sur está en verano.",en:"While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer."}]},{n:"20",meaning:"to be (distance)",subnote:'usado con "a"',examples:[{es:"El banco está a tres cuadras de la plaza central.",en:"The bank is three blocks from the town square."}]},{n:"21",meaning:"to remain to be",subnote:'usado con "por" + infinitivo',examples:[{es:"Está por verse si lloverá en la tarde.",en:"It remains to be seen whether it will rain this afternoon."}]},{n:"22",meaning:"to be going to",subnote:'inminencia — "por" + infinitivo',examples:[{es:"Las nubes en la distancia indican que estará por llover esta noche.",en:"The clouds in the distance indicate that it is going to rain tonight."}]},{n:"23",meaning:"still to be done",subnote:'usado con "sin" + infinitivo',examples:[{es:"Tengo tres libros que están sin terminar.",en:"I have three books that I still have to finish reading."},{es:"Estoy sin comer desde temprano esta mañana.",en:"I haven’t eaten anything since early this morning."}]}]},{label:"Verbo auxiliar",senses:[{n:"24",meaning:"to be (-ing)",subnote:"usado con gerundio",examples:[{es:"Está limpiando la casa.",en:"He’s cleaning the house."}]},{n:"25",meaning:"to be (done)",subnote:"usado con participio",examples:[{es:"El cuarto está organizado, ¡así que no hagas desorden!",en:"The room is organized. Don’t make a mess!"}]}]},{label:"Verbo reflexivo",note:"estarse",senses:[{n:"26a",meaning:"to stay (remain)",examples:[{es:"Estate quieto y no digas ni una palabra.",en:"Stay still and don’t say a word."}]},{n:"26b",meaning:"to be (still)",examples:[{es:"¿No puedes estarte quieta ni un minuto?",en:"Can’t you be still for just a minute?"}]},{n:"26c",meaning:"to keep",examples:[{es:"Diles a los niños que se estén callados un rato, que quiero escuchar las noticias.",en:"Tell the kids to keep quiet a minute; I want to listen to the news."}]},{n:"26d",meaning:"to be (set phrases)",subnote:"estate tranquilo, estate atento",examples:[{es:"Estate tranquilo; yo lo soluciono.",en:"Don’t worry; I’ll sort it out."},{es:"Estate atento porque solo llaman el número una vez.",en:"Pay attention because they only call out the number once."}]}]}]}]},{id:"hacer",level:"A2",title:"Hacer",subtitle:"to do, to make",rank:4,blocks:[{type:"verb-table",participles:{present:"haciendo",past:"[hecho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ha[go]"},{p:"tú",f:"haces"},{p:"él/ella/Ud.",f:"hace"},{p:"nosotros",f:"hacemos"},{p:"vosotros",f:"hacéis"},{p:"ellos/Uds.",f:"hacen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[hic]e"},{p:"tú",f:"[hic]iste"},{p:"él/ella/Ud.",f:"[hiz]o"},{p:"nosotros",f:"[hic]imos"},{p:"vosotros",f:"[hic]isteis"},{p:"ellos/Uds.",f:"[hic]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"hacía"},{p:"tú",f:"hacías"},{p:"él/ella/Ud.",f:"hacía"},{p:"nosotros",f:"hacíamos"},{p:"vosotros",f:"hacíais"},{p:"ellos/Uds.",f:"hacían"}]},{name:"Condicional",forms:[{p:"yo",f:"[har]ía"},{p:"tú",f:"[har]ías"},{p:"él/ella/Ud.",f:"[har]ía"},{p:"nosotros",f:"[har]íamos"},{p:"vosotros",f:"[har]íais"},{p:"ellos/Uds.",f:"[har]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[har]é"},{p:"tú",f:"[har]ás"},{p:"él/ella/Ud.",f:"[har]á"},{p:"nosotros",f:"[har]emos"},{p:"vosotros",f:"[har]éis"},{p:"ellos/Uds.",f:"[har]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Acción, creación, transformación",senses:[{n:"1",meaning:"to do",examples:[{es:"Haz los deberes.",en:"Do your homework."}]},{n:"2a",meaning:"to make",subnote:"producir",examples:[{es:"Hice la comida de mis hijos.",en:"I made my children’s lunch."}]},{n:"2b",meaning:"to prepare",examples:[{es:"Nos reuniremos este fin de semana para hacer la presentación.",en:"We will meet this weekend to prepare the presentation."}]},{n:"3",meaning:"to make (create)",examples:[{es:"Hoy les enseñaré a hacer su propio sitio web.",en:"Today I’ll show you how to make your own website."}]},{n:"4",meaning:"to make (carry out)",examples:[{es:"Estoy ocupado haciendo los preparativos para la fiesta.",en:"I’m busy making preparations for the party."}]},{n:"5",meaning:"to do (substituting another verb)",examples:[{es:"Me mandó que lavara los platos pero ya lo había hecho.",en:"He told me to wash the dishes but I had already done it."}]},{n:"6",meaning:"to make (acquire)",examples:[{es:"Hizo una nueva amiga en el colegio.",en:"He made a new friend at school."}]},{n:"7",meaning:"to make (cause)",examples:[{es:"La hizo llorar.",en:"He made her cry."}]},{n:"8",meaning:"to think (imagine)",examples:[{es:"Hacía la casa sola.",en:"I thought there was nobody at home."}]},{n:"9",meaning:"to make (transform)",examples:[{es:"El dolor hizo mi vida miserable.",en:"The pain made my life a misery."}]},{n:"10",meaning:"to do (obey)",examples:[{es:"Haz lo que te digo.",en:"Do as I say."}]},{n:"11",meaning:"to make look",examples:[{es:"Ese peinado te hace más vieja.",en:"That hairstyle makes you look older."}]},{n:"12",meaning:"to act (behave)",examples:[{es:"¡No hagas el mono en el colegio!",en:"Don’t act the fool at school!"}]},{n:"13a",meaning:"to make (gross)",examples:[{es:"Se dice que el doctor hace hasta seis cifras.",en:"They say the doctor makes at least six figures."}]},{n:"13b",meaning:"to earn",examples:[{es:"Mi hermanito hizo una fortuna vendiendo limonada.",en:"My little brother earned a fortune selling lemonade."}]},{n:"14",meaning:"to take (time)",examples:[{es:"Les hizo dos semanas manejar a California.",en:"It took them two weeks to drive to California."}]},{n:"15a",meaning:"to do (cover distance)",examples:[{es:"Hicimos 150 millas en el último viaje.",en:"We did 150 miles on the last vacation."}]},{n:"15b",meaning:"to cover",examples:[{es:"Podemos hacer más distancia si salimos de noche.",en:"We can cover more distance if we leave at night."}]}]},{label:"Verbo impersonal",note:"Forma fija — tiempo cronológico y meteorológico",senses:[{n:"16",meaning:"it has been",subnote:"tiempo transcurrido",examples:[{es:"Hace mucho tiempo que no te veo.",en:"It has been a long time since I’ve seen you."}]},{n:"17",meaning:"to be (weather)",examples:[{es:"En invierno hace frío.",en:"It’s cold in winter."}]}]},{label:"Verbo reflexivo",note:"hacerse — para uno mismo",senses:[{n:"18",meaning:"to make oneself",subnote:"crear para uno mismo",examples:[{es:"Se hizo un vestido de seda.",en:"She made herself a silk dress."}]},{n:"19",meaning:"to make oneself",subnote:"cocinar para uno mismo",examples:[{es:"Creo que voy a hacerme un puré de zanahorias esta noche.",en:"I think I’m going to make myself some carrot soup tonight."}]}]},{label:"Verbo pronominal",note:"hacerse",senses:[{n:"20a",meaning:"to pretend",subnote:"fingir",examples:[{es:"No te hagas el santo; tú también te equivocas.",en:"Don’t pretend to be a saint; you make mistakes, too."}]},{n:"20b",meaning:"to act",examples:[{es:"No te hagas el tonto conmigo.",en:"Don’t act the fool with me."}]},{n:"21",meaning:"to become",subnote:"transformarse",examples:[{es:"Su sueño era hacerse dentista.",en:"His dream was to become a dentist."}]},{n:"22",meaning:"to have something done",subnote:"usado con infinitivo",examples:[{es:"Ya va siendo hora de que se haga cortar el pelo.",en:"It’s about time he had his hair cut."},{es:"Vamos a hacernos pintar la casa después del verano.",en:"We’re going to have the house painted after the summer."}]},{n:"23",meaning:"to manage to",subnote:"hacerse ver / oír",examples:[{es:"Daniela solo ayuda en clase para hacerse ver.",en:"Daniela only helps out in class to get noticed."},{es:"Deberíamos darle una oportunidad para hacerse oír.",en:"We should give him a chance to be heard."}]},{n:"24",meaning:"to get used to",subnote:'usado con "a"',examples:[{es:"Pues no soy capaz de hacerme a la idea.",en:"Well, I can’t get used to the idea."}]}]},{label:"Verbo de percepción",note:"hacerse — para expresar cómo se percibe algo",senses:[{n:"25a",meaning:"to feel (seem)",examples:[{es:"Hoy se me hizo muy largo esperando los resultados de la prueba.",en:"Today felt really long waiting for my test results."}]},{n:"25b",meaning:"to find / to seem",examples:[{es:"El curso se me está haciendo aburrido.",en:"I’m finding the course boring."},{es:"La película se me hizo interminable.",en:"The movie seemed interminable."}]}]}]}]},{id:"ir",level:"A1",title:"Ir",subtitle:"to go",rank:5,blocks:[{type:"verb-table",participles:{present:"[yendo]",past:"ido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[voy]"},{p:"tú",f:"[vas]"},{p:"él/ella/Ud.",f:"[va]"},{p:"nosotros",f:"[vamos]"},{p:"vosotros",f:"[vais]"},{p:"ellos/Uds.",f:"[van]"}]},{name:"Pretérito",forms:[{p:"yo",f:"[fu]i"},{p:"tú",f:"[fu]iste"},{p:"él/ella/Ud.",f:"[fu]e"},{p:"nosotros",f:"[fu]imos"},{p:"vosotros",f:"[fu]isteis"},{p:"ellos/Uds.",f:"[fu]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"[iba]"},{p:"tú",f:"[ibas]"},{p:"él/ella/Ud.",f:"[iba]"},{p:"nosotros",f:"[íbamos]"},{p:"vosotros",f:"[ibais]"},{p:"ellos/Uds.",f:"[iban]"}]},{name:"Condicional",forms:[{p:"yo",f:"iría"},{p:"tú",f:"irías"},{p:"él/ella/Ud.",f:"iría"},{p:"nosotros",f:"iríamos"},{p:"vosotros",f:"iríais"},{p:"ellos/Uds.",f:"irían"}]},{name:"Futuro",forms:[{p:"yo",f:"iré"},{p:"tú",f:"irás"},{p:"él/ella/Ud.",f:"irá"},{p:"nosotros",f:"iremos"},{p:"vosotros",f:"iréis"},{p:"ellos/Uds.",f:"irán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",note:"Movimiento, dirección, estado",senses:[{n:"1",meaning:"to go",subnote:"usado para indicar movimiento",examples:[{es:"Ayer Ana y yo fuimos al cine.",en:"Yesterday, Ana and I went to the movies."}]},{n:"2",meaning:"to go",subnote:"usado para hablar de direcciones",examples:[{es:"Por aquí no se va a la estación.",en:"This is not the way to go to the station."}]},{n:"3",meaning:"to be (visit, stay)",examples:[{es:"¿Has ido alguna vez a Chile?",en:"Have you ever been to Chile?"}]},{n:"4",meaning:"to go (progress)",examples:[{es:"¿Cómo te van los estudios?",en:"How’s college going?"}]},{n:"5",meaning:"to go (place)",examples:[{es:"Los platos van en el armario.",en:"Dishes go in the cupboard."}]},{n:"6",meaning:"to go (range of time)",examples:[{es:"El festival va del primero de abril hasta el primero de mayo.",en:"The festival goes from April first to May first."}]},{n:"7a",meaning:"to wear (have on)",examples:[{es:"Iba con botas amarillas.",en:"She wore yellow boots."}]},{n:"7b",meaning:"to be dressed in (color)",examples:[{es:"Iba de verde por el día de San Patricio.",en:"She was dressed in green for St. Patrick’s Day."}]},{n:"8a",meaning:"to work (function)",examples:[{es:"El portátil va bien.",en:"The laptop works well."}]},{n:"8b",meaning:"to run",examples:[{es:"Mi carro ha ido sin problema durante años.",en:"My car has run without an issue for years."}]},{n:"9",meaning:"to be on (process)",subnote:'usado con "por"',examples:[{es:'Voy por la página 50 de "San Manuel Bueno, mártir".',en:'I’m on page 50 of "San Manuel Bueno, Martyr."'}]},{n:"10",meaning:"to study to be",subnote:'usado con "para" — España',examples:[{es:"Mi primo va para cocinero.",en:"My cousin is studying to be a cook."}]},{n:"11",meaning:"to go (attend)",examples:[{es:"Mi hermana va a la primaria al lado de la estación de bomberos.",en:"My sister goes to the elementary school next to the firestation."}]},{n:"12",meaning:"to look (appear)",examples:[{es:"¡Vas muy guapa! Me encanta tu vestido.",en:"You look gorgeous! I love your dress."}]},{n:"13",meaning:"to go with (match)",examples:[{es:"Esa camisa roja no le va a ese pantalón amarillo.",en:"That red shirt doesn’t go with those yellow pants."}]}]},{label:"Verbo auxiliar",note:"Construye tiempos perifásticos",senses:[{n:"14",meaning:"to go (going to)",subnote:"futuro — ir + a + infinitivo",examples:[{es:"¡Papá va a cocinar una cena espectacular!",en:"Dad is going to cook a wonderful dinner!"}]},{n:"15",meaning:"to be (-ing)",subnote:"progresivo — ir + gerundio",examples:[{es:"Voy planificando la fiesta.",en:"I am planning the party."}]}]},{label:"Verbo pronominal",note:"irse",senses:[{n:"16a",meaning:"to leave",examples:[{es:"El alumno se fue de la biblioteca muy tarde.",en:"The student left the library very late."}]},{n:"16b",meaning:"to go",examples:[{es:"¡Vámonos! El camión nos va a dejar.",en:"Let’s go! The bus is going to leave us behind."}]},{n:"17",meaning:"to leak / to escape",examples:[{es:"A la piscina se le fue todo el agua.",en:"All the water leaked from the pool."},{es:"A la llanta se le fue el aire.",en:"The tire went flat."}]},{n:"18",meaning:"to die (pass away)",examples:[{es:"Se nos fue muy joven.",en:"He died too young."}]},{n:"19",meaning:"to go away (take away)",examples:[{es:"Con esta pastilla se te irá el dolor.",en:"This pill will make the pain go away."}]},{n:"20",meaning:"to forget (not remember)",examples:[{es:"¿Cómo se llama ese hombre? Lo sabía, pero se me fue.",en:"What’s that man’s name? I knew it, but I forgot."}]}]}]}]},{id:"tener",level:"A1",title:"Tener",subtitle:"to have, to possess",rank:6,blocks:[{type:"verb-table",participles:{present:"teniendo",past:"tenido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"ten[go]"},{p:"tú",f:"t[ie]nes"},{p:"él/ella/Ud.",f:"t[ie]ne"},{p:"nosotros",f:"tenemos"},{p:"vosotros",f:"tenéis"},{p:"ellos/Uds.",f:"t[ie]nen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[tuv]e"},{p:"tú",f:"[tuv]iste"},{p:"él/ella/Ud.",f:"[tuv]o"},{p:"nosotros",f:"[tuv]imos"},{p:"vosotros",f:"[tuv]isteis"},{p:"ellos/Uds.",f:"[tuv]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"tenía"},{p:"tú",f:"tenías"},{p:"él/ella/Ud.",f:"tenía"},{p:"nosotros",f:"teníamos"},{p:"vosotros",f:"teníais"},{p:"ellos/Uds.",f:"tenían"}]},{name:"Condicional",forms:[{p:"yo",f:"[tendr]ía"},{p:"tú",f:"[tendr]ías"},{p:"él/ella/Ud.",f:"[tendr]ía"},{p:"nosotros",f:"[tendr]íamos"},{p:"vosotros",f:"[tendr]íais"},{p:"ellos/Uds.",f:"[tendr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[tendr]é"},{p:"tú",f:"[tendr]ás"},{p:"él/ella/Ud.",f:"[tendr]á"},{p:"nosotros",f:"[tendr]emos"},{p:"vosotros",f:"[tendr]éis"},{p:"ellos/Uds.",f:"[tendr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Posesión, características, estados físicos",senses:[{n:"1a",meaning:"to have",subnote:"poseer",examples:[{es:"Tengo tres coches.",en:"I have three cars."}]},{n:"1b",meaning:"to have got",examples:[{es:"Mary tiene una casa en el campo.",en:"Mary’s got a house in the country."}]},{n:"2a",meaning:"to have",subnote:"llevar consigo",examples:[{es:"¿Tienes efectivo?",en:"Do you have cash?"}]},{n:"2b",meaning:"to have got",examples:[{es:"¿Tienen sus pasaportes?",en:"Have you got your passports?"}]},{n:"3a",meaning:"to have",subnote:"características físicas",examples:[{es:"Tiene los ojos verdes.",en:"She has green eyes."}]},{n:"3b",meaning:"to have got",examples:[{es:"Susana tiene el cabello oscuro.",en:"Susana’s got dark hair."}]},{n:"4a",meaning:"to have (wear)",examples:[{es:"La chica que busco tiene lentes de sol y una bufanda.",en:"The girl I’m looking for has sunglasses and a scarf."}]},{n:"4b",meaning:"to have on",examples:[{es:"¿Por qué tiene zapatos tu perro?",en:"Why does your dog have shoes on?"}]},{n:"5",meaning:"to be (age)",examples:[{es:"Mi hermana tiene 33 años.",en:"My sister is 33 years old."}]},{n:"6a",meaning:"to have (planned)",examples:[{es:"El lunes tengo una cita con el dentista.",en:"I have a dentist appointment on Monday."}]},{n:"6b",meaning:"to have got",examples:[{es:"Mañana tenemos junta en la tarde.",en:"We’ve got a meeting tomorrow afternoon."}]},{n:"7",meaning:"to be (feel)",examples:[{es:"Si tienes frío, ponte un abrigo.",en:"If you are cold, put on a coat."}]},{n:"8",meaning:"to have (be ill with)",examples:[{es:"Mi hijo tiene sarampión.",en:"My child has measles."}]},{n:"9a",meaning:"to hold",examples:[{es:"Ten la bandeja.",en:"Hold the tray."}]},{n:"9b",meaning:"to take",examples:[{es:"Ten esta caja, por favor.",en:"Take this box, please."}]},{n:"9c",meaning:"here is / here are",subnote:"al entregar",examples:[{es:"Tengan sus boletos.",en:"Here are your tickets."},{es:"Ten tu bolsa.",en:"Here is your bag."}]},{n:"10",meaning:"to be (measure)",examples:[{es:"Esta maleta tiene 20 centímetros de ancho.",en:"This suitcase is 20 centimeters wide."}]},{n:"11",meaning:"to have (give birth to)",examples:[{es:"Mi perra tuvo seis cachorros.",en:"My dog had six puppies."}]},{n:"12",meaning:"to have (receive)",examples:[{es:"Todavía no tuve el correo electrónico de confirmación de la empresa.",en:"I haven’t had a confirmation email from the company yet."}]},{n:"13",meaning:"to have (state)",subnote:"con participio",examples:[{es:"Tenía la casa recogida cuando llegué.",en:"He had the house cleaned up by the time I arrived."}]},{n:"14",meaning:"to have (possibility)",examples:[{es:"Realmente no tiene solución este problema.",en:"This problem really has no solution."}]},{n:"15",meaning:"to consider (think of)",examples:[{es:"Siempre tuve a Rodolfo por honesto.",en:"I’ve always considered Rodolfo to be honest."}]},{n:"16",meaning:"duration",subnote:"Latinoamérica",examples:[{es:"Tengo dos años sin verlo.",en:"I haven’t seen him for two years."},{es:"Mis abuelos tienen 40 años de casados.",en:"My grandparents have been married for 40 years."}]}]},{label:"Verbo auxiliar",note:"Obligación, suposición, reproche",senses:[{n:"17a",meaning:"to have to",subnote:'obligación — con "que"',examples:[{es:"Tengo que terminar mis deberes antes de salir a la fiesta.",en:"I have to finish my homework before going to the party."}]},{n:"17b",meaning:"must",examples:[{es:"Tienes que comer todo en tu plato si quieres postre.",en:"You must eat everything on your plate if you want dessert."}]},{n:"18",meaning:"must (suposition)",subnote:'con "que"',examples:[{es:"¡Tienes que tener calor con tanta ropa puesta!",en:"You must be hot with so many clothes on!"}]},{n:"19",meaning:"should (reproach)",subnote:'con "que"',examples:[{es:"Tenías que haberme marcado antes de salir.",en:"You should have called me before leaving."}]},{n:"20",meaning:"before past participle",subnote:"tener pensado / entendido",examples:[{es:"Tengo pensado ir al mercado mañana.",en:"I think I’ll go to the market tomorrow."},{es:"Tenemos entendido que piensas dejar la escuela.",en:"We understand that you’re thinking of leaving school."}]},{n:"21",meaning:"to make (before adjective)",examples:[{es:"La noticia sobre el huracán me tiene muy nervioso.",en:"The news about the hurricane is making me nervous."}]}]},{label:"Verbo reflexivo",note:"tenerse",senses:[{n:"22a",meaning:"to stand (remain upright)",examples:[{es:"Este adorno no se tiene sin apoyarlo contra algo.",en:"This ornament won’t stand without leaning it on something."}]},{n:"22b",meaning:"can barely stand",examples:[{es:"Estaba tan mareado que no me tenía de pie.",en:"I was so dizzy that I couldn’t stand up."},{es:"No me tengo de sueño.",en:"I’m so tired I can barely stand."}]},{n:"23a",meaning:"to consider oneself",examples:[{es:"Miguel se tiene por muy listo.",en:"Miguel considers himself really clever."}]},{n:"23b",meaning:"to think one is",examples:[{es:"Este muchacho se tiene por muy guapo.",en:"That kid thinks he’s so attractive."},{es:"¿Por quién se tiene tu prima?",en:"Who does your cousin think she is?"}]}]}]}]},{id:"decir",level:"A2",title:"Decir",subtitle:"to say, to tell",rank:7,blocks:[{type:"verb-table",participles:{present:"d[i]ciendo",past:"[dicho]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[ig]o"},{p:"tú",f:"d[i]ces"},{p:"él/ella/Ud.",f:"d[i]ce"},{p:"nosotros",f:"decimos"},{p:"vosotros",f:"decís"},{p:"ellos/Uds.",f:"d[i]cen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[dij]e"},{p:"tú",f:"[dij]iste"},{p:"él/ella/Ud.",f:"[dij]o"},{p:"nosotros",f:"[dij]imos"},{p:"vosotros",f:"[dij]isteis"},{p:"ellos/Uds.",f:"[dij]eron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"decía"},{p:"tú",f:"decías"},{p:"él/ella/Ud.",f:"decía"},{p:"nosotros",f:"decíamos"},{p:"vosotros",f:"decíais"},{p:"ellos/Uds.",f:"decían"}]},{name:"Condicional",forms:[{p:"yo",f:"[dir]ía"},{p:"tú",f:"[dir]ías"},{p:"él/ella/Ud.",f:"[dir]ía"},{p:"nosotros",f:"[dir]íamos"},{p:"vosotros",f:"[dir]íais"},{p:"ellos/Uds.",f:"[dir]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[dir]é"},{p:"tú",f:"[dir]ás"},{p:"él/ella/Ud.",f:"[dir]á"},{p:"nosotros",f:"[dir]emos"},{p:"vosotros",f:"[dir]éis"},{p:"ellos/Uds.",f:"[dir]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Habla, opinión, narración",senses:[{n:"1a",meaning:"to say",examples:[{es:"¿Qué dijiste? No te escuché.",en:"What did you say? I couldn’t hear you."}]},{n:"1b",meaning:"to tell",examples:[{es:"¿Jura decir la verdad?",en:"Do you swear to tell the truth?"}]},{n:"2a",meaning:"to say (give an opinion)",examples:[{es:"¿Qué dices de la nueva ley de transporte?",en:"What do you say about the new law on transportation?"}]},{n:"2b",meaning:"to think",examples:[{es:"¿Y qué dices tú del asunto?",en:"What do you think about the whole issue?"}]},{n:"2c",meaning:"to believe",examples:[{es:"¿Quién hubiera dicho que Juliana y Gustavo acabarían juntos?",en:"Who would have believed that Juliana and Gustavo would end up together?"}]},{n:"3",meaning:"to say (be rumored)",examples:[{es:"Dicen que va a nevar mañana.",en:"They say it’s going to snow tomorrow."}]},{n:"4a",meaning:"to tell (transmit orders)",examples:[{es:"Dile a tu hermano que haga sus tareas.",en:"Tell your brother to do his homework."}]},{n:"4b",meaning:"to say",examples:[{es:"Mamá dijo que nos teníamos que acostar.",en:"Mom said we had to go to sleep."}]},{n:"5",meaning:"to recite (narrate)",examples:[{es:"Ahora voy a decir un poema nuevo que escribí sobre el amor perdido.",en:"Now I will recite a poem I wrote about lost love."}]},{n:"6",meaning:"to tell (signify)",examples:[{es:"El que no le interese planear la boda me dice que Jorge no está listo para casarse.",en:"The fact that he’s not interested in planning the wedding tells me Jorge’s not ready to get married."}]},{n:"7",meaning:"to say (in text)",examples:[{es:"La Biblia dice que uno debe amar al prójimo.",en:"The Bible says we should love our neighbor."}]},{n:"8",meaning:"to say (mass)",subnote:"religioso",examples:[{es:"Después de decir la homilía, el sacerdote reparte la comunión.",en:"After the priest says the homily, he hands out Communion."}]},{n:"9",meaning:"go ahead (invite to speak)",examples:[{es:"¿Le puedo pedir un favor? — ¡Claro! Dime, ¿en qué lo puedo ayudar?",en:"Can I ask a favor of you? — Of course! Go ahead, how can I help you?"}]}]},{label:"Verbo intransitivo",senses:[{n:"10",meaning:"hello (on the phone)",subnote:"interjección — España",examples:[{es:"¿Diga?",en:"Hello!"}]}]},{label:"Sustantivo masculino",note:"el decir",senses:[{n:"11",meaning:"saying (proverb)",examples:[{es:'"De tal palo, tal astilla" es un decir popular.',en:'"Like father, like son" is a popular saying.'}]},{n:"12",meaning:"manner of speaking",examples:[{es:"¡No te enfades, mujer! Es solo un decir.",en:"Come on, don’t get annoyed! It’s just a manner of speaking."}]}]},{label:"Verbo reflexivo",note:"decirse — expresar a uno mismo",senses:[{n:"13a",meaning:"to tell oneself",examples:[{es:"Me dije que no volvería a empezar a fumar.",en:"I told myself that I wouldn’t start smoking again."}]},{n:"13b",meaning:"to say to oneself",examples:[{es:"Me dije a mí misma, esto no parece estar bien.",en:"I said to myself, this doesn’t feel right."}]},{n:"13c",meaning:"to think to oneself",examples:[{es:"Me sigo diciendo, ¿qué hubiera pasado si hubiera aceptado ese trabajo?",en:"I keep thinking to myself, what would have happened had I taken that job?"}]}]}]}]},{id:"poder",level:"A2",title:"Poder",subtitle:"to be able to, can",rank:8,blocks:[{type:"verb-table",participles:{present:"p[u]diendo",past:"podido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"p[ue]do"},{p:"tú",f:"p[ue]des"},{p:"él/ella/Ud.",f:"p[ue]de"},{p:"nosotros",f:"podemos"},{p:"vosotros",f:"podéis"},{p:"ellos/Uds.",f:"p[ue]den"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pud]e"},{p:"tú",f:"[pud]iste"},{p:"él/ella/Ud.",f:"[pud]o"},{p:"nosotros",f:"[pud]imos"},{p:"vosotros",f:"[pud]isteis"},{p:"ellos/Uds.",f:"[pud]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"podía"},{p:"tú",f:"podías"},{p:"él/ella/Ud.",f:"podía"},{p:"nosotros",f:"podíamos"},{p:"vosotros",f:"podíais"},{p:"ellos/Uds.",f:"podían"}]},{name:"Condicional",forms:[{p:"yo",f:"[podr]ía"},{p:"tú",f:"[podr]ías"},{p:"él/ella/Ud.",f:"[podr]ía"},{p:"nosotros",f:"[podr]íamos"},{p:"vosotros",f:"[podr]íais"},{p:"ellos/Uds.",f:"[podr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[podr]é"},{p:"tú",f:"[podr]ás"},{p:"él/ella/Ud.",f:"[podr]á"},{p:"nosotros",f:"[podr]emos"},{p:"vosotros",f:"[podr]éis"},{p:"ellos/Uds.",f:"[podr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",note:"Capacidad, permiso, posibilidad",senses:[{n:"1a",meaning:"can (capability)",examples:[{es:"Mi novia puede bailar salsa.",en:"My girlfriend can dance the salsa."}]},{n:"1b",meaning:"to be able to",examples:[{es:"Necesito mis gafas para poder ver.",en:"I need my glasses to be able to see."}]},{n:"2a",meaning:"can (request)",examples:[{es:"¿Me puedes pasar ese lápiz?",en:"Can you pass me that pencil?"},{es:"¿Podría ver un menú, por favor?",en:"Could I see a menu, please?"}]},{n:"2b",meaning:"may (permission)",examples:[{es:"¿Puedo usar el baño?",en:"May I use the bathroom?"}]},{n:"2c",meaning:"to be allowed to",examples:[{es:"¿Podemos traer alcohol al concierto?",en:"Are we allowed to bring alcohol to the concert?"}]},{n:"3a",meaning:"may (possibility)",examples:[{es:"Puede que Aurora haya pensado que nos encontraríamos en el cine.",en:"Aurora may have thought we were going to meet at the movies."}]},{n:"3b",meaning:"can (general possibility)",examples:[{es:"No se puede fumar en la sala.",en:"You cannot smoke inside the theater."}]},{n:"4",meaning:"can (moral obligation)",examples:[{es:"No podemos rechazar a los refugiados de la guerra.",en:"We cannot turn away war refugees."}]},{n:"5a",meaning:"can (in reproaches)",examples:[{es:"¿Cómo podrías decirme cosas tan crueles?",en:"How could you say such cruel things to me?"}]},{n:"5b",meaning:"might",examples:[{es:"Podrías haberme dicho que tu hermana se quedaría con nosotros.",en:"You might have told me your sister was going to stay with us."}]},{n:"6a",meaning:"can (suggestions)",examples:[{es:"No sé si comer una sopa o un sándwich. — Podrías pedir el combo que trae mitad de un sándwich y una sopa.",en:"I don’t know if I should have soup or a sandwich. — You could get the half-sandwich and soup combo."}]},{n:"6b",meaning:"may (suggestions)",examples:[{es:"Podrías llamar de nuevo al hotel a ver si tienen tu bufanda.",en:"You may want to call the hotel again to see if they found your scarf."}]}]},{label:"Verbo intransitivo",senses:[{n:"7a",meaning:"to stand (tolerate)",subnote:'usado con "con"',examples:[{es:"No puedo más con mi jefe.",en:"I can’t stand my boss."}]},{n:"7b",meaning:"to put up with",examples:[{es:"No puedo más contigo. Me estás volviendo loca.",en:"I can’t put up with you any longer. You’re driving me crazy."}]},{n:"8",meaning:"to manage",subnote:'capacidad — con "con"',examples:[{es:"Él no puede con tanto trabajo.",en:"He can’t manage so much work."}]},{n:"9",meaning:"to upset (hurt)",subnote:"México",examples:[{es:"Me pudo mucho lo que me dijiste.",en:"What you said really upset me."}]}]},{label:"Verbo impersonal",note:"Forma fija — puede que",senses:[{n:"10",meaning:"may (possibility)",examples:[{es:"Puede que no venga a la fiesta.",en:"He may not come to the party."}]}]},{label:"Sustantivo masculino",note:"el poder",senses:[{n:"11",meaning:"power (ability)",examples:[{es:"Mi hermanita cree que tiene poderes mágicos.",en:"My little sister thinks she has magic powers."}]},{n:"12a",meaning:"power (control)",examples:[{es:"Él tiene todo el poder en esa relación.",en:"He has all the power in that relationship."}]},{n:"12b",meaning:"influence",examples:[{es:"Ella es la que tiene todo el poder, así que mejor habla con ella.",en:"She’s the one with all the influence, so you’d better talk to her."}]},{n:"13",meaning:"power (political)",examples:[{es:"El poder del presidente incluye vetar cualquier legislación pasada por el Congreso.",en:"Among the president’s powers is the ability to veto any legislation passed by Congress."}]},{n:"14",meaning:"possession (in someone’s care)",examples:[{es:"Tengo en mi poder un certificado que prueba la autenticidad de la pintura.",en:"I have in my possession a letter that proves the painting’s authenticity."}]},{n:"15",meaning:"power (mechanical)",examples:[{es:"¿Cuánto poder tiene el motor de este carro?",en:"How much power does this car’s engine have?"}]}]},{label:"Verbo transitivo",note:"coloquial — derrotar",senses:[{n:"16a",meaning:"to beat",examples:[{es:"¡Vamos! ¡Tú le puedes!",en:"Come on! You can beat him!"}]},{n:"16b",meaning:"to be stronger than",examples:[{es:"El forzudo retó a cualquiera a ver si le pueden.",en:"The strongman challenged anyone to prove they’re stronger than him."}]}]},{label:"Sustantivo plural",note:"los poderes — autoridad legal",senses:[{n:"17a",meaning:"powers",examples:[{es:"A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.",en:"After the death of his father, all the business’ powers were passed to Daniel."}]},{n:"17b",meaning:"authority",examples:[{es:"El comité no tiene los poderes para confirmar el nombramiento.",en:"The committee doesn’t have the authority to confirm the appointment."}]}]}]}]},{id:"dar",level:"A1",title:"Dar",subtitle:"to give",rank:9,blocks:[{type:"verb-table",participles:{present:"dando",past:"dado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"d[oy]"},{p:"tú",f:"das"},{p:"él/ella/Ud.",f:"da"},{p:"nosotros",f:"damos"},{p:"vosotros",f:"dais"},{p:"ellos/Uds.",f:"dan"}]},{name:"Pretérito",forms:[{p:"yo",f:"[di]"},{p:"tú",f:"[diste]"},{p:"él/ella/Ud.",f:"[dio]"},{p:"nosotros",f:"[dimos]"},{p:"vosotros",f:"[disteis]"},{p:"ellos/Uds.",f:"[dieron]"}]},{name:"Imperfecto",forms:[{p:"yo",f:"daba"},{p:"tú",f:"dabas"},{p:"él/ella/Ud.",f:"daba"},{p:"nosotros",f:"dábamos"},{p:"vosotros",f:"dabais"},{p:"ellos/Uds.",f:"daban"}]},{name:"Condicional",forms:[{p:"yo",f:"daría"},{p:"tú",f:"darías"},{p:"él/ella/Ud.",f:"daría"},{p:"nosotros",f:"daríamos"},{p:"vosotros",f:"daríais"},{p:"ellos/Uds.",f:"darían"}]},{name:"Futuro",forms:[{p:"yo",f:"daré"},{p:"tú",f:"darás"},{p:"él/ella/Ud.",f:"dará"},{p:"nosotros",f:"daremos"},{p:"vosotros",f:"daréis"},{p:"ellos/Uds.",f:"darán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Entregar, generar, celebrar, enseñar",senses:[{n:"1a",meaning:"to give (hand over)",examples:[{es:"Dame las llaves.",en:"Give me the keys."}]},{n:"1b",meaning:"can I have / I’ll take",subnote:"al pedir en una tienda",examples:[{es:"¿Me das una libra de queso y dos libras de jamón?",en:"Can I have one pound of cheese and two pounds of ham?"},{es:"¿Cuántos tomates quiere? — Deme dos kilos, por favor.",en:"How many tomatoes do you want? — I’ll take two kilos, please."}]},{n:"2a",meaning:"to give (generate)",examples:[{es:"Necesito que me des una idea para el tema de la fiesta.",en:"I need you to give me a good idea for the party’s theme."}]},{n:"2b",meaning:"to yield",examples:[{es:"Este tratamiento da buenos resultados.",en:"This treatment yields good results."}]},{n:"2c",meaning:"to produce",examples:[{es:"Este manzano da más manzanas de las que podríamos comer.",en:"This apple tree produces more apples than we can possibly eat."}]},{n:"2d",meaning:"to bear (fruit)",examples:[{es:"Los perales dan peras.",en:"Pear trees bear pears."}]},{n:"3a",meaning:"to hold (celebrate)",examples:[{es:"Esta es la lista de los eventos que se dieron este mes.",en:"This is the list of events held this month."}]},{n:"3b",meaning:"to have (a party)",examples:[{es:"Mi compañía da una fiesta de Navidad todos los años.",en:"My company has a Christmas party every year."}]},{n:"3c",meaning:"to throw (a party)",examples:[{es:"Le dieron una fiesta sorpresa para celebrar su graduación.",en:"They threw him a surprise party to celebrate his graduation."}]},{n:"4",meaning:"to teach (educate)",examples:[{es:"No dan mi asignatura favorita en la escuela.",en:"My favorite subject is not taught in school."}]},{n:"5",meaning:"to give (a coat)",subnote:"aplicar barniz, pintura",examples:[{es:"Le voy a dar otra capa de barniz a esta mesa.",en:"I’m going to give this table another coat of varnish."},{es:"Esta pared necesita que le des otra pasada de pintura.",en:"This wall needs another coat of paint."}]},{n:"6",meaning:"to award (grant)",examples:[{es:"Me dieron una beca para ir a la universidad.",en:"I was awarded a scholarship to go to university."}]},{n:"7",meaning:"to give (a flavor)",examples:[{es:"La hoja de laurel le da un sabor único a la sopa.",en:"Bay leaf gives a unique taste to the soup."}]},{n:"8a",meaning:"to say (thanks, greetings)",examples:[{es:"Sra. García, le quiero dar las gracias por una cena magnífica.",en:"Mrs. García, I just want to say thank you for a wonderful dinner."}]},{n:"8b",meaning:"to give (thanks)",examples:[{es:"El Día de Acción de Gracias es un día para dar las gracias por todo lo que tenemos.",en:"Thanksgiving Day is a day to give thanks for all that we have."}]},{n:"9",meaning:"to take (an action)",examples:[{es:"¿Quieres dar un paseo por el río?",en:"Would you like to take a walk by the river?"}]},{n:"10",meaning:"to deal (cards)",examples:[{es:"¿Quién va a dar esta ronda?",en:"Who’s going to deal this round?"}]},{n:"11",meaning:"to show (film, TV)",examples:[{es:"El cine independiente está dando un maratón de películas clásicas.",en:"The independent movie theater is showing a classic film marathon."}]},{n:"12",meaning:"to strike (clock)",examples:[{es:"El reloj dio las doce de la noche y Cenicienta huyó del palacio.",en:"The clock struck midnight and Cinderella fled the palace."}]},{n:"13",meaning:"to make (feel)",examples:[{es:"No puedo tomar café caliente en este clima; me da demasiado calor.",en:"I can’t drink hot coffee in this weather; it makes me too hot."},{es:"Me da miedo quedarme sola en la casa.",en:"I get scared staying at home alone."}]},{n:"14",meaning:"to consider",subnote:'usado con "por"',examples:[{es:"Necesito que termines el proyecto. — Dalo por hecho.",en:"I need you to finish the project. — Consider it done."}]},{n:"15",meaning:"to ruin (spoil)",subnote:"coloquial — España",examples:[{es:"Me dio la película al decirme el final.",en:"He ruined the movie for me when he spoiled the ending."}]}]},{label:"Verbo intransitivo",note:"Sucesos, orientación, golpes",senses:[{n:"16a",meaning:"to feel (sudden)",examples:[{es:"Me dieron ganas de vomitar cuando vi el insecto en mi comida.",en:"I felt like throwing up when I saw the bug in my food."}]},{n:"16b",meaning:"to have (a stroke, etc.)",examples:[{es:"Al papá de Gabriela le dio un derrame cerebral.",en:"Gabriela’s father had a stroke."}]},{n:"17",meaning:"me da igual / lo mismo",subnote:"no importar",examples:[{es:"¿Quieres ir a la playa o a la piscina? — Me da lo mismo.",en:"Do you want to go to the beach or to the pool? — It’s all the same to me."},{es:"Me da igual si comemos pasta o pescado esta noche.",en:"It doesn’t matter to me whether we have pasta or fish tonight."}]},{n:"18a",meaning:"to overlook",examples:[{es:"El balcón del hotel da hacia el mar.",en:"The hotel balcony overlooks the ocean."}]},{n:"18b",meaning:"to face",examples:[{es:"Mi apartamento da hacia el sur.",en:"My apartment faces south."}]},{n:"18c",meaning:"to look onto",examples:[{es:"El restaurante da al parque.",en:"The restaurant looks onto the park."}]},{n:"19",meaning:"to press (activate)",examples:[{es:"Da al botón para prender la computadora.",en:"Press the button to turn on the computer."}]},{n:"20a",meaning:"to hit (strike)",examples:[{es:"El boxeador le dio en la cara a su oponente y ganó la pelea.",en:"The boxer hit his opponent in the face and won the fight."}]},{n:"20b",meaning:"to kick (a ball)",examples:[{es:"Trató de darle a la bola pero falló.",en:"She tried to kick the ball but missed."}]},{n:"21a",meaning:"to find (discover)",subnote:"dar con",examples:[{es:"Después de años de investigación, por fin dio con la solución.",en:"After years of research, she finally found the solution."}]},{n:"21b",meaning:"to hit upon",examples:[{es:"Hasta el día de hoy, nadie ha dado con la respuesta al acertijo.",en:"So far, no one has hit upon the answer to the riddle."}]},{n:"21c",meaning:"to come up with",examples:[{es:"El equipo aún no ha dado con una solución al problema.",en:"The team still hasn’t come up with a solution to the problem."}]},{n:"22",meaning:"to take to (be inclined)",examples:[{es:"Desde que supo que consiguió el trabajo, le ha dado con ir de compras todo el tiempo.",en:"Ever since he found out that he got the job, he’s taken to nonstop shopping."},{es:"Me ha dado con tomarme una copa de vino con la cena.",en:"I’ve started having a glass of wine with my dinner."}]},{n:"23",meaning:"to be enough",subnote:'usado con "para"',examples:[{es:"No sé si esta pizza dará para todos.",en:"I’m not sure if this pizza will be enough for everyone."}]},{n:"24",meaning:"to give (motivate)",examples:[{es:"Los sucesos de hoy me dieron qué pensar.",en:"Today’s events have given me something to think about."}]},{n:"25",meaning:"to hit (shine)",examples:[{es:"De este ángulo el sol me da en los ojos y no puedo ver.",en:"From this angle, the sun hits my eyes and I can’t see."}]},{n:"26",meaning:"to deal (cards — intransitive)",examples:[{es:"Ya el repartido dio, así que te toca jugar.",en:"The dealer already dealt so it’s your turn to play."}]}]},{label:"Verbo pronominal",note:"darse",senses:[{n:"27",meaning:"to grow (thrive)",examples:[{es:"Esta variedad de lechuga se da en cualquier sitio.",en:"This lettuce variety can grow anywhere."}]},{n:"28a",meaning:"to hit (oneself)",subnote:'usado con "con"',examples:[{es:"Me di en el codo con la mesa y ahora está dormido.",en:"I hit my elbow on the table and now it’s numb."}]},{n:"28b",meaning:"to crash",examples:[{es:"Por estar texteando mientras conducía, se dio con la pared del túnel.",en:"He crashed into the tunnel wall because he was texting while driving."}]},{n:"28c",meaning:"to bump",examples:[{es:"Prende la luz, que no me quiero dar con la esquina de la cama.",en:"Turn on the light; I don’t want to bump into the corner of the bed."}]},{n:"29a",meaning:"to happen (occur)",examples:[{es:"Una luna de sangre no se da muy a menudo.",en:"A blood moon doesn’t happen that often."}]},{n:"29b",meaning:"to present itself",examples:[{es:"Una oportunidad así no se da muy a menudo.",en:"Such an opportunity does not present itself very often."}]},{n:"30",meaning:"to take to (start)",subnote:'usado con "a"',examples:[{es:"Estoy preocupado porque Javier se ha dado a fumar demasiado.",en:"I’m worried because Javier has taken to smoking too much."}]}]},{label:"Verbo reflexivo",note:"Hacerse daño, rendirse",senses:[{n:"31",meaning:"to hit oneself",examples:[{es:"¿Dónde te diste?",en:"Where did you hit yourself?"}]},{n:"32",meaning:"to give up (surrender)",subnote:"México",examples:[{es:"Vas a perder, ¿te das?",en:"You are going to lose. Do you give up?"}]}]}]}]},{id:"ver",level:"A1",title:"Ver",subtitle:"to see",rank:10,blocks:[{type:"verb-table",participles:{present:"viendo",past:"[visto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"v[eo]"},{p:"tú",f:"ves"},{p:"él/ella/Ud.",f:"ve"},{p:"nosotros",f:"vemos"},{p:"vosotros",f:"veis"},{p:"ellos/Uds.",f:"ven"}]},{name:"Pretérito",forms:[{p:"yo",f:"vi"},{p:"tú",f:"viste"},{p:"él/ella/Ud.",f:"vio"},{p:"nosotros",f:"vimos"},{p:"vosotros",f:"visteis"},{p:"ellos/Uds.",f:"vieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"v[e]ía"},{p:"tú",f:"v[e]ías"},{p:"él/ella/Ud.",f:"v[e]ía"},{p:"nosotros",f:"v[e]íamos"},{p:"vosotros",f:"v[e]íais"},{p:"ellos/Uds.",f:"v[e]ían"}]},{name:"Condicional",forms:[{p:"yo",f:"vería"},{p:"tú",f:"verías"},{p:"él/ella/Ud.",f:"vería"},{p:"nosotros",f:"veríamos"},{p:"vosotros",f:"veríais"},{p:"ellos/Uds.",f:"verían"}]},{name:"Futuro",forms:[{p:"yo",f:"veré"},{p:"tú",f:"verás"},{p:"él/ella/Ud.",f:"verá"},{p:"nosotros",f:"veremos"},{p:"vosotros",f:"veréis"},{p:"ellos/Uds.",f:"verán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",note:"Percibir, observar, comprender",senses:[{n:"1",meaning:"to see",examples:[{es:"¿Quieres ver mi carro nuevo?",en:"Do you want to see my new car?"}]},{n:"2a",meaning:"to watch",examples:[{es:"Se sentaron en el sofá a ver su programa de televisión favorito.",en:"They sat on the sofa to watch their favorite television program."}]},{n:"2b",meaning:"to look at",examples:[{es:"Me gusta ir a ver los cuadros en el museo.",en:"I like to go look at paintings in the museum."}]},{n:"2c",meaning:"to see (a film)",examples:[{es:"He leído el libro, pero no he visto la película. ¿Es buena?",en:"I’ve read the book but haven’t seen the movie. Is it any good?"}]},{n:"3",meaning:"to see (notice)",examples:[{es:"¿Tú ves la diferencia entre esta camisa y la azul?",en:"Do you see the difference between this shirt and the blue one?"}]},{n:"4a",meaning:"to see (verify)",examples:[{es:"Ve a ver quién está en la puerta.",en:"Go see who’s at the door."}]},{n:"4b",meaning:"to check",examples:[{es:"Tengo que ver cuánto dinero tengo en el banco.",en:"I have to check how much money I have in the bank."}]},{n:"5a",meaning:"to see (be witness to)",examples:[{es:"Este campo vio la muerte de muchos durante la guerra.",en:"This field saw the death of many during the war."}]},{n:"5b",meaning:"to witness",examples:[{es:"Esta ciudad ha visto tiempos buenos y malos.",en:"This city has witnessed good times and bad."}]},{n:"5c",meaning:"to live through",examples:[{es:"Mi abuelo ha visto cuatro guerras y sigue siendo optimista.",en:"My grandfather has lived through four wars, and he’s still an optimist."}]},{n:"6",meaning:"to see (recognize)",examples:[{es:"No le veo nada de chistoso a esto.",en:"I don’t see anything funny about this."}]},{n:"7a",meaning:"to see (comprehend)",examples:[{es:"¿Ves lo que te digo?",en:"Do you see what I’m saying?"}]},{n:"7b",meaning:"to understand",examples:[{es:"No veo por qué tengo que trabajar.",en:"I don’t understand why I have to work."}]},{n:"8a",meaning:"to see (picture)",examples:[{es:"No la veo viviendo en otro país.",en:"I can’t see her living in another country."}]},{n:"8b",meaning:"to imagine",examples:[{es:"Todavía los puedo ver como si fuera ayer.",en:"I can still imagine you guys like it was yesterday."}]},{n:"9a",meaning:"to see (meet)",examples:[{es:"Voy a ver al doctor esta tarde.",en:"I’m going to see the doctor this afternoon."}]},{n:"9b",meaning:"to meet with",examples:[{es:"Tienes que ver al cliente mañana.",en:"You have to meet with the client tomorrow."}]},{n:"10a",meaning:"to hear (legal)",examples:[{es:"Tu caso se verá en el tribunal el mes entrante.",en:"Your case will be heard in court next month."}]},{n:"10b",meaning:"to try (a case)",examples:[{es:"El caso de la Mataviejitas será visto en el capital.",en:"The case of the Old Lady Killer will be tried in the capital."}]},{n:"11",meaning:"to look at (study)",examples:[{es:"El semestre que viene veremos el impacto de las empresas sobre el medioambiente.",en:"Next semester we will look at the impact of companies on the environment."}]}]},{label:"Verbo intransitivo",senses:[{n:"12",meaning:"to see (perceive)",examples:[{es:"Amanecí esta mañana y no podía ver.",en:"I woke up this morning and I couldn’t see."}]},{n:"13",meaning:"to watch (observe)",examples:[{es:"Mamá, ¡ve! Puedo manejar el carro yo solito.",en:"Mom, watch! I can drive the car all by myself."}]},{n:"14",meaning:"to see (verify)",examples:[{es:"¿Tenemos papel sanitario? Déjame ver.",en:"Do we have toilet paper? Let me see."}]},{n:"15",meaning:"to see (consider)",examples:[{es:"¿Podemos ir a la playa mañana? — Veremos.",en:"Can we go to the beach tomorrow? — We’ll see."}]},{n:"16",meaning:"to see (comprehend)",examples:[{es:"¿Ya ves? — No, no veo. Explícame de nuevo la situación.",en:"You see? — No, I don’t see. Explain the situation to me again."}]},{n:"17",meaning:"to see about",subnote:'usado con "de"',examples:[{es:"Veremos de arreglar el fregadero mañana.",en:"We’ll see about fixing the sink tomorrow."}]}]},{label:"Sustantivo masculino",note:"el ver",senses:[{n:"18",meaning:"good-looking",subnote:"tener buen ver — apariencia",examples:[{es:"Ese actor no es de mal ver, pero a mí no me gusta.",en:"That actor isn’t bad-looking, but I don’t find him attractive."},{es:"¿Cómo es tu prima? — Es inteligente, trabajadora, y además tiene buen ver.",en:"What’s your cousin like? — She’s smart, hardworking, and she’s also good-looking."}]},{n:"19",meaning:"view (opinion)",subnote:"en mi ver",examples:[{es:"Bueno, en mi ver, la educación debe ser gratis para todos.",en:"Well, in my view, education should be free for everyone."}]}]},{label:"Verbo reflexivo / pronominal",note:"verse",senses:[{n:"20",meaning:"to see oneself",examples:[{es:"Me quiero ver en el espejo a ver cómo me queda el corte de pelo.",en:"I want to see myself in the mirror to see how my haircut looks."}]},{n:"21a",meaning:"to see oneself (imagine)",examples:[{es:"No me veo trabajando aquí de por vida.",en:"I don’t see myself working here for the rest of my life."}]},{n:"21b",meaning:"to picture oneself",examples:[{es:"No me puedo ver casado.",en:"I don’t picture myself married."}]},{n:"22",meaning:"to find oneself (in a situation)",examples:[{es:"Él se vio rodeado de enemigos.",en:"He found himself surrounded by enemies."}]},{n:"23",meaning:"to look (seem)",examples:[{es:"¿Te hiciste algo? ¡Te ves fantástica!",en:"Is there something different about you? You look fantastic!"}]}]},{label:"Verbo recíproco",note:"verse — encontrarse mutuamente",senses:[{n:"24",meaning:"to see each other",examples:[{es:"Nos vimos en la fiesta de anoche.",en:"We saw each other at last night’s party."}]}]}]}]}]},{id:"verbos2",label:"Verbos",sublabel:"Top 10 — Parte 2",chapters:[{id:"dejar",level:"A2",title:"Dejar",subtitle:"to leave, to let, to allow",rank:11,blocks:[{type:"verb-table",participles:{present:"dejando",past:"dejado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"dejo"},{p:"tú",f:"dejas"},{p:"él/ella/Ud.",f:"deja"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejáis"},{p:"ellos/Uds.",f:"dejan"}]},{name:"Pretérito",forms:[{p:"yo",f:"dejé"},{p:"tú",f:"dejaste"},{p:"él/ella/Ud.",f:"dejó"},{p:"nosotros",f:"dejamos"},{p:"vosotros",f:"dejasteis"},{p:"ellos/Uds.",f:"dejaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"dejaba"},{p:"tú",f:"dejabas"},{p:"él/ella/Ud.",f:"dejaba"},{p:"nosotros",f:"dejábamos"},{p:"vosotros",f:"dejabais"},{p:"ellos/Uds.",f:"dejaban"}]},{name:"Condicional",forms:[{p:"yo",f:"dejaría"},{p:"tú",f:"dejarías"},{p:"él/ella/Ud.",f:"dejaría"},{p:"nosotros",f:"dejaríamos"},{p:"vosotros",f:"dejaríais"},{p:"ellos/Uds.",f:"dejarían"}]},{name:"Futuro",forms:[{p:"yo",f:"dejaré"},{p:"tú",f:"dejarás"},{p:"él/ella/Ud.",f:"dejará"},{p:"nosotros",f:"dejaremos"},{p:"vosotros",f:"dejaréis"},{p:"ellos/Uds.",f:"dejarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to leave (an object, a place)",examples:[{es:"Dejé las llaves en la mesa.",en:"I left the keys on the table."},{es:"Dejó su trabajo el mes pasado.",en:"He left his job last month."}]},{n:"2",meaning:"to let / to allow",examples:[{es:"Mis padres no me dejan salir hasta tarde.",en:"My parents don’t let me stay out late."}]},{n:"3",meaning:"to lend",examples:[{es:"¿Me dejas tu bolígrafo un momento?",en:"Will you lend me your pen for a moment?"}]},{n:"4",meaning:"to stop doing",subnote:"dejar de + infinitivo",examples:[{es:"Dejé de fumar el año pasado.",en:"I stopped smoking last year."}]}]},{label:"Verbo pronominal",note:"dejarse",senses:[{n:"5",meaning:"to let oneself / to allow oneself",examples:[{es:"No te dejes engañar por sus palabras.",en:"Don’t let yourself be fooled by his words."}]}]}]}]},{id:"poner",level:"A2",title:"Poner",subtitle:"to put, to place",rank:12,blocks:[{type:"verb-table",participles:{present:"poniendo",past:"[puesto]"},tenses:[{name:"Presente",forms:[{p:"yo",f:"pon[go]"},{p:"tú",f:"pones"},{p:"él/ella/Ud.",f:"pone"},{p:"nosotros",f:"ponemos"},{p:"vosotros",f:"ponéis"},{p:"ellos/Uds.",f:"ponen"}]},{name:"Pretérito",forms:[{p:"yo",f:"[pus]e"},{p:"tú",f:"[pus]iste"},{p:"él/ella/Ud.",f:"[pus]o"},{p:"nosotros",f:"[pus]imos"},{p:"vosotros",f:"[pus]isteis"},{p:"ellos/Uds.",f:"[pus]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"ponía"},{p:"tú",f:"ponías"},{p:"él/ella/Ud.",f:"ponía"},{p:"nosotros",f:"poníamos"},{p:"vosotros",f:"poníais"},{p:"ellos/Uds.",f:"ponían"}]},{name:"Condicional",forms:[{p:"yo",f:"[pondr]ía"},{p:"tú",f:"[pondr]ías"},{p:"él/ella/Ud.",f:"[pondr]ía"},{p:"nosotros",f:"[pondr]íamos"},{p:"vosotros",f:"[pondr]íais"},{p:"ellos/Uds.",f:"[pondr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[pondr]é"},{p:"tú",f:"[pondr]ás"},{p:"él/ella/Ud.",f:"[pondr]á"},{p:"nosotros",f:"[pondr]emos"},{p:"vosotros",f:"[pondr]éis"},{p:"ellos/Uds.",f:"[pondr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to put / to place",examples:[{es:"Pon los platos en la mesa.",en:"Put the plates on the table."}]},{n:"2",meaning:"to turn on (TV, radio)",examples:[{es:"¿Puedes poner la tele?",en:"Can you turn on the TV?"}]},{n:"3",meaning:"to give (a name)",examples:[{es:"Le pusieron el nombre de su abuelo.",en:"They gave him his grandfather’s name."}]}]},{label:"Verbo pronominal",note:"ponerse",senses:[{n:"4",meaning:"to put on (clothing)",examples:[{es:"Me puse el abrigo porque hacía frío.",en:"I put on my coat because it was cold."}]},{n:"5",meaning:"to become",subnote:"cambio de estado emocional",examples:[{es:"Se puso triste cuando le contamos la noticia.",en:"He became sad when we told him the news."}]},{n:"6",meaning:"to start to",subnote:"ponerse a + infinitivo",examples:[{es:"Se puso a llorar sin motivo.",en:"He started to cry for no reason."}]}]}]}]},{id:"saber",level:"A2",title:"Saber",subtitle:"to know (facts, skills)",rank:13,blocks:[{type:"verb-table",participles:{present:"sabiendo",past:"sabido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"[sé]"},{p:"tú",f:"sabes"},{p:"él/ella/Ud.",f:"sabe"},{p:"nosotros",f:"sabemos"},{p:"vosotros",f:"sabéis"},{p:"ellos/Uds.",f:"saben"}]},{name:"Pretérito",forms:[{p:"yo",f:"[sup]e"},{p:"tú",f:"[sup]iste"},{p:"él/ella/Ud.",f:"[sup]o"},{p:"nosotros",f:"[sup]imos"},{p:"vosotros",f:"[sup]isteis"},{p:"ellos/Uds.",f:"[sup]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"sabía"},{p:"tú",f:"sabías"},{p:"él/ella/Ud.",f:"sabía"},{p:"nosotros",f:"sabíamos"},{p:"vosotros",f:"sabíais"},{p:"ellos/Uds.",f:"sabían"}]},{name:"Condicional",forms:[{p:"yo",f:"[sabr]ía"},{p:"tú",f:"[sabr]ías"},{p:"él/ella/Ud.",f:"[sabr]ía"},{p:"nosotros",f:"[sabr]íamos"},{p:"vosotros",f:"[sabr]íais"},{p:"ellos/Uds.",f:"[sabr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[sabr]é"},{p:"tú",f:"[sabr]ás"},{p:"él/ella/Ud.",f:"[sabr]á"},{p:"nosotros",f:"[sabr]emos"},{p:"vosotros",f:"[sabr]éis"},{p:"ellos/Uds.",f:"[sabr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to know (a fact, information)",examples:[{es:"No sé dónde está mi teléfono.",en:"I don’t know where my phone is."},{es:"¿Sabes la respuesta?",en:"Do you know the answer?"}]},{n:"2",meaning:"to know how to",subnote:"saber + infinitivo",examples:[{es:"Mi hijo ya sabe leer.",en:"My son already knows how to read."}]},{n:"3",meaning:"to find out",subnote:"en preterite",examples:[{es:"Supe la verdad ayer.",en:"I found out the truth yesterday."}]}]},{label:"Verbo intransitivo",senses:[{n:"4",meaning:"to taste (like)",subnote:"saber a",examples:[{es:"Esta sopa sabe a ajo.",en:"This soup tastes like garlic."}]}]}]}]},{id:"deber",level:"A2",title:"Deber",subtitle:"must, should, to owe",rank:14,blocks:[{type:"verb-table",participles:{present:"debiendo",past:"debido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"debo"},{p:"tú",f:"debes"},{p:"él/ella/Ud.",f:"debe"},{p:"nosotros",f:"debemos"},{p:"vosotros",f:"debéis"},{p:"ellos/Uds.",f:"deben"}]},{name:"Pretérito",forms:[{p:"yo",f:"debí"},{p:"tú",f:"debiste"},{p:"él/ella/Ud.",f:"debió"},{p:"nosotros",f:"debimos"},{p:"vosotros",f:"debisteis"},{p:"ellos/Uds.",f:"debieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"debía"},{p:"tú",f:"debías"},{p:"él/ella/Ud.",f:"debía"},{p:"nosotros",f:"debíamos"},{p:"vosotros",f:"debíais"},{p:"ellos/Uds.",f:"debían"}]},{name:"Condicional",forms:[{p:"yo",f:"debería"},{p:"tú",f:"deberías"},{p:"él/ella/Ud.",f:"debería"},{p:"nosotros",f:"deberíamos"},{p:"vosotros",f:"deberíais"},{p:"ellos/Uds.",f:"deberían"}]},{name:"Futuro",forms:[{p:"yo",f:"deberé"},{p:"tú",f:"deberás"},{p:"él/ella/Ud.",f:"deberá"},{p:"nosotros",f:"deberemos"},{p:"vosotros",f:"deberéis"},{p:"ellos/Uds.",f:"deberán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo auxiliar",senses:[{n:"1",meaning:"must / to have to",subnote:"obligación — deber + infinitivo",examples:[{es:"Debes estudiar para el examen.",en:"You must study for the exam."}]},{n:"2",meaning:"should",subnote:"consejo — condicional",examples:[{es:"Deberías descansar más.",en:"You should rest more."}]},{n:"3",meaning:"must (probability)",subnote:"deber de + infinitivo",examples:[{es:"Deben de ser las cinco ya.",en:"It must be five o’clock by now."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to owe",examples:[{es:"Te debo cincuenta euros.",en:"I owe you fifty euros."}]}]},{label:"Sustantivo masculino",note:"el deber / los deberes",senses:[{n:"5",meaning:"duty",examples:[{es:"Cumplió con su deber.",en:"He fulfilled his duty."}]},{n:"6",meaning:"homework",subnote:"plural — los deberes",examples:[{es:"Los niños están haciendo los deberes.",en:"The kids are doing their homework."}]}]}]}]},{id:"querer",level:"A1",title:"Querer",subtitle:"to want, to love",rank:15,blocks:[{type:"verb-table",participles:{present:"queriendo",past:"querido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"qu[ie]ro"},{p:"tú",f:"qu[ie]res"},{p:"él/ella/Ud.",f:"qu[ie]re"},{p:"nosotros",f:"queremos"},{p:"vosotros",f:"queréis"},{p:"ellos/Uds.",f:"qu[ie]ren"}]},{name:"Pretérito",forms:[{p:"yo",f:"[quis]e"},{p:"tú",f:"[quis]iste"},{p:"él/ella/Ud.",f:"[quis]o"},{p:"nosotros",f:"[quis]imos"},{p:"vosotros",f:"[quis]isteis"},{p:"ellos/Uds.",f:"[quis]ieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"quería"},{p:"tú",f:"querías"},{p:"él/ella/Ud.",f:"quería"},{p:"nosotros",f:"queríamos"},{p:"vosotros",f:"queríais"},{p:"ellos/Uds.",f:"querían"}]},{name:"Condicional",forms:[{p:"yo",f:"[querr]ía"},{p:"tú",f:"[querr]ías"},{p:"él/ella/Ud.",f:"[querr]ía"},{p:"nosotros",f:"[querr]íamos"},{p:"vosotros",f:"[querr]íais"},{p:"ellos/Uds.",f:"[querr]ían"}]},{name:"Futuro",forms:[{p:"yo",f:"[querr]é"},{p:"tú",f:"[querr]ás"},{p:"él/ella/Ud.",f:"[querr]á"},{p:"nosotros",f:"[querr]emos"},{p:"vosotros",f:"[querr]éis"},{p:"ellos/Uds.",f:"[querr]án"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to want",examples:[{es:"Quiero un café, por favor.",en:"I want a coffee, please."},{es:"¿Qué quieres hacer esta noche?",en:"What do you want to do tonight?"}]},{n:"2",meaning:"to love",examples:[{es:"Te quiero mucho.",en:"I love you very much."},{es:"Mis padres me quieren tal como soy.",en:"My parents love me just as I am."}]},{n:"3",meaning:"to mean",subnote:"querer decir",examples:[{es:"¿Qué quiere decir esta palabra?",en:"What does this word mean?"}]},{n:"4",meaning:"to refuse",subnote:"no querer en pretérito",examples:[{es:"No quiso venir a la fiesta.",en:"He refused to come to the party."}]}]}]}]},{id:"seguir",level:"B1",title:"Seguir",subtitle:"to follow, to continue",rank:16,blocks:[{type:"verb-table",participles:{present:"s[i]guiendo",past:"seguido"},tenses:[{name:"Presente",forms:[{p:"yo",f:"si[g]o"},{p:"tú",f:"s[i]gues"},{p:"él/ella/Ud.",f:"s[i]gue"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguís"},{p:"ellos/Uds.",f:"s[i]guen"}]},{name:"Pretérito",forms:[{p:"yo",f:"seguí"},{p:"tú",f:"seguiste"},{p:"él/ella/Ud.",f:"s[i]guió"},{p:"nosotros",f:"seguimos"},{p:"vosotros",f:"seguisteis"},{p:"ellos/Uds.",f:"s[i]guieron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"seguía"},{p:"tú",f:"seguías"},{p:"él/ella/Ud.",f:"seguía"},{p:"nosotros",f:"seguíamos"},{p:"vosotros",f:"seguíais"},{p:"ellos/Uds.",f:"seguían"}]},{name:"Condicional",forms:[{p:"yo",f:"seguiría"},{p:"tú",f:"seguirías"},{p:"él/ella/Ud.",f:"seguiría"},{p:"nosotros",f:"seguiríamos"},{p:"vosotros",f:"seguiríais"},{p:"ellos/Uds.",f:"seguirían"}]},{name:"Futuro",forms:[{p:"yo",f:"seguiré"},{p:"tú",f:"seguirás"},{p:"él/ella/Ud.",f:"seguirá"},{p:"nosotros",f:"seguiremos"},{p:"vosotros",f:"seguiréis"},{p:"ellos/Uds.",f:"seguirán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to follow",examples:[{es:"Sígueme por aquí.",en:"Follow me this way."},{es:"Sigo a varios chefs en redes sociales.",en:"I follow several chefs on social media."}]},{n:"2",meaning:"to take (a path, course)",examples:[{es:"Sigue las indicaciones del médico.",en:"Follow the doctor’s instructions."}]}]},{label:"Verbo intransitivo",senses:[{n:"3",meaning:"to continue / to keep on",subnote:"seguir + gerundio",examples:[{es:"Sigue lloviendo.",en:"It keeps raining."},{es:"Sigo trabajando en el proyecto.",en:"I’m still working on the project."}]},{n:"4",meaning:"to still be",examples:[{es:"¿Sigues enfermo?",en:"Are you still sick?"}]}]}]}]},{id:"llegar",level:"A1",title:"Llegar",subtitle:"to arrive, to reach",rank:17,blocks:[{type:"verb-table",participles:{present:"llegando",past:"llegado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llego"},{p:"tú",f:"llegas"},{p:"él/ella/Ud.",f:"llega"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegáis"},{p:"ellos/Uds.",f:"llegan"}]},{name:"Pretérito",forms:[{p:"yo",f:"lle[gu]é"},{p:"tú",f:"llegaste"},{p:"él/ella/Ud.",f:"llegó"},{p:"nosotros",f:"llegamos"},{p:"vosotros",f:"llegasteis"},{p:"ellos/Uds.",f:"llegaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llegaba"},{p:"tú",f:"llegabas"},{p:"él/ella/Ud.",f:"llegaba"},{p:"nosotros",f:"llegábamos"},{p:"vosotros",f:"llegabais"},{p:"ellos/Uds.",f:"llegaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llegaría"},{p:"tú",f:"llegarías"},{p:"él/ella/Ud.",f:"llegaría"},{p:"nosotros",f:"llegaríamos"},{p:"vosotros",f:"llegaríais"},{p:"ellos/Uds.",f:"llegarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llegaré"},{p:"tú",f:"llegarás"},{p:"él/ella/Ud.",f:"llegará"},{p:"nosotros",f:"llegaremos"},{p:"vosotros",f:"llegaréis"},{p:"ellos/Uds.",f:"llegarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to arrive",examples:[{es:"Llegamos al aeropuerto a las ocho.",en:"We arrived at the airport at eight."}]},{n:"2",meaning:"to reach (a place, a level)",examples:[{es:"El agua le llega hasta las rodillas.",en:"The water reaches up to his knees."}]},{n:"3",meaning:"to manage to",subnote:"llegar a + infinitivo",examples:[{es:"Llegó a ser director de la empresa.",en:"He managed to become director of the company."}]},{n:"4",meaning:"to be enough",subnote:"llegar para",examples:[{es:"El dinero no llega para todo.",en:"The money isn’t enough for everything."}]}]}]}]},{id:"llevar",level:"A1",title:"Llevar",subtitle:"to take, to carry, to wear",rank:18,blocks:[{type:"verb-table",participles:{present:"llevando",past:"llevado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"llevo"},{p:"tú",f:"llevas"},{p:"él/ella/Ud.",f:"lleva"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"lleváis"},{p:"ellos/Uds.",f:"llevan"}]},{name:"Pretérito",forms:[{p:"yo",f:"llevé"},{p:"tú",f:"llevaste"},{p:"él/ella/Ud.",f:"llevó"},{p:"nosotros",f:"llevamos"},{p:"vosotros",f:"llevasteis"},{p:"ellos/Uds.",f:"llevaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"llevaba"},{p:"tú",f:"llevabas"},{p:"él/ella/Ud.",f:"llevaba"},{p:"nosotros",f:"llevábamos"},{p:"vosotros",f:"llevabais"},{p:"ellos/Uds.",f:"llevaban"}]},{name:"Condicional",forms:[{p:"yo",f:"llevaría"},{p:"tú",f:"llevarías"},{p:"él/ella/Ud.",f:"llevaría"},{p:"nosotros",f:"llevaríamos"},{p:"vosotros",f:"llevaríais"},{p:"ellos/Uds.",f:"llevarían"}]},{name:"Futuro",forms:[{p:"yo",f:"llevaré"},{p:"tú",f:"llevarás"},{p:"él/ella/Ud.",f:"llevará"},{p:"nosotros",f:"llevaremos"},{p:"vosotros",f:"llevaréis"},{p:"ellos/Uds.",f:"llevarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to take / to bring",examples:[{es:"Llevo a los niños al colegio cada mañana.",en:"I take the children to school every morning."}]},{n:"2",meaning:"to carry",examples:[{es:"Lleva una mochila pesada.",en:"He’s carrying a heavy backpack."}]},{n:"3",meaning:"to wear",examples:[{es:"Lleva un vestido azul.",en:"She’s wearing a blue dress."}]},{n:"4",meaning:"to have been (duration)",subnote:"llevar + tiempo + gerundio",examples:[{es:"Llevo dos horas esperando.",en:"I’ve been waiting for two hours."}]}]},{label:"Verbo pronominal",note:"llevarse",senses:[{n:"5",meaning:"to get along with",examples:[{es:"Me llevo bien con mi hermana.",en:"I get along well with my sister."}]},{n:"6",meaning:"to take away",examples:[{es:"Se llevó todos sus libros cuando se mudó.",en:"He took all his books when he moved."}]}]}]}]},{id:"encontrar",level:"A2",title:"Encontrar",subtitle:"to find",rank:19,blocks:[{type:"verb-table",participles:{present:"encontrando",past:"encontrado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"enc[ue]ntro"},{p:"tú",f:"enc[ue]ntras"},{p:"él/ella/Ud.",f:"enc[ue]ntra"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontráis"},{p:"ellos/Uds.",f:"enc[ue]ntran"}]},{name:"Pretérito",forms:[{p:"yo",f:"encontré"},{p:"tú",f:"encontraste"},{p:"él/ella/Ud.",f:"encontró"},{p:"nosotros",f:"encontramos"},{p:"vosotros",f:"encontrasteis"},{p:"ellos/Uds.",f:"encontraron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"encontraba"},{p:"tú",f:"encontrabas"},{p:"él/ella/Ud.",f:"encontraba"},{p:"nosotros",f:"encontrábamos"},{p:"vosotros",f:"encontrabais"},{p:"ellos/Uds.",f:"encontraban"}]},{name:"Condicional",forms:[{p:"yo",f:"encontraría"},{p:"tú",f:"encontrarías"},{p:"él/ella/Ud.",f:"encontraría"},{p:"nosotros",f:"encontraríamos"},{p:"vosotros",f:"encontraríais"},{p:"ellos/Uds.",f:"encontrarían"}]},{name:"Futuro",forms:[{p:"yo",f:"encontraré"},{p:"tú",f:"encontrarás"},{p:"él/ella/Ud.",f:"encontrará"},{p:"nosotros",f:"encontraremos"},{p:"vosotros",f:"encontraréis"},{p:"ellos/Uds.",f:"encontrarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo transitivo",senses:[{n:"1",meaning:"to find",examples:[{es:"Encontré las llaves debajo del sofá.",en:"I found the keys under the sofa."}]},{n:"2",meaning:"to think / to find",subnote:"opinión",examples:[{es:"Encuentro este libro muy interesante.",en:"I find this book very interesting."}]}]},{label:"Verbo pronominal",note:"encontrarse",senses:[{n:"3",meaning:"to feel",examples:[{es:"¿Cómo te encuentras hoy?",en:"How are you feeling today?"}]},{n:"4",meaning:"to meet (by chance)",examples:[{es:"Me encontré con un viejo amigo en la calle.",en:"I ran into an old friend on the street."}]},{n:"5",meaning:"to be located",examples:[{es:"El museo se encuentra en el centro.",en:"The museum is located downtown."}]}]}]}]},{id:"pasar",level:"A1",title:"Pasar",subtitle:"to pass, to happen, to spend",rank:20,blocks:[{type:"verb-table",participles:{present:"pasando",past:"pasado"},tenses:[{name:"Presente",forms:[{p:"yo",f:"paso"},{p:"tú",f:"pasas"},{p:"él/ella/Ud.",f:"pasa"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasáis"},{p:"ellos/Uds.",f:"pasan"}]},{name:"Pretérito",forms:[{p:"yo",f:"pasé"},{p:"tú",f:"pasaste"},{p:"él/ella/Ud.",f:"pasó"},{p:"nosotros",f:"pasamos"},{p:"vosotros",f:"pasasteis"},{p:"ellos/Uds.",f:"pasaron"}]},{name:"Imperfecto",forms:[{p:"yo",f:"pasaba"},{p:"tú",f:"pasabas"},{p:"él/ella/Ud.",f:"pasaba"},{p:"nosotros",f:"pasábamos"},{p:"vosotros",f:"pasabais"},{p:"ellos/Uds.",f:"pasaban"}]},{name:"Condicional",forms:[{p:"yo",f:"pasaría"},{p:"tú",f:"pasarías"},{p:"él/ella/Ud.",f:"pasaría"},{p:"nosotros",f:"pasaríamos"},{p:"vosotros",f:"pasaríais"},{p:"ellos/Uds.",f:"pasarían"}]},{name:"Futuro",forms:[{p:"yo",f:"pasaré"},{p:"tú",f:"pasarás"},{p:"él/ella/Ud.",f:"pasará"},{p:"nosotros",f:"pasaremos"},{p:"vosotros",f:"pasaréis"},{p:"ellos/Uds.",f:"pasarán"}]}]},{type:"verb-uses",heading:"Usos y significados",categories:[{label:"Verbo intransitivo",senses:[{n:"1",meaning:"to happen",examples:[{es:"¿Qué pasó? — Nada importante.",en:"What happened? — Nothing important."}]},{n:"2",meaning:"to pass / to go by",examples:[{es:"El tiempo pasa muy rápido.",en:"Time goes by very fast."}]},{n:"3",meaning:"to come in",examples:[{es:"Pasa, por favor. Estás en tu casa.",en:"Come in, please. Make yourself at home."}]}]},{label:"Verbo transitivo",senses:[{n:"4",meaning:"to spend (time)",examples:[{es:"Pasamos las vacaciones en la playa.",en:"We spent our vacation at the beach."}]},{n:"5",meaning:"to pass (an object)",examples:[{es:"¿Me pasas la sal, por favor?",en:"Can you pass me the salt, please?"}]}]},{label:"Verbo pronominal",note:"pasarse",senses:[{n:"6",meaning:"to go too far / to overdo",examples:[{es:"Te pasaste con la sal.",en:"You overdid it with the salt."}]}]}]}]}]},{id:"gramatica",label:"Gramática",sublabel:"8 lecciones esenciales",chapters:[{id:"gramatica-all",level:"A1",title:"Gramática Esencial",subtitle:"Toca el título para abrir o cerrar cada lección",intro:"Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.",blocks:[{type:"foldable-grammar",lessons:[{id:"gl1",level:"A2",title:"Direct Object Pronouns",subtitle:"lo, la, los, las — pronombres de objeto directo",intro:'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (me)","nos  (us)"],["2ª","te  (you)","os  (you all — Spain)"],["3ª masc.","lo  (him, it, you formal m.)","los  (them, you all m.)"],["3ª fem.","la  (her, it, you formal f.)","las  (them, you all f.)"]]}},{heading:"Replacing people and things",text:"The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.",examples:[{es:"Llamaron a mi mamá. → La llamaron.",en:"They called my mother. → They called her."},{es:"Sandra tiró la pelota. → Sandra la tiró.",en:"Sandra threw the ball. → Sandra threw it."},{es:"Los niños leen muchos libros. → Los niños los leen.",en:"The boys read many books. → The boys read them."},{es:"Veo el coche. → Lo veo.",en:"I see the car. → I see it."},{es:"¿Tienes las llaves? — Sí, las tengo.",en:"Do you have the keys? — Yes, I have them."},{es:"Te quiero mucho.",en:"I love you very much."},{es:"Nos llaman cada domingo.",en:"They call us every Sunday."},{es:"¿Me escuchas?",en:"Are you listening to me?"}]},{heading:"Position — before the verb or attached",text:"Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.",examples:[{es:"Lo veo todos los días.",en:"I see him every day. (before conjugated verb)"},{es:"Quiero verlo. / Lo quiero ver.",en:"I want to see it. (both correct)"},{es:"Estoy leyéndolo. / Lo estoy leyendo.",en:"I am reading it. (both correct)"},{es:"¡Cómpralo!",en:"Buy it! (attached to affirmative command)"},{es:"¡No lo compres!",en:"Don't buy it! (before negative command)"},{es:"Hay que hacerlo hoy.",en:"It has to be done today. (attached to infinitive)"}]},{heading:'Personal "a"',text:'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',examples:[{es:"Veo a mi hermano. → Lo veo.",en:"I see my brother. → I see him."},{es:"Esperan a sus amigos. → Los esperan.",en:"They wait for their friends. → They wait for them."},{es:"Visitamos a la abuela. → La visitamos.",en:"We visit grandma. → We visit her."},{es:"¿Conoces a Juan? → ¿Lo conoces?",en:"Do you know Juan? → Do you know him?"},{es:"Busco a alguien que hable árabe.",en:"I am looking for someone who speaks Arabic."}]},{tip:'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',takeaway:'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.'}]},{id:"gl2",level:"A2",title:"Indirect Object Pronouns",subtitle:"me, te, le, nos, os, les — pronombres de objeto indirecto",intro:'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',sections:[{heading:"The six pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (to/for me)","nos  (to/for us)"],["2ª","te  (to/for you)","os  (to/for you all — Spain)"],["3ª","le  (to/for him, her, you formal)","les  (to/for them, you all formal)"]]}},{heading:"Finding the indirect object",text:'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',examples:[{es:"Gabriel le compró una rosa a Anita.",en:"Gabriel bought a rose for Anita."},{es:"Gabriel le compró una rosa.",en:"Gabriel bought a rose for her."},{es:"Samuel le tiró la pelota a Juan.",en:"Samuel threw the ball to Juan."},{es:"Le escribí una carta a mi abuela.",en:"I wrote a letter to my grandmother."},{es:"¿Me puedes pasar la sal?",en:"Can you pass me the salt?"},{es:"Te traje un café.",en:"I brought you a coffee."},{es:"Nos enviaron las invitaciones por correo.",en:"They sent us the invitations by mail."},{es:"Les expliqué el problema a los clientes.",en:"I explained the problem to the clients."}]},{heading:"Verbs that commonly take an indirect object",table:{headers:["Spanish","English"],rows:[["comprarle algo","to buy something for someone"],["contarle algo","to tell something to someone"],["darle algo","to give something to someone"],["decirle algo","to say something to someone"],["escribirle algo","to write something to someone"],["mandarle algo","to send something to someone"],["mostrarle algo","to show something to someone"],["pedirle algo","to ask something of someone"],["regalarle algo","to give a gift to someone"],["servirle algo","to serve something to someone"],["traerle algo","to bring something to someone"]]}},{heading:"Verbs like gustar — backwards from English",text:'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',examples:[{es:"Me gusta el café.",en:"I like coffee. (lit. coffee pleases me)"},{es:"Le encanta bailar.",en:"She loves dancing."},{es:"Nos duele la cabeza.",en:"Our heads hurt."},{es:"Les interesa la política.",en:"They are interested in politics."},{es:"¿Te molesta el ruido?",en:"Does the noise bother you?"},{es:"Me hacen falta más horas.",en:"I need more hours."},{es:"Le quedan dos días.",en:"He has two days left."},{es:"No me apetece salir.",en:"I don't feel like going out."}]},{tip:'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',takeaway:'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.'}]},{id:"gl3",level:"B1",title:"Direct + Indirect Object Pronouns Together",subtitle:"Dos pronombres — el orden fijo y la regla le → se",intro:"When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.",sections:[{heading:"The order: indirect before direct — always",text:"The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.",examples:[{es:"Me lo dio.",en:"He gave it to me."},{es:"Te la mandé ayer.",en:"I sent it to you yesterday."},{es:"Nos los regalaron.",en:"They gave them to us as a gift."},{es:"Os lo explico ahora.",en:"I will explain it to you all now."},{es:"Quiero dártelo.",en:"I want to give it to you. (attached to infinitive)"},{es:"Te lo quiero dar.",en:"I want to give it to you. (before main verb)"},{es:"¡Dámelo!",en:"Give it to me! (attached to command)"},{es:"No me lo digas.",en:"Don't tell it to me. (before negative command)"}]},{heading:"The le → se rule",text:'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',table:{headers:["❌ Incorrecto","✓ Correcto","Significado"],rows:[["le lo doy","se lo doy","I give it to him/her/you"],["le la mando","se la mando","I send it to him/her/you"],["les los enseño","se los enseño","I show them to them/you all"],["les las traigo","se las traigo","I bring them to them/you all"]]}},{heading:'Disambiguating "se"',text:'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',examples:[{es:"Se lo di a él.",en:"I gave it to him."},{es:"Se lo di a ella.",en:"I gave it to her."},{es:"Se lo di a usted.",en:"I gave it to you (formal)."},{es:"Se lo di a ellos.",en:"I gave it to them."},{es:"Se la expliqué a mi jefe.",en:"I explained it to my boss."},{es:"¿La carta? Ya se la mandé al cliente.",en:"The letter? I already sent it to the client."},{es:"Se lo voy a decir a María mañana.",en:"I am going to tell it to María tomorrow."}]},{tip:'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',takeaway:'"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.'}]},{id:"gl4",level:"A2",title:"Reflexive Verbs and Pronouns",subtitle:"me, te, se, nos, os, se — verbos reflexivos",intro:'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',sections:[{heading:"The reflexive pronouns",table:{headers:["Persona","Singular","Plural"],rows:[["1ª","me  (myself)","nos  (ourselves)"],["2ª","te  (yourself)","os  (yourselves — Spain)"],["3ª","se  (himself, herself, yourself)","se  (themselves, yourselves)"]]}},{heading:"Daily routine — the most common reflexive verbs",text:"These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.",examples:[{es:"Me despierto a las siete.",en:"I wake up at seven."},{es:"Me levanto enseguida.",en:"I get up right away."},{es:"Me ducho antes del desayuno.",en:"I shower before breakfast."},{es:"Me visto rápidamente.",en:"I get dressed quickly."},{es:"Te cepillas los dientes después de comer.",en:"You brush your teeth after eating."},{es:"Él se afeita cada mañana.",en:"He shaves every morning."},{es:"Nos acostamos tarde los viernes.",en:"We go to bed late on Fridays."},{es:"Se duermen viendo la televisión.",en:"They fall asleep watching TV."}]},{heading:"Reflexive vs. non-reflexive — same verb, different meaning",table:{headers:["Sin reflexivo","Con reflexivo","Diferencia"],rows:[["lavar (to wash sth.)","lavarse (to wash oneself)","object → self"],["ir (to go)","irse (to leave / go away)","movement → departure"],["dormir (to sleep)","dormirse (to fall asleep)","state → onset"],["poner (to put)","ponerse (to put on / become)","placement → self"],["acordar (to agree)","acordarse (to remember)","pact → memory"],["quedar (to remain)","quedarse (to stay)","position → decision"],["llamar (to call)","llamarse (to be named)","action → identity"],["sentir (to feel sth.)","sentirse (to feel a way)","object → state"]]}},{heading:"Reflexive for emotional and physical change",text:'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',examples:[{es:"Me enojo cuando mienten.",en:"I get angry when people lie."},{es:"Se enamoró de ella al instante.",en:"He fell in love with her at once."},{es:"Nos cansamos muy rápido.",en:"We get tired very quickly."},{es:"Se aburrieron en la reunión.",en:"They got bored during the meeting."},{es:"Me preocupo por ti.",en:"I worry about you."},{es:"Se puso nervioso antes del examen.",en:"He got nervous before the exam."},{es:"¿Te alegras de verme?",en:"Are you happy to see me?"},{es:"Me sorprendí cuando lo supe.",en:"I was surprised when I found out."}]},{heading:"Position of reflexive pronouns",text:'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',examples:[{es:"Me quiero duchar. / Quiero ducharme.",en:"I want to shower. (both correct)"},{es:"Estoy duchándome. / Me estoy duchando.",en:"I am showering. (both correct)"},{es:"¡Levántate!",en:"Get up! (affirmative command)"},{es:"No te levantes todavía.",en:"Don't get up yet. (negative command)"}]},{tip:'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:"Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it."}]},{id:"gl5",level:"B1",title:"Reciprocal Pronouns",subtitle:'nos, os, se — "each other"',intro:'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',sections:[{heading:"The pronouns — plural only",text:"Reciprocal action needs at least two people, so only plural forms apply.",table:{headers:["Pronombre","Sujeto","Significado"],rows:[["nos","nosotros / nosotras","each other (us)"],["os","vosotros / vosotras","each other (you all — Spain)"],["se","ellos / ellas / ustedes","each other (them, you all)"]]}},{heading:"Reciprocal in action",examples:[{es:"Nos miramos en silencio.",en:"We looked at each other in silence."},{es:"Se besaron en la estación.",en:"They kissed each other at the station."},{es:"Os llamáis todos los días.",en:"You call each other every day."},{es:"Mis hermanos se ayudan mucho.",en:"My brothers help each other a lot."},{es:"No se hablan desde el accidente.",en:"They haven't spoken to each other since the accident."},{es:"Nos escribimos cartas durante años.",en:"We wrote letters to each other for years."},{es:"Se conocieron en Madrid.",en:"They met each other in Madrid."},{es:"Nos vemos los martes.",en:"We see each other on Tuesdays."}]},{heading:"Reciprocal vs. reflexive — disambiguation",text:'"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',examples:[{es:"Se miran en el espejo.",en:"They look at themselves in the mirror. (reflexive)"},{es:"Se miran el uno al otro.",en:"They look at each other. (reciprocal — explicit)"},{es:"Se aman a sí mismos.",en:"They love themselves. (reflexive — explicit)"},{es:"Se aman el uno al otro.",en:"They love each other. (reciprocal — explicit)"}]},{heading:"The clarifier — el uno al otro",table:{headers:["Forma","Cuándo usar"],rows:[["el uno al otro","two males or mixed group"],["la una a la otra","two females"],["los unos a los otros","three or more (masc./mixed)"],["las unas a las otras","three or more (all female)"]]}},{tip:'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',takeaway:'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.'}]},{id:"gl6",level:"A1",title:"Possessive Adjectives and Pronouns",subtitle:"mi, tu, su — el mío, el tuyo, el suyo",intro:"Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.",sections:[{heading:"Short possessive adjectives — before the noun",table:{headers:["Persona","Singular","Plural"],rows:[["yo","mi  (my)","mis"],["tú","tu  (your)","tus"],["él / ella / Ud.","su  (his, her, your)","sus"],["nosotros","nuestro/a  (our)","nuestros/as"],["vosotros","vuestro/a  (your all — Spain)","vuestros/as"],["ellos / Uds.","su  (their, your all)","sus"]]}},{heading:"Short possessives in action",examples:[{es:"Mi casa es tu casa.",en:"My house is your house."},{es:"Sus hijos estudian en Madrid.",en:"His/her/their children study in Madrid."},{es:"Nuestra empresa tiene cien empleados.",en:"Our company has a hundred employees."},{es:"Tus llaves están sobre la mesa.",en:"Your keys are on the table."},{es:"Mis padres viven en Casablanca.",en:"My parents live in Casablanca."},{es:"Su despacho está en el segundo piso.",en:"His/her office is on the second floor."},{es:"Vuestro español es muy bueno.",en:"Your Spanish is very good."},{es:"¿Es tu primera vez en España?",en:"Is it your first time in Spain?"}]},{heading:"Long (stressed) possessives — after the noun or as pronouns",text:"These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.",table:{headers:["Persona","Masc. sg.","Fem. sg.","Masc. pl.","Fem. pl."],rows:[["yo","mío","mía","míos","mías"],["tú","tuyo","tuya","tuyos","tuyas"],["él/ella/Ud.","suyo","suya","suyos","suyas"],["nosotros","nuestro","nuestra","nuestros","nuestras"],["vosotros","vuestro","vuestra","vuestros","vuestras"],["ellos/Uds.","suyo","suya","suyos","suyas"]]}},{heading:"Long possessives in action",examples:[{es:"Es un amigo mío.",en:"He is a friend of mine."},{es:"¡Madre mía!",en:"Oh my goodness! (lit. mother of mine)"},{es:"Esta casa es nuestra.",en:"This house is ours."},{es:"Mi coche es viejo. El tuyo es nuevo.",en:"My car is old. Yours is new."},{es:"Las maletas son suyas.",en:"The suitcases are hers/his/theirs."},{es:"Los míos están en el armario.",en:"Mine are in the closet."},{es:"Un colega suyo me llamó ayer.",en:"A colleague of his called me yesterday."}]},{heading:'Disambiguating "su" and "suyo"',text:'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',examples:[{es:"Su libro → el libro de él.",en:"His book → the book of his."},{es:"Su madre → la madre de ella.",en:"Her mother."},{es:"Sus problemas → los problemas de ellos.",en:"Their problems."}]},{tip:'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',takeaway:'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.'}]},{id:"gl7",level:"A2",title:"Prepositional Pronouns",subtitle:"mí, ti, sí — pronombres después de preposición",intro:'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',sections:[{heading:"The pronouns",text:'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',table:{headers:["Persona","Singular","Plural"],rows:[["1ª","mí  (me)","nosotros / nosotras  (us)"],["2ª","ti  (you)","vosotros / vosotras  (you all — Spain)"],["3ª","él, ella, usted, sí","ellos, ellas, ustedes, sí"]]}},{heading:"Prepositional pronouns in action",examples:[{es:"Este regalo es para ti.",en:"This gift is for you."},{es:"No quiero ir sin ella.",en:"I don't want to go without her."},{es:"Hablan de mí a mis espaldas.",en:"They talk about me behind my back."},{es:"Iremos con ustedes.",en:"We will go with you all."},{es:"Confío en ti completamente.",en:"I trust you completely."},{es:"El libro es de él, no de ella.",en:"The book is his, not hers."},{es:"Todo depende de ti.",en:"Everything depends on you."},{es:"Piensa mucho en ella.",en:"He thinks about her a lot."}]},{heading:"The con-fusions — obligatory contractions",text:'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',table:{headers:["Forma","Significado"],rows:[["conmigo","with me"],["contigo","with you"],["consigo","with himself / herself / themselves"]]},examples:[{es:"¿Vienes conmigo?",en:"Are you coming with me?"},{es:"Quiero hablar contigo.",en:"I want to talk with you."},{es:"Lleva el dinero consigo.",en:"He carries the money with him."},{es:"No está contento consigo mismo.",en:"He is not happy with himself."}]},{heading:"Exceptions — when subject pronouns take over",text:'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',examples:[{es:"Entre tú y yo, no me cae bien.",en:"Between you and me, I don't like him."},{es:"Según tú, ¿qué deberíamos hacer?",en:"According to you, what should we do?"},{es:"Todos vinieron excepto yo.",en:"Everyone came except me."},{es:"Hasta yo lo entiendo.",en:"Even I understand it."}]},{tip:'"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',takeaway:"After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish."}]},{id:"gl8",level:"A1",title:"Basic Spanish Prepositions",subtitle:"a, de, en, para, por, con, sin, hasta, desde...",intro:"Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.",sections:[{heading:"The core prepositions",table:{headers:["Preposición","Significados principales"],rows:[["a",'to, at — direction, time, personal "a"'],["de","of, from — origin, possession, material, topic"],["en","in, on, at — location, time inside"],["para","for, in order to — goal, recipient, deadline"],["por","for, by, through — cause, means, path, duration"],["con","with"],["sin","without"],["sobre","on, about, above"],["hasta","until, up to, as far as"],["desde","from, since"],["hacia","toward"],["entre","between, among"],["durante","during"],["según","according to"],["contra","against"]]}},{heading:"A — direction, time, personal object",examples:[{es:"Voy a Madrid mañana.",en:"I am going to Madrid tomorrow. (direction)"},{es:"Llegamos a las nueve en punto.",en:"We arrive at nine on the dot. (time)"},{es:"Veo a María todos los días.",en:"I see María every day. (personal a)"},{es:"Dale el libro a Juan.",en:"Give the book to Juan."},{es:"Aprendí a leer a los cinco años.",en:"I learned to read at age five."},{es:"Está a tres kilómetros de aquí.",en:"It is three kilometres from here."}]},{heading:"De — origin, possession, material, topic",examples:[{es:"Soy de Marruecos.",en:"I am from Morocco. (origin)"},{es:"Es el coche de mi padre.",en:"It is my father's car. (possession)"},{es:"Una mesa de madera.",en:"A wooden table. (material)"},{es:"Un libro de derecho.",en:"A law book. (topic)"},{es:"Murió de cáncer.",en:"He died of cancer. (cause)"},{es:"Vengo de la oficina.",en:"I am coming from the office."}]},{heading:"En — location and time inside",examples:[{es:"Vivo en España desde hace dos años.",en:"I have lived in Spain for two years."},{es:"El libro está en la mesa.",en:"The book is on the table."},{es:"Te veo en la oficina a las diez.",en:"I will see you at the office at ten."},{es:"En verano hace mucho calor.",en:"In summer it is very hot."},{es:"Llegué en tren desde Barcelona.",en:"I arrived by train from Barcelona."},{es:"Pienso en ti constantemente.",en:"I think about you constantly."}]},{heading:"Por vs Para — the most important contrast",text:"POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?",table:{headers:["POR — la causa, el camino","PARA — el destino, el fin"],rows:[["Gracias por tu ayuda.","Este regalo es para ti."],["Caminé por el parque.","Salimos para Madrid."],["Pagué cien euros por el libro.","Lo necesito para el lunes."],["Estudio por la mañana.","Estudio para ser abogado."],["Hablan por teléfono.","Es demasiado difícil para mí."],["Lo hizo por amor.","Esta nota es para ti."]]}},{heading:"Desde / Hasta — the pair of endpoints",examples:[{es:"Trabajo desde las nueve hasta las cinco.",en:"I work from nine until five."},{es:"Vivo aquí desde 2020.",en:"I have lived here since 2020."},{es:"El tren va hasta Sevilla.",en:"The train goes as far as Seville."},{es:"Desde aquí se ve el mar.",en:"You can see the sea from here."},{es:"Hasta luego.",en:"See you later. (lit. until later)"},{es:"No he dormido desde el martes.",en:"I haven't slept since Tuesday."}]},{heading:"Verb + preposition fixed phrases — learn as single units",table:{headers:["Verbo + preposición","English"],rows:[["pensar en","to think about"],["soñar con","to dream of / about"],["enamorarse de","to fall in love with"],["casarse con","to get married to"],["depender de","to depend on"],["confiar en","to trust in"],["acordarse de","to remember"],["olvidarse de","to forget"],["tratar de","to try to"],["empezar a","to begin to"],["dejar de","to stop doing"],["tardar en","to take time to"]]}},{tip:'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',takeaway:"Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary."}]}]},{type:"takeaway",text:"Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow."}]}]},{id:"lectura",label:"Lectura",sublabel:"Cuentos, poemas y canciones",chapters:[{id:"stories",level:"A1",title:"Diez Cuentos",subtitle:"Toca el título para abrir o cerrar cada cuento",intro:"Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.",blocks:[{type:"foldable-stories",stories:[{level:"A1",title:"La Familia Pérez",paragraphs:["Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.","Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.","Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado."]},{level:"A1",title:"El Café de la Esquina",paragraphs:['Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',"Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.",'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.']},{level:"A2",title:"Un Día en Casablanca",paragraphs:["El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.","Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.","Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.","Volvimos a casa por la noche, cansados pero contentos."]},{level:"A2",title:"El Cliente Difícil",paragraphs:["Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.","— Quiero leer cada palabra del contrato — dice siempre.","Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.","A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.",'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."']},{level:"B1",title:"La Carta del Abuelo",paragraphs:["Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.","La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.","Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.","Te quiere, tu abuelo."]},{level:"B1",title:"El Tribunal Vacío",paragraphs:["Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.","El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.","Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.","Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.","Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó."]},{level:"B1",title:"La Llave Perdida",paragraphs:["Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.","Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.","Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.","Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.","De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.","Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan."]},{level:"B2",title:"Macondo (fragmento simplificado)",paragraphs:["Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.","El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.","Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia."]},{level:"B2",title:"El Testigo",paragraphs:["El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.","Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.","Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.","— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.","El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.","Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar."]},{level:"B2",title:"El Viaje a Granada",paragraphs:["Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.","El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.","Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.",'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',"Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.","No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.","A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más."]}]},{type:"takeaway",text:"Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path."}]},{id:"biografias",level:"A1",title:"Biografías",subtitle:"Filósofos y escritores — nivel B1",intro:"Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.",blocks:[{type:"foldable-bios",bios:[{title:"Arthur Schopenhauer",subtitle:"Filósofo alemán del pesimismo y la voluntad",dates:"1788 — 1860",levels:[{level:"A1",heading:"¿Quién fue Schopenhauer?",paragraphs:["Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.","Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.","Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía."],vocab:"nació · murió · escribió · filósofo · libro · importante"},{level:"A2",heading:"Su vida y su familia",paragraphs:["Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.","Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.","La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.","Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar."],vocab:"comerciante · heredar · relación difícil · preferir estar solo · afectar"},{level:"B1",heading:"Sus ideas filosóficas",paragraphs:["Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.",'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',"Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.","Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno."],vocab:"charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar"},{level:"B2",heading:"Su influencia y legado",paragraphs:["Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.","Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.","En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.","En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.","Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte."],vocab:"desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar"}]},{title:"Friedrich Nietzsche",subtitle:"El filósofo del martillo",dates:"1844 — 1900",levels:[{level:"B1",heading:"Los primeros años",paragraphs:["Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.","Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.","Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos."],vocab:"beca · prestigiosa · pérdida · influyó · complicada"},{level:"B1",heading:"El joven profesor",paragraphs:["Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.","En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.","La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.","Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos."],vocab:"filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas"},{level:"B1",heading:"Sus ideas principales",paragraphs:["Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.",'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?','Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.','Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.','Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?','Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.'],vocab:"aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse"},{level:"B1",heading:"La enfermedad y el fin",paragraphs:["Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.","A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.","En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.","Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años."],vocab:"colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de"},{level:"B1",heading:"Su legado",paragraphs:["Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.","Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.","Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.",'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.'],vocab:"malentendidos · manuscritos · autosuperación · certezas · atreverse"}]},{title:"Franz Kafka",subtitle:"El escritor del laberinto",dates:"1883 — 1924",levels:[{level:"B1",heading:"Praga y los orígenes",paragraphs:["Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.","Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio."],vocab:"Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo"},{level:"B1",heading:"La familia y el padre",paragraphs:["Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.","En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida."],vocab:"dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana"},{level:"B1",heading:"Los estudios y el trabajo",paragraphs:["Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.","Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche."],vocab:"aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba"},{level:"B1",heading:"Sus obras principales",paragraphs:["Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.","En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación."],vocab:"perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis"},{level:"B1",heading:"El mundo kafkiano y el legado",paragraphs:['El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',"Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria."],vocab:"kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza"}]},{title:"René Descartes",subtitle:"El padre de la filosofía moderna",dates:"1596 — 1650",levels:[{level:"B1",heading:"Los orígenes y la educación jesuita",paragraphs:["René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.","En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?"],vocab:"nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto"},{level:"B1",heading:"El soldado, los sueños y los Países Bajos",paragraphs:["Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.","En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641)."],vocab:"alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina"},{level:"B1",heading:"La duda metódica y el Cogito",paragraphs:['El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.','Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.'],vocab:"duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito"},{level:"B1",heading:"La mente, el cuerpo y el legado",paragraphs:['Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',"En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él."],vocab:"dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo"}]},{title:"Baruch Spinoza",subtitle:"El filósofo de Dios y la naturaleza",dates:"1632 — 1677",levels:[{level:"B1",heading:"Ámsterdam, los orígenes y el gran exilio",paragraphs:["Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.","El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente."],vocab:"cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones"},{level:"B1",heading:"La vida del pulidor de lentes y Dios-naturaleza",paragraphs:["Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.","La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas."],vocab:"pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío"},{level:"B1",heading:"La libertad, la política y la Ética",paragraphs:["Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.","En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis."],vocab:"esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad"}]},{title:"Immanuel Kant",subtitle:"El filósofo de la razón pura",dates:"1724 — 1804",levels:[{level:"B1",heading:"Königsberg y el profesor de rutinas exactas",paragraphs:["Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.","Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa."],vocab:"rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante"},{level:"B1",heading:"El sueño dogmático y la Crítica de la razón pura",paragraphs:['Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".','En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.'],vocab:"racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos"},{level:"B1",heading:"La moral, la paz y el legado",paragraphs:['Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.','En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".'],vocab:"imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación"}]},{title:"John Locke",subtitle:"El padre del liberalismo político",dates:"1632 — 1704",levels:[{level:"B1",heading:"Los orígenes y el exilio en los Países Bajos",paragraphs:["John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.","En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina."],vocab:"puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento"},{level:"B1",heading:"La mente como página en blanco",paragraphs:['La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',"Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana."],vocab:"tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias"},{level:"B1",heading:"El gobierno, los derechos y el legado",paragraphs:["Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.",'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.'],vocab:"inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa"}]},{title:"David Hume",subtitle:"El gran escéptico de la Ilustración",dates:"1711 — 1776",levels:[{level:"B1",heading:"Edimburgo y el joven filósofo",paragraphs:['David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',"Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando."],vocab:"Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa"},{level:"B1",heading:"Las impresiones, las ideas y la causalidad",paragraphs:['Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.','La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.'],vocab:"impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora"},{level:"B1",heading:"El yo, la religión, la moral y el legado",paragraphs:['Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.','Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.'],vocab:"haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad"}]},{title:"Fiódor Dostoievski",subtitle:"El novelista del alma humana",dates:"1821 — 1881",levels:[{level:"B1",heading:"Infancia, primeros éxitos y Siberia",paragraphs:["Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.","En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible."],vocab:"autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador"},{level:"B1",heading:"Las deudas, el juego y las grandes novelas",paragraphs:["Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.",'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.'],vocab:"adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra"},{level:"B1",heading:"Sus ideas y el legado",paragraphs:["Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.","Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos."],vocab:"ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares"}]}]},{type:"takeaway",text:"Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language."}]},{id:"poemas",level:"B2",title:"Poemas",subtitle:"Pablo Neruda — dos poemas de amor",intro:"Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.",blocks:[{type:"foldable-poems",poems:[{title:"Te Amo",attribution:"Atribuido a Pablo Neruda",level:"B1",opening:"«Te amo de una manera inexplicable, de una forma inconfesable.»",note:"Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.",stanzas:[{es:"Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.",en:"I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death."},{es:"Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.",en:"I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do."},{es:"Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.",en:"Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better."},{es:"Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.",en:"I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me."},{es:"Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.",en:"I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why."}],vocab:[{es:"inconfesable",en:"unspeakable, too private to confess"},{es:"ambivalencia",en:"ambivalence — feeling two opposite things at once"},{es:"incoherencia",en:"incoherence, inconsistency"},{es:"fatalidad del destino",en:"the fatality / inevitability of fate"},{es:"de a poco",en:"little by little (Latin American Spanish)"},{es:"fundamentar",en:"to ground, to justify, to give a foundation to"},{es:"surgió",en:"it arose, it emerged (from surgir)"}],learningNote:'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.'},{title:"Poema 20",attribution:"Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)",level:"B2",opening:"«Puedo escribir los versos más tristes esta noche.»",note:"Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.",stanzas:[{es:"Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.",en:"Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight."},{es:"Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.",en:"I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes."},{es:"Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.",en:"Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture."},{es:"Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.",en:"What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me."},{es:"La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.",en:"The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another's. She will be another's. As she was before my kisses. Her voice, her bright body. Her infinite eyes."},{es:"Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.",en:"I no longer love her, that's certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her."}],vocab:[{es:"tiritan",en:"they shiver / tremble (from tiritar — rare, poetic)"},{es:"astros",en:"stars, heavenly bodies (more poetic than estrellas)"},{es:"el rocío",en:"the dew"},{es:"el pasto",en:"the grass, the pasture"},{es:"oído",en:"hearing, ear (inner ear — more intimate than oreja)"},{es:"el olvido",en:"forgetting, oblivion"},{es:"a lo lejos",en:"in the distance, far away"},{es:"no se contenta",en:"is not satisfied / cannot resign itself"}],learningNote:'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.'}]},{type:"takeaway",text:"A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did."}]},{id:"canciones",level:"A2-B1",title:"Canciones",subtitle:"Letras organizadas, traducidas y sin repeticiones",intro:"This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.",blocks:[{type:"foldable-songs",songs:lg},{type:"takeaway",text:"Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish."}]}]},{id:"palabras",label:"Palabras",sublabel:"5000 palabras agrupadas",chapters:[{id:"palabras-5000",level:"A1-B2",alwaysVisible:!0,title:"Banco de Palabras",subtitle:"Read, reveal, repeat",intro:"The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.",blocks:[{type:"vocab-lab"}]}]},{id:"frases",label:"Frases",sublabel:"Expresiones útiles",chapters:[{id:"f1",level:"A1",title:"Saludos y Cortesía",subtitle:"The first words you need",intro:"These are the phrases that open every conversation. Learn them by ear, repeat them out loud, and use them at every chance.",blocks:[{type:"phraselist",phrases:[{es:"Hola, ¿qué tal?",en:"Hi, how are you?"},{es:"Buenos días.",en:"Good morning."},{es:"Buenas tardes.",en:"Good afternoon."},{es:"Buenas noches.",en:"Good evening / good night."},{es:"Mucho gusto.",en:"Pleased to meet you."},{es:"Encantado / encantada.",en:"Delighted (to meet you)."},{es:"¿Cómo te llamas?",en:"What is your name?"},{es:"Me llamo Othman.",en:"My name is Othman."},{es:"¿De dónde eres?",en:"Where are you from?"},{es:"Soy de Marruecos.",en:"I am from Morocco."},{es:"Por favor.",en:"Please."},{es:"Gracias. — De nada.",en:"Thank you. — You are welcome."},{es:"Perdón. / Disculpe.",en:"Sorry. / Excuse me."},{es:"Hasta luego.",en:"See you later."},{es:"Hasta mañana.",en:"See you tomorrow."}]},{type:"takeaway",text:"These twenty phrases are the entry door. Repeat each one ten times before moving on. They will be the foundation of every spoken interaction."}]},{id:"f2",level:"B1",title:"Expresar Opiniones",subtitle:"Joining the conversation",intro:"At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.",blocks:[{type:"phraselist",phrases:[{es:"Creo que...",en:"I think that..."},{es:"En mi opinión...",en:"In my opinion..."},{es:"Desde mi punto de vista...",en:"From my point of view..."},{es:"Estoy de acuerdo contigo.",en:"I agree with you."},{es:"No estoy de acuerdo.",en:"I disagree."},{es:"Por un lado... por otro lado...",en:"On one hand... on the other hand..."},{es:"Lo que pasa es que...",en:"The thing is that..."},{es:"A decir verdad...",en:"To tell the truth..."},{es:"Hasta cierto punto.",en:"Up to a point."},{es:"No me parece bien.",en:"It does not seem right to me."},{es:"Vale la pena.",en:"It is worth it."},{es:"Sin lugar a dudas.",en:"Without a doubt."}]},{type:"tip",text:'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.'},{type:"takeaway",text:"Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud."}]}]},{id:"tips",label:"Tips",sublabel:"Estrategias",chapters:[{id:"t1",level:"A2",title:"Cómo Memorizar Verbos",subtitle:"A practical method",intro:"Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.",blocks:[{type:"steps",steps:[{title:"Sesión 1 — el contorno",text:"Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory."},{title:"Sesión 2 — el ejemplo",text:'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.'},{title:"Sesión 3 — la prueba",text:"Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone."}]},{type:"takeaway",text:"Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works."}]},{id:"t2",level:"B2",title:"Pensar en Español",subtitle:"Crossing the line into fluency",intro:"At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.",blocks:[{type:"steps",steps:[{title:"Narra tu día",text:'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.'},{title:"Cambia tus consumos",text:"Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume."},{title:"Lee en voz alta",text:"Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice."},{title:"Acepta los errores",text:"You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort."}]},{type:"takeaway",text:"Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use."}]}]},{id:"resumen",label:"Resumen",sublabel:"Lo que te llevas",chapters:[{id:"r1",level:"B1",title:"Lo Esencial",subtitle:"A handful of rules that carry the rest",intro:"If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.",blocks:[{type:"big-takeaways",items:[{n:"01",title:"Ser para esencia, estar para estado.",text:'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.'},{n:"02",title:"Aprende cada sustantivo con su artículo.",text:'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.'},{n:"03",title:"El subjuntivo es el modo de lo no real.",text:"Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque."},{n:"04",title:"Por mira atrás, para mira adelante.",text:"POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors."},{n:"05",title:"Si + imperfecto subjuntivo, condicional.",text:"The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly."},{n:"06",title:"Lee en voz alta, todos los días.",text:"Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit."}]},{type:"takeaway",text:"Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy."}]}]}];function ug(d){const y=[];let w="",c="normal";for(let p=0;p<d.length;p++){const h=d[p];h==="["?(w&&y.push({text:w,mode:c}),w="",c="irreg"):h==="]"?(w&&y.push({text:w,mode:"irreg"}),w="",c="normal"):h==="{"?(w&&y.push({text:w,mode:c}),w="",c="ending"):h==="}"?(w&&y.push({text:w,mode:"ending"}),w="",c="normal"):w+=h}return w&&y.push({text:w,mode:c}),y}function Bn({raw:d}){return i.jsx(i.Fragment,{children:ug(d).map((y,w)=>{const c=y.mode==="irreg"?"irreg":y.mode==="ending"?"ending":"";return i.jsx("span",{className:c,children:y.text},w)})})}function Go(d){return String(d||"").replace(/[\[\]{}]/g,"")}function Fp(d){return String(d||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\[\]{}]/g,"").replace(/[^a-z\sáéíóúñü]/g,"").trim()}function dg({tenses:d,verbName:y}){const[w,c]=G.useState(!1),[p,h]=G.useState([]),[k,b]=G.useState(0),[x,v]=G.useState(""),[U,L]=G.useState(null),[H,J]=G.useState(0),[W,Y]=G.useState(!1);function se(){const R=[];for(const O of d)for(const re of O.forms||[])R.push({tense:O.name,pronoun:re.p,answer:Go(re.f)});const Z=[...R].sort(()=>Math.random()-.5);return Z.slice(0,Math.min(8,Z.length))}function X(){h(se()),b(0),v(""),L(null),J(0),Y(!1),c(!0)}function te(R){if(R&&R.preventDefault(),U)return;const Z=p[k],O=Fp(x)===Fp(Z.answer);L(O?"correct":"incorrect"),O&&J(re=>re+1)}function ee(){if(k+1>=p.length){Y(!0);return}b(R=>R+1),v(""),L(null)}function ge(){window.speechSynthesis?.cancel(),c(!1)}const F=p[k],ne=p.length;return i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"quiz-trigger-btn",onClick:X,children:[i.jsx(pi,{size:14}),"Practicar"]}),w&&i.jsx("div",{className:"quiz-overlay",onClick:ge,children:i.jsxs("div",{className:"quiz-modal",onClick:R=>R.stopPropagation(),children:[i.jsxs("header",{className:"quiz-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"quiz-eyebrow",children:"Practicar conjugación"}),i.jsx("h2",{className:"quiz-title",children:y})]}),i.jsx("button",{className:"quiz-close",onClick:ge,"aria-label":"Close",children:i.jsx(en,{size:18})})]}),W?i.jsxs("div",{className:"quiz-results",children:[i.jsxs("div",{className:"quiz-results-circle",children:[i.jsxs("div",{className:"quiz-results-pct",children:[Math.round(H/ne*100),"%"]}),i.jsxs("div",{className:"quiz-results-fraction",children:[H," / ",ne]})]}),i.jsx("h3",{className:"quiz-results-title",children:H===ne?"¡Perfecto!":H>=ne*.75?"Muy bien":H>=ne*.5?"Sigue practicando":"Vamos a repasar"}),i.jsx("p",{className:"quiz-results-msg",children:H===ne?"Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.":H>=ne*.5?"Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.":"Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos."}),i.jsxs("div",{className:"quiz-results-actions",children:[i.jsxs("button",{className:"quiz-retry-btn",onClick:X,children:[i.jsx(ig,{size:14}),"Otra vez"]}),i.jsx("button",{className:"quiz-done-btn",onClick:ge,children:"Cerrar"})]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"quiz-progress",children:[i.jsxs("div",{className:"quiz-progress-text",children:["Pregunta ",k+1," de ",ne]}),i.jsx("div",{className:"quiz-progress-bar",children:i.jsx("div",{className:"quiz-progress-fill",style:{width:`${k/ne*100}%`}})})]}),i.jsxs("div",{className:"quiz-question",children:[i.jsx("div",{className:"quiz-tense-label",children:F.tense}),i.jsxs("div",{className:"quiz-prompt",children:[i.jsx("span",{className:"quiz-pronoun",children:F.pronoun}),i.jsx("span",{className:"quiz-blank",children:"________"})]}),i.jsxs("div",{className:"quiz-instruction",children:["Conjuga el verbo ",i.jsx("em",{children:y.toLowerCase()})," para esta persona."]})]}),i.jsxs("form",{onSubmit:te,className:"quiz-form",children:[i.jsx("input",{type:"text",className:`quiz-input ${U||""}`,value:x,onChange:R=>v(R.target.value),placeholder:"Escribe tu respuesta…",autoFocus:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false",disabled:!!U}),!U&&i.jsx("button",{type:"submit",className:"quiz-check-btn",disabled:!x.trim(),children:"Comprobar"})]}),U&&i.jsxs("div",{className:`quiz-feedback ${U}`,children:[U==="correct"?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"quiz-feedback-icon",children:i.jsx(eg,{size:18})}),i.jsxs("div",{children:[i.jsx("div",{className:"quiz-feedback-title",children:"¡Correcto!"}),i.jsx("div",{className:"quiz-feedback-answer",children:F.answer})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"quiz-feedback-icon",children:i.jsx(en,{size:18})}),i.jsxs("div",{children:[i.jsx("div",{className:"quiz-feedback-title",children:"No es correcto"}),i.jsxs("div",{className:"quiz-feedback-answer",children:["La respuesta es: ",i.jsx("strong",{children:F.answer})]})]})]}),i.jsx(aa,{text:F.answer,size:"md",className:"quiz-feedback-speak"})]}),U&&i.jsxs("button",{className:"quiz-next-btn",onClick:ee,children:[k+1>=ne?"Ver resultados":"Siguiente",i.jsx(Qo,{size:16})]}),i.jsxs("div",{className:"quiz-score-line",children:["Puntuación: ",i.jsx("strong",{children:H})," / ",k+(U?1:0)]})]})]})})]})}let Bo=null,Pp=!1;function pg(){return typeof window>"u"||!window.speechSynthesis?[]:window.speechSynthesis.getVoices()||[]}function Pt(){if(typeof window>"u"||!window.speechSynthesis)return null;if(Bo)return Bo;const d=pg();if(d.length===0)return null;const y=["es-ES","es-MX","es-US","es-AR","es-CO","es-419","es"];for(const c of y){const p=d.find(h=>h.lang&&h.lang.toLowerCase().startsWith(c.toLowerCase()));if(p)return Bo=p,p}const w=d.find(c=>/spanish|español/i.test(c.name||""));return w?(Bo=w,w):null}typeof window<"u"&&window.speechSynthesis&&(window.speechSynthesis.addEventListener?.("voiceschanged",()=>{Bo=null,Pt()}),Pt(),setTimeout(Pt,250),setTimeout(Pt,1e3));function Rr(){if(!Pp&&!(typeof window>"u"||!window.speechSynthesis))try{const d=new SpeechSynthesisUtterance(" ");d.volume=0,d.rate=1,window.speechSynthesis.speak(d),Pp=!0}catch{}}function cm(d,y={}){if(typeof window>"u"||!window.speechSynthesis||!d)return y.onerror&&y.onerror({error:"no-speechSynthesis"}),null;try{window.speechSynthesis.cancel();const w=new SpeechSynthesisUtterance(d),c=Pt();c&&(w.voice=c),w.lang=c?.lang||"es-ES",w.rate=y.rate??.78,w.pitch=y.pitch??1,w.volume=1,y.onend&&(w.onend=y.onend),y.onerror&&(w.onerror=k=>{console.warn("[speech] error:",k?.error||"unknown",{text:d.slice(0,30),voice:c?.name}),y.onerror(k)}),y.onboundary&&(w.onboundary=y.onboundary),y.onstart&&(w.onstart=y.onstart),window.speechSynthesis.speak(w);const p=setInterval(()=>{if(!window.speechSynthesis.speaking){clearInterval(p);return}window.speechSynthesis.pause(),window.speechSynthesis.resume()},14e3),h=w.onend;return w.onend=k=>{clearInterval(p),h&&h(k)},w}catch(w){return console.warn("[speech] threw:",w),y.onerror&&y.onerror({error:w.message}),null}}function fi({text:d,paragraphClass:y="reading-paragraph",firstParagraph:w=!1}){const c=G.useMemo(()=>{const Y=[];let se=0;const X=/([a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)|([^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)/g;let te;for(;(te=X.exec(d))!==null;){const ee=!!te[1];Y.push({text:te[0],isWord:ee,charStart:se}),se+=te[0].length}return Y},[d]),p=G.useMemo(()=>{const Y=[];let se="",X=[],te=-1;function ee(){X.length>0&&Y.push({spokenText:se.trim(),words:X}),se="",X=[],te=-1}for(let ge=0;ge<c.length;ge++){const F=c[ge];se+=F.text,F.isWord?(X.push({tokenIdx:ge,text:F.text,commaAfter:!1}),te=X.length-1):(/,/.test(F.text)&&te>=0&&(X[te].commaAfter=!0),/[.!?;:]/.test(F.text)&&ee())}return ee(),Y},[c]),[h,k]=G.useState(-1),[b,x]=G.useState(!1),v=Ft.useRef([]),U=Ft.useRef([]),L=Ft.useRef(!1),H=Ft.useRef(110);function J(){U.current.forEach(clearTimeout),U.current=[]}function W(Y){if(Y.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(Rr(),b){L.current=!0,window.speechSynthesis?.cancel(),J(),x(!1),k(-1);return}if(p.length===0)return;window.speechSynthesis?.cancel(),J(),L.current=!1,x(!0),H.current=110;let se=0;function X(){if(L.current)return;if(se>=p.length){x(!1),k(-1);return}const te=p[se];if(!te||te.words.length===0){se++,X();return}k(te.words[0].tokenIdx);const ee=new SpeechSynthesisUtterance(te.spokenText),ge=Pt();ge&&(ee.voice=ge),ee.lang=ge?.lang||"es-ES",ee.rate=.85,ee.pitch=1;let F=!1,ne=!1,R=0;const Z=30,O=200;function re(){let Re=0;for(let q=0;q<te.words.length;q++){const D=te.words[q],ue=setTimeout(()=>{L.current||k(D.tokenIdx)},Re);U.current.push(ue),Re+=D.text.length*H.current+Z,D.commaAfter&&(Re+=O)}}ee.onstart=()=>{F||(F=!0,R=performance.now(),re())};const ze=setTimeout(()=>{!F&&!L.current&&(F=!0,R=performance.now(),re())},500);U.current.push(ze);function ie(){if(ne||(ne=!0,L.current))return;if(R>0){const q=performance.now()-R,D=te.words.reduce((m,T)=>m+T.text.length,0),$=te.words.filter(m=>m.commaAfter).length,ue=te.words.length*Z+$*O,we=Math.max(100,q-ue);if(D>0){const m=we/D;m>=40&&m<=300&&(H.current=m*.6+H.current*.4)}}J(),se++;const Re=setTimeout(X,30);U.current.push(Re)}ee.onend=ie,ee.onerror=ie;const Te=Math.max(5e3,te.spokenText.length*220),Fe=setTimeout(ie,Te);U.current.push(Fe),window.speechSynthesis.speak(ee)}X()}return G.useEffect(()=>()=>{L.current=!0,J(),b&&window.speechSynthesis?.cancel()},[]),G.useEffect(()=>{if(h<0)return;const Y=v.current[h];if(!Y||typeof Y.getBoundingClientRect!="function")return;const se=Y.getBoundingClientRect(),X=window.innerHeight||document.documentElement.clientHeight;(se.bottom>X-100||se.top<80)&&Y.scrollIntoView({behavior:"smooth",block:"center"})},[h]),typeof window<"u"&&!window.speechSynthesis?i.jsxs("p",{className:y,children:[i.jsx("button",{className:"speak-btn speak-btn-sm paragraph-speak",onClick:Y=>{Y.stopPropagation(),alert("Tu navegador no soporta lectura en voz alta.")},"aria-label":"Audio not supported",title:"Audio no disponible",children:i.jsx(Lr,{size:12})}),d]}):i.jsxs("p",{className:`${y} karaoke-paragraph ${b?"is-playing":""}`,children:[i.jsx("button",{className:`speak-btn speak-btn-sm paragraph-speak ${b?"playing":""}`,onClick:W,onPointerDown:Y=>Y.stopPropagation(),"aria-label":b?"Stop":"Play audio with highlighting",title:b?"Detener":"Escuchar con resaltado",children:i.jsx(Lr,{size:12})}),c.map((Y,se)=>{if(!Y.isWord)return i.jsx("span",{className:"kt-space",children:Y.text},se);const X=se===h;return i.jsx("span",{ref:te=>v.current[se]=te,className:`kt-word ${X?"kt-active":""}`,children:Y.text},se)})]})}function aa({text:d,size:y="sm",className:w=""}){const[c,p]=G.useState(!1);function h(k){if(k.stopPropagation(),typeof window>"u"||!window.speechSynthesis){alert("Tu navegador no soporta lectura en voz alta.");return}if(Rr(),c){window.speechSynthesis?.cancel(),p(!1);return}p(!0),cm(d,{onend:()=>p(!1),onerror:b=>{p(!1),b?.error&&b.error!=="canceled"&&b.error!=="interrupted"&&alert("Error al leer: "+b.error+". Asegúrate de tener una voz en español instalada.")}})}return i.jsx("button",{className:`speak-btn speak-btn-${y} ${c?"playing":""} ${w}`,onClick:h,onPointerDown:k=>k.stopPropagation(),"aria-label":c?"Stop":"Play audio",title:c?"Detener":"Escuchar",children:i.jsx(Lr,{size:y==="sm"?12:14})})}function ui({es:d,en:y,esClass:w="vu-ex-es",enClass:c="vu-ex-en"}){const p=(d||"").length,h=(y||"").length;return p<=18&&h<=18&&p+h<=36?i.jsxs("div",{className:`${w} inline-pair`,children:[i.jsx(aa,{text:d}),d," ",i.jsxs("span",{className:`${c} inline-en`,children:["(",y,")"]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:w,children:[i.jsx(aa,{text:d}),d]}),i.jsx("div",{className:c,children:y})]})}function mg({s:d}){return i.jsxs("div",{className:"gl-section",children:[d.heading&&i.jsx("h3",{className:"gl-heading",children:d.heading}),d.text&&i.jsx("p",{className:"gl-text",children:d.text}),d.table&&i.jsx("div",{className:"lesson-table-wrap",children:i.jsxs("table",{className:"lesson-table gl-table",children:[d.table.headers&&i.jsx("thead",{children:i.jsx("tr",{children:d.table.headers.map((y,w)=>i.jsx("th",{children:y},w))})}),i.jsx("tbody",{children:d.table.rows.map((y,w)=>i.jsx("tr",{children:y.map((c,p)=>i.jsx("td",{children:p===0?c:i.jsx(Bn,{raw:String(c)})},p))},w))})]})}),d.examples&&i.jsx("ul",{className:"gl-examples",children:d.examples.map((y,w)=>i.jsx("li",{children:i.jsx(ui,{es:y.es,en:y.en,esClass:"gl-ex-es",enClass:"gl-ex-en"})},w))}),d.tip&&i.jsxs("aside",{className:"gl-tip",children:[i.jsx(Xo,{size:16,className:"gl-tip-icon"}),i.jsx("p",{children:d.tip})]}),d.takeaway&&i.jsxs("aside",{className:"gl-takeaway",children:[i.jsxs("div",{className:"gl-takeaway-label",children:[i.jsx(lm,{size:12})," Lo que te llevas"]}),i.jsx("p",{children:d.takeaway})]})]})}const fg={A1:{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},A2:{bg:"#E6F1FB",color:"#185FA5",border:"#B5D4F4"},B1:{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},B2:{bg:"#EEEDFE",color:"#534AB7",border:"#CECBF6"}};function em({level:d}){const y=fg[d]||{};return i.jsx("span",{className:"bio-level-badge",style:{background:y.bg,color:y.color,borderColor:y.border},children:d})}function hg({poems:d}){const[y,w]=G.useState(null);function c(p){w(h=>h===p?null:p)}return i.jsx("section",{className:"block foldable-poems",children:d.map((p,h)=>{const k=y===h;return i.jsxs("div",{className:`poem-item ${k?"open":"closed"}`,children:[i.jsxs("button",{className:"poem-toggle",onClick:()=>c(h),"aria-expanded":k,children:[i.jsxs("div",{className:"poem-toggle-inner",children:[i.jsx("span",{className:"poem-num",children:String(h+1).padStart(2,"0")}),i.jsxs("div",{className:"poem-toggle-text",children:[i.jsx("span",{className:"poem-title-line",children:p.title}),i.jsx("span",{className:"poem-attribution",children:p.attribution})]})]}),i.jsxs("div",{className:"poem-toggle-right",children:[i.jsx("span",{className:"poem-level-tag",children:p.level}),i.jsx(Yn,{size:18,className:`poem-chevron ${k?"open":""}`})]})]}),k&&i.jsxs("div",{className:"poem-body",children:[p.note&&i.jsx("p",{className:"poem-intro-note",children:p.note}),p.opening&&i.jsxs("blockquote",{className:"poem-opening-quote",children:[i.jsx(aa,{text:p.opening,size:"md",className:"poem-quote-speak"}),p.opening]}),i.jsxs("div",{className:"poem-tools",children:[i.jsx(aa,{text:p.stanzas.map(b=>b.es).join(". "),size:"md"}),i.jsx("span",{className:"poem-speak-label",children:"Escuchar el poema"})]}),i.jsx("div",{className:"poem-stanzas",children:p.stanzas.map((b,x)=>i.jsxs("div",{className:"poem-stanza",children:[i.jsx("div",{className:"poem-stanza-num",children:x+1}),i.jsx(fi,{text:b.es,paragraphClass:"poem-stanza-es"}),i.jsx("div",{className:"poem-stanza-en",children:b.en})]},x))}),p.vocab&&p.vocab.length>0&&i.jsxs("div",{className:"poem-vocab-block",children:[i.jsx("div",{className:"poem-vocab-label",children:"Vocabulario poético"}),i.jsx("div",{className:"poem-vocab-grid",children:p.vocab.map((b,x)=>i.jsxs("div",{className:"poem-vocab-row",children:[i.jsx("span",{className:"poem-vocab-es",children:b.es}),i.jsx("span",{className:"poem-vocab-dash",children:"—"}),i.jsx("span",{className:"poem-vocab-en",children:b.en})]},x))})]}),p.learningNote&&i.jsxs("aside",{className:"poem-learning-note",children:[i.jsxs("div",{className:"poem-learning-label",children:[i.jsx(Xo,{size:14})," Nota de lectura"]}),i.jsx("p",{children:p.learningNote})]})]})]},h)})})}function gg({songs:d}){const[y,w]=G.useState(null);function c(p){w(h=>h===p?null:p)}return i.jsx("section",{className:"block foldable-poems foldable-songs",children:d.map((p,h)=>{const k=y===h,b=p.sections.map(x=>x.es).join(". ");return i.jsxs("div",{className:`poem-item song-item ${k?"open":"closed"}`,children:[i.jsxs("button",{className:"poem-toggle",onClick:()=>c(h),"aria-expanded":k,children:[i.jsxs("div",{className:"poem-toggle-inner",children:[i.jsx("span",{className:"poem-num",children:String(h+1).padStart(2,"0")}),i.jsxs("div",{className:"poem-toggle-text",children:[i.jsx("span",{className:"poem-title-line",children:p.title}),i.jsx("span",{className:"poem-attribution",children:p.attribution})]})]}),i.jsxs("div",{className:"poem-toggle-right",children:[i.jsx("span",{className:"poem-level-tag",children:p.level}),i.jsx(Yn,{size:18,className:`poem-chevron ${k?"open":""}`})]})]}),k&&i.jsxs("div",{className:"poem-body song-body",children:[i.jsx("p",{className:"poem-intro-note",children:p.note}),i.jsxs("div",{className:"poem-tools",children:[i.jsx(aa,{text:b,size:"md"}),i.jsx("span",{className:"poem-speak-label",children:"Escuchar secciones"})]}),i.jsx("div",{className:"song-sections",children:p.sections.map((x,v)=>i.jsxs("div",{className:"song-section",children:[i.jsxs("div",{className:"song-section-label",children:[String(v+1).padStart(2,"0")," · ",x.label]}),i.jsxs("div",{className:"song-section-grid",children:[i.jsx(fi,{text:x.es,paragraphClass:"song-lyric-es"}),i.jsx("p",{className:"song-lyric-en",children:x.en})]})]},x.label))}),p.vocab&&p.vocab.length>0&&i.jsxs("div",{className:"poem-vocab-block song-vocab-block",children:[i.jsx("div",{className:"poem-vocab-label",children:"Vocabulario de la canción"}),i.jsx("div",{className:"poem-vocab-grid",children:p.vocab.map((x,v)=>i.jsxs("div",{className:"poem-vocab-row",children:[i.jsx("span",{className:"poem-vocab-es",children:x.es}),i.jsx("span",{className:"poem-vocab-dash",children:"—"}),i.jsx("span",{className:"poem-vocab-en",children:x.en})]},v))})]}),p.learningNote&&i.jsxs("aside",{className:"poem-learning-note",children:[i.jsxs("div",{className:"poem-learning-label",children:[i.jsx(Xo,{size:14})," Nota de canción"]}),i.jsx("p",{children:p.learningNote})]})]})]},p.title)})})}function bg({bios:d}){const[y,w]=G.useState(null);function c(p){w(h=>h===p?null:p)}return i.jsx("section",{className:"block foldable-bios",children:d.map((p,h)=>{const k=y===h;return i.jsxs("div",{className:`bio-item ${k?"open":"closed"}`,children:[i.jsxs("button",{className:"bio-toggle",onClick:()=>c(h),"aria-expanded":k,children:[i.jsxs("div",{className:"bio-toggle-left",children:[i.jsx("span",{className:"bio-num",children:String(h+1).padStart(2,"0")}),i.jsxs("div",{className:"bio-toggle-text",children:[i.jsx("span",{className:"bio-name",children:p.title}),i.jsx("span",{className:"bio-subtitle-line",children:p.subtitle}),i.jsx("span",{className:"bio-dates",children:p.dates})]})]}),i.jsxs("div",{className:"bio-toggle-right",children:[i.jsx("div",{className:"bio-level-pills",children:[...new Set(p.levels.map(b=>b.level))].map(b=>i.jsx(em,{level:b},b))}),i.jsx(Yn,{size:18,className:`bio-chevron ${k?"open":""}`})]})]}),k&&i.jsx("div",{className:"bio-body",children:p.levels.map((b,x)=>i.jsxs("div",{className:"bio-section",children:[i.jsxs("div",{className:"bio-section-header",children:[i.jsx(em,{level:b.level}),i.jsx("h3",{className:"bio-section-title",children:b.heading}),i.jsx(aa,{text:b.paragraphs.join(" "),size:"md",className:"bio-section-speak"})]}),b.paragraphs.map((v,U)=>i.jsx(fi,{text:v,paragraphClass:"bio-paragraph"},U)),b.vocab&&i.jsxs("div",{className:"bio-vocab",children:[i.jsx("span",{className:"bio-vocab-label",children:"Vocabulario"}),b.vocab]})]},x))})]},h)})})}function vg({lessons:d}){const[y,w]=G.useState(null);function c(p){w(h=>h===p?null:p)}return i.jsx("section",{className:"block foldable-grammar",children:d.map((p,h)=>{const k=y===h;return i.jsxs("div",{className:`gl-item ${k?"open":"closed"}`,children:[i.jsxs("button",{className:"gl-toggle",onClick:()=>c(h),"aria-expanded":k,"touch-action":"manipulation",children:[i.jsx("span",{className:"gl-num",children:String(h+1).padStart(2,"0")}),i.jsx("span",{className:"gl-level-badge",children:p.level}),i.jsxs("div",{className:"gl-toggle-text",children:[i.jsx("span",{className:"gl-title",children:p.title}),i.jsx("span",{className:"gl-subtitle",children:p.subtitle})]}),i.jsx(Yn,{size:18,className:`gl-chevron ${k?"open":""}`})]}),k&&i.jsxs("div",{className:"gl-body",children:[p.intro&&i.jsx("p",{className:"gl-intro",children:p.intro}),p.sections.map((b,x)=>i.jsx(mg,{s:b},x))]})]},h)})})}function yg({stories:d}){const[y,w]=G.useState(null);function c(p){w(h=>h===p?null:p)}return i.jsx("section",{className:"block foldable-stories",children:d.map((p,h)=>{const k=y===h;return i.jsxs("div",{className:`fold-item ${k?"open":"closed"}`,children:[i.jsxs("button",{className:"fold-toggle",onClick:()=>c(h),"aria-expanded":k,children:[i.jsx("span",{className:"fold-num",children:String(h+1).padStart(2,"0")}),i.jsx("span",{className:"fold-level",children:p.level}),i.jsx("span",{className:"fold-title",children:p.title}),i.jsx(Yn,{size:18,className:`fold-chevron ${k?"open":""}`})]}),k&&i.jsxs("div",{className:"fold-body",children:[i.jsxs("div",{className:"story-tools",children:[i.jsx(aa,{text:p.paragraphs.join(" "),size:"md",className:"story-speak-all"}),i.jsx("span",{className:"story-speak-label",children:"Escuchar el cuento"})]}),p.paragraphs.map((b,x)=>i.jsx(fi,{text:b,paragraphClass:"reading-paragraph"},x))]})]},h)})})}const am="palabras-progress-v1",xg=1440*60*1e3;function um(d,y){return`${d}::${y.rank}::${y.spanish}`}function Hr(d,y){return y.sourceGroupId||d.id}function di(d,y){return um(Hr(d,y),y)}function mi(d){return String(d).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[¿?¡!.,;:()"']/g,"").replace(/\s+/g," ").replace(/^(el|la|los|las|un|una|unos|unas)\s+/,"").trim()}const wg=[{id:"topic-work-professions",title:"Trabajo y Profesiones",description:"A focused work-life deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"el trabajo",english:"work, job"},{spanish:"la oficina",english:"office"},{spanish:"el despacho",english:"private office, study"},{spanish:"la reunión",english:"meeting"},{spanish:"el cliente",english:"client"},{spanish:"el contrato",english:"contract"},{spanish:"el abogado",english:"lawyer"},{spanish:"el juez",english:"judge"},{spanish:"el tribunal",english:"court"},{spanish:"la demanda",english:"lawsuit, claim"},{spanish:"el sueldo",english:"salary"},{spanish:"el horario",english:"schedule"},{spanish:"el jefe",english:"boss"},{spanish:"el empleado",english:"employee"},{spanish:"la empresa",english:"company"},{spanish:"el negocio",english:"business"},{spanish:"el plazo",english:"deadline, term"},{spanish:"la firma",english:"signature"}]},{id:"topic-emotions-feelings",title:"Emociones y Sentimientos",description:"A focused feelings deck merged into the vocabulary bank without repeating existing entries.",terms:[{spanish:"la alegría",english:"joy"},{spanish:"la tristeza",english:"sadness"},{spanish:"el miedo",english:"fear"},{spanish:"la rabia",english:"rage"},{spanish:"el orgullo",english:"pride"},{spanish:"la vergüenza",english:"shame"},{spanish:"la culpa",english:"guilt"},{spanish:"el alivio",english:"relief"},{spanish:"la nostalgia",english:"nostalgia"},{spanish:"la añoranza",english:"longing"},{spanish:"el cariño",english:"affection"},{spanish:"el rencor",english:"resentment"},{spanish:"la esperanza",english:"hope"},{spanish:"la duda",english:"doubt"},{spanish:"la ilusión",english:"excitement, hope"},{spanish:"el desánimo",english:"discouragement"}]}];function jg(d){const y=new Map;for(const w of d||[])for(const c of w.entries||[]){const p=mi(c.spanish);y.has(p)||y.set(p,{...c,sourceGroupId:w.id,sourceGroupTitle:w.title})}return wg.map(w=>{const c=new Set,p=w.terms.map((h,k)=>{const b=mi(h.spanish);if(c.has(b))return null;c.add(b);const x=y.get(b),v=h.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i,"").trim();return{...x||{rank:`T${k+1}`,spanish:v,english:h.english,sourceGroupId:w.id,sourceGroupTitle:w.title},topicTerm:h.spanish,topicEnglish:h.english,topicOrder:k+1}}).filter(Boolean);return{id:w.id,title:w.title,description:w.description,entries:p,isTopic:!0}})}function Ut(d){return d.topicTerm||d.spanish}function Ro(d){return d.topicEnglish||d.english}function zg(d,y,w=Date.now()){const c=d?.intervalDays||0,p=d?.ease||2.35,h=d?.reps||0,k={again:{label:"Again",easeDelta:-.18,minDays:10/1440,multiplier:.2},hard:{label:"Hard",easeDelta:-.08,minDays:1,multiplier:1.15},good:{label:"Good",easeDelta:.02,minDays:h?2:1,multiplier:p},easy:{label:"Easy",easeDelta:.12,minDays:h?4:3,multiplier:p+.7}}[y]||{label:"Good",easeDelta:0,minDays:1,multiplier:p},b=Math.max(1.35,Math.min(3.2,p+k.easeDelta)),x=y==="again"?k.minDays:Math.max(k.minDays,(c||1)*k.multiplier);return{...d,ease:b,intervalDays:x,dueAt:w+x*xg,reps:y==="again"?0:h+1,lapses:y==="again"?(d?.lapses||0)+1:d?.lapses||0,seen:!0,mastered:y==="easy"||x>=7,lastRating:k.label,reviewedAt:w}}function Sg(d,y,w=Date.now()){const c={total:0,seen:0,due:0,mastered:0,byGroup:{}},p=new Set;for(const h of d||[]){const k={total:h.entries.length,seen:0,due:0,mastered:0};for(const b of h.entries){const x=di(h,b),v=y[x],U=p.has(x);U||(p.add(x),c.total++),v?.seen&&(k.seen++,U||c.seen++,v.mastered&&(k.mastered++,U||c.mastered++),(v.dueAt||0)<=w&&(k.due++,U||c.due++))}c.byGroup[h.id]=k}return c}function tm(d,y){const w=d.spanish.split(",")[0].trim();return y==="topic-work-professions"?{es:`En mi trabajo uso "${w}" con frecuencia.`,en:`At work I use "${w}" often.`}:y==="topic-emotions-feelings"?{es:`Hoy puedo nombrar "${w}" con calma.`,en:`Today I can name "${w}" calmly.`}:y==="function-words"?{es:`Uso "${w}" para unir una idea con otra.`,en:`"${w}" helps connect one idea to another.`}:/^to /.test(d.english)?{es:`Hoy necesito ${w} en una frase clara.`,en:`Today I need "${w}" in a clear sentence.`}:{es:`Escribo "${w}" en mi cuaderno de espanol.`,en:`"${w}" means ${Ro(d)}.`}}function kg({onSaveWord:d,progress:y={},onProgressChange:w}){const[c,p]=G.useState(null),[h,k]=G.useState(""),[b,x]=G.useState(""),[v,U]=G.useState(0),[L,H]=G.useState({}),[J,W]=G.useState(!1),[Y,se]=G.useState(!1),[X,te]=G.useState(!1),[ee,ge]=G.useState(0),[F,ne]=G.useState(!1);G.useEffect(()=>{let _=!0;return Ih(()=>import("./vocab-groups-BHSaJJBw.js"),[]).then(he=>{if(!_)return;const ce=he.default||[],Oe=[...ce,...jg(ce)];p(Oe),k(Le=>Le||Oe[0]?.id||"")}),()=>{_=!1}},[]);const R=!c,Z=c?.find(_=>_.id===h)||c?.[0]||{id:"loading",title:"Cargando palabras",description:"",entries:[]},O=G.useMemo(()=>{const _=mi(b),he=_?Z.entries.filter(Oe=>[Oe.spanish,Oe.english,Oe.topicTerm,Oe.topicEnglish,String(Oe.rank)].some(Le=>mi(Le||"").includes(_))):Z.entries;if(!Y)return he;const ce=Date.now();return he.filter(Oe=>{const Le=y[di(Z,Oe)];return Le?.seen&&(Le.dueAt||0)<=ce})},[Z,b,Y,y]),re=24,ze=Math.min(v,Math.max(0,O.length-1)),ie=O.slice(ze,ze+re),Te=ie.map(_=>Ut(_)).join(". "),Re=G.useMemo(()=>Sg(c||[],y),[c,y]).byGroup[Z.id]||{total:Z.entries.length,seen:0,due:0,mastered:0},q=74,D=420,$=Math.max(0,Math.floor(ee/q)-4),ue=Math.min(O.length,$+Math.ceil(D/q)+10),we=O.slice($,ue);if(G.useEffect(()=>{U(0),H({}),ge(0)},[h,b,Y]),R)return i.jsx("section",{className:"block palabras-lab",children:i.jsxs("div",{className:"palabras-empty",children:[i.jsx(pi,{size:24}),i.jsx("p",{children:"Cargando palabras..."})]})});function m(){U(_=>_+re>=O.length?0:_+re),H({})}function T(){const _=Math.max(0,O.length-re);U(Math.floor(Math.random()*(_+1))),H({})}function B(_){const he=`${Z.id}-${_.rank}-${_.spanish}`;H(ce=>({...ce,[he]:!ce[he]}))}function Q(_,he){const ce=Hr(Z,_),Oe=um(ce,_),Le={...y,[Oe]:{...zg(y[Oe],he),groupId:ce,displayGroupId:Z.id,topicId:Z.isTopic?Z.id:void 0,spanish:Ut(_),english:Ro(_),rank:_.rank}};w?.(Le),H(ga=>({...ga,[`${Z.id}-${_.rank}-${_.spanish}`]:!0}))}function oe(){if(!ie.length)return;if(Rr(),F){window.speechSynthesis?.cancel(),ne(!1);return}const _=ie.flatMap(he=>{const ce=tm(he,Z.id);return[Ut(he),ce.es,Ut(he)]});ne(!0),cm(_.join(". "),{onend:()=>ne(!1),onerror:()=>ne(!1)})}function pe(_){const he=Hr(Z,_),ce=Z.isTopic&&_.sourceGroupTitle?`Source ${_.sourceGroupTitle}`:null;d?.({word:Ut(_),translation:Ro(_),pos:Z.isTopic?`${Z.title} topic`:Z.title,extras:[`Rank ${_.rank}`,Z.description,ce].filter(Boolean),tags:["palabras",Z.id,he].filter(Boolean),savedAt:Date.now()})}return i.jsxs("section",{className:"block palabras-lab",children:[i.jsxs("div",{className:"palabras-toolbar",children:[i.jsx("div",{className:"palabras-group-tabs",role:"tablist","aria-label":"Vocabulary groups",children:c.map(_=>i.jsxs("button",{className:`palabras-tab ${_.id===Z.id?"active":""}`,onClick:()=>k(_.id),role:"tab","aria-selected":_.id===Z.id,children:[i.jsx("span",{children:_.title.replace(/^Group /,"G")}),i.jsx("strong",{children:_.entries.length})]},_.id))}),i.jsxs("label",{className:"palabras-search",children:[i.jsx("span",{children:"Buscar"}),i.jsx("input",{value:b,onChange:_=>x(_.target.value),placeholder:"palabra, meaning, rank..."})]})]}),i.jsxs("div",{className:"palabras-stage",children:[i.jsxs("div",{className:"palabras-stage-copy",children:[i.jsx("div",{className:"palabras-stage-kicker",children:Z.isTopic?"Tema integrado":"Grupo intacto"}),i.jsx("h2",{children:Z.title}),i.jsx("p",{children:Z.description})]}),i.jsxs("div",{className:"palabras-stage-stats",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Mostrando"}),i.jsx("strong",{children:ie.length})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Filtradas"}),i.jsx("strong",{children:O.length})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Entrada"}),i.jsx("strong",{children:O.length?ze+1:0})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Vencidas"}),i.jsx("strong",{children:Re.due})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Vistas"}),i.jsx("strong",{children:Re.seen})]}),i.jsxs("div",{children:[i.jsx("span",{children:"Dominadas"}),i.jsx("strong",{children:Re.mastered})]})]})]}),i.jsxs("div",{className:"palabras-actions",children:[i.jsx(aa,{text:Te,size:"md",className:"palabras-read-btn"}),i.jsx("button",{className:`palabras-action-btn ${F?"active":""}`,onClick:oe,children:F?"Escuchando...":"Escucha activa"}),i.jsx("button",{className:`palabras-action-btn ${Y?"active":""}`,onClick:()=>se(_=>!_),children:Y?"Todas":"Vencidas"}),i.jsx("button",{className:"palabras-action-btn",onClick:()=>W(_=>!_),children:J?"Ocultar ingles":"Mostrar ingles"}),i.jsx("button",{className:"palabras-action-btn",onClick:m,children:"Siguiente ronda"}),i.jsx("button",{className:"palabras-action-btn",onClick:T,children:"Barajar"}),i.jsx("button",{className:`palabras-action-btn ${X?"active":""}`,onClick:()=>te(_=>!_),children:"Lista completa"})]}),ie.length?i.jsx("div",{className:"palabras-grid",children:ie.map(_=>{const he=`${Z.id}-${_.rank}-${_.spanish}`,ce=J||L[he],Oe=y[di(Z,_)],Le=tm(_,Z.id);return i.jsxs("article",{className:`palabra-card ${ce?"revealed":""}`,children:[i.jsxs("button",{className:"palabra-main",onClick:()=>B(_),children:[i.jsxs("span",{className:"palabra-rank",children:["#",_.rank]}),i.jsx("span",{className:"palabra-es",children:Ut(_)}),i.jsx("span",{className:"palabra-en",children:ce?Ro(_):"..."}),ce&&i.jsxs("span",{className:"palabra-example",children:[i.jsx("span",{children:Le.es}),i.jsx("em",{children:Le.en})]})]}),i.jsxs("div",{className:"palabra-card-actions",children:[i.jsx(aa,{text:Ut(_)}),i.jsxs("button",{className:"palabra-save",onClick:()=>pe(_),children:[i.jsx(Rn,{size:13}),"Memoria"]})]}),i.jsx("div",{className:"palabra-review-actions",children:["again","hard","good","easy"].map(ga=>i.jsx("button",{onClick:()=>Q(_,ga),children:ga==="again"?"Again":ga==="hard"?"Hard":ga==="good"?"Good":"Easy"},ga))}),Oe?.seen&&i.jsx("div",{className:"palabra-review-state",children:Oe.mastered?"Dominada":`Due ${new Date(Oe.dueAt||Date.now()).toLocaleDateString()}`})]},he)})}):i.jsxs("div",{className:"palabras-empty",children:[i.jsx(pi,{size:24}),i.jsx("p",{children:"No words match this search in the selected group."})]}),X&&i.jsxs("div",{className:"palabras-browser",children:[i.jsxs("div",{className:"palabras-browser-head",children:[i.jsx("span",{children:"Lista virtual"}),i.jsxs("strong",{children:[O.length," palabras"]})]}),i.jsx("div",{className:"palabras-virtual-list",style:{height:D},onScroll:_=>ge(_.currentTarget.scrollTop),children:i.jsx("div",{style:{height:O.length*q,position:"relative"},children:i.jsx("div",{style:{transform:`translateY(${$*q}px)`},children:we.map(_=>{const he=y[di(Z,_)];return i.jsxs("div",{className:"palabras-virtual-row",style:{height:q},children:[i.jsxs("span",{className:"palabra-rank",children:["#",_.rank]}),i.jsx("strong",{children:Ut(_)}),i.jsx("span",{children:Ro(_)}),i.jsx("button",{onClick:()=>Q(_,"good"),children:he?.seen?"Actualizar":"Visto"})]},`${_.rank}-${_.spanish}`)})})})})]})]})}function Ng({chapter:d,sectionId:y,onSaveWord:w,palabrasProgress:c,onPalabrasProgressChange:p}){return i.jsxs("article",{className:"chapter-body",children:[i.jsxs("header",{className:"chapter-header",children:[i.jsxs("div",{className:"chapter-icon-row",children:[y&&i.jsx("div",{className:"chapter-icon-wrap",children:i.jsx(rm,{id:y,size:22})}),i.jsxs("div",{className:"chapter-level-tag",children:[d.rank?`Nº ${String(d.rank).padStart(2,"0")} · `:"","Nivel ",d.level]})]}),i.jsx("h1",{className:"chapter-title",children:d.title}),d.subtitle&&i.jsx("p",{className:"chapter-subtitle",children:d.subtitle}),i.jsx("div",{className:"chapter-rule"})]}),d.intro&&i.jsx("p",{className:"chapter-intro drop-cap",children:d.intro}),d.blocks.map((h,k)=>{switch(h.type){case"conjugation":return i.jsxs("section",{className:"block",children:[i.jsx("h2",{className:"block-heading",children:h.title}),i.jsx("div",{className:"conjugation-grid",children:h.verbs.map((b,x)=>i.jsxs("div",{className:"conjugation-card",children:[i.jsx("div",{className:"conjugation-verb",children:b.name}),i.jsx("ul",{className:"conjugation-list",children:b.forms.map((v,U)=>i.jsx("li",{children:v},U))})]},x))})]},k);case"examples":return i.jsxs("section",{className:"block",children:[i.jsx("h2",{className:"block-heading",children:h.title}),i.jsx("ul",{className:"examples-list",children:h.pairs.map((b,x)=>i.jsx("li",{className:"example-item",children:i.jsx(ui,{es:b.es,en:b.en,esClass:"example-es",enClass:"example-en"})},x))})]},k);case"rule":return i.jsx("section",{className:"block",children:i.jsx("dl",{className:"rule-list",children:h.items.map((b,x)=>i.jsxs("div",{className:"rule-row",children:[i.jsx("dt",{children:b.label}),i.jsx("dd",{children:b.value})]},x))})},k);case"reading":return i.jsx("section",{className:"block reading-block",children:h.paragraphs.map((b,x)=>i.jsxs("p",{className:"reading-paragraph",children:[i.jsx(aa,{text:b,className:"paragraph-speak"}),b]},x))},k);case"foldable-poems":return i.jsx(hg,{poems:h.poems},k);case"foldable-songs":return i.jsx(gg,{songs:h.songs},k);case"foldable-bios":return i.jsx(bg,{bios:h.bios},k);case"foldable-grammar":return i.jsx(vg,{lessons:h.lessons},k);case"foldable-stories":return i.jsx(yg,{stories:h.stories},k);case"glossary":return i.jsxs("section",{className:"block",children:[i.jsxs("h2",{className:"block-heading",children:[i.jsx(Vo,{size:16,className:"inline-icon"})," Glosario"]}),i.jsx("div",{className:"glossary-grid",children:h.words.map((b,x)=>i.jsxs("div",{className:"glossary-row",children:[i.jsx("span",{className:"glossary-es",children:b.es}),i.jsx("span",{className:"glossary-dash",children:"—"}),i.jsx("span",{className:"glossary-en",children:b.en})]},x))})]},k);case"vocab":return i.jsx("section",{className:"block",children:i.jsx("div",{className:"vocab-grid",children:h.columns.map((b,x)=>i.jsxs("div",{className:"vocab-row",children:[i.jsx(aa,{text:b.es}),i.jsx("span",{className:"vocab-es",children:b.es}),i.jsx("span",{className:"vocab-en",children:b.en})]},x))})},k);case"vocab-lab":return i.jsx(kg,{onSaveWord:w,progress:c,onProgressChange:p},k);case"phraselist":return i.jsx("section",{className:"block",children:i.jsx("ul",{className:"phrase-list",children:h.phrases.map((b,x)=>i.jsxs("li",{className:"phrase-item",children:[i.jsx("span",{className:"phrase-num",children:String(x+1).padStart(2,"0")}),i.jsxs("div",{className:"phrase-content",children:[i.jsxs("p",{className:"phrase-es",children:[i.jsx(aa,{text:b.es,className:"paragraph-speak"}),b.es]}),i.jsx("p",{className:"phrase-en",children:b.en})]})]},x))})},k);case"steps":return i.jsx("section",{className:"block",children:i.jsx("ol",{className:"steps-list",children:h.steps.map((b,x)=>i.jsxs("li",{className:"step-item",children:[i.jsx("div",{className:"step-num",children:x+1}),i.jsxs("div",{children:[i.jsx("h3",{className:"step-title",children:b.title}),i.jsx("p",{className:"step-text",children:b.text})]})]},x))})},k);case"big-takeaways":return i.jsx("section",{className:"block",children:i.jsx("div",{className:"big-takeaways",children:h.items.map((b,x)=>i.jsxs("div",{className:"big-takeaway-card",children:[i.jsx("div",{className:"big-takeaway-num",children:b.n}),i.jsx("h3",{className:"big-takeaway-title",children:b.title}),i.jsx("p",{className:"big-takeaway-text",children:b.text})]},x))})},k);case"tip":return i.jsxs("aside",{className:"block tip-block",children:[i.jsx(Xo,{size:18,className:"tip-icon"}),i.jsx("p",{children:h.text})]},k);case"takeaway":return i.jsxs("aside",{className:"block takeaway-block",children:[i.jsxs("div",{className:"takeaway-label",children:[i.jsx(lm,{size:14})," Lo que te llevas"]}),i.jsx("p",{children:h.text})]},k);case"verb-table":{const b=Object.fromEntries(h.tenses.map(v=>[v.name,v])),x=h.tenseGroups||[["Presente","Pretérito","Imperfecto"],["Condicional","Futuro"]];return i.jsxs("section",{className:"block verb-table-block",children:[h.participles&&i.jsxs("div",{className:"participles",children:[i.jsx("div",{className:"participles-label",children:"Participios"}),i.jsxs("div",{className:"participles-rows",children:[i.jsxs("div",{className:"participles-row",children:[i.jsx("span",{className:"participles-key",children:"Presente"}),i.jsx("span",{className:"participles-val",children:i.jsx(Bn,{raw:h.participles.present})})]}),i.jsxs("div",{className:"participles-row",children:[i.jsx("span",{className:"participles-key",children:"Pasado"}),i.jsx("span",{className:"participles-val",children:i.jsx(Bn,{raw:h.participles.past})})]})]})]}),i.jsxs("div",{className:"verb-table-header",children:[i.jsxs("h2",{className:"verb-table-title",children:["Indicativo de ",i.jsxs("em",{children:['"',d.title.toLowerCase(),'"']})]}),i.jsx(dg,{tenses:h.tenses,verbName:d.title})]}),i.jsx("div",{className:"tense-stack",children:x.map((v,U)=>{const L=v.map(H=>b[H]).filter(Boolean);if(L.length===0)return null;if(L.length===1){const H=L[0];return i.jsxs("div",{className:"tense-block",children:[i.jsxs("div",{className:"tense-name-row",children:[i.jsx("h3",{className:"tense-name",children:H.name}),i.jsx(aa,{text:H.forms.map(J=>`${J.p} ${Go(J.f)}`).join(". "),size:"md",className:"tense-speak-all"})]}),i.jsx("div",{className:"tense-rows",children:H.forms.map((J,W)=>i.jsxs(Ft.Fragment,{children:[i.jsx("span",{className:"tense-pronoun",children:J.p}),i.jsxs("span",{className:"tense-form",children:[i.jsx(Bn,{raw:J.f}),i.jsx(aa,{text:Go(J.f),className:"conjugation-speak"})]})]},W))})]},U)}return i.jsxs("table",{className:"tense-group-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{"aria-hidden":"true"}),L.map((H,J)=>i.jsx("th",{scope:"col",children:i.jsxs("div",{className:"tg-th-inner",children:[i.jsx("span",{children:H.name}),i.jsx(aa,{text:H.forms.map(W=>`${W.p} ${Go(W.f)}`).join(". ")})]})},J))]})}),i.jsx("tbody",{children:L[0].forms.map((H,J)=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",className:"tg-pronoun",children:L[0].forms[J].p}),L.map((W,Y)=>i.jsxs("td",{className:"tg-form",children:[i.jsx(Bn,{raw:W.forms[J].f}),i.jsx(aa,{text:Go(W.forms[J].f),className:"conjugation-speak"})]},Y))]},J))})]},U)})}),i.jsxs("div",{className:"verb-legend",children:["Las irregularidades aparecen en ",i.jsx("span",{className:"irreg",children:"rojo"}),"."]})]},k)}case"verb-uses":return i.jsxs("section",{className:"block verb-uses-block",children:[h.heading&&i.jsx("h2",{className:"verb-uses-heading",children:h.heading}),h.categories.map((b,x)=>i.jsxs("div",{className:"vu-category",children:[i.jsxs("div",{className:"vu-category-head",children:[i.jsx("div",{className:"vu-category-label",children:b.label}),b.note&&i.jsx("div",{className:"vu-category-note",children:b.note})]}),i.jsx("div",{className:"vu-senses",children:b.senses.map((v,U)=>i.jsxs("div",{className:"vu-sense",children:[i.jsx("div",{className:"vu-sense-num",children:v.n}),i.jsxs("div",{className:"vu-sense-body",children:[i.jsx("div",{className:"vu-sense-meaning",children:v.meaning}),v.subnote&&i.jsx("div",{className:"vu-sense-subnote",children:v.subnote}),i.jsx("ul",{className:"vu-examples",children:v.examples.map((L,H)=>i.jsx("li",{children:i.jsx(ui,{es:L.es,en:L.en,esClass:"vu-ex-es",enClass:"vu-ex-en"})},H))})]})]},U))})]},x))]},k);case"lesson-section":return i.jsxs("section",{className:"block lesson-section",children:[h.heading&&i.jsx("h2",{className:"lesson-heading",children:h.heading}),h.text&&i.jsx("p",{className:"lesson-text",children:h.text}),h.paragraphs&&h.paragraphs.map((b,x)=>i.jsx("p",{className:"lesson-text",children:b},x)),h.table&&i.jsx("div",{className:"lesson-table-wrap",children:i.jsxs("table",{className:"lesson-table",children:[h.table.headers&&i.jsx("thead",{children:i.jsx("tr",{children:h.table.headers.map((b,x)=>i.jsx("th",{children:b},x))})}),i.jsx("tbody",{children:h.table.rows.map((b,x)=>i.jsx("tr",{children:b.map((v,U)=>i.jsx("td",{children:U===0?v:i.jsx(Bn,{raw:String(v)})},U))},x))})]})}),h.examples&&i.jsx("ul",{className:"lesson-examples",children:h.examples.map((b,x)=>i.jsx("li",{children:i.jsx(ui,{es:b.es,en:b.en,esClass:"lesson-ex-es",enClass:"lesson-ex-en"})},x))})]},k);default:return null}})]})}function qg(d){return d.trim().replace(/[«»""''¡!¿?.,;:()[\]{}<>*_/\\—–\-]+/g,"").trim().toLowerCase()}async function dm(d){const y=[],w=encodeURIComponent(d),c=p=>typeof AbortSignal<"u"&&AbortSignal.timeout?AbortSignal.timeout(p):void 0;try{const p=await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${w}&src=es&dst=en`,{signal:c(4e3)});if(p.ok){const h=await p.json();if(Array.isArray(h)&&h.length>0){const k=h[0],b=k?.translations?.[0]?.text?.trim();if(b){const x=(k.translations||[]).slice(1,5).map(U=>U.text?.trim()).filter(Boolean),v=[];for(const U of k.translations||[]){for(const L of U.examples||[])L.src&&L.dst&&v.length<2&&v.push({es:L.src,en:L.dst});if(v.length>=2)break}return{main:b,extras:x,pos:k.pos||k.translations?.[0]?.pos||"",examples:v,source:"Linguee"}}}}else y.push(`Linguee: HTTP ${p.status}`)}catch(p){y.push(`Linguee: ${p.message}`)}try{const p=await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${w}&pretty=true`,{signal:c(4e3)});if(p.ok){const k=(await p.json())?.tuc||[],b=k.map(v=>v?.phrase?.text?.trim()).filter(Boolean),x=k.flatMap(v=>(v?.meanings||[]).map(U=>U?.text?.trim())).filter(Boolean);if(b.length>0){const v=b[0],U=b.slice(1,5).filter(L=>L.toLowerCase()!==v.toLowerCase());return{main:v,extras:U,pos:"",meanings:x.slice(0,3),source:"Glosbe"}}}else y.push(`Glosbe: HTTP ${p.status}`)}catch(p){y.push(`Glosbe: ${p.message}`)}try{const p=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${w}`,{signal:c(4e3)});if(p.ok){const h=await p.json();if(Array.isArray(h)&&h.length>0){const b=h[0]?.meanings?.[0],x=b?.definitions?.[0]?.definition?.trim();if(x)return{main:x,extras:[],pos:b?.partOfSpeech||"",source:"Diccionario",isDefinition:!0}}}else y.push(`FreeDict: HTTP ${p.status}`)}catch(p){y.push(`FreeDict: ${p.message}`)}try{const p=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${w}`,{signal:c(4e3)});if(p.ok){const k=(await p.json())?.sentences?.[0]?.trans?.trim();if(k&&k.toLowerCase()!==d.toLowerCase())return{main:k,extras:[],pos:"",source:"Google"}}}catch(p){y.push(`Google: ${p.message}`)}try{const p=await fetch(`https://api.mymemory.translated.net/get?q=${w}&langpair=es|en`,{signal:c(4e3)});if(p.ok){const k=(await p.json())?.responseData?.translatedText?.trim();if(k&&k.toLowerCase()!==d.toLowerCase()&&!/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(k))return{main:k,extras:[],pos:"",source:"MyMemory"}}}catch(p){y.push(`MyMemory: ${p.message}`)}return y.length&&console.warn("Lookup failed for",d,y),null}function Eg({savedWords:d,onSave:y,onRemove:w}){const[c,p]=G.useState(null),h=Ft.useRef(null),k=qg,b=dm,[x,v]=G.useState(null);if(G.useEffect(()=>{let X="";async function te(F,ne,R){v(null),p({word:F,x:ne,y:R,loading:!0,result:null,error:!1});try{const Z=await b(F);p(O=>O&&O.word===F?{...O,loading:!1,result:Z,error:!Z}:O)}catch{p(O=>O&&O.word===F?{...O,loading:!1,error:!0}:O)}}function ee(){clearTimeout(ee._t),ee._t=setTimeout(()=>{const F=window.getSelection(),ne=F?.toString()||"",R=k(ne);if(!R||R.length<2||R.split(/\s+/).length>3){X&&v(null),X="";return}if(R===X)return;X=R;let Z=window.innerWidth/2,O=120;try{const ie=F.getRangeAt(0).getBoundingClientRect();Z=ie.left+ie.width/2,O=ie.top-6}catch{}const re=96;Z=Math.max(re/2+8,Math.min(Z,window.innerWidth-re/2-8)),O<50&&(O=50),v({word:R,x:Z,y:O})},200)}function ge(F){const ne=h.current&&h.current.contains(F.target),R=F.target.closest&&F.target.closest(".dict-floating-btn");!ne&&!R&&(p(null),v(null),X="")}return window.__bookOpenPopup=te,document.addEventListener("selectionchange",ee),document.addEventListener("pointerdown",ge),()=>{document.removeEventListener("selectionchange",ee),document.removeEventListener("pointerdown",ge),delete window.__bookOpenPopup}},[]),!c&&!x)return null;if(!c&&x)return i.jsxs("button",{className:"dict-floating-btn",style:{left:x.x,top:x.y+window.scrollY},onClick:X=>{X.stopPropagation(),window.__bookOpenPopup&&window.__bookOpenPopup(x.word,x.x,x.y+50)},onPointerDown:X=>X.stopPropagation(),children:[i.jsx(Vo,{size:14}),i.jsx("span",{children:"Traducir"})]});const U=290,L=Math.max(U/2+8,Math.min(c.x,window.innerWidth-U/2-8)),H=c.y+220>window.innerHeight,J=H?"auto":c.y+window.scrollY,W=H?window.innerHeight-c.y-window.scrollY+12:"auto",Y=d.some(X=>X.word===c.word);function se(){Y?w(c.word):y({word:c.word,translation:c.result?.main||"",pos:c.result?.pos||"",extras:c.result?.extras||[],savedAt:Date.now()})}return i.jsxs("div",{ref:h,className:"dict-popup",style:{left:L,top:J==="auto"?"auto":J,bottom:W==="auto"?"auto":W},children:[i.jsxs("div",{className:"dict-header",children:[i.jsx("span",{className:"dict-word",children:c.word}),i.jsx("button",{className:"dict-close-btn",onClick:()=>p(null),"aria-label":"Close",children:i.jsx(en,{size:14})})]}),i.jsxs("div",{className:"dict-body",children:[c.loading&&i.jsxs("div",{className:"dict-loading",children:[i.jsx("span",{className:"dict-spinner"}),i.jsx("span",{children:"Looking up…"})]}),!c.loading&&c.error&&i.jsxs("div",{className:"dict-fallback",children:[i.jsx("div",{className:"dict-not-found",children:"No translation available offline"}),i.jsxs("a",{className:"dict-fallback-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Vo,{size:14}),'Buscar "',c.word,'" en SpanishDict']})]}),!c.loading&&c.result&&i.jsxs(i.Fragment,{children:[c.result.pos&&i.jsx("div",{className:"dict-pos",children:c.result.pos}),i.jsx("div",{className:`dict-main-translation ${c.result.isDefinition?"is-definition":""}`,children:c.result.main}),c.result.extras?.length>0&&i.jsx("div",{className:"dict-extras",children:c.result.extras.map((X,te)=>i.jsx("span",{className:"dict-extra-tag",children:X},te))}),c.result.meanings?.length>0&&i.jsx("ul",{className:"dict-meanings",children:c.result.meanings.map((X,te)=>i.jsx("li",{className:"dict-meaning-item",children:X},te))}),c.result.examples?.length>0&&i.jsxs("div",{className:"dict-examples",children:[i.jsx("div",{className:"dict-examples-label",children:"Ejemplos"}),c.result.examples.map((X,te)=>i.jsxs("div",{className:"dict-example",children:[i.jsx("div",{className:"dict-example-es",children:X.es}),i.jsx("div",{className:"dict-example-en",children:X.en})]},te))]})]})]}),!c.loading&&i.jsxs("button",{className:`dict-save-btn ${Y?"saved":""}`,onClick:se,"aria-label":Y?"Remove from Memoria":"Save to Memoria",children:[i.jsx(Rn,{size:14,className:Y?"filled":""}),Y?"Guardado en Memoria ✓":c.result?"Guardar en Memoria":"Guardar palabra"]}),i.jsxs("div",{className:"dict-footer",children:[i.jsxs("a",{className:"dict-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(c.word)}`,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Vo,{size:12}),"Ver en SpanishDict"]}),i.jsx("span",{className:"dict-source",children:c.result?.source||"Dict"})]})]})}function Tg(){const[d,y]=G.useState(!1),[w,c]=G.useState(null),[p,h]=G.useState(!1);function k(){const b=[],x=typeof window<"u"&&!!window.speechSynthesis;if(b.push(`[1] window.speechSynthesis: ${x?"YES ✓":"NO ✗"}`),!x){c(b.join(`
`));return}const v=window.speechSynthesis.getVoices()||[];b.push(`[2] Voices loaded: ${v.length}`);const U=v.filter(H=>H.lang&&H.lang.toLowerCase().startsWith("es"));b.push(`[3] Spanish voices: ${U.length}`),U.slice(0,5).forEach(H=>{b.push(`    • ${H.name} (${H.lang})${H.default?" [default]":""}${H.localService?" [local]":" [remote]"}`)}),U.length===0&&v.length>0&&(b.push("    First 3 available voices:"),v.slice(0,3).forEach(H=>b.push(`    • ${H.name} (${H.lang})`)));const L=Pt();b.push(`[4] Selected voice: ${L?L.name+" ("+L.lang+")":"NONE"}`),h(!0),b.push("[5] Speaking test phrase…"),c(b.join(`
`));try{window.speechSynthesis.cancel();const H=new SpeechSynthesisUtterance("Hola, esto es una prueba.");L&&(H.voice=L),H.lang=L?.lang||"es-ES",H.rate=.9,H.volume=1;let J=!1,W=!1;H.onstart=()=>{J=!0,c(b.join(`
`)+`
[6] onstart fired ✓ (audio should be playing now)`)},H.onend=()=>{W=!0,h(!1),c(b.join(`
`)+`
[6] onstart: `+(J?"YES ✓":"NO ✗")+`
[7] onend: YES ✓
DONE — if you heard nothing, your device has no audio output for this voice.`)},H.onerror=Y=>{h(!1),c(b.join(`
`)+`
[ERROR] `+(Y.error||"unknown")+`
onstart fired: `+J)},window.speechSynthesis.speak(H),setTimeout(()=>{!J&&!W&&(h(!1),c(b.join(`
`)+`
[6] onstart: NO ✗ (5s elapsed, no events fired)
The browser accepted the speak() call but produced no events. This usually means the audio engine is blocked or muted at the OS level.`))},5e3)}catch(H){h(!1),c(b.join(`
`)+`
[EXCEPTION] `+H.message)}}return d?i.jsxs("div",{style:{position:"fixed",bottom:16,right:16,zIndex:99999,width:"min(360px, calc(100vw - 32px))",background:"#1c1c1a",color:"#fff",borderRadius:12,padding:16,boxShadow:"0 8px 32px rgba(0,0,0,0.4)",fontFamily:"monospace",fontSize:12},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[i.jsx("strong",{children:"Audio diagnostic"}),i.jsx("button",{onClick:()=>{y(!1),c(null)},style:{background:"transparent",color:"#fff",border:"none",fontSize:18,cursor:"pointer"},children:"×"})]}),i.jsx("button",{onClick:k,disabled:p,style:{width:"100%",padding:10,marginBottom:12,background:p?"#444":"#2f5d3a",color:"#fff",border:"none",borderRadius:6,fontSize:13,fontFamily:"inherit",cursor:p?"wait":"pointer"},children:p?"Testing…":"Run test"}),w&&i.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",wordBreak:"break-word",background:"#000",padding:12,borderRadius:6,maxHeight:"50vh",overflowY:"auto",fontSize:11,lineHeight:1.5},children:w})]}):i.jsx("button",{onClick:()=>y(!0),style:{position:"fixed",bottom:16,right:16,zIndex:99999,background:"#1c1c1a",color:"#fff",border:"none",borderRadius:999,padding:"8px 14px",fontSize:12,fontFamily:"monospace",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.25)"},children:"🔧 Audio"})}function Yo(d){const y=new Set(d.tags||[]);return d.pending&&y.add("pending"),d.translation||y.add("needs-translation"),/Group 1|cognates|near-cognates/i.test(d.pos||"")&&y.add("cognates"),/Group 2|function/i.test(d.pos||"")&&y.add("function-words"),/Group 3|remaining/i.test(d.pos||"")&&y.add("remaining"),[...y]}function Ag(d){const y=["Spanish","English","Tags","Notes"],w=d.map(b=>[b.word,b.translation||"",Yo(b).join(" | "),[...b.extras||[],b.pos||""].filter(Boolean).join(" | ")]),c=[y,...w].map(b=>b.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(",")).join(`
`),p=new Blob([c],{type:"text/csv;charset=utf-8"}),h=URL.createObjectURL(p),k=document.createElement("a");k.href=h,k.download="memoria-spanish.csv",k.click(),URL.revokeObjectURL(h)}function Cg({savedWords:d,onRemove:y,onClear:w,onUpdateWord:c}){const[p,h]=G.useState({}),[k,b]=G.useState("grid"),[x,v]=G.useState(""),[U,L]=G.useState("ALL"),[H,J]=G.useState(0),[W,Y]=G.useState(!1),[se,X]=G.useState("");function te(O){h(re=>({...re,[O]:!re[O]}))}const ee=[...d].sort((O,re)=>re.savedAt-O.savedAt),ge=G.useMemo(()=>{const O=new Set;for(const re of ee)Yo(re).forEach(ze=>O.add(ze));return[...O].sort()},[ee]),F=G.useMemo(()=>{const O=x.trim().toLowerCase();return ee.filter(re=>{const ze=Yo(re),ie=U==="ALL"||ze.includes(U),Te=!O||re.word.toLowerCase().includes(O)||(re.translation||"").toLowerCase().includes(O)||ze.some(Fe=>Fe.toLowerCase().includes(O));return ie&&Te})},[ee,x,U]),ne=F[H%Math.max(1,F.length)];G.useEffect(()=>{J(0),Y(!1)},[x,U,d.length]);function R(O){const re=se.trim().toLowerCase().replace(/\s+/g,"-");if(!re)return;const ze=d.find(Te=>Te.word===O),ie=Array.from(new Set([...ze?.tags||[],re]));c?.(O,{tags:ie}),X("")}function Z(){J(O=>(O+1)%Math.max(1,F.length)),Y(!1)}return ee.length===0?i.jsxs("div",{className:"memoria-empty",children:[i.jsx(Rn,{size:36,className:"memoria-empty-icon"}),i.jsx("h2",{className:"memoria-empty-title",children:"Tu Memoria está vacía"}),i.jsxs("p",{className:"memoria-empty-text",children:["Selecciona cualquier palabra en el libro, tradúcela, y pulsa ",i.jsx("strong",{children:"Guardar en Memoria"}),". La palabra aparecerá aquí."]})]}):i.jsxs("article",{className:"chapter-body memoria-view",children:[i.jsxs("header",{className:"chapter-header",children:[i.jsx("div",{className:"chapter-meta",children:i.jsx("span",{className:"chapter-level",children:"Mis palabras"})}),i.jsx("h1",{className:"chapter-title",children:"Memoria"}),i.jsxs("p",{className:"chapter-subtitle",children:[ee.length," ",ee.length===1?"palabra guardada":"palabras guardadas"]}),i.jsx("p",{className:"chapter-intro",children:k==="grid"?"Toca una tarjeta para voltearla y ver la traducción.":"Lista completa de tus palabras con traducción."})]}),i.jsxs("div",{className:"memoria-view-toggle",children:[i.jsx("button",{className:`memoria-view-btn ${k==="grid"?"active":""}`,onClick:()=>b("grid"),children:"Tarjetas"}),i.jsx("button",{className:`memoria-view-btn ${k==="list"?"active":""}`,onClick:()=>b("list"),children:"Lista"}),i.jsx("button",{className:`memoria-view-btn ${k==="review"?"active":""}`,onClick:()=>b("review"),children:"Repaso"})]}),i.jsxs("div",{className:"memoria-tools",children:[i.jsxs("label",{children:[i.jsx("span",{children:"Buscar"}),i.jsx("input",{value:x,onChange:O=>v(O.target.value),placeholder:"palabra, translation, tag..."})]}),i.jsxs("label",{children:[i.jsx("span",{children:"Etiqueta"}),i.jsxs("select",{value:U,onChange:O=>L(O.target.value),children:[i.jsx("option",{value:"ALL",children:"Todas"}),ge.map(O=>i.jsx("option",{value:O,children:O},O))]})]}),i.jsx("button",{className:"memoria-tool-btn",onClick:()=>Ag(F),children:"Export CSV"})]}),k==="review"?i.jsx("div",{className:"memoria-review",children:ne?i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:`memoria-review-card ${W?"flipped":""}`,onClick:()=>Y(O=>!O),children:[i.jsx("span",{className:"memoria-review-count",children:F.length?`${H+1} / ${F.length}`:"0 / 0"}),i.jsx("strong",{children:W?ne.translation||"Sin traduccion":ne.word}),i.jsx("em",{children:W?ne.word:"toca para revelar"})]}),i.jsxs("div",{className:"memoria-review-actions",children:[i.jsx(aa,{text:ne.word,size:"md"}),i.jsx("input",{value:se,onChange:O=>X(O.target.value),placeholder:"add-tag"}),i.jsx("button",{onClick:()=>R(ne.word),children:"Tag"}),i.jsx("button",{onClick:Z,children:"Siguiente"})]})]}):i.jsx("div",{className:"memoria-empty-text",children:"No hay palabras para este filtro."})}):k==="grid"?i.jsx("div",{className:"memoria-grid",children:F.map(O=>{const re=p[O.word],ze=O.pending,ie=Yo(O);return i.jsxs("div",{className:`memoria-card ${re?"flipped":""}`,onClick:()=>te(O.word),children:[i.jsxs("div",{className:"memoria-card-inner",children:[i.jsxs("div",{className:"memoria-face front",children:[i.jsx("div",{className:"memoria-word",children:O.word}),O.pos&&i.jsx("div",{className:"memoria-pos",children:O.pos}),O.translation?i.jsx("div",{className:"memoria-front-translation",children:O.translation}):ze?i.jsxs("div",{className:"memoria-front-pending",children:[i.jsx("span",{className:"dict-spinner"}),i.jsx("span",{children:"traduciendo…"})]}):i.jsx("div",{className:"memoria-hint",children:"toca para detalles"}),ie.length>0&&i.jsx("div",{className:"memoria-tags",children:ie.slice(0,3).map(Te=>i.jsx("span",{children:Te},Te))})]}),i.jsxs("div",{className:"memoria-face back",children:[O.translation?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"memoria-translation",children:O.translation}),O.extras?.length>0&&i.jsx("div",{className:"memoria-extras",children:O.extras.slice(0,3).map((Te,Fe)=>i.jsx("span",{className:"memoria-extra-tag",children:Te},Fe))})]}):i.jsx("div",{className:"memoria-no-translation",children:"Sin traducción guardada"}),i.jsx("a",{className:"memoria-sd-link",href:`https://www.spanishdict.com/translate/${encodeURIComponent(O.word)}`,target:"_blank",rel:"noopener noreferrer",onClick:Te=>Te.stopPropagation(),children:"SpanishDict →"})]})]}),i.jsx("button",{className:"memoria-remove",onClick:Te=>{Te.stopPropagation(),y(O.word)},"aria-label":`Remove ${O.word}`,children:i.jsx(en,{size:13})})]},O.word)})}):i.jsx("div",{className:"memoria-list",children:F.map(O=>{const re=O.pending,ze=Yo(O);return i.jsxs("div",{className:"memoria-list-row",children:[i.jsxs("div",{className:"memoria-list-main",children:[i.jsxs("div",{className:"memoria-list-es",children:[i.jsx("span",{className:"memoria-list-word",children:O.word}),O.pos&&i.jsx("span",{className:"memoria-list-pos",children:O.pos})]}),O.translation?i.jsx("div",{className:"memoria-list-en",children:O.translation}):re?i.jsxs("div",{className:"memoria-list-en pending",children:[i.jsx("span",{className:"dict-spinner"}),"traduciendo…"]}):i.jsx("div",{className:"memoria-list-en empty",children:"Sin traducción"}),O.extras?.length>0&&i.jsx("div",{className:"memoria-list-extras",children:O.extras.slice(0,4).map((ie,Te)=>i.jsx("span",{className:"memoria-list-extra-tag",children:ie},Te))}),ze.length>0&&i.jsx("div",{className:"memoria-list-extras",children:ze.map(ie=>i.jsx("span",{className:"memoria-list-extra-tag",children:ie},ie))})]}),i.jsxs("div",{className:"memoria-list-actions",children:[i.jsx("a",{className:"memoria-list-sd",href:`https://www.spanishdict.com/translate/${encodeURIComponent(O.word)}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Open in SpanishDict",children:i.jsx(Vo,{size:14})}),i.jsx("button",{className:"memoria-list-remove",onClick:()=>y(O.word),"aria-label":`Remove ${O.word}`,children:i.jsx(en,{size:14})})]})]},O.word)})}),ee.length>0&&i.jsx("div",{className:"memoria-actions",children:i.jsx("button",{className:"memoria-clear-btn",onClick:w,children:"Borrar todo"})})]})}function Mg({totalChapters:d,visitedCount:y,savedWordsCount:w,levelFilter:c,palabrasSummary:p,sectionProgress:h,recommendations:k,onStart:b,onOpenMemoria:x,onOpenPalabras:v,onOpenVerb:U,onOpenReading:L,onSelectChapter:H}){const J=d?Math.round(y/d*100):0;return i.jsxs("article",{className:"chapter-body home-dashboard",children:[i.jsxs("header",{className:"home-hero",children:[i.jsxs("div",{className:"home-kicker",children:[i.jsx(im,{size:18}),"Plan de estudio"]}),i.jsx("h1",{className:"home-title",children:"Learn Spanish"}),i.jsx("p",{className:"home-subtitle",children:"Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas."}),i.jsxs("div",{className:"home-actions",children:[i.jsxs("button",{className:"home-primary",onClick:b,children:["Empezar",i.jsx(Qo,{size:16})]}),i.jsxs("button",{className:"home-secondary",onClick:x,children:[i.jsx(Rn,{size:15}),"Memoria"]})]})]}),i.jsxs("section",{className:"home-stats","aria-label":"Study progress",children:[i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Progreso"}),i.jsxs("strong",{children:[J,"%"]}),i.jsxs("span",{children:[y," / ",d," capitulos"]})]}),i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Nivel"}),i.jsx("strong",{children:c==="ALL"?"Todo":c}),i.jsx("span",{children:"Filtro activo"})]}),i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Memoria"}),i.jsx("strong",{children:w}),i.jsx("span",{children:w===1?"palabra":"palabras"})]}),i.jsxs("div",{className:"home-stat",children:[i.jsx("span",{className:"home-stat-label",children:"Palabras due"}),i.jsx("strong",{children:p.due}),i.jsxs("span",{children:[p.mastered," dominadas"]})]})]}),i.jsxs("section",{className:"home-daily",children:[i.jsxs("div",{className:"home-section-heading",children:[i.jsx(_r,{size:18}),"Ruta diaria"]}),i.jsxs("div",{className:"home-daily-grid",children:[i.jsxs("button",{onClick:v,children:[i.jsx("span",{children:"01"}),i.jsx("strong",{children:"10 palabras"}),i.jsx("em",{children:p.due?`${p.due} vencidas`:`${p.seen} vistas`})]}),i.jsxs("button",{onClick:L,children:[i.jsx("span",{children:"02"}),i.jsx("strong",{children:"Lectura con audio"}),i.jsx("em",{children:"lee y escucha una pagina"})]}),i.jsxs("button",{onClick:U,children:[i.jsx("span",{children:"03"}),i.jsx("strong",{children:"Un verbo"}),i.jsx("em",{children:"tabla, voz, repeticion"})]}),i.jsxs("button",{onClick:x,children:[i.jsx("span",{children:"04"}),i.jsx("strong",{children:"Memoria"}),i.jsxs("em",{children:[w," guardadas"]})]})]})]}),i.jsxs("section",{className:"home-progress-map",children:[i.jsxs("div",{className:"home-section-heading",children:[i.jsx(Br,{size:18}),"Mapa de progreso"]}),i.jsx("div",{className:"home-progress-list",children:h.map(W=>{const Y=W.total?Math.round(W.visited/W.total*100):0;return i.jsxs("div",{className:"home-progress-row",children:[i.jsxs("div",{className:"home-progress-top",children:[i.jsx("span",{children:W.label}),i.jsxs("strong",{children:[W.visited," / ",W.total]})]}),i.jsx("div",{className:"home-progress-track",children:i.jsx("span",{style:{width:`${Y}%`}})})]},W.id)})})]}),i.jsxs("section",{className:"home-path",children:[i.jsxs("div",{className:"home-section-heading",children:[i.jsx(sm,{size:18}),"Siguiente lectura"]}),i.jsx("div",{className:"home-recommendations",children:k.map((W,Y)=>i.jsxs("button",{className:"home-rec",onClick:()=>H(W),children:[i.jsx("span",{className:"home-rec-index",children:String(Y+1).padStart(2,"0")}),i.jsxs("span",{className:"home-rec-main",children:[i.jsx("span",{className:"home-rec-title",children:W.title}),i.jsxs("span",{className:"home-rec-meta",children:[W.sectionLabel," - ",W.level]})]}),i.jsx(Qo,{size:16})]},W.id))})]})]})}function Ug(){const[d,y]=G.useState("tiempos"),[w,c]=G.useState("tiempos"),[p,h]=G.useState("ALL"),[k,b]=G.useState(!1),[x,v]=G.useState(!1),[U,L]=G.useState(!0),[H,J]=G.useState(1),[W,Y]=G.useState(null),[se,X]=G.useState([]),[te,ee]=G.useState([]),[ge,F]=G.useState({});G.useEffect(()=>{(async()=>{try{const A=await window.storage.get("memoria-words");A?.value&&X(JSON.parse(A.value))}catch{}try{const A=await window.storage.get("font-scale");if(A?.value){const V=parseFloat(A.value);V>=.85&&V<=1.3&&J(V)}}catch{}try{const A=await window.storage.get("last-read");if(A?.value){const V=JSON.parse(A.value);V?.chapterId&&V.chapterId!=="tiempos"&&Y(V)}}catch{}try{const A=await window.storage.get("visited-chapters");A?.value&&ee(JSON.parse(A.value))}catch{}try{const A=await window.storage.get(am);A?.value&&F(JSON.parse(A.value))}catch{}})()},[]),G.useEffect(()=>{document.documentElement.style.setProperty("--font-scale",String(H));try{window.storage.set("font-scale",String(H))}catch{}},[H]);function ne(A){J(V=>Math.max(.85,Math.min(1.3,+(V+A).toFixed(2))))}async function R(A){try{await window.storage.set("memoria-words",JSON.stringify(A))}catch{}}async function Z(A){try{await window.storage.set(am,JSON.stringify(A))}catch{}}function O(A){F(A),Z(A)}async function re(A){X(fe=>{const _e=fe.map(Ae=>Ae.word===A?{...Ae,pending:!0}:Ae);return R(_e),_e});const V=await dm(A);X(fe=>{const _e=fe.map(Ae=>Ae.word!==A?Ae:V?{...Ae,translation:V.main,pos:V.pos||Ae.pos||"",extras:V.extras||[],pending:!1,translatedAt:Date.now()}:{...Ae,pending:!1});return R(_e),_e})}function ze(A){X(V=>{if(V.some(_e=>_e.word===A.word))return V;const fe=[A,...V];return R(fe),fe}),A.translation||re(A.word)}function ie(A){X(V=>{const fe=V.filter(_e=>_e.word!==A);return R(fe),fe})}function Te(A,V){X(fe=>{const _e=fe.map(Ae=>Ae.word===A?{...Ae,...V}:Ae);return R(_e),_e})}function Fe(){X([]),R([])}G.useEffect(()=>{if(se.length===0)return;const A=se.filter(V=>!V.translation&&!V.pending);A.length!==0&&A.slice(0,5).forEach((V,fe)=>{setTimeout(()=>re(V.word),fe*800)})},[se.length]);const[Re,q]=G.useState(()=>{const A={};for(const V of Ho)A[V.id]=!(V.id==="verbos"||V.id==="verbos2");return A}),D=G.useMemo(()=>{const A=[];for(const V of Ho)for(const fe of V.chapters)(fe.alwaysVisible||p==="ALL"||fe.level===p)&&A.push({...fe,sectionId:V.id,sectionLabel:V.label});return A},[p]);G.useEffect(()=>{D.find(A=>A.id===w)||D.length&&(c(D[0].id),y(D[0].sectionId))},[D,w]),G.useEffect(()=>{const A=D.find(V=>V.id===w);A&&q(V=>V[A.sectionId]?V:{...V,[A.sectionId]:!0})},[w,D]);const $=G.useMemo(()=>D.find(A=>A.id===w),[D,w]),ue=D.findIndex(A=>A.id===w),we=ue>0?D[ue-1]:null,m=ue>=0&&ue<D.length-1?D[ue+1]:null,T=G.useMemo(()=>new Set(te),[te]),B=G.useMemo(()=>D.filter(A=>T.has(A.id)).length,[D,T]),Q=G.useMemo(()=>{const A=D.filter(V=>!T.has(V.id));return(A.length?A:D).slice(0,4)},[D,T]),oe=Q[0]||D[0],pe=G.useMemo(()=>{const A=Object.values(ge||{}),V=Date.now();return{seen:A.filter(fe=>fe?.seen).length,due:A.filter(fe=>fe?.seen&&(fe.dueAt||0)<=V).length,mastered:A.filter(fe=>fe?.mastered).length}},[ge]),_=G.useMemo(()=>Ho.map(A=>{const V=A.chapters.filter(_e=>_e.alwaysVisible||p==="ALL"||_e.level===p),fe=V.filter(_e=>T.has(_e.id)).length;return{id:A.id,label:A.label,total:V.length,visited:fe}}).filter(A=>A.total>0),[p,T]),he=D.find(A=>A.id==="palabras-5000"),ce=D.find(A=>A.sectionId==="verbos")||D.find(A=>A.sectionId==="verbos2"),Oe=D.find(A=>A.sectionId==="lectura");function Le(A){c(A.id),y(A.sectionId||A.sectionId),v(!1),L(!1),b(!1),Y(null),ee(V=>{if(V.includes(A.id))return V;const fe=[...V,A.id];try{window.storage.set("visited-chapters",JSON.stringify(fe))}catch{}return fe});try{window.storage.set("last-read",JSON.stringify({sectionId:A.sectionId,chapterId:A.id,title:A.title,savedAt:Date.now()}))}catch{}if(typeof window<"u"){window.scrollTo({top:0,behavior:"smooth"});const V=document.querySelector(".book-main");V&&V.scrollTo({top:0,behavior:"smooth"})}}function ga(){if(!W)return;const A=Ho.find(fe=>fe.id===W.sectionId),V=A?.chapters.find(fe=>fe.id===W.chapterId);V&&Le({...V,sectionId:A.id}),Y(null)}function Zo(){Y(null)}return i.jsxs("div",{className:"book-root",children:[i.jsx(Tg,{}),i.jsx(Eg,{savedWords:se,onSave:ze,onRemove:ie}),i.jsx("style",{children:Dg}),i.jsxs("div",{className:"mobile-bar",children:[i.jsx("button",{className:"mobile-btn",onClick:()=>b(!0),"aria-label":"Open menu",children:i.jsx(og,{size:20})}),i.jsx("div",{className:"mobile-title",children:i.jsx("span",{className:"mobile-brand-script",children:"Español"})}),i.jsxs("div",{className:"font-controls",children:[i.jsx("button",{className:"font-btn",onClick:()=>ne(-.05),"aria-label":"Smaller text",disabled:H<=.85,children:i.jsx("span",{className:"font-btn-small",children:"A"})}),i.jsx("button",{className:"font-btn",onClick:()=>ne(.05),"aria-label":"Larger text",disabled:H>=1.3,children:i.jsx("span",{className:"font-btn-large",children:"A"})})]})]}),W&&i.jsxs("div",{className:"resume-banner",children:[i.jsxs("div",{className:"resume-banner-text",children:[i.jsx("span",{className:"resume-banner-label",children:"Continuar leyendo"}),i.jsx("span",{className:"resume-banner-title",children:W.title})]}),i.jsxs("div",{className:"resume-banner-actions",children:[i.jsxs("button",{className:"resume-btn-primary",onClick:ga,children:["Continuar",i.jsx(Qo,{size:14})]}),i.jsx("button",{className:"resume-btn-dismiss",onClick:Zo,"aria-label":"Dismiss",children:i.jsx(en,{size:14})})]})]}),i.jsxs("div",{className:"book-shell",children:[i.jsxs("aside",{className:`sidebar ${k?"open":""}`,children:[i.jsxs("div",{className:"sidebar-inner",children:[i.jsxs("div",{className:"brand",children:[i.jsx("div",{className:"brand-mark",children:i.jsx(om,{size:18})}),i.jsxs("div",{className:"brand-text",children:[i.jsx("div",{className:"brand-eyebrow",children:"Un libro de"}),i.jsx("div",{className:"brand-title",children:"Español"})]}),i.jsx("button",{className:"sidebar-close",onClick:()=>b(!1),"aria-label":"Close menu",children:i.jsx(en,{size:18})})]}),i.jsxs("nav",{className:"section-nav",children:[i.jsx("div",{className:`section-group home-nav-item ${U?"active":""}`,children:i.jsxs("button",{className:"section-btn home-section-btn",onClick:()=>{L(!0),v(!1),b(!1)},children:[i.jsx("div",{className:"section-icon-wrap home-icon-wrap",children:i.jsx(Br,{size:18,className:"section-icon"})}),i.jsxs("div",{className:"section-text",children:[i.jsx("div",{className:"section-label",children:"Inicio"}),i.jsx("div",{className:"section-sublabel",children:"Plan diario"})]}),i.jsx("div",{className:"section-meta",children:i.jsx("div",{className:"section-count",children:te.length})})]})}),Ho.map(A=>{const V=A.chapters.filter(Ae=>Ae.alwaysVisible||p==="ALL"||Ae.level===p),fe=A.id===d&&!x&&!U,_e=Re[A.id];return i.jsxs("div",{className:`section-group ${fe?"active":""} ${_e?"expanded":"collapsed"}`,children:[i.jsxs("button",{className:"section-btn",onClick:()=>{q(Ae=>({...Ae,[A.id]:!Ae[A.id]}))},"aria-expanded":_e,children:[i.jsx("div",{className:"section-icon-wrap",children:i.jsx(rm,{id:A.id,size:18,className:"section-icon"})}),i.jsxs("div",{className:"section-text",children:[i.jsx("div",{className:"section-label",children:A.label}),i.jsx("div",{className:"section-sublabel",children:A.sublabel})]}),i.jsxs("div",{className:"section-meta",children:[i.jsx("div",{className:"section-count",children:V.length}),i.jsx(Yn,{size:16,className:`section-chevron ${_e?"open":""}`})]})]}),_e&&V.length>0&&i.jsx("ul",{className:"chapter-list",children:V.map(Ae=>i.jsx("li",{children:i.jsxs("button",{className:`chapter-btn ${w===Ae.id&&!x&&!U?"active":""}`,onClick:()=>{v(!1),Le({...Ae,sectionId:A.id})},children:[i.jsx("span",{className:"chapter-btn-level",children:Ae.level}),i.jsx("span",{className:"chapter-btn-title",children:Ae.title})]})},Ae.id))})]},A.id)}),i.jsx("div",{className:`section-group memoria-nav-item ${x?"active":""}`,children:i.jsxs("button",{className:"section-btn memoria-section-btn",onClick:()=>{L(!1),v(!0),b(!1)},children:[i.jsx("div",{className:"section-icon-wrap memoria-icon-wrap",children:i.jsx(Rn,{size:18,className:"section-icon"})}),i.jsxs("div",{className:"section-text",children:[i.jsx("div",{className:"section-label",children:"Memoria"}),i.jsx("div",{className:"section-sublabel",children:"Mis palabras guardadas"})]}),i.jsx("div",{className:"section-meta",children:i.jsx("div",{className:"section-count memoria-count",children:se.length})})]})})]}),i.jsx("div",{className:"sidebar-footer",children:i.jsx("div",{className:"sig",children:"— para Othman"})})]}),k&&i.jsx("div",{className:"scrim",onClick:()=>b(!1)})]}),i.jsxs("main",{className:"book-main",children:[i.jsxs("div",{className:`book-page ${U?"home-page":""}`,children:[U?i.jsx(Mg,{totalChapters:D.length,visitedCount:B,savedWordsCount:se.length,levelFilter:p,palabrasSummary:pe,sectionProgress:_,recommendations:Q,onStart:()=>oe&&Le(oe),onOpenMemoria:()=>{L(!1),v(!0)},onOpenPalabras:()=>he&&Le(he),onOpenVerb:()=>ce&&Le(ce),onOpenReading:()=>Oe&&Le(Oe),onSelectChapter:Le}):x?i.jsx(Cg,{savedWords:se,onRemove:ie,onClear:Fe,onUpdateWord:Te}):$?i.jsx(Ng,{chapter:$,sectionId:d,onSaveWord:ze,palabrasProgress:ge,onPalabrasProgressChange:O}):i.jsxs("div",{className:"empty",children:[i.jsx(pi,{size:28}),i.jsx("p",{children:"No hay capítulos en este nivel."})]}),!U&&!x&&i.jsxs("nav",{className:"chapter-nav",children:[we?i.jsxs("button",{className:"nav-btn prev",onClick:()=>Le(we),children:[i.jsx(ag,{size:16}),i.jsxs("div",{children:[i.jsx("div",{className:"nav-eyebrow",children:"Anterior"}),i.jsx("div",{className:"nav-title",children:we.title})]})]}):i.jsx("div",{}),m?i.jsxs("button",{className:"nav-btn next",onClick:()=>Le(m),children:[i.jsxs("div",{style:{textAlign:"right"},children:[i.jsx("div",{className:"nav-eyebrow",children:"Siguiente"}),i.jsx("div",{className:"nav-title",children:m.title})]}),i.jsx(Qo,{size:16})]}):i.jsx("div",{})]})]}),i.jsx("footer",{className:"level-bar",children:i.jsxs("div",{className:"level-bar-inner",children:[i.jsxs("div",{className:"level-bar-label",children:[i.jsx(Rn,{size:14})," Nivel"]}),i.jsxs("div",{className:"level-pills",children:[i.jsx("button",{className:`level-pill ${p==="ALL"?"active":""}`,onClick:()=>h("ALL"),children:"Todos"}),rg.map(A=>i.jsx("button",{className:`level-pill ${p===A?"active":""}`,onClick:()=>h(A),children:A},A))]}),i.jsx("div",{className:"level-bar-counter",children:U?`${B} / ${D.length}`:ue>=0?`${ue+1} / ${D.length}`:"—"})]})})]})]})]})}const Dg=`
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
}
.gl-item {
  border-bottom: 1px solid var(--rule);
}
.gl-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 18px 6px;
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
.gl-item.open .gl-toggle { background: var(--green-tint); }
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
  padding: 6px 0 30px 4px;
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
  .gl-toggle { padding: 14px 4px; gap: 10px; }
  .gl-num { font-size: 13px; min-width: 22px; }
  .gl-title { font-size: 19px; }
  .gl-subtitle { font-size: 13px; }
  .gl-body { padding: 4px 0 22px 2px; }
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
`;typeof window<"u"&&!window.storage&&(window.storage={async get(d){const y=window.localStorage.getItem(d);return y===null?null:{value:y}},async set(d,y){window.localStorage.setItem(d,y)},async delete(d){window.localStorage.removeItem(d)}});Zh();Xh.createRoot(document.getElementById("root")).render(i.jsx(Ft.StrictMode,{children:i.jsx(Ug,{})}));
