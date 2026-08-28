let fruit=["apple","banana","jackfruit","grape","watermelon"];

// some :: jeta match korba condition 1 ta hoilau true diba
// every :: condition r satha sob gulo match korla tobai true diba

let find=fruit.every((f)=>{
    if(f.length>5){
        return f;
    }
});
console.log(find);  // karon sob gulo condition fill kora na tai false diba

let finds=fruit.some((m)=>{
    if(m.length>5){
        return m;
    }
});

console.log(finds);