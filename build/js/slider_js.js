(self["webpackChunk"] = self["webpackChunk"] || []).push([["slider_js"],{

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _slidesContainer = /*#__PURE__*/new WeakMap();

var _slides = /*#__PURE__*/new WeakMap();

var _button = /*#__PURE__*/new WeakMap();

var _paginationContainer = /*#__PURE__*/new WeakMap();

var _sliderShift = /*#__PURE__*/new WeakMap();

var _currentSliderShift = /*#__PURE__*/new WeakMap();

var _currentSlideIndex = /*#__PURE__*/new WeakMap();

var _disabledButton = /*#__PURE__*/new WeakMap();

var _shownButton = /*#__PURE__*/new WeakMap();

var _slidesWithoutTransition = /*#__PURE__*/new WeakMap();

var _slidesGrabbing = /*#__PURE__*/new WeakMap();

var _SlidesSwipeState = /*#__PURE__*/new WeakMap();

var _setSlidesSwipeHandlers = /*#__PURE__*/new WeakSet();

var _onSlidesSwipeStart = /*#__PURE__*/new WeakMap();

var _onSlidesSwipeMove = /*#__PURE__*/new WeakMap();

var _onSlidesSwipeEnd = /*#__PURE__*/new WeakMap();

var _setSwipeCoords = /*#__PURE__*/new WeakSet();

var _isNeedBlockHorizontalScroll = /*#__PURE__*/new WeakSet();

var _setButtonsVisibilityClass = /*#__PURE__*/new WeakSet();

var _setOnButtonsClick = /*#__PURE__*/new WeakSet();

var _onButtonsClick = /*#__PURE__*/new WeakMap();

var _updateSlider = /*#__PURE__*/new WeakSet();

var _isSliderUpdateBlocked = /*#__PURE__*/new WeakSet();

var _changeSlides = /*#__PURE__*/new WeakSet();

var _updateButtonsState = /*#__PURE__*/new WeakSet();

var Slider = /*#__PURE__*/function () {
  function Slider() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        slidesContainer = _ref.slidesContainer,
        buttonPrev = _ref.buttonPrev,
        buttonNext = _ref.buttonNext,
        paginationContainer = _ref.paginationContainer;

    _classCallCheck(this, Slider);

    _updateButtonsState.add(this);

    _changeSlides.add(this);

    _isSliderUpdateBlocked.add(this);

    _updateSlider.add(this);

    _setOnButtonsClick.add(this);

    _setButtonsVisibilityClass.add(this);

    _isNeedBlockHorizontalScroll.add(this);

    _setSwipeCoords.add(this);

    _setSlidesSwipeHandlers.add(this);

    _slidesContainer.set(this, {
      writable: true,
      value: null
    });

    _slides.set(this, {
      writable: true,
      value: null
    });

    _button.set(this, {
      writable: true,
      value: {
        prev: null,
        next: null
      }
    });

    _paginationContainer.set(this, {
      writable: true,
      value: null
    });

    _sliderShift.set(this, {
      writable: true,
      value: 100
    });

    _currentSliderShift.set(this, {
      writable: true,
      value: 0
    });

    _currentSlideIndex.set(this, {
      writable: true,
      value: 0
    });

    _disabledButton.set(this, {
      writable: true,
      value: 'slider-js__button_disabled'
    });

    _shownButton.set(this, {
      writable: true,
      value: 'slider-js__button_shown'
    });

    _slidesWithoutTransition.set(this, {
      writable: true,
      value: 'slider-js__slides_no-transition'
    });

    _slidesGrabbing.set(this, {
      writable: true,
      value: 'slider-js__slides_grabbing'
    });

    _SlidesSwipeState.set(this, {
      writable: true,
      value: {
        wasStarted: false,
        isDetecting: false,
        startX: null,
        startY: null,
        moveX: null,
        moveY: null,
        shiftX: null,
        shiftY: null
      }
    });

    _onSlidesSwipeStart.set(this, {
      writable: true,
      value: function value(startEvt) {
        if (_classPrivateFieldGet(_this, _SlidesSwipeState).wasStarted) {
          return;
        }

        if (startEvt.clientX) {
          startEvt.preventDefault();
        }

        _classPrivateFieldGet(_this, _SlidesSwipeState).isDetecting = true;

        _classPrivateMethodGet(_this, _setSwipeCoords, _setSwipeCoords2).call(_this, startEvt, 'startX', 'startY');

        _classPrivateFieldGet(_this, _slidesContainer).classList.add(_classPrivateFieldGet(_this, _slidesGrabbing));
      }
    });

    _onSlidesSwipeMove.set(this, {
      writable: true,
      value: function value(moveEvt) {
        if (!_classPrivateFieldGet(_this, _SlidesSwipeState).wasStarted && !_classPrivateFieldGet(_this, _SlidesSwipeState).isDetecting) {
          return;
        }

        _classPrivateMethodGet(_this, _setSwipeCoords, _setSwipeCoords2).call(_this, moveEvt, 'moveX', 'moveY');

        if (_classPrivateFieldGet(_this, _SlidesSwipeState).isDetecting) {
          if (_classPrivateMethodGet(_this, _isNeedBlockHorizontalScroll, _isNeedBlockHorizontalScroll2).call(_this)) {
            // moveEvt.preventDefault();
            _classPrivateFieldGet(_this, _SlidesSwipeState).wasStarted = true;
          }

          _classPrivateFieldGet(_this, _SlidesSwipeState).isDetecting = false;
        }

        if (_classPrivateFieldGet(_this, _SlidesSwipeState).wasStarted) {
          moveEvt.preventDefault();

          if (!_classPrivateFieldGet(_this, _slidesContainer).classList.contains(_classPrivateFieldGet(_this, _slidesWithoutTransition))) {
            _classPrivateFieldGet(_this, _slidesContainer).classList.add(_classPrivateFieldGet(_this, _slidesWithoutTransition));
          }

          _classPrivateFieldGet(_this, _SlidesSwipeState).shiftX = (_classPrivateFieldGet(_this, _SlidesSwipeState).moveX - _classPrivateFieldGet(_this, _SlidesSwipeState).startX) * 100 / _classPrivateFieldGet(_this, _slidesContainer).offsetWidth;
          Slider.setElementShift(_classPrivateFieldGet(_this, _slidesContainer), _classPrivateFieldGet(_this, _SlidesSwipeState).shiftX);
        }
      }
    });

    _onSlidesSwipeEnd.set(this, {
      writable: true,
      value: function value(endEvt) {
        _classPrivateFieldGet(_this, _slidesContainer).classList.remove(_classPrivateFieldGet(_this, _slidesGrabbing));

        if (!_classPrivateFieldGet(_this, _SlidesSwipeState).wasStarted && _classPrivateFieldGet(_this, _SlidesSwipeState).isDetecting) {
          return;
        }

        endEvt.preventDefault();
        _classPrivateFieldGet(_this, _SlidesSwipeState).wasStarted = false;
      }
    });

    _onButtonsClick.set(this, {
      writable: true,
      value: function value(_ref2) {
        var currentTarget = _ref2.currentTarget;

        var isNext = currentTarget === _classPrivateFieldGet(_this, _button).next;

        _classPrivateMethodGet(_this, _updateSlider, _updateSlider2).call(_this, isNext);
      }
    });

    if (!slidesContainer) {
      throw new Error("slidesContainer is ".concat(slidesContainer));
    }

    _classPrivateFieldSet(this, _slidesContainer, slidesContainer);

    _classPrivateFieldSet(this, _slides, _toConsumableArray(_classPrivateFieldGet(this, _slidesContainer).children));

    _classPrivateFieldGet(this, _button).prev = buttonPrev;
    _classPrivateFieldGet(this, _button).next = buttonNext;

    _classPrivateFieldSet(this, _paginationContainer, paginationContainer);
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      if (_classPrivateFieldGet(this, _slides).length > 1) {
        _classPrivateMethodGet(this, _setButtonsVisibilityClass, _setButtonsVisibilityClass2).call(this);

        _classPrivateMethodGet(this, _updateButtonsState, _updateButtonsState2).call(this);

        _classPrivateMethodGet(this, _setOnButtonsClick, _setOnButtonsClick2).call(this);

        _classPrivateMethodGet(this, _setSlidesSwipeHandlers, _setSlidesSwipeHandlers2).call(this);
      }
    }
  }], [{
    key: "setElementShift",
    value: function setElementShift(element, shift) {
      var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '%';
      var el = element;
      el.style.transform = "translate3d(".concat(shift).concat(unit, ", 0, 0)");
    }
  }]);

  return Slider;
}();

