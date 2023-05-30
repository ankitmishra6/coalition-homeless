import '../scss/style.scss';

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


