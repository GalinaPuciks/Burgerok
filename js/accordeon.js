//accordeon

const menu = document.querySelector('.product'),
      accoItem = document.querySelectorAll('.menu__accordeon-item'),
      accoItemLength = accoItem.length;

menu.addEventListener('click', function(e) {
  for (let i = 0; i < accoItemLength; i++) {
    accoItem[i].classList.remove('menu__accordeon-item--active');
  }
});

for (let i = 0; i < accoItemLength; i++) {
 
  accoItem[i].addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (accoItem[i].classList.contains('menu__accordeon-item--active')) {
         accoItem[i].classList.remove('menu__accordeon-item--active')
    } else {
      for (let i = 0; i < accoItemLength; i++) {
        accoItem[i].classList.remove('menu__accordeon-item--active');
      }
       
      accoItem[i].classList.add('menu__accordeon-item--active')
    }
  });
}
