document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('header > button');
    const header = document.querySelector('header');

    hamburgerButton.addEventListener('click', () => {
        header.classList.toggle('open');
    });
});


