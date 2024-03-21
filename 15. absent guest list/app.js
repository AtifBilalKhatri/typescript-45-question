"use strict";
let guestList = ['Jawwad Rajput', 'Zain Rajar', 'Zeeshan',];
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear friend, ' + guestList[i] + '\n\n\tI am glad to invite you in my private party \n\n regards Atif \n\n\n');
}
let absent_guest = 'Jawwad Rajput';
let new_guest = 'Abdur Rafay';
guestList[0] = new_guest;
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear friend, ' + guestList[i] + '\n\n\tI am glad to invite you in my private party \n\n regards Atif \n\n\n');
}
console.log(`Mr. ${absent_guest} is unable to attend our party.`);
