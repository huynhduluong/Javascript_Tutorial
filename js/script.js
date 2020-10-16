function getEle(id) {
  return document.getElementById(id);
}

//Challenge 1: Your Age in Days

function ageInDays() {
  let birthYear = prompt("What year were you born ... Good friend?");
  let nowYear = new Date().getFullYear();
  let ageInDayss = (nowYear - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  getEle("flex-box-result").appendChild(h1);
}

function reset() {
  getEle("ageInDays").remove();
}

//Challenge 2: Cat Generator

function generateCat() {
  let image = document.createElement("img");
  let div = getEle("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randomBotChoice());
  let results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
  console.log(botChoice);
  message = finalMessage(results); //{'message':'You won!!', 'color' : 'green'}
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomBotChoice() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(humanChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  return rpsDatabase[humanChoice][botChoice];
}

function finalMessage(yourScore) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDatabase = {
    rock: getEle("rock").src,
    paper: getEle("paper").src,
    scissors: getEle("scissors").src,
  };

  //let's remove all the image
  getEle("rock").remove();
  getEle("paper").remove();
  getEle("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height='150px' width='150px' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage.color +
    "; font-size: 60px; padding: 30px;'>" +
    finalMessage.message +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height='150px' width='150px' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  getEle("flex-box-rps-div").appendChild(humanDiv);
  getEle("flex-box-rps-div").appendChild(messageDiv);
  getEle("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4: Change the Color of All Buttons

var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [...all_buttons].map((item) => item.classList[1]);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonRed();
  } else if (buttonThingy.value === "green") {
    buttonGreen();
  } else if (buttonThingy.value === "reset") {
    buttonColorRest();
  } else if (buttonThingy.value === "random") {
    randomColors();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonColorRest() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let colorChoices = ["primary", "danger", "warning", "success"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-" + colorChoices[randomNumber]);
  }
}
