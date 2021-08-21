import { createAlbum } from './album.js';
import carousel from './carousel.js';

const mixtapes = [
    {
        thumbnail: 'https://lh3.googleusercontent.com/2Jo99JrKnvTYgDbAdy3dS7TwFiIgAdHa-dnP0sfaL2hM-wePmmQd3mCSc2b5Rf3c0mS2ZrYcAM99PA=w226-h226-l90-rj',
        title: 'Replay mix',
        artists: ['Phaxe', 'Alpha Portal', 'Emok', 'Ranji']
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/pToLd2H9GJuk-57RzMTzP0PUo6nuOtBVvJEnJ7Z4e9YBBrn92s7RcleXvslB84fuxoAE00FA3KC2x1Dt=w226-h226-l90-rj',
        title: 'Minha supermix',
        artists: ['Mad Tribe', 'Alok', 'Rave & Crave', 'Ümmet Özcan']
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/ATNna5rb8szDS32yvrLRuMy06bW1fsfRYMnBB19vFRzyc-QrgmJfCuBfmkq5cedyvWMNAwgsnPsvmJ4=w226-h226-l90-rj',
        title: 'Minha mix 1',
        artists: ['Rammstein', 'Lindemann', 'Till Lindemann', 'Megadeth', 'Metallica']
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/aglvoQRsrMnVX14boIhdlwellPTBc4P_gyx4t0227R5gozVUtRzRS2Fpehd4MBydaSAZAnDFtBVkEA=w226-h226-l90-rj',
        title: 'Minha mix 2',
        artists: ['Astrix', 'Mandragora', 'Special M', 'Bliss', 'Infected Mushroom']
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/r9XR48KQRdTbR7s1_7Py9dKLhKirh-kalUjOdXOLi2KJEDr-QRPLEcd33wntmP_F1jt_5q_KAQ9G6zU=w226-h226-l90-rj',
        title: 'Minha mix 3',
        artists: ['Imagine Dragons', 'Travis Scott', 'Benny Benassi', 'Linkin Park']
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/zHwSMs2qwyp1-G54896y8HDpT99yDawuNEVGEwPQi_P25ZxY72aLKxqnQPSE2sTmkYkL1iAl9J6i0g=w226-h226-l90-rj',
        title: 'Minha mix 4',
        artists: ['Alpha Portal', 'Phaxe', 'Emok']
    },
    {
        thumbnail: 'https://lh3.googleusercontent.com/-UnraWbLSGPxS9UbxsZg3VLf27cBQrYlKBFI6iCSz80z-Mbl-nBghy2k_xYiPS-LN0vMx-J1Bnd8J_Y=w226-h226-l90-rj',
        title: 'Minha mix 5',
        artists: ['Alok', 'System Of A Down', 'SAINt JHN', 'Aaron Smith']
    },
]

function initCarousel() {
    const prevBtn = document.querySelector('.home__prev-btn.mixtapes') || {};
    const nextBtn = document.querySelector('.home__next-btn.mixtapes') || {};
    const wrapper = document.querySelector('.home__mixtapes-wrapper') || {};
    const content = document.querySelector('.home__mixtapes-content') || {};

    carousel.init(prevBtn, nextBtn, wrapper, content);
}

function createMixtapesOnDOM() {
    const carouselWrapper = document.querySelector('.home__mixtapes-content') || {};
    mixtapes.forEach(album => {
        const albumDiv = createAlbum(album);
        carouselWrapper.appendChild(albumDiv);
    });
}

export default {
    init() {
        createMixtapesOnDOM();
        initCarousel();
    }
}
