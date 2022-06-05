// empty array
let array =[];
console.log(array);

// arrry with elements
let arr =[1,2,3,4,5, "i am string",'c', 4.5]
console.log(arr);

// specific element 
console.log("element at 4th index :"+arr[4]);

//changing element
arr[4] = "changed";
console.log("The changed array is :"+arr);


console.log("##############################");
// array method

//1. push
arr.push("new pushed item");
console.log("Array after pushing"+arr);

//2. pop (it remove element from last)

console.log ("###########################");
arr.pop();
console.log("Array after applying pop:"+arr);

//3. shift (remove element from start)

console.log("############################");
arr.shift();
console.log("Array after applying shift:"+ arr);

//4. unshift
console.log ("###########################");
arr.unshift("newly added");
console.log("Array after applying unshift :"+ arr);

//5. length
let len = arr.length;
console.log("The length of the array is :"+len);