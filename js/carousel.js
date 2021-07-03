export default class Carousel {

  constructor(prevBtn, nextBtn, wrapper) {
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.carousel = wrapper;
    this.initialTranslate = 0;
    this.translate = 0;
  }

  onClickNext = () => {
    this.initialTranslate -= this.translate;
    this.carousel.style.transform = `translateX(${this.initialTranslate}px)`;
  }

  onClickPrevious = () => {
    this.initialTranslate += this.translate;
    this.carousel.style.transform = `translateX(${this.initialTranslate}px)`;
  }

  calculateTranslate = () => {
    const itemSize = (document.querySelector('.home__recommendation') || {}).clientWidth;
    const visibleItemsCount = Math.ceil(window.innerWidth / (itemSize + 50));
    const TRANSLATE_PIXELS_BY_ITEM = 143.5;
    this.translate = visibleItemsCount * TRANSLATE_PIXELS_BY_ITEM;
  }

  static init(prevBtn, nextBtn, wrapper) {
    const carousel = new Carousel(prevBtn, nextBtn, wrapper);
    window.addEventListener('resize', carousel.calculateTranslate)
    carousel.nextBtn.addEventListener('click', carousel.onClickNext);
    carousel.prevBtn.addEventListener('click', carousel.onClickPrevious);
    carousel.calculateTranslate();
    return carousel;
  }
}
