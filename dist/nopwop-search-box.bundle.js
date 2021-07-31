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

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../lib/JavaScript-autoComplete-master/auto-complete.min.js":
/*!***************************************************************************************************************!*\
  !*** ../../node_modules/raw-loader/dist/cjs.js!../../lib/JavaScript-autoComplete-master/auto-complete.min.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"// JavaScript autoComplete v1.0.4\\n// https://github.com/Pixabay/JavaScript-autoComplete\\nvar autoComplete=function(){function e(e){function t(e,t){return e.classList?e.classList.contains(t):new RegExp(\\\"\\\\\\\\b\\\"+t+\\\"\\\\\\\\b\\\").test(e.className)}function o(e,t,o){e.attachEvent?e.attachEvent(\\\"on\\\"+t,o):e.addEventListener(t,o)}function s(e,t,o){e.detachEvent?e.detachEvent(\\\"on\\\"+t,o):e.removeEventListener(t,o)}function n(e,s,n,l){o(l||document,s,function(o){for(var s,l=o.target||o.srcElement;l&&!(s=t(l,e));)l=l.parentElement;s&&n.call(l,o)})}if(document.querySelector){var l={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:\\\"\\\",renderItem:function(e,t){t=t.replace(/[-\\\\/\\\\\\\\^$*+?.()|[\\\\]{}]/g,\\\"\\\\\\\\$&\\\");var o=new RegExp(\\\"(\\\"+t.split(\\\" \\\").join(\\\"|\\\")+\\\")\\\",\\\"gi\\\");return'<div class=\\\"autocomplete-suggestion\\\" data-val=\\\"'+e+'\\\">'+e.replace(o,\\\"<b>$1</b>\\\")+\\\"</div>\\\"},onSelect:function(){}};for(var c in e)e.hasOwnProperty(c)&&(l[c]=e[c]);for(var a=\\\"object\\\"==typeof l.selector?[l.selector]:document.querySelectorAll(l.selector),u=0;u<a.length;u++){var i=a[u];i.sc=document.createElement(\\\"div\\\"),i.sc.className=\\\"autocomplete-suggestions \\\"+l.menuClass,i.autocompleteAttr=i.getAttribute(\\\"autocomplete\\\"),i.setAttribute(\\\"autocomplete\\\",\\\"off\\\"),i.cache={},i.last_val=\\\"\\\",i.updateSC=function(e,t){var o=i.getBoundingClientRect();if(i.sc.style.left=Math.round(o.left+(window.pageXOffset||document.documentElement.scrollLeft)+l.offsetLeft)+\\\"px\\\",i.sc.style.top=Math.round(o.bottom+(window.pageYOffset||document.documentElement.scrollTop)+l.offsetTop)+\\\"px\\\",i.sc.style.width=Math.round(o.right-o.left)+\\\"px\\\",!e&&(i.sc.style.display=\\\"block\\\",i.sc.maxHeight||(i.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(i.sc,null):i.sc.currentStyle).maxHeight)),i.sc.suggestionHeight||(i.sc.suggestionHeight=i.sc.querySelector(\\\".autocomplete-suggestion\\\").offsetHeight),i.sc.suggestionHeight))if(t){var s=i.sc.scrollTop,n=t.getBoundingClientRect().top-i.sc.getBoundingClientRect().top;n+i.sc.suggestionHeight-i.sc.maxHeight>0?i.sc.scrollTop=n+i.sc.suggestionHeight+s-i.sc.maxHeight:0>n&&(i.sc.scrollTop=n+s)}else i.sc.scrollTop=0},o(window,\\\"resize\\\",i.updateSC),document.body.appendChild(i.sc),n(\\\"autocomplete-suggestion\\\",\\\"mouseleave\\\",function(){var e=i.sc.querySelector(\\\".autocomplete-suggestion.selected\\\");e&&setTimeout(function(){e.className=e.className.replace(\\\"selected\\\",\\\"\\\")},20)},i.sc),n(\\\"autocomplete-suggestion\\\",\\\"mouseover\\\",function(){var e=i.sc.querySelector(\\\".autocomplete-suggestion.selected\\\");e&&(e.className=e.className.replace(\\\"selected\\\",\\\"\\\")),this.className+=\\\" selected\\\"},i.sc),n(\\\"autocomplete-suggestion\\\",\\\"mousedown\\\",function(e){if(t(this,\\\"autocomplete-suggestion\\\")){var o=this.getAttribute(\\\"data-val\\\");i.value=o,l.onSelect(e,o,this),i.sc.style.display=\\\"none\\\"}},i.sc),i.blurHandler=function(){try{var e=document.querySelector(\\\".autocomplete-suggestions:hover\\\")}catch(t){var e=0}e?i!==document.activeElement&&setTimeout(function(){i.focus()},20):(i.last_val=i.value,i.sc.style.display=\\\"none\\\",setTimeout(function(){i.sc.style.display=\\\"none\\\"},350))},o(i,\\\"blur\\\",i.blurHandler);var r=function(e){var t=i.value;if(i.cache[t]=e,e.length&&t.length>=l.minChars){for(var o=\\\"\\\",s=0;s<e.length;s++)o+=l.renderItem(e[s],t);i.sc.innerHTML=o,i.updateSC(0)}else i.sc.style.display=\\\"none\\\"};i.keydownHandler=function(e){var t=window.event?e.keyCode:e.which;if((40==t||38==t)&&i.sc.innerHTML){var o,s=i.sc.querySelector(\\\".autocomplete-suggestion.selected\\\");return s?(o=40==t?s.nextSibling:s.previousSibling,o?(s.className=s.className.replace(\\\"selected\\\",\\\"\\\"),o.className+=\\\" selected\\\",i.value=o.getAttribute(\\\"data-val\\\")):(s.className=s.className.replace(\\\"selected\\\",\\\"\\\"),i.value=i.last_val,o=0)):(o=40==t?i.sc.querySelector(\\\".autocomplete-suggestion\\\"):i.sc.childNodes[i.sc.childNodes.length-1],o.className+=\\\" selected\\\",i.value=o.getAttribute(\\\"data-val\\\")),i.updateSC(0,o),!1}if(27==t)i.value=i.last_val,i.sc.style.display=\\\"none\\\";else if(13==t||9==t){var s=i.sc.querySelector(\\\".autocomplete-suggestion.selected\\\");s&&\\\"none\\\"!=i.sc.style.display&&(l.onSelect(e,s.getAttribute(\\\"data-val\\\"),s),setTimeout(function(){i.sc.style.display=\\\"none\\\"},20))}},o(i,\\\"keydown\\\",i.keydownHandler),i.keyupHandler=function(e){var t=window.event?e.keyCode:e.which;if(!t||(35>t||t>40)&&13!=t&&27!=t){var o=i.value;if(o.length>=l.minChars){if(o!=i.last_val){if(i.last_val=o,clearTimeout(i.timer),l.cache){if(o in i.cache)return void r(i.cache[o]);for(var s=1;s<o.length-l.minChars;s++){var n=o.slice(0,o.length-s);if(n in i.cache&&!i.cache[n].length)return void r([])}}i.timer=setTimeout(function(){l.source(o,r)},l.delay)}}else i.last_val=o,i.sc.style.display=\\\"none\\\"}},o(i,\\\"keyup\\\",i.keyupHandler),i.focusHandler=function(e){i.last_val=\\\"\\\\n\\\",i.keyupHandler(e)},l.minChars||o(i,\\\"focus\\\",i.focusHandler)}this.destroy=function(){for(var e=0;e<a.length;e++){var t=a[e];s(window,\\\"resize\\\",t.updateSC),s(t,\\\"blur\\\",t.blurHandler),s(t,\\\"focus\\\",t.focusHandler),s(t,\\\"keydown\\\",t.keydownHandler),s(t,\\\"keyup\\\",t.keyupHandler),t.autocompleteAttr?t.setAttribute(\\\"autocomplete\\\",t.autocompleteAttr):t.removeAttribute(\\\"autocomplete\\\"),document.body.removeChild(t.sc),t=null}}}}return e}();!function(){\\\"function\\\"==typeof define&&define.amd?define(\\\"autoComplete\\\",function(){return autoComplete}):\\\"undefined\\\"!=typeof module&&module.exports?module.exports=autoComplete:window.autoComplete=autoComplete}();\");\n\n//# sourceURL=webpack:///../../lib/JavaScript-autoComplete-master/auto-complete.min.js?../../node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./nopwop-search-box.css":
/*!*******************************!*\
  !*** ./nopwop-search-box.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:text/css;base64,Lm5vcHdvcC1zZWFyY2gtYm94IGlucHV0W3R5cGU9J3RleHQnXSB7Cglmb250OiAxNXB4LzI0cHg7Cglib3gtc2l6aW5nOiBib3JkZXItYm94OwoJd2lkdGg6IDEwMCU7CglwYWRkaW5nOiAwLjhlbTsKCXRyYW5zaXRpb246IDAuM3M7CglsZXR0ZXItc3BhY2luZzogMXB4OwoJY29sb3I6aW5oZXJpdDsKCWJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5OwoJYm9yZGVyLXJhZGl1czogNHB4OwogICAgb3V0bGluZTogbm9uZTsKfQoKLm5vcHdvcC1zZWFyY2gtYm94IGlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyB7Cglib3JkZXI6IDFweCBzb2xpZCAjNWY1ZjVmOwoJb3V0bGluZTogbm9uZTsKCWJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHJnYmEoMTA1LCAxMDUsIDEwNSwgMC41KTsKfQoKCi5ub3B3b3Atc2VhcmNoLWJveCBpbnB1dFt0eXBlPSd0ZXh0J106aG92ZXIgewogICAgYmFja2dyb3VuZDogI2YwZjBmMDsKfQoKLm5vcHdvcC1zZWFyY2gtYm94IGlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIgewogICAgY29sb3I6ICM3NTc1NzU7Cn0KCgoKLm5vcHdvcC1zZWFyY2gtYm94IGJ1dHRvbiB7CiAgICBoZWlnaHQ6IDEwcHg7Cn0KCi8qIGJlbG93IHRoaXMgbGluZSBpcyBmb3IgYXV0b2NvbXBsZXRlLmpzICovCi5hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMgewogICAgdGV4dC1hbGlnbjogbGVmdDsgCiAgICBjdXJzb3I6IGRlZmF1bHQ7IAogICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgCiAgICBib3JkZXItdG9wOiAwOyAKICAgIGJhY2tncm91bmQ6ICNmZmY7IAogICAgYm94LXNoYWRvdzogLTFweCAxcHggM3B4IHJnYmEoMCwwLDAsLjEpOwoKICAgIC8qIGNvcmUgc3R5bGVzIHNob3VsZCBub3QgYmUgY2hhbmdlZCAqLwogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgZGlzcGxheTogbm9uZTsgCiAgICB6LWluZGV4OiA5OTk5OwogICAgbWF4LWhlaWdodDogMjU0cHg7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgb3ZlcmZsb3cteTogYXV0bzsKICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Cn0KLmF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uIHsgCiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBwYWRkaW5nOiAwIC42ZW07CiAgICBsaW5lLWhlaWdodDogMjNweDsKICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICBmb250LXNpemU6IDEuMDJlbTsKICAgIGNvbG9yOiAjNGY0ZjRmOyAKfQouYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb24gYiB7CiAgICBmb250LXdlaWdodDogYm9sZGVyOwogICAgY29sb3I6ICMwMDAwMDA7Cn0KLmF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uLnNlbGVjdGVkIHsKICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7IAp9Cgo=\");\n\n//# sourceURL=webpack:///./nopwop-search-box.css?");

/***/ }),

