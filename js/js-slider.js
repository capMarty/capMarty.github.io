let indexMove = 0;
let slider = document.querySelector("#container");
let countImg = slider.children.length;
let paramForLeft = ( countImg - 3 ) * 305;

slider.style.width = `${countImg * 305}px`;

document.querySelector("#btn-left").onclick = moveLeft;
function moveLeft() {
	if (indexMove ===  -paramForLeft) indexMove = 305;
	indexMove -=305;
	slider.style.left = `${indexMove}px`;	
}

document.querySelector("#btn-right").onclick = moveRight;
function moveRight() {
	if (!indexMove) indexMove = -1525;
	indexMove += 305;
	slider.style.left = `${indexMove}px`;
}
setInterval(function () {
	moveLeft()
}, 7000);