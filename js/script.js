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
