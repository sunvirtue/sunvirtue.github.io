function touchSlide(){
	 window.addEventListener('load', function(){
	    
	    let boxleft, // положение блока по левой стороне
	    startx, // стартовая точка соприкосновения по x
	    dist = 0, // расстояние перемещения точки
	    touchobj = null; // содержимое объекта перемещения
	  
	    sliderImages[current].parentElement.addEventListener('touchstart', function(e){
	        touchobj = e.changedTouches[0]; // первая точка соприкосновения для этого события
	        boxleft = parseInt(sliderImages[current].parentElement.style.left); // положение блока по левой стороне
	        startx = parseInt(touchobj.clientX); // получение координаты по x точки соприкосновения
	        e.preventDefault(); // отключаем реакцию элементов по умолчанию в браузере
	        console.log(touchobj);
	    }, false);
	  
	    sliderImages[current].parentElement.addEventListener('touchmove', function(e){
	        touchobj = e.changedTouches[0]; // первая точка соприкосновения для этого события
	        let dist = parseInt(touchobj.clientX) - startx; // подсчет расстояния перемещения
	        // перемещение блока от старновой позиции + дистанция
	        // выставляем лимит, чтобы блок не выходил за пределы от 0 до 380
	        sliderImages[current].parentElement.style.left = ( (boxleft + dist > 380)? 380 : (boxleft + dist < 0)? 0 : boxleft + dist ) + 'px';
	        e.preventDefault();
	    }, false);
	  
	}, false);
}
touchSlide();
