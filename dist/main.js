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

    function mobSubMenuOpen(e) {
        e.preventDefault();
        DOM.dropdownItems.style.display = "block";
    }

    function cacheDOM() {
        DOM.dropdownItems = document.querySelector('.mob-sub-menu');
        DOM.mobDropdown = document.querySelector('.mob-nav-links');
    }
    function eventListeners() {
        DOM.mobDropdown.addEventListener('click', mobSubMenuOpen);
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



})();

/******/ })()
;
//# sourceMappingURL=main.js.map