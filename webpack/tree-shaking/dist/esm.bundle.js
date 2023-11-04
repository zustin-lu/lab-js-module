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

/***/ "./tree-shaking/esm/functions.js":
/*!***************************************!*\
  !*** ./tree-shaking/esm/functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smallFunc: () => (/* binding */ smallFunc)\n/* harmony export */ });\n/* unused harmony export largeFunc */\nfunction smallFunc() {\n  console.log('Small func content');\n}\n\nfunction largeFunc() {\n  console.log('Large function content 1');\n  console.log('Large function content 2');\n  console.log('Large function content 3');\n  console.log('Large function content 4');\n  console.log('Large function content 5');\n  console.log('Large function content 6');\n  console.log('Large function content 7');\n  console.log('Large function content 8');\n  console.log('Large function content 9');\n  console.log('Large function content 10');\n  console.log('Large function content 11');\n  console.log('Large function content 12');\n  console.log('Large function content 13');\n  console.log('Large function content 14');\n  console.log('Large function content 15');\n  console.log('Large function content 16');\n  console.log('Large function content 17');\n  console.log('Large function content 18');\n  console.log('Large function content 19');\n  console.log('Large function content 20');\n  console.log('Large function content 21');\n  console.log('Large function content 22');\n  console.log('Large function content 23');\n  console.log('Large function content 24');\n  console.log('Large function content 25');\n  console.log('Large function content 26');\n  console.log('Large function content 27');\n  console.log('Large function content 28');\n  console.log('Large function content 29');\n  console.log('Large function content 30');\n  console.log('Large function content 31');\n  console.log('Large function content 32');\n  console.log('Large function content 33');\n  console.log('Large function content 34');\n  console.log('Large function content 35');\n  console.log('Large function content 36');\n  console.log('Large function content 37');\n  console.log('Large function content 38');\n  console.log('Large function content 39');\n  console.log('Large function content 40');\n  console.log('Large function content 41');\n  console.log('Large function content 42');\n  console.log('Large function content 43');\n  console.log('Large function content 44');\n  console.log('Large function content 45');\n  console.log('Large function content 46');\n  console.log('Large function content 47');\n  console.log('Large function content 48');\n  console.log('Large function content 49');\n  console.log('Large function content 50');\n  console.log('Large function content 51');\n  console.log('Large function content 52');\n  console.log('Large function content 53');\n  console.log('Large function content 54');\n  console.log('Large function content 55');\n  console.log('Large function content 56');\n  console.log('Large function content 57');\n  console.log('Large function content 58');\n  console.log('Large function content 59');\n  console.log('Large function content 60');\n  console.log('Large function content 61');\n  console.log('Large function content 62');\n  console.log('Large function content 63');\n  console.log('Large function content 64');\n  console.log('Large function content 65');\n  console.log('Large function content 66');\n  console.log('Large function content 67');\n  console.log('Large function content 68');\n  console.log('Large function content 69');\n  console.log('Large function content 70');\n  console.log('Large function content 71');\n  console.log('Large function content 72');\n  console.log('Large function content 73');\n  console.log('Large function content 74');\n  console.log('Large function content 75');\n  console.log('Large function content 76');\n  console.log('Large function content 77');\n  console.log('Large function content 78');\n  console.log('Large function content 79');\n  console.log('Large function content 80');\n  console.log('Large function content 81');\n  console.log('Large function content 82');\n  console.log('Large function content 83');\n  console.log('Large function content 84');\n  console.log('Large function content 85');\n  console.log('Large function content 86');\n  console.log('Large function content 87');\n  console.log('Large function content 88');\n  console.log('Large function content 89');\n  console.log('Large function content 90');\n}\n\n\n//# sourceURL=webpack://webpack-bundler/./tree-shaking/esm/functions.js?");

/***/ }),

/***/ "./tree-shaking/esm/index.js":
/*!***********************************!*\
  !*** ./tree-shaking/esm/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./tree-shaking/esm/functions.js\");\n\n\n(0,_functions__WEBPACK_IMPORTED_MODULE_0__.smallFunc)();\n\n\n//# sourceURL=webpack://webpack-bundler/./tree-shaking/esm/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./tree-shaking/esm/index.js");
/******/ 	
/******/ })()
;