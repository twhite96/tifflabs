var t,e;function i(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(t||(t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(e||(e={}));var s=["closed","locked","off"],n=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},o=function(t){n(window,"haptic",t)},r=function(t,e){return function(t,e,s){void 0===s&&(s=!0);var n,o=i(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=s?"unlock":"lock";break;case"cover":n=s?"open_cover":"close_cover";break;default:n=s?"turn_on":"turn_off"}return t.callService(r,n,{entity_id:e})}(t,e,s.includes(t.states[e].state))},a=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(o("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&n(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),n(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(r(e,i.entity),o("success"));break;case"call-service":if(!s.service)return void o("failure");var a=s.service.split(".",2);e.callService(a[0],a[1],s.service_data,s.target),o("success");break;case"fire-dom-event":n(t,"ll-custom",s)}},l=function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),a(t,e,i,n)};function c(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const h=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),u=new Map;class p{constructor(t,e){if(this._$cssResult$=!0,e!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=u.get(this.cssText);return h&&void 0===t&&(u.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const v=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new p(i,d)},m=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new p("string"==typeof t?t:t+"",d))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var g;const _=window.trustedTypes,f=_?_.emptyScript:"",$=window.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),A={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};class w extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||A}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{h?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=A){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:b.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:b.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var E;w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==$||$({ReactiveElement:w}),(null!==(g=globalThis.reactiveElementVersions)&&void 0!==g?g:globalThis.reactiveElementVersions=[]).push("1.3.2");const x=globalThis.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,T="?"+C,k=`<${T}>`,U=document,P=(t="")=>U.createComment(t),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,R=/>/g,L=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,z=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,q=U.createTreeWalker(U,129,null,!1),K=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=O;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===O?"!--"===l[1]?r=M:void 0!==l[1]?r=R:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=null!=n?n:O,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?L:'"'===l[3]?D:z):r===D||r===z?r=L:r===M||r===R?r=O:(r=L,n=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";o+=r===O?i+k:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+C+d):i+C+(-2===c?(s.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==S?S.createHTML(a):a,s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=J.createElement(l,i),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=q.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(C)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(C),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?tt:"@"===e[1]?et:G})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),q.nextNode(),a.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===T)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){var n,o,r,a;if(e===B)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const c=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=X(t,l._$AS(t,e.values),l,s)),e}class Y{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(i,!0);q.currentNode=n;let o=q.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new it(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=q.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var n;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),H(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return N(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==V&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(U.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new Y(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}S(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Z(this.M(P()),this.M(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=X(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=X(this,s[i+r],e,r),a===B&&(a=this._$AH[r]),o||(o=!H(a)||a!==this._$AH[r]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.C(t)}C(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends G{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===V?void 0:t}}const Q=x?x.emptyScript:"";class tt extends G{constructor(){super(...arguments),this.type=4}C(t){t&&t!==V?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class et extends G{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=X(this,t,e,0))&&void 0!==i?i:V)===B)return;const s=this._$AH,n=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const st=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,ot;null==st||st(J,Z),(null!==(E=globalThis.litHtmlVersions)&&void 0!==E?E:globalThis.litHtmlVersions=[]).push("2.2.5");class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Z(e.insertBefore(P(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return B}}rt.finalized=!0,rt._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:rt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:rt}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=1,ct=t=>(...e)=>({_$litDirective$:t,values:e});class ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=ct(class extends ht{constructor(t){var e;if(super(t),t.type!==lt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return B}}),ut="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ut?"100px":"50px",height:ut?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},s=i=>{i.preventDefault(),i.stopPropagation(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?n(t,"action",{action:"hold"},{bubbles:!1}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,n(t,"action",{action:"tap"},{bubbles:!1})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,n(t,"action",{action:"double_tap"},{bubbles:!1})):n(t,"action",{action:"tap"},{bubbles:!1}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",(t=>{13===t.keyCode&&s(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-minimalistic-area-card",pt);const vt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-minimalistic-area-card"))return t.querySelector("action-handler-minimalistic-area-card");const e=document.createElement("action-handler-minimalistic-area-card");return t.appendChild(e),e})();i&&i.bind(t,e)},mt=ct(class extends ht{update(t,[e]){return vt(t.element,e),B}render(t){}}),gt=(t,e,s,n,o,r)=>{const a=[];(null==o?void 0:o.length)&&a.push((t=>o.includes(i(t)))),r&&a.push((e=>t.states[e]&&r(t.states[e])));const l=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const s=[];for(let n=0;n<t.length&&s.length<i;n++){let i=!0;for(const s of e)if(!s(t[n])){i=!1;break}i&&s.push(t[n])}return s})(s,a,e);if(l.length<e&&n.length){const i=gt(t,e-l.length,n,[],o,r);l.push(...i)}return l};console.info("%c  Minimalistic Area Card  %c 1.0.6 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const _t=["sensor","binary_sensor"],ft=["closed","locked","off"],$t=["fan","input_boolean","light","switch","group","automation","humidifier"];class bt extends rt{constructor(){super(...arguments),this._entitiesDialog=[],this._entitiesToggle=[],this._entitiesSensor=[]}parseEntity(t){return"string"==typeof t?{entity:t}:t}_handleEntityAction(t){const e=t.currentTarget.config;l(this,this.hass,e,t.detail.action)}_handleThisAction(t){var e,i;const s=null===(i=null===(e=t.currentTarget.getRootNode())||void 0===e?void 0:e.host)||void 0===i?void 0:i.parentElement;this.hass&&this.config&&t.detail.action&&(!s||"HUI-CARD-PREVIEW"!==s.tagName)&&l(this,this.hass,this.config,t.detail.action)}setConfig(t){if(!t||!t.entities||!Array.isArray(t.entities))throw new Error("Invalid configuration");this._entitiesDialog=[],this._entitiesToggle=[],this._entitiesSensor=[],t.entities.forEach((e=>{const i=this.parseEntity(e),[s,n]=i.entity.split(".");-1!==_t.indexOf(s)?this._entitiesSensor.push(i):t.force_dialog||-1===$t.indexOf(s)?this._entitiesDialog.push(i):this._entitiesToggle.push(i)})),this.config=Object.assign({hold_action:{action:"more-info"}},t)}getCardSize(){return 3}render(){if(!this.config||!this.hass)return j``;const t=this.config.background_color?`background-color: ${this.config.background_color}`:"";let e;return this.config.image&&(e=new URL(this.config.image,this.hass.auth.data.hassUrl).toString()),j`
        <ha-card @action=${this._handleThisAction} style=${t}
            .actionHandler=${mt({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}
            tabindex=${(t=>null!=t?t:V)(c(this.config.tap_action)?"0":void 0)}>
    ${e?j`<img src=${e} />`:null}
    <div class="box">
        <div class="card-header"
            >${this.config.title}</div>
        <div class="sensors">
            ${this._entitiesSensor.map((t=>this.renderEntity(t,!0,!0)))}
        </div>
        <div class="buttons">
            ${this._entitiesDialog.map((t=>this.renderEntity(t,!0,!1)))}
            ${this._entitiesToggle.map((t=>this.renderEntity(t,!1,!1)))}
        </div>
    </div>
</ha-card>
    `}renderEntity(t,e,i){const s=this.hass.states[t.entity];return t=Object.assign({tap_action:{action:e?"more-info":"toggle"},hold_action:{action:"more-info"}},t),s?j`
    <div class="wrapper">
        <ha-icon-button @action=${this._handleEntityAction} .actionHandler=${mt({hasHold:c(t.hold_action),hasDoubleClick:c(t.double_tap_action)})}
            .config=${t} class=${dt({"state-on":s.state&&-1===[...ft,"unavailable","idle","disconnected"].indexOf(s.state.toString().toLowerCase())})}>
            <ha-state-icon .icon=${t.icon} .state=${s}></ha-state-icon>
        </ha-icon-button>
        ${i?j`
        <div class="state">
            ${t.attribute?j`
            ${t.prefix}${s.attributes[t.attribute]}${t.suffix}
            `:this.computeStateValue(s)}
        </div>
        `:null}
    </div>
    `:j`
            <div class="wrapper">
                <hui-warning-element .label=${n=this.hass,o=t.entity,"NOT_RUNNING"!==n.config.state?n.localize("ui.panel.lovelace.warning.entity_not_found","entity",o||"[empty]"):n.localize("ui.panel.lovelace.warning.starting")}></hui-warning-element>
            </div>
      `;var n,o}isNumericState(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}computeStateValue(t){const[e,i]=t.entity_id.split(".");if(this.isNumericState(t)){const e=Number(t.state);return isNaN(e)?null:`${e}${t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:""}`}return"binary_sensor"!==e&&"unavailable"!==t.state&&"idle"!==t.state?t.state:null}shouldUpdate(t){if(function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;for(const t of[...this._entitiesDialog,...this._entitiesToggle,...this._entitiesSensor])if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}static getStubConfig(t,e,i){return{title:"Kitchen",image:"https://demo.home-assistant.io/stub_config/kitchen.png",tap_action:{action:"navigate",navigation_path:"/lovelace-kitchen"},entities:[...gt(t,2,e,i,["light"]),...gt(t,2,e,i,["switch"]),...gt(t,2,e,i,["sensor"]),...gt(t,2,e,i,["binary_sensor"])]}}static get styles(){return v`
      * {
        box-sizing: border-box;
      }
      ha-card {
        position: relative;
        min-height: 48px;
        height: 100%;
        z-index: 0;
      }

      img {
          display: block;
          height: 100%;
          width: 100%;

          filter: brightness(0.55);
          object-fit: cover;

          position: absolute;
          z-index: -1;
          pointer-events: none;
          border-radius: var(--ha-card-border-radius)
      }

      .box {
        text-shadow: 1px 1px 2px black;
        background-color: transparent;

        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;

        width: 100%; height: 100%;

        padding: 0;
        font-size: 14px;
        color: var(--ha-picture-card-text-color, white);
        z-index: 1;
      }

      .box .card-header {
        padding: 10px 15px;
        font-weight: bold;
        font-size: 1.2em;
      }

      .box .sensors {
          white-space: nowrap;
          margin-top: -19px;
          margin-bottom: -18px;
          min-height: 10px;
          margin-left: 5px;
          font-size: 0.9em;
      }

      .box .buttons {
          display: block;
          background-color: var( --ha-picture-card-background-color, rgba(0, 0, 0, 0.1) );
          background-color: transparent;
          text-align: right;
          padding-top: 10px;
          padding-bottom: 10px;
          min-height: 10px;
          width: 100%;

          margin-top:auto;
      }

      .box .buttons ha-icon-button {
            margin-left: -8px;
            margin-right: -6px;
            margin-bottom: -12px;
      }
      .box .sensors ha-icon-button {
            -moz-transform: scale(0.67);
            zoom: 0.67;
            vertical-align: middle;
            margin-bottom: -12px;
      }
      .box .wrapper {
          display: inline-block;
          vertical-align: middle;
      }
      .box ha-icon-button {
          color: var(--ha-picture-icon-button-color, #a9a9a9);
      }
      .box ha-icon-button.state-on {
          color: var(--ha-picture-icon-button-on-color, white);
      }


      .box .sensors .wrapper > * {
          display: inline-block;
          vertical-align: middle;
      }
      .box .sensors .state {
          margin-left: -9px;
          padding-top: 14px;
      }

      .box .wrapper hui-warning-element {
          margin-top: 15px;
      }
    `}}bt.properties={hass:{attribute:!1},config:{state:!0}},customElements.define("minimalistic-area-card",bt);const yt=window;yt.customCards=yt.customCards||[],yt.customCards.push({type:"minimalistic-area-card",name:"Minimalistic Area",preview:!0,description:"Minimalistic Area Card"});
