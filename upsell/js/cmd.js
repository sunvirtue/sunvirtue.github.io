let bmenu = document.querySelector('.just-box'),
	navbar = document.querySelector('.tipycalNavBar'),
	arrow = document.querySelector('.arrow'),
	tooth = document.querySelector('.tooth'),
	stopTmr,
	count = 5;



bmenu.onclick = function(){
	show_menu(bmenu, 0, 'line1', 'line1-reverb');
	show_menu(bmenu, 1, 'line2', 'line2-reverb');
	show_menu(bmenu, 2, 'line3', 'line2-reverb');
	show_menu(navbar, 0, 'navMenu', 'show-hide-menu_elem');
	show_menu(navbar, 1, 'course', 'course-show');
}

arrow.onmouseenter = changeStateTooth;



function show_menu(nameVar, countElem, nameClassPrev, nameClassNew){
	if(nameVar.children[countElem].classList.contains(nameClassPrev))
	{
		nameVar.children[countElem].classList.remove(nameClassPrev);
		nameVar.children[countElem].classList.add(nameClassNew);
	}
	else
	{
		nameVar.children[countElem].classList.add(nameClassPrev);
		nameVar.children[countElem].classList.remove(nameClassNew);
	}
	console.log(nameVar.children[countElem].classList);
}

//При необходимости можно удалить..
function changeStateTooth(){
  if(tooth.classList.contains('tooth'))
  {
    tooth.classList.remove('tooth');
    tooth.classList.add('low-tooth');
    stopTmr = setInterval(changeStateArrow, 1000);
  }
  else
  {
    clearInterval(stopTmr);
    tooth.classList.remove('low-tooth');
    tooth.classList.add('tooth');  
  }
}

function changeStateArrow(){

    if(arrow.classList.contains('arrow'))
  {
    arrow.classList.remove('arrow');
    arrow.classList.add('arrow-low');
  }
  else
  {
    arrow.classList.remove('arrow-low');
    arrow.classList.add('arrow');  
  }
  
}

//..данный кусок кода