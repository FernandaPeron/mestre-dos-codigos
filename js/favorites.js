import { createArtists } from './artist.js';
import carousel from './carousel.js';

const artists = [
    {
        thumbnail: 'https://lh3.googleusercontent.com/EGPOFCUL__GQlZRipF2G6xW2gtTS6I0RMzo4BRMXN999LkUivh1tCqjChl_ozt307Tsr7zkr_EO_BV4=w226-h226-p-l90-rj',
        title: 'Rammstein',
        subscribers: `5,68 mi de inscritos`
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/KnByTUXJkfrqlDoS4LXhyRFZALhxmHOfBtI9FLHtb1g5OB5msMdHXHcISvwtQGNtzwXKqjDmIw=w226-h226-p-l90-rj',
        title: 'Metallica',
        subscribers: `7,44 mi de inscritos`
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/dPBreQ2MAKdn6obMaF9zdjA_PEHkmBlqWktR0qGzqtMVrv7wgr43V5G7elM52SsdSNqkygbiI9a_nNEy=w226-h226-l90-rj',
        title: 'Aura Vortex',
        subscribers: `5,82 mil inscritos`
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14Gj96nIAz9jGAZcsxmRPEcbixjZ-28hA8yPgRRCikg=w226-h226-p-l90-rj',
        title: 'Blazy',
        subscribers: `53,3 mil inscritos`
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/zJeNUtroab27OgGSz55ew1Y7xK-0Ee8gi4Bco3R3H8wRr3kkYK4uJ2fSTDcdWKBNBqUsjUMDKajYVA=w226-h226-p-l90-rj',
        title: 'Eminem',
        subscribers: `48,3 mi de inscritos`
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/lSPx0XcZNFmzf3ljoXax8Bo5rds5sIHLIuJYzTfwGHYgvPkVvIhbIQBhOr33kp8SZhRk6pPN5mudlw=w226-h226-p-l90-rj',
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
