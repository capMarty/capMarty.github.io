let array = [];
let totalarr = [];
let form = document.querySelectorAll('.box');


form.forEach( elem => {
	array.push(elem.children);
})

for (let i = 0; i < array.length; i++){
	for( let j = 0; j < array[i].length; j++){
		totalarr.push(array[i][j]);
	}
}
