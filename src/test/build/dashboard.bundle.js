/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./dashboard.css":
/*!*********************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./dashboard.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.suite h1{\\n    color: #592202;\\n    background-color: #BACBD9;\\n\\n    border-left-width: 5px;\\n    border-left-style: solid;\\n    border-left-color: #7B92A6;\\n    padding-left: 0.75em;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./dashboard.css\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;IACd,yBAAyB;;IAEzB,sBAAsB;IACtB,wBAAwB;IACxB,0BAA0B;IAC1B,oBAAoB;AACxB\",\"sourcesContent\":[\"\\n.suite h1{\\n    color: #592202;\\n    background-color: #BACBD9;\\n\\n    border-left-width: 5px;\\n    border-left-style: solid;\\n    border-left-color: #7B92A6;\\n    padding-left: 0.75em;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./dashboard.css?../../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function cssWithMappingToString(item) {\n  var _item = _slicedToArray(item, 4),\n      content = _item[1],\n      cssMapping = _item[3];\n\n  if (typeof btoa === \"function\") {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack:///../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js?");

/***/ }),

/***/ "./dashboard.css":
/*!***********************!*\
  !*** ./dashboard.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"../../node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_dashboard_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./dashboard.css */ \"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./dashboard.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_dashboard_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_dashboard_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_dashboard_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_dashboard_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./dashboard.css?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/getTarget.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../post-list/page-list-with-parent.js":
/*!*********************************************!*\
  !*** ../post-list/page-list-with-parent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageListWithParent\": () => (/* binding */ getPageListWithParent)\n/* harmony export */ });\nfunction getPageListWithParent(api, scr) {\n  return new Promise(function(resolve, reject) {\n    let n = scr.getAttribute('name')\n    let slg = scr.getAttribute('slug')\n    let id = scr.getAttribute('parentId')\n    let per_page = scr.getAttribute('count')\n    if (id) {\n      api.childPagesOf(id, per_page).then(function(list) {\n        resolve(list)\n      })\n    } else if (slg) {\n      api.pagesBySlug(slg).then(function(d) {\n        return (d && 0 < d.length) ? api.childPagesOf(d[0].id, per_page) : Promise.resolve()\n      }).then(function(list) {\n        resolve(list)\n      })\n    } else if (n) {\n      api.pagesBySearch(n).then(function(d) {\n        return (d && 0 < d.length) ? api.childPagesOf(d[0].id, per_page) : Promise.resolve()\n      }).then(function(list){\n        resolve(list)\n      })\n    } else {\n      reject(new Error('script タグにカテゴリの指定が見つかりません'))\n    } \n  })\n}\n\n\n\n//# sourceURL=webpack:///../post-list/page-list-with-parent.js?");

/***/ }),

/***/ "./dashboard.js":
/*!**********************!*\
  !*** ./dashboard.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.css */ \"./dashboard.css\");\n/* harmony import */ var _test1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test1 */ \"./test1.js\");\n/* harmony import */ var _test2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test2 */ \"./test2.js\");\n\n\n\n\nmocha.setup('bdd')\n\n_test1__WEBPACK_IMPORTED_MODULE_1__.test1.execute()\n_test2__WEBPACK_IMPORTED_MODULE_2__.test2.execute()\n\nmocha.run()\n\n\n//# sourceURL=webpack:///./dashboard.js?");

/***/ }),

