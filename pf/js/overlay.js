$(function() {
  
  $(".menu-link").click(function(e) {
    e.preventDefault();
    
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
    
    /*by me:*/
    $(".bodyclass").toggleClass("open");

  });
	
});