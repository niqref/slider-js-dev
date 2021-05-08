(self["webpackChunk"] = self["webpackChunk"] || []).push([["examples"],{

/***/ "./examples/js/index.js":
/*!******************************!*\
  !*** ./examples/js/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examples_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/examples/scss/index.scss */ "./examples/scss/index.scss");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/slider */ "./slider.js");


var config = {
  slidesContainer: document.querySelector('.slider-js__slides'),
  buttonPrev: document.querySelector('.slider-js__button-prev'),
  buttonNext: document.querySelector('.slider-js__button-next'),
  paginationContainer: document.querySelector('.slider-js__pagination')
};
var sliderInstance = new _slider__WEBPACK_IMPORTED_MODULE_1__.default(config);
sliderInstance.init();

/***/ }),

/***/ "./examples/scss/index.scss":
/*!**********************************!*\
  !*** ./examples/scss/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js","slider_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./examples/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=examples.js.map