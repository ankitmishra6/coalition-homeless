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
            DOM.popop.style.display = 'none';
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




console.log(overlaySearchMenu);
document.addEventListener('DOMContentLoaded', overlaySearchMenu.init);

console.log(mobileNavigation);
document.addEventListener('DOMContentLoaded', mobileNavigation.init);

console.log(mobSubmenuDropdown);
document.addEventListener('DOMContentLoaded', mobSubmenuDropdown.init);


console.log(popop);
document.addEventListener('DOMContentLoaded', popop.init);


