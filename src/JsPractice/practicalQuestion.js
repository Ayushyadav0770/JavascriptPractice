// Write a program that determines if a person is eligible to drive or not based on their age and having valid driving license?

// let age = 18;
// let hasDrivingLicense = true;

// if(age >= 18 && hasDrivingLicense){
//     document.write("Congratulations! You are eligible to drive")
// }else{
//     document.write("You are below 18, Can't drive.")
// }

// ==========================
// Let say you have a variable score representing a students score. If the score is greateer than or equal to 60
// the student passes if it is less than it student fails, use the ternary operator to determine the result.

// let score = 65;

// let result = score > 60 ? "Pass" : "Fail";

// document.write(result);

// ==========================
// What will be the output of given values;
// console.log("5"-3); // 2
// console.log(2 < 12 < 5) // true always start from left to right like 2 is smaller then 12 which is = true, then true is less than 5 means 1 < 5 that is also true.
// so always start from left to right.
// console.log("20"+10+10)// 201010 because when there is "" and + operator than merge means "20"+10 = 2010+10 = 201010. 

// ======== Print numbers from 1 to 10.  ==============

// for(let i = 1 ; i <=10;i++){
//     document.write(i)
// }

// ======== Print all even numbers between 1 to 50 ========

// for (let i = 1;i<=50;i++){
//     if(i % 2 == 0){
//      document.write(i,"<br/>");   
//     }
// }

// ======== find sum of numbers from 1 to 100 =============

// let sum = 0;
// for(let i = 1;i<=100;i++){
//     sum = sum + i;
// }
// document.write(sum)

// ======== Write a function to check if a number is even or odd ==============

// function greet(a){
// if(a % 2 == 0){
//     document.write("Even")
// }else{
//     document.write("Odd")
// }
// }

// greet(3);

// ======== find the prime number from 1 to 50 =================

for(let i = 2;i<=50;i++){
    let isPrime = true;
    for(let j = 2; j < i;j++){
        if(i % j == 0){
            isPrime = false
            break;
        }
    }
    if(isPrime){
  document.write(i)
    }
  
}