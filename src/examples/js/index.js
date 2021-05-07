import '@/examples/scss/index.scss';
import Slider from '@/slider';

const config = {
  slidesContainer: document.querySelector('.slider-js__slides'),
  buttonPrev: document.querySelector('.slider-js__button-prev'),
  buttonNext: document.querySelector('.slider-js__button-next'),
  paginationContainer: document.querySelector('.slider-js__pagination'),
};
const sliderInstance = new Slider(config);
sliderInstance.init();
