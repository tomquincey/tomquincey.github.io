(function() {
  
	var $body = document.body, 
      
  $slide_menu_trigger = $body.getElementsByClassName('slide-menu-trigger')[0];

	if ( typeof $slide_menu_trigger !== 'undefined' ) {
		$slide_menu_trigger.addEventListener('click', function() {
			$body.className = ($body.className == 'slide-menu-active') ? '' : 'slide-menu-active';
		});
	}
  
  
  // $('.button.yes .trigger')
  /*
	var $body = document.body;

  $('.slide_menu_trigger').click(function(){
      $body.addClass('slide-menu-active'); 
  });
  
  $('.bodyclass').click(function(){
      $('.bodyclass').removeClass('slide-menu-active'); 
  }); */
  
}).call(this);

