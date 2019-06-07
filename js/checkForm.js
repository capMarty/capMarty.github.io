let form = document.forms[0];
let warningText = document.querySelector(".warning");
let btnSubmit = document.querySelector("input[type='submit']");
let arrayElem = [];


for (let i = 0; i<form.elements.length; i++){
	if(form.elements[i].type !== "submit") 
		arrayElem[i] = form[i]
}
function removeAdd (elem, remove, add) {
	 elem.classList.remove(remove);
	 elem.classList.add(add);
}

function activeBtnSubmit () {
	for (let i = 0; i < arrayElem.length; i++ ){
		let iter = arrayElem[i].className
		if (iter === "focusInputError" || iter === ""){
			btnSubmit.setAttribute("disabled", "");
			btnSubmit.classList.remove("btnActive");
			break;
		}
		else{
			if(i === arrayElem.length - 1){
				btnSubmit.removeAttribute("disabled");
				btnSubmit.classList.add("btnActive");
			}	
		}
	}
}

function setFocusInput (elem, text, regul) {

	let regExp = regul;
	if (regExp.test(elem.value))
		removeAdd(elem, "focusInputError", "focusInputSuccess");
	

	warningText.innerHTML = text;
	elem.oninput = function () {
		
		if (regExp.test(elem.value)){
			removeAdd(elem, "focusInputError", "focusInputSuccess");
			activeBtnSubmit();
			
		}else {
			removeAdd(elem, "focusInputSuccess", "focusInputError");
			activeBtnSubmit();
			return false;	
		}
	}	
}
arrayElem.forEach( elem => { 
	elem.onfocus = function () {
		
		elem.classList.add("focusInputError");
		activeBtnSubmit();

		if (elem.type === "text")
			setFocusInput(elem, "имя должно содержать больше 1 символа", /[A-Za-zА-Яа-я_]{2,}$/)
		
		if (elem.type === "email")
			setFocusInput(elem, "введите email", /^.+@.+\..{2,}$/);
			
		if (elem.type === "tel")
			setFocusInput(elem, "введите телефон без +7 пример: 9XXXXXXXXX", /^[0-9]{10}$/);
			
		if (elem.type === "textarea")
			setFocusInput(elem, "сообщение должно содержать больше 10 символов", /.{11,}/);
		

		elem.onblur = function () {	
			warningText.innerHTML = "&nbsp";
		}
	}
})



