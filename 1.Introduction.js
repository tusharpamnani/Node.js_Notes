// console.log("Hello World!");
// console.log(global);

const os = require('os');
const path = require('path');

console.log(os.type());     // gives the type of the operating system used by the machine that is running the script. 
console.log(os.version());    // gives the version of the operating system used by the machine that is running the script.
console.log(os.homedir());    // gives the home directory of the machine that is running the script.

console.log(__dirname);    // gives the name of the directory that contains the executable file/script.
console.log(__filename);    // gives the name of thhe file/ script that is being execcuted.

console.log(path.basename(__filename));   // gives the basename of the file/script that is being execcuted.
console.log(path.dirname(__filename));    // it is the same as using console.log(__dirname) 
console.log(path.extname(__filename));    // gives just the extension of the file/script that is being execcuted.

console.log(path.parse(__filename));    // returns each and every detail of the file/script that is being execcuted.
