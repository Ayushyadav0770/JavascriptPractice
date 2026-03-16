//============================ WHILE LOOP ==============================================
// In simple language, a while loop can be called keep doing something WHILE a condition becomes true.
// When the condition becomes false the loop stops.
// So basically a while loop runs until a certain condition becomes false

// let i = 0;

// while(i <= 10){
//     console.log(i);
//     i++;
// }

// Imagine you have five candies,You say while i still have candies i will eat one.

// let candies = 5;
// Jab tak 5 matlab candy badi hai 0 se to 1 se minus kr do mtlb 5 > 0 so 5-1 = 4 now 4 > 0 so 4-1 = 3 so jb tak condition 
// false nhi hoti tb tak ye loop chlega.
// while( candies > 0){
//     console.log(candies,"You have eaten a candy");
//     candies--;
// }

// =========== 1️⃣ Basic While Loop Questions ===============
1.//Print numbers from 1 to 10

// let i = 1;

// while(i <= 10){
//     console.log(i);
//     i++;
// }

2.// Print number from 1 to 10 in reverse.
//  let i = 10;
//  while(i>=1){
//     console.log(i);
//     i--;
//  }

3.// Print even numbers from 1 to 20
// let evenNum = 1;
// while(evenNum <= 20){
//     if(evenNum % 2 === 0){
// console.log(evenNum);

//     }
// evenNum++;
// }

4.//Print odd numbers from 1 to 20

// let oddNum = 1;

// while(oddNum <=20){
//     if(oddNum % 2 !== 0)
//     {
//         console.log(oddNum);
//     }
//     oddNum++;
// }

5.// Find sum of numbers from 1 to 10
// let num = 1;
// let sum = 0;

// while(num <= 10){
//     sum += num; // sum = sum + num
//     num++;
// }
// console.log("The sum of numbers from 1 to 10 is:",sum);

// 6.Write table of 5 ;

// let num = 1;

// while(num <= 10){
//     console.log(num * 5);
//     num++;
// }

for(let i = 1; i <=10;i++){
    console.log(i*12);
}