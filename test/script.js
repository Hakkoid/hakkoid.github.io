jQuery( document ).ready(function() {
	var popup = jQuery(".popup-map");
	var popupText = jQuery(".popup-map__text");
	
	jQuery('.map-svg>path').mouseover(function(event){
			if (jQuery(this).data("country-name")){
				popupText.text(jQuery(this).data("country-name"))
				popup.css({"top" : event.pageY + 5, "left" : event.pageX + 5, "opacity" : 1});
			}
	}).mouseout(function() {
		popup.css({"opacity": 0})
	})
})