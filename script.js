const chatBOx = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");


sendBtn.onclick = async() =>{
    const message = userInput.value.trim();
    console.log(message); //yesley chahi typebox ma lekheko chij lai browser ko console ma rakhxw
    if ( message === "");
        return; // this makes the message not go to the server if user hasn;t typed anything yet 
    addMessage(message,"message-user")
}

// for message bubble 
function addMessage(message,className){ // this is function and this only appears when the user calls it 
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message",className);
    msgDiv.textContent = message;
    chatBOx.appendChild(msgDiv); // yesley chahi message lai lagera chatbox tala naya div generate garera rakhxw it measns tesley afno clild banauxw

    chatBOx.scrollTop = chatBOx.scrollHeight; //scrolltop vaneko scrool ahiley kaha xw vnna khojya ho 
}


