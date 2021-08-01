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

/***/ "./src/accordion-ui/nopwop-accordion-ui.css?base64":
/*!*********************************************************!*\
  !*** ./src/accordion-ui/nopwop-accordion-ui.css?base64 ***!
  \*********************************************************/
/***/ ((module) => {

eval("module.exports = \"data:text/css;base64,Lm5vcHdvcC1hY2NvcmRpb24tdGl0bGUgewogIG1hcmdpbjogMjBweCAyNXB4IDBweCAyNXB4ICFpbXBvcnRhbnQ7CiAgcGFkZGluZzogMC41ZW07CiAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgY29sb3I6I2ZmZjsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjOENCNjVGOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICBjdXJzb3I6IHBvaW50ZXI7Cn0KCi5ub3B3b3AtYWNjb3JkaW9uLXRpdGxlOjpiZWZvcmUsIAoubm9wd29wLWFjY29yZGlvbi10aXRsZTo6YWZ0ZXIgewogIGNvbnRlbnQ6ICcnOwogIGRpc3BsYXk6IGJsb2NrOwogIGJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogNTAlOwogIHdpZHRoOiAxMHB4OwogIGhlaWdodDogMnB4OwogIHJpZ2h0OiAxMHB4Owp9Cgoubm9wd29wLWFjY29yZGlvbi10aXRsZTo6YWZ0ZXIgewogIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsKICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7Cn0KCi8qCi5ub3B3b3AtYWNjb3JkaW9uLXRpdGxlOmhvdmVyLAoubm9wd29wLWFjY29yZGlvbi10aXRsZTphY3RpdmUsCi5ub3B3b3AtYWNjb3JkaW9uLXRpdGxlLmlzLWFjdGl2ZSB7IAogIGJhY2tncm91bmQtY29sb3I6ICM4Q0I2NUY7Cn0KKi8KCi5ub3B3b3AtYWNjb3JkaW9uLXRpdGxlLmlzLWFjdGl2ZTo6YmVmb3JlIHsKICBvcGFjaXR5OiAwOwp9Cgoubm9wd29wLWFjY29yZGlvbi10aXRsZS5pcy1hY3RpdmU6OmFmdGVyIHsKICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsKfQoKCi5ub3B3b3AtYWNjb3JkaW9uLWRlc2MgewogIGNvbG9yOiBpbmhlcml0OwoKICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7CiAgcGFkZGluZzogMCAxLjVlbTsKICBsaW5lLWhlaWdodDogMHB4OwogIGhlaWdodDogMHB4OwogIG92ZXJmbG93OiBoaWRkZW47CiAgb3BhY2l0eTogMDsKCiAgbWFyZ2luOiAwIDI1cHg7CiAgZm9udC1zaXplOiA4NSU7Cn0KCi5ub3B3b3AtYWNjb3JkaW9uLWRlc2MuaXMtb3BlbiB7CiAgYm9yZGVyOiAycHggc29saWQgIzhDQjY1RjsKICBwYWRkaW5nOiAuNjI1ZW0gMS41ZW07CiAgbGluZS1oZWlnaHQ6IG5vcm1hbDsKICBoZWlnaHQ6IGF1dG87CiAgb3BhY2l0eTogMTsKfQ==\";\n\n//# sourceURL=webpack://nopwop/./src/accordion-ui/nopwop-accordion-ui.css?");

/***/ }),

