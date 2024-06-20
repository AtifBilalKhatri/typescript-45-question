"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Hamoon jadugar', 'Ainak wala jin', 'Umro ayar', 'Zakota jin'];
function copyarray(arr) {
    return [...arr];
}
function great_magician(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicanarray = copyarray(magician);
great_magician(copymagicanarray);
console.log('\nThis is my orignal arary\n ');
show_magicians(magician);
console.log(' \nThis is my modified  arary\n ');
show_magicians(copymagicanarray);
