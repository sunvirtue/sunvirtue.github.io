let field = document.querySelector('.field');
let total = 0;
let statistic = document.querySelector('.hide__table');
let rightQuestion = 0;//правильные ответы
let wrongQuestion = 0;//неправильные ответы
let status;
let state = 'active';
let rightAnswer = document.querySelector('.rightAnswers');
let wrongAnswer = document.querySelector('.wrongAnswers');
let progressBox = document.querySelector('.progress-box');
let mode = document.getElementsByClassName('mode');
let arrayMode = [modePlus, modeMinus, modeMultiplication, modeDivision];
let calc = document.querySelector('.calcNum');
let trueValue;//верное значение
let percnt = document.getElementById('perc');
let progress = document.getElementById('progress'),
    percent = document.getElementById('percent');
//Рассчет числа
function mainCalculate(){
  arrayMode[Math.floor(Math.random()*4)]();
  // modeDivision();
}

//beta version
// mode[0].onclick = modeGame;

// function modeGame(e){
//   //console.log(e.target.className);

//     if(e.target.className == 'game__start mode__plus'){
//      modePlus();
//     }
//     if(e.target.className == 'game__start mode__minus'){
//      modeMinus();
//     }
//     if(e.target.className == 'game__start mode__multi'){
//      modeMultiplication();
//     }
//     if(e.target.className == 'game__start mode__division'){
//      modeDivision();
//     }

// }
// modeGame();
//Режимы игры
function modePlus(a, b){
  a = Math.random()*20;//20
  b = Math.random()*20;//20
  calc.textContent = Math.floor(a) +' + '+ Math.floor(b)+'?';
  trueValue = Math.floor(a) + Math.floor(b);
}
function modeMinus(a, b){
  a = Math.random()*20;//20
  b = Math.random()*20;//20
  if(a < b){
    calc.textContent = Math.floor(b) +' - '+ Math.floor(a)+'?';
    trueValue = Math.floor(b) - Math.floor(a);
  }
  else{
    calc.textContent = Math.floor(a) +' - '+ Math.floor(b)+'?';
    trueValue = Math.floor(a) - Math.floor(b);
  }
  

}
function modeMultiplication(a, b){
  a = Math.random()*20;//20
  b = Math.random()*20;//20
  calc.textContent = Math.floor(a) +' * '+ Math.floor(b)+'?';
  trueValue = Math.floor(a) * Math.floor(b);
}
function modeDivision(a, b){
  a = Math.random()*20;//20
  b = Math.random(1)*20;//20
  
  if((Math.floor(a) / Math.floor(b) ^ 0) === Math.floor(a) / Math.floor(b)){
    calc.textContent = Math.floor(a) +' : '+ Math.floor(b/2)+'?';
    trueValue = Math.floor(a) / Math.floor(b/2);
    return trueValue;
  }
}

