"use strict";

const buttons = document.querySelectorAll("[data-carousel-button]");
const date = document.querySelector(".date");
const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const sections = document.querySelectorAll(".section");

//Slide

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//date

const now = new Date();
date.textContent = `${now.getFullYear()}`;

//sticky nav bar
const headerHeight = header.getBoundingClientRect().height;

const stickyTop = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyTop, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(header);

//Reveal all sections
const revealSections = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
