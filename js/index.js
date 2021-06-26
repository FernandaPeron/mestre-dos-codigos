const header = document.querySelector('.home__header') || {};

function changeHeaderBackgroundColor() {
  if (window.scrollY > 1) {
    header.style.backgroundColor = 'black';
    return;
  }
  header.style.backgroundColor = 'transparent';
}

window.addEventListener('scroll', changeHeaderBackgroundColor);