function _setSlidesSwipeHandlers2() {
  _classPrivateFieldGet(this, _slidesContainer).addEventListener('touchstart', _classPrivateFieldGet(this, _onSlidesSwipeStart));

  _classPrivateFieldGet(this, _slidesContainer).addEventListener('touchmove', _classPrivateFieldGet(this, _onSlidesSwipeMove));

  _classPrivateFieldGet(this, _slidesContainer).addEventListener('touchend', _classPrivateFieldGet(this, _onSlidesSwipeEnd));

  _classPrivateFieldGet(this, _slidesContainer).addEventListener('mousedown', _classPrivateFieldGet(this, _onSlidesSwipeStart));

  _classPrivateFieldGet(this, _slidesContainer).addEventListener('mousemove', _classPrivateFieldGet(this, _onSlidesSwipeMove));

  _classPrivateFieldGet(this, _slidesContainer).addEventListener('mouseup', _classPrivateFieldGet(this, _onSlidesSwipeEnd));
}

function _setSwipeCoords2(evt, x, y) {
  _classPrivateFieldGet(this, _SlidesSwipeState)[x] = evt.clientX || evt.touches[0].clientX;
  _classPrivateFieldGet(this, _SlidesSwipeState)[y] = evt.clientY || evt.touches[0].clientY;
}

