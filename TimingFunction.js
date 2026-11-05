//* Timing Functions
//* They allows us to execute code after a specific delay or at regular intervalas.
//* They allow us to cancel scheduled executions.

//^ Types of Timing Functions

//^ setTimeOut() : Used to execute code after a specific delay
//~ Syntax: setTimeOut(function,delay)

//^ clearTimOut() : Used to cancel a Time Out before its execution.
//~ Syntax: clearTimeOut(timerId)

//^ setInterval() : used to execute a code at regular Intervals.
//~ Syntax: setInterval(function,delay)

//^ clearInterval() : Used to stop execution of Interval.
//~ Syntax: clearInterval(intervalId)

// console.log("Good Morning")
// setTimeout(() => console.log("Hello GoodAfterNoon"), 3000)
// console.log("Good Evening");

// console.log("Welcome")
// let timer = setTimeout(()=>console.log("Please Wait...."),5000)
// clearTimeout(timer)

// console.log("Welcome")
// let timer = setTimeout(()=>console.log("Please Wait...."),5000)

// setTimeout(()=> {
//     console.log("Dont Wait.Seet has been getting filled.")
//     clearTimeout(timer)
// },2000)

//& Welcome2 students to class..One after 2 seconds and another after4 seconds


// setTimeout(()=> console.log("Hello Welcome Jithin"),2000)
// setTimeout(()=> console.log("Hello Welcome Vidhya"),4000)

//& display Welcome candidate and after 3seconds display Please be seated.
// function display(){
//     console.log("Welcome Candidate");
//     setTimeout(()=> console.log("Please be seated"),3000);
// }
// display();

//& Display numbers from 0-10 with a 2 second gap
// let num=0;
// let count = setInterval(()=>{
//     console.log(num);
//     num++;
//     if(num>10){
//         clearInterval(count);
//     }
// },2000 )

//& Count timer from 10 to 0 and display Submit your papers once timer reaches 0.
// let num =10;
// let count =setInterval(()=>{
//     console.log(num);
//     num--;
//     if(num<0){
//         clearInterval(count);
//         console.log("Please Submit your Paprers")
//     }
// },1000)

//& Display the array elements with a 2second gap
// let cars = ["Tata","Maruthi","Benz","Porsche"]
// let index =0;
// let carDisplay = setInterval(()=>{
//     console.log(cars[index]);
//     index++;
//     if(index>=cars.length){
//         clearInterval(carDisplay);
//     }
// },2000)

//& Display characters in a String with a 2 second gap
// let str = "incredible";
// index = 0;
// let charDisplay = setInterval(()=>{
//     console.log(str.charAt(index));
//     index++;
//     if(index >= str.length){
//         clearInterval(charDisplay);
//     }
// },2000)
