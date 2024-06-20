let current_user:string[] = ['Atif', 'Zain','Jawwad','hamza','Umair'];
let new_user:string[] = ['Atif','kamran','raheel','zain','zohaib'];

new_user.forEach(newUserName => 
    {
    let lowercase:string =newUserName.toLowerCase();
    if(current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUserName} is not avaialble.Please write another username .`);
    }
    else{
        console.log(`This uusername ${newUserName} is available.`)
    }
    }
)