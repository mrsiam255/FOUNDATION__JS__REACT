/*
user = {
    name: "Siam",
    contact: {
        email: "siam@gmail.com",
        phone: "01700000000"
    }
};

findout:

name → userName
email → userEmail
phone → userPhone
*/

let person={
    name: "siam",
    contact : {
        email : "siam@mail.com",
        phone : 123456789,
    }
}; 

let{name:userName,contact:{email:userMail,phone:userPhone}}=person;

console.log(`username is : ${userName},usermail is : ${userMail}, and phone number is ${userPhone}`);