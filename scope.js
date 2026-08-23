/* 3 types of scope are exist such as 
1. global scope 
2. block scope
3. function scope 
*/

/*for( i=0;i<5;i++){ // if i wirte it like : for ( let i=0li<5;i++)  then it error because let or const na dila , oita global
    console.log(i);
}
console.log(i);
*/

let m=9;
if(true){
    let i=5;
    console.log(i);
}

function fun(a,b){
    this.a =5;
    this.b=6;
    let result =a+b;
    console.log(result);
}
fun(5,6);

console.log(m);
