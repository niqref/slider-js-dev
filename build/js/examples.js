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


console.log('module index');
(0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); // async function start() {
//     return await Promise.resolve('async is working');
// }
// start().then(console.log);
// console.log([...document.querySelectorAll('li')]);
// class Test {
//     static name = 'Test class';
// }
// console.log(Test.name);
// const div = document.createElement('div');
// div.style.cssText = 'width: 200px; height: 200px; background: blue;'
// document.body.append(div);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var slider = function slider() {
  return console.log('module slider');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./examples/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=examples.js.map