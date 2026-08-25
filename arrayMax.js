let num=[22,23,45,66,77,-9,0,55,6,77,3,32];

let max=22;

for(i=1;i<num.length;i++){
    if(num[i]>max){
        max=num[i];
    }
}
console.log("max num is : ",max);