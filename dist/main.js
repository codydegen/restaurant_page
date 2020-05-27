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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/my-font.woff2 */ \"./src/assets/my-font.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./assets/my-font.woff */ \"./src/assets/my-font.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./assets/icon.png */ \"./src/assets/icon.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./assets/background-img.svg */ \"./src/assets/background-img.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  font: inherit;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n  display: block;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n  list-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n  quotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n  content: '';\\r\\n  content: none;\\r\\n}\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\\r\\n/* Custom CSS */\\r\\n\\r\\n@font-face {\\r\\n  font-family: 'MyFont';\\r\\n  src:  url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\r\\n        url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n#content {\\r\\n  font-family: 'MyFont';\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: lightblue;\\r\\n}\\r\\n\\r\\n#header-picture {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  padding-right: 2em;\\r\\n  width: 5em;\\r\\n}\\r\\n\\r\\n#header-list {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n#header-list > li {\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n#main-body {\\r\\n  height: 60em;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n  /* filter: blur(8px); */\\r\\n  /* -webkit-filter: blur(8px); */\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n#restaurant-tag {\\r\\n  font-size: 1.4em;\\r\\n  text-align: center;\\r\\n  margin: 1.2em auto;\\r\\n}\\r\\n\\r\\n#body-about-us {\\r\\n  font-size: 0.8em;\\r\\n  margin: 1em auto;\\r\\n  line-height: 1.5;\\r\\n  max-width: 50em;\\r\\n}\\r\\n\\r\\n#button-container {\\r\\n  display: flex;\\r\\n  width: auto;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#button-container > button {\\r\\n  padding: 1em;\\r\\n  margin: 0 1em 0;\\r\\n}\\r\\n\\r\\n#food-container {\\r\\n  padding: 1em;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.food-card {\\r\\n  border: 0.1em solid black;\\r\\n  border-radius: 0.5em;\\r\\n  max-width: 25em;\\r\\n  margin: 2em;\\r\\n}\\r\\n\\r\\n#contact-us-container {\\r\\n  padding: 1em;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.contact-card {\\r\\n  border: 0.1em solid black;\\r\\n  border-radius: 0.5em;\\r\\n  max-width: 25em;\\r\\n  margin: 2em;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  background-color: red;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/background-img.svg":
/*!***************************************!*\
  !*** ./src/assets/background-img.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"13d3802866f2fff3800651cc48ab8d1c.svg\");\n\n//# sourceURL=webpack:///./src/assets/background-img.svg?");

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"465b7b708053e0ef8201785481d82e42.png\");\n\n//# sourceURL=webpack:///./src/assets/icon.png?");

/***/ }),

/***/ "./src/assets/my-font.woff":
/*!*********************************!*\
  !*** ./src/assets/my-font.woff ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7d99f422a46fdaaa5822c3dcec96f425.woff\");\n\n//# sourceURL=webpack:///./src/assets/my-font.woff?");

/***/ }),

