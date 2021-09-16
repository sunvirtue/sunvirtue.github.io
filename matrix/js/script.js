let sel = document.getElementsByClassName('mat__col_sel');
let rowa0 = document.getElementsByClassName('mat__row')[0];
let rowa1 = document.getElementsByClassName('mat__row')[1];
let rowa2 = document.getElementsByClassName('mat__row')[2];
function isZeroingClasses(){
	for(let i = 0; i < sel.length; i++){
		sel[i].className = 'mat__col';
	}
}

function downTouch(e){
	if(e.target.className == 'mat__col'){
		e.target.className = 'mat__col_sel';
		e.target.style.transition = '.2s';
	}
}

function upTouch(){
	isZeroingClasses();
}

function moveTouch(e){
	if(e.target.className == 'mat__col'){
		e.target.className = 'mat__col_sel';
		e.target.style.transition = '.2s';
	}
	setTimeout(isZeroingClasses, 300);
}

rowa0.onpointerdown = downTouch;
rowa0.onpointermove = moveTouch;
rowa0.onpointerup = upTouch;

rowa1.onpointerdown = downTouch;
rowa1.onpointermove = moveTouch;
rowa1.onpointerup = upTouch;

rowa2.onpointerdown = downTouch;
rowa2.onpointermove = moveTouch;
rowa2.onpointerup = upTouch;