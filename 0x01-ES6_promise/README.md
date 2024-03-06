# Asynchronous JavaScript Project

This project is aimed at providing a comprehensive understanding of asynchronous JavaScript programming using Promises, async/await syntax, and error handling techniques. By the end of this project, you'll have a solid grasp of the following concepts:

- **Promises**: Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous operations in a more structured and manageable way.

- **Promise Methods**:
  - `then()`: Used to handle the resolved value of a Promise. It takes two optional arguments, the fulfillment and rejection handlers.
  - `catch()`: Used to handle any errors that may occur during the Promise chain.
  - `finally()`: Used to execute code after a Promise is settled, regardless of its outcome.

- **Promise Static Methods**:
  - `Promise.all()`: Resolves when all promises in the iterable have resolved, or rejects with the reason of the first promise that rejects.
  - `Promise.allSettled()`: Resolves after all the given promises have either resolved or rejected.
  - `Promise.any()`: Resolves as soon as any of the promises in the iterable resolves, or rejects if all the promises are rejected.
  - `Promise.race()`: Resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

- **Error Handling**:
  - Using `throw` and `try...catch` to handle synchronous errors.
  - Using `catch()` method to handle asynchronous errors in Promise chains.

- **Async/Await**:
  - `async` function: Allows you to write Promise-based asynchronous code in a synchronous-looking manner.
  - `await` operator: Pauses the execution of an async function until a Promise is settled. It can only be used inside an `async` function.

## Getting Started

### Prerequisites
- Node.js 12.11.x or higher installed on your system.
- npm (Node Package Manager) to install dependencies.

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

### Running Tests
- To run tests, use the command: `npm run test`.
- To lint your code using ESLint, use the command: `npx eslint .`.

## Project Structure
- `package.json`: Contains project metadata and dependencies.
- `babel.config.js`: Configuration file for Babel, a JavaScript compiler.
- `utils.js`: Utility functions for handling asynchronous tasks.
- `.eslintrc.js`: Configuration file for ESLint, a JavaScript linter.

## Usage
- Implement your asynchronous JavaScript code in `.js` files, ensuring all functions are exported as required.
- Use Promises, async/await syntax, and error handling techniques as explained above.
- Run tests to ensure your code functions correctly and is properly linted.

## Resources
- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Contributors
- [Yakubu Abdullahi](link-to-your-github-profile) - Add a short description of your contribution.

