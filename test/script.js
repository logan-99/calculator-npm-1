// test/test.js

const calculator = require('calculator-npm-malith'); 

// Test the add function
const resultAdd = calculator.add(2, 3);
console.log(`Addition Result: ${resultAdd}`); // Expected output: 5

// Test the subtract function
const resultSubtract = calculator.subtract(5, 3);
console.log(`Subtraction Result: ${resultSubtract}`); // Expected output: 2

// Test the multiply function
const resultMultiply = calculator.multiply(2, 3);
console.log(`Multiplication Result: ${resultMultiply}`); // Expected output: 6

// Test the divide function
try {
  const resultDivide = calculator.divide(6, 3);
  console.log(`Division Result: ${resultDivide}`); // Expected output: 2
} catch (error) {
  console.error(`Error during division: ${error.message}`);
}

// Test division by zero
try {
  const resultDivideByZero = calculator.divide(6, 0);
  console.log(`Division Result (should not reach here): ${resultDivideByZero}`);
} catch (error) {
  console.error(`Error during division by zero: ${error.message}`); // Expected error: Cannot divide by zero
}
