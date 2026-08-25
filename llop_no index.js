let fruit =[ "a",'b','c','d'];

for(i of fruit){
    console.log("yummy: ",i);
}
console.log("\n\n\n");

// object in loop 

let stu={
    name : "siam",
    id :255,
    add:"pabna"
};

for(i in stu){
    console.log(i , "->", stu[i]);
}