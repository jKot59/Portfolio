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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_card_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/card-info */ \"./src/js/modules/card-info.js\");\n/* harmony import */ var _modules_tab_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-menu */ \"./src/js/modules/tab-menu.js\");\n\r\n\r\n\r\n\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_card_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_tab_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://uber/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/card-info.js":
/*!*************************************!*\
  !*** ./src/js/modules/card-info.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cardInfo () {\r\n    let linkMore = document.querySelectorAll('.catalog-item__link')\r\n    let linkBack = document.querySelectorAll('.catalog-item__link-back')\r\n    let content = document.querySelectorAll('.catalog-item__content')\r\n    let list = document.querySelectorAll('.catalog-item__list')\r\n    \r\n\r\n    setMoreListeners(linkMore)\r\n    setMoreListeners(linkBack)\r\n\r\n    function setMoreListeners (button) {\r\n        button.forEach( (item, i) => {\r\n            item.addEventListener('click', button => toggleCard(button, i))\r\n        })\r\n    }\r\n\r\n    function toggleCard (button, i) {\r\n        button.preventDefault()\r\n        list[i].classList.toggle('catalog-item__list_active')\r\n        content[i].classList.toggle('catalog-item__content_active')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardInfo);\n\n//# sourceURL=webpack://uber/./src/js/modules/card-info.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction moveSlider () {\r\n    const leftArrow = document.querySelector('.carousel__btn_left'),\r\n          rightArrow = document.querySelector('.carousel__btn_right'),\r\n          sliderWindow = document.querySelector('.carousel__sliderWindow'),\r\n          slider = document.querySelector('.carousel__inner'),\r\n          carouselDots = document.querySelector('.carousel__dots')\r\n\r\n\r\n    let positionOfSlider = 0\r\n    let sliderWidth = slider.offsetWidth\r\n    // минус 1 потому что первый слайдер начинается с 0, а не с 750px. Т.е общая\r\n    // ширина 1500 (750*2), а не 2250\r\n    let countOfSliders = sliderWindow.querySelectorAll('div').length - 1\r\n\r\n    createDots()\r\n    makeAdotActive()\r\n    setArrowListener(leftArrow, switchSliderLeft)\r\n    setArrowListener(rightArrow, switchSliderRight)\r\n    // ставим сразу инлайн стиль для позиции, чтобы первое переключение было плавное\r\n    sliderWindow.style.left=`${positionOfSlider}px`\r\n\r\n    function setArrowListener (arrow, event) {\r\n        arrow.addEventListener('click', event)\r\n    }\r\n\r\n    function createDots() {\r\n        for (let i = 0; i < countOfSliders + 1; i++) {\r\n            let dot = document.createElement('div')\r\n            dot.classList.add('carousel__dot')\r\n            dot.addEventListener('click', () => {\r\n                positionOfSlider = i * -sliderWidth\r\n                sliderWindow.style.left=`${positionOfSlider}px`\r\n                makeAdotActive()\r\n            })\r\n            carouselDots.appendChild(dot)\r\n\r\n        }\r\n    }\r\n\r\n    function switchSliderLeft() {\r\n        if(positionOfSlider == 0) {\r\n            positionOfSlider = -countOfSliders * sliderWidth\r\n        } else {\r\n            positionOfSlider += sliderWidth\r\n        }\r\n        sliderWindow.style.left=`${positionOfSlider}px`\r\n        makeAdotActive()\r\n\r\n    }\r\n\r\n    function switchSliderRight() {\r\n        if(Math.abs(positionOfSlider) == countOfSliders * sliderWidth) {\r\n            positionOfSlider = 0\r\n        } else {\r\n            positionOfSlider -= sliderWidth\r\n        }\r\n        sliderWindow.style.left=`${positionOfSlider}px`\r\n        makeAdotActive()\r\n\r\n    }\r\n\r\n    function makeAdotActive() {\r\n        let numberOfOpenSlide = Math.abs(positionOfSlider / sliderWidth)\r\n        let carouselDot = document.querySelectorAll('.carousel__dot')\r\n\r\n        carouselDot.forEach( dot => dot.classList.remove('carousel__dot_active'))\r\n        carouselDot[numberOfOpenSlide].classList.add('carousel__dot_active')\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveSlider);\n\n//# sourceURL=webpack://uber/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tab-menu.js":
/*!************************************!*\
  !*** ./src/js/modules/tab-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabMenu () {\r\n    const tabs = document.querySelectorAll('.catalog__content'),\r\n          btns = document.querySelector('.catalog__tabs'),\r\n          btns2 = document.querySelectorAll('.catalog__tab div'),\r\n          btns3 = document.querySelectorAll('.catalog__tab')\r\n\r\n\r\n    btns3[0].classList.add('catalog__tab_active')\r\n    tabs[0].classList.add('catalog__content_active')\r\n\r\n    btns.addEventListener('click', (e) => {\r\n        if(e.target.matches('div')) {\r\n            console.log('here')\r\n            btns2.forEach( (btn, i) => {\r\n                if(e.target == btn) {\r\n                    btns3.forEach( tab => tab.classList.remove('catalog__tab_active'))\r\n                    tabs.forEach( tab => tab.classList.remove('catalog__content_active'))\r\n                    tabs[i].classList.add('catalog__content_active')\r\n                    btns3[i].classList.add('catalog__tab_active')\r\n\r\n                }\r\n            })\r\n\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabMenu);\n\n//# sourceURL=webpack://uber/./src/js/modules/tab-menu.js?");

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