// menu

// const menu = document.getElementsByClassName("burger")[0];
// const menu = document.getElementsByClassName("burger")[0];

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
});
