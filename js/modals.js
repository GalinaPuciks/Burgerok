const reviews = document.querySelector('.reviews__list'),
      overlay = document.querySelector('.overlay'),
      popupText = document.querySelector('.popup__text');
      popupTitle = document.querySelector ('.popup__title')
      modalClose = document.querySelector('.hamburger-menu-close__bars');

reviews.addEventListener('click', e => {
  let element = e.target;
  let elem = element.previousElementSibling;
  


  
  if (element.tagName === "BUTTON") {
    let modalText = element.previousElementSibling.innerHTML;
    let modalTitle =  elem.previousElementSibling.innerHTML;
  
   

    popupTitle.innerHTML = modalTitle;
    popupText.innerHTML = modalText;
    overlay.style.display = "block";
   
  }

  
  
  
});

//закрытие по esc
document.addEventListener('keyup', e => {
  let keyName = e.keyCode;
  
  if (keyName === 27) {
    overlay.style.display = "none";
  }
})



