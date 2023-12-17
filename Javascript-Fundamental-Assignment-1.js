// #1 discount calculator
let totalCost = 5000;
let discountPercent = 10;
discountedValue = totalCost - ((discountPercent/100)*totalCost);
console.log(discountedValue);

// #2 login system
let username = "admin";
let password = "12345";
if(username =="admin" && password == "12345"){
    console.log("Login Succesfull");
}
else{
    console.log("Invalid Credentials");
}

// #3 Currency Conversion
let inr = 800;
let value = inr/82;
console.log(`${inr} INR is equivalent to ${value.toFixed(2)} USD`)

// #4 Ticket Price
const priceForChild = 100;
const priceForAdult = 150;
const priceForSenior = 120;
let numberOfChilds = 5;
let numberOfAdults = 3;
let numberOfSeniors = 1;
let totalPrice = priceForChild*numberOfChilds +priceForAdult*numberOfAdults + priceForSenior*numberOfSeniors;
console.log(`The total price is ${totalPrice}`);

// 5 Shipping Application
let packageType = "standard";
switch(packageType){
    case "standard":
        console.log("Your package delivery time is 3-5 days");
    break;
    case "express":
        console.log("Your package delivery time is 1-2 days");
    break;
    case "overnight":
        console.log("Your package delivery time is next day");
    break;
}

// 6 Form Validation
let name = "Alakh";
let  email = "alakh@gmail.com";
let age = 21;
if(typeof name !== "string"){
    console.log("Name should be a string.")
}
else if(typeof email !== "string"){
    console.log("Email should be a string.")
}
else if(typeof age !== "number"){
    console.log("Age should be a string.")
}
else{
    console.log("You are logged in!")
}

// #7 Shopping List
let shoppingList = [
    "Pen",
    "Papper",
    "Candy",
    "Soda",
    "Keyboard",
    "Screen Protector",
  ];
  for(i=0; i<shoppingList.length; i++){
    console.log(shoppingList[i]);
  }

// #8 Counting App
let i = 0;
while(i<=10){
    console.log(i);
    i++;
}

// #9 First String
const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
for(i=0; i<=arr.length; i++){
    if(typeof arr[i]=="string"){
        console.log(`First string found is ${arr[i]}`);
        break;
    }
}

// #10 Positive Number
let arr = [1, 2, -3, 5, -9, -8, -7, 7];
for(i=0; i<=arr.length; i++){
    if(arr[i]<0){
        continue;
    }
    console.log(arr[i]);
}