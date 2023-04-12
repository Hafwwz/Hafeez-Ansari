//-----window.load start here

// Animate loader off screen
$(window).on('load', function () {
	"use strict";
	$(".se-pre-con").fadeOut("slow");


});//---window.load end here


//---- document ready start here--
jQuery(document).ready(function ($) {

	"use strict";
	//--- stars winking with name ---	
	$(function () {
		setInterval(function () {
			$('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
			$('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
			$('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
			$('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
		}, 1);
	});
	//--- bootstrap tooltip and popover	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="popover"]').popover();
	});

	//----- sticky header
	if ($.isFunction($.fn.stickit)) {
		$('.nav-menu').stickit({ scope: StickScope.Document });
	}

	//chosen select plugin
	if ($.isFunction($.fn.chosen)) {

		$("select").chosen({
			"disable_search": true
		});
	}

	//parallax
	if ($.isFunction($.fn.scrolly)) {
		$('.parallax').scrolly({ bgParallax: true });
	}



	// auto typer typed	
	if ($.isFunction($.fn.typed)) {
		$(".feature-meta > h3 span").typed({
			strings: ["Engineering", "Mathamatics", "Computer", "Science", "Climate"],
			loop: true,
			startDelay: 1e3,
			backDelay: 3e3,
			typeSpeed: 30
		});
	}

	//===== owl carousel  =====//
	if ($.isFunction($.fn.owlCarousel)) {
		$('.kid-grade').owlCarousel({
			items: 7,
			loop: true,
			margin: 30,
			autoplay: false,
			autoplayTimeout: 1500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: true,
			dots: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 4,
				},
				600: {
					items: 6,

				},
				1000: {
					items: 7,
				}
			}

		});

		//most related played carousel home page
		$('.most-related-caro').owlCarousel({
			items: 4,
			loop: true,
			margin: 15,
			autoplay: false,
			autoplayTimeout: 1500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: true,
			dots: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 4,
				},
				600: {
					items: 4,

				},
				1000: {
					items: 4,
				}
			}
		});
	}


	// slick carousel for detail page
	if ($.isFunction($.fn.slick)) {
		// home top feature area 
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			slide: 'li',
			fade: false,
			asNavFor: '.slider-nav'

		});
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: false,
			slide: 'li',
			vertical: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
						infinite: true,
						vertical: true,
						centerMode: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						vertical: true,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						vertical: false,
						slidesToScroll: 1

					}
				}
			]
		});

		/*$('.slider-for-gold').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			slide: 'li',
			fade: false,
			asNavFor: '.slider-nav'
		});

		$('.slider-nav-gold').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for-gold',
			dots: false,
			arrows: true,
			slide: 'li',
			vertical: true,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					vertical: false,
					centerMode: true,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					vertical: false,
					centerMode: true,
					dots: false,
					arrows: false
				}
			}
			]
		});*/
	}

	//wow animations	
	new WOW().init();


	//----- count down timer		
	if ($.isFunction($.fn.downCount)) {
		$('.countdown').downCount({
			date: '11/12/2021 12:00:00',
			offset: +10
		});
	}

	//counter for funfacts
	if ($.isFunction($.fn.counterUp)) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	}

	// Responsive nav dropdowns
	$('li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});

	/*==============================================================*/
	// Hero slider
	/*==============================================================*/
	var $bannerSlider = jQuery('.banner-slider');
	var $bannerFirstSlide = $('div.banner-slide:first-child');

	$bannerSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]');
		slideanimate($firstAnimatingElements);
	});
	$bannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		slideanimate($animatingElements);
	});
	$bannerSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: false,
		swipe: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					autoplaySpeed: 4000,
					swipe: true,
				}
			}
		]
	});
	function slideanimate(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}

	// data color
	jQuery("[data-color]").each(function () {
		jQuery(this).css('color', jQuery(this).attr('data-color'));
	});
	// data background color
	jQuery("[data-bgcolor]").each(function () {
		jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
	});
});//document ready end












