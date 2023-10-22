document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keypress", function(event) {
    if (event.code === "Enter") {
    }
  });
});




var inputB = document.getElementById("bttn");
var inputField = document.getElementById("input");
var inputt = document.querySelector("#submitInput");
var subInput = document.getElementById("submitInput"); 
var inputF = document.getElementById("btn contact-us");
 var inputtt = "false";
var bttnInputt = document.querySelector("#bttn");

function submitIn(event) {
  let input = inputField.value;
  if (event.type === 'click' && inputField.value && inputtt == "false") {
    inputField.value = "";
     output(input);
 stateHandle();
    
  } else if (event.pointerType && inputField.value && inputtt == "false") {
    inputField.value = "";
     output(input);
 stateHandle();

  } else if (event.key === "Enter" && inputField.value && inputtt == "false") {
    inputField.value = "";
    output(input);
 stateHandle();
    
event.preventDefault();
  } else {
    return false;
    }
  }

inputt.addEventListener('pointerup', submitIn);
inputt.addEventListener('click', submitIn);
bttnInputt.addEventListener('pointerup', bttnInputtt);
bttnInputt.addEventListener('click', bttnInputtt);



//bttnInputt.addEventListener('pointerup', function() {
//window.location.href = "/support";
//});
//bttnInputt.addEventListener('click', function() {
//window.location.href = "/support";
//});
//var bttnInputt = document.querySelector("#bttn");


var name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
var name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
var contactus = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);


