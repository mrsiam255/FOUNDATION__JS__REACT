function isValidEmail(email){
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    else{
        console.log("use valid mail");
        return false;
    }
}

function isValidPrice(price){
    if(price > 0 && typeof price === "number"){
        return true;
    }
    else{
        console.log("give valid tk");
        return false;
    }
}

function nameCorrect(name){
    if(typeof name !== "string" || name.trim() === ""){
        console.log("give valid name");
        return false;
    }
    else{
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}

function giveCode(price, code){
    if(code === "NLB"){
        let discount = (price * 20) / 100;
        let upPrice = price - discount;
        return upPrice;
    }

    return price;
}

function finalBill(price, vat = 15){
    let bill = (price * vat) / 100 + price;
    return bill;
}

function format(bill){
    return `${bill.toFixed(2)} BDT`;
}

function orderProcess(name, email, price, code){

    console.log(`--- order processing started ---`);

    name = nameCorrect(name);
    if(!name){
        return;
    }

    if(!isValidEmail(email)){
        return;
    }

    if(!isValidPrice(price)){
        return;
    }

    price = giveCode(price, code);

    let totalBill = finalBill(price);

    let finalAmount = format(totalBill);

    console.log(`Customer: ${name}`);
    console.log(`Final amount to pay: ${finalAmount}`);
    console.log("Order completed successfully");
}

orderProcess("siam", "siam@gmail.com", 4000, "NLBn");