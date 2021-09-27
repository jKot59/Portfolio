/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/categoties.js":
/*!**********************************!*\
  !*** ./js/modules/categoties.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ categories)
/* harmony export */ });
function categories () {
    const parent = document.querySelector('.categories'),
          title = document.querySelectorAll('.categories__title'),
          element = document.querySelectorAll('.categories__element');


    element.forEach( item => {
        item.classList.add('hide');
    })
    parent.addEventListener('click', e => {
        title.forEach( (item, i) => {
            if (e.target === item) {
                element[i].classList.toggle('hide');
            }

        })
    })
}

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
function slider ({mainBlockSelector, slidersSelector, frameSelector, dotsSelector}) {
    // получаем элементы
    const slideShow = document.querySelector(mainBlockSelector),
          slide = document.querySelectorAll(slidersSelector),
          frame = document.querySelector(frameSelector),
          dots = document.querySelector(dotsSelector);
    //считаем слайды
    let countSlide = 0,
    //устанавливаем начальное положение слайдов
        offset = 0,
    // получаем ширину окна через которое будем смотреть слайды
        width = window.getComputedStyle(frame).width;
    //слушаем клики по слайдеру
    slideShow.addEventListener('click', e => {
        //когда кликнули на стрелку с лева
        if(e.target.matches('[alt="rowL"]')) {
            swypeToLeft();
        }
        // когда кликнули на стрелку с права
        if(e.target.matches('[alt="rowR"]')) {
            swypeToRight();
        }
    });

    // точки

    createDots(slide.length);
    activateDot();
    // слушаем клики по родителю точек
    dots.addEventListener('click', e => {
        //когда кликнули на точку в родителе
        if(e.target.matches('button')) {
            //перебираем массив с точками
            activateDot().forEach( (item, i) => {
                // у всех точек убираем активность
                item.classList.remove('active');
                // на кликнутую добавляем класс активности
                if(e.target == item) {
                    item.classList.add('active');
                    // записываем в номер точки в номер слайда
                    countSlide = i - 1;
                    // открываем слайд соответствующий номеру точки
                    swypeToRight ();
                }
            });
        }
    });

    /* SLIDER FUNCTIONS */

    // что делаем при нажатии на стрелку влево
    function swypeToLeft () {
        // если открыт слайд 0
        if(countSlide == 0) {
            // задаем номер последнего слайда
            countSlide = slide.length - 1;
            // устанавливаем величину смещения слайдеров
            offset = parseInt(width) * (countSlide)
            // и смещаем их
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            //активируем ту точку, номер какого слайда открыт
            activateDot(countSlide);
        } else {
            // если слайдер не первый, то декриментируем счетчик слайдеров
            countSlide--;
            //так же устанавливаем смещение и смещаем
            offset = parseInt(width) * (countSlide)
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            // активируем точку равную номеру открытого слайда
            activateDot(countSlide);
        }
    }
    // что делаем при нажатии на стрелку вправо
    function swypeToRight () {
        // если открыт последний слайд
        if(countSlide == slide.length - 1) {
            // задаем номер первого слайда
            countSlide = 0;
            // устанавливаем величину смещения слайдов
            offset = parseInt(width) * (countSlide);
            // и смещаем их
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            //активируем ту точку, номер какого слайда открыт
            activateDot(countSlide);
        } else {
            countSlide++;
            offset = parseInt(width) * (countSlide)
            slide.forEach( item => {
                item.style.transform = `translateX(-${offset}px)`;
            });
            activateDot(countSlide);
        }
    }
    // создаем точки. количество равно количеству слайдов
    function createDots (quantity) {
        for (let i = 0; i < quantity; i++) {
            const newDot = document.createElement('button');
            dots.append(newDot);
        }
    }
    // активируем точку
    function activateDot(chosenDot = 0) {
        //выбрать все точки
        const allDots = document.querySelectorAll('.slideShow__dots button');
        //перебрать
        allDots.forEach( (item, i) => {
            item.classList.remove('active');
            //активировать точку равную номеру открытого слайда
            if(chosenDot === i) {
                item.classList.add('active');
            }
        });
        return allDots;
    }
}

/***/ }),

/***/ "./scss/products/style1200.scss":
/*!**************************************!*\
  !*** ./scss/products/style1200.scss ***!
  \**************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '../../../fonts/HelveticaNeueLTStd-Lt.otf' in 'C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\scss\\products'\n    at finishWithoutResolve (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\Resolver.js:293:18)\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\Resolver.js:362:15\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:87:43\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at processResult (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\webpack\\lib\\NormalModule.js:703:19)\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\webpack\\lib\\NormalModule.js:809:5\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\Users\\jkot\\Documents\\Git\\Portfolio\\Look-shop\\node_modules\\css-loader\\dist\\index.js:155:5)\n    at processTicksAndRejections (internal/process/task_queues.js:82:5)");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./js/products.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_categoties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/categoties */ "./js/modules/categoties.js");
/* harmony import */ var _scss_products_style1200_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/products/style1200.scss */ "./scss/products/style1200.scss");
/* harmony import */ var _scss_products_style1200_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_products_style1200_scss__WEBPACK_IMPORTED_MODULE_2__);




'use strict';

window.addEventListener('DOMContentLoaded', () => {

(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__.default)({
    mainBlockSelector: '.slideShow',
    slidersSelector: '.slide',
    frameSelector: '.slideShowFrame',
    dotsSelector: '.slideShow__dots'
});

(0,_modules_categoties__WEBPACK_IMPORTED_MODULE_1__.default)();

  
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map