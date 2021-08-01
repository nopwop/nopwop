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

/***/ "./src/syntax-highlight/clipboard.svg":
/*!********************************************!*\
  !*** ./src/syntax-highlight/clipboard.svg ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiPjwvcGF0aD48cmVjdCB4PSI4IiB5PSIyIiB3aWR0aD0iOCIgaGVpZ2h0PSI0IiByeD0iMSIgcnk9IjEiPjwvcmVjdD48L3N2Zz4=\";\n\n//# sourceURL=webpack://nopwop/./src/syntax-highlight/clipboard.svg?");

/***/ }),

/***/ "./src/syntax-highlight/nopwop-syntax-highlight.js":
/*!*********************************************************!*\
  !*** ./src/syntax-highlight/nopwop-syntax-highlight.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clipboard_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard.svg */ \"./src/syntax-highlight/clipboard.svg\");\n// let svg_clipboard = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiPjwvcGF0aD48cmVjdCB4PSI4IiB5PSIyIiB3aWR0aD0iOCIgaGVpZ2h0PSI0IiByeD0iMSIgcnk9IjEiPjwvcmVjdD48L3N2Zz4='\n\n\n(function () {\n\n  const traverser = function(contextName) {\n    return {\n      init : function(initCallback) {\n        let ctx = null\n        if (!(contextName in window)) {\n          ctx = {dummy: 'dummy'}\n        }\n        \n        return {\n          forEach: function(eachCallback) {\n            if (ctx) {\n              window.addEventListener('DOMContentLoaded', (event) => {\n                initCallback && initCallback()\n                let list = d.querySelectorAll('pre code')\n                list.forEach(function (elm) {\n                  eachCallback && eachCallback(elm.parentElement)\n                })\n                window[contextName] = ctx\n              })\n            }\n          }\n        }\n     }\n    }\n  }\n\n  let d = document\n\n  function loadHighlightJs() {\n    if ('hljs' in window) return\n\n    let cssfile = 'vs2015.min.css'\n    //let cssfile = 'dark.min.css'\n    let url_css = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/${cssfile}`\n    let url_js = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js`\n\n    let h = d.getElementsByTagName('head')\n    if (0 < h.length) {\n      h = h[0]\n      let c = d.createElement('link')\n      c.setAttribute('rel', 'stylesheet')\n      c.setAttribute('href', url_css)\n      h.appendChild(c)\n\n      let s = d.createElement('script')\n      s.setAttribute('src', url_js)\n      h.appendChild(s)\n      s.onload = function () {\n        hljs.highlightAll()\n      }\n    }\n  }\n\n  function createPlate() {\n    let p = d.createElement('div')\n    let s = p.style\n    s.display = 'flex'\n    s.position = 'absolute'\n    s.right = '5px'\n    s.transform = 'translateY(-10px)'\n    s.alignItems = 'center'\n    return p\n  }\n\n  function createCopiedMsg() {\n    let m = d.createElement('div')\n    m.textContent = 'コピーしました！'\n    let s = m.style\n    s.fontSize = '10px'\n    s.display = 'none'\n    s.marginRight = '5px'\n    return m\n  }\n\n  function animateToHide(m) {\n    m.style.opacity = 1.0\n    let countMax = 10\n    let count = 0\n    let t = setInterval(function () {\n      if (count < countMax) {\n        count += 1\n        m.style.opacity = 1.0 * (countMax - count) / countMax\n      } else {\n        m.display = 'none'\n        clearInterval(t)\n      }\n    }, 150)\n  }\n\n  function createClipboardIcon() {\n    let i = d.createElement('img')\n    // i.src = './clipboard.svg'\n    i.src = _clipboard_svg__WEBPACK_IMPORTED_MODULE_0__\n    i.setAttribute('width', '16px')\n    i.setAttribute('height', '16px')\n    return i\n  }\n\n  function createCopyButton(elm) {\n    let p = createPlate()\n    let m = createCopiedMsg()\n    p.appendChild(m)\n    let btn = d.createElement('button')\n    p.appendChild(btn)\n\n    let i = createClipboardIcon()\n    btn.appendChild(i)\n    btn.addEventListener('click', function () {\n      let r = d.createRange()\n      r.selectNode(elm)\n      let n = window.getSelection()\n      if (n) {\n        n.removeAllRanges()\n        n.addRange(r)\n        d.execCommand('copy')\n        n.removeAllRanges()\n        m.style.display = ''\n        animateToHide(m)\n        // setTimeout(function() {m.style.display='none'}, 1500)\n      }\n    })\n\n    let parent = elm.parentElement\n    parent.insertBefore(p, elm)\n    return p\n  }\n\n  /*\n  window.addEventListener('DOMContentLoaded', (event) => {\n    let list = d.querySelectorAll('pre code')\n    list.forEach(function (elm) {\n      createCopyButton(elm.parentElement)\n    })\n    loadHighlightJs()\n  })\n\n  window.syntaxHighlight = {\n    render: function () {\n      console.log('render()!')\n    }\n  }\n  */\n\n  traverser('syntaxHighlight').init(() => {\n    loadHighlightJs()\n  }).forEach((elm) => {\n    createCopyButton(elm)\n  })\n})()\n\n\n//# sourceURL=webpack://nopwop/./src/syntax-highlight/nopwop-syntax-highlight.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/syntax-highlight/nopwop-syntax-highlight.js");
/******/ 	
/******/ })()
;