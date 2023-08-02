var t,e;function i(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(t||(t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(e||(e={}));var s=["closed","locked","off"],n=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},o=function(t){n(window,"haptic",t)},r=function(t,e){return function(t,e,s){void 0===s&&(s=!0);var n,o=i(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=s?"unlock":"lock";break;case"cover":n=s?"open_cover":"close_cover";break;default:n=s?"turn_on":"turn_off"}return t.callService(r,n,{entity_id:e})}(t,e,s.includes(t.states[e].state))},a=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(o("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&n(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),n(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(r(e,i.entity),o("success"));break;case"call-service":if(!s.service)return void o("failure");var a=s.service.split(".",2);e.callService(a[0],a[1],s.service_data,s.target),o("success");break;case"fire-dom-event":n(t,"ll-custom",s)}},l=function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),a(t,e,i,n)};function h(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c=window,d=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),p=new WeakMap;class v{constructor(t,e,i){if(this._$cssResult$=!0,i!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(d&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=p.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&p.set(e,t))}return t}toString(){return this.cssText}}const g=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new v(i,t,u)},m=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new v("string"==typeof t?t:t+"",void 0,u))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var _;const f=window,$=f.trustedTypes,b=$?$.emptyScript:"",y=f.reactiveElementPolyfillSupport,A={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},E=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:E};class x extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||w}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{d?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=c.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=w){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:A).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:A;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||E)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var S;x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null==y||y({ReactiveElement:x}),(null!==(_=f.reactiveElementVersions)&&void 0!==_?_:f.reactiveElementVersions=[]).push("1.5.0");const C=window,k=C.trustedTypes,T=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,O="?"+U,P=`<${O}>`,H=document,N=(t="")=>H.createComment(t),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,j=/>/g,D=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),I=/'/g,B=/"/g,V=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,X=H.createTreeWalker(H,129,null,!1),Y=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=z;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===z?"!--"===l[1]?r=L:void 0!==l[1]?r=j:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=null!=n?n:z,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?D:'"'===l[3]?B:I):r===B||r===I?r=D:r===L||r===j?r=z:(r=D,n=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";o+=r===z?i+P:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+U+d):i+U+(-2===h?(s.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==T?T.createHTML(a):a,s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=Y(t,e);if(this.el=Z.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=X.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(U)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(U),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?et:"?"===e[1]?st:"@"===e[1]?nt:tt})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(V.test(s.tagName)){const t=s.textContent.split(U),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),X.nextNode(),a.push({type:2,index:++n});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(U,t+1));)a.push({type:7,index:n}),t+=U.length-1}n++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){var n,o,r,a;if(e===q)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=R(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,s)),e}class F{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:H).importNode(i,!0);X.currentNode=n;let o=X.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ot(o,this,t)),this.u.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=X.nextNode(),r++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{constructor(t,e,i,s){var n;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),R(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==q&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==K&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new F(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Z(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tt{constructor(t,e,i,s,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,s[i+r],e,r),a===q&&(a=this._$AH[r]),o||(o=!R(a)||a!==this._$AH[r]),a===K?t=K:t!==K&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}const it=k?k.emptyScript:"";class st extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==K?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}}class nt extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:K)===q)return;const s=this._$AH,n=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==K&&(s===K||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=C.litHtmlPolyfillSupport;null==rt||rt(Z,Q),(null!==(S=C.litHtmlVersions)&&void 0!==S?S:C.litHtmlVersions=[]).push("2.5.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var at,lt;class ht extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Q(e.insertBefore(N(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return q}}ht.finalized=!0,ht._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ht});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:ht}),(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=1,ut=t=>(...e)=>({_$litDirective$:t,values:e});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=ut(class extends pt{constructor(t){var e;if(super(t),t.type!==dt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return q}}),gt="minimalistic-area-card",mt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _t extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:mt?"100px":"50px",height:mt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},s=i=>{i.preventDefault(),i.stopPropagation(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?n(t,"action",{action:"hold"},{bubbles:!1}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,n(t,"action",{action:"tap"},{bubbles:!1})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,n(t,"action",{action:"double_tap"},{bubbles:!1})):n(t,"action",{action:"tap"},{bubbles:!1}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",(t=>{13===t.keyCode&&s(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-"+gt,_t);const ft=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-"+gt))return t.querySelector("action-handler-"+gt);const e=document.createElement("action-handler-"+gt);return t.appendChild(e),e})();i&&i.bind(t,e)},$t=ut(class extends pt{update(t,[e]){return ft(t.element,e),q}render(t){}}),bt=(t,e,s,n,o,r)=>{const a=[];(null==o?void 0:o.length)&&a.push((t=>o.includes(i(t)))),r&&a.push((e=>t.states[e]&&r(t.states[e])));const l=((t,e,i)=>{(!i||i>t.length)&&(i=t.length);const s=[];for(let n=0;n<t.length&&s.length<i;n++){let i=!0;for(const s of e)if(!s(t[n])){i=!1;break}i&&s.push(t[n])}return s})(s,a,e);if(l.length<e&&n.length){const i=bt(t,e-l.length,n,[],o,r);l.push(...i)}return l};console.info("%c  Minimalistic Area Card  %c 1.0.6 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const yt=["sensor","binary_sensor"],At=["closed","locked","off"],Et=["fan","input_boolean","light","switch","group","automation","humidifier"];class wt extends ht{constructor(){super(...arguments),this._entitiesDialog=[],this._entitiesToggle=[],this._entitiesSensor=[]}async performUpdate(){await this.setArea(),this.setEntities(),await super.performUpdate()}async setArea(){var t;if(null===(t=this.hass)||void 0===t?void 0:t.connected)if(this.config&&this.config.area){const t=this.hass.areas[this.config.area];t?(this.area=t,this.areaEntities=wt.findAreaEntities(this.hass,t.area_id)):(this.area=void 0,this.areaEntities=void 0)}else this.area=void 0,this.areaEntities=void 0;else console.error("Invalid hass connection")}setEntities(){var t;this._entitiesDialog=[],this._entitiesToggle=[],this._entitiesSensor=[];((null===(t=this.config)||void 0===t?void 0:t.entities)||this.areaEntities||[]).forEach((t=>{var e;const i=this.parseEntity(t),[s,n]=i.entity.split(".");-1!==yt.indexOf(s)?this._entitiesSensor.push(i):(null===(e=this.config)||void 0===e?void 0:e.force_dialog)||-1===Et.indexOf(s)?this._entitiesDialog.push(i):this._entitiesToggle.push(i)}))}parseEntity(t){return"string"==typeof t?{entity:t}:t}_handleEntityAction(t){const e=t.currentTarget.config;l(this,this.hass,e,t.detail.action)}_handleThisAction(t){var e,i;const s=null===(i=null===(e=t.currentTarget.getRootNode())||void 0===e?void 0:e.host)||void 0===i?void 0:i.parentElement;this.hass&&this.config&&t.detail.action&&(!s||"HUI-CARD-PREVIEW"!==s.tagName)&&l(this,this.hass,this.config,t.detail.action)}setConfig(t){if(!t||t.entities&&!Array.isArray(t.entities))throw new Error("Invalid configuration");this.config=Object.assign({hold_action:{action:"more-info"}},t)}getCardSize(){return 3}render(){var t,e;if(!this.config||!this.hass)return W``;const i=this.config.background_color?`background-color: ${this.config.background_color}`:"";let s;return(this.config.image||(null===(t=this.area)||void 0===t?void 0:t.picture))&&(s=new URL(this.config.image||(null===(e=this.area)||void 0===e?void 0:e.picture)||"",this.hass.auth.data.hassUrl).toString()),W`
        <ha-card @action=${this._handleThisAction} style=${i}
            .actionHandler=${$t({hasHold:h(this.config.hold_action),hasDoubleClick:h(this.config.double_tap_action)})}
            tabindex=${(t=>null!=t?t:K)(h(this.config.tap_action)?"0":void 0)}>
    ${s?W`<img src=${s} />`:null}
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
    `}renderEntity(t,e,i){const s=this.hass.states[t.entity];return t=Object.assign({tap_action:{action:e?"more-info":"toggle"},hold_action:{action:"more-info"}},t),s||this.config.hide_unavailable?!s&&this.config.hide_unavailable?W``:W`
    <div class="wrapper">
        <ha-icon-button @action=${this._handleEntityAction} .actionHandler=${$t({hasHold:h(t.hold_action),hasDoubleClick:h(t.double_tap_action)})}
            .config=${t} class=${vt({"state-on":s.state&&-1===[...At,"unavailable","idle","disconnected"].indexOf(s.state.toString().toLowerCase())})}>
            <ha-state-icon .icon=${t.icon} .state=${s}></ha-state-icon>
        </ha-icon-button>
        ${i?W`
        <div class="state">
            ${t.attribute?W`
            ${t.prefix}${s.attributes[t.attribute]}${t.suffix}
            `:this.computeStateValue(s)}
        </div>
        `:null}
    </div>
    `:W`
            <div class="wrapper">
                <hui-warning-element .label=${n=this.hass,o=t.entity,"NOT_RUNNING"!==n.config.state?n.localize("ui.panel.lovelace.warning.entity_not_found","entity",o||"[empty]"):n.localize("ui.panel.lovelace.warning.starting")}></hui-warning-element>
            </div>
      `;var n,o}isNumericState(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}computeStateValue(t){const[e,i]=t.entity_id.split(".");if(this.isNumericState(t)){const e=Number(t.state);return isNaN(e)?null:`${e}${t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:""}`}return"binary_sensor"!==e&&"unavailable"!==t.state&&"idle"!==t.state?t.state:null}shouldUpdate(t){if(function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;for(const t of[...this._entitiesDialog,...this._entitiesToggle,...this._entitiesSensor])if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}static findAreaEntities(t,e){const i=t.areas&&t.areas[e],s=t.entities&&i&&Object.keys(t.entities).filter((e=>{var s;return!t.entities[e].disabled_by&&"diagnostic"!==t.entities[e].entity_category&&"config"!==t.entities[e].entity_category&&(t.entities[e].area_id===i.area_id||(null===(s=t.devices[t.entities[e].device_id||""])||void 0===s?void 0:s.area_id)===i.area_id)})).map((t=>t));return s}static getStubConfig(t,e,i){const s=t.areas&&t.areas[Object.keys(t.areas)[0]],n=wt.findAreaEntities(t,s.area_id),o={title:"Kitchen",image:"https://demo.home-assistant.io/stub_config/kitchen.png",area:"",hide_unavailable:!1,tap_action:{action:"navigate",navigation_path:"/lovelace-kitchen"},entities:[...bt(t,2,(null==n?void 0:n.length)?n:e,i,["light"]),...bt(t,2,(null==n?void 0:n.length)?n:e,i,["switch"]),...bt(t,2,(null==n?void 0:n.length)?n:e,i,["sensor"]),...bt(t,2,(null==n?void 0:n.length)?n:e,i,["binary_sensor"])]};return s?(o.area=s.area_id,o.title=s.name,o.tap_action.navigation_path="/config/areas/area/"+s.area_id,delete o.image):delete o.area,o}static get styles(){return g`
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
    `}}wt.properties={hass:{attribute:!1},config:{state:!0}},customElements.define(gt,wt);const xt=window;xt.customCards=xt.customCards||[],xt.customCards.push({type:gt,name:"Minimalistic Area",preview:!0,description:"Minimalistic Area Card"});
