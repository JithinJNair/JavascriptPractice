//* Asynchronous Javascript-It allows code to execute without waiting for long running operations to complete,enabling the non-blocking behaviour.

//^ async: A function that automatically returns a promise.
//^ await: It pauses the execution of async function untill the promiswe is rejected or fulfilled.
//^ fetch: It is ia browser built in Interface that is used to fetch or send data.It is the entrypoint to backend.(eg:We give Urls to server in it).



// async function users(){
//     console.log("Fetching response");
//     let response = await fetch("https://dummyjson.com/users");
//     console.log(response);
//     console.log("response generated");
// }

// console.log("check1");
// users();
// console.log("check2");


//* Fetch API
//& Fetch API: Modern way provided by the browser to fetch data from the resources.
//& It allows to make network requests and retrieve data.
//& Fetch API will give a promise based response.
//& async and await will be used to handle that promise.

//* JSON: Javascript Object Notation.
//& It is a data exchange format used to exchange or store data between systems.

//* JSON Methods:
//^JSON.parse()- converts JSON string into JSON object.
//^JSON.stringify() - It converts Java Script Object into JSON string.

// async function users(){
//     console.log("Fetching response");
//     let response = await fetch("https://dummyjson.com/users");
//     console.log(response);
//     console.log("------------------------------------------------------------");
//     let data = await response.json();
//     console.log(data);
//     // let newData = JSON.stringify(data);
//     // console.log(newData);
//     // let parseData = JSON.parse(newData);
//     // console.log(parseData);
// }

// users();


// let student = {
//     name : "Jithin",
//     course : "Palywright"
// }

// console.log(student);
// console.log(typeof(student));

// let jsonData = JSON.stringify(student);
// console.log(jsonData);
// console.log(typeof(jsonData));

// let studentObj = JSON.parse(jsonData);
// console.log(studentObj);
// console.log(typeof(studentObj));


async function users(){
    console.log("Fetching response");
    let response = await fetch("https://dummyjson.com/users");
    console.log(response);
    console.log(typeof(response));
    console.log("response generated");
}

console.log("check1");
users();
console.log("check2");



