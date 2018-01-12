/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_nav__ = __webpack_require__(1);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function nav() {jQuery(document).ready(function ($) {
    var Min = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > Min) {
        var headerHeight = $('.stickyNavContainer').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 150 && $('.stickyNavContainer').hasClass('is-fixed')) {
                        $('.stickyNavContainer').addClass('is-visible');
                    } else {
                        $('.stickyNavContainer').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.stickyNavContainer').removeClass('is-visible');
                    if (currentTop > (headerHeight + 150) && !$('.stickyNavContainer').hasClass('is-fixed')) $('.stickyNavContainer').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });

    }
});
const scrollTo = (idOfSection) => {
    var element = $(`.${idOfSection}`)
    $('html,body').animate({scrollTop: element.offset().top})
    $('.stickyNavContainer').addClass('is-visible');

}
var aboutLinks = document.getElementsByClassName("animLink");
for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener("click", () => scrollTo(aboutLinks[i].innerHTML))
}
}

/***/ })
/******/ ]);