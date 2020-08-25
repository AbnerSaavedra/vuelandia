(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
	  $('#sidebar').removeClass('non-active');
      $('#sidebar').toggleClass('active');
  });

  $('#sidebarDisplay').on('click', function () {
	$('#sidebar').removeClass('active');
	$('#sidebar').toggleClass('non-active');
});

})(jQuery);
