// how to print
console.log("swagat ni karoge humara!!!");
// variable decleration
let num  =10;
let char = 'a';
let string = 'i am a string';
let bool = true;
console.log ("num");
console.log("char");
console.log("string");
console.log("bool");
// loop
for( let a = 1; a< 10; a++){
    console.log(a);
}
// while
let count = 10;
while(count > 0){
    console.log(count);
    count --;
}
// check whether a number is prime aur not;
let n = 10;
let isprime = true;
for(div = 2;div*div<=n;div++){
    if(n%div == 0){
        isprime = false;
    }
}
if(isprime == true){
console.log("prime");}
else{
    console.log("not prime");
}