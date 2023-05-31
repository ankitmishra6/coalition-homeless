/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/custom.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");


// for header search icon
let overlaySearchMenu = (function () {
    let DOM = {}
    function handleOverlayClose(e) {
        e.preventDefault();
        DOM.overlay.style.display = "none";
    }
    function handleOverlayOpen(e) {
        e.preventDefault();
        DOM.overlay.style.display = "block";
    }
    function eventListeners() {
        DOM.overlayOpenTrigger.addEventListener('click', handleOverlayOpen);
        DOM.overlayCloseTrigger.addEventListener('click', handleOverlayClose);
    }
    function cacheDOM() {
        DOM.overlay = document.getElementById("myOverlay");
        DOM.overlayOpenTrigger = document.querySelector('.openBtn');
        DOM.overlayCloseTrigger = document.querySelector('.closebtn');
    }
    //initializes - outside source accesses
    function init() {
        cacheDOM();
        eventListeners();
    }
    return {
        init
    }
})();


//for mobile navigation hamburger icon
let mobileNavigation = (function () {
    let DOM = {};

    function menuActive(e) {
        e.preventDefault();
        DOM.mobNavOverlay.classList.toggle('active');
    }
    function eventListeners() {
        DOM.hamburger.addEventListener('click', menuActive);
    }
    function cacheDOM() {
        DOM.mobNavOverlay = document.querySelector('.mob-nav-menu');
        DOM.hamburger = document.getElementById('icon');
    }
    // execute the mobmenu function
    function init() {
        cacheDOM();
        eventListeners();
    }
    return {
        init
    }
})();


//for sub menu in mobile version
let mobSubmenuDropdown = (function () {
    let DOM = {};
    let blockName = 'mob-sub-menu'

    function mobSubMenuOpen(e) {
        e.preventDefault();
        //e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.
        let parentElem = e.currentTarget.parentElement;
        console.log(parentElem)
        let subMenu = parentElem.querySelector('.mob-sub-menu')
        subMenu.classList.add(`${blockName}--show`)
    }

    function cacheDOM() {
        DOM.mobDropdownLinks = document.querySelectorAll('.mob-nav-links');
    }
    function eventListeners() {
        DOM.mobDropdownLinks.forEach((dropDownTrigger, index) => {
            dropDownTrigger.addEventListener('click', mobSubMenuOpen)
        });
    }
    function init() {
        cacheDOM();
        eventListeners();
    }
    return {
        init: init,
    };
})();



//fpr popop model
let popop = (function () {
    let DOM = {};
    let modalShow = 'popop__gallery'

    function openModal(e) {
        e.preventDefault();
        DOM.popop.classList.add(`${modalShow}--show`);
    }
    function closeModal(e) {
        e.preventDefault();
        DOM.popop.classList.remove(`${modalShow}--show`);
    }
    // Click outside and close
    function outsideClick(e) {
        if (e.target === DOM.popop) {
            DOM.popop.classList.remove(`${modalShow}--show`);
        }
    }

    function cacheDOM() {
        DOM.popop = document.querySelector('.popop__gallery');
        DOM.modalBtn = document.getElementById('modalBtn');
        DOM.modelCloseBtn = document.querySelector('.popopclosebtn');
    }
    function eventListeners() {
        DOM.modalBtn.addEventListener('click', openModal);
        DOM.modelCloseBtn.addEventListener('click', closeModal);
        window.addEventListener('click', outsideClick);
    }
    function init() {
        cacheDOM();
        eventListeners();
    }
    return {
        init: init,
    };
})();



//slider left to right
let slideSlider = (function () {
    let DOM = {};
    let i = 0;
    let activeSlide = 'sliderImg--active';

    function leftSlide(e) {
        DOM.slide[i].classList.remove(activeSlide);
        i--;

        if (i < 0) {
            i = DOM.slide.length - 1;
        }
        DOM.slide[i].classList.add(activeSlide);
    }

    function rightSlide(e) {
        DOM.slide[i].classList.remove(activeSlide);
        i++;

        if (i >= DOM.slide.length) {
            i = 0;
        }
        DOM.slide[i].classList.add(activeSlide);
    }

    function cacheDOM() {
        DOM.nextBtn = document.querySelector('.btn-next');
        DOM.prevBtn = document.querySelector('.btn-prev');
        DOM.slide = document.querySelectorAll('.popop__gallery--img img');
    }

    function eventListeners() {
        DOM.prevBtn.addEventListener('click', leftSlide);
        DOM.nextBtn.addEventListener('click', rightSlide);
    }

    function init() {
        cacheDOM();
        eventListeners();
    }

    return {
        init: init,
    };
})();






console.log(overlaySearchMenu);
document.addEventListener('DOMContentLoaded', overlaySearchMenu.init);

console.log(mobileNavigation);
document.addEventListener('DOMContentLoaded', mobileNavigation.init);

console.log(mobSubmenuDropdown);
document.addEventListener('DOMContentLoaded', mobSubmenuDropdown.init);

console.log(popop);
document.addEventListener('DOMContentLoaded', popop.init);

console.log(slideSlider);
document.addEventListener('DOMContentLoaded', slideSlider.init);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map