/***/ "../common/script-traverser.js":
/*!*************************************!*\
  !*** ../common/script-traverser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScriptTraverser\": () => (/* binding */ ScriptTraverser)\n/* harmony export */ });\n//@ts-check\nclass PageCtx {\n  constructor(scriptName) {\n    this.scriptName = scriptName\n  }\n\n  searchScriptTag(callback) {\n    let _self = this\n    let list = document.querySelectorAll('script')\n    list.forEach((i) => {\n      let a = i.getAttribute('src')\n      if (a && a.indexOf(_self.scriptName) != -1) {\n        callback && callback(i)\n      }\n    })\n    return\n  }\n}\n\n/**\n* [description]\n*   ScriptTraverser() will traverse the page and find specified script tag in HTML\n*   and it returns object which contains init() func.\n*   init() takes callback function with 'context' which is unique in the page \n*   \n*   Usage is something like below:\n*\n*     let ctx = ScriptTraverser('foo-bar', 'FooBar')\n*          .init((ctx) => {...})\n*          .forEach((traversed) => {...})\n*\n*   Finally,forEach() will receive travesed object which has 'element' and 'args' property array\n* \n* @param {String} scriptName script name to search (it shouldn't include '.js' or 'min.js')\n* @param {String} contextName property name which is assigned to global window object by this function \n  so that to avoid duplicated execution of main logic\n*\n*/\n//@ts-check\nconst ScriptTraverser = function(scriptName, contextName) {\n  \n  function get_args_array(elm) {\n    let args = {}\n    let attr = elm.attributes\n    for (let i=0; i < attr.length; i++) { args[attr[i].name] = attr[i].value } \n    return args\n  }\n\n  return {\n    init : function(initCallback) {\n      let ctx = null\n      if (!(contextName in window)) {\n        ctx = new PageCtx(scriptName)\n      }\n\n      return {\n        forEach: function(eachCallback) {\n          if (ctx) { \n            window.addEventListener('DOMContentLoaded', (event) => {\n              \n              initCallback && initCallback(ctx)\n\n              ctx.searchScriptTag(function(scrElem) {\n                let obj = {\n                  args: get_args_array(scrElem), \n                  element: scrElem, \n                  insert: (elm) => {\n                    scrElem.parentElement.insertBefore(elm, scrElem)\n                  },\n                }\n                eachCallback && eachCallback(obj)\n              })\n            })\n            window[contextName] = ctx\n          }\n          return window[contextName]\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///../common/script-traverser.js?");

