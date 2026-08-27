/* 
const employee = {
  name: "Siam",
  age: 26,
  address: {
    city: "Pabna",
    zip: 6600
  }
};

find out :: 

name → employeeName
city → employeeCity
zip → employeeZip
*/


// create an object 

let employee ={
    name:"siam",
    age : 26,
    add :{
        city : "pabna",
        zip : 6600,

    }
}; 

let {name:employeeName,add:{city:employeecity,zip:employeezip}}=employee;

console.log(employeeName,employeecity,employeezip);