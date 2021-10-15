let sel = document.getElementsByClassName('mat__col_sel');
let sel2 = document.getElementsByClassName('dis__col_sel');
// let bul = document.getElementsByClassName('bullet_active');
let rowa0 = document.getElementsByClassName('mat__row')[0];
let rowa1 = document.getElementsByClassName('mat__row')[1];
let rowa2 = document.getElementsByClassName('mat__row')[2];
let disa0 = document.getElementsByClassName('dis__row')[0];
let disa1 = document.getElementsByClassName('dis__row')[1];
let disa2 = document.getElementsByClassName('dis__row')[2];
let lvl = document.querySelector('.level');
let lvlNext = document.querySelector('.level__next');
let play = document.querySelector('.play__game');
let clsBul = document.getElementsByClassName('bullet');
let needCollect = document.querySelector('.need__collect');
let arrCollect = ['ghost', 'key'];
let arrCount = 0;
let hint = document.querySelector('.game__hint');
let oneCube = 0;
let gradCube1 = 90,
	gradCube2 = 90,
	gradCube3 = 90,
	gradCube4 = 90,
	gradCube5 = 90,
	gradCube6 = 90,
	gradCube7 = 90,
	gradCube8 = 90,
	gradCube9 = 90;
let posCube1 = 1,
	posCube2 = 1,
	posCube3 = 1,
	posCube4 = 1,
	posCube5 = 1,
	posCube6 = 1,
	posCube7 = 1,
	posCube8 = 1,
	posCube9 = 1;
let userAnswer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let sysQuestion = [];
let allRight = 0;
let level = 0;
let count = 0;
// let prev;
function isZeroingClasses(){//возврат клавиш управления к дефолтному состоянию
	for(let i = 0; i < sel.length; i++){
		sel[i].className = 'mat__col';
	}
}
// function addNumToArr(){

// }
function level1(){
	disa0.children[0].children[0].children[0].className = 'bullet bullet_active';
	disa0.children[0].children[1].children[0].className = 'bullet bullet_active';
	disa0.children[0].children[1].children[1].className = 'bullet bullet_active';

	disa0.children[1].children[1].children[0].className = 'bullet bullet_active';
	disa0.children[1].children[1].children[1].className = 'bullet bullet_active';

	disa0.children[2].children[0].children[0].className = 'bullet bullet_active';
	disa0.children[2].children[1].children[0].className = 'bullet bullet_active';
	disa0.children[2].children[1].children[1].className = 'bullet bullet_active';

	disa1.children[0].children[0].children[0].className = 'bullet bullet_active';
	disa1.children[0].children[1].children[0].className = 'bullet bullet_active';
	disa1.children[0].children[1].children[1].className = 'bullet bullet_active';

	disa1.children[1].children[1].children[0].className = 'bullet bullet_active';
	disa1.children[1].children[1].children[1].className = 'bullet bullet_active';

	disa1.children[2].children[0].children[0].className = 'bullet bullet_active';
	disa1.children[2].children[1].children[0].className = 'bullet bullet_active';
	disa1.children[2].children[1].children[1].className = 'bullet bullet_active';

	disa2.children[0].children[0].children[0].className = 'bullet bullet_active';

	disa2.children[1].children[1].children[0].className = 'bullet bullet_active';
	disa2.children[1].children[1].children[1].className = 'bullet bullet_active';

	disa2.children[2].children[0].children[0].className = 'bullet bullet_active';
	sysQuestion = [1, 2, 2, 0, 0, 3, 0, 2, 1];
	level++;
}
level1();

function level2(){
	//1
	disa0.children[0].children[0].children[0].className = 'bullet bullet_active';
	disa0.children[0].children[0].children[1].className = 'bullet bullet_active';
	//2
	disa0.children[1].children[0].children[0].className = 'bullet bullet_active';

	disa0.children[2].children[0].children[0].className = 'bullet bullet_active';
	//3
	disa1.children[0].children[1].children[0].className = 'bullet bullet_active';
	disa1.children[0].children[1].children[1].className = 'bullet bullet_active';
	//4
	disa1.children[1].children[1].children[0].className = 'bullet bullet_active';
	disa1.children[1].children[1].children[1].className = 'bullet bullet_active';
	//5
	// disa1.children[2].children[0].children[0].className = 'bullet bullet_active';
	//6
	disa2.children[0].children[0].children[0].className = 'bullet bullet_active';
	disa2.children[0].children[0].children[1].className = 'bullet bullet_active';
	//7
	disa2.children[1].children[1].children[0].className = 'bullet bullet_active';
	disa2.children[2].children[1].children[1].className = 'bullet bullet_active';
	//8
	// disa2.children[2].children[0].children[0].className = 'bullet bullet_active';
	sysQuestion = [1, 2, 0, 3, 1, 0, 1, 2, 1];
	level++;
}

function resetLevel(){
	posCube1 = 1;
	posCube2 = 1;
	posCube3 = 1;
	posCube4 = 1;
	posCube5 = 1;
	posCube6 = 1;
	posCube7 = 1;
	posCube8 = 1;
	posCube9 = 1;
	gradCube1 = 90;
	gradCube2 = 90;
	gradCube3 = 90;
	gradCube4 = 90;
	gradCube5 = 90;
	gradCube6 = 90;
	gradCube7 = 90;
	gradCube8 = 90;
	gradCube9 = 90;

	userAnswer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	document.querySelectorAll('.dis__col').forEach(el => el.style.transform = 'rotate(0deg)');

	for(let i = 0; i < clsBul.length; i++){
		clsBul[i].className = 'bullet';
	}

}

