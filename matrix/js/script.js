let sel = document.getElementsByClassName('mat__col_sel');
let sel2 = document.getElementsByClassName('dis__col_sel');
let bul = document.getElementsByClassName('bullet_active');
let rowa0 = document.getElementsByClassName('mat__row')[0];
let rowa1 = document.getElementsByClassName('mat__row')[1];
let rowa2 = document.getElementsByClassName('mat__row')[2];
let disa0 = document.getElementsByClassName('dis__row')[0];
let disa1 = document.getElementsByClassName('dis__row')[1];
let disa2 = document.getElementsByClassName('dis__row')[2];
let prev;
function isZeroingClasses(){
	for(let i = 0; i < sel.length; i++){
		sel[i].className = 'mat__col';
	}
}

function backBullets(){
	for(let i = 0; i < document.getElementsByClassName('dis__col').length; i++){
		document.getElementsByClassName('dis__col')[i].children[0].className = 'bullet';
	}
}

function downTouch(e){
	if(e.target.className == 'mat__col'){
		if (prev != undefined) {
			setTimeout(backBullets, 3000);
			// prev.className = 'bullet';
			if (e.target == rowa0.children[0]) {
				disa0.children[0].children[0].className = 'bullet_active';
				prev = disa0.children[0].children[0];
			}
			else if(e.target == rowa0.children[1]) {
				disa0.children[1].children[0].className = 'bullet_active';
				prev = disa0.children[1].children[0];
			}
			else if(e.target == rowa0.children[2]) {
				disa0.children[2].children[0].className = 'bullet_active';
				prev = disa0.children[2].children[0];
			}
			else if(e.target == rowa1.children[0]) {
				disa1.children[0].children[0].className = 'bullet_active';
				prev = disa1.children[0].children[0];
			}
			else if(e.target == rowa1.children[1]) {
				disa1.children[1].children[0].className = 'bullet_active';
				prev = disa1.children[1].children[0];
			}
			else if(e.target == rowa1.children[2]) {
				disa1.children[2].children[0].className = 'bullet_active';
				prev = disa1.children[2].children[0];
			}
			else if(e.target == rowa2.children[0]) {
				disa2.children[0].children[0].className = 'bullet_active';
				prev = disa2.children[0].children[0];
			}
			else if(e.target == rowa2.children[1]) {
				disa2.children[1].children[0].className = 'bullet_active';
				prev = disa2.children[1].children[0];
			}
			else if(e.target == rowa2.children[2]) {
				disa2.children[2].children[0].className = 'bullet_active';
				prev = disa2.children[2].children[0];
			}
		}
		else{
			if (e.target == rowa0.children[0]) {
				disa0.children[0].children[0].className = 'bullet_active';
				prev = disa0.children[0].children[0];
			}
			else if(e.target == rowa0.children[1]) {
				disa0.children[1].children[0].className = 'bullet_active';
				prev = disa0.children[1].children[0];
			}
			else if(e.target == rowa0.children[2]) {
				disa0.children[2].children[0].className = 'bullet_active';
				prev = disa0.children[2].children[0];
			}
			else if(e.target == rowa1.children[0]) {
				disa1.children[0].children[0].className = 'bullet_active';
				prev = disa1.children[0].children[0];
			}
			else if(e.target == rowa1.children[1]) {
				disa1.children[1].children[0].className = 'bullet_active';
				prev = disa1.children[1].children[0];
			}
			else if(e.target == rowa1.children[2]) {
				disa1.children[2].children[0].className = 'bullet_active';
				prev = disa1.children[2].children[0];
			}
			else if(e.target == rowa2.children[0]) {
				disa2.children[0].children[0].className = 'bullet_active';
				prev = disa2.children[0].children[0];
			}
			else if(e.target == rowa2.children[1]) {
				disa2.children[1].children[0].className = 'bullet_active';
				prev = disa2.children[1].children[0];
			}
			else if(e.target == rowa2.children[2]) {
				disa2.children[2].children[0].className = 'bullet_active';
				prev = disa2.children[2].children[0];
			}
		}
		
		// prev = e.target;
		e.target.className = 'mat__col_sel';

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