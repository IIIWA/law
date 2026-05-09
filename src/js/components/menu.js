// ===============================----Mobile Menu----==============================

let burgerIconBurger = document.querySelector('.burger-icon__burger');
let burgerIconBack = document.querySelector('.burger-icon__back');
document.addEventListener('click', burgerInit);

function burgerInit(event) {
    let target = event.target;
    let burgerIcon = target.closest('.burger-icon');

    let burgerNavLink = target.closest('.nav__link');

    let sidebar = target.closest('.menu');

    if (!sidebar && !burgerIcon) {
        burgerIconBurger.classList.remove('hidden');
        burgerIconBack.classList.add('hidden');

        document.body.classList.remove('body--no-scroll');
        document.body.classList.remove('body--opened-menu');
    }

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 1200) return;

    if (burgerIcon) {
        event.preventDefault();
    }

    if (!document.body.classList.contains('body--opened-menu')) {
        burgerIconBack.classList.remove('hidden');
        burgerIconBurger.classList.add('hidden');

        document.body.classList.add('body--opened-menu');
        document.body.classList.add('body--no-scroll');
    } else {
        burgerIconBurger.classList.remove('hidden');
        burgerIconBack.classList.add('hidden');

        document.body.classList.remove('body--no-scroll');

        document.body.classList.remove('body--opened-menu');
    }
}