function isCheckOnTrue(){
	sysQuestion.forEach(function isCheck(el, index){
		if(userAnswer[index] == sysQuestion[index]){
			allRight++;
		}
	});
	if(allRight == 9){
		
		if(level == 1){
			console.log('Уровень 1 пройден!');
			resetLevel();
			level2();
			isShowHideLevelComp();
		}
		else if(level == 2){
			console.log('Уровень 2 пройден!');
			resetLevel();
			level3();
		}
		
	}
	allRight = 0;
}

function downTouch(e){//отслеживание действий при нажатии в игровом эране
	if(e.target.className == 'mat__col'){
		if (e.target == rowa0.children[0]) {
			disa0.children[0].style.transform = 'rotate('+gradCube1+'deg)';
			userAnswer.splice(0, 1, posCube1);
			console.log(userAnswer);
			gradCube1+=90;
			posCube1++;
			if(gradCube1 >= 360){
				gradCube1 = 0;
				posCube1 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa0.children[1]) {
			disa0.children[1].style.transform = 'rotate('+gradCube2+'deg)';
			userAnswer.splice(1, 1, posCube2);
			console.log(userAnswer);
			gradCube2+=90;
			posCube2++;
			if(gradCube2 >= 360){
				gradCube2 = 0;
				posCube2 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa0.children[2]) {
			disa0.children[2].style.transform = 'rotate('+gradCube3+'deg)';
			userAnswer.splice(2, 1, posCube3);
			console.log(userAnswer);
			gradCube3+=90;
			posCube3++;
			if(gradCube3 >= 360){
				gradCube3 = 0;
				posCube3 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa1.children[0]) {
			disa1.children[0].style.transform = 'rotate('+gradCube4+'deg)';
			userAnswer.splice(3, 1, posCube4);
			console.log(userAnswer);
			gradCube4+=90;
			posCube4++;
			if(gradCube4 >= 360){
				gradCube4 = 0;
				posCube4 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa1.children[1]) {
			disa1.children[1].style.transform = 'rotate('+gradCube5+'deg)';
			userAnswer.splice(4, 1, posCube5);
			console.log(userAnswer);
			gradCube5+=90;
			posCube5++;
			if(gradCube5 >= 360){
				gradCube5 = 0;
				posCube5 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa1.children[2]) {
			disa1.children[2].style.transform = 'rotate('+gradCube6+'deg)';
			userAnswer.splice(5, 1, posCube6);
			console.log(userAnswer);
			gradCube6+=90;
			posCube6++;
			if(gradCube6 >= 360){
				gradCube6 = 0;
				posCube6 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa2.children[0]) {
			disa2.children[0].style.transform = 'rotate('+gradCube7+'deg)';
			userAnswer.splice(6, 1, posCube7);
			console.log(userAnswer);
			gradCube7+=90;
			posCube7++;
			if(gradCube7 >= 360){
				gradCube7 = 0;
				posCube7 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa2.children[1]) {
			disa2.children[1].style.transform = 'rotate('+gradCube8+'deg)';
			userAnswer.splice(7, 1, posCube8);
			console.log(userAnswer);
			gradCube8+=90;
			posCube8++;
			if(gradCube8 >= 360){
				gradCube8 = 0;
				posCube8 = 0;
			}
			isCheckOnTrue();
		}
		else if(e.target == rowa2.children[2]) {
			disa2.children[2].style.transform = 'rotate('+gradCube9+'deg)';
			userAnswer.splice(8, 1, posCube9);
			console.log(userAnswer);
			gradCube9+=90;
			posCube9++;
			if(gradCube9 >= 360){
				gradCube9 = 0;
				posCube9 = 0;
			}
			isCheckOnTrue();
		}
		e.target.className = 'mat__col_sel';
	}
}

function upTouch(){//отслеживание действий при отжатии в игровом эране
	isZeroingClasses();
}

function moveTouch(e){//отслеживание действий при движении нажатия в игровом эране
	if(e.target.className == 'mat__col'){
		e.target.className = 'mat__col_sel';
		e.target.style.transition = '.2s';
	}
	setTimeout(isZeroingClasses, 300);
}

function isShowHideLevelComp(){
	lvl.classList.toggle('level__complete');
}

function mainMenu(){
	document.querySelector('.main').classList.toggle('main__menu_hide');
}

function isShowHideHint(cls){
	if (needCollect.classList.contains('need__collect_hide')) {
		if(level == 1){
			cls = arrCollect[level-1];
		}
		else if(level == 2){
			cls = arrCollect[level-1];
		}
		needCollect.classList.remove('need__collect_hide');
		needCollect.classList.add('need__collect_show');
		needCollect.classList.add(cls);
	}
	else{
		if(level == 1){
			cls = arrCollect[level-1];
		}
		else if(level == 2){
			cls = arrCollect[level-1];
		}
		needCollect.classList.remove('need__collect_show');
		needCollect.classList.remove(cls);
		needCollect.classList.add('need__collect_hide');
	}
	console.log(level);
}

hint.onclick = isShowHideHint;

play.onclick = mainMenu;

lvlNext.onclick = isShowHideLevelComp;

rowa0.onpointerdown = downTouch;
rowa0.onpointermove = moveTouch;
rowa0.onpointerup = upTouch;

rowa1.onpointerdown = downTouch;
rowa1.onpointermove = moveTouch;
rowa1.onpointerup = upTouch;

rowa2.onpointerdown = downTouch;
rowa2.onpointermove = moveTouch;
rowa2.onpointerup = upTouch;

// let obPos = [];
// function matrix(){
// 	for(let i = 0; i < 6; i++){
// 		// obPos.push(i);
// 		for(let j = 0; j < 6; j++){
// 			obPos.push(i);
// 			obPos.push(j);
// 		}
// 	}
// }
// matrix();