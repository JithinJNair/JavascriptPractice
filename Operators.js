//Operators are predefined symbols that are used to perform a specific task
//Arithmetic Opertaors-Used to perform arithmetic operations.-+,-,*,/,%
//Relational /conditional/comparison operators-compares the values of datatypes-<,>,<=,>=,==,===,!=
//Logical operators- &&,||,!
//Assignment operators-used to assign the values-  =,++,--,+=,-=,*=,/=
//Ternary operator- Its the shorthand to write if else logic.

let n1 =20;
let n2 =2;

console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);
console.log("------------------");

console.log(n1>n2);//true
console.log(n1<n2);//true
console.log(n1<=n2);//false
console.log(n1>=n2);//true
console.log("------------------");

//* == vs ====
//==  loose equality check- It check value.Doesnot check datatype.
//Falsy values-false,0,0n,-0,"".null,undefined,nan 

console.log(10 == 10);//true
console.log(10 == "10");//true
console.log(true == "true");//"true" gets converted to Nan due to type coersion.hence //false.
console.log(0 == false);//true bcs 0 is a falsy value.
console.log(null == true);//false--null is not getting coersed.
console.log(null == false);//false -System cannot convert null to false.ie-0.Hence result as false.(bcs null cannot be coersed to Not having a value.).
console.log("------------------");
//=== - it is strict equality check.It will compare the values along with the data types.
console.log(1 == "1");//true
console.log(1 === "1");//false
console.log(false == 0)//true
console.log(false === 0)//false Even the values are same,datatypes are differrent.
console.log(-0 == "false");
console.log(-0 === "false");
console.log( "" == "false");
console.log("" === "false");
console.log(false == "false");
console.log(false === "false");
console.log(undefined == "false");
console.log(undefined === "false");
console.log(NaN =="false");
console.log(NaN=== "false");
console.log("------------------");
console.log(-0 == false);//ture
console.log(-0 === false);//false
console.log(0 == false);//true
console.log(0 === false);//false
console.log("" == false);//true
console.log("" === false);//false
console.log(undefined == false);//false
console.log(undefined === false);//false
console.log(NaN == false);//false
console.log(NaN === false);//false
console.log("------------------");

//*condition operators
// age- 25-30
//&&- and operator : both the condition should be satisfied
let age =27;
console.log(25<=age && age<=30);//true
console.log(25<=age && age>=30);//false
console.log(25>=age && age<=30);//false
console.log(25>=age && age>=30);//false
//|| or operator-atleast one condition should be satisfied.
console.log(25<=age || age<=30);//true
console.log(25<=age || age>=30);//true
console.log(25>=age || age<=30);//true
console.log(25>=age || age>=30);//false
//!
let a =true;
let b=false;
console.log(!a);//false
console.log(!b);//true
console.log("-----------------------");

//Assignment operators
let n3 = 10;
n3++;
console.log(n3);//11
n3--;
console.log(n3);//10
n3 += 5;
console.log(n3);//15
n3 -= 5;
console.log(n3);//10

let n4=20;
let c =n4++;//first uses the value and then increments.(Post increment).
console.log(c);//20
console.log(n4);//21

let n5 =20;
let d= ++n5;//first increments the value and then uses it.(Pre increment).
console.log(d);//21
console.log(n5);//21

//Ternary operatior
console.log(age>=30? "Person is Old":"Person is Young");
