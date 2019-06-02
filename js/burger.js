const hamburger = document.querySelector ('.fullscreen');
const fullscreen = document.querySelector('.hamburger-menu-link');
const close = document.querySelector ('.hamburger-menu-close');
//const body = document.querySelector ('body')

fullscreen.addEventListener('click', function (e) {
  fullscreen.style.display = 'flex';
  body.classList.add('hidden');
})

hamburger-menu-close.addEventListener ('click', function (e) {
    fullscreen.style.display = 'none';
})