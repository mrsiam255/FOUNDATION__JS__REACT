//
function nameCheck(name){
    if (typeof name==="string"){
        return name.charAt(0).toUpperCase()+name.slice(1);
    }
    else{
        return;
    }
}

function checkEmail(email){
    if(email.includes("@") && email.includes(".")){
        return email;
    }else{
    return false;}
}

function checkPrice(price){
    if(typeof price==="number" && price>0){
        return price;
    }else{
        return false;
    }
}
function checkDiscountAndVat(price,code){
    if(code=="NLB"){
        price=price-((price*20)/100);
        price=((price*15)/100)+price;
        return price;
    }else{
        price=((price*15)/100)+price;
        return price;
    }
}
function bdt(price){
    return price.toFixed(2);
}

function orderProc(name,email,price,code){
    console.log(`---order processing start for ${name}---`);

    name=nameCheck(name);
    if(!name){
        return;
    }
    email=checkEmail(email);
    if(!email){
        return;
    }
    price=checkPrice(price);
    if(!price){
        return;
    }
    price=checkDiscountAndVat(price,code)
        if(!price){
            return;
        }
    
    let fbill=bdt(price);
    if(!fbill){
        return;
    }

    console.log(`order for ${name}`);
    console.log(`to be paid ${fbill}`);
    console.log("successful");

}

orderProc("prity","muntaha@mail.com",4000,"NLBn");