const burgerMenu = document.querySelector(".fa-arrow-circle-up");
const card = document.querySelector(".card");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("fa-arrow-circle-up");
  burgerMenu.classList.toggle("fa-arrow-circle-down");
  card.classList.toggle("cardHere");
});
