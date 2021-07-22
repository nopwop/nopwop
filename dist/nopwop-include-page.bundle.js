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

/***/ "../common/script-traverser.js":
/*!*************************************!*\
  !*** ../common/script-traverser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScriptTraverser\": () => (/* binding */ ScriptTraverser)\n/* harmony export */ });\n//@ts-check\nclass PageCtx {\n  constructor(scriptName) {\n    this.scriptName = scriptName\n  }\n\n  searchScriptTag(callback) {\n    let _self = this\n    let list = document.querySelectorAll('script')\n    list.forEach((i) => {\n      let a = i.getAttribute('src')\n      if (a && a.indexOf(_self.scriptName) != -1) {\n        callback && callback(i)\n      }\n    })\n    return\n  }\n}\n\n/**\n* [description]\n*   ScriptTraverser() will traverse the page and find specified script tag in HTML\n*   and it returns object which contains init() func.\n*   init() takes callback function with 'context' which is unique in the page \n*   \n*   Usage is something like below:\n*\n*     let ctx = ScriptTraverser('foo-bar', 'FooBar')\n*          .init((ctx) => {...})\n*          .forEach((traversed) => {...})\n*\n*   Finally,forEach() will receive travesed object which has 'element' and 'args' property array\n* \n* @param {String} scriptName script name to search (it shouldn't include '.js' or 'min.js')\n* @param {String} contextName property name which is assigned to global window object by this function \n  so that to avoid duplicated execution of main logic\n*\n*/\n//@ts-check\nconst ScriptTraverser = function(scriptName, contextName) {\n  \n  function get_args_array(elm) {\n    let args = {}\n    let attr = elm.attributes\n    for (let i=0; i < attr.length; i++) { args[attr[i].name] = attr[i].value } \n    return args\n  }\n\n  return {\n    init : function(initCallback) {\n      let ctx = null\n      if (!(contextName in window)) {\n        ctx = new PageCtx(scriptName)\n      }\n\n      return {\n        forEach: function(eachCallback) {\n          if (ctx) { \n            window.addEventListener('DOMContentLoaded', (event) => {\n              \n              initCallback && initCallback(ctx)\n\n              ctx.searchScriptTag(function(scrElem) {\n                let obj = {\n                  args: get_args_array(scrElem), \n                  element: scrElem, \n                  insert: (elm) => {\n                    scrElem.parentElement.insertBefore(elm, scrElem)\n                  },\n                }\n                eachCallback && eachCallback(obj)\n              })\n            })\n            window[contextName] = ctx\n          }\n          return window[contextName]\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///../common/script-traverser.js?");

/***/ }),

/***/ "./nopwop-include-page.js":
/*!********************************!*\
  !*** ./nopwop-include-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_script_traverser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/script-traverser */ \"../common/script-traverser.js\");\n\n\n(function(global) {\n  let ctx = (0,_common_script_traverser__WEBPACK_IMPORTED_MODULE_0__.ScriptTraverser)('nopwop-include-page', 'nopwopIncludePage')\n  .init((ctx) => {\n    /* nop */\n  })\n  .forEach((s) => {\n    createContainerElement(s.element)\n  })\n\n  const d = document\n\n  function pageById(pageid) {\n    let url = `/wp-json/wp/v2/pages/${pageid}?_fields=id,featured_media,title,content,date`\n    return fetch(url).then(r => r.json())\n  }\n\n  function pagesBySlug(slug) {\n    let url = `/wp-json/wp/v2/pages?slug=${slug}&_fields=id,featured_media,title,content,date`\n    return fetch(url).then(r => r.json())\n  }\n\n  function errorMsgElement(scr, msg) {\n    let m = d.createElement('div')\n    m.classList.add('npwp-err-msg')\n    m.style.color = 'red'\n    m.textContent = 'nopwop: ' + msg\n    let parent = scr.parentNode;\n    parent.insertBefore(m, scr)\n  }\n\n  function appendPage(scr, page) {\n    scr.insertAdjacentHTML('beforebegin', page.content.rendered)\n  }\n\n  function createContainerElement(scr) {\n    let id = scr.getAttribute('pageid')\n    let slg = scr.getAttribute('slug')\n    if (id) {\n      pageById(id).then(function(page) {\n        appendPage(scr, page)\n      })\n    } else if (slg) {\n      pagesBySlug(slg).then(function(list){\n        list && list.forEach(function(page) {\n          appendPage(scr, page)\n        })\n      })\n    } else {\n      errorMsgElement(scr, 'scriptタグにページID(pageid属性)かslug属性が必要です')\n    }\n  }\n\n})(undefined)\n\n\n//# sourceURL=webpack:///./nopwop-include-page.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./nopwop-include-page.js");
/******/ 	
/******/ })()
;