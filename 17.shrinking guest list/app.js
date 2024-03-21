"use strict";
let guestList = ['Jawwad Rajput', 'Zain Rajar', 'Zeeshan',];
// for (let i=0; i<guestList.length; i++ ){
//     console.log('Dear friend, '+ guestList[i] + '\n\n\tI am glad to invite you in my private party \n\n regards Atif \n\n\n'
// ) 
// }
let absent_guest = 'Jawwad Rajput';
let new_guest = 'Abdur Rafay';
guestList[0] = new_guest;
// for (let i=0; i<guestList.length; i++ ){
//     console.log('Dear friend, '+ guestList[i] + '\n\nI am glad to invite you in my private party \n\n regards Atif\n\n'
// ) 
//}
console.log(`Mr. ${absent_guest} is unable to attend our party.`);
console.log('Good news ! we find big table for dinner so we are inviting 3 more guest.');
guestList.unshift('sumaira');
guestList.splice(2, 0, 'Shabih Fatima');
guestList.push('Kashisf');
for (let i = 0; i < guestList.length; i++) {
    console.log('dear friend , ' + guestList[i] + '\n\nI am glad to invite you in my private party \n\n regards Atif\n\n');
}
console.log('sorry we are unable to arrange big table , sooon we will invite you when we have big table');
while (guestList.length > 2) {
    let remove_guest = guestList.pop();
    console.log(`sorry dear , ${remove_guest} you are not invited to party `);
}
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear mr/mrs ' + guestList[i] + '\n\nyou are invited in our dinner party \n\n');
}
guestList.splice(0, 2);
console.log(guestList);
