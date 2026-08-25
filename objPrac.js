let cart =[

{ name : "shirt" , price : 1200 , quantity : 2 },
{ name : "pant" , price : 1800 , quantity : 1 },
{ name : "socks" , price : 150 , quantity :3 },
];

// koto item 
// koto bill in bdt 

let item=0;
for(i in cart){
  item++;
}

// totalElement 
let element=0;
let p=0;
for(i in cart){
    element+=cart[i]["quantity"];
    p+=cart[i]["price"];
}

console.log("items are : ",element );
console.log("bills are : ",p,"bdt");
