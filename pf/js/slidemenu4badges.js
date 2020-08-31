(function() {
  
	var $body = document.body, 
      
  $slide_menu_trigger = $body.getElementsByClassName('slide-menu-trigger-4badges')[0];

	if ( typeof $slide_menu_trigger !== 'undefined' ) {
		$slide_menu_trigger.addEventListener('click', function() {
			$body.className = ($body.className == 'slide-menu-4-active') ? '' : 'slide-menu-4-active';
		});
	}
  
}).call(this);

