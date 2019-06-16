const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const switchActiveClassSideMenu = menuItemIndex => {
    $('.fixed__menu-item')
    .eq(menuItemIndex)
    .addClass("active")
    .siblings ()
    .removeClass("active");
}

const performTransition = sectionEq => {
    if (inscroll) return;
        
         inscroll = true;
         const position = `${sectionEq * -100}%` ;
    
    
        sections
        .eq(sectionEq)
        .addClass("active")
        .siblings()
        .removeClass("active");
    
        display.css ({
            transform: `translateY(${position})`
        });

        setTimeout (() => {
            switchActiveClassSideMenu(sectionEq);
            inscroll = false
        }, 1300); 
};

const scrollToSection = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();


    if (direction === "next" && nextSection.length ) {
        performTransition (nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        performTransition (prevSection.index());
    }
};

$(".wrapper").on ("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollToSection ("next");
    }

    if (deltaY < 0) {
        scrollToSection ("prev");
    }
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

$("[data-scroll-to]").on ("click", e => {
    e.preventDefault();
    const target = $(e.currentTarget).attr("data-scroll-to");

    performTransition(target);
});

$(window).swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData){
      const nextOrPrev = direction === "up" ? "next" : "prev";
      scrollToSection(nextOrPrev);
    }
});