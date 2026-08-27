/* 
findout 2nd max digit in number 
*/

function digit2nd(...rest){
    let max=rest[0];
    let max2nd=rest[1];

    for(i of rest){
        if(i>max){
            max2nd=max;
            max=i;
            
        }

        else if (i<max && i>max2nd){
            max2nd=i
        }
    }
    return max2nd;
}

console.log(digit2nd(2,3,4,5,6,6,7,));