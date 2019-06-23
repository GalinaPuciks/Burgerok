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






