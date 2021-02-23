const path = require('path');

// Basename
console.log("Filename: " + __filename);

// Directory name
console.log("Dir: " + path.dirname(__filename));

// File extension
console.log("File ex: " + path.extname(__filename));

// Create path object
console.log("Create path: " + path.parse(__filename).base);

// Conceatenate paths
console.log("Concatenate: " + path.join(__dirname, 'test', 'hello.html'));



