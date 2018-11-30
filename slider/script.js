function initSlider(options){
	var left = $("#slider__left"),
		right = $("#slider__right"),
		wrapper = $("#slider__wrapper"),
		length = wrapper.children().length,
		slides = $(".slider__slide");

	// --- Init options --- //

	var	options = options || {};
		number = (options.startSlide >= length ?  0 : options.startSlide) || 0,
		options.autoScroll = options.autoScroll || false;

	// ---------------- //

	
	// --- Init dots --- //

	if(options.dots == true){

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

	}

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

	right.on('click', scrollRight)


	left.on('click', scrollLeft)

	function scrollLeft(){

		if( 0 > number - 1 ){			
			wrapper.animate({left: - number * 100 + "%"},
				500,
				"swing",
				function(){wrapper.css("left", - length * 100 + "%" )}
			);

			if(options.dots == true){
				$(dots[number]).removeAttr("style");
				number = length - 1;
				$(dots[number]).css("opacity", "1");
			}else{
				number = length - 1;
			}

			return
		}

		number--;
		wrapper.animate({left: - (number + 1) * 100 + "%"}, 500);

		if(options.dots == true){
			$(dots[number+1]).removeAttr("style");
			$(dots[number]).css("opacity", "1");
		}
	}

	function scrollRight(){

		if( length <= number + 1){
			wrapper.animate({left: - (number + 2) * 100 + "%"},
				500,
				"swing",
				function(){wrapper.css("left", "-100%" )}
			);

			if(options.dots){
				$(dots[number]).removeAttr("style");
				number = 0;
				$(dots[number]).css("opacity", "1");
			}else{
				number = 0;
			}
			return
		}

		number++;
		wrapper.animate({left: - (number + 1) * 100 + "%"}, 500);
		if(options.dots){
			$(dots[number-1]).removeAttr("style");
			$(dots[number]).css("opacity", "1");
		}
	}

	// ---------------- //


	// --- Init auto scroll --- //

	if(options.autoScroll == true || typeof options.autoScroll === 'object'){
		var timerScroll;

		if(!(typeof options.autoScroll === 'object')){
			options.autoScroll = {};
		}

		options.autoScroll.delay = options.autoScroll.delay || 4000;
		options.autoScroll.direction = options.autoScroll.direction || "right";

		function createAutoFunc(delay, direction){

			if(direction === "right"){
				return function (){scrollRight(); timerScroll = setTimeout(auto, delay)}
			}else if(direction === "left"){
				return function (){scrollLeft(); timerScroll = setTimeout(auto, delay)}
			}
		}

		var auto = createAutoFunc(options.autoScroll.delay, options.autoScroll.direction);

		timerScroll = setTimeout(auto, options.autoScroll.delay);


		// --- Reset time to auto scroll --- //

		function resetAutoScrolling(){
			clearTimeout(timerScroll);
			timerScroll = setTimeout(auto, options.autoScroll.delay);
		}

		if(options.dots == true){
			dots.on('click', resetAutoScrolling)
		}
		
		right.on('click', resetAutoScrolling)


		left.on('click', resetAutoScrolling)

		// ---------------- //

	}

}

initSlider({startSlide: 2, autoScroll: {delay: 5000, direction: "right"}, dots: true})