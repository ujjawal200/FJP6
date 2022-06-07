// syntax of childprocess

let cp = require('child_process');

console.log(cp);

//calculator
cp.execFileSync("calc");
//cp.execFile("calc"); (both will work as calculator)

// calling vs code

cp.execSync("code");
