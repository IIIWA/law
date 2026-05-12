document.addEventListener('click', (e) => {
    // открыть
    if (e.target.closest('.open-modal-form')) {
        e.preventDefault();
        document.body.classList.add('body--opened-modal__contact-form');
    }

    // закрыть
    if (
        e.target.closest('.modal__contact-form-cancel') ||
        e.target.classList.contains('modal__contact-form')
    ) {
        document.body.classList.remove('body--opened-modal__contact-form');
    }
});

//

document.addEventListener('wpcf7mailsent', function (event) {
    // проверяем, что это нужная форма (опционально)
    if (event.target.closest('.modal__contact-form')) {
        // закрываем форму
        document.body.classList.remove('body--opened-modal__contact-form');

        // открываем success
        document.body.classList.add('body--opened-modal__success');
    }
});

document.addEventListener('click', (e) => {
    if (
        e.target.closest('.modal__success-cancel') ||
        e.target.classList.contains('modal__success')
    ) {
        document.body.classList.remove('body--opened-modal__success');
    }
});
