"use strict";
let magician = ['Hamoon jadugar', 'Ainak wala jin', 'Umro ayar', 'Zakota jin'];
function great_magician(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
great_magician(magician);
show_magicians(magician);
