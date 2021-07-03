var bal = document.getElementsByClassName("mat__dot");
var rowa = document.getElementsByClassName("mat__row")[0];



var ball = document.getElementsByClassName("mat__dot")[0];
var ball2 = document.getElementsByClassName("mat__dot")[1];
var ball3 = document.getElementsByClassName("mat__dot")[2];
var ball4 = document.getElementsByClassName("mat__dot")[3];
var ball5 = document.getElementsByClassName("mat__dot")[4];
var ball6 = document.getElementsByClassName("mat__dot")[5];
var ball7 = document.getElementsByClassName("mat__dot")[6];
var ball8 = document.getElementsByClassName("mat__dot")[7];
var ball9 = document.getElementsByClassName("mat__dot")[8];
var limit = document.getElementsByClassName("mat__col")[0];
var limit2 = document.getElementsByClassName("mat__col")[1];
var limit3 = document.getElementsByClassName("mat__col")[2];
var limit4 = document.getElementsByClassName("mat__col")[3];
var limit5 = document.getElementsByClassName("mat__col")[4];
var limit6 = document.getElementsByClassName("mat__col")[5];
var limit7 = document.getElementsByClassName("mat__col")[6];
var limit8 = document.getElementsByClassName("mat__col")[7];
var limit9 = document.getElementsByClassName("mat__col")[8];
// var coords;
ball.onpointerdown = function(e) {

  var coords = getCoords(ball);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);

  ball.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    ball.style.left = e.pageX - shiftX + 'px';
    ball.style.top = e.pageY - shiftY + 'px';
	// console.log(ball.style.left);
    if(ball.style.left > '80px'){
    	ball.style.left = '40px';
    	ball.style.top = '40px';
    }
    if(ball.style.top > '80px'){
    	ball.style.top = '40px';
    	ball.style.left = '40px';
    }
    if('0px' > ball.style.left){
    	ball.style.left = '40px';
    	ball.style.top = '40px';
    }
    if('0px' > ball.style.top){
    	ball.style.top = '40px';
    	ball.style.left = '40px';
    }
  }

  limit.onpointermove = function(e) {
    moveAt(e);
    console.log(coords);
    // isLimit(e);
  };

  

  ball.onpointermove = function() {
	console.log(coords);
	document.querySelector('#offS').innerHTML = coords.top + ' '+coords.left;

  ball.onpointerup = function() {
    limit.onpointermove = null;
    ball.onpointermove = null;
    ball.onpointerup = null;
  };
};

}

ball.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function isLimit(e){
	if (coords.top == e.offsetY) {
		console.log('da');
	}
}

limit.onpointermove = function(event){
  event = event || window.event;
  
  document.querySelector('#offx').innerHTML = event.offsetX;
  document.querySelector('#offy').innerHTML = event.offsetY;
 
}



ball2.onpointerdown = function(e) {

  var coords = getCoords(ball2);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball2.style.position = 'absolute';
  document.body.appendChild(ball2);
  moveAt(e);

  ball2.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    ball2.style.left = e.pageX - shiftX + 'px';
    ball2.style.top = e.pageY - shiftY + 'px';
	// console.log(ball.style.left);
    if(ball2.style.left > '180px'){
    	ball2.style.left = '140px';
    	ball2.style.top = '40px';
    }
    if(ball2.style.top > '80px'){
    	ball2.style.top = '40px';
    	ball2.style.left = '140px';
    }
    if('0px' > ball2.style.left){
    	ball2.style.left = '140px';
    	ball2.style.top = '40px';
    }
    if('0px' > ball2.style.top){
    	ball2.style.top = '40px';
    	ball2.style.left = '140px';
    }
  }

  limit2.onpointermove = function(e) {
    moveAt(e);
    console.log(coords);
    // isLimit(e);
  };

  

  ball2.onpointermove = function() {
	console.log(coords);
	document.querySelector('#offS').innerHTML = coords.top + ' '+coords.left;

  ball2.onpointerup = function() {
    limit2.onpointermove = null;
    ball2.onpointermove = null;
    ball2.onpointerup = null;
  };
};

}

ball2.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function isLimit(e){
	if (coords.top == e.offsetY) {
		console.log('da');
	}
}

limit2.onpointermove = function(event){
  event = event || window.event;
  
  document.querySelector('#offx').innerHTML = event.offsetX;
  document.querySelector('#offy').innerHTML = event.offsetY;
 
}