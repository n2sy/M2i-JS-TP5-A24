let scores, currentScore, activePlayer, isPlaying;

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceImg = document.querySelector(".dice");

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0.textContent = scores[0]; // =0
  score1.textContent = scores[1]; // =0
  diceImg.hidden = true;

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
}

init();
