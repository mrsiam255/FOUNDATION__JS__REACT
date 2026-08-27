/*
name , age , address [ obj , city , sub(array)]

"Siam" → studentName
"Pabna" → studentCity
"phy" → firstSubject
"cse" → lastSubject

*/

let student={
    name : "siam",
    age : 26,
    address : {
        city : "pabna",
        sub : ["Phy" , "chem" , "cse"],
    }
};

let {name:stuname,address:{city:stucity,sub : [fsub,,lsub]}}=student;


console.log(stuname,stucity,fsub,lsub);