/***/ "./src/assets/my-font.woff2":
/*!**********************************!*\
  !*** ./src/assets/my-font.woff2 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"582a77b57e34590994c967b93c377190.woff2\");\n\n//# sourceURL=webpack:///./src/assets/my-font.woff2?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_page_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page-layout.js */ \"./src/modules/page-layout.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n_modules_page_layout_js__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].createDocument();\r\n_modules_home_js__WEBPACK_IMPORTED_MODULE_2__[\"Home\"].render();\r\n\r\nconst homeButton = document.getElementById('header-list-home');\r\nhomeButton.addEventListener('click', () => {\r\n  _modules_page_layout_js__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].clearBody();\r\n  _modules_home_js__WEBPACK_IMPORTED_MODULE_2__[\"Home\"].render();\r\n});\r\n\r\nconst menuButton = document.getElementById('header-list-menu');\r\nmenuButton.addEventListener('click', () => {\r\n  _modules_page_layout_js__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].clearBody();\r\n  _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].render();\r\n})\r\n\r\nconst contactButton = document.getElementById('header-list-contact');\r\ncontactButton.addEventListener('click', () => {\r\n  _modules_page_layout_js__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].clearBody();\r\n  _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"Contact\"].render();\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contact\", function() { return Contact; });\nconst Contact = (() => {\r\n  const render = () => {\r\n    const mainBody = document.getElementById('main-body');\r\n    const contactUsHeader = document.createElement('h2');\r\n    contactUsHeader.id = 'contact-us-header';\r\n    contactUsHeader.textContent = \"We'd Love To Hear From You.\";\r\n    mainBody.appendChild(contactUsHeader);\r\n    const contactUsContainer = document.createElement('div');\r\n    contactUsContainer.id = 'contact-us-container';\r\n    const contactList = [\r\n      {\r\n        reason: 'Donations',\r\n        blurb: 'As a small business, we focus our community impact on efforts that align with our workforce; homelessness, incarceration and recovery awareness.'\r\n      },\r\n      {\r\n        reason: 'Press + Speaking',\r\n        blurb: 'Want to write a feature on Not Chicken Takeover or have us speak at your event? (Speaking engagements are booking out 30-60 days in advance and are subject to availability)'\r\n      },\r\n      {\r\n        reason: 'Party Food',\r\n        blurb: 'If you are interested in having Not Chicken Takeover cater your event, please fill out the request form below.'\r\n      },\r\n      {\r\n        reason: 'General Questions',\r\n        blurb: 'Have a question and can’t find the right form here, send a request to our general mailbox.'\r\n      },\r\n    ];\r\n\r\n    contactList.forEach(item => {\r\n      const card = document.createElement('div');\r\n      card.classList = 'contact-card';\r\n      const contactReason = document.createElement('h3');\r\n      contactReason.innerText = item.reason;\r\n      const contactBlurb = document.createElement('p');\r\n      contactBlurb.innerText = item.blurb;\r\n      const contactButton = document.createElement('button');\r\n      contactButton.innerText = 'Make Request';\r\n      card.appendChild(contactReason);\r\n      card.appendChild(contactBlurb);\r\n      card.appendChild(contactButton);\r\n      contactUsContainer.appendChild(card);\r\n    });\r\n    mainBody.appendChild(contactUsContainer);\r\n\r\n  };\r\n\r\n  return { render };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\nconst Home = (() => {\r\n\r\n  const render = () => {\r\n    const mainBody = document.getElementById('main-body');\r\n    const restaurantTag = document.createElement('div');\r\n    restaurantTag.id = 'restaurant-tag';\r\n    restaurantTag.innerText = 'Delicious Hot Tofu Butchered Fresh Daily';\r\n    mainBody.appendChild(restaurantTag);\r\n\r\n    const restaurantAboutUs = document.createElement('div');\r\n    restaurantAboutUs.id = 'body-about-us';\r\n    restaurantAboutUs.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum, ipsum nec malesuada consectetur, nibh mi dictum mauris, a sodales felis enim id turpis. Aliquam suscipit leo vel elit sollicitudin, auctor mollis lorem tincidunt. Nam malesuada ante nisl, ut dictum sem dapibus et. Duis ut elit venenatis, bibendum metus in, rutrum nulla. Nunc et orci interdum, pellentesque tortor nec, fringilla arcu. Phasellus varius placerat scelerisque. Donec at purus quis velit luctus tincidunt. Donec eget dictum sem, eget egestas erat. Integer elementum quam a sem scelerisque, ut mattis quam ornare. Fusce maximus elit vel ligula tempor, in facilisis ipsum pharetra. Aliquam vel libero odio. Praesent id egestas nulla.';\r\n    mainBody.appendChild(restaurantAboutUs);\r\n\r\n    const buttonContainer = document.createElement('div');\r\n    buttonContainer.id = 'button-container';\r\n\r\n    const orderButton = document.createElement('button');\r\n    orderButton.id = 'button-order';\r\n    orderButton.innerText = 'Order Now';\r\n    buttonContainer.appendChild(orderButton);\r\n\r\n    const menuButton = document.createElement('button');\r\n    menuButton.id = 'button-menu';\r\n    menuButton.innerText = 'View Menu';\r\n    buttonContainer.appendChild(menuButton);\r\n    mainBody.appendChild(buttonContainer);\r\n  }\r\n\r\n  return {\r\n    render\r\n  }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nconst Menu = (() => {\r\n  const render = () => {\r\n    const mainBody = document.getElementById('main-body');\r\n    const foodContainer = document.createElement('div');\r\n    foodContainer.id = 'food-container';\r\n    const menuList = [\r\n      {\r\n        name: 'Hot Tofu',\r\n        price: 12,\r\n        description: 'Our world famous hot tofu served with one of four heat levels.'\r\n      }, \r\n      {\r\n        name: 'Coleslaw',\r\n        price: 4,\r\n        description: 'Our delightfully zingy coleslaw.'\r\n      }, \r\n      {\r\n        name: 'Mac & Cheese',\r\n        price: 3,\r\n        description: 'Back by popular demand, our mac & cheese is made with five different kinds of cheese and topped with breadcrumbs to give it a tasty crunch.'\r\n      }\r\n    ];\r\n\r\n    menuList.forEach(item => {\r\n      const card = document.createElement('div');\r\n      card.classList = 'food-card';\r\n      const foodName = document.createElement('h3');\r\n      foodName.textContent = item.name;\r\n\r\n      const foodPrice = document.createElement('h4');\r\n      foodPrice.textContent = \"\"+item.price;\r\n\r\n      const foodDescription = document.createElement('p');\r\n      foodDescription.textContent = item.description;\r\n      card.appendChild(foodName);\r\n      card.appendChild(foodPrice);\r\n      card.appendChild(foodDescription);\r\n      foodContainer.appendChild(card);\r\n    });\r\n    mainBody.appendChild(foodContainer);\r\n  }\r\n  return { render };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/page-layout.js":
