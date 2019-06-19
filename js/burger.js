const fullscreen  = document.querySelector ('.fullscreen');
const hamburger = document.querySelector ('.hamburger-menu-link__bars');
const body = document.querySelector ('body');
const closeMenu = document.querySelectorAll ('.hamburger-menu-close__bars')

hamburger.addEventListener('click', function (event) {
event.preventDefault();
body.classList.add('hidden');
fullscreen.style.display = 'flex';
});




fullscreen.addEventListener('click', function (directionSite) {
   directionSite.preventDefault();
   fullscreen.style.display = 'none';
  });


