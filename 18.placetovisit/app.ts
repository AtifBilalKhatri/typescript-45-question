// step 1 -Store the locations in a array. Make sure the array is not in alphabetical order.
// let class9g = ["rafay latif","qazi" , "rahman ", "Alyan ","ahmed"]

let placetovisit = [
    "tokyo",
    "germany",
    "france",
    "newyork",
    "korea"
]
// strp 2- Print your array in its original order.
console.log("orignal position");
console.log(placetovisit);

// step 3-  Print your array in alphabetical order without modifying the actual list
console.log ("\nin alphabetical order without modifying the actual list: \n");
console.log([...placetovisit].sort());

// Step 4- Show that your array is still in its original order by printing it.
console.log("\nStill in its original order.\n");
console.log(placetovisit);

// Step 5- Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\nreverse alphabetical order without changing the order\n");
console.log([...placetovisit].sort().reverse());

// step 6 -Show that your array is still in its original order by printing it again.

console.log("\nstill in its original order\n");
console.log(placetovisit);

// step 7 - Reverse the order of your list. Print the array to show that its order has changed.
placetovisit.reverse();
console.log("\nReverse the order \n")
console.log(placetovisit);

// step 8 - Reverse the order of your list again. Print the list to show it’s back to its original order.
placetovisit.reverse();
console.log("\noriginal order.\n")
console.log(placetovisit);

// step 9 - Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placetovisit.sort();
console.log("\nstored in alphabetical order\n");
console.log(placetovisit);

// step 10 -  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placetovisit.sort().reverse();
console.log(`\narray so it’s stored in reverse alphabetical order\n`);

console.log(placetovisit);
