"use strict";
let ordinal_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of ordinal_Number) {
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "nd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}
