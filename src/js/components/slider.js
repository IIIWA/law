// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// ===============================----news----==============================

var swiper = new Swiper('.news__swiper-block', {
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

    // autoplay: {
    //     delay: 4000, // время между слайдами (3 секунды)
    //     disableOnInteraction: false, // не останавливать после клика
    // },

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

// var swiper = new Swiper('.news__slider', {
//     loop: true,

//     slidesPerView: 3,
//     spaceBetween: 20,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });
