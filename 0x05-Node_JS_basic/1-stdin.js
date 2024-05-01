// Import the 'process' module
const process = require('process');

const phrase = 'Welcome to Holberton School, what is your name?';

function wrt() {
  process.stdout.write(`${phrase}\n`);
}

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});
process.on('exit', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
wrt();
