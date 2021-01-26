!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.app=t(require("React"),require("ReactDOM")):e.app=t(e.React,e.ReactDOM)}(window,(function(e,t){return function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=0,u=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);u.length;)u.shift()()}var r={},n={2:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({}[e]||e)+".js"}(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}n[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp_name_=window.webpackJsonp_name_||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=i;return o(o.s=47)}([function(t,r){t.exports=e},,,,,function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},,,,function(e,t,r){e.exports=r(40)},,,,,,function(e,t){function r(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,l,"next",e)}function l(e){r(i,o,a,c,l,"throw",e)}c(void 0)}))}}},,,,,,,function(e,t,r){var n=r(41),o=r(42),a=r(43),i=r(45);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){e.exports=function(e){var t,r="";return r+="<!DOCTYPE html>\n<html>\n<head>\n    <title>"+(null==(t=e.overlay.name)?"":t)+'</title>\n    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n    <style>\n    html, body { overflow: hidden; height: 100%; width: 100%; padding: 0; margin: 0; }\n    </style>\n</head>\n<body>\n    <div id="root"></div>\n    <script src="'+(null==(t=e.baseUrl)?"":t)+'react.js" crossorigin><\/script>\n    <script src="'+(null==(t=e.baseUrl)?"":t)+'react-dom.js" crossorigin><\/script>\n    <script src="'+(null==(t=e.baseUrl)?"":t)+'OverlayRenderer.js" crossorigin><\/script>\n    <script type="text/json" id="overlay-definition">'+(null==(t=JSON.stringify(e.overlay))?"":t)+'<\/script>\n    <script>\n        window.addEventListener("load", function() {\n                ReactDOM.render(\n                    React.createElement(OverlayRenderer.default, { overlay: JSON.parse(document.querySelector("#overlay-definition").innerHTML) }),     \n                document.querySelector("#root")\n            );\n        });\n    <\/script>\n</body>\n</html>'}},,,,,,,,,,,,,,,,function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function f(){}function p(){}function d(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(R([])));v&&v!==t&&r.call(v,o)&&(h=v);var y=d.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function R(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=y.constructor=d,d.constructor=p,p.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),g.prototype[a]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new g(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}},function(e,t,r){var n=r(44);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,r){"use strict";r.r(t);var n=r(9),o=r.n(n),a=r(15),i=r.n(a),c=r(22),l=r.n(c),u=r(0),s=r(23),f=r.n(s),p=r(5),d=r.n(p),h=r(24),m=r.n(h),v=Object(u.lazy)((function(){return Promise.all([r.e(3),r.e(4)]).then(r.bind(null,629))})),y=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,625))})),b=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,626))})),g=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,627))})),w=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,628))})),x=new function e(){var t=this;f()(this,e),d()(this,"_baseUrl",void 0),d()(this,"exportOverlay",(function(e,r){var n=t.makeFilename("overlay"),o=m()({overlay:r,baseUrl:e});return t.saveFile(n,"text/html",o)})),d()(this,"htmlToOverlay",(function(e){var t=(new DOMParser).parseFromString(e,"text/html").querySelector("#overlay-definition");if(!t)throw"File did not contain an overlay definition.";return JSON.parse(t.innerHTML)})),d()(this,"makeFilename",(function(e){return e.replace(/[^a-z0-9]/gi,"-")+".html"})),d()(this,"saveFile",(function(e,t,r){if(null!==r&&navigator.msSaveBlob)return navigator.msSaveBlob(new Blob([r],{type:t}),e);var n=document.createElement("a");n.style.display="none";var o=window.URL.createObjectURL(new Blob([r],{type:t}));n.href=o,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(o)}))};function O(e,t,r){return new Promise((function(n,o){var a=new FileReader;a.addEventListener("load",(function(){return n(a.result)})),a.addEventListener("progress",(function(r){return t(e,r.loaded)})),a.addEventListener("error",o),r?a.readAsText(e):a.readAsDataURL(e)}))}t.default=function(e){var t=Object(u.useState)({}),r=l()(t,2),n=r[0],a=r[1],c=Object(u.useRef)(n),s=Object(u.useCallback)(function(){var e=i()(o.a.mark((function e(t,r){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.size>134217728)){e.next=2;break}throw"File sizes greater than 128MB are not supported.";case 2:if("text/html"!=t.type){e.next=15;break}return e.next=5,O(t,r,!0);case 5:return n=e.sent,e.prev=6,i=x.htmlToOverlay(n),setTimeout((function(){a(i)}),50),e.abrupt("return",null);case 12:return e.prev=12,e.t0=e.catch(6),e.abrupt("return","data:text/html;base64,"+btoa(n));case 15:return e.next=17,O(t,r,!1);case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t,r){return e.apply(this,arguments)}}(),[]),f=Object(u.useCallback)(function(){var e=i()(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("text/html"==t.type){e.next=3;break}return alert("Unsupported file type."),e.abrupt("return");case 3:return e.next=5,new Promise((function(e,r){var n=new FileReader;n.readAsText(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return r(e)}}));case 5:r=e.sent;try{n=x.htmlToOverlay(r),c.current=n,a(n)}catch(e){alert("Could not parse file:"+e)}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),p=Object(u.useCallback)((function(e){new Promise((function(e,t){var r=document.createElement("input");r.style="display: none",r.type="file",r.accept="text/html",r.addEventListener("change",(function(){document.body.removeChild(r),r.files.length>0?e(r.files[0]):t()})),document.body.appendChild(r),r.click()})).then(f)}),[]),d=Object(u.useCallback)((function(e){c.current=e}),[]),h=Object(u.useCallback)((function(){x.exportOverlay(window.location.href,c.current)}),[]),m=React.createElement("div",{className:"loading"},React.createElement("div",{className:"inset"},"Loading Editor...",React.createElement("div",{className:"bp3-progress-bar bp3-intent-primary"},React.createElement("div",{className:"bp3-progress-meter",style:{width:"100%"}})))),E=React.createElement("img",{className:"logo",src:"logo.svg",alt:"Open Overlay",title:"Open Overlay"});return React.createElement(React.Fragment,null,React.createElement("div",{className:"top-bar"},React.createElement("div",{className:"left"},React.createElement(u.Suspense,{fallback:E},React.createElement(y,{position:"bottom-left",boundary:"window",usePortal:!1},E,React.createElement("div",{className:"info-box"},React.createElement("div",{className:"title"},"Open Overlay ",React.createElement(w,null,"2.0")),React.createElement("div",{className:"row"},React.createElement("a",{href:"https://github.com/mikesci/open-overlay",className:"btn-github",rel:"noopener",target:"_blank","aria-label":"OpenOverlay Github"},React.createElement("svg",{viewBox:"0 0 16 16",width:"16",height:"16",className:"octicon octicon-mark-github","aria-hidden":"true"},React.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",style:{fill:"currentColor"}})),React.createElement("span",null,"Github"))),React.createElement("div",{className:"row"},React.createElement("a",{href:"https://buymeacoffee.com/mikesci",target:"_blank"},"Buy me a beer!")))),React.createElement(b,{className:"import-export"},React.createElement(g,{small:!0,minimal:!0,icon:"import",text:"Import",onClick:p}),React.createElement(g,{small:!0,minimal:!0,icon:"export",text:"Export",intent:"primary",onClick:h}))))),React.createElement("div",{className:"editor"},React.createElement(u.Suspense,{fallback:m},React.createElement(v,{width:1920,height:1080,overlay:n,onOverlayChanged:d,onUpload:s}))))}},function(e,r){e.exports=t}])}));