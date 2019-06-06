let form = document.forms[0];
let arrayElem = [];
let text;


for (let i = 0; i<form.elements.length; i++){
	if(form.elements[i].type !== "submit") 
		arrayElem[i] = form[i]
}

arrayElem.forEach( elem => { 
	elem.onfocus = function () {
		text = elem.getAttribute("placeholder");
		elem.setAttribute("placeholder", "");
		elem.onblur = function () {
			elem.setAttribute("placeholder", text)
		}
	}
})

// form.onsubmit = validator;

// let ruler = {
// 	requrid: function(elem){
// 		if (elem.value != '')
// 			return true;
// 		return false;	 	
// 	},
// 	email: function (elem) {
// 		let regExp = /^[\w.]+@[\w.]+\.\w.]+$/;
// 		return regExp.test(elem.value)
// 	}
// }

// function validator () {
// 		let error = [];

// 	}	

