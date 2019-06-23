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

/////fullscreen

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

  

////form
const orderForm = document.querySelector('#order-form');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(orderForm)) {
       const data = {
           name: orderForm.elements.name.value,
           phone: orderForm.elements.phone.value,
           comment: orderForm.elements.comment.value 
       };
       const xhr = new XMLHttpRequest ();
       xhr.responseType = 'json';
       xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
       xhr.send(JSON.stringify(data));
       xhr.addEventListener('load', () => {
           if (xhr.response.status) {
            console.log ('успешно');
           }
       });
    }
});

function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }

}

/////maps

function initMap () {
    var pos = {lat: 59.715529, lng: 10.838702};
    var opt = {
        center: pos,
        zoom: 18,
};

var myMap = new google.maps.Map(document.getElementById("map"), opt);

var marker = new google.maps.Marker ({
    position: pos,
    map: myMap,
    title: "Her kan du kjøpe burger!",
    icon : './img/img_map/map-marker.png'

});

var marker = new google.maps.Marker ({
    position: {lat:59.714850, lng:10.837068},
    map: myMap,
    title: "Her kan du kjøpe burger!",
    icon : './img/img_map/map-marker.png'

});
}

/////modals
const reviews = document.querySelector('.reviews__list'),
      overlay = document.querySelector('.overlay'),
      popupText = document.querySelector('.popup__text');
      popupTitle = document.querySelector ('.popup__title')
      modalClose = document.querySelector('.reviews-menu-close__bars');

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
modalClose.addEventListener('click', function (remove) {
 remove.preventDefault();
 overlay.style.display = 'none';
});

//закрытие по esc
document.addEventListener('keyup', e => {
  let keyName = e.keyCode;
  
  if (keyName === 27) {
    overlay.style.display = "none";
  }
})


//////onepage
const sections = $(".section");
const display = $(".maincontent");

let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);

const isMobile = md.mobile();

const switchActiveClassInSideMenu = menuItemIndex => {
  $(".fixed__menu-item")
    .eq(menuItemIndex)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const performTransition = sectionEq => {
  if (inscroll) return;

  const sectionEqNum = parseInt(sectionEq);

  if (!!sectionEqNum === false)
    console.error("не верное значение для аргуемента sectionEq");

  inscroll = true;

  const position = sectionEqNum * -100 + "%";

  sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    inscroll = false;
    switchActiveClassInSideMenu(sectionEq);
  }, 1000 + 300); 
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(".wrapper").on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection("next");
  }
  if (deltaY < 0) {
    scrollToSection("prev");
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
});

$(document).on("keydown", e => {
  switch (e.keyCode) {
    case 38:
      scrollToSection("prev");
      break;
    case 40:
      scrollToSection("next");
      break;
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  const target = $(e.currentTarget).attr("data-scroll-to");

  performTransition(target);
});

if (isMobile) {
  $(window).swipe({
    swipe: function(event, direction) {
      const nextOrPrev = direction === "up" ? "next" : "prev";
      scrollToSection(nextOrPrev);
    }
  });
}


////////player
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    width: "660",
    height: "405",
    videoId: "cdMxTP1Ecbo",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const duration = player.getDuration();
  let interval;
  updateTimerDisplay();

  $(".player").removeClass("hidden");

  clearInterval(interval);

  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percents = (completed / duration) * 100;

    changeButtonPosition(percents);

    updateTimerDisplay();
  }, 1000);
}

function onPlayerStateChange(event) {
  const playerButton = $(".player__start");
  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("active");
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
}

$(".player__start").on("click", e => {
  const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});


$(".player__playback").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  changeButtonPosition(clickedPercents);
  player.seekTo(newPlayerTime);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

function changeButtonPosition(percents) {
  $(".player__playback-button").css({
    left: `${percents}%`
  });
}

function updateTimerDisplay() {
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formatedSeconds;
}

function editVolume () {				
	if (player.getVolume() == 0) {
		player.setVolume('100');
	} else {
		player.setVolume('0');
	}
}
function editVolume () {				
	if (player.getVolume() == 0) {
		player.setVolume('100');
	} else {
		player.setVolume('0');
	}
}


/////slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlide() {
    
    showSlides(slideIndex += 1);
}
function minusSlide() {
    
    showSlides(slideIndex -= 1);  
    
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("burger__slider-list");

   
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    
    slides[slideIndex - 1].style.display = "flex";
 
   
}

//////team
const team = document.querySelector('.team'),
      teamItem = document.querySelectorAll('.team-acco__item'),
      teamItemLength = teamItem.length;

team.addEventListener('click', function(e) {
  for (let i = 0; i < teamItemLength; i++) {
    teamItem[i].classList.remove('team-acco__item--active');
  }
});

for (let i = 0; i < teamItemLength; i++) {
 
  teamItem[i].addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (teamItem[i].classList.contains('team-acco__item--active')) {
         accoItem[i].classList.remove('team-acco__item--active')
    } else {
      for (let i = 0; i < teamItemLength; i++) {
        teamItem[i].classList.remove('team-acco__item--active');
      }
       
      teamItem[i].classList.add('team-acco__item--active')
    }
  });
}

////composition-menu
const composition = document.querySelector ('.composition-list');
const menubars = document.querySelector ('composition-menu-close__bars');


menubars.addEventListener('click', function (closeMenu) {
    closeMenu.stopPropagation();
    closeMenu.preventDefault();
    composition.classList.add = ('no-hover');
   });