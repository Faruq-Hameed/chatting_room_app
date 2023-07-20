/**Inside the script tag, we are using the socket instance to send the user message 
 * to our express server and also listen for incoming events from the server to 
 * display the username and message on the browser. */
console.log('Connecting to nnjkjd ...')
let socket = io();

let form = document.getElementById("form");
let myName = document.getElementById("myname");
let message = document.getElementById("message");
let messageArea = document.getElementById("messageArea");

form.addEventListener("submit", (e) => { 
  e.preventDefault();

  if (message.value) {
    socket.emit("send name", myName.value);
    socket.emit("send message", message.value);
    message.value = "";
  }
});

socket.on("send name", (username) => {
  let name = document.createElement("p");
  name.style.backgroundColor = "grey";
  name.style.width = "100%";
  name.style.textAlign = "center";
  name.style.color = "white";
  name.textContent = username + ":";
  messageArea.appendChild(name);
});

socket.on("send message", (chat) => {
  let chatContent = document.createElement("p");
  chatContent.textContent = chat;
  messageArea.appendChild(chatContent);
});
