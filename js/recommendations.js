import { createAlbum } from './album.js';
import carousel from './carousel.js';

const recommendations = [
  {
    thumbnail: 'img/thumbnail/recommendations/edm.jpg',
    title: 'EDM',
    artists: ['Alok', 'Cat Dealers', 'Vintage Culture', 'Chris Lake']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/trance.jpg',
    title: 'Trance',
    artists: ['Mandragora', 'Infected Mushroom', 'Astrix', 'Henrique Camacho']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/offbeat.jpg',
    title: 'Offbeat',
    artists: ['Phaxe', 'Querox', 'Morten Granau', 'Neelix', 'Durs']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/metal.jpg',
    title: 'Metal',
    artists: ['Rammstein', 'Metallica', 'Disturbed', 'Motörhead']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/alternative.jpg',
    title: 'Alternativa',
    artists: ['Young the Giant', 'Arctic Monkeys', 'Imagine Dragons', 'The Neighbourhood']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/rap.jpg',
    title: 'Rap',
    artists: ['Snoop Dogg', 'Eminem', 'Dr. Dre', '2Pac', 'Busta Rhymes']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/pop.jpg',
    title: 'Pop',
    artists: ['The Chainsmokers', 'Halsey', 'Lady Gaga', 'Dua Lipa', 'Lana Del Rey']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/funk.jpg',
    title: 'Funk',
    artists: ['Ludmilla', 'Anitta', 'MC Kevinho', 'Lexa', 'POCAH']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/chill.jpg',
    title: 'Chill',
    artists: ['SOMMA', 'Regard', 'ZHU', 'Bassnectar', 'Liquid Stranger']
  },
  {
    thumbnail: 'img/thumbnail/recommendations/on-road.jpg',
    title: 'On the Road',
    artists: ['AC/DC', 'ZZ Top', 'Mötley Crüe', 'Ozzy Osbourne', 'The Black Keys']
  }
]

function createRecommendationsOnDOM() {
  const carouselWrapper = document.querySelector('.home__recommendations-content') || {};
  recommendations.forEach(album => {
    const albumDiv = createAlbum(album);
    carouselWrapper.appendChild(albumDiv);
  });
}

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.recommendations') || {};
  const nextBtn = document.querySelector('.home__next-btn.recommendations') || {};
  const wrapper = document.querySelector('.home__recommendations-wrapper') || {};
  const content = document.querySelector('.home__recommendations-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

export default {
  init() {
    createRecommendationsOnDOM();
    initCarousel();
  },
}
