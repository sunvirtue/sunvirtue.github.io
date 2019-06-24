let namePointer = document.querySelector('.input-item-1__pointer');
let nameGroup = document.querySelector('.input-item-1__group');
let btn = document.querySelector('.send-alert');
let ntf = document.querySelector('.alert-block--show');
let ntfIcon = document.querySelector('.alert-block__box-icon-show');
let clsAlShow = 'alert-block--hide';					//показ блока алерт
let clsAlIcShow = 'alert-block__box-icon-hide';			//показ иконки блока алерт
let clsChangeClr = 'input-item-1__pointer-changed';
let clsInputItm = 'input-item-1--warn';
let inputItm = document.querySelector('.input-item-1');
let originState = namePointer.className;
let originStateInp = inputItm.className;

btn.onclick = function(){
	changeState(ntf, clsAlShow);
	changeState(ntfIcon, clsAlIcShow);
}
nameGroup.onblur = function(){
	changeStateTxt();
	stateWarn();
}
function changeState(arg, cls){
	if(arg.classList.contains(cls)){
		arg.classList.toggle(cls);
	}
	else{
		arg.classList.toggle(cls);
	}
}

function changeStateTxt(){
	if(originState && nameGroup.value !=''){
		console.log(namePointer.className);
		namePointer.classList.remove(originState);
		namePointer.classList.add(clsChangeClr);
	}else{
		namePointer.classList.remove(clsChangeClr);
		namePointer.classList.add(originState);
	}
}

function stateWarn(){
	if(nameGroup.value == 1){
		console.log('daaaaa');
		inputItm.classList.remove(originStateInp);
		inputItm.classList.add(clsInputItm);
		// inputItm.focus();
	}
	else{
		inputItm.classList.remove(clsInputItm);
		inputItm.classList.add(originStateInp);
	}
}