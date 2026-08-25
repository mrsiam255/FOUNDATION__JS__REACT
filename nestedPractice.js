/* 
Create a nested object called university with this structure:

university
│
├── student1
│   ├── name: "Siam"
│   ├── id: 255
│   └── address
│       ├── district: "Pabna"
│       └── area: "Mirpur"
│
└── student2
    ├── name: "Prity"
    ├── id: 256
    └── address
        ├── district: "Noakhali"
        └── area: "Uttara"
Tasks
Create the university object.
Print Siam's name.
Print Prity's district.
Change Siam's area from "Mirpur" to "Dhanmondi".
Change Prity's district from "Noakhali" to "pabna".
Delete Siam's area.
Print the complete university object.

*/

let university={

    student1 : {
        name :"siam",
        id : 255,
        address :{
            district: " pabna",
            area : "mirpur"
        }

    },

    student2:{
        name : "prity",
        id :256,
        address :{
            district:"noakhali",
            area : "uttra",
        }
    },

};

console.log(university["student1"]["name"]);
console.log(university["student2"]["address"]["district"]);

// Change Siam's area from "Mirpur" to "Dhanmondi".

console.log(university["student2"]["address"]["area"]="Dhanmondi");


// Change Prity's district from "Noakhali" to "pabna".

console.log(university["student2"]["address"]["district"]="pabna");

// Delete Siam's area.

console.log(delete (university["student1"]["address"]["area"]));

console.log(university);