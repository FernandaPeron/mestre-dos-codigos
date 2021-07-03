import carousel from './carousel.js';
import recommendations from './recommendations.js';
import header from './header.js';

header.init();
recommendations.createRecommendations();

const recommendationsPrevBtn = document.querySelector('.home__recommendations-prev-btn') || {};
const recommendationsNextBtn = document.querySelector('.home__recommendations-next-btn') || {};
const recommendationsWrapper = document.querySelector('.home__recommendations-wrapper') || {};

carousel.init(recommendationsPrevBtn, recommendationsNextBtn, recommendationsWrapper);