// 1. На початку програми ми отримуємо натуральне число s.
// Напишіть програму,
//  яка обчислює суму всіх його дільників.

// ------------------------------------------

let s = +prompt('Введіть натуральне число:  ');
let sum;
let i = 1;

for(i; i <= s; i++){
  if(s % i === 0 ){
    console.log(i);
  };
  // if(i <= s){
  // }
};
