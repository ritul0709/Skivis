function addChatMsg(sender, text) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = `msg ${sender}`;
    div.innerText = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function sendChatMsg() {
    const input = document.getElementById('chat-user-input');
    const val = input.value.trim();
    if(!val) return;

    addChatMsg("user", val);
    input.value = "";

    setTimeout(() => {
        let reply = "I'm here to help! You can ask me about skin rashes, eye fatigue, or how to book an appointment.";
        if(val.toLowerCase().includes("doctor") || val.toLowerCase().includes("appointment")) {
            reply = "I can help you book an appointment. Simply click the 'Appointment' button in the menu above.";
        } else if(val.toLowerCase().includes("hello") || val.toLowerCase().includes("hi")) {
            reply = "Hello! I am Skivis AI. How are your skin and eyes feeling today?";
        }
        addChatMsg("bot", reply);
    }, 800);
}

function toggleChat(){
    let c=document.getElementById('chat-box');
    c.style.display= (c.style.display==='none' || c.style.display === '') ? 'flex' : 'none';
}
