if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  changeTitle(randomNumber1, randomNumber2)
}

function changeTitle(num1, num2) {
  if (num1 === num2) {
    document.querySelector("h1").innerHTML = "🚩 Draw!";
  } else if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
  }
}
