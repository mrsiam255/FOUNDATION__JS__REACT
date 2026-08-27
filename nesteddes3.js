/*
const product = {
    name: "Laptop",
    price: 80000,
    brand: "Dell"
};

findout :: 

name → productName
price → productPrice
*/

let product={
    name:"Laptop",
    price:50000,
    brand : "Doel",
};

let {name:productName,price:productPrice}=product;

console.log(productName,productPrice);