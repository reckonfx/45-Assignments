// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
// .... old code below from excercise 15.......
var guests = ["saleem", "waqas", "Baji", "Farhan"]; // initail guests list
console.log("old guests list :", guests + "\n");
var notComing = guests.indexOf('Baji'); //finding the index number of " Baji" in the list
//console.log(notComing);  //printed the index number for ease of coding
var newList = guests.splice(notComing, 1, "Usman Chacha"); //used splice  method to append an item in an array at a specific index
console.log("Updated Guests list :", guests + "\n"); //printed new guests list
//.... Adding new guests......
guests.unshift("Anum"); // adding  guest at the start of the array
guests.splice(guests.length / 2, 0, "Ayesha"); // adding guest at the middle of an array
guests.push("Sir Qasim"); // adding guest the the end of an array
//.......message section......
// for (var i = 0; i < guests.length; i++) { // for loop generated for generating index number
//     console.log(`Hello ${guests[i]}, I would like to invite you on my Graduation Dinner. \n`);
// }
//2nd way to generate message by using foreach method.
guests.forEach(function (loop) { return console.log("Hello ".concat(loop, ", I would like to invite you on my Graduation Dinner. \n")); });
// guests.forEach(function(person)
// {
// return console.log(`${person}, I request you to join me on Dinner to celebrate my Graduation \n`);
// });
console.log(" \t We found bigger table so more guests are invited");
