const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  console.log("gfhw");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
