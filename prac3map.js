/*
map() Practice
let prices = [100, 200, 300, 400, 500];

// map() ব্যবহার করে প্রতিটি price-এর 20% VAT যোগ করে
// নতুন array তৈরি করো।

console.log(result);

Expected output:

[120, 240, 360, 480, 600]
*/

let num=[100, 200, 300, 400, 500];

let price=num.map((n)=>{
    return (n*.2)+n;

});

console.log(price);