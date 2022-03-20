import createItem from './item.js';
import carousel from './carousel.js';

const mixtapes = [
  {
    thumbnail: 'img/thumbnail/mixtapes/replay-mix.jpg',
    title: 'Replay mix',
    subtitle: ['Phaxe', 'Alpha Portal', 'Emok', 'Ranji'],
  },
  {
    thumbnail: 'img/thumbnail/mixtapes/supermix.jpg',
    title: 'Minha supermix',
    subtitle: ['Mad Tribe', 'Alok', 'Rave & Crave', 'Ümmet Özcan'],
  },
  {
    thumbnail: 'img/thumbnail/mixtapes/mix1.jpg',
    title: 'Minha mix 1',
    subtitle: ['Rammstein', 'Lindemann', 'Megadeth', 'Metallica'],
  },
  {
    thumbnail: 'img/thumbnail/mixtapes/mix2.jpg',
    title: 'Minha mix 2',
    subtitle: ['Astrix', 'Mandragora', 'Special M', 'Bliss', 'Infected Mushroom'],
  },
  {
    thumbnail: 'img/thumbnail/mixtapes/mix3.jpg',
    title: 'Minha mix 3',
    subtitle: ['Imagine Dragons', 'Travis Scott', 'Benny Benassi', 'Linkin Park'],
  },
  {
    thumbnail: 'img/thumbnail/mixtapes/mix4.jpg',
    title: 'Minha mix 4',
    subtitle: ['Alpha Portal', 'Phaxe', 'Emok'],
  },
  {
    thumbnail: 'img/thumbnail/mixtapes/mix5.jpg',
    title: 'Minha mix 5',
    subtitle: ['Alok', 'System Of A Down', 'SAINt JHN', 'Aaron Smith'],
  },
];

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.mixtapes') || {};
  const nextBtn = document.querySelector('.home__next-btn.mixtapes') || {};
  const wrapper = document.querySelector('.home__mixtapes-wrapper') || {};
  const content = document.querySelector('.home__mixtapes-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

function createMixtapesOnDOM() {
  const carouselWrapper = document.querySelector('.home__mixtapes-content') || {};
  mixtapes.forEach((album) => {
    const albumDiv = createItem(album);
    carouselWrapper.appendChild(albumDiv);
  });
}

export default {
  init() {
    createMixtapesOnDOM();
    initCarousel();
  },
};
