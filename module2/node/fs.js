let fs = require("fs");
console.log(fs);

let path = require("path");
let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

//CRUD : create read update delete  

//c. create
//writefilesync creates  a file and give input if not created and change the input if created
fs.writeFileSync(filePath,"hello new file is created");

//r. read
// reading the file (utf-8 to avoid buffer)
let content = fs.readFileSync(filePath,'utf-8');
console.log(content);

//u. update
//just update means adding something in same that file
 fs.appendFileSync(filePath," added content");
console.log("After update");
console.log(fs.readFileSync(filePath,'utf-8'));

//d . delete
fs.unlinkSync(filePath);