// Display cube if even -Display square if its odd
// let num = 3;
// if(num%2 == 0){
//     console.log(num*num*num);
// }else{
//     console.log(num*num);
// }

//Marks-Pass Failure status.
//50-41 - A 31-40 B 21-30 C 11-20 D 1-10 E(failed)
// let marks = 40;

// if (marks <= 50 && marks > 40) {
//     console.log("Grade A - Passed");
// } else if (marks <= 40 && marks > 30) {
//     console.log("Grade B - Passed");
// } else if (marks <= 30 && marks > 20) {
//     console.log("Grade C - Passed");
// } else if (marks <= 20 && marks > 10) {
//     console.log("Grade D - Passed");
// } else {
//     console.log("Grade E - Failed");
// }

//Claculator using switch

let a = 10;
let b = 2;
let operation = "/";
switch(operation){
    case "+":
        console.log("result is:"+ a+b);
        break;
    case "-":
        console.log("result is:"+ a-b);
        break;
    case "*":
        console.log("result is:"+ a*b);
        break;
    case "/":
        console.log("result is:"+ a/b);
        break;
    case "%":
        console.log("result is:"+ a%b);
        break;
    default:
        console.log("Invalid operation");
}


//Name ,Salry and role using switch
let name = "Suresh";
let salary = 25000;

switch (true) {
    case salary < 20000:
        console.log(name + " is an Intern");
        break;

    case salary >= 20000 && salary < 30000:
        console.log(name + " is a Junior Developer");
        break;

    case salary >= 30000:
        console.log(name + " is a Senior Developer");
        break;

    default:
        console.log("Invalid Data");
}
//