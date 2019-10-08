/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 348);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(34);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./open-overlay/src/shared/BuiltinFontSource.js
var _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var BuiltinFontSource = (new (_temp =
/*#__PURE__*/
function () {
  function BuiltinFontSource() {
    _classCallCheck(this, BuiltinFontSource);

    _defineProperty(this, "_BUILTIN_FONTS", ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Georgia", "Impact", "Lucida Sans Unicode", "Lucida Console", "Tahoma", "Trebuchet MS", "Times New Roman", "Verdana"]);
  }

  _createClass(BuiltinFontSource, [{
    key: "GetFontNames",
    value: function GetFontNames() {
      return this._BUILTIN_FONTS;
    }
  }, {
    key: "LoadFont",
    value: function LoadFont(fontName) {
      // we never have to load anything, so never return a promise -- always return null
      return null;
    }
  }]);

  return BuiltinFontSource;
}(), _temp)());
// CONCATENATED MODULE: ./open-overlay/src/shared/FontLoader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontLoader_FontLoader; });
function FontLoader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FontLoader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FontLoader_FontLoader = function FontLoader(fontSources) {
  var _this = this;

  FontLoader_classCallCheck(this, FontLoader);

  FontLoader_defineProperty(this, "_loadedFonts", []);

  FontLoader_defineProperty(this, "_loadPromises", {});

  FontLoader_defineProperty(this, "_fontSources", [BuiltinFontSource]);

  FontLoader_defineProperty(this, "_fontNames", void 0);

  FontLoader_defineProperty(this, "GetFontNames", function () {
    // lazy load font names
    if (!_this._fontNames) {
      // iterate through font sources to pull all available font names and cache for later
      var fontNames = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this._fontSources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fontSource = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = fontSource.GetFontNames()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var fontName = _step2.value;
              fontNames.push(fontName);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this._fontNames = fontNames.sort();
    }

    return _this._fontNames;
  });

  FontLoader_defineProperty(this, "LoadFont", function (name) {
    // ensure this font has not yet been loaded
    if (_this._loadedFonts.includes(name)) {
      return null;
    } // if we have an active promise, return that instead to avoid duplication


    if (_this._loadPromises[name]) {
      return _this._loadPromises[name];
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _this._fontSources[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var fontSource = _step3.value;
        var possiblePromise = fontSource.LoadFont(name);

        if (possiblePromise) {
          _this._loadPromises[name] = possiblePromise;
          possiblePromise.then(function () {
            return _this._loadedFonts.push(name);
          });
          return possiblePromise;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return null;
  });

  if (fontSources && fontSources.length > 0) {
    fontSources.forEach(function (fontSource) {
      return _this._fontSources.push(fontSource);
    });
  }
};



/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["a"] = (new (_temp =
/*#__PURE__*/
function () {
  function ExternalElementHelper() {
    var _this = this;

    _classCallCheck(this, ExternalElementHelper);

    _defineProperty(this, "CreateErrorElement", function (elementName, errorMessage) {
      var _class2, _temp2;

      return _temp2 = _class2 =
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(_class2, _React$Component);

        function _class2() {
          _classCallCheck(this, _class2);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
        }

        _createClass(_class2, [{
          key: "render",
          value: function render() {
            return null;
          }
        }]);

        return _class2;
      }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _defineProperty(_class2, "isExternal", true), _defineProperty(_class2, "manifest", {
        name: elementName,
        author: "",
        description: errorMessage,
        nonVisual: true,
        parameters: []
      }), _temp2;
    });

    _defineProperty(this, "LoadFromLayers", function (layers) {
      return new Promise(function (resolve, reject) {
        var elements = [];
        var loadPromises = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var layer = _step.value;

            if (layer.elementName && layer.elementName.startsWith("http") && !elements[layer.elementName]) {
              // assign the element a temporary object so we don't double-load
              elements[layer.elementName] = {};

              var loadPromise = _this.MakeComponent({
                url: layer.elementName,
                manifest: {}
              }).then(function (component) {
                return {
                  elementName: layer.elementName,
                  component: component
                };
              })["catch"](function (err) {
                return {
                  elementName: layer.elementName,
                  component: _this.CreateErrorElement(layer.elementName, err.toString())
                };
              });

              loadPromises.push(loadPromise);
            }
          };

          for (var _iterator = layers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        Promise.all(loadPromises).then(function (loadedComponents) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = loadedComponents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var loadedComponent = _step2.value;
              elements[loadedComponent.elementName] = loadedComponent.component;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          resolve(elements);
        });
      });
    });
  }

  _createClass(ExternalElementHelper, [{
    key: "SetManifestDefaults",
    value: function SetManifestDefaults(manifest) {
      if (!manifest.name) {
        manifest.name = "(no name)";
      }

      if (!manifest.author) {
        manifest.author = "Unknown";
      }

      if (!manifest.description) {
        manifest.description = "";
      }

      if (!manifest.nonVisual && !manifest.width) {
        manifest.width = 1920;
      }

      if (!manifest.nonVisual && !manifest.height) {
        manifest.width = 1080;
      }

      if (manifest.nonVisual && manifest.width) {
        manifest.width = null;
      }

      if (manifest.nonVisual && manifest.height) {
        manifest.height = null;
      }

      if (!manifest.parameters) {
        manifest.parameters = [];
      }

      return manifest;
    }
  }, {
    key: "LoadFromUrl",
    value: function LoadFromUrl(url) {
      if (this._isModuleUrl(url)) return this.LoadAsModule(url);else return this.LoadAsIframe(url);
    }
  }, {
    key: "LoadAsModule",
    value: function LoadAsModule(url) {
      return this._importFromUrl(url)["catch"](function (err) {
        console.log("fetch prob:" + url + ":" + err);
      }).then(function (moduleObject) {
        console.log(moduleObject);

        if (moduleObject) {
          var component = moduleObject["default"];

          if (!component.manifest) {
            throw "The component specified does not contain a manifest.";
            return;
          }

          return {
            url: url,
            manifest: component.manifest
          };
        }
      });
    }
  }, {
    key: "LoadAsIframe",
    value: function LoadAsIframe(url) {
      return new Promise(function (resolve, reject) {
        var hasCleanedUp = false;
        var iframe = document.createElement("iframe");
        iframe.style["display"] = "none";
        document.body.appendChild(iframe);

        function cleanUp() {
          if (hasCleanedUp) {
            return;
          }

          hasCleanedUp = true;
          window.removeEventListener("message", processIframeMessage);
          document.body.removeChild(iframe);
        }

        function processIframeMessage(evt) {
          if (evt.data && evt.data.manifest) {
            cleanUp();
            resolve({
              url: url,
              manifest: evt.data.manifest
            });
          }
        }

        window.addEventListener("message", processIframeMessage, false); // set a 5 second timeout

        setTimeout(function () {
          cleanUp();
          reject("Installation timed out.");
        }, 5000); // set the iframe src to start

        iframe.src = url;
      });
    }
  }, {
    key: "MakeComponent",
    value: function MakeComponent(externalElement) {
      if (this._isModuleUrl(externalElement.url)) {
        return this._importFromUrl(externalElement.url).then(function (moduleObject) {
          moduleObject["default"].isExternal = true;
          return moduleObject["default"];
        });
      }

      return new Promise(function (resolve, reject) {
        var _class3, _temp3;

        var iframeElementComponent = (_temp3 = _class3 =
        /*#__PURE__*/
        function (_React$Component2) {
          _inherits(iframeElementComponent, _React$Component2);

          function iframeElementComponent(props) {
            var _this2;

            _classCallCheck(this, iframeElementComponent);

            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(iframeElementComponent).call(this, props));

            _defineProperty(_assertThisInitialized(_this2), "_lastSrc", void 0);

            _this2._lastSrc = _this2.buildIframeSrc(props);
            return _this2;
          }

          _createClass(iframeElementComponent, [{
            key: "buildIframeSrc",
            value: function buildIframeSrc(props) {
              var serializedProps = JSON.stringify(props);
              return externalElement.url + "?showMode=1#" + serializedProps;
            }
          }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps, nextState) {
              var nextSrc = this.buildIframeSrc(nextProps);

              if (this._lastSrc == nextSrc) {
                return false;
              }

              this._lastSrc = nextSrc;
              return true;
            }
          }, {
            key: "render",
            value: function render() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }
              }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                src: this._lastSrc,
                style: {
                  width: "100%",
                  height: "100%",
                  border: "0"
                }
              }));
            }
          }]);

          return iframeElementComponent;
        }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _defineProperty(_class3, "isExternal", true), _defineProperty(_class3, "manifest", externalElement.manifest), _temp3);
        resolve(iframeElementComponent);
      });
    }
  }, {
    key: "_isModuleUrl",
    value: function _isModuleUrl(url) {
      return url.endsWith(".js");
    }
  }, {
    key: "_importFromUrl",
    value: function _importFromUrl(url) {
      return fetch(url).then(function (r) {
        return r.text();
      }).then(function (r) {
        return eval(r);
      });
    }
  }]);

  return ExternalElementHelper;
}(), _temp)());

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleFontSource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleFontSource = function GoogleFontSource() {
  var _this = this;

  _classCallCheck(this, GoogleFontSource);

  _defineProperty(this, "_loadedFonts", []);

  _defineProperty(this, "_loadPromises", {});

  _defineProperty(this, "GetFontNames", function () {
    return _this._fontNames;
  });

  _defineProperty(this, "LoadFont", function (name) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css?family=" + encodeURIComponent(name);
      link.addEventListener("load", resolve);
      link.addEventListener("abort", reject);
      link.addEventListener("error", reject);
      document.head.appendChild(link);
    });
  });

  _defineProperty(this, "_fontNames", ["ABeeZee", "Abel", "Abhaya Libre", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Aleo", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiko", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo", "Archivo Black", "Archivo Narrow", "Aref Ruqaa", "Arima Madurai", "Arimo", "Arizonia", "Armata", "Arsenal", "Artifika", "Arvo", "Arya", "Asap", "Asap Condensed", "Asar", "Asset", "Assistant", "Astloch", "Asul", "Athiti", "Atma", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "B612", "B612 Mono", "Bad Script", "Bahiana", "Bahianita", "Bai Jamjuree", "Baloo", "Baloo Bhai", "Baloo Bhaijaan", "Baloo Bhaina", "Baloo Chettan", "Baloo Da", "Baloo Paaji", "Baloo Tamma", "Baloo Tammudu", "Baloo Thambi", "Balthazar", "Bangers", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Barriecito", "Barrio", "Basic", "Battambang", "Baumans", "Bayon", "Belgrano", "Bellefair", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Beth Ellen", "Bevan", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "BioRhyme", "BioRhyme Expanded", "Biryani", "Bitter", "Black And White Picture", "Black Han Sans", "Black Ops One", "Blinker", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Bungee", "Bungee Hairline", "Bungee Inline", "Bungee Outline", "Bungee Shade", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Cairo", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Chakra Petch", "Changa", "Changa One", "Chango", "Charm", "Charmonman", "Chathura", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Coiny", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Cormorant", "Cormorant Garamond", "Cormorant Infant", "Cormorant SC", "Cormorant Unicase", "Cormorant Upright", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Pro", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cute Font", "Cutive", "Cutive Mono", "DM Sans", "DM Serif Display", "DM Serif Text", "Damion", "Dancing Script", "Dangrek", "Darker Grotesque", "David Libre", "Dawning of a New Day", "Days One", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diplomata", "Diplomata SC", "Do Hyeon", "Dokdo", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Duru Sans", "Dynalight", "EB Garamond", "Eagle Lake", "East Sea Dokdo", "Eater", "Economica", "Eczar", "El Messiri", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Encode Sans", "Encode Sans Condensed", "Encode Sans Expanded", "Encode Sans Semi Condensed", "Encode Sans Semi Expanded", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fahkwang", "Fanwood Text", "Farro", "Farsan", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Faustina", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Code", "Fira Mono", "Fira Sans", "Fira Sans Condensed", "Fira Sans Extra Condensed", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Frank Ruhl Libre", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "GFS Didot", "GFS Neohellenic", "Gabriela", "Gaegu", "Gafata", "Galada", "Galdeano", "Galindo", "Gamja Flower", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Gothic A1", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Grenze", "Griffy", "Gruppo", "Gudea", "Gugi", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "Hanuman", "Happy Monkey", "Harmattan", "Headland One", "Heebo", "Henny Penny", "Hepta Slab", "Herr Von Muellerhoff", "Hi Melody", "Hind", "Hind Guntur", "Hind Madurai", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IBM Plex Mono", "IBM Plex Sans", "IBM Plex Sans Condensed", "IBM Plex Serif", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Jomhuria", "Josefin Sans", "Josefin Slab", "Joti One", "Jua", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "K2D", "Kadwa", "Kalam", "Kameron", "Kanit", "Kantumruy", "Karla", "Karma", "Katibeh", "Kaushan Script", "Kavivanar", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kirang Haerang", "Kite One", "Knewave", "KoHo", "Kodchasan", "Kosugi", "Kosugi Maru", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Krub", "Kumar One", "Kumar One Outline", "Kurale", "La Belle Aurore", "Lacquer", "Laila", "Lakki Reddy", "Lalezar", "Lancelot", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Lemonada", "Lexend Deca", "Lexend Exa", "Lexend Giga", "Lexend Mega", "Lexend Peta", "Lexend Tera", "Lexend Zetta", "Libre Barcode 128", "Libre Barcode 128 Text", "Libre Barcode 39", "Libre Barcode 39 Extended", "Libre Barcode 39 Extended Text", "Libre Barcode 39 Text", "Libre Baskerville", "Libre Caslon Display", "Libre Caslon Text", "Libre Franklin", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Literata", "Liu Jian Mao Cao", "Livvic", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Long Cang", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "M PLUS 1p", "M PLUS Rounded 1c", "Ma Shan Zheng", "Macondo", "Macondo Swash Caps", "Mada", "Magra", "Maiden Orange", "Maitree", "Major Mono Display", "Mako", "Mali", "Mallanna", "Mandali", "Manuale", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Markazi Text", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Meera Inimai", "Megrim", "Meie Script", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Mina", "Miniver", "Miriam Libre", "Mirza", "Miss Fajardose", "Mitr", "Modak", "Modern Antiqua", "Mogra", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Mukta", "Mukta Mahee", "Mukta Malar", "Mukta Vaani", "Muli", "Mystery Quest", "NTR", "Nanum Brush Script", "Nanum Gothic", "Nanum Gothic Coding", "Nanum Myeongjo", "Nanum Pen Script", "Neucha", "Neuton", "New Rocker", "News Cycle", "Niconne", "Niramit", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Notable", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Sans HK", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Serif", "Noto Serif JP", "Noto Serif KR", "Noto Serif SC", "Noto Serif TC", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Nunito Sans", "Odor Mean Chey", "Offside", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Overpass", "Overpass Mono", "Ovo", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Padauk", "Palanquin", "Palanquin Dark", "Pangolin", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Pattaya", "Patua One", "Pavanam", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "Poiret One", "Poller One", "Poly", "Pompiere", "Pontano Sans", "Poor Story", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Pragati Narrow", "Prata", "Preahvihear", "Press Start 2P", "Pridi", "Princess Sofia", "Prociono", "Prompt", "Prosto One", "Proza Libre", "Puritan", "Purple Purse", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Rakkas", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rasa", "Rationale", "Ravi Prakash", "Red Hat Display", "Red Hat Text", "Redressed", "Reem Kufi", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rozha One", "Rubik", "Rubik Mono One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Saira", "Saira Condensed", "Saira Extra Condensed", "Saira Semi Condensed", "Saira Stencil One", "Salsa", "Sanchez", "Sancreek", "Sansita", "Sarabun", "Sarala", "Sarina", "Sarpanch", "Satisfy", "Sawarabi Gothic", "Sawarabi Mincho", "Scada", "Scheherazade", "Schoolbell", "Scope One", "Seaweed Script", "Secular One", "Sedgwick Ave", "Sedgwick Ave Display", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Shrikhand", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Single Day", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Song Myung", "Sonsie One", "Sorts Mill Goudy", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Space Mono", "Special Elite", "Spectral", "Spectral SC", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Sriracha", "Srisakdi", "Staatliches", "Stalemate", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Stylish", "Sue Ellen Francisco", "Suez One", "Sumana", "Sunflower", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tajawal", "Tangerine", "Taprom", "Tauri", "Taviraj", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "Thasadith", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trirong", "Trocchi", "Trochut", "Trykker", "Tulpen One", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "VT323", "Vampiro One", "Varela", "Varela Round", "Vast Shadow", "Vesper Libre", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Vollkorn SC", "Voltaire", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yanone Kaffeesatz", "Yantramanav", "Yatra One", "Yellowtail", "Yeon Sung", "Yeseva One", "Yesteryear", "Yrsa", "ZCOOL KuaiLe", "ZCOOL QingKe HuangYou", "ZCOOL XiaoWei", "Zeyada", "Zhi Mang Xing", "Zilla Slab", "Zilla Slab Highlight"]);
};



/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RectangleElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RectangleElement, _React$Component);

  function RectangleElement() {
    _classCallCheck(this, RectangleElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(RectangleElement).apply(this, arguments));
  }

  _createClass(RectangleElement, [{
    key: "render",
    value: function render() {
      var style = Object.assign({}, this.props.style, {
        height: "100%",
        width: "100%"
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style
      });
    }
  }]);

  return RectangleElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(RectangleElement, "manifest", {
  name: "Rectangle",
  author: "SCI",
  description: "A customizable rectangle.",
  width: 400,
  height: 400,
  preserveAspect: false,
  parameters: [{
    "name": "style",
    "type": "style",
    "displayName": "Style",
    "grouped": "checkbox",
    "defaultValue": {
      "backgroundColor": "#8247cf",
      "borderRadius": "20px"
    }
  }]
});

