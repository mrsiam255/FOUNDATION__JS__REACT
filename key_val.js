// scenario is : create a students details for 255 

let student ={
    name:"siam",
    id:255,
    address:"Pabna"
};

console.log(student);
console.log(student.address);
console.log(student["name"]);
console.log(student["id"]);

//student.add("name": "prity");

delete student.address;
console.log(student);
student.address="Mirpur";

student.address={
    city:"Dhaka",
    area: "mirpur",
};
console.log(student);

console.log(student.keys);

// scenario is now i wanna watc , object and keys name in separate 

// when we wanna see entries then syntax is :: object.entries ( object r name ) 

console.log(Object.keys(student));  // only key
console.log(Object.values(student)); // only values

console.log(Object.entries(student));  // full entry og object dektaci 

student.address={
    city : "Chittagong",
    Area: "Agrabad",
    type : "Local",

};

console.log(student);

// only keys dekbo 

console.log(Object.keys(student));

// full entry dekbo 

console.log(Object.entries(student));