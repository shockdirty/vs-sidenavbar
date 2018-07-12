	$(function(){
		$('.toggle_nav').click(function(e){

			$('.vs_sidebar').toggleClass('show');
		});

		$('.vs_sidebar .nav-item .nav-link').click(function(){

			$('.vs_sidebar .nav-item .nav-link').removeClass('active');
			$(this).addClass('active');

		});
	});