var KnockoutElement =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(KnockoutElement, _React$Component2);

  function KnockoutElement() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, KnockoutElement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(KnockoutElement)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_knockoutId", void 0);

    _defineProperty(_assertThisInitialized(_this), "_lastRect", void 0);

    return _this;
  }

  _createClass(KnockoutElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._knockoutId = this.props.onRegisterKnockout();
      this.props.onUpdateKnockout(this._knockoutId, this.buildPathString(this.props.layer, this.props.radius));
      this._lastRect = {
        top: this.props.layer.top,
        left: this.props.layer.left,
        width: this.props.layer.width,
        height: this.props.layer.height,
        radius: this.props.radius
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var needsUpdate = false;

      if (nextProps.layer.top != this._lastRect.top) {
        needsUpdate = true;
        this._lastRect.top = nextProps.layer.top;
      }

      if (nextProps.layer.left != this._lastRect.left) {
        needsUpdate = true;
        this._lastRect.left = nextProps.layer.left;
      }

      if (nextProps.layer.width != this._lastRect.width) {
        needsUpdate = true;
        this._lastRect.width = nextProps.layer.width;
      }

      if (nextProps.layer.height != this._lastRect.height) {
        needsUpdate = true;
        this._lastRect.height = nextProps.layer.height;
      }

      if (nextProps.radius != this._lastRect.radius) {
        needsUpdate = true;
        this._lastRect.radius = nextProps.radius;
      }

      if (needsUpdate) {
        this.props.onUpdateKnockout(this._knockoutId, this.buildPathString(nextProps.layer, nextProps.radius));
      } // we'll never need to render anything


      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onRemoveKnockout(this._knockoutId);
    }
  }, {
    key: "buildPathString",
    value: function buildPathString(layer, radius) {
      var intRadius;

      if (radius != null && radius.length > 0) {
        intRadius = parseInt(radius);
      }

      if (intRadius && !isNaN(intRadius)) {
        // clamp to max out at half width/height
        intRadius = Math.min(Math.min(intRadius, layer.height / 2), layer.width / 2);
        return "M".concat(layer.left, " ").concat(layer.top + intRadius, " L").concat(layer.left, " ").concat(layer.top + layer.height - intRadius, " A").concat(intRadius, " ").concat(intRadius, " 90 0 0 ").concat(layer.left + intRadius, " ").concat(layer.top + layer.height, " L").concat(layer.left + layer.width - intRadius, " ").concat(layer.top + layer.height, " A").concat(intRadius, " ").concat(intRadius, " 90 0 0 ").concat(layer.left + layer.width, " ").concat(layer.top + layer.height - intRadius, " L").concat(layer.left + layer.width, " ").concat(layer.top + intRadius, " A").concat(intRadius, " ").concat(intRadius, " 90 0 0 ").concat(layer.left + layer.width - intRadius, " ").concat(layer.top, " L").concat(layer.left + intRadius, " ").concat(layer.top, " A").concat(intRadius, " ").concat(intRadius, " 90 0 0 ").concat(layer.left, " ").concat(layer.top + intRadius);
      } else {
        return "M".concat(layer.left, " ").concat(layer.top, " L").concat(layer.left, " ").concat(layer.top + layer.height, " L").concat(layer.left + layer.width, " ").concat(layer.top + layer.height, " L").concat(layer.left + layer.width, " ").concat(layer.top, " L").concat(layer.left, " ").concat(layer.top);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return KnockoutElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(KnockoutElement, "manifest", {
  name: "Knockout",
  author: "SCI",
  description: "A customizable knockout area.",
  width: 400,
  height: 400,
  preserveAspect: false,
  parameters: [{
    "name": "radius",
    "displayName": "Corner Radius",
    "type": "text"
  }]
});

var TextElement =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TextElement, _React$Component3);

  function TextElement(props) {
    _classCallCheck(this, TextElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextElement).call(this, props));
  }

  _createClass(TextElement, [{
    key: "render",
    value: function render() {
      var style = Object.assign({}, this.props.font, {
        height: "100%",
        width: "100%",
        overflow: "hidden",
        lineHeight: "normal"
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style
      }, this.props.text);
    }
  }]);

  return TextElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(TextElement, "manifest", {
  name: "Text",
  author: "SCI",
  description: "A customizable text element.",
  width: 400,
  height: 400,
  preserveAspect: false,
  parameters: [{
    "name": "text",
    "displayName": "Text",
    "type": "text",
    "defaultValue": "text"
  }, {
    "name": "font",
    "displayName": "Font",
    "type": "font",
    "defaultValue": {
      "fontSize": "144pt",
      "color": "rgba(255,255,255,1)"
    }
  }]
});

var EllipseElement =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(EllipseElement, _React$Component4);

  function EllipseElement() {
    _classCallCheck(this, EllipseElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(EllipseElement).apply(this, arguments));
  }

  _createClass(EllipseElement, [{
    key: "render",
    value: function render() {
      var style = Object.assign({}, this.props.style);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: {
          height: "100%",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
        cx: "50%",
        cy: "50%",
        rx: "50%",
        ry: "50%",
        fill: this.props.fill
      }));
    }
  }]);

  return EllipseElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(EllipseElement, "manifest", {
  name: "Ellipse",
  author: "SCI",
  description: "A customizable ellipse or circle.",
  width: 400,
  height: 400,
  preserveAspect: false,
  parameters: [{
    "name": "fill",
    "type": "color",
    "displayName": "Fill Color",
    "defaultValue": "#FF0000"
  }]
});

