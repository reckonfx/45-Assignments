//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
var pName = "musTansar";
console.log("Upper case :", pName.toUpperCase());
console.log("Lower Case :", pName.toLowerCase());
console.log("Title Case: " + pName[0].toUpperCase() + pName.slice(1).toLowerCase());
// if the name consists of many words then....... see below
var secondName = 'aAmIR aHMeD shAMsi';
console.log("Upper case :", secondName.toUpperCase());
console.log("Lower Case :", secondName.toLowerCase());
var toTitleCase = secondName.split(" "); //to convert a string into an array 
var titleCase2 = toTitleCase.map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); });
var result = titleCase2.join(" ");
console.log("Title Case : ".concat(result));
