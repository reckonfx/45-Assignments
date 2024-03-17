//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
var fNames = ["aamir", "salman", "Abdullah", "Abdul Hadi", "saleem"];
var x = "";
for (var i = 0; i < fNames.length; i++) { //generating index number in i veriable
    console.log(" Helllo ".concat(fNames[i], " , how are you today "));
}
fNames.forEach(function (loop) { return console.log("".concat(loop, " , How are you doing today")); });