var ImageElement =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(ImageElement, _React$Component5);

  function ImageElement(props) {
    var _this2;

    _classCallCheck(this, ImageElement);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ImageElement).call(this, props));
    _this2.state = {
      preloaded: false
    };
    return _this2;
  }

  _createClass(ImageElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      new Promise(function (resolve, reject) {
        var img = new Image();
        img.addEventListener("load", resolve);
        img.addEventListener("error", resolve);
        img.addEventListener("abort", resolve);
        img.src = _this3.props.url;
      }).then(function () {
        _this3.setState({
          preloaded: true
        });
      })["catch"](function (err) {
        _this3.setState({
          preloaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.preloaded) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.url,
        style: Object.assign({}, this.props.style, {
          "height": "100%",
          "width": "100%",
          "objectFit": this.props.fit,
          "objectPosition": this.props.offset
        })
      });
    }
  }]);

  return ImageElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ImageElement, "manifest", {
  name: "Image",
  author: "SCI",
  description: "A customizable image.",
  width: 400,
  height: 400,
  preserveAspect: false,
  parameters: [{
    "name": "url",
    "displayName": "Url",
    "type": "text"
  }, {
    "name": "fit",
    "displayName": "Fit",
    "type": "select",
    "defaultValue": "cover",
    "options": [{
      label: "Contain",
      value: "contain"
    }, {
      label: "Cover",
      value: "cover"
    }, {
      label: "Fill",
      value: "fill"
    }]
  }, {
    "name": "offset",
    "displayName": "Offset",
    "type": "text"
  }, {
    "name": "style",
    "type": "style",
    "displayName": "Style"
  }]
});

