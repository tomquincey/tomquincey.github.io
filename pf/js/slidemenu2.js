(function() {
  
	var $body = document.body, 
      
  $slide_menu_trigger = $body.getElementsByClassName('slide-menu-trigger-2')[0];

	if ( typeof $slide_menu_trigger !== 'undefined' ) {
		$slide_menu_trigger.addEventListener('click', function() {
			$body.className = ($body.className == 'slide-menu-2-active') ? '' : 'slide-menu-2-active';
		});
	}
  
}).call(this);

