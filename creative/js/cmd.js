let burg1 = document.querySelector('.line1');
let burg2 = document.querySelector('.line2');
let burg3 = document.querySelector('.line3');
let state = 0;
let bgMenu = document.querySelector('.header-menu-nav');
let burger = document.querySelector('.burger-menu');
let icons = document.querySelector('.icons');
let contactus = document.querySelector('.to-contact-us');
let scroll = document.querySelector('.scroll-button-icon');
let speedScroll = 30;


function burgerMenu(arg, cls1, cls2){
	if(arg.classList.contains(cls1)){
		arg.classList.remove(cls1);
		arg.classList.add(cls2);
	}
	else{
		arg.classList.remove(cls2);
		arg.classList.add(cls1);
		}
}
burger.onclick = function(){

	burgerMenu(burg1, 'line1', 'line1-reverb');
	burgerMenu(burg2, 'line2', 'line2-reverb');
	burgerMenu(burg3, 'line3', 'line3-reverb');
	burgerMenu(bgMenu, 'header-menu-nav', 'hide-menu');
	
}
function changeName(){
	if(state == 0){
		contactus.innerText = 'Не Делиться';
		state = 1;
	}
	else{
		contactus.innerText = 'Поделиться';
		state = 0;
	}
	
	
}
contactus.onclick = function(){
	changeName();
	burgerMenu(icons, 'icons', 'icons-show');
}

//начало функция скроллинга
scroll.onclick = function(){
	scrollBar(0, window.innerHeight);
} 

function scrollBar(x, y){
	let stop;
	if(window.pageYOffset < window.innerHeight){
		y = window.pageYOffset + speedScroll;
		window.scrollTo(0, y);
		stop = requestAnimationFrame(scrollBar);
		
	}
	
	else{
		cancelAnimationFrame(stop);
	}
}

// function showAnchorUp(){
// 	if(window.pageYOffset == 0){
// 		scroll.classList.add('anchorDown');
// 	}
// 	window.onscroll = function(){
// 		if(window.pageYOffset > 0){
// 			scroll.classList.remove('anchorDown');
// 		}
// 		else{
// 			scroll.classList.add('anchorDown');
// 		}
// 	}
// }
// showAnchorUp();
//конец функция скроллинга