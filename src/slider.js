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

    #disabledButton = 'slider-js__button_disabled';

    #shownButton = 'slider-js__button_shown';

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
      this.#setButtonsVisibilityClass();
      this.#updateButtonsState();
      this.#setOnButtonsClick();
      this.#setSlidesSwipeHandlers();
    }

    #setSlidesSwipeHandlers() {

      this.#slidesContainer.addEventListener('touchstart');
    }

    #onSlidesStartMove() {

    }

    #onSlidesMove() {

    }

    #onSlidesEndMove() {

    }

    #setButtonsVisibilityClass() {
      [this.#button.prev, this.#button.next]
        .forEach((button) => button.classList.add(this.#shownButton));
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
        && this.#button.prev.classList.contains(this.#disabledButton))) {
        this.#button.prev.classList.toggle(this.#disabledButton);
      }

      if (this.#currentSlideIndex === this.#slides.length - 1
        || (this.#currentSlideIndex !== this.#slides.length - 1
          && this.#button.next.classList.contains(this.#disabledButton))) {
        this.#button.next.classList.toggle(this.#disabledButton);
      }
    }

    static setElementShift(element, shift, unit = '%') {
      const el = element;
      el.style.transform = `translate3d(${shift}${unit}, 0, 0)`;
    }
}
