"use strict";
const usernames = ["Admin", "Atif", "Zain", "Khurram", "Ahmed"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("hello Admin , would you like to see a status report ?");
    }
    else {
        console.log(`hello ${usernames[i]}, thanks for logging in again .`);
    }
}
// using foreach mathod .
console.log("\n\nin bellow result we are using foreach method and print are desire results.\n\n");
usernames.forEach(userName => {
    if (userName === "Admin") {
        console.log("hello Admin , would you like to see a status report ?");
    }
    else {
        console.log(`hello ${userName}, thanks for logging in again.`);
    }
});
