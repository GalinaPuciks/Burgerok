const teamItem = document.querySelectorAll('.team-acco__item'),
     teamAcco = document.querySelector('.team-acco__content'),
teamaccoLength = teamAcco.length;

     teamItem.addEventListener('click', function(e) {
       for (let n = 0; n < teamItemLength; i++) {
         teamItem[n].classList.remove('team-acco__content--active');
       }
     });

     for (let n = 0; n < teamItemLength; n++) {

         if (teamItem[n].classList.contains('team-acco__content--active')) {
              teamItem[n].classList.remove('team-acco__content--active')
         } else {
           for (let n = 0; n < accoItemLength; n++) {
             teamItem[n].classList.remove('team-acco__content--active');
           }

           teamItem[n].classList.add('team-acco__content--active')
         }
        };