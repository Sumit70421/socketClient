// const {io} = require('socket.io-client')
//io is a function we need to call to get an individual socket
const joinRoomButton = document.getElementById('room-button')
const messageInput = document.getElementById('message-input')
const roomInput = document.getElementById('room-input')
const form = document.getElementById('form')
const socket = io('http://localhost:3000')

socket.on('connect',()=>{   //On will wait for event specified to occur and execute the callback function
    displayMessage("Connected")
})
socket.on("received-message",(message)=>{
    displayMessage(message)
})
form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const message = messageInput.value
        console.log(message)
        const room = roomInput.value
        if(message==="")return
        displayMessage("You: "+message)
        socket.emit("send-message",message);
        messageInput.value = ""
    })

joinRoomButton.addEventListener('click',()=>{
        const room = roomInput.value
    })

function displayMessage(message){
    const div = document.createElement('div')
    div.textContent = message
    document.getElementById('message-container').append(div)
}