function _isNeedBlockHorizontalScroll2() {
  return Math.abs(_classPrivateFieldGet(this, _SlidesSwipeState).startX - _classPrivateFieldGet(this, _SlidesSwipeState).moveX) >= Math.abs(_classPrivateFieldGet(this, _SlidesSwipeState).startY - _classPrivateFieldGet(this, _SlidesSwipeState).moveY);
}

function _setButtonsVisibilityClass2() {
  var _this2 = this;

  [_classPrivateFieldGet(this, _button).prev, _classPrivateFieldGet(this, _button).next].forEach(function (button) {
    return button.classList.add(_classPrivateFieldGet(_this2, _shownButton));
  });
}

function _setOnButtonsClick2() {
  var _this3 = this;

  [_classPrivateFieldGet(this, _button).prev, _classPrivateFieldGet(this, _button).next].forEach(function (button) {
    return button.addEventListener('click', _classPrivateFieldGet(_this3, _onButtonsClick));
  });
}

function _updateSlider2(isNext) {
  if (_classPrivateMethodGet(this, _isSliderUpdateBlocked, _isSliderUpdateBlocked2).call(this, isNext)) {
    return;
  }

  _classPrivateMethodGet(this, _changeSlides, _changeSlides2).call(this, isNext);

  _classPrivateMethodGet(this, _updateButtonsState, _updateButtonsState2).call(this);
}

function _isSliderUpdateBlocked2(isNext) {
  return !isNext && _classPrivateFieldGet(this, _currentSlideIndex) === 0 || isNext && _classPrivateFieldGet(this, _currentSlideIndex) === _classPrivateFieldGet(this, _slides).length - 1;
}

function _changeSlides2(isNext) {
  _classPrivateFieldSet(this, _currentSlideIndex, _classPrivateFieldGet(this, _currentSlideIndex) + (isNext ? 1 : -1));

  _classPrivateFieldSet(this, _currentSliderShift, _classPrivateFieldGet(this, _currentSlideIndex) * -_classPrivateFieldGet(this, _sliderShift));

  Slider.setElementShift(_classPrivateFieldGet(this, _slidesContainer), _classPrivateFieldGet(this, _currentSliderShift));
}

function _updateButtonsState2() {
  if (_classPrivateFieldGet(this, _currentSlideIndex) === 0 || _classPrivateFieldGet(this, _currentSlideIndex) !== 0 && _classPrivateFieldGet(this, _button).prev.classList.contains(_classPrivateFieldGet(this, _disabledButton))) {
    _classPrivateFieldGet(this, _button).prev.classList.toggle(_classPrivateFieldGet(this, _disabledButton));
  }

  if (_classPrivateFieldGet(this, _currentSlideIndex) === _classPrivateFieldGet(this, _slides).length - 1 || _classPrivateFieldGet(this, _currentSlideIndex) !== _classPrivateFieldGet(this, _slides).length - 1 && _classPrivateFieldGet(this, _button).next.classList.contains(_classPrivateFieldGet(this, _disabledButton))) {
    _classPrivateFieldGet(this, _button).next.classList.toggle(_classPrivateFieldGet(this, _disabledButton));
  }
}



/***/ })

}]);
//# sourceMappingURL=slider_js.js.map