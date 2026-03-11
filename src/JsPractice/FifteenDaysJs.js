// ======================================== VARIABLES AND BASIC OPERATIONS ============================

1.// How to swap any 2 numbers using a third variable.=========================

// let a = 10;
// let b = 20;

// let temp = a;//10

// a = b;//20
// b = temp;//10

// document.write("a ",a ,"<br/>")
// document.write("b ",b)

2.// How to swap any 2 numbers without using a third variable. =====================

// let a = 10;
// let b = 15;

// a = a+b//25
// b = a-b//10

// a = a-b//15

// document.write("a",a)
// document.write("b",b)

3.// Find the square of a number.=====================

// function greet(n){
//  document.write(n*n);
// }

// greet(2)

3.// Find the square of number from 1 to 10. ============================
// for (let i = 1; i<=10;i++){
//     document.write(i*i,"<br/>")
// }

4.// ================ Find the cube of a number ===========================
// function greet(n){
// document.write(n*n*n,"<br/>")
// }
// greet(2)

5.// ================ Find the cube of a number ===========================
// for(let i=1;i<=10;i++){
//     document.write(i*i*i,"<br/>")
// }

6.// ================ Convert celcius to farenhite ========================
// formula of Farenhite to Celcius = (Celcius - 1.8) + 32;

// let celcius = 10;
// let f = (celcius * 1.8) + 32;

// document.write(f);

7.// ================ Convert Farenhite to celcius ========================
// formula of Celcius to Farenhite = (Farenhite - 32) / 1.8
// let farenhite = 50;
// let celcius = (farenhite - 32)/1.8;

// document.write(celcius);

8.// ================ How to find out simple interest =======================
// formula of SimpleInterest = (amount * rate * time) / 100
// let amount = 2000;
// let rate = 5;
// let time = 3;

// let simpleInterest = (amount * rate * time) / 100;

// document.write(simpleInterest);

9.//================= How to find the area of circle ==========================

// formula of areaOfCircle = πr2 (22/7);
// let r = 10;
// let areaOfCircle = (22/7*(r*r));

// document.write(areaOfCircle);

//================   CONDITIONAL STATEMENTS =================================

10.// Check if number is even or odd.

// function checkEvenOdd(a){
// if(a % 2 === 0 ){
//     document.write("the given number is even")
// }else{
//     document.write("the given number is odd")
// }
// }

// checkEvenOdd(3)

// for(let i = 1;i<=10;i++){
//     if(i % 2 === 0){
//         document.write("the number is even <br/>")
//     }else(
//         document.write("the given number is odd <br/>")
//     )
// }

11.//=================== Find out given is negative or positive integer =======================

function checkPositiveNegative(num){
if(num >= 0){
document.write("the given number is positive")
}else{
    document.write("the given number is negative")
}
}

checkPositiveNegative(-5);
