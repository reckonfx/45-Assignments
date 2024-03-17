//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

//let's suppose Baji can't make it to join us on Dinner

let guests : string[] = ["saleem","waqas","Baji","Farhan"]; // initail guests list
console.log("old guests list :",guests +"\n");

let notComing : number = guests.indexOf('Baji'); //finding the index number of " Baji" in the list

//console.log(notComing);  //printed the index number for ease of coding

let newList : string[] = guests.splice(notComing,1,"Usman Chacha"); //used splice  method to append an item in an array at a specific index
console.log("Updated Guests list :",guests +"\n");     //printed new guests list

for (let i: number=0;i<guests.length;i++){  // for loop generated for generating index number
    console.log(`Hello ${guests[i]} , i would like to invite you on my Graduation Dinner. \n`);

}

console.log(" Baji in unable to join us on Graduation Dinner");