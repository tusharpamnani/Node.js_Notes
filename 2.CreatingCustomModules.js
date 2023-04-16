/* This is one way to import the Math.js we created
const math = require('./Math');

console.log(math.add(2, 3));    // adds the two parameters we provided.

*/

const {add, multiply, divide, subtract} = require('./Math');
console.log(add(2, 3));    // adds the two parameters we provided.
console.log(subtract(2, 3));    // subtracts the two parameters we provided.
console.log(multiply(2, 3));    // multiplies the two parameters we provided.
console.log(divide(2, 3));    // divides the two parameters we provided.