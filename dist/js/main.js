$(document).ready(function() {
	// Burger menu
	$('.burger-menu').on("click", function() {
		$('.burger-menu, .nav ').toggleClass('active');
	});

	// Slider
	$('.slider').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		infinite: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$('.blog__slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 840,
			settings: {
				arrows: false,
				slidesToShow: 1,
			}
		}
		]
	});

	// Fixed header
	let headerH = $("#header__actions").innerHeight();
	let headerMenu = $("#header__menu");
	let scrollOffset = 0;
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		if(scrollOffset >= headerH) {
			headerMenu.addClass("fixed");
		} else {
			headerMenu.removeClass("fixed");
		}
	});
});



