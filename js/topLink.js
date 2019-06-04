let btnToUp = document.querySelector("#btnToUp");
let scrolled;
let timer1;
window.onscroll = function () {
	scrolled = window.pageYOffset;
	let display = (scrolled > 700) ? "block" : "none";
	btnToUp.style.display = display;
}

btnToUp.onclick = scrollToUp;	

function scrollToUp() {
	if (scrolled > 0){
		window.scrollTo(0, scrolled);
		scrolled -= 120;
		timer1 = setTimeout(scrollToUp, 10) 
	}
	else{
		clearTimeout(timer1);
		window.scrollTo(0,0);
	}
}


