"use strict";

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const text = document.querySelector(".text");

function randomNumber() {
  const random = Math.floor(Math.random() * 255) + 1;
  return random;
}

btn.addEventListener("click", () => {
  const col = [randomNumber(), randomNumber(), randomNumber()];
  body.style.backgroundColor = `rgb(${col[0]},${col[1]}, ${col[2]})`;
  text.classList.remove("hidden");
  text.textContent = `RGB Color: ${col[0]},${col[1]}, ${col[2]}`;
});
