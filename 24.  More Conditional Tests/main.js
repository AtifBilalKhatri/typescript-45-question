"use strict";
console.log("Equality test with string : ", "apple" === "apple");
console.log("Inequality test with string : ", "apple" != "orange");
// Test using the lower case function.
console.log("lower case function test : ", "HELLO".toLowerCase() === "hello");
// Numerical test involving equality and inequality 
console.log("equality test with number : ", 26 === 26);
// Numerical test involving inequality
console.log("Inequality test with number : ", 26 != 36);
// Greater than test   
console.log("greater than test : ", 10 > 9);
// Less than test 
console.log("less than test : ", 9 < 19);
// Greater than or equals to 
console.log(" greater than or equal to test : ", 10 >= 10);
// Less than or equals to 
console.log("Less than or equals to : ", 13 <= 15);
//Test using "and"  operator.
console.log("Using And operator ", 10 === 10 && 6 > 2);
// Test using "or" operator.
console.log("Using And operator ", (10 === 9) || 6 > 2);
//Test weather an item is in array
const fruits = ["apple", "orange", "mango"];
console.log("weather an apple is in array : ", fruits.includes("apple"));
//Test weather an item is not in arra
console.log("weather an tomato is not in array : ", !fruits.includes("tomato"));
