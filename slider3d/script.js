function initSlider(){
	var left = $("#slider__left"),
		right = $("#slider__right"),
		number = 0,
		wrapper = $("#slider__wrapper"),
		slides = $(".slider__slide"),
		view = $("#slider__view"),
		length = wrapper.children().length,
		width = wrapper.width();

	view.css("perspective", wrapper.width * length * 2);

	$.each(slides, function(index, value){
		$(this).css("transform", "rotateY(" + index * 360 / length + "deg)" + 
		" translateZ(" + (width/(2 * getTanDeg(180/length)) + 50) + "px)")
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

function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}

initSlider()