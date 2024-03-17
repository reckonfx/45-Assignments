/*Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
var fNames = ["aamir", "salman", "Abdullah", "Abdul Hadi", "saleem"];
console.log(fNames[0]);
console.log(fNames[1]);
console.log(fNames[2]);
console.log(fNames[3]);
console.log(fNames[4] + "\n");
// second way to do this task by for loop below
var x = "";
for (var i = 0; i < fNames.length; i++) {
    x += fNames[i] + "\n";
}
console.log(x);
