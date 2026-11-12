(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gu={exports:{}},Ra={},xu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function Qx(){if(Np)return ft;Np=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=S&&F[S]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function y(F,ie,Pe){this.props=F,this.context=ie,this.refs=E,this.updater=Pe||M}y.prototype.isReactComponent={},y.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function P(F,ie,Pe){this.props=F,this.context=ie,this.refs=E,this.updater=Pe||M}var D=P.prototype=new x;D.constructor=P,b(D,y.prototype),D.isPureReactComponent=!0;var A=Array.isArray,j=Object.prototype.hasOwnProperty,U={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function O(F,ie,Pe){var Z,ue={},Se=null,ye=null;if(ie!=null)for(Z in ie.ref!==void 0&&(ye=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)j.call(ie,Z)&&!k.hasOwnProperty(Z)&&(ue[Z]=ie[Z]);var Te=arguments.length-2;if(Te===1)ue.children=Pe;else if(1<Te){for(var ke=Array(Te),Qe=0;Qe<Te;Qe++)ke[Qe]=arguments[Qe+2];ue.children=ke}if(F&&F.defaultProps)for(Z in Te=F.defaultProps,Te)ue[Z]===void 0&&(ue[Z]=Te[Z]);return{$$typeof:s,type:F,key:Se,ref:ye,props:ue,_owner:U.current}}function N(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Pe){return ie[Pe]})}var ae=/\/+/g;function J(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):ie.toString(36)}function de(F,ie,Pe,Z,ue){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var ye=!1;if(F===null)ye=!0;else switch(Se){case"string":case"number":ye=!0;break;case"object":switch(F.$$typeof){case s:case e:ye=!0}}if(ye)return ye=F,ue=ue(ye),F=Z===""?"."+J(ye,0):Z,A(ue)?(Pe="",F!=null&&(Pe=F.replace(ae,"$&/")+"/"),de(ue,ie,Pe,"",function(Qe){return Qe})):ue!=null&&(C(ue)&&(ue=N(ue,Pe+(!ue.key||ye&&ye.key===ue.key?"":(""+ue.key).replace(ae,"$&/")+"/")+F)),ie.push(ue)),1;if(ye=0,Z=Z===""?".":Z+":",A(F))for(var Te=0;Te<F.length;Te++){Se=F[Te];var ke=Z+J(Se,Te);ye+=de(Se,ie,Pe,ke,ue)}else if(ke=_(F),typeof ke=="function")for(F=ke.call(F),Te=0;!(Se=F.next()).done;)Se=Se.value,ke=Z+J(Se,Te++),ye+=de(Se,ie,Pe,ke,ue);else if(Se==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(F,ie,Pe){if(F==null)return F;var Z=[],ue=0;return de(F,Z,"","",function(Se){return ie.call(Pe,Se,ue++)}),Z}function te(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Pe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Pe)},function(Pe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Pe)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},H={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(F,ie,Pe){he(F,function(){ie.apply(this,arguments)},Pe)},count:function(F){var ie=0;return he(F,function(){ie++}),ie},toArray:function(F){return he(F,function(ie){return ie})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ft.Component=y,ft.Fragment=n,ft.Profiler=o,ft.PureComponent=P,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=se,ft.cloneElement=function(F,ie,Pe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Z=b({},F.props),ue=F.key,Se=F.ref,ye=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,ye=U.current),ie.key!==void 0&&(ue=""+ie.key),F.type&&F.type.defaultProps)var Te=F.type.defaultProps;for(ke in ie)j.call(ie,ke)&&!k.hasOwnProperty(ke)&&(Z[ke]=ie[ke]===void 0&&Te!==void 0?Te[ke]:ie[ke])}var ke=arguments.length-2;if(ke===1)Z.children=Pe;else if(1<ke){Te=Array(ke);for(var Qe=0;Qe<ke;Qe++)Te[Qe]=arguments[Qe+2];Z.children=Te}return{$$typeof:s,type:F.type,key:ue,ref:Se,props:Z,_owner:ye}},ft.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},ft.createElement=O,ft.createFactory=function(F){var ie=O.bind(null,F);return ie.type=F,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(F){return{$$typeof:d,render:F}},ft.isValidElement=C,ft.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:te}},ft.memo=function(F,ie){return{$$typeof:g,type:F,compare:ie===void 0?null:ie}},ft.startTransition=function(F){var ie=H.transition;H.transition={};try{F()}finally{H.transition=ie}},ft.unstable_act=se,ft.useCallback=function(F,ie){return le.current.useCallback(F,ie)},ft.useContext=function(F){return le.current.useContext(F)},ft.useDebugValue=function(){},ft.useDeferredValue=function(F){return le.current.useDeferredValue(F)},ft.useEffect=function(F,ie){return le.current.useEffect(F,ie)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(F,ie,Pe){return le.current.useImperativeHandle(F,ie,Pe)},ft.useInsertionEffect=function(F,ie){return le.current.useInsertionEffect(F,ie)},ft.useLayoutEffect=function(F,ie){return le.current.useLayoutEffect(F,ie)},ft.useMemo=function(F,ie){return le.current.useMemo(F,ie)},ft.useReducer=function(F,ie,Pe){return le.current.useReducer(F,ie,Pe)},ft.useRef=function(F){return le.current.useRef(F)},ft.useState=function(F){return le.current.useState(F)},ft.useSyncExternalStore=function(F,ie,Pe){return le.current.useSyncExternalStore(F,ie,Pe)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var Pp;function Xd(){return Pp||(Pp=1,xu.exports=Qx()),xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Jx(){if(Dp)return Ra;Dp=1;var s=Xd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,g){var v,S={},_=null,M=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(S[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:d,key:_,ref:M,props:S,_owner:o.current}}return Ra.Fragment=n,Ra.jsx=u,Ra.jsxs=u,Ra}var Lp;function ev(){return Lp||(Lp=1,gu.exports=Jx()),gu.exports}var h=ev(),Ie=Xd();const tv=Km(Ie);var el={},vu={exports:{}},Rn={},yu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function nv(){return Ip||(Ip=1,(function(s){function e(H,ce){var se=H.length;H.push(ce);e:for(;0<se;){var F=se-1>>>1,ie=H[F];if(0<o(ie,ce))H[F]=ce,H[se]=ie,se=F;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ce=H[0],se=H.pop();if(se!==ce){H[0]=se;e:for(var F=0,ie=H.length,Pe=ie>>>1;F<Pe;){var Z=2*(F+1)-1,ue=H[Z],Se=Z+1,ye=H[Se];if(0>o(ue,se))Se<ie&&0>o(ye,ue)?(H[F]=ye,H[Se]=se,F=Se):(H[F]=ue,H[Z]=se,F=Z);else if(Se<ie&&0>o(ye,se))H[F]=ye,H[Se]=se,F=Se;else break e}}return ce}function o(H,ce){var se=H.sortIndex-ce.sortIndex;return se!==0?se:H.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],g=[],v=1,S=null,_=3,M=!1,b=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(H){for(var ce=n(g);ce!==null;){if(ce.callback===null)r(g);else if(ce.startTime<=H)r(g),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(g)}}function A(H){if(E=!1,D(H),!b)if(n(p)!==null)b=!0,te(j);else{var ce=n(g);ce!==null&&le(A,ce.startTime-H)}}function j(H,ce){b=!1,E&&(E=!1,x(O),O=-1),M=!0;var se=_;try{for(D(ce),S=n(p);S!==null&&(!(S.expirationTime>ce)||H&&!z());){var F=S.callback;if(typeof F=="function"){S.callback=null,_=S.priorityLevel;var ie=F(S.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?S.callback=ie:S===n(p)&&r(p),D(ce)}else r(p);S=n(p)}if(S!==null)var Pe=!0;else{var Z=n(g);Z!==null&&le(A,Z.startTime-ce),Pe=!1}return Pe}finally{S=null,_=se,M=!1}}var U=!1,k=null,O=-1,N=5,C=-1;function z(){return!(s.unstable_now()-C<N)}function ae(){if(k!==null){var H=s.unstable_now();C=H;var ce=!0;try{ce=k(!0,H)}finally{ce?J():(U=!1,k=null)}}else U=!1}var J;if(typeof P=="function")J=function(){P(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=ae,J=function(){he.postMessage(null)}}else J=function(){y(ae,0)};function te(H){k=H,U||(U=!0,J())}function le(H,ce){O=y(function(){H(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,te(j))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var se=_;_=ce;try{return H()}finally{_=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ce){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=_;_=H;try{return ce()}finally{_=se}},s.unstable_scheduleCallback=function(H,ce,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,H={id:v++,callback:ce,priorityLevel:H,startTime:se,expirationTime:ie,sortIndex:-1},se>F?(H.sortIndex=se,e(g,H),n(p)===null&&H===n(g)&&(E?(x(O),O=-1):E=!0,le(A,se-F))):(H.sortIndex=ie,e(p,H),b||M||(b=!0,te(j))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var ce=_;return function(){var se=_;_=ce;try{return H.apply(this,arguments)}finally{_=se}}}})(_u)),_u}var kp;function iv(){return kp||(kp=1,yu.exports=nv()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function rv(){if(Up)return Rn;Up=1;var s=Xd(),e=iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function _(t){return p.call(S,t)?!0:p.call(v,t)?!1:g.test(t)?S[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,a,l,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,P);y[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,P);y[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,P);y[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,f,l)&&(a=null),l||f===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),U=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),H=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Pe=!1;function Z(t,i){if(!t||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),m=l.stack.split(`
`),w=f.length-1,I=m.length-1;1<=w&&0<=I&&f[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(f[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||f[w]!==m[I]){var B=`
`+f[w].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=w&&0<=I);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case U:return"Portal";case N:return"Profiler";case O:return"StrictMode";case J:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){l=""+w,m.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=Qe(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function q(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mn(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){ht(t,i);var a=Te(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,a):i.hasOwnProperty("defaultValue")&&At(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function At(t,i,a){(i!=="number"||Lt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ye=Array.isArray;function L(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Q(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ye(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Te(a)}}function me(t,i){var a=Te(i.value),l=Te(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,oe=null,pe=null;function De(t){if(t=pa(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),Ce(t.stateNode,t.type,i))}}function Ne(t){oe?pe?pe.push(t):pe=[t]:oe=t}function st(){if(oe){var t=oe,i=pe;if(pe=oe=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function kt(t,i){return t(i)}function Xt(){}var _t=!1;function Mn(t,i,a){if(_t)return t(i,a);_t=!0;try{return kt(t,i,a)}finally{_t=!1,(oe!==null||pe!==null)&&(Xt(),st())}}function gn(t,i){var a=t.stateNode;if(a===null)return null;var l=mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var ts=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{ts=!1}function Mi(t,i,a,l,f,m,w,I,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(ve){this.onError(ve)}}var wi=!1,br=null,Tr=!1,Xi=null,Ya={onError:function(t){wi=!0,br=t}};function ns(t,i,a,l,f,m,w,I,B){wi=!1,br=null,Mi.apply(Ya,arguments)}function $a(t,i,a,l,f,m,w,I,B){if(ns.apply(this,arguments),wi){if(wi){var ee=br;wi=!1,br=null}else throw Error(n(198));Tr||(Tr=!0,Xi=ee)}}function di(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ka(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Za(t){if(di(t)!==t)throw Error(n(188))}function Ol(t){var i=t.alternate;if(!i){if(i=di(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return Za(f),t;if(m===l)return Za(f),i;m=m.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=m;else{for(var w=!1,I=f.child;I;){if(I===a){w=!0,a=f,l=m;break}if(I===l){w=!0,l=f,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,l=f;break}if(I===l){w=!0,l=m,a=f;break}I=I.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function R(t){return t=Ol(t),t!==null?W(t):null}function W(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=W(t);if(i!==null)return i;t=t.sibling}return null}var ne=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,X=e.unstable_shouldYield,be=e.unstable_requestPaint,we=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,bt=null,mt=null;function sn(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:wt,qe=Math.log,Kn=Math.LN2;function wt(t){return t>>>=0,t===0?32:31-(qe(t)/Kn|0)|0}var an=64,Zn=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,m=t.pingedLanes,w=a&268435455;if(w!==0){var I=w&~f;I!==0?l=qt(I):(m&=w,m!==0&&(l=qt(m)))}else w=a&~f,w!==0?l=qt(w):m!==0&&(l=qt(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-at(i),f=1<<a,l|=t[a],i&=~f;return l}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var w=31-at(m),I=1<<w,B=f[w];B===-1?((I&a)===0||(I&l)!==0)&&(f[w]=Dt(I,i)):B<=i&&(t.expiredLanes|=I),m&=~I}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xn(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function Hn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function wn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function Qa(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-at(a),m=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~m}}function zl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-at(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var Ct=0;function lf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var cf,Bl,uf,df,ff,Hl=!1,Ja=[],qi=null,Yi=null,$i=null,Qs=new Map,Js=new Map,Ki=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function ea(t,i,a,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=pa(i),i!==null&&Bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function S0(t,i,a,l,f){switch(i){case"focusin":return qi=ea(qi,t,i,a,l,f),!0;case"dragenter":return Yi=ea(Yi,t,i,a,l,f),!0;case"mouseover":return $i=ea($i,t,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return Qs.set(m,ea(Qs.get(m)||null,t,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Js.set(m,ea(Js.get(m)||null,t,i,a,l,f)),!0}return!1}function pf(t){var i=Ar(t.target);if(i!==null){var a=di(i);if(a!==null){if(i=a.tag,i===13){if(i=Ka(a),i!==null){t.blockedOn=i,ff(t.priority,function(){uf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Tt=l,a.target.dispatchEvent(l),Tt=null}else return i=pa(a),i!==null&&Bl(i),t.blockedOn=a,!1;i.shift()}return!0}function mf(t,i,a){eo(t)&&a.delete(i)}function M0(){Hl=!1,qi!==null&&eo(qi)&&(qi=null),Yi!==null&&eo(Yi)&&(Yi=null),$i!==null&&eo($i)&&($i=null),Qs.forEach(mf),Js.forEach(mf)}function ta(t,i){t.blockedOn===i&&(t.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,M0)))}function na(t){function i(f){return ta(f,t)}if(0<Ja.length){ta(Ja[0],t);for(var a=1;a<Ja.length;a++){var l=Ja[a];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&ta(qi,t),Yi!==null&&ta(Yi,t),$i!==null&&ta($i,t),Qs.forEach(i),Js.forEach(i),a=0;a<Ki.length;a++)l=Ki[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)pf(a),a.blockedOn===null&&Ki.shift()}var is=A.ReactCurrentBatchConfig,to=!0;function w0(t,i,a,l){var f=Ct,m=is.transition;is.transition=null;try{Ct=1,jl(t,i,a,l)}finally{Ct=f,is.transition=m}}function E0(t,i,a,l){var f=Ct,m=is.transition;is.transition=null;try{Ct=4,jl(t,i,a,l)}finally{Ct=f,is.transition=m}}function jl(t,i,a,l){if(to){var f=Vl(t,i,a,l);if(f===null)ac(t,i,l,no,a),hf(t,l);else if(S0(f,t,i,a,l))l.stopPropagation();else if(hf(t,l),i&4&&-1<_0.indexOf(t)){for(;f!==null;){var m=pa(f);if(m!==null&&cf(m),m=Vl(t,i,a,l),m===null&&ac(t,i,l,no,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else ac(t,i,l,null,a)}}var no=null;function Vl(t,i,a,l){if(no=null,t=G(l),t=Ar(t),t!==null)if(i=di(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ka(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function gf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case He:return 1;case tt:return 4;case it:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Zi=null,Gl=null,io=null;function xf(){if(io)return io;var t,i=Gl,a=i.length,l,f="value"in Zi?Zi.value:Zi.textContent,m=f.length;for(t=0;t<a&&i[t]===f[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===f[m-l];l++);return io=f.slice(t,1<l?1-l:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function vf(){return!1}function Ln(t){function i(a,l,f,m,w){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?so:vf,this.isPropagationStopped=vf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Ln(rs),ia=se({},rs,{view:0,detail:0}),b0=Ln(ia),Xl,ql,ra,ao=se({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Xl=t.screenX-ra.screenX,ql=t.screenY-ra.screenY):ql=Xl=0,ra=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),yf=Ln(ao),T0=se({},ao,{dataTransfer:0}),A0=Ln(T0),C0=se({},ia,{relatedTarget:0}),Yl=Ln(C0),R0=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Ln(R0),P0=se({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D0=Ln(P0),L0=se({},rs,{data:0}),_f=Ln(L0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=U0[t])?!!i[t]:!1}function $l(){return F0}var O0=se({},ia,{key:function(t){if(t.key){var i=I0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z0=Ln(O0),B0=se({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Ln(B0),H0=se({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),j0=Ln(H0),V0=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=Ln(V0),W0=se({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Ln(W0),q0=[9,13,27,32],Kl=d&&"CompositionEvent"in window,sa=null;d&&"documentMode"in document&&(sa=document.documentMode);var Y0=d&&"TextEvent"in window&&!sa,Mf=d&&(!Kl||sa&&8<sa&&11>=sa),wf=" ",Ef=!1;function bf(t,i){switch(t){case"keyup":return q0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function $0(t,i){switch(t){case"compositionend":return Tf(i);case"keypress":return i.which!==32?null:(Ef=!0,wf);case"textInput":return t=i.data,t===wf&&Ef?null:t;default:return null}}function K0(t,i){if(ss)return t==="compositionend"||!Kl&&bf(t,i)?(t=xf(),io=Gl=Zi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mf&&i.locale!=="ko"?null:i.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Z0[t.type]:i==="textarea"}function Cf(t,i,a,l){Ne(l),i=fo(i,"onChange"),0<i.length&&(a=new Wl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var aa=null,oa=null;function Q0(t){Xf(t,0)}function oo(t){var i=us(t);if(pt(i))return t}function J0(t,i){if(t==="change")return i}var Rf=!1;if(d){var Zl;if(d){var Ql="oninput"in document;if(!Ql){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Ql=typeof Nf.oninput=="function"}Zl=Ql}else Zl=!1;Rf=Zl&&(!document.documentMode||9<document.documentMode)}function Pf(){aa&&(aa.detachEvent("onpropertychange",Df),oa=aa=null)}function Df(t){if(t.propertyName==="value"&&oo(oa)){var i=[];Cf(i,oa,t,G(t)),Mn(Q0,i)}}function ex(t,i,a){t==="focusin"?(Pf(),aa=i,oa=a,aa.attachEvent("onpropertychange",Df)):t==="focusout"&&Pf()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(oa)}function nx(t,i){if(t==="click")return oo(i)}function ix(t,i){if(t==="input"||t==="change")return oo(i)}function rx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:rx;function la(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!Qn(t[f],i[f]))return!1}return!0}function Lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function If(t,i){var a=Lf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lf(a)}}function kf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?kf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Lt(t.document)}return i}function Jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function sx(t){var i=Uf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&kf(a.ownerDocument.documentElement,a)){if(l!==null&&Jl(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!t.extend&&m>l&&(f=l,l=m,m=f),f=If(a,m);var w=If(a,l);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ax=d&&"documentMode"in document&&11>=document.documentMode,as=null,ec=null,ca=null,tc=!1;function Ff(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tc||as==null||as!==Lt(l)||(l=as,"selectionStart"in l&&Jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ca&&la(ca,l)||(ca=l,l=fo(ec,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=as)))}function lo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var os={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},nc={},Of={};d&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function co(t){if(nc[t])return nc[t];if(!os[t])return t;var i=os[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Of)return nc[t]=i[a];return t}var zf=co("animationend"),Bf=co("animationiteration"),Hf=co("animationstart"),jf=co("transitionend"),Vf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Vf.set(t,i),c(i,[t])}for(var ic=0;ic<Gf.length;ic++){var rc=Gf[ic],ox=rc.toLowerCase(),lx=rc[0].toUpperCase()+rc.slice(1);Qi(ox,"on"+lx)}Qi(zf,"onAnimationEnd"),Qi(Bf,"onAnimationIteration"),Qi(Hf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(jf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Wf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,$a(l,i,void 0,t),t.currentTarget=null}function Xf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var w=l.length-1;0<=w;w--){var I=l[w],B=I.instance,ee=I.currentTarget;if(I=I.listener,B!==m&&f.isPropagationStopped())break e;Wf(f,I,ee),m=B}else for(w=0;w<l.length;w++){if(I=l[w],B=I.instance,ee=I.currentTarget,I=I.listener,B!==m&&f.isPropagationStopped())break e;Wf(f,I,ee),m=B}}}if(Tr)throw t=Xi,Tr=!1,Xi=null,t}function Ut(t,i){var a=i[fc];a===void 0&&(a=i[fc]=new Set);var l=t+"__bubble";a.has(l)||(qf(i,t,2,!1),a.add(l))}function sc(t,i,a){var l=0;i&&(l|=4),qf(a,t,l,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[uo]){t[uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||sc(a,!1,t),sc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,sc("selectionchange",!1,i))}}function qf(t,i,a,l){switch(gf(i)){case 1:var f=w0;break;case 4:f=E0;break;default:f=jl}a=f.bind(null,i,a,t),f=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function ac(t,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(w===4)for(w=l.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;w=w.return}for(;I!==null;){if(w=Ar(I),w===null)return;if(B=w.tag,B===5||B===6){l=m=w;continue e}I=I.parentNode}}l=l.return}Mn(function(){var ee=m,ve=G(a),_e=[];e:{var ge=Vf.get(t);if(ge!==void 0){var Le=Wl,Be=t;switch(t){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":Le=z0;break;case"focusin":Be="focus",Le=Yl;break;case"focusout":Be="blur",Le=Yl;break;case"beforeblur":case"afterblur":Le=Yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=j0;break;case zf:case Bf:case Hf:Le=N0;break;case jf:Le=G0;break;case"scroll":Le=b0;break;case"wheel":Le=X0;break;case"copy":case"cut":case"paste":Le=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Sf}var je=(i&4)!==0,Vt=!je&&t==="scroll",Y=je?ge!==null?ge+"Capture":null:ge;je=[];for(var V=ee,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=gn(V,Y),Ee!=null&&je.push(fa(V,Ee,K)))),Vt)break;V=V.return}0<je.length&&(ge=new Le(ge,Be,null,a,ve),_e.push({event:ge,listeners:je}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",ge&&a!==Tt&&(Be=a.relatedTarget||a.fromElement)&&(Ar(Be)||Be[bi]))break e;if((Le||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(Be=a.relatedTarget||a.toElement,Le=ee,Be=Be?Ar(Be):null,Be!==null&&(Vt=di(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Le=null,Be=ee),Le!==Be)){if(je=yf,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(je=Sf,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Vt=Le==null?ge:us(Le),K=Be==null?ge:us(Be),ge=new je(Ee,V+"leave",Le,a,ve),ge.target=Vt,ge.relatedTarget=K,Ee=null,Ar(ve)===ee&&(je=new je(Y,V+"enter",Be,a,ve),je.target=K,je.relatedTarget=Vt,Ee=je),Vt=Ee,Le&&Be)t:{for(je=Le,Y=Be,V=0,K=je;K;K=ls(K))V++;for(K=0,Ee=Y;Ee;Ee=ls(Ee))K++;for(;0<V-K;)je=ls(je),V--;for(;0<K-V;)Y=ls(Y),K--;for(;V--;){if(je===Y||Y!==null&&je===Y.alternate)break t;je=ls(je),Y=ls(Y)}je=null}else je=null;Le!==null&&Yf(_e,ge,Le,je,!1),Be!==null&&Vt!==null&&Yf(_e,Vt,Be,je,!0)}}e:{if(ge=ee?us(ee):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var Xe=J0;else if(Af(ge))if(Rf)Xe=ix;else{Xe=tx;var Ke=ex}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=nx);if(Xe&&(Xe=Xe(t,ee))){Cf(_e,Xe,a,ve);break e}Ke&&Ke(t,ge,ee),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch(Ke=ee?us(ee):window,t){case"focusin":(Af(Ke)||Ke.contentEditable==="true")&&(as=Ke,ec=ee,ca=null);break;case"focusout":ca=ec=as=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Ff(_e,a,ve);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":Ff(_e,a,ve)}var Ze;if(Kl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?bf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Mf&&a.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Ze=xf()):(Zi=ve,Gl="value"in Zi?Zi.value:Zi.textContent,ss=!0)),Ke=fo(ee,nt),0<Ke.length&&(nt=new _f(nt,t,null,a,ve),_e.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Tf(a),Ze!==null&&(nt.data=Ze)))),(Ze=Y0?$0(t,a):K0(t,a))&&(ee=fo(ee,"onBeforeInput"),0<ee.length&&(ve=new _f("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:ee}),ve.data=Ze))}Xf(_e,i)})}function fa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=gn(t,a),m!=null&&l.unshift(fa(t,m,f)),m=gn(t,i),m!=null&&l.push(fa(t,m,f))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yf(t,i,a,l,f){for(var m=i._reactName,w=[];a!==null&&a!==l;){var I=a,B=I.alternate,ee=I.stateNode;if(B!==null&&B===l)break;I.tag===5&&ee!==null&&(I=ee,f?(B=gn(a,m),B!=null&&w.unshift(fa(a,B,I))):f||(B=gn(a,m),B!=null&&w.push(fa(a,B,I)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(dx,"")}function ho(t,i,a){if(i=$f(i),$f(t)!==i&&a)throw Error(n(425))}function po(){}var oc=null,lc=null;function cc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(px)}:uc;function px(t){setTimeout(function(){throw t})}function dc(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),na(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);na(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),hi="__reactFiber$"+cs,ha="__reactProps$"+cs,bi="__reactContainer$"+cs,fc="__reactEvents$"+cs,mx="__reactListeners$"+cs,gx="__reactHandles$"+cs;function Ar(t){var i=t[hi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[bi]||a[hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Zf(t);t!==null;){if(a=t[hi])return a;t=Zf(t)}return i}t=a,a=t.parentNode}return null}function pa(t){return t=t[hi]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[ha]||null}var hc=[],ds=-1;function er(t){return{current:t}}function Ft(t){0>ds||(t.current=hc[ds],hc[ds]=null,ds--)}function It(t,i){ds++,hc[ds]=t.current,t.current=i}var tr={},on=er(tr),En=er(!1),Cr=tr;function fs(t,i){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function bn(t){return t=t.childContextTypes,t!=null}function go(){Ft(En),Ft(on)}function Qf(t,i,a){if(on.current!==tr)throw Error(n(168));It(on,i),It(En,a)}function Jf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ye(t)||"Unknown",f));return se({},a,l)}function xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=on.current,It(on,t),It(En,En.current),!0}function eh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Jf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ft(En),Ft(on),It(on,t)):Ft(En),It(En,a)}var Ti=null,vo=!1,pc=!1;function th(t){Ti===null?Ti=[t]:Ti.push(t)}function xx(t){vo=!0,th(t)}function nr(){if(!pc&&Ti!==null){pc=!0;var t=0,i=Ct;try{var a=Ti;for(Ct=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ti=null,vo=!1}catch(f){throw Ti!==null&&(Ti=Ti.slice(t+1)),ne(He,nr),f}finally{Ct=i,pc=!1}}return null}var hs=[],ps=0,yo=null,_o=0,jn=[],Vn=0,Rr=null,Ai=1,Ci="";function Nr(t,i){hs[ps++]=_o,hs[ps++]=yo,yo=t,_o=i}function nh(t,i,a){jn[Vn++]=Ai,jn[Vn++]=Ci,jn[Vn++]=Rr,Rr=t;var l=Ai;t=Ci;var f=32-at(l)-1;l&=~(1<<f),a+=1;var m=32-at(i)+f;if(30<m){var w=f-f%5;m=(l&(1<<w)-1).toString(32),l>>=w,f-=w,Ai=1<<32-at(i)+f|a<<f|l,Ci=m+t}else Ai=1<<m|a<<f|l,Ci=t}function mc(t){t.return!==null&&(Nr(t,1),nh(t,1,0))}function gc(t){for(;t===yo;)yo=hs[--ps],hs[ps]=null,_o=hs[--ps],hs[ps]=null;for(;t===Rr;)Rr=jn[--Vn],jn[Vn]=null,Ci=jn[--Vn],jn[Vn]=null,Ai=jn[--Vn],jn[Vn]=null}var In=null,kn=null,Ot=!1,Jn=null;function ih(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function rh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,kn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,In=t,kn=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(Ot){var i=kn;if(i){var a=i;if(!rh(t,i)){if(xc(t))throw Error(n(418));i=Ji(a.nextSibling);var l=In;i&&rh(t,i)?ih(l,a):(t.flags=t.flags&-4097|2,Ot=!1,In=t)}}else{if(xc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,In=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function So(t){if(t!==In)return!1;if(!Ot)return sh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cc(t.type,t.memoizedProps)),i&&(i=kn)){if(xc(t))throw ah(),Error(n(418));for(;i;)ih(t,i),i=Ji(i.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){kn=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=In?Ji(t.stateNode.nextSibling):null;return!0}function ah(){for(var t=kn;t;)t=Ji(t.nextSibling)}function ms(){kn=In=null,Ot=!1}function yc(t){Jn===null?Jn=[t]:Jn.push(t)}var vx=A.ReactCurrentBatchConfig;function ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=f.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function lh(t){function i(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function f(Y,V){return Y=ur(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function w(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,V,K,Ee){return V===null||V.tag!==6?(V=uu(K,Y.mode,Ee),V.return=Y,V):(V=f(V,K),V.return=Y,V)}function B(Y,V,K,Ee){var Xe=K.type;return Xe===k?ve(Y,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&oh(Xe)===V.type)?(Ee=f(V,K.props),Ee.ref=ma(Y,V,K),Ee.return=Y,Ee):(Ee=Xo(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ma(Y,V,K),Ee.return=Y,Ee)}function ee(Y,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=du(K,Y.mode,Ee),V.return=Y,V):(V=f(V,K.children||[]),V.return=Y,V)}function ve(Y,V,K,Ee,Xe){return V===null||V.tag!==7?(V=Or(K,Y.mode,Ee,Xe),V.return=Y,V):(V=f(V,K),V.return=Y,V)}function _e(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=uu(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case j:return K=Xo(V.type,V.key,V.props,null,Y.mode,K),K.ref=ma(Y,null,V),K.return=Y,K;case U:return V=du(V,Y.mode,K),V.return=Y,V;case te:var Ee=V._init;return _e(Y,Ee(V._payload),K)}if(Ye(V)||ce(V))return V=Or(V,Y.mode,K,null),V.return=Y,V;Mo(Y,V)}return null}function ge(Y,V,K,Ee){var Xe=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:I(Y,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return K.key===Xe?B(Y,V,K,Ee):null;case U:return K.key===Xe?ee(Y,V,K,Ee):null;case te:return Xe=K._init,ge(Y,V,Xe(K._payload),Ee)}if(Ye(K)||ce(K))return Xe!==null?null:ve(Y,V,K,Ee,null);Mo(Y,K)}return null}function Le(Y,V,K,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,I(V,Y,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case j:return Y=Y.get(Ee.key===null?K:Ee.key)||null,B(V,Y,Ee,Xe);case U:return Y=Y.get(Ee.key===null?K:Ee.key)||null,ee(V,Y,Ee,Xe);case te:var Ke=Ee._init;return Le(Y,V,K,Ke(Ee._payload),Xe)}if(Ye(Ee)||ce(Ee))return Y=Y.get(K)||null,ve(V,Y,Ee,Xe,null);Mo(V,Ee)}return null}function Be(Y,V,K,Ee){for(var Xe=null,Ke=null,Ze=V,nt=V=0,en=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(en=Ze,Ze=null):en=Ze.sibling;var Et=ge(Y,Ze,K[nt],Ee);if(Et===null){Ze===null&&(Ze=en);break}t&&Ze&&Et.alternate===null&&i(Y,Ze),V=m(Et,V,nt),Ke===null?Xe=Et:Ke.sibling=Et,Ke=Et,Ze=en}if(nt===K.length)return a(Y,Ze),Ot&&Nr(Y,nt),Xe;if(Ze===null){for(;nt<K.length;nt++)Ze=_e(Y,K[nt],Ee),Ze!==null&&(V=m(Ze,V,nt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&Nr(Y,nt),Xe}for(Ze=l(Y,Ze);nt<K.length;nt++)en=Le(Ze,Y,nt,K[nt],Ee),en!==null&&(t&&en.alternate!==null&&Ze.delete(en.key===null?nt:en.key),V=m(en,V,nt),Ke===null?Xe=en:Ke.sibling=en,Ke=en);return t&&Ze.forEach(function(dr){return i(Y,dr)}),Ot&&Nr(Y,nt),Xe}function je(Y,V,K,Ee){var Xe=ce(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ke=Xe=null,Ze=V,nt=V=0,en=null,Et=K.next();Ze!==null&&!Et.done;nt++,Et=K.next()){Ze.index>nt?(en=Ze,Ze=null):en=Ze.sibling;var dr=ge(Y,Ze,Et.value,Ee);if(dr===null){Ze===null&&(Ze=en);break}t&&Ze&&dr.alternate===null&&i(Y,Ze),V=m(dr,V,nt),Ke===null?Xe=dr:Ke.sibling=dr,Ke=dr,Ze=en}if(Et.done)return a(Y,Ze),Ot&&Nr(Y,nt),Xe;if(Ze===null){for(;!Et.done;nt++,Et=K.next())Et=_e(Y,Et.value,Ee),Et!==null&&(V=m(Et,V,nt),Ke===null?Xe=Et:Ke.sibling=Et,Ke=Et);return Ot&&Nr(Y,nt),Xe}for(Ze=l(Y,Ze);!Et.done;nt++,Et=K.next())Et=Le(Ze,Y,nt,Et.value,Ee),Et!==null&&(t&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),V=m(Et,V,nt),Ke===null?Xe=Et:Ke.sibling=Et,Ke=Et);return t&&Ze.forEach(function(Zx){return i(Y,Zx)}),Ot&&Nr(Y,nt),Xe}function Vt(Y,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===k&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case j:e:{for(var Xe=K.key,Ke=V;Ke!==null;){if(Ke.key===Xe){if(Xe=K.type,Xe===k){if(Ke.tag===7){a(Y,Ke.sibling),V=f(Ke,K.props.children),V.return=Y,Y=V;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&oh(Xe)===Ke.type){a(Y,Ke.sibling),V=f(Ke,K.props),V.ref=ma(Y,Ke,K),V.return=Y,Y=V;break e}a(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}K.type===k?(V=Or(K.props.children,Y.mode,Ee,K.key),V.return=Y,Y=V):(Ee=Xo(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ma(Y,V,K),Ee.return=Y,Y=Ee)}return w(Y);case U:e:{for(Ke=K.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),V=f(V,K.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else i(Y,V);V=V.sibling}V=du(K,Y.mode,Ee),V.return=Y,Y=V}return w(Y);case te:return Ke=K._init,Vt(Y,V,Ke(K._payload),Ee)}if(Ye(K))return Be(Y,V,K,Ee);if(ce(K))return je(Y,V,K,Ee);Mo(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),V=f(V,K),V.return=Y,Y=V):(a(Y,V),V=uu(K,Y.mode,Ee),V.return=Y,Y=V),w(Y)):a(Y,V)}return Vt}var gs=lh(!0),ch=lh(!1),wo=er(null),Eo=null,xs=null,_c=null;function Sc(){_c=xs=Eo=null}function Mc(t){var i=wo.current;Ft(wo),t._currentValue=i}function wc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function vs(t,i){Eo=t,_c=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Eo===null)throw Error(n(308));xs=t,Eo.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Pr=null;function Ec(t){Pr===null?Pr=[t]:Pr.push(t)}function uh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Ec(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ri(t,l)}function Ri(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ri(t,a)}return f=l.interleaved,f===null?(i.next=i,Ec(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ri(t,a)}function bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,zl(t,a)}}function fh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function To(t,i,a,l){var f=t.updateQueue;ir=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,ee=B.next;B.next=null,w===null?m=ee:w.next=ee,w=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==w&&(I===null?ve.firstBaseUpdate=ee:I.next=ee,ve.lastBaseUpdate=B))}if(m!==null){var _e=f.baseState;w=0,ve=ee=B=null,I=m;do{var ge=I.lane,Le=I.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=t,je=I;switch(ge=i,Le=a,je.tag){case 1:if(Be=je.payload,typeof Be=="function"){_e=Be.call(Le,_e,ge);break e}_e=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=je.payload,ge=typeof Be=="function"?Be.call(Le,_e,ge):Be,ge==null)break e;_e=se({},_e,ge);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[I]:ge.push(I))}else Le={eventTime:Le,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ee=ve=Le,B=_e):ve=ve.next=Le,w|=ge;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(ve===null&&(B=_e),f.baseState=B,f.firstBaseUpdate=ee,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Ir|=w,t.lanes=w,t.memoizedState=_e}}function hh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var ga={},pi=er(ga),xa=er(ga),va=er(ga);function Dr(t){if(t===ga)throw Error(n(174));return t}function Tc(t,i){switch(It(va,i),It(xa,t),It(pi,ga),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ft(pi),It(pi,i)}function ys(){Ft(pi),Ft(xa),Ft(va)}function ph(t){Dr(va.current);var i=Dr(pi.current),a=Ve(i,t.type);i!==a&&(It(xa,t),It(pi,a))}function Ac(t){xa.current===t&&(Ft(pi),Ft(xa))}var zt=er(0);function Ao(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cc=[];function Rc(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Co=A.ReactCurrentDispatcher,Nc=A.ReactCurrentBatchConfig,Lr=0,Bt=null,Yt=null,Qt=null,Ro=!1,ya=!1,_a=0,yx=0;function ln(){throw Error(n(321))}function Pc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Qn(t[a],i[a]))return!1;return!0}function Dc(t,i,a,l,f,m){if(Lr=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Co.current=t===null||t.memoizedState===null?wx:Ex,t=a(l,f),ya){m=0;do{if(ya=!1,_a=0,25<=m)throw Error(n(301));m+=1,Qt=Yt=null,i.updateQueue=null,Co.current=bx,t=a(l,f)}while(ya)}if(Co.current=Do,i=Yt!==null&&Yt.next!==null,Lr=0,Qt=Yt=Bt=null,Ro=!1,i)throw Error(n(300));return t}function Lc(){var t=_a!==0;return _a=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Bt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Wn(){if(Yt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Qt===null?Bt.memoizedState:Qt.next;if(i!==null)Qt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Qt===null?Bt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function Sa(t,i){return typeof i=="function"?i(t):i}function Ic(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Yt,f=l.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}l.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,l=l.baseState;var I=w=null,B=null,ee=m;do{var ve=ee.lane;if((Lr&ve)===ve)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var _e={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(I=B=_e,w=l):B=B.next=_e,Bt.lanes|=ve,Ir|=ve}ee=ee.next}while(ee!==null&&ee!==m);B===null?w=l:B.next=I,Qn(l,i.memoizedState)||(Tn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do m=f.lane,Bt.lanes|=m,Ir|=m,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function kc(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=t(m,w.action),w=w.next;while(w!==f);Qn(m,i.memoizedState)||(Tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function mh(){}function gh(t,i){var a=Bt,l=Wn(),f=i(),m=!Qn(l.memoizedState,f);if(m&&(l.memoizedState=f,Tn=!0),l=l.queue,Uc(yh.bind(null,a,l,t),[t]),l.getSnapshot!==i||m||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,Ma(9,vh.bind(null,a,l,f,i),void 0,null),Jt===null)throw Error(n(349));(Lr&30)!==0||xh(a,i,f)}return f}function xh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function vh(t,i,a,l){i.value=a,i.getSnapshot=l,_h(i)&&Sh(t)}function yh(t,i,a){return a(function(){_h(i)&&Sh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Qn(t,a)}catch{return!0}}function Sh(t){var i=Ri(t,1);i!==null&&ii(i,t,1,-1)}function Mh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i.queue=t,t=t.dispatch=Mx.bind(null,Bt,t),[i.memoizedState,t]}function Ma(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function wh(){return Wn().memoizedState}function No(t,i,a,l){var f=mi();Bt.flags|=t,f.memoizedState=Ma(1|i,a,void 0,l===void 0?null:l)}function Po(t,i,a,l){var f=Wn();l=l===void 0?null:l;var m=void 0;if(Yt!==null){var w=Yt.memoizedState;if(m=w.destroy,l!==null&&Pc(l,w.deps)){f.memoizedState=Ma(i,a,m,l);return}}Bt.flags|=t,f.memoizedState=Ma(1|i,a,m,l)}function Eh(t,i){return No(8390656,8,t,i)}function Uc(t,i){return Po(2048,8,t,i)}function bh(t,i){return Po(4,2,t,i)}function Th(t,i){return Po(4,4,t,i)}function Ah(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ch(t,i,a){return a=a!=null?a.concat([t]):null,Po(4,4,Ah.bind(null,i,t),a)}function Fc(){}function Rh(t,i){var a=Wn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Pc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Nh(t,i){var a=Wn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Pc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Ph(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=a):(Qn(a,i)||(a=xn(),Bt.lanes|=a,Ir|=a,t.baseState=!0),i)}function _x(t,i){var a=Ct;Ct=a!==0&&4>a?a:4,t(!0);var l=Nc.transition;Nc.transition={};try{t(!1),i()}finally{Ct=a,Nc.transition=l}}function Dh(){return Wn().memoizedState}function Sx(t,i,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Lh(t))Ih(i,a);else if(a=uh(t,i,a,l),a!==null){var f=yn();ii(a,t,l,f),kh(a,i,l)}}function Mx(t,i,a){var l=lr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lh(t))Ih(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,a);if(f.hasEagerState=!0,f.eagerState=I,Qn(I,w)){var B=i.interleaved;B===null?(f.next=f,Ec(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=uh(t,i,f,l),a!==null&&(f=yn(),ii(a,t,l,f),kh(a,i,l))}}function Lh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Ih(t,i){ya=Ro=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function kh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,zl(t,a)}}var Do={readContext:Gn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},wx={readContext:Gn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:Eh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,No(4194308,4,Ah.bind(null,i,t),a)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var a=mi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=mi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Sx.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:Mh,useDebugValue:Fc,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Mh(!1),i=t[0];return t=_x.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Bt,f=mi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),Jt===null)throw Error(n(349));(Lr&30)!==0||xh(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Eh(yh.bind(null,l,m,t),[t]),l.flags|=2048,Ma(9,vh.bind(null,l,m,a,i),void 0,null),a},useId:function(){var t=mi(),i=Jt.identifierPrefix;if(Ot){var a=Ci,l=Ai;a=(l&~(1<<32-at(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Ex={readContext:Gn,useCallback:Rh,useContext:Gn,useEffect:Uc,useImperativeHandle:Ch,useInsertionEffect:bh,useLayoutEffect:Th,useMemo:Nh,useReducer:Ic,useRef:wh,useState:function(){return Ic(Sa)},useDebugValue:Fc,useDeferredValue:function(t){var i=Wn();return Ph(i,Yt.memoizedState,t)},useTransition:function(){var t=Ic(Sa)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1},bx={readContext:Gn,useCallback:Rh,useContext:Gn,useEffect:Uc,useImperativeHandle:Ch,useInsertionEffect:bh,useLayoutEffect:Th,useMemo:Nh,useReducer:kc,useRef:wh,useState:function(){return kc(Sa)},useDebugValue:Fc,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:Ph(i,Yt.memoizedState,t)},useTransition:function(){var t=kc(Sa)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Oc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lo={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=yn(),f=lr(t),m=Ni(l,f);m.payload=i,a!=null&&(m.callback=a),i=rr(t,m,f),i!==null&&(ii(i,t,f,l),bo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=yn(),f=lr(t),m=Ni(l,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=rr(t,m,f),i!==null&&(ii(i,t,f,l),bo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=yn(),l=lr(t),f=Ni(a,l);f.tag=2,i!=null&&(f.callback=i),i=rr(t,f,l),i!==null&&(ii(i,t,l,a),bo(i,t,l))}};function Uh(t,i,a,l,f,m,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,w):i.prototype&&i.prototype.isPureReactComponent?!la(a,l)||!la(f,m):!0}function Fh(t,i,a){var l=!1,f=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=Gn(m):(f=bn(i)?Cr:on.current,l=i.contextTypes,m=(l=l!=null)?fs(t,f):tr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function Oh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Lo.enqueueReplaceState(i,i.state,null)}function zc(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},bc(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Gn(m):(m=bn(i)?Cr:on.current,f.context=fs(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Oc(t,i,m,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Lo.enqueueReplaceState(f,f.state,null),To(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var a="",l=i;do a+=ue(l),l=l.return;while(l);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function Bc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Hc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function zh(t,i,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Bo||(Bo=!0,nu=l),Hc(t,i)},a}function Bh(t,i,a){a=Ni(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Hc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Hc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Hh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Tx;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=Bx.bind(null,t,i,a),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Vh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ni(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Ax=A.ReactCurrentOwner,Tn=!1;function vn(t,i,a,l){i.child=t===null?ch(i,null,a,l):gs(i,t.child,a,l)}function Gh(t,i,a,l,f){a=a.render;var m=i.ref;return vs(i,f),l=Dc(t,i,a,l,m,f),a=Lc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(Ot&&a&&mc(i),i.flags|=1,vn(t,i,l,f),i.child)}function Wh(t,i,a,l,f){if(t===null){var m=a.type;return typeof m=="function"&&!cu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Xh(t,i,m,l,f)):(t=Xo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(w,l)&&t.ref===i.ref)return Pi(t,i,f)}return i.flags|=1,t=ur(m,l),t.ref=i.ref,t.return=i,i.child=t}function Xh(t,i,a,l,f){if(t!==null){var m=t.memoizedProps;if(la(m,l)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=l=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Pi(t,i,f)}return jc(t,i,a,l,f)}function qh(t,i,a){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ms,Un),Un|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(Ms,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,It(Ms,Un),Un|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,It(Ms,Un),Un|=l;return vn(t,i,f,a),i.child}function Yh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function jc(t,i,a,l,f){var m=bn(a)?Cr:on.current;return m=fs(i,m),vs(i,f),a=Dc(t,i,a,l,m,f),l=Lc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(Ot&&l&&mc(i),i.flags|=1,vn(t,i,a,f),i.child)}function $h(t,i,a,l,f){if(bn(a)){var m=!0;xo(i)}else m=!1;if(vs(i,f),i.stateNode===null)ko(t,i),Fh(i,a,l),zc(i,a,l,f),l=!0;else if(t===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var B=w.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Gn(ee):(ee=bn(a)?Cr:on.current,ee=fs(i,ee));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";_e||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==l||B!==ee)&&Oh(i,w,l,ee),ir=!1;var ge=i.memoizedState;w.state=ge,To(i,l,w,f),B=i.memoizedState,I!==l||ge!==B||En.current||ir?(typeof ve=="function"&&(Oc(i,a,ve,l),B=i.memoizedState),(I=ir||Uh(i,a,I,l,ge,B,ee))?(_e||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),w.props=l,w.state=B,w.context=ee,l=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,dh(t,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ei(i.type,I),w.props=ee,_e=i.pendingProps,ge=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Gn(B):(B=bn(a)?Cr:on.current,B=fs(i,B));var Le=a.getDerivedStateFromProps;(ve=typeof Le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==_e||ge!==B)&&Oh(i,w,l,B),ir=!1,ge=i.memoizedState,w.state=ge,To(i,l,w,f);var Be=i.memoizedState;I!==_e||ge!==Be||En.current||ir?(typeof Le=="function"&&(Oc(i,a,Le,l),Be=i.memoizedState),(ee=ir||Uh(i,a,ee,l,ge,Be,B)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Be,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Be,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),w.props=l,w.state=Be,w.context=B,l=ee):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Vc(t,i,a,l,m,f)}function Vc(t,i,a,l,f,m){Yh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return f&&eh(i,a,!1),Pi(t,i,m);l=i.stateNode,Ax.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=gs(i,t.child,null,m),i.child=gs(i,null,I,m)):vn(t,i,I,m),i.memoizedState=l.state,f&&eh(i,a,!0),i.child}function Kh(t){var i=t.stateNode;i.pendingContext?Qf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qf(t,i.context,!1),Tc(t,i.containerInfo)}function Zh(t,i,a,l,f){return ms(),yc(f),i.flags|=256,vn(t,i,a,l),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qh(t,i,a){var l=i.pendingProps,f=zt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),It(zt,f&1),t===null)return vc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,m?(l=i.mode,m=i.child,w={mode:"hidden",children:w},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=qo(w,l,0,null),t=Or(t,l,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=Wc(a),i.memoizedState=Gc,t):Xc(i,w));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Cx(t,i,w,l,I,f,a);if(m){m=l.fallback,w=i.mode,f=t.child,I=f.sibling;var B={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=ur(f,B),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=ur(I,m):(m=Or(m,w,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,w=t.child.memoizedState,w=w===null?Wc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=t.childLanes&~a,i.memoizedState=Gc,l}return m=t.child,t=m.sibling,l=ur(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Xc(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Io(t,i,a,l){return l!==null&&yc(l),gs(i,t.child,null,a),t=Xc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Cx(t,i,a,l,f,m,w){if(a)return i.flags&256?(i.flags&=-257,l=Bc(Error(n(422))),Io(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,f=i.mode,l=qo({mode:"visible",children:l.children},f,0,null),m=Or(m,f,w,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,w),i.child.memoizedState=Wc(w),i.memoizedState=Gc,m);if((i.mode&1)===0)return Io(t,i,w,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,m=Error(n(419)),l=Bc(m,l,void 0),Io(t,i,w,l)}if(I=(w&t.childLanes)!==0,Tn||I){if(l=Jt,l!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ri(t,f),ii(l,t,f,-1))}return lu(),l=Bc(Error(n(421))),Io(t,i,w,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Hx.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,kn=Ji(f.nextSibling),In=i,Ot=!0,Jn=null,t!==null&&(jn[Vn++]=Ai,jn[Vn++]=Ci,jn[Vn++]=Rr,Ai=t.id,Ci=t.overflow,Rr=i),i=Xc(i,l.children),i.flags|=4096,i)}function Jh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wc(t.return,i,a)}function qc(t,i,a,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function ep(t,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(vn(t,i,l.children,a),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,a,i);else if(t.tag===19)Jh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(It(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Ao(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),qc(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ao(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}qc(i,!0,a,null,m);break;case"together":qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Rx(t,i,a){switch(i.tag){case 3:Kh(i),ms();break;case 5:ph(i);break;case 1:bn(i.type)&&xo(i);break;case 4:Tc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;It(wo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Qh(t,i,a):(It(zt,zt.current&1),t=Pi(t,i,a),t!==null?t.sibling:null);It(zt,zt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ep(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,qh(t,i,a)}return Pi(t,i,a)}var tp,Yc,np,ip;tp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yc=function(){},np=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Dr(pi.current);var m=null;switch(a){case"input":f=q(t,f),l=q(t,l),m=[];break;case"select":f=se({},f,{value:void 0}),l=se({},l,{value:void 0}),m=[];break;case"textarea":f=T(t,f),l=T(t,l),m=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}dt(a,l);var w;a=null;for(ee in f)if(!l.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var I=f[ee];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in l){var B=l[ee];if(I=f!=null?f[ee]:void 0,l.hasOwnProperty(ee)&&B!==I&&(B!=null||I!=null))if(ee==="style")if(I){for(w in I)!I.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&I[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(m||(m=[]),m.push(ee,a)),a=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Ut("scroll",t),m||I===B||(m=[])):(m=m||[]).push(ee,B))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},ip=function(t,i,a,l){a!==l&&(i.flags|=4)};function wa(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Nx(t,i,a){var l=i.pendingProps;switch(gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return bn(i.type)&&go(),cn(i),null;case 3:return l=i.stateNode,ys(),Ft(En),Ft(on),Rc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(su(Jn),Jn=null))),Yc(t,i),cn(i),null;case 5:Ac(i);var f=Dr(va.current);if(a=i.type,t!==null&&i.stateNode!=null)np(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Dr(pi.current),So(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[hi]=i,l[ha]=m,t=(i.mode&1)!==0,a){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(f=0;f<ua.length;f++)Ut(ua[f],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":mn(l,m),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",l);break;case"textarea":Q(l,m),Ut("invalid",l)}dt(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?l.textContent!==I&&(m.suppressHydrationWarning!==!0&&ho(l.textContent,I,t),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ho(l.textContent,I,t),f=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ut("scroll",l)}switch(a){case"input":Rt(l),$e(l,m,!0);break;case"textarea":Rt(l),xe(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=po)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[hi]=i,t[ha]=l,tp(t,i,!1,!1),i.stateNode=t;e:{switch(w=rt(a,l),a){case"dialog":Ut("cancel",t),Ut("close",t),f=l;break;case"iframe":case"object":case"embed":Ut("load",t),f=l;break;case"video":case"audio":for(f=0;f<ua.length;f++)Ut(ua[f],t);f=l;break;case"source":Ut("error",t),f=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=l;break;case"details":Ut("toggle",t),f=l;break;case"input":mn(t,l),f=q(t,l),Ut("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=se({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Q(t,l),f=T(t,l),Ut("invalid",t);break;default:f=l}dt(a,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?et(t,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ue(t,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ct(t,B):typeof B=="number"&&ct(t,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Ut("scroll",t):B!=null&&D(t,m,B,w))}switch(a){case"input":Rt(t),$e(t,l,!1);break;case"textarea":Rt(t),xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?L(t,!!l.multiple,m,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Dr(va.current),Dr(pi.current),So(i)){if(l=i.stateNode,a=i.memoizedProps,l[hi]=i,(m=l.nodeValue!==a)&&(t=In,t!==null))switch(t.tag){case 3:ho(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(l.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return cn(i),null;case 13:if(Ft(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ah(),ms(),i.flags|=98560,m=!1;else if(m=So(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[hi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),m=!1}else Jn!==null&&(su(Jn),Jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?$t===0&&($t=3):lu())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ys(),Yc(t,i),t===null&&da(i.stateNode.containerInfo),cn(i),null;case 10:return Mc(i.type._context),cn(i),null;case 17:return bn(i.type)&&go(),cn(i),null;case 19:if(Ft(zt),m=i.memoizedState,m===null)return cn(i),null;if(l=(i.flags&128)!==0,w=m.rendering,w===null)if(l)wa(m,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ao(t),w!==null){for(i.flags|=128,wa(m,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,t=l,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,t=w.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return It(zt,zt.current&1|2),i.child}t=t.sibling}m.tail!==null&&we()>ws&&(i.flags|=128,l=!0,wa(m,!1),i.lanes=4194304)}else{if(!l)if(t=Ao(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ot)return cn(i),null}else 2*we()-m.renderingStartTime>ws&&a!==1073741824&&(i.flags|=128,l=!0,wa(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=we(),i.sibling=null,a=zt.current,It(zt,l?a&1|2:a&1),i):(cn(i),null);case 22:case 23:return ou(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Px(t,i){switch(gc(i),i.tag){case 1:return bn(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),Ft(En),Ft(on),Rc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ac(i),null;case 13:if(Ft(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(zt),null;case 4:return ys(),null;case 10:return Mc(i.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var Uo=!1,un=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ss(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){jt(t,i,l)}else a.current=null}function $c(t,i,a){try{a()}catch(l){jt(t,i,l)}}var rp=!1;function Lx(t,i){if(oc=to,t=Uf(),Jl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,B=-1,ee=0,ve=0,_e=t,ge=null;t:for(;;){for(var Le;_e!==a||f!==0&&_e.nodeType!==3||(I=w+f),_e!==m||l!==0&&_e.nodeType!==3||(B=w+l),_e.nodeType===3&&(w+=_e.nodeValue.length),(Le=_e.firstChild)!==null;)ge=_e,_e=Le;for(;;){if(_e===t)break t;if(ge===a&&++ee===f&&(I=w),ge===m&&++ve===l&&(B=w),(Le=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Le}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(lc={focusedElem:t,selectionRange:a},to=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var je=Be.memoizedProps,Vt=Be.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?je:ei(i.type,je),Vt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){jt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=rp,rp=!1,Be}function Ea(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&$c(i,a,m)}f=f.next}while(f!==l)}}function Fo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Kc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[ha],delete i[fc],delete i[mx],delete i[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ap(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(Zc(t,i,a),t=t.sibling;t!==null;)Zc(t,i,a),t=t.sibling}function Qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,a),t=t.sibling;t!==null;)Qc(t,i,a),t=t.sibling}var nn=null,ti=!1;function sr(t,i,a){for(a=a.child;a!==null;)lp(t,i,a),a=a.sibling}function lp(t,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 5:un||Ss(a,i);case 6:var l=nn,f=ti;nn=null,sr(t,i,a),nn=l,ti=f,nn!==null&&(ti?(t=nn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):nn.removeChild(a.stateNode));break;case 18:nn!==null&&(ti?(t=nn,a=a.stateNode,t.nodeType===8?dc(t.parentNode,a):t.nodeType===1&&dc(t,a),na(t)):dc(nn,a.stateNode));break;case 4:l=nn,f=ti,nn=a.stateNode.containerInfo,ti=!0,sr(t,i,a),nn=l,ti=f;break;case 0:case 11:case 14:case 15:if(!un&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&$c(a,i,w),f=f.next}while(f!==l)}sr(t,i,a);break;case 1:if(!un&&(Ss(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){jt(a,i,I)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(un=(l=un)||a.memoizedState!==null,sr(t,i,a),un=l):sr(t,i,a);break;default:sr(t,i,a)}}function cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Dx),i.forEach(function(l){var f=jx.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ni(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var m=t,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:nn=I.stateNode,ti=!1;break e;case 3:nn=I.stateNode.containerInfo,ti=!0;break e;case 4:nn=I.stateNode.containerInfo,ti=!0;break e}I=I.return}if(nn===null)throw Error(n(160));lp(m,w,f),nn=null,ti=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ee){jt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),gi(t),l&4){try{Ea(3,t,t.return),Fo(3,t)}catch(je){jt(t,t.return,je)}try{Ea(5,t,t.return)}catch(je){jt(t,t.return,je)}}break;case 1:ni(i,t),gi(t),l&512&&a!==null&&Ss(a,a.return);break;case 5:if(ni(i,t),gi(t),l&512&&a!==null&&Ss(a,a.return),t.flags&32){var f=t.stateNode;try{ct(f,"")}catch(je){jt(t,t.return,je)}}if(l&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,w=a!==null?a.memoizedProps:m,I=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ht(f,m),rt(I,w);var ee=rt(I,m);for(w=0;w<B.length;w+=2){var ve=B[w],_e=B[w+1];ve==="style"?et(f,_e):ve==="dangerouslySetInnerHTML"?Ue(f,_e):ve==="children"?ct(f,_e):D(f,ve,_e,ee)}switch(I){case"input":ut(f,m);break;case"textarea":me(f,m);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Le=m.value;Le!=null?L(f,!!m.multiple,Le,!1):ge!==!!m.multiple&&(m.defaultValue!=null?L(f,!!m.multiple,m.defaultValue,!0):L(f,!!m.multiple,m.multiple?[]:"",!1))}f[ha]=m}catch(je){jt(t,t.return,je)}}break;case 6:if(ni(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(je){jt(t,t.return,je)}}break;case 3:if(ni(i,t),gi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{na(i.containerInfo)}catch(je){jt(t,t.return,je)}break;case 4:ni(i,t),gi(t);break;case 13:ni(i,t),gi(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(tu=we())),l&4&&cp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(un=(ee=un)||ve,ni(i,t),un=ee):ni(i,t),gi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(_e=Fe=ve;Fe!==null;){switch(ge=Fe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ea(4,ge,ge.return);break;case 1:Ss(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(je){jt(l,a,je)}}break;case 5:Ss(ge,ge.return);break;case 22:if(ge.memoizedState!==null){hp(_e);continue}}Le!==null?(Le.return=ge,Fe=Le):hp(_e)}ve=ve.sibling}e:for(ve=null,_e=t;;){if(_e.tag===5){if(ve===null){ve=_e;try{f=_e.stateNode,ee?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=_e.stateNode,B=_e.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Je("display",w))}catch(je){jt(t,t.return,je)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=ee?"":_e.memoizedProps}catch(je){jt(t,t.return,je)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:ni(i,t),gi(t),l&4&&cp(t);break;case 21:break;default:ni(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(ap(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ct(f,""),l.flags&=-33);var m=op(t);Qc(t,m,f);break;case 3:case 4:var w=l.stateNode.containerInfo,I=op(t);Zc(t,I,w);break;default:throw Error(n(161))}}catch(B){jt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ix(t,i,a){Fe=t,dp(t)}function dp(t,i,a){for(var l=(t.mode&1)!==0;Fe!==null;){var f=Fe,m=f.child;if(f.tag===22&&l){var w=f.memoizedState!==null||Uo;if(!w){var I=f.alternate,B=I!==null&&I.memoizedState!==null||un;I=Uo;var ee=un;if(Uo=w,(un=B)&&!ee)for(Fe=f;Fe!==null;)w=Fe,B=w.child,w.tag===22&&w.memoizedState!==null?pp(f):B!==null?(B.return=w,Fe=B):pp(f);for(;m!==null;)Fe=m,dp(m),m=m.sibling;Fe=f,Uo=I,un=ee}fp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Fe=m):fp(t)}}function fp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Fo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ei(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&hh(i,m,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}hh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&na(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Kc(i)}catch(ge){jt(i,i.return,ge)}}if(i===t){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function hp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function pp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Fo(4,i)}catch(B){jt(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){jt(i,f,B)}}var m=i.return;try{Kc(i)}catch(B){jt(i,m,B)}break;case 5:var w=i.return;try{Kc(i)}catch(B){jt(i,w,B)}}}catch(B){jt(i,i.return,B)}if(i===t){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var kx=Math.ceil,Oo=A.ReactCurrentDispatcher,Jc=A.ReactCurrentOwner,Xn=A.ReactCurrentBatchConfig,St=0,Jt=null,Gt=null,rn=0,Un=0,Ms=er(0),$t=0,ba=null,Ir=0,zo=0,eu=0,Ta=null,An=null,tu=0,ws=1/0,Di=null,Bo=!1,nu=null,ar=null,Ho=!1,or=null,jo=0,Aa=0,iu=null,Vo=-1,Go=0;function yn(){return(St&6)!==0?we():Vo!==-1?Vo:Vo=we()}function lr(t){return(t.mode&1)===0?1:(St&2)!==0&&rn!==0?rn&-rn:vx.transition!==null?(Go===0&&(Go=xn()),Go):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:gf(t.type)),t)}function ii(t,i,a,l){if(50<Aa)throw Aa=0,iu=null,Error(n(185));wn(t,a,l),((St&2)===0||t!==Jt)&&(t===Jt&&((St&2)===0&&(zo|=a),$t===4&&cr(t,rn)),Cn(t,l),a===1&&St===0&&(i.mode&1)===0&&(ws=we()+500,vo&&nr()))}function Cn(t,i){var a=t.callbackNode;Bn(t,i);var l=fi(t,t===Jt?rn:0);if(l===0)a!==null&&re(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&re(a),i===1)t.tag===0?xx(gp.bind(null,t)):th(gp.bind(null,t)),hx(function(){(St&6)===0&&nr()}),a=null;else{switch(lf(l)){case 1:a=He;break;case 4:a=tt;break;case 16:a=it;break;case 536870912:a=gt;break;default:a=it}a=Ep(a,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function mp(t,i){if(Vo=-1,Go=0,(St&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Es()&&t.callbackNode!==a)return null;var l=fi(t,t===Jt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Wo(t,l);else{i=l;var f=St;St|=2;var m=vp();(Jt!==t||rn!==i)&&(Di=null,ws=we()+500,Ur(t,i));do try{Ox();break}catch(I){xp(t,I)}while(!0);Sc(),Oo.current=m,St=f,Gt!==null?i=0:(Jt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(f=Ei(t),f!==0&&(l=f,i=ru(t,f))),i===1)throw a=ba,Ur(t,0),cr(t,l),Cn(t,we()),a;if(i===6)cr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!Ux(f)&&(i=Wo(t,l),i===2&&(m=Ei(t),m!==0&&(l=m,i=ru(t,m))),i===1))throw a=ba,Ur(t,0),cr(t,l),Cn(t,we()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,An,Di);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=tu+500-we(),10<i)){if(fi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=uc(Fr.bind(null,t,An,Di),i);break}Fr(t,An,Di);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var w=31-at(l);m=1<<w,w=i[w],w>f&&(f=w),l&=~m}if(l=f,l=we()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*kx(l/1960))-l,10<l){t.timeoutHandle=uc(Fr.bind(null,t,An,Di),l);break}Fr(t,An,Di);break;case 5:Fr(t,An,Di);break;default:throw Error(n(329))}}}return Cn(t,we()),t.callbackNode===a?mp.bind(null,t):null}function ru(t,i){var a=Ta;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=An,An=a,i!==null&&su(i)),t}function su(t){An===null?An=t:An.push.apply(An,t)}function Ux(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!Qn(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~eu,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),l=1<<a;t[a]=-1,i&=~l}}function gp(t){if((St&6)!==0)throw Error(n(327));Es();var i=fi(t,0);if((i&1)===0)return Cn(t,we()),null;var a=Wo(t,i);if(t.tag!==0&&a===2){var l=Ei(t);l!==0&&(i=l,a=ru(t,l))}if(a===1)throw a=ba,Ur(t,0),cr(t,i),Cn(t,we()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,An,Di),Cn(t,we()),null}function au(t,i){var a=St;St|=1;try{return t(i)}finally{St=a,St===0&&(ws=we()+500,vo&&nr())}}function kr(t){or!==null&&or.tag===0&&(St&6)===0&&Es();var i=St;St|=1;var a=Xn.transition,l=Ct;try{if(Xn.transition=null,Ct=1,t)return t()}finally{Ct=l,Xn.transition=a,St=i,(St&6)===0&&nr()}}function ou(){Un=Ms.current,Ft(Ms)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,fx(a)),Gt!==null)for(a=Gt.return;a!==null;){var l=a;switch(gc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:ys(),Ft(En),Ft(on),Rc();break;case 5:Ac(l);break;case 4:ys();break;case 13:Ft(zt);break;case 19:Ft(zt);break;case 10:Mc(l.type._context);break;case 22:case 23:ou()}a=a.return}if(Jt=t,Gt=t=ur(t.current,null),rn=Un=i,$t=0,ba=null,eu=zo=Ir=0,An=Ta=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,l.next=w}a.pending=l}Pr=null}return t}function xp(t,i){do{var a=Gt;try{if(Sc(),Co.current=Do,Ro){for(var l=Bt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ro=!1}if(Lr=0,Qt=Yt=Bt=null,ya=!1,_a=0,Jc.current=null,a===null||a.return===null){$t=1,ba=i,Gt=null;break}e:{var m=t,w=a.return,I=a,B=i;if(i=rn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,ve=I,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Le=jh(w);if(Le!==null){Le.flags&=-257,Vh(Le,w,I,m,i),Le.mode&1&&Hh(m,ee,i),i=Le,B=ee;var Be=i.updateQueue;if(Be===null){var je=new Set;je.add(B),i.updateQueue=je}else Be.add(B);break e}else{if((i&1)===0){Hh(m,ee,i),lu();break e}B=Error(n(426))}}else if(Ot&&I.mode&1){var Vt=jh(w);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Vh(Vt,w,I,m,i),yc(_s(B,I));break e}}m=B=_s(B,I),$t!==4&&($t=2),Ta===null?Ta=[m]:Ta.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=zh(m,B,i);fh(m,Y);break e;case 1:I=B;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ar===null||!ar.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Bh(m,I,i);fh(m,Ee);break e}}m=m.return}while(m!==null)}_p(a)}catch(Xe){i=Xe,Gt===a&&a!==null&&(Gt=a=a.return);continue}break}while(!0)}function vp(){var t=Oo.current;return Oo.current=Do,t===null?Do:t}function lu(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Ir&268435455)===0&&(zo&268435455)===0||cr(Jt,rn)}function Wo(t,i){var a=St;St|=2;var l=vp();(Jt!==t||rn!==i)&&(Di=null,Ur(t,i));do try{Fx();break}catch(f){xp(t,f)}while(!0);if(Sc(),St=a,Oo.current=l,Gt!==null)throw Error(n(261));return Jt=null,rn=0,$t}function Fx(){for(;Gt!==null;)yp(Gt)}function Ox(){for(;Gt!==null&&!X();)yp(Gt)}function yp(t){var i=wp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?_p(t):Gt=i,Jc.current=null}function _p(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Nx(a,i,Un),a!==null){Gt=a;return}}else{if(a=Px(a,i),a!==null){a.flags&=32767,Gt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);$t===0&&($t=5)}function Fr(t,i,a){var l=Ct,f=Xn.transition;try{Xn.transition=null,Ct=1,zx(t,i,a,l)}finally{Xn.transition=f,Ct=l}return null}function zx(t,i,a,l){do Es();while(or!==null);if((St&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Qa(t,m),t===Jt&&(Gt=Jt=null,rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ho||(Ho=!0,Ep(it,function(){return Es(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Xn.transition,Xn.transition=null;var w=Ct;Ct=1;var I=St;St|=4,Jc.current=null,Lx(t,a),up(a,t),sx(lc),to=!!oc,lc=oc=null,t.current=a,Ix(a),be(),St=I,Ct=w,Xn.transition=m}else t.current=a;if(Ho&&(Ho=!1,or=t,jo=f),m=t.pendingLanes,m===0&&(ar=null),sn(a.stateNode),Cn(t,we()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Bo)throw Bo=!1,t=nu,nu=null,t;return(jo&1)!==0&&t.tag!==0&&Es(),m=t.pendingLanes,(m&1)!==0?t===iu?Aa++:(Aa=0,iu=t):Aa=0,nr(),null}function Es(){if(or!==null){var t=lf(jo),i=Xn.transition,a=Ct;try{if(Xn.transition=null,Ct=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,jo=0,(St&6)!==0)throw Error(n(331));var f=St;for(St|=4,Fe=t.current;Fe!==null;){var m=Fe,w=m.child;if((Fe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ee=I[B];for(Fe=ee;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Ea(8,ve,m)}var _e=ve.child;if(_e!==null)_e.return=ve,Fe=_e;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Le=ve.return;if(sp(ve),ve===ee){Fe=null;break}if(ge!==null){ge.return=Le,Fe=ge;break}Fe=Le}}}var Be=m.alternate;if(Be!==null){var je=Be.child;if(je!==null){Be.child=null;do{var Vt=je.sibling;je.sibling=null,je=Vt}while(je!==null)}}Fe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Fe=w;else e:for(;Fe!==null;){if(m=Fe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ea(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Fe=Y;break e}Fe=m.return}}var V=t.current;for(Fe=V;Fe!==null;){w=Fe;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Fe=K;else e:for(w=V;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Fo(9,I)}}catch(Xe){jt(I,I.return,Xe)}if(I===w){Fe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Fe=Ee;break e}Fe=I.return}}if(St=f,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(bt,t)}catch{}l=!0}return l}finally{Ct=a,Xn.transition=i}}return!1}function Sp(t,i,a){i=_s(a,i),i=zh(t,i,1),t=rr(t,i,1),i=yn(),t!==null&&(wn(t,1,i),Cn(t,i))}function jt(t,i,a){if(t.tag===3)Sp(t,t,a);else for(;i!==null;){if(i.tag===3){Sp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=_s(a,t),t=Bh(i,t,1),i=rr(i,t,1),t=yn(),i!==null&&(wn(i,1,t),Cn(i,t));break}}i=i.return}}function Bx(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&a,Jt===t&&(rn&a)===a&&($t===4||$t===3&&(rn&130023424)===rn&&500>we()-tu?Ur(t,0):eu|=a),Cn(t,i)}function Mp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zn,Zn<<=1,(Zn&130023424)===0&&(Zn=4194304)));var a=yn();t=Ri(t,i),t!==null&&(wn(t,i,a),Cn(t,a))}function Hx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Mp(t,a)}function jx(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Mp(t,a)}var wp;wp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)Tn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Tn=!1,Rx(t,i,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ot&&(i.flags&1048576)!==0&&nh(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(t,i),t=i.pendingProps;var f=fs(i,on.current);vs(i,a),f=Dc(null,i,l,t,f,a);var m=Lc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(l)?(m=!0,xo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bc(i),f.updater=Lo,i.stateNode=f,f._reactInternals=i,zc(i,l,t,a),i=Vc(null,i,l,!0,m,a)):(i.tag=0,Ot&&m&&mc(i),vn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=Gx(l),t=ei(l,t),f){case 0:i=jc(null,i,l,t,a);break e;case 1:i=$h(null,i,l,t,a);break e;case 11:i=Gh(null,i,l,t,a);break e;case 14:i=Wh(null,i,l,ei(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),jc(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),$h(t,i,l,f,a);case 3:e:{if(Kh(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,f=m.element,dh(t,i),To(i,l,null,a);var w=i.memoizedState;if(l=w.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=_s(Error(n(423)),i),i=Zh(t,i,l,a,f);break e}else if(l!==f){f=_s(Error(n(424)),i),i=Zh(t,i,l,a,f);break e}else for(kn=Ji(i.stateNode.containerInfo.firstChild),In=i,Ot=!0,Jn=null,a=ch(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),l===f){i=Pi(t,i,a);break e}vn(t,i,l,a)}i=i.child}return i;case 5:return ph(i),t===null&&vc(i),l=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,w=f.children,cc(l,f)?w=null:m!==null&&cc(l,m)&&(i.flags|=32),Yh(t,i),vn(t,i,w,a),i.child;case 6:return t===null&&vc(i),null;case 13:return Qh(t,i,a);case 4:return Tc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,a):vn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),Gh(t,i,l,f,a);case 7:return vn(t,i,i.pendingProps,a),i.child;case 8:return vn(t,i,i.pendingProps.children,a),i.child;case 12:return vn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,It(wo,l._currentValue),l._currentValue=w,m!==null)if(Qn(m.value,w)){if(m.children===f.children&&!En.current){i=Pi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var B=I.firstContext;B!==null;){if(B.context===l){if(m.tag===1){B=Ni(-1,a&-a),B.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ee.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),wc(m.return,a,i),I.lanes|=a;break}B=B.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(n(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),wc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}vn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,vs(i,a),f=Gn(f),l=l(f),i.flags|=1,vn(t,i,l,a),i.child;case 14:return l=i.type,f=ei(l,i.pendingProps),f=ei(l.type,f),Wh(t,i,l,f,a);case 15:return Xh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ei(l,f),ko(t,i),i.tag=1,bn(l)?(t=!0,xo(i)):t=!1,vs(i,a),Fh(i,l,f),zc(i,l,f,a),Vc(null,i,l,!0,t,a);case 19:return ep(t,i,a);case 22:return qh(t,i,a)}throw Error(n(156,i.tag))};function Ep(t,i){return ne(t,i)}function Vx(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,l){return new Vx(t,i,a,l)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gx(t){if(typeof t=="function")return cu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===he)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xo(t,i,a,l,f,m){var w=2;if(l=t,typeof t=="function")cu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case k:return Or(a.children,f,m,i);case O:w=8,f|=8;break;case N:return t=qn(12,a,i,f|2),t.elementType=N,t.lanes=m,t;case J:return t=qn(13,a,i,f),t.elementType=J,t.lanes=m,t;case de:return t=qn(19,a,i,f),t.elementType=de,t.lanes=m,t;case le:return qo(a,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case z:w=9;break e;case ae:w=11;break e;case he:w=14;break e;case te:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(w,a,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Or(t,i,a,l){return t=qn(7,t,l,i),t.lanes=a,t}function qo(t,i,a,l){return t=qn(22,t,l,i),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function uu(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function du(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Wx(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function fu(t,i,a,l,f,m,w,I,B){return t=new Wx(t,i,a,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=qn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(m),t}function Xx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function bp(t){if(!t)return tr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(bn(a))return Jf(t,a,i)}return i}function Tp(t,i,a,l,f,m,w,I,B){return t=fu(a,l,!0,t,f,m,w,I,B),t.context=bp(null),a=t.current,l=yn(),f=lr(a),m=Ni(l,f),m.callback=i??null,rr(a,m,f),t.current.lanes=f,wn(t,f,l),Cn(t,l),t}function Yo(t,i,a,l){var f=i.current,m=yn(),w=lr(f);return a=bp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ni(m,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(f,i,w),t!==null&&(ii(t,f,w,m),bo(t,f,w)),w}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ap(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function hu(t,i){Ap(t,i),(t=t.alternate)&&Ap(t,i)}function qx(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function pu(t){this._internalRoot=t}Ko.prototype.render=pu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Ko.prototype.unmount=pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kr(function(){Yo(null,t,null,null)}),i[bi]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=df();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&pf(t)}};function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function Yx(t,i,a,l,f){if(f){if(typeof l=="function"){var m=l;l=function(){var ee=$o(w);m.call(ee)}}var w=Tp(i,l,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=w,t[bi]=w.current,da(t.nodeType===8?t.parentNode:t),kr(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var ee=$o(B);I.call(ee)}}var B=fu(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=B,t[bi]=B.current,da(t.nodeType===8?t.parentNode:t),kr(function(){Yo(i,B,a,l)}),B}function Qo(t,i,a,l,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var I=f;f=function(){var B=$o(w);I.call(B)}}Yo(i,w,t,f)}else w=Yx(a,i,t,f,l);return $o(w)}cf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=qt(i.pendingLanes);a!==0&&(zl(i,a|1),Cn(i,we()),(St&6)===0&&(ws=we()+500,nr()))}break;case 13:kr(function(){var l=Ri(t,1);if(l!==null){var f=yn();ii(l,t,1,f)}}),hu(t,1)}},Bl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var a=yn();ii(i,t,134217728,a)}hu(t,134217728)}},uf=function(t){if(t.tag===13){var i=lr(t),a=Ri(t,i);if(a!==null){var l=yn();ii(a,t,i,l)}hu(t,i)}},df=function(){return Ct},ff=function(t,i){var a=Ct;try{return Ct=t,i()}finally{Ct=a}},Ce=function(t,i,a){switch(i){case"input":if(ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=mo(l);if(!f)throw Error(n(90));pt(l),ut(l,f)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&L(t,!!a.multiple,i,!1)}},kt=au,Xt=kr;var $x={usingClientEntryPoint:!1,Events:[pa,us,mo,Ne,st,au]},Ca={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kx={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{bt=Jo.inject(Kx),mt=Jo}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(i))throw Error(n(200));return Xx(t,i,null,a)},Rn.createRoot=function(t,i){if(!mu(t))throw Error(n(299));var a=!1,l="",f=Cp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=fu(t,1,!1,null,null,a,!1,l,f),t[bi]=i.current,da(t.nodeType===8?t.parentNode:t),new pu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return kr(t)},Rn.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!mu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,m="",w=Cp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Tp(i,null,t,1,a??null,f,!1,m,w),t[bi]=i.current,da(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Ko(i)},Rn.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(kr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1},Rn.unstable_batchedUpdates=au,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,a,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Fp;function sv(){if(Fp)return vu.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vu.exports=rv(),vu.exports}var Op;function av(){if(Op)return el;Op=1;var s=sv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var ov=av();const lv=Km(ov);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function uv(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:cv(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=s=>{const e=dv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Su(s){return s!=null}function hv(s,e={}){var _,M;const n=e.attributeNames??{},r=b=>n[b]??b,o=s.size??s.width??zr.width,c=s.size??s.height??zr.height,u=((_=s.aliases)==null?void 0:_.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],d=[...s.name?[`lucide-${s.name}`]:[],...u],p=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],g=e.includeDefaultClasses===!1?ed(...p):ed("lucide",...d,...p),v=e.absoluteStrokeWidth?Number(e.strokeWidth??zr["stroke-width"])*Number(s.size??s.width??zr.width)/Number(e.size??e.width??zr.width):e.strokeWidth??zr["stroke-width"];return["svg",{...Object.entries(zr).reduce((b,[E,y])=>(b[r(E)]=y,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Su(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Su(e.width)&&{[r("width")]:e.width},..."height"in e&&Su(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:v,...g&&{[r("class")]:g},[r("viewBox")]:`0 0 ${o} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[E,y,x]=b,P=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return x?[E,P,x]:[E,P]})]}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pv(s,e={}){return hv(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},gv=Ie.createContext({}),xv=()=>Ie.useContext(gv),vv=Ie.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:c,nonScalingStroke:u,className:d="",children:p,iconNode:g=[],icon:v={node:g,aliases:[],size:24},...S},_)=>{const{size:M=24,strokeWidth:b=2,absoluteStrokeWidth:E=!1,nonScalingStroke:y=!1,color:x="currentColor",className:P=""}=xv()??{},D=!!p||mv(S),[A,j,U=[]]=pv(v,{color:s??x,width:n??e??M,height:r??e??M,strokeWidth:o??b,absoluteStrokeWidth:c??E,nonScalingStroke:u??y,className:ed(P,d),hasA11yProp:D,attributes:S});return Ie.createElement(A,{ref:_,...j},[...U.map(([k,O])=>Ie.createElement(k,O)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yt(s,e=[],n=[]){const r=typeof s=="string"?uv(s,e,n):s,o=Ie.forwardRef(({className:c,...u},d)=>Ie.createElement(vv,{ref:d,icon:r,className:c,...u}));return r.name&&(o.displayName=fv(r.name)),o}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};Zm.node;const yv=yt(Zm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Qm.node;const Oa=yt(Qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};Jm.node;const eg=yt(Jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};tg.node;const _v=yt(tg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};ng.node;const Sv=yt(ng);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};ig.node;const yr=yt(ig);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};rg.node;const zp=yt(rg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};sg.node;const ag=yt(sg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};og.node;const Mv=yt(og);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};lg.node;const wv=yt(lg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"corner-down-left",size:24,node:[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]};cg.node;const Ev=yt(cg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};ug.node;const td=yt(ug);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};dg.node;const za=yt(dg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};fg.node;const Rl=yt(fg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};hg.node;const nd=yt(hg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};pg.node;const mg=yt(pg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};gg.node;const bv=yt(gg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};xg.node;const vg=yt(xg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};yg.node;const Tv=yt(yg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};_g.node;const id=yt(_g);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Sg.node;const Av=yt(Sg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Mg.node;const wg=yt(Mg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};Eg.node;const Cv=yt(Eg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};bg.node;const Rv=yt(bg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Tg.node;const Nv=yt(Tg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Ag.node;const Nl=yt(Ag);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Cg.node;const Rg=yt(Cg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Ng.node;const Pg=yt(Ng);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"square",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]};Dg.node;const Pv=yt(Dg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Lg.node;const rd=yt(Lg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Ig.node;const es=yt(Ig);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};kg.node;const Dv=yt(kg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Ug.node;const Lv=yt(Ug);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Fg.node;const qd=yt(Fg),Bp=()=>{const[s,e]=Ie.useState(!1),n=Ie.useRef(null),r=Ie.useRef(null),o=Ie.useRef(null),c=()=>{if(s)o.current&&n.current?(o.current.gain.exponentialRampToValueAtTime(1e-4,n.current.currentTime+.5),setTimeout(()=>{var u,d;(u=r.current)==null||u.stop(),(d=n.current)==null||d.close(),e(!1)},500)):e(!1);else try{const u=window.AudioContext||window.webkitAudioContext,d=new u;n.current=d;const p=d.createOscillator(),g=d.createGain(),v=d.createBiquadFilter();p.type="sine",p.frequency.setValueAtTime(55,d.currentTime),v.type="lowpass",v.frequency.setValueAtTime(220,d.currentTime),g.gain.setValueAtTime(.01,d.currentTime),g.gain.exponentialRampToValueAtTime(.04,d.currentTime+3),p.connect(v),v.connect(g),g.connect(d.destination),p.start(),r.current=p,o.current=g,e(!0)}catch(u){console.warn("Web Audio playback error",u)}};return Ie.useEffect(()=>()=>{var u;(u=n.current)==null||u.close()},[]),h.jsx("button",{onClick:c,className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/80 hover:bg-dark-800 border border-white/10 text-xs font-mono transition-all text-silver-300 hover:text-white",title:s?"Mute ambient sound":"Unmute ambient sound (Muted by default)","aria-label":"Sound Design Controller",children:s?h.jsxs(h.Fragment,{children:[h.jsx(Dv,{className:"w-3.5 h-3.5 text-electric-cyan animate-pulse"}),h.jsx("span",{className:"text-electric-cyan font-medium hidden sm:inline",children:"AUDIO ON"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Lv,{className:"w-3.5 h-3.5 text-silver-500"}),h.jsx("span",{className:"text-silver-500 hidden sm:inline",children:"AUDIO MUTED"})]})})},Og=Ie.createContext({theme:"dark",toggleTheme:()=>{},setTheme:()=>{}}),Iv=({children:s})=>{const[e,n]=Ie.useState(()=>localStorage.getItem("devault-portfolio-theme")==="light"?"light":"dark");Ie.useEffect(()=>{const c=document.documentElement;e==="light"?(c.classList.remove("dark"),c.classList.add("light")):(c.classList.remove("light"),c.classList.add("dark")),localStorage.setItem("devault-portfolio-theme",e)},[e]);const r=()=>{n(c=>c==="dark"?"light":"dark")},o=c=>{n(c)};return h.jsx(Og.Provider,{value:{theme:e,toggleTheme:r,setTheme:o},children:s})},zg=()=>Ie.useContext(Og),kv=({onOpenResume:s})=>{const{theme:e,toggleTheme:n}=zg(),[r,o]=Ie.useState(!1),[c,u]=Ie.useState(!1);Ie.useEffect(()=>{const p=()=>{o(window.scrollY>20)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const d=[{label:"Selected Work",href:"#work"},{label:"Security Lab",href:"#security"},{label:"Playground",href:"#playground"},{label:"About",href:"#about"},{label:"Expertise",href:"#expertise"},{label:"Proof",href:"#proof"},{label:"Contact",href:"#contact"}];return h.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-dark-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl":"bg-transparent py-5"}`,children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[h.jsxs("a",{href:"#",className:"flex items-center gap-3 group",children:[h.jsxs("div",{className:"relative w-9 h-9 rounded-xl bg-black border border-white/20 group-hover:border-electric-cyan/60 flex items-center justify-center p-1.5 shadow-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] overflow-hidden",children:[h.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M22 22 L38 22 L50 48 L42 58 Z",fill:"#ffffff"}),h.jsx("path",{d:"M78 22 L62 22 L42 58 L50 68 Z",fill:"#f1f5f9"}),h.jsx("path",{d:"M44 60 L56 60 L56 78 L44 78 Z",fill:"#ffffff"}),h.jsx("polygon",{points:"50,46 55,53 50,60 45,53",fill:"#38bdf8"})]}),h.jsx("div",{className:"absolute -top-1 -right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"})]}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-display font-bold tracking-tight text-silver-100 text-sm group-hover:text-white transition-colors",children:"YAHIA ELSEMARY"}),h.jsx("span",{className:"text-[10px] font-mono tracking-widest text-silver-500 uppercase",children:"DEVAULT // CREATIVE DEV"})]})]}),h.jsx("nav",{className:"hidden md:flex items-center gap-6 text-xs font-mono tracking-wider",children:d.map(p=>h.jsx("a",{href:p.href,className:"text-silver-400 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-electric-cyan after:absolute after:bottom-0 after:left-0 after:transition-all",children:p.label},p.label))}),h.jsxs("div",{className:"hidden sm:flex items-center gap-2.5",children:[h.jsx(Bp,{}),h.jsx("button",{onClick:n,className:"p-1.5 rounded-full bg-dark-900/80 hover:bg-dark-800 border border-white/10 text-silver-300 hover:text-electric-cyan transition-all",title:`Switch to ${e==="dark"?"Light":"Dark"} mode`,"aria-label":"Toggle theme mode",children:e==="dark"?h.jsx(rd,{className:"w-4 h-4 text-amber-300"}):h.jsx(id,{className:"w-4 h-4 text-electric-cyan"})}),h.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-silver-200 hover:text-white transition-all shadow-sm",children:[h.jsx(nd,{className:"w-3.5 h-3.5 text-electric-cyan"}),h.jsx("span",{children:"CV / RESUME"})]})]}),h.jsxs("div",{className:"flex sm:hidden items-center gap-2",children:[h.jsx("button",{onClick:n,className:"p-2 rounded-lg bg-dark-900 border border-white/10 text-silver-300 hover:text-white",title:"Toggle Theme",children:e==="dark"?h.jsx(rd,{className:"w-4 h-4 text-amber-300"}):h.jsx(id,{className:"w-4 h-4 text-electric-cyan"})}),h.jsx(Bp,{}),h.jsx("button",{onClick:()=>u(!c),className:"p-2 rounded-lg bg-dark-900 border border-white/10 text-silver-300 hover:text-white","aria-label":"Toggle navigation menu",children:c?h.jsx(qd,{className:"w-5 h-5"}):h.jsx(Tv,{className:"w-5 h-5"})})]})]}),c&&h.jsxs("div",{className:"sm:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3",children:[h.jsx("div",{className:"flex flex-col space-y-2 font-mono text-sm",children:d.map(p=>h.jsx("a",{href:p.href,onClick:()=>u(!1),className:"px-3 py-2 rounded-lg text-silver-300 hover:text-white hover:bg-white/5 transition-colors",children:p.label},p.label))}),h.jsx("div",{className:"pt-2 border-t border-white/10 flex justify-between items-center",children:h.jsxs("button",{onClick:()=>{u(!1),s()},className:"w-full py-2.5 rounded-lg bg-electric-blue/10 border border-electric-cyan/40 text-electric-cyan text-xs font-mono flex items-center justify-center gap-2",children:[h.jsx(nd,{className:"w-4 h-4"}),h.jsx("span",{children:"VIEW VERIFIED CV"})]})})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="170",Uv=0,Hp=1,Fv=2,Bg=1,Ov=2,zi=3,Mr=0,Pn=1,Bi=2,_r=0,Bs=1,jp=2,Vp=3,Gp=4,zv=5,Yr=100,Bv=101,Hv=102,jv=103,Vv=104,Gv=200,Wv=201,Xv=202,qv=203,sd=204,ad=205,Yv=206,$v=207,Kv=208,Zv=209,Qv=210,Jv=211,ey=212,ty=213,ny=214,od=0,ld=1,cd=2,Vs=3,ud=4,dd=5,fd=6,hd=7,Hg=0,iy=1,ry=2,Sr=0,sy=1,ay=2,oy=3,ly=4,cy=5,uy=6,dy=7,jg=300,Gs=301,Ws=302,pd=303,md=304,Il=306,gd=1e3,Kr=1001,xd=1002,ui=1003,fy=1004,tl=1005,vi=1006,Mu=1007,Zr=1008,Gi=1009,Vg=1010,Gg=1011,Ba=1012,$d=1013,Qr=1014,Hi=1015,Ha=1016,Kd=1017,Zd=1018,Xs=1020,Wg=35902,Xg=1021,qg=1022,li=1023,Yg=1024,$g=1025,Hs=1026,qs=1027,Kg=1028,Qd=1029,Zg=1030,Jd=1031,ef=1033,wl=33776,El=33777,bl=33778,Tl=33779,vd=35840,yd=35841,_d=35842,Sd=35843,Md=36196,wd=37492,Ed=37496,bd=37808,Td=37809,Ad=37810,Cd=37811,Rd=37812,Nd=37813,Pd=37814,Dd=37815,Ld=37816,Id=37817,kd=37818,Ud=37819,Fd=37820,Od=37821,Al=36492,zd=36494,Bd=36495,Qg=36283,Hd=36284,jd=36285,Vd=36286,hy=3200,py=3201,Jg=0,my=1,vr="",$n="srgb",$s="srgb-linear",kl="linear",Nt="srgb",bs=7680,Wp=519,gy=512,xy=513,vy=514,e0=515,yy=516,_y=517,Sy=518,My=519,Xp=35044,qp="300 es",ji=2e3,Pl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Gd=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function Sn(s,e,n){return Math.max(e,Math.min(n,s))}function wy(s,e){return(s%e+e)%e}function Eu(s,e,n){return(1-n)*s+n*e}function Na(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,n=0){xt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Sn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,o,c,u,d,p,g){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,g)}set(e,n,r,o,c,u,d,p,g){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],g=r[1],v=r[4],S=r[7],_=r[2],M=r[5],b=r[8],E=o[0],y=o[3],x=o[6],P=o[1],D=o[4],A=o[7],j=o[2],U=o[5],k=o[8];return c[0]=u*E+d*P+p*j,c[3]=u*y+d*D+p*U,c[6]=u*x+d*A+p*k,c[1]=g*E+v*P+S*j,c[4]=g*y+v*D+S*U,c[7]=g*x+v*A+S*k,c[2]=_*E+M*P+b*j,c[5]=_*y+M*D+b*U,c[8]=_*x+M*A+b*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],v=e[8];return n*u*v-n*d*g-r*c*v+r*d*p+o*c*g-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],v=e[8],S=v*u-d*g,_=d*p-v*c,M=g*c-u*p,b=n*S+r*_+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=S*E,e[1]=(o*g-v*r)*E,e[2]=(d*r-o*u)*E,e[3]=_*E,e[4]=(v*n-o*p)*E,e[5]=(o*c-d*n)*E,e[6]=M*E,e[7]=(r*p-g*n)*E,e[8]=(u*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*u+g*d)+u+e,-o*g,o*p,-o*(-g*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new ot;function t0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ey(){const s=Dl("canvas");return s.style.display="block",s}const Yp={};function Ua(s){s in Yp||(Yp[s]=!0,console.warn(s))}function by(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Ty(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ay(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Nt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Nt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?kl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],Kp=[.2126,.7152,.0722],Zp=[.3127,.329],Qp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[$s]:{primaries:$p,whitePoint:Zp,transfer:kl,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:Kp,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:$p,whitePoint:Zp,transfer:Nt,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:Kp,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}});let Ts;class Cy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Dl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Vi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ry=0;class n0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Tu(o[u].image)):c.push(Tu(o[u]))}else c=Tu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ny=0;class Dn extends Ks{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Kr,o=Kr,c=vi,u=Zr,d=li,p=Gi,g=Dn.DEFAULT_ANISOTROPY,v=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=ja(),this.name="",this.source=new n0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=jg;Dn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,r=0,o=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,g=p[0],v=p[4],S=p[8],_=p[1],M=p[5],b=p[9],E=p[2],y=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(S-E)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+E)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,A=(M+1)/2,j=(x+1)/2,U=(v+_)/4,k=(S+E)/4,O=(b+y)/4;return D>A&&D>j?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=U/r,c=k/r):A>j?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=U/o,c=O/o):j<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(j),r=k/c,o=O/c),this.set(r,o,c,n),this}let P=Math.sqrt((y-b)*(y-b)+(S-E)*(S-E)+(_-v)*(_-v));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(S-E)/P,this.z=(_-v)/P,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Py extends Ks{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Dn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new n0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Py{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class i0 extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ui,this.minFilter=ui,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dy extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ui,this.minFilter=ui,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],g=r[o+1],v=r[o+2],S=r[o+3];const _=c[u+0],M=c[u+1],b=c[u+2],E=c[u+3];if(d===0){e[n+0]=p,e[n+1]=g,e[n+2]=v,e[n+3]=S;return}if(d===1){e[n+0]=_,e[n+1]=M,e[n+2]=b,e[n+3]=E;return}if(S!==E||p!==_||g!==M||v!==b){let y=1-d;const x=p*_+g*M+v*b+S*E,P=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const j=Math.sqrt(D),U=Math.atan2(j,x*P);y=Math.sin(y*U)/j,d=Math.sin(d*U)/j}const A=d*P;if(p=p*y+_*A,g=g*y+M*A,v=v*y+b*A,S=S*y+E*A,y===1-d){const j=1/Math.sqrt(p*p+g*g+v*v+S*S);p*=j,g*=j,v*=j,S*=j}}e[n]=p,e[n+1]=g,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],g=r[o+2],v=r[o+3],S=c[u],_=c[u+1],M=c[u+2],b=c[u+3];return e[n]=d*b+v*S+p*M-g*_,e[n+1]=p*b+v*_+g*S-d*M,e[n+2]=g*b+v*M+d*_-p*S,e[n+3]=v*b-d*S-p*_-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,g=d(r/2),v=d(o/2),S=d(c/2),_=p(r/2),M=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=_*v*S+g*M*b,this._y=g*M*S-_*v*b,this._z=g*v*b+_*M*S,this._w=g*v*S-_*M*b;break;case"YXZ":this._x=_*v*S+g*M*b,this._y=g*M*S-_*v*b,this._z=g*v*b-_*M*S,this._w=g*v*S+_*M*b;break;case"ZXY":this._x=_*v*S-g*M*b,this._y=g*M*S+_*v*b,this._z=g*v*b+_*M*S,this._w=g*v*S-_*M*b;break;case"ZYX":this._x=_*v*S-g*M*b,this._y=g*M*S+_*v*b,this._z=g*v*b-_*M*S,this._w=g*v*S+_*M*b;break;case"YZX":this._x=_*v*S+g*M*b,this._y=g*M*S+_*v*b,this._z=g*v*b-_*M*S,this._w=g*v*S-_*M*b;break;case"XZY":this._x=_*v*S-g*M*b,this._y=g*M*S-_*v*b,this._z=g*v*b+_*M*S,this._w=g*v*S+_*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],g=n[2],v=n[6],S=n[10],_=r+d+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-g)*M,this._z=(u-o)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(v-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+g)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(c-g)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(u-o)/M,this._x=(c+g)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,g=n._z,v=n._w;return this._x=r*v+u*d+o*g-c*p,this._y=o*v+u*p+c*d-r*g,this._z=c*v+u*g+r*p-o*d,this._w=u*v-r*d-o*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),S=Math.sin((1-n)*v)/g,_=Math.sin(n*v)/g;return this._w=u*S+this._w*_,this._x=r*S+this._x*_,this._y=o*S+this._y*_,this._z=c*S+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,g=2*(u*o-d*r),v=2*(d*n-c*o),S=2*(c*r-u*n);return this.x=n+p*g+u*S-d*v,this.y=r+p*v+d*g-c*S,this.z=o+p*S+c*v-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Sn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new $,em=new Va;class Ga{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(c,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),il.subVectors(this.max,Pa),As.subVectors(e.a,Pa),Cs.subVectors(e.b,Pa),Rs.subVectors(e.c,Pa),fr.subVectors(Cs,As),hr.subVectors(Rs,Cs),Br.subVectors(As,Rs);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!Cu(n,As,Cs,Rs,il)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,As,Cs,Rs,il))?!1:(rl.crossVectors(fr,hr),n=[rl.x,rl.y,rl.z],Cu(n,As,Cs,Rs,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new $,new $,new $,new $,new $,new $,new $,new $],ri=new $,nl=new Ga,As=new $,Cs=new $,Rs=new $,fr=new $,hr=new $,Br=new $,Pa=new $,il=new $,rl=new $,Hr=new $;function Cu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Hr.fromArray(s,c);const d=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),p=e.dot(Hr),g=n.dot(Hr),v=r.dot(Hr);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const Ly=new Ga,Da=new $,Ru=new $;class tf{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ly.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const n=Da.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Ru)),this.expandByPoint(Da.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new $,Nu=new $,sl=new $,pr=new $,Pu=new $,al=new $,Du=new $;class Iy{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Nu.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Nu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(sl),d=pr.dot(this.direction),p=-pr.dot(sl),g=pr.lengthSq(),v=Math.abs(1-u*u);let S,_,M,b;if(v>0)if(S=u*p-d,_=u*d-p,b=c*v,S>=0)if(_>=-b)if(_<=b){const E=1/v;S*=E,_*=E,M=S*(S+u*_+2*d)+_*(u*S+_+2*p)+g}else _=c,S=Math.max(0,-(u*_+d)),M=-S*S+_*(_+2*p)+g;else _=-c,S=Math.max(0,-(u*_+d)),M=-S*S+_*(_+2*p)+g;else _<=-b?(S=Math.max(0,-(-u*c+d)),_=S>0?-c:Math.min(Math.max(-c,-p),c),M=-S*S+_*(_+2*p)+g):_<=b?(S=0,_=Math.min(Math.max(-c,-p),c),M=_*(_+2*p)+g):(S=Math.max(0,-(u*c+d)),_=S>0?c:Math.min(Math.max(-c,-p),c),M=-S*S+_*(_+2*p)+g);else _=u>0?-c:c,S=Math.max(0,-(u*_+d)),M=-S*S+_*(_+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Nu).addScaledVector(sl,_),M}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const g=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return g>=0?(r=(e.min.x-_.x)*g,o=(e.max.x-_.x)*g):(r=(e.max.x-_.x)*g,o=(e.min.x-_.x)*g),v>=0?(c=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),S>=0?(d=(e.min.z-_.z)*S,p=(e.max.z-_.z)*S):(d=(e.max.z-_.z)*S,p=(e.min.z-_.z)*S),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,o,c){Pu.subVectors(n,e),al.subVectors(r,e),Du.crossVectors(Pu,al);let u=this.direction.dot(Du),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;pr.subVectors(this.origin,e);const p=d*this.direction.dot(al.crossVectors(pr,al));if(p<0)return null;const g=d*this.direction.dot(Pu.cross(pr));if(g<0||p+g>u)return null;const v=-d*pr.dot(Du);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,o,c,u,d,p,g,v,S,_,M,b,E,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,g,v,S,_,M,b,E,y)}set(e,n,r,o,c,u,d,p,g,v,S,_,M,b,E,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=p,x[2]=g,x[6]=v,x[10]=S,x[14]=_,x[3]=M,x[7]=b,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),g=Math.sin(o),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=u*v,M=u*S,b=d*v,E=d*S;n[0]=p*v,n[4]=-p*S,n[8]=g,n[1]=M+b*g,n[5]=_-E*g,n[9]=-d*p,n[2]=E-_*g,n[6]=b+M*g,n[10]=u*p}else if(e.order==="YXZ"){const _=p*v,M=p*S,b=g*v,E=g*S;n[0]=_+E*d,n[4]=b*d-M,n[8]=u*g,n[1]=u*S,n[5]=u*v,n[9]=-d,n[2]=M*d-b,n[6]=E+_*d,n[10]=u*p}else if(e.order==="ZXY"){const _=p*v,M=p*S,b=g*v,E=g*S;n[0]=_-E*d,n[4]=-u*S,n[8]=b+M*d,n[1]=M+b*d,n[5]=u*v,n[9]=E-_*d,n[2]=-u*g,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const _=u*v,M=u*S,b=d*v,E=d*S;n[0]=p*v,n[4]=b*g-M,n[8]=_*g+E,n[1]=p*S,n[5]=E*g+_,n[9]=M*g-b,n[2]=-g,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,M=u*g,b=d*p,E=d*g;n[0]=p*v,n[4]=E-_*S,n[8]=b*S+M,n[1]=S,n[5]=u*v,n[9]=-d*v,n[2]=-g*v,n[6]=M*S+b,n[10]=_-E*S}else if(e.order==="XZY"){const _=u*p,M=u*g,b=d*p,E=d*g;n[0]=p*v,n[4]=-S,n[8]=g*v,n[1]=_*S+E,n[5]=u*v,n[9]=M*S-b,n[2]=b*S-M,n[6]=d*v,n[10]=E*S+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ky,e,Uy)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),mr.crossVectors(r,Fn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),mr.crossVectors(r,Fn)),mr.normalize(),ol.crossVectors(Fn,mr),o[0]=mr.x,o[4]=ol.x,o[8]=Fn.x,o[1]=mr.y,o[5]=ol.y,o[9]=Fn.y,o[2]=mr.z,o[6]=ol.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],g=r[12],v=r[1],S=r[5],_=r[9],M=r[13],b=r[2],E=r[6],y=r[10],x=r[14],P=r[3],D=r[7],A=r[11],j=r[15],U=o[0],k=o[4],O=o[8],N=o[12],C=o[1],z=o[5],ae=o[9],J=o[13],de=o[2],he=o[6],te=o[10],le=o[14],H=o[3],ce=o[7],se=o[11],F=o[15];return c[0]=u*U+d*C+p*de+g*H,c[4]=u*k+d*z+p*he+g*ce,c[8]=u*O+d*ae+p*te+g*se,c[12]=u*N+d*J+p*le+g*F,c[1]=v*U+S*C+_*de+M*H,c[5]=v*k+S*z+_*he+M*ce,c[9]=v*O+S*ae+_*te+M*se,c[13]=v*N+S*J+_*le+M*F,c[2]=b*U+E*C+y*de+x*H,c[6]=b*k+E*z+y*he+x*ce,c[10]=b*O+E*ae+y*te+x*se,c[14]=b*N+E*J+y*le+x*F,c[3]=P*U+D*C+A*de+j*H,c[7]=P*k+D*z+A*he+j*ce,c[11]=P*O+D*ae+A*te+j*se,c[15]=P*N+D*J+A*le+j*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],g=e[13],v=e[2],S=e[6],_=e[10],M=e[14],b=e[3],E=e[7],y=e[11],x=e[15];return b*(+c*p*S-o*g*S-c*d*_+r*g*_+o*d*M-r*p*M)+E*(+n*p*M-n*g*_+c*u*_-o*u*M+o*g*v-c*p*v)+y*(+n*g*S-n*d*M-c*u*S+r*u*M+c*d*v-r*g*v)+x*(-o*d*v-n*p*S+n*d*_+o*u*S-r*u*_+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],v=e[8],S=e[9],_=e[10],M=e[11],b=e[12],E=e[13],y=e[14],x=e[15],P=S*y*g-E*_*g+E*p*M-d*y*M-S*p*x+d*_*x,D=b*_*g-v*y*g-b*p*M+u*y*M+v*p*x-u*_*x,A=v*E*g-b*S*g+b*d*M-u*E*M-v*d*x+u*S*x,j=b*S*p-v*E*p-b*d*_+u*E*_+v*d*y-u*S*y,U=n*P+r*D+o*A+c*j;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return e[0]=P*k,e[1]=(E*_*c-S*y*c-E*o*M+r*y*M+S*o*x-r*_*x)*k,e[2]=(d*y*c-E*p*c+E*o*g-r*y*g-d*o*x+r*p*x)*k,e[3]=(S*p*c-d*_*c-S*o*g+r*_*g+d*o*M-r*p*M)*k,e[4]=D*k,e[5]=(v*y*c-b*_*c+b*o*M-n*y*M-v*o*x+n*_*x)*k,e[6]=(b*p*c-u*y*c-b*o*g+n*y*g+u*o*x-n*p*x)*k,e[7]=(u*_*c-v*p*c+v*o*g-n*_*g-u*o*M+n*p*M)*k,e[8]=A*k,e[9]=(b*S*c-v*E*c-b*r*M+n*E*M+v*r*x-n*S*x)*k,e[10]=(u*E*c-b*d*c+b*r*g-n*E*g-u*r*x+n*d*x)*k,e[11]=(v*d*c-u*S*c-v*r*g+n*S*g+u*r*M-n*d*M)*k,e[12]=j*k,e[13]=(v*E*o-b*S*o+b*r*_-n*E*_-v*r*y+n*S*y)*k,e[14]=(b*d*o-u*E*o-b*r*p+n*E*p+u*r*y-n*d*y)*k,e[15]=(u*S*o-v*d*o+v*r*p-n*S*p-u*r*_+n*d*_)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,g=c*u,v=c*d;return this.set(g*u+r,g*d-o*p,g*p+o*d,0,g*d+o*p,v*d+r,v*p-o*u,0,g*p-o*d,v*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,g=c+c,v=u+u,S=d+d,_=c*g,M=c*v,b=c*S,E=u*v,y=u*S,x=d*S,P=p*g,D=p*v,A=p*S,j=r.x,U=r.y,k=r.z;return o[0]=(1-(E+x))*j,o[1]=(M+A)*j,o[2]=(b-D)*j,o[3]=0,o[4]=(M-A)*U,o[5]=(1-(_+x))*U,o[6]=(y+P)*U,o[7]=0,o[8]=(b+D)*k,o[9]=(y-P)*k,o[10]=(1-(_+E))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Ns.set(o[0],o[1],o[2]).length();const u=Ns.set(o[4],o[5],o[6]).length(),d=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const g=1/c,v=1/u,S=1/d;return si.elements[0]*=g,si.elements[1]*=g,si.elements[2]*=g,si.elements[4]*=v,si.elements[5]*=v,si.elements[6]*=v,si.elements[8]*=S,si.elements[9]*=S,si.elements[10]*=S,n.setFromRotationMatrix(si),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=ji){const p=this.elements,g=2*c/(n-e),v=2*c/(r-o),S=(n+e)/(n-e),_=(r+o)/(r-o);let M,b;if(d===ji)M=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(d===Pl)M=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=ji){const p=this.elements,g=1/(n-e),v=1/(r-o),S=1/(u-c),_=(n+e)*g,M=(r+o)*v;let b,E;if(d===ji)b=(u+c)*S,E=-2*S;else if(d===Pl)b=c*S,E=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=E,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new $,si=new Ht,ky=new $(0,0,0),Uy=new $(1,1,1),mr=new $,ol=new $,Fn=new $,tm=new Ht,nm=new Va;class Si{constructor(e=0,n=0,r=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],g=o[5],v=o[9],S=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Sn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class r0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fy=0;const im=new $,Ps=new Va,ki=new Ht,ll=new $,La=new $,Oy=new $,zy=new Va,rm=new $(1,0,0),sm=new $(0,1,0),am=new $(0,0,1),om={type:"added"},By={type:"removed"},Ds={type:"childadded",child:null},Lu={type:"childremoved",child:null};class pn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new $,n=new Si,r=new Va,o=new $(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(La,ll,this.up):ki.lookAt(ll,La,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(ki),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(By),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const S=p[g];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),g=u(e.textures),v=u(e.images),S=u(e.shapes),_=u(e.skeletons),M=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}pn.DEFAULT_UP=new $(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new $,Ui=new $,Iu=new $,Fi=new $,Ls=new $,Is=new $,lm=new $,ku=new $,Uu=new $,Fu=new $,Ou=new Pt,zu=new Pt,Bu=new Pt;class oi{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ai.subVectors(e,n),o.cross(ai);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ai.subVectors(o,n),Ui.subVectors(r,n),Iu.subVectors(e,n);const u=ai.dot(ai),d=ai.dot(Ui),p=ai.dot(Iu),g=Ui.dot(Ui),v=Ui.dot(Iu),S=u*g-d*d;if(S===0)return c.set(0,0,0),null;const _=1/S,M=(g*p-d*v)*_,b=(u*v-d*p)*_;return c.set(1-M-b,b,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fi.x),p.addScaledVector(u,Fi.y),p.addScaledVector(d,Fi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Ou.setScalar(0),zu.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,r),Bu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ou,c.x),u.addScaledVector(zu,c.y),u.addScaledVector(Bu,c.z),u}static isFrontFacing(e,n,r,o){return ai.subVectors(r,n),Ui.subVectors(e,n),ai.cross(Ui).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Ls.subVectors(o,r),Is.subVectors(c,r),ku.subVectors(e,r);const p=Ls.dot(ku),g=Is.dot(ku);if(p<=0&&g<=0)return n.copy(r);Uu.subVectors(e,o);const v=Ls.dot(Uu),S=Is.dot(Uu);if(v>=0&&S<=v)return n.copy(o);const _=p*S-v*g;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Ls,u);Fu.subVectors(e,c);const M=Ls.dot(Fu),b=Is.dot(Fu);if(b>=0&&M<=b)return n.copy(c);const E=M*g-p*b;if(E<=0&&g>=0&&b<=0)return d=g/(g-b),n.copy(r).addScaledVector(Is,d);const y=v*b-M*S;if(y<=0&&S-v>=0&&M-b>=0)return lm.subVectors(c,o),d=(S-v)/(S-v+(M-b)),n.copy(o).addScaledVector(lm,d);const x=1/(y+E+_);return u=E*x,d=_*x,n.copy(r).addScaledVector(Ls,u).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Hu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Mt.workingColorSpace){if(e=wy(e,1),n=Sn(n,0,1),r=Sn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Hu(u,c,e+1/3),this.g=Hu(u,c,e),this.b=Hu(u,c,e-1/3)}return Mt.toWorkingColorSpace(this,o),this}setStyle(e,n=$n){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=s0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Mt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Sn(fn.r*255,0,255))*65536+Math.round(Sn(fn.g*255,0,255))*256+Math.round(Sn(fn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,o=fn.g,c=fn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,g;const v=(d+u)/2;if(d===u)p=0,g=0;else{const S=u-d;switch(g=v<=.5?S/(u+d):S/(2-u-d),u){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=$n){Mt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,o=fn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(cl);const r=Eu(gr.h,cl.h,n),o=Eu(gr.s,cl.s,n),c=Eu(gr.l,cl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new vt;vt.NAMES=s0;let Hy=0;class Wa extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=ja(),this.name="",this.blending=Bs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sd&&(r.blendSrc=this.blendSrc),this.blendDst!==ad&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nf extends Wa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new $,ul=new xt;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Na(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Na(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Na(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),o=Nn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),o=Nn(o,this.array),c=Nn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class a0 extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class o0 extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class _i extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jy=0;const Yn=new Ht,ju=new pn,ks=new $,On=new Ga,Ia=new Ga,tn=new $;class Er extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?o0:a0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _i(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Ia.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(On.min,Ia.min),On.expandByPoint(tn),tn.addVectors(On.max,Ia.max),On.expandByPoint(tn)):(On.expandByPoint(Ia.min),On.expandByPoint(Ia.max))}On.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)tn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(tn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)tn.fromBufferAttribute(d,g),p&&(ks.fromBufferAttribute(e,g),tn.add(ks)),o=Math.max(o,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let O=0;O<r.count;O++)d[O]=new $,p[O]=new $;const g=new $,v=new $,S=new $,_=new xt,M=new xt,b=new xt,E=new $,y=new $;function x(O,N,C){g.fromBufferAttribute(r,O),v.fromBufferAttribute(r,N),S.fromBufferAttribute(r,C),_.fromBufferAttribute(c,O),M.fromBufferAttribute(c,N),b.fromBufferAttribute(c,C),v.sub(g),S.sub(g),M.sub(_),b.sub(_);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(E.copy(v).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(z),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(z),d[O].add(E),d[N].add(E),d[C].add(E),p[O].add(y),p[N].add(y),p[C].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let O=0,N=P.length;O<N;++O){const C=P[O],z=C.start,ae=C.count;for(let J=z,de=z+ae;J<de;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new $,A=new $,j=new $,U=new $;function k(O){j.fromBufferAttribute(o,O),U.copy(j);const N=d[O];D.copy(N),D.sub(j.multiplyScalar(j.dot(N))).normalize(),A.crossVectors(U,N);const z=A.dot(p[O])<0?-1:1;u.setXYZW(O,D.x,D.y,D.z,z)}for(let O=0,N=P.length;O<N;++O){const C=P[O],z=C.start,ae=C.count;for(let J=z,de=z+ae;J<de;J+=3)k(e.getX(J+0)),k(e.getX(J+1)),k(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new $,c=new $,u=new $,d=new $,p=new $,g=new $,v=new $,S=new $;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),E=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),v.subVectors(u,c),S.subVectors(o,c),v.cross(S),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),d.add(v),p.add(v),g.add(v),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),S.subVectors(o,c),v.cross(S),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const g=d.array,v=d.itemSize,S=d.normalized,_=new g.constructor(p.length*v);let M=0,b=0;for(let E=0,y=p.length;E<y;E++){d.isInterleavedBufferAttribute?M=p[E]*d.data.stride+d.offset:M=p[E]*v;for(let x=0;x<v;x++)_[b++]=g[M++]}return new yi(_,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Er,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],g=e(p,r);n.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let v=0,S=g.length;v<S;v++){const _=g[v],M=e(_,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let S=0,_=g.length;S<_;S++){const M=g[S];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const v=o[g];this.setAttribute(g,v.clone(n))}const c=e.morphAttributes;for(const g in c){const v=[],S=c[g];for(let _=0,M=S.length;_<M;_++)v.push(S[_].clone(n));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,v=u.length;g<v;g++){const S=u[g];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Ht,jr=new Iy,dl=new tf,um=new $,fl=new $,hl=new $,pl=new $,Vu=new $,ml=new $,dm=new $,gl=new $;class ci extends pn{constructor(e=new Er,n=new nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){ml.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const v=d[p],S=c[p];v!==0&&(Vu.fromBufferAttribute(S,e),u?ml.addScaledVector(Vu,v):ml.addScaledVector(Vu.sub(n),v))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(c),jr.copy(e.ray).recast(e.near),!(dl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(dl,um)===null||jr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(c).invert(),jr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,E=_.length;b<E;b++){const y=_[b],x=u[y.materialIndex],P=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let A=P,j=D;A<j;A+=3){const U=d.getX(A),k=d.getX(A+1),O=d.getX(A+2);o=xl(this,x,e,r,g,v,S,U,k,O),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let y=b,x=E;y<x;y+=3){const P=d.getX(y),D=d.getX(y+1),A=d.getX(y+2);o=xl(this,u,e,r,g,v,S,P,D,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,E=_.length;b<E;b++){const y=_[b],x=u[y.materialIndex],P=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let A=P,j=D;A<j;A+=3){const U=A,k=A+1,O=A+2;o=xl(this,x,e,r,g,v,S,U,k,O),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),E=Math.min(p.count,M.start+M.count);for(let y=b,x=E;y<x;y+=3){const P=y,D=y+1,A=y+2;o=xl(this,u,e,r,g,v,S,P,D,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Vy(s,e,n,r,o,c,u,d){let p;if(e.side===Pn?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===Mr,d),p===null)return null;gl.copy(d),gl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(gl);return g<n.near||g>n.far?null:{distance:g,point:gl.clone(),object:s}}function xl(s,e,n,r,o,c,u,d,p,g){s.getVertexPosition(d,fl),s.getVertexPosition(p,hl),s.getVertexPosition(g,pl);const v=Vy(s,e,n,r,fl,hl,pl,dm);if(v){const S=new $;oi.getBarycoord(dm,fl,hl,pl,S),o&&(v.uv=oi.getInterpolatedAttribute(o,d,p,g,S,new xt)),c&&(v.uv1=oi.getInterpolatedAttribute(c,d,p,g,S,new xt)),u&&(v.normal=oi.getInterpolatedAttribute(u,d,p,g,S,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new $,materialIndex:0};oi.getNormal(fl,hl,pl,_.normal),v.face=_,v.barycoord=S}return v}class Xa extends Er{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],v=[],S=[];let _=0,M=0;b("z","y","x",-1,-1,r,n,e,u,c,0),b("z","y","x",1,-1,r,n,-e,u,c,1),b("x","z","y",1,1,e,r,n,o,u,2),b("x","z","y",1,-1,e,r,-n,o,u,3),b("x","y","z",1,-1,e,n,r,o,c,4),b("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new _i(g,3)),this.setAttribute("normal",new _i(v,3)),this.setAttribute("uv",new _i(S,2));function b(E,y,x,P,D,A,j,U,k,O,N){const C=A/k,z=j/O,ae=A/2,J=j/2,de=U/2,he=k+1,te=O+1;let le=0,H=0;const ce=new $;for(let se=0;se<te;se++){const F=se*z-J;for(let ie=0;ie<he;ie++){const Pe=ie*C-ae;ce[E]=Pe*P,ce[y]=F*D,ce[x]=de,g.push(ce.x,ce.y,ce.z),ce[E]=0,ce[y]=0,ce[x]=U>0?1:-1,v.push(ce.x,ce.y,ce.z),S.push(ie/k),S.push(1-se/O),le+=1}}for(let se=0;se<O;se++)for(let F=0;F<k;F++){const ie=_+F+he*se,Pe=_+F+he*(se+1),Z=_+(F+1)+he*(se+1),ue=_+(F+1)+he*se;p.push(ie,Pe,ue),p.push(Pe,Z,ue),H+=6}d.addGroup(M,H,N),M+=H,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const o in r)e[o]=r[o]}return e}function Gy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function l0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Wy={clone:Ys,merge:_n};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Wa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class c0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new $,fm=new xt,hm=new xt;class zn extends c0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,fm,hm),n.subVectors(hm,fm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/g,o*=u.width/p,r*=u.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class Yy extends pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(Us,Fs,e,n);o.layers=this.layers,this.add(o);const c=new zn(Us,Fs,e,n);c.layers=this.layers,this.add(c);const u=new zn(Us,Fs,e,n);u.layers=this.layers,this.add(u);const d=new zn(Us,Fs,e,n);d.layers=this.layers,this.add(d);const p=new zn(Us,Fs,e,n);p.layers=this.layers,this.add(p);const g=new zn(Us,Fs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const g of n)this.remove(g);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,g,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(S,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class u0 extends Dn{constructor(e,n,r,o,c,u,d,p,g,v){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,o,c,u,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $y extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new u0(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Xa(5,5,5),c=new wr({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:_r});c.uniforms.tEquirect.value=n;const u=new ci(o,c),d=n.minFilter;return n.minFilter===Zr&&(n.minFilter=vi),new Yy(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Gu=new $,Ky=new $,Zy=new ot;class Xr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Gu.subVectors(r,n).cross(Ky.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Gu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Zy.getNormalMatrix(e),o=this.coplanarPoint(Gu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new tf,vl=new $;class rf{constructor(e=new Xr,n=new Xr,r=new Xr,o=new Xr,c=new Xr,u=new Xr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ji){const r=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],p=o[3],g=o[4],v=o[5],S=o[6],_=o[7],M=o[8],b=o[9],E=o[10],y=o[11],x=o[12],P=o[13],D=o[14],A=o[15];if(r[0].setComponents(p-c,_-g,y-M,A-x).normalize(),r[1].setComponents(p+c,_+g,y+M,A+x).normalize(),r[2].setComponents(p+u,_+v,y+b,A+P).normalize(),r[3].setComponents(p-u,_-v,y-b,A-P).normalize(),r[4].setComponents(p-d,_-S,y-E,A-D).normalize(),n===ji)r[5].setComponents(p+d,_+S,y+E,A+D).normalize();else if(n===Pl)r[5].setComponents(d,S,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(vl.x=o.normal.x>0?e.max.x:e.min.x,vl.y=o.normal.y>0?e.max.y:e.min.y,vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d0(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Qy(s){const e=new WeakMap;function n(d,p){const g=d.array,v=d.usage,S=g.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,g){const v=p.array,S=p.updateRanges;if(s.bindBuffer(g,d),S.length===0)s.bufferSubData(g,0,v);else{S.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<S.length;M++){const b=S[_],E=S[M];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++_,S[_]=E)}S.length=_+1;for(let M=0,b=S.length;M<b;M++){const E=S[M];s.bufferSubData(g,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,n(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,p),g.version=d.version}}return{get:o,remove:c,update:u}}class Ul extends Er{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),g=d+1,v=p+1,S=e/d,_=n/p,M=[],b=[],E=[],y=[];for(let x=0;x<v;x++){const P=x*_-u;for(let D=0;D<g;D++){const A=D*S-c;b.push(A,-P,0),E.push(0,0,1),y.push(D/d),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<d;P++){const D=P+g*x,A=P+g*(x+1),j=P+1+g*(x+1),U=P+1+g*x;M.push(D,A,U),M.push(A,j,U)}this.setIndex(M),this.setAttribute("position",new _i(b,3)),this.setAttribute("normal",new _i(E,3)),this.setAttribute("uv",new _i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,M_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Jy,alphahash_pars_fragment:e_,alphamap_fragment:t_,alphamap_pars_fragment:n_,alphatest_fragment:i_,alphatest_pars_fragment:r_,aomap_fragment:s_,aomap_pars_fragment:a_,batching_pars_vertex:o_,batching_vertex:l_,begin_vertex:c_,beginnormal_vertex:u_,bsdfs:d_,iridescence_fragment:f_,bumpmap_pars_fragment:h_,clipping_planes_fragment:p_,clipping_planes_pars_fragment:m_,clipping_planes_pars_vertex:g_,clipping_planes_vertex:x_,color_fragment:v_,color_pars_fragment:y_,color_pars_vertex:__,color_vertex:S_,common:M_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:E_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:A_,emissivemap_pars_fragment:C_,colorspace_fragment:R_,colorspace_pars_fragment:N_,envmap_fragment:P_,envmap_common_pars_fragment:D_,envmap_pars_fragment:L_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:W_,envmap_vertex:k_,fog_vertex:U_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:z_,gradientmap_pars_fragment:B_,lightmap_pars_fragment:H_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:V_,lights_pars_begin:G_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:$_,lights_physical_fragment:K_,lights_physical_pars_fragment:Z_,lights_fragment_begin:Q_,lights_fragment_maps:J_,lights_fragment_end:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:rS,map_fragment:sS,map_pars_fragment:aS,map_particle_fragment:oS,map_particle_pars_fragment:lS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:uS,morphinstance_vertex:dS,morphcolor_vertex:fS,morphnormal_vertex:hS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:gS,normal_fragment_maps:xS,normal_pars_fragment:vS,normal_pars_vertex:yS,normal_vertex:_S,normalmap_pars_fragment:SS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:bS,opaque_fragment:TS,packing:AS,premultiplied_alpha_fragment:CS,project_vertex:RS,dithering_fragment:NS,dithering_pars_fragment:PS,roughnessmap_fragment:DS,roughnessmap_pars_fragment:LS,shadowmap_pars_fragment:IS,shadowmap_pars_vertex:kS,shadowmap_vertex:US,shadowmask_pars_fragment:FS,skinbase_vertex:OS,skinning_pars_vertex:zS,skinning_vertex:BS,skinnormal_vertex:HS,specularmap_fragment:jS,specularmap_pars_fragment:VS,tonemapping_fragment:GS,tonemapping_pars_fragment:WS,transmission_fragment:XS,transmission_pars_fragment:qS,uv_pars_fragment:YS,uv_pars_vertex:$S,uv_vertex:KS,worldpos_vertex:ZS,background_vert:QS,background_frag:JS,backgroundCube_vert:e1,backgroundCube_frag:t1,cube_vert:n1,cube_frag:i1,depth_vert:r1,depth_frag:s1,distanceRGBA_vert:a1,distanceRGBA_frag:o1,equirect_vert:l1,equirect_frag:c1,linedashed_vert:u1,linedashed_frag:d1,meshbasic_vert:f1,meshbasic_frag:h1,meshlambert_vert:p1,meshlambert_frag:m1,meshmatcap_vert:g1,meshmatcap_frag:x1,meshnormal_vert:v1,meshnormal_frag:y1,meshphong_vert:_1,meshphong_frag:S1,meshphysical_vert:M1,meshphysical_frag:w1,meshtoon_vert:E1,meshtoon_frag:b1,points_vert:T1,points_frag:A1,shadow_vert:C1,shadow_frag:R1,sprite_vert:N1,sprite_frag:P1},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};xi.physical={uniforms:_n([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const yl={r:0,b:0,g:0},Gr=new Si,D1=new Ht;function L1(s,e,n,r,o,c,u){const d=new vt(0);let p=c===!0?0:1,g,v,S=null,_=0,M=null;function b(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?n:e).get(D)),D}function E(P){let D=!1;const A=b(P);A===null?x(d,p):A&&A.isColor&&(x(A,1),D=!0);const j=s.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,u):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(P,D){const A=b(D);A&&(A.isCubeTexture||A.mapping===Il)?(v===void 0&&(v=new ci(new Xa(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Ys(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(j,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Gr.copy(D.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=A,v.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(Gr)),v.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Nt,(S!==A||_!==A.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,S=A,_=A.version,M=s.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):A&&A.isTexture&&(g===void 0&&(g=new ci(new Ul(2,2),new wr({name:"BackgroundMaterial",uniforms:Ys(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=A,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),g.material.uniforms.uvTransform.value.copy(A.matrix),(S!==A||_!==A.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,S=A,_=A.version,M=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function x(P,D){P.getRGB(yl,l0(s)),r.buffers.color.setClear(yl.r,yl.g,yl.b,D,u)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),p=D,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,x(d,p)},render:E,addToRenderList:y}}function I1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(C,z,ae,J,de){let he=!1;const te=S(J,ae,z);c!==te&&(c=te,g(c.object)),he=M(C,J,ae,de),he&&b(C,J,ae,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,A(C,z,ae,J),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function S(C,z,ae){const J=ae.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let he=de[z.id];he===void 0&&(he={},de[z.id]=he);let te=he[J];return te===void 0&&(te=_(p()),he[J]=te),te}function _(C){const z=[],ae=[],J=[];for(let de=0;de<n;de++)z[de]=0,ae[de]=0,J[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ae,attributeDivisors:J,object:C,attributes:{},index:null}}function M(C,z,ae,J){const de=c.attributes,he=z.attributes;let te=0;const le=ae.getAttributes();for(const H in le)if(le[H].location>=0){const se=de[H];let F=he[H];if(F===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;te++}return c.attributesNum!==te||c.index!==J}function b(C,z,ae,J){const de={},he=z.attributes;let te=0;const le=ae.getAttributes();for(const H in le)if(le[H].location>=0){let se=he[H];se===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),de[H]=F,te++}c.attributes=de,c.attributesNum=te,c.index=J}function E(){const C=c.newAttributes;for(let z=0,ae=C.length;z<ae;z++)C[z]=0}function y(C){x(C,0)}function x(C,z){const ae=c.newAttributes,J=c.enabledAttributes,de=c.attributeDivisors;ae[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),de[C]!==z&&(s.vertexAttribDivisor(C,z),de[C]=z)}function P(){const C=c.newAttributes,z=c.enabledAttributes;for(let ae=0,J=z.length;ae<J;ae++)z[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),z[ae]=0)}function D(C,z,ae,J,de,he,te){te===!0?s.vertexAttribIPointer(C,z,ae,de,he):s.vertexAttribPointer(C,z,ae,J,de,he)}function A(C,z,ae,J){E();const de=J.attributes,he=ae.getAttributes(),te=z.defaultAttributeValues;for(const le in he){const H=he[le];if(H.location>=0){let ce=de[le];if(ce===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const se=ce.normalized,F=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const Pe=ie.buffer,Z=ie.type,ue=ie.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||ce.gpuType===$d;if(ce.isInterleavedBufferAttribute){const ye=ce.data,Te=ye.stride,ke=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let Qe=0;Qe<H.locationSize;Qe++)x(H.location+Qe,ye.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<H.locationSize;Qe++)y(H.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Qe=0;Qe<H.locationSize;Qe++)D(H.location+Qe,F/H.locationSize,Z,se,Te*ue,(ke+F/H.locationSize*Qe)*ue,Se)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)x(H.location+ye,ce.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<H.locationSize;ye++)y(H.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ye=0;ye<H.locationSize;ye++)D(H.location+ye,F/H.locationSize,Z,se,F*ue,F/H.locationSize*ye*ue,Se)}}else if(te!==void 0){const se=te[le];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}P()}function j(){O();for(const C in r){const z=r[C];for(const ae in z){const J=z[ae];for(const de in J)v(J[de].object),delete J[de];delete z[ae]}delete r[C]}}function U(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const ae in z){const J=z[ae];for(const de in J)v(J[de].object),delete J[de];delete z[ae]}delete r[C.id]}function k(C){for(const z in r){const ae=r[z];if(ae[C.id]===void 0)continue;const J=ae[C.id];for(const de in J)v(J[de].object),delete J[de];delete ae[C.id]}}function O(){N(),u=!0,c!==o&&(c=o,g(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:O,resetDefaultState:N,dispose:j,releaseStatesOfGeometry:U,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:y,disableUnusedAttributes:P}}function k1(s,e,n){let r;function o(g){r=g}function c(g,v){s.drawArrays(r,g,v),n.update(v,r,1)}function u(g,v,S){S!==0&&(s.drawArraysInstanced(r,g,v,S),n.update(v,r,S))}function d(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,S);let M=0;for(let b=0;b<S;b++)M+=v[b];n.update(M,r,1)}function p(g,v,S,_){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)u(g[b],v[b],_[b]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,v,0,_,0,S);let b=0;for(let E=0;E<S;E++)b+=v[E]*_[E];n.update(b,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function U1(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==li&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const O=k===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Gi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Hi&&!O)}function p(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const S=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=b>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:S,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:j,maxSamples:U}}function F1(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Xr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||r!==0||o;return o=_,r=S.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){n=v(S,_,0)},this.setState=function(S,_,M){const b=S.clippingPlanes,E=S.clipIntersection,y=S.clipShadows,x=s.get(S);if(!o||b===null||b.length===0||c&&!y)c?v(null):g();else{const P=c?0:r,D=P*4;let A=x.clippingState||null;p.value=A,A=v(b,_,D,M);for(let j=0;j!==D;++j)A[j]=n[j];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,_,M,b){const E=S!==null?S.length:0;let y=null;if(E!==0){if(y=p.value,b!==!0||y===null){const x=M+E*4,P=_.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,A=M;D!==E;++D,A+=4)u.copy(S[D]).applyMatrix4(P,d),u.normal.toArray(y,A),y[A+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function O1(s){let e=new WeakMap;function n(u,d){return d===pd?u.mapping=Gs:d===md&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===pd||d===md)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const g=new $y(p.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),n(g.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class f0 extends c0{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,pm=[.125,.215,.35,.446,.526,.582],$r=20,Wu=new f0,mm=new vt;let Xu=null,qu=0,Yu=0,$u=!1;const qr=(1+Math.sqrt(5))/2,Os=1/qr,gm=[new $(-qr,Os,0),new $(qr,Os,0),new $(-Os,0,qr),new $(Os,0,qr),new $(0,qr,-Os),new $(0,qr,Os),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=$u,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Ha,format:li,colorSpace:$s,depthBuffer:!1},o=vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z1(c)),this._blurMaterial=B1(c,e,n)}return o}_compileMaterial(e){const n=new ci(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,r,o){const d=new zn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,_=v.toneMapping;v.getClearColor(mm),v.toneMapping=Sr,v.autoClear=!1;const M=new nf({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),b=new ci(new Xa,M);let E=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,E=!0):(M.color.copy(mm),E=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(d.up.set(0,p[x],0),d.lookAt(g[x],0,0)):P===1?(d.up.set(0,0,p[x]),d.lookAt(0,g[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,g[x]));const D=this._cubeSize;_l(o,P*D,x>2?D:0,D,D),v.setRenderTarget(o),E&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=_,v.autoClear=S,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Gs||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ym());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new ci(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;_l(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Wu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=gm[(o-c-1)%gm.length];this._blur(e,c-1,c,u,d)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new ci(this._lodPlanes[o],g),_=g.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*$r-1),E=c/b,y=isFinite(c)?1+Math.floor(v*E):$r;y>$r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const x=[];let P=0;for(let k=0;k<$r;++k){const O=k/E,N=Math.exp(-O*O/2);x.push(N),k===0?P+=N:k<y&&(P+=2*N)}for(let k=0;k<x.length;k++)x[k]=x[k]/P;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=b,_.mipInt.value=D-r;const A=this._sizeLods[o],j=3*A*(o>D-zs?o-D+zs:0),U=4*(this._cubeSize-A);_l(n,j,U,3*A,2*A),p.setRenderTarget(n),p.render(S,Wu)}}function z1(s){const e=[],n=[],r=[];let o=s;const c=s-zs+1+pm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);n.push(d);let p=1/d;u>s-zs?p=pm[u-s+zs-1]:u===0&&(p=0),r.push(p);const g=1/(d-2),v=-g,S=1+g,_=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,b=6,E=3,y=2,x=1,P=new Float32Array(E*b*M),D=new Float32Array(y*b*M),A=new Float32Array(x*b*M);for(let U=0;U<M;U++){const k=U%3*2/3-1,O=U>2?0:-1,N=[k,O,0,k+2/3,O,0,k+2/3,O+1,0,k,O,0,k+2/3,O+1,0,k,O+1,0];P.set(N,E*b*U),D.set(_,y*b*U);const C=[U,U,U,U,U,U];A.set(C,x*b*U)}const j=new Er;j.setAttribute("position",new yi(P,E)),j.setAttribute("uv",new yi(D,y)),j.setAttribute("faceIndex",new yi(A,x)),e.push(j),o>zs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function vm(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function B1(s,e,n){const r=new Float32Array($r),o=new $(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ym(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function _m(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===pd||p===md,v=p===Gs||p===Ws;if(g||v){let S=e.get(d);const _=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new xm(s)),S=g?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new xm(s)),S=g?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function o(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function j1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function V1(s,e,n,r){const o={},c=new WeakMap;function u(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);for(const b in _.morphAttributes){const E=_.morphAttributes[b];for(let y=0,x=E.length;y<x;y++)e.remove(E[y])}_.removeEventListener("dispose",u),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(S,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(S){const _=S.attributes;for(const b in _)e.update(_[b],s.ARRAY_BUFFER);const M=S.morphAttributes;for(const b in M){const E=M[b];for(let y=0,x=E.length;y<x;y++)e.update(E[y],s.ARRAY_BUFFER)}}function g(S){const _=[],M=S.index,b=S.attributes.position;let E=0;if(M!==null){const P=M.array;E=M.version;for(let D=0,A=P.length;D<A;D+=3){const j=P[D+0],U=P[D+1],k=P[D+2];_.push(j,U,U,k,k,j)}}else if(b!==void 0){const P=b.array;E=b.version;for(let D=0,A=P.length/3-1;D<A;D+=3){const j=D+0,U=D+1,k=D+2;_.push(j,U,U,k,k,j)}}else return;const y=new(t0(_)?o0:a0)(_,1);y.version=E;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function v(S){const _=c.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&g(S)}else g(S);return c.get(S)}return{get:d,update:p,getWireframeAttribute:v}}function G1(s,e,n){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function p(_,M){s.drawElements(r,M,c,_*u),n.update(M,r,1)}function g(_,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,_*u,b),n.update(M,r,b))}function v(_,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];n.update(y,r,1)}function S(_,M,b,E){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)g(_[x]/u,M[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,E,0,b);let x=0;for(let P=0;P<b;P++)x+=M[P]*E[P];n.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function W1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function X1(s,e,n){const r=new WeakMap,o=new Pt;function c(u,d,p){const g=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==S){let C=function(){O.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),E===!0&&(A=2),y===!0&&(A=3);let j=d.attributes.position.count*A,U=1;j>e.maxTextureSize&&(U=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const k=new Float32Array(j*U*4*S),O=new i0(k,j,U,S);O.type=Hi,O.needsUpdate=!0;const N=A*4;for(let z=0;z<S;z++){const ae=x[z],J=P[z],de=D[z],he=j*U*4*z;for(let te=0;te<ae.count;te++){const le=te*N;b===!0&&(o.fromBufferAttribute(ae,te),k[he+le+0]=o.x,k[he+le+1]=o.y,k[he+le+2]=o.z,k[he+le+3]=0),E===!0&&(o.fromBufferAttribute(J,te),k[he+le+4]=o.x,k[he+le+5]=o.y,k[he+le+6]=o.z,k[he+le+7]=0),y===!0&&(o.fromBufferAttribute(de,te),k[he+le+8]=o.x,k[he+le+9]=o.y,k[he+le+10]=o.z,k[he+le+11]=de.itemSize===4?o.w:1)}}_={count:S,texture:O,size:new xt(j,U)},r.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const E=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function q1(s,e,n,r){let o=new WeakMap;function c(p){const g=r.render.frame,v=p.geometry,S=e.get(p,v);if(o.get(S)!==g&&(e.update(S),o.set(S,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==g&&(_.update(),o.set(_,g))}return S}function u(){o=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:u}}class h0 extends Dn{constructor(e,n,r,o,c,u,d,p,g,v=Hs){if(v!==Hs&&v!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Hs&&(r=Qr),r===void 0&&v===qs&&(r=Xs),super(null,o,c,u,d,p,v,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ui,this.minFilter=p!==void 0?p:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const p0=new Dn,Sm=new h0(1,1),m0=new i0,g0=new Dy,x0=new u0,Mm=[],wm=[],Em=new Float32Array(16),bm=new Float32Array(9),Tm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Mm[o];if(c===void 0&&(c=new Float32Array(o),Mm[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Fl(s,e){let n=wm[e];n===void 0&&(n=new Int32Array(e),wm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Y1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function $1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function K1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function Z1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function Q1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Tm.set(r),s.uniformMatrix2fv(this.addr,!1,Tm),Zt(n,r)}}function J1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;bm.set(r),s.uniformMatrix3fv(this.addr,!1,bm),Zt(n,r)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),Zt(n,r)}}function tM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function sM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function cM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Sm.compareFunction=e0,c=Sm):c=p0,n.setTexture2D(e||c,o)}function uM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||g0,o)}function dM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||x0,o)}function fM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||m0,o)}function hM(s){switch(s){case 5126:return Y1;case 35664:return $1;case 35665:return K1;case 35666:return Z1;case 35674:return Q1;case 35675:return J1;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return fM}}function pM(s,e){s.uniform1fv(this.addr,e)}function mM(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function gM(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function xM(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function vM(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function yM(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function _M(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function SM(s,e){s.uniform1iv(this.addr,e)}function MM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function EM(s,e){s.uniform4iv(this.addr,e)}function bM(s,e){s.uniform1uiv(this.addr,e)}function TM(s,e){s.uniform2uiv(this.addr,e)}function AM(s,e){s.uniform3uiv(this.addr,e)}function CM(s,e){s.uniform4uiv(this.addr,e)}function RM(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||p0,c[u])}function NM(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||g0,c[u])}function PM(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||x0,c[u])}function DM(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||m0,c[u])}function LM(s){switch(s){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return vM;case 35675:return yM;case 35676:return _M;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return wM;case 35669:case 35673:return EM;case 5125:return bM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return DM}}class IM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=hM(n.type)}}class kM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LM(n.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function FM(s,e,n){const r=s.name,o=r.length;for(Ku.lastIndex=0;;){const c=Ku.exec(r),u=Ku.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&u+2===o){Am(n,g===void 0?new IM(d,s,e):new kM(d,s,e));break}else{let S=n.map[d];S===void 0&&(S=new UM(d),Am(n,S)),n=S}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);FM(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Cm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const OM=37297;let zM=0;function BM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Rm=new ot;function HM(s){Mt._getMatrix(Rm,Mt.workingColorSpace,s);const e=`mat3( ${Rm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+BM(s.getShaderSource(e),u)}else return o}function jM(s,e){const n=HM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function VM(s,e){let n;switch(e){case sy:n="Linear";break;case ay:n="Reinhard";break;case oy:n="Cineon";break;case ly:n="ACESFilmic";break;case uy:n="AgX";break;case dy:n="Neutral";break;case cy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new $;function GM(){Mt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function XM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function qM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Fa(s){return s!==""}function Pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(YM,KM)}const $M=new Map;function KM(s,e){let n=lt[e];if(n===void 0){const r=$M.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wd(n)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(ZM,QM)}function QM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Im(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function ew(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function nw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case iy:e="ENVMAP_BLENDING_MIX";break;case ry:e="ENVMAP_BLENDING_ADD";break}return e}function iw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function rw(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=JM(n),g=ew(n),v=tw(n),S=nw(n),_=iw(n),M=WM(n),b=XM(c),E=o.createProgram();let y,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Fa).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Fa).join(`
`),x.length>0&&(x+=`
`)):(y=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),x=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?lt.tonemapping_pars_fragment:"",n.toneMapping!==Sr?VM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,jM("linearToOutputTexel",n.outputColorSpace),GM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),u=Wd(u),u=Pm(u,n),u=Dm(u,n),d=Wd(d),d=Pm(d,n),d=Dm(d,n),u=Lm(u),d=Lm(d),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=P+y+u,A=P+x+d,j=Cm(o,o.VERTEX_SHADER,D),U=Cm(o,o.FRAGMENT_SHADER,A);o.attachShader(E,j),o.attachShader(E,U),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function k(z){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(E).trim(),J=o.getShaderInfoLog(j).trim(),de=o.getShaderInfoLog(U).trim();let he=!0,te=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,j,U);else{const le=Nm(o,j,"vertex"),H=Nm(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ae+`
`+le+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||de==="")&&(te=!1);te&&(z.diagnostics={runnable:he,programLog:ae,vertexShader:{log:J,prefix:y},fragmentShader:{log:de,prefix:x}})}o.deleteShader(j),o.deleteShader(U),O=new Cl(o,E),N=qM(o,E)}let O;this.getUniforms=function(){return O===void 0&&k(this),O};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,OM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=j,this.fragmentShader=U,this}let sw=0;class aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ow(e),n.set(e,r)),r}}class ow{constructor(e){this.id=sw++,this.code=e,this.usedTimes=0}}function lw(s,e,n,r,o,c,u){const d=new r0,p=new aw,g=new Set,v=[],S=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return g.add(N),N===0?"uv":`uv${N}`}function y(N,C,z,ae,J){const de=ae.fog,he=J.geometry,te=N.isMeshStandardMaterial?ae.environment:null,le=(N.isMeshStandardMaterial?n:e).get(N.envMap||te),H=le&&le.mapping===Il?le.image.height:null,ce=b[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,F=se!==void 0?se.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let Pe,Z,ue,Se;if(ce){const _t=xi[ce];Pe=_t.vertexShader,Z=_t.fragmentShader}else Pe=N.vertexShader,Z=N.fragmentShader,p.update(N),ue=p.getVertexShaderID(N),Se=p.getFragmentShaderID(N);const ye=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,Qe=J.isBatchedMesh===!0,Rt=!!N.map,pt=!!N.matcap,Lt=!!le,q=!!N.aoMap,mn=!!N.lightMap,ht=!!N.bumpMap,ut=!!N.normalMap,$e=!!N.displacementMap,At=!!N.emissiveMap,Ye=!!N.metalnessMap,L=!!N.roughnessMap,T=N.anisotropy>0,Q=N.clearcoat>0,me=N.dispersion>0,xe=N.iridescence>0,fe=N.sheen>0,Ve=N.transmission>0,Ae=T&&!!N.anisotropyMap,Ue=Q&&!!N.clearcoatMap,ct=Q&&!!N.clearcoatNormalMap,Me=Q&&!!N.clearcoatRoughnessMap,Oe=xe&&!!N.iridescenceMap,Je=xe&&!!N.iridescenceThicknessMap,et=fe&&!!N.sheenColorMap,ze=fe&&!!N.sheenRoughnessMap,dt=!!N.specularMap,rt=!!N.specularColorMap,Tt=!!N.specularIntensityMap,G=Ve&&!!N.transmissionMap,Ce=Ve&&!!N.thicknessMap,oe=!!N.gradientMap,pe=!!N.alphaMap,De=N.alphaTest>0,Ne=!!N.alphaHash,st=!!N.extensions;let kt=Sr;N.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Xt={shaderID:ce,shaderType:N.type,shaderName:N.name,vertexShader:Pe,fragmentShader:Z,defines:N.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Qe,batchingColor:Qe&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:$s,alphaToCoverage:!!N.alphaToCoverage,map:Rt,matcap:pt,envMap:Lt,envMapMode:Lt&&le.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:mn,bumpMap:ht,normalMap:ut,displacementMap:_&&$e,emissiveMap:At,normalMapObjectSpace:ut&&N.normalMapType===my,normalMapTangentSpace:ut&&N.normalMapType===Jg,metalnessMap:Ye,roughnessMap:L,anisotropy:T,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:me,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:fe,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:rt,specularIntensityMap:Tt,transmission:Ve,transmissionMap:G,thicknessMap:Ce,gradientMap:oe,opaque:N.transparent===!1&&N.blending===Bs&&N.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Ne,combine:N.combine,mapUv:Rt&&E(N.map.channel),aoMapUv:q&&E(N.aoMap.channel),lightMapUv:mn&&E(N.lightMap.channel),bumpMapUv:ht&&E(N.bumpMap.channel),normalMapUv:ut&&E(N.normalMap.channel),displacementMapUv:$e&&E(N.displacementMap.channel),emissiveMapUv:At&&E(N.emissiveMap.channel),metalnessMapUv:Ye&&E(N.metalnessMap.channel),roughnessMapUv:L&&E(N.roughnessMap.channel),anisotropyMapUv:Ae&&E(N.anisotropyMap.channel),clearcoatMapUv:Ue&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(N.sheenRoughnessMap.channel),specularMapUv:dt&&E(N.specularMap.channel),specularColorMapUv:rt&&E(N.specularColorMap.channel),specularIntensityMapUv:Tt&&E(N.specularIntensityMap.channel),transmissionMapUv:G&&E(N.transmissionMap.channel),thicknessMapUv:Ce&&E(N.thicknessMap.channel),alphaMapUv:pe&&E(N.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(Rt||pe),fog:!!de,useFog:N.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Te,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:Rt&&N.map.isVideoTexture===!0&&Mt.getTransfer(N.map.colorSpace)===Nt,decodeVideoTextureEmissive:At&&N.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(N.emissiveMap.colorSpace)===Nt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Bi,flipSided:N.side===Pn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:st&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&N.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Xt.vertexUv1s=g.has(1),Xt.vertexUv2s=g.has(2),Xt.vertexUv3s=g.has(3),g.clear(),Xt}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)C.push(z),C.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(P(C,N),D(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function P(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function D(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function A(N){const C=b[N.type];let z;if(C){const ae=xi[C];z=Wy.clone(ae.uniforms)}else z=N.uniforms;return z}function j(N,C){let z;for(let ae=0,J=v.length;ae<J;ae++){const de=v[ae];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new rw(s,C,N,c),v.push(z)),z}function U(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function k(N){p.remove(N)}function O(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:A,acquireProgram:j,releaseProgram:U,releaseShaderCache:k,programs:v,dispose:O}}function cw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function uw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(S,_,M,b,E,y){let x=s[e];return x===void 0?(x={id:S.id,object:S,geometry:_,material:M,groupOrder:b,renderOrder:S.renderOrder,z:E,group:y},s[e]=x):(x.id=S.id,x.object=S,x.geometry=_,x.material=M,x.groupOrder=b,x.renderOrder=S.renderOrder,x.z=E,x.group=y),e++,x}function d(S,_,M,b,E,y){const x=u(S,_,M,b,E,y);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function p(S,_,M,b,E,y){const x=u(S,_,M,b,E,y);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function g(S,_){n.length>1&&n.sort(S||uw),r.length>1&&r.sort(_||km),o.length>1&&o.sort(_||km)}function v(){for(let S=e,_=s.length;S<_;S++){const M=s[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:v,sort:g}}function dw(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Um,s.set(r,[u])):o>=c.length?(u=new Um,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function fw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new vt};break;case"SpotLight":n={position:new $,direction:new $,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function hw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let pw=0;function mw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gw(s){const e=new fw,n=hw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new $);const o=new $,c=new Ht,u=new Ht;function d(g){let v=0,S=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,E=0,y=0,x=0,P=0,D=0,A=0,j=0,U=0,k=0;g.sort(mw);for(let N=0,C=g.length;N<C;N++){const z=g[N],ae=z.color,J=z.intensity,de=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=ae.r*J,S+=ae.g*J,_+=ae.b*J;else if(z.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(z.sh.coefficients[te],J);k++}else if(z.isDirectionalLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=z.shadow.matrix,P++}r.directional[M]=te,M++}else if(z.isSpotLight){const te=e.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy(ae).multiplyScalar(J),te.distance=de,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,r.spot[E]=te;const le=z.shadow;if(z.map&&(r.spotLightMap[j]=z.map,j++,le.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[E]=le.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.spotShadow[E]=H,r.spotShadowMap[E]=he,A++}E++}else if(z.isRectAreaLight){const te=e.get(z);te.color.copy(ae).multiplyScalar(J),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=te,y++}else if(z.isPointLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),te.distance=z.distance,te.decay=z.decay,z.castShadow){const le=z.shadow,H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,H.shadowCameraNear=le.camera.near,H.shadowCameraFar=le.camera.far,r.pointShadow[b]=H,r.pointShadowMap[b]=he,r.pointShadowMatrix[b]=z.shadow.matrix,D++}r.point[b]=te,b++}else if(z.isHemisphereLight){const te=e.get(z);te.skyColor.copy(z.color).multiplyScalar(J),te.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[x]=te,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=_;const O=r.hash;(O.directionalLength!==M||O.pointLength!==b||O.spotLength!==E||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==P||O.numPointShadows!==D||O.numSpotShadows!==A||O.numSpotMaps!==j||O.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=A+j-U,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=k,O.directionalLength=M,O.pointLength=b,O.spotLength=E,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=P,O.numPointShadows=D,O.numSpotShadows=A,O.numSpotMaps=j,O.numLightProbes=k,r.version=pw++)}function p(g,v){let S=0,_=0,M=0,b=0,E=0;const y=v.matrixWorldInverse;for(let x=0,P=g.length;x<P;x++){const D=g[x];if(D.isDirectionalLight){const A=r.directional[S];A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),S++}else if(D.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),u.identity(),c.copy(D.matrixWorld),c.premultiply(y),u.extractRotation(c),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(y),E++}}}return{setup:d,setupView:p,state:r}}function Fm(s){const e=new gw(s),n=[],r=[];function o(v){g.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function xw(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Fm(s),e.set(o,[d])):c>=u.length?(d=new Fm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class vw extends Wa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yw extends Wa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mw(s,e,n){let r=new rf;const o=new xt,c=new xt,u=new Pt,d=new vw({depthPacking:py}),p=new yw,g={},v=n.maxTextureSize,S={[Mr]:Pn,[Pn]:Mr,[Bi]:Bi},_=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:_w,fragmentShader:Sw}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Er;b.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ci(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let x=this.type;this.render=function(U,k,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(_r),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=x!==zi&&this.type===zi,de=x===zi&&this.type!==zi;for(let he=0,te=U.length;he<te;he++){const le=U[he],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ce=H.getFrameExtents();if(o.multiply(ce),c.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/ce.x),o.x=c.x*ce.x,H.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/ce.y),o.y=c.y*ce.y,H.mapSize.y=c.y)),H.map===null||J===!0||de===!0){const F=this.type!==zi?{minFilter:ui,magFilter:ui}:{};H.map!==null&&H.map.dispose(),H.map=new Jr(o.x,o.y,F),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let F=0;F<se;F++){const ie=H.getViewport(F);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ae.viewport(u),H.updateMatrices(le,F),r=H.getFrustum(),A(k,O,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&P(H,O),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(N,C,z)};function P(U,k){const O=e.update(E);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Jr(o.x,o.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(k,null,O,_,E,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(k,null,O,M,E,null)}function D(U,k,O,N){let C=null;const z=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)C=z;else if(C=O.isPointLight===!0?p:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ae=C.uuid,J=k.uuid;let de=g[ae];de===void 0&&(de={},g[ae]=de);let he=de[J];he===void 0&&(he=C.clone(),de[J]=he,k.addEventListener("dispose",j)),C=he}if(C.visible=k.visible,C.wireframe=k.wireframe,N===zi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:S[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=O}return C}function A(U,k,O,N,C){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===zi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const J=e.update(U),de=U.material;if(Array.isArray(de)){const he=J.groups;for(let te=0,le=he.length;te<le;te++){const H=he[te],ce=de[H.materialIndex];if(ce&&ce.visible){const se=D(U,ce,N,C);U.onBeforeShadow(s,U,k,O,J,se,H),s.renderBufferDirect(O,null,J,se,U,H),U.onAfterShadow(s,U,k,O,J,se,H)}}}else if(de.visible){const he=D(U,de,N,C);U.onBeforeShadow(s,U,k,O,J,he,null),s.renderBufferDirect(O,null,J,he,U,null),U.onAfterShadow(s,U,k,O,J,he,null)}}const ae=U.children;for(let J=0,de=ae.length;J<de;J++)A(ae[J],k,O,N,C)}function j(U){U.target.removeEventListener("dispose",j);for(const O in g){const N=g[O],C=U.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const ww={[od]:ld,[cd]:fd,[ud]:hd,[Vs]:dd,[ld]:od,[fd]:cd,[hd]:ud,[dd]:Vs};function Ew(s,e){function n(){let G=!1;const Ce=new Pt;let oe=null;const pe=new Pt(0,0,0,0);return{setMask:function(De){oe!==De&&!G&&(s.colorMask(De,De,De,De),oe=De)},setLocked:function(De){G=De},setClear:function(De,Ne,st,kt,Xt){Xt===!0&&(De*=kt,Ne*=kt,st*=kt),Ce.set(De,Ne,st,kt),pe.equals(Ce)===!1&&(s.clearColor(De,Ne,st,kt),pe.copy(Ce))},reset:function(){G=!1,oe=null,pe.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,oe=null,pe=null,De=null;return{setReversed:function(Ne){if(Ce!==Ne){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const kt=De;De=null,this.setClear(kt)}Ce=Ne},getReversed:function(){return Ce},setTest:function(Ne){Ne?ye(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Ne){oe!==Ne&&!G&&(s.depthMask(Ne),oe=Ne)},setFunc:function(Ne){if(Ce&&(Ne=ww[Ne]),pe!==Ne){switch(Ne){case od:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case dd:s.depthFunc(s.GEQUAL);break;case fd:s.depthFunc(s.GREATER);break;case hd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){De!==Ne&&(Ce&&(Ne=1-Ne),s.clearDepth(Ne),De=Ne)},reset:function(){G=!1,oe=null,pe=null,De=null,Ce=!1}}}function o(){let G=!1,Ce=null,oe=null,pe=null,De=null,Ne=null,st=null,kt=null,Xt=null;return{setTest:function(_t){G||(_t?ye(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(_t){Ce!==_t&&!G&&(s.stencilMask(_t),Ce=_t)},setFunc:function(_t,Mn,gn){(oe!==_t||pe!==Mn||De!==gn)&&(s.stencilFunc(_t,Mn,gn),oe=_t,pe=Mn,De=gn)},setOp:function(_t,Mn,gn){(Ne!==_t||st!==Mn||kt!==gn)&&(s.stencilOp(_t,Mn,gn),Ne=_t,st=Mn,kt=gn)},setLocked:function(_t){G=_t},setClear:function(_t){Xt!==_t&&(s.clearStencil(_t),Xt=_t)},reset:function(){G=!1,Ce=null,oe=null,pe=null,De=null,Ne=null,st=null,kt=null,Xt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,g=new WeakMap;let v={},S={},_=new WeakMap,M=[],b=null,E=!1,y=null,x=null,P=null,D=null,A=null,j=null,U=null,k=new vt(0,0,0),O=0,N=!1,C=null,z=null,ae=null,J=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,le=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(H)[1]),te=le>=1):H.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),te=le>=2);let ce=null,se={};const F=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Pe=new Pt().fromArray(F),Z=new Pt().fromArray(ie);function ue(G,Ce,oe,pe){const De=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(G,Ne),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<oe;st++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ne}const Se={};Se[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(s.DEPTH_TEST),u.setFunc(Vs),ht(!1),ut(Hp),ye(s.CULL_FACE),q(_r);function ye(G){v[G]!==!0&&(s.enable(G),v[G]=!0)}function Te(G){v[G]!==!1&&(s.disable(G),v[G]=!1)}function ke(G,Ce){return S[G]!==Ce?(s.bindFramebuffer(G,Ce),S[G]=Ce,G===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(G,Ce){let oe=M,pe=!1;if(G){oe=_.get(Ce),oe===void 0&&(oe=[],_.set(Ce,oe));const De=G.textures;if(oe.length!==De.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,st=De.length;Ne<st;Ne++)oe[Ne]=s.COLOR_ATTACHMENT0+Ne;oe.length=De.length,pe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,pe=!0);pe&&s.drawBuffers(oe)}function Rt(G){return b!==G?(s.useProgram(G),b=G,!0):!1}const pt={[Yr]:s.FUNC_ADD,[Bv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};pt[jv]=s.MIN,pt[Vv]=s.MAX;const Lt={[Gv]:s.ZERO,[Wv]:s.ONE,[Xv]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Kv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[Zv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[Jv]:s.CONSTANT_COLOR,[ey]:s.ONE_MINUS_CONSTANT_COLOR,[ty]:s.CONSTANT_ALPHA,[ny]:s.ONE_MINUS_CONSTANT_ALPHA};function q(G,Ce,oe,pe,De,Ne,st,kt,Xt,_t){if(G===_r){E===!0&&(Te(s.BLEND),E=!1);return}if(E===!1&&(ye(s.BLEND),E=!0),G!==zv){if(G!==y||_t!==N){if((x!==Yr||A!==Yr)&&(s.blendEquation(s.FUNC_ADD),x=Yr,A=Yr),_t)switch(G){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,D=null,j=null,U=null,k.set(0,0,0),O=0,y=G,N=_t}return}De=De||Ce,Ne=Ne||oe,st=st||pe,(Ce!==x||De!==A)&&(s.blendEquationSeparate(pt[Ce],pt[De]),x=Ce,A=De),(oe!==P||pe!==D||Ne!==j||st!==U)&&(s.blendFuncSeparate(Lt[oe],Lt[pe],Lt[Ne],Lt[st]),P=oe,D=pe,j=Ne,U=st),(kt.equals(k)===!1||Xt!==O)&&(s.blendColor(kt.r,kt.g,kt.b,Xt),k.copy(kt),O=Xt),y=G,N=!1}function mn(G,Ce){G.side===Bi?Te(s.CULL_FACE):ye(s.CULL_FACE);let oe=G.side===Pn;Ce&&(oe=!oe),ht(oe),G.blending===Bs&&G.transparent===!1?q(_r):q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const pe=G.stencilWrite;d.setTest(pe),pe&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ut(G){G!==Uv?(ye(s.CULL_FACE),G!==z&&(G===Hp?s.cullFace(s.BACK):G===Fv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),z=G}function $e(G){G!==ae&&(te&&s.lineWidth(G),ae=G)}function At(G,Ce,oe){G?(ye(s.POLYGON_OFFSET_FILL),(J!==Ce||de!==oe)&&(s.polygonOffset(Ce,oe),J=Ce,de=oe)):Te(s.POLYGON_OFFSET_FILL)}function Ye(G){G?ye(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+he-1),ce!==G&&(s.activeTexture(G),ce=G)}function T(G,Ce,oe){oe===void 0&&(ce===null?oe=s.TEXTURE0+he-1:oe=ce);let pe=se[oe];pe===void 0&&(pe={type:void 0,texture:void 0},se[oe]=pe),(pe.type!==G||pe.texture!==Ce)&&(ce!==oe&&(s.activeTexture(oe),ce=oe),s.bindTexture(G,Ce||Se[G]),pe.type=G,pe.texture=Ce)}function Q(){const G=se[ce];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Pe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function ze(G){Z.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function dt(G,Ce){let oe=g.get(Ce);oe===void 0&&(oe=new WeakMap,g.set(Ce,oe));let pe=oe.get(G);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,G.name),oe.set(G,pe))}function rt(G,Ce){const pe=g.get(Ce).get(G);p.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,G.__bindingPointIndex),p.set(Ce,pe))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ce=null,se={},S={},_=new WeakMap,M=[],b=null,E=!1,y=null,x=null,P=null,D=null,A=null,j=null,U=null,k=new vt(0,0,0),O=0,N=!1,C=null,z=null,ae=null,J=null,de=null,Pe.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ye,disable:Te,bindFramebuffer:ke,drawBuffers:Qe,useProgram:Rt,setBlending:q,setMaterial:mn,setFlipSided:ht,setCullFace:ut,setLineWidth:$e,setPolygonOffset:At,setScissorTest:Ye,activeTexture:L,bindTexture:T,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:et,viewport:ze,reset:Tt}}function Om(s,e,n,r){const o=bw(r);switch(n){case Xg:return s*e;case Yg:return s*e;case $g:return s*e*2;case Kg:return s*e/o.components*o.byteLength;case Qd:return s*e/o.components*o.byteLength;case Zg:return s*e*2/o.components*o.byteLength;case Jd:return s*e*2/o.components*o.byteLength;case qg:return s*e*3/o.components*o.byteLength;case li:return s*e*4/o.components*o.byteLength;case ef:return s*e*4/o.components*o.byteLength;case wl:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case _d:return Math.max(s,8)*Math.max(e,8)/2;case Md:case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case zd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qg:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bw(s){switch(s){case Gi:case Vg:return{byteLength:1,components:1};case Ba:case Gg:case Ha:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case Qr:case $d:case Hi:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Tw(s,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new xt,v=new WeakMap;let S;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return M?new OffscreenCanvas(L,T):Dl("canvas")}function E(L,T,Q){let me=1;const xe=Ye(L);if((xe.width>Q||xe.height>Q)&&(me=Q/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(me*xe.width),Ve=Math.floor(me*xe.height);S===void 0&&(S=b(fe,Ve));const Ae=T?b(fe,Ve):S;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(L,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,T,Q,me,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===s.RED&&(Q===s.FLOAT&&(fe=s.R32F),Q===s.HALF_FLOAT&&(fe=s.R16F),Q===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.R8UI),Q===s.UNSIGNED_SHORT&&(fe=s.R16UI),Q===s.UNSIGNED_INT&&(fe=s.R32UI),Q===s.BYTE&&(fe=s.R8I),Q===s.SHORT&&(fe=s.R16I),Q===s.INT&&(fe=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(fe=s.RG32F),Q===s.HALF_FLOAT&&(fe=s.RG16F),Q===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Q===s.UNSIGNED_INT&&(fe=s.RG32UI),Q===s.BYTE&&(fe=s.RG8I),Q===s.SHORT&&(fe=s.RG16I),Q===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Q===s.UNSIGNED_INT&&(fe=s.RGB32UI),Q===s.BYTE&&(fe=s.RGB8I),Q===s.SHORT&&(fe=s.RGB16I),Q===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Q===s.BYTE&&(fe=s.RGBA8I),Q===s.SHORT&&(fe=s.RGBA16I),Q===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const Ve=xe?kl:Mt.getTransfer(me);Q===s.FLOAT&&(fe=s.RGBA32F),Q===s.HALF_FLOAT&&(fe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(fe=Ve===Nt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(L,T){let Q;return L?T===null||T===Qr||T===Xs?Q=s.DEPTH24_STENCIL8:T===Hi?Q=s.DEPTH32F_STENCIL8:T===Ba&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qr||T===Xs?Q=s.DEPTH_COMPONENT24:T===Hi?Q=s.DEPTH_COMPONENT32F:T===Ba&&(Q=s.DEPTH_COMPONENT16),Q}function j(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function U(L){const T=L.target;T.removeEventListener("dispose",U),O(T),T.isVideoTexture&&v.delete(T)}function k(L){const T=L.target;T.removeEventListener("dispose",k),C(T)}function O(L){const T=r.get(L);if(T.__webglInit===void 0)return;const Q=L.source,me=_.get(Q);if(me){const xe=me[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&N(L),Object.keys(me).length===0&&_.delete(Q)}r.remove(L)}function N(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const Q=L.source,me=_.get(Q);delete me[T.__cacheKey],u.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let xe=0;xe<T.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(T.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=L.textures;for(let me=0,xe=Q.length;me<xe;me++){const fe=r.get(Q[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Q[me])}r.remove(L)}let z=0;function ae(){z=0}function J(){const L=z;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),z+=1,L}function de(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function he(L,T){const Q=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,L,T);return}}n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function te(L,T){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function le(L,T){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,T);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function H(L,T){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){ue(Q,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const ce={[gd]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[xd]:s.MIRRORED_REPEAT},se={[ui]:s.NEAREST,[fy]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},F={[gy]:s.NEVER,[My]:s.ALWAYS,[xy]:s.LESS,[e0]:s.LEQUAL,[vy]:s.EQUAL,[Sy]:s.GEQUAL,[yy]:s.GREATER,[_y]:s.NOTEQUAL};function ie(L,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===Mu||T.magFilter===tl||T.magFilter===Zr||T.minFilter===vi||T.minFilter===Mu||T.minFilter===tl||T.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ce[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==tl&&T.minFilter!==Zr||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Pe(L,T){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",U));const me=T.source;let xe=_.get(me);xe===void 0&&(xe={},_.set(me,xe));const fe=de(T);if(fe!==L.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),xe[fe].usedTimes++;const Ve=xe[L.__cacheKey];Ve!==void 0&&(xe[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&N(T)),L.__cacheKey=fe,L.__webglTexture=xe[fe].texture}return Q}function Z(L,T,Q){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const xe=Pe(L,T),fe=T.source;n.bindTexture(me,L.__webglTexture,s.TEXTURE0+Q);const Ve=r.get(fe);if(fe.version!==Ve.__version||xe===!0){n.activeTexture(s.TEXTURE0+Q);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ue=T.colorSpace===vr?null:Mt.getPrimaries(T.colorSpace),ct=T.colorSpace===vr||Ae===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=E(T.image,!1,o.maxTextureSize);Me=At(T,Me);const Oe=c.convert(T.format,T.colorSpace),Je=c.convert(T.type);let et=D(T.internalFormat,Oe,Je,T.colorSpace,T.isVideoTexture);ie(me,T);let ze;const dt=T.mipmaps,rt=T.isVideoTexture!==!0,Tt=Ve.__version===void 0||xe===!0,G=fe.dataReady,Ce=j(T,Me);if(T.isDepthTexture)et=A(T.format===qs,T.type),Tt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,Oe,Je,null));else if(T.isDataTexture)if(dt.length>0){rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let oe=0,pe=dt.length;oe<pe;oe++)ze=dt[oe],rt?G&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Oe,Je,ze.data):n.texImage2D(s.TEXTURE_2D,oe,et,ze.width,ze.height,0,Oe,Je,ze.data);T.generateMipmaps=!1}else rt?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,et,Me.width,Me.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,Je,Me.data)):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,Oe,Je,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,dt[0].width,dt[0].height,Me.depth);for(let oe=0,pe=dt.length;oe<pe;oe++)if(ze=dt[oe],T.format!==li)if(Oe!==null)if(rt){if(G)if(T.layerUpdates.size>0){const De=Om(ze.width,ze.height,T.format,T.type);for(const Ne of T.layerUpdates){const st=ze.data.subarray(Ne*De/ze.data.BYTES_PER_ELEMENT,(Ne+1)*De/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Ne,ze.width,ze.height,1,Oe,st)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Me.depth,Oe,ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,et,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Me.depth,Oe,Je,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,et,ze.width,ze.height,Me.depth,0,Oe,Je,ze.data)}else{rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,et,dt[0].width,dt[0].height);for(let oe=0,pe=dt.length;oe<pe;oe++)ze=dt[oe],T.format!==li?Oe!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Oe,Je,ze.data):n.texImage2D(s.TEXTURE_2D,oe,et,ze.width,ze.height,0,Oe,Je,ze.data)}else if(T.isDataArrayTexture)if(rt){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,Me.width,Me.height,Me.depth),G)if(T.layerUpdates.size>0){const oe=Om(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const De=Me.data.subarray(pe*oe/Me.data.BYTES_PER_ELEMENT,(pe+1)*oe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,Je,De)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Je,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Oe,Je,Me.data);else if(T.isData3DTexture)rt?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ce,et,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Je,Me.data)):n.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Oe,Je,Me.data);else if(T.isFramebufferTexture){if(Tt)if(rt)n.texStorage2D(s.TEXTURE_2D,Ce,et,Me.width,Me.height);else{let oe=Me.width,pe=Me.height;for(let De=0;De<Ce;De++)n.texImage2D(s.TEXTURE_2D,De,et,oe,pe,0,Oe,Je,null),oe>>=1,pe>>=1}}else if(dt.length>0){if(rt&&Tt){const oe=Ye(dt[0]);n.texStorage2D(s.TEXTURE_2D,Ce,et,oe.width,oe.height)}for(let oe=0,pe=dt.length;oe<pe;oe++)ze=dt[oe],rt?G&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Je,ze):n.texImage2D(s.TEXTURE_2D,oe,et,Oe,Je,ze);T.generateMipmaps=!1}else if(rt){if(Tt){const oe=Ye(Me);n.texStorage2D(s.TEXTURE_2D,Ce,et,oe.width,oe.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Je,Me)}else n.texImage2D(s.TEXTURE_2D,0,et,Oe,Je,Me);y(T)&&x(me),Ve.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ue(L,T,Q){if(T.image.length!==6)return;const me=Pe(L,T),xe=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const fe=r.get(xe);if(xe.version!==fe.__version||me===!0){n.activeTexture(s.TEXTURE0+Q);const Ve=Mt.getPrimaries(Mt.workingColorSpace),Ae=T.colorSpace===vr?null:Mt.getPrimaries(T.colorSpace),Ue=T.colorSpace===vr||Ve===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ct=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!ct&&!Me?Oe[pe]=E(T.image[pe],!0,o.maxCubemapSize):Oe[pe]=Me?T.image[pe].image:T.image[pe],Oe[pe]=At(T,Oe[pe]);const Je=Oe[0],et=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),dt=D(T.internalFormat,et,ze,T.colorSpace),rt=T.isVideoTexture!==!0,Tt=fe.__version===void 0||me===!0,G=xe.dataReady;let Ce=j(T,Je);ie(s.TEXTURE_CUBE_MAP,T);let oe;if(ct){rt&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,Je.width,Je.height);for(let pe=0;pe<6;pe++){oe=Oe[pe].mipmaps;for(let De=0;De<oe.length;De++){const Ne=oe[De];T.format!==li?et!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Ne.width,Ne.height,et,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Ne.width,Ne.height,et,ze,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,dt,Ne.width,Ne.height,0,et,ze,Ne.data)}}}else{if(oe=T.mipmaps,rt&&Tt){oe.length>0&&Ce++;const pe=Ye(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,et,ze,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Oe[pe].width,Oe[pe].height,0,et,ze,Oe[pe].data);for(let De=0;De<oe.length;De++){const st=oe[De].image[pe].image;rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,st.width,st.height,et,ze,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,dt,st.width,st.height,0,et,ze,st.data)}}else{rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ze,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,et,ze,Oe[pe]);for(let De=0;De<oe.length;De++){const Ne=oe[De];rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,et,ze,Ne.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,dt,et,ze,Ne.image[pe])}}}y(T)&&x(s.TEXTURE_CUBE_MAP),fe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Se(L,T,Q,me,xe,fe){const Ve=c.convert(Q.format,Q.colorSpace),Ae=c.convert(Q.type),Ue=D(Q.internalFormat,Ve,Ae,Q.colorSpace),ct=r.get(T),Me=r.get(Q);if(Me.__renderTarget=T,!ct.__hasExternalTextures){const Oe=Math.max(1,T.width>>fe),Je=Math.max(1,T.height>>fe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,fe,Ue,Oe,Je,T.depth,0,Ve,Ae,null):n.texImage2D(xe,fe,Ue,Oe,Je,0,Ve,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,ht(T)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(L,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const me=T.depthTexture,xe=me&&me.isDepthTexture?me.type:null,fe=A(T.stencilBuffer,xe),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ht(T);ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,L)}else{const me=T.textures;for(let xe=0;xe<me.length;xe++){const fe=me[xe],Ve=c.convert(fe.format,fe.colorSpace),Ae=c.convert(fe.type),Ue=D(fe.internalFormat,Ve,Ae,fe.colorSpace),ct=ht(T);Q&&ut(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ue,T.width,T.height):ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const xe=me.__webglTexture,fe=ht(T);if(T.depthTexture.format===Hs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(T.depthTexture.format===qs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ke(L){const T=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,L)}else if(Q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),ye(T.__webglDepthbuffer[me],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ye(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(L,T,Q){const me=r.get(L);T!==void 0&&Se(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ke(L)}function Rt(L){const T=L.texture,Q=r.get(L),me=r.get(T);L.addEventListener("dispose",k);const xe=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ve=xe.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,u.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)Q.__webglFramebuffer[Ae][Ue]=s.createFramebuffer()}else Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ae=0,Ue=xe.length;Ae<Ue;Ae++){const ct=r.get(xe[Ae]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&ut(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Ue=xe[Ae];Q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const ct=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Oe=D(Ue.internalFormat,ct,Me,Ue.colorSpace,L.isXRRenderTarget===!0),Je=ht(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Oe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Se(Q.__webglFramebuffer[Ae][Ue],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Se(Q.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ae=0,Ue=xe.length;Ae<Ue;Ae++){const ct=xe[Ae],Me=r.get(ct);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ie(s.TEXTURE_2D,ct),Se(Q.__webglFramebuffer,L,ct,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(ct)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,me.__webglTexture),ie(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Se(Q.__webglFramebuffer[Ue],L,T,s.COLOR_ATTACHMENT0,Ae,Ue);else Se(Q.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);y(T)&&x(Ae),n.unbindTexture()}L.depthBuffer&&ke(L)}function pt(L){const T=L.textures;for(let Q=0,me=T.length;Q<me;Q++){const xe=T[Q];if(y(xe)){const fe=P(L),Ve=r.get(xe).__webglTexture;n.bindTexture(fe,Ve),x(fe),n.unbindTexture()}}}const Lt=[],q=[];function mn(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,Q=L.width,me=L.height;let xe=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(L),Ae=T.length>1;if(Ae)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ct=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,xe,s.NEAREST),p===!0&&(Lt.length=0,q.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Lt.push(fe),q.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ct=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(L){return Math.min(o.maxSamples,L.samples)}function ut(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(L){const T=u.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function At(L,T){const Q=L.colorSpace,me=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==$s&&Q!==vr&&(Mt.getTransfer(Q)===Nt?(me!==li||xe!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=H,this.rebindTextures=Qe,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function Aw(s,e){function n(r,o=vr){let c;const u=Mt.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Wg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Vg)return s.BYTE;if(r===Gg)return s.SHORT;if(r===Ba)return s.UNSIGNED_SHORT;if(r===$d)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Ha)return s.HALF_FLOAT;if(r===Xg)return s.ALPHA;if(r===qg)return s.RGB;if(r===li)return s.RGBA;if(r===Yg)return s.LUMINANCE;if(r===$g)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===Kg)return s.RED;if(r===Qd)return s.RED_INTEGER;if(r===Zg)return s.RG;if(r===Jd)return s.RG_INTEGER;if(r===ef)return s.RGBA_INTEGER;if(r===wl||r===El||r===bl||r===Tl)if(u===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===yd||r===_d||r===Sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===wd||r===Ed)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Md||r===wd)return u===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ed)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bd||r===Td||r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Dd||r===Ld||r===Id||r===kd||r===Ud||r===Fd||r===Od)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===bd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Td)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ud)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Al)return u===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qg||r===Hd||r===jd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Al)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class Cw extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ml extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rw={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const E of e.hand.values()){const y=n.getJointPose(E,r),x=this._getHandJoint(g,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=g.joints["index-finger-tip"],S=g.joints["thumb-tip"],_=v.position.distanceTo(S.position),M=.02,b=.005;g.inputState.pinching&&_>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Dn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:Nw,fragmentShader:Pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new Ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lw extends Ks{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,g=null,v=null,S=null,_=null,M=null,b=null;const E=new Dw,y=n.getContextAttributes();let x=null,P=null;const D=[],A=[],j=new xt;let U=null;const k=new zn;k.viewport=new Pt;const O=new zn;O.viewport=new Pt;const N=[k,O],C=new Cw;let z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=D[Z];return ue===void 0&&(ue=new Zu,D[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=D[Z];return ue===void 0&&(ue=new Zu,D[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=D[Z];return ue===void 0&&(ue=new Zu,D[Z]=ue),ue.getHandSpace()};function J(Z){const ue=A.indexOf(Z.inputSource);if(ue===-1)return;const Se=D[ue];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,g||u),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",he);for(let Z=0;Z<D.length;Z++){const ue=A[Z];ue!==null&&(A[Z]=null,D[Z].disconnect(ue))}z=null,ae=null,E.reset(),e.setRenderTarget(x),M=null,_=null,S=null,o=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(Z){g=Z},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",de),o.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(j),o.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ue),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Jr(M.framebufferWidth,M.framebufferHeight,{format:li,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Se=null,ye=null;y.depth&&(ye=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=y.stencil?qs:Hs,Se=y.stencil?Xs:Qr);const Te={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:c};S=new XRWebGLBinding(o,n),_=S.createProjectionLayer(Te),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Jr(_.textureWidth,_.textureHeight,{format:li,type:Gi,depthTexture:new h0(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(d),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(Z){for(let ue=0;ue<Z.removed.length;ue++){const Se=Z.removed[ue],ye=A.indexOf(Se);ye>=0&&(A[ye]=null,D[ye].disconnect(Se))}for(let ue=0;ue<Z.added.length;ue++){const Se=Z.added[ue];let ye=A.indexOf(Se);if(ye===-1){for(let ke=0;ke<D.length;ke++)if(ke>=A.length){A.push(Se),ye=ke;break}else if(A[ke]===null){A[ke]=Se,ye=ke;break}if(ye===-1)break}const Te=D[ye];Te&&Te.connect(Se)}}const te=new $,le=new $;function H(Z,ue,Se){te.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ye=te.distanceTo(le),Te=ue.projectionMatrix.elements,ke=Se.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Lt=(Te[9]-1)/Te[5],q=(Te[8]-1)/Te[0],mn=(ke[8]+1)/ke[0],ht=Qe*q,ut=Qe*mn,$e=ye/(-q+mn),At=$e*-q;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ($e),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=Qe+$e,L=Rt+$e,T=ht-At,Q=ut+(ye-At),me=pt*Rt/L*Ye,xe=Lt*Rt/L*Ye;Z.projectionMatrix.makePerspective(T,Q,me,xe,Ye,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ue=Z.near,Se=Z.far;E.texture!==null&&(E.depthNear>0&&(ue=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),C.near=O.near=k.near=ue,C.far=O.far=k.far=Se,(z!==C.near||ae!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ae=C.far),k.layers.mask=Z.layers.mask|2,O.layers.mask=Z.layers.mask|4,C.layers.mask=k.layers.mask|O.layers.mask;const ye=Z.parent,Te=C.cameras;ce(C,ye);for(let ke=0;ke<Te.length;ke++)ce(Te[ke],ye);Te.length===2?H(C,k,O):C.projectionMatrix.copy(k.projectionMatrix),se(Z,C,ye)};function se(Z,ue,Se){Se===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(Z){p=Z,_!==null&&(_.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let F=null;function ie(Z,ue){if(v=ue.getViewerPose(g||u),b=ue,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ye=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let ke=0;ke<Se.length;ke++){const Qe=Se[ke];let Rt=null;if(M!==null)Rt=M.getViewport(Qe);else{const Lt=S.getViewSubImage(_,Qe);Rt=Lt.viewport,ke===0&&(e.setRenderTargetTextures(P,Lt.colorTexture,_.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(P))}let pt=N[ke];pt===void 0&&(pt=new zn,pt.layers.enable(ke),pt.viewport=new Pt,N[ke]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ke===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(pt)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const ke=S.getDepthInformation(Se[0]);ke&&ke.isValid&&ke.texture&&E.init(e,ke,o.renderState)}}for(let Se=0;Se<D.length;Se++){const ye=A[Se],Te=D[Se];ye!==null&&Te!==void 0&&Te.update(ye,ue,g||u)}F&&F(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),b=null}const Pe=new d0;Pe.setAnimationLoop(ie),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const Wr=new Si,Iw=new Ht;function kw(s,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,l0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,P,D,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,A)):x.isMeshMatcapMaterial?(c(y,x),b(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),E(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?p(y,x,P,D):x.isSpriteMaterial?g(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Pn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Pn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=e.get(x),D=P.envMap,A=P.envMapRotation;D&&(y.envMap.value=D,Wr.copy(A),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(Wr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,P,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=D*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Pn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const P=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Uw(s,e,n,r){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,D){const A=D.program;r.uniformBlockBinding(P,A)}function g(P,D){let A=o[P.id];A===void 0&&(b(P),A=v(P),o[P.id]=A,P.addEventListener("dispose",y));const j=D.program;r.updateUBOMapping(P,j);const U=e.render.frame;c[P.id]!==U&&(_(P),c[P.id]=U)}function v(P){const D=S();P.__bindingPointIndex=D;const A=s.createBuffer(),j=P.__size,U=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,j,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,A),A}function S(){for(let P=0;P<d;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const D=o[P.id],A=P.uniforms,j=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let U=0,k=A.length;U<k;U++){const O=Array.isArray(A[U])?A[U]:[A[U]];for(let N=0,C=O.length;N<C;N++){const z=O[N];if(M(z,U,N,j)===!0){const ae=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let he=0;he<J.length;he++){const te=J[he],le=E(te);typeof te=="number"||typeof te=="boolean"?(z.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,ae+de,z.__data)):te.isMatrix3?(z.__data[0]=te.elements[0],z.__data[1]=te.elements[1],z.__data[2]=te.elements[2],z.__data[3]=0,z.__data[4]=te.elements[3],z.__data[5]=te.elements[4],z.__data[6]=te.elements[5],z.__data[7]=0,z.__data[8]=te.elements[6],z.__data[9]=te.elements[7],z.__data[10]=te.elements[8],z.__data[11]=0):(te.toArray(z.__data,de),de+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,D,A,j){const U=P.value,k=D+"_"+A;if(j[k]===void 0)return typeof U=="number"||typeof U=="boolean"?j[k]=U:j[k]=U.clone(),!0;{const O=j[k];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return j[k]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function b(P){const D=P.uniforms;let A=0;const j=16;for(let k=0,O=D.length;k<O;k++){const N=Array.isArray(D[k])?D[k]:[D[k]];for(let C=0,z=N.length;C<z;C++){const ae=N[C],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let de=0,he=J.length;de<he;de++){const te=J[de],le=E(te),H=A%j,ce=H%le.boundary,se=H+ce;A+=ce,se!==0&&j-se<le.storage&&(A+=j-se),ae.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=le.storage}}}const U=A%j;return U>0&&(A+=j-U),P.__size=A,P.__cache={},this}function E(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function y(P){const D=P.target;D.removeEventListener("dispose",y);const A=u.indexOf(D.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const P in o)s.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:p,update:g,dispose:x}}class Fw{constructor(e={}){const{canvas:n=Ey(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const b=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const P=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Sr,this.toneMappingExposure=1;const A=this;let j=!1,U=0,k=0,O=null,N=-1,C=null;const z=new Pt,ae=new Pt;let J=null;const de=new vt(0);let he=0,te=n.width,le=n.height,H=1,ce=null,se=null;const F=new Pt(0,0,te,le),ie=new Pt(0,0,te,le);let Pe=!1;const Z=new rf;let ue=!1,Se=!1;const ye=new Ht,Te=new Ht,ke=new $,Qe=new Pt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return O===null?H:1}let q=r;function mn(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),q===null){const W="webgl2";if(q=mn(W,R),q===null)throw mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,ut,$e,At,Ye,L,T,Q,me,xe,fe,Ve,Ae,Ue,ct,Me,Oe,Je,et,ze,dt,rt,Tt,G;function Ce(){ht=new j1(q),ht.init(),rt=new Aw(q,ht),ut=new U1(q,ht,e,rt),$e=new Ew(q,ht),ut.reverseDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),At=new W1(q),Ye=new cw,L=new Tw(q,ht,$e,Ye,ut,rt,At),T=new O1(A),Q=new H1(A),me=new Qy(q),Tt=new I1(q,me),xe=new V1(q,me,At,Tt),fe=new q1(q,xe,me,At),et=new X1(q,ut,L),Me=new F1(Ye),Ve=new lw(A,T,Q,ht,ut,Tt,Me),Ae=new kw(A,Ye),Ue=new dw,ct=new xw(ht),Je=new L1(A,T,Q,$e,fe,M,p),Oe=new Mw(A,fe,ut),G=new Uw(q,At,ut,$e),ze=new k1(q,ht,At),dt=new G1(q,ht,At),At.programs=Ve.programs,A.capabilities=ut,A.extensions=ht,A.properties=Ye,A.renderLists=Ue,A.shadowMap=Oe,A.state=$e,A.info=At}Ce();const oe=new Lw(A,q);this.xr=oe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(te,le,!1))},this.getSize=function(R){return R.set(te,le)},this.setSize=function(R,W,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,le=W,n.width=Math.floor(R*H),n.height=Math.floor(W*H),ne===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(te*H,le*H).floor()},this.setDrawingBufferSize=function(R,W,ne){te=R,le=W,H=ne,n.width=Math.floor(R*ne),n.height=Math.floor(W*ne),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,W,ne,re){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,W,ne,re),$e.viewport(z.copy(F).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,W,ne,re){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,W,ne,re),$e.scissor(ae.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){$e.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,W=!0,ne=!0){let re=0;if(R){let X=!1;if(O!==null){const be=O.texture.format;X=be===ef||be===Jd||be===Qd}if(X){const be=O.texture.type,we=be===Gi||be===Qr||be===Ba||be===Xs||be===Kd||be===Zd,Ge=Je.getClearColor(),He=Je.getClearAlpha(),tt=Ge.r,it=Ge.g,We=Ge.b;we?(b[0]=tt,b[1]=it,b[2]=We,b[3]=He,q.clearBufferuiv(q.COLOR,0,b)):(E[0]=tt,E[1]=it,E[2]=We,E[3]=He,q.clearBufferiv(q.COLOR,0,E))}else re|=q.COLOR_BUFFER_BIT}W&&(re|=q.DEPTH_BUFFER_BIT),ne&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ue.dispose(),ct.dispose(),Ye.dispose(),T.dispose(),Q.dispose(),fe.dispose(),Tt.dispose(),G.dispose(),Ve.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ts),oe.removeEventListener("sessionend",Wi),Mi.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const R=At.autoReset,W=Oe.enabled,ne=Oe.autoUpdate,re=Oe.needsUpdate,X=Oe.type;Ce(),At.autoReset=R,Oe.enabled=W,Oe.autoUpdate=ne,Oe.needsUpdate=re,Oe.type=X}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const W=R.target;W.removeEventListener("dispose",st),kt(W)}function kt(R){Xt(R),Ye.remove(R)}function Xt(R){const W=Ye.get(R).programs;W!==void 0&&(W.forEach(function(ne){Ve.releaseProgram(ne)}),R.isShaderMaterial&&Ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ne,re,X,be){W===null&&(W=Rt);const we=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Ka(R,W,ne,re,X);$e.setMaterial(re,we);let He=ne.index,tt=1;if(re.wireframe===!0){if(He=xe.getWireframeAttribute(ne),He===void 0)return;tt=2}const it=ne.drawRange,We=ne.attributes.position;let gt=it.start*tt,bt=(it.start+it.count)*tt;be!==null&&(gt=Math.max(gt,be.start*tt),bt=Math.min(bt,(be.start+be.count)*tt)),He!==null?(gt=Math.max(gt,0),bt=Math.min(bt,He.count)):We!=null&&(gt=Math.max(gt,0),bt=Math.min(bt,We.count));const mt=bt-gt;if(mt<0||mt===1/0)return;Tt.setup(X,re,Ge,ne,He);let sn,at=ze;if(He!==null&&(sn=me.get(He),at=dt,at.setIndex(sn)),X.isMesh)re.wireframe===!0?($e.setLineWidth(re.wireframeLinewidth*Lt()),at.setMode(q.LINES)):at.setMode(q.TRIANGLES);else if(X.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),$e.setLineWidth(qe*Lt()),X.isLineSegments?at.setMode(q.LINES):X.isLineLoop?at.setMode(q.LINE_LOOP):at.setMode(q.LINE_STRIP)}else X.isPoints?at.setMode(q.POINTS):X.isSprite&&at.setMode(q.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,Kn=X._multiDrawCounts,wt=X._multiDrawCount,an=He?me.get(He).bytesPerElement:1,Zn=Ye.get(re).currentProgram.getUniforms();for(let qt=0;qt<wt;qt++)Zn.setValue(q,"_gl_DrawID",qt),at.render(qe[qt]/an,Kn[qt])}else if(X.isInstancedMesh)at.renderInstances(gt,mt,X.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Kn=Math.min(ne.instanceCount,qe);at.renderInstances(gt,mt,Kn)}else at.render(gt,mt)};function _t(R,W,ne){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,ns(R,W,ne),R.side=Mr,R.needsUpdate=!0,ns(R,W,ne),R.side=Bi):ns(R,W,ne)}this.compile=function(R,W,ne=null){ne===null&&(ne=R),x=ct.get(ne),x.init(W),D.push(x),ne.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),R!==ne&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const re=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const be=X.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const Ge=be[we];_t(Ge,ne,X),re.add(Ge)}else _t(be,ne,X),re.add(be)}),D.pop(),x=null,re},this.compileAsync=function(R,W,ne=null){const re=this.compile(R,W,ne);return new Promise(X=>{function be(){if(re.forEach(function(we){Ye.get(we).currentProgram.isReady()&&re.delete(we)}),re.size===0){X(R);return}setTimeout(be,10)}ht.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Mn=null;function gn(R){Mn&&Mn(R)}function ts(){Mi.stop()}function Wi(){Mi.start()}const Mi=new d0;Mi.setAnimationLoop(gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Mn=R,oe.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},oe.addEventListener("sessionstart",ts),oe.addEventListener("sessionend",Wi),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,O),x=ct.get(R,D.length),x.init(W),D.push(x),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,Se),y=Ue.get(R,P.length),y.init(),P.push(y),oe.enabled===!0&&oe.isPresenting===!0){const be=A.xr.getDepthSensingMesh();be!==null&&wi(be,W,-1/0,A.sortObjects)}wi(R,W,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ce,se),pt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,pt&&Je.addToRenderList(y,R),this.info.render.frame++,ue===!0&&Me.beginShadows();const ne=x.state.shadowsArray;Oe.render(ne,R,W),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,X=y.transmissive;if(x.setupLights(),W.isArrayCamera){const be=W.cameras;if(X.length>0)for(let we=0,Ge=be.length;we<Ge;we++){const He=be[we];Tr(re,X,R,He)}pt&&Je.render(R);for(let we=0,Ge=be.length;we<Ge;we++){const He=be[we];br(y,R,He,He.viewport)}}else X.length>0&&Tr(re,X,R,W),pt&&Je.render(R),br(y,R,W);O!==null&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(A,R,W),Tt.resetDefaultState(),N=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],ue===!0&&Me.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function wi(R,W,ne,re){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){re&&Qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Te);const we=fe.update(R),Ge=R.material;Ge.visible&&y.push(R,we,Ge,ne,Qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const we=fe.update(R),Ge=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qe.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Qe.copy(we.boundingSphere.center)),Qe.applyMatrix4(R.matrixWorld).applyMatrix4(Te)),Array.isArray(Ge)){const He=we.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],gt=Ge[We.materialIndex];gt&&gt.visible&&y.push(R,we,gt,ne,Qe.z,We)}}else Ge.visible&&y.push(R,we,Ge,ne,Qe.z,null)}}const be=R.children;for(let we=0,Ge=be.length;we<Ge;we++)wi(be[we],W,ne,re)}function br(R,W,ne,re){const X=R.opaque,be=R.transmissive,we=R.transparent;x.setupLightsView(ne),ue===!0&&Me.setGlobalState(A.clippingPlanes,ne),re&&$e.viewport(z.copy(re)),X.length>0&&Xi(X,W,ne),be.length>0&&Xi(be,W,ne),we.length>0&&Xi(we,W,ne),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Tr(R,W,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new Jr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ha:Gi,minFilter:Zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const be=x.state.transmissionRenderTarget[re.id],we=re.viewport||z;be.setSize(we.z,we.w);const Ge=A.getRenderTarget();A.setRenderTarget(be),A.getClearColor(de),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),pt&&Je.render(ne);const He=A.toneMapping;A.toneMapping=Sr;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),ue===!0&&Me.setGlobalState(A.clippingPlanes,re),Xi(R,ne,re),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,gt=W.length;We<gt;We++){const bt=W[We],mt=bt.object,sn=bt.geometry,at=bt.material,qe=bt.group;if(at.side===Bi&&mt.layers.test(re.layers)){const Kn=at.side;at.side=Pn,at.needsUpdate=!0,Ya(mt,ne,re,sn,at,qe),at.side=Kn,at.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}A.setRenderTarget(Ge),A.setClearColor(de,he),tt!==void 0&&(re.viewport=tt),A.toneMapping=He}function Xi(R,W,ne){const re=W.isScene===!0?W.overrideMaterial:null;for(let X=0,be=R.length;X<be;X++){const we=R[X],Ge=we.object,He=we.geometry,tt=re===null?we.material:re,it=we.group;Ge.layers.test(ne.layers)&&Ya(Ge,W,ne,He,tt,it)}}function Ya(R,W,ne,re,X,be){R.onBeforeRender(A,W,ne,re,X,be),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(A,W,ne,re,R,be),X.transparent===!0&&X.side===Bi&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,A.renderBufferDirect(ne,W,re,X,R,be),X.side=Mr,X.needsUpdate=!0,A.renderBufferDirect(ne,W,re,X,R,be),X.side=Bi):A.renderBufferDirect(ne,W,re,X,R,be),R.onAfterRender(A,W,ne,re,X,be)}function ns(R,W,ne){W.isScene!==!0&&(W=Rt);const re=Ye.get(R),X=x.state.lights,be=x.state.shadowsArray,we=X.state.version,Ge=Ve.getParameters(R,X.state,be,W,ne),He=Ve.getProgramCacheKey(Ge);let tt=re.programs;re.environment=R.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(R.isMeshStandardMaterial?Q:T).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",st),tt=new Map,re.programs=tt);let it=tt.get(He);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===we)return di(R,Ge),it}else Ge.uniforms=Ve.getUniforms(R),R.onBeforeCompile(Ge,A),it=Ve.acquireProgram(Ge,He),tt.set(He,it),re.uniforms=Ge.uniforms;const We=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Me.uniform),di(R,Ge),re.needsLights=Ol(R),re.lightsStateVersion=we,re.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function $a(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Cl.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function di(R,W){const ne=Ye.get(R);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function Ka(R,W,ne,re,X){W.isScene!==!0&&(W=Rt),L.resetTextureUnits();const be=W.fog,we=re.isMeshStandardMaterial?W.environment:null,Ge=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:$s,He=(re.isMeshStandardMaterial?Q:T).get(re.envMap||we),tt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,bt=!!ne.morphAttributes.color;let mt=Sr;re.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(mt=A.toneMapping);const sn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,at=sn!==void 0?sn.length:0,qe=Ye.get(re),Kn=x.state.lights;if(ue===!0&&(Se===!0||R!==C)){const xn=R===C&&re.id===N;Me.setState(re,R,xn)}let wt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Kn.state.version||qe.outputColorSpace!==Ge||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==He||re.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==gt||qe.morphColors!==bt||qe.toneMapping!==mt||qe.morphTargetsCount!==at)&&(wt=!0):(wt=!0,qe.__version=re.version);let an=qe.currentProgram;wt===!0&&(an=ns(re,W,X));let Zn=!1,qt=!1,fi=!1;const Dt=an.getUniforms(),Bn=qe.uniforms;if($e.useProgram(an.program)&&(Zn=!0,qt=!0,fi=!0),re.id!==N&&(N=re.id,qt=!0),Zn||C!==R){$e.buffers.depth.getReversed()?(ye.copy(R.projectionMatrix),Ty(ye),Ay(ye),Dt.setValue(q,"projectionMatrix",ye)):Dt.setValue(q,"projectionMatrix",R.projectionMatrix),Dt.setValue(q,"viewMatrix",R.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(q,ke.setFromMatrixPosition(R.matrixWorld)),ut.logarithmicDepthBuffer&&Dt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Dt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,qt=!0,fi=!0)}if(X.isSkinnedMesh){Dt.setOptional(q,X,"bindMatrix"),Dt.setOptional(q,X,"bindMatrixInverse");const xn=X.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Dt.setValue(q,"boneTexture",xn.boneTexture,L))}X.isBatchedMesh&&(Dt.setOptional(q,X,"batchingTexture"),Dt.setValue(q,"batchingTexture",X._matricesTexture,L),Dt.setOptional(q,X,"batchingIdTexture"),Dt.setValue(q,"batchingIdTexture",X._indirectTexture,L),Dt.setOptional(q,X,"batchingColorTexture"),X._colorsTexture!==null&&Dt.setValue(q,"batchingColorTexture",X._colorsTexture,L));const Ei=ne.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&et.update(X,ne,an),(qt||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Dt.setValue(q,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Bn.envMap.value=He,Bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),qt&&(Dt.setValue(q,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&Za(Bn,fi),be&&re.fog===!0&&Ae.refreshFogUniforms(Bn,be),Ae.refreshMaterialUniforms(Bn,re,H,le,x.state.transmissionRenderTarget[R.id]),Cl.upload(q,$a(qe),Bn,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Cl.upload(q,$a(qe),Bn,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Dt.setValue(q,"center",X.center),Dt.setValue(q,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(q,"normalMatrix",X.normalMatrix),Dt.setValue(q,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const xn=re.uniformsGroups;for(let Hn=0,wn=xn.length;Hn<wn;Hn++){const Qa=xn[Hn];G.update(Qa,an),G.bind(Qa,an)}}return an}function Za(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ol(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,W,ne){Ye.get(R.texture).__webglTexture=W,Ye.get(R.depthTexture).__webglTexture=ne;const re=Ye.get(R);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const ne=Ye.get(R);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,ne=0){O=R,U=W,k=ne;let re=!0,X=null,be=!1,we=!1;if(R){const He=Ye.get(R);if(He.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(q.FRAMEBUFFER,null),re=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(He.__hasExternalTextures)L.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(we=!0);const it=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[W])?X=it[W][ne]:X=it[W],be=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?X=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[ne]:X=it,z.copy(R.viewport),ae.copy(R.scissor),J=R.scissorTest}else z.copy(F).multiplyScalar(H).floor(),ae.copy(ie).multiplyScalar(H).floor(),J=Pe;if($e.bindFramebuffer(q.FRAMEBUFFER,X)&&re&&$e.drawBuffers(R,X),$e.viewport(z),$e.scissor(ae),$e.setScissorTest(J),be){const He=Ye.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,ne)}else if(we){const He=Ye.get(R.texture),tt=W||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,He.__webglTexture,ne||0,tt)}N=-1},this.readRenderTargetPixels=function(R,W,ne,re,X,be,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ge=Ge[we]),Ge){$e.bindFramebuffer(q.FRAMEBUFFER,Ge);try{const He=R.texture,tt=He.format,it=He.type;if(!ut.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-re&&ne>=0&&ne<=R.height-X&&q.readPixels(W,ne,re,X,rt.convert(tt),rt.convert(it),be)}finally{const He=O!==null?Ye.get(O).__webglFramebuffer:null;$e.bindFramebuffer(q.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,W,ne,re,X,be,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ge=Ge[we]),Ge){const He=R.texture,tt=He.format,it=He.type;if(!ut.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-re&&ne>=0&&ne<=R.height-X){$e.bindFramebuffer(q.FRAMEBUFFER,Ge);const We=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.bufferData(q.PIXEL_PACK_BUFFER,be.byteLength,q.STREAM_READ),q.readPixels(W,ne,re,X,rt.convert(tt),rt.convert(it),0);const gt=O!==null?Ye.get(O).__webglFramebuffer:null;$e.bindFramebuffer(q.FRAMEBUFFER,gt);const bt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await by(q,bt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,We),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,be),q.deleteBuffer(We),q.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,ne=0){R.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const re=Math.pow(2,-ne),X=Math.floor(R.image.width*re),be=Math.floor(R.image.height*re),we=W!==null?W.x:0,Ge=W!==null?W.y:0;L.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,ne,0,0,we,Ge,X,be),$e.unbindTexture()},this.copyTextureToTexture=function(R,W,ne=null,re=null,X=0){R.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,R=arguments[1],W=arguments[2],X=arguments[3]||0,ne=null);let be,we,Ge,He,tt,it,We,gt,bt;const mt=R.isCompressedTexture?R.mipmaps[X]:R.image;ne!==null?(be=ne.max.x-ne.min.x,we=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,He=ne.min.x,tt=ne.min.y,it=ne.isBox3?ne.min.z:0):(be=mt.width,we=mt.height,Ge=mt.depth||1,He=0,tt=0,it=0),re!==null?(We=re.x,gt=re.y,bt=re.z):(We=0,gt=0,bt=0);const sn=rt.convert(W.format),at=rt.convert(W.type);let qe;W.isData3DTexture?(L.setTexture3D(W,0),qe=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),qe=q.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Kn=q.getParameter(q.UNPACK_ROW_LENGTH),wt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),an=q.getParameter(q.UNPACK_SKIP_PIXELS),Zn=q.getParameter(q.UNPACK_SKIP_ROWS),qt=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,mt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,mt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,He),q.pixelStorei(q.UNPACK_SKIP_ROWS,tt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,it);const fi=R.isDataArrayTexture||R.isData3DTexture,Dt=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Bn=Ye.get(R),Ei=Ye.get(W),xn=Ye.get(Bn.__renderTarget),Hn=Ye.get(Ei.__renderTarget);$e.bindFramebuffer(q.READ_FRAMEBUFFER,xn.__webglFramebuffer),$e.bindFramebuffer(q.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let wn=0;wn<Ge;wn++)fi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,X,it+wn),R.isDepthTexture?(Dt&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.get(W).__webglTexture,X,bt+wn),q.blitFramebuffer(He,tt,be,we,We,gt,be,we,q.DEPTH_BUFFER_BIT,q.NEAREST)):Dt?q.copyTexSubImage3D(qe,X,We,gt,bt+wn,He,tt,be,we):q.copyTexSubImage2D(qe,X,We,gt,bt+wn,He,tt,be,we);$e.bindFramebuffer(q.READ_FRAMEBUFFER,null),$e.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(qe,X,We,gt,bt,be,we,Ge,sn,at,mt.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(qe,X,We,gt,bt,be,we,Ge,sn,mt.data):q.texSubImage3D(qe,X,We,gt,bt,be,we,Ge,sn,at,mt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,X,We,gt,be,we,sn,at,mt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,X,We,gt,mt.width,mt.height,sn,mt.data):q.texSubImage2D(q.TEXTURE_2D,X,We,gt,be,we,sn,at,mt);q.pixelStorei(q.UNPACK_ROW_LENGTH,Kn),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,wt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,an),q.pixelStorei(q.UNPACK_SKIP_ROWS,Zn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,qt),X===0&&W.generateMipmaps&&q.generateMipmap(qe),$e.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ne=null,re=null,X=0){return R.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ne,re,X)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){U=0,k=0,O=null,$e.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}class Ow extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class af extends Er{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];d(o),g(r),v(),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(c.slice(),3)),this.setAttribute("uv",new _i(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(P){const D=new $,A=new $,j=new $;for(let U=0;U<n.length;U+=3)M(n[U+0],D),M(n[U+1],A),M(n[U+2],j),p(D,A,j,P)}function p(P,D,A,j){const U=j+1,k=[];for(let O=0;O<=U;O++){k[O]=[];const N=P.clone().lerp(A,O/U),C=D.clone().lerp(A,O/U),z=U-O;for(let ae=0;ae<=z;ae++)ae===0&&O===U?k[O][ae]=N:k[O][ae]=N.clone().lerp(C,ae/z)}for(let O=0;O<U;O++)for(let N=0;N<2*(U-O)-1;N++){const C=Math.floor(N/2);N%2===0?(_(k[O][C+1]),_(k[O+1][C]),_(k[O][C])):(_(k[O][C+1]),_(k[O+1][C+1]),_(k[O+1][C]))}}function g(P){const D=new $;for(let A=0;A<c.length;A+=3)D.x=c[A+0],D.y=c[A+1],D.z=c[A+2],D.normalize().multiplyScalar(P),c[A+0]=D.x,c[A+1]=D.y,c[A+2]=D.z}function v(){const P=new $;for(let D=0;D<c.length;D+=3){P.x=c[D+0],P.y=c[D+1],P.z=c[D+2];const A=y(P)/2/Math.PI+.5,j=x(P)/Math.PI+.5;u.push(A,1-j)}b(),S()}function S(){for(let P=0;P<u.length;P+=6){const D=u[P+0],A=u[P+2],j=u[P+4],U=Math.max(D,A,j),k=Math.min(D,A,j);U>.9&&k<.1&&(D<.2&&(u[P+0]+=1),A<.2&&(u[P+2]+=1),j<.2&&(u[P+4]+=1))}}function _(P){c.push(P.x,P.y,P.z)}function M(P,D){const A=P*3;D.x=e[A+0],D.y=e[A+1],D.z=e[A+2]}function b(){const P=new $,D=new $,A=new $,j=new $,U=new xt,k=new xt,O=new xt;for(let N=0,C=0;N<c.length;N+=9,C+=6){P.set(c[N+0],c[N+1],c[N+2]),D.set(c[N+3],c[N+4],c[N+5]),A.set(c[N+6],c[N+7],c[N+8]),U.set(u[C+0],u[C+1]),k.set(u[C+2],u[C+3]),O.set(u[C+4],u[C+5]),j.copy(P).add(D).add(A).divideScalar(3);const z=y(j);E(U,C+0,P,z),E(k,C+2,D,z),E(O,C+4,A,z)}}function E(P,D,A,j){j<0&&P.x===1&&(u[D]=P.x-1),A.x===0&&A.z===0&&(u[D]=j/2/Math.PI+.5)}function y(P){return Math.atan2(P.z,-P.x)}function x(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.vertices,e.indices,e.radius,e.details)}}class Ll extends af{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ll(e.radius,e.detail)}}class zw extends Wa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jg,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bw extends zw{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class of extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Qu=new Ht,zm=new $,Bm=new $;class v0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(zm),Bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bm),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hm=new Ht,ka=new $,Ju=new $;class Hw extends v0{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),ka.setFromMatrixPosition(e.matrixWorld),r.position.copy(ka),Ju.copy(r.position),Ju.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Ju),r.updateMatrixWorld(),o.makeTranslation(-ka.x,-ka.y,-ka.z),Hm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hm)}}class jw extends of{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Hw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vw extends v0{constructor(){super(new f0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends of{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Vw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gw extends of{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ww{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Vm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Vm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);const y0=({className:s=""})=>{const e=Ie.useRef(null),n=Ie.useRef(null);return Ie.useEffect(()=>{const r=e.current;if(!r)return;const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=r.clientWidth||380,u=r.clientHeight||450,d=new Ow,p=new zn(45,c/u,.1,1e3);p.position.z=5.2;let g;try{g=new Fw({alpha:!0,antialias:!0,powerPreference:"high-performance"}),g.setClearColor(0,0),g.setSize(c,u),g.setPixelRatio(Math.min(window.devicePixelRatio,2));const te=g.domElement;te.style.display="block",te.style.width="100%",te.style.height="100%",te.style.opacity="0",te.style.transition="opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",te.style.pointerEvents="none",r.appendChild(te),n.current=g}catch(te){console.warn("WebGL not supported or failed to initialize",te);return}const v=new Ll(1.65,32),S=v.attributes.position.clone(),_=new Bw({color:461588,emissive:133139,metalness:.92,roughness:.22,clearcoat:.75,clearcoatRoughness:.15,reflectivity:.85,wireframe:!1}),M=new ci(v,_);d.add(M);const b=new Ll(1.66,8),E=new nf({color:61695,wireframe:!0,transparent:!0,opacity:.08}),y=new ci(b,E);d.add(y);const x=new Gw(267044,1.2);d.add(x);const P=new jm(61695,1.8);P.position.set(4,5,4),d.add(P);const D=new jm(1981066,1.4);D.position.set(-5,-4,-2),d.add(D);const A=new jw(61695,1.2,8);A.position.set(0,1.5,3.5),d.add(A),g.render(d,p);const j=setTimeout(()=>{g.domElement&&(g.domElement.style.opacity="1")},50);let U=0,k=0,O=0,N=0;const C=te=>{const le=r.getBoundingClientRect(),H=(te.clientX-le.left)/le.width*2-1,ce=-((te.clientY-le.top)/le.height*2-1);O=H*.8,N=ce*.8};window.addEventListener("mousemove",C);const z=()=>{if(!r||!g)return;const te=r.clientWidth||380,le=r.clientHeight||450;p.aspect=te/le,p.updateProjectionMatrix(),g.setSize(te,le)};window.addEventListener("resize",z);let ae=null;typeof ResizeObserver<"u"&&(ae=new ResizeObserver(()=>z()),ae.observe(r));let J;const de=new Ww,he=()=>{J=requestAnimationFrame(he);const te=de.getElapsedTime();if(U+=(O-U)*.05,k+=(N-k)*.05,M.rotation.y=te*.2+U*.5,M.rotation.x=te*.15+k*.5,y.rotation.y=M.rotation.y,y.rotation.x=M.rotation.x,!o){const le=v.attributes.position,H=S,ce=le.count;for(let se=0;se<ce;se++){const F=H.getX(se),ie=H.getY(se),Pe=H.getZ(se),Z=Math.sqrt(F*F+ie*ie+Pe*Pe),ue=Math.sin(F*2.5+te*1.5)*Math.cos(ie*2.5+te*1.2)*Math.sin(Pe*2+te*1)*.16,Se=(Z+ue)/Z;le.setXYZ(se,F*Se,ie*Se,Pe*Se)}le.needsUpdate=!0,v.computeVertexNormals()}g.render(d,p)};return he(),()=>{clearTimeout(j),cancelAnimationFrame(J),window.removeEventListener("mousemove",C),window.removeEventListener("resize",z),ae&&ae.disconnect(),g&&r.contains(g.domElement)&&(r.removeChild(g.domElement),g.dispose()),v.dispose(),_.dispose(),b.dispose(),E.dispose()}},[]),h.jsx("div",{ref:e,className:`relative w-full h-full min-h-[380px] md:min-h-[500px] flex items-center justify-center overflow-hidden pointer-events-none select-none ${s}`,"aria-label":"Interactive 3D Liquid Chrome Specular Sphere",children:h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent pointer-events-none"})})},Gm="!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEF~`",Wm=({text:s,className:e="",triggerOnHover:n=!0})=>{const[r,o]=Ie.useState(s),c=Ie.useRef(!1),u=()=>{if(c.current)return;c.current=!0;let d=0;const p=s.length,g=setInterval(()=>{o(()=>s.split("").map((v,S)=>v===" "?" ":S<d?s[S]:Gm[Math.floor(Math.random()*Gm.length)]).join("")),d>=p&&(clearInterval(g),o(s),c.current=!1),d+=1/2},30)};return Ie.useEffect(()=>{u()},[s]),h.jsx("span",{className:`font-mono inline-block cursor-default select-none ${e}`,onMouseEnter:n?u:void 0,title:"Interactive ASCII decode",children:r})},Xw=({onOpenResume:s})=>h.jsxs("section",{className:"relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern",children:[h.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none"}),h.jsx("div",{className:"absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"}),h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-white/15 w-fit shadow-inner",children:[h.jsxs("span",{className:"flex h-2 w-2 relative",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),h.jsx("span",{className:"text-[11px] font-mono tracking-wider text-silver-300 uppercase",children:"AASTMT • CYBER & CREATIVE ENGINEERING"})]}),h.jsxs("div",{className:"space-y-1",children:[h.jsx("p",{className:"text-xs sm:text-sm font-mono tracking-widest text-electric-cyan uppercase",children:h.jsx(Wm,{text:"YAHIA ELSEMARY"})}),h.jsxs("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05]",children:["I BUILD ",h.jsx("br",{}),h.jsx("span",{className:"bg-gradient-to-r from-white via-silver-200 to-silver-400 bg-clip-text text-transparent hero-headline-gradient",children:h.jsx(Wm,{text:"WHAT'S NEXT."})})]})]}),h.jsx("p",{className:"text-base sm:text-lg text-silver-300 max-w-2xl font-light leading-relaxed",children:"Creative Developer exploring the intersection of design, engineering, and technology."}),h.jsx("blockquote",{className:"border-l-2 border-electric-cyan/60 pl-4 py-1 text-xs sm:text-sm font-mono text-silver-400 italic",children:'"I build at the intersection of creativity, engineering, and technology."'}),h.jsxs("div",{className:"flex flex-wrap gap-2 text-xs font-mono pt-1",children:[h.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-silver-300 flex items-center gap-1.5",children:[h.jsx(es,{className:"w-3.5 h-3.5 text-electric-cyan"}),"Creative Developer"]}),h.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-silver-300 flex items-center gap-1.5",children:[h.jsx(ag,{className:"w-3.5 h-3.5 text-blue-400"}),"Web Engineer"]}),h.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-silver-300 flex items-center gap-1.5",children:[h.jsx(Nl,{className:"w-3.5 h-3.5 text-terminal-green"}),"Ethical Hacker & CTF Ranked #123"]}),h.jsx("span",{className:"px-2.5 py-1 rounded-md bg-electric-blue/10 border border-electric-cyan/30 text-electric-cyan flex items-center gap-1.5",children:h.jsx("span",{children:"AASTMT Engineering"})})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-4",children:[h.jsxs("a",{href:"#work",className:"px-6 py-3.5 rounded-full bg-white text-dark-950 font-display font-bold text-sm hover:bg-silver-200 transition-all shadow-glow-subtle flex items-center gap-2 group hero-btn-primary",children:[h.jsx("span",{children:"View My Work"}),h.jsx(yv,{className:"w-4 h-4 group-hover:translate-y-0.5 transition-transform"})]}),h.jsxs("a",{href:"#contact",className:"px-6 py-3.5 rounded-full bg-dark-900 border border-white/20 text-silver-200 font-display font-medium text-sm hover:bg-dark-800 hover:text-white hover:border-white/40 transition-all flex items-center gap-2 hero-btn-secondary",children:[h.jsx("span",{children:"Contact Me"}),h.jsx(Oa,{className:"w-4 h-4 text-silver-400"})]}),h.jsx("button",{onClick:s,className:"px-4 py-3.5 rounded-full text-xs font-mono text-silver-400 hover:text-electric-cyan transition-colors underline-offset-4 hover:underline",children:"Download CV (PDF)"})]})]}),h.jsxs("div",{className:"lg:col-span-5 relative flex items-center justify-center",children:[h.jsx("div",{className:"absolute -inset-4 sm:-inset-8 z-0 pointer-events-none opacity-45 lg:opacity-75",children:h.jsx(y0,{})}),h.jsxs("div",{className:"relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-2xl p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl",children:[h.jsxs("div",{className:"relative rounded-xl overflow-hidden aspect-[4/5] bg-dark-900 group",children:[h.jsx("img",{src:"/assets/yahia-portrait.jpg",alt:"Yahia Elsemary speaking at Cisco Networking Academy ceremony",className:"w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out",loading:"eager"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-85"}),h.jsxs("div",{className:"absolute top-3 left-3 right-3 flex items-center justify-between",children:[h.jsxs("div",{className:"px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-silver-300 flex items-center gap-1.5",children:[h.jsx(Nl,{className:"w-3 h-3 text-terminal-green"}),h.jsx("span",{children:"Cisco Networking Academy"})]}),h.jsx("div",{className:"px-2 py-0.5 rounded-full bg-dark-950/80 border border-white/10 text-[9px] font-mono text-silver-400",children:"REAL PORTRAIT"})]}),h.jsxs("div",{className:"absolute bottom-4 left-4 right-4 space-y-1",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-white font-display font-bold text-lg tracking-tight",children:"Yahia Elsemary"}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-electric-blue/20 text-electric-cyan border border-electric-cyan/30",children:"DEVAULT"})]}),h.jsx("p",{className:"text-silver-400 text-xs font-mono",children:"Ethical Hacker Ceremony • Cisco Networking Academy"})]})]}),h.jsxs("div",{className:"mt-2 px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-silver-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-electric-cyan"}),"Authentic Photographic Proof"]}),h.jsx("span",{className:"text-silver-500",children:"2026"})]})]})]})]})})]}),qa=({className:s="w-4 h-4"})=>h.jsx("svg",{className:s,fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:h.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),qw=({className:s="w-4 h-4"})=>h.jsx("svg",{className:s,fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:h.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})}),Xm=[{id:"saqrwear",title:"SAQRWEAR — Full-Stack Luxury E-Commerce & Management Platform",category:"web",categoryLabel:"Full-Stack Architecture & Brand Platform",tagline:"End-to-end luxury streetwear platform with client-side storefront and cryptographic admin management engine",summary:"A complete full-stack e-commerce architecture and digital brand platform. Combines a high-end luxury client storefront featuring Arabic calligraphy motifs and responsive catalog browsing with a dedicated enterprise management engine (mgmt-saqr) that synchronizes orders, inventory, and administrative telemetry directly from front to back with cryptographic SHA-256 authentication and anti-brute force defenses.",coverImage:"/assets/saqr-logo.jpg",technologies:["Full-Stack Architecture","Frontend-Backend Sync","Zero-Plaintext Auth (SHA-256)","Inventory Telemetry","Arabic Typography Systems","Responsive UI/UX"],status:"Completed",featured:!0,caseStudy:{challenge:"Building a luxury digital commerce ecosystem that preserves bespoke Arabic design identity on the frontend while providing a hardened, real-time backend management engine that tracks orders, synchronizes stock levels, and prevents unauthorized administrative tampering.",solution:"Engineered a unified full-stack architecture where every customer action on the storefront (product selection, size variant, order checkout) directly synchronizes with the management backend engine (mgmt-saqr). Implemented the SAQR® Anti-Brute Force Engine v3.2 featuring zero-plaintext cryptographic password hashing (SHA-256), session lockdown heuristics, order dispatch pipelines, and real-time inventory state reconciliation.",role:"Lead Full-Stack Architect & Brand Designer: Designed the full system topology — from the vector falcon emblem and luxury storefront to the 160KB client-to-backend management engine, secure order telemetry, and inventory database.",techStack:["Full-Stack Frontend & Backend Integration","SAQR® Enterprise Security Engine v3.2","SHA-256 Cryptographic Authentication","Dynamic Inventory & Order State Machine","HTML5 / Modern Modular CSS","Figma / Illustrator Vector Identity"],process:["Crafted the brandmark combining sharp falcon (Saqr) geometry with Arabic calligraphic letterforms.","Engineered the responsive client storefront with instant cart calculation, variant selectors, and modal previews.","Developed the mgmt-saqr management engine featuring zero-plaintext root authentication and multi-tier brute-force lockouts.","Established two-way data consistency ensuring storefront customer orders immediately populate the dispatch queue with verified status."],results:["Complete working full-stack platform with frontend storefront and backend management fully interconnected.","Robust administrative dashboard with live inventory adjustments, revenue analytics, and order fulfillment tracking.","Hardened client-to-server security architecture tested against automated authentication attacks."],status:"Completed",liveUrl:"https://blackstarii.github.io/SAQRWEAR_/",images:[{url:"/assets/saqr-logo.jpg",caption:"SAQRWEAR core falcon brandmark & typographic identity"},{url:"/assets/saqr-hoodie_flatlay.jpg",caption:"Signature heavyweight hoodie presentation & production flatlay"},{url:"/assets/saqr-cargo_flatlay.jpg",caption:"Tactical cargo trousers deliverable & catalog specification"},{url:"/assets/saqr-product1.jpg",caption:"Full-stack storefront product display and live order dispatch flow"},{url:"/assets/saqr-product2.jpg",caption:"Oversized luxury silhouette specification and fabric weight"},{url:"/assets/saqr-product3.jpg",caption:"Editorial product catalog view and size variant selector"}]}},{id:"mystic-arts-ar",title:"Mystic Arts AR — Doctor Strange Spellcasting",category:"ai",categoryLabel:"Computer Vision & Creative Tech",tagline:"Real-time browser-based gesture-driven spellcasting with MediaPipe Hands & Canvas 2D",summary:"An interactive AR web experience inspired by Doctor Strange and the Mystic Arts. Uses vanilla JavaScript, HTML5 Canvas 2D, and Google MediaPipe Hands tracking to detect hand gestures and render rotating runic rings, sacred geometry shields, and the Eye of Agamotto chrono-shockwave in real time.",coverImage:"/assets/project-mystic-arts.jpg",technologies:["JavaScript","MediaPipe Hands","HTML5 Canvas","Web Audio API","Computer Vision"],status:"Completed",featured:!0,caseStudy:{challenge:"Rendering high-framerate sacred geometry mandalas with multi-tier spark particles and gesture recognition directly in the browser without heavyweight 3D game engines or native app dependencies.",solution:"Engineered a lightweight mathematical canvas rendering engine combining vector matrix rotations, polar coordinate runes, and real-time landmark tracking from MediaPipe Hands. Built multi-phase spell activation (Phase 1 index/thumb pinch relic manifest, Phase 2 horizontal expansion shockwave).",role:"Lead Creative Developer & Vision Engineer: Authored all mathematical canvas routines, gesture detection heuristics, sound synthesis integration, and comprehensive documentation manuals.",techStack:["Vanilla JavaScript (ES6+)","MediaPipe Hands SDK","HTML5 Canvas 2D","Web Audio API","CSS3 transforms"],process:["Researched and plotted sacred geometry: concentric runic dials, 12-fold symmetry star polygons, and interlocking triangles.","Calibrated 21-point 3D hand landmark recognition for reliable pinch, open-palm, and two-hand distance tracking.","Optimized frame rendering loops using requestAnimationFrame and off-screen canvas buffering for smooth 60fps execution.","Integrated multi-voice Web Audio frequency synthesis synchronized with spell ignition and expansion."],results:["Flawless real-time 60fps tracking in standard web browsers with zero installation requirements.","Full implementation of Tao Mandala Shields, Eye of Agamotto Time Stone Ritual, and Mirror Dimension shatter particles.","Published as an open-source project with comprehensive architectural guides and user manuals."],status:"Completed",githubUrl:"https://github.com/BlackstarII/AR-programming-STRANGE",liveUrl:"https://blackstarii.github.io/AR-programming-STRANGE/",images:[{url:"/assets/project-mystic-arts.jpg",caption:"Interactive real-time spellcasting architecture running in browser"}]}},{id:"paperxtrading",title:"PAPERX — Financial Paper Trading & Exchange Platform",category:"web",categoryLabel:"FinTech & Interactive Markets",tagline:"High-performance simulated exchange engine with real-time candlestick charts and portfolio analytics",summary:"A sophisticated Arabic-enabled financial trading simulation platform. Features dynamic candlestick and line charting, order book depth, market and limit order execution, portfolio allocation tracking, and instant P&L risk auditing.",coverImage:"/assets/project-paperx.jpg",technologies:["Vanilla JavaScript","Financial Charting Engine","Order Execution Engine","RTL Layout System","Portfolio State Machine"],status:"Completed",featured:!0,caseStudy:{challenge:"Providing novice and active traders with a zero-risk market simulation that authentically models rapid price oscillations, order book fills, slippage, and portfolio leverage without requiring expensive market data subscriptions.",solution:"Engineered an in-browser algorithmic market generator with real-time price tick updates, automated candlestick aggregation (open, high, low, close), interactive buy/sell order routing, and localized RTL Arabic financial metrics.",role:"Frontend Architect & Financial Systems Developer: Built the custom chart rendering engine, order execution state machine, and bilingual trading interface.",techStack:["JavaScript (ES6+)","HTML5 Canvas Charting","Dynamic Order Book Algorithms","Modern CSS3 Custom Properties"],process:["Designed mathematical price drift simulation incorporating simulated market momentum and volatility shocks.","Developed interactive charting surface supporting zoom, timeframe selection, and moving average overlays.","Implemented balance ledger with trade execution logs, cash management, and win/loss statistics calculation."],results:["Fully functional paper trading web platform published on GitHub.","Zero-lag order execution with real-time portfolio value updates.","Clean high-contrast dark theme optimized for active market monitoring."],status:"Completed",githubUrl:"https://github.com/BlackstarII/paperxtrading",liveUrl:"https://blackstarii.github.io/paperxtrading/",images:[{url:"/assets/project-paperx.jpg",caption:"PAPERX live trading workstation with real-time charting and order execution"}]}},{id:"management-dashboard",title:"Omni-Admin — Enterprise User & System Management Dashboard",category:"web",categoryLabel:"Enterprise Systems & Analytics",tagline:"High-density 58KB administration console with RBAC security, analytics telemetry, and audit reporting",summary:"A comprehensive 58KB enterprise user and infrastructure management dashboard. Delivers robust Role-Based Access Control (RBAC), user lifecycle provisioning, live activity auditing, telemetry stat cards, multi-tier data filtering, and formatted report export routines.",coverImage:"/assets/project-management.jpg",technologies:["JavaScript Architecture","RBAC Security Models","Data Virtualization","Audit Logging","Enterprise CSS Grid"],status:"Completed",featured:!0,caseStudy:{challenge:"Designing an all-in-one administrative cockpit capable of handling large user registries, privilege tiering, and operational metric visualization with sub-second responsiveness in both Arabic and English.",solution:"Constructed an extensive 58KB modular single-page administrative architecture with dedicated modules for identity management, security event logs, batch actions, and dynamic analytics widgets.",role:"Full-Stack UI Engineer & Systems Designer: Architected state management, permission verification matrices, and responsive data table layouts.",techStack:["Modular JavaScript","Responsive CSS Grid & Flexbox","Client-Side Data Filtering","CSV/JSON Data Export"],process:["Modeled granular permission tiers: SuperAdmin, Operations Manager, Auditor, and Restricted User.","Engineered responsive telemetry widgets displaying real-time server health and active user sessions.","Built instant search, multi-column sorting, and batch operational pipelines."],results:["Enterprise-grade dashboard deployed and open-sourced on GitHub.","Handles large mock datasets smoothly without third-party framework overhead.","Highly modular architecture easily extensible to live backend REST/GraphQL endpoints."],status:"Completed",githubUrl:"https://github.com/BlackstarII/management-dashboard",liveUrl:"https://blackstarii.github.io/management-dashboard/",images:[{url:"/assets/project-management.jpg",caption:"Omni-Admin user lifecycle dashboard with operational metrics and role management"}]}},{id:"orbit-academy",title:"Orbit Academy — Modern EdTech & Course Learning Platform",category:"web",categoryLabel:"EdTech & Learning Management Systems",tagline:"29KB educational platform with interactive course syllabi, video lectures, and student progress tracking",summary:"An intuitive, modern educational course platform (29KB) designed for seamless learning. Features categorized video modules, instructor overviews, curriculum milestone tracking, student enrollment flows, and certificate previews with native Arabic RTL support.",coverImage:"/assets/project-orbit.jpg",technologies:["JavaScript","LMS State Architecture","Video Player Interfaces","Progress Serialization","Arabic RTL UI"],status:"Completed",featured:!0,caseStudy:{challenge:"Creating an accessible, clutter-free course learning portal that organizes multi-chapter video curricula and tracks user lesson progress without complex LMS overhead.",solution:"Engineered a modular learning platform with dynamic lesson navigation, responsive video player containers, interactive course syllabi, and localized student achievement milestones.",role:"Frontend UI/UX Architect: Designed the course catalogue, lesson player layout, and responsive mobile learning experience.",techStack:["HTML5 Video","CSS3 Modern Layouts","Vanilla JS State Management","LocalStorage Persistence"],process:["Structured modular curriculum models supporting chapters, video lessons, and download attachments.","Designed high-contrast lesson completion badges and visual progress bars.","Optimized responsive layouts for desktop widescreen and mobile handheld study."],results:["Operational EdTech web platform deployed on GitHub.","Sub-second page navigation and persistent lesson progress tracking.","Bespoke modern Arabic typography and dark/light contrast optimization."],status:"Completed",githubUrl:"https://github.com/BlackstarII/orbit-academy",liveUrl:"https://blackstarii.github.io/orbit-academy/",images:[{url:"/assets/project-orbit.jpg",caption:"Orbit Academy course curriculum and video lecture learning interface"}]}},{id:"dar-eloud-perfumes",title:"Dar El-Oud — Luxury Oriental Perfumery Storefront",category:"design",categoryLabel:"Luxury Brand Identity & Commerce",tagline:"32KB opulent fragrance boutique with olfactive notes breakdown and bespoke luxury checkout",summary:"A bespoke 32KB luxury e-commerce boutique created for prestigious oriental fragrances (Dar El-Oud). Highlights top/heart/base fragrance pyramids, bottle sizes, fragrance intensity indicators, luxury shopping bag calculations, and rich dark-gold aesthetics.",coverImage:"/assets/project-dar-eloud.jpg",technologies:["E-Commerce UI","Luxury Art Direction","Fragrance Note Pyramids","Shopping Bag Flow","Arabic Calligraphy Aesthetics"],status:"Completed",featured:!0,caseStudy:{challenge:"Conveying the sensory richness, heritage, and luxury of artisanal oriental oud and perfumes in a digital web store with opulent aesthetics and instant cart flow.",solution:"Designed an elegant dark-and-gold storefront featuring interactive perfume note breakdowns, size variant selection, instant price adjustments, and streamlined checkout modals.",role:"Creative Web Developer & Digital Brand Designer: Developed the visual art direction, product showcases, olfactory breakdown UI, and responsive cart engine.",techStack:["HTML5","CSS Custom Properties","Vanilla JavaScript","Luxury Typography Systems"],process:["Crafted an opulent royal palette: deep obsidian, antique gold, and warm amber accents.","Constructed interactive fragrance pyramid tabs displaying Top, Heart, and Base notes.","Implemented responsive cart drawer with instant quantity modifications and discount codes."],results:["Live luxury perfume boutique storefront deployed on GitHub.","High conversion-oriented layout with zero external framework dependencies.","Culturally grounded Arabic presentation with premium modern sensibilities."],status:"Completed",githubUrl:"https://github.com/BlackstarII/dar-eloud-perfumes",liveUrl:"https://blackstarii.github.io/dar-eloud-perfumes/",images:[{url:"/assets/project-dar-eloud.jpg",caption:"Dar El-Oud luxury perfume showcase with olfactory fragrance pyramid"}]}},{id:"kanban-workspace",title:"Kanban Workspace — Workflow Management & Task Engine",category:"web",categoryLabel:"Project Management & Interactive Systems",tagline:"51KB responsive task orchestration board with priority tags, column metrics, and local storage state",summary:"A 51KB project management application inspired by agile workflows. Features customizable columns (Backlog, In Progress, Review, Completed), task card authoring, priority badges, member assignment simulation, search filtering, and drag-and-drop state updates with persistent memory.",coverImage:"/assets/project-kanban.jpg",technologies:["JavaScript State Management","Drag & Drop APIs","Filter Heuristics","Agile UI Architecture","LocalStorage Engine"],status:"Completed",featured:!1,caseStudy:{challenge:"Building a nimble, self-contained project task board that handles rapid card reorganization and column state tracking without framework bloat or third-party database subscriptions.",solution:"Crafted a 51KB pure JavaScript Kanban engine supporting drag-and-drop interactions, column-level work-in-progress (WIP) counts, priority labels, and instant local persistence.",role:"Frontend Web Engineer: Built drag-and-drop event handlers, column management pipelines, and responsive card views.",techStack:["HTML5 Drag & Drop API","Modular CSS Flexbox","Vanilla JavaScript","State Serialization"],process:["Implemented drag events with visual drop indicators and smooth card transitions.","Added dynamic task authoring with title, description, priority tags, and due dates.","Optimized data schema for seamless JSON export and import."],results:["Highly functional workflow task management tool published on GitHub.","Zero-dependency agile workspace usable offline and in browser.","Smooth cross-column card migration and real-time counter calculations."],status:"Completed",githubUrl:"https://github.com/BlackstarII/kanban",liveUrl:"https://blackstarii.github.io/kanban/",images:[{url:"/assets/project-kanban.jpg",caption:"Interactive Kanban board with multi-column task pipeline and priority filtering"}]}},{id:"a11y-auditor",title:"A11y Auditor — Web Accessibility & UI Compliance Engine",category:"cyber",categoryLabel:"Security, Accessibility & Code Inspection",tagline:"Automated 14KB web accessibility analyzer evaluating WCAG compliance, ARIA attributes, and color contrast",summary:"A specialized developer diagnostic tool (14KB) created to audit client web applications for WCAG 2.1 compliance, color contrast thresholds, missing ARIA tags, and keyboard navigability pitfalls with immediate scoring and remediation advice.",coverImage:"/assets/project-auditor.jpg",technologies:["Web Standards & A11y","WCAG 2.1 Heuristics","Color Contrast Math","DOM Traversal","Developer Tools UI"],status:"Completed",featured:!1,caseStudy:{challenge:"Diagnosing common accessibility and usability vulnerabilities that exclude users with disabilities and expose web products to compliance liabilities.",solution:"Constructed a lightweight 14KB in-browser auditor that traverses DOM trees, calculates relative luminance ratios, flags unlabelled interactive elements, and generates compliance scores.",role:"Frontend Engineer & Security/Compliance Researcher: Formulated auditing algorithms and designed the diagnostic results interface.",techStack:["DOM Tree Algorithms","Luminance & Contrast Math","Modern CSS","Vanilla JavaScript"],process:["Coded WCAG AA/AAA contrast ratio evaluation formulas.","Engineered checks for semantic headings, image alt tags, and keyboard focus outlines.","Designed an actionable report view with categorized warning levels and direct code recommendations."],results:["Fast in-browser accessibility auditor open-sourced on GitHub.","Instant diagnostic feedback helping developers build inclusive, compliant web applications."],status:"Completed",githubUrl:"https://github.com/BlackstarII/auditor-ui",liveUrl:"https://blackstarii.github.io/auditor-ui/",images:[{url:"/assets/project-auditor.jpg",caption:"A11y Auditor automated diagnostic scoring and accessibility report view"}]}},{id:"vmaps-explorer",title:"Map Explorer (VMaps) — Geospatial Routing & POI Navigator",category:"web",categoryLabel:"Geospatial Engineering & Location Tools",tagline:"20KB interactive map interface with waypoint routing, point-of-interest filters, and coordinate geolocation",summary:"An interactive 20KB mapping and geographic exploration tool. Features responsive vector map canvas, point-of-interest (POI) markers, category filtering, coordinate geolocation lookups, and distance calculations.",coverImage:"/assets/project-maps.jpg",technologies:["Geospatial Coordinates","Vector Mapping UI","Location Search","Distance Computation","Responsive Map Canvas"],status:"Completed",featured:!1,caseStudy:{challenge:"Delivering an intuitive, lightweight geographic exploration surface for location discovery and waypoint routing without heavy third-party SDK dependencies.",solution:"Architected a 20KB mapping client featuring responsive map viewports, interactive location pins, searchable POI categories, and distance measurement tools.",role:"Web Engineer: Built location indexing, coordinate search math, and responsive map controls.",techStack:["HTML5 Canvas & Vector UI","Coordinate Calculations","Vanilla JS","Modern CSS Layouts"],process:["Developed interactive marker placement system with detailed popup information cards.","Created category filters for emergency services, commercial hubs, and transport links.","Optimized map panning and touch gestures for smooth mobile usage."],results:["Lightweight geospatial navigation web tool deployed on GitHub.","Instant sub-second response on coordinate searches and distance calculations."],status:"Completed",githubUrl:"https://github.com/BlackstarII/vmaps",liveUrl:"https://blackstarii.github.io/vmaps/",images:[{url:"/assets/project-maps.jpg",caption:"Map Explorer interactive geospatial interface with POI navigation"}]}},{id:"jarvis-mark-65",title:"MARK 65 — Autonomous Cyber Assistant & Holographic HUD",category:"ai",categoryLabel:"AI & Systems Engineering",tagline:"Cross-platform cyber-physical desktop agent with Gemini Live API audio and real-time telemetry HUD",summary:"An advanced cybersecurity desktop AI assistant engineered by Yahia (DEVAULT). Features dual-persona intelligence, continuous self-improvement routines, real-time hardware HUD monitoring, and native audio streaming for hands-free system orchestration.",coverImage:"/assets/project-jarvis.jpg",technologies:["Python","Gemini Live API","Edge Neural TTS","CustomTkinter","Cyber Telemetry"],status:"In Production",featured:!0,caseStudy:{challenge:"Building a true voice-driven desktop intelligence capable of hearing, understanding, and executing low-level cybersecurity and system diagnostics with zero latency and high visual fidelity.",solution:"Engineered MARK 65 utilizing bidirectional WebSocket audio streaming via the Gemini Live API, connected to a CustomTkinter hardware HUD that visualizes CPU/RAM telemetry, active network connections, and security status.",role:"Lead Architect & Engineer (DEVAULT): Designed the dual-persona core architecture, streaming audio pipelines, system telemetry hooks, and holographic visual HUD.",techStack:["Python 3.10+","Gemini Live API","Edge Neural TTS","CustomTkinter","Psutil / System Hooks"],process:["Implemented low-latency audio capture and streaming playback pipelines.","Crafted specialized system diagnostic tool calls for network socket inspection and process analysis.","Designed cyberpunk-inspired HUD displaying real-time system metrics, audio frequency bars, and command transcripts.","Added model fallback mechanisms to maintain assistant uptime across network disruptions."],results:["Operational autonomous desktop agent running locally on workstation.","Instant natural voice interaction with sub-second response times.","Integrated security and hardware monitoring HUD designed for power users."],status:"In Production",images:[{url:"/assets/project-jarvis.jpg",caption:"MARK 65 Cybernetic HUD interface and telemetry engine"}]}},{id:"pos-system",title:"POS Omnichannel — Retail Point of Sale & Inventory Engine",category:"web",categoryLabel:"Commercial Web Engineering",tagline:"31KB retail point-of-sale platform with dynamic cart calculations, barcode scanning, and invoice printing",summary:"A fast, lightweight 31KB point of sale (POS) application engineered for retail operations. Supports barcode lookup simulation, category filtering, split cart calculations, custom discount/tax rules, cash/card tender flows, and printable receipt generation.",coverImage:"/assets/project-pos.jpg",technologies:["JavaScript","Retail State Engine","Print CSS Formatting","Barcode Simulation","RTL Arabic UI"],status:"Completed",featured:!1,caseStudy:{challenge:"Developing a zero-dependency retail terminal capable of operating swiftly on low-resource hardware with offline caching, fast item scanning, and instant receipt rendering.",solution:"Crafted a single-page commercial checkout engine with reactive category navigation, rapid quantity increments, tax calculations, and printable receipt stylesheets.",role:"Full-Stack UI Engineer: Designed the cashier checkout flow, receipt layout, and transactional calculations.",techStack:["HTML5","Modern CSS Grid","Vanilla JavaScript","Print Media CSS"],process:["Built product catalog matrix with price tiers, SKU tracking, and inventory count alerts.","Engineered responsive cart module with discount overrides and tax computation.","Implemented formatted thermal receipt generation using browser print APIs."],results:["Operational retail checkout web app deployed on GitHub.","Instant sub-100ms item addition and transaction completion.","Clean Arabic RTL interface suitable for retail and hospitality use."],status:"Completed",githubUrl:"https://github.com/BlackstarII/pos-system",liveUrl:"https://blackstarii.github.io/pos-system/",images:[{url:"/assets/project-pos.jpg",caption:"Point of Sale terminal interface with live cart calculations and receipt generation"}]}},{id:"vflix-streaming",title:"VFLIX — Theatrical Media & Video Streaming Hub",category:"web",categoryLabel:"Streaming Architecture & UI",tagline:"High-fidelity cinema entertainment interface with dynamic carousel rails and trailer modals",summary:"A sleek, dark-themed entertainment streaming web application featuring dynamic billboard heroes, categorized horizontal carousel rails, video trailer preview modals, and structured metadata series prompts.",coverImage:"/assets/project-vflix.jpg",technologies:["Modern CSS Architecture","JavaScript Carousel Engine","Video Integration","Modal State Machine"],status:"Completed",featured:!1,caseStudy:{challenge:"Replicating a premier streaming service visual standard with fluid scroll physics, high-contrast imagery, and low latency on mobile and desktop web.",solution:"Constructed an immersive cinema frontend featuring horizontal scroll carousels, responsive video backdrop headers, and detailed modal views populated with metadata.",role:"Creative Web Developer: Engineered the UI architecture, carousel interactions, and responsive media layout.",techStack:["HTML5 Video","CSS Flexbox/Grid","Vanilla JS Interaction Engine"],process:["Designed Netflix-inspired dark aesthetic with custom typography and red accents.","Built touch-friendly carousel rails with smooth scroll momentum.","Integrated modal detail panels with episodes list, synopsis, and cast info."],results:["Smooth, cinema-grade entertainment frontend deployed on GitHub.","Flawless responsive behavior across mobile, tablet, and widescreen displays."],status:"Completed",githubUrl:"https://github.com/BlackstarII/VFLIX-proj",liveUrl:"https://blackstarii.github.io/VFLIX-proj/",images:[{url:"/assets/project-vflix.jpg",caption:"VFLIX streaming hub with responsive media billboard and carousel rails"}]}},{id:"adaptive-honeypot",title:"AI-Powered Adaptive Honeypot — Deception Architecture",category:"cyber",categoryLabel:"Cybersecurity Research & Graduation Thesis",tagline:"Intelligent corporate deception system with real-time attacker behavioral telemetry and automated severity rating",summary:"A cybersecurity graduation project architecture at the Arab Academy for Science, Technology and Maritime Transport (AASTMT). Designed to emulate realistic enterprise environments (file servers, internal credentials, terminal shells) to attract, contain, and analyze unauthorized reconnaissance and exploitation attempts in real time.",coverImage:"/assets/project-honeypot.jpg",technologies:["Python","Network Forensics","Deception Tech","Behavioral AI","Kali Linux","MITRE ATT&CK"],status:"Architecture Concept",featured:!0,caseStudy:{challenge:"Traditional honeypots are static and easily fingerprinted by modern threat actors within the first few reconnaissance probes, causing attackers to immediately disconnect or alter tactics.",solution:"Proposed an adaptive deception architecture that dynamically generates believable file directories, simulated service responses, and credentials. Incorporates behavioral telemetry to categorize attacker intent against MITRE ATT&CK techniques.",role:"Security Researcher & Architecture Lead (AASTMT): Formulated the honeypot deception topology, attacker interaction logging schema, severity classification criteria, and telemetry dashboard wireframes.",techStack:["Python 3","Socket Programming","Docker Sandboxing","Behavioral Anomaly Analysis","Linux Kernel Hooks"],process:["Documented fingerprinting techniques commonly used against Cowrie and Dionaea honeypots.","Architected isolated decoy environments with artificial latency and realistic command output simulation.","Designed payload extraction pipeline to safely capture uploaded artifacts for static hash analysis.","Modeled real-time telemetry streaming to a centralized security monitoring UI."],results:["Comprehensive architectural specification and technical proof-of-concept design.","Detailed MITRE ATT&CK mapping schema for command categorization.","Clearly segregated roadmap distinguishing foundational socket prototypes from planned machine-learning response engines."],status:"Architecture Concept",images:[{url:"/assets/project-honeypot.jpg",caption:"Adaptive honeypot architectural telemetry and attack monitoring topology"}]}}],qm="0123456789ABCDEF#*!/<>[]+-~_$%&@",hn=({text:s,className:e="",as:n="span",triggerOnScroll:r=!0,triggerOnHover:o=!0,duration:c=850})=>{const[u,d]=Ie.useState(s),[p,g]=Ie.useState(!1),v=Ie.useRef(null),S=Ie.useRef(!1),_=Ie.useRef(null),M=Ie.useRef(0),b=()=>{const x=Date.now();if(S.current||x-M.current<700)return;S.current=!0,M.current=x,g(!0);const P=s.length,D=performance.now(),A=32;_.current&&clearInterval(_.current),_.current=setInterval(()=>{const j=performance.now()-D,U=Math.min(1,j/c),k=Math.floor(U*P);d(()=>s.split("").map((O,N)=>O===" "?" ":N<k?s[N]:qm[Math.floor(Math.random()*qm.length)]).join("")),U>=1&&(_.current&&clearInterval(_.current),d(s),S.current=!1,g(!1))},A)};Ie.useEffect(()=>{d(s)},[s]),Ie.useEffect(()=>()=>{_.current&&clearInterval(_.current)},[]),Ie.useEffect(()=>{if(!r)return;const x=v.current;if(!x)return;const P=new IntersectionObserver(D=>{D.forEach(A=>{A.isIntersecting&&A.intersectionRatio>.1&&b()})},{threshold:[.15],rootMargin:"0px 0px -50px 0px"});return P.observe(x),()=>P.disconnect()},[r,s]);const E=n==="span"?"inline-block":"block",y=/\b(block|inline-block|inline|flex|inline-flex)\b/.test(e);return h.jsx(n,{ref:v,onMouseEnter:o?b:void 0,style:{color:p?"var(--glitch-cyan)":void 0,textShadow:p?"0 0 6px var(--glitch-cyan), 0 0 12px var(--glitch-shadow)":"0 0 0px rgba(0, 240, 255, 0)",filter:p?"drop-shadow(0 0 3px var(--glitch-shadow))":"drop-shadow(0 0 0px rgba(0, 240, 255, 0))",transition:"color 0.5s ease-out, text-shadow 0.8s ease-out, filter 0.8s ease-out"},className:`tracking-wide select-none cursor-default tabular-nums ${y?"":E} ${e}`,children:u})},Yw=({onSelectProject:s})=>{const[e,n]=Ie.useState("all"),r=[{key:"all",label:"All Projects"},{key:"web",label:"Web Development"},{key:"design",label:"Branding & Design"},{key:"cyber",label:"Cybersecurity"},{key:"ai",label:"AI & Experiments"}],o=e==="all"?Xm:Xm.filter(c=>c.category===e);return h.jsx("section",{id:"work",className:"py-24 relative bg-dark-950 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",children:[h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-electric-cyan uppercase",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-electric-cyan"}),"01 // PORTFOLIO SHOWCASE"]}),h.jsx(hn,{as:"h2",text:"Selected Work",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-xl font-light",children:"Architected systems, immersive web applications, brand identities, and offensive security research."})]}),h.jsx("div",{className:"filter-bar-container flex flex-wrap gap-1.5 p-1 bg-dark-900 border border-white/10 rounded-full w-fit",children:r.map(c=>h.jsx("button",{onClick:()=>n(c.key),className:`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${e===c.key?"filter-pill-active bg-white text-dark-950 font-bold shadow-md":"filter-pill-inactive text-silver-400 hover:text-silver-100 hover:bg-white/5"}`,children:c.label},c.key))})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map(c=>{var u,d;return h.jsxs("article",{className:"group relative rounded-2xl bg-dark-900/80 border border-white/10 overflow-hidden flex flex-col hover:border-electric-cyan/40 hover:shadow-glow-cyan transition-all duration-300 interactive-card",children:[h.jsxs("div",{className:"relative aspect-[16/10] overflow-hidden bg-dark-850",children:[h.jsx("img",{src:c.coverImage,alt:c.title,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out",loading:"lazy"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"}),h.jsx("div",{className:"absolute top-3 left-3",children:h.jsx("span",{className:`px-2.5 py-1 rounded-full text-[10px] font-mono border backdrop-blur-md ${c.status==="Completed"?"bg-emerald-950/80 text-emerald-400 border-emerald-500/30":c.status==="In Production"?"bg-cyan-950/80 text-cyan-400 border-cyan-500/30":c.status==="Functional Prototype"?"bg-amber-950/80 text-amber-400 border-amber-500/30":"bg-purple-950/80 text-purple-400 border-purple-500/30"}`,children:c.status})}),h.jsx("div",{className:"absolute top-3 right-3",children:h.jsx("span",{className:"px-2 py-0.5 rounded bg-dark-950/80 text-[10px] font-mono text-silver-400 border border-white/10",children:c.categoryLabel})})]}),h.jsxs("div",{className:"p-6 flex-1 flex flex-col justify-between space-y-4",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx(hn,{as:"h3",text:c.title,className:"text-xl sm:text-2xl font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug"}),h.jsx("p",{className:"text-silver-300 text-xs sm:text-sm font-light line-clamp-4 leading-relaxed",children:c.summary})]}),h.jsxs("div",{className:"space-y-4 pt-2",children:[h.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[c.technologies.slice(0,4).map(p=>h.jsx("span",{className:"px-2 py-0.5 rounded bg-dark-850 border border-white/10 text-[10px] font-mono text-silver-300",children:p},p)),c.technologies.length>4&&h.jsxs("span",{className:"px-1.5 py-0.5 text-[10px] font-mono text-silver-500",children:["+",c.technologies.length-4]})]}),h.jsxs("div",{className:"pt-2 border-t border-white/10 flex items-center justify-between",children:[h.jsxs("button",{onClick:()=>s(c),className:"inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-electric-cyan transition-colors",children:[h.jsx("span",{children:"Explore Case Study"}),h.jsx(Oa,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[((u=c.caseStudy)==null?void 0:u.liveUrl)&&h.jsxs("a",{href:c.caseStudy.liveUrl,target:"_blank",rel:"noreferrer",title:"Open Live Website",className:"px-2.5 py-1 rounded-md bg-electric-blue/15 hover:bg-electric-blue/25 border border-electric-cyan/30 text-electric-cyan text-[11px] font-mono flex items-center gap-1 transition-colors",children:[h.jsx("span",{children:"Live Site"}),h.jsx(za,{className:"w-3 h-3"})]}),((d=c.caseStudy)==null?void 0:d.githubUrl)&&h.jsx("a",{href:c.caseStudy.githubUrl,target:"_blank",rel:"noreferrer",title:"GitHub Repository",className:"p-1.5 rounded-md hover:bg-white/10 text-silver-400 hover:text-white transition-colors",children:h.jsx(qa,{className:"w-4 h-4"})})]})]})]})]})]},c.id)})})]})})},$w=({project:s,onClose:e})=>{if(!s||!s.caseStudy)return null;const n=s.caseStudy,r=o=>{switch(o){case"Completed":return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono",children:[h.jsx(yr,{className:"w-3.5 h-3.5"})," Completed Project"]});case"In Production":return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono",children:[h.jsx(td,{className:"w-3.5 h-3.5"})," In Production (Live Workstation)"]});case"Functional Prototype":return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono",children:[h.jsx(zp,{className:"w-3.5 h-3.5"})," Functional Prototype"]});case"Architecture Concept":return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono",children:[h.jsx(mg,{className:"w-3.5 h-3.5"})," Architecture Concept & Thesis"]})}};return h.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-in fade-in duration-200",children:[h.jsx("div",{className:"fixed inset-0",onClick:e}),h.jsxs("div",{className:"relative z-10 w-full max-w-4xl bg-dark-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col",children:[h.jsxs("div",{className:"sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-850/95 backdrop-blur-md border-b border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[r(s.status),h.jsx("span",{className:"text-xs font-mono text-silver-400 hidden sm:inline",children:"// CASE STUDY DEEP DIVE"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-silver-300 hover:text-white border border-white/10 transition-colors","aria-label":"Close Case Study",children:h.jsx(qd,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"overflow-y-auto p-6 sm:p-8 space-y-8 select-text",children:[h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-xs font-mono tracking-widest text-electric-cyan uppercase",children:s.categoryLabel}),h.jsx("h2",{className:"text-2xl sm:text-4xl font-display font-bold text-white tracking-tight",children:s.title}),h.jsx("p",{className:"text-base text-silver-300 font-light leading-relaxed",children:s.tagline})]}),h.jsxs("div",{className:"flex flex-wrap gap-3 pt-1",children:[n.githubUrl&&h.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-mono text-white transition-colors",children:[h.jsx(qa,{className:"w-4 h-4"}),h.jsx("span",{children:"View GitHub Repository"}),h.jsx(za,{className:"w-3.5 h-3.5 text-silver-400"})]}),n.liveUrl&&h.jsxs("a",{href:n.liveUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-blue/15 hover:bg-electric-blue/25 border border-electric-cyan/40 text-xs font-mono text-electric-cyan transition-colors",children:[h.jsx("span",{children:"Live Interactive Demo"}),h.jsx(za,{className:"w-3.5 h-3.5"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"p-5 rounded-xl bg-dark-950/70 border border-white/10 space-y-2.5",children:[h.jsxs("div",{className:"text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[h.jsx(zp,{className:"w-4 h-4"}),"1. The Challenge"]}),h.jsx("p",{className:"text-sm text-silver-300 leading-relaxed",children:n.challenge})]}),h.jsxs("div",{className:"p-5 rounded-xl bg-dark-950/70 border border-white/10 space-y-2.5",children:[h.jsxs("div",{className:"text-xs font-mono text-electric-cyan uppercase tracking-wider flex items-center gap-1.5",children:[h.jsx(td,{className:"w-4 h-4"}),"2. The Solution & Idea"]}),h.jsx("p",{className:"text-sm text-silver-300 leading-relaxed",children:n.solution})]})]}),h.jsxs("div",{className:"p-5 rounded-xl bg-dark-850/60 border border-white/10 space-y-2",children:[h.jsx("div",{className:"text-xs font-mono text-silver-400 uppercase tracking-wider",children:"3. My Role & Personal Contribution"}),h.jsx("p",{className:"text-sm font-medium text-silver-100 leading-relaxed",children:n.role})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"text-xs font-mono text-silver-400 uppercase tracking-wider flex items-center gap-1.5",children:[h.jsx(es,{className:"w-4 h-4 text-electric-cyan"}),"4. Confirmed Tech Stack"]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:n.techStack.map(o=>h.jsx("span",{className:"px-3 py-1 rounded-md bg-dark-850 border border-white/15 text-xs font-mono text-silver-200",children:o},o))})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"text-xs font-mono text-silver-400 uppercase tracking-wider",children:"5. Engineering & Development Process"}),h.jsx("div",{className:"space-y-2.5",children:n.process.map((o,c)=>h.jsxs("div",{className:"flex items-start gap-3 text-sm text-silver-300",children:[h.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 border border-white/15 text-xs font-mono text-electric-cyan flex items-center justify-center mt-0.5",children:c+1}),h.jsx("span",{className:"leading-relaxed",children:o})]},c))})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"text-xs font-mono text-silver-400 uppercase tracking-wider",children:"6. Final Results & Deliverables"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:n.results.map((o,c)=>h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-950 border border-white/10 flex items-start gap-2.5",children:[h.jsx(yr,{className:"w-4 h-4 text-terminal-green flex-shrink-0 mt-0.5"}),h.jsx("span",{className:"text-xs text-silver-300 leading-relaxed",children:o})]},c))})]}),n.images&&n.images.length>0&&h.jsxs("div",{className:"space-y-4 pt-2",children:[h.jsx("div",{className:"text-xs font-mono text-silver-400 uppercase tracking-wider",children:"7. Visual Evidence & Deliverables"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:n.images.map((o,c)=>h.jsxs("div",{className:"group relative rounded-xl overflow-hidden border border-white/15 bg-dark-950",children:[h.jsx("img",{src:o.url,alt:o.caption,className:"w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"}),h.jsx("div",{className:"p-2.5 bg-dark-900 border-t border-white/10 text-[11px] font-mono text-silver-400",children:o.caption})]},c))})]})]}),h.jsxs("div",{className:"p-4 bg-dark-850 border-t border-white/10 flex items-center justify-between text-xs font-mono text-silver-400",children:[h.jsxs("span",{children:["Project ID: ",s.id]}),h.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors",children:"Close Deep Dive"})]})]})]})},Oi={event:"CyCTF 2026 Finals",role:"Competitive CTF Participant",team:"Cykoo",handle:"DEVAULT",placement:"#123",totalTeams:"262",proofImage:"/assets/cyctf-certificate.jpg"},Kw=[{id:"cisco-ethical-hacker",title:"Cisco Ethical Hacker",issuer:"Cisco Networking Academy",type:"Course Completion Certificate",date:"October 2026",description:"Comprehensive curriculum covering offensive security methodologies, penetration testing frameworks, vulnerability scanning, password cracking, social engineering vectors, and defensive countermeasure evaluation. Attended the official graduation ceremony.",skills:["Ethical Hacking","Reconnaissance","Vulnerability Assessment","Exploitation Concepts","Kali Linux","Metasploit"],proofImage:"/assets/yahia-portrait.jpg",proofNote:"Attended the Cisco Networking Academy Ethical Hacker Certification Ceremony (October 2026)."},{id:"military-academy-security",title:"National Security & Strategic Studies",issuer:"Military Academy",type:"Course Completion & Shield of Honor",date:"June 2026",description:"Honored with the official Certificate of Completion and the prestigious Shield of Honor upon graduating from the National Security and Strategic Studies program at the Military Academy. Analyzed geopolitical risk frameworks, defense paradigms, crisis management, and strategic security architectures.",skills:["National Security","Strategic Analysis","Defense Paradigms","Crisis Decision Modeling","Geopolitical Risk Assessment"],proofImage:"/assets/military-academy-shield.jpg",proofNote:"Ceremony Photographic Record: Presentation of Official Certificate & Shield of Honor (June 2026)",link:"https://www.linkedin.com/posts/yahia-elsemary-a11930399_honored-to-receive-this-certificate-and-shield-share-7466498573958922240-xSDG"},{id:"microsoft-ai-900",title:"Microsoft Certified: Azure AI Fundamentals (AI-900)",issuer:"Microsoft",type:"Official Microsoft Certification",date:"March 2026",description:"Demonstrated fundamental knowledge of machine learning concepts, artificial intelligence workloads, computer vision, natural language processing, and ethical responsible AI principles on Azure cloud architecture.",skills:["Azure AI Services","Machine Learning Foundations","Computer Vision","Natural Language Processing","Responsible AI Principles"],proofImage:"/assets/microsoft-ai-900.jpg",proofNote:"Verified Microsoft Certified (AI-900) Credential Badge (March 2026)",link:"https://www.linkedin.com/posts/yahia-elsemary-a11930399_i-earned-my-ai-900-badge-im-so-proud-share-7428504071650570240-h9o7"},{id:"microsoft-auth-cybersecurity",title:"Authentication & Authorization in Cybersecurity",issuer:"Microsoft",type:"Verified Microsoft Security Credential",date:"March 2026",description:"Validated mastery of identity and access governance, Zero-Trust architectural models, modern authentication protocols, role-based access control (RBAC), and enterprise defense against credential exfiltration.",skills:["Authentication & Authorization","Zero-Trust Architecture","Identity Access Management (IAM)","RBAC","MFA Security Protocols"],proofImage:"/assets/microsoft-auth-cybersecurity.jpg",proofNote:"Verified Microsoft Security Credential Badge (March 2026)",link:"https://www.linkedin.com/posts/yahia-elsemary-a11930399_i-earned-my-describe-authentication-and-share-7428500109572608000-gRIh"},{id:"cisco-intro-cybersecurity",title:"Cisco Introduction to Cybersecurity",issuer:"Cisco Networking Academy",type:"Course Completion Certificate",date:"March 2026",description:"Foundational training in cybersecurity principles, confidentiality-integrity-availability (CIA) triad, malware classifications, network defense mechanisms, and secure operational practices.",skills:["Network Security Fundamentals","Threat Landscapes","CIA Triad","Malware Analysis Basics","Security Policies"],proofNote:"Course completion verified through Cisco Networking Academy (March 2026)."}],Zw=[{title:"Offensive Security & Red Teaming",description:"Hands-on practice in penetration testing methodologies, reconnaissance, port scanning, service enumeration, and credential auditing in simulated lab environments.",tools:["Kali Linux","Nmap","Burp Suite","Metasploit","Hydra","Gobuster"]},{title:"Network Forensics & Packet Analysis",description:"Deep inspection of transport and application layer traffic to detect unauthorized port sweeps, DNS exfiltration, ARP poisoning, and anomaly signatures.",tools:["Wireshark","TCPDump","Netcat","Tshark","Scapy"]},{title:"Honeypots & Active Deception",description:"Architecting isolated deceptive systems that mimic corporate infrastructure to capture zero-day attacker activity, extract payloads, and assess threat intent.",tools:["Cowrie","Dionaea","Python Sockets","Docker Sandboxes","Syslog Analysis"]},{title:"CTF Competitions & Cryptanalysis",description:"Competitive problem-solving tackling stenography, cryptographic deciphering, reverse engineering binary payloads, and escaping sandboxed environments.",tools:["CyberChef","Ghidra","John the Ripper","Hashcat","Radare2"]}],Ym=`
██████╗ ███████╗██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
██╔══██╗██╔════╝██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
██║  ██║█████╗  ██║   ██║███████║██║   ██║██║     ██║   
██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   
██████╔╝███████╗ ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   
╚═════╝ ╚══════╝  ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   
       >> YAHIA ELSEMARY // CREATIVE SEC-LAB <<
`,Qw=`
                 ______
              .-"      "-.
             /            \\
            |              |
            |,  .-.  .-.  ,|
            | )(__/  \\__)( |
            |/     /\\     \\|
            (_     ^^     _)
             \\__|IIIIII|__/
              | \\IIIIII/ |
              \\          /
               \`--------\`
     [ OFFENSIVE SECURITY AUDITING ]
`,Jw=`
             .---.
           /   |   \\
          / /\\ | /\\ \\
         | |  \\|/  | |
         | |  /|\\  | |
          \\ \\/ | \\/ /
           \\   |   /
             '---'
   [ EYE OF AGAMOTTO // CHRONO-DIAL ]
`,eE=()=>{const{theme:s,toggleTheme:e,setTheme:n}=zg(),[r,o]=Ie.useState([{id:"1",type:"system",text:"DEVAULT OS v4.26-aastmt [Secure Offensive Shell]"},{id:"2",type:"ascii",text:Ym},{id:"3",type:"system",text:'Type "help" to view 15+ commands, or click the quick action chips below.'}]),[c,u]=Ie.useState(""),[d,p]=Ie.useState(!1),g=Ie.useRef(null),v=Ie.useRef(null),S=Ie.useRef(null);Ie.useEffect(()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)},[r,d]),Ie.useEffect(()=>{var k;if(!d)return;const E=g.current;if(!E)return;const y=E.getContext("2d");if(!y)return;E.width=((k=E.parentElement)==null?void 0:k.clientWidth)||600,E.height=300;const x="0123456789ABCDEF!@#$%^&*()_+-=~[]{}|;:<>,.?/DEVAULT",P=13,D=Math.floor(E.width/P),A=Array(D).fill(1);let j;const U=()=>{y.fillStyle="rgba(5, 7, 10, 0.08)",y.fillRect(0,0,E.width,E.height),y.fillStyle="#00ff88",y.font=`${P}px "JetBrains Mono", monospace`;for(let O=0;O<A.length;O++){const N=x[Math.floor(Math.random()*x.length)];y.fillText(N,O*P,A[O]*P),A[O]*P>E.height&&Math.random()>.975&&(A[O]=0),A[O]++}j=requestAnimationFrame(U)};return U(),()=>cancelAnimationFrame(j)},[d]);const _=E=>{const y=E.trim().toLowerCase();if(!y)return;const x=[...r,{id:Date.now().toString(),type:"input",text:`$ ${E}`}],P=y.split(" ");switch(P[0]){case"help":x.push({id:(Date.now()+1).toString(),type:"output",text:"AVAILABLE TERMINAL COMMANDS:"},{id:(Date.now()+2).toString(),type:"output",text:"  whoami     - Identity, AASTMT affiliation & mission"},{id:(Date.now()+3).toString(),type:"output",text:"  aastmt     - Arab Academy for Science & Technology profile"},{id:(Date.now()+4).toString(),type:"output",text:"  saqr       - SAQRWEAR Full-Stack architecture & auth hash"},{id:(Date.now()+5).toString(),type:"output",text:"  matrix     - Start / stop live green ASCII matrix rain"},{id:(Date.now()+6).toString(),type:"output",text:"  banner     - Render full ASCII art logo"},{id:(Date.now()+7).toString(),type:"output",text:"  ascii      - Print security & eldritch ASCII art gallery"},{id:(Date.now()+8).toString(),type:"output",text:"  nmap       - Run port reconnaissance scan on yahia.dev"},{id:(Date.now()+9).toString(),type:"output",text:"  ping       - Transmit ICMP packets to target host"},{id:(Date.now()+10).toString(),type:"output",text:'  theme      - Switch theme (e.g. "theme light", "theme dark")'},{id:(Date.now()+11).toString(),type:"output",text:"  ctf        - View CYCTF 2026 score (#123) and tournament log"},{id:(Date.now()+12).toString(),type:"output",text:"  cert       - List verified Cisco Networking Academy credentials"},{id:(Date.now()+13).toString(),type:"output",text:"  skills     - Print full engineering and cybersecurity matrix"},{id:(Date.now()+14).toString(),type:"output",text:"  projects   - Output verified GitHub and live web platforms"},{id:(Date.now()+15).toString(),type:"output",text:"  sudo       - Attempt privileged superuser escalation"},{id:(Date.now()+16).toString(),type:"output",text:"  clear      - Wipe terminal buffer"});break;case"whoami":x.push({id:(Date.now()+1).toString(),type:"success",text:"[ID]: Yahia Elsemary (Handle: DEVAULT)"},{id:(Date.now()+2).toString(),type:"output",text:"[EDUCATION]: Arab Academy for Science, Technology and Maritime Transport (AASTMT)"},{id:(Date.now()+3).toString(),type:"output",text:"[ROLE]: Creative Developer • Web Engineer • Cybersecurity Enthusiast"},{id:(Date.now()+4).toString(),type:"output",text:'[MISSION]: "I build at the intersection of creativity, engineering, and technology."'},{id:(Date.now()+5).toString(),type:"output",text:"[LOCATION]: Egypt (UTC+2) • Open to high-impact engagements"});break;case"aastmt":x.push({id:(Date.now()+1).toString(),type:"success",text:"=== ARAB ACADEMY FOR SCIENCE, TECHNOLOGY & MARITIME TRANSPORT ==="},{id:(Date.now()+2).toString(),type:"output",text:"Institution: AASTMT (Arab League Specialized Agency)"},{id:(Date.now()+3).toString(),type:"output",text:"Faculty: Engineering & Computer Science Department"},{id:(Date.now()+4).toString(),type:"output",text:"Focus: Cybersecurity Systems, Network Protocols & Deception Architectures"},{id:(Date.now()+5).toString(),type:"output",text:"Thesis Concept: AI-Powered Adaptive Corporate Honeypot & Telemetry"});break;case"saqr":x.push({id:(Date.now()+1).toString(),type:"success",text:"=== SAQRWEAR FULL-STACK COMMERCE ARCHITECTURE ==="},{id:(Date.now()+2).toString(),type:"output",text:"Frontend: Luxury Streetwear Storefront with Arabic Typography"},{id:(Date.now()+3).toString(),type:"output",text:"Backend Engine: mgmt-saqr (~160KB enterprise management core)"},{id:(Date.now()+4).toString(),type:"output",text:"Security Layer: SAQR® Anti-Brute Force Engine v3.2 (Zero Plaintext Auth)"},{id:(Date.now()+5).toString(),type:"output",text:"Auth Hash: ROOT_AUTH_U (SHA-256) • Session Lockout Heuristics"},{id:(Date.now()+6).toString(),type:"output",text:"Dataflow: Live 2-way client checkout to management dispatch queue"},{id:(Date.now()+7).toString(),type:"output",text:"Live URL: https://blackstarii.github.io/SAQRWEAR_/"});break;case"matrix":p(!d),x.push({id:(Date.now()+1).toString(),type:"success",text:d?"[-] Digital rain halted.":'[+] Matrix digital rain initialized. Type "matrix" to toggle.'});break;case"banner":x.push({id:(Date.now()+1).toString(),type:"ascii",text:Ym});break;case"ascii":x.push({id:(Date.now()+1).toString(),type:"ascii",text:Qw},{id:(Date.now()+2).toString(),type:"ascii",text:Jw});break;case"theme":P[1]==="light"?(n("light"),x.push({id:(Date.now()+1).toString(),type:"success",text:"[+] Switched system theme to LIGHT mode."})):P[1]==="dark"?(n("dark"),x.push({id:(Date.now()+1).toString(),type:"success",text:"[+] Switched system theme to DARK mode."})):(e(),x.push({id:(Date.now()+1).toString(),type:"success",text:`[+] Toggled theme to ${s==="dark"?"LIGHT":"DARK"} mode.`}));break;case"nmap":case"scan":x.push({id:(Date.now()+1).toString(),type:"system",text:"Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-12 17:45 Cairo"},{id:(Date.now()+2).toString(),type:"output",text:"Nmap scan report for yahia-elsemary.dev (127.0.0.1)"},{id:(Date.now()+3).toString(),type:"output",text:"Host is up (0.00014s latency)."},{id:(Date.now()+4).toString(),type:"output",text:"PORT     STATE SERVICE       VERSION"},{id:(Date.now()+5).toString(),type:"output",text:"22/tcp   open  ssh           OpenSSH 9.6p1 Debian"},{id:(Date.now()+6).toString(),type:"output",text:"80/tcp   open  http          Vite HTTP Server"},{id:(Date.now()+7).toString(),type:"output",text:"443/tcp  open  ssl/https     Cloudflare TLS 1.3"},{id:(Date.now()+8).toString(),type:"output",text:"8080/tcp open  http-proxy    DEVAULT Adaptive Honeypot Decoy"},{id:(Date.now()+9).toString(),type:"success",text:"Nmap done: 1 IP address scanned in 0.42 seconds"});break;case"ping":x.push({id:(Date.now()+1).toString(),type:"system",text:"PING blackstarii.github.io (185.199.108.153) 56(84) bytes of data."},{id:(Date.now()+2).toString(),type:"output",text:"64 bytes from 185.199.108.153: icmp_seq=1 ttl=118 time=14.2 ms"},{id:(Date.now()+3).toString(),type:"output",text:"64 bytes from 185.199.108.153: icmp_seq=2 ttl=118 time=13.8 ms"},{id:(Date.now()+4).toString(),type:"output",text:"64 bytes from 185.199.108.153: icmp_seq=3 ttl=118 time=14.1 ms"},{id:(Date.now()+5).toString(),type:"success",text:"--- ping statistics --- 3 packets transmitted, 3 received, 0% packet loss"});break;case"ctf":x.push({id:(Date.now()+1).toString(),type:"success",text:"=== CYCTF 2026 SCOREBOARD REPORT ==="},{id:(Date.now()+2).toString(),type:"output",text:"Handle: DEVAULT | Team: Cykoo"},{id:(Date.now()+3).toString(),type:"output",text:"Final Rank: #123 out of 262 teams"},{id:(Date.now()+4).toString(),type:"output",text:"Verified Certificate of Achievement Issued"});break;case"cert":x.push({id:(Date.now()+1).toString(),type:"success",text:"VERIFIED CREDENTIALS & HONORS (CHRONOLOGICAL):"},{id:(Date.now()+2).toString(),type:"output",text:"• [Nov 2026] CyCTF 2026 Finals: Rank #123 / 262 Teams (DEVAULT / Team Cykoo)"},{id:(Date.now()+3).toString(),type:"output",text:"• [Oct 2026] Cisco Networking Academy: Ethical Hacker (Ceremony Record)"},{id:(Date.now()+4).toString(),type:"output",text:"• [Jun 2026] Military Academy: National Security & Strategic Studies (Certificate & Shield of Honor)"},{id:(Date.now()+5).toString(),type:"output",text:"• [Mar 2026] Microsoft Certified: Azure AI Fundamentals (AI-900)"},{id:(Date.now()+6).toString(),type:"output",text:"• [Mar 2026] Microsoft: Authentication & Authorization in Cybersecurity"},{id:(Date.now()+7).toString(),type:"output",text:"• [Mar 2026] Cisco Networking Academy: Introduction to Cybersecurity"});break;case"skills":x.push({id:(Date.now()+1).toString(),type:"output",text:"[SECURITY]: Kali Linux, Nmap, Wireshark, Burp Suite, Honeypot Deception"},{id:(Date.now()+2).toString(),type:"output",text:"[DEV]: React, TypeScript, Three.js, Canvas 2D, Python 3, Node.js"},{id:(Date.now()+3).toString(),type:"output",text:"[SYSTEMS]: Docker, Linux Administration, WebSockets, REST APIs"});break;case"projects":x.push({id:(Date.now()+1).toString(),type:"output",text:"1. SAQRWEAR Full-Stack Platform (blackstarii.github.io/SAQRWEAR_)"},{id:(Date.now()+2).toString(),type:"output",text:"2. Mystic Arts AR Spellcasting (blackstarii.github.io/AR-programming-STRANGE)"},{id:(Date.now()+3).toString(),type:"output",text:"3. PAPERX Financial Exchange (blackstarii.github.io/paperxtrading)"},{id:(Date.now()+4).toString(),type:"output",text:"4. Omni-Admin 58KB Console (blackstarii.github.io/management-dashboard)"},{id:(Date.now()+5).toString(),type:"output",text:"5. Orbit Academy LMS (blackstarii.github.io/orbit-academy)"},{id:(Date.now()+6).toString(),type:"output",text:"6. Dar El-Oud Boutique (blackstarii.github.io/dar-eloud-perfumes)"},{id:(Date.now()+7).toString(),type:"output",text:"7. MARK 65 Cyber AI Assistant & HUD (Gemini Live API)"},{id:(Date.now()+8).toString(),type:"output",text:"8. AI Adaptive Honeypot Deception Architecture (AASTMT)"});break;case"sudo":x.push({id:(Date.now()+1).toString(),type:"error",text:'[!] Permission denied: User "devault" is in the sudoers file, but root credentials are protected by SHA-256.'});break;case"clear":o([{id:Date.now().toString(),type:"system",text:"Terminal buffer cleared. Ready."}]),u("");return;default:x.push({id:(Date.now()+1).toString(),type:"error",text:`Command not found: "${E}". Type "help" or click one of the quick chips.`})}o(x),u("")},M=E=>{E.preventDefault(),_(c)},b=["help","matrix","aastmt","saqr","nmap","ctf","theme","ascii","clear"];return h.jsxs("div",{className:"terminal-window w-full bg-dark-900/95 rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs md:text-sm relative",children:[h.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-dark-850 border-b border-white/10",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-3 h-3 rounded-full bg-terminal-red/80"}),h.jsx("div",{className:"w-3 h-3 rounded-full bg-terminal-amber/80"}),h.jsx("div",{className:"w-3 h-3 rounded-full bg-terminal-green/80"}),h.jsxs("span",{className:"ml-2 text-silver-400 text-xs font-medium flex items-center gap-1.5",children:[h.jsx(es,{className:"w-3.5 h-3.5 text-electric-cyan"}),"devault@aastmt-kali:~ (zsh)"]})]}),h.jsxs("div",{className:"flex items-center space-x-3 text-silver-400 text-xs",children:[h.jsxs("button",{onClick:()=>_("matrix"),className:`p-1 rounded hover:text-white transition-colors flex items-center gap-1 ${d?"text-terminal-green":"text-silver-500"}`,title:"Toggle Matrix digital rain",children:[d?h.jsx(Pv,{className:"w-3 h-3"}):h.jsx(wg,{className:"w-3 h-3"}),h.jsx("span",{className:"text-[10px]",children:"MATRIX"})]}),h.jsx("button",{onClick:e,className:"p-1 rounded hover:text-electric-cyan transition-colors",title:`Toggle ${s==="dark"?"Light":"Dark"} mode`,children:s==="dark"?h.jsx(rd,{className:"w-3.5 h-3.5"}):h.jsx(id,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:()=>_("clear"),title:"Reset Terminal",className:"hover:text-silver-200 transition-colors",children:h.jsx(Rv,{className:"w-3.5 h-3.5"})})]})]}),d&&h.jsxs("div",{className:"relative w-full h-44 bg-dark-950 border-b border-terminal-green/30 overflow-hidden",children:[h.jsx("canvas",{ref:g,className:"w-full h-full block"}),h.jsx("div",{className:"absolute top-2 right-3 text-[10px] text-terminal-green/80 font-mono",children:"LIVE MATRIX DIGITAL RAIN [RUNNING]"})]}),h.jsx("div",{ref:v,className:"p-4 md:p-6 max-h-[380px] overflow-y-auto space-y-2 select-text",onClick:()=>{var E;return(E=S.current)==null?void 0:E.focus()},children:r.map(E=>h.jsxs("div",{className:"leading-relaxed",children:[E.type==="input"&&h.jsx("span",{className:"text-electric-cyan font-bold",children:E.text}),E.type==="system"&&h.jsx("span",{className:"text-silver-500 italic",children:E.text}),E.type==="output"&&h.jsx("span",{className:"text-silver-300",children:E.text}),E.type==="success"&&h.jsx("span",{className:"text-terminal-green font-semibold",children:E.text}),E.type==="error"&&h.jsx("span",{className:"text-terminal-red",children:E.text}),E.type==="ascii"&&h.jsx("pre",{className:"text-terminal-green font-mono text-[10px] sm:text-xs leading-none overflow-x-auto py-1 select-all",children:E.text})]},E.id))}),h.jsxs("div",{className:"px-4 py-2 bg-dark-950/80 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[11px]",children:[h.jsx("span",{className:"text-silver-500 mr-1 text-[10px] uppercase tracking-wider",children:"Quick Commands:"}),b.map(E=>h.jsx("button",{type:"button",onClick:()=>_(E),className:"px-2 py-0.5 rounded bg-dark-850 hover:bg-dark-800 border border-white/10 text-silver-300 hover:text-electric-cyan hover:border-electric-cyan/40 transition-all font-mono",children:E},E))]}),h.jsxs("form",{onSubmit:M,className:"flex items-center px-4 py-3 bg-dark-950 border-t border-white/10",children:[h.jsx("span",{className:"text-terminal-green font-bold mr-2",children:"devault@kali:~$"}),h.jsx("input",{ref:S,type:"text",value:c,onChange:E=>u(E.target.value),placeholder:"type 'help', 'matrix', 'aastmt', 'saqr'...",className:"flex-1 bg-transparent text-silver-100 outline-none border-none placeholder-silver-600 focus:ring-0 text-xs md:text-sm font-mono",autoComplete:"off",spellCheck:"false"}),h.jsx("button",{type:"submit",className:"text-silver-400 hover:text-electric-cyan px-2 py-1",children:h.jsx(Ev,{className:"w-3.5 h-3.5"})})]})]})},tE=()=>{const[s,e]=Ie.useState(null);return h.jsxs("section",{id:"security",className:"py-24 relative bg-dark-900 border-t border-white/5",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"space-y-3 mb-16",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-terminal-green uppercase",children:[h.jsx(Rg,{className:"w-4 h-4 text-terminal-green"}),"02 // CYBERSECURITY LAB & OFFENSIVE RESEARCH"]}),h.jsx(hn,{as:"h2",text:"Security Lab & CTF Research",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-2xl font-light",children:"Investigating penetration testing methodologies, active deception architectures, network packet analysis, and competitive capture-the-flag problem solving."})]}),h.jsxs("div",{className:"mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-950 via-dark-850 to-dark-950 border border-terminal-green/30 shadow-2xl relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-terminal-green/5 rounded-full blur-[100px] pointer-events-none"}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10",children:[h.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-green/10 border border-terminal-green/30 text-terminal-green text-xs font-mono",children:[h.jsx(yr,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"OFFICIAL VERIFIED TOURNAMENT RECORD"})]}),h.jsx(hn,{as:"h3",text:`Ranked #123 in ${Oi.event}`,className:"text-2xl sm:text-3xl font-display font-bold text-white"}),h.jsxs("p",{className:"text-silver-300 text-sm sm:text-base leading-relaxed",children:["Competed under the handle ",h.jsx("span",{className:"text-electric-cyan font-mono font-semibold",children:Oi.handle})," as part of team ",h.jsx("span",{className:"text-white font-mono font-semibold",children:Oi.team}),". Finished 123rd out of 262 teams on the final tournament scoreboard, resolving complex vectors in web exploitation, binary analysis, and cryptographic deciphering."]}),h.jsxs("div",{className:"flex flex-wrap gap-4 pt-2 text-xs font-mono",children:[h.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-silver-300",children:["Tournament: ",h.jsx("span",{className:"text-white",children:Oi.event})]}),h.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-silver-300",children:["Final Rank: ",h.jsx("span",{className:"text-yellow-400 font-bold",children:Oi.placement})," / ",Oi.totalTeams]}),h.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-silver-300",children:["Role: ",h.jsx("span",{className:"text-white",children:Oi.role})]})]})]}),h.jsxs("div",{className:"lg:col-span-4 flex flex-col items-center",children:[h.jsxs("div",{onClick:()=>e(Oi.proofImage),className:"group relative cursor-pointer rounded-xl overflow-hidden border border-white/20 bg-dark-950 p-2 shadow-2xl hover:border-terminal-green/60 transition-all max-w-[240px]",children:[h.jsx("img",{src:Oi.proofImage,alt:"CYCTF 2026 Certificate of Achievement #123",className:"w-full h-auto rounded-lg object-contain group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white backdrop-blur-xs",children:[h.jsx(Rl,{className:"w-4 h-4 text-terminal-green"}),h.jsx("span",{children:"Inspect Certificate"})]})]}),h.jsx("span",{className:"text-[11px] font-mono text-silver-500 mt-2",children:"Click to inspect official certificate"})]})]})]}),h.jsxs("div",{className:"mb-16 space-y-6",children:[h.jsxs("div",{className:"space-y-1",children:[h.jsxs("h3",{className:"text-xl font-display font-bold text-white flex items-center gap-2",children:[h.jsx(_v,{className:"w-5 h-5 text-electric-cyan"}),h.jsx(hn,{as:"span",text:"Verified Cybersecurity Credentials"})]}),h.jsx("p",{className:"text-xs font-mono text-silver-400",children:"* Distinguished as Cisco Networking Academy Course Completion Certificates"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Kw.map(n=>h.jsxs("div",{className:"p-6 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-white/20 transition-all space-y-4 flex flex-col justify-between",children:[h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-electric-blue/10 border border-electric-cyan/30 text-electric-cyan text-[11px] font-mono",children:n.type}),h.jsx("span",{className:"text-xs font-mono text-silver-500",children:n.date})]}),h.jsx(hn,{as:"h4",text:n.title,className:"text-lg sm:text-xl font-display font-bold text-white leading-snug"}),h.jsx("p",{className:"text-silver-300 text-xs sm:text-sm font-light leading-relaxed",children:n.description})]}),h.jsxs("div",{className:"space-y-3 pt-3 border-t border-white/10",children:[h.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.skills.map(r=>h.jsx("span",{className:"px-2 py-0.5 rounded bg-dark-850 text-[10px] font-mono text-silver-300",children:r},r))}),h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pt-1",children:[n.proofImage&&h.jsxs("button",{onClick:()=>e(n.proofImage),className:"inline-flex items-center gap-1.5 text-xs font-mono text-electric-cyan hover:underline",children:[h.jsx(Rl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:n.proofNote||"View photographic ceremony record"})]}),n.link&&h.jsxs("a",{href:n.link,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-xs font-mono text-silver-400 hover:text-white",children:[h.jsx(za,{className:"w-3 h-3"}),h.jsx("span",{children:"LinkedIn Post"})]})]})]})]},n.id))})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[h.jsxs("div",{className:"lg:col-span-6 space-y-4",children:[h.jsxs("h3",{className:"text-xl font-display font-bold text-white flex items-center gap-2",children:[h.jsx(bv,{className:"w-5 h-5 text-terminal-green"}),h.jsx(hn,{as:"span",text:"Specialized Research Domains"})]}),h.jsx("div",{className:"space-y-3",children:Zw.map(n=>h.jsxs("div",{className:"p-4 rounded-xl bg-dark-950/60 border border-white/10 space-y-2",children:[h.jsx("h4",{className:"text-sm font-display font-semibold text-silver-100",children:n.title}),h.jsx("p",{className:"text-xs text-silver-400 font-light leading-relaxed",children:n.description}),h.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:n.tools.map(r=>h.jsx("span",{className:"px-2 py-0.5 rounded bg-dark-850 border border-white/5 text-[10px] font-mono text-silver-400",children:r},r))})]},n.title))})]}),h.jsxs("div",{className:"lg:col-span-6 space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("h3",{className:"text-xl font-display font-bold text-white flex items-center gap-2",children:[h.jsx(es,{className:"w-5 h-5 text-electric-cyan"}),"Live Reconnaissance Shell"]}),h.jsx("span",{className:"text-[11px] font-mono text-silver-500",children:"Type commands to test"})]}),h.jsx(eE,{})]})]})]}),s&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-md animate-in fade-in",onClick:()=>e(null),children:h.jsxs("div",{className:"relative max-w-2xl max-h-[90vh] bg-dark-900 border border-white/20 rounded-2xl p-3 shadow-2xl",children:[h.jsx("img",{src:s,alt:"Verified Cybersecurity Document Proof",className:"max-h-[80vh] w-auto rounded-xl object-contain mx-auto"}),h.jsx("div",{className:"text-center pt-3 text-xs font-mono text-silver-400",children:"Click anywhere to dismiss verified proof document"})]})})]})},nE=[{id:"mandala-generator",title:"Mystic Arts Mandala Rune Engine",category:"Computer Vision & Creative Math",description:"Real-time procedural generation of Doctor Strange Tao mandalas, interlocking sacred triangles, and radial sparks using polar coordinates on an interactive HTML5 canvas.",tags:["Procedural Math","HTML5 Canvas","Sacred Geometry","Interactive Physics"],interactiveType:"mandala"},{id:"liquid-chrome",title:"3D Liquid Chrome & WebGL Specular Shader",category:"3D & Shader Physics",description:"Dynamic metallic liquid deformation and anisotropic high-specular chrome reflections with real-time mouse repulsion and gyro interaction.",tags:["Three.js","GLSL Concepts","Specular Lighting","Anisotropic Reflection"],interactiveType:"shader"},{id:"security-terminal",title:"DEVAULT Cyber Reconnaissance Shell",category:"Cybersecurity Interactive Lab",description:"Emulated Unix / Kali Linux security terminal environment providing interactive inspection of Yahia’s system credentials, verified CTF achievements, and network recon.",tags:["CLI Emulation","Linux Shell","Security Diagnostics","Interactive REPL"],interactiveType:"terminal"}],iE=()=>{const s=Ie.useRef(null),[e,n]=Ie.useState("tao"),[r,o]=Ie.useState(0);return Ie.useEffect(()=>{var D;const c=s.current;if(!c)return;const u=c.getContext("2d");if(!u)return;let d=c.width=((D=c.parentElement)==null?void 0:D.clientWidth)||600,p=c.height=420;const g=()=>{c.parentElement&&(d=c.width=c.parentElement.clientWidth,p=c.height=420)};window.addEventListener("resize",g);let v=d/2,S=p/2,_=d/2,M=p/2,b=0,E=[];const y=A=>{const j=c.getBoundingClientRect(),U="touches"in A?A.touches[0].clientX:A.clientX,k="touches"in A?A.touches[0].clientY:A.clientY;_=U-j.left,M=k-j.top;const O=e==="eye"?4:2;for(let N=0;N<O;N++){const C=Math.random()*Math.PI*2,z=Math.random()*3+1,ae=e==="eye"?"#10b981":e==="shatter"?"#a855f7":"#f59e0b";E.push({x:_,y:M,vx:Math.cos(C)*z,vy:Math.sin(C)*z,size:Math.random()*2.5+1,alpha:1,color:ae,life:0,maxLife:Math.random()*40+20})}};c.addEventListener("mousemove",y),c.addEventListener("touchmove",y,{passive:!0});let x;const P=()=>{if(x=requestAnimationFrame(P),u.fillStyle="rgba(7, 9, 14, 0.25)",u.fillRect(0,0,d,p),v+=(_-v)*.08,S+=(M-S)*.08,b+=.015,u.save(),u.translate(v,S),e==="tao"){const A="rgba(245, 158, 11, ",j="rgba(251, 191, 36, ";u.save(),u.rotate(b),u.strokeStyle=A+"0.7)",u.lineWidth=2,u.beginPath(),u.arc(0,0,110,0,Math.PI*2),u.stroke();for(let U=0;U<12;U++){const k=U*Math.PI*2/12,O=Math.cos(k)*105,N=Math.sin(k)*105,C=Math.cos(k)*115,z=Math.sin(k)*115;u.beginPath(),u.moveTo(O,N),u.lineTo(C,z),u.stroke()}u.restore(),u.save(),u.rotate(-b*1.5),u.strokeStyle=j+"0.85)",u.lineWidth=1.5,u.beginPath(),u.arc(0,0,75,0,Math.PI*2),u.stroke();for(let U=0;U<2;U++){u.beginPath();const k=U*Math.PI;for(let O=0;O<3;O++){const N=k+O*Math.PI*2/3,C=Math.cos(N)*75,z=Math.sin(N)*75;O===0?u.moveTo(C,z):u.lineTo(C,z)}u.closePath(),u.stroke()}u.restore(),u.fillStyle=j+"0.2)",u.beginPath(),u.arc(0,0,32,0,Math.PI*2),u.fill(),u.strokeStyle="#ffffff",u.lineWidth=1.5,u.beginPath(),u.arc(0,0,16,0,Math.PI*2),u.stroke()}else if(e==="eye"){const A="rgba(16, 185, 129, ";u.save(),u.rotate(b*2),u.strokeStyle=A+"0.9)",u.lineWidth=2.5,u.beginPath(),u.arc(0,0,120,0,Math.PI*2),u.stroke();for(let j=0;j<24;j++){const U=j*Math.PI*2/24,k=j%2===0?108:114;u.beginPath(),u.moveTo(Math.cos(U)*k,Math.sin(U)*k),u.lineTo(Math.cos(U)*120,Math.sin(U)*120),u.stroke()}u.restore(),u.save(),u.strokeStyle="#34d399",u.lineWidth=2,u.beginPath(),u.moveTo(-70,0),u.quadraticCurveTo(0,-50,70,0),u.quadraticCurveTo(0,50,-70,0),u.stroke(),u.fillStyle="rgba(52, 211, 153, 0.4)",u.beginPath(),u.arc(0,0,26,0,Math.PI*2),u.fill(),u.strokeStyle="#ffffff",u.beginPath(),u.arc(0,0,14,0,Math.PI*2),u.stroke(),u.restore()}else{u.save(),u.rotate(b*.8),u.strokeStyle="rgba(192, 132, 252, 0.85)",u.lineWidth=1.5;for(let A=3;A<=6;A++){const j=A*24;u.beginPath();for(let U=0;U<A;U++){const k=U*Math.PI*2/A,O=Math.cos(k)*j,N=Math.sin(k)*j;U===0?u.moveTo(O,N):u.lineTo(O,N)}u.closePath(),u.stroke()}u.restore()}u.restore();for(let A=E.length-1;A>=0;A--){const j=E[A];if(j.x+=j.vx,j.y+=j.vy,j.vy+=.05,j.life++,j.alpha=1-j.life/j.maxLife,j.life>=j.maxLife){E.splice(A,1);continue}u.fillStyle=j.color,u.globalAlpha=Math.max(0,j.alpha),u.beginPath(),u.arc(j.x,j.y,j.size,0,Math.PI*2),u.fill(),u.globalAlpha=1}o(E.length)};return P(),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",g),c.removeEventListener("mousemove",y),c.removeEventListener("touchmove",y)}},[e]),h.jsxs("div",{className:"relative w-full rounded-2xl overflow-hidden bg-dark-950 border border-white/10 shadow-2xl",children:[h.jsx("canvas",{ref:s,className:"w-full h-[380px] md:h-[420px] block cursor-crosshair touch-none"}),h.jsxs("div",{className:"absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-2 bg-dark-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-silver-300",children:[h.jsx(Pg,{className:"w-3.5 h-3.5 text-electric-cyan animate-pulse"}),h.jsx("span",{children:"Interactive Canvas Engine"}),h.jsx("span",{className:"text-silver-500",children:"|"}),h.jsxs("span",{className:"text-silver-400",children:[r," sparks"]})]}),h.jsxs("div",{className:"flex items-center gap-1 bg-dark-900/90 backdrop-blur-md p-1 rounded-full border border-white/10 pointer-events-auto",children:[h.jsx("button",{onClick:()=>n("tao"),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${e==="tao"?"bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm":"text-silver-400 hover:text-silver-200"}`,children:"Tao Mandala"}),h.jsx("button",{onClick:()=>n("eye"),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${e==="eye"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-silver-400 hover:text-silver-200"}`,children:"Eye of Agamotto"}),h.jsx("button",{onClick:()=>n("shatter"),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${e==="shatter"?"bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm":"text-silver-400 hover:text-silver-200"}`,children:"Mirror Dimension"})]})]}),h.jsx("div",{className:"absolute bottom-3 left-4 text-xs font-mono text-silver-500 pointer-events-none",children:"Move cursor or drag to guide eldritch spellcaster vectors"})]})},rE=()=>{const[s,e]=Ie.useState("mandala");return h.jsx("section",{id:"playground",className:"py-24 relative bg-dark-950 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",children:[h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase",children:[h.jsx(Pg,{className:"w-4 h-4 text-amber-400"}),"03 // EXPERIMENTAL DIGITAL LABORATORY"]}),h.jsx(hn,{as:"h2",text:"Creative Playground",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-xl font-light",children:"Interactive creative code, sacred geometry algorithms, WebGL shaders, and browser-based graphics experiments."})]}),h.jsxs("div",{className:"flex gap-2 p-1 bg-dark-900 border border-white/10 rounded-xl w-fit",children:[h.jsxs("button",{onClick:()=>e("mandala"),className:`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${s==="mandala"?"bg-white text-dark-950 font-bold":"text-silver-400 hover:text-white"}`,children:[h.jsx(ag,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Mystic Arts AR Canvas"})]}),h.jsxs("button",{onClick:()=>e("shader"),className:`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${s==="shader"?"bg-white text-dark-950 font-bold":"text-silver-400 hover:text-white"}`,children:[h.jsx(Sv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"3D Liquid Chrome Specular"})]})]})]}),h.jsx("div",{className:"mb-16",children:s==="mandala"?h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-silver-400 px-1",children:[h.jsxs("a",{href:"https://blackstarii.github.io/AR-programming-STRANGE/",target:"_blank",rel:"noreferrer",className:"hover:text-electric-cyan transition-colors flex items-center gap-1.5",children:[h.jsx("span",{children:"PROJECT: AR-programming-STRANGE • Launch Fullscreen Experience"}),h.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-electric-blue/15 text-electric-cyan border border-electric-cyan/30",children:"Live App ↗"})]}),h.jsx("span",{className:"hidden sm:inline",children:"PHYSICS: POLAR COORDINATE HARMONICS"})]}),h.jsx(iE,{})]}):h.jsxs("div",{className:"relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 shadow-2xl p-6 min-h-[460px] flex flex-col justify-between",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-silver-400 z-10",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-electric-cyan"}),"Three.js Specular Chrome Material & Mesh Displacement"]}),h.jsx("span",{className:"text-silver-500",children:"60 FPS Hardware Accelerated"})]}),h.jsx("div",{className:"w-full h-80 relative flex items-center justify-center my-auto",children:h.jsx(y0,{})}),h.jsxs("div",{className:"text-xs font-mono text-silver-400 border-t border-white/10 pt-3 flex flex-wrap justify-between items-center gap-2 z-10",children:[h.jsx("span",{children:"Move cursor or tilt device to manipulate chrome reflection vectors"}),h.jsx("span",{className:"text-electric-cyan",children:"Roughness: 0.12 • Metalness: 0.95"})]})]})}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:nE.map(n=>h.jsxs("div",{className:"p-6 rounded-2xl bg-dark-900/80 border border-white/10 hover:border-white/20 transition-all space-y-4 flex flex-col justify-between",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("span",{className:"text-[10px] font-mono tracking-widest text-electric-cyan uppercase",children:n.category}),h.jsx(hn,{as:"h3",text:n.title,className:"text-lg font-display font-bold text-white"}),h.jsx("p",{className:"text-xs text-silver-400 font-light leading-relaxed",children:n.description})]}),h.jsxs("div",{className:"space-y-3 pt-3 border-t border-white/10",children:[h.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tags.map(r=>h.jsx("span",{className:"px-2 py-0.5 rounded bg-dark-850 text-[10px] font-mono text-silver-400",children:r},r))}),h.jsxs("button",{onClick:()=>e(n.interactiveType==="mandala"?"mandala":"shader"),className:"inline-flex items-center gap-1.5 text-xs font-mono text-silver-300 hover:text-white transition-colors pt-1",children:[h.jsx(wg,{className:"w-3.5 h-3.5 text-electric-cyan"}),h.jsx("span",{children:"Launch in sandbox"})]})]})]},n.id))})]})})},sE=()=>{const s=[{year:"NOV 2026",title:"CyCTF 2026 Tournament Placement (#123 / 262 Teams)",detail:"Competed with Team Cykoo under handle DEVAULT (November 2026). Placed #123 out of 262 teams on the final tournament scoreboard, resolving multi-domain challenges in web exploitation, reverse engineering, and cryptography."},{year:"OCT 2026",title:"Cisco Networking Academy — Ethical Hacker Ceremony",detail:"Awarded Certificate of Completion in Ethical Hacking (October 2026), recognized at the official ceremony for offensive penetration testing and reconnaissance proficiencies."},{year:"SEP 2026",title:"Autonomous AI & Cyber Assistants (MARK 65 & JARVIS)",detail:"Engineered cross-platform cybernetic assistants integrating Google Gemini Live API audio streaming, hardware monitoring HUDs, and low-level diagnostic automation."},{year:"JUN 2026",title:"Military Academy — National Security & Strategic Studies",detail:"Honored with the official Certificate of Completion and the commemorative Shield of Honor upon completing intensive studies in national defense frameworks, geopolitical risk analysis, and strategic security architectures."},{year:"MAR 2026",title:"Microsoft Certified: Azure AI (AI-900) & AI Concepts",detail:"Earned official Microsoft Certified Azure AI Fundamentals credential, validating machine learning foundations, computer vision, and cloud intelligence workloads."},{year:"MAR 2026",title:"Microsoft: Authentication & Authorization in Cybersecurity",detail:"Validated mastery of identity and access governance, Zero-Trust architectural models, modern authentication protocols, and role-based access control (RBAC)."},{year:"MAR 2026",title:"Cisco Networking Academy — Introduction to Cybersecurity",detail:"Completed foundational security coursework in the CIA triad, malware classification, network protocol hardening, and threat mitigation."},{year:"2026",title:"Mystic Arts AR (Doctor Strange AR) & SAQRWEAR Full-Stack",detail:"Engineered Doctor Strange gesture-driven AR spellcasting web experience with MediaPipe Hands, alongside full-stack luxury platform SAQRWEAR with SHA-256 zero-plaintext auth."},{year:"LATE 2025 - PRESENT",title:"Arab Academy for Science, Technology and Maritime Transport (AASTMT)",detail:"Began engineering studies in late 2025 with specialization in cybersecurity systems, network defense architectures, system protocols, and high-performance creative web engineering."}];return h.jsx("section",{id:"about",className:"py-24 relative bg-dark-900 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"space-y-3 mb-16",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-silver-400 uppercase",children:[h.jsx(Mv,{className:"w-4 h-4 text-electric-cyan"}),"04 // PHILOSOPHY & IDENTITY"]}),h.jsx(hn,{as:"h2",text:"BEYOND THE INTERFACE.",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-2xl font-light",children:"A deliberate synthesis of creative aesthetics, low-level systems engineering, and offensive cybersecurity curiosity."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[h.jsxs("div",{className:"lg:col-span-7 space-y-6 text-silver-300 font-light leading-relaxed text-sm sm:text-base",children:[h.jsx("p",{className:"text-lg text-white font-normal",children:"Most software treats design and engineering as opposing disciplines. I view them as an interconnected continuum."}),h.jsxs("p",{children:["I am a creative developer, web engineer, and cybersecurity enthusiast studying at the ",h.jsx("strong",{className:"text-white",children:"Arab Academy for Science, Technology and Maritime Transport (AASTMT)"}),", working under the digital handle ",h.jsx("strong",{className:"text-white font-mono font-medium",children:"DEVAULT"}),". My work spans the tactile visual layer of interactive web experiences to the defensive depths of network protocols, threat modeling, and honeypot deception architectures."]}),h.jsxs("p",{children:["Whether engineering procedural sacred geometry in the browser with vanilla JavaScript and MediaPipe hand tracking, building autonomous voice-driven agents powered by the Gemini Live API, or auditing attack vectors in competitive CTFs, my approach remains grounded in technical rigor: ",h.jsx("em",{className:"text-silver-100 not-italic font-medium",children:"measure twice, craft with intentionality, and eliminate unnecessary abstraction."})]}),h.jsxs("div",{className:"p-6 rounded-2xl bg-dark-950 border border-white/10 space-y-3 my-4",children:[h.jsx("h3",{className:"text-xs font-mono tracking-wider text-electric-cyan uppercase",children:"Core Operating Principles"}),h.jsxs("ul",{className:"space-y-2 text-xs sm:text-sm text-silver-300",children:[h.jsxs("li",{className:"flex items-start gap-2.5",children:[h.jsx(yr,{className:"w-4 h-4 text-terminal-green mt-0.5 flex-shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Evidence-Driven Quality:"})," Real repositories, verifiable certificates, and documented code speak louder than empty adjectives."]})]}),h.jsxs("li",{className:"flex items-start gap-2.5",children:[h.jsx(yr,{className:"w-4 h-4 text-terminal-green mt-0.5 flex-shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Security from the Core:"})," Good software anticipates malice. Defensive architecture belongs in the prototype phase, not as a post-launch patch."]})]}),h.jsxs("li",{className:"flex items-start gap-2.5",children:[h.jsx(yr,{className:"w-4 h-4 text-terminal-green mt-0.5 flex-shrink-0"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Aesthetic Precision:"})," Respect typographic rhythm, negative space, and micro-interactions without trading off performance."]})]})]})]}),h.jsx("p",{className:"text-xs font-mono text-silver-500 pt-2",children:"Arab Academy for Science, Technology and Maritime Transport (AASTMT) • Egypt • Available for select remote engineering and creative architecture engagements."})]}),h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("h3",{className:"text-xl font-display font-bold text-white flex items-center gap-2",children:[h.jsx(es,{className:"w-5 h-5 text-electric-cyan"}),h.jsx(hn,{as:"span",text:"Verified Progression"})]}),h.jsx("div",{className:"relative pl-6 border-l border-white/15 space-y-8",children:s.map((e,n)=>h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-dark-950 border-2 border-electric-cyan group-hover:scale-125 transition-transform"}),h.jsx("span",{className:"text-[11px] font-mono text-electric-cyan uppercase tracking-wider block mb-1",children:e.year}),h.jsx("h4",{className:"text-base font-display font-bold text-white group-hover:text-silver-200 transition-colors",children:e.title}),h.jsx("p",{className:"text-xs text-silver-400 font-light mt-1.5 leading-relaxed",children:e.detail})]},n))})]})]})]})})},aE=[{category:"Creative Development & Frontend",description:"Crafting performant, visually cinematic web interfaces with precision typography and micro-interactions.",skills:[{name:"React / Next.js",level:"Advanced"},{name:"TypeScript",level:"Advanced"},{name:"Three.js / WebGL",level:"Proficient"},{name:"HTML5 Canvas 2D",level:"Advanced"},{name:"Tailwind CSS",level:"Advanced"},{name:"MediaPipe / CV",level:"Proficient"},{name:"Web Audio API",level:"Intermediate"}]},{category:"Cybersecurity & Offensive Lab",description:"Practical security research, ethical penetration testing concepts, and deception architectures.",skills:[{name:"Kali Linux & Bash",level:"Advanced"},{name:"Ethical Hacking (Cisco)",level:"Certified"},{name:"CTF Competition",level:"Ranked #123"},{name:"Network Forensics",level:"Proficient"},{name:"Wireshark & Packet Analysis",level:"Proficient"},{name:"Honeypot Engineering",level:"Research"},{name:"Vulnerability Assessment",level:"Proficient"}]},{category:"Backend & Systems Engineering",description:"Developing resilient servers, real-time audio streams, and systems automation.",skills:[{name:"Python (OOP, Sockets)",level:"Advanced"},{name:"Node.js / Express",level:"Proficient"},{name:"REST APIs & WebSockets",level:"Advanced"},{name:"PostgreSQL / SQL",level:"Intermediate"},{name:"Docker Sandboxes",level:"Intermediate"},{name:"Gemini Live API & AI",level:"Advanced"},{name:"Git & Version Control",level:"Advanced"}]},{category:"Design & Visual Architecture",description:"Art direction, luxury brand identities, and editorial typography design.",skills:[{name:"Brand Identity Design",level:"Advanced"},{name:"Arabic Calligraphy Systems",level:"Proficient"},{name:"UI/UX Design Architecture",level:"Advanced"},{name:"Editorial Layout Systems",level:"Advanced"},{name:"Motion Design Principles",level:"Proficient"}]}],oE=()=>{const s=e=>e.includes("Creative Development")?h.jsx(td,{className:"w-5 h-5 text-electric-cyan"}):e.includes("Cybersecurity")?h.jsx(Rg,{className:"w-5 h-5 text-terminal-green"}):e.includes("Backend")?h.jsx(es,{className:"w-5 h-5 text-blue-400"}):h.jsx(Av,{className:"w-5 h-5 text-amber-400"});return h.jsx("section",{id:"expertise",className:"py-24 relative bg-dark-950 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"space-y-3 mb-16",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-electric-cyan uppercase",children:[h.jsx(mg,{className:"w-4 h-4 text-electric-cyan"}),"05 // TECHNICAL MATRIX"]}),h.jsx(hn,{as:"h2",text:"Expertise & Technologies",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-2xl font-light",children:"Grounded capabilities across client-side architecture, offensive security auditing, and systems development. Structured without artificial percentage bars."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:aE.map(e=>h.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"p-2 rounded-lg bg-dark-850 border border-white/10",children:s(e.category)}),h.jsx(hn,{as:"h3",text:e.category,className:"text-xl font-display font-bold text-white"})]}),h.jsx("p",{className:"text-xs sm:text-sm text-silver-400 font-light leading-relaxed",children:e.description})]}),h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("span",{className:"text-[10px] font-mono tracking-wider text-silver-500 uppercase",children:"Verified Stack & Competencies"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:e.skills.map(n=>h.jsxs("div",{className:"group flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-dark-950 border border-white/10 hover:border-electric-cyan/40 hover:bg-dark-850 transition-all text-xs font-mono",children:[h.jsx("span",{className:"text-silver-200 group-hover:text-white font-medium",children:n.name}),h.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-dark-900 border border-white/10 text-silver-400 group-hover:text-electric-cyan group-hover:border-electric-cyan/30",children:n.level})]},n.name))})]})]},e.category))})]})})},lE=()=>{const[s,e]=Ie.useState(null),n=[{title:"CyCTF 2026 Tournament Certificate",issuer:"CyCTF Tournament Organizers",summary:"Official Certificate of Achievement presented to DEVAULT (Team Cykoo) for ranking #123 out of 262 teams on the final scoreboard.",badge:"Scoreboard Rank #123 • Nov 2026",image:"/assets/cyctf-certificate.jpg",meta:"Tournament Finalist • Nov 2026"},{title:"Cisco Ethical Hacker Ceremony Verification",issuer:"Cisco Networking Academy",summary:"Photographic evidence from the Cisco Networking Academy Ethical Hacker Certification Ceremony. Authentic user portrait preserved without AI alterations.",badge:"Ceremony Photographic Record • Oct 2026",image:"/assets/yahia-portrait.jpg",meta:"Cisco Networking Academy • Oct 2026"},{title:"Military Academy Certificate & Shield of Honor",issuer:"Military Academy",summary:"Awarded official Certificate and commemorative Shield of Honor upon completing the National Security and Strategic Studies program at the Military Academy.",badge:"Shield of Honor • June 2026",image:"/assets/military-academy-shield.jpg",meta:"Military Academy • June 2026",link:"https://www.linkedin.com/posts/yahia-elsemary-a11930399_honored-to-receive-this-certificate-and-shield-share-7466498573958922240-xSDG"},{title:"Microsoft Certified: Azure AI Fundamentals (AI-900)",issuer:"Microsoft",summary:"Official Microsoft certification validating core machine learning competencies, Azure cognitive services, and AI ethical architecture.",badge:"Official Microsoft Cert • Mar 2026",image:"/assets/microsoft-ai-900.jpg",meta:"Microsoft • Mar 2026",link:"https://www.linkedin.com/posts/yahia-elsemary-a11930399_i-earned-my-ai-900-badge-im-so-proud-share-7428504071650570240-h9o7"},{title:"Authentication & Authorization in Cybersecurity",issuer:"Microsoft",summary:"Verified Microsoft security credential covering identity and access management, Zero-Trust architectural models, RBAC, and MFA protocols.",badge:"Microsoft Security • Mar 2026",image:"/assets/microsoft-auth-cybersecurity.jpg",meta:"Microsoft Security • Mar 2026",link:"https://www.linkedin.com/posts/yahia-elsemary-a11930399_i-earned-my-describe-authentication-and-share-7428500109572608000-gRIh"},{title:"Mystic Arts AR (Doctor Strange) — Live Experience",issuer:"Mystic Arts AR Production",summary:"Live gesture-driven Doctor Strange AR spellcasting web application with MediaPipe Hands, Canvas 2D sacred geometry, and comprehensive architectural guides.",badge:"Interactive WebAR • 2026",image:"/assets/project-mystic-arts.jpg",meta:"blackstarii.github.io/AR-programming-STRANGE",link:"https://blackstarii.github.io/AR-programming-STRANGE/"},{title:"SAQRWEAR Full-Stack Platform & Storefront",issuer:"SAQRWEAR Official Production",summary:"Live full-stack luxury platform with client storefront synchronized with mgmt-saqr management engine, SHA-256 zero-plaintext auth, anti-brute force defenses, and inventory telemetry.",badge:"Full-Stack Platform • 2026",image:"/assets/saqr-logo.jpg",meta:"blackstarii.github.io/SAQRWEAR_",link:"https://blackstarii.github.io/SAQRWEAR_/"}];return h.jsxs("section",{id:"proof",className:"py-24 relative bg-dark-900 border-t border-white/5",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"space-y-3 mb-16",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-terminal-green uppercase",children:[h.jsx(Nl,{className:"w-4 h-4 text-terminal-green"}),"06 // PROOF OF WORK & VERIFICATION"]}),h.jsx(hn,{as:"h2",text:"Evidence-First Architecture",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-2xl font-light",children:"In an era of inflated portfolio claims, trust is earned through verifiable repositories, photographic event records, and public tournament scoreboards."})]}),h.jsxs("div",{className:"mb-12 p-6 sm:p-8 rounded-2xl bg-dark-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("div",{className:"p-3.5 rounded-2xl bg-dark-900 border border-white/15 text-white",children:h.jsx(qa,{className:"w-8 h-8"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h3",{className:"text-xl font-display font-bold text-white",children:"BlackstarII"}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"PUBLIC PROFILE"})]}),h.jsx("p",{className:"text-xs sm:text-sm text-silver-400 font-mono mt-1",children:"Active public repositories across Creative Coding, AR, Dashboards, and Web Systems"})]})]}),h.jsxs("a",{href:"https://github.com/BlackstarII",target:"_blank",rel:"noreferrer",className:"px-6 py-3 rounded-full bg-white text-dark-950 font-display font-bold text-xs sm:text-sm hover:bg-silver-200 transition-colors flex items-center gap-2 flex-shrink-0",children:[h.jsx("span",{children:"Explore GitHub Profile"}),h.jsx(za,{className:"w-4 h-4"})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((r,o)=>h.jsxs("div",{className:"p-5 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4 group",children:[h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{onClick:()=>e({url:r.image,title:r.title,meta:r.meta}),className:"relative aspect-video rounded-xl overflow-hidden bg-dark-900 border border-white/10 cursor-pointer",children:[h.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white backdrop-blur-xs",children:[h.jsx(Rl,{className:"w-4 h-4 text-electric-cyan"}),h.jsx("span",{children:"Enlarge Proof"})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("span",{className:"inline-block px-2.5 py-1 rounded bg-dark-850 border border-white/10 text-[11px] font-mono text-electric-cyan font-medium",children:r.badge}),h.jsx(hn,{as:"h4",text:r.title,className:"text-base font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug"}),h.jsx("p",{className:"text-xs sm:text-sm text-silver-300 font-light leading-relaxed",children:r.summary})]})]}),h.jsxs("div",{className:"pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-silver-400 gap-2",children:[h.jsx("span",{className:"font-medium text-silver-300",children:r.meta}),r.link?h.jsxs("a",{href:r.link,target:"_blank",rel:"noreferrer",className:"text-electric-cyan hover:text-white flex items-center gap-1 font-semibold hover:underline flex-shrink-0",children:[h.jsx("span",{children:"Inspect"}),h.jsx(Oa,{className:"w-3.5 h-3.5"})]}):h.jsxs("button",{onClick:()=>e({url:r.image,title:r.title,meta:r.meta}),className:"text-electric-cyan hover:underline flex items-center gap-1 flex-shrink-0",children:[h.jsx("span",{children:"Proof"}),h.jsx(Rl,{className:"w-3.5 h-3.5"})]})]})]},o))})]}),s&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-md animate-in fade-in",onClick:()=>e(null),children:h.jsxs("div",{className:"relative max-w-2xl max-h-[90vh] bg-dark-900 border border-white/20 rounded-2xl p-4 shadow-2xl space-y-3",children:[h.jsx("img",{src:s.url,alt:s.title,className:"max-h-[75vh] w-auto rounded-xl object-contain mx-auto"}),h.jsxs("div",{className:"text-center space-y-1",children:[h.jsx("h4",{className:"text-sm font-display font-bold text-white",children:s.title}),h.jsx("p",{className:"text-xs font-mono text-silver-400",children:s.meta})]})]})})]})},cE=({onOpenResume:s})=>{const[e,n]=Ie.useState("collab"),[r,o]=Ie.useState(!1),[c,u]=Ie.useState(!1),[d,p]=Ie.useState({name:"",email:"",message:""}),g="yaworke@gmail.com",v=()=>{navigator.clipboard.writeText(g),o(!0),setTimeout(()=>o(!1),2e3)},S=_=>{_.preventDefault(),!(!d.name||!d.email||!d.message)&&u(!0)};return h.jsx("section",{id:"contact",className:"py-24 relative bg-dark-950 border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"space-y-3 mb-16",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono tracking-widest text-electric-cyan uppercase",children:[h.jsx(vg,{className:"w-4 h-4 text-electric-cyan"}),"07 // INITIATE TRANSMISSION"]}),h.jsx(hn,{as:"h2",text:"Let's Connect",className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"}),h.jsx("p",{className:"text-silver-400 text-sm sm:text-base max-w-xl font-light",children:"Available for ambitious creative development, front-end architecture, and security-oriented engineering collaborations."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-3",children:[h.jsx("span",{className:"text-[10px] font-mono tracking-wider text-silver-400 uppercase",children:"Direct Inquiries"}),h.jsxs("div",{className:"flex items-center justify-between gap-3 p-3 rounded-xl bg-dark-950 border border-white/10",children:[h.jsx("span",{className:"text-xs sm:text-sm font-mono text-silver-200 select-all",children:g}),h.jsx("button",{onClick:v,className:"p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-silver-300 hover:text-white transition-colors",title:"Copy email address",children:r?h.jsx(yr,{className:"w-4 h-4 text-terminal-green"}):h.jsx(wv,{className:"w-4 h-4"})})]}),h.jsx("span",{className:"text-[11px] font-mono text-silver-500",children:"Reach out directly via email."})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("span",{className:"text-[10px] font-mono tracking-wider text-silver-400 uppercase block",children:"Official Profiles"}),h.jsxs("a",{href:"https://github.com/BlackstarII",target:"_blank",rel:"noreferrer",className:"flex items-center justify-between p-4 rounded-xl bg-dark-900 border border-white/10 hover:border-white/20 transition-all text-sm font-mono text-silver-200 hover:text-white group",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(qa,{className:"w-5 h-5 text-white"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-bold",children:"GitHub / BlackstarII"}),h.jsx("div",{className:"text-xs text-silver-500",children:"Repositories, codebases & experiments"})]})]}),h.jsx(Oa,{className:"w-4 h-4 text-silver-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),h.jsxs("a",{href:"https://www.linkedin.com/in/yahia-elsemary-a11930399/",target:"_blank",rel:"noreferrer",className:"flex items-center justify-between p-4 rounded-xl bg-dark-900 border border-white/10 hover:border-white/20 transition-all text-sm font-mono text-silver-200 hover:text-white group",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(qw,{className:"w-5 h-5 text-blue-400"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-bold",children:"LinkedIn / Yahia Elsemary"}),h.jsx("div",{className:"text-xs text-silver-500",children:"Professional profile & connections"})]})]}),h.jsx(Oa,{className:"w-4 h-4 text-silver-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),h.jsxs("button",{onClick:s,className:"w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-all shadow-sm",children:[h.jsx(nd,{className:"w-4 h-4 text-electric-cyan"}),h.jsx("span",{children:"Download Curriculum Vitae (PDF)"})]})]})]}),h.jsx("div",{className:"lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900 border border-white/10 shadow-2xl",children:c?h.jsxs("div",{className:"py-12 text-center space-y-4",children:[h.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-terminal-green flex items-center justify-center mx-auto",children:h.jsx(yr,{className:"w-6 h-6"})}),h.jsx("h3",{className:"text-xl font-display font-bold text-white",children:"Transmission Received"}),h.jsx("p",{className:"text-xs sm:text-sm text-silver-400 font-light max-w-md mx-auto leading-relaxed",children:"Thank you for reaching out. Your message has been logged. Yahia will review and respond promptly."}),h.jsx("button",{onClick:()=>{u(!1),p({name:"",email:"",message:""})},className:"px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-silver-300 hover:text-white",children:"Send another message"})]}):h.jsxs("form",{onSubmit:S,className:"space-y-5",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-mono text-silver-400 uppercase tracking-wider block",children:"Inquiry Classification"}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{key:"collab",label:"Collaboration"},{key:"freelance",label:"Creative Dev"},{key:"cyber",label:"Security Audit"},{key:"fulltime",label:"Engineering Role"}].map(_=>h.jsx("button",{type:"button",onClick:()=>n(_.key),className:`p-2 rounded-lg text-xs font-mono transition-all text-center border ${e===_.key?"bg-electric-blue/15 text-electric-cyan border-electric-cyan/40 shadow-sm":"bg-dark-950 border-white/10 text-silver-400 hover:text-silver-200"}`,children:_.label},_.key))})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-mono text-silver-400 block",children:"Name *"}),h.jsx("input",{type:"text",required:!0,value:d.name,onChange:_=>p({...d,name:_.target.value}),placeholder:"Your name or organization",className:"w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-cyan text-xs sm:text-sm font-sans"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-mono text-silver-400 block",children:"Email *"}),h.jsx("input",{type:"email",required:!0,value:d.email,onChange:_=>p({...d,email:_.target.value}),placeholder:"your.email@example.com",className:"w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-cyan text-xs sm:text-sm font-sans"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-mono text-silver-400 block",children:"Project Brief & Details *"}),h.jsx("textarea",{required:!0,rows:4,value:d.message,onChange:_=>p({...d,message:_.target.value}),placeholder:"Describe your initiative, timeline, and goals...",className:"w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-silver-600 focus:outline-none focus:border-electric-cyan text-xs sm:text-sm font-sans"})]}),h.jsxs("button",{type:"submit",className:"w-full py-3.5 px-6 rounded-xl bg-white text-dark-950 font-display font-bold text-sm hover:bg-silver-200 transition-all flex items-center justify-center gap-2 shadow-glow-subtle",children:[h.jsx(Nv,{className:"w-4 h-4"}),h.jsx("span",{children:"Transmit Inquiry"})]})]})})]})]})})},uE=()=>{const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsx("footer",{className:"py-12 bg-dark-950 border-t border-white/10 text-xs font-mono text-silver-500",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex items-center gap-2 text-silver-200 font-display font-bold text-base",children:[h.jsx("span",{children:"YAHIA ELSEMARY"}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-white/10 text-electric-cyan",children:"DEVAULT"})]}),h.jsx("p",{className:"text-silver-400 text-xs font-light",children:"Creative Developer & Web Engineer exploring design, engineering, and cybersecurity."})]}),h.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 hover:border-white/20 text-silver-300 hover:text-white transition-colors text-xs font-mono","aria-label":"Back to top",children:[h.jsx("span",{children:"Back to top"}),h.jsx(eg,{className:"w-3.5 h-3.5 text-electric-cyan"})]})]}),h.jsxs("div",{className:"pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),"AASTMT • Egypt (UTC+2)"]}),h.jsx("span",{children:"•"}),h.jsx("a",{href:"https://github.com/BlackstarII",target:"_blank",rel:"noreferrer",className:"text-silver-400 hover:text-white transition-colors",children:"github.com/BlackstarII"})]}),h.jsxs("div",{className:"text-silver-500",children:["© ",new Date().getFullYear()," Yahia Elsemary. All rights reserved."]})]})]})})},dE=({isOpen:s,onClose:e})=>{if(!s)return null;const n=()=>{window.print()};return h.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-in fade-in",children:[h.jsx("div",{className:"fixed inset-0",onClick:e}),h.jsxs("div",{className:"relative z-10 w-full max-w-3xl bg-dark-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col",children:[h.jsxs("div",{className:"flex items-center justify-between px-6 py-3.5 bg-dark-850 border-b border-white/10 print:hidden",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-silver-300",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-electric-cyan"}),h.jsx("span",{children:"CURRICULUM VITAE // VERIFIED PRESENTATION"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:n,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors",title:"Print or Save as PDF",children:[h.jsx(Cv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Print / Save PDF"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-silver-300 hover:text-white transition-colors",children:h.jsx(qd,{className:"w-5 h-5"})})]})]}),h.jsxs("div",{className:"overflow-y-auto p-8 sm:p-12 space-y-8 bg-dark-950 text-silver-200 print:bg-white print:text-black print:p-0",children:[h.jsxs("div",{className:"border-b border-white/15 print:border-black/20 pb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4",children:[h.jsxs("div",{className:"space-y-1",children:[h.jsx("h1",{className:"text-3xl font-display font-black text-white print:text-black tracking-tight",children:"YAHIA ELSEMARY"}),h.jsx("p",{className:"text-sm font-mono text-electric-cyan print:text-black font-semibold",children:"Creative Developer • Web Engineer • Cybersecurity Enthusiast"}),h.jsx("p",{className:"text-xs text-silver-400 print:text-gray-600 font-mono",children:"Handle: DEVAULT"})]}),h.jsxs("div",{className:"text-xs font-mono space-y-1 text-silver-300 print:text-black",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(qa,{className:"w-3.5 h-3.5 text-silver-400 print:text-black"}),h.jsx("a",{href:"https://github.com/BlackstarII",target:"_blank",rel:"noreferrer",className:"hover:underline",children:"github.com/BlackstarII"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(vg,{className:"w-3.5 h-3.5 text-silver-400 print:text-black"}),h.jsx("a",{href:"mailto:yaworke@gmail.com",className:"hover:underline",children:"yaworke@gmail.com"})]}),h.jsx("div",{children:"Egypt • Open to Remote Engagements"})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("h2",{className:"text-xs font-mono uppercase tracking-wider text-electric-cyan print:text-black font-bold",children:"Professional Profile"}),h.jsx("p",{className:"text-xs sm:text-sm font-light leading-relaxed text-silver-300 print:text-gray-800",children:"Creative Developer and Web Engineer studying at the Arab Academy for Science, Technology and Maritime Transport (AASTMT), building at the intersection of design, engineering, and cybersecurity. Proficient in crafting real-time graphics with HTML5 Canvas and Three.js, implementing autonomous voice systems with the Gemini Live API, and conducting offensive cybersecurity research verified through competitive CTF placement."})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("h2",{className:"text-xs font-mono uppercase tracking-wider text-electric-cyan print:text-black font-bold",children:"Education"}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1 text-xs",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"Arab Academy for Science, Technology and Maritime Transport (AASTMT)"}),h.jsx("span",{className:"font-mono text-silver-400 print:text-black",children:"Late 2025 - Present"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Engineering & Computer Science studies with a core focus on cybersecurity architectures, adaptive deception systems, network defense, and high-performance web systems."})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("h2",{className:"text-xs font-mono uppercase tracking-wider text-terminal-green print:text-black font-bold flex items-center gap-1.5",children:[h.jsx(Nl,{className:"w-4 h-4"}),"Verified Cybersecurity Credentials & Strategic Honors"]}),h.jsxs("div",{className:"space-y-3 text-xs",children:[h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"CyCTF 2026 Tournament Finals"}),h.jsx("span",{className:"font-mono text-yellow-400 print:text-black font-bold",children:"Rank #123 / 262 • Nov 2026"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Competed under team Cykoo (handle DEVAULT). Solved multi-category challenges across web exploitation, cryptography, packet forensics, and reverse engineering. Official Certificate of Achievement issued."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"Cisco Networking Academy — Ethical Hacker"}),h.jsx("span",{className:"font-mono text-silver-400 print:text-black font-bold",children:"Ceremony Verified • Oct 2026"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Offensive security methodologies, vulnerability discovery, penetration testing frameworks, and countermeasure assessment. Attended official ceremony."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"Military Academy — National Security & Strategic Studies"}),h.jsx("span",{className:"font-mono text-electric-cyan print:text-black font-bold",children:"Certificate & Shield • June 2026"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Successfully completed rigorous coursework in national security fundamentals, strategic defense analysis, and crisis management frameworks. Awarded official Certificate and commemorative Shield of Honor."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"Microsoft Certified: Azure AI Fundamentals (AI-900)"}),h.jsx("span",{className:"font-mono text-cyan-400 print:text-black font-bold",children:"Official Microsoft Cert • Mar 2026"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Comprehensive validation of core machine learning principles, computer vision, natural language processing, and ethical AI architectures."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"Microsoft — Authentication & Authorization in Cybersecurity"}),h.jsx("span",{className:"font-mono text-terminal-green print:text-black font-bold",children:"Verified Credential • Mar 2026"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Identity governance, Zero-Trust network architecture, access token lifecycle, MFA implementations, and role-based access control (RBAC)."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-dark-900 print:bg-gray-100 border border-white/10 print:border-gray-300 space-y-1",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"font-bold text-white print:text-black",children:"Cisco Networking Academy — Introduction to Cybersecurity"}),h.jsx("span",{className:"font-mono text-silver-400 print:text-black",children:"Certificate of Completion • Mar 2026"})]}),h.jsx("p",{className:"text-silver-400 print:text-gray-700",children:"Network security principles, CIA triad, threat modeling, malware classification, and defensive architecture."})]})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("h2",{className:"text-xs font-mono uppercase tracking-wider text-electric-cyan print:text-black font-bold flex items-center gap-1.5",children:[h.jsx(es,{className:"w-4 h-4"}),"Featured Engineering & Creative Projects"]}),h.jsxs("div",{className:"space-y-3 text-xs",children:[h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex justify-between font-bold text-white print:text-black",children:[h.jsx("span",{children:"Mystic Arts AR (Doctor Strange Spellcasting)"}),h.jsx("a",{href:"https://blackstarii.github.io/AR-programming-STRANGE/",target:"_blank",rel:"noreferrer",className:"font-mono text-electric-cyan hover:underline print:text-black",children:"blackstarii.github.io/AR-programming-STRANGE"})]}),h.jsx("p",{className:"text-silver-300 print:text-gray-700 font-light",children:"Built real-time gesture-driven spellcasting using vanilla JavaScript, HTML5 Canvas 2D, and MediaPipe Hands landmark tracking. Rendered polar-coordinate Tao mandalas and Eye of Agamotto chrono-dials at 60fps."})]}),h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex justify-between font-bold text-white print:text-black",children:[h.jsx("span",{children:"MARK 65 / JARVIS — Cyber Desktop Agent"}),h.jsx("span",{className:"font-mono text-silver-400 print:text-black",children:"Python • Gemini Live API"})]}),h.jsx("p",{className:"text-silver-300 print:text-gray-700 font-light",children:"Engineered an autonomous desktop assistant with real-time bidirectional WebSocket audio streaming, CustomTkinter HUD telemetry, and low-level diagnostic automation."})]}),h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex justify-between font-bold text-white print:text-black",children:[h.jsx("span",{children:"SAQRWEAR — Full-Stack E-Commerce & Management Platform"}),h.jsx("a",{href:"https://blackstarii.github.io/SAQRWEAR_/",target:"_blank",rel:"noreferrer",className:"font-mono text-electric-cyan hover:underline print:text-black",children:"blackstarii.github.io/SAQRWEAR_"})]}),h.jsx("p",{className:"text-silver-300 print:text-gray-700 font-light",children:"Architected full-stack commerce ecosystem with two-way frontend-backend synchronization. Integrated luxury client storefront with mgmt-saqr management engine featuring SHA-256 zero-plaintext auth, anti-brute force defenses, and real-time inventory telemetry."})]}),h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex justify-between font-bold text-white print:text-black",children:[h.jsx("span",{children:"PAPERX — Financial Paper Trading Platform"}),h.jsx("a",{href:"https://blackstarii.github.io/paperxtrading/",target:"_blank",rel:"noreferrer",className:"font-mono text-electric-cyan hover:underline print:text-black",children:"blackstarii.github.io/paperxtrading"})]}),h.jsx("p",{className:"text-silver-300 print:text-gray-700 font-light",children:"Built real-time financial simulation platform with algorithmic price charting (candlesticks/lines), order book depth, market/limit trade execution, and dynamic portfolio P&L ledger."})]})]})]}),h.jsxs("div",{className:"space-y-2 border-t border-white/15 print:border-black/20 pt-4",children:[h.jsx("h2",{className:"text-xs font-mono uppercase tracking-wider text-silver-400 print:text-black font-bold",children:"Technical Competencies"}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-silver-300 print:text-black",children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Languages:"})," TypeScript, JavaScript (ES6+), Python 3, HTML5, CSS3, SQL, Bash"]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Creative & Frontend:"})," React, Three.js, Canvas 2D, Tailwind CSS, MediaPipe CV"]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Cybersecurity:"})," Kali Linux, Nmap, Wireshark, Burp Suite, CTF Problem Solving"]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Tools & Systems:"})," Linux Systems, Git, Docker Sandboxes, WebSockets, REST APIs"]})]})]})]})]})]})},fE=()=>{const s=Ie.useRef(null),e=Ie.useRef(null),[n,r]=Ie.useState(!1),[o,c]=Ie.useState(!1),u=Ie.useRef({x:-100,y:-100}),d=Ie.useRef({x:-100,y:-100}),p=Ie.useRef(0),g=Ie.useRef(!1);return Ie.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;g.current=!0,document.documentElement.style.cursor="none";const v=document.createElement("style");v.id="custom-cursor-hide",v.textContent=`
      *, *::before, *::after { cursor: none !important; }
    `,document.head.appendChild(v);const S=E=>{if(u.current.x=E.clientX,u.current.y=E.clientY,!g.current)return;r(!0);const y=E.target,x=!!(y!=null&&y.closest("button")||y!=null&&y.closest("a")||y!=null&&y.closest("input")||y!=null&&y.closest("textarea")||y!=null&&y.closest(".cursor-pointer")||y!=null&&y.closest(".interactive-card"));c(x)},_=()=>r(!1),M=()=>r(!0);window.addEventListener("mousemove",S,{passive:!0}),document.addEventListener("mouseleave",_),document.addEventListener("mouseenter",M);const b=()=>{const E=u.current.x,y=u.current.y;d.current.x+=(E-d.current.x)*.15,d.current.y+=(y-d.current.y)*.15,s.current&&(s.current.style.transform=`translate3d(${E}px, ${y}px, 0) translate(-50%, -50%)`),e.current&&(e.current.style.transform=`translate3d(${d.current.x}px, ${d.current.y}px, 0) translate(-50%, -50%)`),p.current=requestAnimationFrame(b)};return p.current=requestAnimationFrame(b),()=>{g.current=!1,cancelAnimationFrame(p.current),window.removeEventListener("mousemove",S),document.removeEventListener("mouseleave",_),document.removeEventListener("mouseenter",M),document.documentElement.style.cursor="";const E=document.getElementById("custom-cursor-hide");E&&E.remove()}},[]),n?h.jsxs("div",{className:"pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block",children:[h.jsx("div",{ref:s,className:"fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-electric-cyan",style:{willChange:"transform"}}),h.jsx("div",{ref:e,className:`fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out ${o?"w-14 h-14 bg-electric-cyan/10 border-electric-cyan/70 shadow-glow-cyan":"w-8 h-8 border-electric-cyan/30"}`,style:{willChange:"transform"}})]}):null},hE=()=>{const[s,e]=Ie.useState(!1);Ie.useEffect(()=>{const r=()=>{window.scrollY>350?e(!0):e(!1)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsx("div",{className:`fixed bottom-6 right-6 z-40 transition-all duration-300 ${s?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 translate-y-4 pointer-events-none"}`,children:h.jsxs("button",{onClick:n,className:"group relative flex items-center justify-center w-11 h-11 rounded-full bg-dark-900/90 hover:bg-dark-800 border border-white/15 hover:border-electric-cyan text-silver-300 hover:text-white shadow-2xl backdrop-blur-xl transition-all hover:scale-110 active:scale-95",title:"Scroll to top","aria-label":"Scroll to top of page",children:[h.jsx("div",{className:"absolute inset-0 rounded-full bg-electric-cyan/0 group-hover:bg-electric-cyan/15 blur-md transition-colors pointer-events-none"}),h.jsx(eg,{className:"w-5 h-5 text-electric-cyan group-hover:-translate-y-0.5 transition-transform"})]})})},pE=()=>{const[s,e]=Ie.useState(null),[n,r]=Ie.useState(!1);return h.jsx(Iv,{children:h.jsxs("div",{className:"relative min-h-screen bg-dark-950 text-silver-200 selection:bg-electric-cyan selection:text-dark-950 transition-colors duration-300",children:[h.jsx(fE,{}),h.jsx(kv,{onOpenResume:()=>r(!0)}),h.jsxs("main",{children:[h.jsx(Xw,{onOpenResume:()=>r(!0)}),h.jsx(Yw,{onSelectProject:o=>e(o)}),h.jsx(tE,{}),h.jsx(rE,{}),h.jsx(sE,{}),h.jsx(oE,{}),h.jsx(lE,{}),h.jsx(cE,{onOpenResume:()=>r(!0)})]}),h.jsx(uE,{}),h.jsx(hE,{}),h.jsx($w,{project:s,onClose:()=>e(null)}),h.jsx(dE,{isOpen:n,onClose:()=>r(!1)})]})})},$m=document.getElementById("root");$m&&lv.createRoot($m).render(h.jsx(tv.StrictMode,{children:h.jsx(pE,{})}));