/***/ "./src/accordion-ui/nopwop-accordion-ui.js":
/*!*************************************************!*\
  !*** ./src/accordion-ui/nopwop-accordion-ui.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_script_traverser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/script-traverser */ \"./src/common/script-traverser.js\");\n/* harmony import */ var _nopwop_accordion_ui_css_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nopwop-accordion-ui.css?base64 */ \"./src/accordion-ui/nopwop-accordion-ui.css?base64\");\n\n\n\n(function() {\n\n  const d = document\n\n  let ctx = (0,_common_script_traverser__WEBPACK_IMPORTED_MODULE_0__.ScriptTraverser)('nopwop-accordion-ui', 'nopwopAccordionUi')\n  .init((ctx) => {\n    loadCSS(_nopwop_accordion_ui_css_base64__WEBPACK_IMPORTED_MODULE_1__)\n  })\n  .forEach((s) => {\n    setupAccordionUi(s.element)\n  })\n\n  function loadCSS(styleSheet) {\n    let list = d.getElementsByTagName('head')\n    if (0 < list.length) {\n      let s = d.createElement('link')\n      s.rel = 'stylesheet'\n      s.href = styleSheet\n      list[0].appendChild(s)\n    }\n  }\n\n  function setupEvents(title, desc) {\n    title.addEventListener('click', (e) => {\n      desc.classList.toggle('is-open')\n      title.classList.toggle('is-active')\n    })\n  }\n\n  let insertRulesIndex = 500\n  function insertStyleRules(scr) {\n    let bgcolor = scr.getAttribute('background-color')\n    let color = scr.getAttribute('color')\n\n    if (!bgcolor && !color) return null\n\n    let postfix = '' + insertRulesIndex++\n    let addedClasses = {\n      desc: `nopwop-accordion-${postfix}-desc`,\n      title: `nopwop-accordion-${postfix}-title` ,\n    }\n\n    let rules = []\n    if (bgcolor) {\n      rules.push(`.${addedClasses.desc}.is-open {border-color: ${bgcolor};}`)\n      rules.push(`.${addedClasses.title} {background-color: ${bgcolor}}`)\n    }\n    if (color) {\n      rules.push(`.${addedClasses.title} {color: ${color}}`)\n    }\n    \n    let s = d.createElement('style')\n    d.head.appendChild(s)\n    rules.forEach((r) => {\n      s.sheet.insertRule(r)\n    })\n\n    return addedClasses\n  }\n\n  function addClasses(title, desc, classes) {\n    if (classes) {\n      desc.classList.add(classes.desc)\n      title.classList.add(classes.title)\n    }\n  }\n\n  function setupAccordionUi(scr) {\n    let classes = insertStyleRules(scr)\n\n    let title = scr.nextElementSibling\n    title.classList.add('nopwop-accordion-title')\n    let desc  = title.nextElementSibling\n    desc.classList.add('nopwop-accordion-desc')\n\n    addClasses(title, desc, classes)\n    setupEvents(title, desc)\n  }\n\n})()\n\n\n//# sourceURL=webpack://nopwop/./src/accordion-ui/nopwop-accordion-ui.js?");

/***/ }),

/***/ "./src/common/script-traverser.js":
/*!****************************************!*\
  !*** ./src/common/script-traverser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScriptTraverser\": () => (/* binding */ ScriptTraverser)\n/* harmony export */ });\n//@ts-check\nclass PageCtx {\n  constructor(scriptName) {\n    this.scriptName = scriptName\n  }\n\n  searchScriptTag(callback) {\n    let _self = this\n    let list = document.querySelectorAll('script')\n    list.forEach((i) => {\n      let a = i.getAttribute('src')\n      if (a && a.indexOf(_self.scriptName) != -1) {\n        callback && callback(i)\n      }\n    })\n    return\n  }\n}\n\n/**\n* [description]\n*   ScriptTraverser() will traverse the page and find specified script tag in HTML\n*   and it returns object which contains init() func.\n*   init() takes callback function with 'context' which is unique in the page \n*   \n*   Usage is something like below:\n*\n*     let ctx = ScriptTraverser('foo-bar', 'FooBar')\n*          .init((ctx) => {...})\n*          .forEach((traversed) => {...})\n*\n*   Finally,forEach() will receive travesed object which has 'element' and 'args' property array\n* \n* @param {String} scriptName script name to search (it shouldn't include '.js' or 'min.js')\n* @param {String} contextName property name which is assigned to global window object by this function \n  so that to avoid duplicated execution of main logic\n*\n*/\n//@ts-check\nconst ScriptTraverser = function(scriptName, contextName) {\n  \n  function get_args_array(elm) {\n    let args = {}\n    let attr = elm.attributes\n    for (let i=0; i < attr.length; i++) { args[attr[i].name] = attr[i].value } \n    return args\n  }\n\n  return {\n    init : function(initCallback) {\n      let ctx = null\n      if (!(contextName in window)) {\n        ctx = new PageCtx(scriptName)\n      }\n\n      return {\n        forEach: function(eachCallback) {\n          if (ctx) { \n            window.addEventListener('DOMContentLoaded', (event) => {\n              \n              initCallback && initCallback(ctx)\n\n              ctx.searchScriptTag(function(scrElem) {\n                let obj = {\n                  args: get_args_array(scrElem), \n                  element: scrElem, \n                  insert: (elm) => {\n                    scrElem.parentElement.insertBefore(elm, scrElem)\n                  },\n                }\n                eachCallback && eachCallback(obj)\n              })\n            })\n            window[contextName] = ctx\n          }\n          return window[contextName]\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://nopwop/./src/common/script-traverser.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/accordion-ui/nopwop-accordion-ui.js");
/******/ 	
/******/ })()
;