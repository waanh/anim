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

/***/ "./src/Collapse.js":
/*!*************************!*\
  !*** ./src/Collapse.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Collapse)\n/* harmony export */ });\nclass Collapse {\n  constructor(selector) {\n    console.log(\"Collapse инициализирован\");\n\n    this.container = document.querySelector(selector);\n    if (!this.container) {\n      console.error(`Элемент ${selector} не найден!`);\n      return;\n    }\n\n    this.button = this.container.querySelector(\".collapse-btn\");\n    this.content = this.container.querySelector(\".collapse-content\");\n\n    if (!this.button || !this.content) {\n      console.error(\"Кнопка или контент не найдены в контейнере!\");\n      return;\n    }\n\n    this.button.removeEventListener(\"click\", this.toggle);\n    this.toggle = this.toggle.bind(this);\n    this.button.addEventListener(\"click\", this.toggle);\n  }\n\n  toggle() {\n    console.log(\"toggle() вызван!\");\n\n    if (this.content.style.maxHeight && this.content.style.maxHeight !== \"0px\") {\n      console.log(\"Скрываем контент\");\n      this.content.style.maxHeight = \"0px\";\n    } else {\n      console.log(\"Разворачиваем контент\");\n      this.content.style.maxHeight = this.content.scrollHeight + \"px\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack://anim/./src/Collapse.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse */ \"./src/Collapse.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\nif (!window.collapseInitialized) {\n  window.collapseInitialized = true;\n\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    console.log(\"DOMContentLoaded сработал!\");\n    new _Collapse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".collapse-container\");\n  });\n} else {\n  console.warn(\"Collapse уже был инициализирован!\");\n}\n\n\n\n//# sourceURL=webpack://anim/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://anim/./src/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;