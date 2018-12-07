let tabContent = document.getElementsByClassName('tabContent'),
	tab = document.getElementsByClassName('tab'),
	pag = document.getElementsByClassName('pagination')[0],
	sliderImages = document.querySelectorAll(".slide"),
	hamburger = document.querySelector('.hamburger');
	arrowLeft = document.getElementById("arrow-left"),
	arrowRight = document.getElementById("arrow-right"),
	speedScroll = 99,
	icon = document.getElementsByClassName('icon'),
	expert = document.getElementsByClassName('expert'),
	partner = document.getElementsByClassName('partner'),
	slider,
	current = 0;



//начало Tabs
function hideTabsContent(a){
	for(let i=a; i<tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('active');
	}
}
hideTabsContent(1);

document.getElementById('tabs').onclick = function (event){
	let target = event.target;
	if(target.className=='tab'){
		for(let i=0; i < tab.length; i++){
			if(target ==tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('active');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}
//конец Tabs


//начало pagination
function pagination(){
	let stateAnchor;
	pag.onclick = function(event){
		if(stateAnchor!= undefined){
			stateAnchor.classList.remove('active');
		}
		if(event.target === this.children[0].children[0].children[0]){
			event.target.classList.add('active');
		}
		else{
			this.children[0].children[0].children[0].className = '';
			event.target.classList.add('active');
			stateAnchor = event.target;
		}
	}
}
pagination();
//конец pagination


//начало slider
function slider(){

	function reset(){
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
		sliderImages[i].parentElement.parentElement.children[2].children[i].children[0].style.display = "none";
	}
}

function startSlide(){
	reset();
	sliderImages[0].style.display = "block";
	sliderImages[0].parentElement.parentElement.children[2].children[0].children[0].style.display = 'block';
}

function slideLeft(){
	reset();
	sliderImages[current - 1].style.display = "block";
	sliderImages[0].parentElement.parentElement.children[2].children[current - 1].children[0].style.display = "block";
	current--;
}

function slideRight(){
	reset();
	sliderImages[current + 1].style.display = "block";
	sliderImages[0].parentElement.parentElement.children[2].children[current+1].children[0].style.display = "block";
	current++;
}

arrowLeft.onclick = function(){
	if(current === 0){
		current = sliderImages.length;
	}
  slideLeft();
};

arrowRight.onclick = function(){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
};
startSlide();
}

function chooseScreen(){
	if(window.outerWidth < 320){
		slider = Peppermint(document.getElementById('slider'));
	}else{
		slider();
	}
}
chooseScreen();

//конец slider


//начало функция скроллинга
document.getElementsByClassName('anchorUp')[0].onclick = function(){
	scrollBar(0, 0);
} 

function scrollBar(y){
	let stop;
	if(window.pageYOffset === 0){
		cancelAnimationFrame(stop);
	}
	
	else{
		y = window.pageYOffset -speedScroll;
		window.scrollTo(0, y);
		stop = requestAnimationFrame(scrollBar);
	}
}

function showAnchorUp(){
	if(window.pageYOffset == 0){
		document.getElementsByClassName('anchorUp')[0].classList.add('anchorDown');
	}
	window.onscroll = function(){
		if(window.pageYOffset > 300){
			document.getElementsByClassName('anchorUp')[0].classList.remove('anchorDown');
		}
		else{
			document.getElementsByClassName('anchorUp')[0].classList.add('anchorDown');
		}
	}
}
showAnchorUp();
//конец функция скроллинга


//функция замены иконок

function changeIcon(){
	let count = 0;
	let name;
	while(count < icon.length){
		if(icon[count].className == 'icon'){
			name = icon[count].parentElement.children[1].children[0].textContent; 
			icon[count].innerText = searchElem(name);
		}
		count++;
	}
}
changeIcon();

function searchElem(ar){
	let part;
	let initials = [];
	initials.push(ar.split(' '));
	part = `${initials[0][[0]][0]}. ${initials[0][initials[0].length-1][0]}.`;
	return part;
}


//сортировки распределения

function resetPartners(){
	let cont = 0;
	while(cont < icon.length){
		icon[cont].parentElement.style.display = 'none';
		cont++;
	}
}

function compareNumbers(a, b) {
	return a - b;
}

function compare(a, b){
	if(a > b){
		return b;
	}else{
		return a;
	}
}

//сортировка по ключевому слову 'expert'

function sort(elem){
	document.getElementById('expert').onclick = function(){
		resetPartners();
		let schet = 0;
		while(schet < elem.length){
			elem[schet].parentElement.parentElement.style.display = 'flex';
			schet++;
		}
	}
}
sort(expert);

//сортировка по популярности

document.getElementById('rating-activ').onclick = sortPopular;
  
function sortPopular() {
	let itemsArray = [];
	let parent = partner[0].parentElement;
	while(partner.length > 0){
		for(let i = 0; i < partner.length; i++){
  			itemsArray.push(parent.removeChild(partner[i]));
  		}
	}
	itemsArray.sort(function(nodeA, nodeB) {
	let textA = nodeA.querySelector('.rating-activ').children[0].textContent;
	let textB = nodeB.querySelector('.rating-activ').children[0].textContent;
	let numberA = parseInt(textA);
	let numberB = parseInt(textB);
	console.log(textA);
	if (numberA < numberB) return -1;
	if (numberA > numberB) return 1;
	return 0;
    })
    .forEach(function(node) {
		parent.appendChild(node)
    });
}




function rightForm(){
	let pur = expert[0];
	let count = 0;
		for(let s = 0; s < expert.length; s++){
			expert[s].parentElement.lastElementChild.value = 'Задать вопрос';
		}
		
		
}
rightForm();

//hamburger

function hamburgerMenu(){
	let menushka = document.querySelector('.menu ul');
	hamburger.onclick = function(){
		if(menushka.className === 'menu-mobile'){
			menushka.className += ' open';
		}else{
			menushka.className = 'menu-mobile';
		}
	}
}
hamburgerMenu();