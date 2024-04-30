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

  // If input is not being redirected, display closing message
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit(0);
});

// Set up event listener for end of input
process.stdin.on('end', () => {
  // If input is not being redirected, display closing message
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});

// Set up event listener for error in input
process.stdin.on('error', (err) => {
  // Display error message
  console.error(`Error: ${err}`);
});
