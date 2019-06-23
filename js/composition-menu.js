const composition = document.querySelector ('.composition-list');
const menubars = document.querySelector ('composition-menu-close__bars');


menubars.addEventListener('click', function (closeMenu) {
    closeMenu.stopPropagation();
    closeMenu.preventDefault();
    composition.classList.add = ('no-hover');
   });





