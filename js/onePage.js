const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const performTransition = sectionEq => {
    if (inscroll) return;
        
         inscroll = true;
         const position = `${sectionEq * -100}%` ;
    
    
        sections
        .eq(sectionEq)
        .addClass("active-section")
        .siblings()
        .removeClass("active-section");
    
        display.css ({
            transform: `translateY(${position})`
        });

        setTimeout (() => {
            inscroll = false
        }, 1300); 
};

const scrollToSection = direction => {
    const activeSection = sections.filter(".active-section");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();


    if (direction === "next" ) {
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
            scrollToSection("next");
            break;
        case 40:
            scrollToSection("prev");
            break;
    }
})