//* Functions
//Differrent types of Functions-Named functions,Anonymous functions,Arrow functions,Callback function,Higher Order function.

// const { useEffectEvent } = require("react");


//*Anonymous Function- A function that doesnt have a name.
//It is usually assigned to a variable or executed immediately.
//This function is used mostly when the function has to be executed immediately.
//Two ways- IIFE(Immediately invoke function expression) and Fucntion Expression(Normal function expression-Storing a fucntion inside a variable).

//*IIFE-Entire function is written in a paranthesis and executed immediately.
//We cnat call IIFE functions.
//They are used in events and timing functions.
//eg- When we open a webpage,immediately a message should appear.So the function should get executed without a trigger.



//*Function expression- stores function in a variable.
//-A function expression and a function declaration both create functions.
//-The main differrence is that a function expression treats the function as a value.
//-Since functions are first class citizens in Javascript,they can be stored in variables,passed as arguments,returned from other functions,
//--and assigned dynamically.
//-They are used especially for callbacks,event handlers,and asynchronous programming.


//*Arrow functions.
//It came with ES6 version of JavaScript.
//It write function using fat arrow-  =>.
//It has a shorter syntax and behaves like an anonymous function.
//It doesnot uses function keyword.
//* Features of arrow function.
//^ If there is only one parameter,paranthesis can be avoided.
//^ If there is only one statement in the function which is a return statement,return keyword can be avoided.
//^ If there is only one statement in the entire function,braces can be avoided.

//* Callback function-
//^A callback function is a function that is passed as an argument to another function so that the receiving function can call it later. 
//^ This makes the code flexible because the same function can perform different operations depending on which callback is passed.


//*Higher Order function
//^ A function that accepts another function as an argument.

console.log("---------IIFE--------");
(
    function(name){
        console.log("name:"+name);
    }
)("Jithin")
console.log("---------IIFE with return statement--------");

(
    function(name){
        return 4+5;
    }
)()

console.log("---------Execute IIFE with return statement--------");
console.log(
    (
    function(name){
        return 4+5;
    }
)()
)

//Function expression- stores function in a variable.
//-A function expression and a function declaration both create functions.
//-The main differrence is that a function expression treats the function as a value.
//-Since functions are first class citizens in Javascript,they can be stored in variables,passed as arguments,returned from other functions,
//--and assigned dynamically.
//-They are used especially for callbacks,event handlers,and asynchronous programming.
console.log("--------Function Expression-Stores function in a variable-----");
let voteCheck = function(age, name){
    if(age >= 18){
        console.log(name+" eleigible to vote");
    }else{
        console.log(name+" not eleigible to vote");
    }
}
voteCheck(20, "Johnson");
voteCheck(16, "Jake");

//Create an anonymous function to display the Job role based on the salary.
//Parameters-(name,salary) salary<20-Intern , 20<salary<30 - Junior developer, >30 senior developer.
console.log("-------------Name & Salary-----------")

let checkJobRole = function (name, salary){
if (salary < 20000) {
    console.log(name + " is an Intern");
} else if (salary >= 20000 && salary < 30000) {
    console.log(name + " is a Junior Developer");
} else if (salary >= 30000) {
    console.log(name + " is a Senior Developer");
} else {
    console.log("Invalid Data");
}
}
checkJobRole("Suresh",25000);

//*Arrow functions.
//It came with ES6 version of JavaScript.
//It write function using fat arrow-  =>.
//It has a shorter syntax and behaves like an anonymous function.
//It doesnot uses function keyword.

let sum = (a,b)=>{ console.log(`Sum is:${a+b}`)}
sum(10,20);

//* Features of arrow function.
//^ If there is only one parameter,paranthesis can be avoided.
//^ If there is only one statement in the function which is a return statement,return keyword can be avoided.
//^ If there is only one statement in the entire function,braces can be avoided.
console.log("------------Only one Parameter----------")
let greet = name => {
    console.log(`Welcome to the class:${name}`)
}
greet("Jithin");

console.log("------------Only one Parameter and one statement and avoiding curly braces----------");

let greet1 = name1 => console.log(`Welcome to the class ${name1}`);
greet("Jithin");

console.log("------------Multiple Parameters----------")
let greet2 = (name2,className) => console.log(`${name2} Welcome to the class ${className}`);
greet2("Jithin",10);

