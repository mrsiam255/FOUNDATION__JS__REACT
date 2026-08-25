// scenario is like :: nested object type working ok ?? 
// student friends forever group concept , then 2 vag then then 4 vag 

let friendForever={
     grp1 :{
    name : "siam",
    id : 255,
    add: "pabna",
    area : "river east",
    present : "mirpur"

    },

    grp2 :{
    name : "prity",
    id : 256,
    add: "noakhali",
    area : "river west",
    present : "mirpur 2"
    }, 

   grp3:{
    name : "rashed",
    id : 254,
    add: "noakhali",
    area : "river south",
    present : "cyprus",

   },
};

console.log(friendForever["grp3"]);

friendForever["grp3"]["present"]="sweden";
console.log(friendForever);

delete friendForever.grp3.present;
console.log(friendForever);

delete friendForever.grp3;

console.log(friendForever);



