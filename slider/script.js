function initSlider(options){
	var left = $("#slider__left"),
		right = $("#slider__right"),
		wrapper = $("#slider__wrapper"),
		length = wrapper.children().length,
		slides = $(".slider__slide"),
		number = (options.startSlide >= length ?  0 : options.startSlide) || 0;

	
	// --- Init dots --- //

	var htmlString = "";

	for(var i = 0; i < length; i++){
		htmlString += "<button></button>";
	}

	$(".slider__dots").html(htmlString);

	var dots = $(".slider__dots>button");

	dots.each(function(index){
		$(this).data("item-number", index);
	})

	dots.on('click', function(){
		$(dots[number]).removeAttr("style");

		number = $(this).data("item-number");

		$(dots[number]).css("opacity", "1");

		wrapper.animate({left: - (number + 1) * 100 + "%"}, 500);
	})

	$(dots[number]).css("opacity", "1");

	// ---------------- //


	// --- Set width and create copy slides --- //

	wrapper.css("width", 100 * ( 2 + length ) + "%");


	$(slides[0]).clone().appendTo(".slider__wrapper");

	$(slides[length - 1]).clone().prependTo(".slider__wrapper");

	$(".slider__slide").each(function(index){
		$(this).css("width", 100/(length + 2) + "%");
	})

	// ---------------- //


	// --- Set start slide --- //


	wrapper.css("left", - (number + 1) * 100 + "%");

	// ---------------- //


	// --- Init right and left buttons --- //

	right.on('click', function(){

		if( length <= number + 1){
			wrapper.animate({left: - (number + 2) * 100 + "%"},
				500,
				"swing",
				function(){wrapper.css("left", "-100%" )}
			);
			$(dots[number]).removeAttr("style");

			number = 0;

			$(dots[number]).css("opacity", "1");
			return
		}

		number++;
		wrapper.animate({left: - (number + 1) * 100 + "%"}, 500);

		$(dots[number-1]).removeAttr("style");
		$(dots[number]).css("opacity", "1");
	})


	left.on('click', function(){

		if( 0 > number - 1 ){			
			wrapper.animate({left: - number * 100 + "%"},
				500,
				"swing",
				function(){wrapper.css("left", - length * 100 + "%" )}
			);

			$(dots[number]).removeAttr("style");

			number = length - 1;

			$(dots[number]).css("opacity", "1");
			return
		}

		number--;
		wrapper.animate({left: - (number + 1) * 100 + "%"}, 500);

		$(dots[number+1]).removeAttr("style");
		$(dots[number]).css("opacity", "1");
	})
}

initSlider({startSlide: 5})