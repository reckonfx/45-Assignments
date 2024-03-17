/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.




• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */


//• Make a list of five or more usernames called current_users.

let current_users: string[] = ["admin1","admin2","Aamir123","sallumana11","shamsi999"];

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users: string[] = ["admin1","Aamir123","Abdullah11","Arham786","Ayesha888"];

new_users.forEach(newuser =>{
    if (current_users.some(currentUser => currentUser.toLowerCase() == newuser.toLowerCase())){
        console.log(`${newuser} will need to enter a new username`)
    }else{
        console.log(`${newuser} is avaiable`);
    }

})

