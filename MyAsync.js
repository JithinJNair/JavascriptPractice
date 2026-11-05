//^ Step 1 — Normal synchronous function

//Start with something simple:

// function getUsers() {
//     let users = ["Jithin", "Rahul", "Anu"];
//     return users;
// }

// let result = getUsers();

// console.log(result);
// console.log("Hello");
/*output
  [ 'Jithin', 'Rahul', 'Anu' ] 
  Hello*/

//^ Step 2 — Introduce a task that takes time

//& Now imagine getUsers() doesn't create the users itself.It needs to get them from a server:

/*Your JavaScript
      ↓
"Give me users"
      ↓
    Server
      ↓
   processing...
      ↓
["Jithin", "Rahul", "Anu"]

The server might take:

100 ms
500 ms
2 seconds
10 seconds

You don't know.

This is where the problem begins.

For learning purposes, setTimeout is actually excellent because it simulates the server taking time.*/

//^ Step 3 — See the problem WITHOUT Promise


// function getUsers() {
//     setTimeout(() => {
//         let users = ["Jithin", "Rahul", "Anu"];
//         return users;}, 3000);
// }
// let result = getUsers();
// console.log(result);

/*What do you expect?

You might expect:["Jithin", "Rahul", "Anu"]
But you'll get:undefined*/

//^ Step 4 — Why is it undefined?


// function getUsers() {
// setTimeout(() => {
//     return ["Jithin", "Rahul", "Anu"];
//     }, 3000);
// }

/*There are actually two functions here.
Outer function:

function getUsers() {
    // ...
}
Callback function:

() => {
    return ["Jithin", "Rahul", "Anu"];
}

When you do:

let result = getUsers();

JavaScript calls getUsers().But getUsers() schedules something for later and then finishes immediately.It doesn't return anything.

Therefore:result = undefined;
Three seconds later, the callback executes.But it's too late.*/

//^ Step 5 — First solution: callback

//&Before Promise, JavaScript commonly solved this using callbacks.Instead of trying to return the data:

// function getUsers(callback) {
//     setTimeout(() => {
//         let users = ["Jithin", "Rahul", "Anu"];
//         callback(users);
//     }, 3000);
// }
// function displayUsers(data) {
//     console.log(data);
// }

// getUsers(displayUsers);
// console.log("Hello");

/*output
Hello

// after 3 seconds
["Jithin", "Rahul", "Anu"]*/

/*After 3 seconds:

["Jithin", "Rahul", "Anu"]

Problem solved!

We didn't need Promise yet.The idea is:Don't ask getUsers():"Return the data now."Instead tell getUsers():"When you eventually get the data,
call THIS function."

That's a callback.*/

//^Step 6 — So why was Promise invented?

/*One callback isn't terrible.

But imagine this:

Get user
   ↓
Get user's orders
   ↓
Get order details
   ↓
Process payment
   ↓
Send confirmation

With callbacks, you can end up with:

getUser((user) => {
    getOrders(user, (orders) => {
        getOrderDetails(orders, (details) => {
            processPayment(details, (payment) => {
                sendConfirmation(payment, (result) => {
                     console.log(result);
                    });
                });
             });
         });
     });


This is the famous callback hell / deeply nested callback problem.
Error handling and sequencing also become harder.
Now we finally have a reason to learn Promise*/

//^ Step 7 — Promise

/*A Promise gives us an object representing:"I don't have the value yet, but I promise I'll give you a result later."

For example:

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = ["Jithin", "Rahul", "Anu"];
            resolve(users);
        }, 3000);
    });
}

Notice something important.

Previously:let result = getUsers();
console.log(result);

gave:undefined

Now:
let result = getUsers();
console.log(result);
gives you a Promise.

Conceptually:Promise { pending }

Meaning:"The result isn't available yet." */

//^ Step 8 — .then()

/* Now you tell the Promise:

When you eventually get the value, give it to me.

getUsers().then((users) => {
    console.log(users);
});

After 3 seconds:["Jithin", "Rahul", "Anu"]

So:

getUsers()
    ↓
Promise
    ↓
pending...
    ↓
users become available
    ↓
resolve(users)
    ↓
.then()
    ↓
console.log(users)

Now you understand the main problem Promise solves:How do I represent and work with a value that isn't available yet?*/

//^ Step 9 — Then why async/await?

/*Promise solved the problem.

But Promise chains can still become harder to read:

getUser()
    .then(user => getOrders(user))
    .then(orders => getPayment(orders))
    .then(payment => sendEmail(payment))
    .then(result => console.log(result))
    .catch(error => console.log(error));

This isn't terrible.

But JavaScript introduced async/await to let us work with Promises using code that looks more like normal synchronous code.

async function process() {


    let user = await getUser();


    let orders = await getOrders(user);


    let payment = await getPayment(orders);


    let result = await sendEmail(payment);


    console.log(result);
}

Much easier to follow:

get user
   ↓
wait
   ↓
get orders
   ↓
wait
   ↓
get payment
   ↓
wait
   ↓
send email

But underneath, these are still Promises.That's extremely important.await isn't replacing Promises.It's a nicer way of consuming Promises.*/

