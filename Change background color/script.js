"use strict";

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const text = document.querySelector(".text");

function randomNumber() {
  const random = Math.floor(Math.random() * 255) + 1;
  return random;
}

btn.addEventListener("click", () => {
  let color1 = randomNumber();
  let color2 = randomNumber();
  let color3 = randomNumber();
  body.style.backgroundColor = `rgb(${color1},${color2}, ${color3})`;
  text.classList.remove("hidden");
  text.textContent = `RGB Color: ${color1},${color2},${color3}`;
});
