!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.OverlayConverter=n():e.OverlayConverter=n()}(window,(function(){return function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=462)}({1:function(e,n){e.exports=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}},221:function(e,n){e.exports=function(e){var n,r="";return r+="<!DOCTYPE html>\n<html>\n<head>\n    <title>"+(null==(n=e.overlay.name)?"":n)+'</title>\n    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n    <style>\n    html, body { overflow: hidden; height: 100%; width: 100%; padding: 0; margin: 0; }\n    </style>\n</head>\n<body>\n    <div id="root"></div>\n    <script src="https://unpkg.com/react@16.13.1/umd/react.production.min.js" crossorigin><\/script>\n    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" crossorigin><\/script>\n    <script src="'+(null==(n=e.rendererModuleUrl)?"":n)+'" crossorigin><\/script>\n    <script id="overlay-definition">\n        window._overlay = '+(null==(n=JSON.stringify(e.overlay))?"":n)+';\n    <\/script>\n    <script>\n        window.addEventListener("load", function() {\n                ReactDOM.render(\n                    React.createElement(OverlayRenderer.default, { overlay: window._overlay }),     \n                document.querySelector("#root")\n            );\n        });\n    <\/script>\n</body>\n</html>'}},462:function(e,n,r){e.exports=r(463)},463:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return u}));var t=r(6),o=r.n(t),i=r(1),l=r.n(i),a=r(221),c=r.n(a),u=function e(n){var r=this;o()(this,e),l()(this,"_rendererModuleUrl",void 0),l()(this,"exportOverlay",(function(e){var n=r.makeFilename(e.name),t=c()({overlay:e,rendererModuleUrl:r._rendererModuleUrl});return r.saveFile(n,"text/html",t)})),l()(this,"overlayToHtml",(function(e){return c()({overlay:e,rendererModuleUrl:r._rendererModuleUrl})})),l()(this,"htmlToOverlay",(function(){})),l()(this,"makeFilename",(function(e){return e.replace(/[^a-z0-9]/gi,"-")+".html"})),l()(this,"saveFile",(function(e,n,r){if(null!==r&&navigator.msSaveBlob)return navigator.msSaveBlob(new Blob([r],{type:n}),e);var t=document.createElement("a");t.style.display="none";var o=window.URL.createObjectURL(new Blob([r],{type:n}));t.href=o,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(o)})),this._rendererModuleUrl=n.rendererModuleUrl}},6:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}}})}));