/***/ "./mock/wpapi.js":
/*!***********************!*\
  !*** ./mock/wpapi.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WpApiWrapper\": () => (/* binding */ WpApiWrapper)\n/* harmony export */ });\n\n// sample: https://shizuka-na-kazushi.style/wp-json/wp/v2/pages?parent=6797&per_page=10&_fields=id,featured_media,title,link,excerpt,date\nlet pages_defaults = [\n  {\n    date: \"2021-04-04T13:47:18\",\n    excerpt: {rendered: \"other - exerpt\", protected: false},\n    featured_media: 0,\n    id: 6802,\n    link: \"https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/\",\n    title: {rendered: \"other\"},\n  },\n    {\n    date: \"2021-04-11T13:20:29\",\n    excerpt: {rendered: \"hello - excerpt\", protected: false},\n    featured_media: 0,\n    id: 6832,\n    link: \"https://shizuka-na-kazushi.style/ftp-exchange-faq/google-not-certify-developer-when-creating-ftp-account/\",\n    title:{rendered: \"hello\"}\n  },\n  {\n    date: \"2021-04-04T13:47:18\",\n    excerpt: {rendered: \"happy - exerpt\", protected: false},\n    featured_media: 0,\n    id: 6801,\n    link: \"https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/\",\n    title: {rendered: \"happy\"},\n  },\n  ]\n\nlet media_default = \n  {\n    id: 6320,\n    date:'2020-11-08T12:46:46',\n    media_details: {\n      sizes: {\n        thumbnail: {\n          source_url: '/nopwop/resources/no-image-icon.png'\n        },\n      },\n    },\n  }\n\nclass WpApiWrapper {\n  constructor() {\n\n  }\n\n  mediaById(media_id) {\n    let data = {default: media_default}\n    return new Promise(function(resolve, reject) {\n      if (media_id in data) {\n        resolve(data[media_id])\n      } else {\n        resolve(data.default)\n      }\n    })\n  }\n\n  postsByCategoryId(cat_id, per_page) {\n    let pp = per_page || 50\n    let url = `/wp-json/wp/v2/posts?categories=${cat_id}&per_page=${pp}&_fields=id,featured_media,title,link,excerpt,date`\n    return Promise.reject(new Error(`postsByCategoryId()stub not implemented`))\n  }\n\n  postsByTagId(tag_id, per_page) {\n    let pp = per_page || 30\n    let url = `/wp-json/wp/v2/posts?tags=${tag_id}&per_page=${pp}&_fields=id,link,title,featured_media,excerpt,date`\n    return Promise.reject(new Error(`postsByTagId()stub not implemented`))\n  }\n\n  postById(post_id) {\n    let url = `/wp-json/wp/v2/posts/${post_id}?_fields=id,featured_media,title,link,excerpt,date,tags,categories`\n    return Promise.reject(new Error(`postById()stub not implemented`))\n  }\n\n  categoryBySlug(slug) {\n    let url = `/wp-json/wp/v2/categories?slug=${slug}&_fields=id,name,link,count`\n    return Promise.reject(new Error(`categoryBySlug()stub not implemented`))\n  }\n\n  categoryBySearch(name) {\n    let url = `/wp-json/wp/v2/categories?search=${name}&_fields=id,name,link,count`\n    return Promise.reject(new Error(`categoryBySearch()stub not implemented`))\n  }\n\n  tagBySlug(slug) {\n    let url = `/wp-json/wp/v2/tags?slug=${slug}&_fields=id,name,link,count`\n    return Promise.reject(new Error(`tagBySlug()stub not implemented`))\n  }\n\n  tagBySearch(name) {\n    let url = `/wp-json/wp/v2/tags?search=${name}&_fields=id,name,link,count`\n    return Promise.reject(new Error(`tagBySearch()stub not implemented`))\n  }\n\n  childPagesOf(parent_id, per_page) {\n    let ret = pages_defaults.filter((i) => {return i.id == parent_id})\n    return new Promise(function(resolve, reject) {\n      if (ret.length) {\n        resolve(ret)\n      } else {\n        resolve(pages_defaults)\n      }\n    })\n  }\n\n  pagesBySlug(slug) {\n    let data = {default: pages_defaults}\n    data['happy']  = [\n      {\n        date: \"2021-04-04T13:47:18\",\n        excerpt: {rendered: \"<p>現在、ftp exchangeは以下の3rd partyサービスをサポートしています。 Googleフォト Googleドライブ OneDrive Dropbox</p>\\n\", protected: false},\n        featured_media: 0,\n        id: 6801,\n        link: \"https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/\",\n        title: {rendered: \"dummy-6801\"},\n      }]\n    return new Promise(function(resolve, reject) {\n      if (slug in data) {\n        resolve(data[slug])\n      } else {\n        resolve(data.default)\n      }\n    })\n  }\n\n  pagesBySearch(name) {\n    let data = {default: pages_defaults}\n    data['hello']  = [{\n        date: \"2021-04-04T13:47:18\",\n        excerpt: {rendered: \"<p>現在、ftp exchangeは以下の3rd partyサービスをサポートしています。 Googleフォト Googleドライブ OneDrive Dropbox</p>\\n\", protected: false},\n        featured_media: 0,\n        id: 6832,\n        link: \"https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/\",\n        title: {rendered: \"dummy-6832\"},\n    }]\n    return new Promise(function(resolve, reject) {\n      if (name in data) {\n        resolve(data[name])\n      } else {\n        resolve(data.default)\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./mock/wpapi.js?");