var utterances = [
["youu"],
["\u0068\u006F\u0077\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075", "\u0068\u006F\u0077\u0020\u0069\u0073\u0020\u006C\u0069\u0066\u0065", "\u0068\u006F\u0077\u0020\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u006E\u0067\u0073"],
  ["\u0068\u0069", "\u0068\u0065\u0079", "\u0068\u0065\u006C\u006C\u006F", "\u0067\u006F\u006F\u0064\u0020\u006D\u006F\u0072\u006E\u0069\u006E\u0067", "\u0067\u006F\u006F\u0064\u0020\u0061\u0066\u0074\u0065\u0072\u006E\u006F\u006F\u006E", "\u0067\u006F\u006F\u0064\u0020\u0065\u0076\u0065\u006E\u0069\u006E\u0067", "\u0068\u0069\u0020\u0074\u0068\u0065\u0072\u0065"],
  ["\u0077\u0068\u0061\u0074\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0064\u006F\u0069\u006E\u0067", "\u0077\u0068\u0061\u0074\u0020\u0069\u0073\u0020\u006E\u0065\u0077", "\u0077\u0068\u0061\u0074\u0020\u0069\u0073\u0020\u0067\u006F\u0069\u006E\u0067\u0020\u006F\u006E", "\u0077\u0068\u0061\u0074\u0020\u0069\u0073\u0020\u0075\u0070"],
  ["\u0068\u006F\u0077\u0020\u006F\u006C\u0064\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075"],
  ["\u0077\u0068\u006F\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0068\u0075\u006D\u0061\u006E", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0061\u0020\u0072\u006F\u0062\u006F\u0074", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0062\u006F\u0074", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0068\u0075\u006D\u0061\u006E\u0020\u006F\u0072\u0020\u0062\u006F\u0074", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0061\u0020\u0072\u006F\u0062\u006F\u0074"],      
  ["\u0068\u006F\u0077\u0020\u0064\u006F\u0020\u0079\u006F\u0075\u0020\u0074\u006F\u0070\u0020\u0075\u0070\u0020\u006D\u0079\u0020\u0062\u006F\u0074", "\u0068\u006F\u0077\u0020\u0074\u006F\u0020\u0074\u006F\u0070\u0020\u0075\u0070\u0020\u006D\u0061\u0072\u006B\u0065\u0074\u0062\u006F\u0074", "\u0074\u006F\u0070\u002D\u0075\u0070", "\u0074\u006F\u0070\u0075\u0070", "\u0074\u006F\u0070\u0020\u0075\u0070"],
  ["\u0063\u006F\u006E\u0074\u0061\u0063\u0074\u0020\u0075\u0073", "\u0063\u006F\u006E\u0074\u0061\u0063\u0074\u002D\u0075\u0073", "\u0072\u0065\u0070\u0072\u0065\u0073\u0065\u006E\u0074\u0061\u0074\u0069\u0076\u0065", "\u0073\u0070\u0065\u0061\u006B\u0020\u0074\u006F\u0020\u0061\u0020\u0072\u0065\u0070\u0072\u0065\u0073\u0065\u006E\u0074\u0061\u0074\u0069\u0076\u0065", "\u006C\u0069\u0076\u0065\u0020\u0061\u0067\u0065\u006E\u0074", "\u0061\u0067\u0065\u006E\u0074", "\u0073\u0070\u0065\u0061\u006B\u0020\u0074\u006F\u0020\u0061\u006E\u0020\u0061\u0067\u0065\u006E\u0074", "\u0073\u0070\u0065\u0061\u006B\u0020\u0074\u006F\u0020\u0061\u0020\u0061\u0067\u0065\u006E\u0074", "\u0073\u0070\u0065\u0061\u006B\u0020\u0074\u006F\u0020\u0061\u0020\u006C\u0069\u0076\u0065\u0020\u0061\u0067\u0065\u006E\u0074"],
  ["\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072", "\u0073\u0069\u0067\u006E\u0020\u0075\u0070", "\u0073\u0069\u0067\u006E\u002D\u0075\u0070", "\u0068\u006F\u0077\u0020\u0063\u0061\u006E\u0020\u0049\u0020\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072", "\u0068\u006F\u0077\u0020\u0074\u006F\u0020\u0073\u0069\u0067\u006E\u0020\u0075\u0070", "\u0068\u006F\u0077\u0020\u0074\u006F\u0020\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072", "\u0068\u006F\u0077\u0020\u0064\u006F\u0020\u0049\u0020\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072", "\u0068\u006F\u0077\u0020\u0064\u006F\u0020\u0049\u0020\u0073\u0069\u0067\u006E\u0020\u0075\u0070"],
  ["\u006C\u0061\u0074\u0065\u0073\u0074\u0020\u006E\u0065\u0077\u0073", "\u0075\u0070\u0064\u0061\u0074\u0065", "\u0074\u0065\u0061\u006D\u0020\u006D\u0065\u0065\u0074\u0069\u006E\u0067", "\u006D\u0065\u0065\u0074\u0069\u006E\u0067", "\u006D\u0065\u0065\u0074\u0069\u006E\u0067\u0020\u006D\u0069\u006E\u0075\u0074\u0065\u0073", "\u006E\u0065\u0078\u0074\u0020\u006D\u0065\u0065\u0074\u0069\u006E\u0067", "\u0077\u0068\u0065\u006E\u0020\u0069\u0073\u0020\u0074\u0068\u0065\u0020\u006D\u0065\u0065\u0074\u0069\u006E\u0067", "\u0077\u0068\u0065\u006E\u0020\u0069\u0073\u0020\u0074\u0068\u0065\u0020\u006E\u0065\u0078\u0074\u0020\u006D\u0065\u0065\u0074\u0069\u006E\u0067"],
  ["\u0068\u0065\u006C\u0070"],
];

var answers = [
["Youuu"],
["Fine... Thanks for asking.", "Pretty well, how can I help you?", "Fantastic, how can I assist?"],
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Greetings!"],
  ["Nothing much.", "Improving customer experience, how can I be of help?", "I don't know actually."],
  ["I am infinite."],
  ["I am just a bot.", "I am a bot. What are you?"],
  ["Visit our /home page and check out the Fund MarketBot dropdown menu.", "You can top up you're Advertising budget through any "],
  ["Ok, 'Agent'. Click on 'Contact Us'.", "I see you're looking to speak with a representative. Click 'Contact Us' and we'll be in touch", "A representative, sure. Click on 'Contact Us' and send us a message."],
  ["Click GET USD50 ADS BUDGET to register"],
  ["Looking for the latest news, click on 'Contact Us' and request a copy of the meeting minutes.", "Meeting with Eugene has been postponed to Aug. 23, 2022.", "Meeting minutes on the latest news is available, Click 'Contact Us'.", "Read the latest news and updates on AI Marketing, Contact us for more details."],
  ["Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying 'top up'.", "Say something like 'contact us'.", "You can try saying things like 'register'.", "Have questions, click on 'contact us'.", "Want to learn more? click sign in/sign up for more info.", "Need help? Our support team is here to assist, click on 'contact us' and we'll be in touch."],
];

