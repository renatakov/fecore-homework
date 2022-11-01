// Створити об'єкт, який буде описувати вас
// , створити не менше 5 ключів,
//  вставити туди не менше двох функцій того, що ви вмієте робити.

let me = {
  name: "Renata",
  surname: "Kovalova",
  age: 14,
  dateOfBirth: 16,
  monthOfBirth: "April",
  yearOfBirth: 2008,
  eyesColor: "brown",
  hairColor: "black",
  longHair: true,
  height: 1.63,
  numOfClass: 8,
  bornCity: "Kyiv",
  bornCountry: "Ukraine",
  livingInCity: "Krakow",
  livingInCountry: "Poland",
  playBasketball: () => {
    return console.log("I am playing basketball!");
  },
  readBooks: () => {
    return console.log("I am reading books");
  },
  programing: () => {
    return console.log("I am programing!");
  },
  swimming: () => {
    return console.log("I am swimming!");
  },
  cycling: () => {
    return console.log("I am cycling");
  },
};


console.log(me);