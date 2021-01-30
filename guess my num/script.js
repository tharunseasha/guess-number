"use strict";

//variables
let score = 20;
let high_score = 0;
//creating random number
let number = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = high_score;
  number = Math.trunc(Math.random() * 20) + 1;
  max_val = max(number);
  min_val = min(number);
  console.log("maximum value ", max_val);
  console.log("The absolute guess", number);
  console.log("minimum value", min_val);

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".hint_msg").textContent = "";
  score = 20;
});

//max
function max(number) {
  let max;
  if (number === 20) max = number;
  else if (number === 19) max = number + 1;
  else if (number === 18) max = number + 2;
  else max = number + 5;
  return max;
}

//min
function min(number) {
  let min;
  if (number === 1) min = number;
  else if (number === 2) min = number - 1;
  else if (number === 3) min = number - 2;
  else min = number - 5;
  return min;
}

//creating hint values

let max_val = max(number);
let min_val = min(number);
console.log("maximum value ", max_val);
console.log("The absolute guess", number);
console.log("minimum value", min_val);


//guessing numberzzz
document.querySelector(".hint").addEventListener("click", function () {
  if (score <= 10) {
    document.querySelector(
      ".hint_msg"
    ).textContent = `The number is between ${min_val} and ${max_val}`;
  } else {
    document.querySelector(
      ".hint_msg"
    ).textContent = `Your score should be 10 to activate hint`;
  }
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent =
      "😎 you guessed it correctly 😎";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //highscore
    if (score > high_score) {
      high_score = score;
    }
    document.querySelector(".highscore").textContent = high_score;
  } else if (guess > max_val) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤨 TOO HIGH";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 you lost it";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < min_val) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤔 TOO LOW";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 you lost it";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess <= max_val || guess >= min_val) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😚 your are bit close ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 you lost it";
      document.querySelector(".score").textContent = 0;
    }
  }
});
