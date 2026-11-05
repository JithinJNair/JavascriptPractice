//* Arrays-Collection of homogeneous or hetrogeneous data.
//& Homogeneous- data of similar types.[10,20,30,40]
//& Hetrogeneous- data of differrent types.-[10,20,true,"name",60]

//^ Creation of Array.
let fruits = ["Apple", "Mango", "Grapes", "Gauva"]
console.log(fruits);

//^ Accessing array elements
//& using index vale-Index of Array starts from 0.
console.log(fruits[0]);

//^ Updating the Array Value.
console.log(fruits);
fruits[2] = "Orange";
console.log(fruits);
fruits[4] = "Papaya";
console.log(fruits);

//^ Display Array Values
console.log(fruits[0]);
console.log(fruits);
//& display elements using loops
console.log("--------display elements using loops--------");
for(let i=0;i<=fruits.length-1;i++){    //! fruits.length gives count of elements.Doesnt have anything to do with index.It gives exact count.
    console.log(fruits[i]);
}

//& display elements and index using loops
console.log("--------display elements and index using loops--------");
for(let i=0;i<=fruits.length-1;i++){
    console.log(`Fruit ${i}:${fruits[i]}`);
}

//& Print numbers that are divisible by 3.
console.log("--------num divisible by 3--------");
let num = [25,36,42,42,58,75,80]
for(let i=0;i<=num.length-1;i++){
    if(num[i]%3 == 0){
        console.log(num[i]);
    }
}

//* Array Methods
//^ push - Adds element to the end of an Array
    //~ array.push(ele1,ele2....eleN)
//^ pop - Removes element from end 
    //~ array.pop(ele)
//^ shift() - Removes first element from start of array
    //~ array.shift();
//^ unshift()- Add elements to the starting of array
    //~ array.unshift(ele1,ele2...eleN)

//^ slice()- extract a section of array and returns new one.
    //~ array.slice(start,end)
//^ splice()- removes and replace existing elements and add new elements to array
    //~ array.splice(start,deleteCount,element1,element2,...,elementN)

//^ concat()- Merges two or more array and returns new array
    //~ let arrNew = arr1.concat(aar2,arr3)
//^ reverse()-reverses the order of array elements
    //~ arr.reverse()

console.log("---------push pop shift unshift methods of Array---------");
console.log(fruits);
fruits.push("cherry");
console.log(`push add elemnt at end :${fruits}`);
fruits.push("jackfruit","plum");
console.log(`push can add multiple elements at end: ${fruits}`)
fruits.pop();
console.log(`pop removes elemnt from end: ${fruits}`);
fruits.shift();
console.log(`shift removes element from starting: ${fruits}`);
fruits.unshift("plum","Apple");
console.log(`unshift adds multiple elements at start of array: ${fruits}`);

console.log("----------------slice------------");
let states = ["TN","KAR","KER","MAH","UP"];
console.log(states);
let statesInSouthPart = states.slice(0,3);
console.log(states);
console.log(statesInSouthPart) 

console.log("-------------splice---------------");
console.log(states);
statesInSouthPart = states.splice(0,3,"MP","HP","BIHAR");
console.log(states);
console.log(statesInSouthPart);
states.splice(2,2);
console.log(states);

//& Remove even numbers from Array
console.log("-------------remove even numbers---------------");
let numArr = [15,22,33,48,54,57,68,71,84]
console.log(numArr);
for(let i=0; i<=numArr.length-1;i++){
    if(numArr[i]%2 == 0){
        numArr.splice(i,1);
        i--;
    }
    
}
console.log(numArr);

//& Remove occurrences of same value
console.log("----------occurrences of given value---------");
numArr = [10,34,23,10,10,56,343,10,67]
console.log(numArr);
let targetNum = 10;
for(let i=0; i<=numArr.length-1;i++){
    if(numArr[i] === targetNum){
        numArr.splice(i,1);
        i--;
    }
    
}
console.log(numArr);
//& Remove duplicated values
console.log("----------remove duplicated value---------");
numArr = [10,34,23,10,10,56,343,10,67]
console.log(numArr);
for(let i=0;i<=numArr.length-1;i++){
for(let j=i+1; j<=numArr.length-1;j++){
    if(numArr[i] == numArr[j]){
        numArr.splice(j,1);
        j--;
    }
}
    
}
console.log(numArr);

//^ Concatenate 
console.log("----concatenate arrays----------");
let city1 = ["Kochi","Alappuzha"]
let city2 = ["Bangalore"]
let city3 = ["Chennai, Delhi"]
let allCities = city1.concat(city2,city3)
console.log(city1);
console.log(city2);
console.log(city3);
console.log(allCities);

//^ Join Array elements
console.log("---------Join Array elements------");
let nameChars = ["J","I","T","H","I","N"]
console.log(nameChars.join(" "));
console.log(nameChars.join("_"));
console.log(nameChars.join(""));

//^ reverse Array elements
console.log("---------Reverse Array elements------");
nameChars = ["J","I","T","H","I","N"]
console.log(nameChars);
console.log(nameChars.reverse());
console.log(nameChars);