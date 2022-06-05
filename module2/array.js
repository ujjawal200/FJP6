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
