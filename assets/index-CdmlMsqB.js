function Rx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Lx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var a0={exports:{}},Hs={},l0={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),Bx=Symbol.for("react.portal"),Ix=Symbol.for("react.fragment"),Vx=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Hx=Symbol.for("react.forward_ref"),Wx=Symbol.for("react.suspense"),Ux=Symbol.for("react.memo"),Gx=Symbol.for("react.lazy"),Ed=Symbol.iterator;function Yx(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u0=Object.assign,d0={};function kr(e,t,n){this.props=e,this.context=t,this.refs=d0,this.updater=n||c0}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function p0(){}p0.prototype=kr.prototype;function Oc(e,t,n){this.props=e,this.context=t,this.refs=d0,this.updater=n||c0}var Hc=Oc.prototype=new p0;Hc.constructor=Oc;u0(Hc,kr.prototype);Hc.isPureReactComponent=!0;var Td=Array.isArray,f0=Object.prototype.hasOwnProperty,Wc={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function m0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)f0.call(t,r)&&!h0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oi,type:e,key:o,ref:s,props:i,_owner:Wc.current}}function Kx(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function Xx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zd=/\/+/g;function Pa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xx(""+e.key):t.toString(36)}function Oo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Oi:case Bx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Pa(s,0):r,Td(i)?(n="",e!=null&&(n=e.replace(zd,"$&/")+"/"),Oo(i,t,n,"",function(u){return u})):i!=null&&(Uc(i)&&(i=Kx(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Td(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Pa(o,a);s+=Oo(o,t,n,c,i)}else if(c=Yx(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Pa(o,a++),s+=Oo(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function io(e,t,n){if(e==null)return e;var r=[],i=0;return Oo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Ho={transition:null},Qx={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Wc};function g0(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Uc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=kr;B.Fragment=Ix;B.Profiler=Nx;B.PureComponent=Oc;B.StrictMode=Vx;B.Suspense=Wx;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;B.act=g0;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=u0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Wc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)f0.call(t,c)&&!h0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oi,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:Ox,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_x,_context:e},e.Consumer=e};B.createElement=m0;B.createFactory=function(e){var t=m0.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Hx,render:e}};B.isValidElement=Uc;B.lazy=function(e){return{$$typeof:Gx,_payload:{_status:-1,_result:e},_init:qx}};B.memo=function(e,t){return{$$typeof:Ux,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=t}};B.unstable_act=g0;B.useCallback=function(e,t){return De.current.useCallback(e,t)};B.useContext=function(e){return De.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return De.current.useDeferredValue(e)};B.useEffect=function(e,t){return De.current.useEffect(e,t)};B.useId=function(){return De.current.useId()};B.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return De.current.useMemo(e,t)};B.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};B.useRef=function(e){return De.current.useRef(e)};B.useState=function(e){return De.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return De.current.useTransition()};B.version="18.3.1";l0.exports=B;var S=l0.exports;const y0=Lx(S),jl=Rx({__proto__:null,default:y0},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=S,Jx=Symbol.for("react.element"),e1=Symbol.for("react.fragment"),t1=Object.prototype.hasOwnProperty,n1=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r1={key:!0,ref:!0,__self:!0,__source:!0};function x0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)t1.call(t,r)&&!r1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jx,type:e,key:o,ref:s,props:i,_owner:n1.current}}Hs.Fragment=e1;Hs.jsx=x0;Hs.jsxs=x0;a0.exports=Hs;var l=a0.exports,Cl={},v0={exports:{}},Ge={},b0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var R=P.length;P.push(M);e:for(;0<R;){var te=R-1>>>1,ue=P[te];if(0<i(ue,M))P[te]=M,P[R]=ue,R=te;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],R=P.pop();if(R!==M){P[0]=R;e:for(var te=0,ue=P.length,no=ue>>>1;te<no;){var gn=2*(te+1)-1,Da=P[gn],yn=gn+1,ro=P[yn];if(0>i(Da,R))yn<ue&&0>i(ro,Da)?(P[te]=ro,P[yn]=R,te=yn):(P[te]=Da,P[gn]=R,te=gn);else if(yn<ue&&0>i(ro,R))P[te]=ro,P[yn]=R,te=yn;else break e}}return M}function i(P,M){var R=P.sortIndex-M.sortIndex;return R!==0?R:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,f=null,h=3,x=!1,w=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=P)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function $(P){if(y=!1,v(P),!w)if(n(c)!==null)w=!0,to(j);else{var M=n(u);M!==null&&ae($,M.startTime-P)}}function j(P,M){w=!1,y&&(y=!1,m(A),A=-1),x=!0;var R=h;try{for(v(M),f=n(c);f!==null&&(!(f.expirationTime>M)||P&&!K());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var ue=te(f.expirationTime<=M);M=e.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(c)&&r(c),v(M)}else r(c);f=n(c)}if(f!==null)var no=!0;else{var gn=n(u);gn!==null&&ae($,gn.startTime-M),no=!1}return no}finally{f=null,h=R,x=!1}}var C=!1,F=null,A=-1,L=5,T=-1;function K(){return!(e.unstable_now()-T<L)}function Vt(){if(F!==null){var P=e.unstable_now();T=P;var M=!0;try{M=F(!0,P)}finally{M?mn():(C=!1,F=null)}}else C=!1}var mn;if(typeof g=="function")mn=function(){g(Vt)};else if(typeof MessageChannel<"u"){var Tr=new MessageChannel,Pd=Tr.port2;Tr.port1.onmessage=Vt,mn=function(){Pd.postMessage(null)}}else mn=function(){b(Vt,0)};function to(P){F=P,C||(C=!0,mn())}function ae(P,M){A=b(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,to(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var R=h;h=M;try{return P()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=h;h=P;try{return M()}finally{h=R}},e.unstable_scheduleCallback=function(P,M,R){var te=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?te+R:te):R=te,P){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=R+ue,P={id:d++,callback:M,priorityLevel:P,startTime:R,expirationTime:ue,sortIndex:-1},R>te?(P.sortIndex=R,t(u,P),n(c)===null&&P===n(u)&&(y?(m(A),A=-1):y=!0,ae($,R-te))):(P.sortIndex=ue,t(c,P),w||x||(w=!0,to(j))),P},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(P){var M=h;return function(){var R=h;h=M;try{return P.apply(this,arguments)}finally{h=R}}}})(w0);b0.exports=w0;var i1=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=S,We=i1;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S0=new Set,mi={};function Ln(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(mi[e]=t,e=0;e<t.length;e++)S0.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Md={},Rd={};function a1(e){return Fl.call(Rd,e)?!0:Fl.call(Md,e)?!1:s1.test(e)?Rd[e]=!0:(Md[e]=!0,!1)}function l1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c1(e,t,n,r){if(t===null||typeof t>"u"||l1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gc=/[\-:]([a-z])/g;function Yc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gc,Yc);xe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gc,Yc);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gc,Yc);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kc(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c1(t,n,i,r)&&(n=null),r||i===null?a1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),Dl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),j0=Symbol.for("react.offscreen"),Ld=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Ld&&e[Ld]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ea;function Yr(e){if(Ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ea=t&&t[1]||""}return`
`+Ea+e}var Ta=!1;function za(e,t){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function u1(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Hn:return"Portal";case Al:return"Profiler";case Xc:return"StrictMode";case Dl:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $0:return(e.displayName||"Context")+".Consumer";case k0:return(e._context.displayName||"Context")+".Provider";case qc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qc:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function d1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function C0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p1(e){var t=C0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=p1(e))}function F0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=C0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function A0(e,t){t=t.checked,t!=null&&Kc(e,"checked",t,!1)}function zl(e,t){A0(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Id(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Kr(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function D0(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function P0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?P0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,E0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){f1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function T0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function z0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=T0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var h1=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(h1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,ar=null,lr=null;function _d(e){if(e=Ui(e)){if(typeof Nl!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Ks(t),Nl(e.stateNode,e.type,t))}}function M0(e){ar?lr?lr.push(e):lr=[e]:ar=e}function R0(){if(ar){var e=ar,t=lr;if(lr=ar=null,_d(e),t)for(e=0;e<t.length;e++)_d(t[e])}}function L0(e,t){return e(t)}function B0(){}var Ma=!1;function I0(e,t,n){if(Ma)return e(t,n);Ma=!0;try{return L0(e,t,n)}finally{Ma=!1,(ar!==null||lr!==null)&&(B0(),R0())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var _l=!1;if(Mt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{_l=!1}function m1(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ti=!1,cs=null,us=!1,Ol=null,g1={onError:function(e){ti=!0,cs=e}};function y1(e,t,n,r,i,o,s,a,c){ti=!1,cs=null,m1.apply(g1,arguments)}function x1(e,t,n,r,i,o,s,a,c){if(y1.apply(this,arguments),ti){if(ti){var u=cs;ti=!1,cs=null}else throw Error(D(198));us||(us=!0,Ol=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function V0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Od(e){if(Bn(e)!==e)throw Error(D(188))}function v1(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Od(i),e;if(o===r)return Od(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function N0(e){return e=v1(e),e!==null?_0(e):null}function _0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_0(e);if(t!==null)return t;e=e.sibling}return null}var O0=We.unstable_scheduleCallback,Hd=We.unstable_cancelCallback,b1=We.unstable_shouldYield,w1=We.unstable_requestPaint,re=We.unstable_now,S1=We.unstable_getCurrentPriorityLevel,Jc=We.unstable_ImmediatePriority,H0=We.unstable_UserBlockingPriority,ds=We.unstable_NormalPriority,k1=We.unstable_LowPriority,W0=We.unstable_IdlePriority,Ws=null,bt=null;function $1(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ws,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:F1,j1=Math.log,C1=Math.LN2;function F1(e){return e>>>=0,e===0?32:31-(j1(e)/C1|0)|0}var lo=64,co=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Xr(a):(o&=s,o!==0&&(r=Xr(o)))}else s=n&~i,s!==0?r=Xr(s):o!==0&&(r=Xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function A1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=A1(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function U0(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function Ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function P1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function G0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Y0,tu,K0,X0,q0,Wl=!1,uo=[],Zt=null,Jt=null,en=null,xi=new Map,vi=new Map,Yt=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&tu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function T1(e,t,n,r,i){switch(t){case"focusin":return Zt=Rr(Zt,e,t,n,r,i),!0;case"dragenter":return Jt=Rr(Jt,e,t,n,r,i),!0;case"mouseover":return en=Rr(en,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xi.set(o,Rr(xi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,Rr(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Q0(e){var t=kn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=V0(n),t!==null){e.blockedOn=t,q0(e.priority,function(){K0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=Ui(n),t!==null&&tu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ud(e,t,n){Wo(e)&&n.delete(t)}function z1(){Wl=!1,Zt!==null&&Wo(Zt)&&(Zt=null),Jt!==null&&Wo(Jt)&&(Jt=null),en!==null&&Wo(en)&&(en=null),xi.forEach(Ud),vi.forEach(Ud)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,z1)))}function bi(e){function t(i){return Lr(i,e)}if(0<uo.length){Lr(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Lr(Zt,e),Jt!==null&&Lr(Jt,e),en!==null&&Lr(en,e),xi.forEach(t),vi.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&Yt.shift()}var cr=It.ReactCurrentBatchConfig,fs=!0;function M1(e,t,n,r){var i=O,o=cr.transition;cr.transition=null;try{O=1,nu(e,t,n,r)}finally{O=i,cr.transition=o}}function R1(e,t,n,r){var i=O,o=cr.transition;cr.transition=null;try{O=4,nu(e,t,n,r)}finally{O=i,cr.transition=o}}function nu(e,t,n,r){if(fs){var i=Ul(e,t,n,r);if(i===null)Ua(e,t,r,hs,n),Wd(e,r);else if(T1(i,e,t,n,r))r.stopPropagation();else if(Wd(e,r),t&4&&-1<E1.indexOf(e)){for(;i!==null;){var o=Ui(i);if(o!==null&&Y0(o),o=Ul(e,t,n,r),o===null&&Ua(e,t,r,hs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ua(e,t,r,null,n)}}var hs=null;function Ul(e,t,n,r){if(hs=null,e=Zc(r),e=kn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=V0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hs=e,null}function Z0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case Jc:return 1;case H0:return 4;case ds:case k1:return 16;case W0:return 536870912;default:return 16}default:return 16}}var Xt=null,ru=null,Uo=null;function J0(){if(Uo)return Uo;var e,t=ru,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Uo=i.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Gd(){return!1}function Ye(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:Gd,this.isPropagationStopped=Gd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Ye($r),Wi=Z({},$r,{view:0,detail:0}),L1=Ye(Wi),La,Ba,Br,Us=Z({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(La=e.screenX-Br.screenX,Ba=e.screenY-Br.screenY):Ba=La=0,Br=e),La)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Yd=Ye(Us),B1=Z({},Us,{dataTransfer:0}),I1=Ye(B1),V1=Z({},Wi,{relatedTarget:0}),Ia=Ye(V1),N1=Z({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),_1=Ye(N1),O1=Z({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H1=Ye(O1),W1=Z({},$r,{data:0}),Kd=Ye(W1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y1[e])?!!t[e]:!1}function ou(){return K1}var X1=Z({},Wi,{key:function(e){if(e.key){var t=U1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q1=Ye(X1),Q1=Z({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Ye(Q1),Z1=Z({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),J1=Ye(Z1),ev=Z({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=Ye(ev),nv=Z({},Us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=Ye(nv),iv=[9,13,27,32],su=Mt&&"CompositionEvent"in window,ni=null;Mt&&"documentMode"in document&&(ni=document.documentMode);var ov=Mt&&"TextEvent"in window&&!ni,em=Mt&&(!su||ni&&8<ni&&11>=ni),qd=" ",Qd=!1;function tm(e,t){switch(e){case"keyup":return iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function sv(e,t){switch(e){case"compositionend":return nm(t);case"keypress":return t.which!==32?null:(Qd=!0,qd);case"textInput":return e=t.data,e===qd&&Qd?null:e;default:return null}}function av(e,t){if(Un)return e==="compositionend"||!su&&tm(e,t)?(e=J0(),Uo=ru=Xt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return em&&t.locale!=="ko"?null:t.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lv[e.type]:t==="textarea"}function rm(e,t,n,r){M0(r),t=ms(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,wi=null;function cv(e){hm(e,0)}function Gs(e){var t=Kn(e);if(F0(t))return e}function uv(e,t){if(e==="change")return t}var im=!1;if(Mt){var Va;if(Mt){var Na="oninput"in document;if(!Na){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Na=typeof Jd.oninput=="function"}Va=Na}else Va=!1;im=Va&&(!document.documentMode||9<document.documentMode)}function ep(){ri&&(ri.detachEvent("onpropertychange",om),wi=ri=null)}function om(e){if(e.propertyName==="value"&&Gs(wi)){var t=[];rm(t,wi,e,Zc(e)),I0(cv,t)}}function dv(e,t,n){e==="focusin"?(ep(),ri=t,wi=n,ri.attachEvent("onpropertychange",om)):e==="focusout"&&ep()}function pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(wi)}function fv(e,t){if(e==="click")return Gs(t)}function hv(e,t){if(e==="input"||e==="change")return Gs(t)}function mv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:mv;function Si(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,t){var n=tp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function am(){for(var e=window,t=ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ls(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gv(e){var t=am(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sm(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=np(n,o);var s=np(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yv=Mt&&"documentMode"in document&&11>=document.documentMode,Gn=null,Gl=null,ii=null,Yl=!1;function rp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||Gn==null||Gn!==ls(r)||(r=Gn,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&Si(ii,r)||(ii=r,r=ms(Gl,"onSelect"),0<r.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},_a={},lm={};Mt&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Ys(e){if(_a[e])return _a[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lm)return _a[e]=t[n];return e}var cm=Ys("animationend"),um=Ys("animationiteration"),dm=Ys("animationstart"),pm=Ys("transitionend"),fm=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){fm.set(e,t),Ln(t,[e])}for(var Oa=0;Oa<ip.length;Oa++){var Ha=ip[Oa],xv=Ha.toLowerCase(),vv=Ha[0].toUpperCase()+Ha.slice(1);dn(xv,"on"+vv)}dn(cm,"onAnimationEnd");dn(um,"onAnimationIteration");dn(dm,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(pm,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x1(r,t,void 0,e),e.currentTarget=null}function hm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;op(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;op(i,a,u),o=c}}}if(us)throw e=Ol,us=!1,Ol=null,e}function U(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(mm(t,e,2,!1),n.add(r))}function Wa(e,t,n){var r=0;t&&(r|=4),mm(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[ho]){e[ho]=!0,S0.forEach(function(n){n!=="selectionchange"&&(bv.has(n)||Wa(n,!1,e),Wa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Wa("selectionchange",!1,t))}}function mm(e,t,n,r){switch(Z0(t)){case 1:var i=M1;break;case 4:i=R1;break;default:i=nu}n=i.bind(null,t,n,e),i=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ua(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=kn(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}I0(function(){var u=o,d=Zc(n),f=[];e:{var h=fm.get(e);if(h!==void 0){var x=iu,w=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":x=q1;break;case"focusin":w="focus",x=Ia;break;case"focusout":w="blur",x=Ia;break;case"beforeblur":case"afterblur":x=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=J1;break;case cm:case um:case dm:x=_1;break;case pm:x=tv;break;case"scroll":x=L1;break;case"wheel":x=rv;break;case"copy":case"cut":case"paste":x=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xd}var y=(t&4)!==0,b=!y&&e==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var g=u,v;g!==null;){v=g;var $=v.stateNode;if(v.tag===5&&$!==null&&(v=$,m!==null&&($=yi(g,m),$!=null&&y.push($i(g,$,v)))),b)break;g=g.return}0<y.length&&(h=new x(h,w,null,n,d),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Vl&&(w=n.relatedTarget||n.fromElement)&&(kn(w)||w[Rt]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?kn(w):null,w!==null&&(b=Bn(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(y=Yd,$="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Xd,$="onPointerLeave",m="onPointerEnter",g="pointer"),b=x==null?h:Kn(x),v=w==null?h:Kn(w),h=new y($,g+"leave",x,n,d),h.target=b,h.relatedTarget=v,$=null,kn(d)===u&&(y=new y(m,g+"enter",w,n,d),y.target=v,y.relatedTarget=b,$=y),b=$,x&&w)t:{for(y=x,m=w,g=0,v=y;v;v=_n(v))g++;for(v=0,$=m;$;$=_n($))v++;for(;0<g-v;)y=_n(y),g--;for(;0<v-g;)m=_n(m),v--;for(;g--;){if(y===m||m!==null&&y===m.alternate)break t;y=_n(y),m=_n(m)}y=null}else y=null;x!==null&&sp(f,h,x,y,!1),w!==null&&b!==null&&sp(f,b,w,y,!0)}}e:{if(h=u?Kn(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=uv;else if(Zd(h))if(im)j=hv;else{j=pv;var C=dv}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=fv);if(j&&(j=j(e,u))){rm(f,j,n,d);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ml(h,"number",h.value)}switch(C=u?Kn(u):window,e){case"focusin":(Zd(C)||C.contentEditable==="true")&&(Gn=C,Gl=u,ii=null);break;case"focusout":ii=Gl=Gn=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,rp(f,n,d);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":rp(f,n,d)}var F;if(su)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Un?tm(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(em&&n.locale!=="ko"&&(Un||A!=="onCompositionStart"?A==="onCompositionEnd"&&Un&&(F=J0()):(Xt=d,ru="value"in Xt?Xt.value:Xt.textContent,Un=!0)),C=ms(u,A),0<C.length&&(A=new Kd(A,e,null,n,d),f.push({event:A,listeners:C}),F?A.data=F:(F=nm(n),F!==null&&(A.data=F)))),(F=ov?sv(e,n):av(e,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(d=new Kd("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=F))}hm(f,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yi(e,n),o!=null&&r.unshift($i(e,o,i)),o=yi(e,t),o!=null&&r.push($i(e,o,i))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=yi(n,o),c!=null&&s.unshift($i(n,c,a))):i||(c=yi(n,o),c!=null&&s.push($i(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var wv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function ap(e){return(typeof e=="string"?e:""+e).replace(wv,`
`).replace(Sv,"")}function mo(e,t,n){if(t=ap(t),ap(e)!==t&&n)throw Error(D(425))}function gs(){}var Kl=null,Xl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(e){return lp.resolve(null).then(e).catch(jv)}:Ql;function jv(e){setTimeout(function(){throw e})}function Ga(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bi(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),xt="__reactFiber$"+jr,ji="__reactProps$"+jr,Rt="__reactContainer$"+jr,Zl="__reactEvents$"+jr,Cv="__reactListeners$"+jr,Fv="__reactHandles$"+jr;function kn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cp(e);e!==null;){if(n=e[xt])return n;e=cp(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[xt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Ks(e){return e[ji]||null}var Jl=[],Xn=-1;function pn(e){return{current:e}}function G(e){0>Xn||(e.current=Jl[Xn],Jl[Xn]=null,Xn--)}function W(e,t){Xn++,Jl[Xn]=e.current,e.current=t}var cn={},je=pn(cn),Me=pn(!1),Pn=cn;function hr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function ys(){G(Me),G(je)}function up(e,t,n){if(je.current!==cn)throw Error(D(168));W(je,t),W(Me,n)}function gm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,d1(e)||"Unknown",i));return Z({},n,r)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Pn=je.current,W(je,e),W(Me,Me.current),!0}function dp(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=gm(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,G(Me),G(je),W(je,e)):G(Me),W(Me,n)}var At=null,Xs=!1,Ya=!1;function ym(e){At===null?At=[e]:At.push(e)}function Av(e){Xs=!0,ym(e)}function fn(){if(!Ya&&At!==null){Ya=!0;var e=0,t=O;try{var n=At;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Xs=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),O0(Jc,fn),i}finally{O=t,Ya=!1}}return null}var qn=[],Qn=0,vs=null,bs=0,Ze=[],Je=0,En=null,Dt=1,Pt="";function vn(e,t){qn[Qn++]=bs,qn[Qn++]=vs,vs=e,bs=t}function xm(e,t,n){Ze[Je++]=Dt,Ze[Je++]=Pt,Ze[Je++]=En,En=e;var r=Dt;e=Pt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Dt=1<<32-ct(t)+i|n<<i|r,Pt=o+e}else Dt=1<<o|n<<i|r,Pt=e}function lu(e){e.return!==null&&(vn(e,1),xm(e,1,0))}function cu(e){for(;e===vs;)vs=qn[--Qn],qn[Qn]=null,bs=qn[--Qn],qn[Qn]=null;for(;e===En;)En=Ze[--Je],Ze[Je]=null,Pt=Ze[--Je],Ze[Je]=null,Dt=Ze[--Je],Ze[Je]=null}var Oe=null,_e=null,Y=!1,lt=null;function vm(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,_e=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Dt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,_e=null,!0):!1;default:return!1}}function ec(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tc(e){if(Y){var t=_e;if(t){var n=t;if(!pp(e,t)){if(ec(e))throw Error(D(418));t=tn(n.nextSibling);var r=Oe;t&&pp(e,t)?vm(r,n):(e.flags=e.flags&-4097|2,Y=!1,Oe=e)}}else{if(ec(e))throw Error(D(418));e.flags=e.flags&-4097|2,Y=!1,Oe=e}}}function fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function go(e){if(e!==Oe)return!1;if(!Y)return fp(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=_e)){if(ec(e))throw bm(),Error(D(418));for(;t;)vm(e,t),t=tn(t.nextSibling)}if(fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Oe?tn(e.stateNode.nextSibling):null;return!0}function bm(){for(var e=_e;e;)e=tn(e.nextSibling)}function mr(){_e=Oe=null,Y=!1}function uu(e){lt===null?lt=[e]:lt.push(e)}var Dv=It.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hp(e){var t=e._init;return t(e._payload)}function wm(e){function t(m,g){if(e){var v=m.deletions;v===null?(m.deletions=[g],m.flags|=16):v.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=sn(m,g),m.index=0,m.sibling=null,m}function o(m,g,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<g?(m.flags|=2,g):v):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,v,$){return g===null||g.tag!==6?(g=el(v,m.mode,$),g.return=m,g):(g=i(g,v),g.return=m,g)}function c(m,g,v,$){var j=v.type;return j===Wn?d(m,g,v.props.children,$,v.key):g!==null&&(g.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ut&&hp(j)===g.type)?($=i(g,v.props),$.ref=Ir(m,g,v),$.return=m,$):($=Jo(v.type,v.key,v.props,null,m.mode,$),$.ref=Ir(m,g,v),$.return=m,$)}function u(m,g,v,$){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=tl(v,m.mode,$),g.return=m,g):(g=i(g,v.children||[]),g.return=m,g)}function d(m,g,v,$,j){return g===null||g.tag!==7?(g=An(v,m.mode,$,j),g.return=m,g):(g=i(g,v),g.return=m,g)}function f(m,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=el(""+g,m.mode,v),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return v=Jo(g.type,g.key,g.props,null,m.mode,v),v.ref=Ir(m,null,g),v.return=m,v;case Hn:return g=tl(g,m.mode,v),g.return=m,g;case Ut:var $=g._init;return f(m,$(g._payload),v)}if(Kr(g)||zr(g))return g=An(g,m.mode,v,null),g.return=m,g;yo(m,g)}return null}function h(m,g,v,$){var j=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:a(m,g,""+v,$);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return v.key===j?c(m,g,v,$):null;case Hn:return v.key===j?u(m,g,v,$):null;case Ut:return j=v._init,h(m,g,j(v._payload),$)}if(Kr(v)||zr(v))return j!==null?null:d(m,g,v,$,null);yo(m,v)}return null}function x(m,g,v,$,j){if(typeof $=="string"&&$!==""||typeof $=="number")return m=m.get(v)||null,a(g,m,""+$,j);if(typeof $=="object"&&$!==null){switch($.$$typeof){case oo:return m=m.get($.key===null?v:$.key)||null,c(g,m,$,j);case Hn:return m=m.get($.key===null?v:$.key)||null,u(g,m,$,j);case Ut:var C=$._init;return x(m,g,v,C($._payload),j)}if(Kr($)||zr($))return m=m.get(v)||null,d(g,m,$,j,null);yo(g,$)}return null}function w(m,g,v,$){for(var j=null,C=null,F=g,A=g=0,L=null;F!==null&&A<v.length;A++){F.index>A?(L=F,F=null):L=F.sibling;var T=h(m,F,v[A],$);if(T===null){F===null&&(F=L);break}e&&F&&T.alternate===null&&t(m,F),g=o(T,g,A),C===null?j=T:C.sibling=T,C=T,F=L}if(A===v.length)return n(m,F),Y&&vn(m,A),j;if(F===null){for(;A<v.length;A++)F=f(m,v[A],$),F!==null&&(g=o(F,g,A),C===null?j=F:C.sibling=F,C=F);return Y&&vn(m,A),j}for(F=r(m,F);A<v.length;A++)L=x(F,m,A,v[A],$),L!==null&&(e&&L.alternate!==null&&F.delete(L.key===null?A:L.key),g=o(L,g,A),C===null?j=L:C.sibling=L,C=L);return e&&F.forEach(function(K){return t(m,K)}),Y&&vn(m,A),j}function y(m,g,v,$){var j=zr(v);if(typeof j!="function")throw Error(D(150));if(v=j.call(v),v==null)throw Error(D(151));for(var C=j=null,F=g,A=g=0,L=null,T=v.next();F!==null&&!T.done;A++,T=v.next()){F.index>A?(L=F,F=null):L=F.sibling;var K=h(m,F,T.value,$);if(K===null){F===null&&(F=L);break}e&&F&&K.alternate===null&&t(m,F),g=o(K,g,A),C===null?j=K:C.sibling=K,C=K,F=L}if(T.done)return n(m,F),Y&&vn(m,A),j;if(F===null){for(;!T.done;A++,T=v.next())T=f(m,T.value,$),T!==null&&(g=o(T,g,A),C===null?j=T:C.sibling=T,C=T);return Y&&vn(m,A),j}for(F=r(m,F);!T.done;A++,T=v.next())T=x(F,m,A,T.value,$),T!==null&&(e&&T.alternate!==null&&F.delete(T.key===null?A:T.key),g=o(T,g,A),C===null?j=T:C.sibling=T,C=T);return e&&F.forEach(function(Vt){return t(m,Vt)}),Y&&vn(m,A),j}function b(m,g,v,$){if(typeof v=="object"&&v!==null&&v.type===Wn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:e:{for(var j=v.key,C=g;C!==null;){if(C.key===j){if(j=v.type,j===Wn){if(C.tag===7){n(m,C.sibling),g=i(C,v.props.children),g.return=m,m=g;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ut&&hp(j)===C.type){n(m,C.sibling),g=i(C,v.props),g.ref=Ir(m,C,v),g.return=m,m=g;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===Wn?(g=An(v.props.children,m.mode,$,v.key),g.return=m,m=g):($=Jo(v.type,v.key,v.props,null,m.mode,$),$.ref=Ir(m,g,v),$.return=m,m=$)}return s(m);case Hn:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(m,g.sibling),g=i(g,v.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=tl(v,m.mode,$),g.return=m,m=g}return s(m);case Ut:return C=v._init,b(m,g,C(v._payload),$)}if(Kr(v))return w(m,g,v,$);if(zr(v))return y(m,g,v,$);yo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,v),g.return=m,m=g):(n(m,g),g=el(v,m.mode,$),g.return=m,m=g),s(m)):n(m,g)}return b}var gr=wm(!0),Sm=wm(!1),ws=pn(null),Ss=null,Zn=null,du=null;function pu(){du=Zn=Ss=null}function fu(e){var t=ws.current;G(ws),e._currentValue=t}function nc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){Ss=e,du=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(du!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Ss===null)throw Error(D(308));Zn=e,Ss.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var $n=null;function hu(e){$n===null?$n=[e]:$n.push(e)}function km(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}function mp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ks(e,t,n,r){var i=e.updateQueue;Gt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,d=u=c=null,a=o;do{var h=a.lane,x=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(h=t,x=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){f=w.call(x,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(x,f,h):w,h==null)break e;f=Z({},f,h);break e;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=x,c=f):d=d.next=x,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=f}}function gp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Gi={},wt=pn(Gi),Ci=pn(Gi),Fi=pn(Gi);function jn(e){if(e===Gi)throw Error(D(174));return e}function gu(e,t){switch(W(Fi,t),W(Ci,e),W(wt,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ll(t,e)}G(wt),W(wt,t)}function yr(){G(wt),G(Ci),G(Fi)}function jm(e){jn(Fi.current);var t=jn(wt.current),n=Ll(t,e.type);t!==n&&(W(Ci,e),W(wt,n))}function yu(e){Ci.current===e&&(G(wt),G(Ci))}var X=pn(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function xu(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var Ko=It.ReactCurrentDispatcher,Xa=It.ReactCurrentBatchConfig,Tn=0,Q=null,le=null,pe=null,js=!1,oi=!1,Ai=0,Pv=0;function ve(){throw Error(D(321))}function vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function bu(e,t,n,r,i,o){if(Tn=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?Mv:Rv,e=n(r,i),oi){o=0;do{if(oi=!1,Ai=0,25<=o)throw Error(D(301));o+=1,pe=le=null,t.updateQueue=null,Ko.current=Lv,e=n(r,i)}while(oi)}if(Ko.current=Cs,t=le!==null&&le.next!==null,Tn=0,pe=le=Q=null,js=!1,t)throw Error(D(300));return e}function wu(){var e=Ai!==0;return Ai=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Q.memoizedState=pe=e:pe=pe.next=e,pe}function rt(){if(le===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=pe===null?Q.memoizedState:pe.next;if(t!==null)pe=t,le=e;else{if(e===null)throw Error(D(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},pe===null?Q.memoizedState=pe=e:pe=pe.next=e}return pe}function Di(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=rt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var d=u.lane;if((Tn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,s=r):c=c.next=f,Q.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,dt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qa(e){var t=rt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);dt(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cm(){}function Fm(e,t){var n=Q,r=rt(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,Su(Pm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Dm.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(D(349));Tn&30||Am(n,t,i)}return i}function Am(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dm(e,t,n,r){t.value=n,t.getSnapshot=r,Em(t)&&Tm(e)}function Pm(e,t,n){return n(function(){Em(t)&&Tm(e)})}function Em(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Tm(e){var t=Lt(e,1);t!==null&&ut(t,e,1,-1)}function yp(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=zv.bind(null,Q,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zm(){return rt().memoizedState}function Xo(e,t,n,r){var i=mt();Q.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function qs(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(le!==null){var s=le.memoizedState;if(o=s.destroy,r!==null&&vu(r,s.deps)){i.memoizedState=Pi(t,n,o,r);return}}Q.flags|=e,i.memoizedState=Pi(1|t,n,o,r)}function xp(e,t){return Xo(8390656,8,e,t)}function Su(e,t){return qs(2048,8,e,t)}function Mm(e,t){return qs(4,2,e,t)}function Rm(e,t){return qs(4,4,e,t)}function Lm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bm(e,t,n){return n=n!=null?n.concat([e]):null,qs(4,4,Lm.bind(null,t,e),n)}function ku(){}function Im(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vm(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nm(e,t,n){return Tn&21?(dt(n,t)||(n=U0(),Q.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Ev(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Xa.transition;Xa.transition={};try{e(!1),t()}finally{O=n,Xa.transition=r}}function _m(){return rt().memoizedState}function Tv(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Om(e))Hm(t,n);else if(n=km(e,t,n,r),n!==null){var i=Fe();ut(n,e,r,i),Wm(n,t,r)}}function zv(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Om(e))Hm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,dt(a,s)){var c=t.interleaved;c===null?(i.next=i,hu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=km(e,t,i,r),n!==null&&(i=Fe(),ut(n,e,r,i),Wm(n,t,r))}}function Om(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Hm(e,t){oi=js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}var Cs={readContext:nt,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Mv={readContext:nt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:xp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4194308,4,Lm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tv.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:yp,useDebugValue:ku,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=yp(!1),t=e[0];return e=Ev.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=mt();if(Y){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),fe===null)throw Error(D(349));Tn&30||Am(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xp(Pm.bind(null,r,o,e),[e]),r.flags|=2048,Pi(9,Dm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=fe.identifierPrefix;if(Y){var n=Pt,r=Dt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rv={readContext:nt,useCallback:Im,useContext:nt,useEffect:Su,useImperativeHandle:Bm,useInsertionEffect:Mm,useLayoutEffect:Rm,useMemo:Vm,useReducer:qa,useRef:zm,useState:function(){return qa(Di)},useDebugValue:ku,useDeferredValue:function(e){var t=rt();return Nm(t,le.memoizedState,e)},useTransition:function(){var e=qa(Di)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Cm,useSyncExternalStore:Fm,useId:_m,unstable_isNewReconciler:!1},Lv={readContext:nt,useCallback:Im,useContext:nt,useEffect:Su,useImperativeHandle:Bm,useInsertionEffect:Mm,useLayoutEffect:Rm,useMemo:Vm,useReducer:Qa,useRef:zm,useState:function(){return Qa(Di)},useDebugValue:ku,useDeferredValue:function(e){var t=rt();return le===null?t.memoizedState=e:Nm(t,le.memoizedState,e)},useTransition:function(){var e=Qa(Di)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Cm,useSyncExternalStore:Fm,useId:_m,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qs={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=on(e),o=Et(r,i);o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(ut(t,e,i,r),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=on(e),o=Et(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(ut(t,e,i,r),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=on(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,r),t!==null&&(ut(t,e,r,n),Yo(t,e,r))}};function vp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Si(n,r)||!Si(i,o):!0}function Um(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Re(t)?Pn:je.current,r=t.contextTypes,o=(r=r!=null)?hr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qs.enqueueReplaceState(t,t.state,null)}function ic(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Re(t)?Pn:je.current,i.context=hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(rc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qs.enqueueReplaceState(i,i.state,null),ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var n="",r=t;do n+=u1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Za(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function Gm(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){As||(As=!0,mc=r),oc(e,t)},n}function Ym(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oc(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function wp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qv.bind(null,e,t,n),t.then(e,e))}function Sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var Iv=It.ReactCurrentOwner,ze=!1;function Ce(e,t,n,r){t.child=e===null?Sm(t,null,n,r):gr(t,e.child,n,r)}function $p(e,t,n,r,i){n=n.render;var o=t.ref;return ur(t,i),r=bu(e,t,n,r,o,i),n=wu(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(Y&&n&&lu(t),t.flags|=1,Ce(e,t,r,i),t.child)}function jp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Km(e,t,o,r,i)):(e=Jo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(s,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Km(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Si(o,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return sc(e,t,n,r,i)}function Xm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(er,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(er,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(er,Ve),Ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(er,Ve),Ve|=r;return Ce(e,t,i,n),t.child}function qm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sc(e,t,n,r,i){var o=Re(n)?Pn:je.current;return o=hr(t,o),ur(t,i),n=bu(e,t,n,r,o,i),r=wu(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(Y&&r&&lu(t),t.flags|=1,Ce(e,t,n,i),t.child)}function Cp(e,t,n,r,i){if(Re(n)){var o=!0;xs(t)}else o=!1;if(ur(t,i),t.stateNode===null)qo(e,t),Um(t,n,r),ic(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Re(n)?Pn:je.current,u=hr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&bp(t,s,r,u),Gt=!1;var h=t.memoizedState;s.state=h,ks(t,r,s,i),c=t.memoizedState,a!==r||h!==c||Me.current||Gt?(typeof d=="function"&&(rc(t,n,d,r),c=t.memoizedState),(a=Gt||vp(t,n,a,r,h,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$m(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:st(t.type,a),s.props=u,f=t.pendingProps,h=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=nt(c):(c=Re(n)?Pn:je.current,c=hr(t,c));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==c)&&bp(t,s,r,c),Gt=!1,h=t.memoizedState,s.state=h,ks(t,r,s,i);var w=t.memoizedState;a!==f||h!==w||Me.current||Gt?(typeof x=="function"&&(rc(t,n,x,r),w=t.memoizedState),(u=Gt||vp(t,n,u,r,h,w,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ac(e,t,n,r,o,i)}function ac(e,t,n,r,i,o){qm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&dp(t,n,!1),Bt(e,t,o);r=t.stateNode,Iv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=gr(t,e.child,null,o),t.child=gr(t,null,a,o)):Ce(e,t,a,o),t.memoizedState=r.state,i&&dp(t,n,!0),t.child}function Qm(e){var t=e.stateNode;t.pendingContext?up(e,t.pendingContext,t.pendingContext!==t.context):t.context&&up(e,t.context,!1),gu(e,t.containerInfo)}function Fp(e,t,n,r,i){return mr(),uu(i),t.flags|=256,Ce(e,t,n,r),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zm(e,t,n){var r=t.pendingProps,i=X.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(X,i&1),e===null)return tc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ea(s,r,0,null),e=An(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cc(n),t.memoizedState=lc,e):$u(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=sn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=sn(a,o):(o=An(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=lc,r}return o=e.child,e=o.sibling,r=sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $u(e,t){return t=ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&uu(r),gr(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Za(Error(D(422))),xo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ea({mode:"visible",children:r.children},i,0,null),o=An(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gr(t,e.child,null,s),t.child.memoizedState=cc(s),t.memoizedState=lc,o);if(!(t.mode&1))return xo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=Za(o,r,void 0),xo(e,t,s,r)}if(a=(s&e.childLanes)!==0,ze||a){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Lt(e,i),ut(r,e,i,-1))}return Pu(),r=Za(Error(D(421))),xo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=tn(i.nextSibling),Oe=t,Y=!0,lt=null,e!==null&&(Ze[Je++]=Dt,Ze[Je++]=Pt,Ze[Je++]=En,Dt=e.id,Pt=e.overflow,En=t),t=$u(t,r.children),t.flags|=4096,t)}function Ap(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nc(e.return,t,n)}function Ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ap(e,n,t);else if(e.tag===19)Ap(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ja(t,!0,n,null,o);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nv(e,t,n){switch(t.tag){case 3:Qm(t),mr();break;case 5:jm(t);break;case 1:Re(t.type)&&xs(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(ws,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Zm(e,t,n):(W(X,X.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Xm(e,t,n)}return Bt(e,t,n)}var eg,uc,tg,ng;eg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uc=function(){};tg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jn(wt.current);var o=null;switch(n){case"input":i=Tl(e,i),r=Tl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gs)}Bl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ng=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _v(e,t,n){var r=t.pendingProps;switch(cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Re(t.type)&&ys(),be(t),null;case 3:return r=t.stateNode,yr(),G(Me),G(je),xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(xc(lt),lt=null))),uc(e,t),be(t),null;case 5:yu(t);var i=jn(Fi.current);if(n=t.type,e!==null&&t.stateNode!=null)tg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return be(t),null}if(e=jn(wt.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xt]=t,r[ji]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<qr.length;i++)U(qr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Bd(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Vd(r,o),U("invalid",r)}Bl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),i=["children",""+a]):mi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":so(r),Id(r,o,!0);break;case"textarea":so(r),Nd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=P0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xt]=t,e[ji]=r,eg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Il(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<qr.length;i++)U(qr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Bd(e,r),i=Tl(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),U("invalid",e);break;case"textarea":Vd(e,r),i=Rl(e,r),U("invalid",e);break;default:i=r}Bl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?z0(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&E0(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gi(e,c):typeof c=="number"&&gi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&U("scroll",e):c!=null&&Kc(e,o,c,s))}switch(n){case"input":so(e),Id(e,r,!1);break;case"textarea":so(e),Nd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)ng(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=jn(Fi.current),jn(wt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return be(t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&_e!==null&&t.mode&1&&!(t.flags&128))bm(),mr(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[xt]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else lt!==null&&(xc(lt),lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ce===0&&(ce=3):Pu())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return yr(),uc(e,t),e===null&&ki(t.stateNode.containerInfo),be(t),null;case 10:return fu(t.type._context),be(t),null;case 17:return Re(t.type)&&ys(),be(t),null;case 19:if(G(X),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Vr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=$s(e),s!==null){for(t.flags|=128,Vr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>vr&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=$s(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return be(t),null}else 2*re()-o.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Ov(e,t){switch(cu(t),t.tag){case 1:return Re(t.type)&&ys(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),G(Me),G(je),xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yu(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return yr(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var vo=!1,ke=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,E=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function dc(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Dp=!1;function Wv(e,t){if(Kl=fs,e=am(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(c=s),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},fs=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,b=w.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),b);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch($){ee(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return w=Dp,Dp=!1,w}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dc(t,n,o)}i=i.next}while(i!==r)}}function Zs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rg(e){var t=e.alternate;t!==null&&(e.alternate=null,rg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ji],delete t[Zl],delete t[Cv],delete t[Fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ig(e){return e.tag===5||e.tag===3||e.tag===4}function Pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs));else if(r!==4&&(e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}function hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}var me=null,at=!1;function Nt(e,t,n){for(n=n.child;n!==null;)og(e,t,n),n=n.sibling}function og(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ws,n)}catch{}switch(n.tag){case 5:ke||Jn(n,t);case 6:var r=me,i=at;me=null,Nt(e,t,n),me=r,at=i,me!==null&&(at?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(at?(e=me,n=n.stateNode,e.nodeType===8?Ga(e.parentNode,n):e.nodeType===1&&Ga(e,n),bi(e)):Ga(me,n.stateNode));break;case 4:r=me,i=at,me=n.stateNode.containerInfo,at=!0,Nt(e,t,n),me=r,at=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dc(n,t,s),i=i.next}while(i!==r)}Nt(e,t,n);break;case 1:if(!ke&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Nt(e,t,n),ke=r):Nt(e,t,n);break;default:Nt(e,t,n)}}function Ep(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hv),t.forEach(function(r){var i=Jv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,at=!1;break e;case 3:me=a.stateNode.containerInfo,at=!0;break e;case 4:me=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(me===null)throw Error(D(160));og(o,s,i),me=null,at=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sg(t,e),t=t.sibling}function sg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ft(e),r&4){try{si(3,e,e.return),Zs(3,e)}catch(y){ee(e,e.return,y)}try{si(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:it(t,e),ft(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(it(t,e),ft(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{gi(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&A0(i,o),Il(a,s);var u=Il(a,o);for(s=0;s<c.length;s+=2){var d=c[s],f=c[s+1];d==="style"?z0(i,f):d==="dangerouslySetInnerHTML"?E0(i,f):d==="children"?gi(i,f):Kc(i,d,f,u)}switch(a){case"input":zl(i,o);break;case"textarea":D0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?sr(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ji]=o}catch(y){ee(e,e.return,y)}}break;case 6:if(it(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ee(e,e.return,y)}}break;case 3:if(it(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:it(t,e),ft(e);break;case 13:it(t,e),ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=re())),r&4&&Ep(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||d,it(t,e),ke=u):it(t,e),ft(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(h=E,x=h.child,h.tag){case 0:case 11:case 14:case 15:si(4,h,h.return);break;case 1:Jn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:Jn(h,h.return);break;case 22:if(h.memoizedState!==null){zp(f);continue}}x!==null?(x.return=h,E=x):zp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=T0("display",s))}catch(y){ee(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ee(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ft(e),r&4&&Ep(e);break;case 21:break;default:it(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ig(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=Pp(e);hc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Pp(e);fc(e,a,s);break;default:throw Error(D(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uv(e,t,n){E=e,ag(e)}function ag(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vo;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ke;a=vo;var u=ke;if(vo=s,(ke=c)&&!u)for(E=i;E!==null;)s=E,c=s.child,s.tag===22&&s.memoizedState!==null?Mp(i):c!==null?(c.return=s,E=c):Mp(i);for(;o!==null;)E=o,ag(o),o=o.sibling;E=i,vo=a,ke=u}Tp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Tp(e)}}function Tp(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Zs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&bi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}ke||t.flags&512&&pc(t)}catch(h){ee(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function zp(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Mp(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zs(4,t)}catch(c){ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ee(t,i,c)}}var o=t.return;try{pc(t)}catch(c){ee(t,o,c)}break;case 5:var s=t.return;try{pc(t)}catch(c){ee(t,s,c)}}}catch(c){ee(t,t.return,c)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Gv=Math.ceil,Fs=It.ReactCurrentDispatcher,ju=It.ReactCurrentOwner,tt=It.ReactCurrentBatchConfig,I=0,fe=null,oe=null,ye=0,Ve=0,er=pn(0),ce=0,Ei=null,zn=0,Js=0,Cu=0,ai=null,Te=null,Fu=0,vr=1/0,Ft=null,As=!1,mc=null,rn=null,bo=!1,qt=null,Ds=0,li=0,gc=null,Qo=-1,Zo=0;function Fe(){return I&6?re():Qo!==-1?Qo:Qo=re()}function on(e){return e.mode&1?I&2&&ye!==0?ye&-ye:Dv.transition!==null?(Zo===0&&(Zo=U0()),Zo):(e=O,e!==0||(e=window.event,e=e===void 0?16:Z0(e.type)),e):1}function ut(e,t,n,r){if(50<li)throw li=0,gc=null,Error(D(185));Hi(e,n,r),(!(I&2)||e!==fe)&&(e===fe&&(!(I&2)&&(Js|=n),ce===4&&Kt(e,ye)),Le(e,r),n===1&&I===0&&!(t.mode&1)&&(vr=re()+500,Xs&&fn()))}function Le(e,t){var n=e.callbackNode;D1(e,t);var r=ps(e,e===fe?ye:0);if(r===0)n!==null&&Hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hd(n),t===1)e.tag===0?Av(Rp.bind(null,e)):ym(Rp.bind(null,e)),$v(function(){!(I&6)&&fn()}),n=null;else{switch(G0(r)){case 1:n=Jc;break;case 4:n=H0;break;case 16:n=ds;break;case 536870912:n=W0;break;default:n=ds}n=mg(n,lg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lg(e,t){if(Qo=-1,Zo=0,I&6)throw Error(D(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=ps(e,e===fe?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ps(e,r);else{t=r;var i=I;I|=2;var o=ug();(fe!==e||ye!==t)&&(Ft=null,vr=re()+500,Fn(e,t));do try{Xv();break}catch(a){cg(e,a)}while(!0);pu(),Fs.current=o,I=i,oe!==null?t=0:(fe=null,ye=0,t=ce)}if(t!==0){if(t===2&&(i=Hl(e),i!==0&&(r=i,t=yc(e,i))),t===1)throw n=Ei,Fn(e,0),Kt(e,r),Le(e,re()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yv(i)&&(t=Ps(e,r),t===2&&(o=Hl(e),o!==0&&(r=o,t=yc(e,o))),t===1))throw n=Ei,Fn(e,0),Kt(e,r),Le(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:bn(e,Te,Ft);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Fu+500-re(),10<t)){if(ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ql(bn.bind(null,e,Te,Ft),t);break}bn(e,Te,Ft);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gv(r/1960))-r,10<r){e.timeoutHandle=Ql(bn.bind(null,e,Te,Ft),r);break}bn(e,Te,Ft);break;case 5:bn(e,Te,Ft);break;default:throw Error(D(329))}}}return Le(e,re()),e.callbackNode===n?lg.bind(null,e):null}function yc(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=Ps(e,t),e!==2&&(t=Te,Te=n,t!==null&&xc(t)),e}function xc(e){Te===null?Te=e:Te.push.apply(Te,e)}function Yv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Cu,t&=~Js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Rp(e){if(I&6)throw Error(D(327));dr();var t=ps(e,0);if(!(t&1))return Le(e,re()),null;var n=Ps(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=yc(e,r))}if(n===1)throw n=Ei,Fn(e,0),Kt(e,t),Le(e,re()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Te,Ft),Le(e,re()),null}function Au(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(vr=re()+500,Xs&&fn())}}function Mn(e){qt!==null&&qt.tag===0&&!(I&6)&&dr();var t=I;I|=1;var n=tt.transition,r=O;try{if(tt.transition=null,O=1,e)return e()}finally{O=r,tt.transition=n,I=t,!(I&6)&&fn()}}function Du(){Ve=er.current,G(er)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kv(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ys();break;case 3:yr(),G(Me),G(je),xu();break;case 5:yu(r);break;case 4:yr();break;case 13:G(X);break;case 19:G(X);break;case 10:fu(r.type._context);break;case 22:case 23:Du()}n=n.return}if(fe=e,oe=e=sn(e.current,null),ye=Ve=t,ce=0,Ei=null,Cu=Js=zn=0,Te=ai=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$n=null}return e}function cg(e,t){do{var n=oe;try{if(pu(),Ko.current=Cs,js){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}js=!1}if(Tn=0,pe=le=Q=null,oi=!1,Ai=0,ju.current=null,n===null||n.return===null){ce=1,Ei=t,oe=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=ye,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Sp(s);if(x!==null){x.flags&=-257,kp(x,s,a,o,t),x.mode&1&&wp(o,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(c),t.updateQueue=y}else w.add(c);break e}else{if(!(t&1)){wp(o,u,t),Pu();break e}c=Error(D(426))}}else if(Y&&a.mode&1){var b=Sp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),kp(b,s,a,o,t),uu(xr(c,a));break e}}o=c=xr(c,a),ce!==4&&(ce=2),ai===null?ai=[o]:ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Gm(o,c,t);mp(o,m);break e;case 1:a=c;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rn===null||!rn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=Ym(o,a,t);mp(o,$);break e}}o=o.return}while(o!==null)}pg(n)}catch(j){t=j,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function ug(){var e=Fs.current;return Fs.current=Cs,e===null?Cs:e}function Pu(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(zn&268435455)&&!(Js&268435455)||Kt(fe,ye)}function Ps(e,t){var n=I;I|=2;var r=ug();(fe!==e||ye!==t)&&(Ft=null,Fn(e,t));do try{Kv();break}catch(i){cg(e,i)}while(!0);if(pu(),I=n,Fs.current=r,oe!==null)throw Error(D(261));return fe=null,ye=0,ce}function Kv(){for(;oe!==null;)dg(oe)}function Xv(){for(;oe!==null&&!b1();)dg(oe)}function dg(e){var t=hg(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?pg(e):oe=t,ju.current=null}function pg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ov(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,oe=null;return}}else if(n=_v(n,t,Ve),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ce===0&&(ce=5)}function bn(e,t,n){var r=O,i=tt.transition;try{tt.transition=null,O=1,qv(e,t,n,r)}finally{tt.transition=i,O=r}return null}function qv(e,t,n,r){do dr();while(qt!==null);if(I&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(P1(e,o),e===fe&&(oe=fe=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,mg(ds,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=O;O=1;var a=I;I|=4,ju.current=null,Wv(e,n),sg(n,e),gv(Xl),fs=!!Kl,Xl=Kl=null,e.current=n,Uv(n),w1(),I=a,O=s,tt.transition=o}else e.current=n;if(bo&&(bo=!1,qt=e,Ds=i),o=e.pendingLanes,o===0&&(rn=null),$1(n.stateNode),Le(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(As)throw As=!1,e=mc,mc=null,e;return Ds&1&&e.tag!==0&&dr(),o=e.pendingLanes,o&1?e===gc?li++:(li=0,gc=e):li=0,fn(),null}function dr(){if(qt!==null){var e=G0(Ds),t=tt.transition,n=O;try{if(tt.transition=null,O=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Ds=0,I&6)throw Error(D(331));var i=I;for(I|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:si(8,d,o)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var h=d.sibling,x=d.return;if(rg(d),d===u){E=null;break}if(h!==null){h.return=x,E=h;break}E=x}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,E=m;break e}E=o.return}}var g=e.current;for(E=g;E!==null;){s=E;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,E=v;else e:for(s=g;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zs(9,a)}}catch(j){ee(a,a.return,j)}if(a===s){E=null;break e}var $=a.sibling;if($!==null){$.return=a.return,E=$;break e}E=a.return}}if(I=i,fn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ws,e)}catch{}r=!0}return r}finally{O=n,tt.transition=t}}return!1}function Lp(e,t,n){t=xr(n,t),t=Gm(e,t,1),e=nn(e,t,1),t=Fe(),e!==null&&(Hi(e,1,t),Le(e,t))}function ee(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=xr(n,e),e=Ym(t,e,1),t=nn(t,e,1),e=Fe(),t!==null&&(Hi(t,1,e),Le(t,e));break}}t=t.return}}function Qv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>re()-Fu?Fn(e,0):Cu|=n),Le(e,t)}function fg(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=Fe();e=Lt(e,t),e!==null&&(Hi(e,t,n),Le(e,n))}function Zv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fg(e,n)}function Jv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),fg(e,n)}var hg;hg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Nv(e,t,n);ze=!!(e.flags&131072)}else ze=!1,Y&&t.flags&1048576&&xm(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var i=hr(t,je.current);ur(t,n),i=bu(null,t,r,e,i,n);var o=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,xs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mu(t),i.updater=Qs,t.stateNode=i,i._reactInternals=t,ic(t,r,e,n),t=ac(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&lu(t),Ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tb(r),e=st(r,e),i){case 0:t=sc(null,t,r,e,n);break e;case 1:t=Cp(null,t,r,e,n);break e;case 11:t=$p(null,t,r,e,n);break e;case 14:t=jp(null,t,r,st(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),sc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Cp(e,t,r,i,n);case 3:e:{if(Qm(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$m(e,t),ks(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xr(Error(D(423)),t),t=Fp(e,t,r,n,i);break e}else if(r!==i){i=xr(Error(D(424)),t),t=Fp(e,t,r,n,i);break e}else for(_e=tn(t.stateNode.containerInfo.firstChild),Oe=t,Y=!0,lt=null,n=Sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=Bt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return jm(t),e===null&&tc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ql(r,i)?s=null:o!==null&&ql(r,o)&&(t.flags|=32),qm(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&tc(t),null;case 13:return Zm(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),$p(e,t,r,i,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(ws,r._currentValue),r._currentValue=s,o!==null)if(dt(o.value,s)){if(o.children===i.children&&!Me.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Et(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),nc(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),nc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ur(t,n),i=nt(i),r=r(i),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),jp(e,t,r,i,n);case 15:return Km(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),qo(e,t),t.tag=1,Re(r)?(e=!0,xs(t)):e=!1,ur(t,n),Um(t,r,i),ic(t,r,i,n),ac(null,t,r,!0,e,n);case 19:return Jm(e,t,n);case 22:return Xm(e,t,n)}throw Error(D(156,t.tag))};function mg(e,t){return O0(e,t)}function eb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new eb(e,t,n,r)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tb(e){if(typeof e=="function")return Eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qc)return 11;if(e===Qc)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Eu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Wn:return An(n.children,i,o,t);case Xc:s=8,i|=8;break;case Al:return e=et(12,n,t,i|2),e.elementType=Al,e.lanes=o,e;case Dl:return e=et(13,n,t,i),e.elementType=Dl,e.lanes=o,e;case Pl:return e=et(19,n,t,i),e.elementType=Pl,e.lanes=o,e;case j0:return ea(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k0:s=10;break e;case $0:s=9;break e;case qc:s=11;break e;case Qc:s=14;break e;case Ut:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function An(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function ea(e,t,n,r){return e=et(22,e,r,t),e.elementType=j0,e.lanes=n,e.stateNode={isHidden:!1},e}function el(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function tl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tu(e,t,n,r,i,o,s,a,c){return e=new nb(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(o),e}function rb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gg(e){if(!e)return cn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(Re(n))return gm(e,n,t)}return t}function yg(e,t,n,r,i,o,s,a,c){return e=Tu(n,r,!0,e,i,o,s,a,c),e.context=gg(null),n=e.current,r=Fe(),i=on(n),o=Et(r,i),o.callback=t??null,nn(n,o,i),e.current.lanes=i,Hi(e,i,r),Le(e,r),e}function ta(e,t,n,r){var i=t.current,o=Fe(),s=on(i);return n=gg(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(i,t,s),e!==null&&(ut(e,i,s,o),Yo(e,i,s)),s}function Es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zu(e,t){Bp(e,t),(e=e.alternate)&&Bp(e,t)}function ib(){return null}var xg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}na.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));ta(e,t,null,null)};na.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){ta(null,e,null,null)}),t[Rt]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var t=X0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Q0(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function ob(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Es(s);o.call(u)}}var s=yg(t,r,e,0,null,!1,!1,"",Ip);return e._reactRootContainer=s,e[Rt]=s.current,ki(e.nodeType===8?e.parentNode:e),Mn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Es(c);a.call(u)}}var c=Tu(e,0,!1,null,null,!1,!1,"",Ip);return e._reactRootContainer=c,e[Rt]=c.current,ki(e.nodeType===8?e.parentNode:e),Mn(function(){ta(t,c,n,r)}),c}function ia(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=Es(s);a.call(c)}}ta(t,s,e,i)}else s=ob(n,t,e,i,r);return Es(s)}Y0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(eu(t,n|1),Le(t,re()),!(I&6)&&(vr=re()+500,fn()))}break;case 13:Mn(function(){var r=Lt(e,1);if(r!==null){var i=Fe();ut(r,e,1,i)}}),zu(e,1)}};tu=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Fe();ut(t,e,134217728,n)}zu(e,134217728)}};K0=function(e){if(e.tag===13){var t=on(e),n=Lt(e,t);if(n!==null){var r=Fe();ut(n,e,t,r)}zu(e,t)}};X0=function(){return O};q0=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Nl=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ks(r);if(!i)throw Error(D(90));F0(r),zl(r,i)}}}break;case"textarea":D0(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};L0=Au;B0=Mn;var sb={usingClientEntryPoint:!1,Events:[Ui,Kn,Ks,M0,R0,Au]},Nr={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ab={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=N0(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||ib,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{Ws=wo.inject(ab),bt=wo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sb;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(D(200));return rb(e,t,null,n)};Ge.createRoot=function(e,t){if(!Ru(e))throw Error(D(299));var n=!1,r="",i=xg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tu(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,ki(e.nodeType===8?e.parentNode:e),new Mu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=N0(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Mn(e)};Ge.hydrate=function(e,t,n){if(!ra(t))throw Error(D(200));return ia(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=xg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yg(t,null,e,1,n??null,i,!1,o,s),e[Rt]=t.current,ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new na(t)};Ge.render=function(e,t,n){if(!ra(t))throw Error(D(200));return ia(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ra(e))throw Error(D(40));return e._reactRootContainer?(Mn(function(){ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Au;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ra(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return ia(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vg)}catch(e){console.error(e)}}vg(),v0.exports=Ge;var lb=v0.exports,Vp=lb;Cl.createRoot=Vp.createRoot,Cl.hydrateRoot=Vp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const Np="popstate";function cb(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return vc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ts(i)}return db(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ub(){return Math.random().toString(36).substr(2,8)}function _p(e,t){return{usr:e.state,key:e.key,idx:t}}function vc(e,t,n,r){return n===void 0&&(n=null),Ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||ub()})}function Ts(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function db(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Qt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Ti({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Qt.Pop;let b=d(),m=b==null?null:b-u;u=b,c&&c({action:a,location:y.location,delta:m})}function h(b,m){a=Qt.Push;let g=vc(y.location,b,m);u=d()+1;let v=_p(g,u),$=y.createHref(g);try{s.pushState(v,"",$)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign($)}o&&c&&c({action:a,location:y.location,delta:1})}function x(b,m){a=Qt.Replace;let g=vc(y.location,b,m);u=d();let v=_p(g,u),$=y.createHref(g);s.replaceState(v,"",$),o&&c&&c({action:a,location:y.location,delta:0})}function w(b){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof b=="string"?b:Ts(b);return g=g.replace(/ $/,"%20"),se(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let y={get action(){return a},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Np,f),c=b,()=>{i.removeEventListener(Np,f),c=null}},createHref(b){return t(i,b)},createURL:w,encodeLocation(b){let m=w(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:x,go(b){return s.go(b)}};return y}var Op;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Op||(Op={}));function pb(e,t,n){return n===void 0&&(n="/"),fb(e,t,n)}function fb(e,t,n,r){let i=typeof t=="string"?Cr(t):t,o=Lu(i.pathname||"/",n);if(o==null)return null;let s=wg(e);hb(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let u=Cb(o);a=kb(s[c],u)}return a}function wg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(se(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=an([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wg(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:wb(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let c of Sg(o.path))i(o,s,c)}),t}function Sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Sg(r.join("/")),a=[];return a.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function hb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mb=/^:[\w-]+$/,gb=3,yb=2,xb=1,vb=10,bb=-2,Hp=e=>e==="*";function wb(e,t){let n=e.split("/"),r=n.length;return n.some(Hp)&&(r+=bb),t&&(r+=yb),n.filter(i=>!Hp(i)).reduce((i,o)=>i+(mb.test(o)?gb:o===""?xb:vb),r)}function Sb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function kb(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=$b({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:an([o,f.pathname]),pathnameBase:Pb(an([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=an([o,f.pathnameBase]))}return s}function $b(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:x}=d;if(h==="*"){let y=a[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[f];return x&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function jb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Cb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:Ab(n,t):t,search:Eb(r),hash:Tb(i)}}function Ab(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Db(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kg(e,t){let n=Db(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $g(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=Ti({},e),se(!i.pathname||!i.pathname.includes("?"),nl("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),nl("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),nl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let c=Fb(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const an=e=>e.join("/").replace(/\/\/+/g,"/"),Pb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Eb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jg=["post","put","patch","delete"];new Set(jg);const Mb=["get",...jg];new Set(Mb);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(this,arguments)}const Bu=S.createContext(null),Rb=S.createContext(null),In=S.createContext(null),oa=S.createContext(null),Vn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Cg=S.createContext(null);function Lb(e,t){let{relative:n}=t===void 0?{}:t;Yi()||se(!1);let{basename:r,navigator:i}=S.useContext(In),{hash:o,pathname:s,search:a}=Ag(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:an([r,s])),i.createHref({pathname:c,search:a,hash:o})}function Yi(){return S.useContext(oa)!=null}function Fr(){return Yi()||se(!1),S.useContext(oa).location}function Fg(e){S.useContext(In).static||S.useLayoutEffect(e)}function sa(){let{isDataRoute:e}=S.useContext(Vn);return e?Xb():Bb()}function Bb(){Yi()||se(!1);let e=S.useContext(Bu),{basename:t,future:n,navigator:r}=S.useContext(In),{matches:i}=S.useContext(Vn),{pathname:o}=Fr(),s=JSON.stringify(kg(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Fg(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=$g(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:an([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function Ag(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(In),{matches:i}=S.useContext(Vn),{pathname:o}=Fr(),s=JSON.stringify(kg(i,r.v7_relativeSplatPath));return S.useMemo(()=>$g(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Ib(e,t){return Vb(e,t)}function Vb(e,t,n,r){Yi()||se(!1);let{navigator:i,static:o}=S.useContext(In),{matches:s}=S.useContext(Vn),a=s[s.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=Fr(),f;if(t){var h;let m=typeof t=="string"?Cr(t):t;u==="/"||(h=m.pathname)!=null&&h.startsWith(u)||se(!1),f=m}else f=d;let x=f.pathname||"/",w=x;if(u!=="/"){let m=u.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=pb(e,{pathname:w}),b=Wb(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},c,m.params),pathname:an([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:an([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,r);return t&&b?S.createElement(oa.Provider,{value:{location:zi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Qt.Pop}},b):b}function Nb(){let e=Kb(),t=zb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const _b=S.createElement(Nb,null);class Ob extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Vn.Provider,{value:this.props.routeContext},S.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hb(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Bu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Vn.Provider,{value:t},r)}function Wb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||se(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:x}=n,w=f.route.loader&&h[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||w){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let x,w=!1,y=null,b=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||_b,c&&(u<0&&h===0?(qb("route-fallback"),w=!0,b=null):u===h&&(w=!0,b=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,h+1)),g=()=>{let v;return x?v=y:w?v=b:f.route.Component?v=S.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,S.createElement(Hb,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?S.createElement(Ob,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var Dg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dg||{}),Pg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pg||{});function Ub(e){let t=S.useContext(Bu);return t||se(!1),t}function Gb(e){let t=S.useContext(Rb);return t||se(!1),t}function Yb(e){let t=S.useContext(Vn);return t||se(!1),t}function Eg(e){let t=Yb(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function Kb(){var e;let t=S.useContext(Cg),n=Gb(),r=Eg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Xb(){let{router:e}=Ub(Dg.UseNavigateStable),t=Eg(Pg.UseNavigateStable),n=S.useRef(!1);return Fg(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,zi({fromRouteId:t},o)))},[e,t])}const Wp={};function qb(e,t,n){Wp[e]||(Wp[e]=!0)}function Qb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ht(e){se(!1)}function Zb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:o,static:s=!1,future:a}=e;Yi()&&se(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:o,static:s,future:zi({v7_relativeSplatPath:!1},a)}),[c,a,o,s]);typeof r=="string"&&(r=Cr(r));let{pathname:d="/",search:f="",hash:h="",state:x=null,key:w="default"}=r,y=S.useMemo(()=>{let b=Lu(d,c);return b==null?null:{location:{pathname:b,search:f,hash:h,state:x,key:w},navigationType:i}},[c,d,f,h,x,w,i]);return y==null?null:S.createElement(In.Provider,{value:u},S.createElement(oa.Provider,{children:n,value:y}))}function Jb(e){let{children:t,location:n}=e;return Ib(bc(t),n)}new Promise(()=>{});function bc(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,bc(r.props.children,o));return}r.type!==ht&&se(!1),!r.props.index||!r.props.children||se(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wc(){return wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wc.apply(this,arguments)}function e2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function t2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n2(e,t){return e.button===0&&(!t||t==="_self")&&!t2(e)}const r2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],i2="6";try{window.__reactRouterVersion=i2}catch{}const o2="startTransition",Up=jl[o2];function s2(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=cb({window:i,v5Compat:!0}));let s=o.current,[a,c]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=S.useCallback(f=>{u&&Up?Up(()=>c(f)):c(f)},[c,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.useEffect(()=>Qb(r),[r]),S.createElement(Zb,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const a2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,h=e2(t,r2),{basename:x}=S.useContext(In),w,y=!1;if(typeof u=="string"&&l2.test(u)&&(w=u,a2))try{let v=new URL(window.location.href),$=u.startsWith("//")?new URL(v.protocol+u):new URL(u),j=Lu($.pathname,x);$.origin===v.origin&&j!=null?u=j+$.search+$.hash:y=!0}catch{}let b=Lb(u,{relative:i}),m=c2(u,{replace:s,state:a,target:c,preventScrollReset:d,relative:i,viewTransition:f});function g(v){r&&r(v),v.defaultPrevented||m(v)}return S.createElement("a",wc({},h,{href:w||b,onClick:y||o?r:g,ref:n,target:c}))});var Gp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gp||(Gp={}));var Yp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function c2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,c=sa(),u=Fr(),d=Ag(e,{relative:s});return S.useCallback(f=>{if(n2(f,n)){f.preventDefault();let h=r!==void 0?r:Ts(u)===Ts(d);c(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,c,d,r,i,n,e,o,s,a])}function u2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function d2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var p2=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(d2(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=u2(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),we="-ms-",zs="-moz-",V="-webkit-",Tg="comm",Iu="rule",Vu="decl",f2="@import",zg="@keyframes",h2="@layer",m2=Math.abs,aa=String.fromCharCode,g2=Object.assign;function y2(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Mg(e){return e.trim()}function x2(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function Sc(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Mi(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function Nu(e){return e.length}function So(e,t){return t.push(e),e}function v2(e,t){return e.map(t).join("")}var la=1,br=1,Rg=0,Be=0,ie=0,Ar="";function ca(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:la,column:br,length:s,return:""}}function _r(e,t){return g2(ca("",null,null,"",null,null,0),e,{length:-e.length},t)}function b2(){return ie}function w2(){return ie=Be>0?ge(Ar,--Be):0,br--,ie===10&&(br=1,la--),ie}function He(){return ie=Be<Rg?ge(Ar,Be++):0,br++,ie===10&&(br=1,la++),ie}function St(){return ge(Ar,Be)}function es(){return Be}function Ki(e,t){return Mi(Ar,e,t)}function Ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lg(e){return la=br=1,Rg=gt(Ar=e),Be=0,[]}function Bg(e){return Ar="",e}function ts(e){return Mg(Ki(Be-1,kc(e===91?e+2:e===40?e+1:e)))}function S2(e){for(;(ie=St())&&ie<33;)He();return Ri(e)>2||Ri(ie)>3?"":" "}function k2(e,t){for(;--t&&He()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Ki(e,es()+(t<6&&St()==32&&He()==32))}function kc(e){for(;He();)switch(ie){case e:return Be;case 34:case 39:e!==34&&e!==39&&kc(ie);break;case 40:e===41&&kc(e);break;case 92:He();break}return Be}function $2(e,t){for(;He()&&e+ie!==57;)if(e+ie===84&&St()===47)break;return"/*"+Ki(t,Be-1)+"*"+aa(e===47?e:He())}function j2(e){for(;!Ri(St());)He();return Ki(e,Be)}function C2(e){return Bg(ns("",null,null,null,[""],e=Lg(e),0,[0],e))}function ns(e,t,n,r,i,o,s,a,c){for(var u=0,d=0,f=s,h=0,x=0,w=0,y=1,b=1,m=1,g=0,v="",$=i,j=o,C=r,F=v;b;)switch(w=g,g=He()){case 40:if(w!=108&&ge(F,f-1)==58){Sc(F+=N(ts(g),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:F+=ts(g);break;case 9:case 10:case 13:case 32:F+=S2(w);break;case 92:F+=k2(es()-1,7);continue;case 47:switch(St()){case 42:case 47:So(F2($2(He(),es()),t,n),c);break;default:F+="/"}break;case 123*y:a[u++]=gt(F)*m;case 125*y:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+d:m==-1&&(F=N(F,/\f/g,"")),x>0&&gt(F)-f&&So(x>32?Xp(F+";",r,n,f-1):Xp(N(F," ","")+";",r,n,f-2),c);break;case 59:F+=";";default:if(So(C=Kp(F,t,n,u,d,i,a,v,$=[],j=[],f),o),g===123)if(d===0)ns(F,t,C,C,$,o,f,a,j);else switch(h===99&&ge(F,3)===110?100:h){case 100:case 108:case 109:case 115:ns(e,C,C,r&&So(Kp(e,C,C,0,0,i,a,v,i,$=[],f),j),i,j,f,a,r?$:j);break;default:ns(F,C,C,C,[""],j,0,a,j)}}u=d=x=0,y=m=1,v=F="",f=s;break;case 58:f=1+gt(F),x=w;default:if(y<1){if(g==123)--y;else if(g==125&&y++==0&&w2()==125)continue}switch(F+=aa(g),g*y){case 38:m=d>0?1:(F+="\f",-1);break;case 44:a[u++]=(gt(F)-1)*m,m=1;break;case 64:St()===45&&(F+=ts(He())),h=St(),d=f=gt(v=F+=j2(es())),g++;break;case 45:w===45&&gt(F)==2&&(y=0)}}return o}function Kp(e,t,n,r,i,o,s,a,c,u,d){for(var f=i-1,h=i===0?o:[""],x=Nu(h),w=0,y=0,b=0;w<r;++w)for(var m=0,g=Mi(e,f+1,f=m2(y=s[w])),v=e;m<x;++m)(v=Mg(y>0?h[m]+" "+g:N(g,/&\f/g,h[m])))&&(c[b++]=v);return ca(e,t,n,i===0?Iu:a,c,u,d)}function F2(e,t,n){return ca(e,t,n,Tg,aa(b2()),Mi(e,2,-2),0)}function Xp(e,t,n,r){return ca(e,t,n,Vu,Mi(e,0,r),Mi(e,r+1,-1),r)}function pr(e,t){for(var n="",r=Nu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function A2(e,t,n,r){switch(e.type){case h2:if(e.children.length)break;case f2:case Vu:return e.return=e.return||e.value;case Tg:return"";case zg:return e.return=e.value+"{"+pr(e.children,r)+"}";case Iu:e.value=e.props.join(",")}return gt(n=pr(e.children,r))?e.return=e.value+"{"+n+"}":""}function D2(e){var t=Nu(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function P2(e){return function(t){t.root||(t=t.return)&&e(t)}}var qp=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var i=t(r);return n.set(r,i),i}};function Ig(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var E2=function(t,n,r){for(var i=0,o=0;i=o,o=St(),i===38&&o===12&&(n[r]=1),!Ri(o);)He();return Ki(t,Be)},T2=function(t,n){var r=-1,i=44;do switch(Ri(i)){case 0:i===38&&St()===12&&(n[r]=1),t[r]+=E2(Be-1,n,r);break;case 2:t[r]+=ts(i);break;case 4:if(i===44){t[++r]=St()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=aa(i)}while(i=He());return t},z2=function(t,n){return Bg(T2(Lg(t),n))},Qp=new WeakMap,M2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Qp.get(r))&&!i){Qp.set(t,!0);for(var o=[],s=z2(n,o),a=r.props,c=0,u=0;c<s.length;c++)for(var d=0;d<a.length;d++,u++)t.props[u]=o[c]?s[c].replace(/&\f/g,a[d]):a[d]+" "+s[c]}}},R2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vg(e,t){switch(y2(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+zs+e+we+e+e;case 6828:case 4268:return V+e+we+e+e;case 6165:return V+e+we+"flex-"+e+e;case 5187:return V+e+N(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return V+e+we+"flex-item-"+N(e,/flex-|-self/,"")+e;case 4675:return V+e+we+"flex-line-pack"+N(e,/align-content|flex-|-self/,"")+e;case 5548:return V+e+we+N(e,"shrink","negative")+e;case 5292:return V+e+we+N(e,"basis","preferred-size")+e;case 6060:return V+"box-"+N(e,"-grow","")+V+e+we+N(e,"grow","positive")+e;case 4554:return V+N(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+zs+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Sc(e,"stretch")?Vg(N(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ge(e,t+1)!==115)break;case 6444:switch(ge(e,gt(e)-3-(~Sc(e,"!important")&&10))){case 107:return N(e,":",":"+V)+e;case 101:return N(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(ge(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+we+"$2box$3")+e}break;case 5936:switch(ge(e,t+11)){case 114:return V+e+we+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+we+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+we+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return V+e+we+e+e}return e}var L2=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Vu:t.return=Vg(t.value,t.length);break;case zg:return pr([_r(t,{value:N(t.value,"@","@"+V)})],i);case Iu:if(t.length)return v2(t.props,function(o){switch(x2(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return pr([_r(t,{props:[N(o,/:(read-\w+)/,":"+zs+"$1")]})],i);case"::placeholder":return pr([_r(t,{props:[N(o,/:(plac\w+)/,":"+V+"input-$1")]}),_r(t,{props:[N(o,/:(plac\w+)/,":"+zs+"$1")]}),_r(t,{props:[N(o,/:(plac\w+)/,we+"input-$1")]})],i)}return""})}},B2=[L2],I2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var b=y.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||B2,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var b=y.getAttribute("data-emotion").split(" "),m=1;m<b.length;m++)o[b[m]]=!0;a.push(y)});var c,u=[M2,R2];{var d,f=[A2,P2(function(y){d.insert(y)})],h=D2(u.concat(i,f)),x=function(b){return pr(C2(b),h)};c=function(b,m,g,v){d=g,x(b?b+"{"+m.styles+"}":m.styles),v&&(w.inserted[m.name]=!0)}}var w={key:n,sheet:new p2({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:c};return w.sheet.hydrate(a),w};function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ms.apply(null,arguments)}var Ng={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=typeof Symbol=="function"&&Symbol.for,_u=he?Symbol.for("react.element"):60103,Ou=he?Symbol.for("react.portal"):60106,ua=he?Symbol.for("react.fragment"):60107,da=he?Symbol.for("react.strict_mode"):60108,pa=he?Symbol.for("react.profiler"):60114,fa=he?Symbol.for("react.provider"):60109,ha=he?Symbol.for("react.context"):60110,Hu=he?Symbol.for("react.async_mode"):60111,ma=he?Symbol.for("react.concurrent_mode"):60111,ga=he?Symbol.for("react.forward_ref"):60112,ya=he?Symbol.for("react.suspense"):60113,V2=he?Symbol.for("react.suspense_list"):60120,xa=he?Symbol.for("react.memo"):60115,va=he?Symbol.for("react.lazy"):60116,N2=he?Symbol.for("react.block"):60121,_2=he?Symbol.for("react.fundamental"):60117,O2=he?Symbol.for("react.responder"):60118,H2=he?Symbol.for("react.scope"):60119;function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _u:switch(e=e.type,e){case Hu:case ma:case ua:case pa:case da:case ya:return e;default:switch(e=e&&e.$$typeof,e){case ha:case ga:case va:case xa:case fa:return e;default:return t}}case Ou:return t}}}function _g(e){return Ke(e)===ma}H.AsyncMode=Hu;H.ConcurrentMode=ma;H.ContextConsumer=ha;H.ContextProvider=fa;H.Element=_u;H.ForwardRef=ga;H.Fragment=ua;H.Lazy=va;H.Memo=xa;H.Portal=Ou;H.Profiler=pa;H.StrictMode=da;H.Suspense=ya;H.isAsyncMode=function(e){return _g(e)||Ke(e)===Hu};H.isConcurrentMode=_g;H.isContextConsumer=function(e){return Ke(e)===ha};H.isContextProvider=function(e){return Ke(e)===fa};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_u};H.isForwardRef=function(e){return Ke(e)===ga};H.isFragment=function(e){return Ke(e)===ua};H.isLazy=function(e){return Ke(e)===va};H.isMemo=function(e){return Ke(e)===xa};H.isPortal=function(e){return Ke(e)===Ou};H.isProfiler=function(e){return Ke(e)===pa};H.isStrictMode=function(e){return Ke(e)===da};H.isSuspense=function(e){return Ke(e)===ya};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ua||e===ma||e===pa||e===da||e===ya||e===V2||typeof e=="object"&&e!==null&&(e.$$typeof===va||e.$$typeof===xa||e.$$typeof===fa||e.$$typeof===ha||e.$$typeof===ga||e.$$typeof===_2||e.$$typeof===O2||e.$$typeof===H2||e.$$typeof===N2)};H.typeOf=Ke;Ng.exports=H;var W2=Ng.exports,Og=W2,U2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hg={};Hg[Og.ForwardRef]=U2;Hg[Og.Memo]=G2;var Y2=!0;function Wg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var Wu=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Y2===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Uu=function(t,n,r){Wu(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function K2(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var X2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},q2=/[A-Z]|^ms/g,Q2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ug=function(t){return t.charCodeAt(1)===45},Zp=function(t){return t!=null&&typeof t!="boolean"},rl=Ig(function(e){return Ug(e)?e:e.replace(q2,"-$&").toLowerCase()}),Jp=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Q2,function(r,i,o){return yt={name:i,styles:o,next:yt},i})}return X2[t]!==1&&!Ug(t)&&typeof n=="number"&&n!==0?n+"px":n};function Li(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return yt={name:i.name,styles:i.styles,next:yt},i.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)yt={name:s.name,styles:s.styles,next:yt},s=s.next;var a=o.styles+";";return a}return Z2(e,t,n)}case"function":{if(e!==void 0){var c=yt,u=n(e);return yt=c,Li(e,t,u)}break}}var d=n;if(t==null)return d;var f=t[d];return f!==void 0?f:d}function Z2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Li(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Zp(a)&&(r+=rl(o)+":"+Jp(o,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var c=0;c<s.length;c++)Zp(s[c])&&(r+=rl(o)+":"+Jp(o,s[c])+";");else{var u=Li(e,t,s);switch(o){case"animation":case"animationName":{r+=rl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var ef=/label:\s*([^\s;{]+)\s*(;|$)/g,yt;function ba(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";yt=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=Li(n,t,o);else{var s=o;i+=s[0]}for(var a=1;a<e.length;a++)if(i+=Li(n,t,e[a]),r){var c=o;i+=c[a]}ef.lastIndex=0;for(var u="",d;(d=ef.exec(i))!==null;)u+="-"+d[1];var f=K2(i)+u;return{name:f,styles:i,next:yt}}var J2=function(t){return t()},Gg=jl.useInsertionEffect?jl.useInsertionEffect:!1,Yg=Gg||J2,tf=Gg||S.useLayoutEffect,Kg=S.createContext(typeof HTMLElement<"u"?I2({key:"css"}):null);Kg.Provider;var Gu=function(t){return S.forwardRef(function(n,r){var i=S.useContext(Kg);return t(n,i,r)})},Bi=S.createContext({}),ew=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Ms({},t,n)},tw=qp(function(e){return qp(function(t){return ew(e,t)})}),Xg=function(t){var n=S.useContext(Bi);return t.theme!==n&&(n=tw(n)(t.theme)),S.createElement(Bi.Provider,{value:n},t.children)},Yu={}.hasOwnProperty,$c="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",nw=function(t,n){var r={};for(var i in n)Yu.call(n,i)&&(r[i]=n[i]);return r[$c]=t,r},rw=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Wu(n,r,i),Yg(function(){return Uu(n,r,i)}),null},iw=Gu(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[$c],o=[r],s="";typeof e.className=="string"?s=Wg(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var a=ba(o,void 0,S.useContext(Bi));s+=t.key+"-"+a.name;var c={};for(var u in e)Yu.call(e,u)&&u!=="css"&&u!==$c&&(c[u]=e[u]);return c.className=s,n&&(c.ref=n),S.createElement(S.Fragment,null,S.createElement(rw,{cache:t,serialized:a,isStringTag:typeof i=="string"}),S.createElement(i,c))}),ow=iw,nf=function(t,n){var r=arguments;if(n==null||!Yu.call(n,"css"))return S.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=ow,o[1]=nw(t,n);for(var s=2;s<i;s++)o[s]=r[s];return S.createElement.apply(null,o)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(nf||(nf={}));var sw=Gu(function(e,t){var n=e.styles,r=ba([n],void 0,S.useContext(Bi)),i=S.useRef();return tf(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",o),s.hydrate([c])),i.current=[s,a],function(){s.flush()}},[t]),tf(function(){var o=i.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(r.next!==void 0&&Uu(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function aw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ba(t)}const Ku=S.createContext({});function Dr(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const wa=S.createContext(null),Sa=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class lw extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cw({children:e,isPresent:t}){const n=S.useId(),r=S.useRef(null),i=S.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=S.useContext(Sa);return S.useInsertionEffect(()=>{const{width:s,height:a,top:c,left:u}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),l.jsx(lw,{isPresent:t,childRef:r,sizeRef:i,children:S.cloneElement(e,{ref:r})})}const uw=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Dr(dw),c=S.useId(),u=S.useCallback(f=>{a.set(f,!0);for(const h of a.values())if(!h)return;r&&r()},[a,r]),d=S.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(a.set(f,!1),()=>a.delete(f))}),o?[Math.random(),u]:[n,u]);return S.useMemo(()=>{a.forEach((f,h)=>a.set(h,!1))},[n]),S.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=l.jsx(cw,{isPresent:n,children:e})),l.jsx(wa.Provider,{value:d,children:e})};function dw(){return new Map}function qg(e=!0){const t=S.useContext(wa);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=S.useId();S.useEffect(()=>{e&&i(o)},[e]);const s=S.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const ko=e=>e.key||"";function rf(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const Xu=typeof window<"u",ka=Xu?S.useLayoutEffect:S.useEffect,jt=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1})=>{const[a,c]=qg(s),u=S.useMemo(()=>rf(e),[e]),d=s&&!a?[]:u.map(ko),f=S.useRef(!0),h=S.useRef(u),x=Dr(()=>new Map),[w,y]=S.useState(u),[b,m]=S.useState(u);ka(()=>{f.current=!1,h.current=u;for(let $=0;$<b.length;$++){const j=ko(b[$]);d.includes(j)?x.delete(j):x.get(j)!==!0&&x.set(j,!1)}},[b,d.length,d.join("-")]);const g=[];if(u!==w){let $=[...u];for(let j=0;j<b.length;j++){const C=b[j],F=ko(C);d.includes(F)||($.splice(j,0,C),g.push(C))}o==="wait"&&g.length&&($=g),m(rf($)),y(u);return}const{forceRender:v}=S.useContext(Ku);return l.jsx(l.Fragment,{children:b.map($=>{const j=ko($),C=s&&!a?!1:u===b||d.includes(j),F=()=>{if(x.has(j))x.set(j,!0);else return;let A=!0;x.forEach(L=>{L||(A=!1)}),A&&(v==null||v(),m(h.current),s&&(c==null||c()),r&&r())};return l.jsx(uw,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:C?void 0:F,children:$},j)})})},Ae=e=>e;let pw=Ae,Qg=Ae;function qu(e){let t;return()=>(t===void 0&&(t=e()),t)}const Rn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Tt=e=>e*1e3,zt=e=>e/1e3,fw={useManualTiming:!1};function hw(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,d=!1,f=!1)=>{const x=f&&r?t:n;return d&&o.add(u),x.has(u)||x.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const $o=["read","resolveKeyframes","update","preRender","render","postRender"],mw=40;function Zg(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=$o.reduce((m,g)=>(m[g]=hw(o),m),{}),{read:a,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:h}=s,x=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,mw),1),i.timestamp=m,i.isProcessing=!0,a.process(i),c.process(i),u.process(i),d.process(i),f.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},w=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:$o.reduce((m,g)=>{const v=s[g];return m[g]=($,j=!1,C=!1)=>(n||w(),v.schedule($,j,C)),m},{}),cancel:m=>{for(let g=0;g<$o.length;g++)s[$o[g]].cancel(m)},state:i,steps:s}}const{schedule:_,cancel:pt,state:de,steps:il}=Zg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ae,!0),Jg=S.createContext({strict:!1}),of={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wr={};for(const e in of)wr[e]={isEnabled:t=>of[e].some(n=>!!t[n])};function gw(e){for(const t in e)wr[t]={...wr[t],...e[t]}}const yw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yw.has(e)}let ey=e=>!Rs(e);function xw(e){e&&(ey=t=>t.startsWith("on")?!Rs(t):e(t))}try{xw(require("@emotion/is-prop-valid").default)}catch{}function vw(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ey(i)||n===!0&&Rs(i)||!t&&!Rs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function bw(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const $a=S.createContext({});function Ii(e){return typeof e=="string"||Array.isArray(e)}function ja(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Qu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zu=["initial",...Qu];function Ca(e){return ja(e.animate)||Zu.some(t=>Ii(e[t]))}function ty(e){return!!(Ca(e)||e.variants)}function ww(e,t){if(Ca(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ii(n)?n:void 0,animate:Ii(r)?r:void 0}}return e.inherit!==!1?t:{}}function Sw(e){const{initial:t,animate:n}=ww(e,S.useContext($a));return S.useMemo(()=>({initial:t,animate:n}),[sf(t),sf(n)])}function sf(e){return Array.isArray(e)?e.join(" "):e}const kw=Symbol.for("motionComponentSymbol");function tr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function $w(e,t,n){return S.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):tr(n)&&(n.current=r))},[t])}const Ju=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),jw="framerAppearId",ny="data-"+Ju(jw),{schedule:ed}=Zg(queueMicrotask,!1),ry=S.createContext({});function Cw(e,t,n,r,i){var o,s;const{visualElement:a}=S.useContext($a),c=S.useContext(Jg),u=S.useContext(wa),d=S.useContext(Sa).reducedMotion,f=S.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const h=f.current,x=S.useContext(ry);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&Fw(f.current,n,i,x);const w=S.useRef(!1);S.useInsertionEffect(()=>{h&&w.current&&h.update(n,u)});const y=n[ny],b=S.useRef(!!y&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,y))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,y)));return ka(()=>{h&&(w.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),ed.render(h.render),b.current&&h.animationState&&h.animationState.animateChanges())}),S.useEffect(()=>{h&&(!b.current&&h.animationState&&h.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,y)}),b.current=!1))}),h}function Fw(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:iy(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&tr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function iy(e){if(e)return e.options.allowProjection!==!1?e.projection:iy(e.parent)}function Aw({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&gw(e);function a(u,d){let f;const h={...S.useContext(Sa),...u,layoutId:Dw(u)},{isStatic:x}=h,w=Sw(u),y=r(u,x);if(!x&&Xu){Pw();const b=Ew(h);f=b.MeasureLayout,w.visualElement=Cw(i,y,h,t,b.ProjectionNode)}return l.jsxs($a.Provider,{value:w,children:[f&&w.visualElement?l.jsx(f,{visualElement:w.visualElement,...h}):null,n(i,u,$w(y,w.visualElement,d),y,x,w.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const c=S.forwardRef(a);return c[kw]=i,c}function Dw({layoutId:e}){const t=S.useContext(Ku).id;return t&&e!==void 0?t+"-"+e:e}function Pw(e,t){S.useContext(Jg).strict}function Ew(e){const{drag:t,layout:n}=wr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Tw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function td(e){return typeof e!="string"||e.includes("-")?!1:!!(Tw.indexOf(e)>-1||/[A-Z]/u.test(e))}function af(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function nd(e,t,n,r){if(typeof t=="function"){const[i,o]=af(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=af(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const jc=e=>Array.isArray(e),zw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Mw=e=>jc(e)?e[e.length-1]||0:e,$e=e=>!!(e&&e.getVelocity);function rs(e){const t=$e(e)?e.get():e;return zw(t)?t.toValue():t}function Rw({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:Lw(r,i,o,e),renderState:t()};return n&&(s.onMount=a=>n({props:r,current:a,...s}),s.onUpdate=a=>n(a)),s}const oy=e=>(t,n)=>{const r=S.useContext($a),i=S.useContext(wa),o=()=>Rw(e,t,r,i);return n?o():Dr(o)};function Lw(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=rs(o[h]);let{initial:s,animate:a}=e;const c=Ca(e),u=ty(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;if(f&&typeof f!="boolean"&&!ja(f)){const h=Array.isArray(f)?f:[f];for(let x=0;x<h.length;x++){const w=nd(e,h[x]);if(w){const{transitionEnd:y,transition:b,...m}=w;for(const g in m){let v=m[g];if(Array.isArray(v)){const $=d?v.length-1:0;v=v[$]}v!==null&&(i[g]=v)}for(const g in y)i[g]=y[g]}}}return i}const Pr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nn=new Set(Pr),sy=e=>t=>typeof t=="string"&&t.startsWith(e),ay=sy("--"),Bw=sy("var(--"),rd=e=>Bw(e)?Iw.test(e.split("/*")[0].trim()):!1,Iw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ly=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ct=(e,t,n)=>n>t?t:n<e?e:n,Er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Vi={...Er,transform:e=>Ct(0,1,e)},jo={...Er,default:1},Xi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ht=Xi("deg"),kt=Xi("%"),z=Xi("px"),Vw=Xi("vh"),Nw=Xi("vw"),lf={...kt,parse:e=>kt.parse(e)/100,transform:e=>kt.transform(e*100)},_w={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},Ow={rotate:Ht,rotateX:Ht,rotateY:Ht,rotateZ:Ht,scale:jo,scaleX:jo,scaleY:jo,scaleZ:jo,skew:Ht,skewX:Ht,skewY:Ht,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Vi,originX:lf,originY:lf,originZ:z},cf={...Er,transform:Math.round},id={..._w,...Ow,zIndex:cf,size:z,fillOpacity:Vi,strokeOpacity:Vi,numOctaves:cf},Hw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ww=Pr.length;function Uw(e,t,n){let r="",i=!0;for(let o=0;o<Ww;o++){const s=Pr[o],a=e[s];if(a===void 0)continue;let c=!0;if(typeof a=="number"?c=a===(s.startsWith("scale")?1:0):c=parseFloat(a)===0,!c||n){const u=ly(a,id[s]);if(!c){i=!1;const d=Hw[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function od(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const c in t){const u=t[c];if(Nn.has(c)){s=!0;continue}else if(ay(c)){i[c]=u;continue}else{const d=ly(u,id[c]);c.startsWith("origin")?(a=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=Uw(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}const Gw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Yw={offset:"strokeDashoffset",array:"strokeDasharray"};function Kw(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Gw:Yw;e[o.offset]=z.transform(-r);const s=z.transform(t),a=z.transform(n);e[o.array]=`${s} ${a}`}function uf(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function Xw(e,t,n){const r=uf(t,e.x,e.width),i=uf(n,e.y,e.height);return`${r} ${i}`}function sd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:c=0,...u},d,f){if(od(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:x,dimensions:w}=e;h.transform&&(w&&(x.transform=h.transform),delete h.transform),w&&(i!==void 0||o!==void 0||x.transform)&&(x.transformOrigin=Xw(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),s!==void 0&&Kw(h,s,a,c,!1)}const ad=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),cy=()=>({...ad(),attrs:{}}),ld=e=>typeof e=="string"&&e.toLowerCase()==="svg";function uy(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const dy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function py(e,t,n,r){uy(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(dy.has(i)?i:Ju(i),t.attrs[i])}const Ls={};function qw(e){Object.assign(Ls,e)}function fy(e,{layout:t,layoutId:n}){return Nn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ls[e]||e==="opacity")}function cd(e,t,n){var r;const{style:i}=e,o={};for(const s in i)($e(i[s])||t.style&&$e(t.style[s])||fy(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function hy(e,t,n){const r=cd(e,t,n);for(const i in e)if($e(e[i])||$e(t[i])){const o=Pr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function Qw(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const df=["x","y","width","height","cx","cy","r"],Zw={useVisualState:oy({scrapeMotionValuesFromProps:hy,createRenderState:cy,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const a in i)if(Nn.has(a)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let a=0;a<df.length;a++){const c=df[a];e[c]!==t[c]&&(s=!0)}s&&_.read(()=>{Qw(n,r),_.render(()=>{sd(r,i,ld(n.tagName),e.transformTemplate),py(n,r)})})}})},Jw={useVisualState:oy({scrapeMotionValuesFromProps:cd,createRenderState:ad})};function my(e,t,n){for(const r in t)!$e(t[r])&&!fy(r,n)&&(e[r]=t[r])}function e5({transformTemplate:e},t){return S.useMemo(()=>{const n=ad();return od(n,t,e),Object.assign({},n.vars,n.style)},[t])}function t5(e,t){const n=e.style||{},r={};return my(r,n,e),Object.assign(r,e5(e,t)),r}function n5(e,t){const n={},r=t5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function r5(e,t,n,r){const i=S.useMemo(()=>{const o=cy();return sd(o,t,ld(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};my(o,e.style,e),i.style={...o,...i.style}}return i}function i5(e=!1){return(n,r,i,{latestValues:o},s)=>{const c=(td(n)?r5:n5)(r,o,s,n),u=vw(r,typeof n=="string",e),d=n!==S.Fragment?{...u,...c,ref:i}:{},{children:f}=r,h=S.useMemo(()=>$e(f)?f.get():f,[f]);return S.createElement(n,{...d,children:h})}}function o5(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...td(r)?Zw:Jw,preloadedFeatures:e,useRender:i5(i),createVisualElement:t,Component:r};return Aw(s)}}function gy(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Fa(e,t,n){const r=e.getProps();return nd(r,t,n!==void 0?n:r.custom,e)}const yy=qu(()=>window.ScrollTimeline!==void 0);class s5{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(yy()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class a5 extends s5{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function ud(e,t){return e?e[t]||e.default||e:void 0}const Cc=2e4;function xy(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Cc;)t+=n,r=e.next(t);return t>=Cc?1/0:t}function dd(e){return typeof e=="function"}function pf(e,t){e.timeline=t,e.onfinish=null}const pd=e=>Array.isArray(e)&&typeof e[0]=="number",l5={linearEasing:void 0};function c5(e,t){const n=qu(e);return()=>{var r;return(r=l5[t])!==null&&r!==void 0?r:n()}}const Bs=c5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),vy=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Rn(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function by(e){return!!(typeof e=="function"&&Bs()||!e||typeof e=="string"&&(e in Fc||Bs())||pd(e)||Array.isArray(e)&&e.every(by))}const Qr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Fc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qr([0,.65,.55,1]),circOut:Qr([.55,0,1,.45]),backIn:Qr([.31,.01,.66,-.59]),backOut:Qr([.33,1.53,.69,.99])};function wy(e,t){if(e)return typeof e=="function"&&Bs()?vy(e,t):pd(e)?Qr(e):Array.isArray(e)?e.map(n=>wy(n,t)||Fc.easeOut):Fc[e]}const ot={x:!1,y:!1};function Sy(){return ot.x||ot.y}function ky(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function $y(e,t){const n=ky(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function ff(e){return t=>{t.pointerType==="touch"||Sy()||e(t)}}function u5(e,t,n={}){const[r,i,o]=$y(e,n),s=ff(a=>{const{target:c}=a,u=t(a);if(typeof u!="function"||!c)return;const d=ff(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const jy=(e,t)=>t?e===t?!0:jy(e,t.parentElement):!1,fd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,d5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function p5(e){return d5.has(e.tagName)||e.tabIndex!==-1}const Zr=new WeakSet;function hf(e){return t=>{t.key==="Enter"&&e(t)}}function ol(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const f5=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=hf(()=>{if(Zr.has(n))return;ol(n,"down");const i=hf(()=>{ol(n,"up")}),o=()=>ol(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function mf(e){return fd(e)&&!Sy()}function h5(e,t,n={}){const[r,i,o]=$y(e,n),s=a=>{const c=a.currentTarget;if(!mf(a)||Zr.has(c))return;Zr.add(c);const u=t(a),d=(x,w)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!mf(x)||!Zr.has(c))&&(Zr.delete(c),typeof u=="function"&&u(x,{success:w}))},f=x=>{d(x,n.useGlobalTarget||jy(c,x.target))},h=x=>{d(x,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{!p5(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),a.addEventListener("focus",u=>f5(u,i),i)}),o}function m5(e){return e==="x"||e==="y"?ot[e]?null:(ot[e]=!0,()=>{ot[e]=!1}):ot.x||ot.y?null:(ot.x=ot.y=!0,()=>{ot.x=ot.y=!1})}const Cy=new Set(["width","height","top","left","right","bottom",...Pr]);let is;function g5(){is=void 0}const $t={now:()=>(is===void 0&&$t.set(de.isProcessing||fw.useManualTiming?de.timestamp:performance.now()),is),set:e=>{is=e,queueMicrotask(g5)}};function hd(e,t){e.indexOf(t)===-1&&e.push(t)}function md(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class gd{constructor(){this.subscriptions=[]}add(t){return hd(this.subscriptions,t),()=>md(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function yd(e,t){return t?e*(1e3/t):0}const gf=30,y5=e=>!isNaN(parseFloat(e)),ci={current:void 0};class x5{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=$t.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=$t.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=y5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new gd);const r=this.events[t].add(n);return t==="change"?()=>{r(),_.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ci.current&&ci.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=$t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>gf)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gf);return yd(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function vt(e,t){return new x5(e,t)}function v5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,vt(n))}function b5(e,t){const n=Fa(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=Mw(o[s]);v5(e,s,a)}}function w5(e){return!!($e(e)&&e.add)}function Ac(e,t){const n=e.getValue("willChange");if(w5(n))return n.add(t)}function Fy(e){return e.props[ny]}const Ay=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,S5=1e-7,k5=12;function $5(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Ay(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>S5&&++a<k5);return s}function qi(e,t,n,r){if(e===t&&n===r)return Ae;const i=o=>$5(o,0,1,e,n);return o=>o===0||o===1?o:Ay(i(o),t,r)}const Dy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Py=e=>t=>1-e(1-t),Ey=qi(.33,1.53,.69,.99),xd=Py(Ey),Ty=Dy(xd),zy=e=>(e*=2)<1?.5*xd(e):.5*(2-Math.pow(2,-10*(e-1))),vd=e=>1-Math.sin(Math.acos(e)),My=Py(vd),Ry=Dy(vd),Ly=e=>/^0[^.\s]+$/u.test(e);function j5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ly(e):!0}const ui=e=>Math.round(e*1e5)/1e5,bd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function C5(e){return e==null}const F5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,wd=(e,t)=>n=>!!(typeof n=="string"&&F5.test(n)&&n.startsWith(e)||t&&!C5(n)&&Object.prototype.hasOwnProperty.call(n,t)),By=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(bd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},A5=e=>Ct(0,255,e),sl={...Er,transform:e=>Math.round(A5(e))},Cn={test:wd("rgb","red"),parse:By("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+sl.transform(e)+", "+sl.transform(t)+", "+sl.transform(n)+", "+ui(Vi.transform(r))+")"};function D5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Dc={test:wd("#"),parse:D5,transform:Cn.transform},nr={test:wd("hsl","hue"),parse:By("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+kt.transform(ui(t))+", "+kt.transform(ui(n))+", "+ui(Vi.transform(r))+")"},Se={test:e=>Cn.test(e)||Dc.test(e)||nr.test(e),parse:e=>Cn.test(e)?Cn.parse(e):nr.test(e)?nr.parse(e):Dc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Cn.transform(e):nr.transform(e)},P5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function E5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(bd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(P5))===null||n===void 0?void 0:n.length)||0)>0}const Iy="number",Vy="color",T5="var",z5="var(",yf="${}",M5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ni(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(M5,c=>(Se.test(c)?(r.color.push(o),i.push(Vy),n.push(Se.parse(c))):c.startsWith(z5)?(r.var.push(o),i.push(T5),n.push(c)):(r.number.push(o),i.push(Iy),n.push(parseFloat(c))),++o,yf)).split(yf);return{values:n,split:a,indexes:r,types:i}}function Ny(e){return Ni(e).values}function _y(e){const{split:t,types:n}=Ni(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Iy?o+=ui(i[s]):a===Vy?o+=Se.transform(i[s]):o+=i[s]}return o}}const R5=e=>typeof e=="number"?0:e;function L5(e){const t=Ny(e);return _y(e)(t.map(R5))}const un={test:E5,parse:Ny,createTransformer:_y,getAnimatableNone:L5},B5=new Set(["brightness","contrast","saturate","opacity"]);function I5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(bd)||[];if(!r)return e;const i=n.replace(r,"");let o=B5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const V5=/\b([a-z-]*)\(.*?\)/gu,Pc={...un,getAnimatableNone:e=>{const t=e.match(V5);return t?t.map(I5).join(" "):e}},N5={...id,color:Se,backgroundColor:Se,outlineColor:Se,fill:Se,stroke:Se,borderColor:Se,borderTopColor:Se,borderRightColor:Se,borderBottomColor:Se,borderLeftColor:Se,filter:Pc,WebkitFilter:Pc},Sd=e=>N5[e];function Oy(e,t){let n=Sd(e);return n!==Pc&&(n=un),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const _5=new Set(["auto","none","0"]);function O5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!_5.has(o)&&Ni(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Oy(n,i)}const xf=e=>e===Er||e===z,vf=(e,t)=>parseFloat(e.split(", ")[t]),bf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return vf(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?vf(o[1],e):0}},H5=new Set(["x","y","z"]),W5=Pr.filter(e=>!H5.has(e));function U5(e){const t=[];return W5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Sr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:bf(4,13),y:bf(5,14)};Sr.translateX=Sr.x;Sr.translateY=Sr.y;const Dn=new Set;let Ec=!1,Tc=!1;function Hy(){if(Tc){const e=Array.from(Dn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=U5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Tc=!1,Ec=!1,Dn.forEach(e=>e.complete()),Dn.clear()}function Wy(){Dn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Tc=!0)})}function G5(){Wy(),Hy()}class kd{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Dn.add(this),Ec||(Ec=!0,_.read(Wy),_.resolveKeyframes(Hy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const c=r.readValue(n,a);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Dn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Dn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Uy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Y5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function K5(e){const t=Y5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Gy(e,t,n=1){const[r,i]=K5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Uy(s)?parseFloat(s):s}return rd(i)?Gy(i,t,n+1):i}const Yy=e=>t=>t.test(e),X5={test:e=>e==="auto",parse:e=>e},Ky=[Er,z,kt,Ht,Nw,Vw,X5],wf=e=>Ky.find(Yy(e));class Xy extends kd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),rd(u))){const d=Gy(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Cy.has(r)||t.length!==2)return;const[i,o]=t,s=wf(i),a=wf(o);if(s!==a)if(xf(s)&&xf(a))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)j5(t[i])&&r.push(i);r.length&&O5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Sr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Sr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Sf=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(un.test(e)||e==="0")&&!e.startsWith("url("));function q5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Q5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Sf(i,t),a=Sf(o,t);return!s||!a?!1:q5(e)||(n==="spring"||dd(n))&&r}const Z5=e=>e!==null;function Aa(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Z5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const J5=40;class qy{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=$t.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>J5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&G5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=$t.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:c,isGenerator:u}=this.options;if(!u&&!Q5(t,r,i,o))if(s)this.options.duration=0;else{c&&c(Aa(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const q=(e,t,n)=>e+(t-e)*n;function al(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function eS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;i=al(c,a,e+1/3),o=al(c,a,e),s=al(c,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Is(e,t){return n=>n>0?t:e}const ll=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},tS=[Dc,Cn,nr],nS=e=>tS.find(t=>t.test(e));function kf(e){const t=nS(e);if(!t)return!1;let n=t.parse(e);return t===nr&&(n=eS(n)),n}const $f=(e,t)=>{const n=kf(e),r=kf(t);if(!n||!r)return Is(e,t);const i={...n};return o=>(i.red=ll(n.red,r.red,o),i.green=ll(n.green,r.green,o),i.blue=ll(n.blue,r.blue,o),i.alpha=q(n.alpha,r.alpha,o),Cn.transform(i))},rS=(e,t)=>n=>t(e(n)),Qi=(...e)=>e.reduce(rS),zc=new Set(["none","hidden"]);function iS(e,t){return zc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function oS(e,t){return n=>q(e,t,n)}function $d(e){return typeof e=="number"?oS:typeof e=="string"?rd(e)?Is:Se.test(e)?$f:lS:Array.isArray(e)?Qy:typeof e=="object"?Se.test(e)?$f:sS:Is}function Qy(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>$d(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function sS(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=$d(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function aS(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],c=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=c,i[s]++}return r}const lS=(e,t)=>{const n=un.createTransformer(t),r=Ni(e),i=Ni(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?zc.has(e)&&!i.values.length||zc.has(t)&&!r.values.length?iS(e,t):Qi(Qy(aS(r,i),i.values),n):Is(e,t)};function Zy(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?q(e,t,n):$d(e)(e,t)}const cS=5;function Jy(e,t,n){const r=Math.max(t-cS,0);return yd(n-e(r),t-r)}const J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jf=.001;function uS({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:r=J.mass}){let i,o,s=1-t;s=Ct(J.minDamping,J.maxDamping,s),e=Ct(J.minDuration,J.maxDuration,zt(e)),s<1?(i=u=>{const d=u*s,f=d*e,h=d-n,x=Mc(u,s),w=Math.exp(-f);return jf-h/x*w},o=u=>{const f=u*s*e,h=f*n+n,x=Math.pow(s,2)*Math.pow(u,2)*e,w=Math.exp(-f),y=Mc(Math.pow(u,2),s);return(-i(u)+jf>0?-1:1)*((h-x)*w)/y}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-.001+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,c=pS(i,o,a);if(e=Tt(e),isNaN(c))return{stiffness:J.stiffness,damping:J.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const dS=12;function pS(e,t,n){let r=n;for(let i=1;i<dS;i++)r=r-e(r)/t(r);return r}function Mc(e,t){return e*Math.sqrt(1-t*t)}const fS=["duration","bounce"],hS=["stiffness","damping","mass"];function Cf(e,t){return t.some(n=>e[n]!==void 0)}function mS(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!Cf(e,hS)&&Cf(e,fS))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Ct(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:J.mass,stiffness:i,damping:o}}else{const n=uS(e);t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function ex(e=J.visualDuration,t=J.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:f,velocity:h,isResolvedFromDuration:x}=mS({...n,velocity:-zt(n.velocity||0)}),w=h||0,y=u/(2*Math.sqrt(c*d)),b=s-o,m=zt(Math.sqrt(c/d)),g=Math.abs(b)<5;r||(r=g?J.restSpeed.granular:J.restSpeed.default),i||(i=g?J.restDelta.granular:J.restDelta.default);let v;if(y<1){const j=Mc(m,y);v=C=>{const F=Math.exp(-y*m*C);return s-F*((w+y*m*b)/j*Math.sin(j*C)+b*Math.cos(j*C))}}else if(y===1)v=j=>s-Math.exp(-m*j)*(b+(w+m*b)*j);else{const j=m*Math.sqrt(y*y-1);v=C=>{const F=Math.exp(-y*m*C),A=Math.min(j*C,300);return s-F*((w+y*m*b)*Math.sinh(A)+j*b*Math.cosh(A))/j}}const $={calculatedDuration:x&&f||null,next:j=>{const C=v(j);if(x)a.done=j>=f;else{let F=0;y<1&&(F=j===0?Tt(w):Jy(v,j,C));const A=Math.abs(F)<=r,L=Math.abs(s-C)<=i;a.done=A&&L}return a.value=a.done?s:C,a},toString:()=>{const j=Math.min(xy($),Cc),C=vy(F=>$.next(j*F).value,j,30);return j+"ms "+C}};return $}function Ff({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},x=A=>a!==void 0&&A<a||c!==void 0&&A>c,w=A=>a===void 0?c:c===void 0||Math.abs(a-A)<Math.abs(c-A)?a:c;let y=n*t;const b=f+y,m=s===void 0?b:s(b);m!==b&&(y=m-f);const g=A=>-y*Math.exp(-A/r),v=A=>m+g(A),$=A=>{const L=g(A),T=v(A);h.done=Math.abs(L)<=u,h.value=h.done?m:T};let j,C;const F=A=>{x(h.value)&&(j=A,C=ex({keyframes:[h.value,w(h.value)],velocity:Jy(v,A,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return F(0),{calculatedDuration:null,next:A=>{let L=!1;return!C&&j===void 0&&(L=!0,$(A),F(A)),j!==void 0&&A>=j?C.next(A-j):(!L&&$(A),h)}}}const gS=qi(.42,0,1,1),yS=qi(0,0,.58,1),tx=qi(.42,0,.58,1),xS=e=>Array.isArray(e)&&typeof e[0]!="number",vS={linear:Ae,easeIn:gS,easeInOut:tx,easeOut:yS,circIn:vd,circInOut:Ry,circOut:My,backIn:xd,backInOut:Ty,backOut:Ey,anticipate:zy},Af=e=>{if(pd(e)){Qg(e.length===4);const[t,n,r,i]=e;return qi(t,n,r,i)}else if(typeof e=="string")return vS[e];return e};function bS(e,t,n){const r=[],i=n||Zy,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||Ae:t;a=Qi(c,a)}r.push(a)}return r}function jd(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Qg(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=bS(t,r,i),c=a.length,u=d=>{if(s&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=Rn(e[f],e[f+1],d);return a[f](h)};return n?d=>u(Ct(e[0],e[o-1],d)):u}function wS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Rn(0,t,r);e.push(q(n,1,i))}}function nx(e){const t=[0];return wS(t,e.length-1),t}function SS(e,t){return e.map(n=>n*t)}function kS(e,t){return e.map(()=>t||tx).splice(0,e.length-1)}function Vs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=xS(r)?r.map(Af):Af(r),o={done:!1,value:t[0]},s=SS(n&&n.length===t.length?n:nx(t),e),a=jd(s,t,{ease:Array.isArray(i)?i:kS(t,i)});return{calculatedDuration:e,next:c=>(o.value=a(c),o.done=c>=e,o)}}const $S=e=>{const t=({timestamp:n})=>e(n);return{start:()=>_.update(t,!0),stop:()=>pt(t),now:()=>de.isProcessing?de.timestamp:$t.now()}},jS={decay:Ff,inertia:Ff,tween:Vs,keyframes:Vs,spring:ex},CS=e=>e/100;class Cd extends qy{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||kd,a=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=dd(n)?n:jS[n]||Vs;let c,u;a!==Vs&&typeof t[0]!="number"&&(c=Qi(CS,Zy(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=xy(d));const{calculatedDuration:f}=d,h=f+i,x=h*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:h,totalDuration:x}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:A}=this.options;return{done:!0,value:A[A.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:h,repeat:x,repeatType:w,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-h*(this.speed>=0?1:-1),g=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,$=o;if(x){const A=Math.min(this.currentTime,d)/f;let L=Math.floor(A),T=A%1;!T&&A>=1&&(T=1),T===1&&L--,L=Math.min(L,x+1),!!(L%2)&&(w==="reverse"?(T=1-T,y&&(T-=y/f)):w==="mirror"&&($=s)),v=Ct(0,1,T)*f}const j=g?{done:!1,value:c[0]}:$.next(v);a&&(j.value=a(j.value));let{done:C}=j;!g&&u!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return F&&i!==void 0&&(j.value=Aa(c,this.options,i)),b&&b(j.value),F&&this.finish(),j}get duration(){const{resolved:t}=this;return t?zt(t.calculatedDuration):0}get time(){return zt(this.currentTime)}set time(t){t=Tt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=zt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=$S,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const FS=new Set(["opacity","clipPath","filter","transform"]);function AS(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=wy(a,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const DS=qu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ns=10,PS=2e4;function ES(e){return dd(e.type)||e.type==="spring"||!by(e.ease)}function TS(e,t){const n=new Cd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<PS;)r=n.sample(o),i.push(r.value),o+=Ns;return{times:void 0,keyframes:i,duration:o-Ns,ease:"linear"}}const rx={anticipate:zy,backInOut:Ty,circInOut:Ry};function zS(e){return e in rx}class Df extends qy{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Xy(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:a,name:c,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&Bs()&&zS(o)&&(o=rx[o]),ES(this.options)){const{onComplete:f,onUpdate:h,motionValue:x,element:w,...y}=this.options,b=TS(t,y);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,o=b.ease,s="keyframes"}const d=AS(a.owner.current,c,t,{...this.options,duration:r,times:i,ease:o});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(pf(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;a.set(Aa(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return zt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return zt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Tt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ae;const{animation:r}=n;pf(r,t)}return Ae}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:h,...x}=this.options,w=new Cd({...x,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),y=Tt(this.time);u.setWithVelocity(w.sample(y-Ns).value,w.sample(y).value,Ns)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return DS()&&r&&FS.has(r)&&!c&&!u&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const MS={type:"spring",stiffness:500,damping:25,restSpeed:10},RS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),LS={type:"keyframes",duration:.8},BS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IS=(e,{keyframes:t})=>t.length>2?LS:Nn.has(e)?e.startsWith("scale")?RS(t[1]):MS:BS;function VS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Fd=(e,t,n,r={},i,o)=>s=>{const a=ud(r,e)||{},c=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Tt(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};VS(a)||(d={...d,...IS(e,d)}),d.duration&&(d.duration=Tt(d.duration)),d.repeatDelay&&(d.repeatDelay=Tt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const h=Aa(d.keyframes,a);if(h!==void 0)return _.update(()=>{d.onUpdate(h),d.onComplete()}),new a5([])}return!o&&Df.supports(d)?new Df(d):new Cd(d)};function NS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ix(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...c}=t;r&&(s=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const h=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),x=c[f];if(x===void 0||d&&NS(d,f))continue;const w={delay:n,...ud(s||{},f)};let y=!1;if(window.MotionHandoffAnimation){const m=Fy(e);if(m){const g=window.MotionHandoffAnimation(m,f,_);g!==null&&(w.startTime=g,y=!0)}}Ac(e,f),h.start(Fd(f,h,x,e.shouldReduceMotion&&Cy.has(f)?{type:!1}:w,e,y));const b=h.animation;b&&u.push(b)}return a&&Promise.all(u).then(()=>{_.update(()=>{a&&b5(e,a)})}),u}function Rc(e,t,n={}){var r;const i=Fa(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(ix(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=o;return _S(e,t,d+u,f,h,n)}:()=>Promise.resolve(),{when:c}=o;if(c){const[u,d]=c==="beforeChildren"?[s,a]:[a,s];return u().then(()=>d())}else return Promise.all([s(),a(n.delay)])}function _S(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(OS).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(Rc(u,t,{...o,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function OS(e,t){return e.sortNodePosition(t)}function HS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Rc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Rc(e,t,n);else{const i=typeof t=="function"?Fa(e,t,n.custom):t;r=Promise.all(ix(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const WS=Zu.length;function ox(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ox(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<WS;n++){const r=Zu[n],i=e.props[r];(Ii(i)||i===!1)&&(t[r]=i)}return t}const US=[...Qu].reverse(),GS=Qu.length;function YS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>HS(e,n,r)))}function KS(e){let t=YS(e),n=Pf(),r=!0;const i=c=>(u,d)=>{var f;const h=Fa(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:x,transitionEnd:w,...y}=h;u={...u,...y,...w}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=ox(e.parent)||{},f=[],h=new Set;let x={},w=1/0;for(let b=0;b<GS;b++){const m=US[b],g=n[m],v=u[m]!==void 0?u[m]:d[m],$=Ii(v),j=m===c?g.isActive:null;j===!1&&(w=b);let C=v===d[m]&&v!==u[m]&&$;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...x},!g.isActive&&j===null||!v&&!g.prevProp||ja(v)||typeof v=="boolean")continue;const F=XS(g.prevProp,v);let A=F||m===c&&g.isActive&&!C&&$||b>w&&$,L=!1;const T=Array.isArray(v)?v:[v];let K=T.reduce(i(m),{});j===!1&&(K={});const{prevResolvedValues:Vt={}}=g,mn={...Vt,...K},Tr=ae=>{A=!0,h.has(ae)&&(L=!0,h.delete(ae)),g.needsAnimating[ae]=!0;const P=e.getValue(ae);P&&(P.liveStyle=!1)};for(const ae in mn){const P=K[ae],M=Vt[ae];if(x.hasOwnProperty(ae))continue;let R=!1;jc(P)&&jc(M)?R=!gy(P,M):R=P!==M,R?P!=null?Tr(ae):h.add(ae):P!==void 0&&h.has(ae)?Tr(ae):g.protectedKeys[ae]=!0}g.prevProp=v,g.prevResolvedValues=K,g.isActive&&(x={...x,...K}),r&&e.blockInitialAnimation&&(A=!1),A&&(!(C&&F)||L)&&f.push(...T.map(ae=>({animation:ae,options:{type:m}})))}if(h.size){const b={};h.forEach(m=>{const g=e.getBaseTarget(m),v=e.getValue(m);v&&(v.liveStyle=!0),b[m]=g??null}),f.push({animation:b})}let y=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function a(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(h=>{var x;return(x=h.animationState)===null||x===void 0?void 0:x.setActive(c,u)}),n[c].isActive=u;const f=s(c);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Pf(),r=!0}}}function XS(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!gy(t,e):!1}function xn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Pf(){return{animate:xn(!0),whileInView:xn(),whileHover:xn(),whileTap:xn(),whileDrag:xn(),whileFocus:xn(),exit:xn()}}class hn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class qS extends hn{constructor(t){super(t),t.animationState||(t.animationState=KS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ja(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let QS=0;class ZS extends hn{constructor(){super(...arguments),this.id=QS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const JS={animation:{Feature:qS},exit:{Feature:ZS}};function _i(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Zi(e){return{point:{x:e.pageX,y:e.pageY}}}const ek=e=>t=>fd(t)&&e(t,Zi(t));function di(e,t,n,r){return _i(e,t,ek(n),r)}const Ef=(e,t)=>Math.abs(e-t);function tk(e,t){const n=Ef(e.x,t.x),r=Ef(e.y,t.y);return Math.sqrt(n**2+r**2)}class sx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ul(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,x=tk(f.offset,{x:0,y:0})>=3;if(!h&&!x)return;const{point:w}=f,{timestamp:y}=de;this.history.push({...w,timestamp:y});const{onStart:b,onMove:m}=this.handlers;h||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=cl(h,this.transformPagePoint),_.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:x,onSessionEnd:w,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ul(f.type==="pointercancel"?this.lastMoveEventInfo:cl(h,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,b),w&&w(f,b)},!fd(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Zi(t),a=cl(s,this.transformPagePoint),{point:c}=a,{timestamp:u}=de;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,ul(a,this.history)),this.removeListeners=Qi(di(this.contextWindow,"pointermove",this.handlePointerMove),di(this.contextWindow,"pointerup",this.handlePointerUp),di(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),pt(this.updatePoint)}}function cl(e,t){return t?{point:t(e.point)}:e}function Tf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ul({point:e},t){return{point:e,delta:Tf(e,ax(t)),offset:Tf(e,nk(t)),velocity:rk(t,.1)}}function nk(e){return e[0]}function ax(e){return e[e.length-1]}function rk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=ax(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Tt(t)));)n--;if(!r)return{x:0,y:0};const o=zt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const lx=1e-4,ik=1-lx,ok=1+lx,cx=.01,sk=0-cx,ak=0+cx;function Ue(e){return e.max-e.min}function lk(e,t,n){return Math.abs(e-t)<=n}function zf(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=Ue(n)/Ue(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ik&&e.scale<=ok||isNaN(e.scale))&&(e.scale=1),(e.translate>=sk&&e.translate<=ak||isNaN(e.translate))&&(e.translate=0)}function pi(e,t,n,r){zf(e.x,t.x,n.x,r?r.originX:void 0),zf(e.y,t.y,n.y,r?r.originY:void 0)}function Mf(e,t,n){e.min=n.min+t.min,e.max=e.min+Ue(t)}function ck(e,t,n){Mf(e.x,t.x,n.x),Mf(e.y,t.y,n.y)}function Rf(e,t,n){e.min=t.min-n.min,e.max=e.min+Ue(t)}function fi(e,t,n){Rf(e.x,t.x,n.x),Rf(e.y,t.y,n.y)}function uk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function Lf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function dk(e,{top:t,left:n,bottom:r,right:i}){return{x:Lf(e.x,n,i),y:Lf(e.y,t,r)}}function Bf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function pk(e,t){return{x:Bf(e.x,t.x),y:Bf(e.y,t.y)}}function fk(e,t){let n=.5;const r=Ue(e),i=Ue(t);return i>r?n=Rn(t.min,t.max-r,e.min):r>i&&(n=Rn(e.min,e.max-i,t.min)),Ct(0,1,n)}function hk(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Lc=.35;function mk(e=Lc){return e===!1?e=0:e===!0&&(e=Lc),{x:If(e,"left","right"),y:If(e,"top","bottom")}}function If(e,t,n){return{min:Vf(e,t),max:Vf(e,n)}}function Vf(e,t){return typeof e=="number"?e:e[t]||0}const Nf=()=>({translate:0,scale:1,origin:0,originPoint:0}),rr=()=>({x:Nf(),y:Nf()}),_f=()=>({min:0,max:0}),ne=()=>({x:_f(),y:_f()});function Qe(e){return[e("x"),e("y")]}function ux({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function gk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function yk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function dl(e){return e===void 0||e===1}function Bc({scale:e,scaleX:t,scaleY:n}){return!dl(e)||!dl(t)||!dl(n)}function wn(e){return Bc(e)||dx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function dx(e){return Of(e.x)||Of(e.y)}function Of(e){return e&&e!=="0%"}function _s(e,t,n){const r=e-n,i=t*r;return n+i}function Hf(e,t,n,r,i){return i!==void 0&&(e=_s(e,i,r)),_s(e,n,r)+t}function Ic(e,t=0,n=1,r,i){e.min=Hf(e.min,t,n,r,i),e.max=Hf(e.max,t,n,r,i)}function px(e,{x:t,y:n}){Ic(e.x,t.translate,t.scale,t.originPoint),Ic(e.y,n.translate,n.scale,n.originPoint)}const Wf=.999999999999,Uf=1.0000000000001;function xk(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&or(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,px(e,s)),r&&wn(o.latestValues)&&or(e,o.latestValues))}t.x<Uf&&t.x>Wf&&(t.x=1),t.y<Uf&&t.y>Wf&&(t.y=1)}function ir(e,t){e.min=e.min+t,e.max=e.max+t}function Gf(e,t,n,r,i=.5){const o=q(e.min,e.max,i);Ic(e,t,n,o,r)}function or(e,t){Gf(e.x,t.x,t.scaleX,t.scale,t.originX),Gf(e.y,t.y,t.scaleY,t.scale,t.originY)}function fx(e,t){return ux(yk(e.getBoundingClientRect(),t))}function vk(e,t,n){const r=fx(e,n),{scroll:i}=t;return i&&(ir(r.x,i.offset.x),ir(r.y,i.offset.y)),r}const hx=({current:e})=>e?e.ownerDocument.defaultView:null,bk=new WeakMap;class wk{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ne(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Zi(d).point)},o=(d,f)=>{const{drag:h,dragPropagation:x,onDragStart:w}=this.getProps();if(h&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=m5(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qe(b=>{let m=this.getAxisMotionValue(b).get()||0;if(kt.test(m)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[b];v&&(m=Ue(v)*(parseFloat(m)/100))}}this.originPoint[b]=m}),w&&_.postRender(()=>w(d,f)),Ac(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:h,dragDirectionLock:x,onDirectionLock:w,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:b}=f;if(x&&this.currentDirection===null){this.currentDirection=Sk(b),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),y&&y(d,f)},a=(d,f)=>this.stop(d,f),c=()=>Qe(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new sx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:hx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&_.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Co(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=uk(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&tr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=dk(i.layoutBox,n):this.constraints=!1,this.elastic=mk(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Qe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=hk(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!tr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=vk(r,i.root,this.visualElement.getTransformPagePoint());let s=pk(i.layout.layoutBox,o);if(n){const a=n(gk(s));this.hasMutatedConstraints=!!a,a&&(s=ux(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},u=Qe(d=>{if(!Co(d,n,this.currentDirection))return;let f=c&&c[d]||{};s&&(f={min:0,max:0});const h=i?200:1e6,x=i?40:1e7,w={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,w)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ac(this.visualElement,t),r.start(Fd(t,r,0,n,this.visualElement,!1))}stopAnimation(){Qe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Qe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Qe(n=>{const{drag:r}=this.getProps();if(!Co(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-q(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!tr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Qe(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const c=a.get();i[s]=fk({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Qe(s=>{if(!Co(s,t,null))return;const a=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];a.set(q(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;bk.set(this.visualElement,this);const t=this.visualElement.current,n=di(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();tr(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),_.read(r);const s=_i(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Qe(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Lc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Co(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Sk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class kk extends hn{constructor(t){super(t),this.removeGroupControls=Ae,this.removeListeners=Ae,this.controls=new wk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ae}unmount(){this.removeGroupControls(),this.removeListeners()}}const Yf=e=>(t,n)=>{e&&_.postRender(()=>e(t,n))};class $k extends hn{constructor(){super(...arguments),this.removePointerDownListener=Ae}onPointerDown(t){this.session=new sx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Yf(t),onStart:Yf(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&_.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=di(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const os={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Kf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Or={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Kf(e,t.target.x),r=Kf(e,t.target.y);return`${n}% ${r}%`}},jk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=un.parse(e);if(i.length>5)return r;const o=un.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=c;const u=q(a,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class Ck extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;qw(Fk),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),os.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||_.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ed.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function mx(e){const[t,n]=qg(),r=S.useContext(Ku);return l.jsx(Ck,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(ry),isPresent:t,safeToRemove:n})}const Fk={borderRadius:{...Or,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Or,borderTopRightRadius:Or,borderBottomLeftRadius:Or,borderBottomRightRadius:Or,boxShadow:jk};function Ak(e,t,n){const r=$e(e)?e:vt(e);return r.start(Fd("",r,t,n)),r.animation}function Dk(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Pk=(e,t)=>e.depth-t.depth;class Ek{constructor(){this.children=[],this.isDirty=!1}add(t){hd(this.children,t),this.isDirty=!0}remove(t){md(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Pk),this.isDirty=!1,this.children.forEach(t)}}function Tk(e,t){const n=$t.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(pt(r),e(o-t))};return _.read(r,!0),()=>pt(r)}const gx=["TopLeft","TopRight","BottomLeft","BottomRight"],zk=gx.length,Xf=e=>typeof e=="string"?parseFloat(e):e,qf=e=>typeof e=="number"||z.test(e);function Mk(e,t,n,r,i,o){i?(e.opacity=q(0,n.opacity!==void 0?n.opacity:1,Rk(r)),e.opacityExit=q(t.opacity!==void 0?t.opacity:1,0,Lk(r))):o&&(e.opacity=q(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<zk;s++){const a=`border${gx[s]}Radius`;let c=Qf(t,a),u=Qf(n,a);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||qf(c)===qf(u)?(e[a]=Math.max(q(Xf(c),Xf(u),r),0),(kt.test(u)||kt.test(c))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function Qf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Rk=yx(0,.5,My),Lk=yx(.5,.95,Ae);function yx(e,t,n){return r=>r<e?0:r>t?1:n(Rn(e,t,r))}function Zf(e,t){e.min=t.min,e.max=t.max}function Xe(e,t){Zf(e.x,t.x),Zf(e.y,t.y)}function Jf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function eh(e,t,n,r,i){return e-=t,e=_s(e,1/n,r),i!==void 0&&(e=_s(e,1/i,r)),e}function Bk(e,t=0,n=1,r=.5,i,o=e,s=e){if(kt.test(t)&&(t=parseFloat(t),t=q(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=q(o.min,o.max,r);e===o&&(a-=t),e.min=eh(e.min,t,n,a,i),e.max=eh(e.max,t,n,a,i)}function th(e,t,[n,r,i],o,s){Bk(e,t[n],t[r],t[i],t.scale,o,s)}const Ik=["x","scaleX","originX"],Vk=["y","scaleY","originY"];function nh(e,t,n,r){th(e.x,t,Ik,n?n.x:void 0,r?r.x:void 0),th(e.y,t,Vk,n?n.y:void 0,r?r.y:void 0)}function rh(e){return e.translate===0&&e.scale===1}function xx(e){return rh(e.x)&&rh(e.y)}function ih(e,t){return e.min===t.min&&e.max===t.max}function Nk(e,t){return ih(e.x,t.x)&&ih(e.y,t.y)}function oh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function vx(e,t){return oh(e.x,t.x)&&oh(e.y,t.y)}function sh(e){return Ue(e.x)/Ue(e.y)}function ah(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class _k{constructor(){this.members=[]}add(t){hd(this.members,t),t.scheduleRender()}remove(t){if(md(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ok(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:h,skewX:x,skewY:w}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),x&&(r+=`skewX(${x}deg) `),w&&(r+=`skewY(${w}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(r+=`scale(${a}, ${c})`),r||"none"}const Sn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Jr=typeof window<"u"&&window.MotionDebug!==void 0,pl=["","X","Y","Z"],Hk={visibility:"hidden"},lh=1e3;let Wk=0;function fl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function bx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Fy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",_,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&bx(r)}function wx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Wk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Jr&&(Sn.totalNodes=Sn.resolvedTargetDeltas=Sn.recalculatedProjection=0),this.nodes.forEach(Yk),this.nodes.forEach(Zk),this.nodes.forEach(Jk),this.nodes.forEach(Kk),Jr&&window.MotionDebug.record(Sn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ek)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new gd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const c=this.eventHandlers.get(s);c&&c.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Dk(s),this.instance=s;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Tk(h,250),os.hasAnimatedSinceResize&&(os.hasAnimatedSinceResize=!1,this.nodes.forEach(uh))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||i3,{onLayoutAnimationStart:b,onLayoutAnimationComplete:m}=d.getProps(),g=!this.targetLayout||!vx(this.targetLayout,w)||x,v=!h&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const $={...ud(y,"layout"),onPlay:b,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else h||uh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,pt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(e3),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&bx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ch);return}this.isUpdating||this.nodes.forEach(qk),this.isUpdating=!1,this.nodes.forEach(Qk),this.nodes.forEach(Uk),this.nodes.forEach(Gk),this.clearAllSnapshots();const a=$t.now();de.delta=Ct(0,1e3/60,a-de.timestamp),de.timestamp=a,de.isProcessing=!0,il.update.process(de),il.preRender.process(de),il.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ed.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Xk),this.sharedNodes.forEach(t3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ne(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!xx(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||wn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return s&&(c=this.removeTransform(c)),o3(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return ne();const c=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(s3))){const{scroll:d}=this.root;d&&(ir(c.x,d.offset.x),ir(c.y,d.offset.y))}return c}removeElementScroll(s){var a;const c=ne();if(Xe(c,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Xe(c,s),ir(c.x,f.offset.x),ir(c.y,f.offset.y))}return c}applyTransform(s,a=!1){const c=ne();Xe(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&or(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),wn(d.latestValues)&&or(c,d.latestValues)}return wn(this.latestValues)&&or(c,this.latestValues),c}removeTransform(s){const a=ne();Xe(a,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!wn(u.latestValues))continue;Bc(u.latestValues)&&u.updateSnapshot();const d=ne(),f=u.measurePageBox();Xe(d,f),nh(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return wn(this.latestValues)&&nh(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=de.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),fi(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Xe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ne(),this.targetWithTransforms=ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ck(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xe(this.target,this.layout.layoutBox),px(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),fi(this.relativeTargetOrigin,this.target,x.target),Xe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Jr&&Sn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bc(this.parent.latestValues)||dx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),c=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===de.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Xe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,x=this.treeScale.y;xk(this.layoutCorrected,this.treeScale,this.path,c),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ne());const{target:w}=a;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jf(this.prevProjectionDelta.x,this.projectionDelta.x),Jf(this.prevProjectionDelta.y,this.projectionDelta.y)),pi(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==x||!ah(this.projectionDelta.x,this.prevProjectionDelta.x)||!ah(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Jr&&Sn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=rr(),this.projectionDelta=rr(),this.projectionDeltaWithTransform=rr()}setAnimationOrigin(s,a=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=rr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ne(),x=c?c.source:void 0,w=this.layout?this.layout.source:void 0,y=x!==w,b=this.getStack(),m=!b||b.members.length<=1,g=!!(y&&!m&&this.options.crossfade===!0&&!this.path.some(r3));this.animationProgress=0;let v;this.mixTargetDelta=$=>{const j=$/1e3;dh(f.x,s.x,j),dh(f.y,s.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),n3(this.relativeTarget,this.relativeTargetOrigin,h,j),v&&Nk(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=ne()),Xe(v,this.relativeTarget)),y&&(this.animationValues=d,Mk(d,u,this.latestValues,j,g,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(pt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_.update(()=>{os.hasAnimatedSinceResize=!0,this.currentAnimation=Ak(0,lh,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:c,layout:u,latestValues:d}=s;if(!(!a||!c||!u)){if(this!==s&&this.layout&&u&&Sx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||ne();const f=Ue(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+f;const h=Ue(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+h}Xe(a,c),or(a,d),pi(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _k),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const u={};c.z&&fl("z",s,u,this.animationValues);for(let d=0;d<pl.length;d++)fl(`rotate${pl[d]}`,s,u,this.animationValues),fl(`skew${pl[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}getProjectionStyles(s){var a,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Hk;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=rs(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=rs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!wn(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Ok(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x,y:w}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Ls){if(h[y]===void 0)continue;const{correct:b,applyTo:m}=Ls[y],g=u.transform==="none"?h[y]:b(h[y],f);if(m){const v=m.length;for(let $=0;$<v;$++)u[m[$]]=g}else u[y]=g}return this.options.layoutId&&(u.pointerEvents=f===this?rs(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ch),this.root.sharedNodes.clear()}}}function Uk(e){e.updateLayout()}function Gk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Qe(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],x=Ue(h);h.min=r[f].min,h.max=h.min+x}):Sx(o,n.layoutBox,r)&&Qe(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],x=Ue(r[f]);h.max=h.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+x)});const a=rr();pi(a,r,n.layoutBox);const c=rr();s?pi(c,e.applyTransform(i,!0),n.measuredBox):pi(c,r,n.layoutBox);const u=!xx(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:x}=f;if(h&&x){const w=ne();fi(w,n.layoutBox,h.layoutBox);const y=ne();fi(y,r,x.layoutBox),vx(w,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=w,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Yk(e){Jr&&Sn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Kk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Xk(e){e.clearSnapshot()}function ch(e){e.clearMeasurements()}function qk(e){e.isLayoutDirty=!1}function Qk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function uh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Zk(e){e.resolveTargetDelta()}function Jk(e){e.calcProjection()}function e3(e){e.resetSkewAndRotation()}function t3(e){e.removeLeadSnapshot()}function dh(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ph(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function n3(e,t,n,r){ph(e.x,t.x,n.x,r),ph(e.y,t.y,n.y,r)}function r3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const i3={duration:.45,ease:[.4,0,.1,1]},fh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hh=fh("applewebkit/")&&!fh("chrome/")?Math.round:Ae;function mh(e){e.min=hh(e.min),e.max=hh(e.max)}function o3(e){mh(e.x),mh(e.y)}function Sx(e,t,n){return e==="position"||e==="preserve-aspect"&&!lk(sh(t),sh(n),.2)}function s3(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const a3=wx({attachResizeListener:(e,t)=>_i(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),hl={current:void 0},kx=wx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hl.current){const e=new a3({});e.mount(window),e.setOptions({layoutScroll:!0}),hl.current=e}return hl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),l3={pan:{Feature:$k},drag:{Feature:kk,ProjectionNode:kx,MeasureLayout:mx}};function gh(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&_.postRender(()=>o(t,Zi(t)))}class c3 extends hn{mount(){const{current:t}=this.node;t&&(this.unmount=u5(t,n=>(gh(this.node,n,"Start"),r=>gh(this.node,r,"End"))))}unmount(){}}class u3 extends hn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qi(_i(this.node.current,"focus",()=>this.onFocus()),_i(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function yh(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&_.postRender(()=>o(t,Zi(t)))}class d3 extends hn{mount(){const{current:t}=this.node;t&&(this.unmount=h5(t,n=>(yh(this.node,n,"Start"),(r,{success:i})=>yh(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vc=new WeakMap,ml=new WeakMap,p3=e=>{const t=Vc.get(e.target);t&&t(e)},f3=e=>{e.forEach(p3)};function h3({root:e,...t}){const n=e||document;ml.has(n)||ml.set(n,{});const r=ml.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(f3,{root:e,...t})),r[i]}function m3(e,t,n){const r=h3(t);return Vc.set(e,n),r.observe(e),()=>{Vc.delete(e),r.unobserve(e)}}const g3={some:0,all:1};class y3 extends hn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:g3[i]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(c)};return m3(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(x3(t,n))&&this.startObserver()}unmount(){}}function x3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const v3={inView:{Feature:y3},tap:{Feature:d3},focus:{Feature:u3},hover:{Feature:c3}},b3={layout:{ProjectionNode:kx,MeasureLayout:mx}},Nc={current:null},$x={current:!1};function w3(){if($x.current=!0,!!Xu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Nc.current=e.matches;e.addListener(t),t()}else Nc.current=!1}const S3=[...Ky,Se,un],k3=e=>S3.find(Yy(e)),xh=new WeakMap;function $3(e,t,n){for(const r in t){const i=t[r],o=n[r];if($e(i))e.addValue(r,i);else if($e(o))e.addValue(r,vt(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,vt(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const vh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class j3{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=$t.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,_.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=s;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Ca(n),this.isVariantNode=ty(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in h){const w=h[x];c[x]!==void 0&&$e(w)&&w.set(c[x],!1)}}mount(t){this.current=t,xh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),$x.current||w3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Nc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){xh.delete(this.current),this.projection&&this.projection.unmount(),pt(this.notifyUpdate),pt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Nn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&_.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in wr){const n=wr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ne()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<vh.length;r++){const i=vh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=$3(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=vt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Uy(i)||Ly(i))?i=parseFloat(i):!k3(i)&&un.test(n)&&(i=Oy(t,n)),this.setBaseTarget(t,$e(i)?i.get():i)),$e(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=nd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!$e(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new gd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class jx extends j3{constructor(){super(...arguments),this.KeyframeResolver=Xy}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;$e(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function C3(e){return window.getComputedStyle(e)}class F3 extends jx{constructor(){super(...arguments),this.type="html",this.renderInstance=uy}readValueFromInstance(t,n){if(Nn.has(n)){const r=Sd(n);return r&&r.default||0}else{const r=C3(t),i=(ay(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return fx(t,n)}build(t,n,r){od(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return cd(t,n,r)}}class A3 extends jx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ne}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Nn.has(n)){const r=Sd(n);return r&&r.default||0}return n=dy.has(n)?n:Ju(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return hy(t,n,r)}build(t,n,r){sd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){py(t,n,r,i)}mount(t){this.isSVGTag=ld(t.tagName),super.mount(t)}}const D3=(e,t)=>td(e)?new A3(t):new F3(t,{allowProjection:e!==S.Fragment}),P3=o5({...JS,...v3,...l3,...b3},D3),k=bw(P3);function Cx(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return _.update(r,!0),()=>pt(r)}const ss=new WeakMap;let Wt;function E3(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function T3({target:e,contentRect:t,borderBoxSize:n}){var r;(r=ss.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return E3(e,n)}})})}function z3(e){e.forEach(T3)}function M3(){typeof ResizeObserver>"u"||(Wt=new ResizeObserver(z3))}function R3(e,t){Wt||M3();const n=ky(e);return n.forEach(r=>{let i=ss.get(r);i||(i=new Set,ss.set(r,i)),i.add(t),Wt==null||Wt.observe(r)}),()=>{n.forEach(r=>{const i=ss.get(r);i==null||i.delete(t),i!=null&&i.size||Wt==null||Wt.unobserve(r)})}}const as=new Set;let hi;function L3(){hi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};as.forEach(n=>n(t))},window.addEventListener("resize",hi)}function B3(e){return as.add(e),hi||L3(),()=>{as.delete(e),!as.size&&hi&&(hi=void 0)}}function I3(e,t){return typeof e=="function"?B3(e):R3(e,t)}const V3=50,bh=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),N3=()=>({time:0,x:bh(),y:bh()}),_3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function wh(e,t,n,r){const i=n[t],{length:o,position:s}=_3[t],a=i.current,c=n.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Rn(0,i.scrollLength,i.current);const u=r-c;i.velocity=u>V3?0:yd(i.current-a,u)}function O3(e,t,n){wh(e,"x",t,n),wh(e,"y",t,n),t.time=n}function H3(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const _c={start:0,center:.5,end:1};function Sh(e,t,n=0){let r=0;if(e in _c&&(e=_c[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const W3=[0,0];function U3(e,t,n,r){let i=Array.isArray(e)?e:W3,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,_c[e]?e:"0"]),o=Sh(i[0],n,r),s=Sh(i[1],t),o-s}const G3={All:[[0,0],[1,1]]},Y3={x:0,y:0};function K3(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function X3(e,t,n){const{offset:r=G3.All}=n,{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?H3(i,e):Y3,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:K3(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const f=r.length;for(let h=0;h<f;h++){const x=U3(r[h],u[s],c[s],a[o]);!d&&x!==t[o].interpolatorOffsets[h]&&(d=!0),t[o].offset[h]=x}d&&(t[o].interpolate=jd(t[o].offset,nx(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=Ct(0,1,t[o].interpolate(t[o].current))}function q3(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Q3(e,t,n,r={}){return{measure:()=>q3(e,r.target,n),update:i=>{O3(e,n,i),(r.offset||r.target)&&X3(e,n,r)},notify:()=>t(n)}}const Hr=new WeakMap,kh=new WeakMap,gl=new WeakMap,$h=e=>e===document.documentElement?window:e;function Ad(e,{container:t=document.documentElement,...n}={}){let r=gl.get(t);r||(r=new Set,gl.set(t,r));const i=N3(),o=Q3(t,e,i,n);if(r.add(o),!Hr.has(t)){const a=()=>{for(const h of r)h.measure()},c=()=>{for(const h of r)h.update(de.timestamp)},u=()=>{for(const h of r)h.notify()},d=()=>{_.read(a,!1,!0),_.read(c,!1,!0),_.update(u,!1,!0)};Hr.set(t,d);const f=$h(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&kh.set(t,I3(t,d)),f.addEventListener("scroll",d,{passive:!0})}const s=Hr.get(t);return _.read(s,!1,!0),()=>{var a;pt(s);const c=gl.get(t);if(!c||(c.delete(o),c.size))return;const u=Hr.get(t);Hr.delete(t),u&&($h(t).removeEventListener("scroll",u),(a=kh.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function Z3({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Ad(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const yl=new Map;function Fx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),yl.has(t)||yl.set(t,{});const r=yl.get(t);return r[n]||(r[n]=yy()?new ScrollTimeline({source:t,axis:n}):Z3({source:t,axis:n})),r[n]}function J3(e){return e.length===2}function Ax(e){return e&&(e.target||e.offset)}function e$(e,t){return J3(e)||Ax(t)?Ad(n=>{e(n[t.axis].progress,n)},t):Cx(e,Fx(t))}function t$(e,t){if(e.flatten(),Ax(t))return e.pause(),Ad(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Fx(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),Cx(i=>{r.time=r.duration*i},n))):Ae}}function n$(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?e$(e,r):t$(e,r)}function jh(e,t){pw(!!(!t||t.current))}const r$=()=>({scrollX:vt(0),scrollY:vt(0),scrollXProgress:vt(0),scrollYProgress:vt(0)});function Ji({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Dr(r$);return(n?ka:S.useEffect)(()=>(jh("target",t),jh("container",e),n$((s,{x:a,y:c})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function i$(e){const t=Dr(()=>vt(e)),{isStatic:n}=S.useContext(Sa);if(n){const[,r]=S.useState(e);S.useEffect(()=>t.on("change",r),[])}return t}function Dx(e,t){const n=i$(t()),r=()=>n.set(t());return r(),ka(()=>{const i=()=>_.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),pt(r)}}),n}const o$=e=>e&&typeof e=="object"&&e.mix,s$=e=>o$(e)?e.mix:void 0;function a$(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=jd(i,o,{mixer:s$(o[0]),...s});return t?a(r):a}function l$(e){ci.current=[],e();const t=Dx(ci.current,e);return ci.current=void 0,t}function Px(e,t,n,r){if(typeof e=="function")return l$(e);const i=typeof t=="function"?t:a$(t,n,r);return Array.isArray(e)?Ch(e,i):Ch([e],([o])=>i(o))}function Ch(e,t){const n=Dr(()=>[]);return Dx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const Ex={colors:{primary:{50:"#E6F6FF",100:"#BAE3FF",200:"#7CC4FA",300:"#47A3F3",400:"#2186EB",500:"#0967D2",600:"#0552B5",700:"#03449E",800:"#01337D",900:"#002159"},neutral:{50:"#F5F7FA",100:"#E4E7EB",200:"#CBD2D9",300:"#9AA5B1",400:"#7B8794",500:"#616E7C",600:"#52606D",700:"#3E4C59",800:"#323F4B",900:"#1F2933"},success:{50:"#E3F9E5",100:"#C1F2C7",200:"#91E697",300:"#51CA58",400:"#31B237",500:"#18981D",600:"#0F8613",700:"#0E7817",800:"#07600E",900:"#014807"},warning:{50:"#FFFBEA",100:"#FFF3C4",200:"#FCE588",300:"#FADB5F",400:"#F7C948",500:"#F0B429",600:"#DE911D",700:"#CB6E17",800:"#B44D12",900:"#8D2B0B"},error:{50:"#FFE3E3",100:"#FFBDBD",200:"#FF9B9B",300:"#F86A6A",400:"#EF4E4E",500:"#E12D39",600:"#CF1124",700:"#AB091E",800:"#8A041A",900:"#610316"}},typography:{fontFamily:{primary:"'Inter', sans-serif",secondary:"'Poppins', sans-serif",mono:"'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xxl:"1.5rem",xxxl:"2rem",xxxxl:"2.5rem"},fontWeight:{light:300,regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.2,normal:1.5,relaxed:1.75}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem",xxxl:"4rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"1.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},transitions:{fast:"0.15s ease",default:"0.3s ease",slow:"0.5s ease"},zIndex:{base:0,dropdown:1e3,sticky:1100,fixed:1200,modal:1300,popover:1400,tooltip:1500}},c$=e=>aw`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base styles */
  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${e.typography.fontFamily.primary};
    font-size: ${e.typography.fontSize.md};
    line-height: 1.5;
    color: ${e.colors.neutral[900]};
    background-color: ${e.colors.neutral[50]};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${e.typography.fontFamily.secondary};
    font-weight: ${e.typography.fontWeight.semibold};
    line-height: 1.2;
    margin-bottom: ${e.spacing.md};
  }

  h1 {
    font-size: ${e.typography.fontSize.xxxl};
  }

  h2 {
    font-size: ${e.typography.fontSize.xxl};
  }

  h3 {
    font-size: ${e.typography.fontSize.xl};
  }

  h4 {
    font-size: ${e.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${e.spacing.md};
  }

  /* Links */
  a {
    color: ${e.colors.primary[600]};
    text-decoration: none;
    transition: color ${e.transitions.fast} ease;

    &:hover {
      color: ${e.colors.primary[700]};
    }
  }

  /* Lists */
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${e.spacing.md};
  }

  /* Forms */
  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${e.spacing.md};
  }

  th, td {
    padding: ${e.spacing.sm};
    border-bottom: 1px solid ${e.colors.neutral[200]};
    text-align: left;
  }

  th {
    font-weight: ${e.typography.fontWeight.semibold};
    background-color: ${e.colors.neutral[100]};
  }

  /* Code */
  code {
    font-family: ${e.typography.fontFamily.mono};
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    background-color: ${e.colors.neutral[100]};
    border-radius: ${e.borderRadius.sm};
  }

  pre {
    font-family: ${e.typography.fontFamily.mono};
    padding: ${e.spacing.md};
    background-color: ${e.colors.neutral[100]};
    border-radius: ${e.borderRadius.md};
    overflow-x: auto;
    margin-bottom: ${e.spacing.md};

    code {
      padding: 0;
      background-color: transparent;
    }
  }

  /* Focus styles */
  :focus {
    outline: 2px solid ${e.colors.primary[500]};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Selection */
  ::selection {
    background-color: ${e.colors.primary[200]};
    color: ${e.colors.primary[900]};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${e.colors.neutral[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e.colors.neutral[300]};
    border-radius: ${e.borderRadius.full};

    &:hover {
      background: ${e.colors.neutral[400]};
    }
  }

  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${e.spacing.md};
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var u$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,d$=Ig(function(e){return u$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),p$=d$,f$=function(t){return t!=="theme"},Fh=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?p$:f$},Ah=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},h$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Wu(n,r,i),Yg(function(){return Uu(n,r,i)}),null},m$=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=Ah(t,n,r),c=a||Fh(i),u=!c("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{var h=d[0];f.push(h[0]);for(var x=d.length,w=1;w<x;w++)f.push(d[w],h[w])}var y=Gu(function(b,m,g){var v=u&&b.as||i,$="",j=[],C=b;if(b.theme==null){C={};for(var F in b)C[F]=b[F];C.theme=S.useContext(Bi)}typeof b.className=="string"?$=Wg(m.registered,j,b.className):b.className!=null&&($=b.className+" ");var A=ba(f.concat(j),m.registered,C);$+=m.key+"-"+A.name,s!==void 0&&($+=" "+s);var L=u&&a===void 0?Fh(v):c,T={};for(var K in b)u&&K==="as"||L(K)&&(T[K]=b[K]);return T.className=$,g&&(T.ref=g),S.createElement(S.Fragment,null,S.createElement(h$,{cache:m,serialized:A,isStringTag:typeof v=="string"}),S.createElement(v,T))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=f,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(b,m){var g=e(b,Ms({},n,m,{shouldForwardProp:Ah(y,m,!0)}));return g.apply(void 0,f)},y}},g$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],p=m$.bind(null);g$.forEach(function(e){p[e]=p(e)});const y$=e=>{switch(e){case"primary":return`
        background: #64FFDA;
        color: #0A192F;
        &:hover {
          background: #4FD1C5;
        }
        &:active {
          background: #3DB8A8;
        }
      `;case"secondary":return`
        background: #112240;
        color: #E6F1FF;
        &:hover {
          background: #1D3461;
        }
        &:active {
          background: #2A4B8C;
        }
      `;case"outline":return`
        background: transparent;
        border: 2px solid #64FFDA;
        color: #64FFDA;
        &:hover {
          background: rgba(100, 255, 218, 0.1);
        }
        &:active {
          background: rgba(100, 255, 218, 0.2);
        }
      `;case"ghost":return`
        background: transparent;
        color: #64FFDA;
        &:hover {
          background: rgba(100, 255, 218, 0.1);
        }
        &:active {
          background: rgba(100, 255, 218, 0.2);
        }
      `}},x$=e=>{switch(e){case"sm":return`
        padding: ${({theme:t})=>`${t.spacing.xs} ${t.spacing.sm}`};
        font-size: ${({theme:t})=>t.typography.fontSize.sm};
      `;case"md":return`
        padding: ${({theme:t})=>`${t.spacing.sm} ${t.spacing.md}`};
        font-size: ${({theme:t})=>t.typography.fontSize.md};
      `;case"lg":return`
        padding: ${({theme:t})=>`${t.spacing.md} ${t.spacing.lg}`};
        font-size: ${({theme:t})=>t.typography.fontSize.lg};
      `}},v$=p(k.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition: all ${({theme:e})=>e.transitions.fast};
  cursor: pointer;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  position: relative;
  overflow: hidden;

  ${({variant:e="primary"})=>y$(e)}
  ${({size:e="md"})=>x$(e)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing.sm};
  }

  .loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`,eo=({children:e,variant:t="primary",size:n="md",leftIcon:r,rightIcon:i,isLoading:o=!1,fullWidth:s=!1,disabled:a,...c})=>l.jsx(v$,{variant:t,size:n,fullWidth:s,disabled:a||o,whileTap:{scale:.98},...c,children:o?l.jsx("div",{className:"loading-spinner"}):l.jsxs("div",{className:"button-content",children:[r,e,i]})});p.div`
  background-color: ${({backgroundColor:e,theme:t})=>e||t.colors.neutral[50]};
  padding: ${({padding:e="lg",theme:t})=>t.spacing[e]};
  border-radius: ${({borderRadius:e="lg",theme:t})=>t.borderRadius[e]};
  box-shadow: ${({elevation:e="md",theme:t})=>t.shadows[e]};
  transition: box-shadow ${({theme:e})=>e.transitions.default};

  &:hover {
    box-shadow: ${({elevation:e="md",theme:t})=>t.shadows[e]};
  }
`;const b$=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,w$=p(k.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({theme:e})=>e.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  backdrop-filter: blur(10px);
  background: rgba(10, 25, 47, 0.8);
  border-bottom: 1px solid rgba(230, 241, 255, 0.1);
`,Dh=p(k(Ne))`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #64FFDA;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #BAE3FF;
  }
`,Ph=p.div`
  width: 32px;
  height: 32px;
  background: #64FFDA;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #0A192F;
`,S$=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
`,k$=p(k(Ne))`
  color: ${({isActive:e})=>e?"#64FFDA":"#E6F1FF"};
  text-decoration: none;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #64FFDA;
    transform: scaleX(${({isActive:e})=>e?1:0});
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #64FFDA;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`,$$=p.main`
  flex: 1;
  padding-top: 80px; // Height of the navbar
  min-height: calc(100vh - 80px - 400px); // Viewport height minus navbar and footer
`,j$=p.footer`
  background: #0A192F;
  padding: ${({theme:e})=>e.spacing.xxl} 0;
  border-top: 1px solid rgba(230, 241, 255, 0.1);
  margin-top: auto;
`,C$=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  padding: 0 ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: ${({theme:e})=>e.spacing.xl};
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Fo=p.div`
  h3 {
    color: #64FFDA;
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  }
`,F$=p.p`
  color: #8892B0;
  margin-top: ${({theme:e})=>e.spacing.md};
  line-height: 1.6;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  max-width: 400px;
`,A$=p.form`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.lg};
  max-width: 400px;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`,D$=p.input`
  flex: 1;
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
  background: rgba(230, 241, 255, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  height: 40px;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: #8892B0;
  }
`,P$=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.xl};
`,E$=p(k.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64FFDA;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: ${({theme:e})=>e.typography.fontSize.md};

  &:hover {
    background: #64FFDA;
    color: #0A192F;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.2);
  }
`,T$=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  border-top: 1px solid rgba(230, 241, 255, 0.1);
  margin-top: ${({theme:e})=>e.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,xl=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,vl=p.li`
  a {
    color: #8892B0;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    display: inline-block;
    padding: ${({theme:e})=>e.spacing.xs} 0;

    &:hover {
      color: #64FFDA;
      transform: translateX(4px);
    }
  }
`,z$=p(eo)`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  border: 1px solid #64FFDA;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.1);
  
  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`,M$=({children:e,onLogoClick:t})=>{const n=Fr();return l.jsxs(b$,{children:[l.jsxs(w$,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[l.jsxs(Dh,{to:"/",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},onClick:t,children:[l.jsx(Ph,{children:"AL"}),"AdaptiveLearn"]}),l.jsxs(S$,{children:[[{name:"Courses",href:"/courses"},{name:"Features",href:"/features"},{name:"Resources",href:"/resources"},{name:"Blog",href:"/blog"},{name:"About",href:"/about"},{name:"Contact",href:"/contact"}].map(r=>l.jsx(k$,{to:r.href,isActive:n.pathname===r.href,whileHover:{y:-2},whileTap:{y:0},children:r.name},r.name)),l.jsx(Ne,{to:"/dashboard",children:l.jsx(z$,{variant:"outline",size:"md",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Go to Dashboard"})})]})]}),l.jsx($$,{children:e}),l.jsxs(j$,{children:[l.jsxs(C$,{children:[l.jsxs(Fo,{children:[l.jsxs(Dh,{to:"/",children:[l.jsx(Ph,{children:"AL"}),"AdaptiveLearn"]}),l.jsx(F$,{children:"Empowering learners worldwide with AI-driven education. Join our community and transform your learning journey today."}),l.jsxs(A$,{children:[l.jsx(D$,{type:"email",placeholder:"Enter your email","aria-label":"Email for newsletter"}),l.jsx(eo,{variant:"primary",size:"sm",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Subscribe"})]}),l.jsx(P$,{children:["twitter","linkedin","github","youtube"].map(r=>l.jsx(E$,{href:`https://${r}.com`,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-3},whileTap:{y:0},"aria-label":`Follow us on ${r}`,children:l.jsx("i",{className:`fab fa-${r}`})},r))})]}),l.jsxs(Fo,{children:[l.jsx("h3",{children:"Platform"}),l.jsx(xl,{children:[{name:"Features",path:"/features"},{name:"Learning Paths",path:"/learning-paths"},{name:"Pricing",path:"/pricing"},{name:"Testimonials",path:"/testimonials"},{name:"Blog",path:"/blog"}].map(r=>l.jsx(vl,{children:l.jsx(Ne,{to:r.path,children:r.name})},r.name))})]}),l.jsxs(Fo,{children:[l.jsx("h3",{children:"Company"}),l.jsx(xl,{children:[{name:"About Us",path:"/about"},{name:"Careers",path:"/careers"},{name:"Contact",path:"/contact"},{name:"Privacy Policy",path:"/privacy"},{name:"Terms of Service",path:"/terms"}].map(r=>l.jsx(vl,{children:l.jsx(Ne,{to:r.path,children:r.name})},r.name))})]}),l.jsxs(Fo,{children:[l.jsx("h3",{children:"Support"}),l.jsx(xl,{children:[{name:"Help Center",path:"/help"},{name:"Documentation",path:"/docs"},{name:"Community",path:"/community"},{name:"Status",path:"/status"},{name:"Contact Support",path:"/support"}].map(r=>l.jsx(vl,{children:l.jsx(Ne,{to:r.path,children:r.name})},r.name))})]})]}),l.jsxs(T$,{children:[l.jsx("p",{children:"© 2025 AdaptiveLearn. All rights reserved."}),l.jsxs("div",{children:[l.jsx(Ne,{to:"/privacy",style:{color:"#8892B0",marginRight:"1rem"},children:"Privacy Policy"}),l.jsx(Ne,{to:"/terms",style:{color:"#8892B0"},children:"Terms of Service"})]})]})]})]})},R$=p.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  position: relative;
  overflow: hidden;
`,L$=p.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #E6F1FF;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,B$=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  perspective: 2000px;
`,I$=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid #64FFDA;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    z-index: 1;
  }
`,V$=p.div`
  position: relative;
  z-index: 2;
  transform: translateZ(50px);
`,N$=p.h3`
  font-size: 1.5rem;
  color: #64FFDA;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`,_$=p.p`
  color: #E6F1FF;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,O$=p.div`
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 1rem;
  text-align: center;
`,H$=p(k.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(17, 34, 64, 0.5);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`,W$=p(k.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(10, 25, 47, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
  }

  h3 {
    font-size: 2rem;
    color: #64FFDA;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  }

  p {
    color: #E6F1FF;
    font-size: 1rem;
  }
`,U$=p(k.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(100, 255, 218, 0.2) 0%, rgba(100, 255, 218, 0) 70%);
  filter: blur(20px);
  pointer-events: none;
  z-index: 0;
`,G$=()=>{const e=S.useRef(null),[t,n]=S.useState({x:0,y:0}),{scrollYProgress:r}=Ji();S.useEffect(()=>{const s=c=>{if(e.current){const u=e.current.getBoundingClientRect();n({x:c.clientX-u.left,y:c.clientY-u.top})}},a=e.current;return a&&a.addEventListener("mousemove",s),()=>{a&&a.removeEventListener("mousemove",s)}},[]);const i=[{icon:"🎯",title:"Personalized Learning Path",description:"AI-powered adaptive learning that adjusts to your pace and style"},{icon:"📊",title:"Real-time Analytics",description:"Track your progress with detailed insights and recommendations"},{icon:"🤖",title:"AI Tutor Support",description:"Get instant help from our AI tutors available 24/7"},{icon:"🎮",title:"Interactive Learning",description:"Engage with interactive exercises and real-world projects"}],o=[{value:"95%",label:"Success Rate"},{value:"10K+",label:"Active Learners"},{value:"500+",label:"Courses"},{value:"24/7",label:"AI Support"}];return l.jsxs(R$,{ref:e,children:[l.jsx(U$,{animate:{x:t.x-75,y:t.y-75},transition:{type:"spring",damping:30,stiffness:200}}),l.jsx(L$,{children:"Experience Learning in 3D"}),l.jsx(B$,{children:i.map((s,a)=>l.jsx(I$,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:a*.1},viewport:{once:!0},whileHover:{scale:1.05,rotateY:5,rotateX:5,transition:{duration:.3}},children:l.jsxs(V$,{children:[l.jsx(O$,{children:s.icon}),l.jsx(N$,{children:s.title}),l.jsx(_$,{children:s.description})]})},s.title))}),l.jsx(H$,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:o.map((s,a)=>l.jsxs(W$,{initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:a*.1},viewport:{once:!0},children:[l.jsx("h3",{children:s.value}),l.jsx("p",{children:s.label})]},s.label))})]})},Y$=p.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.neutral[50]};
`;p(k.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${e=>e.theme.zIndex.sticky};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${e=>e.theme.shadows.sm};
`;p(k(Ne))`
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary[600]};
  text-decoration: none;
`;p(k.div)`
  display: flex;
  gap: ${e=>e.theme.spacing.lg};
`;p(k(Ne))`
  color: ${e=>e.theme.colors.neutral[700]};
  text-decoration: none;
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  transition: color ${e=>e.theme.transitions.default};

  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
`;const Eh=p(k.div)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,bl=p(k.button)`
  background: #64FFDA;
  color: #0A192F;
  padding: 1rem 2rem;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);

  &:hover {
    background: #4CD8B2;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`,K$=p(k.button)`
  background: transparent;
  color: #64FFDA;
  padding: 1rem 2rem;
  border: 2px solid #64FFDA;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.1);

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;p(k(eo))`
  background: ${e=>e.theme.colors.success[600]};
  color: white;
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  transition: background-color ${e=>e.theme.transitions.default};

  &:hover {
    background: ${e=>e.theme.colors.success[700]};
  }
`;const X$=p(k.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
    filter: blur(4px);
    transform: translateZ(-100px);
  }
`,q$=p(k.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Q$=p(k.div)`
  transform-style: preserve-3d;
  
  h1 {
    font-size: 4.5rem;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
    line-height: 1.1;
    background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateZ(50px);
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
  }

  p {
    font-size: 1.25rem;
    color: #8892B0;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
    line-height: 1.8;
    transform: translateZ(30px);
    max-width: 600px;
  }
`,Z$=p(k.div)`
  position: relative;
  width: 100%;
  height: 600px;
  transform-style: preserve-3d;
  perspective: 1000px;
`,wl=p(k.div)`
  position: absolute;
  background: rgba(17, 34, 64, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  width: 320px;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  .icon {
    font-size: 2.5rem;
    color: #64FFDA;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    transition: transform 0.3s ease;
  }
  
  h3 {
    color: #E6F1FF;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    transition: color 0.3s ease;
  }
  
  p {
    color: #8892B0;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    line-height: 1.6;
    transition: color 0.3s ease;
  }
  
  &.card-1 {
    top: 5%;
    left: 5%;
    transform: translateZ(100px) rotateY(-15deg);
    z-index: 3;
  }
  
  &.card-2 {
    top: 40%;
    right: 5%;
    transform: translateZ(150px) rotateY(15deg);
    z-index: 2;
  }
  
  &.card-3 {
    bottom: 5%;
    left: 15%;
    transform: translateZ(50px) rotateY(-5deg);
    z-index: 1;
  }

  &:hover {
    transform: translateZ(200px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(100, 255, 218, 0.4);
    background: rgba(17, 34, 64, 0.98);

    .icon {
      transform: scale(1.1);
    }

    h3 {
      color: #64FFDA;
    }

    p {
      color: #E6F1FF;
    }
  }
`;p(k.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing.xl};
  padding: ${({theme:e})=>e.spacing.lg};
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transform: translateZ(40px);
`;p(k.div)`
  text-align: center;
  
  h3 {
    font-size: ${({theme:e})=>e.typography.fontSize.xxl};
    color: #64FFDA;
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }
  
  p {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: #8892B0;
    margin: 0;
  }
`;const J$=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,On=p(k.h2)`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
`,e4=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`,t4=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  padding: ${({theme:e})=>e.spacing.xl};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    .icon {
      transform: scale(1.1) rotate(5deg);
      color: #64FFDA;
    }

    h3 {
      color: #64FFDA;
    }
  }
`,n4=p.div`
  font-size: 2.5rem;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: #8892B0;
  transition: all 0.3s ease;
`,r4=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: #E6F1FF;
`,i4=p.p`
  color: #8892B0;
  line-height: 1.6;
`;p(k.div)`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: #E6F1FF;
  max-width: 800px;
  line-height: 1.2;
`;p.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: #8892B0;
  max-width: 600px;
  margin: 0 auto ${({theme:e})=>e.spacing.xl};
  line-height: 1.6;
`;const o4=p(k.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #64FFDA;
  transform-origin: left;
  z-index: ${({theme:e})=>e.zIndex.fixed};
`;p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: #0A192F;
  text-align: center;
`;p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;const s4=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: #112240;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`,a4=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`,l4=p(k.div)`
  background: rgba(10, 25, 47, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .path-image {
      transform: scale(1.1);
    }

    h3 {
      color: #64FFDA;
    }
  }
`,c4=p.div`
  width: 100%;
  height: 200px;
  background: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  transition: transform 0.5s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(10, 25, 47, 0.9));
  }
`,u4=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,d4=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`,p4=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .quote {
      color: #64FFDA;
    }

    .author-image {
      transform: scale(1.1);
      border-color: #64FFDA;
    }
  }
`,f4=p.p`
  color: #E6F1FF;
  font-style: italic;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  line-height: 1.6;
`,h4=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,m4=p.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;
`,g4=p.div`
  h4 {
    color: #64FFDA;
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }

  p {
    color: #8892B0;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`;p(k.div)`
  display: flex;
  justify-content: space-around;
  padding: ${({theme:e})=>e.spacing.xl};
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin: ${({theme:e})=>e.spacing.xl} 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`;p(k.div)`
  text-align: center;
  h3 {
    font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
    color: #64FFDA;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
  p {
    color: #8892B0;
    font-size: ${({theme:e})=>e.typography.fontSize.md};
  }
`;p(k.div)`
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  margin: ${({theme:e})=>e.spacing.xl} 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`;p(k.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;p(k.div)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin: ${({theme:e})=>e.spacing.md} 0;
  
  .icon {
    font-size: 24px;
    color: #64FFDA;
  }
  
  .text {
    color: #E6F1FF;
  }
`;p(k.div)`
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  margin: ${({theme:e})=>e.spacing.lg} 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  
  .quote {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    color: #E6F1FF;
    font-style: italic;
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
  
  .author {
    color: #64FFDA;
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  }
`;const y4=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: #112240;
  position: relative;
  overflow: hidden;
`,x4=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`,v4=p(k.div)`
  background: rgba(10, 25, 47, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`,b4=p.div`
  width: 100%;
  height: 200px;
  background: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(10, 25, 47, 0.9));
  }
`,w4=p.div`
  padding: ${({theme:e})=>e.spacing.lg};
`,S4=p.h3`
  color: #64FFDA;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
`,k4=p.p`
  color: #8892B0;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,$4=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,j4=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: #0A192F;
  position: relative;
`,C4=p.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: ${({theme:e})=>e.spacing.xl} 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #64FFDA, transparent);
    transform: translateX(-50%);
  }
`,F4=p(k.div)`
  width: 45%;
  margin: ${({theme:e})=>e.spacing.xl} 0;
  margin-left: ${e=>e.side==="right"?"55%":"0"};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${e=>e.side==="left"?"right: -60px;":"left: -60px;"}
    width: 20px;
    height: 20px;
    background: #64FFDA;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  }
`,A4=p.div`
  background: rgba(17, 34, 64, 0.95);
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`,D4=p.h3`
  color: #64FFDA;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,P4=p.p`
  color: #8892B0;
`,E4=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,T4=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,z4=p.div`
  h2 {
    color: #64FFDA;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
  }

  p {
    color: #8892B0;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
    line-height: 1.6;
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,M4=p(k.div)`
  background: rgba(10, 25, 47, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .demo-image {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 0.8;
    }
  }
`,R4=p.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  position: relative;
`,L4=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(100, 255, 218, 0.2) 0%, rgba(10, 25, 47, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`,B4=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.xl};
`,Ao=p(k.div)`
  background: rgba(17, 34, 64, 0.5);
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    background: rgba(17, 34, 64, 0.8);

    .icon {
      color: #64FFDA;
      transform: scale(1.1);
    }
  }

  .icon {
    font-size: 1.5rem;
    color: #8892B0;
    transition: all 0.3s ease;
  }

  .text {
    color: #E6F1FF;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`;p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: #0A192F;
  position: relative;
`;p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
`;p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;p.h3`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`;p.p`
  color: #8892B0;
  line-height: 1.6;
`;p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: #112240;
  position: relative;
`;p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
`;p.div`
  h2 {
    color: #64FFDA;
    font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
    margin-bottom: ${({theme:e})=>e.spacing.lg};
  }

  p {
    color: #8892B0;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
    line-height: 1.6;
  }
`;p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
`;p(k.div)`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.md};
  
  .icon {
    color: #64FFDA;
    font-size: 24px;
  }
  
  .content {
    h3 {
      color: #E6F1FF;
      margin-bottom: ${e=>e.theme.spacing.xs};
    }
    
    p {
      color: #8892B0;
      margin: 0;
    }
  }
`;const I4=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,V4=p.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,N4=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
  margin-top: ${({theme:e})=>e.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,_4=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    .partner-logo {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    .partner-name {
      color: #64FFDA;
    }
  }
`,O4=p.div`
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  transition: all 0.3s ease;
  padding: ${({theme:e})=>e.spacing.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
  }
`,H4=p.h3`
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  transition: color 0.3s ease;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
`,W4=p.p`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  opacity: 0.8;
`,U4=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  width: 100%;
  justify-content: center;
`,Th=p.div`
  text-align: center;
  
  .value {
    color: #64FFDA;
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  }
  
  .label {
    color: #8892B0;
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
  }
`,G4=p(k.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  background: rgba(17, 34, 64, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: ${({theme:e})=>e.zIndex.fixed};
  border: 2px solid #64FFDA;
  box-shadow: 0 4px 20px rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(100, 255, 218, 0.3);
  }

  .ai-face {
    width: 60%;
    height: 60%;
    position: relative;
  }

  .eye {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #64FFDA;
    border-radius: 50%;
    top: 30%;
    animation: blink 3s infinite;
  }

  .eye.left {
    left: 25%;
  }

  .eye.right {
    right: 25%;
  }

  .mouth {
    position: absolute;
    width: 20px;
    height: 10px;
    border: 2px solid #64FFDA;
    border-radius: 0 0 20px 20px;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    animation: smile 3s infinite;
  }

  @keyframes blink {
    0%, 45%, 55%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.1); }
  }

  @keyframes smile {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.2); }
  }
`,Y4=p(k.div)`
  position: absolute;
  bottom: 120px;
  right: 30px;
  background: rgba(17, 34, 64, 0.95);
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid #64FFDA;
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  max-width: 250px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: ${({theme:e})=>e.zIndex.fixed};

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 30px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(17, 34, 64, 0.95);
  }
`,K4=p(k.button)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(17, 34, 64, 0.95);
  border: 2px solid #64FFDA;
  color: #64FFDA;
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;
  animation: bounce 3s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(100, 255, 218, 0.3);
    border-color: #64FFDA;
    background: rgba(17, 34, 64, 0.98);
  }

  &:active {
    transform: scale(0.95);
  }
`,X4=p(k.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(17, 34, 64, 0.98);
  padding: 30px;
  border-radius: 25px;
  border: 3px solid rgba(100, 255, 218, 0.3);
  max-width: 400px;
  width: 90%;
  z-index: 1001;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(100, 255, 218, 0.2);
`,q4=p.div`
  color: #E6F1FF;
  text-align: center;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  line-height: 1.6;
  padding: 20px;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(100, 255, 218, 0.1);
`,Q4=p.h3`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-shadow: 0 2px 10px rgba(100, 255, 218, 0.3);
`,Z4=p(k.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #64FFDA;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: rotate(90deg);
  }
`,zh=["Did you know? 🎯 Adaptive learning can increase student performance by up to 30% compared to traditional methods!","Fun fact: 💻 The first adaptive learning system was developed in the 1970s using a computer the size of a room!","Interesting: ⚡ Students using adaptive learning complete courses 25% faster than traditional methods!","Cool fact: 🎓 Adaptive learning can reduce study time by up to 50% while improving retention!","Amazing: 🌟 90% of students report better engagement with adaptive learning systems!","Fascinating: 🧠 Our AI can adapt to your learning style in real-time, just like a personal tutor!","Exciting: 🚀 Adaptive learning platforms can process over 1 million data points per student!","Wonderful: 💫 Students using adaptive learning show 40% higher confidence in their abilities!"],J4=()=>{const{scrollYProgress:e}=Ji();sa();const[t,n]=S.useState({x:0,y:0}),[r,i]=S.useState(null),[o,s]=S.useState(!1),[a,c]=S.useState("Hi! I'm your AI learning companion. How can I help you today?"),[u,d]=S.useState(!1),[f,h]=S.useState(0);S.useEffect(()=>{const y=b=>{n({x:(b.clientX/window.innerWidth-.5)*20,y:(b.clientY/window.innerHeight-.5)*20})};return window.addEventListener("mousemove",y),()=>window.removeEventListener("mousemove",y)},[]);const x=()=>{if(s(!o),!o){const y=["Hi! I'm your AI learning companion. How can I help you today?","Ready to start your learning journey? I'm here to guide you!","Need help finding the right course? Just ask me!","I can help you track your progress and suggest new courses!","Let's make learning fun and effective together!"];c(y[Math.floor(Math.random()*y.length)])}},w=()=>{h(Math.floor(Math.random()*zh.length)),d(!0)};return l.jsx(Xg,{theme:Ex,children:l.jsxs(Y$,{children:[l.jsx(o4,{style:{scaleX:e}}),l.jsx(X$,{children:l.jsxs(q$,{animate:{rotateX:t.y*.3,rotateY:t.x*.3},transition:{type:"spring",stiffness:30,damping:20},children:[l.jsxs(Q$,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[l.jsx("h1",{children:"Transform Your Learning Journey with AI"}),l.jsx("p",{children:"Experience personalized education that adapts to your learning style, pace, and goals. Our AI-powered platform helps you master new skills faster and more effectively."}),l.jsxs(Eh,{children:[l.jsx(Ne,{to:"/onboarding",children:l.jsx(bl,{whileHover:{scale:1.05,y:-5},whileTap:{scale:.95},children:"Get Started"})}),l.jsx(Ne,{to:"/courses",children:l.jsx(K$,{whileHover:{scale:1.05,y:-5},whileTap:{scale:.95},children:"Explore Courses"})})]})]}),l.jsxs(Z$,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.3},children:[l.jsxs(wl,{className:"card-1",initial:{opacity:0,y:-50},animate:{opacity:1,y:0,rotateY:r==="card-1"?-5:-15,scale:r==="card-1"?1.05:1},transition:{duration:.5,delay:.6},onHoverStart:()=>i("card-1"),onHoverEnd:()=>i(null),children:[l.jsx("div",{className:"icon",children:"🎯"}),l.jsx("h3",{children:"AI-Powered Learning"}),l.jsx("p",{children:"Personalized learning paths tailored to your goals and learning style"})]}),l.jsxs(wl,{className:"card-2",initial:{opacity:0,x:50},animate:{opacity:1,x:0,rotateY:r==="card-2"?5:15,scale:r==="card-2"?1.05:1},transition:{duration:.5,delay:.7},onHoverStart:()=>i("card-2"),onHoverEnd:()=>i(null),children:[l.jsx("div",{className:"icon",children:"📊"}),l.jsx("h3",{children:"Real-time Analytics"}),l.jsx("p",{children:"Track your progress with detailed insights and recommendations"})]}),l.jsxs(wl,{className:"card-3",initial:{opacity:0,y:50},animate:{opacity:1,y:0,rotateY:r==="card-3"?0:-5,scale:r==="card-3"?1.05:1},transition:{duration:.5,delay:.8},onHoverStart:()=>i("card-3"),onHoverEnd:()=>i(null),children:[l.jsx("div",{className:"icon",children:"🤖"}),l.jsx("h3",{children:"Smart Recommendations"}),l.jsx("p",{children:"Get personalized content suggestions based on your performance"})]})]})]})}),l.jsxs(J$,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,margin:"-100px"},children:[l.jsx(On,{children:"Key Features"}),l.jsx(e4,{children:[{icon:"🎯",title:"Personalized Learning",description:"AI-powered adaptive learning that adjusts to your pace and style"},{icon:"📊",title:"Real-time Analytics",description:"Track your progress with detailed insights and recommendations"},{icon:"🤖",title:"AI Tutor Support",description:"Get instant help from our AI tutors available 24/7"}].map((y,b)=>l.jsxs(t4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},viewport:{once:!0},whileHover:{scale:1.02},children:[l.jsx(n4,{className:"icon",children:y.icon}),l.jsx(r4,{children:y.title}),l.jsx(i4,{children:y.description})]},y.title))})]}),l.jsxs(s4,{children:[l.jsx(On,{children:"Learning Paths"}),l.jsx(a4,{children:[{title:"Web Development",description:"Master modern web technologies and build responsive applications.",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"},{title:"Data Science",description:"Learn data analysis, machine learning, and AI fundamentals.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},{title:"Mobile Development",description:"Create powerful mobile applications for iOS and Android.",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}].map((y,b)=>l.jsxs(l4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},viewport:{once:!0},children:[l.jsx(c4,{imageUrl:y.image}),l.jsx("h3",{children:y.title}),l.jsx("p",{children:y.description})]},y.title))})]}),l.jsxs(y4,{children:[l.jsx(On,{children:"Featured Courses"}),l.jsx(x4,{children:[{title:"Advanced Machine Learning",description:"Master the latest ML algorithms and techniques",image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",duration:"12 weeks",level:"Advanced"},{title:"Web Development Bootcamp",description:"Build modern web applications from scratch",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",duration:"16 weeks",level:"Intermediate"},{title:"Data Science Fundamentals",description:"Learn data analysis and visualization",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",duration:"10 weeks",level:"Beginner"}].map((y,b)=>l.jsxs(v4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},viewport:{once:!0},children:[l.jsx(b4,{imageUrl:y.image}),l.jsxs(w4,{children:[l.jsx(S4,{children:y.title}),l.jsx(k4,{children:y.description}),l.jsxs($4,{children:[l.jsx("span",{children:y.duration}),l.jsx("span",{children:y.level})]})]})]},y.title))})]}),l.jsx(G$,{}),l.jsxs(j4,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,margin:"-100px"},children:[l.jsx(On,{children:"Your Learning Journey"}),l.jsx(C4,{children:[{title:"Assessment & Goal Setting",description:"Take our AI-powered assessment to determine your current skill level and set personalized learning goals.",side:"left"},{title:"Personalized Learning Path",description:"Get a customized curriculum that adapts to your learning style and pace.",side:"right"},{title:"Interactive Learning",description:"Engage with interactive exercises, projects, and real-world applications.",side:"left"},{title:"Progress Tracking",description:"Monitor your progress with detailed analytics and receive personalized recommendations.",side:"right"}].map((y,b)=>l.jsx(F4,{side:y.side,initial:{opacity:0,x:y.side==="left"?-50:50},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:b*.1},viewport:{once:!0},children:l.jsxs(A4,{children:[l.jsx(D4,{children:y.title}),l.jsx(P4,{children:y.description})]})},y.title))})]}),l.jsx(E4,{children:l.jsxs(T4,{children:[l.jsxs(z4,{children:[l.jsx("h2",{children:"Experience the Future of Learning"}),l.jsx("p",{children:"Try our interactive demo and see how our AI-powered platform adapts to your learning style. Get a personalized experience that helps you learn faster and more effectively."}),l.jsxs(B4,{children:[l.jsxs(Ao,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:[l.jsx("span",{className:"icon",children:"🎯"}),l.jsx("span",{className:"text",children:"Personalized Learning Path"})]}),l.jsxs(Ao,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[l.jsx("span",{className:"icon",children:"📊"}),l.jsx("span",{className:"text",children:"Real-time Progress Tracking"})]}),l.jsxs(Ao,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:[l.jsx("span",{className:"icon",children:"🤖"}),l.jsx("span",{className:"text",children:"AI-Powered Recommendations"})]}),l.jsxs(Ao,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[l.jsx("span",{className:"icon",children:"🎮"}),l.jsx("span",{className:"text",children:"Interactive Exercises"})]})]}),l.jsx(Eh,{children:l.jsx(Ne,{to:"/demo",children:l.jsx(bl,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Start Demo"})})})]}),l.jsxs(M4,{children:[l.jsx(R4,{className:"demo-image"}),l.jsx(L4,{className:"overlay",children:l.jsx(bl,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Launch Interactive Demo"})})]})]})}),l.jsx(G4,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1},onClick:x,whileHover:{scale:1.1},whileTap:{scale:.9},children:l.jsxs("div",{className:"ai-face",children:[l.jsx("div",{className:"eye left"}),l.jsx("div",{className:"eye right"}),l.jsx("div",{className:"mouth"})]})}),l.jsx(jt,{children:o&&l.jsx(Y4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.3},children:a})}),l.jsxs(I4,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,margin:"-100px"},children:[l.jsx(On,{children:"Trusted by Leading Organizations"}),l.jsx(V4,{children:l.jsx(N4,{children:[{name:"Google",type:"Technology Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",stats:{employees:"500+",courses:"50+"}},{name:"Microsoft",type:"Enterprise Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",stats:{employees:"1000+",courses:"75+"}},{name:"Amazon",type:"Cloud Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",stats:{employees:"800+",courses:"60+"}},{name:"IBM",type:"Research Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",stats:{employees:"600+",courses:"45+"}},{name:"Apple",type:"Technology Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",stats:{employees:"400+",courses:"30+"}},{name:"Meta",type:"Innovation Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",stats:{employees:"300+",courses:"25+"}},{name:"Stanford",type:"Academic Partner",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png",stats:{students:"2000+",courses:"100+"}},{name:"MIT",type:"Research Partner",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",stats:{students:"1500+",courses:"80+"}}].map((y,b)=>l.jsxs(_4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},viewport:{once:!0},whileHover:{scale:1.02},children:[l.jsx(O4,{className:"partner-logo",children:l.jsx("img",{src:y.logo,alt:y.name,style:{filter:"brightness(0) invert(1)",opacity:.9}})}),l.jsx(H4,{className:"partner-name",children:y.name}),l.jsx(W4,{children:y.type}),l.jsxs(U4,{children:[l.jsxs(Th,{children:[l.jsx("div",{className:"value",children:y.stats.employees||y.stats.students}),l.jsx("div",{className:"label",children:y.stats.employees?"Employees Trained":"Students Enrolled"})]}),l.jsxs(Th,{children:[l.jsx("div",{className:"value",children:y.stats.courses}),l.jsx("div",{className:"label",children:"Courses"})]})]})]},y.name))})})]}),l.jsxs(u4,{children:[l.jsx(On,{children:"What Our Learners Say"}),l.jsx(d4,{children:[{content:"The adaptive learning system has transformed how I learn. It's like having a personal tutor that knows exactly what I need.",author:"Sarah Johnson",role:"Software Engineer",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"},{content:"I've tried many learning platforms, but this one stands out. The AI coach is incredibly helpful and responsive.",author:"Michael Chen",role:"Data Scientist",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"},{content:"The personalized learning paths and progress tracking have helped me achieve my goals faster than I expected.",author:"Emily Rodriguez",role:"UX Designer",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"}].map((y,b)=>l.jsxs(p4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},viewport:{once:!0},children:[l.jsxs(f4,{children:['"',y.content,'"']}),l.jsxs(h4,{children:[l.jsx(m4,{src:y.image,alt:y.author}),l.jsxs(g4,{children:[l.jsx("h4",{children:y.author}),l.jsx("p",{children:y.role})]})]})]},y.author))})]}),l.jsx(K4,{onClick:w,whileHover:{scale:1.1},whileTap:{scale:.9},children:"💫"}),l.jsx(jt,{children:u&&l.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(10, 25, 47, 0.8)",zIndex:1e3},onClick:()=>d(!1),children:l.jsxs(X4,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:y=>y.stopPropagation(),children:[l.jsx(Z4,{onClick:()=>d(!1),whileHover:{rotate:90},children:"✕"}),l.jsxs(Q4,{children:[l.jsx("span",{children:"✨"})," Fun Fact ",l.jsx("span",{children:"✨"})]}),l.jsx(q4,{children:zh[f]})]})})})]})})},ej=p.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,tj=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
`,nj=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,rj=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: #E6F1FF;
  margin: 0;
`,ij=p.p`
  color: #8892B0;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,oj=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,Mh=p.div`
  text-align: center;
`,Rh=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: #8892B0;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Lh=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #64FFDA;
`,Bh=p.div`
  width: 100%;
  height: 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: ${({theme:e})=>e.borderRadius.full};
  margin-top: ${({theme:e})=>e.spacing.sm};
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${({progress:e})=>`${e}%`};
    height: 100%;
    background: #64FFDA;
    border-radius: ${({theme:e})=>e.borderRadius.full};
    transition: width 0.3s ease;
  }
`,Ih=()=>{const e=[{id:"1",name:"React Fundamentals",description:"Core concepts and best practices of React development",masteryLevel:75,confidenceLevel:80},{id:"2",name:"TypeScript",description:"Type-safe JavaScript development",masteryLevel:60,confidenceLevel:65},{id:"3",name:"Node.js",description:"Server-side JavaScript development",masteryLevel:45,confidenceLevel:50}];return l.jsx(ej,{children:e.map((t,n)=>l.jsxs(tj,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:n*.1},children:[l.jsxs(nj,{children:[l.jsx(rj,{children:t.name}),l.jsx(eo,{variant:"outline",size:"sm",onClick:()=>{},children:"Edit"})]}),l.jsx(ij,{children:t.description}),l.jsxs(oj,{children:[l.jsxs(Mh,{children:[l.jsx(Rh,{children:"Mastery"}),l.jsxs(Lh,{children:[t.masteryLevel,"%"]}),l.jsx(Bh,{progress:t.masteryLevel})]}),l.jsxs(Mh,{children:[l.jsx(Rh,{children:"Confidence"}),l.jsxs(Lh,{children:[t.confidenceLevel,"%"]}),l.jsx(Bh,{progress:t.confidenceLevel})]})]})]},t.id))})},sj=p(k.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,aj=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
`,lj=p(k.div)`
  background: ${({theme:e})=>e.colors.primary[50]};
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,cj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[700]};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,uj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,dj=p.div`
  background: ${({theme:e})=>e.colors.neutral[50]};
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,pj=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,fj=p.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.neutral[900]};
  margin: 0;
`,hj=p.span`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.primary[600]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,mj=p(k.div)`
  width: 100%;
  height: 8px;
  background: ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({progress:e})=>`${e}%`};
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary[400]}, ${({theme:e})=>e.colors.primary[600]});
    border-radius: ${({theme:e})=>e.borderRadius.full};
  }
`,gj=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,yj=p(k.div)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`,xj=p.div`
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.colors.primary[100]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
`,vj=p.div`
  flex: 1;
`,bj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.neutral[900]};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,wj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,Sj=[{value:"42h",label:"Total Study Hours"},{value:"12",label:"Completed Courses"},{value:"85%",label:"Average Score"},{value:"7",label:"Current Streak"}],kj=[{icon:"🎯",name:"Perfect Week",progress:"5/7 days completed"},{icon:"📚",name:"Bookworm",progress:"8/10 books read"},{icon:"⭐",name:"Top Performer",progress:"3/5 top scores"}],Vh=()=>l.jsxs(sj,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[l.jsx(aj,{children:Sj.map((e,t)=>l.jsxs(lj,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:t*.1},children:[l.jsx(cj,{children:e.value}),l.jsx(uj,{children:e.label})]},e.label))}),l.jsxs(dj,{children:[l.jsxs(pj,{children:[l.jsx(fj,{children:"Level Progress"}),l.jsx(hj,{children:"Level 5 - 75%"})]}),l.jsx(mj,{progress:75,initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1,ease:"easeOut"}})]}),l.jsx(gj,{children:kj.map((e,t)=>l.jsxs(yj,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:t*.1},children:[l.jsx(xj,{children:e.icon}),l.jsxs(vj,{children:[l.jsx(bj,{children:e.name}),l.jsx(wj,{children:e.progress})]})]},e.name))})]}),$j=p.div`
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: ${({theme:e})=>e.spacing.xl};
  min-width: 280px;
`,jj=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.primary[700]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Cj=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.primary[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,Fj=p.div`
  text-align: center;
`,Aj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[700]};
`,Dj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,Pj=p(k.div)`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e})=>e.colors.success[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success[700]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Ej=p.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({theme:e})=>e.spacing.xs};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Tj=p.div`
  text-align: center;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  padding: ${({theme:e})=>e.spacing.xs};
`,zj=p(k.div)`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  background: ${({active:e,today:t,theme:n})=>t?n.colors.primary[100]:e?n.colors.primary[50]:n.colors.neutral[100]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({active:e,today:t,theme:n})=>t?n.colors.primary[700]:e?n.colors.primary[600]:n.colors.neutral[600]};
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({active:e,theme:t})=>e?t.colors.primary[500]:"transparent"};
  }
`,Mj=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Nh=p.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.neutral[100]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,_h=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[900]};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Oh=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,Rj=["S","M","T","W","T","F","S"],Os=new Date,Hh=Os.getDate(),Wh=Os.getMonth(),Lj=()=>{const e=new Date(Os.getFullYear(),Wh+1,0).getDate(),t=new Date(Os.getFullYear(),Wh,1).getDay(),n=[];for(let r=0;r<t;r++)n.push(null);for(let r=1;r<=e;r++)n.push(r);return n},Uh=()=>{const e=Lj(),t=5;return l.jsxs($j,{children:[l.jsxs(jj,{children:[l.jsx("span",{role:"img","aria-label":"fire",children:"🔥"}),"Study Streak"]}),l.jsxs(Cj,{children:[l.jsxs(Fj,{children:[l.jsx(Aj,{children:t}),l.jsx(Dj,{children:"Current Streak"})]}),l.jsxs(Pj,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300},children:["+",t*10," points"]})]}),l.jsxs(Ej,{children:[Rj.map((i,o)=>l.jsx(Tj,{children:i},o)),e.map((i,o)=>i?l.jsx(zj,{active:i<Hh,today:i===Hh,whileHover:{scale:1.1},whileTap:{scale:.95},children:i},o):l.jsx("div",{},o))]}),l.jsxs(Mj,{children:[l.jsxs(Nh,{children:[l.jsx(_h,{children:12}),l.jsx(Oh,{children:"Longest Streak"})]}),l.jsxs(Nh,{children:[l.jsx(_h,{children:45}),l.jsx(Oh,{children:"Total Study Days"})]})]})]})},Bj=p.div`
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: ${({theme:e})=>e.spacing.xl};
  min-width: 280px;
`,Ij=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.primary[700]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Vj=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Nj=p.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  background: ${({top:e,theme:t})=>e?t.colors.primary[100]:"transparent"};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({top:e,theme:t})=>e?t.spacing.sm:"0"};
  box-shadow: ${({top:e,theme:t})=>e?t.shadows.sm:"none"};
  font-weight: ${({top:e})=>e?600:400};
  transition: background 0.2s;
`,_j=p.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.spacing.md};
`,Oj=p.span`
  flex: 1;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.neutral[900]};
`,Hj=p.span`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.primary[600]};
  font-weight: 600;
`,Wj=[{name:"Alex",avatar:"https://i.pravatar.cc/100?img=1",score:1200},{name:"Priya",avatar:"https://i.pravatar.cc/100?img=2",score:1100},{name:"Sam",avatar:"https://i.pravatar.cc/100?img=3",score:950},{name:"Jordan",avatar:"https://i.pravatar.cc/100?img=4",score:900},{name:"Taylor",avatar:"https://i.pravatar.cc/100?img=5",score:850}],Gh=()=>l.jsxs(Bj,{children:[l.jsx(Ij,{children:"Leaderboard"}),l.jsx(Vj,{children:Wj.map((e,t)=>l.jsxs(Nj,{top:t<3,style:t<3?{animation:"pop 0.5s"}:{},children:[l.jsx(_j,{src:e.avatar,alt:e.name}),l.jsx(Oj,{children:e.name}),l.jsx(Hj,{children:e.score})]},e.name))}),l.jsx("style",{children:`
        @keyframes pop {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `})]}),Uj=p(k.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,Gj=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,Yj=p(k.div)`
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`,Kj=p.div`
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.colors.primary[100]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
`,Xj=p.div`
  flex: 1;
`,qj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.neutral[900]};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Qj=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.neutral[600]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Zj=p.span`
  color: ${({theme:e})=>e.colors.primary[600]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Jj=p(k.button)`
  width: 32px;
  height: 32px;
  border: 2px solid ${({checked:e,theme:t})=>e?t.colors.primary[500]:t.colors.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({checked:e,theme:t})=>e?t.colors.primary[500]:"transparent"};
  color: ${({checked:e,theme:t})=>e?t.colors.neutral[50]:t.colors.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[500]};
    color: ${({theme:e})=>e.colors.primary[500]};
  }
`,e8=p(k.button)`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  background: ${({theme:e})=>e.colors.primary[500]};
  color: ${({theme:e})=>e.colors.neutral[50]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.md};

  &:hover {
    background: ${({theme:e})=>e.colors.primary[600]};
  }
`,t8=p(k.form)`
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,Yh=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`,Kh=p.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Xh=p.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
  }
`,n8=p(k.button)`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  background: ${({theme:e})=>e.colors.primary[500]};
  color: ${({theme:e})=>e.colors.neutral[50]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${({theme:e})=>e.colors.primary[600]};
  }
`,r8=[{id:"1",name:"Morning Study",icon:"🌅",streak:5,checked:!1},{id:"2",name:"Evening Review",icon:"🌙",streak:3,checked:!0},{id:"3",name:"Practice Coding",icon:"💻",streak:7,checked:!1}],qh=()=>{const[e,t]=S.useState(r8),[n,r]=S.useState(!1),[i,o]=S.useState({name:"",icon:"📝"}),s=c=>{t(u=>u.map(d=>d.id===c?{...d,checked:!d.checked,streak:d.checked?d.streak-1:d.streak+1}:d))},a=c=>{c.preventDefault(),i.name.trim()&&(t(u=>[...u,{id:Date.now().toString(),name:i.name,icon:i.icon,streak:0,checked:!1}]),o({name:"",icon:"📝"}),r(!1))};return l.jsxs(Uj,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[l.jsx(Gj,{children:e.map((c,u)=>l.jsxs(Yj,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:u*.1},children:[l.jsx(Kj,{children:c.icon}),l.jsxs(Xj,{children:[l.jsx(qj,{children:c.name}),l.jsxs(Qj,{children:[l.jsx("span",{children:"🔥"}),l.jsxs(Zj,{children:[c.streak," day streak"]})]})]}),l.jsx(Jj,{checked:c.checked,onClick:()=>s(c.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.checked?"✓":"+"})]},c.id))}),n?l.jsx(jt,{children:l.jsxs(t8,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onSubmit:a,children:[l.jsxs(Yh,{children:[l.jsx(Kh,{children:"Habit Name"}),l.jsx(Xh,{type:"text",value:i.name,onChange:c=>o({...i,name:c.target.value}),placeholder:"Enter habit name",required:!0})]}),l.jsxs(Yh,{children:[l.jsx(Kh,{children:"Icon"}),l.jsx(Xh,{type:"text",value:i.icon,onChange:c=>o({...i,icon:c.target.value}),placeholder:"Enter emoji",maxLength:2})]}),l.jsx(n8,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add Habit"})]})}):l.jsxs(e8,{onClick:()=>r(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx("span",{children:"➕"})," Add New Habit"]})]})},i8=p(k.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 380px;
  background: rgba(17, 34, 64, 0.98);
  border-radius: 20px;
  border: 2px solid rgba(100, 255, 218, 0.3);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
  overflow: hidden;
  z-index: 1000;
`,o8=p.div`
  padding: 20px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(79, 209, 197, 0.15));
  border-bottom: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`,s8=p.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,a8=p(k.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64FFDA, #4FD1C5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #0A192F;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.4);
`,l8=p.div`
  display: flex;
  flex-direction: column;
`,c8=p.div`
  color: #64FFDA;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`,u8=p.span`
  background: rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
`,d8=p.div`
  color: #8892B0;
  font-size: 0.9rem;
`,p8=p(k.button)`
  background: none;
  border: none;
  color: #64FFDA;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
`,f8=p(k.div)`
  height: 500px;
  display: flex;
  flex-direction: column;
`,h8=p.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(100, 255, 218, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(100, 255, 218, 0.3);
    border-radius: 4px;
  }
`,m8=p(k.div)`
  padding: 12px 18px;
  border-radius: 20px;
  max-width: 85%;
  align-self: ${({isUser:e})=>e?"flex-end":"flex-start"};
  background: ${({isUser:e})=>e?"linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2))":"rgba(17, 34, 64, 0.8)"};
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: ${({isUser:e})=>e?"#64FFDA":"#E6F1FF"};
  font-size: 0.95rem;
  line-height: 1.5;
`,g8=p.div`
  display: flex;
  gap: 4px;
  padding: 12px 18px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 20px;
  width: fit-content;
  margin-left: 10px;
`,Sl=p(k.div)`
  width: 8px;
  height: 8px;
  background: #64FFDA;
  border-radius: 50%;
`,y8=p.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background: rgba(17, 34, 64, 0.5);
  border-top: 2px solid rgba(100, 255, 218, 0.2);
`,x8=p(k.button)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`,v8=p.div`
  padding: 15px;
  background: rgba(17, 34, 64, 0.5);
  border-top: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  gap: 10px;
`,b8=p.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: #E6F1FF;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: rgba(230, 241, 255, 0.5);
  }
`,w8=p(k.button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  border: 2px solid rgba(100, 255, 218, 0.3);
  color: #64FFDA;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.3), rgba(79, 209, 197, 0.3));
    transform: scale(1.1) rotate(5deg);
  }

  &:active {
    transform: scale(0.95) rotate(-5deg);
  }
`,S8=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(""),[i,o]=S.useState([{id:1,text:"Hi! I'm your AI learning coach. How can I help you today?",isUser:!1}]),[s,a]=S.useState(!1),c=S.useRef(null),u=["Help me study","Show my progress","Set a goal","Practice questions","Need motivation"],d=()=>{var x;(x=c.current)==null||x.scrollIntoView({behavior:"smooth"})};S.useEffect(()=>{d()},[i]);const f=()=>{n.trim()&&(o(x=>[...x,{id:Date.now(),text:n,isUser:!0}]),r(""),a(!0),setTimeout(()=>{o(x=>[...x,{id:Date.now(),text:"I'm analyzing your question. Let me help you with that!",isUser:!1}]),a(!1)},1500))},h=x=>{o(w=>[...w,{id:Date.now(),text:x,isUser:!0}]),a(!0),setTimeout(()=>{o(w=>[...w,{id:Date.now(),text:"Great choice! Let's work on that together.",isUser:!1}]),a(!1)},1500)};return l.jsxs(i8,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[l.jsxs(o8,{onClick:()=>t(!e),children:[l.jsxs(s8,{children:[l.jsx(a8,{whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},children:"🤖"}),l.jsxs(l8,{children:[l.jsxs(c8,{children:["AI Learning Coach",l.jsx(u8,{children:"Certified"})]}),l.jsx(d8,{children:"Online & Ready to Help"})]})]}),l.jsx(p8,{whileHover:{scale:1.1},whileTap:{scale:.9},children:e?"▼":"▲"})]}),l.jsx(jt,{children:e&&l.jsxs(f8,{initial:{height:0},animate:{height:500},exit:{height:0},transition:{duration:.3},children:[l.jsxs(h8,{children:[i.map(x=>l.jsx(m8,{isUser:x.isUser,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:x.text},x.id)),s&&l.jsxs(g8,{children:[l.jsx(Sl,{animate:{y:[0,-5,0]},transition:{duration:.5,repeat:1/0}}),l.jsx(Sl,{animate:{y:[0,-5,0]},transition:{duration:.5,repeat:1/0,delay:.2}}),l.jsx(Sl,{animate:{y:[0,-5,0]},transition:{duration:.5,repeat:1/0,delay:.4}})]}),l.jsx("div",{ref:c})]}),l.jsx(y8,{children:u.map(x=>l.jsx(x8,{onClick:()=>h(x),whileHover:{scale:1.05},whileTap:{scale:.95},children:x},x))}),l.jsxs(v8,{children:[l.jsx(b8,{value:n,onChange:x=>r(x.target.value),placeholder:"Type your message...",onKeyPress:x=>x.key==="Enter"&&f()}),l.jsx(w8,{onClick:f,whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9,rotate:-5},children:"➤"})]})]})})]})},k8=p.div`
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: ${({theme:e})=>e.spacing.xl};
  min-width: 280px;
`,$8=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.primary[700]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,j8=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,C8=p(k.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({unlocked:e,theme:t})=>e?t.colors.primary[50]:t.colors.neutral[100]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,F8=p.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({unlocked:e,theme:t})=>e?t.colors.primary[500]:t.colors.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({unlocked:e,theme:t})=>e?"white":t.colors.neutral[500]};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({unlocked:e})=>e?"none":"rgba(255, 255, 255, 0.5)"};
    backdrop-filter: blur(2px);
  }
`,A8=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.neutral[900]};
  text-align: center;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,D8=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,P8=p.div`
  width: 100%;
  height: 4px;
  background: ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  margin-top: ${({theme:e})=>e.spacing.xs};
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${({progress:e})=>`${e}%`};
    height: 100%;
    background: ${({theme:e})=>e.colors.primary[500]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    transition: width 0.3s ease;
  }
`,E8=[{id:1,name:"Early Bird",icon:"🌅",description:"Study for 5 days in a row",progress:80,unlocked:!1,reward:100},{id:2,name:"Knowledge Seeker",icon:"🔍",description:"Complete 10 topics",progress:60,unlocked:!1,reward:150},{id:3,name:"Focus Master",icon:"🎯",description:"Study for 2 hours straight",progress:100,unlocked:!0,reward:200},{id:4,name:"Quick Learner",icon:"⚡",description:"Master a topic in one day",progress:40,unlocked:!1,reward:250},{id:5,name:"Team Player",icon:"👥",description:"Help 5 other students",progress:20,unlocked:!1,reward:300},{id:6,name:"Perfect Score",icon:"💯",description:"Get 100% on a quiz",progress:0,unlocked:!1,reward:400}],Qh=()=>l.jsxs(k8,{children:[l.jsxs($8,{children:[l.jsx("span",{role:"img","aria-label":"trophy",children:"🏆"}),"Achievements"]}),l.jsx(j8,{children:E8.map(e=>l.jsxs(C8,{unlocked:e.unlocked,whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[l.jsx(F8,{unlocked:e.unlocked,children:e.icon}),l.jsx(A8,{children:e.name}),l.jsxs(D8,{children:[e.progress,"%",l.jsx(P8,{progress:e.progress})]})]},e.id))})]}),Tx=S.createContext(void 0),T8=({children:e})=>{const[t,n]=S.useState(()=>{const i=localStorage.getItem("userData");return i?JSON.parse(i):null}),r=i=>{n(i),localStorage.setItem("userData",JSON.stringify(i))};return l.jsx(Tx.Provider,{value:{userData:t,setUserData:r},children:e})},zx=()=>{const e=S.useContext(Tx);if(e===void 0)throw new Error("useUser must be used within a UserProvider");return e},z8=p(k.div)`
  background: rgba(17, 34, 64, 0.98);
  border-radius: 20px;
  border: 2px solid rgba(100, 255, 218, 0.3);
  padding: 20px;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
`,M8=p.h3`
  color: #64FFDA;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`,R8=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`,L8=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 15px;
  text-align: center;
`,B8=p.div`
  color: #64FFDA;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
`,I8=p.div`
  color: #8892B0;
  font-size: 0.9rem;
`,V8=p.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,N8=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,_8=p.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #64FFDA;
  flex-shrink: 0;
`,O8=p.div`
  flex: 1;
`,H8=p.div`
  color: #64FFDA;
  font-weight: 500;
  margin-bottom: 5px;
`,W8=p.div`
  color: #8892B0;
  font-size: 0.9rem;
  line-height: 1.5;
`,U8=p.div`
  height: 6px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
`,G8=p(k.div)`
  height: 100%;
  width: ${({percentage:e})=>e}%;
  background: linear-gradient(90deg, #64FFDA, #4FD1C5);
  border-radius: 3px;
`,Zh=()=>{const e=[{value:"85%",label:"Learning Efficiency"},{value:"92%",label:"Concept Mastery"},{value:"78%",label:"Practice Score"},{value:"15h",label:"Study Time"}],t=[{icon:"🎯",title:"Learning Pattern Detected",description:"You learn best in the morning. Consider scheduling important topics during this time."},{icon:"📈",title:"Performance Trend",description:"Your understanding of Mathematics has improved by 25% this week."},{icon:"💡",title:"Recommended Focus",description:"Physics concepts need more practice. Try solving more problems in this area."}];return l.jsxs(z8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[l.jsxs(M8,{children:[l.jsx("span",{children:"🤖"}),"AI Learning Analytics"]}),l.jsx(R8,{children:e.map((n,r)=>l.jsxs(L8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:r*.1},whileHover:{scale:1.02},children:[l.jsx(B8,{children:n.value}),l.jsx(I8,{children:n.label}),l.jsx(U8,{children:l.jsx(G8,{percentage:parseInt(n.value),initial:{width:0},animate:{width:`${parseInt(n.value)}%`},transition:{duration:1,delay:r*.1}})})]},n.label))}),l.jsx(V8,{children:t.map((n,r)=>l.jsxs(N8,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:r*.1},whileHover:{scale:1.02},children:[l.jsx(_8,{children:n.icon}),l.jsxs(O8,{children:[l.jsx(H8,{children:n.title}),l.jsx(W8,{children:n.description})]})]},n.title))})]})},Y8=p(k.div)`
  background: rgba(17, 34, 64, 0.98);
  border-radius: 20px;
  border: 2px solid rgba(100, 255, 218, 0.3);
  padding: 20px;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
`,K8=p.h3`
  color: #64FFDA;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`,X8=p.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,q8=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Q8=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Z8=p.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #64FFDA;
`,J8=p.div`
  flex: 1;
`,eC=p.div`
  color: #64FFDA;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 4px;
`,tC=p.div`
  color: #8892B0;
  font-size: 0.9rem;
`,nC=p.div`
  height: 6px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 3px;
  overflow: hidden;
`,rC=p(k.div)`
  height: 100%;
  width: ${({percentage:e})=>e}%;
  background: linear-gradient(90deg, #64FFDA, #4FD1C5);
  border-radius: 3px;
`,iC=p.div`
  color: #8892B0;
  font-size: 0.95rem;
  line-height: 1.6;
`,oC=p.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,sC=p(k.button)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`,Jh=()=>{const e=[{subject:"Mathematics",icon:"📐",progress:75,description:"Based on your learning patterns, you should focus on calculus concepts next. Your understanding of derivatives is strong, but integration needs more practice.",actions:["Start Practice","View Resources","Schedule Session"]},{subject:"Physics",icon:"⚛️",progress:60,description:"Your mechanics concepts are solid, but electromagnetism shows room for improvement. Consider reviewing Maxwell's equations and electromagnetic induction.",actions:["Review Concepts","Take Quiz","Watch Tutorial"]},{subject:"Computer Science",icon:"💻",progress:85,description:"Great progress in algorithms! Time to dive deeper into data structures. Focus on advanced tree structures and graph algorithms.",actions:["Start Learning","Practice Coding","Join Discussion"]}];return l.jsxs(Y8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[l.jsxs(K8,{children:[l.jsx("span",{children:"🎯"}),"AI Study Recommendations"]}),l.jsx(X8,{children:e.map((t,n)=>l.jsxs(q8,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:n*.1},whileHover:{scale:1.02},children:[l.jsxs(Q8,{children:[l.jsx(Z8,{children:t.icon}),l.jsxs(J8,{children:[l.jsx(eC,{children:t.subject}),l.jsxs(tC,{children:["Current Progress: ",t.progress,"%"]}),l.jsx(nC,{children:l.jsx(rC,{percentage:t.progress,initial:{width:0},animate:{width:`${t.progress}%`},transition:{duration:1,delay:n*.1}})})]})]}),l.jsx(iC,{children:t.description}),l.jsx(oC,{children:t.actions.map(r=>l.jsx(sC,{whileHover:{scale:1.05},whileTap:{scale:.95},children:r},r))})]},t.subject))})]})},aC=[{id:1,name:"Mathematics",icon:"📐",progress:0},{id:2,name:"Physics",icon:"⚛️",progress:0},{id:3,name:"Chemistry",icon:"🧪",progress:0},{id:4,name:"Biology",icon:"🧬",progress:0},{id:5,name:"Computer Science",icon:"💻",progress:0},{id:6,name:"English",icon:"📚",progress:0},{id:7,name:"History",icon:"🏛️",progress:0},{id:8,name:"Geography",icon:"🌍",progress:0}],e0=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({theme:e})=>e.spacing.xl};
  perspective: 2000px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`,lC=p(k.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  background: rgba(17, 34, 64, 0.6);
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateZ(30px) rotateX(5deg);
    box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`,cC=p(k.div)`
  h1 {
    font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
    background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);

    &:hover {
      transform: translateZ(40px) scale(1.05);
      text-shadow: 0 4px 20px rgba(100, 255, 218, 0.3);
    }
  }
  p {
    color: #8892B0;
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-family: ${({theme:e})=>e.typography.fontFamily.primary};
    transition: all 0.3s ease;

    &:hover {
      color: #64FFDA;
    }
  }
`,uC=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,t0=p(eo)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-3px) translateZ(20px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.15);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px) translateZ(10px);
  }
`,dC=p.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,_t=p(k.div)`
  background: rgba(17, 34, 64, 0.6);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(10px);
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #64FFDA, transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateZ(40px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }
`,Ot=p.h3`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,pC=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,fC=p(k.div)`
  background: rgba(17, 34, 64, 0.6);
  padding: ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateZ(30px) rotateX(5deg);
    background: rgba(17, 34, 64, 0.8);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.2);

    &::before {
      transform: translateX(100%);
    }

    &::after {
      opacity: 1;
    }
  }
`,hC=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #64FFDA;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
`,mC=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: #8892B0;
  font-family: ${({theme:e})=>e.typography.fontFamily.primary};
`,gC=p(k.div)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  flex-wrap: wrap;
`,yC=p(k.button)`
  background: rgba(17, 34, 64, 0.6);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: rgba(17, 34, 64, 0.8);
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-3px) translateZ(20px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.15);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px) translateZ(10px);
  }
`,xC=p(k.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`,vC=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  padding: ${({theme:e})=>e.spacing.xl};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  max-width: 600px;
  width: 90%;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,bC=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,wC=p.h2`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
`,SC=p.button`
  background: none;
  border: none;
  color: #8892B0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #64FFDA;
    transform: rotate(90deg);
  }
`;p(k.div)`
  position: fixed;
  top: 180px;
  right: 30px;
  z-index: 9999;
  transform-style: preserve-3d;
  pointer-events: none;

  * {
    pointer-events: auto;
  }
`;p(k.button)`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  border: 3px solid rgba(100, 255, 218, 0.4);
  color: #64FFDA;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(100, 255, 218, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: pulse 2s infinite;
  backdrop-filter: blur(5px);

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.3), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateZ(30px) scale(1.1);
    border-color: rgba(100, 255, 218, 0.6);
    box-shadow: 0 8px 30px rgba(100, 255, 218, 0.4);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateZ(15px) scale(0.95);
  }
`;p(k.div)`
  position: fixed;
  top: 260px;
  right: 30px;
  width: 360px;
  background: rgba(17, 34, 64, 0.98);
  border-radius: 25px;
  border: 3px solid rgba(100, 255, 218, 0.3);
  box-shadow: 0 15px 35px rgba(100, 255, 218, 0.2);
  overflow: hidden;
  transform-style: preserve-3d;
  backdrop-filter: blur(10px);
  z-index: 9999;
`;p.div`
  padding: 20px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(79, 209, 197, 0.15));
  border-bottom: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;p.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64FFDA, #4FD1C5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #0A192F;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.4);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }
`;p.div`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  text-shadow: 0 2px 10px rgba(100, 255, 218, 0.3);
`;p.div`
  padding: 20px;
  max-height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(100, 255, 218, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(100, 255, 218, 0.3);
    border-radius: 4px;
  }
`;p(k.div)`
  padding: 12px 18px;
  border-radius: 20px;
  max-width: 85%;
  align-self: ${({isUser:e})=>e?"flex-end":"flex-start"};
  background: ${({isUser:e})=>e?"linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2))":"rgba(17, 34, 64, 0.8)"};
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: ${({isUser:e})=>e?"#64FFDA":"#E6F1FF"};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateZ(15px);
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.15);
  }
`;p.div`
  padding: 20px;
  border-top: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(17, 34, 64, 0.5);
`;p.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: rgba(230, 241, 255, 0.5);
  }
`;p(k.button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  border: 2px solid rgba(100, 255, 218, 0.3);
  color: #64FFDA;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);

  &:hover {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.3), rgba(79, 209, 197, 0.3));
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.3);
  }

  &:active {
    transform: scale(0.95) rotate(-5deg);
  }
`;p(k.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  border: 2px solid rgba(100, 255, 218, 0.3);
  color: #64FFDA;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.2), transparent);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.5);
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;const kC=()=>{const{userData:e}=zx(),t=sa(),[n,r]=S.useState(!0),[i,o]=S.useState(null),[s,a]=S.useState(!1),[c,u]=S.useState([{text:"👋 Hey there! I'm your cute AI study buddy! Ready to help you learn? 💫",isUser:!1}]),[d,f]=S.useState("");if(S.useEffect(()=>{localStorage.getItem("userData")||t("/onboarding"),r(!1)},[t]),n)return l.jsx(e0,{children:l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"#64FFDA",fontSize:"1.5rem"},children:"Loading your dashboard..."})});if(!e)return null;aC.filter(m=>e.selectedCourses.includes(m.id));const h=m=>{o(m)},x=()=>{o(null)},w={hidden:{opacity:0,scale:.8,rotateX:-20},visible:{opacity:1,scale:1,rotateX:0,transition:{type:"spring",damping:25,stiffness:300}},exit:{opacity:0,scale:.8,rotateX:20,transition:{duration:.2}}},y=[{value:"42h",label:"Total Study Hours"},{value:"12",label:"Completed Courses"},{value:"85%",label:"Average Score"},{value:"7",label:"Current Streak"}],b=[{icon:"🎯",label:"Set Daily Goal"},{icon:"⏱️",label:"Start Timer"},{icon:"📝",label:"Take Notes"},{icon:"🎮",label:"Practice Quiz"}];return l.jsxs(e0,{children:[l.jsxs(lC,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[l.jsxs(cC,{children:[l.jsxs("h1",{children:["Welcome, ",e.name,"! 👋"]}),l.jsx("p",{children:"Let's continue your learning journey"})]}),l.jsxs(uC,{children:[l.jsx(t0,{onClick:()=>t("/courses"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Browse Courses"}),l.jsx(t0,{onClick:()=>t("/profile"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Profile"})]})]}),l.jsx(gC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:b.map((m,g)=>l.jsxs(yC,{whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:g*.1},children:[l.jsx("span",{children:m.icon}),m.label]},m.label))}),l.jsx(pC,{children:y.map((m,g)=>l.jsxs(fC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:g*.1},onClick:()=>h(m.label.toLowerCase()),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(hC,{children:m.value}),l.jsx(mC,{children:m.label})]},m.label))}),l.jsxs(dC,{children:[l.jsxs("div",{children:[l.jsxs(_t,{onClick:()=>h("analytics"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"📊 AI Learning Analytics"}),l.jsx(Zh,{})]}),l.jsxs(_t,{onClick:()=>h("recommendations"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"🎯 AI Study Recommendations"}),l.jsx(Jh,{})]}),l.jsxs(_t,{onClick:()=>h("progress"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"📈 Progress Overview"}),l.jsx(Vh,{})]}),l.jsxs(_t,{onClick:()=>h("topics"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"📚 Learning Topics"}),l.jsx(Ih,{})]})]}),l.jsxs("div",{children:[l.jsxs(_t,{onClick:()=>h("streak"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"🔥 Study Streak"}),l.jsx(Uh,{})]}),l.jsxs(_t,{onClick:()=>h("leaderboard"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"🏆 Leaderboard"}),l.jsx(Gh,{})]}),l.jsxs(_t,{onClick:()=>h("achievements"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"🏅 Achievements"}),l.jsx(Qh,{})]}),l.jsxs(_t,{onClick:()=>h("habits"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx(Ot,{children:"✅ Daily Habits"}),l.jsx(qh,{})]})]})]}),l.jsx(S8,{}),l.jsx(jt,{children:i&&l.jsx(xC,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:x,children:l.jsxs(vC,{variants:w,initial:"hidden",animate:"visible",exit:"exit",onClick:m=>m.stopPropagation(),children:[l.jsxs(bC,{children:[l.jsxs(wC,{children:[i.charAt(0).toUpperCase()+i.slice(1)," Details"]}),l.jsx(SC,{onClick:x,children:"×"})]}),i==="analytics"&&l.jsx(Zh,{}),i==="recommendations"&&l.jsx(Jh,{}),i==="progress"&&l.jsx(Vh,{}),i==="topics"&&l.jsx(Ih,{}),i==="streak"&&l.jsx(Uh,{}),i==="leaderboard"&&l.jsx(Gh,{}),i==="achievements"&&l.jsx(Qh,{}),i==="habits"&&l.jsx(qh,{})]})})})]})},$C=p.div`
  padding: ${({theme:e})=>e.spacing.xl};
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  color: #E6F1FF;
  text-align: center;
  margin: ${({theme:e})=>e.spacing.xl};
`,jC=p.h2`
  color: #64FFDA;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
`,CC=p.p`
  color: #8892B0;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
`,FC=p.button`
  background: #64FFDA;
  color: #0A192F;
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4CD8B2;
    transform: translateY(-2px);
  }
`;class AC extends S.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("Uncaught error:",t,n)}render(){var t;return this.state.hasError?l.jsxs($C,{children:[l.jsx(jC,{children:"Something went wrong"}),l.jsx(CC,{children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"}),l.jsx(FC,{onClick:()=>window.location.reload(),children:"Refresh Page"})]}):this.props.children}}const DC=p.div`
  min-height: 100vh;
  background: #0A192F;
  padding: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,PC=p(k.div)`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  z-index: 1;
  padding: ${({theme:e})=>e.spacing.xl};
  background: rgba(17, 34, 64, 0.5);
  backdrop-filter: blur(10px);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);

  h1 {
    font-size: 4.5rem;
    color: #E6F1FF;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
    background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
  }

  p {
    color: #8892B0;
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
`,EC=p(k.div)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  padding: ${({theme:e})=>e.spacing.lg};
  background: #112240;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`,TC=p(k.button)`
  background: ${e=>e.active?"rgba(100, 255, 218, 0.1)":"transparent"};
  color: ${e=>e.active?"#64FFDA":"#8892B0"};
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  border: 1px solid ${e=>e.active?"#64FFDA":"rgba(100, 255, 218, 0.1)"};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    color: #64FFDA;
    border-color: #64FFDA;
    transform: translateY(-2px);
  }
`,zC=p(k.div)`
  flex: 1;
  min-width: 300px;
  position: relative;

  input {
    width: 100%;
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
    padding-left: 3rem;
    background: rgba(17, 34, 64, 0.5);
    border: 1px solid rgba(100, 255, 218, 0.1);
    border-radius: ${({theme:e})=>e.borderRadius.full};
    color: #E6F1FF;
    font-size: ${({theme:e})=>e.typography.fontSize.md};

    &::placeholder {
      color: #8892B0;
    }

    &:focus {
      outline: none;
      border-color: #64FFDA;
      box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
    }
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #8892B0;
    font-size: 1.2rem;
  }
`,MC=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  position: relative;
  z-index: 1;
`,RC=p(k.div)`
  background: #112240;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateY(-10px);
    border-color: #64FFDA;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    .course-image {
      transform: scale(1.1);
    }

    .course-image::after {
      opacity: 1;
    }

    .course-content {
      transform: translateZ(20px);
    }

    .course-title {
      color: #64FFDA;
    }

    .course-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,LC=p.div`
  width: 100%;
  height: 200px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  transition: transform 0.5s ease;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`,BC=p.div`
  transition: transform 0.3s ease;
`,IC=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  transition: color 0.3s ease;
`,VC=p.p`
  color: #8892B0;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1.6;
`,NC=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.sm};
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #64FFDA;
`,_C=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  margin-top: ${({theme:e})=>e.spacing.md};
`,n0=p(k.button)`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.xs};

  &.primary {
    background: #64FFDA;
    color: #0A192F;

    &:hover {
      background: #4CD8B2;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: #64FFDA;
    border: 1px solid #64FFDA;

    &:hover {
      background: rgba(100, 255, 218, 0.1);
      transform: translateY(-2px);
    }
  }
`,OC=p.div`
  width: 100%;
  height: 4px;
  background: ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  margin-top: ${({theme:e})=>e.spacing.md};
  overflow: hidden;
`,HC=p(k.div)`
  height: 100%;
  background: ${({theme:e})=>e.colors.primary[500]};
  width: ${e=>e.progress}%;
  border-radius: ${({theme:e})=>e.borderRadius.full};
`,WC=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-top: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;
`,UC=p.span`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,GC=[{id:1,title:"Advanced Machine Learning",description:"Master the latest ML algorithms and techniques with hands-on projects.",image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",duration:"12 weeks",level:"Advanced",category:"Data Science",progress:80,tags:["Machine Learning","Data Science"]},{id:2,title:"Web Development Bootcamp",description:"Build modern web applications from scratch using the latest technologies.",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",duration:"16 weeks",level:"Intermediate",category:"Web Development",progress:70,tags:["Web Development","JavaScript"]},{id:3,title:"Data Science Fundamentals",description:"Learn data analysis, visualization, and statistical methods.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",duration:"10 weeks",level:"Beginner",category:"Data Science",progress:50,tags:["Data Analysis","Statistics"]},{id:4,title:"Mobile App Development",description:"Create powerful mobile applications for iOS and Android platforms.",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",duration:"14 weeks",level:"Intermediate",category:"Mobile Development",progress:60,tags:["Mobile Development","iOS","Android"]},{id:5,title:"Cloud Computing & DevOps",description:"Master cloud platforms and modern DevOps practices.",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",duration:"12 weeks",level:"Advanced",category:"Cloud & DevOps",progress:75,tags:["Cloud Computing","DevOps","AWS"]},{id:6,title:"UI/UX Design Masterclass",description:"Learn to create beautiful and user-friendly interfaces.",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",duration:"8 weeks",level:"Intermediate",category:"Design",progress:55,tags:["UI/UX Design","User Experience"]}],YC=["All","Data Science","Web Development","Mobile Development","Cloud & DevOps","Design"],KC=()=>{const[e,t]=S.useState("All"),[n,r]=S.useState(""),{scrollYProgress:i}=Ji(),o=GC.filter(s=>{const a=e==="All"||s.category===e,c=s.title.toLowerCase().includes(n.toLowerCase())||s.description.toLowerCase().includes(n.toLowerCase());return a&&c});return l.jsx(AC,{children:l.jsxs(DC,{children:[l.jsxs(PC,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[l.jsx("h1",{children:"Explore Our Courses"}),l.jsx("p",{children:"Discover a wide range of courses designed to help you master new skills and advance your career with our AI-powered learning platform."})]}),l.jsxs(EC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[l.jsxs(zC,{children:[l.jsx("span",{className:"search-icon",children:"🔍"}),l.jsx("input",{type:"text",placeholder:"Search courses...",value:n,onChange:s=>r(s.target.value)})]}),YC.map(s=>l.jsx(TC,{active:e===s,onClick:()=>t(s),whileHover:{scale:1.05},whileTap:{scale:.95},children:s},s))]}),l.jsx(MC,{children:o.map(s=>l.jsxs(RC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},whileHover:{scale:1.02},children:[l.jsx(LC,{className:"course-image",children:l.jsx("img",{src:s.image,alt:s.title})}),l.jsxs(BC,{className:"course-content",children:[l.jsx(IC,{className:"course-title",children:s.title}),l.jsx(VC,{children:s.description}),l.jsxs(NC,{children:[l.jsxs("span",{children:["Duration: ",s.duration]}),l.jsxs("span",{children:["Level: ",s.level]})]}),l.jsx(OC,{children:l.jsx(HC,{progress:s.progress||0,initial:{width:0},animate:{width:`${s.progress||0}%`},transition:{duration:1,ease:"easeOut"}})}),l.jsx(WC,{children:s.tags.map(a=>l.jsx(UC,{children:a},a))}),l.jsxs(_C,{className:"course-actions",children:[l.jsx(n0,{className:"primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:l.jsx("span",{children:"Continue Learning"})}),l.jsx(n0,{className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},children:l.jsx("span",{children:"View Details"})})]})]})]},s.id))})]})})},XC=p.div`
  min-height: 100vh;
  background: #0A192F;
  color: #E6F1FF;
`,qC=p(k.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
    filter: blur(4px);
  }
`,QC=p.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`,ZC=p(k.h1)`
  font-size: 4.5rem;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  line-height: 1.1;
  background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
`,JC=p(k.p)`
  font-size: 1.25rem;
  color: #8892B0;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,eF=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xxl};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,tF=p(k.div)`
  position: absolute;
  font-size: 2rem;
  pointer-events: none;
  z-index: 10;
`,nF=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(100, 255, 218, 0.1);

    &::before {
      opacity: 1;
    }

    .icon {
      transform: scale(1.1) rotate(5deg);
      color: #64FFDA;
    }

    h3 {
      color: #64FFDA;
    }

    .feature-image {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    .floating-emoji {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,rF=p(k.div)`
  width: 100%;
  height: 200px;
  background: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(17, 34, 64, 0.9));
  }
`,iF=p(k.div)`
  transform-style: preserve-3d;
  transform: translateZ(20px);
`,oF=p(k.div)`
  font-size: 3rem;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: #8892B0;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  transform: translateZ(30px);
`,sF=p(k.h3)`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: #E6F1FF;
  transition: color 0.3s ease;
  transform-style: preserve-3d;
  transform: translateZ(25px);
`,aF=p(k.p)`
  color: #8892B0;
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  transform-style: preserve-3d;
  transform: translateZ(20px);
`,lF=p(k.ul)`
  list-style: none;
  padding: 0;
  margin: ${({theme:e})=>e.spacing.md} 0;
  transform-style: preserve-3d;
  transform: translateZ(15px);

  li {
    color: #E6F1FF;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing.sm};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    transition: all 0.3s ease;

    &::before {
      content: '→';
      color: #64FFDA;
    }

    &:hover {
      transform: translateX(10px);
      color: #64FFDA;
    }
  }
`,cF=p(k.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.5rem 1rem;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: #64FFDA;
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(5px);
`,uF=p(k.div)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`,r0=p(k.div)`
  text-align: center;
  flex: 1;

  .value {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    color: #64FFDA;
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  }

  .label {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    color: #8892B0;
  }
`,dF=p(k.section)`
  padding: ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
    filter: blur(4px);
  }
`,pF=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,fF=p.div`
  h2 {
    color: #64FFDA;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
  }

  p {
    color: #8892B0;
    margin-bottom: ${({theme:e})=>e.spacing.xl};
    line-height: 1.6;
  }
`,hF=p(k.div)`
  background: rgba(10, 25, 47, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .demo-image {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 0.8;
    }
  }
`,mF=p.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  position: relative;
`,gF=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(100, 255, 218, 0.2) 0%, rgba(10, 25, 47, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`,yF=p(k.button)`
  padding: 1rem 2rem;
  background: #64FFDA;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #0A192F;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #53C4FF;
  }

  &:active {
    background: #4299E0;
  }
`,xF=[{id:1,icon:"🎯",title:"AI-Powered Learning Paths",description:"Experience truly personalized learning with our advanced AI algorithms",image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",badge:"New",stats:{users:"10K+",satisfaction:"98%"},benefits:["Dynamic content adaptation based on your performance","Personalized difficulty scaling","Custom learning pace optimization","Individual progress tracking"]},{id:2,icon:"📊",title:"Advanced Analytics",description:"Gain deep insights into your learning journey with comprehensive analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",benefits:["Real-time performance metrics","Learning pattern analysis","Progress visualization","Achievement tracking"]},{id:3,icon:"🤖",title:"Intelligent AI Tutors",description:"Get instant, personalized assistance from our AI tutors",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",benefits:["24/7 availability","Context-aware responses","Personalized feedback","Adaptive explanations"]},{id:4,icon:"🎮",title:"Interactive Learning",description:"Engage with hands-on exercises and real-world projects",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",benefits:["Interactive coding challenges","Real-world project scenarios","Live coding environments","Peer code reviews"]},{id:5,icon:"📱",title:"Cross-Platform Learning",description:"Learn seamlessly across all your devices",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",benefits:["Responsive design","Offline mode support","Cross-device sync","Mobile-optimized content"]},{id:6,icon:"👥",title:"Collaborative Learning",description:"Connect with peers and learn through collaboration",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",benefits:["Real-time collaboration","Group projects","Peer mentoring","Knowledge sharing"]}],vF=()=>{const{scrollYProgress:e}=Ji(),t=Px(e,[0,1],[0,-50]),[n,r]=S.useState(null),[i,o]=S.useState([]),s=(a,c)=>{const u={id:Date.now(),emoji:c,x:a.clientX,y:a.clientY};o(d=>[...d,u]),setTimeout(()=>{o(d=>d.filter(f=>f.id!==u.id))},2e3)};return l.jsxs(XC,{children:[l.jsx(qC,{style:{y:t},children:l.jsxs(QC,{children:[l.jsx(ZC,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:"Transform Your Learning Experience"}),l.jsx(JC,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Discover how our AI-powered platform revolutionizes learning with cutting-edge features designed to maximize your success and accelerate your growth."})]})}),l.jsx(eF,{children:xF.map((a,c)=>l.jsxs(nF,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:c*.1},viewport:{once:!0},whileHover:{scale:1.02},onHoverStart:()=>r(a.id),onHoverEnd:()=>r(null),onClick:u=>s(u,a.icon),children:[a.badge&&l.jsx(cF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3,delay:c*.1+.2},children:a.badge}),l.jsx(rF,{imageUrl:a.image,className:"feature-image",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:c*.1+.2},viewport:{once:!0}}),l.jsxs(iF,{children:[l.jsx(oF,{className:"icon",children:a.icon}),l.jsx(sF,{children:a.title}),l.jsx(aF,{children:a.description}),l.jsx(lF,{children:a.benefits.map((u,d)=>l.jsx(k.li,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.3,delay:d*.1},viewport:{once:!0},whileHover:{x:10,color:"#64FFDA"},children:u},d))}),a.stats&&l.jsxs(uF,{children:[l.jsxs(r0,{children:[l.jsx("div",{className:"value",children:a.stats.users}),l.jsx("div",{className:"label",children:"Active Users"})]}),l.jsxs(r0,{children:[l.jsx("div",{className:"value",children:a.stats.satisfaction}),l.jsx("div",{className:"label",children:"Satisfaction"})]})]})]})]},a.id))}),l.jsx(dF,{children:l.jsxs(pF,{children:[l.jsxs(fF,{children:[l.jsx(k.h2,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.5},viewport:{once:!0},children:"Experience the Future of Learning"}),l.jsx(k.p,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:"Try our interactive demo and see how our AI-powered platform adapts to your learning style. Get a personalized experience that helps you learn faster and more effectively."})]}),l.jsxs(hF,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.5},viewport:{once:!0},children:[l.jsx(mF,{className:"demo-image"}),l.jsx(gF,{className:"overlay",children:l.jsx(yF,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Launch Interactive Demo"})})]})]})}),l.jsx(jt,{children:i.map(a=>l.jsx(tF,{initial:{opacity:0,y:a.y,x:a.x},animate:{opacity:1,y:a.y-100},exit:{opacity:0},transition:{duration:2,ease:"easeOut"},children:a.emoji},a.id))})]})},bF=p.div`
  min-height: 100vh;
  background: #0A192F;
  color: #E6F1FF;
`,wF=p(k.section)`
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
    filter: blur(4px);
  }
`,SF=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xxl};
`,kF=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(100, 255, 218, 0.1);

    .resource-image {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    .resource-icon {
      transform: scale(1.1) rotate(5deg);
      color: #64FFDA;
    }
  }
`,$F=p(k.div)`
  width: 100%;
  height: 200px;
  background: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(17, 34, 64, 0.9));
  }
`,jF=p(k.div)`
  font-size: 2.5rem;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: #8892B0;
  transition: all 0.3s ease;
`,CF=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: #E6F1FF;
`,FF=p.p`
  color: #8892B0;
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,AF=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`,DF=p.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  padding: 0.25rem 0.75rem;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,PF=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,EF=[{id:1,title:"Interactive Coding Challenges",description:"Practice coding with real-world challenges and get instant feedback",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",icon:"💻",tag:"Coding",stats:{challenges:"100+",difficulty:"Beginner to Advanced"}},{id:2,title:"Video Tutorials",description:"High-quality video content from industry experts",image:"https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",icon:"🎥",tag:"Video",stats:{videos:"500+",duration:"5-30 min"}},{id:3,title:"E-Books & Documentation",description:"Comprehensive guides and documentation for all topics",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",icon:"📚",tag:"Reading",stats:{books:"50+",pages:"1000+"}},{id:4,title:"Community Projects",description:"Collaborate with other learners on real-world projects",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",icon:"👥",tag:"Community",stats:{projects:"200+",members:"1000+"}},{id:5,title:"Practice Exercises",description:"Reinforce your learning with hands-on exercises",image:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",icon:"✍️",tag:"Practice",stats:{exercises:"300+",categories:"10+"}},{id:6,title:"Webinars & Workshops",description:"Live sessions with industry experts and mentors",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",icon:"🎓",tag:"Live",stats:{sessions:"50+",experts:"20+"}}],TF=()=>{const{scrollYProgress:e}=Ji(),t=Px(e,[0,1],[0,-50]);return l.jsxs(bF,{children:[l.jsx(wF,{style:{y:t},children:l.jsxs(k.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},style:{maxWidth:"1200px",margin:"0 auto",textAlign:"center",position:"relative",zIndex:1},children:[l.jsx(k.h1,{style:{fontSize:"4rem",marginBottom:"1rem",background:"linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Learning Resources"}),l.jsx(k.p,{style:{fontSize:"1.25rem",color:"#8892B0",maxWidth:"800px",margin:"0 auto"},children:"Explore our comprehensive collection of learning resources designed to help you master new skills and advance your career."})]})}),l.jsx(SF,{children:EF.map((n,r)=>l.jsxs(kF,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:r*.1},viewport:{once:!0},children:[l.jsx($F,{imageUrl:n.image,className:"resource-image",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:r*.1+.2},viewport:{once:!0}}),l.jsx(jF,{className:"resource-icon",children:n.icon}),l.jsx(CF,{children:n.title}),l.jsx(FF,{children:n.description}),l.jsxs(AF,{children:[l.jsx(DF,{children:n.tag}),l.jsxs(PF,{children:[l.jsx("span",{children:n.stats.challenges||n.stats.videos||n.stats.books||n.stats.projects||n.stats.exercises||n.stats.sessions}),l.jsx("span",{children:n.stats.difficulty||n.stats.duration||n.stats.pages||n.stats.members||n.stats.categories||n.stats.experts})]})]})]},n.id))})]})},zF=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({theme:e})=>e.spacing.xxl};
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,MF=p(k.h1)`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxxl};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #64FFDA;
    margin: ${({theme:e})=>e.spacing.md} auto;
    border-radius: 2px;
  }
`,RF=p(k.div)`
  max-width: 600px;
  margin: 0 auto ${({theme:e})=>e.spacing.xxl};
  position: relative;
  z-index: 1;
`,LF=p.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
  background: rgba(17, 34, 64, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({theme:e})=>e.borderRadius.full};
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }

  &::placeholder {
    color: #8892B0;
  }
`,BF=p.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`,IF=p(k.button)`
  background: ${e=>e.active?"#64FFDA":"transparent"};
  color: ${e=>e.active?"#0A192F":"#E6F1FF"};
  border: 1px solid #64FFDA;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

  &:hover {
    background: ${e=>e.active?"#64FFDA":"rgba(100, 255, 218, 0.1)"};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.1);
  }
`,VF=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,NF=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(100, 255, 218, 0.1);

    .blog-image {
      transform: scale(1.1);
    }

    .read-more {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,_F=p.div`
  height: 250px;
  background-image: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.9) 100%);
  }
`,OF=p.div`
  padding: ${({theme:e})=>e.spacing.xl};
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
`,HF=p.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  padding: 0.25rem 0.75rem;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: inline-block;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,WF=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  line-height: 1.4;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,UF=p.p`
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  line-height: 1.6;
  flex: 1;
`,GF=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  margin-top: auto;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
`,YF=p(k.button)`
  background: transparent;
  color: #64FFDA;
  border: 1px solid #64FFDA;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  bottom: ${({theme:e})=>e.spacing.lg};
  right: ${({theme:e})=>e.spacing.xl};
  opacity: 0;
  transform: translateY(20px);
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  z-index: 2;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`,KF=p(k.div)`
  text-align: center;
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-top: ${({theme:e})=>e.spacing.xxl};
  grid-column: 1 / -1;
`,XF=[{id:1,title:"The Future of Adaptive Learning",description:"Explore how artificial intelligence is revolutionizing personalized education and creating more effective learning experiences.",imageUrl:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",date:"March 15, 2024",readTime:"5 min read",category:"Technology"},{id:2,title:"Best Practices for Online Learning",description:"Discover proven strategies and techniques to maximize your learning potential in virtual environments.",imageUrl:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",date:"March 12, 2024",readTime:"4 min read",category:"Education"},{id:3,title:"The Psychology of Learning",description:"Understanding how our brains process and retain information can help us become better learners.",imageUrl:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",date:"March 10, 2024",readTime:"6 min read",category:"Psychology"},{id:4,title:"Building Effective Study Habits",description:"Learn how to develop and maintain study habits that lead to academic success and personal growth.",imageUrl:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",date:"March 8, 2024",readTime:"5 min read",category:"Education"},{id:5,title:"The Role of AI in Education",description:"How artificial intelligence is transforming traditional education methods and creating new opportunities.",imageUrl:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",date:"March 5, 2024",readTime:"7 min read",category:"Technology"},{id:6,title:"Mindfulness in Learning",description:"Discover how mindfulness practices can enhance focus, retention, and overall learning effectiveness.",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",date:"March 3, 2024",readTime:"4 min read",category:"Psychology"}],qF=["All","Technology","Education","Psychology"],QF=()=>{const[e,t]=S.useState("All"),[n,r]=S.useState(""),i=XF.filter(o=>{const s=e==="All"||o.category===e,a=o.title.toLowerCase().includes(n.toLowerCase())||o.description.toLowerCase().includes(n.toLowerCase());return s&&a});return l.jsxs(zF,{children:[l.jsx(MF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Latest Articles"}),l.jsx(RF,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:l.jsx(LF,{type:"text",placeholder:"Search articles...",value:n,onChange:o=>r(o.target.value)})}),l.jsx(BF,{children:qF.map(o=>l.jsx(IF,{active:e===o,onClick:()=>t(o),whileHover:{scale:1.05},whileTap:{scale:.95},children:o},o))}),l.jsx(VF,{children:l.jsx(jt,{mode:"wait",children:i.length>0?i.map((o,s)=>l.jsxs(NF,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5,delay:s*.1},children:[l.jsx(_F,{imageUrl:o.imageUrl,className:"blog-image"}),l.jsxs(OF,{children:[l.jsx(HF,{children:o.category}),l.jsx(WF,{children:o.title}),l.jsx(UF,{children:o.description}),l.jsxs(GF,{children:[l.jsx("span",{children:o.date}),l.jsx("span",{children:o.readTime})]}),l.jsx(YF,{className:"read-more",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Read More"})]})]},o.id)):l.jsx(KF,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:"No articles found matching your criteria"})})})]})},ZF=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({theme:e})=>e.spacing.xxl};
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`,JF=p(k.h1)`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxxl};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #64FFDA;
    margin: ${({theme:e})=>e.spacing.md} auto;
    border-radius: 2px;
  }
`,eA=p(k.div)`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,tA=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xxl};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,nA=p(k.div)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #64FFDA;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`,rA=p.div`
  flex: 1;
`,iA=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
`,oA=p.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: #64FFDA;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,sA=p.p`
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: 1.8;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,aA=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,kl=p(k.a)`
  color: #64FFDA;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #4FD1C5;
    transform: translateY(-3px);
    background: rgba(100, 255, 218, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,lA=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xxl};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,Do=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #64FFDA;
    margin: ${({theme:e})=>e.spacing.md} auto;
    border-radius: 2px;
  }
`,cA=p.p`
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,uA=p(k.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
`,Po=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(100, 255, 218, 0.2);
  }
`,Eo=p.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxl};
  color: #64FFDA;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,To=p.div`
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,dA=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,pA=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
`,zo=p(k.div)`
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Wr=p.h3`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,Ur=p.p`
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: 1.6;
`,fA=p(k.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`,hA=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xxl};
  max-width: 600px;
  width: 90%;
  position: relative;
  border: 2px solid #64FFDA;
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.2);
  transform-style: preserve-3d;
  perspective: 1000px;
`,mA=p(k.button)`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  background: transparent;
  border: none;
  color: #64FFDA;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: rotate(90deg);
  }
`,gA=p.h3`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
`,yA=p.p`
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: 1.8;
  text-align: center;
`,xA=p(k.div)`
  width: 200px;
  height: 200px;
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    border: 3px solid #64FFDA;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`,vA=p(k.button)`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  border: 1px solid #64FFDA;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  margin-top: ${({theme:e})=>e.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }
`,i0=["Did you know? Our platform was inspired by Shinchan's curiosity and love for learning!","Just like Shinchan, we believe learning should be fun and exciting!","Our mascot, inspired by Shinchan, helps make learning more engaging!","We use AI to adapt to each student's learning style, just like how Shinchan adapts to new situations!","Our platform has helped over 50,000 students achieve their learning goals!","Shinchan's favorite subject is now our most popular course!","We have a special 'Shinchan's Learning Adventure' program for young learners!"],bA=[{title:"Best EdTech Platform 2025",description:"Recognized for innovative learning solutions",icon:"🏆"},{title:"Global Impact Award",description:"Reaching students in 50+ countries",icon:"🌍"},{title:"AI Innovation Prize",description:"Leading in adaptive learning technology",icon:"🤖"},{title:"Student Success Rate",description:"95% of students achieve their goals",icon:"📈"}],wA=[{name:"Shinchan's Learning Squad",role:"Educational Experts",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",description:"Our team of passionate educators, inspired by Shinchan's curiosity"},{name:"Tech Wizards",role:"Development Team",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",description:"Creating magical learning experiences with cutting-edge technology"}],SA=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xxl};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,kA=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-top: ${({theme:e})=>e.spacing.xl};
`,$A=p(k.div)`
  background: rgba(10, 25, 47, 0.6);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`,jA=p.div`
  font-size: 3rem;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,CA=p.h3`
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,FA=p.p`
  color: #8892B0;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
`,AA=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xxl};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,DA=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-top: ${({theme:e})=>e.spacing.xl};
`,PA=p(k.div)`
  background: rgba(10, 25, 47, 0.6);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`,EA=p(k.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  overflow: hidden;
  border: 3px solid #64FFDA;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`,TA=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(0),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},s={hidden:{opacity:0,scale:.8,rotateX:-30},visible:{opacity:1,scale:1,rotateX:0,transition:{type:"spring",damping:20,stiffness:300}},exit:{opacity:0,scale:.8,rotateX:30,transition:{duration:.3}}},a=()=>{r(Math.floor(Math.random()*i0.length)),t(!0)};return l.jsxs(ZF,{children:[l.jsx(JF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"About Us"}),l.jsxs(eA,{variants:i,initial:"hidden",animate:"visible",children:[l.jsxs(tA,{variants:o,children:[l.jsx(nA,{whileHover:{scale:1.05,rotateY:10,transition:{duration:.3}},children:l.jsx("img",{src:"https://i.pinimg.com/236x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg",alt:"Ayush Singh Tomar"})}),l.jsxs(rA,{children:[l.jsx(iA,{children:"Ayush Singh Tomar"}),l.jsx(oA,{children:"Founder & CEO"}),l.jsx(sA,{children:"A visionary leader and passionate educator with over 8 years of experience in educational technology. Ayush founded Adaptive Learning in 2025 with a mission to revolutionize personalized education through innovative technology and data-driven approaches. His expertise in AI and machine learning has been instrumental in creating our adaptive learning platform. Inspired by Shinchan's curiosity and love for learning, Ayush has created a platform that makes education fun, engaging, and effective for everyone."}),l.jsxs(aA,{children:[l.jsx(kl,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:10},children:l.jsx("i",{className:"fab fa-linkedin"})}),l.jsx(kl,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:-10},children:l.jsx("i",{className:"fab fa-twitter"})}),l.jsx(kl,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:10},children:l.jsx("i",{className:"fab fa-github"})})]}),l.jsx(vA,{onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Click for a Fun Fact! 🎉"})]})]}),l.jsxs(lA,{variants:o,children:[l.jsx(Do,{children:"Our Mission"}),l.jsx(cA,{children:"At Adaptive Learning, we're committed to transforming education through personalized learning experiences. Our mission is to make quality education accessible to everyone by leveraging cutting-edge technology and innovative teaching methods. We believe that every learner is unique, and our platform adapts to individual learning styles, pace, and goals. Inspired by Shinchan's curiosity and enthusiasm, we make learning fun and engaging while maintaining high educational standards."})]}),l.jsxs(SA,{variants:o,children:[l.jsx(Do,{children:"Our Achievements"}),l.jsx(kA,{children:bA.map((c,u)=>l.jsxs($A,{whileHover:{scale:1.05},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},children:[l.jsx(jA,{children:c.icon}),l.jsx(CA,{children:c.title}),l.jsx(FA,{children:c.description})]},c.title))})]}),l.jsxs(AA,{variants:o,children:[l.jsx(Do,{children:"Our Team"}),l.jsx(DA,{children:wA.map((c,u)=>l.jsxs(PA,{whileHover:{scale:1.05},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},children:[l.jsx(EA,{whileHover:{scale:1.1,rotateY:10,transition:{duration:.3}},children:l.jsx("img",{src:c.image,alt:c.name})}),l.jsx(Wr,{children:c.name}),l.jsx(Ur,{children:c.description})]},c.name))})]}),l.jsxs(uA,{variants:o,children:[l.jsxs(Po,{whileHover:{scale:1.05},children:[l.jsx(Eo,{children:"50K+"}),l.jsx(To,{children:"Active Students"})]}),l.jsxs(Po,{whileHover:{scale:1.05},children:[l.jsx(Eo,{children:"100+"}),l.jsx(To,{children:"Courses Available"})]}),l.jsxs(Po,{whileHover:{scale:1.05},children:[l.jsx(Eo,{children:"95%"}),l.jsx(To,{children:"Success Rate"})]}),l.jsxs(Po,{whileHover:{scale:1.05},children:[l.jsx(Eo,{children:"24/7"}),l.jsx(To,{children:"Support Available"})]})]}),l.jsxs(dA,{variants:o,children:[l.jsx(Do,{children:"Our Values"}),l.jsxs(pA,{children:[l.jsxs(zo,{whileHover:{scale:1.02},children:[l.jsx(Wr,{children:"Innovation"}),l.jsx(Ur,{children:"We constantly push the boundaries of educational technology to create better learning experiences."})]}),l.jsxs(zo,{whileHover:{scale:1.02},children:[l.jsx(Wr,{children:"Accessibility"}),l.jsx(Ur,{children:"We believe education should be accessible to everyone, regardless of their background or circumstances."})]}),l.jsxs(zo,{whileHover:{scale:1.02},children:[l.jsx(Wr,{children:"Excellence"}),l.jsx(Ur,{children:"We strive for excellence in everything we do, from course content to user experience."})]}),l.jsxs(zo,{whileHover:{scale:1.02},children:[l.jsx(Wr,{children:"Community"}),l.jsx(Ur,{children:"We foster a supportive learning community where students can grow and succeed together."})]})]})]}),l.jsx(jt,{children:e&&l.jsx(fA,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:l.jsxs(hA,{variants:s,initial:"hidden",animate:"visible",exit:"exit",children:[l.jsx(mA,{onClick:()=>t(!1),whileHover:{rotate:90},children:"×"}),l.jsx(xA,{initial:{rotateY:-30},animate:{rotateY:0},transition:{duration:.5},whileHover:{scale:1.1,rotateY:10,transition:{duration:.3}},children:l.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",alt:"Team Celebration"})}),l.jsx(gA,{children:"Fun Fact!"}),l.jsx(yA,{children:i0[n]})]})})})]})]})},zA=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({theme:e})=>e.spacing.xxl};
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
    transform: translateZ(-100px);
  }
