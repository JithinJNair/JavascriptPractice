//1) Perform +,-,*,/,% on two numbers
//install prompt-sync-npn install prompt-sync -to read data from command line.
const prompt = require("prompt-sync")();
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

switch (operation) {
    case "+":
        console.log(`Sum is: ${a + b}`);
        break;

    case "-":
        console.log(`Difference is: ${a - b}`);
        break;

    case "*":
        console.log(`Product is: ${a * b}`);
        break;

    case "/":
        console.log(`Quotient is: ${a / b}`);
        break;

    case "%":
        console.log(`Remainder is: ${a % b}`);
        break;

    default:
        console.log("Invalid Operation");
}

//2 Check weather number is positive,negative or zero
let checkNum = (num) =>{
    if(num < 0){
        return `${num} is negative`;
    }else if(num > 0){
        return `${num} is positive`;
    }else{
        return `${num} is zero`;
    }
}
console.log(checkNum(-1));

//Find the largest number using ternary operator.
let num1= 30;
let num2 =20;
console.log(num1 > num2? `${num1} is greater than ${num2}`:`${num1} is less than ${num2}`);

//Voting Eligibility
let age= 30;
console.log(age >= 18? "Person is eligible to Vote":"Person is not eligible to vote");

//Pass or fail- Marks>=40 pass else fail
//using---arrow function.
let passOrFail = (marks) => marks>=40? "Pass" : "Failed";
console.log(passOrFail(40));
//using-conditional statements.
let marks = 39;
console.log(marks >= 40? `Student Passed`:`Student failed`);

//Leap year
function leapYear(year){
 return year%400 === 0 || ((year%4 === 0 )&&(year%100 !== 0))?`${year} is a leap year`:`${year} is not a leap year`;
}
console.log(leapYear(1996));
console.log(leapYear(2000));
console.log(leapYear(2002));

//Triangle Check- verify if three sides of a triangle.
function checkTriangle(a,b,c){
    if( a+b > c && a+c > b && c+b > a){
        console.log(`${a} ,${b},${c} are sides of a triangle`);
    }else{
         console.log(`${a} ,${b},${c} are not sides of a triangle`);
    }
}
checkTriangle(10,25,30);

//Greatest of three-Find the largest among three numbers.
function findLargest(a,b,c){
    if(a>=b && a>=c){
        console.log(`${a} is largest`);
    }else if(b>=a && b>=c){
        console.log(`${b} is largest`);
    }else{
        console.log(`${c} is largest`)
    }
}
findLargest(20, 20, 10);
findLargest(10, 35, 20);
findLargest(30, 30, 30);

//Scholarship Eligibility- Attendance  >= 75, Marks >=80, Income<300000.


function scholarshipEligibility() {

    const prompt = require("prompt-sync")();

    let marks = Number(prompt("Enter Marks: "));
    let attendance = Number(prompt("Enter Attendance Percentage: "));
    let income = Number(prompt("Enter Income: "));

    if (marks < 80 && attendance < 75 && income > 300000) {
        console.log("Rejected: Marks, Attendance and Income criteria not satisfied.");
    }
    else if (marks < 80 && attendance < 75) {
        console.log("Rejected: Marks and Attendance criteria not satisfied.");
    }
    else if (marks < 80 && income > 300000) {
        console.log("Rejected: Marks and Income criteria not satisfied.");
    }
    else if (attendance < 75 && income > 300000) {
        console.log("Rejected: Attendance and Income criteria not satisfied.");
    }
    else if (marks < 80) {
        console.log("Rejected: Marks criteria not satisfied.");
    }
    else if (attendance < 75) {
        console.log("Rejected: Attendance criteria not satisfied.");
    }
    else if (income > 300000) {
        console.log("Rejected: Income exceeds the maximum limit.");
    }
    else {
        console.log("Eligible for Scholarship.");
    }
}

scholarshipEligibility();


//Shopping Discount
function finalBill(){
const prompt = require("prompt-sync")();
let Item = prompt("Enter the Item:");
let price = Number(prompt("Enter the Price:"));
let premiumAccountCheck = prompt("Premium Account?Y/N:");
let couponCheck = prompt("Coupon?Y/N:");
let summerDiscount = 0.10;;
let premiumDiscount = 0.12;
let couponDisocunt = 50;
let finalPrice =0;

let priceAfterDiscount = (price,discountVal)=> price - (price* discountVal);

finalPrice = priceAfterDiscount(price,summerDiscount);
if(premiumAccountCheck === 'Y' || premiumAccountCheck === 'y'){
    finalPrice = priceAfterDiscount(finalPrice,premiumDiscount);
    }
if(couponCheck === 'Y' || couponCheck === 'y'){
     finalPrice = finalPrice - couponDisocunt;
    }

console.log(`Item:${Item}`);
console.log(`Price:${price}`);
console.log(`Final Price:${finalPrice}`);

}
finalBill();
/*---Output---
Enter the Item:Clothes
Enter the Price:5000
Premium Account?Y/N:Y
Coupon?Y/N:Y
Item:Clothes
Price:5000
Final Price:3910*/

// Smart Login
function smartLogin(){
    const prompt = require("prompt-sync")();
    const regUserName = "abcd";
    const regPassword = "xyz@123";
    let attempts = 0;
    while(attempts <3){
        let userName = prompt("Username: ");
        let password = prompt("Password: ");
        if(regUserName === userName && regPassword === password){
            console.log("Login successfull");
            break;
        }
        if(regUserName !== userName){
            console.log("User not exist");
        }else{
            console.log("Wrong password");
        }
        attempts++;
    }
    if(attempts >=3){
        console.log("Login failed");
    }

}
smartLogin();
/*--output----
Username: asc
Password: 123
User not exist
Username: abcd
Password: xyz123
Wrong password
Username: abcd
Password: xyz@123
Login successfull*/

//Restaurant Billing

// function restaurantBilling(){
//     const prompt = require("prompt-sync")();
//     let southIndianMeals = 0;
//     let northIndianMeals = 0;
//     let chickenBiriyani = 0;
//     let vegPulao = 0;
//     let grapeJuice = 0;
//     let lassi = 0;
//     let addItem = true;
//     let item;
//     let choice;
//     let itemId;
//     let menu = () => console.log(`
//         ********************Menu********************
//         001 South Indian Meals: 300
//         002 North Indian Meals: 300
//         003 Chicken Biriyani  : 250
//         004 Veg Pulao         : 180
//         005 Grape Juice       : 80
//         006 Lassi             : 80
//         ----------------------------------------------`);
//     menu();

    

//     do{
//         choice = prompt("Add Item:Y/N");
//         if(choice === 'Y'|| choice === 'y'){
//             addItem = true;
//         }else{
//             addItem =false;
//         }
//         if(!addItem){
//             break;
//         }
//         itemId = prompt("Enter the ItemId:");

//         switch(itemId){
//             case "001": southIndianMeals++;
//             case "002": northIndianMeals++;
//             case "003": chickenBiriyani++;
//             case "004": vegPulao++;
//             case "005": grapeJuice++;
//             case "006": lassi++;
//             default   : console.log("Invalid entry");
//         }

//     }while(addItem)

    


    
    

    


