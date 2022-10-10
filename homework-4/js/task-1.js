// 1. Створіть програму, яка виводить на екран 10 випадкових чисел із діапазону -25…+25.
//  Після кожного від’ємного числа потрібно виводити (впритул до числа) символ «?».

// Наприклад : 2, -8?,17,24,-17?,14
let num1 = -25;
let num2 = 25;

let randomNumbers = parseInt(Math.random() * (num1 - num2) + num2)  ;



for(let i = 1;i <= 10; i++){
    if(randomNumbers < 0){
      console.log(randomNumbers + '?')
    } else{
      console.log(randomNumbers)
    }
}