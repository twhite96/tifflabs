function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=t=>new r("string"==typeof t?t:t+"",i),o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window.trustedTypes,c=h?h.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=f){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:u.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:u.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:p}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,m=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,w=`<${$}>`,b=document,C=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,x=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,O=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,D=/'/g,P=/"/g,H=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),I=new WeakMap,N=(t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new q(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},M=b.createTreeWalker(b,129,null,!1),R=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=E;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===E?"!--"===l[1]?o=k:void 0!==l[1]?o=O:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=T):void 0!==l[3]&&(o=T):o===T?">"===l[0]?(o=null!=r?r:E,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?T:'"'===l[3]?P:D):o===P||o===D?o=T:o===k||o===O?o=E:(o=T,r=void 0);const d=o===T&&t[e+1].startsWith("/>")?" ":"";n+=o===E?i+w:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+y+d):i+y+(-2===h?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=R(t,e);if(this.el=V.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?Q:"@"===e[1]?Z:j})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),M.nextNode(),a.push({type:2,index:++r});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var r,n,o,a;if(e===B)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);M.currentNode=r;let n=M.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new q(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new K(n,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=M.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),A(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==B&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):x(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new z(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new V(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new q(this.M(C()),this.M(C()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=F(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=F(this,s[i+o],e,o),a===B&&(a=this._$AH[o]),n||(n=!A(a)||a!==this._$AH[o]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const G=v?v.emptyScript:"";class Q extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Z extends j{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:U)===B)return;const s=this._$AH,r=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const J={L:"$lit$",P:y,V:$,I:1,N:R,R:z,j:x,D:F,H:q,F:j,O:Q,W:Z,B:W,Z:K},X=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,tt;null==X||X(V,q),(null!==(_=globalThis.litHtmlVersions)&&void 0!==_?_:globalThis.litHtmlVersions=[]).push("2.2.4");class et extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return B}}et.finalized=!0,et._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,at,lt;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(at||(at={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=Symbol.for(""),ct=t=>{var e,i;if((null===(e=t)||void 0===e?void 0:e.r)===ht)return null===(i=t)||void 0===i?void 0:i._$litStatic$},dt=t=>({_$litStatic$:t,r:ht}),ut=new Map,gt=(t=>(e,...i)=>{const s=i.length;let r,n;const o=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(n=i[h],r=ct(n));)l+=r+e[++h],c=!0;a.push(n),o.push(l),h++}if(h===s&&o.push(e[s]),c){const t=o.join("$$lit$$");void 0===(e=ut.get(t))&&(o.raw=o,ut.set(t,e=o)),i=a}return t(e,...i)})(L);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:pt}=J,_t=(t,e)=>{var i,s;return void 0===e?void 0!==(null===(i=t)||void 0===i?void 0:i._$litType$):(null===(s=t)||void 0===s?void 0:s._$litType$)===e},vt=()=>document.createComment(""),mt=(t,e,i)=>{var s;const r=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(vt(),n),s=r.insertBefore(vt(),n);i=new pt(e,s,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,a=o!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==n||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,n),t=e}}}return i},yt={},$t=(t,e=yt)=>t._$AH=e,wt=t=>t._$AH,bt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(t,[e]){if(_t(this.it)&&(!_t(e)||this.it.strings!==e.strings)){const e=wt(t).pop();let i=this.tt.get(this.it.strings);if(void 0===i){const t=document.createDocumentFragment();i=N(U,t),i.setConnected(!1),this.tt.set(this.it.strings,i)}$t(i,[e]),mt(i,void 0,e)}if(_t(e)){if(!_t(this.it)||this.it.strings!==e.strings){const i=this.tt.get(e.strings);if(void 0!==i){const e=wt(i).pop();(t=>{t._$AR()})(t),mt(t,void 0,e),$t(t,[e])}}this.it=e}else this.it=void 0;return this.render(e)}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ct{constructor(t,e,i,s=1){"string"==typeof t?(this.parse(t),this._opacity=null!=e?e:1):(this._red=t,this._green=null!=e?e:0,this._blue=null!=i?i:0,this._opacity=s)}getOpacity(){return this._opacity}getLuminance(){return.299*this._red+.587*this._green+.114*this._blue}getForeground(t,e,i){return this.getLuminance()+i<Ct.LuminanceBreakingPoint?t:e}parse(t,e=!0){if(t.startsWith("#"))if(3==(t=t.substring(1)).length)this._red=parseInt(t.substring(0,1)+t.substring(0,1),16),this._green=parseInt(t.substring(1,2)+t.substring(1,2),16),this._blue=parseInt(t.substring(2,3)+t.substring(2,3),16);else{if(6!=t.length)throw new Error("Hex color format should have 3 or 6 letters");this._red=parseInt(t.substring(0,2),16),this._green=parseInt(t.substring(2,4),16),this._blue=parseInt(t.substring(4,6),16)}else{if(!t.startsWith("rgb")){if(e){const e=document.createElement("canvas").getContext("2d");if(null!=e)return e.fillStyle=t,void this.parse(e.fillStyle,!1)}throw new Error("Unrecognized color format: "+t)}{const e=t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);if(!e)throw new Error("Unrecognized color format rgb[a]: "+t);this._red=parseInt(e[1]),this._green=parseInt(e[2]),this._blue=parseInt(e[3])}}}toString(){return this._opacity<1?`rgba(${this._red}, ${this._green}, ${this._blue}, ${this._opacity})`:`rgb(${this._red}, ${this._green}, ${this._blue})`}}Ct.LuminanceBreakingPoint=192;class At{}At.Version="v1.2.0",At.Dev=!1,At.CardElementName=At.Dev?"hue-like-light-card-test":"hue-like-light-card",At.CardName="Hue-Like Light Card",At.CardDescription="Hue-like way to control your lights",At.HueBorderRadius=10,At.HueShadow="0px 2px 3px rgba(0,0,0,0.85)",At.LightColor=new Ct("#fff"),At.LightOffColor=new Ct("#fff",.85),At.DarkColor=new Ct(0,0,0,.7),At.DarkOffColor=new Ct(0,0,0,.5),At.WarmColor="#ffda95",At.ColdColor="#f5f5ff",At.DefaultColor="warm",At.OffColor="#666",At.DialogBgColor="#171717",At.DialogFgLightColor=new Ct("#aaa"),At.DialogOffColor="#363636",At.GradientOffset=10,At.DefaultOneIcon="mdi:lightbulb",At.DefaultTwoIcon="mdi:lightbulb-multiple",At.DefaultMoreIcon="mdi:lightbulb-group",At.TimeCacheInterval=1500;class St extends Ct{constructor(t){t==St.themeColor?(super(0,0,0),this._isThemeColor=!0):(super(t),this._isThemeColor=!1)}getBaseColor(){if(this._isThemeColor)throw new Error("Cannot getBaseColor on "+St.themeColor);return new Ct(this._red,this._green,this._blue)}isThemeColor(){return this._isThemeColor}getLuminance(){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+St.themeColor);return super.getLuminance()}getForeground(t,e,i){if(this._isThemeColor)throw new Error("Cannot getLuminance on "+St.themeColor);return super.getForeground(t,e,i)}toString(){return this._isThemeColor?"var(--"+St.themeColor+")":super.toString()}}St.themeColor="theme-color";class xt{constructor(t){if(!((null==t?void 0:t.length)>0))throw new Error("At least one background or color is needed for new Background(...).");this._colors=t.flatMap((t=>{if(t instanceof St)throw new Error("ColorExtended cannot be used in Background. Resolve it first.");if(t instanceof Ct)return[t];if(t instanceof xt)return t._colors;throw new Error("Only array of Colors or Backgrounds is supported for new Background(...).")})),this._colors.sort(((t,e)=>t.getLuminance()-e.getLuminance()))}getForeground(t,e,i){if(this._colors.length<3)return this._colors[0].getForeground(t,e,i);let s=0;for(let t=0;t<this._colors.length/2;t++)this._colors[t].getForeground(!0,!1,i)&&s++;return s>this._colors.length/4?t:e}toString(){if(1==this._colors.length)return this._colors[0].toString();const t=100/(this._colors.length-1),e=At.GradientOffset;let i=`${this._colors[0]} 0%, ${this._colors[0]} ${e}%`,s=0;for(let r=1;r<this._colors.length;r++)s+=t,r+1==this._colors.length&&(i+=`, ${this._colors[r]} ${100-e}%`),i+=`, ${this._colors[r]} ${Math.round(s)}%`;return`linear-gradient(90deg, ${i})`}}class Et{static createSwitch(t,e,i=L``){return L`<ha-switch .checked=${t.isOn()} .disabled=${t.isUnavailable()} .haptic=true @change=${i=>this.changed(t,e,!1,i)}
        ${i}
        ></ha-switch>`}static createSlider(t,e,i,s=L``){const r=e.allowZero?0:1;return L`<ha-slider .min=${r} .max=${100} .step=${1} .disabled=${e.allowZero?t.isUnavailable():t.isOff()} .value=${t.value}
        pin @change=${e=>this.changed(t,i,!0,e)}
        ignore-bar-touch
        ${s}
        ></ha-slider>`}static changed(t,e,i,s){const r=s.target;if(r){if(i){const e=r.value;null!=e&&(t.value=parseInt(e))}else{r.checked?t.turnOn():t.turnOff()}e()}}static calculateBackAndForeground(t,e,i=!0){const s=t.isOff()?e:t.getBackground()||e;let r;if(null==s)r=null;else{r=this.calculateForeground(t,s,i).foreground}return{background:s,foreground:r}}static calculateForeground(t,e,i=!0){let s=t.value;i||(s=100);const r=t.isOn()&&s>50?-(10-(s-50)/5):0;let n=t.isOn()&&s<=50?At.LightColor:e.getForeground(At.LightColor,At.DarkColor,r);return t.isOff()&&(n=n==At.DarkColor?At.DarkOffColor:At.LightOffColor),{foreground:n,opacity:1}}static calculateDefaultShadow(t,e,i){if(e.isOff())return i.disableOffShadow?"0px 0px 0px white":"inset 0px 0px 10px rgba(0,0,0,0.2)";const s=t;if(!s||!s.clientHeight)return"";const r=100-e.value,n=20+.95*r*(s.clientHeight/100);let o=s.clientHeight/2;r>70&&(o-=(o-20)*(r-70)/30);let a=.65;return r>60&&(a-=(a-.5)*(r-60)/40),`inset 0px -${n}px ${o}px -20px rgba(0,0,0,${a})`}}class kt{constructor(t,e){this._waitAfter=e,this._action=t}get action(){return this._action}get waitAfter(){return this._waitAfter}}class Ot{constructor(){this._queue=new Array,this._currentEffectId=null}get currentEffectId(){return this._currentEffectId}addEffect(t,e){const i=new kt(e,t);this._queue.push(i)}start(){let t=0;const e=()=>{this.planEffect(++t,e)};this.planEffect(t,e)}stop(){this._currentEffectId&&(clearTimeout(this._currentEffectId),this._currentEffectId=null)}stopAndClear(){this.stop(),this._queue.length=0}planEffect(t,e=null){if(t>=this._queue.length)return void(this._currentEffectId=null);const i=this._queue[t];this._currentEffectId=setTimeout((()=>{i.action(),e&&e()}),i.waitAfter)}}function Tt(t,e){return null!=e?e:t}function Dt(t,e,...i){i.unshift(e);const s=t.split(".")[0];if(i.indexOf(s)<0)throw new Error(`Unsupported entity type: ${s} (in '${t}'). Supported type(s): '${i.join("', '")}'.`)}function Pt(t){return t.filter((function(t,e,i){return e===i.indexOf(t)}))}class Ht{static getColor(t){switch(t){case"warm":return new Ct(At.WarmColor);case"cold":return new Ct(At.ColdColor);default:return new Ct(t)}}}var Lt,Bt;!function(t){t.Default="default",t.NoAction="none",t.TurnOn="turn-on",t.TurnOff="turn-off",t.MoreInfo="more-info",t.Scene="scene",t.HueScreen="hue-screen"}(Lt||(Lt={}));class Ut{constructor(t){"string"==typeof t?this._onlyValue=t:t instanceof Ut?(this._onlyValue=t._onlyValue,this._valueStore=t._valueStore):this._valueStore=t||{}}getData(t){return this._onlyValue?this._onlyValue:this._valueStore[t]}}class It{constructor(t){Dt(t,"scene"),this.entity=t}getActivationService(){const t="scene.turn_on",e=this.activation||t,i=e.split(".");if(2!=i.length)throw new Error(`Unrecognized service '${e}'. The service should have 2 parts separated by '.' (dot). E.g.: '${t}'`);return i}getActivationData(){const t={entity_id:this.entity};if(this.activationData)for(const e in this.activationData)Object.prototype.hasOwnProperty.call(this.activationData,e)&&(t[e]=this.activationData[e]);return t}}class Nt{constructor(t){this._config="string"==typeof t?new It(t):t}set hass(t){this._hass=t,this._entity=this._hass.states[this._config.entity]}activate(){this.ensureHass();const t=this._config.getActivationService(),e=this._config.getActivationData();this._hass.callService(t[0],t[1],e)}getTitle(t){if(this.ensureHass(),this._config.title)return this._config.title;let e=this._entity.attributes.friendly_name;return t&&0==(null==e?void 0:e.toLowerCase().indexOf(t.toLowerCase()))&&(e=e.substring(t.length).trimStart()),e}getIcon(t=null){return this.ensureHass(),null!=this._config.icon?this._config.icon:this._entity.attributes.icon||t}getColor(){return this._config.color?Ht.getColor(this._config.color):null}ensureHass(){if(!this._hass)throw new Error("Scene data not initialized - call setHass first!")}}let Mt=Bt=class extends et{constructor(){super(...arguments),this._effectQueue=new Ot}set hass(t){const e=this._hass;this._hass=t,this.updateHassDependentProps(),this.requestUpdate(Tt(this,"hass"),e)}set sceneConfig(t){const e=this._sceneConfig;this._sceneConfig=t,this._scene=new Nt(t),this.updateHassDependentProps(),this.requestUpdate(Tt(this,"sceneConfig"),e)}updateHassDependentProps(){this._hass&&this._scene&&(this._scene.hass=this._hass)}sceneClicked(){this._scene.activate(),this._effectQueue.stopAndClear();const t=this.renderRoot.querySelector(".scene");if(t){t.classList.remove("selected","unselected");const e=1e3*Bt.animationSeconds;this._effectQueue.addEffect(0,(()=>t.classList.add("selected"))),this._effectQueue.addEffect(3e3,(()=>t.classList.add("unselected"))),this._effectQueue.addEffect(e,(()=>{t.classList.add("stop-color-animate"),t.classList.remove("selected")})),this._effectQueue.addEffect(50,(()=>{t.classList.remove("stop-color-animate","unselected")})),this._effectQueue.start()}}updated(){if(this._scene&&!this._sceneAccentColorSet){this._sceneAccentColorSet=!0;const t=this._scene.getColor();if(t){const e=t.getForeground(At.LightColor,At.DarkColor,20),i=t.getForeground(At.LightColor,new Ct("black"),20);this.style.setProperty("--hue-tile-accent-color",t.toString()),this.style.setProperty("--hue-tile-fg-color",e.toString()),this.style.setProperty("--hue-tile-fg-text-color",i.toString())}}}render(){return this._scene?this.renderScene():""}renderScene(){const t=this._scene.getTitle(this.cardTitle);return L`
        <div class='hue-tile scene' title='${t}' @click="${this.sceneClicked}">
            <div class='icon-background'>
                <div class='color'>
                    <ha-icon icon="${this._scene.getIcon("mdi:palette")}"></ha-icon>
                </div>
            </div>
            <div class='title'>
                <span>${t}</span>
            </div>
        </div>
        `}};var Rt;Mt.ElementName=At.CardElementName+"-hue-dialog-tile",Mt.padding=5,Mt.height=100,Mt.width=85,Mt.colorDimensions=Bt.height/2,Mt.iconScale=.75*Bt.colorDimensions/24,Mt.animationSeconds=1,Mt.styles=o`
    .hue-tile{
        background: ${n(At.OffColor)};
        width: ${Bt.width}px;
        height: ${Bt.height}px;
        padding: ${Bt.padding}px;
        border-radius: ${At.HueBorderRadius}px;
        box-shadow: ${n(At.HueShadow)};
        overflow:hidden;
    }
    .scene {
        cursor: pointer;
    }
    .scene .icon-background {
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scene .icon-background .color {
        background: var(--hue-tile-accent-color, lightslategray);
        height: ${Bt.colorDimensions}px;
        width: ${Bt.colorDimensions}px;
        border-radius: ${Bt.colorDimensions/2}px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${Bt.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${n(At.LightColor)});
        transform: scale(${Bt.iconScale});
    }
    .scene.selected .icon-background .color {
        height: ${2*Bt.height}px;
        width: ${2*Bt.width}px;
        border-radius: ${Bt.height}px;
        margin-left: -${2*Bt.padding}px;
        margin-right: -${2*Bt.padding}px;
    }
    .scene.selected .icon-background .color ha-icon{
        animation: pop-icon 0.5s linear 1;
    }
    .scene.unselected .icon-background .color {
        background: transparent;
    }
    .scene.stop-color-animate .icon-background .color {
        transition: none;
    }

    .scene .title {
        color:${n(At.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:30%;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: all ${Bt.animationSeconds/2}s linear;
    }
    .scene .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .scene.selected .title {
        color:var(--hue-tile-fg-text-color, ${n(At.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${2*Bt.iconScale}); }
    }
    `,t([nt()],Mt.prototype,"cardTitle",void 0),Mt=Bt=t([st(Bt.ElementName)],Mt);let Vt=Rt=class extends et{constructor(t,e){super(),this._isRendered=!1,this._currTab=Rt.scenesTab,this._onHistoryBackListener=()=>this.close(),this._config=t,this._ctrl=e,this._id="HueDialog_"+Rt.maxDialogId++}onLightControllerChanged(t){"hass"==t&&this.requestUpdate()}show(){if(this._isRendered)throw new Error("Already rendered!");window.history.pushState({dialog:"hue-dialog",open:!0},""),window.addEventListener("popstate",this._onHistoryBackListener),document.body.appendChild(this),this._ctrl.registerOnPropertyChanged(this._id,(t=>this.onLightControllerChanged(t)))}close(){if(!this._isRendered)return;const t=this.renderRoot.querySelector("ha-dialog");t&&t.close?t.close():this.onDialogClose()}onDialogClose(){this._isRendered&&(this.remove(),window.removeEventListener("popstate",this._onHistoryBackListener),this._ctrl.unregisterOnPropertyChanged(this._id),this._isRendered=!1)}static get styles(){return[Rt.haStyleDialog,o`
        /* icon centering */
        .mdc-icon-button i,
        .mdc-icon-button svg,
        .mdc-icon-button img,
        .mdc-icon-button ::slotted(*){
            height:auto;
        }

        /* same color header */
        .heading {
            color:var(--hue-text-color);
            background:var(--hue-background);
            box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
            transition:all 0.3s ease-out 0s;

            border-bottom-left-radius: var(--ha-dialog-border-radius, 28px);
            border-bottom-right-radius: var(--ha-dialog-border-radius, 28px);
            padding-bottom: calc(var(--ha-dialog-border-radius, 28px) / 2);

            overflow:hidden;
        }
        ha-header-bar {
            --mdc-theme-on-primary: var(--hue-text-color);
            --mdc-theme-primary: transparent;/*var(--hue-background);*/
            flex-shrink: 0;
            display: block;
        }
        .heading ha-switch {
            margin-right: 10px;
        }
        .heading ha-slider {
            width: 100%;
        }
        /* Disable the bottom border radius */
        /* in default styles: --ha-border-radius=0 in this case */
        /*
        @media all and (max-width: 450px), all and (max-height: 500px) {
            border-bottom-left-radius: none;
            border-bottom-right-radius: none;
            padding-bottom: none;
        }
        */

        /* titles */
        .header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .header .title{
            color: var(--mdc-dialog-content-ink-color);
            font-family: var(--paper-font-title_-_font-family);
            -webkit-font-smoothing: var( --paper-font-title_-_-webkit-font-smoothing );
            font-size: var(--paper-font-subhead_-_font-size);
            font-weight: var(--paper-font-title_-_font-weight);
            letter-spacing: var(--paper-font-title_-_letter-spacing);
            line-height: var(--paper-font-title_-_line-height);
        }

        .content {
            outline: none;
        }

        /* tiles - scenes, lights */
        .tile-scroller {
            display: flex;
            flex-flow: column;
            /*gap: ${Rt.tileGap}px;*/
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 ${Rt.haPadding}px;
            margin: 0 -${Rt.haPadding}px;
        }
        .tiles {
            display: flex;
            flex-flow: row;
            gap: ${Rt.tileGap}px;
            margin-bottom: ${Rt.tileGap}px;
        }
        .tiles::after {
            /* Flex loosing right padding, when overflowing */
            content: '';
            min-width: ${Rt.haPadding-Rt.tileGap}px;
        }
        `]}updateStyles(t){var e,i,s,r;if(t){const t=this._config.getHueScreenBgColor();let e=null,i=null;t.isThemeColor()?(this.style.removeProperty("--mdc-theme-surface"),this.style.removeProperty("--primary-text-color")):(e=t,i=e.getForeground(At.DialogFgLightColor,At.DarkColor,120),this.style.setProperty("--mdc-theme-surface",e.toString()),this.style.setProperty("--primary-text-color",i.toString()))}const n=this.renderRoot.querySelector(".heading");let o;if(this._config.wasOffColorSet){const t=this._config.getOffColor();o=t.isThemeColor()?null:new xt([t.getBaseColor()])}else o=new xt([new Ct(At.DialogOffColor)]);const a=Et.calculateBackAndForeground(this._ctrl,o,!0),l=Et.calculateDefaultShadow(n,this._ctrl,this._config);l||this.requestUpdate(),this._config.hueBorders&&this.style.setProperty("--ha-dialog-border-radius",At.HueBorderRadius+"px"),this.style.setProperty("--hue-background",null!==(i=null===(e=a.background)||void 0===e?void 0:e.toString())&&void 0!==i?i:"var(--mdc-theme-surface)"),this.style.setProperty("--hue-box-shadow",l),this.style.setProperty("--hue-text-color",null!==(r=null===(s=a.foreground)||void 0===s?void 0:s.toString())&&void 0!==r?r:"var(--primary-text-color)")}render(){this._isRendered=!0;const t=this._config.getTitle(this._ctrl).resolveToString(this._ctrl.hass),e=()=>{this.requestUpdate(),this.updateStyles(!1)};return gt`
        <ha-dialog
          open
          @closed=${this.onDialogClose}
          .heading=${t}
          hideActions
        >
          <div slot="heading" class="heading">
            <ha-header-bar>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
              >
                <ha-icon
                  icon=${"mdi:close"}
                  style="height:auto"
                >
                </ha-icon>
              </ha-icon-button>
              <div
                slot="title"
                class="main-title"
                .title=${t}
              >
                ${t}
              </div>
              <div slot="actionItems">
              ${Et.createSwitch(this._ctrl,e)}
              </div>
            </ha-header-bar>
            ${Et.createSlider(this._ctrl,this._config,e)}
          </div>
          <div class="content" tabindex="-1" dialogInitialFocus>
            ${bt(this._currTab===Rt.scenesTab?gt`
                    <div class='header'>
                        <div class='title'>${this._config.resources.scenes}</div>
                    </div>
                    <div class='tile-scroller'>
                        <div class='tiles'>
                            ${this._config.scenes.map(((e,i)=>i%2==1?gt``:gt`<${dt(Mt.ElementName)} .cardTitle=${t} .sceneConfig=${e} .hass=${this._ctrl.hass}></${dt(Mt.ElementName)}>`))}
                        </div>
                        <div class='tiles'>
                            ${this._config.scenes.map(((e,i)=>i%2==0?gt``:gt`<${dt(Mt.ElementName)} .cardTitle=${t} .sceneConfig=${e} .hass=${this._ctrl.hass}></${dt(Mt.ElementName)}>`))}
                        </div>
                    </div>
                  `:gt`
                    <h3>Here for Colors</h3>
                  `)}
            <!--
            <div class='header'>
                <div class='title'>${this._config.resources.lights}</div>
            </div>
            -->
          </div>
        </ha-dialog>
        `}firstUpdated(){this.updateStyles(!0)}updated(){this.updateStyles(!1)}};Vt.ElementName=At.CardElementName+"-hue-dialog",Vt.maxDialogId=1,Vt.colorsTab="colors",Vt.scenesTab="scenes",Vt.tabs=[Rt.colorsTab,Rt.scenesTab],Vt.haStyleDialog=o`
    /* mwc-dialog (ha-dialog) styles */
    ha-dialog {
      --mdc-dialog-min-width: 400px;
      --mdc-dialog-max-width: 600px;
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --justify-action-buttons: space-between;
    }
    ha-dialog .form {
      color: var(--primary-text-color);
    }
    a {
      color: var(--primary-color);
    }
    /* make dialog fullscreen on small screens */
    @media all and (max-width: 450px), all and (max-height: 500px) {
      ha-dialog {
        --mdc-dialog-min-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-max-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-min-height: 100%;
        --mdc-dialog-max-height: 100%;
        --vertical-align-dialog: flex-end;
        --ha-dialog-border-radius: 0px;
      }
    }
    mwc-button.warning {
      --mdc-theme-primary: var(--error-color);
    }
    .error {
      color: var(--error-color);
    }
  `,Vt.tileGap=10,Vt.haPadding=24,t([function(t){return nt({...t,state:!0})}()],Vt.prototype,"_currTab",void 0),Vt=Rt=t([st(Rt.ElementName)],Vt);class Ft{constructor(t,e,i){this._config=t,this._ctrl=e,this._el=i}handleClick(){const t=this._ctrl.isOn();let e=t?this._config.onClickAction:this._config.offClickAction;const i=t?this._config.onClickData:this._config.offClickData;e==Lt.Default&&(e=t?this.resolveDefaultWhenOn():this.resolveDefaultWhenOff()),this.executeClickAction(e,i)}resolveDefaultWhenOn(){return this._config.scenes.length?Lt.HueScreen:1==this._ctrl.count?Lt.MoreInfo:Lt.TurnOff}resolveDefaultWhenOff(){return 1==this._ctrl.count?Lt.MoreInfo:this._config.scenes.length?Lt.HueScreen:Lt.TurnOn}executeClickAction(t,e){switch(t){case Lt.NoAction:break;case Lt.TurnOn:this._ctrl.turnOn();break;case Lt.TurnOff:this._ctrl.turnOff();break;case Lt.MoreInfo:let i=e.getData("entity");i||(i=this._ctrl.isOn()?this._ctrl.getLitLights()[0].getEntityId():this._config.getEntities()[0]),function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});r.detail=i,t.dispatchEvent(r)}(this._el,"hass-more-info",{entityId:i});break;case Lt.Scene:const s=e.getData("scene");if(!s)throw new Error("No scene for click defined.");const r=new Nt(s);r.hass=this._ctrl.hass,r.activate();break;case Lt.HueScreen:new Vt(this._config,this._ctrl).show();break;case Lt.Default:throw new Error("Cannot execute Default action");default:throw new Error(`Cannot executed unwknow action ${t}.`)}}}class zt{constructor(t){this._attribute=null;const e=(t=t.trim()).indexOf("."),i=t.lastIndexOf(".");e!=i?(this._textOrEntity=t.substring(0,i),this._attribute=t.substring(i+1)):this._textOrEntity=t}resolveToString(t){if(t){const e=t.states[this._textOrEntity];if(!e)return"MISS["+this._textOrEntity+"]";if(this._attribute&&e.attributes){const t=e.attributes[this._attribute];if(t)return t.toString()}return e.state}return""}}class qt{constructor(t){this._text=t}resolveToString(t=null){return this._text}toString(){return this.resolveToString()}}class jt{constructor(t){this._templateParts=jt.parseTemplate(t)}resolveToString(t){if(1==this._templateParts.length)return this._templateParts[0].resolveToString(t);let e="";return this._templateParts.forEach((i=>{e+=i.resolveToString(t)})),e}static parseTemplate(t){const e=new Array;let i=0,s=!1;for(;i<t.length;){let r;if(s){if(r=t.indexOf("}}",i),r<0)break;const n=t.substring(i,r);e.push(new zt(n)),s=!1}else{if(r=t.indexOf("{{",i),r<0)break;const n=t.substring(i,r);e.push(new qt(n)),s=!0}i=r+2}if(s&&(i-=2),i<t.length){const s=t.substring(i);e.push(new qt(s))}return e}}class Wt{constructor(t,e=!1){this.value=t,this.dontCache=e}}class Gt{constructor(t){this._factories={},this._lastValues={},this._cacheInterval=t}registerProperty(t,e){this._factories[t]=e,delete this._lastValues[t]}setValue(t,e){this.ensureExists(t),this._lastValues[t]=this.createCacheItem(e)}getValue(t){this.ensureExists(t);const e=(new Date).getTime(),i=this._lastValues[t];if(i&&e-i.time<this._cacheInterval)return i.value;let s=this._factories[t](),r=!1;if(s instanceof Wt){const t=s;s=t.value,r=t.dontCache}return r||this.setValue(t,s),s}ensureExists(t){if(!this._factories[t])throw Error(`Property with name ${t} is not registered in TimeCache.`)}createCacheItem(t){return{value:t,time:(new Date).getTime()}}}class Qt{constructor(t){Dt(t,"light"),this._entity_id=t,this.initTimeCache()}set hass(t){this._hass=t,this._entity=this._hass.states[this._entity_id]}getAttributes(){return this._entity.attributes}initTimeCache(){this._cache=new Gt(At.TimeCacheInterval),this._cache.registerProperty("state",(()=>{var t;return new Wt(null===(t=this._entity)||void 0===t?void 0:t.state,this.getDontCacheState())})),this._cache.registerProperty("value",(()=>new Wt(this.valueGetFactory(),this.getDontCacheValue())))}getDontCacheState(){return!this._entity||"unavailable"==this._entity.state}getDontCacheValue(){return this.getDontCacheState()||null==this._entity.attributes.brightness}notifyTurnOn(){this._cache.setValue("state","on"),this._lastOnValue&&this._cache.setValue("value",this._lastOnValue)}notifyTurnOff(){this._cache.setValue("state","off"),this._cache.setValue("value",0)}notifyValueChanged(t){t>0&&(this._lastOnValue=t),this._cache.setValue("value",t),this._cache.setValue("state",t>0?"on":"off")}isUnavailable(){return"unavailable"==this._cache.getValue("state")}isOn(){return"on"==this._cache.getValue("state")}isOff(){return!this.isOn()}turnOn(){this.toggle(!0)}turnOff(){this.toggle(!1)}toggle(t){t?this.notifyTurnOn():this.notifyTurnOff(),this._hass.callService("light",t?"turn_on":"turn_off",{entity_id:this._entity_id})}valueGetFactory(){var t;if(this.isOff())return 0;const e=null!==(t=this.getAttributes().brightness)&&void 0!==t?t:1;return this._lastOnValue=Math.round(100*e/255),this._lastOnValue}get value(){return this._cache.getValue("value")}set value(t){t<0?t=0:t>100&&(t=100),this.notifyValueChanged(t);const e=Math.round(t/100*255);this._hass.callService("light","turn_on",{entity_id:this._entity_id,brightness:e})}getIcon(){return this._entity&&this._entity.attributes.icon}getTitle(){var t;return new qt(null!==(t=this._entity.attributes.friendly_name)&&void 0!==t?t:this._entity_id)}getBackground(){const t=this.getAttributes().rgb_color;if(!t)return this._lastBackground?this._lastBackground:null;const e=new Ct(t[0],t[1],t[2]);return this._lastBackground=new xt([e]),new xt([this._lastBackground])}getEntityId(){return this._entity_id}}class Zt{static getLightContainer(t){let e=this._containers[t];return e||(e=new Qt(t),this._containers[t]=e),e}}Zt._containers={};class Kt{constructor(){this._propertyChangedCallbacks={}}raisePropertyChanged(t){for(const e in this._propertyChangedCallbacks)this._propertyChangedCallbacks[e](t)}registerOnPropertyChanged(t,e){this._propertyChangedCallbacks[t]=e}unregisterOnPropertyChanged(t){delete this._propertyChangedCallbacks[t]}}class Jt extends Kt{constructor(t,e){if(super(),!t.length)throw new Error('No entity specified (use "entity" and/or "entities").');this._defaultColor=e,this._lights=t.map((t=>Zt.getLightContainer(t)))}get count(){return this._lights.length}getLitLights(){return this._lights.filter((t=>t.isOn()))}set hass(t){this._hass=t,this._lights.forEach((e=>e.hass=t)),this.raisePropertyChanged("hass")}get hass(){return this._hass}isOn(){return this._lights.some((t=>t.isOn()))}isOff(){return this._lights.every((t=>t.isOff()))}isUnavailable(){return this._lights.every((t=>t.isUnavailable()))}turnOn(){this._lights.filter((t=>t.isOff())).forEach((t=>t.turnOn()))}turnOff(){this._lights.filter((t=>t.isOn())).forEach((t=>t.turnOff()))}get value(){return this.valueGetFactory()}set value(t){const e=this._lights.filter((t=>t.isOn()));if(1==e.length)return void(e[0].value=t);if(0==e.length)return void this._lights.forEach((e=>e.value=t));const i=this.value,s=t-i,r=s>0?100-this.value:this.value,n=s/r;this._lights.filter((t=>t.isOn())).forEach((e=>{if(e.value==i)return void(e.value=t);const r=s>0?100-e.value:e.value,o=Math.round(r*n);let a=e.value+o;a<1&&t>0&&(a=1),e.value=a}))}valueGetFactory(){let t=0,e=0;if(this._lights.forEach((i=>{i.isOn()&&(e++,t+=i.value)})),0==e)return 0;return t/e*1}getIcon(){return this._lights.length>2?At.DefaultMoreIcon:this._lights.length>1?At.DefaultTwoIcon:this._lights[0].getIcon()||At.DefaultOneIcon}getTitle(){let t="";for(let e=0;e<this._lights.length&&e<3;e++)e>0&&(t+=", "),t+=this._lights[e].getTitle();return this._lights.length>3&&(t+=", ..."),new qt(t)}getBackground(){const t=this._lights.filter((t=>t.isOn())).map((t=>t.getBackground()||this._defaultColor));return 0==t.length?null:new xt(t)}getEntityId(){throw Error("Cannot get entity id from LightController")}}class Xt{constructor(t){t=t||{},this.scenes=t.scenes||"Scenes",this.lights=t.lights||"Lights"}}class Yt{constructor(t){this.scenesLoaded=!1,this.entity=t.entity,this.entities=t.entities,this.title=t.title,this.icon=t.icon,this._scenes=Yt.getScenesArray(t.scenes),this.offClickAction=Yt.getClickAction(t.offClickAction),this.offClickData=new Ut(t.offClickData),this.onClickAction=Yt.getClickAction(t.onClickAction),this.onClickData=new Ut(t.onClickData),this.allowZero=Yt.getBoolean(t.allowZero,!1),this.defaultColor=t.defaultColor||At.DefaultColor,this.offColor=t.offColor||At.OffColor,this.wasOffColorSet=!!t.offColor,this.hueScreenBgColor=t.hueScreenBgColor||At.DialogBgColor,this.disableOffShadow=Yt.getBoolean(t.disableOffShadow,!1),this.hueBorders=Yt.getBoolean(t.hueBorders,!0),this.resources=new Xt(t.resources)}static getBoolean(t,e){return null==t?e:!!t}static getClickAction(t){if(!t)return Lt.Default;let e="";for(const i in Lt){const s=Lt[i];if(t==s)return t;e+=`'${s}', `}throw new Error(`Click action '${t}' was not recognized. Allowed values are: ${e}`)}static getScenesArray(t){if(!t)return[];if(t.length>0){const e=new Array;for(let i=0;i<t.length;i++){const s=t[i],r=Yt.getScene(s,i);r&&e.push(r)}return e}return[]}static getScene(t,e){if("string"==typeof t)return new It(t);if(!t.entity)throw new Error(`Scene on index ${e} is missing 'entity' attribute, which is required.`);const i=new It(t.entity);return i.title=t.title,i.icon=t.icon,i.color=t.color,i.activation=t.activation,i.activationData=t.activationData,i}get scenes(){return this._scenes}getTitle(t){return this.title?new jt(this.title):t.getTitle()}getEntities(){const t=[];return this.entity&&t.push(this.entity),this.entities&&this.entities.forEach((e=>t.push(e))),t}getDefaultColor(){return Ht.getColor(this.defaultColor)}getOffColor(){return new St(this.offColor)}getHueScreenBgColor(){return new St(this.hueScreenBgColor)}async tryLoadScenes(t){if(!t)throw new Error("Hass instance must be passed!");if(0==this.scenes.length&&!this.scenesLoaded){this.scenesLoaded=!0;try{let e=new Array;await Promise.all(this.getEntities().map((async i=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"entity",item_id:i});s&&s.area&&s.area.length&&e.push(s.area[0])}))),e=Pt(e);let i=new Array;await Promise.all(e.map((async e=>{const s=await t.connection.sendMessagePromise({type:"search/related",item_type:"area",item_id:e});s&&s.scene&&s.scene.forEach((t=>i.push(t)))}))),i=Pt(i),this._scenes=Yt.getScenesArray(i)}catch(t){console.error("Cannot load scenes from HA."),console.error(t)}}}}console.info(`%cHUE-%cLIKE%c LIGHT%c CARD %c${At.Version}`,"font-weight:bold;color:white;background:#0046FF","font-weight:bold;color:white;background:#9E00FF","font-weight:bold;color:white;background:#FF00F3","font-weight:bold;color:white;background:#FF0032","font-weight:bold;color:white;background:#FF8B00"),window.customCards=window.customCards||[],window.customCards.push({type:At.CardElementName,name:At.CardName,description:At.CardDescription});let te=class extends et{set hass(t){const e=this._hass;this._hass||this._config.tryLoadScenes(t),this._hass=t,this._ctrl.hass=t,this.requestUpdate(Tt(this,"hass"),e)}get hass(){return this._hass}async setConfig(t){this._config=new Yt(t),this._ctrl=new Jt(this._config.getEntities(),this._config.getDefaultColor()),this._clickHandler=new Ft(this._config,this._ctrl,this);const e=this._config.getOffColor();e.isThemeColor()?this._offBackground=null:this._offBackground=new xt([e.getBaseColor()])}getCardSize(){return 3}cardClicked(){this._clickHandler.handleClick(),this.updateStyles()}updateStyles(){var t,e,i,s;const r=this.renderRoot.querySelector("ha-card");if(!this._config.hueBorders&&null==this.haShadow){const t=document.createElement("ha-card");document.body.appendChild(t);const e=getComputedStyle(t);this.haShadow=e.boxShadow,t.remove(),"none"==this.haShadow&&(null==r?this.haShadow=null:r.classList.add("new-borders")),this.style.setProperty("--ha-default-shadow",this.haShadow)}const n=Et.calculateBackAndForeground(this._ctrl,this._offBackground),o=Et.calculateDefaultShadow(r,this._ctrl,this._config);this.style.setProperty("--hue-background",null!==(e=null===(t=n.background)||void 0===t?void 0:t.toString())&&void 0!==e?e:"var(--card-background-color, --paper-card-background-color)"),this.style.setProperty("--hue-text-color",null!==(s=null===(i=n.foreground)||void 0===i?void 0:i.toString())&&void 0!==s?s:"var(--secondary-text-color)"),this.style.setProperty("--ha-card-box-shadow",o),this.style.setProperty("--hue-box-shadow",o)}render(){const t=this._config.getTitle(this._ctrl).resolveToString(this._hass),e=()=>{this.requestUpdate(),this.updateStyles()};return L`<ha-card>
            <div class="tap-area" @click="${()=>this.cardClicked()}">
                <ha-icon icon="${this._config.icon||this._ctrl.getIcon()}"></ha-icon>
                <h2>${t}</h2>
            </div>
            ${Et.createSwitch(this._ctrl,e)}

            ${Et.createSlider(this._ctrl,this._config,e)}
        </ha-card>`}firstUpdated(){this._config.hueBorders&&(this.renderRoot.querySelector("ha-card").className="hue-borders"),this.updated()}updated(){this.updateStyles()}connectedCallback(){super.connectedCallback(),this.updateStyles()}};te.styles=o`
    ha-card
    {
        height:80px;
        background:var(--hue-background);
        position:relative;
        box-shadow:var(--hue-box-shadow), var(--ha-default-shadow);
    }
    ha-card.new-borders
    {
        /* since HA 2022.11 */
        box-shadow:var(--hue-box-shadow);
    }
    ha-card.hue-borders
    {
        border-radius:${At.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${n(At.HueShadow)};
        border:none;
    }
    ha-card div.tap-area
    {
        height:48px; /* card(80) - slider(32) */
        cursor: pointer;
    }
    ha-icon
    {
        position:absolute;
        left:22px;
        top:17px;
        transform:scale(2);
        color:var(--hue-text-color);
        transition:all 0.3s ease-out 0s;
    }
    h2
    {
        padding-top:0.5em;
        margin:0px 60px 0px 70px;
        min-height:22px;
        vertical-align:top;
        font-weight:400;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        color:var(--hue-text-color);
        transition:all 0.3s ease-out 0s;
    }
    ha-switch
    {
        position:absolute;
        right:14px;
        top:22px;
    }
    ha-slider
    {
        position:absolute;
        bottom:0;
        width:100%;
    }
    `,te=t([st(At.CardElementName)],te);export{te as HueLikeLightCard};
