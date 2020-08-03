$(function() {
  
  $(".user-menu-link").click(function(e) {
    e.preventDefault();
    
    $(".user-menu-overlay").toggleClass("open");
    $(".user-menu").toggleClass("open");
    
    /*by me:*/
    $(".user-bodyclass").toggleClass("open");

  });
	
});