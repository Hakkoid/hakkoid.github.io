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
	slideNumber = 0,
	slider = $("#quotes__slider-wrapper"),
	elemWidth = slider.children()[0].clientWidth,
	length = slider.children().length;



slider.css("width", length * elemWidth + "px")

rightArrow.on('click', function(){

	if(-length * elemWidth > - slideNumber * elemWidth - elemWidth - 50){
		return
	}

	slideNumber++;
	slider.animate({left: - slideNumber * 100 + "%"}, 500);
})


leftArrow.on('click', function(){

	if( 0 < - slideNumber * elemWidth + 50){
		return
	}

	slideNumber--;
	slider.animate({left: - slideNumber * 100 + "%"}, 500);
})

var directory = {};
directory.container = $("#directory__container");

directory.getHtml = function(item){
	return (
		'<div class="col-sm-6 col-lg-4"><div class="directory__item"><div></div><div><h3>' + 
		item.title + '</h3><p>' + 
		item.description + '</p></div></div></div>'
	);
}

directory.data = [
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.',
	},
	{
		type: 'photo',
		title: 'PHOTOGRAPHY',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'graphic',
		title: 'GRAPHIC DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'graphic',
		title: 'GRAPHIC DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'photo',
		title: 'PHOTOGRAPHY',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}
	,
	{
		type: 'web',
		title: 'WEB DESIGN',
		description: 'Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.'
	}

];

directory.render = function(options){
	var data = this.data;
	var html = '';

	var options = options || {};

	options.type = options.type || 'all';

	if (options.type !== 'all'){
		for (var i in data){
			if (data[i].type == options.type) {
				html += this.getHtml(data[i]);
			}
		}
	} else{

		for (var i in data){
			html += this.getHtml(data[i]);
		}
	}

	directory.container.html(html);
}

directory.render();

directory.nav = {};
directory.nav.all = $('#directory__all');
directory.nav.web = $('#directory__web');
directory.nav.photo = $('#directory__photo');
directory.nav.graphic = $('#directory__graphic');
directory.nav.selected = directory.nav.all;

directory.nav.setSelect = function(select){

	directory.nav.selected.removeClass("directory__li_selected");

	directory.nav[select].addClass("directory__li_selected");
	directory.nav.selected = directory.nav[select];

}

directory.nav.all.on('click', function(){
	directory.nav.setSelect('all');
	directory.render({type: 'all'})
})

directory.nav.web.on('click', function(){
	directory.nav.setSelect('web');
	directory.render({type: 'web'})
})

directory.nav.photo.on('click', function(){
	directory.nav.setSelect('photo');
	directory.render({type: 'photo'})
})

directory.nav.graphic.on('click', function(){
	directory.nav.setSelect('graphic');
	directory.render({type: 'graphic'})
})

directory.arrow = $('#directory__arrow');
directory.arrow.data("toggle", "false");

directory.arrow.on('click', function(){
	var arrow = directory.arrow;

	if(arrow.data("toggle") === "false"){
		arrow.data("toggle", "true");
		arrow.addClass("directory__arrow_toggled");
		directory.container.addClass("directory__container_full")
	} else{
		arrow.data("toggle", "false");
		arrow.removeClass("directory__arrow_toggled");
		directory.container.removeClass("directory__container_full")
	}

})


