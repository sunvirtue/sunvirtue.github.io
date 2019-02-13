let backG = document.getElementsByClassName('mainBack');
let borLeft = document.getElementsByClassName('bordLef');
let circle = document.getElementsByClassName('circle');
let perem = 1;
let stateColor = ['#2ea8e6', 'red', 'orange', 'blue', 'yellow', 'gray'];
console.log(stateColor[1]);
// borLeft[0].style.borderColor = stateColor[1];

//variable values
let doodl;
let zhe = [0,1,2];
let parent = backG[0].parentNode;




function choose(ob, nob){
	for(let i = 0, j=0 ; i < ob.length, j < nob.length; i++, j++){
		ob[i].onmouseenter = function(event){
			event.target.classList.add('defaultHover');


		}
		nob[j].onmouseenter = function(event){
			event.target.classList.add('ghostCircle');
		}

		ob[i].onmouseleave = function(event){
			event.target.classList.remove('defaultHover');

		}

		nob[j].onmouseleave = function(event){
			event.target.classList.remove('ghostCircle');
		}
	}
}
choose(backG, circle);


function choosek(obi, oth){
	let backNum = 0;
	let calcSum;
	for(let k = 0, t = 0; k < obi.length, t < oth.length; k++, t++){

		obi[k].onclick = function(){

			obi[k].classList.toggle('selected');
			oth[t].classList.toggle('selectedCircle');
			// this.children[0].style.borderColor = stateColor[1];

			//начало калькулятор
			calcSum = parseFloat(oth[t].children[0].children[0].textContent);
			console.log(calcSum);
			oth[t].children[0].children[0].innerHTML = calcSum - perem;

			
			if(calcSum <= 0 ){
				oth[t].children[0].children[0].innerHTML = 0;
				obi[k].children[1].style.opacity = 0.6;
				
				obi[k].classList.toggle('disabled');
				oth[t].classList.toggle('disabledCircle');
				

			}
			//конец калькулятор
			if(obi[k].classList.contains('selected')){
				selectedHover(obi[k], oth[t]);
				console.log(obi[k].classList);
			}

			else{
				twoSelectedHover(obi[k], oth[t]);
				console.log(obi[k].classList);
			}

		}

	}	
}
choosek(backG, circle);

function selectedHover(obik, tep){
	obik.onmouseenter = function(event){
		event.target.classList.add('selectedHover');
		
	}

	tep.onmouseenter = function(event){
		event.target.classList.add('selectedCircleHover');//selectedCircleHover
	}

	obik.onmouseleave = function(event){
		event.target.classList.remove('selectedHover');

	
	}

	tep.onmouseleave = function(event){
		event.target.classList.remove('selectedCircleHover');
	}

}

function twoSelectedHover(obida, met){
	obida.onmouseenter = function(event){
		this.classList.toggle('defaultHover');

		
	}

	met.onmouseenter = function(event){
		this.classList.toggle('ghostCircle');
	}
	
}