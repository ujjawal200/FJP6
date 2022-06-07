// syntax of childprocess

let cp = require('child_process');

console.log(cp);

//calculator
cp.execFileSync("calc");
//cp.execFile("calc"); (both will work as calculator)

// calling vs code

cp.execSync("code");

// calling another's file output here using childprocess

let content = cp.execSync("node test.js");

console.log("output from test.js file is :"+content);

// execSync store data in binary form as seen belows output
console.log(content);

// to overcome this problem we add the content with a empty or a filled string

console.log(""+content);
