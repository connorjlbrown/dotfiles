exports.default=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(u,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?u(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.get_exchange_rates=void 0;t.get_exchange_rates=function(){return n(this,void 0,void 0,(function*(){return function(){return n(this,void 0,void 0,(function*(){return fetch("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml").then(e=>e.text()).then(e=>(new window.DOMParser).parseFromString(e,"text/xml")).then(e=>{let t=e.getElementsByTagName("Cube"),r={};for(let e of t)e.attributes&&e.attributes.currency&&(r[e.attributes.currency.value]=parseFloat(e.attributes.rate.value));return{rates:r,base:"EUR"}})}))}()}))}}]).default;