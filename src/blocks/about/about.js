import Swiper, { Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Pagination]);

const breakpoint = window.matchMedia('(min-width: 1180px)');
let aboutSwiper;

const enableSwiper = () => {
  aboutSwiper = new Swiper('.about-slider', {
    init: false,
    wrapperClass: 'about-slider__wrapper',
    slideClass: 'about-slider__slide',
    slideActiveClass: 'about-slider__slide--active',
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      770: {
        slidesPerView: 2,
      },
      1140: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '.about-slider__pagination',
      bulletClass: 'about-slider__bullet',
      bulletActiveClass: 'about-slider__bullet--active',
      clickable: true,
    },
  });
  aboutSwiper.init();
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    if (aboutSwiper !== undefined) {
      aboutSwiper.destroy(true, true);
    }
    return;
  }
  enableSwiper();
};

breakpoint.addEventListener('change', () => {
  breakpointChecker();
});

breakpointChecker();
