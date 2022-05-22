const menuBtn = document.querySelector(".menu__btn");
const menuBurger = document.querySelector(".menu__btn__burger");
const nav = document.querySelector(".header__navigation__nav");
const linksUl = document.querySelector(".header__navigation__nav__menu");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    nav.classList.add("open");
    menuBurger.classList.add("open");
    linksUl.classList.add("open");
    showMenu = true;
  } else {
    nav.classList.remove("open");
    menuBurger.classList.remove("open");
    linksUl.classList.remove("open");
    showMenu = false;
  }
}
