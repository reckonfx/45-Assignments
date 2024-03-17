//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let names: string[] = ["aamir123","salllu202","kamran000","anam121","admin"];

names.forEach(check=>{console.log(`Helloo ${check} how are you today ?`)});

    
    
    

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//first solution.......

for ( let i=0;i<names.length;i++){
    if (names[i] == "admin"){
        console.log(`Hello  ${names[i]} , Hello Admin,would you like to see the status report`);
    } else{
        console.log(`Hello  ${names[i]} , thanks for logging in again`);
}
}
// ..... second solution.....




// for ( const username of names){
//     if (username.toLowerCase() === "admin" ){
//         console.log('Hello Admin, would you like to see status report');
//     } else{
//         console.log(`Hello ${username} , thanks for logging in again`)
//     }
// }
