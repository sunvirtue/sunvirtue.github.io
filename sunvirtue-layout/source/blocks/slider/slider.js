let container = document.querySelector('.services__container');
let pusya = document.querySelectorAll('.services__box');
let progressMenuItem = document.querySelectorAll('.slider__progress-menu');
// document.querySelector('.progress-menu');
let count = 5;
let numSlide = 0;
let stop;
let prev;

container.addEventListener('wheel', mWheel);

function mWheel(el) {
  if(el.deltaY >= 0) {
    console.log('120');
    console.log(prev);
    moveSlideRight();
    slideAnim();
  }
  else {
    console.log('-120');
    console.log(prev);
    moveSlideLeft();
  }
}

//test
function slideAnim() {
  pusya[prev].style.height = 0;
}
//test

function moveSlideRight() {
  stop = setInterval(slideRight, 100);
}

function moveSlideLeft() {
  stop = setInterval(slideLeft, 100);
}

function reset() {
  if(prev !== undefined){
    progressMenuItem[prev].value = 0;
    console.log(progressMenuItem[prev].value);
  }
  else {
    progressMenuItem[0].value = 0;
  }
}

function slideRight() {
  if(progressMenuItem[numSlide].value !== 100) {
    prev = numSlide;
    progressMenuItem[prev].value = progressMenuItem[prev].value + count;
  }
  else {
    clearInterval(stop);
    reset();
    numSlide++;
    if(numSlide >= progressMenuItem.length) {
      numSlide = 0;
    }
  }
}

function slideLeft() {
  if(prev == undefined) {
    numSlide = progressMenuItem.length - 1;
  }
  if(progressMenuItem[prev].value !== 100) {
    prev = numSlide;
    progressMenuItem[prev].value = progressMenuItem[prev].value + count;
  }
  else {
    clearInterval(stop);
    reset();
    numSlide--;
    if(numSlide < 0) {
      numSlide = progressMenuItem.length - 1;
    }
  }
}
