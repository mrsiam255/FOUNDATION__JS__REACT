/*
Exercise — filter()
let numbers = [5, 12, 8, 20, 3, 15, 7];

// filter() ব্যবহার করে শুধু 10-এর চেয়ে বড় সংখ্যাগুলো বের করো।

console.log(result);

Expected output:

[12, 20, 15]
*/

let number=[5, 12, 8, 20, 3, 15, 7];

let m=number.filter((n)=>{

    if(n>10){
        return true;
    }
});

console.log(m);