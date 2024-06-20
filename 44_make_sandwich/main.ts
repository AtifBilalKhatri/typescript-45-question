function make_sandwich(item:string[]){
    console.log('\nmaking your sandwich with : ');
    item.forEach(element => console.log('- '+ element));
    console.log('\nEnjoy your sandwich .');

}

make_sandwich(['chicken','cheese','mayo']);

make_sandwich(['beef','pickels','garlic mayo']);

make_sandwich(['letus','cheese']);
