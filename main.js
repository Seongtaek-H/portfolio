"use strict";

// navbar transform
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__scroll");
  } else {
    navbar.classList.remove("navbar__scroll");
  }
});

// navbar__menu scrolling
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// navbar toggle-btn for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
const home = document.querySelector(".home__container");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  home.classList.toggle("home__padding");
});

// home__contact Btn scroll
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// home fade-out as the window scroll

const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show arrow-up
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
//Click arrow-up Btn
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//scroll fuction
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};
