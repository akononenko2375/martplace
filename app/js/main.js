$(function () {

	$('.featured__slider').slick({

		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrows-left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrows-right.svg"></button>'
	});

	$('.followers__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		variableWidth: true,

		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrows-left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrows-right.svg"></button>'
	});

	$('.feedback__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrows-l.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrows-r.svg"></button>'

	});

	$(".rate-star").rateYo({
		rating: 4.5,
		starWidth: "15px",
		spacing: "3px",
		readOnly: true
	});


	$('.category-box__aside-category').on('click', function () {
		$('.category-list').slideToggle();
		$('.category-box__aside-title.categories').toggleClass('active');
	});




	var mixer = mixitup('.newest__inner-box');

});