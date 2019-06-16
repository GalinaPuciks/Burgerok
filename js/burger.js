const hamburger = document.querySelector ('.fullscreen');
const fullscreen = document.querySelector('.hamburger-menu-link');
const close = document.querySelector ('.hamburger-menu-close');
const body = document.querySelector ('body');
const itemFullscreen = document.querySelectorAll ('.menu__item-fullscreen')

fullscreen.addEventListener('click', function (event) {
event.preventDefault();
body.classList.add('hidden');
hamburger.style.display = 'flex';
});

itemFullscreen.addEventListener('click', function (remove) {
   hamburger.style.display = 'none';
});

close.addEventListener ('click', function (c) {
   fullscreen.style.display = 'none';
});



