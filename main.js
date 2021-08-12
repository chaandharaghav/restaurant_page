(()=>{"use strict";var n={771:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(645),o=t.n(r),a=t(667),c=t.n(a),i=new URL(t(749),t.b),s=o()((function(n){return n[1]}));s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap);"]);var d=c()(i);s.push([n.id,"/* General Syles */\n\nnav,\nnav div,\n#menuDiv,\n.foodDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbody,\nnav button {\n  color: rgba(240, 248, 255, 0.863);\n}\n\nbody {\n  height: 100vh;\n\n  background: linear-gradient(\n      0deg,\n      rgba(44, 44, 44, 0.3),\n      rgba(44, 44, 44, 0.3)\n    ),\n    url("+d+');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n\n  justify-content: flex-start;\n}\n\n/* Header styles */\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n  font-family: "Beth Ellen", cursive;\n\n  margin: 3rem 0;\n}\n\nnav {\n  height: 23vh;\n  flex-direction: column;\n}\n\nnav div {\n  width: 100vw;\n  justify-content: space-around;\n}\n\nnav button {\n  border: 0;\n  border-radius: 0.4rem;\n\n  background-color: rgba(0, 0, 0, 0.562);\n\n  font-size: 1rem;\n  font-weight: 600;\n\n  padding: 1rem 1.8rem;\n}\n\nnav button:active {\n  background-color: rgba(0, 0, 0, 0.651);\n}\n\n/* Content div styles */\n\n#content {\n  width: 100vw;\n  min-height: 77vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Home styles */\n\n#tagLine {\n  display: flex;\n  flex-direction: column;\n\n  font-size: 4rem;\n  font-weight: 700;\n}\n\n/* Menu styles */\n\n#menuDiv {\n  width: 100%;\n\n  background-color: rgba(0, 0, 0, 0.322);\n\n  flex-direction: column;\n\n  margin: 5rem 0;\n  padding: 3rem;\n}\n\n#menuDiv h2 {\n  font-size: 3rem;\n\n  margin-bottom: 3rem;\n}\n\n.foodDiv {\n  background-color: rgba(0, 0, 0, 0.5);\n\n  flex-direction: column;\n\n  margin: 2rem 0;\n  padding: 1.8rem;\n}\n\n.foodDiv:active {\n  background-color: rgba(0, 0, 0, 0.603);\n}\n\n.foodImg {\n  max-width: 250px;\n  max-height: 150px;\n}\n\n.foodName,\n.foodPrice {\n  margin: 0.3rem 0;\n}\n\n.foodName {\n  font-size: 2rem;\n}\n.foodPrice {\n  font-size: 1.3rem;\n}\n\n/* Media queries */\n\n@media (min-width: 767px) {\n  /* Navbar styles */\n\n  nav {\n    flex-direction: row;\n\n    background-color: rgba(0, 0, 0, 0.329);\n\n    padding: 0 3rem;\n  }\n\n  nav div {\n    justify-content: flex-end;\n  }\n\n  nav button {\n    background-color: transparent;\n  }\n\n  nav button:active {\n    background-color: rgba(0, 0, 0, 0.568);\n  }\n\n  /* Home styles */\n\n  #tagLine {\n    font-size: 5rem;\n  }\n\n  /* Menu styles */\n\n  #menuDiv {\n    width: 90%;\n\n    display: grid;\n    grid-template-rows: auto auto;\n  }\n\n  #menuDiv h2 {\n    text-align: center;\n  }\n\n  #foodItems {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 3rem;\n  }\n\n  .foodDiv {\n    margin: 0;\n  }\n}\n\n@media (min-width: 1023px) {\n  nav button:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.568);\n  }\n\n  #menuDiv {\n    width: 70%;\n  }\n\n  /* Menu styles  */\n  .foodDiv:hover {\n    background-color: rgba(0, 0, 0, 0.568);\n  }\n}\n\n@media (min-width: 1300px) {\n  #foodItems {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n',""]);const u=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<n.length;i++){var s=[].concat(n[i]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(m)):e.push({identifier:l,updater:o(m,r),references:1}),c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},749:(n,e,t)=>{n.exports=t.p+"a22e845517cc3c2baa2a.jpeg"},388:(n,e,t)=>{n.exports=t.p+"11702b25a339977e6fe0.jpg"},929:(n,e,t)=>{n.exports=t.p+"6dfe52216c51d8be8247.jpeg"},325:(n,e,t)=>{n.exports=t.p+"55760cd777bc08483a69.jpg"},427:(n,e,t)=>{n.exports=t.p+"4b71b2932e2fbec53bf5.jpg"},817:(n,e,t)=>{n.exports=t.p+"cb7597f61e064189d000.jpg"},778:(n,e,t)=>{n.exports=t.p+"a5e38eaa369c6530e2ad.jpg"},704:(n,e,t)=>{n.exports=t.p+"01ae53215cbdbe8e61b3.jpg"},720:(n,e,t)=>{n.exports=t.p+"e3e808e6f56092b9686d.jpg"},727:(n,e,t)=>{n.exports=t.p+"0880376de79db39bf045.jpg"},993:(n,e,t)=>{n.exports=t.p+"cc811e7c961a18b8cfdd.jpg"},294:(n,e,t)=>{n.exports=t.p+"2004ab2c77f517a6466c.jpg"},206:(n,e,t)=>{n.exports=t.p+"ab866e22954e2f0338ec.jpg"},386:(n,e,t)=>{n.exports=t.p+"dc614129445baa19ae56.jpg"},855:(n,e,t)=>{n.exports=t.p+"3f1e0103d1bfbeae08a9.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),u=t.n(d),l=t(589),p=t.n(l),m=t(771),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=function(n,e){const t=document.createElement("button");return t.innerText=n,t.id=e,t};function v(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="tagLine";const t=document.createElement("span");t.innerText="Eat.";const r=document.createElement("span");r.innerText="Delicious.",e.append(t,r),n.append(e)}var b=t(388),h=t(929),x=t(325),y=t(427),w=t(817),E=t(778),j=t(704),T=t(720),k=t(727),S=t(993),M=t(294),D=t(206),C=t(386),L=t(855);function I(){const n=document.querySelector("#content"),e=document.createElement("h2");e.innerText="Our offerings";const t=document.createElement("div");t.id="menuDiv",t.append(e);let r=document.createElement("div");r.id="foodItems",r=function(n){const e=[{name:"Burger",src:b},{name:"Burritos",src:h},{name:"Cake",src:x},{name:"Cereals",src:y},{name:"Crosissant",src:w},{name:"Italian",src:E},{name:"Korean",src:j},{name:"Omlette",src:T},{name:"Pakora",src:k},{name:"Pancakes",src:S},{name:"Pizza",src:M},{name:"Salads",src:D},{name:"Tempura",src:C},{name:"Thai",src:L}];for(let t of e){const e=P(t.name,t.src,Math.round(20*Math.random()+10));n.append(e)}return n}(r),t.append(r),n.append(t)}function P(n,e,t){const r=document.createElement("div");r.classList.add("foodDiv");const o=document.createElement("img");o.classList.add("foodImg"),o.src=e;const a=document.createElement("span");a.classList.add("foodName"),a.innerText=n;const c=document.createElement("span");return c.classList.add("foodPrice"),c.innerText=`$${t}`,r.append(o,a,c),r}!function(){const n=document.createElement("h1");n.innerText="Everyplate";const e=document.createElement("nav"),t=g("Home","home"),r=g("Menu","menu"),o=g("Contact","contact"),a=document.createElement("div");a.append(t,r,o),e.append(n,a);const c=document.querySelector("body");c.insertBefore(e,c.firstChild)}(),I();const z=document.querySelectorAll("nav button");for(const n of z)n.addEventListener("click",(function(){switch(A(),this.id){case"home":v();break;case"menu":I()}}));const A=function(){document.querySelector("#content").innerHTML=""}})()})();