function newGame(){
  total = rightQuestion = wrongQuestion = 0;
  rightAnswer.children[0].textContent = wrongAnswer.children[0].textContent = 0;
touch();
newRun();
}

  //Создание ячеек поля
  function createField(){
    for(let i = 0; i < 16; i++){
      let itm = document.createElement('div');
      itm.className = 'itm';
      field.appendChild(itm);
    }
    
  }
  createField();
  //Запись числа в поле
  function writingNumber(value, randValue, randItem){
    value = document.getElementsByClassName('itm');
    randItem = Math.floor(Math.random()*15);
    for(let i = 0; i < 16; i++){
      value[i].textContent = Math.floor(Math.random()*20);//рандомное распределение чисел в поле
      value[i].className = 'itm';
      if(value[i].textContent == trueValue){
        document.getElementsByClassName('itm')[i].textContent = 1;//условие при котором рандомное число меняет свое значение на 1
        
      }
      document.getElementsByClassName('itm')[randItem].textContent = trueValue;//запись верного значения в рандомную ячейку поля
      if(trueValue){
        document.getElementsByClassName('itm')[randItem].classList.add('itm_hint');
      }
      isZero();
      document.getElementsByClassName('itm')[i].classList.remove('itm_hint');
    }
  }
  function newRun(){
    setTimeout(mainCalculate, 200);
    setTimeout(writingNumber, 200);
  }
  newRun();

  function select(e){
    if(e.target.className != 'itm itm_hint'){
      e.target.classList.toggle('itm_false');
      e.target.classList.remove('itm_true');
      newRun();
    }
    
    if(e.target.className == 'itm itm_hint'){
      e.target.classList.toggle('itm_true');
      if(e.target.classList.contains('itm_true')){
        setTimeout(partBackTime, 1000);
        newRun();
      }
    }
    //console.log(e.target.className);
    calcScore(e.target);
  }
  field.onclick = select;

  function calcScore(el){
    if(el.classList.contains('itm_true')){
      status = true;
      rightQuestion += 1;
      rightAnswer.children[0].textContent = rightQuestion;
      //console.log('Right Answer '+rightAnswer.children[0].textContent);
      //console.log('Right Question '+rightQuestion);
    }
    if(el.classList.contains('itm_false')){
      status = false;
      wrongQuestion += 1;
      wrongAnswer.children[0].textContent = wrongQuestion;
      //console.log('Wrong Question '+wrongQuestion);
    }
    flashing();
    // setTimeout(flashing, 100);
  }
  function flashing(){
    if(status == true){
      rightAnswer.className = 'rightAnswers_flash';
      //console.log('Это статус верного ответа'+ rightAnswer.className);
      function backToOrigCol(){
        rightAnswer.className = 'rightAnswers';
      }
      setTimeout(backToOrigCol, 500);
    }
    else{
      wrongAnswer.className = 'wrongAnswers_flash';
      //console.log('Это статус верного ответа'+ wrongAnswer.className);
      function backToOrigCol(){
        wrongAnswer.className = 'wrongAnswers';
      }
      setTimeout(backToOrigCol, 500);
    }
  }
  function isZero(){
    if(trueValue == 0) {
      mainCalculate();
    }
  }
  function backToOrigCol(){
    rightAnswer.className = 'rightAnswers';
  }
  function changeProgress() {
    
      if(state != 'active'){
        //console.log(state);
        newGame();
        return;
      }
      if (progress.value >= progress.max) {
          notTouch();
          state = 'noactive';
          document.getElementsByClassName('home-screen_hide')[0].className = 'home-screen game';
          return;
      }

      // partBackTime();
      percnt.textContent = progress.value;
      progress.value++;
      percent.textContent = Math.floor(progress.value / progress.max * 100);
      setTimeout(changeProgress, 100);//1000

  }
  // progressBox.onclick = changeProgress;//если нужно чтобы работало от кнопки отсчета
  document.getElementsByClassName('list__item')[0].onclick = animationMainMenu;
  function partBackTime(){
    if(status == true && progress.value != 0){
      // percnt.textContent = 20;
      progress.value -= 5;
      //console.log(percnt.textContent);
    }
  }
  function notTouch(){
    // document.getElementsByClassName('home-screen')[0].className = 'home-screen_hide';
    for(let i = 0; i < document.getElementsByClassName('itm').length; i+1){
      document.getElementsByClassName('itm')[i].className = 'itm_close';
    }
    total = rightQuestion + wrongQuestion;
    document.getElementsByClassName('rightAnswers')[0].className = 'rightAnswers_close';
    document.getElementsByClassName('wrongAnswers')[0].className = 'wrongAnswers_close';
    document.getElementsByTagName('td')[0].textContent = total;
    document.getElementsByTagName('td')[1].textContent = rightQuestion;
    document.getElementsByTagName('td')[2].textContent = wrongQuestion;
    //console.log(total);
  }
  function touch(){
    rightQuestion = 0;
    wrongQuestion = 0;
    percnt.textContent = 0;
    progress.value = 0;
    percnt.textContent = progress.value;
    // document.getElementsByClassName('home-screen')[0].className = 'home-screen_hide';
    for(let i = 0; i < document.getElementsByClassName('itm_close').length; i+1){
      document.getElementsByClassName('itm_close')[i].className = 'itm';
    }
    document.getElementsByClassName('rightAnswers_close')[0].className = 'rightAnswers';
    document.getElementsByClassName('wrongAnswers_close')[0].className = 'wrongAnswers';

    percnt.textContent = progress.value;
      progress.value++;
      percent.textContent = Math.floor(progress.value / progress.max * 100);
      state = 'active';
      setTimeout(changeProgress, 1000);//1000
  }

  function animationMainMenu(){
    document.getElementsByClassName('home-screen')[0].className = 'home-screen_hide';
    changeProgress();
  }


//statistic
document.getElementsByClassName('list__item')[5].onclick = showStatistics;
function showStatistics(){
  if(statistic.classList.contains('hide__table')){
    statistic.classList.remove('hide__table');
    statistic.classList.add('show__table');
  }
  else{
    statistic.classList.remove('show__table');
    statistic.classList.add('hide__table');
  }
}


