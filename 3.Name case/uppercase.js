"use strict";
let personName = "AtiF BilAL";
//lowercase
console.log("Lower case : ", personName.toLowerCase());
//upper case 
console.log("Upper case : ", personName.toUpperCase());
//tittle case 
console.log("Title case : ", personName.replace(/\b\w/g, c => c.toUpperCase()));
