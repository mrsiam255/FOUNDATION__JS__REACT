// ... spread operato ja agar gulo auto niya asa

let ex={
    name1:"priyonty",
    age1 : 17,
    city1:"pabna",
};

let ex1={
    name2:"misty",
    age2 : 27,
    city2:"pabna",

};

let ex3={
    name3:"rodoshi",
    age3 : 24,
    city3:"pabna",
};
let ex4={
    name4:"rime",
    age4 : 26,
    city4:"pabna",
};
let ex5={
    name5:"jannat",
    age5: 24,
    city5:"pabna",
};

let dhakaKiya={
    name6:"pty",
    age6 : 27,
    city6:"feni",
    name7:"sumu",
    age7:29,
    city7:"dhaka",
    etc : "etc",
};

let all={
    ...ex,
    ...ex1,
    ...ex3,
    ...ex4,
    ...ex5,
    ...dhakaKiya,
    nam8:"ohona",
    city8:"dhaka",
};

console.log(all);