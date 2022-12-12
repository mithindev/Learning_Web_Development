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
// const letters = ['a', 'b', 'c', 'd'];
// console.log(groceries);

// console.log(groceries[3]);

// groceries.push('mithin');

// console.log(groceries);

// Array slice

// Array methods

// (slice, push, indexof, length)

// console.log(letters);

// OBJECTS

// const person = {
//   name: 'Mithin',
//   shirt: 'grey'
// };

// // To access a object we use dot or brace notation;
// console.log(person.name);
// console.log(person['shirt']);

// // assign object

// person.phone = '1213244244';
// console.log(person.phone);

// console.log(person);

// const person2 = {
//   name: 'mithin',
//   age: 18,
//   shirt: 'black'
// }

// console.log(person2)

// const induc = (name, shirt) => {
//   const person2 = {
//     name: name,
//     age: 18,
//     shirt: shirt,
//     assets: 100000,
//     liability: 50000
//   }
//   const intro = `Hi my name is ${person2.name} and my shirt is ${person2.shirt}, and my networth is : ${person2.assets - person2.liability}`;

//   return intro;
// };

// console.log(induc('mtihin', 'white'));

// const mytry = (name, age) => {
//   const person = {
//     name: name,
//     age: 18,
//     shier: 'white'
//   }
//   const inter_demo = `Hello World! I am ${person.name} and my age is ${person.age}`
  
//   return inter_demo;
// }

// console.log(mytry('mithin', 18))

// Megthods

// const introducer = (name, shirt) => {
//   const person = {
//     name: name,
//     age: 18,
//     shirt: shirt,
//     assets: 100000,
//     liability: 50000,
//     netWorth: function () {
//       return this.assets - this.liability
//     }
//   }
// }

// const person = {
//   name: 'mithin',
//   age: 18,
//   shirt: 'white',
//   assets: 100000,
//   liability: 50000,
//   netWorth: function () {
//     return this.assets - this.liability
//   }
// }

// console.log(person.netWorth())

// LOOPS

// const letters = ['a', 'b', 'c', 'd'];

// for (let i = 0; i < letters.length; i++) {
//   console.log(letters[i]);
// }

// for (const i of letters) {
//   console.log(i)
// }

// const numbers = [1, 2, 3, 45, 6, 7, 8]

// sum up all the numbers in a array

// for (const i of numbers) {
//   console.log(i)
// }

// let result = [];
// for (const i of numbers) {
//   result.push(2 * i);

// }

// console.log(result)

// const double = (num) => {
// let result = [];
// for (const i of num) {
//   result.push(i ** 2);
//   }
//   return result;
// }

// console.log(double([1, 2, 3, 4, 5, 6]))


// const letterCounter = (arr, target) => {
//   // const phrase = 'Hello World!';
//   let count = 0;

// // for in loops

//   for (i in arr) {
//     if (arr[i] == target) {
//       count = count + 1;
//     }
//   }
//   return count;

// }

// let ans = letterCounter([1, 2, 6, 4, 5, 6], 6);
// console.log(ans);

//for of loops

// for (const i of arr) {
//     if (arr[i] == target) {
//       count = count + 1;
//     }
//   }

// let phrase = 'Hello! World';

// const Length = (arr) => {

//   let result = 0;

// for (const index in phrase) {
//   result = Number(index) + 1 // Here the index is in strings so we are type casting it;
//   }
  
//   return { result };

// }

// const phrase = prompt('Write your own phrase');

// console.log(Length(phrase));


// const SumArr = (arr) => {
//   let sum = 0;
//   for (i in arr) {
//     sum += Number(arr[i]);
//   }

//   return { sum };
// }

// let ans = SumArr([1, 2, 3, 4, 5]);
// console.log(ans);


// const SumArr = (arr) => {
//   let sum = 0;
//   for (i in arr) {
//     sum += (arr[i]);
//   }

//   return { sum };
// }

// let ans = SumArr([1, 2, 3, 4, 5]);
// console.log(ans);

// const SumArr1 = (arr) => {
//   let sum1 = 0;
//   for (const i of arr) {
//     sum1 += (i);
//   }

//   return { sum1 };
// }

// let ans1 = SumArr1([1, 2, 3, 4, 5]);
// console.log(ans1);

// const Max = (arr) => {
//   let temp = -100000000;
//   for (const element of arr) {
//     if (element > temp) {
//       temp = element;
//     }
//   }
//   return temp;
// }
// let frequency = {};

// let LetterFreq = (phrase) => {
//   for (element of phrase) {
//     frequency[letter] = Count(phrase, element);
//   }
//   return frequency;

// }

// let Count = (arr, target) => {
//   let count = 0;
//   for (const element of arr) {
//     if (element == target) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(LetterFreq('aaaabbbbedfienfeifn dfndejf'));

// console.log(Count('mithin dev', 'e'));

// wordFrequency('')
// const wordFrequency = (phrase) => {
//   frequency = {};
//   const words = phrase.split(' ');
//   console.log(words);

//   for (elements of words) {
//     console.log(elements)

//     if (elements in frequency) {
//       frequency[elements] += 1
//     } else {
//       frequency[elements] = 1
//     }
//   }
//   return frequency;
// }

// console.log(wordFrequency('lol What is going lol'));

// HIGHER ORDER FUNCTION
// MAPS -- loops and returns an array
// FILTER
// REDUCE




[1, 2, 3, 4].map(number => console.log(number))