/***/ }),

/***/ "./nopwop-search-box.js":
/*!******************************!*\
  !*** ./nopwop-search-box.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_script_traverser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/script-traverser */ \"../common/script-traverser.js\");\n/* harmony import */ var _nopwop_search_box_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nopwop-search-box.css */ \"./nopwop-search-box.css\");\n/* harmony import */ var _raw_loader_lib_JavaScript_autoComplete_master_auto_complete_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!raw-loader!../../lib/JavaScript-autoComplete-master/auto-complete.min.js */ \"../../node_modules/raw-loader/dist/cjs.js!../../lib/JavaScript-autoComplete-master/auto-complete.min.js\");\n\n\n\n\n(function() {\n\n  // const autocomplete_js_url = '/nopwop/lib/JavaScript-autoComplete-master/auto-complete.js'\n  const autocomplete_js_url = URL.createObjectURL(new Blob([_raw_loader_lib_JavaScript_autoComplete_master_auto_complete_min_js__WEBPACK_IMPORTED_MODULE_2__.default], {type: 'text/javascript'}))\n\n  const per_page = 30\n  const d = document\n  const className_search_box = 'nopwop-search-box-input'\n\n  let ctx = (0,_common_script_traverser__WEBPACK_IMPORTED_MODULE_0__.ScriptTraverser)('nopwop-search-box', 'nopwopSearchBox')\n  .init((ctx) => {\n    loadAutocomplete(() => {\n      let elements = d.querySelectorAll(`.${className_search_box}`)\n      elements.forEach(el => { attachAutocomplete(el) })\n    })\n  })\n  .forEach((s) => {\n    createContainerElement(s.element)\n  })\n\n  function attachAutocomplete(element) {\n    // console.log('## attachAutocomplete ##')\n    new autoComplete({\n      selector: element,\n      minChars: 2,\n      source: function(term, suggest) {\n        if (term.length < 1) { return [] }\n        let url = `/wp-json/wp/v2/search?search=${term}&per_page=${per_page}`\n        fetch(url).then((r)=>r.json()).then((results) => {\n          suggest(results)\n        })\n      },\n      renderItem: function (item, search){\n        search = search.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n        var re = new RegExp(\"(\" + search.split(' ').join('|') + \")\", \"gi\");\n        return `<div class=\"autocomplete-suggestion\" data-val=\"${search}\" target-url=\"${item.url}\">${item.title.replace(re, \"<b>$1</b>\")}</div>`\n      },\n      onSelect: function(event, term, item) {\n        let target_url = item.getAttribute('target-url')\n        if (target_url) location.href = target_url\n      },\n    })\n  }\n\n  function loadAutocomplete(onLoadCompleted) {\n    if ('autoComplete' in window) return \n\n    let url_css = _nopwop_search_box_css__WEBPACK_IMPORTED_MODULE_1__.default\n    let url_js  = autocomplete_js_url\n\n    let h = d.getElementsByTagName('head')\n    if (0 < h.length) {\n        h = h[0]\n        let c = d.createElement('link')\n        c.setAttribute('rel', 'stylesheet')\n        c.setAttribute('href', url_css)\n        h.appendChild(c)\n\n        let s = d.createElement('script')\n        s.setAttribute('src', url_js)\n        h.appendChild(s)\n        s.addEventListener('load', onLoadCompleted)\n    }\n  }\n\n  function createBoxElement() {\n\n    let div = d.createElement('div')\n    div.classList.add('nopwop-search-box')\n\n    let input = d.createElement('input')\n    input.classList.add(className_search_box)\n    input.type = 'text'\n    input.setAttribute('placeholder', 'サイト内検索')\n\n    input.addEventListener('keydown', (e) => {\n      const key = e.code\n      // enter key\n      if (key == 'Enter' && input.value != '') {\n        let action = '/?s=' + input.value\n        location.href = action  \n      }\n    })\n      \n    div.appendChild(input)\n    return div\n  }\n\n  function createContainerElement(scr) {\n    let top = createBoxElement()\n\n    scr.parentElement.insertBefore(top, scr)\n  }\n\n})(undefined)\n\n\n\n//# sourceURL=webpack:///./nopwop-search-box.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./nopwop-search-box.js");
/******/ 	
/******/ })()
;