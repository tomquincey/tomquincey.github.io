
/*
(function() {
  
	var $body = document.body, 
      
  $slide_menu_trigger = $body.getElementsByClassName('slide-menu-trigger-0')[0];

	if ( typeof $slide_menu_trigger !== 'undefined' ) {
		$slide_menu_trigger.addEventListener('click', function() {
			$body.className = ($body.className == 'slide-menu-0-active') ? '' : 'slide-menu-0-active';
		});
	}
  
}).call(this); */

$(document).ready(function () {
       /*
    $('.slide-menu-trigger-0').toggle(
        function () {
            $('.bodyclass').addClass('slide-menu-0-active');
        },
    ) */
  
  $('.slide-menu-trigger-0').click(function(){
      $('.bodyclass').addClass('slide-menu-0-active').removeClass('slide-menu-0-f-active slide-menu-0-circuits-active');
  });
  $('.slide-menu-trigger-0-f').click(function(){
      $('.bodyclass').addClass('slide-menu-0-f-active').removeClass('slide-menu-0-active');
  });
  $('.slide-menu-trigger-0-circuits').click(function(){
      $('.bodyclass').addClass('slide-menu-0-circuits-active').removeClass('slide-menu-0-active');
  });
  $('.slide-menu-trigger').click(function(){
      $('.bodyclass').addClass('slide-menu-active').removeClass('slide-menu-2-active slide-menu-3-active slide-menu-4-active');
  });
  $('.slide-menu-trigger-2').click(function(){
      $('.bodyclass').removeClass('slide-menu-active').addClass('slide-menu-2-active');
  });
  $('.slide-menu-trigger-3const').click(function(){
      $('.bodyclass').removeClass('slide-menu-active').addClass('slide-menu-3-active');
  });
  $('.slide-menu-trigger-4').click(function(){
      $('.bodyclass').removeClass('slide-menu-active').addClass('slide-menu-4-active');
  });
  
  
  $('#slide-content-darken').click(function(){
      $('.bodyclass').removeClass('slide-menu-0-active slide-menu-0-f-active slide-menu-0-circuits-active slide-menu-active slide-menu-2-active slide-menu-3-active slide-menu-4-active');
  });
  
});

/*
  $('.childA').click(function(){
      $('.childA').addClass('activeA').siblings().removeClass('activeB activeC activeD');       
      App.yesButton.addClass('activeConfirmButton');
  }); */




/*
	var $body = document.body, 
      
  $slide_menu_trigger = $body.getElementsByClassName('slide-menu-trigger')[0];

	if ( typeof $slide_menu_trigger !== 'undefined' ) {
		$slide_menu_trigger.addEventListener('click', function() {
			$body.className = ($body.className == 'slide-menu-active') ? '' : 'slide-menu-active';
		});
	}
  */