/*!************************************!*\
  !*** ./src/modules/page-layout.js ***!
  \************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\nconst Layout = (() => {\r\n\r\n  const createHeader = () => {\r\n    const content = document.getElementById('content');\r\n    const header = document.createElement('header');\r\n    const navigation = document.createElement('nav');\r\n    const headerPicture = document.createElement('div');\r\n    headerPicture.id = 'header-picture';\r\n    headerPicture.textContent = 'Not Chicken Takeover';\r\n    const headerList = document.createElement('ul');\r\n    headerList.id = 'header-list';\r\n    const headerListContents = [\r\n      {\r\n        name: 'Home',\r\n        id: 'header-list-home'\r\n      },\r\n      {\r\n        name: 'Menu',\r\n        id: 'header-list-menu'\r\n      },\r\n      {\r\n        name: 'Contact Us',\r\n        id: 'header-list-contact'\r\n      },\r\n    ];\r\n    headerListContents.forEach(item => {\r\n      const listItem = document.createElement('li');\r\n      const textContent = item.name;\r\n      const id = item.id;\r\n      listItem.textContent = textContent;\r\n      listItem.id = id;\r\n      headerList.appendChild(listItem);\r\n    });\r\n    navigation.appendChild(headerPicture);\r\n    navigation.appendChild(headerList);\r\n    header.appendChild(navigation);\r\n    content.appendChild(header);\r\n  };\r\n\r\n  const createBody = () => {\r\n    const content = document.getElementById('content');\r\n    const mainBody = document.createElement('div');\r\n    mainBody.id = 'main-body';\r\n\r\n    \r\n    content.appendChild(mainBody);\r\n  };\r\n  const createFooter = () => {\r\n    const content = document.getElementById('content');\r\n    const footer = document.createElement('footer');\r\n    const footerText = document.createElement('p');\r\n    footerText.id = \"footer-text\";\r\n    footerText.innerHTML ='NOT CHICKEN TAKEOVER, LLC<br>©2020';\r\n    footer.appendChild(footerText);\r\n    content.appendChild(footer);\r\n    console.log('Footer Created');\r\n  };\r\n  const createDocument = () => {\r\n    createHeader();\r\n    createBody();\r\n    createFooter();\r\n  };\r\n  const clearBody = () => {\r\n    const mainBody = document.getElementById('main-body');\r\n    mainBody.setAttribute('data-attribute', '2');\r\n    while (mainBody.firstChild) {\r\n      mainBody.removeChild(mainBody.firstChild);\r\n    }\r\n  };\r\n\r\n  return {\r\n    createDocument,\r\n    clearBody\r\n  };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/page-layout.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });