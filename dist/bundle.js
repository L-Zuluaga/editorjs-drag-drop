!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DragDrop=t():e.DragDrop=t()}(self,(function(){return(()=>{var e={424:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,'.ce-block--drop-target .ce-block__content:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: -20px;\n  margin-top: -1px;\n  height: 8px;\n  width: 8px;\n  border: solid #a0a0a0;\n  border-width: 1px 1px 0 0;\n  -webkit-transform-origin: right;\n  transform-origin: right;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.ce-block--drop-target .ce-block__content:after {\n  background: none;\n}',""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},406:(e,t,r)=>{var n=r(424);"string"==typeof n&&(n=[[e.id,n,""]]);r(723)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},723:(e,t,r)=>{var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=s.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,f=[],d=r(947);function p(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(m(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(m(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function v(e,t){var r=c(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function y(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),v(e,t),t}function g(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function m(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;r=l||(l=y(t)),n=x.bind(null,r,a,!1),o=x.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),v(e,t),t}(t),n=O.bind(null,r,t),o=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=y(t),n=B.bind(null,r),o=function(){b(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=h(e,t);return p(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}for(e&&p(h(e,t),t),o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var k,w=(k=[],function(e,t){return k[e]=t,k.filter(Boolean).join("\n")});function x(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function B(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function O(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=d(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},947:e=>{e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(n,{default:()=>t}),r(406);var t=function(){function t(e,r){var n=e.configuration,o=e.blocks,i=e.toolbar,a=e.save;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.toolbar=i,this.borderStyle=r||"1px dashed #aaa",this.api=o,this.holder="string"==typeof n.holder?document.getElementById(n.holder):n.holder,this.readOnly=n.readOnly,this.startBlock=null,this.endBlock=null,this.save=a,this.setDragListener(),this.setDropListener()}var r,n,o;return r=t,o=[{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"setElementCursor",value:function(e){if(e){var t=document.createRange(),r=window.getSelection();t.setStart(e.childNodes[0],0),t.collapse(!0),r.removeAllRanges(),r.addRange(t),e.focus()}}},{key:"setDragListener",value:function(){var e=this;if(!this.readOnly){var t=this.holder.querySelector(".ce-toolbar__settings-btn");t.setAttribute("draggable","true"),t.addEventListener("dragstart",(function(){e.startBlock=e.api.getCurrentBlockIndex()})),t.addEventListener("drag",(function(){if(e.toolbar.close(),!e.isTheOnlyBlock()){var t=e.holder.querySelectorAll(".ce-block"),r=e.holder.querySelector(".ce-block--drop-target");e.setElementCursor(r),e.setBorderBlocks(t,r)}}))}}},{key:"setBorderBlocks",value:function(e,t){var r=this;Object.values(e).forEach((function(n){var o=n.querySelector(".ce-block__content");n!==t?(o.style.removeProperty("border-top"),o.style.removeProperty("border-bottom")):Object.keys(e).find((function(r){return e[r]===t}))>r.startBlock?o.style.borderBottom=r.borderStyle||borderStyle:o.style.borderTop=r.borderStyle}))}},{key:"setDropListener",value:function(){var e=this;document.addEventListener("drop",(function(t){var r=t.target;if(e.holder.contains(r)){var n=e.getDropTarget(r);if(n){var o=n.querySelector(".ce-block__content");o.style.removeProperty("border-top"),o.style.removeProperty("border-bottom"),e.endBlock=e.getTargetPosition(n),e.moveBlocks()}}}))}},{key:"getDropTarget",value:function(e){return e.classList.contains("ce-block")?e:e.closest(".ce-block")}},{key:"getTargetPosition",value:function(e){return Array.from(e.parentNode.children).indexOf(e)}},{key:"isTheOnlyBlock",value:function(){return 1===this.api.getBlocksCount()}},{key:"moveBlocks",value:function(){this.isTheOnlyBlock()||this.api.move(this.endBlock,this.startBlock)}}])&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}()})(),n.default})()}));