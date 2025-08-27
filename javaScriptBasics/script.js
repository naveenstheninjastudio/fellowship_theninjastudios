const firstName = "Naveen";
const age = 26;
const isStudent = true;
console.log(`My name is ${firstName} and I'm ${age} years old`);
console.log(isStudent);
const favouriteFruits = ["Banana", "Apple", "Mango"];
console.log(favouriteFruits);

const person = {
  firstName: "Jennie",
  age: 28,
  city: "Seoul",
};
console.log(person);

function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Lisa"));

const greet1 = (yourName) => `Hello ${yourName}`;
console.log(greet1("Rose"));

function addition(a, b) {
  return a + b;
}

console.log(addition(98765, 12345));

// task 3
const car = {
  brand: "BMW",
  model: "M4",
  year: "2025",
};
console.log(car);
car.color = "black";
console.log(car);

const numbers = [1, 2, 3, 4, 5];
const numbersX2 = numbers.map((x) => x * 2);
console.log(numbersX2);
const evenNumbers = numbers.filter(even);
function even(e) {
  return e % 2 === 0;
}
console.log(evenNumbers);
numbers.forEach(print);
function print(e) {
  return console.log(e);
}