// console.log("-----function getUser-----------------")
// function getUser(){
//     setTimeout(()=>{
//         let users = ['Jithin','Vidhya']
//         return users
//     },3000);
// }

// let result = getUser();
// console.log(result);
// console.log("Hello");
// /*
// undefined
// Hello*/

// console.log("-----function getUser2-----------------")
// function displayUsers(users){
//     console.log(users);
// }
// function getUser2(callback){
//     setTimeout(()=>{
//         let users = ['Jithin','Vidhya',"Sajin"]
//         callback(users)
//     },3000);
// }

// let result2 = getUser2(displayUsers);
//    console.log(result2)
// console.log("Hello");
// /*
// undefined
// Hello
// [ 'Jithin', 'Vidhya', 'Sajin' ]*/

// console.log("----- Callback Example -----");

// // 1. Get users asynchronously
// function getUsers(callback) {
//     setTimeout(() => {

//         let users = [
//             { name: "Jithin", orderId: "001", orderStatus: "Delivered" },
//             { name: "Vidhya", orderId: "002", orderStatus: "Packed" },
//             { name: "Sajin", orderId: "003", orderStatus: "In Transit" }
//         ];

//         console.log("Users received");

//         callback(users);

//     }, 3000);
// }


// // 2. Get order ID asynchronously
// function getOrderId(users, name, callback) {
//     setTimeout(() => {

//         let orderId = null;

//         for (let i = 0; i < users.length; i++) {
//             if (users[i].name === name) {
//                 orderId = users[i].orderId;
//             }
//         }

//         console.log("Order ID received:", orderId);

//         callback(orderId);

//     }, 2000);
// }


// // 3. Get order status asynchronously
// function getOrderStatus(users, orderId, callback) {
//     setTimeout(() => {

//         let orderStatus = null;

//         for (let i = 0; i < users.length; i++) {
//             if (users[i].orderId === orderId) {
//                 orderStatus = users[i].orderStatus;
//             }
//         }

//         console.log("Order status received:", orderStatus);

//         callback(orderStatus);

//     }, 2000);
// }


// // Start the process
// getUsers(function (users) {

//     getOrderId(users, "Vidhya", function (orderId) {

//         getOrderStatus(users, orderId, function (status) {

//             console.log("Final Result:");
//             console.log("Name: Vidhya");
//             console.log("Order ID:", orderId);
//             console.log("Order Status:", status);

//         });

//     });

// });

// console.log("Hello");

/*
Yes — **that's essentially the motivation for Promises.** And “tedious” is a good way to describe part of it.

Callbacks solved the first problem:

> **“My result comes later. How do I receive it and continue working with it?”**

Callbacks say:

```javascript
getUsers(function(users) {

    // users are available here

});
```

But when the **next operation depends on that result**, and the next one depends on *that* result:

```text
Get users
    ↓
need users to get orderId
    ↓
need orderId to get status
    ↓
need status to do something else
```

callbacks lead to:

```javascript
getUsers(function(users) {

    getOrderId(users, "Vidhya", function(orderId) {

        getOrderStatus(users, orderId, function(status) {

            console.log(status);

        });

    });

});
```

The code works, but notice two things.

**First, the actual sequence is simple:**

```text
getUsers
   ↓
getOrderId
   ↓
getOrderStatus
   ↓
print
```

**But the code doesn't look simple.** It keeps nesting:

```text
getUsers(
    callback {
        getOrderId(
            callback {
                getOrderStatus(
                    callback {
                        ...
                    }
                )
            }
        )
    }
)
```

That's one of the big problems Promises improve.

There's another important problem too: **error handling**.

Imagine any one of these can fail:

```text
getUsers        ❌ server unavailable
    ↓
getOrderId      ❌ order doesn't exist
    ↓
getOrderStatus  ❌ database error
```

With traditional callbacks, you need to deal with errors at each stage as well, which can make the structure even more cumbersome.

So the progression you're learning is:

```text
Asynchronous operation
        ↓
"I can't return the result normally
 because it arrives later."
        ↓
     CALLBACK
        ↓
"When finished, call this function
 and give it the result."
        ↓
       Works!
        ↓
But multiple dependent async operations
cause nested callbacks + awkward error handling
        ↓
   CALLBACK HELL
        ↓
     PROMISES
```

One small correction that's important for your notes:

**Promises did not make asynchronous operations themselves easier/faster.** The server still takes however long it takes.

Promises give JavaScript a **better structured way to represent and work with a value that will become available in the future**.

That's the concept you're ready to move into now.

Callback style:"When finished, call this function."

Promise style:"Give me an object representing the future result,
and I'll attach what should happen next.*/
