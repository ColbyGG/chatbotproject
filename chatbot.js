
function talkButton(){
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["hey","hello","hi","whats up","Hey, how are you doing"];
  var howAreYou = ["I'm alright","I'm good","Alright, thanks for asking"];
  var randomResponse = Math.floor(Math.random() * 4)+ 0;
  var howVal = Math.floor(Math.random() * 6) + 0;
  var currentdate = new Date();
  var hours = currentdate.getHours();

  if (hours > 12) {
  hours -= 12;
}
  else if (hours === 0) {
   hours = 12;
}

  var datetime = "It's " + hours + ":" + currentdate.getMinutes();
  var response = {
    "how old are you": "old enough to be your fathers father.",
    "what time is it": datetime,
    "hello": greetResponse[randomResponse],
    "hi": greetResponse[randomResponse],
    "what is your name": "Oswald Chesterfield Cobblepot",
    "how are you": howAreYou[randomResponse],
    "how are you doing?": howAreYou[randomResponse],
    "Where are you from": "Gotham City",
    "How has your day been": "Great!",
    "How much money do you have": "Thats a rude question, but I have $3billion",
    "Who are you":"Im the penguin from batman",
    "What is your age": "Like 100 or something, I kinda forgot",
    "how old are you?": "old enough to be your fathers father.",
    "what time is it?": datetime,
    "hello?": greetResponse[randomResponse],
    "hi?": greetResponse[randomResponse],
    "what is your name?": "Oswald Chesterfield Cobblepot",
    "how are you?": howAreYou[randomResponse],
    "how are you doing": howAreYou[randomResponse],
    "Where are you from?": "Gotham City",
    "How has your day been?": "Great!",
    "How much money do you have?": "Thats a rude question, but I have $3billion",
    "Who are you?":"Im the penguin from batman",
    "What is your age?": "Like 100 or something, I kinda forgot",
  }

  var nonsense = ["I didn't quite get that","What?","can you change the question than ask again"]
  var random = Math.floor(Math.random() * 3) + 0;

  if(document.getElementById('input').value != ""){
    typeTextString = document.getElementById('input').value;
    var message = document.getElementById('input').value;
  message = message.toLowerCase();
  message = message.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  $("#chat-area").append(document.getElementById('input').value += "</br>");

  if (response[message] === undefined || response[message] === null) {
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}

else {
 $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
 console.log(response[message]);
 document.getElementById('input').value = "";
 objDiv.scrollTop = objDiv.scrollHeight;
}
}
}
