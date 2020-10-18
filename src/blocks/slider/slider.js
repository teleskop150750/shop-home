import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper';

// configure Swiper to use modules
Swiper.use([Pagination, Autoplay, EffectFade]);

const mySwiper = new Swiper('.slider', {
  // Optional parameters
  init: false,
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',
  slideActiveClass: 'slider__slide--active',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  // loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  // slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.slider__pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet--active',
    clickable: true,
  },

});

mySwiper.init();
