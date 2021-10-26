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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_sliderSolutions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderSolutions */ \"./src/js/modules/sliderSolutions.js\");\n\r\n\r\n\r\n\r\nif(window.innerWidth > 575) {\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2000)\r\n}\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_sliderSolutions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://uber/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/lazyload.js":
/*!************************************!*\
  !*** ./src/js/modules/lazyload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction lazyload (item) {\r\n    if (item.getAttribute('data-src')) {\r\n        item.setAttribute('src', item.getAttribute('data-src'))\r\n        item.removeAttribute('data-src')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyload);\n\n//# sourceURL=webpack://uber/./src/js/modules/lazyload.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu () {\r\n    const burger = document.querySelector('.burger'),\r\n          menu = document.querySelector('.menu'),\r\n          cross = document.querySelector('.menu__close'),\r\n          overlay = document.querySelector('.menu__overlay')\r\n\r\n\r\n    toggleMenu(burger)\r\n    toggleMenu(cross)\r\n    toggleMenu(overlay)\r\n\r\n    function toggleMenu (btn) {\r\n        btn.addEventListener('click', () => {\r\n            menu.classList.toggle('menu_active')\r\n        })\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://uber/./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider (timer) {\r\n    const slider = document.querySelector('.promo__slider'),\r\n          dots = slider.querySelectorAll('.promo__slider-dots li'),\r\n          leftArrow = slider.querySelector('.left-arrow'),\r\n          rightArrow = slider.querySelector('.right-arrow'),\r\n          slides = document.querySelectorAll('.promo__slider-window li')\r\n\r\n\r\n    let currentSlide = 0\r\n    let intervalId\r\n\r\n    autoToggle(timer)\r\n\r\n    // переключение сладов при клике по точкам\r\n    dots.forEach( (dot, i) => {\r\n        dot.addEventListener('click', (e) => {\r\n            if(e.target === dots[i]) {\r\n                currentSlide = i\r\n                showSLide(currentSlide)\r\n                clearInterval(intervalId)\r\n            }\r\n        })\r\n    })\r\n\r\n    // переключение слайдов при клике по стрелкам\r\n    leftArrow.addEventListener('click', () => {\r\n        if(currentSlide > 0) {\r\n            --currentSlide\r\n            showSLide(currentSlide)\r\n            clearInterval(intervalId)\r\n        }\r\n        \r\n    })\r\n    rightArrow.addEventListener('click', () => {\r\n        if(currentSlide < slides.length - 1) {\r\n            ++currentSlide\r\n            showSLide(currentSlide)\r\n            clearInterval(intervalId)\r\n        }\r\n    })\r\n\r\n    function autoToggle (time) {\r\n        intervalId = setInterval(() => {\r\n            currentSlide < slides.length - 1 ? ++currentSlide : currentSlide = 0\r\n            showSLide(currentSlide)\r\n        }, time)\r\n    }\r\n\r\n    function showSLide (slideNumber) {\r\n        dots.forEach( (dot, i) => {\r\n            dot.className = ''  // делаем все точки неактивные\r\n            if(slideNumber == i) {\r\n                slides[i].classList.add('active')\r\n                dots[i].classList.add('active') // активируем точку\r\n            } else {\r\n                slides[i].classList.remove('active')\r\n            }\r\n        })\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://uber/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/sliderSolutions.js":
/*!*******************************************!*\
  !*** ./src/js/modules/sliderSolutions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload */ \"./src/js/modules/lazyload.js\");\n\r\n\r\nfunction sliderSolutions () {\r\n    const leftArrow = document.querySelector('.solutions__slider .left-arrow'),\r\n          rightArrow = document.querySelector('.solutions__slider .right-arrow'),\r\n          items = document.querySelectorAll('.solutions__slider-window img'),\r\n          links = document.querySelectorAll('.solutions__navigation a')\r\n\r\n\r\n    let currentSlide = 0\r\n\r\n    links.forEach( (link, i) => {\r\n        link.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            if(e.target == links[i]) {\r\n                currentSlide = i\r\n                changeTabColor()\r\n                showSlide()\r\n            }\r\n        })\r\n    })\r\n\r\n    leftArrow.addEventListener('click', () => {\r\n        if(currentSlide > 0) {\r\n            --currentSlide\r\n            showSlide()\r\n            changeTabColor()\r\n        } else {\r\n            currentSlide = items.length - 1\r\n            showSlide()\r\n            changeTabColor()\r\n        }\r\n    })\r\n\r\n    rightArrow.addEventListener('click', () => {\r\n        if(currentSlide < items.length - 1) {\r\n            ++currentSlide\r\n            showSlide()\r\n            changeTabColor()\r\n        } else {\r\n            currentSlide = 0\r\n            showSlide()\r\n            changeTabColor()\r\n        }\r\n    })\r\n\r\n    function changeTabColor () {\r\n        links.forEach( link => link.style.color = 'white')\r\n        links[currentSlide].style.color = 'var(--main-color)'\r\n    }\r\n    function showSlide () {\r\n        items.forEach( (item, i) => {\r\n            if(i == currentSlide) {\r\n                item.classList.add('active')\r\n                ;(0,_lazyload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item)\r\n            } else {\r\n                item.classList.remove('active')\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderSolutions);\n\n//# sourceURL=webpack://uber/./src/js/modules/sliderSolutions.js?");

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