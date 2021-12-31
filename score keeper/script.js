"use strict";

const reset = document.querySelector(".btn-reset");
const addPlayerOne = document.querySelector("#addPlayerOne");
const removePlayerOne = document.querySelector("#removePlayerOne");
const addPlayerTwo = document.querySelector("#addPlayerTwo");
const removePlayerTwo = document.querySelector("#removePlayerTwo");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const select = document.querySelector("#party-select");
const winner = document.querySelector(".winner");

let score, maxScore, playing, player;

function init() {
  score = [0, 0];
  playing = true;
  maxScore = Number(select.value);
  score0.textContent = "0";
  score0.style.color = "#000";
  score1.textContent = "0";
  score1.style.color = "#000";
  winner.classList.add("hidden");
}

function addScore() {
  if (playing && score[player] < maxScore) {
    score[player]++;
    document.querySelector(`#score--${player}`).textContent = score[player];
  }
  if (playing && score[player] === maxScore) {
    document.querySelector(`#score--${player}`).style.color = "#fff";
    winner.textContent = `Player ${player + 1} Wins!`;
    winner.classList.remove("hidden");
    playing = false;
  }
}

function removeScore() {
  if (playing && score[player] > 0) {
    score[player]--;
    document.querySelector(`#score--${player}`).textContent = score[player];
  }
}

init();

addPlayerOne.addEventListener("click", () => {
  player = 0;
  addScore();
});

removePlayerOne.addEventListener("click", () => {
  player = 0;
  removeScore();
});

addPlayerTwo.addEventListener("click", () => {
  player = 1;
  addScore();
});

removePlayerTwo.addEventListener("click", () => {
  player = 1;
  removeScore();
});

select.addEventListener("click", init);

reset.addEventListener("click", init);
