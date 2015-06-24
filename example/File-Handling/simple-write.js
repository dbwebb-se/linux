/**
 * Examples on how to create a file and append to a file.
 */

var fs = require('fs');



// Create a file
// Note that this overwrites the existing file
fs.writeFileSync('myNiceNewFile.txt', 'Hey now,\n\nThis is a new file that I have created with nodejs!');

// If you want to add text to the file you need you call the appendFile-function
fs.appendFileSync('myNiceNewFile.txt', '\n\nThis data is now appended');

// If you like to create directories you can use the mkdir-function
fs.mkdirSync('newDir');

var data = { 'text':'Its also possible to write objects to the file using JSON.stringify.' };

var dataToBeWritten = JSON.stringify(data);

// We also want to create a file inside the new directory
// Note the relative path to the file
fs.writeFileSync('./newDir/example.json', dataToBeWritten);
