// Домашнє завдання: переробити динамічне
// створення списку за допомогою querySelector
// та addEventListner та зробити показ натиснутих
// клавіш при вводі у input

const btn = document.querySelector("#firstBtn");
const list = document.querySelector("#list");
const input = document.querySelector("#firstInput");
const h2 = document.querySelector('h2')

let btnFunction = () => {
  list.innerHTML += `<li>${input.value}</li>`;
};

btn.addEventListener("click", btnFunction);
input.addEventListener("keydown", (el) => {
  h2.innerHTML = `${el.key}`;
});
