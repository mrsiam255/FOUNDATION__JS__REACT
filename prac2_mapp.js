/*
Exercise 2 — map() + return
let numbers = [10, 20, 30, 40, 50];

// map ব্যবহার করে প্রত্যেক number-এর সাথে 5 যোগ করো

// Expected:
// [15, 25, 35, 45, 55]

শর্ত: {} ব্যবহার করে return লিখবে।
*/


let numbers=[10, 20, 30, 40, 50];

let n=numbers.map((n)=>{  // extra variable lgca karon ,  map akta array return kora
    return n+5;

});

console.log(n);