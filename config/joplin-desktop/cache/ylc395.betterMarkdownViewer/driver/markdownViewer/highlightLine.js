!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i="better-markdown-viewer-highlight-line",u=document.createElement("style");function l(){const e=document.querySelectorAll("."+i);for(const t of e)t.classList.remove(i)}document.head.appendChild(u);let c=null,a=null;setInterval((function(){return r(this,void 0,void 0,(function*(){const{line:e,lineStyle:t}=yield webviewApi.postMessage(o.MARKDOWN_SCRIPT_ID,{event:"queryCursorLine"});var n;if(t!==a&&(a=t,n=t,u.textContent=n.replaceAll("&","."+i)),!e)return;const r=function(e){for(let t=e;t>=1;t--){const e=document.querySelector(`[data-source-line="${t}"]`);if(e)return"CODE"===e.tagName&&e.parentElement&&"PRE"===e.parentElement.tagName?{el:e.parentElement,line:t}:{el:e,line:t}}return null}(e);r?r.line!==c&&(l(),c=r.line,r.el.classList.add(i)):l()}))}),300)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CODE_MIRROR_SCRIPT_ID=t.MARKDOWN_SCRIPT_ID=void 0,t.MARKDOWN_SCRIPT_ID="contentScriptMarkdownIt",t.CODE_MIRROR_SCRIPT_ID="contentScriptCodeMirror"}]);