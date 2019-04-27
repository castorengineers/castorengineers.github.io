$(document).ready(function() {

	// AOS Initialization
	AOS.init({
		offset: 140
	});



	// Scroll Spy
	$('body').scrollspy({
		target: '.navbar',
		offset: $('.navbar').outerHeight() + 100
	});



	// Collapse Navbar
	$('.navbar-collapse a').on('click',function() {
		$('.navbar-collapse').collapse('hide');
	});



	// Smooth Scrolling
	$(function() {
		$('a.smooth-scroll').on('click', function(event) {
			var anchor = $(this).attr('href');
			var navbarHeight = $('.navbar').outerHeight();
			$('html, body').stop().animate({
				scrollTop: $(anchor).offset().top - navbarHeight
			}, 1000);
			event.preventDefault();
		});

	});



	// Home Typer
	var homeTyper = new Typed('.home-dynamic-text', {
		backDelay: 1000,
		backSpeed: 30,
		loop: false,
		smartBackspace: false,
		strings: ['Castor Engineers.'],
		typeSpeed: 100
	});

});
