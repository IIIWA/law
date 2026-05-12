// ===============================----Header-TOP----==============================
let lastScroll = 0;
let header = document.querySelector('.header__top');

window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // скролл вниз
        header.classList.add('header__top--hidden');
    } else {
        // скролл вверх
        header.classList.remove('header__top--hidden');
    }

    lastScroll = currentScroll;
});
