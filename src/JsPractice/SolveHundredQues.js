// =========================== 🟢 Beginner Level (1–30) ===========================================

// Q.1 Print "Hello World" in JavaScript ?
// console.log("hello world");

// Q.2 Declare a variable using var, let, and const ?
// var a = "ayush";
// let b = "ayush";
// const c = "ayush";

// console.log(a,b,c);

// Q.3 What is the difference between let, var, and const ?
// var is a function scoped variable and let and const are block scoped

// var can be reassigned and redeclared.
// var a = 12;
// var a=15;
// var a = 18
// console.log(a); // 18;

// let can be reassigned but can not be redeclared in the same scope.
// let a = 12;
// a = 15;
//console.log(a) // 15

// const can not reassigned and can not be redeclared and must be initialized when declared.
// const a;
// const a = 12;

// Q.4 Create variables of different data types
// let a = 12;
// let b = "string";

// Q.5 Check the type of a variable using.
// let a = 14;
// console.log(typeof a);

// Q.6 Write a function to add two numbers
// function addTwoNumbers(a,b){
// console.log(a+b);
// }

// addTwoNumbers(2,3)

// Q.7 Write a function to subtract two numbers
// function subtractNum(a,b){
// console.log(a-b);
// }
// subtractNum(5,3)

// Q.8 Swap two variables using a third variable;
// let a = "hello";
// let b = "ayush";

// let c = a; // hello;
//  a = b; // ayush;
//  b = c; // hello

//  console.log(a);
//  console.log(b);

// Q.9 Swap two variables without using a third variable;
// using destructuring

// let a = 20;
// let b = 10;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

// without destructuring
// let a = 20;
// let b = 10;

// a = a - b;
// b = a + b;

// console.log(a);
// console.log(b);

// Q.10 Find the largest of two numbers ? 
// function findLargest(a,b){
// if(a > b){
//     console.log("a is greatest number")
// }else{
//     console.log("b is greatest number")
// }
// }
// findLargest(15,10)

// Q.11 Find the largest of three numbers ?
// function largetsFromThree(a,b,c){
// if(a > b && a > c){
//     console.log("a is greater")
// }else if(b > c && b > a){
//     console.log("b is greater")
// }else {
//     console.log("c is greater")
// }

// let greater = Math.max(a,b,c);
// console.log(greater,"is greater")
// }

// largetsFromThree(45,10,22);

// Q.13 Find the largest of three numbers with math.max ?
// function largetsFromThree(a,b,c){
// let greater = Math.max(a,b,c);
// console.log(greater,"is greater")
// }

// largetsFromThree(45,10,22);

// Q.14 Check if a number is even or odd

// function checkEvenOdd(num){
// if(num % 2 === 0){
//     console.log(num,"is a an even number")
// }else{
//     console.log(num,"is an odd number")
// }
// }

// checkEvenOdd(2)

// Q.15 Check if a number is positive, negative, or zero ?

// function checkNegativePositiveNum(num){
// if(num > 0){
//     console.log("number is positive")
// }else if(num === 0){
//     console.log("number is zero")
// }else{
//     console.log("number is negative")
// }
// }
// checkNegativePositiveNum(0);

// Q.16 Convert string to number ?
// let str = "Ayush";
// console.log(typeof (Number(str)) );

// Q.17 Convert number to string ?
// let num = 18;
// console.log(typeof (String(num)));

// Q.18 Concatenate two strings ?
// let a = "Ayush";
// let b = "Yadav";
// console.log(a + " " + b);

// Q.19 Find length of a string
// let findLngth = "Ayush Yadav";
// console.log(findLngth.length);

// Q.20 Convert string to uppercase
// let lower = "ayush";
// console.log(lower.toUpperCase());

// Q.21 Convert string to lowercase
// let lower = "AYUSH";
// console.log(lower.toLowerCase());

// Q.22 Extract a substring ? 
// let str = "String";

// console.log(str.slice(0,3));

// Q.23 Replace a word in a string ?
// let str = "String is a text written in quotes";

// str = str.replace("quotes","commas");
// console.log(str);

// Q.24 Check if a string contains a word ?
// let checkLetter = "check if it contains";

// checkLetter = checkLetter.includes('contains');
// console.log(checkLetter);

// Q.25 Reverse a string ?
// let reverseStr = "Reverse";

// reverseStr = reverseStr.split("").reverse().join("");
// console.log(reverseStr);

// Q.26 Check if a string is palindrome ? 
// function checkPalindrome(str){
// let reversePalindrome = str.split("").reverse().join("");

// if(str === reversePalindrome){
//     console.log("It is a Palindrome")
// }else{
//     console.log("It is not a Palindrome")
// }
// }

// checkPalindrome("car");

// Q.27 Print numbers from 1 to 10 using loop
// for(let i = 1; i<=10;i++){
//     console.log(i);
// }

// Q.28 Print even numbers from 1 to 50
// for(let i = 1; i<=50;i++){
//     if(i % 2 === 0){
//         console.log(i,"The number is even");
//     }else{
//         console.log("It is not a even number");
//     }
// }

// Q.29 Sum of first N numbers ? 
// function sumOfNnum(n){
//  let calc = (n*(n+1)/2)
//  console.log(calc)
// }

// sumOfNnum(5)

// Q.30 Factorial of a number ?
// function findFactorial(n){
// let result = 1;
// for(let i = 1;i<=n;i++){
//     result = result*i;
// }
// console.log(result);
// }

// findFactorial(4);

// Q.31 Multiplication table of a number ?

// function findTable(n){
// for(let i = 1;i<=10;i++){
// console.log("2 * " + i + "=" + (i*n));
// }
// }
// findTable(2);

// Q.32 Count digits in a number ?
// function countDigits(n){
// let convert = n.toString();
// console.log(convert.length);
// }
// countDigits(123)

// Q.33 Find sum of digits ?
//   let sum = 0;
// for(let i = 1;i<=100;i++){
//    sum = sum + i;
// }
// console.log(sum);

// Q.34 Find largest element in an₹ array ?
// let largeElem = [1,2,5,14]
// let largest = Math.max(...largeElem);
// console.log(largest);

// let max = largeElem[0];

// for(let i = 1;i<=largeElem.length;i++){
//     if(largeElem[i] < max){
//         max = largeElem[i];
//     }
// }

// console.log(max);