function initSlider(){
	var left = $("#slider__left"),
		right = $("#slider__right"),
		number = 0,
		wrapper = $("#slider__wrapper"),
		slides = $(".slider__slide"),
		length = wrapper.children().length;
		console.log(length)

	$.each(slides, function(index, value){
		$(this).css("transform", "rotateY(" + index * 360 / length + "deg)" + " translateZ(" + wrapper.width() * 1.3 + "px)")
	})

	right.on('click', function(){

		number++;
		wrapper.css("transform", "rotateY(" + - number * 360 / length + "deg)");
	})


	left.on('click', function(){
		number--;
		wrapper.css("transform", "rotateY(" + - number * 360 / length + "deg");
	})
}

initSlider()