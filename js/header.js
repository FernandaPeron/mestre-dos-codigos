const mobileHeader = document.querySelector('.home__header-mobile') || {};
const desktopHeader = document.querySelector('.home__header-desktop') || {};

function changeHeaderBackgroundColor() {
  if (window.scrollY > 1) {
    mobileHeader.style.backgroundColor = 'black';
    desktopHeader.style.backgroundColor = 'black';
    return;
  }
  mobileHeader.style.backgroundColor = 'transparent';
  desktopHeader.style.backgroundColor = 'transparent';
}

function changeHeaderItems() {
  if (window.innerWidth < 960) {
    mobileHeader.style.display = 'flex';
    desktopHeader.style.display = 'none';
    return;
  }
  mobileHeader.style.display = 'none';
  desktopHeader.style.display = 'flex';
}

export default {
  init() {
    window.addEventListener('scroll', changeHeaderBackgroundColor);
    window.addEventListener('resize', changeHeaderItems);
    changeHeaderItems();
  },
};