`,MA=p(k.h1)`
  font-size: ${({theme:e})=>e.typography.fontSize.xxxxl};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #64FFDA;
    margin: ${({theme:e})=>e.spacing.md} auto;
    border-radius: 2px;
  }
`,RA=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xxl};
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,LA=p(k.form)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateZ(20px) rotateX(2deg) rotateY(2deg);
  }
`,Mo=p(k.div)`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Ro=p.label`
  display: block;
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,$l=p.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(10, 25, 47, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transition: all 0.3s ease;
  transform-style: preserve-3d;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
    transform: translateZ(10px);
  }
`,BA=p.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(10, 25, 47, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  transform-style: preserve-3d;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
    transform: translateZ(10px);
  }
`,IA=p(k.button)`
  background: #64FFDA;
  color: #0A192F;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: ${({theme:e})=>e.spacing.lg};
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.2);
    border-radius: ${({theme:e})=>e.borderRadius.md};
    transform: translateZ(-10px);
    transition: all 0.3s ease;
  }

  &:hover {
    background: #4FD1C5;
    transform: translateZ(20px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);

    &::before {
      transform: translateZ(-20px);
    }
  }

  &:active {
    transform: translateZ(10px);
  }
`,VA=p(k.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateZ(20px) rotateX(-2deg) rotateY(-2deg);
  }
