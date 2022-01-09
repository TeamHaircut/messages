const chatMessages = document.querySelector('.chat-messages');

// Output message to DOM
function outputMessage(message) {
	const div = document.createElement('div');
	if(message.username == getClientUsername()) {
		div.classList.add('mine');
	} else {
		div.classList.add('yours');
		div.style.fontSize = "small";
		div.innerHTML =`${message.username}`;
	}

	div.classList.add('messages');
	
	const div1 = document.createElement('div');
	div1.classList.add("message");
	div1.classList.add('last');
	
	div1.style.fontSize = "medium";
	//message.time not used
	div1.innerHTML = `<p>${message.text}</p>`;
	div.appendChild(div1);
	document.querySelector('.chat-messages').appendChild(div);
}