var VideoElement =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(VideoElement, _React$Component6);

  function VideoElement(props) {
    var _this4;

    _classCallCheck(this, VideoElement);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(VideoElement).call(this, props));

    _defineProperty(_assertThisInitialized(_this4), "onLoadedData", function (evt) {
      _this4.setState({
        preloaded: true
      });

      if (_this4.props.playing) {
        _this4.refs.vid.play()["catch"](function (err) {
          // videos can fail to play if the user doesn't interact with the document.
          // not a big deal, but we'll log to the console
          console.log(err.message);
        });
      }
    });

    _this4.state = {
      preloaded: false
    };
    return _this4;
  }

  _createClass(VideoElement, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.playing != nextProps.playing) {
        if (nextProps.playing) this.refs.vid.play();else this.refs.vid.pause();
      }

      if (this.props.url != nextProps.url) {
        this.refs.vid.load();
      }

      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.refs.vid.volume = (this.props.volume != null ? this.props.volume : 100) / 100;
    }
  }, {
    key: "render",
    value: function render() {
      var style = Object.assign({}, this.props.style, {
        "height": "100%",
        "width": "100%",
        "objectFit": this.props.fit,
        "objectPosition": this.props.offset,
        "opacity": this.state.preloaded ? 1 : 0
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        ref: "vid",
        onLoadedData: this.onLoadedData,
        loop: this.props.loop,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: this.props.url
      }));
    }
  }]);

  return VideoElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VideoElement, "manifest", {
  name: "Video",
  author: "SCI",
  description: "A customizable video player.",
  width: 1280,
  height: 720,
  preserveAspect: true,
  parameters: [{
    "name": "url",
    "displayName": "Url",
    "type": "text"
  }, {
    "name": "playing",
    "type": "checkbox",
    "displayName": "Playing",
    "defaultValue": true
  }, {
    "name": "loop",
    "type": "checkbox",
    "displayName": "Loop",
    "defaultValue": false
  }, {
    "name": "volume",
    "type": "slider",
    "displayName": "Volume",
    "defaultValue": 100
  }, {
    "name": "fit",
    "displayName": "Fit",
    "type": "select",
    "defaultValue": "cover",
    "options": [{
      label: "Contain",
      value: "contain"
    }, {
      label: "Cover",
      value: "cover"
    }, {
      label: "Fill",
      value: "fill"
    }]
  }, {
    "name": "offset",
    "displayName": "Offset",
    "type": "text"
  }, {
    "name": "style",
    "type": "style",
    "displayName": "Style"
  }]
});

