//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.


let pName = "musTansar";

console.log("Upper case :",pName.toUpperCase());
console.log("Lower Case :",pName.toLowerCase());

console.log("Title Case: " + pName[0].toUpperCase() + pName.slice(1).toLowerCase());


// if the name consists of many words then....... see below

let secondName: string ='aAmIR aHMeD shAMsi';

console.log("Upper case :",secondName.toUpperCase());
console.log("Lower Case :",secondName.toLowerCase());

let toTitleCase: string[] = secondName.split(" ");  //to convert a string into an array 
let titleCase2: string[] = toTitleCase.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
let result:string = titleCase2.join(" ");
console.log(`Title Case : ${result}`);




