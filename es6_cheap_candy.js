"use strict";


let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "SweetGum Fish", price: 1.79 },
    { product: "Sour Fish", price: 5.79 },
    { product: "Lazy Fish", price: 7.79 },
    { product: "Sugar Fish", price: 6.79 },
    { product: "Hershey Gum", price: 8.79 },
    { product: "Laffy Taffy", price: 0.79 },

    // TODO: fill the array with 10 candies of various
    // price ranges
];



//for of loop

let someCandy = products.filter(product => product.price <= 4.00);


// in the code above, p is a variable that represents a 
// value in the array people; it is used in the comparison 
// as the find function looks at each value in the array
for (let price of products) {
    if (price.product == price) {
        return true;

    }
  
}
 console.log(someCandy.price)m;


/*for (let i = 0; i < someCandy.length; i++) {
    console.log(someCandy[i].product);
}

console.log(`Candies under $4.00 above`);


 Which candies costs less than $4.00?*/