var AudioElement =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(AudioElement, _React$Component7);

  function AudioElement(props) {
    var _this5;

    _classCallCheck(this, AudioElement);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(AudioElement).call(this, props));

    _defineProperty(_assertThisInitialized(_this5), "onLoadedData", function (evt) {
      _this5.setState({
        preloaded: true
      });

      if (_this5.props.playing) {
        _this5.refs.audio.play()["catch"](function (err) {
          // videos can fail to play if the user doesn't interact with the document.
          // not a big deal, but we'll log to the console
          console.log(err.message);
        });
      }
    });

    _this5.state = {
      preloaded: false
    };
    return _this5;
  }

  _createClass(AudioElement, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.playing != nextProps.playing) {
        if (nextProps.playing) this.refs.audio.play();else this.refs.audio.pause();
      }

      if (this.props.url != nextProps.url) {
        this.refs.audio.load();
      }

      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.refs.audio.volume = (this.props.volume != null ? this.props.volume : 100) / 100;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        ref: "audio",
        onLoadedData: this.onLoadedData,
        loop: this.props.loop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: this.props.url
      }));
    }
  }]);

  return AudioElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(AudioElement, "manifest", {
  name: "Audio",
  author: "SCI",
  description: "A customizable audio player.",
  nonVisual: true,
  parameters: [{
    "name": "url",
    "displayName": "Url",
    "type": "text"
  }, {
    "name": "playing",
    "type": "checkbox",
    "displayName": "Playing",
    "defaultValue": true
  }, {
    "name": "loop",
    "type": "checkbox",
    "displayName": "Loop",
    "defaultValue": false
  }, {
    "name": "volume",
    "type": "slider",
    "displayName": "Volume",
    "defaultValue": 100
  }]
});

