//* Destructuring- I Allows us to extract Values and store them in Variables.

//^ Array Destructuring- Extracting Values from Array
//~ Syntax-   let [var1,var2,var3....,varN] = arrayName;
console.log("-------Array Destructuring---------");
let colors = ['Violet','Indigo','Yellow','Orange','Red']
// let [col1,col2,col3,col4,col5] = colors;
// console.log(col1)
// console.log(col2)
// console.log(col3)
// console.log(col4)
// console.log(col5)

// //& But wht if I dont want Yello and Orange?
// //~ let [ var1,var2,,,var5]= colors

// let [col1,col2, , ,col5] = colors;
// console.log(col1)
// console.log(col2)
// console.log(col5)

// //^ Object Destructuring - Extracting values from Object.

// console.log("-------Object Destructuring---------");
// let student = {
//         name : "Jithin",
//         age : 35,
//         place : "Bnagalore"
// }

// let {name, age, place} = student;
// console.log(name);
// console.log(age);
// console.log(place);

// let {name:sName, age:sAge, place:sPlace} = student;
// console.log(sName);
// console.log(sAge);
// console.log(sPlace);

// //^ Swap the values using Destructuring
// console.log("--Swap using Destructuring-----")
// let a = 10;
// let b = 20;
// console.log(a);
// console.log(b);
// [a, b ] = [b, a];
// console.log(a);
// console.log(b);

// //^ Destructuring in Nested Array
// let cities = ["Kochi","Trivandrum",["Bnaglaore","Chennai"]]
// let [city1, city2 , [city3,city4]] = cities
// console.log(city1)
// console.log(city2)
// console.log(city3)
// console.log(city4)

// //^ Destructuring Nested Objects
// console.log("--------Destructuring Nested Object----------")
// let empData = {
//         eName       :   "Jithin",
//         eId         :   35,
//         eSalary     :   350000,
//         eAddress    :   {
//                 eState  :   "Kerala",
//                 eCity   :   "Trivandrum"
//         }

// }

// console.log(empData)

// let {eName, eId, eSalary, eAddress:{eState, eCity}} = empData;

// console.log(eName)
// console.log(eId)
// console.log(eSalary)
// console.log(eState)
// console.log(eCity)

// //^ Destructure Object by value
// console.log("---------Destructure by value----------")
// let {eName:empname, eId:id, eSalary:salary, eAddress:{eState:state, eCity:city}} = empData;
// console.log(empname)
// console.log(id)
// console.log(salary)
// console.log(state)
// console.log(city)

// let studentInfo = [
//         {
//                 name : "Jithin",
//                 age : 35,
//                 place : "Bangalore"

//         },
//         {
//                 name : "Vidhya",
//                 age : 33,
//                 place : "Bangalore"

//         }

// ]

// let [
//     {name: name1, age: age1, place: place1},
//     {name: name2, age: age2, place: place2}
// ] = studentInfo;

// console.log("Student 1 Details:")
// console.log(name1);
// console.log(age1);
// console.log(place1);

// console.log("Student 2 Details:")
// console.log(name2);
// console.log(age2);
// console.log(place2);

// //& Destructuring Array Inside Object
// let candidateInfo = {
//         cName : "Jithin",
//         cAge  : 35,
//         cSkills : ["Java", "Selenium", "RestAssured", "Cucumber BDD"]
// }

// let {cName:name, cAge:age, cSkills:[skill1,skill2,skill3,skill4]} = candidateInfo;
// console.log(`Name:${name}`)
// console.log(`Age:${age}`)
// console.log(`Skills:${skill1},${skill2},${skill3},${skill4}`)
