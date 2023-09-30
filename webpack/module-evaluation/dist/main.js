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

/***/ "./test-module-evaluation/src/core.js":
/*!********************************************!*\
  !*** ./test-module-evaluation/src/core.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\nconst config = {};\n\nconsole.log('core module evaluated');\n\n\n//# sourceURL=webpack://webpack-bundler/./test-module-evaluation/src/core.js?");

/***/ }),

/***/ "./test-module-evaluation/src/index.js":
/*!*********************************************!*\
  !*** ./test-module-evaluation/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-1 */ \"./test-module-evaluation/src/module-1.js\");\n/* harmony import */ var _module_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-2 */ \"./test-module-evaluation/src/module-2.js\");\n\n\n\n\n//# sourceURL=webpack://webpack-bundler/./test-module-evaluation/src/index.js?");

/***/ }),

/***/ "./test-module-evaluation/src/module-1.js":
/*!************************************************!*\
  !*** ./test-module-evaluation/src/module-1.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./test-module-evaluation/src/core.js\");\n\n\nconsole.log('Config check from module 1', JSON.stringify(_core__WEBPACK_IMPORTED_MODULE_0__.config));\n\n_core__WEBPACK_IMPORTED_MODULE_0__.config.user = 'Justin';\n\nconsole.log('Module 1 updated config', JSON.stringify(_core__WEBPACK_IMPORTED_MODULE_0__.config));\n\n\n//# sourceURL=webpack://webpack-bundler/./test-module-evaluation/src/module-1.js?");

/***/ }),

/***/ "./test-module-evaluation/src/module-2.js":
/*!************************************************!*\
  !*** ./test-module-evaluation/src/module-2.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./test-module-evaluation/src/core.js\");\n\n\nconsole.log('Module 2 check config', JSON.stringify(_core__WEBPACK_IMPORTED_MODULE_0__.config));\n\n\n//# sourceURL=webpack://webpack-bundler/./test-module-evaluation/src/module-2.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./test-module-evaluation/src/index.js");
/******/ 	
/******/ })()
;