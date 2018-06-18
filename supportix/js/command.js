let slideImage = document.getElementById('placeForImage');
let stateSlide = document.getElementsByClassName('coub');
let brand = document.getElementById('brand');
let brandDescription = document.getElementById('brand-description');
let rightButton = document.getElementsByClassName('arrow-right')[0];
let leftButton = document.getElementsByClassName('arrow-left')[0];
let sborka;

let preElement = document.createElement('pre');

let count = 0;
let hideBlock = document.getElementById('hide-block');


// массив с адресами картинок
let arrImage = ['url(../supportix/img/img3.png)', 'url(../supportix/img/img2.png)', 'url(../supportix/img/img3.png)'];
let arrBrand = ['DongFengH30 Cross', 'China auto', 'Japan auto'];
let arrBrandDescription = [' Модификация: 1,6 АТ / МТ\n Тип двигателя: бензин\n Привод: передний\n Мощность: 106л.с.\n',' Модификация: 1,6 АТ / МТ\n Тип двигателя: бензин\n Привод: задний\n Мощность: 98л.с.', ' Модификация: 1,8 АТ / МТ\n Тип двигателя: бензин\n Привод: задний\n Мощность: 148л.с.'];
	
	slideImage.style.background = arrImage[count];
	slideImage.style.backgroundRepeat = 'no-repeat';

// прокрутка изображений вправо
function nextImage(){
	rightButton.onclick = function(){



		if(count >= arrImage.length-1){
			count = arrImage.length-1;
			slideImage.style.background = arrImage[count];
			brand.innerHTML = arrBrand[count];
			preElement.innerHTML = arrBrandDescription[count];

		}else{
			count++;
			slideImage.style.background = arrImage[count];
			brand.innerHTML = arrBrand[count];
			preElement.innerHTML = arrBrandDescription[count];
		}
		
		slideImage.style.backgroundRepeat = 'no-repeat';
		if(count > 0){
			hideBlock.style.visibility = 'visible';
			hideBlock.style.transform = 'translate(0)';
		}
		slideImage.style.transition = '700ms ease-out';
		brandDescription.innerHTML = '';
		preElement.style.fontSize = '16px';
		preElement.style.fontFamily = "OpenSans";

		brandDescription.appendChild(preElement);

		
		return slideImage;
}

}

nextImage();

// прокрутка изображений влево
function prevImage(){
	leftButton.onclick = function(){
	

		if(count <= 0){
			count = 0;
			slideImage.style.background = arrImage[count];
			brand.innerHTML = arrBrand[count];
			preElement.innerHTML = arrBrandDescription[count];
		}
		else if(count >= arrImage.length-1){
			count = arrImage.length-1;
			count--;
			slideImage.style.background = arrImage[count];
			brand.innerHTML = arrBrand[count];
			preElement.innerHTML = arrBrandDescription[count];
		}
		else{
			count--;
			slideImage.style.background = arrImage[count];
			brand.innerHTML = arrBrand[count];
			preElement.innerHTML = arrBrandDescription[count];
		}
		
		slideImage.style.backgroundRepeat = 'no-repeat';

		if(count <= 0){
			hideBlock.style.visibility = 'hidden';
			hideBlock.style.transform = 'translate(-45px)';
		}
		return slideImage;
	}

}
prevImage();
