$(document).ready(function () {
  
  openDropdown();

});

// FUNCTIONS

// funzione al click su un li dropdown
function openDropdown() {
  
  $('header .nav-menu li.dropdown').click(function() { 
    if (!$(this).hasClass('active')) {
      $('header .nav-menu .right li').removeClass('active');
      $('header .nav-menu .dropdown-content').removeClass('open');
      $(this).addClass('active');
      $('header .nav-menu li.active .dropdown-content').addClass('open');
    } else {
      $('header .nav-menu .right li').removeClass('active');
      $('header .nav-menu .dropdown-content').removeClass('open');
    }

  });



}