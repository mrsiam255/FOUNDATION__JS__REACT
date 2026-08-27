// name → variable হবে userName
// city → variable হবে userCity 

/* scenario is to create an object and destruct from there*/

let student={
    name : "siam",
    age : 26,
    add : "pabna",
    city : "rajshahi",
};

let {name:username, age, add, city:usercity}=student;
console.log(username,usercity);