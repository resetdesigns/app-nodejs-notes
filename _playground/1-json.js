const fs = require('fs');

//
// Example :: Reading and Writing to JSON
//
// const book = {
//     title: "Don't Make Me Think",
//     author: 'Steve Krug',
// };

// // JSON - .stringify - Converts an object to JSON
// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // fs.writeFileSync('book-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('1-book-json.json'); // data buffer because this returns bits and bytes
// const dataJSON = dataBuffer.toString(); // convert to string
// const data = JSON.parse(dataJSON); // finally convert to an object

// console.log(data.title); // now we have access to the object properties

// End Example

// ========================================================

//
// Example :: Reading, Overwriting, and Storing Back to JSON
//

const dataBuffer = fs.readFileSync('1-overwrite-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// console.log(user);

user.name = 'Joseph';
user.age = 33;

// console.log(user);

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-overwrite-json.json', userJSON);

// End Example
