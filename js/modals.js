const reviews = document.querySelector('.reviews__list'),
      overlay = document.querySelector('.overlay'),
      popupText = document.querySelector('.popup__text');

reviews.addEventListener('click', m => {
  let element = m.target;
  
  if (element.tagName === "BUTTON") {
    let modalText = element.previousElementSibling.innerHTML;
    
    popupText.innerHTML = modalText;
    overlay.style.display = "block";
  }
});

document.addEventListener('keyup', m => {
  let keyName = m.keyCode;
  
  if (keyName === 27) {
    overlay.style.display = "none";
  }
})