`,NA=p.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xxl};
  color: #E6F1FF;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #64FFDA;
    margin: ${({theme:e})=>e.spacing.md} auto;
    border-radius: 2px;
  }
`,Lo=p(k.div)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(10, 25, 47, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.05);
    border-radius: ${({theme:e})=>e.borderRadius.md};
    transform: translateZ(-5px);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateZ(15px) translateX(10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateZ(-15px);
    }

    .info-icon {
      transform: translateZ(20px) rotateY(180deg);
    }
  }
`,Bo=p.div`
  font-size: 1.5rem;
  color: #64FFDA;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  class: info-icon;
`,Io=p.div`
  color: #8892B0;
`;p.div`
  color: #E6F1FF;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`;const _A=p.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.xl};
`,Vo=p(k.a)`
  color: #64FFDA;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.1);
    border-radius: 50%;
    transform: translateZ(-5px);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #4FD1C5;
    transform: translateZ(20px) rotateY(180deg);
    background: rgba(100, 255, 218, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateZ(-20px);
    }
  }
`,OA=p(k.div)`
  margin-top: ${({theme:e})=>e.spacing.xl};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  iframe {
    transform-style: preserve-3d;
    transition: all 0.3s ease;
  }
`,HA=()=>{const[e,t]=S.useState({name:"",email:"",subject:"",message:""}),n=a=>{a.preventDefault(),console.log("Form submitted:",e)},r=a=>{const{name:c,value:u}=a.target;t(d=>({...d,[c]:u}))},i={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},o={hidden:{opacity:0,x:50},visible:{opacity:1,x:0}},s={hidden:{opacity:0,x:-20},visible:a=>({opacity:1,x:0,transition:{delay:a*.1}})};return l.jsxs(zA,{children:[l.jsx(MA,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Contact Us"}),l.jsxs(RA,{children:[l.jsxs(LA,{variants:i,initial:"hidden",animate:"visible",transition:{duration:.5},onSubmit:n,children:[l.jsxs(Mo,{variants:i,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.1},children:[l.jsx(Ro,{htmlFor:"name",children:"Name"}),l.jsx($l,{type:"text",id:"name",name:"name",value:e.name,onChange:r,required:!0})]}),l.jsxs(Mo,{variants:i,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.2},children:[l.jsx(Ro,{htmlFor:"email",children:"Email"}),l.jsx($l,{type:"email",id:"email",name:"email",value:e.email,onChange:r,required:!0})]}),l.jsxs(Mo,{variants:i,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.3},children:[l.jsx(Ro,{htmlFor:"subject",children:"Subject"}),l.jsx($l,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:r,required:!0})]}),l.jsxs(Mo,{variants:i,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.4},children:[l.jsx(Ro,{htmlFor:"message",children:"Message"}),l.jsx(BA,{id:"message",name:"message",value:e.message,onChange:r,required:!0})]}),l.jsx(IA,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Send Message"})]}),l.jsxs(VA,{variants:o,initial:"hidden",animate:"visible",transition:{duration:.5},children:[l.jsx(NA,{children:"Get in Touch"}),l.jsxs(Lo,{variants:s,children:[l.jsx(Bo,{children:l.jsx("i",{className:"fas fa-map-marker-alt"})}),l.jsxs(Io,{children:["ABES Engineering College",l.jsx("br",{}),"19th KM Stone, NH-24, Ghaziabad",l.jsx("br",{}),"Uttar Pradesh, India - 201009"]})]}),l.jsxs(Lo,{variants:s,children:[l.jsx(Bo,{children:l.jsx("i",{className:"fas fa-phone"})}),l.jsxs(Io,{children:["+91 9876543210",l.jsx("br",{}),"+91 9876543211"]})]}),l.jsxs(Lo,{variants:s,children:[l.jsx(Bo,{children:l.jsx("i",{className:"fas fa-envelope"})}),l.jsxs(Io,{children:["info@adaptivelearning.com",l.jsx("br",{}),"support@adaptivelearning.com"]})]}),l.jsxs(Lo,{variants:s,children:[l.jsx(Bo,{children:l.jsx("i",{className:"fas fa-clock"})}),l.jsxs(Io,{children:["Monday - Friday: 9:00 AM - 6:00 PM",l.jsx("br",{}),"Saturday: 10:00 AM - 4:00 PM"]})]}),l.jsxs(_A,{children:[l.jsx(Vo,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:10},children:l.jsx("i",{className:"fab fa-linkedin"})}),l.jsx(Vo,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:-10},children:l.jsx("i",{className:"fab fa-twitter"})}),l.jsx(Vo,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:10},children:l.jsx("i",{className:"fab fa-facebook"})}),l.jsx(Vo,{href:"#",target:"_blank",whileHover:{scale:1.1,rotate:-10},children:l.jsx("i",{className:"fab fa-instagram"})})]}),l.jsx(OA,{variants:s,children:l.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8766503781724!2d77.4932!3d28.6698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",width:"100%",height:"300",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]})]})},WA=p.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({theme:e})=>e.spacing.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`,UA=p(k.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: 25px;
  border: 2px solid rgba(100, 255, 218, 0.2);
  padding: ${({theme:e})=>e.spacing.xl};
  width: 100%;
  max-width: 800px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);
  transform-style: preserve-3d;