var IFrameElement =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(IFrameElement, _React$Component8);

  function IFrameElement() {
    _classCallCheck(this, IFrameElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(IFrameElement).apply(this, arguments));
  }

  _createClass(IFrameElement, [{
    key: "render",
    value: function render() {
      var style = Object.assign({}, this.props.style, {
        "border": "0",
        height: "100%",
        width: "100%"
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: this.props.url,
        style: style
      });
    }
  }]);

  return IFrameElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(IFrameElement, "manifest", {
  name: "Iframe",
  author: "SCI",
  description: "A customizable iframe.",
  width: 400,
  height: 400,
  preserveAspect: false,
  parameters: [{
    "name": "url",
    "type": "text",
    "displayName": "Url"
  }, {
    "name": "style",
    "type": "style",
    "displayName": "Style"
  }]
});

var YoutubeElement =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(YoutubeElement, _React$Component9);

  function YoutubeElement(_props) {
    var _this6;

    _classCallCheck(this, YoutubeElement);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(YoutubeElement).call(this, _props));

    _defineProperty(_assertThisInitialized(_this6), "_queuedOperations", {
      playing: []
    });

    _defineProperty(_assertThisInitialized(_this6), "onStateChange", function (evt) {
      var playerState = evt.data;

      if (playerState == 1) {
        // playing, paused, buffering respectively
        while (_this6._queuedOperations.playing.length > 0) {
          _this6._queuedOperations.playing.splice(0, 1)[0]();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this6), "updatePlayerState", function (lastProps, nextProps) {
      if (nextProps.url != lastProps.url) {
        var url = _this6.getYoutubeUrl(nextProps);

        _this6._player.loadVideoByUrl(url);

        _this6._queuedOperations.playing.push(function () {
          _this6._player.seekTo(0);
        });
      }

      if (nextProps.url != lastProps.url || nextProps.start != lastProps.start) {
        var playerState = _this6._player.getPlayerState();

        if (playerState == 1 || playerState == -1) {
          // playing or paused, respectively
          _this6._player.seekTo(nextProps.start);
        } else {
          _this6._queuedOperations.playing.push(function () {
            _this6._player.seekTo(nextProps.start);
          });
        }
      }

      if (nextProps.playing != lastProps.playing) {
        if (nextProps.playing) _this6._player.playVideo();else _this6._player.pauseVideo();
      }

      if (nextProps.volume != lastProps.volume) {
        _this6._player.setVolume(nextProps.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this6), "getYoutubeUrl", function (props) {
      if (!props.url) {
        return "";
      }

      var match = props.url.match(YoutubeElement.URL_REGEX);

      if (match == null || match.length < 2 || match[1].length == 0) {
        return "";
      }

      var videoId = match[1];
      return "http://www.youtube.com/v/".concat(videoId, "?version=3");
    });

    if (!window.onYouTubeIframeAPIReadyPromise) {
      window.onYouTubeIframeAPIReadyPromise = new Promise(function (resolve) {
        if (window.YT) {
          resolve();
          return;
        }

        var $script = document.createElement("script");
        $script.type = "text/javascript";
        $script.src = "https://www.youtube.com/iframe_api";
        document.head.append($script);
        window.onYouTubeIframeAPIReady = resolve;
      });
    }

    return _this6;
  }

  _createClass(YoutubeElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this7 = this;

      var self = this;
      window.onYouTubeIframeAPIReadyPromise.then(function () {
        var player = new YT.Player(_this7.refs.target, {
          width: "100%",
          height: "100%",
          playerVars: {
            'controls': 0,
            'modestbranding': 1
          },
          events: {
            onReady: function onReady(evt) {
              self.updatePlayerState({}, self.props);
            },
            onStateChange: self.onStateChange
          }
        });
        _this7._player = player;
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      this.updatePlayerState(this.props, nextProps);
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var style = Object.assign({}, this.props.style, {
        overflow: "hidden",
        height: "100%",
        width: "100%",
        display: this.props.url != null && this.props.url.length > 0 ? "block" : "none"
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: "target"
      })));
    }
  }]);

  return YoutubeElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(YoutubeElement, "manifest", {
  name: "Youtube",
  author: "SCI",
  description: "A customizable YouTube player.",
  width: 1280,
  height: 720,
  preserveAspect: true,
  parameters: [{
    "name": "url",
    "type": "text",
    "displayName": "Url"
  }, {
    "name": "playing",
    "type": "checkbox",
    "displayName": "Playing",
    "defaultValue": true
  }, {
    "name": "start",
    "type": "text",
    "displayName": "Start At (s)"
  }, {
    "name": "volume",
    "type": "slider",
    "displayName": "Volume",
    "defaultValue": 100
  }, {
    "name": "style",
    "type": "style",
    "displayName": "Style"
  }]
});