//^ If there is only one parameter,paranthesis can be avoided.
let greetA = greet =>{return `Hello ${greet}`};
console.log(greetA("JavaScript"));

//^ If there is only one statement in the entire function,braces can be avoided.
let greetB= greet => console.log(`${greet}`);
greetB("Hello Playwright");

//^ If there is only one statement in the function which is a return statement,return keyword can be avoided.
let greetC= greet => `Hello ${greet}`;
console.log(greetC("TypeScript"));

//^ Odd or even using arrow function
console.log("-------Odd or even using arrow function---------");
let oddOrEven = num => num%2 === 0? `${num} is even`:`${num} is odd`;
console.log(oddOrEven(5));

//^Arrow function to check type of argument.
console.log("----------Arrow function to check type of argument.----------------");
let typeCheck = data =>{
    if(typeof(data) === "string"){
        console.log(`${data} is of String type`);
    }else  if(typeof(data) === "number"){
        console.log(`${data} is of Number type`);
    }else if(typeof(data) === "boolean"){
        console.log(`${data} is of boolean type`);
    }else{
        console.log(`${data} is of Another data type`);
    }
}
typeCheck(true);
typeCheck(1);
typeCheck(false);
typeCheck("abcd");
typeCheck(null);

//^ Arrow function to check the greatest number
console.log("----------------Arrow function to check the greatest number");
let greatestNum = (num1,num2,num3) =>{

    if(num1 >= num2 && num1>=num3){
        console.log(`${num1} is greatest`);
    }else  if(num2 >= num1 && num2>=num3){
        console.log(`${num2} is greatest`);
    }else{
        console.log(`${num3} is greatest`);
    }

}
greatestNum(1,20,5);
greatestNum(1,20,-5);
greatestNum(100,20,5);

//* Callback function-
//^A callback function is a function that is passed as an argument to another function so that the receiving function can call it later. 
//^ This makes the code flexible because the same function can perform different operations depending on which callback is passed.


//*Higher Order function
//^ A function that accepts another function as an argument.

// Create a greeting function using call back and higher order function.
console.log("----------greeting function using call back and higher order function--------------");
function greetPerson(name){
    console.log(`Hello ${name}`);//* greet is the call back function-It is passed as an argument in display()
}

function display(hello){//* display function is higher order function.It is accepting greet as argument.
    hello("Maxwell");
}

display(greetPerson);

console.log("----------greeting function with return using call back and higher order function--------------");
function greetPerson(name){
    return`Hello ${name}`;
}

function display(hello,person){
    console.log(`message send by ${person}`);
    console.log(hello("Maxwell"));
}

display(greetPerson,"David");
console.log("---------------------------------------------------------");
// write differrent greet function for morning afternoon evening and night.pass them as call back function to HOF.
console.log("--------------Differrent greetings----------");
function greetMorning(name){
    return`Hello good-morning ${name}`;
}
function greetAfternoon(name){
    return`Hello good-afternoon ${name}`;
}
function greetEvening(name){
    return`Hello good-evening ${name}`;
}
function greetNight(name){
    return`Hello good-night ${name}`;
}

function greetSomeOne(greet1,greet2,greet3,greet4, person){
    console.log(greet1(person));
    console.log(greet2(person));
    console.log(greet2(person));
    console.log(greet4(person));
}

greetSomeOne(greetMorning,greetAfternoon,greetEvening,greetNight,"Jithin");

//Create a CB  and HOF to add 2 numbers and display the result.
console.log("-------add Nums and display result using CB and HOF------------");
function addNums(num1,num2){
    return num1+num2;
}

function sumOfNums(sum,num1,num2){
    console.log(sum(num1,num2))
}
sumOfNums(addNums,10,20);

//Vote eligibility using 2 CB and One HOF.
console.log("----Vote eligibility-------------");
function eligibleToVote(name){
    console.log(`${name} is eligible to vote`);
}

function notEligibleToVote(name){
    console.log(`${name} not eleigible to vote`)
}

function eligibleOrNot(fun1,fun2,name,age){
    if(age>=18?fun1(name):fun2(name));
}

eligibleOrNot(eligibleToVote,notEligibleToVote,"Jithin",18);
eligibleOrNot(eligibleToVote,notEligibleToVote,"Vidhya",16);
eligibleOrNot(eligibleToVote,notEligibleToVote,"Sajin",31);
eligibleOrNot(eligibleToVote,notEligibleToVote,"Vishnu",30);
