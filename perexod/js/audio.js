let perexodka = document.querySelector('.bloch');

//Выбор противника

function enemy(){
	for(let i = 0; i < perexodka.children[0].children.length; i++){
		perexodka.children[0].children[i].onmouseover = autoplay;
	}
	
}
enemy();

function autoplay(){
	playPromise = document.getElementById('player').play();
	playPromise2 = document.getElementById('player2').play();


  if (playPromise !== undefined && playPromise2 !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });

    playPromise2.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
}