export default class Slider {
    #slidesContainer = null;

    #slides = null;

    #button = {
      prev: null,
      next: null,
    };

    #paginationContainer = null;

    #sliderShift = 100;

    #currentSliderShift = 0;

    #currentSlideIndex = 0;

    #SliderClass = {
      disabledButton: 'slider-js__button_disabled',
      shownButton: 'slider-js__button_shown',
      slidesWithoutTransition: 'slider-js__slides_no-transition',
      slidesGrabbing: 'slider-js__slides_grabbing',
    };

    #SlidesSwipeState = {
      wasStarted: false,
      isDetecting: false,
      startX: null,
      startY: null,
      moveX: null,
      moveY: null,
      shiftX: null,
      shiftY: null,
      isTouchEvent: null,
    }

    constructor({
      slidesContainer,
      buttonPrev,
      buttonNext,
      paginationContainer,
    } = {}) {
      if (!slidesContainer) {
        throw new Error(`slidesContainer is ${slidesContainer}`);
      }

      this.#slidesContainer = slidesContainer;
      this.#slides = [...this.#slidesContainer.children];

      this.#button.prev = buttonPrev;
      this.#button.next = buttonNext;

      this.#paginationContainer = paginationContainer;
    }

    init() {
      if (this.#slides.length > 1) {
        this.#setButtonsVisibilityClass();
        this.#updateButtonsState();
        this.#setOnButtonsClick();
        this.#setSlidesSwipeHandlers();
      }
    }

    #setSlidesSwipeHandlers() {
      this.#slidesContainer.addEventListener('touchstart', this.#onSlidesSwipeStart);
      this.#slidesContainer.addEventListener('touchmove', this.#onSlidesSwipeMove);
      this.#slidesContainer.addEventListener('touchend', this.#onSlidesSwipeEnd);

      this.#slidesContainer.addEventListener('mousedown', this.#onSlidesSwipeStart);
      this.#slidesContainer.addEventListener('mousemove', this.#onSlidesSwipeMove);
      this.#slidesContainer.addEventListener('mouseup', this.#onSlidesSwipeEnd);
    }

    #onSlidesSwipeStart = (startEvt) => {
      if (this.#SlidesSwipeState.wasStarted) {
        return;
      }

      this.#SlidesSwipeState.isTouchEvent = !!startEvt.clientX;

      if (this.#SlidesSwipeState.isTouchEvent) {
        startEvt.preventDefault();
      }

      this.#SlidesSwipeState.isDetecting = true;
      this.#setSwipeCoords(startEvt, 'startX', 'startY');
      this.#slidesContainer.classList.add(this.#SliderClass.slidesGrabbing);
    }

    #onSlidesSwipeMove = (moveEvt) => {
      if (!this.#SlidesSwipeState.wasStarted && !this.#SlidesSwipeState.isDetecting) {
        return;
      }

      this.#setSwipeCoords(moveEvt, 'moveX', 'moveY');

      if (this.#SlidesSwipeState.isDetecting) {
        if (this.#isNeedBlockHorizontalScroll()) {
          // moveEvt.preventDefault();
          this.#SlidesSwipeState.wasStarted = true;
        }

        this.#SlidesSwipeState.isDetecting = false;
      }

      if (this.#SlidesSwipeState.wasStarted) {
        moveEvt.preventDefault();

        if (!this.#slidesContainer.classList.contains(this.#SliderClass.slidesWithoutTransition)) {
          this.#slidesContainer.classList.add(this.#SliderClass.slidesWithoutTransition);
        }

        this.#SlidesSwipeState.shiftX = ((this.#SlidesSwipeState.moveX
          - this.#SlidesSwipeState.startX) * 100) / this.#slidesContainer.offsetWidth;

        Slider.setElementShift(this.#slidesContainer, this.#SlidesSwipeState.shiftX);
      }
    }

    #onSlidesSwipeEnd = (endEvt) => {
      this.#slidesContainer.classList.remove(this.#SliderClass.slidesGrabbing);

      if (!this.#SlidesSwipeState.wasStarted && this.#SlidesSwipeState.isDetecting) {
        return;
      }

      endEvt.preventDefault();
      this.#SlidesSwipeState.wasStarted = false;

      if (this.#SlidesSwipeState.isTouchEvent) {
        this.#slidesContainer.addEventListener('click', (evt) => evt.preventDefault(), { once: true });
      }
    }

    #setSwipeCoords(evt, x, y) {
      this.#SlidesSwipeState[x] = evt.clientX || evt.touches[0].clientX;
      this.#SlidesSwipeState[y] = evt.clientY || evt.touches[0].clientY;
    }

    #isNeedBlockHorizontalScroll() {
      return Math.abs(this.#SlidesSwipeState.startX - this.#SlidesSwipeState.moveX)
      >= Math.abs(this.#SlidesSwipeState.startY - this.#SlidesSwipeState.moveY);
    }

    #setButtonsVisibilityClass() {
      [this.#button.prev, this.#button.next]
        .forEach((button) => button.classList.add(this.#SliderClass.shownButton));
    }

    #setOnButtonsClick() {
      [this.#button.prev, this.#button.next].forEach((button) => button.addEventListener('click', this.#onButtonsClick));
    }

    #onButtonsClick = ({ currentTarget }) => {
      const isNext = currentTarget === this.#button.next;
      this.#updateSlider(isNext);
    }

    #updateSlider(isNext) {
      if (this.#isSliderUpdateBlocked(isNext)) {
        return;
      }

      this.#changeSlides(isNext);
      this.#updateButtonsState();
    }

    #isSliderUpdateBlocked(isNext) {
      return (!isNext && this.#currentSlideIndex === 0)
      || (isNext && this.#currentSlideIndex === this.#slides.length - 1);
    }

    #changeSlides(isNext) {
      this.#currentSlideIndex += isNext ? 1 : -1;
      this.#currentSliderShift = this.#currentSlideIndex * -this.#sliderShift;
      Slider.setElementShift(this.#slidesContainer, this.#currentSliderShift);
    }

    #updateButtonsState() {
      if (this.#currentSlideIndex === 0 || (this.#currentSlideIndex !== 0
        && this.#button.prev.classList.contains(this.#SliderClass.disabledButton))) {
        this.#button.prev.classList.toggle(this.#SliderClass.disabledButton);
      }

      if (this.#currentSlideIndex === this.#slides.length - 1
        || (this.#currentSlideIndex !== this.#slides.length - 1
          && this.#button.next.classList.contains(this.#SliderClass.disabledButton))) {
        this.#button.next.classList.toggle(this.#SliderClass.disabledButton);
      }
    }

    static setElementShift(element, shift, unit = '%') {
      const el = element;
      el.style.transform = `translate3d(${shift}${unit}, 0, 0)`;
    }
}
