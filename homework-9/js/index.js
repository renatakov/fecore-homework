// Домашнє завдання: переробити динамічне
// створення списку за допомогою querySelector
// та addEventListner та зробити показ натиснутих
// клавіш при вводі у input

const btn = document.querySelector("#firstBtn");
const list = document.querySelector("#list");
const input = document.querySelector("#firstInput");

let btnFunction = () => {
  list.innerHTML += `<li>${input.value}</li>`;
};

btn.addEventListener("click", btnFunction);
input.addEventListener("keydown", (el) => {
  console.log(el.key);
});
