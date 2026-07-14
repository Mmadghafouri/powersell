
let swiperr = new Swiper("#mySwiperLG", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    direction: 'vertical',
    initialSlide: 1,
});

let swiperrXS = new Swiper("#mySwiperXS", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    direction: 'horizontal',
    initialSlide: 1,
});

let swiperr2 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: true,
    initialSlide: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

swiperr2.controller.control = [swiperr,swiperrXS];
swiperr.controller.control = swiperr2;
swiperrXS.controller.control = swiperr2;


let swiperr3 = new Swiper(".mySwiper3", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: false,
    effect: "fade",
    autoHeight: true,
    allowTouchMove: false,
    mousewheel: true,
});
let swiperr4 = new Swiper(".mySwiper4", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: true,
    effect: "fade",
    mousewheel: true,

    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
});

swiperr4.controller.control = swiperr3;
swiperr3.controller.control = swiperr4;

var swiper = new Swiper(".mySwiper5", {
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    }
});