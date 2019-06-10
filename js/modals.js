const reviews = document.querySelector('.reviews__list'),
      overlay = document.querySelector('.overlay'),
      popupText = document.querySelector('.popup__text');

reviews.addEventListener('click', e => {
  let element = e.target;
  
  if (element.tagName === "BUTTON") {
    let modalText = element.previousElementSibling.innerHTML;
    
    popupText.innerHTML = modalText;
    overlay.style.display = "block";
  }
});

document.addEventListener('keyup', e => {
  let keyName = e.keyCode;
  
  if (keyName === 27) {
    overlay.style.display = "none";
  }
})



