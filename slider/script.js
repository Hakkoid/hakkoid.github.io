function initSlider(){
	var left = $("#slider__left"),
		right = $("#slider__right"),
		number = 0,
		wrapper = $("#slider__wrapper"),
		length = wrapper.children().length;

	wrapper.css("width", length * 100 + "%")

	right.on('click', function(){

		if( length <= number + 1){
			return
		}

		number++;
		wrapper.animate({left: - number * 100 + "%"}, 300);
	})


	left.on('click', function(){

		if( 0 > number - 1 ){
			return
		}

		number--;
		wrapper.animate({left: - number * 100 + "%"}, 300);
	})
}

initSlider()