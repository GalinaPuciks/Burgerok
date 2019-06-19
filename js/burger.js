const fullscreen  = document.querySelector ('.fullscreen');тщву
const close = document.querySelector ('.hamburger-menu-close__bars');
const body = document.querySelector ('body');
const itemFullscreen = document.querySelectorAll ('.menu__item-fullscreen')

hamburger.addEventListener('click', function (event) {
event.preventDefault();
body.classList.add('hidden');
fullscreen.style.display = 'flex';
});


close.addEventListener('click', function (remove) {
   remove.preventDefault();
   fullscreen.style.display = 'none';
  });

fullscreen.addEventListener('click', function (directionSite) {
   directionSite.preventDefault();
   fullscreen.style.display = 'none';
  });


