
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/



// .... old code below from excercise 15.......

var guests = ["saleem", "waqas", "Baji", "Farhan"]; // initail guests list
console.log("old guests list :", guests + "\n");

var notComing = guests.indexOf('Baji'); //finding the index number of " Baji" in the list
//console.log(notComing);  //printed the index number for ease of coding

var newList = guests.splice(notComing, 1, "Usman Chacha"); //used splice  method to append an item in an array at a specific index
console.log("Updated Guests list :", guests + "\n"); //printed new guests list


//.... Adding new guests......
guests.unshift("Anum");                  // adding  guest at the start of the array
guests.splice(guests.length/2,0,"Ayesha"); // adding huest at the middle of an array
guests.push("Sir Qasim");                   // adding guest the the end of an array

//.......message section......

for (var i = 0; i < guests.length; i++) { // for loop generated for generating index number
    console.log(`Hello ${guests[i]}, I would like to invite you on my Graduation Dinner. \n`);
}

// guests.forEach(function(person)
// {
// return console.log(`${person}, I request you to join me on Dinner to celebrate my Graduation \n`);
// });
console.log(" \t We found bigger table so more guests are invited");

console.log("you can invite only two people for dinner.");

while (guests.length > 2 ){
    let removeGuest = guests.shift();

        console.log(` ${removeGuest} I am sorry i can't invite you to dinner bacuase of unavaiability of table.`);
    }
console.log(guests);

// Message for 2 people 
let newMsg =guests.forEach(function (iguest){
    console.log(` Dear ${iguest} , You are still Invited `)
   
});
// removing remaining 2 guests.
guests.splice(0,2);
//checking that the array is empty or not
console.log(guests);