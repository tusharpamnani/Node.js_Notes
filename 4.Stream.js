const fs = require ('fs');

const rs = fs.createReadStream('./files/lorem.txt',{encoding: 'utf8'});     // creating a readable stream

const ws = fs.createWriteStream('./files/new_lorem.txt');                  // creating a writable stream

/*          Used to copy the data form one file to another file (Usually very large files)
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
*/

rs.pipe(ws);                                                               // this is more efficient than listening the stream.