var alternatives = [
"Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying 'top up'", "You can say things like 'register'", "Have questions, click on 'contact us' and we'll be in touch.", "Want to learn more? click sign in/sign up for more info", "Need help? Our support team is here to assist, click on 'contact us'.", "I didn't quit get that, try saying 'Latest News'."
];

function stateHandle() {
inputtt = "true";
        inputt.disabled = true;
     setTimeout(() => {
       inputtt = "false";
        inputt.disabled = false;
      inputField.autofocus = true;
      }, 6000);
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  }
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  var messagesBttnContainer = document.getElementById("messages");
let bttn = document.createElement("button");
bttn.innerHTML = "Submit Itt";
bttn.id = "bttn";
bttn.innerHTML = `Submit Itt`;
bttn.onclick="bttnInputtt(event)";
  var messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>\u0059\u006F\u0075\u003A<br>${input}<br><br></span>`;
  messagesContainer.appendChild(userDiv);
//  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = " ";
  botDiv.appendChild(botText);
messagesContainer.appendChild(botDiv);
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

//document.body.appendChild(bttn); 
if (product == "Youuu") { //\u0041\u0067\u0065\u006E\u0074\u003A\u000DYouuu\u000D\u000D") {
//bttn.innerHTML = "Submit Itt";
//bttnInputt.onclick = function () { 
//alert("Button is clicked"); 
//}; 
messagesContainer.appendChild(bttn);
  setTimeout(() => {
  botText.innerText = "\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0054\u0079\u0070\u0069\u006E\u0067\u002E\u002E\u002E\u000D\u000D";
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  setTimeout(() => {
//messagesContainer.appendChild(botDiv);
    botText.innerText = `\u0041\u0067\u0065\u006E\u0074\u003A\u000D${product}\u000D\u000D`;
//.appendChild(botText);
messagesContainer.appendChild(bttn);
//bttnInputt.onclick = window.location.href="/support"; //addEventListener('click', function(bttnInputt) {
//if (bttn.type === 'click') {
   
//window.location.href = "/support";
//} else {
//return false;
//}
//});
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  }, 4000);
       }, 2000);
} else {
 messagesContainer.appendChild(botDiv);
  setTimeout(() => {
  botText.innerText = "\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0054\u0079\u0070\u0069\u006E\u0067\u002E\u002E\u002E\u000D\u000D";
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  setTimeout(() => {
    botText.innerText = `\u0041\u0067\u0065\u006E\u0074\u003A\u000D${product}\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  }, 4000);
       }, 2000);
}
}

function addChatEntryBot() {
var messagesContainer = document.getElementById("messages");
let botDiv = document.createElement("div");
let botText = document.createElement("span");
botDiv.id = "bot";
botDiv.className = "bot response";
botText.innerText = " ";
botDiv.appendChild(botText);
messagesContainer.appendChild(botDiv);
setTimeout(() => {
botText.innerText = "\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0054\u0079\u0070\u0069\u006E\u0067\u002E\u002E\u002E\u000D\u000D";
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
setTimeout(() => {
botText.innerText = `\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0048\u0069\u0020\u0074\u0068\u0065\u0072\u0065\u002C\u0020\u0049\u0027\u006D\u0020\u0079\u006F\u0075\u0072\u0020\u0041\u0049\u0020\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006E\u0074\u002E\u0020\u0048\u006F\u0077\u0020\u0063\u0061\u006E\u0020\u0049\u0020\u0068\u0065\u006C\u0070\u0020\u0079\u006F\u0075\u003F\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}, 4000);
}, 2000);
}

function bttnInputtt(event) {
// var inputBb = bttn.onclick;
  if (event.type === 'click' && inputB.onclick) {
    window.location.href="/support";
  } else if (event.pointerType && inputB.onclick) {
window.location.href="/support";

  } else {
    return false;
    }
  }




function openForm() {
   document.getElementById("myForm").style.display = "block";
  var box = document.getElementById('messages');
if (box.childNodes.length === 0) {
  addChatEntryBot();
  inputField.autofocus = true;
  stateHandle();
}
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
