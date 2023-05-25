// Prompt the user for a number
var userInput = console.log("Enter a number:");

// Convert the user input to a number
var number = Number(userInput);

// Check if the number is positive
if (number > 0) {
  // Loop from 1 to the number and output each iteration
  for (var i = 1; i <= number; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid input. Please enter a positive number.");
}
