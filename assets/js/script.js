$(document).ready(function () {
  
  dropdown();
  closeDropdown();

});

// FUNCTIONS

// funzione al click su un li dropdown
function dropdown() {
  
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

// funzione per chiudere dropdown anche al click in altri punti
function closeDropdown() {
  
  $('html').click(function() {
    $('header .nav-menu .right li').removeClass('active');
    $('header .nav-menu .dropdown-content').removeClass('open');
  });
   
  $('header .nav-menu li.dropdown, header .nav-menu .dropdown-content').click(function(event){
    event.stopPropagation();
  });
}