let users : string[] = ['admin','amaan','iqbal','saad','fehar','owais'] 

for (let user of users){
    if(user === 'admin'){
        console.log("\n Hello admin, would you like to see a status report \n")
    }else{
        console.log(`Hello ${user}, thank you for logging in again. \n`)
    }
}


