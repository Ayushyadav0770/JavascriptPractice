//======================== DATA TYPES IN JAVASCRIPT ========================//

//======================== Primitive Data Types ========================//

// A primitive data type in javascript is a basic type which stores a single value 
// (not a collection or object).

// ======= String =======
// String is used to store text/characters it is enclosed in single and double quotes.
// const name = "Ayush";

// ======= Number =======
// Number is used to store numeric values.
// const num = 42;

// ======= Boolean =======
// Boolean is used to store true or false values.
// const isTrue = true;

// ======= Null =======
// Null represents the intentional absence of any object value.
// const emptyVal = null;

// ======= Undefined =======
// Undefined represents a variable that has been declared but has not been assigned a value.
// const letUndefined;

// ======================= Non-Primitive Data Types ===================================

// Non-primitive data tpypes in Jvascript are those data types which can stoere store multiple
// values and complex data in simple language non-primitive data types store collection of data.

// Non primitive data type is also known as reference data type because when you create a non primitive data type
// and assign it to a variable, the variable holds a refrence of that data type not the actual value.

// ===================== Array =====================
// Array is a non-primitive data type that can store multiple values in a single variable.It is enclosed in sqaure brackets [] and each value is seperated by comma.
// const arr = [1,2,3,4,5];
// Example of reference data type
// const ayush = ["ayush","yadav"];
// const arr2 = ayush;

// console.log(ayush,"res1");
// arr2.push("ram");
// console.log(arr2,"res2");
// console.log(ayush,"res1");

// ==================== Object =====================
// Object is a non-primitive data type that can store multiple key-value pairs in a single variable. It is enclosed in curly braces {} and each key-value pair is seperated by comma.
// const obj = {
//   name:"Ayush",
//   age: 22,
//   city: "Delhi"
// }

// ==================== Function =====================
// Function is a non-primitive data type that can store a block of code that can be executed when called. It is defined using the function keyword followed by the function name and parentheses ().
// function greet(){
//  console.log("Hello, World!");}

// How to convert a number into string
// const myNum = 20;
// console.log(typeof (String(myNum)));
// another methood
// console.log(typeof (myNum + ""));

// How to convert a string into number
// const str = "20";
// console.log(typeof (Number(str)));
// another methood
// console.log(typeof (+"20"));

// ======================= ParseInt and ParseFloat =======================
// ParseInt and parsefloat both are usued to convert a string into number but parseInt is used to convert a string into integer and parseFloat is used to convert a string into floating point number.
const str1 = "20.5";
console.log((parseInt(str1)));
 


