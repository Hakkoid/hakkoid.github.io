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
}

function closeBar(e){
	document.getElementById("Nav").classList.remove("Nav__visible");
}



document.getElementById("Bar").ontouchstart = touchClick;
document.getElementById("Bar").onclick = openBar;
document.getElementById("Nav__Close").ontouchstart = touchClick;
document.getElementById("Nav__Close").onclick = closeBar;

function closeWelcome(e) {
	welcome = document.getElementById("Welcome");
	welcome.parentNode.removeChild(welcome)
}

document.getElementById("Welcome__Cancel").onclick = closeWelcome;
document.getElementById("Welcome__Cancel").ontouchstart = touchClick;

