`use strict`;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // WRONG GUESS
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("💥 You lost the game!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "10rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
