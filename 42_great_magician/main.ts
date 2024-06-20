let magician:string[] = ['Hamoon jadugar','Ainak wala jin','Umro ayar','Zakota jin'];

function great_magician(magicianArray:string[]){
    
    for (let i = 0; i<magicianArray.length;i++){

        magician[i] = 'The great ' + magicianArray[i]
    }

}
function    show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
great_magician(magician);
show_magicians(magician);
