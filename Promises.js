//* Promise- Promise ia an Object which represents the eventual completion of an asynchrobous task.


//^ Statwe of Promises
//& Pending- It is the initial state when Promise is neither Rejected or nor fulfilled.
//& Rejected: It is the satte when asynchronous operation is rejected or fails to execute.
//& Fulfilled:It is the state when asynchronous operation is fulfilled and executed successfully.

//^ then: Its  a method used to handle Promise when its fullfilled.It will run resolve() is called.
//^ catch: Its a method used to handle Promise when its Rejected.It will run when reject() is called.

// let prom = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let data =false;

//         if(data){
//             res("Data is valid...");
//         }else{
//             rej("Data is invalid...");
//         }
//     },5000);
// })

// console.log(prom);
// prom.then(()=>{
//     console.log("Task successfull");
// });

// prom.catch(()=>{
//     console.log("Task Unsuccessfull");
// });

//^ Create a Promise constructor fr Password matching.Based on the success and rejected state provide then and catch methods also.
// let passProm = new Promise((res,rej)=>{
//     let password = "abc#001J";
//     let userEntry = prompt("Enter password:");

//     if(password === userEntry){
//         res("Password matches");
//     }else{
//         rej("Password doesnot match");
//     }
// })

// passProm.then(()=>{
//     console.log("Password Match successfull");
// })
// passProm.catch(()=>{
//     console.log("Password match unsuccessfull");
// })

//* Promise Chaining-Linking multiple then methods together ,so they run one after another.
//* Each then methods wait for the previous one to finish.

let promChain = new Promise((res,rej)=>{
    let a=101;
    if(a<=100){
        res(5);
    }else{
        rej(0);
    }
})

promChain.then((num)=>{
    return num+5;
}).then((num)=>{
    return num*2;
}).then((num)=>{
    console.log("number is:"+num);
}).catch(()=>{
    console.log("Wrong Entry");
})
