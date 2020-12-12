(()=>{"use strict";var n,e,t,a={877:(n,e,t)=>{t.d(e,{Z:()=>h});var a=t(645),r=t.n(a),i=t(667),o=t.n(i),c=t(566),s=t(243),l=t(793),d=t(617),p=r()((function(n){return n[1]})),m=o()(c),f=o()(s),u=o()(l),b=o()(d);p.push([n.id,"@font-face {\n  font-family: RobotoSpecial;\n  src: url("+m+");\n}\n\nbody {\n  padding: auto;\n  margin: auto;\n}\n\nnav {\n  background-color: wheat;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 20px;\n}\n\nnav .logo-area {\n  background-image: url("+f+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 150px;\n}\n\nnav ul {\n  font-family: 'RobotoSpecial';\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\nnav ul li {\n  padding: 20px 50px;\n  font-size: larger;\n}\n\nmain {\n  background-image: url("+u+");\n  background-size: auto;\n  background-repeat: no-repeat;\n  height: 800px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmain h1 {\n  padding: 100px 50px 100px 50px;\n  font-family: 'RobotoSpecial';\n  background-color: rgba(190, 220, 250, 0.35);\n  color: #23120b;\n}\n\nmain .container {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-perspective-origin: center;\n          perspective-origin: center;\n}\n\nmain .col {\n  height: 100%;\n  -webkit-transition: opacity 300ms ease, -webkit-transform 600ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: opacity 300ms ease, -webkit-transform 600ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 600ms cubic-bezier(0.39, 0.575, 0.565, 1), opacity 300ms ease;\n  transition: transform 600ms cubic-bezier(0.39, 0.575, 0.565, 1), opacity 300ms ease, -webkit-transform 600ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  -webkit-transform: translateZ(34px) scale(0.98);\n          transform: translateZ(34px) scale(0.98);\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.3333%;\n          flex: 0 0 33.3333%;\n  position: relative;\n}\n\nmain .col:hover,\nmain .col:focus {\n  -webkit-transform: translateZ(34px);\n          transform: translateZ(34px);\n  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: opacity 300ms ease, -webkit-transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1), opacity 300ms ease;\n  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1), opacity 300ms ease, -webkit-transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n\nmain .card-container {\n  position: relative;\n  width: calc(100% - 25px);\n  height: calc(33.3% - 25px);\n  margin: 17px;\n  padding: 8px;\n  text-align: center;\n  opacity: .89;\n}\n\nmain .card-container:hover,\nmain .card-container:focus {\n  opacity: 1;\n}\n\nmain .overlay {\n  display: block;\n  position: absolute;\n  cursor: pointer;\n  width: 50%;\n  height: 50%;\n  z-index: 1;\n  -webkit-transform: translateZ(34px);\n          transform: translateZ(34px);\n}\n\nmain .overlay:nth-of-type(1) {\n  left: 0;\n  top: 0;\n}\n\nmain .overlay:nth-of-type(1):hover ~ .card,\nmain .overlay:nth-of-type(1):focus ~ .card {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  -webkit-transform: rotateX(3deg) rotateY(-3deg) translateZ(0);\n          transform: rotateX(3deg) rotateY(-3deg) translateZ(0);\n}\n\nmain .card {\n  border-radius: 5px;\n  height: 100%;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  position: relative;\n  z-index: 0;\n  opacity: .89;\n  padding: 13px 21px;\n}\n\nmain .card:before,\nmain .card:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: .21;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n  -webkit-transform: scale(0.98);\n          transform: scale(0.98);\n}\n\nmain .card:before {\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\nmain .card-container:hover .card:before,\nmain .card-container:hover .card:after,\nmain .card-container:focus .card:before,\nmain .card-container:focus .card:after {\n  opacity: .34;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmain .col:nth-of-type(1) .card-container:nth-of-type(1) .card:before {\n  background-image: url("+b+");\n}\n\nmain .card:after {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.89)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.89) 100%);\n}\n\nmain h4 {\n  text-align: left;\n  font-size: 18px;\n  font-weight: 400;\n  -webkit-transform: translateY(5px);\n          transform: translateY(5px);\n  -webkit-transition: -webkit-transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: -webkit-transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1), -webkit-transform 450ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  max-width: 320px;\n  outline: 1px solid transparent;\n}\n\nmain .overlay:hover ~ .card h4,\nmain .overlay:focus ~ .card h4 {\n  -webkit-transform: translateZ(144px);\n          transform: translateZ(144px);\n}\n\nmain .card > span {\n  font-size: 34px;\n  opacity: 0;\n  -webkit-transform: translateX(-3px);\n          transform: translateX(-3px);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n}\n\nmain .card-container:hover > .card > h4,\nmain .card-container:focus > .card > h4 {\n  -webkit-transform: translateY(-13px);\n          transform: translateY(-13px);\n}\n\nmain .card-container:hover > .card > span,\nmain .card-container:focus > .card > span {\n  opacity: 1;\n  -webkit-transform: translateX(3px);\n          transform: translateX(3px);\n  -webkit-animation: slideRight 300ms ease;\n          animation: slideRight 300ms ease;\n}\n\nfooter {\n  background-color: #c5a880;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nfooter p {\n  margin: 15px auto;\n  color: #23120b;\n}",""]);const h=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);a&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var a,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function o(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},a=[],r=0;r<n.length;r++){var c=n[r],s=e.base?c[0]+e.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var p=o(d),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(m)):i.push({identifier:d,updater:b(m,e),references:1}),a.push(d)}return a}function s(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var o=r(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function m(n,e,t){var a=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var f=null,u=0;function b(n,e){var t,a,r;if(e.singleton){var i=u++;t=f||(f=s(e)),a=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=s(e),a=m.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var r=o(t[a]);i[r].references--}for(var s=c(n,e),l=0;l<t.length;l++){var d=o(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=s}}}},566:(n,e,t)=>{n.exports=t.p+"33daf006e90437cbc74f.ttf"},617:(n,e,t)=>{n.exports=t.p+"99f5316f5b78495f95f3.jpg"},793:(n,e,t)=>{n.exports=t.p+"ab16689731b7b739f9a5.jpg"},243:(n,e,t)=>{n.exports=t.p+"00c763def21dccb1c2e8.png"}},r={};function i(n){if(r[n])return r[n].exports;var e=r[n]={id:n,exports:{}};return a[n](e,e.exports,i),e.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),n=i(379),e=i.n(n),t=i(877),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,function(){const n=document.createElement("div");document.body.prepend(n),n.id="content"}(),function(){const n=document.getElementById("content"),e=document.createElement("nav"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("ul"),i=document.createElement("li"),o=document.createElement("li"),c=document.createElement("li");t.classList.add("logo-area"),i.classList.add("home-button"),o.classList.add("menu-button"),c.classList.add("contact-button"),n.appendChild(e),e.appendChild(t),e.appendChild(a),a.appendChild(r),r.appendChild(i),r.appendChild(o),r.appendChild(c),i.textContent="HOME",o.textContent="MENU",c.textContent="CONTACT"}(),function(){const n=document.getElementById("content"),e=document.createElement("main"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),c=document.createElement("h4");t.classList.add("container"),a.classList.add("col"),r.classList.add("card-container"),i.classList.add("overlay"),o.classList.add("card"),n.appendChild(e),e.appendChild(t),t.appendChild(a),a.appendChild(r),r.appendChild(i),i.appendChild(o),o.appendChild(c),c.textContent="Beef Carpaccio"}(),function(){const n=document.getElementById("content"),e=document.createElement("footer"),t=document.createElement("p");n.appendChild(e),e.appendChild(t),t.textContent="made by @gurbuzertunga"}()})();