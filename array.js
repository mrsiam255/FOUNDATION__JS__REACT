let name=[]; // array declare holo 
console.log(name);

let student=["Tasnim", "Tamanna","Tarek","Siam","Prity","Ratna"];
console.log(student);

let id=[252,253,254,255,256,257];
console.log(id);

console.log(student[3],id[3]);

console.log(student[3]);

// let's a scenario in Tarek will go to varsity and Rashed will come 

student.splice(2,1,"Rashed");
console.log(student);

// next scenario is , siam is elemented by rashed and print rashed and prity will be sitted together

student.splice(3,1);
console.log(student);

console.log(student[2],student[3]);

// now coder siam akdom 1st a jabe 

student.unshift("Siam");
console.log(student);

console.log(student.pop());
console.log(student);
student.push("Siam");
console.log(student);

student.splice(1,1,);
student.splice(1,1,);
student.splice(1,1,);
console.log(student);

student.pop();
console.log(student);

console.log(student[0],id[3],student[1],id[4]);
