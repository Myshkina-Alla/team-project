const menu = document.querySelector(".menu");
const open = document.querySelector(".menu__open");
const close = document.querySelector(".menu__close");

open.addEventListener("click", () => {
  menu.classList.add("menu_open");
});

close.addEventListener("click", () => {
  menu.classList.remove("menu_open");
});
