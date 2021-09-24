const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    freeMode: true,
    centered: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        depth: 2000
    },
      1250: {
        slidesPerView: 4,
        depth: 2000
    }
  },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });