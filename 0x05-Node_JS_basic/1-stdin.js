// Import the 'process' module
const process = require('process');

// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set up event listener for user input
process.stdin.on('data', (data) => {
  // Extract user input
  const name = data.toString().trim();

  // Display user's name
  console.log(`Your name is: ${name}`);

  // Display closing message
  console.log('This important software is now closing');

  // Exit the program
  process.exit(0);
});
