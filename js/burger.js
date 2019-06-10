const hamburger = document.querySelector ('.fullscreen');
const fullscreen = document.querySelector('.hamburger-menu-link');
const close = document.querySelector ('.hamburger-menu-close');
const body = document.querySelector ('body');

fullscreen.addEventListener('click', function (event) {
event.preventDefault();
body.classList.add('hidden');
hamburger.style.display = 'flex';
})



hamburger-menu-close.addEventListener ('click', function (c) {
   fullscreen.style.display = 'none';
})