_defineProperty(YoutubeElement, "URL_REGEX", /.*(?:www\.youtube\.com\/(?:(?:watch\?v=)|(?:embed\/))|(?:youtu\.be\/))([a-z0-9]+)(?:\?(?:(?:t)|(?:start))=(\d+))?/i);

/* harmony default export */ __webpack_exports__["a"] = ({
  Builtin: {
    "rectangle": RectangleElement,
    "text": TextElement,
    "ellipse": EllipseElement,
    "image": ImageElement,
    "video": VideoElement,
    "audio": AudioElement,
    "knockout": KnockoutElement,
    "iframe": IFrameElement,
    "youtube": YoutubeElement
  }
});

/***/ }),

/***/ 34:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExternalElementHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _GoogleFontSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _open_overlay_src_components_LayerRenderer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _open_overlay_src_shared_FontLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _Elements_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
var _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








window.OverlayRenderer = new (_temp =
/*#__PURE__*/
function () {
  function _temp() {
    _classCallCheck(this, _temp);

    _defineProperty(this, "_lastOptions", void 0);

    _defineProperty(this, "_appElement", void 0);

    _defineProperty(this, "_elementCache", void 0);
  }

  _createClass(_temp, [{
    key: "mount",
    value: function mount(options) {
      var _this = this;

      // save options to _lastOptions to allow for mount() to be called later without a parameter
      if (!options) {
        if (!this._lastOptions) {
          console.log("No options provided.");
          return;
        }

        options = this._lastOptions;
      } else {
        this._lastOptions = options;
      } // inject a root element


      if (!this._appElement) {
        options.target["style"];
        this._appElement = document.createElement("div");
        this._appElement.id = "app";
        options.target.appendChild(this._appElement);
      }

      var fontLoader = new _open_overlay_src_shared_FontLoader_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]([new _GoogleFontSource_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]()]);
      _ExternalElementHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LoadFromLayers(options.layers).then(function (loadedElements) {
        var elements = Object.assign(_Elements_jsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Builtin, loadedElements);
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_open_overlay_src_components_LayerRenderer_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          layers: options.layers,
          elements: elements,
          fontLoader: fontLoader
        }), _this._appElement);
      });
    }
  }]);

  return _temp;
}(), _temp)();

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_FontLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _LayerRenderer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _LayerRenderer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LayerRenderer_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var LayerRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayerRenderer, _React$Component);

  function LayerRenderer(props) {
    var _this;

    _classCallCheck(this, LayerRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayerRenderer).call(this, props)); // props.layers
    // props.elements
    // props.fontLoader

    _defineProperty(_assertThisInitialized(_this), "_knockoutIdCounter", 0);

    _defineProperty(_assertThisInitialized(_this), "onRegisterKnockout", function () {
      var id = _this._knockoutIdCounter++;

      _this.setState(function (prevState) {
        var knockouts = Object.assign({}, prevState.knockouts);
        knockouts[id] = "";
        return {
          knockouts: knockouts
        };
      });

      return id;
    });

    _defineProperty(_assertThisInitialized(_this), "onUpdateKnockout", function (id, pathString) {
      _this.setState(function (prevState) {
        var knockouts = Object.assign({}, prevState.knockouts);
        knockouts[id] = pathString;
        return {
          knockouts: knockouts
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRemoveKnockout", function (id) {
      _this.setState(function (prevState) {
        var knockouts = Object.assign({}, prevState.knockouts);
        delete knockouts[id];
        return {
          knockouts: knockouts
        };
      });
    });

    _this.state = {
      knockouts: {}
    };
    return _this;
  }

  _createClass(LayerRenderer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var svg = null;
      var style = null;
      var knockouts = Object.values(this.state.knockouts);

      if (knockouts.length > 0) {
        style = {
          "clipPath": "url(#knockoutClippath)"
        };
        svg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          style: {
            position: "absolute",
            top: "-99999px"
          },
          viewBox: "0 0 1920 1080",
          xmlns: "http://www.w3.org/2000/svg"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
          id: "knockoutClippath"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          ref: "knockoutPath",
          d: "M-10000 -10000 L10000 -10000 L10000 10000 L-10000 10000 L-10000 -10000 " + knockouts.join(" ") + "Z"
        }))));
      }

      var renderedLayers = this.props.layers.map(function (layer, index) {
        if (layer.hidden) {
          return null;
        } // don't render anything if the layer is hidden


        var Element = _this2.props.elements[layer.elementName];

        if (!Element) {
          return null;
        } // don't render anything if we don't recognize the element
        // check for fonts that need to be loaded


        var isLoading = false;

        if (_this2.props.fontLoader) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Element.manifest.parameters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var parameter = _step.value;

              if (parameter.type == "font") {
                var font = layer.config[parameter.name];

                if (font && font.fontFamily) {
                  var fontPromise = _this2.props.fontLoader.LoadFont(font.fontFamily);

                  if (fontPromise) {
                    isLoading = true; // when the font is loaded, re-render

                    fontPromise.then(function () {
                      _this2.forceUpdate();
                    });
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        var style = {
          top: layer.top + "px",
          left: layer.left + "px",
          height: layer.height + "px",
          width: layer.width + "px",
          zIndex: 10000 - index,
          visibility: isLoading ? "hidden" : "visible"
        };

        if (layer.rotation) {
          style.transform = "rotate(".concat(layer.rotation, "deg)");
        }

        ;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "layer-container",
          key: layer.id,
          "data-id": layer.id,
          style: style
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
          key: layer.id
        }, layer.config, {
          layer: layer,
          onRegisterKnockout: _this2.onRegisterKnockout,
          onUpdateKnockout: _this2.onUpdateKnockout,
          onRemoveKnockout: _this2.onRemoveKnockout
        })));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "knockout-wrapper",
        ref: "knockoutWrapper",
        style: style
      }, svg, renderedLayers);
    }
  }]);

  return LayerRenderer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(73);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ".layer-container { position: absolute; }", ""]);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });