const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  slidesPerView: 'auto',

  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  observer: true,
  observerParents: true,
  observerChildren: true,

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    eventsTarget: '.hero-slider',
  },
  speed: 1000,

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },
});
