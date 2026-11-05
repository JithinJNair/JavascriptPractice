//* Rest Operator- Collect multiple values into single Object or Array.

//^ Packing the Values-

// let numArray = [10,20,30,40,50];
// let [num1, num2, ...otherNumbers] = numArray;
// console.log(num1)
// console.log(num2)
// console.log(otherNumbers)//It is used to collect the remaining values into one variable-30,40,50

// function numDisplay(a,b,c,...numbers){
//     for(let i=0;i<numbers.length;i++){
//         console.log(numbers[i]+" ");
//     }
// }

// numDisplay(10,20,30,40,50,60,70,80,90,100);

// //& Create Function which has 3 arguments-name,age,skills.All arguments should be displayed.skills should be displayed using rest operator.

// function empDataDisplay(name,age, ...skills){
//     console.log(`Name:${name}`);
//     console.log(`Age:${age}`);
//     console.log("Skills")
//     for(let i=0;i<skills.length;i++){
//         console.log(skills[i]+" ");
//     }
// }

// empDataDisplay("Jithin",35,"Java","Selenium","Cucumber","RestAssured","jenkins","CI/CD");

//* Spread Operator- Unpacks the value
//& its used to spread or unpack elements of Arrays and Objects.
// let nums = [50,60,70,80,90,100]
// let newNums = [10,20,30,40,...nums]
// console.log(nums);
// console.log(newNums)

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]
// let skills = [...arr1, ...arr2]
// console.log(skills)

// let player = {
//     name : "Jithin",
//     age : 35,
//     JNo : 10
// }

// let {name, ...rest} = player;
// console.log(name);
// console.log(rest.JNo);
// console.log(rest)


//& Use Function- find sum of numbers using Rest Operator
// function sumNum(...numbers){
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//         total = total+numbers[i];
//     }

//     console.log(`Total is :${total}`)
// }

// sumNum(10,20,30,45,50)

//& Merge 2 arrays using SPread and display values
// let team1 = ["Kohli","Rohit","Sanju"]
// let team2 = ["Bumrah","Varun","Bhuvaneshwar"]

// function display(...players){
//     for(let i=0;i<players.length;i++){
//         console.log(players[i]);
//     }
// }


// display(...team1,...team2);

//& Using SPREAD add location and Role details in new Objcet.
let obj = {
    eId: 101,
    eName: "Jithin",
    eSalary: 2000000
}

let newObj = {
    ...obj,
    eRole:"QA",
    eLocation:"Bangalore"
}

console.log(newObj)