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
		// if(e.target.dataset.audio == '1'){
		// 	document.getElementById('sound-1').play();
		// }
		// else if(e.target.dataset.audio == '2'){
		// 	document.getElementById('sound-2').play();
		// }
		// else if(e.target.dataset.audio == '3'){
		// 	document.getElementById('sound-3').play();
		// }
		// else if(e.target.dataset.audio == '4'){
		// 	document.getElementById('sound-4').play();
		// }
		// else if(e.target.dataset.audio == '5'){
		// 	document.getElementById('sound-5').play();
		// }
		// else if(e.target.dataset.audio == '6'){
		// 	document.getElementById('sound-6').play();
		// }
		// else if(e.target.dataset.audio == '7'){
		// 	document.getElementById('sound-7').play();
		// }
		// else if(e.target.dataset.audio == '8'){
		// 	document.getElementById('sound-8').play();
		// }
		// else if(e.target.dataset.audio == '9'){
		// 	document.getElementById('sound-9').play();
		// }
		
	}
	// document.querySelector('#pressed').textContent = 'нажат';
}

function upTouch(){
	isZeroingClasses();
	// document.getElementById('sound-1').pause();
	// document.getElementById('sound-2').pause();
	// document.getElementById('sound-3').pause();
	// document.getElementById('sound-4').pause();
	// document.getElementById('sound-5').pause();
	// document.getElementById('sound-6').pause();
	// document.getElementById('sound-7').pause();
	// document.getElementById('sound-8').pause();
	// document.getElementById('sound-9').pause();
	// document.querySelector('#pressed').textContent = 'не нажат';
}

rowa0.onpointerdown = downTouch;
rowa0.onpointermove = upTouch;
rowa0.onpointerup = upTouch;

rowa1.onpointerdown = downTouch;
rowa1.onpointermove = upTouch;
rowa1.onpointerup = upTouch;

rowa2.onpointerdown = downTouch;
rowa2.onpointermove = upTouch;
rowa2.onpointerup = upTouch;