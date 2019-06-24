let btnMsg = document.getElementById('send-message'),
	msg = document.getElementById('message');
let historyMsg = document.querySelector('.read-message');
let users = ['read-message__box_text', 'read-message__box_text2'];

btnMsg.onclick = addMessage;
/*START Добавление введенного сообщения в переписку*/
function addMessage(){
	let newMsgBox = document.createElement('div');
	let newAva = document.createElement('div');
	let newMsg = document.createElement('p');
	newMsgBox.className = 'read-message__box';
	newAva.className = 'read-message__box_avatar';
	newMsg.className = rndUser(0, 1);
	newMsg.textContent = msg.value;

	
	newMsgBox.appendChild(newAva);
	newMsgBox.appendChild(newMsg);
	correctUser(newMsg, newMsgBox);
	historyMsg.appendChild(newMsgBox);
	msg.value = '';
}
/*END*/

/*START Рандомный пользователь*/
function rndUser(min, max){
	return users[Math.floor(Math.random() * (max - min + 1)) + min];
}
/*END*/

/*START Проверка*/
function correctUser(msg, msgBox){
	if(msg.className == 'read-message__box_text2'){
		msgBox.className += ' reverse';
	}
}
/*END*/