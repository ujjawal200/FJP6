// empty object 
let obj = {};
console.log(obj);

let obujjawl ={
    name : "ujjawal",
    phoneno :2345778654321,
    lastname : "thakur",


}
console.log(obujjawl);

let capamerica = {
    name:"steve",
    age: 99,
    freinds:['Thor','Tony','natasha'],
    address:{
        city:"queens",
        state:"bihar"
    },
    sayHi:function(){
        console.log("bihar ke lala.... jiya tu hazar saala")
    }
}
console.log(capamerica);

//particular key access
console.log(capamerica.name);

// city of capamerica
console.log(capamerica.address.city);

//functon as a value stored in a key of an object
console.log(capamerica.sayHi());

//directly call the function without giving it ot the console to avoid "undefined " eror
capamerica.sayHi();