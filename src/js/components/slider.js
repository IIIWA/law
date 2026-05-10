// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// ===============================----Usefull----==============================
var swiper = new Swiper('.usefull__swiper-block', {
    loop: true,
    slidesPerView: 3, // сколько слайдов одновременно
    spaceBetween: 20,
    autoHeight: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    speed: 1000,

    autoplay: {
        delay: 4000, // время между слайдами (3 секунды)
        disableOnInteraction: false, // не останавливать после клика
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 2.7,
        },
        1000: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2.3,
        },
        800: {
            slidesPerView: 2.1,
        },
        700: {
            slidesPerView: 1.9,
        },
        600: {
            slidesPerView: 1.7,
        },
        500: {
            slidesPerView: 1.4,
        },
        400: {
            slidesPerView: 1.2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});
