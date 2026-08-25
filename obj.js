let student={
    name : "siam",
    id : 255,
    sub : {
        ban : 75,
        eng : 95 ,
        math : 85
    },

};

let marks=0;
let sub=0;
for(i in student["sub"]){ // object a loop use korba amne :: for ( i in "  " )
    marks+=student["sub"][i];
    sub++;

}

let m=marks/sub;

if(m>=80){
    console.log("A+");
}
else{
    console.log("Not A+");
}