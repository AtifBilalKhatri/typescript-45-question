

let magician:string[] = ['Hamoon jadugar','Ainak wala jin','Umro ayar','Zakota jin'];

function copyarray(arr:string[]){
    return [...arr];
}


function great_magician(magicianArray:string[]){
    
    for (let i = 0; i<magicianArray.length;i++){

        magicianArray[i] = 'The great ' + magicianArray[i]
    }

}
function    show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

const copymagicanarray  = copyarray(magician);
great_magician(copymagicanarray);

console.log('\nThis is my orignal arary\n ')
show_magicians(magician);


console.log(' \nThis is my modified  arary\n ')
show_magicians(copymagicanarray);