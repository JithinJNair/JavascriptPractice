// //* Object- is a collection of data stored in Key -Value pairs.
// // //~ Syntax-
// //             ObjectName = {
// //                     Key1: Value1,
// //                     Key2: Value2,
// //                     KeyN: ValueN
// //             }

// console.log("----------Print Object---------");
// let studentInfo = {
//         "name" : "Ameya",
//         "age"  : 4,
//         "place" : "Bngalore"
// }

// console.log(studentInfo);

// console.log("----------Access Object items using Key name---------");
// console.log(studentInfo.name);
// console.log(studentInfo.age);
// console.log(studentInfo.place);

// //* Features of Object.
// //& Object is a combination of Key and Value.
// //& Data in Object doesnot have a specific order.
// //& Key in Object is stored as String.

// //^ Create an Employee Object and print data.
// console.log("---------Creating Employee Object---------------");
// let empObj = {
//         eId : 10,
//         eName : "Lionel Messi",
//         eAddress : "Argentina",
//         eSalary : 1200000
// }

// console.log(empObj);
// console.log(empObj.eId);
// console.log(empObj.eName);
// console.log(empObj.eAddress);
// console.log(empObj.eSalary);

// //^ Methods in Objects.

// //^ Object.keys()
// //~  Object.Keys(objectName) - It returns all the Keys present in Object.
// //^ Object.values()
// //~ Object.values(objectName) - It returns all the values present in Object.
// //^ Object.entries()
// //~  Object.entries(objectName) - It returns all the Key value pairs.
// //^ Object.freeze()- Makes the Object Immutable
// //~ Object.freeze(objectName).
// //^ Object.seal()- Makes the Object partially immutable.
// //~ Object.seal(objectName).

// console.log("------Employee Object----------");
// console.log(empObj);
// console.log(Object.keys(empObj));
// console.log(Object.values(empObj));
// console.log(Object.entries(empObj));

// empObj.email = "xyz@gmail.com";
// console.log(empObj);
// delete empObj.email;
// console.log(empObj);

// console.log("---Freeze Object-change id and print----");
// Object.freeze(empObj);
// empObj.eId = 12;
// console.log(empObj); // Object not getting updated because its freezed.

// console.log("---Freeze Object-Add new Key Value pair and print----");
// empObj.eRole = "AI/ML Engineer";
// console.log(empObj); // Object not getting updated because its freezed.

// console.log("---Freeze Object-Delete Salary  and print----");
// delete empObj.eSalary;
// console.log(empObj); // Object not getting updated because its freezed.

// console.log("---Create Object Player-------");

// let player = {
//         pName : "Virat kohli",
//         pRole  : "Batter",
//         pNo    : 18
// }

// console.log(player);

// console.log("-----Partially Freeze- seal player try update everything------");
// Object.seal(player);
// player.pName = "XYZ";
// player.pRole = "Bowler";
// player.pNo = 10
// console.log(player);// All properties gets updated.

// console.log("-----------Try delete a property or add a new property to the Object Player----");
// delete player.pName;
// player.pAge = 32;
// console.log(player);//Once sealed we cant add property or delete property.Only updation is allowed.

// //* Nested Objects
// //^ Object given inside another Object is called as Nested Object.




// // //* Array vs Objects -Important Interview Question.


// let candidate1 = {
//         cName : "Jithin",
//         cStream : "CSE",
//         cSkills : ["HTML", "JavaScript", "CSS", "ReactJS"]
// }

// console.log(candidate1);
// console.log(candidate1.cName);
// console.log(candidate1.cStream);
// console.log(candidate1.cSkills);
// console.log(candidate1.cSkills[0]);

// //& Display Product details

// let product = {
//         pName : "Laptop",
//         pPrice : 350000,
//         pColors : ["Black","Red","Grey","White","Cream"]
// }

// console.log(product.pName);
// console.log(product.pPrice);
// console.log("Available colors Available are:");
// for(let i=0;i< product.pColors.length;i++){
//         console.log(product.pColors[i]);
// }

// //& Display Student Details

// let student = [
//         {
//                 sName   : "John",
//                 sAge    : 35,
//                 sPlace  : "Mumbai"    
//         },
//         {
//                 sName   : "Omar",
//                 sAge    : 30,
//                 sPlace  : "Kochi"    
//         },
//         {
//                 sName   : "Jithin",
//                 sAge    : 35,
//                 sPlace  : "Alappey"    
//         }
// ]

// console.log(student);
// console.log(student[0]);
// console.log("Student 1 Name:"+student[0].sName)
// console.log("Student 1 Age:"+student[0].sAge)
// console.log("Student 1 Place:"+student[0].sPlace)

// for(let i=0;i< student.length;i++){
//         console.log(`Student-${i} Info`);
//         console.log(`Student  Name:${student[i].sName}`)
//         console.log(`Student Age:${student[i].sAge}`)
//         console.log(`Student Place:${student[i].sPlace}`)
//         console.log("------------------------------------")
// }

// //* Method- Is a function that belongs to an Object.
// //& Method is a function that is stored in an Object.

// let student = {
//         greet : function(){
//                 console.log(`Hello All`)
//         }
// }
// student.greet();

// let student2 = {
//         greet : function(name){
//                 console.log(`Hello ${name}`)
//         }
// }
// student2.greet("Jithin")


// let student3= {
//         greet : (name)=>{
//                 console.log(`Hello ${name}`)
//         }
// }
// student3.greet("Jithin")


//& Create an Object methods for each Arithmatic operations.
console.log("--------Object with Arithmetic Operations--------");
let calcObject = {
        add     : (a,b)=>{console.log(`Sum of ${a} and ${b} is ${a+b}`)},
        sub     : (a,b)=>{console.log(`Differrence of ${a} and ${b} is ${a-b}`)},
        div    : (a,b)=>{console.log(`Quotient of ${a}/${b} is ${a/b}`)},
        mul    : (a,b)=>{console.log(`Product of ${a} and ${b} is ${a*b}`)}, 
}

calcObject.add(10,5)
calcObject.sub(10,5)
calcObject.div(10,5)
calcObject.mul(10,5)