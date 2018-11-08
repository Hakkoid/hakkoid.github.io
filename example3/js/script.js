var bar = $("#navigation__bar"),
	nav = $("#navigation"),
	navUl = $("#navigation__ul"),
	close = $("#navigation__close");


bar.on('click', function () {
	nav.addClass("navigation_full-page");
	navUl.addClass("navigation__ul_full-page");
	close.addClass("navigation__close_full-page");
})

close.on('click', function() {
	nav.removeClass("navigation_full-page");
	navUl.removeClass("navigation__ul_full-page");
	close.removeClass("navigation__close_full-page");
})

$('.navigation__li_mobile').each(function () {
	$(this).on('click', function() {
		nav.removeClass("navigation_full-page");
		navUl.removeClass("navigation__ul_full-page");
		close.removeClass("navigation__close_full-page");
	})
})

var leftArrow = $("#quotes__left"),
	rightArrow = $("#quotes__right"),
	slideNumber = 0;


leftArrow.on('click', function(){
	var slider = $("#quotes__slider-wrapper");
	var elemWidth = slider.children()[0].clientWidth;
	var length = slider.children().length;

	if(-length * elemWidth > - slideNumber * elemWidth - elemWidth - 50){
		return
	}

	slider.animate({left: - slideNumber * elemWidth - elemWidth + "px"}, 1000);
	slideNumber++;

})


rightArrow.on('click', function(){
	var slider = $("#quotes__slider-wrapper");
	var elemWidth = slider.children()[0].clientWidth;
	var length = slider.children().length;

	if( 0 < - slideNumber * elemWidth + 50){
		return
	}

	slider.animate({left: - slideNumber * elemWidth + elemWidth + "px"}, 1000);
	slideNumber--;
})