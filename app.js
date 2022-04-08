// const validator = require('validator');
// console.log(validator.isURL('https://josephvillajin.com'));

// const getNotes = require('./notes');
// const msg = getNotes();
// console.log(msg);

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chain into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use the docs to mess around with other styles. Make text bold and inversed.
//

const chalk = require('chalk');
console.log(chalk.green.bold.inverse('Success!'));
