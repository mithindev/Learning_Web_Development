// console.log('mtihin dev');
// console.log('Hello! world');

// name = 'peter pan';
// console.log(name);

// // operators

// food = 20;
// tip = 0.2;
// tipAmt = food * tip;
// console.log(tipAmt)

//user input

// bill = Number(prompt('Enter the total amount :'));
// tip = Number(prompt('Enter tip amount :'));
// tipAmt = (tip * bill) / 100;
// total = bill + tipAmt;

// console.log('tipAmt :', tipAmt);
// console.log(total);

// data types (strings, numbers)

/*
Exponents ** 
Modulo/remainder : %
*/

/*
Math methods :-
Math.floor --> Rounds down
Math.Ceil --> Rounds up
Math.random -->Num b/w (0,1)
*/


// Baby weather app;


// let weather;
// weather = prompt('Enter the weather :');
// if (weather == 'rain') {
//   console.log("Take ur umbrella!");
// } else {
//   console.log('Sunglasses !');
// }

// Functions

// function printMyName(name) {
//   console.log(name);
// }

// printMyName('mithin!')

// function greetings(name) {
//   greet = `Hi ${name}, Nice to meet you!`;
//   console.log(greet);
// }

// greetings('mtihin dev');

// Template literals : `` --> backtics

//Type casting

// function tipCal(bill, tipPercentage) {
//   return bill + (tipPercentage / 100) * bill;
// }

// let total = tipCal(100, 10);
// console.log(`The total bill is : ${total} $`);

/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// let sum = (num1, num2) => num1+num2;

// let sub = (num1, num2) => num1-num2;

// function div(num1, num2) {
//     if (num2 == 0) {
//       console.log("invalid!");
//       return;
//     } else {
//       return (a / b);
//     }
// };


// let mul = (num1, num2) => num1 * num2;

// console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/


// Arrays :-
const groceries = ['a', 'b', 'c', 'd'];
console.log(groceries);

// console.log(groceries[3]);

groceries.push('mithin');

console.log(groceries);