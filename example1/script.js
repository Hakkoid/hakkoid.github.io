function submit(event){

	var addtocart = event.target.addtocart;
	var addtowishlist = event.target.addtowishlist;

	if(addtocart.dataset.clicked === "true"){
	}

	if(addtowishlist.dataset.clicked === "true"){
	}
	clearSubmit();
	event.preventDefault();
}

function clickSubmit(event){
	event.target.dataset.clicked = "true";
}

function clearSubmit(){
	document.getElementById("AddToCart").dataset.clicked=null;
	document.getElementById("AddToWishlist").dataset.clicked=null;
}

document.getElementById("Buy").onsubmit = submit;
document.getElementById("AddToCart").onclick = clickSubmit;
document.getElementById("AddToWishlist").onclick = clickSubmit;

function touchClick(e){
	e.preventDefault();
	e.target.onclick()
}

function openBar(e){
	document.getElementById("Nav").classList.add("Nav__visible");
	body.style.overflow = "hidden";
}

function closeBar(e){
	document.getElementById("Nav").classList.remove("Nav__visible");
	body.style.overflow = "auto";
}



var bar = document.getElementById("Bar");
var close = document.getElementById("Nav__Close");
var body =  document.getElementById("body");

bar.ontouchstart = touchClick;
bar.onclick = openBar;
close.ontouchstart = touchClick;
close.onclick = closeBar;

function closeWelcome(e) {
	welcome = document.getElementById("Welcome");
	welcome.parentNode.removeChild(welcome)
}

document.getElementById("Welcome__Cancel").onclick = closeWelcome;
document.getElementById("Welcome__Cancel").ontouchstart = touchClick;

