const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const fileops = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files','starter.txt'), 'utf8')
        console.log(data);        
        await fsPromises.unlink(path.join(__dirname, 'files','starter.txt'));      // unlink() is used to delete the file.

        await fsPromises.writeFile(path.join(__dirname, 'files','promisewrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files','promisewrite.txt'), "\n\nNice to meet you!!");
        await fsPromises.rename(path.join(__dirname, 'files','promisewrite.txt'), path.join(__dirname,"files", "promisecomplete.txt"));
        const Newdata = await fsPromises.readFile(path.join(__dirname, 'files','promisecomplete.txt'), 'utf8')
        console.log(Newdata);
    }
    catch (err) {
        console.error(err);
    }
}
fileops();

//      Writing Files

fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Nice to meet you!', (err) => {
    if (err) throw err;
    console.log("Write completed successfully"); 
});     // Creates the files to write if it doesn't exist

fs.appendFile(path.join(__dirname, 'files','test.txt'), 'testing text', (err) => {
    if (err) throw err;
    console.log("Append completed successfully"); 
});     // Creates the files to write if it doesn't exist

// Even though node is asynchronous, if we want a ssequence to be follwed, it is suggested to nest the functins.

fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Nice to meet you!', (err) => {
    if (err) throw err;
    console.log("Write completed successfully"); 

    fs.appendFile(path.join(__dirname, 'files','reply.txt'), '\n\nYes, it is.', (err) => {
        if (err) throw err;
        console.log("Append completed successfully"); 

        fs.rename(path.join(__dirname, 'files','reply.txt'), path.join (__dirname, 'files','Newreply.txt'), (err) => {
            if (err) throw err;
            console.log("Rename completed successfully"); 
        });
    });
});