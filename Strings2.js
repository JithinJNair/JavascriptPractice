
//* //String-Is a collection of Characters enclosed within double quotes,single quoutes or backticks.
//^ In string we can access characters using index value
let str1 ="Welcome"
console.log(str1[0]);
console.log(str1[4]);
console.log("---------------------------");

for(let i=0;i<str1.length;i++){
    console.log(str1[i]);
}

//* String Methods- Various methods used to perfrom various action on Strings

//^ length()
//~Syntax- string.length()

//^ charAt()- REturns the character at specified Index.
//~ string.charAt(2)

//^ concat- It conacts multiple strings
//~ string.concat()

console.log("------String-print-length()-chraAt-concat()---------------------");
let str2 = "Absolute"
console.log("String str2:"+str2);
console.log("length of str2:"+str2.length);
console.log("Character at Index 3 of str2:"+str2.charAt(3));
console.log("Concat 'Cinema' with str2:"+str2.concat("Cinema"));
console.log("String str2:"+str2);

//^ includes()- Checks if the substring is present in the string
//~Syntax- string.includes(substring)

//^ indexOf() - returns the first occurrance of substring
//~Syntax- string.indexOf(substring)

//^ stratsWith() - checks weather String starts with specified substring or not
//~syntax- string.startsWith(substring)

//^ endsWith() - checks weather String ends with specified substring or not
//~syntax- string.endsWith(substring)

console.log("------String-includes()-indexOf()-startsWith()-endsWith()---------------------");
let str3 = "I am learning Playwright with Javascript";
console.log("String str3:"+str3);
console.log("Check str3 contains word learn:"+str3.includes("learn"));
console.log("Check str3 contains word LEARN:"+str3.includes("LEARN"));
console.log("Get index of occurrance of learn in  str3:"+str3.indexOf("learn"));
console.log("Check weather str3 strat with I am:"+str3.startsWith("I am"));
console.log("Check weather str3 ends with script:"+str3.endsWith("script"));

console.log("----Verify mail by checking it has @gmail.com----");
let email = "xyz@gmail.com";
if(email.endsWith("@gmail.com")?console.log(`${email} is Valid email id`):console.log(`${email} is Invalid email id`));

//^ Display- successful for file upload with extension .png .Failure for all other extensions
console.log("----Verify File Upload----");
let photo = "xyz.pdf"
let panCard = "pancard.pdf"
let adharCard = "adharCard.png"

if(photo.endsWith(".png")?console.log(`photo is uploded successfully`):console.log(`photo upload failed`));
if(panCard.endsWith(".png")?console.log(`panCard is uploded successfully`):console.log(`panCard upload failed`));
if(adharCard.endsWith(".png")?console.log(`adharCard is uploded successfully`):console.log(`adharCard upload failed`));

// console.log("----Verify File Upload 2----");
// let file = prompt("Enter file name:");
// if(file.endsWith(".png")||file.endsWith(".jpeg")||file.endsWith(".jpg")){
//     console.log("File uploaded successfully");
// }else{
//     console.lof("File upload failed");
// }

//^ Slice vs Splice
//& Slice supports negative indexing.It return a part of current String as .It cannot modify the String.
//& Splice doesnot supports negative indexing.It returs a partof current String.It cannot modify the String.
console.log("------------Slice vs Splice--------------");
let name = "Cristiano Ronaldo";
console.log("Actual String:"+name);
console.log("negative indexing with slice.Ending Index- -7:"+name.slice(-7));
console.log("negative indexing with substring.Ending Index- -7:"+name.substring(-7));
console.log("positive indexing with slice.Positive Index:"+name.slice(0,9));
console.log("positive indexing with substring.Positive Index:"+name.substring(0,9));
console.log("positive indexing with slice.Positive Index:"+name.slice(0,8));
console.log("positive indexing with substring.Positive Index:"+name.substring(0,8));
console.log("positive indexing with slice.Positive Index:"+name.slice(9));
console.log("positive indexing with substring.Positive Index:"+name.substring(9));

//^ Split- Splits the string into array based on the delimiter.
//~ String.split("delimiter")
console.log("--------Split Method-------");
let name2 = "Cristiano.Ronaldo"
console.log("Actual String:"+name2);
console.log("Splitting with delimiter .:"+name2.split("."));
let name2Arr = name2.split(".");
console.log("Split method is returning Array:"+name2Arr);
console.log(name2.split("."));
let entity = "Corporation";
console.log(entity.split("o"));

//^ Replace vs ReplaceAll
//~ String.rplace(" "."-")- replaces first occurrance.
//~ String.replaceAll(" ","-")-rplaces all occurrances.
//& Give a Paragraph and Change all the blank spaces with hiphens.
console.log("---------------rplace all spaces with hiphen-----");
let para = `For several generations, stories from Africa have traditionally been passed down by word of mouth.
 Often, after a hard day’s work, the adults would gather the children together by moonlight, 
 around a village fire and tell stories. This was traditionally called 'Tales by Moonlight'.
  Usually, the stories are meant to prepare young people for life, and so each story taught a lesson or moral.`

  console.log(para.replaceAll(" ","-"));

  console.log("-----------Display each word of Strinng as Array Elements----------");
  let str = "India is my country,All indians are my brothers and sisters"
  console.log("String:"+str)
  console.log(str.split(" "));
  
  console.log("--reverse a string-----------");
  let val = "Mark";
  console.log("String:"+val);
  let strArr = val.split("");
  console.log("String Array:"+strArr);
  strArr.reverse();
  console.log("Reversed Array:"+strArr);
  console.log("Reversed String:"+strArr.join(""));

  console.log("-----reversing string by chaining methods-------");
  console.log(val.split("").reverse().join(""));

