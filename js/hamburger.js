(function($){
    $(function() {
      $('.hamburger-menu-link').on('click', function() {
        $(this).closest('.hamburger-menu-close__bars').toggleClass('menu_state_open');
      });
    });
  })(jQuery);