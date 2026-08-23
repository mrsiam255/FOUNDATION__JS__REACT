/*
const nm=(price,quantity)=>{
    const spend=price*quantity;
    return spend;
}
const save=500-nm(10,10);
console.log(save);


const a=(b,c)=>b+c;
console.log(a(5,5));

*/ 

const cost=(price, demand)=>{
    const spend=price*demand;
    return spend;
}

const save=500-cost(10,12);
console.log(save);