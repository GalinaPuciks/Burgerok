const team = document.querySelector('.team__section');
const teamContent = document.querySelector('.team-acco__content');
const teamItem = document.querySelector ('.team-acco__item');
const teamItemLength = teamItem.length;


team.addEventListener('click', function(t) {
    for (let i = 0; i < teamItemLength; i++) {
      teamContent[i].classList.remove('team-acco__content--active');
    }
  });

  for (let i = 0; i < teamItemLength; i++) {
 
    teamItem[i].addEventListener('click', function(d) {
      d.stopPropagation();
      d.preventDefault();
      
      if (teamItem[i].classList.contains('team-acco__content--active')) {
           teamItem[i].classList.remove('team-acco__content--active')
      } else {
        for (let i = 0; i < teamItemLength; i++) {
          teamItem[i].classList.remove('team-acco__content--active');
        }
         
        accoItem[i].classList.add('team-acco__content--active')
      }
    });
  }







