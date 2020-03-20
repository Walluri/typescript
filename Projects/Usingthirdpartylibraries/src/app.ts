import {Product} from './product.model';
import "reflect-metadata";

//import {plainToClass} from "class-transformer";

import "es6-shim";

// Let us say you are getting soem json data from another server and parse it.
const receivedProducts = [{title:"car",price:20},{title:"bike",price:30}]
// These are javascript objects but not instances of our product model. i.e they do not have a getInformation method

// We have to convert the received
const realProducts = receivedProducts.map((prod)=>{
    return new Product(prod.title,prod.price)
})
 
// Loop through and print the information
// This is how we manually transform noname JS object into an instance of a specific constructor function
console.log("WITH OUT Using Class Transformer")
for (const prodEl of realProducts){
    console.log(prodEl.getInformation())
}

console.log("After Using Class Transformer")
//const realProducts2 = plainToClass(Product,receivedProducts)
for (const prodEl of realProducts){
    console.log(prodEl.getInformation())
}

const P1 = new Product('book',122)
console.log(P1.getInformation())

   