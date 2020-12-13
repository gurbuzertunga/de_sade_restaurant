(()=>{"use strict";var n,e,t,o={877:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(645),r=t.n(o),a=t(667),i=t.n(a),c=t(566),l=t(627),s=t(259),d=r()((function(n){return n[1]})),u=i()(c),p=i()(l.Z),f=i()(s.Z);d.push([n.id,"@font-face {\n  font-family: RobotoSpecial;\n  src: url("+u+");\n}\n\nbody {\n  padding: auto;\n  margin: auto;\n}\n\nnav {\n  background-color: #23120b;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 20px;\n}\n\nnav .logo-area {\n  background-image: url("+p+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 150px;\n}\n\nnav ul {\n  font-family: 'RobotoSpecial';\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\nnav ul li {\n  padding: 20px 50px;\n  font-size: larger;\n  color: #d35d6e;\n}\n\nmain {\n  background-image: url("+f+");\n  background-size: auto;\n  background-repeat: no-repeat;\n  height: 800px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmain h1 {\n  padding: 100px 50px 100px 50px;\n  font-family: 'RobotoSpecial';\n  background-color: rgba(190, 220, 250, 0.35);\n  color: #23120b;\n}\n\nmain .container {\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border: 2px solid black;\n  margin: 0 15px;\n}\n\nmain .container h4 {\n  padding: 20px;\n  background-color: rgba(190, 220, 250, 0.35);\n  text-align: center;\n  bottom: 25px;\n  color: black;\n}\n\nmain h4 {\n  text-align: bottom;\n  font-size: 18px;\n  font-weight: 400;\n  -webkit-transform: translateY(5px);\n          transform: translateY(5px);\n  -webkit-transition: -webkit-transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: -webkit-transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1), -webkit-transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  max-width: 320px;\n  outline: 1px solid transparent;\n  font-family: 'RobotoSpecial';\n}\n\nfooter {\n  background-color: #23120b;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nfooter p {\n  margin: 15px auto;\n  color: #d35d6e;\n}",""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},259:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"ab16689731b7b739f9a567387e8a6639.jpg"},627:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"00c763def21dccb1c2e88414ef745aca.png"},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],l=e.base?c[0]+e.base:c[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var u=i(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:b(p,e),references:1}),o.push(d)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function b(n,e){var t,o,r;if(e.singleton){var a=m++;t=f||(f=l(e)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=l(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=i(t[o]);a[r].references--}for(var l=c(n,e),s=0;s<t.length;s++){var d=i(t[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=l}}}},566:(n,e,t)=>{n.exports=t.p+"33daf006e90437cbc74f.ttf"}},r={};function a(n){if(r[n])return r[n].exports;var e=r[n]={id:n,exports:{}};return o[n](e,e.exports,a),e.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var e=a.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),n=a(379),e=a.n(n),t=a(877),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,a.p,a.p,a.p,a.p,function(){const n=document.createElement("div");document.body.prepend(n),n.id="content"}(),function(){const n=document.getElementById("content"),e=document.createElement("nav"),t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("ul"),a=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li");t.classList.add("logo-area"),a.classList.add("home-button"),i.classList.add("menu-button"),c.classList.add("contact-button"),n.appendChild(e),e.appendChild(t),e.appendChild(o),o.appendChild(r),r.appendChild(a),r.appendChild(i),r.appendChild(c),a.textContent="HOME",i.textContent="MENU",c.textContent="CONTACT"}(),function(){const n=document.getElementById("content"),e=document.createElement("main"),t=document.createElement("h1");t.textContent="Food so great that you will sell your family heirlooms...",n.appendChild(e),e.appendChild(t)}(),function(){const n=document.getElementById("content"),e=document.createElement("footer"),t=document.createElement("p");n.appendChild(e),e.appendChild(t),t.textContent="made by @gurbuzertunga"}()})();