const fs = require('fs');

if (!fs.existsSync("./new")){               // Checks if the directory is not already created. This helps us to avoid overriding the existing directory.
    fs.mkdir("./new", (err) => {            // If the directory doesn't exist, creates a new directory called "new".
        if (err) throw err;
        console.log("Directory Created");
});
}

//      Deleting the new directory

if (fs.existsSync("./new")){                // Checks if the directory exists
    fs.rmdir("./new", (err) => {            // If it does, deletes the directory
        if (err) throw err;
        console.log("Directory Deleted");
});
}