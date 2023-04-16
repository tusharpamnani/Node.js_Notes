/*      One way to export the functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {add, multiply, divide, subtract};  // this creates a collection of the functions to export.
*/

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
// This will export the functions same way the earlier one did but the only difference here is that these aren't exported as a collection.