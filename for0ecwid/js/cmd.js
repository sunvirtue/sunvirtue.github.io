let inputField = document.getElementsByClassName("input__field");
let inputBtn = document.querySelector(".input__btn");
let textareaField = document.querySelector(".textarea__field");
let gruzin = document.querySelector(".gruzin");
let colba = document.querySelector(".colba");
let percent = document.querySelector(".percent");

function replenishmentRange(){
	console.log(inputField[0].value);
	if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 20;
		colba.style.background= "linear-gradient(rgb(250 227 151) 20%, white 20%)";
		gruzin.style.transform = "translate(0, "+54+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 20;
		colba.style.background= "linear-gradient(rgb(250 227 151) 20%, white 20%)";
		gruzin.style.transform = "translate(0, "+54+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 20;
		colba.style.background= "linear-gradient(rgb(250 227 151) 20%, white 20%)";
		gruzin.style.transform = "translate(0, "+54+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 20;
		colba.style.background= "linear-gradient(rgb(250 227 151) 20%, white 20%)";
		gruzin.style.transform = "translate(0, "+54+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 20;
		colba.style.background= "linear-gradient(rgb(250 227 151) 20%, white 20%)";
		gruzin.style.transform = "translate(0, "+54+"px)";
	}

	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 40;
		colba.style.background= "linear-gradient(rgb(250 227 151) 40%, white 40%)";
		gruzin.style.transform = "translate(0, "+54*2+"px)";
	}

	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value == ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}
	else if(inputField[0].value == '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 60;
		colba.style.background= "linear-gradient(rgb(250 227 151) 60%, white 60%)";
		gruzin.style.transform = "translate(0, "+54*3+"px)";
	}

	else if(inputField[0].value == '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 80;
		colba.style.background= "linear-gradient(rgb(250 227 151) 80%, white 80%)";
		gruzin.style.transform = "translate(0, "+54*4+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value == '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 80;
		colba.style.background= "linear-gradient(rgb(250 227 151) 80%, white 80%)";
		gruzin.style.transform = "translate(0, "+54*4+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value == '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 80;
		colba.style.background= "linear-gradient(rgb(250 227 151) 80%, white 80%)";
		gruzin.style.transform = "translate(0, "+54*4+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value == '' && textareaField.value != ''){
		percent.textContent = 80;
		colba.style.background= "linear-gradient(rgb(250 227 151) 80%, white 80%)";
		gruzin.style.transform = "translate(0, "+54*4+"px)";
	}
	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value == ''){
		percent.textContent = 80;
		colba.style.background= "linear-gradient(rgb(250 227 151) 80%, white 80%)";
		gruzin.style.transform = "translate(0, "+54*4+"px)";
	}

	else if(inputField[0].value != '' && inputField[1].value != '' && inputField[2].value != '' && inputField[3].value != '' && textareaField.value != ''){
		percent.textContent = 100;
		colba.style.background= "linear-gradient(rgb(250 227 151) 100%, white 100%)";
		gruzin.style.transform = "translate(0, "+54*5+"px)";
	}
	else{
		percent.textContent = 0;
		colba.style.background = "linear-gradient(rgb(250 227 151), white 0%)";
		gruzin.style.transform = "translate(0, "+0+"px)";
	}
	
}
