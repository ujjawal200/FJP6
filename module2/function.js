// fuction without parameter and without return type
function helloji(){
    console.log("hello from function");
}
helloji();
// function with parameter
function sum(num1 , num2){
    let addition = num1 +num2;
    console.log("The sum of the given numbers is :" + addition);
}
sum(3,5);
// function with parameter and return type
function multiply(num1,num2){
    return num1*num2;
}
let product = multiply(5,3);
console.log("The product of given numbers is :"+product);


//we can store a function in variable
// functions are called first class citizen in js (interview question)

let a = function diffference(num1,num2){
    return num1 - num2;
}
console.log(a(8,6));

//IIFE -> immediately invoved function expression
//IIFE without parameter
(function(){
    console.log("hello from IIFE");
})();

//IIFE with parameter
(function(num1,num2){
    console.log(num1/num2);
})(20,5);