`,GA=p.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  position: relative;
  padding: 0 ${({theme:e})=>e.spacing.md};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-50%);
    z-index: 1;
  }
`,YA=p.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({active:e,completed:t})=>t?"linear-gradient(135deg, #64FFDA, #4FD1C5)":e?"rgba(100, 255, 218, 0.2)":"rgba(17, 34, 64, 0.8)"};
  border: 2px solid
    ${({active:e,completed:t})=>t?"rgba(100, 255, 218, 0.5)":e?"rgba(100, 255, 218, 0.3)":"rgba(100, 255, 218, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({active:e,completed:t})=>t?"#0A192F":e?"#64FFDA":"#8892B0"};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
  }
`,No=p(k.div)`
  margin-top: ${({theme:e})=>e.spacing.xl};
`,Ie=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Ee=p.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,o0=p.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
`,_o=p.select`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  option {
    background: #112240;
    color: #E6F1FF;
  }
`,KA=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,XA=p(k.div)`
  background: ${({selected:e})=>e?"rgba(100, 255, 218, 0.1)":"rgba(17, 34, 64, 0.8)"};
  border: 2px solid
    ${({selected:e})=>e?"rgba(100, 255, 218, 0.4)":"rgba(100, 255, 218, 0.2)"};
  border-radius: 12px;
  padding: ${({theme:e})=>e.spacing.md};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.1);
  }
`,qA=p.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing.xl};
  gap: ${({theme:e})=>e.spacing.md};
