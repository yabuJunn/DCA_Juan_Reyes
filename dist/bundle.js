(()=>{"use strict";const e={images:[[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1]],[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,1,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,1],[1,0,0,1,1,1,0,0,1],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0]]]};var t;!function(e){e.color="color"}(t||(t={}));class s extends HTMLElement{static get observedAttributes(){return["color"]}attributeChangedCallback(e,t,s){"color"===e&&(this.properties.color=s)}constructor(){super(),this.properties={color:""},this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/componets/divPixel/divPixel.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const o=this.ownerDocument.createElement("div");o.classList.add("pixel");const n=this.properties.color;o.style.backgroundColor="0"===n?"white":"black",null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("div-pixel",s);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/dist/index.css"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s),e.images.map((e=>{var t;const s=this.ownerDocument.createElement("section");s.classList.add("bigImage"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s),e.map((e=>{s.style.width=`${e.length}0px`,e.map((e=>{const t=this.ownerDocument.createElement("div-pixel");t.setAttribute("color",`${e}`),s.appendChild(t)}))}))}))}}customElements.define("app-container",o)})();