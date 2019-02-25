let el = document.querySelector('.slider-block');
let lBut = document.querySelector('.l-button');
let rBut = document.querySelector('.r-button');
let n = 0;
let wdSlider;

rBut.onclick = function(){
	scrollR();
	console.log(n);
}
console.log(wdSlider);

el.ontouchstart = function(event) {
	wdSlider = el.offsetParent.clientWidth;

    if(event.touches[0].pageX > wdSlider / 2)
    {
    	scrollR();
    	console.log(event.touches[0]);
    }
    else
    {
    	scrollL();
    	console.log(event.touches[0]);
    }
}

lBut.onclick = function(){
	scrollL();
	console.log(n);
}

function scrollR(){
	n = n - 800;
	if(n < -800 * 2)
	{
		n = 0;
	}
	el.style.left = n + 'px';
}

function scrollL(){
	n = n + 800;
	if(n > 0)
	{
		n = -800*2;
	}
	el.style.left = n + 'px';
}
// setInterval(scrollR, 5000);