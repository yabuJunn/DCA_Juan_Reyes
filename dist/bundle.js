(()=>{"use strict";const e={images:[[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1]],[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,1,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,1],[1,0,0,1,1,1,0,0,1],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0]]]};var t;!function(e){e.color="color"}(t||(t={}));class s extends HTMLElement{static get observedAttributes(){return["color"]}attributeChangedCallback(e,t,s){"color"===e&&(this.properties.color=s)}constructor(){super(),this.properties={color:""},this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/componets/divPixel/divPixel.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const i=this.ownerDocument.createElement("div");i.classList.add("pixel");const o=this.properties.color;i.style.backgroundColor="0"===o?"white":"black",null===(t=this.shadowRoot)||void 0===t||t.appendChild(i)}}customElements.define("div-pixel",s);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t;const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/dist/index.css"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s),this.createSections(e)}createSections(e){var t;const s=[];for(let e=0;e<9;e++){const i=this.ownerDocument.createElement("section");i.classList.add(`section${e}`),s.push(i),null===(t=this.shadowRoot)||void 0===t||t.appendChild(i)}this.createPixels(e.images[0],s[0]),this.createPixels(e.images[1],s[1]),this.createPixels(e.images[2],s[2]),this.createPixels(e.images[3],s[3]),this.createPixels(e.images[4],s[4]),this.createPixels(e.images[5],s[5]),this.createPixels(e.images[6],s[6]),this.createPixels(e.images[7],s[7])}createPixels(e,t){const s=[];e.map((e=>{e.map((e=>{s.push(e)}))})),s.map((e=>{const s=this.ownerDocument.createElement("div-pixel");s.setAttribute("color",e),t.appendChild(s)}))}}customElements.define("app-container",i)})();