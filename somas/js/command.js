let aa = document.getElementsByTagName('a');
let li = document.getElementsByTagName('li');
let ul = document.getElementsByTagName('ul')[0];
let perem = document.getElementById('architecture');
let peremDescr = document.getElementById('descr');
let img = document.getElementById('imgs');
let imgDiv = document.getElementsByClassName('image-home')[0];
let slidenum = document.getElementById('number-slide');
//extraStyle - for ul[0] for ssilok-(a)
//backForMenu - for ul[1] for ssilok-(a)
let arr = [];
// function toggleMenu(){
// for(let j = 1; j < 5; j++){
// 	aa[j].onmouseenter = function spark(){
// 	for(let i = 1; i < j+1; i++){
// 		if(aa[i].className !== 'extraStyle'){
// 			aa[i].className = 'extraStyle';

// 			// aa[i].style.color = "#1bfc2a";

// 			arr.push(aa[i]);
			

// 			if(arr[3] === 'extraStyle'){
// 				arr.pop();
// 			}
				
				
			
// 		}
	
// 	}

// }
// }
// }
// toggleMenu();
function toggleMenu2(){
for(let j = 6; j < 13; j++){
	aa[j].onmouseenter = function spork(){
	for(let i = 5; i < j+1; i++){
		if(aa[i].className !== 'backForMenu'){

			aa[i].className = 'backForMenu';

			arr.push(aa[i]);
	
		}
	
	}

}
}
}
toggleMenu2();

for(let i = 6; i <= aa.length-1; i++){
	arr.push(aa[i]);
}
let menus = {
	nameMenu: ["АРХИТЕКТУРА", "БЕЗОПАСНОСТЬ", "БЛАГОУСТРОЙСТВО", "ИНФРАСТРУКТУРА", "ИНЖЕНЕРИЯ", "ТРАНСПОРТНАЯ ДОСТУПНОСТЬ"],
	description:['Оригинальная архитектура жилого комплекса бизнес-класса «Первом', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore voluptas ipsam eaque quod corrupti possimus, quas adipisci assumenda commodi impedit', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eos nulla veniam sed?', 'Lorem ipsum Vasiliy.', 'Lorem ipsum i vam togo zhe.', 'Lorem ipsum tochka.'],
	images:['url(../testTask/img/img1.png)', 'url(../testTask/img/img21.png)', 'url(../testTask/img/img3.png)', 'url(../testTask/img/img4.png)', 'url(../testTask/img/img5.png)', 'url(../testTask/img/img6.png)'],
	position:["50% 50%", "57% 60%", "0% 60%", "17% 100%", '100% 50%', '50% 50%'],
	heig: ['-50%', '50%']
};

for(let k = 0; k < arr.length-1; k++){
		if(menus['description'][k].length-1 > 20){
			menus['description'][k] += '..';
}
	
	imgDiv.style.transitionProperty = 'background';
	imgDiv.style.transitionDuration = '1.5s';

	peremDescr.style.transitionProperty = 'margin-top';
		peremDescr.style.transitionDuration = '1.5s';

	function fadeLi(){
			perem.style.visibility = 'hidden';
			perem.innerHTML = menus['nameMenu'][k];
	}

	function fadeLiIn(){
		perem.style.visibility = 'visible';
		perem.innerHTML = menus['nameMenu'][k];
	}

	function fadeLiOut(){
		perem.style.visibility = 'visible';
		perem.innerHTML = menus['nameMenu'][k];
	}

	function reset1(){
		peremDescr.style.marginTop = 0;
		peremDescr.innerHTML = menus['description'][k];
	}
	
	function reset2(){
		peremDescr.style.visibility = 'hidden';
		peremDescr.innerHTML = menus['description'][k-1];
		peremDescr.style.marginTop = menus['heig'][1];

	}

	function reset3(){
		peremDescr.style.visibility = 'visible';
	peremDescr.innerHTML = menus['description'][k];

	}

	let repeatButton = menus['description'][k-1];
	arr[k].onclick = function(){
	// perem.innerHTML = menus['nameMenu'][k];
	
	slidenum.innerHTML = +[k]+1 +' / ' + 6;
	
	imgDiv.style.background = menus['images'][k] + menus['position'][k];
	
	peremDescr.style.marginTop = menus['heig'][0];

	peremDescr.innerHTML = repeatButton;

		setTimeout(fadeLi, 400);
		setTimeout(fadeLiIn, 1300);
		setTimeout(reset1, 800);
		setTimeout(reset2, 800);
		setTimeout(reset3, 1300);
		setTimeout(reset1, 1300);
		setTimeout(fadeLi, 100);
}

}
