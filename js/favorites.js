import { createArtists } from './artist.js';
import carousel from './carousel.js';

const artists = [
    {
        thumbnail: 'img/thumbnail/favorites/rammstein.jpg',
        title: 'Rammstein',
        subscribers: `5,68 mi de inscritos`
    },
    {
        thumbnail: 'img/thumbnail/favorites/metallica.jpg',
        title: 'Metallica',
        subscribers: `7,44 mi de inscritos`
    },
    {
        thumbnail: 'img/thumbnail/favorites/aura-vortex.jpg',
        title: 'Aura Vortex',
        subscribers: `5,82 mil inscritos`
    },
    {
        thumbnail: 'img/thumbnail/favorites/blazy.jpg',
        title: 'Blazy',
        subscribers: `53,3 mil inscritos`
    },
    {
        thumbnail: 'img/thumbnail/favorites/eminem.jpg',
        title: 'Eminem',
        subscribers: `48,3 mi de inscritos`
    },
    {
        thumbnail: 'img/thumbnail/favorites/alok.jpg',
        title: 'Alok',
        subscribers: `6,05 mi de inscritos`
    },
]

function initCarousel() {
    const prevBtn = document.querySelector('.home__prev-btn.favorites') || {};
    const nextBtn = document.querySelector('.home__next-btn.favorites') || {};
    const wrapper = document.querySelector('.home__favorites-wrapper') || {};
    const content = document.querySelector('.home__favorites-content') || {};

    carousel.init(prevBtn, nextBtn, wrapper, content);
}

function createFavoritesOnDOM() {
    const carouselWrapper = document.querySelector('.home__favorites-content') || {};
    artists.forEach(artist => {
        const artistDiv = createArtists(artist);
        carouselWrapper.appendChild(artistDiv);
    });
}

export default {
    init() {
        createFavoritesOnDOM();
        initCarousel();
    }
}
