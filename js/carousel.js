const TRANSLATE_PIXELS_BY_ITEM = 143.5;

export default class Carousel {

  constructor(prevBtn, nextBtn, wrapper) {
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.carousel = wrapper;
    this.initialTranslate = 0;
    this.translate = 0;
    this.nextTotalClicks = 0;
    this.nextClickCounter = 0;
  }

  getTotalItems = () => {
    return this.carousel.children.length;
  }

  getVisibleItemsCount = () => {
    const itemSize = this.carousel.children[0].clientWidth;
    return Math.ceil(window.innerWidth / (itemSize + 50));
  }

  onClickNext = () => {
    this.prevBtn.style.display = 'flex';
    if (this.nextClickCounter < this.nextTotalClicks) {
      this.initialTranslate -= this.translate;
      this.carousel.style.transform = `translateX(${this.initialTranslate}px)`;
      this.nextClickCounter += 1;
    }
    if (this.nextClickCounter === this.nextTotalClicks) {
      this.nextBtn.style.display = 'none';
    }
  }

  onClickPrevious = () => {
    this.nextBtn.style.display = 'flex';
    if (this.nextClickCounter > 0) {
      this.initialTranslate += this.translate;
      this.carousel.style.transform = `translateX(${this.initialTranslate}px)`;
      this.nextClickCounter -= 1;
    }
    if (this.nextClickCounter === 0) {
      this.prevBtn.style.display = 'none';
    }
  }

  calculateTranslate = () => {
    this.translate = this.getVisibleItemsCount() * TRANSLATE_PIXELS_BY_ITEM;
  }

  calculateNextTotalClicks = () => {
    const itemSize = this.carousel.children[0].clientWidth;
    const allItemsSize = itemSize * this.getTotalItems();
    this.nextTotalClicks = Math.ceil(allItemsSize / this.carousel.clientWidth);
  }

  static init(prevBtn, nextBtn, wrapper) {
    const carousel = new Carousel(prevBtn, nextBtn, wrapper);
    window.addEventListener('resize', carousel.calculateTranslate)
    carousel.nextBtn.addEventListener('click', carousel.onClickNext);
    carousel.prevBtn.addEventListener('click', carousel.onClickPrevious);
    carousel.calculateTranslate();
    carousel.calculateNextTotalClicks();
    return carousel;
  }
}
