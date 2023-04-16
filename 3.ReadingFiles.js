const fs = require('fs');
const path = require('path');
//              Reading files

/*     One way to read a file
fs.readFile('./Files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());   // If toString() method isn't used, the data displayed will be of buffer type
});
*/

fs.readFile('./Files/starter.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);      // no need to use "toString" method here as we defined the encoding "utf8" 
});

console.log("Hello......");     // proof that the methods available in Node are asynchronous  

// exit an uncaught error
process.on('uncaughtException', err =>{
    console.error(`There was an uncaught error : ${err}`);
    process.exit(1);
})

/*      Deliberately creating an error to test the "process" method.
fs.readFile('./Files/hello.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);      // no need to use "toString" method here as we defined the encoding "utf8" 
});
*/

// using the path method to get the file's path insted of providing it.
fs.readFile(path.join(__dirname, 'files','starter.txt'),'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); 
});