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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_abilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/abilities */ \"./src/js/modules/abilities.js\");\n/* harmony import */ var _modules_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mailer */ \"./src/js/modules/mailer.js\");\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_abilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_mailer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://uber/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/abilities.js":
/*!*************************************!*\
  !*** ./src/js/modules/abilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// checking for percent value dont be more than 100% and less than 0%\r\n// and dimention have to has simbol %\r\n\r\nfunction abilities () {\r\n    const dimentions = document.querySelectorAll('.skills__level-header-percent'),\r\n          levels = document.querySelectorAll('.skills__level-scale-current')\r\n\r\n    dimentions.forEach( (item, i) => {\r\n        let dimention = item.innerText\r\n        let dimentionRegExp = dimention.match(/[\\d]{0,3}\\%/g)\r\n\r\n        if(dimentionRegExp !== null) {\r\n            let percentValue = parseInt(dimentionRegExp.join(''))\r\n            if(percentValue <= 100 && percentValue >= 0)  levels[i].style.width = dimention\r\n        } else {\r\n            levels[i].style.width = 0\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (abilities);\n\n//# sourceURL=webpack://uber/./src/js/modules/abilities.js?");

/***/ }),

/***/ "./src/js/modules/mailer.js":
/*!**********************************!*\
  !*** ./src/js/modules/mailer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postMessage */ \"./src/js/modules/postMessage.js\");\n/* harmony import */ var _showMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showMessage */ \"./src/js/modules/showMessage.js\");\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner */ \"./src/js/modules/spinner.js\");\n\r\n\r\n\r\n\r\nfunction mailer () {\r\n    const form = document.querySelector('.contacts__form'),\r\n          thanks = document.getElementById('thanks'),\r\n          cross = document.querySelectorAll('.modal__close'),\r\n          error = document.getElementById('error')\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n\r\n        ;(0,_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('show')\r\n\r\n        ;(0,_postMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('./mailer/smart.php', form)\r\n        .then(() => {\r\n            ;(0,_showMessage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(thanks, cross[0])\r\n            form.reset()\r\n        })\r\n        .catch(() => {\r\n            (0,_showMessage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(error, cross[1])\r\n        })\r\n        .finally(() => (0,_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('hide'))\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mailer);\n\n//# sourceURL=webpack://uber/./src/js/modules/mailer.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu () {\r\n    const burger = document.querySelector('.burger'),\r\n          menu = document.querySelector('.menu'),\r\n          cross = document.querySelector('.menu__close'),\r\n          overlay = document.querySelector('.menu__overlay')\r\n\r\n\r\n    toggleMenu(burger)\r\n    toggleMenu(cross)\r\n    toggleMenu(overlay)\r\n\r\n    function toggleMenu (btn) {\r\n        btn.addEventListener('click', () => {\r\n            menu.classList.toggle('menu_active')\r\n        })\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://uber/./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/modules/postMessage.js":
/*!***************************************!*\
  !*** ./src/js/modules/postMessage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function postMessage (url, form) {\r\n    const res = await fetch(url, {\r\n        method: 'POST',\r\n        body: new FormData(form)\r\n    })\r\n\r\n    if(!res.ok) {\r\n        throw new Error(`Couldn't fetch ${url}, status ${res.status}`)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postMessage);\n\n//# sourceURL=webpack://uber/./src/js/modules/postMessage.js?");

/***/ }),

/***/ "./src/js/modules/showMessage.js":
/*!***************************************!*\
  !*** ./src/js/modules/showMessage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showMessage (modal, cross) {\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    overlay.style.display = 'block'\r\n    modal.style.display = 'block'\r\n\r\n    cross.addEventListener('click', () => {\r\n        overlay.style.display = \"none\"\r\n        modal.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMessage);\n\n//# sourceURL=webpack://uber/./src/js/modules/showMessage.js?");

/***/ }),

/***/ "./src/js/modules/spinner.js":
/*!***********************************!*\
  !*** ./src/js/modules/spinner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction spinner (event) {\r\n    const spinner = document.querySelector('.spinner-border')\r\n\r\n    event === 'show' ? spinner.style.display = 'block' : spinner.style.display = 'none'\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spinner);\n\n//# sourceURL=webpack://uber/./src/js/modules/spinner.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;