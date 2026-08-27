/* 
exercise 1 — forEach() + index
let fruits = ["apple", "banana", "mango", "grape"];

// forEach ব্যবহার করে দেখাও:
// 1 -> apple
// 2 -> banana
// 3 -> mango
// 4 -> grape
/*/

let fruits=["apple", "banana", "mango", "grape"];

fruits.forEach((f,i) => {
    console.log(`${i+1}->${f}`);
    
});
