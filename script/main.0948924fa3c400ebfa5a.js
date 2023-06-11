/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 536:
/***/ (function() {

var btn = document.querySelector('.header_btn');
list = document.querySelector('.header_list'), background = document.querySelector('.header_bg'), body = document.querySelector('body'), link = document.querySelectorAll('.header_list_link');
btn.addEventListener('click', function () {
  btn.classList.add('open'), list.classList.add('active'), body.classList.add('active'), background.classList.add('active');
});
background.addEventListener('click', function () {
  btn.classList.remove('open'), list.classList.remove('active'), body.classList.remove('active'), background.classList.remove('active');
});

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function () {
    btn.classList.remove('open'), list.classList.remove('active'), body.classList.remove('active'), background.classList.remove('active');
  });
}

/***/ }),

/***/ 476:
/***/ (function() {

var come = document.title;
window.addEventListener('blur', function () {
  document.title = 'КУРС ПО ВЕБ ПРОГРАММИРОВАНИЮ';
});
window.addEventListener('focus', function () {
  document.title = come;
});

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./images/gif1.gif
var gif1_namespaceObject = __webpack_require__.p + "images/gif19c93fffde7d12180b474.gif";
;// CONCATENATED MODULE: ./images/1.jpg
var _1_namespaceObject = __webpack_require__.p + "images/13ca8c5dc437e9a773566.jpg";
;// CONCATENATED MODULE: ./images/2.jpg
var _2_namespaceObject = __webpack_require__.p + "images/2b21c81007ba189f48963.jpg";
;// CONCATENATED MODULE: ./images/logo.png
var logo_namespaceObject = __webpack_require__.p + "images/logo5b4bdbe94b035a5b37c9.png";
;// CONCATENATED MODULE: ./images/bem.png
var bem_namespaceObject = __webpack_require__.p + "images/bem9a2f7617eda9cbc2a645.png";
;// CONCATENATED MODULE: ./images/bootstrap.png
var bootstrap_namespaceObject = __webpack_require__.p + "images/bootstrap4164344076b1376039ab.png";
;// CONCATENATED MODULE: ./images/css.png
var css_namespaceObject = __webpack_require__.p + "images/css248ca8caa204cfb8ad7f.png";
;// CONCATENATED MODULE: ./images/figma.png
var figma_namespaceObject = __webpack_require__.p + "images/figma5e09f97f1c97cf9bd2bf.png";
;// CONCATENATED MODULE: ./images/git.png
var git_namespaceObject = __webpack_require__.p + "images/gitebd405419034f2bfcd2d.png";
;// CONCATENATED MODULE: ./images/github.png
var github_namespaceObject = __webpack_require__.p + "images/github0295ab778c0bead1adc7.png";
;// CONCATENATED MODULE: ./images/gulp.png
var gulp_namespaceObject = __webpack_require__.p + "images/gulp9cccbfba2bff129c4400.png";
;// CONCATENATED MODULE: ./images/html.png
var html_namespaceObject = __webpack_require__.p + "images/htmld3cddc7e6fb21eb2ec18.png";
;// CONCATENATED MODULE: ./images/JS.png
var JS_namespaceObject = __webpack_require__.p + "images/JSc5096f8af6bd859d2ac1.png";
;// CONCATENATED MODULE: ./images/php.png
var php_namespaceObject = __webpack_require__.p + "images/php84f9257f37cadf08e96c.png";
;// CONCATENATED MODULE: ./images/pug.png
var pug_namespaceObject = __webpack_require__.p + "images/pugaa0829a17b7a5eac74f3.png";
;// CONCATENATED MODULE: ./images/router.png
var router_namespaceObject = __webpack_require__.p + "images/router3ff0fc29d64840916912.png";
;// CONCATENATED MODULE: ./images/scss.png
var scss_namespaceObject = __webpack_require__.p + "images/scssbb4756a166cff5a0e7bb.png";
;// CONCATENATED MODULE: ./images/vs.png
var vs_namespaceObject = __webpack_require__.p + "images/vsbdb12674891d3d6b9ca7.png";
;// CONCATENATED MODULE: ./images/vue.png
var vue_namespaceObject = __webpack_require__.p + "images/vue02fe87d4a51e9c2f16d7.png";
;// CONCATENATED MODULE: ./images/vuex.png
var vuex_namespaceObject = __webpack_require__.p + "images/vuex3516aaf8c25bec47de9b.png";
;// CONCATENATED MODULE: ./images/webpack.png
var webpack_namespaceObject = __webpack_require__.p + "images/webpack24a1ff5278a9076d5ed6.png";
;// CONCATENATED MODULE: ./images/word.png
var word_namespaceObject = __webpack_require__.p + "images/wordaa269da1554ff7bce1d4.png";
// EXTERNAL MODULE: ./scripts/components/btn.js
var btn = __webpack_require__(536);
// EXTERNAL MODULE: ./scripts/components/comback.js
var comback = __webpack_require__(476);
;// CONCATENATED MODULE: ./scripts/index.js

























}();
/******/ })()
;