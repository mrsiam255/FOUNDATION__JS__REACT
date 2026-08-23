const weight=process.argv[2];
const height=process.argv[3];

function bmiC(weight,height){
    let bmi=weight / (height * height);
    return bmi;
}

const bmi = bmiC(weight, height);
console.log(bmi);

if(bmi<18.5){
    console.log("underweight");
}
else if (bmi>=18.5 && bmi<=24.9){
    console.log("normal");
}
else if (bmi>25 && bmi<29.9){
    console.log("overweight");
}
else if (bmi>30){
    console.log("obese");
}
else{
    console.log("wrong calculation");
}