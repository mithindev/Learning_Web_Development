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

function tipCal(bill, tipPercentage) {
  return bill + (tipPercentage / 100) * bill;
}

let total = tipCal(100, 10);
console.log(`The total bill is : ${total} $`);
