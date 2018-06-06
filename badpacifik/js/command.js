var burger = document.getElementById('burg');
var ulik = document.getElementsByClassName('main-menu')[0];

burger.onclick = function(){
	if(ulik.className =='main-menu'){
		ulik.className = 'changeBurger';
	}
	
}