//String-Is a collection of Characters enclosed within double quotes,single quoutes or backticks.

let city1 = "Bangalore";
let city2 = 'Cochin';
let city3 = "Chennai";

console.log(typeof city1);
console.log(typeof city2);
console.log(typeof city3);
console.log("=====================");

//Any Numerical value in JS is considered as Number
let age = 25;
let price = 25.50;
console.log(typeof age);
console.log(typeof price);

//Bolean any value that is true /false

let a1 = true;
let a2 = false;

console.log(a1+":"+typeof(a1));
console.log(a2+":"+typeof(a2));
console.log(10 > 5);

//null- intentional absence of value-if their is no data,but we have to give some value.Developer assigns it.
//undefinde- unintentional absence of value.It is not an error.It is a data type.It is assigned by Javascript.
let stock1 = null;
let stock2;
console.log(stock1);
console.log(stock2);

// Bigint -represents the numerical values that exceeds the limit of Numbers-It is not much used in modern applications.
let stock3 = 100n;
let stock4 = 1000n;
console.log(stock3+":"+ typeof(stock3));
console.log(stock4+":"+ typeof(stock4));

//* Symbol gives unique id to a value
let stock5 = Symbol("Arun");
let stock6 = Symbol("Arun");
console.log(stock5 == stock6);// result is false

stock5 = "Arun";
stock6 = "Arun";
console.log(stock5 == stock6);// result is true

//* Type Coercion-Implicit conversion- Process of converting one data type to another by the engine itself.
// String+any other type is String
//number + boolean= number.
//number + undefined= Nan.
//number+ null= number.
/* Be careful not to generalize the rule to every operation. The rule "if one operand is a string, the result is a string" applies specifically to the + operator, because + can mean either addition or string concatenation.

Other operators (-, *, /, %) do not concatenate strings. Instead, they try to convert operands to numbers:

console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log("10" / 2); // 5
console.log("10" + 5); // "105" 

This distinction is another common JavaScript interview topic.*/
let agePerson = 45;//type- number
let name = "Rohit";//type-String
let res = agePerson+name;//type becomes String.here we are not converting res to String.JS Engine does itself.
console.log(res);

let active = true;
res = agePerson+active;
console.log(res);
console.log(typeof(res));// anything that gets added to String is string.If add boolean with number result is number.

let v1 = "10";
let res1 = v1/2;
console.log(res1);
console.log(typeof(res1));



