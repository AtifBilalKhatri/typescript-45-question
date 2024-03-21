let guestList : string[] = ['Jawwad Rajput','Zain Rajar','Zeeshan',];



// for (let i=0; i<guestList.length; i++ ){

//     console.log('Dear friend, '+ guestList[i] + '\n\n\tI am glad to invite you in my private party \n\n regards Atif \n\n\n'
// ) 
// }

let absent_guest :string = 'Jawwad Rajput';
let new_guest :string = 'Abdur Rafay';
guestList[0] = new_guest

for (let i=0; i<guestList.length; i++ ){

    console.log('Dear friend, '+ guestList[i] + '\n\nI am glad to invite you in my private party \n\n regards Atif\n\n'
) 
}
console.log(`Mr. ${absent_guest} is unable to attend our party.`);
console.log('Good news ! we find big table for dinner so we are inviting 3 more guest.');
guestList.unshift('sumaira');
guestList.splice(2,0 ,'Shabih Fatima');
guestList.push('Kashisf');

for (let i=0; i<guestList.length; i++){

console.log('dear friend , ' + guestList[i]+ '\n\nI am glad to invite you in my private party \n\n regards Atif\n\n'
)  

}
