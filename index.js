var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Place var randomNumber1 and var randomNumber2 in a string using concatenation

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// if randomNumber1 > randomNumber2
// else if randomNumber 2 > randomNumber1
// else randomNumber1 === randomNumber2 - Draw
// Within the curly braces - We want to use JS to change the H1


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "🚩 Draw!";
}
