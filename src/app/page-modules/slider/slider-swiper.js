import Swiper from './swiper-bundle.min.js'

export function loadContent() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    autoplay: {
     delay: 2000,
     disableOnInteraction: true
    },
  
    speed: 1500
  });
}