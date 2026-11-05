//Control statements-controls the flow of execution.
//conditional statement- Execute the code based on the evaluation of some conditions.
//if-execute if a condition is true
/*if(condition){
 Block of code
 }*/

 //Even or odd
 let num=10;
 if(num%2 == 0){
    console.log(`${num} is even`);
    console.log(num*num);
 }

 //if-else
     //Even or odd
/*if(condition){
 Block of code-True statements
 }else{
    else block code-false statements.
 }*/

 let num1=10;
 if(num1%2 == 0){
    console.log(`${num1} is even`);
    console.log(num1*num1);
 }else{
    console.log(`${num1} is odd`);
    console.log(num1+num1);
 }

 let age =20;
 if(age >= 18){
    console.log("eleigible to Vote");
 }else{
    console.log("not eligible to vote");
 }

 //if-esle ladder-It executes the code as a chain of if-else statements with muliple conditions.
 /*if(condition1){ 
 code block}else if(condition 2){
 code block
 }else if(condition 3){
 code block}
 .
 .
 .else{
    runs if none of the condition trye};*/

// Switch 