/***/ }),

/***/ "./test1.js":
/*!******************!*\
  !*** ./test1.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test1\": () => (/* binding */ test1)\n/* harmony export */ });\n/* harmony import */ var _post_list_page_list_with_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post-list/page-list-with-parent */ \"../post-list/page-list-with-parent.js\");\n/* harmony import */ var _mock_wpapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/wpapi */ \"./mock/wpapi.js\");\n\n\n\nfunction execute() {\n  let expect = chai.expect\n\n  describe('post-list general', function() {\n\n    let mockWpApi\n    before(function() {\n      mockWpApi = new _mock_wpapi__WEBPACK_IMPORTED_MODULE_1__.WpApiWrapper()\n    })\n\n    it('calling getPageListWithParent() with id property', function(done) {\n      let zero = 0;\n      let s = document.createElement('script')\n      s.setAttribute('parentId', 'happy')\n      ;(0,_post_list_page_list_with_parent__WEBPACK_IMPORTED_MODULE_0__.getPageListWithParent)(mockWpApi, s).then((data) => {\n        expect(data.length).to.be.above(1)\n        expect(data[0]).to.have.property('id')\n        done() \n      })\n    })\n\n    it('calling getPageListWithParent() with slug property', function(done) {\n      let zero = 0;\n      let s = document.createElement('script')\n      s.setAttribute('slug', 'happy')\n      ;(0,_post_list_page_list_with_parent__WEBPACK_IMPORTED_MODULE_0__.getPageListWithParent)(mockWpApi, s).then((data) => {\n        expect(data.length).to.be.above(0)\n        expect(data[0]).to.have.property('id')\n        done() \n      }).catch((e) => {done(e)})\n    })\n\n    it('calling getPageListWithParent() with name property', function(done) {\n      let zero = 0;\n      let s = document.createElement('script')\n      s.setAttribute('name', 'hello')\n      ;(0,_post_list_page_list_with_parent__WEBPACK_IMPORTED_MODULE_0__.getPageListWithParent)(mockWpApi, s).then((data) => {\n        expect(data.length).to.be.above(0)\n        expect(data[0]).to.have.property('id')\n        expect(data[0].title).to.have.property('rendered')\n        expect(data[0].title.rendered).to.have.equal('hello')\n        done() \n      }).catch((e) => {done(e)})\n    })\n  })\n\n  describe('my 2nd mocha test', function() {\n\n    it('2nd test (1)', function(done) {\n      let zero = 0;\n      expect(zero + 1).to.be.equal(1);\n      done()\n    })\n\n    it('2nd test (2)', function(done) {\n      let zero = 1;\n      expect(zero + 2).to.be.equal(3);\n      done()\n    })\n  })\n}\n\nconst test1 = { \n  execute: execute,\n}\n\n\n//# sourceURL=webpack:///./test1.js?");

/***/ }),

/***/ "./test2.js":
/*!******************!*\
  !*** ./test2.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test2\": () => (/* binding */ test2)\n/* harmony export */ });\n\nfunction execute() {\n  let expect = chai.expect\n\n  describe('my 3rd mocha test', function() {\n\n    it('3 test (1)', function(done) {\n      let zero = 0;\n      expect(zero + 1).to.be.equal(1);\n      done()\n    })\n  })\n}\n\nconst test2 = { \n  execute: execute,\n}\n\n\n//# sourceURL=webpack:///./test2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dashboard.js");
/******/ 	
/******/ })()
;