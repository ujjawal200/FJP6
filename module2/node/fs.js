let fs = require("fs");
console.log(fs);

let path = require("path");
let filePath = path.join(__dirname,"file.txt");
console.log(filePath);


//writefilesync creates  a file and give input if not created and change the input if created
fs.writeFileSync(filePath,"hello new file is created");