`,s0=p(k.button)`
  padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.xl}`};
  background: ${({primary:e})=>e?"linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2))":"rgba(17, 34, 64, 0.8)"};
  border: 2px solid
    ${({primary:e})=>e?"rgba(100, 255, 218, 0.4)":"rgba(100, 255, 218, 0.2)"};
  border-radius: 12px;
  color: #64FFDA;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
    background: ${({primary:e})=>e?"linear-gradient(135deg, rgba(100, 255, 218, 0.3), rgba(79, 209, 197, 0.3))":"rgba(17, 34, 64, 0.9)"};
  }

  &:active {
    transform: translateY(0);
  }
`,Gr=p.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  color: #E6F1FF;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }
`,QA=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,ZA=p.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(17, 34, 64, 0.9);
    border-color: rgba(100, 255, 218, 0.3);
  }

  input[type="radio"] {
    accent-color: #64FFDA;
  }
`,JA=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,eD=p.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(17, 34, 64, 0.9);
    border-color: rgba(100, 255, 218, 0.3);
  }

  input[type="checkbox"] {
    accent-color: #64FFDA;
  }
`,qe=p.div`
  color: #FF6B6B;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,tD=[{id:1,name:"Mathematics",icon:"📐"},{id:2,name:"Physics",icon:"⚛️"},{id:3,name:"Chemistry",icon:"🧪"},{id:4,name:"Biology",icon:"🧬"},{id:5,name:"Computer Science",icon:"💻"},{id:6,name:"English",icon:"📚"},{id:7,name:"History",icon:"🏛️"},{id:8,name:"Geography",icon:"🌍"}],nD=[{id:1,name:"Visual Learner",description:"Learn best through images and spatial understanding"},{id:2,name:"Auditory Learner",description:"Learn best through listening and speaking"},{id:3,name:"Reading/Writing Learner",description:"Learn best through reading and writing"},{id:4,name:"Kinesthetic Learner",description:"Learn best through hands-on activities"}],rD=()=>{const e=sa(),{setUserData:t}=zx(),[n,r]=S.useState(1),[i,o]=S.useState({name:"",email:"",age:"",educationLevel:"",selectedCourses:[],learningStyle:"",studyGoals:"",studyHours:"",preferredLearningTime:[],learningEnvironment:"",previousExperience:"",motivation:"",challenges:"",supportNeeded:""}),[s,a]=S.useState({}),c=y=>{const b={};switch(y){case 1:i.name.trim()||(b.name="Name is required"),i.email.trim()?/\S+@\S+\.\S+/.test(i.email)||(b.email="Invalid email format"):b.email="Email is required",i.age||(b.age="Age is required"),i.educationLevel||(b.educationLevel="Education level is required");break;case 2:i.selectedCourses.length===0&&(b.selectedCourses="Please select at least one course");break;case 3:i.learningStyle||(b.learningStyle="Learning style is required"),i.studyHours||(b.studyHours="Study hours are required"),i.preferredLearningTime.length===0&&(b.preferredLearningTime="Please select preferred learning times"),i.learningEnvironment||(b.learningEnvironment="Learning environment is required");break;case 4:i.studyGoals||(b.studyGoals="Study goals are required"),i.previousExperience||(b.previousExperience="Previous experience is required"),i.motivation||(b.motivation="Motivation is required");break}return a(b),Object.keys(b).length===0},u=y=>{const{name:b,value:m}=y.target;o(g=>({...g,[b]:m})),s[b]&&a(g=>({...g,[b]:""}))},d=y=>{o(b=>({...b,selectedCourses:b.selectedCourses.includes(y)?b.selectedCourses.filter(m=>m!==y):[...b.selectedCourses,y]}))},f=(y,b)=>{o(m=>({...m,[y]:Array.isArray(m[y])?m[y].includes(b)?m[y].filter(g=>g!==b):[...m[y],b]:m[y]}))},h=()=>{c(n)&&(n<4?r(y=>y+1):(t(i),e("/dashboard")))},x=()=>{n>1&&r(y=>y-1)},w=()=>{switch(n){case 1:return l.jsxs(No,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your name?"}),l.jsx(o0,{type:"text",name:"name",value:i.name,onChange:u,placeholder:"Enter your name"}),s.name&&l.jsx(qe,{children:s.name})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your email?"}),l.jsx(o0,{type:"email",name:"email",value:i.email,onChange:u,placeholder:"Enter your email"}),s.email&&l.jsx(qe,{children:s.email})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your age?"}),l.jsxs(_o,{name:"age",value:i.age,onChange:u,children:[l.jsx("option",{value:"",children:"Select your age range"}),l.jsx("option",{value:"13-17",children:"13-17 years"}),l.jsx("option",{value:"18-24",children:"18-24 years"}),l.jsx("option",{value:"25-34",children:"25-34 years"}),l.jsx("option",{value:"35-44",children:"35-44 years"}),l.jsx("option",{value:"45+",children:"45+ years"})]}),s.age&&l.jsx(qe,{children:s.age})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your education level?"}),l.jsxs(_o,{name:"educationLevel",value:i.educationLevel,onChange:u,children:[l.jsx("option",{value:"",children:"Select your education level"}),l.jsx("option",{value:"high-school",children:"High School"}),l.jsx("option",{value:"undergraduate",children:"Undergraduate"}),l.jsx("option",{value:"graduate",children:"Graduate"}),l.jsx("option",{value:"postgraduate",children:"Postgraduate"}),l.jsx("option",{value:"other",children:"Other"})]}),s.educationLevel&&l.jsx(qe,{children:s.educationLevel})]})]});case 2:return l.jsxs(No,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[l.jsx(Ee,{children:"Select your courses"}),l.jsx(KA,{children:tD.map(y=>l.jsxs(XA,{selected:i.selectedCourses.includes(y.id),onClick:()=>d(y.id),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx("div",{style:{fontSize:"24px",marginBottom:"8px"},children:y.icon}),l.jsx("div",{children:y.name})]},y.id))}),s.selectedCourses&&l.jsx(qe,{children:s.selectedCourses})]});case 3:return l.jsxs(No,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your learning style?"}),l.jsx(QA,{children:nD.map(y=>l.jsxs(ZA,{children:[l.jsx("input",{type:"radio",name:"learningStyle",value:String(y.id),checked:i.learningStyle===String(y.id),onChange:u}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:"bold",color:"#64FFDA"},children:y.name}),l.jsx("div",{style:{fontSize:"0.9em",color:"#8892B0"},children:y.description})]})]},y.id))}),s.learningStyle&&l.jsx(qe,{children:s.learningStyle})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"How many hours can you study per day?"}),l.jsxs(_o,{name:"studyHours",value:i.studyHours,onChange:u,children:[l.jsx("option",{value:"",children:"Select study hours"}),l.jsx("option",{value:"1-2",children:"1-2 hours"}),l.jsx("option",{value:"2-4",children:"2-4 hours"}),l.jsx("option",{value:"4-6",children:"4-6 hours"}),l.jsx("option",{value:"6+",children:"6+ hours"})]}),s.studyHours&&l.jsx(qe,{children:s.studyHours})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"When do you prefer to study?"}),l.jsx(JA,{children:["Morning","Afternoon","Evening","Night"].map(y=>l.jsxs(eD,{children:[l.jsx("input",{type:"checkbox",checked:i.preferredLearningTime.includes(y),onChange:()=>f("preferredLearningTime",y)}),y]},y))}),s.preferredLearningTime&&l.jsx(qe,{children:s.preferredLearningTime})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your preferred learning environment?"}),l.jsxs(_o,{name:"learningEnvironment",value:i.learningEnvironment,onChange:u,children:[l.jsx("option",{value:"",children:"Select your preference"}),l.jsx("option",{value:"quiet",children:"Quiet and peaceful"}),l.jsx("option",{value:"background-noise",children:"With background noise"}),l.jsx("option",{value:"music",children:"With music"}),l.jsx("option",{value:"group",children:"Group study"}),l.jsx("option",{value:"flexible",children:"Flexible/Adaptable"})]}),s.learningEnvironment&&l.jsx(qe,{children:s.learningEnvironment})]})]});case 4:return l.jsxs(No,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What are your study goals?"}),l.jsx(Gr,{name:"studyGoals",value:i.studyGoals,onChange:u,placeholder:"e.g., Improve grades, Prepare for exams, Learn new skills"}),s.studyGoals&&l.jsx(qe,{children:s.studyGoals})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What's your previous experience with these subjects?"}),l.jsx(Gr,{name:"previousExperience",value:i.previousExperience,onChange:u,placeholder:"Tell us about your experience with the subjects you selected"}),s.previousExperience&&l.jsx(qe,{children:s.previousExperience})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What motivates you to learn?"}),l.jsx(Gr,{name:"motivation",value:i.motivation,onChange:u,placeholder:"Share what drives you to learn and improve"}),s.motivation&&l.jsx(qe,{children:s.motivation})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What challenges do you face in learning?"}),l.jsx(Gr,{name:"challenges",value:i.challenges,onChange:u,placeholder:"Tell us about any difficulties you encounter while studying"})]}),l.jsxs(Ie,{children:[l.jsx(Ee,{children:"What kind of support do you need?"}),l.jsx(Gr,{name:"supportNeeded",value:i.supportNeeded,onChange:u,placeholder:"Describe the type of support that would help you learn better"})]})]});default:return null}};return l.jsx(WA,{children:l.jsxs(UA,{children:[l.jsx(GA,{children:[1,2,3,4].map(y=>l.jsx(YA,{active:n===y,completed:n>y,children:y},y))}),l.jsx(jt,{mode:"wait",children:w()}),l.jsxs(qA,{children:[n>1&&l.jsx(s0,{onClick:x,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Back"}),l.jsx(s0,{primary:!0,onClick:h,whileHover:{scale:1.02},whileTap:{scale:.98},children:n===4?"Get Started":"Next"})]})]})})},iD=p(k.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0A192F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,oD=p(k.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,sD=p(k.div)`
  font-size: 3rem;
  color: #64FFDA;
  font-weight: bold;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  text-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 30px rgba(100, 255, 218, 0.7);
  }
