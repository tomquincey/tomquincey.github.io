(function() {
  
	var $body = document.body, 
      
  $slide_menu_trigger = $body.getElementsByClassName('slide-menu-trigger-3const')[0];

	if ( typeof $slide_menu_trigger !== 'undefined' ) {
		$slide_menu_trigger.addEventListener('click', function() {
			$body.className = ($body.className == 'slide-menu-3-active') ? '' : 'slide-menu-3-active';
		});
	}
  
}).call(this);

