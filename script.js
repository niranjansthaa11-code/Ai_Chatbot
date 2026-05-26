const chatBOx = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const apiKey ="AIzaSyCxlUR8_Lr89duIxRuOC5RfeLj7fWSd2_8"

// for message bubble 
function addMessage(message,className){ // this is function and this only appears when the user calls it 
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message",className);
    msgDiv.textContent = message;
    chatBOx.appendChild(msgDiv); // yesley chahi message lai lagera chatbox tala naya div generate garera rakhxw it measns tesley afno clild banauxw

    chatBOx.scrollTop = chatBOx.scrollHeight; //scrolltop vaneko scrool ahiley kaha xw vnna khojya ho 
}

function showTyping(){
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message","message-bot");
    typingDiv.textContent = " sathi i am working..";
    chatBOx.appendChild(typingDiv);
    chatBOx.scrollTop =chatBOx.scrollHeight;
    return typingDiv;
}

async function getsathireply(userMessage){
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;    

    try {
        const response = await fetch(url,{
            method: "POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify({
                contents: [{parts:[{text: userMessage}]}]
            })
        })

        const data = await response.json();
        console.log({data});
    } catch (error) {
        
    }

}


// things that start after clicking send
sendBtn.onclick = async() =>{
    const message = userInput.value.trim();
    console.log(message); //yesley chahi typebox ma lekheko chij lai browser ko console ma rakhxw
    if ( message === "")
        return; // this makes the message not go to the server if user hasn;t typed anything yet 
    addMessage(message,"message-user");
    userInput.value=""; // it maks the text out clear


    const typingDiv = showTyping();
    const sathiReply = await getsathireply();

    typingDiv.remove();
    addMessage(sathiReply,"message-bot" );

    //yesley chahi local storage ma hamro message hold up grxw 
    localStorage.setItem("guffhistory",chatBOx.innerHTML);

}

//adding press to enter or send message\
userInput.addEventListener("keypress",(e) => {
    if(e.key==="Enter") sendBtn.click();
})



