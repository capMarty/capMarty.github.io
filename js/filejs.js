window.onload = function () {
    
	setTimeout(function(){
		prelNone();
	}, 1000);


	function prelNone () {
		let prel = document.querySelector("#wrap-preloader");
		let block = document.querySelector(".wrapper");
		// console.log(block)
		prel.style.display = "none";
		block.classList.remove("wrapper");
	}
	// links to go to sections
	let anchor = document.querySelectorAll("nav a");
	// sections themselves
	let section = document.querySelectorAll(".anchorTo");
	// the location of links and sections must match
	anchor.forEach( elem => {
		elem.onclick = function (event){
			event.preventDefault();
			let index = parseInt(this.getAttribute("data-target"));
			section[index].scrollIntoView({block: "start", behavior: "smooth"});
		}
	});
} 