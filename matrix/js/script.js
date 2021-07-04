let sel = document.getElementsByClassName('mat__col_sel');
let rowa = document.getElementsByClassName('mat__row')[0];
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
}

function upTouch(e){
	isZeroingClasses();
	document.querySelector('.pressed').textContent = 'нажат';
}

rowa.onpointerdown = downTouch;
rowa.onpointermove = upToch;
