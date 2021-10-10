const GAP = 10;

export default class Carousel {

  constructor(prevBtn, nextBtn, wrapper, content) {
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.carousel = wrapper;
    this.content = content;
    this.carouselWidth = this.carousel.offsetWidth + GAP;
  }

  reachedMaxRightScroll = () => {
    return this.content.scrollWidth - this.carouselWidth <= this.carousel.scrollLeft + this.carouselWidth;
  }

  onClickNext = () => {
    this.carousel.scrollBy(this.carouselWidth, 0);
    if (this.carousel.scrollWidth !== 0) {
      this.prevBtn.style.display = 'flex';
    }
    if (this.reachedMaxRightScroll()) {
      this.nextBtn.style.display = "none";
    }
  }

  onClickPrevious = () => {
    this.carousel.scrollBy(-this.carouselWidth, 0);
    if (this.carousel.scrollLeft - this.carouselWidth <= 0) {
      this.prevBtn.style.display = "none";
    }
    if (-this.carouselWidth <= this.carousel.scrollLeft + this.carouselWidth) {
      this.nextBtn.style.display = "flex";
    }
  }

  calculateCarouselWidth = () => {
    this.carouselWidth = this.carousel.offsetWidth + GAP;
  }

  checkNextBtnVisibility = () => {
    const BORDER_PX = 2;
    const scrollWidth = window.navigator.userAgent.includes('Firefox')
      ? this.content.scrollWidth - BORDER_PX
      : this.content.scrollWidth;

    if (scrollWidth === this.content.offsetWidth) {
      this.nextBtn.style.display = `none`;
      return;
    }
    this.nextBtn.style.display = `flex`;
  }

  onResize = () => {
    this.calculateCarouselWidth();
    this.checkNextBtnVisibility();
  }

  static init(prevBtn, nextBtn, wrapper, content) {
    const carousel = new Carousel(prevBtn, nextBtn, wrapper, content);
    window.addEventListener('resize', carousel.onResize);
    carousel.nextBtn.addEventListener('click', carousel.onClickNext);
    carousel.prevBtn.addEventListener('click', carousel.onClickPrevious);
    carousel.checkNextBtnVisibility();
    return carousel;
  }
}
