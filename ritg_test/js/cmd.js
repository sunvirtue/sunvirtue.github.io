$(document).ready(function(){
	if ($(window).width() < 768) {
		$('.block-hide-show').hide();
		$('.block-operation').click(function(e){
			$(e.target).parent().children('.block-hide-show').slideToggle('slow');
			e.stopImmediatePropagation();
		});
	}
});