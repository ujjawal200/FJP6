//"C:\Users\Ujjwa\Desktop\fjp6\module2\node\path.js"

let path = require("path");
console.log(path);

// for finding the extension 
let extensionName = path.extname("C:\Users\Ujjwa\Desktop\fjp6\module2\node\path.js");
console.log(extensionName);
console.log("#######################")
// for finding the basename
let baseName = path.basename(__filename);
console.log(baseName); 
console.log("#######################")

console.log(__dirname); // this give the directory path.
console.log(__filename);// this give the file path.
