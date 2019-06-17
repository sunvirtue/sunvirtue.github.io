let elem = document.querySelector('.container');
let perexod = document.querySelector('.bloch');
let perexod1 = document.querySelector('.block-2');
let slovo = document.getElementById('slovo');
let y = 1;
let speedScroll = 10;
let act = document.getElementsByClassName('passive');
let elemen = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


elem.addEventListener('wheel', prokrutka);
function prokrutka(el){

var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
  if(el.deltaY >= 0){
    console.log(el.deltaY, 'this is el');
    
    
    if(!isIE11){
    	window.scrollTo({
    	top:elemen * y,
    	left:0,
    	behavior: 'smooth'
    	});
    }else{
    	window.scrollTo(0, (window.innerHeight * y)-96);
    	// window.scrollBar(0, window.innerHeight-96);
    }
    y++;
    changeBarItem();
  }
  else{
  	window.scrollTo({
    	top:0,
    	left:0,
    	behavior: 'smooth'
    });
    
    y=1;
    changeBarItem();
  }

}
function clearBarItem(){
	for(let i = 0; i < act.length; i++){
		act[i].classList.remove('active');
	}
}
function changeBarItem(){
	clearBarItem();
	if(y >= 0 && y <4){
		act[y-1].classList.toggle('active');
	}
	else{
		act[act.length-1].classList.toggle('active');
	}
	
}
changeBarItem();
for (let j = 0; j < act.length; j++) {
	act[j].onclick = function(){
	window.scrollTo(0, (window.innerHeight * j));
	clearBarItem();
	if(j >= 0 && j <4){
		act[j].classList.toggle('active');
	}
	else{
		act[act.length-1].classList.toggle('active');
	}
	} 

}



//Выбор противника

function enemy(){
	for(let i = 0; i < perexod.children[0].children.length; i++){
		perexod.children[0].children[i].children[0].children[0].children[0].classList.toggle('mask');
	}
	
}

perexod.children[0].onclick = enemy;
