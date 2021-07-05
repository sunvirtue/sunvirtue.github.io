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
	// isZeroingClasses();
	if(e.target.className == 'mat__col'){
		e.target.className = 'mat__col_sel';
	}
	document.querySelector('#pressed').textContent = 'нажат';
}

function upTouch(){
	isZeroingClasses();
	document.querySelector('#pressed').textContent = 'не нажат';
}

rowa0.onpointerdown = downTouch;
rowa0.onpointerup = upTouch;

rowa1.onpointerdown = downTouch;
rowa1.onpointerup = upTouch;