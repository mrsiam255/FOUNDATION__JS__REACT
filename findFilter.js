// filter :: condition r sob e dai
// find :: condition r just 1st ta dai 

let student=["siam","xam","am","sohel"];

let who=student.find((m)=>{
    if(m.length>3){
    return m;
    }
});
console.log(who);


// filter : condition match r sob return kora 



let students=["siam","xam","am","sohel"];

let whO=students.filter((f)=>{
    if(f.length>3){
    return f;
    }
});
console.log(whO);