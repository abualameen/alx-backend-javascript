// Import the 'process' module
const process = require('process');
const phrase = "Welcome to Holberton School, what is your name?"

function wrt() {
  process.stdout.write(`${phrase}`);
}

wrt()
