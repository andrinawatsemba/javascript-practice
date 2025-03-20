console.log("Hello, World!");


let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum:", sum);

//Check Even or Odd
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


//  Loop through an Array
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//simple function
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  greet("Kenneth");
  
  // reversing a string
  let str = "JavaScript";
let reversed = str.split("").reverse().join("");
console.log(reversed);

// Find the Largest Number in an Array
let numbers = [2, 45, 10, 67, 23];
let max = Math.max(...numbers);
console.log("Max:", max);