`,aD=p(k.div)`
  color: #8892B0;
  font-size: 1.2rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.primary};
`,lD=p(k.div)`
  width: 200px;
  height: 4px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,cD=p(k.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #64FFDA, #4FD1C5);
  border-radius: 2px;
`,uD=p(k.div)`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`,dD=p(k.div)`
  width: 8px;
  height: 8px;
  background: #64FFDA;
  border-radius: 50%;
`,pD=({onComplete:e})=>l.jsx(iD,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:l.jsxs(oD,{children:[l.jsx(sD,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},whileHover:{scale:1.1},whileTap:{scale:.95},children:"Adaptive Learning"}),l.jsx(aD,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},children:"Loading your learning experience..."}),l.jsx(lD,{children:l.jsx(cD,{initial:{width:0},animate:{width:"100%"},transition:{duration:2,ease:"easeInOut"},onAnimationComplete:e})}),l.jsx(uD,{children:[0,1,2].map(t=>l.jsx(dD,{animate:{y:[0,-10,0],opacity:[.5,1,.5]},transition:{duration:1,repeat:1/0,delay:t*.2}},t))})]})}),fD=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(!1),[i,o]=S.useState(!1),s=Fr();S.useEffect(()=>{const c=setTimeout(()=>{t(!1),o(!0)},2500);return()=>clearTimeout(c)},[]);const a=()=>{r(!0),o(!1),setTimeout(()=>{r(!1),o(!0)},2500)};return l.jsx(M$,{onLogoClick:a,children:l.jsx(jt,{mode:"wait",children:e||n?l.jsx(pD,{onComplete:()=>{n&&(r(!1),o(!0))}},"loader"):i&&l.jsxs(Jb,{location:s,children:[l.jsx(ht,{path:"/",element:l.jsx(J4,{})}),l.jsx(ht,{path:"/onboarding",element:l.jsx(rD,{})}),l.jsx(ht,{path:"/dashboard",element:l.jsx(kC,{})}),l.jsx(ht,{path:"/courses",element:l.jsx(KC,{})}),l.jsx(ht,{path:"/features",element:l.jsx(vF,{})}),l.jsx(ht,{path:"/resources",element:l.jsx(TF,{})}),l.jsx(ht,{path:"/blog",element:l.jsx(QF,{})}),l.jsx(ht,{path:"/about",element:l.jsx(TA,{})}),l.jsx(ht,{path:"/contact",element:l.jsx(HA,{})})]},s.pathname)})})},hD=()=>l.jsxs(Xg,{theme:Ex,children:[l.jsx(sw,{styles:c$}),l.jsx(T8,{children:l.jsx(s2,{children:l.jsx(fD,{})})})]}),Dd=document.createElement("link");Dd.rel="stylesheet";Dd.href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap";document.head.appendChild(Dd);const Mx=document.getElementById("root");if(!Mx)throw new Error("Failed to find the root element");Cl.createRoot(Mx).render(l.jsx(y0.StrictMode,{children:l.jsx(hD,{})}));
